(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/components/video/controls.jsx":
/*!*******************************************!*\
  !*** ./src/components/video/controls.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");







 //eslint-disable-line

var createSliderWithTooltip = rc_slider__WEBPACK_IMPORTED_MODULE_7__["default"].createSliderWithTooltip;
var Slider = createSliderWithTooltip(rc_slider__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* eslint-disable jsx-a11y/media-has-caption,jsx-a11y/alt-text,radix */

var Controls =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Controls, _Component);

  function Controls() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "timeFormat", function (time) {
      if (time === void 0) {
        time = 0;
      }

      var format = function format(num) {
        return num > 9 ? num : "0" + num;
      };

      return format(parseInt(time / 60)) + ":" + format(parseInt(time % 60));
    });

    return _this;
  }

  var _proto = Controls.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        paused = _this$props.paused,
        currentTime = _this$props.currentTime,
        duration = _this$props.duration,
        play = _this$props.play,
        pause = _this$props.pause,
        changeTime = _this$props.changeTime,
        fullScreenStatus = _this$props.fullScreenStatus,
        toggleFullscreen = _this$props.toggleFullscreen,
        controlPlugins = _this$props.controlPlugins;
    var sliderProps = {
      handleStyle: [{
        border: 'solid 1px #a2c7fd',
        width: 12,
        height: 12
      }],
      trackStyle: [{
        height: 2
      }],
      railStyle: {
        height: 2
      }
    }; // const View = component;

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "control"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "play-pause"
    }, paused ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "caret-right",
      onClick: play
    }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "pause",
      onClick: pause
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "currentTime"
    }, this.timeFormat(currentTime)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "slider"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Slider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      min: 0,
      max: duration,
      value: currentTime,
      tipFormatter: this.timeFormat,
      onChange: changeTime
    }, sliderProps))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "duration"
    }, this.timeFormat(duration)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "screen"
    }, fullScreenStatus ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "shrink",
      onClick: toggleFullscreen
    }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "arrow-salt",
      onClick: toggleFullscreen
    })));
  };

  return Controls;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/components/video/index.js":
/*!***************************************!*\
  !*** ./src/components/video/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.jsx */ "./src/components/video/video.jsx");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ "./src/components/video/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_video_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/video/style/index.less":
/*!***********************************************!*\
  !*** ./src/components/video/style/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/video/video.jsx":
/*!****************************************!*\
  !*** ./src/components/video/video.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _controls_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls.jsx */ "./src/components/video/controls.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);










/* eslint-disable jsx-a11y/media-has-caption,jsx-a11y/alt-text,radix */

var FULLSCREEN_CHANGE_ELEMENT = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];

var VideoPlayer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(VideoPlayer, _Component);

  function VideoPlayer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    /*  const _this = this;
     const textPlugins = props.plugins.filter(p => p.props.plugin === 'text');
     const controlPlugins = props.plugins.filter(p => p.props.plugin === 'control').map(p => {
    	 const newProps = {}
    	 for (let prop in p.props) {
    		 let obj = p.props[prop];
    		 if (typeof obj === 'function') {
    			 newProps[prop] = (e) => p.props[prop](_this.player, e)
    		 } else {
    			 newProps[prop] = p.props[prop]
    		 }
    	 }
    	 return React.cloneElement(p, newProps)
     }); */

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "onDurationChange", function (e) {
      _this.props.onDurationChange && _this.props.onDurationChange(e);

      _this.setState({
        duration: parseInt(_this.player.duration)
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "onCanPlay", function (e) {
      _this.props.onCanPlay && _this.props.onCanPlay(e);

      _this.setState({
        loading: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "onError", function (e) {
      console.error(_this.player.error);
      _this.props.onError && _this.props.onError(e);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "onTimeUpdate", function (e) {
      _this.props.onTimeUpdate && _this.props.onTimeUpdate(e);
      if (_this.state.currentTime === 0 && _this.state.duration === 0) return;

      _this.setState({
        currentTime: parseInt(_this.player.currentTime)
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "onWaiting", function (e) {
      _this.props.onWaiting && _this.props.onWaiting(e);

      _this.setState({
        loading: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "onEnded", function (e) {
      _this.props.onEnded && _this.props.onEnded(e);

      _this.setState({
        ended: true,
        showControl: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "fullscreenchange", function (e) {
      var type = e.type;
      var map = {
        fullscreenchange: document.fullscreenElement,
        webkitfullscreenchange: document.webkitFullscreenElement,
        mozfullscreenchange: document.mozFullScreenElement,
        MSFullscreenChange: document.msFullscreenElement
      };

      _this.setState({
        fullScreenStatus: map[type] != null
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "play", function () {
      try {
        //ios9 play方法时可能不会返回promise
        _this.player.play().catch(function (e) {
          console.error(e);
        });
      } catch (e) {
        console.error(e);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "pause", function () {
      _this.player.pause();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "changStatus", function (e) {
      var paused = _this.player.paused;

      _this.setState({
        paused: paused
      });

      if (paused) {
        _this.props.onPause && _this.props.onPause(e);
      } else {
        _this.props.onPlay && _this.props.onPlay(e);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "changeTime", function (time) {
      _this.player.currentTime = time;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "toggleFullscreen", function () {
      var videoEl = _this.container;
      videoEl.requestFullScreen = videoEl.requestFullscreen || videoEl.msRequestFullscreen || videoEl.mozRequestFullScreen || videoEl.webkitRequestFullscreen;
      document.exitFullscreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
      var fullscreenElement = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

      if (fullscreenElement === videoEl) {
        document.exitFullscreen();
      } else {
        videoEl.requestFullScreen();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "replay", function () {
      if (_this.player.load) {
        //解决有些视频在chrome下,重播会直接跳onend
        _this.player.load();
      } else {
        _this.changeTime(0);
      }

      _this.play();

      _this.setState({
        currentTime: 0,
        ended: false,
        showControl: true
      });
    });

    _this.state = {
      showControl: true,
      loading: true,
      fullScreenStatus: false,
      paused: true,
      ended: false,
      duration: 0,
      currentTime: 0 // textPlugins,
      // controlPlugins,

    };
    return _this;
  }

  var _proto = VideoPlayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    /* if (this.props.blob) {
    	fetch(this.props.src)
    		.then(data => data.blob())
    		.then(blob => {
    			this.player.src = URL.createObjectURL(blob);
    		})
    		.catch(e => console.error(e))
            } */
    console.dir(this.player);
    FULLSCREEN_CHANGE_ELEMENT.forEach(function (fullscreen) {
      return document.addEventListener(fullscreen, _this2.fullscreenchange, false);
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    FULLSCREEN_CHANGE_ELEMENT.forEach(function (fullscreen) {
      return document.removeEventListener(fullscreen, _this3.fullscreenchange, false);
    });
    /* if (this.props.blob) {
    	URL.revokeObjectURL(this.player.src);
    } */
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props = this.props,
        src = _this$props.src,
        rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["src"]);

    var _this$state = this.state,
        paused = _this$state.paused,
        duration = _this$state.duration,
        currentTime = _this$state.currentTime,
        showControl = _this$state.showControl,
        loading = _this$state.loading,
        fullScreenStatus = _this$state.fullScreenStatus,
        ended = _this$state.ended;
    var controlsProps = {
      paused: paused,
      currentTime: currentTime,
      duration: duration,
      // component,
      fullScreenStatus: fullScreenStatus,
      play: this.play,
      pause: this.pause,
      changeTime: this.changeTime,
      toggleFullscreen: this.toggleFullscreen
    };
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('iot-video', 'position-relative', this.props.className),
      ref: function ref(container) {
        return _this4.container = container;
      }
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
      ref: function ref(player) {
        return _this4.player = player;
      },
      src: src,
      onDurationChange: this.onDurationChange,
      onWaiting: this.onWaiting,
      onPlay: this.changStatus,
      onPause: this.changStatus,
      onTimeUpdate: this.onTimeUpdate,
      onCanPlay: this.onCanPlay,
      onError: this.onError,
      onEnded: this.onEnded
    })), !paused || loading || ended ? null : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "play-circle-o",
      className: "play-icon",
      onClick: this.play
    }), loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "loading",
      className: "play-icon"
    }) : null, ended ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "reload",
      className: "play-icon",
      onClick: this.replay
    }) : null, !showControl ? null : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_controls_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], controlsProps));
  };

  return VideoPlayer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(VideoPlayer, "defaultProps", {
  src: null // component: div,
  // plugins: []

});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(VideoPlayer, "propTypes", {
  src: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string // component: PropTypes.func,
  // blob: PropTypes.bool,
  // plugins: PropTypes.array

});

/* harmony default export */ __webpack_exports__["default"] = (VideoPlayer);

/***/ }),

/***/ "./src/react-router/video.jsx":
/*!************************************!*\
  !*** ./src/react-router/video.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return v; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/video */ "./src/components/video/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* const screenshot = (player) => {
    const canvas = document.getElementById('canvas');
    const width = player.videoWidth;
    const height = player.videoHeight;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(player, 0, 0, width, height);
    const img = document.getElementById('img');
    const png = canvas.toDataURL();
    img.src = png;
}
const labelStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background:'rgb(75,135,255)',
    fontSize: '14px',
    borderRadius: '14px',
    padding:'3px 12px',
}
const tailorStyle = {
    position: 'absolute',
    right: '10px',
    bottom: '48px',
    width: '36px',
    cursor: 'pointer',
    background: 'rgba(255,255,255,.5)',
    borderRadius: '18px',
}
const plugins = [
    <div plugin='text' key='label' style={labelStyle}>待审核</div>,
    <img src='/tailor.svg' onClick={screenshot} plugin='control' key='screenshot' style={tailorStyle} />,
]; */
// http://mos.cmobd.com:8215/mos-download/download/play/capturefront_20180113_133232.mp4?token=c13eb1b0c7ba48978bb57df5c4f0e03a&res=123456
// http://183.230.40.66:8215/mos-download/download/play/snp_180126101900_h.mp4?token=bc321793d1214c48a087f2be27e3635a&res=656253

var v =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(v, _Component);

  function v() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = v.prototype;

  _proto.render = function render() {
    var _this = this;

    // return <VideoPlayer src='https://chimee.org/vod/1.mp4' autoPlay onPlay={() => this.p.toggleFullscreen()} ref={p => this.p = p} />
    return React.createElement(_components_video__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: "https://github.com/i5ting/how-brower-work-and-perfomace-tunning/blob/master/01-web-server.mp4?raw=true",
      onPlay: function onPlay() {
        return _this.p.toggleFullscreen();
      },
      ref: function ref(p) {
        return _this.p = p;
      }
    });
  };

  return v;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby9jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby92aWRlby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXJvdXRlci92aWRlby5qc3giXSwibmFtZXMiOlsiY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAiLCJSY1NsaWRlciIsIlNsaWRlciIsIkNvbnRyb2xzIiwidGltZSIsImZvcm1hdCIsIm51bSIsInBhcnNlSW50IiwicmVuZGVyIiwicHJvcHMiLCJwYXVzZWQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicGxheSIsInBhdXNlIiwiY2hhbmdlVGltZSIsImZ1bGxTY3JlZW5TdGF0dXMiLCJ0b2dnbGVGdWxsc2NyZWVuIiwiY29udHJvbFBsdWdpbnMiLCJzbGlkZXJQcm9wcyIsImhhbmRsZVN0eWxlIiwiYm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFja1N0eWxlIiwicmFpbFN0eWxlIiwidGltZUZvcm1hdCIsIkNvbXBvbmVudCIsIlZpZGVvUGxheWVyIiwiRlVMTFNDUkVFTl9DSEFOR0VfRUxFTUVOVCIsImUiLCJvbkR1cmF0aW9uQ2hhbmdlIiwic2V0U3RhdGUiLCJwbGF5ZXIiLCJvbkNhblBsYXkiLCJsb2FkaW5nIiwiY29uc29sZSIsImVycm9yIiwib25FcnJvciIsIm9uVGltZVVwZGF0ZSIsInN0YXRlIiwib25XYWl0aW5nIiwib25FbmRlZCIsImVuZGVkIiwic2hvd0NvbnRyb2wiLCJ0eXBlIiwibWFwIiwiZnVsbHNjcmVlbmNoYW5nZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRmdWxsc2NyZWVuY2hhbmdlIiwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pmdWxsc2NyZWVuY2hhbmdlIiwibW96RnVsbFNjcmVlbkVsZW1lbnQiLCJNU0Z1bGxzY3JlZW5DaGFuZ2UiLCJtc0Z1bGxzY3JlZW5FbGVtZW50IiwiY2F0Y2giLCJvblBhdXNlIiwib25QbGF5IiwidmlkZW9FbCIsImNvbnRhaW5lciIsInJlcXVlc3RGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImxvYWQiLCJjb21wb25lbnREaWRNb3VudCIsImRpciIsImZvckVhY2giLCJmdWxsc2NyZWVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNyYyIsInJlc3QiLCJjb250cm9sc1Byb3BzIiwiY2xhc3NOYW1lcyIsImNsYXNzTmFtZSIsImNoYW5nU3RhdHVzIiwicmVwbGF5IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwidiIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUNrQzs7QUFDbEMsSUFBTUEsdUJBQXVCLEdBQUdDLGlEQUFRLENBQUNELHVCQUF6QztBQUNBLElBQU1FLE1BQU0sR0FBR0YsdUJBQXVCLENBQUNDLGlEQUFELENBQXRDO0FBQ0E7O0lBQ01FLFE7Ozs7Ozs7Ozs7Ozs7O2dSQWFRLFVBQUNDLElBQUQsRUFBYztBQUFBLFVBQWJBLElBQWE7QUFBYkEsWUFBYSxHQUFOLENBQU07QUFBQTs7QUFDMUIsVUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsR0FBRztBQUFBLGVBQUtBLEdBQUcsR0FBRyxDQUFOLEdBQVVBLEdBQVYsU0FB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QUFqQjtBQUEwSCxZQUFNLEVBQUU7QUFBQSxlQUFNLEtBQUksQ0FBQ2dGLENBQUwsQ0FBT3ZFLGdCQUFQLEVBQU47QUFBQSxPQUFsSTtBQUFtSyxTQUFHLEVBQUUsYUFBQXVFLENBQUM7QUFBQSxlQUFJLEtBQUksQ0FBQ0EsQ0FBTCxHQUFTQSxDQUFiO0FBQUE7QUFBekssTUFBUDtBQUNBLEc7OztFQUo2QjdELCtDIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XHJcbmltcG9ydCBSY1NsaWRlciBmcm9tICdyYy1zbGlkZXInOyAvL2VzbGludC1kaXNhYmxlLWxpbmVcclxuY29uc3QgY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAgPSBSY1NsaWRlci5jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcDtcclxuY29uc3QgU2xpZGVyID0gY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAoUmNTbGlkZXIpO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tZWRpYS1oYXMtY2FwdGlvbixqc3gtYTExeS9hbHQtdGV4dCxyYWRpeCAqL1xyXG5jbGFzcyBDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0LyogICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG5cdFx0ICBwYXVzZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcblx0XHQgIGN1cnJlbnRUaW1lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcblx0XHQgIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcblx0XHQgIHBsYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0XHQgIHBhdXNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdFx0ICBjaGFuZ2VUaW1lOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdFx0ICB0b2dnbGVGdWxsc2NyZWVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdFx0ICBmdWxsU2NyZWVuU3RhdHVzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG5cdFx0ICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0XHQgIGNvbnRyb2xQbHVnaW5zOiBQcm9wVHlwZXMuYXJyYXlcclxuXHQgIH0gKi9cclxuXHR0aW1lRm9ybWF0ID0gKHRpbWUgPSAwKSA9PiB7XHJcblx0XHRjb25zdCBmb3JtYXQgPSBudW0gPT4gKG51bSA+IDkgPyBudW0gOiBgMCR7bnVtfWApO1xyXG5cdFx0cmV0dXJuIGAke2Zvcm1hdChwYXJzZUludCh0aW1lIC8gNjApKX06JHtmb3JtYXQocGFyc2VJbnQodGltZSAlIDYwKSl9YDtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRwYXVzZWQsXHJcblx0XHRcdGN1cnJlbnRUaW1lLFxyXG5cdFx0XHRkdXJhdGlvbixcclxuXHRcdFx0Ly8gY29tcG9uZW50LFxyXG5cdFx0XHRwbGF5LFxyXG5cdFx0XHRwYXVzZSxcclxuXHRcdFx0Y2hhbmdlVGltZSxcclxuXHRcdFx0ZnVsbFNjcmVlblN0YXR1cyxcclxuXHRcdFx0dG9nZ2xlRnVsbHNjcmVlbixcclxuXHRcdFx0Y29udHJvbFBsdWdpbnMsXHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IHNsaWRlclByb3BzID0ge1xyXG5cdFx0XHRoYW5kbGVTdHlsZTogW3tcclxuXHRcdFx0XHRib3JkZXI6ICdzb2xpZCAxcHggI2EyYzdmZCcsXHJcblx0XHRcdFx0d2lkdGg6IDEyLFxyXG5cdFx0XHRcdGhlaWdodDogMTIsXHJcblx0XHRcdH1dLFxyXG5cdFx0XHR0cmFja1N0eWxlOiBbe1xyXG5cdFx0XHRcdGhlaWdodDogMixcclxuXHRcdFx0fV0sXHJcblx0XHRcdHJhaWxTdHlsZToge1xyXG5cdFx0XHRcdGhlaWdodDogMixcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0XHQvLyBjb25zdCBWaWV3ID0gY29tcG9uZW50O1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbGF5LXBhdXNlXCI+XHJcblx0XHRcdFx0XHR7cGF1c2VkID8gPEljb24gdHlwZT1cImNhcmV0LXJpZ2h0XCIgb25DbGljaz17cGxheX0gLz4gOiA8SWNvbiB0eXBlPVwicGF1c2VcIiBvbkNsaWNrPXtwYXVzZX0gLz59XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXJyZW50VGltZVwiPlxyXG5cdFx0XHRcdFx0e3RoaXMudGltZUZvcm1hdChjdXJyZW50VGltZSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuXHRcdFx0XHRcdDxTbGlkZXIgbWluPXswfSBtYXg9e2R1cmF0aW9ufSB2YWx1ZT17Y3VycmVudFRpbWV9IHRpcEZvcm1hdHRlcj17dGhpcy50aW1lRm9ybWF0fSBvbkNoYW5nZT17Y2hhbmdlVGltZX0gey4uLnNsaWRlclByb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cclxuXHRcdFx0XHRcdHt0aGlzLnRpbWVGb3JtYXQoZHVyYXRpb24pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XHJcblx0XHRcdFx0XHR7ZnVsbFNjcmVlblN0YXR1cyA/IDxJY29uIHR5cGU9XCJzaHJpbmtcIiBvbkNsaWNrPXt0b2dnbGVGdWxsc2NyZWVufSAvPiA6IDxJY29uIHR5cGU9XCJhcnJvdy1zYWx0XCIgb25DbGljaz17dG9nZ2xlRnVsbHNjcmVlbn0gLz59XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xyXG4iLCJpbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi92aWRlby5qc3gnO1xyXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXgubGVzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtcclxuXHRDb21wb25lbnRcclxufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBJY29uIGZyb20gJ2FudGQvbGliL2ljb24nO1xyXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scy5qc3gnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbWVkaWEtaGFzLWNhcHRpb24sanN4LWExMXkvYWx0LXRleHQscmFkaXggKi9cclxuY29uc3QgRlVMTFNDUkVFTl9DSEFOR0VfRUxFTUVOVCA9IFtcclxuXHQnZnVsbHNjcmVlbmNoYW5nZScsXHJcblx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxyXG5cdCdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcclxuXHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcclxuXVxyXG5cclxuXHJcbmNsYXNzIFZpZGVvUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG5cdFx0c3JjOiBudWxsLFxyXG5cdFx0Ly8gY29tcG9uZW50OiBkaXYsXHJcblx0XHQvLyBwbHVnaW5zOiBbXVxyXG5cdH07XHJcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdHNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdC8vIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXHJcblx0XHQvLyBibG9iOiBQcm9wVHlwZXMuYm9vbCxcclxuXHRcdC8vIHBsdWdpbnM6IFByb3BUeXBlcy5hcnJheVxyXG5cdH07XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdC8qICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHQgY29uc3QgdGV4dFBsdWdpbnMgPSBwcm9wcy5wbHVnaW5zLmZpbHRlcihwID0+IHAucHJvcHMucGx1Z2luID09PSAndGV4dCcpO1xyXG5cdFx0IGNvbnN0IGNvbnRyb2xQbHVnaW5zID0gcHJvcHMucGx1Z2lucy5maWx0ZXIocCA9PiBwLnByb3BzLnBsdWdpbiA9PT0gJ2NvbnRyb2wnKS5tYXAocCA9PiB7XHJcblx0XHRcdCBjb25zdCBuZXdQcm9wcyA9IHt9XHJcblx0XHRcdCBmb3IgKGxldCBwcm9wIGluIHAucHJvcHMpIHtcclxuXHRcdFx0XHQgbGV0IG9iaiA9IHAucHJvcHNbcHJvcF07XHJcblx0XHRcdFx0IGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHQgbmV3UHJvcHNbcHJvcF0gPSAoZSkgPT4gcC5wcm9wc1twcm9wXShfdGhpcy5wbGF5ZXIsIGUpXHJcblx0XHRcdFx0IH0gZWxzZSB7XHJcblx0XHRcdFx0XHQgbmV3UHJvcHNbcHJvcF0gPSBwLnByb3BzW3Byb3BdXHJcblx0XHRcdFx0IH1cclxuXHRcdFx0IH1cclxuXHRcdFx0IHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQocCwgbmV3UHJvcHMpXHJcblx0XHQgfSk7ICovXHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c2hvd0NvbnRyb2w6IHRydWUsXHJcblx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdGZ1bGxTY3JlZW5TdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHRwYXVzZWQ6IHRydWUsXHJcblx0XHRcdGVuZGVkOiBmYWxzZSxcclxuXHRcdFx0ZHVyYXRpb246IDAsXHJcblx0XHRcdGN1cnJlbnRUaW1lOiAwLFxyXG5cdFx0XHQvLyB0ZXh0UGx1Z2lucyxcclxuXHRcdFx0Ly8gY29udHJvbFBsdWdpbnMsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHQvKiBpZiAodGhpcy5wcm9wcy5ibG9iKSB7XHJcblx0XHRcdGZldGNoKHRoaXMucHJvcHMuc3JjKVxyXG5cdFx0XHRcdC50aGVuKGRhdGEgPT4gZGF0YS5ibG9iKCkpXHJcblx0XHRcdFx0LnRoZW4oYmxvYiA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcclxuXHJcbiAgICAgICAgfSAqL1xyXG5cdFx0Y29uc29sZS5kaXIodGhpcy5wbGF5ZXIpXHJcblx0XHRGVUxMU0NSRUVOX0NIQU5HRV9FTEVNRU5ULmZvckVhY2goZnVsbHNjcmVlbiA9PiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGZ1bGxzY3JlZW4sIHRoaXMuZnVsbHNjcmVlbmNoYW5nZSwgZmFsc2UpKVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRGVUxMU0NSRUVOX0NIQU5HRV9FTEVNRU5ULmZvckVhY2goZnVsbHNjcmVlbiA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGZ1bGxzY3JlZW4sIHRoaXMuZnVsbHNjcmVlbmNoYW5nZSwgZmFsc2UpKTtcclxuXHRcdC8qIGlmICh0aGlzLnByb3BzLmJsb2IpIHtcclxuXHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnBsYXllci5zcmMpO1xyXG5cdFx0fSAqL1xyXG5cdH1cclxuXHJcblx0b25EdXJhdGlvbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLm9uRHVyYXRpb25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkR1cmF0aW9uQ2hhbmdlKGUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGR1cmF0aW9uOiBwYXJzZUludCh0aGlzLnBsYXllci5kdXJhdGlvbiksXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uQ2FuUGxheSA9IChlKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2FuUGxheSAmJiB0aGlzLnByb3BzLm9uQ2FuUGxheShlKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25FcnJvciA9IChlKSA9PiB7XHJcblx0XHRjb25zb2xlLmVycm9yKHRoaXMucGxheWVyLmVycm9yKTtcclxuXHRcdHRoaXMucHJvcHMub25FcnJvciAmJiB0aGlzLnByb3BzLm9uRXJyb3IoZSk7XHJcblx0fVxyXG5cclxuXHRvblRpbWVVcGRhdGUgPSAoZSkgPT4ge1xyXG5cdFx0dGhpcy5wcm9wcy5vblRpbWVVcGRhdGUgJiYgdGhpcy5wcm9wcy5vblRpbWVVcGRhdGUoZSk7XHJcblx0XHRpZiAodGhpcy5zdGF0ZS5jdXJyZW50VGltZSA9PT0gMCAmJiB0aGlzLnN0YXRlLmR1cmF0aW9uID09PSAwKSByZXR1cm47XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0Y3VycmVudFRpbWU6IHBhcnNlSW50KHRoaXMucGxheWVyLmN1cnJlbnRUaW1lKSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdG9uV2FpdGluZyA9IChlKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLm9uV2FpdGluZyAmJiB0aGlzLnByb3BzLm9uV2FpdGluZyhlKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbkVuZGVkID0gKGUpID0+IHtcclxuXHRcdHRoaXMucHJvcHMub25FbmRlZCAmJiB0aGlzLnByb3BzLm9uRW5kZWQoZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0ZW5kZWQ6IHRydWUsXHJcblx0XHRcdHNob3dDb250cm9sOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVsbHNjcmVlbmNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRjb25zdCB0eXBlID0gZS50eXBlO1xyXG5cdFx0Y29uc3QgbWFwID0ge1xyXG5cdFx0XHRmdWxsc2NyZWVuY2hhbmdlOiBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCxcclxuXHRcdFx0d2Via2l0ZnVsbHNjcmVlbmNoYW5nZTogZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQsXHJcblx0XHRcdG1vemZ1bGxzY3JlZW5jaGFuZ2U6IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50LFxyXG5cdFx0XHRNU0Z1bGxzY3JlZW5DaGFuZ2U6IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGZ1bGxTY3JlZW5TdGF0dXM6IG1hcFt0eXBlXSAhPSBudWxsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHBsYXkgPSAoKSA9PiB7XHJcblx0XHR0cnkgey8vaW9zOSBwbGF55pa55rOV5pe25Y+v6IO95LiN5Lya6L+U5ZuecHJvbWlzZVxyXG5cdFx0XHR0aGlzLnBsYXllci5wbGF5KCkuY2F0Y2goZSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwYXVzZSA9ICgpID0+IHtcclxuXHRcdHRoaXMucGxheWVyLnBhdXNlKCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ1N0YXR1cyA9IChlKSA9PiB7XHJcblx0XHRjb25zdCBwYXVzZWQgPSB0aGlzLnBsYXllci5wYXVzZWQ7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0cGF1c2VkXHJcblx0XHR9KTtcclxuXHRcdGlmIChwYXVzZWQpIHtcclxuXHRcdFx0dGhpcy5wcm9wcy5vblBhdXNlICYmIHRoaXMucHJvcHMub25QYXVzZShlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvcHMub25QbGF5ICYmIHRoaXMucHJvcHMub25QbGF5KGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2hhbmdlVGltZSA9ICh0aW1lKSA9PiB7XHJcblx0XHR0aGlzLnBsYXllci5jdXJyZW50VGltZSA9IHRpbWU7XHJcblx0fVxyXG5cclxuXHR0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgdmlkZW9FbCA9IHRoaXMuY29udGFpbmVyO1xyXG5cdFx0dmlkZW9FbC5yZXF1ZXN0RnVsbFNjcmVlbiA9XHJcblx0XHRcdHZpZGVvRWwucmVxdWVzdEZ1bGxzY3JlZW4gfHxcclxuXHRcdFx0dmlkZW9FbC5tc1JlcXVlc3RGdWxsc2NyZWVuIHx8XHJcblx0XHRcdHZpZGVvRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHxcclxuXHRcdFx0dmlkZW9FbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbjtcclxuXHRcdGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuID1cclxuXHRcdFx0ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4gfHxcclxuXHRcdFx0ZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbiB8fFxyXG5cdFx0XHRkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuIHx8XHJcblx0XHRcdGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuO1xyXG5cdFx0Y29uc3QgZnVsbHNjcmVlbkVsZW1lbnQgPVxyXG5cdFx0XHRkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxyXG5cdFx0XHRkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50IHx8XHJcblx0XHRcdGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XHJcblx0XHRcdGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50O1xyXG5cdFx0aWYgKGZ1bGxzY3JlZW5FbGVtZW50ID09PSB2aWRlb0VsKSB7XHJcblx0XHRcdGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2aWRlb0VsLnJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcbiAgICAvKiByZXNldCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhdXNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAqL1xyXG5cclxuXHRyZXBsYXkgPSAoKSA9PiB7XHJcblx0XHRpZiAodGhpcy5wbGF5ZXIubG9hZCkgey8v6Kej5Yaz5pyJ5Lqb6KeG6aKR5ZyoY2hyb21l5LiLLOmHjeaSreS8muebtOaOpei3s29uZW5kXHJcblx0XHRcdHRoaXMucGxheWVyLmxvYWQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2hhbmdlVGltZSgwKTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGxheSgpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGN1cnJlbnRUaW1lOiAwLFxyXG5cdFx0XHRlbmRlZDogZmFsc2UsXHJcblx0XHRcdHNob3dDb250cm9sOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHNyYyxcclxuXHRcdFx0Ly8gcGx1Z2lucyxcclxuXHRcdFx0Ly8gY29tcG9uZW50LFxyXG5cdFx0XHQvLyBibG9iLFxyXG5cdFx0XHQuLi5yZXN0XHJcblx0XHR9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0cGF1c2VkLFxyXG5cdFx0XHRkdXJhdGlvbixcclxuXHRcdFx0Y3VycmVudFRpbWUsXHJcblx0XHRcdHNob3dDb250cm9sLFxyXG5cdFx0XHRsb2FkaW5nLFxyXG5cdFx0XHRmdWxsU2NyZWVuU3RhdHVzLFxyXG5cdFx0XHQvLyB0ZXh0UGx1Z2lucyxcclxuXHRcdFx0ZW5kZWQsXHJcblx0XHRcdC8vIGNvbnRyb2xQbHVnaW5zLFxyXG5cdFx0fSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cclxuXHRcdGNvbnN0IGNvbnRyb2xzUHJvcHMgPSB7XHJcblx0XHRcdHBhdXNlZCxcclxuXHRcdFx0Y3VycmVudFRpbWUsXHJcblx0XHRcdGR1cmF0aW9uLFxyXG5cdFx0XHQvLyBjb21wb25lbnQsXHJcblx0XHRcdGZ1bGxTY3JlZW5TdGF0dXMsXHJcblx0XHRcdHBsYXk6IHRoaXMucGxheSxcclxuXHRcdFx0cGF1c2U6IHRoaXMucGF1c2UsXHJcblx0XHRcdGNoYW5nZVRpbWU6IHRoaXMuY2hhbmdlVGltZSxcclxuXHRcdFx0dG9nZ2xlRnVsbHNjcmVlbjogdGhpcy50b2dnbGVGdWxsc2NyZWVuLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcblx0XHRcdFx0XHQnaW90LXZpZGVvJyxcclxuXHRcdFx0XHRcdCdwb3NpdGlvbi1yZWxhdGl2ZScsXHJcblx0XHRcdFx0XHR0aGlzLnByb3BzLmNsYXNzTmFtZVxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0cmVmPXtjb250YWluZXIgPT4gdGhpcy5jb250YWluZXIgPSBjb250YWluZXJ9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8dmlkZW9cclxuXHRcdFx0XHRcdHsuLi5yZXN0fVxyXG5cdFx0XHRcdFx0cmVmPXtwbGF5ZXIgPT4gdGhpcy5wbGF5ZXIgPSBwbGF5ZXJ9XHJcblx0XHRcdFx0XHRzcmM9e3NyY31cclxuXHRcdFx0XHRcdG9uRHVyYXRpb25DaGFuZ2U9e3RoaXMub25EdXJhdGlvbkNoYW5nZX1cclxuXHRcdFx0XHRcdG9uV2FpdGluZz17dGhpcy5vbldhaXRpbmd9XHJcblx0XHRcdFx0XHRvblBsYXk9e3RoaXMuY2hhbmdTdGF0dXN9XHJcblx0XHRcdFx0XHRvblBhdXNlPXt0aGlzLmNoYW5nU3RhdHVzfVxyXG5cdFx0XHRcdFx0b25UaW1lVXBkYXRlPXt0aGlzLm9uVGltZVVwZGF0ZX1cclxuXHRcdFx0XHRcdG9uQ2FuUGxheT17dGhpcy5vbkNhblBsYXl9XHJcblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLm9uRXJyb3J9XHJcblx0XHRcdFx0XHRvbkVuZGVkPXt0aGlzLm9uRW5kZWR9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IXBhdXNlZCB8fCBsb2FkaW5nIHx8IGVuZGVkID8gbnVsbCA6IDxJY29uIHR5cGU9XCJwbGF5LWNpcmNsZS1vXCIgY2xhc3NOYW1lPVwicGxheS1pY29uXCIgb25DbGljaz17dGhpcy5wbGF5fSAvPn1cclxuXHRcdFx0XHR7bG9hZGluZyA/IDxJY29uIHR5cGU9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPVwicGxheS1pY29uXCIgLz4gOiBudWxsfVxyXG5cdFx0XHRcdHtlbmRlZCA/IDxJY29uIHR5cGU9XCJyZWxvYWRcIiBjbGFzc05hbWU9XCJwbGF5LWljb25cIiBvbkNsaWNrPXt0aGlzLnJlcGxheX0gLz4gOiBudWxsfVxyXG5cdFx0XHRcdHshc2hvd0NvbnRyb2wgPyBudWxsIDogPENvbnRyb2xzIHsuLi5jb250cm9sc1Byb3BzfSAvPn1cclxuXHRcdFx0XHR7LyogIDxkaXYgY2xhc3NOYW1lPSdwbHVnaW5zJz5cclxuICAgICAgICAgICAgICAgICAgICB7dGV4dFBsdWdpbnN9XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xQbHVnaW5zfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xyXG4iLCJpbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy92aWRlbyc7XHJcbmltcG9ydCB7XHJcblx0Q29tcG9uZW50XHJcbn0gZnJvbSAncmVhY3QnO1xyXG4vKiBjb25zdCBzY3JlZW5zaG90ID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3Qgd2lkdGggPSBwbGF5ZXIudmlkZW9XaWR0aDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci52aWRlb0hlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgY3R4LmRyYXdJbWFnZShwbGF5ZXIsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZycpO1xyXG4gICAgY29uc3QgcG5nID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgaW1nLnNyYyA9IHBuZztcclxufVxyXG5jb25zdCBsYWJlbFN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcxMHB4JyxcclxuICAgIGxlZnQ6ICcxMHB4JyxcclxuICAgIGJhY2tncm91bmQ6J3JnYig3NSwxMzUsMjU1KScsXHJcbiAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTRweCcsXHJcbiAgICBwYWRkaW5nOiczcHggMTJweCcsXHJcbn1cclxuY29uc3QgdGFpbG9yU3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiAnMTBweCcsXHJcbiAgICBib3R0b206ICc0OHB4JyxcclxuICAgIHdpZHRoOiAnMzZweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxOHB4JyxcclxufVxyXG5jb25zdCBwbHVnaW5zID0gW1xyXG4gICAgPGRpdiBwbHVnaW49J3RleHQnIGtleT0nbGFiZWwnIHN0eWxlPXtsYWJlbFN0eWxlfT7lvoXlrqHmoLg8L2Rpdj4sXHJcbiAgICA8aW1nIHNyYz0nL3RhaWxvci5zdmcnIG9uQ2xpY2s9e3NjcmVlbnNob3R9IHBsdWdpbj0nY29udHJvbCcga2V5PSdzY3JlZW5zaG90JyBzdHlsZT17dGFpbG9yU3R5bGV9IC8+LFxyXG5dOyAqL1xyXG4vLyBodHRwOi8vbW9zLmNtb2JkLmNvbTo4MjE1L21vcy1kb3dubG9hZC9kb3dubG9hZC9wbGF5L2NhcHR1cmVmcm9udF8yMDE4MDExM18xMzMyMzIubXA0P3Rva2VuPWMxM2ViMWIwYzdiYTQ4OTc4YmI1N2RmNWM0ZjBlMDNhJnJlcz0xMjM0NTZcclxuLy8gaHR0cDovLzE4My4yMzAuNDAuNjY6ODIxNS9tb3MtZG93bmxvYWQvZG93bmxvYWQvcGxheS9zbnBfMTgwMTI2MTAxOTAwX2gubXA0P3Rva2VuPWJjMzIxNzkzZDEyMTRjNDhhMDg3ZjJiZTI3ZTM2MzVhJnJlcz02NTYyNTNcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHQvLyByZXR1cm4gPFZpZGVvUGxheWVyIHNyYz0naHR0cHM6Ly9jaGltZWUub3JnL3ZvZC8xLm1wNCcgYXV0b1BsYXkgb25QbGF5PXsoKSA9PiB0aGlzLnAudG9nZ2xlRnVsbHNjcmVlbigpfSByZWY9e3AgPT4gdGhpcy5wID0gcH0gLz5cclxuXHRcdHJldHVybiA8VmlkZW9QbGF5ZXIgc3JjPSdodHRwczovL2dpdGh1Yi5jb20vaTV0aW5nL2hvdy1icm93ZXItd29yay1hbmQtcGVyZm9tYWNlLXR1bm5pbmcvYmxvYi9tYXN0ZXIvMDEtd2ViLXNlcnZlci5tcDQ/cmF3PXRydWUnIG9uUGxheT17KCkgPT4gdGhpcy5wLnRvZ2dsZUZ1bGxzY3JlZW4oKX0gcmVmPXtwID0+IHRoaXMucCA9IHB9IC8+XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=