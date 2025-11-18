"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_vrDistortionCorrection_fragment_js"],{

/***/ "../core/dist/Shaders/vrDistortionCorrection.fragment.js":
/*!***************************************************************!*\
  !*** ../core/dist/Shaders/vrDistortionCorrection.fragment.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vrDistortionCorrectionPixelShader: () => (/* binding */ vrDistortionCorrectionPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "vrDistortionCorrectionPixelShader";
const shader = `varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 LensCenter;uniform vec2 Scale;uniform vec2 ScaleIn;uniform vec4 HmdWarpParam;vec2 HmdWarp(vec2 in01) {vec2 theta=(in01-LensCenter)*ScaleIn; 
float rSq=theta.x*theta.x+theta.y*theta.y;vec2 rvector=theta*(HmdWarpParam.x+HmdWarpParam.y*rSq+HmdWarpParam.z*rSq*rSq+HmdWarpParam.w*rSq*rSq*rSq);return LensCenter+Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec2 tc=HmdWarp(vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0)
gl_FragColor=vec4(0.0,0.0,0.0,0.0);else{gl_FragColor=texture2D(textureSampler,tc);}}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const vrDistortionCorrectionPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfdnJEaXN0b3J0aW9uQ29ycmVjdGlvbl9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy92ckRpc3RvcnRpb25Db3JyZWN0aW9uLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJ2ckRpc3RvcnRpb25Db3JyZWN0aW9uUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmVTYW1wbGVyO3VuaWZvcm0gdmVjMiBMZW5zQ2VudGVyO3VuaWZvcm0gdmVjMiBTY2FsZTt1bmlmb3JtIHZlYzIgU2NhbGVJbjt1bmlmb3JtIHZlYzQgSG1kV2FycFBhcmFtO3ZlYzIgSG1kV2FycCh2ZWMyIGluMDEpIHt2ZWMyIHRoZXRhPShpbjAxLUxlbnNDZW50ZXIpKlNjYWxlSW47IFxuZmxvYXQgclNxPXRoZXRhLngqdGhldGEueCt0aGV0YS55KnRoZXRhLnk7dmVjMiBydmVjdG9yPXRoZXRhKihIbWRXYXJwUGFyYW0ueCtIbWRXYXJwUGFyYW0ueSpyU3ErSG1kV2FycFBhcmFtLnoqclNxKnJTcStIbWRXYXJwUGFyYW0udypyU3EqclNxKnJTcSk7cmV0dXJuIExlbnNDZW50ZXIrU2NhbGUqcnZlY3Rvcjt9XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xudm9pZCBtYWluKHZvaWQpXG57dmVjMiB0Yz1IbWRXYXJwKHZVVik7aWYgKHRjLnggPDAuMCB8fCB0Yy54PjEuMCB8fCB0Yy55PDAuMCB8fCB0Yy55PjEuMClcbmdsX0ZyYWdDb2xvcj12ZWM0KDAuMCwwLjAsMC4wLDAuMCk7ZWxzZXtnbF9GcmFnQ29sb3I9dGV4dHVyZTJEKHRleHR1cmVTYW1wbGVyLHRjKTt9fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCB2ckRpc3RvcnRpb25Db3JyZWN0aW9uUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9