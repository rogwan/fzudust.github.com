(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby9jb250cm9scy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vc3R5bGUvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWRlby92aWRlby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXJvdXRlci92aWRlby5qc3giXSwibmFtZXMiOlsiY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAiLCJSY1NsaWRlciIsIlNsaWRlciIsIkNvbnRyb2xzIiwidGltZSIsImZvcm1hdCIsIm51bSIsInBhcnNlSW50IiwicmVuZGVyIiwicHJvcHMiLCJwYXVzZWQiLCJjdXJyZW50VGltZSIsImR1cmF0aW9uIiwicGxheSIsInBhdXNlIiwiY2hhbmdlVGltZSIsImZ1bGxTY3JlZW5TdGF0dXMiLCJ0b2dnbGVGdWxsc2NyZWVuIiwiY29udHJvbFBsdWdpbnMiLCJzbGlkZXJQcm9wcyIsImhhbmRsZVN0eWxlIiwiYm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFja1N0eWxlIiwicmFpbFN0eWxlIiwidGltZUZvcm1hdCIsIkNvbXBvbmVudCIsIlZpZGVvUGxheWVyIiwiRlVMTFNDUkVFTl9DSEFOR0VfRUxFTUVOVCIsImUiLCJvbkR1cmF0aW9uQ2hhbmdlIiwic2V0U3RhdGUiLCJwbGF5ZXIiLCJvbkNhblBsYXkiLCJsb2FkaW5nIiwiY29uc29sZSIsImVycm9yIiwib25FcnJvciIsIm9uVGltZVVwZGF0ZSIsInN0YXRlIiwib25XYWl0aW5nIiwib25FbmRlZCIsImVuZGVkIiwic2hvd0NvbnRyb2wiLCJ0eXBlIiwibWFwIiwiZnVsbHNjcmVlbmNoYW5nZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRmdWxsc2NyZWVuY2hhbmdlIiwid2Via2l0RnVsbHNjcmVlbkVsZW1lbnQiLCJtb3pmdWxsc2NyZWVuY2hhbmdlIiwibW96RnVsbFNjcmVlbkVsZW1lbnQiLCJNU0Z1bGxzY3JlZW5DaGFuZ2UiLCJtc0Z1bGxzY3JlZW5FbGVtZW50IiwiY2F0Y2giLCJvblBhdXNlIiwib25QbGF5IiwidmlkZW9FbCIsImNvbnRhaW5lciIsInJlcXVlc3RGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwibXNFeGl0RnVsbHNjcmVlbiIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImxvYWQiLCJjb21wb25lbnREaWRNb3VudCIsImRpciIsImZvckVhY2giLCJmdWxsc2NyZWVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNyYyIsInJlc3QiLCJjb250cm9sc1Byb3BzIiwiY2xhc3NOYW1lcyIsImNsYXNzTmFtZSIsImNoYW5nU3RhdHVzIiwicmVwbGF5IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwidiIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUNrQzs7QUFDbEMsSUFBTUEsdUJBQXVCLEdBQUdDLGlEQUFRLENBQUNELHVCQUF6QztBQUNBLElBQU1FLE1BQU0sR0FBR0YsdUJBQXVCLENBQUNDLGlEQUFELENBQXRDO0FBQ0E7O0lBQ01FLFE7Ozs7Ozs7Ozs7Ozs7O2dSQWFRLFVBQUNDLElBQUQsRUFBYztBQUFBLFVBQWJBLElBQWE7QUFBYkEsWUFBYSxHQUFOLENBQU07QUFBQTs7QUFDMUIsVUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsR0FBRztBQUFBLGVBQUtBLEdBQUcsR0FBRyxDQUFOLEdBQVVBLEdBQVYsU0FB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QUFqQjtBQUEwSCxZQUFNLEVBQUU7QUFBQSxlQUFNLEtBQUksQ0FBQ2dGLENBQUwsQ0FBT3ZFLGdCQUFQLEVBQU47QUFBQSxPQUFsSTtBQUFtSyxTQUFHLEVBQUUsYUFBQXVFLENBQUM7QUFBQSxlQUFJLEtBQUksQ0FBQ0EsQ0FBTCxHQUFTQSxDQUFiO0FBQUE7QUFBekssTUFBUDtBQUNBLEc7OztFQUo2QjdELCtDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdhbnRkL2xpYi9pY29uJztcclxuaW1wb3J0IFJjU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7IC8vZXNsaW50LWRpc2FibGUtbGluZVxyXG5jb25zdCBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcCA9IFJjU2xpZGVyLmNyZWF0ZVNsaWRlcldpdGhUb29sdGlwO1xyXG5jb25zdCBTbGlkZXIgPSBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcChSY1NsaWRlcik7XHJcbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L21lZGlhLWhhcy1jYXB0aW9uLGpzeC1hMTF5L2FsdC10ZXh0LHJhZGl4ICovXHJcbmNsYXNzIENvbnRyb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHQvKiAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcblx0XHQgIHBhdXNlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuXHRcdCAgY3VycmVudFRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuXHRcdCAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuXHRcdCAgcGxheTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRcdCAgcGF1c2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0XHQgIGNoYW5nZVRpbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0XHQgIHRvZ2dsZUZ1bGxzY3JlZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0XHQgIGZ1bGxTY3JlZW5TdGF0dXM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcblx0XHQgIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRcdCAgY29udHJvbFBsdWdpbnM6IFByb3BUeXBlcy5hcnJheVxyXG5cdCAgfSAqL1xyXG5cdHRpbWVGb3JtYXQgPSAodGltZSA9IDApID0+IHtcclxuXHRcdGNvbnN0IGZvcm1hdCA9IG51bSA9PiAobnVtID4gOSA/IG51bSA6IGAwJHtudW19YCk7XHJcblx0XHRyZXR1cm4gYCR7Zm9ybWF0KHBhcnNlSW50KHRpbWUgLyA2MCkpfToke2Zvcm1hdChwYXJzZUludCh0aW1lICUgNjApKX1gO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHBhdXNlZCxcclxuXHRcdFx0Y3VycmVudFRpbWUsXHJcblx0XHRcdGR1cmF0aW9uLFxyXG5cdFx0XHQvLyBjb21wb25lbnQsXHJcblx0XHRcdHBsYXksXHJcblx0XHRcdHBhdXNlLFxyXG5cdFx0XHRjaGFuZ2VUaW1lLFxyXG5cdFx0XHRmdWxsU2NyZWVuU3RhdHVzLFxyXG5cdFx0XHR0b2dnbGVGdWxsc2NyZWVuLFxyXG5cdFx0XHRjb250cm9sUGx1Z2lucyxcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3Qgc2xpZGVyUHJvcHMgPSB7XHJcblx0XHRcdGhhbmRsZVN0eWxlOiBbe1xyXG5cdFx0XHRcdGJvcmRlcjogJ3NvbGlkIDFweCAjYTJjN2ZkJyxcclxuXHRcdFx0XHR3aWR0aDogMTIsXHJcblx0XHRcdFx0aGVpZ2h0OiAxMixcclxuXHRcdFx0fV0sXHJcblx0XHRcdHRyYWNrU3R5bGU6IFt7XHJcblx0XHRcdFx0aGVpZ2h0OiAyLFxyXG5cdFx0XHR9XSxcclxuXHRcdFx0cmFpbFN0eWxlOiB7XHJcblx0XHRcdFx0aGVpZ2h0OiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHRcdC8vIGNvbnN0IFZpZXcgPSBjb21wb25lbnQ7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsYXktcGF1c2VcIj5cclxuXHRcdFx0XHRcdHtwYXVzZWQgPyA8SWNvbiB0eXBlPVwiY2FyZXQtcmlnaHRcIiBvbkNsaWNrPXtwbGF5fSAvPiA6IDxJY29uIHR5cGU9XCJwYXVzZVwiIG9uQ2xpY2s9e3BhdXNlfSAvPn1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnRUaW1lXCI+XHJcblx0XHRcdFx0XHR7dGhpcy50aW1lRm9ybWF0KGN1cnJlbnRUaW1lKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG5cdFx0XHRcdFx0PFNsaWRlciBtaW49ezB9IG1heD17ZHVyYXRpb259IHZhbHVlPXtjdXJyZW50VGltZX0gdGlwRm9ybWF0dGVyPXt0aGlzLnRpbWVGb3JtYXR9IG9uQ2hhbmdlPXtjaGFuZ2VUaW1lfSB7Li4uc2xpZGVyUHJvcHN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxyXG5cdFx0XHRcdFx0e3RoaXMudGltZUZvcm1hdChkdXJhdGlvbil9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cclxuXHRcdFx0XHRcdHtmdWxsU2NyZWVuU3RhdHVzID8gPEljb24gdHlwZT1cInNocmlua1wiIG9uQ2xpY2s9e3RvZ2dsZUZ1bGxzY3JlZW59IC8+IDogPEljb24gdHlwZT1cImFycm93LXNhbHRcIiBvbkNsaWNrPXt0b2dnbGVGdWxsc2NyZWVufSAvPn1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7XHJcbiIsImltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL3ZpZGVvLmpzeCc7XHJcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5sZXNzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge1xyXG5cdENvbXBvbmVudFxyXG59IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEljb24gZnJvbSAnYW50ZC9saWIvaWNvbic7XHJcbmltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzLmpzeCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9tZWRpYS1oYXMtY2FwdGlvbixqc3gtYTExeS9hbHQtdGV4dCxyYWRpeCAqL1xyXG5jb25zdCBGVUxMU0NSRUVOX0NIQU5HRV9FTEVNRU5UID0gW1xyXG5cdCdmdWxsc2NyZWVuY2hhbmdlJyxcclxuXHQnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXHJcblx0J21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxyXG5cdCdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxyXG5dXHJcblxyXG5cclxuY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcblx0XHRzcmM6IG51bGwsXHJcblx0XHQvLyBjb21wb25lbnQ6IGRpdixcclxuXHRcdC8vIHBsdWdpbnM6IFtdXHJcblx0fTtcclxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG5cdFx0c3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Ly8gY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuXHRcdC8vIGJsb2I6IFByb3BUeXBlcy5ib29sLFxyXG5cdFx0Ly8gcGx1Z2luczogUHJvcFR5cGVzLmFycmF5XHJcblx0fTtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0LyogIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdCBjb25zdCB0ZXh0UGx1Z2lucyA9IHByb3BzLnBsdWdpbnMuZmlsdGVyKHAgPT4gcC5wcm9wcy5wbHVnaW4gPT09ICd0ZXh0Jyk7XHJcblx0XHQgY29uc3QgY29udHJvbFBsdWdpbnMgPSBwcm9wcy5wbHVnaW5zLmZpbHRlcihwID0+IHAucHJvcHMucGx1Z2luID09PSAnY29udHJvbCcpLm1hcChwID0+IHtcclxuXHRcdFx0IGNvbnN0IG5ld1Byb3BzID0ge31cclxuXHRcdFx0IGZvciAobGV0IHByb3AgaW4gcC5wcm9wcykge1xyXG5cdFx0XHRcdCBsZXQgb2JqID0gcC5wcm9wc1twcm9wXTtcclxuXHRcdFx0XHQgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdCBuZXdQcm9wc1twcm9wXSA9IChlKSA9PiBwLnByb3BzW3Byb3BdKF90aGlzLnBsYXllciwgZSlcclxuXHRcdFx0XHQgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCBuZXdQcm9wc1twcm9wXSA9IHAucHJvcHNbcHJvcF1cclxuXHRcdFx0XHQgfVxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChwLCBuZXdQcm9wcylcclxuXHRcdCB9KTsgKi9cclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaG93Q29udHJvbDogdHJ1ZSxcclxuXHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0ZnVsbFNjcmVlblN0YXR1czogZmFsc2UsXHJcblx0XHRcdHBhdXNlZDogdHJ1ZSxcclxuXHRcdFx0ZW5kZWQ6IGZhbHNlLFxyXG5cdFx0XHRkdXJhdGlvbjogMCxcclxuXHRcdFx0Y3VycmVudFRpbWU6IDAsXHJcblx0XHRcdC8vIHRleHRQbHVnaW5zLFxyXG5cdFx0XHQvLyBjb250cm9sUGx1Z2lucyxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdC8qIGlmICh0aGlzLnByb3BzLmJsb2IpIHtcclxuXHRcdFx0ZmV0Y2godGhpcy5wcm9wcy5zcmMpXHJcblx0XHRcdFx0LnRoZW4oZGF0YSA9PiBkYXRhLmJsb2IoKSlcclxuXHRcdFx0XHQudGhlbihibG9iID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKVxyXG5cclxuICAgICAgICB9ICovXHJcblx0XHRjb25zb2xlLmRpcih0aGlzLnBsYXllcilcclxuXHRcdEZVTExTQ1JFRU5fQ0hBTkdFX0VMRU1FTlQuZm9yRWFjaChmdWxsc2NyZWVuID0+IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZnVsbHNjcmVlbiwgdGhpcy5mdWxsc2NyZWVuY2hhbmdlLCBmYWxzZSkpXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdEZVTExTQ1JFRU5fQ0hBTkdFX0VMRU1FTlQuZm9yRWFjaChmdWxsc2NyZWVuID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZnVsbHNjcmVlbiwgdGhpcy5mdWxsc2NyZWVuY2hhbmdlLCBmYWxzZSkpO1xyXG5cdFx0LyogaWYgKHRoaXMucHJvcHMuYmxvYikge1xyXG5cdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMucGxheWVyLnNyYyk7XHJcblx0XHR9ICovXHJcblx0fVxyXG5cclxuXHRvbkR1cmF0aW9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdHRoaXMucHJvcHMub25EdXJhdGlvbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRHVyYXRpb25DaGFuZ2UoZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0ZHVyYXRpb246IHBhcnNlSW50KHRoaXMucGxheWVyLmR1cmF0aW9uKSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25DYW5QbGF5ID0gKGUpID0+IHtcclxuXHRcdHRoaXMucHJvcHMub25DYW5QbGF5ICYmIHRoaXMucHJvcHMub25DYW5QbGF5KGUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbkVycm9yID0gKGUpID0+IHtcclxuXHRcdGNvbnNvbGUuZXJyb3IodGhpcy5wbGF5ZXIuZXJyb3IpO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkVycm9yICYmIHRoaXMucHJvcHMub25FcnJvcihlKTtcclxuXHR9XHJcblxyXG5cdG9uVGltZVVwZGF0ZSA9IChlKSA9PiB7XHJcblx0XHR0aGlzLnByb3BzLm9uVGltZVVwZGF0ZSAmJiB0aGlzLnByb3BzLm9uVGltZVVwZGF0ZShlKTtcclxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRUaW1lID09PSAwICYmIHRoaXMuc3RhdGUuZHVyYXRpb24gPT09IDApIHJldHVybjtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRjdXJyZW50VGltZTogcGFyc2VJbnQodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUpLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0b25XYWl0aW5nID0gKGUpID0+IHtcclxuXHRcdHRoaXMucHJvcHMub25XYWl0aW5nICYmIHRoaXMucHJvcHMub25XYWl0aW5nKGUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uRW5kZWQgPSAoZSkgPT4ge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkVuZGVkICYmIHRoaXMucHJvcHMub25FbmRlZChlKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRlbmRlZDogdHJ1ZSxcclxuXHRcdFx0c2hvd0NvbnRyb2w6IGZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdWxsc2NyZWVuY2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IHR5cGUgPSBlLnR5cGU7XHJcblx0XHRjb25zdCBtYXAgPSB7XHJcblx0XHRcdGZ1bGxzY3JlZW5jaGFuZ2U6IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50LFxyXG5cdFx0XHR3ZWJraXRmdWxsc2NyZWVuY2hhbmdlOiBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCxcclxuXHRcdFx0bW96ZnVsbHNjcmVlbmNoYW5nZTogZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQsXHJcblx0XHRcdE1TRnVsbHNjcmVlbkNoYW5nZTogZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCxcclxuXHRcdH07XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0ZnVsbFNjcmVlblN0YXR1czogbWFwW3R5cGVdICE9IG51bGxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cGxheSA9ICgpID0+IHtcclxuXHRcdHRyeSB7Ly9pb3M5IHBsYXnmlrnms5Xml7blj6/og73kuI3kvJrov5Tlm55wcm9taXNlXHJcblx0XHRcdHRoaXMucGxheWVyLnBsYXkoKS5jYXRjaChlID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHBhdXNlID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5wbGF5ZXIucGF1c2UoKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nU3RhdHVzID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IHBhdXNlZCA9IHRoaXMucGxheWVyLnBhdXNlZDtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRwYXVzZWRcclxuXHRcdH0pO1xyXG5cdFx0aWYgKHBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLnByb3BzLm9uUGF1c2UgJiYgdGhpcy5wcm9wcy5vblBhdXNlKGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wcm9wcy5vblBsYXkgJiYgdGhpcy5wcm9wcy5vblBsYXkoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VUaW1lID0gKHRpbWUpID0+IHtcclxuXHRcdHRoaXMucGxheWVyLmN1cnJlbnRUaW1lID0gdGltZTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUZ1bGxzY3JlZW4gPSAoKSA9PiB7XHJcblx0XHRjb25zdCB2aWRlb0VsID0gdGhpcy5jb250YWluZXI7XHJcblx0XHR2aWRlb0VsLnJlcXVlc3RGdWxsU2NyZWVuID1cclxuXHRcdFx0dmlkZW9FbC5yZXF1ZXN0RnVsbHNjcmVlbiB8fFxyXG5cdFx0XHR2aWRlb0VsLm1zUmVxdWVzdEZ1bGxzY3JlZW4gfHxcclxuXHRcdFx0dmlkZW9FbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fFxyXG5cdFx0XHR2aWRlb0VsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuO1xyXG5cdFx0ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4gPVxyXG5cdFx0XHRkb2N1bWVudC5leGl0RnVsbHNjcmVlbiB8fFxyXG5cdFx0XHRkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuIHx8XHJcblx0XHRcdGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4gfHxcclxuXHRcdFx0ZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW47XHJcblx0XHRjb25zdCBmdWxsc2NyZWVuRWxlbWVudCA9XHJcblx0XHRcdGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8XHJcblx0XHRcdGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgfHxcclxuXHRcdFx0ZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcclxuXHRcdFx0ZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ7XHJcblx0XHRpZiAoZnVsbHNjcmVlbkVsZW1lbnQgPT09IHZpZGVvRWwpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZpZGVvRWwucmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuICAgIC8qIHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcGF1c2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgY3VycmVudFRpbWU6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICovXHJcblxyXG5cdHJlcGxheSA9ICgpID0+IHtcclxuXHRcdGlmICh0aGlzLnBsYXllci5sb2FkKSB7Ly/op6PlhrPmnInkupvop4bpopHlnKhjaHJvbWXkuIss6YeN5pKt5Lya55u05o6l6Lezb25lbmRcclxuXHRcdFx0dGhpcy5wbGF5ZXIubG9hZCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jaGFuZ2VUaW1lKDApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wbGF5KCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0Y3VycmVudFRpbWU6IDAsXHJcblx0XHRcdGVuZGVkOiBmYWxzZSxcclxuXHRcdFx0c2hvd0NvbnRyb2w6IHRydWUsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0c3JjLFxyXG5cdFx0XHQvLyBwbHVnaW5zLFxyXG5cdFx0XHQvLyBjb21wb25lbnQsXHJcblx0XHRcdC8vIGJsb2IsXHJcblx0XHRcdC4uLnJlc3RcclxuXHRcdH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRwYXVzZWQsXHJcblx0XHRcdGR1cmF0aW9uLFxyXG5cdFx0XHRjdXJyZW50VGltZSxcclxuXHRcdFx0c2hvd0NvbnRyb2wsXHJcblx0XHRcdGxvYWRpbmcsXHJcblx0XHRcdGZ1bGxTY3JlZW5TdGF0dXMsXHJcblx0XHRcdC8vIHRleHRQbHVnaW5zLFxyXG5cdFx0XHRlbmRlZCxcclxuXHRcdFx0Ly8gY29udHJvbFBsdWdpbnMsXHJcblx0XHR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblxyXG5cdFx0Y29uc3QgY29udHJvbHNQcm9wcyA9IHtcclxuXHRcdFx0cGF1c2VkLFxyXG5cdFx0XHRjdXJyZW50VGltZSxcclxuXHRcdFx0ZHVyYXRpb24sXHJcblx0XHRcdC8vIGNvbXBvbmVudCxcclxuXHRcdFx0ZnVsbFNjcmVlblN0YXR1cyxcclxuXHRcdFx0cGxheTogdGhpcy5wbGF5LFxyXG5cdFx0XHRwYXVzZTogdGhpcy5wYXVzZSxcclxuXHRcdFx0Y2hhbmdlVGltZTogdGhpcy5jaGFuZ2VUaW1lLFxyXG5cdFx0XHR0b2dnbGVGdWxsc2NyZWVuOiB0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuXHRcdFx0XHRcdCdpb3QtdmlkZW8nLFxyXG5cdFx0XHRcdFx0J3Bvc2l0aW9uLXJlbGF0aXZlJyxcclxuXHRcdFx0XHRcdHRoaXMucHJvcHMuY2xhc3NOYW1lXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHRyZWY9e2NvbnRhaW5lciA9PiB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcn1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx2aWRlb1xyXG5cdFx0XHRcdFx0ey4uLnJlc3R9XHJcblx0XHRcdFx0XHRyZWY9e3BsYXllciA9PiB0aGlzLnBsYXllciA9IHBsYXllcn1cclxuXHRcdFx0XHRcdHNyYz17c3JjfVxyXG5cdFx0XHRcdFx0b25EdXJhdGlvbkNoYW5nZT17dGhpcy5vbkR1cmF0aW9uQ2hhbmdlfVxyXG5cdFx0XHRcdFx0b25XYWl0aW5nPXt0aGlzLm9uV2FpdGluZ31cclxuXHRcdFx0XHRcdG9uUGxheT17dGhpcy5jaGFuZ1N0YXR1c31cclxuXHRcdFx0XHRcdG9uUGF1c2U9e3RoaXMuY2hhbmdTdGF0dXN9XHJcblx0XHRcdFx0XHRvblRpbWVVcGRhdGU9e3RoaXMub25UaW1lVXBkYXRlfVxyXG5cdFx0XHRcdFx0b25DYW5QbGF5PXt0aGlzLm9uQ2FuUGxheX1cclxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMub25FcnJvcn1cclxuXHRcdFx0XHRcdG9uRW5kZWQ9e3RoaXMub25FbmRlZH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHshcGF1c2VkIHx8IGxvYWRpbmcgfHwgZW5kZWQgPyBudWxsIDogPEljb24gdHlwZT1cInBsYXktY2lyY2xlLW9cIiBjbGFzc05hbWU9XCJwbGF5LWljb25cIiBvbkNsaWNrPXt0aGlzLnBsYXl9IC8+fVxyXG5cdFx0XHRcdHtsb2FkaW5nID8gPEljb24gdHlwZT1cImxvYWRpbmdcIiBjbGFzc05hbWU9XCJwbGF5LWljb25cIiAvPiA6IG51bGx9XHJcblx0XHRcdFx0e2VuZGVkID8gPEljb24gdHlwZT1cInJlbG9hZFwiIGNsYXNzTmFtZT1cInBsYXktaWNvblwiIG9uQ2xpY2s9e3RoaXMucmVwbGF5fSAvPiA6IG51bGx9XHJcblx0XHRcdFx0eyFzaG93Q29udHJvbCA/IG51bGwgOiA8Q29udHJvbHMgey4uLmNvbnRyb2xzUHJvcHN9IC8+fVxyXG5cdFx0XHRcdHsvKiAgPGRpdiBjbGFzc05hbWU9J3BsdWdpbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0UGx1Z2luc31cclxuICAgICAgICAgICAgICAgICAgICB7Y29udHJvbFBsdWdpbnN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7XHJcbiIsImltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuLi9jb21wb25lbnRzL3ZpZGVvJztcclxuaW1wb3J0IHtcclxuXHRDb21wb25lbnRcclxufSBmcm9tICdyZWFjdCc7XHJcbi8qIGNvbnN0IHNjcmVlbnNob3QgPSAocGxheWVyKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCB3aWR0aCA9IHBsYXllci52aWRlb1dpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gcGxheWVyLnZpZGVvSGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBjdHguZHJhd0ltYWdlKHBsYXllciwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nJyk7XHJcbiAgICBjb25zdCBwbmcgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICBpbWcuc3JjID0gcG5nO1xyXG59XHJcbmNvbnN0IGxhYmVsU3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzEwcHgnLFxyXG4gICAgbGVmdDogJzEwcHgnLFxyXG4gICAgYmFja2dyb3VuZDoncmdiKDc1LDEzNSwyNTUpJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuICAgIHBhZGRpbmc6JzNweCAxMnB4JyxcclxufVxyXG5jb25zdCB0YWlsb3JTdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6ICcxMHB4JyxcclxuICAgIGJvdHRvbTogJzQ4cHgnLFxyXG4gICAgd2lkdGg6ICczNnB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcclxuICAgIGJvcmRlclJhZGl1czogJzE4cHgnLFxyXG59XHJcbmNvbnN0IHBsdWdpbnMgPSBbXHJcbiAgICA8ZGl2IHBsdWdpbj0ndGV4dCcga2V5PSdsYWJlbCcgc3R5bGU9e2xhYmVsU3R5bGV9PuW+heWuoeaguDwvZGl2PixcclxuICAgIDxpbWcgc3JjPScvdGFpbG9yLnN2Zycgb25DbGljaz17c2NyZWVuc2hvdH0gcGx1Z2luPSdjb250cm9sJyBrZXk9J3NjcmVlbnNob3QnIHN0eWxlPXt0YWlsb3JTdHlsZX0gLz4sXHJcbl07ICovXHJcbi8vIGh0dHA6Ly9tb3MuY21vYmQuY29tOjgyMTUvbW9zLWRvd25sb2FkL2Rvd25sb2FkL3BsYXkvY2FwdHVyZWZyb250XzIwMTgwMTEzXzEzMzIzMi5tcDQ/dG9rZW49YzEzZWIxYjBjN2JhNDg5NzhiYjU3ZGY1YzRmMGUwM2EmcmVzPTEyMzQ1NlxyXG4vLyBodHRwOi8vMTgzLjIzMC40MC42Njo4MjE1L21vcy1kb3dubG9hZC9kb3dubG9hZC9wbGF5L3NucF8xODAxMjYxMDE5MDBfaC5tcDQ/dG9rZW49YmMzMjE3OTNkMTIxNGM0OGEwODdmMmJlMjdlMzYzNWEmcmVzPTY1NjI1M1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdC8vIHJldHVybiA8VmlkZW9QbGF5ZXIgc3JjPSdodHRwczovL2NoaW1lZS5vcmcvdm9kLzEubXA0JyBhdXRvUGxheSBvblBsYXk9eygpID0+IHRoaXMucC50b2dnbGVGdWxsc2NyZWVuKCl9IHJlZj17cCA9PiB0aGlzLnAgPSBwfSAvPlxyXG5cdFx0cmV0dXJuIDxWaWRlb1BsYXllciBzcmM9J2h0dHBzOi8vZ2l0aHViLmNvbS9pNXRpbmcvaG93LWJyb3dlci13b3JrLWFuZC1wZXJmb21hY2UtdHVubmluZy9ibG9iL21hc3Rlci8wMS13ZWItc2VydmVyLm1wND9yYXc9dHJ1ZScgb25QbGF5PXsoKSA9PiB0aGlzLnAudG9nZ2xlRnVsbHNjcmVlbigpfSByZWY9e3AgPT4gdGhpcy5wID0gcH0gLz5cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==