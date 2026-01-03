"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_clusteredLightingFunctions_js-core_dist_ShadersWGSL_Shad-2c2261"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clusteredLightingFunctionsWGSL: () => (/* binding */ clusteredLightingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "clusteredLightingFunctions";
const shader = `struct ClusteredLight {vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
vLightDirection: vec4f,
vLightFalloff: vec4f,}
fn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(
textureLoad(lightDataTexture,vec2u(0,index),0),
textureLoad(lightDataTexture,vec2u(1,index),0),
textureLoad(lightDataTexture,vec2u(2,index),0),
textureLoad(lightDataTexture,vec2u(3,index),0),
textureLoad(lightDataTexture,vec2u(4,index),0)
);}
fn getClusteredSliceIndex(sliceData: vec2f,viewDepth: f32)->i32 {return i32(log(viewDepth)*sliceData.x+sliceData.y);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const clusteredLightingFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/lightUboDeclaration.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/lightUboDeclaration.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightUboDeclarationWGSL: () => (/* binding */ lightUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightUboDeclaration";
const shader = `#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#elif defined(CLUSTLIGHT{X})
vSliceData: vec2f,
vSliceRanges: array<vec4f,CLUSTLIGHT_SLICES>,
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vLightWidth: vec4f,
vLightHeight: vec4f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef IESLIGHTTEXTURE{X}
var iesLightTexture{X}Sampler: sampler;var iesLightTexture{X}: texture_2d<f32>;
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform textureProjectionMatrix{X}: mat4x4f;var projectionLightTexture{X}Sampler: sampler;var projectionLightTexture{X}: texture_2d<f32>;
#endif
#ifdef CLUSTLIGHT{X}
var lightDataTexture{X}: texture_2d<f32>;var<storage,read> tileMaskBuffer{X}: array<u32>;
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;uniform viewFrustumZ{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform frustumLengths{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform cascadeBlendFactor{X}: f32;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;var<private> vPositionFromLight{X}: array<vec4f,4>;var<private> vDepthMetric{X} : array<f32,4>;
#if defined(SHADOWPCSS{X})
var shadowTexture{X}Sampler: sampler_comparison; 
var shadowTexture{X}: texture_depth_2d_array;var depthTexture{X}Sampler: sampler;var depthTexture{X}: texture_2d_array<f32>;uniform lightSizeUVCorrection{X}: array<vec2f,SHADOWCSMNUM_CASCADES{X}>;uniform depthCorrection{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform penumbraDarkness{X}: f32;
#elif defined(SHADOWPCF{X})
var shadowTexture{X}Sampler: sampler_comparison;var shadowTexture{X}: texture_depth_2d_array;
#else 
var shadowTexture{X}Sampler: sampler; 
var shadowTexture{X}: texture_2d_array<f32>;
#endif
#ifdef SHADOWCSMDEBUG{X}
const vCascadeColorsMultiplier{X}: array<vec3f,8>=array<vec3f,8>
(
vec3f ( 1.5,0.0,0.0 ),
vec3f ( 0.0,1.5,0.0 ),
vec3f ( 0.0,0.0,5.5 ),
vec3f ( 1.5,0.0,5.5 ),
vec3f ( 1.5,1.5,0.0 ),
vec3f ( 1.0,1.0,1.0 ),
vec3f ( 0.0,1.0,5.5 ),
vec3f ( 0.5,3.5,0.75 )
);
#endif
#elif defined(SHADOWCUBE{X})
var shadowTexture{X}Sampler: sampler;var shadowTexture{X}: texture_cube<f32>;
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;
#if defined(SHADOWPCSS{X})
var shadowTexture{X}Sampler: sampler_comparison; 
var shadowTexture{X}: texture_depth_2d;var depthTexture{X}Sampler: sampler; 
var depthTexture{X}: texture_2d<f32>;
#elif defined(SHADOWPCF{X})
var shadowTexture{X}Sampler: sampler_comparison;var shadowTexture{X}: texture_depth_2d;
#else
var shadowTexture{X}Sampler: sampler; 
var shadowTexture{X}: texture_2d<f32>;
#endif
uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const lightUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/ltcHelperFunctions.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/ltcHelperFunctions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ltcHelperFunctionsWGSL: () => (/* binding */ ltcHelperFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "ltcHelperFunctions";
const shader = `fn LTCUv(N: vec3f,V: vec3f,roughness: f32)->vec2f {var LUTSIZE: f32=64.0;var LUTSCALE: f32=( LUTSIZE-1.0 )/LUTSIZE;var LUTBIAS:f32=0.5/LUTSIZE;var dotNV:f32=saturate( dot( N,V ) );var uv:vec2f=vec2f( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}
fn LTCClippedSphereFormFactor( f:vec3f )->f32 {var l: f32=length( f );return max( ( l*l+f.z )/( l+1.0 ),0.0 );}
fn LTCEdgeVectorFormFactor( v1:vec3f,v2:vec3f )->vec3f {var x:f32=dot( v1,v2 );var y:f32=abs( x );var a:f32=0.8543985+( 0.4965155+0.0145206*y )*y;var b:f32=3.4175940+( 4.1616724+y )*y;var v:f32=a/b;var thetaSintheta:f32=0.0;if( x>0.0 )
{thetaSintheta=v;}
else
{thetaSintheta=0.5*inverseSqrt( max( 1.0-x*x,0.00000001 ) )-v;}
return cross( v1,v2 )*thetaSintheta;}
fn LTCEvaluate( N:vec3f,V:vec3f,P:vec3f,mInv: mat3x3<f32>,rectCoords0:vec3f,rectCoords1:vec3f,rectCoords2:vec3f,rectCoords3:vec3f )->vec3f {var v1:vec3f=rectCoords1-rectCoords0;var v2:vec3f=rectCoords3-rectCoords0;var lightNormal:vec3f=cross( v1,v2 );if( dot( lightNormal,P-rectCoords0 )<0.0 ){return vec3f( 0.0 );}
var T1:vec3f=normalize( V-N*dot( V,N ) );var T2:vec3f=- cross( N,T1 ); 
var mat: mat3x3<f32>=mInv*transposeMat3( mat3x3<f32>( T1,T2,N ) );var coords0: vec3f=mat*( rectCoords0-P );var coords1: vec3f=mat*( rectCoords1-P );var coords2: vec3f=mat*( rectCoords2-P );var coords3: vec3f=mat*( rectCoords3-P );coords0=normalize( coords0 );coords1=normalize( coords1 );coords2=normalize( coords2 );coords3=normalize( coords3 );var vectorFormFactor:vec3f=vec3( 0.0 );vectorFormFactor+=LTCEdgeVectorFormFactor( coords0,coords1 );vectorFormFactor+=LTCEdgeVectorFormFactor( coords1,coords2 );vectorFormFactor+=LTCEdgeVectorFormFactor( coords2,coords3 );vectorFormFactor+=LTCEdgeVectorFormFactor( coords3,coords0 );var result:f32=LTCClippedSphereFormFactor( vectorFormFactor );return vec3f( result );}
struct areaLightData
{Diffuse: vec3f,
Specular: vec3f,
Fresnel: vec4f};fn computeAreaLightSpecularDiffuseFresnel(ltc1: texture_2d<f32>,ltc1Sampler:sampler,ltc2:texture_2d<f32>,ltc2Sampler:sampler,viewDir: vec3f,normal:vec3f,position:vec3f,lightPos:vec3f,halfWidth:vec3f, halfHeight:vec3f,roughness:f32)->areaLightData {var result: areaLightData;var rectCoords0:vec3f=lightPos+halfWidth-halfHeight; 
var rectCoords1:vec3f=lightPos-halfWidth-halfHeight;var rectCoords2:vec3f=lightPos-halfWidth+halfHeight;var rectCoords3:vec3f=lightPos+halfWidth+halfHeight;
#ifdef SPECULARTERM
var uv:vec2f=LTCUv( normal,viewDir,roughness );var t1:vec4f=textureSample( ltc1,ltc1Sampler,uv );var t2:vec4f=textureSample( ltc2,ltc2Sampler,uv );var mInv:mat3x3<f32>=mat3x3<f32>(
vec3f( t1.x,0,t1.y ),
vec3f( 0,1, 0 ),
vec3f( t1.z,0,t1.w )
);result.Fresnel=t2;result.Specular=LTCEvaluate( normal,viewDir,position,mInv,rectCoords0,rectCoords1,rectCoords2,rectCoords3 );
#endif
var mInvEmpty:mat3x3<f32>=mat3x3<f32>(
vec3f( 1,0,0 ),
vec3f( 0,1,0 ),
vec3f( 0,0,1 )
);result.Diffuse+=LTCEvaluate( normal,viewDir,position,mInvEmpty,rectCoords0,rectCoords1,rectCoords2,rectCoords3 );return result;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const ltcHelperFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/reflectionFunction.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/reflectionFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reflectionFunctionWGSL: () => (/* binding */ reflectionFunctionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "reflectionFunction";
const shader = `fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f
{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(s,t,0); }
fn computeMirroredFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f
{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(1.0-s,t,0); }
fn computeEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var cameraToVertex: vec3f=normalize(worldPos.xyz-eyePosition);var r: vec3f=normalize(reflect(cameraToVertex,worldNormal));r= (reflectionMatrix* vec4f(r,0)).xyz;var lon: f32=atan2(r.z,r.x);var lat: f32=acos(r.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(s,t,0);}
fn computeSphericalCoords(worldPos: vec4f,worldNormal: vec3f,view: mat4x4f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=normalize((view*worldPos).xyz);var viewNormal: vec3f=normalize((view* vec4f(worldNormal,0.0)).xyz);var r: vec3f=reflect(viewDir,viewNormal);r= (reflectionMatrix* vec4f(r,0)).xyz;r.z=r.z-1.0;var m: f32=2.0*length(r);return vec3f(r.x/m+0.5,1.0-r.y/m-0.5,0);}
fn computePlanarCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=worldPos.xyz-eyePosition;var coords: vec3f=normalize(reflect(viewDir,worldNormal));return (reflectionMatrix* vec4f(coords,1)).xyz;}
fn computeCubicCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=normalize(worldPos.xyz-eyePosition);var coords: vec3f=reflect(viewDir,worldNormal);coords= (reflectionMatrix* vec4f(coords,0)).xyz;
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
fn computeCubicLocalCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f,reflectionSize: vec3f,reflectionPosition: vec3f)->vec3f
{var viewDir: vec3f=normalize(worldPos.xyz-eyePosition);var coords: vec3f=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=(reflectionMatrix* vec4f(coords,0)).xyz;
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
fn computeProjectionCoords(worldPos: vec4f,view: mat4x4f,reflectionMatrix: mat4x4f)->vec3f
{return (reflectionMatrix*(view*worldPos)).xyz;}
fn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f
{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}
#ifdef REFLECTION
fn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
var direction: vec3f=normalize(fragmentInputs.vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
var direction: vec3f=normalize(fragmentInputs.vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,scene.view,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix,uniforms.vReflectionSize,uniforms.vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,scene.view,uniforms.reflectionMatrix);
#endif
#ifndef REFLECTIONMAP_CUBIC
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3f(0,0,0);
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const reflectionFunctionWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsFragmentFunctionsWGSL: () => (/* binding */ shadowsFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowsFragmentFunctions";
const shader = `#ifdef SHADOWS
#ifndef SHADOWFLOAT
fn unpack(color: vec4f)->f32
{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}
#endif
fn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f32
{var mask: f32=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));return mix(value,1.0,mask);}
fn computeShadowCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadow: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
return select(1.0,darkness,depth>shadow);}
fn computeShadowWithPoissonSamplingCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,mapSize: f32,darkness: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;var visibility: f32=1.;var poissonDisk: array<vec3f,4>;poissonDisk[0]= vec3f(-1.0,1.0,-1.0);poissonDisk[1]= vec3f(1.0,-1.0,-1.0);poissonDisk[2]= vec3f(-1.0,-1.0,-1.0);poissonDisk[3]= vec3f(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) {visibility-=0.25;};
#else
if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) {visibility-=0.25;};
#endif
return min(1.0,visibility+darkness);}
fn computeShadowWithESMCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);var shadowPixelDepth: f32=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadowMapSample: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
var esm: f32=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return esm;}
fn computeShadowWithCloseESMCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);var shadowPixelDepth: f32=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadowMapSample: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
var esm: f32=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return esm;}
fn computeShadowCSM(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d_array<f32>,shadowSampler: sampler,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSample(shadowTexture,shadowSampler,uv,layer));
#else
var shadow: f32=textureSample(shadowTexture,shadowSampler,uv,layer).x;
#endif
return select(1.,computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff),shadowPixelDepth>shadow );}
fn computeShadow(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadow: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
return select(1.,computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff),shadowPixelDepth>shadow );}}
fn computeShadowWithPoissonSampling(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,mapSize: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);var visibility: f32=1.;var poissonDisk: array<vec2f,4>;poissonDisk[0]= vec2f(-0.94201624,-0.39906216);poissonDisk[1]= vec2f(0.94558609,-0.76890725);poissonDisk[2]= vec2f(-0.094184101,-0.92938870);poissonDisk[3]= vec2f(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
#else
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithESM(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadowMapSample: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
var esm: f32=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithCloseESM(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadowMapSample: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
var esm: f32=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
fn getZInClip(clipSpace: vec3f,uvDepth: vec3f)->f32
{
#ifdef IS_NDC_HALF_ZRANGE
return clipSpace.z;
#else
return uvDepth.z;
#endif
}
const GREATEST_LESS_THAN_ONE: f32=0.99999994;
#define DISABLE_UNIFORMITY_ANALYSIS
fn computeShadowWithCSMPCF1(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var shadow: f32=textureSampleCompare(shadowTexture,shadowSampler,uvDepth.xy,layer,uvDepth.z);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithCSMPCF3(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=3.-2.*st;var uvw1: vec2f=1.+2.*st;var u: vec2f= vec2f((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;var v: vec2f= vec2f((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),layer,uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),layer,uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),layer,uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),layer,uvDepth.z);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithCSMPCF5(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=4.-3.*st;var uvw1: vec2f= vec2f(7.);var uvw2: vec2f=1.+3.*st;var u: vec3f= vec3f((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;var v: vec3f= vec3f((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),layer,uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),layer,uvDepth.z);shadow+=uvw2.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[0]),layer,uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),layer,uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),layer,uvDepth.z);shadow+=uvw2.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[1]),layer,uvDepth.z);shadow+=uvw0.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[2]),layer,uvDepth.z);shadow+=uvw1.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[2]),layer,uvDepth.z);shadow+=uvw2.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[2]),layer,uvDepth.z);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithPCF1(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {var shadow: f32=textureSampleCompareLevel(shadowTexture,shadowSampler,uvDepth.xy,uvDepth.z);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithPCF3(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=3.-2.*st;var uvw1: vec2f=1.+2.*st;var u: vec2f= vec2f((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;var v: vec2f= vec2f((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),uvDepth.z);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithPCF5(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;} else {var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=4.-3.*st;var uvw1: vec2f= vec2f(7.);var uvw2: vec2f=1.+3.*st;var u: vec3f= vec3f((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;var v: vec3f= vec3f((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),uvDepth.z);shadow+=uvw2.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[0]),uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),uvDepth.z);shadow+=uvw2.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[1]),uvDepth.z);shadow+=uvw0.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[2]),uvDepth.z);shadow+=uvw1.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[2]),uvDepth.z);shadow+=uvw2.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[2]),uvDepth.z);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
const PoissonSamplers32: array<vec3f,64>=array<vec3f,64> (
vec3f(0.06407013,0.05409927,0.),
vec3f(0.7366577,0.5789394,0.),
vec3f(-0.6270542,-0.5320278,0.),
vec3f(-0.4096107,0.8411095,0.),
vec3f(0.6849564,-0.4990818,0.),
vec3f(-0.874181,-0.04579735,0.),
vec3f(0.9989998,0.0009880066,0.),
vec3f(-0.004920578,-0.9151649,0.),
vec3f(0.1805763,0.9747483,0.),
vec3f(-0.2138451,0.2635818,0.),
vec3f(0.109845,0.3884785,0.),
vec3f(0.06876755,-0.3581074,0.),
vec3f(0.374073,-0.7661266,0.),
vec3f(0.3079132,-0.1216763,0.),
vec3f(-0.3794335,-0.8271583,0.),
vec3f(-0.203878,-0.07715034,0.),
vec3f(0.5912697,0.1469799,0.),
vec3f(-0.88069,0.3031784,0.),
vec3f(0.5040108,0.8283722,0.),
vec3f(-0.5844124,0.5494877,0.),
vec3f(0.6017799,-0.1726654,0.),
vec3f(-0.5554981,0.1559997,0.),
vec3f(-0.3016369,-0.3900928,0.),
vec3f(-0.5550632,-0.1723762,0.),
vec3f(0.925029,0.2995041,0.),
vec3f(-0.2473137,0.5538505,0.),
vec3f(0.9183037,-0.2862392,0.),
vec3f(0.2469421,0.6718712,0.),
vec3f(0.3916397,-0.4328209,0.),
vec3f(-0.03576927,-0.6220032,0.),
vec3f(-0.04661255,0.7995201,0.),
vec3f(0.4402924,0.3640312,0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.)
);const PoissonSamplers64: array<vec3f,64>=array<vec3f,64> (
vec3f(-0.613392,0.617481,0.),
vec3f(0.170019,-0.040254,0.),
vec3f(-0.299417,0.791925,0.),
vec3f(0.645680,0.493210,0.),
vec3f(-0.651784,0.717887,0.),
vec3f(0.421003,0.027070,0.),
vec3f(-0.817194,-0.271096,0.),
vec3f(-0.705374,-0.668203,0.),
vec3f(0.977050,-0.108615,0.),
vec3f(0.063326,0.142369,0.),
vec3f(0.203528,0.214331,0.),
vec3f(-0.667531,0.326090,0.),
vec3f(-0.098422,-0.295755,0.),
vec3f(-0.885922,0.215369,0.),
vec3f(0.566637,0.605213,0.),
vec3f(0.039766,-0.396100,0.),
vec3f(0.751946,0.453352,0.),
vec3f(0.078707,-0.715323,0.),
vec3f(-0.075838,-0.529344,0.),
vec3f(0.724479,-0.580798,0.),
vec3f(0.222999,-0.215125,0.),
vec3f(-0.467574,-0.405438,0.),
vec3f(-0.248268,-0.814753,0.),
vec3f(0.354411,-0.887570,0.),
vec3f(0.175817,0.382366,0.),
vec3f(0.487472,-0.063082,0.),
vec3f(-0.084078,0.898312,0.),
vec3f(0.488876,-0.783441,0.),
vec3f(0.470016,0.217933,0.),
vec3f(-0.696890,-0.549791,0.),
vec3f(-0.149693,0.605762,0.),
vec3f(0.034211,0.979980,0.),
vec3f(0.503098,-0.308878,0.),
vec3f(-0.016205,-0.872921,0.),
vec3f(0.385784,-0.393902,0.),
vec3f(-0.146886,-0.859249,0.),
vec3f(0.643361,0.164098,0.),
vec3f(0.634388,-0.049471,0.),
vec3f(-0.688894,0.007843,0.),
vec3f(0.464034,-0.188818,0.),
vec3f(-0.440840,0.137486,0.),
vec3f(0.364483,0.511704,0.),
vec3f(0.034028,0.325968,0.),
vec3f(0.099094,-0.308023,0.),
vec3f(0.693960,-0.366253,0.),
vec3f(0.678884,-0.204688,0.),
vec3f(0.001801,0.780328,0.),
vec3f(0.145177,-0.898984,0.),
vec3f(0.062655,-0.611866,0.),
vec3f(0.315226,-0.604297,0.),
vec3f(-0.780145,0.486251,0.),
vec3f(-0.371868,0.882138,0.),
vec3f(0.200476,0.494430,0.),
vec3f(-0.494552,-0.711051,0.),
vec3f(0.612476,0.705252,0.),
vec3f(-0.578845,-0.768792,0.),
vec3f(-0.772454,-0.090976,0.),
vec3f(0.504440,0.372295,0.),
vec3f(0.155736,0.065157,0.),
vec3f(0.391522,0.849605,0.),
vec3f(-0.620106,-0.328104,0.),
vec3f(0.789239,-0.419965,0.),
vec3f(-0.545396,0.538133,0.),
vec3f(-0.178564,-0.596057,0.)
);fn computeShadowWithCSMPCSS(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,searchTapCount: i32,pcfTapCount: i32,poissonSamplers: array<vec3f,64>,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uvDepthLayer: vec4f= vec4f(uvDepth.x,uvDepth.y,f32(layer),uvDepth.z);var blockerDepth: f32=0.0;var sumBlockerDepth: f32=0.0;var numBlocker: f32=0.0;for (var i: i32=0; i<searchTapCount; i ++) {blockerDepth=textureSample(depthTexture,depthSampler, uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer).r;numBlocker+=select(0.,1.,blockerDepth<depthMetric);sumBlockerDepth+=select(0.,blockerDepth,blockerDepth<depthMetric);}
var avgBlockerDepth: f32=sumBlockerDepth/numBlocker;var AAOffset: f32=shadowMapSizeInverse*10.;var penumbraRatio: f32=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);var filterRadius: vec4f= vec4f(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);var random: f32=getRand(vPositionFromLight.xy);var rotationAngle: f32=random*3.1415926;var rotationVector: vec2f= vec2f(cos(rotationAngle),sin(rotationAngle));var shadow: f32=0.;for (var i: i32=0; i<pcfTapCount; i++) {var offset: vec4f= vec4f(poissonSamplers[i],0.);offset= vec4f(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);let coords=uvDepthLayer+offset*filterRadius;shadow+=textureSampleCompare(shadowTexture,shadowSampler,coords.xy,i32(coords.z),coords.w);}
shadow/= f32(pcfTapCount);shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));shadow=mix(darkness,1.,shadow);return select(computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff),1.0,numBlocker<1.0);}
fn computeShadowWithPCSS(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,searchTapCount: i32,pcfTapCount: i32,poissonSamplers: array<vec3f,64>)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);if (depthMetric<0.0 || depthMetric>1.0 || uvDepth.x<0. || uvDepth.x>1.0 || uvDepth.y<0. || uvDepth.y>1.0) {return 1.0;}
var blockerDepth: f32=0.0;var sumBlockerDepth: f32=0.0;var numBlocker: f32=0.0;for (var i: i32=0; i<searchTapCount; i ++) {blockerDepth=textureSampleLevel(depthTexture,depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0).r;numBlocker+=select(0.,1.,blockerDepth<depthMetric);sumBlockerDepth+=select(0.,blockerDepth,blockerDepth<depthMetric);}
if (numBlocker<1.0) {return 1.0;}
var avgBlockerDepth: f32=sumBlockerDepth/numBlocker;var AAOffset: f32=shadowMapSizeInverse*10.;var penumbraRatio: f32=((depthMetric-avgBlockerDepth)+AAOffset);var filterRadius: f32=penumbraRatio*lightSizeUV*shadowMapSizeInverse;var random: f32=getRand(vPositionFromLight.xy);var rotationAngle: f32=random*3.1415926;var rotationVector: vec2f= vec2f(cos(rotationAngle),sin(rotationAngle));var shadow: f32=0.;for (var i: i32=0; i<pcfTapCount; i++) {var offset: vec3f=poissonSamplers[i];offset= vec3f(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);let coords=uvDepth+offset*filterRadius;shadow+=textureSampleCompareLevel(shadowTexture,shadowSampler,coords.xy,coords.z);}
shadow/= f32(pcfTapCount);shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithPCSS16(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);}
fn computeShadowWithPCSS32(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);}
fn computeShadowWithPCSS64(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);}
fn computeShadowWithCSMPCSS16(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
fn computeShadowWithCSMPCSS32(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
fn computeShadowWithCSMPCSS64(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowsFragmentFunctionsWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zX2pzLWNvcmVfZGlzdF9TaGFkZXJzV0dTTF9TaGFkLTJjMjI2MS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2xpZ2h0VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9sdGNIZWxwZXJGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9yZWZsZWN0aW9uRnVuY3Rpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IENsdXN0ZXJlZExpZ2h0IHt2TGlnaHREYXRhOiB2ZWM0ZixcbnZMaWdodERpZmZ1c2U6IHZlYzRmLFxudkxpZ2h0U3BlY3VsYXI6IHZlYzRmLFxudkxpZ2h0RGlyZWN0aW9uOiB2ZWM0ZixcbnZMaWdodEZhbGxvZmY6IHZlYzRmLH1cbmZuIGdldENsdXN0ZXJlZExpZ2h0KGxpZ2h0RGF0YVRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixpbmRleDogdTMyKS0+Q2x1c3RlcmVkTGlnaHQge3JldHVybiBDbHVzdGVyZWRMaWdodChcbnRleHR1cmVMb2FkKGxpZ2h0RGF0YVRleHR1cmUsdmVjMnUoMCxpbmRleCksMCksXG50ZXh0dXJlTG9hZChsaWdodERhdGFUZXh0dXJlLHZlYzJ1KDEsaW5kZXgpLDApLFxudGV4dHVyZUxvYWQobGlnaHREYXRhVGV4dHVyZSx2ZWMydSgyLGluZGV4KSwwKSxcbnRleHR1cmVMb2FkKGxpZ2h0RGF0YVRleHR1cmUsdmVjMnUoMyxpbmRleCksMCksXG50ZXh0dXJlTG9hZChsaWdodERhdGFUZXh0dXJlLHZlYzJ1KDQsaW5kZXgpLDApXG4pO31cbmZuIGdldENsdXN0ZXJlZFNsaWNlSW5kZXgoc2xpY2VEYXRhOiB2ZWMyZix2aWV3RGVwdGg6IGYzMiktPmkzMiB7cmV0dXJuIGkzMihsb2codmlld0RlcHRoKSpzbGljZURhdGEueCtzbGljZURhdGEueSk7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgRVhQT1NVUkVcbnVuaWZvcm0gZXhwb3N1cmVMaW5lYXI6IGYzMjtcbiNlbmRpZlxuI2lmZGVmIENPTlRSQVNUXG51bmlmb3JtIGNvbnRyYXN0OiBmMzI7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZJR05FVFRFKSB8fCBkZWZpbmVkKERJVEhFUilcbnVuaWZvcm0gdkludmVyc2VTY3JlZW5TaXplOiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIFZJR05FVFRFXG51bmlmb3JtIHZpZ25ldHRlU2V0dGluZ3MxOiB2ZWM0Zjt1bmlmb3JtIHZpZ25ldHRlU2V0dGluZ3MyOiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIENPTE9SQ1VSVkVTXG51bmlmb3JtIHZDYW1lcmFDb2xvckN1cnZlTmVnYXRpdmU6IHZlYzRmO3VuaWZvcm0gdkNhbWVyYUNvbG9yQ3VydmVOZXV0cmFsOiB2ZWM0Zjt1bmlmb3JtIHZDYW1lcmFDb2xvckN1cnZlUG9zaXRpdmU6IHZlYzRmO1xuI2VuZGlmXG4jaWZkZWYgQ09MT1JHUkFESU5HXG4jaWZkZWYgQ09MT1JHUkFESU5HM0RcbnZhciB0eENvbG9yVHJhbnNmb3JtU2FtcGxlcjogc2FtcGxlcjt2YXIgdHhDb2xvclRyYW5zZm9ybTogdGV4dHVyZV8zZDxmMzI+O1xuI2Vsc2VcbnZhciB0eENvbG9yVHJhbnNmb3JtU2FtcGxlcjogc2FtcGxlcjt2YXIgdHhDb2xvclRyYW5zZm9ybTogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG51bmlmb3JtIGNvbG9yVHJhbnNmb3JtU2V0dGluZ3M6IHZlYzRmO1xuI2VuZGlmXG4jaWZkZWYgRElUSEVSXG51bmlmb3JtIGRpdGhlckludGVuc2l0eTogZjMyO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJpbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgVE9ORU1BUFBJTkc9PTNcbmNvbnN0IFBCUk5ldXRyYWxTdGFydENvbXByZXNzaW9uOiBmMzI9MC44LTAuMDQ7Y29uc3QgUEJSTmV1dHJhbERlc2F0dXJhdGlvbjogZjMyPTAuMTU7Zm4gUEJSTmV1dHJhbFRvbmVNYXBwaW5nKCBjb2xvcjogdmVjM2YgKS0+dmVjM2Yge3ZhciB4OiBmMzI9bWluKGNvbG9yLnIsbWluKGNvbG9yLmcsY29sb3IuYikpO3ZhciBvZmZzZXQ6IGYzMj1zZWxlY3QoMC4wNCx4LTYuMjUqeCp4LHg8MC4wOCk7dmFyIHJlc3VsdD1jb2xvcjtyZXN1bHQtPW9mZnNldDt2YXIgcGVhazogZjMyPW1heChyZXN1bHQucixtYXgocmVzdWx0LmcscmVzdWx0LmIpKTtpZiAocGVhazxQQlJOZXV0cmFsU3RhcnRDb21wcmVzc2lvbikge3JldHVybiByZXN1bHQ7fVxudmFyIGQ6IGYzMj0xLi1QQlJOZXV0cmFsU3RhcnRDb21wcmVzc2lvbjt2YXIgbmV3UGVhazogZjMyPTEuLWQqZC8ocGVhaytkLVBCUk5ldXRyYWxTdGFydENvbXByZXNzaW9uKTtyZXN1bHQqPW5ld1BlYWsvcGVhazt2YXIgZzogZjMyPTEuLTEuLyhQQlJOZXV0cmFsRGVzYXR1cmF0aW9uKihwZWFrLW5ld1BlYWspKzEuKTtyZXR1cm4gbWl4KHJlc3VsdCxuZXdQZWFrKiB2ZWMzZigxLDEsMSksZyk7fVxuI2VuZGlmXG4jaWYgVE9ORU1BUFBJTkc9PTJcbmNvbnN0IEFDRVNJbnB1dE1hdDogbWF0M3gzZj0gbWF0M3gzZihcbnZlYzNmKDAuNTk3MTksMC4wNzYwMCwwLjAyODQwKSxcbnZlYzNmKDAuMzU0NTgsMC45MDgzNCwwLjEzMzgzKSxcbnZlYzNmKDAuMDQ4MjMsMC4wMTU2NiwwLjgzNzc3KVxuKTtjb25zdCBBQ0VTT3V0cHV0TWF0OiBtYXQzeDNmPSBtYXQzeDNmKFxudmVjM2YoIDEuNjA0NzUsLTAuMTAyMDgsLTAuMDAzMjcpLFxudmVjM2YoLTAuNTMxMDgsIDEuMTA4MTMsLTAuMDcyNzYpLFxudmVjM2YoLTAuMDczNjcsLTAuMDA2MDUsIDEuMDc2MDIpXG4pO2ZuIFJSVEFuZE9EVEZpdCh2OiB2ZWMzZiktPnZlYzNmXG57dmFyIGE6IHZlYzNmPXYqKHYrMC4wMjQ1Nzg2KS0wLjAwMDA5MDUzNzt2YXIgYjogdmVjM2Y9diooMC45ODM3MjkqdiswLjQzMjk1MTApKzAuMjM4MDgxO3JldHVybiBhL2I7fVxuZm4gQUNFU0ZpdHRlZChjb2xvcjogdmVjM2YpLT52ZWMzZlxue3ZhciBvdXRwdXQ9QUNFU0lucHV0TWF0KmNvbG9yO291dHB1dD1SUlRBbmRPRFRGaXQob3V0cHV0KTtvdXRwdXQ9QUNFU091dHB1dE1hdCpvdXRwdXQ7b3V0cHV0PXNhdHVyYXRlVmVjMyhvdXRwdXQpO3JldHVybiBvdXRwdXQ7fVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9JTUFHRVBST0NFU1NJTkdGVU5DVElPTlNfREVGSU5JVElPTlNcbmZuIGFwcGx5SW1hZ2VQcm9jZXNzaW5nKHJlc3VsdDogdmVjNGYpLT52ZWM0ZiB7XG4jZGVmaW5lIENVU1RPTV9JTUFHRVBST0NFU1NJTkdGVU5DVElPTlNfVVBEQVRFUkVTVUxUX0FUU1RBUlRcbnZhciByZ2I9cmVzdWx0LnJnYjs7XG4jaWZkZWYgRVhQT1NVUkVcbnJnYio9dW5pZm9ybXMuZXhwb3N1cmVMaW5lYXI7XG4jZW5kaWZcbiNpZmRlZiBWSUdORVRURVxudmFyIHZpZXdwb3J0WFk6IHZlYzJmPWZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KnVuaWZvcm1zLnZJbnZlcnNlU2NyZWVuU2l6ZTt2aWV3cG9ydFhZPXZpZXdwb3J0WFkqMi4wLTEuMDt2YXIgdmlnbmV0dGVYWTE6IHZlYzNmPSB2ZWMzZih2aWV3cG9ydFhZKnVuaWZvcm1zLnZpZ25ldHRlU2V0dGluZ3MxLnh5K3VuaWZvcm1zLnZpZ25ldHRlU2V0dGluZ3MxLnp3LDEuMCk7dmFyIHZpZ25ldHRlVGVybTogZjMyPWRvdCh2aWduZXR0ZVhZMSx2aWduZXR0ZVhZMSk7dmFyIHZpZ25ldHRlOiBmMzI9cG93KHZpZ25ldHRlVGVybSx1bmlmb3Jtcy52aWduZXR0ZVNldHRpbmdzMi53KTt2YXIgdmlnbmV0dGVDb2xvcjogdmVjM2Y9dW5pZm9ybXMudmlnbmV0dGVTZXR0aW5nczIucmdiO1xuI2lmZGVmIFZJR05FVFRFQkxFTkRNT0RFTVVMVElQTFlcbnZhciB2aWduZXR0ZUNvbG9yTXVsdGlwbGllcjogdmVjM2Y9bWl4KHZpZ25ldHRlQ29sb3IsIHZlYzNmKDEsMSwxKSx2aWduZXR0ZSk7cmdiKj12aWduZXR0ZUNvbG9yTXVsdGlwbGllcjtcbiNlbmRpZlxuI2lmZGVmIFZJR05FVFRFQkxFTkRNT0RFT1BBUVVFXG5yZ2I9bWl4KHZpZ25ldHRlQ29sb3IscmdiLHZpZ25ldHRlKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgVE9ORU1BUFBJTkc9PTNcbnJnYj1QQlJOZXV0cmFsVG9uZU1hcHBpbmcocmdiKTtcbiNlbGlmIFRPTkVNQVBQSU5HPT0yXG5yZ2I9QUNFU0ZpdHRlZChyZ2IpO1xuI2VsaWYgVE9ORU1BUFBJTkc9PTFcbmNvbnN0IHRvbmVtYXBwaW5nQ2FsaWJyYXRpb246IGYzMj0xLjU5MDU3OTtyZ2I9MS4wLWV4cDIoLXRvbmVtYXBwaW5nQ2FsaWJyYXRpb24qcmdiKTtcbiNlbmRpZlxucmdiPXRvR2FtbWFTcGFjZVZlYzMocmdiKTtyZ2I9c2F0dXJhdGVWZWMzKHJnYik7XG4jaWZkZWYgQ09OVFJBU1RcbnZhciByZXN1bHRIaWdoQ29udHJhc3Q6IHZlYzNmPXJnYipyZ2IqKDMuMC0yLjAqcmdiKTtpZiAodW5pZm9ybXMuY29udHJhc3Q8MS4wKSB7cmdiPW1peCggdmVjM2YoMC41LDAuNSwwLjUpLHJnYix1bmlmb3Jtcy5jb250cmFzdCk7fSBlbHNlIHtyZ2I9bWl4KHJnYixyZXN1bHRIaWdoQ29udHJhc3QsdW5pZm9ybXMuY29udHJhc3QtMS4wKTt9XG5yZ2I9bWF4KHJnYix2ZWMzZigwLikpO1xuI2VuZGlmXG4jaWZkZWYgQ09MT1JHUkFESU5HXG52YXIgY29sb3JUcmFuc2Zvcm1JbnB1dDogdmVjM2Y9cmdiKnVuaWZvcm1zLmNvbG9yVHJhbnNmb3JtU2V0dGluZ3MueHh4K3VuaWZvcm1zLmNvbG9yVHJhbnNmb3JtU2V0dGluZ3MueXl5O1xuI2lmZGVmIENPTE9SR1JBRElORzNEXG52YXIgY29sb3JUcmFuc2Zvcm1PdXRwdXQ6IHZlYzNmPXRleHR1cmVTYW1wbGUodHhDb2xvclRyYW5zZm9ybSx0eENvbG9yVHJhbnNmb3JtU2FtcGxlcixjb2xvclRyYW5zZm9ybUlucHV0KS5yZ2I7XG4jZWxzZVxudmFyIGNvbG9yVHJhbnNmb3JtT3V0cHV0OiB2ZWMzZj10ZXh0dXJlU2FtcGxlKHR4Q29sb3JUcmFuc2Zvcm0sdHhDb2xvclRyYW5zZm9ybVNhbXBsZXIsY29sb3JUcmFuc2Zvcm1JbnB1dCx1bmlmb3Jtcy5jb2xvclRyYW5zZm9ybVNldHRpbmdzLnl6KS5yZ2I7XG4jZW5kaWZcbnJnYj1taXgocmdiLGNvbG9yVHJhbnNmb3JtT3V0cHV0LHVuaWZvcm1zLmNvbG9yVHJhbnNmb3JtU2V0dGluZ3Mud3d3KTtcbiNlbmRpZlxuI2lmZGVmIENPTE9SQ1VSVkVTXG52YXIgbHVtYTogZjMyPWdldEx1bWluYW5jZShyZ2IpO3ZhciBjdXJ2ZU1peDogdmVjMmY9Y2xhbXAoIHZlYzJmKGx1bWEqMy4wLTEuNSxsdW1hKi0zLjArMS41KSwgdmVjMmYoMC4wKSwgdmVjMmYoMS4wKSk7dmFyIGNvbG9yQ3VydmU6IHZlYzRmPXVuaWZvcm1zLnZDYW1lcmFDb2xvckN1cnZlTmV1dHJhbCtjdXJ2ZU1peC54KnVuaWZvcm1zLnZDYW1lcmFDb2xvckN1cnZlUG9zaXRpdmUtY3VydmVNaXgueSp1bmlmb3Jtcy52Q2FtZXJhQ29sb3JDdXJ2ZU5lZ2F0aXZlO3JnYio9Y29sb3JDdXJ2ZS5yZ2I7cmdiPW1peCggdmVjM2YobHVtYSkscmdiLGNvbG9yQ3VydmUuYSk7XG4jZW5kaWZcbiNpZmRlZiBESVRIRVJcbnZhciByYW5kOiBmMzI9Z2V0UmFuZChmcmFnbWVudElucHV0cy5wb3NpdGlvbi54eSp1bmlmb3Jtcy52SW52ZXJzZVNjcmVlblNpemUpO3ZhciBkaXRoZXI6IGYzMj1taXgoLXVuaWZvcm1zLmRpdGhlckludGVuc2l0eSx1bmlmb3Jtcy5kaXRoZXJJbnRlbnNpdHkscmFuZCk7cmdiPXNhdHVyYXRlVmVjMyhyZ2IrIHZlYzNmKGRpdGhlcikpO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9JTUFHRVBST0NFU1NJTkdGVU5DVElPTlNfVVBEQVRFUkVTVUxUX0FURU5EXG5yZXR1cm4gdmVjNGYocmdiLHJlc3VsdC5hKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0VWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbnN0cnVjdCBMaWdodHtYfVxue3ZMaWdodERhdGE6IHZlYzRmLFxudkxpZ2h0RGlmZnVzZTogdmVjNGYsXG52TGlnaHRTcGVjdWxhcjogdmVjNGYsXG4jaWZkZWYgU1BPVExJR0hUe1h9XG52TGlnaHREaXJlY3Rpb246IHZlYzRmLFxudkxpZ2h0RmFsbG9mZjogdmVjNGYsXG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG52TGlnaHRGYWxsb2ZmOiB2ZWM0ZixcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxudkxpZ2h0R3JvdW5kOiB2ZWMzZixcbiNlbGlmIGRlZmluZWQoQ0xVU1RMSUdIVHtYfSlcbnZTbGljZURhdGE6IHZlYzJmLFxudlNsaWNlUmFuZ2VzOiBhcnJheTx2ZWM0ZixDTFVTVExJR0hUX1NMSUNFUz4sXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbnZMaWdodFdpZHRoOiB2ZWM0ZixcbnZMaWdodEhlaWdodDogdmVjNGYsXG4jZW5kaWZcbnNoYWRvd3NJbmZvOiB2ZWM0ZixcbmRlcHRoVmFsdWVzOiB2ZWMyZn0gO3Zhcjx1bmlmb3JtPiBsaWdodHtYfSA6IExpZ2h0e1h9O1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxudmFyIGllc0xpZ2h0VGV4dHVyZXtYfVNhbXBsZXI6IHNhbXBsZXI7dmFyIGllc0xpZ2h0VGV4dHVyZXtYfTogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgUFJPSkVDVEVETElHSFRURVhUVVJFe1h9XG51bmlmb3JtIHRleHR1cmVQcm9qZWN0aW9uTWF0cml4e1h9OiBtYXQ0eDRmO3ZhciBwcm9qZWN0aW9uTGlnaHRUZXh0dXJle1h9U2FtcGxlcjogc2FtcGxlcjt2YXIgcHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfTogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgQ0xVU1RMSUdIVHtYfVxudmFyIGxpZ2h0RGF0YVRleHR1cmV7WH06IHRleHR1cmVfMmQ8ZjMyPjt2YXI8c3RvcmFnZSxyZWFkPiB0aWxlTWFza0J1ZmZlcntYfTogYXJyYXk8dTMyPjtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTXtYfVxudW5pZm9ybSBsaWdodE1hdHJpeHtYfTogYXJyYXk8bWF0NHg0ZixTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+O3VuaWZvcm0gdmlld0ZydXN0dW1ae1h9OiBhcnJheTxmMzIsU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9Pjt1bmlmb3JtIGZydXN0dW1MZW5ndGhze1h9OiBhcnJheTxmMzIsU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9Pjt1bmlmb3JtIGNhc2NhZGVCbGVuZEZhY3RvcntYfTogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzA6IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9XzA6IGYzMjt2YXJ5aW5nIHZQb3NpdGlvbkZyb21MaWdodHtYfV8xOiB2ZWM0Zjt2YXJ5aW5nIHZEZXB0aE1ldHJpY3tYfV8xOiBmMzI7dmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH1fMjogdmVjNGY7dmFyeWluZyB2RGVwdGhNZXRyaWN7WH1fMjogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzM6IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9XzM6IGYzMjt2YXJ5aW5nIHZQb3NpdGlvbkZyb21DYW1lcmF7WH06IHZlYzRmO3Zhcjxwcml2YXRlPiB2UG9zaXRpb25Gcm9tTGlnaHR7WH06IGFycmF5PHZlYzRmLDQ+O3Zhcjxwcml2YXRlPiB2RGVwdGhNZXRyaWN7WH0gOiBhcnJheTxmMzIsND47XG4jaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxudmFyIHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb247IFxudmFyIHNoYWRvd1RleHR1cmV7WH06IHRleHR1cmVfZGVwdGhfMmRfYXJyYXk7dmFyIGRlcHRoVGV4dHVyZXtYfVNhbXBsZXI6IHNhbXBsZXI7dmFyIGRlcHRoVGV4dHVyZXtYfTogdGV4dHVyZV8yZF9hcnJheTxmMzI+O3VuaWZvcm0gbGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9OiBhcnJheTx2ZWMyZixTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+O3VuaWZvcm0gZGVwdGhDb3JyZWN0aW9ue1h9OiBhcnJheTxmMzIsU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9Pjt1bmlmb3JtIHBlbnVtYnJhRGFya25lc3N7WH06IGYzMjtcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxudmFyIHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb247dmFyIHNoYWRvd1RleHR1cmV7WH06IHRleHR1cmVfZGVwdGhfMmRfYXJyYXk7XG4jZWxzZSBcbnZhciBzaGFkb3dUZXh0dXJle1h9U2FtcGxlcjogc2FtcGxlcjsgXG52YXIgc2hhZG93VGV4dHVyZXtYfTogdGV4dHVyZV8yZF9hcnJheTxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbmNvbnN0IHZDYXNjYWRlQ29sb3JzTXVsdGlwbGllcntYfTogYXJyYXk8dmVjM2YsOD49YXJyYXk8dmVjM2YsOD5cbihcbnZlYzNmICggMS41LDAuMCwwLjAgKSxcbnZlYzNmICggMC4wLDEuNSwwLjAgKSxcbnZlYzNmICggMC4wLDAuMCw1LjUgKSxcbnZlYzNmICggMS41LDAuMCw1LjUgKSxcbnZlYzNmICggMS41LDEuNSwwLjAgKSxcbnZlYzNmICggMS4wLDEuMCwxLjAgKSxcbnZlYzNmICggMC4wLDEuMCw1LjUgKSxcbnZlYzNmICggMC41LDMuNSwwLjc1IClcbik7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnZhciBzaGFkb3dUZXh0dXJle1h9U2FtcGxlcjogc2FtcGxlcjt2YXIgc2hhZG93VGV4dHVyZXtYfTogdGV4dHVyZV9jdWJlPGYzMj47XG4jZWxzZVxudmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH06IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9OiBmMzI7XG4jaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxudmFyIHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb247IFxudmFyIHNoYWRvd1RleHR1cmV7WH06IHRleHR1cmVfZGVwdGhfMmQ7dmFyIGRlcHRoVGV4dHVyZXtYfVNhbXBsZXI6IHNhbXBsZXI7IFxudmFyIGRlcHRoVGV4dHVyZXtYfTogdGV4dHVyZV8yZDxmMzI+O1xuI2VsaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG52YXIgc2hhZG93VGV4dHVyZXtYfVNhbXBsZXI6IHNhbXBsZXJfY29tcGFyaXNvbjt2YXIgc2hhZG93VGV4dHVyZXtYfTogdGV4dHVyZV9kZXB0aF8yZDtcbiNlbHNlXG52YXIgc2hhZG93VGV4dHVyZXtYfVNhbXBsZXI6IHNhbXBsZXI7IFxudmFyIHNoYWRvd1RleHR1cmV7WH06IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxudW5pZm9ybSBsaWdodE1hdHJpeHtYfTogbWF0NHg0ZjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodFVib0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibHRjSGVscGVyRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgZm4gTFRDVXYoTjogdmVjM2YsVjogdmVjM2Yscm91Z2huZXNzOiBmMzIpLT52ZWMyZiB7dmFyIExVVFNJWkU6IGYzMj02NC4wO3ZhciBMVVRTQ0FMRTogZjMyPSggTFVUU0laRS0xLjAgKS9MVVRTSVpFO3ZhciBMVVRCSUFTOmYzMj0wLjUvTFVUU0laRTt2YXIgZG90TlY6ZjMyPXNhdHVyYXRlKCBkb3QoIE4sViApICk7dmFyIHV2OnZlYzJmPXZlYzJmKCByb3VnaG5lc3Msc3FydCggMS4wLWRvdE5WICkgKTt1dj11dipMVVRTQ0FMRStMVVRCSUFTO3JldHVybiB1djt9XG5mbiBMVENDbGlwcGVkU3BoZXJlRm9ybUZhY3RvciggZjp2ZWMzZiApLT5mMzIge3ZhciBsOiBmMzI9bGVuZ3RoKCBmICk7cmV0dXJuIG1heCggKCBsKmwrZi56ICkvKCBsKzEuMCApLDAuMCApO31cbmZuIExUQ0VkZ2VWZWN0b3JGb3JtRmFjdG9yKCB2MTp2ZWMzZix2Mjp2ZWMzZiApLT52ZWMzZiB7dmFyIHg6ZjMyPWRvdCggdjEsdjIgKTt2YXIgeTpmMzI9YWJzKCB4ICk7dmFyIGE6ZjMyPTAuODU0Mzk4NSsoIDAuNDk2NTE1NSswLjAxNDUyMDYqeSApKnk7dmFyIGI6ZjMyPTMuNDE3NTk0MCsoIDQuMTYxNjcyNCt5ICkqeTt2YXIgdjpmMzI9YS9iO3ZhciB0aGV0YVNpbnRoZXRhOmYzMj0wLjA7aWYoIHg+MC4wIClcbnt0aGV0YVNpbnRoZXRhPXY7fVxuZWxzZVxue3RoZXRhU2ludGhldGE9MC41KmludmVyc2VTcXJ0KCBtYXgoIDEuMC14KngsMC4wMDAwMDAwMSApICktdjt9XG5yZXR1cm4gY3Jvc3MoIHYxLHYyICkqdGhldGFTaW50aGV0YTt9XG5mbiBMVENFdmFsdWF0ZSggTjp2ZWMzZixWOnZlYzNmLFA6dmVjM2YsbUludjogbWF0M3gzPGYzMj4scmVjdENvb3JkczA6dmVjM2YscmVjdENvb3JkczE6dmVjM2YscmVjdENvb3JkczI6dmVjM2YscmVjdENvb3JkczM6dmVjM2YgKS0+dmVjM2Yge3ZhciB2MTp2ZWMzZj1yZWN0Q29vcmRzMS1yZWN0Q29vcmRzMDt2YXIgdjI6dmVjM2Y9cmVjdENvb3JkczMtcmVjdENvb3JkczA7dmFyIGxpZ2h0Tm9ybWFsOnZlYzNmPWNyb3NzKCB2MSx2MiApO2lmKCBkb3QoIGxpZ2h0Tm9ybWFsLFAtcmVjdENvb3JkczAgKTwwLjAgKXtyZXR1cm4gdmVjM2YoIDAuMCApO31cbnZhciBUMTp2ZWMzZj1ub3JtYWxpemUoIFYtTipkb3QoIFYsTiApICk7dmFyIFQyOnZlYzNmPS0gY3Jvc3MoIE4sVDEgKTsgXG52YXIgbWF0OiBtYXQzeDM8ZjMyPj1tSW52KnRyYW5zcG9zZU1hdDMoIG1hdDN4MzxmMzI+KCBUMSxUMixOICkgKTt2YXIgY29vcmRzMDogdmVjM2Y9bWF0KiggcmVjdENvb3JkczAtUCApO3ZhciBjb29yZHMxOiB2ZWMzZj1tYXQqKCByZWN0Q29vcmRzMS1QICk7dmFyIGNvb3JkczI6IHZlYzNmPW1hdCooIHJlY3RDb29yZHMyLVAgKTt2YXIgY29vcmRzMzogdmVjM2Y9bWF0KiggcmVjdENvb3JkczMtUCApO2Nvb3JkczA9bm9ybWFsaXplKCBjb29yZHMwICk7Y29vcmRzMT1ub3JtYWxpemUoIGNvb3JkczEgKTtjb29yZHMyPW5vcm1hbGl6ZSggY29vcmRzMiApO2Nvb3JkczM9bm9ybWFsaXplKCBjb29yZHMzICk7dmFyIHZlY3RvckZvcm1GYWN0b3I6dmVjM2Y9dmVjMyggMC4wICk7dmVjdG9yRm9ybUZhY3Rvcis9TFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvb3JkczAsY29vcmRzMSApO3ZlY3RvckZvcm1GYWN0b3IrPUxUQ0VkZ2VWZWN0b3JGb3JtRmFjdG9yKCBjb29yZHMxLGNvb3JkczIgKTt2ZWN0b3JGb3JtRmFjdG9yKz1MVENFZGdlVmVjdG9yRm9ybUZhY3RvciggY29vcmRzMixjb29yZHMzICk7dmVjdG9yRm9ybUZhY3Rvcis9TFRDRWRnZVZlY3RvckZvcm1GYWN0b3IoIGNvb3JkczMsY29vcmRzMCApO3ZhciByZXN1bHQ6ZjMyPUxUQ0NsaXBwZWRTcGhlcmVGb3JtRmFjdG9yKCB2ZWN0b3JGb3JtRmFjdG9yICk7cmV0dXJuIHZlYzNmKCByZXN1bHQgKTt9XG5zdHJ1Y3QgYXJlYUxpZ2h0RGF0YVxue0RpZmZ1c2U6IHZlYzNmLFxuU3BlY3VsYXI6IHZlYzNmLFxuRnJlc25lbDogdmVjNGZ9O2ZuIGNvbXB1dGVBcmVhTGlnaHRTcGVjdWxhckRpZmZ1c2VGcmVzbmVsKGx0YzE6IHRleHR1cmVfMmQ8ZjMyPixsdGMxU2FtcGxlcjpzYW1wbGVyLGx0YzI6dGV4dHVyZV8yZDxmMzI+LGx0YzJTYW1wbGVyOnNhbXBsZXIsdmlld0RpcjogdmVjM2Ysbm9ybWFsOnZlYzNmLHBvc2l0aW9uOnZlYzNmLGxpZ2h0UG9zOnZlYzNmLGhhbGZXaWR0aDp2ZWMzZiwgaGFsZkhlaWdodDp2ZWMzZixyb3VnaG5lc3M6ZjMyKS0+YXJlYUxpZ2h0RGF0YSB7dmFyIHJlc3VsdDogYXJlYUxpZ2h0RGF0YTt2YXIgcmVjdENvb3JkczA6dmVjM2Y9bGlnaHRQb3MraGFsZldpZHRoLWhhbGZIZWlnaHQ7IFxudmFyIHJlY3RDb29yZHMxOnZlYzNmPWxpZ2h0UG9zLWhhbGZXaWR0aC1oYWxmSGVpZ2h0O3ZhciByZWN0Q29vcmRzMjp2ZWMzZj1saWdodFBvcy1oYWxmV2lkdGgraGFsZkhlaWdodDt2YXIgcmVjdENvb3JkczM6dmVjM2Y9bGlnaHRQb3MraGFsZldpZHRoK2hhbGZIZWlnaHQ7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgdXY6dmVjMmY9TFRDVXYoIG5vcm1hbCx2aWV3RGlyLHJvdWdobmVzcyApO3ZhciB0MTp2ZWM0Zj10ZXh0dXJlU2FtcGxlKCBsdGMxLGx0YzFTYW1wbGVyLHV2ICk7dmFyIHQyOnZlYzRmPXRleHR1cmVTYW1wbGUoIGx0YzIsbHRjMlNhbXBsZXIsdXYgKTt2YXIgbUludjptYXQzeDM8ZjMyPj1tYXQzeDM8ZjMyPihcbnZlYzNmKCB0MS54LDAsdDEueSApLFxudmVjM2YoIDAsMSwgMCApLFxudmVjM2YoIHQxLnosMCx0MS53IClcbik7cmVzdWx0LkZyZXNuZWw9dDI7cmVzdWx0LlNwZWN1bGFyPUxUQ0V2YWx1YXRlKCBub3JtYWwsdmlld0Rpcixwb3NpdGlvbixtSW52LHJlY3RDb29yZHMwLHJlY3RDb29yZHMxLHJlY3RDb29yZHMyLHJlY3RDb29yZHMzICk7XG4jZW5kaWZcbnZhciBtSW52RW1wdHk6bWF0M3gzPGYzMj49bWF0M3gzPGYzMj4oXG52ZWMzZiggMSwwLDAgKSxcbnZlYzNmKCAwLDEsMCApLFxudmVjM2YoIDAsMCwxIClcbik7cmVzdWx0LkRpZmZ1c2UrPUxUQ0V2YWx1YXRlKCBub3JtYWwsdmlld0Rpcixwb3NpdGlvbixtSW52RW1wdHkscmVjdENvb3JkczAscmVjdENvb3JkczEscmVjdENvb3JkczIscmVjdENvb3JkczMgKTtyZXR1cm4gcmVzdWx0O31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbHRjSGVscGVyRnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicmVmbGVjdGlvbkZ1bmN0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgZm4gY29tcHV0ZUZpeGVkRXF1aXJlY3Rhbmd1bGFyQ29vcmRzKHdvcmxkUG9zOiB2ZWM0Zix3b3JsZE5vcm1hbDogdmVjM2YsZGlyZWN0aW9uOiB2ZWMzZiktPnZlYzNmXG57dmFyIGxvbjogZjMyPWF0YW4yKGRpcmVjdGlvbi56LGRpcmVjdGlvbi54KTt2YXIgbGF0OiBmMzI9YWNvcyhkaXJlY3Rpb24ueSk7dmFyIHNwaGVyZUNvb3JkczogdmVjMmY9IHZlYzJmKGxvbixsYXQpKlJFQ0lQUk9DQUxfUEkyKjIuMDt2YXIgczogZjMyPXNwaGVyZUNvb3Jkcy54KjAuNSswLjU7dmFyIHQ6IGYzMj1zcGhlcmVDb29yZHMueTtyZXR1cm4gdmVjM2Yocyx0LDApOyB9XG5mbiBjb21wdXRlTWlycm9yZWRGaXhlZEVxdWlyZWN0YW5ndWxhckNvb3Jkcyh3b3JsZFBvczogdmVjNGYsd29ybGROb3JtYWw6IHZlYzNmLGRpcmVjdGlvbjogdmVjM2YpLT52ZWMzZlxue3ZhciBsb246IGYzMj1hdGFuMihkaXJlY3Rpb24ueixkaXJlY3Rpb24ueCk7dmFyIGxhdDogZjMyPWFjb3MoZGlyZWN0aW9uLnkpO3ZhciBzcGhlcmVDb29yZHM6IHZlYzJmPSB2ZWMyZihsb24sbGF0KSpSRUNJUFJPQ0FMX1BJMioyLjA7dmFyIHM6IGYzMj1zcGhlcmVDb29yZHMueCowLjUrMC41O3ZhciB0OiBmMzI9c3BoZXJlQ29vcmRzLnk7cmV0dXJuIHZlYzNmKDEuMC1zLHQsMCk7IH1cbmZuIGNvbXB1dGVFcXVpcmVjdGFuZ3VsYXJDb29yZHMod29ybGRQb3M6IHZlYzRmLHdvcmxkTm9ybWFsOiB2ZWMzZixleWVQb3NpdGlvbjogdmVjM2YscmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0ZiktPnZlYzNmXG57dmFyIGNhbWVyYVRvVmVydGV4OiB2ZWMzZj1ub3JtYWxpemUod29ybGRQb3MueHl6LWV5ZVBvc2l0aW9uKTt2YXIgcjogdmVjM2Y9bm9ybWFsaXplKHJlZmxlY3QoY2FtZXJhVG9WZXJ0ZXgsd29ybGROb3JtYWwpKTtyPSAocmVmbGVjdGlvbk1hdHJpeCogdmVjNGYociwwKSkueHl6O3ZhciBsb246IGYzMj1hdGFuMihyLnosci54KTt2YXIgbGF0OiBmMzI9YWNvcyhyLnkpO3ZhciBzcGhlcmVDb29yZHM6IHZlYzJmPSB2ZWMyZihsb24sbGF0KSpSRUNJUFJPQ0FMX1BJMioyLjA7dmFyIHM6IGYzMj1zcGhlcmVDb29yZHMueCowLjUrMC41O3ZhciB0OiBmMzI9c3BoZXJlQ29vcmRzLnk7cmV0dXJuIHZlYzNmKHMsdCwwKTt9XG5mbiBjb21wdXRlU3BoZXJpY2FsQ29vcmRzKHdvcmxkUG9zOiB2ZWM0Zix3b3JsZE5vcm1hbDogdmVjM2YsdmlldzogbWF0NHg0ZixyZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmKS0+dmVjM2Zcbnt2YXIgdmlld0RpcjogdmVjM2Y9bm9ybWFsaXplKCh2aWV3KndvcmxkUG9zKS54eXopO3ZhciB2aWV3Tm9ybWFsOiB2ZWMzZj1ub3JtYWxpemUoKHZpZXcqIHZlYzRmKHdvcmxkTm9ybWFsLDAuMCkpLnh5eik7dmFyIHI6IHZlYzNmPXJlZmxlY3Qodmlld0Rpcix2aWV3Tm9ybWFsKTtyPSAocmVmbGVjdGlvbk1hdHJpeCogdmVjNGYociwwKSkueHl6O3Iuej1yLnotMS4wO3ZhciBtOiBmMzI9Mi4wKmxlbmd0aChyKTtyZXR1cm4gdmVjM2Yoci54L20rMC41LDEuMC1yLnkvbS0wLjUsMCk7fVxuZm4gY29tcHV0ZVBsYW5hckNvb3Jkcyh3b3JsZFBvczogdmVjNGYsd29ybGROb3JtYWw6IHZlYzNmLGV5ZVBvc2l0aW9uOiB2ZWMzZixyZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmKS0+dmVjM2Zcbnt2YXIgdmlld0RpcjogdmVjM2Y9d29ybGRQb3MueHl6LWV5ZVBvc2l0aW9uO3ZhciBjb29yZHM6IHZlYzNmPW5vcm1hbGl6ZShyZWZsZWN0KHZpZXdEaXIsd29ybGROb3JtYWwpKTtyZXR1cm4gKHJlZmxlY3Rpb25NYXRyaXgqIHZlYzRmKGNvb3JkcywxKSkueHl6O31cbmZuIGNvbXB1dGVDdWJpY0Nvb3Jkcyh3b3JsZFBvczogdmVjNGYsd29ybGROb3JtYWw6IHZlYzNmLGV5ZVBvc2l0aW9uOiB2ZWMzZixyZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmKS0+dmVjM2Zcbnt2YXIgdmlld0RpcjogdmVjM2Y9bm9ybWFsaXplKHdvcmxkUG9zLnh5ei1leWVQb3NpdGlvbik7dmFyIGNvb3JkczogdmVjM2Y9cmVmbGVjdCh2aWV3RGlyLHdvcmxkTm9ybWFsKTtjb29yZHM9IChyZWZsZWN0aW9uTWF0cml4KiB2ZWM0Zihjb29yZHMsMCkpLnh5ejtcbiNpZmRlZiBJTlZFUlRDVUJJQ01BUFxuY29vcmRzLnkqPS0xLjA7XG4jZW5kaWZcbnJldHVybiBjb29yZHM7fVxuZm4gY29tcHV0ZUN1YmljTG9jYWxDb29yZHMod29ybGRQb3M6IHZlYzRmLHdvcmxkTm9ybWFsOiB2ZWMzZixleWVQb3NpdGlvbjogdmVjM2YscmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0ZixyZWZsZWN0aW9uU2l6ZTogdmVjM2YscmVmbGVjdGlvblBvc2l0aW9uOiB2ZWMzZiktPnZlYzNmXG57dmFyIHZpZXdEaXI6IHZlYzNmPW5vcm1hbGl6ZSh3b3JsZFBvcy54eXotZXllUG9zaXRpb24pO3ZhciBjb29yZHM6IHZlYzNmPXJlZmxlY3Qodmlld0Rpcix3b3JsZE5vcm1hbCk7Y29vcmRzPXBhcmFsbGF4Q29ycmVjdE5vcm1hbCh3b3JsZFBvcy54eXosY29vcmRzLHJlZmxlY3Rpb25TaXplLHJlZmxlY3Rpb25Qb3NpdGlvbik7Y29vcmRzPShyZWZsZWN0aW9uTWF0cml4KiB2ZWM0Zihjb29yZHMsMCkpLnh5ejtcbiNpZmRlZiBJTlZFUlRDVUJJQ01BUFxuY29vcmRzLnkqPS0xLjA7XG4jZW5kaWZcbnJldHVybiBjb29yZHM7fVxuZm4gY29tcHV0ZVByb2plY3Rpb25Db29yZHMod29ybGRQb3M6IHZlYzRmLHZpZXc6IG1hdDR4NGYscmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0ZiktPnZlYzNmXG57cmV0dXJuIChyZWZsZWN0aW9uTWF0cml4Kih2aWV3KndvcmxkUG9zKSkueHl6O31cbmZuIGNvbXB1dGVTa3lCb3hDb29yZHMocG9zaXRpb25XOiB2ZWMzZixyZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmKS0+dmVjM2ZcbntyZXR1cm4gKHJlZmxlY3Rpb25NYXRyaXgqIHZlYzRmKHBvc2l0aW9uVywxLikpLnh5ejt9XG4jaWZkZWYgUkVGTEVDVElPTlxuZm4gY29tcHV0ZVJlZmxlY3Rpb25Db29yZHMod29ybGRQb3M6IHZlYzRmLHdvcmxkTm9ybWFsOiB2ZWMzZiktPnZlYzNmXG57XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRFxudmFyIGRpcmVjdGlvbjogdmVjM2Y9bm9ybWFsaXplKGZyYWdtZW50SW5wdXRzLnZEaXJlY3Rpb25XKTtyZXR1cm4gY29tcHV0ZU1pcnJvcmVkRml4ZWRFcXVpcmVjdGFuZ3VsYXJDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsZGlyZWN0aW9uKTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEXG52YXIgZGlyZWN0aW9uOiB2ZWMzZj1ub3JtYWxpemUoZnJhZ21lbnRJbnB1dHMudkRpcmVjdGlvblcpO3JldHVybiBjb21wdXRlRml4ZWRFcXVpcmVjdGFuZ3VsYXJDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsZGlyZWN0aW9uKTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSXG5yZXR1cm4gY29tcHV0ZUVxdWlyZWN0YW5ndWxhckNvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCxzY2VuZS52RXllUG9zaXRpb24ueHl6LHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TUEhFUklDQUxcbnJldHVybiBjb21wdXRlU3BoZXJpY2FsQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLHNjZW5lLnZpZXcsdW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1BMQU5BUlxucmV0dXJuIGNvbXB1dGVQbGFuYXJDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsc2NlbmUudkV5ZVBvc2l0aW9uLnh5eix1bmlmb3Jtcy5yZWZsZWN0aW9uTWF0cml4KTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfQ1VCSUNcbiNpZmRlZiBVU0VfTE9DQUxfUkVGTEVDVElPTk1BUF9DVUJJQ1xucmV0dXJuIGNvbXB1dGVDdWJpY0xvY2FsQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLHNjZW5lLnZFeWVQb3NpdGlvbi54eXosdW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeCx1bmlmb3Jtcy52UmVmbGVjdGlvblNpemUsdW5pZm9ybXMudlJlZmxlY3Rpb25Qb3NpdGlvbik7XG4jZWxzZVxucmV0dXJuIGNvbXB1dGVDdWJpY0Nvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCxzY2VuZS52RXllUG9zaXRpb24ueHl6LHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1BST0pFQ1RJT05cbnJldHVybiBjb21wdXRlUHJvamVjdGlvbkNvb3Jkcyh3b3JsZFBvcyxzY2VuZS52aWV3LHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jaWZuZGVmIFJFRkxFQ1RJT05NQVBfQ1VCSUNcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxucmV0dXJuIGNvbXB1dGVTa3lCb3hDb29yZHMoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVVZXLHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX0VYUExJQ0lUXG5yZXR1cm4gdmVjM2YoMCwwLDApO1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCByZWZsZWN0aW9uRnVuY3Rpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgU0hBRE9XU1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuZm4gdW5wYWNrKGNvbG9yOiB2ZWM0ZiktPmYzMlxue2NvbnN0IGJpdF9zaGlmdDogdmVjNGY9IHZlYzRmKDEuMC8oMjU1LjAqMjU1LjAqMjU1LjApLDEuMC8oMjU1LjAqMjU1LjApLDEuMC8yNTUuMCwxLjApO3JldHVybiBkb3QoY29sb3IsYml0X3NoaWZ0KTt9XG4jZW5kaWZcbmZuIGNvbXB1dGVGYWxsT2ZmKHZhbHVlOiBmMzIsY2xpcFNwYWNlOiB2ZWMyZixmcnVzdHVtRWRnZUZhbGxvZmY6IGYzMiktPmYzMlxue3ZhciBtYXNrOiBmMzI9c21vb3Roc3RlcCgxLjAtZnJ1c3R1bUVkZ2VGYWxsb2ZmLDEuMDAwMDAwMTIsY2xhbXAoZG90KGNsaXBTcGFjZSxjbGlwU3BhY2UpLDAuLDEuKSk7cmV0dXJuIG1peCh2YWx1ZSwxLjAsbWFzayk7fVxuZm4gY29tcHV0ZVNoYWRvd0N1YmUod29ybGRQb3M6IHZlYzNmLGxpZ2h0UG9zaXRpb246IHZlYzNmLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfY3ViZTxmMzI+LHNoYWRvd1NhbXBsZXI6IHNhbXBsZXIsZGFya25lc3M6IGYzMixkZXB0aFZhbHVlczogdmVjMmYpLT5mMzJcbnt2YXIgZGlyZWN0aW9uVG9MaWdodDogdmVjM2Y9d29ybGRQb3MtbGlnaHRQb3NpdGlvbjt2YXIgZGVwdGg6IGYzMj1sZW5ndGgoZGlyZWN0aW9uVG9MaWdodCk7ZGVwdGg9KGRlcHRoK2RlcHRoVmFsdWVzLngpLyhkZXB0aFZhbHVlcy55KTtkZXB0aD1jbGFtcChkZXB0aCwwLiwxLjApO2RpcmVjdGlvblRvTGlnaHQ9bm9ybWFsaXplKGRpcmVjdGlvblRvTGlnaHQpO2RpcmVjdGlvblRvTGlnaHQueT0tZGlyZWN0aW9uVG9MaWdodC55O1xuI2lmbmRlZiBTSEFET1dGTE9BVFxudmFyIHNoYWRvdzogZjMyPXVucGFjayh0ZXh0dXJlU2FtcGxlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KSk7XG4jZWxzZVxudmFyIHNoYWRvdzogZjMyPXRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQpLng7XG4jZW5kaWZcbnJldHVybiBzZWxlY3QoMS4wLGRhcmtuZXNzLGRlcHRoPnNoYWRvdyk7fVxuZm4gY29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmdDdWJlKHdvcmxkUG9zOiB2ZWMzZixsaWdodFBvc2l0aW9uOiB2ZWMzZixzaGFkb3dUZXh0dXJlOiB0ZXh0dXJlX2N1YmU8ZjMyPixzaGFkb3dTYW1wbGVyOiBzYW1wbGVyLG1hcFNpemU6IGYzMixkYXJrbmVzczogZjMyLGRlcHRoVmFsdWVzOiB2ZWMyZiktPmYzMlxue3ZhciBkaXJlY3Rpb25Ub0xpZ2h0OiB2ZWMzZj13b3JsZFBvcy1saWdodFBvc2l0aW9uO3ZhciBkZXB0aDogZjMyPWxlbmd0aChkaXJlY3Rpb25Ub0xpZ2h0KTtkZXB0aD0oZGVwdGgrZGVwdGhWYWx1ZXMueCkvKGRlcHRoVmFsdWVzLnkpO2RlcHRoPWNsYW1wKGRlcHRoLDAuLDEuMCk7ZGlyZWN0aW9uVG9MaWdodD1ub3JtYWxpemUoZGlyZWN0aW9uVG9MaWdodCk7ZGlyZWN0aW9uVG9MaWdodC55PS1kaXJlY3Rpb25Ub0xpZ2h0Lnk7dmFyIHZpc2liaWxpdHk6IGYzMj0xLjt2YXIgcG9pc3NvbkRpc2s6IGFycmF5PHZlYzNmLDQ+O3BvaXNzb25EaXNrWzBdPSB2ZWMzZigtMS4wLDEuMCwtMS4wKTtwb2lzc29uRGlza1sxXT0gdmVjM2YoMS4wLC0xLjAsLTEuMCk7cG9pc3NvbkRpc2tbMl09IHZlYzNmKC0xLjAsLTEuMCwtMS4wKTtwb2lzc29uRGlza1szXT0gdmVjM2YoMS4wLC0xLjAsMS4wKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbmlmICh1bnBhY2sodGV4dHVyZVNhbXBsZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1swXSptYXBTaXplKSk8ZGVwdGgpIHt2aXNpYmlsaXR5LT0wLjI1O307aWYgKHVucGFjayh0ZXh0dXJlU2FtcGxlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzFdKm1hcFNpemUpKTxkZXB0aCkge3Zpc2liaWxpdHktPTAuMjU7fTtpZiAodW5wYWNrKHRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbMl0qbWFwU2l6ZSkpPGRlcHRoKSB7dmlzaWJpbGl0eS09MC4yNTt9O2lmICh1bnBhY2sodGV4dHVyZVNhbXBsZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1szXSptYXBTaXplKSk8ZGVwdGgpIHt2aXNpYmlsaXR5LT0wLjI1O307XG4jZWxzZVxuaWYgKHRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbMF0qbWFwU2l6ZSkueDxkZXB0aCkge3Zpc2liaWxpdHktPTAuMjU7fTtpZiAodGV4dHVyZVNhbXBsZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCtwb2lzc29uRGlza1sxXSptYXBTaXplKS54PGRlcHRoKSB7dmlzaWJpbGl0eS09MC4yNTt9O2lmICh0ZXh0dXJlU2FtcGxlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0K3BvaXNzb25EaXNrWzJdKm1hcFNpemUpLng8ZGVwdGgpIHt2aXNpYmlsaXR5LT0wLjI1O307aWYgKHRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQrcG9pc3NvbkRpc2tbM10qbWFwU2l6ZSkueDxkZXB0aCkge3Zpc2liaWxpdHktPTAuMjU7fTtcbiNlbmRpZlxucmV0dXJuIG1pbigxLjAsdmlzaWJpbGl0eStkYXJrbmVzcyk7fVxuZm4gY29tcHV0ZVNoYWRvd1dpdGhFU01DdWJlKHdvcmxkUG9zOiB2ZWMzZixsaWdodFBvc2l0aW9uOiB2ZWMzZixzaGFkb3dUZXh0dXJlOiB0ZXh0dXJlX2N1YmU8ZjMyPixzaGFkb3dTYW1wbGVyOiBzYW1wbGVyLGRhcmtuZXNzOiBmMzIsZGVwdGhTY2FsZTogZjMyLGRlcHRoVmFsdWVzOiB2ZWMyZiktPmYzMlxue3ZhciBkaXJlY3Rpb25Ub0xpZ2h0OiB2ZWMzZj13b3JsZFBvcy1saWdodFBvc2l0aW9uO3ZhciBkZXB0aDogZjMyPWxlbmd0aChkaXJlY3Rpb25Ub0xpZ2h0KTtkZXB0aD0oZGVwdGgrZGVwdGhWYWx1ZXMueCkvKGRlcHRoVmFsdWVzLnkpO3ZhciBzaGFkb3dQaXhlbERlcHRoOiBmMzI9Y2xhbXAoZGVwdGgsMC4sMS4wKTtkaXJlY3Rpb25Ub0xpZ2h0PW5vcm1hbGl6ZShkaXJlY3Rpb25Ub0xpZ2h0KTtkaXJlY3Rpb25Ub0xpZ2h0Lnk9LWRpcmVjdGlvblRvTGlnaHQueTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbnZhciBzaGFkb3dNYXBTYW1wbGU6IGYzMj11bnBhY2sodGV4dHVyZVNhbXBsZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCkpO1xuI2Vsc2VcbnZhciBzaGFkb3dNYXBTYW1wbGU6IGYzMj10ZXh0dXJlU2FtcGxlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixkaXJlY3Rpb25Ub0xpZ2h0KS54O1xuI2VuZGlmXG52YXIgZXNtOiBmMzI9MS4wLWNsYW1wKGV4cChtaW4oODcuLGRlcHRoU2NhbGUqc2hhZG93UGl4ZWxEZXB0aCkpKnNoYWRvd01hcFNhbXBsZSwwLiwxLi1kYXJrbmVzcyk7cmV0dXJuIGVzbTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aENsb3NlRVNNQ3ViZSh3b3JsZFBvczogdmVjM2YsbGlnaHRQb3NpdGlvbjogdmVjM2Ysc2hhZG93VGV4dHVyZTogdGV4dHVyZV9jdWJlPGYzMj4sc2hhZG93U2FtcGxlcjogc2FtcGxlcixkYXJrbmVzczogZjMyLGRlcHRoU2NhbGU6IGYzMixkZXB0aFZhbHVlczogdmVjMmYpLT5mMzJcbnt2YXIgZGlyZWN0aW9uVG9MaWdodDogdmVjM2Y9d29ybGRQb3MtbGlnaHRQb3NpdGlvbjt2YXIgZGVwdGg6IGYzMj1sZW5ndGgoZGlyZWN0aW9uVG9MaWdodCk7ZGVwdGg9KGRlcHRoK2RlcHRoVmFsdWVzLngpLyhkZXB0aFZhbHVlcy55KTt2YXIgc2hhZG93UGl4ZWxEZXB0aDogZjMyPWNsYW1wKGRlcHRoLDAuLDEuMCk7ZGlyZWN0aW9uVG9MaWdodD1ub3JtYWxpemUoZGlyZWN0aW9uVG9MaWdodCk7ZGlyZWN0aW9uVG9MaWdodC55PS1kaXJlY3Rpb25Ub0xpZ2h0Lnk7XG4jaWZuZGVmIFNIQURPV0ZMT0FUXG52YXIgc2hhZG93TWFwU2FtcGxlOiBmMzI9dW5wYWNrKHRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLGRpcmVjdGlvblRvTGlnaHQpKTtcbiNlbHNlXG52YXIgc2hhZG93TWFwU2FtcGxlOiBmMzI9dGV4dHVyZVNhbXBsZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsZGlyZWN0aW9uVG9MaWdodCkueDtcbiNlbmRpZlxudmFyIGVzbTogZjMyPWNsYW1wKGV4cChtaW4oODcuLC1kZXB0aFNjYWxlKihzaGFkb3dQaXhlbERlcHRoLXNoYWRvd01hcFNhbXBsZSkpKSxkYXJrbmVzcywxLik7cmV0dXJuIGVzbTt9XG5mbiBjb21wdXRlU2hhZG93Q1NNKGxheWVyOiBpMzIsdlBvc2l0aW9uRnJvbUxpZ2h0OiB2ZWM0ZixkZXB0aE1ldHJpYzogZjMyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfMmRfYXJyYXk8ZjMyPixzaGFkb3dTYW1wbGVyOiBzYW1wbGVyLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1djogdmVjMmY9MC41KmNsaXBTcGFjZS54eSsgdmVjMmYoMC41KTt2YXIgc2hhZG93UGl4ZWxEZXB0aDogZjMyPWNsYW1wKGRlcHRoTWV0cmljLDAuLDEuMCk7XG4jaWZuZGVmIFNIQURPV0ZMT0FUXG52YXIgc2hhZG93OiBmMzI9dW5wYWNrKHRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2LGxheWVyKSk7XG4jZWxzZVxudmFyIHNoYWRvdzogZjMyPXRleHR1cmVTYW1wbGUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2LGxheWVyKS54O1xuI2VuZGlmXG5yZXR1cm4gc2VsZWN0KDEuLGNvbXB1dGVGYWxsT2ZmKGRhcmtuZXNzLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpLHNoYWRvd1BpeGVsRGVwdGg+c2hhZG93ICk7fVxuZm4gY29tcHV0ZVNoYWRvdyh2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LHNoYWRvd1NhbXBsZXI6IHNhbXBsZXIsZGFya25lc3M6IGYzMixmcnVzdHVtRWRnZUZhbGxvZmY6IGYzMiktPmYzMlxue3ZhciBjbGlwU3BhY2U6IHZlYzNmPXZQb3NpdGlvbkZyb21MaWdodC54eXovdlBvc2l0aW9uRnJvbUxpZ2h0Lnc7dmFyIHV2OiB2ZWMyZj0wLjUqY2xpcFNwYWNlLnh5KyB2ZWMyZigwLjUpO2lmICh1di54PDAuIHx8IHV2Lng+MS4wIHx8IHV2Lnk8MC4gfHwgdXYueT4xLjApXG57cmV0dXJuIDEuMDt9XG5lbHNlXG57dmFyIHNoYWRvd1BpeGVsRGVwdGg6IGYzMj1jbGFtcChkZXB0aE1ldHJpYywwLiwxLjApO1xuI2lmbmRlZiBTSEFET1dGTE9BVFxudmFyIHNoYWRvdzogZjMyPXVucGFjayh0ZXh0dXJlU2FtcGxlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2LDAuKSk7XG4jZWxzZVxudmFyIHNoYWRvdzogZjMyPXRleHR1cmVTYW1wbGVMZXZlbChzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsdXYsMC4pLng7XG4jZW5kaWZcbnJldHVybiBzZWxlY3QoMS4sY29tcHV0ZUZhbGxPZmYoZGFya25lc3MsY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZiksc2hhZG93UGl4ZWxEZXB0aD5zaGFkb3cgKTt9fVxuZm4gY29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmcodlBvc2l0aW9uRnJvbUxpZ2h0OiB2ZWM0ZixkZXB0aE1ldHJpYzogZjMyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixzaGFkb3dTYW1wbGVyOiBzYW1wbGVyLG1hcFNpemU6IGYzMixkYXJrbmVzczogZjMyLGZydXN0dW1FZGdlRmFsbG9mZjogZjMyKS0+ZjMyXG57dmFyIGNsaXBTcGFjZTogdmVjM2Y9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2YXIgdXY6IHZlYzJmPTAuNSpjbGlwU3BhY2UueHkrIHZlYzJmKDAuNSk7aWYgKHV2Lng8MC4gfHwgdXYueD4xLjAgfHwgdXYueTwwLiB8fCB1di55PjEuMClcbntyZXR1cm4gMS4wO31cbmVsc2Vcbnt2YXIgc2hhZG93UGl4ZWxEZXB0aDogZjMyPWNsYW1wKGRlcHRoTWV0cmljLDAuLDEuMCk7dmFyIHZpc2liaWxpdHk6IGYzMj0xLjt2YXIgcG9pc3NvbkRpc2s6IGFycmF5PHZlYzJmLDQ+O3BvaXNzb25EaXNrWzBdPSB2ZWMyZigtMC45NDIwMTYyNCwtMC4zOTkwNjIxNik7cG9pc3NvbkRpc2tbMV09IHZlYzJmKDAuOTQ1NTg2MDksLTAuNzY4OTA3MjUpO3BvaXNzb25EaXNrWzJdPSB2ZWMyZigtMC4wOTQxODQxMDEsLTAuOTI5Mzg4NzApO3BvaXNzb25EaXNrWzNdPSB2ZWMyZigwLjM0NDk1OTM4LDAuMjkzODc3NjApO1xuI2lmbmRlZiBTSEFET1dGTE9BVFxuaWYgKHVucGFjayh0ZXh0dXJlU2FtcGxlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzBdKm1hcFNpemUsMC4pKTxzaGFkb3dQaXhlbERlcHRoKSB7dmlzaWJpbGl0eS09MC4yNTt9XG5pZiAodW5wYWNrKHRleHR1cmVTYW1wbGVMZXZlbChzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbMV0qbWFwU2l6ZSwwLikpPHNoYWRvd1BpeGVsRGVwdGgpIHt2aXNpYmlsaXR5LT0wLjI1O31cbmlmICh1bnBhY2sodGV4dHVyZVNhbXBsZUxldmVsKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1syXSptYXBTaXplLDAuKSk8c2hhZG93UGl4ZWxEZXB0aCkge3Zpc2liaWxpdHktPTAuMjU7fVxuaWYgKHVucGFjayh0ZXh0dXJlU2FtcGxlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzNdKm1hcFNpemUsMC4pKTxzaGFkb3dQaXhlbERlcHRoKSB7dmlzaWJpbGl0eS09MC4yNTt9XG4jZWxzZVxuaWYgKHRleHR1cmVTYW1wbGVMZXZlbChzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbMF0qbWFwU2l6ZSwwLikueDxzaGFkb3dQaXhlbERlcHRoKSB7dmlzaWJpbGl0eS09MC4yNTt9XG5pZiAodGV4dHVyZVNhbXBsZUxldmVsKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcix1ditwb2lzc29uRGlza1sxXSptYXBTaXplLDAuKS54PHNoYWRvd1BpeGVsRGVwdGgpIHt2aXNpYmlsaXR5LT0wLjI1O31cbmlmICh0ZXh0dXJlU2FtcGxlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2K3BvaXNzb25EaXNrWzJdKm1hcFNpemUsMC4pLng8c2hhZG93UGl4ZWxEZXB0aCkge3Zpc2liaWxpdHktPTAuMjU7fVxuaWYgKHRleHR1cmVTYW1wbGVMZXZlbChzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsdXYrcG9pc3NvbkRpc2tbM10qbWFwU2l6ZSwwLikueDxzaGFkb3dQaXhlbERlcHRoKSB7dmlzaWJpbGl0eS09MC4yNTt9XG4jZW5kaWZcbnJldHVybiBjb21wdXRlRmFsbE9mZihtaW4oMS4wLHZpc2liaWxpdHkrZGFya25lc3MpLGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG5mbiBjb21wdXRlU2hhZG93V2l0aEVTTSh2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LHNoYWRvd1NhbXBsZXI6IHNhbXBsZXIsZGFya25lc3M6IGYzMixkZXB0aFNjYWxlOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1djogdmVjMmY9MC41KmNsaXBTcGFjZS54eSsgdmVjMmYoMC41KTtpZiAodXYueDwwLiB8fCB1di54PjEuMCB8fCB1di55PDAuIHx8IHV2Lnk+MS4wKVxue3JldHVybiAxLjA7fVxuZWxzZVxue3ZhciBzaGFkb3dQaXhlbERlcHRoOiBmMzI9Y2xhbXAoZGVwdGhNZXRyaWMsMC4sMS4wKTtcbiNpZm5kZWYgU0hBRE9XRkxPQVRcbnZhciBzaGFkb3dNYXBTYW1wbGU6IGYzMj11bnBhY2sodGV4dHVyZVNhbXBsZUxldmVsKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcix1diwwLikpO1xuI2Vsc2VcbnZhciBzaGFkb3dNYXBTYW1wbGU6IGYzMj10ZXh0dXJlU2FtcGxlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2LDAuKS54O1xuI2VuZGlmXG52YXIgZXNtOiBmMzI9MS4wLWNsYW1wKGV4cChtaW4oODcuLGRlcHRoU2NhbGUqc2hhZG93UGl4ZWxEZXB0aCkpKnNoYWRvd01hcFNhbXBsZSwwLiwxLi1kYXJrbmVzcyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKGVzbSxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuZm4gY29tcHV0ZVNoYWRvd1dpdGhDbG9zZUVTTSh2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LHNoYWRvd1NhbXBsZXI6IHNhbXBsZXIsZGFya25lc3M6IGYzMixkZXB0aFNjYWxlOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1djogdmVjMmY9MC41KmNsaXBTcGFjZS54eSsgdmVjMmYoMC41KTtpZiAodXYueDwwLiB8fCB1di54PjEuMCB8fCB1di55PDAuIHx8IHV2Lnk+MS4wKVxue3JldHVybiAxLjA7fVxuZWxzZVxue3ZhciBzaGFkb3dQaXhlbERlcHRoOiBmMzI9Y2xhbXAoZGVwdGhNZXRyaWMsMC4sMS4wKTsgXG4jaWZuZGVmIFNIQURPV0ZMT0FUXG52YXIgc2hhZG93TWFwU2FtcGxlOiBmMzI9dW5wYWNrKHRleHR1cmVTYW1wbGVMZXZlbChzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsdXYsMC4pKTtcbiNlbHNlXG52YXIgc2hhZG93TWFwU2FtcGxlOiBmMzI9dGV4dHVyZVNhbXBsZUxldmVsKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcix1diwwLikueDtcbiNlbmRpZlxudmFyIGVzbTogZjMyPWNsYW1wKGV4cChtaW4oODcuLC1kZXB0aFNjYWxlKihzaGFkb3dQaXhlbERlcHRoLXNoYWRvd01hcFNhbXBsZSkpKSxkYXJrbmVzcywxLik7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKGVzbSxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9fVxuZm4gZ2V0WkluQ2xpcChjbGlwU3BhY2U6IHZlYzNmLHV2RGVwdGg6IHZlYzNmKS0+ZjMyXG57XG4jaWZkZWYgSVNfTkRDX0hBTEZfWlJBTkdFXG5yZXR1cm4gY2xpcFNwYWNlLno7XG4jZWxzZVxucmV0dXJuIHV2RGVwdGguejtcbiNlbmRpZlxufVxuY29uc3QgR1JFQVRFU1RfTEVTU19USEFOX09ORTogZjMyPTAuOTk5OTk5OTQ7XG4jZGVmaW5lIERJU0FCTEVfVU5JRk9STUlUWV9BTkFMWVNJU1xuZm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YxKGxheWVyOiBpMzIsdlBvc2l0aW9uRnJvbUxpZ2h0OiB2ZWM0ZixkZXB0aE1ldHJpYzogZjMyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmRfYXJyYXksc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1dkRlcHRoOiB2ZWMzZj0gdmVjM2YoMC41KmNsaXBTcGFjZS54eXorIHZlYzNmKDAuNSkpO3V2RGVwdGguej1jbGFtcChnZXRaSW5DbGlwKGNsaXBTcGFjZSx1dkRlcHRoKSwwLixHUkVBVEVTVF9MRVNTX1RIQU5fT05FKTt2YXIgc2hhZG93OiBmMzI9dGV4dHVyZVNhbXBsZUNvbXBhcmUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLHV2RGVwdGgueHksbGF5ZXIsdXZEZXB0aC56KTtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aENTTVBDRjMobGF5ZXI6IGkzMix2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZF9hcnJheSxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUFuZEludmVyc2U6IHZlYzJmLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1dkRlcHRoOiB2ZWMzZj0gdmVjM2YoMC41KmNsaXBTcGFjZS54eXorIHZlYzNmKDAuNSkpO3V2RGVwdGguej1jbGFtcChnZXRaSW5DbGlwKGNsaXBTcGFjZSx1dkRlcHRoKSwwLixHUkVBVEVTVF9MRVNTX1RIQU5fT05FKTt2YXIgdXY6IHZlYzJmPXV2RGVwdGgueHkqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueDsgXG51dis9MC41OyBcbnZhciBzdDogdmVjMmY9ZnJhY3QodXYpOyBcbnZhciBiYXNlX3V2OiB2ZWMyZj1mbG9vcih1diktMC41OyBcbmJhc2VfdXYqPXNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7IFxudmFyIHV2dzA6IHZlYzJmPTMuLTIuKnN0O3ZhciB1dncxOiB2ZWMyZj0xLisyLipzdDt2YXIgdTogdmVjMmY9IHZlYzJmKCgyLi1zdC54KS91dncwLngtMS4sc3QueC91dncxLngrMS4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7dmFyIHY6IHZlYzJmPSB2ZWMyZigoMi4tc3QueSkvdXZ3MC55LTEuLHN0LnkvdXZ3MS55KzEuKSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55O3ZhciBzaGFkb3c6IGYzMj0wLjtzaGFkb3crPXV2dzAueCp1dncwLnkqdGV4dHVyZVNhbXBsZUNvbXBhcmUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzBdLHZbMF0pLGxheWVyLHV2RGVwdGgueik7c2hhZG93Kz11dncxLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlciwgYmFzZV91di54eSsgdmVjMmYodVsxXSx2WzBdKSxsYXllcix1dkRlcHRoLnopO3NoYWRvdys9dXZ3MC54KnV2dzEueSp0ZXh0dXJlU2FtcGxlQ29tcGFyZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsIGJhc2VfdXYueHkrIHZlYzJmKHVbMF0sdlsxXSksbGF5ZXIsdXZEZXB0aC56KTtzaGFkb3crPXV2dzEueCp1dncxLnkqdGV4dHVyZVNhbXBsZUNvbXBhcmUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMV0pLGxheWVyLHV2RGVwdGgueik7c2hhZG93PXNoYWRvdy8xNi47c2hhZG93PW1peChkYXJrbmVzcywxLixzaGFkb3cpO3JldHVybiBjb21wdXRlRmFsbE9mZihzaGFkb3csY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZik7fVxuZm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ0Y1KGxheWVyOiBpMzIsdlBvc2l0aW9uRnJvbUxpZ2h0OiB2ZWM0ZixkZXB0aE1ldHJpYzogZjMyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmRfYXJyYXksc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLHNoYWRvd01hcFNpemVBbmRJbnZlcnNlOiB2ZWMyZixkYXJrbmVzczogZjMyLGZydXN0dW1FZGdlRmFsbG9mZjogZjMyKS0+ZjMyXG57dmFyIGNsaXBTcGFjZTogdmVjM2Y9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2YXIgdXZEZXB0aDogdmVjM2Y9IHZlYzNmKDAuNSpjbGlwU3BhY2UueHl6KyB2ZWMzZigwLjUpKTt1dkRlcHRoLno9Y2xhbXAoZ2V0WkluQ2xpcChjbGlwU3BhY2UsdXZEZXB0aCksMC4sR1JFQVRFU1RfTEVTU19USEFOX09ORSk7dmFyIHV2OiB2ZWMyZj11dkRlcHRoLnh5KnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLng7IFxudXYrPTAuNTsgXG52YXIgc3Q6IHZlYzJmPWZyYWN0KHV2KTsgXG52YXIgYmFzZV91djogdmVjMmY9Zmxvb3IodXYpLTAuNTsgXG5iYXNlX3V2Kj1zaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55OyBcbnZhciB1dncwOiB2ZWMyZj00Li0zLipzdDt2YXIgdXZ3MTogdmVjMmY9IHZlYzJmKDcuKTt2YXIgdXZ3MjogdmVjMmY9MS4rMy4qc3Q7dmFyIHU6IHZlYzNmPSB2ZWMzZigoMy4tMi4qc3QueCkvdXZ3MC54LTIuLCgzLitzdC54KS91dncxLngsc3QueC91dncyLngrMi4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7dmFyIHY6IHZlYzNmPSB2ZWMzZigoMy4tMi4qc3QueSkvdXZ3MC55LTIuLCgzLitzdC55KS91dncxLnksc3QueS91dncyLnkrMi4pKnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7dmFyIHNoYWRvdzogZjMyPTAuO3NoYWRvdys9dXZ3MC54KnV2dzAueSp0ZXh0dXJlU2FtcGxlQ29tcGFyZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsIGJhc2VfdXYueHkrIHZlYzJmKHVbMF0sdlswXSksbGF5ZXIsdXZEZXB0aC56KTtzaGFkb3crPXV2dzEueCp1dncwLnkqdGV4dHVyZVNhbXBsZUNvbXBhcmUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMF0pLGxheWVyLHV2RGVwdGgueik7c2hhZG93Kz11dncyLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlciwgYmFzZV91di54eSsgdmVjMmYodVsyXSx2WzBdKSxsYXllcix1dkRlcHRoLnopO3NoYWRvdys9dXZ3MC54KnV2dzEueSp0ZXh0dXJlU2FtcGxlQ29tcGFyZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsIGJhc2VfdXYueHkrIHZlYzJmKHVbMF0sdlsxXSksbGF5ZXIsdXZEZXB0aC56KTtzaGFkb3crPXV2dzEueCp1dncxLnkqdGV4dHVyZVNhbXBsZUNvbXBhcmUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMV0pLGxheWVyLHV2RGVwdGgueik7c2hhZG93Kz11dncyLngqdXZ3MS55KnRleHR1cmVTYW1wbGVDb21wYXJlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlciwgYmFzZV91di54eSsgdmVjMmYodVsyXSx2WzFdKSxsYXllcix1dkRlcHRoLnopO3NoYWRvdys9dXZ3MC54KnV2dzIueSp0ZXh0dXJlU2FtcGxlQ29tcGFyZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsIGJhc2VfdXYueHkrIHZlYzJmKHVbMF0sdlsyXSksbGF5ZXIsdXZEZXB0aC56KTtzaGFkb3crPXV2dzEueCp1dncyLnkqdGV4dHVyZVNhbXBsZUNvbXBhcmUoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMl0pLGxheWVyLHV2RGVwdGgueik7c2hhZG93Kz11dncyLngqdXZ3Mi55KnRleHR1cmVTYW1wbGVDb21wYXJlKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlciwgYmFzZV91di54eSsgdmVjMmYodVsyXSx2WzJdKSxsYXllcix1dkRlcHRoLnopO3NoYWRvdz1zaGFkb3cvMTQ0LjtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aFBDRjEodlBvc2l0aW9uRnJvbUxpZ2h0OiB2ZWM0ZixkZXB0aE1ldHJpYzogZjMyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmQsc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1dkRlcHRoOiB2ZWMzZj0gdmVjM2YoMC41KmNsaXBTcGFjZS54eXorIHZlYzNmKDAuNSkpO3V2RGVwdGguej1nZXRaSW5DbGlwKGNsaXBTcGFjZSx1dkRlcHRoKTtpZiAoZGVwdGhNZXRyaWM8MC4wIHx8IGRlcHRoTWV0cmljPjEuMCB8fCB1dkRlcHRoLng8MC4gfHwgdXZEZXB0aC54PjEuMCB8fCB1dkRlcHRoLnk8MC4gfHwgdXZEZXB0aC55PjEuMCkge3JldHVybiAxLjA7fSBlbHNlIHt2YXIgc2hhZG93OiBmMzI9dGV4dHVyZVNhbXBsZUNvbXBhcmVMZXZlbChzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsdXZEZXB0aC54eSx1dkRlcHRoLnopO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG5mbiBjb21wdXRlU2hhZG93V2l0aFBDRjModlBvc2l0aW9uRnJvbUxpZ2h0OiB2ZWM0ZixkZXB0aE1ldHJpYzogZjMyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmQsc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLHNoYWRvd01hcFNpemVBbmRJbnZlcnNlOiB2ZWMyZixkYXJrbmVzczogZjMyLGZydXN0dW1FZGdlRmFsbG9mZjogZjMyKS0+ZjMyXG57dmFyIGNsaXBTcGFjZTogdmVjM2Y9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2YXIgdXZEZXB0aDogdmVjM2Y9IHZlYzNmKDAuNSpjbGlwU3BhY2UueHl6KyB2ZWMzZigwLjUpKTt1dkRlcHRoLno9Z2V0WkluQ2xpcChjbGlwU3BhY2UsdXZEZXB0aCk7aWYgKGRlcHRoTWV0cmljPDAuMCB8fCBkZXB0aE1ldHJpYz4xLjAgfHwgdXZEZXB0aC54PDAuIHx8IHV2RGVwdGgueD4xLjAgfHwgdXZEZXB0aC55PDAuIHx8IHV2RGVwdGgueT4xLjApIHtyZXR1cm4gMS4wO30gZWxzZSB7dmFyIHV2OiB2ZWMyZj11dkRlcHRoLnh5KnNoYWRvd01hcFNpemVBbmRJbnZlcnNlLng7IFxudXYrPTAuNTsgXG52YXIgc3Q6IHZlYzJmPWZyYWN0KHV2KTsgXG52YXIgYmFzZV91djogdmVjMmY9Zmxvb3IodXYpLTAuNTsgXG5iYXNlX3V2Kj1zaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55OyBcbnZhciB1dncwOiB2ZWMyZj0zLi0yLipzdDt2YXIgdXZ3MTogdmVjMmY9MS4rMi4qc3Q7dmFyIHU6IHZlYzJmPSB2ZWMyZigoMi4tc3QueCkvdXZ3MC54LTEuLHN0LngvdXZ3MS54KzEuKSpzaGFkb3dNYXBTaXplQW5kSW52ZXJzZS55O3ZhciB2OiB2ZWMyZj0gdmVjMmYoKDIuLXN0LnkpL3V2dzAueS0xLixzdC55L3V2dzEueSsxLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTt2YXIgc2hhZG93OiBmMzI9MC47c2hhZG93Kz11dncwLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzBdLHZbMF0pLHV2RGVwdGgueik7c2hhZG93Kz11dncxLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMF0pLHV2RGVwdGgueik7c2hhZG93Kz11dncwLngqdXZ3MS55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzBdLHZbMV0pLHV2RGVwdGgueik7c2hhZG93Kz11dncxLngqdXZ3MS55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMV0pLHV2RGVwdGgueik7c2hhZG93PXNoYWRvdy8xNi47c2hhZG93PW1peChkYXJrbmVzcywxLixzaGFkb3cpO3JldHVybiBjb21wdXRlRmFsbE9mZihzaGFkb3csY2xpcFNwYWNlLnh5LGZydXN0dW1FZGdlRmFsbG9mZik7fX1cbmZuIGNvbXB1dGVTaGFkb3dXaXRoUENGNSh2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZCxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUFuZEludmVyc2U6IHZlYzJmLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIpLT5mMzJcbnt2YXIgY2xpcFNwYWNlOiB2ZWMzZj12UG9zaXRpb25Gcm9tTGlnaHQueHl6L3ZQb3NpdGlvbkZyb21MaWdodC53O3ZhciB1dkRlcHRoOiB2ZWMzZj0gdmVjM2YoMC41KmNsaXBTcGFjZS54eXorIHZlYzNmKDAuNSkpO3V2RGVwdGguej1nZXRaSW5DbGlwKGNsaXBTcGFjZSx1dkRlcHRoKTtpZiAoZGVwdGhNZXRyaWM8MC4wIHx8IGRlcHRoTWV0cmljPjEuMCB8fCB1dkRlcHRoLng8MC4gfHwgdXZEZXB0aC54PjEuMCB8fCB1dkRlcHRoLnk8MC4gfHwgdXZEZXB0aC55PjEuMCkge3JldHVybiAxLjA7fSBlbHNlIHt2YXIgdXY6IHZlYzJmPXV2RGVwdGgueHkqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueDsgXG51dis9MC41OyBcbnZhciBzdDogdmVjMmY9ZnJhY3QodXYpOyBcbnZhciBiYXNlX3V2OiB2ZWMyZj1mbG9vcih1diktMC41OyBcbmJhc2VfdXYqPXNoYWRvd01hcFNpemVBbmRJbnZlcnNlLnk7IFxudmFyIHV2dzA6IHZlYzJmPTQuLTMuKnN0O3ZhciB1dncxOiB2ZWMyZj0gdmVjMmYoNy4pO3ZhciB1dncyOiB2ZWMyZj0xLiszLipzdDt2YXIgdTogdmVjM2Y9IHZlYzNmKCgzLi0yLipzdC54KS91dncwLngtMi4sKDMuK3N0LngpL3V2dzEueCxzdC54L3V2dzIueCsyLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTt2YXIgdjogdmVjM2Y9IHZlYzNmKCgzLi0yLipzdC55KS91dncwLnktMi4sKDMuK3N0LnkpL3V2dzEueSxzdC55L3V2dzIueSsyLikqc2hhZG93TWFwU2l6ZUFuZEludmVyc2UueTt2YXIgc2hhZG93OiBmMzI9MC47c2hhZG93Kz11dncwLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzBdLHZbMF0pLHV2RGVwdGgueik7c2hhZG93Kz11dncxLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMF0pLHV2RGVwdGgueik7c2hhZG93Kz11dncyLngqdXZ3MC55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzJdLHZbMF0pLHV2RGVwdGgueik7c2hhZG93Kz11dncwLngqdXZ3MS55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzBdLHZbMV0pLHV2RGVwdGgueik7c2hhZG93Kz11dncxLngqdXZ3MS55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMV0pLHV2RGVwdGgueik7c2hhZG93Kz11dncyLngqdXZ3MS55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzJdLHZbMV0pLHV2RGVwdGgueik7c2hhZG93Kz11dncwLngqdXZ3Mi55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzBdLHZbMl0pLHV2RGVwdGgueik7c2hhZG93Kz11dncxLngqdXZ3Mi55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzFdLHZbMl0pLHV2RGVwdGgueik7c2hhZG93Kz11dncyLngqdXZ3Mi55KnRleHR1cmVTYW1wbGVDb21wYXJlTGV2ZWwoc2hhZG93VGV4dHVyZSxzaGFkb3dTYW1wbGVyLCBiYXNlX3V2Lnh5KyB2ZWMyZih1WzJdLHZbMl0pLHV2RGVwdGgueik7c2hhZG93PXNoYWRvdy8xNDQuO3NoYWRvdz1taXgoZGFya25lc3MsMS4sc2hhZG93KTtyZXR1cm4gY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpO319XG5jb25zdCBQb2lzc29uU2FtcGxlcnMzMjogYXJyYXk8dmVjM2YsNjQ+PWFycmF5PHZlYzNmLDY0PiAoXG52ZWMzZigwLjA2NDA3MDEzLDAuMDU0MDk5MjcsMC4pLFxudmVjM2YoMC43MzY2NTc3LDAuNTc4OTM5NCwwLiksXG52ZWMzZigtMC42MjcwNTQyLC0wLjUzMjAyNzgsMC4pLFxudmVjM2YoLTAuNDA5NjEwNywwLjg0MTEwOTUsMC4pLFxudmVjM2YoMC42ODQ5NTY0LC0wLjQ5OTA4MTgsMC4pLFxudmVjM2YoLTAuODc0MTgxLC0wLjA0NTc5NzM1LDAuKSxcbnZlYzNmKDAuOTk4OTk5OCwwLjAwMDk4ODAwNjYsMC4pLFxudmVjM2YoLTAuMDA0OTIwNTc4LC0wLjkxNTE2NDksMC4pLFxudmVjM2YoMC4xODA1NzYzLDAuOTc0NzQ4MywwLiksXG52ZWMzZigtMC4yMTM4NDUxLDAuMjYzNTgxOCwwLiksXG52ZWMzZigwLjEwOTg0NSwwLjM4ODQ3ODUsMC4pLFxudmVjM2YoMC4wNjg3Njc1NSwtMC4zNTgxMDc0LDAuKSxcbnZlYzNmKDAuMzc0MDczLC0wLjc2NjEyNjYsMC4pLFxudmVjM2YoMC4zMDc5MTMyLC0wLjEyMTY3NjMsMC4pLFxudmVjM2YoLTAuMzc5NDMzNSwtMC44MjcxNTgzLDAuKSxcbnZlYzNmKC0wLjIwMzg3OCwtMC4wNzcxNTAzNCwwLiksXG52ZWMzZigwLjU5MTI2OTcsMC4xNDY5Nzk5LDAuKSxcbnZlYzNmKC0wLjg4MDY5LDAuMzAzMTc4NCwwLiksXG52ZWMzZigwLjUwNDAxMDgsMC44MjgzNzIyLDAuKSxcbnZlYzNmKC0wLjU4NDQxMjQsMC41NDk0ODc3LDAuKSxcbnZlYzNmKDAuNjAxNzc5OSwtMC4xNzI2NjU0LDAuKSxcbnZlYzNmKC0wLjU1NTQ5ODEsMC4xNTU5OTk3LDAuKSxcbnZlYzNmKC0wLjMwMTYzNjksLTAuMzkwMDkyOCwwLiksXG52ZWMzZigtMC41NTUwNjMyLC0wLjE3MjM3NjIsMC4pLFxudmVjM2YoMC45MjUwMjksMC4yOTk1MDQxLDAuKSxcbnZlYzNmKC0wLjI0NzMxMzcsMC41NTM4NTA1LDAuKSxcbnZlYzNmKDAuOTE4MzAzNywtMC4yODYyMzkyLDAuKSxcbnZlYzNmKDAuMjQ2OTQyMSwwLjY3MTg3MTIsMC4pLFxudmVjM2YoMC4zOTE2Mzk3LC0wLjQzMjgyMDksMC4pLFxudmVjM2YoLTAuMDM1NzY5MjcsLTAuNjIyMDAzMiwwLiksXG52ZWMzZigtMC4wNDY2MTI1NSwwLjc5OTUyMDEsMC4pLFxudmVjM2YoMC40NDAyOTI0LDAuMzY0MDMxMiwwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLiksXG52ZWMzZigwLilcbik7Y29uc3QgUG9pc3NvblNhbXBsZXJzNjQ6IGFycmF5PHZlYzNmLDY0Pj1hcnJheTx2ZWMzZiw2ND4gKFxudmVjM2YoLTAuNjEzMzkyLDAuNjE3NDgxLDAuKSxcbnZlYzNmKDAuMTcwMDE5LC0wLjA0MDI1NCwwLiksXG52ZWMzZigtMC4yOTk0MTcsMC43OTE5MjUsMC4pLFxudmVjM2YoMC42NDU2ODAsMC40OTMyMTAsMC4pLFxudmVjM2YoLTAuNjUxNzg0LDAuNzE3ODg3LDAuKSxcbnZlYzNmKDAuNDIxMDAzLDAuMDI3MDcwLDAuKSxcbnZlYzNmKC0wLjgxNzE5NCwtMC4yNzEwOTYsMC4pLFxudmVjM2YoLTAuNzA1Mzc0LC0wLjY2ODIwMywwLiksXG52ZWMzZigwLjk3NzA1MCwtMC4xMDg2MTUsMC4pLFxudmVjM2YoMC4wNjMzMjYsMC4xNDIzNjksMC4pLFxudmVjM2YoMC4yMDM1MjgsMC4yMTQzMzEsMC4pLFxudmVjM2YoLTAuNjY3NTMxLDAuMzI2MDkwLDAuKSxcbnZlYzNmKC0wLjA5ODQyMiwtMC4yOTU3NTUsMC4pLFxudmVjM2YoLTAuODg1OTIyLDAuMjE1MzY5LDAuKSxcbnZlYzNmKDAuNTY2NjM3LDAuNjA1MjEzLDAuKSxcbnZlYzNmKDAuMDM5NzY2LC0wLjM5NjEwMCwwLiksXG52ZWMzZigwLjc1MTk0NiwwLjQ1MzM1MiwwLiksXG52ZWMzZigwLjA3ODcwNywtMC43MTUzMjMsMC4pLFxudmVjM2YoLTAuMDc1ODM4LC0wLjUyOTM0NCwwLiksXG52ZWMzZigwLjcyNDQ3OSwtMC41ODA3OTgsMC4pLFxudmVjM2YoMC4yMjI5OTksLTAuMjE1MTI1LDAuKSxcbnZlYzNmKC0wLjQ2NzU3NCwtMC40MDU0MzgsMC4pLFxudmVjM2YoLTAuMjQ4MjY4LC0wLjgxNDc1MywwLiksXG52ZWMzZigwLjM1NDQxMSwtMC44ODc1NzAsMC4pLFxudmVjM2YoMC4xNzU4MTcsMC4zODIzNjYsMC4pLFxudmVjM2YoMC40ODc0NzIsLTAuMDYzMDgyLDAuKSxcbnZlYzNmKC0wLjA4NDA3OCwwLjg5ODMxMiwwLiksXG52ZWMzZigwLjQ4ODg3NiwtMC43ODM0NDEsMC4pLFxudmVjM2YoMC40NzAwMTYsMC4yMTc5MzMsMC4pLFxudmVjM2YoLTAuNjk2ODkwLC0wLjU0OTc5MSwwLiksXG52ZWMzZigtMC4xNDk2OTMsMC42MDU3NjIsMC4pLFxudmVjM2YoMC4wMzQyMTEsMC45Nzk5ODAsMC4pLFxudmVjM2YoMC41MDMwOTgsLTAuMzA4ODc4LDAuKSxcbnZlYzNmKC0wLjAxNjIwNSwtMC44NzI5MjEsMC4pLFxudmVjM2YoMC4zODU3ODQsLTAuMzkzOTAyLDAuKSxcbnZlYzNmKC0wLjE0Njg4NiwtMC44NTkyNDksMC4pLFxudmVjM2YoMC42NDMzNjEsMC4xNjQwOTgsMC4pLFxudmVjM2YoMC42MzQzODgsLTAuMDQ5NDcxLDAuKSxcbnZlYzNmKC0wLjY4ODg5NCwwLjAwNzg0MywwLiksXG52ZWMzZigwLjQ2NDAzNCwtMC4xODg4MTgsMC4pLFxudmVjM2YoLTAuNDQwODQwLDAuMTM3NDg2LDAuKSxcbnZlYzNmKDAuMzY0NDgzLDAuNTExNzA0LDAuKSxcbnZlYzNmKDAuMDM0MDI4LDAuMzI1OTY4LDAuKSxcbnZlYzNmKDAuMDk5MDk0LC0wLjMwODAyMywwLiksXG52ZWMzZigwLjY5Mzk2MCwtMC4zNjYyNTMsMC4pLFxudmVjM2YoMC42Nzg4ODQsLTAuMjA0Njg4LDAuKSxcbnZlYzNmKDAuMDAxODAxLDAuNzgwMzI4LDAuKSxcbnZlYzNmKDAuMTQ1MTc3LC0wLjg5ODk4NCwwLiksXG52ZWMzZigwLjA2MjY1NSwtMC42MTE4NjYsMC4pLFxudmVjM2YoMC4zMTUyMjYsLTAuNjA0Mjk3LDAuKSxcbnZlYzNmKC0wLjc4MDE0NSwwLjQ4NjI1MSwwLiksXG52ZWMzZigtMC4zNzE4NjgsMC44ODIxMzgsMC4pLFxudmVjM2YoMC4yMDA0NzYsMC40OTQ0MzAsMC4pLFxudmVjM2YoLTAuNDk0NTUyLC0wLjcxMTA1MSwwLiksXG52ZWMzZigwLjYxMjQ3NiwwLjcwNTI1MiwwLiksXG52ZWMzZigtMC41Nzg4NDUsLTAuNzY4NzkyLDAuKSxcbnZlYzNmKC0wLjc3MjQ1NCwtMC4wOTA5NzYsMC4pLFxudmVjM2YoMC41MDQ0NDAsMC4zNzIyOTUsMC4pLFxudmVjM2YoMC4xNTU3MzYsMC4wNjUxNTcsMC4pLFxudmVjM2YoMC4zOTE1MjIsMC44NDk2MDUsMC4pLFxudmVjM2YoLTAuNjIwMTA2LC0wLjMyODEwNCwwLiksXG52ZWMzZigwLjc4OTIzOSwtMC40MTk5NjUsMC4pLFxudmVjM2YoLTAuNTQ1Mzk2LDAuNTM4MTMzLDAuKSxcbnZlYzNmKC0wLjE3ODU2NCwtMC41OTYwNTcsMC4pXG4pO2ZuIGNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUyhsYXllcjogaTMyLHZQb3NpdGlvbkZyb21MaWdodDogdmVjNGYsZGVwdGhNZXRyaWM6IGYzMixkZXB0aFRleHR1cmU6IHRleHR1cmVfMmRfYXJyYXk8ZjMyPixkZXB0aFNhbXBsZXI6IHNhbXBsZXIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZF9hcnJheSxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUludmVyc2U6IGYzMixsaWdodFNpemVVVjogZjMyLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIsc2VhcmNoVGFwQ291bnQ6IGkzMixwY2ZUYXBDb3VudDogaTMyLHBvaXNzb25TYW1wbGVyczogYXJyYXk8dmVjM2YsNjQ+LGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbjogdmVjMmYsZGVwdGhDb3JyZWN0aW9uOiBmMzIscGVudW1icmFEYXJrbmVzczogZjMyKS0+ZjMyXG57dmFyIGNsaXBTcGFjZTogdmVjM2Y9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2YXIgdXZEZXB0aDogdmVjM2Y9IHZlYzNmKDAuNSpjbGlwU3BhY2UueHl6KyB2ZWMzZigwLjUpKTt1dkRlcHRoLno9Y2xhbXAoZ2V0WkluQ2xpcChjbGlwU3BhY2UsdXZEZXB0aCksMC4sR1JFQVRFU1RfTEVTU19USEFOX09ORSk7dmFyIHV2RGVwdGhMYXllcjogdmVjNGY9IHZlYzRmKHV2RGVwdGgueCx1dkRlcHRoLnksZjMyKGxheWVyKSx1dkRlcHRoLnopO3ZhciBibG9ja2VyRGVwdGg6IGYzMj0wLjA7dmFyIHN1bUJsb2NrZXJEZXB0aDogZjMyPTAuMDt2YXIgbnVtQmxvY2tlcjogZjMyPTAuMDtmb3IgKHZhciBpOiBpMzI9MDsgaTxzZWFyY2hUYXBDb3VudDsgaSArKykge2Jsb2NrZXJEZXB0aD10ZXh0dXJlU2FtcGxlKGRlcHRoVGV4dHVyZSxkZXB0aFNhbXBsZXIsIHV2RGVwdGgueHkrKGxpZ2h0U2l6ZVVWKmxpZ2h0U2l6ZVVWQ29ycmVjdGlvbipzaGFkb3dNYXBTaXplSW52ZXJzZSpQb2lzc29uU2FtcGxlcnMzMltpXS54eSksbGF5ZXIpLnI7bnVtQmxvY2tlcis9c2VsZWN0KDAuLDEuLGJsb2NrZXJEZXB0aDxkZXB0aE1ldHJpYyk7c3VtQmxvY2tlckRlcHRoKz1zZWxlY3QoMC4sYmxvY2tlckRlcHRoLGJsb2NrZXJEZXB0aDxkZXB0aE1ldHJpYyk7fVxudmFyIGF2Z0Jsb2NrZXJEZXB0aDogZjMyPXN1bUJsb2NrZXJEZXB0aC9udW1CbG9ja2VyO3ZhciBBQU9mZnNldDogZjMyPXNoYWRvd01hcFNpemVJbnZlcnNlKjEwLjt2YXIgcGVudW1icmFSYXRpbzogZjMyPSgoZGVwdGhNZXRyaWMtYXZnQmxvY2tlckRlcHRoKSpkZXB0aENvcnJlY3Rpb24rQUFPZmZzZXQpO3ZhciBmaWx0ZXJSYWRpdXM6IHZlYzRmPSB2ZWM0ZihwZW51bWJyYVJhdGlvKmxpZ2h0U2l6ZVVWKmxpZ2h0U2l6ZVVWQ29ycmVjdGlvbipzaGFkb3dNYXBTaXplSW52ZXJzZSwwLiwwLik7dmFyIHJhbmRvbTogZjMyPWdldFJhbmQodlBvc2l0aW9uRnJvbUxpZ2h0Lnh5KTt2YXIgcm90YXRpb25BbmdsZTogZjMyPXJhbmRvbSozLjE0MTU5MjY7dmFyIHJvdGF0aW9uVmVjdG9yOiB2ZWMyZj0gdmVjMmYoY29zKHJvdGF0aW9uQW5nbGUpLHNpbihyb3RhdGlvbkFuZ2xlKSk7dmFyIHNoYWRvdzogZjMyPTAuO2ZvciAodmFyIGk6IGkzMj0wOyBpPHBjZlRhcENvdW50OyBpKyspIHt2YXIgb2Zmc2V0OiB2ZWM0Zj0gdmVjNGYocG9pc3NvblNhbXBsZXJzW2ldLDAuKTtvZmZzZXQ9IHZlYzRmKG9mZnNldC54KnJvdGF0aW9uVmVjdG9yLngtb2Zmc2V0Lnkqcm90YXRpb25WZWN0b3IueSxvZmZzZXQueSpyb3RhdGlvblZlY3Rvci54K29mZnNldC54KnJvdGF0aW9uVmVjdG9yLnksMC4sMC4pO2xldCBjb29yZHM9dXZEZXB0aExheWVyK29mZnNldCpmaWx0ZXJSYWRpdXM7c2hhZG93Kz10ZXh0dXJlU2FtcGxlQ29tcGFyZShzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsY29vcmRzLnh5LGkzMihjb29yZHMueiksY29vcmRzLncpO31cbnNoYWRvdy89IGYzMihwY2ZUYXBDb3VudCk7c2hhZG93PW1peChzaGFkb3csMS4sbWluKChkZXB0aE1ldHJpYy1hdmdCbG9ja2VyRGVwdGgpKmRlcHRoQ29ycmVjdGlvbipwZW51bWJyYURhcmtuZXNzLDEuKSk7c2hhZG93PW1peChkYXJrbmVzcywxLixzaGFkb3cpO3JldHVybiBzZWxlY3QoY29tcHV0ZUZhbGxPZmYoc2hhZG93LGNsaXBTcGFjZS54eSxmcnVzdHVtRWRnZUZhbGxvZmYpLDEuMCxudW1CbG9ja2VyPDEuMCk7fVxuZm4gY29tcHV0ZVNoYWRvd1dpdGhQQ1NTKHZQb3NpdGlvbkZyb21MaWdodDogdmVjNGYsZGVwdGhNZXRyaWM6IGYzMixkZXB0aFRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixkZXB0aFNhbXBsZXI6IHNhbXBsZXIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZCxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUludmVyc2U6IGYzMixsaWdodFNpemVVVjogZjMyLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIsc2VhcmNoVGFwQ291bnQ6IGkzMixwY2ZUYXBDb3VudDogaTMyLHBvaXNzb25TYW1wbGVyczogYXJyYXk8dmVjM2YsNjQ+KS0+ZjMyXG57dmFyIGNsaXBTcGFjZTogdmVjM2Y9dlBvc2l0aW9uRnJvbUxpZ2h0Lnh5ei92UG9zaXRpb25Gcm9tTGlnaHQudzt2YXIgdXZEZXB0aDogdmVjM2Y9IHZlYzNmKDAuNSpjbGlwU3BhY2UueHl6KyB2ZWMzZigwLjUpKTt1dkRlcHRoLno9Z2V0WkluQ2xpcChjbGlwU3BhY2UsdXZEZXB0aCk7aWYgKGRlcHRoTWV0cmljPDAuMCB8fCBkZXB0aE1ldHJpYz4xLjAgfHwgdXZEZXB0aC54PDAuIHx8IHV2RGVwdGgueD4xLjAgfHwgdXZEZXB0aC55PDAuIHx8IHV2RGVwdGgueT4xLjApIHtyZXR1cm4gMS4wO31cbnZhciBibG9ja2VyRGVwdGg6IGYzMj0wLjA7dmFyIHN1bUJsb2NrZXJEZXB0aDogZjMyPTAuMDt2YXIgbnVtQmxvY2tlcjogZjMyPTAuMDtmb3IgKHZhciBpOiBpMzI9MDsgaTxzZWFyY2hUYXBDb3VudDsgaSArKykge2Jsb2NrZXJEZXB0aD10ZXh0dXJlU2FtcGxlTGV2ZWwoZGVwdGhUZXh0dXJlLGRlcHRoU2FtcGxlcix1dkRlcHRoLnh5KyhsaWdodFNpemVVVipzaGFkb3dNYXBTaXplSW52ZXJzZSpQb2lzc29uU2FtcGxlcnMzMltpXS54eSksMCkucjtudW1CbG9ja2VyKz1zZWxlY3QoMC4sMS4sYmxvY2tlckRlcHRoPGRlcHRoTWV0cmljKTtzdW1CbG9ja2VyRGVwdGgrPXNlbGVjdCgwLixibG9ja2VyRGVwdGgsYmxvY2tlckRlcHRoPGRlcHRoTWV0cmljKTt9XG5pZiAobnVtQmxvY2tlcjwxLjApIHtyZXR1cm4gMS4wO31cbnZhciBhdmdCbG9ja2VyRGVwdGg6IGYzMj1zdW1CbG9ja2VyRGVwdGgvbnVtQmxvY2tlcjt2YXIgQUFPZmZzZXQ6IGYzMj1zaGFkb3dNYXBTaXplSW52ZXJzZSoxMC47dmFyIHBlbnVtYnJhUmF0aW86IGYzMj0oKGRlcHRoTWV0cmljLWF2Z0Jsb2NrZXJEZXB0aCkrQUFPZmZzZXQpO3ZhciBmaWx0ZXJSYWRpdXM6IGYzMj1wZW51bWJyYVJhdGlvKmxpZ2h0U2l6ZVVWKnNoYWRvd01hcFNpemVJbnZlcnNlO3ZhciByYW5kb206IGYzMj1nZXRSYW5kKHZQb3NpdGlvbkZyb21MaWdodC54eSk7dmFyIHJvdGF0aW9uQW5nbGU6IGYzMj1yYW5kb20qMy4xNDE1OTI2O3ZhciByb3RhdGlvblZlY3RvcjogdmVjMmY9IHZlYzJmKGNvcyhyb3RhdGlvbkFuZ2xlKSxzaW4ocm90YXRpb25BbmdsZSkpO3ZhciBzaGFkb3c6IGYzMj0wLjtmb3IgKHZhciBpOiBpMzI9MDsgaTxwY2ZUYXBDb3VudDsgaSsrKSB7dmFyIG9mZnNldDogdmVjM2Y9cG9pc3NvblNhbXBsZXJzW2ldO29mZnNldD0gdmVjM2Yob2Zmc2V0Lngqcm90YXRpb25WZWN0b3IueC1vZmZzZXQueSpyb3RhdGlvblZlY3Rvci55LG9mZnNldC55KnJvdGF0aW9uVmVjdG9yLngrb2Zmc2V0Lngqcm90YXRpb25WZWN0b3IueSwwLik7bGV0IGNvb3Jkcz11dkRlcHRoK29mZnNldCpmaWx0ZXJSYWRpdXM7c2hhZG93Kz10ZXh0dXJlU2FtcGxlQ29tcGFyZUxldmVsKHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixjb29yZHMueHksY29vcmRzLnopO31cbnNoYWRvdy89IGYzMihwY2ZUYXBDb3VudCk7c2hhZG93PW1peChzaGFkb3csMS4sZGVwdGhNZXRyaWMtYXZnQmxvY2tlckRlcHRoKTtzaGFkb3c9bWl4KGRhcmtuZXNzLDEuLHNoYWRvdyk7cmV0dXJuIGNvbXB1dGVGYWxsT2ZmKHNoYWRvdyxjbGlwU3BhY2UueHksZnJ1c3R1bUVkZ2VGYWxsb2ZmKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aFBDU1MxNih2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsZGVwdGhUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4sZGVwdGhTYW1wbGVyOiBzYW1wbGVyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmQsc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLHNoYWRvd01hcFNpemVJbnZlcnNlOiBmMzIsbGlnaHRTaXplVVY6IGYzMixkYXJrbmVzczogZjMyLGZydXN0dW1FZGdlRmFsbG9mZjogZjMyKS0+ZjMyXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhUZXh0dXJlLGRlcHRoU2FtcGxlcixzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDE2LDE2LFBvaXNzb25TYW1wbGVyczMyKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aFBDU1MzMih2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsZGVwdGhUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4sZGVwdGhTYW1wbGVyOiBzYW1wbGVyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmQsc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLHNoYWRvd01hcFNpemVJbnZlcnNlOiBmMzIsbGlnaHRTaXplVVY6IGYzMixkYXJrbmVzczogZjMyLGZydXN0dW1FZGdlRmFsbG9mZjogZjMyKS0+ZjMyXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhUZXh0dXJlLGRlcHRoU2FtcGxlcixzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDE2LDMyLFBvaXNzb25TYW1wbGVyczMyKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aFBDU1M2NCh2UG9zaXRpb25Gcm9tTGlnaHQ6IHZlYzRmLGRlcHRoTWV0cmljOiBmMzIsZGVwdGhUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4sZGVwdGhTYW1wbGVyOiBzYW1wbGVyLHNoYWRvd1RleHR1cmU6IHRleHR1cmVfZGVwdGhfMmQsc2hhZG93U2FtcGxlcjogc2FtcGxlcl9jb21wYXJpc29uLHNoYWRvd01hcFNpemVJbnZlcnNlOiBmMzIsbGlnaHRTaXplVVY6IGYzMixkYXJrbmVzczogZjMyLGZydXN0dW1FZGdlRmFsbG9mZjogZjMyKS0+ZjMyXG57cmV0dXJuIGNvbXB1dGVTaGFkb3dXaXRoUENTUyh2UG9zaXRpb25Gcm9tTGlnaHQsZGVwdGhNZXRyaWMsZGVwdGhUZXh0dXJlLGRlcHRoU2FtcGxlcixzaGFkb3dUZXh0dXJlLHNoYWRvd1NhbXBsZXIsc2hhZG93TWFwU2l6ZUludmVyc2UsbGlnaHRTaXplVVYsZGFya25lc3MsZnJ1c3R1bUVkZ2VGYWxsb2ZmLDMyLDY0LFBvaXNzb25TYW1wbGVyczY0KTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aENTTVBDU1MxNihsYXllcjogaTMyLHZQb3NpdGlvbkZyb21MaWdodDogdmVjNGYsZGVwdGhNZXRyaWM6IGYzMixkZXB0aFRleHR1cmU6IHRleHR1cmVfMmRfYXJyYXk8ZjMyPixkZXB0aFNhbXBsZXI6IHNhbXBsZXIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZF9hcnJheSxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUludmVyc2U6IGYzMixsaWdodFNpemVVVjogZjMyLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIsbGlnaHRTaXplVVZDb3JyZWN0aW9uOiB2ZWMyZixkZXB0aENvcnJlY3Rpb246IGYzMixwZW51bWJyYURhcmtuZXNzOiBmMzIpLT5mMzJcbntyZXR1cm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTKGxheWVyLHZQb3NpdGlvbkZyb21MaWdodCxkZXB0aE1ldHJpYyxkZXB0aFRleHR1cmUsZGVwdGhTYW1wbGVyLHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixzaGFkb3dNYXBTaXplSW52ZXJzZSxsaWdodFNpemVVVixkYXJrbmVzcyxmcnVzdHVtRWRnZUZhbGxvZmYsMTYsMTYsUG9pc3NvblNhbXBsZXJzMzIsbGlnaHRTaXplVVZDb3JyZWN0aW9uLGRlcHRoQ29ycmVjdGlvbixwZW51bWJyYURhcmtuZXNzKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aENTTVBDU1MzMihsYXllcjogaTMyLHZQb3NpdGlvbkZyb21MaWdodDogdmVjNGYsZGVwdGhNZXRyaWM6IGYzMixkZXB0aFRleHR1cmU6IHRleHR1cmVfMmRfYXJyYXk8ZjMyPixkZXB0aFNhbXBsZXI6IHNhbXBsZXIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZF9hcnJheSxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUludmVyc2U6IGYzMixsaWdodFNpemVVVjogZjMyLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIsbGlnaHRTaXplVVZDb3JyZWN0aW9uOiB2ZWMyZixkZXB0aENvcnJlY3Rpb246IGYzMixwZW51bWJyYURhcmtuZXNzOiBmMzIpLT5mMzJcbntyZXR1cm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTKGxheWVyLHZQb3NpdGlvbkZyb21MaWdodCxkZXB0aE1ldHJpYyxkZXB0aFRleHR1cmUsZGVwdGhTYW1wbGVyLHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixzaGFkb3dNYXBTaXplSW52ZXJzZSxsaWdodFNpemVVVixkYXJrbmVzcyxmcnVzdHVtRWRnZUZhbGxvZmYsMTYsMzIsUG9pc3NvblNhbXBsZXJzMzIsbGlnaHRTaXplVVZDb3JyZWN0aW9uLGRlcHRoQ29ycmVjdGlvbixwZW51bWJyYURhcmtuZXNzKTt9XG5mbiBjb21wdXRlU2hhZG93V2l0aENTTVBDU1M2NChsYXllcjogaTMyLHZQb3NpdGlvbkZyb21MaWdodDogdmVjNGYsZGVwdGhNZXRyaWM6IGYzMixkZXB0aFRleHR1cmU6IHRleHR1cmVfMmRfYXJyYXk8ZjMyPixkZXB0aFNhbXBsZXI6IHNhbXBsZXIsc2hhZG93VGV4dHVyZTogdGV4dHVyZV9kZXB0aF8yZF9hcnJheSxzaGFkb3dTYW1wbGVyOiBzYW1wbGVyX2NvbXBhcmlzb24sc2hhZG93TWFwU2l6ZUludmVyc2U6IGYzMixsaWdodFNpemVVVjogZjMyLGRhcmtuZXNzOiBmMzIsZnJ1c3R1bUVkZ2VGYWxsb2ZmOiBmMzIsbGlnaHRTaXplVVZDb3JyZWN0aW9uOiB2ZWMyZixkZXB0aENvcnJlY3Rpb246IGYzMixwZW51bWJyYURhcmtuZXNzOiBmMzIpLT5mMzJcbntyZXR1cm4gY29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTKGxheWVyLHZQb3NpdGlvbkZyb21MaWdodCxkZXB0aE1ldHJpYyxkZXB0aFRleHR1cmUsZGVwdGhTYW1wbGVyLHNoYWRvd1RleHR1cmUsc2hhZG93U2FtcGxlcixzaGFkb3dNYXBTaXplSW52ZXJzZSxsaWdodFNpemVVVixkYXJrbmVzcyxmcnVzdHVtRWRnZUZhbGxvZmYsMzIsNjQsUG9pc3NvblNhbXBsZXJzNjQsbGlnaHRTaXplVVZDb3JyZWN0aW9uLGRlcHRoQ29ycmVjdGlvbixwZW51bWJyYURhcmtuZXNzKTt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=