(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pY29uL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2ljb24vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9BY3Rpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvY29uZmlybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZ1dyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWRpYWxvZy9lcy9MYXp5UmVuZGVyQm94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7Ozs7Ozs7Ozs7OztBQ0FoQyx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDLCtDQUFlOztBQUVqQjtBQUNBO0FBQ0E7QUFDZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUNoR3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDYztBQUNzQjtBQUNsQztBQUN4Qjs7QUFFL0I7QUFDQSxJQUFJLHFFQUFTOztBQUViO0FBQ0EsUUFBUSwyRUFBZTs7QUFFdkIsZUFBZSxzRkFBMEI7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQVEsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtQixRQUFRLG9FQUFRLEdBQUc7QUFDckQ7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQWU7O0FBRUYsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDbEM1QjtBQUFBO0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5sZXNzJztcbmltcG9ydCAnLi9pbmRleC5sZXNzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5cbnZhciBBY3Rpb25CdXR0b24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBY3Rpb25CdXR0b24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25CdXR0b24pO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBY3Rpb25CdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBY3Rpb25CdXR0b24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGFjdGlvbkZuID0gX3RoaXMkcHJvcHMuYWN0aW9uRm4sXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCA9IF90aGlzJHByb3BzLmNsb3NlTW9kYWw7XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb25Gbikge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkZuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb25GbihjbG9zZU1vZGFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb25GbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgcmV0LnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHVubmVjZXNzYXJ5IHRvIHNldCBsb2FkaW5nPWZhbHNlLCBmb3IgdGhlIE1vZGFsIHdpbGwgYmUgdW5tb3VudGVkIGFmdGVyIGNsb3NlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjE4M1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBY3Rpb25CdXR0b24sIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfcHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBidXR0b25Qcm9wcyA9IF9wcm9wcy5idXR0b25Qcm9wcztcblxuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoeyB0eXBlOiB0eXBlLCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIGxvYWRpbmc6IGxvYWRpbmcgfSwgYnV0dG9uUHJvcHMpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFjdGlvbkJ1dHRvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ3JjLWRpYWxvZyc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IExvY2FsZVJlY2VpdmVyIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgeyBnZXRDb25maXJtTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG52YXIgbW91c2VQb3NpdGlvbiA9IHZvaWQgMDtcbnZhciBtb3VzZVBvc2l0aW9uRXZlbnRCaW5kZWQgPSB2b2lkIDA7XG5cbnZhciBNb2RhbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1vZGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIE1vZGFsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNb2RhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvbkNhbmNlbCA9IF90aGlzLnByb3BzLm9uQ2FuY2VsO1xuICAgICAgICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgb25DYW5jZWwoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU9rID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvbk9rID0gX3RoaXMucHJvcHMub25PaztcbiAgICAgICAgICAgIGlmIChvbk9rKSB7XG4gICAgICAgICAgICAgICAgb25PayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgb2tUZXh0ID0gX3RoaXMkcHJvcHMub2tUZXh0LFxuICAgICAgICAgICAgICAgIG9rVHlwZSA9IF90aGlzJHByb3BzLm9rVHlwZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0ID0gX3RoaXMkcHJvcHMuY2FuY2VsVGV4dCxcbiAgICAgICAgICAgICAgICBjb25maXJtTG9hZGluZyA9IF90aGlzJHByb3BzLmNvbmZpcm1Mb2FkaW5nO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoeyBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDYW5jZWwgfSwgX3RoaXMucHJvcHMuY2FuY2VsQnV0dG9uUHJvcHMpLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0IHx8IGxvY2FsZS5jYW5jZWxUZXh0XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgdHlwZTogb2tUeXBlLCBsb2FkaW5nOiBjb25maXJtTG9hZGluZywgb25DbGljazogX3RoaXMuaGFuZGxlT2sgfSwgX3RoaXMucHJvcHMub2tCdXR0b25Qcm9wcyksXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dCB8fCBsb2NhbGUub2tUZXh0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBpZiAobW91c2VQb3NpdGlvbkV2ZW50QmluZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Y+q5pyJ54K55Ye75LqL5Lu25pSv5oyB5LuO6byg5qCH5L2N572u5Yqo55S75bGV5byAXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyAxMDBtcyDlhoXlj5HnlJ/ov4fngrnlh7vkuovku7bvvIzliJnku47ngrnlh7vkvY3nva7liqjnlLvlsZXnpLpcbiAgICAgICAgICAgICAgICAvLyDlkKbliJnnm7TmjqUgem9vbSDlsZXnpLpcbiAgICAgICAgICAgICAgICAvLyDov5nmoLflj6/ku6XlhbzlrrnpnZ7ngrnlh7vmlrnlvI/lsZXlvIBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vdXNlUG9zaXRpb25FdmVudEJpbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGZvb3RlciA9IF9hLmZvb3RlcixcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0gX2EudmlzaWJsZSxcbiAgICAgICAgICAgICAgICB3cmFwQ2xhc3NOYW1lID0gX2Eud3JhcENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCA9IF9hLmNlbnRlcmVkLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImZvb3RlclwiLCBcInZpc2libGVcIiwgXCJ3cmFwQ2xhc3NOYW1lXCIsIFwiY2VudGVyZWRcIiwgXCJwcmVmaXhDbHNcIl0pO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRGb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIExvY2FsZVJlY2VpdmVyLFxuICAgICAgICAgICAgICAgIHsgY29tcG9uZW50TmFtZTogJ01vZGFsJywgZGVmYXVsdExvY2FsZTogZ2V0Q29uZmlybUxvY2FsZSgpIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGb290ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgY2xvc2VJY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UteCcgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsb3NlLWljb24nLCB0eXBlOiAnY2xvc2UnIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7IHByZWZpeENsczogcHJlZml4Q2xzLCB3cmFwQ2xhc3NOYW1lOiBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4Q2xzICsgJy1jZW50ZXJlZCcsICEhY2VudGVyZWQpLCB3cmFwQ2xhc3NOYW1lKSwgZm9vdGVyOiBmb290ZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRGb290ZXIgOiBmb290ZXIsIHZpc2libGU6IHZpc2libGUsIG1vdXNlUG9zaXRpb246IG1vdXNlUG9zaXRpb24sIG9uQ2xvc2U6IHRoaXMuaGFuZGxlQ2FuY2VsLCBjbG9zZUljb246IGNsb3NlSWNvbiB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LW1vZGFsJyxcbiAgICB3aWR0aDogNTIwLFxuICAgIHRyYW5zaXRpb25OYW1lOiAnem9vbScsXG4gICAgbWFza1RyYW5zaXRpb25OYW1lOiAnZmFkZScsXG4gICAgY29uZmlybUxvYWRpbmc6IGZhbHNlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIG9rVHlwZTogJ3ByaW1hcnknLFxuICAgIG9rQnV0dG9uRGlzYWJsZWQ6IGZhbHNlLFxuICAgIGNhbmNlbEJ1dHRvbkRpc2FibGVkOiBmYWxzZVxufTtcbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25PazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9rVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgY29uZmlybUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuXG52YXIgX3RoaXMgPSB0aGlzO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJy4vQWN0aW9uQnV0dG9uJztcbmltcG9ydCB7IGdldENvbmZpcm1Mb2NhbGUgfSBmcm9tICcuL2xvY2FsZSc7XG52YXIgSVNfUkVBQ1RfMTYgPSAhIVJlYWN0RE9NLmNyZWF0ZVBvcnRhbDtcbnZhciBDb25maXJtRGlhbG9nID0gZnVuY3Rpb24gQ29uZmlybURpYWxvZyhwcm9wcykge1xuICAgIHZhciBvbkNhbmNlbCA9IHByb3BzLm9uQ2FuY2VsLFxuICAgICAgICBvbk9rID0gcHJvcHMub25PayxcbiAgICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgICAgekluZGV4ID0gcHJvcHMuekluZGV4LFxuICAgICAgICBhZnRlckNsb3NlID0gcHJvcHMuYWZ0ZXJDbG9zZSxcbiAgICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgIGtleWJvYXJkID0gcHJvcHMua2V5Ym9hcmQsXG4gICAgICAgIGNlbnRlcmVkID0gcHJvcHMuY2VudGVyZWQsXG4gICAgICAgIGdldENvbnRhaW5lciA9IHByb3BzLmdldENvbnRhaW5lcixcbiAgICAgICAgb2tCdXR0b25Qcm9wcyA9IHByb3BzLm9rQnV0dG9uUHJvcHMsXG4gICAgICAgIGNhbmNlbEJ1dHRvblByb3BzID0gcHJvcHMuY2FuY2VsQnV0dG9uUHJvcHM7XG5cbiAgICB2YXIgaWNvblR5cGUgPSBwcm9wcy5pY29uVHlwZSB8fCAncXVlc3Rpb24tY2lyY2xlJztcbiAgICB2YXIgb2tUeXBlID0gcHJvcHMub2tUeXBlIHx8ICdwcmltYXJ5JztcbiAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzIHx8ICdhbnQtbW9kYWwnO1xuICAgIHZhciBjb250ZW50UHJlZml4Q2xzID0gcHJlZml4Q2xzICsgJy1jb25maXJtJztcbiAgICAvLyDpu5jorqTkuLogdHJ1Ze+8jOS/neaMgeWQkeS4i+WFvOWuuVxuICAgIHZhciBva0NhbmNlbCA9ICdva0NhbmNlbCcgaW4gcHJvcHMgPyBwcm9wcy5va0NhbmNlbCA6IHRydWU7XG4gICAgdmFyIHdpZHRoID0gcHJvcHMud2lkdGggfHwgNDE2O1xuICAgIHZhciBzdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9O1xuICAgIC8vIOm7mOiupOS4uiBmYWxzZe+8jOS/neaMgeaXp+eJiOm7mOiupOihjOS4ulxuICAgIHZhciBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogcHJvcHMubWFza0Nsb3NhYmxlO1xuICAgIHZhciBydW50aW1lTG9jYWxlID0gZ2V0Q29uZmlybUxvY2FsZSgpO1xuICAgIHZhciBva1RleHQgPSBwcm9wcy5va1RleHQgfHwgKG9rQ2FuY2VsID8gcnVudGltZUxvY2FsZS5va1RleHQgOiBydW50aW1lTG9jYWxlLmp1c3RPa1RleHQpO1xuICAgIHZhciBjYW5jZWxUZXh0ID0gcHJvcHMuY2FuY2VsVGV4dCB8fCBydW50aW1lTG9jYWxlLmNhbmNlbFRleHQ7XG4gICAgdmFyIGF1dG9Gb2N1c0J1dHRvbiA9IHByb3BzLmF1dG9Gb2N1c0J1dHRvbiA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuYXV0b0ZvY3VzQnV0dG9uIHx8ICdvayc7XG4gICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhjb250ZW50UHJlZml4Q2xzLCBjb250ZW50UHJlZml4Q2xzICsgJy0nICsgcHJvcHMudHlwZSwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gb2tDYW5jZWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQWN0aW9uQnV0dG9uLFxuICAgICAgICB7IGFjdGlvbkZuOiBvbkNhbmNlbCwgY2xvc2VNb2RhbDogY2xvc2UsIGF1dG9Gb2N1czogYXV0b0ZvY3VzQnV0dG9uID09PSAnY2FuY2VsJywgYnV0dG9uUHJvcHM6IGNhbmNlbEJ1dHRvblByb3BzIH0sXG4gICAgICAgIGNhbmNlbFRleHRcbiAgICApO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBEaWFsb2csXG4gICAgICAgIHsgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsIHdyYXBDbGFzc05hbWU6IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBjb250ZW50UHJlZml4Q2xzICsgJy1jZW50ZXJlZCcsICEhcHJvcHMuY2VudGVyZWQpKSwgb25DYW5jZWw6IGNsb3NlLmJpbmQoX3RoaXMsIHsgdHJpZ2dlckNhbmNlbDogdHJ1ZSB9KSwgdmlzaWJsZTogdmlzaWJsZSwgdGl0bGU6ICcnLCB0cmFuc2l0aW9uTmFtZTogJ3pvb20nLCBmb290ZXI6ICcnLCBtYXNrVHJhbnNpdGlvbk5hbWU6ICdmYWRlJywgbWFza0Nsb3NhYmxlOiBtYXNrQ2xvc2FibGUsIHN0eWxlOiBzdHlsZSwgd2lkdGg6IHdpZHRoLCB6SW5kZXg6IHpJbmRleCwgYWZ0ZXJDbG9zZTogYWZ0ZXJDbG9zZSwga2V5Ym9hcmQ6IGtleWJvYXJkLCBjZW50ZXJlZDogY2VudGVyZWQsIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb250ZW50UHJlZml4Q2xzICsgJy1ib2R5LXdyYXBwZXInIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb250ZW50UHJlZml4Q2xzICsgJy1ib2R5JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiBpY29uVHlwZSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb250ZW50UHJlZml4Q2xzICsgJy10aXRsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudGl0bGVcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY29udGVudFByZWZpeENscyArICctY29udGVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29udGVudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb250ZW50UHJlZml4Q2xzICsgJy1idG5zJyB9LFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBBY3Rpb25CdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogb2tUeXBlLCBhY3Rpb25Gbjogb25PaywgY2xvc2VNb2RhbDogY2xvc2UsIGF1dG9Gb2N1czogYXV0b0ZvY3VzQnV0dG9uID09PSAnb2snLCBidXR0b25Qcm9wczogb2tCdXR0b25Qcm9wcyB9LFxuICAgICAgICAgICAgICAgICAgICBva1RleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpcm0oY29uZmlnKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB2YXIgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjb25maWcsIHsgY2xvc2U6IGNsb3NlLCB2aXNpYmxlOiB0cnVlIH0pO1xuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRDb25maWcgPSBfZXh0ZW5kcyh7fSwgY3VycmVudENvbmZpZywgeyB2aXNpYmxlOiBmYWxzZSwgYWZ0ZXJDbG9zZTogZGVzdHJveS5iaW5kLmFwcGx5KGRlc3Ryb3ksIFt0aGlzXS5jb25jYXQoYXJncykpIH0pO1xuICAgICAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3Ryb3kuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUobmV3Q29uZmlnKSB7XG4gICAgICAgIGN1cnJlbnRDb25maWcgPSBfZXh0ZW5kcyh7fSwgY3VycmVudENvbmZpZywgbmV3Q29uZmlnKTtcbiAgICAgICAgcmVuZGVyKGN1cnJlbnRDb25maWcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbiAgICAgICAgaWYgKHVubW91bnRSZXN1bHQgJiYgZGl2LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyaWdnZXJDYW5jZWwgPSBhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3Muc29tZShmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbSAmJiBwYXJhbS50cmlnZ2VyQ2FuY2VsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbmZpZy5vbkNhbmNlbCAmJiB0cmlnZ2VyQ2FuY2VsKSB7XG4gICAgICAgICAgICBjb25maWcub25DYW5jZWwuYXBwbHkoY29uZmlnLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlybURpYWxvZywgcHJvcHMpLCBkaXYpO1xuICAgIH1cbiAgICByZW5kZXIoY3VycmVudENvbmZpZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogY2xvc2UsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IGNvbmZpcm0gZnJvbSAnLi9jb25maXJtJztcbk1vZGFsLmluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnaW5mbycsIGljb25UeXBlOiAnaW5mby1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwuc3VjY2VzcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICdzdWNjZXNzJywgaWNvblR5cGU6ICdjaGVjay1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwuZXJyb3IgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnZXJyb3InLCBpY29uVHlwZTogJ2Nsb3NlLWNpcmNsZScsIG9rQ2FuY2VsOiBmYWxzZSB9LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKTtcbn07XG5Nb2RhbC53YXJuaW5nID0gTW9kYWwud2FybiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICd3YXJuaW5nJywgaWNvblR5cGU6ICdleGNsYW1hdGlvbi1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwuY29uZmlybSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICdjb25maXJtJywgb2tDYW5jZWw6IHRydWUgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0JztcbnZhciBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIGRlZmF1bHRMb2NhbGUuTW9kYWwpO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gICAgaWYgKG5ld0xvY2FsZSkge1xuICAgICAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIHJ1bnRpbWVMb2NhbGUsIG5ld0xvY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0TG9jYWxlLk1vZGFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgICByZXR1cm4gcnVudGltZUxvY2FsZTtcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4Lmxlc3MnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2J1dHRvbi9zdHlsZSc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAncmMtdXRpbC9lcy9LZXlDb2RlJztcbmltcG9ydCBjb250YWlucyBmcm9tICdyYy11dGlsL2VzL0RvbS9jb250YWlucyc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5pbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tICdyYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUnO1xudmFyIHV1aWQgPSAwO1xudmFyIG9wZW5Db3VudCA9IDA7XG4vKiBlc2xpbnQgcmVhY3Qvbm8taXMtbW91bnRlZDowICovXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gICAgdmFyIHJldCA9IHdbJ3BhZ2UnICsgKHRvcCA/ICdZJyA6ICdYJykgKyAnT2Zmc2V0J107XG4gICAgdmFyIG1ldGhvZCA9ICdzY3JvbGwnICsgKHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIGQgPSB3LmRvY3VtZW50O1xuICAgICAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuICAgICAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm1PcmlnaW4obm9kZSwgdmFsdWUpIHtcbiAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuICAgIFsnV2Via2l0JywgJ01veicsICdNcycsICdtcyddLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICBzdHlsZVtwcmVmaXggKyAnVHJhbnNmb3JtT3JpZ2luJ10gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICBzdHlsZVsndHJhbnNmb3JtT3JpZ2luJ10gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIG9mZnNldChlbCkge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHBvcyA9IHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wXG4gICAgfTtcbiAgICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgICB2YXIgdyA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICAgIHBvcy5sZWZ0ICs9IGdldFNjcm9sbCh3KTtcbiAgICBwb3MudG9wICs9IGdldFNjcm9sbCh3LCB0cnVlKTtcbiAgICByZXR1cm4gcG9zO1xufVxuXG52YXIgRGlhbG9nID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRGlhbG9nLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIERpYWxvZygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpYWxvZyk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5vbkFuaW1hdGVMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhZnRlckNsb3NlID0gX3RoaXMucHJvcHMuYWZ0ZXJDbG9zZTtcbiAgICAgICAgICAgIC8vIG5lZWQgZGVtbz9cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvZGlhbG9nL3B1bGwvMjhcblxuICAgICAgICAgICAgaWYgKF90aGlzLndyYXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5pblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVNjcm9sbGluZ0VmZmVjdCgpO1xuICAgICAgICAgICAgaWYgKGFmdGVyQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBhZnRlckNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uTWFza0NsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIGFuZHJvaWQgdHJpZ2dlciBjbGljayBvbiBvcGVuIChmYXN0Y2xpY2s/PylcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gX3RoaXMub3BlblRpbWUgPCAzMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMua2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkVTQykge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ga2VlcCBmb2N1cyBpbnNpZGUgZGlhbG9nXG4gICAgICAgICAgICBpZiAocHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuVEFCKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbnRpbmVsU3RhcnQgPSBfdGhpcy5zZW50aW5lbFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IHNlbnRpbmVsU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZW50aW5lbEVuZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnNlbnRpbmVsRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW50aW5lbFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldERpYWxvZ0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBjbG9zYWJsZSA9IHByb3BzLmNsb3NhYmxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgICAgICAgIHZhciBkZXN0ID0ge307XG4gICAgICAgICAgICBpZiAocHJvcHMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlc3Qud2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlc3QuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvb3RlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChwcm9wcy5mb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZvb3RlcicsIHJlZjogX3RoaXMuc2F2ZVJlZignZm9vdGVyJykgfSwgcHJvcHMuZm9vdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWhlYWRlcicsIHJlZjogX3RoaXMuc2F2ZVJlZignaGVhZGVyJykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10aXRsZScsIGlkOiBfdGhpcy50aXRsZUlkIH0sIHByb3BzLnRpdGxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xvc2VyID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGNsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IF90aGlzLmNsb3NlLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLCBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UnIH0sIHByb3BzLmNsb3NlSWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jbG9zZS14JyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIGRlc3QpO1xuICAgICAgICAgICAgdmFyIHNlbnRpbmVsU3R5bGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9O1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gX3RoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgICAgIHZhciBkaWFsb2dFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7IGtleTogXCJkaWFsb2ctZWxlbWVudFwiLCByb2xlOiBcImRvY3VtZW50XCIsIHJlZjogX3RoaXMuc2F2ZVJlZignZGlhbG9nJyksIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgdmlzaWJsZTogcHJvcHMudmlzaWJsZSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgdGFiSW5kZXg6IDAsIHJlZjogX3RoaXMuc2F2ZVJlZignc2VudGluZWxTdGFydCcpLCBzdHlsZTogc2VudGluZWxTdHlsZSB9LCBcInNlbnRpbmVsU3RhcnRcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY29udGVudCcgfSwgY2xvc2VyLCBoZWFkZXIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoeyBjbGFzc05hbWU6IHByZWZpeENscyArICctYm9keScsIHN0eWxlOiBwcm9wcy5ib2R5U3R5bGUsIHJlZjogX3RoaXMuc2F2ZVJlZignYm9keScpIH0sIHByb3BzLmJvZHlQcm9wcyksIHByb3BzLmNoaWxkcmVuKSwgZm9vdGVyKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHRhYkluZGV4OiAwLCByZWY6IF90aGlzLnNhdmVSZWYoJ3NlbnRpbmVsRW5kJyksIHN0eWxlOiBzZW50aW5lbFN0eWxlIH0sIFwic2VudGluZWxFbmRcIikpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZSwgeyBrZXk6IFwiZGlhbG9nXCIsIHNob3dQcm9wOiBcInZpc2libGVcIiwgb25MZWF2ZTogX3RoaXMub25BbmltYXRlTGVhdmUsIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSwgY29tcG9uZW50OiBcIlwiLCB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlIH0sIHByb3BzLnZpc2libGUgfHwgIXByb3BzLmRlc3Ryb3lPbkNsb3NlID8gZGlhbG9nRWxlbWVudCA6IG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRaSW5kZXhTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMuekluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS56SW5kZXggPSBwcm9wcy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFdyYXBTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX3RoaXMuZ2V0WkluZGV4U3R5bGUoKSwgX3RoaXMucHJvcHMud3JhcFN0eWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0TWFza1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpLCBfdGhpcy5wcm9wcy5tYXNrU3R5bGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIG1hc2tFbGVtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHByb3BzLm1hc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFza1RyYW5zaXRpb24gPSBfdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF6eVJlbmRlckJveCwgX2V4dGVuZHMoeyBzdHlsZTogX3RoaXMuZ2V0TWFza1N0eWxlKCksIGtleTogXCJtYXNrXCIsIGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrJywgaGlkZGVuQ2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2staGlkZGVuJywgdmlzaWJsZTogcHJvcHMudmlzaWJsZSB9LCBwcm9wcy5tYXNrUHJvcHMpKTtcbiAgICAgICAgICAgICAgICBpZiAobWFza1RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGUsIHsga2V5OiBcIm1hc2tcIiwgc2hvd1Byb3A6IFwidmlzaWJsZVwiLCB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLCBjb21wb25lbnQ6IFwiXCIsIHRyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvbiB9LCBtYXNrRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc2tFbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLm1hc2tUcmFuc2l0aW9uTmFtZTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0VHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbjtcbiAgICAgICAgICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBhbmltYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiBfdGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBfdGhpcy5zY3JvbGxiYXJXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFkZFNjcm9sbGluZ0VmZmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wZW5Db3VudCsrO1xuICAgICAgICAgICAgaWYgKG9wZW5Db3VudCAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICBfdGhpcy5zZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIC8vIHRoaXMuYWRqdXN0RGlhbG9nKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbW92ZVNjcm9sbGluZ0VmZmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wZW5Db3VudC0tO1xuICAgICAgICAgICAgaWYgKG9wZW5Db3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgIF90aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlc2V0QWRqdXN0bWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9uQ2xvc2UgPSBfdGhpcy5wcm9wcy5vbkNsb3NlO1xuXG4gICAgICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgICAgICAgIG9uQ2xvc2UoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZ1bGxXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgaWYgKCFmdWxsV2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyB3b3JrYXJvdW5kIGZvciBtaXNzaW5nIHdpbmRvdy5pbm5lcldpZHRoIGluIElFOFxuICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnRSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGZ1bGxXaW5kb3dXaWR0aCA9IGRvY3VtZW50RWxlbWVudFJlY3QucmlnaHQgLSBNYXRoLmFicyhkb2N1bWVudEVsZW1lbnRSZWN0LmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgZnVsbFdpbmRvd1dpZHRoO1xuICAgICAgICAgICAgaWYgKF90aGlzLmJvZHlJc092ZXJmbG93aW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLndyYXAgJiYgX3RoaXMuc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBtb2RhbElzT3ZlcmZsb3dpbmcgPSBfdGhpcy53cmFwLnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nTGVmdCA9ICghX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgbW9kYWxJc092ZXJmbG93aW5nID8gX3RoaXMuc2Nyb2xsYmFyV2lkdGggOiAnJykgKyAncHgnO1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUucGFkZGluZ1JpZ2h0ID0gKF90aGlzLmJvZHlJc092ZXJmbG93aW5nICYmICFtb2RhbElzT3ZlcmZsb3dpbmcgPyBfdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlc2V0QWRqdXN0bWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUucGFkZGluZ0xlZnQgPSBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNhdmVSZWYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXNbbmFtZV0gPSBub2RlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIERpYWxvZy5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLmluVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlSWQgPSAncmNEaWFsb2dUaXRsZScgKyB1dWlkKys7XG4gICAgfTtcblxuICAgIERpYWxvZy5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30pO1xuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLnByb3BzLm1vdXNlUG9zaXRpb247XG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzaG93XG4gICAgICAgICAgICBpZiAoIXByZXZQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmRpYWxvZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsT2Zmc2V0ID0gb2Zmc2V0KGRpYWxvZ05vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgbW91c2VQb3NpdGlvbi54IC0gZWxPZmZzZXQubGVmdCArICdweCAnICsgKG1vdXNlUG9zaXRpb24ueSAtIGVsT2Zmc2V0LnRvcCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm1hc2sgJiYgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgfHwgdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS50cnlGb2N1cyA9IGZ1bmN0aW9uIHRyeUZvY3VzKCkge1xuICAgICAgICBpZiAoIWNvbnRhaW5zKHRoaXMud3JhcCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5zZW50aW5lbFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGU7XG5cbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRXcmFwU3R5bGUoKTtcbiAgICAgICAgLy8gY2xlYXIgaGlkZSBkaXNwbGF5XG4gICAgICAgIC8vIGFuZCBvbmx5IHNldCBkaXNwbGF5IGFmdGVyIGFzeW5jIGFuaW0sIG5vdCBoZXJlIGZvciBoaWRlXG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLmdldE1hc2tFbGVtZW50KCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoeyB0YWJJbmRleDogLTEsIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy13cmFwICcgKyAocHJvcHMud3JhcENsYXNzTmFtZSB8fCAnJyksIHJlZjogdGhpcy5zYXZlUmVmKCd3cmFwJyksIG9uQ2xpY2s6IG1hc2tDbG9zYWJsZSA/IHRoaXMub25NYXNrQ2xpY2sgOiB1bmRlZmluZWQsIHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHByb3BzLnRpdGxlID8gdGhpcy50aXRsZUlkIDogbnVsbCwgc3R5bGU6IHN0eWxlIH0sIHByb3BzLndyYXBQcm9wcyksIHRoaXMuZ2V0RGlhbG9nRWxlbWVudCgpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2c7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1hc2s6IHRydWUsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGRlc3Ryb3lPbkNsb3NlOiBmYWxzZSxcbiAgICBwcmVmaXhDbHM6ICdyYy1kaWFsb2cnXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuaW1wb3J0IENvbnRhaW5lclJlbmRlciBmcm9tICdyYy11dGlsL2VzL0NvbnRhaW5lclJlbmRlcic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JjLXV0aWwvZXMvUG9ydGFsJztcbnZhciBJU19SRUFDVF8xNiA9ICdjcmVhdGVQb3J0YWwnIGluIFJlYWN0RE9NO1xuXG52YXIgRGlhbG9nV3JhcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZ1dyYXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGlhbG9nV3JhcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpYWxvZ1dyYXApO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc2F2ZURpYWxvZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5fY29tcG9uZW50ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBfZXh0ZW5kcyh7IHJlZjogX3RoaXMuc2F2ZURpYWxvZyB9LCBfdGhpcy5wcm9wcywgZXh0cmEsIHsga2V5OiBcImRpYWxvZ1wiIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZml4IGlzc3VlICMxMDY1NlxuICAgICAgICAvKlxuICAgICAgICAqIEN1c3RvbSBjb250YWluZXIgc2hvdWxkIG5vdCBiZSByZXR1cm4sIGJlY2F1c2UgaW4gdGhlIFBvcnRhbCBjb21wb25lbnQsIGl0IHdpbGwgcmVtb3ZlIHRoZVxuICAgICAgICAqIHJldHVybiBjb250YWluZXIgZWxlbWVudCBoZXJlLCBpZiB0aGUgY3VzdG9tIGNvbnRhaW5lciBpcyB0aGUgb25seSBjaGlsZCBvZiBpdCdzIGNvbXBvbmVudCxcbiAgICAgICAgKiBsaWtlIGlzc3VlICMxMDY1NiwgSXQgd2lsbCBoYXMgYSBjb25mbGljdCB3aXRoIHJlbW92ZUNoaWxkIG1ldGhvZCBpbiByZWFjdC1kb20uXG4gICAgICAgICogU28gaGVyZSBzaG91bGQgYWRkIGEgY2hpbGQgKGRpdiBlbGVtZW50KSB0byBjdXN0b20gY29udGFpbmVyLlxuICAgICAgICAqICovXG4gICAgICAgIF90aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5nZXRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRGlhbG9nV3JhcC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKF9yZWYpIHtcbiAgICAgICAgdmFyIHZpc2libGUgPSBfcmVmLnZpc2libGU7XG5cbiAgICAgICAgcmV0dXJuICEhKHRoaXMucHJvcHMudmlzaWJsZSB8fCB2aXNpYmxlKTtcbiAgICB9O1xuXG4gICAgRGlhbG9nV3JhcC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKElTX1JFQUNUXzE2KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoe1xuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2U6IHRoaXMucmVtb3ZlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7fSxcblxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nV3JhcC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgdmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcblxuICAgICAgICB2YXIgcG9ydGFsID0gbnVsbDtcbiAgICAgICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyUmVuZGVyLCB7IHBhcmVudDogdGhpcywgdmlzaWJsZTogdmlzaWJsZSwgYXV0b0Rlc3Ryb3k6IGZhbHNlLCBnZXRDb21wb25lbnQ6IHRoaXMuZ2V0Q29tcG9uZW50LCBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyIH0sIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSBfcmVmMi5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lciA9IF9yZWYyLnJlbW92ZUNvbnRhaW5lcjtcblxuICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbW92ZUNvbnRhaW5lciA9IHJlbW92ZUNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlIHx8IHRoaXMuX2NvbXBvbmVudCkge1xuICAgICAgICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHsgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lciB9LCB0aGlzLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9ydGFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGlhbG9nV3JhcDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRGlhbG9nV3JhcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBEaWFsb2dXcmFwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBMYXp5UmVuZGVyQm94ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMYXp5UmVuZGVyQm94KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgTGF6eVJlbmRlckJveC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gISFuZXh0UHJvcHMuaGlkZGVuQ2xhc3NOYW1lIHx8ICEhbmV4dFByb3BzLnZpc2libGU7XG4gICAgfTtcblxuICAgIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICBpZiAoISF0aGlzLnByb3BzLmhpZGRlbkNsYXNzTmFtZSAmJiAhdGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLnByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5oaWRkZW5DbGFzc05hbWU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy52aXNpYmxlO1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBwcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJ2YXIgY2FjaGVkID0gdm9pZCAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKGZyZXNoKSB7XG4gIGlmIChmcmVzaCB8fCBjYWNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG5cbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgb3V0ZXJTdHlsZSA9IG91dGVyLnN0eWxlO1xuXG4gICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXJTdHlsZS50b3AgPSAwO1xuICAgIG91dGVyU3R5bGUubGVmdCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgY2FjaGVkID0gd2lkdGhDb250YWluZWQgLSB3aWR0aFNjcm9sbDtcbiAgfVxuICByZXR1cm4gY2FjaGVkO1xufSJdLCJzb3VyY2VSb290IjoiIn0=