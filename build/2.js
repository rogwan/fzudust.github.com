(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/antd/es/button/button-group.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/button/button-group.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var ButtonGroup = function ButtonGroup(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-btn-group' : _props$prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);
    // large => lg
    // small => sm


    var sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
        default:
            break;
    }
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-' + sizeCls, sizeCls), className);
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]('div', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, others, { className: classes }));
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./node_modules/antd/es/button/button.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/button/button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/antd/es/_util/wave.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    var SPACE = needInserted ? ' ' : '';
    // strictNullChecks oops.
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Button, _React$Component);

    function Button(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Button);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = function (e) {
            var loading = _this.state.loading;
            var onClick = _this.props.onClick;

            if (!!loading) {
                return;
            }
            if (onClick) {
                onClick(e);
            }
        };
        _this.state = {
            loading: props.loading,
            hasTwoCNChar: false
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fixTwoCNChar();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentLoading = this.props.loading;
            var loading = nextProps.loading;
            if (currentLoading) {
                clearTimeout(this.delayTimeout);
            }
            if (typeof loading !== 'boolean' && loading && loading.delay) {
                this.delayTimeout = window.setTimeout(function () {
                    return _this2.setState({ loading: loading });
                }, loading.delay);
            } else {
                this.setState({ loading: loading });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.fixTwoCNChar();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'fixTwoCNChar',
        value: function fixTwoCNChar() {
            // Fix for HOC usage like <FormatMessage />
            var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_7__["findDOMNode"])(this);
            var buttonText = node.textContent || node.innerText;
            if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
                if (!this.state.hasTwoCNChar) {
                    this.setState({
                        hasTwoCNChar: true
                    });
                }
            } else if (this.state.hasTwoCNChar) {
                this.setState({
                    hasTwoCNChar: false
                });
            }
        }
    }, {
        key: 'isNeedInserted',
        value: function isNeedInserted() {
            var _props = this.props,
                icon = _props.icon,
                children = _props.children;

            return react__WEBPACK_IMPORTED_MODULE_6__["Children"].count(children) === 1 && !icon;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this3 = this;

            var _a = this.props,
                type = _a.type,
                shape = _a.shape,
                size = _a.size,
                className = _a.className,
                children = _a.children,
                icon = _a.icon,
                prefixCls = _a.prefixCls,
                ghost = _a.ghost,
                _loadingProp = _a.loading,
                block = _a.block,
                rest = __rest(_a, ["type", "shape", "size", "className", "children", "icon", "prefixCls", "ghost", "loading", "block"]);var _state = this.state,
                loading = _state.loading,
                hasTwoCNChar = _state.hasTwoCNChar;
            // large => lg
            // small => sm

            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var now = new Date();
            var isChristmas = now.getMonth() === 11 && now.getDate() === 25;
            var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + type, type), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + shape, shape), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + sizeCls, sizeCls), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-icon-only', !children && icon), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-loading', loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-background-ghost', ghost), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-two-chinese-chars', hasTwoCNChar), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-block', block), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, 'christmas', isChristmas), _classNames));
            var iconType = loading ? 'loading' : icon;
            var iconNode = iconType ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: iconType }) : null;
            var kids = children || children === 0 ? react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(children, function (child) {
                return insertSpace(child, _this3.isNeedInserted());
            }) : null;
            var title = isChristmas ? 'Ho Ho Ho!' : rest.title;
            if ('href' in rest) {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'a',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, { className: classes, onClick: this.handleClick, title: title }),
                    iconNode,
                    kids
                );
            } else {
                // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
                var htmlType = rest.htmlType,
                    otherProps = __rest(rest, ["htmlType"]);
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _util_wave__WEBPACK_IMPORTED_MODULE_10__["default"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'button',
                        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, { type: htmlType || 'button', className: classes, onClick: this.handleClick, title: title }),
                        iconNode,
                        kids
                    )
                );
            }
        }
    }]);

    return Button;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

Button.__ANT_BUTTON = true;
Button.defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    ghost: false,
    block: false
};
Button.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"],
    shape: prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"](['circle', 'circle-outline']),
    size: prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"](['large', 'default', 'small']),
    htmlType: prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"](['submit', 'button', 'reset']),
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
    loading: prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"], prop_types__WEBPACK_IMPORTED_MODULE_8__["object"]]),
    className: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"],
    icon: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"],
    block: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"]
};

/***/ }),

/***/ "./node_modules/antd/es/button/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/button/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./node_modules/antd/es/button/button.js");
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-group */ "./node_modules/antd/es/button/button-group.js");


_button__WEBPACK_IMPORTED_MODULE_0__["default"].Group = _button_group__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_button__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/antd/es/input/Group.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/input/Group.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var Group = function Group(props) {
    var _classNames;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-input-group' : _props$prefixCls,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className;

    var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-lg', props.size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-compact', props.compact), _classNames), className);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'span',
        { className: cls, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, onFocus: props.onFocus, onBlur: props.onBlur },
        props.children
    );
};
/* harmony default export */ __webpack_exports__["default"] = (Group);

/***/ }),

/***/ "./node_modules/antd/es/input/Input.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/input/Input.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");










function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var Input = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Input, _React$Component);

    function Input() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Input);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.saveInput = function (node) {
            _this.input = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Input, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }
    }, {
        key: 'select',
        value: function select() {
            this.input.select();
        }
    }, {
        key: 'getInputClassName',
        value: function getInputClassName() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                disabled = _props.disabled;

            return classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
        }
    }, {
        key: 'renderLabeledInput',
        value: function renderLabeledInput(children) {
            var _classNames3;

            var props = this.props;
            // Not wrap when there is not addons
            if (!props.addonBefore && !props.addonAfter) {
                return children;
            }
            var wrapperClassName = props.prefixCls + '-group';
            var addonClassName = wrapperClassName + '-addon';
            var addonBefore = props.addonBefore ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: addonClassName },
                props.addonBefore
            ) : null;
            var addonAfter = props.addonAfter ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: addonClassName },
                props.addonAfter
            ) : null;
            var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(props.prefixCls + '-wrapper', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, wrapperClassName, addonBefore || addonAfter));
            var groupClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(props.prefixCls + '-group-wrapper', (_classNames3 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames3, props.prefixCls + '-group-wrapper-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames3, props.prefixCls + '-group-wrapper-lg', props.size === 'large'), _classNames3));
            // Need another wrapper for changing display:table to display:inline-block
            // and put style prop in wrapper
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: groupClassName, style: props.style },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: className },
                    addonBefore,
                    react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](children, { style: null }),
                    addonAfter
                )
            );
        }
    }, {
        key: 'renderLabeledIcon',
        value: function renderLabeledIcon(children) {
            var _classNames4;

            var props = this.props;

            if (!('prefix' in props || 'suffix' in props)) {
                return children;
            }
            var prefix = props.prefix ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: props.prefixCls + '-prefix' },
                props.prefix
            ) : null;
            var suffix = props.suffix ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: props.prefixCls + '-suffix' },
                props.suffix
            ) : null;
            var affixWrapperCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()(props.className, props.prefixCls + '-affix-wrapper', (_classNames4 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames4, props.prefixCls + '-affix-wrapper-sm', props.size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames4, props.prefixCls + '-affix-wrapper-lg', props.size === 'large'), _classNames4));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: affixWrapperCls, style: props.style },
                prefix,
                react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](children, { style: null, className: this.getInputClassName() }),
                suffix
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _props2 = this.props,
                value = _props2.value,
                className = _props2.className;
            // Fix https://fb.me/react-unknown-prop

            var otherProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
            if ('value' in this.props) {
                otherProps.value = fixControlledValue(value);
                // Input elements must be either controlled or uncontrolled,
                // specify either the value prop, or the defaultValue prop, but not both.
                delete otherProps.defaultValue;
            }
            return this.renderLabeledIcon(react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('input', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(this.getInputClassName(), className), onKeyDown: this.handleKeyDown, ref: this.saveInput })));
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderLabeledInput(this.renderInput());
        }
    }]);

    return Input;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

Input.defaultProps = {
    prefixCls: 'ant-input',
    type: 'text',
    disabled: false
};
Input.propTypes = {
    type: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
    id: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
    size: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"](['small', 'default', 'large']),
    maxLength: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_7__["bool"],
    value: prop_types__WEBPACK_IMPORTED_MODULE_7__["any"],
    defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_7__["any"],
    className: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
    addonBefore: prop_types__WEBPACK_IMPORTED_MODULE_7__["node"],
    addonAfter: prop_types__WEBPACK_IMPORTED_MODULE_7__["node"],
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
    onPressEnter: prop_types__WEBPACK_IMPORTED_MODULE_7__["func"],
    onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_7__["func"],
    onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_7__["func"],
    onFocus: prop_types__WEBPACK_IMPORTED_MODULE_7__["func"],
    onBlur: prop_types__WEBPACK_IMPORTED_MODULE_7__["func"],
    prefix: prop_types__WEBPACK_IMPORTED_MODULE_7__["node"],
    suffix: prop_types__WEBPACK_IMPORTED_MODULE_7__["node"]
};

/***/ }),

/***/ "./node_modules/antd/es/input/Search.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/input/Search.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./node_modules/antd/es/input/Input.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../button */ "./node_modules/antd/es/button/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var Search = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Search, _React$Component);

    function Search() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Search);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));

        _this.onSearch = function (e) {
            var onSearch = _this.props.onSearch;

            if (onSearch) {
                onSearch(_this.input.input.value, e);
            }
            _this.input.focus();
        };
        _this.saveInput = function (node) {
            _this.input = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Search, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }
    }, {
        key: 'getButtonOrIcon',
        value: function getButtonOrIcon() {
            var _props = this.props,
                enterButton = _props.enterButton,
                prefixCls = _props.prefixCls,
                size = _props.size,
                disabled = _props.disabled;

            var enterButtonAsElement = enterButton;
            var node = void 0;
            if (!enterButton) {
                node = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { className: prefixCls + '-icon', type: 'search', key: 'searchIcon' });
            } else if (enterButtonAsElement.type === _button__WEBPACK_IMPORTED_MODULE_10__["default"] || enterButtonAsElement.type === 'button') {
                node = react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](enterButtonAsElement, enterButtonAsElement.type === _button__WEBPACK_IMPORTED_MODULE_10__["default"] ? {
                    className: prefixCls + '-button',
                    size: size
                } : {});
            } else {
                node = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_10__["default"],
                    { className: prefixCls + '-button', type: 'primary', size: size, disabled: disabled, key: 'enterButton' },
                    enterButton === true ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { type: 'search' }) : enterButton
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](node, {
                onClick: this.onSearch
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                inputPrefixCls = _a.inputPrefixCls,
                size = _a.size,
                suffix = _a.suffix,
                enterButton = _a.enterButton,
                others = __rest(_a, ["className", "prefixCls", "inputPrefixCls", "size", "suffix", "enterButton"]);
            delete others.onSearch;
            var buttonOrIcon = this.getButtonOrIcon();
            var searchSuffix = suffix ? [suffix, buttonOrIcon] : buttonOrIcon;
            var inputClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-enter-button', !!enterButton), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + size, !!size), _classNames));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ onPressEnter: this.onSearch }, others, { size: size, className: inputClassName, prefixCls: inputPrefixCls, suffix: searchSuffix, ref: this.saveInput }));
        }
    }]);

    return Search;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

Search.defaultProps = {
    inputPrefixCls: 'ant-input',
    prefixCls: 'ant-input-search',
    enterButton: false
};

/***/ }),

/***/ "./node_modules/antd/es/input/TextArea.js":
/*!************************************************!*\
  !*** ./node_modules/antd/es/input/TextArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _calculateNodeHeight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculateNodeHeight */ "./node_modules/antd/es/input/calculateNodeHeight.js");










function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var TextArea = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TextArea, _React$Component);

    function TextArea() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TextArea);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));

        _this.state = {
            textareaStyles: {}
        };
        _this.resizeTextarea = function () {
            var autosize = _this.props.autosize;

            if (!autosize || !_this.textAreaRef) {
                return;
            }
            var minRows = autosize ? autosize.minRows : null;
            var maxRows = autosize ? autosize.maxRows : null;
            var textareaStyles = Object(_calculateNodeHeight__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.textAreaRef, false, minRows, maxRows);
            _this.setState({ textareaStyles: textareaStyles });
        };
        _this.handleTextareaChange = function (e) {
            if (!('value' in _this.props)) {
                _this.resizeTextarea();
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(e);
            }
        };
        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.saveTextAreaRef = function (textArea) {
            _this.textAreaRef = textArea;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TextArea, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.resizeTextarea();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // Re-render with the new content then recalculate the height as required.
            if (this.props.value !== nextProps.value) {
                if (this.nextFrameActionId) {
                    clearNextFrameAction(this.nextFrameActionId);
                }
                this.nextFrameActionId = onNextFrame(this.resizeTextarea);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.textAreaRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.textAreaRef.blur();
        }
    }, {
        key: 'getTextAreaClassName',
        value: function getTextAreaClassName() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                disabled = _props.disabled;

            return classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-disabled', disabled));
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var otherProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_7__["default"])(props, ['prefixCls', 'onPressEnter', 'autosize']);
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, this.state.textareaStyles);
            // Fix https://github.com/ant-design/ant-design/issues/6776
            // Make sure it could be reset when using form.getFieldDecorator
            if ('value' in otherProps) {
                otherProps.value = otherProps.value || '';
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('textarea', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, { className: this.getTextAreaClassName(), style: style, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: this.saveTextAreaRef }));
        }
    }]);

    return TextArea;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextArea);

TextArea.defaultProps = {
    prefixCls: 'ant-input'
};

/***/ }),

/***/ "./node_modules/antd/es/input/calculateNodeHeight.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/es/input/calculateNodeHeight.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateNodeHeight; });
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = void 0;
function calculateNodeStyling(node) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    var sizingStyle = SIZING_STYLE.map(function (name) {
        return name + ':' + style.getPropertyValue(name);
    }).join(';');
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox

    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        sizingStyle = _calculateNodeStyling.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content


    hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var minHeight = Number.MIN_SAFE_INTEGER;
    var maxHeight = Number.MAX_SAFE_INTEGER;
    var height = hiddenTextarea.scrollHeight;
    var overflowY = void 0;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}

/***/ }),

/***/ "./node_modules/antd/es/input/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/input/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/antd/es/input/Input.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./node_modules/antd/es/input/Group.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "./node_modules/antd/es/input/Search.js");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextArea */ "./node_modules/antd/es/input/TextArea.js");




_Input__WEBPACK_IMPORTED_MODULE_0__["default"].Group = _Group__WEBPACK_IMPORTED_MODULE_1__["default"];
_Input__WEBPACK_IMPORTED_MODULE_0__["default"].Search = _Search__WEBPACK_IMPORTED_MODULE_2__["default"];
_Input__WEBPACK_IMPORTED_MODULE_0__["default"].TextArea = _TextArea__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Input__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9idXR0b24vYnV0dG9uLWdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L0dyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC9UZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC9jYWxjdWxhdGVOb2RlSGVpZ2h0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDYztBQUNuRSxhQUFhLFNBQUksSUFBSSxTQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUhBQXlILGNBQWM7QUFDNUk7QUFDQSxLQUFLO0FBQ0w7QUFDK0I7QUFDSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpREFBVSxZQUFZLDJFQUFlLEdBQUc7QUFDMUQsV0FBVyxtREFBbUIsUUFBUSxvRUFBUSxHQUFHLFdBQVcscUJBQXFCO0FBQ2pGO0FBQ2UsMEVBQVcsRTs7Ozs7Ozs7Ozs7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QUFDQSx5REFBeUQsK0JBQStCLHdCQUF3QixpQ0FBaUMsK0JBQStCLGlDQUFpQyw2QkFBNkIscUJBQXFCO0FBQ25RO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQzs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDQTtBQUNFO0FBQ0k7QUFDbEMsOENBQUssU0FBUyw4Q0FBSztBQUNuQiw4Q0FBSyxVQUFVLCtDQUFNO0FBQ3JCLDhDQUFLLFlBQVksaURBQVE7QUFDViw2R0FBSyxFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBCdXR0b25Hcm91cCA9IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICdhbnQtYnRuLWdyb3VwJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiXSk7XG4gICAgLy8gbGFyZ2UgPT4gbGdcbiAgICAvLyBzbWFsbCA9PiBzbVxuXG5cbiAgICB2YXIgc2l6ZUNscyA9ICcnO1xuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBfZGVmaW5lUHJvcGVydHkoe30sIHByZWZpeENscyArICctJyArIHNpemVDbHMsIHNpemVDbHMpLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7IGNsYXNzTmFtZTogY2xhc3NlcyB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi4vX3V0aWwvd2F2ZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbnZhciByeFR3b0NOQ2hhciA9IC9eW1xcdTRlMDAtXFx1OWZhNV17Mn0kLztcbnZhciBpc1R3b0NOQ2hhciA9IHJ4VHdvQ05DaGFyLnRlc3QuYmluZChyeFR3b0NOQ2hhcik7XG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG4vLyBJbnNlcnQgb25lIHNwYWNlIGJldHdlZW4gdHdvIGNoaW5lc2UgY2hhcmFjdGVycyBhdXRvbWF0aWNhbGx5LlxuZnVuY3Rpb24gaW5zZXJ0U3BhY2UoY2hpbGQsIG5lZWRJbnNlcnRlZCkge1xuICAgIC8vIENoZWNrIHRoZSBjaGlsZCBpZiBpcyB1bmRlZmluZWQgb3IgbnVsbC5cbiAgICBpZiAoY2hpbGQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBTUEFDRSA9IG5lZWRJbnNlcnRlZCA/ICcgJyA6ICcnO1xuICAgIC8vIHN0cmljdE51bGxDaGVja3Mgb29wcy5cbiAgICBpZiAodHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgY2hpbGQgIT09ICdudW1iZXInICYmIGlzU3RyaW5nKGNoaWxkLnR5cGUpICYmIGlzVHdvQ05DaGFyKGNoaWxkLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7fSwgY2hpbGQucHJvcHMuY2hpbGRyZW4uc3BsaXQoJycpLmpvaW4oU1BBQ0UpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzVHdvQ05DaGFyKGNoaWxkKSkge1xuICAgICAgICAgICAgY2hpbGQgPSBjaGlsZC5zcGxpdCgnJykuam9pbihTUEFDRSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xufVxuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQnV0dG9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnV0dG9uKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQnV0dG9uKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBsb2FkaW5nID0gX3RoaXMuc3RhdGUubG9hZGluZztcbiAgICAgICAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcblxuICAgICAgICAgICAgaWYgKCEhbG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiBwcm9wcy5sb2FkaW5nLFxuICAgICAgICAgICAgaGFzVHdvQ05DaGFyOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJ1dHRvbiwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLmZpeFR3b0NOQ2hhcigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnRMb2FkaW5nID0gdGhpcy5wcm9wcy5sb2FkaW5nO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBuZXh0UHJvcHMubG9hZGluZztcbiAgICAgICAgICAgIGlmIChjdXJyZW50TG9hZGluZykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvYWRpbmcgIT09ICdib29sZWFuJyAmJiBsb2FkaW5nICYmIGxvYWRpbmcuZGVsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7IGxvYWRpbmc6IGxvYWRpbmcgfSk7XG4gICAgICAgICAgICAgICAgfSwgbG9hZGluZy5kZWxheSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBsb2FkaW5nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5maXhUd29DTkNoYXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxheVRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmaXhUd29DTkNoYXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZml4VHdvQ05DaGFyKCkge1xuICAgICAgICAgICAgLy8gRml4IGZvciBIT0MgdXNhZ2UgbGlrZSA8Rm9ybWF0TWVzc2FnZSAvPlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIHZhciBidXR0b25UZXh0ID0gbm9kZS50ZXh0Q29udGVudCB8fCBub2RlLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmVlZEluc2VydGVkKCkgJiYgaXNUd29DTkNoYXIoYnV0dG9uVGV4dCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaGFzVHdvQ05DaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzVHdvQ05DaGFyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5oYXNUd29DTkNoYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVHdvQ05DaGFyOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc05lZWRJbnNlcnRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc05lZWRJbnNlcnRlZCgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSAmJiAhaWNvbjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcyxcbiAgICAgICAgICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfYS50eXBlLFxuICAgICAgICAgICAgICAgIHNoYXBlID0gX2Euc2hhcGUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGdob3N0ID0gX2EuZ2hvc3QsXG4gICAgICAgICAgICAgICAgX2xvYWRpbmdQcm9wID0gX2EubG9hZGluZyxcbiAgICAgICAgICAgICAgICBibG9jayA9IF9hLmJsb2NrLFxuICAgICAgICAgICAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInR5cGVcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImljb25cIiwgXCJwcmVmaXhDbHNcIiwgXCJnaG9zdFwiLCBcImxvYWRpbmdcIiwgXCJibG9ja1wiXSk7dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IF9zdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgIGhhc1R3b0NOQ2hhciA9IF9zdGF0ZS5oYXNUd29DTkNoYXI7XG4gICAgICAgICAgICAvLyBsYXJnZSA9PiBsZ1xuICAgICAgICAgICAgLy8gc21hbGwgPT4gc21cblxuICAgICAgICAgICAgdmFyIHNpemVDbHMgPSAnJztcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUNscyA9ICdsZyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBpc0NocmlzdG1hcyA9IG5vdy5nZXRNb250aCgpID09PSAxMSAmJiBub3cuZ2V0RGF0ZSgpID09PSAyNTtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgdHlwZSwgdHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgc2hhcGUsIHNoYXBlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplQ2xzLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWljb24tb25seScsICFjaGlsZHJlbiAmJiBpY29uKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxvYWRpbmcnLCBsb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWJhY2tncm91bmQtZ2hvc3QnLCBnaG9zdCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy10d28tY2hpbmVzZS1jaGFycycsIGhhc1R3b0NOQ2hhciksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1ibG9jaycsIGJsb2NrKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCAnY2hyaXN0bWFzJywgaXNDaHJpc3RtYXMpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgdmFyIGljb25UeXBlID0gbG9hZGluZyA/ICdsb2FkaW5nJyA6IGljb247XG4gICAgICAgICAgICB2YXIgaWNvbk5vZGUgPSBpY29uVHlwZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiBpY29uVHlwZSB9KSA6IG51bGw7XG4gICAgICAgICAgICB2YXIga2lkcyA9IGNoaWxkcmVuIHx8IGNoaWxkcmVuID09PSAwID8gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zZXJ0U3BhY2UoY2hpbGQsIF90aGlzMy5pc05lZWRJbnNlcnRlZCgpKTtcbiAgICAgICAgICAgIH0pIDogbnVsbDtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGlzQ2hyaXN0bWFzID8gJ0hvIEhvIEhvIScgOiByZXN0LnRpdGxlO1xuICAgICAgICAgICAgaWYgKCdocmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJlc3QsIHsgY2xhc3NOYW1lOiBjbGFzc2VzLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCB0aXRsZTogdGl0bGUgfSksXG4gICAgICAgICAgICAgICAgICAgIGljb25Ob2RlLFxuICAgICAgICAgICAgICAgICAgICBraWRzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcmVjb2duaXplIHRoZSBgaHRtbFR5cGVgIHByb3Agb24gYSBET00gZWxlbWVudC4gSGVyZSB3ZSBwaWNrIGl0IG91dCBvZiBgcmVzdGAuXG4gICAgICAgICAgICAgICAgdmFyIGh0bWxUeXBlID0gcmVzdC5odG1sVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJQcm9wcyA9IF9fcmVzdChyZXN0LCBbXCJodG1sVHlwZVwiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFdhdmUsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7IHR5cGU6IGh0bWxUeXBlIHx8ICdidXR0b24nLCBjbGFzc05hbWU6IGNsYXNzZXMsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIHRpdGxlOiB0aXRsZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Ob2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2lkc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuQnV0dG9uLl9fQU5UX0JVVFRPTiA9IHRydWU7XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1idG4nLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGdob3N0OiBmYWxzZSxcbiAgICBibG9jazogZmFsc2Vcbn07XG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbJ2NpcmNsZScsICdjaXJjbGUtb3V0bGluZSddKSxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydsYXJnZScsICdkZWZhdWx0JywgJ3NtYWxsJ10pLFxuICAgIGh0bWxUeXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0J10pLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmxvY2s6IFByb3BUeXBlcy5ib29sXG59OyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vYnV0dG9uLWdyb3VwJztcbkJ1dHRvbi5Hcm91cCA9IEJ1dHRvbkdyb3VwO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xudmFyIEdyb3VwID0gZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1pbnB1dC1ncm91cCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgICBfcHJvcHMkY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWU7XG5cbiAgICB2YXIgY2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctbGcnLCBwcm9wcy5zaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNtJywgcHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1jb21wYWN0JywgcHJvcHMuY29tcGFjdCksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xzLCBzdHlsZTogcHJvcHMuc3R5bGUsIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSwgb25Gb2N1czogcHJvcHMub25Gb2N1cywgb25CbHVyOiBwcm9wcy5vbkJsdXIgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdyb3VwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgb21pdCBmcm9tICdvbWl0LmpzJztcbmZ1bmN0aW9uIGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhJbnB1dCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBJbnB1dCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSW5wdXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnB1dCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyID0gX3RoaXMkcHJvcHMub25QcmVzc0VudGVyLFxuICAgICAgICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzLm9uS2V5RG93bjtcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICAgICAgICAgIG9uS2V5RG93bihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLmlucHV0ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJbnB1dCwgW3tcbiAgICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2JsdXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZWxlY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5wdXRDbGFzc05hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXRDbGFzc05hbWUoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9wcm9wcy5zaXplLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctc20nLCBzaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxnJywgc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcsIGRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTGFiZWxlZElucHV0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsZWRJbnB1dChjaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzMztcblxuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIC8vIE5vdCB3cmFwIHdoZW4gdGhlcmUgaXMgbm90IGFkZG9uc1xuICAgICAgICAgICAgaWYgKCFwcm9wcy5hZGRvbkJlZm9yZSAmJiAhcHJvcHMuYWRkb25BZnRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB3cmFwcGVyQ2xhc3NOYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy1ncm91cCc7XG4gICAgICAgICAgICB2YXIgYWRkb25DbGFzc05hbWUgPSB3cmFwcGVyQ2xhc3NOYW1lICsgJy1hZGRvbic7XG4gICAgICAgICAgICB2YXIgYWRkb25CZWZvcmUgPSBwcm9wcy5hZGRvbkJlZm9yZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBhZGRvbkNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgICAgIHByb3BzLmFkZG9uQmVmb3JlXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBhZGRvbkFmdGVyID0gcHJvcHMuYWRkb25BZnRlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBhZGRvbkNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgICAgIHByb3BzLmFkZG9uQWZ0ZXJcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHMucHJlZml4Q2xzICsgJy13cmFwcGVyJywgX2RlZmluZVByb3BlcnR5KHt9LCB3cmFwcGVyQ2xhc3NOYW1lLCBhZGRvbkJlZm9yZSB8fCBhZGRvbkFmdGVyKSk7XG4gICAgICAgICAgICB2YXIgZ3JvdXBDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByb3BzLnByZWZpeENscyArICctZ3JvdXAtd3JhcHBlcicsIChfY2xhc3NOYW1lczMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMywgcHJvcHMucHJlZml4Q2xzICsgJy1ncm91cC13cmFwcGVyLXNtJywgcHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczMsIHByb3BzLnByZWZpeENscyArICctZ3JvdXAtd3JhcHBlci1sZycsIHByb3BzLnNpemUgPT09ICdsYXJnZScpLCBfY2xhc3NOYW1lczMpKTtcbiAgICAgICAgICAgIC8vIE5lZWQgYW5vdGhlciB3cmFwcGVyIGZvciBjaGFuZ2luZyBkaXNwbGF5OnRhYmxlIHRvIGRpc3BsYXk6aW5saW5lLWJsb2NrXG4gICAgICAgICAgICAvLyBhbmQgcHV0IHN0eWxlIHByb3AgaW4gd3JhcHBlclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBncm91cENsYXNzTmFtZSwgc3R5bGU6IHByb3BzLnN0eWxlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgc3R5bGU6IG51bGwgfSksXG4gICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJMYWJlbGVkSWNvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbGVkSWNvbihjaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzNDtcblxuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgaWYgKCEoJ3ByZWZpeCcgaW4gcHJvcHMgfHwgJ3N1ZmZpeCcgaW4gcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHByb3BzLnByZWZpeCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLXByZWZpeCcgfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5wcmVmaXhcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IHByb3BzLnN1ZmZpeCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLXN1ZmZpeCcgfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5zdWZmaXhcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGFmZml4V3JhcHBlckNscyA9IGNsYXNzTmFtZXMocHJvcHMuY2xhc3NOYW1lLCBwcm9wcy5wcmVmaXhDbHMgKyAnLWFmZml4LXdyYXBwZXInLCAoX2NsYXNzTmFtZXM0ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczQsIHByb3BzLnByZWZpeENscyArICctYWZmaXgtd3JhcHBlci1zbScsIHByb3BzLnNpemUgPT09ICdzbWFsbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXM0LCBwcm9wcy5wcmVmaXhDbHMgKyAnLWFmZml4LXdyYXBwZXItbGcnLCBwcm9wcy5zaXplID09PSAnbGFyZ2UnKSwgX2NsYXNzTmFtZXM0KSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGFmZml4V3JhcHBlckNscywgc3R5bGU6IHByb3BzLnN0eWxlIH0sXG4gICAgICAgICAgICAgICAgcHJlZml4LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgeyBzdHlsZTogbnVsbCwgY2xhc3NOYW1lOiB0aGlzLmdldElucHV0Q2xhc3NOYW1lKCkgfSksXG4gICAgICAgICAgICAgICAgc3VmZml4XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJJbnB1dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9wcm9wczIudmFsdWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWU7XG4gICAgICAgICAgICAvLyBGaXggaHR0cHM6Ly9mYi5tZS9yZWFjdC11bmtub3duLXByb3BcblxuICAgICAgICAgICAgdmFyIG90aGVyUHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIFsncHJlZml4Q2xzJywgJ29uUHJlc3NFbnRlcicsICdhZGRvbkJlZm9yZScsICdhZGRvbkFmdGVyJywgJ3ByZWZpeCcsICdzdWZmaXgnXSk7XG4gICAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgb3RoZXJQcm9wcy52YWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQsXG4gICAgICAgICAgICAgICAgLy8gc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCBib3RoLlxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvdGhlclByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxhYmVsZWRJY29uKFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHRoaXMuZ2V0SW5wdXRDbGFzc05hbWUoKSwgY2xhc3NOYW1lKSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sIHJlZjogdGhpcy5zYXZlSW5wdXQgfSkpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxhYmVsZWRJbnB1dCh0aGlzLnJlbmRlcklucHV0KCkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIElucHV0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1pbnB1dCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGRpc2FibGVkOiBmYWxzZVxufTtcbklucHV0LnByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnZGVmYXVsdCcsICdsYXJnZSddKSxcbiAgICBtYXhMZW5ndGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhZGRvbkJlZm9yZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgYWRkb25BZnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uUHJlc3NFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG4gICAgc3VmZml4OiBQcm9wVHlwZXMubm9kZVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcblxudmFyIFNlYXJjaCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNlYXJjaCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTZWFyY2goKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWFyY2gpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTZWFyY2guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWFyY2gpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5vblNlYXJjaCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgb25TZWFyY2ggPSBfdGhpcy5wcm9wcy5vblNlYXJjaDtcblxuICAgICAgICAgICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgb25TZWFyY2goX3RoaXMuaW5wdXQuaW5wdXQudmFsdWUsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLmlucHV0ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTZWFyY2gsIFt7XG4gICAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QnV0dG9uT3JJY29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ1dHRvbk9ySWNvbigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uID0gX3Byb3BzLmVudGVyQnV0dG9uLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9wcm9wcy5zaXplLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuXG4gICAgICAgICAgICB2YXIgZW50ZXJCdXR0b25Bc0VsZW1lbnQgPSBlbnRlckJ1dHRvbjtcbiAgICAgICAgICAgIHZhciBub2RlID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKCFlbnRlckJ1dHRvbikge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24nLCB0eXBlOiAnc2VhcmNoJywga2V5OiAnc2VhcmNoSWNvbicgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGVyQnV0dG9uQXNFbGVtZW50LnR5cGUgPT09IEJ1dHRvbiB8fCBlbnRlckJ1dHRvbkFzRWxlbWVudC50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBSZWFjdC5jbG9uZUVsZW1lbnQoZW50ZXJCdXR0b25Bc0VsZW1lbnQsIGVudGVyQnV0dG9uQXNFbGVtZW50LnR5cGUgPT09IEJ1dHRvbiA/IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgICAgICAgICB9IDoge30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1idXR0b24nLCB0eXBlOiAncHJpbWFyeScsIHNpemU6IHNpemUsIGRpc2FibGVkOiBkaXNhYmxlZCwga2V5OiAnZW50ZXJCdXR0b24nIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uID09PSB0cnVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdzZWFyY2gnIH0pIDogZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChub2RlLCB7XG4gICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vblNlYXJjaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBpbnB1dFByZWZpeENscyA9IF9hLmlucHV0UHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgICAgICAgIHN1ZmZpeCA9IF9hLnN1ZmZpeCxcbiAgICAgICAgICAgICAgICBlbnRlckJ1dHRvbiA9IF9hLmVudGVyQnV0dG9uLFxuICAgICAgICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwiaW5wdXRQcmVmaXhDbHNcIiwgXCJzaXplXCIsIFwic3VmZml4XCIsIFwiZW50ZXJCdXR0b25cIl0pO1xuICAgICAgICAgICAgZGVsZXRlIG90aGVycy5vblNlYXJjaDtcbiAgICAgICAgICAgIHZhciBidXR0b25Pckljb24gPSB0aGlzLmdldEJ1dHRvbk9ySWNvbigpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaFN1ZmZpeCA9IHN1ZmZpeCA/IFtzdWZmaXgsIGJ1dHRvbk9ySWNvbl0gOiBidXR0b25Pckljb247XG4gICAgICAgICAgICB2YXIgaW5wdXRDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWVudGVyLWJ1dHRvbicsICEhZW50ZXJCdXR0b24pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctJyArIHNpemUsICEhc2l6ZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMoeyBvblByZXNzRW50ZXI6IHRoaXMub25TZWFyY2ggfSwgb3RoZXJzLCB7IHNpemU6IHNpemUsIGNsYXNzTmFtZTogaW5wdXRDbGFzc05hbWUsIHByZWZpeENsczogaW5wdXRQcmVmaXhDbHMsIHN1ZmZpeDogc2VhcmNoU3VmZml4LCByZWY6IHRoaXMuc2F2ZUlucHV0IH0pKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTZWFyY2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuU2VhcmNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnB1dFByZWZpeENsczogJ2FudC1pbnB1dCcsXG4gICAgcHJlZml4Q2xzOiAnYW50LWlucHV0LXNlYXJjaCcsXG4gICAgZW50ZXJCdXR0b246IGZhbHNlXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG9taXQgZnJvbSAnb21pdC5qcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjYWxjdWxhdGVOb2RlSGVpZ2h0IGZyb20gJy4vY2FsY3VsYXRlTm9kZUhlaWdodCc7XG5mdW5jdGlvbiBvbk5leHRGcmFtZShjYikge1xuICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAxKTtcbn1cbmZ1bmN0aW9uIGNsZWFyTmV4dEZyYW1lQWN0aW9uKG5leHRGcmFtZUlkKSB7XG4gICAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUobmV4dEZyYW1lSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobmV4dEZyYW1lSWQpO1xuICAgIH1cbn1cblxudmFyIFRleHRBcmVhID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVGV4dEFyZWEsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVGV4dEFyZWEoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0QXJlYSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRleHRBcmVhLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGV4dEFyZWEpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRleHRhcmVhU3R5bGVzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZXNpemVUZXh0YXJlYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhdXRvc2l6ZSA9IF90aGlzLnByb3BzLmF1dG9zaXplO1xuXG4gICAgICAgICAgICBpZiAoIWF1dG9zaXplIHx8ICFfdGhpcy50ZXh0QXJlYVJlZikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtaW5Sb3dzID0gYXV0b3NpemUgPyBhdXRvc2l6ZS5taW5Sb3dzIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBtYXhSb3dzID0gYXV0b3NpemUgPyBhdXRvc2l6ZS5tYXhSb3dzIDogbnVsbDtcbiAgICAgICAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9IGNhbGN1bGF0ZU5vZGVIZWlnaHQoX3RoaXMudGV4dEFyZWFSZWYsIGZhbHNlLCBtaW5Sb3dzLCBtYXhSb3dzKTtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdGV4dGFyZWFTdHlsZXM6IHRleHRhcmVhU3R5bGVzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVUZXh0YXJlYUNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoISgndmFsdWUnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2l6ZVRleHRhcmVhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyID0gX3RoaXMkcHJvcHMub25QcmVzc0VudGVyLFxuICAgICAgICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzLm9uS2V5RG93bjtcblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgb25QcmVzc0VudGVyKSB7XG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICAgICAgICAgIG9uS2V5RG93bihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZVRleHRBcmVhUmVmID0gZnVuY3Rpb24gKHRleHRBcmVhKSB7XG4gICAgICAgICAgICBfdGhpcy50ZXh0QXJlYVJlZiA9IHRleHRBcmVhO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRleHRBcmVhLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplVGV4dGFyZWEoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgLy8gUmUtcmVuZGVyIHdpdGggdGhlIG5ldyBjb250ZW50IHRoZW4gcmVjYWxjdWxhdGUgdGhlIGhlaWdodCBhcyByZXF1aXJlZC5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXh0RnJhbWVBY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhck5leHRGcmFtZUFjdGlvbih0aGlzLm5leHRGcmFtZUFjdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWVBY3Rpb25JZCA9IG9uTmV4dEZyYW1lKHRoaXMucmVzaXplVGV4dGFyZWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dEFyZWFSZWYuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYVJlZi5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFRleHRBcmVhQ2xhc3NOYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRleHRBcmVhQ2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLWRpc2FibGVkJywgZGlzYWJsZWQpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgb3RoZXJQcm9wcyA9IG9taXQocHJvcHMsIFsncHJlZml4Q2xzJywgJ29uUHJlc3NFbnRlcicsICdhdXRvc2l6ZSddKTtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS50ZXh0YXJlYVN0eWxlcyk7XG4gICAgICAgICAgICAvLyBGaXggaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjc3NlxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGl0IGNvdWxkIGJlIHJlc2V0IHdoZW4gdXNpbmcgZm9ybS5nZXRGaWVsZERlY29yYXRvclxuICAgICAgICAgICAgaWYgKCd2YWx1ZScgaW4gb3RoZXJQcm9wcykge1xuICAgICAgICAgICAgICAgIG90aGVyUHJvcHMudmFsdWUgPSBvdGhlclByb3BzLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHsgY2xhc3NOYW1lOiB0aGlzLmdldFRleHRBcmVhQ2xhc3NOYW1lKCksIHN0eWxlOiBzdHlsZSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZVRleHRhcmVhQ2hhbmdlLCByZWY6IHRoaXMuc2F2ZVRleHRBcmVhUmVmIH0pKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUZXh0QXJlYTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWE7XG5cblRleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtaW5wdXQnXG59OyIsIi8vIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5cG9wcC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZS9cbi8qKlxuICogY2FsY3VsYXRlTm9kZUhlaWdodCh1aVRleHROb2RlLCB1c2VDYWNoZSA9IGZhbHNlKVxuICovXG52YXIgSElEREVOX1RFWFRBUkVBX1NUWUxFID0gJ1xcbiAgbWluLWhlaWdodDowICFpbXBvcnRhbnQ7XFxuICBtYXgtaGVpZ2h0Om5vbmUgIWltcG9ydGFudDtcXG4gIGhlaWdodDowICFpbXBvcnRhbnQ7XFxuICB2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgei1pbmRleDotMTAwMCAhaW1wb3J0YW50O1xcbiAgdG9wOjAgIWltcG9ydGFudDtcXG4gIHJpZ2h0OjAgIWltcG9ydGFudFxcbic7XG52YXIgU0laSU5HX1NUWUxFID0gWydsZXR0ZXItc3BhY2luZycsICdsaW5lLWhlaWdodCcsICdwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXNpemUnLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dC10cmFuc2Zvcm0nLCAnd2lkdGgnLCAndGV4dC1pbmRlbnQnLCAncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLXdpZHRoJywgJ2JveC1zaXppbmcnXTtcbnZhciBjb21wdXRlZFN0eWxlQ2FjaGUgPSB7fTtcbnZhciBoaWRkZW5UZXh0YXJlYSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vZGVTdHlsaW5nKG5vZGUpIHtcbiAgICB2YXIgdXNlQ2FjaGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgdmFyIG5vZGVSZWYgPSBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWFjdGlkJykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBpZiAodXNlQ2FjaGUgJiYgY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdKSB7XG4gICAgICAgIHJldHVybiBjb21wdXRlZFN0eWxlQ2FjaGVbbm9kZVJlZl07XG4gICAgfVxuICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBib3hTaXppbmcgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLW1vei1ib3gtc2l6aW5nJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLXdlYmtpdC1ib3gtc2l6aW5nJyk7XG4gICAgdmFyIHBhZGRpbmdTaXplID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpKSArIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSk7XG4gICAgdmFyIGJvcmRlclNpemUgPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkgKyBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci10b3Atd2lkdGgnKSk7XG4gICAgdmFyIHNpemluZ1N0eWxlID0gU0laSU5HX1NUWUxFLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSArICc6JyArIHN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG4gICAgfSkuam9pbignOycpO1xuICAgIHZhciBub2RlSW5mbyA9IHtcbiAgICAgICAgc2l6aW5nU3R5bGU6IHNpemluZ1N0eWxlLFxuICAgICAgICBwYWRkaW5nU2l6ZTogcGFkZGluZ1NpemUsXG4gICAgICAgIGJvcmRlclNpemU6IGJvcmRlclNpemUsXG4gICAgICAgIGJveFNpemluZzogYm94U2l6aW5nXG4gICAgfTtcbiAgICBpZiAodXNlQ2FjaGUgJiYgbm9kZVJlZikge1xuICAgICAgICBjb21wdXRlZFN0eWxlQ2FjaGVbbm9kZVJlZl0gPSBub2RlSW5mbztcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVJbmZvO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY3VsYXRlTm9kZUhlaWdodCh1aVRleHROb2RlKSB7XG4gICAgdmFyIHVzZUNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgbWluUm93cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICB2YXIgbWF4Um93cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICAgIGlmICghaGlkZGVuVGV4dGFyZWEpIHtcbiAgICAgICAgaGlkZGVuVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlblRleHRhcmVhKTtcbiAgICB9XG4gICAgLy8gRml4IHdyYXA9XCJvZmZcIiBpc3N1ZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzY1NzdcbiAgICBpZiAodWlUZXh0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3dyYXAnKSkge1xuICAgICAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3dyYXAnLCB1aVRleHROb2RlLmdldEF0dHJpYnV0ZSgnd3JhcCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoaWRkZW5UZXh0YXJlYS5yZW1vdmVBdHRyaWJ1dGUoJ3dyYXAnKTtcbiAgICB9XG4gICAgLy8gQ29weSBhbGwgQ1NTIHByb3BlcnRpZXMgdGhhdCBoYXZlIGFuIGltcGFjdCBvbiB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IGluXG4gICAgLy8gdGhlIHRleHRib3hcblxuICAgIHZhciBfY2FsY3VsYXRlTm9kZVN0eWxpbmcgPSBjYWxjdWxhdGVOb2RlU3R5bGluZyh1aVRleHROb2RlLCB1c2VDYWNoZSksXG4gICAgICAgIHBhZGRpbmdTaXplID0gX2NhbGN1bGF0ZU5vZGVTdHlsaW5nLnBhZGRpbmdTaXplLFxuICAgICAgICBib3JkZXJTaXplID0gX2NhbGN1bGF0ZU5vZGVTdHlsaW5nLmJvcmRlclNpemUsXG4gICAgICAgIGJveFNpemluZyA9IF9jYWxjdWxhdGVOb2RlU3R5bGluZy5ib3hTaXppbmcsXG4gICAgICAgIHNpemluZ1N0eWxlID0gX2NhbGN1bGF0ZU5vZGVTdHlsaW5nLnNpemluZ1N0eWxlO1xuICAgIC8vIE5lZWQgdG8gaGF2ZSB0aGUgb3ZlcmZsb3cgYXR0cmlidXRlIHRvIGhpZGUgdGhlIHNjcm9sbGJhciBvdGhlcndpc2VcbiAgICAvLyB0ZXh0LWxpbmVzIHdpbGwgbm90IGNhbGN1bGF0ZWQgcHJvcGVybHkgYXMgdGhlIHNoYWRvdyB3aWxsIHRlY2huaWNhbGx5IGJlXG4gICAgLy8gbmFycm93ZXIgZm9yIGNvbnRlbnRcblxuXG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdzdHlsZScsIHNpemluZ1N0eWxlICsgJzsnICsgSElEREVOX1RFWFRBUkVBX1NUWUxFKTtcbiAgICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9IHVpVGV4dE5vZGUudmFsdWUgfHwgdWlUZXh0Tm9kZS5wbGFjZWhvbGRlciB8fCAnJztcbiAgICB2YXIgbWluSGVpZ2h0ID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gICAgdmFyIG1heEhlaWdodCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIHZhciBoZWlnaHQgPSBoaWRkZW5UZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIG92ZXJmbG93WSA9IHZvaWQgMDtcbiAgICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgLy8gYm9yZGVyLWJveDogYWRkIGJvcmRlciwgc2luY2UgaGVpZ2h0ID0gY29udGVudCArIHBhZGRpbmcgKyBib3JkZXJcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0ICsgYm9yZGVyU2l6ZTtcbiAgICB9IGVsc2UgaWYgKGJveFNpemluZyA9PT0gJ2NvbnRlbnQtYm94Jykge1xuICAgICAgICAvLyByZW1vdmUgcGFkZGluZywgc2luY2UgaGVpZ2h0ID0gY29udGVudFxuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgLSBwYWRkaW5nU2l6ZTtcbiAgICB9XG4gICAgaWYgKG1pblJvd3MgIT09IG51bGwgfHwgbWF4Um93cyAhPT0gbnVsbCkge1xuICAgICAgICAvLyBtZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG4gICAgICAgIGhpZGRlblRleHRhcmVhLnZhbHVlID0gJyAnO1xuICAgICAgICB2YXIgc2luZ2xlUm93SGVpZ2h0ID0gaGlkZGVuVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZ1NpemU7XG4gICAgICAgIGlmIChtaW5Sb3dzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtaW5IZWlnaHQgPSBzaW5nbGVSb3dIZWlnaHQgKiBtaW5Sb3dzO1xuICAgICAgICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhSb3dzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBzaW5nbGVSb3dIZWlnaHQgKiBtYXhSb3dzO1xuICAgICAgICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3ZlcmZsb3dZID0gaGVpZ2h0ID4gbWF4SGVpZ2h0ID8gJycgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgc2Nyb2xsIGJhciBmbGFzaCB3aGVuIGF1dG9zaXplIHdpdGhvdXQgbWF4Um93c1xuICAgIGlmICghbWF4Um93cykge1xuICAgICAgICBvdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICB9XG4gICAgcmV0dXJuIHsgaGVpZ2h0OiBoZWlnaHQsIG1pbkhlaWdodDogbWluSGVpZ2h0LCBtYXhIZWlnaHQ6IG1heEhlaWdodCwgb3ZlcmZsb3dZOiBvdmVyZmxvd1kgfTtcbn0iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJztcbklucHV0Lkdyb3VwID0gR3JvdXA7XG5JbnB1dC5TZWFyY2ggPSBTZWFyY2g7XG5JbnB1dC5UZXh0QXJlYSA9IFRleHRBcmVhO1xuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==