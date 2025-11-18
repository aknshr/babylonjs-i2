"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_lodCube_fragment_js"],{

/***/ "../core/dist/Shaders/lodCube.fragment.js":
/*!************************************************!*\
  !*** ../core/dist/Shaders/lodCube.fragment.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lodCubePixelShader: () => (/* binding */ lodCubePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lodCubePixelShader";
const shader = `precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform samplerCube textureSampler;uniform float lod;uniform int gamma;void main(void)
{vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x),lod);
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x),lod);
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x),lod);
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x),lod);
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001),lod);
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001),lod);
#endif
if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const lodCubePixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfbG9kQ3ViZV9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL2xvZEN1YmUuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxvZEN1YmVQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHByZWNpc2lvbiBoaWdocCBmbG9hdDtjb25zdCBmbG9hdCBHYW1tYUVuY29kZVBvd2VyQXBwcm94PTEuMC8yLjI7dmFyeWluZyB2ZWMyIHZVVjt1bmlmb3JtIHNhbXBsZXJDdWJlIHRleHR1cmVTYW1wbGVyO3VuaWZvcm0gZmxvYXQgbG9kO3VuaWZvcm0gaW50IGdhbW1hO3ZvaWQgbWFpbih2b2lkKVxue3ZlYzIgdXY9dlVWKjIuMC0xLjA7XG4jaWZkZWYgUE9TSVRJVkVYXG5nbF9GcmFnQ29sb3I9dGV4dHVyZUN1YmUodGV4dHVyZVNhbXBsZXIsdmVjMygxLjAwMSx1di55LHV2LngpLGxvZCk7XG4jZW5kaWZcbiNpZmRlZiBORUdBVElWRVhcbmdsX0ZyYWdDb2xvcj10ZXh0dXJlQ3ViZSh0ZXh0dXJlU2FtcGxlcix2ZWMzKC0xLjAwMSx1di55LHV2LngpLGxvZCk7XG4jZW5kaWZcbiNpZmRlZiBQT1NJVElWRVlcbmdsX0ZyYWdDb2xvcj10ZXh0dXJlQ3ViZSh0ZXh0dXJlU2FtcGxlcix2ZWMzKHV2LnksMS4wMDEsdXYueCksbG9kKTtcbiNlbmRpZlxuI2lmZGVmIE5FR0FUSVZFWVxuZ2xfRnJhZ0NvbG9yPXRleHR1cmVDdWJlKHRleHR1cmVTYW1wbGVyLHZlYzModXYueSwtMS4wMDEsdXYueCksbG9kKTtcbiNlbmRpZlxuI2lmZGVmIFBPU0lUSVZFWlxuZ2xfRnJhZ0NvbG9yPXRleHR1cmVDdWJlKHRleHR1cmVTYW1wbGVyLHZlYzModXYsMS4wMDEpLGxvZCk7XG4jZW5kaWZcbiNpZmRlZiBORUdBVElWRVpcbmdsX0ZyYWdDb2xvcj10ZXh0dXJlQ3ViZSh0ZXh0dXJlU2FtcGxlcix2ZWMzKHV2LC0xLjAwMSksbG9kKTtcbiNlbmRpZlxuaWYgKGdhbW1hPT0wKSB7Z2xfRnJhZ0NvbG9yLnJnYj1wb3coZ2xfRnJhZ0NvbG9yLnJnYix2ZWMzKEdhbW1hRW5jb2RlUG93ZXJBcHByb3gpKTt9fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxvZEN1YmVQaXhlbFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=