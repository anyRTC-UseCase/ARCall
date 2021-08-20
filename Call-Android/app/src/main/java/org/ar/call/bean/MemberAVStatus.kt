package org.ar.call.bean

enum class MemberAVStatus {
    AUDIO,
    VIDEO,
    WAITING;

    var data: Any? = null

    operator fun invoke(data: Any?): org.ar.call.bean.MemberAVStatus {
        this.data = data
        return this
    }
}