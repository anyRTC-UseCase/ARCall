package org.ar.call.p2p

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.view.WindowManager
import android.widget.Button
import android.widget.TextView
import com.gyf.immersionbar.ImmersionBar
import com.kongzue.dialog.interfaces.OnMenuItemClickListener
import com.kongzue.dialog.v3.BottomMenu
import com.kongzue.dialog.v3.MessageDialog
import com.lzf.easyfloat.EasyFloat
import com.tuo.customview.VerificationCodeView
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import org.ar.call.*
import org.ar.call.databinding.ActivityCallBinding
import org.ar.call.multi.MultiCallActivity
import org.ar.call.utils.Constans
import org.ar.rtm.ErrorInfo
import org.ar.rtm.LocalInvitation
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.ResultCallback
import org.json.JSONObject
import kotlin.coroutines.resume
import kotlin.coroutines.suspendCoroutine

class CallActivity :BaseActivity(){

    private lateinit var binding: ActivityCallBinding
    private val rtmCallManager = RtmManager.instance.getCallManager()
    private val rtmClient = RtmManager.instance.getRtmClient()
    private var localInvitation:LocalInvitation? =null
    private val mainScope = MainScope()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        binding = ActivityCallBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        ImmersionBar.with(this).statusBarDarkFont(false, 0.2f).keyboardEnable(true).init()
        binding.tvUser.text = "您的呼叫ID:${CallApp.callApp.userId}"

        binding.etUser.setInputCompleteListener(object : VerificationCodeView.InputCompleteListener {
            override fun inputComplete() {
                if (binding.etUser.inputContent.length == 4) {
                    binding.btnCall.isSelected = true
                }
            }

            override fun deleteContent() {
                if (binding.etUser.inputContent.length < 4) {
                    binding.btnCall.isSelected = false
                }
            }
        })

    }


    public fun call(view: View){
        if (EasyFloat.appFloatIsShow()){
            return
        }
        if (binding.etUser.inputContent.isNullOrEmpty()){
            toast("请输入需要呼叫的ID")
            return
        }

        if (binding.etUser.inputContent.length<4){
            toast("请输入4位呼叫ID")
            return
        }
        if (binding.etUser.inputContent == CallApp.callApp.userId){
            toast("不能呼叫自己")
            return
        }

        mainScope.launch {
            val result = queryOnline(HashSet<String>().apply {
                add(binding.etUser.inputContent)
            })
            if (result!!){
                BottomMenu.show(this@CallActivity, arrayOf("视频呼叫", "语音呼叫"), OnMenuItemClickListener { _, index -> makeCall(index) }).title = "请选择呼叫类型"
            }else{
                MessageDialog.show(this@CallActivity, "提示", "对方不在线", "确定")

            }
        }


    }

    public fun backClick(view: View){
        finish()
    }

    public fun setClick(view: View){
        Intent().apply {
            setClass(this@CallActivity, SettingActivity::class.java)
            putExtra(Constans.KEY_SINGLE_CALL,true)
            startActivity(this)
        }
    }

    private fun makeCall(type:Int){
        localInvitation = rtmCallManager?.createLocalInvitation(binding.etUser.inputContent)
        RtmManager.instance.localInvitation = localInvitation
        localInvitation?.content = JSONObject().apply {
            put("Mode",type)
            put("Conference",false)
            put("ChanId",((Math.random()*9+1)*100000000L).toLong().toString())
            put("UserData","")
            put("SipData","")
        }.toString()
        Intent().apply {
            setClass(this@CallActivity,VideoActivity::class.java)
            putExtra("ReCall",false)
            startActivity(this)
        }
    }



    suspend fun queryOnline(queryList: HashSet<String>) = suspendCoroutine<Boolean?>{
            rtmClient?.queryPeersOnlineStatus(queryList, object : ResultCallback<MutableMap<String, Boolean>> {
                override fun onSuccess(var1: MutableMap<String, Boolean>?) {
                    it.resume(var1?.get(binding.etUser.inputContent))
                }

                override fun onFailure(var1: ErrorInfo?) {
                }
            })

    }


    fun Activity.toast(text: String){
            android.widget.Toast.makeText(this, text, android.widget.Toast.LENGTH_SHORT).show()
    }

    //==========callback========

    override fun onRemoteInvitationReceived(remote: RemoteInvitation) {
        runOnUiThread {
            if (EasyFloat.appFloatIsShow()){// is Calling
                remote?.let {
                    it.response = JSONObject().apply {
                        put("Cmd","Calling")
                    }.toString()
                    rtmCallManager?.refuseRemoteInvitation(it,null) }
                return@runOnUiThread
            }
            val isMultiple = JSONObject(remote?.content).getBoolean("Conference")
            Intent().let {
                if (isMultiple){
                    it.setClass(this@CallActivity,MultiCallActivity::class.java)
                }else{
                    it.setClass(this@CallActivity,VideoActivity::class.java)
                }
                it.putExtra("RecCall",true)
                startActivity(it)
            }
            if (isMultiple){
                finish()
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        mainScope.cancel()
    }


}