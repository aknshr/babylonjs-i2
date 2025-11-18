"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_textureMerger_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/textureMerger.fragment.js":
/*!**********************************************************!*\
  !*** ../core/dist/ShadersWGSL/textureMerger.fragment.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textureMergerPixelShaderWGSL: () => (/* binding */ textureMergerPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "textureMergerPixelShader";
const shader = `#ifdef USE_TEXTURE0
var inputTexture0Sampler: sampler;var inputTexture0: texture_2d<f32>;
#endif
#ifdef USE_TEXTURE1
var inputTexture1Sampler: sampler;var inputTexture1: texture_2d<f32>;
#endif
#ifdef USE_TEXTURE2
var inputTexture2Sampler: sampler;var inputTexture2: texture_2d<f32>;
#endif
#ifdef USE_TEXTURE3
var inputTexture3Sampler: sampler;var inputTexture3: texture_2d<f32>;
#endif
#ifdef RED_FROM_TEXTURE
uniform redTextureIndex: i32;uniform redSourceChannel: i32;
#else
uniform redConstantValue: f32;
#endif
#ifdef GREEN_FROM_TEXTURE
uniform greenTextureIndex: i32;uniform greenSourceChannel: i32;
#else
uniform greenConstantValue: f32;
#endif
#ifdef BLUE_FROM_TEXTURE
uniform blueTextureIndex: i32;uniform blueSourceChannel: i32;
#else
uniform blueConstantValue: f32;
#endif
#ifdef ALPHA_FROM_TEXTURE
uniform alphaTextureIndex: i32;uniform alphaSourceChannel: i32;
#else
uniform alphaConstantValue: f32;
#endif
varying vUV: vec2f;
#if defined(RED_FROM_TEXTURE) || defined(GREEN_FROM_TEXTURE) || defined(BLUE_FROM_TEXTURE) || defined(ALPHA_FROM_TEXTURE)
fn sampleTexture(textureIndex: i32,uv: vec2f)->vec4f {switch (textureIndex) {
#ifdef USE_TEXTURE0
case 0: {return textureSample(inputTexture0,inputTexture0Sampler,uv);}
#endif
#ifdef USE_TEXTURE1
case 1: {return textureSample(inputTexture1,inputTexture1Sampler,uv);}
#endif
#ifdef USE_TEXTURE2
case 2: {return textureSample(inputTexture2,inputTexture2Sampler,uv);}
#endif
#ifdef USE_TEXTURE3
case 3: {return textureSample(inputTexture3,inputTexture3Sampler,uv);}
#endif
default: {return vec4f(0.0,0.0,0.0,1.0); }}}
fn extractChannel(color: vec4f,channelIndex: i32)->f32 {switch (channelIndex) {case 0: {return color.r; }
case 1: {return color.g; }
case 2: {return color.b; }
default: {return color.a; }}}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let uv: vec2f=input.vUV;
#ifdef RED_FROM_TEXTURE
let redSample: vec4f=sampleTexture(uniforms.redTextureIndex,uv);let r: f32=extractChannel(redSample,uniforms.redSourceChannel);
#else
let r: f32=uniforms.redConstantValue;
#endif
#ifdef GREEN_FROM_TEXTURE
let greenSample: vec4f=sampleTexture(uniforms.greenTextureIndex,uv);let g: f32=extractChannel(greenSample,uniforms.greenSourceChannel);
#else
let g: f32=uniforms.greenConstantValue;
#endif
#ifdef BLUE_FROM_TEXTURE
let blueSample: vec4f=sampleTexture(uniforms.blueTextureIndex,uv);let b: f32=extractChannel(blueSample,uniforms.blueSourceChannel);
#else
let b: f32=uniforms.blueConstantValue;
#endif
#ifdef ALPHA_FROM_TEXTURE
let alphaSample: vec4f=sampleTexture(uniforms.alphaTextureIndex,uv);let a: f32=extractChannel(alphaSample,uniforms.alphaSourceChannel);
#else
let a: f32=uniforms.alphaConstantValue;
#endif
fragmentOutputs.color=vec4f(r,g,b,a);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const textureMergerPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3RleHR1cmVNZXJnZXJfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvdGV4dHVyZU1lcmdlci5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwidGV4dHVyZU1lcmdlclBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFVTRV9URVhUVVJFMFxudmFyIGlucHV0VGV4dHVyZTBTYW1wbGVyOiBzYW1wbGVyO3ZhciBpbnB1dFRleHR1cmUwOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBVU0VfVEVYVFVSRTFcbnZhciBpbnB1dFRleHR1cmUxU2FtcGxlcjogc2FtcGxlcjt2YXIgaW5wdXRUZXh0dXJlMTogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgVVNFX1RFWFRVUkUyXG52YXIgaW5wdXRUZXh0dXJlMlNhbXBsZXI6IHNhbXBsZXI7dmFyIGlucHV0VGV4dHVyZTI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIFVTRV9URVhUVVJFM1xudmFyIGlucHV0VGV4dHVyZTNTYW1wbGVyOiBzYW1wbGVyO3ZhciBpbnB1dFRleHR1cmUzOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBSRURfRlJPTV9URVhUVVJFXG51bmlmb3JtIHJlZFRleHR1cmVJbmRleDogaTMyO3VuaWZvcm0gcmVkU291cmNlQ2hhbm5lbDogaTMyO1xuI2Vsc2VcbnVuaWZvcm0gcmVkQ29uc3RhbnRWYWx1ZTogZjMyO1xuI2VuZGlmXG4jaWZkZWYgR1JFRU5fRlJPTV9URVhUVVJFXG51bmlmb3JtIGdyZWVuVGV4dHVyZUluZGV4OiBpMzI7dW5pZm9ybSBncmVlblNvdXJjZUNoYW5uZWw6IGkzMjtcbiNlbHNlXG51bmlmb3JtIGdyZWVuQ29uc3RhbnRWYWx1ZTogZjMyO1xuI2VuZGlmXG4jaWZkZWYgQkxVRV9GUk9NX1RFWFRVUkVcbnVuaWZvcm0gYmx1ZVRleHR1cmVJbmRleDogaTMyO3VuaWZvcm0gYmx1ZVNvdXJjZUNoYW5uZWw6IGkzMjtcbiNlbHNlXG51bmlmb3JtIGJsdWVDb25zdGFudFZhbHVlOiBmMzI7XG4jZW5kaWZcbiNpZmRlZiBBTFBIQV9GUk9NX1RFWFRVUkVcbnVuaWZvcm0gYWxwaGFUZXh0dXJlSW5kZXg6IGkzMjt1bmlmb3JtIGFscGhhU291cmNlQ2hhbm5lbDogaTMyO1xuI2Vsc2VcbnVuaWZvcm0gYWxwaGFDb25zdGFudFZhbHVlOiBmMzI7XG4jZW5kaWZcbnZhcnlpbmcgdlVWOiB2ZWMyZjtcbiNpZiBkZWZpbmVkKFJFRF9GUk9NX1RFWFRVUkUpIHx8IGRlZmluZWQoR1JFRU5fRlJPTV9URVhUVVJFKSB8fCBkZWZpbmVkKEJMVUVfRlJPTV9URVhUVVJFKSB8fCBkZWZpbmVkKEFMUEhBX0ZST01fVEVYVFVSRSlcbmZuIHNhbXBsZVRleHR1cmUodGV4dHVyZUluZGV4OiBpMzIsdXY6IHZlYzJmKS0+dmVjNGYge3N3aXRjaCAodGV4dHVyZUluZGV4KSB7XG4jaWZkZWYgVVNFX1RFWFRVUkUwXG5jYXNlIDA6IHtyZXR1cm4gdGV4dHVyZVNhbXBsZShpbnB1dFRleHR1cmUwLGlucHV0VGV4dHVyZTBTYW1wbGVyLHV2KTt9XG4jZW5kaWZcbiNpZmRlZiBVU0VfVEVYVFVSRTFcbmNhc2UgMToge3JldHVybiB0ZXh0dXJlU2FtcGxlKGlucHV0VGV4dHVyZTEsaW5wdXRUZXh0dXJlMVNhbXBsZXIsdXYpO31cbiNlbmRpZlxuI2lmZGVmIFVTRV9URVhUVVJFMlxuY2FzZSAyOiB7cmV0dXJuIHRleHR1cmVTYW1wbGUoaW5wdXRUZXh0dXJlMixpbnB1dFRleHR1cmUyU2FtcGxlcix1dik7fVxuI2VuZGlmXG4jaWZkZWYgVVNFX1RFWFRVUkUzXG5jYXNlIDM6IHtyZXR1cm4gdGV4dHVyZVNhbXBsZShpbnB1dFRleHR1cmUzLGlucHV0VGV4dHVyZTNTYW1wbGVyLHV2KTt9XG4jZW5kaWZcbmRlZmF1bHQ6IHtyZXR1cm4gdmVjNGYoMC4wLDAuMCwwLjAsMS4wKTsgfX19XG5mbiBleHRyYWN0Q2hhbm5lbChjb2xvcjogdmVjNGYsY2hhbm5lbEluZGV4OiBpMzIpLT5mMzIge3N3aXRjaCAoY2hhbm5lbEluZGV4KSB7Y2FzZSAwOiB7cmV0dXJuIGNvbG9yLnI7IH1cbmNhc2UgMToge3JldHVybiBjb2xvci5nOyB9XG5jYXNlIDI6IHtyZXR1cm4gY29sb3IuYjsgfVxuZGVmYXVsdDoge3JldHVybiBjb2xvci5hOyB9fX1cbiNlbmRpZlxuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7bGV0IHV2OiB2ZWMyZj1pbnB1dC52VVY7XG4jaWZkZWYgUkVEX0ZST01fVEVYVFVSRVxubGV0IHJlZFNhbXBsZTogdmVjNGY9c2FtcGxlVGV4dHVyZSh1bmlmb3Jtcy5yZWRUZXh0dXJlSW5kZXgsdXYpO2xldCByOiBmMzI9ZXh0cmFjdENoYW5uZWwocmVkU2FtcGxlLHVuaWZvcm1zLnJlZFNvdXJjZUNoYW5uZWwpO1xuI2Vsc2VcbmxldCByOiBmMzI9dW5pZm9ybXMucmVkQ29uc3RhbnRWYWx1ZTtcbiNlbmRpZlxuI2lmZGVmIEdSRUVOX0ZST01fVEVYVFVSRVxubGV0IGdyZWVuU2FtcGxlOiB2ZWM0Zj1zYW1wbGVUZXh0dXJlKHVuaWZvcm1zLmdyZWVuVGV4dHVyZUluZGV4LHV2KTtsZXQgZzogZjMyPWV4dHJhY3RDaGFubmVsKGdyZWVuU2FtcGxlLHVuaWZvcm1zLmdyZWVuU291cmNlQ2hhbm5lbCk7XG4jZWxzZVxubGV0IGc6IGYzMj11bmlmb3Jtcy5ncmVlbkNvbnN0YW50VmFsdWU7XG4jZW5kaWZcbiNpZmRlZiBCTFVFX0ZST01fVEVYVFVSRVxubGV0IGJsdWVTYW1wbGU6IHZlYzRmPXNhbXBsZVRleHR1cmUodW5pZm9ybXMuYmx1ZVRleHR1cmVJbmRleCx1dik7bGV0IGI6IGYzMj1leHRyYWN0Q2hhbm5lbChibHVlU2FtcGxlLHVuaWZvcm1zLmJsdWVTb3VyY2VDaGFubmVsKTtcbiNlbHNlXG5sZXQgYjogZjMyPXVuaWZvcm1zLmJsdWVDb25zdGFudFZhbHVlO1xuI2VuZGlmXG4jaWZkZWYgQUxQSEFfRlJPTV9URVhUVVJFXG5sZXQgYWxwaGFTYW1wbGU6IHZlYzRmPXNhbXBsZVRleHR1cmUodW5pZm9ybXMuYWxwaGFUZXh0dXJlSW5kZXgsdXYpO2xldCBhOiBmMzI9ZXh0cmFjdENoYW5uZWwoYWxwaGFTYW1wbGUsdW5pZm9ybXMuYWxwaGFTb3VyY2VDaGFubmVsKTtcbiNlbHNlXG5sZXQgYTogZjMyPXVuaWZvcm1zLmFscGhhQ29uc3RhbnRWYWx1ZTtcbiNlbmRpZlxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXZlYzRmKHIsZyxiLGEpO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCB0ZXh0dXJlTWVyZ2VyUGl4ZWxTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==