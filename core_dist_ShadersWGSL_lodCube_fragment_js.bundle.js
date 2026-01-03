"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_lodCube_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/lodCube.fragment.js":
/*!****************************************************!*\
  !*** ../core/dist/ShadersWGSL/lodCube.fragment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lodCubePixelShaderWGSL: () => (/* binding */ lodCubePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lodCubePixelShader";
const shader = `const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,1.001),uniforms.lod);
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,-1.001),uniforms.lod);
#endif
if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const lodCubePixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2xvZEN1YmVfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvbG9kQ3ViZS5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibG9kQ3ViZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgY29uc3QgR2FtbWFFbmNvZGVQb3dlckFwcHJveD0xLjAvMi4yO3ZhcnlpbmcgdlVWOiB2ZWMyZjt2YXIgdGV4dHVyZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciB0ZXh0dXJlU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj47dW5pZm9ybSBsb2Q6IGYzMjt1bmlmb3JtIGdhbW1hOiBpMzI7QGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7bGV0IHV2PWZyYWdtZW50SW5wdXRzLnZVVioyLjAtMS4wO1xuI2lmZGVmIFBPU0lUSVZFWFxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXRleHR1cmVTYW1wbGVMZXZlbCh0ZXh0dXJlU2FtcGxlcix0ZXh0dXJlU2FtcGxlclNhbXBsZXIsdmVjM2YoMS4wMDEsdXYueSx1di54KSx1bmlmb3Jtcy5sb2QpO1xuI2VuZGlmXG4jaWZkZWYgTkVHQVRJVkVYXG5mcmFnbWVudE91dHB1dHMuY29sb3I9dGV4dHVyZVNhbXBsZUxldmVsKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcix2ZWMzZigtMS4wMDEsdXYueSx1di54KSx1bmlmb3Jtcy5sb2QpO1xuI2VuZGlmXG4jaWZkZWYgUE9TSVRJVkVZXG5mcmFnbWVudE91dHB1dHMuY29sb3I9dGV4dHVyZVNhbXBsZUxldmVsKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcix2ZWMzZih1di55LDEuMDAxLHV2LngpLHVuaWZvcm1zLmxvZCk7XG4jZW5kaWZcbiNpZmRlZiBORUdBVElWRVlcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj10ZXh0dXJlU2FtcGxlTGV2ZWwodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLHZlYzNmKHV2LnksLTEuMDAxLHV2LngpLHVuaWZvcm1zLmxvZCk7XG4jZW5kaWZcbiNpZmRlZiBQT1NJVElWRVpcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj10ZXh0dXJlU2FtcGxlTGV2ZWwodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLHZlYzNmKHV2LDEuMDAxKSx1bmlmb3Jtcy5sb2QpO1xuI2VuZGlmXG4jaWZkZWYgTkVHQVRJVkVaXG5mcmFnbWVudE91dHB1dHMuY29sb3I9dGV4dHVyZVNhbXBsZUxldmVsKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcix2ZWMzZih1diwtMS4wMDEpLHVuaWZvcm1zLmxvZCk7XG4jZW5kaWZcbmlmICh1bmlmb3Jtcy5nYW1tYT09MCkge2ZyYWdtZW50T3V0cHV0cy5jb2xvcj12ZWM0Zihwb3coZnJhZ21lbnRPdXRwdXRzLmNvbG9yLnJnYix2ZWMzZihHYW1tYUVuY29kZVBvd2VyQXBwcm94KSksZnJhZ21lbnRPdXRwdXRzLmNvbG9yLmEpO319XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsb2RDdWJlUGl4ZWxTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=