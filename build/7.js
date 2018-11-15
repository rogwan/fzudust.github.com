(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/react-router/shell.jsx":
/*!************************************!*\
  !*** ./src/react-router/shell.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shell; });
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);









var TextArea = antd_es_input__WEBPACK_IMPORTED_MODULE_6__["default"].TextArea;
/*
goto=>https://baidu.com
$eval=>#kw--out=function(input){input.value='test'}
click=>#su
*/

/*
goto=>https://dev.fe.ioteams.com/cwtpro/login--out={waitUntil:'networkidle2'}
type=>[name=userName]--zywl@sme
type=>[name=password]--000000
orc=>.valid-img--[name=verifycode]
click=>button[type=submit]
*/

/*
goto=>https://dev.fe.ioteams.com/cwtomp/login--out={waitUntil:'networkidle2'}
type=>[name=userName]--ompAdmin01@sme
type=>[name=password]--000000
orc=>.valid-img--[name=verifycode]
click=>button[type=submit]
*/

var Shell =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Shell, _Component);

  function Shell() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "state", {
      ready: false,
      shell: "goto=>https://dev.fe.ioteams.com/cwtpro/login--out={waitUntil:'networkidle2'}\ntype=>[name=userName]--zywl@sme\ntype=>[name=password]--3.1415926\norc=>.valid-img--[name=verifycode]\nclick=>button[type=submit]"
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "shot", function () {
      var shell = _this.state.shell.split('\n').map(function (item) {
        return item.trim();
      }).filter(function (item) {
        return !!item;
      });

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/shell', {
        shell: shell
      }).then(function (data) {
        return data.data;
      }).then(function (data) {
        if (data.success) {
          antd_es_message__WEBPACK_IMPORTED_MODULE_1__["default"].success('操作成功');
        } else {
          antd_es_message__WEBPACK_IMPORTED_MODULE_1__["default"].error('操作失败');
        }
      }).catch(function (e) {
        return console.error(e);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "look", function () {
      _this.img.src = '/img/loading.svg';
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/look', null, {
        responseType: 'blob'
      }).then(function (data) {
        return data.data;
      }).then(function (data) {
        /*  if (data.img) {
             this.img.src = 'data:image/png;base64,' + data.img;
         } else {
             console.error(JSON.parse(data))
         } */
        _this.img.src = URL.createObjectURL(data);
      }).catch(function (e) {
        return console.error(e);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "changeUrl", function (e) {
      _this.setState({
        shell: e.target.value
      });
    });

    return _this;
  }

  var _proto = Shell.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('/getPage').then(function (data) {
      return _this2.setState({
        ready: true
      });
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextArea, {
      autosize: {
        minRows: 6,
        maxRows: 10
      },
      value: this.state.shell,
      onChange: this.changeUrl
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
      onClick: this.shot,
      disabled: !this.state.ready
    }, "\u63D0\u4EA4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
      onClick: this.look,
      disabled: !this.state.ready
    }, "\u67E5\u770B")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
      ref: function ref(img) {
        return _this3.img = img;
      },
      style: {
        maxWidth: '100%'
      }
    })));
  };

  return Shell;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3Qtcm91dGVyL3NoZWxsLmpzeCJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIlNoZWxsIiwicmVhZHkiLCJzaGVsbCIsInN0YXRlIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwidHJpbSIsImZpbHRlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImltZyIsInNyYyIsInJlc3BvbnNlVHlwZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsIm1pblJvd3MiLCJtYXhSb3dzIiwiY2hhbmdlVXJsIiwic2hvdCIsImxvb2siLCJtYXhXaWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUVRQSxRLHlEQUFBQSxRO0FBQ1I7Ozs7OztBQUtBOzs7Ozs7OztBQVFBOzs7Ozs7OztJQVFxQkMsSzs7Ozs7Ozs7Ozs7Ozs7MlFBQ1o7QUFDUEMsV0FBSyxFQUFFLEtBREE7QUFFUEMsV0FBSztBQUZFLEs7OzBRQVdELFlBQU07QUFDWixVQUFNQSxLQUFLLEdBQUcsTUFBS0MsS0FBTCxDQUFXRCxLQUFYLENBQWlCRSxLQUFqQixDQUF1QixJQUF2QixFQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsT0FBckMsRUFBc0RDLE1BQXRELENBQTZELFVBQUFGLElBQUk7QUFBQSxlQUFJLENBQUMsQ0FBQ0EsSUFBTjtBQUFBLE9BQWpFLENBQWQ7O0FBQ0FHLGtEQUFLLENBQUNDLElBQU4sQ0FBVyxRQUFYLEVBQXFCO0FBQUVSLGFBQUssRUFBTEE7QUFBRixPQUFyQixFQUNFUyxJQURGLENBQ08sVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0EsSUFBVDtBQUFBLE9BRFgsRUFFRUQsSUFGRixDQUVPLFVBQUFDLElBQUksRUFBSTtBQUNiLFlBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNqQixrRUFBUUEsT0FBUixDQUFnQixNQUFoQjtBQUNBLFNBRkQsTUFFTztBQUNOLGtFQUFRQyxLQUFSLENBQWMsTUFBZDtBQUNBO0FBQ0QsT0FSRixFQVNFQyxLQVRGLENBU1EsVUFBQUMsQ0FBQztBQUFBLGVBQUlDLE9BQU8sQ0FBQ0gsS0FBUixDQUFjRSxDQUFkLENBQUo7QUFBQSxPQVRUO0FBVUEsSzs7MFFBQ00sWUFBTTtBQUNaLFlBQUtFLEdBQUwsQ0FBU0MsR0FBVCxHQUFlLGtCQUFmO0FBQ0FWLGtEQUFLLENBQUNDLElBQU4sQ0FBVyxPQUFYLEVBQW9CLElBQXBCLEVBQTBCO0FBQUVVLG9CQUFZLEVBQUU7QUFBaEIsT0FBMUIsRUFDRVQsSUFERixDQUNPLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNBLElBQVQ7QUFBQSxPQURYLEVBRUVELElBRkYsQ0FFTyxVQUFBQyxJQUFJLEVBQUk7QUFDRDs7Ozs7QUFLWixjQUFLTSxHQUFMLENBQVNDLEdBQVQsR0FBZUUsR0FBRyxDQUFDQyxlQUFKLENBQW9CVixJQUFwQixDQUFmO0FBQ0EsT0FURixFQVVFRyxLQVZGLENBVVEsVUFBQUMsQ0FBQztBQUFBLGVBQUlDLE9BQU8sQ0FBQ0gsS0FBUixDQUFjRSxDQUFkLENBQUo7QUFBQSxPQVZUO0FBV0EsSzs7K1FBR1csVUFBQ0EsQ0FBRCxFQUFPO0FBQ2xCLFlBQUtPLFFBQUwsQ0FBYztBQUNickIsYUFBSyxFQUFFYyxDQUFDLENBQUNRLE1BQUYsQ0FBU0M7QUFESCxPQUFkO0FBR0EsSzs7Ozs7OztTQXBDREMsaUIsZ0NBQW9CO0FBQUE7O0FBQ25CakIsZ0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFDLElBQUk7QUFBQSxhQUFJLE1BQUksQ0FBQ1csUUFBTCxDQUFjO0FBQUV0QixhQUFLLEVBQUU7QUFBVCxPQUFkLENBQUo7QUFBQSxLQUFoQztBQUNBLEc7O1NBbUNEMEIsTSxxQkFBUztBQUFBOztBQUNSLFdBQ0MsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0Msd0VBQ0MsMkRBQUMsUUFBRDtBQUFVLGNBQVEsRUFBRTtBQUFFQyxlQUFPLEVBQUUsQ0FBWDtBQUFjQyxlQUFPLEVBQUU7QUFBdkIsT0FBcEI7QUFBaUQsV0FBSyxFQUFFLEtBQUsxQixLQUFMLENBQVdELEtBQW5FO0FBQTBFLGNBQVEsRUFBRSxLQUFLNEI7QUFBekYsTUFERCxFQUVDO0FBQVEsYUFBTyxFQUFFLEtBQUtDLElBQXRCO0FBQTRCLGNBQVEsRUFBRSxDQUFDLEtBQUs1QixLQUFMLENBQVdGO0FBQWxELHNCQUZELEVBR0M7QUFBUSxhQUFPLEVBQUUsS0FBSytCLElBQXRCO0FBQTRCLGNBQVEsRUFBRSxDQUFDLEtBQUs3QixLQUFMLENBQVdGO0FBQWxELHNCQUhELENBREQsRUFNQyx3RUFDQztBQUFLLFNBQUcsRUFBRSxhQUFBaUIsR0FBRztBQUFBLGVBQUksTUFBSSxDQUFDQSxHQUFMLEdBQVdBLEdBQWY7QUFBQSxPQUFiO0FBQWlDLFdBQUssRUFBRTtBQUFFZSxnQkFBUSxFQUFFO0FBQVo7QUFBeEMsTUFERCxDQU5ELENBREQ7QUFZQSxHOzs7RUEzRGlDQywrQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgSW5wdXQsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbi8qXHJcbmdvdG89Pmh0dHBzOi8vYmFpZHUuY29tXHJcbiRldmFsPT4ja3ctLW91dD1mdW5jdGlvbihpbnB1dCl7aW5wdXQudmFsdWU9J3Rlc3QnfVxyXG5jbGljaz0+I3N1XHJcbiovXHJcbi8qXHJcbmdvdG89Pmh0dHBzOi8vZGV2LmZlLmlvdGVhbXMuY29tL2N3dHByby9sb2dpbi0tb3V0PXt3YWl0VW50aWw6J25ldHdvcmtpZGxlMid9XHJcbnR5cGU9PltuYW1lPXVzZXJOYW1lXS0tenl3bEBzbWVcclxudHlwZT0+W25hbWU9cGFzc3dvcmRdLS0wMDAwMDBcclxub3JjPT4udmFsaWQtaW1nLS1bbmFtZT12ZXJpZnljb2RlXVxyXG5jbGljaz0+YnV0dG9uW3R5cGU9c3VibWl0XVxyXG4qL1xyXG5cclxuLypcclxuZ290bz0+aHR0cHM6Ly9kZXYuZmUuaW90ZWFtcy5jb20vY3d0b21wL2xvZ2luLS1vdXQ9e3dhaXRVbnRpbDonbmV0d29ya2lkbGUyJ31cclxudHlwZT0+W25hbWU9dXNlck5hbWVdLS1vbXBBZG1pbjAxQHNtZVxyXG50eXBlPT5bbmFtZT1wYXNzd29yZF0tLTAwMDAwMFxyXG5vcmM9Pi52YWxpZC1pbWctLVtuYW1lPXZlcmlmeWNvZGVdXHJcbmNsaWNrPT5idXR0b25bdHlwZT1zdWJtaXRdXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGVsbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRyZWFkeTogZmFsc2UsXHJcblx0XHRzaGVsbDogYGdvdG89Pmh0dHBzOi8vZGV2LmZlLmlvdGVhbXMuY29tL2N3dHByby9sb2dpbi0tb3V0PXt3YWl0VW50aWw6J25ldHdvcmtpZGxlMid9XHJcbnR5cGU9PltuYW1lPXVzZXJOYW1lXS0tenl3bEBzbWVcclxudHlwZT0+W25hbWU9cGFzc3dvcmRdLS0zLjE0MTU5MjZcclxub3JjPT4udmFsaWQtaW1nLS1bbmFtZT12ZXJpZnljb2RlXVxyXG5jbGljaz0+YnV0dG9uW3R5cGU9c3VibWl0XWBcclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRheGlvcy5wb3N0KCcvZ2V0UGFnZScpLnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKHsgcmVhZHk6IHRydWUgfSkpXHJcblx0fVxyXG5cdHNob3QgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBzaGVsbCA9IHRoaXMuc3RhdGUuc2hlbGwuc3BsaXQoJ1xcbicpLm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xyXG5cdFx0YXhpb3MucG9zdCgnL3NoZWxsJywgeyBzaGVsbCB9KVxyXG5cdFx0XHQudGhlbihkYXRhID0+IGRhdGEuZGF0YSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0bWVzc2FnZS5zdWNjZXNzKCfmk43kvZzmiJDlip8nKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bWVzc2FnZS5lcnJvcign5pON5L2c5aSx6LSlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuXHR9XHJcblx0bG9vayA9ICgpID0+IHtcclxuXHRcdHRoaXMuaW1nLnNyYyA9ICcvaW1nL2xvYWRpbmcuc3ZnJztcclxuXHRcdGF4aW9zLnBvc3QoJy9sb29rJywgbnVsbCwgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxyXG5cdFx0XHQudGhlbihkYXRhID0+IGRhdGEuZGF0YSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiAgaWYgKGRhdGEuaW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nLnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJyArIGRhdGEuaW1nO1xyXG4gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5wYXJzZShkYXRhKSlcclxuICAgICAgICAgICAgICAgICB9ICovXHJcblx0XHRcdFx0dGhpcy5pbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuXHR9XHJcblxyXG5cclxuXHRjaGFuZ2VVcmwgPSAoZSkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHNoZWxsOiBlLnRhcmdldC52YWx1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8VGV4dEFyZWEgYXV0b3NpemU9e3sgbWluUm93czogNiwgbWF4Um93czogMTAgfX0gdmFsdWU9e3RoaXMuc3RhdGUuc2hlbGx9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVVybH0gLz5cclxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5zaG90fSBkaXNhYmxlZD17IXRoaXMuc3RhdGUucmVhZHl9PuaPkOS6pDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmxvb2t9IGRpc2FibGVkPXshdGhpcy5zdGF0ZS5yZWFkeX0+5p+l55yLPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxpbWcgcmVmPXtpbWcgPT4gdGhpcy5pbWcgPSBpbWd9IHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScgfX0gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==