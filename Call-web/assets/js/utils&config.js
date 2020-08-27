var Utils = {
  generateNumber(len) {
    var numLen = len || 8;
    var generateNum = Math.ceil(Math.random() * Math.pow(10, numLen));
    return generateNum < Math.pow(10, numLen - 1) ? Utils.generateNumber(numLen) : generateNum;
  },
  printLog() {
    console.log.apply(this, arguments);
  }
}

//配置
var Config = {
  RTC_APPID: "ee0ca1b2bf559ea6823698acb0600e62", //RTC 应用ID 407ad2d7b9e74eae76fefde3659d6db4
  RTM_APPID: "ee0ca1b2bf559ea6823698acb0600e62", //RTM 应用ID ee0ca1b2bf559ea6823698acb0600e62
  RTC_MODE: "live", //RTC 通信模式
  RTC_CODEC: "h264", //RTC 视频编码格式
  SELECT_CAMERA_DEVICE: sessionStorage.getItem("defaultCameraDeviceId") || undefined
};


//自定义
var SystemUI = {
  //修改标题名称
  setPageTitle: function(title) {
    $('title').html(title);
  },
  alertError: function(errorText) {
    var errMsg = $(
      `
        <div class="alert alert-danger" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <span id="errorConten">${errorText}</span>
        </div>
      `
    );
    $("#warningBox").html("").append(errMsg);
    //警告框自动消失
    setTimeout(function() {
      $('[data-dismiss="alert"]').alert('close');
    }, 2000);
  },
  // 全局警告框
  alertWhole: function(text, classStyle) {
    if (!classStyle) {
      classStyle = "alert-danger"
    }
    var oMsg = $(
      `
      <div class="alert ${ classStyle }" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <span id="errorConten">${text}</span>
      </div>
    `
    );
    $("#warningWholeBox").html("").append(oMsg);
    //警告框自动消失
    setTimeout(function() {
      $('[data-dismiss="alert"]').alert('close');
    }, 2000);
  },
};