"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_passCube_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/passCube.fragment.js":
/*!*****************************************************!*\
  !*** ../core/dist/ShadersWGSL/passCube.fragment.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passCubePixelShaderWGSL: () => (/* binding */ passCubePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "passCubePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));
#endif
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const passCubePixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3Bhc3NDdWJlX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9wYXNzQ3ViZS5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGFzc0N1YmVQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHZhcnlpbmcgdlVWOiB2ZWMyZjt2YXIgdGV4dHVyZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciB0ZXh0dXJlU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj47XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7dmFyIHV2OiB2ZWMyZj1pbnB1dC52VVYqMi4wLTEuMDtcbiNpZmRlZiBQT1NJVElWRVhcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj10ZXh0dXJlU2FtcGxlKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcix2ZWMzZigxLjAwMSx1di55LHV2LngpKTtcbiNlbmRpZlxuI2lmZGVmIE5FR0FUSVZFWFxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXRleHR1cmVTYW1wbGUodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLHZlYzNmKC0xLjAwMSx1di55LHV2LngpKTtcbiNlbmRpZlxuI2lmZGVmIFBPU0lUSVZFWVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXRleHR1cmVTYW1wbGUodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLHZlYzNmKHV2LnksMS4wMDEsdXYueCkpO1xuI2VuZGlmXG4jaWZkZWYgTkVHQVRJVkVZXG5mcmFnbWVudE91dHB1dHMuY29sb3I9dGV4dHVyZVNhbXBsZSh0ZXh0dXJlU2FtcGxlcix0ZXh0dXJlU2FtcGxlclNhbXBsZXIsdmVjM2YodXYueSwtMS4wMDEsdXYueCkpO1xuI2VuZGlmXG4jaWZkZWYgUE9TSVRJVkVaXG5mcmFnbWVudE91dHB1dHMuY29sb3I9dGV4dHVyZVNhbXBsZSh0ZXh0dXJlU2FtcGxlcix0ZXh0dXJlU2FtcGxlclNhbXBsZXIsdmVjM2YodXYsMS4wMDEpKTtcbiNlbmRpZlxuI2lmZGVmIE5FR0FUSVZFWlxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXRleHR1cmVTYW1wbGUodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLHZlYzNmKHV2LC0xLjAwMSkpO1xuI2VuZGlmXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGFzc0N1YmVQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9