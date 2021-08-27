"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(226);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-search-autocomplete"
const external_react_search_autocomplete_namespaceObject = require("react-search-autocomplete");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
;// CONCATENATED MODULE: ./components/HomeSearch.js








function HomeSearch({
  queries,
  queries2
}) {
  const router = useRouter();
  const {
    0: queryOne,
    1: setQueryOne
  } = useState("");
  const {
    0: queryTwo,
    1: setQueryTwo
  } = useState("");

  const handleClick = () => {
    router.push(`/jobs?q1=${queryOne.name || ""}&q2=${queryTwo.name || ""}`);
  };

  const handleQueryOne = item => setQueryOne(item);

  const handleQueryTwo = item => setQueryTwo(item);

  return /*#__PURE__*/_jsxs("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/_jsx("h1", {
      className: "text-center mb-5",
      children: "Find your dream job :)"
    }), /*#__PURE__*/_jsxs(Row, {
      className: "g-2",
      children: [/*#__PURE__*/_jsx(Col, {
        md: "5",
        children: /*#__PURE__*/_jsx(ReactSearchAutocomplete, {
          onSelect: handleQueryOne,
          items: queries,
          placeholder: "Job title, keywords, or company"
        })
      }), /*#__PURE__*/_jsx(Col, {
        md: "5",
        children: /*#__PURE__*/_jsx(ReactSearchAutocomplete, {
          onSelect: handleQueryTwo,
          items: queries2,
          placeholder: "City, state, zip code or remote"
        })
      }), /*#__PURE__*/_jsx(Col, {
        md: "2",
        children: /*#__PURE__*/_jsx(Button, {
          onClick: handleClick,
          children: "Find Jobs"
        })
      })]
    })]
  });
}

/* harmony default export */ const components_HomeSearch = ((/* unused pure expression or super */ null && (HomeSearch)));
// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(234);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,895], () => (__webpack_exec__(660)));
module.exports = __webpack_exports__;

})();