package org.ar.call

import android.app.Application
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import com.kongzue.dialogx.DialogX
import com.kongzue.dialogx.style.IOSStyle
import org.ar.call.utils.SpUtil
import kotlin.properties.Delegates

class CallApplication :Application(), ViewModelStoreOwner{

    private val appViewModel by lazy { ViewModelStore() }

    companion object{
        var callApp : CallApplication by Delegates.notNull()
    }

    override fun onCreate() {
        super.onCreate()
       CallApplication.Companion.callApp = this
        SpUtil.init(this)
        DialogX.init(this)
        DialogX.cancelButtonText="取消"
        DialogX.globalStyle = IOSStyle.style();
    }

    override fun getViewModelStore(): ViewModelStore {
        return appViewModel
    }

}