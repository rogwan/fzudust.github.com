(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./node_modules/antd/lib/_util/warning.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/_util/warning.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _warning = __webpack_require__(/*! warning */ "./node_modules/antd/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var warned = {};

exports['default'] = function (valid, message) {
    if (!valid && !warned[message]) {
        (0, _warning2['default'])(false, message);
        warned[message] = true;
    }
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/icon/IconFont.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/icon/IconFont.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = create;

var _index = __webpack_require__(/*! ./index */ "./node_modules/antd/lib/icon/index.js");

var _index2 = _interopRequireDefault(_index);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var customCache = new Set();
function create() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var scriptUrl = options.scriptUrl,
        _options$extraCommonP = options.extraCommonProps,
        extraCommonProps = _options$extraCommonP === undefined ? {} : _options$extraCommonP;
    /**
     * DOM API required.
     * Make sure in browser environment.
     * The Custom Icon will create a <script/>
     * that loads SVG symbols and insert the SVG Element into the document body.
     */

    if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
        var script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        customCache.add(scriptUrl);
        document.body.appendChild(script);
    }
    var Iconfont = function Iconfont(props) {
        var type = props.type,
            children = props.children,
            restProps = __rest(props, ["type", "children"]);
        // component > children > type


        var content = null;
        if (props.type) {
            content = React.createElement('use', { xlinkHref: '#' + type });
        }
        if (children) {
            content = children;
        }
        return React.createElement(
            _index2['default'],
            (0, _extends3['default'])({}, restProps, extraCommonProps),
            content
        );
    };
    Iconfont.displayName = 'Iconfont';
    return Iconfont;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/icon/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/icon/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(/*! react */ "react");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _dist = __webpack_require__(/*! @ant-design/icons/lib/dist */ "./node_modules/@ant-design/icons/lib/dist.js");

var allIcons = _interopRequireWildcard(_dist);

var _iconsReact = __webpack_require__(/*! @ant-design/icons-react */ "./node_modules/@ant-design/icons-react/es/index.js");

var _iconsReact2 = _interopRequireDefault(_iconsReact);

var _IconFont = __webpack_require__(/*! ./IconFont */ "./node_modules/antd/lib/icon/IconFont.js");

var _IconFont2 = _interopRequireDefault(_IconFont);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/antd/lib/icon/utils.js");

var _warning = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _twoTonePrimaryColor = __webpack_require__(/*! ./twoTonePrimaryColor */ "./node_modules/antd/lib/icon/twoTonePrimaryColor.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

// Initial setting
_iconsReact2['default'].add.apply(_iconsReact2['default'], (0, _toConsumableArray3['default'])(Object.keys(allIcons).map(function (key) {
    return allIcons[key];
})));
(0, _twoTonePrimaryColor.setTwoToneColor)('#1890ff');
var defaultTheme = 'outlined';
var dangerousTheme = undefined;
var Icon = function Icon(props) {
    var _classNames;

    var className = props.className,
        type = props.type,
        Component = props.component,
        viewBox = props.viewBox,
        spin = props.spin,
        children = props.children,
        theme = props.theme,
        twoToneColor = props.twoToneColor,
        restProps = __rest(props, ["className", "type", "component", "viewBox", "spin", "children", "theme", "twoToneColor"]);

    (0, _warning2['default'])(Boolean(type || Component || children), 'Icon should have `type` prop or `component` prop or `children`.');
    var classString = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, 'anticon', true), (0, _defineProperty3['default'])(_classNames, 'anticon-' + type, Boolean(type)), _classNames), className);
    var svgClassString = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, 'anticon-spin', !!spin || type === 'loading'));
    var innerNode = void 0;
    // component > children > type
    if (Component) {
        var innerSvgProps = (0, _extends3['default'])({}, _utils.svgBaseProps, { className: svgClassString, viewBox: viewBox });
        if (!viewBox) {
            delete innerSvgProps.viewBox;
        }
        innerNode = React.createElement(
            Component,
            innerSvgProps,
            children
        );
    }
    if (children) {
        (0, _warning2['default'])(Boolean(viewBox) || React.Children.count(children) === 1 && React.isValidElement(children) && React.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
        var _innerSvgProps = (0, _extends3['default'])({}, _utils.svgBaseProps, { className: svgClassString });
        innerNode = React.createElement(
            'svg',
            (0, _extends3['default'])({}, _innerSvgProps, { viewBox: viewBox }),
            children
        );
    }
    if (typeof type === 'string') {
        var computedType = type;
        if (theme) {
            var themeInName = (0, _utils.getThemeFromTypeName)(type);
            (0, _warning2['default'])(!themeInName || theme === themeInName, 'The icon name \'' + type + '\' already specify a theme \'' + themeInName + '\',' + (' the \'theme\' prop \'' + theme + '\' will be ignored.'));
        }
        computedType = (0, _utils.withThemeSuffix)((0, _utils.removeTypeTheme)(type), dangerousTheme || theme || defaultTheme);
        innerNode = React.createElement(_iconsReact2['default'], { className: svgClassString, type: computedType, primaryColor: twoToneColor });
    }
    return React.createElement(
        'i',
        (0, _extends3['default'])({}, restProps, { className: classString }),
        innerNode
    );
};
function unstable_ChangeThemeOfIconsDangerously(theme) {
    (0, _warning2['default'])(false, 'You are using the unstable method \'Icon.unstable_ChangeThemeOfAllIconsDangerously\', ' + ('make sure that all the icons with theme \'' + theme + '\' display correctly.'));
    dangerousTheme = theme;
}
function unstable_ChangeDefaultThemeOfIcons(theme) {
    (0, _warning2['default'])(false, 'You are using the unstable method \'Icon.unstable_ChangeDefaultThemeOfIcons\', ' + ('make sure that all the icons with theme \'' + theme + '\' display correctly.'));
    defaultTheme = theme;
}
Icon.createFromIconfontCN = _IconFont2['default'];
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/icon/twoTonePrimaryColor.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/icon/twoTonePrimaryColor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setTwoToneColor = setTwoToneColor;
exports.getTwoToneColor = getTwoToneColor;

var _iconsReact = __webpack_require__(/*! @ant-design/icons-react */ "./node_modules/@ant-design/icons-react/es/index.js");

var _iconsReact2 = _interopRequireDefault(_iconsReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function setTwoToneColor(primaryColor) {
    return _iconsReact2['default'].setTwoToneColors({
        primaryColor: primaryColor
    });
}
function getTwoToneColor() {
    var colors = _iconsReact2['default'].getTwoToneColors();
    return colors.primaryColor;
}

/***/ }),

/***/ "./node_modules/antd/lib/icon/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/icon/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.svgBaseProps = undefined;

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _svgBaseProps;

exports.getThemeFromTypeName = getThemeFromTypeName;
exports.removeTypeTheme = removeTypeTheme;
exports.withThemeSuffix = withThemeSuffix;

var _warning = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = exports.svgBaseProps = (_svgBaseProps = {
    width: "1em",
    height: "1em",
    fill: "currentColor"
}, (0, _defineProperty3["default"])(_svgBaseProps, "aria-hidden", "true"), (0, _defineProperty3["default"])(_svgBaseProps, "focusable", "false"), _svgBaseProps);
var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;
function getThemeFromTypeName(type) {
    var result = null;
    if (fillTester.test(type)) {
        result = "filled";
    } else if (outlineTester.test(type)) {
        result = "outlined";
    } else if (twoToneTester.test(type)) {
        result = "twoTone";
    }
    return result;
}
function removeTypeTheme(type) {
    return type.replace(fillTester, "").replace(outlineTester, "").replace(twoToneTester, "");
}
function withThemeSuffix(type, theme) {
    var result = type;
    if (theme === "filled") {
        result += "-fill";
    } else if (theme === "outlined") {
        result += "-o";
    } else if (theme === "twoTone") {
        result += "-twotone";
    } else {
        (0, _warning2["default"])(false, "This icon '" + type + "' has unknown theme '" + theme + "'");
    }
    return result;
}

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/get.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/get.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/rc-slider/es/Handle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Handle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Handle = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Handle, _React$Component);

  function Handle() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Handle);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Handle.__proto__ || Object.getPrototypeOf(Handle)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Handle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          vertical = _props.vertical,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value']);

      var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
      var elStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, postionStyle);
      var ariaProps = {};
      if (value !== undefined) {
        ariaProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, ariaProps, {
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-disabled': !!disabled
        });
      }
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('div', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        role: 'slider'
      }, ariaProps, restProps, {
        className: className,
        style: elStyle
      }));
    }
  }]);

  return Handle;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Handle);


Handle.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  min: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
};

/***/ }),

/***/ "./node_modules/rc-slider/es/Range.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/Range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");







/* eslint-disable react/prop-types */








var Range = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Range, _React$Component);

  function Range(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Range);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onEnd = function () {
      _this.setState({ handle: null });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(null, Array(count + 1)).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v) {
      return _this.trimAlignValue(v);
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Range, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
      if (this.props.min === nextProps.min && this.props.max === nextProps.max && shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.props.value, nextProps.value)) {
        return;
      }
      var bounds = this.state.bounds;

      var value = nextProps.value || bounds;
      var nextBounds = value.map(function (v) {
        return _this2.trimAlignValue(v, nextProps);
      });
      if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
        return v === bounds[i];
      })) return;

      this.setState({ bounds: nextBounds });
      if (bounds.some(function (v) {
        return _utils__WEBPACK_IMPORTED_MODULE_13__["isValueOutOfRange"](v, nextProps);
      })) {
        this.props.onChange(nextBounds);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      } else if (state.handle !== undefined) {
        this.setState({ handle: state.handle });
      }

      var data = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.state, state);
      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      var props = this.props;
      var state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      var closestBound = this.getClosestBound(value);
      var boundNeedMoving = this.getBoundNeedMoving(value, closestBound);

      this.setState({
        handle: boundNeedMoving,
        recent: boundNeedMoving
      });

      var prevValue = bounds[boundNeedMoving];
      if (value === prevValue) return;

      var nextBounds = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.bounds));
      nextBounds[boundNeedMoving] = value;
      this.onChange({ bounds: nextBounds });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_13__["pauseEvent"](e);
      var props = this.props;
      var state = this.state;

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;

      var nextBounds = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(state.bounds));
      nextBounds[state.handle] = value;
      var nextHandle = state.handle;
      if (props.pushable !== false) {
        var originalValue = state.bounds[nextHandle];
        this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }
      this.onChange({
        handle: nextHandle,
        bounds: nextBounds
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: 'getClosestBound',
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;

      var closestBound = 0;
      for (var i = 1; i < bounds.length - 1; ++i) {
        if (value > bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound = closestBound + 1;
      }
      return closestBound;
    }
  }, {
    key: 'getBoundNeedMoving',
    value: function getBoundNeedMoving(value, closestBound) {
      var _state = this.state,
          bounds = _state.bounds,
          recent = _state.recent;

      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
      if (isAtTheSamePoint) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
      return boundNeedMoving;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      var bounds = this.state.bounds;

      return bounds[bounds.length - 1];
    }

    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: 'getPoints',
    value: function getPoints() {
      var _props = this.props,
          marks = _props.marks,
          step = _props.step,
          min = _props.min,
          max = _props.max;

      var cache = this._getPointsCache;
      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, marks);
        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }
        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this._getPointsCache = { marks: marks, step: step, points: points };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: 'pushSurroundingHandles',
    value: function pushSurroundingHandles(bounds, handle, originalValue) {
      var threshold = this.props.pushable;

      var value = bounds[handle];

      var direction = 0;
      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }
      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        bounds[handle] = originalValue;
      }
    }
  }, {
    key: 'pushHandle',
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];
      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          bounds[handle] = originalValue;
          return false;
        }
        currentValue = bounds[handle];
      }
      // the handle was pushed enough to create the needed `amount` gap
      return true;
    }
  }, {
    key: 'pushHandleOnePoint',
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;
      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }
      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var threshold = this.props.pushable;

      var diffToNext = direction * (bounds[nextHandle] - nextValue);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      }
      // push the handle
      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mergedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.props, nextProps);
      var valInRange = _utils__WEBPACK_IMPORTED_MODULE_13__["ensureValueInRange"](v, mergedProps);
      var valNotConflict = this.ensureValueNotConflict(valInRange, mergedProps);
      return _utils__WEBPACK_IMPORTED_MODULE_13__["ensureValuePrecision"](valNotConflict, mergedProps);
    }
  }, {
    key: 'ensureValueNotConflict',
    value: function ensureValueNotConflict(val, _ref) {
      var allowCross = _ref.allowCross;

      var state = this.state || {};
      var handle = state.handle,
          bounds = state.bounds;
      /* eslint-disable eqeqeq */

      if (!allowCross && handle != null) {
        if (handle > 0 && val <= bounds[handle - 1]) {
          return bounds[handle - 1];
        }
        if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
          return bounds[handle + 1];
        }
      }
      /* eslint-enable eqeqeq */
      return val;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          handle = _state2.handle,
          bounds = _state2.bounds;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          vertical = _props2.vertical,
          included = _props2.included,
          disabled = _props2.disabled,
          min = _props2.min,
          max = _props2.max,
          handleGenerator = _props2.handle,
          trackStyle = _props2.trackStyle,
          handleStyle = _props2.handleStyle;


      var offsets = bounds.map(function (v) {
        return _this3.calcOffset(v);
      });

      var handleClassName = prefixCls + '-handle';
      var handles = bounds.map(function (v, i) {
        var _classNames;

        return handleGenerator({
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, handleClassName, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
          vertical: vertical,
          offset: offsets[i],
          value: v,
          dragging: handle === i,
          index: i,
          min: min,
          max: max,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this3.saveHandle(i, h);
          }
        });
      });

      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-track', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: trackClassName,
          vertical: vertical,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });

      return { tracks: tracks, handles: handles };
    }
  }]);

  return Range;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Range.displayName = 'Range';
Range.propTypes = {
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number),
  value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number),
  count: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  pushable: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number]),
  allowCross: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_12__["default"])(Range));

/***/ }),

/***/ "./node_modules/rc-slider/es/Slider.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Slider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");





/* eslint-disable react/prop-types */







var Slider = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Slider, _React$Component);

  function Slider(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Slider);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (true) {
      warning__WEBPACK_IMPORTED_MODULE_7___default()(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      warning__WEBPACK_IMPORTED_MODULE_7___default()(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Slider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

      var prevValue = this.state.value;
      var value = nextProps.value !== undefined ? nextProps.value : prevValue;
      var nextValue = this.trimAlignValue(value, nextProps);
      if (nextValue === prevValue) return;

      this.setState({ value: nextValue });
      if (_utils__WEBPACK_IMPORTED_MODULE_10__["isValueOutOfRange"](value, nextProps)) {
        this.props.onChange(nextValue);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      }

      var changedValue = state.value;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      this.setState({ dragging: true });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      if (value === prevValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_10__["pauseEvent"](e);
      var state = this.state;
      var value = this.calcValueByPos(position);
      var oldValue = state.value;
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.props.min;
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      return this.state.value;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mergedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, nextProps);
      var val = _utils__WEBPACK_IMPORTED_MODULE_10__["ensureValueInRange"](v, mergedProps);
      return _utils__WEBPACK_IMPORTED_MODULE_10__["ensureValuePrecision"](val, mergedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          included = _props.included,
          disabled = _props.disabled,
          minimumTrackStyle = _props.minimumTrackStyle,
          trackStyle = _props.trackStyle,
          handleStyle = _props.handleStyle,
          min = _props.min,
          max = _props.max,
          handleGenerator = _props.handle;
      var _state = this.state,
          value = _state.value,
          dragging = _state.dragging;

      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: prefixCls + '-handle',
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });

      var _trackStyle = trackStyle[0] || trackStyle;
      var track = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: prefixCls + '-track',
        vertical: vertical,
        included: included,
        offset: 0,
        length: offset,
        style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, minimumTrackStyle, _trackStyle)
      });

      return { tracks: track, handles: handle };
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Slider.propTypes = {
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_9__["default"])(Slider));

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Marks.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Marks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, className + '-text', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;

    var markPoint = marks[point];
    var markPointIsObject = (typeof markPoint === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(markPoint)) === 'object' && !react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    var markStyle = markPointIsObject ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, markPoint.style) : style;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
    'div',
    { className: className },
    elements
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Marks);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Steps.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Steps.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  warning__WEBPACK_IMPORTED_MODULE_4___default()(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ bottom: offset }, dotStyle) : babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ left: offset }, dotStyle);
    if (isActived) {
      style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, style, activeDotStyle);
    }

    var pointClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-dot', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-dot-active', isActived), _classNames));

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('span', { className: pointClassName, style: style, key: point });
  });

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Track.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Track.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable react/prop-types */


var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: className, style: elStyle });
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/createSlider.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/createSlider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSlider; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/es/common/Steps.js");
/* harmony import */ var _Marks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/es/common/Marks.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/es/utils.js");


















function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ComponentEnhancer);

      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_16__["getMousePosition"](isVertical, e);
        if (!_utils__WEBPACK_IMPORTED_MODULE_16__["isEventFromHandle"](e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_16__["getHandleCenterPosition"](isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        _utils__WEBPACK_IMPORTED_MODULE_16__["pauseEvent"](e);
      };

      _this.onTouchStart = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_16__["isNotTouchEvent"](e)) return;

        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_16__["getTouchPosition"](isVertical, e);
        if (!_utils__WEBPACK_IMPORTED_MODULE_16__["isEventFromHandle"](e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_16__["getHandleCenterPosition"](isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        _utils__WEBPACK_IMPORTED_MODULE_16__["pauseEvent"](e);
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = _utils__WEBPACK_IMPORTED_MODULE_16__["getMousePosition"](_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_16__["isNotTouchEvent"](e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_16__["getTouchPosition"](_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (true) {
        var step = props.step,
            max = props.max,
            min = props.min;

        warning__WEBPACK_IMPORTED_MODULE_12___default()(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ComponentEnhancer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
                this.onTouchMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var rect = slider.getBoundingClientRect();

        return this.props.vertical ? rect.top : rect.left;
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props = this.props,
            vertical = _props.vertical,
            min = _props.min,
            max = _props.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var pixelOffset = position - this.getSliderStart();
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props3 = this.props,
            prefixCls = _props3.prefixCls,
            className = _props3.className,
            marks = _props3.marks,
            dots = _props3.dots,
            step = _props3.step,
            included = _props3.included,
            disabled = _props3.disabled,
            vertical = _props3.vertical,
            min = _props3.min,
            max = _props3.max,
            children = _props3.children,
            maximumTrackStyle = _props3.maximumTrackStyle,
            style = _props3.style,
            railStyle = _props3.railStyle,
            dotStyle = _props3.dotStyle,
            activeDotStyle = _props3.activeDotStyle;

        var _get$call = babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, prefixCls + '-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, prefixCls + '-vertical', vertical), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, className, className), _classNames));
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown,
            style: style
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement('div', {
            className: prefixCls + '-rail',
            style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Steps__WEBPACK_IMPORTED_MODULE_13__["default"], {
            prefixCls: prefixCls,
            vertical: vertical,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Marks__WEBPACK_IMPORTED_MODULE_14__["default"], {
            className: prefixCls + '-mark',
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min
          }),
          children
        );
      }
    }]);

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Component.propTypes, {
    min: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
    max: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
    step: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
    marks: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
    included: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any,
    onBeforeChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
    onAfterChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
    handle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
    dots: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
    minimumTrackStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,     maximumTrackStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,     handleStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object)]),
    trackStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object)]),
    railStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
    dotStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
    activeDotStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
  }), _class.defaultProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['index']);

      delete restProps.dragging;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_15__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/createSliderWithTooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-slider/es/createSliderWithTooltip.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSliderWithTooltip; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");












function createSliderWithTooltip(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ComponentWrapper, _React$Component);

    function ComponentWrapper(props) {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ComponentWrapper);

      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (ComponentWrapper.__proto__ || Object.getPrototypeOf(ComponentWrapper)).call(this, props));

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, prevState.visibles, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['value', 'dragging', 'index', 'disabled']);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === undefined ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === undefined ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === undefined ? 'top' : _tipProps$placement,
            restTooltipProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(tipProps, ['prefixCls', 'overlay', 'placement']);

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          rc_tooltip__WEBPACK_IMPORTED_MODULE_9__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, restTooltipProps, {
            prefixCls: prefixCls,
            overlay: overlay,
            placement: placement,
            visible: !disabled && (_this.state.visibles[index] || dragging),
            key: index
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, restProps, {
            style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, handleStyle[0]),
            value: value,
            onMouseEnter: function onMouseEnter() {
              return _this.handleTooltipVisibleChange(index, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this.handleTooltipVisibleChange(index, false);
            }
          }))
        );
      };

      _this.state = { visibles: {} };
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ComponentWrapper, [{
      key: 'render',
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.props, { handle: this.handleWithTooltip }));
      }
    }]);

    return ComponentWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _class.propTypes = {
    tipFormatter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    handleStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object),
    tipProps: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
  }, _class.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },

    handleStyle: [{}],
    tipProps: {}
  }, _temp;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/index.js ***!
  \********************************************/
/*! exports provided: default, Range, Handle, createSliderWithTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/rc-slider/es/Slider.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Range */ "./node_modules/rc-slider/es/Range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Range__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return _Handle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSliderWithTooltip */ "./node_modules/rc-slider/es/createSliderWithTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSliderWithTooltip", function() { return _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"]; });






_Slider__WEBPACK_IMPORTED_MODULE_0__["default"].Range = _Range__WEBPACK_IMPORTED_MODULE_1__["default"];
_Slider__WEBPACK_IMPORTED_MODULE_0__["default"].Handle = _Handle__WEBPACK_IMPORTED_MODULE_2__["default"];
_Slider__WEBPACK_IMPORTED_MODULE_0__["default"].createSliderWithTooltip = _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/rc-slider/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/utils.js ***!
  \********************************************/
/*! exports provided: isEventFromHandle, isValueOutOfRange, isNotTouchEvent, getClosestPoint, getPrecision, getMousePosition, getTouchPosition, getHandleCenterPosition, ensureValueInRange, ensureValuePrecision, pauseEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventFromHandle", function() { return isEventFromHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueOutOfRange", function() { return isValueOutOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotTouchEvent", function() { return isNotTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestPoint", function() { return getClosestPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePosition", function() { return getMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchPosition", function() { return getTouchPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandleCenterPosition", function() { return getHandleCenterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValueInRange", function() { return ensureValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValuePrecision", function() { return ensureValuePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseEvent", function() { return pauseEvent; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pY29uL0ljb25Gb250LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pY29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pY29uL3R3b1RvbmVQcmltYXJ5Q29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2ljb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvSGFuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vTWFya3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vU3RlcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vY3JlYXRlU2xpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNqQzs7QUFFakM7QUFDUDtBQUNBLHdCQUF3Qiw2REFBVztBQUNuQyxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1EQUFtRCw4RUFBa0I7QUFDckU7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHdhcm5lZCA9IHt9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAodmFsaWQsIG1lc3NhZ2UpIHtcbiAgICBpZiAoIXZhbGlkICYmICF3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKShmYWxzZSwgbWVzc2FnZSk7XG4gICAgICAgIHdhcm5lZFttZXNzYWdlXSA9IHRydWU7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGU7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX19yZXN0ID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5cbnZhciBjdXN0b21DYWNoZSA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIHNjcmlwdFVybCA9IG9wdGlvbnMuc2NyaXB0VXJsLFxuICAgICAgICBfb3B0aW9ucyRleHRyYUNvbW1vblAgPSBvcHRpb25zLmV4dHJhQ29tbW9uUHJvcHMsXG4gICAgICAgIGV4dHJhQ29tbW9uUHJvcHMgPSBfb3B0aW9ucyRleHRyYUNvbW1vblAgPT09IHVuZGVmaW5lZCA/IHt9IDogX29wdGlvbnMkZXh0cmFDb21tb25QO1xuICAgIC8qKlxuICAgICAqIERPTSBBUEkgcmVxdWlyZWQuXG4gICAgICogTWFrZSBzdXJlIGluIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgICogVGhlIEN1c3RvbSBJY29uIHdpbGwgY3JlYXRlIGEgPHNjcmlwdC8+XG4gICAgICogdGhhdCBsb2FkcyBTVkcgc3ltYm9scyBhbmQgaW5zZXJ0IHRoZSBTVkcgRWxlbWVudCBpbnRvIHRoZSBkb2N1bWVudCBib2R5LlxuICAgICAqL1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNjcmlwdFVybCA9PT0gJ3N0cmluZycgJiYgc2NyaXB0VXJsLmxlbmd0aCAmJiAhY3VzdG9tQ2FjaGUuaGFzKHNjcmlwdFVybCkpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHRVcmwpO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybCk7XG4gICAgICAgIGN1c3RvbUNhY2hlLmFkZChzY3JpcHRVcmwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIHZhciBJY29uZm9udCA9IGZ1bmN0aW9uIEljb25mb250KHByb3BzKSB7XG4gICAgICAgIHZhciB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInR5cGVcIiwgXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIC8vIGNvbXBvbmVudCA+IGNoaWxkcmVuID4gdHlwZVxuXG5cbiAgICAgICAgdmFyIGNvbnRlbnQgPSBudWxsO1xuICAgICAgICBpZiAocHJvcHMudHlwZSkge1xuICAgICAgICAgICAgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgeGxpbmtIcmVmOiAnIycgKyB0eXBlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29udGVudCA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX2luZGV4MlsnZGVmYXVsdCddLFxuICAgICAgICAgICAgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgcmVzdFByb3BzLCBleHRyYUNvbW1vblByb3BzKSxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIEljb25mb250LmRpc3BsYXlOYW1lID0gJ0ljb25mb250JztcbiAgICByZXR1cm4gSWNvbmZvbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0NvbnN1bWFibGVBcnJheTIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfZGlzdCA9IHJlcXVpcmUoJ0BhbnQtZGVzaWduL2ljb25zL2xpYi9kaXN0Jyk7XG5cbnZhciBhbGxJY29ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9kaXN0KTtcblxudmFyIF9pY29uc1JlYWN0ID0gcmVxdWlyZSgnQGFudC1kZXNpZ24vaWNvbnMtcmVhY3QnKTtcblxudmFyIF9pY29uc1JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ljb25zUmVhY3QpO1xuXG52YXIgX0ljb25Gb250ID0gcmVxdWlyZSgnLi9JY29uRm9udCcpO1xuXG52YXIgX0ljb25Gb250MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ljb25Gb250KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnLi4vX3V0aWwvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfdHdvVG9uZVByaW1hcnlDb2xvciA9IHJlcXVpcmUoJy4vdHdvVG9uZVByaW1hcnlDb2xvcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfX3Jlc3QgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcblxuLy8gSW5pdGlhbCBzZXR0aW5nXG5faWNvbnNSZWFjdDJbJ2RlZmF1bHQnXS5hZGQuYXBwbHkoX2ljb25zUmVhY3QyWydkZWZhdWx0J10sICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzWydkZWZhdWx0J10pKE9iamVjdC5rZXlzKGFsbEljb25zKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBhbGxJY29uc1trZXldO1xufSkpKTtcbigwLCBfdHdvVG9uZVByaW1hcnlDb2xvci5zZXRUd29Ub25lQ29sb3IpKCcjMTg5MGZmJyk7XG52YXIgZGVmYXVsdFRoZW1lID0gJ291dGxpbmVkJztcbnZhciBkYW5nZXJvdXNUaGVtZSA9IHVuZGVmaW5lZDtcbnZhciBJY29uID0gZnVuY3Rpb24gSWNvbihwcm9wcykge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgICBDb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIHZpZXdCb3ggPSBwcm9wcy52aWV3Qm94LFxuICAgICAgICBzcGluID0gcHJvcHMuc3BpbixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZSxcbiAgICAgICAgdHdvVG9uZUNvbG9yID0gcHJvcHMudHdvVG9uZUNvbG9yLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInR5cGVcIiwgXCJjb21wb25lbnRcIiwgXCJ2aWV3Qm94XCIsIFwic3BpblwiLCBcImNoaWxkcmVuXCIsIFwidGhlbWVcIiwgXCJ0d29Ub25lQ29sb3JcIl0pO1xuXG4gICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKShCb29sZWFuKHR5cGUgfHwgQ29tcG9uZW50IHx8IGNoaWxkcmVuKSwgJ0ljb24gc2hvdWxkIGhhdmUgYHR5cGVgIHByb3Agb3IgYGNvbXBvbmVudGAgcHJvcCBvciBgY2hpbGRyZW5gLicpO1xuICAgIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzLCAnYW50aWNvbicsIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgJ2FudGljb24tJyArIHR5cGUsIEJvb2xlYW4odHlwZSkpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgdmFyIHN2Z0NsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgJ2FudGljb24tc3BpbicsICEhc3BpbiB8fCB0eXBlID09PSAnbG9hZGluZycpKTtcbiAgICB2YXIgaW5uZXJOb2RlID0gdm9pZCAwO1xuICAgIC8vIGNvbXBvbmVudCA+IGNoaWxkcmVuID4gdHlwZVxuICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIGlubmVyU3ZnUHJvcHMgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBfdXRpbHMuc3ZnQmFzZVByb3BzLCB7IGNsYXNzTmFtZTogc3ZnQ2xhc3NTdHJpbmcsIHZpZXdCb3g6IHZpZXdCb3ggfSk7XG4gICAgICAgIGlmICghdmlld0JveCkge1xuICAgICAgICAgICAgZGVsZXRlIGlubmVyU3ZnUHJvcHMudmlld0JveDtcbiAgICAgICAgfVxuICAgICAgICBpbm5lck5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgaW5uZXJTdmdQcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKEJvb2xlYW4odmlld0JveCkgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKS50eXBlID09PSAndXNlJywgJ01ha2Ugc3VyZSB0aGF0IHlvdSBwcm92aWRlIGNvcnJlY3QgYHZpZXdCb3hgJyArICcgcHJvcCAoZGVmYXVsdCBgMCAwIDEwMjQgMTAyNGApIHRvIHRoZSBpY29uLicpO1xuICAgICAgICB2YXIgX2lubmVyU3ZnUHJvcHMgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBfdXRpbHMuc3ZnQmFzZVByb3BzLCB7IGNsYXNzTmFtZTogc3ZnQ2xhc3NTdHJpbmcgfSk7XG4gICAgICAgIGlubmVyTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3ZnJyxcbiAgICAgICAgICAgICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIF9pbm5lclN2Z1Byb3BzLCB7IHZpZXdCb3g6IHZpZXdCb3ggfSksXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgICAgIHZhciB0aGVtZUluTmFtZSA9ICgwLCBfdXRpbHMuZ2V0VGhlbWVGcm9tVHlwZU5hbWUpKHR5cGUpO1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSghdGhlbWVJbk5hbWUgfHwgdGhlbWUgPT09IHRoZW1lSW5OYW1lLCAnVGhlIGljb24gbmFtZSBcXCcnICsgdHlwZSArICdcXCcgYWxyZWFkeSBzcGVjaWZ5IGEgdGhlbWUgXFwnJyArIHRoZW1lSW5OYW1lICsgJ1xcJywnICsgKCcgdGhlIFxcJ3RoZW1lXFwnIHByb3AgXFwnJyArIHRoZW1lICsgJ1xcJyB3aWxsIGJlIGlnbm9yZWQuJykpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVkVHlwZSA9ICgwLCBfdXRpbHMud2l0aFRoZW1lU3VmZml4KSgoMCwgX3V0aWxzLnJlbW92ZVR5cGVUaGVtZSkodHlwZSksIGRhbmdlcm91c1RoZW1lIHx8IHRoZW1lIHx8IGRlZmF1bHRUaGVtZSk7XG4gICAgICAgIGlubmVyTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25zUmVhY3QyWydkZWZhdWx0J10sIHsgY2xhc3NOYW1lOiBzdmdDbGFzc1N0cmluZywgdHlwZTogY29tcHV0ZWRUeXBlLCBwcmltYXJ5Q29sb3I6IHR3b1RvbmVDb2xvciB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdpJyxcbiAgICAgICAgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgcmVzdFByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSksXG4gICAgICAgIGlubmVyTm9kZVxuICAgICk7XG59O1xuZnVuY3Rpb24gdW5zdGFibGVfQ2hhbmdlVGhlbWVPZkljb25zRGFuZ2Vyb3VzbHkodGhlbWUpIHtcbiAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnWW91IGFyZSB1c2luZyB0aGUgdW5zdGFibGUgbWV0aG9kIFxcJ0ljb24udW5zdGFibGVfQ2hhbmdlVGhlbWVPZkFsbEljb25zRGFuZ2Vyb3VzbHlcXCcsICcgKyAoJ21ha2Ugc3VyZSB0aGF0IGFsbCB0aGUgaWNvbnMgd2l0aCB0aGVtZSBcXCcnICsgdGhlbWUgKyAnXFwnIGRpc3BsYXkgY29ycmVjdGx5LicpKTtcbiAgICBkYW5nZXJvdXNUaGVtZSA9IHRoZW1lO1xufVxuZnVuY3Rpb24gdW5zdGFibGVfQ2hhbmdlRGVmYXVsdFRoZW1lT2ZJY29ucyh0aGVtZSkge1xuICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdZb3UgYXJlIHVzaW5nIHRoZSB1bnN0YWJsZSBtZXRob2QgXFwnSWNvbi51bnN0YWJsZV9DaGFuZ2VEZWZhdWx0VGhlbWVPZkljb25zXFwnLCAnICsgKCdtYWtlIHN1cmUgdGhhdCBhbGwgdGhlIGljb25zIHdpdGggdGhlbWUgXFwnJyArIHRoZW1lICsgJ1xcJyBkaXNwbGF5IGNvcnJlY3RseS4nKSk7XG4gICAgZGVmYXVsdFRoZW1lID0gdGhlbWU7XG59XG5JY29uLmNyZWF0ZUZyb21JY29uZm9udENOID0gX0ljb25Gb250MlsnZGVmYXVsdCddO1xuSWNvbi5nZXRUd29Ub25lQ29sb3IgPSBfdHdvVG9uZVByaW1hcnlDb2xvci5nZXRUd29Ub25lQ29sb3I7XG5JY29uLnNldFR3b1RvbmVDb2xvciA9IF90d29Ub25lUHJpbWFyeUNvbG9yLnNldFR3b1RvbmVDb2xvcjtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEljb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0VHdvVG9uZUNvbG9yID0gc2V0VHdvVG9uZUNvbG9yO1xuZXhwb3J0cy5nZXRUd29Ub25lQ29sb3IgPSBnZXRUd29Ub25lQ29sb3I7XG5cbnZhciBfaWNvbnNSZWFjdCA9IHJlcXVpcmUoJ0BhbnQtZGVzaWduL2ljb25zLXJlYWN0Jyk7XG5cbnZhciBfaWNvbnNSZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pY29uc1JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXRUd29Ub25lQ29sb3IocHJpbWFyeUNvbG9yKSB7XG4gICAgcmV0dXJuIF9pY29uc1JlYWN0MlsnZGVmYXVsdCddLnNldFR3b1RvbmVDb2xvcnMoe1xuICAgICAgICBwcmltYXJ5Q29sb3I6IHByaW1hcnlDb2xvclxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VHdvVG9uZUNvbG9yKCkge1xuICAgIHZhciBjb2xvcnMgPSBfaWNvbnNSZWFjdDJbJ2RlZmF1bHQnXS5nZXRUd29Ub25lQ29sb3JzKCk7XG4gICAgcmV0dXJuIGNvbG9ycy5wcmltYXJ5Q29sb3I7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3ZnQmFzZVByb3BzID0gdW5kZWZpbmVkO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9zdmdCYXNlUHJvcHM7XG5cbmV4cG9ydHMuZ2V0VGhlbWVGcm9tVHlwZU5hbWUgPSBnZXRUaGVtZUZyb21UeXBlTmFtZTtcbmV4cG9ydHMucmVtb3ZlVHlwZVRoZW1lID0gcmVtb3ZlVHlwZVRoZW1lO1xuZXhwb3J0cy53aXRoVGhlbWVTdWZmaXggPSB3aXRoVGhlbWVTdWZmaXg7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCIuLi9fdXRpbC93YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vLyBUaGVzZSBwcm9wcyBtYWtlIHN1cmUgdGhhdCB0aGUgU1ZHIGJlaGF2aW91cnMgbGlrZSBnZW5lcmFsIHRleHQuXG4vLyBSZWZlcmVuY2U6IGh0dHBzOi8vYmxvZy5wcm90b3R5cHIuaW8vYWxpZ24tc3ZnLWljb25zLXRvLXRleHQtYW5kLXNheS1nb29kYnllLXRvLWZvbnQtaWNvbnMtZDQ0YjNkN2IyNmI0XG52YXIgc3ZnQmFzZVByb3BzID0gZXhwb3J0cy5zdmdCYXNlUHJvcHMgPSAoX3N2Z0Jhc2VQcm9wcyA9IHtcbiAgICB3aWR0aDogXCIxZW1cIixcbiAgICBoZWlnaHQ6IFwiMWVtXCIsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIlxufSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbXCJkZWZhdWx0XCJdKShfc3ZnQmFzZVByb3BzLCBcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbXCJkZWZhdWx0XCJdKShfc3ZnQmFzZVByb3BzLCBcImZvY3VzYWJsZVwiLCBcImZhbHNlXCIpLCBfc3ZnQmFzZVByb3BzKTtcbnZhciBmaWxsVGVzdGVyID0gLy1maWxsJC87XG52YXIgb3V0bGluZVRlc3RlciA9IC8tbyQvO1xudmFyIHR3b1RvbmVUZXN0ZXIgPSAvLXR3b3RvbmUkLztcbmZ1bmN0aW9uIGdldFRoZW1lRnJvbVR5cGVOYW1lKHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAoZmlsbFRlc3Rlci50ZXN0KHR5cGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChvdXRsaW5lVGVzdGVyLnRlc3QodHlwZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gXCJvdXRsaW5lZFwiO1xuICAgIH0gZWxzZSBpZiAodHdvVG9uZVRlc3Rlci50ZXN0KHR5cGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IFwidHdvVG9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcmVtb3ZlVHlwZVRoZW1lKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZS5yZXBsYWNlKGZpbGxUZXN0ZXIsIFwiXCIpLnJlcGxhY2Uob3V0bGluZVRlc3RlciwgXCJcIikucmVwbGFjZSh0d29Ub25lVGVzdGVyLCBcIlwiKTtcbn1cbmZ1bmN0aW9uIHdpdGhUaGVtZVN1ZmZpeCh0eXBlLCB0aGVtZSkge1xuICAgIHZhciByZXN1bHQgPSB0eXBlO1xuICAgIGlmICh0aGVtZSA9PT0gXCJmaWxsZWRcIikge1xuICAgICAgICByZXN1bHQgKz0gXCItZmlsbFwiO1xuICAgIH0gZWxzZSBpZiAodGhlbWUgPT09IFwib3V0bGluZWRcIikge1xuICAgICAgICByZXN1bHQgKz0gXCItb1wiO1xuICAgIH0gZWxzZSBpZiAodGhlbWUgPT09IFwidHdvVG9uZVwiKSB7XG4gICAgICAgIHJlc3VsdCArPSBcIi10d290b25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMltcImRlZmF1bHRcIl0pKGZhbHNlLCBcIlRoaXMgaWNvbiAnXCIgKyB0eXBlICsgXCInIGhhcyB1bmtub3duIHRoZW1lICdcIiArIHRoZW1lICsgXCInXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIEhhbmRsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIYW5kbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhbmRsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFuZGxlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSGFuZGxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSGFuZGxlKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSGFuZGxlLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgdmVydGljYWwgPSBfcHJvcHMudmVydGljYWwsXG4gICAgICAgICAgb2Zmc2V0ID0gX3Byb3BzLm9mZnNldCxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBtaW4gPSBfcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF9wcm9wcy5tYXgsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjbGFzc05hbWUnLCAndmVydGljYWwnLCAnb2Zmc2V0JywgJ3N0eWxlJywgJ2Rpc2FibGVkJywgJ21pbicsICdtYXgnLCAndmFsdWUnXSk7XG5cbiAgICAgIHZhciBwb3N0aW9uU3R5bGUgPSB2ZXJ0aWNhbCA/IHsgYm90dG9tOiBvZmZzZXQgKyAnJScgfSA6IHsgbGVmdDogb2Zmc2V0ICsgJyUnIH07XG4gICAgICB2YXIgZWxTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcG9zdGlvblN0eWxlKTtcbiAgICAgIHZhciBhcmlhUHJvcHMgPSB7fTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFyaWFQcm9wcyA9IF9leHRlbmRzKHt9LCBhcmlhUHJvcHMsIHtcbiAgICAgICAgICAnYXJpYS12YWx1ZW1pbic6IG1pbixcbiAgICAgICAgICAnYXJpYS12YWx1ZW1heCc6IG1heCxcbiAgICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogISFkaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJvbGU6ICdzbGlkZXInXG4gICAgICB9LCBhcmlhUHJvcHMsIHJlc3RQcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGVsU3R5bGVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSGFuZGxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBIYW5kbGU7XG5cblxuSGFuZGxlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG4gIG9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyXG59OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnc2hhbGxvd2VxdWFsJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbW1vbi9UcmFjayc7XG5pbXBvcnQgY3JlYXRlU2xpZGVyIGZyb20gJy4vY29tbW9uL2NyZWF0ZVNsaWRlcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxudmFyIFJhbmdlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJhbmdlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYW5nZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYW5nZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmFuZ2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYW5nZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBoYW5kbGU6IG51bGwgfSk7XG4gICAgICBfdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgICAgX3RoaXMucHJvcHMub25BZnRlckNoYW5nZShfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNvdW50ID0gcHJvcHMuY291bnQsXG4gICAgICAgIG1pbiA9IHByb3BzLm1pbixcbiAgICAgICAgbWF4ID0gcHJvcHMubWF4O1xuXG4gICAgdmFyIGluaXRpYWxWYWx1ZSA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGNvdW50ICsgMSkpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWluO1xuICAgIH0pO1xuICAgIHZhciBkZWZhdWx0VmFsdWUgPSAnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcyA/IHByb3BzLmRlZmF1bHRWYWx1ZSA6IGluaXRpYWxWYWx1ZTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGJvdW5kcyA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIF90aGlzLnRyaW1BbGlnblZhbHVlKHYpO1xuICAgIH0pO1xuICAgIHZhciByZWNlbnQgPSBib3VuZHNbMF0gPT09IG1heCA/IDAgOiBib3VuZHMubGVuZ3RoIC0gMTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGFuZGxlOiBudWxsLFxuICAgICAgcmVjZW50OiByZWNlbnQsXG4gICAgICBib3VuZHM6IGJvdW5kc1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJhbmdlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghKCd2YWx1ZScgaW4gbmV4dFByb3BzIHx8ICdtaW4nIGluIG5leHRQcm9wcyB8fCAnbWF4JyBpbiBuZXh0UHJvcHMpKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5wcm9wcy5taW4gPT09IG5leHRQcm9wcy5taW4gJiYgdGhpcy5wcm9wcy5tYXggPT09IG5leHRQcm9wcy5tYXggJiYgc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMudmFsdWUsIG5leHRQcm9wcy52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuc3RhdGUuYm91bmRzO1xuXG4gICAgICB2YXIgdmFsdWUgPSBuZXh0UHJvcHMudmFsdWUgfHwgYm91bmRzO1xuICAgICAgdmFyIG5leHRCb3VuZHMgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi50cmltQWxpZ25WYWx1ZSh2LCBuZXh0UHJvcHMpO1xuICAgICAgfSk7XG4gICAgICBpZiAobmV4dEJvdW5kcy5sZW5ndGggPT09IGJvdW5kcy5sZW5ndGggJiYgbmV4dEJvdW5kcy5ldmVyeShmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICByZXR1cm4gdiA9PT0gYm91bmRzW2ldO1xuICAgICAgfSkpIHJldHVybjtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvdW5kczogbmV4dEJvdW5kcyB9KTtcbiAgICAgIGlmIChib3VuZHMuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdXRpbHMuaXNWYWx1ZU91dE9mUmFuZ2UodiwgbmV4dFByb3BzKTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV4dEJvdW5kcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpc05vdENvbnRyb2xsZWQgPSAhKCd2YWx1ZScgaW4gcHJvcHMpO1xuICAgICAgaWYgKGlzTm90Q29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuaGFuZGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhbmRsZTogc3RhdGUuaGFuZGxlIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCBzdGF0ZSk7XG4gICAgICB2YXIgY2hhbmdlZFZhbHVlID0gZGF0YS5ib3VuZHM7XG4gICAgICBwcm9wcy5vbkNoYW5nZShjaGFuZ2VkVmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICBwcm9wcy5vbkJlZm9yZUNoYW5nZShib3VuZHMpO1xuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICAgIHZhciBjbG9zZXN0Qm91bmQgPSB0aGlzLmdldENsb3Nlc3RCb3VuZCh2YWx1ZSk7XG4gICAgICB2YXIgYm91bmROZWVkTW92aW5nID0gdGhpcy5nZXRCb3VuZE5lZWRNb3ZpbmcodmFsdWUsIGNsb3Nlc3RCb3VuZCk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYW5kbGU6IGJvdW5kTmVlZE1vdmluZyxcbiAgICAgICAgcmVjZW50OiBib3VuZE5lZWRNb3ZpbmdcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJldlZhbHVlID0gYm91bmRzW2JvdW5kTmVlZE1vdmluZ107XG4gICAgICBpZiAodmFsdWUgPT09IHByZXZWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICB2YXIgbmV4dEJvdW5kcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuYm91bmRzKSk7XG4gICAgICBuZXh0Qm91bmRzW2JvdW5kTmVlZE1vdmluZ10gPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UoeyBib3VuZHM6IG5leHRCb3VuZHMgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3ZlKGUsIHBvc2l0aW9uKSB7XG4gICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdmFyIG9sZFZhbHVlID0gc3RhdGUuYm91bmRzW3N0YXRlLmhhbmRsZV07XG4gICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG5cbiAgICAgIHZhciBuZXh0Qm91bmRzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5ib3VuZHMpKTtcbiAgICAgIG5leHRCb3VuZHNbc3RhdGUuaGFuZGxlXSA9IHZhbHVlO1xuICAgICAgdmFyIG5leHRIYW5kbGUgPSBzdGF0ZS5oYW5kbGU7XG4gICAgICBpZiAocHJvcHMucHVzaGFibGUgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gc3RhdGUuYm91bmRzW25leHRIYW5kbGVdO1xuICAgICAgICB0aGlzLnB1c2hTdXJyb3VuZGluZ0hhbmRsZXMobmV4dEJvdW5kcywgbmV4dEhhbmRsZSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmFsbG93Q3Jvc3MpIHtcbiAgICAgICAgbmV4dEJvdW5kcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV4dEhhbmRsZSA9IG5leHRCb3VuZHMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgaGFuZGxlOiBuZXh0SGFuZGxlLFxuICAgICAgICBib3VuZHM6IG5leHRCb3VuZHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib3VuZHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xvc2VzdEJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xvc2VzdEJvdW5kKHZhbHVlKSB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5zdGF0ZS5ib3VuZHM7XG5cbiAgICAgIHZhciBjbG9zZXN0Qm91bmQgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBib3VuZHMubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+IGJvdW5kc1tpXSkge1xuICAgICAgICAgIGNsb3Nlc3RCb3VuZCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyhib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gLSB2YWx1ZSkgPCBNYXRoLmFicyhib3VuZHNbY2xvc2VzdEJvdW5kXSAtIHZhbHVlKSkge1xuICAgICAgICBjbG9zZXN0Qm91bmQgPSBjbG9zZXN0Qm91bmQgKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb3Nlc3RCb3VuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCb3VuZE5lZWRNb3ZpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZE5lZWRNb3ZpbmcodmFsdWUsIGNsb3Nlc3RCb3VuZCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYm91bmRzID0gX3N0YXRlLmJvdW5kcyxcbiAgICAgICAgICByZWNlbnQgPSBfc3RhdGUucmVjZW50O1xuXG4gICAgICB2YXIgYm91bmROZWVkTW92aW5nID0gY2xvc2VzdEJvdW5kO1xuICAgICAgdmFyIGlzQXRUaGVTYW1lUG9pbnQgPSBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gPT09IGJvdW5kc1tjbG9zZXN0Qm91bmRdO1xuICAgICAgaWYgKGlzQXRUaGVTYW1lUG9pbnQpIHtcbiAgICAgICAgYm91bmROZWVkTW92aW5nID0gcmVjZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNBdFRoZVNhbWVQb2ludCAmJiB2YWx1ZSAhPT0gYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdKSB7XG4gICAgICAgIGJvdW5kTmVlZE1vdmluZyA9IHZhbHVlIDwgYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdID8gY2xvc2VzdEJvdW5kIDogY2xvc2VzdEJvdW5kICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3VuZE5lZWRNb3Zpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TG93ZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvd2VyQm91bmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib3VuZHNbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXBwZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVwcGVyQm91bmQoKSB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5zdGF0ZS5ib3VuZHM7XG5cbiAgICAgIHJldHVybiBib3VuZHNbYm91bmRzLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcG9zc2libGUgc2xpZGVyIHBvaW50cywgdGFraW5nIGludG8gYWNjb3VudCBib3RoXG4gICAgICogYG1hcmtzYCBhbmQgYHN0ZXBgLiBUaGUgcmVzdWx0IGlzIGNhY2hlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0UG9pbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9pbnRzKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWFya3MgPSBfcHJvcHMubWFya3MsXG4gICAgICAgICAgc3RlcCA9IF9wcm9wcy5zdGVwLFxuICAgICAgICAgIG1pbiA9IF9wcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzLm1heDtcblxuICAgICAgdmFyIGNhY2hlID0gdGhpcy5fZ2V0UG9pbnRzQ2FjaGU7XG4gICAgICBpZiAoIWNhY2hlIHx8IGNhY2hlLm1hcmtzICE9PSBtYXJrcyB8fCBjYWNoZS5zdGVwICE9PSBzdGVwKSB7XG4gICAgICAgIHZhciBwb2ludHNPYmplY3QgPSBfZXh0ZW5kcyh7fSwgbWFya3MpO1xuICAgICAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvciAodmFyIHBvaW50ID0gbWluOyBwb2ludCA8PSBtYXg7IHBvaW50ICs9IHN0ZXApIHtcbiAgICAgICAgICAgIHBvaW50c09iamVjdFtwb2ludF0gPSBwb2ludDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKHBvaW50c09iamVjdCkubWFwKHBhcnNlRmxvYXQpO1xuICAgICAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2dldFBvaW50c0NhY2hlID0geyBtYXJrczogbWFya3MsIHN0ZXA6IHN0ZXAsIHBvaW50czogcG9pbnRzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0UG9pbnRzQ2FjaGUucG9pbnRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2hTdXJyb3VuZGluZ0hhbmRsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoU3Vycm91bmRpbmdIYW5kbGVzKGJvdW5kcywgaGFuZGxlLCBvcmlnaW5hbFZhbHVlKSB7XG4gICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5wdXNoYWJsZTtcblxuICAgICAgdmFyIHZhbHVlID0gYm91bmRzW2hhbmRsZV07XG5cbiAgICAgIHZhciBkaXJlY3Rpb24gPSAwO1xuICAgICAgaWYgKGJvdW5kc1toYW5kbGUgKyAxXSAtIHZhbHVlIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICsxOyAvLyBwdXNoIHRvIHJpZ2h0XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgLSBib3VuZHNbaGFuZGxlIC0gMV0gPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gLTE7IC8vIHB1c2ggdG8gbGVmdFxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRIYW5kbGUgPSBoYW5kbGUgKyBkaXJlY3Rpb247XG4gICAgICB2YXIgZGlmZlRvTmV4dCA9IGRpcmVjdGlvbiAqIChib3VuZHNbbmV4dEhhbmRsZV0gLSB2YWx1ZSk7XG4gICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZShib3VuZHMsIG5leHRIYW5kbGUsIGRpcmVjdGlvbiwgdGhyZXNob2xkIC0gZGlmZlRvTmV4dCkpIHtcbiAgICAgICAgLy8gcmV2ZXJ0IHRvIG9yaWdpbmFsIHZhbHVlIGlmIHB1c2hpbmcgaXMgaW1wb3NzaWJsZVxuICAgICAgICBib3VuZHNbaGFuZGxlXSA9IG9yaWdpbmFsVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaEhhbmRsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hIYW5kbGUoYm91bmRzLCBoYW5kbGUsIGRpcmVjdGlvbiwgYW1vdW50KSB7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgd2hpbGUgKGRpcmVjdGlvbiAqIChjdXJyZW50VmFsdWUgLSBvcmlnaW5hbFZhbHVlKSA8IGFtb3VudCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZU9uZVBvaW50KGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgLy8gY2FuJ3QgcHVzaCBoYW5kbGUgZW5vdWdoIHRvIGNyZWF0ZSB0aGUgbmVlZGVkIGBhbW91bnRgIGdhcCwgc28gd2VcbiAgICAgICAgICAvLyByZXZlcnQgaXRzIHBvc2l0aW9uIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIGJvdW5kc1toYW5kbGVdID0gb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFZhbHVlID0gYm91bmRzW2hhbmRsZV07XG4gICAgICB9XG4gICAgICAvLyB0aGUgaGFuZGxlIHdhcyBwdXNoZWQgZW5vdWdoIHRvIGNyZWF0ZSB0aGUgbmVlZGVkIGBhbW91bnRgIGdhcFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaEhhbmRsZU9uZVBvaW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEhhbmRsZU9uZVBvaW50KGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLmdldFBvaW50cygpO1xuICAgICAgdmFyIHBvaW50SW5kZXggPSBwb2ludHMuaW5kZXhPZihib3VuZHNbaGFuZGxlXSk7XG4gICAgICB2YXIgbmV4dFBvaW50SW5kZXggPSBwb2ludEluZGV4ICsgZGlyZWN0aW9uO1xuICAgICAgaWYgKG5leHRQb2ludEluZGV4ID49IHBvaW50cy5sZW5ndGggfHwgbmV4dFBvaW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIG1pbmltdW0gb3IgbWF4aW11bSBhdmFpbGFibGUgcG9pbnQsIGNhbid0IHB1c2ggYW55bW9yZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IGhhbmRsZSArIGRpcmVjdGlvbjtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBwb2ludHNbbmV4dFBvaW50SW5kZXhdO1xuICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMucHJvcHMucHVzaGFibGU7XG5cbiAgICAgIHZhciBkaWZmVG9OZXh0ID0gZGlyZWN0aW9uICogKGJvdW5kc1tuZXh0SGFuZGxlXSAtIG5leHRWYWx1ZSk7XG4gICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZShib3VuZHMsIG5leHRIYW5kbGUsIGRpcmVjdGlvbiwgdGhyZXNob2xkIC0gZGlmZlRvTmV4dCkpIHtcbiAgICAgICAgLy8gY291bGRuJ3QgcHVzaCBuZXh0IGhhbmRsZSwgc28gd2Ugd29uJ3QgcHVzaCB0aGlzIG9uZSBlaXRoZXJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gcHVzaCB0aGUgaGFuZGxlXG4gICAgICBib3VuZHNbaGFuZGxlXSA9IG5leHRWYWx1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyaW1BbGlnblZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpbUFsaWduVmFsdWUodikge1xuICAgICAgdmFyIG5leHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIHZhciBtZXJnZWRQcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgdmFyIHZhbEluUmFuZ2UgPSB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodiwgbWVyZ2VkUHJvcHMpO1xuICAgICAgdmFyIHZhbE5vdENvbmZsaWN0ID0gdGhpcy5lbnN1cmVWYWx1ZU5vdENvbmZsaWN0KHZhbEluUmFuZ2UsIG1lcmdlZFByb3BzKTtcbiAgICAgIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZVByZWNpc2lvbih2YWxOb3RDb25mbGljdCwgbWVyZ2VkUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Vuc3VyZVZhbHVlTm90Q29uZmxpY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVWYWx1ZU5vdENvbmZsaWN0KHZhbCwgX3JlZikge1xuICAgICAgdmFyIGFsbG93Q3Jvc3MgPSBfcmVmLmFsbG93Q3Jvc3M7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG4gICAgICB2YXIgaGFuZGxlID0gc3RhdGUuaGFuZGxlLFxuICAgICAgICAgIGJvdW5kcyA9IHN0YXRlLmJvdW5kcztcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuXG4gICAgICBpZiAoIWFsbG93Q3Jvc3MgJiYgaGFuZGxlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGhhbmRsZSA+IDAgJiYgdmFsIDw9IGJvdW5kc1toYW5kbGUgLSAxXSkge1xuICAgICAgICAgIHJldHVybiBib3VuZHNbaGFuZGxlIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZSA8IGJvdW5kcy5sZW5ndGggLSAxICYmIHZhbCA+PSBib3VuZHNbaGFuZGxlICsgMV0pIHtcbiAgICAgICAgICByZXR1cm4gYm91bmRzW2hhbmRsZSArIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGhhbmRsZSA9IF9zdGF0ZTIuaGFuZGxlLFxuICAgICAgICAgIGJvdW5kcyA9IF9zdGF0ZTIuYm91bmRzO1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3Byb3BzMi52ZXJ0aWNhbCxcbiAgICAgICAgICBpbmNsdWRlZCA9IF9wcm9wczIuaW5jbHVkZWQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIG1pbiA9IF9wcm9wczIubWluLFxuICAgICAgICAgIG1heCA9IF9wcm9wczIubWF4LFxuICAgICAgICAgIGhhbmRsZUdlbmVyYXRvciA9IF9wcm9wczIuaGFuZGxlLFxuICAgICAgICAgIHRyYWNrU3R5bGUgPSBfcHJvcHMyLnRyYWNrU3R5bGUsXG4gICAgICAgICAgaGFuZGxlU3R5bGUgPSBfcHJvcHMyLmhhbmRsZVN0eWxlO1xuXG5cbiAgICAgIHZhciBvZmZzZXRzID0gYm91bmRzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmNhbGNPZmZzZXQodik7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGhhbmRsZUNsYXNzTmFtZSA9IHByZWZpeENscyArICctaGFuZGxlJztcbiAgICAgIHZhciBoYW5kbGVzID0gYm91bmRzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZUdlbmVyYXRvcih7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGhhbmRsZUNsYXNzTmFtZSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgaGFuZGxlQ2xhc3NOYW1lICsgJy0nICsgKGkgKyAxKSwgdHJ1ZSksIF9jbGFzc05hbWVzKSksXG4gICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0c1tpXSxcbiAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICBkcmFnZ2luZzogaGFuZGxlID09PSBpLFxuICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBzdHlsZTogaGFuZGxlU3R5bGVbaV0sXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zYXZlSGFuZGxlKGksIGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHRyYWNrcyA9IGJvdW5kcy5zbGljZSgwLCAtMSkubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICAgIHZhciBpID0gaW5kZXggKyAxO1xuICAgICAgICB2YXIgdHJhY2tDbGFzc05hbWUgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy10cmFjaycsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBwcmVmaXhDbHMgKyAnLXRyYWNrLScgKyBpLCB0cnVlKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYWNrLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0cmFja0NsYXNzTmFtZSxcbiAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0c1tpIC0gMV0sXG4gICAgICAgICAgbGVuZ3RoOiBvZmZzZXRzW2ldIC0gb2Zmc2V0c1tpIC0gMV0sXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGVbaW5kZXhdLFxuICAgICAgICAgIGtleTogaVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyB0cmFja3M6IHRyYWNrcywgaGFuZGxlczogaGFuZGxlcyB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYW5nZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmFuZ2UuZGlzcGxheU5hbWUgPSAnUmFuZ2UnO1xuUmFuZ2UucHJvcFR5cGVzID0ge1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwdXNoYWJsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgYWxsb3dDcm9zczogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblJhbmdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGFsbG93Q3Jvc3M6IHRydWUsXG4gIHB1c2hhYmxlOiBmYWxzZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXIoUmFuZ2UpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbW1vbi9UcmFjayc7XG5pbXBvcnQgY3JlYXRlU2xpZGVyIGZyb20gJy4vY29tbW9uL2NyZWF0ZVNsaWRlcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxudmFyIFNsaWRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbGlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNsaWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNsaWRlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBkcmFnZ2luZzogZmFsc2UgfSk7XG4gICAgICBfdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgICAgX3RoaXMucHJvcHMub25BZnRlckNoYW5nZShfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMuZGVmYXVsdFZhbHVlIDogcHJvcHMubWluO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IF90aGlzLnRyaW1BbGlnblZhbHVlKHZhbHVlKSxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgIH07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5pbmcoISgnbWluaW11bVRyYWNrU3R5bGUnIGluIHByb3BzKSwgJ21pbmltdW1UcmFja1N0eWxlIHdpbGwgYmUgZGVwcmVjYXRlLCBwbGVhc2UgdXNlIHRyYWNrU3R5bGUgaW5zdGVhZC4nKTtcbiAgICAgIHdhcm5pbmcoISgnbWF4aW11bVRyYWNrU3R5bGUnIGluIHByb3BzKSwgJ21heGltdW1UcmFja1N0eWxlIHdpbGwgYmUgZGVwcmVjYXRlLCBwbGVhc2UgdXNlIHJhaWxTdHlsZSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2xpZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMgfHwgJ21pbicgaW4gbmV4dFByb3BzIHx8ICdtYXgnIGluIG5leHRQcm9wcykpIHJldHVybjtcblxuICAgICAgdmFyIHByZXZWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSBuZXh0UHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IG5leHRQcm9wcy52YWx1ZSA6IHByZXZWYWx1ZTtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSB0aGlzLnRyaW1BbGlnblZhbHVlKHZhbHVlLCBuZXh0UHJvcHMpO1xuICAgICAgaWYgKG5leHRWYWx1ZSA9PT0gcHJldlZhbHVlKSByZXR1cm47XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV4dFZhbHVlIH0pO1xuICAgICAgaWYgKHV0aWxzLmlzVmFsdWVPdXRPZlJhbmdlKHZhbHVlLCBuZXh0UHJvcHMpKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV4dFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTm90Q29udHJvbGxlZCA9ICEoJ3ZhbHVlJyBpbiBwcm9wcyk7XG4gICAgICBpZiAoaXNOb3RDb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlZFZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgICBwcm9wcy5vbkNoYW5nZShjaGFuZ2VkVmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJhZ2dpbmc6IHRydWUgfSk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIHByb3BzLm9uQmVmb3JlQ2hhbmdlKHByZXZWYWx1ZSk7XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdGhpcy5zdGFydFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvbjtcblxuICAgICAgaWYgKHZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybjtcblxuICAgICAgdGhpcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdmUoZSwgcG9zaXRpb24pIHtcbiAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB2YXIgb2xkVmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcblxuICAgICAgdGhpcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TG93ZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvd2VyQm91bmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5taW47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXBwZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVwcGVyQm91bmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmltQWxpZ25WYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaW1BbGlnblZhbHVlKHYpIHtcbiAgICAgIHZhciBuZXh0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgbWVyZ2VkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICAgIHZhciB2YWwgPSB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodiwgbWVyZ2VkUHJvcHMpO1xuICAgICAgcmV0dXJuIHV0aWxzLmVuc3VyZVZhbHVlUHJlY2lzaW9uKHZhbCwgbWVyZ2VkUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3Byb3BzLnZlcnRpY2FsLFxuICAgICAgICAgIGluY2x1ZGVkID0gX3Byb3BzLmluY2x1ZGVkLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG1pbmltdW1UcmFja1N0eWxlID0gX3Byb3BzLm1pbmltdW1UcmFja1N0eWxlLFxuICAgICAgICAgIHRyYWNrU3R5bGUgPSBfcHJvcHMudHJhY2tTdHlsZSxcbiAgICAgICAgICBoYW5kbGVTdHlsZSA9IF9wcm9wcy5oYW5kbGVTdHlsZSxcbiAgICAgICAgICBtaW4gPSBfcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF9wcm9wcy5tYXgsXG4gICAgICAgICAgaGFuZGxlR2VuZXJhdG9yID0gX3Byb3BzLmhhbmRsZTtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHZhbHVlID0gX3N0YXRlLnZhbHVlLFxuICAgICAgICAgIGRyYWdnaW5nID0gX3N0YXRlLmRyYWdnaW5nO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5jYWxjT2Zmc2V0KHZhbHVlKTtcbiAgICAgIHZhciBoYW5kbGUgPSBoYW5kbGVHZW5lcmF0b3Ioe1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctaGFuZGxlJyxcbiAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBkcmFnZ2luZzogZHJhZ2dpbmcsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgbWluOiBtaW4sXG4gICAgICAgIG1heDogbWF4LFxuICAgICAgICBzdHlsZTogaGFuZGxlU3R5bGVbMF0gfHwgaGFuZGxlU3R5bGUsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNhdmVIYW5kbGUoMCwgaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX3RyYWNrU3R5bGUgPSB0cmFja1N0eWxlWzBdIHx8IHRyYWNrU3R5bGU7XG4gICAgICB2YXIgdHJhY2sgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYWNrLCB7XG4gICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10cmFjaycsXG4gICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxlbmd0aDogb2Zmc2V0LFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG1pbmltdW1UcmFja1N0eWxlLCBfdHJhY2tTdHlsZSlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyB0cmFja3M6IHRyYWNrLCBoYW5kbGVzOiBoYW5kbGUgfTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TbGlkZXIucHJvcFR5cGVzID0ge1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyKFNsaWRlcik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgTWFya3MgPSBmdW5jdGlvbiBNYXJrcyhfcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHZlcnRpY2FsID0gX3JlZi52ZXJ0aWNhbCxcbiAgICAgIG1hcmtzID0gX3JlZi5tYXJrcyxcbiAgICAgIGluY2x1ZGVkID0gX3JlZi5pbmNsdWRlZCxcbiAgICAgIHVwcGVyQm91bmQgPSBfcmVmLnVwcGVyQm91bmQsXG4gICAgICBsb3dlckJvdW5kID0gX3JlZi5sb3dlckJvdW5kLFxuICAgICAgbWF4ID0gX3JlZi5tYXgsXG4gICAgICBtaW4gPSBfcmVmLm1pbjtcblxuICB2YXIgbWFya3NLZXlzID0gT2JqZWN0LmtleXMobWFya3MpO1xuICB2YXIgbWFya3NDb3VudCA9IG1hcmtzS2V5cy5sZW5ndGg7XG4gIHZhciB1bml0ID0gbWFya3NDb3VudCA+IDEgPyAxMDAgLyAobWFya3NDb3VudCAtIDEpIDogMTAwO1xuICB2YXIgbWFya1dpZHRoID0gdW5pdCAqIDAuOTtcblxuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gIHZhciBlbGVtZW50cyA9IG1hcmtzS2V5cy5tYXAocGFyc2VGbG9hdCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSkubWFwKGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBpc0FjdGl2ZSA9ICFpbmNsdWRlZCAmJiBwb2ludCA9PT0gdXBwZXJCb3VuZCB8fCBpbmNsdWRlZCAmJiBwb2ludCA8PSB1cHBlckJvdW5kICYmIHBvaW50ID49IGxvd2VyQm91bmQ7XG4gICAgdmFyIG1hcmtDbGFzc05hbWUgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSArICctdGV4dCcsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSArICctdGV4dC1hY3RpdmUnLCBpc0FjdGl2ZSksIF9jbGFzc05hbWVzKSk7XG5cbiAgICB2YXIgYm90dG9tU3R5bGUgPSB7XG4gICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcbiAgICAgIGJvdHRvbTogKHBvaW50IC0gbWluKSAvIHJhbmdlICogMTAwICsgJyUnXG4gICAgfTtcblxuICAgIHZhciBsZWZ0U3R5bGUgPSB7XG4gICAgICB3aWR0aDogbWFya1dpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luTGVmdDogLW1hcmtXaWR0aCAvIDIgKyAnJScsXG4gICAgICBsZWZ0OiAocG9pbnQgLSBtaW4pIC8gcmFuZ2UgKiAxMDAgKyAnJSdcbiAgICB9O1xuXG4gICAgdmFyIHN0eWxlID0gdmVydGljYWwgPyBib3R0b21TdHlsZSA6IGxlZnRTdHlsZTtcblxuICAgIHZhciBtYXJrUG9pbnQgPSBtYXJrc1twb2ludF07XG4gICAgdmFyIG1hcmtQb2ludElzT2JqZWN0ID0gKHR5cGVvZiBtYXJrUG9pbnQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG1hcmtQb2ludCkpID09PSAnb2JqZWN0JyAmJiAhUmVhY3QuaXNWYWxpZEVsZW1lbnQobWFya1BvaW50KTtcbiAgICB2YXIgbWFya0xhYmVsID0gbWFya1BvaW50SXNPYmplY3QgPyBtYXJrUG9pbnQubGFiZWwgOiBtYXJrUG9pbnQ7XG4gICAgdmFyIG1hcmtTdHlsZSA9IG1hcmtQb2ludElzT2JqZWN0ID8gX2V4dGVuZHMoe30sIHN0eWxlLCBtYXJrUG9pbnQuc3R5bGUpIDogc3R5bGU7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFya0NsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IG1hcmtTdHlsZSxcbiAgICAgICAga2V5OiBwb2ludFxuICAgICAgfSxcbiAgICAgIG1hcmtMYWJlbFxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICBlbGVtZW50c1xuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya3M7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuXG52YXIgY2FsY1BvaW50cyA9IGZ1bmN0aW9uIGNhbGNQb2ludHModmVydGljYWwsIG1hcmtzLCBkb3RzLCBzdGVwLCBtaW4sIG1heCkge1xuICB3YXJuaW5nKGRvdHMgPyBzdGVwID4gMCA6IHRydWUsICdgU2xpZGVyW3N0ZXBdYCBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXIgaW4gb3JkZXIgdG8gbWFrZSBTbGlkZXJbZG90c10gd29yay4nKTtcbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKG1hcmtzKS5tYXAocGFyc2VGbG9hdCk7XG4gIGlmIChkb3RzKSB7XG4gICAgZm9yICh2YXIgaSA9IG1pbjsgaSA8PSBtYXg7IGkgPSBpICsgc3RlcCkge1xuICAgICAgaWYgKHBvaW50cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgICAgcG9pbnRzLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwb2ludHM7XG59O1xuXG52YXIgU3RlcHMgPSBmdW5jdGlvbiBTdGVwcyhfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIHZlcnRpY2FsID0gX3JlZi52ZXJ0aWNhbCxcbiAgICAgIG1hcmtzID0gX3JlZi5tYXJrcyxcbiAgICAgIGRvdHMgPSBfcmVmLmRvdHMsXG4gICAgICBzdGVwID0gX3JlZi5zdGVwLFxuICAgICAgaW5jbHVkZWQgPSBfcmVmLmluY2x1ZGVkLFxuICAgICAgbG93ZXJCb3VuZCA9IF9yZWYubG93ZXJCb3VuZCxcbiAgICAgIHVwcGVyQm91bmQgPSBfcmVmLnVwcGVyQm91bmQsXG4gICAgICBtYXggPSBfcmVmLm1heCxcbiAgICAgIG1pbiA9IF9yZWYubWluLFxuICAgICAgZG90U3R5bGUgPSBfcmVmLmRvdFN0eWxlLFxuICAgICAgYWN0aXZlRG90U3R5bGUgPSBfcmVmLmFjdGl2ZURvdFN0eWxlO1xuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgdmFyIGVsZW1lbnRzID0gY2FsY1BvaW50cyh2ZXJ0aWNhbCwgbWFya3MsIGRvdHMsIHN0ZXAsIG1pbiwgbWF4KS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIG9mZnNldCA9IE1hdGguYWJzKHBvaW50IC0gbWluKSAvIHJhbmdlICogMTAwICsgJyUnO1xuXG4gICAgdmFyIGlzQWN0aXZlZCA9ICFpbmNsdWRlZCAmJiBwb2ludCA9PT0gdXBwZXJCb3VuZCB8fCBpbmNsdWRlZCAmJiBwb2ludCA8PSB1cHBlckJvdW5kICYmIHBvaW50ID49IGxvd2VyQm91bmQ7XG4gICAgdmFyIHN0eWxlID0gdmVydGljYWwgPyBfZXh0ZW5kcyh7IGJvdHRvbTogb2Zmc2V0IH0sIGRvdFN0eWxlKSA6IF9leHRlbmRzKHsgbGVmdDogb2Zmc2V0IH0sIGRvdFN0eWxlKTtcbiAgICBpZiAoaXNBY3RpdmVkKSB7XG4gICAgICBzdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlRG90U3R5bGUpO1xuICAgIH1cblxuICAgIHZhciBwb2ludENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kb3QnLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRvdC1hY3RpdmUnLCBpc0FjdGl2ZWQpLCBfY2xhc3NOYW1lcykpO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogcG9pbnRDbGFzc05hbWUsIHN0eWxlOiBzdHlsZSwga2V5OiBwb2ludCB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctc3RlcCcgfSxcbiAgICBlbGVtZW50c1xuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIFRyYWNrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBpbmNsdWRlZCA9IHByb3BzLmluY2x1ZGVkLFxuICAgICAgdmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldCxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG5cblxuICB2YXIgcG9zaXRvblN0eWxlID0gdmVydGljYWwgPyB7XG4gICAgYm90dG9tOiBvZmZzZXQgKyAnJScsXG4gICAgaGVpZ2h0OiBsZW5ndGggKyAnJSdcbiAgfSA6IHtcbiAgICBsZWZ0OiBvZmZzZXQgKyAnJScsXG4gICAgd2lkdGg6IGxlbmd0aCArICclJ1xuICB9O1xuXG4gIHZhciBlbFN0eWxlID0gX2V4dGVuZHMoe1xuICAgIHZpc2liaWxpdHk6IGluY2x1ZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcbiAgfSwgc3R5bGUsIHBvc2l0b25TdHlsZSk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogZWxTdHlsZSB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXQgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldCc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBTdGVwcyBmcm9tICcuL1N0ZXBzJztcbmltcG9ydCBNYXJrcyBmcm9tICcuL01hcmtzJztcbmltcG9ydCBIYW5kbGUgZnJvbSAnLi4vSGFuZGxlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ29tcG9uZW50RW5oYW5jZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50RW5oYW5jZXIocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRFbmhhbmNlcik7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb21wb25lbnRFbmhhbmNlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc1ZlcnRpY2FsID0gX3RoaXMucHJvcHMudmVydGljYWw7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldE1vdXNlUG9zaXRpb24oaXNWZXJ0aWNhbCwgZSk7XG4gICAgICAgIGlmICghdXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpKSB7XG4gICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gdXRpbHMuZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb24oaXNWZXJ0aWNhbCwgZS50YXJnZXQpO1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSBwb3NpdGlvbiAtIGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICAgIHBvc2l0aW9uID0gaGFuZGxlUG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMub25TdGFydChwb3NpdGlvbik7XG4gICAgICAgIF90aGlzLmFkZERvY3VtZW50TW91c2VFdmVudHMoKTtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh1dGlscy5pc05vdFRvdWNoRXZlbnQoZSkpIHJldHVybjtcblxuICAgICAgICB2YXIgaXNWZXJ0aWNhbCA9IF90aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5nZXRUb3VjaFBvc2l0aW9uKGlzVmVydGljYWwsIGUpO1xuICAgICAgICBpZiAoIXV0aWxzLmlzRXZlbnRGcm9tSGFuZGxlKGUsIF90aGlzLmhhbmRsZXNSZWZzKSkge1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHV0aWxzLmdldEhhbmRsZUNlbnRlclBvc2l0aW9uKGlzVmVydGljYWwsIGUudGFyZ2V0KTtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gcG9zaXRpb24gLSBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICBwb3NpdGlvbiA9IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLm9uU3RhcnQocG9zaXRpb24pO1xuICAgICAgICBfdGhpcy5hZGREb2N1bWVudFRvdWNoRXZlbnRzKCk7XG4gICAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghX3RoaXMuc2xpZGVyUmVmKSB7XG4gICAgICAgICAgX3RoaXMub25FbmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0TW91c2VQb3NpdGlvbihfdGhpcy5wcm9wcy52ZXJ0aWNhbCwgZSk7XG4gICAgICAgIF90aGlzLm9uTW92ZShlLCBwb3NpdGlvbiAtIF90aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUpIHx8ICFfdGhpcy5zbGlkZXJSZWYpIHtcbiAgICAgICAgICBfdGhpcy5vbkVuZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldFRvdWNoUG9zaXRpb24oX3RoaXMucHJvcHMudmVydGljYWwsIGUpO1xuICAgICAgICBfdGhpcy5vbk1vdmUoZSwgcG9zaXRpb24gLSBfdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVTbGlkZXIgPSBmdW5jdGlvbiAoc2xpZGVyKSB7XG4gICAgICAgIF90aGlzLnNsaWRlclJlZiA9IHNsaWRlcjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBzdGVwID0gcHJvcHMuc3RlcCxcbiAgICAgICAgICAgIG1heCA9IHByb3BzLm1heCxcbiAgICAgICAgICAgIG1pbiA9IHByb3BzLm1pbjtcblxuICAgICAgICB3YXJuaW5nKHN0ZXAgJiYgTWF0aC5mbG9vcihzdGVwKSA9PT0gc3RlcCA/IChtYXggLSBtaW4pICUgc3RlcCA9PT0gMCA6IHRydWUsICdTbGlkZXJbbWF4XSAtIFNsaWRlclttaW5dICglcykgc2hvdWxkIGJlIGEgbXVsdGlwbGUgb2YgU2xpZGVyW3N0ZXBdICglcyknLCBtYXggLSBtaW4sIHN0ZXApO1xuICAgICAgfVxuICAgICAgX3RoaXMuaGFuZGxlc1JlZnMgPSB7fTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcG9uZW50RW5oYW5jZXIsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmIChfZ2V0KENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsVW5tb3VudCcsIHRoaXMpKSBfZ2V0KENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsVW5tb3VudCcsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhZGREb2N1bWVudFRvdWNoRXZlbnRzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoRXZlbnRzKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgdGhpcy5vblRvdWNoVXBMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMub25FbmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZERvY3VtZW50TW91c2VFdmVudHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VFdmVudHMoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5vbkVuZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlRG9jdW1lbnRFdmVudHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50RXZlbnRzKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vblRvdWNoTW92ZUxpc3RlbmVyICYmIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5vblRvdWNoVXBMaXN0ZW5lciAmJiB0aGlzLm9uVG91Y2hVcExpc3RlbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lciAmJiB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIgJiYgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2xpZGVyU3RhcnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNsaWRlclN0YXJ0KCkge1xuICAgICAgICB2YXIgc2xpZGVyID0gdGhpcy5zbGlkZXJSZWY7XG4gICAgICAgIHZhciByZWN0ID0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gcmVjdC50b3AgOiByZWN0LmxlZnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2xpZGVyTGVuZ3RoJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbGlkZXJMZW5ndGgoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlclJlZjtcbiAgICAgICAgaWYgKCFzbGlkZXIpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb29yZHMgPSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gY29vcmRzLmhlaWdodCA6IGNvb3Jkcy53aWR0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjYWxjVmFsdWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZShvZmZzZXQpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF9wcm9wcy52ZXJ0aWNhbCxcbiAgICAgICAgICAgIG1pbiA9IF9wcm9wcy5taW4sXG4gICAgICAgICAgICBtYXggPSBfcHJvcHMubWF4O1xuXG4gICAgICAgIHZhciByYXRpbyA9IE1hdGguYWJzKE1hdGgubWF4KG9mZnNldCwgMCkgLyB0aGlzLmdldFNsaWRlckxlbmd0aCgpKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdmVydGljYWwgPyAoMSAtIHJhdGlvKSAqIChtYXggLSBtaW4pICsgbWluIDogcmF0aW8gKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhbGNWYWx1ZUJ5UG9zJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVmFsdWVCeVBvcyhwb3NpdGlvbikge1xuICAgICAgICB2YXIgcGl4ZWxPZmZzZXQgPSBwb3NpdGlvbiAtIHRoaXMuZ2V0U2xpZGVyU3RhcnQoKTtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMudHJpbUFsaWduVmFsdWUodGhpcy5jYWxjVmFsdWUocGl4ZWxPZmZzZXQpKTtcbiAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjYWxjT2Zmc2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjT2Zmc2V0KHZhbHVlKSB7XG4gICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG1pbiA9IF9wcm9wczIubWluLFxuICAgICAgICAgICAgbWF4ID0gX3Byb3BzMi5tYXg7XG5cbiAgICAgICAgdmFyIHJhdGlvID0gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xuICAgICAgICByZXR1cm4gcmF0aW8gKiAxMDA7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2F2ZUhhbmRsZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUhhbmRsZShpbmRleCwgaGFuZGxlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlc1JlZnNbaW5kZXhdID0gaGFuZGxlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG1hcmtzID0gX3Byb3BzMy5tYXJrcyxcbiAgICAgICAgICAgIGRvdHMgPSBfcHJvcHMzLmRvdHMsXG4gICAgICAgICAgICBzdGVwID0gX3Byb3BzMy5zdGVwLFxuICAgICAgICAgICAgaW5jbHVkZWQgPSBfcHJvcHMzLmluY2x1ZGVkLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfcHJvcHMzLnZlcnRpY2FsLFxuICAgICAgICAgICAgbWluID0gX3Byb3BzMy5taW4sXG4gICAgICAgICAgICBtYXggPSBfcHJvcHMzLm1heCxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICAgIG1heGltdW1UcmFja1N0eWxlID0gX3Byb3BzMy5tYXhpbXVtVHJhY2tTdHlsZSxcbiAgICAgICAgICAgIHN0eWxlID0gX3Byb3BzMy5zdHlsZSxcbiAgICAgICAgICAgIHJhaWxTdHlsZSA9IF9wcm9wczMucmFpbFN0eWxlLFxuICAgICAgICAgICAgZG90U3R5bGUgPSBfcHJvcHMzLmRvdFN0eWxlLFxuICAgICAgICAgICAgYWN0aXZlRG90U3R5bGUgPSBfcHJvcHMzLmFjdGl2ZURvdFN0eWxlO1xuXG4gICAgICAgIHZhciBfZ2V0JGNhbGwgPSBfZ2V0KENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksICdyZW5kZXInLCB0aGlzKS5jYWxsKHRoaXMpLFxuICAgICAgICAgICAgdHJhY2tzID0gX2dldCRjYWxsLnRyYWNrcyxcbiAgICAgICAgICAgIGhhbmRsZXMgPSBfZ2V0JGNhbGwuaGFuZGxlcztcblxuICAgICAgICB2YXIgc2xpZGVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctd2l0aC1tYXJrcycsIE9iamVjdC5rZXlzKG1hcmtzKS5sZW5ndGgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy12ZXJ0aWNhbCcsIHZlcnRpY2FsKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBjbGFzc05hbWUsIGNsYXNzTmFtZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogdGhpcy5zYXZlU2xpZGVyLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBzbGlkZXJDbGFzc05hbWUsXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgICAgb25Nb3VzZURvd246IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Nb3VzZURvd24sXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1yYWlsJyxcbiAgICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgbWF4aW11bVRyYWNrU3R5bGUsIHJhaWxTdHlsZSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0cmFja3MsXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGVwcywge1xuICAgICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgICBkb3RzOiBkb3RzLFxuICAgICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICAgIGxvd2VyQm91bmQ6IHRoaXMuZ2V0TG93ZXJCb3VuZCgpLFxuICAgICAgICAgICAgdXBwZXJCb3VuZDogdGhpcy5nZXRVcHBlckJvdW5kKCksXG4gICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgZG90U3R5bGU6IGRvdFN0eWxlLFxuICAgICAgICAgICAgYWN0aXZlRG90U3R5bGU6IGFjdGl2ZURvdFN0eWxlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGFuZGxlcyxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtzLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctbWFyaycsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgICBpbmNsdWRlZDogaW5jbHVkZWQsXG4gICAgICAgICAgICBsb3dlckJvdW5kOiB0aGlzLmdldExvd2VyQm91bmQoKSxcbiAgICAgICAgICAgIHVwcGVyQm91bmQ6IHRoaXMuZ2V0VXBwZXJCb3VuZCgpLFxuICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICBtaW46IG1pblxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudEVuaGFuY2VyO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kaXNwbGF5TmFtZSA9ICdDb21wb25lbnRFbmhhbmNlcignICsgQ29tcG9uZW50LmRpc3BsYXlOYW1lICsgJyknLCBfY2xhc3MucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIENvbXBvbmVudC5wcm9wVHlwZXMsIHtcbiAgICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWFya3M6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5jbHVkZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQmVmb3JlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25BZnRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFuZGxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkb3RzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWluaW11bVRyYWNrU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsICAgICBtYXhpbXVtVHJhY2tTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgICAgIGhhbmRsZVN0eWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KV0pLFxuICAgIHRyYWNrU3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXSksXG4gICAgcmFpbFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRvdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGFjdGl2ZURvdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gX2V4dGVuZHMoe30sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6ICdyYy1zbGlkZXInLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgbWFya3M6IHt9LFxuICAgIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKF9yZWYpIHtcbiAgICAgIHZhciBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnaW5kZXgnXSk7XG5cbiAgICAgIGRlbGV0ZSByZXN0UHJvcHMuZHJhZ2dpbmc7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGUsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHsga2V5OiBpbmRleCB9KSk7XG4gICAgfSxcblxuICAgIG9uQmVmb3JlQ2hhbmdlOiBub29wLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uQWZ0ZXJDaGFuZ2U6IG5vb3AsXG4gICAgaW5jbHVkZWQ6IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICB0cmFja1N0eWxlOiBbe31dLFxuICAgIGhhbmRsZVN0eWxlOiBbe31dLFxuICAgIHJhaWxTdHlsZToge30sXG4gICAgZG90U3R5bGU6IHt9LFxuICAgIGFjdGl2ZURvdFN0eWxlOiB7fVxuICB9KSwgX3RlbXA7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ3JjLXRvb2x0aXAnO1xuaW1wb3J0IEhhbmRsZSBmcm9tICcuL0hhbmRsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwKENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb21wb25lbnRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbXBvbmVudFdyYXBwZXIocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRXcmFwcGVyKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbXBvbmVudFdyYXBwZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnRXcmFwcGVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5oYW5kbGVUb29sdGlwVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIChpbmRleCwgdmlzaWJsZSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpc2libGVzOiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLnZpc2libGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIGluZGV4LCB2aXNpYmxlKSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVdpdGhUb29sdGlwID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgICAgIGRyYWdnaW5nID0gX3JlZi5kcmFnZ2luZyxcbiAgICAgICAgICAgIGluZGV4ID0gX3JlZi5pbmRleCxcbiAgICAgICAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3ZhbHVlJywgJ2RyYWdnaW5nJywgJ2luZGV4JywgJ2Rpc2FibGVkJ10pO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgdGlwRm9ybWF0dGVyID0gX3RoaXMkcHJvcHMudGlwRm9ybWF0dGVyLFxuICAgICAgICAgICAgdGlwUHJvcHMgPSBfdGhpcyRwcm9wcy50aXBQcm9wcyxcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlID0gX3RoaXMkcHJvcHMuaGFuZGxlU3R5bGU7XG5cbiAgICAgICAgdmFyIF90aXBQcm9wcyRwcmVmaXhDbHMgPSB0aXBQcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGlwUHJvcHMkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAncmMtc2xpZGVyLXRvb2x0aXAnIDogX3RpcFByb3BzJHByZWZpeENscyxcbiAgICAgICAgICAgIF90aXBQcm9wcyRvdmVybGF5ID0gdGlwUHJvcHMub3ZlcmxheSxcbiAgICAgICAgICAgIG92ZXJsYXkgPSBfdGlwUHJvcHMkb3ZlcmxheSA9PT0gdW5kZWZpbmVkID8gdGlwRm9ybWF0dGVyKHZhbHVlKSA6IF90aXBQcm9wcyRvdmVybGF5LFxuICAgICAgICAgICAgX3RpcFByb3BzJHBsYWNlbWVudCA9IHRpcFByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IF90aXBQcm9wcyRwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCA/ICd0b3AnIDogX3RpcFByb3BzJHBsYWNlbWVudCxcbiAgICAgICAgICAgIHJlc3RUb29sdGlwUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGlwUHJvcHMsIFsncHJlZml4Q2xzJywgJ292ZXJsYXknLCAncGxhY2VtZW50J10pO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFRvb2x0aXAsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHJlc3RUb29sdGlwUHJvcHMsIHtcbiAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICAgICAgdmlzaWJsZTogIWRpc2FibGVkICYmIChfdGhpcy5zdGF0ZS52aXNpYmxlc1tpbmRleF0gfHwgZHJhZ2dpbmcpLFxuICAgICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGhhbmRsZVN0eWxlWzBdKSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlVG9vbHRpcFZpc2libGVDaGFuZ2UoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlVG9vbHRpcFZpc2libGVDaGFuZ2UoaW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnN0YXRlID0geyB2aXNpYmxlczoge30gfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29tcG9uZW50V3JhcHBlciwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGhhbmRsZTogdGhpcy5oYW5kbGVXaXRoVG9vbHRpcCB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbXBvbmVudFdyYXBwZXI7XG4gIH0oUmVhY3QuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICB0aXBGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhbmRsZVN0eWxlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICB0aXBQcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9LCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIHRpcEZvcm1hdHRlcjogZnVuY3Rpb24gdGlwRm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIGhhbmRsZVN0eWxlOiBbe31dLFxuICAgIHRpcFByb3BzOiB7fVxuICB9LCBfdGVtcDtcbn0iLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyJztcbmltcG9ydCBSYW5nZSBmcm9tICcuL1JhbmdlJztcbmltcG9ydCBIYW5kbGUgZnJvbSAnLi9IYW5kbGUnO1xuaW1wb3J0IGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwIGZyb20gJy4vY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAnO1xuXG5TbGlkZXIuUmFuZ2UgPSBSYW5nZTtcblNsaWRlci5IYW5kbGUgPSBIYW5kbGU7XG5TbGlkZXIuY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAgPSBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcDtcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcbmV4cG9ydCB7IFJhbmdlLCBIYW5kbGUsIGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwIH07IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVudEZyb21IYW5kbGUoZSwgaGFuZGxlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoaGFuZGxlcykuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGUudGFyZ2V0ID09PSBmaW5kRE9NTm9kZShoYW5kbGVzW2tleV0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVPdXRPZlJhbmdlKHZhbHVlLCBfcmVmKSB7XG4gIHZhciBtaW4gPSBfcmVmLm1pbixcbiAgICAgIG1heCA9IF9yZWYubWF4O1xuXG4gIHJldHVybiB2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90VG91Y2hFdmVudChlKSB7XG4gIHJldHVybiBlLnRvdWNoZXMubGVuZ3RoID4gMSB8fCBlLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RvdWNoZW5kJyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3RQb2ludCh2YWwsIF9yZWYyKSB7XG4gIHZhciBtYXJrcyA9IF9yZWYyLm1hcmtzLFxuICAgICAgc3RlcCA9IF9yZWYyLnN0ZXAsXG4gICAgICBtaW4gPSBfcmVmMi5taW47XG5cbiAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKG1hcmtzKS5tYXAocGFyc2VGbG9hdCk7XG4gIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgdmFyIGNsb3Nlc3RTdGVwID0gTWF0aC5yb3VuZCgodmFsIC0gbWluKSAvIHN0ZXApICogc3RlcCArIG1pbjtcbiAgICBwb2ludHMucHVzaChjbG9zZXN0U3RlcCk7XG4gIH1cbiAgdmFyIGRpZmZzID0gcG9pbnRzLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModmFsIC0gcG9pbnQpO1xuICB9KTtcbiAgcmV0dXJuIHBvaW50c1tkaWZmcy5pbmRleE9mKE1hdGgubWluLmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShkaWZmcykpKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmVjaXNpb24oc3RlcCkge1xuICB2YXIgc3RlcFN0cmluZyA9IHN0ZXAudG9TdHJpbmcoKTtcbiAgdmFyIHByZWNpc2lvbiA9IDA7XG4gIGlmIChzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgcHJlY2lzaW9uID0gc3RlcFN0cmluZy5sZW5ndGggLSBzdGVwU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XG4gIH1cbiAgcmV0dXJuIHByZWNpc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24odmVydGljYWwsIGUpIHtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZS5jbGllbnRZIDogZS5wYWdlWDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdWNoUG9zaXRpb24odmVydGljYWwsIGUpIHtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLnRvdWNoZXNbMF0ucGFnZVg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYW5kbGVDZW50ZXJQb3NpdGlvbih2ZXJ0aWNhbCwgaGFuZGxlKSB7XG4gIHZhciBjb29yZHMgPSBoYW5kbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGNvb3Jkcy50b3AgKyBjb29yZHMuaGVpZ2h0ICogMC41IDogY29vcmRzLmxlZnQgKyBjb29yZHMud2lkdGggKiAwLjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVWYWx1ZUluUmFuZ2UodmFsLCBfcmVmMykge1xuICB2YXIgbWF4ID0gX3JlZjMubWF4LFxuICAgICAgbWluID0gX3JlZjMubWluO1xuXG4gIGlmICh2YWwgPD0gbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsID49IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVZhbHVlUHJlY2lzaW9uKHZhbCwgcHJvcHMpIHtcbiAgdmFyIHN0ZXAgPSBwcm9wcy5zdGVwO1xuXG4gIHZhciBjbG9zZXN0UG9pbnQgPSBnZXRDbG9zZXN0UG9pbnQodmFsLCBwcm9wcyk7XG4gIHJldHVybiBzdGVwID09PSBudWxsID8gY2xvc2VzdFBvaW50IDogcGFyc2VGbG9hdChjbG9zZXN0UG9pbnQudG9GaXhlZChnZXRQcmVjaXNpb24oc3RlcCkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlRXZlbnQoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==