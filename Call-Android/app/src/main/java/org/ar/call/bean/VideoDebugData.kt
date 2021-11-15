package org.ar.call.bean

data class VideoDebugData(var frame:String="帧率：",var dimens:String="分辨率：",var rtt:String="RTT延迟：",
                          var avSendDaikuan:String= "发送带宽：",var recDaikuan:String= "接收带宽：",
                          var audioSendLoss:String="音频发送丢包：",
                          var videoSendLoss:String ="视频发送丢包：",var audioRecLoss:String="音频接收丢包：",
                          var videoRecLoss:String="视频接收丢包：",var sendAudioBitrate:Int=0,var sendVideoBitrate:Int=0,
var recVideoBitrate:Int=0,var recAudioBitrate:Int=0)
