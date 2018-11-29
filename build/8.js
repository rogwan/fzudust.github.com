(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/antd/es/icon/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/es/icon/style/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/es/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./node_modules/antd/es/icon/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/icon/style/index.less":
/*!****************************************************!*\
  !*** ./node_modules/antd/es/icon/style/index.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/antd/es/modal/ActionButton.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/es/modal/ActionButton.js ***!
  \****************************************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button */ "./node_modules/antd/es/button/index.js");









var ActionButton = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ActionButton, _React$Component);

    function ActionButton(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ActionButton);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                actionFn = _this$props.actionFn,
                closeModal = _this$props.closeModal;

            if (actionFn) {
                var ret = void 0;
                if (actionFn.length) {
                    ret = actionFn(closeModal);
                } else {
                    ret = actionFn();
                    if (!ret) {
                        closeModal();
                    }
                }
                if (ret && ret.then) {
                    _this.setState({ loading: true });
                    ret.then(function () {
                        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
                        // this.setState({ loading: false });
                        closeModal.apply(undefined, arguments);
                    }, function () {
                        // See: https://github.com/ant-design/ant-design/issues/6183
                        _this.setState({ loading: false });
                    });
                }
            } else {
                closeModal();
            }
        };
        _this.state = {
            loading: false
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ActionButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoFocus) {
                var $this = react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"](this);
                this.timeoutId = setTimeout(function () {
                    return $this.focus();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                children = _props.children,
                buttonProps = _props.buttonProps;

            var loading = this.state.loading;
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _button__WEBPACK_IMPORTED_MODULE_7__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: type, onClick: this.onClick, loading: loading }, buttonProps),
                children
            );
        }
    }]);

    return ActionButton;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "./node_modules/antd/es/modal/Modal.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/modal/Modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-dialog */ "./node_modules/rc-dialog/es/DialogWrap.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locale */ "./node_modules/antd/es/modal/locale.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};









var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Modal, _React$Component);

    function Modal() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Modal);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.handleCancel = function (e) {
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel(e);
            }
        };
        _this.handleOk = function (e) {
            var onOk = _this.props.onOk;
            if (onOk) {
                onOk(e);
            }
        };
        _this.renderFooter = function (locale) {
            var _this$props = _this.props,
                okText = _this$props.okText,
                okType = _this$props.okType,
                cancelText = _this$props.cancelText,
                confirmLoading = _this$props.confirmLoading;

            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_11__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ onClick: _this.handleCancel }, _this.props.cancelButtonProps),
                    cancelText || locale.cancelText
                ),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_11__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ type: okType, loading: confirmLoading, onClick: _this.handleOk }, _this.props.okButtonProps),
                    okText || locale.okText
                )
            );
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (mousePositionEventBinded) {
                return;
            }
            // 只有点击事件支持从鼠标位置动画展开
            Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document.documentElement, 'click', function (e) {
                mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                // 100ms 内发生过点击事件，则从点击位置动画展示
                // 否则直接 zoom 展示
                // 这样可以兼容非点击方式展开
                setTimeout(function () {
                    return mousePosition = null;
                }, 100);
            });
            mousePositionEventBinded = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                footer = _a.footer,
                visible = _a.visible,
                wrapClassName = _a.wrapClassName,
                centered = _a.centered,
                prefixCls = _a.prefixCls,
                restProps = __rest(_a, ["footer", "visible", "wrapClassName", "centered", "prefixCls"]);
            var defaultFooter = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_12__["default"],
                { componentName: 'Modal', defaultLocale: Object(_locale__WEBPACK_IMPORTED_MODULE_13__["getConfirmLocale"])() },
                this.renderFooter
            );
            var closeIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: prefixCls + '-close-x' },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_14__["default"], { className: prefixCls + '-close-icon', type: 'close' })
            );
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_dialog__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, restProps, { prefixCls: prefixCls, wrapClassName: classnames__WEBPACK_IMPORTED_MODULE_9___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-centered', !!centered), wrapClassName), footer: footer === undefined ? defaultFooter : footer, visible: visible, mousePosition: mousePosition, onClose: this.handleCancel, closeIcon: closeIcon }));
        }
    }]);

    return Modal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

Modal.defaultProps = {
    prefixCls: 'ant-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary',
    okButtonDisabled: false,
    cancelButtonDisabled: false
};
Modal.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"],
    onOk: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
    onCancel: prop_types__WEBPACK_IMPORTED_MODULE_8__["func"],
    okText: prop_types__WEBPACK_IMPORTED_MODULE_8__["node"],
    cancelText: prop_types__WEBPACK_IMPORTED_MODULE_8__["node"],
    centered: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"],
    width: prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_8__["number"], prop_types__WEBPACK_IMPORTED_MODULE_8__["string"]]),
    confirmLoading: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"],
    visible: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"],
    align: prop_types__WEBPACK_IMPORTED_MODULE_8__["object"],
    footer: prop_types__WEBPACK_IMPORTED_MODULE_8__["node"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_8__["node"],
    closable: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"]
};

/***/ }),

/***/ "./node_modules/antd/es/modal/confirm.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/modal/confirm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return confirm; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ActionButton */ "./node_modules/antd/es/modal/ActionButton.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale */ "./node_modules/antd/es/modal/locale.js");



var _this = undefined;








var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"];
var ConfirmDialog = function ConfirmDialog(props) {
    var onCancel = props.onCancel,
        onOk = props.onOk,
        close = props.close,
        zIndex = props.zIndex,
        afterClose = props.afterClose,
        visible = props.visible,
        keyboard = props.keyboard,
        centered = props.centered,
        getContainer = props.getContainer,
        okButtonProps = props.okButtonProps,
        cancelButtonProps = props.cancelButtonProps;

    var iconType = props.iconType || 'question-circle';
    var okType = props.okType || 'primary';
    var prefixCls = props.prefixCls || 'ant-modal';
    var contentPrefixCls = prefixCls + '-confirm';
    // 默认为 true，保持向下兼容
    var okCancel = 'okCancel' in props ? props.okCancel : true;
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    var runtimeLocale = Object(_locale__WEBPACK_IMPORTED_MODULE_8__["getConfirmLocale"])();
    var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    var cancelText = props.cancelText || runtimeLocale.cancelText;
    var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
    var classString = classnames__WEBPACK_IMPORTED_MODULE_4___default()(contentPrefixCls, contentPrefixCls + '-' + props.type, props.className);
    var cancelButton = okCancel && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
        _ActionButton__WEBPACK_IMPORTED_MODULE_7__["default"],
        { actionFn: onCancel, closeModal: close, autoFocus: autoFocusButton === 'cancel', buttonProps: cancelButtonProps },
        cancelText
    );
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
        _Modal__WEBPACK_IMPORTED_MODULE_6__["default"],
        { prefixCls: prefixCls, className: classString, wrapClassName: classnames__WEBPACK_IMPORTED_MODULE_4___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, contentPrefixCls + '-centered', !!props.centered)), onCancel: close.bind(_this, { triggerCancel: true }), visible: visible, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', maskClosable: maskClosable, style: style, width: width, zIndex: zIndex, afterClose: afterClose, keyboard: keyboard, centered: centered, getContainer: getContainer },
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            'div',
            { className: contentPrefixCls + '-body-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                'div',
                { className: contentPrefixCls + '-body' },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], { type: iconType }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    'span',
                    { className: contentPrefixCls + '-title' },
                    props.title
                ),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    'div',
                    { className: contentPrefixCls + '-content' },
                    props.content
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                'div',
                { className: contentPrefixCls + '-btns' },
                cancelButton,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
                    _ActionButton__WEBPACK_IMPORTED_MODULE_7__["default"],
                    { type: okType, actionFn: onOk, closeModal: close, autoFocus: autoFocusButton === 'ok', buttonProps: okButtonProps },
                    okText
                )
            )
        )
    );
};
function confirm(config) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var currentConfig = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, config, { close: close, visible: true });
    function close() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        currentConfig = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, currentConfig, { visible: false, afterClose: destroy.bind.apply(destroy, [this].concat(args)) });
        if (IS_REACT_16) {
            render(currentConfig);
        } else {
            destroy.apply(undefined, args);
        }
    }
    function update(newConfig) {
        currentConfig = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, currentConfig, newConfig);
        render(currentConfig);
    }
    function destroy() {
        var unmountResult = react_dom__WEBPACK_IMPORTED_MODULE_3__["unmountComponentAtNode"](div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var triggerCancel = args && args.length && args.some(function (param) {
            return param && param.triggerCancel;
        });
        if (config.onCancel && triggerCancel) {
            config.onCancel.apply(config, args);
        }
    }
    function render(props) {
        react_dom__WEBPACK_IMPORTED_MODULE_3__["render"](react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ConfirmDialog, props), div);
    }
    render(currentConfig);
    return {
        destroy: close,
        update: update
    };
}

/***/ }),

/***/ "./node_modules/antd/es/modal/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/modal/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm */ "./node_modules/antd/es/modal/confirm.js");



_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].info = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'info', iconType: 'info-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].success = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'success', iconType: 'check-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].error = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'error', iconType: 'close-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].warning = _Modal__WEBPACK_IMPORTED_MODULE_1__["default"].warn = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'warning', iconType: 'exclamation-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].confirm = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'confirm', okCancel: true }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
/* harmony default export */ __webpack_exports__["default"] = (_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/antd/es/modal/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/modal/locale.js ***!
  \**********************************************/
/*! exports provided: changeConfirmLocale, getConfirmLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeConfirmLocale", function() { return changeConfirmLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmLocale", function() { return getConfirmLocale; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-provider/default */ "./node_modules/antd/es/locale-provider/default.js");


var runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__["default"].Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__["default"].Modal);
    }
}
function getConfirmLocale() {
    return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/es/modal/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/modal/style/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/es/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./node_modules/antd/es/modal/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style */ "./node_modules/antd/es/button/style/index.js");


// style dependencies


/***/ }),

/***/ "./node_modules/antd/es/modal/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/modal/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rc-dialog/es/Dialog.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-dialog/es/Dialog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-dialog/es/LazyRenderBox.js");
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");











var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Dialog, _React$Component);

    function Dialog() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { className: prefixCls + '-close-x' }));
            }
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };
            var transitionName = _this.getTransitionName();
            var dialogElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle }, "sentinelStart"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-content' }, closer, header, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle }, "sentinelEnd"));
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_10__["default"])();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.wrap) {
                _this.wrap.style.paddingLeft = _this.wrap.style.paddingLeft = '';
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.addScrollingEffect();
                this.tryFocus();
                var dialogNode = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, this.getMaskElement(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog'
};

/***/ }),

/***/ "./node_modules/rc-dialog/es/DialogWrap.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dialog/es/DialogWrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialog */ "./node_modules/rc-dialog/es/Dialog.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");









var IS_REACT_16 = 'createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_5__;

var DialogWrap = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DialogWrap, _React$Component);

    function DialogWrap() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DialogWrap);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.saveDialog = function (node) {
            _this._component = node;
        };
        _this.getComponent = function () {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ ref: _this.saveDialog }, _this.props, extra, { key: "dialog" }));
        };
        // fix issue #10656
        /*
        * Custom container should not be return, because in the Portal component, it will remove the
        * return container element here, if the custom container is the only child of it's component,
        * like issue #10656, It will has a conflict with removeChild method in react-dom.
        * So here should add a child (div element) to custom container.
        * */
        _this.getContainer = function () {
            var container = document.createElement('div');
            if (_this.props.getContainer) {
                _this.props.getContainer().appendChild(container);
            } else {
                document.body.appendChild(container);
            }
            return container;
        };
        return _this;
    }

    DialogWrap.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
        var visible = _ref.visible;

        return !!(this.props.visible || visible);
    };

    DialogWrap.prototype.componentWillUnmount = function componentWillUnmount() {
        if (IS_REACT_16) {
            return;
        }
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    };

    DialogWrap.prototype.render = function render() {
        var _this2 = this;

        var visible = this.props.visible;

        var portal = null;
        if (!IS_REACT_16) {
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__["default"], { parent: this, visible: visible, autoDestroy: false, getComponent: this.getComponent, getContainer: this.getContainer }, function (_ref2) {
                var renderComponent = _ref2.renderComponent,
                    removeContainer = _ref2.removeContainer;

                _this2.renderComponent = renderComponent;
                _this2.removeContainer = removeContainer;
                return null;
            });
        }
        if (visible || this._component) {
            portal = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], { getContainer: this.getContainer }, this.getComponent());
        }
        return portal;
    };

    return DialogWrap;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

DialogWrap.defaultProps = {
    visible: false
};
/* harmony default export */ __webpack_exports__["default"] = (DialogWrap);

/***/ }),

/***/ "./node_modules/rc-dialog/es/LazyRenderBox.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-dialog/es/LazyRenderBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var LazyRenderBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += " " + this.props.hiddenClassName;
        }
        var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    };

    return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pY29uL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2ljb24vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9BY3Rpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvY29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZ1dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWRpYWxvZy9lcy9MYXp5UmVuZGVyQm94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7Ozs7Ozs7Ozs7OztBQ0FoQyx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDLCtDQUFlOztBQUVqQjtBQUNBO0FBQ0E7QUFDZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUNoR3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDYztBQUNzQjtBQUNsQztBQUN4Qjs7QUFFL0I7QUFDQSxJQUFJLHFFQUFTOztBQUViO0FBQ0EsUUFBUSwyRUFBZTs7QUFFdkIsZUFBZSxzRkFBMEI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQVEsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtQixRQUFRLG9FQUFRLEdBQUc7QUFDckQ7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQWU7O0FBRUYsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDbEM1QjtBQUFBO0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4Lmxlc3MnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcblxudmFyIEFjdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbkJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb25CdXR0b24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkJ1dHRvbik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFjdGlvbkJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFjdGlvbkJ1dHRvbikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgYWN0aW9uRm4gPSBfdGhpcyRwcm9wcy5hY3Rpb25GbixcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsID0gX3RoaXMkcHJvcHMuY2xvc2VNb2RhbDtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbkZuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uRm4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbkZuKGNsb3NlTW9kYWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbkZuKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiByZXQudGhlbikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3MgdW5uZWNlc3NhcnkgdG8gc2V0IGxvYWRpbmc9ZmFsc2UsIGZvciB0aGUgTW9kYWwgd2lsbCBiZSB1bm1vdW50ZWQgYWZ0ZXIgY2xvc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82MTgzXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEFjdGlvbkJ1dHRvbiwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdHlwZSA9IF9wcm9wcy50eXBlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzID0gX3Byb3BzLmJ1dHRvblByb3BzO1xuXG4gICAgICAgICAgICB2YXIgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7IHR5cGU6IHR5cGUsIG9uQ2xpY2s6IHRoaXMub25DbGljaywgbG9hZGluZzogbG9hZGluZyB9LCBidXR0b25Qcm9wcyksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQWN0aW9uQnV0dG9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b247IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAncmMtZGlhbG9nJztcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAncmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCB7IGdldENvbmZpcm1Mb2NhbGUgfSBmcm9tICcuL2xvY2FsZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbnZhciBtb3VzZVBvc2l0aW9uID0gdm9pZCAwO1xudmFyIG1vdXNlUG9zaXRpb25FdmVudEJpbmRlZCA9IHZvaWQgMDtcblxudmFyIE1vZGFsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTW9kYWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVDYW5jZWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9uQ2FuY2VsID0gX3RoaXMucHJvcHMub25DYW5jZWw7XG4gICAgICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBvbkNhbmNlbChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlT2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9uT2sgPSBfdGhpcy5wcm9wcy5vbk9rO1xuICAgICAgICAgICAgaWYgKG9uT2spIHtcbiAgICAgICAgICAgICAgICBvbk9rKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW5kZXJGb290ZXIgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBva1RleHQgPSBfdGhpcyRwcm9wcy5va1RleHQsXG4gICAgICAgICAgICAgICAgb2tUeXBlID0gX3RoaXMkcHJvcHMub2tUeXBlLFxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQgPSBfdGhpcyRwcm9wcy5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nID0gX3RoaXMkcHJvcHMuY29uZmlybUxvYWRpbmc7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7IG9uQ2xpY2s6IF90aGlzLmhhbmRsZUNhbmNlbCB9LCBfdGhpcy5wcm9wcy5jYW5jZWxCdXR0b25Qcm9wcyksXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoeyB0eXBlOiBva1R5cGUsIGxvYWRpbmc6IGNvbmZpcm1Mb2FkaW5nLCBvbkNsaWNrOiBfdGhpcy5oYW5kbGVPayB9LCBfdGhpcy5wcm9wcy5va0J1dHRvblByb3BzKSxcbiAgICAgICAgICAgICAgICAgICAgb2tUZXh0IHx8IGxvY2FsZS5va1RleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmIChtb3VzZVBvc2l0aW9uRXZlbnRCaW5kZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlj6rmnInngrnlh7vkuovku7bmlK/mjIHku47pvKDmoIfkvY3nva7liqjnlLvlsZXlvIBcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUucGFnZVlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIDEwMG1zIOWGheWPkeeUn+i/h+eCueWHu+S6i+S7tu+8jOWImeS7jueCueWHu+S9jee9ruWKqOeUu+WxleekulxuICAgICAgICAgICAgICAgIC8vIOWQpuWImeebtOaOpSB6b29tIOWxleekulxuICAgICAgICAgICAgICAgIC8vIOi/meagt+WPr+S7peWFvOWuuemdnueCueWHu+aWueW8j+WxleW8gFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW91c2VQb3NpdGlvbkV2ZW50QmluZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZm9vdGVyID0gX2EuZm9vdGVyLFxuICAgICAgICAgICAgICAgIHZpc2libGUgPSBfYS52aXNpYmxlLFxuICAgICAgICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfYS53cmFwQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkID0gX2EuY2VudGVyZWQsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wiZm9vdGVyXCIsIFwidmlzaWJsZVwiLCBcIndyYXBDbGFzc05hbWVcIiwgXCJjZW50ZXJlZFwiLCBcInByZWZpeENsc1wiXSk7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdEZvb3RlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTG9jYWxlUmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnROYW1lOiAnTW9kYWwnLCBkZWZhdWx0TG9jYWxlOiBnZXRDb25maXJtTG9jYWxlKCkgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZvb3RlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBjbG9zZUljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jbG9zZS14JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UtaWNvbicsIHR5cGU6ICdjbG9zZScgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHsgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIHdyYXBDbGFzc05hbWU6IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLWNlbnRlcmVkJywgISFjZW50ZXJlZCksIHdyYXBDbGFzc05hbWUpLCBmb290ZXI6IGZvb3RlciA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdEZvb3RlciA6IGZvb3RlciwgdmlzaWJsZTogdmlzaWJsZSwgbW91c2VQb3NpdGlvbjogbW91c2VQb3NpdGlvbiwgb25DbG9zZTogdGhpcy5oYW5kbGVDYW5jZWwsIGNsb3NlSWNvbjogY2xvc2VJY29uIH0pKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtbW9kYWwnLFxuICAgIHdpZHRoOiA1MjAsXG4gICAgdHJhbnNpdGlvbk5hbWU6ICd6b29tJyxcbiAgICBtYXNrVHJhbnNpdGlvbk5hbWU6ICdmYWRlJyxcbiAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgb2tUeXBlOiAncHJpbWFyeScsXG4gICAgb2tCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gICAgY2FuY2VsQnV0dG9uRGlzYWJsZWQ6IGZhbHNlXG59O1xuTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb2tUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICBjZW50ZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBjb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xvc2FibGU6IFByb3BUeXBlcy5ib29sXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5cbnZhciBfdGhpcyA9IHRoaXM7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL01vZGFsJztcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnLi9BY3Rpb25CdXR0b24nO1xuaW1wb3J0IHsgZ2V0Q29uZmlybUxvY2FsZSB9IGZyb20gJy4vbG9jYWxlJztcbnZhciBJU19SRUFDVF8xNiA9ICEhUmVhY3RET00uY3JlYXRlUG9ydGFsO1xudmFyIENvbmZpcm1EaWFsb2cgPSBmdW5jdGlvbiBDb25maXJtRGlhbG9nKHByb3BzKSB7XG4gICAgdmFyIG9uQ2FuY2VsID0gcHJvcHMub25DYW5jZWwsXG4gICAgICAgIG9uT2sgPSBwcm9wcy5vbk9rLFxuICAgICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgICB6SW5kZXggPSBwcm9wcy56SW5kZXgsXG4gICAgICAgIGFmdGVyQ2xvc2UgPSBwcm9wcy5hZnRlckNsb3NlLFxuICAgICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAga2V5Ym9hcmQgPSBwcm9wcy5rZXlib2FyZCxcbiAgICAgICAgY2VudGVyZWQgPSBwcm9wcy5jZW50ZXJlZCxcbiAgICAgICAgZ2V0Q29udGFpbmVyID0gcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgICBva0J1dHRvblByb3BzID0gcHJvcHMub2tCdXR0b25Qcm9wcyxcbiAgICAgICAgY2FuY2VsQnV0dG9uUHJvcHMgPSBwcm9wcy5jYW5jZWxCdXR0b25Qcm9wcztcblxuICAgIHZhciBpY29uVHlwZSA9IHByb3BzLmljb25UeXBlIHx8ICdxdWVzdGlvbi1jaXJjbGUnO1xuICAgIHZhciBva1R5cGUgPSBwcm9wcy5va1R5cGUgfHwgJ3ByaW1hcnknO1xuICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMgfHwgJ2FudC1tb2RhbCc7XG4gICAgdmFyIGNvbnRlbnRQcmVmaXhDbHMgPSBwcmVmaXhDbHMgKyAnLWNvbmZpcm0nO1xuICAgIC8vIOm7mOiupOS4uiB0cnVl77yM5L+d5oyB5ZCR5LiL5YW85a65XG4gICAgdmFyIG9rQ2FuY2VsID0gJ29rQ2FuY2VsJyBpbiBwcm9wcyA/IHByb3BzLm9rQ2FuY2VsIDogdHJ1ZTtcbiAgICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aCB8fCA0MTY7XG4gICAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gICAgLy8g6buY6K6k5Li6IGZhbHNl77yM5L+d5oyB5pen54mI6buY6K6k6KGM5Li6XG4gICAgdmFyIG1hc2tDbG9zYWJsZSA9IHByb3BzLm1hc2tDbG9zYWJsZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBwcm9wcy5tYXNrQ2xvc2FibGU7XG4gICAgdmFyIHJ1bnRpbWVMb2NhbGUgPSBnZXRDb25maXJtTG9jYWxlKCk7XG4gICAgdmFyIG9rVGV4dCA9IHByb3BzLm9rVGV4dCB8fCAob2tDYW5jZWwgPyBydW50aW1lTG9jYWxlLm9rVGV4dCA6IHJ1bnRpbWVMb2NhbGUuanVzdE9rVGV4dCk7XG4gICAgdmFyIGNhbmNlbFRleHQgPSBwcm9wcy5jYW5jZWxUZXh0IHx8IHJ1bnRpbWVMb2NhbGUuY2FuY2VsVGV4dDtcbiAgICB2YXIgYXV0b0ZvY3VzQnV0dG9uID0gcHJvcHMuYXV0b0ZvY3VzQnV0dG9uID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5hdXRvRm9jdXNCdXR0b24gfHwgJ29rJztcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKGNvbnRlbnRQcmVmaXhDbHMsIGNvbnRlbnRQcmVmaXhDbHMgKyAnLScgKyBwcm9wcy50eXBlLCBwcm9wcy5jbGFzc05hbWUpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBva0NhbmNlbCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBY3Rpb25CdXR0b24sXG4gICAgICAgIHsgYWN0aW9uRm46IG9uQ2FuY2VsLCBjbG9zZU1vZGFsOiBjbG9zZSwgYXV0b0ZvY3VzOiBhdXRvRm9jdXNCdXR0b24gPT09ICdjYW5jZWwnLCBidXR0b25Qcm9wczogY2FuY2VsQnV0dG9uUHJvcHMgfSxcbiAgICAgICAgY2FuY2VsVGV4dFxuICAgICk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIERpYWxvZyxcbiAgICAgICAgeyBwcmVmaXhDbHM6IHByZWZpeENscywgY2xhc3NOYW1lOiBjbGFzc1N0cmluZywgd3JhcENsYXNzTmFtZTogY2xhc3NOYW1lcyhfZGVmaW5lUHJvcGVydHkoe30sIGNvbnRlbnRQcmVmaXhDbHMgKyAnLWNlbnRlcmVkJywgISFwcm9wcy5jZW50ZXJlZCkpLCBvbkNhbmNlbDogY2xvc2UuYmluZChfdGhpcywgeyB0cmlnZ2VyQ2FuY2VsOiB0cnVlIH0pLCB2aXNpYmxlOiB2aXNpYmxlLCB0aXRsZTogJycsIHRyYW5zaXRpb25OYW1lOiAnem9vbScsIGZvb3RlcjogJycsIG1hc2tUcmFuc2l0aW9uTmFtZTogJ2ZhZGUnLCBtYXNrQ2xvc2FibGU6IG1hc2tDbG9zYWJsZSwgc3R5bGU6IHN0eWxlLCB3aWR0aDogd2lkdGgsIHpJbmRleDogekluZGV4LCBhZnRlckNsb3NlOiBhZnRlckNsb3NlLCBrZXlib2FyZDoga2V5Ym9hcmQsIGNlbnRlcmVkOiBjZW50ZXJlZCwgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRlbnRQcmVmaXhDbHMgKyAnLWJvZHktd3JhcHBlcicgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRlbnRQcmVmaXhDbHMgKyAnLWJvZHknIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6IGljb25UeXBlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRlbnRQcmVmaXhDbHMgKyAnLXRpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy50aXRsZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb250ZW50UHJlZml4Q2xzICsgJy1jb250ZW50JyB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jb250ZW50XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNvbnRlbnRQcmVmaXhDbHMgKyAnLWJ0bnMnIH0sXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBva1R5cGUsIGFjdGlvbkZuOiBvbk9rLCBjbG9zZU1vZGFsOiBjbG9zZSwgYXV0b0ZvY3VzOiBhdXRvRm9jdXNCdXR0b24gPT09ICdvaycsIGJ1dHRvblByb3BzOiBva0J1dHRvblByb3BzIH0sXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlybShjb25maWcpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHZhciBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGNvbmZpZywgeyBjbG9zZTogY2xvc2UsIHZpc2libGU6IHRydWUgfSk7XG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjdXJyZW50Q29uZmlnLCB7IHZpc2libGU6IGZhbHNlLCBhZnRlckNsb3NlOiBkZXN0cm95LmJpbmQuYXBwbHkoZGVzdHJveSwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfSk7XG4gICAgICAgIGlmIChJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgcmVuZGVyKGN1cnJlbnRDb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdHJveS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShuZXdDb25maWcpIHtcbiAgICAgICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjdXJyZW50Q29uZmlnLCBuZXdDb25maWcpO1xuICAgICAgICByZW5kZXIoY3VycmVudENvbmZpZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHZhciB1bm1vdW50UmVzdWx0ID0gUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkaXYpO1xuICAgICAgICBpZiAodW5tb3VudFJlc3VsdCAmJiBkaXYucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJpZ2dlckNhbmNlbCA9IGFyZ3MgJiYgYXJncy5sZW5ndGggJiYgYXJncy5zb21lKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtICYmIHBhcmFtLnRyaWdnZXJDYW5jZWw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29uZmlnLm9uQ2FuY2VsICYmIHRyaWdnZXJDYW5jZWwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5vbkNhbmNlbC5hcHBseShjb25maWcsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbmRlcihwcm9wcykge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDb25maXJtRGlhbG9nLCBwcm9wcyksIGRpdik7XG4gICAgfVxuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBjbG9zZSxcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICB9O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgY29uZmlybSBmcm9tICcuL2NvbmZpcm0nO1xuTW9kYWwuaW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICdpbmZvJywgaWNvblR5cGU6ICdpbmZvLWNpcmNsZScsIG9rQ2FuY2VsOiBmYWxzZSB9LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKTtcbn07XG5Nb2RhbC5zdWNjZXNzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHsgdHlwZTogJ3N1Y2Nlc3MnLCBpY29uVHlwZTogJ2NoZWNrLWNpcmNsZScsIG9rQ2FuY2VsOiBmYWxzZSB9LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKTtcbn07XG5Nb2RhbC5lcnJvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICdlcnJvcicsIGljb25UeXBlOiAnY2xvc2UtY2lyY2xlJywgb2tDYW5jZWw6IGZhbHNlIH0sIHByb3BzKTtcbiAgICByZXR1cm4gY29uZmlybShjb25maWcpO1xufTtcbk1vZGFsLndhcm5pbmcgPSBNb2RhbC53YXJuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHsgdHlwZTogJ3dhcm5pbmcnLCBpY29uVHlwZTogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsIG9rQ2FuY2VsOiBmYWxzZSB9LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKTtcbn07XG5Nb2RhbC5jb25maXJtID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHsgdHlwZTogJ2NvbmZpcm0nLCBva0NhbmNlbDogdHJ1ZSB9LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQnO1xudmFyIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdExvY2FsZS5Nb2RhbCk7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29uZmlybUxvY2FsZShuZXdMb2NhbGUpIHtcbiAgICBpZiAobmV3TG9jYWxlKSB7XG4gICAgICAgIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgcnVudGltZUxvY2FsZSwgbmV3TG9jYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIGRlZmF1bHRMb2NhbGUuTW9kYWwpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maXJtTG9jYWxlKCkge1xuICAgIHJldHVybiBydW50aW1lTG9jYWxlO1xufSIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXgubGVzcyc7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vYnV0dG9uL3N0eWxlJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2NvbnRhaW5zJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gJ3JjLXV0aWwvZXMvZ2V0U2Nyb2xsQmFyU2l6ZSc7XG52YXIgdXVpZCA9IDA7XG52YXIgb3BlbkNvdW50ID0gMDtcbi8qIGVzbGludCByZWFjdC9uby1pcy1tb3VudGVkOjAgKi9cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybU9yaWdpbihub2RlLCB2YWx1ZSkge1xuICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gICAgWydXZWJraXQnLCAnTW96JywgJ01zJywgJ21zJ10uZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHN0eWxlW3ByZWZpeCArICdUcmFuc2Zvcm1PcmlnaW4nXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHN0eWxlWyd0cmFuc2Zvcm1PcmlnaW4nXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgcG9zID0ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3BcbiAgICB9O1xuICAgIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICAgIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gICAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsKHcpO1xuICAgIHBvcy50b3AgKz0gZ2V0U2Nyb2xsKHcsIHRydWUpO1xuICAgIHJldHVybiBwb3M7XG59XG5cbnZhciBEaWFsb2cgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEaWFsb2csIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGlhbG9nKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlhbG9nKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLm9uQW5pbWF0ZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFmdGVyQ2xvc2UgPSBfdGhpcy5wcm9wcy5hZnRlckNsb3NlO1xuICAgICAgICAgICAgLy8gbmVlZCBkZW1vP1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9kaWFsb2cvcHVsbC8yOFxuXG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmluVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgICAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25NYXNrQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gYW5kcm9pZCB0cmlnZ2VyIGNsaWNrIG9uIG9wZW4gKGZhc3RjbGljaz8/KVxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBfdGhpcy5vcGVuVGltZSA8IDMwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGlmIChwcm9wcy5rZXlib2FyZCAmJiBlLmtleUNvZGUgPT09IEtleUNvZGUuRVNDKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBrZWVwIGZvY3VzIGluc2lkZSBkaWFsb2dcbiAgICAgICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5UQUIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VudGluZWxTdGFydCA9IF90aGlzLnNlbnRpbmVsU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gc2VudGluZWxTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNlbnRpbmVsRW5kLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuc2VudGluZWxFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbnRpbmVsU3RhcnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0RGlhbG9nRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIGNsb3NhYmxlID0gcHJvcHMuY2xvc2FibGU7XG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICAgICAgdmFyIGRlc3QgPSB7fTtcbiAgICAgICAgICAgIGlmIChwcm9wcy53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVzdC53aWR0aCA9IHByb3BzLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVzdC5oZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZm9vdGVyID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHByb3BzLmZvb3Rlcikge1xuICAgICAgICAgICAgICAgIGZvb3RlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZm9vdGVyJywgcmVmOiBfdGhpcy5zYXZlUmVmKCdmb290ZXInKSB9LCBwcm9wcy5mb290ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChwcm9wcy50aXRsZSkge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaGVhZGVyJywgcmVmOiBfdGhpcy5zYXZlUmVmKCdoZWFkZXInKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRpdGxlJywgaWQ6IF90aGlzLnRpdGxlSWQgfSwgcHJvcHMudGl0bGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjbG9zZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoY2xvc2FibGUpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogX3RoaXMuY2xvc2UsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jbG9zZScgfSwgcHJvcHMuY2xvc2VJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsb3NlLXgnIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSwgZGVzdCk7XG4gICAgICAgICAgICB2YXIgc2VudGluZWxTdHlsZSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH07XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBfdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpO1xuICAgICAgICAgICAgdmFyIGRpYWxvZ0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KExhenlSZW5kZXJCb3gsIHsga2V5OiBcImRpYWxvZy1lbGVtZW50XCIsIHJvbGU6IFwiZG9jdW1lbnRcIiwgcmVmOiBfdGhpcy5zYXZlUmVmKCdkaWFsb2cnKSwgc3R5bGU6IHN0eWxlLCBjbGFzc05hbWU6IHByZWZpeENscyArICcgJyArIChwcm9wcy5jbGFzc05hbWUgfHwgJycpLCB2aXNpYmxlOiBwcm9wcy52aXNpYmxlIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyB0YWJJbmRleDogMCwgcmVmOiBfdGhpcy5zYXZlUmVmKCdzZW50aW5lbFN0YXJ0JyksIHN0eWxlOiBzZW50aW5lbFN0eWxlIH0sIFwic2VudGluZWxTdGFydFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jb250ZW50JyB9LCBjbG9zZXIsIGhlYWRlciwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1ib2R5Jywgc3R5bGU6IHByb3BzLmJvZHlTdHlsZSwgcmVmOiBfdGhpcy5zYXZlUmVmKCdib2R5JykgfSwgcHJvcHMuYm9keVByb3BzKSwgcHJvcHMuY2hpbGRyZW4pLCBmb290ZXIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgdGFiSW5kZXg6IDAsIHJlZjogX3RoaXMuc2F2ZVJlZignc2VudGluZWxFbmQnKSwgc3R5bGU6IHNlbnRpbmVsU3R5bGUgfSwgXCJzZW50aW5lbEVuZFwiKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlLCB7IGtleTogXCJkaWFsb2dcIiwgc2hvd1Byb3A6IFwidmlzaWJsZVwiLCBvbkxlYXZlOiBfdGhpcy5vbkFuaW1hdGVMZWF2ZSwgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLCBjb21wb25lbnQ6IFwiXCIsIHRyYW5zaXRpb25BcHBlYXI6IHRydWUgfSwgcHJvcHMudmlzaWJsZSB8fCAhcHJvcHMuZGVzdHJveU9uQ2xvc2UgPyBkaWFsb2dFbGVtZW50IDogbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFpJbmRleFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGlmIChwcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnpJbmRleCA9IHByb3BzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0V3JhcFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpLCBfdGhpcy5wcm9wcy53cmFwU3R5bGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGlzLmdldFpJbmRleFN0eWxlKCksIF90aGlzLnByb3BzLm1hc2tTdHlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgbWFza0VsZW1lbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrVHJhbnNpdGlvbiA9IF90aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSgpO1xuICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCBfZXh0ZW5kcyh7IHN0eWxlOiBfdGhpcy5nZXRNYXNrU3R5bGUoKSwga2V5OiBcIm1hc2tcIiwgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2snLCBoaWRkZW5DbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzay1oaWRkZW4nLCB2aXNpYmxlOiBwcm9wcy52aXNpYmxlIH0sIHByb3BzLm1hc2tQcm9wcykpO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZSwgeyBrZXk6IFwibWFza1wiLCBzaG93UHJvcDogXCJ2aXNpYmxlXCIsIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsIGNvbXBvbmVudDogXCJcIiwgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uIH0sIG1hc2tFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLm1hc2tBbmltYXRpb247XG4gICAgICAgICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgYW5pbWF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmJvZHlJc092ZXJmbG93aW5nICYmIF90aGlzLnNjcm9sbGJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IF90aGlzLnNjcm9sbGJhcldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNvdW50Kys7XG4gICAgICAgICAgICBpZiAob3BlbkNvdW50ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIF90aGlzLnNldFNjcm9sbGJhcigpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgLy8gdGhpcy5hZGp1c3REaWFsb2coKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNvdW50LS07XG4gICAgICAgICAgICBpZiAob3BlbkNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgb25DbG9zZSA9IF90aGlzLnByb3BzLm9uQ2xvc2U7XG5cbiAgICAgICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnVsbFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdvcmthcm91bmQgZm9yIG1pc3Npbmcgd2luZG93LmlubmVyV2lkdGggaW4gSUU4XG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZnVsbFdpbmRvd1dpZHRoID0gZG9jdW1lbnRFbGVtZW50UmVjdC5yaWdodCAtIE1hdGguYWJzKGRvY3VtZW50RWxlbWVudFJlY3QubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBmdWxsV2luZG93V2lkdGg7XG4gICAgICAgICAgICBpZiAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhclNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hZGp1c3REaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCAmJiBfdGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGFsSXNPdmVyZmxvd2luZyA9IF90aGlzLndyYXAuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdMZWZ0ID0gKCFfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiBtb2RhbElzT3ZlcmZsb3dpbmcgPyBfdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnKSArICdweCc7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IF90aGlzLnNjcm9sbGJhcldpZHRoIDogJycpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nTGVmdCA9IF90aGlzLndyYXAuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZVJlZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpc1tuYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVJZCA9ICdyY0RpYWxvZ1RpdGxlJyArIHV1aWQrKztcbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7fSk7XG4gICAgfTtcblxuICAgIERpYWxvZy5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgbW91c2VQb3NpdGlvbiA9IHRoaXMucHJvcHMubW91c2VQb3NpdGlvbjtcbiAgICAgICAgaWYgKHByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IHNob3dcbiAgICAgICAgICAgIGlmICghcHJldlByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5UaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNjcm9sbGluZ0VmZmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJ5Rm9jdXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuZGlhbG9nKTtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxPZmZzZXQgPSBvZmZzZXQoZGlhbG9nTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihkaWFsb2dOb2RlLCBtb3VzZVBvc2l0aW9uLnggLSBlbE9mZnNldC5sZWZ0ICsgJ3B4ICcgKyAobW91c2VQb3NpdGlvbi55IC0gZWxPZmZzZXQudG9wKSArICdweCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbihkaWFsb2dOb2RlLCAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmluVHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvcHMubWFzayAmJiB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIERpYWxvZy5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSB8fCB0aGlzLmluVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLnRyeUZvY3VzID0gZnVuY3Rpb24gdHJ5Rm9jdXMoKSB7XG4gICAgICAgIGlmICghY29udGFpbnModGhpcy53cmFwLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnNlbnRpbmVsU3RhcnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIG1hc2tDbG9zYWJsZSA9IHByb3BzLm1hc2tDbG9zYWJsZTtcblxuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLmdldFdyYXBTdHlsZSgpO1xuICAgICAgICAvLyBjbGVhciBoaWRlIGRpc3BsYXlcbiAgICAgICAgLy8gYW5kIG9ubHkgc2V0IGRpc3BsYXkgYWZ0ZXIgYXN5bmMgYW5pbSwgbm90IGhlcmUgZm9yIGhpZGVcbiAgICAgICAgaWYgKHByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMuZ2V0TWFza0VsZW1lbnQoKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7IHRhYkluZGV4OiAtMSwgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93biwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXdyYXAgJyArIChwcm9wcy53cmFwQ2xhc3NOYW1lIHx8ICcnKSwgcmVmOiB0aGlzLnNhdmVSZWYoJ3dyYXAnKSwgb25DbGljazogbWFza0Nsb3NhYmxlID8gdGhpcy5vbk1hc2tDbGljayA6IHVuZGVmaW5lZCwgcm9sZTogXCJkaWFsb2dcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIjogcHJvcHMudGl0bGUgPyB0aGlzLnRpdGxlSWQgOiBudWxsLCBzdHlsZTogc3R5bGUgfSwgcHJvcHMud3JhcFByb3BzKSwgdGhpcy5nZXREaWFsb2dFbGVtZW50KCkpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERpYWxvZztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgbWFzazogdHJ1ZSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgZGVzdHJveU9uQ2xvc2U6IGZhbHNlLFxuICAgIHByZWZpeENsczogJ3JjLWRpYWxvZydcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5pbXBvcnQgQ29udGFpbmVyUmVuZGVyIGZyb20gJ3JjLXV0aWwvZXMvQ29udGFpbmVyUmVuZGVyJztcbmltcG9ydCBQb3J0YWwgZnJvbSAncmMtdXRpbC9lcy9Qb3J0YWwnO1xudmFyIElTX1JFQUNUXzE2ID0gJ2NyZWF0ZVBvcnRhbCcgaW4gUmVhY3RET007XG5cbnZhciBEaWFsb2dXcmFwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRGlhbG9nV3JhcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEaWFsb2dXcmFwKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlhbG9nV3JhcCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zYXZlRGlhbG9nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLl9jb21wb25lbnQgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIF9leHRlbmRzKHsgcmVmOiBfdGhpcy5zYXZlRGlhbG9nIH0sIF90aGlzLnByb3BzLCBleHRyYSwgeyBrZXk6IFwiZGlhbG9nXCIgfSkpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBmaXggaXNzdWUgIzEwNjU2XG4gICAgICAgIC8qXG4gICAgICAgICogQ3VzdG9tIGNvbnRhaW5lciBzaG91bGQgbm90IGJlIHJldHVybiwgYmVjYXVzZSBpbiB0aGUgUG9ydGFsIGNvbXBvbmVudCwgaXQgd2lsbCByZW1vdmUgdGhlXG4gICAgICAgICogcmV0dXJuIGNvbnRhaW5lciBlbGVtZW50IGhlcmUsIGlmIHRoZSBjdXN0b20gY29udGFpbmVyIGlzIHRoZSBvbmx5IGNoaWxkIG9mIGl0J3MgY29tcG9uZW50LFxuICAgICAgICAqIGxpa2UgaXNzdWUgIzEwNjU2LCBJdCB3aWxsIGhhcyBhIGNvbmZsaWN0IHdpdGggcmVtb3ZlQ2hpbGQgbWV0aG9kIGluIHJlYWN0LWRvbS5cbiAgICAgICAgKiBTbyBoZXJlIHNob3VsZCBhZGQgYSBjaGlsZCAoZGl2IGVsZW1lbnQpIHRvIGN1c3RvbSBjb250YWluZXIuXG4gICAgICAgICogKi9cbiAgICAgICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmdldENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoX3JlZikge1xuICAgICAgICB2YXIgdmlzaWJsZSA9IF9yZWYudmlzaWJsZTtcblxuICAgICAgICByZXR1cm4gISEodGhpcy5wcm9wcy52aXNpYmxlIHx8IHZpc2libGUpO1xuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZTogdGhpcy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciB2aXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xuXG4gICAgICAgIHZhciBwb3J0YWwgPSBudWxsO1xuICAgICAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXJSZW5kZXIsIHsgcGFyZW50OiB0aGlzLCB2aXNpYmxlOiB2aXNpYmxlLCBhdXRvRGVzdHJveTogZmFsc2UsIGdldENvbXBvbmVudDogdGhpcy5nZXRDb21wb25lbnQsIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIgfSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlckNvbXBvbmVudCA9IF9yZWYyLnJlbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyID0gX3JlZjIucmVtb3ZlQ29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBfdGhpczIucmVtb3ZlQ29udGFpbmVyID0gcmVtb3ZlQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUgfHwgdGhpcy5fY29tcG9uZW50KSB7XG4gICAgICAgICAgICBwb3J0YWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwgeyBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyIH0sIHRoaXMuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3J0YWw7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2dXcmFwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5EaWFsb2dXcmFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1dyYXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIExhenlSZW5kZXJCb3ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhMYXp5UmVuZGVyQm94LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIExhenlSZW5kZXJCb3goKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXp5UmVuZGVyQm94KTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBMYXp5UmVuZGVyQm94LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhIW5leHRQcm9wcy5oaWRkZW5DbGFzc05hbWUgfHwgISFuZXh0UHJvcHMudmlzaWJsZTtcbiAgICB9O1xuXG4gICAgTGF6eVJlbmRlckJveC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuaGlkZGVuQ2xhc3NOYW1lICYmICF0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMucHJvcHMuaGlkZGVuQ2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICAgICAgZGVsZXRlIHByb3BzLnZpc2libGU7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHByb3BzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBMYXp5UmVuZGVyQm94O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBMYXp5UmVuZGVyQm94OyIsInZhciBjYWNoZWQgPSB2b2lkIDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbEJhclNpemUoZnJlc2gpIHtcbiAgaWYgKGZyZXNoIHx8IGNhY2hlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzIwMHB4JztcblxuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBvdXRlclN0eWxlID0gb3V0ZXIuc3R5bGU7XG5cbiAgICBvdXRlclN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBvdXRlclN0eWxlLnRvcCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5sZWZ0ID0gMDtcbiAgICBvdXRlclN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgb3V0ZXJTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXJTdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gICAgb3V0ZXJTdHlsZS5oZWlnaHQgPSAnMTUwcHgnO1xuICAgIG91dGVyU3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoQ29udGFpbmVkID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB2YXIgd2lkdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIGlmICh3aWR0aENvbnRhaW5lZCA9PT0gd2lkdGhTY3JvbGwpIHtcbiAgICAgIHdpZHRoU2Nyb2xsID0gb3V0ZXIuY2xpZW50V2lkdGg7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICBjYWNoZWQgPSB3aWR0aENvbnRhaW5lZCAtIHdpZHRoU2Nyb2xsO1xuICB9XG4gIHJldHVybiBjYWNoZWQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==