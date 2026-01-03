"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_background_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundUboDeclarationWGSL: () => (/* binding */ backgroundUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "backgroundUboDeclaration";
const shader = `uniform vPrimaryColor: vec4f;uniform vPrimaryColorShadow: vec4f;uniform vDiffuseInfos : vec2f;uniform diffuseMatrix : mat4x4f;uniform fFovMultiplier: f32;uniform pointSize: f32;uniform shadowLevel: f32;uniform alpha: f32;uniform vBackgroundCenter: vec3f;uniform vReflectionControl: vec4f;uniform projectedGroundInfos: vec2f;uniform vReflectionInfos : vec2f;uniform reflectionMatrix : mat4x4f;uniform vReflectionMicrosurfaceInfos : vec3f;
#include<sceneUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const backgroundUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/intersectionFunctions.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/intersectionFunctions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectionFunctionsWGSL: () => (/* binding */ intersectionFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "intersectionFunctions";
const shader = `fn diskIntersectWithBackFaceCulling(ro: vec3f,rd: vec3f,c: vec3f,r: f32)->f32 {var d: f32=rd.y;if(d>0.0) { return 1e6; }
var o: vec3f=ro-c;var t: f32=-o.y/d;var q: vec3f=o+rd*t;return select(1e6,t,(dot(q,q)<r*r));}
fn sphereIntersect(ro: vec3f,rd: vec3f,ce: vec3f,ra: f32)->vec2f {var oc: vec3f=ro-ce;var b: f32=dot(oc,rd);var c: f32=dot(oc,oc)-ra*ra;var h: f32=b*b-c;if(h<0.0) { return vec2f(-1.,-1.); }
h=sqrt(h);return vec2f(-b+h,-b-h);}
fn sphereIntersectFromOrigin(ro: vec3f,rd: vec3f,ra: f32)->vec2f {var b: f32=dot(ro,rd);var c: f32=dot(ro,ro)-ra*ra;var h: f32=b*b-c;if(h<0.0) { return vec2f(-1.,-1.); }
h=sqrt(h);return vec2f(-b+h,-b-h);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const intersectionFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js":
/*!**************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightsFragmentFunctionsWGSL: () => (/* binding */ lightsFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ltcHelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ltcHelperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/ltcHelperFunctions.js");
/* harmony import */ var _clusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clusteredLightingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "lightsFragmentFunctions";
const shader = `struct lightingInfo
{diffuse: vec3f,
#ifdef SPECULARTERM
specular: vec3f,
#endif
#ifdef NDOTL
ndl: f32,
#endif
};fn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;var lightVectorW: vec3f;var attenuation: f32=1.0;if (lightData.w==0.)
{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;attenuation=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn getAttenuation(cosAngle: f32,exponent: f32)->f32 {return max(0.,pow(cosAngle,exponent));}
fn getIESAttenuation(cosAngle: f32,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->f32 {var angle=acos(cosAngle)/PI;return textureSampleLevel(iesLightTexture,iesLightTextureSampler,vec2f(angle,0),0.).r;}
fn computeBasicSpotLighting(viewDirectionW: vec3f,lightVectorW: vec3f,vNormal: vec3f,attenuation: f32,diffuseColor: vec3f,specularColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn computeIESSpotLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->lightingInfo {var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var dotProduct=dot(lightDirection.xyz,-lightVectorW);var cosAngle: f32=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{attenuation*=getIESAttenuation(dotProduct,iesLightTexture,iesLightTextureSampler);return computeBasicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
var result: lightingInfo;result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeSpotLighting(viewDirectionW: vec3f,vNormal: vec3f ,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var cosAngle: f32=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{attenuation*=getAttenuation(cosAngle,lightData.w);return computeBasicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
var result: lightingInfo;result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeHemisphericLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,groundColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightData.xyz);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
fn computeProjectionTextureDiffuseLighting(projectionLightTexture: texture_2d<f32>,projectionLightSampler: sampler,textureProjectionMatrix: mat4x4f,posW: vec3f)->vec3f {var strq: vec4f=textureProjectionMatrix*vec4f(posW,1.0);strq/=strq.w;var textureColor: vec3f=textureSample(projectionLightTexture,projectionLightSampler,strq.xy).rgb;return textureColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
var areaLightsLTC1SamplerSampler: sampler;var areaLightsLTC1Sampler: texture_2d<f32>;var areaLightsLTC2SamplerSampler: sampler;var areaLightsLTC2Sampler: texture_2d<f32>;fn computeAreaLighting(ltc1: texture_2d<f32>,ltc1Sampler:sampler,ltc2:texture_2d<f32>,ltc2Sampler:sampler,viewDirectionW: vec3f,vNormal:vec3f,vPosition:vec3f,lightPosition:vec3f,halfWidth:vec3f, halfHeight:vec3f,diffuseColor:vec3f,specularColor:vec3f,roughness:f32 )->lightingInfo
{var result: lightingInfo;var data: areaLightData=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc1Sampler,ltc2,ltc2Sampler,viewDirectionW,vNormal,vPosition,lightPosition,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
var fresnel:vec3f=( specularColor*data.Fresnel.x+( vec3f( 1.0 )-specularColor )*data.Fresnel.y );result.specular+=specularColor*fresnel*data.Specular;
#endif
result.diffuse+=diffuseColor*data.Diffuse;return result;}
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
#include<clusteredLightingFunctions>
fn computeClusteredLighting(
lightDataTexture: texture_2d<f32>,
tileMaskBuffer: ptr<storage,array<u32>>,
viewDirectionW: vec3f,
vNormal: vec3f,
lightData: vec4f,
sliceRange: vec2u,
glossiness: f32
)->lightingInfo {var result: lightingInfo;let tilePosition=vec2u(fragmentInputs.position.xy*lightData.xy);let maskResolution=vec2u(lightData.zw);var tileIndex=(tilePosition.x*maskResolution.x+tilePosition.y)*maskResolution.y;let batchRange=sliceRange/CLUSTLIGHT_BATCH;var batchOffset=batchRange.x*CLUSTLIGHT_BATCH;tileIndex+=batchRange.x;for (var i=batchRange.x; i<=batchRange.y; i+=1) {var mask=tileMaskBuffer[tileIndex];tileIndex+=1;let maskOffset=max(sliceRange.x,batchOffset)-batchOffset; 
let maskWidth=min(sliceRange.y-batchOffset+1,CLUSTLIGHT_BATCH);mask=extractBits(mask,maskOffset,maskWidth);while mask != 0 {let trailing=firstTrailingBit(mask);mask ^= 1u<<trailing;let light=getClusteredLight(lightDataTexture,batchOffset+maskOffset+trailing);var info: lightingInfo;if light.vLightDirection.w<0.0 {info=computeLighting(viewDirectionW,vNormal,light.vLightData,light.vLightDiffuse.rgb,light.vLightSpecular.rgb,light.vLightDiffuse.a,glossiness);} else {info=computeSpotLighting(viewDirectionW,vNormal,light.vLightData,light.vLightDirection,light.vLightDiffuse.rgb,light.vLightSpecular.rgb,light.vLightDiffuse.a,glossiness);}
result.diffuse+=info.diffuse;
#ifdef SPECULARTERM
result.specular+=info.specular;
#endif
}
batchOffset+=CLUSTLIGHT_BATCH;}
return result;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const lightsFragmentFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/background.fragment.js":
/*!*******************************************************!*\
  !*** ../core/dist/ShadersWGSL/background.fragment.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundPixelShaderWGSL: () => (/* binding */ backgroundPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_backgroundUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/backgroundUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/ShadersWGSL/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_lightsFragmentFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/lightsFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/shadowsFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_intersectionFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/intersectionFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/intersectionFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/lightFragment */ "../core/dist/ShadersWGSL/ShadersInclude/lightFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

















const name = "backgroundPixelShader";
const shader = `#include<backgroundUboDeclaration>
#include<helperFunctions>
varying vPositionW: vec3f;
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif 
#ifdef MAINUV2 
varying vMainUV2: vec2f; 
#endif 
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vDiffuseUV: vec2f;
#endif
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE;
#endif
#ifndef SHADOWONLY
#define SHADOWONLY;
#endif
#include<imageProcessingDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
fn fresnelSchlickEnvironmentGGX(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
fn project(viewDirectionW: vec3f,eyePosition: vec3f)->vec3f {var radius: f32=uniforms.projectedGroundInfos.x;var height: f32=uniforms.projectedGroundInfos.y;var camDir: vec3f=-viewDirectionW;var skySphereDistance: f32=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;var skySpherePositionW: vec3f=eyePosition+camDir*skySphereDistance;var p: vec3f=normalize(skySpherePositionW);var upEyePosition=vec3f(eyePosition.x,eyePosition.y-height,eyePosition.z);var sIntersection: f32=sphereIntersectFromOrigin(upEyePosition,p,radius).x;var h: vec3f= vec3f(0.0,-height,0.0);var dIntersection: f32=diskIntersectWithBackFaceCulling(upEyePosition,p,h,radius);p=(upEyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(0.0,1.0,0.0);
#endif
var shadow: f32=1.;var globalShadow: f32=0.;var shadowLightCount: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
var reflectionColor: vec4f= vec4f(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
var reflectionVector: vec3f=project(viewDirectionW,scene.vEyePosition.xyz);reflectionVector= (uniforms.reflectionMatrix*vec4f(reflectionVector,1.)).xyz;
#else
var reflectionVector: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f=reflectionVector;
#else
var reflectionCoords: vec2f=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
var reflectionLOD: f32=uniforms.vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(uniforms.vReflectionMicrosurfaceInfos.x)*uniforms.vReflectionMicrosurfaceInfos.y+uniforms.vReflectionMicrosurfaceInfos.z;reflectionColor=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#else
var lodReflectionNormalized: f32=saturate(reflectionLOD);var lodReflectionNormalizedDoubled: f32=lodReflectionNormalized*2.0;var reflectionSpecularMid: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
textureSample(reflectionrHighSampler,reflectionrHighSamplerSampler,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
textureSample(reflectionLowSampler,reflectionLowSamplerSampler,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
var reflectionSample: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor).rgb,reflectionColor.a);
#endif
#ifdef GAMMAREFLECTION
reflectionColor=vec4f(toLinearSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
#ifdef REFLECTIONBGR
reflectionColor=vec4f(reflectionColor.bgr,reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#endif
var diffuseColor: vec3f= vec3f(1.,1.,1.);var finalAlpha: f32=uniforms.alpha;
#ifdef DIFFUSE
var diffuseMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap=vec4f(toLinearSpaceVec3(diffuseMap.rgb),diffuseMap.a);
#endif
diffuseMap=vec4f(diffuseMap.rgb *uniforms.vDiffuseInfos.y,diffuseMap.a);
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
var colorBase: vec3f=diffuseColor;
#else
var colorBase: vec3f=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,vec3f(0.0));
#ifdef USERGBCOLOR
var finalColor: vec3f=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
var mainColor: vec3f=mix(uniforms.vPrimaryColorShadow.rgb,uniforms.vPrimaryColor.rgb,colorBase);
#else
var mainColor: vec3f=uniforms.vPrimaryColor.rgb;
#endif
var finalColor: vec3f=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
var reflectionAmount: vec3f=uniforms.vReflectionControl.xxx;var reflectionReflectance0: vec3f=uniforms.vReflectionControl.yyy;var reflectionReflectance90: vec3f=uniforms.vReflectionControl.zzz;var VdotN: f32=dot(normalize(scene.vEyePosition.xyz),normalW);var planarReflectionFresnel: vec3f=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
var reflectionDistanceFalloff: f32=1.0-saturate(length(vPositionW.xyz-uniforms.vBackgroundCenter)*uniforms.vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturateVec3(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
var viewAngleToFloor: f32=dot(normalW,normalize(scene.vEyePosition.xyz-uniforms.vBackgroundCenter));const startAngle: f32=0.1;var fadeFactor: f32=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*uniforms.shadowLevel,finalColor,globalShadow);
#endif
var color: vec4f= vec4f(finalColor,finalAlpha);
#else
var color: vec4f= vec4f(uniforms.vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*uniforms.alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color=vec4f(clamp(color.rgb,vec3f(0.),vec3f(30.0)),color.a);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb *color.a,color.a);
#endif
#ifdef NOISE
color=vec4f(color.rgb+dither(fragmentInputs.vPositionW.xy,0.5),color.a);color=max(color,vec4f(0.0));
#endif
fragmentOutputs.color=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const backgroundPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2JhY2tncm91bmRfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2JhY2tncm91bmRVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2ludGVyc2VjdGlvbkZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvYmFja2dyb3VuZC5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2NlbmVVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJiYWNrZ3JvdW5kVWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB1bmlmb3JtIHZQcmltYXJ5Q29sb3I6IHZlYzRmO3VuaWZvcm0gdlByaW1hcnlDb2xvclNoYWRvdzogdmVjNGY7dW5pZm9ybSB2RGlmZnVzZUluZm9zIDogdmVjMmY7dW5pZm9ybSBkaWZmdXNlTWF0cml4IDogbWF0NHg0Zjt1bmlmb3JtIGZGb3ZNdWx0aXBsaWVyOiBmMzI7dW5pZm9ybSBwb2ludFNpemU6IGYzMjt1bmlmb3JtIHNoYWRvd0xldmVsOiBmMzI7dW5pZm9ybSBhbHBoYTogZjMyO3VuaWZvcm0gdkJhY2tncm91bmRDZW50ZXI6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Db250cm9sOiB2ZWM0Zjt1bmlmb3JtIHByb2plY3RlZEdyb3VuZEluZm9zOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aW9uSW5mb3MgOiB2ZWMyZjt1bmlmb3JtIHJlZmxlY3Rpb25NYXRyaXggOiBtYXQ0eDRmO3VuaWZvcm0gdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcyA6IHZlYzNmO1xuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kVWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJpbnRlcnNlY3Rpb25GdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGBmbiBkaXNrSW50ZXJzZWN0V2l0aEJhY2tGYWNlQ3VsbGluZyhybzogdmVjM2YscmQ6IHZlYzNmLGM6IHZlYzNmLHI6IGYzMiktPmYzMiB7dmFyIGQ6IGYzMj1yZC55O2lmKGQ+MC4wKSB7IHJldHVybiAxZTY7IH1cbnZhciBvOiB2ZWMzZj1yby1jO3ZhciB0OiBmMzI9LW8ueS9kO3ZhciBxOiB2ZWMzZj1vK3JkKnQ7cmV0dXJuIHNlbGVjdCgxZTYsdCwoZG90KHEscSk8cipyKSk7fVxuZm4gc3BoZXJlSW50ZXJzZWN0KHJvOiB2ZWMzZixyZDogdmVjM2YsY2U6IHZlYzNmLHJhOiBmMzIpLT52ZWMyZiB7dmFyIG9jOiB2ZWMzZj1yby1jZTt2YXIgYjogZjMyPWRvdChvYyxyZCk7dmFyIGM6IGYzMj1kb3Qob2Msb2MpLXJhKnJhO3ZhciBoOiBmMzI9YipiLWM7aWYoaDwwLjApIHsgcmV0dXJuIHZlYzJmKC0xLiwtMS4pOyB9XG5oPXNxcnQoaCk7cmV0dXJuIHZlYzJmKC1iK2gsLWItaCk7fVxuZm4gc3BoZXJlSW50ZXJzZWN0RnJvbU9yaWdpbihybzogdmVjM2YscmQ6IHZlYzNmLHJhOiBmMzIpLT52ZWMyZiB7dmFyIGI6IGYzMj1kb3Qocm8scmQpO3ZhciBjOiBmMzI9ZG90KHJvLHJvKS1yYSpyYTt2YXIgaDogZjMyPWIqYi1jO2lmKGg8MC4wKSB7IHJldHVybiB2ZWMyZigtMS4sLTEuKTsgfVxuaD1zcXJ0KGgpO3JldHVybiB2ZWMyZigtYitoLC1iLWgpO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaW50ZXJzZWN0aW9uRnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vbHRjSGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGxpZ2h0aW5nSW5mb1xue2RpZmZ1c2U6IHZlYzNmLFxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuc3BlY3VsYXI6IHZlYzNmLFxuI2VuZGlmXG4jaWZkZWYgTkRPVExcbm5kbDogZjMyLFxuI2VuZGlmXG59O2ZuIGNvbXB1dGVMaWdodGluZyh2aWV3RGlyZWN0aW9uVzogdmVjM2Ysdk5vcm1hbDogdmVjM2YsbGlnaHREYXRhOiB2ZWM0ZixkaWZmdXNlQ29sb3I6IHZlYzNmLHNwZWN1bGFyQ29sb3I6IHZlYzNmLHJhbmdlOiBmMzIsZ2xvc3NpbmVzczogZjMyKS0+bGlnaHRpbmdJbmZvIHt2YXIgcmVzdWx0OiBsaWdodGluZ0luZm87dmFyIGxpZ2h0VmVjdG9yVzogdmVjM2Y7dmFyIGF0dGVudWF0aW9uOiBmMzI9MS4wO2lmIChsaWdodERhdGEudz09MC4pXG57dmFyIGRpcmVjdGlvbjogdmVjM2Y9bGlnaHREYXRhLnh5ei1mcmFnbWVudElucHV0cy52UG9zaXRpb25XO2F0dGVudWF0aW9uPW1heCgwLiwxLjAtbGVuZ3RoKGRpcmVjdGlvbikvcmFuZ2UpO2xpZ2h0VmVjdG9yVz1ub3JtYWxpemUoZGlyZWN0aW9uKTt9XG5lbHNlXG57bGlnaHRWZWN0b3JXPW5vcm1hbGl6ZSgtbGlnaHREYXRhLnh5eik7fVxudmFyIG5kbDogZjMyPW1heCgwLixkb3Qodk5vcm1hbCxsaWdodFZlY3RvclcpKTtcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD1uZGw7XG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlPW5kbCpkaWZmdXNlQ29sb3IqYXR0ZW51YXRpb247XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgYW5nbGVXOiB2ZWMzZj1ub3JtYWxpemUodmlld0RpcmVjdGlvblcrbGlnaHRWZWN0b3JXKTt2YXIgc3BlY0NvbXA6IGYzMj1tYXgoMC4sZG90KHZOb3JtYWwsYW5nbGVXKSk7c3BlY0NvbXA9cG93KHNwZWNDb21wLG1heCgxLixnbG9zc2luZXNzKSk7cmVzdWx0LnNwZWN1bGFyPXNwZWNDb21wKnNwZWN1bGFyQ29sb3IqYXR0ZW51YXRpb247XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxuZm4gZ2V0QXR0ZW51YXRpb24oY29zQW5nbGU6IGYzMixleHBvbmVudDogZjMyKS0+ZjMyIHtyZXR1cm4gbWF4KDAuLHBvdyhjb3NBbmdsZSxleHBvbmVudCkpO31cbmZuIGdldElFU0F0dGVudWF0aW9uKGNvc0FuZ2xlOiBmMzIsaWVzTGlnaHRUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4saWVzTGlnaHRUZXh0dXJlU2FtcGxlcjogc2FtcGxlciktPmYzMiB7dmFyIGFuZ2xlPWFjb3MoY29zQW5nbGUpL1BJO3JldHVybiB0ZXh0dXJlU2FtcGxlTGV2ZWwoaWVzTGlnaHRUZXh0dXJlLGllc0xpZ2h0VGV4dHVyZVNhbXBsZXIsdmVjMmYoYW5nbGUsMCksMC4pLnI7fVxuZm4gY29tcHV0ZUJhc2ljU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XOiB2ZWMzZixsaWdodFZlY3Rvclc6IHZlYzNmLHZOb3JtYWw6IHZlYzNmLGF0dGVudWF0aW9uOiBmMzIsZGlmZnVzZUNvbG9yOiB2ZWMzZixzcGVjdWxhckNvbG9yOiB2ZWMzZixnbG9zc2luZXNzOiBmMzIpLT5saWdodGluZ0luZm8ge3ZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbzt2YXIgbmRsOiBmMzI9bWF4KDAuLGRvdCh2Tm9ybWFsLGxpZ2h0VmVjdG9yVykpO1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bmRsKmRpZmZ1c2VDb2xvciphdHRlbnVhdGlvbjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZhciBhbmdsZVc6IHZlYzNmPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodFZlY3RvclcpO3ZhciBzcGVjQ29tcDogZjMyPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvciphdHRlbnVhdGlvbjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbiBjb21wdXRlSUVTU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XOiB2ZWMzZix2Tm9ybWFsOiB2ZWMzZixsaWdodERhdGE6IHZlYzRmLGxpZ2h0RGlyZWN0aW9uOiB2ZWM0ZixkaWZmdXNlQ29sb3I6IHZlYzNmLHNwZWN1bGFyQ29sb3I6IHZlYzNmLHJhbmdlOiBmMzIsZ2xvc3NpbmVzczogZjMyLGllc0xpZ2h0VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LGllc0xpZ2h0VGV4dHVyZVNhbXBsZXI6IHNhbXBsZXIpLT5saWdodGluZ0luZm8ge3ZhciBkaXJlY3Rpb246IHZlYzNmPWxpZ2h0RGF0YS54eXotZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVzt2YXIgbGlnaHRWZWN0b3JXOiB2ZWMzZj1ub3JtYWxpemUoZGlyZWN0aW9uKTt2YXIgYXR0ZW51YXRpb246IGYzMj1tYXgoMC4sMS4wLWxlbmd0aChkaXJlY3Rpb24pL3JhbmdlKTt2YXIgZG90UHJvZHVjdD1kb3QobGlnaHREaXJlY3Rpb24ueHl6LC1saWdodFZlY3RvclcpO3ZhciBjb3NBbmdsZTogZjMyPW1heCgwLixkb3RQcm9kdWN0KTtpZiAoY29zQW5nbGU+PWxpZ2h0RGlyZWN0aW9uLncpXG57YXR0ZW51YXRpb24qPWdldElFU0F0dGVudWF0aW9uKGRvdFByb2R1Y3QsaWVzTGlnaHRUZXh0dXJlLGllc0xpZ2h0VGV4dHVyZVNhbXBsZXIpO3JldHVybiBjb21wdXRlQmFzaWNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbGlnaHRWZWN0b3JXLHZOb3JtYWwsYXR0ZW51YXRpb24sZGlmZnVzZUNvbG9yLHNwZWN1bGFyQ29sb3IsZ2xvc3NpbmVzcyk7fVxudmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO3Jlc3VsdC5kaWZmdXNlPXZlYzNmKDAuKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5zcGVjdWxhcj12ZWMzZigwLik7XG4jZW5kaWZcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD0wLjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbiBjb21wdXRlU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XOiB2ZWMzZix2Tm9ybWFsOiB2ZWMzZiAsbGlnaHREYXRhOiB2ZWM0ZixsaWdodERpcmVjdGlvbjogdmVjNGYsZGlmZnVzZUNvbG9yOiB2ZWMzZixzcGVjdWxhckNvbG9yOiB2ZWMzZixyYW5nZTogZjMyLGdsb3NzaW5lc3M6IGYzMiktPmxpZ2h0aW5nSW5mbyB7dmFyIGRpcmVjdGlvbjogdmVjM2Y9bGlnaHREYXRhLnh5ei1mcmFnbWVudElucHV0cy52UG9zaXRpb25XO3ZhciBsaWdodFZlY3Rvclc6IHZlYzNmPW5vcm1hbGl6ZShkaXJlY3Rpb24pO3ZhciBhdHRlbnVhdGlvbjogZjMyPW1heCgwLiwxLjAtbGVuZ3RoKGRpcmVjdGlvbikvcmFuZ2UpO3ZhciBjb3NBbmdsZTogZjMyPW1heCgwLixkb3QobGlnaHREaXJlY3Rpb24ueHl6LC1saWdodFZlY3RvclcpKTtpZiAoY29zQW5nbGU+PWxpZ2h0RGlyZWN0aW9uLncpXG57YXR0ZW51YXRpb24qPWdldEF0dGVudWF0aW9uKGNvc0FuZ2xlLGxpZ2h0RGF0YS53KTtyZXR1cm4gY29tcHV0ZUJhc2ljU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLGxpZ2h0VmVjdG9yVyx2Tm9ybWFsLGF0dGVudWF0aW9uLGRpZmZ1c2VDb2xvcixzcGVjdWxhckNvbG9yLGdsb3NzaW5lc3MpO31cbnZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbztyZXN1bHQuZGlmZnVzZT12ZWMzZigwLik7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXI9dmVjM2YoMC4pO1xuI2VuZGlmXG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9MC47XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxuZm4gY29tcHV0ZUhlbWlzcGhlcmljTGlnaHRpbmcodmlld0RpcmVjdGlvblc6IHZlYzNmLHZOb3JtYWw6IHZlYzNmLGxpZ2h0RGF0YTogdmVjNGYsZGlmZnVzZUNvbG9yOiB2ZWMzZixzcGVjdWxhckNvbG9yOiB2ZWMzZixncm91bmRDb2xvcjogdmVjM2YsZ2xvc3NpbmVzczogZjMyKS0+bGlnaHRpbmdJbmZvIHt2YXIgcmVzdWx0OiBsaWdodGluZ0luZm87dmFyIG5kbDogZjMyPWRvdCh2Tm9ybWFsLGxpZ2h0RGF0YS54eXopKjAuNSswLjU7XG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9bmRsO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZT1taXgoZ3JvdW5kQ29sb3IsZGlmZnVzZUNvbG9yLG5kbCk7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgYW5nbGVXOiB2ZWMzZj1ub3JtYWxpemUodmlld0RpcmVjdGlvblcrbGlnaHREYXRhLnh5eik7dmFyIHNwZWNDb21wOiBmMzI9bWF4KDAuLGRvdCh2Tm9ybWFsLGFuZ2xlVykpO3NwZWNDb21wPXBvdyhzcGVjQ29tcCxtYXgoMS4sZ2xvc3NpbmVzcykpO3Jlc3VsdC5zcGVjdWxhcj1zcGVjQ29tcCpzcGVjdWxhckNvbG9yO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZuIGNvbXB1dGVQcm9qZWN0aW9uVGV4dHVyZURpZmZ1c2VMaWdodGluZyhwcm9qZWN0aW9uTGlnaHRUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4scHJvamVjdGlvbkxpZ2h0U2FtcGxlcjogc2FtcGxlcix0ZXh0dXJlUHJvamVjdGlvbk1hdHJpeDogbWF0NHg0Zixwb3NXOiB2ZWMzZiktPnZlYzNmIHt2YXIgc3RycTogdmVjNGY9dGV4dHVyZVByb2plY3Rpb25NYXRyaXgqdmVjNGYocG9zVywxLjApO3N0cnEvPXN0cnEudzt2YXIgdGV4dHVyZUNvbG9yOiB2ZWMzZj10ZXh0dXJlU2FtcGxlKHByb2plY3Rpb25MaWdodFRleHR1cmUscHJvamVjdGlvbkxpZ2h0U2FtcGxlcixzdHJxLnh5KS5yZ2I7cmV0dXJuIHRleHR1cmVDb2xvcjt9XG4jaWYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbiNpbmNsdWRlPGx0Y0hlbHBlckZ1bmN0aW9ucz5cbnZhciBhcmVhTGlnaHRzTFRDMVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBhcmVhTGlnaHRzTFRDMVNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjt2YXIgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47Zm4gY29tcHV0ZUFyZWFMaWdodGluZyhsdGMxOiB0ZXh0dXJlXzJkPGYzMj4sbHRjMVNhbXBsZXI6c2FtcGxlcixsdGMyOnRleHR1cmVfMmQ8ZjMyPixsdGMyU2FtcGxlcjpzYW1wbGVyLHZpZXdEaXJlY3Rpb25XOiB2ZWMzZix2Tm9ybWFsOnZlYzNmLHZQb3NpdGlvbjp2ZWMzZixsaWdodFBvc2l0aW9uOnZlYzNmLGhhbGZXaWR0aDp2ZWMzZiwgaGFsZkhlaWdodDp2ZWMzZixkaWZmdXNlQ29sb3I6dmVjM2Ysc3BlY3VsYXJDb2xvcjp2ZWMzZixyb3VnaG5lc3M6ZjMyICktPmxpZ2h0aW5nSW5mb1xue3ZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbzt2YXIgZGF0YTogYXJlYUxpZ2h0RGF0YT1jb21wdXRlQXJlYUxpZ2h0U3BlY3VsYXJEaWZmdXNlRnJlc25lbChsdGMxLGx0YzFTYW1wbGVyLGx0YzIsbHRjMlNhbXBsZXIsdmlld0RpcmVjdGlvblcsdk5vcm1hbCx2UG9zaXRpb24sbGlnaHRQb3NpdGlvbixoYWxmV2lkdGgsaGFsZkhlaWdodCxyb3VnaG5lc3MpO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmFyIGZyZXNuZWw6dmVjM2Y9KCBzcGVjdWxhckNvbG9yKmRhdGEuRnJlc25lbC54KyggdmVjM2YoIDEuMCApLXNwZWN1bGFyQ29sb3IgKSpkYXRhLkZyZXNuZWwueSApO3Jlc3VsdC5zcGVjdWxhcis9c3BlY3VsYXJDb2xvcipmcmVzbmVsKmRhdGEuU3BlY3VsYXI7XG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlKz1kaWZmdXNlQ29sb3IqZGF0YS5EaWZmdXNlO3JldHVybiByZXN1bHQ7fVxuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbiNpbmNsdWRlPGNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zPlxuZm4gY29tcHV0ZUNsdXN0ZXJlZExpZ2h0aW5nKFxubGlnaHREYXRhVGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LFxudGlsZU1hc2tCdWZmZXI6IHB0cjxzdG9yYWdlLGFycmF5PHUzMj4+LFxudmlld0RpcmVjdGlvblc6IHZlYzNmLFxudk5vcm1hbDogdmVjM2YsXG5saWdodERhdGE6IHZlYzRmLFxuc2xpY2VSYW5nZTogdmVjMnUsXG5nbG9zc2luZXNzOiBmMzJcbiktPmxpZ2h0aW5nSW5mbyB7dmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO2xldCB0aWxlUG9zaXRpb249dmVjMnUoZnJhZ21lbnRJbnB1dHMucG9zaXRpb24ueHkqbGlnaHREYXRhLnh5KTtsZXQgbWFza1Jlc29sdXRpb249dmVjMnUobGlnaHREYXRhLnp3KTt2YXIgdGlsZUluZGV4PSh0aWxlUG9zaXRpb24ueCptYXNrUmVzb2x1dGlvbi54K3RpbGVQb3NpdGlvbi55KSptYXNrUmVzb2x1dGlvbi55O2xldCBiYXRjaFJhbmdlPXNsaWNlUmFuZ2UvQ0xVU1RMSUdIVF9CQVRDSDt2YXIgYmF0Y2hPZmZzZXQ9YmF0Y2hSYW5nZS54KkNMVVNUTElHSFRfQkFUQ0g7dGlsZUluZGV4Kz1iYXRjaFJhbmdlLng7Zm9yICh2YXIgaT1iYXRjaFJhbmdlLng7IGk8PWJhdGNoUmFuZ2UueTsgaSs9MSkge3ZhciBtYXNrPXRpbGVNYXNrQnVmZmVyW3RpbGVJbmRleF07dGlsZUluZGV4Kz0xO2xldCBtYXNrT2Zmc2V0PW1heChzbGljZVJhbmdlLngsYmF0Y2hPZmZzZXQpLWJhdGNoT2Zmc2V0OyBcbmxldCBtYXNrV2lkdGg9bWluKHNsaWNlUmFuZ2UueS1iYXRjaE9mZnNldCsxLENMVVNUTElHSFRfQkFUQ0gpO21hc2s9ZXh0cmFjdEJpdHMobWFzayxtYXNrT2Zmc2V0LG1hc2tXaWR0aCk7d2hpbGUgbWFzayAhPSAwIHtsZXQgdHJhaWxpbmc9Zmlyc3RUcmFpbGluZ0JpdChtYXNrKTttYXNrIF49IDF1PDx0cmFpbGluZztsZXQgbGlnaHQ9Z2V0Q2x1c3RlcmVkTGlnaHQobGlnaHREYXRhVGV4dHVyZSxiYXRjaE9mZnNldCttYXNrT2Zmc2V0K3RyYWlsaW5nKTt2YXIgaW5mbzogbGlnaHRpbmdJbmZvO2lmIGxpZ2h0LnZMaWdodERpcmVjdGlvbi53PDAuMCB7aW5mbz1jb21wdXRlTGlnaHRpbmcodmlld0RpcmVjdGlvblcsdk5vcm1hbCxsaWdodC52TGlnaHREYXRhLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiLGxpZ2h0LnZMaWdodFNwZWN1bGFyLnJnYixsaWdodC52TGlnaHREaWZmdXNlLmEsZ2xvc3NpbmVzcyk7fSBlbHNlIHtpbmZvPWNvbXB1dGVTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsdk5vcm1hbCxsaWdodC52TGlnaHREYXRhLGxpZ2h0LnZMaWdodERpcmVjdGlvbixsaWdodC52TGlnaHREaWZmdXNlLnJnYixsaWdodC52TGlnaHRTcGVjdWxhci5yZ2IsbGlnaHQudkxpZ2h0RGlmZnVzZS5hLGdsb3NzaW5lc3MpO31cbnJlc3VsdC5kaWZmdXNlKz1pbmZvLmRpZmZ1c2U7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXIrPWluZm8uc3BlY3VsYXI7XG4jZW5kaWZcbn1cbmJhdGNoT2Zmc2V0Kz1DTFVTVExJR0hUX0JBVENIO31cbnJldHVybiByZXN1bHQ7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRzRnJhZ21lbnRGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWNrZ3JvdW5kVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3JlZmxlY3Rpb25GdW5jdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NGcmFnbWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW50ZXJzZWN0aW9uRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudFwiO1xuXG5jb25zdCBuYW1lID0gXCJiYWNrZ3JvdW5kUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjaW5jbHVkZTxiYWNrZ3JvdW5kVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG52YXJ5aW5nIHZQb3NpdGlvblc6IHZlYzNmO1xuI2lmZGVmIE1BSU5VVjFcbnZhcnlpbmcgdk1haW5VVjE6IHZlYzJmO1xuI2VuZGlmIFxuI2lmZGVmIE1BSU5VVjIgXG52YXJ5aW5nIHZNYWluVVYyOiB2ZWMyZjsgXG4jZW5kaWYgXG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZOb3JtYWxXOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIERJRkZVU0VcbiNpZiBESUZGVVNFRElSRUNUVVY9PTFcbiNkZWZpbmUgdkRpZmZ1c2VVViB2TWFpblVWMVxuI2VsaWYgRElGRlVTRURJUkVDVFVWPT0yXG4jZGVmaW5lIHZEaWZmdXNlVVYgdk1haW5VVjJcbiNlbHNlXG52YXJ5aW5nIHZEaWZmdXNlVVY6IHZlYzJmO1xuI2VuZGlmXG52YXIgZGlmZnVzZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBkaWZmdXNlU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciByZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNpZmRlZiBURVhUVVJFTE9EU1VQUE9SVFxuI2Vsc2VcbnZhciByZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjt2YXIgcmVmbGVjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvbkhpZ2hTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNlbmRpZlxuI2Vsc2VcbnZhciByZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jaWZkZWYgVEVYVFVSRUxPRFNVUFBPUlRcbiNlbHNlXG52YXIgcmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZsZWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3ZhciByZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZsZWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdlBvc2l0aW9uVVZXOiB2ZWMzZjtcbiNlbHNlXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2RGlyZWN0aW9uVzogdmVjM2Y7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8cmVmbGVjdGlvbkZ1bmN0aW9uPlxuI2VuZGlmXG4jaWZuZGVmIEZST01MSU5FQVJTUEFDRVxuI2RlZmluZSBGUk9NTElORUFSU1BBQ0U7XG4jZW5kaWZcbiNpZm5kZWYgU0hBRE9XT05MWVxuI2RlZmluZSBTSEFET1dPTkxZO1xuI2VuZGlmXG4jaW5jbHVkZTxpbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxpZ2h0VWJvRGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8c2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dGcmFnbWVudERlY2xhcmF0aW9uPlxuI2lmZGVmIFJFRkxFQ1RJT05GUkVTTkVMXG4jZGVmaW5lIEZSRVNORUxfTUFYSU1VTV9PTl9ST1VHSCAwLjI1XG5mbiBmcmVzbmVsU2NobGlja0Vudmlyb25tZW50R0dYKFZkb3ROOiBmMzIscmVmbGVjdGFuY2UwOiB2ZWMzZixyZWZsZWN0YW5jZTkwOiB2ZWMzZixzbW9vdGhuZXNzOiBmMzIpLT52ZWMzZlxue3ZhciB3ZWlnaHQ6IGYzMj1taXgoRlJFU05FTF9NQVhJTVVNX09OX1JPVUdILDEuMCxzbW9vdGhuZXNzKTtyZXR1cm4gcmVmbGVjdGFuY2UwK3dlaWdodCoocmVmbGVjdGFuY2U5MC1yZWZsZWN0YW5jZTApKnBvdzUoc2F0dXJhdGUoMS4wLVZkb3ROKSk7fVxuI2VuZGlmXG4jaWZkZWYgUFJPSkVDVEVEX0dST1VORFxuI2luY2x1ZGU8aW50ZXJzZWN0aW9uRnVuY3Rpb25zPlxuZm4gcHJvamVjdCh2aWV3RGlyZWN0aW9uVzogdmVjM2YsZXllUG9zaXRpb246IHZlYzNmKS0+dmVjM2Yge3ZhciByYWRpdXM6IGYzMj11bmlmb3Jtcy5wcm9qZWN0ZWRHcm91bmRJbmZvcy54O3ZhciBoZWlnaHQ6IGYzMj11bmlmb3Jtcy5wcm9qZWN0ZWRHcm91bmRJbmZvcy55O3ZhciBjYW1EaXI6IHZlYzNmPS12aWV3RGlyZWN0aW9uVzt2YXIgc2t5U3BoZXJlRGlzdGFuY2U6IGYzMj1zcGhlcmVJbnRlcnNlY3RGcm9tT3JpZ2luKGV5ZVBvc2l0aW9uLGNhbURpcixyYWRpdXMpLng7dmFyIHNreVNwaGVyZVBvc2l0aW9uVzogdmVjM2Y9ZXllUG9zaXRpb24rY2FtRGlyKnNreVNwaGVyZURpc3RhbmNlO3ZhciBwOiB2ZWMzZj1ub3JtYWxpemUoc2t5U3BoZXJlUG9zaXRpb25XKTt2YXIgdXBFeWVQb3NpdGlvbj12ZWMzZihleWVQb3NpdGlvbi54LGV5ZVBvc2l0aW9uLnktaGVpZ2h0LGV5ZVBvc2l0aW9uLnopO3ZhciBzSW50ZXJzZWN0aW9uOiBmMzI9c3BoZXJlSW50ZXJzZWN0RnJvbU9yaWdpbih1cEV5ZVBvc2l0aW9uLHAscmFkaXVzKS54O3ZhciBoOiB2ZWMzZj0gdmVjM2YoMC4wLC1oZWlnaHQsMC4wKTt2YXIgZEludGVyc2VjdGlvbjogZjMyPWRpc2tJbnRlcnNlY3RXaXRoQmFja0ZhY2VDdWxsaW5nKHVwRXllUG9zaXRpb24scCxoLHJhZGl1cyk7cD0odXBFeWVQb3NpdGlvbittaW4oc0ludGVyc2VjdGlvbixkSW50ZXJzZWN0aW9uKSpwKTtyZXR1cm4gcDt9XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50PlxudmFyIHZpZXdEaXJlY3Rpb25XOiB2ZWMzZj1ub3JtYWxpemUoc2NlbmUudkV5ZVBvc2l0aW9uLnh5ei1pbnB1dC52UG9zaXRpb25XKTtcbiNpZmRlZiBOT1JNQUxcbnZhciBub3JtYWxXOiB2ZWMzZj1ub3JtYWxpemUoZnJhZ21lbnRJbnB1dHMudk5vcm1hbFcpO1xuI2Vsc2VcbnZhciBub3JtYWxXOiB2ZWMzZj0gdmVjM2YoMC4wLDEuMCwwLjApO1xuI2VuZGlmXG52YXIgc2hhZG93OiBmMzI9MS47dmFyIGdsb2JhbFNoYWRvdzogZjMyPTAuO3ZhciBzaGFkb3dMaWdodENvdW50OiBmMzI9MC47dmFyIGFnZ1NoYWRvdzogZjMyPTAuO3ZhciBudW1MaWdodHM6IGYzMj0wLjtcbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpZmRlZiBTSEFET1dJTlVTRVxuZ2xvYmFsU2hhZG93Lz1zaGFkb3dMaWdodENvdW50O1xuI2Vsc2Vcbmdsb2JhbFNoYWRvdz0xLjA7XG4jZW5kaWZcbiNpZm5kZWYgQkFDS01BVF9TSEFET1dPTkxZXG52YXIgcmVmbGVjdGlvbkNvbG9yOiB2ZWM0Zj0gdmVjNGYoMS4sMS4sMS4sMS4pO1xuI2lmZGVmIFJFRkxFQ1RJT05cbiNpZmRlZiBQUk9KRUNURURfR1JPVU5EXG52YXIgcmVmbGVjdGlvblZlY3RvcjogdmVjM2Y9cHJvamVjdCh2aWV3RGlyZWN0aW9uVyxzY2VuZS52RXllUG9zaXRpb24ueHl6KTtyZWZsZWN0aW9uVmVjdG9yPSAodW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeCp2ZWM0ZihyZWZsZWN0aW9uVmVjdG9yLDEuKSkueHl6O1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uVmVjdG9yOiB2ZWMzZj1jb21wdXRlUmVmbGVjdGlvbkNvb3JkcyggdmVjNGYoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVywxLjApLG5vcm1hbFcpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbnJlZmxlY3Rpb25WZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciByZWZsZWN0aW9uQ29vcmRzOiB2ZWMzZj1yZWZsZWN0aW9uVmVjdG9yO1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uQ29vcmRzOiB2ZWMyZj1yZWZsZWN0aW9uVmVjdG9yLnh5O1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfUFJPSkVDVElPTlxucmVmbGVjdGlvbkNvb3Jkcy89cmVmbGVjdGlvblZlY3Rvci56O1xuI2VuZGlmXG5yZWZsZWN0aW9uQ29vcmRzLnk9MS4wLXJlZmxlY3Rpb25Db29yZHMueTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05CTFVSXG52YXIgcmVmbGVjdGlvbkxPRDogZjMyPXVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3MueTtcbiNpZmRlZiBURVhUVVJFTE9EU1VQUE9SVFxucmVmbGVjdGlvbkxPRD1yZWZsZWN0aW9uTE9EKmxvZzIodW5pZm9ybXMudlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54KSp1bmlmb3Jtcy52UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnkrdW5pZm9ybXMudlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy56O3JlZmxlY3Rpb25Db2xvcj10ZXh0dXJlU2FtcGxlTGV2ZWwocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMscmVmbGVjdGlvbkxPRCk7XG4jZWxzZVxudmFyIGxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkOiBmMzI9c2F0dXJhdGUocmVmbGVjdGlvbkxPRCk7dmFyIGxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkRG91YmxlZDogZjMyPWxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkKjIuMDt2YXIgcmVmbGVjdGlvblNwZWN1bGFyTWlkOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcixyZWZsZWN0aW9uQ29vcmRzKTtpZihsb2RSZWZsZWN0aW9uTm9ybWFsaXplZERvdWJsZWQ8MS4wKXtyZWZsZWN0aW9uQ29sb3I9bWl4KFxudGV4dHVyZVNhbXBsZShyZWZsZWN0aW9uckhpZ2hTYW1wbGVyLHJlZmxlY3Rpb25ySGlnaFNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMpLFxucmVmbGVjdGlvblNwZWN1bGFyTWlkLFxubG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkXG4pO30gZWxzZSB7cmVmbGVjdGlvbkNvbG9yPW1peChcbnJlZmxlY3Rpb25TcGVjdWxhck1pZCxcbnRleHR1cmVTYW1wbGUocmVmbGVjdGlvbkxvd1NhbXBsZXIscmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMpLFxubG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkLTEuMFxuKTt9XG4jZW5kaWZcbiNlbHNlXG52YXIgcmVmbGVjdGlvblNhbXBsZTogdmVjNGY9dGV4dHVyZVNhbXBsZShyZWZsZWN0aW9uU2FtcGxlcixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXIscmVmbGVjdGlvbkNvb3Jkcyk7cmVmbGVjdGlvbkNvbG9yPXJlZmxlY3Rpb25TYW1wbGU7XG4jZW5kaWZcbiNpZmRlZiBSR0JEUkVGTEVDVElPTlxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKGZyb21SR0JEKHJlZmxlY3Rpb25Db2xvcikucmdiLHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHRvTGluZWFyU3BhY2VWZWMzKHJlZmxlY3Rpb25Db2xvci5yZ2IpLHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05CR1JcbnJlZmxlY3Rpb25Db2xvcj12ZWM0ZihyZWZsZWN0aW9uQ29sb3IuYmdyLHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHJlZmxlY3Rpb25Db2xvci5yZ2IqdW5pZm9ybXMudlJlZmxlY3Rpb25JbmZvcy54LHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxudmFyIGRpZmZ1c2VDb2xvcjogdmVjM2Y9IHZlYzNmKDEuLDEuLDEuKTt2YXIgZmluYWxBbHBoYTogZjMyPXVuaWZvcm1zLmFscGhhO1xuI2lmZGVmIERJRkZVU0VcbnZhciBkaWZmdXNlTWFwOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGRpZmZ1c2VTYW1wbGVyLGRpZmZ1c2VTYW1wbGVyU2FtcGxlcixpbnB1dC52RGlmZnVzZVVWKTtcbiNpZmRlZiBHQU1NQURJRkZVU0VcbmRpZmZ1c2VNYXA9dmVjNGYodG9MaW5lYXJTcGFjZVZlYzMoZGlmZnVzZU1hcC5yZ2IpLGRpZmZ1c2VNYXAuYSk7XG4jZW5kaWZcbmRpZmZ1c2VNYXA9dmVjNGYoZGlmZnVzZU1hcC5yZ2IgKnVuaWZvcm1zLnZEaWZmdXNlSW5mb3MueSxkaWZmdXNlTWFwLmEpO1xuI2lmZGVmIERJRkZVU0VIQVNBTFBIQVxuZmluYWxBbHBoYSo9ZGlmZnVzZU1hcC5hO1xuI2VuZGlmXG5kaWZmdXNlQ29sb3I9ZGlmZnVzZU1hcC5yZ2I7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTFxudmFyIGNvbG9yQmFzZTogdmVjM2Y9ZGlmZnVzZUNvbG9yO1xuI2Vsc2VcbnZhciBjb2xvckJhc2U6IHZlYzNmPXJlZmxlY3Rpb25Db2xvci5yZ2IqZGlmZnVzZUNvbG9yO1xuI2VuZGlmXG5jb2xvckJhc2U9bWF4KGNvbG9yQmFzZSx2ZWMzZigwLjApKTtcbiNpZmRlZiBVU0VSR0JDT0xPUlxudmFyIGZpbmFsQ29sb3I6IHZlYzNmPWNvbG9yQmFzZTtcbiNlbHNlXG4jaWZkZWYgVVNFSElHSExJR0hUQU5EU0hBRE9XQ09MT1JTXG52YXIgbWFpbkNvbG9yOiB2ZWMzZj1taXgodW5pZm9ybXMudlByaW1hcnlDb2xvclNoYWRvdy5yZ2IsdW5pZm9ybXMudlByaW1hcnlDb2xvci5yZ2IsY29sb3JCYXNlKTtcbiNlbHNlXG52YXIgbWFpbkNvbG9yOiB2ZWMzZj11bmlmb3Jtcy52UHJpbWFyeUNvbG9yLnJnYjtcbiNlbmRpZlxudmFyIGZpbmFsQ29sb3I6IHZlYzNmPWNvbG9yQmFzZSptYWluQ29sb3I7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTFxudmFyIHJlZmxlY3Rpb25BbW91bnQ6IHZlYzNmPXVuaWZvcm1zLnZSZWZsZWN0aW9uQ29udHJvbC54eHg7dmFyIHJlZmxlY3Rpb25SZWZsZWN0YW5jZTA6IHZlYzNmPXVuaWZvcm1zLnZSZWZsZWN0aW9uQ29udHJvbC55eXk7dmFyIHJlZmxlY3Rpb25SZWZsZWN0YW5jZTkwOiB2ZWMzZj11bmlmb3Jtcy52UmVmbGVjdGlvbkNvbnRyb2wuenp6O3ZhciBWZG90TjogZjMyPWRvdChub3JtYWxpemUoc2NlbmUudkV5ZVBvc2l0aW9uLnh5eiksbm9ybWFsVyk7dmFyIHBsYW5hclJlZmxlY3Rpb25GcmVzbmVsOiB2ZWMzZj1mcmVzbmVsU2NobGlja0Vudmlyb25tZW50R0dYKHNhdHVyYXRlKFZkb3ROKSxyZWZsZWN0aW9uUmVmbGVjdGFuY2UwLHJlZmxlY3Rpb25SZWZsZWN0YW5jZTkwLDEuMCk7cmVmbGVjdGlvbkFtb3VudCo9cGxhbmFyUmVmbGVjdGlvbkZyZXNuZWw7XG4jaWZkZWYgUkVGTEVDVElPTkZBTExPRkZcbnZhciByZWZsZWN0aW9uRGlzdGFuY2VGYWxsb2ZmOiBmMzI9MS4wLXNhdHVyYXRlKGxlbmd0aCh2UG9zaXRpb25XLnh5ei11bmlmb3Jtcy52QmFja2dyb3VuZENlbnRlcikqdW5pZm9ybXMudlJlZmxlY3Rpb25Db250cm9sLncpO3JlZmxlY3Rpb25EaXN0YW5jZUZhbGxvZmYqPXJlZmxlY3Rpb25EaXN0YW5jZUZhbGxvZmY7cmVmbGVjdGlvbkFtb3VudCo9cmVmbGVjdGlvbkRpc3RhbmNlRmFsbG9mZjtcbiNlbmRpZlxuZmluYWxDb2xvcj1taXgoZmluYWxDb2xvcixyZWZsZWN0aW9uQ29sb3IucmdiLHNhdHVyYXRlVmVjMyhyZWZsZWN0aW9uQW1vdW50KSk7XG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZRlJFU05FTFxudmFyIHZpZXdBbmdsZVRvRmxvb3I6IGYzMj1kb3Qobm9ybWFsVyxub3JtYWxpemUoc2NlbmUudkV5ZVBvc2l0aW9uLnh5ei11bmlmb3Jtcy52QmFja2dyb3VuZENlbnRlcikpO2NvbnN0IHN0YXJ0QW5nbGU6IGYzMj0wLjE7dmFyIGZhZGVGYWN0b3I6IGYzMj1zYXR1cmF0ZSh2aWV3QW5nbGVUb0Zsb29yL3N0YXJ0QW5nbGUpO2ZpbmFsQWxwaGEqPWZhZGVGYWN0b3IqZmFkZUZhY3RvcjtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0lOVVNFXG5maW5hbENvbG9yPW1peChmaW5hbENvbG9yKnVuaWZvcm1zLnNoYWRvd0xldmVsLGZpbmFsQ29sb3IsZ2xvYmFsU2hhZG93KTtcbiNlbmRpZlxudmFyIGNvbG9yOiB2ZWM0Zj0gdmVjNGYoZmluYWxDb2xvcixmaW5hbEFscGhhKTtcbiNlbHNlXG52YXIgY29sb3I6IHZlYzRmPSB2ZWM0Zih1bmlmb3Jtcy52UHJpbWFyeUNvbG9yLnJnYiwoMS4wLWNsYW1wKGdsb2JhbFNoYWRvdywwLiwxLikpKnVuaWZvcm1zLmFscGhhKTtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50PlxuI2lmZGVmIElNQUdFUFJPQ0VTU0lOR1BPU1RQUk9DRVNTXG4jaWYgIWRlZmluZWQoU0tJUEZJTkFMQ09MT1JDTEFNUClcbmNvbG9yPXZlYzRmKGNsYW1wKGNvbG9yLnJnYix2ZWMzZigwLiksdmVjM2YoMzAuMCkpLGNvbG9yLmEpO1xuI2VuZGlmXG4jZWxzZVxuY29sb3I9YXBwbHlJbWFnZVByb2Nlc3NpbmcoY29sb3IpO1xuI2VuZGlmXG4jaWZkZWYgUFJFTVVMVElQTFlBTFBIQVxuY29sb3I9dmVjNGYoY29sb3IucmdiICpjb2xvci5hLGNvbG9yLmEpO1xuI2VuZGlmXG4jaWZkZWYgTk9JU0VcbmNvbG9yPXZlYzRmKGNvbG9yLnJnYitkaXRoZXIoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVy54eSwwLjUpLGNvbG9yLmEpO2NvbG9yPW1heChjb2xvcix2ZWM0ZigwLjApKTtcbiNlbmRpZlxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPWNvbG9yO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==