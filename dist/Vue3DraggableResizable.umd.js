(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue3DraggableResizable"] = factory(require("vue"));
	else
		root["Vue3DraggableResizable"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DraggableContainer", function() { return /* reexport */ DraggableContainer; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// CONCATENATED MODULE: ./src/components/utils.ts


const IDENTITY = Symbol('Vue3DraggableResizable');
function getElSize(el) {
  const style = window.getComputedStyle(el);
  return {
    width: parseFloat(style.getPropertyValue('width')),
    height: parseFloat(style.getPropertyValue('height'))
  };
}
function createEventListenerFunction(type) {
  return (el, events, handler) => {
    if (!el) {
      return;
    }
    if (typeof events === 'string') {
      events = [events];
    }
    events.forEach(e => el[type](e, handler, {
      passive: false
    }));
  };
}
const addEvent = createEventListenerFunction('addEventListener');
const removeEvent = createEventListenerFunction('removeEventListener');
function filterHandles(handles) {
  if (handles && handles.length > 0) {
    const result = [];
    handles.forEach(item => {
      if (ALL_HANDLES.includes(item) && !result.includes(item)) {
        result.push(item);
      }
    });
    return result;
  } else {
    return [];
  }
}
function getId() {
  return String(Math.random()).substr(2) + String(Date.now());
}
function getReferenceLineMap(containerProvider, parentSize, id) {
  if (containerProvider.disabled.value) {
    return null;
  }
  const referenceLine = {
    row: [],
    col: []
  };
  const {
    parentWidth,
    parentHeight
  } = parentSize;
  referenceLine.row.push(...containerProvider.adsorbRows);
  referenceLine.col.push(...containerProvider.adsorbCols);
  if (containerProvider.adsorbParent.value) {
    // Defaults only apply when no given values
    if (referenceLine.row.length == 0) {
      referenceLine.row.push(0, parentHeight.value, parentHeight.value / 2);
    }
    if (referenceLine.col.length == 0) {
      referenceLine.col.push(0, parentWidth.value, parentWidth.value / 2);
    }
  }
  const widgetPositionStore = containerProvider.getPositionStore(id);
  Object.values(widgetPositionStore).forEach(({
    x,
    y,
    w,
    h
  }) => {
    referenceLine.row.push(y, y + h, y + h / 2);
    referenceLine.col.push(x, x + w, x + w / 2);
  });
  const referenceLineMap = {
    row: referenceLine.row.reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: {
          min: cur - 5,
          max: cur + 5,
          value: cur
        }
      };
    }, {}),
    col: referenceLine.col.reduce((pre, cur) => {
      return {
        ...pre,
        [cur]: {
          min: cur - 5,
          max: cur + 5,
          value: cur
        }
      };
    }, {})
  };
  return referenceLineMap;
}
// CONCATENATED MODULE: ./src/components/hooks.ts


function useState(initialState) {
  const state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(initialState);
  const setState = value => {
    state.value = value;
    return value;
  };
  return [state, setState];
}
function initState(props, emit) {
  const [width, setWidth] = useState(props.initW);
  const [height, setHeight] = useState(props.initH);
  const [left, setLeft] = useState(props.x);
  const [top, setTop] = useState(props.y);
  const [enable, setEnable] = useState(props.active);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [resizingHandle, setResizingHandle] = useState('');
  const [resizingMaxWidth, setResizingMaxWidth] = useState(Infinity);
  const [resizingMaxHeight, setResizingMaxHeight] = useState(Infinity);
  const [resizingMinWidth, setResizingMinWidth] = useState(props.minW);
  const [resizingMinHeight, setResizingMinHeight] = useState(props.minH);
  const aspectRatio = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => height.value / width.value);
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(width, newVal => {
    emit('update:w', newVal);
  }, {
    immediate: true
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(height, newVal => {
    emit('update:h', newVal);
  }, {
    immediate: true
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(top, newVal => {
    emit('update:y', newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(left, newVal => {
    emit('update:x', newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(enable, (newVal, oldVal) => {
    emit('update:active', newVal);
    if (!oldVal && newVal) {
      emit('activated');
    } else if (oldVal && !newVal) {
      emit('deactivated');
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.active, newVal => {
    setEnable(newVal);
  });
  return {
    id: getId(),
    width,
    height,
    top,
    left,
    enable,
    dragging,
    resizing,
    resizingHandle,
    resizingMaxHeight,
    resizingMaxWidth,
    resizingMinWidth,
    resizingMinHeight,
    aspectRatio,
    setEnable,
    setDragging,
    setResizing,
    setResizingHandle,
    setResizingMaxHeight,
    setResizingMaxWidth,
    setResizingMinWidth,
    setResizingMinHeight,
    setWidth: val => setWidth(Math.floor(val)),
    setHeight: val => setHeight(Math.floor(val)),
    setTop: val => setTop(Math.floor(val)),
    setLeft: val => setLeft(Math.floor(val))
  };
}
function initParent(containerRef) {
  const parentWidth = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  const parentHeight = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    if (containerRef.value && containerRef.value.parentElement) {
      const {
        width,
        height
      } = getElSize(containerRef.value.parentElement);
      parentWidth.value = width;
      parentHeight.value = height;
    }
  });
  return {
    parentWidth,
    parentHeight
  };
}
function initLimitSizeAndMethods(props, parentSize, containerProps) {
  const {
    width,
    height,
    left,
    top,
    resizingMaxWidth,
    resizingMaxHeight,
    resizingMinWidth,
    resizingMinHeight
  } = containerProps;
  const {
    setWidth,
    setHeight,
    setTop,
    setLeft
  } = containerProps;
  const {
    parentWidth,
    parentHeight
  } = parentSize;
  const limitProps = {
    minWidth: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return resizingMinWidth.value;
    }),
    minHeight: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return resizingMinHeight.value;
    }),
    maxWidth: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      let max = Infinity;
      if (props.parent) {
        max = Math.min(parentWidth.value, resizingMaxWidth.value);
      }
      return max;
    }),
    maxHeight: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      let max = Infinity;
      if (props.parent) {
        max = Math.min(parentHeight.value, resizingMaxHeight.value);
      }
      return max;
    }),
    minLeft: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? 0 : -Infinity;
    }),
    minTop: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? 0 : -Infinity;
    }),
    maxLeft: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? parentWidth.value - width.value : Infinity;
    }),
    maxTop: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return props.parent ? parentHeight.value - height.value : Infinity;
    })
  };
  const limitMethods = {
    setWidth(val) {
      if (props.disabledW) {
        return width.value;
      }
      return setWidth(Math.min(limitProps.maxWidth.value, Math.max(limitProps.minWidth.value, val)));
    },
    setHeight(val) {
      if (props.disabledH) {
        return height.value;
      }
      return setHeight(Math.min(limitProps.maxHeight.value, Math.max(limitProps.minHeight.value, val)));
    },
    setTop(val) {
      if (props.disabledY) {
        return top.value;
      }
      return setTop(Math.min(limitProps.maxTop.value, Math.max(limitProps.minTop.value, val)));
    },
    setLeft(val) {
      if (props.disabledX) {
        return left.value;
      }
      return setLeft(Math.min(limitProps.maxLeft.value, Math.max(limitProps.minLeft.value, val)));
    }
  };
  return {
    ...limitProps,
    ...limitMethods
  };
}
const DOWN_HANDLES = ['mousedown', 'touchstart'];
const UP_HANDLES = ['mouseup', 'touchend'];
const MOVE_HANDLES = ['mousemove', 'touchmove'];
function getPosition(e) {
  if ('touches' in e) {
    return [e.touches[0].pageX, e.touches[0].pageY];
  } else {
    return [e.pageX, e.pageY];
  }
}
function initDraggableContainer(containerRef, containerProps, limitProps, draggable, emit, containerProvider, parentSize) {
  const {
    left: x,
    top: y,
    width: w,
    height: h,
    dragging,
    id
  } = containerProps;
  const {
    setDragging,
    setEnable,
    setResizing,
    setResizingHandle
  } = containerProps;
  const {
    setTop,
    setLeft
  } = limitProps;
  let lstX = 0;
  let lstY = 0;
  let lstPageX = 0;
  let lstPageY = 0;
  let referenceLineMap = null;
  const documentElement = document.documentElement;
  const _unselect = e => {
    var _containerRef$value;
    const target = e.target;
    if (!((_containerRef$value = containerRef.value) !== null && _containerRef$value !== void 0 && _containerRef$value.contains(target))) {
      setEnable(false);
      setDragging(false);
      setResizing(false);
      setResizingHandle('');
    }
  };
  const handleUp = () => {
    setDragging(false);
    // document.documentElement.removeEventListener('mouseup', handleUp)
    // document.documentElement.removeEventListener('mousemove', handleDrag)
    removeEvent(documentElement, UP_HANDLES, handleUp);
    removeEvent(documentElement, MOVE_HANDLES, handleDrag);
    referenceLineMap = null;
    if (containerProvider) {
      containerProvider.updatePosition(id, {
        x: x.value,
        y: y.value,
        w: w.value,
        h: h.value
      });
      containerProvider.setMatchedLine(null);
    }
  };
  const handleDrag = e => {
    e.preventDefault();
    if (!(dragging.value && containerRef.value)) return;
    const [pageX, pageY] = getPosition(e);
    const deltaX = pageX - lstPageX;
    const deltaY = pageY - lstPageY;
    let newLeft = lstX + deltaX;
    let newTop = lstY + deltaY;
    if (referenceLineMap !== null) {
      const widgetSelfLine = {
        col: [newLeft, newLeft + w.value / 2, newLeft + w.value],
        row: [newTop, newTop + h.value / 2, newTop + h.value]
      };
      const matchedLine = containerProvider.disabled.value ? {
        row: [],
        col: []
      } : {
        row: widgetSelfLine.row.map((i, index) => {
          let match = null;
          Object.values(referenceLineMap.row).forEach(referItem => {
            if (i >= referItem.min && i <= referItem.max) {
              match = referItem.value;
            }
          });
          if (match !== null) {
            if (index === 0) {
              newTop = match;
            } else if (index === 1) {
              newTop = Math.floor(match - h.value / 2);
            } else if (index === 2) {
              newTop = Math.floor(match - h.value);
            }
          }
          return match;
        }).filter(i => i !== null),
        col: widgetSelfLine.col.map((i, index) => {
          let match = null;
          Object.values(referenceLineMap.col).forEach(referItem => {
            if (i >= referItem.min && i <= referItem.max) {
              match = referItem.value;
            }
          });
          if (match !== null) {
            if (index === 0) {
              newLeft = match;
            } else if (index === 1) {
              newLeft = Math.floor(match - w.value / 2);
            } else if (index === 2) {
              newLeft = Math.floor(match - w.value);
            }
          }
          return match;
        }).filter(i => i !== null)
      };
      containerProvider.setMatchedLine(matchedLine);
    }
    emit('dragging', {
      x: setLeft(newLeft),
      y: setTop(newTop)
    });
  };
  const handleDown = e => {
    if (!draggable.value) return;
    setDragging(true);
    lstX = x.value;
    lstY = y.value;
    lstPageX = getPosition(e)[0];
    lstPageY = getPosition(e)[1];
    // document.documentElement.addEventListener('mousemove', handleDrag)
    // document.documentElement.addEventListener('mouseup', handleUp)
    addEvent(documentElement, MOVE_HANDLES, handleDrag);
    addEvent(documentElement, UP_HANDLES, handleUp);
    if (containerProvider) {
      referenceLineMap = getReferenceLineMap(containerProvider, parentSize, id);
    }
  };
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(dragging, (cur, pre) => {
    if (!pre && cur) {
      emit('drag-start', {
        x: x.value,
        y: y.value
      });
      setEnable(true);
      setDragging(true);
    } else {
      emit('drag-end', {
        x: x.value,
        y: y.value
      });
      setDragging(false);
    }
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
    const el = containerRef.value;
    if (!el) return;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    // document.documentElement.addEventListener('mousedown', _unselect)
    // el.addEventListener('mousedown', handleDown)
    addEvent(documentElement, DOWN_HANDLES, _unselect);
    addEvent(el, DOWN_HANDLES, handleDown);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    if (!containerRef.value) return;
    // document.documentElement.removeEventListener('mousedown', _unselect)
    // document.documentElement.removeEventListener('mouseup', handleUp)
    // document.documentElement.removeEventListener('mousemove', handleDrag)
    removeEvent(documentElement, DOWN_HANDLES, _unselect);
    removeEvent(documentElement, UP_HANDLES, handleUp);
    removeEvent(documentElement, MOVE_HANDLES, handleDrag);
  });
  return {
    containerRef
  };
}
function initResizeHandle(containerProps, limitProps, parentSize, props, emit) {
  const {
    setWidth,
    setHeight,
    setLeft,
    setTop
  } = limitProps;
  const {
    width,
    height,
    left,
    top,
    aspectRatio
  } = containerProps;
  const {
    setResizing,
    setResizingHandle,
    setResizingMaxWidth,
    setResizingMaxHeight,
    setResizingMinWidth,
    setResizingMinHeight
  } = containerProps;
  const {
    parentWidth,
    parentHeight
  } = parentSize;
  let lstW = 0;
  let lstH = 0;
  let lstX = 0;
  let lstY = 0;
  let lstPageX = 0;
  let lstPageY = 0;
  let tmpAspectRatio = 1;
  let idx0 = '';
  let idx1 = '';
  const documentElement = document.documentElement;
  const resizeHandleDrag = e => {
    e.preventDefault();
    let [_pageX, _pageY] = getPosition(e);
    let deltaX = _pageX - lstPageX;
    let deltaY = _pageY - lstPageY;
    let _deltaX = deltaX;
    let _deltaY = deltaY;
    if (props.lockAspectRatio) {
      deltaX = Math.abs(deltaX);
      deltaY = deltaX * tmpAspectRatio;
      if (idx0 === 't') {
        if (_deltaX < 0 || idx1 === 'm' && _deltaY < 0) {
          deltaX = -deltaX;
          deltaY = -deltaY;
        }
      } else {
        if (_deltaX < 0 || idx1 === 'm' && _deltaY < 0) {
          deltaX = -deltaX;
          deltaY = -deltaY;
        }
      }
    }
    if (idx0 === 't') {
      setHeight(lstH - deltaY);
      setTop(lstY - (height.value - lstH));
    } else if (idx0 === 'b') {
      setHeight(lstH + deltaY);
    }
    if (idx1 === 'l') {
      setWidth(lstW - deltaX);
      setLeft(lstX - (width.value - lstW));
    } else if (idx1 === 'r') {
      setWidth(lstW + deltaX);
    }
    emit('resizing', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    });
  };
  const resizeHandleUp = () => {
    emit('resize-end', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    });
    setResizingHandle('');
    setResizing(false);
    setResizingMaxWidth(Infinity);
    setResizingMaxHeight(Infinity);
    setResizingMinWidth(props.minW);
    setResizingMinHeight(props.minH);
    // document.documentElement.removeEventListener('mousemove', resizeHandleDrag)
    // document.documentElement.removeEventListener('mouseup', resizeHandleUp)
    removeEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
    removeEvent(documentElement, UP_HANDLES, resizeHandleUp);
  };
  const resizeHandleDown = (e, handleType) => {
    if (!props.resizable) return;
    e.stopPropagation();
    setResizingHandle(handleType);
    setResizing(true);
    idx0 = handleType[0];
    idx1 = handleType[1];
    if (aspectRatio.value) {
      if (['tl', 'tm', 'ml', 'bl'].includes(handleType)) {
        idx0 = 't';
        idx1 = 'l';
      } else {
        idx0 = 'b';
        idx1 = 'r';
      }
    }
    let minHeight = props.minH;
    let minWidth = props.minW;
    if (minHeight / minWidth > aspectRatio.value) {
      minWidth = minHeight / aspectRatio.value;
    } else {
      minHeight = minWidth * aspectRatio.value;
    }
    setResizingMinWidth(minWidth);
    setResizingMinHeight(minHeight);
    if (parent) {
      let maxHeight = idx0 === 't' ? top.value + height.value : parentHeight.value - top.value;
      let maxWidth = idx1 === 'l' ? left.value + width.value : parentWidth.value - left.value;
      if (props.lockAspectRatio) {
        if (maxHeight / maxWidth < aspectRatio.value) {
          maxWidth = maxHeight / aspectRatio.value;
        } else {
          maxHeight = maxWidth * aspectRatio.value;
        }
      }
      setResizingMaxHeight(maxHeight);
      setResizingMaxWidth(maxWidth);
    }
    lstW = width.value;
    lstH = height.value;
    lstX = left.value;
    lstY = top.value;
    const lstPagePosition = getPosition(e);
    lstPageX = lstPagePosition[0];
    lstPageY = lstPagePosition[1];
    tmpAspectRatio = aspectRatio.value;
    emit('resize-start', {
      x: left.value,
      y: top.value,
      w: width.value,
      h: height.value
    });
    // document.documentElement.addEventListener('mousemove', resizeHandleDrag)
    // document.documentElement.addEventListener('mouseup', resizeHandleUp)
    addEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
    addEvent(documentElement, UP_HANDLES, resizeHandleUp);
  };
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
    // document.documentElement.removeEventListener('mouseup', resizeHandleDrag)
    // document.documentElement.removeEventListener('mousemove', resizeHandleUp)
    removeEvent(documentElement, UP_HANDLES, resizeHandleUp);
    removeEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
  });
  const handlesFiltered = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => props.resizable ? filterHandles(props.handles) : []);
  return {
    handlesFiltered,
    resizeHandleDown
  };
}
function watchProps(props, limits) {
  const {
    setWidth,
    setHeight,
    setLeft,
    setTop
  } = limits;
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.w, newVal => {
    setWidth(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.h, newVal => {
    setHeight(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.x, newVal => {
    setLeft(newVal);
  });
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(() => props.y, newVal => {
    setTop(newVal);
  });
}
// EXTERNAL MODULE: ./src/components/index.css
var components = __webpack_require__("fc27");

// CONCATENATED MODULE: ./src/components/Vue3DraggableResizable.ts




const ALL_HANDLES = ['tl', 'tm', 'tr', 'ml', 'mr', 'bl', 'bm', 'br'];
const VdrProps = {
  initW: {
    type: Number,
    default: null
  },
  initH: {
    type: Number,
    default: null
  },
  w: {
    type: Number,
    default: 0
  },
  h: {
    type: Number,
    default: 0
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
  draggable: {
    type: Boolean,
    default: true
  },
  resizable: {
    type: Boolean,
    default: true
  },
  disabledX: {
    type: Boolean,
    default: false
  },
  disabledY: {
    type: Boolean,
    default: false
  },
  disabledW: {
    type: Boolean,
    default: false
  },
  disabledH: {
    type: Boolean,
    default: false
  },
  minW: {
    type: Number,
    default: 20
  },
  minH: {
    type: Number,
    default: 20
  },
  active: {
    type: Boolean,
    default: false
  },
  parent: {
    type: Boolean,
    default: false
  },
  handles: {
    type: Array,
    default: ALL_HANDLES,
    validator: handles => {
      return filterHandles(handles).length === handles.length;
    }
  },
  classNameDraggable: {
    type: String,
    default: 'draggable'
  },
  classNameResizable: {
    type: String,
    default: 'resizable'
  },
  classNameDragging: {
    type: String,
    default: 'dragging'
  },
  classNameResizing: {
    type: String,
    default: 'resizing'
  },
  classNameActive: {
    type: String,
    default: 'active'
  },
  classNameHandle: {
    type: String,
    default: 'handle'
  },
  lockAspectRatio: {
    type: Boolean,
    default: false
  }
};
const emits = ['activated', 'deactivated', 'drag-start', 'resize-start', 'dragging', 'resizing', 'drag-end', 'resize-end', 'update:w', 'update:h', 'update:x', 'update:y', 'update:active'];
const VueDraggableResizable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'Vue3DraggableResizable',
  props: VdrProps,
  emits: emits,
  setup(props, {
    emit
  }) {
    const containerProps = initState(props, emit);
    const provideIdentity = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('identity');
    let containerProvider = null;
    if (provideIdentity === IDENTITY) {
      containerProvider = {
        updatePosition: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('updatePosition'),
        removePosition: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('removePosition'),
        getPositionStore: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('getPositionStore'),
        disabled: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('disabled'),
        adsorbParent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('adsorbParent'),
        adsorbCols: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('adsorbCols'),
        adsorbRows: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('adsorbRows'),
        setMatchedLine: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('setMatchedLine')
      };
    }
    const containerRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    const parentSize = initParent(containerRef);
    const limitProps = initLimitSizeAndMethods(props, parentSize, containerProps);
    initDraggableContainer(containerRef, containerProps, limitProps, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRef"])(props, 'draggable'), emit, containerProvider, parentSize);
    const resizeHandle = initResizeHandle(containerProps, limitProps, parentSize, props, emit);
    watchProps(props, limitProps);
    return {
      containerRef,
      containerProvider,
      ...containerProps,
      ...parentSize,
      ...limitProps,
      ...resizeHandle
    };
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        top: this.top + 'px',
        left: this.left + 'px'
      };
    },
    klass() {
      return {
        [this.classNameActive]: this.enable,
        [this.classNameDragging]: this.dragging,
        [this.classNameResizing]: this.resizing,
        [this.classNameDraggable]: this.draggable,
        [this.classNameResizable]: this.resizable
      };
    }
  },
  mounted() {
    if (!this.containerRef) return;
    this.containerRef.ondragstart = () => false;
    const {
      width,
      height
    } = getElSize(this.containerRef);
    this.setWidth(this.initW === null ? this.w || width : this.initW);
    this.setHeight(this.initH === null ? this.h || height : this.initH);
    if (this.containerProvider) {
      this.containerProvider.updatePosition(this.id, {
        x: this.left,
        y: this.top,
        w: this.width,
        h: this.height
      });
    }
  },
  unmounted() {
    if (this.containerProvider) this.containerProvider.removePosition(this.id);
  },
  render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
      ref: 'containerRef',
      class: ['vdr-container', this.klass],
      style: this.style
    }, [this.$slots.default && this.$slots.default(), ...this.handlesFiltered.map(item => Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
      class: ['vdr-handle', 'vdr-handle-' + item, this.classNameHandle, `${this.classNameHandle}-${item}`],
      style: {
        display: this.enable ? 'block' : 'none'
      },
      onMousedown: e => this.resizeHandleDown(e, item),
      onTouchstart: e => this.resizeHandleDown(e, item)
    }))]);
  }
});
/* harmony default export */ var Vue3DraggableResizable = (VueDraggableResizable);
// CONCATENATED MODULE: ./src/components/DraggableContainer.ts


/* harmony default export */ var DraggableContainer = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'DraggableContainer',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    adsorbParent: {
      type: Boolean,
      default: true
    },
    adsorbCols: {
      type: Array,
      default: null
    },
    adsorbRows: {
      type: Array,
      default: null
    },
    referenceLineVisible: {
      type: Boolean,
      default: true
    },
    referenceLineColor: {
      type: String,
      default: '#f00'
    }
  },
  setup(props) {
    const positionStore = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({});
    const updatePosition = (id, position) => {
      positionStore[id] = position;
    };
    const removePosition = id => {
      delete positionStore[id];
    };
    const getPositionStore = excludeId => {
      const _positionStore = Object.assign({}, positionStore);
      if (excludeId) {
        delete _positionStore[excludeId];
      }
      return _positionStore;
    };
    const state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      matchedLine: null
    });
    const matchedRows = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => state.matchedLine && state.matchedLine.row || []);
    const matchedCols = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => state.matchedLine && state.matchedLine.col || []);
    const setMatchedLine = matchedLine => {
      state.matchedLine = matchedLine;
    };
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('identity', IDENTITY);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('updatePosition', updatePosition);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('removePosition', removePosition);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('getPositionStore', getPositionStore);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('setMatchedLine', setMatchedLine);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('disabled', Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRef"])(props, 'disabled'));
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('adsorbParent', Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRef"])(props, 'adsorbParent'));
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('adsorbCols', props.adsorbCols || []);
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('adsorbRows', props.adsorbRows || []);
    return {
      matchedRows,
      matchedCols
    };
  },
  methods: {
    renderReferenceLine() {
      if (!this.referenceLineVisible) {
        return [];
      }
      return [...this.matchedCols.map(item => {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
          style: {
            width: '0',
            height: '100%',
            top: '0',
            left: item + 'px',
            borderLeft: `1px dashed ${this.referenceLineColor}`,
            position: 'absolute'
          }
        });
      }), ...this.matchedRows.map(item => {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
          style: {
            width: '100%',
            height: '0',
            left: '0',
            top: item + 'px',
            borderTop: `1px dashed ${this.referenceLineColor}`,
            position: 'absolute'
          }
        });
      })];
    }
  },
  render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])('div', {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative'
      }
    }, [this.$slots.default && this.$slots.default(), ...this.renderReferenceLine()]);
  }
}));
// CONCATENATED MODULE: ./src/index.ts


Vue3DraggableResizable.install = app => {
  app.component(Vue3DraggableResizable.name, Vue3DraggableResizable);
  app.component(DraggableContainer.name, DraggableContainer);
  return app;
};

/* harmony default export */ var src_0 = (Vue3DraggableResizable);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc27":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ })

/******/ });
});
//# sourceMappingURL=Vue3DraggableResizable.umd.js.map