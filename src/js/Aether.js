/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toArray = toArray;
exports.isStatefulComponent = isStatefulComponent;
exports.isStringOrNumber = isStringOrNumber;
exports.isNullOrUndef = isNullOrUndef;
exports.isInvalid = isInvalid;
exports.isFunction = isFunction;
exports.isAttrAnEvent = isAttrAnEvent;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNull = isNull;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.throwError = throwError;
exports.warning = warning;
exports.Lifecycle = Lifecycle;
exports.copyPropsTo = copyPropsTo;
var NO_OP = exports.NO_OP = '$NO_OP';
var ERROR_MSG = exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = exports.isBrowser = typeof window !== 'undefined' && window.document;
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error('Inferno Error: ' + message);
}
function warning(message) {
    console.warn(message);
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    for (var i = 0, len = this.listeners.length; i < len; i++) {
        this.listeners[i]();
    }
};
function copyPropsTo(copyFrom, copyTo) {
    for (var prop in copyFrom) {
        if (isUndefined(copyTo[prop])) {
            copyTo[prop] = copyFrom[prop];
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.internal_normalize = exports.internal_isUnitlessNumber = exports.options = exports.createRenderer = exports.findDOMNode = exports.render = exports.EMPTY_OBJ = exports.NO_OP = exports.cloneVNode = exports.createVNode = exports.linkEvent = exports.version = undefined;

var _constants = __webpack_require__(10);

Object.defineProperty(exports, 'internal_isUnitlessNumber', {
    enumerable: true,
    get: function get() {
        return _constants.isUnitlessNumber;
    }
});

var _normalization = __webpack_require__(15);

Object.defineProperty(exports, 'internal_normalize', {
    enumerable: true,
    get: function get() {
        return _normalization.normalize;
    }
});

var _infernoShared = __webpack_require__(0);

var _VNodes = __webpack_require__(6);

var _linkEvent = __webpack_require__(25);

var _linkEvent2 = _interopRequireDefault(_linkEvent);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV !== 'production') {
    var testFunc = function testFn() {};
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        (0, _infernoShared.warning)('It looks like you\'re using a minified copy of the development build ' + 'of Inferno. When deploying Inferno apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See http://infernojs.org for more details.');
    }
}
// This will be replaced by rollup
var version = exports.version = 'VERSION';
// we duplicate it so it plays nicely with different module loading systems
exports.default = {
    linkEvent: _linkEvent2.default,
    // core shapes
    createVNode: _VNodes.createVNode,
    // cloning
    cloneVNode: _VNodes.cloneVNode,
    // used to shared common items between Inferno libs
    NO_OP: _infernoShared.NO_OP,
    EMPTY_OBJ: _utils.EMPTY_OBJ,
    // DOM
    render: _rendering.render,
    findDOMNode: _rendering.findDOMNode,
    createRenderer: _rendering.createRenderer,
    options: _options2.default,
    version: version
};
exports.linkEvent = _linkEvent2.default;
exports.createVNode = _VNodes.createVNode;
exports.cloneVNode = _VNodes.cloneVNode;
exports.NO_OP = _infernoShared.NO_OP;
exports.EMPTY_OBJ = _utils.EMPTY_OBJ;
exports.render = _rendering.render;
exports.findDOMNode = _rendering.findDOMNode;
exports.createRenderer = _rendering.createRenderer;
exports.options = _options2.default;
// Internal stuff that only core inferno-* packages use
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EMPTY_OBJ = undefined;
exports.createClassComponentInstance = createClassComponentInstance;
exports.replaceLastChildAndUnmount = replaceLastChildAndUnmount;
exports.replaceVNode = replaceVNode;
exports.createFunctionalComponentInput = createFunctionalComponentInput;
exports.setTextContent = setTextContent;
exports.updateTextContent = updateTextContent;
exports.appendChild = appendChild;
exports.insertOrAppend = insertOrAppend;
exports.documentCreateElement = documentCreateElement;
exports.replaceWithNewNode = replaceWithNewNode;
exports.replaceChild = replaceChild;
exports.removeChild = removeChild;
exports.removeAllChildren = removeAllChildren;
exports.removeChildren = removeChildren;
exports.isKeyed = isKeyed;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _constants = __webpack_require__(10);

var _mounting = __webpack_require__(11);

var _patching = __webpack_require__(7);

var _rendering = __webpack_require__(8);

var _unmounting = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = exports.EMPTY_OBJ = {};
if (process.env.NODE_ENV !== 'production') {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG) {
    if ((0, _infernoShared.isUndefined)(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance._patch = _patching.patch;
    if (_options2.default.findDOMNodeEnabled) {
        instance._componentToDOMNodeMap = _rendering.componentToDOMNodeMap;
    }
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if ((0, _infernoShared.isFunction)(instance.componentWillMount)) {
        instance.componentWillMount();
    }
    var childContext = instance.getChildContext();
    if ((0, _infernoShared.isNullOrUndef)(childContext)) {
        instance._childContext = context;
    } else {
        instance._childContext = Object.assign({}, context, childContext);
    }
    _options2.default.beforeRender && _options2.default.beforeRender(instance);
    var input = instance.render(props, instance.state, context);
    _options2.default.afterRender && _options2.default.afterRender(instance);
    if ((0, _infernoShared.isArray)(input)) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        (0, _infernoShared.throwError)();
    } else if ((0, _infernoShared.isInvalid)(input)) {
        input = (0, _VNodes.createVoidVNode)();
    } else if ((0, _infernoShared.isStringOrNumber)(input)) {
        input = (0, _VNodes.createTextVNode)(input);
    } else {
        if (input.dom) {
            input = (0, _VNodes.cloneVNode)(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, (0, _mounting.mount)(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    var shallowUnmount = false;
    // we cannot cache nodeType here as vNode might be re-assigned below
    if (vNode.flags & 28 /* Component */) {
            // if we are accessing a stateful or stateless component, we want to access their last rendered input
            // accessing their DOM node is not useful to us here
            (0, _unmounting.unmount)(vNode, null, lifecycle, false, isRecycling);
            vNode = vNode.children._lastInput || vNode.children;
            shallowUnmount = true;
        }
    replaceChild(parentDom, dom, vNode.dom);
    (0, _unmounting.unmount)(vNode, null, lifecycle, false, isRecycling);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if ((0, _infernoShared.isArray)(input)) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        (0, _infernoShared.throwError)();
    } else if ((0, _infernoShared.isInvalid)(input)) {
        input = (0, _VNodes.createVoidVNode)();
    } else if ((0, _infernoShared.isStringOrNumber)(input)) {
        input = (0, _VNodes.createTextVNode)(input);
    } else {
        if (input.dom) {
            input = (0, _VNodes.cloneVNode)(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    } else {
        dom.appendChild(document.createTextNode(''));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if ((0, _infernoShared.isNullOrUndef)(nextNode)) {
        appendChild(parentDom, newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(_constants.svgNS, tag);
    } else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    (0, _unmounting.unmount)(lastNode, null, lifecycle, false, isRecycling);
    var dom = (0, _mounting.mount)(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    dom.textContent = '';
    if (!_options2.default.recyclingEnabled || _options2.default.recyclingEnabled && !isRecycling) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!(0, _infernoShared.isInvalid)(child)) {
            (0, _unmounting.unmount)(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length && !(0, _infernoShared.isNullOrUndef)(nextChildren[0]) && !(0, _infernoShared.isNullOrUndef)(nextChildren[0].key) && lastChildren.length && !(0, _infernoShared.isNullOrUndef)(lastChildren[0]) && !(0, _infernoShared.isNullOrUndef)(lastChildren[0].key);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    recyclingEnabled: false,
    findDOMNodeEnabled: false,
    roots: null,
    createVNode: null,
    beforeRender: null,
    afterRender: null,
    afterMount: null,
    afterUpdate: null,
    beforeUnmount: null
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference


var _inferno = __webpack_require__(1);

var _infernoShared = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var noOp = _infernoShared.ERROR_MSG;
if (process.env.NODE_ENV !== 'production') {
    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
            var parentVNode = vNode.parentVNode;
            if (parentVNode) {
                parentVNode.dom = dom;
                updateParentComponentVNodes(parentVNode, dom);
            }
        }
}
// this is in shapes too, but we don't want to import from shapes as it will pull in a duplicate of createVNode
function createVoidVNode() {
    return (0, _inferno.createVNode)(4096 /* Void */);
}
function createTextVNode(text) {
    return (0, _inferno.createVNode)(1 /* Text */, null, null, text);
}
function addToQueue(component, force, callback) {
    // TODO this function needs to be revised and improved on
    var queue = componentCallbackQueue.get(component);
    if (!queue) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        Promise.resolve().then(function () {
            componentCallbackQueue.delete(component);
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i]();
                }
            });
        });
    }
    if (callback) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback, sync) {
    if ((0, _infernoShared.isFunction)(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    for (var stateKey in newState) {
        component._pendingState[stateKey] = newState[stateKey];
    }
    if (!component._pendingSetState && _infernoShared.isBrowser) {
        if (sync || component._blockRender) {
            component._pendingSetState = true;
            applyState(component, false, callback);
        } else {
            addToQueue(component, false, callback);
        }
    } else {
        component.state = Object.assign({}, component.state, component._pendingState);
        component._pendingState = {};
    }
}
function applyState(component, force, callback) {
    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = Object.assign({}, prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = {};
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if ((0, _infernoShared.isInvalid)(nextInput)) {
            nextInput = createVoidVNode();
        } else if (nextInput === _infernoShared.NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        } else if ((0, _infernoShared.isStringOrNumber)(nextInput)) {
            nextInput = createTextVNode(nextInput);
        } else if ((0, _infernoShared.isArray)(nextInput)) {
            if (process.env.NODE_ENV !== 'production') {
                (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            (0, _infernoShared.throwError)();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var subLifecycle = component._lifecycle;
            if (!subLifecycle) {
                subLifecycle = new _infernoShared.Lifecycle();
            } else {
                subLifecycle.listeners = [];
            }
            component._lifecycle = subLifecycle;
            var childContext = component.getChildContext();
            if ((0, _infernoShared.isNullOrUndef)(childContext)) {
                childContext = component._childContext;
            } else {
                childContext = Object.assign({}, context, component._childContext, childContext);
            }
            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
            subLifecycle.trigger();
            component.componentDidUpdate(props, prevState);
            _inferno.options.afterUpdate && _inferno.options.afterUpdate(vNode);
        }
        var dom = vNode.dom = nextInput.dom;
        var componentToDOMNodeMap = component._componentToDOMNodeMap;
        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
        updateParentComponentVNodes(vNode, dom);
        if (!(0, _infernoShared.isNullOrUndef)(callback)) {
            callback();
        }
    } else if (!(0, _infernoShared.isNullOrUndef)(callback)) {
        callback();
    }
}

var Component = function () {
    function Component(props, context) {
        _classCallCheck(this, Component);

        this.state = {};
        this.refs = {};
        this._blockRender = false;
        this._ignoreSetState = false;
        this._blockSetState = false;
        this._deferSetState = false;
        this._pendingSetState = false;
        this._syncSetState = true;
        this._pendingState = {};
        this._lastInput = null;
        this._vNode = null;
        this._unmounted = true;
        this._lifecycle = null;
        this._childContext = null;
        this._patch = null;
        this._isSVG = false;
        this._componentToDOMNodeMap = null;
        /** @type {object} */
        this.props = props || _inferno.EMPTY_OBJ;
        /** @type {object} */
        this.context = context || _inferno.EMPTY_OBJ; // context should not be mutable
    }

    _createClass(Component, [{
        key: 'render',
        value: function render(nextProps, nextState, nextContext) {}
    }, {
        key: 'forceUpdate',
        value: function forceUpdate(callback) {
            if (this._unmounted) {
                return;
            }
            _infernoShared.isBrowser && applyState(this, true, callback);
        }
    }, {
        key: 'setState',
        value: function setState(newState, callback) {
            if (this._unmounted) {
                return;
            }
            if (!this._blockSetState) {
                if (!this._ignoreSetState) {
                    queueStateChanges(this, newState, callback, this._syncSetState);
                }
            } else {
                if (process.env.NODE_ENV !== 'production') {
                    (0, _infernoShared.throwError)('cannot update state via setState() in componentWillUpdate().');
                }
                (0, _infernoShared.throwError)();
            }
        }
    }, {
        key: 'setStateSync',
        value: function setStateSync(newState) {
            if (this._unmounted) {
                return;
            }
            if (!this._blockSetState) {
                if (!this._ignoreSetState) {
                    queueStateChanges(this, newState, null, true);
                }
            } else {
                if (process.env.NODE_ENV !== 'production') {
                    (0, _infernoShared.throwError)('cannot update state via setState() in componentWillUpdate().');
                }
                (0, _infernoShared.throwError)();
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, prevContext) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, context) {
            return true;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, context) {}
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState, nextContext) {}
    }, {
        key: 'getChildContext',
        value: function getChildContext() {}
    }, {
        key: '_updateComponent',
        value: function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
            if (this._unmounted === true) {
                if (process.env.NODE_ENV !== 'production') {
                    (0, _infernoShared.throwError)(noOp);
                }
                (0, _infernoShared.throwError)();
            }
            if (prevProps !== nextProps || nextProps === _inferno.EMPTY_OBJ || prevState !== nextState || force) {
                if (prevProps !== nextProps || nextProps === _inferno.EMPTY_OBJ) {
                    if (!fromSetState) {
                        this._blockRender = true;
                        this.componentWillReceiveProps(nextProps, context);
                        this._blockRender = false;
                    }
                    if (this._pendingSetState) {
                        nextState = Object.assign({}, nextState, this._pendingState);
                        this._pendingSetState = false;
                        this._pendingState = {};
                    }
                }
                var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);
                if (shouldUpdate !== false || force) {
                    this._blockSetState = true;
                    this.componentWillUpdate(nextProps, nextState, context);
                    this._blockSetState = false;
                    this.props = nextProps;
                    var state = this.state = nextState;
                    this.context = context;
                    _inferno.options.beforeRender && _inferno.options.beforeRender(this);
                    var render = this.render(nextProps, state, context);
                    _inferno.options.afterRender && _inferno.options.afterRender(this);
                    return render;
                }
            }
            return _infernoShared.NO_OP;
        }
    }]);

    return Component;
}();

exports.default = Component;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createVNode = createVNode;
exports.cloneVNode = cloneVNode;
exports.createVoidVNode = createVoidVNode;
exports.createTextVNode = createTextVNode;
exports.isVNode = isVNode;

var _infernoShared = __webpack_require__(0);

var _normalization = __webpack_require__(15);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
            flags = (0, _infernoShared.isStatefulComponent)(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
        }
    var vNode = {
        children: (0, _infernoShared.isUndefined)(children) ? null : children,
        dom: null,
        events: events || null,
        flags: flags,
        key: (0, _infernoShared.isUndefined)(key) ? null : key,
        props: props || null,
        ref: ref || null,
        type: type
    };
    if (!noNormalise) {
        (0, _normalization.normalize)(vNode);
    }
    if (_options2.default.createVNode) {
        _options2.default.createVNode(vNode);
    }
    return vNode;
}
function cloneVNode(vNodeToClone, props) {
    for (var _len = arguments.length, _children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        _children[_key - 2] = arguments[_key];
    }

    var children = _children;
    if (_children.length > 0 && !(0, _infernoShared.isNull)(_children[0])) {
        if (!props) {
            props = {};
        }
        if (_children.length === 1) {
            children = _children[0];
        }
        if ((0, _infernoShared.isUndefined)(props.children)) {
            props.children = children;
        } else {
            if ((0, _infernoShared.isArray)(children)) {
                if ((0, _infernoShared.isArray)(props.children)) {
                    props.children = props.children.concat(children);
                } else {
                    props.children = [props.children].concat(children);
                }
            } else {
                if ((0, _infernoShared.isArray)(props.children)) {
                    props.children.push(children);
                } else {
                    props.children = [props.children];
                    props.children.push(children);
                }
            }
        }
    }
    children = null;
    var newVNode = void 0;
    if ((0, _infernoShared.isArray)(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(cloneVNode(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    } else {
        var flags = vNodeToClone.flags;
        var events = vNodeToClone.events || props && props.events || null;
        var key = !(0, _infernoShared.isNullOrUndef)(vNodeToClone.key) ? vNodeToClone.key : props ? props.key : null;
        var ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
                newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
                var newProps = newVNode.props;
                if (newProps) {
                    var newChildren = newProps.children;
                    // we need to also clone component children that are in props
                    // as the children may also have been hoisted
                    if (newChildren) {
                        if ((0, _infernoShared.isArray)(newChildren)) {
                            for (var _i = 0, _len2 = newChildren.length; _i < _len2; _i++) {
                                var child = newChildren[_i];
                                if (!(0, _infernoShared.isInvalid)(child) && isVNode(child)) {
                                    newProps.children[_i] = cloneVNode(child);
                                }
                            }
                        } else if (isVNode(newChildren)) {
                            newProps.children = cloneVNode(newChildren);
                        }
                    }
                }
                newVNode.children = null;
            } else if (flags & 3970 /* Element */) {
                children = props && props.children || vNodeToClone.children;
                newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
            } else if (flags & 1 /* Text */) {
                newVNode = createTextVNode(vNodeToClone.children);
            }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */);
}
function createTextVNode(text) {
    return createVNode(1 /* Text */, null, null, text, null, null, null, true);
}
function isVNode(o) {
    return !!o.flags;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patch = patch;
exports.patchElement = patchElement;
exports.patchComponent = patchComponent;
exports.patchText = patchText;
exports.patchVoid = patchVoid;
exports.patchNonKeyedChildren = patchNonKeyedChildren;
exports.patchKeyedChildren = patchKeyedChildren;
exports.patchProp = patchProp;
exports.patchEvents = patchEvents;
exports.patchEvent = patchEvent;
exports.patchStyle = patchStyle;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _constants = __webpack_require__(10);

var _delegation = __webpack_require__(24);

var _mounting = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _rendering = __webpack_require__(8);

var _unmounting = __webpack_require__(12);

var _processElement = __webpack_require__(9);

var _processElement2 = _interopRequireDefault(_processElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
                if (lastFlags & 28 /* Component */) {
                        patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountComponent)(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 3970 /* Element */) {
                if (lastFlags & 3970 /* Element */) {
                        patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountElement)(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 1 /* Text */) {
                if (lastFlags & 1 /* Text */) {
                        patchText(lastVNode, nextVNode);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountText)(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 4096 /* Void */) {
                if (lastFlags & 4096 /* Void */) {
                        patchVoid(lastVNode, nextVNode);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountVoid)(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else {
            // Error case: mount new one replacing old one
            (0, _utils.replaceLastChildAndUnmount)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if ((0, _VNodes.isVNode)(children)) {
        (0, _unmounting.unmount)(children, dom, lifecycle, true, isRecycling);
    } else if ((0, _infernoShared.isArray)(children)) {
        (0, _utils.removeAllChildren)(dom, children, lifecycle, isRecycling);
    } else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        (0, _utils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    } else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var lastRef = lastVNode.ref;
        var nextRef = nextVNode.ref;
        var lastEvents = lastVNode.events;
        var nextEvents = nextVNode.events;
        nextVNode.dom = dom;
        if (isSVG || nextFlags & 128 /* SvgElement */) {
            isSVG = true;
        }
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        var hasControlledValue = false;
        if (!(nextFlags & 2 /* HtmlElement */)) {
            hasControlledValue = (0, _processElement2.default)(nextFlags, nextVNode, dom, false);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || _utils.EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || _utils.EMPTY_OBJ;
            if (nextPropsOrEmpty !== _utils.EMPTY_OBJ) {
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    if ((0, _infernoShared.isNullOrUndef)(nextValue)) {
                        removeProp(prop, nextValue, dom);
                    } else {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                    }
                }
            }
            if (lastPropsOrEmpty !== _utils.EMPTY_OBJ) {
                for (var _prop in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if ((0, _infernoShared.isNullOrUndef)(nextPropsOrEmpty[_prop])) {
                        removeProp(_prop, lastPropsOrEmpty[_prop], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastEvents !== nextEvents) {
            patchEvents(lastEvents, nextEvents, dom);
        }
        if (nextRef) {
            if (lastRef !== nextRef || isRecycling) {
                (0, _mounting.mountRef)(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
            patchArray = true;
        } else if (lastFlags & 32 /* HasKeyedChildren */ && nextFlags & 32 /* HasKeyedChildren */) {
        patchKeyed = true;
        patchArray = true;
    } else if ((0, _infernoShared.isInvalid)(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    } else if ((0, _infernoShared.isInvalid)(lastChildren)) {
        if ((0, _infernoShared.isStringOrNumber)(nextChildren)) {
            (0, _utils.setTextContent)(dom, nextChildren);
        } else {
            if ((0, _infernoShared.isArray)(nextChildren)) {
                (0, _mounting.mountArrayChildren)(nextChildren, dom, lifecycle, context, isSVG);
            } else {
                (0, _mounting.mount)(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    } else if ((0, _infernoShared.isStringOrNumber)(nextChildren)) {
        if ((0, _infernoShared.isStringOrNumber)(lastChildren)) {
            (0, _utils.updateTextContent)(dom, nextChildren);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            (0, _utils.setTextContent)(dom, nextChildren);
        }
    } else if ((0, _infernoShared.isArray)(nextChildren)) {
        if ((0, _infernoShared.isArray)(lastChildren)) {
            patchArray = true;
            if ((0, _utils.isKeyed)(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            (0, _mounting.mountArrayChildren)(nextChildren, dom, lifecycle, context, isSVG);
        }
    } else if ((0, _infernoShared.isArray)(lastChildren)) {
        (0, _utils.removeAllChildren)(dom, lastChildren, lifecycle, isRecycling);
        (0, _mounting.mount)(nextChildren, dom, lifecycle, context, isSVG);
    } else if ((0, _VNodes.isVNode)(nextChildren)) {
        if ((0, _VNodes.isVNode)(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            (0, _mounting.mount)(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var nextProps = nextVNode.props || _utils.EMPTY_OBJ;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    var defaultProps = nextType.defaultProps;
    if (!(0, _infernoShared.isUndefined)(defaultProps)) {
        // When defaultProps are used we need to create new Object
        var props = nextVNode.props || {};
        (0, _infernoShared.copyPropsTo)(defaultProps, props);
        nextVNode.props = props;
    }
    if (lastType !== nextType) {
        if (isClass) {
            (0, _utils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        } else {
            var lastInput = lastVNode.children._lastInput || lastVNode.children;
            var nextInput = (0, _utils.createFunctionalComponentInput)(nextVNode, nextType, nextProps, context);
            (0, _unmounting.unmount)(lastVNode, null, lifecycle, false, isRecycling);
            patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
            var dom = nextVNode.dom = nextInput.dom;
            nextVNode.children = nextInput;
            (0, _mounting.mountFunctionalComponentCallbacks)(nextVNode.ref, dom, lifecycle);
        }
    } else {
        if (isClass) {
            if (lastKey !== nextKey) {
                (0, _utils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                return false;
            }
            var instance = lastVNode.children;
            if (instance._unmounted) {
                if ((0, _infernoShared.isNull)(parentDom)) {
                    return true;
                }
                (0, _utils.replaceChild)(parentDom, (0, _mounting.mountComponent)(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
            } else {
                var lastState = instance.state;
                var nextState = instance.state;
                var lastProps = instance.props;
                var childContext = instance.getChildContext();
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                instance._syncSetState = false;
                if ((0, _infernoShared.isNullOrUndef)(childContext)) {
                    childContext = context;
                } else {
                    childContext = Object.assign({}, context, childContext);
                }
                var _lastInput = instance._lastInput;
                var _nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if ((0, _infernoShared.isInvalid)(_nextInput)) {
                    _nextInput = (0, _VNodes.createVoidVNode)();
                } else if (_nextInput === _infernoShared.NO_OP) {
                    _nextInput = _lastInput;
                    didUpdate = false;
                } else if ((0, _infernoShared.isStringOrNumber)(_nextInput)) {
                    _nextInput = (0, _VNodes.createTextVNode)(_nextInput);
                } else if ((0, _infernoShared.isArray)(_nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    (0, _infernoShared.throwError)();
                } else if ((0, _infernoShared.isObject)(_nextInput) && _nextInput.dom) {
                    _nextInput = (0, _VNodes.cloneVNode)(_nextInput);
                }
                if (_nextInput.flags & 28 /* Component */) {
                        _nextInput.parentVNode = nextVNode;
                    } else if (_lastInput.flags & 28 /* Component */) {
                        _lastInput.parentVNode = nextVNode;
                    }
                instance._lastInput = _nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(_lastInput, _nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    instance.componentDidUpdate(lastProps, lastState);
                    _options2.default.afterUpdate && _options2.default.afterUpdate(nextVNode);
                    _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.set(instance, _nextInput.dom);
                }
                instance._syncSetState = true;
                nextVNode.dom = _nextInput.dom;
            }
        } else {
            var shouldUpdate = true;
            var _lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !(0, _infernoShared.isNullOrUndef)(nextHooks);
            var _lastInput2 = lastVNode.children;
            var _nextInput2 = _lastInput2;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = _lastInput2;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            } else {
                if (nextHooksDefined && !(0, _infernoShared.isNullOrUndef)(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(_lastProps, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !(0, _infernoShared.isNullOrUndef)(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(_lastProps, nextProps);
                }
                _nextInput2 = nextType(nextProps, context);
                if ((0, _infernoShared.isInvalid)(_nextInput2)) {
                    _nextInput2 = (0, _VNodes.createVoidVNode)();
                } else if ((0, _infernoShared.isStringOrNumber)(_nextInput2) && _nextInput2 !== _infernoShared.NO_OP) {
                    _nextInput2 = (0, _VNodes.createTextVNode)(_nextInput2);
                } else if ((0, _infernoShared.isArray)(_nextInput2)) {
                    if (process.env.NODE_ENV !== 'production') {
                        (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    (0, _infernoShared.throwError)();
                } else if ((0, _infernoShared.isObject)(_nextInput2) && _nextInput2.dom) {
                    _nextInput2 = (0, _VNodes.cloneVNode)(_nextInput2);
                }
                if (_nextInput2 !== _infernoShared.NO_OP) {
                    patch(_lastInput2, _nextInput2, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = _nextInput2;
                    if (nextHooksDefined && !(0, _infernoShared.isNullOrUndef)(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(_lastProps, nextProps);
                    }
                    nextVNode.dom = _nextInput2.dom;
                }
            }
            if (_nextInput2.flags & 28 /* Component */) {
                    _nextInput2.parentVNode = nextVNode;
                } else if (_lastInput2.flags & 28 /* Component */) {
                    _lastInput2.parentVNode = nextVNode;
                }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = (0, _VNodes.cloneVNode)(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var _nextChild = nextChildren[i];
            if (_nextChild.dom) {
                _nextChild = nextChildren[i] = (0, _VNodes.cloneVNode)(_nextChild);
            }
            (0, _utils.appendChild)(dom, (0, _mounting.mount)(_nextChild, null, lifecycle, context, isSVG));
        }
    } else if (nextChildrenLength === 0) {
        (0, _utils.removeAllChildren)(dom, lastChildren, lifecycle, isRecycling);
    } else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            (0, _unmounting.unmount)(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i = void 0;
    var j = void 0;
    var aNode = void 0;
    var bNode = void 0;
    var nextNode = void 0;
    var nextPos = void 0;
    var node = void 0;
    if (aLength === 0) {
        if (bLength !== 0) {
            (0, _mounting.mountArrayChildren)(b, dom, lifecycle, context, isSVG);
        }
        return;
    } else if (bLength === 0) {
        (0, _utils.removeAllChildren)(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = (0, _VNodes.cloneVNode)(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = (0, _VNodes.cloneVNode)(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = (0, _VNodes.cloneVNode)(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = (0, _VNodes.cloneVNode)(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            (0, _utils.insertOrAppend)(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = (0, _VNodes.cloneVNode)(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            (0, _utils.insertOrAppend)(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = (0, _VNodes.cloneVNode)(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = (0, _VNodes.cloneVNode)(node);
                }
                bStart++;
                (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            (0, _unmounting.unmount)(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = (0, _VNodes.cloneVNode)(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                node = b[i];
                keyIndex.set(node.key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!(0, _infernoShared.isUndefined)(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = (0, _VNodes.cloneVNode)(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            (0, _utils.removeAllChildren)(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = (0, _VNodes.cloneVNode)(node);
                }
                bStart++;
                (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, null, lifecycle, context, isSVG), null);
            }
        } else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!(0, _infernoShared.isNull)(aNode)) {
                    (0, _unmounting.unmount)(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = (0, _VNodes.cloneVNode)(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, dom, lifecycle, context, isSVG), nextNode);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            (0, _utils.insertOrAppend)(dom, node.dom, nextNode);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = (0, _VNodes.cloneVNode)(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i = void 0;
    var j = void 0;
    var u = void 0;
    var v = void 0;
    var c = void 0;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = (u + v) / 2 | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            } else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (_constants.skipProps[prop] || hasControlledValue && prop === 'value') {
        return;
    }
    if (_constants.booleanProps[prop]) {
        dom[prop] = !!nextValue;
    } else if (_constants.strictProps[prop]) {
        var value = (0, _infernoShared.isNullOrUndef)(nextValue) ? '' : nextValue;
        if (dom[prop] !== value) {
            dom[prop] = value;
        }
    } else if (lastValue !== nextValue) {
        if ((0, _infernoShared.isAttrAnEvent)(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        } else if ((0, _infernoShared.isNullOrUndef)(nextValue)) {
            dom.removeAttribute(prop);
        } else if (prop === 'className') {
            if (isSVG) {
                dom.setAttribute('class', nextValue);
            } else {
                dom.className = nextValue;
            }
        } else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        } else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!(0, _infernoShared.isNullOrUndef)(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        } else {
            var ns = _constants.namespaces[prop];
            if (ns) {
                dom.setAttributeNS(ns, prop, nextValue);
            } else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvents(lastEvents, nextEvents, dom) {
    lastEvents = lastEvents || _utils.EMPTY_OBJ;
    nextEvents = nextEvents || _utils.EMPTY_OBJ;
    if (nextEvents !== _utils.EMPTY_OBJ) {
        for (var _name in nextEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            patchEvent(_name, lastEvents[_name], nextEvents[_name], dom);
        }
    }
    if (lastEvents !== _utils.EMPTY_OBJ) {
        for (var _name2 in lastEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            if ((0, _infernoShared.isNullOrUndef)(nextEvents[_name2])) {
                patchEvent(_name2, lastEvents[_name2], null, dom);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        var nameLowerCase = name.toLowerCase();
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (domEvent && domEvent.wrapped) {
            return;
        }
        if (_constants.delegatedProps[name]) {
            (0, _delegation.handleEvent)(name, lastValue, nextValue, dom);
        } else {
            if (lastValue !== nextValue) {
                if (!(0, _infernoShared.isFunction)(nextValue) && !(0, _infernoShared.isNullOrUndef)(nextValue)) {
                    var linkEvent = nextValue.event;
                    if (linkEvent && (0, _infernoShared.isFunction)(linkEvent)) {
                        if (!dom._data) {
                            dom[nameLowerCase] = function (e) {
                                linkEvent(e.currentTarget._data, e);
                            };
                        }
                        dom._data = nextValue.data;
                    } else {
                        if (process.env.NODE_ENV !== 'production') {
                            (0, _infernoShared.throwError)('an event on a VNode "' + name + '". was not a function or a valid linkEvent.');
                        }
                        (0, _infernoShared.throwError)();
                    }
                } else {
                    dom[nameLowerCase] = nextValue;
                }
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if ((0, _infernoShared.isString)(nextAttrValue)) {
        dom.style.cssText = nextAttrValue;
        return;
    }
    for (var style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        var value = nextAttrValue[style];
        if ((0, _infernoShared.isNumber)(value) && !_constants.isUnitlessNumber[style]) {
            dom.style[style] = value + 'px';
        } else {
            dom.style[style] = value;
        }
    }
    if (!(0, _infernoShared.isNullOrUndef)(lastAttrValue)) {
        for (var _style in lastAttrValue) {
            if ((0, _infernoShared.isNullOrUndef)(nextAttrValue[_style])) {
                dom.style[_style] = '';
            }
        }
    }
}
function removeProp(prop, lastValue, dom) {
    if (prop === 'className') {
        dom.removeAttribute('class');
    } else if (prop === 'value') {
        dom.value = '';
    } else if (prop === 'style') {
        dom.removeAttribute('style');
    } else if ((0, _infernoShared.isAttrAnEvent)(prop)) {
        (0, _delegation.handleEvent)(name, lastValue, null, dom);
    } else {
        dom.removeAttribute(prop);
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentToDOMNodeMap = exports.roots = undefined;
exports.findDOMNode = findDOMNode;
exports.render = render;
exports.createRenderer = createRenderer;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _hydration = __webpack_require__(26);

var _hydration2 = _interopRequireDefault(_hydration);

var _mounting = __webpack_require__(11);

var _patching = __webpack_require__(7);

var _unmounting = __webpack_require__(12);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var roots = exports.roots = [];
var componentToDOMNodeMap = exports.componentToDOMNodeMap = new Map();
_options2.default.roots = roots;
function findDOMNode(ref) {
    if (!_options2.default.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
        }
        (0, _infernoShared.throwError)();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== 'production') {
    if (_infernoShared.isBrowser && document.body === null) {
        (0, _infernoShared.warning)('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = _infernoShared.isBrowser ? document.body : null;
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        (0, _infernoShared.throwError)();
    }
    if (input === _infernoShared.NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if ((0, _infernoShared.isNull)(root)) {
        var lifecycle = new _infernoShared.Lifecycle();
        if (!(0, _infernoShared.isInvalid)(input)) {
            if (input.dom) {
                input = (0, _VNodes.cloneVNode)(input);
            }
            if (!(0, _hydration2.default)(input, parentDom, lifecycle)) {
                (0, _mounting.mount)(input, parentDom, lifecycle, _utils.EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    } else {
        var _lifecycle = root.lifecycle;
        _lifecycle.listeners = [];
        if ((0, _infernoShared.isNullOrUndef)(input)) {
            (0, _unmounting.unmount)(root.input, parentDom, _lifecycle, false, false);
            removeRoot(root);
        } else {
            if (input.dom) {
                input = (0, _VNodes.cloneVNode)(input);
            }
            (0, _patching.patch)(root.input, input, parentDom, _lifecycle, _utils.EMPTY_OBJ, false, false);
        }
        _lifecycle.trigger();
        root.input = input;
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
            return rootInput.children;
        }
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrappers = undefined;
exports.default = processElement;

var _InputWrapper = __webpack_require__(27);

var _SelectWrapper = __webpack_require__(28);

var _TextareaWrapper = __webpack_require__(29);

var wrappers = exports.wrappers = new Map();
function processElement(flags, vNode, dom, mounting) {
    if (flags & 512 /* InputElement */) {
            return (0, _InputWrapper.processInput)(vNode, dom);
        }
    if (flags & 2048 /* SelectElement */) {
            return (0, _SelectWrapper.processSelect)(vNode, dom);
        }
    if (flags & 1024 /* TextareaElement */) {
            return (0, _TextareaWrapper.processTextarea)(vNode, dom, mounting);
        }
    return false;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function constructDefaults(string, object, value) {
    /* eslint no-return-assign: 0 */
    var array = string.split(',');
    for (var i = 0, len = array.length; i < len; i++) {
        object[array[i]] = value;
    }
}
var xlinkNS = exports.xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = exports.svgNS = 'http://www.w3.org/2000/svg';
var strictProps = exports.strictProps = {};
var booleanProps = exports.booleanProps = {};
var namespaces = exports.namespaces = {};
var isUnitlessNumber = exports.isUnitlessNumber = {};
var skipProps = exports.skipProps = {};
var delegatedProps = exports.delegatedProps = {};
constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
constructDefaults('volume,defaultChecked', strictProps, true);
constructDefaults('children,childrenType,defaultValue,ref,key,selected,checked,multiple', skipProps, true);
constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress', delegatedProps, true);
constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate,hidden', booleanProps, true);
constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.mount = mount;
exports.mountText = mountText;
exports.mountVoid = mountVoid;
exports.mountElement = mountElement;
exports.mountArrayChildren = mountArrayChildren;
exports.mountComponent = mountComponent;
exports.mountClassComponentCallbacks = mountClassComponentCallbacks;
exports.mountFunctionalComponentCallbacks = mountFunctionalComponentCallbacks;
exports.mountRef = mountRef;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _patching = __webpack_require__(7);

var _recycling = __webpack_require__(14);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

var _processElement = __webpack_require__(9);

var _processElement2 = _interopRequireDefault(_processElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
            return mountElement(vNode, parentDom, lifecycle, context, isSVG);
        } else if (flags & 28 /* Component */) {
            return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
        } else if (flags & 4096 /* Void */) {
            return mountVoid(vNode, parentDom);
        } else if (flags & 1 /* Text */) {
            return mountText(vNode, parentDom);
        } else {
        if (process.env.NODE_ENV !== 'production') {
            if ((typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) === 'object') {
                (0, _infernoShared.throwError)('mount() received an object that\'s not a valid VNode, you should stringify it first. Object: "' + JSON.stringify(vNode) + '".');
            } else {
                (0, _infernoShared.throwError)('mount() expects a valid VNode, instead it received an object with the type "' + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + '".');
            }
        }
        (0, _infernoShared.throwError)();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (parentDom) {
        (0, _utils.appendChild)(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode('');
    vNode.dom = dom;
    if (parentDom) {
        (0, _utils.appendChild)(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (_options2.default.recyclingEnabled) {
        var _dom = (0, _recycling.recycleElement)(vNode, lifecycle, context, isSVG);
        if (!(0, _infernoShared.isNull)(_dom)) {
            if (!(0, _infernoShared.isNull)(parentDom)) {
                (0, _utils.appendChild)(parentDom, _dom);
            }
            return _dom;
        }
    }
    var tag = vNode.type;
    var flags = vNode.flags;
    if (isSVG || flags & 128 /* SvgElement */) {
        isSVG = true;
    }
    var dom = (0, _utils.documentCreateElement)(tag, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var events = vNode.events;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!(0, _infernoShared.isNull)(children)) {
        if ((0, _infernoShared.isStringOrNumber)(children)) {
            (0, _utils.setTextContent)(dom, children);
        } else if ((0, _infernoShared.isArray)(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        } else if ((0, _VNodes.isVNode)(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    var hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = (0, _processElement2.default)(flags, vNode, dom, true);
    }
    if (!(0, _infernoShared.isNull)(props)) {
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            (0, _patching.patchProp)(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (!(0, _infernoShared.isNull)(events)) {
        for (var name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            (0, _patching.patchEvent)(name, null, events[name], dom);
        }
    }
    if (!(0, _infernoShared.isNull)(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!(0, _infernoShared.isNull)(parentDom)) {
        (0, _utils.appendChild)(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // TODO: Verify can string/number be here. might cause de-opt
        if (!(0, _infernoShared.isInvalid)(child)) {
            if (child.dom) {
                children[i] = child = (0, _VNodes.cloneVNode)(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (_options2.default.recyclingEnabled) {
        var _dom2 = (0, _recycling.recycleComponent)(vNode, lifecycle, context, isSVG);
        if (!(0, _infernoShared.isNull)(_dom2)) {
            if (!(0, _infernoShared.isNull)(parentDom)) {
                (0, _utils.appendChild)(parentDom, _dom2);
            }
            return _dom2;
        }
    }
    var type = vNode.type;
    var defaultProps = type.defaultProps;
    var props = void 0;
    if (!(0, _infernoShared.isUndefined)(defaultProps)) {
        // When defaultProps are used we need to create new Object
        props = vNode.props || {};
        (0, _infernoShared.copyPropsTo)(defaultProps, props);
        vNode.props = props;
    } else {
        props = vNode.props || _utils.EMPTY_OBJ;
    }
    var ref = vNode.ref;
    var dom = void 0;
    if (isClass) {
        var instance = (0, _utils.createClassComponentInstance)(vNode, type, props, context, isSVG);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!(0, _infernoShared.isNull)(parentDom)) {
            (0, _utils.appendChild)(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.set(instance, dom);
        vNode.children = instance;
    } else {
        var _input = (0, _utils.createFunctionalComponentInput)(vNode, type, props, context);
        vNode.dom = dom = mount(_input, null, lifecycle, context, isSVG);
        vNode.children = _input;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!(0, _infernoShared.isNull)(parentDom)) {
            (0, _utils.appendChild)(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if ((0, _infernoShared.isFunction)(ref)) {
            ref(instance);
        } else {
            if (process.env.NODE_ENV !== 'production') {
                if ((0, _infernoShared.isStringOrNumber)(ref)) {
                    (0, _infernoShared.throwError)('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                } else if ((0, _infernoShared.isObject)(ref) && vNode.flags & 4 /* ComponentClass */) {
                    (0, _infernoShared.throwError)('functional component lifecycle events are not supported on ES2015 class components.');
                } else {
                    (0, _infernoShared.throwError)('a bad value for "ref" was used on component: "' + JSON.stringify(ref) + '"');
                }
            }
            (0, _infernoShared.throwError)();
        }
    }
    var cDM = instance.componentDidMount;
    var afterMount = _options2.default.afterMount;
    if (!(0, _infernoShared.isUndefined)(cDM) || !(0, _infernoShared.isNull)(afterMount)) {
        lifecycle.addListener(function () {
            afterMount && afterMount(vNode);
            cDM && instance.componentDidMount();
            instance._syncSetState = true;
        });
    } else {
        instance._syncSetState = true;
    }
}
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!(0, _infernoShared.isNullOrUndef)(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!(0, _infernoShared.isNullOrUndef)(ref.onComponentDidMount)) {
            lifecycle.addListener(function () {
                return ref.onComponentDidMount(dom);
            });
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if ((0, _infernoShared.isFunction)(value)) {
        lifecycle.addListener(function () {
            return value(dom);
        });
    } else {
        if ((0, _infernoShared.isInvalid)(value)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        (0, _infernoShared.throwError)();
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unmount = unmount;
exports.unmountComponent = unmountComponent;
exports.unmountElement = unmountElement;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _patching = __webpack_require__(7);

var _recycling = __webpack_require__(14);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & 3970 /* Element */) {
            unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (parentDom) {
        (0, _utils.removeChild)(parentDom, vNode.dom);
    }
}
var alreadyUnmounted = new WeakMap();
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent = flags & 4 /* ComponentClass */;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
        return;
    }
    alreadyUnmounted.set(vNode, true);
    if (!isRecycling) {
        if (isStatefulComponent) {
            if (!instance._unmounted) {
                instance._ignoreSetState = true;
                _options2.default.beforeUnmount && _options2.default.beforeUnmount(vNode);
                instance.componentWillUnmount && instance.componentWillUnmount();
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.delete(instance);
                var subLifecycle = instance._lifecycle;
                unmount(instance._lastInput, null, subLifecycle, false, isRecycling);
            }
        } else {
            if (!(0, _infernoShared.isNullOrUndef)(ref)) {
                if (!(0, _infernoShared.isNullOrUndef)(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if ((0, _infernoShared.isNullOrUndef)(lastInput)) {
            lastInput = instance;
        }
        (0, _utils.removeChild)(parentDom, dom);
    }
    if (_options2.default.recyclingEnabled && !isStatefulComponent && (parentDom || canRecycle)) {
        (0, _recycling.poolComponent)(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var events = vNode.events;
    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
        return;
    }
    alreadyUnmounted.set(vNode, true);
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!(0, _infernoShared.isNullOrUndef)(children)) {
        unmountChildren(children, lifecycle, isRecycling);
    }
    if (!(0, _infernoShared.isNull)(events)) {
        for (var name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            (0, _patching.patchEvent)(name, events[name], null, dom);
            events[name] = null;
        }
    }
    if (parentDom) {
        (0, _utils.removeChild)(parentDom, dom);
    }
    if (_options2.default.recyclingEnabled && (parentDom || canRecycle)) {
        (0, _recycling.poolElement)(vNode);
    }
}
function unmountChildren(children, lifecycle, isRecycling) {
    if ((0, _infernoShared.isArray)(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!(0, _infernoShared.isInvalid)(child) && (0, _infernoShared.isObject)(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    } else if ((0, _infernoShared.isObject)(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if ((0, _infernoShared.isFunction)(ref)) {
        ref(null);
    } else {
        if ((0, _infernoShared.isInvalid)(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        (0, _infernoShared.throwError)();
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addAdditionalSettings = addAdditionalSettings;

var _Settings = __webpack_require__(16);

var Settings = _interopRequireWildcard(_Settings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addAdditionalSettings(state) {
  // Define our defaults
  var defaults = {
    "distro": "archlinux",

    "avatar_enabled": true,
    "avatar_size": "200px",
    "avatar_shape": "circle",

    "font_dpi": 1.0,
    "font_color": "#222222",
    "font_family": "Open Sans",
    "font_scale": 1.0,

    "date_enabled": true,
    "date_format": "%A, the %o of %B"
  };

  var settings = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(defaults)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      settings[key] = Settings.requestSetting(key, defaults[key]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return _extends({}, state, { "settings": settings });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recycleElement = recycleElement;
exports.poolElement = poolElement;
exports.recycleComponent = recycleComponent;
exports.poolComponent = poolComponent;

var _infernoShared = __webpack_require__(0);

var _patching = __webpack_require__(7);

var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (!(0, _infernoShared.isUndefined)(pools)) {
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!(0, _infernoShared.isUndefined)(pool)) {
            var recycledVNode = pool.pop();
            if (!(0, _infernoShared.isUndefined)(recycledVNode)) {
                (0, _patching.patchElement)(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if ((0, _infernoShared.isUndefined)(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        elementPools.set(tag, pools);
    }
    if ((0, _infernoShared.isNull)(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if ((0, _infernoShared.isUndefined)(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (!(0, _infernoShared.isUndefined)(pools)) {
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!(0, _infernoShared.isUndefined)(pool)) {
            var recycledVNode = pool.pop();
            if (!(0, _infernoShared.isUndefined)(recycledVNode)) {
                var flags = vNode.flags;
                var failed = (0, _patching.patchComponent)(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var type = vNode.type;
    var key = vNode.key;
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var pools = componentPools.get(type);
    if ((0, _infernoShared.isUndefined)(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        componentPools.set(type, pools);
    }
    if ((0, _infernoShared.isNull)(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if ((0, _infernoShared.isUndefined)(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeVNodes = normalizeVNodes;
exports.normalize = normalize;

var _infernoShared = __webpack_require__(0);

var _VNodes = __webpack_require__(6);

function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if ((0, _infernoShared.isNumber)(key)) {
        key = '.' + key;
    }
    if ((0, _infernoShared.isNull)(vNode.key) || vNode.key[0] === '.') {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + '.' + index;
        if (!(0, _infernoShared.isInvalid)(n)) {
            if ((0, _infernoShared.isArray)(n)) {
                _normalizeVNodes(n, result, 0, key);
            } else {
                if ((0, _infernoShared.isStringOrNumber)(n)) {
                    n = (0, _VNodes.createTextVNode)(n);
                } else if ((0, _VNodes.isVNode)(n) && n.dom || n.key && n.key[0] === '.') {
                    n = (0, _VNodes.cloneVNode)(n);
                }
                if ((0, _infernoShared.isNull)(n.key) || n.key[0] === '.') {
                    n = applyKey(key, n);
                } else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes = void 0;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes['$']) {
        nodes = nodes.slice();
    } else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if ((0, _infernoShared.isInvalid)(n) || (0, _infernoShared.isArray)(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, '');
            return result;
        } else if ((0, _infernoShared.isStringOrNumber)(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, (0, _VNodes.createTextVNode)(n)));
        } else if ((0, _VNodes.isVNode)(n) && n.dom || (0, _infernoShared.isNull)(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, (0, _VNodes.cloneVNode)(n)));
        } else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, (0, _VNodes.cloneVNode)(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if ((0, _infernoShared.isArray)(children)) {
        return normalizeVNodes(children);
    } else if ((0, _VNodes.isVNode)(children) && children.dom) {
        return (0, _VNodes.cloneVNode)(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (!(vNode.flags & 28 /* Component */) && (0, _infernoShared.isNullOrUndef)(children) && !(0, _infernoShared.isNullOrUndef)(props.children)) {
        vNode.children = props.children;
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.events) {
        vNode.events = props.events;
    }
    if (!(0, _infernoShared.isNullOrUndef)(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function normalizeElement(type, vNode) {
    if (type === 'svg') {
        vNode.flags = 128 /* SvgElement */;
    } else if (type === 'input') {
        vNode.flags = 512 /* InputElement */;
    } else if (type === 'select') {
        vNode.flags = 2048 /* SelectElement */;
    } else if (type === 'textarea') {
        vNode.flags = 1024 /* TextareaElement */;
    } else if (type === 'media') {
        vNode.flags = 256 /* MediaElement */;
    } else {
        vNode.flags = 2 /* HtmlElement */;
    }
}
function normalize(vNode) {
    var props = vNode.props;
    var hasProps = !(0, _infernoShared.isNull)(props);
    var type = vNode.type;
    var children = vNode.children;
    // convert a wrongly created type back to element
    if ((0, _infernoShared.isString)(type) && vNode.flags & 28 /* Component */) {
        normalizeElement(type, vNode);
        if (hasProps && props.children) {
            vNode.children = props.children;
            children = props.children;
        }
    }
    if (hasProps) {
        normalizeProps(vNode, props, children);
    }
    if (!(0, _infernoShared.isInvalid)(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (hasProps && !(0, _infernoShared.isInvalid)(props.children)) {
        props.children = normalizeChildren(props.children);
    }
    if (process.env.NODE_ENV !== 'production') {
        // This code will be stripped out from production CODE
        // It will help users to track errors in their applications.
        var verifyKeys = function verifyKeys(vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    (0, _infernoShared.warning)('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSetting = requestSetting;
exports.saveSetting = saveSetting;
// Settings -> Required by Reducers/PrimaryReducer
// --------------------------------------
// Handles manipulation of greeter settings, and
// provides wrapper functions around localstorage.

var LOCALSTORAGE_ENABLED = exports.LOCALSTORAGE_ENABLED = typeof Storage !== "undefined";

if (!LOCALSTORAGE_ENABLED) {
  window.notifications.generate("localStorage not supported.", 'error');
  throw "localStorage not supported. Theme unable to function.";
}

function requestSetting(setting) {
  var defaultSetting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var result = localStorage.getItem(setting);

  if (result === null || result === undefined) {
    return defaultSetting;
  } else {
    return result;
  }
}

function saveSetting(setting) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  localStorage.setItem(setting, value);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCommand = handleCommand;
exports.findInitialUser = findInitialUser;
exports.findInitialSession = findInitialSession;
exports.findSession = findSession;
// SystemOperations -> Required by Reducers/PrimaryReducer
// --------------------------------------
// Wraps LightDM system operations, and handles the heavy
// lifting of the more complex LightDM requests.

function executeCommand(message, boundFunction) {
  window.notifications.generate(message);

  setTimeout(function () {
    boundFunction();
  }, 1000);

  return true;
}

function handleCommand(command) {
  // What the hell is this, right?
  if (command === "shutdown" && window.lightdm.can_shutdown) {
    return executeCommand("Shutting down", window.lightdm.shutdown);
  } else if (command === "hibernate" && window.lightdm.can_hibernate) {
    return executeCommand("Hibernating system.", window.lightdm.hibernate);
  } else if (command === "reboot" && window.lightdm.can_restart) {
    return executeCommand("Rebooting system.", window.lightdm.restart);
  } else if (command === "sleep" && window.lightdm.can_suspend) {
    return executeCommand("Suspending system.", window.lightdm.suspend);
  }

  // If we have gotten this far, it's because the command is disabled or doesn't exist.
  window.notifications.generate(command + " is disabled on this system.", "error");
}

function findInitialUser() {
  // Are we currently in a lock screen?
  if (window.lightdm.lock_hint === true) {
    // Default to the very first logged in user.
    return window.lightdm.users.filter(function (user) {
      return user.logged_in;
    })[0];
  } else {
    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
      return window.lightdm.users.filter(function (user) {
        return user.username === window.lightdm.select_user_hint;
      })[0];
    } else {
      return window.lightdm.users[0];
    }
  }
}

function findInitialSession(user) {
  var userSession = user === undefined ? undefined : user.session;

  return this.findSession(userSession) || this.findSession(window.lightdm.default_session) || window.lightdm.sessions[0];
}

function findSession(sessionName) {
  if (sessionName === undefined || sessionName === null) {
    return false;
  }

  return window.lightdm.sessions.filter(function (session) {
    return session.name.toLowerCase() === sessionName.toLowerCase() || session.key.toLowerCase() === sessionName.toLowerCase();
  })[0];
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _SystemOperations = __webpack_require__(17);

var SystemOperations = _interopRequireWildcard(_SystemOperations);

var _WallpaperSwitcher = __webpack_require__(36);

var _WallpaperSwitcher2 = _interopRequireDefault(_WallpaperSwitcher);

var _Clock = __webpack_require__(30);

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CommandPanel -> Required by Main
// --------------------------------------
// The system management half of the greeter logic.
// Displays system info and handles Sleep, Shutdown, etc.

var createVNode = _inferno2.default.createVNode;

var CommandPanel = function (_Component) {
  _inherits(CommandPanel, _Component);

  function CommandPanel(props) {
    _classCallCheck(this, CommandPanel);

    var _this = _possibleConstructorReturn(this, (CommandPanel.__proto__ || Object.getPrototypeOf(CommandPanel)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(CommandPanel, [{
    key: 'handleCommand',
    value: function handleCommand(command, disabled, event) {
      event.preventDefault();

      if (disabled !== false) {
        window.notifications.generate(command + ' is disabled on this system.', "error");
        return false;
      }

      SystemOperations.handleCommand(command);
    }
  }, {
    key: 'generateCommands',
    value: function generateCommands() {
      var _this2 = this;

      var commands = {
        "Shutdown": window.lightdm.can_shutdown,
        "Reboot": window.lightdm.can_restart,
        "Hibernate": window.lightdm.can_hibernate,
        "Sleep": window.lightdm.can_suspend
      };

      // Filter out commands we can't execute.
      var enabledCommands = Object.keys(commands).map(function (key) {
        return commands[key] ? key : false;
      }).filter(function (command) {
        return command !== false;
      });

      // Are both hibernation and suspend disabled?
      // Add the row back and disable it so that the user is aware of what's happening.
      if (window.lightdm.can_suspend === false && window.lightdm.can_hibernate === false) {
        enabledCommands.push("Sleep.disabled");
      }

      // Save ourselves some work, when all four commands are enabled
      // rendering should be halted, and the logo should be moved up.
      var expanded = enabledCommands.length > 3;
      if (expanded === true) {
        this.setState({
          'expandedCommands': true
        });
      }

      var rows = enabledCommands.map(function (command) {
        var disabled = command.toLowerCase().split('.')[1] || false;
        command = command.toLowerCase().split('.')[0];

        var classes = ['command', command, disabled].filter(function (e) {
          return e;
        });

        return createVNode(2, 'div', {
          'className': classes.join(' ')
        }, [createVNode(2, 'div', {
          'className': 'icon-wrapper'
        }, createVNode(2, 'div', {
          'className': 'icon'
        })), createVNode(2, 'div', {
          'className': 'text'
        }, command)], {
          'onClick': _this2.handleCommand.bind(_this2, command, disabled)
        });
      });

      var classes = ['commands-wrapper'];

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, rows);
    }
  }, {
    key: 'render',
    value: function render() {
      var hostname = window.lightdm.hostname;
      var commands = this.generateCommands();

      return createVNode(2, 'div', null, [createVNode(16, _WallpaperSwitcher2.default), commands, createVNode(2, 'div', {
        'className': 'bottom'
      }, [createVNode(2, 'div', {
        'className': 'left hostname'
      }, hostname), createVNode(16, _Clock2.default)])]);
    }
  }]);

  return CommandPanel;
}(_infernoComponent2.default);

exports.default = CommandPanel;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // DateDisplay -> Required by Main
// --------------------------------------
// Displays date below the login window.

var createVNode = _inferno2.default.createVNode;

var DateDisplay = function (_Component) {
  _inherits(DateDisplay, _Component);

  function DateDisplay(props) {
    _classCallCheck(this, DateDisplay);

    var _this = _possibleConstructorReturn(this, (DateDisplay.__proto__ || Object.getPrototypeOf(DateDisplay)).call(this, props));

    _this.state = {
      "formattedString": undefined,
      "initialized": false,
      "dayName": undefined,
      "dayValue": undefined,
      "formattedDayValue": undefined,
      "monthName": undefined,
      "monthValue": undefined
    };
    return _this;
  }

  _createClass(DateDisplay, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
      setTimeout(function () {
        _this2.setDate();
      }, 2000);
    }
  }, {
    key: 'generateDateString',
    value: function generateDateString() {
      var dateString = createVNode(2, 'span', null, [createVNode(2, 'em', null, this.state.dayName), ', the ', createVNode(2, 'em', null, this.state.formattedDayValue), ' of ', createVNode(2, 'em', null, this.state.monthName)]);

      return dateString;
    }
  }, {
    key: 'setDate',
    value: function setDate() {
      var _this3 = this;

      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      var now = new Date();

      var dayValue = now.getDate();
      var dayName = dayNames[now.getUTCDay()];
      var monthValue = now.getMonth();
      var monthName = monthNames[monthValue];

      var formattedDayValue = void 0;

      // Because Javascript is terrible, (x <= y <= z) becomes ((x <= y) && (y <= z))
      if (4 <= dayValue && dayValue <= 20 || 24 <= dayValue && dayValue <= 30) {
        formattedDayValue = dayValue + "th";
      } else {
        formattedDayValue = dayValue + ["st", "nd", "rd"][dayValue % 10 - 1];
      }

      var formattedDateString = '<em>' + dayName + '</em>, the <em>' + formattedDayValue + '</em> of <em>' + monthName + '</em>';

      this.setState({
        "formattedString": formattedDateString,
        "initialized": true,
        "dayName": dayName,
        "dayValue": dayValue,
        "formattedDayValue": formattedDayValue,
        "monthName": monthName,
        "monthValue": monthValue
      });

      setTimeout(function () {
        _this3.setDate();
      }, 30 * 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var dateClasses = ["date"];
      var dateString = this.generateDateString();

      if (this.state.initialized === true) {
        dateClasses.push("loaded");
      }

      return createVNode(2, 'div', {
        'className': dateClasses.join(' ')
      }, dateString);
    }
  }]);

  return DateDisplay;
}(_infernoComponent2.default);

exports.default = DateDisplay;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _UserSwitcher = __webpack_require__(35);

var _UserSwitcher2 = _interopRequireDefault(_UserSwitcher);

var _UserPanelForm = __webpack_require__(34);

var _UserPanelForm2 = _interopRequireDefault(_UserPanelForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // UserPanel -> Required by Main
// --------------------------------------
// The login management half of the greeter logic.

var FADE_IN_DURATION = 200;
var ERROR_SHAKE_DURATION = 600;

var createVNode = _inferno2.default.createVNode;

var LoginPanel = function (_Component) {
  _inherits(LoginPanel, _Component);

  function LoginPanel(props) {
    _classCallCheck(this, LoginPanel);

    var _this = _possibleConstructorReturn(this, (LoginPanel.__proto__ || Object.getPrototypeOf(LoginPanel)).call(this, props));

    _this.store = _this.props.store;
    _this.storeState = _this.store.getState();

    _this.unsubscribe = _this.store.subscribe(function () {
      _this.storeState = _this.store.getState();
      _this.setState({
        "_toggleUpdate": !_this.state._toggleUpdate
      });
    });

    _this.state = {
      "dropdownActive": false,
      "fadeIn": false,
      "password": "",
      "passwordFailed": false,
      "switcherActive": false,
      "_toggleUpdate": false
    };
    return _this;
  }

  _createClass(LoginPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // Define functions required in the global scope by LightDM.
      window.show_prompt = function (text, type) {
        if (type === "text") {
          window.notifications.generate(text);
        } else if (type === "password") {
          window.lightdm.respond(_this2.state.password);
        }
      };

      window.show_message = function (text, type) {
        window.notifications.generate(text, type);
      };

      window.authentication_complete = function () {
        if (window.lightdm.is_authenticated) {
          window.lightdm.start_session_sync(_this2.storeState.session.key);
        } else {
          _this2.rejectPassword();
        }
      };

      window.autologin_timer_expired = function () {
        window.notifications.generate("Autologin expired.");
      };
    }
  }, {
    key: 'handleDropdownClick',
    value: function handleDropdownClick(event) {
      this.setState({
        "dropdownActive": true
      });
    }
  }, {
    key: 'handleDropdownLeave',
    value: function handleDropdownLeave(event) {
      this.setState({
        "dropdownActive": false
      });
    }
  }, {
    key: 'handleLoginSubmit',
    value: function handleLoginSubmit(event) {
      event.preventDefault();

      if (window.debug === true) {
        if (this.state.password.toLowerCase() !== "password") {
          this.rejectPassword();
        } else {
          window.notifications.generate('You are now logged in as ' + this.storeState.user.display_name + ' to ' + this.storeState.session.name + '.', 'success');
          this.setState({
            "password": ""
          });
        }
      } else {
        window.lightdm.authenticate(this.storeState.user.username);
      }
    }
  }, {
    key: 'handleSwitcherClick',
    value: function handleSwitcherClick(event) {
      var _this3 = this;

      if (window.lightdm.users.length < 2) {
        window.notifications.generate("You are the only user that is able to log in on this system.", 'error');
        return false;
      } else if (window.lightdm.users.length === 2) {
        // No point in showing them the switcher if there is only one other user. Switch immediately.
        var otherUser = window.lightdm.users.filter(function (user) {
          return user.username !== _this3.storeState.user.username;
        })[0];

        this.setActiveUser(otherUser, true);
        window.notifications.generate("User has been automatically switched to the only other user on this system.");
      } else {
        this.setState({
          "switcherActive": true
        });
      }
    }
  }, {
    key: 'handlePasswordInput',
    value: function handlePasswordInput(event) {
      this.setState({
        "password": event.target.value
      });
    }
  }, {
    key: 'setActiveSession',
    value: function setActiveSession(session) {
      this.store.dispatch({
        'type': 'AUTH_SET_ACTIVE_SESSION',
        'session': session
      });

      this.setState({
        "dropdownActive": false
      });
    }
  }, {
    key: 'setActiveUser',
    value: function setActiveUser(user, isBypass) {
      var _this4 = this;

      this.store.dispatch({
        'type': 'AUTH_SET_ACTIVE_USER',
        'user': user
      });

      // Fade in, except when switching between 1 of 2 users.
      if (isBypass === false || isBypass === undefined) {
        this.setState({
          "fadeIn": true,
          "switcherActive": false
        });

        setTimeout(function () {
          _this4.setState({
            "fadeIn": false
          });
        }, FADE_IN_DURATION);
      } else {
        this.setState({
          "switcherActive": false
        });
      }
    }
  }, {
    key: 'rejectPassword',
    value: function rejectPassword() {
      var _this5 = this;

      window.notifications.generate("Password incorrect, please try again.", 'error');

      this.setState({
        "password": "",
        "passwordFailed": true
      });

      setTimeout(function () {
        _this5.setState({
          "passwordFailed": false
        });
      }, ERROR_SHAKE_DURATION);
    }
  }, {
    key: 'generateSwitchUserButton',
    value: function generateSwitchUserButton() {
      var classes = ['left'];

      if (window.lightdm.users.length < 2) {
        classes.push("disabled");
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, 'SWITCH USER', {
        'onClick': this.handleSwitcherClick.bind(this)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var loginPanelClasses = ['login-panel-main'];

      if (this.state.fadeIn === true) {
        loginPanelClasses.push('fadein');
      }

      if (this.state.switcherActive === true) {
        loginPanelClasses.push('fadeout');
      }

      var switchUserButton = this.generateSwitchUserButton();

      return createVNode(2, 'div', {
        'className': 'login-panel-contents'
      }, [createVNode(2, 'div', {
        'className': loginPanelClasses.join(' ')
      }, [createVNode(2, 'div', {
        'className': 'avatar-container'
      }, createVNode(2, 'div', {
        'className': 'avatar-background'
      }, createVNode(2, 'div', {
        'className': 'avatar-mask'
      }, createVNode(2, 'img', {
        'className': 'user-avatar',
        'src': this.storeState.user.image
      })))), createVNode(16, _UserPanelForm2.default, {
        'activeSession': this.storeState.session,
        'activeUser': this.storeState.user,
        'dropdownActive': this.state.dropdownActive,
        'password': this.state.password,
        'passwordFailed': this.state.passwordFailed,
        'handleLoginSubmit': this.handleLoginSubmit.bind(this),
        'handleDropdownClick': this.handleDropdownClick.bind(this),
        'handleDropdownLeave': this.handleDropdownLeave.bind(this),
        'handlePasswordInput': this.handlePasswordInput.bind(this),
        'setActiveSession': this.setActiveSession.bind(this)
      }), createVNode(2, 'div', {
        'className': 'bottom'
      }, switchUserButton)]), createVNode(16, _UserSwitcher2.default, {
        'active': this.state.switcherActive,
        'activeUser': this.storeState.user,
        'setActiveUser': this.setActiveUser.bind(this)
      })]);
    }
  }]);

  return LoginPanel;
}(_infernoComponent2.default);

exports.default = LoginPanel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryReducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getDefaultState = getDefaultState;

var _SettingsReducer = __webpack_require__(13);

var _SystemOperations = __webpack_require__(17);

var SystemOperations = _interopRequireWildcard(_SystemOperations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getDefaultState() {
  return {
    "info": {
      "hostname": window.lightdm.hostname,
      "language": window.lightdm.language
    },
    "user": SystemOperations.findInitialUser(),
    "session": SystemOperations.findInitialSession()
  };
}

var PrimaryReducer = exports.PrimaryReducer = function PrimaryReducer(state, action) {
  if (action.type.startsWith("SETTINGS")) {
    return (0, _SettingsReducer.SettingsReducer)(state, action);
  }

  switch (action.type) {
    case "AUTH_SET_ACTIVE_SESSION":
      var session = action.session;

      if ((typeof session === "undefined" ? "undefined" : _typeof(session)) === _typeof(String())) {
        session = SystemOperations.findSession(session);
      }

      return _extends({}, state, { "session": session });

    case "AUTH_SET_ACTIVE_USER":
      return _extends({}, state, { "user": action.user });

    default:
      return state;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifications = function () {
  function Notifications() {
    _classCallCheck(this, Notifications);

    this.container = document.querySelectorAll('.notifications-container')[0];
  }

  _createClass(Notifications, [{
    key: 'generate',
    value: function generate(message, type) {
      var _this = this;

      if (type === undefined) {
        type = "";
      }

      var notification = document.createElement('div');
      notification.className = 'notification ' + type;
      notification.innerText = message;
      this.container.appendChild(notification);

      setTimeout(function () {
        notification.className += " fadeout";
        setTimeout(function () {
          _this.container.removeChild(notification);
        }, 500);
      }, 5000);
    }
  }]);

  return Notifications;
}();

exports.default = Notifications;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toArray = toArray;
exports.isStatefulComponent = isStatefulComponent;
exports.isStringOrNumber = isStringOrNumber;
exports.isNullOrUndef = isNullOrUndef;
exports.isInvalid = isInvalid;
exports.isFunction = isFunction;
exports.isAttrAnEvent = isAttrAnEvent;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNull = isNull;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.throwError = throwError;
exports.warning = warning;
exports.Lifecycle = Lifecycle;
exports.copyPropsTo = copyPropsTo;
var NO_OP = exports.NO_OP = '$NO_OP';
var ERROR_MSG = exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = exports.isBrowser = typeof window !== 'undefined' && window.document;
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error('Inferno Error: ' + message);
}
function warning(message) {
    console.warn(message);
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    for (var i = 0, len = this.listeners.length; i < len; i++) {
        this.listeners[i]();
    }
};
function copyPropsTo(copyFrom, copyTo) {
    for (var prop in copyFrom) {
        if (isUndefined(copyTo[prop])) {
            copyTo[prop] = copyFrom[prop];
        }
    }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleEvent = handleEvent;

var _infernoShared = __webpack_require__(0);

var isiOS = _infernoShared.isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            delegatedRoots.count++;
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    } else if (delegatedRoots) {
        if (delegatedRoots.items.has(dom)) {
            delegatedRoots.count--;
            delegatedRoots.items.delete(dom);
            if (delegatedRoots.count === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents.delete(name);
            }
        }
    }
}
function dispatchEvent(event, dom, items, count, eventData) {
    var eventsToTrigger = items.get(dom);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = dom;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        } else {
            eventsToTrigger(event);
        }
        if (eventData.stopPropagation) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = dom.parentNode;
        if (parentDom || parentDom === document.body) {
            dispatchEvent(event, parentDom, items, count, eventData);
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function docEvent(event) {
        var eventData = {
            stopPropagation: false,
            dom: document
        };
        // we have to do this as some browsers recycle the same Event between calls
        // so we need to make the property configurable
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
                return eventData.dom;
            }
        });
        event.stopPropagation = function () {
            eventData.stopPropagation = true;
        };
        var count = delegatedRoots.count;
        if (count > 0) {
            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
function emptyFn() {}
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = linkEvent;
function linkEvent(data, event) {
    return { data: data, event: event };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.normalizeChildNodes = normalizeChildNodes;
exports.default = hydrateRoot;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _constants = __webpack_require__(10);

var _mounting = __webpack_require__(11);

var _patching = __webpack_require__(7);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

var _processElement = __webpack_require__(9);

var _processElement2 = _interopRequireDefault(_processElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                var placeholder = document.createTextNode('');
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            } else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        } else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    vNode.dom = dom;
    var defaultProps = type.defaultProps;
    var props = void 0;
    if (!(0, _infernoShared.isUndefined)(defaultProps)) {
        // When defaultProps are used we need to create new Object
        props = vNode.props || {};
        (0, _infernoShared.copyPropsTo)(defaultProps, props);
        vNode.props = props;
    } else {
        props = vNode.props || _utils.EMPTY_OBJ;
    }
    if (isClass) {
        var _isSVG = dom.namespaceURI === _constants.svgNS;
        var instance = (0, _utils.createClassComponentInstance)(vNode, type, props, context, _isSVG);
        var input = instance._lastInput;
        instance._vComponent = vNode;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        (0, _mounting.mountClassComponentCallbacks)(vNode, ref, instance, lifecycle);
        _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.set(instance, dom);
        vNode.children = instance;
    } else {
        var _input = (0, _utils.createFunctionalComponentInput)(vNode, type, props, context);
        hydrate(_input, dom, lifecycle, context, isSVG);
        vNode.children = _input;
        vNode.dom = _input.dom;
        (0, _mounting.mountFunctionalComponentCallbacks)(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var children = vNode.children;
    var props = vNode.props;
    var events = vNode.events;
    var flags = vNode.flags;
    var ref = vNode.ref;
    if (isSVG || flags & 128 /* SvgElement */) {
        isSVG = true;
    }
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== tag) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.warning)('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
        }
        var newDom = (0, _mounting.mountElement)(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        (0, _utils.replaceChild)(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    var hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = (0, _processElement2.default)(flags, vNode, dom, false);
    }
    if (props) {
        for (var prop in props) {
            (0, _patching.patchProp)(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (events) {
        for (var name in events) {
            (0, _patching.patchEvent)(name, null, events[name], dom);
        }
    }
    if (ref) {
        (0, _mounting.mountRef)(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if ((0, _infernoShared.isArray)(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!(0, _infernoShared.isNull)(child) && (0, _infernoShared.isObject)(child)) {
                if (dom) {
                    dom = hydrate(child, dom, lifecycle, context, isSVG);
                    dom = dom.nextSibling;
                } else {
                    (0, _mounting.mount)(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    } else if ((0, _infernoShared.isStringOrNumber)(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    } else if ((0, _infernoShared.isObject)(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = (0, _mounting.mountText)(vNode, null);
        vNode.dom = newDom;
        (0, _utils.replaceChild)(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
        } else if (flags & 3970 /* Element */) {
            return hydrateElement(vNode, dom, lifecycle, context, isSVG);
        } else if (flags & 1 /* Text */) {
            return hydrateText(vNode, dom);
        } else if (flags & 4096 /* Void */) {
            return hydrateVoid(vNode, dom);
        } else {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('hydrate() expects a valid VNode, instead it received an object with the type "' + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + '".');
        }
        (0, _infernoShared.throwError)();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    var dom = parentDom && parentDom.firstChild;
    if (dom) {
        hydrate(input, dom, lifecycle, _utils.EMPTY_OBJ, false);
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while (dom = dom.nextSibling) {
            parentDom.removeChild(dom);
        }
        return true;
    }
    return false;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processInput = processInput;
exports.applyValue = applyValue;

var _infernoShared = __webpack_require__(0);

var _processElement = __webpack_require__(9);

var _utils = __webpack_require__(2);

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
function isControlled(props) {
    var usesChecked = isCheckedType(props.type);
    return usesChecked ? !(0, _infernoShared.isNullOrUndef)(props.checked) : !(0, _infernoShared.isNullOrUndef)(props.value);
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onInput) {
        var event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function wrappedOnChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onCheckboxChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onClick) {
        var event = events.onClick;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.onclick) {
        events.onclick(e);
    }
    // the user may have updated the vNode from the above onClick events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function handleAssociatedRadioInputs(name) {
    var inputs = document.querySelectorAll('input[type="radio"][name="' + name + '"]');
    [].forEach.call(inputs, function (dom) {
        var inputWrapper = _processElement.wrappers.get(dom);
        if (inputWrapper) {
            var props = inputWrapper.vNode.props;
            if (props) {
                dom.checked = inputWrapper.vNode.props.checked;
            }
        }
    });
}
function processInput(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    applyValue(vNode, dom);
    if (isControlled(props)) {
        var inputWrapper = _processElement.wrappers.get(dom);
        if (!inputWrapper) {
            inputWrapper = {
                vNode: vNode
            };
            if (isCheckedType(props.type)) {
                dom.onclick = onCheckboxChange.bind(inputWrapper);
                dom.onclick.wrapped = true;
            } else {
                dom.oninput = onTextInputChange.bind(inputWrapper);
                dom.oninput.wrapped = true;
            }
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(inputWrapper);
                dom.onchange.wrapped = true;
            }
            _processElement.wrappers.set(dom, inputWrapper);
        }
        inputWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    var type = props.type;
    var value = props.value;
    var checked = props.checked;
    var multiple = props.multiple;
    var defaultValue = props.defaultValue;
    var hasValue = !(0, _infernoShared.isNullOrUndef)(value);
    if (type && type !== dom.type) {
        dom.type = type;
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!(0, _infernoShared.isNullOrUndef)(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        dom.checked = checked;
        if (type === 'radio' && props.name) {
            handleAssociatedRadioInputs(props.name);
        }
    } else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        } else if (!(0, _infernoShared.isNullOrUndef)(checked)) {
            dom.checked = checked;
        }
    }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processSelect = processSelect;
exports.applyValue = applyValue;

var _infernoShared = __webpack_require__(0);

var _VNodes = __webpack_require__(6);

var _processElement = __webpack_require__(9);

var _utils = __webpack_require__(2);

function isControlled(props) {
    return !(0, _infernoShared.isNullOrUndef)(props.value);
}
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        if ((0, _infernoShared.isArray)(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        } else if ((0, _VNodes.isVNode)(children)) {
            updateChildOption(children, value);
        }
    } else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((0, _infernoShared.isArray)(value) && value.indexOf(props.value) !== -1 || props.value === value) {
        dom.selected = true;
    } else {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onChange) {
        var event = events.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.onchange) {
        events.onchange(e);
    }
    // the user may have updated the vNode from the above onChange events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function processSelect(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    applyValue(vNode, dom);
    if (isControlled(props)) {
        var selectWrapper = _processElement.wrappers.get(dom);
        if (!selectWrapper) {
            selectWrapper = {
                vNode: vNode
            };
            dom.onchange = onSelectChange.bind(selectWrapper);
            dom.onchange.wrapped = true;
            _processElement.wrappers.set(dom, selectWrapper);
        }
        selectWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    if (props.multiple !== dom.multiple) {
        dom.multiple = props.multiple;
    }
    var children = vNode.children;
    if (!(0, _infernoShared.isInvalid)(children)) {
        var value = props.value;
        if ((0, _infernoShared.isArray)(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        } else if ((0, _VNodes.isVNode)(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processTextarea = processTextarea;
exports.applyValue = applyValue;

var _infernoShared = __webpack_require__(0);

var _processElement = __webpack_require__(9);

var _utils = __webpack_require__(2);

function isControlled(props) {
    return !(0, _infernoShared.isNullOrUndef)(props.value);
}
function wrappedOnChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onInput) {
        var event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom, false);
}
function processTextarea(vNode, dom, mounting) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    applyValue(vNode, dom, mounting);
    var textareaWrapper = _processElement.wrappers.get(dom);
    if (isControlled(props)) {
        if (!textareaWrapper) {
            textareaWrapper = {
                vNode: vNode
            };
            dom.oninput = onTextareaInputChange.bind(textareaWrapper);
            dom.oninput.wrapped = true;
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(textareaWrapper);
                dom.onchange.wrapped = true;
            }
            _processElement.wrappers.set(dom, textareaWrapper);
        }
        textareaWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom, mounting) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    var value = props.value;
    var domValue = dom.value;
    if ((0, _infernoShared.isNullOrUndef)(value)) {
        if (mounting) {
            var defaultValue = props.defaultValue;
            if (!(0, _infernoShared.isNullOrUndef)(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            } else if (domValue !== '') {
                dom.value = '';
            }
        }
    } else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.value = value;
        }
    }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _Utils = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

var createVNode = _inferno2.default.createVNode;

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = {
      "currentTime": undefined,
      "initialized": false
    };
    return _this;
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.updateClock();
        _this2.setState({
          "initialized": true
        });
      }, 1000);
    }
  }, {
    key: 'updateClock',
    value: function updateClock() {
      var _this3 = this;

      var now = new Date();
      var hours = (0, _Utils.padZeroes)(now.getHours());
      var minutes = (0, _Utils.padZeroes)(now.getMinutes());
      var formattedTime = hours + ':' + minutes;

      this.setState({
        "currentTime": formattedTime
      });

      setTimeout(function () {
        _this3.updateClock();
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = ['right', 'clock'];
      var currentTime = this.state.currentTime;

      if (this.state.initialized === true) {
        classes.push('loaded');
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, currentTime);
    }
  }]);

  return Clock;
}(_infernoComponent2.default);

exports.default = Clock;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // PasswordField -> Required by Components/UserPanelForm
// --------------------------------------
// Simple password input field.

var PasswordField = function PasswordField(props) {
  var classes = ['user-password'];

  if (props.passwordFailed === true) {
    classes.push('error');
  }

  return createVNode(512, 'input', {
    'type': 'password',
    'placeholder': '*******************',
    'className': classes.join(' '),
    'value': props.password
  }, null, {
    'onInput': props.handlePasswordInput
  });
};

exports.default = PasswordField;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _SessionRow = __webpack_require__(33);

var _SessionRow2 = _interopRequireDefault(_SessionRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SessionDropdown -> Required by Components/UserPanelForm
// --------------------------------------
// Displays session rows as a dropdown to handle
// session switching.

var createVNode = _inferno2.default.createVNode;

var SessionDropdown = function (_Component) {
  _inherits(SessionDropdown, _Component);

  function SessionDropdown(props) {
    _classCallCheck(this, SessionDropdown);

    var _this = _possibleConstructorReturn(this, (SessionDropdown.__proto__ || Object.getPrototypeOf(SessionDropdown)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SessionDropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Sort by active, then alphabetical.
      // Doing this requires using sort in reverse.
      var rows = window.lightdm.sessions.sort(function (a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase();
      }).sort(function (a, b) {
        return b.key.toLowerCase() === _this2.props.activeSession.key.toLowerCase() ? 1 : -1;
      }).map(function (session) {
        return createVNode(16, _SessionRow2.default, {
          'activeSession': _this2.props.activeSession,
          'session': session,
          'handleDropdownClick': _this2.props.handleDropdownClick,
          'handleDropdownLeave': _this2.props.handleDropdownLeave,
          'setActiveSession': _this2.props.setActiveSession
        });
      });

      var classes = ['dropdown', 'user-session'];

      if (this.props.dropdownActive === true) {
        classes.push('active');
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, rows, {
        'onMouseLeave': this.props.handleDropdownLeave
      });
    }
  }]);

  return SessionDropdown;
}(_infernoComponent2.default);

exports.default = SessionDropdown;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // SessionRow -> Required by Components/SessionDropdown
// --------------------------------------
// Just a row.

var SessionRow = function SessionRow(props) {
  var classes = ["dropdown-item"];
  var eventHandler = props.setActiveSession.bind(undefined, props.session.key);

  if (props.session.key === props.activeSession.key) {
    eventHandler = props.handleDropdownClick;
    classes.push("active");
  }

  return createVNode(2, "div", {
    "className": classes.join(' ')
  }, props.session.name, {
    "onClick": eventHandler
  }, props.session.key);
};

exports.default = SessionRow;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPanelForm = undefined;

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _SessionDropdown = __webpack_require__(32);

var _SessionDropdown2 = _interopRequireDefault(_SessionDropdown);

var _PasswordField = __webpack_require__(31);

var _PasswordField2 = _interopRequireDefault(_PasswordField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

var UserPanelForm = exports.UserPanelForm = function UserPanelForm(props) {
  return createVNode(2, 'form', {
    'className': 'login-form'
  }, [createVNode(2, 'div', {
    'className': 'user-username'
  }, props.activeUser.display_name), createVNode(2, 'div', {
    'className': 'user-password-container'
  }, createVNode(16, _PasswordField2.default, {
    'password': props.password,
    'passwordFailed': props.passwordFailed,
    'handlePasswordInput': props.handlePasswordInput
  })), createVNode(2, 'div', {
    'className': 'submit-row-container'
  }, createVNode(2, 'div', {
    'className': 'submit-row'
  }, [createVNode(2, 'div', {
    'className': 'left'
  }, createVNode(16, _SessionDropdown2.default, {
    'activeSession': props.activeSession,
    'dropdownActive': props.dropdownActive,
    'handleDropdownClick': props.handleDropdownClick,
    'handleDropdownLeave': props.handleDropdownLeave,
    'setActiveSession': props.setActiveSession
  })), createVNode(2, 'div', {
    'className': 'right'
  }, createVNode(512, 'input', {
    'type': 'submit',
    'value': 'GO',
    'className': 'submit-button'
  }))]))], {
    'onSubmit': props.handleLoginSubmit
  });
};

exports.default = UserPanelForm;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // UserSwitcher -> Required by Components/UserPanel
// --------------------------------------
// Handles (poorly) the task of switching between
// multiple users on the same system.

var FADE_DURATION = 200;

var createVNode = _inferno2.default.createVNode;

var UserSwitcher = function (_Component) {
  _inherits(UserSwitcher, _Component);

  function UserSwitcher(props) {
    _classCallCheck(this, UserSwitcher);

    var _this = _possibleConstructorReturn(this, (UserSwitcher.__proto__ || Object.getPrototypeOf(UserSwitcher)).call(this, props));

    _this.state = {
      "fadeOut": false,
      "selectedUser": _this.props.activeUser,
      "selectedUserIndex": window.lightdm.users.indexOf(_this.props.activeUser)
    };
    return _this;
  }

  _createClass(UserSwitcher, [{
    key: 'handleBackButton',
    value: function handleBackButton(event) {
      var _this2 = this;

      this.props.setActiveUser(this.state.selectedUser);

      this.setState({
        "fadeOut": true
      });

      setTimeout(function () {
        _this2.setState({
          "fadeOut": false
        });
      }, FADE_DURATION);
    }
  }, {
    key: 'handleUserClick',
    value: function handleUserClick(index) {
      this.setState({
        "selectedUser": window.lightdm.users[index],
        "selectedUserIndex": index
      });
    }
  }, {
    key: 'generateUserList',
    value: function generateUserList() {
      var _this3 = this;

      var activeIndex = this.state.selectedUserIndex;

      var avatars = window.lightdm.users.map(function (user, index) {
        var classes = ['avatar-container'];

        if (index === activeIndex) {
          classes.push('active');
        }

        if (index === activeIndex - 1) {
          classes.push('previous');
        }

        if (index === activeIndex + 1) {
          classes.push('next');
        }

        return createVNode(2, 'li', {
          'className': classes.join(' ')
        }, [createVNode(2, 'div', {
          'className': 'avatar-background'
        }, createVNode(2, 'div', {
          'className': 'avatar-mask'
        }, createVNode(2, 'img', {
          'className': 'user-avatar',
          'src': user.image
        }))), createVNode(2, 'div', {
          'className': 'avatar-name'
        }, [createVNode(2, 'div', {
          'className': 'username'
        }, user.display_name), createVNode(2, 'div', {
          'className': 'real-name'
        }, user.real_name)])], {
          'onClick': _this3.handleUserClick.bind(_this3, index)
        });
      });

      // Very hacky. Add an extra copy of the last element to the beginning of the list
      // if the first element in the list is currently selected.
      if (activeIndex === 0) {
        var user = window.lightdm.users[window.lightdm.users.length - 1];
        avatars.splice(0, 0, createVNode(2, 'li', {
          'className': 'avatar-container previous'
        }, [createVNode(2, 'div', {
          'className': 'avatar-background'
        }, createVNode(2, 'div', {
          'className': 'avatar-mask'
        }, createVNode(2, 'img', {
          'className': 'user-avatar',
          'src': user.image
        }))), createVNode(2, 'div', {
          'className': 'avatar-name'
        }, [createVNode(2, 'div', {
          'className': 'username'
        }, user.display_name), createVNode(2, 'div', {
          'className': 'real-name'
        }, user.real_name)])], {
          'onClick': this.handleUserClick.bind(this, window.lightdm.users.length - 1)
        }));
      }

      // Very hacky. Add an extra copy of the first element to the end of the list
      // if the last element in the list is currently selected.
      if (activeIndex === window.lightdm.users.length - 1) {
        var _user = window.lightdm.users[0];
        avatars.push(createVNode(2, 'li', {
          'className': 'avatar-container next'
        }, [createVNode(2, 'div', {
          'className': 'avatar-background'
        }, createVNode(2, 'div', {
          'className': 'avatar-mask'
        }, createVNode(2, 'img', {
          'className': 'user-avatar',
          'src': _user.image
        }))), createVNode(2, 'div', {
          'className': 'avatar-name'
        }, [createVNode(2, 'div', {
          'className': 'username'
        }, _user.display_name), createVNode(2, 'div', {
          'className': 'real-name'
        }, _user.real_name)])], {
          'onClick': this.handleUserClick.bind(this, 0)
        }));
      }

      return createVNode(2, 'ul', {
        'className': 'avatar-slider'
      }, avatars);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = ['login-panel-switcher'];

      var userList = this.generateUserList();
      var userCount = window.lightdm.users.length;

      if (this.props.active === true) {
        classes.push("active");
      } else if (this.state.fadeOut === true) {
        classes.push("fadeout");
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, [createVNode(2, 'div', {
        'className': 'header'
      }, ['User ', createVNode(2, 'em', null, this.state.selectedUserIndex + 1), ' of ', createVNode(2, 'em', null, userCount)]), userList, createVNode(2, 'div', {
        'className': 'bottom'
      }, createVNode(2, 'div', {
        'className': 'left'
      }, 'BACK'), {
        'onClick': this.handleBackButton.bind(this)
      })]);
    }
  }]);

  return UserSwitcher;
}(_infernoComponent2.default);

exports.default = UserSwitcher;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _WallpaperOperations = __webpack_require__(37);

var WallpaperOperations = _interopRequireWildcard(_WallpaperOperations);

var _Settings = __webpack_require__(16);

var Settings = _interopRequireWildcard(_Settings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // WallpaperSwitcher -> Required by Components/CommandPanel
// --------------------------------------
// Serves to handle wallpaper switching through DOM manipulation.

var FADEOUT_TIME = 600;

var createVNode = _inferno2.default.createVNode;

var WallpaperSwitcher = function (_Component) {
  _inherits(WallpaperSwitcher, _Component);

  function WallpaperSwitcher(props) {
    _classCallCheck(this, WallpaperSwitcher);

    var _this = _possibleConstructorReturn(this, (WallpaperSwitcher.__proto__ || Object.getPrototypeOf(WallpaperSwitcher)).call(this, props));

    var wallpaperDirectory = WallpaperOperations.getWallpaperDirectory();
    var wallpapers = WallpaperOperations.getWallpapers(wallpaperDirectory);

    _this.cyclerBackground = undefined;
    _this.cyclerForeground = undefined;
    _this.cyclerPreloader = undefined;

    _this.state = {
      "directory": wallpaperDirectory,
      "wallpapers": wallpapers,
      "selectedWallpaper": undefined,
      "savedWallpaper": undefined,
      "switcher": {
        "active": false,
        "currentlyFading": false,
        "index": 0
      }
    };
    return _this;
  }

  _createClass(WallpaperSwitcher, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Set background wallpaper
      var directory = this.state.directory;
      var image = Settings.requestSetting("wallpaper", "space-1.jpg");
      this.cyclerBackground = document.querySelectorAll('.wallpaper-background')[0];
      this.cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];
      this.cyclerPreloader = document.querySelectorAll('.wallpaper-preload')[0];

      this.cyclerForeground.style.background = 'url(\'' + directory + image + '\')';
      this.cyclerForeground.style.backgroundSize = "cover";

      this.setState({
        "savedWallpaper": image
      });
    }
  }, {
    key: 'acceptWallpaper',
    value: function acceptWallpaper() {
      var selectedWallpaper = this.state.selectedWallpaper;
      var switcher = this.state.switcher;

      // Due diligence.
      Settings.saveSetting("wallpaper", selectedWallpaper);
      window.notifications.generate("This wallpaper has been saved as your default background.", 'success');

      // Reset switcher state
      switcher.active = false;
      switcher.index = 0;

      this.setState({
        "selectedWallpaper": selectedWallpaper,
        "savedWallpaper": selectedWallpaper,
        "switcher": switcher
      });
    }
  }, {
    key: 'cycleWallpaper',
    value: function cycleWallpaper() {
      // Prevent animation transitions stacking and causing issues.
      if (this.state.switcher.currentlyFading === true) {
        return false;
      }

      var wallpapers = this.state.wallpapers;
      var switcher = this.state.switcher;

      var nextIndex = function nextIndex(index) {
        return (index + wallpapers.length + 1) % wallpapers.length;
      };

      var newIndex = nextIndex(switcher.index);
      var newWallpaper = wallpapers[newIndex];

      var preloadedIndex = nextIndex(newIndex);
      var preloadedWallpaper = wallpapers[preloadedIndex];

      this.setWallpaper(newWallpaper, preloadedWallpaper);

      switcher.index = newIndex;

      this.setState({
        "switcher": switcher
      });
    }
  }, {
    key: 'handleSwitcherActivation',
    value: function handleSwitcherActivation() {
      var switcher = this.state.switcher;
      switcher.active = true;
      this.cycleWallpaper();

      this.setState({
        "switcher": switcher
      });
    }
  }, {
    key: 'rejectWallpaper',
    value: function rejectWallpaper() {
      var savedWallpaper = this.state.savedWallpaper;
      var switcher = this.state.switcher;

      // Reset switcher state
      switcher.active = false;
      switcher.index = 0;

      this.setState({
        "switcher": switcher
      });

      this.setWallpaper(savedWallpaper);

      window.notifications.generate("Wallpaper reset to default, no changes saved.");
    }
  }, {
    key: 'setWallpaper',
    value: function setWallpaper(newWallpaper) {
      var _this2 = this;

      var preloadedWallpaper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var switcher = this.state.switcher;

      // Fadeout foreground wallpaper to new wallpaper
      var directory = this.state.directory;
      this.cyclerBackground.style.background = 'url(\'' + directory + newWallpaper + '\')';
      this.cyclerBackground.style.backgroundSize = 'cover';
      this.cyclerForeground.className += " fadeout";

      switcher.currentlyFading = true;

      if (preloadedWallpaper !== false) {
        // Preload the next image
        this.cyclerPreloader.style.background = 'url(\'' + directory + preloadedWallpaper + '\')';
      }

      setTimeout(function () {
        // Cycle new wallpaper back to the front, make it visible again.
        _this2.cyclerForeground.style.background = 'url(\'' + directory + newWallpaper + '\')';
        _this2.cyclerForeground.style.backgroundSize = 'cover';
        _this2.cyclerForeground.className = _this2.cyclerForeground.className.replace(" fadeout", "");

        var switcher = _this2.state.switcher;
        switcher.currentlyFading = false;

        _this2.setState({
          "selectedWallpaper": newWallpaper,
          "switcher": switcher
        });
      }, FADEOUT_TIME);
    }
  }, {
    key: 'generateOptions',
    value: function generateOptions() {
      var classes = ['options'];

      if (this.state.switcher.active === true) {
        classes.push("active");
      }

      return createVNode(2, 'div', {
        'className': 'options-wrapper'
      }, createVNode(2, 'div', {
        'className': classes.join(' ')
      }, [createVNode(2, 'div', {
        'className': 'button-reject'
      }, '\u2715', {
        'onClick': this.rejectWallpaper.bind(this)
      }), createVNode(2, 'div', {
        'className': 'button-accept'
      }, '\u2713', {
        'onClick': this.acceptWallpaper.bind(this)
      })]));
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.generateOptions();

      return createVNode(2, 'div', {
        'className': 'distro-wrapper'
      }, [createVNode(2, 'div', {
        'className': 'distro-logo'
      }, null, {
        'onClick': this.handleSwitcherActivation.bind(this)
      }), options]);
    }
  }]);

  return WallpaperSwitcher;
}(_infernoComponent2.default);

exports.default = WallpaperSwitcher;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWallpaperDirectory = getWallpaperDirectory;
exports.getWallpapers = getWallpapers;
// WallpaperOperations -> Required by Components/WallpaperSwitcher
// --------------------------------------
// LightDM related Wallpaper config / fetching.

function getWallpaperDirectory() {
  // Return the test folder when debugging.
  if (window.debug === true) {
    return "src/test/wallpapers/";
  }

  var wallpapersDirectory = window.config.get_str("branding", "background_images");

  // Do NOT allow the default wallpaper directory to set, as this will prevent the default provided backgrounds from
  // being used 100% of the time in a stock install.
  if (wallpapersDirectory == "/usr/share/backgrounds" || wallpapersDirectory == "/usr/share/backgrounds/") {
    wallpapersDirectory = "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/wallpapers/";
  }

  return wallpapersDirectory;
}

function getWallpapers(directory) {
  // If we're in test mode, we stick to a static rotation of three default wallpapers.
  // In production, it is possible that a user will change what wallpapers are available.
  if (window.debug === true) {
    return ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
  }

  var wallpapers = void 0;

  wallpapers = window.greeterutil.dirlist(directory);
  wallpapers = wallpapers.map(function (e, i, a) {
    return e.split("/").pop();
  });

  return wallpapers;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var padZeroes = exports.padZeroes = function padZeroes(i) {
  return i < 10 ? "0" + i : i;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _redux = __webpack_require__(46);

var _Notifications = __webpack_require__(22);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _CommandPanel = __webpack_require__(18);

var _CommandPanel2 = _interopRequireDefault(_CommandPanel);

var _DateDisplay = __webpack_require__(19);

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _UserPanel = __webpack_require__(20);

var _UserPanel2 = _interopRequireDefault(_UserPanel);

var _PrimaryReducer = __webpack_require__(21);

var _SettingsReducer = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode;
function Main() {
  var initialState = (0, _PrimaryReducer.getDefaultState)();
  initialState = (0, _SettingsReducer.addAdditionalSettings)(initialState);

  var store = (0, _redux.createStore)(_PrimaryReducer.PrimaryReducer, initialState);

  _inferno2.default.render(createVNode(16, _CommandPanel2.default, {
    'store': store
  }), document.getElementById("command-panel"));
  _inferno2.default.render(createVNode(16, _UserPanel2.default, {
    'store': store
  }), document.getElementById("user-panel"));
  _inferno2.default.render(createVNode(16, _DateDisplay2.default, {
    'store': store
  }), document.getElementById("date-display"));
}

window.onload = function (e) {
  // Add notifications to the global scope for error handling
  window.notifications = new _Notifications2.default();

  Main();
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(53);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(47);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(49);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(54);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(41);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(58);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(43);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(57);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(56);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(55);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(42);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(44);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(40);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(50);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(51);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(52);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(40);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(48);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(42);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(43);

var _isPlainObject = __webpack_require__(41);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(44);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(59);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(60);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45), __webpack_require__(61)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZThhZjQwNGI4YzNlMGE4NjJmMGMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL1ZOb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcGF0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlbmRlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vbW91bnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3VubW91bnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9SZWR1Y2Vycy9TZXR0aW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlY3ljbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL25vcm1hbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Mb2dpYy9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0NvbW1hbmRQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0RhdGVEaXNwbGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1JlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVXRpbHMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8tY29tcG9uZW50L34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vZXZlbnRzL2RlbGVnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2V2ZW50cy9saW5rRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9UZXh0YXJlYVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0Nsb2NrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvUGFzc3dvcmRGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Ecm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Sb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvQ29tcG9uZW50cy9Vc2VyUGFuZWxGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvV2FsbHBhcGVyU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvTG9naWMvV2FsbHBhcGVyT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbInRvQXJyYXkiLCJpc1N0YXRlZnVsQ29tcG9uZW50IiwiaXNTdHJpbmdPck51bWJlciIsImlzTnVsbE9yVW5kZWYiLCJpc0ludmFsaWQiLCJpc0Z1bmN0aW9uIiwiaXNBdHRyQW5FdmVudCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc051bGwiLCJpc1RydWUiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwidGhyb3dFcnJvciIsIndhcm5pbmciLCJMaWZlY3ljbGUiLCJjb3B5UHJvcHNUbyIsIk5PX09QIiwiRVJST1JfTVNHIiwiaXNCcm93c2VyIiwid2luZG93IiwiZG9jdW1lbnQiLCJjaGlsZHJlbiIsImlzQXJyYXkiLCJBcnJheSIsIm8iLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJvYmoiLCJ0eXBlIiwiYXR0ciIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJjYWxsYmFjayIsInB1c2giLCJ0cmlnZ2VyIiwiaSIsImxlbiIsImNvcHlGcm9tIiwiY29weVRvIiwicHJvcCIsImlzVW5pdGxlc3NOdW1iZXIiLCJub3JtYWxpemUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0ZXN0RnVuYyIsInRlc3RGbiIsIm5hbWUiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJ2ZXJzaW9uIiwibGlua0V2ZW50IiwiY3JlYXRlVk5vZGUiLCJjbG9uZVZOb2RlIiwiRU1QVFlfT0JKIiwiZmluZERPTU5vZGUiLCJjcmVhdGVSZW5kZXJlciIsIm9wdGlvbnMiLCJjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlIiwicmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQiLCJyZXBsYWNlVk5vZGUiLCJjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQiLCJzZXRUZXh0Q29udGVudCIsInVwZGF0ZVRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRPckFwcGVuZCIsImRvY3VtZW50Q3JlYXRlRWxlbWVudCIsInJlcGxhY2VXaXRoTmV3Tm9kZSIsInJlcGxhY2VDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJyZW1vdmVDaGlsZHJlbiIsImlzS2V5ZWQiLCJPYmplY3QiLCJmcmVlemUiLCJ2Tm9kZSIsIkNvbXBvbmVudCIsInByb3BzIiwiY29udGV4dCIsImlzU1ZHIiwiaW5zdGFuY2UiLCJfcGF0Y2giLCJmaW5kRE9NTm9kZUVuYWJsZWQiLCJfY29tcG9uZW50VG9ET01Ob2RlTWFwIiwiX3VubW91bnRlZCIsIl9wZW5kaW5nU2V0U3RhdGUiLCJfaXNTVkciLCJjb21wb25lbnRXaWxsTW91bnQiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJfY2hpbGRDb250ZXh0IiwiYXNzaWduIiwiYmVmb3JlUmVuZGVyIiwiaW5wdXQiLCJzdGF0ZSIsImFmdGVyUmVuZGVyIiwiZG9tIiwiZmxhZ3MiLCJwYXJlbnRWTm9kZSIsIl9sYXN0SW5wdXQiLCJsYXN0SW5wdXQiLCJuZXh0SW5wdXQiLCJwYXJlbnREb20iLCJsaWZlY3ljbGUiLCJpc1JlY3ljbGluZyIsInNoYWxsb3dVbm1vdW50IiwiY29tcG9uZW50IiwidGV4dCIsInRleHRDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwibmV3Tm9kZSIsIm5leHROb2RlIiwiaW5zZXJ0QmVmb3JlIiwidGFnIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsImxhc3ROb2RlIiwibmV4dERvbSIsImxhc3REb20iLCJwYXJlbnROb2RlIiwicmVjeWNsaW5nRW5hYmxlZCIsImNoaWxkIiwibGFzdENoaWxkcmVuIiwibmV4dENoaWxkcmVuIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiYXJndW1lbnRzIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbnMiLCJub29wIiwib24iLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJyb290cyIsImFmdGVyTW91bnQiLCJhZnRlclVwZGF0ZSIsImJlZm9yZVVubW91bnQiLCJub09wIiwiY29tcG9uZW50Q2FsbGJhY2tRdWV1ZSIsIk1hcCIsInVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyIsImNyZWF0ZVZvaWRWTm9kZSIsImNyZWF0ZVRleHRWTm9kZSIsImFkZFRvUXVldWUiLCJmb3JjZSIsImdldCIsInNldCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRlbGV0ZSIsImFwcGx5U3RhdGUiLCJxdWV1ZVN0YXRlQ2hhbmdlcyIsIm5ld1N0YXRlIiwic3luYyIsInN0YXRlS2V5IiwiX3BlbmRpbmdTdGF0ZSIsIl9ibG9ja1JlbmRlciIsIl9kZWZlclNldFN0YXRlIiwicGVuZGluZ1N0YXRlIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwiX3VwZGF0ZUNvbXBvbmVudCIsImRpZFVwZGF0ZSIsIl92Tm9kZSIsInN1YkxpZmVjeWNsZSIsIl9saWZlY3ljbGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRUb0RPTU5vZGVNYXAiLCJyZWZzIiwiX2lnbm9yZVNldFN0YXRlIiwiX2Jsb2NrU2V0U3RhdGUiLCJfc3luY1NldFN0YXRlIiwibmV4dFByb3BzIiwibmV4dENvbnRleHQiLCJwcmV2UHJvcHMiLCJwcmV2Q29udGV4dCIsImZyb21TZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzaG91bGRVcGRhdGUiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiaXNWTm9kZSIsImV2ZW50cyIsInJlZiIsIm5vTm9ybWFsaXNlIiwidk5vZGVUb0Nsb25lIiwiX2NoaWxkcmVuIiwibmV3Vk5vZGUiLCJ0bXBBcnJheSIsIm5ld1Byb3BzIiwibmV3Q2hpbGRyZW4iLCJwYXRjaCIsInBhdGNoRWxlbWVudCIsInBhdGNoQ29tcG9uZW50IiwicGF0Y2hUZXh0IiwicGF0Y2hWb2lkIiwicGF0Y2hOb25LZXllZENoaWxkcmVuIiwicGF0Y2hLZXllZENoaWxkcmVuIiwicGF0Y2hQcm9wIiwicGF0Y2hFdmVudHMiLCJwYXRjaEV2ZW50IiwicGF0Y2hTdHlsZSIsImxhc3RWTm9kZSIsIm5leHRWTm9kZSIsImxhc3RGbGFncyIsIm5leHRGbGFncyIsInVubW91bnRDaGlsZHJlbiIsIm5leHRUYWciLCJsYXN0VGFnIiwibGFzdFByb3BzIiwibGFzdFJlZiIsIm5leHRSZWYiLCJsYXN0RXZlbnRzIiwibmV4dEV2ZW50cyIsInBhdGNoQ2hpbGRyZW4iLCJoYXNDb250cm9sbGVkVmFsdWUiLCJsYXN0UHJvcHNPckVtcHR5IiwibmV4dFByb3BzT3JFbXB0eSIsIm5leHRWYWx1ZSIsImxhc3RWYWx1ZSIsInJlbW92ZVByb3AiLCJwYXRjaEFycmF5IiwicGF0Y2hLZXllZCIsImlzQ2xhc3MiLCJsYXN0VHlwZSIsIm5leHRUeXBlIiwibGFzdEtleSIsIm5leHRLZXkiLCJkZWZhdWx0UHJvcHMiLCJsYXN0U3RhdGUiLCJuZXh0SG9va3MiLCJuZXh0SG9va3NEZWZpbmVkIiwib25Db21wb25lbnRTaG91bGRVcGRhdGUiLCJvbkNvbXBvbmVudFdpbGxVcGRhdGUiLCJvbkNvbXBvbmVudERpZFVwZGF0ZSIsIm5leHRUZXh0IiwibGFzdENoaWxkcmVuTGVuZ3RoIiwibmV4dENoaWxkcmVuTGVuZ3RoIiwiY29tbW9uTGVuZ3RoIiwibmV4dENoaWxkIiwiYSIsImIiLCJhTGVuZ3RoIiwiYkxlbmd0aCIsImFFbmQiLCJiRW5kIiwiYVN0YXJ0IiwiYlN0YXJ0IiwiaiIsImFOb2RlIiwiYk5vZGUiLCJuZXh0UG9zIiwibm9kZSIsImFTdGFydE5vZGUiLCJiU3RhcnROb2RlIiwiYUVuZE5vZGUiLCJiRW5kTm9kZSIsIm91dGVyIiwic291cmNlcyIsIm1vdmVkIiwicG9zIiwicGF0Y2hlZCIsImtleUluZGV4Iiwic2VxIiwibGlzX2FsZ29yaXRobSIsImFyciIsInAiLCJzbGljZSIsInJlc3VsdCIsInUiLCJ2IiwiYyIsImFyckkiLCJ2YWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImxhc3RIdG1sIiwiX19odG1sIiwibmV4dEh0bWwiLCJpbm5lckhUTUwiLCJucyIsInNldEF0dHJpYnV0ZU5TIiwibmFtZUxvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwiZG9tRXZlbnQiLCJ3cmFwcGVkIiwiZXZlbnQiLCJfZGF0YSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwibGFzdEF0dHJWYWx1ZSIsIm5leHRBdHRyVmFsdWUiLCJzdHlsZSIsImNzc1RleHQiLCJub2RlVHlwZSIsImdldFJvb3QiLCJyb290Iiwic2V0Um9vdCIsInJlbW92ZVJvb3QiLCJzcGxpY2UiLCJib2R5IiwiZG9jdW1lbnRCb2R5Iiwicm9vdElucHV0IiwicmVuZGVyZXIiLCJwcm9jZXNzRWxlbWVudCIsIndyYXBwZXJzIiwibW91bnRpbmciLCJjb25zdHJ1Y3REZWZhdWx0cyIsInN0cmluZyIsIm9iamVjdCIsInNwbGl0IiwieGxpbmtOUyIsInhtbE5TIiwic3ZnTlMiLCJzdHJpY3RQcm9wcyIsImJvb2xlYW5Qcm9wcyIsIm5hbWVzcGFjZXMiLCJza2lwUHJvcHMiLCJkZWxlZ2F0ZWRQcm9wcyIsIm1vdW50IiwibW91bnRUZXh0IiwibW91bnRWb2lkIiwibW91bnRFbGVtZW50IiwibW91bnRBcnJheUNoaWxkcmVuIiwibW91bnRDb21wb25lbnQiLCJtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzIiwibW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzIiwibW91bnRSZWYiLCJKU09OIiwic3RyaW5naWZ5IiwiY0RNIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkNvbXBvbmVudFdpbGxNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJ1bm1vdW50IiwidW5tb3VudENvbXBvbmVudCIsInVubW91bnRFbGVtZW50IiwiY2FuUmVjeWNsZSIsInVubW91bnRWb2lkT3JUZXh0IiwiYWxyZWFkeVVubW91bnRlZCIsIldlYWtNYXAiLCJoYXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9uQ29tcG9uZW50V2lsbFVubW91bnQiLCJ1bm1vdW50UmVmIiwiYWRkQWRkaXRpb25hbFNldHRpbmdzIiwiU2V0dGluZ3MiLCJkZWZhdWx0cyIsInNldHRpbmdzIiwia2V5cyIsInJlcXVlc3RTZXR0aW5nIiwicmVjeWNsZUVsZW1lbnQiLCJwb29sRWxlbWVudCIsInJlY3ljbGVDb21wb25lbnQiLCJwb29sQ29tcG9uZW50IiwiY29tcG9uZW50UG9vbHMiLCJlbGVtZW50UG9vbHMiLCJwb29scyIsInBvb2wiLCJub25LZXllZCIsImtleWVkIiwicmVjeWNsZWRWTm9kZSIsInBvcCIsImZhaWxlZCIsImhvb2tzIiwibm9uUmVjeWNsZUhvb2tzIiwibm9ybWFsaXplVk5vZGVzIiwiYXBwbHlLZXkiLCJhcHBseUtleUlmTWlzc2luZyIsImFwcGx5S2V5UHJlZml4IiwiX25vcm1hbGl6ZVZOb2RlcyIsIm5vZGVzIiwiaW5kZXgiLCJjdXJyZW50S2V5IiwibiIsIm5ld05vZGVzIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZUVsZW1lbnQiLCJoYXNQcm9wcyIsInZlcmlmeUtleXMiLCJ2Tm9kZXMiLCJrZXlWYWx1ZXMiLCJtYXAiLCJ2bm9kZSIsInNvbWUiLCJpdGVtIiwiaWR4IiwiaGFzRHVwbGljYXRlIiwic2F2ZVNldHRpbmciLCJMT0NBTFNUT1JBR0VfRU5BQkxFRCIsIlN0b3JhZ2UiLCJub3RpZmljYXRpb25zIiwiZ2VuZXJhdGUiLCJzZXR0aW5nIiwiZGVmYXVsdFNldHRpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImhhbmRsZUNvbW1hbmQiLCJmaW5kSW5pdGlhbFVzZXIiLCJmaW5kSW5pdGlhbFNlc3Npb24iLCJmaW5kU2Vzc2lvbiIsImV4ZWN1dGVDb21tYW5kIiwiYm91bmRGdW5jdGlvbiIsImNvbW1hbmQiLCJsaWdodGRtIiwiY2FuX3NodXRkb3duIiwic2h1dGRvd24iLCJjYW5faGliZXJuYXRlIiwiaGliZXJuYXRlIiwiY2FuX3Jlc3RhcnQiLCJyZXN0YXJ0IiwiY2FuX3N1c3BlbmQiLCJzdXNwZW5kIiwibG9ja19oaW50IiwidXNlcnMiLCJmaWx0ZXIiLCJ1c2VyIiwibG9nZ2VkX2luIiwic2VsZWN0X3VzZXJfaGludCIsInVzZXJuYW1lIiwidXNlclNlc3Npb24iLCJzZXNzaW9uIiwiZGVmYXVsdF9zZXNzaW9uIiwic2Vzc2lvbnMiLCJzZXNzaW9uTmFtZSIsIlN5c3RlbU9wZXJhdGlvbnMiLCJDb21tYW5kUGFuZWwiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0IiwiY29tbWFuZHMiLCJlbmFibGVkQ29tbWFuZHMiLCJleHBhbmRlZCIsInNldFN0YXRlIiwicm93cyIsImNsYXNzZXMiLCJqb2luIiwiYmluZCIsImhvc3RuYW1lIiwiZ2VuZXJhdGVDb21tYW5kcyIsIkRhdGVEaXNwbGF5Iiwic2V0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXlOYW1lIiwiZm9ybWF0dGVkRGF5VmFsdWUiLCJtb250aE5hbWUiLCJkYXlOYW1lcyIsIm1vbnRoTmFtZXMiLCJub3ciLCJEYXRlIiwiZGF5VmFsdWUiLCJnZXREYXRlIiwiZ2V0VVRDRGF5IiwibW9udGhWYWx1ZSIsImdldE1vbnRoIiwiZm9ybWF0dGVkRGF0ZVN0cmluZyIsImRhdGVDbGFzc2VzIiwiZ2VuZXJhdGVEYXRlU3RyaW5nIiwiaW5pdGlhbGl6ZWQiLCJGQURFX0lOX0RVUkFUSU9OIiwiRVJST1JfU0hBS0VfRFVSQVRJT04iLCJMb2dpblBhbmVsIiwic3RvcmUiLCJzdG9yZVN0YXRlIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsIl90b2dnbGVVcGRhdGUiLCJzaG93X3Byb21wdCIsInJlc3BvbmQiLCJwYXNzd29yZCIsInNob3dfbWVzc2FnZSIsImF1dGhlbnRpY2F0aW9uX2NvbXBsZXRlIiwiaXNfYXV0aGVudGljYXRlZCIsInN0YXJ0X3Nlc3Npb25fc3luYyIsInJlamVjdFBhc3N3b3JkIiwiYXV0b2xvZ2luX3RpbWVyX2V4cGlyZWQiLCJkZWJ1ZyIsImRpc3BsYXlfbmFtZSIsImF1dGhlbnRpY2F0ZSIsIm90aGVyVXNlciIsInNldEFjdGl2ZVVzZXIiLCJ0YXJnZXQiLCJkaXNwYXRjaCIsImlzQnlwYXNzIiwiaGFuZGxlU3dpdGNoZXJDbGljayIsImxvZ2luUGFuZWxDbGFzc2VzIiwiZmFkZUluIiwic3dpdGNoZXJBY3RpdmUiLCJzd2l0Y2hVc2VyQnV0dG9uIiwiZ2VuZXJhdGVTd2l0Y2hVc2VyQnV0dG9uIiwiaW1hZ2UiLCJkcm9wZG93bkFjdGl2ZSIsInBhc3N3b3JkRmFpbGVkIiwiaGFuZGxlTG9naW5TdWJtaXQiLCJoYW5kbGVEcm9wZG93bkNsaWNrIiwiaGFuZGxlRHJvcGRvd25MZWF2ZSIsImhhbmRsZVBhc3N3b3JkSW5wdXQiLCJzZXRBY3RpdmVTZXNzaW9uIiwiZ2V0RGVmYXVsdFN0YXRlIiwibGFuZ3VhZ2UiLCJQcmltYXJ5UmVkdWNlciIsImFjdGlvbiIsInN0YXJ0c1dpdGgiLCJTdHJpbmciLCJOb3RpZmljYXRpb25zIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsIm5vdGlmaWNhdGlvbiIsImlubmVyVGV4dCIsImhhbmRsZUV2ZW50IiwiaXNpT1MiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInRlc3QiLCJkZWxlZ2F0ZWRFdmVudHMiLCJsYXN0RXZlbnQiLCJuZXh0RXZlbnQiLCJkZWxlZ2F0ZWRSb290cyIsIml0ZW1zIiwiY291bnQiLCJkb2NFdmVudCIsImF0dGFjaEV2ZW50VG9Eb2N1bWVudCIsInRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vcm1hbGl6ZUV2ZW50TmFtZSIsImRpc3BhdGNoRXZlbnQiLCJldmVudERhdGEiLCJldmVudHNUb1RyaWdnZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJzdWJzdHIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbXB0eUZuIiwib25jbGljayIsIm5vcm1hbGl6ZUNoaWxkTm9kZXMiLCJoeWRyYXRlUm9vdCIsInBsYWNlaG9sZGVyIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJoeWRyYXRlQ29tcG9uZW50IiwibmFtZXNwYWNlVVJJIiwiX3ZDb21wb25lbnQiLCJoeWRyYXRlIiwiaHlkcmF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwibmV3RG9tIiwiaHlkcmF0ZUNoaWxkcmVuIiwiaHlkcmF0ZVRleHQiLCJoeWRyYXRlVm9pZCIsInByb2Nlc3NJbnB1dCIsImFwcGx5VmFsdWUiLCJpc0NoZWNrZWRUeXBlIiwiaXNDb250cm9sbGVkIiwidXNlc0NoZWNrZWQiLCJjaGVja2VkIiwib25UZXh0SW5wdXRDaGFuZ2UiLCJvbklucHV0Iiwib25pbnB1dCIsIndyYXBwZWRPbkNoYW5nZSIsIm9uQ2hhbmdlIiwib25DaGVja2JveENoYW5nZSIsIm9uQ2xpY2siLCJoYW5kbGVBc3NvY2lhdGVkUmFkaW9JbnB1dHMiLCJpbnB1dHMiLCJmb3JFYWNoIiwiaW5wdXRXcmFwcGVyIiwib25jaGFuZ2UiLCJtdWx0aXBsZSIsImRlZmF1bHRWYWx1ZSIsImhhc1ZhbHVlIiwicHJvY2Vzc1NlbGVjdCIsInVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAiLCJ1cGRhdGVDaGlsZE9wdGlvbiIsInNlbGVjdGVkIiwib25TZWxlY3RDaGFuZ2UiLCJzZWxlY3RXcmFwcGVyIiwicHJvY2Vzc1RleHRhcmVhIiwib25UZXh0YXJlYUlucHV0Q2hhbmdlIiwidGV4dGFyZWFXcmFwcGVyIiwiZG9tVmFsdWUiLCJDbG9jayIsInVwZGF0ZUNsb2NrIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZm9ybWF0dGVkVGltZSIsImN1cnJlbnRUaW1lIiwiUGFzc3dvcmRGaWVsZCIsIlNlc3Npb25Ecm9wZG93biIsInNvcnQiLCJ0b1VwcGVyQ2FzZSIsImFjdGl2ZVNlc3Npb24iLCJTZXNzaW9uUm93IiwiZXZlbnRIYW5kbGVyIiwiVXNlclBhbmVsRm9ybSIsImFjdGl2ZVVzZXIiLCJGQURFX0RVUkFUSU9OIiwiVXNlclN3aXRjaGVyIiwic2VsZWN0ZWRVc2VyIiwiYWN0aXZlSW5kZXgiLCJzZWxlY3RlZFVzZXJJbmRleCIsImF2YXRhcnMiLCJyZWFsX25hbWUiLCJoYW5kbGVVc2VyQ2xpY2siLCJ1c2VyTGlzdCIsImdlbmVyYXRlVXNlckxpc3QiLCJ1c2VyQ291bnQiLCJhY3RpdmUiLCJmYWRlT3V0IiwiaGFuZGxlQmFja0J1dHRvbiIsIldhbGxwYXBlck9wZXJhdGlvbnMiLCJGQURFT1VUX1RJTUUiLCJXYWxscGFwZXJTd2l0Y2hlciIsIndhbGxwYXBlckRpcmVjdG9yeSIsImdldFdhbGxwYXBlckRpcmVjdG9yeSIsIndhbGxwYXBlcnMiLCJnZXRXYWxscGFwZXJzIiwiY3ljbGVyQmFja2dyb3VuZCIsImN5Y2xlckZvcmVncm91bmQiLCJjeWNsZXJQcmVsb2FkZXIiLCJkaXJlY3RvcnkiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJzZWxlY3RlZFdhbGxwYXBlciIsInN3aXRjaGVyIiwiY3VycmVudGx5RmFkaW5nIiwibmV4dEluZGV4IiwibmV3SW5kZXgiLCJuZXdXYWxscGFwZXIiLCJwcmVsb2FkZWRJbmRleCIsInByZWxvYWRlZFdhbGxwYXBlciIsInNldFdhbGxwYXBlciIsImN5Y2xlV2FsbHBhcGVyIiwic2F2ZWRXYWxscGFwZXIiLCJyZXBsYWNlIiwicmVqZWN0V2FsbHBhcGVyIiwiYWNjZXB0V2FsbHBhcGVyIiwiZ2VuZXJhdGVPcHRpb25zIiwiaGFuZGxlU3dpdGNoZXJBY3RpdmF0aW9uIiwid2FsbHBhcGVyc0RpcmVjdG9yeSIsImNvbmZpZyIsImdldF9zdHIiLCJncmVldGVydXRpbCIsImRpcmxpc3QiLCJwYWRaZXJvZXMiLCJNYWluIiwiaW5pdGlhbFN0YXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmxvYWQiLCJTeW1ib2wiLCJvYmplY3RUYWciLCJmdW5jUHJvdG8iLCJGdW5jdGlvbiIsIm9iamVjdFByb3RvIiwiZnVuY1RvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RDdG9yU3RyaW5nIiwiaXNQbGFpbk9iamVjdCIsInByb3RvIiwiQ3RvciIsImNvbnN0cnVjdG9yIiwiY29tcG9zZSIsIl9sZW4iLCJmdW5jcyIsIl9rZXkiLCJhcmciLCJsYXN0IiwicmVzdCIsInJlZHVjZVJpZ2h0IiwiY29tcG9zZWQiLCJmIiwiY3JlYXRlU3RvcmUiLCJBY3Rpb25UeXBlcyIsIklOSVQiLCJyZWR1Y2VyIiwicHJlbG9hZGVkU3RhdGUiLCJlbmhhbmNlciIsIl9yZWYyIiwiY3VycmVudFJlZHVjZXIiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50TGlzdGVuZXJzIiwibmV4dExpc3RlbmVycyIsImlzRGlzcGF0Y2hpbmciLCJlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzIiwibGlzdGVuZXIiLCJpc1N1YnNjcmliZWQiLCJyZXBsYWNlUmVkdWNlciIsIm5leHRSZWR1Y2VyIiwib2JzZXJ2YWJsZSIsIl9yZWYiLCJvdXRlclN1YnNjcmliZSIsIm9ic2VydmVyIiwiVHlwZUVycm9yIiwib2JzZXJ2ZVN0YXRlIiwibmV4dCIsImVycm9yIiwiZyIsImV2YWwiLCJpc0NydXNoZWQiLCJjb21iaW5lUmVkdWNlcnMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiZ2V0UHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsImdldFJhd1RhZyIsImlzT3duIiwidW5tYXNrZWQiLCJvYmplY3RUb1N0cmluZyIsIm92ZXJBcmciLCJmdW5jIiwidHJhbnNmb3JtIiwiZnJlZVNlbGYiLCJzZWxmIiwiaXNPYmplY3RMaWtlIiwiX2V4dGVuZHMiLCJzb3VyY2UiLCJtaWRkbGV3YXJlcyIsIl9kaXNwYXRjaCIsImNoYWluIiwibWlkZGxld2FyZUFQSSIsIm1pZGRsZXdhcmUiLCJiaW5kQWN0aW9uQ3JlYXRvciIsImFjdGlvbkNyZWF0b3IiLCJhY3Rpb25DcmVhdG9ycyIsImJvdW5kQWN0aW9uQ3JlYXRvcnMiLCJnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZSIsImFjdGlvblR5cGUiLCJhY3Rpb25OYW1lIiwiZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZSIsImlucHV0U3RhdGUiLCJyZWR1Y2VycyIsInVuZXhwZWN0ZWRLZXlDYWNoZSIsInJlZHVjZXJLZXlzIiwiYXJndW1lbnROYW1lIiwibWF0Y2giLCJ1bmV4cGVjdGVkS2V5cyIsImFzc2VydFJlZHVjZXJTYW5pdHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiZmluYWxSZWR1Y2VycyIsImZpbmFsUmVkdWNlcktleXMiLCJzYW5pdHlFcnJvciIsImNvbWJpbmF0aW9uIiwid2FybmluZ01lc3NhZ2UiLCJoYXNDaGFuZ2VkIiwicHJldmlvdXNTdGF0ZUZvcktleSIsIm5leHRTdGF0ZUZvcktleSIsImVycm9yTWVzc2FnZSIsInJlcXVpcmUiLCJfcG9ueWZpbGwiLCJfcG9ueWZpbGwyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9fZXNNb2R1bGUiLCJzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwiLCJfU3ltYm9sIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJlbnVtZXJhYmxlIiwibCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7UUM3RGdCQSxPLEdBQUFBLE87UUFNQUMsbUIsR0FBQUEsbUI7UUFHQUMsZ0IsR0FB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IjoiQWV0aGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU4YWY0MDRiOGMzZTBhODYyZjBjIiwiZXhwb3J0IGNvbnN0IE5PX09QID0gJyROT19PUCc7XG5leHBvcnQgY29uc3QgRVJST1JfTVNHID0gJ2EgcnVudGltZSBlcnJvciBvY2N1cmVkISBVc2UgSW5mZXJubyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCB0byBmaW5kIHRoZSBlcnJvci4nO1xuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudDtcbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiAoY2hpbGRyZW4gPyBbY2hpbGRyZW5dIDogY2hpbGRyZW4pO1xufVxuLy8gdGhpcyBpcyBNVUNIIGZhc3RlciB0aGFuIC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgYW5kIGluc3RhbmNlb2YgQXJyYXlcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0ludmFsaWQob2JqKSB7XG4gICAgcmV0dXJuIGlzTnVsbChvYmopIHx8IG9iaiA9PT0gZmFsc2UgfHwgaXNUcnVlKG9iaikgfHwgaXNVbmRlZmluZWQob2JqKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJ1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSA9IEVSUk9SX01TRztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbmZlcm5vIEVycm9yOiAke21lc3NhZ2V9YCk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuTGlmZWN5Y2xlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oKTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlQcm9wc1RvKGNvcHlGcm9tLCBjb3B5VG8pIHtcbiAgICBmb3IgKGxldCBwcm9wIGluIGNvcHlGcm9tKSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChjb3B5VG9bcHJvcF0pKSB7XG4gICAgICAgICAgICBjb3B5VG9bcHJvcF0gPSBjb3B5RnJvbVtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9+L2luZmVybm8tc2hhcmVkL2Rpc3QtZXMvaW5kZXguanMiLCJpbXBvcnQgeyB3YXJuaW5nLCBOT19PUCB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBjbG9uZVZOb2RlIH0gZnJvbSAnLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgbGlua0V2ZW50IGZyb20gJy4vRE9NL2V2ZW50cy9saW5rRXZlbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgcmVuZGVyLCBmaW5kRE9NTm9kZSwgY3JlYXRlUmVuZGVyZXIgfSBmcm9tICcuL0RPTS9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi9ET00vdXRpbHMnO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCB0ZXN0RnVuYyA9IGZ1bmN0aW9uIHRlc3RGbigpIHsgfTtcbiAgICBpZiAoKHRlc3RGdW5jLm5hbWUgfHwgdGVzdEZ1bmMudG9TdHJpbmcoKSkuaW5kZXhPZigndGVzdEZuJykgPT09IC0xKSB7XG4gICAgICAgIHdhcm5pbmcoKCdJdCBsb29rcyBsaWtlIHlvdVxcJ3JlIHVzaW5nIGEgbWluaWZpZWQgY29weSBvZiB0aGUgZGV2ZWxvcG1lbnQgYnVpbGQgJyArXG4gICAgICAgICAgICAnb2YgSW5mZXJuby4gV2hlbiBkZXBsb3lpbmcgSW5mZXJubyBhcHBzIHRvIHByb2R1Y3Rpb24sIG1ha2Ugc3VyZSB0byB1c2UgJyArXG4gICAgICAgICAgICAndGhlIHByb2R1Y3Rpb24gYnVpbGQgd2hpY2ggc2tpcHMgZGV2ZWxvcG1lbnQgd2FybmluZ3MgYW5kIGlzIGZhc3Rlci4gJyArXG4gICAgICAgICAgICAnU2VlIGh0dHA6Ly9pbmZlcm5vanMub3JnIGZvciBtb3JlIGRldGFpbHMuJykpO1xuICAgIH1cbn1cbi8vIFRoaXMgd2lsbCBiZSByZXBsYWNlZCBieSByb2xsdXBcbmV4cG9ydCBjb25zdCB2ZXJzaW9uID0gJ1ZFUlNJT04nO1xuLy8gd2UgZHVwbGljYXRlIGl0IHNvIGl0IHBsYXlzIG5pY2VseSB3aXRoIGRpZmZlcmVudCBtb2R1bGUgbG9hZGluZyBzeXN0ZW1zXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGlua0V2ZW50LFxuICAgIC8vIGNvcmUgc2hhcGVzXG4gICAgY3JlYXRlVk5vZGUsXG4gICAgLy8gY2xvbmluZ1xuICAgIGNsb25lVk5vZGUsXG4gICAgLy8gdXNlZCB0byBzaGFyZWQgY29tbW9uIGl0ZW1zIGJldHdlZW4gSW5mZXJubyBsaWJzXG4gICAgTk9fT1AsXG4gICAgRU1QVFlfT0JKLFxuICAgIC8vIERPTVxuICAgIHJlbmRlcixcbiAgICBmaW5kRE9NTm9kZSxcbiAgICBjcmVhdGVSZW5kZXJlcixcbiAgICBvcHRpb25zLFxuICAgIHZlcnNpb25cbn07XG5leHBvcnQgeyBcbi8vIFB1YmxpYyBtZXRob2RzXG5saW5rRXZlbnQsIFxuLy8gY29yZSBzaGFwZXNcbmNyZWF0ZVZOb2RlLCBcbi8vIGNsb25pbmdcbmNsb25lVk5vZGUsIFxuLy8gdXNlZCB0byBzaGFyZWQgY29tbW9uIGl0ZW1zIGJldHdlZW4gSW5mZXJubyBsaWJzXG5OT19PUCwgRU1QVFlfT0JKLCBcbi8vIERPTVxucmVuZGVyLCBmaW5kRE9NTm9kZSwgY3JlYXRlUmVuZGVyZXIsIG9wdGlvbnMgfTtcbi8vIEludGVybmFsIHN0dWZmIHRoYXQgb25seSBjb3JlIGluZmVybm8tKiBwYWNrYWdlcyB1c2VcbmV4cG9ydCB7IGlzVW5pdGxlc3NOdW1iZXIgYXMgaW50ZXJuYWxfaXNVbml0bGVzc051bWJlciB9IGZyb20gJy4vRE9NL2NvbnN0YW50cyc7XG4vLyBNYWlubHkgZm9yIHRlc3RpbmdcbmV4cG9ydCB7IG5vcm1hbGl6ZSBhcyBpbnRlcm5hbF9ub3JtYWxpemUgfSBmcm9tICcuL2NvcmUvbm9ybWFsaXphdGlvbic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9pbmRleC5qcyIsImltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGlzSW52YWxpZCwgaXNOdWxsT3JVbmRlZiwgaXNTdHJpbmdPck51bWJlciwgaXNVbmRlZmluZWQsIHRocm93RXJyb3IgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgY2xvbmVWTm9kZSwgY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVWb2lkVk5vZGUgfSBmcm9tICcuLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgeyBzdmdOUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnLi9tb3VudGluZyc7XG5pbXBvcnQgeyBwYXRjaCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgdW5tb3VudCB9IGZyb20gJy4vdW5tb3VudGluZyc7XG4vLyBXZSBuZWVkIEVNUFRZX09CSiBkZWZpbmVkIGluIG9uZSBwbGFjZS5cbi8vIEl0cyB1c2VkIGZvciBjb21wYXJpc29uIHNvIHdlIGNhbnQgaW5saW5lIGl0IGludG8gc2hhcmVkXG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIE9iamVjdC5mcmVlemUoRU1QVFlfT0JKKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCBDb21wb25lbnQsIHByb3BzLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChpc1VuZGVmaW5lZChjb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0gRU1QVFlfT0JKOyAvLyBDb250ZXh0IHNob3VsZCBub3QgYmUgbXV0YWJsZVxuICAgIH1cbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcyA9PT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGluc3RhbmNlLl9wYXRjaCA9IHBhdGNoO1xuICAgIGlmIChvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5fY29tcG9uZW50VG9ET01Ob2RlTWFwID0gY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgIH1cbiAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgaWYgKGlzRnVuY3Rpb24oaW5zdGFuY2UuY29tcG9uZW50V2lsbE1vdW50KSkge1xuICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBvcHRpb25zLmJlZm9yZVJlbmRlciAmJiBvcHRpb25zLmJlZm9yZVJlbmRlcihpbnN0YW5jZSk7XG4gICAgbGV0IGlucHV0ID0gaW5zdGFuY2UucmVuZGVyKHByb3BzLCBpbnN0YW5jZS5zdGF0ZSwgY29udGV4dCk7XG4gICAgb3B0aW9ucy5hZnRlclJlbmRlciAmJiBvcHRpb25zLmFmdGVyUmVuZGVyKGluc3RhbmNlKTtcbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShpbnB1dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbiBpbnB1dCB0aGF0IGlzIGFsc28gYSBjb21wb25lbnQsIHdlIHJ1biBpbnRvIGEgdHJpY2t5IHNpdHVhdGlvblxuICAgICAgICAgICAgLy8gd2hlcmUgdGhlIHJvb3Qgdk5vZGUgbmVlZHMgdG8gYWx3YXlzIGhhdmUgdGhlIGNvcnJlY3QgRE9NIGVudHJ5XG4gICAgICAgICAgICAvLyBzbyB3ZSBicmVhayBtb25vbW9ycGhpc20gb24gb3VyIGlucHV0IGFuZCBzdXBwbHkgaXQgb3VyIHZOb2RlIGFzIHBhcmVudFZOb2RlXG4gICAgICAgICAgICAvLyB3ZSBjYW4gb3B0aW1pc2UgdGhpcyBpbiB0aGUgZnV0dXJlLCBidXQgdGhpcyBnZXRzIHVzIG91dCBvZiBhIGxvdCBvZiBpc3N1ZXNcbiAgICAgICAgICAgIGlucHV0LnBhcmVudFZOb2RlID0gdk5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zdGFuY2UuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIGluc3RhbmNlLl9sYXN0SW5wdXQgPSBpbnB1dDtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudChuZXh0SW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0SW5wdXQsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIGRvbSwgdk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBsZXQgc2hhbGxvd1VubW91bnQgPSBmYWxzZTtcbiAgICAvLyB3ZSBjYW5ub3QgY2FjaGUgbm9kZVR5cGUgaGVyZSBhcyB2Tm9kZSBtaWdodCBiZSByZS1hc3NpZ25lZCBiZWxvd1xuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgYWNjZXNzaW5nIGEgc3RhdGVmdWwgb3Igc3RhdGVsZXNzIGNvbXBvbmVudCwgd2Ugd2FudCB0byBhY2Nlc3MgdGhlaXIgbGFzdCByZW5kZXJlZCBpbnB1dFxuICAgICAgICAvLyBhY2Nlc3NpbmcgdGhlaXIgRE9NIG5vZGUgaXMgbm90IHVzZWZ1bCB0byB1cyBoZXJlXG4gICAgICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgdk5vZGUgPSB2Tm9kZS5jaGlsZHJlbi5fbGFzdElucHV0IHx8IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBzaGFsbG93VW5tb3VudCA9IHRydWU7XG4gICAgfVxuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgdk5vZGUuZG9tKTtcbiAgICB1bm1vdW50KHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCBjb21wb25lbnQsIHByb3BzLCBjb250ZXh0KSB7XG4gICAgbGV0IGlucHV0ID0gY29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShpbnB1dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbiBpbnB1dCB0aGF0IGlzIGFsc28gYSBjb21wb25lbnQsIHdlIHJ1biBpbnRvIGEgdHJpY2t5IHNpdHVhdGlvblxuICAgICAgICAgICAgLy8gd2hlcmUgdGhlIHJvb3Qgdk5vZGUgbmVlZHMgdG8gYWx3YXlzIGhhdmUgdGhlIGNvcnJlY3QgRE9NIGVudHJ5XG4gICAgICAgICAgICAvLyBzbyB3ZSBicmVhayBtb25vbW9ycGhpc20gb24gb3VyIGlucHV0IGFuZCBzdXBwbHkgaXQgb3VyIHZOb2RlIGFzIHBhcmVudFZOb2RlXG4gICAgICAgICAgICAvLyB3ZSBjYW4gb3B0aW1pc2UgdGhpcyBpbiB0aGUgZnV0dXJlLCBidXQgdGhpcyBnZXRzIHVzIG91dCBvZiBhIGxvdCBvZiBpc3N1ZXNcbiAgICAgICAgICAgIGlucHV0LnBhcmVudFZOb2RlID0gdk5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlucHV0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHRleHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pIHtcbiAgICBwYXJlbnREb20uYXBwZW5kQ2hpbGQoZG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRPckFwcGVuZChwYXJlbnREb20sIG5ld05vZGUsIG5leHROb2RlKSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dE5vZGUpKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgbmV3Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnREb20uaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5leHROb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpIHtcbiAgICBpZiAoaXNTVkcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgdGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Tm9kZSwgbmV4dE5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB1bm1vdW50KGxhc3ROb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgY29uc3QgZG9tID0gbW91bnQobmV4dE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIG5leHROb2RlLmRvbSA9IGRvbTtcbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIGxhc3ROb2RlLmRvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgbmV4dERvbSwgbGFzdERvbSkge1xuICAgIGlmICghcGFyZW50RG9tKSB7XG4gICAgICAgIHBhcmVudERvbSA9IGxhc3REb20ucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcGFyZW50RG9tLnJlcGxhY2VDaGlsZChuZXh0RG9tLCBsYXN0RG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoIW9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCB8fCAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1JlY3ljbGluZykpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obnVsbCwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgdW5tb3VudChjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG5leHRDaGlsZHJlbi5sZW5ndGggJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0Q2hpbGRyZW5bMF0ua2V5KVxuICAgICAgICAmJiBsYXN0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobGFzdENoaWxkcmVuWzBdLmtleSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vdXRpbHMuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcmVjeWNsaW5nRW5hYmxlZDogZmFsc2UsXG4gICAgZmluZERPTU5vZGVFbmFibGVkOiBmYWxzZSxcbiAgICByb290czogbnVsbCxcbiAgICBjcmVhdGVWTm9kZTogbnVsbCxcbiAgICBiZWZvcmVSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJNb3VudDogbnVsbCxcbiAgICBhZnRlclVwZGF0ZTogbnVsbCxcbiAgICBiZWZvcmVVbm1vdW50OiBudWxsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9vcHRpb25zLmpzIiwiLy8gTWFrZSBzdXJlIHUgdXNlIEVNUFRZX09CSiBmcm9tICdpbmZlcm5vJywgb3RoZXJ3aXNlIGl0J2xsIGJlIGEgZGlmZmVyZW50IHJlZmVyZW5jZVxuaW1wb3J0IHsgRU1QVFlfT0JKLCBjcmVhdGVWTm9kZSwgb3B0aW9ucyB9IGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IHsgRVJST1JfTVNHLCBpc0FycmF5LCBpc0Jyb3dzZXIsIGlzRnVuY3Rpb24sIGlzSW52YWxpZCwgaXNOdWxsT3JVbmRlZiwgaXNTdHJpbmdPck51bWJlciwgTGlmZWN5Y2xlLCBOT19PUCwgdGhyb3dFcnJvciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmxldCBub09wID0gRVJST1JfTVNHO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBub09wID0gJ0luZmVybm8gRXJyb3I6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50ZWQgb3IgbW91bnRpbmcgY29tcG9uZW50LiBUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCBzZXRTdGF0ZSgpIG9yIGZvcmNlVXBkYXRlKCkgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLic7XG59XG5jb25zdCBjb21wb25lbnRDYWxsYmFja1F1ZXVlID0gbmV3IE1hcCgpO1xuLy8gd2hlbiBhIGNvbXBvbmVudHMgcm9vdCBWTm9kZSBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBjYW4gcnVuIGludG8gaXNzdWVzXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFZOb2RlID0gdk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIGlmIChwYXJlbnRWTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Vk5vZGUuZG9tID0gZG9tO1xuICAgICAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHBhcmVudFZOb2RlLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gdGhpcyBpcyBpbiBzaGFwZXMgdG9vLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBpbXBvcnQgZnJvbSBzaGFwZXMgYXMgaXQgd2lsbCBwdWxsIGluIGEgZHVwbGljYXRlIG9mIGNyZWF0ZVZOb2RlXG5mdW5jdGlvbiBjcmVhdGVWb2lkVk5vZGUoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSgxIC8qIFRleHQgKi8sIG51bGwsIG51bGwsIHRleHQpO1xufVxuZnVuY3Rpb24gYWRkVG9RdWV1ZShjb21wb25lbnQsIGZvcmNlLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE8gdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXZpc2VkIGFuZCBpbXByb3ZlZCBvblxuICAgIGxldCBxdWV1ZSA9IGNvbXBvbmVudENhbGxiYWNrUXVldWUuZ2V0KGNvbXBvbmVudCk7XG4gICAgaWYgKCFxdWV1ZSkge1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLnNldChjb21wb25lbnQsIHF1ZXVlKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmRlbGV0ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgYXBwbHlTdGF0ZShjb21wb25lbnQsIGZvcmNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gcXVldWVTdGF0ZUNoYW5nZXMoY29tcG9uZW50LCBuZXdTdGF0ZSwgY2FsbGJhY2ssIHN5bmMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5wcm9wcywgY29tcG9uZW50LmNvbnRleHQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBzdGF0ZUtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZVtzdGF0ZUtleV0gPSBuZXdTdGF0ZVtzdGF0ZUtleV07XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgJiYgaXNCcm93c2VyKSB7XG4gICAgICAgIGlmIChzeW5jIHx8IGNvbXBvbmVudC5fYmxvY2tSZW5kZXIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkVG9RdWV1ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudC5zdGF0ZSwgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUpO1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmb3JjZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoKCFjb21wb25lbnQuX2RlZmVyU2V0U3RhdGUgfHwgZm9yY2UpICYmICFjb21wb25lbnQuX2Jsb2NrUmVuZGVyICYmICFjb21wb25lbnQuX3VubW91bnRlZCkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwZW5kaW5nU3RhdGUgPSBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZTtcbiAgICAgICAgY29uc3QgcHJldlN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHBlbmRpbmdTdGF0ZSk7XG4gICAgICAgIGNvbnN0IHByb3BzID0gY29tcG9uZW50LnByb3BzO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQ7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgIGxldCBuZXh0SW5wdXQgPSBjb21wb25lbnQuX3VwZGF0ZUNvbXBvbmVudChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJvcHMsIHByb3BzLCBjb250ZXh0LCBmb3JjZSwgdHJ1ZSk7XG4gICAgICAgIGxldCBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRJbnB1dCA9PT0gTk9fT1ApIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNvbXBvbmVudC5fbGFzdElucHV0O1xuICAgICAgICAgICAgZGlkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFzdElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgIGNvbnN0IHZOb2RlID0gY29tcG9uZW50Ll92Tm9kZTtcbiAgICAgICAgY29uc3QgcGFyZW50RG9tID0gKGxhc3RJbnB1dC5kb20gJiYgbGFzdElucHV0LmRvbS5wYXJlbnROb2RlKSB8fCAobGFzdElucHV0LmRvbSA9IHZOb2RlLmRvbSk7XG4gICAgICAgIGNvbXBvbmVudC5fbGFzdElucHV0ID0gbmV4dElucHV0O1xuICAgICAgICBpZiAoZGlkVXBkYXRlKSB7XG4gICAgICAgICAgICBsZXQgc3ViTGlmZWN5Y2xlID0gY29tcG9uZW50Ll9saWZlY3ljbGU7XG4gICAgICAgICAgICBpZiAoIXN1YkxpZmVjeWNsZSkge1xuICAgICAgICAgICAgICAgIHN1YkxpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YkxpZmVjeWNsZS5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fbGlmZWN5Y2xlID0gc3ViTGlmZWN5Y2xlO1xuICAgICAgICAgICAgbGV0IGNoaWxkQ29udGV4dCA9IGNvbXBvbmVudC5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuX2NoaWxkQ29udGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbXBvbmVudC5fY2hpbGRDb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9wYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBzdWJMaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgY29tcG9uZW50Ll9pc1NWRywgZmFsc2UpO1xuICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUocHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgICAgICAgICBvcHRpb25zLmFmdGVyVXBkYXRlICYmIG9wdGlvbnMuYWZ0ZXJVcGRhdGUodk5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRvbSA9IHZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFRvRE9NTm9kZU1hcCA9IGNvbXBvbmVudC5fY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgICAgICBjb21wb25lbnRUb0RPTU5vZGVNYXAgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChjb21wb25lbnQsIG5leHRJbnB1dC5kb20pO1xuICAgICAgICB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXModk5vZGUsIGRvbSk7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMucmVmcyA9IHt9O1xuICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pZ25vcmVTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RlZmVyU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N5bmNTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xuICAgICAgICB0aGlzLl92Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3VubW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xpZmVjeWNsZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXNTVkcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50VG9ET01Ob2RlTWFwID0gbnVsbDtcbiAgICAgICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IEVNUFRZX09CSjsgLy8gY29udGV4dCBzaG91bGQgbm90IGJlIG11dGFibGVcbiAgICB9XG4gICAgcmVuZGVyKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgIH1cbiAgICBmb3JjZVVwZGF0ZShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNCcm93c2VyICYmIGFwcGx5U3RhdGUodGhpcywgdHJ1ZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pZ25vcmVTZXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBjYWxsYmFjaywgdGhpcy5fc3luY1NldFN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcignY2Fubm90IHVwZGF0ZSBzdGF0ZSB2aWEgc2V0U3RhdGUoKSBpbiBjb21wb25lbnRXaWxsVXBkYXRlKCkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U3RhdGVTeW5jKG5ld1N0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faWdub3JlU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Nhbm5vdCB1cGRhdGUgc3RhdGUgdmlhIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVwZGF0ZSgpLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCkge1xuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBjb250ZXh0KSB7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgfVxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICB9XG4gICAgX3VwZGF0ZUNvbXBvbmVudChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJldlByb3BzLCBuZXh0UHJvcHMsIGNvbnRleHQsIGZvcmNlLCBmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5vT3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBFTVBUWV9PQkopIHx8IHByZXZTdGF0ZSAhPT0gbmV4dFN0YXRlIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICBpZiAocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZyb21TZXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGVuZGluZ1NldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIG5leHRTdGF0ZSwgdGhpcy5fcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUgIT09IGZhbHNlIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJlZm9yZVJlbmRlciAmJiBvcHRpb25zLmJlZm9yZVJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlcihuZXh0UHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVyUmVuZGVyICYmIG9wdGlvbnMuYWZ0ZXJSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTk9fT1A7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vLWNvbXBvbmVudC9kaXN0LWVzL2luZGV4LmpzIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIGlzU3RhdGVmdWxDb21wb25lbnQsIGlzVW5kZWZpbmVkIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnLi9ub3JtYWxpemF0aW9uJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUoZmxhZ3MsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgZXZlbnRzLCBrZXksIHJlZiwgbm9Ob3JtYWxpc2UpIHtcbiAgICBpZiAoZmxhZ3MgJiAxNiAvKiBDb21wb25lbnRVbmtub3duICovKSB7XG4gICAgICAgIGZsYWdzID0gaXNTdGF0ZWZ1bENvbXBvbmVudCh0eXBlKSA/IDQgLyogQ29tcG9uZW50Q2xhc3MgKi8gOiA4IC8qIENvbXBvbmVudEZ1bmN0aW9uICovO1xuICAgIH1cbiAgICBjb25zdCB2Tm9kZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IGlzVW5kZWZpbmVkKGNoaWxkcmVuKSA/IG51bGwgOiBjaGlsZHJlbixcbiAgICAgICAgZG9tOiBudWxsLFxuICAgICAgICBldmVudHM6IGV2ZW50cyB8fCBudWxsLFxuICAgICAgICBmbGFncyxcbiAgICAgICAga2V5OiBpc1VuZGVmaW5lZChrZXkpID8gbnVsbCA6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzIHx8IG51bGwsXG4gICAgICAgIHJlZjogcmVmIHx8IG51bGwsXG4gICAgICAgIHR5cGVcbiAgICB9O1xuICAgIGlmICghbm9Ob3JtYWxpc2UpIHtcbiAgICAgICAgbm9ybWFsaXplKHZOb2RlKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlVk5vZGUpIHtcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVWTm9kZSh2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVZOb2RlKHZOb2RlVG9DbG9uZSwgcHJvcHMsIC4uLl9jaGlsZHJlbikge1xuICAgIGxldCBjaGlsZHJlbiA9IF9jaGlsZHJlbjtcbiAgICBpZiAoX2NoaWxkcmVuLmxlbmd0aCA+IDAgJiYgIWlzTnVsbChfY2hpbGRyZW5bMF0pKSB7XG4gICAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX2NoaWxkcmVuWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbi5jb25jYXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBbcHJvcHMuY2hpbGRyZW5dLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBbcHJvcHMuY2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbi5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICAgIGxldCBuZXdWTm9kZTtcbiAgICBpZiAoaXNBcnJheSh2Tm9kZVRvQ2xvbmUpKSB7XG4gICAgICAgIGNvbnN0IHRtcEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2Tm9kZVRvQ2xvbmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2xvbmVWTm9kZSh2Tm9kZVRvQ2xvbmVbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWTm9kZSA9IHRtcEFycmF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZmxhZ3MgPSB2Tm9kZVRvQ2xvbmUuZmxhZ3M7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlVG9DbG9uZS5ldmVudHMgfHwgKHByb3BzICYmIHByb3BzLmV2ZW50cykgfHwgbnVsbDtcbiAgICAgICAgY29uc3Qga2V5ID0gIWlzTnVsbE9yVW5kZWYodk5vZGVUb0Nsb25lLmtleSkgPyB2Tm9kZVRvQ2xvbmUua2V5IDogKHByb3BzID8gcHJvcHMua2V5IDogbnVsbCk7XG4gICAgICAgIGNvbnN0IHJlZiA9IHZOb2RlVG9DbG9uZS5yZWYgfHwgKHByb3BzID8gcHJvcHMucmVmIDogbnVsbCk7XG4gICAgICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgbmV3Vk5vZGUgPSBjcmVhdGVWTm9kZShmbGFncywgdk5vZGVUb0Nsb25lLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sIHZOb2RlVG9DbG9uZS5wcm9wcywgcHJvcHMpLCBudWxsLCBldmVudHMsIGtleSwgcmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1Byb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYWxzbyBjbG9uZSBjb21wb25lbnQgY2hpbGRyZW4gdGhhdCBhcmUgaW4gcHJvcHNcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgY2hpbGRyZW4gbWF5IGFsc28gaGF2ZSBiZWVuIGhvaXN0ZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbmV3Q2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ld0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSAmJiBpc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5jaGlsZHJlbltpXSA9IGNsb25lVk5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSBjbG9uZVZOb2RlKG5ld0NoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZOb2RlLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSAocHJvcHMgJiYgcHJvcHMuY2hpbGRyZW4pIHx8IHZOb2RlVG9DbG9uZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBPYmplY3QuYXNzaWduKHt9LCB2Tm9kZVRvQ2xvbmUucHJvcHMsIHByb3BzKSwgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYsICFjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVGV4dFZOb2RlKHZOb2RlVG9DbG9uZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZOb2RlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSgxIC8qIFRleHQgKi8sIG51bGwsIG51bGwsIHRleHQsIG51bGwsIG51bGwsIG51bGwsIHRydWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVk5vZGUobykge1xuICAgIHJldHVybiAhIW8uZmxhZ3M7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL1ZOb2Rlcy5qcyIsImltcG9ydCB7IGNvcHlQcm9wc1RvLCBpc0FycmF5LCBpc0F0dHJBbkV2ZW50LCBpc0Z1bmN0aW9uLCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgaXNTdHJpbmdPck51bWJlciwgaXNVbmRlZmluZWQsIE5PX09QLCB0aHJvd0Vycm9yIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IGNsb25lVk5vZGUsIGNyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVm9pZFZOb2RlLCBpc1ZOb2RlIH0gZnJvbSAnLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IHsgYm9vbGVhblByb3BzLCBkZWxlZ2F0ZWRQcm9wcywgaXNVbml0bGVzc051bWJlciwgbmFtZXNwYWNlcywgc2tpcFByb3BzLCBzdHJpY3RQcm9wcyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGhhbmRsZUV2ZW50IH0gZnJvbSAnLi9ldmVudHMvZGVsZWdhdGlvbic7XG5pbXBvcnQgeyBtb3VudCwgbW91bnRBcnJheUNoaWxkcmVuLCBtb3VudENvbXBvbmVudCwgbW91bnRFbGVtZW50LCBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MsIG1vdW50UmVmLCBtb3VudFRleHQsIG1vdW50Vm9pZCB9IGZyb20gJy4vbW91bnRpbmcnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGQsIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCwgaW5zZXJ0T3JBcHBlbmQsIGlzS2V5ZWQsIHJlbW92ZUFsbENoaWxkcmVuLCByZXBsYWNlQ2hpbGQsIHJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50LCByZXBsYWNlVk5vZGUsIHJlcGxhY2VXaXRoTmV3Tm9kZSwgc2V0VGV4dENvbnRlbnQsIHVwZGF0ZVRleHRDb250ZW50LCBFTVBUWV9PQkogfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbXBvbmVudFRvRE9NTm9kZU1hcCB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IHVubW91bnQgfSBmcm9tICcuL3VubW91bnRpbmcnO1xuaW1wb3J0IHByb2Nlc3NFbGVtZW50IGZyb20gJy4vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGxhc3RWTm9kZSAhPT0gbmV4dFZOb2RlKSB7XG4gICAgICAgIGNvbnN0IGxhc3RGbGFncyA9IGxhc3RWTm9kZS5mbGFncztcbiAgICAgICAgY29uc3QgbmV4dEZsYWdzID0gbmV4dFZOb2RlLmZsYWdzO1xuICAgICAgICBpZiAobmV4dEZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hDb21wb25lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dEZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRDb21wb25lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0RmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaEVsZW1lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRFbGVtZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hUZXh0KGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50VGV4dChuZXh0Vk5vZGUsIG51bGwpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoVm9pZChsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudFZvaWQobmV4dFZOb2RlLCBudWxsKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVycm9yIGNhc2U6IG1vdW50IG5ldyBvbmUgcmVwbGFjaW5nIG9sZCBvbmVcbiAgICAgICAgICAgIHJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnQoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCB0cnVlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IG5leHRUYWcgPSBuZXh0Vk5vZGUudHlwZTtcbiAgICBjb25zdCBsYXN0VGFnID0gbGFzdFZOb2RlLnR5cGU7XG4gICAgaWYgKGxhc3RUYWcgIT09IG5leHRUYWcpIHtcbiAgICAgICAgcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgIGNvbnN0IGxhc3RQcm9wcyA9IGxhc3RWTm9kZS5wcm9wcztcbiAgICAgICAgY29uc3QgbmV4dFByb3BzID0gbmV4dFZOb2RlLnByb3BzO1xuICAgICAgICBjb25zdCBsYXN0Q2hpbGRyZW4gPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IG5leHRDaGlsZHJlbiA9IG5leHRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgbGFzdEZsYWdzID0gbGFzdFZOb2RlLmZsYWdzO1xuICAgICAgICBjb25zdCBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGNvbnN0IGxhc3RSZWYgPSBsYXN0Vk5vZGUucmVmO1xuICAgICAgICBjb25zdCBuZXh0UmVmID0gbmV4dFZOb2RlLnJlZjtcbiAgICAgICAgY29uc3QgbGFzdEV2ZW50cyA9IGxhc3RWTm9kZS5ldmVudHM7XG4gICAgICAgIGNvbnN0IG5leHRFdmVudHMgPSBuZXh0Vk5vZGUuZXZlbnRzO1xuICAgICAgICBuZXh0Vk5vZGUuZG9tID0gZG9tO1xuICAgICAgICBpZiAoaXNTVkcgfHwgKG5leHRGbGFncyAmIDEyOCAvKiBTdmdFbGVtZW50ICovKSkge1xuICAgICAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0Q2hpbGRyZW4gIT09IG5leHRDaGlsZHJlbikge1xuICAgICAgICAgICAgcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCEobmV4dEZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50KG5leHRGbGFncywgbmV4dFZOb2RlLCBkb20sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIHN0YXJ0cyAtLVxuICAgICAgICBpZiAobGFzdFByb3BzICE9PSBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9wc09yRW1wdHkgPSBsYXN0UHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgICAgICAgICAgY29uc3QgbmV4dFByb3BzT3JFbXB0eSA9IG5leHRQcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzT3JFbXB0eSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBuZXh0UHJvcHNPckVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IG5leHRQcm9wc09yRW1wdHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RWYWx1ZSA9IGxhc3RQcm9wc09yRW1wdHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb3AocHJvcCwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3RQcm9wc09yRW1wdHkgIT09IEVNUFRZX09CSikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gbGFzdFByb3BzT3JFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0UHJvcHNPckVtcHR5W3Byb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wLCBsYXN0UHJvcHNPckVtcHR5W3Byb3BdLCBkb20pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlubGluZWQgcGF0Y2hQcm9wcyAgLS0gZW5kcyAtLVxuICAgICAgICBpZiAobGFzdEV2ZW50cyAhPT0gbmV4dEV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudHMobGFzdEV2ZW50cywgbmV4dEV2ZW50cywgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFJlZikge1xuICAgICAgICAgICAgaWYgKGxhc3RSZWYgIT09IG5leHRSZWYgfHwgaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgICAgICBtb3VudFJlZihkb20sIG5leHRSZWYsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENoaWxkcmVuKGxhc3RGbGFncywgbmV4dEZsYWdzLCBsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIGxldCBwYXRjaEFycmF5ID0gZmFsc2U7XG4gICAgbGV0IHBhdGNoS2V5ZWQgPSBmYWxzZTtcbiAgICBpZiAobmV4dEZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykge1xuICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKGxhc3RGbGFncyAmIDMyIC8qIEhhc0tleWVkQ2hpbGRyZW4gKi8pICYmIChuZXh0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSkge1xuICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoS2V5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZOb2RlKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzVk5vZGUobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2gobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0Y2hBcnJheSkge1xuICAgICAgICBpZiAocGF0Y2hLZXllZCkge1xuICAgICAgICAgICAgcGF0Y2hLZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hDb21wb25lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcywgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBsYXN0VHlwZSA9IGxhc3RWTm9kZS50eXBlO1xuICAgIGNvbnN0IG5leHRUeXBlID0gbmV4dFZOb2RlLnR5cGU7XG4gICAgY29uc3QgbmV4dFByb3BzID0gbmV4dFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBsYXN0S2V5ID0gbGFzdFZOb2RlLmtleTtcbiAgICBjb25zdCBuZXh0S2V5ID0gbmV4dFZOb2RlLmtleTtcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSBuZXh0VHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIC8vIFdoZW4gZGVmYXVsdFByb3BzIGFyZSB1c2VkIHdlIG5lZWQgdG8gY3JlYXRlIG5ldyBPYmplY3RcbiAgICAgICAgY29uc3QgcHJvcHMgPSBuZXh0Vk5vZGUucHJvcHMgfHwge307XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICBuZXh0Vk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgaWYgKGxhc3RUeXBlICE9PSBuZXh0VHlwZSkge1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgICAgcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGxhc3RWTm9kZS5jaGlsZHJlbi5fbGFzdElucHV0IHx8IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbnB1dCA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dChuZXh0Vk5vZGUsIG5leHRUeXBlLCBuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGNvbnN0IGRvbSA9IG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQuZG9tO1xuICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbmV4dElucHV0O1xuICAgICAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKG5leHRWTm9kZS5yZWYsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChsYXN0S2V5ICE9PSBuZXh0S2V5KSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRWTm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUuZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RTdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5faXNTVkcgPSBpc1NWRztcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fc3luY1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdElucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dElucHV0ID0gaW5zdGFuY2UuX3VwZGF0ZUNvbXBvbmVudChsYXN0U3RhdGUsIG5leHRTdGF0ZSwgbGFzdFByb3BzLCBuZXh0UHJvcHMsIGNvbnRleHQsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IGNoaWxkQ29udGV4dDtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRJbnB1dCA9PT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gbGFzdElucHV0O1xuICAgICAgICAgICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QobmV4dElucHV0KSAmJiBuZXh0SW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNsb25lVk5vZGUobmV4dElucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXQucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjaGlsZENvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBvbmVudERpZFVwZGF0ZShsYXN0UHJvcHMsIGxhc3RTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJVcGRhdGUgJiYgb3B0aW9ucy5hZnRlclVwZGF0ZShuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3N5bmNTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9wcyA9IGxhc3RWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IG5leHRIb29rcyA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgICAgICBjb25zdCBuZXh0SG9va3NEZWZpbmVkID0gIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGxldCBuZXh0SW5wdXQgPSBsYXN0SW5wdXQ7XG4gICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGxhc3RJbnB1dDtcbiAgICAgICAgICAgIGlmIChsYXN0S2V5ICE9PSBuZXh0S2V5KSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFNob3VsZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gbmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKGxhc3RQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUobGFzdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBuZXh0VHlwZShuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpICYmIG5leHRJbnB1dCAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQpICYmIG5leHRJbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY2xvbmVWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dElucHV0ICE9PSBOT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbmV4dElucHV0LnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbGFzdElucHV0LnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICBjb25zdCBuZXh0VGV4dCA9IG5leHRWTm9kZS5jaGlsZHJlbjtcbiAgICBjb25zdCBkb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgaWYgKGxhc3RWTm9kZS5jaGlsZHJlbiAhPT0gbmV4dFRleHQpIHtcbiAgICAgICAgZG9tLm5vZGVWYWx1ZSA9IG5leHRUZXh0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFZvaWQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGRyZW5MZW5ndGggPSBsYXN0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG5leHRDaGlsZHJlbkxlbmd0aCA9IG5leHRDaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3QgY29tbW9uTGVuZ3RoID0gbGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoID8gbmV4dENoaWxkcmVuTGVuZ3RoIDogbGFzdENoaWxkcmVuTGVuZ3RoO1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgIGlmIChuZXh0Q2hpbGQuZG9tKSB7XG4gICAgICAgICAgICBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKG5leHRDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2gobGFzdENoaWxkcmVuW2ldLCBuZXh0Q2hpbGQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBpZiAobGFzdENoaWxkcmVuTGVuZ3RoIDwgbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IG5leHRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5leHRDaGlsZC5kb20pIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKG5leHRDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChkb20sIG1vdW50KG5leHRDaGlsZCwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5leHRDaGlsZHJlbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBsYXN0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Q2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoS2V5ZWRDaGlsZHJlbihhLCBiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgbGV0IGFMZW5ndGggPSBhLmxlbmd0aDtcbiAgICBsZXQgYkxlbmd0aCA9IGIubGVuZ3RoO1xuICAgIGxldCBhRW5kID0gYUxlbmd0aCAtIDE7XG4gICAgbGV0IGJFbmQgPSBiTGVuZ3RoIC0gMTtcbiAgICBsZXQgYVN0YXJ0ID0gMDtcbiAgICBsZXQgYlN0YXJ0ID0gMDtcbiAgICBsZXQgaTtcbiAgICBsZXQgajtcbiAgICBsZXQgYU5vZGU7XG4gICAgbGV0IGJOb2RlO1xuICAgIGxldCBuZXh0Tm9kZTtcbiAgICBsZXQgbmV4dFBvcztcbiAgICBsZXQgbm9kZTtcbiAgICBpZiAoYUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoYkxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKGIsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChiTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgbGV0IGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgbGV0IGFFbmROb2RlID0gYVthRW5kXTtcbiAgICBsZXQgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICB9XG4gICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICB9XG4gICAgLy8gU3RlcCAxXG4gICAgLyogZXNsaW50IG5vLWNvbnN0YW50LWNvbmRpdGlvbjogMCAqL1xuICAgIG91dGVyOiB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAvLyBTeW5jIG5vZGVzIHdpdGggdGhlIHNhbWUga2V5IGF0IHRoZSBiZWdpbm5pbmcuXG4gICAgICAgIHdoaWxlIChhU3RhcnROb2RlLmtleSA9PT0gYlN0YXJ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGlmIChhU3RhcnQgPiBhRW5kIHx8IGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgZW5kLlxuICAgICAgICB3aGlsZSAoYUVuZE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBhbmQgc3luYyBub2RlcyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgIGlmIChhRW5kTm9kZS5rZXkgPT09IGJTdGFydE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhRW5kTm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIGJTdGFydE5vZGUuZG9tLCBhU3RhcnROb2RlLmRvbSk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICBpZiAoYVN0YXJ0Tm9kZS5rZXkgPT09IGJFbmROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYkVuZE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIGJFbmROb2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChhU3RhcnQgPiBhRW5kKSB7XG4gICAgICAgIGlmIChiU3RhcnQgPD0gYkVuZCkge1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgd2hpbGUgKGFTdGFydCA8PSBhRW5kKSB7XG4gICAgICAgICAgICB1bm1vdW50KGFbYVN0YXJ0KytdLCBkb20sIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYUxlbmd0aCA9IGFFbmQgLSBhU3RhcnQgKyAxO1xuICAgICAgICBiTGVuZ3RoID0gYkVuZCAtIGJTdGFydCArIDE7XG4gICAgICAgIGNvbnN0IHNvdXJjZXMgPSBuZXcgQXJyYXkoYkxlbmd0aCk7XG4gICAgICAgIC8vIE1hcmsgYWxsIG5vZGVzIGFzIGluc2VydGVkLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzb3VyY2VzW2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XG4gICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICBsZXQgcGF0Y2hlZCA9IDA7XG4gICAgICAgIC8vIFdoZW4gc2l6ZXMgYXJlIHNtYWxsLCBqdXN0IGxvb3AgdGhlbSB0aHJvdWdoXG4gICAgICAgIGlmICgoYkxlbmd0aCA8PSA0KSB8fCAoYUxlbmd0aCAqIGJMZW5ndGggPD0gMTYpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiU3RhcnQ7IGogPD0gYkVuZDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiTm9kZSA9IGJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYU5vZGUua2V5ID09PSBiTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzW2ogLSBiU3RhcnRdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYk5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGNsb25lVk5vZGUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGtleUluZGV4ID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLy8gTWFwIGtleXMgYnkgdGhlaXIgaW5kZXggaW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoaSA9IGJTdGFydDsgaSA8PSBiRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltpXTtcbiAgICAgICAgICAgICAgICBrZXlJbmRleC5zZXQobm9kZS5rZXksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJ5IHRvIHBhdGNoIHNhbWUga2V5c1xuICAgICAgICAgICAgZm9yIChpID0gYVN0YXJ0OyBpIDw9IGFFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlZCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaiA9IGtleUluZGV4LmdldChhTm9kZS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiTm9kZSA9IGJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzW2ogLSBiU3RhcnRdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW2pdID0gYk5vZGUgPSBjbG9uZVZOb2RlKGJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBhW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmYXN0LXBhdGg6IGlmIG5vdGhpbmcgcGF0Y2hlZCByZW1vdmUgYWxsIG9sZCBhbmQgYWRkIGFsbCBuZXdcbiAgICAgICAgaWYgKGFMZW5ndGggPT09IGEubGVuZ3RoICYmIHBhdGNoZWQgPT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkgPSBhTGVuZ3RoIC0gcGF0Y2hlZDtcbiAgICAgICAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYVthU3RhcnQrK107XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGwoYU5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVubW91bnQoYU5vZGUsIGRvbSwgbGlmZWN5Y2xlLCB0cnVlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXEgPSBsaXNfYWxnb3JpdGhtKHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgIGogPSBzZXEubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCAwIHx8IGkgIT09IHNlcVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG5vZGUuZG9tLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRjaGVkICE9PSBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBwYXRjaGVkIGNvdW50IGRvZXNuJ3QgbWF0Y2ggYiBsZW5ndGggd2UgbmVlZCB0byBpbnNlcnQgdGhvc2UgbmV3IG9uZXNcbiAgICAgICAgICAgICAgICAvLyBsb29wIGJhY2t3YXJkcyBzbyB3ZSBjYW4gdXNlIGluc2VydEJlZm9yZVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGJMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlc1tpXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltwb3NdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9uZ2VzdF9pbmNyZWFzaW5nX3N1YnNlcXVlbmNlXG5mdW5jdGlvbiBsaXNfYWxnb3JpdGhtKGFycikge1xuICAgIGNvbnN0IHAgPSBhcnIuc2xpY2UoMCk7XG4gICAgY29uc3QgcmVzdWx0ID0gWzBdO1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuICAgIGxldCB1O1xuICAgIGxldCB2O1xuICAgIGxldCBjO1xuICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBhcnJJID0gYXJyW2ldO1xuICAgICAgICBpZiAoYXJySSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGogPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYXJyW2pdIDwgYXJySSkge1xuICAgICAgICAgICAgcFtpXSA9IGo7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHUgPSAwO1xuICAgICAgICB2ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICh1IDwgdikge1xuICAgICAgICAgICAgYyA9ICgodSArIHYpIC8gMikgfCAwO1xuICAgICAgICAgICAgaWYgKGFycltyZXN1bHRbY11dIDwgYXJySSkge1xuICAgICAgICAgICAgICAgIHUgPSBjICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHYgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJJIDwgYXJyW3Jlc3VsdFt1XV0pIHtcbiAgICAgICAgICAgIGlmICh1ID4gMCkge1xuICAgICAgICAgICAgICAgIHBbaV0gPSByZXN1bHRbdSAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W3VdID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1ID0gcmVzdWx0Lmxlbmd0aDtcbiAgICB2ID0gcmVzdWx0W3UgLSAxXTtcbiAgICB3aGlsZSAodS0tID4gMCkge1xuICAgICAgICByZXN1bHRbdV0gPSB2O1xuICAgICAgICB2ID0gcFt2XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSkge1xuICAgIGlmIChza2lwUHJvcHNbcHJvcF0gfHwgaGFzQ29udHJvbGxlZFZhbHVlICYmIHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYm9vbGVhblByb3BzW3Byb3BdKSB7XG4gICAgICAgIGRvbVtwcm9wXSA9ICEhbmV4dFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdHJpY3RQcm9wc1twcm9wXSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSA/ICcnIDogbmV4dFZhbHVlO1xuICAgICAgICBpZiAoZG9tW3Byb3BdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgZG9tW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQXR0ckFuRXZlbnQocHJvcCkpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnQocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgICAgICBpZiAoaXNTVkcpIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKCdjbGFzcycsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20uY2xhc3NOYW1lID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIHBhdGNoU3R5bGUobGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuICAgICAgICAgICAgY29uc3QgbGFzdEh0bWwgPSBsYXN0VmFsdWUgJiYgbGFzdFZhbHVlLl9faHRtbDtcbiAgICAgICAgICAgIGNvbnN0IG5leHRIdG1sID0gbmV4dFZhbHVlICYmIG5leHRWYWx1ZS5fX2h0bWw7XG4gICAgICAgICAgICBpZiAobGFzdEh0bWwgIT09IG5leHRIdG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKG5leHRIdG1sKSkge1xuICAgICAgICAgICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gbmV4dEh0bWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbnMgPSBuYW1lc3BhY2VzW3Byb3BdO1xuICAgICAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZU5TKG5zLCBwcm9wLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShwcm9wLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSkge1xuICAgIGxhc3RFdmVudHMgPSBsYXN0RXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBuZXh0RXZlbnRzID0gbmV4dEV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgaWYgKG5leHRFdmVudHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGxhc3RFdmVudHNbbmFtZV0sIG5leHRFdmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3RFdmVudHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGxhc3RFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0RXZlbnRzW25hbWVdKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbGFzdEV2ZW50c1tuYW1lXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEV2ZW50KG5hbWUsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pIHtcbiAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmFtZUxvd2VyQ2FzZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZG9tRXZlbnQgPSBkb21bbmFtZUxvd2VyQ2FzZV07XG4gICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkLCB0aGF0IG1lYW5zIGl0J3MgYmVlbiBjb250cm9sbGVkIGJ5IGEgd3JhcHBlclxuICAgICAgICBpZiAoZG9tRXZlbnQgJiYgZG9tRXZlbnQud3JhcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxlZ2F0ZWRQcm9wc1tuYW1lXSkge1xuICAgICAgICAgICAgaGFuZGxlRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24obmV4dFZhbHVlKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtFdmVudCA9IG5leHRWYWx1ZS5ldmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtFdmVudCAmJiBpc0Z1bmN0aW9uKGxpbmtFdmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZG9tLl9kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tW25hbWVMb3dlckNhc2VdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0V2ZW50KGUuY3VycmVudFRhcmdldC5fZGF0YSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5fZGF0YSA9IG5leHRWYWx1ZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBhbiBldmVudCBvbiBhIFZOb2RlIFwiJHtuYW1lfVwiLiB3YXMgbm90IGEgZnVuY3Rpb24gb3IgYSB2YWxpZCBsaW5rRXZlbnQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBXZSBhcmUgYXNzdW1pbmcgaGVyZSB0aGF0IHdlIGNvbWUgZnJvbSBwYXRjaFByb3Agcm91dGluZVxuLy8gLW5leHRBdHRyVmFsdWUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hTdHlsZShsYXN0QXR0clZhbHVlLCBuZXh0QXR0clZhbHVlLCBkb20pIHtcbiAgICBpZiAoaXNTdHJpbmcobmV4dEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZG9tLnN0eWxlLmNzc1RleHQgPSBuZXh0QXR0clZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IHN0eWxlIGluIG5leHRBdHRyVmFsdWUpIHtcbiAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgY29uc3QgdmFsdWUgPSBuZXh0QXR0clZhbHVlW3N0eWxlXTtcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHVlKSAmJiAhaXNVbml0bGVzc051bWJlcltzdHlsZV0pIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZV0gPSB2YWx1ZSArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGxhc3RBdHRyVmFsdWUpKSB7XG4gICAgICAgIGZvciAobGV0IHN0eWxlIGluIGxhc3RBdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRBdHRyVmFsdWVbc3R5bGVdKSkge1xuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZV0gPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZVByb3AocHJvcCwgbGFzdFZhbHVlLCBkb20pIHtcbiAgICBpZiAocHJvcCA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ3ZhbHVlJykge1xuICAgICAgICBkb20udmFsdWUgPSAnJztcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0eWxlJykge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0F0dHJBbkV2ZW50KHByb3ApKSB7XG4gICAgICAgIGhhbmRsZUV2ZW50KG5hbWUsIGxhc3RWYWx1ZSwgbnVsbCwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3BhdGNoaW5nLmpzIiwiaW1wb3J0IHsgaXNCcm93c2VyLCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgTGlmZWN5Y2xlLCBOT19PUCwgdGhyb3dFcnJvciwgd2FybmluZyB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBjbG9uZVZOb2RlIH0gZnJvbSAnLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IGh5ZHJhdGVSb290IGZyb20gJy4vaHlkcmF0aW9uJztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnLi9tb3VudGluZyc7XG5pbXBvcnQgeyBwYXRjaCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgdW5tb3VudCB9IGZyb20gJy4vdW5tb3VudGluZyc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuL3V0aWxzJztcbi8vIHJhdGhlciB0aGFuIHVzZSBhIE1hcCwgbGlrZSB3ZSBkaWQgYmVmb3JlLCB3ZSBjYW4gdXNlIGFuIGFycmF5IGhlcmVcbi8vIGdpdmVuIHRoZXJlIHNob3VsZG4ndCBiZSBUSEFUIG1hbnkgcm9vdHMgb24gdGhlIHBhZ2UsIHRoZSBkaWZmZXJlbmNlXG4vLyBpbiBwZXJmb3JtYW5jZSBpcyBodWdlOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU4MDJhNjkxMzMwYWIwOTkwMGExYTJkYVxuZXhwb3J0IGNvbnN0IHJvb3RzID0gW107XG5leHBvcnQgY29uc3QgY29tcG9uZW50VG9ET01Ob2RlTWFwID0gbmV3IE1hcCgpO1xub3B0aW9ucy5yb290cyA9IHJvb3RzO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRET01Ob2RlKHJlZikge1xuICAgIGlmICghb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2ZpbmRET01Ob2RlKCkgaGFzIGJlZW4gZGlzYWJsZWQsIHVzZSBJbmZlcm5vLm9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkID0gdHJ1ZTsgZW5hYmxlZCBmaW5kRE9NTm9kZSgpLiBXYXJuaW5nIHRoaXMgY2FuIHNpZ25pZmljYW50bHkgaW1wYWN0IHBlcmZvcm1hbmNlIScpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgY29uc3QgZG9tID0gcmVmICYmIHJlZi5ub2RlVHlwZSA/IHJlZiA6IG51bGw7XG4gICAgcmV0dXJuIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5nZXQocmVmKSB8fCBkb207XG59XG5mdW5jdGlvbiBnZXRSb290KGRvbSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByb290cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCByb290ID0gcm9vdHNbaV07XG4gICAgICAgIGlmIChyb290LmRvbSA9PT0gZG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldFJvb3QoZG9tLCBpbnB1dCwgbGlmZWN5Y2xlKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZG9tLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgbGlmZWN5Y2xlXG4gICAgfTtcbiAgICByb290cy5wdXNoKHJvb3QpO1xuICAgIHJldHVybiByb290O1xufVxuZnVuY3Rpb24gcmVtb3ZlUm9vdChyb290KSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJvb3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChyb290c1tpXSA9PT0gcm9vdCkge1xuICAgICAgICAgICAgcm9vdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIGRvY3VtZW50LmJvZHkgPT09IG51bGwpIHtcbiAgICAgICAgd2FybmluZygnSW5mZXJubyB3YXJuaW5nOiB5b3UgY2Fubm90IGluaXRpYWxpemUgaW5mZXJubyB3aXRob3V0IFwiZG9jdW1lbnQuYm9keVwiLiBXYWl0IG9uIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50LCBhZGQgc2NyaXB0IHRvIGJvdHRvbSBvZiBib2R5LCBvciB1c2UgYXN5bmMvZGVmZXIgYXR0cmlidXRlcyBvbiBzY3JpcHQgdGFnLicpO1xuICAgIH1cbn1cbmNvbnN0IGRvY3VtZW50Qm9keSA9IGlzQnJvd3NlciA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihpbnB1dCwgcGFyZW50RG9tKSB7XG4gICAgaWYgKGRvY3VtZW50Qm9keSA9PT0gcGFyZW50RG9tKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCd5b3UgY2Fubm90IHJlbmRlcigpIHRvIHRoZSBcImRvY3VtZW50LmJvZHlcIi4gVXNlIGFuIGVtcHR5IGVsZW1lbnQgYXMgYSBjb250YWluZXIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGlmIChpbnB1dCA9PT0gTk9fT1ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcm9vdCA9IGdldFJvb3QocGFyZW50RG9tKTtcbiAgICBpZiAoaXNOdWxsKHJvb3QpKSB7XG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSkge1xuICAgICAgICAgICAgICAgIG1vdW50KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgRU1QVFlfT0JKLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290ID0gc2V0Um9vdChwYXJlbnREb20sIGlucHV0LCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgbGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gcm9vdC5saWZlY3ljbGU7XG4gICAgICAgIGxpZmVjeWNsZS5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYoaW5wdXQpKSB7XG4gICAgICAgICAgICB1bm1vdW50KHJvb3QuaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlUm9vdChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gocm9vdC5pbnB1dCwgaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBFTVBUWV9PQkosIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgcm9vdC5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBpZiAocm9vdCkge1xuICAgICAgICBjb25zdCByb290SW5wdXQgPSByb290LmlucHV0O1xuICAgICAgICBpZiAocm9vdElucHV0ICYmIChyb290SW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdElucHV0LmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKHBhcmVudERvbSkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXJlcihsYXN0SW5wdXQsIG5leHRJbnB1dCkge1xuICAgICAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICAgICAgcGFyZW50RG9tID0gbGFzdElucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcihuZXh0SW5wdXQsIHBhcmVudERvbSk7XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9yZW5kZXJpbmcuanMiLCJpbXBvcnQgeyBwcm9jZXNzSW5wdXQgfSBmcm9tICcuL0lucHV0V3JhcHBlcic7XG5pbXBvcnQgeyBwcm9jZXNzU2VsZWN0IH0gZnJvbSAnLi9TZWxlY3RXcmFwcGVyJztcbmltcG9ydCB7IHByb2Nlc3NUZXh0YXJlYSB9IGZyb20gJy4vVGV4dGFyZWFXcmFwcGVyJztcbmV4cG9ydCBjb25zdCB3cmFwcGVycyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tLCBtb3VudGluZykge1xuICAgIGlmIChmbGFncyAmIDUxMiAvKiBJbnB1dEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NJbnB1dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKGZsYWdzICYgMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzU2VsZWN0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgJiAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20sIG1vdW50aW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50LmpzIiwiZnVuY3Rpb24gY29uc3RydWN0RGVmYXVsdHMoc3RyaW5nLCBvYmplY3QsIHZhbHVlKSB7XG4gICAgLyogZXNsaW50IG5vLXJldHVybi1hc3NpZ246IDAgKi9cbiAgICBjb25zdCBhcnJheSA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBvYmplY3RbYXJyYXlbaV1dID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5leHBvcnQgY29uc3QgeG1sTlMgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbmV4cG9ydCBjb25zdCBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3Qgc3RyaWN0UHJvcHMgPSB7fTtcbmV4cG9ydCBjb25zdCBib29sZWFuUHJvcHMgPSB7fTtcbmV4cG9ydCBjb25zdCBuYW1lc3BhY2VzID0ge307XG5leHBvcnQgY29uc3QgaXNVbml0bGVzc051bWJlciA9IHt9O1xuZXhwb3J0IGNvbnN0IHNraXBQcm9wcyA9IHt9O1xuZXhwb3J0IGNvbnN0IGRlbGVnYXRlZFByb3BzID0ge307XG5jb25zdHJ1Y3REZWZhdWx0cygneGxpbms6aHJlZix4bGluazphcmNyb2xlLHhsaW5rOmFjdHVhdGUseGxpbms6cm9sZSx4bGluazp0aXRsZWYseGxpbms6dHlwZScsIG5hbWVzcGFjZXMsIHhsaW5rTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3htbDpiYXNlLHhtbDpsYW5nLHhtbDpzcGFjZScsIG5hbWVzcGFjZXMsIHhtbE5TKTtcbmNvbnN0cnVjdERlZmF1bHRzKCd2b2x1bWUsZGVmYXVsdENoZWNrZWQnLCBzdHJpY3RQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnY2hpbGRyZW4sY2hpbGRyZW5UeXBlLGRlZmF1bHRWYWx1ZSxyZWYsa2V5LHNlbGVjdGVkLGNoZWNrZWQsbXVsdGlwbGUnLCBza2lwUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ29uQ2xpY2ssb25Nb3VzZURvd24sb25Nb3VzZVVwLG9uTW91c2VNb3ZlLG9uU3VibWl0LG9uRGJsQ2xpY2ssb25LZXlEb3duLG9uS2V5VXAsb25LZXlQcmVzcycsIGRlbGVnYXRlZFByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdtdXRlZCxzY29wZWQsbG9vcCxvcGVuLGNoZWNrZWQsZGVmYXVsdCxjYXB0dXJlLGRpc2FibGVkLHJlYWRPbmx5LHJlcXVpcmVkLGF1dG9wbGF5LGNvbnRyb2xzLHNlYW1sZXNzLHJldmVyc2VkLGFsbG93ZnVsbHNjcmVlbixub3ZhbGlkYXRlLGhpZGRlbicsIGJvb2xlYW5Qcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYm9yZGVySW1hZ2VPdXRzZXQsYm9yZGVySW1hZ2VTbGljZSxib3JkZXJJbWFnZVdpZHRoLGJveEZsZXgsYm94RmxleEdyb3VwLGJveE9yZGluYWxHcm91cCxjb2x1bW5Db3VudCxmbGV4LGZsZXhHcm93LGZsZXhQb3NpdGl2ZSxmbGV4U2hyaW5rLGZsZXhOZWdhdGl2ZSxmbGV4T3JkZXIsZ3JpZFJvdyxncmlkQ29sdW1uLGZvbnRXZWlnaHQsbGluZUNsYW1wLGxpbmVIZWlnaHQsb3BhY2l0eSxvcmRlcixvcnBoYW5zLHRhYlNpemUsd2lkb3dzLHpJbmRleCx6b29tLGZpbGxPcGFjaXR5LGZsb29kT3BhY2l0eSxzdG9wT3BhY2l0eSxzdHJva2VEYXNoYXJyYXksc3Ryb2tlRGFzaG9mZnNldCxzdHJva2VNaXRlcmxpbWl0LHN0cm9rZU9wYWNpdHksc3Ryb2tlV2lkdGgsJywgaXNVbml0bGVzc051bWJlciwgdHJ1ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vY29uc3RhbnRzLmpzIiwiaW1wb3J0IHsgY29weVByb3BzVG8sIGlzQXJyYXksIGlzRnVuY3Rpb24sIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBpc09iamVjdCwgaXNTdHJpbmdPck51bWJlciwgaXNVbmRlZmluZWQsIHRocm93RXJyb3IgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgY2xvbmVWTm9kZSwgaXNWTm9kZSB9IGZyb20gJy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCB7IHBhdGNoRXZlbnQsIHBhdGNoUHJvcCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgcmVjeWNsZUNvbXBvbmVudCwgcmVjeWNsZUVsZW1lbnQgfSBmcm9tICcuL3JlY3ljbGluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCwgY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSwgY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0LCBkb2N1bWVudENyZWF0ZUVsZW1lbnQsIHNldFRleHRDb250ZW50LCBFTVBUWV9PQkogfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBwcm9jZXNzRWxlbWVudCBmcm9tICcuL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFZvaWQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2Tm9kZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBtb3VudCgpIHJlY2VpdmVkIGFuIG9iamVjdCB0aGF0J3Mgbm90IGEgdmFsaWQgVk5vZGUsIHlvdSBzaG91bGQgc3RyaW5naWZ5IGl0IGZpcnN0LiBPYmplY3Q6IFwiJHtKU09OLnN0cmluZ2lmeSh2Tm9kZSl9XCIuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBtb3VudCgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcIiR7dHlwZW9mIHZOb2RlfVwiLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5jaGlsZHJlbik7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgZG9tID0gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChkb20pKSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGlzU1ZHIHx8IChmbGFncyAmIDEyOCAvKiBTdmdFbGVtZW50ICovKSkge1xuICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCh0YWcsIGlzU1ZHKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKCFpc051bGwoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20sIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbChwcm9wcykpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChldmVudHMpKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwocmVmKSkge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRBcnJheUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIC8vIFRPRE86IFZlcmlmeSBjYW4gc3RyaW5nL251bWJlciBiZSBoZXJlLiBtaWdodCBjYXVzZSBkZS1vcHRcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuZG9tKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0gPSBjaGlsZCA9IGNsb25lVk5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgZG9tID0gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSkpIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9tO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGxldCBwcm9wcztcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgLy8gV2hlbiBkZWZhdWx0UHJvcHMgYXJlIHVzZWQgd2UgbmVlZCB0byBjcmVhdGUgbmV3IE9iamVjdFxuICAgICAgICBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IHt9O1xuICAgICAgICBjb3B5UHJvcHNUbyhkZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIH1cbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgbGV0IGRvbTtcbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0LCBudWxsLCBsaWZlY3ljbGUsIGluc3RhbmNlLl9jaGlsZENvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSk7XG4gICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIGRvbSk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB2Tm9kZS5kb20gPSBkb20gPSBtb3VudChpbnB1dCwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQ7XG4gICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihyZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHJlZikgJiYgKHZOb2RlLmZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignZnVuY3Rpb25hbCBjb21wb25lbnQgbGlmZWN5Y2xlIGV2ZW50cyBhcmUgbm90IHN1cHBvcnRlZCBvbiBFUzIwMTUgY2xhc3MgY29tcG9uZW50cy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoYGEgYmFkIHZhbHVlIGZvciBcInJlZlwiIHdhcyB1c2VkIG9uIGNvbXBvbmVudDogXCIke0pTT04uc3RyaW5naWZ5KHJlZil9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY0RNID0gaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQ7XG4gICAgY29uc3QgYWZ0ZXJNb3VudCA9IG9wdGlvbnMuYWZ0ZXJNb3VudDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGNETSkgfHwgIWlzTnVsbChhZnRlck1vdW50KSkge1xuICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgYWZ0ZXJNb3VudCAmJiBhZnRlck1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgIGNETSAmJiBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3N5bmNTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuX3N5bmNTZXRTdGF0ZSA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbE1vdW50KSkge1xuICAgICAgICAgICAgcmVmLm9uQ29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudERpZE1vdW50KSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKCgpID0+IHJlZi5vbkNvbXBvbmVudERpZE1vdW50KGRvbSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50UmVmKGRvbSwgdmFsdWUsIGxpZmVjeWNsZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoKCkgPT4gdmFsdWUoZG9tKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNJbnZhbGlkKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vbW91bnRpbmcuanMiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgaXNPYmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgcGF0Y2hFdmVudCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgcG9vbENvbXBvbmVudCwgcG9vbEVsZW1lbnQgfSBmcm9tICcuL3JlY3ljbGluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyByZW1vdmVDaGlsZCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHVubW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHVubW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmICgxIC8qIFRleHQgKi8gfCA0MDk2IC8qIFZvaWQgKi8pKSB7XG4gICAgICAgIHVubW91bnRWb2lkT3JUZXh0KHZOb2RlLCBwYXJlbnREb20pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRWb2lkT3JUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgdk5vZGUuZG9tKTtcbiAgICB9XG59XG5jb25zdCBhbHJlYWR5VW5tb3VudGVkID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgY29uc3QgaXNTdGF0ZWZ1bENvbXBvbmVudCA9IGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLztcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChhbHJlYWR5VW5tb3VudGVkLmhhcyh2Tm9kZSkgJiYgIWlzUmVjeWNsaW5nICYmICFwYXJlbnREb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5VW5tb3VudGVkLnNldCh2Tm9kZSwgdHJ1ZSk7XG4gICAgaWYgKCFpc1JlY3ljbGluZykge1xuICAgICAgICBpZiAoaXNTdGF0ZWZ1bENvbXBvbmVudCkge1xuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2lnbm9yZVNldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJlZm9yZVVubW91bnQgJiYgb3B0aW9ucy5iZWZvcmVVbm1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZihudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3VubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLmRlbGV0ZShpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViTGlmZWN5Y2xlID0gaW5zdGFuY2UuX2xpZmVjeWNsZTtcbiAgICAgICAgICAgICAgICB1bm1vdW50KGluc3RhbmNlLl9sYXN0SW5wdXQsIG51bGwsIHN1YkxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsVW5tb3VudChkb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGxldCBsYXN0SW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihsYXN0SW5wdXQpKSB7XG4gICAgICAgICAgICBsYXN0SW5wdXQgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgIWlzU3RhdGVmdWxDb21wb25lbnQgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sQ29tcG9uZW50KHZOb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IGRvbSA9IHZOb2RlLmRvbTtcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIGlmIChhbHJlYWR5VW5tb3VudGVkLmhhcyh2Tm9kZSkgJiYgIWlzUmVjeWNsaW5nICYmICFwYXJlbnREb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5VW5tb3VudGVkLnNldCh2Tm9kZSwgdHJ1ZSk7XG4gICAgaWYgKHJlZiAmJiAhaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgdW5tb3VudFJlZihyZWYpO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwoZXZlbnRzKSkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgZXZlbnRzW25hbWVdLCBudWxsLCBkb20pO1xuICAgICAgICAgICAgZXZlbnRzW25hbWVdID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAocGFyZW50RG9tIHx8IGNhblJlY3ljbGUpKSB7XG4gICAgICAgIHBvb2xFbGVtZW50KHZOb2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRSZWYocmVmKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICByZWYobnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNJbnZhbGlkKHJlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3VubW91bnRpbmcuanMiLCJpbXBvcnQgKiBhcyBTZXR0aW5ncyBmcm9tIFwiLi4vTG9naWMvU2V0dGluZ3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFkZGl0aW9uYWxTZXR0aW5ncyhzdGF0ZSkge1xuICAvLyBEZWZpbmUgb3VyIGRlZmF1bHRzXG4gIGxldCBkZWZhdWx0cyA9IHtcbiAgICBcImRpc3Ryb1wiOiBcImFyY2hsaW51eFwiLFxuXG4gICAgXCJhdmF0YXJfZW5hYmxlZFwiOiB0cnVlLFxuICAgIFwiYXZhdGFyX3NpemVcIjogXCIyMDBweFwiLFxuICAgIFwiYXZhdGFyX3NoYXBlXCI6IFwiY2lyY2xlXCIsXG5cbiAgICBcImZvbnRfZHBpXCI6IDEuMCxcbiAgICBcImZvbnRfY29sb3JcIjogXCIjMjIyMjIyXCIsXG4gICAgXCJmb250X2ZhbWlseVwiOiBcIk9wZW4gU2Fuc1wiLFxuICAgIFwiZm9udF9zY2FsZVwiOiAxLjAsXG5cbiAgICBcImRhdGVfZW5hYmxlZFwiOiB0cnVlLFxuICAgIFwiZGF0ZV9mb3JtYXRcIjogXCIlQSwgdGhlICVvIG9mICVCXCJcbiAgfTtcblxuICBsZXQgc2V0dGluZ3MgPSB7fTtcblxuICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoZGVmYXVsdHMpKSB7XG4gICAgc2V0dGluZ3Nba2V5XSA9IFNldHRpbmdzLnJlcXVlc3RTZXR0aW5nKGtleSwgZGVmYXVsdHNba2V5XSk7XG4gIH1cblxuICByZXR1cm4geyAuLi5zdGF0ZSwgXCJzZXR0aW5nc1wiOiBzZXR0aW5ncyB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9SZWR1Y2Vycy9TZXR0aW5nc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBpc051bGwsIGlzVW5kZWZpbmVkIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgcGF0Y2hDb21wb25lbnQsIHBhdGNoRWxlbWVudCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuY29uc3QgY29tcG9uZW50UG9vbHMgPSBuZXcgTWFwKCk7XG5jb25zdCBlbGVtZW50UG9vbHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBjb25zdCB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IGtleSA9IHZOb2RlLmtleTtcbiAgICBjb25zdCBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICBjb25zdCBwb29sID0ga2V5ID09PSBudWxsID8gcG9vbHMubm9uS2V5ZWQgOiBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgY29uc3QgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJlY3ljbGVkVk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvb2xFbGVtZW50KHZOb2RlKSB7XG4gICAgY29uc3QgdGFnID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgbGV0IHBvb2xzID0gZWxlbWVudFBvb2xzLmdldCh0YWcpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGVsZW1lbnRQb29scy5zZXQodGFnLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IGtleSA9IHZOb2RlLmtleTtcbiAgICBjb25zdCBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICBjb25zdCBwb29sID0ga2V5ID09PSBudWxsID8gcG9vbHMubm9uS2V5ZWQgOiBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgY29uc3QgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJlY3ljbGVkVk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICAgICAgICAgICAgICBjb25zdCBmYWlsZWQgPSBwYXRjaENvbXBvbmVudChyZWN5Y2xlZFZOb2RlLCB2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb29sQ29tcG9uZW50KHZOb2RlKSB7XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3Qga2V5ID0gdk5vZGUua2V5O1xuICAgIGNvbnN0IGhvb2tzID0gdk5vZGUucmVmO1xuICAgIGNvbnN0IG5vblJlY3ljbGVIb29rcyA9IGhvb2tzICYmIChob29rcy5vbkNvbXBvbmVudFdpbGxNb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudFdpbGxVbm1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlIHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKTtcbiAgICBpZiAobm9uUmVjeWNsZUhvb2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudFBvb2xzLnNldCh0eXBlLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcmVjeWNsaW5nLmpzIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTdHJpbmdPck51bWJlciwgd2FybmluZyB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IGNsb25lVk5vZGUsIGNyZWF0ZVRleHRWTm9kZSwgaXNWTm9kZSB9IGZyb20gJy4vVk5vZGVzJztcbmZ1bmN0aW9uIGFwcGx5S2V5KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlJZk1pc3Npbmcoa2V5LCB2Tm9kZSkge1xuICAgIGlmIChpc051bWJlcihrZXkpKSB7XG4gICAgICAgIGtleSA9IGAuJHtrZXl9YDtcbiAgICB9XG4gICAgaWYgKGlzTnVsbCh2Tm9kZS5rZXkpIHx8IHZOb2RlLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBhcHBseUtleShrZXksIHZOb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlQcmVmaXgoa2V5LCB2Tm9kZSkge1xuICAgIHZOb2RlLmtleSA9IGtleSArIHZOb2RlLmtleTtcbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBfbm9ybWFsaXplVk5vZGVzKG5vZGVzLCByZXN1bHQsIGluZGV4LCBjdXJyZW50S2V5KSB7XG4gICAgZm9yIChsZXQgbGVuID0gbm9kZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbiA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7Y3VycmVudEtleX0uJHtpbmRleH1gO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChuKSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkobikpIHtcbiAgICAgICAgICAgICAgICBfbm9ybWFsaXplVk5vZGVzKG4sIHJlc3VsdCwgMCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBjcmVhdGVUZXh0Vk5vZGUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzVk5vZGUobikgJiYgbi5kb20gfHwgKG4ua2V5ICYmIG4ua2V5WzBdID09PSAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBjbG9uZVZOb2RlKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKG4ua2V5KSB8fCBuLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleShrZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5UHJlZml4KGN1cnJlbnRLZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgbmV3Tm9kZXM7XG4gICAgLy8gd2UgYXNzaWduICQgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHdlJ3ZlIGZsYWdnZWQgdGhpcyBhcnJheSBmb3IgZnV0dXJlIG5vdGVcbiAgICAvLyBpZiBpdCBjb21lcyBiYWNrIGFnYWluLCB3ZSBuZWVkIHRvIGNsb25lIGl0LCBhcyBwZW9wbGUgYXJlIHVzaW5nIGl0XG4gICAgLy8gaW4gYW4gaW1tdXRhYmxlIHdheVxuICAgIC8vIHRzbGludDpkaXNhYmxlXG4gICAgaWYgKG5vZGVzWyckJ10pIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5zbGljZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZXNbJyQnXSA9IHRydWU7XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGVcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgbiA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoaXNJbnZhbGlkKG4pIHx8IGlzQXJyYXkobikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChuZXdOb2RlcyB8fCBub2Rlcykuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICBfbm9ybWFsaXplVk5vZGVzKG5vZGVzLCByZXN1bHQsIGksIGBgKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNyZWF0ZVRleHRWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChpc1ZOb2RlKG4pICYmIG4uZG9tKSB8fCAoaXNOdWxsKG4ua2V5KSAmJiAhKG4uZmxhZ3MgJiA2NCAvKiBIYXNOb25LZXllZENoaWxkcmVuICovKSkpIHtcbiAgICAgICAgICAgIGlmICghbmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlcyA9IG5vZGVzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjbG9uZVZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY2xvbmVWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlcyB8fCBub2Rlcztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVWTm9kZXMoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5kb20pIHtcbiAgICAgICAgcmV0dXJuIGNsb25lVk5vZGUoY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG59XG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyh2Tm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgaWYgKCEodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pICYmIGlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pICYmICFpc051bGxPclVuZGVmKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAocHJvcHMucmVmKSB7XG4gICAgICAgIHZOb2RlLnJlZiA9IHByb3BzLnJlZjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnJlZjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV2ZW50cykge1xuICAgICAgICB2Tm9kZS5ldmVudHMgPSBwcm9wcy5ldmVudHM7XG4gICAgfVxuICAgIGlmICghaXNOdWxsT3JVbmRlZihwcm9wcy5rZXkpKSB7XG4gICAgICAgIHZOb2RlLmtleSA9IHByb3BzLmtleTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmtleTtcbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFbGVtZW50KHR5cGUsIHZOb2RlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzdmcnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMTI4IC8qIFN2Z0VsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSA1MTIgLyogSW5wdXRFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDIwNDggLyogU2VsZWN0RWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnbWVkaWEnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMjU2IC8qIE1lZGlhRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMiAvKiBIdG1sRWxlbWVudCAqLztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZOb2RlKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICBjb25zdCBoYXNQcm9wcyA9ICFpc051bGwocHJvcHMpO1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGxldCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIC8vIGNvbnZlcnQgYSB3cm9uZ2x5IGNyZWF0ZWQgdHlwZSBiYWNrIHRvIGVsZW1lbnRcbiAgICBpZiAoaXNTdHJpbmcodHlwZSkgJiYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICBub3JtYWxpemVFbGVtZW50KHR5cGUsIHZOb2RlKTtcbiAgICAgICAgaWYgKGhhc1Byb3BzICYmIHByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcHMpIHtcbiAgICAgICAgbm9ybWFsaXplUHJvcHModk5vZGUsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmICghaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BzICYmICFpc0ludmFsaWQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBzdHJpcHBlZCBvdXQgZnJvbSBwcm9kdWN0aW9uIENPREVcbiAgICAgICAgLy8gSXQgd2lsbCBoZWxwIHVzZXJzIHRvIHRyYWNrIGVycm9ycyBpbiB0aGVpciBhcHBsaWNhdGlvbnMuXG4gICAgICAgIGNvbnN0IHZlcmlmeUtleXMgPSBmdW5jdGlvbiAodk5vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlWYWx1ZXMgPSB2Tm9kZXMubWFwKGZ1bmN0aW9uICh2bm9kZSkgeyByZXR1cm4gdm5vZGUua2V5OyB9KTtcbiAgICAgICAgICAgIGtleVZhbHVlcy5zb21lKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNEdXBsaWNhdGUgPSBrZXlWYWx1ZXMuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuICAgICAgICAgICAgICAgIGlmIChoYXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZygnSW5mZXJubyBub3JtYWxpc2F0aW9uKC4uLik6IEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHNhbWUga2V5LCBhbGwga2V5cyBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gaXRzIHNpYmxpbmdzLiBEdXBsaWNhdGVkIGtleSBpczonICsgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNEdXBsaWNhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHZOb2RlLmNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkodk5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB2ZXJpZnlLZXlzKHZOb2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL2NvcmUvbm9ybWFsaXphdGlvbi5qcyIsIi8vIFNldHRpbmdzIC0+IFJlcXVpcmVkIGJ5IFJlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGFuZGxlcyBtYW5pcHVsYXRpb24gb2YgZ3JlZXRlciBzZXR0aW5ncywgYW5kXG4vLyBwcm92aWRlcyB3cmFwcGVyIGZ1bmN0aW9ucyBhcm91bmQgbG9jYWxzdG9yYWdlLlxuXG5leHBvcnQgY29uc3QgTE9DQUxTVE9SQUdFX0VOQUJMRUQgPSAodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKTtcblxuaWYgKCFMT0NBTFNUT1JBR0VfRU5BQkxFRCkge1xuICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShcImxvY2FsU3RvcmFnZSBub3Qgc3VwcG9ydGVkLlwiLCAnZXJyb3InKTtcbiAgdGhyb3coXCJsb2NhbFN0b3JhZ2Ugbm90IHN1cHBvcnRlZC4gVGhlbWUgdW5hYmxlIHRvIGZ1bmN0aW9uLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RTZXR0aW5nKHNldHRpbmcsIGRlZmF1bHRTZXR0aW5nPXVuZGVmaW5lZCkge1xuICBsZXQgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZyk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkZWZhdWx0U2V0dGluZztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2V0dGluZyhzZXR0aW5nLCB2YWx1ZT11bmRlZmluZWQpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2V0dGluZywgdmFsdWUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Mb2dpYy9TZXR0aW5ncy5qcyIsIi8vIFN5c3RlbU9wZXJhdGlvbnMgLT4gUmVxdWlyZWQgYnkgUmVkdWNlcnMvUHJpbWFyeVJlZHVjZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBXcmFwcyBMaWdodERNIHN5c3RlbSBvcGVyYXRpb25zLCBhbmQgaGFuZGxlcyB0aGUgaGVhdnlcbi8vIGxpZnRpbmcgb2YgdGhlIG1vcmUgY29tcGxleCBMaWdodERNIHJlcXVlc3RzLlxuXG5mdW5jdGlvbiBleGVjdXRlQ29tbWFuZChtZXNzYWdlLCBib3VuZEZ1bmN0aW9uKSB7XG4gIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKG1lc3NhZ2UpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvdW5kRnVuY3Rpb24oKTtcbiAgfSwgMTAwMCk7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDb21tYW5kKGNvbW1hbmQpIHtcbiAgLy8gV2hhdCB0aGUgaGVsbCBpcyB0aGlzLCByaWdodD9cbiAgaWYgKGNvbW1hbmQgPT09IFwic2h1dGRvd25cIiAmJiB3aW5kb3cubGlnaHRkbS5jYW5fc2h1dGRvd24pIHtcbiAgICByZXR1cm4gZXhlY3V0ZUNvbW1hbmQoXCJTaHV0dGluZyBkb3duXCIsIHdpbmRvdy5saWdodGRtLnNodXRkb3duKTtcbiAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcImhpYmVybmF0ZVwiICYmIHdpbmRvdy5saWdodGRtLmNhbl9oaWJlcm5hdGUpIHtcbiAgICByZXR1cm4gZXhlY3V0ZUNvbW1hbmQoXCJIaWJlcm5hdGluZyBzeXN0ZW0uXCIsIHdpbmRvdy5saWdodGRtLmhpYmVybmF0ZSk7XG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJyZWJvb3RcIiAmJiB3aW5kb3cubGlnaHRkbS5jYW5fcmVzdGFydCkge1xuICAgIHJldHVybiBleGVjdXRlQ29tbWFuZChcIlJlYm9vdGluZyBzeXN0ZW0uXCIsIHdpbmRvdy5saWdodGRtLnJlc3RhcnQpO1xuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwic2xlZXBcIiAmJiB3aW5kb3cubGlnaHRkbS5jYW5fc3VzcGVuZCkge1xuICAgIHJldHVybiBleGVjdXRlQ29tbWFuZChcIlN1c3BlbmRpbmcgc3lzdGVtLlwiLCB3aW5kb3cubGlnaHRkbS5zdXNwZW5kKTtcbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgZ290dGVuIHRoaXMgZmFyLCBpdCdzIGJlY2F1c2UgdGhlIGNvbW1hbmQgaXMgZGlzYWJsZWQgb3IgZG9lc24ndCBleGlzdC5cbiAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoYCR7Y29tbWFuZH0gaXMgZGlzYWJsZWQgb24gdGhpcyBzeXN0ZW0uYCwgXCJlcnJvclwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbml0aWFsVXNlcigpIHtcbiAgLy8gQXJlIHdlIGN1cnJlbnRseSBpbiBhIGxvY2sgc2NyZWVuP1xuICBpZiAod2luZG93LmxpZ2h0ZG0ubG9ja19oaW50ID09PSB0cnVlKSB7XG4gICAgLy8gRGVmYXVsdCB0byB0aGUgdmVyeSBmaXJzdCBsb2dnZWQgaW4gdXNlci5cbiAgICByZXR1cm4gd2luZG93LmxpZ2h0ZG0udXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmxvZ2dlZF9pbilbMF07XG4gIH1cblxuICBlbHNlIHtcbiAgICBpZiAod2luZG93LmxpZ2h0ZG0uc2VsZWN0X3VzZXJfaGludCAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5saWdodGRtLnNlbGVjdF91c2VyX2hpbnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubGlnaHRkbS51c2Vycy5maWx0ZXIoKHVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHdpbmRvdy5saWdodGRtLnNlbGVjdF91c2VyX2hpbnQpWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LmxpZ2h0ZG0udXNlcnNbMF07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5pdGlhbFNlc3Npb24odXNlcikge1xuICBsZXQgdXNlclNlc3Npb24gPSAodXNlciA9PT0gdW5kZWZpbmVkKSA/IHVuZGVmaW5lZCA6IHVzZXIuc2Vzc2lvbjtcblxuICByZXR1cm4gKFxuICAgIHRoaXMuZmluZFNlc3Npb24odXNlclNlc3Npb24pIHx8XG4gICAgdGhpcy5maW5kU2Vzc2lvbih3aW5kb3cubGlnaHRkbS5kZWZhdWx0X3Nlc3Npb24pIHx8XG4gICAgd2luZG93LmxpZ2h0ZG0uc2Vzc2lvbnNbMF1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTZXNzaW9uKHNlc3Npb25OYW1lKSB7XG4gIGlmIChzZXNzaW9uTmFtZSA9PT0gdW5kZWZpbmVkIHx8IHNlc3Npb25OYW1lID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5saWdodGRtLnNlc3Npb25zLmZpbHRlcigoc2Vzc2lvbikgPT5cbiAgICAoc2Vzc2lvbi5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHNlc3Npb25OYW1lLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgKHNlc3Npb24ua2V5LnRvTG93ZXJDYXNlKCkgPT09IHNlc3Npb25OYW1lLnRvTG93ZXJDYXNlKCkpXG4gIClbMF07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnMuanMiLCIvLyBDb21tYW5kUGFuZWwgLT4gUmVxdWlyZWQgYnkgTWFpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoZSBzeXN0ZW0gbWFuYWdlbWVudCBoYWxmIG9mIHRoZSBncmVldGVyIGxvZ2ljLlxuLy8gRGlzcGxheXMgc3lzdGVtIGluZm8gYW5kIGhhbmRsZXMgU2xlZXAsIFNodXRkb3duLCBldGMuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cbmltcG9ydCAqIGFzIFN5c3RlbU9wZXJhdGlvbnMgZnJvbSBcIi4uL0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnNcIjtcbmltcG9ydCBXYWxscGFwZXJTd2l0Y2hlciBmcm9tIFwiLi9XYWxscGFwZXJTd2l0Y2hlclwiO1xuaW1wb3J0IENsb2NrIGZyb20gJy4vQ2xvY2snO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1hbmRQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgaGFuZGxlQ29tbWFuZChjb21tYW5kLCBkaXNhYmxlZCwgZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGRpc2FibGVkICE9PSBmYWxzZSkge1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoYCR7Y29tbWFuZH0gaXMgZGlzYWJsZWQgb24gdGhpcyBzeXN0ZW0uYCwgXCJlcnJvclwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBTeXN0ZW1PcGVyYXRpb25zLmhhbmRsZUNvbW1hbmQoY29tbWFuZCk7XG4gIH1cblxuXG4gIGdlbmVyYXRlQ29tbWFuZHMoKSB7XG4gICAgbGV0IGNvbW1hbmRzID0ge1xuICAgICAgXCJTaHV0ZG93blwiOiB3aW5kb3cubGlnaHRkbS5jYW5fc2h1dGRvd24sXG4gICAgICBcIlJlYm9vdFwiOiB3aW5kb3cubGlnaHRkbS5jYW5fcmVzdGFydCxcbiAgICAgIFwiSGliZXJuYXRlXCI6IHdpbmRvdy5saWdodGRtLmNhbl9oaWJlcm5hdGUsXG4gICAgICBcIlNsZWVwXCI6IHdpbmRvdy5saWdodGRtLmNhbl9zdXNwZW5kXG4gICAgfTtcblxuICAgIC8vIEZpbHRlciBvdXQgY29tbWFuZHMgd2UgY2FuJ3QgZXhlY3V0ZS5cbiAgICBsZXQgZW5hYmxlZENvbW1hbmRzID0gKFxuICAgICAgT2JqZWN0LmtleXMoY29tbWFuZHMpXG4gICAgICAubWFwKChrZXkpID0+IGNvbW1hbmRzW2tleV0gPyBrZXkgOiBmYWxzZSlcbiAgICAgIC5maWx0ZXIoKGNvbW1hbmQpID0+IGNvbW1hbmQgIT09IGZhbHNlKVxuICAgICk7XG5cbiAgICAvLyBBcmUgYm90aCBoaWJlcm5hdGlvbiBhbmQgc3VzcGVuZCBkaXNhYmxlZD9cbiAgICAvLyBBZGQgdGhlIHJvdyBiYWNrIGFuZCBkaXNhYmxlIGl0IHNvIHRoYXQgdGhlIHVzZXIgaXMgYXdhcmUgb2Ygd2hhdCdzIGhhcHBlbmluZy5cbiAgICBpZiAod2luZG93LmxpZ2h0ZG0uY2FuX3N1c3BlbmQgPT09IGZhbHNlICYmIHdpbmRvdy5saWdodGRtLmNhbl9oaWJlcm5hdGUgPT09IGZhbHNlKSB7XG4gICAgICBlbmFibGVkQ29tbWFuZHMucHVzaChcIlNsZWVwLmRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIC8vIFNhdmUgb3Vyc2VsdmVzIHNvbWUgd29yaywgd2hlbiBhbGwgZm91ciBjb21tYW5kcyBhcmUgZW5hYmxlZFxuICAgIC8vIHJlbmRlcmluZyBzaG91bGQgYmUgaGFsdGVkLCBhbmQgdGhlIGxvZ28gc2hvdWxkIGJlIG1vdmVkIHVwLlxuICAgIGxldCBleHBhbmRlZCA9IChlbmFibGVkQ29tbWFuZHMubGVuZ3RoID4gMyk7XG4gICAgaWYgKGV4cGFuZGVkID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgJ2V4cGFuZGVkQ29tbWFuZHMnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcm93cyA9IGVuYWJsZWRDb21tYW5kcy5tYXAoKGNvbW1hbmQpID0+IHtcbiAgICAgIGxldCBkaXNhYmxlZCA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpWzFdIHx8IGZhbHNlO1xuICAgICAgY29tbWFuZCA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLicpWzBdO1xuXG4gICAgICBsZXQgY2xhc3NlcyA9IFsnY29tbWFuZCcsIGNvbW1hbmQsIGRpc2FibGVkXS5maWx0ZXIoKGUpID0+IGUpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gb25DbGljaz17IHRoaXMuaGFuZGxlQ29tbWFuZC5iaW5kKHRoaXMsIGNvbW1hbmQsIGRpc2FibGVkKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57IGNvbW1hbmQgfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBsZXQgY2xhc3NlcyA9IFsnY29tbWFuZHMtd3JhcHBlciddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfT5cbiAgICAgICAgeyByb3dzIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaG9zdG5hbWUgPSB3aW5kb3cubGlnaHRkbS5ob3N0bmFtZTtcbiAgICBsZXQgY29tbWFuZHMgPSB0aGlzLmdlbmVyYXRlQ29tbWFuZHMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8V2FsbHBhcGVyU3dpdGNoZXIgLz5cbiAgICAgICAgeyBjb21tYW5kcyB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGhvc3RuYW1lXCI+eyBob3N0bmFtZSB9PC9kaXY+XG4gICAgICAgICAgPENsb2NrIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL0NvbW1hbmRQYW5lbC5qc3giLCIvLyBEYXRlRGlzcGxheSAtPiBSZXF1aXJlZCBieSBNYWluXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGlzcGxheXMgZGF0ZSBiZWxvdyB0aGUgbG9naW4gd2luZG93LlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFwiZm9ybWF0dGVkU3RyaW5nXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwiaW5pdGlhbGl6ZWRcIjogZmFsc2UsXG4gICAgICBcImRheU5hbWVcIjogdW5kZWZpbmVkLFxuICAgICAgXCJkYXlWYWx1ZVwiOiB1bmRlZmluZWQsXG4gICAgICBcImZvcm1hdHRlZERheVZhbHVlXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwibW9udGhOYW1lXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwibW9udGhWYWx1ZVwiOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gV2FpdCB0d28gc2Vjb25kcywgc28gdGhhdCB0aGUgY2xvY2sgY2FuIHJlbmRlciBmaXJzdCBhbmQgdGhleSBmYWRlIGluIHNlcXVlbnRpYWxseSByYXRoZXIgdGhhbiBpbiBwYXJhbGxlbC5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cblxuICBnZW5lcmF0ZURhdGVTdHJpbmcoKSB7XG4gICAgbGV0IGRhdGVTdHJpbmcgPSAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGVtPnsgdGhpcy5zdGF0ZS5kYXlOYW1lIH08L2VtPiwgdGhlIDxlbT57IHRoaXMuc3RhdGUuZm9ybWF0dGVkRGF5VmFsdWUgfTwvZW0+IG9mIDxlbT57IHRoaXMuc3RhdGUubW9udGhOYW1lIH08L2VtPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICByZXR1cm4gZGF0ZVN0cmluZztcbiAgfVxuXG5cbiAgc2V0RGF0ZSgpIHtcbiAgICBsZXQgZGF5TmFtZXMgPSBbXG4gICAgICBcIlN1bmRheVwiLFxuICAgICAgXCJNb25kYXlcIixcbiAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgIFwiRnJpZGF5XCIsXG4gICAgICBcIlNhdHVyZGF5XCJcbiAgICBdO1xuXG4gICAgbGV0IG1vbnRoTmFtZXMgPSBbXG4gICAgICBcIkphbnVhcnlcIixcbiAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgIFwiTWFyY2hcIixcbiAgICAgIFwiQXByaWxcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1bmVcIixcbiAgICAgIFwiSnVseVwiLFxuICAgICAgXCJBdWd1c3RcIixcbiAgICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgICBcIk9jdG9iZXJcIixcbiAgICAgIFwiTm92ZW1iZXJcIixcbiAgICAgIFwiRGVjZW1iZXJcIlxuICAgIF07XG5cbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcblxuICAgIGxldCBkYXlWYWx1ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgbGV0IGRheU5hbWUgPSBkYXlOYW1lc1tub3cuZ2V0VVRDRGF5KCldO1xuICAgIGxldCBtb250aFZhbHVlID0gbm93LmdldE1vbnRoKCk7XG4gICAgbGV0IG1vbnRoTmFtZSA9IG1vbnRoTmFtZXNbbW9udGhWYWx1ZV07XG5cbiAgICBsZXQgZm9ybWF0dGVkRGF5VmFsdWU7XG5cbiAgICAvLyBCZWNhdXNlIEphdmFzY3JpcHQgaXMgdGVycmlibGUsICh4IDw9IHkgPD0geikgYmVjb21lcyAoKHggPD0geSkgJiYgKHkgPD0geikpXG4gICAgaWYgKCAoKDQgPD0gZGF5VmFsdWUpICYmIChkYXlWYWx1ZSA8PSAyMCkpIHx8ICgoMjQgPD0gZGF5VmFsdWUpICYmIChkYXlWYWx1ZSA8PSAzMCkpICkge1xuICAgICAgZm9ybWF0dGVkRGF5VmFsdWUgPSBkYXlWYWx1ZSArIFwidGhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0dGVkRGF5VmFsdWUgPSBkYXlWYWx1ZSArIFtcInN0XCIsIFwibmRcIiwgXCJyZFwiXVtkYXlWYWx1ZSAlIDEwIC0gMV07XG4gICAgfVxuXG4gICAgbGV0IGZvcm1hdHRlZERhdGVTdHJpbmcgPSBgPGVtPiR7ZGF5TmFtZX08L2VtPiwgdGhlIDxlbT4ke2Zvcm1hdHRlZERheVZhbHVlfTwvZW0+IG9mIDxlbT4ke21vbnRoTmFtZX08L2VtPmA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwiZm9ybWF0dGVkU3RyaW5nXCI6IGZvcm1hdHRlZERhdGVTdHJpbmcsXG4gICAgICBcImluaXRpYWxpemVkXCI6IHRydWUsXG4gICAgICBcImRheU5hbWVcIjogZGF5TmFtZSxcbiAgICAgIFwiZGF5VmFsdWVcIjogZGF5VmFsdWUsXG4gICAgICBcImZvcm1hdHRlZERheVZhbHVlXCI6IGZvcm1hdHRlZERheVZhbHVlLFxuICAgICAgXCJtb250aE5hbWVcIjogbW9udGhOYW1lLFxuICAgICAgXCJtb250aFZhbHVlXCI6IG1vbnRoVmFsdWVcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRlKCk7XG4gICAgfSwgMzAgKiAxMDAwKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBkYXRlQ2xhc3NlcyA9IFtcImRhdGVcIl07XG4gICAgbGV0IGRhdGVTdHJpbmcgPSB0aGlzLmdlbmVyYXRlRGF0ZVN0cmluZygpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbGl6ZWQgPT09IHRydWUpIHtcbiAgICAgIGRhdGVDbGFzc2VzLnB1c2goXCJsb2FkZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZGF0ZUNsYXNzZXMuam9pbignICcpIH0+XG4gICAgICAgIHsgZGF0ZVN0cmluZyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvRGF0ZURpc3BsYXkuanN4IiwiLy8gVXNlclBhbmVsIC0+IFJlcXVpcmVkIGJ5IE1haW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGUgbG9naW4gbWFuYWdlbWVudCBoYWxmIG9mIHRoZSBncmVldGVyIGxvZ2ljLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5pbXBvcnQgVXNlclN3aXRjaGVyIGZyb20gJy4vVXNlclN3aXRjaGVyJztcbmltcG9ydCBVc2VyUGFuZWxGb3JtIGZyb20gJy4vVXNlclBhbmVsRm9ybSc7XG5cbmNvbnN0IEZBREVfSU5fRFVSQVRJT04gPSAyMDA7XG5jb25zdCBFUlJPUl9TSEFLRV9EVVJBVElPTiA9IDYwMDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcbiAgICB0aGlzLnN0b3JlU3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZVN0YXRlID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwiX3RvZ2dsZVVwZGF0ZVwiOiAhdGhpcy5zdGF0ZS5fdG9nZ2xlVXBkYXRlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcImRyb3Bkb3duQWN0aXZlXCI6IGZhbHNlLFxuICAgICAgXCJmYWRlSW5cIjogZmFsc2UsXG4gICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICBcInBhc3N3b3JkRmFpbGVkXCI6IGZhbHNlLFxuICAgICAgXCJzd2l0Y2hlckFjdGl2ZVwiOiBmYWxzZSxcbiAgICAgIFwiX3RvZ2dsZVVwZGF0ZVwiOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gRGVmaW5lIGZ1bmN0aW9ucyByZXF1aXJlZCBpbiB0aGUgZ2xvYmFsIHNjb3BlIGJ5IExpZ2h0RE0uXG4gICAgd2luZG93LnNob3dfcHJvbXB0ID0gKHRleHQsIHR5cGUpID0+IHtcbiAgICAgIGlmICh0eXBlID09PSBcInRleHRcIikge1xuICAgICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZSh0ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgIHdpbmRvdy5saWdodGRtLnJlc3BvbmQodGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5zaG93X21lc3NhZ2UgPSAodGV4dCwgdHlwZSkgPT4ge1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUodGV4dCwgdHlwZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hdXRoZW50aWNhdGlvbl9jb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cubGlnaHRkbS5pc19hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHdpbmRvdy5saWdodGRtLnN0YXJ0X3Nlc3Npb25fc3luYyh0aGlzLnN0b3JlU3RhdGUuc2Vzc2lvbi5rZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWplY3RQYXNzd29yZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYXV0b2xvZ2luX3RpbWVyX2V4cGlyZWQgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShcIkF1dG9sb2dpbiBleHBpcmVkLlwiKTtcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlRHJvcGRvd25DbGljayhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJkcm9wZG93bkFjdGl2ZVwiOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcm9wZG93bkxlYXZlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcImRyb3Bkb3duQWN0aXZlXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAod2luZG93LmRlYnVnID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZC50b0xvd2VyQ2FzZSgpICE9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgdGhpcy5yZWplY3RQYXNzd29yZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoYFlvdSBhcmUgbm93IGxvZ2dlZCBpbiBhcyAke3RoaXMuc3RvcmVTdGF0ZS51c2VyLmRpc3BsYXlfbmFtZX0gdG8gJHt0aGlzLnN0b3JlU3RhdGUuc2Vzc2lvbi5uYW1lfS5gLCAnc3VjY2VzcycpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICB3aW5kb3cubGlnaHRkbS5hdXRoZW50aWNhdGUodGhpcy5zdG9yZVN0YXRlLnVzZXIudXNlcm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN3aXRjaGVyQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAod2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoIDwgMikge1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJZb3UgYXJlIHRoZSBvbmx5IHVzZXIgdGhhdCBpcyBhYmxlIHRvIGxvZyBpbiBvbiB0aGlzIHN5c3RlbS5cIiwgJ2Vycm9yJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cubGlnaHRkbS51c2Vycy5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIE5vIHBvaW50IGluIHNob3dpbmcgdGhlbSB0aGUgc3dpdGNoZXIgaWYgdGhlcmUgaXMgb25seSBvbmUgb3RoZXIgdXNlci4gU3dpdGNoIGltbWVkaWF0ZWx5LlxuICAgICAgbGV0IG90aGVyVXNlciA9IHdpbmRvdy5saWdodGRtLnVzZXJzLmZpbHRlcigodXNlcikgPT4ge1xuICAgICAgICByZXR1cm4gdXNlci51c2VybmFtZSAhPT0gdGhpcy5zdG9yZVN0YXRlLnVzZXIudXNlcm5hbWU7XG4gICAgICB9KVswXTtcblxuICAgICAgdGhpcy5zZXRBY3RpdmVVc2VyKG90aGVyVXNlciwgdHJ1ZSk7XG4gICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShcIlVzZXIgaGFzIGJlZW4gYXV0b21hdGljYWxseSBzd2l0Y2hlZCB0byB0aGUgb25seSBvdGhlciB1c2VyIG9uIHRoaXMgc3lzdGVtLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJwYXNzd29yZFwiOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZVNlc3Npb24oc2Vzc2lvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgJ3R5cGUnOiAnQVVUSF9TRVRfQUNUSVZFX1NFU1NJT04nLFxuICAgICAgJ3Nlc3Npb24nOiBzZXNzaW9uXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwiZHJvcGRvd25BY3RpdmVcIjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZVVzZXIodXNlciwgaXNCeXBhc3MpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICd0eXBlJzogJ0FVVEhfU0VUX0FDVElWRV9VU0VSJyxcbiAgICAgICd1c2VyJzogdXNlclxuICAgIH0pO1xuXG4gICAgLy8gRmFkZSBpbiwgZXhjZXB0IHdoZW4gc3dpdGNoaW5nIGJldHdlZW4gMSBvZiAyIHVzZXJzLlxuICAgIGlmIChpc0J5cGFzcyA9PT0gZmFsc2UgfHwgaXNCeXBhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwiZmFkZUluXCI6IHRydWUsXG4gICAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgXCJmYWRlSW5cIjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9LCBGQURFX0lOX0RVUkFUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlamVjdFBhc3N3b3JkKCkge1xuICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKFwiUGFzc3dvcmQgaW5jb3JyZWN0LCBwbGVhc2UgdHJ5IGFnYWluLlwiLCAnZXJyb3InKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgXCJwYXNzd29yZEZhaWxlZFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcInBhc3N3b3JkRmFpbGVkXCI6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LCBFUlJPUl9TSEFLRV9EVVJBVElPTik7XG4gIH1cblxuICBnZW5lcmF0ZVN3aXRjaFVzZXJCdXR0b24oKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbJ2xlZnQnXTtcblxuICAgIGlmICh3aW5kb3cubGlnaHRkbS51c2Vycy5sZW5ndGggPCAyKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVN3aXRjaGVyQ2xpY2suYmluZCh0aGlzKSB9PlNXSVRDSCBVU0VSPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbG9naW5QYW5lbENsYXNzZXMgPSBbJ2xvZ2luLXBhbmVsLW1haW4nXTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmZhZGVJbiA9PT0gdHJ1ZSkge1xuICAgICAgbG9naW5QYW5lbENsYXNzZXMucHVzaCgnZmFkZWluJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoZXJBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGxvZ2luUGFuZWxDbGFzc2VzLnB1c2goJ2ZhZGVvdXQnKTtcbiAgICB9XG5cbiAgICBsZXQgc3dpdGNoVXNlckJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVTd2l0Y2hVc2VyQnV0dG9uKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYW5lbC1jb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvZ2luUGFuZWxDbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1tYXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIHNyYz17IHRoaXMuc3RvcmVTdGF0ZS51c2VyLmltYWdlIH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VXNlclBhbmVsRm9ybVxuICAgICAgICAgICAgYWN0aXZlU2Vzc2lvbj17IHRoaXMuc3RvcmVTdGF0ZS5zZXNzaW9uIH1cbiAgICAgICAgICAgIGFjdGl2ZVVzZXI9eyB0aGlzLnN0b3JlU3RhdGUudXNlciB9XG4gICAgICAgICAgICBkcm9wZG93bkFjdGl2ZT17IHRoaXMuc3RhdGUuZHJvcGRvd25BY3RpdmUgfVxuICAgICAgICAgICAgcGFzc3dvcmQ9eyB0aGlzLnN0YXRlLnBhc3N3b3JkIH1cbiAgICAgICAgICAgIHBhc3N3b3JkRmFpbGVkPXsgdGhpcy5zdGF0ZS5wYXNzd29yZEZhaWxlZCB9XG4gICAgICAgICAgICBoYW5kbGVMb2dpblN1Ym1pdD17IHRoaXMuaGFuZGxlTG9naW5TdWJtaXQuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICBoYW5kbGVEcm9wZG93bkNsaWNrPXsgdGhpcy5oYW5kbGVEcm9wZG93bkNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgaGFuZGxlRHJvcGRvd25MZWF2ZT17IHRoaXMuaGFuZGxlRHJvcGRvd25MZWF2ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIGhhbmRsZVBhc3N3b3JkSW5wdXQ9eyB0aGlzLmhhbmRsZVBhc3N3b3JkSW5wdXQuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICBzZXRBY3RpdmVTZXNzaW9uPXsgdGhpcy5zZXRBY3RpdmVTZXNzaW9uLmJpbmQodGhpcykgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICAgIHsgc3dpdGNoVXNlckJ1dHRvbiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VXNlclN3aXRjaGVyXG4gICAgICAgICAgYWN0aXZlPXsgdGhpcy5zdGF0ZS5zd2l0Y2hlckFjdGl2ZSB9XG4gICAgICAgICAgYWN0aXZlVXNlcj17IHRoaXMuc3RvcmVTdGF0ZS51c2VyIH1cbiAgICAgICAgICBzZXRBY3RpdmVVc2VyPXsgdGhpcy5zZXRBY3RpdmVVc2VyLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1VzZXJQYW5lbC5qc3giLCJpbXBvcnQgeyBTZXR0aW5nc1JlZHVjZXIgfSBmcm9tIFwiLi9TZXR0aW5nc1JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIFN5c3RlbU9wZXJhdGlvbnMgZnJvbSBcIi4uL0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcImluZm9cIjoge1xuICAgICAgXCJob3N0bmFtZVwiOiB3aW5kb3cubGlnaHRkbS5ob3N0bmFtZSxcbiAgICAgIFwibGFuZ3VhZ2VcIjogd2luZG93LmxpZ2h0ZG0ubGFuZ3VhZ2VcbiAgICB9LFxuICAgIFwidXNlclwiOiBTeXN0ZW1PcGVyYXRpb25zLmZpbmRJbml0aWFsVXNlcigpLFxuICAgIFwic2Vzc2lvblwiOiBTeXN0ZW1PcGVyYXRpb25zLmZpbmRJbml0aWFsU2Vzc2lvbigpXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZS5zdGFydHNXaXRoKFwiU0VUVElOR1NcIikpIHtcbiAgICByZXR1cm4gU2V0dGluZ3NSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBVVRIX1NFVF9BQ1RJVkVfU0VTU0lPTlwiOlxuICAgICAgdmFyIHNlc3Npb24gPSBhY3Rpb24uc2Vzc2lvbjtcblxuICAgICAgaWYgKHR5cGVvZiBzZXNzaW9uID09PSB0eXBlb2YgU3RyaW5nKCkpIHtcbiAgICAgICAgc2Vzc2lvbiA9IFN5c3RlbU9wZXJhdGlvbnMuZmluZFNlc3Npb24oc2Vzc2lvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBcInNlc3Npb25cIjogc2Vzc2lvbiB9O1xuXG4gICAgY2FzZSBcIkFVVEhfU0VUX0FDVElWRV9VU0VSXCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgXCJ1c2VyXCI6IGFjdGlvbi51c2VyIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9SZWR1Y2Vycy9QcmltYXJ5UmVkdWNlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RpZmljYXRpb25zLWNvbnRhaW5lcicpWzBdO1xuICB9XG5cbiAgZ2VuZXJhdGUobWVzc2FnZSwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBcIlwiO1xuICAgIH1cblxuICAgIGxldCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gYG5vdGlmaWNhdGlvbiAke3R5cGV9YDtcbiAgICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lICs9IFwiIGZhZGVvdXRcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LCA1MDAwKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvVXRpbHMvTm90aWZpY2F0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBOT19PUCA9ICckTk9fT1AnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQ7XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICAgIHJldHVybiBpc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogKGNoaWxkcmVuID8gW2NoaWxkcmVuXSA6IGNoaWxkcmVuKTtcbn1cbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIob2JqKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0F0dHJBbkV2ZW50KGF0dHIpIHtcbiAgICByZXR1cm4gYXR0clswXSA9PT0gJ28nICYmIGF0dHJbMV0gPT09ICduJyAmJiBhdHRyLmxlbmd0aCA+IDM7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgSW5mZXJubyBFcnJvcjogJHttZXNzYWdlfWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjb3B5UHJvcHNUbyhjb3B5RnJvbSwgY29weVRvKSB7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBjb3B5RnJvbSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoY29weVRvW3Byb3BdKSkge1xuICAgICAgICAgICAgY29weVRvW3Byb3BdID0gY29weUZyb21bcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8tY29tcG9uZW50L34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmNvbnN0IGlzaU9TID0gaXNCcm93c2VyICYmICEhbmF2aWdhdG9yLnBsYXRmb3JtICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5jb25zdCBkZWxlZ2F0ZWRFdmVudHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXZlbnQobmFtZSwgbGFzdEV2ZW50LCBuZXh0RXZlbnQsIGRvbSkge1xuICAgIGxldCBkZWxlZ2F0ZWRSb290cyA9IGRlbGVnYXRlZEV2ZW50cy5nZXQobmFtZSk7XG4gICAgaWYgKG5leHRFdmVudCkge1xuICAgICAgICBpZiAoIWRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cyA9IHsgaXRlbXM6IG5ldyBNYXAoKSwgY291bnQ6IDAsIGRvY0V2ZW50OiBudWxsIH07XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5kb2NFdmVudCA9IGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cyk7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuc2V0KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxhc3RFdmVudCkge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuY291bnQrKztcbiAgICAgICAgICAgIGlmIChpc2lPUyAmJiBuYW1lID09PSAnb25DbGljaycpIHtcbiAgICAgICAgICAgICAgICB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGVnYXRlZFJvb3RzLml0ZW1zLnNldChkb20sIG5leHRFdmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZWRSb290cy5pdGVtcy5oYXMoZG9tKSkge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuY291bnQtLTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLml0ZW1zLmRlbGV0ZShkb20pO1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50KTtcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCwgZG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGV2ZW50c1RvVHJpZ2dlciA9IGl0ZW1zLmdldChkb20pO1xuICAgIGlmIChldmVudHNUb1RyaWdnZXIpIHtcbiAgICAgICAgY291bnQtLTtcbiAgICAgICAgLy8gbGlua0V2ZW50IG9iamVjdFxuICAgICAgICBldmVudERhdGEuZG9tID0gZG9tO1xuICAgICAgICBpZiAoZXZlbnRzVG9UcmlnZ2VyLmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudHNUb1RyaWdnZXIuZXZlbnQoZXZlbnRzVG9UcmlnZ2VyLmRhdGEsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERvbSA9IGRvbS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50RG9tIHx8IHBhcmVudERvbSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGFyZW50RG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFdmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgY29uc3QgZG9jRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRvbTogZG9jdW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBkbyB0aGlzIGFzIHNvbWUgYnJvd3NlcnMgcmVjeWNsZSB0aGUgc2FtZSBFdmVudCBiZXR3ZWVuIGNhbGxzXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFrZSB0aGUgcHJvcGVydHkgY29uZmlndXJhYmxlXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2N1cnJlbnRUYXJnZXQnLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RGF0YS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBldmVudERhdGEuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY291bnQgPSBkZWxlZ2F0ZWRSb290cy5jb3VudDtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgZXZlbnQudGFyZ2V0LCBkZWxlZ2F0ZWRSb290cy5pdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkb2NFdmVudCk7XG4gICAgcmV0dXJuIGRvY0V2ZW50O1xufVxuZnVuY3Rpb24gZW1wdHlGbigpIHsgfVxuZnVuY3Rpb24gdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKSB7XG4gICAgLy8gTW9iaWxlIFNhZmFyaSBkb2VzIG5vdCBmaXJlIHByb3Blcmx5IGJ1YmJsZSBjbGljayBldmVudHMgb25cbiAgICAvLyBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsIHdoaWNoIG1lYW5zIGRlbGVnYXRlZCBjbGljayBsaXN0ZW5lcnMgZG8gbm90XG4gICAgLy8gZmlyZS4gVGhlIHdvcmthcm91bmQgZm9yIHRoaXMgYnVnIGludm9sdmVzIGF0dGFjaGluZyBhbiBlbXB0eSBjbGlja1xuICAgIC8vIGxpc3RlbmVyIG9uIHRoZSB0YXJnZXQgbm9kZS5cbiAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxMC8wOS9jbGlja19ldmVudF9kZWwuaHRtbFxuICAgIC8vIEp1c3Qgc2V0IGl0IHVzaW5nIHRoZSBvbmNsaWNrIHByb3BlcnR5IHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBtYW5hZ2UgYW55XG4gICAgLy8gYm9va2tlZXBpbmcgZm9yIGl0LiBOb3Qgc3VyZSBpZiB3ZSBuZWVkIHRvIGNsZWFyIGl0IHdoZW4gdGhlIGxpc3RlbmVyIGlzXG4gICAgLy8gcmVtb3ZlZC5cbiAgICAvLyBUT0RPOiBPbmx5IGRvIHRoaXMgZm9yIHRoZSByZWxldmFudCBTYWZhcmlzIG1heWJlP1xuICAgIGRvbS5vbmNsaWNrID0gZW1wdHlGbjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9ldmVudHMvZGVsZWdhdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmtFdmVudChkYXRhLCBldmVudCkge1xuICAgIHJldHVybiB7IGRhdGEsIGV2ZW50IH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vZXZlbnRzL2xpbmtFdmVudC5qcyIsImltcG9ydCB7IGNvcHlQcm9wc1RvLCBpc0FycmF5LCBpc051bGwsIGlzT2JqZWN0LCBpc1N0cmluZ09yTnVtYmVyLCBpc1VuZGVmaW5lZCwgdGhyb3dFcnJvciwgd2FybmluZyB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBzdmdOUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IG1vdW50LCBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzLCBtb3VudEVsZW1lbnQsIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcywgbW91bnRSZWYsIG1vdW50VGV4dCB9IGZyb20gJy4vbW91bnRpbmcnO1xuaW1wb3J0IHsgcGF0Y2hFdmVudCwgcGF0Y2hQcm9wIH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlLCBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQsIHJlcGxhY2VDaGlsZCwgRU1QVFlfT0JKIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcHJvY2Vzc0VsZW1lbnQgZnJvbSAnLi93cmFwcGVycy9wcm9jZXNzRWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pIHtcbiAgICBsZXQgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBpZiAoZG9tLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoZG9tLmRhdGEgPT09ICchJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdERvbSA9IGRvbS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gbGFzdERvbSB8fCBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVDb21wb25lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcykge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgbGV0IHByb3BzO1xuICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICAvLyBXaGVuIGRlZmF1bHRQcm9wcyBhcmUgdXNlZCB3ZSBuZWVkIHRvIGNyZWF0ZSBuZXcgT2JqZWN0XG4gICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgfHwge307XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICB2Tm9kZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgfVxuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IF9pc1NWRyA9IGRvbS5uYW1lc3BhY2VVUkkgPT09IHN2Z05TO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGluc3RhbmNlLl92Q29tcG9uZW50ID0gdk5vZGU7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICBoeWRyYXRlKGlucHV0LCBkb20sIGxpZmVjeWNsZSwgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCwgX2lzU1ZHKTtcbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQ7XG4gICAgICAgIHZOb2RlLmRvbSA9IGlucHV0LmRvbTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cztcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMSB8fCBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWcpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gaHlkcmF0aW9uOiBTZXJ2ZXItc2lkZSBtYXJrdXAgZG9lc25cXCd0IG1hdGNoIGNsaWVudC1zaWRlIG1hcmt1cCBvciBJbml0aWFsIHJlbmRlciB0YXJnZXQgaXMgbm90IGVtcHR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RG9tID0gbW91bnRFbGVtZW50KHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuZG9tID0gbmV3RG9tO1xuICAgICAgICByZXBsYWNlQ2hpbGQoZG9tLnBhcmVudE5vZGUsIG5ld0RvbSwgZG9tKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbTtcbiAgICB9XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBoeWRyYXRlQ2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGxldCBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICBpZiAoIShmbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlZikge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pO1xuICAgIGxldCBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc051bGwoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gaHlkcmF0ZShjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91bnQoY2hpbGQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChkb20gJiYgZG9tLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBkb20ubm9kZVZhbHVlID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhcmVudERvbS50ZXh0Q29udGVudCA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIGh5ZHJhdGUoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIGRvbSA9IG5leHRTaWJsaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pIHtcbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgIGNvbnN0IG5ld0RvbSA9IG1vdW50VGV4dCh2Tm9kZSwgbnVsbCk7XG4gICAgICAgIHZOb2RlLmRvbSA9IG5ld0RvbTtcbiAgICAgICAgcmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gdGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gdGV4dDtcbiAgICB9XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlVm9pZCh2Tm9kZSwgZG9tKSB7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlKHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoYGh5ZHJhdGUoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXCIke3R5cGVvZiB2Tm9kZX1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSB7XG4gICAgbGV0IGRvbSA9IHBhcmVudERvbSAmJiBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoZG9tKSB7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBFTVBUWV9PQkosIGZhbHNlKTtcbiAgICAgICAgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgIC8vIGNsZWFyIGFueSBvdGhlciBET00gbm9kZXMsIHRoZXJlIHNob3VsZCBiZSBvbmx5IGEgc2luZ2xlIGVudHJ5IGZvciB0aGUgcm9vdFxuICAgICAgICB3aGlsZSAoZG9tID0gZG9tLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2h5ZHJhdGlvbi5qcyIsImltcG9ydCB7IGlzTnVsbE9yVW5kZWYgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyB3cmFwcGVycyB9IGZyb20gJy4vcHJvY2Vzc0VsZW1lbnQnO1xuaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi4vdXRpbHMnO1xuZnVuY3Rpb24gaXNDaGVja2VkVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJztcbn1cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIGNvbnN0IHVzZXNDaGVja2VkID0gaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKTtcbiAgICByZXR1cm4gdXNlc0NoZWNrZWQgPyAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGVja2VkKSA6ICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIG9uVGV4dElucHV0Q2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25JbnB1dCkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvbkNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uQ2xpY2s7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jbGljaykge1xuICAgICAgICBldmVudHMub25jbGljayhlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DbGljayBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhuYW1lKSB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke25hbWV9XCJdYCk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGlucHV0cywgKGRvbSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKGlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBkb20uY2hlY2tlZCA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlKHZOb2RlLCBkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIGxldCBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2xpY2sgPSBvbkNoZWNrYm94Q2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25jbGljay53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0SW5wdXRDaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmlucHV0LndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2Uud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cmFwcGVycy5zZXQoZG9tLCBpbnB1dFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0V3JhcHBlci52Tm9kZSA9IHZOb2RlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VmFsdWUodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgY29uc3QgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgY29uc3QgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgaGFzVmFsdWUgPSAhaXNOdWxsT3JVbmRlZih2YWx1ZSk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZSAhPT0gZG9tLnR5cGUpIHtcbiAgICAgICAgZG9tLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBpZiAobXVsdGlwbGUgJiYgbXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBtdWx0aXBsZTtcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGRlZmF1bHRWYWx1ZSkgJiYgIWhhc1ZhbHVlKSB7XG4gICAgICAgIGRvbS5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgKyAnJztcbiAgICB9XG4gICAgaWYgKGlzQ2hlY2tlZFR5cGUodHlwZSkpIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIGlmICh0eXBlID09PSAncmFkaW8nICYmIHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhwcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlICYmIGRvbS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNJbnZhbGlkLCBpc051bGxPclVuZGVmIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgaXNWTm9kZSB9IGZyb20gJy4uLy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCB7IHdyYXBwZXJzIH0gZnJvbSAnLi9wcm9jZXNzRWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICByZXR1cm4gIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRPcHRpb25Hcm91cCh2Tm9kZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gJ29wdGdyb3VwJykge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uKGNoaWxkcmVuW2ldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uKGNoaWxkcmVuLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uKHZOb2RlLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIC8vIHdlIGRvIHRoaXMgYXMgbXVsdGlwbGUgbWF5IGhhdmUgY2hhbmdlZFxuICAgIGRvbS52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIGlmICgoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSkgIT09IC0xKSB8fCBwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgZG9tLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNoYW5nZSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNoYW5nZSkge1xuICAgICAgICBldmVudHMub25jaGFuZ2UoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uQ2hhbmdlIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUodk5vZGUsIGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZChwcm9wcykpIHtcbiAgICAgICAgbGV0IHNlbGVjdFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFzZWxlY3RXcmFwcGVyKSB7XG4gICAgICAgICAgICBzZWxlY3RXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20pIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKGNoaWxkcmVuW2ldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwiaW1wb3J0IHsgaXNOdWxsT3JVbmRlZiB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IHdyYXBwZXJzIH0gZnJvbSAnLi9wcm9jZXNzRWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICByZXR1cm4gIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gd3JhcHBlZE9uQ2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25UZXh0YXJlYUlucHV0Q2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25JbnB1dCkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSwgZmFsc2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NUZXh0YXJlYSh2Tm9kZSwgZG9tLCBtb3VudGluZykge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUodk5vZGUsIGRvbSwgbW91bnRpbmcpO1xuICAgIGxldCB0ZXh0YXJlYVdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkKHByb3BzKSkge1xuICAgICAgICBpZiAoIXRleHRhcmVhV3JhcHBlcikge1xuICAgICAgICAgICAgdGV4dGFyZWFXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRhcmVhSW5wdXRDaGFuZ2UuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWFXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tLCBtb3VudGluZykge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgY29uc3QgZG9tVmFsdWUgPSBkb20udmFsdWU7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgIGlmIChtb3VudGluZykge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGRlZmF1bHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBkb21WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkb20udmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9tVmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIFRoZXJlIGlzIHZhbHVlIHNvIGtlZXAgaXQgY29udHJvbGxlZCAqL1xuICAgICAgICBpZiAoZG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9UZXh0YXJlYVdyYXBwZXIuanMiLCIvLyBDbG9jayAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL0NvbW1hbmRQYW5lbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEp1c3QgYSBjbG9jay5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0IHsgcGFkWmVyb2VzIH0gZnJvbSBcIi4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJjdXJyZW50VGltZVwiOiB1bmRlZmluZWQsXG4gICAgICBcImluaXRpYWxpemVkXCI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUNsb2NrKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgXCJpbml0aWFsaXplZFwiOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG5cbiAgdXBkYXRlQ2xvY2soKSB7XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGhvdXJzID0gcGFkWmVyb2VzKG5vdy5nZXRIb3VycygpKTtcbiAgICBsZXQgbWludXRlcyA9IHBhZFplcm9lcyhub3cuZ2V0TWludXRlcygpKTtcbiAgICBsZXQgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJjdXJyZW50VGltZVwiOiBmb3JtYXR0ZWRUaW1lXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ2xvY2soKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc2VzID0gWydyaWdodCcsICdjbG9jayddO1xuICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMuc3RhdGUuY3VycmVudFRpbWU7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsaXplZCA9PT0gdHJ1ZSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICB7IGN1cnJlbnRUaW1lIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9DbG9jay5qc3giLCIvLyBQYXNzd29yZEZpZWxkIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvVXNlclBhbmVsRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNpbXBsZSBwYXNzd29yZCBpbnB1dCBmaWVsZC5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5cblxuY29uc3QgUGFzc3dvcmRGaWVsZCA9IChwcm9wcykgPT4ge1xuICBsZXQgY2xhc3NlcyA9IFsndXNlci1wYXNzd29yZCddO1xuXG4gIGlmIChwcm9wcy5wYXNzd29yZEZhaWxlZCA9PT0gdHJ1ZSkge1xuICAgIGNsYXNzZXMucHVzaCgnZXJyb3InKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKioqKioqKioqXCJcbiAgICAgIGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH1cbiAgICAgIHZhbHVlPXsgcHJvcHMucGFzc3dvcmQgfVxuICAgICAgb25JbnB1dD17IHByb3BzLmhhbmRsZVBhc3N3b3JkSW5wdXQgfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1Bhc3N3b3JkRmllbGQuanN4IiwiLy8gU2Vzc2lvbkRyb3Bkb3duIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvVXNlclBhbmVsRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERpc3BsYXlzIHNlc3Npb24gcm93cyBhcyBhIGRyb3Bkb3duIHRvIGhhbmRsZVxuLy8gc2Vzc2lvbiBzd2l0Y2hpbmcuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cbmltcG9ydCBTZXNzaW9uUm93IGZyb20gJy4vU2Vzc2lvblJvdyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbkRyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgLy8gU29ydCBieSBhY3RpdmUsIHRoZW4gYWxwaGFiZXRpY2FsLlxuICAgIC8vIERvaW5nIHRoaXMgcmVxdWlyZXMgdXNpbmcgc29ydCBpbiByZXZlcnNlLlxuICAgIGxldCByb3dzID0gKFxuICAgICAgd2luZG93LmxpZ2h0ZG0uc2Vzc2lvbnNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUudG9VcHBlckNhc2UoKSA+IGIubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiAoYi5rZXkudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVTZXNzaW9uLmtleS50b0xvd2VyQ2FzZSgpKSA/IDEgOiAtMTtcbiAgICAgIH0pXG4gICAgICAubWFwKChzZXNzaW9uKSA9PiAoXG4gICAgICAgIDxTZXNzaW9uUm93XG4gICAgICAgICAgYWN0aXZlU2Vzc2lvbj17IHRoaXMucHJvcHMuYWN0aXZlU2Vzc2lvbiB9XG4gICAgICAgICAgc2Vzc2lvbj17IHNlc3Npb24gfVxuICAgICAgICAgIGhhbmRsZURyb3Bkb3duQ2xpY2s9eyB0aGlzLnByb3BzLmhhbmRsZURyb3Bkb3duQ2xpY2sgfVxuICAgICAgICAgIGhhbmRsZURyb3Bkb3duTGVhdmU9eyB0aGlzLnByb3BzLmhhbmRsZURyb3Bkb3duTGVhdmUgfVxuICAgICAgICAgIHNldEFjdGl2ZVNlc3Npb249eyB0aGlzLnByb3BzLnNldEFjdGl2ZVNlc3Npb24gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICApO1xuXG4gICAgbGV0IGNsYXNzZXMgPSBbJ2Ryb3Bkb3duJywgJ3VzZXItc2Vzc2lvbiddO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZHJvcGRvd25BY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfSBvbk1vdXNlTGVhdmU9eyB0aGlzLnByb3BzLmhhbmRsZURyb3Bkb3duTGVhdmUgfT5cbiAgICAgICAgeyByb3dzIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9TZXNzaW9uRHJvcGRvd24uanN4IiwiLy8gU2Vzc2lvblJvdyAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL1Nlc3Npb25Ecm9wZG93blxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEp1c3QgYSByb3cuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuXG5cbmNvbnN0IFNlc3Npb25Sb3cgPSAocHJvcHMpID0+IHtcbiAgbGV0IGNsYXNzZXMgPSBbXCJkcm9wZG93bi1pdGVtXCJdO1xuICBsZXQgZXZlbnRIYW5kbGVyID0gcHJvcHMuc2V0QWN0aXZlU2Vzc2lvbi5iaW5kKHRoaXMsIHByb3BzLnNlc3Npb24ua2V5KTtcblxuICBpZiAocHJvcHMuc2Vzc2lvbi5rZXkgPT09IHByb3BzLmFjdGl2ZVNlc3Npb24ua2V5KSB7XG4gICAgZXZlbnRIYW5kbGVyID0gcHJvcHMuaGFuZGxlRHJvcGRvd25DbGljaztcbiAgICBjbGFzc2VzLnB1c2goXCJhY3RpdmVcIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfSBrZXk9eyBwcm9wcy5zZXNzaW9uLmtleSB9IG9uQ2xpY2s9eyBldmVudEhhbmRsZXIgfT5cbiAgICAgIHsgcHJvcHMuc2Vzc2lvbi5uYW1lIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvblJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9TZXNzaW9uUm93LmpzeCIsIi8vIFVzZXJQYW5lbEZvcm0gLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9Vc2VyUGFuZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGUgZm9ybSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBVc2VyIFBhbmVsIHRvIGhhbmRsZVxuLy8gdXNlciBpbnB1dCBmb3IgdGhlIGF1dGhlbnRpY2F0aW9uIHByb2Nlc3MuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuXG5pbXBvcnQgU2Vzc2lvbkRyb3Bkb3duIGZyb20gJy4vU2Vzc2lvbkRyb3Bkb3duJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vUGFzc3dvcmRGaWVsZCc7XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJQYW5lbEZvcm0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9eyBwcm9wcy5oYW5kbGVMb2dpblN1Ym1pdCB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXVzZXJuYW1lXCI+eyBwcm9wcy5hY3RpdmVVc2VyLmRpc3BsYXlfbmFtZSB9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcGFzc3dvcmQtY29udGFpbmVyXCI+XG4gICAgICAgIDxQYXNzd29yZEZpZWxkXG4gICAgICAgICAgcGFzc3dvcmQ9eyBwcm9wcy5wYXNzd29yZCB9XG4gICAgICAgICAgcGFzc3dvcmRGYWlsZWQ9eyBwcm9wcy5wYXNzd29yZEZhaWxlZCB9XG4gICAgICAgICAgaGFuZGxlUGFzc3dvcmRJbnB1dD17IHByb3BzLmhhbmRsZVBhc3N3b3JkSW5wdXQgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1yb3ctY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgPFNlc3Npb25Ecm9wZG93blxuICAgICAgICAgICAgICBhY3RpdmVTZXNzaW9uPXsgcHJvcHMuYWN0aXZlU2Vzc2lvbiB9XG4gICAgICAgICAgICAgIGRyb3Bkb3duQWN0aXZlPXsgcHJvcHMuZHJvcGRvd25BY3RpdmUgfVxuICAgICAgICAgICAgICBoYW5kbGVEcm9wZG93bkNsaWNrPXsgcHJvcHMuaGFuZGxlRHJvcGRvd25DbGljayB9XG4gICAgICAgICAgICAgIGhhbmRsZURyb3Bkb3duTGVhdmU9eyBwcm9wcy5oYW5kbGVEcm9wZG93bkxlYXZlIH1cbiAgICAgICAgICAgICAgc2V0QWN0aXZlU2Vzc2lvbj17IHByb3BzLnNldEFjdGl2ZVNlc3Npb24gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR09cIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFuZWxGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1VzZXJQYW5lbEZvcm0uanN4IiwiLy8gVXNlclN3aXRjaGVyIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvVXNlclBhbmVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGFuZGxlcyAocG9vcmx5KSB0aGUgdGFzayBvZiBzd2l0Y2hpbmcgYmV0d2VlblxuLy8gbXVsdGlwbGUgdXNlcnMgb24gdGhlIHNhbWUgc3lzdGVtLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5jb25zdCBGQURFX0RVUkFUSU9OID0gMjAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFwiZmFkZU91dFwiOiBmYWxzZSxcbiAgICAgIFwic2VsZWN0ZWRVc2VyXCI6IHRoaXMucHJvcHMuYWN0aXZlVXNlcixcbiAgICAgIFwic2VsZWN0ZWRVc2VySW5kZXhcIjogd2luZG93LmxpZ2h0ZG0udXNlcnMuaW5kZXhPZih0aGlzLnByb3BzLmFjdGl2ZVVzZXIpXG4gICAgfTtcbiAgfVxuXG5cbiAgaGFuZGxlQmFja0J1dHRvbihldmVudCkge1xuICAgIHRoaXMucHJvcHMuc2V0QWN0aXZlVXNlcih0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcik7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwiZmFkZU91dFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcImZhZGVPdXRcIjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIEZBREVfRFVSQVRJT04pO1xuICB9XG5cblxuICBoYW5kbGVVc2VyQ2xpY2soaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwic2VsZWN0ZWRVc2VyXCI6IHdpbmRvdy5saWdodGRtLnVzZXJzW2luZGV4XSxcbiAgICAgIFwic2VsZWN0ZWRVc2VySW5kZXhcIjogaW5kZXhcbiAgICB9KTtcbiAgfVxuXG5cbiAgZ2VuZXJhdGVVc2VyTGlzdCgpIHtcbiAgICBsZXQgYWN0aXZlSW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlckluZGV4O1xuXG4gICAgbGV0IGF2YXRhcnMgPSB3aW5kb3cubGlnaHRkbS51c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY2xhc3NlcyA9IFsnYXZhdGFyLWNvbnRhaW5lciddO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXggLSAxKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgncHJldmlvdXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmVJbmRleCArIDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCduZXh0Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVVzZXJDbGljay5iaW5kKHRoaXMsIGluZGV4KSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW1hc2tcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIHNyYz17IHVzZXIuaW1hZ2UgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItbmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnsgdXNlci5kaXNwbGF5X25hbWUgfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFsLW5hbWVcIj57IHVzZXIucmVhbF9uYW1lIH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBWZXJ5IGhhY2t5LiBBZGQgYW4gZXh0cmEgY29weSBvZiB0aGUgbGFzdCBlbGVtZW50IHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgICAvLyBpZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICBsZXQgdXNlciA9IHdpbmRvdy5saWdodGRtLnVzZXJzW3dpbmRvdy5saWdodGRtLnVzZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgYXZhdGFycy5zcGxpY2UoMCwgMCxcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nYXZhdGFyLWNvbnRhaW5lciBwcmV2aW91cycgb25DbGljaz17IHRoaXMuaGFuZGxlVXNlckNsaWNrLmJpbmQodGhpcywgd2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoIC0gMSkgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1tYXNrXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIiBzcmM9eyB1c2VyLmltYWdlIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW5hbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57IHVzZXIuZGlzcGxheV9uYW1lIH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhbC1uYW1lXCI+eyB1c2VyLnJlYWxfbmFtZSB9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFZlcnkgaGFja3kuIEFkZCBhbiBleHRyYSBjb3B5IG9mIHRoZSBmaXJzdCBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAvLyBpZiB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IHdpbmRvdy5saWdodGRtLnVzZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGxldCB1c2VyID0gd2luZG93LmxpZ2h0ZG0udXNlcnNbMF07XG4gICAgICBhdmF0YXJzLnB1c2goXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2F2YXRhci1jb250YWluZXIgbmV4dCcgb25DbGljaz17IHRoaXMuaGFuZGxlVXNlckNsaWNrLmJpbmQodGhpcywgMCkgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1tYXNrXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIiBzcmM9eyB1c2VyLmltYWdlIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW5hbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57IHVzZXIuZGlzcGxheV9uYW1lIH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhbC1uYW1lXCI+eyB1c2VyLnJlYWxfbmFtZSB9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYXZhdGFyLXNsaWRlclwiPlxuICAgICAgICB7IGF2YXRhcnMgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbJ2xvZ2luLXBhbmVsLXN3aXRjaGVyJ107XG5cbiAgICBsZXQgdXNlckxpc3QgPSB0aGlzLmdlbmVyYXRlVXNlckxpc3QoKTtcbiAgICBsZXQgdXNlckNvdW50ID0gd2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZhZGVPdXQgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImZhZGVvdXRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Vc2VyIDxlbT57IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2VySW5kZXggKyAxIH08L2VtPiBvZiA8ZW0+eyB1c2VyQ291bnQgfTwvZW0+PC9kaXY+XG4gICAgICAgIHsgdXNlckxpc3QgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUJhY2tCdXR0b24uYmluZCh0aGlzKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPkJBQ0s8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclN3aXRjaGVyLmpzeCIsIi8vIFdhbGxwYXBlclN3aXRjaGVyIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvQ29tbWFuZFBhbmVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VydmVzIHRvIGhhbmRsZSB3YWxscGFwZXIgc3dpdGNoaW5nIHRocm91Z2ggRE9NIG1hbmlwdWxhdGlvbi5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0ICogYXMgV2FsbHBhcGVyT3BlcmF0aW9ucyBmcm9tIFwiLi4vTG9naWMvV2FsbHBhcGVyT3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgU2V0dGluZ3MgZnJvbSBcIi4uL0xvZ2ljL1NldHRpbmdzXCI7XG5cbmNvbnN0IEZBREVPVVRfVElNRSA9IDYwMDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxscGFwZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IHdhbGxwYXBlckRpcmVjdG9yeSA9IFdhbGxwYXBlck9wZXJhdGlvbnMuZ2V0V2FsbHBhcGVyRGlyZWN0b3J5KCk7XG4gICAgbGV0IHdhbGxwYXBlcnMgPSBXYWxscGFwZXJPcGVyYXRpb25zLmdldFdhbGxwYXBlcnMod2FsbHBhcGVyRGlyZWN0b3J5KTtcblxuICAgIHRoaXMuY3ljbGVyQmFja2dyb3VuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jeWNsZXJQcmVsb2FkZXIgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJkaXJlY3RvcnlcIjogd2FsbHBhcGVyRGlyZWN0b3J5LFxuICAgICAgXCJ3YWxscGFwZXJzXCI6IHdhbGxwYXBlcnMsXG4gICAgICBcInNlbGVjdGVkV2FsbHBhcGVyXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwic2F2ZWRXYWxscGFwZXJcIjogdW5kZWZpbmVkLFxuICAgICAgXCJzd2l0Y2hlclwiOiB7XG4gICAgICAgIFwiYWN0aXZlXCI6IGZhbHNlLFxuICAgICAgICBcImN1cnJlbnRseUZhZGluZ1wiOiBmYWxzZSxcbiAgICAgICAgXCJpbmRleFwiOiAwXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIFNldCBiYWNrZ3JvdW5kIHdhbGxwYXBlclxuICAgIGxldCBkaXJlY3RvcnkgPSB0aGlzLnN0YXRlLmRpcmVjdG9yeTtcbiAgICBsZXQgaW1hZ2UgPSBTZXR0aW5ncy5yZXF1ZXN0U2V0dGluZyhcIndhbGxwYXBlclwiLCBcInNwYWNlLTEuanBnXCIpO1xuICAgIHRoaXMuY3ljbGVyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53YWxscGFwZXItYmFja2dyb3VuZCcpWzBdO1xuICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53YWxscGFwZXItZm9yZWdyb3VuZCcpWzBdO1xuICAgIHRoaXMuY3ljbGVyUHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndhbGxwYXBlci1wcmVsb2FkJylbMF07XG5cbiAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7ZGlyZWN0b3J5fSR7aW1hZ2V9JylgO1xuICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzYXZlZFdhbGxwYXBlclwiOiBpbWFnZVxuICAgIH0pO1xuICB9XG5cblxuICBhY2NlcHRXYWxscGFwZXIoKSB7XG4gICAgbGV0IHNlbGVjdGVkV2FsbHBhcGVyID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFdhbGxwYXBlcjtcbiAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuXG4gICAgLy8gRHVlIGRpbGlnZW5jZS5cbiAgICBTZXR0aW5ncy5zYXZlU2V0dGluZyhcIndhbGxwYXBlclwiLCBzZWxlY3RlZFdhbGxwYXBlcik7XG4gICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJUaGlzIHdhbGxwYXBlciBoYXMgYmVlbiBzYXZlZCBhcyB5b3VyIGRlZmF1bHQgYmFja2dyb3VuZC5cIiwgJ3N1Y2Nlc3MnKTtcblxuICAgIC8vIFJlc2V0IHN3aXRjaGVyIHN0YXRlXG4gICAgc3dpdGNoZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgc3dpdGNoZXIuaW5kZXggPSAwO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInNlbGVjdGVkV2FsbHBhcGVyXCI6IHNlbGVjdGVkV2FsbHBhcGVyLFxuICAgICAgXCJzYXZlZFdhbGxwYXBlclwiOiBzZWxlY3RlZFdhbGxwYXBlcixcbiAgICAgIFwic3dpdGNoZXJcIjogc3dpdGNoZXJcbiAgICB9KTtcbiAgfVxuXG5cbiAgY3ljbGVXYWxscGFwZXIoKSB7XG4gICAgLy8gUHJldmVudCBhbmltYXRpb24gdHJhbnNpdGlvbnMgc3RhY2tpbmcgYW5kIGNhdXNpbmcgaXNzdWVzLlxuICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaGVyLmN1cnJlbnRseUZhZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCB3YWxscGFwZXJzID0gdGhpcy5zdGF0ZS53YWxscGFwZXJzO1xuICAgIGxldCBzd2l0Y2hlciA9IHRoaXMuc3RhdGUuc3dpdGNoZXI7XG5cbiAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXgpID0+IChpbmRleCArIHdhbGxwYXBlcnMubGVuZ3RoICsgMSkgJSB3YWxscGFwZXJzLmxlbmd0aDtcblxuICAgIGxldCBuZXdJbmRleCA9IG5leHRJbmRleChzd2l0Y2hlci5pbmRleCk7XG4gICAgbGV0IG5ld1dhbGxwYXBlciA9IHdhbGxwYXBlcnNbbmV3SW5kZXhdO1xuXG4gICAgbGV0IHByZWxvYWRlZEluZGV4ID0gbmV4dEluZGV4KG5ld0luZGV4KTtcbiAgICBsZXQgcHJlbG9hZGVkV2FsbHBhcGVyID0gd2FsbHBhcGVyc1twcmVsb2FkZWRJbmRleF07XG5cbiAgICB0aGlzLnNldFdhbGxwYXBlcihuZXdXYWxscGFwZXIsIHByZWxvYWRlZFdhbGxwYXBlcik7XG5cbiAgICBzd2l0Y2hlci5pbmRleCA9IG5ld0luZGV4O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInN3aXRjaGVyXCI6IHN3aXRjaGVyXG4gICAgfSk7XG4gIH1cblxuXG4gIGhhbmRsZVN3aXRjaGVyQWN0aXZhdGlvbigpIHtcbiAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuICAgIHN3aXRjaGVyLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jeWNsZVdhbGxwYXBlcigpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInN3aXRjaGVyXCI6IHN3aXRjaGVyXG4gICAgfSk7XG4gIH1cblxuXG4gIHJlamVjdFdhbGxwYXBlcigpIHtcbiAgICBsZXQgc2F2ZWRXYWxscGFwZXIgPSB0aGlzLnN0YXRlLnNhdmVkV2FsbHBhcGVyO1xuICAgIGxldCBzd2l0Y2hlciA9IHRoaXMuc3RhdGUuc3dpdGNoZXI7XG5cbiAgICAvLyBSZXNldCBzd2l0Y2hlciBzdGF0ZVxuICAgIHN3aXRjaGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN3aXRjaGVyLmluZGV4ID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzd2l0Y2hlclwiOiBzd2l0Y2hlclxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRXYWxscGFwZXIoc2F2ZWRXYWxscGFwZXIpO1xuXG4gICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJXYWxscGFwZXIgcmVzZXQgdG8gZGVmYXVsdCwgbm8gY2hhbmdlcyBzYXZlZC5cIik7XG4gIH1cblxuXG4gIHNldFdhbGxwYXBlcihuZXdXYWxscGFwZXIsIHByZWxvYWRlZFdhbGxwYXBlcj1mYWxzZSkge1xuICAgIGxldCBzd2l0Y2hlciA9IHRoaXMuc3RhdGUuc3dpdGNoZXI7XG5cbiAgICAvLyBGYWRlb3V0IGZvcmVncm91bmQgd2FsbHBhcGVyIHRvIG5ldyB3YWxscGFwZXJcbiAgICBsZXQgZGlyZWN0b3J5ID0gdGhpcy5zdGF0ZS5kaXJlY3Rvcnk7XG4gICAgdGhpcy5jeWNsZXJCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2RpcmVjdG9yeX0ke25ld1dhbGxwYXBlcn0nKWA7XG4gICAgdGhpcy5jeWNsZXJCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQuY2xhc3NOYW1lICs9IFwiIGZhZGVvdXRcIjtcblxuICAgIHN3aXRjaGVyLmN1cnJlbnRseUZhZGluZyA9IHRydWU7XG5cbiAgICBpZiAocHJlbG9hZGVkV2FsbHBhcGVyICE9PSBmYWxzZSkge1xuICAgICAgLy8gUHJlbG9hZCB0aGUgbmV4dCBpbWFnZVxuICAgICAgdGhpcy5jeWNsZXJQcmVsb2FkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7ZGlyZWN0b3J5fSR7cHJlbG9hZGVkV2FsbHBhcGVyfScpYDtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIEN5Y2xlIG5ldyB3YWxscGFwZXIgYmFjayB0byB0aGUgZnJvbnQsIG1ha2UgaXQgdmlzaWJsZSBhZ2Fpbi5cbiAgICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtkaXJlY3Rvcnl9JHtuZXdXYWxscGFwZXJ9JylgO1xuICAgICAgdGhpcy5jeWNsZXJGb3JlZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZC5jbGFzc05hbWUgPSB0aGlzLmN5Y2xlckZvcmVncm91bmQuY2xhc3NOYW1lLnJlcGxhY2UoXCIgZmFkZW91dFwiLCBcIlwiKTtcblxuICAgICAgbGV0IHN3aXRjaGVyID0gdGhpcy5zdGF0ZS5zd2l0Y2hlcjtcbiAgICAgIHN3aXRjaGVyLmN1cnJlbnRseUZhZGluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgXCJzZWxlY3RlZFdhbGxwYXBlclwiOiBuZXdXYWxscGFwZXIsXG4gICAgICAgIFwic3dpdGNoZXJcIjogc3dpdGNoZXJcbiAgICAgIH0pO1xuICAgIH0sIEZBREVPVVRfVElNRSk7XG4gIH1cblxuXG4gIGdlbmVyYXRlT3B0aW9ucygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFsnb3B0aW9ucyddO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb25zLXdyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tcmVqZWN0XCIgb25DbGljaz17IHRoaXMucmVqZWN0V2FsbHBhcGVyLmJpbmQodGhpcykgfSA+4pyVPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYWNjZXB0XCIgb25DbGljaz17IHRoaXMuYWNjZXB0V2FsbHBhcGVyLmJpbmQodGhpcykgfSA+4pyTPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5nZW5lcmF0ZU9wdGlvbnMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3Ryby13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzdHJvLWxvZ29cIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVTd2l0Y2hlckFjdGl2YXRpb24uYmluZCh0aGlzKSB9PjwvZGl2PlxuICAgICAgICB7IG9wdGlvbnMgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1dhbGxwYXBlclN3aXRjaGVyLmpzeCIsIi8vIFdhbGxwYXBlck9wZXJhdGlvbnMgLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9XYWxscGFwZXJTd2l0Y2hlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExpZ2h0RE0gcmVsYXRlZCBXYWxscGFwZXIgY29uZmlnIC8gZmV0Y2hpbmcuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXYWxscGFwZXJEaXJlY3RvcnkoKSB7XG4gIC8vIFJldHVybiB0aGUgdGVzdCBmb2xkZXIgd2hlbiBkZWJ1Z2dpbmcuXG4gIGlmICh3aW5kb3cuZGVidWcgPT09IHRydWUpIHtcbiAgICByZXR1cm4gXCJzcmMvdGVzdC93YWxscGFwZXJzL1wiO1xuICB9XG5cbiAgbGV0IHdhbGxwYXBlcnNEaXJlY3RvcnkgPSB3aW5kb3cuY29uZmlnLmdldF9zdHIoXCJicmFuZGluZ1wiLCBcImJhY2tncm91bmRfaW1hZ2VzXCIpO1xuXG4gIC8vIERvIE5PVCBhbGxvdyB0aGUgZGVmYXVsdCB3YWxscGFwZXIgZGlyZWN0b3J5IHRvIHNldCwgYXMgdGhpcyB3aWxsIHByZXZlbnQgdGhlIGRlZmF1bHQgcHJvdmlkZWQgYmFja2dyb3VuZHMgZnJvbVxuICAvLyBiZWluZyB1c2VkIDEwMCUgb2YgdGhlIHRpbWUgaW4gYSBzdG9jayBpbnN0YWxsLlxuICBpZiAod2FsbHBhcGVyc0RpcmVjdG9yeSA9PSBcIi91c3Ivc2hhcmUvYmFja2dyb3VuZHNcIiB8fCB3YWxscGFwZXJzRGlyZWN0b3J5ID09IFwiL3Vzci9zaGFyZS9iYWNrZ3JvdW5kcy9cIikge1xuICAgIHdhbGxwYXBlcnNEaXJlY3RvcnkgPSBcIi91c3Ivc2hhcmUvbGlnaHRkbS13ZWJraXQvdGhlbWVzL2xpZ2h0ZG0td2Via2l0LXRoZW1lLWFldGhlci9zcmMvaW1nL3dhbGxwYXBlcnMvXCI7XG4gIH1cblxuICByZXR1cm4gd2FsbHBhcGVyc0RpcmVjdG9yeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdhbGxwYXBlcnMoZGlyZWN0b3J5KSB7XG4gIC8vIElmIHdlJ3JlIGluIHRlc3QgbW9kZSwgd2Ugc3RpY2sgdG8gYSBzdGF0aWMgcm90YXRpb24gb2YgdGhyZWUgZGVmYXVsdCB3YWxscGFwZXJzLlxuICAvLyBJbiBwcm9kdWN0aW9uLCBpdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3aWxsIGNoYW5nZSB3aGF0IHdhbGxwYXBlcnMgYXJlIGF2YWlsYWJsZS5cbiAgaWYgKHdpbmRvdy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBbJ2Jva28uanBnJywgJ21vdW50YWlucy0yLnBuZycsICdzcGFjZS0xLmpwZyddO1xuICB9XG5cbiAgbGV0IHdhbGxwYXBlcnM7XG5cbiAgd2FsbHBhcGVycyA9IHdpbmRvdy5ncmVldGVydXRpbC5kaXJsaXN0KGRpcmVjdG9yeSk7XG4gIHdhbGxwYXBlcnMgPSB3YWxscGFwZXJzLm1hcCgoZSwgaSwgYSkgPT4gZS5zcGxpdChcIi9cIikucG9wKCkpO1xuXG4gIHJldHVybiB3YWxscGFwZXJzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Mb2dpYy9XYWxscGFwZXJPcGVyYXRpb25zLmpzIiwiZXhwb3J0IGNvbnN0IHBhZFplcm9lcyA9IChpKSA9PiB7XG4gIHJldHVybiAoaSA8IDEwKSA/IFwiMFwiICsgaSA6IGk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9VdGlscy9VdGlscy5qcyIsImltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vVXRpbHMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgQ29tbWFuZFBhbmVsIGZyb20gJy4vQ29tcG9uZW50cy9Db21tYW5kUGFuZWwnO1xuaW1wb3J0IERhdGVEaXNwbGF5IGZyb20gJy4vQ29tcG9uZW50cy9EYXRlRGlzcGxheSc7XG5pbXBvcnQgVXNlclBhbmVsIGZyb20gJy4vQ29tcG9uZW50cy9Vc2VyUGFuZWwnO1xuXG5pbXBvcnQgeyBnZXREZWZhdWx0U3RhdGUsIFByaW1hcnlSZWR1Y2VyIH0gZnJvbSAnLi9SZWR1Y2Vycy9QcmltYXJ5UmVkdWNlcic7XG5pbXBvcnQgeyBhZGRBZGRpdGlvbmFsU2V0dGluZ3MgfSBmcm9tICcuL1JlZHVjZXJzL1NldHRpbmdzUmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGxldCBpbml0aWFsU3RhdGUgPSBnZXREZWZhdWx0U3RhdGUoKTtcbiAgaW5pdGlhbFN0YXRlID0gYWRkQWRkaXRpb25hbFNldHRpbmdzKGluaXRpYWxTdGF0ZSk7XG5cbiAgbGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoUHJpbWFyeVJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgSW5mZXJuby5yZW5kZXIoPENvbW1hbmRQYW5lbCBzdG9yZT17IHN0b3JlIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWFuZC1wYW5lbFwiKSk7XG4gIEluZmVybm8ucmVuZGVyKDxVc2VyUGFuZWwgc3RvcmU9eyBzdG9yZSB9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcGFuZWxcIikpO1xuICBJbmZlcm5vLnJlbmRlcig8RGF0ZURpc3BsYXkgc3RvcmU9eyBzdG9yZSB9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtZGlzcGxheVwiKSk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoZSkgPT4ge1xuICAvLyBBZGQgbm90aWZpY2F0aW9ucyB0byB0aGUgZ2xvYmFsIHNjb3BlIGZvciBlcnJvciBoYW5kbGluZ1xuICB3aW5kb3cubm90aWZpY2F0aW9ucyA9IG5ldyBOb3RpZmljYXRpb25zKCk7XG5cbiAgTWFpbigpO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9NYWluLmpzeCIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCIvKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgdmFyIGxhc3QgPSBmdW5jc1tmdW5jcy5sZW5ndGggLSAxXTtcbiAgdmFyIHJlc3QgPSBmdW5jcy5zbGljZSgwLCAtMSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc3QucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGNvbXBvc2VkLCBmKSB7XG4gICAgICByZXR1cm4gZihjb21wb3NlZCk7XG4gICAgfSwgbGFzdC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvY29tcG9zZS5qcyIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5oYW5jZXIgVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy9jcmVhdGVTdG9yZS5qcyIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2luZGV4LmpzIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG92ZXJBcmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fcm9vdC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgJyArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsImltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSAnLi9jcmVhdGVTdG9yZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbk5hbWUgPSBhY3Rpb25UeXBlICYmICdcIicgKyBhY3Rpb25UeXBlLnRvU3RyaW5nKCkgKyAnXCInIHx8ICdhbiBhY3Rpb24nO1xuXG4gIHJldHVybiAnR2l2ZW4gYWN0aW9uICcgKyBhY3Rpb25OYW1lICsgJywgcmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnICsgJ1RvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4nO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2FuaXR5KHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2FuaXR5RXJyb3I7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNhbml0eShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNhbml0eUVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNhbml0eUVycm9yKSB7XG4gICAgICB0aHJvdyBzYW5pdHlFcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGZpbmFsUmVkdWNlcktleXNbaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNba2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcG9ueWZpbGwgPSByZXF1aXJlKCcuL3BvbnlmaWxsJyk7XG5cbnZhciBfcG9ueWZpbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ueWZpbGwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciByb290OyAvKiBnbG9iYWwgd2luZG93ICovXG5cblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gKDAsIF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7XG5leHBvcnRzWydkZWZhdWx0J10gPSByZXN1bHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=