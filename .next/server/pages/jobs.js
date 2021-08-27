"use strict";
(() => {
var exports = {};
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);




const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
  uri: "https://api.graphql.jobs",
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache()
});

function Jobs({
  jobs: allJobs
}) {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const jobs = allJobs.filter(function (job) {
      var _job$title, _query$q, _job$company, _job$company$name, _query$q2;

      return ((_job$title = job.title) === null || _job$title === void 0 ? void 0 : _job$title.toLowerCase().trim()) === (query === null || query === void 0 ? void 0 : (_query$q = query.q1) === null || _query$q === void 0 ? void 0 : _query$q.toLowerCase().trim()) || ((_job$company = job.company) === null || _job$company === void 0 ? void 0 : (_job$company$name = _job$company.name) === null || _job$company$name === void 0 ? void 0 : _job$company$name.toLowerCase().trim()) === (query === null || query === void 0 ? void 0 : (_query$q2 = query.q1) === null || _query$q2 === void 0 ? void 0 : _query$q2.toLowerCase().trim());
    });
    console.log(jobs);
  }, [query]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      children: "Jobs"
    })
  });
}

async function getStaticProps() {
  const {
    data
  } = await client.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
      query {
        jobs {
          title
          company {
            name
            websiteUrl
          }
          applyUrl
        }
      }
    `
  });
  return {
    props: {
      jobs: data.jobs
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jobs);

/***/ }),

/***/ 74:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(521));
module.exports = __webpack_exports__;

})();