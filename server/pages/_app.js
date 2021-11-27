"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./styles/theme.ts
const theme = {
    colors: {
        primaryBlue: '#3D84FF',
        secondaryBlue: '#365DFF',
        thyrdBlue: '#3E3A6F',
        fourthBlue: '#1A2D7D',
        primaryGray: '#D8D8D8',
        secondaryGray: '#9D9BB6',
        thyrdGray: '#E8E8EE',
        primaryYellow: '#FED200',
        primaryOrange: '#FF794F',
        white: '#FFF',
        background: '#F5F5FB',
        primaryText: '#103460',
        secondaryText: '#A3A2BB',
        thyrdText: '#9D9BB6',
        FourthText: '#192452',
        fivethText: '#3E3A6F',
        sixthText: '#9C9AB5'
    }
};
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
        theme: styles_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(765));
module.exports = __webpack_exports__;

})();