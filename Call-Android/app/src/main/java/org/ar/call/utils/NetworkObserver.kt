package org.ar.call.utils

import android.Manifest.permission.ACCESS_NETWORK_STATE
import android.annotation.SuppressLint
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities
import android.net.NetworkRequest
import android.os.Build.VERSION.SDK_INT
import android.util.Log
import androidx.annotation.MainThread
import androidx.annotation.RequiresApi
import androidx.core.content.ContextCompat
interface NetworkObserver {

    companion object {
        private const val TAG = "NetworkObserver"

        /** Create a new [NetworkObserver] instance. */
        operator fun invoke(
            context: Context,
            isEnabled: Boolean,
            listener: Listener,
        ): NetworkObserver {
            if (!isEnabled) {
                return EmptyNetworkObserver
            }

            val connectivityManager: ConnectivityManager? = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager?
            if (connectivityManager == null || !context.isPermissionGranted(ACCESS_NETWORK_STATE)) {
             Log.w(TAG, "Unable to register network observer.")
                return EmptyNetworkObserver
            }

            return try {
                if (SDK_INT >= 21) {
                    NetworkObserverApi21(connectivityManager, listener)
                } else {
                    NetworkObserverApi14(context, connectivityManager, listener)
                }
            } catch (e: Exception) {
               Log.e(TAG, "Failed to register network observer.")
                EmptyNetworkObserver
            }
        }
    }

    /** Synchronously checks if the device is online. */
    val isOnline: Boolean

    /** Stop observing network changes. */
    fun shutdown()

    /** Calls [onConnectivityChange] when a connectivity change event occurs. */
    fun interface Listener {

        @MainThread
        fun onConnectivityChange(isOnline: Boolean)
    }
}

private object EmptyNetworkObserver : NetworkObserver {

    override val isOnline get() = true

    override fun shutdown() {}
}

@RequiresApi(21)
@SuppressLint("MissingPermission")
@Suppress("DEPRECATION") // TODO: Remove uses of 'allNetworks'.
private class NetworkObserverApi21(
    private val connectivityManager: ConnectivityManager,
    private val listener: NetworkObserver.Listener
) : NetworkObserver {

    private val networkCallback = object : ConnectivityManager.NetworkCallback() {
        override fun onAvailable(network: Network) = onConnectivityChange(network, true)
        override fun onLost(network: Network) = onConnectivityChange(network, false)
    }

    override val isOnline: Boolean
        get() = connectivityManager.allNetworks.any { it.isOnline() }

    init {
        val request = NetworkRequest.Builder()
            .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
            .build()
        connectivityManager.registerNetworkCallback(request, networkCallback)
    }

    override fun shutdown() {
        connectivityManager.unregisterNetworkCallback(networkCallback)
    }

    private fun onConnectivityChange(network: Network, isOnline: Boolean) {
        val isAnyOnline = connectivityManager.allNetworks.any {
            if (it == network) {
                // Don't trust the network capabilities for the network that just changed.
                isOnline
            } else {
                it.isOnline()
            }
        }
        listener.onConnectivityChange(isAnyOnline)
    }

    private fun Network.isOnline(): Boolean {
        val capabilities: NetworkCapabilities? = connectivityManager.getNetworkCapabilities(this)
        return capabilities != null && capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
    }
}

@Suppress("DEPRECATION")
@SuppressLint("MissingPermission")
private class NetworkObserverApi14(
    private val context: Context,
    private val connectivityManager: ConnectivityManager,
    listener: NetworkObserver.Listener
) : NetworkObserver {

    private val connectionReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent?) {
            if (intent?.action == ConnectivityManager.CONNECTIVITY_ACTION) {
                listener.onConnectivityChange(isOnline)
            }
        }
    }

    override val isOnline: Boolean
        get() = connectivityManager.activeNetworkInfo?.isConnectedOrConnecting == true

    init {
        context.registerReceiver(connectionReceiver, IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION))
    }

    override fun shutdown() {
        context.unregisterReceiver(connectionReceiver)
    }
}



internal inline fun Context.isPermissionGranted(permission: String): Boolean {
    return ContextCompat.checkSelfPermission(this, permission) == PackageManager.PERMISSION_GRANTED
}