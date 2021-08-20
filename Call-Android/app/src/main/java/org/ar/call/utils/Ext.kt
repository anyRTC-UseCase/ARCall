package org.ar.call.utils

import android.app.Activity
import android.content.Intent
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

