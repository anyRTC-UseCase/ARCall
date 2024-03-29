module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1690447249537, function(require, module, exports) {
/*!
  * ar-rtc-miniapp v4.0.6
  * (c) 2023 anyRTM SDK
  * @license MIT
  */


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var packageJson = {
	name: "ar-rtc-miniapp",
	version: "4.0.6",
	description: "For publishing npm package anyrtc SDK (WeChat). Get more information from https://www.anyrtc.io.",
	scripts: {
		build: "node scripts/build.js --mode=production",
		dev: "node scripts/build.js",
		watch: "node scripts/build.js --watch",
		changelog: "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 --context changelog.config.js",
		format: "tslint -c ./tslint.json ./src/**/*.ts"
	},
	main: "./dist/ar-rtc-miniapp-sdk.cjs.js",
	module: "./dist/ar-rtc-miniapp-sdk.esm.js",
	unpkg: "./dist/ar-rtc-miniapp-sdk.umd.js",
	jsdelivr: "./dist/ar-rtc-miniapp-sdk.umd.js",
	browser: "./dist/ar-rtc-miniapp-sdk.umd.js",
	typings: "./dist/ar-rtc-miniapp-public.d.ts",
	files: [
		"dist/*.js",
		"dist/ar-rtc-miniapp-public.d.ts",
		"README.md"
	],
	author: "https://www.anyrtc.io",
	keywords: [
		"webrtc",
		"ArRTC"
	],
	license: "./LICENSES",
	devDependencies: {
		"@microsoft/api-extractor": "^7.19.4",
		"@rollup/plugin-commonjs": "^21.0.2",
		"@rollup/plugin-json": "^4.1.0",
		"@rollup/plugin-node-resolve": "^13.1.3",
		"@types/node": "^17.0.21",
		chalk: "^4.1.2",
		rollup: "^2.70.0",
		"rollup-plugin-terser": "^7.0.2",
		"rollup-plugin-typescript2": "^0.31.2",
		typedoc: "^0.22.13",
		typescript: "^4.0.2"
	},
	dependencies: {
		"@types/wechat-miniprogram": "^3.0.0"
	}
};

var Config = {
    SDK_VERSION: packageJson.version,
    //网关地址
    GATEWAY_ADDRESS: "https://wtgw.agrtc.cn",
    //网关重连超时
    GATEWAY_CONNECT_TIMEOUT: 2e3,
    //网关重连超时
    GATEWAY_ERTRY_TIMEOUT: 20 * 60 * 1e3,
    //日志上报服务URL
    // LOG_UPLOAD_SERVER: "logservice.anyrtc.io",
    //事件上报服务URL
    // MESSAGE_REPORT_DOMAIN: "",
    EVENT_REPORT_DOMAIN: "event.agrtc.cn",
    // EVENT_REPORT_DOMAIN: "192.168.199.245",
    //事件上报备份服务URL
    EVENT_REPORT_BACKUP_DOMAIN: "event.agrtc.cn",
    //上传日志
    UPLOAD_LOG: !1,
    WEBSOCKET_TIMEOUT_MIN: 1e4,
    //事件上报的间隔
    EVENT_REPORT_SEND_INTERVAL: 1e3,
};

/**
 *
 *
 * @class EventEmitter
 */
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        /**
         * 事件 Map
         *
         * @internal
         * @private
         * @type {{
         *     [K in keyof T]?: Array<EventReceivers<T>>
         *   }}
         */
        this._events = {};
    }
    /**
     * Gets all the listeners of a specified event.
     *
     * @param {string} eventName
     * @returns
     */
    // getListeners<K extends keyof T>(eventName: K) {
    //   let eventReceiver = [];
    //   if (this._events[eventName]) {
    //     eventReceiver = this._events[eventName]!.map(eventList => eventList.listen);
    //   }
    //   return eventReceiver;
    // }
    /**
     * Listens for a specified event.
     *
     * When the event happens, the callback that you pass is triggered.
     *
     * @event
     * @param {string} eventName
     * @param {Function} callback The callback to be triggered.
     */
    EventEmitter.prototype.on = function (eventName, callback) {
        this._events[eventName] || (this._events[eventName] = []);
        var evtList = this._events[eventName];
        if (-1 === this._indexOfListener(evtList, callback)) {
            evtList.push({
                listener: callback,
                once: false
            });
        }
    };
    /**
     *
     *
     * @param {string} eventName
     * @param {Function} callback
     */
    EventEmitter.prototype.once = function (eventName, callback) {
        this._events[eventName] || (this._events[eventName] = []);
        var evtList = this._events[eventName];
        if (-1 === this._indexOfListener(evtList, callback)) {
            evtList.push({
                listener: callback,
                once: true
            });
        }
    };
    /**
     *
     *
     * @param {string} eventName
     * @param {Function} callback
     */
    EventEmitter.prototype.off = function (eventName, callback) {
        this._events[eventName] || (this._events[eventName] = []);
        var evtList = this._events[eventName];
        var index = this._indexOfListener(evtList, callback);
        if (-1 !== index) {
            evtList.splice(index, 1);
        }
    };
    /**
     *
     *
     * @param {string} [eventName]
     */
    EventEmitter.prototype.removeAllListeners = function (eventName) {
        if (eventName) {
            delete this._events[eventName];
        }
        else {
            this._events = {};
        }
    };
    /**
     *
     *
     * @param {string} eventName
     */
    EventEmitter.prototype.emit = function (eventName) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._events[eventName] || (this._events[eventName] = []);
        var evtList = this._events[eventName];
        try {
            for (var evtList_1 = __values(evtList), evtList_1_1 = evtList_1.next(); !evtList_1_1.done; evtList_1_1 = evtList_1.next()) {
                var evtCallback = evtList_1_1.value;
                evtCallback.once && this.off(eventName, evtCallback.listener);
                evtCallback.listener.apply(this, args || []);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (evtList_1_1 && !evtList_1_1.done && (_a = evtList_1.return)) _a.call(evtList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     *
     *
     * @internal
     * @param {any[]} evtList
     * @param {Function} callback
     * @returns
     */
    EventEmitter.prototype._indexOfListener = function (evtList, callback) {
        for (var index = evtList.length; index--;)
            if (evtList[index].listener === callback)
                return index;
        return -1;
    };
    return EventEmitter;
}());

/**
 * 内部网关错误码
 *
 * @enum {number}
 * @ignore
 */
var GateWayError;
(function (GateWayError) {
    GateWayError["INVALID_PARAMS"] = "INVALID_PARAMS";
    // 开发者ID被禁用 || 开发者账户不可用
    GateWayError["DEVELOPER_INVALID"] = "DEVELOPER_INVALID";
    // 应用内用户被禁用
    GateWayError["UID_BANNED"] = "UID_BANNED";
    // ip被禁用
    GateWayError["IP_BANNED"] = "IP_BANNED";
    // 应用内频道被禁用
    GateWayError["CHANNEL_BANNED"] = "CHANNEL_BANNED";
    // 应用ID不存在或者应用不可用
    GateWayError["APPID_INVALID"] = "APPID_INVALID";
    // 服务未开通
    GateWayError["SERVER_NOT_OPEN"] = "SERVER_NOT_OPEN";
    // token已过期
    GateWayError["TOKEN_EXPIRED"] = "TOKEN_EXPIRED";
    // token不可用
    GateWayError["TOKEN_INVALID"] = "TOKEN_INVALID";
    // 未知错误，通用错误码。
    GateWayError["UNKNOWN"] = "UNKNOWN";
    // 连接超时
    GateWayError["TIMEOUT"] = "TIMEOUT";
})(GateWayError || (GateWayError = {}));
/**
 * @ignore
 */
var GateWay;
(function (GateWay) {
    var url = "";
    var urlSuffix = "/arapi/v1?action=";
    function _joinGateWay(gatewayUrl, data) {
        return new Promise(function (resolve) {
            wx.request({
                url: url + gatewayUrl,
                data: data,
                method: "POST",
                header: {
                    'content-type': 'application/json'
                },
                complete: function (res) {
                    var statusCode = res.statusCode;
                    if (statusCode) {
                        resolve(res.data);
                    }
                    else {
                        resolve({
                            code: -1,
                            msg: res.errMsg
                        });
                    }
                }
            });
        });
    }
    /**
     * 连接网关
     *
     * @param {{ [propName: string]: any }} data
     * @returns
     */
    function joinGateway(data) {
        return new Promise(function (resolve, reject) {
            url = Config.GATEWAY_ADDRESS;
            var gatewayUrl = urlSuffix.concat("wapp_gateway");
            var joinGateWayData = {
            // opid: 133,
            // ts: Date.now()
            };
            !function authGateWay() {
                return _joinGateWay(gatewayUrl, __assign(__assign({}, joinGateWayData), data)).then(function (res) {
                    var code = res.code; res.msg;
                    if (code === 0) {
                        resolve(res);
                    }
                    else if (code === -1 || code == 1) { // && msg === "timeout"
                        //轮询直到成功
                        setTimeout(function () {
                            authGateWay();
                        }, Config.GATEWAY_CONNECT_TIMEOUT);
                    }
                    else if (code === -4 || code == -7) {
                        // SDK 内部处理，不应该将此错误抛给用户，因为缺少参数前端可以规避
                        reject(GateWayError.INVALID_PARAMS);
                    }
                    // 开发者ID被禁用
                    else if (code === 13 || code === 2002) {
                        reject(GateWayError.DEVELOPER_INVALID);
                    }
                    // APP内用户被禁用
                    else if (code === 14) {
                        reject(GateWayError.UID_BANNED);
                    }
                    // ip被禁用
                    else if (code === 15) {
                        reject(GateWayError.IP_BANNED);
                    }
                    // 应用内频道被禁用
                    else if (code === 16) {
                        reject(GateWayError.CHANNEL_BANNED);
                    }
                    // 应用ID不存在或者应用不可用
                    else if (code === 101) {
                        reject(GateWayError.APPID_INVALID);
                    }
                    // 服务未开通
                    else if (code === 102) {
                        reject(GateWayError.SERVER_NOT_OPEN);
                    }
                    // token 已过期
                    else if (code === 109) {
                        reject(GateWayError.TOKEN_EXPIRED);
                    }
                    // token 不可用
                    else if (code === 110) {
                        reject(GateWayError.TOKEN_INVALID);
                    }
                    else {
                        reject("Error Code ".concat(code, "."));
                    }
                });
            }();
        });
    }
    GateWay.joinGateway = joinGateway;
})(GateWay || (GateWay = {}));

// import Logger from "../tools/logger";
/**
 *
 *
 * @internal
 * @class MediaServer
 * @extends {EventEmitter}
 * @ignore
 */
var MediaServer = /** @class */ (function () {
    function MediaServer(config) {
        //-----------------------------//
        //           letIABLE          //
        //-----------------------------//
        //   inChannelInfo: {joinAt: 1585187333667, duration: 0}
        //   networkQualityInterval: 19
        //配置
        this._appId = "";
        this._serverIsWss = true;
        this._serverUrl = "";
        this._serverPort = 0;
        //变量
        this._revState = "DISCONNECTED";
        this._curState = "DISCONNECTED";
        this._userId = null;
        this._keepALiveInterval = setInterval(function () { }, 0);
        this._keepAliveIntervalTime = 1e4;
        this._handleOnline = function () { };
        // flag
        this._connectTimeout = setTimeout(function () { }, 0);
        this._keepAliveTimeout = setTimeout(function () { }, 0);
        this.signal = null;
        this.handleMediaServerEvents = function () { };
        var _this = this;
        if (config && config.appId) {
            _this._appId = config.appId;
        }
    }
    /**
     *
     *
     * @param {{[key: string]: any}} appInfo
     * @memberof MediaServer
     */
    MediaServer.prototype.setAppInfo = function (appInfo) {
        var _this = this;
        var appId = appInfo.appId;
        _this._appId = appId;
    };
    /**
     * 配置服务请求地址
     *
     * @param {ServeConfig} option
     * @returns
     */
    MediaServer.prototype.configServer = function (isWss, url, port) {
        var _this = this;
        _this._serverIsWss = isWss;
        _this._serverUrl = url;
        _this._serverPort = port;
    };
    /**
     * 连接CTS
     *
     */
    MediaServer.prototype.connectCTS = function () {
        var _this = this;
        console.log("start ", Date.now());
        return new Promise(function (resolve, reject) {
            if (!_this.signal) {
                var strUrl = "".concat(_this._serverIsWss ? "wss" : "ws", "://").concat(_this._serverUrl).concat((_this._serverIsWss && _this._serverPort !== 443) || (!_this._serverIsWss && _this._serverPort !== 80) ? ":" + _this._serverPort : '');
                var webSocket = wx.connectSocket({
                    url: strUrl
                });
                _this.signal = webSocket;
                //通知状态正在连接
                _this._emitConnectionState("CONNECTING");
                //如果超时（10s后）还没有连上将回调断开连接
                _this._setConnectTimeout();
                //WebSocket onopen
                webSocket.onOpen(function () {
                    console.log("open ", Date.now());
                    // Logger.info(" serve connected...");
                    //如果连接成功清楚超时的定时器
                    _this._clearConnectTimeout();
                    //通知状态已连接
                    _this._emitConnectionState("CONNECTED");
                    resolve();
                });
                //WebSocket onmessage
                webSocket.onMessage(function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                    var msgContent = JSON.parse(Content);
                    switch (Cmd) {
                        case "KeepAlive": //保活
                            _this._handleKeepAlive();
                            break;
                        case "Login": //上线
                            var Code = msgContent.Code;
                            //开始保活
                            if (Code === 0) {
                                console.log("online ", Date.now());
                                _this._startKeepAlive();
                                _this._handleOnline(msgContent);
                            }
                            break;
                        default: //抛给上一层处理
                            _this.handleMediaServerEvents && _this.handleMediaServerEvents(Cmd, msgContent);
                            break;
                    }
                });
                //WebSocket onclose
                webSocket.onClose(function (result) {
                    var code = result.code, reason = result.reason;
                    // Logger.info(" serve disconnected...", code);
                    //如果连接成功清楚超时的定时器
                    _this._clearConnectTimeout();
                    //
                    _this._stopKeepAlive();
                    //
                    _this._removeHandleKeepAlive();
                    switch (code) {
                        //3000–3999可以由库或框架使用
                        //4000–4999可以由应用使用.
                        case 1000: //正常关闭; 无论为何目的而创建, 该链接都已成功完成任务.
                        case 1005: //表示没有收到预期的状态码. close时没有带错误码
                            if (reason === "NETWORK_ERROR") { //keepAlive超时
                                _this._emitConnectionState("RECONNECTING", "NETWORK_ERROR");
                            }
                            else if (reason === "UID_BANNED") { //用户被挤掉了
                                _this._emitConnectionState("DISCONNECTED", "UID_BANNED");
                            }
                            else { //
                                _this._emitConnectionState("DISCONNECTED", "LEAVE");
                            }
                            break;
                        default: //异常重连
                            //异常断开，开启重连，轮询多个订阅流媒体服务20分钟如果仍失败则放弃重连
                            _this._emitConnectionState("RECONNECTING", "SERVER_ERROR");
                            break;
                    }
                    _this.signal = null;
                    reject();
                });
                //WebSocket onerror
                webSocket.onError(function (result) {
                    // Logger.error("WebSocket with some error ", result);
                });
            }
            else {
                // Logger.error('[connectCTS] alreadly connected.');
                // return false;
                reject();
            }
        });
    };
    /**
     *
     *
     * @memberof MediaServer
     */
    MediaServer.prototype.doKeepAlive = function () {
        var objMsg = {};
        objMsg["Cmd"] = "KeepAlive";
        objMsg["Content"] = JSON.stringify({
            time: Date.now().toString()
        });
        this._sendMessage(objMsg);
    };
    /**
     * 上线
     *
     * @param {*} extendContent
     * @memberof MediaServer
     */
    MediaServer.prototype.doJoin = function (extendContent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this;
            return __generator(this, function (_a) {
                _this = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var objMsg = {};
                        objMsg["Cmd"] = "Login";
                        objMsg["AppId"] = _this._appId;
                        objMsg["Content"] = JSON.stringify(__assign({}, extendContent));
                        _this.signal.onMessage(function (_a) {
                            var data = _a.data;
                            var msgData = JSON.parse(data);
                            var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                            var msgContent = JSON.parse(Content);
                            if (Cmd === "Login") {
                                var Code = msgContent.Code, UserId = msgContent.UserId;
                                if (Code === 0) {
                                    _this._userId = UserId;
                                    resolve(UserId);
                                }
                                else {
                                    // Logger.error("user online failure, code => ", Code);
                                    reject(Code);
                                }
                            }
                        });
                        //监听上线成功是否
                        // _this._handleOnline = function(msgContent: any) {
                        //   let { Code } = msgContent;
                        //   if (Code === 0) {
                        //     let { UserId } = msgContent;
                        //     _this._userId = UserId;
                        //     resolve(UserId);
                        //   } else {
                        //     // Logger.error("user online failure, code => ", Code);
                        //     reject(Code);
                        //   }
                        // }
                        _this._sendMessage(objMsg);
                    })];
            });
        });
    };
    /**
     * 上线
     *
     * @param {*} extendContent
     * @memberof MediaServer
     */
    // async doReJoin(extendContent: any): Promise<string> {
    //   let _this = this;
    //   return new Promise((resolve, reject) => {
    //     let objMsg: any = {};
    //     objMsg["Cmd"] = "Login";
    //     objMsg["AppId"] = _this._appId;
    //     objMsg["Content"] = JSON.stringify({...extendContent});
    //     _this.signal.onMessage(({data}: any) => {
    //       let msgData = JSON.parse(data);
    //       let { Cmd, Encrypt, Content } = msgData;
    //       let msgContent = JSON.parse(Content);
    //       if (Cmd === "Login") {
    //         let { Code, UserId } = msgContent;
    //         if (Code === 0) {
    //           _this._userId = UserId;
    //           resolve(UserId);
    //         } else {
    //           // Logger.error("user online failure, code => ", Code);
    //           reject(Code);
    //         }
    //       }
    //     });
    //     //监听上线成功是否
    //     // _this._handleOnline = function(msgContent: any) {
    //     //   let { Code } = msgContent;
    //     //   if (Code === 0) {
    //     //     let { UserId } = msgContent;
    //     //     _this._userId = UserId;
    //     //     resolve(UserId);
    //     //   } else {
    //     //     // Logger.error("user online failure, code => ", Code);
    //     //     reject(Code);
    //     //   }
    //     // }
    //     _this._sendMessage(objMsg);
    //   });
    // }
    /**
     * 下线
     *
     * @param {*} extendContent
     * @memberof MediaServer
     */
    MediaServer.prototype.doLeave = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signal.onMessage(function (_a) {
                var data = _a.data;
                var msgData = JSON.parse(data);
                var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                var msgContent = JSON.parse(Content);
                if (Cmd === "Logout") {
                    var Code = msgContent.Code;
                    if (Code === 0) { //发布成功 - 分配的推流地址
                        // 停止发送 KeepALive
                        _this._stopKeepAlive();
                        resolve();
                    }
                    else { //退出失败
                        reject({
                            code: Code,
                            reason: "Logout failure"
                        });
                    }
                }
            });
            var objMsg = {};
            objMsg["Cmd"] = "Logout";
            objMsg["Content"] = "";
            _this._sendMessage(objMsg);
        });
    };
    /**
     * 发布通道
     *
     * @memberof MediaServer
     */
    MediaServer.prototype.doPublish = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signal.onMessage(function (_a) {
                var data = _a.data;
                var msgData = JSON.parse(data);
                var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                var msgContent = JSON.parse(Content);
                if (Cmd === "Publish") {
                    var Code = msgContent.Code, PushUrl = msgContent.PushUrl;
                    if (Code === 0) { //发布成功 - 分配的推流地址
                        resolve({
                            url: PushUrl
                        });
                    }
                    else { //发布失败
                        reject({
                            code: Code,
                            reason: "publish failure"
                        });
                    }
                }
            });
            var objMsg = {};
            objMsg["Cmd"] = "Publish";
            objMsg["Encrypt"] = false;
            objMsg["Content"] = "";
            _this._sendMessage(objMsg);
        });
    };
    /**
     * 取消发布通道
     *
     * @memberof MediaServer
     */
    MediaServer.prototype.doUnPublish = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signal.onMessage(function (_a) {
                var data = _a.data;
                var msgData = JSON.parse(data);
                var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                var msgContent = JSON.parse(Content);
                if (Cmd === "UnPublish") {
                    var Code = msgContent.Code;
                    if (Code === 0) { //发布成功 - 分配的推流地址
                        resolve();
                    }
                    else { //发布失败
                        reject({
                            code: Code,
                            reason: "UnPublish failure"
                        });
                    }
                }
            });
            var objMsg = {};
            objMsg["Cmd"] = "UnPublish";
            objMsg["Content"] = "";
            _this._sendMessage(objMsg);
        });
    };
    /**
     * 订阅通道
     *
     * @memberof MediaServer
     */
    MediaServer.prototype.doSubscribe = function (UserId, ChanId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signal.onMessage(function (_a) {
                var data = _a.data;
                var msgData = JSON.parse(data);
                var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                var msgContent = JSON.parse(Content);
                if (Cmd === "Subscribe") {
                    var Code = msgContent.Code, UId = msgContent.UserId, PullUrl = msgContent.PullUrl;
                    if (Code === 0) { //发布成功 - 分配的推流地址
                        UserId === UId && resolve(PullUrl);
                    }
                    else { //发布失败
                        reject({
                            code: Code,
                            reason: "Subscribe failure"
                        });
                    }
                }
            });
            var objMsg = {};
            objMsg["Cmd"] = "Subscribe";
            objMsg["Content"] = JSON.stringify({
                UserId: UserId,
                ChanId: ChanId,
            });
            _this._sendMessage(objMsg);
        });
    };
    /**
     * 取消订阅通道
     *
     * @memberof MediaServer
     */
    MediaServer.prototype.doUnSubscribe = function (UserId, ChanId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signal.onMessage(function (_a) {
                var data = _a.data;
                var msgData = JSON.parse(data);
                var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                var msgContent = JSON.parse(Content);
                if (Cmd === "UnSubscribe") {
                    var Code = msgContent.Code;
                    if (Code === 0) { //发布成功 - 分配的推流地址
                        resolve();
                    }
                    else { //发布失败
                        reject({
                            code: Code,
                            reason: "UnSubscribe failure"
                        });
                    }
                }
            });
            var objMsg = {};
            objMsg["Cmd"] = "UnSubscribe";
            objMsg["Content"] = JSON.stringify({
                UserId: UserId,
                ChanId: ChanId
            });
            _this._sendMessage(objMsg);
        });
    };
    /**
     * 设置用户角色
     *
     * @param role Host/Audience
     */
    MediaServer.prototype.setClientRole = function (role) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.signal.onMessage(function (_a) {
                var data = _a.data;
                var msgData = JSON.parse(data);
                var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                var msgContent = JSON.parse(Content);
                if (Cmd === "SetRole") {
                    var Code = msgContent.Code;
                    if (Code === 0) { //发布成功 - 分配的推流地址
                        resolve();
                    }
                    else { //发布失败
                        // Logger.error("user online failure, code => ", Code);
                        reject(Code);
                    }
                }
            });
            var objMsg = {};
            objMsg["Cmd"] = "SetRole";
            objMsg["Content"] = JSON.stringify({
                Role: role
            });
            _this._sendMessage(objMsg);
        });
    };
    /**
     * 停止/恢复接收远端用户的音视频流
     *
     * @param {boolea} MuteAudio
     * @param {boolean} MuteVideo
     * @memberof MediaServer
     */
    MediaServer.prototype.doMuteRemoteStream = function (UserId, MuteAudio, MuteVideo) {
        var _this = this;
        var objMsg = {};
        objMsg["Cmd"] = "MuteRemoteStream";
        objMsg["Content"] = JSON.stringify({
            UserId: UserId,
            MuteAudio: MuteAudio,
            MuteVideo: MuteVideo
        });
        _this._sendMessage(objMsg);
    };
    /**
     * 停止/恢复接收远端用户的音视频流
     *
     * @param {boolea} MuteAudio
     * @param {boolean} MuteVideo
     * @memberof MediaServer
     */
    MediaServer.prototype.doMuteLocalStream = function (MuteAudio, MuteVideo) {
        var _this = this;
        var objMsg = {};
        objMsg["Cmd"] = "MuteLocalStream";
        objMsg["Content"] = JSON.stringify({
            UserId: _this._userId,
            MuteAudio: MuteAudio,
            MuteVideo: MuteVideo
        });
        _this._sendMessage(objMsg);
    };
    /**
     * 断开WS连接
     *
     * @memberof ArServe
     */
    MediaServer.prototype.disconnectCTS = function (reason) {
        var _this = this;
        _this.signal && _this.signal.close(1000, reason);
        // _this.signal = null;
    };
    /**
     *
     *
     * @private
     * @memberof MediaServer
     */
    MediaServer.prototype._setConnectTimeout = function () {
        var _this = this;
        _this._clearConnectTimeout();
        _this._connectTimeout = setTimeout(function () {
            _this._emitConnectionState("DISCONNECTING", "NETWORK_ERROR");
        }, 10e3);
    };
    /**
     * 10s 保活一次
     *
     * @private
     * @memberof MediaServer
     */
    MediaServer.prototype._startKeepAlive = function () {
        var _this = this;
        _this._stopKeepAlive();
        _this.doKeepAlive();
        _this._keepALiveInterval = setInterval(function () {
            _this.doKeepAlive();
        }, _this._keepAliveIntervalTime);
    };
    /**
     *
     *
     * @private
     * @memberof MediaServer
     */
    MediaServer.prototype._stopKeepAlive = function () {
        var _this = this;
        _this._keepALiveInterval && clearInterval(_this._keepALiveInterval);
    };
    /**
     *
     *
     * @private
     * @memberof MediaServer
     */
    MediaServer.prototype._clearConnectTimeout = function () {
        var _this = this;
        _this._connectTimeout && clearTimeout(_this._connectTimeout);
    };
    /**
     *
     *
     * @memberof MediaServer
     */
    MediaServer.prototype._handleKeepAlive = function () {
        var _this = this;
        _this._removeHandleKeepAlive();
        _this._keepAliveTimeout = setTimeout(function () {
            //keepAlive超时，断开连接
            _this.disconnectCTS("NETWORK_ERROR");
        }, 3 * _this._keepAliveIntervalTime);
    };
    /**
     *
     *
     * @memberof MediaServer
     */
    MediaServer.prototype._removeHandleKeepAlive = function () {
        var _this = this;
        _this._keepAliveTimeout && clearTimeout(_this._keepAliveTimeout);
    };
    /**
     * 发送信令
     *
     * @param {object} msg
     * @returns
     */
    MediaServer.prototype._sendMessage = function (msg) {
        var _this = this;
        if (typeof msg !== "object" || _this._curState !== "CONNECTED") {
            // Logger.error("[_sendMessage] msg must be object.");
            return false;
        }
        _this.signal && _this.signal.send({
            data: JSON.stringify(msg),
            complete: function (res) {
                // console.log("send Message res", res);
            }
        });
        return true;
    };
    /**
     *
     * @param curState
     * @param revState
     * @param reason
     */
    MediaServer.prototype._emitConnectionState = function (curState, reason) {
        // if (curState === this._revState) return;
        // if (this._curState === "RECONNECTING" && curState !== "CONNECTED") return;
        this._revState = this._curState;
        this._curState = curState;
        this.handleMediaServerEvents && this.handleMediaServerEvents("ConnectionStateChange", {
            curState: this._curState,
            revState: this._revState,
            reason: reason
        });
        // Logger.debug(`[${this._userId}] connection state change: ${this._revState} -> ${this._curState}`);
        console.log("connection state change: ".concat(this._revState, " -> ").concat(this._curState));
    };
    return MediaServer;
}());

/**
 * 返回指定长度的小写字符串
 * @ignore
 */
var generateLowCaseString = function (len) {
    var stringLength = len;
    if (void 0 === stringLength) {
        stringLength = 7;
    }
    var randomString = Math.random().toString(16).substr(2, stringLength).toLowerCase();
    //返回指定长度的字符串，位数不足自动补齐
    if (randomString.length === stringLength) {
        return randomString;
    }
    else {
        return randomString + generateLowCaseString(stringLength - randomString.length);
    }
};
/**
 * 时间工具类
 * @ignore
 */
var TimeUtils = {
    /**
     * 日期格式化
     *
     * @param {*} formatType 格式	YYYY*MM*DD hh*mm*ss
     * @returns 随机生成的number
     */
    timesToDate: function (timestamp, formatType) {
        var timeType = "YYYY-MM-DD hh:mm:ss";
        if (typeof timestamp !== "number") {
            throw new Error("[timesToDate]: timestamp must be number");
        }
        if (formatType && typeof formatType === "string") {
            timeType = formatType;
        }
        var dateTimes = timestamp || Date.now();
        var dateNow = new Date(dateTimes) || new Date(dateTimes);
        var fYear = dateNow.getFullYear();
        var fMonth = dateNow.getMonth() + 1;
        var fDate = dateNow.getDate();
        var fHours = dateNow.getHours();
        var fMinutes = dateNow.getMinutes();
        var fSeconds = dateNow.getSeconds();
        if (timeType.indexOf("YYYY") > -1) {
            timeType = timeType.replace('YYYY', function (item) {
                return '' + fYear;
            });
        }
        if (timeType.indexOf("MM") > -1) {
            timeType = timeType.replace('MM', function (item) {
                return fMonth < 10 ? '0' + fMonth : '' + fMonth;
            });
        }
        else if (timeType.indexOf("M") > -1) {
            timeType = timeType.replace('M', function (item) {
                return '' + fMonth;
            });
        }
        if (timeType.indexOf("DD") > -1) {
            timeType = timeType.replace('DD', function (item) {
                return fDate < 10 ? '0' + fDate : '' + fDate;
            });
        }
        else if (timeType.indexOf("D") > -1) {
            timeType = timeType.replace('D', function (item) {
                return '' + fDate;
            });
        }
        if (timeType.indexOf("hh") > -1) {
            timeType = timeType.replace('hh', function (item) {
                return fHours < 10 ? '0' + fHours : '' + fHours;
            });
        }
        else if (timeType.indexOf("h") > -1) {
            timeType = timeType.replace('h', function (item) {
                return '' + fHours;
            });
        }
        if (timeType.indexOf("mm") > -1) {
            timeType = timeType.replace('mm', function (item) {
                return fMinutes < 10 ? '0' + fMinutes : '' + fMinutes;
            });
        }
        else if (timeType.indexOf("m") > -1) {
            timeType = timeType.replace('m', function (item) {
                return '' + fMinutes;
            });
        }
        if (timeType.indexOf("ss") > -1) {
            timeType = timeType.replace('ss', function (item) {
                return fSeconds < 10 ? '0' + fSeconds : '' + fSeconds;
            });
        }
        else if (timeType.indexOf("s") > -1) {
            timeType = timeType.replace('s', function (item) {
                return '' + fSeconds;
            });
        }
        return timeType;
    },
};

var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["NONE"] = 4] = "NONE";
})(LogLevel || (LogLevel = {}));
var SupLogger = /** @class */ (function () {
    function SupLogger() {
        this.logPrefix = "SupLogger"; //日志输出的前缀
        this.logLevel = LogLevel['NONE']; //默认不输出日志
        // private logUpload: boolean = false;
        this.uploadServeTranslators = []; //中间件执行队列
        this.DEBUG = LogLevel['DEBUG'];
        this.INFO = LogLevel['INFO'];
        this.WARNING = LogLevel['WARNING'];
        this.ERROR = LogLevel['ERROR'];
        this.NONE = LogLevel['NONE'];
    }
    /**
     * 调用本方法添加日志的中间件。
     * Note:
     *
     **/
    SupLogger.prototype.use = function (callback) {
        if (typeof callback === "function") {
            this.uploadServeTranslators.push(function (data, next) {
                callback(data, next);
            });
        }
    };
    /**
     * 调用本方法开启日志上传。
     * 开启后 SDK 的日志会上传到的服务器。
     * 日志上传功能默认为关闭状态，如果你需要开启此功能，请确保在所有方法之前调用本方法。
     **/
    // enableLogUpload () {
    //   if (this.logUpload) {
    //     this.warning("Failed to enable log upload, Already enabled.");
    //   } else  {
    //     this.logUpload = true;
    //   }
    // }
    /**
     * 该方法用于关闭日志上传。
     * 日志上传默认是关闭状态，如果你调用了开启日志上传（enableLogUpload)，可以通过本方法
     * 停止上传日志。
     **/
    // disableLogUpload () {
    //   if (this.logUpload) {
    //     this.logUpload = false;
    //   } else  {
    //     this.warning("Failed to disabled log upload, Already disabled.");
    //   }
    // }
    /**
     * 该方法设置 SDK 的日志输出级别。
     * 日志级别顺序依次为 NONE，ERROR，WARNING，INFO，DEBUG。选择一个级别，你就
     * 可以看到在该级别及该级别以上所有级别的日志信息。例如，如果你输入代码
     * ArRTC.Logger.setLogLevel(ArRTC.Logger.INFO);，就可以看到 INFO，ERROR 和
     * WARNING 级别的日志信息。
     * Parameters
     * level: DEBUG | INFO | WARNING | ERROR | NONE
     * 开发者设置的日志过滤级别，默认为 NONE。
     **/
    SupLogger.prototype.setLogLevel = function (level, prefix) {
        prefix && (this.logPrefix = prefix);
        if ("number" === typeof level && level > -1 && level < 5) {
            this.logLevel = level;
        }
    };
    /**
     * 该方法输出错误级的日志。
     **/
    SupLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // if ((logLevel < LogLevel['ERROR'] && logLevel > LogLevel['DEBUG'] && logLevel < LogLevel['NONE']) || logLevel === LogLevel['NONE']) return;
        if ((this.logLevel > LogLevel['ERROR'] && this.logLevel !== LogLevel['NONE']) || this.logLevel === LogLevel['NONE'])
            return;
        var params = args;
        var nowTime = Date.now();
        params.unshift("[".concat(TimeUtils.timesToDate(nowTime, "YYYY-MM-DD hh:mm:ss"), "] %c").concat(this.logPrefix, " [ERROR]: "), 'color: #dc3545;');
        if (this.uploadServeTranslators.length > 0) {
            this.uploadServeTranslators.map(function (task) {
                task({
                    type: "error",
                    params: params,
                    timestamp: nowTime
                }, function () {
                    console.error.apply(console, params);
                });
            });
        }
        else {
            console.error.apply(console, params);
        }
    };
    /**
     * 该方法输出警告级的日志。
     **/
    SupLogger.prototype.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // if ((logLevel < LogLevel['WARNING'] && logLevel > LogLevel['DEBUG'] && logLevel < LogLevel['NONE']) || logLevel === LogLevel['NONE']) return;
        if ((this.logLevel > LogLevel['WARNING'] && this.logLevel !== LogLevel['NONE']) || this.logLevel === LogLevel['NONE'])
            return;
        var params = args;
        var nowTime = Date.now();
        params.unshift("[".concat(TimeUtils.timesToDate(nowTime, "YYYY-MM-DD hh:mm:ss"), "] %c").concat(this.logPrefix, " [WARNING]: "), 'color: #ffc107;');
        if (this.uploadServeTranslators.length > 0) {
            this.uploadServeTranslators.map(function (task) {
                task({
                    type: "warning",
                    params: params,
                    timestamp: nowTime
                }, function () {
                    console.warn.apply(console, params);
                });
            });
        }
        else {
            console.warn.apply(console, params);
        }
    };
    /**
     * 该方法输出消息级的日志。
     **/
    SupLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // if ((logLevel < LogLevel['INFO'] && logLevel > LogLevel['DEBUG'] && logLevel < LogLevel['NONE']) || logLevel === LogLevel['NONE']) return;
        if ((this.logLevel > LogLevel['INFO'] && this.logLevel !== LogLevel['NONE']) || this.logLevel === LogLevel['NONE'])
            return;
        var params = args;
        var nowTime = Date.now();
        params.unshift("[".concat(TimeUtils.timesToDate(nowTime, "YYYY-MM-DD hh:mm:ss"), "] %c").concat(this.logPrefix, " [INFO]: "), 'color: #6facff;');
        if (this.uploadServeTranslators.length > 0) {
            this.uploadServeTranslators.map(function (task) {
                task({
                    type: "info",
                    params: params,
                    timestamp: nowTime
                }, function () {
                    console.log.apply(console, params);
                });
            });
        }
        else {
            console.log.apply(console, params);
        }
    };
    /**
     * 该方法输出debug级的日志。
     **/
    SupLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if ((this.logLevel > LogLevel['DEBUG'] && this.logLevel !== LogLevel['NONE']) || this.logLevel === LogLevel['NONE'])
            return;
        var params = args;
        var nowTime = Date.now();
        params.unshift("[".concat(TimeUtils.timesToDate(nowTime, "YYYY-MM-DD hh:mm:ss"), "] %c").concat(this.logPrefix, " [DEBUG]: "), 'color: #007bff;');
        if (this.uploadServeTranslators.length > 0) {
            this.uploadServeTranslators.map(function (task) {
                task({
                    type: "debug",
                    params: params,
                    timestamp: nowTime
                }, function () {
                    console.log.apply(console, params);
                });
            });
        }
        else {
            console.log.apply(console, params);
        }
    };
    return SupLogger;
}());
/**
 * @ignore
 * Variables:
 * - DEBUG: 0
 * - ERROR: 3
 * - INFO: 1
 * - NONE: 4
 * - WARNING: 2
 * - logLevel: 0
 * - logPrefix: "SupLogger"
 * Method:
 * - warning
 * - info
 * - debug
 * - error
 * - info
 * - setLogLevel
 * - use
 */
var Logger = new SupLogger();
Logger.setLogLevel(Logger.DEBUG, "anyrtc-SDK");

/**
 * 错误码
 *
 * @enum {number}
 */
var ErrorCode;
(function (ErrorCode) {
    /**
     * 请求异常
     *
     * 根据 reason 描述检查使用是否符合要求；
     */
    ErrorCode[ErrorCode["UN_AUTHORIZED"] = 401] = "UN_AUTHORIZED";
    /**
     * 请求太频繁
     */
    ErrorCode[ErrorCode["INVALID_OPERATION_FREQUENT"] = 429] = "INVALID_OPERATION_FREQUENT";
    /**
     * 非法 Mute 操作
     *
     * 在订阅前尝试 mute 远端流
     * 在订阅前尝试 unmute 远端流
     */
    ErrorCode[ErrorCode["INVALID_OPERATIONAL_MUTE"] = 430] = "INVALID_OPERATIONAL_MUTE";
    /**
     * 非法参数
     */
    ErrorCode[ErrorCode["INVALID_PARAMS"] = 431] = "INVALID_PARAMS";
    /**
     * 非法的订阅用户 ID
     */
    ErrorCode[ErrorCode["INVALID_SUBSCRIBE_UID"] = 432] = "INVALID_SUBSCRIBE_UID";
    /**
     * 非法 Publish 操作
     * - 观众端无法发布流
     * - 观众端无法取消发布流
     */
    ErrorCode[ErrorCode["INVALID_OPERATION_PUBLISH"] = 433] = "INVALID_OPERATION_PUBLISH";
    /**
     * 非法 Join 操作
     *
     * - 在加入频道前尝试退出
     * - 在加入频道前尝试setRole
     * - 发布流时的 uid 和加入频道时的 uid 不一致
     * - 取消发布流时的 uid 和加入频道时的 uid 不一致
     */
    ErrorCode[ErrorCode["INVALID_OPERATION_JOIN"] = 434] = "INVALID_OPERATION_JOIN";
    /**
     * 内部错误
     */
    ErrorCode[ErrorCode["INTERNAL"] = 500] = "INTERNAL";
    /**
     * 发送超时
     */
    ErrorCode[ErrorCode["SEND_TIME_OUT"] = 903] = "SEND_TIME_OUT";
})(ErrorCode || (ErrorCode = {}));
/**
 *
 */
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        var _this_1 = _super.call(this) || this;
        /**
         * 用户ID
         *
         * @type {string}
         */
        _this_1.uid = "";
        /**
         * 用户角色
         *
         * @type {string}
         */
        _this_1.role = "broadcaster";
        /**
         * 频道ID
         *
         * @type {string}
         */
        _this_1.channelName = "";
        /**
         * 远程用户人员列表
         *
         * @type {RemoteUser[]}
         */
        _this_1.remoteUser = [];
        /**
         * 本地视频是否开启
         *
         * @type {boolean}
         */
        _this_1.enableVideo = true;
        /**
         * 本地音频是否开启
         *
         * @type {boolean}
         */
        _this_1.enableAudio = true;
        /**
         * 服务链接状态
         *
         * @internal
         * @type {string}
         */
        _this_1._state = "DISCONNECTED";
        /**
         *
         * @internal
         * @type {string}
         */
        _this_1._appId = "";
        /**
         *
         * @internal
         * @type {string}
         */
        _this_1._sessionId = "";
        /**
         *
         * @internal
         * @type {{ [key: string]: any }}
         */
        _this_1._joinInfo = {};
        /**
         *
         * @internal
         * @type {boolean}
         */
        _this_1._useWss = true;
        /**
         *
         * @internal
         * @type {boolean}
         */
        _this_1._online = false;
        /**
         *
         * @internal
         * @type {boolean}
         */
        _this_1._hasPublished = false;
        return _this_1;
    }
    /**
     * 销毁客户端对象。
     * @param onSuccess 方法调用成功时执行的回调函数。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     * - (err: { code: number; reason: string }): void
     *    - err: code: number
     *    - reason: string
     */
    Client.prototype.destroy = function (onSuccess, onFailure) {
        var _a;
        var _this = this;
        _this._state === "CONNECTED" && ((_a = _this._ws) === null || _a === void 0 ? void 0 : _a.disconnectCTS());
        _this._ws = void 0;
        // 重置
        {
            _this.uid = "";
            _this.role = "broadcaster";
            _this.channelName = "";
            _this.remoteUser = [];
            _this.enableVideo = true;
            _this.enableAudio = true;
            _this._state = "";
            _this._sessionId = "";
            _this._joinInfo = {};
            _this._online = false;
            _this._hasPublished = false;
        }
        onSuccess && onSuccess();
    };
    /**
     * 初始化客户端对象。
     * @param appId 你的小程序项目的 App ID。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     * - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.init = function (appId, onSuccess, onFailure) {
        var _this = this;
        // 校验appid
        if ("string" !== typeof appId || "" === appId) {
            Logger.error("[init] Invalid appId");
            onFailure && onFailure({
                code: ErrorCode.UN_AUTHORIZED,
                reason: 'Invalid appId'
            });
            return;
        }
        _this._appId = appId.trim();
        onSuccess && onSuccess();
    };
    /**
     * 加入频道。
     * @param token 在 app 服务器端生成的用于鉴权的 Token：
     * - 安全要求不高：你可以使用控制台生成的临时 Token，详见[获取临时 Token]()。
     * - 安全要求高：将值设为你的服务端生成的正式 Token，详见[从服务端生成 Token]()。
     * @param channel 频道名，能标识直播频道的字符串。
     * @param uid 指定用户的 ID。32 位无符号整数。建议设置范围：1 到 (2^32-1)，并保证唯一性。
     * @param onSuccess 方法调用成功时执行的回调函数。返回值为用户 ID。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     */
    Client.prototype.join = function (token, channel, uid, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._online || _this._state === "CONNECTED") {
            Logger.error("[join] Invalid Operational, Already joined");
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATION_JOIN,
                reason: '[join] Invalid Operational, Already joined'
            });
            return;
        }
        // 校验channel
        var channelRegexp = /^[a-zA-Z0-9 \!\#\$\%\&\(\)\+\-\:\;\<\=\.\>\?\@\[\]\^\_\{\}\|\~\,]{1,64}$/;
        if ("string" !== typeof channel || !channelRegexp.test(channel)) {
            Logger.error("[join] Invalid channel");
            onFailure && onFailure({
                code: ErrorCode.INVALID_PARAMS,
                reason: '[join] Invalid channel'
            });
            return;
        }
        _this.channelName = channel;
        // 校验 uid
        // const uidRegexp = /^[a-zA-Z0-9]{1,48}$/;
        var uidRegexp = /^[a-zA-Z0-9 \!\#\$\%\&\(\)\+\-\:\;\<\=\.\>\?\@\[\]\^\_\{\}\|\~\,]{1,48}$/;
        if ("" !== uid && void 0 !== uid && null !== uid) {
            if (!uidRegexp.test(uid)) {
                Logger.error("[join] Invalid uid");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_PARAMS,
                    reason: '[join] Invalid uid'
                });
                return;
            }
        }
        _this._joinInfo.token = token ? token : "";
        // 生成
        _this._joinInfo.sid = generateLowCaseString(32);
        _this._joinInfo.joinStartTime = new Date();
        if (!_this._ws) {
            // 创建MediaServer实例
            _this._createMediaServerInstance();
            // 连接网关
            _this._authGateWay(uid, token).then(function (uid) {
                onSuccess && onSuccess(uid);
            }).catch(function (errName) {
                var errCode;
                var reason = errName;
                switch (errName) {
                    case GateWayError.INVALID_PARAMS:
                        errCode = ErrorCode.INVALID_PARAMS;
                        break;
                    case GateWayError.DEVELOPER_INVALID:
                    case GateWayError.UID_BANNED:
                    case GateWayError.IP_BANNED:
                    case GateWayError.CHANNEL_BANNED:
                    case GateWayError.APPID_INVALID:
                    case GateWayError.SERVER_NOT_OPEN:
                    case GateWayError.TOKEN_EXPIRED:
                    case GateWayError.TOKEN_INVALID:
                        errCode = ErrorCode.UN_AUTHORIZED;
                        break;
                    case GateWayError.TIMEOUT:
                        errCode = ErrorCode.SEND_TIME_OUT;
                        break;
                }
                onFailure && onFailure({
                    code: errCode,
                    reason: reason
                });
            });
        }
        else {
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doJoin(_this._joinInfo.content);
        }
    };
    /**
     * 退出频道。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     * - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.leave = function (onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._state === "CONNECTED") {
            // 取消发布
            if (_this._hasPublished) {
                _this.unpublish(function () {
                    Logger.debug("[leave] unpublish success!");
                    _this._hasPublished = false;
                }, function () {
                    Logger.error("[leave] unpublish failure");
                    // throw new Error("unpublish failure.");
                });
            }
            // 取消订阅
            _this.remoteUser.map(function (user) {
                _this.unsubscribe(user.uid, function () {
                    _this.emit("stream-removed", { uid: user.uid });
                }, function () {
                });
            });
            // 退出频道
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doLeave().then(function () {
                // 重置
                {
                    _this.role = "broadcaster";
                    _this.channelName = "";
                    _this.remoteUser = [];
                    _this.enableVideo = true;
                    _this.enableAudio = true;
                    _this._state = "";
                    _this._sessionId = "";
                    _this._online = false;
                }
                onSuccess && onSuccess();
            }).catch(function (err) {
                onFailure && onFailure({
                    code: ErrorCode.SEND_TIME_OUT,
                    reason: err
                });
            });
        }
    };
    /**
     * 停止接收远端用户的音视频流。
     * @param uid 远端用户的 ID。
     * @param target 选择停止接收哪一种流，有三种选择：
     * - audio：本地用户发送的音频流，即声音。
     * - video：本地用户发送的视频流，即视频画面。
     * - all：本地用户发送的音视频流，即声音和视频画面。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     * - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.mute = function (uid, target, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (this._state === "CONNECTED") {
            if (typeof uid !== "string" || uid === "") {
                Logger.error("[mute] Invalid uid");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_PARAMS,
                    reason: '[join] Invalid uid'
                });
                return;
            }
            if (target !== "video" && target !== "audio" && target !== "all") {
                Logger.error("[mute] Invalid target");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_PARAMS,
                    reason: '[join] Invalid target uid'
                });
                return;
            }
            var remoteUser = _this.remoteUser.find(function (user) { return user.uid === uid; });
            if (remoteUser) {
                if (remoteUser.hasSub) {
                    var muteVideo = remoteUser.muteVideo;
                    var muteAudio = remoteUser.muteAudio;
                    // 如果已经禁止接收、对方也有发布视频 才能去禁用视频
                    if ((!remoteUser.hasVideo && !remoteUser.hasAudio) ||
                        (target === "video" && remoteUser.hasVideo && muteVideo) ||
                        (target === "audio" && remoteUser.hasAudio && muteAudio) ||
                        (target === "all" && (muteVideo && muteAudio))) {
                        Logger.error("[mute] Invalid operation, The user's (" + uid + target + ")  already mute");
                        onFailure && onFailure({
                            code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                            reason: "[mute] Invalid operation, The user's (" + uid + target + ")  already mute"
                        });
                        return;
                    }
                    switch (target) {
                        case "video":
                            !muteVideo && (muteVideo = true);
                            break;
                        case "audio":
                            !muteAudio && (muteAudio = true);
                            break;
                        case "all":
                            !muteAudio && (muteAudio = true);
                            !muteVideo && (muteVideo = true);
                            break;
                    }
                    remoteUser.muteVideo = muteVideo;
                    remoteUser.muteAudio = muteAudio;
                    // 是否接收远程人员的音视频
                    (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doMuteRemoteStream(uid, muteAudio, muteVideo);
                    onSuccess && onSuccess();
                }
                else {
                    onFailure && onFailure({
                        code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                        reason: "[mute] You haven't subscribed to this user's media yet"
                    });
                }
            }
            else {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: '[mute] Invalid Operational, Mute audio or video should after subscribe.'
                });
            }
        }
        else {
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATION_JOIN,
                reason: '[mute] Invalid Operational, join before mute please'
            });
        }
    };
    /**
     * 停止发送本地用户的音视频流。
     * @param target 选择停止发送哪一种流，有三种选择：
     * - audio：本地用户发送的音频流，即声音。
     * - video：本地用户发送的视频流，即视频画面。
     * - all：本地用户发送的音视频流，即声音和视频画面。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.muteLocal = function (target, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._state === "CONNECTED") {
            if (!_this._hasPublished) {
                Logger.error("[muteLocal] You haven't published the media stream");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: "You haven't published the media stream."
                });
                return;
            }
            if (target !== "video" && target !== "audio" && target !== "all") {
                Logger.error("[muteLocal] Invalid target");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_PARAMS,
                    reason: "[muteLocal] Invalid target"
                });
                return;
            }
            // 如果已经禁用则无需再次发送信令
            if ((target === "video" && !_this.enableVideo) ||
                (target === "audio" && !_this.enableAudio) ||
                (target === "all" && !_this.enableVideo && !_this.enableAudio)) {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: "[muteLocal] Invalid operation, already mute"
                });
                return;
            }
            var muteVideo = !_this.enableVideo;
            var muteAudio = !_this.enableAudio;
            switch (target) {
                case "video":
                    !muteVideo && (muteVideo = true);
                    break;
                case "audio":
                    !muteAudio && (muteAudio = true);
                    break;
                case "all":
                    !muteAudio && (muteAudio = true);
                    !muteVideo && (muteVideo = true);
                    break;
            }
            _this.enableVideo = !muteVideo;
            _this.enableAudio = !muteAudio;
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doMuteLocalStream(muteAudio, muteVideo);
            onSuccess && onSuccess();
        }
        else {
            Logger.error("[muteLocal] Invalid Operational, join before muteLocal please");
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                reason: '[muteLocal] Invalid Operational, join before muteLocal please'
            });
        }
    };
    /**
     * 发布本地音视频流。
     *
     * 该方法将本地音视频流发布到 SD-RTN。互动直播中，调用该 API 的用户即默认为主播。
     *
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.publish = function (onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._hasPublished) {
            Logger.error("[publish] You already published the media stream.");
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATION_PUBLISH,
                reason: "You already published the media stream."
            });
            return;
        }
        if (this._state === "CONNECTED") {
            if (this.role !== "broadcaster") {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATION_PUBLISH,
                    reason: "audience can't publish"
                });
                return;
            }
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doPublish().then(function (data) {
                _this._hasPublished = true;
                onSuccess && onSuccess(data.url);
            }).catch(function (err) {
                _this._hasPublished = false;
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATION_PUBLISH,
                    reason: err
                });
            });
        }
        else {
            Logger.error("[publish] Invalid Operational, join before publish please");
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATION_PUBLISH,
                reason: "[publish] Invalid Operational, join before publish please."
            });
        }
    };
    /**
     * 重新加入频道。
     *
     * 该方法让用户重新加入RTC频道。如果你的小程序中有切后台的场景需求，请确保使用该方法做好重连机制。
     *
     * @param token 在 app 服务器端生成的用于鉴权的 Token：
     * - 安全要求不高：你可以使用控制台生成的临时 Token，详见[获取临时 Token]()。
     * - 安全要求高：将值设为你的服务端生成的正式 Token，详见[从服务端生成 Token]()。
     * @param channel 频道名，能标识直播频道的字符串。
     * @param uid 指定用户的 ID。32 位无符号整数。建议设置范围：1 到 (2^32-1)，并保证唯一性。
     * @param uids 频道内已有用户的用户 ID 列表。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.rejoin = function (token, channel, uid, uids, onSuccess, onFailure) {
        throw new Error("Method not implemented.");
    };
    /**
     * 设置用户角色。
     *
     * 该方法设置用户角色。小程序端的用户角色默认为主播，因此在同时满足以下条件的使用场景中，必须调用该接口将小程序端的用户角色设置为观众再进入频道。
     * - 小程序 SDK 与 Native SDK 互通
     * - Native 端频道模式为直播模式
     * - 小程序作为观众端加入频道
     * 注：如果在主播已 publish 的状态下调用该方法将用户角色设置为 audience，会导致之前的推流地址无效。
     * @param role 用户角色。选择如下一种角色：
     * - broadcaster：(默认) 将用户角色设置为主播。主播可以调用 publish 和 unpublish 方法。
     * - audience：将用户角色设置为观众。观众不能调用 publish 和 unpublish 方法。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.setRole = function (role, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (role !== "broadcaster" && role !== "audience") {
            Logger.error("[setRole] Invalid role.");
            onFailure && onFailure({
                code: ErrorCode.INVALID_PARAMS,
                reason: 'Invalid role'
            });
            return;
        }
        if (_this._state === "CONNECTED") {
            // 从主播到游客，取消发布，之前的推流会失效
            if (role === "audience" && _this._hasPublished) {
                _this.unpublish(function () {
                    Logger.debug("[setRole] broadcaster -> audience, unpublish successful.");
                }, function () {
                    Logger.error("[setRole] broadcaster -> audience, unpublish failure.");
                });
                onSuccess && onSuccess();
                return;
            }
            _this.role = ~["broadcaster", "audience"].indexOf(role) ? role : "audience";
            var internalRole = role === "broadcaster" ? "Host" : "Audience";
            _this.role = role === "broadcaster" ? "Host" : "Audience";
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.setClientRole(internalRole).then(function () {
                onSuccess && onSuccess();
            }).catch(function (err) {
                onFailure && onFailure({
                    code: ErrorCode.SEND_TIME_OUT,
                    reason: err
                });
            });
        }
        else {
            _this.role = ~["broadcaster", "audience"].indexOf(role) ? role : "audience";
            onSuccess && onSuccess();
        }
    };
    /**
     * 订阅远端音视频流。
     * 该方法从 SD-RTN 订阅并接收远端音视频流。
     * @param uid 要订阅的远端用户 ID。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.subscribe = function (uid, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (this._state === "CONNECTED") {
            if (typeof uid !== "string" || uid === "") {
                Logger.error("[subscribe] Invalid uid.");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_SUBSCRIBE_UID,
                    reason: "Invalid uid"
                });
                return;
            }
            var remoteUser_1 = _this.remoteUser.find(function (user) { return user.uid === uid; });
            if (remoteUser_1) {
                if (!remoteUser_1.hasSub) {
                    (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doSubscribe(uid, _this.channelName).then(function (url) {
                        remoteUser_1.hasSub = true;
                        onSuccess && onSuccess(url);
                    }).catch(function (err) {
                        onFailure && onFailure(err);
                    });
                }
                else {
                    onFailure && onFailure({
                        code: ErrorCode.INVALID_SUBSCRIBE_UID,
                        reason: "[subscribe] You have subscribed to the user " + uid + " media stream"
                    });
                }
            }
            else {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_SUBSCRIBE_UID,
                    reason: "[subscribe] Can't find the user id is : " + uid
                });
            }
        }
        else {
            onFailure && onFailure({
                code: ErrorCode.INVALID_SUBSCRIBE_UID,
                reason: "[subscribe] Invalid Operational, join before subscribe please."
            });
        }
    };
    /**
     * 恢复接收远端用户的音视频流。
     * @param uid 远端用户的 ID。
     * @param target 选择停止接收哪一种流，有三种选择：
     * - audio：本地用户发送的音频流，即声音。
     * - video：本地用户发送的视频流，即视频画面。
     * - all：本地用户发送的音视频流，即声音和视频画面。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.unmute = function (uid, target, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._state === "CONNECTED") {
            if (typeof uid !== "string" || uid === "") {
                Logger.error("[unmute] Invalid uid.");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: "[unmute] Invalid uid."
                });
                return;
            }
            if (target !== "video" && target !== "audio" && target !== "all") {
                Logger.error("[unmute] Invalid target.");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_PARAMS,
                    reason: "[unmute] Invalid target."
                });
                return;
            }
            var remoteUser = _this.remoteUser.find(function (user) { return user.uid === uid; });
            if (remoteUser) {
                if (remoteUser.hasSub) {
                    var muteVideo = remoteUser.muteVideo;
                    var muteAudio = remoteUser.muteAudio;
                    // 如果正在接收、对方也有发布视频 不处理
                    if ((!remoteUser.hasVideo && !remoteUser.hasAudio) ||
                        (target === "video" && remoteUser.hasVideo && !muteVideo) ||
                        (target === "audio" && remoteUser.hasAudio && !muteAudio) ||
                        (target === "all" && !muteAudio && !muteVideo)) {
                        Logger.error("[unmute] Invalid operation, The user's (" + uid + target + ")  already unmute");
                        onFailure && onFailure({
                            code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                            reason: "[unmute] Invalid operation, The user's (" + uid + target + ")  already unmute"
                        });
                        return;
                    }
                    switch (target) {
                        case "video":
                            muteVideo && (muteVideo = false);
                            break;
                        case "audio":
                            muteAudio && (muteAudio = false);
                            break;
                        case "all":
                            muteAudio && (muteAudio = false);
                            muteVideo && (muteVideo = false);
                            break;
                    }
                    remoteUser.muteVideo = muteVideo;
                    remoteUser.muteAudio = muteAudio;
                    // 是否接收远程人员的音视频
                    (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doMuteRemoteStream(uid, muteAudio, muteVideo);
                    onSuccess && onSuccess();
                }
                else {
                    onFailure && onFailure({
                        code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                        reason: "[unmute] You haven't subscribed to this user's media yet."
                    });
                }
            }
            else {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: '[mute] Invalid Operational, UnMute audio or video should after subscribe.'
                });
            }
        }
        else {
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                reason: "[unmute] Invalid Operational, join before unmute please."
            });
        }
    };
    /**
     * 恢复发送本地用户的音视频流。
     * @param target 选择恢复发送哪一种流，有三种选择：
     * - audio：本地用户发送的音频流，即声音。
     * - video：本地用户发送的视频流，即视频画面。
     * - all：本地用户发送的音视频流，即声音和视频画面。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.unmuteLocal = function (target, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._state === "CONNECTED") {
            if (!_this._hasPublished) {
                Logger.error("[unmuteLocal] You haven't published the media stream.");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: "[unmuteLocal] You haven't published the media stream."
                });
                return;
            }
            if (target !== "video" && target !== "audio" && target !== "all") {
                Logger.error("[unmuteLocal] Invalid target.");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: "[unmuteLocal] Invalid target."
                });
                return;
            }
            // 如果已经禁用则无需再次发送信令
            if ((target === "video" && _this.enableVideo) ||
                (target === "audio" && _this.enableAudio) ||
                (target === "all" && _this.enableVideo && _this.enableAudio)) {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                    reason: "[unmuteLocal] Invalid Operational, already unmute."
                });
                return;
            }
            var muteVideo = !_this.enableVideo;
            var muteAudio = !_this.enableAudio;
            switch (target) {
                case "video":
                    muteVideo && (muteVideo = false);
                    break;
                case "audio":
                    muteAudio && (muteAudio = false);
                    break;
                case "all":
                    muteAudio && (muteAudio = false);
                    muteVideo && (muteVideo = false);
                    break;
            }
            _this.enableVideo = !muteVideo;
            _this.enableAudio = !muteAudio;
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doMuteLocalStream(muteAudio, muteVideo);
            onSuccess && onSuccess();
        }
        else {
            Logger.error("[unmuteLocal] Invalid Operational, join before unmuteLocal please.");
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATIONAL_MUTE,
                reason: "[unmuteLocal] Invalid Operational, join before unmuteLocal please."
            });
        }
    };
    /**
     * 停止发布本地音视频流。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.unpublish = function (onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (_this._state === "CONNECTED") {
            if (!_this._hasPublished) {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATION_PUBLISH,
                    reason: "You haven't published the media stream."
                });
                return;
            }
            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doUnPublish().then(function () {
                _this._hasPublished = false;
                onSuccess && onSuccess();
            }).catch(function (err) {
                onFailure && onFailure({
                    code: ErrorCode.INVALID_OPERATION_PUBLISH,
                    reason: err
                });
            });
        }
        else {
            onFailure && onFailure({
                code: ErrorCode.INVALID_OPERATION_PUBLISH,
                reason: "[unpublish] Invalid Operational, join before unpublish please."
            });
        }
    };
    /**
     * 停止订阅远端音视频流。
     * 该方法停止从 SD-RTN 订阅并接收远端音视频流。
     * @param uid 要停止订阅的远端用户 ID。
     * @param onSuccess 方法调用成功时执行的回调函数。无返回值。
     * @param onFailure 方法调用失败时执行的回调函数。返回值为错误码和错误信息。
     *  - (err: { code: number; reason: string }): void
     *    - code: number
     *    - reason: string
     */
    Client.prototype.unsubscribe = function (uid, onSuccess, onFailure) {
        var _a;
        var _this = this;
        if (this._state === "CONNECTED") {
            if (typeof uid !== "string" || uid === "") {
                Logger.error("[unsubscribe] Invalid uid.");
                onFailure && onFailure({
                    code: ErrorCode.INVALID_SUBSCRIBE_UID,
                    reason: "[unsubscribe] Invalid uid."
                });
                return;
            }
            var remoteUser_2 = _this.remoteUser.find(function (user) { return user.uid === uid; });
            if (remoteUser_2) {
                if (remoteUser_2.hasSub) {
                    (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doUnSubscribe(uid, _this.channelName).then(function () {
                        remoteUser_2.hasSub = false;
                        onSuccess && onSuccess();
                    }).catch(function (err) {
                        onFailure && onFailure({
                            code: ErrorCode.INVALID_SUBSCRIBE_UID,
                            reason: err
                        });
                    });
                }
            }
        }
        else {
            onFailure && onFailure({
                code: ErrorCode.INVALID_SUBSCRIBE_UID,
                reason: "[unsubscribe] Invalid Operational, join before unsubscribe please."
            });
        }
    };
    /**
     * 私有方法
     *
     * @param {{[key: string]: any}} options
     */
    Client.prototype.setParameters = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, ConfPriCloudAddr, ServerAdd, Port, Wss;
            return __generator(this, function (_a) {
                _this = this;
                ConfPriCloudAddr = options.ConfPriCloudAddr;
                // 配置私有云服务
                if (ConfPriCloudAddr) {
                    ServerAdd = ConfPriCloudAddr.ServerAdd, Port = ConfPriCloudAddr.Port, Wss = ConfPriCloudAddr.Wss;
                    // 是否使用wss
                    if ("boolean" === typeof Wss) {
                        _this._useWss = Wss;
                    }
                    else {
                        _this._useWss = true;
                    }
                    ServerAdd && (Config.GATEWAY_ADDRESS = _this._useWss ? "https://".concat(ServerAdd) : "http://" + ServerAdd + (Port ? ":" + Port : ""));
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 监听RTC网关的回调
     *
     * @internal
     * @param eventMsg
     */
    Client.prototype._createMediaServerInstance = function () {
        var _this = this;
        if (!_this._ws) {
            _this._ws = new MediaServer();
            //
            _this._ws.handleMediaServerEvents = function (Cmd, msgContent) {
                // console.log("Cmd ", Cmd, msgContent);
                msgContent.Code;
                switch (Cmd) {
                    case "ConnectionStateChange":
                        var curState = msgContent.curState, revState = msgContent.revState, reason = msgContent.reason;
                        _this._state = curState;
                        // TODO 需要添加「重连逻辑」，但是重连逻辑需要配合 live-pusher / live-player
                        _this.emit("connection-state-change", curState, revState, reason);
                        break;
                    case "StreamAdded": // 远端用户发布媒体流
                        msgContent.ChanId; var UserId = msgContent.UserId;
                        // 添加远端用户
                        _this.remoteUser.push({
                            uid: UserId,
                            hasSub: false,
                            hasVideo: true,
                            hasAudio: true,
                            muteVideo: false,
                            muteAudio: false,
                        });
                        _this.emit("stream-added", { uid: UserId });
                        break;
                    case "StreamRemove": // 远端用户取消发布媒体流
                        msgContent.ChanId; var UserId = msgContent.UserId;
                        // 移除远端用户
                        for (var index = _this.remoteUser.length - 1; index > -1; index--) {
                            var element = _this.remoteUser[index];
                            if (element.uid === UserId) {
                                _this.remoteUser.splice(index, 1);
                            }
                        }
                        _this.emit("stream-removed", { uid: UserId });
                        break;
                    case "UserAudStatus": // 远端用户开关音频
                        msgContent.ChanId; var UserId = msgContent.UserId, Audio = msgContent.Audio;
                        var remoteUser = _this.remoteUser.find(function (user) { return user.uid === UserId; });
                        remoteUser.hasAudio = Audio;
                        remoteUser.muteAudio = !Audio;
                        if (Audio) {
                            _this.emit("unmute-audio", { uid: UserId });
                        }
                        else {
                            _this.emit("mute-audio", { uid: UserId });
                        }
                        break;
                    case "UserVidStatus": // 远端用户开关视频
                        msgContent.ChanId; var UserId = msgContent.UserId, Video = msgContent.Video;
                        var remoteUser = _this.remoteUser.find(function (user) { return user.uid === UserId; });
                        remoteUser.hasVideo = Video;
                        remoteUser.muteVideo = !Video;
                        if (Video) {
                            _this.emit("unmute-video", { uid: UserId });
                        }
                        else {
                            _this.emit("mute-video", { uid: UserId });
                        }
                        break;
                    // Extend
                }
            };
        }
    };
    /**
     *
     *
     * @private
     * @internal
     * @param {string} uid
     * @param {string} token
     * @returns
     */
    Client.prototype._authGateWay = function (uid, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _this, data, sessionId, mediaServers, content, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _this = this;
                        return [4 /*yield*/, GateWay.joinGateway({
                                sid: _this._joinInfo.sid,
                                appId: _this._appId,
                                cname: _this.channelName,
                                uid: uid || "",
                                token: token || "",
                                extend: "",
                                // proxyServer: "",
                                wss: _this._useWss
                            })];
                    case 1:
                        data = _c.sent();
                        if (!data) return [3 /*break*/, 4];
                        sessionId = data.session_id, mediaServers = data.addresses;
                        if (sessionId) {
                            _this._sessionId = sessionId;
                        }
                        if (!mediaServers || (mediaServers instanceof Array && mediaServers.length === 0)) {
                            Logger.error("Can not find service list.");
                            throw new Error("Can not find service list");
                        }
                        // 订阅流媒体服务列表
                        // _this._msSub = mediaServers.filter((item: { type: number }) => item.type === 1);
                        return [4 /*yield*/, _this._connectMediaServer(data)];
                    case 2:
                        // 订阅流媒体服务列表
                        // _this._msSub = mediaServers.filter((item: { type: number }) => item.type === 1);
                        _c.sent();
                        content = {
                            ChanId: _this.channelName,
                            //?
                            ChanSId: _this._sessionId,
                            UserId: uid,
                            UserSId: _this._joinInfo.sid,
                            SdkVer: Config.SDK_VERSION,
                            // Role: _this._config.role,
                            SessionId: "",
                            AcsToken: token || ""
                        };
                        _this._joinInfo.content = content;
                        _b = _this;
                        return [4 /*yield*/, ((_a = _this._ws) === null || _a === void 0 ? void 0 : _a.doJoin(content))];
                    case 3:
                        _b.uid = (_c.sent());
                        _this._online = true;
                        // 赋值joinInfo
                        _this._joinInfo = __assign(__assign({}, _this._joinInfo), { apResponse: data, 
                            // clientId: _this._clientId,
                            appId: _this._appId, cname: _this.channelName, uid: _this.uid, turnServer: {}, proxyServer: undefined, token: token ? token : _this._appId, useProxyServer: false, startTime: Date.now() });
                        return [2 /*return*/, _this.uid];
                    case 4: return [2 /*return*/, ""];
                }
            });
        });
    };
    /**
     * 轮询连接流媒体服务
     *
     * @private
     * @internal
     * @param {any[]} publishMediaServers
     */
    Client.prototype._connectMediaServer = function (data) {
        var _this = this;
        var mediaServers = data.addresses;
        // 发布流媒体服务列表
        var publishMediaServers = mediaServers.filter(function (item) { return item.type === 0; });
        return new Promise(function (resolve, reject) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var connected, publishMediaServers_1, publishMediaServers_1_1, mediaSever, e_1_1;
                var e_1, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            connected = false;
                            if (!(publishMediaServers.length > 0)) return [3 /*break*/, 9];
                            _e.label = 1;
                        case 1:
                            _e.trys.push([1, 6, 7, 8]);
                            publishMediaServers_1 = __values(publishMediaServers), publishMediaServers_1_1 = publishMediaServers_1.next();
                            _e.label = 2;
                        case 2:
                            if (!!publishMediaServers_1_1.done) return [3 /*break*/, 5];
                            mediaSever = publishMediaServers_1_1.value;
                            // Logger.debug("begin connect media server ", mediaSever);
                            (_a = _this._ws) === null || _a === void 0 ? void 0 : _a.setAppInfo({
                                appId: _this._appId
                            });
                            (_b = _this._ws) === null || _b === void 0 ? void 0 : _b.configServer(_this._useWss, mediaSever.addr, mediaSever.port);
                            return [4 /*yield*/, ((_c = _this._ws) === null || _c === void 0 ? void 0 : _c.connectCTS())];
                        case 3:
                            _e.sent();
                            resolve();
                            connected = true;
                            return [3 /*break*/, 5];
                        case 4:
                            publishMediaServers_1_1 = publishMediaServers_1.next();
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            e_1_1 = _e.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 8];
                        case 7:
                            try {
                                if (publishMediaServers_1_1 && !publishMediaServers_1_1.done && (_d = publishMediaServers_1.return)) _d.call(publishMediaServers_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 8:
                            // 所有服务均失败
                            // 如果重连时间没有超过20分钟保持继续轮询
                            if (!connected) {
                                if (Date.now() - _this._joinInfo.joinStartTime < Config.GATEWAY_ERTRY_TIMEOUT) {
                                    _this._connectMediaServer(data);
                                }
                                else {
                                    Logger.error('Stop reconnection because there are too many reconnections.');
                                    // _this.emit(
                                    //   "connection-state-change",
                                    //   "DISCONNECTING",
                                    //   _this._ws?._revState,
                                    //   "NETWORK_ERROR"
                                    // );
                                }
                            }
                            return [3 /*break*/, 10];
                        case 9:
                            reject("CAN_NOT_GET_GATEWAY_SERVER");
                            Logger.error("Can not get gateway server.");
                            throw new Error("CAN_NOT_GET_GATEWAY_SERVER");
                        case 10: return [2 /*return*/];
                    }
                });
            });
        });
    };
    return Client;
}(EventEmitter));

/** @internal */
var main = {
    client: Client,
};

module.exports = main;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1690447249537);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map