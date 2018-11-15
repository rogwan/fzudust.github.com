(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/antd/es/message/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/message/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");
/* global Promise */



var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer = void 0;
var maxCount = void 0;
function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    rc_notification__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance({
        prefixCls: prefixCls,
        transitionName: transitionName,
        style: { top: defaultTop },
        getContainer: getContainer,
        maxCount: maxCount
    }, function (instance) {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}
function notice(args) {
    var duration = args.duration !== undefined ? args.duration : defaultDuration;
    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'close-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[args.type];
    var target = key++;
    var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
            if (typeof args.onClose === 'function') {
                args.onClose();
            }
            return resolve(true);
        };
        getMessageInstance(function (instance) {
            var iconNode = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_2__["default"], { type: iconType, theme: iconType === 'loading' ? 'outlined' : 'filled' });
            instance.notice({
                key: target,
                duration: duration,
                style: {},
                content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                    'div',
                    { className: prefixCls + '-custom-content' + (args.type ? ' ' + prefixCls + '-' + args.type : '') },
                    args.icon ? args.icon : iconType ? iconNode : '',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                        'span',
                        null,
                        args.content
                    )
                ),
                onClose: callback
            });
        });
    });
    var result = function result() {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
    result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
    };
    result.promise = closePromise;
    return result;
}
var api = {
    open: notice,
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            prefixCls = options.prefixCls;
        }
        if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
        }
        if (options.transitionName !== undefined) {
            transitionName = options.transitionName;
            messageInstance = null; // delete messageInstance for new transitionName
        }
        if (options.maxCount !== undefined) {
            maxCount = options.maxCount;
            messageInstance = null;
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
    api[type] = function (content, duration, onClose) {
        if (typeof duration === 'function') {
            onClose = duration;
            duration = undefined;
        }
        return api.open({ content: content, duration: duration, type: type, onClose: onClose });
    };
});
api.warn = api.warning;
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./node_modules/antd/es/message/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/message/style/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/es/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./node_modules/antd/es/message/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/message/style/index.less":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/message/style/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rc-notification/es/Notice.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-notification/es/Notice.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Notice = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    }, _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.update) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'restartCloseTimer',
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, '' + componentClass, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, componentClass + '-closable', props.closable), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className), style: props.style, onMouseEnter: this.clearCloseTimer,
          onMouseLeave: this.startCloseTimer
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          props.closeIcon || react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Notice.propTypes = {
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  update: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Notice);

/***/ }),

/***/ "./node_modules/rc-notification/es/Notification.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-notification/es/Notification.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/createChainedFunction */ "./node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/es/Notice.js");















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();
        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, notice);
        } else {
          if (maxCount && notices.length >= maxCount) {
                                                notice.updateKey = updatedNotices[0].updateKey || updatedNotices[0].key;
            updatedNotices.shift();
          }
          updatedNotices.push(notice);
        }
        return {
          notices: updatedNotices
        };
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var notices = this.state.notices;

      var noticeNodes = notices.map(function (notice, index) {
        var update = Boolean(index === notices.length - 1 && notice.updateKey);
        var key = notice.updateKey ? notice.updateKey : notice.key;
        var onClose = Object(rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Notice__WEBPACK_IMPORTED_MODULE_13__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
            prefixCls: props.prefixCls
          }, notice, {
            key: key,
            update: update,
            onClose: onClose,
            closeIcon: props.closeIcon
          }),
          notice.content
        );
      });
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(className), style: props.style },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Notification.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ['getContainer']);

  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }
  react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Notification, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, { ref: ref })), div);
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./node_modules/rc-notification/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-notification/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./node_modules/rc-notification/es/Notification.js");

/* harmony default export */ __webpack_exports__["default"] = (_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-util/es/createChainedFunction.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/createChainedFunction.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createChainedFunction; });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);
  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21lc3NhZ2Uvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbWVzc2FnZS9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vZXMvTm90aWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vZXMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0I7QUFDWTtBQUNoQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVk7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBbUIsQ0FBQyw2Q0FBSSxHQUFHLHdFQUF3RTtBQUM5SDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIseUJBQXlCLG1EQUFtQjtBQUM1QztBQUNBLHFCQUFxQixr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Qjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBUSxnREFBUTtBQUNoQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRSxnREFBUSxRQUFRLDRDQUFLLDZCQUE2QixvRUFBUSxHQUFHLFVBQVUsV0FBVztBQUNwRjs7QUFFZSwyRUFBWSxFOzs7Ozs7Ozs7Ozs7QUNsTDNCO0FBQUE7QUFBMEM7QUFDM0Isb0hBQVksRTs7Ozs7Ozs7Ozs7O0FDRDNCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBQcm9taXNlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJ3JjLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbnZhciBkZWZhdWx0RHVyYXRpb24gPSAzO1xudmFyIGRlZmF1bHRUb3AgPSB2b2lkIDA7XG52YXIgbWVzc2FnZUluc3RhbmNlID0gdm9pZCAwO1xudmFyIGtleSA9IDE7XG52YXIgcHJlZml4Q2xzID0gJ2FudC1tZXNzYWdlJztcbnZhciB0cmFuc2l0aW9uTmFtZSA9ICdtb3ZlLXVwJztcbnZhciBnZXRDb250YWluZXIgPSB2b2lkIDA7XG52YXIgbWF4Q291bnQgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRNZXNzYWdlSW5zdGFuY2UoY2FsbGJhY2spIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2VJbnN0YW5jZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgTm90aWZpY2F0aW9uLm5ld0luc3RhbmNlKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgc3R5bGU6IHsgdG9wOiBkZWZhdWx0VG9wIH0sXG4gICAgICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgICAgICBtYXhDb3VudDogbWF4Q291bnRcbiAgICB9LCBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobWVzc2FnZUluc3RhbmNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgY2FsbGJhY2soaW5zdGFuY2UpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm90aWNlKGFyZ3MpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBhcmdzLmR1cmF0aW9uIDogZGVmYXVsdER1cmF0aW9uO1xuICAgIHZhciBpY29uVHlwZSA9IHtcbiAgICAgICAgaW5mbzogJ2luZm8tY2lyY2xlJyxcbiAgICAgICAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZScsXG4gICAgICAgIGVycm9yOiAnY2xvc2UtY2lyY2xlJyxcbiAgICAgICAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXG4gICAgICAgIGxvYWRpbmc6ICdsb2FkaW5nJ1xuICAgIH1bYXJncy50eXBlXTtcbiAgICB2YXIgdGFyZ2V0ID0ga2V5Kys7XG4gICAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBnZXRNZXNzYWdlSW5zdGFuY2UoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgICB2YXIgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogaWNvblR5cGUsIHRoZW1lOiBpY29uVHlwZSA9PT0gJ2xvYWRpbmcnID8gJ291dGxpbmVkJyA6ICdmaWxsZWQnIH0pO1xuICAgICAgICAgICAgaW5zdGFuY2Uubm90aWNlKHtcbiAgICAgICAgICAgICAgICBrZXk6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jdXN0b20tY29udGVudCcgKyAoYXJncy50eXBlID8gJyAnICsgcHJlZml4Q2xzICsgJy0nICsgYXJncy50eXBlIDogJycpIH0sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuaWNvbiA/IGFyZ3MuaWNvbiA6IGljb25UeXBlID8gaWNvbk5vZGUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgICAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICAgICAgICBtZXNzYWdlSW5zdGFuY2UucmVtb3ZlTm90aWNlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlc3VsdC50aGVuID0gZnVuY3Rpb24gKGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGNsb3NlUHJvbWlzZS50aGVuKGZpbGxlZCwgcmVqZWN0ZWQpO1xuICAgIH07XG4gICAgcmVzdWx0LnByb21pc2UgPSBjbG9zZVByb21pc2U7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBhcGkgPSB7XG4gICAgb3Blbjogbm90aWNlLFxuICAgIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMudG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRlZmF1bHRUb3AgPSBvcHRpb25zLnRvcDtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7IC8vIGRlbGV0ZSBtZXNzYWdlSW5zdGFuY2UgZm9yIG5ldyBkZWZhdWx0VG9wXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGVmYXVsdER1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lID0gb3B0aW9ucy50cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7IC8vIGRlbGV0ZSBtZXNzYWdlSW5zdGFuY2UgZm9yIG5ldyB0cmFuc2l0aW9uTmFtZVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm1heENvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1heENvdW50ID0gb3B0aW9ucy5tYXhDb3VudDtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBtZXNzYWdlSW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufTtcblsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAnbG9hZGluZyddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBhcGlbdHlwZV0gPSBmdW5jdGlvbiAoY29udGVudCwgZHVyYXRpb24sIG9uQ2xvc2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25DbG9zZSA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwaS5vcGVuKHsgY29udGVudDogY29udGVudCwgZHVyYXRpb246IGR1cmF0aW9uLCB0eXBlOiB0eXBlLCBvbkNsb3NlOiBvbkNsb3NlIH0pO1xuICAgIH07XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5sZXNzJztcbmltcG9ydCAnLi9pbmRleC5sZXNzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIE5vdGljZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb3RpY2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90aWNlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBOb3RpY2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb3RpY2UpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgICAgX3RoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH0sIF90aGlzLnN0YXJ0Q2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgX3RoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5jbGVhckNsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY2xvc2VUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGljZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gcHJldlByb3BzLmR1cmF0aW9uIHx8IHRoaXMucHJvcHMudXBkYXRlKSB7XG4gICAgICAgIHRoaXMucmVzdGFydENsb3NlVGltZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXN0YXJ0Q2xvc2VUaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3RhcnRDbG9zZVRpbWVyKCkge1xuICAgICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbGFzc05hbWU7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLW5vdGljZSc7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKF9jbGFzc05hbWUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWUsICcnICsgY29tcG9uZW50Q2xhc3MsIDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZSwgY29tcG9uZW50Q2xhc3MgKyAnLWNsb3NhYmxlJywgcHJvcHMuY2xvc2FibGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZSwgcHJvcHMuY2xhc3NOYW1lLCAhIXByb3BzLmNsYXNzTmFtZSksIF9jbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUpLCBzdHlsZTogcHJvcHMuc3R5bGUsIG9uTW91c2VFbnRlcjogdGhpcy5jbGVhckNsb3NlVGltZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnN0YXJ0Q2xvc2VUaW1lclxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY29udGVudCcgfSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuICAgICAgICBwcm9wcy5jbG9zYWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIHsgdGFiSW5kZXg6ICcwJywgb25DbGljazogdGhpcy5jbG9zZSwgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY2xvc2UnIH0sXG4gICAgICAgICAgcHJvcHMuY2xvc2VJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogY29tcG9uZW50Q2xhc3MgKyAnLWNsb3NlLXgnIH0pXG4gICAgICAgICkgOiBudWxsXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RpY2U7XG59KENvbXBvbmVudCk7XG5cbk5vdGljZS5wcm9wVHlwZXMgPSB7XG4gIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsb3NlSWNvbjogUHJvcFR5cGVzLm5vZGVcbn07XG5Ob3RpY2UuZGVmYXVsdFByb3BzID0ge1xuICBvbkVuZDogZnVuY3Rpb24gb25FbmQoKSB7fSxcbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuXG4gIGR1cmF0aW9uOiAxLjUsXG4gIHN0eWxlOiB7XG4gICAgcmlnaHQ6ICc1MCUnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOb3RpY2U7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZyb20gJ3JjLXV0aWwvZXMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE5vdGljZSBmcm9tICcuL05vdGljZSc7XG5cbnZhciBzZWVkID0gMDtcbnZhciBub3cgPSBEYXRlLm5vdygpO1xuXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xuICByZXR1cm4gJ3JjTm90aWZpY2F0aW9uXycgKyBub3cgKyAnXycgKyBzZWVkKys7XG59XG5cbnZhciBOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTm90aWZpY2F0aW9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOb3RpZmljYXRpb24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGlmaWNhdGlvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTm90aWZpY2F0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm90aWZpY2F0aW9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBub3RpY2VzOiBbXVxuICAgIH0sIF90aGlzLmFkZCA9IGZ1bmN0aW9uIChub3RpY2UpIHtcbiAgICAgIHZhciBrZXkgPSBub3RpY2Uua2V5ID0gbm90aWNlLmtleSB8fCBnZXRVdWlkKCk7XG4gICAgICB2YXIgbWF4Q291bnQgPSBfdGhpcy5wcm9wcy5tYXhDb3VudDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgdmFyIG5vdGljZXMgPSBwcmV2aW91c1N0YXRlLm5vdGljZXM7XG4gICAgICAgIHZhciBub3RpY2VJbmRleCA9IG5vdGljZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYua2V5O1xuICAgICAgICB9KS5pbmRleE9mKGtleSk7XG4gICAgICAgIHZhciB1cGRhdGVkTm90aWNlcyA9IG5vdGljZXMuY29uY2F0KCk7XG4gICAgICAgIGlmIChub3RpY2VJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB1cGRhdGVkTm90aWNlcy5zcGxpY2Uobm90aWNlSW5kZXgsIDEsIG5vdGljZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1heENvdW50ICYmIG5vdGljZXMubGVuZ3RoID49IG1heENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpY2UudXBkYXRlS2V5ID0gdXBkYXRlZE5vdGljZXNbMF0udXBkYXRlS2V5IHx8IHVwZGF0ZWROb3RpY2VzWzBdLmtleTtcbiAgICAgICAgICAgIHVwZGF0ZWROb3RpY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVwZGF0ZWROb3RpY2VzLnB1c2gobm90aWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vdGljZXM6IHVwZGF0ZWROb3RpY2VzXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldmlvdXNTdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vdGljZXM6IHByZXZpb3VzU3RhdGUubm90aWNlcy5maWx0ZXIoZnVuY3Rpb24gKG5vdGljZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGljZS5rZXkgIT09IGtleTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTm90aWZpY2F0aW9uLCBbe1xuICAgIGtleTogJ2dldFRyYW5zaXRpb25OYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIHByb3BzLmFuaW1hdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgICBfY2xhc3NOYW1lO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG5vdGljZXMgPSB0aGlzLnN0YXRlLm5vdGljZXM7XG5cbiAgICAgIHZhciBub3RpY2VOb2RlcyA9IG5vdGljZXMubWFwKGZ1bmN0aW9uIChub3RpY2UsIGluZGV4KSB7XG4gICAgICAgIHZhciB1cGRhdGUgPSBCb29sZWFuKGluZGV4ID09PSBub3RpY2VzLmxlbmd0aCAtIDEgJiYgbm90aWNlLnVwZGF0ZUtleSk7XG4gICAgICAgIHZhciBrZXkgPSBub3RpY2UudXBkYXRlS2V5ID8gbm90aWNlLnVwZGF0ZUtleSA6IG5vdGljZS5rZXk7XG4gICAgICAgIHZhciBvbkNsb3NlID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKF90aGlzMi5yZW1vdmUuYmluZChfdGhpczIsIG5vdGljZS5rZXkpLCBub3RpY2Uub25DbG9zZSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIE5vdGljZSxcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBwcmVmaXhDbHM6IHByb3BzLnByZWZpeENsc1xuICAgICAgICAgIH0sIG5vdGljZSwge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgICAgICAgICBjbG9zZUljb246IHByb3BzLmNsb3NlSWNvblxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5vdGljZS5jb250ZW50XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSAoX2NsYXNzTmFtZSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZSwgcHJvcHMucHJlZml4Q2xzLCAxKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWUsIHByb3BzLmNsYXNzTmFtZSwgISFwcm9wcy5jbGFzc05hbWUpLCBfY2xhc3NOYW1lKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzbmFtZXMoY2xhc3NOYW1lKSwgc3R5bGU6IHByb3BzLnN0eWxlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAgICB7IHRyYW5zaXRpb25OYW1lOiB0aGlzLmdldFRyYW5zaXRpb25OYW1lKCkgfSxcbiAgICAgICAgICBub3RpY2VOb2Rlc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb3RpZmljYXRpb247XG59KENvbXBvbmVudCk7XG5cbk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbWF4Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsb3NlSWNvbjogUHJvcFR5cGVzLm5vZGVcbn07XG5Ob3RpZmljYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdyYy1ub3RpZmljYXRpb24nLFxuICBhbmltYXRpb246ICdmYWRlJyxcbiAgc3R5bGU6IHtcbiAgICB0b3A6IDY1LFxuICAgIGxlZnQ6ICc1MCUnXG4gIH1cbn07XG5cblxuTm90aWZpY2F0aW9uLm5ld0luc3RhbmNlID0gZnVuY3Rpb24gbmV3Tm90aWZpY2F0aW9uSW5zdGFuY2UocHJvcGVydGllcywgY2FsbGJhY2spIHtcbiAgdmFyIF9yZWYyID0gcHJvcGVydGllcyB8fCB7fSxcbiAgICAgIGdldENvbnRhaW5lciA9IF9yZWYyLmdldENvbnRhaW5lcixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbJ2dldENvbnRhaW5lciddKTtcblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlmIChnZXRDb250YWluZXIpIHtcbiAgICB2YXIgcm9vdCA9IGdldENvbnRhaW5lcigpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiByZWYobm90aWZpY2F0aW9uKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIG5vdGljZTogZnVuY3Rpb24gbm90aWNlKG5vdGljZVByb3BzKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5hZGQobm90aWNlUHJvcHMpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZU5vdGljZTogZnVuY3Rpb24gcmVtb3ZlTm90aWNlKGtleSkge1xuICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKGtleSk7XG4gICAgICB9LFxuXG4gICAgICBjb21wb25lbnQ6IG5vdGlmaWNhdGlvbixcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbiAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmljYXRpb24sIF9leHRlbmRzKHt9LCBwcm9wcywgeyByZWY6IHJlZiB9KSksIGRpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwiaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyZ3NbaV0gJiYgYXJnc1tpXS5hcHBseSkge1xuICAgICAgICBhcmdzW2ldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=