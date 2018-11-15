(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/react-router/puppeteer.jsx":
/*!****************************************!*\
  !*** ./src/react-router/puppeteer.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Puppeteer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button_style_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/style/index.css */ "./node_modules/antd/lib/button/style/index.css");
/* harmony import */ var antd_lib_button_style_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_index_css__WEBPACK_IMPORTED_MODULE_8__);









var Search = antd_es_input__WEBPACK_IMPORTED_MODULE_5__["default"].Search; //https://dev.fe.ioteams.com/cwtpro/login--.valid-img
//http://tengine.taobao.org/book/chapter_02.html--#nginx-100

var Puppeteer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Puppeteer, _Component);

  function Puppeteer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "state", {
      url: "http://tengine.taobao.org/book/chapter_02.html--#nginx-100",
      ready: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "shot", function () {
      if (!_this.state.ready) return;
      _this.img.src = '/img/loading.svg';
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/image', {
        url: _this.state.url
        /* opts: { type: 'jpeg', quality: 80, omitBackground: true, fullPage: true }, pageOpts: { waitUntil: 'networkidle0' }  */

      }, {
        responseType: 'blob'
      }).then(function (data) {
        return data.data;
      }).then(function (data) {
        _this.img.src = URL.createObjectURL(data);
      }).catch(function (e) {
        return console.error(e);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "pdf", function () {
      if (!_this.state.ready) return;
      _this.img.src = '/img/loading.svg';
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/pdf', {
        url: _this.state.url
        /* opts: { format: 'A4', printBackground: true }  */

      }, {
        responseType: 'blob'
      }).then(function (data) {
        return data.data;
      }).then(function (data) {
        // this.object.data = URL.createObjectURL(data)
        _this.img.src = '/img/null.svg'; // window.open(URL.createObjectURL(data))

        _this.iframe.src = URL.createObjectURL(data);
        /*  const style = document.createElement('style');
         style.innerHTML = '#plugin::-webkit-scrollbar {display: none;}';
         this.iframe.onload = () => {
        	 this.iframe.contentDocument.body.append(style);
         } */

        _this.forceUpdate(); // this.a.href = URL.createObjectURL(data);
        // this.a.click();

      }).catch(function (e) {
        return console.error(e);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "changeUrl", function (e) {
      // console.log(e.target.value)
      _this.setState({
        url: e.target.value
      });
    });

    return _this;
  }

  var _proto = Puppeteer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/getPage').then(function (data) {
      return _this2.setState({
        ready: true
      });
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var iframeStyle = {
      border: 'none',
      cursor: 'inherit',
      height: 'calc(100vh - 242px)',
      opacity: 1,
      transition: 'opacity 200ms linear',
      transitionDelay: '100ms',
      scrollBehavior: 'smooth',
      width: '100%'
    };
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
      value: this.state.url,
      onChange: this.changeUrl,
      style: {
        width: 'calc(100% - 100px)'
      }
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      onClick: this.shot,
      disabled: !this.state.ready
    }, "\u622A\u56FE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
      onClick: this.pdf,
      disabled: !this.state.ready
    }, "PDF")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
      ref: function ref(img) {
        return _this3.img = img;
      }
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
      ref: function ref(iframe) {
        return _this3.iframe = iframe;
      },
      style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        display: this.iframe && this.iframe.src ? 'block' : 'none'
      }, iframeStyle)
    })));
  };

  return Puppeteer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtcm91dGVyL3B1cHBldGVlci5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUHVwcGV0ZWVyIiwidXJsIiwicmVhZHkiLCJzdGF0ZSIsImltZyIsInNyYyIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJkYXRhIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiaWZyYW1lIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJpZnJhbWVTdHlsZSIsImJvcmRlciIsImN1cnNvciIsImhlaWdodCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkRlbGF5Iiwic2Nyb2xsQmVoYXZpb3IiLCJ3aWR0aCIsImNoYW5nZVVybCIsInNob3QiLCJwZGYiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLHNEQUFNQSxNQUFyQixDLENBRUE7QUFDQTs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7OzJRQUNaO0FBQ1BDLFNBQUcsRUFBRSw0REFERTtBQUVQQyxXQUFLLEVBQUU7QUFGQSxLOzswUUFPRCxZQUFNO0FBQ1osVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0QsS0FBaEIsRUFBdUI7QUFDdkIsWUFBS0UsR0FBTCxDQUFTQyxHQUFULEdBQWUsa0JBQWY7QUFDQUMsa0RBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsRUFBcUI7QUFBRU4sV0FBRyxFQUFFLE1BQUtFLEtBQUwsQ0FBV0Y7QUFBSzs7QUFBdkIsT0FBckIsRUFBeUs7QUFBRU8sb0JBQVksRUFBRTtBQUFoQixPQUF6SyxFQUNFQyxJQURGLENBQ08sVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0EsSUFBVDtBQUFBLE9BRFgsRUFFRUQsSUFGRixDQUVPLFVBQUFDLElBQUksRUFBSTtBQUNiLGNBQUtOLEdBQUwsQ0FBU0MsR0FBVCxHQUFlTSxHQUFHLENBQUNDLGVBQUosQ0FBb0JGLElBQXBCLENBQWY7QUFDQSxPQUpGLEVBS0VHLEtBTEYsQ0FLUSxVQUFBQyxDQUFDO0FBQUEsZUFBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWNGLENBQWQsQ0FBSjtBQUFBLE9BTFQ7QUFNQSxLOzt5UUFDSyxZQUFNO0FBQ1gsVUFBSSxDQUFDLE1BQUtYLEtBQUwsQ0FBV0QsS0FBaEIsRUFBdUI7QUFDdkIsWUFBS0UsR0FBTCxDQUFTQyxHQUFULEdBQWUsa0JBQWY7QUFDQUMsa0RBQUssQ0FBQ0MsSUFBTixDQUFXLE1BQVgsRUFBbUI7QUFBRU4sV0FBRyxFQUFFLE1BQUtFLEtBQUwsQ0FBV0Y7QUFBSzs7QUFBdkIsT0FBbkIsRUFBa0c7QUFBRU8sb0JBQVksRUFBRTtBQUFoQixPQUFsRyxFQUNFQyxJQURGLENBQ08sVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0EsSUFBVDtBQUFBLE9BRFgsRUFFRUQsSUFGRixDQUVPLFVBQUFDLElBQUksRUFBSTtBQUNiO0FBQ0EsY0FBS04sR0FBTCxDQUFTQyxHQUFULEdBQWUsZUFBZixDQUZhLENBR2I7O0FBQ0EsY0FBS1ksTUFBTCxDQUFZWixHQUFaLEdBQWtCTSxHQUFHLENBQUNDLGVBQUosQ0FBb0JGLElBQXBCLENBQWxCO0FBQ0E7Ozs7OztBQUtBLGNBQUtRLFdBQUwsR0FWYSxDQVdiO0FBQ0E7O0FBQ0EsT0FmRixFQWdCRUwsS0FoQkYsQ0FnQlEsVUFBQUMsQ0FBQztBQUFBLGVBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkLENBQUo7QUFBQSxPQWhCVDtBQWlCQSxLOzsrUUFzQ1csVUFBQ0EsQ0FBRCxFQUFPO0FBQ2xCO0FBQ0EsWUFBS0ssUUFBTCxDQUFjO0FBQ2JsQixXQUFHLEVBQUVhLENBQUMsQ0FBQ00sTUFBRixDQUFTQztBQURELE9BQWQ7QUFHQSxLOzs7Ozs7O1NBNUVEQyxpQixnQ0FBb0I7QUFBQTs7QUFDbkJoQixnREFBSyxDQUFDQyxJQUFOLENBQVcsVUFBWCxFQUF1QkUsSUFBdkIsQ0FBNEIsVUFBQUMsSUFBSTtBQUFBLGFBQUksTUFBSSxDQUFDUyxRQUFMLENBQWM7QUFBRWpCLGFBQUssRUFBRTtBQUFULE9BQWQsQ0FBSjtBQUFBLEtBQWhDO0FBQ0EsRzs7U0EyRURxQixNLHFCQUFTO0FBQUE7O0FBQ1IsUUFBTUMsV0FBVyxHQUFHO0FBQ25CQyxZQUFNLEVBQUUsTUFEVztBQUVuQkMsWUFBTSxFQUFFLFNBRlc7QUFHbkJDLFlBQU0sRUFBRSxxQkFIVztBQUluQkMsYUFBTyxFQUFFLENBSlU7QUFLbkJDLGdCQUFVLEVBQUUsc0JBTE87QUFNbkJDLHFCQUFlLEVBQUUsT0FORTtBQU9uQkMsb0JBQWMsRUFBRSxRQVBHO0FBUW5CQyxXQUFLLEVBQUU7QUFSWSxLQUFwQjtBQVVBLFdBQ0MsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0Msd0VBQ0M7QUFBTyxXQUFLLEVBQUUsS0FBSzdCLEtBQUwsQ0FBV0YsR0FBekI7QUFBOEIsY0FBUSxFQUFFLEtBQUtnQyxTQUE3QztBQUF3RCxXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFFO0FBQVQ7QUFBL0QsTUFERCxFQUVDO0FBQVEsYUFBTyxFQUFFLEtBQUtFLElBQXRCO0FBQTRCLGNBQVEsRUFBRSxDQUFDLEtBQUsvQixLQUFMLENBQVdEO0FBQWxELHNCQUZELEVBR0M7QUFBUSxhQUFPLEVBQUUsS0FBS2lDLEdBQXRCO0FBQTJCLGNBQVEsRUFBRSxDQUFDLEtBQUtoQyxLQUFMLENBQVdEO0FBQWpELGFBSEQsQ0FERCxFQU1DLHdFQUNDO0FBQUssU0FBRyxFQUFFLGFBQUFFLEdBQUc7QUFBQSxlQUFJLE1BQUksQ0FBQ0EsR0FBTCxHQUFXQSxHQUFmO0FBQUE7QUFBYixNQURELENBTkQsRUFTQyx3RUFHQztBQUFRLFNBQUcsRUFBRSxhQUFBYSxNQUFNO0FBQUEsZUFBSSxNQUFJLENBQUNBLE1BQUwsR0FBY0EsTUFBbEI7QUFBQSxPQUFuQjtBQUE2QyxXQUFLO0FBQUltQixlQUFPLEVBQUUsS0FBS25CLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlaLEdBQTNCLEdBQWlDLE9BQWpDLEdBQTJDO0FBQXhELFNBQW1FbUIsV0FBbkU7QUFBbEQsTUFIRCxDQVRELENBREQ7QUFpQkEsRzs7O0VBOUdxQ2EsK0MiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCAnYW50ZC9saWIvYnV0dG9uL3N0eWxlL2luZGV4LmNzcydcclxuY29uc3QgU2VhcmNoID0gSW5wdXQuU2VhcmNoO1xyXG5cclxuLy9odHRwczovL2Rldi5mZS5pb3RlYW1zLmNvbS9jd3Rwcm8vbG9naW4tLS52YWxpZC1pbWdcclxuLy9odHRwOi8vdGVuZ2luZS50YW9iYW8ub3JnL2Jvb2svY2hhcHRlcl8wMi5odG1sLS0jbmdpbngtMTAwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXBwZXRlZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHN0YXRlID0ge1xyXG5cdFx0dXJsOiBcImh0dHA6Ly90ZW5naW5lLnRhb2Jhby5vcmcvYm9vay9jaGFwdGVyXzAyLmh0bWwtLSNuZ2lueC0xMDBcIixcclxuXHRcdHJlYWR5OiBmYWxzZVxyXG5cdH1cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGF4aW9zLnBvc3QoJy9nZXRQYWdlJykudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoeyByZWFkeTogdHJ1ZSB9KSlcclxuXHR9XHJcblx0c2hvdCA9ICgpID0+IHtcclxuXHRcdGlmICghdGhpcy5zdGF0ZS5yZWFkeSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pbWcuc3JjID0gJy9pbWcvbG9hZGluZy5zdmcnO1xyXG5cdFx0YXhpb3MucG9zdCgnL2ltYWdlJywgeyB1cmw6IHRoaXMuc3RhdGUudXJsLCAvKiBvcHRzOiB7IHR5cGU6ICdqcGVnJywgcXVhbGl0eTogODAsIG9taXRCYWNrZ3JvdW5kOiB0cnVlLCBmdWxsUGFnZTogdHJ1ZSB9LCBwYWdlT3B0czogeyB3YWl0VW50aWw6ICduZXR3b3JraWRsZTAnIH0gICovIH0sIHsgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiBkYXRhLmRhdGEpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcblx0fVxyXG5cdHBkZiA9ICgpID0+IHtcclxuXHRcdGlmICghdGhpcy5zdGF0ZS5yZWFkeSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pbWcuc3JjID0gJy9pbWcvbG9hZGluZy5zdmcnO1xyXG5cdFx0YXhpb3MucG9zdCgnL3BkZicsIHsgdXJsOiB0aGlzLnN0YXRlLnVybCwgLyogb3B0czogeyBmb3JtYXQ6ICdBNCcsIHByaW50QmFja2dyb3VuZDogdHJ1ZSB9ICAqLyB9LCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pXHJcblx0XHRcdC50aGVuKGRhdGEgPT4gZGF0YS5kYXRhKVxyXG5cdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHQvLyB0aGlzLm9iamVjdC5kYXRhID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKVxyXG5cdFx0XHRcdHRoaXMuaW1nLnNyYyA9ICcvaW1nL251bGwuc3ZnJztcclxuXHRcdFx0XHQvLyB3aW5kb3cub3BlbihVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpKVxyXG5cdFx0XHRcdHRoaXMuaWZyYW1lLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcblx0XHRcdFx0LyogIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuXHRcdFx0XHQgc3R5bGUuaW5uZXJIVE1MID0gJyNwbHVnaW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtkaXNwbGF5OiBub25lO30nO1xyXG5cdFx0XHRcdCB0aGlzLmlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdFx0XHQgdGhpcy5pZnJhbWUuY29udGVudERvY3VtZW50LmJvZHkuYXBwZW5kKHN0eWxlKTtcclxuXHRcdFx0XHQgfSAqL1xyXG5cdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuXHRcdFx0XHQvLyB0aGlzLmEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5hLmNsaWNrKCk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG5cdH1cclxuICAgIC8qICBzaG90ID0gKCkgPT4ge1xyXG4gICAgICAgICBjb25zdCBpZnJhbWUgPSB0aGlzLmlmcmFtZTtcclxuICAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XHJcbiAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhjdHgpXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGlmcmFtZS5jb250ZW50V2luZG93KVxyXG4gICAgICAgICBjdHguZHJhd1dpbmRvdyhpZnJhbWUuY29udGVudFdpbmRvdywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBcInJnYmEoMCwwLDAsMClcIik7XHJcbiAgICAgICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nO1xyXG4gICAgICAgICBjb25zdCBwbmcgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgIGltZy5zcmMgPSBwbmc7XHJcbiAgICAgfSAqL1xyXG4gICAgLyogZ2V0QmFpZHVUb2tlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGllbnRfaWQgPSAnaXl1dFpSUkdsVEEweXlUS28yem55WGg1JztcclxuICAgICAgICBjb25zdCBjbGllbnRfc2VjcmV0ID0gJ3RBNDl3V2VFRVdNN21kaWtHc1QyM2h5SUFEeG1OOFI5JztcclxuICAgICAgICAvLyBheGlvcy5wb3N0KCdodHRwczovL2FpcC5iYWlkdWJjZS5jb20vb2F1dGgvMi4wL3Rva2VuJyx7Z3JhbnRfdHlwZTonY2xpZW50X2NyZWRlbnRpYWxzJyxjbGllbnRfaWQsY2xpZW50X3NlY3JldH0pXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHBzOi8vYWlwLmJhaWR1YmNlLmNvbS9vYXV0aC8yLjAvdG9rZW4/Z3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHMmY2xpZW50X2lkPSR7Y2xpZW50X2lkfSZjbGllbnRfc2VjcmV0PSR7Y2xpZW50X3NlY3JldH1gKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuZGF0YS5hY2Nlc3NfdG9rZW4pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG5cclxuICAgIH1cclxuICAgIGdldEltZ1RleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRCYWlkdVRva2VuKClcclxuICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gXCIyNC5jZGYxYTNmZjcwOTMzMjQyYTU5MTdlZmMxNzFiOTU2Zi4yNTkyMDAwLjE1MTU4MTEzNTkuMjgyMzM1LTEwNTI5MTc5XCJcclxuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FpcC5iYWlkdWJjZS5jb20vcmVzdC8yLjAvb2NyL3YxL2dlbmVyYWxfYmFzaWM/YWNjZXNzX3Rva2VuPScgKyBhY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5pbWcuc3JjLnJlcGxhY2UoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnLCAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2JhYmlsaXR5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgICB9ICovXHJcblx0Y2hhbmdlVXJsID0gKGUpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHVybDogZS50YXJnZXQudmFsdWVcclxuXHRcdH0pXHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IGlmcmFtZVN0eWxlID0ge1xyXG5cdFx0XHRib3JkZXI6ICdub25lJyxcclxuXHRcdFx0Y3Vyc29yOiAnaW5oZXJpdCcsXHJcblx0XHRcdGhlaWdodDogJ2NhbGMoMTAwdmggLSAyNDJweCknLFxyXG5cdFx0XHRvcGFjaXR5OiAxLFxyXG5cdFx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAyMDBtcyBsaW5lYXInLFxyXG5cdFx0XHR0cmFuc2l0aW9uRGVsYXk6ICcxMDBtcycsXHJcblx0XHRcdHNjcm9sbEJlaGF2aW9yOiAnc21vb3RoJyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdH1cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnVybH0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlVXJsfSBzdHlsZT17eyB3aWR0aDogJ2NhbGMoMTAwJSAtIDEwMHB4KScgfX0gLz5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5zaG90fSBkaXNhYmxlZD17IXRoaXMuc3RhdGUucmVhZHl9PuaIquWbvjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnBkZn0gZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnJlYWR5fT5QREY8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGltZyByZWY9e2ltZyA9PiB0aGlzLmltZyA9IGltZ30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0ey8qIDxvYmplY3QgcmVmPXtvYmplY3QgPT4gdGhpcy5vYmplY3QgPSBvYmplY3R9IHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIi8+ICovfVxyXG5cdFx0XHRcdFx0ey8qIDxhIHJlZj17YSA9PiB0aGlzLmEgPSBhfSBkb3dubG9hZD0ndGVzdC5wZGYnIHRhcmdldD1cIl9ibGFua1wiIC8+ICovfVxyXG5cdFx0XHRcdFx0PGlmcmFtZSByZWY9e2lmcmFtZSA9PiB0aGlzLmlmcmFtZSA9IGlmcmFtZX0gc3R5bGU9e3sgZGlzcGxheTogdGhpcy5pZnJhbWUgJiYgdGhpcy5pZnJhbWUuc3JjID8gJ2Jsb2NrJyA6ICdub25lJywgLi4uaWZyYW1lU3R5bGUgfX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==