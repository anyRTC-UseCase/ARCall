package org.ar.call

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.kongzue.dialog.interfaces.OnDismissListener
import com.kongzue.dialog.util.BaseDialog
import com.kongzue.dialog.v3.MessageDialog
import com.kongzue.dialog.v3.TipDialog
import org.ar.call.RtmManager.Companion.instance
import org.ar.rtm.*

abstract class BaseActivity : AppCompatActivity(), RtmClientListener, RtmCallEventListener {
    private var isReconnect = false
    private var reconnectDialog: MessageDialog? = null
    private var needUnRegister = true
    fun setNeedUnRegister(needUnRegister: Boolean) {
        this.needUnRegister = needUnRegister
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        needUnRegister = true
        instance.registerRtmEvent(this)
        instance.registerCallListener(this)
    }

    override fun onResume() {
        super.onResume()
        instance.registerRtmEvent(this)
        instance.registerCallListener(this)
    }

    override fun onStop() {
        super.onStop()
        if (needUnRegister) {
            instance.unRegisterRtmEvent(this)
            instance.unRegisterCallListener(this)
        }
    }

    override fun onConnectionStateChanged(state: Int, var2: Int) {
        runOnUiThread {
            if (state == 4) {
                isReconnect = true
                reconnectDialog = MessageDialog.build(this@BaseActivity)
                        .setTitle("提示")
                        .setMessage("正在重连....")
                        .setOnOkButtonClickListener { baseDialog: BaseDialog?, v: View? -> true }
                        .setCancelable(false)
                reconnectDialog?.show()
            } else if (state == 3) {
                if (isReconnect) {
                    reconnectDialog?.let {
                        it.doDismiss()
                    }
                    isReconnect = false
                    TipDialog.show(this@BaseActivity, "重连成功！", TipDialog.TYPE.SUCCESS).onDismissListener = OnDismissListener { }
                }
            }
        }
    }

    override fun onMessageReceived(var1: RtmMessage, var2: String) {}
    override fun onTokenExpired() {}
    override fun onPeersOnlineStatusChanged(var1: Map<String, Int>) {}
    override fun onLocalInvitationReceivedByPeer(var1: LocalInvitation) {}
    override fun onLocalInvitationAccepted(var1: LocalInvitation, var2: String) {}
    override fun onLocalInvitationRefused(var1: LocalInvitation, var2: String) {}
    override fun onLocalInvitationCanceled(var1: LocalInvitation) {}
    override fun onLocalInvitationFailure(var1: LocalInvitation, var2: Int) {}
    override fun onRemoteInvitationReceived(var1: RemoteInvitation) {}
    override fun onRemoteInvitationAccepted(var1: RemoteInvitation) {}
    override fun onRemoteInvitationRefused(var1: RemoteInvitation) {}
    override fun onRemoteInvitationCanceled(var1: RemoteInvitation) {}
    override fun onRemoteInvitationFailure(var1: RemoteInvitation, var2: Int) {}
}