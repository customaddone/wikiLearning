/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WikiShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usersshow: "",
      showquery: {
        format: 'json',
        action: 'parse',
        origin: '*',
        page: ""
      },
      url: "https://en.wikipedia.org/w/api.php"
    };
  },
  mounted: function mounted() {
    var _this = this;

    var pathname = location.pathname;
    var searchname = pathname.split("/");
    var underVarJoin = searchname[3].split("%20").join('_');
    this.showquery.page = searchname.length == 4 ? encodeURI(underVarJoin) : "";
    axios.get(this.url, {
      params: this.showquery
    }).then(function (response) {
      _this.usersshow = response.data.parse.text["*"].replace(/<a href="\/wiki\/((?!File:).*?)".*?>(.+?)<\/a>/g, '<a href="./$1">$2</a>').replace(/<a href="\/w\/index.*?".*?>(.*?)<\/a>/g, '$1').replace(/<a href="((?=Help).*?)".*?>(.*?)<\/a>/g, '$2');
    })["catch"](function (response) {
      return console.log(response);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.wikicss[data-v-cc06e490] {\n.wikipedia-container {\n  margin: 0 auto;\n  width: 95%;\n}\n.client-js #mw-subcategories ul {\n    list-style: none none;\n    margin-left:0.25em\n}\n#mw-panel div.portal div.body .CategoryTreeTag {\n    margin: 0;\n    font-size: 0.75em;\n    line-height:1.125em\n}\n#mw-panel div.portal div.body .CategoryTreeItem {\n    padding:0.25em 0\n}\n.CategoryTreeChildren {\n    margin-left:1.25em\n}\n.CategoryTreeBullet, .CategoryTreeEmptyBullet {\n    cursor: default;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select:none\n}\n.CategoryTreeEmptyBullet {\n    color:#c0c0c0\n}\n.CategoryTreeBullet a, .CategoryTreeBullet a:link, .CategoryTreeBullet a:active, .CategoryTreeBullet a:visited {\n    text-decoration: none;\n    color: inherit;\n    speak:none\n}\n.client-nojs .CategoryTreeBullet, .client-nojs .CategoryTreeEmptyBullet {\n    display:none\n}\n.CategoryTreeToggle {\n    color:#0645ad\n}\n.CategoryTreeLabelPage {\n    font-style:italic\n}\n.CategoryTreeParents {\n    margin-top: 1.5ex;\n    font-style:italic\n}\n.CategoryTreeResult {\n    margin-top:1.5ex\n}\n.CategoryTreeTag {\n    margin-top: 0.5ex;\n    margin-bottom:0.5ex\n}\n.CategoryTreeNotice {\n    font-style:italic\n}\n.CategoryTreeSection {\n    direction:ltr\n}\n.mw-cite-backlink, .cite-accessibility-label {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select:none\n}\n.mw-references-columns {\n    -webkit-column-width: 30em;\n    -moz-column-width: 30em;\n    column-width:30em\n}\n.mw-references-columns li {\n    -webkit-column-break-inside: avoid;\n    page-break-inside: avoid;\n    break-inside:avoid-column\n}\nsup.reference {\n    unicode-bidi: -moz-isolate;\n    unicode-bidi: -webkit-isolate;\n    unicode-bidi: isolate;\n    white-space: nowrap;\n    font-weight: normal;\n    font-style:normal\n}\nol.references li:target, sup.reference:target {\n    background-color:#eaf3ff\n}\n.mw-ext-cite-error {\n    font-weight: bold;\n    unicode-bidi:embed\n}\n.mw-cite-dir-ltr .reference-text {\n    direction: ltr;\n    unicode-bidi:embed\n}\n.mw-cite-dir-rtl .reference-text {\n    direction: rtl;\n    unicode-bidi:embed\n}\n.mw-references-columns {\n    -webkit-column-width: 25em;\n    -moz-column-width: 25em;\n    column-width:25em\n}\n@media print {\n.mw-cite-backlink {\n        display:none\n}\n}\n.hlist dl, .hlist ol, .hlist ul {\n    margin: 0;\n    padding:0\n}\n.hlist dl dl, .hlist ol dl, .hlist ul dl, .hlist dl ol, .hlist ol ol, .hlist ul ol, .hlist dl ul, .hlist ol ul, .hlist ul ul {\n    display:inline\n}\n.hlist dd, .hlist dt, .hlist li {\n    margin: 0;\n    display:inline\n}\nul.hlist li, .hlist > ul li, .hlist > dl li {\n    display: inline-block;\n    margin-right:8px\n}\n.hlist-separated li:after {\n    content: '\\2022' !important;\n    padding-left: 8px;\n    font-size: 1em;\n    line-height:1\n}\n.hlist-separated :last-child:after {\n    content:none !important\n}\n.mw-ui-button {\n    background-color: #f8f9fa;\n    color: #222222;\n    display: inline-block;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    min-width: 4em;\n    max-width: 28.75em;\n    margin: 0;\n    padding: 0.57142857em 0.9375em;\n    border: 1px solid #a2a9b1;\n    border-radius: 2px;\n    cursor: pointer;\n    vertical-align: middle;\n    font-family: inherit;\n    font-size: 1em;\n    font-weight: bold;\n    line-height: 1;\n    text-align: center;\n    -webkit-appearance:none\n}\n.mw-ui-button:visited {\n    color:#222222\n}\n.mw-ui-button:hover {\n    background-color: #ffffff;\n    color: #444444;\n    border-color:#a2a9b1\n}\n.mw-ui-button:focus {\n    background-color: #ffffff;\n    color: #222222;\n    border-color: #3366cc;\n    box-shadow: inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff;\n    outline-width:0\n}\n.mw-ui-button:focus::-moz-focus-inner {\n    border-color: transparent;\n    padding:0\n}\n.mw-ui-button:active, .mw-ui-button.is-on {\n    background-color: #c8ccd1;\n    color: #000000;\n    border-color: #72777d;\n    box-shadow:none\n}\n.mw-ui-button:disabled {\n    background-color: #c8ccd1;\n    color: #ffffff;\n    border-color: #c8ccd1;\n    cursor:default\n}\n.mw-ui-button:disabled:hover, .mw-ui-button:disabled:active {\n    background-color: #c8ccd1;\n    color: #ffffff;\n    box-shadow: none;\n    border-color:#c8ccd1\n}\n.mw-ui-button:not(:disabled) {\n    -webkit-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n    -moz-transition: background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms;\n    transition:background-color 100ms, color 100ms, border-color 100ms, box-shadow 100ms\n}\n.mw-ui-button.mw-ui-quiet, .mw-ui-button.mw-ui-quiet.mw-ui-progressive, .mw-ui-button.mw-ui-quiet.mw-ui-destructive {\n    background-color: transparent;\n    color: #222222;\n    border-color:transparent\n}\n.mw-ui-button.mw-ui-quiet:hover, .mw-ui-button.mw-ui-quiet.mw-ui-progressive:hover, .mw-ui-button.mw-ui-quiet.mw-ui-destructive:hover {\n    background-color: transparent;\n    color: #444444;\n    border-color: transparent;\n    box-shadow:none\n}\n.mw-ui-button.mw-ui-quiet:active, .mw-ui-button.mw-ui-quiet.mw-ui-progressive:active, .mw-ui-button.mw-ui-quiet.mw-ui-destructive:active {\n    background-color: transparent;\n    color: #000000;\n    border-color:transparent\n}\n.mw-ui-button.mw-ui-quiet:focus, .mw-ui-button.mw-ui-quiet.mw-ui-progressive:focus, .mw-ui-button.mw-ui-quiet.mw-ui-destructive:focus {\n    background-color: transparent;\n    color: #222222;\n    border-color: transparent;\n    box-shadow:none\n}\n.mw-ui-button.mw-ui-quiet:disabled, .mw-ui-button.mw-ui-quiet.mw-ui-progressive:disabled, .mw-ui-button.mw-ui-quiet.mw-ui-destructive:disabled, .mw-ui-button.mw-ui-quiet:disabled:hover, .mw-ui-button.mw-ui-quiet.mw-ui-progressive:disabled:hover, .mw-ui-button.mw-ui-quiet.mw-ui-destructive:disabled:hover, .mw-ui-button.mw-ui-quiet:disabled:active, .mw-ui-button.mw-ui-quiet.mw-ui-progressive:disabled:active, .mw-ui-button.mw-ui-quiet.mw-ui-destructive:disabled:active {\n    background-color: transparent;\n    color: #72777d;\n    border-color:transparent\n}\n.mw-ui-button.mw-ui-progressive {\n    background-color: #3366cc;\n    color: #fff;\n    border:1px solid #3366cc\n}\n.mw-ui-button.mw-ui-progressive:hover {\n    background-color: #447ff5;\n    border-color:#447ff5\n}\n.mw-ui-button.mw-ui-progressive:focus {\n    box-shadow:inset 0 0 0 1px #3366cc, inset 0 0 0 2px #ffffff\n}\n.mw-ui-button.mw-ui-progressive:active, .mw-ui-button.mw-ui-progressive.is-on {\n    background-color: #2a4b8d;\n    border-color: #2a4b8d;\n    box-shadow:none\n}\n.mw-ui-button.mw-ui-progressive:disabled {\n    background-color: #c8ccd1;\n    color: #fff;\n    border-color:#c8ccd1\n}\n.mw-ui-button.mw-ui-progressive:disabled:hover, .mw-ui-button.mw-ui-progressive:disabled:active {\n    background-color: #c8ccd1;\n    color: #fff;\n    border-color: #c8ccd1;\n    box-shadow:none\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet {\n    color:#3366cc\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:hover {\n    background-color: transparent;\n    color:#447ff5\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:active {\n    color:#2a4b8d\n}\n.mw-ui-button.mw-ui-progressive.mw-ui-quiet:focus {\n    background-color: transparent;\n    color:#3366cc\n}\n.mw-ui-button.mw-ui-destructive {\n    background-color: #dd3333;\n    color: #fff;\n    border:1px solid #dd3333\n}\n.mw-ui-button.mw-ui-destructive:hover {\n    background-color: #ff4242;\n    border-color:#ff4242\n}\n.mw-ui-button.mw-ui-destructive:focus {\n    box-shadow:inset 0 0 0 1px #dd3333, inset 0 0 0 2px #ffffff\n}\n.mw-ui-button.mw-ui-destructive:active, .mw-ui-button.mw-ui-destructive.is-on {\n    background-color: #b32424;\n    border-color: #b32424;\n    box-shadow:none\n}\n.mw-ui-button.mw-ui-destructive:disabled {\n    background-color: #c8ccd1;\n    color: #fff;\n    border-color:#c8ccd1\n}\n.mw-ui-button.mw-ui-destructive:disabled:hover, .mw-ui-button.mw-ui-destructive:disabled:active {\n    background-color: #c8ccd1;\n    color: #fff;\n    border-color: #c8ccd1;\n    box-shadow:none\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet {\n    color:#dd3333\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:hover {\n    background-color: transparent;\n    color:#ff4242\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:active {\n    color:#b32424\n}\n.mw-ui-button.mw-ui-destructive.mw-ui-quiet:focus {\n    background-color: transparent;\n    color:#dd3333\n}\n.mw-ui-button.mw-ui-big {\n    font-size:1.3em\n}\n.mw-ui-button.mw-ui-block {\n    display: block;\n    width: 100%;\n    margin-left: auto;\n    margin-right:auto\n}\ninput.mw-ui-button::-moz-focus-inner, button.mw-ui-button::-moz-focus-inner {\n    margin-top: -1px;\n    margin-bottom:-1px\n}\na.mw-ui-button {\n    text-decoration:none\n}\na.mw-ui-button:hover, a.mw-ui-button:focus {\n    text-decoration:none\n}\n.mw-ui-button-group > * {\n    min-width: 48px;\n    border-radius: 0;\n    float:left\n}\n.mw-ui-button-group > * :first-child {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius:2px\n}\n.mw-ui-button-group > * :not(:first-child) {\n    border-left:0\n}\n.mw-ui-button-group > * :last-child {\n    border-top-right-radius: 2px;\n    border-bottom-right-radius:2px\n}\n.mw-ui-button-group .is-on .button {\n    cursor:default\n}\n.mw-ui-icon {\n    font-size: initial;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box !important;\n    width: 1.25em;\n    height: 1.25em;\n    flex-basis: 1.25em;\n    vertical-align: middle;\n    line-height: 0;\n    overflow: hidden;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background-color: transparent;\n    border: 0;\n    margin: 0;\n    padding:0\n}\n.mw-ui-icon:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    min-width: 1.25em;\n    min-height: 1.25em;\n    background-repeat: no-repeat;\n    background-size: 1.25em 1.25em;\n    background-position:center\n}\n.mw-ui-icon-flush-top {\n    margin-top:-0.75em\n}\n.mw-ui-icon-flush-left {\n    margin-left:-0.75em\n}\n.mw-ui-icon-flush-right {\n    margin-right:-0.75em\n}\n.mw-ui-icon-element {\n    padding: 0.75em;\n    border-radius: 2px;\n    line-height: 999px;\n    color:transparent\n}\n.mw-ui-icon-element:focus, .mw-ui-icon-element:active, .mw-ui-icon-element:visited {\n    color:transparent\n}\n.mw-ui-icon-element:hover {\n    background-color:rgba(0, 0, 0, 0.03)\n}\n.mw-ui-icon-small {\n    width: 1em;\n    height: 1em;\n    flex-basis: 1em;\n    line-height:1em\n}\n.mw-ui-icon-small:before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    min-width: 1em;\n    min-height: 1em;\n    background-repeat: no-repeat;\n    background-size: 1em 1em;\n    background-position:center\n}\n.mw-ui-icon-small.mw-ui-icon-element {\n    padding:0.5625em\n}\n.mw-ui-icon-small.mw-ui-icon-flush-left {\n    margin-left:-0.5625em\n}\n.mw-ui-icon-small.mw-ui-icon-flush-right {\n    margin-right:-0.5625em\n}\n.mw-ui-icon-small.mw-ui-icon-before:before {\n    min-width: 1em;\n    min-height: 1em;\n    margin-right:0.5625em\n}\n.mw-ui-icon-before {\n    width: auto;\n    max-width:100%\n}\n.mw-ui-icon-before:before {\n    display: inline-block;\n    font-size: initial;\n    width: auto;\n    min-width: 1.25em;\n    min-height: 1.25em;\n    margin-right: 0.75em;\n    vertical-align:middle\n}\n.mw-ui-icon-before span {\n    vertical-align:middle\n}\n.client-js .collapsible-block {\n    display:none\n}\n.client-js .collapsible-block.open-block {\n    display:block\n}\n@media all and (min-width: 720px) {\n.client-js [onclick] + .collapsible-block {\n        display:block\n}\n}\ndiv, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, ins, em, img, small, strike, strong, sub, sup, tt, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, input, button, select, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    background:none\n}\ntable, caption, tbody, tfoot, thead, tr, th, td {\n    font-size:100%\n}\ncaption {\n    font-weight:bold\n}\nbutton {\n    border: 0;\n    background-color: transparent;\n    cursor:pointer\n}\ninput {\n    line-height:normal\n}\nul {\n    list-style:none\n}\ntable {\n    border-collapse:collapse\n}\nhtml, body {\n    height:100%\n}\nhtml {\n    font-size: 100%;\n    -webkit-text-size-adjust:none\n}\nbody {\n    background-color: #ffffff;\n    color: #222222;\n    margin: 0;\n    line-height:1\n}\nmain {\n    display:block\n}\n#content {\n    border-top: 1px solid transparent;\n    padding-bottom:32px\n}\n.overlay-enabled, #content {\n    background-color:#ffffff\n}\n.header-container {\n    border-bottom: 1px solid #c8ccd1;\n    padding:0 16px\n}\n.header-container.header-chrome {\n    background-color: #eaecf0;\n    border: 0;\n    box-shadow:inset 0 -1px 3px rgba(0, 0, 0, 0.08)\n}\n.navigation-drawer--loading, #footer-info-lastmod {\n    display:none\n}\n.last-modified-bar a, .last-modified-bar a:visited {\n    color:#54595d\n}\n.last-modified-bar a:nth-child(1), .last-modified-bar a:visited:nth-child(1) {\n    font-weight:bold\n}\n.header {\n    display: table;\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    height: 3.375em;\n    white-space: nowrap;\n    border-top: 1px solid #c8ccd1;\n    margin-top:-1px\n}\n.header > div {\n    position: relative;\n    vertical-align: middle;\n    display:table-cell\n}\n.header > div a {\n    display:block\n}\n.header .branding-box {\n    width:auto\n}\n.header .branding-box h1, .header .branding-box a {\n    margin-left: 5px;\n    font-size: 1em;\n    text-decoration: none;\n    color:#222222\n}\n.header .branding-box h1 span, .header .branding-box a span {\n    line-height: 1;\n    font-size:inherit\n}\n.header .branding-box h1 img, .header .branding-box a img {\n    vertical-align:middle\n}\n.header .branding-box h1 > *, .header .branding-box a > * {\n    float:left\n}\n.header .branding-box h1 sup, .header .branding-box a sup {\n    color: #54595d;\n    display:none\n}\n.beta .header .branding-box h1 sup, .beta .header .branding-box a sup {\n    display:initial\n}\n.header > .header-title {\n    vertical-align:middle\n}\n#searchInput {\n    cursor:text\n}\n.search-box, .header .search-box {\n    display: none;\n    width:auto\n}\n.search-box .search {\n    background-color: #fff;\n    background-position: left 6px center;\n    background-repeat: no-repeat;\n    background-size: 18px;\n    -webkit-appearance: none;\n    width: 100%;\n    margin-top: 0;\n    height: 2.25em;\n    border: 1px solid #ffffff;\n    border-radius: 2px;\n    padding: 7px 0 7px 29px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n    outline: 0;\n    -webkit-transition: border-color 250ms, box-shadow 250ms;\n    -moz-transition: border-color 250ms, box-shadow 250ms;\n    transition:border-color 250ms, box-shadow 250ms\n}\n.client-nojs .search-box .search:focus, .search-overlay .search-box .search:focus {\n    border-color: #3366cc;\n    box-shadow:inset 0 0 0 1px #3366cc, 0 1px 1px rgba(0, 0, 0, 0.05)\n}\ninput.search::-webkit-search-decoration, input.search::-webkit-search-cancel-button, input.search::-webkit-search-results-button, input.search::-webkit-search-results-decoration {\n    display:none\n}\n.content h2 {\n    clear:left\n}\n.content .collapsible-heading .edit-page {\n    visibility:hidden\n}\n.content .collapsible-heading.open-block .edit-page {\n    visibility:visible\n}\n.content .mw-parser-output > h2, .content .section-heading {\n    border-bottom: 1px solid #eaecf0;\n    margin-bottom:0.5em\n}\n.content .mw-parser-output > h1, .content .mw-parser-output > h2, .content .mw-parser-output > h3, .content .mw-parser-output > h4, .content .mw-parser-output > h5, .content .section-heading, .content .in-block {\n    display:table\n}\n.content .mw-parser-output > h1 .mw-headline, .content .mw-parser-output > h2 .mw-headline, .content .mw-parser-output > h3 .mw-headline, .content .mw-parser-output > h4 .mw-headline, .content .mw-parser-output > h5 .mw-headline, .content .section-heading .mw-headline, .content .in-block .mw-headline {\n    width:100%\n}\n.content .mw-parser-output > h1 > span, .content .mw-parser-output > h2 > span, .content .mw-parser-output > h3 > span, .content .mw-parser-output > h4 > span, .content .mw-parser-output > h5 > span, .content .section-heading > span, .content .in-block > span {\n    display: table-cell;\n    vertical-align:middle\n}\n.client-nojs .section-heading .indicator {\n    display:none\n}\n#page-secondary-actions {\n    clear:both\n}\n#page-secondary-actions a {\n    margin:10px 2px 2px 0\n}\n#bodyContent .panel .content, .overlay .content-header, .overlay .panel, .page-list.side-list .list-thumb, .page-list li, .topic-title-list li, .site-link-list li, .pointer-overlay, .drawer, .messagebox, .errorbox, .successbox, .warningbox, .list-header, .mw-revision {\n    padding-left: 16px;\n    padding-right:16px\n}\n.talk-overlay .comment .comment-content, .backtotop, .image-list, .pre-content, #mw-content-text > form > .oo-ui-fieldLayout > .oo-ui-fieldLayout-body, #mw-content-text > form > .oo-ui-widget, .content, .post-content {\n    margin:0 16px\n}\n.minerva__subtitle {\n    margin-top: 10px;\n    margin-bottom:10px\n}\n.minerva__subtitle:empty {\n    margin:0\n}\n@media all and (min-width: 720px) {\n.page-summary-list, .topic-title-list, .site-link-list, .overlay .panel, .list-header {\n        padding-left: 3.35em;\n        padding-right:3.35em\n}\n}\n.heading-holder {\n    padding: 20px 0 0;\n    position:relative\n}\n.heading-holder .tagline {\n    color: #54595d;\n    font-size:0.85em\n}\n.page-heading {\n    margin-bottom:12px\n}\n.mw-ui-icon-element.disabled, .language-selector.disabled {\n    cursor: default;\n    opacity:0.25\n}\n#page-actions {\n    position:relative\n}\n.page-actions-menu {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    border-top: 1px solid #eaecf0;\n    border-bottom: 1px solid #c8ccd1;\n    margin-top:-1px\n}\n.page-actions-menu__list {\n    display: flex;\n    height: 3em;\n    justify-content:space-between\n}\n.page-actions-menu__list-item {\n    display: flex;\n    flex-basis: 4em;\n    justify-content: flex-end;\n    align-items:center\n}\n.page-actions-menu__list-item li > * :hover {\n    box-shadow:none\n}\n.page-actions-menu__list-item:first-child {\n    flex-grow: 1;\n    justify-content: flex-start;\n    margin-left:-8px\n}\n.page-actions-menu__list-item:last-child {\n    margin-right:-8px\n}\n.page-actions-overflow-list {\n    top: 100%;\n    right:-0.75em\n}\n.client-nojs .watch-this-article {\n    visibility:hidden\n}\n.client-nojs .is-authenticated .watch-this-article {\n    visibility:visible\n}\n@media all and (max-width: 320px - 1) {\n.client-nojs #page-actions {\n        display:none\n}\n.client-nojs #section_0 {\n        border:0\n}\n}\n.minerva-user-navigation {\n    display: flex;\n    min-width: 7em;\n    min-height: 3.375em;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n    position:relative\n}\n.minerva-user-navigation > * :last-child {\n    margin-right:-0.75em\n}\n.view-border-box *, .view-border-box {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing:border-box\n}\n.client-js .mw-redirectedfrom, .printfooter, .jsonly {\n    display:none\n}\n.client-js .jsonly {\n    display:inherit\n}\n.hidden {\n    display:none !important\n}\n#mw-mf-viewport {\n    position: relative;\n    height:100%\n}\n#mw-mf-page-center {\n    width: 100%;\n    min-height: 100%;\n    position: relative;\n    background-color:#eaecf0\n}\n.content {\n    position: relative;\n    z-index:0\n}\n.lazy-image-placeholder {\n    background-color: #eaecf0;\n    display:inline-block\n}\nli .lazy-image-placeholder, span .lazy-image-placeholder {\n    display:inline-block\n}\n.client-nojs .lazy-image-placeholder {\n    display:none\n}\n.minerva-footer {\n    border-top: solid 1px #c8ccd1;\n    overflow: auto;\n    padding-bottom:6px\n}\n.last-modified-bar__content {\n    align-items: center;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display:flex\n}\n.client-nojs footer .indicator {\n    display:none\n}\nfooter .content:not(.last-modified-bar__content) > div {\n    height:20px\n}\nfooter .content:not(.last-modified-bar__content) .indicator {\n    float: right;\n    padding:0 8px 0 0\n}\nfooter .hlist li:after {\n    color:#3366cc\n}\nfooter .last-modified-bar {\n    border-bottom: solid 1px #c8ccd1;\n    background-color: #eaecf0;\n    color: #54595d;\n    transition: background-color 0.2s ease, color 0.2s ease;\n    padding-top: 0.75em;\n    padding-bottom: 0.75em;\n    font-size:0.875em\n}\nfooter .last-modified-bar__text {\n    padding-right: 3.5em;\n    padding-left: 0.75em;\n    vertical-align: middle;\n    flex-grow: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-text-overflow: ellipsis;\n    text-overflow:ellipsis\n}\nfooter > .post-content {\n    overflow: auto;\n    margin-top:42px\n}\nfooter > .post-content > * {\n    margin-bottom:9px\n}\nfooter > .post-content > h2 {\n    border-bottom: solid 1px #c8ccd1;\n    padding-bottom: 10px;\n    margin-top: 42px;\n    font-size: 1em;\n    font-weight:bold\n}\nfooter > .post-content > h2:first-child {\n    margin-top:0\n}\nfooter > .post-content .hlist, footer > .post-content .license {\n    font-size:0.875em\n}\n@media (max-width: 720px) {\nfooter .last-modified-bar__text {\n        padding-right:1em\n}\n}\n@media print {\n.noprint, .banner-container, .header, .pre-content, .post-content {\n        display:none\n}\nh1, h2, h3, h4, h5, h6 {\n        page-break-after:avoid\n}\ntable, figure, img, .lazy-image-placeholder {\n        page-break-inside:avoid\n}\nimg {\n        max-width:100%\n}\nimg.image-lazy-loaded {\n        -webkit-animation: none !important;\n        -moz-animation: none !important;\n        animation:none !important\n}\n}\n@media print and (max-device-width: 720px) {\n@page {\n        margin:50px 0\n}\nhtml {\n        padding:0 50px\n}\n.header-container {\n        background: #ffffff !important;\n        box-shadow:none !important\n}\n.header {\n        border-top: 0;\n        display: block;\n        height: auto;\n        padding:0 16px\n}\n.header .branding-box {\n        padding-left:0 !important\n}\n.header .branding-box sup {\n        display:none !important\n}\n.header > div {\n        display:none !important\n}\n.header > .branding-box {\n        height: auto;\n        display: block !important;\n        padding:0 0 51px 50px\n}\n.header > .branding-box h1 {\n        font-size:inherit\n}\n.header > .branding-box h1 > * {\n        float:none\n}\n.header > .branding-box h1 img {\n        height: 41px;\n        width: auto;\n        vertical-align:inherit\n}\n.hatnote {\n        display:none\n}\n.pre-content {\n        display: block;\n        padding:51px 0 35px\n}\n.pre-content h1 {\n        font-size: 70px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        line-height: normal;\n        letter-spacing: normal;\n        text-align: left;\n        color:#000000\n}\n.pre-content .tagline {\n        font-size:36px\n}\n.pre-content #page-actions {\n        display:none\n}\n#bodyContent {\n        padding-top: 55px;\n        position:relative\n}\n#bodyContent:before {\n        top:0\n}\n.thumbinner {\n        width:auto !important\n}\n.thumbinner > a {\n        width:100%\n}\n.thumb {\n        position: relative;\n        padding: 58px 0 !important;\n        text-align: left;\n        margin:0 !important\n}\n.thumb:after {\n        bottom:30px\n}\n.thumb:after, #bodyContent:before {\n        position: absolute;\n        left: 0;\n        content: '';\n        display: block;\n        width: 55px;\n        height: 2px;\n        background:#999999\n}\n.thumbcaption {\n        margin-top: 23px !important;\n        width: 100%;\n        font-style: italic;\n        font-size:28px\n}\n#mw-content-text {\n        font-size:36px\n}\n#mw-content-text a {\n        text-decoration: underline;\n        color:#222222\n}\n#mw-content-text blockquote {\n        color: #54595d;\n        padding: 5px 39px;\n        font-style:italic\n}\n#mw-content-text .section-heading {\n        border-bottom: 0;\n        padding-bottom: 0;\n        margin-bottom:16px\n}\n#mw-content-text h2 {\n        font-size:48px\n}\n#mw-content-text h3 {\n        font-size: 40px;\n        margin-bottom:13px\n}\n#mw-content-text h4, #mw-content-text h5, #mw-content-text h6 {\n        font-size: 36px;\n        margin-bottom:12px\n}\n#mw-content-text .wikitable {\n        font-size:16px\n}\n#mw-content-text table.infobox {\n        font-size:30px\n}\n.references .mw-cite-backlink {\n        display:none\n}\n.references .reference-text {\n        font-style:italic\n}\n.references a {\n        text-decoration:none\n}\n.references .external.text {\n        background-image:none\n}\n.printfooter {\n        display: block;\n        padding-top: 108px;\n        font-size:30px\n}\n#mw-mf-page-center > footer {\n        border-top: solid 4px #000;\n        padding-top: 23px;\n        background:#fff !important\n}\n#mw-mf-page-center > footer .mw-ui-icon:before {\n        display:none !important\n}\n#mw-mf-page-center > footer .last-modified-bar {\n        background: none !important;\n        border:0 !important\n}\n#mw-mf-page-center > footer .last-modifier-tagline {\n        font-size: 36px;\n        padding-top: 0 !important;\n        padding-bottom:16px !important\n}\n#mw-mf-page-center > footer .last-modified-bar, #mw-mf-page-center > footer .last-modified-bar a {\n        font-weight: bold !important;\n        color:#000 !important\n}\n#mw-mf-page-center > footer .post-content {\n        margin-top: 15px !important;\n        display:block !important\n}\n#mw-mf-page-center > footer .post-content .hlist, #mw-mf-page-center > footer .post-content h2 {\n        display:none\n}\n#mw-mf-page-center > footer .post-content .license a, #mw-mf-page-center > footer .post-content .license {\n        font-size: 30px;\n        color: #999999;\n        font-weight:normal\n}\n}\n#toc.toc-mobile {\n    display:none\n}\n#toc {\n    display: none;\n    position: relative;\n    margin: 1em 0;\n    padding: 0.2em 0.5em;\n    background-color: #f8f9fa;\n    border: solid 1px #eaecf0;\n    box-sizing:border-box\n}\n.toctogglecheckbox ~ ul {\n    display:none\n}\n.toctogglecheckbox:checked ~ ul {\n    display:block\n}\n.toctogglelabel {\n    cursor: pointer;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 50px;\n    z-index:1\n}\n.client-js .content .toc .toctitle {\n    visibility: hidden;\n    background-position: right center;\n    font-weight: bold;\n    border-bottom:0\n}\n.client-js .content .toc .toctitle h2 {\n    display: inline-block;\n    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Lato', 'Helvetica', 'Arial', sans-serif;\n    font-size: 1.125em;\n    vertical-align:middle\n}\n.client-js .content .toc .tocnumber {\n    display:none\n}\n.client-js .content .toc > ul {\n    font-size: 0.875em;\n    margin-left: 52px;\n    margin-right: 24px;\n    padding:0 0 20px\n}\n.client-js .content .toc ul {\n    list-style:none\n}\n@media screen and (min-width: 720px) {\n#toc {\n        display:table\n}\n#toc .toctitle {\n        visibility:visible\n}\n}\nbody {\n    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Lato', 'Helvetica', 'Arial', sans-serif;\n    font-size: 100%;\n    line-height: 1.4;\n    -webkit-tap-highlight-color:rgba(0, 0, 0, 0.2)\n}\n.content {\n    line-height: 1.65;\n    word-wrap:break-word\n}\n.content .center {\n    width: 100%;\n    text-align:center\n}\n.content .center > *, .content .center .thumb {\n    margin-left: auto;\n    margin-right:auto\n}\n@media all and (max-width: 320px - 1) {\nbody {\n        font-size:80%\n}\n.content {\n        margin:0 12px\n}\n}\n.nomobile {\n    display:none !important\n}\n@supports (font: -apple-system-body) {\nhtml {\n        font:-apple-system-body\n}\nbody {\n        font-size:94.11764706%\n}\n@media all and (max-width: 320px - 1) {\nbody {\n            font-size:75.29411765%\n}\n}\n}\n.content figure, .content .thumb {\n    margin:0.6em 0\n}\n.content figure .thumbinner, .content .thumb .thumbinner {\n    margin: 0 auto;\n    max-width:100% !important\n}\n.content figcaption, .content .thumbcaption {\n    margin: 0.5em 0 0;\n    font-size: 0.8125em;\n    line-height: 1.5;\n    padding: 0 !important;\n    color:#54595d\n}\n.content .thumbcaption {\n    width:auto !important\n}\n.content .mw-image-border, .content .thumbborder {\n    border:1px solid #c8ccd1\n}\n.content .magnify {\n    display:none\n}\n.content img {\n    vertical-align:middle\n}\n.content .floatright {\n    clear: right;\n    float: right;\n    margin:0 0 0.6em 0.6em\n}\n.content .floatleft {\n    clear: left;\n    float: left;\n    margin:0 0.6em 0.6em 0\n}\n.content a > img, .content a > .lazy-image-placeholder, .content noscript > img {\n    max-width:100% !important\n}\n.content noscript > img, .content a > img {\n    height:auto !important\n}\n.content .noresize {\n    max-width: 100%;\n    overflow-x:auto\n}\n.content .noresize a > img {\n    max-width:none !important\n}\nh1 {\n    font-size:1.7em\n}\nh2 {\n    font-size:1.5em\n}\nh3 {\n    font-size: 1.2em;\n    font-weight:bold\n}\nh4 {\n    font-weight:bold\n}\n.pre-content h1, .content h1, .content h2 {\n    font-family: 'Linux Libertine', 'Georgia', 'Times', serif\n}\n.pre-content h1, .content h1, .content h2, h3, h4, h5, h6 {\n    line-height: 1.3;\n    word-wrap: break-word;\n    word-break:break-word\n}\n.content h2, .content h3, .content h4, .content h5, .content h6 {\n    padding:0.5em 0\n}\n.content p + h3 {\n    margin-top:1.5em\n}\n.content {\n}\n.content ol {\n    padding-left:2.25em\n}\n.content ul {\n    list-style-type: disc;\n    padding-left:1em\n}\n.content ul > li > ul {\n    list-style-type:circle\n}\n.content ul > li > ul > li > ul {\n    list-style-type:square\n}\n.content ol ol, .content ul ol, .content ol ul, .content ul ul {\n    margin-left:1em\n}\n.content li {\n    margin-bottom:10px\n}\n.content li:last-child {\n    margin-bottom:inherit\n}\ndl {\n    margin-left:1em\n}\ndl dt {\n    font-weight:bold\n}\ndl dd {\n    display: block;\n    overflow:auto\n}\nbody.mw-hide-empty-elt .mw-empty-elt {\n    display:none\n}\na:not([href]) {\n    color: #222222;\n    cursor:pointer\n}\na {\n    text-decoration: none;\n    color: #3366cc;\n    hyphens:none\n}\na:visited {\n    color:#6b4ba1\n}\na:active {\n    color:#faa700\n}\na:hover {\n    text-decoration:underline\n}\na.new, a.new:visited, a.new:hover {\n    color:#dd3333\n}\na.new > *, a.new:visited > *, a.new:hover > * {\n    color:#dd3333\n}\na.external {\n    background-size: 10px;\n    background-repeat: no-repeat;\n    background-position: center right;\n    padding-right:13px\n}\n.return-link {\n    display: block;\n    font-size: 0.875em;\n    margin-top:1.5em\n}\n.plainlinks a {\n    background: none !important;\n    padding:0 !important\n}\n.content p {\n    margin:0.5em 0 1em 0\n}\n.content hr {\n    background-color: #a2a9b1;\n    height: 1px;\n    border:0\n}\n.content kbd, .content samp, .content code, .content pre {\n    font-family: 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;\n    border: solid 1px #c8ccd1;\n    white-space:pre-wrap\n}\n.content code {\n    padding:0.2em 0.5em\n}\n.content pre {\n    padding:1em\n}\nb, strong {\n    font-weight:bold\n}\nblockquote {\n    border-left: 3px solid #c8ccd1;\n    font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n    font-size: 1.1em;\n    padding: 1em 25px 1em 30px;\n    position: relative;\n    overflow:hidden\n}\nem, i {\n    font-style:italic\n}\nsup {\n    vertical-align:super\n}\nsub {\n    vertical-align:sub\n}\nsub, sup, .content .mw-ref {\n    font-size: 0.75em;\n    line-height:1\n}\n@media all and (max-width: 720px) {\n.content table {\n        display: block;\n        width:100% !important\n}\n.content table.wikitable {\n        border:0\n}\n.content caption {\n        display:block\n}\n}\n.content table {\n    margin: 1em 0;\n    overflow: auto;\n    overflow-y: hidden;\n    overflow-x:auto\n}\n.content table caption {\n    text-align:left\n}\n.wikitable {\n    border: 1px solid #54595d;\n    border-color:rgba(84, 89, 93, 0.3)\n}\n.wikitable > tr > th, .wikitable > tr > td, .wikitable > * > tr > th, .wikitable > * > tr > td {\n    border: 1px solid #54595d;\n    border-color: rgba(84, 89, 93, 0.3);\n    padding:0.2em\n}\n.wikitable > tr > th, .wikitable > * > tr > th {\n    background-color:#eaecf0\n}\n.ambox, table.ambox {\n    display: none;\n    margin:0\n}\n.issues-group-B .ambox {\n    display:block\n}\n.client-js .ambox {\n    cursor: pointer;\n    width: auto;\n    background: #f8f9fa;\n    color: #54595d;\n    margin-bottom:1px\n}\n.client-js .ambox tbody {\n    display: table;\n    width:100%\n}\n.client-js .ambox .mbox-text-div, .client-js .ambox .mbox-text-span {\n    display: block;\n    max-height: 3.3em;\n    height: 3.3em;\n    overflow:hidden\n}\n.client-js .ambox div {\n    margin: 0 !important;\n    padding:0 !important\n}\n.client-js .ambox td {\n    position: relative;\n    padding:8px 8px 8px 32px\n}\n.client-js .ambox td > div, .client-js .ambox td > span {\n    font-size:0.8125em\n}\n.client-js .ambox b {\n    font-weight:inherit\n}\n.client-js .ambox a {\n    color: inherit !important;\n    -webkit-tap-highlight-color:rgba(0, 0, 0, 0) !important\n}\n.client-js .ambox a:hover, .client-js .ambox a:focus {\n    text-decoration: none;\n    outline:inherit\n}\n.client-js .ambox small, .client-js .ambox .hide-when-compact, .client-js .ambox .mw-collapsible-content, .client-js .ambox .mbox-empty-cell, .client-js .ambox hr, .client-js .ambox .verbose, .client-js .ambox table, .client-js .ambox .mbox-image {\n    display:none\n}\n.client-js .ambox .mw-ui-icon {\n    position: absolute;\n    left: 8px;\n    top:16px\n}\n.client-js .ambox .ambox-learn-more {\n    color: #3366cc;\n    position: absolute;\n    right: 8px;\n    bottom: 8px;\n    z-index: 0;\n    line-height:1.65\n}\n.client-js .ambox .ambox-learn-more:before {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: content-box;\n    padding-left: 4em;\n    background: -webkit-linear-gradient(left, rgba(248, 249, 250, 0) 0, #f8f9fa 3em);\n    background: -moz-gradient(left, rgba(248, 249, 250, 0) 0, #f8f9fa 3em);\n    background:linear-gradient(to right, rgba(248, 249, 250, 0) 0, #f8f9fa 3em)\n}\n@media screen and (min-width: 720px) {\n.client-js .ambox .mbox-text-div, .client-js .ambox .mbox-text-span {\n        height: auto;\n        margin-bottom:24px !important\n}\n.client-js .ambox .ambox-learn-more {\n        left: 32px;\n        right: 0;\n        background:none\n}\n.client-js .ambox .ambox-learn-more:before {\n        top: -1.65em;\n        width:10px\n}\n}\n.content .reflist {\n    column-gap:2em\n}\n.collapsible td {\n    width:auto !important\n}\n.content {\n}\n.content .vertical-navbox, .content .navbox {\n    display:none\n}\n.content .action-edit .fmbox, .content .tmbox, .content #coordinates, .content .topicon {\n    display:none !important\n}\n.content table {\n    float: none !important;\n    margin-left: 0 !important;\n    margin-right:0 !important\n}\n.content table.infobox {\n    font-size: 90%;\n    position: relative;\n    border: 1px solid #eaecf0;\n    margin-bottom: 2em;\n    background-color: #f8f9fa;\n    display: flex;\n    flex: 1 1 100%;\n    flex-flow:column nowrap\n}\n.content table.infobox caption {\n    padding: 10px 10px 0;\n    text-align:center\n}\n.content table.infobox th, .content table.infobox td {\n    vertical-align: top;\n    border: 0;\n    border-bottom: 1px solid #eaecf0;\n    padding:7px 10px\n}\n.content table.infobox tbody > tr > td, .content table.infobox tbody > tr > th {\n    flex:1 0\n}\n.content table.infobox td:only-child, .content table.infobox th:only-child {\n    width:100%\n}\n.content table.infobox tr:last-child th, .content table.infobox tr:last-child td {\n    border:0\n}\n.content table.infobox > tbody, .content table.infobox > caption {\n    display: flex;\n    flex-flow:column nowrap\n}\n.content table.infobox > tbody > tr {\n    min-width: 100%;\n    display: flex;\n    flex-flow:row nowrap\n}\n.content .mw-content-ltr table.infobox {\n    text-align:left\n}\n.content .mw-content-rtl table.infobox {\n    text-align:right\n}\n#filetoc {\n    display:none\n}\n.references-column-count, .column-count {\n    -moz-column-width: 35em;\n    -webkit-column-width: 35em;\n    column-width:35em\n}\n.references li:target {\n    background-color:#def\n}\n.hatnote, .dablink, .rellink {\n    padding: 5px 7px;\n    color: #54595d;\n    font-size: 0.8125em;\n    background-color: #f8f9fa;\n    margin-bottom: 1px;\n    overflow:hidden\n}\n.hatnote a, .dablink a, .rellink a {\n    color:#3366cc\n}\n@media all and (min-width: 720px) {\n.content .vertical-navbox, .content .navbox {\n        display:inherit\n}\n}\n@media all and (max-width: 720px) {\n.content table.multicol > tr > td, .content table.multicol > tbody > tr > td {\n        display: block !important;\n        width:auto !important\n}\n.content .thumb .thumbinner {\n        display: -webkit-flex;\n        display: -moz-flex;\n        display: -ms-flexbox;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        align-content: flex-start;\n        flex-direction:column\n}\n.content .thumb .thumbinner > .thumbcaption {\n        -webkit-box-pack: justify;\n        -moz-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        -webkit-box-flex: 1;\n        -moz-box-flex: 1;\n        width: 100%;\n        -ms-flex: 1 0 100%;\n        flex: 1 0 100%;\n        -webkit-box-ordinal-group: 1;\n        -moz-box-ordinal-group: 1;\n        -ms-flex-order: 1;\n        order: 1;\n        display:block\n}\n}\n@media screen and (min-width: 720px) {\n.client-js #searchIcon {\n        display:none\n}\n.header .branding-box {\n        width:10.0625em\n}\n.header .search-box {\n        display: table-cell;\n        width:auto\n}\n.header .search-box .search {\n        width:23.4375em\n}\n.pre-content, #mw-content-text > form, .content, .post-content {\n        max-width: 993.3px;\n        margin:0 3.35em\n}\n.content figure, .content .thumb {\n        max-width:704px\n}\n.content figure.mw-halign-left, .content .thumb.mw-halign-left, .content figure.tleft, .content .thumb.tleft {\n        float: left;\n        clear: left;\n        margin-right:1.4em\n}\n.content figure.mw-default-size, .content .thumb.mw-default-size, .content figure.mw-halign-right, .content .thumb.mw-halign-right, .content figure.tright, .content .thumb.tright {\n        float: right;\n        clear: right;\n        margin-left:1.4em\n}\n.content table caption {\n        background:inherit\n}\n.content table tbody {\n        display:table-row-group\n}\n.last-modified-bar {\n        background-color: transparent;\n        padding-left: 0;\n        padding-right: 0;\n        font-size:1em\n}\n}\n@media screen and (min-width: 1000px) {\n.banner-container, .header, .page-header-bar, .overlay-header, .content, .overlay-content, .content-unstyled, .pre-content, .post-content, #mw-content-text > form, #mw-mf-page-center .pointer-overlay {\n        margin-left: auto;\n        margin-right: auto;\n        width: 90%;\n        max-width:993.3px\n}\n.header {\n        max-width:995.3px\n}\n}\n@media all and (min-width: 720px) {\ntable.infobox {\n        margin: 0.5em 0 1em 35px !important;\n        max-width: 320px;\n        width: auto !important;\n        float: right !important;\n        clear:right !important\n}\n}\ninput.search, .mw-ui-icon-minerva-magnifying-glass:before {\n    background-image: url(/w/load.php?modules=skins.minerva.content.styles.images&image=input.search%2C.mw-ui-icon-minerva-magnifying-glass%3Abefore&format=rasterized&skin=minerva&version=cwtyc);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.content.styles.images&image=input.search%2C.mw-ui-icon-minerva-magnifying-glass%3Abefore&format=original&skin=minerva&version=cwtyc)\n}\ninput.search, .mw-ui-icon-minerva-magnifying-glass:before--reference {\n    background-image: url(/w/load.php?modules=skins.minerva.content.styles.images&image=input.search%2C.mw-ui-icon-minerva-magnifying-glass%3Abefore&variant=reference&format=rasterized&skin=minerva&version=cwtyc);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.content.styles.images&image=input.search%2C.mw-ui-icon-minerva-magnifying-glass%3Abefore&variant=reference&format=original&skin=minerva&version=cwtyc)\n}\na.external {\n    background-image: url(/w/load.php?modules=skins.minerva.content.styles.images&image=a.external&format=rasterized&lang=ja&skin=minerva&version=cwtyc);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.content.styles.images&image=a.external&format=original&lang=ja&skin=minerva&version=cwtyc)\n}\na.external--reference {\n    background-image: url(/w/load.php?modules=skins.minerva.content.styles.images&image=a.external&variant=reference&format=rasterized&lang=ja&skin=minerva&version=cwtyc);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.content.styles.images&image=a.external&variant=reference&format=original&lang=ja&skin=minerva&version=cwtyc)\n}\n.mw-ui-icon-minerva-toc:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=toc&format=rasterized&lang=ja&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=toc&format=original&lang=ja&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-warning:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=warning&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=warning&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-mainmenu:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=mainmenu&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=mainmenu&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-edit:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=edit&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=edit&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-edit-enabled:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=edit-enabled&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=edit-enabled&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-language-switcher:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=language-switcher&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=language-switcher&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-language-switcher-base20:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=language-switcher&variant=base20&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=language-switcher&variant=base20&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-clock:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=clock&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=clock&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-clock-invert:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=clock&variant=invert&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=clock&variant=invert&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-minerva-page-actions-overflow:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.images&image=page-actions-overflow&format=rasterized&skin=minerva&version=2gjnl);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.images&image=page-actions-overflow&format=original&skin=minerva&version=2gjnl)\n}\n.mw-ui-icon-wikimedia-search-base20:before, .mw-ui-background-icon-search {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=search&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=search&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-search-invert:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=search&variant=invert&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=search&variant=invert&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-search-progressive:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=search&variant=progressive&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=search&variant=progressive&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-star-base20:before, .mw-ui-background-icon-star {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=star&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=star&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-star-invert:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=star&variant=invert&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=star&variant=invert&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-star-progressive:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=star&variant=progressive&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=star&variant=progressive&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-unStar-base20:before, .mw-ui-background-icon-unStar {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=unStar&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=unStar&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-unStar-invert:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=unStar&variant=invert&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=unStar&variant=invert&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-unStar-progressive:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=unStar&variant=progressive&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=unStar&variant=progressive&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-userAvatar-base20:before, .mw-ui-background-icon-userAvatar {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=userAvatar&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=userAvatar&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-userAvatar-invert:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=userAvatar&variant=invert&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=userAvatar&variant=invert&format=original&skin=minerva&version=2v5xo)\n}\n.mw-ui-icon-wikimedia-userAvatar-progressive:before {\n    background-image: url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=userAvatar&variant=progressive&format=rasterized&skin=minerva&version=2v5xo);\n    background-image:linear-gradient(transparent, transparent), url(/w/load.php?modules=skins.minerva.icons.wikimedia&image=userAvatar&variant=progressive&format=original&skin=minerva&version=2v5xo)\n}\n.page-Main_Page #section_0 {\n    border:0\n}\n.page-Main_Page #page-actions, .page-Main_Page .pre-content {\n    display:none\n}\n.page-Main_Page.is-authenticated .pre-content {\n    display:block\n}\n.page-Main_Page #page-secondary-actions a {\n    margin-top: 1em\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=template&id=cc06e490&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WikiShow.vue?vue&type=template&id=cc06e490&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wikicss" }, [
    _c("div", { domProps: { innerHTML: _vm._s(_vm.usersshow) } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/WikiShow.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/WikiShow.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WikiShow_vue_vue_type_template_id_cc06e490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WikiShow.vue?vue&type=template&id=cc06e490&scoped=true& */ "./resources/js/components/WikiShow.vue?vue&type=template&id=cc06e490&scoped=true&");
/* harmony import */ var _WikiShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WikiShow.vue?vue&type=script&lang=js& */ "./resources/js/components/WikiShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css& */ "./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WikiShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WikiShow_vue_vue_type_template_id_cc06e490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WikiShow_vue_vue_type_template_id_cc06e490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cc06e490",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/WikiShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/WikiShow.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/WikiShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WikiShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=style&index=0&id=cc06e490&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_style_index_0_id_cc06e490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/WikiShow.vue?vue&type=template&id=cc06e490&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/WikiShow.vue?vue&type=template&id=cc06e490&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_template_id_cc06e490_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./WikiShow.vue?vue&type=template&id=cc06e490&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WikiShow.vue?vue&type=template&id=cc06e490&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_template_id_cc06e490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WikiShow_vue_vue_type_template_id_cc06e490_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('wiki-show', __webpack_require__(/*! ./components/WikiShow.vue */ "./resources/js/components/WikiShow.vue")["default"]);
var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./resources/js/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/resources/js/main.js */"./resources/js/main.js");


/***/ })

/******/ });