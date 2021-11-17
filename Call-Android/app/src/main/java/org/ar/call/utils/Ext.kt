package org.ar.call.utils

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.kongzue.dialogx.dialogs.TipDialog
import com.kongzue.dialogx.dialogs.WaitDialog
import kotlinx.coroutines.*
import java.net.SocketTimeoutException
import kotlin.coroutines.CoroutineContext
import kotlin.math.roundToInt
import android.content.ComponentName

import android.text.TextUtils

import android.content.pm.ResolveInfo





fun Activity.toast(text:String){
    Toast.makeText(this,text,Toast.LENGTH_SHORT).show()
}

fun Fragment.toast(text:String){
    Toast.makeText(activity,text,Toast.LENGTH_SHORT).show()
}

fun<T> Activity.go(clazz: Class<T>){
    startActivity(Intent().apply {
        setClass(this@go,clazz)
    })
}


fun<T> Activity.goAndFinish(clazz: Class<T>){
    startActivity(Intent().apply {
        setClass(this@goAndFinish,clazz)
        finish()
    })
}

fun View.gone(){
    this.visibility = View.GONE
}

fun View.show(){
    this.visibility = View.VISIBLE
}

fun Float.dp2px():Int{
    return (0.5f + this * org.ar.call.CallApplication.callApp.resources.displayMetrics.density).roundToInt()
}


/**
 * 默认主线程的协程
 */
fun launch(
    block: suspend (CoroutineScope) -> Unit,
    error_: ((e: Throwable) -> Unit)? = null,
    context: CoroutineContext = Dispatchers.Main
) = GlobalScope.launch(context + CoroutineExceptionHandler { _, e ->
    error_?.let { it(e) }
}) {
    try {
        block(this)
    } catch (e: Exception) {
        e.printStackTrace()
        if (e is SocketTimeoutException) {
        }
        error_?.let { it(e) }
    }
}

fun Activity.showError(text:String){
    TipDialog.show(this as AppCompatActivity,text, WaitDialog.TYPE.ERROR)
}

fun Activity.showSuccess(text:String){
    TipDialog.show(this as AppCompatActivity,text, WaitDialog.TYPE.SUCCESS)
}

fun <T> Boolean?.matchValue(valueTrue: T, valueFalse: T): T {
    return if (this == true) valueTrue else valueFalse
}

fun getPackageContext(context: Context, packageName: String?): Context? {
    var pkgContext: Context? = null
    if (context.getPackageName().equals(packageName)) {
        pkgContext = context
    } else {
        try {
            pkgContext = context.createPackageContext(
                packageName, Context.CONTEXT_IGNORE_SECURITY
                        or Context.CONTEXT_INCLUDE_CODE
            )
        } catch (e: PackageManager.NameNotFoundException) {
            e.printStackTrace()
        }
    }
    return pkgContext
}

fun getAppOpenIntentByPackageName(context: Context, packageName: String): Intent? {
    var mainAct: String? = null
    // 根据包名寻找MainActivity
    val pkgMag = context.packageManager
    val intent = Intent(Intent.ACTION_MAIN)
    intent.addCategory(Intent.CATEGORY_LAUNCHER)
    intent.flags = Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED or Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_BROUGHT_TO_FRONT
    val list = pkgMag.queryIntentActivities(
        intent,
        PackageManager.GET_ACTIVITIES
    )
    for (i in list.indices) {
        val info = list[i]
        if (info.activityInfo.packageName == packageName) {
            mainAct = info.activityInfo.name
            break
        }
    }
    if (TextUtils.isEmpty(mainAct)) {
        return null
    }
    intent.component = ComponentName(packageName, mainAct!!)
    return intent
}

fun getSpValue(key:String):Int{
    return SpUtil.get().getInt(key,2)
}
