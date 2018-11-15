(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/dom-align/es/adjustForViewport.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-align/es/adjustForViewport.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].mix(pos, size);
}

/* harmony default export */ __webpack_exports__["default"] = (adjustForViewport);

/***/ }),

/***/ "./node_modules/dom-align/es/align/align.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/es/align/align.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/dom-align/es/utils.js");
/* harmony import */ var _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getVisibleRectForElement */ "./node_modules/dom-align/es/getVisibleRectForElement.js");
/* harmony import */ var _adjustForViewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adjustForViewport */ "./node_modules/dom-align/es/adjustForViewport.js");
/* harmony import */ var _getRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getRegion */ "./node_modules/dom-align/es/getRegion.js");
/* harmony import */ var _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getElFuturePos */ "./node_modules/dom-align/es/getElFuturePos.js");
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */







// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = Object(_getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_1__["default"])(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = Object(_getRegion__WEBPACK_IMPORTED_MODULE_3__["default"])(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, points, offset, targetOffset);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = Object(_adjustForViewport__WEBPACK_IMPORTED_MODULE_2__["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(source, 'width', _utils__WEBPACK_IMPORTED_MODULE_0__["default"].width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(source, 'height', _utils__WEBPACK_IMPORTED_MODULE_0__["default"].height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

/* harmony default export */ __webpack_exports__["default"] = (doAlign);
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

/***/ }),

/***/ "./node_modules/dom-align/es/align/alignElement.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-align/es/align/alignElement.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align */ "./node_modules/dom-align/es/align/align.js");
/* harmony import */ var _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getOffsetParent */ "./node_modules/dom-align/es/getOffsetParent.js");
/* harmony import */ var _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getVisibleRectForElement */ "./node_modules/dom-align/es/getVisibleRectForElement.js");
/* harmony import */ var _getRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getRegion */ "./node_modules/dom-align/es/getRegion.js");





function isOutOfVisibleRect(target) {
  var visibleRect = Object(_getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__["default"])(target);
  var targetRegion = Object(_getRegion__WEBPACK_IMPORTED_MODULE_3__["default"])(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = Object(_getRegion__WEBPACK_IMPORTED_MODULE_3__["default"])(target);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  return Object(_align__WEBPACK_IMPORTED_MODULE_0__["default"])(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__["default"];

alignElement.__getVisibleRectForElement = _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

/***/ }),

/***/ "./node_modules/dom-align/es/align/alignPoint.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-align/es/align/alignPoint.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/dom-align/es/utils.js");
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./align */ "./node_modules/dom-align/es/align/align.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX = void 0;
  var pageY = void 0;

  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(el);
  var win = doc.defaultView || doc.parentWindow;

  var scrollX = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollLeft(win);
  var scrollY = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollTop(win);
  var viewportWidth = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportWidth(win);
  var viewportHeight = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };

  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];

  return Object(_align__WEBPACK_IMPORTED_MODULE_1__["default"])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignPoint);

/***/ }),

/***/ "./node_modules/dom-align/es/getAlignOffset.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-align/es/getAlignOffset.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getAlignOffset);

/***/ }),

/***/ "./node_modules/dom-align/es/getElFuturePos.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-align/es/getElFuturePos.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAlignOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAlignOffset */ "./node_modules/dom-align/es/getAlignOffset.js");


function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = Object(_getAlignOffset__WEBPACK_IMPORTED_MODULE_0__["default"])(refNodeRegion, points[1]);
  var p2 = Object(_getAlignOffset__WEBPACK_IMPORTED_MODULE_0__["default"])(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getElFuturePos);

/***/ }),

/***/ "./node_modules/dom-align/es/getOffsetParent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-align/es/getOffsetParent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (getOffsetParent);

/***/ }),

/***/ "./node_modules/dom-align/es/getRegion.js":
/*!************************************************!*\
  !*** ./node_modules/dom-align/es/getRegion.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(node) && node.nodeType !== 9) {
    offset = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].offset(node);
    w = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].outerWidth(node);
    h = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].outerHeight(node);
  } else {
    var win = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindow(node);
    offset = {
      left: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollLeft(win),
      top: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollTop(win)
    };
    w = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportWidth(win);
    h = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/* harmony default export */ __webpack_exports__["default"] = (getRegion);

/***/ }),

/***/ "./node_modules/dom-align/es/getVisibleRectForElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/dom-align/es/getVisibleRectForElement.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");
/* harmony import */ var _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOffsetParent */ "./node_modules/dom-align/es/getOffsetParent.js");
/* harmony import */ var _isAncestorFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isAncestorFixed */ "./node_modules/dom-align/es/isAncestorFixed.js");




/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = Object(_getOffsetParent__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(el, 'overflow') !== 'visible') {
      var pos = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = Object(_getOffsetParent__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollLeft(win);
  var scrollY = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollTop(win);
  var viewportWidth = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportWidth(win);
  var viewportHeight = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (Object(_isAncestorFixed__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

/* harmony default export */ __webpack_exports__["default"] = (getVisibleRectForElement);

/***/ }),

/***/ "./node_modules/dom-align/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/dom-align/es/index.js ***!
  \********************************************/
/*! exports provided: alignElement, alignPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align_alignElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align/alignElement */ "./node_modules/dom-align/es/align/alignElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return _align_alignElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _align_alignPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./align/alignPoint */ "./node_modules/dom-align/es/align/alignPoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return _align_alignPoint__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = (_align_alignElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/dom-align/es/isAncestorFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-align/es/isAncestorFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isAncestorFixed; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


function isAncestorFixed(element) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/***/ }),

/***/ "./node_modules/dom-align/es/propertyUtils.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-align/es/propertyUtils.js ***!
  \****************************************************/
/*! exports provided: getTransformName, setTransitionProperty, getTransitionProperty, getTransformXY, setTransformXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformName", function() { return getTransformName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransitionProperty", function() { return setTransitionProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProperty", function() { return getTransitionProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformXY", function() { return getTransformXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransformXY", function() { return setTransformXY; });
var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}

/***/ }),

/***/ "./node_modules/dom-align/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/dom-align/es/utils.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propertyUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyUtils */ "./node_modules/dom-align/es/propertyUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["getTransitionProperty"])(elem) || '';
    Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["setTransitionProperty"])(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["setTransitionProperty"])(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function setTransform(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["getTransformXY"])(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["setTransformXY"])(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);

    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["getTransformName"])() in document.body.style) {
    setTransform(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/es/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");











function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Align, _Component);

  function Align() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        if (element) {
          result = Object(dom_align__WEBPACK_IMPORTED_MODULE_6__["alignElement"])(source, element, align);
        } else if (point) {
          result = Object(dom_align__WEBPACK_IMPORTED_MODULE_6__["alignPoint"])(source, point, align);
        }

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(_this, _ret);
  }

  Align.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  };

  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
      var sourceRect = source ? source.getBoundingClientRect() : null;

      if (prevProps.disabled) {
        reAlign = true;
      } else {
        var lastElement = getElement(prevProps.target);
        var currentElement = getElement(props.target);
        var lastPoint = getPoint(prevProps.target);
        var currentPoint = getPoint(props.target);

        if (Object(_util__WEBPACK_IMPORTED_MODULE_8__["isWindow"])(lastElement) && Object(_util__WEBPACK_IMPORTED_MODULE_8__["isWindow"])(currentElement)) {
          // Skip if is window
          reAlign = false;
        } else if (lastElement !== currentElement || // Element change
        lastElement && !currentElement && currentPoint || // Change from element to point
        lastPoint && currentPoint && currentElement || // Change from point to element
        currentPoint && !Object(_util__WEBPACK_IMPORTED_MODULE_8__["isSamePoint"])(lastPoint, currentPoint)) {
          reAlign = true;
        }

        // If source element size changed
        var preRect = this.sourceRect || {};
        if (!reAlign && source && (preRect.width !== sourceRect.width || preRect.height !== sourceRect.height)) {
          reAlign = true;
        }
      }

      this.sourceRect = sourceRect;
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  };

  Align.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stopMonitorWindowResize();
  };

  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = Object(_util__WEBPACK_IMPORTED_MODULE_8__["buffer"])(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(window, 'resize', this.bufferMonitor);
    }
  };

  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  };

  Align.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    if (childrenProps) {
      var newProps = {};
      var propList = Object.keys(childrenProps);
      propList.forEach(function (prop) {
        newProps[prop] = _this2.props[childrenProps[prop]];
      });

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, newProps);
    }
    return child;
  };

  return Align;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Align.propTypes = {
  childrenProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  align: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    clientX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    clientY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  monitorBufferTime: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  monitorWindowResize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


/* harmony default export */ __webpack_exports__["default"] = (Align);

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./node_modules/rc-align/es/Align.js");
// export this package's api


/* harmony default export */ __webpack_exports__["default"] = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
/*! exports provided: buffer, isSamePoint, isWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePoint", function() { return isSamePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}

function isWindow(obj) {
  return obj && typeof obj === 'object' && obj.window === obj;
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-trigger/es/LazyRenderBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var LazyRenderBox = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', props);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

LazyRenderBox.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/PopupInner.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");













var Popup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Popup, _Component);

  function Popup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = _utils__WEBPACK_IMPORTED_MODULE_11__["saveRef"].bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils__WEBPACK_IMPORTED_MODULE_11__["saveRef"].bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseDown = _props.onMouseDown,
        onTouchStart = _props.onTouchStart;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            _PopupInner__WEBPACK_IMPORTED_MODULE_9__["default"],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _PopupInner__WEBPACK_IMPORTED_MODULE_9__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Popup.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  getClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getRootDomNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  align: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  point: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({ stretchChecked: false });
      }
      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/PopupInner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");







var PopupInner = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PopupInner, _Component);

  function PopupInner() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PopupInner);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__["default"],
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

PopupInner.propTypes = {
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};


/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup.js");
















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_6__["createPortal"];

var contextTypes = {
  rcTrigger: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    onPopupMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
  })
};

var Trigger = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Trigger, _React$Component);

  function Trigger(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Trigger);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.getChildContext = function getChildContext() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  };

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__["default"],
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__["default"],
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Trigger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  action: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string)]),
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  hideAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  getPopupClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  onPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  afterPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]).isRequired,
  popupStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupPlacement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  builtinPlacements: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  popupAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  focusDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  blurDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getDocument: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskClosable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultPopupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  maskAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  alignPoint: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool // Maybe we can support user pass position in the future
};
Trigger.contextTypes = contextTypes;
Trigger.childContextTypes = contextTypes;
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onPopupMouseDown = function () {
    var _context$rcTrigger = _this5.context.rcTrigger,
        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

    _this5.hasPopupMouseDown = true;

    clearTimeout(_this5.mouseDownTimeout);
    _this5.mouseDownTimeout = setTimeout(function () {
      _this5.hasPopupMouseDown = false;
    }, 0);

    if (rcTrigger.onPopupMouseDown) {
      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }

    var target = event.target;
    var root = Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
    if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(root, target) && !_this5.hasPopupMouseDown) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    mouseProps.onMouseDown = _this5.onPopupMouseDown;
    mouseProps.onTouchStart = _this5.onPopupMouseDown;

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      _Popup__WEBPACK_IMPORTED_MODULE_13__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Trigger);

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/utils.js ***!
  \*********************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName, saveRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2FkanVzdEZvclZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvYWxpZ24vYWxpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9hbGlnbi9hbGlnbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9hbGlnbi9hbGlnblBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvZ2V0QWxpZ25PZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9nZXRFbEZ1dHVyZVBvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2dldFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvaXNBbmNlc3RvckZpeGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvcHJvcGVydHlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9BbGlnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvTGF6eVJlbmRlckJveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cElubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBNEI7O0FBRTVCO0FBQ0EsWUFBWSw4Q0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsOENBQUs7QUFDZDs7QUFFZSxnRkFBaUIsRTs7Ozs7Ozs7Ozs7O0FDM0NoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkI7QUFDc0M7QUFDZDtBQUNoQjtBQUNVOztBQUUvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsOENBQUs7QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRFQUFxQjtBQUM5QyxJQUFJLDRFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFFQUFjO0FBQ2pDLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFDQTs7QUFFZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUN6dEJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxTQUFTLG9FQUFRLEdBQUc7QUFDcEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBhZGp1c3RGb3JWaWV3cG9ydChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBvdmVyZmxvdykge1xuICB2YXIgcG9zID0gdXRpbHMuY2xvbmUoZWxGdXR1cmVQb3MpO1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogZWxSZWdpb24ud2lkdGgsXG4gICAgaGVpZ2h0OiBlbFJlZ2lvbi5oZWlnaHRcbiAgfTtcblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQpIHtcbiAgICBwb3MubGVmdCA9IHZpc2libGVSZWN0LmxlZnQ7XG4gIH1cblxuICAvLyBMZWZ0IGVkZ2UgaW5zaWRlIGFuZCByaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVXaWR0aCAmJiBwb3MubGVmdCA+PSB2aXNpYmxlUmVjdC5sZWZ0ICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgc2l6ZS53aWR0aCAtPSBwb3MubGVmdCArIHNpemUud2lkdGggLSB2aXNpYmxlUmVjdC5yaWdodDtcbiAgfVxuXG4gIC8vIFJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgLy8g5L+d6K+B5bem6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5bem6L6555WM5a+56b2QXG4gICAgcG9zLmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5yaWdodCAtIHNpemUud2lkdGgsIHZpc2libGVSZWN0LmxlZnQpO1xuICB9XG5cbiAgLy8gVG9wIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3ApIHtcbiAgICBwb3MudG9wID0gdmlzaWJsZVJlY3QudG9wO1xuICB9XG5cbiAgLy8gVG9wIGVkZ2UgaW5zaWRlIGFuZCBib3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuICBpZiAob3ZlcmZsb3cucmVzaXplSGVpZ2h0ICYmIHBvcy50b3AgPj0gdmlzaWJsZVJlY3QudG9wICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIHNpemUuaGVpZ2h0IC09IHBvcy50b3AgKyBzaXplLmhlaWdodCAtIHZpc2libGVSZWN0LmJvdHRvbTtcbiAgfVxuXG4gIC8vIEJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICAvLyDkv53or4HkuIrovrnnlYzlkozlj6/op4bljLrln5/kuIrovrnnlYzlr7npvZBcbiAgICBwb3MudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQsIHZpc2libGVSZWN0LnRvcCk7XG4gIH1cblxuICByZXR1cm4gdXRpbHMubWl4KHBvcywgc2l6ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkanVzdEZvclZpZXdwb3J0OyIsIi8qKlxuICogYWxpZ24gZG9tIG5vZGUgZmxleGlibHlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgZnJvbSAnLi4vZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50JztcbmltcG9ydCBhZGp1c3RGb3JWaWV3cG9ydCBmcm9tICcuLi9hZGp1c3RGb3JWaWV3cG9ydCc7XG5pbXBvcnQgZ2V0UmVnaW9uIGZyb20gJy4uL2dldFJlZ2lvbic7XG5pbXBvcnQgZ2V0RWxGdXR1cmVQb3MgZnJvbSAnLi4vZ2V0RWxGdXR1cmVQb3MnO1xuXG4vLyBodHRwOi8veWltaW5naGUuaXRleWUuY29tL2Jsb2cvMTEyNDcyMFxuXG5mdW5jdGlvbiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0O1xufVxuXG5mdW5jdGlvbiBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0ID4gdmlzaWJsZVJlY3QucmlnaHQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoIDwgdmlzaWJsZVJlY3QubGVmdDtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA+IHZpc2libGVSZWN0LmJvdHRvbSB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPCB2aXNpYmxlUmVjdC50b3A7XG59XG5cbmZ1bmN0aW9uIGZsaXAocG9pbnRzLCByZWcsIG1hcCkge1xuICB2YXIgcmV0ID0gW107XG4gIHV0aWxzLmVhY2gocG9pbnRzLCBmdW5jdGlvbiAocCkge1xuICAgIHJldC5wdXNoKHAucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbWFwW21dO1xuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZsaXBPZmZzZXQob2Zmc2V0LCBpbmRleCkge1xuICBvZmZzZXRbaW5kZXhdID0gLW9mZnNldFtpbmRleF07XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoc3RyLCBvZmZzZXRMZW4pIHtcbiAgdmFyIG4gPSB2b2lkIDA7XG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuICByZXR1cm4gbiB8fCAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbCkge1xuICBvZmZzZXRbMF0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFswXSwgZWwud2lkdGgpO1xuICBvZmZzZXRbMV0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFsxXSwgZWwuaGVpZ2h0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZWxcbiAqIEBwYXJhbSB0Z3RSZWdpb24g5Y+C54Wn6IqC54K55omA5Y2g55qE5Yy65Z+fOiB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9XG4gKiBAcGFyYW0gYWxpZ25cbiAqL1xuZnVuY3Rpb24gZG9BbGlnbihlbCwgdGd0UmVnaW9uLCBhbGlnbiwgaXNUZ3RSZWdpb25WaXNpYmxlKSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIG92ZXJmbG93ID0gYWxpZ24ub3ZlcmZsb3c7XG4gIHZhciBzb3VyY2UgPSBhbGlnbi5zb3VyY2UgfHwgZWw7XG4gIG9mZnNldCA9IFtdLmNvbmNhdChvZmZzZXQpO1xuICB0YXJnZXRPZmZzZXQgPSBbXS5jb25jYXQodGFyZ2V0T2Zmc2V0KTtcbiAgb3ZlcmZsb3cgPSBvdmVyZmxvdyB8fCB7fTtcbiAgdmFyIG5ld092ZXJmbG93Q2ZnID0ge307XG4gIHZhciBmYWlsID0gMDtcbiAgLy8g5b2T5YmN6IqC54K55Y+v5Lul6KKr5pS+572u55qE5pi+56S65Yy65Z+fXG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChzb3VyY2UpO1xuICAvLyDlvZPliY3oioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuICB2YXIgZWxSZWdpb24gPSBnZXRSZWdpb24oc291cmNlKTtcbiAgLy8g5bCGIG9mZnNldCDovazmjaLmiJDmlbDlgLzvvIzmlK/mjIHnmb7liIbmr5RcbiAgbm9ybWFsaXplT2Zmc2V0KG9mZnNldCwgZWxSZWdpb24pO1xuICBub3JtYWxpemVPZmZzZXQodGFyZ2V0T2Zmc2V0LCB0Z3RSZWdpb24pO1xuICAvLyDlvZPliY3oioLngrnlsIbopoHooqvmlL7nva7nmoTkvY3nva5cbiAgdmFyIGVsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7XG4gIC8vIOW9k+WJjeiKgueCueWwhuimgeaJgOWkhOeahOWMuuWfn1xuICB2YXIgbmV3RWxSZWdpb24gPSB1dGlscy5tZXJnZShlbFJlZ2lvbiwgZWxGdXR1cmVQb3MpO1xuXG4gIC8vIOWmguaenOWPr+inhuWMuuWfn+S4jeiDveWujOWFqOaUvue9ruW9k+WJjeiKgueCueaXtuWFgeiuuOiwg+aVtFxuICBpZiAodmlzaWJsZVJlY3QgJiYgKG92ZXJmbG93LmFkanVzdFggfHwgb3ZlcmZsb3cuYWRqdXN0WSkgJiYgaXNUZ3RSZWdpb25WaXNpYmxlKSB7XG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFgpIHtcbiAgICAgIC8vIOWmguaenOaoquWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBuZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1tscl0vaWcsIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlgY/np7vph4/kuZ/lj43kuItcbiAgICAgICAgdmFyIG5ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAwKTtcbiAgICAgICAgdmFyIG5ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAwKTtcbiAgICAgICAgdmFyIG5ld0VsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgbmV3UG9pbnRzLCBuZXdPZmZzZXQsIG5ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFgobmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBuZXdQb2ludHM7XG4gICAgICAgICAgb2Zmc2V0ID0gbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IG5ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RZKSB7XG4gICAgICAvLyDlpoLmnpznurXlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgX25ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW3RiXS9pZywge1xuICAgICAgICAgIHQ6ICdiJyxcbiAgICAgICAgICBiOiAndCdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuICAgICAgICB2YXIgX25ld09mZnNldCA9IGZsaXBPZmZzZXQob2Zmc2V0LCAxKTtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMSk7XG4gICAgICAgIHZhciBfbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBfbmV3UG9pbnRzLCBfbmV3T2Zmc2V0LCBfbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWmguaenOWksei0pe+8jOmHjeaWsOiuoeeul+W9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAgICAgdXRpbHMubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuICAgIHZhciBpc1N0aWxsRmFpbFggPSBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpO1xuICAgIHZhciBpc1N0aWxsRmFpbFkgPSBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpO1xuICAgIC8vIOajgOafpeWPjeS4i+WQjueahOS9jee9ruaYr+WQpuWPr+S7peaUvuS4i+S6hu+8jOWmguaenOS7jeeEtuaUvuS4jeS4i++8mlxuICAgIC8vIDEuIOWkjeWOn+S/ruaUuei/h+eahOWumuS9jeWPguaVsFxuICAgIGlmIChpc1N0aWxsRmFpbFggfHwgaXNTdGlsbEZhaWxZKSB7XG4gICAgICBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gICAgICBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICAgICAgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgICB9XG4gICAgLy8gMi4g5Y+q5pyJ5oyH5a6a5LqG5Y+v5Lul6LCD5pW05b2T5YmN5pa55ZCR5omN6LCD5pW0XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCA9IG92ZXJmbG93LmFkanVzdFggJiYgaXNTdGlsbEZhaWxYO1xuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFkgPSBvdmVyZmxvdy5hZGp1c3RZICYmIGlzU3RpbGxGYWlsWTtcblxuICAgIC8vIOehruWunuimgeiwg+aVtO+8jOeUmuiHs+WPr+iDveS8muiwg+aVtOmrmOW6puWuveW6plxuICAgIGlmIChuZXdPdmVyZmxvd0NmZy5hZGp1c3RYIHx8IG5ld092ZXJmbG93Q2ZnLmFkanVzdFkpIHtcbiAgICAgIG5ld0VsUmVnaW9uID0gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5lZWQganVkZ2UgdG8gaW4gY2FzZSBzZXQgZml4ZWQgd2l0aCBpbiBjc3Mgb24gaGVpZ2h0IGF1dG8gZWxlbWVudFxuICBpZiAobmV3RWxSZWdpb24ud2lkdGggIT09IGVsUmVnaW9uLndpZHRoKSB7XG4gICAgdXRpbHMuY3NzKHNvdXJjZSwgJ3dpZHRoJywgdXRpbHMud2lkdGgoc291cmNlKSArIG5ld0VsUmVnaW9uLndpZHRoIC0gZWxSZWdpb24ud2lkdGgpO1xuICB9XG5cbiAgaWYgKG5ld0VsUmVnaW9uLmhlaWdodCAhPT0gZWxSZWdpb24uaGVpZ2h0KSB7XG4gICAgdXRpbHMuY3NzKHNvdXJjZSwgJ2hlaWdodCcsIHV0aWxzLmhlaWdodChzb3VyY2UpICsgbmV3RWxSZWdpb24uaGVpZ2h0IC0gZWxSZWdpb24uaGVpZ2h0KTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzE5MFxuICAvLyDnm7jlr7nkuo7lsY/luZXkvY3nva7msqHlj5jvvIzogIwgbGVmdC90b3Ag5Y+Y5LqGXG4gIC8vIOS+i+WmgiA8ZGl2ICdyZWxhdGl2ZSc+PGVsIGFic29sdXRlPjwvZGl2PlxuICB1dGlscy5vZmZzZXQoc291cmNlLCB7XG4gICAgbGVmdDogbmV3RWxSZWdpb24ubGVmdCxcbiAgICB0b3A6IG5ld0VsUmVnaW9uLnRvcFxuICB9LCB7XG4gICAgdXNlQ3NzUmlnaHQ6IGFsaWduLnVzZUNzc1JpZ2h0LFxuICAgIHVzZUNzc0JvdHRvbTogYWxpZ24udXNlQ3NzQm90dG9tLFxuICAgIHVzZUNzc1RyYW5zZm9ybTogYWxpZ24udXNlQ3NzVHJhbnNmb3JtLFxuICAgIGlnbm9yZVNoYWtlOiBhbGlnbi5pZ25vcmVTaGFrZVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBvaW50czogcG9pbnRzLFxuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0LFxuICAgIG92ZXJmbG93OiBuZXdPdmVyZmxvd0NmZ1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkb0FsaWduO1xuLyoqXG4gKiAgMjAxMi0wNC0yNiB5aW1pbmdoZUBnbWFpbC5jb21cbiAqICAgLSDkvJjljJbmmbrog73lr7npvZDnrpfms5VcbiAqICAgLSDmhY7nlKggcmVzaXplWFhcbiAqXG4gKiAgMjAxMS0wNy0xMyB5aW1pbmdoZUBnbWFpbC5jb20gbm90ZTpcbiAqICAgLSDlop7liqDmmbrog73lr7npvZDvvIzku6Xlj4rlpKflsI/osIPmlbTpgInpoblcbiAqKi8iLCJpbXBvcnQgZG9BbGlnbiBmcm9tICcuL2FsaWduJztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgZnJvbSAnLi4vZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50JztcbmltcG9ydCBnZXRSZWdpb24gZnJvbSAnLi4vZ2V0UmVnaW9uJztcblxuZnVuY3Rpb24gaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQodGFyZ2V0KTtcbiAgdmFyIHRhcmdldFJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuXG4gIHJldHVybiAhdmlzaWJsZVJlY3QgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgKyB0YXJnZXRSZWdpb24ud2lkdGggPD0gdmlzaWJsZVJlY3QubGVmdCB8fCB0YXJnZXRSZWdpb24udG9wICsgdGFyZ2V0UmVnaW9uLmhlaWdodCA8PSB2aXNpYmxlUmVjdC50b3AgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgPj0gdmlzaWJsZVJlY3QucmlnaHQgfHwgdGFyZ2V0UmVnaW9uLnRvcCA+PSB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGFsaWduRWxlbWVudChlbCwgcmVmTm9kZSwgYWxpZ24pIHtcbiAgdmFyIHRhcmdldCA9IGFsaWduLnRhcmdldCB8fCByZWZOb2RlO1xuICB2YXIgcmVmTm9kZVJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuXG4gIHZhciBpc1RhcmdldE5vdE91dE9mVmlzaWJsZSA9ICFpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0KTtcblxuICByZXR1cm4gZG9BbGlnbihlbCwgcmVmTm9kZVJlZ2lvbiwgYWxpZ24sIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlKTtcbn1cblxuYWxpZ25FbGVtZW50Ll9fZ2V0T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50O1xuXG5hbGlnbkVsZW1lbnQuX19nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFsaWduRWxlbWVudDsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IGRvQWxpZ24gZnJvbSAnLi9hbGlnbic7XG5cbi8qKlxuICogYHRndFBvaW50YDogeyBwYWdlWCwgcGFnZVkgfSBvciB7IGNsaWVudFgsIGNsaWVudFkgfS5cbiAqIElmIGNsaWVudCBwb3NpdGlvbiBwcm92aWRlZCwgd2lsbCBpbnRlcm5hbCBjb252ZXJ0IHRvIHBhZ2UgcG9zaXRpb24uXG4gKi9cblxuZnVuY3Rpb24gYWxpZ25Qb2ludChlbCwgdGd0UG9pbnQsIGFsaWduKSB7XG4gIHZhciBwYWdlWCA9IHZvaWQgMDtcbiAgdmFyIHBhZ2VZID0gdm9pZCAwO1xuXG4gIHZhciBkb2MgPSB1dGlscy5nZXREb2N1bWVudChlbCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcblxuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG5cbiAgaWYgKCdwYWdlWCcgaW4gdGd0UG9pbnQpIHtcbiAgICBwYWdlWCA9IHRndFBvaW50LnBhZ2VYO1xuICB9IGVsc2Uge1xuICAgIHBhZ2VYID0gc2Nyb2xsWCArIHRndFBvaW50LmNsaWVudFg7XG4gIH1cblxuICBpZiAoJ3BhZ2VZJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VZID0gdGd0UG9pbnQucGFnZVk7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVkgPSBzY3JvbGxZICsgdGd0UG9pbnQuY2xpZW50WTtcbiAgfVxuXG4gIHZhciB0Z3RSZWdpb24gPSB7XG4gICAgbGVmdDogcGFnZVgsXG4gICAgdG9wOiBwYWdlWSxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfTtcblxuICB2YXIgcG9pbnRJblZpZXcgPSBwYWdlWCA+PSAwICYmIHBhZ2VYIDw9IHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoICYmIHBhZ2VZID49IDAgJiYgcGFnZVkgPD0gc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0O1xuXG4gIC8vIFByb3ZpZGUgZGVmYXVsdCB0YXJnZXQgcG9pbnRcbiAgdmFyIHBvaW50cyA9IFthbGlnbi5wb2ludHNbMF0sICdjYyddO1xuXG4gIHJldHVybiBkb0FsaWduKGVsLCB0Z3RSZWdpb24sIF9leHRlbmRzKHt9LCBhbGlnbiwgeyBwb2ludHM6IHBvaW50cyB9KSwgcG9pbnRJblZpZXcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGlnblBvaW50OyIsIi8qKlxuICog6I635Y+WIG5vZGUg5LiK55qEIGFsaWduIOWvuem9kOeCuSDnm7jlr7nkuo7pobXpnaLnmoTlnZDmoIdcbiAqL1xuXG5mdW5jdGlvbiBnZXRBbGlnbk9mZnNldChyZWdpb24sIGFsaWduKSB7XG4gIHZhciBWID0gYWxpZ24uY2hhckF0KDApO1xuICB2YXIgSCA9IGFsaWduLmNoYXJBdCgxKTtcbiAgdmFyIHcgPSByZWdpb24ud2lkdGg7XG4gIHZhciBoID0gcmVnaW9uLmhlaWdodDtcblxuICB2YXIgeCA9IHJlZ2lvbi5sZWZ0O1xuICB2YXIgeSA9IHJlZ2lvbi50b3A7XG5cbiAgaWYgKFYgPT09ICdjJykge1xuICAgIHkgKz0gaCAvIDI7XG4gIH0gZWxzZSBpZiAoViA9PT0gJ2InKSB7XG4gICAgeSArPSBoO1xuICB9XG5cbiAgaWYgKEggPT09ICdjJykge1xuICAgIHggKz0gdyAvIDI7XG4gIH0gZWxzZSBpZiAoSCA9PT0gJ3InKSB7XG4gICAgeCArPSB3O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGlnbk9mZnNldDsiLCJpbXBvcnQgZ2V0QWxpZ25PZmZzZXQgZnJvbSAnLi9nZXRBbGlnbk9mZnNldCc7XG5cbmZ1bmN0aW9uIGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KSB7XG4gIHZhciBwMSA9IGdldEFsaWduT2Zmc2V0KHJlZk5vZGVSZWdpb24sIHBvaW50c1sxXSk7XG4gIHZhciBwMiA9IGdldEFsaWduT2Zmc2V0KGVsUmVnaW9uLCBwb2ludHNbMF0pO1xuICB2YXIgZGlmZiA9IFtwMi5sZWZ0IC0gcDEubGVmdCwgcDIudG9wIC0gcDEudG9wXTtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IGVsUmVnaW9uLmxlZnQgLSBkaWZmWzBdICsgb2Zmc2V0WzBdIC0gdGFyZ2V0T2Zmc2V0WzBdLFxuICAgIHRvcDogZWxSZWdpb24udG9wIC0gZGlmZlsxXSArIG9mZnNldFsxXSAtIHRhcmdldE9mZnNldFsxXVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRFbEZ1dHVyZVBvczsiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICog5b6X5Yiw5Lya5a+86Ie05YWD57Sg5pi+56S65LiN5YWo55qE56WW5YWI5YWD57SgXG4gKi9cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcbiAgLypcbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O292ZXJmbG93OiBoaWRkZW5cIj5cbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIiBpZD1cImQ2XCI+XG4gICDlhYPntKAgNiDpq5ggMTAwcHgg5a69IDUwcHg8YnIvPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgICovXG4gIC8vIGVsZW1lbnQub2Zmc2V0UGFyZW50IGRvZXMgdGhlIHJpZ2h0IHRoaW5nIGluIGllNyBhbmQgYmVsb3cuIFJldHVybiBwYXJlbnQgd2l0aCBsYXlvdXQhXG4gIC8vICBJbiBvdGhlciBicm93c2VycyBpdCBvbmx5IGluY2x1ZGVzIGVsZW1lbnRzIHdpdGggcG9zaXRpb24gYWJzb2x1dGUsIHJlbGF0aXZlIG9yXG4gIC8vIGZpeGVkLCBub3QgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBzZXQgdG8gYXV0byBvciBzY3JvbGwuXG4gIC8vICAgICAgICBpZiAoVUEuaWUgJiYgaWVNb2RlIDwgOCkge1xuICAvLyAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gICAgICAgIH1cbiAgLy8g57uf5LiA55qEIG9mZnNldFBhcmVudCDmlrnms5VcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcbiAgdmFyIHNraXBTdGF0aWMgPSBwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnIHx8IHBvc2l0aW9uU3R5bGUgPT09ICdhYnNvbHV0ZSc7XG5cbiAgaWYgKCFza2lwU3RhdGljKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnID8gbnVsbCA6IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGZvciAocGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb25TdHlsZSAhPT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPZmZzZXRQYXJlbnQ7IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRSZWdpb24obm9kZSkge1xuICB2YXIgb2Zmc2V0ID0gdm9pZCAwO1xuICB2YXIgdyA9IHZvaWQgMDtcbiAgdmFyIGggPSB2b2lkIDA7XG4gIGlmICghdXRpbHMuaXNXaW5kb3cobm9kZSkgJiYgbm9kZS5ub2RlVHlwZSAhPT0gOSkge1xuICAgIG9mZnNldCA9IHV0aWxzLm9mZnNldChub2RlKTtcbiAgICB3ID0gdXRpbHMub3V0ZXJXaWR0aChub2RlKTtcbiAgICBoID0gdXRpbHMub3V0ZXJIZWlnaHQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHdpbiA9IHV0aWxzLmdldFdpbmRvdyhub2RlKTtcbiAgICBvZmZzZXQgPSB7XG4gICAgICBsZWZ0OiB1dGlscy5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbiksXG4gICAgICB0b3A6IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pXG4gICAgfTtcbiAgICB3ID0gdXRpbHMudmlld3BvcnRXaWR0aCh3aW4pO1xuICAgIGggPSB1dGlscy52aWV3cG9ydEhlaWdodCh3aW4pO1xuICB9XG4gIG9mZnNldC53aWR0aCA9IHc7XG4gIG9mZnNldC5oZWlnaHQgPSBoO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSZWdpb247IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgaXNBbmNlc3RvckZpeGVkIGZyb20gJy4vaXNBbmNlc3RvckZpeGVkJztcblxuLyoqXG4gKiDojrflvpflhYPntKDnmoTmmL7npLrpg6jliIbnmoTljLrln59cbiAqL1xuZnVuY3Rpb24gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IEluZmluaXR5LFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IEluZmluaXR5XG4gIH07XG4gIHZhciBlbCA9IGdldE9mZnNldFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cbiAgd2hpbGUgKGVsKSB7XG4gICAgLy8gY2xpZW50V2lkdGggaXMgemVybyBmb3IgaW5saW5lIGJsb2NrIGVsZW1lbnRzIGluIGllLlxuICAgIGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPT09IC0xIHx8IGVsLmNsaWVudFdpZHRoICE9PSAwKSAmJlxuICAgIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgdXRpbHMuY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTtcbiAgICAgIC8vIGFkZCBib3JkZXJcbiAgICAgIHBvcy5sZWZ0ICs9IGVsLmNsaWVudExlZnQ7XG4gICAgICBwb3MudG9wICs9IGVsLmNsaWVudFRvcDtcbiAgICAgIHZpc2libGVSZWN0LnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnRvcCwgcG9zLnRvcCk7XG4gICAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LFxuICAgICAgLy8gY29uc2lkZXIgYXJlYSB3aXRob3V0IHNjcm9sbEJhclxuICAgICAgcG9zLmxlZnQgKyBlbC5jbGllbnRXaWR0aCk7XG4gICAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHBvcy50b3AgKyBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHBvcy5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKGVsID09PSBib2R5IHx8IGVsID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBlbCA9IGdldE9mZnNldFBhcmVudChlbCk7XG4gIH1cblxuICAvLyBTZXQgZWxlbWVudCBwb3NpdGlvbiB0byBmaXhlZFxuICAvLyBtYWtlIHN1cmUgYWJzb2x1dGUgZWxlbWVudCBpdHNlbGYgZG9uJ3QgYWZmZWN0IGl0J3MgdmlzaWJsZSBhcmVhXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc2MDFcbiAgdmFyIG9yaWdpbmFsUG9zaXRpb24gPSBudWxsO1xuICBpZiAoIXV0aWxzLmlzV2luZG93KGVsZW1lbnQpICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvcmlnaW5hbFBvc2l0aW9uID0gZWxlbWVudC5zdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9XG4gIH1cblxuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIHZhciBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gIC8vIFJlc2V0IGVsZW1lbnQgcG9zaXRpb24gYWZ0ZXIgY2FsY3VsYXRlIHRoZSB2aXNpYmxlIGFyZWFcbiAgaWYgKGVsZW1lbnQuc3R5bGUpIHtcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gb3JpZ2luYWxQb3NpdGlvbjtcbiAgfVxuXG4gIGlmIChpc0FuY2VzdG9yRml4ZWQoZWxlbWVudCkpIHtcbiAgICAvLyBDbGlwIGJ5IHZpZXdwb3J0J3Mgc2l6ZS5cbiAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgc2Nyb2xsWCk7XG4gICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBzY3JvbGxZKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIC8vIENsaXAgYnkgZG9jdW1lbnQncyBzaXplLlxuICAgIHZhciBtYXhWaXNpYmxlV2lkdGggPSBNYXRoLm1heChkb2N1bWVudFdpZHRoLCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgbWF4VmlzaWJsZVdpZHRoKTtcblxuICAgIHZhciBtYXhWaXNpYmxlSGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnRIZWlnaHQsIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBtYXhWaXNpYmxlSGVpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlUmVjdC50b3AgPj0gMCAmJiB2aXNpYmxlUmVjdC5sZWZ0ID49IDAgJiYgdmlzaWJsZVJlY3QuYm90dG9tID4gdmlzaWJsZVJlY3QudG9wICYmIHZpc2libGVSZWN0LnJpZ2h0ID4gdmlzaWJsZVJlY3QubGVmdCA/IHZpc2libGVSZWN0IDogbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50OyIsImltcG9ydCBhbGlnbkVsZW1lbnQgZnJvbSAnLi9hbGlnbi9hbGlnbkVsZW1lbnQnO1xuaW1wb3J0IGFsaWduUG9pbnQgZnJvbSAnLi9hbGlnbi9hbGlnblBvaW50JztcblxuZXhwb3J0IHsgYWxpZ25FbGVtZW50LCBhbGlnblBvaW50IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFsaWduRWxlbWVudDsiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSB7XG4gIGlmICh1dGlscy5pc1dpbmRvdyhlbGVtZW50KSB8fCBlbGVtZW50Lm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gbnVsbDtcbiAgZm9yIChwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHk7IHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgdmFyIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0iLCJ2YXIgdmVuZG9yUHJlZml4ID0gdm9pZCAwO1xuXG52YXIganNDc3NNYXAgPSB7XG4gIFdlYmtpdDogJy13ZWJraXQtJyxcbiAgTW96OiAnLW1vei0nLFxuICAvLyBJRSBkaWQgaXQgd3JvbmcgYWdhaW4gLi4uXG4gIG1zOiAnLW1zLScsXG4gIE86ICctby0nXG59O1xuXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXgoKSB7XG4gIGlmICh2ZW5kb3JQcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZW5kb3JQcmVmaXg7XG4gIH1cbiAgdmVuZG9yUHJlZml4ID0gJyc7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZTtcbiAgdmFyIHRlc3RQcm9wID0gJ1RyYW5zZm9ybSc7XG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmVuZG9yUHJlZml4ID0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmVuZG9yUHJlZml4O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gZ2V0VmVuZG9yUHJlZml4KCkgKyAnVHJhbnNpdGlvblByb3BlcnR5JyA6ICd0cmFuc2l0aW9uUHJvcGVydHknO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gZ2V0VmVuZG9yUHJlZml4KCkgKyAnVHJhbnNmb3JtJyA6ICd0cmFuc2Zvcm0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2l0aW9uUHJvcGVydHknKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0obm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lKCk7XG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIGlmIChuYW1lICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCBub2RlLnN0eWxlW2dldFRyYW5zaXRpb25OYW1lKCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtWFkobm9kZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBtYXRyaXggPSB0cmFuc2Zvcm0ucmVwbGFjZSgvW14wLTlcXC0uLF0vZywgJycpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHsgeDogcGFyc2VGbG9hdChtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSwgMCksIHk6IHBhcnNlRmxvYXQobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0sIDApIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn1cblxudmFyIG1hdHJpeDJkID0gL21hdHJpeFxcKCguKilcXCkvO1xudmFyIG1hdHJpeDNkID0gL21hdHJpeDNkXFwoKC4qKVxcKS87XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2Zvcm1YWShub2RlLCB4eSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBhcnIgPSB2b2lkIDA7XG4gICAgdmFyIG1hdGNoMmQgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4MmQpO1xuICAgIGlmIChtYXRjaDJkKSB7XG4gICAgICBtYXRjaDJkID0gbWF0Y2gyZFsxXTtcbiAgICAgIGFyciA9IG1hdGNoMmQuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbNF0gPSB4eS54O1xuICAgICAgYXJyWzVdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCAnbWF0cml4KCcgKyBhcnIuam9pbignLCcpICsgJyknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoM2QgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4M2QpWzFdO1xuICAgICAgYXJyID0gbWF0Y2gzZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFyclsxMl0gPSB4eS54O1xuICAgICAgYXJyWzEzXSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ21hdHJpeDNkKCcgKyBhcnIuam9pbignLCcpICsgJyknKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0VHJhbnNmb3JtKG5vZGUsICd0cmFuc2xhdGVYKCcgKyB4eS54ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB4eS55ICsgJ3B4KSB0cmFuc2xhdGVaKDApJyk7XG4gIH1cbn0iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmltcG9ydCB7IHNldFRyYW5zaXRpb25Qcm9wZXJ0eSwgZ2V0VHJhbnNpdGlvblByb3BlcnR5LCBnZXRUcmFuc2Zvcm1YWSwgc2V0VHJhbnNmb3JtWFksIGdldFRyYW5zZm9ybU5hbWUgfSBmcm9tICcuL3Byb3BlcnR5VXRpbHMnO1xuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcblxudmFyIGdldENvbXB1dGVkU3R5bGVYID0gdm9pZCAwO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzQ4NTY1NC8zMDQwNjA1XG5mdW5jdGlvbiBmb3JjZVJlbGF5b3V0KGVsZW0pIHtcbiAgdmFyIG9yaWdpbmFsU3R5bGUgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZWxlbS5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gb3JpZ2luYWxTdHlsZTtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG4gIGlmICgodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSArICdweCc7XG4gICAgfVxuICAgIGVsLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWwsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3NpdGlvbihlbGVtKSB7XG4gIHZhciBib3ggPSB2b2lkIDA7XG4gIHZhciB4ID0gdm9pZCAwO1xuICB2YXIgeSA9IHZvaWQgMDtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgLy8g5qC55o2uIEdCUyDmnIDmlrDmlbDmja7vvIxBLUdyYWRlIEJyb3dzZXJzIOmDveW3suaUr+aMgSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qg5pa55rOV77yM5LiN55So5YaN6ICD6JmR5Lyg57uf55qE5a6e546w5pa55byPXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8g5rOo77yaalF1ZXJ5IOi/mOiAg+iZkeWHj+WOuyBkb2NFbGVtLmNsaWVudExlZnQvY2xpZW50VG9wXG4gIC8vIOS9hua1i+ivleWPkeeOsO+8jOi/meagt+WPjeiAjOS8muWvvOiHtOW9kyBodG1sIOWSjCBib2R5IOaciei+uei3nS/ovrnmoYbmoLflvI/ml7bvvIzojrflj5bnmoTlgLzkuI3mraPnoa5cbiAgLy8g5q2k5aSW77yMaWU2IOS8muW/veeVpSBodG1sIOeahCBtYXJnaW4g5YC877yM5bm46L+Q5Zyw5piv5rKh5pyJ6LCB5Lya5Y676K6+572uIGh0bWwg55qEIG1hcmdpblxuXG4gIHggPSBib3gubGVmdDtcbiAgeSA9IGJveC50b3A7XG5cbiAgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG5cbiAgLy8gaWUg5LiL5bqU6K+l5YeP5Y6756qX5Y+j55qE6L655qGG5ZCn77yM5q+V56uf6buY6K6kIGFic29sdXRlIOmDveaYr+ebuOWvueeql+WPo+WumuS9jeeahFxuICAvLyDnqpflj6PovrnmoYbmoIflh4bmmK/orr4gZG9jdW1lbnRFbGVtZW50ICxxdWlya3Mg5pe26K6+572uIGJvZHlcbiAgLy8g5pyA5aW956aB5q2i5ZyoIGJvZHkg5ZKMIGh0bWwg5LiK6L655qGGIO+8jOS9hiBpZSA8IDkgaHRtbCDpu5jorqTmnIkgMnB4IO+8jOWHj+WOu1xuICAvLyDkvYbmmK/pnZ4gaWUg5LiN5Y+v6IO96K6+572u56qX5Y+j6L655qGG77yMYm9keSBodG1sIOS5n+S4jeaYr+eql+WPoyAsaWUg5Y+v5Lul6YCa6L+HIGh0bWwsYm9keSDorr7nva5cbiAgLy8g5qCH5YeGIGllIOS4iyBkb2NFbGVtLmNsaWVudFRvcCDlsLHmmK8gYm9yZGVyLXRvcFxuICAvLyBpZTcgaHRtbCDljbPnqpflj6PovrnmoYbmlLnlj5jkuI3kuobjgILmsLjov5zkuLogMlxuICAvLyDkvYbmoIflh4YgZmlyZWZveC9jaHJvbWUvaWU5IOS4iyBkb2NFbGVtLmNsaWVudFRvcCDmmK/nqpflj6PovrnmoYbvvIzljbPkvb/orr7kuoYgYm9yZGVyLXRvcCDkuZ/kuLogMFxuXG4gIHggLT0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICB5IC09IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG5cbi8qKlxuICogQSBjcnVkZSB3YXkgb2YgZGV0ZXJtaW5pbmcgaWYgYW4gb2JqZWN0IGlzIGEgd2luZG93XG4gKiBAbWVtYmVyIHV0aWxcbiAqL1xuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8vIG11c3QgdXNlID09IGZvciBpZThcbiAgLyogZXNsaW50IGVxZXFlcTowICovXG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50KG5vZGUpIHtcbiAgaWYgKGlzV2luZG93KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUuZG9jdW1lbnQ7XG4gIH1cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjcykge1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNzO1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZ2V0RG9jdW1lbnQoZWxlbSk7XG4gIGNvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlIHx8IGQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhbCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFN0eWxlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIF9SRV9OVU1fTk9fUFggPSBuZXcgUmVnRXhwKCdeKCcgKyBSRV9OVU0gKyAnKSg/IXB4KVthLXolXSskJywgJ2knKTtcbnZhciBSRV9QT1MgPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgQ1VSUkVOVF9TVFlMRSA9ICdjdXJyZW50U3R5bGUnO1xudmFyIFJVTlRJTUVfU1RZTEUgPSAncnVudGltZVN0eWxlJztcbnZhciBMRUZUID0gJ2xlZnQnO1xudmFyIFBYID0gJ3B4JztcblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGVJRShlbGVtLCBuYW1lKSB7XG4gIC8vIGN1cnJlbnRTdHlsZSBtYXliZSBudWxsXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNTIzMS5hc3B4XG4gIHZhciByZXQgPSBlbGVtW0NVUlJFTlRfU1RZTEVdICYmIGVsZW1bQ1VSUkVOVF9TVFlMRV1bbmFtZV07XG5cbiAgLy8g5b2TIHdpZHRoL2hlaWdodCDorr7nva7kuLrnmb7liIbmr5Tml7bvvIzpgJrov4cgcGl4ZWxMZWZ0IOaWueW8j+i9rOaNoueahCB3aWR0aC9oZWlnaHQg5YC8XG4gIC8vIOS4gOW8gOWni+WwseWkhOeQhuS6hiEgQ1VTVE9NX1NUWUxFLmhlaWdodCxDVVNUT01fU1RZTEUud2lkdGggLGNzc0hvb2sg6Kej5YazQDIwMTEtMDgtMTlcbiAgLy8g5ZyoIGllIOS4i+S4jeWvue+8jOmcgOimgeebtOaOpeeUqCBvZmZzZXQg5pa55byPXG4gIC8vIGJvcmRlcldpZHRoIOetieWAvOS5n+aciemXrumimO+8jOS9huiAg+iZkeWIsCBib3JkZXJXaWR0aCDorr7kuLrnmb7liIbmr5TnmoTmpoLnjoflvojlsI/vvIzov5nph4zlsLHkuI3ogIPomZHkuoZcblxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcbiAgaWYgKF9SRV9OVU1fTk9fUFgudGVzdChyZXQpICYmICFSRV9QT1MudGVzdChuYW1lKSkge1xuICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIHZhciBsZWZ0ID0gc3R5bGVbTEVGVF07XG4gICAgdmFyIHJzTGVmdCA9IGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBwcmV2ZW50IGZsYXNoaW5nIG9mIGNvbnRlbnRcbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICBzdHlsZVtMRUZUXSA9IG5hbWUgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IHJldCB8fCAwO1xuICAgIHJldCA9IHN0eWxlLnBpeGVsTGVmdCArIFBYO1xuXG4gICAgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuICAgIHN0eWxlW0xFRlRdID0gbGVmdDtcblxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cbiAgcmV0dXJuIHJldCA9PT0gJycgPyAnYXV0bycgOiByZXQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnZXRDb21wdXRlZFN0eWxlWCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gX2dldENvbXB1dGVkU3R5bGUgOiBfZ2V0Q29tcHV0ZWRTdHlsZUlFO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXREaXJlY3Rpb24oZGlyLCBvcHRpb24pIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuIG9wdGlvbi51c2VDc3NSaWdodCA/ICdyaWdodCcgOiBkaXI7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbi51c2VDc3NCb3R0b20gPyAnYm90dG9tJyA6IGRpcjtcbn1cblxuZnVuY3Rpb24gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oZGlyKSB7XG4gIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgIHJldHVybiAncmlnaHQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiAnbGVmdCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAndG9wJykge1xuICAgIHJldHVybiAnYm90dG9tJztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdib3R0b20nKSB7XG4gICAgcmV0dXJuICd0b3AnO1xuICB9XG59XG5cbi8vIOiuvue9riBlbGVtIOebuOWvuSBlbGVtLm93bmVyRG9jdW1lbnQg55qE5Z2Q5qCHXG5mdW5jdGlvbiBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIC8vIHNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgaWYgKGNzcyhlbGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuICB2YXIgcHJlc2V0SCA9IC05OTk7XG4gIHZhciBwcmVzZXRWID0gLTk5OTtcbiAgdmFyIGhvcml6b250YWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbignbGVmdCcsIG9wdGlvbik7XG4gIHZhciB2ZXJ0aWNhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCd0b3AnLCBvcHRpb24pO1xuICB2YXIgb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihob3Jpem9udGFsUHJvcGVydHkpO1xuICB2YXIgb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24odmVydGljYWxQcm9wZXJ0eSk7XG5cbiAgaWYgKGhvcml6b250YWxQcm9wZXJ0eSAhPT0gJ2xlZnQnKSB7XG4gICAgcHJlc2V0SCA9IDk5OTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbFByb3BlcnR5ICE9PSAndG9wJykge1xuICAgIHByZXNldFYgPSA5OTk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsVHJhbnNpdGlvbiA9ICcnO1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgIG9yaWdpbmFsVHJhbnNpdGlvbiA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtKSB8fCAnJztcbiAgICBzZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSwgJ25vbmUnKTtcbiAgfVxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVtob3Jpem9udGFsUHJvcGVydHldID0gcHJlc2V0SCArICdweCc7XG4gIH1cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbdmVydGljYWxQcm9wZXJ0eV0gPSBwcmVzZXRWICsgJ3B4JztcbiAgfVxuICAvLyBmb3JjZSByZWxheW91dFxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuICB2YXIgb2xkID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKGtleSwgb3B0aW9uKTtcbiAgICAgIHZhciBwcmVzZXQgPSBrZXkgPT09ICdsZWZ0JyA/IHByZXNldEggOiBwcmVzZXRWO1xuICAgICAgdmFyIG9mZiA9IG9yaWdpbmFsT2Zmc2V0W2tleV0gLSBvbGRba2V5XTtcbiAgICAgIGlmIChkaXIgPT09IGtleSkge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgKyBvZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgLSBvZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNzcyhlbGVtLCBvcmlnaW5hbFN0eWxlKTtcbiAgLy8gZm9yY2UgcmVsYXlvdXRcbiAgZm9yY2VSZWxheW91dChlbGVtKTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgc2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0sIG9yaWdpbmFsVHJhbnNpdGlvbik7XG4gIH1cbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBfa2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgIHZhciBfZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKF9rZXksIG9wdGlvbik7XG4gICAgICB2YXIgX29mZiA9IG9mZnNldFtfa2V5XSAtIG9yaWdpbmFsT2Zmc2V0W19rZXldO1xuICAgICAgaWYgKF9rZXkgPT09IF9kaXIpIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSArIF9vZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdIC0gX29mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIHJldCk7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbGVtLCBvZmZzZXQpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxYWSA9IGdldFRyYW5zZm9ybVhZKGVsZW0pO1xuICB2YXIgcmVzdWx0WFkgPSB7IHg6IG9yaWdpbmFsWFkueCwgeTogb3JpZ2luYWxYWS55IH07XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueCA9IG9yaWdpbmFsWFkueCArIG9mZnNldC5sZWZ0IC0gb3JpZ2luYWxPZmZzZXQubGVmdDtcbiAgfVxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueSA9IG9yaWdpbmFsWFkueSArIG9mZnNldC50b3AgLSBvcmlnaW5hbE9mZnNldC50b3A7XG4gIH1cbiAgc2V0VHJhbnNmb3JtWFkoZWxlbSwgcmVzdWx0WFkpO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXQoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgaWYgKG9wdGlvbi5pZ25vcmVTaGFrZSkge1xuICAgIHZhciBvcmlPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG5cbiAgICB2YXIgb0xlZnQgPSBvcmlPZmZzZXQubGVmdC50b0ZpeGVkKDApO1xuICAgIHZhciBvVG9wID0gb3JpT2Zmc2V0LnRvcC50b0ZpeGVkKDApO1xuICAgIHZhciB0TGVmdCA9IG9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIHRUb3AgPSBvZmZzZXQudG9wLnRvRml4ZWQoMCk7XG5cbiAgICBpZiAob0xlZnQgPT09IHRMZWZ0ICYmIG9Ub3AgPT09IHRUb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9uLnVzZUNzc1JpZ2h0IHx8IG9wdGlvbi51c2VDc3NCb3R0b20pIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIGlmIChvcHRpb24udXNlQ3NzVHJhbnNmb3JtICYmIGdldFRyYW5zZm9ybU5hbWUoKSBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKSB7XG4gICAgc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRMZWZ0VG9wKGVsZW0sIG9mZnNldCwgb3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7XG5cbiAgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3AgPSB2b2lkIDA7XG4gIHZhciBqID0gdm9pZCAwO1xuICB2YXIgaSA9IHZvaWQgMDtcbiAgZm9yIChqID0gMDsgaiA8IHByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB2b2lkIDA7XG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSAnJyArIHByb3AgKyB3aGljaFtpXSArICdXaWR0aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIGNzc1Byb3ApKSB8fCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBkb21VdGlscyA9IHt9O1xuXG5lYWNoKFsnV2lkdGgnLCAnSGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRvbVV0aWxzWydkb2MnICsgbmFtZV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC8vIGZpcmVmb3ggY2hyb21lIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ8IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgLy8gaWUgc3RhbmRhcmQgbW9kZSA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ+IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgZC5kb2N1bWVudEVsZW1lbnRbJ3Njcm9sbCcgKyBuYW1lXSxcbiAgICAvLyBxdWlya3MgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IOacgOWkp+etieS6juWPr+inhueql+WPo+WkmuS4gOeCue+8n1xuICAgIGQuYm9keVsnc2Nyb2xsJyArIG5hbWVdLCBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXSA9IGZ1bmN0aW9uICh3aW4pIHtcbiAgICAvLyBwYyBicm93c2VyIGluY2x1ZGVzIHNjcm9sbGJhciBpbiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHZhciBwcm9wID0gJ2NsaWVudCcgKyBuYW1lO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTtcbiAgICAvLyDmoIflh4bmqKHlvI/lj5YgZG9jdW1lbnRFbGVtZW50XG4gICAgLy8gYmFja2NvbXBhdCDlj5YgYm9keVxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcblxuLypcbiDlvpfliLDlhYPntKDnmoTlpKflsI/kv6Hmga9cbiBAcGFyYW0gZWxlbVxuIEBwYXJhbSBuYW1lXG4gQHBhcmFtIHtTdHJpbmd9IFtleHRyYV0gICdwYWRkaW5nJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZ1xuICdib3JkZXInIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyXG4gJ21hcmdpbicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXIgKyBtYXJnaW5cbiAqL1xuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXgpIHtcbiAgdmFyIGV4dHJhID0gZXg7XG4gIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMudmlld3BvcnRXaWR0aChlbGVtKSA6IGRvbVV0aWxzLnZpZXdwb3J0SGVpZ2h0KGVsZW0pO1xuICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLmRvY1dpZHRoKGVsZW0pIDogZG9tVXRpbHMuZG9jSGVpZ2h0KGVsZW0pO1xuICB9XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuICB2YXIgYm9yZGVyQm94VmFsdWUgPSBuYW1lID09PSAnd2lkdGgnID8gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0sIGNvbXB1dGVkU3R5bGUpO1xuICB2YXIgY3NzQm94VmFsdWUgPSAwO1xuICBpZiAoYm9yZGVyQm94VmFsdWUgPT09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgLy8gRmFsbCBiYWNrIHRvIGNvbXB1dGVkIHRoZW4gdW4gY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG4gICAgaWYgKGNzc0JveFZhbHVlID09PSBudWxsIHx8IGNzc0JveFZhbHVlID09PSB1bmRlZmluZWQgfHwgTnVtYmVyKGNzc0JveFZhbHVlKSA8IDApIHtcbiAgICAgIGNzc0JveFZhbHVlID0gZWxlbS5zdHlsZVtuYW1lXSB8fCAwO1xuICAgIH1cbiAgICAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuICAgIGNzc0JveFZhbHVlID0gcGFyc2VGbG9hdChjc3NCb3hWYWx1ZSkgfHwgMDtcbiAgfVxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG4gIHZhciBib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3ggPSBib3JkZXJCb3hWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGlzQm9yZGVyQm94O1xuICB2YXIgdmFsID0gYm9yZGVyQm94VmFsdWUgfHwgY3NzQm94VmFsdWU7XG4gIGlmIChleHRyYSA9PT0gQ09OVEVOVF9JTkRFWCkge1xuICAgIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICAgIHJldHVybiB2YWwgLSBnZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlcicsICdwYWRkaW5nJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9IGVsc2UgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIGlmIChleHRyYSA9PT0gQk9SREVSX0lOREVYKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gdmFsICsgKGV4dHJhID09PSBQQURESU5HX0lOREVYID8gLWdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSA6IGdldFBCTVdpZHRoKGVsZW0sIFsnbWFyZ2luJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSk7XG4gIH1cbiAgcmV0dXJuIGNzc0JveFZhbHVlICsgZ2V0UEJNV2lkdGgoZWxlbSwgQk9YX01PREVMUy5zbGljZShleHRyYSksIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbn1cblxudmFyIGNzc1Nob3cgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuLy8gZml4ICMxMTkgOiBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xMTlcbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW47IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgdmFsID0gdm9pZCAwO1xuICB2YXIgZWxlbSA9IGFyZ3NbMF07XG4gIC8vIGluIGNhc2UgZWxlbSBpcyB3aW5kb3dcbiAgLy8gZWxlbS5vZmZzZXRXaWR0aCA9PT0gdW5kZWZpbmVkXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZWFjaChbJ3dpZHRoJywgJ2hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgZG9tVXRpbHNbJ291dGVyJyArIGZpcnN0XSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcblxuICBkb21VdGlsc1tuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCB2KSB7XG4gICAgdmFyIHZhbCA9IHY7XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICAgICAgICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1peCh0bywgZnJvbSkge1xuICBmb3IgKHZhciBpIGluIGZyb20pIHtcbiAgICBpZiAoZnJvbS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdG9baV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5cbnZhciB1dGlscyA9IHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUuZG9jdW1lbnQgJiYgbm9kZS5zZXRUaW1lb3V0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlO1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgfSxcblxuICBnZXREb2N1bWVudDogZ2V0RG9jdW1lbnQsXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUsIG9wdGlvbiB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcblxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjI7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59O1xuXG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfSBmcm9tICdkb20tYWxpZ24nO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAncmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lcic7XG5cbmltcG9ydCB7IGlzV2luZG93LCBidWZmZXIsIGlzU2FtZVBvaW50IH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gZ2V0RWxlbWVudChmdW5jKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyB8fCAhZnVuYykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBmdW5jKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50KHBvaW50KSB7XG4gIGlmICh0eXBlb2YgcG9pbnQgIT09ICdvYmplY3QnIHx8ICFwb2ludCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwb2ludDtcbn1cblxudmFyIEFsaWduID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFsaWduLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbGlnbigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFsaWduKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5mb3JjZUFsaWduID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wcy50YXJnZXQsXG4gICAgICAgICAgYWxpZ24gPSBfdGhpcyRwcm9wcy5hbGlnbixcbiAgICAgICAgICBvbkFsaWduID0gX3RoaXMkcHJvcHMub25BbGlnbjtcblxuICAgICAgaWYgKCFkaXNhYmxlZCAmJiB0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICAgICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQodGFyZ2V0KTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIHJlc3VsdCA9IGFsaWduRWxlbWVudChzb3VyY2UsIGVsZW1lbnQsIGFsaWduKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludCkge1xuICAgICAgICAgIHJlc3VsdCA9IGFsaWduUG9pbnQoc291cmNlLCBwb2ludCwgYWxpZ24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9uQWxpZ24pIHtcbiAgICAgICAgICBvbkFsaWduKHNvdXJjZSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQWxpZ24ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAvLyBpZiBwYXJlbnQgcmVmIG5vdCBhdHRhY2hlZCAuLi4uIHVzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxuICAgIHRoaXMuZm9yY2VBbGlnbigpO1xuICAgIGlmICghcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcmVBbGlnbiA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICB2YXIgc291cmNlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgc291cmNlUmVjdCA9IHNvdXJjZSA/IHNvdXJjZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGFzdEVsZW1lbnQgPSBnZXRFbGVtZW50KHByZXZQcm9wcy50YXJnZXQpO1xuICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBnZXRFbGVtZW50KHByb3BzLnRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0UG9pbnQgPSBnZXRQb2ludChwcmV2UHJvcHMudGFyZ2V0KTtcbiAgICAgICAgdmFyIGN1cnJlbnRQb2ludCA9IGdldFBvaW50KHByb3BzLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGlzV2luZG93KGxhc3RFbGVtZW50KSAmJiBpc1dpbmRvdyhjdXJyZW50RWxlbWVudCkpIHtcbiAgICAgICAgICAvLyBTa2lwIGlmIGlzIHdpbmRvd1xuICAgICAgICAgIHJlQWxpZ24gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0RWxlbWVudCAhPT0gY3VycmVudEVsZW1lbnQgfHwgLy8gRWxlbWVudCBjaGFuZ2VcbiAgICAgICAgbGFzdEVsZW1lbnQgJiYgIWN1cnJlbnRFbGVtZW50ICYmIGN1cnJlbnRQb2ludCB8fCAvLyBDaGFuZ2UgZnJvbSBlbGVtZW50IHRvIHBvaW50XG4gICAgICAgIGxhc3RQb2ludCAmJiBjdXJyZW50UG9pbnQgJiYgY3VycmVudEVsZW1lbnQgfHwgLy8gQ2hhbmdlIGZyb20gcG9pbnQgdG8gZWxlbWVudFxuICAgICAgICBjdXJyZW50UG9pbnQgJiYgIWlzU2FtZVBvaW50KGxhc3RQb2ludCwgY3VycmVudFBvaW50KSkge1xuICAgICAgICAgIHJlQWxpZ24gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc291cmNlIGVsZW1lbnQgc2l6ZSBjaGFuZ2VkXG4gICAgICAgIHZhciBwcmVSZWN0ID0gdGhpcy5zb3VyY2VSZWN0IHx8IHt9O1xuICAgICAgICBpZiAoIXJlQWxpZ24gJiYgc291cmNlICYmIChwcmVSZWN0LndpZHRoICE9PSBzb3VyY2VSZWN0LndpZHRoIHx8IHByZVJlY3QuaGVpZ2h0ICE9PSBzb3VyY2VSZWN0LmhlaWdodCkpIHtcbiAgICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNvdXJjZVJlY3QgPSBzb3VyY2VSZWN0O1xuICAgIH1cblxuICAgIGlmIChyZUFsaWduKSB7XG4gICAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiBzdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyTW9uaXRvciA9IGJ1ZmZlcih0aGlzLmZvcmNlQWxpZ24sIHRoaXMucHJvcHMubW9uaXRvckJ1ZmZlclRpbWUpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLmJ1ZmZlck1vbml0b3IpO1xuICAgIH1cbiAgfTtcblxuICBBbGlnbi5wcm90b3R5cGUuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiBzdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlck1vbml0b3IuY2xlYXIoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW5Qcm9wcyA9IF9wcm9wcy5jaGlsZHJlblByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZHJlblByb3BzKSB7XG4gICAgICB2YXIgbmV3UHJvcHMgPSB7fTtcbiAgICAgIHZhciBwcm9wTGlzdCA9IE9iamVjdC5rZXlzKGNoaWxkcmVuUHJvcHMpO1xuICAgICAgcHJvcExpc3QuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBuZXdQcm9wc1twcm9wXSA9IF90aGlzMi5wcm9wc1tjaGlsZHJlblByb3BzW3Byb3BdXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdQcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDtcbiAgfTtcblxuICByZXR1cm4gQWxpZ247XG59KENvbXBvbmVudCk7XG5cbkFsaWduLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW5Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWxpZ246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjbGllbnRYOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWVudFk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVk6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcbiAgb25BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1vbml0b3JCdWZmZXJUaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb25pdG9yV2luZG93UmVzaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbkFsaWduLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFyZ2V0OiBmdW5jdGlvbiB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSxcbiAgbW9uaXRvckJ1ZmZlclRpbWU6IDUwLFxuICBtb25pdG9yV2luZG93UmVzaXplOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFsaWduOyIsIi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbmltcG9ydCBBbGlnbiBmcm9tICcuL0FsaWduJztcblxuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlcihmbiwgbXMpIHtcbiAgdmFyIHRpbWVyID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJGbigpIHtcbiAgICBjbGVhcigpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmbiwgbXMpO1xuICB9XG5cbiAgYnVmZmVyRm4uY2xlYXIgPSBjbGVhcjtcblxuICByZXR1cm4gYnVmZmVyRm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVQb2ludChwcmV2LCBuZXh0KSB7XG4gIGlmIChwcmV2ID09PSBuZXh0KSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCFwcmV2IHx8ICFuZXh0KSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCdwYWdlWCcgaW4gbmV4dCAmJiAncGFnZVknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5wYWdlWCA9PT0gbmV4dC5wYWdlWCAmJiBwcmV2LnBhZ2VZID09PSBuZXh0LnBhZ2VZO1xuICB9XG5cbiAgaWYgKCdjbGllbnRYJyBpbiBuZXh0ICYmICdjbGllbnRZJyBpbiBuZXh0KSB7XG4gICAgcmV0dXJuIHByZXYuY2xpZW50WCA9PT0gbmV4dC5jbGllbnRYICYmIHByZXYuY2xpZW50WSA9PT0gbmV4dC5jbGllbnRZO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLndpbmRvdyA9PT0gb2JqO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIExhenlSZW5kZXJCb3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGF6eVJlbmRlckJveCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLmhpZGRlbkNsYXNzTmFtZSB8fCBuZXh0UHJvcHMudmlzaWJsZTtcbiAgfTtcblxuICBMYXp5UmVuZGVyQm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZSA9IF9wcm9wcy5oaWRkZW5DbGFzc05hbWUsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hpZGRlbkNsYXNzTmFtZScsICd2aXNpYmxlJ10pO1xuXG4gICAgaWYgKGhpZGRlbkNsYXNzTmFtZSB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgPiAxKSB7XG4gICAgICBpZiAoIXZpc2libGUgJiYgaGlkZGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBoaWRkZW5DbGFzc05hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oQ29tcG9uZW50KTtcblxuTGF6eVJlbmRlckJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW5DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQWxpZ24gZnJvbSAncmMtYWxpZ24nO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgUG9wdXBJbm5lciBmcm9tICcuL1BvcHVwSW5uZXInO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcbmltcG9ydCB7IHNhdmVSZWYgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFBvcHVwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3B1cChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3B1cCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFVzZWQgZm9yIHN0cmV0Y2hcbiAgICAgIHN0cmV0Y2hDaGVja2VkOiBmYWxzZSxcbiAgICAgIHRhcmdldFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICB0YXJnZXRIZWlnaHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlUG9wdXBSZWYgPSBzYXZlUmVmLmJpbmQoX3RoaXMsICdwb3B1cEluc3RhbmNlJyk7XG4gICAgX3RoaXMuc2F2ZUFsaWduUmVmID0gc2F2ZVJlZi5iaW5kKF90aGlzLCAnYWxpZ25JbnN0YW5jZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBvcHVwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSB0aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIHRoaXMuc2V0U3RyZXRjaFNpemUoKTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2V0U3RyZXRjaFNpemUoKTtcbiAgfTtcblxuICAvLyBSZWNvcmQgc2l6ZSBpZiBzdHJldGNoIG5lZWRlZFxuXG5cbiAgUG9wdXAucHJvdG90eXBlLmdldFBvcHVwRG9tTm9kZSA9IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5wb3B1cEluc3RhbmNlKTtcbiAgfTtcblxuICAvLyBgdGFyZ2V0YCBvbiBgcmMtYWxpZ25gIGNhbiBhY2NlcHQgYXMgYSBmdW5jdGlvbiB0byBnZXQgdGhlIGJpbmQgZWxlbWVudCBvciBhIHBvaW50LlxuICAvLyByZWY6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLWFsaWduXG5cblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0TWFza1RyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gZ2V0TWFza1RyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uO1xuICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgcHJvcHMuYW5pbWF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLmdldENsYXNzTmFtZSA9IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmVmaXhDbHMgKyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArICcgJyArIGN1cnJlbnRBbGlnbkNsYXNzTmFtZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHNhdmVQb3B1cFJlZiA9IHRoaXMuc2F2ZVBvcHVwUmVmO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzdHJldGNoQ2hlY2tlZCA9IF9zdGF0ZS5zdHJldGNoQ2hlY2tlZCxcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gX3N0YXRlLnRhcmdldEhlaWdodCxcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBfc3RhdGUudGFyZ2V0V2lkdGg7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFsaWduID0gX3Byb3BzLmFsaWduLFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ24gPSBfcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfcHJvcHMuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICBzdHJldGNoID0gX3Byb3BzLnN0cmV0Y2gsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRG93biA9IF9wcm9wcy5vbk1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaFN0YXJ0ID0gX3Byb3BzLm9uVG91Y2hTdGFydDtcblxuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSh0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSB8fCBnZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICB2YXIgaGlkZGVuQ2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1oaWRkZW4nO1xuXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNpemVTdHlsZSA9IHt9O1xuICAgIGlmIChzdHJldGNoKSB7XG4gICAgICAvLyBTdHJldGNoIHdpdGggdGFyZ2V0XG4gICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCdoZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLmhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5IZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLm1pbkhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ3dpZHRoJykgIT09IC0xKSB7XG4gICAgICAgIHNpemVTdHlsZS53aWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbldpZHRoJykgIT09IC0xKSB7XG4gICAgICAgIHNpemVTdHlsZS5taW5XaWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxheSBmb3JjZSBhbGlnbiB0byBtYWtlcyB1aSBzbW9vdGhcbiAgICAgIGlmICghc3RyZXRjaENoZWNrZWQpIHtcbiAgICAgICAgc2l6ZVN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5hbGlnbkluc3RhbmNlKSB7XG4gICAgICAgICAgICBfdGhpczIuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3U3R5bGUgPSBfZXh0ZW5kcyh7fSwgc2l6ZVN0eWxlLCBzdHlsZSwgdGhpcy5nZXRaSW5kZXhTdHlsZSgpKTtcblxuICAgIHZhciBwb3B1cElubmVyUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgcmVmOiBzYXZlUG9wdXBSZWYsXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgICBzdHlsZTogbmV3U3R5bGVcbiAgICB9O1xuICAgIGlmIChkZXN0cm95UG9wdXBPbkhpZGUpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBbmltYXRlLFxuICAgICAgICB7XG4gICAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHZpc2libGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFsaWduLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRBbGlnblRhcmdldCgpLFxuICAgICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgICAgcmVmOiB0aGlzLnNhdmVBbGlnblJlZixcbiAgICAgICAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgICBvbkFsaWduOiB0aGlzLm9uQWxpZ25cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQb3B1cElubmVyLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICkgOiBudWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQW5pbWF0ZSxcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgICBzaG93UHJvcDogJ3hWaXNpYmxlJ1xuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEFsaWduLFxuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldEFsaWduVGFyZ2V0KCksXG4gICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgIHJlZjogdGhpcy5zYXZlQWxpZ25SZWYsXG4gICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICB4VmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICBjaGlsZHJlblByb3BzOiB7IHZpc2libGU6ICd4VmlzaWJsZScgfSxcbiAgICAgICAgICBkaXNhYmxlZDogIXZpc2libGUsXG4gICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgIG9uQWxpZ246IHRoaXMub25BbGlnblxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBvcHVwSW5uZXIsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBoaWRkZW5DbGFzc05hbWVcbiAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRaSW5kZXhTdHlsZSA9IGZ1bmN0aW9uIGdldFpJbmRleFN0eWxlKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZS56SW5kZXggPSBwcm9wcy56SW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0TWFza0VsZW1lbnQgPSBmdW5jdGlvbiBnZXRNYXNrRWxlbWVudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXNrRWxlbWVudCA9IHZvaWQgMDtcbiAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgdmFyIG1hc2tUcmFuc2l0aW9uID0gdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7XG4gICAgICAgIHN0eWxlOiB0aGlzLmdldFpJbmRleFN0eWxlKCksXG4gICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzaycsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrLWhpZGRlbicsXG4gICAgICAgIHZpc2libGU6IHByb3BzLnZpc2libGVcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hc2tUcmFuc2l0aW9uKSB7XG4gICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICAgICAgc2hvd1Byb3A6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXNrRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuZ2V0TWFza0VsZW1lbnQoKSxcbiAgICAgIHRoaXMuZ2V0UG9wdXBFbGVtZW50KClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cDtcbn0oQ29tcG9uZW50KTtcblxuUG9wdXAucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGdldENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICBnZXRSb290RG9tTm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsaWduOiBQcm9wVHlwZXMuYW55LFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHBvaW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2VYOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VZOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gIHRoaXMub25BbGlnbiA9IGZ1bmN0aW9uIChwb3B1cERvbU5vZGUsIGFsaWduKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBjdXJyZW50QWxpZ25DbGFzc05hbWUgPSBwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pO1xuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81NlxuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy83OVxuICAgIGlmIChfdGhpczMuY3VycmVudEFsaWduQ2xhc3NOYW1lICE9PSBjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICAgIF90aGlzMy5jdXJyZW50QWxpZ25DbGFzc05hbWUgPSBjdXJyZW50QWxpZ25DbGFzc05hbWU7XG4gICAgICBwb3B1cERvbU5vZGUuY2xhc3NOYW1lID0gX3RoaXMzLmdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpO1xuICAgIH1cbiAgICBwcm9wcy5vbkFsaWduKHBvcHVwRG9tTm9kZSwgYWxpZ24pO1xuICB9O1xuXG4gIHRoaXMuc2V0U3RyZXRjaFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9wcm9wczIgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIHN0cmV0Y2ggPSBfcHJvcHMyLnN0cmV0Y2gsXG4gICAgICAgIGdldFJvb3REb21Ob2RlID0gX3Byb3BzMi5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgdmlzaWJsZSA9IF9wcm9wczIudmlzaWJsZTtcbiAgICB2YXIgX3N0YXRlMiA9IF90aGlzMy5zdGF0ZSxcbiAgICAgICAgc3RyZXRjaENoZWNrZWQgPSBfc3RhdGUyLnN0cmV0Y2hDaGVja2VkLFxuICAgICAgICB0YXJnZXRIZWlnaHQgPSBfc3RhdGUyLnRhcmdldEhlaWdodCxcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBfc3RhdGUyLnRhcmdldFdpZHRoO1xuXG5cbiAgICBpZiAoIXN0cmV0Y2ggfHwgIXZpc2libGUpIHtcbiAgICAgIGlmIChzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBzdHJldGNoQ2hlY2tlZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRlbGUgPSBnZXRSb290RG9tTm9kZSgpO1xuICAgIGlmICghJGVsZSkgcmV0dXJuO1xuXG4gICAgdmFyIGhlaWdodCA9ICRlbGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9ICRlbGUub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAodGFyZ2V0SGVpZ2h0ICE9PSBoZWlnaHQgfHwgdGFyZ2V0V2lkdGggIT09IHdpZHRoIHx8ICFzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgc3RyZXRjaENoZWNrZWQ6IHRydWUsXG4gICAgICAgIHRhcmdldEhlaWdodDogaGVpZ2h0LFxuICAgICAgICB0YXJnZXRXaWR0aDogd2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmdldFRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMy5wcm9wcy5nZXRSb290RG9tTm9kZSgpO1xuICB9O1xuXG4gIHRoaXMuZ2V0QWxpZ25UYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvaW50ID0gX3RoaXMzLnByb3BzLnBvaW50O1xuXG4gICAgaWYgKHBvaW50KSB7XG4gICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczMuZ2V0VGFyZ2V0RWxlbWVudDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5cbnZhciBQb3B1cElubmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwSW5uZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwSW5uZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwSW5uZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQb3B1cElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIGlmICghcHJvcHMudmlzaWJsZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZURvd246IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHByb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF6eVJlbmRlckJveCxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctY29udGVudCcsIHZpc2libGU6IHByb3BzLnZpc2libGUgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cElubmVyO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cElubmVyLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cElubmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjb250YWlucyBmcm9tICdyYy11dGlsL2VzL0RvbS9jb250YWlucyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCBDb250YWluZXJSZW5kZXIgZnJvbSAncmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXInO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyYy11dGlsL2VzL1BvcnRhbCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHsgZ2V0QWxpZ25Gcm9tUGxhY2VtZW50LCBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiByZXR1cm5FbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Eb2N1bWVudCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbn1cblxudmFyIEFMTF9IQU5ETEVSUyA9IFsnb25DbGljaycsICdvbk1vdXNlRG93bicsICdvblRvdWNoU3RhcnQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNvbnRleHRNZW51J107XG5cbnZhciBJU19SRUFDVF8xNiA9ICEhY3JlYXRlUG9ydGFsO1xuXG52YXIgY29udGV4dFR5cGVzID0ge1xuICByY1RyaWdnZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb25Qb3B1cE1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgfSlcbn07XG5cbnZhciBUcmlnZ2VyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyaWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyaWdnZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gdm9pZCAwO1xuICAgIGlmICgncG9wdXBWaXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5wb3B1cFZpc2libGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMuZGVmYXVsdFBvcHVwVmlzaWJsZTtcbiAgICB9XG5cbiAgICBfdGhpcy5wcmV2UG9wdXBWaXNpYmxlID0gcG9wdXBWaXNpYmxlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByY1RyaWdnZXI6IHtcbiAgICAgICAgb25Qb3B1cE1vdXNlRG93bjogdGhpcy5vblBvcHVwTW91c2VEb3duXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBBTExfSEFORExFUlMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgX3RoaXMyWydmaXJlJyArIGhdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmZpcmVFdmVudHMoaCwgZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30sIHtcbiAgICAgIHBvcHVwVmlzaWJsZTogdGhpcy5zdGF0ZS5wb3B1cFZpc2libGVcbiAgICB9KTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhfcmVmKSB7XG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IF9yZWYucG9wdXBWaXNpYmxlO1xuXG4gICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoXywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UoKSB7XG4gICAgICBpZiAocHJldlN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgIHByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKHN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChudWxsLCB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHRoaXMucHJldlBvcHVwVmlzaWJsZSA9IHByZXZTdGF0ZS5wb3B1cFZpc2libGU7XG5cbiAgICAvLyBXZSBtdXN0IGxpc3RlbiB0byBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAsIGVkZ2UgY2FzZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81ODA0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9jYWxlbmRhci9pc3N1ZXMvMjUwXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81MFxuICAgIGlmIChzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIHZhciBjdXJyZW50RG9jdW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciAmJiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpKSB7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudCA9IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgLy8gYWx3YXlzIGhpZGUgb24gbW9iaWxlXG4gICAgICBpZiAoIXRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCBkb2N1bWVudCBpcyBzY3JvbGxpbmcuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgIH1cbiAgICAgIC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgd2luZG93IGlzIGJsdXIuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnYmx1cicsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZ2V0UG9wdXBEb21Ob2RlID0gZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgIC8vIGZvciB0ZXN0XG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudCAmJiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5nZXRQb3B1cEFsaWduID0gZnVuY3Rpb24gZ2V0UG9wdXBBbGlnbigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBBbGlnbixcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcblxuICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgcmV0dXJuIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcG9wdXBQbGFjZW1lbnQsIHBvcHVwQWxpZ24pO1xuICAgIH1cbiAgICByZXR1cm4gcG9wdXBBbGlnbjtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHBvcHVwVmlzaWJsZSAgICBTaG93IG9yIG5vdCB0aGUgcG9wdXAgZWxlbWVudFxuICAgKiBAcGFyYW0gZXZlbnQgICAgICAgICAgIFN5bnRoZXRpY0V2ZW50LCB1c2VkIGZvciBgcG9pbnRBbGlnbmBcbiAgICovXG4gIFRyaWdnZXIucHJvdG90eXBlLnNldFBvcHVwVmlzaWJsZSA9IGZ1bmN0aW9uIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUsIGV2ZW50KSB7XG4gICAgdmFyIGFsaWduUG9pbnQgPSB0aGlzLnByb3BzLmFsaWduUG9pbnQ7XG5cblxuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgaWYgKCEoJ3BvcHVwVmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblBvcHVwVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyByZWNvcmQgdGhlIHBvaW50IHBvc2l0aW9uIHNpbmNlIG1vdXNlRW50ZXJEZWxheSB3aWxsIGRlbGF5IHRoZSBzaG93XG4gICAgaWYgKGFsaWduUG9pbnQgJiYgZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0UG9pbnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5kZWxheVNldFBvcHVwVmlzaWJsZSA9IGZ1bmN0aW9uIGRlbGF5U2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGRlbGF5UywgZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBkZWxheSA9IGRlbGF5UyAqIDEwMDA7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHZhciBwb2ludCA9IGV2ZW50ID8geyBwYWdlWDogZXZlbnQucGFnZVgsIHBhZ2VZOiBldmVudC5wYWdlWSB9IDogbnVsbDtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIHBvaW50KTtcbiAgICAgICAgX3RoaXMzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNsZWFyRGVsYXlUaW1lciA9IGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lcigpIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNsZWFyT3V0c2lkZUhhbmRsZXIgPSBmdW5jdGlvbiBjbGVhck91dHNpZGVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEucmVtb3ZlKCk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMikge1xuICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNyZWF0ZVR3b0NoYWlucyA9IGZ1bmN0aW9uIGNyZWF0ZVR3b0NoYWlucyhldmVudCkge1xuICAgIHZhciBjaGlsZFByb3MgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGNoaWxkUHJvc1tldmVudF0gJiYgcHJvcHNbZXZlbnRdKSB7XG4gICAgICByZXR1cm4gdGhpc1snZmlyZScgKyBldmVudF07XG4gICAgfVxuICAgIHJldHVybiBjaGlsZFByb3NbZXZlbnRdIHx8IHByb3BzW2V2ZW50XTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0NsaWNrVG9TaG93ID0gZnVuY3Rpb24gaXNDbGlja1RvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzLmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wcy5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzQ29udGV4dE1lbnVUb1Nob3cgPSBmdW5jdGlvbiBpc0NvbnRleHRNZW51VG9TaG93KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzMi5hY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMyLnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNDbGlja1RvSGlkZSA9IGZ1bmN0aW9uIGlzQ2xpY2tUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMzLmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczMuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc01vdXNlRW50ZXJUb1Nob3cgPSBmdW5jdGlvbiBpc01vdXNlRW50ZXJUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM0LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczQuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdtb3VzZUVudGVyJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzTW91c2VMZWF2ZVRvSGlkZSA9IGZ1bmN0aW9uIGlzTW91c2VMZWF2ZVRvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczUuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzNS5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ21vdXNlTGVhdmUnKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNGb2N1c1RvU2hvdyA9IGZ1bmN0aW9uIGlzRm9jdXNUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM2LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczYuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0JsdXJUb0hpZGUgPSBmdW5jdGlvbiBpc0JsdXJUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM3LmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczcuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdibHVyJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmZvcmNlUG9wdXBBbGlnbiA9IGZ1bmN0aW9uIGZvcmNlUG9wdXBBbGlnbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgJiYgdGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5hbGlnbkluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmZpcmVFdmVudHMgPSBmdW5jdGlvbiBmaXJlRXZlbnRzKHR5cGUsIGUpIHtcbiAgICB2YXIgY2hpbGRDYWxsYmFjayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHNbdHlwZV07XG4gICAgaWYgKGNoaWxkQ2FsbGJhY2spIHtcbiAgICAgIGNoaWxkQ2FsbGJhY2soZSk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMucHJvcHNbdHlwZV07XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlKTtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHM4LmNoaWxkcmVuLFxuICAgICAgICBmb3JjZVJlbmRlciA9IF9wcm9wczguZm9yY2VSZW5kZXIsXG4gICAgICAgIGFsaWduUG9pbnQgPSBfcHJvcHM4LmFsaWduUG9pbnQsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczguY2xhc3NOYW1lO1xuXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7IGtleTogJ3RyaWdnZXInIH07XG5cbiAgICBpZiAodGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMub25Db250ZXh0TWVudTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ29udGV4dE1lbnUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMub25DbGljaztcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ2xpY2snKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZURvd24nKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uVG91Y2hTdGFydCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlcjtcbiAgICAgIGlmIChhbGlnblBvaW50KSB7XG4gICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRW50ZXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VMZWF2ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkgfHwgdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uRm9jdXMnKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQmx1cicpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2hpbGQgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICAgIGlmIChjaGlsZHJlbkNsYXNzTmFtZSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5jbGFzc05hbWUgPSBjaGlsZHJlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgdmFyIHRyaWdnZXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuXG4gICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRhaW5lclJlbmRlcixcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICB2aXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgYXV0b01vdW50OiBmYWxzZSxcbiAgICAgICAgICBmb3JjZVJlbmRlcjogZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50OiB0aGlzLmdldENvbXBvbmVudCxcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSBfcmVmMi5yZW5kZXJDb21wb25lbnQ7XG5cbiAgICAgICAgICBfdGhpczQucmVuZGVyQ29tcG9uZW50ID0gcmVuZGVyQ29tcG9uZW50O1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBwb3J0YWwgPSB2b2lkIDA7XG4gICAgLy8gcHJldmVudCB1bm1vdW50aW5nIGFmdGVyIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAocG9wdXBWaXNpYmxlIHx8IHRoaXMuX2NvbXBvbmVudCB8fCBmb3JjZVJlbmRlcikge1xuICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUG9ydGFsLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAncG9ydGFsJyxcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIGRpZFVwZGF0ZTogdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RyaWdnZXIsIHBvcnRhbF07XG4gIH07XG5cbiAgcmV0dXJuIFRyaWdnZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRyaWdnZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBoaWRlQWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmFueSxcbiAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvcHVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvcHVwUGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidWlsdGluUGxhY2VtZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBwb3B1cEFuaW1hdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9jdXNEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgYmx1ckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldERvY3VtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9yY2VSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25Qb3B1cEFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgcG9wdXBBbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFBvcHVwVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1hc2tUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBtYXNrQW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnblBvaW50OiBQcm9wVHlwZXMuYm9vbCAvLyBNYXliZSB3ZSBjYW4gc3VwcG9ydCB1c2VyIHBhc3MgcG9zaXRpb24gaW4gdGhlIGZ1dHVyZVxufTtcblRyaWdnZXIuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuVHJpZ2dlci5jaGlsZENvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblRyaWdnZXIuZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdyYy10cmlnZ2VyLXBvcHVwJyxcbiAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IHJldHVybkVtcHR5U3RyaW5nLFxuICBnZXREb2N1bWVudDogcmV0dXJuRG9jdW1lbnQsXG4gIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgb25Qb3B1cEFsaWduOiBub29wLFxuICBwb3B1cENsYXNzTmFtZTogJycsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGZvY3VzRGVsYXk6IDAsXG4gIGJsdXJEZWxheTogMC4xNSxcbiAgcG9wdXBTdHlsZToge30sXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gIHBvcHVwQWxpZ246IHt9LFxuICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgbWFzazogZmFsc2UsXG4gIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgYWN0aW9uOiBbXSxcbiAgc2hvd0FjdGlvbjogW10sXG4gIGhpZGVBY3Rpb246IFtdXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHRoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbW91c2VFbnRlckRlbGF5ID0gX3RoaXM1LnByb3BzLm1vdXNlRW50ZXJEZWxheTtcblxuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlRW50ZXInLCBlKTtcbiAgICBfdGhpczUuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgbW91c2VFbnRlckRlbGF5LCBtb3VzZUVudGVyRGVsYXkgPyBudWxsIDogZSk7XG4gIH07XG5cbiAgdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uTW91c2VNb3ZlJywgZSk7XG4gICAgX3RoaXM1LnNldFBvaW50KGUpO1xuICB9O1xuXG4gIHRoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Nb3VzZUxlYXZlJywgZSk7XG4gICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzNS5jbGVhckRlbGF5VGltZXIoKTtcbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvcHVsbC8xM1xuICAgIC8vIHJlYWN0IGJ1Zz9cbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ICYmICFlLnJlbGF0ZWRUYXJnZXQuc2V0VGltZW91dCAmJiBfdGhpczUuX2NvbXBvbmVudCAmJiBfdGhpczUuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUgJiYgY29udGFpbnMoX3RoaXM1Ll9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKCksIGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfTtcblxuICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbkZvY3VzJywgZSk7XG4gICAgLy8gaW5jYXNlIGZvY3VzaW4gYW5kIGZvY3Vzb3V0XG4gICAgX3RoaXM1LmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmIChfdGhpczUuaXNGb2N1c1RvU2hvdygpKSB7XG4gICAgICBfdGhpczUuZm9jdXNUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIF90aGlzNS5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBfdGhpczUucHJvcHMuZm9jdXNEZWxheSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlRG93bicsIGUpO1xuICAgIF90aGlzNS5wcmVDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Ub3VjaFN0YXJ0JywgZSk7XG4gICAgX3RoaXM1LnByZVRvdWNoVGltZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbkJsdXInLCBlKTtcbiAgICBfdGhpczUuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKF90aGlzNS5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMuYmx1ckRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQ29udGV4dE1lbnUnLCBlKTtcbiAgICBfdGhpczUuc2V0UG9wdXBWaXNpYmxlKHRydWUsIGUpO1xuICB9O1xuXG4gIHRoaXMub25Db250ZXh0TWVudUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczUuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICBfdGhpczUuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQ2xpY2snLCBldmVudCk7XG4gICAgLy8gZm9jdXMgd2lsbCB0cmlnZ2VyIGNsaWNrXG4gICAgaWYgKF90aGlzNS5mb2N1c1RpbWUpIHtcbiAgICAgIHZhciBwcmVUaW1lID0gdm9pZCAwO1xuICAgICAgaWYgKF90aGlzNS5wcmVDbGlja1RpbWUgJiYgX3RoaXM1LnByZVRvdWNoVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gTWF0aC5taW4oX3RoaXM1LnByZUNsaWNrVGltZSwgX3RoaXM1LnByZVRvdWNoVGltZSk7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNS5wcmVDbGlja1RpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IF90aGlzNS5wcmVDbGlja1RpbWU7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNS5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IF90aGlzNS5wcmVUb3VjaFRpbWU7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMocHJlVGltZSAtIF90aGlzNS5mb2N1c1RpbWUpIDwgMjApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXM1LmZvY3VzVGltZSA9IDA7XG4gICAgfVxuICAgIF90aGlzNS5wcmVDbGlja1RpbWUgPSAwO1xuICAgIF90aGlzNS5wcmVUb3VjaFRpbWUgPSAwO1xuICAgIGlmIChldmVudCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdmFyIG5leHRWaXNpYmxlID0gIV90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgaWYgKF90aGlzNS5pc0NsaWNrVG9IaWRlKCkgJiYgIW5leHRWaXNpYmxlIHx8IG5leHRWaXNpYmxlICYmIF90aGlzNS5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIF90aGlzNS5zZXRQb3B1cFZpc2libGUoIV90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vblBvcHVwTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY29udGV4dCRyY1RyaWdnZXIgPSBfdGhpczUuY29udGV4dC5yY1RyaWdnZXIsXG4gICAgICAgIHJjVHJpZ2dlciA9IF9jb250ZXh0JHJjVHJpZ2dlciA9PT0gdW5kZWZpbmVkID8ge30gOiBfY29udGV4dCRyY1RyaWdnZXI7XG5cbiAgICBfdGhpczUuaGFzUG9wdXBNb3VzZURvd24gPSB0cnVlO1xuXG4gICAgY2xlYXJUaW1lb3V0KF90aGlzNS5tb3VzZURvd25UaW1lb3V0KTtcbiAgICBfdGhpczUubW91c2VEb3duVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1Lmhhc1BvcHVwTW91c2VEb3duID0gZmFsc2U7XG4gICAgfSwgMCk7XG5cbiAgICBpZiAocmNUcmlnZ2VyLm9uUG9wdXBNb3VzZURvd24pIHtcbiAgICAgIHJjVHJpZ2dlci5vblBvcHVwTW91c2VEb3duLmFwcGx5KHJjVHJpZ2dlciwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM1LnByb3BzLm1hc2sgJiYgIV90aGlzNS5wcm9wcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciByb290ID0gZmluZERPTU5vZGUoX3RoaXM1KTtcbiAgICBpZiAoIWNvbnRhaW5zKHJvb3QsIHRhcmdldCkgJiYgIV90aGlzNS5oYXNQb3B1cE1vdXNlRG93bikge1xuICAgICAgX3RoaXM1LmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0Um9vdERvbU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZpbmRET01Ob2RlKF90aGlzNSk7XG4gIH07XG5cbiAgdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IGZ1bmN0aW9uIChhbGlnbikge1xuICAgIHZhciBjbGFzc05hbWUgPSBbXTtcbiAgICB2YXIgX3Byb3BzOSA9IF90aGlzNS5wcm9wcyxcbiAgICAgICAgcG9wdXBQbGFjZW1lbnQgPSBfcHJvcHM5LnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF9wcm9wczkuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczkucHJlZml4Q2xzLFxuICAgICAgICBhbGlnblBvaW50ID0gX3Byb3BzOS5hbGlnblBvaW50LFxuICAgICAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IF9wcm9wczkuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ247XG5cbiAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGFsaWduUG9pbnQpKTtcbiAgICB9XG4gICAgaWYgKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKSB7XG4gICAgICBjbGFzc05hbWUucHVzaChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgfTtcblxuICB0aGlzLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzMTAgPSBfdGhpczUucHJvcHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczEwLnByZWZpeENscyxcbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gX3Byb3BzMTAuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF9wcm9wczEwLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMxMC5hY3Rpb24sXG4gICAgICAgIG9uUG9wdXBBbGlnbiA9IF9wcm9wczEwLm9uUG9wdXBBbGlnbixcbiAgICAgICAgcG9wdXBBbmltYXRpb24gPSBfcHJvcHMxMC5wb3B1cEFuaW1hdGlvbixcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IF9wcm9wczEwLnBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwU3R5bGUgPSBfcHJvcHMxMC5wb3B1cFN0eWxlLFxuICAgICAgICBtYXNrID0gX3Byb3BzMTAubWFzayxcbiAgICAgICAgbWFza0FuaW1hdGlvbiA9IF9wcm9wczEwLm1hc2tBbmltYXRpb24sXG4gICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IF9wcm9wczEwLm1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgekluZGV4ID0gX3Byb3BzMTAuekluZGV4LFxuICAgICAgICBwb3B1cCA9IF9wcm9wczEwLnBvcHVwLFxuICAgICAgICBzdHJldGNoID0gX3Byb3BzMTAuc3RyZXRjaCxcbiAgICAgICAgYWxpZ25Qb2ludCA9IF9wcm9wczEwLmFsaWduUG9pbnQ7XG4gICAgdmFyIF9zdGF0ZSA9IF90aGlzNS5zdGF0ZSxcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gX3N0YXRlLnBvcHVwVmlzaWJsZSxcbiAgICAgICAgcG9pbnQgPSBfc3RhdGUucG9pbnQ7XG5cblxuICAgIHZhciBhbGlnbiA9IF90aGlzNS5nZXRQb3B1cEFsaWduKCk7XG5cbiAgICB2YXIgbW91c2VQcm9wcyA9IHt9O1xuICAgIGlmIChfdGhpczUuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUVudGVyID0gX3RoaXM1Lm9uUG9wdXBNb3VzZUVudGVyO1xuICAgIH1cbiAgICBpZiAoX3RoaXM1LmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICBtb3VzZVByb3BzLm9uTW91c2VMZWF2ZSA9IF90aGlzNS5vblBvcHVwTW91c2VMZWF2ZTtcbiAgICB9XG5cbiAgICBtb3VzZVByb3BzLm9uTW91c2VEb3duID0gX3RoaXM1Lm9uUG9wdXBNb3VzZURvd247XG4gICAgbW91c2VQcm9wcy5vblRvdWNoU3RhcnQgPSBfdGhpczUub25Qb3B1cE1vdXNlRG93bjtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUG9wdXAsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgdmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICBwb2ludDogYWxpZ25Qb2ludCAmJiBwb2ludCxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgb25BbGlnbjogb25Qb3B1cEFsaWduLFxuICAgICAgICBhbmltYXRpb246IHBvcHVwQW5pbWF0aW9uLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IF90aGlzNS5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnblxuICAgICAgfSwgbW91c2VQcm9wcywge1xuICAgICAgICBzdHJldGNoOiBzdHJldGNoLFxuICAgICAgICBnZXRSb290RG9tTm9kZTogX3RoaXM1LmdldFJvb3REb21Ob2RlLFxuICAgICAgICBzdHlsZTogcG9wdXBTdHlsZSxcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgekluZGV4OiB6SW5kZXgsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICBtYXNrQW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uLFxuICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgcmVmOiBfdGhpczUuc2F2ZVBvcHVwXG4gICAgICB9KSxcbiAgICAgIHR5cGVvZiBwb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IHBvcHVwKCkgOiBwb3B1cFxuICAgICk7XG4gIH07XG5cbiAgdGhpcy5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuXG4gICAgdmFyIHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gTWFrZSBzdXJlIGRlZmF1bHQgcG9wdXAgY29udGFpbmVyIHdpbGwgbmV2ZXIgY2F1c2Ugc2Nyb2xsYmFyIGFwcGVhcmluZ1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNDFcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUudG9wID0gJzAnO1xuICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIG1vdW50Tm9kZSA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyID8gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIoZmluZERPTU5vZGUoX3RoaXM1KSkgOiBwcm9wcy5nZXREb2N1bWVudCgpLmJvZHk7XG4gICAgbW91bnROb2RlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gIH07XG5cbiAgdGhpcy5zZXRQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHZhciBhbGlnblBvaW50ID0gX3RoaXM1LnByb3BzLmFsaWduUG9pbnQ7XG5cbiAgICBpZiAoIWFsaWduUG9pbnQgfHwgIXBvaW50KSByZXR1cm47XG5cbiAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgcG9pbnQ6IHtcbiAgICAgICAgcGFnZVg6IHBvaW50LnBhZ2VYLFxuICAgICAgICBwYWdlWTogcG9pbnQucGFnZVlcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXM1LnByZXZQb3B1cFZpc2libGUgIT09IF90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIF90aGlzNS5wcm9wcy5hZnRlclBvcHVwVmlzaWJsZUNoYW5nZShfdGhpczUuc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zYXZlUG9wdXAgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIF90aGlzNS5fY29tcG9uZW50ID0gbm9kZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmZ1bmN0aW9uIGlzUG9pbnRzRXEoYTEsIGEyLCBpc0FsaWduUG9pbnQpIHtcbiAgaWYgKGlzQWxpZ25Qb2ludCkge1xuICAgIHJldHVybiBhMVswXSA9PT0gYTJbMF07XG4gIH1cbiAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBsYWNlbWVudFN0ciwgYWxpZ24pIHtcbiAgdmFyIGJhc2VBbGlnbiA9IGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudFN0cl0gfHwge307XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYmFzZUFsaWduLCBhbGlnbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduLCBpc0FsaWduUG9pbnQpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgZm9yICh2YXIgcGxhY2VtZW50IGluIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgaWYgKGJ1aWx0aW5QbGFjZW1lbnRzLmhhc093blByb3BlcnR5KHBsYWNlbWVudCkpIHtcbiAgICAgIGlmIChpc1BvaW50c0VxKGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudF0ucG9pbnRzLCBwb2ludHMsIGlzQWxpZ25Qb2ludCkpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeENscyArICctcGxhY2VtZW50LScgKyBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYobmFtZSwgY29tcG9uZW50KSB7XG4gIHRoaXNbbmFtZV0gPSBjb21wb25lbnQ7XG59IiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==