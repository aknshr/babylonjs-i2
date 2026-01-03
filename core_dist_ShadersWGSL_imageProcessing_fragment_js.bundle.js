"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_imageProcessing_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingDeclarationWGSL: () => (/* binding */ imageProcessingDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "imageProcessingDeclaration";
const shader = `#ifdef EXPOSURE
uniform exposureLinear: f32;
#endif
#ifdef CONTRAST
uniform contrast: f32;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vInverseScreenSize: vec2f;
#endif
#ifdef VIGNETTE
uniform vignetteSettings1: vec4f;uniform vignetteSettings2: vec4f;
#endif
#ifdef COLORCURVES
uniform vCameraColorCurveNegative: vec4f;uniform vCameraColorCurveNeutral: vec4f;uniform vCameraColorCurvePositive: vec4f;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
var txColorTransformSampler: sampler;var txColorTransform: texture_3d<f32>;
#else
var txColorTransformSampler: sampler;var txColorTransform: texture_2d<f32>;
#endif
uniform colorTransformSettings: vec4f;
#endif
#ifdef DITHER
uniform ditherIntensity: f32;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const imageProcessingDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingFunctionsWGSL: () => (/* binding */ imageProcessingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "imageProcessingFunctions";
const shader = `#if TONEMAPPING==3
const PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;result-=offset;var peak: f32=max(result.r,max(result.g,result.b));if (peak<PBRNeutralStartCompression) {return result;}
var d: f32=1.-PBRNeutralStartCompression;var newPeak: f32=1.-d*d/(peak+d-PBRNeutralStartCompression);result*=newPeak/peak;var g: f32=1.-1./(PBRNeutralDesaturation*(peak-newPeak)+1.);return mix(result,newPeak* vec3f(1,1,1),g);}
#endif
#if TONEMAPPING==2
const ACESInputMat: mat3x3f= mat3x3f(
vec3f(0.59719,0.07600,0.02840),
vec3f(0.35458,0.90834,0.13383),
vec3f(0.04823,0.01566,0.83777)
);const ACESOutputMat: mat3x3f= mat3x3f(
vec3f( 1.60475,-0.10208,-0.00327),
vec3f(-0.53108, 1.10813,-0.07276),
vec3f(-0.07367,-0.00605, 1.07602)
);fn RRTAndODTFit(v: vec3f)->vec3f
{var a: vec3f=v*(v+0.0245786)-0.000090537;var b: vec3f=v*(0.983729*v+0.4329510)+0.238081;return a/b;}
fn ACESFitted(color: vec3f)->vec3f
{var output=ACESInputMat*color;output=RRTAndODTFit(output);output=ACESOutputMat*output;output=saturateVec3(output);return output;}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
fn applyImageProcessing(result: vec4f)->vec4f {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
var rgb=result.rgb;;
#ifdef EXPOSURE
rgb*=uniforms.exposureLinear;
#endif
#ifdef VIGNETTE
var viewportXY: vec2f=fragmentInputs.position.xy*uniforms.vInverseScreenSize;viewportXY=viewportXY*2.0-1.0;var vignetteXY1: vec3f= vec3f(viewportXY*uniforms.vignetteSettings1.xy+uniforms.vignetteSettings1.zw,1.0);var vignetteTerm: f32=dot(vignetteXY1,vignetteXY1);var vignette: f32=pow(vignetteTerm,uniforms.vignetteSettings2.w);var vignetteColor: vec3f=uniforms.vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
var vignetteColorMultiplier: vec3f=mix(vignetteColor, vec3f(1,1,1),vignette);rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
rgb=mix(vignetteColor,rgb,vignette);
#endif
#endif
#if TONEMAPPING==3
rgb=PBRNeutralToneMapping(rgb);
#elif TONEMAPPING==2
rgb=ACESFitted(rgb);
#elif TONEMAPPING==1
const tonemappingCalibration: f32=1.590579;rgb=1.0-exp2(-tonemappingCalibration*rgb);
#endif
rgb=toGammaSpaceVec3(rgb);rgb=saturateVec3(rgb);
#ifdef CONTRAST
var resultHighContrast: vec3f=rgb*rgb*(3.0-2.0*rgb);if (uniforms.contrast<1.0) {rgb=mix( vec3f(0.5,0.5,0.5),rgb,uniforms.contrast);} else {rgb=mix(rgb,resultHighContrast,uniforms.contrast-1.0);}
rgb=max(rgb,vec3f(0.));
#endif
#ifdef COLORGRADING
var colorTransformInput: vec3f=rgb*uniforms.colorTransformSettings.xxx+uniforms.colorTransformSettings.yyy;
#ifdef COLORGRADING3D
var colorTransformOutput: vec3f=textureSample(txColorTransform,txColorTransformSampler,colorTransformInput).rgb;
#else
var colorTransformOutput: vec3f=textureSample(txColorTransform,txColorTransformSampler,colorTransformInput,uniforms.colorTransformSettings.yz).rgb;
#endif
rgb=mix(rgb,colorTransformOutput,uniforms.colorTransformSettings.www);
#endif
#ifdef COLORCURVES
var luma: f32=getLuminance(rgb);var curveMix: vec2f=clamp( vec2f(luma*3.0-1.5,luma*-3.0+1.5), vec2f(0.0), vec2f(1.0));var colorCurve: vec4f=uniforms.vCameraColorCurveNeutral+curveMix.x*uniforms.vCameraColorCurvePositive-curveMix.y*uniforms.vCameraColorCurveNegative;rgb*=colorCurve.rgb;rgb=mix( vec3f(luma),rgb,colorCurve.a);
#endif
#ifdef DITHER
var rand: f32=getRand(fragmentInputs.position.xy*uniforms.vInverseScreenSize);var dither: f32=mix(-uniforms.ditherIntensity,uniforms.ditherIntensity,rand);rgb=saturateVec3(rgb+ vec3f(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return vec4f(rgb,result.a);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const imageProcessingFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/imageProcessing.fragment.js":
/*!************************************************************!*\
  !*** ../core/dist/ShadersWGSL/imageProcessing.fragment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageProcessingPixelShaderWGSL: () => (/* binding */ imageProcessingPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




const name = "imageProcessingPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);result=vec4f(max(result.rgb,vec3f(0.)),result.a);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result=vec4f(toLinearSpaceVec3(result.rgb),result.a);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
fragmentOutputs.color=result;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const imageProcessingPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2ltYWdlUHJvY2Vzc2luZ19mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML2ltYWdlUHJvY2Vzc2luZy5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgRVhQT1NVUkVcbnVuaWZvcm0gZXhwb3N1cmVMaW5lYXI6IGYzMjtcbiNlbmRpZlxuI2lmZGVmIENPTlRSQVNUXG51bmlmb3JtIGNvbnRyYXN0OiBmMzI7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZJR05FVFRFKSB8fCBkZWZpbmVkKERJVEhFUilcbnVuaWZvcm0gdkludmVyc2VTY3JlZW5TaXplOiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIFZJR05FVFRFXG51bmlmb3JtIHZpZ25ldHRlU2V0dGluZ3MxOiB2ZWM0Zjt1bmlmb3JtIHZpZ25ldHRlU2V0dGluZ3MyOiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIENPTE9SQ1VSVkVTXG51bmlmb3JtIHZDYW1lcmFDb2xvckN1cnZlTmVnYXRpdmU6IHZlYzRmO3VuaWZvcm0gdkNhbWVyYUNvbG9yQ3VydmVOZXV0cmFsOiB2ZWM0Zjt1bmlmb3JtIHZDYW1lcmFDb2xvckN1cnZlUG9zaXRpdmU6IHZlYzRmO1xuI2VuZGlmXG4jaWZkZWYgQ09MT1JHUkFESU5HXG4jaWZkZWYgQ09MT1JHUkFESU5HM0RcbnZhciB0eENvbG9yVHJhbnNmb3JtU2FtcGxlcjogc2FtcGxlcjt2YXIgdHhDb2xvclRyYW5zZm9ybTogdGV4dHVyZV8zZDxmMzI+O1xuI2Vsc2VcbnZhciB0eENvbG9yVHJhbnNmb3JtU2FtcGxlcjogc2FtcGxlcjt2YXIgdHhDb2xvclRyYW5zZm9ybTogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG51bmlmb3JtIGNvbG9yVHJhbnNmb3JtU2V0dGluZ3M6IHZlYzRmO1xuI2VuZGlmXG4jaWZkZWYgRElUSEVSXG51bmlmb3JtIGRpdGhlckludGVuc2l0eTogZjMyO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJpbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgVE9ORU1BUFBJTkc9PTNcbmNvbnN0IFBCUk5ldXRyYWxTdGFydENvbXByZXNzaW9uOiBmMzI9MC44LTAuMDQ7Y29uc3QgUEJSTmV1dHJhbERlc2F0dXJhdGlvbjogZjMyPTAuMTU7Zm4gUEJSTmV1dHJhbFRvbmVNYXBwaW5nKCBjb2xvcjogdmVjM2YgKS0+dmVjM2Yge3ZhciB4OiBmMzI9bWluKGNvbG9yLnIsbWluKGNvbG9yLmcsY29sb3IuYikpO3ZhciBvZmZzZXQ6IGYzMj1zZWxlY3QoMC4wNCx4LTYuMjUqeCp4LHg8MC4wOCk7dmFyIHJlc3VsdD1jb2xvcjtyZXN1bHQtPW9mZnNldDt2YXIgcGVhazogZjMyPW1heChyZXN1bHQucixtYXgocmVzdWx0LmcscmVzdWx0LmIpKTtpZiAocGVhazxQQlJOZXV0cmFsU3RhcnRDb21wcmVzc2lvbikge3JldHVybiByZXN1bHQ7fVxudmFyIGQ6IGYzMj0xLi1QQlJOZXV0cmFsU3RhcnRDb21wcmVzc2lvbjt2YXIgbmV3UGVhazogZjMyPTEuLWQqZC8ocGVhaytkLVBCUk5ldXRyYWxTdGFydENvbXByZXNzaW9uKTtyZXN1bHQqPW5ld1BlYWsvcGVhazt2YXIgZzogZjMyPTEuLTEuLyhQQlJOZXV0cmFsRGVzYXR1cmF0aW9uKihwZWFrLW5ld1BlYWspKzEuKTtyZXR1cm4gbWl4KHJlc3VsdCxuZXdQZWFrKiB2ZWMzZigxLDEsMSksZyk7fVxuI2VuZGlmXG4jaWYgVE9ORU1BUFBJTkc9PTJcbmNvbnN0IEFDRVNJbnB1dE1hdDogbWF0M3gzZj0gbWF0M3gzZihcbnZlYzNmKDAuNTk3MTksMC4wNzYwMCwwLjAyODQwKSxcbnZlYzNmKDAuMzU0NTgsMC45MDgzNCwwLjEzMzgzKSxcbnZlYzNmKDAuMDQ4MjMsMC4wMTU2NiwwLjgzNzc3KVxuKTtjb25zdCBBQ0VTT3V0cHV0TWF0OiBtYXQzeDNmPSBtYXQzeDNmKFxudmVjM2YoIDEuNjA0NzUsLTAuMTAyMDgsLTAuMDAzMjcpLFxudmVjM2YoLTAuNTMxMDgsIDEuMTA4MTMsLTAuMDcyNzYpLFxudmVjM2YoLTAuMDczNjcsLTAuMDA2MDUsIDEuMDc2MDIpXG4pO2ZuIFJSVEFuZE9EVEZpdCh2OiB2ZWMzZiktPnZlYzNmXG57dmFyIGE6IHZlYzNmPXYqKHYrMC4wMjQ1Nzg2KS0wLjAwMDA5MDUzNzt2YXIgYjogdmVjM2Y9diooMC45ODM3MjkqdiswLjQzMjk1MTApKzAuMjM4MDgxO3JldHVybiBhL2I7fVxuZm4gQUNFU0ZpdHRlZChjb2xvcjogdmVjM2YpLT52ZWMzZlxue3ZhciBvdXRwdXQ9QUNFU0lucHV0TWF0KmNvbG9yO291dHB1dD1SUlRBbmRPRFRGaXQob3V0cHV0KTtvdXRwdXQ9QUNFU091dHB1dE1hdCpvdXRwdXQ7b3V0cHV0PXNhdHVyYXRlVmVjMyhvdXRwdXQpO3JldHVybiBvdXRwdXQ7fVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9JTUFHRVBST0NFU1NJTkdGVU5DVElPTlNfREVGSU5JVElPTlNcbmZuIGFwcGx5SW1hZ2VQcm9jZXNzaW5nKHJlc3VsdDogdmVjNGYpLT52ZWM0ZiB7XG4jZGVmaW5lIENVU1RPTV9JTUFHRVBST0NFU1NJTkdGVU5DVElPTlNfVVBEQVRFUkVTVUxUX0FUU1RBUlRcbnZhciByZ2I9cmVzdWx0LnJnYjs7XG4jaWZkZWYgRVhQT1NVUkVcbnJnYio9dW5pZm9ybXMuZXhwb3N1cmVMaW5lYXI7XG4jZW5kaWZcbiNpZmRlZiBWSUdORVRURVxudmFyIHZpZXdwb3J0WFk6IHZlYzJmPWZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KnVuaWZvcm1zLnZJbnZlcnNlU2NyZWVuU2l6ZTt2aWV3cG9ydFhZPXZpZXdwb3J0WFkqMi4wLTEuMDt2YXIgdmlnbmV0dGVYWTE6IHZlYzNmPSB2ZWMzZih2aWV3cG9ydFhZKnVuaWZvcm1zLnZpZ25ldHRlU2V0dGluZ3MxLnh5K3VuaWZvcm1zLnZpZ25ldHRlU2V0dGluZ3MxLnp3LDEuMCk7dmFyIHZpZ25ldHRlVGVybTogZjMyPWRvdCh2aWduZXR0ZVhZMSx2aWduZXR0ZVhZMSk7dmFyIHZpZ25ldHRlOiBmMzI9cG93KHZpZ25ldHRlVGVybSx1bmlmb3Jtcy52aWduZXR0ZVNldHRpbmdzMi53KTt2YXIgdmlnbmV0dGVDb2xvcjogdmVjM2Y9dW5pZm9ybXMudmlnbmV0dGVTZXR0aW5nczIucmdiO1xuI2lmZGVmIFZJR05FVFRFQkxFTkRNT0RFTVVMVElQTFlcbnZhciB2aWduZXR0ZUNvbG9yTXVsdGlwbGllcjogdmVjM2Y9bWl4KHZpZ25ldHRlQ29sb3IsIHZlYzNmKDEsMSwxKSx2aWduZXR0ZSk7cmdiKj12aWduZXR0ZUNvbG9yTXVsdGlwbGllcjtcbiNlbmRpZlxuI2lmZGVmIFZJR05FVFRFQkxFTkRNT0RFT1BBUVVFXG5yZ2I9bWl4KHZpZ25ldHRlQ29sb3IscmdiLHZpZ25ldHRlKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgVE9ORU1BUFBJTkc9PTNcbnJnYj1QQlJOZXV0cmFsVG9uZU1hcHBpbmcocmdiKTtcbiNlbGlmIFRPTkVNQVBQSU5HPT0yXG5yZ2I9QUNFU0ZpdHRlZChyZ2IpO1xuI2VsaWYgVE9ORU1BUFBJTkc9PTFcbmNvbnN0IHRvbmVtYXBwaW5nQ2FsaWJyYXRpb246IGYzMj0xLjU5MDU3OTtyZ2I9MS4wLWV4cDIoLXRvbmVtYXBwaW5nQ2FsaWJyYXRpb24qcmdiKTtcbiNlbmRpZlxucmdiPXRvR2FtbWFTcGFjZVZlYzMocmdiKTtyZ2I9c2F0dXJhdGVWZWMzKHJnYik7XG4jaWZkZWYgQ09OVFJBU1RcbnZhciByZXN1bHRIaWdoQ29udHJhc3Q6IHZlYzNmPXJnYipyZ2IqKDMuMC0yLjAqcmdiKTtpZiAodW5pZm9ybXMuY29udHJhc3Q8MS4wKSB7cmdiPW1peCggdmVjM2YoMC41LDAuNSwwLjUpLHJnYix1bmlmb3Jtcy5jb250cmFzdCk7fSBlbHNlIHtyZ2I9bWl4KHJnYixyZXN1bHRIaWdoQ29udHJhc3QsdW5pZm9ybXMuY29udHJhc3QtMS4wKTt9XG5yZ2I9bWF4KHJnYix2ZWMzZigwLikpO1xuI2VuZGlmXG4jaWZkZWYgQ09MT1JHUkFESU5HXG52YXIgY29sb3JUcmFuc2Zvcm1JbnB1dDogdmVjM2Y9cmdiKnVuaWZvcm1zLmNvbG9yVHJhbnNmb3JtU2V0dGluZ3MueHh4K3VuaWZvcm1zLmNvbG9yVHJhbnNmb3JtU2V0dGluZ3MueXl5O1xuI2lmZGVmIENPTE9SR1JBRElORzNEXG52YXIgY29sb3JUcmFuc2Zvcm1PdXRwdXQ6IHZlYzNmPXRleHR1cmVTYW1wbGUodHhDb2xvclRyYW5zZm9ybSx0eENvbG9yVHJhbnNmb3JtU2FtcGxlcixjb2xvclRyYW5zZm9ybUlucHV0KS5yZ2I7XG4jZWxzZVxudmFyIGNvbG9yVHJhbnNmb3JtT3V0cHV0OiB2ZWMzZj10ZXh0dXJlU2FtcGxlKHR4Q29sb3JUcmFuc2Zvcm0sdHhDb2xvclRyYW5zZm9ybVNhbXBsZXIsY29sb3JUcmFuc2Zvcm1JbnB1dCx1bmlmb3Jtcy5jb2xvclRyYW5zZm9ybVNldHRpbmdzLnl6KS5yZ2I7XG4jZW5kaWZcbnJnYj1taXgocmdiLGNvbG9yVHJhbnNmb3JtT3V0cHV0LHVuaWZvcm1zLmNvbG9yVHJhbnNmb3JtU2V0dGluZ3Mud3d3KTtcbiNlbmRpZlxuI2lmZGVmIENPTE9SQ1VSVkVTXG52YXIgbHVtYTogZjMyPWdldEx1bWluYW5jZShyZ2IpO3ZhciBjdXJ2ZU1peDogdmVjMmY9Y2xhbXAoIHZlYzJmKGx1bWEqMy4wLTEuNSxsdW1hKi0zLjArMS41KSwgdmVjMmYoMC4wKSwgdmVjMmYoMS4wKSk7dmFyIGNvbG9yQ3VydmU6IHZlYzRmPXVuaWZvcm1zLnZDYW1lcmFDb2xvckN1cnZlTmV1dHJhbCtjdXJ2ZU1peC54KnVuaWZvcm1zLnZDYW1lcmFDb2xvckN1cnZlUG9zaXRpdmUtY3VydmVNaXgueSp1bmlmb3Jtcy52Q2FtZXJhQ29sb3JDdXJ2ZU5lZ2F0aXZlO3JnYio9Y29sb3JDdXJ2ZS5yZ2I7cmdiPW1peCggdmVjM2YobHVtYSkscmdiLGNvbG9yQ3VydmUuYSk7XG4jZW5kaWZcbiNpZmRlZiBESVRIRVJcbnZhciByYW5kOiBmMzI9Z2V0UmFuZChmcmFnbWVudElucHV0cy5wb3NpdGlvbi54eSp1bmlmb3Jtcy52SW52ZXJzZVNjcmVlblNpemUpO3ZhciBkaXRoZXI6IGYzMj1taXgoLXVuaWZvcm1zLmRpdGhlckludGVuc2l0eSx1bmlmb3Jtcy5kaXRoZXJJbnRlbnNpdHkscmFuZCk7cmdiPXNhdHVyYXRlVmVjMyhyZ2IrIHZlYzNmKGRpdGhlcikpO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9JTUFHRVBST0NFU1NJTkdGVU5DVElPTlNfVVBEQVRFUkVTVUxUX0FURU5EXG5yZXR1cm4gdmVjNGYocmdiLHJlc3VsdC5hKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNcIjtcblxuY29uc3QgbmFtZSA9IFwiaW1hZ2VQcm9jZXNzaW5nUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXJ5aW5nIHZVVjogdmVjMmY7dmFyIHRleHR1cmVTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgdGV4dHVyZVNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbkBmcmFnbWVudFxuZm4gbWFpbihpbnB1dDogRnJhZ21lbnRJbnB1dHMpLT5GcmFnbWVudE91dHB1dHMge3ZhciByZXN1bHQ6IHZlYzRmPXRleHR1cmVTYW1wbGUodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLGlucHV0LnZVVik7cmVzdWx0PXZlYzRmKG1heChyZXN1bHQucmdiLHZlYzNmKDAuKSkscmVzdWx0LmEpO1xuI2lmZGVmIElNQUdFUFJPQ0VTU0lOR1xuI2lmbmRlZiBGUk9NTElORUFSU1BBQ0VcbnJlc3VsdD12ZWM0Zih0b0xpbmVhclNwYWNlVmVjMyhyZXN1bHQucmdiKSxyZXN1bHQuYSk7XG4jZW5kaWZcbnJlc3VsdD1hcHBseUltYWdlUHJvY2Vzc2luZyhyZXN1bHQpO1xuI2Vsc2VcbiNpZmRlZiBGUk9NTElORUFSU1BBQ0VcbnJlc3VsdD1hcHBseUltYWdlUHJvY2Vzc2luZyhyZXN1bHQpO1xuI2VuZGlmXG4jZW5kaWZcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj1yZXN1bHQ7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGltYWdlUHJvY2Vzc2luZ1BpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9