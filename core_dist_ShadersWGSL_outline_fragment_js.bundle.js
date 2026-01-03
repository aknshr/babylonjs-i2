"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_outline_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/outline.fragment.js":
/*!****************************************************!*\
  !*** ../core/dist/ShadersWGSL/outline.fragment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlinePixelShaderWGSL: () => (/* binding */ outlinePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "outlinePixelShader";
const shader = `uniform color: vec4f;
#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV).a<0.4) {discard;}
#endif
#include<logDepthFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const outlinePixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX291dGxpbmVfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9vdXRsaW5lLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhGcmFnbWVudFwiO1xuXG5jb25zdCBuYW1lID0gXCJvdXRsaW5lUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGB1bmlmb3JtIGNvbG9yOiB2ZWM0ZjtcbiNpZmRlZiBBTFBIQVRFU1RcbnZhcnlpbmcgdlVWOiB2ZWMyZjt2YXIgZGlmZnVzZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBkaWZmdXNlU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50PlxuI2lmZGVmIEFMUEhBVEVTVFxuaWYgKHRleHR1cmVTYW1wbGUoZGlmZnVzZVNhbXBsZXIsZGlmZnVzZVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZVVikuYTwwLjQpIHtkaXNjYXJkO31cbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbmZyYWdtZW50T3V0cHV0cy5jb2xvcj11bmlmb3Jtcy5jb2xvcjtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3V0bGluZVBpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9