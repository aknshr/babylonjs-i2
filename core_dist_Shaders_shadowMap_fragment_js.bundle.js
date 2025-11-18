"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_shadowMap_fragment_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/bayerDitherFunctions.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/bayerDitherFunctions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bayerDitherFunctions: () => (/* binding */ bayerDitherFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bayerDitherFunctions";
const shader = `float bayerDither2(vec2 _P) {return mod(2.0*_P.y+_P.x+1.0,4.0);}
float bayerDither4(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
float bayerDither8(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const bayerDitherFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapFragment.js":
/*!****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapFragment.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragment: () => (/* binding */ shadowMapFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapFragment";
const shader = `float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
depthSM=clamp(depthSM,0.0,1.0);
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapFragment = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapFragmentExtraDeclaration.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapFragmentExtraDeclaration.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapFragmentExtraDeclaration: () => (/* binding */ shadowMapFragmentExtraDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _packingFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packingFunctions */ "../core/dist/Shaders/ShadersInclude/packingFunctions.js");
/* harmony import */ var _bayerDitherFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bayerDitherFunctions */ "../core/dist/Shaders/ShadersInclude/bayerDitherFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "shadowMapFragmentExtraDeclaration";
const shader = `#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform vec2 softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapFragmentExtraDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/shadowMap.fragment.js":
/*!**************************************************!*\
  !*** ../core/dist/Shaders/shadowMap.fragment.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapPixelShader: () => (/* binding */ shadowMapPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_shadowMapFragmentExtraDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/shadowMapFragmentExtraDeclaration */ "../core/dist/Shaders/ShadersInclude/shadowMapFragmentExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_shadowMapFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/shadowMapFragment */ "../core/dist/Shaders/ShadersInclude/shadowMapFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "shadowMapPixelShader";
const shader = `#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
vec4 opacityMap=texture2D(diffuseSampler,vUV);float alphaFromAlphaTexture=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (softTransparentShadowSM.y==1.0) {opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE)
discard;
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alphaFromAlphaTexture) discard;
#else
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x) discard;
#endif
#endif
#include<shadowMapFragment>
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const shadowMapPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfc2hhZG93TWFwX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2JheWVyRGl0aGVyRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBGcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9zaGFkb3dNYXAuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJheWVyRGl0aGVyRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgZmxvYXQgYmF5ZXJEaXRoZXIyKHZlYzIgX1ApIHtyZXR1cm4gbW9kKDIuMCpfUC55K19QLngrMS4wLDQuMCk7fVxuZmxvYXQgYmF5ZXJEaXRoZXI0KHZlYzIgX1ApIHt2ZWMyIFAxPW1vZChfUCwyLjApOyBcbnZlYzIgUDI9Zmxvb3IoMC41Km1vZChfUCw0LjApKTsgXG5yZXR1cm4gNC4wKmJheWVyRGl0aGVyMihQMSkrYmF5ZXJEaXRoZXIyKFAyKTt9XG5mbG9hdCBiYXllckRpdGhlcjgodmVjMiBfUCkge3ZlYzIgUDE9bW9kKF9QLDIuMCk7IFxudmVjMiBQMj1mbG9vcigwLjUgKm1vZChfUCw0LjApKTsgXG52ZWMyIFA0PWZsb29yKDAuMjUqbW9kKF9QLDguMCkpOyBcbnJldHVybiA0LjAqKDQuMCpiYXllckRpdGhlcjIoUDEpK2JheWVyRGl0aGVyMihQMikpK2JheWVyRGl0aGVyMihQNCk7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBiYXllckRpdGhlckZ1bmN0aW9ucyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwRnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGBmbG9hdCBkZXB0aFNNPXZEZXB0aE1ldHJpY1NNO1xuI2lmIGRlZmluZWQoU01fREVQVEhDTEFNUCkgJiYgU01fREVQVEhDTEFNUD09MVxuI2lmIFNNX1VTRURJU1RBTkNFPT0xXG5kZXB0aFNNPShsZW5ndGgodlBvc2l0aW9uV1NNLWxpZ2h0RGF0YVNNKStkZXB0aFZhbHVlc1NNLngpL2RlcHRoVmFsdWVzU00ueStiaWFzQW5kU2NhbGVTTS54O1xuI2Vsc2VcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuZGVwdGhTTT0oLXpTTStkZXB0aFZhbHVlc1NNLngpL2RlcHRoVmFsdWVzU00ueStiaWFzQW5kU2NhbGVTTS54O1xuI2Vsc2VcbmRlcHRoU009KHpTTStkZXB0aFZhbHVlc1NNLngpL2RlcHRoVmFsdWVzU00ueStiaWFzQW5kU2NhbGVTTS54O1xuI2VuZGlmXG4jZW5kaWZcbmRlcHRoU009Y2xhbXAoZGVwdGhTTSwwLjAsMS4wKTtcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuZ2xfRnJhZ0RlcHRoPWNsYW1wKDEuMC1kZXB0aFNNLDAuMCwxLjApO1xuI2Vsc2VcbmdsX0ZyYWdEZXB0aD1jbGFtcChkZXB0aFNNLDAuMCwxLjApOyBcbiNlbmRpZlxuI2VsaWYgU01fVVNFRElTVEFOQ0U9PTFcbmRlcHRoU009KGxlbmd0aCh2UG9zaXRpb25XU00tbGlnaHREYXRhU00pK2RlcHRoVmFsdWVzU00ueCkvZGVwdGhWYWx1ZXNTTS55K2JpYXNBbmRTY2FsZVNNLng7XG4jZW5kaWZcbiNpZiBTTV9FU009PTFcbmRlcHRoU009Y2xhbXAoZXhwKC1taW4oODcuLGJpYXNBbmRTY2FsZVNNLnoqZGVwdGhTTSkpLDAuLDEuKTtcbiNlbmRpZlxuI2lmIFNNX0ZMT0FUPT0xXG5nbF9GcmFnQ29sb3I9dmVjNChkZXB0aFNNLDEuMCwxLjAsMS4wKTtcbiNlbHNlXG5nbF9GcmFnQ29sb3I9cGFjayhkZXB0aFNNKTtcbiNlbmRpZlxucmV0dXJuO2A7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2hhZG93TWFwRnJhZ21lbnQgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3BhY2tpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vYmF5ZXJEaXRoZXJGdW5jdGlvbnNcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIFNNX0ZMT0FUPT0wXG4jaW5jbHVkZTxwYWNraW5nRnVuY3Rpb25zPlxuI2VuZGlmXG4jaWYgU01fU09GVFRSQU5TUEFSRU5UU0hBRE9XPT0xXG4jaW5jbHVkZTxiYXllckRpdGhlckZ1bmN0aW9ucz5cbnVuaWZvcm0gdmVjMiBzb2Z0VHJhbnNwYXJlbnRTaGFkb3dTTTtcbiNlbmRpZlxudmFyeWluZyBmbG9hdCB2RGVwdGhNZXRyaWNTTTtcbiNpZiBTTV9VU0VESVNUQU5DRT09MVxudW5pZm9ybSB2ZWMzIGxpZ2h0RGF0YVNNO3ZhcnlpbmcgdmVjMyB2UG9zaXRpb25XU007XG4jZW5kaWZcbnVuaWZvcm0gdmVjMyBiaWFzQW5kU2NhbGVTTTt1bmlmb3JtIHZlYzIgZGVwdGhWYWx1ZXNTTTtcbiNpZiBkZWZpbmVkKFNNX0RFUFRIQ0xBTVApICYmIFNNX0RFUFRIQ0xBTVA9PTFcbnZhcnlpbmcgZmxvYXQgelNNO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcEZyYWdtZW50RXh0cmFEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwRnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjaW5jbHVkZTxzaGFkb3dNYXBGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24+XG4jaWZkZWYgQUxQSEFURVhUVVJFXG52YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gc2FtcGxlcjJEIGRpZmZ1c2VTYW1wbGVyO1xuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKVxue1xuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnQ+XG4jaWZkZWYgQUxQSEFURVhUVVJFXG52ZWM0IG9wYWNpdHlNYXA9dGV4dHVyZTJEKGRpZmZ1c2VTYW1wbGVyLHZVVik7ZmxvYXQgYWxwaGFGcm9tQWxwaGFUZXh0dXJlPW9wYWNpdHlNYXAuYTtcbiNpZiBTTV9TT0ZUVFJBTlNQQVJFTlRTSEFET1c9PTFcbmlmIChzb2Z0VHJhbnNwYXJlbnRTaGFkb3dTTS55PT0xLjApIHtvcGFjaXR5TWFwLnJnYj1vcGFjaXR5TWFwLnJnYip2ZWMzKDAuMywwLjU5LDAuMTEpO2FscGhhRnJvbUFscGhhVGV4dHVyZT1vcGFjaXR5TWFwLngrb3BhY2l0eU1hcC55K29wYWNpdHlNYXAuejt9XG4jZW5kaWZcbiNpZmRlZiBBTFBIQVRFU1RWQUxVRVxuaWYgKGFscGhhRnJvbUFscGhhVGV4dHVyZTxBTFBIQVRFU1RWQUxVRSlcbmRpc2NhcmQ7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIFNNX1NPRlRUUkFOU1BBUkVOVFNIQURPVz09MVxuI2lmZGVmIEFMUEhBVEVYVFVSRVxuaWYgKChiYXllckRpdGhlcjgoZmxvb3IobW9kKGdsX0ZyYWdDb29yZC54eSw4LjApKSkpLzY0LjA+PXNvZnRUcmFuc3BhcmVudFNoYWRvd1NNLngqYWxwaGFGcm9tQWxwaGFUZXh0dXJlKSBkaXNjYXJkO1xuI2Vsc2VcbmlmICgoYmF5ZXJEaXRoZXI4KGZsb29yKG1vZChnbF9GcmFnQ29vcmQueHksOC4wKSkpKS82NC4wPj1zb2Z0VHJhbnNwYXJlbnRTaGFkb3dTTS54KSBkaXNjYXJkO1xuI2VuZGlmXG4jZW5kaWZcbiNpbmNsdWRlPHNoYWRvd01hcEZyYWdtZW50PlxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBQaXhlbFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=