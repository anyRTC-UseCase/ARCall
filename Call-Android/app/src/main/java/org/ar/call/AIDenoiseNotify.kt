package org.ar.call

object AIDenoiseNotify {

     var callBack:DenoiseNotifyCallBack? = null

     fun openDenoise(isOpen: Int){
         if (callBack!= null){
             callBack?.openDeNoise(isOpen)
         }
     }

     interface DenoiseNotifyCallBack{
        fun openDeNoise(isOpen:Int)
    }

}