package org.ar.call.ui

import android.content.Intent
import android.media.MediaPlayer
import android.os.Bundle
import android.view.KeyEvent
import android.view.View
import androidx.recyclerview.widget.StaggeredGridLayoutManager
import com.drake.statusbar.darkMode
import org.ar.call.*
import org.ar.call.databinding.ActivityGroupCallBinding
import org.ar.call.ui.adapter.TagAdapter
import org.ar.call.utils.*
import org.ar.call.view.SeparatedEditText
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.RtmChannelMember
import org.json.JSONArray
import org.json.JSONObject

class GroupCallActivity : BaseActivity() {

    private val binding by lazy { ActivityGroupCallBinding.inflate(layoutInflater) }
    private val tagAdapter by lazy { TagAdapter() }
    private  var calledArray = arrayListOf<String>()
    private var player: MediaPlayer? = null
    private var isWaiting = false//是否在呼叫响铃页面
    private var isCalled = false
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        initView()
    }

    private fun initView(){
        tagAdapter.addChildClickViewIds(R.id.iv_delete_tag)
        tagAdapter.setOnItemChildClickListener { adapter, view, position ->
            tagAdapter.removeAt(position)
            if (tagAdapter.data.size == 0){
                binding.textTip.visibility = View.GONE
                binding.btnCall.isSelected = false
                binding.btnCall.isEnabled = false
            }
        }
        binding.run {
            rvTag.layoutManager = StaggeredGridLayoutManager(3,StaggeredGridLayoutManager.VERTICAL)
            rvTag.adapter = tagAdapter
            etUser.setTextChangedListener(object : SeparatedEditText.TextChangedListener {
                override fun textChanged(changeText: CharSequence?) {

                }

                override fun textCompleted(text: CharSequence?) {
                    addTag()
                }

            })
            tvUser.text="您的呼叫ID:"+callViewModel.userId
            ivBack.setOnClickListener { finish() }
            btnSetting.setOnClickListener { Intent().apply {
                setClass(this@GroupCallActivity, SettingActivity::class.java)
                putExtra(Constans.KEY_SINGLE_CALL,false)
                startActivity(this)
            } }
            btnCall.setOnClickListener {
                if (tagAdapter.data.size ==0){
                    showError("请输入要呼叫的ID")
                    return@setOnClickListener
                }
                callViewModel.queryOnline(tagAdapter.data){
                    if (it.size ==0){
                        showError("您邀请的用户都不在线")
                    }else{
                        val params = JSONObject()
                        val callArray = JSONArray()
                        val channelId = ((Math.random()*9+1)* 100000000L).toLong().toString()
                        callArray.put(callViewModel.userId)
                        params.put("Mode", 0)
                        params.put("Conference", true)
                        params.put("ChanId", channelId)
                        it.forEach{
                            callArray.put(it)
                        }
                        params.put("UserData", callArray)
                        startActivity(Intent(this@GroupCallActivity, GroupVideoActivity::class.java).apply {
                            putExtra("callArray", it)
                            putExtra("channelId", channelId)
                            putExtra("content", params.toString())
                            putExtra("isCalled", false)
                        })
                        tagAdapter.data.clear()
                        tagAdapter.notifyDataSetChanged()
                    }
                }
            }
            btnMultiHangup.setOnClickListener {
                callViewModel.currentRemoteInvitation?.let {
                    callViewModel.refuse(it)
                }
                showInputLayout(true)
            }
            btnMultiAccept.setOnClickListener {
                callViewModel.currentRemoteInvitation?.let {
                    callViewModel.accept(it)
                }
                startActivity(Intent(this@GroupCallActivity, GroupVideoActivity::class.java).apply {
                    putExtra("callArray", calledArray)
                    putExtra("channelId", callViewModel.channelId)
                    putExtra("isCalled", true)
                })
                showInputLayout(false)
            }
        }
        isCalled = intent.getBooleanExtra("isCalled",false)
        if (isCalled){
            callViewModel.currentRemoteInvitation?.let {
                val remoteBean = gson.fromJson(it.content, org.ar.call.bean.MultiUserBean::class.java)
                calledArray = remoteBean.userData.filterNot { it == callViewModel.userId } as ArrayList<String>
                callViewModel.joinRTMChannel(remoteBean.chanId)
                showWaitingLayout()
            }
        }


    }

    private fun addTag(){
        binding.run {
            if (etUser.text.toString() == callViewModel.userId){
                etUser.clearText()
                showError("不能呼叫自己")
                return
            }

            if (etUser.text.toString() in tagAdapter.data){
                showError("用户ID已存在")
                return
            }

            if (tagAdapter.data.size>=6){
                binding.etUser.clearText()
                showError("最多能呼叫6人")
                return
            }
            textTip.show()
            tagAdapter.addData(etUser.text.toString())
            tagAdapter.notifyDataSetChanged()
            binding.etUser.clearText()
            btnCall.isSelected = true
            btnCall.isEnabled = true
        }

    }

    private fun showWaitingLayout(){
        startRing()
        isWaiting = true;
        binding.run {
            rlInputLayout.gone()
            tvState.text ="收到呼叫"
            tvCallUserArr.text = calledArray.joinToString(",")
            rlWaitLayout.show()
        }
    }

    private fun showInputLayout(leaveChannel:Boolean){
        stopRing()
        isWaiting = false
        binding.run {
            rlInputLayout.show()
            tvState.text = ""
            tvCallUserArr.text = ""
            rlWaitLayout.gone()
            if (leaveChannel){
                callViewModel.leaveRtmChannel()
            }
        }
    }

    private fun startRing() {
        try {
            player = MediaPlayer.create(this, R.raw.video_request)
            player?.let {
                it.isLooping = true
                it.start()
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    private fun stopRing() {
        try {
            player?.let {
                it.stop()
                it.release()
            }
            player = null
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }



    override fun onRemoteInvitationReceived(remote: RemoteInvitation?) {
        super.onRemoteInvitationReceived(remote)
        runOnUiThread {
            if (isWaiting){
                callViewModel.currentRemoteInvitation?.let {
                    callViewModel.refuse(it,JSONObject().apply {
                        put("Cmd", "Calling")
                    }.toString())
                }
            }else{
                if(JSONObject(remote?.content)["Conference"]==1 ||JSONObject(remote?.content)["Conference"]==true){
                    val remoteBean = gson.fromJson(remote?.content, org.ar.call.bean.MultiUserBean::class.java)
                    calledArray = remoteBean.userData.filterNot { it == callViewModel.userId } as ArrayList<String>
                    callViewModel.joinRTMChannel(remoteBean.chanId)
                    showWaitingLayout()
                }else{
                    val i = Intent(this, P2PVideoActivity::class.java)
                    i.putExtra("isCalled", true)
                    startActivity(i)
                }
            }
        }
    }

    override fun onRemoteInvitationCanceled(var1: RemoteInvitation?) {
        super.onRemoteInvitationCanceled(var1)
        runOnUiThread {//收到主叫取消 可能是主动取消 可能是自己长时间未接听 SDK自动取消
            calledArray.clear()//清空呼叫队列
            showInputLayout(true)
            toast("主叫已取消呼叫")
        }
    }

    override fun onMemberJoined(member: RtmChannelMember?) {
        super.onMemberJoined(member)
        runOnUiThread {
            if (isWaiting){
                if (member?.userId !in calledArray){
                    calledArray.add(member?.userId.toString())
                }
            }
        }
    }

    override fun onMemberLeft(member: RtmChannelMember?) {
        super.onMemberLeft(member)
        runOnUiThread {
            if (isWaiting){
                calledArray.remove(member?.userId.toString())
            }
            if (calledArray.size==0){
                toast("呼叫已结束")
                showInputLayout(true)
            }
        }
    }
    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK){
            if (isWaiting){
                callViewModel.currentRemoteInvitation?.let {
                    callViewModel.refuse(it)
                }
                showInputLayout(true)
            }else{
                finish()
            }
            return true
        }
        return super.onKeyDown(keyCode, event)
    }

    override fun onDestroy() {
        super.onDestroy()
        stopRing()
    }
}