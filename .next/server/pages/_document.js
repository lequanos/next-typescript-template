(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.set.js */ "core-js/modules/es.set.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector("style[data-href=\"".concat(h.props['data-href'], "\"]"))) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.date.now.js */ "core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "core-js/modules/web.timers.js");

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.map.js */ "core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.set.js */ "core-js/modules/es.set.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.entries.js */ "core-js/modules/es.object.entries.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var ScriptCache = new Map();
var LoadCache = new Set();
var ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

var loadScript = function loadScript(props) {
  var src = props.src,
      id = props.id,
      _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
      _props$children = props.children,
      children = _props$children === void 0 ? '' : _props$children,
      onError = props.onError;
  var cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  var el = document.createElement('script');
  var loadPromise = new Promise(function (resolve, reject) {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    var attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  var _props$strategy = props.strategy,
      strategy = _props$strategy === void 0 ? 'afterInteractive' : _props$strategy;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback.requestIdleCallback)(function () {
        return loadScript(props);
      });
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return loadScript(props);
    });
  } else {
    window.addEventListener('load', function () {
      (0, _requestIdleCallback.requestIdleCallback)(function () {
        return loadScript(props);
      });
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  var _props$src = props.src,
      src = _props$src === void 0 ? '' : _props$src,
      _props$onLoad2 = props.onLoad,
      onLoad = _props$onLoad2 === void 0 ? function () {} : _props$onLoad2,
      _props$strategy2 = props.strategy,
      strategy = _props$strategy2 === void 0 ? 'afterInteractive' : _props$strategy2,
      onError = props.onError,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  var _ref = (0, _react.useContext)(_headManagerContext.HeadManagerContext),
      updateScripts = _ref.updateScripts,
      scripts = _ref.scripts;

  (0, _react.useEffect)(function () {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2["default"])({
        src: src,
        onLoad: onLoad,
        onError: onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.weak-map.js */ "core-js/modules/es.weak-map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.set.js */ "core-js/modules/es.set.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "core-js/modules/es.string.ends-with.js");

__webpack_require__(/*! core-js/modules/es.object.assign.js */ "core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.some.js */ "core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "core-js/modules/es.string.starts-with.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  var sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  var pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles: sharedFiles,
    pageFiles: pageFiles,
    allFiles: _toConsumableArray(new Set([].concat(_toConsumableArray(sharedFiles), _toConsumableArray(pageFiles))))
  };
}

function _getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  var assetPrefix = context.assetPrefix,
      buildManifest = context.buildManifest,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading;
  return buildManifest.polyfillFiles.filter(function (polyfill) {
    return polyfill.endsWith('.js') && !polyfill.endsWith('.module.js');
  }).map(function (polyfill) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: polyfill,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined,
      noModule: true,
      src: "".concat(assetPrefix, "/_next/").concat(polyfill).concat(devOnlyCacheBusterQueryString)
    });
  });
}

function _getPreNextScripts(context, props) {
  var scriptLoader = context.scriptLoader,
      disableOptimizedLoading = context.disableOptimizedLoading;
  return (scriptLoader.beforeInteractive || []).map(function (file) {
    var strategy = file.strategy,
        scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react["default"].createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function _getDynamicChunks(context, props, files) {
  var dynamicImports = context.dynamicImports,
      assetPrefix = context.assetPrefix,
      isDevelopment = context.isDevelopment,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading;
  return dynamicImports.map(function (file) {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react["default"].createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function _getScripts(context, props, files) {
  var _buildManifest$lowPri;

  var assetPrefix = context.assetPrefix,
      buildManifest = context.buildManifest,
      isDevelopment = context.isDevelopment,
      devOnlyCacheBusterQueryString = context.devOnlyCacheBusterQueryString,
      disableOptimizedLoading = context.disableOptimizedLoading;
  var normalScripts = files.allFiles.filter(function (file) {
    return file.endsWith('.js');
  });
  var lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(function (file) {
    return file.endsWith('.js');
  });
  return [].concat(_toConsumableArray(normalScripts), _toConsumableArray(lowPriorityScripts)).map(function (file) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      key: file,
      src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


var Document = /*#__PURE__*/function (_react$Component) {
  _inherits(Document, _react$Component);

  var _super = _createSuper(Document);

  function Document() {
    _classCallCheck(this, Document);

    return _super.apply(this, arguments);
  }

  _createClass(Document, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(Html, null, /*#__PURE__*/_react["default"].createElement(Head, null), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement(Main, null), /*#__PURE__*/_react["default"].createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value:
    /**
    * `getInitialProps` hook returns the context object with the addition of `renderPage`.
    * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
    */
    function () {
      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
        var enhanceApp, _yield$ctx$renderPage, html, head, styles;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                enhanceApp = function enhanceApp(App) {
                  return function (props) {
                    return /*#__PURE__*/_react["default"].createElement(App, props);
                  };
                };

                _context.next = 3;
                return ctx.renderPage({
                  enhanceApp: enhanceApp
                });

              case 3:
                _yield$ctx$renderPage = _context.sent;
                html = _yield$ctx$renderPage.html;
                head = _yield$ctx$renderPage.head;
                styles = _toConsumableArray((0, _server["default"])());
                return _context.abrupt("return", {
                  html: html,
                  head: head,
                  styles: styles
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "renderDocument",
    value: function renderDocument(DocumentComponent, props) {
      return /*#__PURE__*/_react["default"].createElement(_documentContext.DocumentContext.Provider, {
        value: props
      }, /*#__PURE__*/_react["default"].createElement(DocumentComponent, props));
    }
  }]);

  return Document;
}(_react.Component);

exports.default = Document;

function Html(props) {
  var _ref = (0, _react.useContext)(_documentContext.DocumentContext),
      inAmpMode = _ref.inAmpMode,
      docComponentsRendered = _ref.docComponentsRendered,
      locale = _ref.locale;

  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react["default"].createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

var Head = /*#__PURE__*/function (_react$Component2) {
  _inherits(Head, _react$Component2);

  var _super2 = _createSuper(Head);

  function Head() {
    var _this;

    _classCallCheck(this, Head);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));
    _this.context = void 0;
    return _this;
  }

  _createClass(Head, [{
    key: "getCssLinks",
    value: function getCssLinks(files) {
      var _this2 = this;

      var _this$context = this.context,
          assetPrefix = _this$context.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context.devOnlyCacheBusterQueryString,
          dynamicImports = _this$context.dynamicImports;
      var cssFiles = files.allFiles.filter(function (f) {
        return f.endsWith('.css');
      });
      var sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
      // webpack runtime (`mini-css-extract-plugin`).

      var unmangedFiles = new Set([]);
      var dynamicCssFiles = Array.from(new Set(dynamicImports.filter(function (file) {
        return file.endsWith('.css');
      })));

      if (dynamicCssFiles.length) {
        var existing = new Set(cssFiles);
        dynamicCssFiles = dynamicCssFiles.filter(function (f) {
          return !(existing.has(f) || sharedFiles.has(f));
        });
        unmangedFiles = new Set(dynamicCssFiles);
        cssFiles.push.apply(cssFiles, _toConsumableArray(dynamicCssFiles));
      }

      var cssLinkElements = [];
      cssFiles.forEach(function (file) {
        var isSharedFile = sharedFiles.has(file);

        if (true) {
          cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
            key: "".concat(file, "-preload"),
            nonce: _this2.props.nonce,
            rel: "preload",
            href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
            as: "style",
            crossOrigin: _this2.props.crossOrigin || undefined
          }));
        }

        var isUnmanagedFile = unmangedFiles.has(file);
        cssLinkElements.push( /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this2.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          crossOrigin: _this2.props.crossOrigin || undefined,
          "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
          "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
        }));
      });

      if (false) {}

      return cssLinkElements.length === 0 ? null : cssLinkElements;
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this3 = this;

      var _this$context2 = this.context,
          dynamicImports = _this$context2.dynamicImports,
          assetPrefix = _this$context2.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context2.devOnlyCacheBusterQueryString;
      return dynamicImports.map(function (file) {
        if (!file.endsWith('.js')) {
          return null;
        }

        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "preload",
          key: file,
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          nonce: _this3.props.nonce,
          crossOrigin: _this3.props.crossOrigin || undefined
        });
      }) // Filter out nulled scripts
      .filter(Boolean);
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks(files) {
      var _this4 = this;

      var _this$context3 = this.context,
          assetPrefix = _this$context3.assetPrefix,
          devOnlyCacheBusterQueryString = _this$context3.devOnlyCacheBusterQueryString,
          scriptLoader = _this$context3.scriptLoader;
      var preloadFiles = files.allFiles.filter(function (file) {
        return file.endsWith('.js');
      });
      return [].concat(_toConsumableArray((scriptLoader.beforeInteractive || []).map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file.src,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: file.src,
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })), _toConsumableArray(preloadFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          key: file,
          nonce: _this4.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          as: "script",
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      })));
    }
  }, {
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      return _getDynamicChunks(this.context, this.props, files);
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      return _getPreNextScripts(this.context, this.props);
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      return _getScripts(this.context, this.props, files);
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      return _getPolyfillScripts(this.context, this.props);
    }
  }, {
    key: "handleDocumentScriptLoaderItems",
    value: function handleDocumentScriptLoaderItems(children) {
      var scriptLoader = this.context.scriptLoader;
      var scriptLoaderItems = [];
      var filteredChildren = [];

      _react["default"].Children.forEach(children, function (child) {
        if (child.type === _script["default"]) {
          if (child.props.strategy === 'beforeInteractive') {
            scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
            return;
          } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
            scriptLoaderItems.push(child.props);
            return;
          }
        }

        filteredChildren.push(child);
      });

      this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
      return filteredChildren;
    }
  }, {
    key: "makeStylesheetInert",
    value: function makeStylesheetInert(node) {
      var _this5 = this;

      return _react["default"].Children.map(node, function (c) {
        if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(function (_ref2) {
          var url = _ref2.url;
          return c.props['href'].startsWith(url);
        })) {
          var newProps = _objectSpread({}, c.props || {});

          newProps['data-href'] = newProps['href'];
          newProps['href'] = undefined;
          return /*#__PURE__*/_react["default"].cloneElement(c, newProps);
        } else if (c.props && c.props['children']) {
          c.props['children'] = _this5.makeStylesheetInert(c.props['children']);
        }

        return c;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _react$default;

      var _this$props$nonce, _this$props$nonce2;

      var _this$context4 = this.context,
          styles = _this$context4.styles,
          ampPath = _this$context4.ampPath,
          inAmpMode = _this$context4.inAmpMode,
          hybridAmp = _this$context4.hybridAmp,
          canonicalBase = _this$context4.canonicalBase,
          __NEXT_DATA__ = _this$context4.__NEXT_DATA__,
          dangerousAsPath = _this$context4.dangerousAsPath,
          headTags = _this$context4.headTags,
          unstable_runtimeJS = _this$context4.unstable_runtimeJS,
          unstable_JsPreload = _this$context4.unstable_JsPreload,
          disableOptimizedLoading = _this$context4.disableOptimizedLoading;
      var disableRuntimeJS = unstable_runtimeJS === false;
      var disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
      this.context.docComponentsRendered.Head = true;
      var head = this.context.head;
      var cssPreloads = [];
      var otherHeadElements = [];

      if (head) {
        head.forEach(function (c) {
          if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
            cssPreloads.push(c);
          } else {
            c && otherHeadElements.push(c);
          }
        });
        head = cssPreloads.concat(otherHeadElements);
      }

      var children = _react["default"].Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


      if (true) {
        children = _react["default"].Children.map(children, function (child) {
          var _child$props;

          var isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

          if (!isReactHelmet) {
            var _child$props2;

            if ((child == null ? void 0 : child.type) === 'title') {
              console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
            } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
              console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
            }
          }

          return child;
        });
        if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
      }

      if (false) {}

      children = this.handleDocumentScriptLoaderItems(children);
      var hasAmphtmlRel = false;
      var hasCanonicalRel = false; // show warning and remove conflicting amp head tags

      head = _react["default"].Children.map(head || [], function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;

        if (inAmpMode) {
          var badProp = '';

          if (type === 'meta' && props.name === 'viewport') {
            badProp = 'name="viewport"';
          } else if (type === 'link' && props.rel === 'canonical') {
            hasCanonicalRel = true;
          } else if (type === 'script') {
            // only block if
            // 1. it has a src and isn't pointing to ampproject's CDN
            // 2. it is using dangerouslySetInnerHTML without a type or
            // a type of text/javascript
            if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
              badProp = '<script';
              Object.keys(props).forEach(function (prop) {
                badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
              });
              badProp += '/>';
            }
          }

          if (badProp) {
            console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, " in ").concat(__NEXT_DATA__.page, ". https://nextjs.org/docs/messages/conflicting-amp-tag"));
            return null;
          }
        } else {
          // non-amp mode
          if (type === 'link' && props.rel === 'amphtml') {
            hasAmphtmlRel = true;
          }
        }

        return child;
      }); // try to parse styles from fragment for backwards compat

      var curStyles = Array.isArray(styles) ? styles : [];

      if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
      Array.isArray(styles.props.children)) {
        var hasStyles = function hasStyles(el) {
          var _el$props, _el$props$dangerously;

          return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
        }; // @ts-ignore Property 'props' does not exist on type ReactElement


        styles.props.children.forEach(function (child) {
          if (Array.isArray(child)) {
            child.forEach(function (el) {
              return hasStyles(el) && curStyles.push(el);
            });
          } else if (hasStyles(child)) {
            curStyles.push(child);
          }
        });
      }

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? 'true' : undefined,
        dangerouslySetInnerHTML: {
          __html: "body{display:none}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-next-hide-fouc": true,
        "data-ampdevmode": inAmpMode ? 'true' : undefined
      }, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "body{display:block}"
        }
      }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "next-head-count",
        content: _react["default"].Children.count(head || []).toString()
      }), inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=1,initial-scale=1"
      }), !hasCanonicalRel && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "canonical",
        href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "preload",
        as: "script",
        href: "https://cdn.ampproject.org/v0.js"
      }), styles && /*#__PURE__*/_react["default"].createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
          __html: curStyles.map(function (style) {
            return style.props.dangerouslySetInnerHTML.__html;
          }).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
        }
      }), /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
        }
      }), /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
        }
      })), /*#__PURE__*/_react["default"].createElement("script", {
        async: true,
        src: "https://cdn.ampproject.org/v0.js"
      })), !inAmpMode && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react["default"].createElement("link", {
        rel: "amphtml",
        href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
      }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react["default"].createElement("noscript", {
        "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
      }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
      /*#__PURE__*/
      // this element is used to mount development styles so the
      // ordering matches production
      // (by default, style-loader injects at the bottom of <head />)
      _react["default"].createElement("noscript", {
        id: "__next_css__DO_NOT_USE__"
      }), styles || null), /*#__PURE__*/(_react$default = _react["default"]).createElement.apply(_react$default, [_react["default"].Fragment, {}].concat(_toConsumableArray(headTags || []))));
    }
  }]);

  return Head;
}(_react.Component);

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string
};

function Main() {
  var _ref3 = (0, _react.useContext)(_documentContext.DocumentContext),
      inAmpMode = _ref3.inAmpMode,
      html = _ref3.html,
      docComponentsRendered = _ref3.docComponentsRendered;

  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

var NextScript = /*#__PURE__*/function (_react$Component3) {
  _inherits(NextScript, _react$Component3);

  var _super3 = _createSuper(NextScript);

  function NextScript() {
    var _this6;

    _classCallCheck(this, NextScript);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this6 = _super3.call.apply(_super3, [this].concat(args));
    _this6.context = void 0;
    return _this6;
  }

  _createClass(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks(files) {
      return _getDynamicChunks(this.context, this.props, files);
    }
  }, {
    key: "getPreNextScripts",
    value: function getPreNextScripts() {
      return _getPreNextScripts(this.context, this.props);
    }
  }, {
    key: "getScripts",
    value: function getScripts(files) {
      return _getScripts(this.context, this.props, files);
    }
  }, {
    key: "getPolyfillScripts",
    value: function getPolyfillScripts() {
      return _getPolyfillScripts(this.context, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$context5 = this.context,
          assetPrefix = _this$context5.assetPrefix,
          inAmpMode = _this$context5.inAmpMode,
          buildManifest = _this$context5.buildManifest,
          unstable_runtimeJS = _this$context5.unstable_runtimeJS,
          docComponentsRendered = _this$context5.docComponentsRendered,
          devOnlyCacheBusterQueryString = _this$context5.devOnlyCacheBusterQueryString,
          disableOptimizedLoading = _this$context5.disableOptimizedLoading;
      var disableRuntimeJS = unstable_runtimeJS === false;
      docComponentsRendered.NextScript = true;

      if (inAmpMode) {
        if (false) {}

        var ampDevFiles = [].concat(_toConsumableArray(buildManifest.devFiles), _toConsumableArray(buildManifest.polyfillFiles), _toConsumableArray(buildManifest.ampDevFiles));
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
          id: "__NEXT_DATA__",
          type: "application/json",
          nonce: this.props.nonce,
          crossOrigin: this.props.crossOrigin || undefined,
          dangerouslySetInnerHTML: {
            __html: NextScript.getInlineScriptSource(this.context)
          },
          "data-ampdevmode": true
        }), ampDevFiles.map(function (file) {
          return /*#__PURE__*/_react["default"].createElement("script", {
            key: file,
            src: "".concat(assetPrefix, "/_next/").concat(file).concat(devOnlyCacheBusterQueryString),
            nonce: _this7.props.nonce,
            crossOrigin: _this7.props.crossOrigin || undefined,
            "data-ampdevmode": true
          });
        }));
      }

      if (true) {
        if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
      }

      var files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(encodeURI(file)).concat(devOnlyCacheBusterQueryString),
          nonce: _this7.props.nonce,
          crossOrigin: _this7.props.crossOrigin || undefined
        });
      }) : null, disableRuntimeJS ? null : /*#__PURE__*/_react["default"].createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        }
      }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(documentProps) {
      var __NEXT_DATA__ = documentProps.__NEXT_DATA__;

      try {
        var data = JSON.stringify(__NEXT_DATA__);
        return (0, _htmlescape.htmlEscapeJsonString)(data);
      } catch (err) {
        if (err.message.indexOf('circular structure')) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://nextjs.org/docs/messages/circular-structure"));
        }

        throw err;
      }
    }
  }]);

  return NextScript;
}(_react.Component);

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes["default"].string,
  crossOrigin: _propTypes["default"].string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || "".concat(asPath).concat(asPath.includes('?') ? '&' : '?', "amp=1");
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "core-js/modules/es.array.concat.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.concat.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.concat.js");;

/***/ }),

/***/ "core-js/modules/es.array.filter.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.filter.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.filter.js");;

/***/ }),

/***/ "core-js/modules/es.array.for-each.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.for-each.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.for-each.js");;

/***/ }),

/***/ "core-js/modules/es.array.from.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.from.js" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.from.js");;

/***/ }),

/***/ "core-js/modules/es.array.includes.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.includes.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.includes.js");;

/***/ }),

/***/ "core-js/modules/es.array.index-of.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.index-of.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.index-of.js");;

/***/ }),

/***/ "core-js/modules/es.array.is-array.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.is-array.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.is-array.js");;

/***/ }),

/***/ "core-js/modules/es.array.iterator.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.iterator.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.iterator.js");;

/***/ }),

/***/ "core-js/modules/es.array.join.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.join.js" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.join.js");;

/***/ }),

/***/ "core-js/modules/es.array.map.js":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.map.js" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.map.js");;

/***/ }),

/***/ "core-js/modules/es.array.slice.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.slice.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.slice.js");;

/***/ }),

/***/ "core-js/modules/es.array.some.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.some.js" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.some.js");;

/***/ }),

/***/ "core-js/modules/es.array.splice.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.splice.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.array.splice.js");;

/***/ }),

/***/ "core-js/modules/es.date.now.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es.date.now.js" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.date.now.js");;

/***/ }),

/***/ "core-js/modules/es.date.to-string.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.date.to-string.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.date.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.function.name.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.name.js" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.function.name.js");;

/***/ }),

/***/ "core-js/modules/es.map.js":
/*!********************************************!*\
  !*** external "core-js/modules/es.map.js" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.map.js");;

/***/ }),

/***/ "core-js/modules/es.number.constructor.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.number.constructor.js" ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.number.constructor.js");;

/***/ }),

/***/ "core-js/modules/es.object.assign.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.assign.js" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.assign.js");;

/***/ }),

/***/ "core-js/modules/es.object.create.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.create.js" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.create.js");;

/***/ }),

/***/ "core-js/modules/es.object.define-properties.js":
/*!*****************************************************************!*\
  !*** external "core-js/modules/es.object.define-properties.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.define-properties.js");;

/***/ }),

/***/ "core-js/modules/es.object.define-property.js":
/*!***************************************************************!*\
  !*** external "core-js/modules/es.object.define-property.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.define-property.js");;

/***/ }),

/***/ "core-js/modules/es.object.entries.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.object.entries.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.entries.js");;

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor.js":
/*!***************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptor.js" ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.get-own-property-descriptor.js");;

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptors.js" ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.get-own-property-descriptors.js");;

/***/ }),

/***/ "core-js/modules/es.object.get-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.get-prototype-of.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.get-prototype-of.js");;

/***/ }),

/***/ "core-js/modules/es.object.keys.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.object.keys.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.keys.js");;

/***/ }),

/***/ "core-js/modules/es.object.set-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.set-prototype-of.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.set-prototype-of.js");;

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.object.to-string.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.object.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.promise.js":
/*!************************************************!*\
  !*** external "core-js/modules/es.promise.js" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.promise.js");;

/***/ }),

/***/ "core-js/modules/es.reflect.construct.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es.reflect.construct.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.reflect.construct.js");;

/***/ }),

/***/ "core-js/modules/es.regexp.exec.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.regexp.exec.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.regexp.exec.js");;

/***/ }),

/***/ "core-js/modules/es.regexp.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.regexp.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.set.js":
/*!********************************************!*\
  !*** external "core-js/modules/es.set.js" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.set.js");;

/***/ }),

/***/ "core-js/modules/es.string.ends-with.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.string.ends-with.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.string.ends-with.js");;

/***/ }),

/***/ "core-js/modules/es.string.includes.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.includes.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.string.includes.js");;

/***/ }),

/***/ "core-js/modules/es.string.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.iterator.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.string.iterator.js");;

/***/ }),

/***/ "core-js/modules/es.string.replace.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.string.replace.js" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.string.replace.js");;

/***/ }),

/***/ "core-js/modules/es.string.starts-with.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.string.starts-with.js" ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.string.starts-with.js");;

/***/ }),

/***/ "core-js/modules/es.symbol.description.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.symbol.description.js" ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.symbol.description.js");;

/***/ }),

/***/ "core-js/modules/es.symbol.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.iterator.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.symbol.iterator.js");;

/***/ }),

/***/ "core-js/modules/es.symbol.js":
/*!***********************************************!*\
  !*** external "core-js/modules/es.symbol.js" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.symbol.js");;

/***/ }),

/***/ "core-js/modules/es.weak-map.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es.weak-map.js" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/es.weak-map.js");;

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each.js" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.for-each.js");;

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.iterator.js");;

/***/ }),

/***/ "core-js/modules/web.timers.js":
/*!************************************************!*\
  !*** external "core-js/modules/web.timers.js" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("core-js/modules/web.timers.js");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("regenerator-runtime/runtime.js");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaGVhZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNvbWUuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNwbGljZS5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS5ub3cuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLmRhdGUudG8tc3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5tYXAuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5jb25zdHJ1Y3Rvci5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmNyZWF0ZS5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcy5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZmxlY3QuY29uc3RydWN0LmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuc2V0LmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuZW5kcy13aXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zdGFydHMtd2l0aC5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXMud2Vhay1tYXAuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3QtdHlwZXNjcmlwdC10ZW1wbGF0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0LXR5cGVzY3JpcHQtdGVtcGxhdGUvZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcIiIsIndlYnBhY2s6Ly9yZWFjdC10eXBlc2NyaXB0LXRlbXBsYXRlL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwicHJvcHMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsImF0dHIiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJpbm5lckhUTUwiLCJfX2h0bWwiLCJ0ZXh0Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJ1cGRhdGVFbGVtZW50cyIsImNvbXBvbmVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImluaXRTY3JpcHRMb2FkZXIiLCJfZXh0ZW5kczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfcmVhY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJTY3JpcHRDYWNoZSIsIk1hcCIsIkxvYWRDYWNoZSIsImlnbm9yZVByb3BzIiwibG9hZFNjcmlwdCIsInNyYyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJzZXQiLCJPYmplY3QiLCJlbnRyaWVzIiwidmFsdWUiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJzdHJhdGVneSIsIndpbmRvdyIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlRWZmZWN0IiwiYmVmb3JlSW50ZXJhY3RpdmUiLCJjb25jYXQiLCJfZGVmYXVsdCIsIkh0bWwiLCJNYWluIiwiX3Byb3BUeXBlcyIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NlcnZlciIsIl9jb25zdGFudHMiLCJfZG9jdW1lbnRDb250ZXh0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiX2dldFBhZ2VGaWxlcyIsIl91dGlsczIiLCJfaHRtbGVzY2FwZSIsIl9zY3JpcHQiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJkZXNjIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwYXRobmFtZSIsImluQW1wTW9kZSIsInNoYXJlZEZpbGVzIiwiZ2V0UGFnZUZpbGVzIiwicGFnZUZpbGVzIiwiYWxsRmlsZXMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJjb250ZXh0IiwiYXNzZXRQcmVmaXgiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwiZW5kc1dpdGgiLCJkZWZlciIsIm5vbmNlIiwiY3Jvc3NPcmlnaW4iLCJwcm9jZXNzIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwic2NyaXB0UHJvcHMiLCJhc3NpZ24iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0RHluYW1pY0NodW5rcyIsImZpbGVzIiwiZHluYW1pY0ltcG9ydHMiLCJpc0RldmVsb3BtZW50IiwiYXN5bmMiLCJlbmNvZGVVUkkiLCJnZXRTY3JpcHRzIiwiX2J1aWxkTWFuaWZlc3QkbG93UHJpIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJEb2N1bWVudCIsIkhlYWQiLCJOZXh0U2NyaXB0IiwiY3R4IiwiZW5oYW5jZUFwcCIsIkFwcCIsInJlbmRlclBhZ2UiLCJodG1sIiwic3R5bGVzIiwiRG9jdW1lbnRDb21wb25lbnQiLCJQcm92aWRlciIsIkNvbXBvbmVudCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsImxhbmciLCJhbXAiLCJhcmdzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImZyb20iLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImlzU2hhcmVkRmlsZSIsInJlbCIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwiQm9vbGVhbiIsInByZWxvYWRGaWxlcyIsImZpbHRlcmVkQ2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiX19ORVhUX0RBVEFfXyIsIm5vZGUiLCJjIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsImNsb25lRWxlbWVudCIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJfdGhpcyRwcm9wcyRub25jZSIsIl90aGlzJHByb3BzJG5vbmNlMiIsImFtcFBhdGgiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiZGFuZ2Vyb3VzQXNQYXRoIiwiaGVhZFRhZ3MiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJ1bnN0YWJsZV9Kc1ByZWxvYWQiLCJkaXNhYmxlUnVudGltZUpTIiwiZGlzYWJsZUpzUHJlbG9hZCIsImNzc1ByZWxvYWRzIiwib3RoZXJIZWFkRWxlbWVudHMiLCJ0b0FycmF5IiwiX2NoaWxkJHByb3BzIiwiaXNSZWFjdEhlbG1ldCIsIl9jaGlsZCRwcm9wczIiLCJ3YXJuIiwibmFtZSIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsImluZGV4T2YiLCJrZXlzIiwicHJvcCIsInBhZ2UiLCJjdXJTdHlsZXMiLCJoYXNTdHlsZXMiLCJfZWwkcHJvcHMiLCJfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkiLCJGcmFnbWVudCIsImNvdW50IiwiY2xlYW5BbXBQYXRoIiwic3R5bGUiLCJyZXBsYWNlIiwiZ2V0QW1wUGF0aCIsImdldENzc0xpbmtzIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJBTVBfUkVOREVSX1RBUkdFVCIsImFtcERldkZpbGVzIiwiZGV2RmlsZXMiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLGVBQUEsR0FBZ0JDLGVBQWhCO0FBQWdDRCx5QkFBQSxHQUEwQixLQUFLLENBQS9CO0FBQWlDLElBQU1FLGlCQUFpQixHQUFDO0FBQUNDLGVBQWEsRUFBQyxnQkFBZjtBQUFnQ0MsV0FBUyxFQUFDLE9BQTFDO0FBQWtEQyxTQUFPLEVBQUMsS0FBMUQ7QUFBZ0VDLFdBQVMsRUFBQyxZQUExRTtBQUF1RkMsVUFBUSxFQUFDO0FBQWhHLENBQXhCO0FBQW9JUCx5QkFBQSxHQUEwQkUsaUJBQTFCOztBQUE0QyxTQUFTTSxp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Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRjs7Ozs7Ozs7Ozs7QUNBQSx1Rjs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSw2RTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9aW5pdEhlYWRNYW5hZ2VyO2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9dm9pZCAwO2NvbnN0IERPTUF0dHJpYnV0ZU5hbWVzPXthY2NlcHRDaGFyc2V0OidhY2NlcHQtY2hhcnNldCcsY2xhc3NOYW1lOidjbGFzcycsaHRtbEZvcjonZm9yJyxodHRwRXF1aXY6J2h0dHAtZXF1aXYnLG5vTW9kdWxlOidub01vZHVsZSd9O2V4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXM9RE9NQXR0cmlidXRlTmFtZXM7ZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oe3R5cGUscHJvcHN9KXtjb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO2Zvcihjb25zdCBwIGluIHByb3BzKXtpZighcHJvcHMuaGFzT3duUHJvcGVydHkocCkpY29udGludWU7aWYocD09PSdjaGlsZHJlbid8fHA9PT0nZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKWNvbnRpbnVlOy8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuaWYocHJvcHNbcF09PT11bmRlZmluZWQpY29udGludWU7Y29uc3QgYXR0cj1ET01BdHRyaWJ1dGVOYW1lc1twXXx8cC50b0xvd2VyQ2FzZSgpO2lmKHR5cGU9PT0nc2NyaXB0JyYmKGF0dHI9PT0nYXN5bmMnfHxhdHRyPT09J2RlZmVyJ3x8YXR0cj09PSdub01vZHVsZScpKXs7ZWxbYXR0cl09ISFwcm9wc1twXTt9ZWxzZXtlbC5zZXRBdHRyaWJ1dGUoYXR0cixwcm9wc1twXSk7fX1jb25zdHtjaGlsZHJlbixkYW5nZXJvdXNseVNldElubmVySFRNTH09cHJvcHM7aWYoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2VsLmlubmVySFRNTD1kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx8fCcnO31lbHNlIGlmKGNoaWxkcmVuKXtlbC50ZXh0Q29udGVudD10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9cmV0dXJuIGVsO31mdW5jdGlvbiB1cGRhdGVFbGVtZW50cyh0eXBlLGNvbXBvbmVudHMpe2NvbnN0IGhlYWRFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO2NvbnN0IGhlYWRDb3VudEVsPWhlYWRFbC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9bmV4dC1oZWFkLWNvdW50XScpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighaGVhZENvdW50RWwpe2NvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IG5leHQtaGVhZC1jb3VudCBpcyBtaXNzaW5nLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWhlYWQtY291bnQtbWlzc2luZycpO3JldHVybjt9fWNvbnN0IGhlYWRDb3VudD1OdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7Y29uc3Qgb2xkVGFncz1bXTtmb3IobGV0IGk9MCxqPWhlYWRDb3VudEVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7aTxoZWFkQ291bnQ7aSsrLGo9ai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtpZihqLnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PXR5cGUpe29sZFRhZ3MucHVzaChqKTt9fWNvbnN0IG5ld1RhZ3M9Y29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pLmZpbHRlcihuZXdUYWc9Pntmb3IobGV0IGs9MCxsZW49b2xkVGFncy5sZW5ndGg7azxsZW47aysrKXtjb25zdCBvbGRUYWc9b2xkVGFnc1trXTtpZihvbGRUYWcuaXNFcXVhbE5vZGUobmV3VGFnKSl7b2xkVGFncy5zcGxpY2UoaywxKTtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9KTtvbGRUYWdzLmZvckVhY2godD0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpKTtuZXdUYWdzLmZvckVhY2godD0+aGVhZEVsLmluc2VydEJlZm9yZSh0LGhlYWRDb3VudEVsKSk7aGVhZENvdW50RWwuY29udGVudD0oaGVhZENvdW50LW9sZFRhZ3MubGVuZ3RoK25ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO31mdW5jdGlvbiBpbml0SGVhZE1hbmFnZXIoKXtsZXQgdXBkYXRlUHJvbWlzZT1udWxsO3JldHVybnttb3VudGVkSW5zdGFuY2VzOm5ldyBTZXQoKSx1cGRhdGVIZWFkOmhlYWQ9Pntjb25zdCBwcm9taXNlPXVwZGF0ZVByb21pc2U9UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e2lmKHByb21pc2UhPT11cGRhdGVQcm9taXNlKXJldHVybjt1cGRhdGVQcm9taXNlPW51bGw7Y29uc3QgdGFncz17fTtoZWFkLmZvckVhY2goaD0+e2lmKC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuLy8gaXQgd29uJ3QgYmUgaW5saW5lZC4gSW4gdGhpcyBjYXNlIHJldmVydCB0byB0aGUgb3JpZ2luYWwgYmVoYXZpb3JcbmgudHlwZT09PSdsaW5rJyYmaC5wcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpe2gucHJvcHMuaHJlZj1oLnByb3BzWydkYXRhLWhyZWYnXTtoLnByb3BzWydkYXRhLWhyZWYnXT11bmRlZmluZWQ7fWNvbnN0IGNvbXBvbmVudHM9dGFnc1toLnR5cGVdfHxbXTtjb21wb25lbnRzLnB1c2goaCk7dGFnc1toLnR5cGVdPWNvbXBvbmVudHM7fSk7Y29uc3QgdGl0bGVDb21wb25lbnQ9dGFncy50aXRsZT90YWdzLnRpdGxlWzBdOm51bGw7bGV0IHRpdGxlPScnO2lmKHRpdGxlQ29tcG9uZW50KXtjb25zdHtjaGlsZHJlbn09dGl0bGVDb21wb25lbnQucHJvcHM7dGl0bGU9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWlmKHRpdGxlIT09ZG9jdW1lbnQudGl0bGUpZG9jdW1lbnQudGl0bGU9dGl0bGU7WydtZXRhJywnYmFzZScsJ2xpbmsnLCdzdHlsZScsJ3NjcmlwdCddLmZvckVhY2godHlwZT0+e3VwZGF0ZUVsZW1lbnRzKHR5cGUsdGFnc1t0eXBlXXx8W10pO30pO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmluaXRTY3JpcHRMb2FkZXI9aW5pdFNjcmlwdExvYWRlcjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyPXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IFNjcmlwdENhY2hlPW5ldyBNYXAoKTtjb25zdCBMb2FkQ2FjaGU9bmV3IFNldCgpO2NvbnN0IGlnbm9yZVByb3BzPVsnb25Mb2FkJywnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCdjaGlsZHJlbicsJ29uRXJyb3InLCdzdHJhdGVneSddO2NvbnN0IGxvYWRTY3JpcHQ9cHJvcHM9Pntjb25zdHtzcmMsaWQsb25Mb2FkPSgpPT57fSxkYW5nZXJvdXNseVNldElubmVySFRNTCxjaGlsZHJlbj0nJyxvbkVycm9yfT1wcm9wcztjb25zdCBjYWNoZUtleT1pZHx8c3JjO2lmKFNjcmlwdENhY2hlLmhhcyhzcmMpKXtpZighTG9hZENhY2hlLmhhcyhjYWNoZUtleSkpe0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpOy8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cblNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLG9uRXJyb3IpO31yZXR1cm47fWNvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO2NvbnN0IGxvYWRQcm9taXNlPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxmdW5jdGlvbigpe3Jlc29sdmUoKTtpZihvbkxvYWQpe29uTG9hZC5jYWxsKHRoaXMpO319KTtlbC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsZnVuY3Rpb24oKXtyZWplY3QoKTtpZihvbkVycm9yKXtvbkVycm9yKCk7fX0pO30pO2lmKHNyYyl7U2NyaXB0Q2FjaGUuc2V0KHNyYyxsb2FkUHJvbWlzZSk7TG9hZENhY2hlLmFkZChjYWNoZUtleSk7fWlmKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtlbC5pbm5lckhUTUw9ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfHwnJzt9ZWxzZSBpZihjaGlsZHJlbil7ZWwudGV4dENvbnRlbnQ9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fWVsc2UgaWYoc3JjKXtlbC5zcmM9c3JjO31mb3IoY29uc3Rbayx2YWx1ZV1vZiBPYmplY3QuZW50cmllcyhwcm9wcykpe2lmKHZhbHVlPT09dW5kZWZpbmVkfHxpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSl7Y29udGludWU7fWNvbnN0IGF0dHI9X2hlYWRNYW5hZ2VyLkRPTUF0dHJpYnV0ZU5hbWVzW2tdfHxrLnRvTG93ZXJDYXNlKCk7ZWwuc2V0QXR0cmlidXRlKGF0dHIsdmFsdWUpO31kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTt9O2Z1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHMpe2NvbnN0e3N0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJ309cHJvcHM7aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpe2lmKGRvY3VtZW50LnJlYWR5U3RhdGU9PT0nY29tcGxldGUnKXsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO31lbHNle3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fSk7fX1mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKXtzY3JpcHRMb2FkZXJJdGVtcy5mb3JFYWNoKGhhbmRsZUNsaWVudFNjcmlwdExvYWQpO31mdW5jdGlvbiBTY3JpcHQocHJvcHMpe2NvbnN0e3NyYz0nJyxvbkxvYWQ9KCk9Pnt9LHN0cmF0ZWd5PSdhZnRlckludGVyYWN0aXZlJyxvbkVycm9yfT1wcm9wcyxyZXN0UHJvcHM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKHByb3BzLFtcInNyY1wiLFwib25Mb2FkXCIsXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLFwic3RyYXRlZ3lcIixcIm9uRXJyb3JcIl0pOy8vIENvbnRleHQgaXMgYXZhaWxhYmxlIG9ubHkgZHVyaW5nIFNTUlxuY29uc3R7dXBkYXRlU2NyaXB0cyxzY3JpcHRzfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoc3RyYXRlZ3k9PT0nYWZ0ZXJJbnRlcmFjdGl2ZScpe2xvYWRTY3JpcHQocHJvcHMpO31lbHNlIGlmKHN0cmF0ZWd5PT09J2xhenlPbmxvYWQnKXtsb2FkTGF6eVNjcmlwdChwcm9wcyk7fX0sW3Byb3BzLHN0cmF0ZWd5XSk7aWYoc3RyYXRlZ3k9PT0nYmVmb3JlSW50ZXJhY3RpdmUnKXtpZih1cGRhdGVTY3JpcHRzKXtzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlPShzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFsoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3NyYyxvbkxvYWQsb25FcnJvcn0scmVzdFByb3BzKV0pO3VwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7fX1yZXR1cm4gbnVsbDt9dmFyIF9kZWZhdWx0PVNjcmlwdDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5IdG1sPUh0bWw7ZXhwb3J0cy5NYWluPU1haW47ZXhwb3J0cy5OZXh0U2NyaXB0PWV4cG9ydHMuSGVhZD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX2dldFBhZ2VGaWxlcz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzXCIpO3ZhciBfdXRpbHMyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHNcIik7dmFyIF9odG1sZXNjYXBlPXJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTt2YXIgX3NjcmlwdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jbGllbnQvc2NyaXB0XCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhidWlsZE1hbmlmZXN0LHBhdGhuYW1lLGluQW1wTW9kZSl7Y29uc3Qgc2hhcmVkRmlsZXM9KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QsJy9fYXBwJyk7Y29uc3QgcGFnZUZpbGVzPWluQW1wTW9kZT9bXTooMCxfZ2V0UGFnZUZpbGVzLmdldFBhZ2VGaWxlcykoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSk7cmV0dXJue3NoYXJlZEZpbGVzLHBhZ2VGaWxlcyxhbGxGaWxlczpbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsLi4ucGFnZUZpbGVzXSldfTt9ZnVuY3Rpb24gZ2V0UG9seWZpbGxTY3JpcHRzKGNvbnRleHQscHJvcHMpey8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG5jb25zdHthc3NldFByZWZpeCxidWlsZE1hbmlmZXN0LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpKS5tYXAocG9seWZpbGw9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpwb2x5ZmlsbCxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sbm9Nb2R1bGU6dHJ1ZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfSkpO31mdW5jdGlvbiBnZXRQcmVOZXh0U2NyaXB0cyhjb250ZXh0LHByb3BzKXtjb25zdHtzY3JpcHRMb2FkZXIsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLm1hcChmaWxlPT57Y29uc3R7c3RyYXRlZ3ksLi4uc2NyaXB0UHJvcHN9PWZpbGU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHt9LHNjcmlwdFByb3BzLHtkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fSk7fWZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCxwcm9wcyxmaWxlcyl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJyl8fGZpbGVzLmFsbEZpbGVzLmluY2x1ZGVzKGZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsa2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6cHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9ZnVuY3Rpb24gZ2V0U2NyaXB0cyhjb250ZXh0LHByb3BzLGZpbGVzKXt2YXIgX2J1aWxkTWFuaWZlc3QkbG93UHJpO2NvbnN0e2Fzc2V0UHJlZml4LGJ1aWxkTWFuaWZlc3QsaXNEZXZlbG9wbWVudCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtjb25zdCBub3JtYWxTY3JpcHRzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7Y29uc3QgbG93UHJpb3JpdHlTY3JpcHRzPShfYnVpbGRNYW5pZmVzdCRsb3dQcmk9YnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKT09bnVsbD92b2lkIDA6X2J1aWxkTWFuaWZlc3QkbG93UHJpLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7cmV0dXJuWy4uLm5vcm1hbFNjcmlwdHMsLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoZmlsZT0+e3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnByb3BzLm5vbmNlLGFzeW5jOiFpc0RldmVsb3BtZW50JiZkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxkZWZlcjohZGlzYWJsZU9wdGltaXplZExvYWRpbmcsY3Jvc3NPcmlnaW46cHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KTt9LyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50ey8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL3N0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KXtjb25zdCBlbmhhbmNlQXBwPUFwcD0+e3JldHVybiBwcm9wcz0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLHByb3BzKTt9O2NvbnN0e2h0bWwsaGVhZH09YXdhaXQgY3R4LnJlbmRlclBhZ2Uoe2VuaGFuY2VBcHB9KTtjb25zdCBzdHlsZXM9Wy4uLigwLF9zZXJ2ZXIuZGVmYXVsdCkoKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTpwcm9wc30sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRDb21wb25lbnQscHJvcHMpKTt9cmVuZGVyKCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsbnVsbCkpKTt9fWV4cG9ydHMuZGVmYXVsdD1Eb2N1bWVudDtmdW5jdGlvbiBIdG1sKHByb3BzKXtjb25zdHtpbkFtcE1vZGUsZG9jQ29tcG9uZW50c1JlbmRlcmVkLGxvY2FsZX09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbD10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30scHJvcHMse2xhbmc6cHJvcHMubGFuZ3x8bG9jYWxlfHx1bmRlZmluZWQsYW1wOmluQW1wTW9kZT8nJzp1bmRlZmluZWQsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGUmJnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPycnOnVuZGVmaW5lZH0pKTt9Y2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0Q3NzTGlua3MoZmlsZXMpe2NvbnN0e2Fzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGR5bmFtaWNJbXBvcnRzfT10aGlzLmNvbnRleHQ7Y29uc3QgY3NzRmlsZXM9ZmlsZXMuYWxsRmlsZXMuZmlsdGVyKGY9PmYuZW5kc1dpdGgoJy5jc3MnKSk7Y29uc3Qgc2hhcmVkRmlsZXM9bmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7Ly8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4vLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxubGV0IHVubWFuZ2VkRmlsZXM9bmV3IFNldChbXSk7bGV0IGR5bmFtaWNDc3NGaWxlcz1BcnJheS5mcm9tKG5ldyBTZXQoZHluYW1pY0ltcG9ydHMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5jc3MnKSkpKTtpZihkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKXtjb25zdCBleGlzdGluZz1uZXcgU2V0KGNzc0ZpbGVzKTtkeW5hbWljQ3NzRmlsZXM9ZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihmPT4hKGV4aXN0aW5nLmhhcyhmKXx8c2hhcmVkRmlsZXMuaGFzKGYpKSk7dW5tYW5nZWRGaWxlcz1uZXcgU2V0KGR5bmFtaWNDc3NGaWxlcyk7Y3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO31sZXQgY3NzTGlua0VsZW1lbnRzPVtdO2Nzc0ZpbGVzLmZvckVhY2goZmlsZT0+e2NvbnN0IGlzU2hhcmVkRmlsZT1zaGFyZWRGaWxlcy5oYXMoZmlsZSk7aWYoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1Mpe2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6YCR7ZmlsZX0tcHJlbG9hZGAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpO31jb25zdCBpc1VubWFuYWdlZEZpbGU9dW5tYW5nZWRGaWxlcy5oYXMoZmlsZSk7Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFwiZGF0YS1uLWdcIjppc1VubWFuYWdlZEZpbGU/dW5kZWZpbmVkOmlzU2hhcmVkRmlsZT8nJzp1bmRlZmluZWQsXCJkYXRhLW4tcFwiOmlzVW5tYW5hZ2VkRmlsZT91bmRlZmluZWQ6aXNTaGFyZWRGaWxlP3VuZGVmaW5lZDonJ30pKTt9KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyl7Y3NzTGlua0VsZW1lbnRzPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjc3NMaW5rRWxlbWVudHMpO31yZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aD09PTA/bnVsbDpjc3NMaW5rRWxlbWVudHM7fWdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKGZpbGU9PntpZighZmlsZS5lbmRzV2l0aCgnLmpzJykpe3JldHVybiBudWxsO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGtleTpmaWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl7Y29uc3R7YXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsc2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmaWxlPT57cmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO30pO3JldHVyblsuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZS5zcmMsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpmaWxlLnNyYyxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSksLi4ucHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKV07fWdldER5bmFtaWNDaHVua3MoZmlsZXMpe3JldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UHJlTmV4dFNjcmlwdHMoKXtyZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31nZXRTY3JpcHRzKGZpbGVzKXtyZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFBvbHlmaWxsU2NyaXB0cygpe3JldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKXtjb25zdHtzY3JpcHRMb2FkZXJ9PXRoaXMuY29udGV4dDtjb25zdCBzY3JpcHRMb2FkZXJJdGVtcz1bXTtjb25zdCBmaWx0ZXJlZENoaWxkcmVuPVtdO19yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sY2hpbGQ9PntpZihjaGlsZC50eXBlPT09X3NjcmlwdC5kZWZhdWx0KXtpZihjaGlsZC5wcm9wcy5zdHJhdGVneT09PSdiZWZvcmVJbnRlcmFjdGl2ZScpe3NjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZT0oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkuY29uY2F0KFt7Li4uY2hpbGQucHJvcHN9XSk7cmV0dXJuO31lbHNlIGlmKFsnbGF6eU9ubG9hZCcsJ2FmdGVySW50ZXJhY3RpdmUnXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpe3NjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO3JldHVybjt9fWZpbHRlcmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7fSk7dGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyPXNjcmlwdExvYWRlckl0ZW1zO3JldHVybiBmaWx0ZXJlZENoaWxkcmVuO31tYWtlU3R5bGVzaGVldEluZXJ0KG5vZGUpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSxjPT57aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJl9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHt1cmx9KT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsbmV3UHJvcHMpO31lbHNlIGlmKGMucHJvcHMmJmMucHJvcHNbJ2NoaWxkcmVuJ10pe2MucHJvcHNbJ2NoaWxkcmVuJ109dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pO31yZXR1cm4gYzt9KTt9cmVuZGVyKCl7dmFyIF90aGlzJHByb3BzJG5vbmNlLF90aGlzJHByb3BzJG5vbmNlMjtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTLHVuc3RhYmxlX0pzUHJlbG9hZCxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3QgZGlzYWJsZUpzUHJlbG9hZD11bnN0YWJsZV9Kc1ByZWxvYWQ9PT1mYWxzZXx8IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nO3RoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZD10cnVlO2xldHtoZWFkfT10aGlzLmNvbnRleHQ7bGV0IGNzc1ByZWxvYWRzPVtdO2xldCBvdGhlckhlYWRFbGVtZW50cz1bXTtpZihoZWFkKXtoZWFkLmZvckVhY2goYz0+e2lmKGMmJmMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1sncmVsJ109PT0ncHJlbG9hZCcmJmMucHJvcHNbJ2FzJ109PT0nc3R5bGUnKXtjc3NQcmVsb2Fkcy5wdXNoKGMpO31lbHNle2MmJm90aGVySGVhZEVsZW1lbnRzLnB1c2goYyk7fX0pO2hlYWQ9Y3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKTt9bGV0IGNoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikuZmlsdGVyKEJvb2xlYW4pOy8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sY2hpbGQ9Pnt2YXIgX2NoaWxkJHByb3BzO2NvbnN0IGlzUmVhY3RIZWxtZXQ9Y2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHM9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHNbJ2RhdGEtcmVhY3QtaGVsbWV0J107aWYoIWlzUmVhY3RIZWxtZXQpe3ZhciBfY2hpbGQkcHJvcHMyO2lmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0ndGl0bGUnKXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO31lbHNlIGlmKChjaGlsZD09bnVsbD92b2lkIDA6Y2hpbGQudHlwZSk9PT0nbWV0YScmJihjaGlsZD09bnVsbD92b2lkIDA6KF9jaGlsZCRwcm9wczI9Y2hpbGQucHJvcHMpPT1udWxsP3ZvaWQgMDpfY2hpbGQkcHJvcHMyLm5hbWUpPT09J3ZpZXdwb3J0Jyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7fX1yZXR1cm4gY2hpbGQ7fSk7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIWluQW1wTW9kZSl7Y2hpbGRyZW49dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTt9Y2hpbGRyZW49dGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKTtsZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09bnVsbD92b2lkIDA6KF9lbCRwcm9wcz1lbC5wcm9wcyk9PW51bGw/dm9pZCAwOihfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9X2VsJHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKT09bnVsbD92b2lkIDA6X2VsJHByb3BzJGRhbmdlcm91c2x5Ll9faHRtbDt9Oy8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQ9PntpZihBcnJheS5pc0FycmF5KGNoaWxkKSl7Y2hpbGQuZm9yRWFjaChlbD0+aGFzU3R5bGVzKGVsKSYmY3VyU3R5bGVzLnB1c2goZWwpKTt9ZWxzZSBpZihoYXNTdHlsZXMoY2hpbGQpKXtjdXJTdHlsZXMucHVzaChjaGlsZCk7fX0pO31jb25zdCBmaWxlcz1nZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsaW5BbXBNb2RlKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIix0aGlzLnByb3BzLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWR9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5OmJsb2NrfWB9fSkpKSxjaGlsZHJlbixwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1mb250LXByZWNvbm5lY3RcIn0pLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSwhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW4tY3NzXCI6KF90aGlzJHByb3BzJG5vbmNlPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlOicnfSkscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWltYWdlLXByZWxvYWRcIn0pLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiYhZGlzYWJsZUpzUHJlbG9hZCYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0U2NyaXB0cyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmdGhpcy5nZXRDc3NMaW5rcyhmaWxlcykscHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbi1jc3NcIjooX3RoaXMkcHJvcHMkbm9uY2UyPXRoaXMucHJvcHMubm9uY2UpIT1udWxsP190aGlzJHByb3BzJG5vbmNlMjonJ30pLHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbi8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7aWQ6XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIn0pLHN0eWxlc3x8bnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGhlYWRUYWdzfHxbXSkpKTt9fWV4cG9ydHMuSGVhZD1IZWFkO0hlYWQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SGVhZC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307ZnVuY3Rpb24gTWFpbigpe2NvbnN0e2luQW1wTW9kZSxodG1sLGRvY0NvbXBvbmVudHNSZW5kZXJlZH09KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0KTtkb2NDb21wb25lbnRzUmVuZGVyZWQuTWFpbj10cnVlO2lmKGluQW1wTW9kZSlyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO31jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKGZpbGVzKXtyZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFByZU5leHRTY3JpcHRzKCl7cmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9Z2V0U2NyaXB0cyhmaWxlcyl7cmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXtyZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9c3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKXtjb25zdHtfX05FWFRfREFUQV9ffT1kb2N1bWVudFByb3BzO3RyeXtjb25zdCBkYXRhPUpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO3JldHVybigwLF9odG1sZXNjYXBlLmh0bWxFc2NhcGVKc29uU3RyaW5nKShkYXRhKTt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSl7dGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7YXNzZXRQcmVmaXgsaW5BbXBNb2RlLGJ1aWxkTWFuaWZlc3QsdW5zdGFibGVfcnVudGltZUpTLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309dGhpcy5jb250ZXh0O2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQ9dHJ1ZTtpZihpbkFtcE1vZGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtyZXR1cm4gbnVsbDt9Y29uc3QgYW1wRGV2RmlsZXM9Wy4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXNdO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksYW1wRGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmYnVpbGRNYW5pZmVzdC5kZXZGaWxlcz9idWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk6bnVsbCxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpfX0pLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFNjcmlwdHMoZmlsZXMpKTt9fWV4cG9ydHMuTmV4dFNjcmlwdD1OZXh0U2NyaXB0O05leHRTY3JpcHQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7TmV4dFNjcmlwdC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeD0nIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnO2Z1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCxhc1BhdGgpe3JldHVybiBhbXBQYXRofHxgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKT8nJic6Jz8nfWFtcD0xYDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZG9jdW1lbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb21lLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc3BsaWNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS5ub3cuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5tYXAuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuYXNzaWduLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmNyZWF0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMucmVmbGVjdC5jb25zdHJ1Y3QuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zZXQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuZW5kcy13aXRoLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnJlcGxhY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3RhcnRzLXdpdGguanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy53ZWFrLW1hcC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=