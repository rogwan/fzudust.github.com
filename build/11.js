(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/mobile/rss.jsx":
/*!****************************!*\
  !*** ./src/mobile/rss.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileRssReader; });
/* harmony import */ var antd_mobile_es_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/es/drawer/style */ "./node_modules/antd-mobile/es/drawer/style/index.js");
/* harmony import */ var antd_mobile_es_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/es/drawer */ "./node_modules/antd-mobile/es/drawer/index.js");
/* harmony import */ var antd_mobile_es_accordion_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile/es/accordion/style */ "./node_modules/antd-mobile/es/accordion/style/index.js");
/* harmony import */ var antd_mobile_es_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile/es/accordion */ "./node_modules/antd-mobile/es/accordion/index.js");
/* harmony import */ var antd_mobile_es_nav_bar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd-mobile/es/nav-bar/style */ "./node_modules/antd-mobile/es/nav-bar/style/index.js");
/* harmony import */ var antd_mobile_es_nav_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd-mobile/es/nav-bar */ "./node_modules/antd-mobile/es/nav-bar/index.js");
/* harmony import */ var antd_mobile_es_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd-mobile/es/icon/style */ "./node_modules/antd-mobile/es/icon/style/index.js");
/* harmony import */ var antd_mobile_es_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd-mobile/es/icon */ "./node_modules/antd-mobile/es/icon/index.js");
/* harmony import */ var antd_mobile_es_list_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd-mobile/es/list/style */ "./node_modules/antd-mobile/es/list/style/index.js");
/* harmony import */ var antd_mobile_es_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd-mobile/es/list */ "./node_modules/antd-mobile/es/list/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _style_rss_less__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style/rss.less */ "./src/mobile/style/rss.less");
/* harmony import */ var _style_rss_less__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_rss_less__WEBPACK_IMPORTED_MODULE_16__);


















var IndexedDB =
/*#__PURE__*/
function () {
  function IndexedDB(_ref) {
    var _this = this;

    var name = _ref.name,
        version = _ref.version,
        table = _ref.table,
        key = _ref.key,
        callback = _ref.callback;
    this.name = name;
    this.version = version;
    this.table = table;
    this.key = key;
    var request = indexedDB.open(name, version);

    request.onerror = function (e) {
      console.error('db: onerror', e);
      console.error(e);
    };

    request.onsuccess = function (e) {
      console.log('db: onsuccess', request.result);
      _this.db = request.result;
      callback();
    };

    request.onupgradeneeded = function (e) {
      console.log('db: onupgradeneeded', request.result);
      _this.db = request.result;

      _this.addTable(table, key); // callback();

      /* this.db.onversionchange = function(event) {
      	this.db.close();
      	console.log("A new version of this page is ready. Please reload!");
      }; */

    };

    request.onblocked = function (e) {
      console.log('db: onblocked', request.result);
    };
  }

  var _proto = IndexedDB.prototype;

  _proto.setTable = function setTable(table) {
    this.table = table;
    return this;
  };

  _proto.setKey = function setKey(key) {
    this.key = key;
    return this;
  };

  _proto.addTable = function addTable(table, key) {
    var objectStore = this.db.createObjectStore(table, {
      keyPath: key
    });
    objectStore.createIndex(key, key, {
      unique: true
    });
  };

  _proto.getAll = function getAll() {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var request = _this2.db.transaction(_this2.table).objectStore(_this2.table).getAll();

      request.onsuccess = function (event) {
        console.log('db: get all', event.target.result);
        resolve(event.target.result);
      };

      request.onerror = function (event) {
        console.error('db: get all', event);
        reject(event);
      };
    });
  };

  _proto.getItem = function getItem(url) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var request = _this3.db.transaction(_this3.table).objectStore(_this3.table).index(_this3.key).get(url);

      request.onsuccess = function (event) {
        console.log('db: get', event.target.result);
        resolve(event.target.result);
      };

      request.onerror = function (event) {
        console.error('db: get', event);
        reject(event);
      };
    });
  };

  _proto.addItem = function addItem(data) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      var request = _this4.db.transaction(_this4.table, "readwrite").objectStore(_this4.table).add(data);

      request.onsuccess = function (event) {
        console.log('db: add', event.target.result);
        resolve(event.target.result);
      };

      request.onerror = function (event) {
        console.error('db: add', event);
        reject(event);
      };
    });
  };

  _proto.putItem = function putItem(data) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      var request = _this5.db.transaction(_this5.table, "readwrite").objectStore(_this5.table).put(data);

      request.onsuccess = function (event) {
        console.log('db: put', event.target.result);
        resolve(event.target.result);
      };

      request.onerror = function (event) {
        console.error('db: put', event);
        reject(event);
      };
    });
  };

  _proto.deleteItem = function deleteItem(key) {
    var _this6 = this;

    return new Promise(function (resolve, reject) {
      var request = _this6.db.transaction(_this6.table, "readwrite").objectStore(_this6.table).delete(key);

      request.onsuccess = function (event) {
        console.log('db: delete', key);
        resolve(event.target.result);
      };

      request.onerror = function (event) {
        console.error('db: delete', event);
        reject(event);
      };
    });
  };

  return IndexedDB;
}();

var MobileRssReader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_12___default()(MobileRssReader, _React$Component);

  function MobileRssReader() {
    var _this7;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this7 = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "state", {
      open: false,
      rssList: [],
      rss: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "getAllFromDb",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _this7.db.getAll());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "addItemToDb", function (data) {
      return _this7.db.addItem(data);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "putItemToDb", function (data) {
      return _this7.db.putItem(data);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "deleteItemToDb", function (key) {
      return _this7.db.deleteItem(key);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "changeRss",
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee2(rss, index) {
        var rssList, rssNew;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rssList = _this7.state.rssList;

                _this7.setState({
                  open: false,
                  rss: rss
                });

                _context2.next = 4;
                return _this7.updateRss(rss.url);

              case 4:
                rssNew = _context2.sent;

                if (rssNew) {
                  rssNew.icon = rss.icon;

                  _this7.mergeRss(rssNew, rss);

                  _this7.putItemToDb(rssNew);

                  rssList[index] = rssNew;

                  _this7.setState({
                    rssList: rssList,
                    rss: rssNew
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "updateRss",
    /*#__PURE__*/
    function () {
      var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee3(url) {
        var res, domParser, doc, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/proxy?url=' + url);

              case 3:
                res = _context3.sent;
                domParser = new DOMParser();
                doc = domParser.parseFromString(res.data, 'text/xml');
                data = {
                  updateTime: Date.now(),
                  url: url,
                  title: _this7.charFilter(doc.querySelector('title').innerHTML),
                  items: []
                };

                if (doc.firstElementChild.tagName === 'rss') {
                  data.items = _this7.getItemsFrommRss(doc.querySelectorAll('item'));
                } else {
                  data.items = _this7.getItemsFromFeed(doc.querySelectorAll('entry'));
                }

                return _context3.abrupt("return", data);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);
                return _context3.abrupt("return", null);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "addRssList",
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee4() {
      var res, rssList;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/export.json');

            case 2:
              res = _context4.sent;
              rssList = res.data;

              _this7.setState({
                rssList: rssList,
                rss: rssList[0]
              });

              rssList.forEach(function (data) {
                _this7.addItemToDb(data);
              });

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "onOpenChange", function () {
      _this7.setState({
        open: !_this7.state.open
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "onImgError", function (e, obj) {
      var img = e.target;

      if (img.src === obj.icon) {
        var url = new URL(obj.icon);
        var src = url.protocol + "//" + url.host.slice(url.host.indexOf('.') + 1) + '/favicon.ico';
        img.src = src;
      } else {
        img.src = '/img/rss.png';
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_14___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_13___default()(_this7)), "charFilter", function (html) {
      return html.replace(/&lt;|&gt;|&amp;|<!\[CDATA\[|\]\]>|<script>|<\/script>/ig, function (match) {
        var map = {
          '&lt;': '<',
          '&gt;': '>',
          '&amp;': '&',
          '<script>': '&lt;script&gt;',
          '</script>': '&lt;/script&gt;'
        };
        return map[match] || '';
      });
    });

    return _this7;
  }

  var _proto2 = MobileRssReader.prototype;

  _proto2.componentDidMount =
  /*#__PURE__*/
  function () {
    var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee6() {
      var _this8 = this;

      var indexedDB;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              indexedDB = new IndexedDB({
                name: 'test-demo',
                version: 1,
                table: "rss",
                key: "url",
                callback: function () {
                  var _callback = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee5() {
                    var data, list;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this8.getAllFromDb();

                          case 2:
                            data = _context5.sent;
                            list = data.sort(function (a, b) {
                              return b.updateTime - a.updateTime;
                            });

                            _this8.setState({
                              rssList: list,
                              rss: list[0] || {},
                              item: list[0] && list[0].items[0] || {}
                            });

                          case 5:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));

                  return function callback() {
                    return _callback.apply(this, arguments);
                  };
                }()
              });
              this.db = indexedDB;
              console.log(indexedDB);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function componentDidMount() {
      return _componentDidMount.apply(this, arguments);
    };
  }();

  _proto2.mergeRss = function mergeRss(now, old) {
    var _loop = function _loop(i) {
      var item = old.items[i];

      if (now.items.findIndex(function (i) {
        return i.id === item.id || i.link === item.link;
      }) < 0) {
        now.items.push(item);
      }

      if (now.items.length >= 200) return {
        v: void 0
      };
    };

    for (var i = 0; i < old.items.length; i++) {
      var _ret = _loop(i);

      if (typeof _ret === "object") return _ret.v;
    }
  };

  _proto2.getItemsFrommRss = function getItemsFrommRss(docList) {
    var _this9 = this;

    return Array.from(docList).map(function (item) {
      try {
        var obj = {
          title: _this9.charFilter(item.querySelector('title').innerHTML),
          link: _this9.charFilter(item.querySelector('link').innerHTML),
          description: _this9.charFilter(item.querySelector('description').innerHTML),
          id: item.querySelector('guid') ? item.querySelector('guid').innerHTML : item.querySelector('link').innerHTML + Date.now(),
          updateTime: _this9.charFilter(item.querySelector('pubDate') ? item.querySelector('pubDate').innerHTML : '')
        };
        return obj;
      } catch (e) {
        console.error(e, item);
        return {
          title: '',
          link: '',
          description: '',
          id: '',
          updateTime: ''
        };
      }
    }).filter(function (item) {
      return !!item.id;
    });
  };

  _proto2.getItemsFromFeed = function getItemsFromFeed(docList) {
    var _this10 = this;

    return Array.from(docList).map(function (item) {
      try {
        var obj = {
          title: _this10.charFilter(item.querySelector('title').innerHTML),
          link: item.querySelector('link').getAttribute('href'),
          description: item.querySelector('content').innerHTML,
          id: item.querySelector('id').innerHTML,
          updateTime: _this10.charFilter(item.querySelector('updated').innerHTML)
        };
        return obj;
      } catch (e) {
        console.error(e, item);
        return {
          title: '',
          link: '',
          description: '',
          id: '',
          updateTime: ''
        };
      }
    }).filter(function (item) {
      return !!item.id;
    });
  };

  _proto2.render = function render() {
    var _this11 = this;

    var _this$state = this.state,
        open = _this$state.open,
        rssList = _this$state.rssList,
        rss = _this$state.rss;
    var sidebar = React.createElement(antd_mobile_es_list__WEBPACK_IMPORTED_MODULE_9__["default"], null, rssList.map(function (item, i) {
      return React.createElement(antd_mobile_es_list__WEBPACK_IMPORTED_MODULE_9__["default"].Item, {
        onClick: function onClick() {
          return _this11.changeRss(item, i);
        },
        key: item.url,
        thumb: React.createElement("img", {
          src: item.icon,
          className: "icon",
          onError: function onError(e) {
            return _this11.onImgError(e, item);
          }
        })
      }, item.title);
    }));
    return React.createElement("div", null, React.createElement(antd_mobile_es_nav_bar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: React.createElement(antd_mobile_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "ellipsis"
      }),
      onLeftClick: this.onOpenChange,
      rightContent: React.createElement(antd_mobile_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "plus",
        onClick: this.addRssList
      })
    }, rss.title), React.createElement(antd_mobile_es_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "my-drawer",
      style: {
        minHeight: document.documentElement.clientHeight
      },
      sidebar: sidebar,
      open: open,
      onOpenChange: this.onOpenChange
    }, React.createElement(antd_mobile_es_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
      accordion: true,
      openAnimation: {},
      className: "my-accordion"
    }, rss.items && rss.items.map(function (item) {
      return React.createElement(antd_mobile_es_accordion__WEBPACK_IMPORTED_MODULE_3__["default"].Panel, {
        header: item.title,
        className: "pad",
        key: item.link
      }, React.createElement("div", {
        id: "content",
        dangerouslySetInnerHTML: {
          __html: _this11.charFilter(item.description)
        }
      }));
    }))));
  };

  return MobileRssReader;
}(React.Component);



/***/ }),

/***/ "./src/mobile/style/rss.less":
/*!***********************************!*\
  !*** ./src/mobile/style/rss.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL3Jzcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYmlsZS9zdHlsZS9yc3MubGVzcyJdLCJuYW1lcyI6WyJJbmRleGVkREIiLCJuYW1lIiwidmVyc2lvbiIsInRhYmxlIiwia2V5IiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9uZXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwib25zdWNjZXNzIiwibG9nIiwicmVzdWx0IiwiZGIiLCJvbnVwZ3JhZGVuZWVkZWQiLCJhZGRUYWJsZSIsIm9uYmxvY2tlZCIsInNldFRhYmxlIiwic2V0S2V5Iiwib2JqZWN0U3RvcmUiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJjcmVhdGVJbmRleCIsInVuaXF1ZSIsImdldEFsbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHJhbnNhY3Rpb24iLCJldmVudCIsInRhcmdldCIsImdldEl0ZW0iLCJ1cmwiLCJpbmRleCIsImdldCIsImFkZEl0ZW0iLCJkYXRhIiwiYWRkIiwicHV0SXRlbSIsInB1dCIsImRlbGV0ZUl0ZW0iLCJkZWxldGUiLCJNb2JpbGVSc3NSZWFkZXIiLCJyc3NMaXN0IiwicnNzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVJzcyIsInJzc05ldyIsImljb24iLCJtZXJnZVJzcyIsInB1dEl0ZW1Ub0RiIiwiYXhpb3MiLCJyZXMiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJ1cGRhdGVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwiY2hhckZpbHRlciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJpdGVtcyIsImZpcnN0RWxlbWVudENoaWxkIiwidGFnTmFtZSIsImdldEl0ZW1zRnJvbW1Sc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0SXRlbXNGcm9tRmVlZCIsImZvckVhY2giLCJhZGRJdGVtVG9EYiIsIm9iaiIsImltZyIsInNyYyIsIlVSTCIsInByb3RvY29sIiwiaG9zdCIsInNsaWNlIiwiaW5kZXhPZiIsImh0bWwiLCJyZXBsYWNlIiwibWF0Y2giLCJtYXAiLCJjb21wb25lbnREaWRNb3VudCIsImdldEFsbEZyb21EYiIsImxpc3QiLCJzb3J0IiwiYSIsImIiLCJpdGVtIiwib2xkIiwiaSIsImZpbmRJbmRleCIsImlkIiwibGluayIsInB1c2giLCJsZW5ndGgiLCJkb2NMaXN0IiwiQXJyYXkiLCJmcm9tIiwiZGVzY3JpcHRpb24iLCJmaWx0ZXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW5kZXIiLCJzaWRlYmFyIiwiY2hhbmdlUnNzIiwib25JbWdFcnJvciIsIm9uT3BlbkNoYW5nZSIsImFkZFJzc0xpc3QiLCJtaW5IZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIl9faHRtbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOztJQUNNQSxTOzs7QUFDTCwyQkFNRztBQUFBOztBQUFBLFFBTEZDLElBS0UsUUFMRkEsSUFLRTtBQUFBLFFBSkZDLE9BSUUsUUFKRkEsT0FJRTtBQUFBLFFBSEZDLEtBR0UsUUFIRkEsS0FHRTtBQUFBLFFBRkZDLEdBRUUsUUFGRkEsR0FFRTtBQUFBLFFBREZDLFFBQ0UsUUFERkEsUUFDRTtBQUNGLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFFBQU1FLE9BQU8sR0FBR0MsU0FBUyxDQUFDQyxJQUFWLENBQWVQLElBQWYsRUFBcUJDLE9BQXJCLENBQWhCOztBQUNBSSxXQUFPLENBQUNHLE9BQVIsR0FBa0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCQyxhQUFP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QUFDQyxlQUFULENBQXlCQztBQUF0QyxPQUZSO0FBR0MsYUFBTyxFQUFFUixPQUhWO0FBSUMsVUFBSSxFQUFFckcsSUFKUDtBQUtDLGtCQUFZLEVBQUUsS0FBS3dHO0FBTHBCLE9BT0M7QUFBVyxlQUFTLE1BQXBCO0FBQXFCLG1CQUFhLEVBQUUsRUFBcEM7QUFBd0MsZUFBUyxFQUFDO0FBQWxELE9BQ0VqRSxHQUFHLENBQUNxQixLQUFKLElBQWFyQixHQUFHLENBQUNxQixLQUFKLENBQVVtQixHQUFWLENBQWMsVUFBQU8sSUFBSTtBQUFBLGFBQy9CLHFGQUFXLEtBQVg7QUFBaUIsY0FBTSxFQUFFQSxJQUFJLENBQUM5QixLQUE5QjtBQUFxQyxpQkFBUyxFQUFDLEtBQS9DO0FBQXFELFdBQUcsRUFBRThCLElBQUksQ0FBQ0s7QUFBL0QsU0FDRTtBQUFLLFVBQUUsRUFBQyxTQUFSO0FBQWtCLCtCQUF1QixFQUFFO0FBQUVtQixnQkFBTSxFQUFDLE9BQUksQ0FBQ3JELFVBQUwsQ0FBZ0I2QixJQUFJLENBQUNXLFdBQXJCO0FBQVQ7QUFBM0MsUUFERixDQUQrQjtBQUFBLEtBQWxCLENBRGYsQ0FQRCxDQVJELENBREQ7QUEwQkEsRzs7O0VBNU4yQ2MsS0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7O0FDM0luRCx1QyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0QWNjb3JkaW9uLFxyXG5cdERyYXdlcixcclxuXHRMaXN0LFxyXG5cdE5hdkJhcixcclxuXHRJY29uLFxyXG59IGZyb20gJ2FudGQtbW9iaWxlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICcuL3N0eWxlL3Jzcy5sZXNzJztcclxuY2xhc3MgSW5kZXhlZERCIHtcclxuXHRjb25zdHJ1Y3Rvcih7XHJcblx0XHRuYW1lLFxyXG5cdFx0dmVyc2lvbixcclxuXHRcdHRhYmxlLFxyXG5cdFx0a2V5LFxyXG5cdFx0Y2FsbGJhY2tcclxuXHR9KSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcclxuXHRcdHRoaXMudGFibGUgPSB0YWJsZTtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0Y29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xyXG5cdFx0cmVxdWVzdC5vbmVycm9yID0gKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignZGI6IG9uZXJyb3InLCBlKTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH07XHJcblx0XHRyZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYjogb25zdWNjZXNzJywgcmVxdWVzdC5yZXN1bHQpO1xyXG5cdFx0XHR0aGlzLmRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHR9O1xyXG5cdFx0cmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGI6IG9udXBncmFkZW5lZWRlZCcsIHJlcXVlc3QucmVzdWx0KTtcclxuXHRcdFx0dGhpcy5kYiA9IHJlcXVlc3QucmVzdWx0O1xyXG5cdFx0XHR0aGlzLmFkZFRhYmxlKHRhYmxlLCBrZXkpO1xyXG5cdFx0XHQvLyBjYWxsYmFjaygpO1xyXG5cdFx0XHQvKiB0aGlzLmRiLm9udmVyc2lvbmNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0dGhpcy5kYi5jbG9zZSgpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQSBuZXcgdmVyc2lvbiBvZiB0aGlzIHBhZ2UgaXMgcmVhZHkuIFBsZWFzZSByZWxvYWQhXCIpO1xyXG5cdFx0XHR9OyAqL1xyXG5cdFx0fTtcclxuXHRcdHJlcXVlc3Qub25ibG9ja2VkID0gKGUpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RiOiBvbmJsb2NrZWQnLCByZXF1ZXN0LnJlc3VsdCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHRzZXRUYWJsZSh0YWJsZSkge1xyXG5cdFx0dGhpcy50YWJsZSA9IHRhYmxlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHNldEtleShrZXkpIHtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdGFkZFRhYmxlKHRhYmxlLCBrZXkpIHtcclxuXHRcdGNvbnN0IG9iamVjdFN0b3JlID0gdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSh0YWJsZSwge1xyXG5cdFx0XHRrZXlQYXRoOiBrZXlcclxuXHRcdH0pO1xyXG5cdFx0b2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoa2V5LCBrZXksIHtcclxuXHRcdFx0dW5pcXVlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0QWxsKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgcmVxdWVzdCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy50YWJsZSlcclxuXHRcdFx0XHQub2JqZWN0U3RvcmUodGhpcy50YWJsZSlcclxuXHRcdFx0XHQuZ2V0QWxsKCk7XHJcblx0XHRcdHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGI6IGdldCBhbGwnLCBldmVudC50YXJnZXQucmVzdWx0KVxyXG5cdFx0XHRcdHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcblx0XHRcdH07XHJcblx0XHRcdHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcignZGI6IGdldCBhbGwnLCBldmVudCk7XHJcblx0XHRcdFx0cmVqZWN0KGV2ZW50KTtcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRJdGVtKHVybCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgcmVxdWVzdCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy50YWJsZSlcclxuXHRcdFx0XHQub2JqZWN0U3RvcmUodGhpcy50YWJsZSlcclxuXHRcdFx0XHQuaW5kZXgodGhpcy5rZXkpXHJcblx0XHRcdFx0LmdldCh1cmwpXHJcblx0XHRcdHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGI6IGdldCcsIGV2ZW50LnRhcmdldC5yZXN1bHQpXHJcblx0XHRcdFx0cmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0cmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdkYjogZ2V0JywgZXZlbnQpO1xyXG5cdFx0XHRcdHJlamVjdChldmVudCk7XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCByZXF1ZXN0ID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnRhYmxlLCBcInJlYWR3cml0ZVwiKVxyXG5cdFx0XHRcdC5vYmplY3RTdG9yZSh0aGlzLnRhYmxlKVxyXG5cdFx0XHRcdC5hZGQoZGF0YSk7XHJcblx0XHRcdHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZGI6IGFkZCcsIGV2ZW50LnRhcmdldC5yZXN1bHQpXHJcblx0XHRcdFx0cmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0cmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdkYjogYWRkJywgZXZlbnQpO1xyXG5cdFx0XHRcdHJlamVjdChldmVudCk7XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cHV0SXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zdCByZXF1ZXN0ID0gdGhpcy5kYi50cmFuc2FjdGlvbih0aGlzLnRhYmxlLCBcInJlYWR3cml0ZVwiKVxyXG5cdFx0XHRcdC5vYmplY3RTdG9yZSh0aGlzLnRhYmxlKVxyXG5cdFx0XHRcdC5wdXQoZGF0YSlcclxuXHRcdFx0cmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYjogcHV0JywgZXZlbnQudGFyZ2V0LnJlc3VsdClcclxuXHRcdFx0XHRyZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2RiOiBwdXQnLCBldmVudCk7XHJcblx0XHRcdFx0cmVqZWN0KGV2ZW50KTtcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRkZWxldGVJdGVtKGtleSkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgcmVxdWVzdCA9IHRoaXMuZGIudHJhbnNhY3Rpb24odGhpcy50YWJsZSwgXCJyZWFkd3JpdGVcIilcclxuXHRcdFx0XHQub2JqZWN0U3RvcmUodGhpcy50YWJsZSlcclxuXHRcdFx0XHQuZGVsZXRlKGtleSlcclxuXHRcdFx0cmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYjogZGVsZXRlJywga2V5KTtcclxuXHRcdFx0XHRyZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2RiOiBkZWxldGUnLCBldmVudCk7XHJcblx0XHRcdFx0cmVqZWN0KGV2ZW50KTtcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlUnNzUmVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuXHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0cnNzTGlzdDogW10sXHJcblx0XHRyc3M6IHt9LFxyXG5cdH1cclxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnN0IGluZGV4ZWREQiA9IG5ldyBJbmRleGVkREIoe1xyXG5cdFx0XHRuYW1lOiAndGVzdC1kZW1vJyxcclxuXHRcdFx0dmVyc2lvbjogMSxcclxuXHRcdFx0dGFibGU6IFwicnNzXCIsXHJcblx0XHRcdGtleTogXCJ1cmxcIixcclxuXHRcdFx0Y2FsbGJhY2s6IGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5nZXRBbGxGcm9tRGIoKTtcclxuXHRcdFx0XHRjb25zdCBsaXN0ID0gZGF0YS5zb3J0KChhLCBiKSA9PiBiLnVwZGF0ZVRpbWUgLSBhLnVwZGF0ZVRpbWUpO1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0cnNzTGlzdDogbGlzdCxcclxuXHRcdFx0XHRcdHJzczogbGlzdFswXSB8fCB7fSxcclxuXHRcdFx0XHRcdGl0ZW06IGxpc3RbMF0gJiYgbGlzdFswXS5pdGVtc1swXSB8fCB7fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmRiID0gaW5kZXhlZERCO1xyXG5cdFx0Y29uc29sZS5sb2coaW5kZXhlZERCKTtcclxuXHR9XHJcblx0Z2V0QWxsRnJvbURiID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGIuZ2V0QWxsKCk7XHJcblx0fVxyXG5cdGFkZEl0ZW1Ub0RiID0gKGRhdGEpID0+IHtcclxuXHRcdHJldHVybiB0aGlzLmRiLmFkZEl0ZW0oZGF0YSk7XHJcblx0fVxyXG5cdHB1dEl0ZW1Ub0RiID0gKGRhdGEpID0+IHtcclxuXHRcdHJldHVybiB0aGlzLmRiLnB1dEl0ZW0oZGF0YSk7XHJcblx0fVxyXG5cdGRlbGV0ZUl0ZW1Ub0RiID0gKGtleSkgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGIuZGVsZXRlSXRlbShrZXkpO1xyXG5cdH1cclxuXHRtZXJnZVJzcyhub3csIG9sZCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvbGQuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaXRlbSA9IG9sZC5pdGVtc1tpXTtcclxuXHRcdFx0aWYgKG5vdy5pdGVtcy5maW5kSW5kZXgoaSA9PiBpLmlkID09PSBpdGVtLmlkIHx8IGkubGluayA9PT0gaXRlbS5saW5rKSA8IDApIHtcclxuXHRcdFx0XHRub3cuaXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobm93Lml0ZW1zLmxlbmd0aCA+PSAyMDApIHJldHVyblxyXG5cdFx0fVxyXG5cdH1cclxuXHRjaGFuZ2VSc3MgPSBhc3luYyAocnNzLCBpbmRleCkgPT4ge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRyc3NMaXN0XHJcblx0XHR9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRvcGVuOiBmYWxzZSxcclxuXHRcdFx0cnNzXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IHJzc05ldyA9IGF3YWl0IHRoaXMudXBkYXRlUnNzKHJzcy51cmwpO1xyXG5cdFx0aWYgKHJzc05ldykge1xyXG5cdFx0XHRyc3NOZXcuaWNvbiA9IHJzcy5pY29uO1xyXG5cdFx0XHR0aGlzLm1lcmdlUnNzKHJzc05ldywgcnNzKTtcclxuXHRcdFx0dGhpcy5wdXRJdGVtVG9EYihyc3NOZXcpO1xyXG5cdFx0XHRyc3NMaXN0W2luZGV4XSA9IHJzc05ldztcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0cnNzTGlzdCxcclxuXHRcdFx0XHRyc3M6IHJzc05ld1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZVJzcyA9IGFzeW5jICh1cmwpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdC8vIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3Byb3h5P3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVybCkgKyAnJnR5cGU9eG1sJyk7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3Byb3h5P3VybD0nICsgdXJsKTtcclxuXHRcdFx0Y29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG5cdFx0XHRjb25zdCBkb2MgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHJlcy5kYXRhLCAndGV4dC94bWwnKTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0XHR1cGRhdGVUaW1lOiBEYXRlLm5vdygpLFxyXG5cdFx0XHRcdHVybCxcclxuXHRcdFx0XHR0aXRsZTogdGhpcy5jaGFyRmlsdGVyKGRvYy5xdWVyeVNlbGVjdG9yKCd0aXRsZScpLmlubmVySFRNTCksXHJcblx0XHRcdFx0aXRlbXM6IFtdLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAoZG9jLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdyc3MnKSB7XHJcblx0XHRcdFx0ZGF0YS5pdGVtcyA9IHRoaXMuZ2V0SXRlbXNGcm9tbVJzcyhkb2MucXVlcnlTZWxlY3RvckFsbCgnaXRlbScpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLml0ZW1zID0gdGhpcy5nZXRJdGVtc0Zyb21GZWVkKGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdlbnRyeScpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0SXRlbXNGcm9tbVJzcyhkb2NMaXN0KSB7XHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShkb2NMaXN0KS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3Qgb2JqID0ge1xyXG5cdFx0XHRcdFx0dGl0bGU6IHRoaXMuY2hhckZpbHRlcihpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJykuaW5uZXJIVE1MKSxcclxuXHRcdFx0XHRcdGxpbms6IHRoaXMuY2hhckZpbHRlcihpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKS5pbm5lckhUTUwpLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXMuY2hhckZpbHRlcihpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rlc2NyaXB0aW9uJykuaW5uZXJIVE1MKSxcclxuXHRcdFx0XHRcdGlkOiBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2d1aWQnKSA/IGl0ZW0ucXVlcnlTZWxlY3RvcignZ3VpZCcpLmlubmVySFRNTCA6IGl0ZW0ucXVlcnlTZWxlY3RvcignbGluaycpLmlubmVySFRNTCArIERhdGUubm93KCksXHJcblx0XHRcdFx0XHR1cGRhdGVUaW1lOiB0aGlzLmNoYXJGaWx0ZXIoaXRlbS5xdWVyeVNlbGVjdG9yKCdwdWJEYXRlJykgPyBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3B1YkRhdGUnKS5pbm5lckhUTUwgOiAnJyksXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBvYmpcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgaXRlbSk7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHRpdGxlOiAnJyxcclxuXHRcdFx0XHRcdGxpbms6ICcnLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICcnLFxyXG5cdFx0XHRcdFx0aWQ6ICcnLFxyXG5cdFx0XHRcdFx0dXBkYXRlVGltZTogJycsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0uaWQpXHJcblx0fVxyXG5cdGdldEl0ZW1zRnJvbUZlZWQoZG9jTGlzdCkge1xyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oZG9jTGlzdCkubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IG9iaiA9IHtcclxuXHRcdFx0XHRcdHRpdGxlOiB0aGlzLmNoYXJGaWx0ZXIoaXRlbS5xdWVyeVNlbGVjdG9yKCd0aXRsZScpLmlubmVySFRNTCksXHJcblx0XHRcdFx0XHRsaW5rOiBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2NvbnRlbnQnKS5pbm5lckhUTUwsXHJcblx0XHRcdFx0XHRpZDogaXRlbS5xdWVyeVNlbGVjdG9yKCdpZCcpLmlubmVySFRNTCxcclxuXHRcdFx0XHRcdHVwZGF0ZVRpbWU6IHRoaXMuY2hhckZpbHRlcihpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3VwZGF0ZWQnKS5pbm5lckhUTUwpLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlLCBpdGVtKTtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICcnLFxyXG5cdFx0XHRcdFx0bGluazogJycsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJycsXHJcblx0XHRcdFx0XHRpZDogJycsXHJcblx0XHRcdFx0XHR1cGRhdGVUaW1lOiAnJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pLmZpbHRlcihpdGVtID0+ICEhaXRlbS5pZClcclxuXHR9XHJcblx0YWRkUnNzTGlzdCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2V4cG9ydC5qc29uJyk7XHJcblx0XHRjb25zdCByc3NMaXN0ID0gcmVzLmRhdGE7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0cnNzTGlzdCxcclxuXHRcdFx0cnNzOiByc3NMaXN0WzBdXHJcblx0XHR9KTtcclxuXHRcdHJzc0xpc3QuZm9yRWFjaChkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5hZGRJdGVtVG9EYihkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRvbk9wZW5DaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0b3BlbjogIXRoaXMuc3RhdGUub3BlblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG9uSW1nRXJyb3IgPSAoZSwgb2JqKSA9PiB7XHJcblx0XHRjb25zdCBpbWcgPSBlLnRhcmdldDtcclxuXHRcdGlmIChpbWcuc3JjID09PSBvYmouaWNvbikge1xyXG5cdFx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKG9iai5pY29uKTtcclxuXHRcdFx0Y29uc3Qgc3JjID0gdXJsLnByb3RvY29sICsgXCIvL1wiICsgdXJsLmhvc3Quc2xpY2UodXJsLmhvc3QuaW5kZXhPZignLicpICsgMSkgKyAnL2Zhdmljb24uaWNvJztcclxuXHRcdFx0aW1nLnNyYyA9IHNyYztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGltZy5zcmMgPSAnL2ltZy9yc3MucG5nJztcclxuXHRcdH1cclxuXHR9XHJcblx0Y2hhckZpbHRlciA9IChodG1sKSA9PiB7XHJcblx0XHRyZXR1cm4gaHRtbC5yZXBsYWNlKC8mbHQ7fCZndDt8JmFtcDt8PCFcXFtDREFUQVxcW3xcXF1cXF0+fDxzY3JpcHQ+fDxcXC9zY3JpcHQ+L2lnLCBtYXRjaCA9PiB7XHJcblx0XHRcdGNvbnN0IG1hcCA9IHtcclxuXHRcdFx0XHQnJmx0Oyc6ICc8JyxcclxuXHRcdFx0XHQnJmd0Oyc6ICc+JyxcclxuXHRcdFx0XHQnJmFtcDsnOiAnJicsXHJcblx0XHRcdFx0JzxzY3JpcHQ+JzogJyZsdDtzY3JpcHQmZ3Q7JyxcclxuXHRcdFx0XHQnPC9zY3JpcHQ+JzogJyZsdDsvc2NyaXB0Jmd0OycsXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBtYXBbbWF0Y2hdIHx8ICcnO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0b3BlbixcclxuXHRcdFx0cnNzTGlzdCxcclxuXHRcdFx0cnNzXHJcblx0XHR9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IHNpZGViYXIgPSAoXHJcblx0XHRcdDxMaXN0PlxyXG5cdFx0XHRcdHtyc3NMaXN0Lm1hcCgoaXRlbSxpKSA9PiAoXHJcblx0XHRcdFx0XHQ8TGlzdC5JdGVtXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZVJzcyhpdGVtLGkpfVxyXG5cdFx0XHRcdFx0XHRrZXk9e2l0ZW0udXJsfVxyXG5cdFx0XHRcdFx0XHR0aHVtYj17PGltZyBzcmM9e2l0ZW0uaWNvbn0gY2xhc3NOYW1lPSdpY29uJyBvbkVycm9yPXsoZSkgPT4gdGhpcy5vbkltZ0Vycm9yKGUsIGl0ZW0pfSAvPn1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e2l0ZW0udGl0bGV9XHJcblx0XHRcdFx0XHQ8L0xpc3QuSXRlbT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9MaXN0PlxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxOYXZCYXJcclxuXHRcdFx0XHRcdGljb249ezxJY29uIHR5cGU9XCJlbGxpcHNpc1wiIC8+fVxyXG5cdFx0XHRcdFx0b25MZWZ0Q2xpY2s9e3RoaXMub25PcGVuQ2hhbmdlfVxyXG5cdFx0XHRcdFx0cmlnaHRDb250ZW50PXs8SWNvbiB0eXBlPVwicGx1c1wiIG9uQ2xpY2s9e3RoaXMuYWRkUnNzTGlzdH0vPn1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7cnNzLnRpdGxlfVxyXG5cdFx0XHRcdDwvTmF2QmFyPlxyXG5cdFx0XHRcdDxEcmF3ZXJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm15LWRyYXdlclwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBtaW5IZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfX1cclxuXHRcdFx0XHRcdHNpZGViYXI9e3NpZGViYXJ9XHJcblx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0b25PcGVuQ2hhbmdlPXt0aGlzLm9uT3BlbkNoYW5nZX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8QWNjb3JkaW9uIGFjY29yZGlvbiBvcGVuQW5pbWF0aW9uPXt7fX0gY2xhc3NOYW1lPVwibXktYWNjb3JkaW9uXCI+XHJcblx0XHRcdFx0XHRcdHtyc3MuaXRlbXMgJiYgcnNzLml0ZW1zLm1hcChpdGVtPT4oXHJcblx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5QYW5lbCBoZWFkZXI9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cInBhZFwiIGtleT17aXRlbS5saW5rfT5cclxuXHRcdFx0XHRcdFx0XHRcdHs8ZGl2IGlkPSdjb250ZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6dGhpcy5jaGFyRmlsdGVyKGl0ZW0uZGVzY3JpcHRpb24pIH19Lz59XHJcblx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uUGFuZWw+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9BY2NvcmRpb24+XHJcblx0XHRcdFx0PC9EcmF3ZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==