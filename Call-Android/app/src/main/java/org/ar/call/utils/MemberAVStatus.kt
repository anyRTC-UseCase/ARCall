package org.ar.call.utils

enum class MemberAVStatus {
    AUDIO,
    VIDEO,
    WAITING;

    var data: Any? = null

    operator fun invoke(data: Any?): MemberAVStatus {
        this.data = data
        return this
    }
}