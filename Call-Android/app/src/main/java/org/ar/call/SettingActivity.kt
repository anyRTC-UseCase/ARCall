package org.ar.call

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import com.gyf.immersionbar.ImmersionBar
import com.kongzue.dialog.v3.BottomMenu
import org.ar.call.databinding.ActivityMainBinding
import org.ar.call.databinding.ActivitySettingBinding
import org.ar.call.multi.MultiCallActivity
import org.ar.call.p2p.VideoActivity
import org.ar.call.utils.Constans
import org.ar.call.utils.SpUtil
import org.ar.rtm.RemoteInvitation
import org.json.JSONException
import org.json.JSONObject

class SettingActivity : BaseActivity() {
    private lateinit var binding:ActivitySettingBinding
    private var isSingleMode = false //是否为p2p呼叫进来的

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySettingBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        ImmersionBar.with(this).statusBarDarkFont(true, 0.2f).statusBarColor(R.color.white).init()
        val intent = intent
        isSingleMode = intent.getBooleanExtra(Constans.KEY_SINGLE_CALL, false)
        init()
        binding.swCamera.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.putBoolean(Constans.KEY_OPEN_CAMERA, isChecked)
        }
        binding.swMic.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.putBoolean(Constans.KEY_OPEN_MIC, isChecked)
        }
        binding.swDenoise.setOnCheckedChangeListener { _, isChecked ->
            SpUtil.putBoolean(Constans.OPEN_DENOISE, isChecked)
            RtcManager.instance.enableAIDeNoise(if(isChecked) 1 else 0)
        }
    }

    private fun init() {
        if (isSingleMode){
            binding.llVideoConfig.visibility = View.VISIBLE
            binding.llVideoSetting.visibility = View.GONE
            setConfig()
        }else{
            binding.llVideoConfig.visibility = View.GONE
            binding.llVideoSetting.visibility = View.VISIBLE
            setAVStatus()
        }
        binding.swDenoise.isChecked = SpUtil.getBoolean(Constans.OPEN_DENOISE)
    }





    private fun setConfig() {
        when (SpUtil.getInt(Constans.KEY_FRAME)) {
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
        when (SpUtil.getInt(Constans.KEY_DIMENS)) {
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
    }

    private fun setAVStatus(){
        binding.swMic.isChecked = SpUtil.getBoolean(Constans.KEY_OPEN_MIC, true)
        binding.swCamera.isChecked = SpUtil.getBoolean(Constans.KEY_OPEN_CAMERA, true)
    }

    override fun onRemoteInvitationReceived(remoteInvitation: RemoteInvitation) {
        runOnUiThread {
            val jsonObject = JSONObject(remoteInvitation.content)
            val isConference = jsonObject.getBoolean("Conference")
            Intent().apply {
                putExtra("RecCall",true)
                setClass(this@SettingActivity,if (isConference){
                    MultiCallActivity::class.java
                }else{
                    VideoActivity::class.java
                })
                startActivity(this)
            }
        }
    }

    fun back(view: View?) {
        finish()
    }

    public fun frameSetting(view: View?) {
        BottomMenu.show(this, arrayOf("15", "24", "30")) { text, index ->
            SpUtil.putInt(Constans.KEY_FRAME, index + 1)
            setConfig()
            Toast.makeText(this@SettingActivity, "设置成功", Toast.LENGTH_SHORT).show()
        }.title = "请选择帧率"
    }

    public fun videoDimensions(view: View?) {
        BottomMenu.show(this, arrayOf("240 * 320", "480 * 640", "720 * 1280")) { text, index ->
            SpUtil.putInt(Constans.KEY_DIMENS, index + 1)
            setConfig()
            Toast.makeText(this@SettingActivity, "设置成功", Toast.LENGTH_SHORT).show()
        }.title = "请选择分辨率"
    }
}