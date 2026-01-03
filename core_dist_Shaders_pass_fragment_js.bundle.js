"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_pass_fragment_js"],{

/***/ "../core/dist/Shaders/pass.fragment.js":
/*!*********************************************!*\
  !*** ../core/dist/Shaders/pass.fragment.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passPixelShader: () => (/* binding */ passPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "passPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const passPixelShader = { name, shader };


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) // removed by dead control flow
{}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGFzc19mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvcGFzcy5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGFzc1BpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyeWluZyB2ZWMyIHZVVjt1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlU2FtcGxlcjtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkgXG57Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRCh0ZXh0dXJlU2FtcGxlcix2VVYpO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGFzc1BpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=