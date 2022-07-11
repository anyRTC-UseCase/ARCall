// components/validCode/validCode.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        valueData: {
            type: String,
            value: ""
        }
    },
    observers: {
        'valueData': function (data) {
            this.setData({
                value: data
            })
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        Length: 4, //输入框个数 
        isFocus: true, //聚焦 
        value: "", //输入的内容 
        // ispassword: false, //是否密文显示 true为密文， false为明文。 
        indexFocus: 5
    },

    /**
     * 组件的方法列表
     */
    methods: {
        Focus(e) {
            var that = this;
            var inputValue = e.detail.value;
            that.setData({
                value: inputValue,
                indexFocus: inputValue.length > 0 ? 5 : 0
            })
            if (inputValue.length == 4) {
                that.triggerEvent('change', this.data.value)
            }
        },
        Tap() {
            var that = this;
            const oIndexFocus = that.data.value.length > 0 ? 5 : 0
            that.setData({
                isFocus: true,
                indexFocus: oIndexFocus
            })
        },
        Change() {
            this.triggerEvent('change', this.data.value)
        }
    }
})