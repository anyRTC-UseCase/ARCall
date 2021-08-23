package org.ar.call.ui

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider

import androidx.lifecycle.ViewModel
import android.app.Activity
import android.app.Application
import android.view.WindowManager
import com.google.gson.Gson
import com.kongzue.dialogx.dialogs.TipDialog
import com.kongzue.dialogx.dialogs.WaitDialog
import org.ar.call.*
import org.ar.call.utils.ScreenUtils
import org.ar.call.vm.GlobalVM
import org.ar.call.vm.RtmEvents
import org.ar.rtm.RemoteInvitation
import org.json.JSONObject
import java.lang.IllegalStateException


open class BaseActivity : AppCompatActivity(), RtmEvents {

    protected val callViewModel by lazy { getApplicationScopeViewModel(GlobalVM::class.java) }
    private lateinit var applicationProvider:ViewModelProvider
    private var isReconnect = false
    protected val gson by lazy { Gson() }


    override fun onCreate(savedInstanceState: Bundle?) {
        ScreenUtils.adapterScreen(this, 375, false)
        super.onCreate(savedInstanceState)
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
            if (state == 4){
                isReconnect = true
                WaitDialog.show("正在重连...").setCancelable(false)
            }else if (state ==3){
                if (isReconnect) {
                    isReconnect = false
                    TipDialog.show("重连成功！", WaitDialog.TYPE.SUCCESS)
                }
            }
        }
    }

    override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
        runOnUiThread {
            if (this is P2PVideoActivity ||this is GroupVideoActivity){
                callViewModel.refuse(var1!!,JSONObject().apply {
                    put("Cmd","Calling")
                }.toString())
                return@runOnUiThread
            }
        }
    }



}