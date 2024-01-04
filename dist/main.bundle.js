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
    box-sizing: border-box;
    border: 2px solid white;
    height: 28rem;
    width: 28rem;
    margin-top: 10px;
}

.grid-row {
    width: 100%;
    height: 10%;
    display: flex;
}

.cell {
    height: 100%;
    width: 10%;
    border: 0.5px solid grey;
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

.miss {
    background-color: turquoise;
}

.enemy-cell:hover {
    background-color: grey;
}

.enemy-hit {
    background-color: red;
}

.ship {
    background-color: lime;
}
/* Maintain friendly-hit's priority over .ship styles */
.friendly-hit {
    background-color: red;
}

.game-over-screen {
    position: absolute;
    display: none;
    /* display: flex; */
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.459);
    justify-content: center;
    align-items: center;
}

.game-over-dialogue {
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.788);
    border-radius: 1.1rem;;
    font-size: 18px;
    font-weight: 700;
    width: 30rem;
    height: 20rem;
}

.reset-game {
    width: 10rem;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: #4aad08cb;
    color: #FFFFFF;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    padding: 14px 24px 16px;
    line-height: 1;
    transition: transform 200ms;

}

.reset-game:hover{
    transform: translateY(-3px);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,wBAAwB,EAAE,kCAAkC;AAChE;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;AACA,uDAAuD;AACvD;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,eAAe;IACf,qBAAqB;IACrB,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;IACd,2BAA2B;;AAE/B;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["body {\n    background-color: rgba(0, 0, 0, 0.795);\n    color: white;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    margin: 0px;\n}\n\na {\n    color: white;\n    text-decoration: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.header {\n    width: 100vw;\n    text-align: center;\n    padding-top: 20px;\n    font-size: 3rem;\n}\n\n.footer {\n    width: 100vw;\n    text-align: center;\n    padding-bottom: 10px;\n    font-size: 1rem;\n}\n\n.game-area {\n    padding-top: 60px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.frame {\n    width: 30rem;\n    height: 45rem;\n    border-radius: 1.1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.friendly-frame {\n    margin-right: 20px;\n}\n\n.frame.highlight-frame {\n    background-color: rgba(128, 128, 128, 0.541);\n}\n\n.board-title {\n    text-align: center;\n    padding-top: 10px;\n    font-size: 1.5rem;\n}\n\n.grid {\n    box-sizing: border-box;\n    border: 2px solid white;\n    height: 28rem;\n    width: 28rem;\n    margin-top: 10px;\n}\n\n.grid-row {\n    width: 100%;\n    height: 10%;\n    display: flex;\n}\n\n.cell {\n    height: 100%;\n    width: 10%;\n    border: 0.5px solid grey;\n}\n\n.turn-info {\n    height: 10%;\n    width: calc(28rem + 4px); /* account for grid border width */\n}\n\n.stats {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: calc(28rem + 4px);\n    height: 20%;\n}\n\n.miss {\n    background-color: turquoise;\n}\n\n.enemy-cell:hover {\n    background-color: grey;\n}\n\n.enemy-hit {\n    background-color: red;\n}\n\n.ship {\n    background-color: lime;\n}\n/* Maintain friendly-hit's priority over .ship styles */\n.friendly-hit {\n    background-color: red;\n}\n\n.game-over-screen {\n    position: absolute;\n    display: none;\n    /* display: flex; */\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.459);\n    justify-content: center;\n    align-items: center;\n}\n\n.game-over-dialogue {\n    display: flex; \n    justify-content: space-evenly;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    background-color: rgba(0, 0, 0, 0.788);\n    border-radius: 1.1rem;;\n    font-size: 18px;\n    font-weight: 700;\n    width: 30rem;\n    height: 20rem;\n}\n\n.reset-game {\n    width: 10rem;\n    display: inline-block;\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n    background: #4aad08cb;\n    color: #FFFFFF;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 14px 24px 16px;\n    line-height: 1;\n    transition: transform 200ms;\n\n}\n\n.reset-game:hover{\n    transform: translateY(-3px);\n}"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Battleship!</title>\n</head>\n<body>\n    <div class=\"header\">\n        <div class=\"page-title\">BATTLESHIP</div>\n    </div>\n    <div class=\"game-area\">\n        <div class=\"frame friendly-frame\">\n            <div class=\"board-title friendly-title\">FRIENDLY SEAS</div>\n            <div class=\"grid friendly-grid\"></div>\n            <div class=\"turn-info enemy-turn-info\"></div>\n            <div class=\"stats friendly-stats\">\n                <div class=\"friendly stats-title\">FRIENDLY SHIPS:</div>\n                <div class=\"friendly carrier-stats\">CARRIER (5)</div>\n                <div class=\"friendly battleship-stats\">BATTLESHIP (4)</div>\n                <div class=\"friendly destroyer-stats\">DESTROYER (3)</div>\n                <div class=\"friendly submarine-stats\">SUBMARINE (3)</div>\n                <div class=\"friendly patrol-boat-stats\">PATROL BOAT (2)</div>\n            </div>\n        </div>\n        <div class=\"frame enemy-frame highlight-frame\">\n            <div class=\"board-title enemy-title\">ENEMY SEAS</div>\n            <div class=\"grid enemy-grid\"></div>\n            <div class=\"turn-info friendly-turn-info\"></div>\n            <div class=\"stats enemy-stats\">\n                <div class=\"enemy stats-title\">ENEMY SHIPS:</div>\n                <div class=\"enemy carrier-stats\">CARRIER (5)</div>\n                <div class=\"enemy battleship-stats\">BATTLESHIP (4)</div>\n                <div class=\"enemy destroyer-stats\">DESTROYER (3)</div>\n                <div class=\"enemy submarine-stats\">SUBMARINE (3)</div>\n                <div class=\"enemy patrol-boat-stats\">PATROL BOAT (2)</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"game-over-screen\">\n        <div class=\"game-over-dialogue\">\n            <div class=\"game-over-title\">Game Over</div>\n            <div class=\"game-over-text\"></div>\n            <button class=\"reset-game\">Reset Game</button>\n        </div>\n    </div>\n    <a href=\"https://github.com/Frobii/tdd-battleship\" class=\"footer\">source code</a>\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n</body>\n</html>";
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

        let carrier = ship(5, 'carrier');
        let battleship = ship(4, 'battleship');
        let destroyer = ship(3,'destroyer');
        let submarine = ship(3, 'submarine');
        let patrolBoat = ship(2, 'patrol-boat');
        let ships = [carrier, battleship, destroyer, submarine, patrolBoat];
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
            return 'hit';
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
const paintBoard = __webpack_require__(/*! ../src/paintBoard.js */ "./src/paintBoard.js");

const gameloop = () => {
    const p1 = player();
    let p1Board = gameboard();
    let p1PlayArea = p1Board.playArea();

    const cpu = player();
    let cpuBoard = gameboard();
    let cpuPlayArea = cpuBoard.playArea();

    const paintDOM = paintBoard();

    const gameOverScreen = document.querySelector('.game-over-screen');
    const gameOverText = document.querySelector('.game-over-text');
    
    const setResetGameEvent = () => {
        const resetGameButton = document.querySelector('.reset-game');
        resetGameButton.addEventListener('click', () => {
            gameOverScreen.style.display = 'none';
            p1Board = gameboard();
            p1PlayArea = p1Board.playArea();
            cpuBoard = gameboard();
            cpuPlayArea = cpuBoard.playArea();
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            paintDOM.paintEnemy(cpuBoard, cpuPlayArea);
            vsCPU();
        });
    };
    setResetGameEvent();

    // used for testing
    // p1Board.ships[0].hits = 5;
    // p1Board.ships[1].hits = 5;
    // p1Board.ships[2].hits = 5;
    // p1Board.ships[3].hits = 5;
    // p1Board.ships[4].hits = 5;

    // used for testing
    // setResetGameEvent();
    
    const checkForP1Win = () => {
        if (cpuBoard.allSunk()) {
            gameOverScreen.style.display = 'flex';
            gameOverText.innerHTML = 'You Won! <br> Would you like to play again?'
            paintDOM.toggleEnemyClickable();
            return 'win'
        };
    };

    const checkForCPUWin = () => {
        if (p1Board.allSunk()) {
            gameOverScreen.style.display = 'flex';
            gameOverText.innerHTML = 'The CPU Won! <br> Would you like to play again?'
            return 'win'
        };
    };

    async function vsCPU() {
        cpuBoard.placeShipsAtRandom(cpuPlayArea, cpuBoard);
        p1Board.placeShipsAtRandom(p1PlayArea, p1Board);

        // used for testing
        // cpuBoard.ships[0].hits = 5; 
        // cpuBoard.ships[1].hits = 4; 
        // cpuBoard.ships[2].hits = 3; 
        // cpuBoard.ships[3].hits = 3; 

        // used for testing
        // p1Board.ships[0].hits = 5; 
        // p1Board.ships[1].hits = 4; 
        // p1Board.ships[2].hits = 3; 
        // p1Board.ships[3].hits = 3; 

        paintDOM.paintFriendly(p1Board, p1PlayArea);
        let currentCPUHitsLength = cpuBoard.hits.length;
        let currentP1HitsLength = p1Board.hits.length;
        while (!p1Board.allSunk() && !cpuBoard.allSunk()) {
            // Highlight & paint the enemy board
            paintDOM.paintEnemy(cpuBoard, cpuPlayArea);
            // Enable clicks on the enemy board so the player can take a turn
            paintDOM.toggleEnemyClickable();

            do { // Wait for the player's turn
                currentCPUHitsLength = cpuBoard.hits.length
                await p1.waitForPlayerTurn();



                // used for testing
                // cpuBoard.ships[4].hits = 2; 




                if (checkForP1Win() === 'win') {
                    return
                }; // Check if the player made a winning move
            // Give the player an extra turn if they land a shot
            } while (cpuBoard.hits.length > currentCPUHitsLength)

            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30)); 
            // Disable clicks on the enemy board during the CPU's turn
            paintDOM.toggleEnemyClickable();
            // Highligh the friendly board
            paintDOM.highlightFriendly();

            do { // Execute CPU's turn
                await new Promise(resolve => setTimeout(resolve, 900)); // Delay the CPU's turn
                currentP1HitsLength = p1Board.hits.length
                cpu.cpuTurn(p1PlayArea, p1Board);
                paintDOM.paintFriendly(p1Board, p1PlayArea);


                // used for testing
                // p1Board.ships[4].hits = 2; 



                checkForCPUWin(); // Check if the CPU made a winning move
            } while (p1Board.hits.length > currentP1HitsLength)

            // Paint the player's board
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30));
        };
    };
   
    return {
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
    let enemyClickable = true;

    const toggleEnemyClickable = () => {
        const enemyGrid = document.querySelector('.enemy-grid');
        if (enemyClickable) {
            enemyGrid.style.pointerEvents = 'auto';
            enemyClickable = false;
        } else {
            enemyGrid.style.pointerEvents = 'none';
            enemyClickable = true;
        };
    };
    
    const highlightFriendly = () => {
        const enemyFrame = document.querySelector('.enemy-frame');
        enemyFrame.classList.remove('highlight-frame');
        
        const friendlyFrame = document.querySelector('.friendly-frame');
        friendlyFrame.classList.add('highlight-frame');
    };
    
    const highlightEnemy = () => {
        const friendlyFrame = document.querySelector('.friendly-frame')
        friendlyFrame.classList.remove('highlight-frame');
        
        const enemyFrame = document.querySelector('.enemy-frame');
        enemyFrame.classList.add('highlight-frame');
    };
    
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
                cell.classList.add('cell');
                cell.classList.add('friendly-cell');
                const possibleShip = playArea[i][j];
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('friendly-hit')
                };

                // only friendly ships should ever recieve the ship class
                // enemy ships are never given graphics
                if (possibleShip !== undefined) {
                    let shipName = possibleShip.name
                    cell.classList.add('ship');
                    cell.classList.add(shipName); 
                };
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    const paintEnemy = (gameboard, playArea) => {
        highlightEnemy(); // The enemy is always the first to be targeted
        const gridContainer = document.querySelector('.enemy-grid')
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run

        let misses = gameboard.misses;
        let hits = gameboard.hits;
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add('enemy-cell');
                cell.addEventListener('click', () => {
                    gameboard.receiveAttack([i,j], playArea)
                    paintEnemy(gameboard, playArea)
                });
                
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
        toggleEnemyClickable,
        highlightFriendly,
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

    const waitForPlayerTurn = () => {
        const enemyCells = document.getElementsByClassName('enemy-cell');
        const cellsArray = Array.from(enemyCells);

        return new Promise((resolve) => {
            cellsArray.forEach((cell) => {
                if (cell.classList.contains('miss') || cell.classList.contains('enemy-hit')) {
                    // Prevent click event if the position has been targeted before
                    cell.style.pointerEvents = 'none';
                }
                cell.addEventListener('click', function playerClickListener() {
                    // Remove the event listener to prevent multiple clicks
                    cell.removeEventListener('click', playerClickListener);
                    // Resolve the promise to continue the game loop
                    resolve();
                });
            });
        });
    };

    return {
        cpuTurn,
        waitForPlayerTurn,
    };
};

module.exports = player;

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const ship = (length, name = 'default-ship') => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDaERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvdGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3BhaW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43OTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5nYW1lLWFyZWEge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZnJhbWUge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBoZWlnaHQ6IDQ1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZyaWVuZGx5LWZyYW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mcmFtZS5oaWdobGlnaHQtZnJhbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41NDEpO1xufVxuXG4uYm9hcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmdyaWQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgaGVpZ2h0OiAyOHJlbTtcbiAgICB3aWR0aDogMjhyZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmdyaWQtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2VsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xufVxuXG4udHVybi1pbmZvIHtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogY2FsYygyOHJlbSArIDRweCk7IC8qIGFjY291bnQgZm9yIGdyaWQgYm9yZGVyIHdpZHRoICovXG59XG5cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHdpZHRoOiBjYWxjKDI4cmVtICsgNHB4KTtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHR1cnF1b2lzZTtcbn1cblxuLmVuZW15LWNlbGw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5lbmVteS1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG59XG4vKiBNYWludGFpbiBmcmllbmRseS1oaXQncyBwcmlvcml0eSBvdmVyIC5zaGlwIHN0eWxlcyAqL1xuLmZyaWVuZGx5LWhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uZ2FtZS1vdmVyLXNjcmVlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDU5KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS1vdmVyLWRpYWxvZ3VlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43ODgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTs7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIGhlaWdodDogMjByZW07XG59XG5cbi5yZXNldC1nYW1lIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNGFhZDA4Y2I7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDE0cHggMjRweCAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcblxufVxuXG4ucmVzZXQtZ2FtZTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0IsRUFBRSxrQ0FBa0M7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0EsdURBQXVEO0FBQ3ZEO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsMkJBQTJCOztBQUUvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1hcmVhIHtcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mcmFtZSB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgaGVpZ2h0OiA0NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJpZW5kbHktZnJhbWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5mcmFtZS5oaWdobGlnaHQtZnJhbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTQxKTtcXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ncmlkIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMjhyZW07XFxuICAgIHdpZHRoOiAyOHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmdyaWQtcm93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4udHVybi1pbmZvIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiBjYWxjKDI4cmVtICsgNHB4KTsgLyogYWNjb3VudCBmb3IgZ3JpZCBib3JkZXIgd2lkdGggKi9cXG59XFxuXFxuLnN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiBjYWxjKDI4cmVtICsgNHB4KTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHVycXVvaXNlO1xcbn1cXG5cXG4uZW5lbXktY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5lbmVteS1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcXG59XFxuLyogTWFpbnRhaW4gZnJpZW5kbHktaGl0J3MgcHJpb3JpdHkgb3ZlciAuc2hpcCBzdHlsZXMgKi9cXG4uZnJpZW5kbHktaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLXNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDU5KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLW92ZXItZGlhbG9ndWUge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTs7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4ucmVzZXQtZ2FtZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzRhYWQwOGNiO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6IDE0cHggMjRweCAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xcblxcbn1cXG5cXG4ucmVzZXQtZ2FtZTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbmRleC5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5CYXR0bGVzaGlwITwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZVxcXCI+QkFUVExFU0hJUDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZyYW1lIGZyaWVuZGx5LWZyYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZC10aXRsZSBmcmllbmRseS10aXRsZVxcXCI+RlJJRU5ETFkgU0VBUzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZnJpZW5kbHktZ3JpZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHVybi1pbmZvIGVuZW15LXR1cm4taW5mb1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHMgZnJpZW5kbHktc3RhdHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcmllbmRseSBzdGF0cy10aXRsZVxcXCI+RlJJRU5ETFkgU0hJUFM6PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZyaWVuZGx5IGNhcnJpZXItc3RhdHNcXFwiPkNBUlJJRVIgKDUpPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZyaWVuZGx5IGJhdHRsZXNoaXAtc3RhdHNcXFwiPkJBVFRMRVNISVAgKDQpPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZyaWVuZGx5IGRlc3Ryb3llci1zdGF0c1xcXCI+REVTVFJPWUVSICgzKTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcmllbmRseSBzdWJtYXJpbmUtc3RhdHNcXFwiPlNVQk1BUklORSAoMyk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnJpZW5kbHkgcGF0cm9sLWJvYXQtc3RhdHNcXFwiPlBBVFJPTCBCT0FUICgyKTwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmcmFtZSBlbmVteS1mcmFtZSBoaWdobGlnaHQtZnJhbWVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvYXJkLXRpdGxlIGVuZW15LXRpdGxlXFxcIj5FTkVNWSBTRUFTPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZCBlbmVteS1ncmlkXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0dXJuLWluZm8gZnJpZW5kbHktdHVybi1pbmZvXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0cyBlbmVteS1zdGF0c1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVuZW15IHN0YXRzLXRpdGxlXFxcIj5FTkVNWSBTSElQUzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5lbXkgY2Fycmllci1zdGF0c1xcXCI+Q0FSUklFUiAoNSk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5lbXkgYmF0dGxlc2hpcC1zdGF0c1xcXCI+QkFUVExFU0hJUCAoNCk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW5lbXkgZGVzdHJveWVyLXN0YXRzXFxcIj5ERVNUUk9ZRVIgKDMpPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVuZW15IHN1Ym1hcmluZS1zdGF0c1xcXCI+U1VCTUFSSU5FICgzKTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbmVteSBwYXRyb2wtYm9hdC1zdGF0c1xcXCI+UEFUUk9MIEJPQVQgKDIpPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtb3Zlci1zY3JlZW5cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1vdmVyLWRpYWxvZ3VlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLW92ZXItdGl0bGVcXFwiPkdhbWUgT3ZlcjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtb3Zlci10ZXh0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyZXNldC1nYW1lXFxcIj5SZXNldCBHYW1lPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9Gcm9iaWkvdGRkLWJhdHRsZXNoaXBcXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiPnNvdXJjZSBjb2RlPC9hPlxcbiAgICA8XCIgKyBcInNjcmlwdCBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48XCIgKyBcIi9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaGlwID0gcmVxdWlyZSgnLi4vc3JjL3NoaXAuanMnKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBtaXNzZXMgPSBbXTtcbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgcGxheUFyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwbGF5QXJlYSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgcGxheUFyZWFbaV0gPSBuZXcgQXJyYXkoMTApXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwbGF5QXJlYTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgW3gseV0gPSBzdGFydFBvcztcbiAgICAgICAgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBudWxsOyBcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgaWYgKHggKyBzaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaGlwIHBsYWNlbWVudCBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5QXJlYVt4ICsgaV1beV0gIT0gdW5kZWZpbmVkKSB7IC8vIGNoZWNrIGNob3NlbiBwb3NpdGlvbnMgZm9yIG90aGVyIHNoaXBzXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICAnQ2Fubm90IHBsYWNlIHNoaXBzIG92ZXIgb3RoZXJzISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBwbGF5QXJlYVt4ICsgaV1beV0gPSBzaGlwICAvLyBQbGFjaW5nIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSAgeyBcbiAgICAgICAgICAgIGlmICh5ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcIlNoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZHMhXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlBcmVhW3hdW3kgKyBpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gICdDYW5ub3QgcGxhY2Ugc2hpcHMgb3ZlciBvdGhlcnMhJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBsYXlBcmVhW3hdW3kgKyBpXSA9IHNoaXAgLy8gUGxhY2luZyB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcGxhY2VTaGlwc0F0UmFuZG9tID0gKHBsYXlBcmVhLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByYW5kb21EZWNpbWFsID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLnJvdW5kKHJhbmRvbURlY2ltYWwpO1xuICAgICAgICAgICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaCdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gKHBsYWNlZENvb3Jkcywgc2hpcCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFt4LHldO1xuICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgaWYgcGxhY2VkXG4gICAgICAgICAgICAvLyBpLmUuIGEgYmF0dGxlc2hpcCBoYXMgYSBsZW5ndGggb2YgNCBzbyBpdCBoYXMgNCBwbGFjZW1lbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGdldFBsYWNlbWVudENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzWzBdICs9IGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlc1sxXSArPSBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXdDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudENvb3JkcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBwb3RlbnRpYWwgcGxhY2VtZW50IGNvb3JkaW5hdGVzIGFnYWluc3QgdGhlIG9uZXMgd2hpY2ggYXJlIGFscmVhZHkgcGxhY2VkXG4gICAgICAgICAgICBjb25zdCBhcnJheXNDb250YWluQ29tbW9uQ29vcmRpbmF0ZXMgPSAoYXJyYXkxLCBhcnJheTIpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5Mi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXVswXSA9PT0gYXJyYXkyW2pdWzBdICYmIGFycmF5MVtpXVsxXSA9PT0gYXJyYXkyW2pdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRPdXRPZkJvdW5kcyA9IChjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeFJlYWNoID0gY29vcmRpbmF0ZXNbMF0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeVJlYWNoID0gY29vcmRpbmF0ZXNbMV0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiB4UmVhY2ggPiA5ICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgeVJlYWNoID4gOSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3Qgc2V0IG9mIHBsYWNlbWVudCBjb29yZGluYXRlcyBmb3IgdmFsaWRhdGlvblxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBnZXRQbGFjZW1lbnRDb29yZGluYXRlcyhjb29yZGluYXRlcywgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgICAvLyBSYW5kb21pemUgY29vcmRpbmF0ZXMgdG8gZmluZCBhIHBsYWNlbWVudCB3aGljaCBoYXNuJ3QgYmVlbiBtYWRlIGFuZCBpcyB3aXRoaW4gYm91bmRzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgYXJyYXlzQ29udGFpbkNvbW1vbkNvb3JkaW5hdGVzKHNoaXBQbGFjZW1lbnRDb29yZHMsIHBsYWNlZENvb3JkcykgfHxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRPdXRPZkJvdW5kcyhjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3gseV07XG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudENvb3JkcyA9IGdldFBsYWNlbWVudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgY29vcmRpbmF0ZXMgdGhpcyBzaGlwIGlzIHRha2luZyB1cCBzbyBmdXR1cmUgc2hpcHMgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50Q29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VkQ29vcmRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0gc2hpcCg1LCAnY2FycmllcicpO1xuICAgICAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICAgICAgbGV0IGRlc3Ryb3llciA9IHNoaXAoMywnZGVzdHJveWVyJyk7XG4gICAgICAgIGxldCBzdWJtYXJpbmUgPSBzaGlwKDMsICdzdWJtYXJpbmUnKTtcbiAgICAgICAgbGV0IHBhdHJvbEJvYXQgPSBzaGlwKDIsICdwYXRyb2wtYm9hdCcpO1xuICAgICAgICBsZXQgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgICAgICBsZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gIGdldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBnZXRSYW5kb21Db29yZHMocGxhY2VkQ29vcmRzLCBzaGlwLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcywgcGxheUFyZWEpID0+IHtcbiAgICAgICAgW3gseV0gPSBjb29yZGluYXRlcztcblxuICAgICAgICBmb3IgKGNvbnN0IG1pc3Mgb2YgbWlzc2VzKSB7IC8vIGNoZWNrIHRoZSBtaXNzZXMgZm9yIGEgZHVwbGljYXRlIHNob3RcbiAgICAgICAgICAgIGlmIChtaXNzLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7IC8vIGNoZWNrIHRoZSBoaXRzIGZvciBhIGR1cGxpY2F0ZSBzaG90XG4gICAgICAgICAgICBpZiAoaGl0LmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocGxheUFyZWFbeF1beV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcGxheUFyZWFbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzaGlwcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzaGlwID09PSBzaGlwc1tsYXN0SW5kZXhdICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlBcmVhLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHBsYWNlU2hpcHNBdFJhbmRvbSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgbWlzc2VzLFxuICAgICAgICBoaXRzLFxuICAgICAgICBzaGlwcyxcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDsiLCJjb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWJvYXJkLmpzJyk7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKCcuLi9zcmMvcGxheWVyLmpzJyk7XG5jb25zdCBwYWludEJvYXJkID0gcmVxdWlyZSgnLi4vc3JjL3BhaW50Qm9hcmQuanMnKTtcblxuY29uc3QgZ2FtZWxvb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgcDEgPSBwbGF5ZXIoKTtcbiAgICBsZXQgcDFCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBwMVBsYXlBcmVhID0gcDFCb2FyZC5wbGF5QXJlYSgpO1xuXG4gICAgY29uc3QgY3B1ID0gcGxheWVyKCk7XG4gICAgbGV0IGNwdUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IGNwdVBsYXlBcmVhID0gY3B1Qm9hcmQucGxheUFyZWEoKTtcblxuICAgIGNvbnN0IHBhaW50RE9NID0gcGFpbnRCb2FyZCgpO1xuXG4gICAgY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyLXNjcmVlbicpO1xuICAgIGNvbnN0IGdhbWVPdmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItdGV4dCcpO1xuICAgIFxuICAgIGNvbnN0IHNldFJlc2V0R2FtZUV2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNldEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtZ2FtZScpO1xuICAgICAgICByZXNldEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcDFCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgICAgICAgICAgcDFQbGF5QXJlYSA9IHAxQm9hcmQucGxheUFyZWEoKTtcbiAgICAgICAgICAgIGNwdUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgICAgICAgICBjcHVQbGF5QXJlYSA9IGNwdUJvYXJkLnBsYXlBcmVhKCk7XG4gICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRFbmVteShjcHVCb2FyZCwgY3B1UGxheUFyZWEpO1xuICAgICAgICAgICAgdnNDUFUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBzZXRSZXNldEdhbWVFdmVudCgpO1xuXG4gICAgLy8gdXNlZCBmb3IgdGVzdGluZ1xuICAgIC8vIHAxQm9hcmQuc2hpcHNbMF0uaGl0cyA9IDU7XG4gICAgLy8gcDFCb2FyZC5zaGlwc1sxXS5oaXRzID0gNTtcbiAgICAvLyBwMUJvYXJkLnNoaXBzWzJdLmhpdHMgPSA1O1xuICAgIC8vIHAxQm9hcmQuc2hpcHNbM10uaGl0cyA9IDU7XG4gICAgLy8gcDFCb2FyZC5zaGlwc1s0XS5oaXRzID0gNTtcblxuICAgIC8vIHVzZWQgZm9yIHRlc3RpbmdcbiAgICAvLyBzZXRSZXNldEdhbWVFdmVudCgpO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrRm9yUDFXaW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChjcHVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBnYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gJ1lvdSBXb24hIDxicj4gV291bGQgeW91IGxpa2UgdG8gcGxheSBhZ2Fpbj8nXG4gICAgICAgICAgICBwYWludERPTS50b2dnbGVFbmVteUNsaWNrYWJsZSgpO1xuICAgICAgICAgICAgcmV0dXJuICd3aW4nXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrRm9yQ1BVV2luID0gKCkgPT4ge1xuICAgICAgICBpZiAocDFCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBnYW1lT3ZlclRleHQuaW5uZXJIVE1MID0gJ1RoZSBDUFUgV29uISA8YnI+IFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/J1xuICAgICAgICAgICAgcmV0dXJuICd3aW4nXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHZzQ1BVKCkge1xuICAgICAgICBjcHVCb2FyZC5wbGFjZVNoaXBzQXRSYW5kb20oY3B1UGxheUFyZWEsIGNwdUJvYXJkKTtcbiAgICAgICAgcDFCb2FyZC5wbGFjZVNoaXBzQXRSYW5kb20ocDFQbGF5QXJlYSwgcDFCb2FyZCk7XG5cbiAgICAgICAgLy8gdXNlZCBmb3IgdGVzdGluZ1xuICAgICAgICAvLyBjcHVCb2FyZC5zaGlwc1swXS5oaXRzID0gNTsgXG4gICAgICAgIC8vIGNwdUJvYXJkLnNoaXBzWzFdLmhpdHMgPSA0OyBcbiAgICAgICAgLy8gY3B1Qm9hcmQuc2hpcHNbMl0uaGl0cyA9IDM7IFxuICAgICAgICAvLyBjcHVCb2FyZC5zaGlwc1szXS5oaXRzID0gMzsgXG5cbiAgICAgICAgLy8gdXNlZCBmb3IgdGVzdGluZ1xuICAgICAgICAvLyBwMUJvYXJkLnNoaXBzWzBdLmhpdHMgPSA1OyBcbiAgICAgICAgLy8gcDFCb2FyZC5zaGlwc1sxXS5oaXRzID0gNDsgXG4gICAgICAgIC8vIHAxQm9hcmQuc2hpcHNbMl0uaGl0cyA9IDM7IFxuICAgICAgICAvLyBwMUJvYXJkLnNoaXBzWzNdLmhpdHMgPSAzOyBcblxuICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICBsZXQgY3VycmVudENQVUhpdHNMZW5ndGggPSBjcHVCb2FyZC5oaXRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGN1cnJlbnRQMUhpdHNMZW5ndGggPSBwMUJvYXJkLmhpdHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIXAxQm9hcmQuYWxsU3VuaygpICYmICFjcHVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCAmIHBhaW50IHRoZSBlbmVteSBib2FyZFxuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRFbmVteShjcHVCb2FyZCwgY3B1UGxheUFyZWEpO1xuICAgICAgICAgICAgLy8gRW5hYmxlIGNsaWNrcyBvbiB0aGUgZW5lbXkgYm9hcmQgc28gdGhlIHBsYXllciBjYW4gdGFrZSBhIHR1cm5cbiAgICAgICAgICAgIHBhaW50RE9NLnRvZ2dsZUVuZW15Q2xpY2thYmxlKCk7XG5cbiAgICAgICAgICAgIGRvIHsgLy8gV2FpdCBmb3IgdGhlIHBsYXllcidzIHR1cm5cbiAgICAgICAgICAgICAgICBjdXJyZW50Q1BVSGl0c0xlbmd0aCA9IGNwdUJvYXJkLmhpdHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgYXdhaXQgcDEud2FpdEZvclBsYXllclR1cm4oKTtcblxuXG5cbiAgICAgICAgICAgICAgICAvLyB1c2VkIGZvciB0ZXN0aW5nXG4gICAgICAgICAgICAgICAgLy8gY3B1Qm9hcmQuc2hpcHNbNF0uaGl0cyA9IDI7IFxuXG5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRm9yUDFXaW4oKSA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfTsgLy8gQ2hlY2sgaWYgdGhlIHBsYXllciBtYWRlIGEgd2lubmluZyBtb3ZlXG4gICAgICAgICAgICAvLyBHaXZlIHRoZSBwbGF5ZXIgYW4gZXh0cmEgdHVybiBpZiB0aGV5IGxhbmQgYSBzaG90XG4gICAgICAgICAgICB9IHdoaWxlIChjcHVCb2FyZC5oaXRzLmxlbmd0aCA+IGN1cnJlbnRDUFVIaXRzTGVuZ3RoKVxuXG4gICAgICAgICAgICAvLyBEZWxheSB0aGUgdGltZSBiZXR3ZWVuIHR1cm4gc3dhcHNcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMCkpOyBcbiAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2tzIG9uIHRoZSBlbmVteSBib2FyZCBkdXJpbmcgdGhlIENQVSdzIHR1cm5cbiAgICAgICAgICAgIHBhaW50RE9NLnRvZ2dsZUVuZW15Q2xpY2thYmxlKCk7XG4gICAgICAgICAgICAvLyBIaWdobGlnaCB0aGUgZnJpZW5kbHkgYm9hcmRcbiAgICAgICAgICAgIHBhaW50RE9NLmhpZ2hsaWdodEZyaWVuZGx5KCk7XG5cbiAgICAgICAgICAgIGRvIHsgLy8gRXhlY3V0ZSBDUFUncyB0dXJuXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDkwMCkpOyAvLyBEZWxheSB0aGUgQ1BVJ3MgdHVyblxuICAgICAgICAgICAgICAgIGN1cnJlbnRQMUhpdHNMZW5ndGggPSBwMUJvYXJkLmhpdHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgY3B1LmNwdVR1cm4ocDFQbGF5QXJlYSwgcDFCb2FyZCk7XG4gICAgICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gdXNlZCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgICAgIC8vIHAxQm9hcmQuc2hpcHNbNF0uaGl0cyA9IDI7IFxuXG5cblxuICAgICAgICAgICAgICAgIGNoZWNrRm9yQ1BVV2luKCk7IC8vIENoZWNrIGlmIHRoZSBDUFUgbWFkZSBhIHdpbm5pbmcgbW92ZVxuICAgICAgICAgICAgfSB3aGlsZSAocDFCb2FyZC5oaXRzLmxlbmd0aCA+IGN1cnJlbnRQMUhpdHNMZW5ndGgpXG5cbiAgICAgICAgICAgIC8vIFBhaW50IHRoZSBwbGF5ZXIncyBib2FyZFxuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgIC8vIERlbGF5IHRoZSB0aW1lIGJldHdlZW4gdHVybiBzd2Fwc1xuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHZzQ1BVLFxuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVsb29wOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3RlbXBsYXRlLmh0bWwnO1xuY29uc3QgZ2FtZWxvb3AgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWxvb3AuanMnKTtcblxuY29uc3QgbmV3R2FtZSA9IGdhbWVsb29wKCk7XG5cbm5ld0dhbWUudnNDUFUoKTsiLCJjb25zdCBwYWludEJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBlbmVteUNsaWNrYWJsZSA9IHRydWU7XG5cbiAgICBjb25zdCB0b2dnbGVFbmVteUNsaWNrYWJsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW5lbXlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWdyaWQnKTtcbiAgICAgICAgaWYgKGVuZW15Q2xpY2thYmxlKSB7XG4gICAgICAgICAgICBlbmVteUdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgICAgIGVuZW15Q2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmVteUdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIGVuZW15Q2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhpZ2hsaWdodEZyaWVuZGx5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmVteUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWZyYW1lJyk7XG4gICAgICAgIGVuZW15RnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmcmllbmRseUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWZyYW1lJyk7XG4gICAgICAgIGZyaWVuZGx5RnJhbWUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBoaWdobGlnaHRFbmVteSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlGcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmllbmRseS1mcmFtZScpXG4gICAgICAgIGZyaWVuZGx5RnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbmVteUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWZyYW1lJyk7XG4gICAgICAgIGVuZW15RnJhbWUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjb250YWluc0Nvb3JkcyA9IChhcnJheSwgY29vcmRpbmF0ZXMpID0+ICB7XG4gICAgICAgIHJldHVybiBhcnJheS5zb21lKGNvb3JkID0+IGNvb3JkLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBjb29yZGluYXRlc1tpbmRleF0pKSBcbiAgICB9O1xuXG4gICAgY29uc3QgcGFpbnRGcmllbmRseSA9IChnYW1lYm9hcmQsIHBsYXlBcmVhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktZ3JpZCcpO1xuICAgICAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBhbGwgb2YgdGhlIGNoaWxkIG5vZGVzIGZyb20gdGhlIHByZXZpb3VzIHJ1blxuICAgICAgICBcbiAgICAgICAgbGV0IG1pc3NlcyA9IGdhbWVib2FyZC5taXNzZXM7XG4gICAgICAgIGxldCBoaXRzID0gZ2FtZWJvYXJkLmhpdHM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIGkgPSB5IGF4aXNcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2dyaWQtcm93Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykgeyAvLyBqID0geCBheGlzXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZnJpZW5kbHktY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlU2hpcCA9IHBsYXlBcmVhW2ldW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjb250YWluc0Nvb3JkcyhtaXNzZXMsIFtpLGpdKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbnNDb29yZHMoaGl0cywgW2ksal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZnJpZW5kbHktaGl0JylcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gb25seSBmcmllbmRseSBzaGlwcyBzaG91bGQgZXZlciByZWNpZXZlIHRoZSBzaGlwIGNsYXNzXG4gICAgICAgICAgICAgICAgLy8gZW5lbXkgc2hpcHMgYXJlIG5ldmVyIGdpdmVuIGdyYXBoaWNzXG4gICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlU2hpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IHBvc3NpYmxlU2hpcC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoc2hpcE5hbWUpOyBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBhaW50RW5lbXkgPSAoZ2FtZWJvYXJkLCBwbGF5QXJlYSkgPT4ge1xuICAgICAgICBoaWdobGlnaHRFbmVteSgpOyAvLyBUaGUgZW5lbXkgaXMgYWx3YXlzIHRoZSBmaXJzdCB0byBiZSB0YXJnZXRlZFxuICAgICAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWdyaWQnKVxuICAgICAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBhbGwgb2YgdGhlIGNoaWxkIG5vZGVzIGZyb20gdGhlIHByZXZpb3VzIHJ1blxuXG4gICAgICAgIGxldCBtaXNzZXMgPSBnYW1lYm9hcmQubWlzc2VzO1xuICAgICAgICBsZXQgaGl0cyA9IGdhbWVib2FyZC5oaXRzO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdncmlkLXJvdycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1jZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2ksal0sIHBsYXlBcmVhKVxuICAgICAgICAgICAgICAgICAgICBwYWludEVuZW15KGdhbWVib2FyZCwgcGxheUFyZWEpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ29vcmRzKG1pc3NlcywgW2ksal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluc0Nvb3JkcyhoaXRzLCBbaSxqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1oaXQnKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlRW5lbXlDbGlja2FibGUsXG4gICAgICAgIGhpZ2hsaWdodEZyaWVuZGx5LFxuICAgICAgICBwYWludEZyaWVuZGx5LFxuICAgICAgICBwYWludEVuZW15LFxuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhaW50Qm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3B1VHVybiA9IChlbmVteVBsYXlBcmVhLCBlbmVteUdhbWVCb2FyZCkgPT4ge1xuICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW3gseV07XG5cbiAgICAgICAgLy8gY2hlY2sgZXZlcnkgY29vcmRpbmF0ZSBpbiB0aGUgaGl0cyAmIG1pc3NlcyBhcnJheXMgdG8gZW5zdXJlIGEgZHVwbGljYXRlIHNob3QgaXNuJ3QgbWFkZVxuICAgICAgICBjb25zdCBjb250YWluc0Nvb3JkcyA9IChhcnJheSkgPT4gYXJyYXlbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIGFycmF5WzFdID09PSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgd2hpbGUgKGVuZW15R2FtZUJvYXJkLmhpdHMuc29tZShjb250YWluc0Nvb3JkcykgfHwgZW5lbXlHYW1lQm9hcmQubWlzc2VzLnNvbWUoY29udGFpbnNDb29yZHMpKSB7XG4gICAgICAgICAgICB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeCx5XTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBlbmVteVBsYXlBcmVhKTtcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0Rm9yUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW5lbXlDZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VuZW15LWNlbGwnKTtcbiAgICAgICAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oZW5lbXlDZWxscyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjZWxsc0FycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBjbGljayBldmVudCBpZiB0aGUgcG9zaXRpb24gaGFzIGJlZW4gdGFyZ2V0ZWQgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHBsYXllckNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gcHJldmVudCBtdWx0aXBsZSBjbGlja3NcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckNsaWNrTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIHRvIGNvbnRpbnVlIHRoZSBnYW1lIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcHVUdXJuLFxuICAgICAgICB3YWl0Rm9yUGxheWVyVHVybixcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7IiwiY29uc3Qgc2hpcCA9IChsZW5ndGgsIG5hbWUgPSAnZGVmYXVsdC1zaGlwJykgPT4ge1xuICAgIGxldCBoaXRzID0gMDtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpdHMgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGhpdHMrKztcbiAgICAgICAgfTsgLy8gZWxzZSBzaW5rIHRoZSBzaGlwIFRFU1QgRklSU1QgISEhIDopXG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHMgPT0gbGVuZ3RoOyAvLyByZXR1cm5zIGEgYm9vbGVhblxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsZW5ndGgsIFxuICAgICAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBoaXRzXG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoaXRzKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPD0gbGVuZ3RoICYmIHZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIGhpdHMgPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoaXQsIFxuICAgICAgICBpc1N1bmtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9