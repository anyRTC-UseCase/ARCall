package org.ar.call.ui

import android.content.Intent
import android.os.Bundle
import android.view.View
import com.drake.statusbar.immersive
import com.drake.statusbar.immersiveRes
import com.kongzue.dialogx.dialogs.BottomMenu
import com.kongzue.dialogx.interfaces.OnMenuItemClickListener
import org.ar.call.utils.Constans
import org.ar.call.R
import org.ar.call.utils.SpUtil
import org.ar.call.databinding.ActivitySettingBinding
import org.ar.call.utils.getSpValue
import org.ar.call.utils.showSuccess
import org.ar.rtm.RemoteInvitation
import org.json.JSONObject

class SettingActivity : BaseActivity() {
    private val binding by lazy { ActivitySettingBinding.inflate(layoutInflater) }
    private var isP2PActivity = false
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        immersive()
        immersiveRes(R.color.white,true)
        isP2PActivity = intent.getBooleanExtra(Constans.KEY_SINGLE_CALL,false)
        init()
        binding.swCamera.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.edit {
                it.putBoolean(Constans.KEY_OPEN_CAMERA, isChecked)
            }
        }
        binding.swMic.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.edit {
                it.putBoolean(Constans.KEY_OPEN_MIC, isChecked)
            }
        }
        binding.swDenoise.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.edit {
                it.putBoolean(Constans.OPEN_DENOISE, isChecked)
            }
        }
        binding.swAvdata.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.edit {
                it.putBoolean(Constans.OPEN_AVDATA, isChecked)
            }
        }
        binding.ivBack.setOnClickListener { finish() }
    }

    private fun init() {
        if (isP2PActivity){
            binding.llVideoConfig.visibility = View.VISIBLE
            binding.llVideoSetting.visibility = View.GONE
            setConfig()
        }else{
            binding.llVideoConfig.visibility = View.GONE
            binding.llVideoSetting.visibility = View.VISIBLE
            setAVStatus()
        }
        binding.swDenoise.isChecked = SpUtil.get().getBoolean(Constans.OPEN_DENOISE,false)
    }

    private fun setConfig() {
        when (getSpValue(Constans.KEY_FRAME)) {
            1 -> {
                binding.tvFrame.text = "15"
            }
            2 -> {
                binding.tvFrame.text = "24"
            }
            3 -> {
                binding.tvFrame.text = "30"
            }
        }
        when (getSpValue(Constans.KEY_DIMENS)) {
            1 -> {
                binding.tvXy.text = "240 * 320"
            }
            2 -> {
                binding.tvXy.text = "480 * 640"
            }
            3 -> {
                binding.tvXy.text = "720 * 1280"
            }
        }
        binding.swAvdata.isChecked = SpUtil.get().getBoolean(Constans.OPEN_AVDATA, false)
    }

    private fun setAVStatus(){
        binding.swMic.isChecked = SpUtil.get().getBoolean(Constans.KEY_OPEN_MIC, true)
        binding.swCamera.isChecked = SpUtil.get().getBoolean(Constans.KEY_OPEN_CAMERA, true)
    }

    override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
        super.onRemoteInvitationReceived(var1)
        runOnUiThread {
            val jsonObject = JSONObject(var1?.content)
            val isConference = jsonObject["Conference"]
            Intent().apply {
                putExtra("isCalled",true)
                setClass(this@SettingActivity,if (isConference==1||isConference==true){
                    GroupCallActivity::class.java
                }else{
                    P2PVideoActivity::class.java
                })
                startActivity(this)
            }
        }
    }

    public fun frameSetting(view: View?) {
        BottomMenu.show(arrayOf("15", "24", "30")).setMessage("请选择帧率")
            .setOnMenuItemClickListener(object : OnMenuItemClickListener<BottomMenu> {
                override fun onClick(
                    dialog: BottomMenu?,
                    text: CharSequence?,
                    index: Int
                ): Boolean {
                    SpUtil.edit {
                        it.putInt(Constans.KEY_FRAME, index + 1)
                    }
                    setConfig()
                    showSuccess("设置成功")
                    return true
                }

            })
    }

    public fun videoDimensions(view: View?) {
        BottomMenu.show(arrayOf("240 * 320", "480 * 640", "720 * 1280")).setMessage("请选择分辨率")
            .setOnMenuItemClickListener(object : OnMenuItemClickListener<BottomMenu> {
                override fun onClick(
                    dialog: BottomMenu?,
                    text: CharSequence?,
                    index: Int
                ): Boolean {
                    SpUtil.edit {
                        it.putInt(Constans.KEY_DIMENS, index + 1)
                    }
                    setConfig()
                    showSuccess("设置成功")
                    return true
                }

            })
    }
}