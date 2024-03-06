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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Anta-Regular.ttf */ "./src/fonts/Anta-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/aircraft-carrier.png */ "./src/images/aircraft-carrier.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleship.png */ "./src/images/battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/destroyer.png */ "./src/images/destroyer.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/submarine.png */ "./src/images/submarine.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/patrol-boat.png */ "./src/images/patrol-boat.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: anta;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    background-image: linear-gradient(#1d628a, #0e0445);
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    margin: 0px;
    font-family: anta;
    text-shadow: 0px 0px 6px rgba(0,0,0,0.6);
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
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.464);
    background-image: linear-gradient(to top right, #1e21217b, #4a4a6056); 
}

.friendly-frame {
    margin-right: 20px;
}

.frame.highlight-frame {
    background-image: none;
}

.board-title {
    text-align: center;
    padding-top: 10px;
    font-size: 1.5rem;
}

.grid {
    box-sizing: border-box;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.464);
    height: 28rem;
    width: 28rem;
    margin-top: 10px;
    border-radius: 5px;
    padding-bottom: 2px;
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
    border-radius: 5px;
}

.controls-dialogue {
    display: flex;
    height: 2rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: bold;
    vertical-align: bottom;
}

.placement-options-container {
    height: 10%;
    width: calc(28rem + 4px); /* account for grid border width */
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.placement-button {
    width: 30%;
    height: 60%;
    font-weight: 500;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #02c554;
    color: #02c554;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.placement-button:hover {
    background-color: #02c554;
    color: #fff;
  }

.status-container {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 6.5rem;
    align-items: center;
}

.ship-status {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 20%;
    height: 80%;
}

.red-filter {
    filter: brightness(0) saturate(100%) invert(11%) sepia(99%) saturate(4723%) hue-rotate(334deg) brightness(105%) contrast(108%);
}

    .flashing-icon {
        animation: flashing 1s infinite;
    }
    
    @keyframes flashing {
        0% {
          filter: opacity(0%);
        }
        50% {
          filter: opacity(50%);
        }
        100% {
          filter: opacity(100%);
        }
    }

.carrier-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: contain;
}

.battleship-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-size: contain;
}

.destroyer-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: 5rem 5rem;
}

.submarine-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-size: 5rem 5rem;
}

.patrol-boat-status {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-repeat: no-repeat;
    background-size: contain;
}

.enemy-cell:hover {
    background-color: grey;
    cursor: pointer;
}

.miss {
    background-image: linear-gradient(#238cc8, #3561cf);
}

.enemy-hit {
    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);
}

.ship {
    background-image: linear-gradient(rgb(44, 213, 32), #65a739)
}
/* Maintain friendly-hit's priority over .ship styles */
.friendly-hit {
    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);
}

.hover-placement {
    background-image: linear-gradient(rgba(39, 172, 29, 0.46), #65a73974);
}

.game-over-screen {
    position: absolute;
    display: none;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: anta;\n    src: url(../src/fonts/Anta-Regular.ttf);\n}\n\nbody {\n    background-image: linear-gradient(#1d628a, #0e0445);\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: space-between;\n    margin: 0px;\n    font-family: anta;\n    text-shadow: 0px 0px 6px rgba(0,0,0,0.6);\n}\n\na {\n    color: white;\n    text-decoration: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.header {\n    width: 100vw;\n    text-align: center;\n    padding-top: 20px;\n    font-size: 3rem;\n}\n\n.footer {\n    width: 100vw;\n    text-align: center;\n    padding-bottom: 10px;\n    font-size: 1rem;\n}\n\n.game-area {\n    padding-top: 60px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.frame {\n    width: 30rem;\n    height: 45rem;\n    border-radius: 1.1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.464);\n    background-image: linear-gradient(to top right, #1e21217b, #4a4a6056); \n}\n\n.friendly-frame {\n    margin-right: 20px;\n}\n\n.frame.highlight-frame {\n    background-image: none;\n}\n\n.board-title {\n    text-align: center;\n    padding-top: 10px;\n    font-size: 1.5rem;\n}\n\n.grid {\n    box-sizing: border-box;\n    border: 2px solid rgb(255, 255, 255);\n    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.464);\n    height: 28rem;\n    width: 28rem;\n    margin-top: 10px;\n    border-radius: 5px;\n    padding-bottom: 2px;\n}\n\n.grid-row {\n    width: 100%;\n    height: 10%;\n    display: flex;\n}\n\n.cell {\n    height: 100%;\n    width: 10%;\n    border: 0.5px solid grey;\n    border-radius: 5px;\n}\n\n.controls-dialogue {\n    display: flex;\n    height: 2rem;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    font-weight: bold;\n    vertical-align: bottom;\n}\n\n.placement-options-container {\n    height: 10%;\n    width: calc(28rem + 4px); /* account for grid border width */\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.placement-button {\n    width: 30%;\n    height: 60%;\n    font-weight: 500;\n    display: inline-block;\n    padding: 10px 20px;\n    font-size: 16px;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    border: 2px solid #02c554;\n    color: #02c554;\n    border-radius: 5px;\n    transition: background-color 0.3s ease;\n}\n\n.placement-button:hover {\n    background-color: #02c554;\n    color: #fff;\n  }\n\n.status-container {\n    display: flex;\n    flex-direction: row;\n    width: 90%;\n    height: 6.5rem;\n    align-items: center;\n}\n\n.ship-status {\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    width: 20%;\n    height: 80%;\n}\n\n.red-filter {\n    filter: brightness(0) saturate(100%) invert(11%) sepia(99%) saturate(4723%) hue-rotate(334deg) brightness(105%) contrast(108%);\n}\n\n    .flashing-icon {\n        animation: flashing 1s infinite;\n    }\n    \n    @keyframes flashing {\n        0% {\n          filter: opacity(0%);\n        }\n        50% {\n          filter: opacity(50%);\n        }\n        100% {\n          filter: opacity(100%);\n        }\n    }\n\n.carrier-status {\n    background-image: url(./images/aircraft-carrier.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.battleship-status {\n    background-image: url(./images/battleship.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.destroyer-status {\n    background-image: url(./images/destroyer.png);\n    background-repeat: no-repeat;\n    background-size: 5rem 5rem;\n}\n\n.submarine-status {\n    background-image: url(./images/submarine.png);\n    background-repeat: no-repeat;\n    background-size: 5rem 5rem;\n}\n\n.patrol-boat-status {\n    background-image: url(./images/patrol-boat.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n}\n\n.enemy-cell:hover {\n    background-color: grey;\n    cursor: pointer;\n}\n\n.miss {\n    background-image: linear-gradient(#238cc8, #3561cf);\n}\n\n.enemy-hit {\n    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);\n}\n\n.ship {\n    background-image: linear-gradient(rgb(44, 213, 32), #65a739)\n}\n/* Maintain friendly-hit's priority over .ship styles */\n.friendly-hit {\n    background-image: linear-gradient(to bottom right, #e37e3b, #e01e1e);\n}\n\n.hover-placement {\n    background-image: linear-gradient(rgba(39, 172, 29, 0.46), #65a73974);\n}\n\n.game-over-screen {\n    position: absolute;\n    display: none;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.459);\n    justify-content: center;\n    align-items: center;\n}\n\n.game-over-dialogue {\n    display: flex; \n    justify-content: space-evenly;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    background-color: rgba(0, 0, 0, 0.788);\n    border-radius: 1.1rem;;\n    font-size: 18px;\n    font-weight: 700;\n    width: 30rem;\n    height: 20rem;\n}\n\n.reset-game {\n    width: 10rem;\n    display: inline-block;\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n    background: #4aad08cb;\n    color: #FFFFFF;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: 700;\n    padding: 14px 24px 16px;\n    line-height: 1;\n    transition: transform 200ms;\n\n}\n\n.reset-game:hover{\n    transform: translateY(-3px);\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Battleship!</title>\n    <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>\">\n</head>\n<body>\n    <div class=\"header\">\n        <div class=\"page-title\">BATTLESHIP</div>\n    </div>\n    <div class=\"game-area\">\n        <div class=\"frame friendly-frame\">\n            <div class=\"board-title friendly-title\">FRIENDLY SEAS</div>\n            <div class=\"grid friendly-grid\"></div>\n            <div class=\"status-container\">\n                <div class=\"ship-status friendly-carrier carrier-status\"></div>\n                <div class=\"ship-status friendly-battleship battleship-status\"></div>\n                <div class=\"ship-status friendly-destroyer destroyer-status\"></div>\n                <div class=\"ship-status friendly-submarine submarine-status\"></div>\n                <div class=\"ship-status friendly-patrol patrol-boat-status\"></div>\n            </div>\n            <div class=\"controls-dialogue\"></div>\n            <div class=\"placement-options-container friendly-placement\">\n                <button class=\"placement-button randomize-placement\">RANDOMIZE</button>\n                <button class=\"placement-button reset-placement\">RESET</button>\n                <button class=\"placement-button confirm-placement\">CONFIRM</button>\n            </div>\n        </div>\n        <div class=\"frame enemy-frame highlight-frame\">\n            <div class=\"board-title enemy-title\">ENEMY SEAS</div>\n            <div class=\"grid enemy-grid\"></div>\n            <div class=\"status-container\">\n                <div class=\"ship-status enemy-carrier carrier-status\"></div>\n                <div class=\"ship-status enemy-battleship battleship-status\"></div>\n                <div class=\"ship-status enemy-destroyer destroyer-status\"></div>\n                <div class=\"ship-status enemy-submarine submarine-status\"></div>\n                <div class=\"ship-status enemy-patrol patrol-boat-status\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"game-over-screen\">\n        <div class=\"game-over-dialogue\">\n            <div class=\"game-over-title\">Game Over</div>\n            <div class=\"game-over-text\"></div>\n            <button class=\"reset-game\">Reset Game</button>\n        </div>\n    </div>\n    <a href=\"https://github.com/Frobii/tdd-battleship\" class=\"footer\">source code</a>\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"><" + "/script>\n</body>\n</html>";
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
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
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
const ship = __webpack_require__(/*! ../src/ship.js */ "./src/ship.js");

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
    const randomizeButton = document.querySelector('.randomize-placement');
    const resetPlacementButton = document.querySelector('.reset-placement');
    const confirmButton = document.querySelector('.confirm-placement');
    const resetGameButton = document.querySelector('.reset-game');
    const bothFrames = document.querySelectorAll('.frame');
    const enemyFrame = document.querySelector('.enemy-frame');
    const controlsDialogue = document.querySelector('.controls-dialogue');
    const placementOptions = document.querySelector('.placement-options-container');

    const carrierIcon = document.querySelector('.friendly-carrier');
    const battleshipIcon = document.querySelector('.friendly-battleship');
    const destroyerIcon = document.querySelector('.friendly-destroyer');
    const submarineIcon = document.querySelector('.friendly-submarine');
    const patrolIcon = document.querySelector('.friendly-patrol');
    const friendlyIcons = [carrierIcon, battleshipIcon, destroyerIcon, submarineIcon, patrolIcon];

    const enemyCarrierIcon = document.querySelector('.enemy-carrier')
    const enemyBattleshipIcon = document.querySelector('.enemy-battleship');
    const enemyDestroyerIcon = document.querySelector('.enemy-destroyer');
    const enemySubmarineIcon = document.querySelector('.enemy-submarine');
    const enemyPatrolIcon = document.querySelector('.enemy-patrol');
    const enemyIcons = [enemyCarrierIcon, enemyBattleshipIcon, enemyDestroyerIcon, enemySubmarineIcon, enemyPatrolIcon];

    let orientation = 'h'

    const clearHighlight = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        friendlyCells.forEach((cell) => {
            cell.classList.remove('hover-placement')
        })
    }
    
    const orientationEvent = (() => {
        changeOrientation = (event) => {
            if (event.key.toUpperCase() === 'R') {
                if (orientation === 'h') {
                    orientation = 'v'
                } else {
                    orientation = 'h'
                }
                clearHighlight();
                paintDOM.paintFriendly(p1Board, p1PlayArea);
                hoverPreview();
            }
        }
        document.addEventListener('keydown', changeOrientation)
    })();
 
    const hoverPreview = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        friendlyCells.forEach((cell, index) => {
            cell.addEventListener('mouseover', () => {
                // these orientations are incorrect but it works
                // TO DO: Correct orientations throughout the project
                let addNum = 0
                if (orientation === 'v') { 
                    addNum = 1;
                } else if (orientation === 'h') {
                    addNum = 10;
                }
                switch (p1Board.ships.length) {
                    case 0:
                        carrierIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 59) {break}
                        if (orientation === 'v' && (index % 10) > 5) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 4)].classList.add('hover-placement')
                        break;
                    case 1:
                        carrierIcon.classList.remove('flashing-icon')
                        battleshipIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 69) {break}
                        if (orientation === 'v' && (index % 10) > 6) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.add('hover-placement')
                        break;
                    case 2:
                        battleshipIcon.classList.remove('flashing-icon')
                        destroyerIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        break;
                    case 3:
                        destroyerIcon.classList.remove('flashing-icon')
                        submarineIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        break;
                    case 4:
                        submarineIcon.classList.remove('flashing-icon')
                        patrolIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 89) {break}
                        if (orientation === 'v' && (index % 10) > 8) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        break;
                    case 5:
                        patrolIcon.classList.remove('flashing-icon');
                        break;

                };
            });
            cell.addEventListener('mouseout', () => {
                let addNum = 0
                if (orientation === 'v') {
                    addNum = 1;
                } else if (orientation === 'h') {
                    addNum = 10;
                }
                switch (p1Board.ships.length) {
                    case 0:
                        if (orientation === 'h' && index > 59) {break}
                        if (orientation === 'v' && (index % 10) > 5) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 4)].classList.remove('hover-placement')
                        break;
                    case 1:
                        if (orientation === 'h' && index > 69) {break}
                        if (orientation === 'v' && (index % 10) > 6) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.remove('hover-placement')
                        break;
                    case 2:
                    case 3:
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        break;
                    case 4:
                        if (orientation === 'h' && index > 89) {break}
                        if (orientation === 'v' && (index % 10) > 8) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        break;
                };
            });
        }) ;
    };

    const shipPlacementEvent = () => {
        const gridFrame = document.querySelector('.friendly-grid');

        hoverPreview();
        const placeShips = (coordinates) => {
            switch (p1Board.ships.length) {
                case 0:
                    let carrier = ship(5, 'carrier');
                    p1Board.placeShip(carrier, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 1:
                    let battleship = ship(4, 'battleship');
                    p1Board.placeShip(battleship, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 2:
                    let destroyer = ship(3,'destroyer');
                    p1Board.placeShip(destroyer, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 3:
                    let submarine = ship(3, 'submarine');
                    p1Board.placeShip(submarine, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 4:
                    let patrolBoat = ship(2, 'patrol-boat');
                    p1Board.placeShip(patrolBoat, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
            }
        }
        function getCoordinates(cell) {
            let friendlyCells = document.querySelectorAll('.friendly-cell')
            let cellNumber = Array.from(friendlyCells).indexOf(cell);
            let y = cellNumber % 10;
            let x = Math.floor(cellNumber / 10);
            return [x,y];
        }
        gridFrame.addEventListener('click', (event) => {
            if (event.target.classList.contains('friendly-cell')) {
                let coordinates = getCoordinates(event.target);
                placeShips(coordinates)
            }
        })
    };

    const centerFriendly = () => {
        enemyFrame.style.display = 'none';
        controlsDialogue.textContent = 'Press "R" to rotate your ship!';
    }

    const setRandomizeButton = () => {
        randomizeButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            p1Board.placeShipsAtRandom(p1PlayArea, p1Board);
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('flashing-icon')
            })
        });
    };
    
    const setResetPlacementButton = () => {
        resetPlacementButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('flashing-icon')
            })
            hoverPreview();
        });
    }
    
    const setConfirmPlacementButton = () => {
        confirmButton.addEventListener('click', () => {
            if (p1Board.ships.length === 5) {
                randomizeButton.style.display = 'none'
                resetPlacementButton.style.display = 'none'
                confirmButton.style.display = 'none'
                enemyFrame.style.display = 'flex';
                controlsDialogue.textContent = '';
                controlsDialogue.style.height = '0px';
                placementOptions.style.height = '0px';
                bothFrames.forEach((frame) => {
                    frame.style.height = '38rem';
                })
                vsCPU();
            }
        });
    };
    
    const setResetGameButton = () => {
        resetGameButton.addEventListener('click', () => {
            gameOverScreen.style.display = 'none';
            p1Board = gameboard();
            p1PlayArea = p1Board.playArea();
            cpuBoard = gameboard();
            cpuPlayArea = cpuBoard.playArea();
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('red-filter');
            })
            enemyIcons.forEach((icon) => {
                icon.classList.remove('red-filter');
            })
            controlsDialogue.style.height = '2rem';
            placementOptions.style.height = '10%';
            bothFrames.forEach((frame) => {
                frame.style.height = '45rem';
            })
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            centerFriendly();
            paintDOM.highlightFriendly();
            hoverPreview();
            randomizeButton.style.display = 'inline'
            resetPlacementButton.style.display = 'inline'
            confirmButton.style.display = 'inline'
        });
    };

    const checkShipsDown = (board, player) => {
        board.ships.forEach((ship) => {
            if (ship.hits === 5 && ship.name === 'carrier') {
                if (player === 'enemy') {
                    enemyCarrierIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    carrierIcon.classList.add('red-filter');
                }
            } 
            if (ship.hits === 4 && ship.name === 'battleship') {
                if (player === 'enemy') {
                    enemyBattleshipIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    battleshipIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 3 && ship.name === 'destroyer') {
                if (player === 'enemy') {
                    enemyDestroyerIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    destroyerIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 3 && ship.name === 'submarine') {
                if (player === 'enemy') {
                    enemySubmarineIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    submarineIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 2 && ship.name === 'patrol-boat') {
                if (player === 'enemy') {
                    enemyPatrolIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    patrolIcon.classList.add('red-filter');
                }
            }
        })
    }

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

                checkShipsDown(cpuBoard, 'enemy');
                paintDOM.paintEnemy(cpuBoard, cpuPlayArea);

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
                checkShipsDown(p1Board, 'friendly'); // Update the ships down graphics
                paintDOM.paintFriendly(p1Board, p1PlayArea);
                checkForCPUWin(); // Check if the CPU made a winning move
            } while (p1Board.hits.length > currentP1HitsLength)

            // Paint the player's board
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30));
        };
    };

    const establishGameVsCPU = () => {
        centerFriendly();
        paintDOM.paintFriendly(p1Board, p1PlayArea);
        paintDOM.highlightFriendly();
        shipPlacementEvent();
        setRandomizeButton();
        setResetPlacementButton();
        setConfirmPlacementButton();
        setResetGameButton();
    };

    return {
        establishGameVsCPU,
    }
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

gameloop().establishGameVsCPU();

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

    const cpuTurn = (playArea, gameBoard) => {
        let hitsLength = gameBoard.hits.length;
        let coordinates = [];
        let previousHit = [];
        let previousX = 0;
        let previousY = 0;
        let plusX = 0;
        let plusY = 0;
        let minusX = 0;
        let minusY = 0;
        let i = 0;
        let j = 1;
        // Randomize the first shot until a hit is found
        if (hitsLength === 0 ) {
            let x = getRandomInt(10);
            let y = getRandomInt(10);
            coordinates = [x, y];
        }
        // check every coordinate in a given array against the current to ensure a duplicate shot isn't made
        const containsCoords = (array) => array[0] === coordinates[0] && array[1] === coordinates[1];
        // Prepare the variables used for follow up shots
        if (hitsLength > 0) {
            previousHit = gameBoard.hits[hitsLength - j];
            previousX = previousHit[0]
            previousY = previousHit[1]
            plusX = previousX + 1;
            plusY = previousY + 1;
            minusX = previousX - 1;
            minusY = previousY - 1;
        }
        while ((gameBoard.hits.some(containsCoords) || gameBoard.misses.some(containsCoords)) || coordinates.length === 0) {
            // Target positions next to a previous hit
            if (hitsLength > 0) {
                hitsLength = gameBoard.hits.length;
                i++; // Keep track of how many times the while loop has performed an iteration for the current hit
                if (plusX <= 9 && i === 1) { 
                    coordinates = [plusX, previousY]
                } else if (minusX >= 0 && i === 2) {
                    coordinates = [minusX, previousY]
                } else if (plusY <= 9 && i === 3) {
                    coordinates = [previousX, plusY]
                } else if (minusY >= 0 && i === 4) {
                    coordinates = [previousX, minusY]
                } else if (j < hitsLength) { // Go backwards through the array of hits when the latest hit has no other options
                    j++;
                    i = 0;
                    previousHit = gameBoard.hits[hitsLength - j];
                    previousX = previousHit[0];
                    previousY = previousHit[1];
                    plusX = previousX + 1;
                    plusY = previousY + 1;
                    minusX = previousX - 1;
                    minusY = previousY - 1;
                } else {
                    // Randomize the coordinates when no calculated shots can be made
                    x = getRandomInt(10);
                    y = getRandomInt(10);
                    coordinates = [x,y];        
                }
            } else {
                // Re-randomize duplicates when a hit hasn't been found
                x = getRandomInt(10);
                y = getRandomInt(10);
                coordinates = [x,y];
            }
        }
        gameBoard.receiveAttack(coordinates, playArea);
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
        };
    };

    const isSunk = () => {
        return hits == length;
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

/***/ "./src/fonts/Anta-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Anta-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0e0da7a3dc95e085b230.ttf";

/***/ }),

/***/ "./src/images/aircraft-carrier.png":
/*!*****************************************!*\
  !*** ./src/images/aircraft-carrier.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56b6f6449062e1ebe5ec.png";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1cc11a71790885ce3e0.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d3417a8dc424278481f3.png";

/***/ }),

/***/ "./src/images/patrol-boat.png":
/*!************************************!*\
  !*** ./src/images/patrol-boat.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff90600bca57e3fc62a1.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bb49590a39c67c9d300d.png";

/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ec527156834fe8b49d99.js";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js?b635"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSx3QkFBd0IsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxV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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvdGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZGQtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3BhaW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGRkLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RkZC1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9BbnRhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYWlyY3JhZnQtY2Fycmllci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Rlc3Ryb3llci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zdWJtYXJpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGF0cm9sLWJvYXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBhbnRhO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzFkNjI4YSwgIzBlMDQ0NSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IGFudGE7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmdhbWUtYXJlYSB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mcmFtZSB7XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIGhlaWdodDogNDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS4xcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQ2NCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzFlMjEyMTdiLCAjNGE0YTYwNTYpOyBcbn1cblxuLmZyaWVuZGx5LWZyYW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mcmFtZS5oaWdobGlnaHQtZnJhbWUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5ib2FyZC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZ3JpZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNDY0KTtcbiAgICBoZWlnaHQ6IDI4cmVtO1xuICAgIHdpZHRoOiAyOHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4uZ3JpZC1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jZWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udHJvbHMtZGlhbG9ndWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5wbGFjZW1lbnQtb3B0aW9ucy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiBjYWxjKDI4cmVtICsgNHB4KTsgLyogYWNjb3VudCBmb3IgZ3JpZCBib3JkZXIgd2lkdGggKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wbGFjZW1lbnQtYnV0dG9uIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAyYzU1NDtcbiAgICBjb2xvcjogIzAyYzU1NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5wbGFjZW1lbnQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjNTU0O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbi5zdGF0dXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcC1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuLnJlZC1maWx0ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTElKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDQ3MjMlKSBodWUtcm90YXRlKDMzNGRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDglKTtcbn1cblxuICAgIC5mbGFzaGluZy1pY29uIHtcbiAgICAgICAgYW5pbWF0aW9uOiBmbGFzaGluZyAxcyBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyBmbGFzaGluZyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMCUpO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDEwMCUpO1xuICAgICAgICB9XG4gICAgfVxuXG4uY2Fycmllci1zdGF0dXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmJhdHRsZXNoaXAtc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5kZXN0cm95ZXItc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDVyZW0gNXJlbTtcbn1cblxuLnN1Ym1hcmluZS1zdGF0dXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNXJlbSA1cmVtO1xufVxuXG4ucGF0cm9sLWJvYXQtc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5lbmVteS1jZWxsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMjM4Y2M4LCAjMzU2MWNmKTtcbn1cblxuLmVuZW15LWhpdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2UzN2UzYiwgI2UwMWUxZSk7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDQ0LCAyMTMsIDMyKSwgIzY1YTczOSlcbn1cbi8qIE1haW50YWluIGZyaWVuZGx5LWhpdCdzIHByaW9yaXR5IG92ZXIgLnNoaXAgc3R5bGVzICovXG4uZnJpZW5kbHktaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZTM3ZTNiLCAjZTAxZTFlKTtcbn1cblxuLmhvdmVyLXBsYWNlbWVudCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMzksIDE3MiwgMjksIDAuNDYpLCAjNjVhNzM5NzQpO1xufVxuXG4uZ2FtZS1vdmVyLXNjcmVlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1OSk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtb3Zlci1kaWFsb2d1ZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzg4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xufVxuXG4ucmVzZXQtZ2FtZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzRhYWQwOGNiO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHggMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XG5cbn1cblxuLnJlc2V0LWdhbWU6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxpREFBaUQ7SUFDakQsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCLEVBQUUsa0NBQWtDO0lBQzVELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEhBQThIO0FBQ2xJOztJQUVJO1FBQ0ksK0JBQStCO0lBQ25DOztJQUVBO1FBQ0k7VUFDRSxtQkFBbUI7UUFDckI7UUFDQTtVQUNFLG9CQUFvQjtRQUN0QjtRQUNBO1VBQ0UscUJBQXFCO1FBQ3ZCO0lBQ0o7O0FBRUo7SUFDSSx5REFBb0Q7SUFDcEQsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlEQUErQztJQUMvQyw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxvRUFBb0U7QUFDeEU7O0FBRUE7SUFDSTtBQUNKO0FBQ0EsdURBQXVEO0FBQ3ZEO0lBQ0ksb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0kscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW50YTtcXG4gICAgc3JjOiB1cmwoLi4vc3JjL2ZvbnRzL0FudGEtUmVndWxhci50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxZDYyOGEsICMwZTA0NDUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBhbnRhO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLDAsMCwwLjYpO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5nYW1lLWFyZWEge1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZyYW1lIHtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQ2NCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMxZTIxMjE3YiwgIzRhNGE2MDU2KTsgXFxufVxcblxcbi5mcmllbmRseS1mcmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLmZyYW1lLmhpZ2hsaWdodC1mcmFtZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNDY0KTtcXG4gICAgaGVpZ2h0OiAyOHJlbTtcXG4gICAgd2lkdGg6IDI4cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxufVxcblxcbi5ncmlkLXJvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udHJvbHMtZGlhbG9ndWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLnBsYWNlbWVudC1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogY2FsYygyOHJlbSArIDRweCk7IC8qIGFjY291bnQgZm9yIGdyaWQgYm9yZGVyIHdpZHRoICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucGxhY2VtZW50LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDJjNTU0O1xcbiAgICBjb2xvcjogIzAyYzU1NDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLnBsYWNlbWVudC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjNTU0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG4uc3RhdHVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNi41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1zdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4ucmVkLWZpbHRlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBzYXR1cmF0ZSgxMDAlKSBpbnZlcnQoMTElKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDQ3MjMlKSBodWUtcm90YXRlKDMzNGRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDglKTtcXG59XFxuXFxuICAgIC5mbGFzaGluZy1pY29uIHtcXG4gICAgICAgIGFuaW1hdGlvbjogZmxhc2hpbmcgMXMgaW5maW5pdGU7XFxuICAgIH1cXG4gICAgXFxuICAgIEBrZXlmcmFtZXMgZmxhc2hpbmcge1xcbiAgICAgICAgMCUge1xcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMCUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgNTAlIHtcXG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDUwJSk7XFxuICAgICAgICB9XFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDEwMCUpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuLmNhcnJpZXItc3RhdHVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2FpcmNyYWZ0LWNhcnJpZXIucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1zdGF0dXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5kZXN0cm95ZXItc3RhdHVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2Rlc3Ryb3llci5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDVyZW0gNXJlbTtcXG59XFxuXFxuLnN1Ym1hcmluZS1zdGF0dXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc3VibWFyaW5lLnBuZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNXJlbSA1cmVtO1xcbn1cXG5cXG4ucGF0cm9sLWJvYXQtc3RhdHVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3BhdHJvbC1ib2F0LnBuZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmVuZW15LWNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyMzhjYzgsICMzNTYxY2YpO1xcbn1cXG5cXG4uZW5lbXktaGl0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2UzN2UzYiwgI2UwMWUxZSk7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYig0NCwgMjEzLCAzMiksICM2NWE3MzkpXFxufVxcbi8qIE1haW50YWluIGZyaWVuZGx5LWhpdCdzIHByaW9yaXR5IG92ZXIgLnNoaXAgc3R5bGVzICovXFxuLmZyaWVuZGx5LWhpdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNlMzdlM2IsICNlMDFlMWUpO1xcbn1cXG5cXG4uaG92ZXItcGxhY2VtZW50IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMzksIDE3MiwgMjksIDAuNDYpLCAjNjVhNzM5NzQpO1xcbn1cXG5cXG4uZ2FtZS1vdmVyLXNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDU5KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLW92ZXItZGlhbG9ndWUge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTs7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4ucmVzZXQtZ2FtZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzRhYWQwOGNiO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6IDE0cHggMjRweCAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zO1xcblxcbn1cXG5cXG4ucmVzZXQtZ2FtZTpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW5kZXguanNcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgICA8dGl0bGU+QmF0dGxlc2hpcCE8L3RpdGxlPlxcbiAgICA8bGluayByZWw9XFxcImljb25cXFwiIGhyZWY9XFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSUyMmh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTIyIHZpZXdCb3g9JTIyMCAwIDEwMCAxMDAlMjI+PHRleHQgeT0lMjIuOWVtJTIyIGZvbnQtc2l6ZT0lMjI5MCUyMj7wn4yKPC90ZXh0Pjwvc3ZnPlxcXCI+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZVxcXCI+QkFUVExFU0hJUDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1hcmVhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZyYW1lIGZyaWVuZGx5LWZyYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZC10aXRsZSBmcmllbmRseS10aXRsZVxcXCI+RlJJRU5ETFkgU0VBUzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZnJpZW5kbHktZ3JpZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGZyaWVuZGx5LWNhcnJpZXIgY2Fycmllci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBmcmllbmRseS1iYXR0bGVzaGlwIGJhdHRsZXNoaXAtc3RhdHVzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hpcC1zdGF0dXMgZnJpZW5kbHktZGVzdHJveWVyIGRlc3Ryb3llci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBmcmllbmRseS1zdWJtYXJpbmUgc3VibWFyaW5lLXN0YXR1c1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGZyaWVuZGx5LXBhdHJvbCBwYXRyb2wtYm9hdC1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzLWRpYWxvZ3VlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwbGFjZW1lbnQtb3B0aW9ucy1jb250YWluZXIgZnJpZW5kbHktcGxhY2VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicGxhY2VtZW50LWJ1dHRvbiByYW5kb21pemUtcGxhY2VtZW50XFxcIj5SQU5ET01JWkU8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicGxhY2VtZW50LWJ1dHRvbiByZXNldC1wbGFjZW1lbnRcXFwiPlJFU0VUPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInBsYWNlbWVudC1idXR0b24gY29uZmlybS1wbGFjZW1lbnRcXFwiPkNPTkZJUk08L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnJhbWUgZW5lbXktZnJhbWUgaGlnaGxpZ2h0LWZyYW1lXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZC10aXRsZSBlbmVteS10aXRsZVxcXCI+RU5FTVkgU0VBUzwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZW5lbXktZ3JpZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhdHVzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGVuZW15LWNhcnJpZXIgY2Fycmllci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBlbmVteS1iYXR0bGVzaGlwIGJhdHRsZXNoaXAtc3RhdHVzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hpcC1zdGF0dXMgZW5lbXktZGVzdHJveWVyIGRlc3Ryb3llci1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGlwLXN0YXR1cyBlbmVteS1zdWJtYXJpbmUgc3VibWFyaW5lLXN0YXR1c1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoaXAtc3RhdHVzIGVuZW15LXBhdHJvbCBwYXRyb2wtYm9hdC1zdGF0dXNcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLW92ZXItc2NyZWVuXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdhbWUtb3Zlci1kaWFsb2d1ZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2FtZS1vdmVyLXRpdGxlXFxcIj5HYW1lIE92ZXI8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnYW1lLW92ZXItdGV4dFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicmVzZXQtZ2FtZVxcXCI+UmVzZXQgR2FtZTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vRnJvYmlpL3RkZC1iYXR0bGVzaGlwXFxcIiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5zb3VyY2UgY29kZTwvYT5cXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+PFwiICsgXCIvc2NyaXB0PlxcbjwvYm9keT5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaGlwID0gcmVxdWlyZSgnLi4vc3JjL3NoaXAuanMnKTtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBtaXNzZXMgPSBbXTtcbiAgICBsZXQgaGl0cyA9IFtdO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgY29uc3QgcGxheUFyZWEgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwbGF5QXJlYSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgcGxheUFyZWFbaV0gPSBuZXcgQXJyYXkoMTApXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBwbGF5QXJlYTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgW3gseV0gPSBzdGFydFBvcztcbiAgICAgICAgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBudWxsOyBcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgaWYgKHggKyBzaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJTaGlwIHBsYWNlbWVudCBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5QXJlYVt4ICsgaV1beV0gIT0gdW5kZWZpbmVkKSB7IC8vIGNoZWNrIGNob3NlbiBwb3NpdGlvbnMgZm9yIG90aGVyIHNoaXBzXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICAnQ2Fubm90IHBsYWNlIHNoaXBzIG92ZXIgb3RoZXJzISdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBwbGF5QXJlYVt4ICsgaV1beV0gPSBzaGlwICAvLyBQbGFjaW5nIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSAgeyBcbiAgICAgICAgICAgIGlmICh5ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICBcIlNoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZHMhXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlBcmVhW3hdW3kgKyBpXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gICdDYW5ub3QgcGxhY2Ugc2hpcHMgb3ZlciBvdGhlcnMhJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHBsYXlBcmVhW3hdW3kgKyBpXSA9IHNoaXAgLy8gUGxhY2luZyB0aGUgc2hpcCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgcGxhY2VTaGlwc0F0UmFuZG9tID0gKHBsYXlBcmVhLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByYW5kb21EZWNpbWFsID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIGxldCByYW5kb21OdW1iZXIgPSBNYXRoLnJvdW5kKHJhbmRvbURlY2ltYWwpO1xuICAgICAgICAgICAgaWYgKHJhbmRvbU51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaCdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gKHBsYWNlZENvb3Jkcywgc2hpcCwgb3JpZW50YXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFt4LHldO1xuICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIHRha2UgdXAgaWYgcGxhY2VkXG4gICAgICAgICAgICAvLyBpLmUuIGEgYmF0dGxlc2hpcCBoYXMgYSBsZW5ndGggb2YgNCBzbyBpdCBoYXMgNCBwbGFjZW1lbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IGdldFBsYWNlbWVudENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzWzBdICs9IGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlc1sxXSArPSBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXdDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudENvb3JkcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBwb3RlbnRpYWwgcGxhY2VtZW50IGNvb3JkaW5hdGVzIGFnYWluc3QgdGhlIG9uZXMgd2hpY2ggYXJlIGFscmVhZHkgcGxhY2VkXG4gICAgICAgICAgICBjb25zdCBhcnJheXNDb250YWluQ29tbW9uQ29vcmRpbmF0ZXMgPSAoYXJyYXkxLCBhcnJheTIpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFycmF5Mi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXVswXSA9PT0gYXJyYXkyW2pdWzBdICYmIGFycmF5MVtpXVsxXSA9PT0gYXJyYXkyW2pdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRPdXRPZkJvdW5kcyA9IChjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeFJlYWNoID0gY29vcmRpbmF0ZXNbMF0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeVJlYWNoID0gY29vcmRpbmF0ZXNbMV0gKyBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiB4UmVhY2ggPiA5ICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgeVJlYWNoID4gOSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3Qgc2V0IG9mIHBsYWNlbWVudCBjb29yZGluYXRlcyBmb3IgdmFsaWRhdGlvblxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnRDb29yZHMgPSBnZXRQbGFjZW1lbnRDb29yZGluYXRlcyhjb29yZGluYXRlcywgc2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgICAvLyBSYW5kb21pemUgY29vcmRpbmF0ZXMgdG8gZmluZCBhIHBsYWNlbWVudCB3aGljaCBoYXNuJ3QgYmVlbiBtYWRlIGFuZCBpcyB3aXRoaW4gYm91bmRzXG4gICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgYXJyYXlzQ29udGFpbkNvbW1vbkNvb3JkaW5hdGVzKHNoaXBQbGFjZW1lbnRDb29yZHMsIHBsYWNlZENvb3JkcykgfHxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnRPdXRPZkJvdW5kcyhjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCgxMCk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3gseV07XG4gICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudENvb3JkcyA9IGdldFBsYWNlbWVudENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgY29vcmRpbmF0ZXMgdGhpcyBzaGlwIGlzIHRha2luZyB1cCBzbyBmdXR1cmUgc2hpcHMgY2FuJ3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50Q29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VkQ29vcmRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0gc2hpcCg1LCAnY2FycmllcicpO1xuICAgICAgICBsZXQgYmF0dGxlc2hpcCA9IHNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICAgICAgbGV0IGRlc3Ryb3llciA9IHNoaXAoMywnZGVzdHJveWVyJyk7XG4gICAgICAgIGxldCBzdWJtYXJpbmUgPSBzaGlwKDMsICdzdWJtYXJpbmUnKTtcbiAgICAgICAgbGV0IHBhdHJvbEJvYXQgPSBzaGlwKDIsICdwYXRyb2wtYm9hdCcpO1xuICAgICAgICBsZXQgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgICAgICBsZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gIGdldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBnZXRSYW5kb21Db29yZHMocGxhY2VkQ29vcmRzLCBzaGlwLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHBsYXlBcmVhLCBzdGFydFBvcywgb3JpZW50YXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcywgcGxheUFyZWEpID0+IHtcbiAgICAgICAgW3gseV0gPSBjb29yZGluYXRlcztcblxuICAgICAgICBmb3IgKGNvbnN0IG1pc3Mgb2YgbWlzc2VzKSB7IC8vIGNoZWNrIHRoZSBtaXNzZXMgZm9yIGEgZHVwbGljYXRlIHNob3RcbiAgICAgICAgICAgIGlmIChtaXNzLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGhpdCBvZiBoaXRzKSB7IC8vIGNoZWNrIHRoZSBoaXRzIGZvciBhIGR1cGxpY2F0ZSBzaG90XG4gICAgICAgICAgICBpZiAoaGl0LmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGNvb3JkaW5hdGVzW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocGxheUFyZWFbeF1beV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoaXRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcGxheUFyZWFbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzaGlwcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzaGlwID09PSBzaGlwc1tsYXN0SW5kZXhdICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlBcmVhLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHBsYWNlU2hpcHNBdFJhbmRvbSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgbWlzc2VzLFxuICAgICAgICBoaXRzLFxuICAgICAgICBzaGlwcyxcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDsiLCJjb25zdCBnYW1lYm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWJvYXJkLmpzJyk7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKCcuLi9zcmMvcGxheWVyLmpzJyk7XG5jb25zdCBwYWludEJvYXJkID0gcmVxdWlyZSgnLi4vc3JjL3BhaW50Qm9hcmQuanMnKTtcbmNvbnN0IHNoaXAgPSByZXF1aXJlKCcuLi9zcmMvc2hpcC5qcycpO1xuXG5jb25zdCBnYW1lbG9vcCA9ICgpID0+IHtcbiAgICBjb25zdCBwMSA9IHBsYXllcigpO1xuICAgIGxldCBwMUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IHAxUGxheUFyZWEgPSBwMUJvYXJkLnBsYXlBcmVhKCk7XG5cbiAgICBjb25zdCBjcHUgPSBwbGF5ZXIoKTtcbiAgICBsZXQgY3B1Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBsZXQgY3B1UGxheUFyZWEgPSBjcHVCb2FyZC5wbGF5QXJlYSgpO1xuXG4gICAgY29uc3QgcGFpbnRET00gPSBwYWludEJvYXJkKCk7XG5cbiAgICBjb25zdCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItc2NyZWVuJyk7XG4gICAgY29uc3QgZ2FtZU92ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci10ZXh0Jyk7XG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWl6ZS1wbGFjZW1lbnQnKTtcbiAgICBjb25zdCByZXNldFBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1wbGFjZW1lbnQnKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm0tcGxhY2VtZW50Jyk7XG4gICAgY29uc3QgcmVzZXRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWdhbWUnKTtcbiAgICBjb25zdCBib3RoRnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyYW1lJyk7XG4gICAgY29uc3QgZW5lbXlGcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1mcmFtZScpO1xuICAgIGNvbnN0IGNvbnRyb2xzRGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtZGlhbG9ndWUnKTtcbiAgICBjb25zdCBwbGFjZW1lbnRPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudC1vcHRpb25zLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY2Fycmllckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktY2FycmllcicpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWJhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBkZXN0cm95ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWRlc3Ryb3llcicpO1xuICAgIGNvbnN0IHN1Ym1hcmluZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktc3VibWFyaW5lJyk7XG4gICAgY29uc3QgcGF0cm9sSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmllbmRseS1wYXRyb2wnKTtcbiAgICBjb25zdCBmcmllbmRseUljb25zID0gW2NhcnJpZXJJY29uLCBiYXR0bGVzaGlwSWNvbiwgZGVzdHJveWVySWNvbiwgc3VibWFyaW5lSWNvbiwgcGF0cm9sSWNvbl07XG5cbiAgICBjb25zdCBlbmVteUNhcnJpZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWNhcnJpZXInKVxuICAgIGNvbnN0IGVuZW15QmF0dGxlc2hpcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktYmF0dGxlc2hpcCcpO1xuICAgIGNvbnN0IGVuZW15RGVzdHJveWVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1kZXN0cm95ZXInKTtcbiAgICBjb25zdCBlbmVteVN1Ym1hcmluZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktc3VibWFyaW5lJyk7XG4gICAgY29uc3QgZW5lbXlQYXRyb2xJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LXBhdHJvbCcpO1xuICAgIGNvbnN0IGVuZW15SWNvbnMgPSBbZW5lbXlDYXJyaWVySWNvbiwgZW5lbXlCYXR0bGVzaGlwSWNvbiwgZW5lbXlEZXN0cm95ZXJJY29uLCBlbmVteVN1Ym1hcmluZUljb24sIGVuZW15UGF0cm9sSWNvbl07XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSAnaCdcblxuICAgIGNvbnN0IGNsZWFySGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgZnJpZW5kbHlDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmllbmRseS1jZWxsJylcbiAgICAgICAgZnJpZW5kbHlDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG9yaWVudGF0aW9uRXZlbnQgPSAoKCkgPT4ge1xuICAgICAgICBjaGFuZ2VPcmllbnRhdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpID09PSAnUicpIHtcbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJykge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICd2J1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ2gnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hhbmdlT3JpZW50YXRpb24pXG4gICAgfSkoKTtcbiBcbiAgICBjb25zdCBob3ZlclByZXZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmcmllbmRseUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyaWVuZGx5LWNlbGwnKVxuICAgICAgICBmcmllbmRseUNlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGVzZSBvcmllbnRhdGlvbnMgYXJlIGluY29ycmVjdCBidXQgaXQgd29ya3NcbiAgICAgICAgICAgICAgICAvLyBUTyBETzogQ29ycmVjdCBvcmllbnRhdGlvbnMgdGhyb3VnaG91dCB0aGUgcHJvamVjdFxuICAgICAgICAgICAgICAgIGxldCBhZGROdW0gPSAwXG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHsgXG4gICAgICAgICAgICAgICAgICAgIGFkZE51bSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE51bSA9IDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHAxQm9hcmQuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJpZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcgJiYgaW5kZXggPiA1OSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgKGluZGV4ICUgMTApID4gNSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIGFkZE51bV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMildLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDMpXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiA0KV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyaWVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaGluZy1pY29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXBJY29uLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcgJiYgaW5kZXggPiA2OSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgKGluZGV4ICUgMTApID4gNikge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIGFkZE51bV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMildLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDMpXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXBJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVySWNvbi5jbGFzc0xpc3QuYWRkKCdmbGFzaGluZy1pY29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2gnICYmIGluZGV4ID4gNzkpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3YnICYmIChpbmRleCAlIDEwKSA+IDcpIHticmVha31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyBhZGROdW1dLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDIpXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3Ryb3llckljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtYXJpbmVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcgJiYgaW5kZXggPiA3OSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgKGluZGV4ICUgMTApID4gNykge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIGFkZE51bV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMildLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWFyaW5lSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmbGFzaGluZy1pY29uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHJvbEljb24uY2xhc3NMaXN0LmFkZCgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDg5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA4KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QuYWRkKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHJvbEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2hpbmctaWNvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhZGROdW0gPSAwXG4gICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTnVtID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTnVtID0gMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAocDFCb2FyZC5zaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaCcgJiYgaW5kZXggPiA1OSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndicgJiYgKGluZGV4ICUgMTApID4gNSkge2JyZWFrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIGFkZE51bV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMildLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgKGFkZE51bSAqIDMpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiA0KV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDY5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA2KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAyKV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZGx5Q2VsbHNbaW5kZXggKyAoYWRkTnVtICogMyldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDc5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA3KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kbHlDZWxsc1tpbmRleCArIChhZGROdW0gKiAyKV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItcGxhY2VtZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdoJyAmJiBpbmRleCA+IDg5KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2JyAmJiAoaW5kZXggJSAxMCkgPiA4KSB7YnJlYWt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXBsYWNlbWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRseUNlbGxzW2luZGV4ICsgYWRkTnVtXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1wbGFjZW1lbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSA7XG4gICAgfTtcblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRFdmVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZEZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWdyaWQnKTtcblxuICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgY29uc3QgcGxhY2VTaGlwcyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChwMUJvYXJkLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhcnJpZXIgPSBzaGlwKDUsICdjYXJyaWVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHAxQm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIHAxUGxheUFyZWEsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXR0bGVzaGlwID0gc2hpcCg0LCAnYmF0dGxlc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBwMUJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBwMVBsYXlBcmVhLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzdHJveWVyID0gc2hpcCgzLCdkZXN0cm95ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgcDFCb2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCBwMVBsYXlBcmVhLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VibWFyaW5lID0gc2hpcCgzLCAnc3VibWFyaW5lJyk7XG4gICAgICAgICAgICAgICAgICAgIHAxQm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgcDFQbGF5QXJlYSwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhdHJvbEJvYXQgPSBzaGlwKDIsICdwYXRyb2wtYm9hdCcpO1xuICAgICAgICAgICAgICAgICAgICBwMUJvYXJkLnBsYWNlU2hpcChwYXRyb2xCb2F0LCBwMVBsYXlBcmVhLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgICAgICAgICBob3ZlclByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMoY2VsbCkge1xuICAgICAgICAgICAgbGV0IGZyaWVuZGx5Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJpZW5kbHktY2VsbCcpXG4gICAgICAgICAgICBsZXQgY2VsbE51bWJlciA9IEFycmF5LmZyb20oZnJpZW5kbHlDZWxscykuaW5kZXhPZihjZWxsKTtcbiAgICAgICAgICAgIGxldCB5ID0gY2VsbE51bWJlciAlIDEwO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKGNlbGxOdW1iZXIgLyAxMCk7XG4gICAgICAgICAgICByZXR1cm4gW3gseV07XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZEZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZnJpZW5kbHktY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXMoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBzKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBjZW50ZXJGcmllbmRseSA9ICgpID0+IHtcbiAgICAgICAgZW5lbXlGcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb250cm9sc0RpYWxvZ3VlLnRleHRDb250ZW50ID0gJ1ByZXNzIFwiUlwiIHRvIHJvdGF0ZSB5b3VyIHNoaXAhJztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRSYW5kb21pemVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHAxQm9hcmQuc2hpcHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHAxUGxheUFyZWEgPSBwMUJvYXJkLnBsYXlBcmVhKCk7XG4gICAgICAgICAgICBwMUJvYXJkLnBsYWNlU2hpcHNBdFJhbmRvbShwMVBsYXlBcmVhLCBwMUJvYXJkKTtcbiAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICBmcmllbmRseUljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYXNoaW5nLWljb24nKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBzZXRSZXNldFBsYWNlbWVudEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRQbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwMUJvYXJkLnNoaXBzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBwMVBsYXlBcmVhID0gcDFCb2FyZC5wbGF5QXJlYSgpO1xuICAgICAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgICAgIGZyaWVuZGx5SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmxhc2hpbmctaWNvbicpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaG92ZXJQcmV2aWV3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzZXRDb25maXJtUGxhY2VtZW50QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHAxQm9hcmQuc2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcmFuZG9taXplQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICByZXNldFBsYWNlbWVudEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgZW5lbXlGcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzRGlhbG9ndWUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICBjb250cm9sc0RpYWxvZ3VlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudE9wdGlvbnMuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgYm90aEZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMzhyZW0nO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdnNDUFUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBzZXRSZXNldEdhbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwMUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgICAgICAgICBwMVBsYXlBcmVhID0gcDFCb2FyZC5wbGF5QXJlYSgpO1xuICAgICAgICAgICAgY3B1Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIGNwdVBsYXlBcmVhID0gY3B1Qm9hcmQucGxheUFyZWEoKTtcbiAgICAgICAgICAgIGZyaWVuZGx5SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGVuZW15SWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnRyb2xzRGlhbG9ndWUuc3R5bGUuaGVpZ2h0ID0gJzJyZW0nO1xuICAgICAgICAgICAgcGxhY2VtZW50T3B0aW9ucy5zdHlsZS5oZWlnaHQgPSAnMTAlJztcbiAgICAgICAgICAgIGJvdGhGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSAnNDVyZW0nO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICBjZW50ZXJGcmllbmRseSgpO1xuICAgICAgICAgICAgcGFpbnRET00uaGlnaGxpZ2h0RnJpZW5kbHkoKTtcbiAgICAgICAgICAgIGhvdmVyUHJldmlldygpO1xuICAgICAgICAgICAgcmFuZG9taXplQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICAgICAgcmVzZXRQbGFjZW1lbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tTaGlwc0Rvd24gPSAoYm9hcmQsIHBsYXllcikgPT4ge1xuICAgICAgICBib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzID09PSA1ICYmIHNoaXAubmFtZSA9PT0gJ2NhcnJpZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gJ2VuZW15Jykge1xuICAgICAgICAgICAgICAgICAgICBlbmVteUNhcnJpZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2ZyaWVuZGx5Jykge1xuICAgICAgICAgICAgICAgICAgICBjYXJyaWVySWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHMgPT09IDQgJiYgc2hpcC5uYW1lID09PSAnYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSAnZW5lbXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15QmF0dGxlc2hpcEljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnZnJpZW5kbHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZXNoaXBJY29uLmNsYXNzTGlzdC5hZGQoJ3JlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzID09PSAzICYmIHNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSAnZW5lbXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15RGVzdHJveWVySWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdmcmllbmRseScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveWVySWNvbi5jbGFzc0xpc3QuYWRkKCdyZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoaXAuaGl0cyA9PT0gMyAmJiBzaGlwLm5hbWUgPT09ICdzdWJtYXJpbmUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gJ2VuZW15Jykge1xuICAgICAgICAgICAgICAgICAgICBlbmVteVN1Ym1hcmluZUljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnZnJpZW5kbHknKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1hcmluZUljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHMgPT09IDIgJiYgc2hpcC5uYW1lID09PSAncGF0cm9sLWJvYXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gJ2VuZW15Jykge1xuICAgICAgICAgICAgICAgICAgICBlbmVteVBhdHJvbEljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnZnJpZW5kbHknKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHJvbEljb24uY2xhc3NMaXN0LmFkZCgncmVkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclAxV2luID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3B1Qm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZ2FtZU92ZXJUZXh0LmlubmVySFRNTCA9ICdZb3UgV29uISA8YnI+IFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/J1xuICAgICAgICAgICAgcGFpbnRET00udG9nZ2xlRW5lbXlDbGlja2FibGUoKTtcbiAgICAgICAgICAgIHJldHVybiAnd2luJ1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0ZvckNQVVdpbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKHAxQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZ2FtZU92ZXJUZXh0LmlubmVySFRNTCA9ICdUaGUgQ1BVIFdvbiEgPGJyPiBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluPydcbiAgICAgICAgICAgIHJldHVybiAnd2luJ1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiB2c0NQVSgpIHtcbiAgICAgICAgY3B1Qm9hcmQucGxhY2VTaGlwc0F0UmFuZG9tKGNwdVBsYXlBcmVhLCBjcHVCb2FyZCk7XG5cbiAgICAgICAgcGFpbnRET00ucGFpbnRGcmllbmRseShwMUJvYXJkLCBwMVBsYXlBcmVhKTtcbiAgICAgICAgbGV0IGN1cnJlbnRDUFVIaXRzTGVuZ3RoID0gY3B1Qm9hcmQuaGl0cy5sZW5ndGg7XG4gICAgICAgIGxldCBjdXJyZW50UDFIaXRzTGVuZ3RoID0gcDFCb2FyZC5oaXRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCFwMUJvYXJkLmFsbFN1bmsoKSAmJiAhY3B1Qm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgJiBwYWludCB0aGUgZW5lbXkgYm9hcmRcbiAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RW5lbXkoY3B1Qm9hcmQsIGNwdVBsYXlBcmVhKTtcbiAgICAgICAgICAgIC8vIEVuYWJsZSBjbGlja3Mgb24gdGhlIGVuZW15IGJvYXJkIHNvIHRoZSBwbGF5ZXIgY2FuIHRha2UgYSB0dXJuXG4gICAgICAgICAgICBwYWludERPTS50b2dnbGVFbmVteUNsaWNrYWJsZSgpO1xuXG4gICAgICAgICAgICBkbyB7IC8vIFdhaXQgZm9yIHRoZSBwbGF5ZXIncyB0dXJuXG4gICAgICAgICAgICAgICAgY3VycmVudENQVUhpdHNMZW5ndGggPSBjcHVCb2FyZC5oaXRzLmxlbmd0aFxuICAgICAgICAgICAgICAgIGF3YWl0IHAxLndhaXRGb3JQbGF5ZXJUdXJuKCk7XG5cbiAgICAgICAgICAgICAgICBjaGVja1NoaXBzRG93bihjcHVCb2FyZCwgJ2VuZW15Jyk7XG4gICAgICAgICAgICAgICAgcGFpbnRET00ucGFpbnRFbmVteShjcHVCb2FyZCwgY3B1UGxheUFyZWEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRm9yUDFXaW4oKSA9PT0gJ3dpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfTsgLy8gQ2hlY2sgaWYgdGhlIHBsYXllciBtYWRlIGEgd2lubmluZyBtb3ZlXG4gICAgICAgICAgICAvLyBHaXZlIHRoZSBwbGF5ZXIgYW4gZXh0cmEgdHVybiBpZiB0aGV5IGxhbmQgYSBzaG90XG4gICAgICAgICAgICB9IHdoaWxlIChjcHVCb2FyZC5oaXRzLmxlbmd0aCA+IGN1cnJlbnRDUFVIaXRzTGVuZ3RoKVxuXG4gICAgICAgICAgICAvLyBEZWxheSB0aGUgdGltZSBiZXR3ZWVuIHR1cm4gc3dhcHNcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMCkpOyBcbiAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2tzIG9uIHRoZSBlbmVteSBib2FyZCBkdXJpbmcgdGhlIENQVSdzIHR1cm5cbiAgICAgICAgICAgIHBhaW50RE9NLnRvZ2dsZUVuZW15Q2xpY2thYmxlKCk7XG4gICAgICAgICAgICAvLyBIaWdobGlnaCB0aGUgZnJpZW5kbHkgYm9hcmRcbiAgICAgICAgICAgIHBhaW50RE9NLmhpZ2hsaWdodEZyaWVuZGx5KCk7XG5cbiAgICAgICAgICAgIGRvIHsgLy8gRXhlY3V0ZSBDUFUncyB0dXJuXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDkwMCkpOyAvLyBEZWxheSB0aGUgQ1BVJ3MgdHVyblxuICAgICAgICAgICAgICAgIGN1cnJlbnRQMUhpdHNMZW5ndGggPSBwMUJvYXJkLmhpdHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgY3B1LmNwdVR1cm4ocDFQbGF5QXJlYSwgcDFCb2FyZCk7XG4gICAgICAgICAgICAgICAgY2hlY2tTaGlwc0Rvd24ocDFCb2FyZCwgJ2ZyaWVuZGx5Jyk7IC8vIFVwZGF0ZSB0aGUgc2hpcHMgZG93biBncmFwaGljc1xuICAgICAgICAgICAgICAgIHBhaW50RE9NLnBhaW50RnJpZW5kbHkocDFCb2FyZCwgcDFQbGF5QXJlYSk7XG4gICAgICAgICAgICAgICAgY2hlY2tGb3JDUFVXaW4oKTsgLy8gQ2hlY2sgaWYgdGhlIENQVSBtYWRlIGEgd2lubmluZyBtb3ZlXG4gICAgICAgICAgICB9IHdoaWxlIChwMUJvYXJkLmhpdHMubGVuZ3RoID4gY3VycmVudFAxSGl0c0xlbmd0aClcblxuICAgICAgICAgICAgLy8gUGFpbnQgdGhlIHBsYXllcidzIGJvYXJkXG4gICAgICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICAgICAgLy8gRGVsYXkgdGhlIHRpbWUgYmV0d2VlbiB0dXJuIHN3YXBzXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzApKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXN0YWJsaXNoR2FtZVZzQ1BVID0gKCkgPT4ge1xuICAgICAgICBjZW50ZXJGcmllbmRseSgpO1xuICAgICAgICBwYWludERPTS5wYWludEZyaWVuZGx5KHAxQm9hcmQsIHAxUGxheUFyZWEpO1xuICAgICAgICBwYWludERPTS5oaWdobGlnaHRGcmllbmRseSgpO1xuICAgICAgICBzaGlwUGxhY2VtZW50RXZlbnQoKTtcbiAgICAgICAgc2V0UmFuZG9taXplQnV0dG9uKCk7XG4gICAgICAgIHNldFJlc2V0UGxhY2VtZW50QnV0dG9uKCk7XG4gICAgICAgIHNldENvbmZpcm1QbGFjZW1lbnRCdXR0b24oKTtcbiAgICAgICAgc2V0UmVzZXRHYW1lQnV0dG9uKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGVzdGFibGlzaEdhbWVWc0NQVSxcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVsb29wOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3RlbXBsYXRlLmh0bWwnO1xuY29uc3QgZ2FtZWxvb3AgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWxvb3AuanMnKTtcblxuZ2FtZWxvb3AoKS5lc3RhYmxpc2hHYW1lVnNDUFUoKTsiLCJjb25zdCBwYWludEJvYXJkID0gKCkgPT4ge1xuICAgIGxldCBlbmVteUNsaWNrYWJsZSA9IHRydWU7XG5cbiAgICBjb25zdCB0b2dnbGVFbmVteUNsaWNrYWJsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW5lbXlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWdyaWQnKTtcbiAgICAgICAgaWYgKGVuZW15Q2xpY2thYmxlKSB7XG4gICAgICAgICAgICBlbmVteUdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICAgICAgICAgIGVuZW15Q2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmVteUdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIGVuZW15Q2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGhpZ2hsaWdodEZyaWVuZGx5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmVteUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWZyYW1lJyk7XG4gICAgICAgIGVuZW15RnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmcmllbmRseUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyaWVuZGx5LWZyYW1lJyk7XG4gICAgICAgIGZyaWVuZGx5RnJhbWUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBoaWdobGlnaHRFbmVteSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZnJpZW5kbHlGcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mcmllbmRseS1mcmFtZScpXG4gICAgICAgIGZyaWVuZGx5RnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbmVteUZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWZyYW1lJyk7XG4gICAgICAgIGVuZW15RnJhbWUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LWZyYW1lJyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjb250YWluc0Nvb3JkcyA9IChhcnJheSwgY29vcmRpbmF0ZXMpID0+ICB7XG4gICAgICAgIHJldHVybiBhcnJheS5zb21lKGNvb3JkID0+IGNvb3JkLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBjb29yZGluYXRlc1tpbmRleF0pKSBcbiAgICB9O1xuXG4gICAgY29uc3QgcGFpbnRGcmllbmRseSA9IChnYW1lYm9hcmQsIHBsYXlBcmVhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnJpZW5kbHktZ3JpZCcpO1xuICAgICAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBhbGwgb2YgdGhlIGNoaWxkIG5vZGVzIGZyb20gdGhlIHByZXZpb3VzIHJ1blxuICAgICAgICBcbiAgICAgICAgbGV0IG1pc3NlcyA9IGdhbWVib2FyZC5taXNzZXM7XG4gICAgICAgIGxldCBoaXRzID0gZ2FtZWJvYXJkLmhpdHM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vIGkgPSB5IGF4aXNcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2dyaWQtcm93Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykgeyAvLyBqID0geCBheGlzXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZnJpZW5kbHktY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlU2hpcCA9IHBsYXlBcmVhW2ldW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjb250YWluc0Nvb3JkcyhtaXNzZXMsIFtpLGpdKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbnNDb29yZHMoaGl0cywgW2ksal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZnJpZW5kbHktaGl0JylcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gb25seSBmcmllbmRseSBzaGlwcyBzaG91bGQgZXZlciByZWNpZXZlIHRoZSBzaGlwIGNsYXNzXG4gICAgICAgICAgICAgICAgLy8gZW5lbXkgc2hpcHMgYXJlIG5ldmVyIGdpdmVuIGdyYXBoaWNzXG4gICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlU2hpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IHBvc3NpYmxlU2hpcC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoc2hpcE5hbWUpOyBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBhaW50RW5lbXkgPSAoZ2FtZWJvYXJkLCBwbGF5QXJlYSkgPT4ge1xuICAgICAgICBoaWdobGlnaHRFbmVteSgpOyAvLyBUaGUgZW5lbXkgaXMgYWx3YXlzIHRoZSBmaXJzdCB0byBiZSB0YXJnZXRlZFxuICAgICAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWdyaWQnKVxuICAgICAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBhbGwgb2YgdGhlIGNoaWxkIG5vZGVzIGZyb20gdGhlIHByZXZpb3VzIHJ1blxuXG4gICAgICAgIGxldCBtaXNzZXMgPSBnYW1lYm9hcmQubWlzc2VzO1xuICAgICAgICBsZXQgaGl0cyA9IGdhbWVib2FyZC5oaXRzO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdncmlkLXJvdycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1jZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2ksal0sIHBsYXlBcmVhKVxuICAgICAgICAgICAgICAgICAgICBwYWludEVuZW15KGdhbWVib2FyZCwgcGxheUFyZWEpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ29vcmRzKG1pc3NlcywgW2ksal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb250YWluc0Nvb3JkcyhoaXRzLCBbaSxqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1oaXQnKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9nZ2xlRW5lbXlDbGlja2FibGUsXG4gICAgICAgIGhpZ2hsaWdodEZyaWVuZGx5LFxuICAgICAgICBwYWludEZyaWVuZGx5LFxuICAgICAgICBwYWludEVuZW15LFxuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhaW50Qm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3B1VHVybiA9IChwbGF5QXJlYSwgZ2FtZUJvYXJkKSA9PiB7XG4gICAgICAgIGxldCBoaXRzTGVuZ3RoID0gZ2FtZUJvYXJkLmhpdHMubGVuZ3RoO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IHByZXZpb3VzSGl0ID0gW107XG4gICAgICAgIGxldCBwcmV2aW91c1ggPSAwO1xuICAgICAgICBsZXQgcHJldmlvdXNZID0gMDtcbiAgICAgICAgbGV0IHBsdXNYID0gMDtcbiAgICAgICAgbGV0IHBsdXNZID0gMDtcbiAgICAgICAgbGV0IG1pbnVzWCA9IDA7XG4gICAgICAgIGxldCBtaW51c1kgPSAwO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBqID0gMTtcbiAgICAgICAgLy8gUmFuZG9taXplIHRoZSBmaXJzdCBzaG90IHVudGlsIGEgaGl0IGlzIGZvdW5kXG4gICAgICAgIGlmIChoaXRzTGVuZ3RoID09PSAwICkge1xuICAgICAgICAgICAgbGV0IHggPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeCwgeV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZXZlcnkgY29vcmRpbmF0ZSBpbiBhIGdpdmVuIGFycmF5IGFnYWluc3QgdGhlIGN1cnJlbnQgdG8gZW5zdXJlIGEgZHVwbGljYXRlIHNob3QgaXNuJ3QgbWFkZVxuICAgICAgICBjb25zdCBjb250YWluc0Nvb3JkcyA9IChhcnJheSkgPT4gYXJyYXlbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIGFycmF5WzFdID09PSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgdmFyaWFibGVzIHVzZWQgZm9yIGZvbGxvdyB1cCBzaG90c1xuICAgICAgICBpZiAoaGl0c0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gZ2FtZUJvYXJkLmhpdHNbaGl0c0xlbmd0aCAtIGpdO1xuICAgICAgICAgICAgcHJldmlvdXNYID0gcHJldmlvdXNIaXRbMF1cbiAgICAgICAgICAgIHByZXZpb3VzWSA9IHByZXZpb3VzSGl0WzFdXG4gICAgICAgICAgICBwbHVzWCA9IHByZXZpb3VzWCArIDE7XG4gICAgICAgICAgICBwbHVzWSA9IHByZXZpb3VzWSArIDE7XG4gICAgICAgICAgICBtaW51c1ggPSBwcmV2aW91c1ggLSAxO1xuICAgICAgICAgICAgbWludXNZID0gcHJldmlvdXNZIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoKGdhbWVCb2FyZC5oaXRzLnNvbWUoY29udGFpbnNDb29yZHMpIHx8IGdhbWVCb2FyZC5taXNzZXMuc29tZShjb250YWluc0Nvb3JkcykpIHx8IGNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gVGFyZ2V0IHBvc2l0aW9ucyBuZXh0IHRvIGEgcHJldmlvdXMgaGl0XG4gICAgICAgICAgICBpZiAoaGl0c0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBoaXRzTGVuZ3RoID0gZ2FtZUJvYXJkLmhpdHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGkrKzsgLy8gS2VlcCB0cmFjayBvZiBob3cgbWFueSB0aW1lcyB0aGUgd2hpbGUgbG9vcCBoYXMgcGVyZm9ybWVkIGFuIGl0ZXJhdGlvbiBmb3IgdGhlIGN1cnJlbnQgaGl0XG4gICAgICAgICAgICAgICAgaWYgKHBsdXNYIDw9IDkgJiYgaSA9PT0gMSkgeyBcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbcGx1c1gsIHByZXZpb3VzWV1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1pbnVzWCA+PSAwICYmIGkgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbbWludXNYLCBwcmV2aW91c1ldXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVzWSA8PSA5ICYmIGkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbcHJldmlvdXNYLCBwbHVzWV1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1pbnVzWSA+PSAwICYmIGkgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbcHJldmlvdXNYLCBtaW51c1ldXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChqIDwgaGl0c0xlbmd0aCkgeyAvLyBHbyBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgYXJyYXkgb2YgaGl0cyB3aGVuIHRoZSBsYXRlc3QgaGl0IGhhcyBubyBvdGhlciBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGl0ID0gZ2FtZUJvYXJkLmhpdHNbaGl0c0xlbmd0aCAtIGpdO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ggPSBwcmV2aW91c0hpdFswXTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNZID0gcHJldmlvdXNIaXRbMV07XG4gICAgICAgICAgICAgICAgICAgIHBsdXNYID0gcHJldmlvdXNYICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcGx1c1kgPSBwcmV2aW91c1kgKyAxO1xuICAgICAgICAgICAgICAgICAgICBtaW51c1ggPSBwcmV2aW91c1ggLSAxO1xuICAgICAgICAgICAgICAgICAgICBtaW51c1kgPSBwcmV2aW91c1kgLSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJhbmRvbWl6ZSB0aGUgY29vcmRpbmF0ZXMgd2hlbiBubyBjYWxjdWxhdGVkIHNob3RzIGNhbiBiZSBtYWRlXG4gICAgICAgICAgICAgICAgICAgIHggPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgICAgICB5ID0gZ2V0UmFuZG9tSW50KDEwKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeCx5XTsgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtcmFuZG9taXplIGR1cGxpY2F0ZXMgd2hlbiBhIGhpdCBoYXNuJ3QgYmVlbiBmb3VuZFxuICAgICAgICAgICAgICAgIHggPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgIHkgPSBnZXRSYW5kb21JbnQoMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3gseV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMsIHBsYXlBcmVhKTtcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH07XG5cbiAgICBjb25zdCB3YWl0Rm9yUGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW5lbXlDZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VuZW15LWNlbGwnKTtcbiAgICAgICAgY29uc3QgY2VsbHNBcnJheSA9IEFycmF5LmZyb20oZW5lbXlDZWxscyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjZWxsc0FycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktaGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBjbGljayBldmVudCBpZiB0aGUgcG9zaXRpb24gaGFzIGJlZW4gdGFyZ2V0ZWQgYmVmb3JlXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHBsYXllckNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gcHJldmVudCBtdWx0aXBsZSBjbGlja3NcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckNsaWNrTGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIHRvIGNvbnRpbnVlIHRoZSBnYW1lIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcHVUdXJuLFxuICAgICAgICB3YWl0Rm9yUGxheWVyVHVybixcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7IiwiY29uc3Qgc2hpcCA9IChsZW5ndGgsIG5hbWUgPSAnZGVmYXVsdC1zaGlwJykgPT4ge1xuICAgIGxldCBoaXRzID0gMDtcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhpdHMgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGhpdHMrKztcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0cyA9PSBsZW5ndGg7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCwgXG4gICAgICAgIGdldCBoaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhpdHNcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhpdHModmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8PSBsZW5ndGggJiYgdmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgaGl0cyA9IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhpdCwgXG4gICAgICAgIGlzU3Vua1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=