"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_kernelBlur_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/kernelBlurFragment.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/kernelBlurFragment.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurFragmentWGSL: () => (/* binding */ kernelBlurFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "kernelBlurFragment";
const shader = `#ifdef DOF
factor=sampleCoC(fragmentInputs.sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCoord{X}))*computedWeight;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCoord{X})*computedWeight;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const kernelBlurFragmentWGSL = { name, shader };


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

/***/ }),

/***/ "../core/dist/ShadersWGSL/ShadersInclude/kernelBlurFragment2.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/kernelBlurFragment2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurFragment2WGSL: () => (/* binding */ kernelBlurFragment2WGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "kernelBlurFragment2";
const shader = `#ifdef DOF
factor=sampleCoC(fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.sampleCenter+uniforms.delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const kernelBlurFragment2WGSL = { name, shader };


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

/***/ }),

/***/ "../core/dist/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurVaryingDeclarationWGSL: () => (/* binding */ kernelBlurVaryingDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "kernelBlurVaryingDeclaration";
const shader = `varying sampleCoord{X}: vec2f;`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const kernelBlurVaryingDeclarationWGSL = { name, shader };


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

/***/ }),

/***/ "../core/dist/ShadersWGSL/kernelBlur.fragment.js":
/*!*******************************************************!*\
  !*** ../core/dist/ShadersWGSL/kernelBlur.fragment.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurPixelShaderWGSL: () => (/* binding */ kernelBlurPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_kernelBlurVaryingDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/kernelBlurVaryingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_packingFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/packingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/packingFunctions.js");
/* harmony import */ var _ShadersInclude_kernelBlurFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/kernelBlurFragment */ "../core/dist/ShadersWGSL/ShadersInclude/kernelBlurFragment.js");
/* harmony import */ var _ShadersInclude_kernelBlurFragment2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/kernelBlurFragment2 */ "../core/dist/ShadersWGSL/ShadersInclude/kernelBlurFragment2.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "kernelBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform delta: vec2f;varying sampleCenter: vec2f;
#ifdef DOF
var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;fn sampleCoC(offset: vec2f)->f32 {var coc: f32=textureSample(circleOfConfusionSampler,circleOfConfusionSamplerSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var computedWeight: f32=0.0;
#ifdef PACKEDFLOAT
var blend: f32=0.;
#else
var blend: vec4f= vec4f(0.);
#endif
#ifdef DOF
var sumOfWeights: f32=CENTER_WEIGHT; 
var factor: f32=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,input.sampleCenter))*CENTER_WEIGHT;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,input.sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
fragmentOutputs.color=pack(blend);
#else
fragmentOutputs.color=blend;
#endif
#ifdef DOF
fragmentOutputs.color/=sumOfWeights;
#endif
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const kernelBlurPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2tlcm5lbEJsdXJfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUva2VybmVsQmx1ckZyYWdtZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUva2VybmVsQmx1ckZyYWdtZW50Mi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2tlcm5lbEJsdXJWYXJ5aW5nRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9rZXJuZWxCbHVyLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJrZXJuZWxCbHVyRnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgRE9GXG5mYWN0b3I9c2FtcGxlQ29DKGZyYWdtZW50SW5wdXRzLnNhbXBsZUNvb3Jke1h9KTsgXG5jb21wdXRlZFdlaWdodD1LRVJORUxfV0VJR0hUe1h9KmZhY3RvcjtzdW1PZldlaWdodHMrPWNvbXB1dGVkV2VpZ2h0O1xuI2Vsc2VcbmNvbXB1dGVkV2VpZ2h0PUtFUk5FTF9XRUlHSFR7WH07XG4jZW5kaWZcbiNpZmRlZiBQQUNLRURGTE9BVFxuYmxlbmQrPXVucGFjayh0ZXh0dXJlU2FtcGxlKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy5zYW1wbGVDb29yZHtYfSkpKmNvbXB1dGVkV2VpZ2h0O1xuI2Vsc2VcbmJsZW5kKz10ZXh0dXJlU2FtcGxlKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy5zYW1wbGVDb29yZHtYfSkqY29tcHV0ZWRXZWlnaHQ7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBrZXJuZWxCbHVyRnJhZ21lbnRXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJrZXJuZWxCbHVyRnJhZ21lbnQyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIERPRlxuZmFjdG9yPXNhbXBsZUNvQyhmcmFnbWVudElucHV0cy5zYW1wbGVDZW50ZXIrdW5pZm9ybXMuZGVsdGEqS0VSTkVMX0RFUF9PRkZTRVR7WH0pO2NvbXB1dGVkV2VpZ2h0PUtFUk5FTF9ERVBfV0VJR0hUe1h9KmZhY3RvcjtzdW1PZldlaWdodHMrPWNvbXB1dGVkV2VpZ2h0O1xuI2Vsc2VcbmNvbXB1dGVkV2VpZ2h0PUtFUk5FTF9ERVBfV0VJR0hUe1h9O1xuI2VuZGlmXG4jaWZkZWYgUEFDS0VERkxPQVRcbmJsZW5kKz11bnBhY2sodGV4dHVyZVNhbXBsZSh0ZXh0dXJlU2FtcGxlcix0ZXh0dXJlU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMuc2FtcGxlQ2VudGVyK3VuaWZvcm1zLmRlbHRhKktFUk5FTF9ERVBfT0ZGU0VUe1h9KSkqY29tcHV0ZWRXZWlnaHQ7XG4jZWxzZVxuYmxlbmQrPXRleHR1cmVTYW1wbGUodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnNhbXBsZUNlbnRlcit1bmlmb3Jtcy5kZWx0YSpLRVJORUxfREVQX09GRlNFVHtYfSkqY29tcHV0ZWRXZWlnaHQ7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBrZXJuZWxCbHVyRnJhZ21lbnQyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwia2VybmVsQmx1clZhcnlpbmdEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHZhcnlpbmcgc2FtcGxlQ29vcmR7WH06IHZlYzJmO2A7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBrZXJuZWxCbHVyVmFyeWluZ0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUva2VybmVsQmx1clZhcnlpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYWNraW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2tlcm5lbEJsdXJGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9rZXJuZWxCbHVyRnJhZ21lbnQyXCI7XG5cbmNvbnN0IG5hbWUgPSBcImtlcm5lbEJsdXJQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciB0ZXh0dXJlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHRleHR1cmVTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47dW5pZm9ybSBkZWx0YTogdmVjMmY7dmFyeWluZyBzYW1wbGVDZW50ZXI6IHZlYzJmO1xuI2lmZGVmIERPRlxudmFyIGNpcmNsZU9mQ29uZnVzaW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGNpcmNsZU9mQ29uZnVzaW9uU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O2ZuIHNhbXBsZUNvQyhvZmZzZXQ6IHZlYzJmKS0+ZjMyIHt2YXIgY29jOiBmMzI9dGV4dHVyZVNhbXBsZShjaXJjbGVPZkNvbmZ1c2lvblNhbXBsZXIsY2lyY2xlT2ZDb25mdXNpb25TYW1wbGVyU2FtcGxlcixvZmZzZXQpLnI7cmV0dXJuIGNvYzsgfVxuI2VuZGlmXG4jaW5jbHVkZTxrZXJuZWxCbHVyVmFyeWluZ0RlY2xhcmF0aW9uPlswLi52YXJ5aW5nQ291bnRdXG4jaWZkZWYgUEFDS0VERkxPQVRcbiNpbmNsdWRlPHBhY2tpbmdGdW5jdGlvbnM+XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHt2YXIgY29tcHV0ZWRXZWlnaHQ6IGYzMj0wLjA7XG4jaWZkZWYgUEFDS0VERkxPQVRcbnZhciBibGVuZDogZjMyPTAuO1xuI2Vsc2VcbnZhciBibGVuZDogdmVjNGY9IHZlYzRmKDAuKTtcbiNlbmRpZlxuI2lmZGVmIERPRlxudmFyIHN1bU9mV2VpZ2h0czogZjMyPUNFTlRFUl9XRUlHSFQ7IFxudmFyIGZhY3RvcjogZjMyPTAuMDtcbiNpZmRlZiBQQUNLRURGTE9BVFxuYmxlbmQrPXVucGFjayh0ZXh0dXJlU2FtcGxlKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcixpbnB1dC5zYW1wbGVDZW50ZXIpKSpDRU5URVJfV0VJR0hUO1xuI2Vsc2VcbmJsZW5kKz10ZXh0dXJlU2FtcGxlKHRleHR1cmVTYW1wbGVyLHRleHR1cmVTYW1wbGVyU2FtcGxlcixpbnB1dC5zYW1wbGVDZW50ZXIpKkNFTlRFUl9XRUlHSFQ7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8a2VybmVsQmx1ckZyYWdtZW50PlswLi52YXJ5aW5nQ291bnRdXG4jaW5jbHVkZTxrZXJuZWxCbHVyRnJhZ21lbnQyPlswLi5kZXBDb3VudF1cbiNpZmRlZiBQQUNLRURGTE9BVFxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXBhY2soYmxlbmQpO1xuI2Vsc2VcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj1ibGVuZDtcbiNlbmRpZlxuI2lmZGVmIERPRlxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yLz1zdW1PZldlaWdodHM7XG4jZW5kaWZcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBrZXJuZWxCbHVyUGl4ZWxTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==