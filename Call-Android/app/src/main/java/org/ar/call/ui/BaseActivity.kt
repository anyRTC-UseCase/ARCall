package org.ar.call.ui

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider

import androidx.lifecycle.ViewModel
import android.app.Activity
import android.app.Application
import android.content.pm.ActivityInfo
import android.view.WindowManager
import androidx.lifecycle.lifecycleScope
import com.drake.statusbar.darkMode
import com.drake.statusbar.immersive
import com.google.gson.Gson
import com.kongzue.dialogx.dialogs.TipDialog
import com.kongzue.dialogx.dialogs.WaitDialog
import io.anyrtc.tanke.utils.Interval
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.ar.call.*
import org.ar.call.utils.ScreenUtils
import org.ar.call.utils.toast
import org.ar.call.vm.GlobalVM
import org.ar.call.vm.RtmEvents
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.RtmMessage
import org.json.JSONObject
import java.lang.IllegalStateException
import java.util.concurrent.TimeUnit


open class BaseActivity : AppCompatActivity(), RtmEvents {

    protected val callViewModel by lazy { getApplicationScopeViewModel(GlobalVM::class.java) }
    private lateinit var applicationProvider: ViewModelProvider
    private var isReconnect = false
    protected val gson by lazy { Gson() }
    private val interval by lazy { Interval(10, 1, TimeUnit.SECONDS, 1).life(this) }
    private val disconnectInterval by lazy { Interval(30, 1, TimeUnit.SECONDS, 1).life(this) }


    private var isReceiveResponse = false

    override fun onCreate(savedInstanceState: Bundle?) {
        ScreenUtils.adapterScreen(this, 375, false)
        super.onCreate(savedInstanceState)
        immersive()
        darkMode(false)
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        applicationProvider = ViewModelProvider(
            this.applicationContext as org.ar.call.CallApplication,
            getAppFactory(this)
        )
    }


    override fun onDestroy() {
        super.onDestroy()
        ScreenUtils.resetScreen(this)
    }

    protected open fun <T : ViewModel?> getApplicationScopeViewModel(modelClass: Class<T>): T {
        return applicationProvider.get(modelClass)
    }

    private fun getAppFactory(activity: Activity): ViewModelProvider.Factory {
        val application = checkApplication(activity)
        return ViewModelProvider.AndroidViewModelFactory.getInstance(application)
    }

    private fun checkApplication(activity: Activity): Application {
        return activity.application
            ?: throw IllegalStateException(
                "Your activity/fragment is not yet attached to "
                        + "Application. You can't request ViewModel before onCreate call."
            )
    }

    override fun onStart() {
        super.onStart()
        callViewModel.register(this)
    }

    override fun onConnectionStateChanged(state: Int, reason: Int) {
        super.onConnectionStateChanged(state, reason)
        runOnUiThread {
            if (state == 4) {
                isReconnect = true
                isReceiveResponse = false
                WaitDialog.show("正在重连...").setCancelable(false)
                if (callViewModel.isCalling){//如果正在通话中 断线了 30秒都没有重连成功
                    disconnectInterval.finish {
                        if (isReconnect) {
                            //如果重连了30秒都还没连上 则离开
                                lifecycleScope.launch {
                                    toast("网络连接断开")
                                    delay(1500)
                                    finish()
                                }
                        }
                    }.start()
                }
            } else if (state == 3) {
                if (isReconnect) {
                    isReconnect = false
                    disconnectInterval.cancel()
                    TipDialog.show("重连成功！", WaitDialog.TYPE.SUCCESS)
                    if (this is P2PVideoActivity && (callViewModel.isWaiting || callViewModel.isCalling)) {
                        //断网重连成功后 如果是p2p正在呼叫页面 则发送消息给对方
                        //判断是否继续等待被接听/接听/拒绝❌
                        //10秒没有任何消息返回 则退出
                        //收到对方说不在呼叫页面了 则退出
                        callViewModel.sendCallStateMsg()
                        interval.finish {
                            if (!isReceiveResponse){
                                toast("通话已结束")
                                callViewModel.finishCall()
                                finish()
                            }
                        }.start()
                    }
                }
            }
        }
    }

    override fun onMessageReceived(message: RtmMessage?, uid: String?) {
        super.onMessageReceived(message, uid)
        runOnUiThread {
                if (!message?.text.isNullOrEmpty()) {
                    val json = JSONObject(message?.text)
                    if (json.has("Cmd")) {
                        when(json["Cmd"]){
                            "CallState" ->{
                                interval.cancel()
                                callViewModel.sendCallStateResponseMsg(uid!!)
                            }
                            "CallStateResult"->{
                                isReceiveResponse = true
                                val state = json.getInt("state")
                                when(state){
                                    0 -> {//对方已结束通话
                                        toast("对方已挂断")
                                        callViewModel.finishCall()
                                        finish()
                                    }
                                    1 -> {//对方正在等待中
                                        //不处理
                                    }
                                    2 -> {//对方正在通话了
                                        if (callViewModel.isWaiting) {//如果本地还是在等待中 说明在断网期间 对方已经进入通话
                                            val mode = json.getInt("Mode")
                                            callViewModel.reSendAcceptCallback(mode)
                                        }
                                    }
                                }


                            }
                        }
                    }
                }
        }
    }


}