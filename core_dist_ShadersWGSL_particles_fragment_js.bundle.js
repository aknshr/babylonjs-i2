"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_particles_fragment_js"],{

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

/***/ "../core/dist/ShadersWGSL/particles.fragment.js":
/*!******************************************************!*\
  !*** ../core/dist/ShadersWGSL/particles.fragment.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesPixelShaderWGSL: () => (/* binding */ particlesPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.










const name = "particlesPixelShader";
const shader = `varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;var rampSamplerSampler: sampler;var rampSampler: texture_2d<f32>;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var textureColor: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV);var baseColor: vec4f=(textureColor*uniforms.textureMask+( vec4f(1.,1.,1.,1.)-uniforms.textureMask))*input.vColor;
#ifdef RAMPGRADIENT
var alpha: f32=baseColor.a;var remappedColorIndex: f32=clamp((alpha-input.remapRanges.x)/input.remapRanges.y,0.0,1.0);var rampColor: vec4f=textureSample(rampSampler,rampSamplerSampler,vec2f(1.0-remappedColorIndex,0.));baseColor=vec4f(baseColor.rgb*rampColor.rgb,baseColor.a);var finalAlpha: f32=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-input.remapRanges.z)/input.remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
var sourceAlpha: f32=input.vColor.a*textureColor.a;baseColor=vec4f(baseColor.rgb*sourceAlpha+ vec3f(1.0)*(1.0-sourceAlpha),baseColor.a);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);
#else
#ifdef IMAGEPROCESSING
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);baseColor=applyImageProcessing(baseColor);
#endif
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const particlesPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3BhcnRpY2xlc19mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9wYXJ0aWNsZXMuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIEVYUE9TVVJFXG51bmlmb3JtIGV4cG9zdXJlTGluZWFyOiBmMzI7XG4jZW5kaWZcbiNpZmRlZiBDT05UUkFTVFxudW5pZm9ybSBjb250cmFzdDogZjMyO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChWSUdORVRURSkgfHwgZGVmaW5lZChESVRIRVIpXG51bmlmb3JtIHZJbnZlcnNlU2NyZWVuU2l6ZTogdmVjMmY7XG4jZW5kaWZcbiNpZmRlZiBWSUdORVRURVxudW5pZm9ybSB2aWduZXR0ZVNldHRpbmdzMTogdmVjNGY7dW5pZm9ybSB2aWduZXR0ZVNldHRpbmdzMjogdmVjNGY7XG4jZW5kaWZcbiNpZmRlZiBDT0xPUkNVUlZFU1xudW5pZm9ybSB2Q2FtZXJhQ29sb3JDdXJ2ZU5lZ2F0aXZlOiB2ZWM0Zjt1bmlmb3JtIHZDYW1lcmFDb2xvckN1cnZlTmV1dHJhbDogdmVjNGY7dW5pZm9ybSB2Q2FtZXJhQ29sb3JDdXJ2ZVBvc2l0aXZlOiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIENPTE9SR1JBRElOR1xuI2lmZGVmIENPTE9SR1JBRElORzNEXG52YXIgdHhDb2xvclRyYW5zZm9ybVNhbXBsZXI6IHNhbXBsZXI7dmFyIHR4Q29sb3JUcmFuc2Zvcm06IHRleHR1cmVfM2Q8ZjMyPjtcbiNlbHNlXG52YXIgdHhDb2xvclRyYW5zZm9ybVNhbXBsZXI6IHNhbXBsZXI7dmFyIHR4Q29sb3JUcmFuc2Zvcm06IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxudW5pZm9ybSBjb2xvclRyYW5zZm9ybVNldHRpbmdzOiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIERJVEhFUlxudW5pZm9ybSBkaXRoZXJJbnRlbnNpdHk6IGYzMjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIFRPTkVNQVBQSU5HPT0zXG5jb25zdCBQQlJOZXV0cmFsU3RhcnRDb21wcmVzc2lvbjogZjMyPTAuOC0wLjA0O2NvbnN0IFBCUk5ldXRyYWxEZXNhdHVyYXRpb246IGYzMj0wLjE1O2ZuIFBCUk5ldXRyYWxUb25lTWFwcGluZyggY29sb3I6IHZlYzNmICktPnZlYzNmIHt2YXIgeDogZjMyPW1pbihjb2xvci5yLG1pbihjb2xvci5nLGNvbG9yLmIpKTt2YXIgb2Zmc2V0OiBmMzI9c2VsZWN0KDAuMDQseC02LjI1KngqeCx4PDAuMDgpO3ZhciByZXN1bHQ9Y29sb3I7cmVzdWx0LT1vZmZzZXQ7dmFyIHBlYWs6IGYzMj1tYXgocmVzdWx0LnIsbWF4KHJlc3VsdC5nLHJlc3VsdC5iKSk7aWYgKHBlYWs8UEJSTmV1dHJhbFN0YXJ0Q29tcHJlc3Npb24pIHtyZXR1cm4gcmVzdWx0O31cbnZhciBkOiBmMzI9MS4tUEJSTmV1dHJhbFN0YXJ0Q29tcHJlc3Npb247dmFyIG5ld1BlYWs6IGYzMj0xLi1kKmQvKHBlYWsrZC1QQlJOZXV0cmFsU3RhcnRDb21wcmVzc2lvbik7cmVzdWx0Kj1uZXdQZWFrL3BlYWs7dmFyIGc6IGYzMj0xLi0xLi8oUEJSTmV1dHJhbERlc2F0dXJhdGlvbioocGVhay1uZXdQZWFrKSsxLik7cmV0dXJuIG1peChyZXN1bHQsbmV3UGVhayogdmVjM2YoMSwxLDEpLGcpO31cbiNlbmRpZlxuI2lmIFRPTkVNQVBQSU5HPT0yXG5jb25zdCBBQ0VTSW5wdXRNYXQ6IG1hdDN4M2Y9IG1hdDN4M2YoXG52ZWMzZigwLjU5NzE5LDAuMDc2MDAsMC4wMjg0MCksXG52ZWMzZigwLjM1NDU4LDAuOTA4MzQsMC4xMzM4MyksXG52ZWMzZigwLjA0ODIzLDAuMDE1NjYsMC44Mzc3Nylcbik7Y29uc3QgQUNFU091dHB1dE1hdDogbWF0M3gzZj0gbWF0M3gzZihcbnZlYzNmKCAxLjYwNDc1LC0wLjEwMjA4LC0wLjAwMzI3KSxcbnZlYzNmKC0wLjUzMTA4LCAxLjEwODEzLC0wLjA3Mjc2KSxcbnZlYzNmKC0wLjA3MzY3LC0wLjAwNjA1LCAxLjA3NjAyKVxuKTtmbiBSUlRBbmRPRFRGaXQodjogdmVjM2YpLT52ZWMzZlxue3ZhciBhOiB2ZWMzZj12Kih2KzAuMDI0NTc4NiktMC4wMDAwOTA1Mzc7dmFyIGI6IHZlYzNmPXYqKDAuOTgzNzI5KnYrMC40MzI5NTEwKSswLjIzODA4MTtyZXR1cm4gYS9iO31cbmZuIEFDRVNGaXR0ZWQoY29sb3I6IHZlYzNmKS0+dmVjM2Zcbnt2YXIgb3V0cHV0PUFDRVNJbnB1dE1hdCpjb2xvcjtvdXRwdXQ9UlJUQW5kT0RURml0KG91dHB1dCk7b3V0cHV0PUFDRVNPdXRwdXRNYXQqb3V0cHV0O291dHB1dD1zYXR1cmF0ZVZlYzMob3V0cHV0KTtyZXR1cm4gb3V0cHV0O31cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fSU1BR0VQUk9DRVNTSU5HRlVOQ1RJT05TX0RFRklOSVRJT05TXG5mbiBhcHBseUltYWdlUHJvY2Vzc2luZyhyZXN1bHQ6IHZlYzRmKS0+dmVjNGYge1xuI2RlZmluZSBDVVNUT01fSU1BR0VQUk9DRVNTSU5HRlVOQ1RJT05TX1VQREFURVJFU1VMVF9BVFNUQVJUXG52YXIgcmdiPXJlc3VsdC5yZ2I7O1xuI2lmZGVmIEVYUE9TVVJFXG5yZ2IqPXVuaWZvcm1zLmV4cG9zdXJlTGluZWFyO1xuI2VuZGlmXG4jaWZkZWYgVklHTkVUVEVcbnZhciB2aWV3cG9ydFhZOiB2ZWMyZj1mcmFnbWVudElucHV0cy5wb3NpdGlvbi54eSp1bmlmb3Jtcy52SW52ZXJzZVNjcmVlblNpemU7dmlld3BvcnRYWT12aWV3cG9ydFhZKjIuMC0xLjA7dmFyIHZpZ25ldHRlWFkxOiB2ZWMzZj0gdmVjM2Yodmlld3BvcnRYWSp1bmlmb3Jtcy52aWduZXR0ZVNldHRpbmdzMS54eSt1bmlmb3Jtcy52aWduZXR0ZVNldHRpbmdzMS56dywxLjApO3ZhciB2aWduZXR0ZVRlcm06IGYzMj1kb3QodmlnbmV0dGVYWTEsdmlnbmV0dGVYWTEpO3ZhciB2aWduZXR0ZTogZjMyPXBvdyh2aWduZXR0ZVRlcm0sdW5pZm9ybXMudmlnbmV0dGVTZXR0aW5nczIudyk7dmFyIHZpZ25ldHRlQ29sb3I6IHZlYzNmPXVuaWZvcm1zLnZpZ25ldHRlU2V0dGluZ3MyLnJnYjtcbiNpZmRlZiBWSUdORVRURUJMRU5ETU9ERU1VTFRJUExZXG52YXIgdmlnbmV0dGVDb2xvck11bHRpcGxpZXI6IHZlYzNmPW1peCh2aWduZXR0ZUNvbG9yLCB2ZWMzZigxLDEsMSksdmlnbmV0dGUpO3JnYio9dmlnbmV0dGVDb2xvck11bHRpcGxpZXI7XG4jZW5kaWZcbiNpZmRlZiBWSUdORVRURUJMRU5ETU9ERU9QQVFVRVxucmdiPW1peCh2aWduZXR0ZUNvbG9yLHJnYix2aWduZXR0ZSk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIFRPTkVNQVBQSU5HPT0zXG5yZ2I9UEJSTmV1dHJhbFRvbmVNYXBwaW5nKHJnYik7XG4jZWxpZiBUT05FTUFQUElORz09MlxucmdiPUFDRVNGaXR0ZWQocmdiKTtcbiNlbGlmIFRPTkVNQVBQSU5HPT0xXG5jb25zdCB0b25lbWFwcGluZ0NhbGlicmF0aW9uOiBmMzI9MS41OTA1Nzk7cmdiPTEuMC1leHAyKC10b25lbWFwcGluZ0NhbGlicmF0aW9uKnJnYik7XG4jZW5kaWZcbnJnYj10b0dhbW1hU3BhY2VWZWMzKHJnYik7cmdiPXNhdHVyYXRlVmVjMyhyZ2IpO1xuI2lmZGVmIENPTlRSQVNUXG52YXIgcmVzdWx0SGlnaENvbnRyYXN0OiB2ZWMzZj1yZ2IqcmdiKigzLjAtMi4wKnJnYik7aWYgKHVuaWZvcm1zLmNvbnRyYXN0PDEuMCkge3JnYj1taXgoIHZlYzNmKDAuNSwwLjUsMC41KSxyZ2IsdW5pZm9ybXMuY29udHJhc3QpO30gZWxzZSB7cmdiPW1peChyZ2IscmVzdWx0SGlnaENvbnRyYXN0LHVuaWZvcm1zLmNvbnRyYXN0LTEuMCk7fVxucmdiPW1heChyZ2IsdmVjM2YoMC4pKTtcbiNlbmRpZlxuI2lmZGVmIENPTE9SR1JBRElOR1xudmFyIGNvbG9yVHJhbnNmb3JtSW5wdXQ6IHZlYzNmPXJnYip1bmlmb3Jtcy5jb2xvclRyYW5zZm9ybVNldHRpbmdzLnh4eCt1bmlmb3Jtcy5jb2xvclRyYW5zZm9ybVNldHRpbmdzLnl5eTtcbiNpZmRlZiBDT0xPUkdSQURJTkczRFxudmFyIGNvbG9yVHJhbnNmb3JtT3V0cHV0OiB2ZWMzZj10ZXh0dXJlU2FtcGxlKHR4Q29sb3JUcmFuc2Zvcm0sdHhDb2xvclRyYW5zZm9ybVNhbXBsZXIsY29sb3JUcmFuc2Zvcm1JbnB1dCkucmdiO1xuI2Vsc2VcbnZhciBjb2xvclRyYW5zZm9ybU91dHB1dDogdmVjM2Y9dGV4dHVyZVNhbXBsZSh0eENvbG9yVHJhbnNmb3JtLHR4Q29sb3JUcmFuc2Zvcm1TYW1wbGVyLGNvbG9yVHJhbnNmb3JtSW5wdXQsdW5pZm9ybXMuY29sb3JUcmFuc2Zvcm1TZXR0aW5ncy55eikucmdiO1xuI2VuZGlmXG5yZ2I9bWl4KHJnYixjb2xvclRyYW5zZm9ybU91dHB1dCx1bmlmb3Jtcy5jb2xvclRyYW5zZm9ybVNldHRpbmdzLnd3dyk7XG4jZW5kaWZcbiNpZmRlZiBDT0xPUkNVUlZFU1xudmFyIGx1bWE6IGYzMj1nZXRMdW1pbmFuY2UocmdiKTt2YXIgY3VydmVNaXg6IHZlYzJmPWNsYW1wKCB2ZWMyZihsdW1hKjMuMC0xLjUsbHVtYSotMy4wKzEuNSksIHZlYzJmKDAuMCksIHZlYzJmKDEuMCkpO3ZhciBjb2xvckN1cnZlOiB2ZWM0Zj11bmlmb3Jtcy52Q2FtZXJhQ29sb3JDdXJ2ZU5ldXRyYWwrY3VydmVNaXgueCp1bmlmb3Jtcy52Q2FtZXJhQ29sb3JDdXJ2ZVBvc2l0aXZlLWN1cnZlTWl4LnkqdW5pZm9ybXMudkNhbWVyYUNvbG9yQ3VydmVOZWdhdGl2ZTtyZ2IqPWNvbG9yQ3VydmUucmdiO3JnYj1taXgoIHZlYzNmKGx1bWEpLHJnYixjb2xvckN1cnZlLmEpO1xuI2VuZGlmXG4jaWZkZWYgRElUSEVSXG52YXIgcmFuZDogZjMyPWdldFJhbmQoZnJhZ21lbnRJbnB1dHMucG9zaXRpb24ueHkqdW5pZm9ybXMudkludmVyc2VTY3JlZW5TaXplKTt2YXIgZGl0aGVyOiBmMzI9bWl4KC11bmlmb3Jtcy5kaXRoZXJJbnRlbnNpdHksdW5pZm9ybXMuZGl0aGVySW50ZW5zaXR5LHJhbmQpO3JnYj1zYXR1cmF0ZVZlYzMocmdiKyB2ZWMzZihkaXRoZXIpKTtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fSU1BR0VQUk9DRVNTSU5HRlVOQ1RJT05TX1VQREFURVJFU1VMVF9BVEVORFxucmV0dXJuIHZlYzRmKHJnYixyZXN1bHQuYSk7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwicGFydGljbGVzUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXJ5aW5nIHZVVjogdmVjMmY7dmFyeWluZyB2Q29sb3I6IHZlYzRmO3VuaWZvcm0gdGV4dHVyZU1hc2s6IHZlYzRmO3ZhciBkaWZmdXNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGRpZmZ1c2VTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zPlxuI2lmZGVmIFJBTVBHUkFESUVOVFxudmFyeWluZyByZW1hcFJhbmdlczogdmVjNGY7dmFyIHJhbXBTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmFtcFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50PlxudmFyIHRleHR1cmVDb2xvcjogdmVjNGY9dGV4dHVyZVNhbXBsZShkaWZmdXNlU2FtcGxlcixkaWZmdXNlU2FtcGxlclNhbXBsZXIsaW5wdXQudlVWKTt2YXIgYmFzZUNvbG9yOiB2ZWM0Zj0odGV4dHVyZUNvbG9yKnVuaWZvcm1zLnRleHR1cmVNYXNrKyggdmVjNGYoMS4sMS4sMS4sMS4pLXVuaWZvcm1zLnRleHR1cmVNYXNrKSkqaW5wdXQudkNvbG9yO1xuI2lmZGVmIFJBTVBHUkFESUVOVFxudmFyIGFscGhhOiBmMzI9YmFzZUNvbG9yLmE7dmFyIHJlbWFwcGVkQ29sb3JJbmRleDogZjMyPWNsYW1wKChhbHBoYS1pbnB1dC5yZW1hcFJhbmdlcy54KS9pbnB1dC5yZW1hcFJhbmdlcy55LDAuMCwxLjApO3ZhciByYW1wQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUocmFtcFNhbXBsZXIscmFtcFNhbXBsZXJTYW1wbGVyLHZlYzJmKDEuMC1yZW1hcHBlZENvbG9ySW5kZXgsMC4pKTtiYXNlQ29sb3I9dmVjNGYoYmFzZUNvbG9yLnJnYipyYW1wQ29sb3IucmdiLGJhc2VDb2xvci5hKTt2YXIgZmluYWxBbHBoYTogZjMyPWJhc2VDb2xvci5hO2Jhc2VDb2xvci5hPWNsYW1wKChhbHBoYSpyYW1wQ29sb3IuYS1pbnB1dC5yZW1hcFJhbmdlcy56KS9pbnB1dC5yZW1hcFJhbmdlcy53LDAuMCwxLjApO1xuI2VuZGlmXG4jaWZkZWYgQkxFTkRNVUxUSVBMWU1PREVcbnZhciBzb3VyY2VBbHBoYTogZjMyPWlucHV0LnZDb2xvci5hKnRleHR1cmVDb2xvci5hO2Jhc2VDb2xvcj12ZWM0ZihiYXNlQ29sb3IucmdiKnNvdXJjZUFscGhhKyB2ZWMzZigxLjApKigxLjAtc291cmNlQWxwaGEpLGJhc2VDb2xvci5hKTtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50Pihjb2xvcixiYXNlQ29sb3IpXG4jaWZkZWYgSU1BR0VQUk9DRVNTSU5HUE9TVFBST0NFU1NcbmJhc2VDb2xvcj12ZWM0Zih0b0xpbmVhclNwYWNlVmVjMyhiYXNlQ29sb3IucmdiKSxiYXNlQ29sb3IuYSk7XG4jZWxzZVxuI2lmZGVmIElNQUdFUFJPQ0VTU0lOR1xuYmFzZUNvbG9yPXZlYzRmKHRvTGluZWFyU3BhY2VWZWMzKGJhc2VDb2xvci5yZ2IpLGJhc2VDb2xvci5hKTtiYXNlQ29sb3I9YXBwbHlJbWFnZVByb2Nlc3NpbmcoYmFzZUNvbG9yKTtcbiNlbmRpZlxuI2VuZGlmXG5mcmFnbWVudE91dHB1dHMuY29sb3I9YmFzZUNvbG9yO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYXJ0aWNsZXNQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9