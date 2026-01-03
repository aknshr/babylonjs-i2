"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_shadowMap_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bayerDitherFunctions.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bayerDitherFunctions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bayerDitherFunctionsWGSL: () => (/* binding */ bayerDitherFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bayerDitherFunctions";
const shader = `fn bayerDither2(_P: vec2f)->f32 {return ((2.0*_P.y+_P.x+1.0)%(4.0));}
fn bayerDither4(_P: vec2f)->f32 {var P1: vec2f=((_P)%(2.0)); 
var P2: vec2f=floor(0.5*((_P)%(4.0))); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
fn bayerDither8(_P: vec2f)->f32 {var P1: vec2f=((_P)%(2.0)); 
var P2: vec2f=floor(0.5 *((_P)%(4.0))); 
var P4: vec2f=floor(0.25*((_P)%(8.0))); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bayerDitherFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/packingFunctions.js":
/*!*******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/packingFunctions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packingFunctionsWGSL: () => (/* binding */ packingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "packingFunctions";
const shader = `fn pack(depth: f32)->vec4f
{const bit_shift: vec4f= vec4f(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const bit_mask: vec4f= vec4f(0.0,1.0/255.0,1.0/255.0,1.0/255.0);var res: vec4f=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
fn unpack(color: vec4f)->f32
{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const packingFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapFragmentExtraDeclaration.js":
/*!************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowMapFragmentExtraDeclaration.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragmentExtraDeclarationWGSL: () => (/* binding */ shadowMapFragmentExtraDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _packingFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/packingFunctions.js");
/* harmony import */ var _bayerDitherFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bayerDitherFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/bayerDitherFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "shadowMapFragmentExtraDeclaration";
const shader = `#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform softTransparentShadowSM: vec2f;
#endif
varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
uniform lightDataSM: vec3f;varying vPositionWSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapFragmentExtraDeclarationWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3NoYWRvd01hcF9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYmF5ZXJEaXRoZXJGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYWNraW5nRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwRnJhZ21lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9zaGFkb3dNYXAuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJheWVyRGl0aGVyRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgZm4gYmF5ZXJEaXRoZXIyKF9QOiB2ZWMyZiktPmYzMiB7cmV0dXJuICgoMi4wKl9QLnkrX1AueCsxLjApJSg0LjApKTt9XG5mbiBiYXllckRpdGhlcjQoX1A6IHZlYzJmKS0+ZjMyIHt2YXIgUDE6IHZlYzJmPSgoX1ApJSgyLjApKTsgXG52YXIgUDI6IHZlYzJmPWZsb29yKDAuNSooKF9QKSUoNC4wKSkpOyBcbnJldHVybiA0LjAqYmF5ZXJEaXRoZXIyKFAxKStiYXllckRpdGhlcjIoUDIpO31cbmZuIGJheWVyRGl0aGVyOChfUDogdmVjMmYpLT5mMzIge3ZhciBQMTogdmVjMmY9KChfUCklKDIuMCkpOyBcbnZhciBQMjogdmVjMmY9Zmxvb3IoMC41ICooKF9QKSUoNC4wKSkpOyBcbnZhciBQNDogdmVjMmY9Zmxvb3IoMC4yNSooKF9QKSUoOC4wKSkpOyBcbnJldHVybiA0LjAqKDQuMCpiYXllckRpdGhlcjIoUDEpK2JheWVyRGl0aGVyMihQMikpK2JheWVyRGl0aGVyMihQNCk7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJheWVyRGl0aGVyRnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGFja2luZ0Z1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYGZuIHBhY2soZGVwdGg6IGYzMiktPnZlYzRmXG57Y29uc3QgYml0X3NoaWZ0OiB2ZWM0Zj0gdmVjNGYoMjU1LjAqMjU1LjAqMjU1LjAsMjU1LjAqMjU1LjAsMjU1LjAsMS4wKTtjb25zdCBiaXRfbWFzazogdmVjNGY9IHZlYzRmKDAuMCwxLjAvMjU1LjAsMS4wLzI1NS4wLDEuMC8yNTUuMCk7dmFyIHJlczogdmVjNGY9ZnJhY3QoZGVwdGgqYml0X3NoaWZ0KTtyZXMtPXJlcy54eHl6KmJpdF9tYXNrO3JldHVybiByZXM7fVxuZm4gdW5wYWNrKGNvbG9yOiB2ZWM0ZiktPmYzMlxue2NvbnN0IGJpdF9zaGlmdDogdmVjNGY9IHZlYzRmKDEuMC8oMjU1LjAqMjU1LjAqMjU1LjApLDEuMC8oMjU1LjAqMjU1LjApLDEuMC8yNTUuMCwxLjApO3JldHVybiBkb3QoY29sb3IsYml0X3NoaWZ0KTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBhY2tpbmdGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBGcmFnbWVudFwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciBkZXB0aFNNOiBmMzI9ZnJhZ21lbnRJbnB1dHMudkRlcHRoTWV0cmljU007XG4jaWYgZGVmaW5lZChTTV9ERVBUSENMQU1QKSAmJiBTTV9ERVBUSENMQU1QPT0xXG4jaWYgU01fVVNFRElTVEFOQ0U9PTFcbmRlcHRoU009KGxlbmd0aChmcmFnbWVudElucHV0cy52UG9zaXRpb25XU00tdW5pZm9ybXMubGlnaHREYXRhU00pK3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueCkvdW5pZm9ybXMuZGVwdGhWYWx1ZXNTTS55K3VuaWZvcm1zLmJpYXNBbmRTY2FsZVNNLng7XG4jZWxzZVxuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG5kZXB0aFNNPSgtZnJhZ21lbnRJbnB1dHMuelNNK3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueCkvdW5pZm9ybXMuZGVwdGhWYWx1ZXNTTS55K3VuaWZvcm1zLmJpYXNBbmRTY2FsZVNNLng7XG4jZWxzZVxuZGVwdGhTTT0oZnJhZ21lbnRJbnB1dHMuelNNK3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueCkvdW5pZm9ybXMuZGVwdGhWYWx1ZXNTTS55K3VuaWZvcm1zLmJpYXNBbmRTY2FsZVNNLng7XG4jZW5kaWZcbiNlbmRpZlxuZGVwdGhTTT1jbGFtcChkZXB0aFNNLDAuMCwxLjApO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RlcHRoPWNsYW1wKDEuMC1kZXB0aFNNLDAuMCwxLjApO1xuI2Vsc2VcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGVwdGg9Y2xhbXAoZGVwdGhTTSwwLjAsMS4wKTsgXG4jZW5kaWZcbiNlbGlmIFNNX1VTRURJU1RBTkNFPT0xXG5kZXB0aFNNPShsZW5ndGgoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uV1NNLXVuaWZvcm1zLmxpZ2h0RGF0YVNNKSt1bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLngpL3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueSt1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54O1xuI2VuZGlmXG4jaWYgU01fRVNNPT0xXG5kZXB0aFNNPWNsYW1wKGV4cCgtbWluKDg3Lix1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS56KmRlcHRoU00pKSwwLiwxLik7XG4jZW5kaWZcbiNpZiBTTV9GTE9BVD09MVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPSB2ZWM0ZihkZXB0aFNNLDEuMCwxLjAsMS4wKTtcbiNlbHNlXG5mcmFnbWVudE91dHB1dHMuY29sb3I9cGFjayhkZXB0aFNNKTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcEZyYWdtZW50V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vcGFja2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9iYXllckRpdGhlckZ1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBGcmFnbWVudEV4dHJhRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgU01fRkxPQVQ9PTBcbiNpbmNsdWRlPHBhY2tpbmdGdW5jdGlvbnM+XG4jZW5kaWZcbiNpZiBTTV9TT0ZUVFJBTlNQQVJFTlRTSEFET1c9PTFcbiNpbmNsdWRlPGJheWVyRGl0aGVyRnVuY3Rpb25zPlxudW5pZm9ybSBzb2Z0VHJhbnNwYXJlbnRTaGFkb3dTTTogdmVjMmY7XG4jZW5kaWZcbnZhcnlpbmcgdkRlcHRoTWV0cmljU006IGYzMjtcbiNpZiBTTV9VU0VESVNUQU5DRT09MVxudW5pZm9ybSBsaWdodERhdGFTTTogdmVjM2Y7dmFyeWluZyB2UG9zaXRpb25XU006IHZlYzNmO1xuI2VuZGlmXG51bmlmb3JtIGJpYXNBbmRTY2FsZVNNOiB2ZWMzZjt1bmlmb3JtIGRlcHRoVmFsdWVzU006IHZlYzJmO1xuI2lmIGRlZmluZWQoU01fREVQVEhDTEFNUCkgJiYgU01fREVQVEhDTEFNUD09MVxudmFyeWluZyB6U006IGYzMjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcEZyYWdtZW50RXh0cmFEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcEZyYWdtZW50RXh0cmFEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcEZyYWdtZW50XCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2luY2x1ZGU8c2hhZG93TWFwRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uPlxuI2lmZGVmIEFMUEhBVEVYVFVSRVxudmFyeWluZyB2VVY6IHZlYzJmO3ZhciBkaWZmdXNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGRpZmZ1c2VTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbiNpZmRlZiBBTFBIQVRFWFRVUkVcbnZhciBvcGFjaXR5TWFwOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGRpZmZ1c2VTYW1wbGVyLGRpZmZ1c2VTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52VVYpO3ZhciBhbHBoYUZyb21BbHBoYVRleHR1cmU6IGYzMj1vcGFjaXR5TWFwLmE7XG4jaWYgU01fU09GVFRSQU5TUEFSRU5UU0hBRE9XPT0xXG5pZiAodW5pZm9ybXMuc29mdFRyYW5zcGFyZW50U2hhZG93U00ueT09MS4wKSB7b3BhY2l0eU1hcD12ZWM0ZihvcGFjaXR5TWFwLnJnYiogdmVjM2YoMC4zLDAuNTksMC4xMSksb3BhY2l0eU1hcC5hKTthbHBoYUZyb21BbHBoYVRleHR1cmU9b3BhY2l0eU1hcC54K29wYWNpdHlNYXAueStvcGFjaXR5TWFwLno7fVxuI2VuZGlmXG4jaWZkZWYgQUxQSEFURVNUVkFMVUVcbmlmIChhbHBoYUZyb21BbHBoYVRleHR1cmU8QUxQSEFURVNUVkFMVUUpIHtkaXNjYXJkO31cbiNlbmRpZlxuI2VuZGlmXG4jaWYgU01fU09GVFRSQU5TUEFSRU5UU0hBRE9XPT0xXG4jaWZkZWYgQUxQSEFURVhUVVJFXG5pZiAoKGJheWVyRGl0aGVyOChmbG9vcigoKGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KSUoOC4wKSkpKSkvNjQuMD49dW5pZm9ybXMuc29mdFRyYW5zcGFyZW50U2hhZG93U00ueCphbHBoYUZyb21BbHBoYVRleHR1cmUpIHtkaXNjYXJkO31cbiNlbHNlXG5pZiAoKGJheWVyRGl0aGVyOChmbG9vcigoKGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KSUoOC4wKSkpKSkvNjQuMD49dW5pZm9ybXMuc29mdFRyYW5zcGFyZW50U2hhZG93U00ueCkge2Rpc2NhcmQ7fSBcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxzaGFkb3dNYXBGcmFnbWVudD5cbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==