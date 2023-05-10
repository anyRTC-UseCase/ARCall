const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 随机生成uid
const generateNumber = (len) => {
  const numLen = len || 8;
  const generateNum = Math.ceil(Math.random() * Math.pow(10, numLen));
  return generateNum < Math.pow(10, numLen - 1) ?
    generateNumber(numLen) :
    generateNum;
}

// 引入 store
let Store = require("./store");
// 本地清除
const clearStore = () => {
  // 通话计时器
  Store.callTimer && clearInterval(Store.callTimer);
  Store = Object.assign(Store, {
    // 视频通话0 语音通话1
    Mode: 0,
    // 远端用户uid
    peerUserId: "",
    // 频道房间
    channelId: "",

    // 是否正在通话
    Calling: false,
    // 是否是单人通话
    Conference: false,

    // 通话计时
    callTime: 0,
    callTimer: null,
  })
}
// 计时器
const calculagraph = () => {
  Store.callTime++;
  let oMin = Math.floor(Store.callTime / 60);
  let oSec = Math.floor(Store.callTime % 60);
  oMin >= 10 ? oMin : (oMin = "0" + oMin);
  oSec >= 10 ? oSec : (oSec = "0" + oSec);
  return oMin + ":" + oSec;
}



// 深克隆
function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  } else {
    const newObj = obj.constructor === Array ? [] : {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          newObj[key] = deepClone(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
}


// /**
//  * 事件传递
//  */
// // 用来保存所有绑定的事件
// const events = {};

// // 监听事件
// function on(name, self, callback) {
//   // self用来保存小程序page的this，方便调用this.setData()修改数据
//   const tuple = [self, callback];
//   const callbacks = events[name];
//   let isCallback = null;
//   // 判断事件库里面是否有对应的事件
//   if (Array.isArray(callbacks)) {
//     // 相同的事件不要重复绑定
//     const selfCallbacks = callbacks.filter(item => {
//       return self === item[0];
//     });
//     if (selfCallbacks.length === 0) {
//       callbacks.push(tuple);
//     } else {
//       for (const item of selfCallbacks) {
//         if (callback.toString() !== item.toString()) {
//           isCallback = true;
//         }
//       }!isCallback && selfCallbacks[0].push(callback);
//     }
//   } else {
//     // 事件库没有对应数据，就将事件存进去
//     events[name] = [tuple];
//   }
// }

// // 移除监听的事件
// function remove(name, self) {
//   const callbacks = events[name];
//   if (Array.isArray(callbacks)) {
//     events[name] = callbacks.filter(tuple => {
//       return tuple[0] !== self;
//     });
//   }
// }

// // 触发监听事件
// function emit(name, data = {}) {
//   const callbacks = events[name];
//   if (Array.isArray(callbacks)) {
//     callbacks.map(tuple => {
//       const self = tuple[0];
//       for (const callback of tuple) {
//         if (typeof callback === 'function') {
//           // 用call绑定函数调用的this，将数据传递过去
//           callback.call(self, deepClone(data));
//         }
//       }
//     });
//   }
// }

module.exports = {
  formatTime,
  generateNumber,
  clearStore,
  // on,
  // remove,
  // emit,
  calculagraph
}