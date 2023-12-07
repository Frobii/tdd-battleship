(self["webpackChunktdd_battleship"] = self["webpackChunktdd_battleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: rgba(0, 0, 0, 0.795);
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    margin: 0px;
}

a {
    color: white;
    text-decoration: inherit;
}

a:hover {
    text-decoration: underline;
}

.header {
    width: 100vw;
    text-align: center;
    padding-top: 20px;
    font-size: 3rem;
}

.footer {
    width: 100vw;
    text-align: center;
    padding-bottom: 10px;
    font-size: 1rem;
}

.game-area {
    padding-top: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
}

.frame {
    width: 30rem;
    height: 45rem;
    border-radius: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.friendly-frame {
    margin-right: 20px;
}

.frame.highlight-frame {
    background-color: rgba(128, 128, 128, 0.541);
}

.board-title {
    text-align: center;
    padding-top: 10px;
    font-size: 1.5rem;
}

.grid {
    border: white solid 2px;
    height: 28rem;
    width: 28rem;
    margin-top: 10px;
}

.grid-row {
    width: 100%;
    height: 10%;
    display: flex;
}

.grid-item {
    height: 100%;
    width: 10%;
}

.turn-info {
    height: 10%;
    width: calc(28rem + 4px); /* account for grid border width */
}

.stats {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: calc(28rem + 4px);
    height: 20%;
}

.grid-item {
    border: 0.5px solid grey;
}

.miss {
    background-color: turquoise;
}

.enemy-hit {
    background-color: red;
}

.friendly-hit {
    background-color: red;
}



/* Report on ship status (floating/sunk) to the 
LEFT of the ship name (unlike the example page) */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,wBAAwB,EAAE,kCAAkC;AAChE;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;;;AAIA;iDACiD","sourcesContent":["body {\n    background-color: rgba(0, 0, 0, 0.795);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    margin: 0px;\n}\n\na {\n    color: white;\n    text-decoration: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.header {\n    width: 100vw;\n    text-align: center;\n    padding-top: 20px;\n    font-size: 3rem;\n}\n\n.footer {\n    width: 100vw;\n    text-align: center;\n    padding-bottom: 10px;\n    font-size: 1rem;\n}\n\n.game-area {\n    padding-top: 60px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.frame {\n    width: 30rem;\n    height: 45rem;\n    border-radius: 1.1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.friendly-frame {\n    margin-right: 20px;\n}\n\n.frame.highlight-frame {\n    background-color: rgba(128, 128, 128, 0.541);\n}\n\n.board-title {\n    text-align: center;\n    padding-top: 10px;\n    font-size: 1.5rem;\n}\n\n.grid {\n    border: white solid 2px;\n    height: 28rem;\n    width: 28rem;\n    margin-top: 10px;\n}\n\n.grid-row {\n    width: 100%;\n    height: 10%;\n    display: flex;\n}\n\n.grid-item {\n    height: 100%;\n    width: 10%;\n}\n\n.turn-info {\n    height: 10%;\n    width: calc(28rem + 4px); /* account for grid border width */\n}\n\n.stats {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: calc(28rem + 4px);\n    height: 20%;\n}\n\n.grid-item {\n    border: 0.5px solid grey;\n}\n\n.miss {\n    background-color: turquoise;\n}\n\n.enemy-hit {\n    background-color: red;\n}\n\n.friendly-hit {\n    background-color: red;\n}\n\n\n\n/* Report on ship status (floating/sunk) to the \nLEFT of the ship name (unlike the example page) */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/index.js */ "./src/index.js?dfde"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Battleship!</title>\n</head>\n<body>\n    <div class=\"header\">\n        <div class=\"page-title\">BATTLESHIP</div>\n    </div>\n    <div class=\"game-area\">\n        <div class=\"frame friendly-frame\">\n            <div class=\"board-title friendly-title\">FRIENDLY SEAS</div>\n            <div class=\"grid friendly-grid\"></div>\n            <div class=\"turn-info enemy-turn-info\"></div>\n            <div class=\"stats friendly-stats\">\n                <div class=\"friendly stats-title\">FRIENDLY SHIPS:</div>\n                <div class=\"friendly carrier-stats\">CARRIER (5)</div>\n                <div class=\"friendly battleship-stats\">BATTLESHIP (4)</div>\n                <div class=\"friendly destroyer-stats\">DESTROYER (3)</div>\n                <div class=\"friendly submarine-stats\">SUBMARINE (3)</div>\n                <div class=\"friendly patrol-boat-stats\">PATROL BOAT (2)</div>\n            </div>\n        </div>\n        <div class=\"frame enemy-frame highlight-frame\">\n            <div class=\"board-title enemy-title\">ENEMY SEAS</div>\n            <div class=\"grid enemy-grid\"></div>\n            <div class=\"turn-info friendly-turn-info\"></div>\n            <div class=\"stats enemy-stats\">\n                <div class=\"enemy stats-title\">ENEMY SHIPS:</div>\n                <div class=\"enemy carrier-stats\">CARRIER (5)</div>\n                <div class=\"enemy battleship-stats\">BATTLESHIP (4)</div>\n                <div class=\"enemy destroyer-stats\">DESTROYER (3)</div>\n                <div class=\"enemy submarine-stats\">SUBMARINE (3)</div>\n                <div class=\"enemy patrol-boat-stats\">PATROL BOAT (2)</div>\n            </div>\n        </div>\n    </div>\n    <a href=\"https://github.com/Frobii/tdd-battleship\" class=\"footer\">source code</a>\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");

const gameboard = () => {
    let misses = [];
    let hits = [];
    let ships = [];

    const playArea = () => {
        let playArea = new Array(10);
        for (let i = 0; i < 10; i += 1) {
            playArea[i] = new Array(10)
        };
        return playArea;
    };

    const placeShip = (ship, playArea, startPos, orientation) => {
        [x,y] = startPos;
        shipLength = ship.length;

        let errorMessage = null; 

        if (orientation === 'h') {
            if (x + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                if (playArea[x + i][y] != undefined) { // check chosen positions for other ships
                    errorMessage =  'Cannot place ships over others!'
                };
            };
            if (errorMessage) {
                return errorMessage;
            };
            for (i = 0; i < shipLength; i += 1) {
                playArea[x + i][y] = ship  // Placing the ship horizontally
            };
        } else if (orientation === 'v')  { 
            if (y + shipLength > 10) {
                return  "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                if (playArea[x][y + i] != undefined) {
                    errorMessage =  'Cannot place ships over others!'
                };
            };
            if (errorMessage) {
                return errorMessage;
            };
            for (i = 0; i < shipLength; i += 1) {
                playArea[x][y + i] = ship // Placing the ship vertically
            };
        };
        ships.push(ship);
    };
    
    const placeShipsAtRandom = (playArea, gameboard) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };
        
        const getRandomOrientation = () => {
            let randomDecimal = Math.random();
            let randomNumber = Math.round(randomDecimal);
            if (randomNumber === 1) {
                return 'h'
            } else {
                return 'v'
            };
        };
    
        const getRandomCoords = (placedCoords, ship, orientation) => {
            let x = getRandomInt(10);
            let y = getRandomInt(10);
            let coordinates = [x,y];
            let shipLength = ship.length;

            // Get the coordinates the ship will take up if placed
            // i.e. a battleship has a length of 4 so it has 4 placement coordinates
            const getPlacementCoordinates = (coordinates, shipLength, orientation) => {
                let shipPlacementCoords = [];
                for (let i = 0; i < shipLength; i += 1) {
                    let newCoordinates = coordinates.slice();
                    if (orientation === 'h') {
                        newCoordinates[0] += i
                    } else if (orientation === 'v') {
                        newCoordinates[1] += i
                    };
                    shipPlacementCoords.push(newCoordinates);
                };
                return shipPlacementCoords;
            };
            
            // Check the potential placement coordinates against the ones which are already placed
            const arraysContainCommonCoordinates = (array1, array2) => {
                for (let i = 0; i < array1.length; i++) {
                    for (let j = 0; j < array2.length; j++) {
                        if (array1[i][0] === array2[j][0] && array1[i][1] === array2[j][1]) {
                            return true;
                        };
                    };
                };
                return false;
            };
        
            const placementOutOfBounds = (coordinates, orientation, shipLength) => {
                let xReach = coordinates[0] + shipLength - 1;
                let yReach = coordinates[1] + shipLength - 1;
                if (orientation === 'h' && xReach > 9 ) {
                    return true;
                } else if (orientation === 'v' && yReach > 9) {
                    return true;
                };
                return false;
            };

            // Get the first set of placement coordinates for validation
            let shipPlacementCoords = getPlacementCoordinates(coordinates, shipLength, orientation);

            // Randomize coordinates to find a placement which hasn't been made and is within bounds
            while (
                arraysContainCommonCoordinates(shipPlacementCoords, placedCoords) ||
                placementOutOfBounds(coordinates, orientation, shipLength)
            ) {
                let x = getRandomInt(10);
                let y = getRandomInt(10);
                coordinates = [x,y];
                shipPlacementCoords = getPlacementCoordinates(coordinates, shipLength, orientation);
            };

            // Store the coordinates this ship is taking up so future ships can't be placed there
            shipPlacementCoords.forEach((coordinates) => {
                placedCoords.push(coordinates);
            });

            return coordinates
        };

        let carrier = ship(5);
        let battleship = ship(4);
        let destroyer = ship(3);
        let submarine = ship(3);
        let patrolBoat = ship(2);
        ships = [carrier, battleship, destroyer, submarine, patrolBoat];
        let placedCoords = [];

        ships.forEach((ship) => {
            let orientation =  getRandomOrientation();
            let startPos = getRandomCoords(placedCoords, ship, orientation);
            gameboard.placeShip(ship, playArea, startPos, orientation);
        });
    };

    const receiveAttack = (coordinates, playArea) => {
        [x,y] = coordinates;

        for (const miss of misses) { // check the misses for a duplicate shot
            if (miss.every((val, index) => val === coordinates[index])) {
                return false; 
            };
        };

        for (const hit of hits) { // check the hits for a duplicate shot
            if (hit.every((val, index) => val === coordinates[index])) {
                return false; 
            };
        };

        if (playArea[x][y] != undefined) {
            hits.push(coordinates);
            playArea[x][y].hit();
            return true;
        } else {
            misses.push(coordinates);
            return 'miss';
        };
    };

    const allSunk = () => {
        const lastIndex = ships.length - 1;

        for (const ship of ships) {
            if (!ship.isSunk()) {
                return false;
            };
            if (ship === ships[lastIndex] && ship.isSunk()) {
                return true;
            };
        };
    };

    return {
        playArea,
        placeShip,
        placeShipsAtRandom,
        receiveAttack,
        allSunk,
        misses,
        hits,
        ships,
    }
};

module.exports = gameboard;

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ../src/gameboard.js */ "./src/gameboard.js");
const player = __webpack_require__(/*! ../src/player.js */ "./src/player.js");
const ship = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");
const paintBoard = __webpack_require__(/*! ../src/paintBoard.js */ "./src/paintBoard.js");

const gameloop = () => {
    const p1 = player();
    const p1Board = gameboard();
    const p1PlayArea = p1Board.playArea();
    const p1Objects = {p1, p1Board, p1PlayArea}

    const cpu = player();
    const cpuBoard = gameboard();
    const cpuPlayArea = cpuBoard.playArea();
    const cpuObjects = {cpu, cpuBoard, cpuPlayArea};

    const vsCPU = () => {
        cpuBoard.placeShipsAtRandom(cpuObjects.cpuPlayArea, cpuObjects.cpuBoard);
        p1Board.placeShipsAtRandom(p1Objects.p1PlayArea, p1Objects.p1Board);
        paintBoard.paintFriendly(p1Objects.p1Board, p1Objects.p1PlayArea);
        
        if (!playerBoard.allSunk() && !cpuBoard.allSunk()) {

        };
    };

    return {
        p1Objects,
        cpuObjects,
        vsCPU,
    };
};

module.exports = gameloop;

/***/ }),

/***/ "./src/index.js?b635":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.html */ "./src/template.html");


const gameloop = __webpack_require__(/*! ../src/gameloop.js */ "./src/gameloop.js");

const newGame = gameloop();

newGame.vsCPU();

/***/ }),

/***/ "./src/paintBoard.js":
/*!***************************!*\
  !*** ./src/paintBoard.js ***!
  \***************************/
/***/ ((module) => {

const paintBoard = () => {
    const containsCoords = (array, coordinates) =>  {
        return array.some(coord => coord.every((value, index) => value === coordinates[index])) 
    };

    const paintFriendly = (gameboard, playArea) => {
        const gridContainer = document.querySelector('.friendly-grid');
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run
        
        let misses = gameboard.misses;
        let hits = gameboard.hits;

        for (let i = 0; i < 10; i++) { // i = y axis
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) { // j = x axis
                const cell = document.createElement('div');
                cell.classList.add('grid-item');
                const possibleShip = playArea[i][j];
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('friendly-hit')
                };

                // only friendly ships should ever recieve the ship class
                // enemy ships are never given graphics
                if (possibleShip !== undefined) {
                    cell.classList.add('ship');
                    cell.classList.add(ship.name); 
                };
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    const paintEnemy = (gameboard, playArea) => {
        const gridContainer = document.querySelector('.enemy-grid')
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run

        let misses = gameboard.misses;
        let hits = gameboard.hits;
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-item');
                cell.addEventListener('click', () => {
                    gameboard.receiveAttack([i,j], playArea)
                    paintEnemy(gameboard, playArea)
                    console.log(misses)
                })
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('enemy-hit')
                };
                
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    return {
        paintFriendly,
        paintEnemy,
    };
};

module.exports = paintBoard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

const player = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    const cpuTurn = (enemyPlayArea, enemyGameBoard) => {
        let x = getRandomInt(10);
        let y = getRandomInt(10);
        let coordinates = [x,y];

        // check every coordinate in the hits & misses arrays to ensure a duplicate shot isn't made
        const containsCoords = (array) => array[0] === coordinates[0] && array[1] === coordinates[1];
        while (enemyGameBoard.hits.some(containsCoords) || enemyGameBoard.misses.some(containsCoords)) {
            x = getRandomInt(10);
            y = getRandomInt(10);
            coordinates = [x,y];
        };

        enemyGameBoard.receiveAttack(coordinates, enemyPlayArea);
        return coordinates;
    };

    const userTurn = (coordinates, enemyPlayArea, enemyGameBoard) => {
        enemyGameBoard.receiveAttack(coordinates, enemyPlayArea)
    };

    return {
        cpuTurn,
        userTurn,
    };
};

module.exports = player;

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const ship = (length, name = 'Default Ship') => {
    let hits = 0;

    const hit = () => {
        if (hits < length) {
            hits++;
        }; // else sink the ship TEST FIRST !!! :)
    };

    const isSunk = () => {
        return hits == length; // returns a boolean
    };

    return {
        name,
        length, 
        get hits() {
            return hits
        },
        set hits(value) {
            if (value <= length && value > 0) {
                hits = value
            }
        },
        hit, 
        isSunk
    };
}

module.exports = ship;

/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f088fb8fab0d93690e5.js";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js?b635"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvdGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3BhaW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5nYW1lLWFyZWEge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZnJhbWUge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBoZWlnaHQ6IDQ1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZyaWVuZGx5LWZyYW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mcmFtZS5oaWdobGlnaHQtZnJhbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41NDEpO1xufVxuXG4uYm9hcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdyaWQge1xuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xuICAgIGhlaWdodDogMjhyZW07XG4gICAgd2lkdGg6IDI4cmVtO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ncmlkLXJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmdyaWQtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbi50dXJuLWluZm8ge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiBjYWxjKDI4cmVtICsgNHB4KTsgLyogYWNjb3VudCBmb3IgZ3JpZCBib3JkZXIgd2lkdGggKi9cbn1cblxuLnN0YXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgd2lkdGg6IGNhbGMoMjhyZW0gKyA0cHgpO1xuICAgIGhlaWdodDogMjAlO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG59XG5cbi5lbmVteS1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmZyaWVuZGx5LWhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5cblxuLyogUmVwb3J0IG9uIHNoaXAgc3RhdHVzIChmbG9hdGluZy9zdW5rKSB0byB0aGUgXG5MRUZUIG9mIHRoZSBzaGlwIG5hbWUgKHVubGlrZSB0aGUgZXhhbXBsZSBwYWdlKSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QixFQUFFLGtDQUFrQztBQUNoRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7Ozs7QUFJQTtpREFDaURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmdhbWUtYXJlYSB7XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogNDVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZyaWVuZGx5LWZyYW1lIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uZnJhbWUuaGlnaGxpZ2h0LWZyYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU0MSk7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbiAgICBoZWlnaHQ6IDI4cmVtO1xcbiAgICB3aWR0aDogMjhyZW07XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5ncmlkLXJvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLnR1cm4taW5mbyB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogY2FsYygyOHJlbSArIDRweCk7IC8qIGFjY291bnQgZm9yIGdyaWQgYm9yZGVyIHdpZHRoICovXFxufVxcblxcbi5zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogY2FsYygyOHJlbSArIDRweCk7XFxuICAgIGhlaWdodDogMjAlO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcXG59XFxuXFxuLmVuZW15LWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmZyaWVuZGx5LWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuXFxuLyogUmVwb3J0IG9uIHNoaXAgc3RhdHVzIChmbG9hdGluZy9zdW5rKSB0byB0aGUgXFxuTEVGVCBvZiB0aGUgc2hpcCBuYW1lICh1bmxpa2UgdGhlIGV4YW1wbGUgcGFnZSkgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbmRleC5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5CYXR0bGVzaGlwITwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZVxcXCI+QkFUVExFU0hJUDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZyYW1lIGZyaWVuZGx5LWZyYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZC10aXRsZSBmcmllbmRseS10aXRsZVxcXCI+RlJJRU5ETFkgU0VBUzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZnJpZW5kbHktZ3JpZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHVybi1pbmZvIGVuZW15LXR1cm4taW5mb1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHMgZnJpZW5kbHktc3RhdHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcmllbmRseSBzdGF0cy10aXRsZVxcXCI+RlJJRU5ETFkgU0hJUFM6PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZyaWVuZGx5IGNhcnJpZXItc3RhdHNcXFwiPkNBUlJJRVIgKDUpPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZyaWVuZGx5IGJhdHRsZXNoaXAtc3RhdHNcXFwiPkJBVFRMRVNISVAgKDQpPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZyaWVuZGx5IGRlc3Ryb3llci1zdGF0c1xcXCI+REVTVFJPWUVSICgzKTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcmllbmRseSBzdWJtYXJpbmUtc3RhdHNcXFwiPlNVQk1BUklORSAoMyk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnJpZW5kbHkgcGF0cm9sLWJvYXQtc3RhdHNcXFwiPlBBVFJPTCBCT0FUICgyKTwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcmFtZSBlbmVteS1mcmFtZSBoaWdobGlnaHQtZnJhbWVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvYXJkLXRpdGxlIGVuZW15LXRpdGxlXFxcIj5FTkVNWSBTRUFTPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZCBlbmVteS1ncmlkXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0dXJuLWluZm8gZnJpZW5kbHktdHVybi1pbmZvXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0cyBlbmVteS1zdGF0c1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVuZW15IHN0YXRzLXRpdGxlXFxcIj5FTkVNWSBTSElQUzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5lbXkgY2Fycmllci1zdGF0c1xcXCI+Q0FSUklFUiAoNSk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5lbXkgYmF0dGxlc2hpcC1zdGF0c1xcXCI+QkFUVExFU0hJUCAoNCk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5lbXkgZGVzdHJveWVyLXN0YXRzXFxcIj5ERVNUUk9ZRVIgKDMpPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVuZW15IHN1Ym1hcmluZS1zdGF0c1xcXCI+U1VCTUFSSU5FICgzKTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbmVteSBwYXRyb2wtYm9hdC1zdGF0c1xcXCI+UEFUUk9MIEJPQVQgKDIpPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9Gcm9iaWkvdGRkLWJhdHRsZXNoaXBcXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiPnNvdXJjZSBjb2RlPC9hPlxcbiAgICA8XCIgKyBcInNjcmlwdCBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48XCIgKyBcIi9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaGlwID0gcmVxdWlyZSgnLi4vc3JjL3NoaXAuanMnKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBtaXNzZXMgPSBbXTtcbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgcGxheUFyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwbGF5QXJlYSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgcGxheUFyZWFbaV0gPSBuZXcgQXJyYXkoMTApXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwbGF5QXJlYTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgW3gseV0gPSBzdGFydFBvcztcbiAgICAgICAgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBudWxsOyBcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgaWYgKHggKyBzaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaGlwIHBsYWNlbWVudCBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5QXJlYVt4ICsgaV1beV0gIT0gdW5kZWZpbmVkKSB7IC8vIGNoZWNrIGNob3NlbiBwb3NpdGlvbnMgZm9yIG90aGVyIHNoaXBzXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICAnQ2Fubm90IHBsYWNlIHNoaXBzIG92ZXIgb3RoZXJzISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBwbGF5QXJlYVt4ICsgaV1beV0gPSBzaGlwICAvLyBQbGFjaW5nIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSAgeyBcbiAgICAgICAgICAgIGlmICh5ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcIlNoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZHMhXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlBcmVhW3hdW3kgKyBpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gICdDYW5ub3QgcGxhY2Ugc2hpcHMgb3ZlciBvdGhlcnMhJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBsYXlBcmVhW3hdW3kgKyBpXSA9IHNoaXAgLy8gUGxhY2luZyB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcGxhY2VTaGlwc0F0UmFuZG9tID0gKHBsYXlBcmVhLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByYW5kb21EZWNpbWFsID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLnJvdW5kKHJhbmRvbURlY2ltYWwpO1xuICAgICAgICAgICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaCdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gKHBsYWNlZENvb3Jkcywgc2hpcCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFt4LHldO1xuICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgaWYgcGxhY2VkXG4gICAgICAgICAgICAvLyBpLmUuIGEgYmF0dGxlc2hpcCBoYXMgYSBsZW5ndGggb2YgNCBzbyBpdCBoYXMgNCBwbGFjZW1lbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGdldFBsYWNlbWVudENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzWzBdICs9IGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlc1sxXSArPSBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXdDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudENvb3JkcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBwb3RlbnRpYWwgcGxhY2VtZW50IGNvb3JkaW5hdGVzIGFnYWluc3QgdGhlIG9uZXMgd2hpY2ggYXJlIGFscmVhZHkgcGxhY2VkXG4gICAgICAgICAgICBjb25zdCBhcnJheXNDb250YWluQ29tbW9uQ29vcmRpbmF0ZXMgPSAoYXJyYXkxLCBhcnJheTIpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5Mi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXVswXSA9PT0gYXJyYXkyW2pdWzBdICYmIGFycmF5MVtpXVsxXSA9PT0gYXJyYXkyW2pdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRPdXRPZkJvdW5kcyA9IChjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeFJlYWNoID0gY29vcmRpbmF0ZXNbMF0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeVJlYWNoID0gY29vcmRpbmF0ZXNbMV0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiB4UmVhY2ggPiA5ICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgeVJlYWNoID4gOSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3Qgc2V0IG9mIHBsYWNlbWVudCBjb29yZGluYXRlcyBmb3IgdmFsaWRhdGlvblxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBnZXRQbGFjZW1lbnRDb29yZGluYXRlcyhjb29yZGluYXRlcywgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgICAvLyBSYW5kb21pemUgY29vcmRpbmF0ZXMgdG8gZmluZCBhIHBsYWNlbWVudCB3aGljaCBoYXNuJ3QgYmVlbiBtYWRlIGFuZCBpcyB3aXRoaW4gYm91bmRzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgYXJyYXlzQ29udGFpbkNvbW1vbkNvb3JkaW5hdGVzKHNoaXBQbGFjZW1lbnRDb29yZHMsIHBsYWNlZENvb3JkcykgfHxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRPdXRPZkJvdW5kcyhjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3gseV07XG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudENvb3JkcyA9IGdldFBsYWNlbWVudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgY29vcmRpbmF0ZXMgdGhpcyBzaGlwIGlzIHRha2luZyB1cCBzbyBmdXR1cmUgc2hpcHMgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50Q29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VkQ29vcmRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0gc2hpcCg1KTtcbiAgICAgICAgbGV0IGJhdHRsZXNoaXAgPSBzaGlwKDQpO1xuICAgICAgICBsZXQgZGVzdHJveWVyID0gc2hpcCgzKTtcbiAgICAgICAgbGV0IHN1Ym1hcmluZSA9IHNoaXAoMyk7XG4gICAgICAgIGxldCBwYXRyb2xCb2F0ID0gc2hpcCgyKTtcbiAgICAgICAgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgICAgICBsZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gIGdldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBnZXRSYW5kb21Db29yZHMocGxhY2VkQ29vcmRzLCBzaGlwLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcywgcGxheUFyZWEpID0+IHtcbiAgICAgICAgW3gseV0gPSBjb29yZGluYXRlcztcblxuICAgICAgICBmb3IgKGNvbnN0IG1pc3Mgb2YgbWlzc2VzKSB7IC8vIGNoZWNrIHRoZSBtaXNzZXMgZm9yIGEgZHVwbGljYXRlIHNob3RcbiAgICAgICAgICAgIGlmIChtaXNzLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7IC8vIGNoZWNrIHRoZSBoaXRzIGZvciBhIGR1cGxpY2F0ZSBzaG90XG4gICAgICAgICAgICBpZiAoaGl0LmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocGxheUFyZWFbeF1beV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcGxheUFyZWFbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pc3Nlcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHNoaXBzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHNoaXAgPT09IHNoaXBzW2xhc3RJbmRleF0gJiYgc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheUFyZWEsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcGxhY2VTaGlwc0F0UmFuZG9tLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTdW5rLFxuICAgICAgICBtaXNzZXMsXG4gICAgICAgIGhpdHMsXG4gICAgICAgIHNoaXBzLFxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkOyIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4uL3NyYy9nYW1lYm9hcmQuanMnKTtcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4uL3NyYy9wbGF5ZXIuanMnKTtcbmNvbnN0IHNoaXAgPSByZXF1aXJlKCcuLi9zcmMvc2hpcC5qcycpO1xuY29uc3QgcGFpbnRCb2FyZCA9IHJlcXVpcmUoJy4uL3NyYy9wYWludEJvYXJkLmpzJyk7XG5cbmNvbnN0IGdhbWVsb29wID0gKCkgPT4ge1xuICAgIGNvbnN0IHAxID0gcGxheWVyKCk7XG4gICAgY29uc3QgcDFCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHAxUGxheUFyZWEgPSBwMUJvYXJkLnBsYXlBcmVhKCk7XG4gICAgY29uc3QgcDFPYmplY3RzID0ge3AxLCBwMUJvYXJkLCBwMVBsYXlBcmVhfVxuXG4gICAgY29uc3QgY3B1ID0gcGxheWVyKCk7XG4gICAgY29uc3QgY3B1Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjcHVQbGF5QXJlYSA9IGNwdUJvYXJkLnBsYXlBcmVhKCk7XG4gICAgY29uc3QgY3B1T2JqZWN0cyA9IHtjcHUsIGNwdUJvYXJkLCBjcHVQbGF5QXJlYX07XG5cbiAgICBjb25zdCB2c0NQVSA9ICgpID0+IHtcbiAgICAgICAgY3B1Qm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tKGNwdU9iamVjdHMuY3B1UGxheUFyZWEsIGNwdU9iamVjdHMuY3B1Qm9hcmQpO1xuICAgICAgICBwMUJvYXJkLnBsYWNlU2hpcHNBdFJhbmRvbShwMU9iamVjdHMucDFQbGF5QXJlYSwgcDFPYmplY3RzLnAxQm9hcmQpO1xuICAgICAgICBwYWludEJvYXJkLnBhaW50RnJpZW5kbHkocDFPYmplY3RzLnAxQm9hcmQsIHAxT2JqZWN0cy5wMVBsYXlBcmVhKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghcGxheWVyQm9hcmQuYWxsU3VuaygpICYmICFjcHVCb2FyZC5hbGxTdW5rKCkpIHtcblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwMU9iamVjdHMsXG4gICAgICAgIGNwdU9iamVjdHMsXG4gICAgICAgIHZzQ1BVLFxuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVsb29wOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3RlbXBsYXRlLmh0bWwnO1xuY29uc3QgZ2FtZWxvb3AgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWxvb3AuanMnKTtcblxuY29uc3QgbmV3R2FtZSA9IGdhbWVsb29wKCk7XG5cbm5ld0dhbWUudnNDUFUoKTsiLCJjb25zdCBwYWludEJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5zQ29vcmRzID0gKGFycmF5LCBjb29yZGluYXRlcykgPT4gIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LnNvbWUoY29vcmQgPT4gY29vcmQuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIFxuICAgIH07XG5cbiAgICBjb25zdCBwYWludEZyaWVuZGx5ID0gKGdhbWVib2FyZCwgcGxheUFyZWEpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmllbmRseS1ncmlkJyk7XG4gICAgICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGFsbCBvZiB0aGUgY2hpbGQgbm9kZXMgZnJvbSB0aGUgcHJldmlvdXMgcnVuXG4gICAgICAgIFxuICAgICAgICBsZXQgbWlzc2VzID0gZ2FtZWJvYXJkLm1pc3NlcztcbiAgICAgICAgbGV0IGhpdHMgPSBnYW1lYm9hcmQuaGl0cztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8gaSA9IHkgYXhpc1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgnZ3JpZC1yb3cnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7IC8vIGogPSB4IGF4aXNcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZVNoaXAgPSBwbGF5QXJlYVtpXVtqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnNDb29yZHMobWlzc2VzLCBbaSxqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5zQ29vcmRzKGhpdHMsIFtpLGpdKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2ZyaWVuZGx5LWhpdCcpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIG9ubHkgZnJpZW5kbHkgc2hpcHMgc2hvdWxkIGV2ZXIgcmVjaWV2ZSB0aGUgc2hpcCBjbGFzc1xuICAgICAgICAgICAgICAgIC8vIGVuZW15IHNoaXBzIGFyZSBuZXZlciBnaXZlbiBncmFwaGljc1xuICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZVNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHNoaXAubmFtZSk7IFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGFpbnRFbmVteSA9IChnYW1lYm9hcmQsIHBsYXlBcmVhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktZ3JpZCcpXG4gICAgICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGFsbCBvZiB0aGUgY2hpbGQgbm9kZXMgZnJvbSB0aGUgcHJldmlvdXMgcnVuXG5cbiAgICAgICAgbGV0IG1pc3NlcyA9IGdhbWVib2FyZC5taXNzZXM7XG4gICAgICAgIGxldCBoaXRzID0gZ2FtZWJvYXJkLmhpdHM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2dyaWQtcm93Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXRlbScpO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtpLGpdLCBwbGF5QXJlYSlcbiAgICAgICAgICAgICAgICAgICAgcGFpbnRFbmVteShnYW1lYm9hcmQsIHBsYXlBcmVhKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtaXNzZXMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnNDb29yZHMobWlzc2VzLCBbaSxqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5zQ29vcmRzKGhpdHMsIFtpLGpdKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VuZW15LWhpdCcpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYWludEZyaWVuZGx5LFxuICAgICAgICBwYWludEVuZW15LFxuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhaW50Qm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3B1VHVybiA9IChlbmVteVBsYXlBcmVhLCBlbmVteUdhbWVCb2FyZCkgPT4ge1xuICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW3gseV07XG5cbiAgICAgICAgLy8gY2hlY2sgZXZlcnkgY29vcmRpbmF0ZSBpbiB0aGUgaGl0cyAmIG1pc3NlcyBhcnJheXMgdG8gZW5zdXJlIGEgZHVwbGljYXRlIHNob3QgaXNuJ3QgbWFkZVxuICAgICAgICBjb25zdCBjb250YWluc0Nvb3JkcyA9IChhcnJheSkgPT4gYXJyYXlbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIGFycmF5WzFdID09PSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgd2hpbGUgKGVuZW15R2FtZUJvYXJkLmhpdHMuc29tZShjb250YWluc0Nvb3JkcykgfHwgZW5lbXlHYW1lQm9hcmQubWlzc2VzLnNvbWUoY29udGFpbnNDb29yZHMpKSB7XG4gICAgICAgICAgICB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeCx5XTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBlbmVteVBsYXlBcmVhKTtcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH07XG5cbiAgICBjb25zdCB1c2VyVHVybiA9IChjb29yZGluYXRlcywgZW5lbXlQbGF5QXJlYSwgZW5lbXlHYW1lQm9hcmQpID0+IHtcbiAgICAgICAgZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcywgZW5lbXlQbGF5QXJlYSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3B1VHVybixcbiAgICAgICAgdXNlclR1cm4sXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyOyIsImNvbnN0IHNoaXAgPSAobGVuZ3RoLCBuYW1lID0gJ0RlZmF1bHQgU2hpcCcpID0+IHtcbiAgICBsZXQgaGl0cyA9IDA7XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChoaXRzIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBoaXRzKys7XG4gICAgICAgIH07IC8vIGVsc2Ugc2luayB0aGUgc2hpcCBURVNUIEZJUlNUICEhISA6KVxuICAgIH07XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzID09IGxlbmd0aDsgLy8gcmV0dXJucyBhIGJvb2xlYW5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGVuZ3RoLCBcbiAgICAgICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0c1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaGl0cyh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDw9IGxlbmd0aCAmJiB2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBoaXRzID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGl0LCBcbiAgICAgICAgaXNTdW5rXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==