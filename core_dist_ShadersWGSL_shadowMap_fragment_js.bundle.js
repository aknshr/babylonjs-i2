"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_shadowMap_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapFragment.js":
/*!********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowMapFragment.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragmentWGSL: () => (/* binding */ shadowMapFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapFragment";
const shader = `var depthSM: f32=fragmentInputs.vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
depthSM=(fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
depthSM=clamp(depthSM,0.0,1.0);
#ifdef USE_REVERSE_DEPTHBUFFER
fragmentOutputs.fragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
fragmentOutputs.fragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,uniforms.biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
fragmentOutputs.color= vec4f(depthSM,1.0,1.0,1.0);
#else
fragmentOutputs.color=pack(depthSM);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapFragmentWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/shadowMap.fragment.js":
/*!******************************************************!*\
  !*** ../core/dist/ShadersWGSL/shadowMap.fragment.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapPixelShaderWGSL: () => (/* binding */ shadowMapPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_shadowMapFragmentExtraDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/shadowMapFragmentExtraDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapFragmentExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_shadowMapFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/shadowMapFragment */ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "shadowMapPixelShader";
const shader = `#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
var opacityMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV);var alphaFromAlphaTexture: f32=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (uniforms.softTransparentShadowSM.y==1.0) {opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE) {discard;}
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alphaFromAlphaTexture) {discard;}
#else
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x) {discard;} 
#endif
#endif
#include<shadowMapFragment>
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3NoYWRvd01hcF9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBGcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML3NoYWRvd01hcC5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwRnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgZGVwdGhTTTogZjMyPWZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY1NNO1xuI2lmIGRlZmluZWQoU01fREVQVEhDTEFNUCkgJiYgU01fREVQVEhDTEFNUD09MVxuI2lmIFNNX1VTRURJU1RBTkNFPT0xXG5kZXB0aFNNPShsZW5ndGgoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uV1NNLXVuaWZvcm1zLmxpZ2h0RGF0YVNNKSt1bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLngpL3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueSt1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54O1xuI2Vsc2VcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuZGVwdGhTTT0oLWZyYWdtZW50SW5wdXRzLnpTTSt1bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLngpL3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueSt1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54O1xuI2Vsc2VcbmRlcHRoU009KGZyYWdtZW50SW5wdXRzLnpTTSt1bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLngpL3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueSt1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54O1xuI2VuZGlmXG4jZW5kaWZcbmRlcHRoU009Y2xhbXAoZGVwdGhTTSwwLjAsMS4wKTtcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEZXB0aD1jbGFtcCgxLjAtZGVwdGhTTSwwLjAsMS4wKTtcbiNlbHNlXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RlcHRoPWNsYW1wKGRlcHRoU00sMC4wLDEuMCk7IFxuI2VuZGlmXG4jZWxpZiBTTV9VU0VESVNUQU5DRT09MVxuZGVwdGhTTT0obGVuZ3RoKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbldTTS11bmlmb3Jtcy5saWdodERhdGFTTSkrdW5pZm9ybXMuZGVwdGhWYWx1ZXNTTS54KS91bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLnkrdW5pZm9ybXMuYmlhc0FuZFNjYWxlU00ueDtcbiNlbmRpZlxuI2lmIFNNX0VTTT09MVxuZGVwdGhTTT1jbGFtcChleHAoLW1pbig4Ny4sdW5pZm9ybXMuYmlhc0FuZFNjYWxlU00ueipkZXB0aFNNKSksMC4sMS4pO1xuI2VuZGlmXG4jaWYgU01fRkxPQVQ9PTFcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj0gdmVjNGYoZGVwdGhTTSwxLjAsMS4wLDEuMCk7XG4jZWxzZVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXBhY2soZGVwdGhTTSk7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBGcmFnbWVudFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcEZyYWdtZW50RXh0cmFEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcEZyYWdtZW50XCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2luY2x1ZGU8c2hhZG93TWFwRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uPlxuI2lmZGVmIEFMUEhBVEVYVFVSRVxudmFyeWluZyB2VVY6IHZlYzJmO3ZhciBkaWZmdXNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGRpZmZ1c2VTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbiNpZmRlZiBBTFBIQVRFWFRVUkVcbnZhciBvcGFjaXR5TWFwOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGRpZmZ1c2VTYW1wbGVyLGRpZmZ1c2VTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52VVYpO3ZhciBhbHBoYUZyb21BbHBoYVRleHR1cmU6IGYzMj1vcGFjaXR5TWFwLmE7XG4jaWYgU01fU09GVFRSQU5TUEFSRU5UU0hBRE9XPT0xXG5pZiAodW5pZm9ybXMuc29mdFRyYW5zcGFyZW50U2hhZG93U00ueT09MS4wKSB7b3BhY2l0eU1hcD12ZWM0ZihvcGFjaXR5TWFwLnJnYiogdmVjM2YoMC4zLDAuNTksMC4xMSksb3BhY2l0eU1hcC5hKTthbHBoYUZyb21BbHBoYVRleHR1cmU9b3BhY2l0eU1hcC54K29wYWNpdHlNYXAueStvcGFjaXR5TWFwLno7fVxuI2VuZGlmXG4jaWZkZWYgQUxQSEFURVNUVkFMVUVcbmlmIChhbHBoYUZyb21BbHBoYVRleHR1cmU8QUxQSEFURVNUVkFMVUUpIHtkaXNjYXJkO31cbiNlbmRpZlxuI2VuZGlmXG4jaWYgU01fU09GVFRSQU5TUEFSRU5UU0hBRE9XPT0xXG4jaWZkZWYgQUxQSEFURVhUVVJFXG5pZiAoKGJheWVyRGl0aGVyOChmbG9vcigoKGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KSUoOC4wKSkpKSkvNjQuMD49dW5pZm9ybXMuc29mdFRyYW5zcGFyZW50U2hhZG93U00ueCphbHBoYUZyb21BbHBoYVRleHR1cmUpIHtkaXNjYXJkO31cbiNlbHNlXG5pZiAoKGJheWVyRGl0aGVyOChmbG9vcigoKGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KSUoOC4wKSkpKSkvNjQuMD49dW5pZm9ybXMuc29mdFRyYW5zcGFyZW50U2hhZG93U00ueCkge2Rpc2NhcmQ7fSBcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxzaGFkb3dNYXBGcmFnbWVudD5cbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9