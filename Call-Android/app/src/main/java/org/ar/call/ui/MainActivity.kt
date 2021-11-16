package org.ar.call.ui

import android.content.Intent
import android.os.Bundle
import android.view.KeyEvent
import androidx.core.view.ViewCompat
import androidx.lifecycle.lifecycleScope
import com.drake.statusbar.darkMode
import com.drake.statusbar.immersive
import com.kongzue.dialogx.dialogs.MessageDialog
import com.kongzue.dialogx.dialogs.WaitDialog
import org.ar.call.*
import org.ar.call.databinding.ActivityMainBinding
import org.ar.call.utils.go
import org.ar.call.utils.showError
import org.ar.call.utils.showSuccess
import org.ar.call.utils.toast
import kotlinx.coroutines.delay
import org.ar.rtm.RemoteInvitation
import org.json.JSONObject
import kotlin.system.exitProcess

class MainActivity : BaseActivity() {

    private val binding by lazy { ActivityMainBinding.inflate(layoutInflater) }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        ViewCompat.setTransitionName(binding.ivLogo, "logo")
        loginRtm()
        binding.run {
            tvUser.text = "您的呼叫ID:${callViewModel.userId}"
            btnP2p.setOnClickListener {
                if (callViewModel.isLoginSuccess) {
                    go(P2PActivity::class.java)
                } else {
                    showReLoginDialog()
                }
            }
            btnMultiple.setOnClickListener {
                if (callViewModel.isLoginSuccess) {
                   go(GroupCallActivity::class.java)
                } else {
                    showReLoginDialog()
                }
            }
        }

    }

    private fun loginRtm() {
        lifecycleScope.launchWhenResumed {
            WaitDialog.show("正在登录...")
            if (callViewModel.login()) {
                showSuccess("登录成功")
            } else {
                if (BuildConfig.APPID.equals("YOUR APPID")){
                    showError("登录失败，请配置APPID")
                }else{
                    showError("登录失败，请检查网络")
                }
            }
        }
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            showExitDialog()
            return true
        }
        return super.onKeyDown(keyCode, event)
    }

    private fun showExitDialog() {
        MessageDialog.show("提示", "确定要退出吗？", "确定","取消")
            .setOkButtonClickListener { baseDialog, v ->
                callViewModel.release()
                exitProcess(0)
                finish()
                true
            }.setCancelable(false)

    }

    private fun showReLoginDialog(){
        MessageDialog.show("提示", "登录RTM失败，请检查网络", "重新登录","取消")
            .setOkButtonClickListener { baseDialog, v ->
                baseDialog.dismiss()
                loginRtm()
                true
            }.setCancelable(false)
    }

    override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
        super.onRemoteInvitationReceived(var1)
        val isMultiple = JSONObject(var1?.content)["Conference"]
        startActivity(Intent().apply {
            if (isMultiple==1||isMultiple==true){
                setClass(this@MainActivity, GroupCallActivity::class.java)
            }else{
                setClass(this@MainActivity, P2PVideoActivity::class.java)
            }
            putExtra("isCalled",true)//是否是收到呼叫 no
        })
    }

}