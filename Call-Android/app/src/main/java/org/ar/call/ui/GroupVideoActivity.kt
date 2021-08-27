package org.ar.call.ui

import android.graphics.Color
import android.media.MediaPlayer
import android.os.Bundle
import android.view.KeyEvent
import android.view.View
import androidx.activity.viewModels
import androidx.recyclerview.widget.GridLayoutManager
import com.drake.statusbar.immersive
import com.kongzue.dialogx.dialogs.CustomDialog
import com.kongzue.dialogx.interfaces.OnBindView
import org.ar.call.*
import org.ar.call.databinding.ActivityGroupVideoBinding
import org.ar.call.databinding.DialogInviteBinding
import org.ar.call.ui.adapter.MemberAdapter
import org.ar.call.utils.Constans
import org.ar.call.utils.SpUtil
import org.ar.call.utils.showError
import org.ar.call.utils.toast
import org.ar.call.vm.RtcVM
import org.ar.rtc.Constants
import org.ar.rtm.LocalInvitation
import org.ar.rtm.RemoteInvitation
import org.ar.rtm.RtmChannelMember
import org.json.JSONArray
import org.json.JSONObject

class GroupVideoActivity : BaseActivity() {

    private val binding by lazy { ActivityGroupVideoBinding.inflate(layoutInflater) }

    private var player: MediaPlayer? = null
    private var callArray: ArrayList<String>? = null
    private var channelId: String = ""
    private var isCalled: Boolean = false
    private val localInvitationList: ArrayList<LocalInvitation> = ArrayList()
    private val memberAdapter by lazy { MemberAdapter() }
    private val rtcVM: RtcVM by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        immersive(Color.parseColor("#FF232426"),false)
        callArray = intent.getStringArrayListExtra("callArray")
        channelId = intent.getStringExtra("channelId").toString()
        isCalled = intent.getBooleanExtra("isCalled", false)
        callViewModel.joinRTMChannel(channelId)
        rtcVM.initRTC(this,0,channelId,callViewModel.userId)
        rtcVM.joinChannel()
        binding.btnSpeak.isSelected = !binding.btnSpeak.isSelected
        rtcVM.setEnableSpeakerphone(binding.btnSpeak.isSelected)
        binding.run {
            rvVideo.layoutManager = GridLayoutManager(this@GroupVideoActivity,3)
            rvVideo.adapter = memberAdapter
            memberAdapter.addData(org.ar.call.bean.RtcMember.Factory.create(callViewModel.userId).apply {
                isWaiting = false
                isOpenAudio = true
                isOpenVideo = true
            })
            callArray?.forEach {
                memberAdapter.addData(org.ar.call.bean.RtcMember.Factory.create(it))
                if (!isCalled){
                    startRing()
                    val response = intent.getStringExtra("content")
                    val localInvitation = callViewModel.rtmCallManager.createLocalInvitation(it)?.apply {
                        content=response
                    }
                    localInvitationList.add(localInvitation!!)
                    callViewModel.call(localInvitation)
                }
            }
        }

        initView()

        initLiveData()

    }

    private fun initView() {
        binding.run {
            btnSwitch.setOnClickListener {
                rtcVM.rtcEngine?.switchCamera()
            }
            btnHangUp.setOnClickListener {
                if (!isCalled){
                   localInvitationList.forEach {
                       callViewModel.cancle(it)
                   }
                }
                memberAdapter.data.forEach {
                    it.release()
                }
                callViewModel.leaveRtmChannel()
                finish()

            }
            btnAudio.setOnClickListener {
                btnAudio.isSelected = !btnAudio.isSelected
                rtcVM.rtcEngine?.enableLocalAudio(!btnAudio.isSelected)
                memberAdapter.getItem(0).isOpenAudio = !btnAudio.isSelected
                memberAdapter.notifyItemChanged(0, org.ar.call.bean.MemberAVStatus.AUDIO(!btnAudio.isSelected))
            }
            btnSpeak.setOnClickListener {
                btnSpeak.isSelected = !btnSpeak.isSelected
               rtcVM.setEnableSpeakerphone(btnSpeak.isSelected)
            }
            btnVideo.setOnClickListener {
                btnVideo.isSelected = !btnVideo.isSelected
                rtcVM.rtcEngine?.enableLocalVideo(!btnVideo.isSelected)
                memberAdapter.getItem(0)?.isOpenVideo = !btnVideo.isSelected
                memberAdapter.notifyItemChanged(0, org.ar.call.bean.MemberAVStatus.VIDEO(!btnVideo.isSelected))
            }
            btnInvite.setOnClickListener {
                invite()
            }
        }
    }

    private fun invite() {
        val inviteBinding = DialogInviteBinding.inflate(layoutInflater)
        CustomDialog.show(object :OnBindView<CustomDialog>(inviteBinding.root){
            override fun onBind(dialog: CustomDialog?, v: View?) {
                inviteBinding.tvInviteConfirm.setOnClickListener {
                    if (callArray?.contains(inviteBinding.etUser.text.toString()) == true){
                        showError("用户已在通话中")
                        return@setOnClickListener
                    }
                    dialog?.dismiss()
                    callViewModel.queryOnline(inviteBinding.etUser.text.toString()){
                        if (it){
                            memberAdapter.addData(org.ar.call.bean.RtcMember.Factory.create(inviteBinding.etUser.text.toString()))
                            callArray?.add(inviteBinding.etUser.text.toString())
                            val params = JSONObject()
                            val arr = JSONArray()
                            arr.put(callViewModel.userId)
                            params.put("Mode", 0)
                            params.put("Conference", true)
                            params.put("ChanId", channelId)
                            callArray?.forEach {
                                arr.put(it)
                            }
                            params.put("UserData", arr)
                            val localInvitation = callViewModel.rtmCallManager.createLocalInvitation(inviteBinding.etUser.text.toString())
                            localInvitation?.content = params.toString()
                            localInvitationList.add(localInvitation!!)
                            callViewModel.call(localInvitation)
                            dialog?.dismiss()
                        }else{
                            showError("对方不在线")
                        }
                    }
                }
                inviteBinding.tvInviteCancel.setOnClickListener {
                    dialog?.dismiss()
                }
            }
        }).setMaskColor(Color.parseColor("#B2000000")).setCancelable(false);
    }

    private fun initLiveData() {
        rtcVM.joinState.observe(this,{
            rtcVM.inMeeting = true
            memberAdapter.getItem(0).canvas?.let {
                rtcVM.setupLocalVideo(it)
            }
            val isOpenCamera = SpUtil.get().getBoolean(Constans.KEY_OPEN_CAMERA, true)
            val isOpenAudio = SpUtil.get().getBoolean(Constans.KEY_OPEN_MIC, true)
            if (!isOpenAudio){
                rtcVM.rtcEngine?.enableLocalAudio(false)
                binding.btnAudio.isSelected = true
                memberAdapter.getItem(0).isOpenAudio = false
                memberAdapter.notifyItemChanged(0, org.ar.call.bean.MemberAVStatus.AUDIO(false))
            }
            if (!isOpenCamera){
                rtcVM.rtcEngine?.enableLocalVideo(false)
                binding.btnVideo.isSelected = true
                memberAdapter.getItem(0).isOpenVideo = false
                memberAdapter.notifyItemChanged(0, org.ar.call.bean.MemberAVStatus.VIDEO(false))
            }
        })

        rtcVM.remoteVideoDecode.observe(this, { uid->
            memberAdapter.data.forEachIndexed { index, rtcMember ->
                if (rtcMember.userId == uid) {
                    memberAdapter.getItem(index).isWaiting = false
                    memberAdapter.notifyItemChanged(index, org.ar.call.bean.MemberAVStatus.WAITING(false))
                    return@forEachIndexed
                }
            }
        })
        rtcVM.userJoin.observe(this,{
            stopRing()
            binding.tvWaiting.visibility = View.GONE
            binding.chronometer.visibility = View.VISIBLE
            binding.chronometer.start()
            memberAdapter.data.forEachIndexed { index, rtcMember ->
                if (rtcMember.userId == it) {
                    rtcVM.setupRemoteVideo(rtcMember.getVideoCanvas(this)!!)
                    rtcMember.isWaiting = false
                    memberAdapter.notifyItemChanged(index, org.ar.call.bean.MemberAVStatus.WAITING(false))
                    return@forEachIndexed
                }
            }
        })

        rtcVM.remoteVideoState.observe(this,{
            memberAdapter.data.forEachIndexed { index, rtcMember ->
                if (rtcMember.userId == it.first) {
                    if (it.second == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED) {
                        memberAdapter.getItem(index)?.isOpenVideo = false
                        memberAdapter.notifyItemChanged(index, org.ar.call.bean.MemberAVStatus.VIDEO(false))
                    } else if (it.second == Constants.REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED) {
                        memberAdapter.getItem(index)?.isOpenVideo = true
                        memberAdapter.notifyItemChanged(index, org.ar.call.bean.MemberAVStatus.VIDEO(true))
                    }
                    return@forEachIndexed
                }
            }
        })

        rtcVM.remoteAudioState.observe(this,{
            memberAdapter.data.forEachIndexed { index, rtcMember ->
                if (rtcMember.userId == it.first) {
                    if (it.second == Constants.REMOTE_AUDIO_REASON_REMOTE_MUTED) {
                        memberAdapter.getItem(index)?.isOpenAudio = false
                        memberAdapter.notifyItemChanged(index, org.ar.call.bean.MemberAVStatus.AUDIO(false))
                    } else if (it.second == Constants.REMOTE_AUDIO_REASON_REMOTE_UNMUTED) {
                        memberAdapter.getItem(index)?.isOpenAudio = true
                        memberAdapter.notifyItemChanged(index, org.ar.call.bean.MemberAVStatus.AUDIO(true))
                    }
                    return@forEachIndexed
                }
            }
        })
    }

    override fun onMemberJoined(member: RtmChannelMember?) {
        super.onMemberJoined(member)
        if (member?.userId.toString() !in callArray!!){
            memberAdapter.addData(org.ar.call.bean.RtcMember.Factory.create(member?.userId.toString()))
            callArray?.add(member?.userId.toString())//邀请的人可能是
        }
    }

    override fun onMemberLeft(member: RtmChannelMember?) {
        super.onMemberLeft(member)
        removeMember(member?.userId.toString())
    }
    private fun removeMember(userId: String) {
        var leftIndex = -1
        memberAdapter.data.forEachIndexed { index, rtcMember ->
            if (userId == rtcMember.userId) {
                rtcMember.release()
                leftIndex = index
            }
        }
        if (leftIndex != -1) {
            memberAdapter.removeAt(leftIndex)
        }
        if (callArray?.contains(userId)!!) {
            callArray?.remove(userId)
        }
        if (memberAdapter.data.size == 1) {//only self
            callViewModel.leaveRtmChannel()
            toast("通话已结束")
            finish()
        }
    }
    override fun onRemoteInvitationReceived(var1: RemoteInvitation?) {
        runOnUiThread {
            callViewModel.refuse(var1!!,JSONObject().apply {
                put("Cmd","Calling")
            }.toString())
        }
    }

    override fun onLocalInvitationAccepted(var1: LocalInvitation?, var2: String?) {
        super.onLocalInvitationAccepted(var1, var2)
        localInvitationList.remove(var1)
    }
    override fun onLocalInvitationCanceled(var1: LocalInvitation?) {
        super.onLocalInvitationCanceled(var1)
        localInvitationList.remove(var1)
    }

    override fun onLocalInvitationFailure(var1: LocalInvitation?, var2: Int) {
        super.onLocalInvitationFailure(var1, var2)
        localInvitationList.remove(var1)
    }

    override fun onLocalInvitationRefused(var1: LocalInvitation?, var2: String?) {
        super.onLocalInvitationRefused(var1, var2)
        runOnUiThread {
            toast("${var1?.calleeId}拒绝了呼叫邀请")
            removeMember(var1?.calleeId.toString())
            localInvitationList.remove(var1)
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

    override fun onDestroy() {
        super.onDestroy()
        stopRing()
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK){
            callViewModel.leaveRtmChannel()
            finish()
            return true
        }
        return super.onKeyDown(keyCode, event)
    }
}