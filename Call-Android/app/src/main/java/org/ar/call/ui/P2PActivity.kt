package org.ar.call.ui

import android.content.Intent
import android.os.Bundle
import com.drake.statusbar.darkMode
import com.drake.statusbar.immersive
import com.kongzue.dialogx.dialogs.BottomMenu
import com.kongzue.dialogx.interfaces.OnMenuItemClickListener
import org.ar.call.*
import org.ar.call.databinding.ActivityP2PactivityBinding
import org.ar.call.utils.Constans
import org.ar.call.utils.showError
import org.ar.call.view.SeparatedEditText
import org.ar.rtm.RemoteInvitation
import org.json.JSONObject

class P2PActivity : BaseActivity() {
    private val binding by lazy { ActivityP2PactivityBinding.inflate(layoutInflater) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        initView()

    }


    fun initView(){
        binding.run {
            tvUser.text = "您的呼叫ID:${callViewModel.userId}"
            etUser.setTextChangedListener(object : SeparatedEditText.TextChangedListener {
                override fun textChanged(changeText: CharSequence?) {
                    changeText?.let {
                        btnCall.isSelected = !(it.length<4)
                    }
                }

                override fun textCompleted(text: CharSequence?) {
                    btnCall.isSelected = true
                }

            })
            btnSetting.setOnClickListener { Intent().apply {
                setClass(this@P2PActivity, SettingActivity::class.java)
                putExtra(Constans.KEY_SINGLE_CALL,true)
                startActivity(this)
            } }
            btnCall.setOnClickListener {
                if (etUser.text.toString().isNullOrEmpty()) {
                    showError("请输入需要呼叫的ID")
                    return@setOnClickListener
                }
                if (etUser.text.toString().length < 4) {
                    showError("请输入4位呼叫ID")
                    return@setOnClickListener
                }
                if (etUser.text.toString().equals(callViewModel.userId)) {
                    showError("不能呼叫自己")
                    return@setOnClickListener
                }
                BottomMenu.show(arrayOf("视频呼叫", "语音呼叫")).setMessage("请选择呼叫类型")
                    .setOnMenuItemClickListener(object : OnMenuItemClickListener<BottomMenu> {
                        override fun onClick(
                            dialog: BottomMenu?,
                            text: CharSequence?,
                            index: Int
                        ): Boolean {
                            callViewModel.queryOnline(etUser.text.toString()){
                                if (it) {
                                    callViewModel.createLocalInvitation(
                                        binding.etUser.text.toString(),
                                        index
                                    ) {
                                        startActivity(Intent().apply {
                                            setClass(this@P2PActivity, P2PVideoActivity::class.java)
                                            putExtra("isCalled", false)//是否是收到呼叫 no
                                        })
                                        dialog?.dismiss()
                                    }
                                }else{
                                    showError("对方不在线")
                                }
                            }
                            return true
                        }

                    })

            }
            ivBack.setOnClickListener { finish() }
        }
    }

    override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
        super.onRemoteInvitationReceived(var1)
        val isMultiple = JSONObject(var1?.content)["Conference"]
        startActivity(Intent().apply {
            if (isMultiple==1||isMultiple==true){
                setClass(this@P2PActivity, GroupCallActivity::class.java)
            }else{
                setClass(this@P2PActivity, P2PVideoActivity::class.java)
            }
            putExtra("isCalled",true)//是否是收到呼叫 no
        })
    }
}