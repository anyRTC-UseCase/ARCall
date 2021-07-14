package org.ar.call

import android.content.Intent
import android.os.Bundle
import android.view.KeyEvent
import android.view.View
import androidx.fragment.app.FragmentActivity
import androidx.lifecycle.lifecycleScope
import com.gyf.immersionbar.ImmersionBar
import com.kongzue.dialog.interfaces.OnDialogButtonClickListener
import com.kongzue.dialog.util.BaseDialog
import com.kongzue.dialog.v3.MessageDialog
import com.kongzue.dialog.v3.TipDialog
import com.lzf.easyfloat.EasyFloat
import com.yanzhenjie.permission.AndPermission
import com.yanzhenjie.permission.runtime.Permission
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import org.ar.call.CallApp.Companion.callApp
import org.ar.call.databinding.ActivityMainBinding
import org.ar.call.multi.MultiCallActivity
import org.ar.call.p2p.CallActivity
import org.ar.call.p2p.VideoActivity
import org.ar.rtm.ErrorInfo
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.ResultCallback
import org.json.JSONObject
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine
import kotlin.system.exitProcess


class MainActivity : BaseActivity() {

    private lateinit var binding: ActivityMainBinding
    private var isLoginSuccess = false
    private var loginTipDialog: MessageDialog? = null


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        ImmersionBar.with(this).statusBarDarkFont(false, 0.2f).init()
        binding.tvUser.text="您的呼叫ID:${callApp.userId}"

        AndPermission.with(this)
                    .runtime()
                    .permission(Permission.WRITE_EXTERNAL_STORAGE, Permission.CAMERA, Permission.RECORD_AUDIO)
                    .onGranted { _: List<String?>? ->
                        lifecycleScope.launch {
                            login()
                        }
                    }
                    .onDenied {
                        TipDialog.show(this@MainActivity,"缺少必要权限",TipDialog.TYPE.ERROR)
                        RtmManager.instance.release()
                        RtcManager.instance.release()
                        exitProcess(0)
                        finish()
                    }
                    .start()

    }

    private suspend fun MainActivity.login() {
        val result = loginRtm()
        loginTipDialog?.doDismiss()
        if (result) {
            isLoginSuccess = true
            TipDialog.show(this@MainActivity, "登录成功！", TipDialog.TYPE.SUCCESS)
        } else {
            isLoginSuccess = false
            TipDialog.show(this@MainActivity, "登录失败！", TipDialog.TYPE.SUCCESS)
        }
    }


    private fun showLoginTip(){
        loginTipDialog = MessageDialog.build(this@MainActivity)
                .setTitle("提示")
                .setMessage("正在登录....")
                .setOnCancelButtonClickListener { _, _ ->
                    true
                }
                .setCancelable(false)
        loginTipDialog?.show()
    }

    private suspend fun loginRtm() = suspendCoroutine<Boolean> {
        showLoginTip()
        RtmManager.instance.getRtmClient()?.login("",callApp.userId,object :ResultCallback<Void>{
            override fun onSuccess(var1: Void?) {
                it.resume(true)
            }

            override fun onFailure(var1: ErrorInfo?) {
                it.resume(false)
            }

        })
    }

    private fun showExitDialog() {
        MessageDialog.show(this, "提示", "确定要退出吗？", "确定")
                .setCancelButton("取消") { baseDialog: BaseDialog, v: View? ->
                    baseDialog.doDismiss()
                    true
                }.onOkButtonClickListener = OnDialogButtonClickListener { baseDialog: BaseDialog, v: View? ->
            baseDialog.doDismiss()
            RtcManager.instance.release()
            exitProcess(0)
            finish()
            true
        }
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            showExitDialog()
            return true
        }
        return super.onKeyDown(keyCode, event)
    }

    fun single(view: View?) {
        if (isLoginSuccess) {
            val intent = Intent(this@MainActivity, CallActivity::class.java)
            startActivity(intent)
        }else{
            lifecycleScope.launch {
                login()
            }
        }
    }

    fun multiple(view: View?) {
        if (isLoginSuccess) {
            val intent = Intent(this@MainActivity, MultiCallActivity::class.java)
            startActivity(intent)
        }else{
            lifecycleScope.launch {
                login()
            }
        }
    }


    override fun onRemoteInvitationReceived(remoteInvitation: RemoteInvitation) {
        super.onRemoteInvitationReceived(remoteInvitation)
        runOnUiThread {
            if (EasyFloat.appFloatIsShow()){
                return@runOnUiThread
            }
                val jsonObject = JSONObject(remoteInvitation.content)
                val isConference = jsonObject["Conference"]

                Intent().apply {
                    putExtra("RecCall",true)
                    setClass(this@MainActivity,if (isConference==1||isConference==true){
                        MultiCallActivity::class.java
                    }else{
                        VideoActivity::class.java
                    })
                    startActivity(this)
                }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
    }
}