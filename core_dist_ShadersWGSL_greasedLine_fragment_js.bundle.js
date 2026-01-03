"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_greasedLine_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/greasedLine.fragment.js":
/*!********************************************************!*\
  !*** ../core/dist/ShadersWGSL/greasedLine.fragment.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLinePixelShaderWGSL: () => (/* binding */ greasedLinePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "greasedLinePixelShader";
const shader = `var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAndColorDistributionType: vec2f;uniform grlColor: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
let grlColorMode: f32=uniforms.grl_colorModeAndColorDistributionType.x;let grlColorDistributionType: f32=uniforms.grl_colorModeAndColorDistributionType.y;var outColor=vec4(uniforms.grlColor,1.);outColor.a=step(fragmentInputs.grlCounters,uniforms.grlVisibility);if (outColor.a==0.0) {discard;}
if (uniforms.grlUseDash==1.0) {let dashPosition=(fragmentInputs.grlCounters+uniforms.grlDashOffset) % uniforms.grlDashArray;outColor.a*=ceil(dashPosition-(uniforms.grlDashArray*uniforms.grlDashRatio));if (outColor.a==0.0) {discard;}}
if (uniforms.grlUseColors==1.) {
#ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,vec2f(fragmentInputs.grlCounters,0.));
#else
let lookup: vec2f=vec2(fract(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth),1.0-floor(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth));let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,lookup);
#endif
if (grlColorMode==COLOR_MODE_SET) {outColor=grlColor;} else if (grlColorMode==COLOR_MODE_ADD) {outColor+=grlColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {outColor*=grlColor;}}
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=outColor;
#endif
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+outColor.rgb*outColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-outColor.a));} else {fragmentOutputs.backColor+=outColor;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const greasedLinePixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2dyZWFzZWRMaW5lX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9ncmVhc2VkTGluZS5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZ3JlYXNlZExpbmVQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciBncmxDb2xvcnM6IHRleHR1cmVfMmQ8ZjMyPjt2YXIgZ3JsQ29sb3JzU2FtcGxlcjogc2FtcGxlcjt1bmlmb3JtIGdybFVzZUNvbG9yczogZjMyO3VuaWZvcm0gZ3JsVXNlRGFzaDogZjMyO3VuaWZvcm0gZ3JsRGFzaEFycmF5OiBmMzI7dW5pZm9ybSBncmxEYXNoT2Zmc2V0OiBmMzI7dW5pZm9ybSBncmxEYXNoUmF0aW86IGYzMjt1bmlmb3JtIGdybFZpc2liaWxpdHk6IGYzMjt1bmlmb3JtIGdybENvbG9yc1dpZHRoOiBmMzI7dW5pZm9ybSBncmxfY29sb3JNb2RlQW5kQ29sb3JEaXN0cmlidXRpb25UeXBlOiB2ZWMyZjt1bmlmb3JtIGdybENvbG9yOiB2ZWMzZjt2YXJ5aW5nIGdybENvdW50ZXJzOiBmMzI7dmFyeWluZyBncmxDb2xvclBvaW50ZXI6IGYzMjtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU5cbmxldCBncmxDb2xvck1vZGU6IGYzMj11bmlmb3Jtcy5ncmxfY29sb3JNb2RlQW5kQ29sb3JEaXN0cmlidXRpb25UeXBlLng7bGV0IGdybENvbG9yRGlzdHJpYnV0aW9uVHlwZTogZjMyPXVuaWZvcm1zLmdybF9jb2xvck1vZGVBbmRDb2xvckRpc3RyaWJ1dGlvblR5cGUueTt2YXIgb3V0Q29sb3I9dmVjNCh1bmlmb3Jtcy5ncmxDb2xvciwxLik7b3V0Q29sb3IuYT1zdGVwKGZyYWdtZW50SW5wdXRzLmdybENvdW50ZXJzLHVuaWZvcm1zLmdybFZpc2liaWxpdHkpO2lmIChvdXRDb2xvci5hPT0wLjApIHtkaXNjYXJkO31cbmlmICh1bmlmb3Jtcy5ncmxVc2VEYXNoPT0xLjApIHtsZXQgZGFzaFBvc2l0aW9uPShmcmFnbWVudElucHV0cy5ncmxDb3VudGVycyt1bmlmb3Jtcy5ncmxEYXNoT2Zmc2V0KSAlIHVuaWZvcm1zLmdybERhc2hBcnJheTtvdXRDb2xvci5hKj1jZWlsKGRhc2hQb3NpdGlvbi0odW5pZm9ybXMuZ3JsRGFzaEFycmF5KnVuaWZvcm1zLmdybERhc2hSYXRpbykpO2lmIChvdXRDb2xvci5hPT0wLjApIHtkaXNjYXJkO319XG5pZiAodW5pZm9ybXMuZ3JsVXNlQ29sb3JzPT0xLikge1xuI2lmZGVmIEdSRUFTRURfTElORV9DT0xPUl9ESVNUUklCVVRJT05fVFlQRV9MSU5FXG5sZXQgZ3JsQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUoZ3JsQ29sb3JzLGdybENvbG9yc1NhbXBsZXIsdmVjMmYoZnJhZ21lbnRJbnB1dHMuZ3JsQ291bnRlcnMsMC4pKTtcbiNlbHNlXG5sZXQgbG9va3VwOiB2ZWMyZj12ZWMyKGZyYWN0KGZyYWdtZW50SW5wdXRzLmdybENvbG9yUG9pbnRlci91bmlmb3Jtcy5ncmxDb2xvcnNXaWR0aCksMS4wLWZsb29yKGZyYWdtZW50SW5wdXRzLmdybENvbG9yUG9pbnRlci91bmlmb3Jtcy5ncmxDb2xvcnNXaWR0aCkpO2xldCBncmxDb2xvcjogdmVjNGY9dGV4dHVyZVNhbXBsZShncmxDb2xvcnMsZ3JsQ29sb3JzU2FtcGxlcixsb29rdXApO1xuI2VuZGlmXG5pZiAoZ3JsQ29sb3JNb2RlPT1DT0xPUl9NT0RFX1NFVCkge291dENvbG9yPWdybENvbG9yO30gZWxzZSBpZiAoZ3JsQ29sb3JNb2RlPT1DT0xPUl9NT0RFX0FERCkge291dENvbG9yKz1ncmxDb2xvcjt9IGVsc2UgaWYgKGdybENvbG9yTW9kZT09Q09MT1JfTU9ERV9NVUxUSVBMWSkge291dENvbG9yKj1ncmxDb2xvcjt9fVxuI2lmICFkZWZpbmVkKFBSRVBBU1MpICYmICFkZWZpbmVkKE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWSlcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj1vdXRDb2xvcjtcbiNlbmRpZlxuI2lmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxuaWYgKGZyYWdEZXB0aD09bmVhcmVzdERlcHRoKSB7ZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3I9dmVjNGYoZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3IucmdiK291dENvbG9yLnJnYipvdXRDb2xvci5hKmFscGhhTXVsdGlwbGllciwxLjAtYWxwaGFNdWx0aXBsaWVyKigxLjAtb3V0Q29sb3IuYSkpO30gZWxzZSB7ZnJhZ21lbnRPdXRwdXRzLmJhY2tDb2xvcis9b3V0Q29sb3I7fVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0VORFxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZ3JlYXNlZExpbmVQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==