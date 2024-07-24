/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4507:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/modules/custom/actions.js
var custom_actions_namespaceObject = {};
__webpack_require__.r(custom_actions_namespaceObject);
__webpack_require__.d(custom_actions_namespaceObject, {
  "SEND_TARGETS": () => (SEND_TARGETS),
  "sendtargets": () => (sendtargets)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(6936);
// EXTERNAL MODULE: ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js
var react_hot_loader_production_min = __webpack_require__(7209);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(4890);
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js + 2 modules
var redux_saga_core_npm_proxy_esm = __webpack_require__(797);
;// CONCATENATED MODULE: ./src/store/actions.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function actions_createAction(type) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread({
    type: type
  }, payload);
}
var CONNECT_ROUTER = 'CONNECT_ROUTER';
var STORE_READY = 'STORE_READY';
var LOAD_STORE = 'LOAD_STORE';
var UPDATE_STORE = 'UPDATE_STORE';
var RESET_STORE = 'RESET_STORE';
var SAVE_STATE = 'SAVE_STATE';
var STATE_SAVED = 'STATE_SAVED';
var UPDATE_ENTITY = 'UPDATE_ENTITY';
var DELETE_ENTITY = 'DELETE_ENTITY';
var UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
var LAZY_UPDATE_INPUT_VALUE = 'LAZY_UPDATE_INPUT_VALUE';
var UPDATE_STORAGE_ITEM = 'UPDATE_STORAGE_ITEM';
var DELETE_STORAGE_ITEM = 'DELETE_STORAGE_ITEM';
var connectRouter = function connectRouter(router) {
  return actions_createAction(CONNECT_ROUTER, {
    router: router
  });
};
var fireStoreReady = function fireStoreReady() {
  return actions_createAction(STORE_READY);
};
var fireStateSaved = function fireStateSaved() {
  return actions_createAction(STATE_SAVED);
};
var loadStore = function loadStore() {
  return actions_createAction(LOAD_STORE);
};
var updateStore = function updateStore(newState) {
  return actions_createAction(UPDATE_STORE, {
    newState: newState
  });
};
var actions_resetStore = function resetStore() {
  return actions_createAction(RESET_STORE);
};
var saveState = function saveState() {
  return actions_createAction(SAVE_STATE);
};
var updateEntity = function updateEntity(key, data) {
  return actions_createAction(UPDATE_ENTITY, {
    key: key,
    data: data
  });
};
var deleteEntity = function deleteEntity(re) {
  return actions_createAction(DELETE_ENTITY, {
    re: re
  });
};
var updateInputValue = function updateInputValue(key, value) {
  return actions_createAction(UPDATE_INPUT_VALUE, {
    key: key,
    value: value
  });
};
var lazyUpdateInputValue = function lazyUpdateInputValue(key, value) {
  return actions_createAction(LAZY_UPDATE_INPUT_VALUE, {
    key: key,
    value: value
  });
};
var updateStorageItem = function updateStorageItem(key, data) {
  return actions_createAction(UPDATE_STORAGE_ITEM, {
    key: key,
    data: data
  });
};
var deleteStorageItem = function deleteStorageItem(re) {
  return actions_createAction(DELETE_STORAGE_ITEM, {
    re: re
  });
};
;// CONCATENATED MODULE: ./config.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var config_IS_WINDOWS = navigator && navigator.platform && navigator.platform.startsWith('Win');
console.log("ISWINDOWS", config_IS_WINDOWS);
var INPUT_FILTER_DELAY = 300; // ms, dalay before filtering projects, libs, platorms
var PLATFORMIO_API_ENDPOINT = 'https://api.platformio.org';
var pathname = window.location ? window.location.pathname : '/';
if (pathname[pathname.length - 1] !== '/') {
  pathname += '/';
}
var wsrpc = "ws://127.0.0.2:8008".concat(pathname, "wsrpc");
if ( true && window.location && window.location.host) {
  wsrpc = "".concat(window.location.protocol === 'https:' ? 'wss:' : 'ws:', "//").concat(window.location.host).concat(pathname, "wsrpc");
}
console.log("Weblink", wsrpc);
console.log("pathname", pathname);
var BACKEND_ENDPOINT = wsrpc;
// EXTERNAL MODULE: ./node_modules/antd/es/message/style/index.js + 1 modules
var style = __webpack_require__(3181);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js
var message = __webpack_require__(5360);
// EXTERNAL MODULE: ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js + 1 modules
var redux_saga_effects_npm_proxy_esm = __webpack_require__(4857);
// EXTERNAL MODULE: ./node_modules/jsonrpc-lite/dist/esnext/jsonrpc.js
var jsonrpc = __webpack_require__(3995);
;// CONCATENATED MODULE: ./src/store/backend.js


function backend_typeof(o) { "@babel/helpers - typeof"; return backend_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, backend_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == backend_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(backend_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var actions = {
  BACKEND_CONNECTED: 'BACKEND_CONNECTED',
  BACKEND_DISCONNECTED: 'BACKEND_DISCONNECTED',
  BACKEND_ERRORED: 'BACKEND_ERRORED',
  BACKEND_REQUEST: 'BACKEND_REQUEST',
  BACKEND_RESULT_SUCCESS: 'BACKEND_RESULT_SUCCESS',
  BACKEND_RESULT_ERROR: 'BACKEND_RESULT_ERROR'
};
actions.backendRequest = function (id, query, params) {
  return actions_createAction(actions.BACKEND_REQUEST, {
    id: id,
    query: query,
    params: params
  });
};
function backendFetchData(_ref) {
  var query = _ref.query,
    _ref$params = _ref.params,
    params = _ref$params === void 0 ? [] : _ref$params;
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var id, action;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = Math.random().toString();
          _context.next = 3;
          return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions.backendRequest(id, query, params));
        case 3:
          if (false) {}
          _context.next = 6;
          return (0,redux_saga_effects_npm_proxy_esm/* take */.qn)([actions.BACKEND_RESULT_SUCCESS, actions.BACKEND_RESULT_ERROR]);
        case 6:
          action = _context.sent;
          if (!(action.id !== id)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("continue", 3);
        case 9:
          if (!(action.type === actions.BACKEND_RESULT_ERROR)) {
            _context.next = 11;
            break;
          }
          throw action.error;
        case 11:
          return _context.abrupt("return", action.result);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })();
}
function backendMiddleware(options) {
  return function (store) {
    var socket = null;
    var messageQueue = [];
    var reconnect = {
      timer: null,
      loading: null,
      delay: 500,
      // msec
      maxDelay: 10000,
      // msec
      retries: 0
    };
    function newSocket(endpoint) {
      if (reconnect.timer) {
        clearTimeout(reconnect.timer);
      }
      var sock = null;
      try {
        sock = new WebSocket(endpoint);
      } catch (err) {
        return message/* default.error */.Z.error('Communication Error: This browser does not support WebSocket protocol', 0);
      }
      sock.onopen = function () {
        reconnect.retries = 0;
        if (reconnect.loading) {
          reconnect.loading();
        }
        store.dispatch(actions_createAction(actions.BACKEND_CONNECTED));
        var _messageQueue = messageQueue.slice(0);
        messageQueue = []; // reset messageQueue
        _messageQueue.forEach(function (data) {
          return sock.send(data);
        });
      };
      sock.onclose = function () {
        store.dispatch(actions_createAction(actions.BACKEND_DISCONNECTED));
        // reconnect
        if (!reconnect.loading) {
          reconnect.loading = message/* default.loading */.Z.loading('Reconnecting...', 0);
        }
        reconnect.retries++;
        reconnect.interval = setTimeout(function () {
          return socket = newSocket(endpoint);
        }, Math.min(reconnect.delay * reconnect.retries, reconnect.maxDelay));
      };
      sock.onmessage = function (event) {
        try {
          var result = jsonrpc/* default.parse */.ZP.parse(event.data);
          switch (result.type) {
            case 'success':
              return store.dispatch(actions_createAction(actions.BACKEND_RESULT_SUCCESS, result.payload));
            case 'error':
              return store.dispatch(actions_createAction(actions.BACKEND_RESULT_ERROR, result.payload));
          }
        } catch (err) {
          store.dispatch(actions_createAction(actions.BACKEND_ERRORED, err));
        }
      };
      return sock;
    }
    socket = newSocket(options.endpoint);
    if (!socket) {
      return undefined;
    }
    return function (next) {
      return function (action) {
        if (action && action.type === actions.BACKEND_REQUEST) {
          var msg = JSON.stringify(jsonrpc/* default.request */.ZP.request(action.id, action.query, action.params));
          return socket.readyState === 1 ? socket.send(msg) : messageQueue.push(msg);
        }
        return next(action);
      };
    };
  };
}
;// CONCATENATED MODULE: ./src/store/middlewares.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOTIFY_ERROR = 'NOTIFY_ERROR';
var notifyError = function notifyError(title, err) {
  return actions_createAction(NOTIFY_ERROR, {
    title: title,
    err: err
  });
};
function crashReporterMiddleware(store) {
  return function (next) {
    return function (action) {
      try {
        return next(action);
      } catch (err) {
        console.error('Internal Store Exception', err);
        store.dispatch(notifyError('Internal Store Exception', err));
        throw err;
      }
    };
  };
}
;// CONCATENATED MODULE: ./src/store/reducers.js
function reducers_typeof(o) { "@babel/helpers - typeof"; return reducers_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, reducers_typeof(o); }
function reducers_defineProperty(e, r, t) { return (r = reducers_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function reducers_toPropertyKey(t) { var i = reducers_toPrimitive(t, "string"); return "symbol" == reducers_typeof(i) ? i : i + ""; }
function reducers_toPrimitive(t, r) { if ("object" != reducers_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != reducers_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function copyWithoutMatchingKeys(obj, re) {
  var newObj = Object.assign({}, obj);
  Object.keys(newObj).forEach(function (key) {
    if (re.test(key)) {
      delete newObj[key];
    }
  });
  return newObj;
}
function router() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.type !== CONNECT_ROUTER) {
    return state;
  }
  return action.router;
}
function entities() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE_ENTITY:
      return Object.assign({}, state, reducers_defineProperty({}, action.key, action.data));
    case DELETE_ENTITY:
      return copyWithoutMatchingKeys(state, action.re);
  }
  return state;
}
function inputValues() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.type === UPDATE_INPUT_VALUE) {
    var newState = Object.assign({}, state, reducers_defineProperty({}, action.key, action.value));
    if (!newState[action.key]) {
      delete newState[action.key];
    }
    return newState;
  }
  return state;
}
function storage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case UPDATE_STORAGE_ITEM:
      return Object.assign({}, state, reducers_defineProperty({}, action.key, action.data));
    case DELETE_STORAGE_ITEM:
      return copyWithoutMatchingKeys(state, action.re);
  }
  return state;
}
var appReducer = (0,redux/* combineReducers */.UY)({
  router: router,
  entities: entities,
  inputValues: inputValues,
  storage: storage
});
function rootReducer(state, action) {
  switch (action.type) {
    case UPDATE_STORE:
      return Object.assign({}, appReducer(state, action), action.newState);
    case RESET_STORE:
      return {};
  }
  return appReducer(state, action);
}
/* harmony default export */ const reducers = (rootReducer);
;// CONCATENATED MODULE: ./src/modules/core/actions.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var actions_NOTIFY_ERROR = 'NOTIFY_ERROR';
var NOTIFY_SUCCESS = 'NOTIFY_SUCCESS';
var UPDATE_ROUTE_BADGE = 'UPDATE_ROUTE_BADGE';
var SHOW_AT_STARTUP = 'SHOW_AT_STARTUP';
var OS_OPEN_URL = 'OS_OPEN_URL';
var OS_REVEAL_FILE = 'OS_REVEAL_FILE';
var OS_RENAME_FILE = 'OS_RENAME_FILE';
var OS_COPY_FILE = 'OS_COPY_FILE';
var OS_MAKE_DIRS = 'OS_MAKE_DIRS';
var OS_LIST_DIR = 'OS_LIST_DIR';
var OS_IS_FILE = 'OS_IS_FILE';
var OS_IS_DIR = 'OS_IS_DIR';
var OS_FS_GLOB = 'OS_FS_GLOB';
var REQUEST_CONTENT = 'REQUEST_CONTENT';
var LOAD_LOGICAL_DEVICES = 'LOAD_LOGICAL_DEVICES';
var RESET_FS_ITEMS = 'RESET_FS_ITEMS';
var TOGGLE_FAVORITE_FOLDER = 'TOGGLE_FAVORITE_FOLDER';
var OPEN_TEXT_DOCUMENT = 'OPEN_TEXT_DOCUMENT';
var actions_notifyError = function notifyError(title, err) {
  return actions_createAction(actions_NOTIFY_ERROR, {
    title: title,
    err: err
  });
};
var notifySuccess = function notifySuccess(title, result) {
  return actions_createAction(NOTIFY_SUCCESS, {
    title: title,
    result: result
  });
};
var updateRouteBadge = function updateRouteBadge(path, count) {
  return createAction(UPDATE_ROUTE_BADGE, {
    path: path,
    count: count
  });
};
var showAtStartup = function showAtStartup(value) {
  return createAction(SHOW_AT_STARTUP, {
    value: value
  });
};
var osOpenUrl = function osOpenUrl(url) {
  return actions_createAction(OS_OPEN_URL, {
    url: url
  });
};
var osRevealFile = function osRevealFile(path) {
  return createAction(OS_REVEAL_FILE, {
    path: path
  });
};
var osRenameFile = function osRenameFile(src, dst) {
  return createAction(OS_RENAME_FILE, {
    src: src,
    dst: dst
  });
};
var osCopyFile = function osCopyFile(src, dst) {
  return createAction(OS_COPY_FILE, {
    src: src,
    dst: dst
  });
};
var osMakeDirs = function osMakeDirs(path) {
  return createAction(OS_MAKE_DIRS, {
    path: path
  });
};
var osListDir = function osListDir(path) {
  return createAction(OS_LIST_DIR, {
    path: path
  });
};
var osIsFile = function osIsFile(path) {
  return createAction(OS_IS_FILE, {
    path: path
  });
};
var osIsDir = function osIsDir(path) {
  return createAction(OS_IS_DIR, {
    path: path
  });
};
var osFsGlob = function osFsGlob(pathnames) {
  var rootDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return createAction(OS_FS_GLOB, {
    pathnames: pathnames,
    rootDir: rootDir
  });
};
var requestContent = function requestContent(_ref) {
  var uri = _ref.uri,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? undefined : _ref$data,
    _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? undefined : _ref$headers,
    _ref$cacheValid = _ref.cacheValid,
    cacheValid = _ref$cacheValid === void 0 ? undefined : _ref$cacheValid;
  return createAction(REQUEST_CONTENT, {
    uri: uri,
    data: data,
    headers: headers,
    cacheValid: cacheValid
  });
};
var loadLogicalDevices = function loadLogicalDevices() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return createAction(LOAD_LOGICAL_DEVICES, {
    force: force
  });
};
var resetFSItems = function resetFSItems() {
  return createAction(RESET_FS_ITEMS);
};
var toggleFavoriteFolder = function toggleFavoriteFolder(path) {
  return createAction(TOGGLE_FAVORITE_FOLDER, {
    path: path
  });
};
var openTextDocument = function openTextDocument(path) {
  var line = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var column = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return createAction(OPEN_TEXT_DOCUMENT, {
    path: path,
    line: line,
    column: column
  });
};
;// CONCATENATED MODULE: ./src/modules/custom/actions.js

var SEND_TARGETS = 'SEND_TARGETS';
var sendtargets = function sendtargets(targets) {
  return actions_createAction(SEND_TARGETS, {
    targets: targets
  });
};
// EXTERNAL MODULE: ./node_modules/react-ga/dist/esm/index.js + 12 modules
var esm = __webpack_require__(1516);
;// CONCATENATED MODULE: ./src/modules/custom/sagas.jsx
function sagas_typeof(o) { "@babel/helpers - typeof"; return sagas_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, sagas_typeof(o); }
function sagas_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ sagas_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == sagas_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(sagas_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/sagas_regeneratorRuntime().mark(watchCustomTargets),
  _marked2 = /*#__PURE__*/sagas_regeneratorRuntime().mark(watchFetchTargets);






function watchCustomTargets() {
  var _yield$take, targets, err, result;
  return sagas_regeneratorRuntime().wrap(function watchCustomTargets$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        if (false) {}
        _context.next = 3;
        return (0,redux_saga_effects_npm_proxy_esm/* take */.qn)(SEND_TARGETS);
      case 3:
        _yield$take = _context.sent;
        targets = _yield$take.targets;
        err = void 0, result = null;
        _context.prev = 6;
        console.log("Targets", targets);
        _context.next = 10;
        return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
          query: 'targets.fetch',
          params: [targets]
        });
      case 10:
        result = _context.sent;
        _context.next = 19;
        break;
      case 13:
        _context.prev = 13;
        _context.t0 = _context["catch"](6);
        err = _context.t0;
        console.error('Error in Fetching the targets for project:', err);
        _context.next = 19;
        return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not fetch the targets for project'));
      case 19:
        _context.prev = 19;
        if (!result) {
          _context.next = 23;
          break;
        }
        _context.next = 23;
        return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(notifySuccess('Target has been Successfully fetched'));
      case 23:
        return _context.finish(19);
      case 24:
        _context.next = 0;
        break;
      case 26:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[6, 13, 19, 24]]);
}
function watchFetchTargets() {
  var _yield$take2, targets, err, result;
  return sagas_regeneratorRuntime().wrap(function watchFetchTargets$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        if (false) {}
        _context2.next = 3;
        return (0,redux_saga_effects_npm_proxy_esm/* take */.qn)(SEND_TARGETS);
      case 3:
        _yield$take2 = _context2.sent;
        targets = _yield$take2.targets;
        err = void 0, result = null;
        _context2.prev = 6;
        console.log("Targets", targets);
        _context2.next = 10;
        return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
          query: 'ide.send_command',
          params: ["get_custom_targets", targets]
        });
      case 10:
        result = _context2.sent;
        _context2.next = 17;
        break;
      case 13:
        _context2.prev = 13;
        _context2.t0 = _context2["catch"](6);
        err = _context2.t0;
        console.error('Error in Fetching the targets for project:', err);
      case 17:
        _context2.next = 0;
        break;
      case 19:
      case "end":
        return _context2.stop();
    }
  }, _marked2, null, [[6, 13]]);
}
/* harmony default export */ const sagas = ([watchCustomTargets, watchFetchTargets]);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/style/index.js + 1 modules
var modal_style = __webpack_require__(2325);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(4416);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var button_style = __webpack_require__(729);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 3 modules
var es_button = __webpack_require__(3281);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/style/index.js + 1 modules
var notification_style = __webpack_require__(8568);
// EXTERNAL MODULE: ./node_modules/antd/es/notification/index.js
var notification = __webpack_require__(6855);
;// CONCATENATED MODULE: ./src/modules/core/constants.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var USER_CONSENTS_KEY = 'userConsents';
// EXTERNAL MODULE: ./node_modules/object-hash/dist/object_hash.js
var object_hash = __webpack_require__(705);
var object_hash_default = /*#__PURE__*/__webpack_require__.n(object_hash);
;// CONCATENATED MODULE: ./src/store/selectors.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function selectEntity(state, key) {
  return (state.entities || {})[key];
}
function selectInputValue(state, key) {
  return (state.inputValues || {})[key];
}
function selectStorage(state) {
  return state.storage || {};
}
function selectors_selectStorageItem(state, key) {
  return selectStorage(state)[key];
}
;// CONCATENATED MODULE: ./src/modules/core/selectors.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function selectShowAtStartup(state) {
  var caller = selectStorageItem(state, 'coreCaller');
  if (!caller) {
    return true;
  }
  var data = selectStorageItem(state, 'showOnStartup');
  return !data || !Object.prototype.hasOwnProperty.call(data, caller) || data[caller];
}
function getRequestContentKey(uri) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return object_hash_default()("".concat(uri, "-").concat(JSON.stringify(data || '')));
}
function selectRequestedContents(state) {
  return state.entities.requestedContents;
}
function selectRequestedContent(state, uri) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var items = selectRequestedContents(state) || [];
  var _iterator = _createForOfIteratorHelper(items),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (item.key === getRequestContentKey(uri, data)) {
        return item.content;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}
function selectOsFSGlobKey(pathnames) {
  var rootDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return object_hash_default()("".concat(pathnames.join(), "-").concat(rootDir || ''));
}
function selectOsFSGlobs(state) {
  return state.entities.osFsGlob;
}
function selectOsFSGlob(state, pathnames) {
  var rootDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var globs = selectOsFSGlobs(state) || [];
  var _iterator2 = _createForOfIteratorHelper(globs),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var glob = _step2.value;
      if (glob.key === selectOsFSGlobKey(pathnames, rootDir)) {
        return glob.items;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
}
function selectLogicalDevices(state) {
  return state.entities.logicalDevices;
}
function selectOsDirItems(state) {
  return state.entities.osDirItems;
}
function selectOsIsFileItems(state) {
  return state.entities.osIsFileItems;
}
function selectOsIsDirItems(state) {
  return state.entities.osIsDirItems;
}
function selectRouteBadges(state) {
  var items = selectStorageItem(state, 'routeBadges') || {};
  return Object.keys(items).map(function (key) {
    return {
      path: key,
      count: items[key]
    };
  });
}
function selectUserConsents(state) {
  return selectors_selectStorageItem(state, USER_CONSENTS_KEY) || {};
}
// EXTERNAL MODULE: ./node_modules/querystringify/index.js
var querystringify = __webpack_require__(7129);
;// CONCATENATED MODULE: ./src/modules/core/helpers.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function inIframe() {
  try {
    return window.self !== window.top;
  } catch (err) {
    return true;
  }
}
function helpers_reportException(description) {
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (description instanceof ErrorEvent) {
    description = [description.message, "".concat(description.filename, ":").concat(description.lineno)];
  }
  description = description.toString().replace(/@/g, '_');
  esm/* default.exception */.ZP.exception({
    description: description.substring(0, 8192),
    fatal: fatal
  });
}
function getStartLocation() {
  var startLocation = null;
  if (window.location && window.location.search) {
    startLocation = qs.parse(window.location.search);
    startLocation = startLocation && startLocation.start ? startLocation.start : null;
  }
  return startLocation || '/';
}
function goTo(history, path, state) {
  var redirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (history.length) {
    var lastEntry = history.entries[history.index];
    if (redirect || lastEntry.pathname === path && JSON.stringify(lastEntry.state) === JSON.stringify(state)) {
      return history.replace(path, state);
    }
  }
  history.push(path, state);
  ReactGA.ga('send', 'screenview', {
    screenName: path
  });
}
function helpers_asyncDelay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function title(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function cmpSort(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
function cmpArray(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  var i = a.length;
  while (i--) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function debounce(fn, time) {
  var timeout;
  var task = function task() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    task.cancel();
    timeout = setTimeout(function () {
      return fn.apply(_this, args);
    }, time);
  };
  task.cancel = function () {
    return clearTimeout(timeout);
  };
  return task;
}
function fuzzySearch(items, query, propertyName) {
  var getter;
  if (typeof propertyName !== 'function') {
    getter = function getter(item) {
      return item[propertyName];
    };
  } else {
    getter = propertyName;
  }
  return items.filter(function (item) {
    return getter(item).toLowerCase().includes(query.toLowerCase());
  });
}
;// CONCATENATED MODULE: ./src/modules/core/errors.js
function errors_typeof(o) { "@babel/helpers - typeof"; return errors_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, errors_typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, errors_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function errors_toPropertyKey(t) { var i = errors_toPrimitive(t, "string"); return "symbol" == errors_typeof(i) ? i : i + ""; }
function errors_toPrimitive(t, r) { if ("object" != errors_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != errors_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == errors_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ConsentRejectedError = /*#__PURE__*/function (_Error) {
  function ConsentRejectedError() {
    _classCallCheck(this, ConsentRejectedError);
    return _callSuper(this, ConsentRejectedError, arguments);
  }
  _inherits(ConsentRejectedError, _Error);
  return _createClass(ConsentRejectedError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
// EXTERNAL MODULE: ./node_modules/url-parse/index.js
var url_parse = __webpack_require__(4564);
var url_parse_default = /*#__PURE__*/__webpack_require__.n(url_parse);
// EXTERNAL MODULE: ./node_modules/superagent/lib/client.js
var client = __webpack_require__(2968);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
;// CONCATENATED MODULE: ./src/modules/core/sagas.jsx








function core_sagas_typeof(o) { "@babel/helpers - typeof"; return core_sagas_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, core_sagas_typeof(o); }
function sagas_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function sagas_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? sagas_ownKeys(Object(t), !0).forEach(function (r) { sagas_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sagas_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || sagas_unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return sagas_arrayLikeToArray(r); }
function sagas_defineProperty(e, r, t) { return (r = sagas_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function sagas_toPropertyKey(t) { var i = sagas_toPrimitive(t, "string"); return "symbol" == core_sagas_typeof(i) ? i : i + ""; }
function sagas_toPrimitive(t, r) { if ("object" != core_sagas_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != core_sagas_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || sagas_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function sagas_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return sagas_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? sagas_arrayLikeToArray(r, a) : void 0; } }
function sagas_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var sagas_marked = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchShowAtStartup),
  sagas_marked2 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchNotifyError),
  _marked3 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchNotifySuccess),
  _marked4 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchUpdateRouteBadge),
  _marked5 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchOSRequests),
  _marked6 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchRequestContent),
  _marked7 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchOsFSGlob),
  _marked8 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchLoadLogicalDevices),
  _marked9 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchOsListDir),
  _marked10 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchOsIsFile),
  _marked11 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchOsIsDir),
  _marked12 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchResetFSItems),
  _marked13 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchToggleFavoriteFolder),
  _marked14 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(watchOpenTextDocument),
  _marked15 = /*#__PURE__*/core_sagas_regeneratorRuntime().mark(ensureUserConsent);
function core_sagas_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ core_sagas_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == core_sagas_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(core_sagas_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-constant-condition, no-case-declarations */
















var REQUESTED_CONTENTS_CACHE_SIZE = 50;
var OS_FS_GLOBS_CACHE_SIZE = 50;
function watchShowAtStartup() {
  return core_sagas_regeneratorRuntime().wrap(function watchShowAtStartup$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(SHOW_AT_STARTUP, function (_ref) {
          var value = _ref.value;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee() {
            var caller, data;
            return core_sagas_regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors_selectStorageItem, 'coreCaller');
                case 2:
                  caller = _context.sent;
                  if (caller) {
                    _context.next = 5;
                    break;
                  }
                  return _context.abrupt("return");
                case 5:
                  _context.next = 7;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors_selectStorageItem, 'showOnStartup');
                case 7:
                  _context.t0 = _context.sent;
                  if (_context.t0) {
                    _context.next = 10;
                    break;
                  }
                  _context.t0 = {};
                case 10:
                  data = _context.t0;
                  data[caller] = value;
                  _context.next = 14;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateStorageItem('showOnStartup', data));
                case 14:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })();
        });
      case 2:
      case "end":
        return _context2.stop();
    }
  }, sagas_marked);
}
function watchNotifyError() {
  var _openUrl;
  return core_sagas_regeneratorRuntime().wrap(function watchNotifyError$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _openUrl = function _openUrl2(url) {
          return getStore().dispatch(osOpenUrl(url));
        };
        _context3.next = 3;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(actions_NOTIFY_ERROR, function (_ref2) {
          var title = _ref2.title,
            err = _ref2.err;
          if (!err) {
            return;
          }
          console.error(title, err);
          var description = err.stack || err.toString();
          if (err instanceof jsonrpc/* default.JsonRpcError */.ZP.JsonRpcError) {
            description = err.message;
            if (err.data) {
              description += ': ' + JSON.stringify(err.data);
            }
          }
          var knownIssues = [[/toolchain-gccarmlinuxgnueabi|WiringPi/g, 'https://github.com/platformio/platform-linux_arm/issues/2'], [/\[Error 2\]|\[WinError 2\]|\[Errno 13\]/g, 'https://github.com/platformio/platformio-core/issues/2321'], [/Please try this solution -> http:\/\/bit.ly\/faq-package-manager/g, 'http://bit.ly/faq-package-manager'], [/Please install Git client/g, 'https://github.com/platformio/platformio-core/issues/2811'], [/Error: You are not connected to the Internet|HTTPSConnectionPool/g, 'https://github.com/platformio/platformio-core/issues/1348'], [/Updating.+VCS.+recurse-submodules/g, 'https://github.com/platformio/platformio-home/issues/143'], [/Error: Detected a whitespace character/g, 'https://github.com/platformio/platform-espressif32/issues/470'], [/Error: Could not find the package/g, 'https://github.com/platformio/platformio-home/issues/2144'], [/Error: Unknown development platform/g, 'https://github.com/platformio/platformio-home/issues/2123'], [/Error: Unknown board ID/g, 'https://github.com/platformio/platformio-home/issues/1768'], [/Error: Could not find one of .* manifest files/g, 'https://github.com/platformio/platformio-home/issues/1785']];
          var _loop = function _loop() {
              var _knownIssues$_i = _slicedToArray(_knownIssues[_i], 2),
                regex = _knownIssues$_i[0],
                url = _knownIssues$_i[1];
              if (description.match(regex)) {
                return {
                  v: notification/* default.warning */.Z.warning({
                    message: title,
                    description: description,
                    duration: 0,
                    btn: /*#__PURE__*/react.createElement(es_button/* default */.Z, {
                      type: "danger",
                      onClick: function onClick() {
                        return _openUrl(url);
                      }
                    }, "Check available solutions")
                  })
                };
              }
            },
            _ret;
          for (var _i = 0, _knownIssues = knownIssues; _i < _knownIssues.length; _i++) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
          notification/* default.error */.Z.error({
            message: title,
            description: description,
            duration: 0,
            btn: /*#__PURE__*/react.createElement(es_button/* default */.Z, {
              type: "danger",
              onClick: function onClick() {
                return _openUrl("https://github.com/platformio/platformio-home/issues/new?".concat(querystringify.stringify({
                  title: title,
                  body: description
                })));
              }
            }, "Report a problem")
          });
          helpers_reportException("".concat(title, " => ").concat(description));
        });
      case 3:
      case "end":
        return _context3.stop();
    }
  }, sagas_marked2);
}
function watchNotifySuccess() {
  return core_sagas_regeneratorRuntime().wrap(function watchNotifySuccess$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(NOTIFY_SUCCESS, function (_ref3) {
          var title = _ref3.title,
            result = _ref3.result;
          if (!result) {
            return;
          }
          console.info(title, result);
          if (result.length > 255) {
            modal/* default.success */.Z.success({
              title: title,
              content: /*#__PURE__*/react.createElement("div", null, result.split('\n').map(function (text, index) {
                return /*#__PURE__*/react.createElement("div", {
                  key: index
                }, text);
              }))
            });
          } else {
            notification/* default.success */.Z.success({
              message: title,
              description: result
            });
          }
        });
      case 2:
      case "end":
        return _context4.stop();
    }
  }, _marked3);
}
function watchUpdateRouteBadge() {
  var itemKey;
  return core_sagas_regeneratorRuntime().wrap(function watchUpdateRouteBadge$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        itemKey = 'routeBadges';
        _context6.next = 3;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(UPDATE_ROUTE_BADGE, function (_ref4) {
          var path = _ref4.path,
            count = _ref4.count;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee2() {
            var result;
            return core_sagas_regeneratorRuntime().wrap(function _callee2$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors_selectStorageItem, itemKey);
                case 2:
                  _context5.t0 = _context5.sent;
                  if (_context5.t0) {
                    _context5.next = 5;
                    break;
                  }
                  _context5.t0 = {};
                case 5:
                  result = _context5.t0;
                  result[path] = parseInt(count);
                  if (result[path] === 0) {
                    delete result[path];
                  }
                  _context5.next = 10;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateStorageItem(itemKey, result));
                case 10:
                case "end":
                  return _context5.stop();
              }
            }, _callee2);
          })();
        });
      case 3:
      case "end":
        return _context6.stop();
    }
  }, _marked4);
}
function watchOSRequests() {
  return core_sagas_regeneratorRuntime().wrap(function watchOSRequests$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)([OS_OPEN_URL, OS_REVEAL_FILE, OS_RENAME_FILE, OS_MAKE_DIRS, OS_COPY_FILE], /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee3(action) {
          var url, redirectWindow;
          return core_sagas_regeneratorRuntime().wrap(function _callee3$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.t0 = action.type;
                _context7.next = _context7.t0 === OS_OPEN_URL ? 4 : _context7.t0 === OS_REVEAL_FILE ? 15 : _context7.t0 === OS_RENAME_FILE ? 18 : _context7.t0 === OS_COPY_FILE ? 21 : _context7.t0 === OS_MAKE_DIRS ? 24 : 27;
                break;
              case 4:
                url = new (url_parse_default())(action.url, true);
                url.query.utm_source = 'platformio';
                url.query.utm_medium = 'piohome';
                if (!(action.url.startsWith('http') && !inIframe())) {
                  _context7.next = 12;
                  break;
                }
                redirectWindow = window.open(url.toString(), '_blank');
                redirectWindow.location;
                _context7.next = 14;
                break;
              case 12:
                _context7.next = 14;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'os.open_url',
                  params: [url.toString()]
                });
              case 14:
                return _context7.abrupt("break", 27);
              case 15:
                _context7.next = 17;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'os.reveal_file',
                  params: [action.path]
                });
              case 17:
                return _context7.abrupt("break", 27);
              case 18:
                _context7.next = 20;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'os.rename',
                  params: [action.src, action.dst]
                });
              case 20:
                return _context7.abrupt("break", 27);
              case 21:
                _context7.next = 23;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'os.copy',
                  params: [action.src, action.dst]
                });
              case 23:
                return _context7.abrupt("break", 27);
              case 24:
                _context7.next = 26;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'os.make_dirs',
                  params: [action.path]
                });
              case 26:
                return _context7.abrupt("break", 27);
              case 27:
                _context7.next = 34;
                break;
              case 29:
                _context7.prev = 29;
                _context7.t1 = _context7["catch"](0);
                _context7.next = 33;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError(action.type, _context7.t1));
              case 33:
                return _context7.abrupt("return", _context7.sent);
              case 34:
              case "end":
                return _context7.stop();
            }
          }, _callee3, null, [[0, 29]]);
        }));
      case 2:
      case "end":
        return _context8.stop();
    }
  }, _marked5);
}
function watchRequestContent() {
  var crossDomains;
  return core_sagas_regeneratorRuntime().wrap(function watchRequestContent$(_context10) {
    while (1) switch (_context10.prev = _context10.next) {
      case 0:
        crossDomains = ['api.github.com', 'raw.githubusercontent.com', 'platformio.org'];
        _context10.next = 3;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(REQUEST_CONTENT, function (_ref5) {
          var uri = _ref5.uri,
            data = _ref5.data,
            headers = _ref5.headers,
            cacheValid = _ref5.cacheValid;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee4() {
            var content, contents;
            return core_sagas_regeneratorRuntime().wrap(function _callee4$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectRequestedContent, uri, data);
                case 2:
                  content = _context9.sent;
                  if (!content) {
                    _context9.next = 5;
                    break;
                  }
                  return _context9.abrupt("return");
                case 5:
                  _context9.prev = 5;
                  if (!(uri.startsWith('http') && crossDomains.some(function (d) {
                    return uri.includes(d);
                  }))) {
                    _context9.next = 10;
                    break;
                  }
                  _context9.next = 9;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(function () {
                    var r = data ? client_default().post(uri).send(data) : client_default().get(uri);
                    if (headers) {
                      r.set(headers);
                    }
                    return new Promise(function (resolve) {
                      r.end(function (err, result) {
                        return err || !result.ok ? resolve(undefined) : resolve(result.text);
                      });
                    });
                  });
                case 9:
                  content = _context9.sent;
                case 10:
                  if (content) {
                    _context9.next = 14;
                    break;
                  }
                  _context9.next = 13;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.request_content',
                    params: [uri, data, headers, cacheValid]
                  });
                case 13:
                  content = _context9.sent;
                case 14:
                  _context9.next = 16;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectRequestedContents);
                case 16:
                  _context9.t0 = _context9.sent;
                  if (_context9.t0) {
                    _context9.next = 19;
                    break;
                  }
                  _context9.t0 = [];
                case 19:
                  contents = _context9.t0;
                  contents.push({
                    key: getRequestContentKey(uri, data),
                    content: content
                  });
                  _context9.next = 23;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('requestedContents', contents.slice(REQUESTED_CONTENTS_CACHE_SIZE * -1)));
                case 23:
                  _context9.next = 30;
                  break;
                case 25:
                  _context9.prev = 25;
                  _context9.t1 = _context9["catch"](5);
                  _context9.next = 29;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Error occurred while requesting content from ' + uri, _context9.t1));
                case 29:
                  return _context9.abrupt("return", _context9.sent);
                case 30:
                case "end":
                  return _context9.stop();
              }
            }, _callee4, null, [[5, 25]]);
          })();
        });
      case 3:
      case "end":
        return _context10.stop();
    }
  }, _marked6);
}
function watchOsFSGlob() {
  return core_sagas_regeneratorRuntime().wrap(function watchOsFSGlob$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        _context12.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(OS_FS_GLOB, function (_ref6) {
          var pathnames = _ref6.pathnames,
            rootDir = _ref6.rootDir;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee5() {
            var items, current;
            return core_sagas_regeneratorRuntime().wrap(function _callee5$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectOsFSGlob, pathnames, rootDir);
                case 2:
                  items = _context11.sent;
                  if (!items) {
                    _context11.next = 5;
                    break;
                  }
                  return _context11.abrupt("return");
                case 5:
                  _context11.prev = 5;
                  _context11.next = 8;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.glob',
                    params: [pathnames, rootDir]
                  });
                case 8:
                  items = _context11.sent;
                  _context11.next = 11;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectOsFSGlobs);
                case 11:
                  _context11.t0 = _context11.sent;
                  if (_context11.t0) {
                    _context11.next = 14;
                    break;
                  }
                  _context11.t0 = [];
                case 14:
                  current = _context11.t0;
                  current.push({
                    key: selectOsFSGlobKey(pathnames, rootDir),
                    items: items
                  });
                  _context11.next = 18;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osFsGlob', current.slice(OS_FS_GLOBS_CACHE_SIZE * -1)));
                case 18:
                  _context11.next = 25;
                  break;
                case 20:
                  _context11.prev = 20;
                  _context11.t1 = _context11["catch"](5);
                  _context11.next = 24;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Error occurred while glob ' + JSON.stringify(pathnames), _context11.t1));
                case 24:
                  return _context11.abrupt("return", _context11.sent);
                case 25:
                case "end":
                  return _context11.stop();
              }
            }, _callee5, null, [[5, 20]]);
          })();
        });
      case 2:
      case "end":
        return _context12.stop();
    }
  }, _marked7);
}
function watchLoadLogicalDevices() {
  return core_sagas_regeneratorRuntime().wrap(function watchLoadLogicalDevices$(_context14) {
    while (1) switch (_context14.prev = _context14.next) {
      case 0:
        _context14.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(LOAD_LOGICAL_DEVICES, function (_ref7) {
          var force = _ref7.force;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee6() {
            var items;
            return core_sagas_regeneratorRuntime().wrap(function _callee6$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  if (!force) {
                    _context13.next = 3;
                    break;
                  }
                  _context13.next = 3;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(deleteEntity(/^logicalDevices/));
                case 3:
                  _context13.next = 5;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectLogicalDevices);
                case 5:
                  items = _context13.sent;
                  if (!items) {
                    _context13.next = 8;
                    break;
                  }
                  return _context13.abrupt("return");
                case 8:
                  _context13.prev = 8;
                  _context13.next = 11;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.get_logical_devices'
                  });
                case 11:
                  items = _context13.sent;
                  _context13.next = 14;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('logicalDevices', items));
                case 14:
                  _context13.next = 21;
                  break;
                case 16:
                  _context13.prev = 16;
                  _context13.t0 = _context13["catch"](8);
                  _context13.next = 20;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not load logical devices', _context13.t0));
                case 20:
                  return _context13.abrupt("return", _context13.sent);
                case 21:
                case "end":
                  return _context13.stop();
              }
            }, _callee6, null, [[8, 16]]);
          })();
        });
      case 2:
      case "end":
        return _context14.stop();
    }
  }, _marked8);
}
function watchOsListDir() {
  return core_sagas_regeneratorRuntime().wrap(function watchOsListDir$(_context16) {
    while (1) switch (_context16.prev = _context16.next) {
      case 0:
        _context16.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(OS_LIST_DIR, function (_ref8) {
          var path = _ref8.path;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee7() {
            var items, result;
            return core_sagas_regeneratorRuntime().wrap(function _callee7$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectOsDirItems);
                case 2:
                  items = _context15.sent;
                  if (!(items && items[path])) {
                    _context15.next = 7;
                    break;
                  }
                  return _context15.abrupt("return");
                case 7:
                  if (!items) {
                    items = {};
                  }
                case 8:
                  _context15.prev = 8;
                  _context15.next = 11;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.list_dir',
                    params: [/^[A-Z]:$/.test(path) ? path + '\\' : path]
                  });
                case 11:
                  result = _context15.sent;
                  _context15.next = 14;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osDirItems', Object.assign({}, items, sagas_defineProperty({}, path, result))));
                case 14:
                  _context15.next = 21;
                  break;
                case 16:
                  _context15.prev = 16;
                  _context15.t0 = _context15["catch"](8);
                  _context15.next = 20;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not list directory' + path, _context15.t0));
                case 20:
                  return _context15.abrupt("return", _context15.sent);
                case 21:
                case "end":
                  return _context15.stop();
              }
            }, _callee7, null, [[8, 16]]);
          })();
        });
      case 2:
      case "end":
        return _context16.stop();
    }
  }, _marked9);
}
function watchOsIsFile() {
  return core_sagas_regeneratorRuntime().wrap(function watchOsIsFile$(_context18) {
    while (1) switch (_context18.prev = _context18.next) {
      case 0:
        _context18.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(OS_IS_FILE, function (_ref9) {
          var path = _ref9.path;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee8() {
            var items, result;
            return core_sagas_regeneratorRuntime().wrap(function _callee8$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectOsIsFileItems);
                case 2:
                  items = _context17.sent;
                  if (!(items && items[path])) {
                    _context17.next = 7;
                    break;
                  }
                  return _context17.abrupt("return");
                case 7:
                  if (!items) {
                    items = {};
                  }
                case 8:
                  _context17.prev = 8;
                  _context17.next = 11;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.is_file',
                    params: [path]
                  });
                case 11:
                  result = _context17.sent;
                  _context17.next = 14;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osIsFileItems', Object.assign({}, items, sagas_defineProperty({}, path, result))));
                case 14:
                  _context17.next = 21;
                  break;
                case 16:
                  _context17.prev = 16;
                  _context17.t0 = _context17["catch"](8);
                  _context17.next = 20;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not check is file ' + path, _context17.t0));
                case 20:
                  return _context17.abrupt("return", _context17.sent);
                case 21:
                case "end":
                  return _context17.stop();
              }
            }, _callee8, null, [[8, 16]]);
          })();
        });
      case 2:
      case "end":
        return _context18.stop();
    }
  }, _marked10);
}
function watchOsIsDir() {
  return core_sagas_regeneratorRuntime().wrap(function watchOsIsDir$(_context20) {
    while (1) switch (_context20.prev = _context20.next) {
      case 0:
        _context20.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(OS_IS_DIR, function (_ref10) {
          var path = _ref10.path;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee9() {
            var items, result;
            return core_sagas_regeneratorRuntime().wrap(function _callee9$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectOsIsDirItems);
                case 2:
                  items = _context19.sent;
                  if (!(items && items[path])) {
                    _context19.next = 7;
                    break;
                  }
                  return _context19.abrupt("return");
                case 7:
                  if (!items) {
                    items = {};
                  }
                case 8:
                  _context19.prev = 8;
                  _context19.next = 11;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.is_dir',
                    params: [path]
                  });
                case 11:
                  result = _context19.sent;
                  _context19.next = 14;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osIsDirItems', Object.assign({}, items, sagas_defineProperty({}, path, result))));
                case 14:
                  _context19.next = 21;
                  break;
                case 16:
                  _context19.prev = 16;
                  _context19.t0 = _context19["catch"](8);
                  _context19.next = 20;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not check is directory ' + path, _context19.t0));
                case 20:
                  return _context19.abrupt("return", _context19.sent);
                case 21:
                case "end":
                  return _context19.stop();
              }
            }, _callee9, null, [[8, 16]]);
          })();
        });
      case 2:
      case "end":
        return _context20.stop();
    }
  }, _marked11);
}
function watchResetFSItems() {
  return core_sagas_regeneratorRuntime().wrap(function watchResetFSItems$(_context22) {
    while (1) switch (_context22.prev = _context22.next) {
      case 0:
        _context22.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(RESET_FS_ITEMS, /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee10() {
          return core_sagas_regeneratorRuntime().wrap(function _callee10$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osDirItems', null));
              case 2:
                _context21.next = 4;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osIsFileItems', null));
              case 4:
                _context21.next = 6;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateEntity('osIsDirItems', null));
              case 6:
              case "end":
                return _context21.stop();
            }
          }, _callee10);
        }));
      case 2:
      case "end":
        return _context22.stop();
    }
  }, _marked12);
}
function watchToggleFavoriteFolder() {
  return core_sagas_regeneratorRuntime().wrap(function watchToggleFavoriteFolder$(_context24) {
    while (1) switch (_context24.prev = _context24.next) {
      case 0:
        _context24.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(TOGGLE_FAVORITE_FOLDER, function (_ref11) {
          var path = _ref11.path;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee11() {
            var items;
            return core_sagas_regeneratorRuntime().wrap(function _callee11$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  _context23.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectors_selectStorageItem, 'favoriteFolders');
                case 2:
                  _context23.t0 = _context23.sent;
                  if (_context23.t0) {
                    _context23.next = 5;
                    break;
                  }
                  _context23.t0 = [];
                case 5:
                  items = _context23.t0;
                  _context23.next = 8;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateStorageItem('favoriteFolders', items.includes(path) ? items.filter(function (item) {
                    return item !== path;
                  }) : [].concat(_toConsumableArray(items), [path])));
                case 8:
                case "end":
                  return _context23.stop();
              }
            }, _callee11);
          })();
        });
      case 2:
      case "end":
        return _context24.stop();
    }
  }, _marked13);
}
function watchOpenTextDocument() {
  return core_sagas_regeneratorRuntime().wrap(function watchOpenTextDocument$(_context26) {
    while (1) switch (_context26.prev = _context26.next) {
      case 0:
        _context26.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeEvery */.ib)(OPEN_TEXT_DOCUMENT, function (_ref12) {
          var path = _ref12.path,
            line = _ref12.line,
            column = _ref12.column;
          return /*#__PURE__*/core_sagas_regeneratorRuntime().mark(function _callee12() {
            var is_file;
            return core_sagas_regeneratorRuntime().wrap(function _callee12$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.is_file',
                    params: [path]
                  });
                case 2:
                  is_file = _context25.sent;
                  if (is_file) {
                    _context25.next = 5;
                    break;
                  }
                  return _context25.abrupt("return", message/* default.error */.Z.error("File does not exist on disk ".concat(path)));
                case 5:
                  _context25.prev = 5;
                  _context25.next = 8;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'ide.send_command',
                    params: ['open_text_document', {
                      path: path,
                      line: line,
                      column: column
                    }]
                  });
                case 8:
                  return _context25.abrupt("return", _context25.sent);
                case 11:
                  _context25.prev = 11;
                  _context25.t0 = _context25["catch"](5);
                  console.warn(_context25.t0);
                  _context25.next = 16;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                    query: 'os.open_file',
                    params: [path]
                  });
                case 16:
                  return _context25.abrupt("return", _context25.sent);
                case 17:
                case "end":
                  return _context25.stop();
              }
            }, _callee12, null, [[5, 11]]);
          })();
        });
      case 2:
      case "end":
        return _context26.stop();
    }
  }, _marked14);
}
function ensureUserConsent(id, modalOptions) {
  var consents, consent, showModal;
  return core_sagas_regeneratorRuntime().wrap(function ensureUserConsent$(_context27) {
    while (1) switch (_context27.prev = _context27.next) {
      case 0:
        _context27.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)(selectUserConsents);
      case 2:
        consents = _context27.sent;
        consent = consents[id];
        if (consent) {
          _context27.next = 10;
          break;
        }
        showModal = function showModal() {
          return new Promise(function (resolve, reject) {
            modal/* default.confirm */.Z.confirm(sagas_objectSpread(sagas_objectSpread({
              title: 'Confirm'
            }, modalOptions), {}, {
              onOk: function onOk() {
                resolve();
              },
              onCancel: function onCancel() {
                reject(new ConsentRejectedError());
              }
            }));
          });
        };
        _context27.next = 8;
        return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(showModal);
      case 8:
        _context27.next = 10;
        return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateStorageItem(USER_CONSENTS_KEY, sagas_objectSpread(sagas_objectSpread({}, consents), {}, sagas_defineProperty({}, id, Date.now().valueOf()))));
      case 10:
      case "end":
        return _context27.stop();
    }
  }, _marked15);
}
/* harmony default export */ const core_sagas = ([watchShowAtStartup, watchNotifyError, watchNotifySuccess, watchUpdateRouteBadge, watchOSRequests, watchRequestContent, watchOsFSGlob, watchLoadLogicalDevices, watchOsListDir, watchOsIsFile, watchOsIsDir, watchResetFSItems, watchToggleFavoriteFolder, watchOpenTextDocument]);
;// CONCATENATED MODULE: ./src/store/sagas.js
function store_sagas_typeof(o) { "@babel/helpers - typeof"; return store_sagas_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, store_sagas_typeof(o); }
function sagas_toConsumableArray(r) { return sagas_arrayWithoutHoles(r) || sagas_iterableToArray(r) || store_sagas_unsupportedIterableToArray(r) || sagas_nonIterableSpread(); }
function sagas_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function store_sagas_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return store_sagas_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? store_sagas_arrayLikeToArray(r, a) : void 0; } }
function sagas_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function sagas_arrayWithoutHoles(r) { if (Array.isArray(r)) return store_sagas_arrayLikeToArray(r); }
function store_sagas_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var store_sagas_marked = /*#__PURE__*/store_sagas_regeneratorRuntime().mark(watchLoadStore),
  store_sagas_marked2 = /*#__PURE__*/store_sagas_regeneratorRuntime().mark(autoSaveState),
  sagas_marked3 = /*#__PURE__*/store_sagas_regeneratorRuntime().mark(watchLazyUpdateInputValue),
  sagas_marked4 = /*#__PURE__*/store_sagas_regeneratorRuntime().mark(root);
function store_sagas_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ store_sagas_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == store_sagas_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(store_sagas_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-constant-condition, no-case-declarations */








function watchLoadStore() {
  return store_sagas_regeneratorRuntime().wrap(function watchLoadStore$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(LOAD_STORE, /*#__PURE__*/store_sagas_regeneratorRuntime().mark(function _callee() {
          var newState;
          return store_sagas_regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'app.get_state'
                });
              case 3:
                newState = _context.sent;
                if (newState['inputValues']) {
                  delete newState['inputValues'];
                }
                _context.next = 7;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateStore(newState));
              case 7:
                _context.next = 9;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(fireStoreReady());
              case 9:
                _context.next = 16;
                break;
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                _context.next = 15;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not load lastest application state', _context.t0));
              case 15:
                return _context.abrupt("return", _context.sent);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 11]]);
        }));
      case 2:
      case "end":
        return _context2.stop();
    }
  }, store_sagas_marked);
}
function autoSaveState() {
  var triggerActions;
  return store_sagas_regeneratorRuntime().wrap(function autoSaveState$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        triggerActions = [SAVE_STATE, UPDATE_STORAGE_ITEM, DELETE_STORAGE_ITEM];
        _context4.next = 3;
        return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(triggerActions, /*#__PURE__*/store_sagas_regeneratorRuntime().mark(function _callee2(action) {
          var state, savedState, result;
          return store_sagas_regeneratorRuntime().wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(action.type !== SAVE_STATE)) {
                  _context3.next = 3;
                  break;
                }
                _context3.next = 3;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(asyncDelay, 2000);
              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return (0,redux_saga_effects_npm_proxy_esm/* select */.Ys)();
              case 6:
                _context3.t0 = _context3.sent;
                if (_context3.t0) {
                  _context3.next = 9;
                  break;
                }
                _context3.t0 = {};
              case 9:
                state = _context3.t0;
                savedState = {
                  storage: Object.assign({}, state.storage)
                }; // don't serialize PIO Core Settings
                if (savedState.storage.coreSettings) {
                  delete savedState.storage.coreSettings;
                }
                _context3.next = 14;
                return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(backendFetchData, {
                  query: 'app.save_state',
                  params: [savedState]
                });
              case 14:
                result = _context3.sent;
                if (result) {
                  _context3.next = 17;
                  break;
                }
                throw new Error('Received invalid result after saving application state');
              case 17:
                _context3.next = 19;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(fireStateSaved());
              case 19:
                _context3.next = 26;
                break;
              case 21:
                _context3.prev = 21;
                _context3.t1 = _context3["catch"](3);
                _context3.next = 25;
                return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(actions_notifyError('Could not save application state', _context3.t1));
              case 25:
                return _context3.abrupt("return", _context3.sent);
              case 26:
              case "end":
                return _context3.stop();
            }
          }, _callee2, null, [[3, 21]]);
        }));
      case 3:
      case "end":
        return _context4.stop();
    }
  }, store_sagas_marked2);
}
function watchLazyUpdateInputValue() {
  return store_sagas_regeneratorRuntime().wrap(function watchLazyUpdateInputValue$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* takeLatest */.Fm)(LAZY_UPDATE_INPUT_VALUE, function (_ref) {
          var key = _ref.key,
            value = _ref.value;
          return /*#__PURE__*/store_sagas_regeneratorRuntime().mark(function _callee3() {
            return store_sagas_regeneratorRuntime().wrap(function _callee3$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return (0,redux_saga_effects_npm_proxy_esm/* call */.RE)(asyncDelay, INPUT_FILTER_DELAY);
                case 2:
                  _context5.next = 4;
                  return (0,redux_saga_effects_npm_proxy_esm/* put */.gz)(updateInputValue(key, value));
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee3);
          })();
        });
      case 2:
      case "end":
        return _context6.stop();
    }
  }, sagas_marked3);
}
function root() {
  return store_sagas_regeneratorRuntime().wrap(function root$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.next = 2;
        return (0,redux_saga_effects_npm_proxy_esm/* all */.$6)([watchLoadStore, autoSaveState, watchLazyUpdateInputValue].concat(sagas_toConsumableArray(sagas), sagas_toConsumableArray(core_sagas)).map(function (s) {
          return s();
        }));
      case 2:
      case "end":
        return _context7.stop();
    }
  }, sagas_marked4);
}
;// CONCATENATED MODULE: ./src/store/index.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var storeInstance = null;
function getStore() {
  if (!storeInstance) {
    configureStore();
  }
  return storeInstance;
}
function configureStore(initialState) {
  var sagaMiddleware = (0,redux_saga_core_npm_proxy_esm/* default */.ZP)();
  console.log("BackEnd Point", BACKEND_ENDPOINT);
  var middlewares = [crashReporterMiddleware, backendMiddleware({
    endpoint: BACKEND_ENDPOINT
  }), sagaMiddleware];
  if (false) {}
  var store = (0,redux/* createStore */.MT)(reducers, initialState || {}, redux/* applyMiddleware.apply */.md.apply(void 0, middlewares));
  store.close = function () {
    return store.dispatch(redux_saga_core_npm_proxy_esm/* END */.uR);
  };
  sagaMiddleware.run(root);
  storeInstance = store;
  store.dispatch(loadStore());
  return store;
}
function destroyStore() {
  if (!storeInstance) {
    return;
  }
  storeInstance.dispatch(resetStore());
  storeInstance.close();
  storeInstance = null;
}
// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js + 3 modules
var form_style = __webpack_require__(5503);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 19 modules
var es_form = __webpack_require__(9491);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js + 1 modules
var tooltip_style = __webpack_require__(2005);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 18 modules
var tooltip = __webpack_require__(7614);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js + 1 modules
var input_style = __webpack_require__(2758);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 8 modules
var input = __webpack_require__(267);
;// CONCATENATED MODULE: ./src/modules/core/path.js
/**
 * Copyright (c) 2014-present PlatformIO <contact@platformio.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var sep = (/* unused pure expression or super */ null && (IS_WINDOWS ? '\\' : '/'));
function join() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }
  return paths.map(function (item, index) {
    return item.endsWith(sep) || index === paths.length - 1 ? item : "".concat(item).concat(sep);
  }).join('');
}
function dirname(path) {
  if (!path || !path.includes(sep) || path === sep) {
    return path;
  }
  var dirname = path.substr(0, path.lastIndexOf(sep));
  while (dirname.endsWith(sep)) {
    dirname = dirname.substr(0, dirname.length - 1);
  }
  return dirname;
}
function basename(path) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  if (!path) {
    return path;
  }
  var basename = path;
  if (path.includes(sep) && path !== sep) {
    basename = path.substr(path.lastIndexOf(sep));
    while (basename.startsWith(sep)) {
      basename = basename.substr(1);
    }
  }
  if (ext && basename.endsWith(ext)) {
    return basename.substr(0, basename.length - ext.length);
  }
  return basename;
}
function extname(path) {
  if (!path.includes('.')) {
    return '';
  }
  return path.substr(path.lastIndexOf('.'));
}
function normalize(path) {
  if (sep === '\\') {
    return path.replace('/', '\\');
  }
  return path.replace('\\', '/');
}
function commonprefix(paths) {
  if (!paths || !paths.length) {
    return '';
  }
  var common = [];
  var tmp = [];
  for (var i = 0; i < paths[0].length; i++) {
    var _char = paths[0][i];
    for (var j = 0; j < paths.length; j++) {
      var item = paths[j];
      if (i > item.length || item[i] !== _char) {
        return common.join('');
      }
    }
    if (_char === '\\' || _char === '/') {
      common = common.concat(tmp);
      tmp = [];
    }
    tmp.push(_char);
  }
  return common.join('');
}
function split(path) {
  return path.split(sep).filter(function (item) {
    return item.length;
  });
}
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(4039);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
var bootstrap_bundle_min = __webpack_require__(8702);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleTwoTone.js + 22 modules
var InfoCircleTwoTone = __webpack_require__(4598);
;// CONCATENATED MODULE: ./src/modules/custom/containers/custom.jsx
function custom_typeof(o) { "@babel/helpers - typeof"; return custom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, custom_typeof(o); }






function custom_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function custom_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? custom_ownKeys(Object(t), !0).forEach(function (r) { custom_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : custom_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function custom_defineProperty(e, r, t) { return (r = custom_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function custom_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function custom_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, custom_toPropertyKey(o.key), o); } }
function custom_createClass(e, r, t) { return r && custom_defineProperties(e.prototype, r), t && custom_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function custom_toPropertyKey(t) { var i = custom_toPrimitive(t, "string"); return "symbol" == custom_typeof(i) ? i : i + ""; }
function custom_toPrimitive(t, r) { if ("object" != custom_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != custom_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function custom_callSuper(t, o, e) { return o = custom_getPrototypeOf(o), custom_possibleConstructorReturn(t, custom_isNativeReflectConstruct() ? Reflect.construct(o, e || [], custom_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function custom_possibleConstructorReturn(t, e) { if (e && ("object" == custom_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return custom_assertThisInitialized(t); }
function custom_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function custom_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (custom_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function custom_getPrototypeOf(t) { return custom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, custom_getPrototypeOf(t); }
function custom_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && custom_setPrototypeOf(t, e); }
function custom_setPrototypeOf(t, e) { return custom_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, custom_setPrototypeOf(t, e); }


// filename app.js







var Custom = /*#__PURE__*/function (_React$Component) {
  function Custom() {
    var _this;
    custom_classCallCheck(this, Custom);
    _this = custom_callSuper(this, Custom, arguments);
    _this.state = {
      targets: null
    };
    return _this;
  }
  custom_inherits(Custom, _React$Component);
  return custom_createClass(Custom, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react.createElement(es_form/* default */.Z, {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          _this2.sendtargets(_this2.state.targets);
          window.location.reload();
        }
      }, /*#__PURE__*/react.createElement("h1", {
        className: "display-4"
      }, "Custom Targets"), /*#__PURE__*/react.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
      }, /*#__PURE__*/react.createElement("p", {
        className: "mb-0",
        style: {
          fontSize: '18px'
        }
      }, "Warning! : The order of Execution of the targets will be same as the order of the targets specified.")), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
        label: "Targets",
        labelCol: {
          span: 4,
          offset: 0
        },
        wrapperCol: {
          span: 4,
          offset: 0
        },
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/react.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/react.createElement(input/* default */.Z, {
        size: "small",
        style: {
          height: '30px',
          fontSize: '16px',
          flexGrow: 1
        },
        value: this.state.targets,
        onChange: function onChange(event) {
          return _this2.setState({
            targets: event.target.value
          });
        }
      }), /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
        title: "Note: Multiple targets should be separated by Comma."
      }, /*#__PURE__*/react.createElement(InfoCircleTwoTone/* default */.Z, {
        style: {
          marginLeft: '8px',
          fontSize: '16px'
        }
      })))), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
        wrapperCol: {
          span: 3,
          offset: 4,
          style: {
            height: '60px'
          }
        }
      }, /*#__PURE__*/react.createElement(input/* default */.Z, {
        size: "small",
        type: "submit",
        value: "Submit",
        className: "btn btn-primary btn-sm mw-100 h-100"
      })));
    }
  }, {
    key: "sendtargets",
    value: function sendtargets(targets) {
      this.props.sendtargets(targets);
    }
  }]);
}(react.Component);
function mapStateToProps(state) {
  return {
    custom: selectors_selectStorageItem(state, 'custom')
  };
}
/* harmony default export */ const custom = ((0,es/* connect */.$j)(mapStateToProps, custom_objectSpread(custom_objectSpread({}, custom_actions_namespaceObject), {}, {
  osOpenUrl: osOpenUrl
}))(es_form/* default.create */.Z.create()(Custom)));
;// CONCATENATED MODULE: ./src/index.js
/* module decorator */ module = __webpack_require__.hmd(module);






window.addEventListener('error', function (err) {
  if (reportException) {
    reportException(err, true);
  } else {
    console.error("ReportException not defined");
  }
});

// Main render function
var renderApp = function renderApp() {
  react_dom.render( /*#__PURE__*/react.createElement(react_hot_loader_production_min/* AppContainer */.zj, null, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
    store: getStore()
  }, /*#__PURE__*/react.createElement(custom, null))), document.getElementById('root'));
};

// Initial render
renderApp();

// Hot Module Replacement API
if (module && module.hot) {}

/***/ }),

/***/ 2204:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 9609:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2469:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7486:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 991:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 4144:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6254:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1281:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5647:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1692:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 819:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6588:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6770:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6711:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8931:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ 6199:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2956:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2221:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5122:
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 4654:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_webpack_form"] = self["webpackChunkreact_webpack_form"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(4507)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;