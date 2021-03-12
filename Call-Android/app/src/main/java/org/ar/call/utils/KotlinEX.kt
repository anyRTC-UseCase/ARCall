package org.ar.call.utils

import android.app.Activity
import android.util.Log
import android.widget.Toast
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.LifecycleOwner
import kotlinx.coroutines.*
import org.ar.call.CallApp
import kotlin.coroutines.CoroutineContext
import kotlin.math.roundToInt

fun Activity.toast(str: String) {
    Toast.makeText(CallApp.callApp.applicationContext,str, Toast.LENGTH_SHORT).show()
}

fun Float.dp():Int{
    return (this * CallApp.callApp.resources.displayMetrics.density).roundToInt()
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
        error_?.let { it(e) }
    }
}


/**
 * 默认主线程的协程
 * 添加生命周期管理
 */
fun launchWithLife(
    life: LifecycleOwner?,
    block: suspend (CoroutineScope) -> Unit,
    error_: ((e: Throwable) -> Unit)? = null,
    context: CoroutineContext = Dispatchers.Main
) {
    val job = launch(block, error_, context)

    life?.lifecycle?.addObserver(object : LifecycleEventObserver {
        override fun onStateChanged(source: LifecycleOwner, event: Lifecycle.Event) {
            if (life.lifecycle.currentState == Lifecycle.State.DESTROYED) {
                job.cancel("the lifecycleOwner(${life.javaClass.simpleName}) has been destroyed")
                return;
            }
        }
    })
}