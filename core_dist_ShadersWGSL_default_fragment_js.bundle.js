"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_default_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultUboDeclarationWGSL: () => (/* binding */ defaultUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "defaultUboDeclaration";
const shader = `uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f;uniform emissiveRightColor: vec4f;uniform vDiffuseInfos: vec2f;uniform vAmbientInfos: vec2f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vSpecularInfos: vec2f;uniform vBumpInfos: vec3f;uniform diffuseMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform specularMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform pointSize: f32;uniform alphaCutOff: f32;uniform refractionMatrix: mat4x4f;uniform vRefractionInfos: vec4f;uniform vRefractionPosition: vec3f;uniform vRefractionSize: vec3f;uniform vSpecularColor: vec4f;uniform vEmissiveColor: vec3f;uniform vDiffuseColor: vec4f;uniform vAmbientColor: vec3f;uniform cameraInfo: vec4f;uniform vReflectionInfos: vec2f;uniform reflectionMatrix: mat4x4f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const defaultUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js":
/*!***************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPrePassWGSL: () => (/* binding */ depthPrePassWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
fragmentOutputs.color= vec4f(0.,0.,0.,1.0);return fragmentOutputs;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const depthPrePassWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainUVVaryingDeclarationWGSL: () => (/* binding */ mainUVVaryingDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "mainUVVaryingDeclaration";
const shader = `#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const mainUVVaryingDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js":
/*!*****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitDeclarationWGSL: () => (/* binding */ oitDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "oitDeclaration";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#define MAX_DEPTH 99999.0
var oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const oitDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js":
/*!**************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitFragmentWGSL: () => (/* binding */ oitFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "oitFragment";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
var fragDepth: f32=fragmentInputs.position.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
var halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;
#endif
var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var lastDepth: vec2f=textureLoad(oitDepthSampler,fragCoord,0).rg;var lastFrontColor: vec4f=textureLoad(oitFrontColorSampler,fragCoord,0);fragmentOutputs.depth=vec2f(-MAX_DEPTH);fragmentOutputs.frontColor=lastFrontColor;fragmentOutputs.backColor= vec4f(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
var furthestDepth: f32=-lastDepth.x;var nearestDepth: f32=lastDepth.y;
#else
var nearestDepth: f32=-lastDepth.x;var furthestDepth: f32=lastDepth.y;
#endif
var alphaMultiplier: f32=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return fragmentOutputs;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
fragmentOutputs.depth=vec2f(-fragDepth,fragDepth);return fragmentOutputs;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const oitFragmentWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prePassDeclarationWGSL: () => (/* binding */ prePassDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "prePassDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying vNormViewDepth: f32;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const prePassDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerFragmentDeclarationWGSL: () => (/* binding */ samplerFragmentDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "samplerFragmentDeclaration";
const shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying v_VARYINGNAME_UV: vec2f;
#endif
var _SAMPLERNAME_SamplerSampler: sampler;var _SAMPLERNAME_Sampler: texture_2d<f32>;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const samplerFragmentDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/default.fragment.js":
/*!****************************************************!*\
  !*** ../core/dist/ShadersWGSL/default.fragment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPixelShaderWGSL: () => (/* binding */ defaultPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_defaultUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/defaultUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js");
/* harmony import */ var _ShadersInclude_prePassDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/prePassDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js");
/* harmony import */ var _ShadersInclude_oitDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/oitDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js");
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/mainUVVaryingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_lightsFragmentFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/lightsFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/shadowsFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/samplerFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_fresnelFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/fresnelFunction */ "../core/dist/ShadersWGSL/ShadersInclude/fresnelFunction.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/ShadersWGSL/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentMainFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentMainFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentFunctions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_bumpFragment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/bumpFragment */ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragment.js");
/* harmony import */ var _ShadersInclude_decalFragment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/decalFragment */ "../core/dist/ShadersWGSL/ShadersInclude/decalFragment.js");
/* harmony import */ var _ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/depthPrePass */ "../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js");
/* harmony import */ var _ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/lightFragment */ "../core/dist/ShadersWGSL/ShadersInclude/lightFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_oitFragment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/oitFragment */ "../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



























const name = "defaultPixelShader";
const shader = `#include<defaultUboDeclaration>
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
var refractionCubeSamplerSampler: sampler;var refractionCubeSampler: texture_cube<f32>;
#else
var refraction2DSamplerSampler: sampler;var refraction2DSampler: texture_2d<f32>;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;
#else
var reflection2DSamplerSampler: sampler;var reflection2DSampler: texture_2d<f32>;
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
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))* scene.vEyePosition.w;
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
#ifdef DIFFUSE
baseColor=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<uniforms.alphaCutOff) {discard;}
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
#ifdef DETAIL
baseColor=vec4f(baseColor.rgb*2.0*mix(0.5,detailColor.r,uniforms.vDetailInfos.y),baseColor.a);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
var baseAmbientColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb*uniforms.vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
var specularMapColor: vec4f=textureSample(specularSampler,specularSamplerSampler,fragmentInputs.vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;
#ifdef SPECULARTERM
var specularBase: vec3f= vec3f(0.,0.,0.);
#endif
var shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;
#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*uniforms.vLightmapInfos.y,lightmapColor.a);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFRACTION
var refractionVector: vec3f=normalize(refract(-viewDirectionW,normalW,uniforms.vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(fragmentInputs.vPositionW,refractionVector,uniforms.vRefractionSize,uniforms.vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*uniforms.vRefractionInfos.w;var refractionLookup: vec4f=textureSample(refractionCubeSampler,refractionCubeSamplerSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
var vRefractionUVW: vec3f= (uniforms.refractionMatrix*(scene.view* vec4f(fragmentInputs.vPositionW+refractionVector*uniforms.vRefractionInfos.z,1.0))).xyz;var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=textureSample(refraction2DSampler,refraction2DSamplerSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor=vec4f(fromRGBD(refractionColor),refractionColor.a);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor=vec4f(toGammaSpaceVec3(refractionColor.rgb),refractionColor.a);
#endif
refractionColor=vec4f(refractionColor.rgb*uniforms.vRefractionInfos.x,refractionColor.a);
#endif
var reflectionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFLECTION
var vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
var bias: f32=uniforms.vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);
#else
reflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);
#endif
#else
var coords: vec2f=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=textureSample(reflection2DSampler,reflection2DSamplerSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#ifdef REFLECTIONFRESNEL
var reflectionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.reflectionRightColor.a,uniforms.reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor=vec4f(reflectionColor.rgb*specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
var refractionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.refractionRightColor.a,uniforms.refractionLeftColor.a);refractionColor=vec4f(refractionColor.rgb*uniforms.refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*uniforms.refractionRightColor.rgb,refractionColor.a);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;
#else
alpha*=opacityMap.a*uniforms.vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#ifdef OPACITYFRESNEL
var opacityFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.opacityParts.z,uniforms.opacityParts.w);alpha+=uniforms.opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*uniforms.opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<uniforms.alphaCutOff) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
var emissiveColor: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
var emissiveFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.emissiveRightColor.a,uniforms.emissiveLeftColor.a);emissiveColor*=uniforms.emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*uniforms.emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
var diffuseFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.diffuseRightColor.a,uniforms.diffuseLeftColor.a);diffuseBase*=uniforms.diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*uniforms.diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
var finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#else
var finalSpecular: vec3f= vec3f(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#ifdef EMISSIVEASILLUMINATION
var color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
var color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color=vec4f(color.rgb*lightmapColor.rgb,color.a);
#else
color=vec4f(color.rgb+lightmapColor.rgb,color.a);
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color=vec4f(max(color.rgb,vec3f(0.)),color.a);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);
#else
#ifdef IMAGEPROCESSING
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);color=applyImageProcessing(color);
#endif
#endif
color=vec4f(color.rgb,color.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb*color.a, color.a);
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#if SCENE_MRT_COUNT>0
var writeGeometryInfo: f32=select(0.0,1.0,color.a>0.4);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]=vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX]=vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
fragData[PREPASS_NORMALIZED_VIEW_DEPTH_INDEX]=vec4f(fragmentInputs.vNormViewDepth,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalW,writeGeometryInfo);
#else
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX]=vec4f(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
fragData[PREPASS_ALBEDO_INDEX]=vec4f(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4f(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec4(specularMapColor))*writeGeometryInfo; 
#else
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec3(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
#endif
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+color.rgb*color.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-color.a));} else {fragmentOutputs.backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const defaultPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2RlZmF1bHRfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2RlZmF1bHRVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2RlcHRoUHJlUGFzcy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb2l0RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vaXRGcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvZGVmYXVsdC5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2NlbmVVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9tZXNoVWJvRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwiZGVmYXVsdFVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBkaWZmdXNlTGVmdENvbG9yOiB2ZWM0Zjt1bmlmb3JtIGRpZmZ1c2VSaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIG9wYWNpdHlQYXJ0czogdmVjNGY7dW5pZm9ybSByZWZsZWN0aW9uTGVmdENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHJlZmxlY3Rpb25SaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHJlZnJhY3Rpb25MZWZ0Q29sb3I6IHZlYzRmO3VuaWZvcm0gcmVmcmFjdGlvblJpZ2h0Q29sb3I6IHZlYzRmO3VuaWZvcm0gZW1pc3NpdmVMZWZ0Q29sb3I6IHZlYzRmO3VuaWZvcm0gZW1pc3NpdmVSaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZEaWZmdXNlSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkFtYmllbnRJbmZvczogdmVjMmY7dW5pZm9ybSB2T3BhY2l0eUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZFbWlzc2l2ZUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZMaWdodG1hcEluZm9zOiB2ZWMyZjt1bmlmb3JtIHZTcGVjdWxhckluZm9zOiB2ZWMyZjt1bmlmb3JtIHZCdW1wSW5mb3M6IHZlYzNmO3VuaWZvcm0gZGlmZnVzZU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGFtYmllbnRNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBvcGFjaXR5TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gZW1pc3NpdmVNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBsaWdodG1hcE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHNwZWN1bGFyTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYnVtcE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZUYW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmO3VuaWZvcm0gcG9pbnRTaXplOiBmMzI7dW5pZm9ybSBhbHBoYUN1dE9mZjogZjMyO3VuaWZvcm0gcmVmcmFjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZyYWN0aW9uSW5mb3M6IHZlYzRmO3VuaWZvcm0gdlJlZnJhY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmcmFjdGlvblNpemU6IHZlYzNmO3VuaWZvcm0gdlNwZWN1bGFyQ29sb3I6IHZlYzRmO3VuaWZvcm0gdkVtaXNzaXZlQ29sb3I6IHZlYzNmO3VuaWZvcm0gdkRpZmZ1c2VDb2xvcjogdmVjNGY7dW5pZm9ybSB2QW1iaWVudENvbG9yOiB2ZWMzZjt1bmlmb3JtIGNhbWVyYUluZm86IHZlYzRmO3VuaWZvcm0gdlJlZmxlY3Rpb25JbmZvczogdmVjMmY7dW5pZm9ybSByZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlJlZmxlY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblNpemU6IHZlYzNmO1xuI2RlZmluZSBBRERJVElPTkFMX1VCT19ERUNMQVJBVElPTlxuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0VWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJkZXB0aFByZVBhc3NcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgREVQVEhQUkVQQVNTXG5mcmFnbWVudE91dHB1dHMuY29sb3I9IHZlYzRmKDAuLDAuLDAuLDEuMCk7cmV0dXJuIGZyYWdtZW50T3V0cHV0cztcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGRlcHRoUHJlUGFzc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2x0Y0hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9jbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodHNGcmFnbWVudEZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBsaWdodGluZ0luZm9cbntkaWZmdXNlOiB2ZWMzZixcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnNwZWN1bGFyOiB2ZWMzZixcbiNlbmRpZlxuI2lmZGVmIE5ET1RMXG5uZGw6IGYzMixcbiNlbmRpZlxufTtmbiBjb21wdXRlTGlnaHRpbmcodmlld0RpcmVjdGlvblc6IHZlYzNmLHZOb3JtYWw6IHZlYzNmLGxpZ2h0RGF0YTogdmVjNGYsZGlmZnVzZUNvbG9yOiB2ZWMzZixzcGVjdWxhckNvbG9yOiB2ZWMzZixyYW5nZTogZjMyLGdsb3NzaW5lc3M6IGYzMiktPmxpZ2h0aW5nSW5mbyB7dmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO3ZhciBsaWdodFZlY3Rvclc6IHZlYzNmO3ZhciBhdHRlbnVhdGlvbjogZjMyPTEuMDtpZiAobGlnaHREYXRhLnc9PTAuKVxue3ZhciBkaXJlY3Rpb246IHZlYzNmPWxpZ2h0RGF0YS54eXotZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVzthdHRlbnVhdGlvbj1tYXgoMC4sMS4wLWxlbmd0aChkaXJlY3Rpb24pL3JhbmdlKTtsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7fVxuZWxzZVxue2xpZ2h0VmVjdG9yVz1ub3JtYWxpemUoLWxpZ2h0RGF0YS54eXopO31cbnZhciBuZGw6IGYzMj1tYXgoMC4sZG90KHZOb3JtYWwsbGlnaHRWZWN0b3JXKSk7XG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9bmRsO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZT1uZGwqZGlmZnVzZUNvbG9yKmF0dGVudWF0aW9uO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmFyIGFuZ2xlVzogdmVjM2Y9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0VmVjdG9yVyk7dmFyIHNwZWNDb21wOiBmMzI9bWF4KDAuLGRvdCh2Tm9ybWFsLGFuZ2xlVykpO3NwZWNDb21wPXBvdyhzcGVjQ29tcCxtYXgoMS4sZ2xvc3NpbmVzcykpO3Jlc3VsdC5zcGVjdWxhcj1zcGVjQ29tcCpzcGVjdWxhckNvbG9yKmF0dGVudWF0aW9uO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZuIGdldEF0dGVudWF0aW9uKGNvc0FuZ2xlOiBmMzIsZXhwb25lbnQ6IGYzMiktPmYzMiB7cmV0dXJuIG1heCgwLixwb3coY29zQW5nbGUsZXhwb25lbnQpKTt9XG5mbiBnZXRJRVNBdHRlbnVhdGlvbihjb3NBbmdsZTogZjMyLGllc0xpZ2h0VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LGllc0xpZ2h0VGV4dHVyZVNhbXBsZXI6IHNhbXBsZXIpLT5mMzIge3ZhciBhbmdsZT1hY29zKGNvc0FuZ2xlKS9QSTtyZXR1cm4gdGV4dHVyZVNhbXBsZUxldmVsKGllc0xpZ2h0VGV4dHVyZSxpZXNMaWdodFRleHR1cmVTYW1wbGVyLHZlYzJmKGFuZ2xlLDApLDAuKS5yO31cbmZuIGNvbXB1dGVCYXNpY1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVzogdmVjM2YsbGlnaHRWZWN0b3JXOiB2ZWMzZix2Tm9ybWFsOiB2ZWMzZixhdHRlbnVhdGlvbjogZjMyLGRpZmZ1c2VDb2xvcjogdmVjM2Ysc3BlY3VsYXJDb2xvcjogdmVjM2YsZ2xvc3NpbmVzczogZjMyKS0+bGlnaHRpbmdJbmZvIHt2YXIgcmVzdWx0OiBsaWdodGluZ0luZm87dmFyIG5kbDogZjMyPW1heCgwLixkb3Qodk5vcm1hbCxsaWdodFZlY3RvclcpKTtcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD1uZGw7XG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlPW5kbCpkaWZmdXNlQ29sb3IqYXR0ZW51YXRpb247XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgYW5nbGVXOiB2ZWMzZj1ub3JtYWxpemUodmlld0RpcmVjdGlvblcrbGlnaHRWZWN0b3JXKTt2YXIgc3BlY0NvbXA6IGYzMj1tYXgoMC4sZG90KHZOb3JtYWwsYW5nbGVXKSk7c3BlY0NvbXA9cG93KHNwZWNDb21wLG1heCgxLixnbG9zc2luZXNzKSk7cmVzdWx0LnNwZWN1bGFyPXNwZWNDb21wKnNwZWN1bGFyQ29sb3IqYXR0ZW51YXRpb247XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxuZm4gY29tcHV0ZUlFU1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVzogdmVjM2Ysdk5vcm1hbDogdmVjM2YsbGlnaHREYXRhOiB2ZWM0ZixsaWdodERpcmVjdGlvbjogdmVjNGYsZGlmZnVzZUNvbG9yOiB2ZWMzZixzcGVjdWxhckNvbG9yOiB2ZWMzZixyYW5nZTogZjMyLGdsb3NzaW5lc3M6IGYzMixpZXNMaWdodFRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixpZXNMaWdodFRleHR1cmVTYW1wbGVyOiBzYW1wbGVyKS0+bGlnaHRpbmdJbmZvIHt2YXIgZGlyZWN0aW9uOiB2ZWMzZj1saWdodERhdGEueHl6LWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblc7dmFyIGxpZ2h0VmVjdG9yVzogdmVjM2Y9bm9ybWFsaXplKGRpcmVjdGlvbik7dmFyIGF0dGVudWF0aW9uOiBmMzI9bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7dmFyIGRvdFByb2R1Y3Q9ZG90KGxpZ2h0RGlyZWN0aW9uLnh5eiwtbGlnaHRWZWN0b3JXKTt2YXIgY29zQW5nbGU6IGYzMj1tYXgoMC4sZG90UHJvZHVjdCk7aWYgKGNvc0FuZ2xlPj1saWdodERpcmVjdGlvbi53KVxue2F0dGVudWF0aW9uKj1nZXRJRVNBdHRlbnVhdGlvbihkb3RQcm9kdWN0LGllc0xpZ2h0VGV4dHVyZSxpZXNMaWdodFRleHR1cmVTYW1wbGVyKTtyZXR1cm4gY29tcHV0ZUJhc2ljU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLGxpZ2h0VmVjdG9yVyx2Tm9ybWFsLGF0dGVudWF0aW9uLGRpZmZ1c2VDb2xvcixzcGVjdWxhckNvbG9yLGdsb3NzaW5lc3MpO31cbnZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbztyZXN1bHQuZGlmZnVzZT12ZWMzZigwLik7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXI9dmVjM2YoMC4pO1xuI2VuZGlmXG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9MC47XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxuZm4gY29tcHV0ZVNwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVzogdmVjM2Ysdk5vcm1hbDogdmVjM2YgLGxpZ2h0RGF0YTogdmVjNGYsbGlnaHREaXJlY3Rpb246IHZlYzRmLGRpZmZ1c2VDb2xvcjogdmVjM2Ysc3BlY3VsYXJDb2xvcjogdmVjM2YscmFuZ2U6IGYzMixnbG9zc2luZXNzOiBmMzIpLT5saWdodGluZ0luZm8ge3ZhciBkaXJlY3Rpb246IHZlYzNmPWxpZ2h0RGF0YS54eXotZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVzt2YXIgbGlnaHRWZWN0b3JXOiB2ZWMzZj1ub3JtYWxpemUoZGlyZWN0aW9uKTt2YXIgYXR0ZW51YXRpb246IGYzMj1tYXgoMC4sMS4wLWxlbmd0aChkaXJlY3Rpb24pL3JhbmdlKTt2YXIgY29zQW5nbGU6IGYzMj1tYXgoMC4sZG90KGxpZ2h0RGlyZWN0aW9uLnh5eiwtbGlnaHRWZWN0b3JXKSk7aWYgKGNvc0FuZ2xlPj1saWdodERpcmVjdGlvbi53KVxue2F0dGVudWF0aW9uKj1nZXRBdHRlbnVhdGlvbihjb3NBbmdsZSxsaWdodERhdGEudyk7cmV0dXJuIGNvbXB1dGVCYXNpY1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxsaWdodFZlY3Rvclcsdk5vcm1hbCxhdHRlbnVhdGlvbixkaWZmdXNlQ29sb3Isc3BlY3VsYXJDb2xvcixnbG9zc2luZXNzKTt9XG52YXIgcmVzdWx0OiBsaWdodGluZ0luZm87cmVzdWx0LmRpZmZ1c2U9dmVjM2YoMC4pO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyPXZlYzNmKDAuKTtcbiNlbmRpZlxuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPTAuO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZuIGNvbXB1dGVIZW1pc3BoZXJpY0xpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XOiB2ZWMzZix2Tm9ybWFsOiB2ZWMzZixsaWdodERhdGE6IHZlYzRmLGRpZmZ1c2VDb2xvcjogdmVjM2Ysc3BlY3VsYXJDb2xvcjogdmVjM2YsZ3JvdW5kQ29sb3I6IHZlYzNmLGdsb3NzaW5lc3M6IGYzMiktPmxpZ2h0aW5nSW5mbyB7dmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO3ZhciBuZGw6IGYzMj1kb3Qodk5vcm1hbCxsaWdodERhdGEueHl6KSowLjUrMC41O1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bWl4KGdyb3VuZENvbG9yLGRpZmZ1c2VDb2xvcixuZGwpO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmFyIGFuZ2xlVzogdmVjM2Y9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0RGF0YS54eXopO3ZhciBzcGVjQ29tcDogZjMyPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvcjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbiBjb21wdXRlUHJvamVjdGlvblRleHR1cmVEaWZmdXNlTGlnaHRpbmcocHJvamVjdGlvbkxpZ2h0VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LHByb2plY3Rpb25MaWdodFNhbXBsZXI6IHNhbXBsZXIsdGV4dHVyZVByb2plY3Rpb25NYXRyaXg6IG1hdDR4NGYscG9zVzogdmVjM2YpLT52ZWMzZiB7dmFyIHN0cnE6IHZlYzRmPXRleHR1cmVQcm9qZWN0aW9uTWF0cml4KnZlYzRmKHBvc1csMS4wKTtzdHJxLz1zdHJxLnc7dmFyIHRleHR1cmVDb2xvcjogdmVjM2Y9dGV4dHVyZVNhbXBsZShwcm9qZWN0aW9uTGlnaHRUZXh0dXJlLHByb2plY3Rpb25MaWdodFNhbXBsZXIsc3RycS54eSkucmdiO3JldHVybiB0ZXh0dXJlQ29sb3I7fVxuI2lmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG4jaW5jbHVkZTxsdGNIZWxwZXJGdW5jdGlvbnM+XG52YXIgYXJlYUxpZ2h0c0xUQzFTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgYXJlYUxpZ2h0c0xUQzFTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47dmFyIGFyZWFMaWdodHNMVEMyU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGFyZWFMaWdodHNMVEMyU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O2ZuIGNvbXB1dGVBcmVhTGlnaHRpbmcobHRjMTogdGV4dHVyZV8yZDxmMzI+LGx0YzFTYW1wbGVyOnNhbXBsZXIsbHRjMjp0ZXh0dXJlXzJkPGYzMj4sbHRjMlNhbXBsZXI6c2FtcGxlcix2aWV3RGlyZWN0aW9uVzogdmVjM2Ysdk5vcm1hbDp2ZWMzZix2UG9zaXRpb246dmVjM2YsbGlnaHRQb3NpdGlvbjp2ZWMzZixoYWxmV2lkdGg6dmVjM2YsIGhhbGZIZWlnaHQ6dmVjM2YsZGlmZnVzZUNvbG9yOnZlYzNmLHNwZWN1bGFyQ29sb3I6dmVjM2Yscm91Z2huZXNzOmYzMiApLT5saWdodGluZ0luZm9cbnt2YXIgcmVzdWx0OiBsaWdodGluZ0luZm87dmFyIGRhdGE6IGFyZWFMaWdodERhdGE9Y29tcHV0ZUFyZWFMaWdodFNwZWN1bGFyRGlmZnVzZUZyZXNuZWwobHRjMSxsdGMxU2FtcGxlcixsdGMyLGx0YzJTYW1wbGVyLHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsdlBvc2l0aW9uLGxpZ2h0UG9zaXRpb24saGFsZldpZHRoLGhhbGZIZWlnaHQscm91Z2huZXNzKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZhciBmcmVzbmVsOnZlYzNmPSggc3BlY3VsYXJDb2xvcipkYXRhLkZyZXNuZWwueCsoIHZlYzNmKCAxLjAgKS1zcGVjdWxhckNvbG9yICkqZGF0YS5GcmVzbmVsLnkgKTtyZXN1bHQuc3BlY3VsYXIrPXNwZWN1bGFyQ29sb3IqZnJlc25lbCpkYXRhLlNwZWN1bGFyO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZSs9ZGlmZnVzZUNvbG9yKmRhdGEuRGlmZnVzZTtyZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG4jaW5jbHVkZTxjbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9ucz5cbmZuIGNvbXB1dGVDbHVzdGVyZWRMaWdodGluZyhcbmxpZ2h0RGF0YVRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixcbnRpbGVNYXNrQnVmZmVyOiBwdHI8c3RvcmFnZSxhcnJheTx1MzI+PixcbnZpZXdEaXJlY3Rpb25XOiB2ZWMzZixcbnZOb3JtYWw6IHZlYzNmLFxubGlnaHREYXRhOiB2ZWM0ZixcbnNsaWNlUmFuZ2U6IHZlYzJ1LFxuZ2xvc3NpbmVzczogZjMyXG4pLT5saWdodGluZ0luZm8ge3ZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbztsZXQgdGlsZVBvc2l0aW9uPXZlYzJ1KGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KmxpZ2h0RGF0YS54eSk7bGV0IG1hc2tSZXNvbHV0aW9uPXZlYzJ1KGxpZ2h0RGF0YS56dyk7dmFyIHRpbGVJbmRleD0odGlsZVBvc2l0aW9uLngqbWFza1Jlc29sdXRpb24ueCt0aWxlUG9zaXRpb24ueSkqbWFza1Jlc29sdXRpb24ueTtsZXQgYmF0Y2hSYW5nZT1zbGljZVJhbmdlL0NMVVNUTElHSFRfQkFUQ0g7dmFyIGJhdGNoT2Zmc2V0PWJhdGNoUmFuZ2UueCpDTFVTVExJR0hUX0JBVENIO3RpbGVJbmRleCs9YmF0Y2hSYW5nZS54O2ZvciAodmFyIGk9YmF0Y2hSYW5nZS54OyBpPD1iYXRjaFJhbmdlLnk7IGkrPTEpIHt2YXIgbWFzaz10aWxlTWFza0J1ZmZlclt0aWxlSW5kZXhdO3RpbGVJbmRleCs9MTtsZXQgbWFza09mZnNldD1tYXgoc2xpY2VSYW5nZS54LGJhdGNoT2Zmc2V0KS1iYXRjaE9mZnNldDsgXG5sZXQgbWFza1dpZHRoPW1pbihzbGljZVJhbmdlLnktYmF0Y2hPZmZzZXQrMSxDTFVTVExJR0hUX0JBVENIKTttYXNrPWV4dHJhY3RCaXRzKG1hc2ssbWFza09mZnNldCxtYXNrV2lkdGgpO3doaWxlIG1hc2sgIT0gMCB7bGV0IHRyYWlsaW5nPWZpcnN0VHJhaWxpbmdCaXQobWFzayk7bWFzayBePSAxdTw8dHJhaWxpbmc7bGV0IGxpZ2h0PWdldENsdXN0ZXJlZExpZ2h0KGxpZ2h0RGF0YVRleHR1cmUsYmF0Y2hPZmZzZXQrbWFza09mZnNldCt0cmFpbGluZyk7dmFyIGluZm86IGxpZ2h0aW5nSW5mbztpZiBsaWdodC52TGlnaHREaXJlY3Rpb24udzwwLjAge2luZm89Y29tcHV0ZUxpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsbGlnaHQudkxpZ2h0RGF0YSxsaWdodC52TGlnaHREaWZmdXNlLnJnYixsaWdodC52TGlnaHRTcGVjdWxhci5yZ2IsbGlnaHQudkxpZ2h0RGlmZnVzZS5hLGdsb3NzaW5lc3MpO30gZWxzZSB7aW5mbz1jb21wdXRlU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsbGlnaHQudkxpZ2h0RGF0YSxsaWdodC52TGlnaHREaXJlY3Rpb24sbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IsbGlnaHQudkxpZ2h0U3BlY3VsYXIucmdiLGxpZ2h0LnZMaWdodERpZmZ1c2UuYSxnbG9zc2luZXNzKTt9XG5yZXN1bHQuZGlmZnVzZSs9aW5mby5kaWZmdXNlO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyKz1pbmZvLnNwZWN1bGFyO1xuI2VuZGlmXG59XG5iYXRjaE9mZnNldCs9Q0xVU1RMSUdIVF9CQVRDSDt9XG5yZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1BSU5VVntYfVxudmFyeWluZyB2TWFpblVWe1h9OiB2ZWMyZjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9pdERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxuI2RlZmluZSBNQVhfREVQVEggOTk5OTkuMFxudmFyIG9pdERlcHRoU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIG9pdERlcHRoU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3ZhciBvaXRGcm9udENvbG9yU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIG9pdEZyb250Q29sb3JTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvaXREZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9pdEZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxudmFyIGZyYWdEZXB0aDogZjMyPWZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLno7IFxuI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWV8xNkJJVFNcbnZhciBoYWxmRmxvYXQ6IHUzMj1wYWNrMngxNmZsb2F0KCB2ZWMyZihmcmFnRGVwdGgpKTt2YXIgZnVsbDogdmVjMmY9dW5wYWNrMngxNmZsb2F0KGhhbGZGbG9hdCk7ZnJhZ0RlcHRoPWZ1bGwueDtcbiNlbmRpZlxudmFyIGZyYWdDb29yZDogdmVjMmk9dmVjMmkoZnJhZ21lbnRJbnB1dHMucG9zaXRpb24ueHkpO3ZhciBsYXN0RGVwdGg6IHZlYzJmPXRleHR1cmVMb2FkKG9pdERlcHRoU2FtcGxlcixmcmFnQ29vcmQsMCkucmc7dmFyIGxhc3RGcm9udENvbG9yOiB2ZWM0Zj10ZXh0dXJlTG9hZChvaXRGcm9udENvbG9yU2FtcGxlcixmcmFnQ29vcmQsMCk7ZnJhZ21lbnRPdXRwdXRzLmRlcHRoPXZlYzJmKC1NQVhfREVQVEgpO2ZyYWdtZW50T3V0cHV0cy5mcm9udENvbG9yPWxhc3RGcm9udENvbG9yO2ZyYWdtZW50T3V0cHV0cy5iYWNrQ29sb3I9IHZlYzRmKDAuMCk7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZhciBmdXJ0aGVzdERlcHRoOiBmMzI9LWxhc3REZXB0aC54O3ZhciBuZWFyZXN0RGVwdGg6IGYzMj1sYXN0RGVwdGgueTtcbiNlbHNlXG52YXIgbmVhcmVzdERlcHRoOiBmMzI9LWxhc3REZXB0aC54O3ZhciBmdXJ0aGVzdERlcHRoOiBmMzI9bGFzdERlcHRoLnk7XG4jZW5kaWZcbnZhciBhbHBoYU11bHRpcGxpZXI6IGYzMj0xLjAtbGFzdEZyb250Q29sb3IuYTtcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuaWYgKGZyYWdEZXB0aD5uZWFyZXN0RGVwdGggfHwgZnJhZ0RlcHRoPGZ1cnRoZXN0RGVwdGgpIHtcbiNlbHNlXG5pZiAoZnJhZ0RlcHRoPG5lYXJlc3REZXB0aCB8fCBmcmFnRGVwdGg+ZnVydGhlc3REZXB0aCkge1xuI2VuZGlmXG5yZXR1cm4gZnJhZ21lbnRPdXRwdXRzO31cbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuaWYgKGZyYWdEZXB0aDxuZWFyZXN0RGVwdGggJiYgZnJhZ0RlcHRoPmZ1cnRoZXN0RGVwdGgpIHtcbiNlbHNlXG5pZiAoZnJhZ0RlcHRoPm5lYXJlc3REZXB0aCAmJiBmcmFnRGVwdGg8ZnVydGhlc3REZXB0aCkge1xuI2VuZGlmXG5mcmFnbWVudE91dHB1dHMuZGVwdGg9dmVjMmYoLWZyYWdEZXB0aCxmcmFnRGVwdGgpO3JldHVybiBmcmFnbWVudE91dHB1dHM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb2l0RnJhZ21lbnRXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwcmVQYXNzRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgUFJFUEFTU1xuI2lmZGVmIFBSRVBBU1NfTE9DQUxfUE9TSVRJT05cbnZhcnlpbmcgdlBvc2l0aW9uIDogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0RFUFRIXG52YXJ5aW5nIHZWaWV3UG9zOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfTk9STUFMSVpFRF9WSUVXX0RFUFRIXG52YXJ5aW5nIHZOb3JtVmlld0RlcHRoOiBmMzI7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpXG52YXJ5aW5nIHZDdXJyZW50UG9zaXRpb246IHZlYzRmO3ZhcnlpbmcgdlByZXZpb3VzUG9zaXRpb246IHZlYzRmO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwcmVQYXNzRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBfREVGSU5FTkFNRV9cbiNpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09MVxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVYxXG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09MlxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVYyXG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09M1xuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVYzXG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09NFxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVY0XG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09NVxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVY1XG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09NlxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVY2XG4jZWxzZVxudmFyeWluZyB2X1ZBUllJTkdOQU1FX1VWOiB2ZWMyZjtcbiNlbmRpZlxudmFyIF9TQU1QTEVSTkFNRV9TYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgX1NBTVBMRVJOQU1FX1NhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZGVmYXVsdFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vaXREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZyZXNuZWxGdW5jdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9yZWZsZWN0aW9uRnVuY3Rpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudE1haW5GdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcEZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZWNhbEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2RlcHRoUHJlUGFzc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb2l0RnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwiZGVmYXVsdFBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2luY2x1ZGU8ZGVmYXVsdFVib0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8cHJlUGFzc0RlY2xhcmF0aW9uPltTQ0VORV9NUlRfQ09VTlRdXG4jaW5jbHVkZTxvaXREZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFR0lOXG52YXJ5aW5nIHZQb3NpdGlvblc6IHZlYzNmO1xuI2lmZGVmIE5PUk1BTFxudmFyeWluZyB2Tm9ybWFsVzogdmVjM2Y7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbnZhcnlpbmcgdkNvbG9yOiB2ZWM0ZjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG52YXJ5aW5nIHZWaWV3RGVwdGg6IGYzMjtcbiNlbmRpZlxuI2luY2x1ZGU8bWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uPlsxLi43XVxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8bGlnaHRVYm9EZWNsYXJhdGlvbj5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8bGlnaHRzRnJhZ21lbnRGdW5jdGlvbnM+XG4jaW5jbHVkZTxzaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnM+XG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERJRkZVU0UsX1ZBUllJTkdOQU1FXyxEaWZmdXNlLF9TQU1QTEVSTkFNRV8sZGlmZnVzZSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVCxfVkFSWUlOR05BTUVfLEFtYmllbnQsX1NBTVBMRVJOQU1FXyxhbWJpZW50KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxPUEFDSVRZLF9WQVJZSU5HTkFNRV8sT3BhY2l0eSxfU0FNUExFUk5BTUVfLG9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSVZFLF9WQVJZSU5HTkFNRV8sRW1pc3NpdmUsX1NBTVBMRVJOQU1FXyxlbWlzc2l2ZSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTElHSFRNQVAsX1ZBUllJTkdOQU1FXyxMaWdodG1hcCxfU0FNUExFUk5BTUVfLGxpZ2h0bWFwKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsLF9TQU1QTEVSTkFNRV8sZGVjYWwpXG4jaWZkZWYgUkVGUkFDVElPTlxuI2lmZGVmIFJFRlJBQ1RJT05NQVBfM0RcbnZhciByZWZyYWN0aW9uQ3ViZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZyYWN0aW9uQ3ViZVNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+O1xuI2Vsc2VcbnZhciByZWZyYWN0aW9uMkRTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmcmFjdGlvbjJEU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNQRUNVTEFSVEVSTSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVIsX1ZBUllJTkdOQU1FXyxTcGVjdWxhcixfU0FNUExFUk5BTUVfLHNwZWN1bGFyKVxuI2VuZGlmXG4jaW5jbHVkZTxmcmVzbmVsRnVuY3Rpb24+XG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciByZWZsZWN0aW9uQ3ViZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZsZWN0aW9uQ3ViZVNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+O1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uMkRTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvbjJEU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdlBvc2l0aW9uVVZXOiB2ZWMzZjtcbiNlbHNlXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2RGlyZWN0aW9uVzogdmVjM2Y7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8cmVmbGVjdGlvbkZ1bmN0aW9uPlxuI2VuZGlmXG4jaW5jbHVkZTxpbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPGJ1bXBGcmFnbWVudE1haW5GdW5jdGlvbnM+XG4jaW5jbHVkZTxidW1wRnJhZ21lbnRGdW5jdGlvbnM+XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbnZhciB2aWV3RGlyZWN0aW9uVzogdmVjM2Y9bm9ybWFsaXplKHNjZW5lLnZFeWVQb3NpdGlvbi54eXotZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyk7dmFyIGJhc2VDb2xvcjogdmVjNGY9IHZlYzRmKDEuLDEuLDEuLDEuKTt2YXIgZGlmZnVzZUNvbG9yOiB2ZWMzZj11bmlmb3Jtcy52RGlmZnVzZUNvbG9yLnJnYjt2YXIgYWxwaGE6IGYzMj11bmlmb3Jtcy52RGlmZnVzZUNvbG9yLmE7XG4jaWZkZWYgTk9STUFMXG52YXIgbm9ybWFsVzogdmVjM2Y9bm9ybWFsaXplKGZyYWdtZW50SW5wdXRzLnZOb3JtYWxXKTtcbiNlbHNlXG52YXIgbm9ybWFsVzogdmVjM2Y9bm9ybWFsaXplKGNyb3NzKGRwZHgoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyksZHBkeShmcmFnbWVudElucHV0cy52UG9zaXRpb25XKSkpKiBzY2VuZS52RXllUG9zaXRpb24udztcbiNlbmRpZlxuI2luY2x1ZGU8YnVtcEZyYWdtZW50PlxuI2lmZGVmIFRXT1NJREVETElHSFRJTkdcbm5vcm1hbFc9c2VsZWN0KC1ub3JtYWxXLG5vcm1hbFcsZnJhZ21lbnRJbnB1dHMuZnJvbnRGYWNpbmcpO1xuI2VuZGlmXG4jaWZkZWYgRElGRlVTRVxuYmFzZUNvbG9yPXRleHR1cmVTYW1wbGUoZGlmZnVzZVNhbXBsZXIsZGlmZnVzZVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZEaWZmdXNlVVYrdXZPZmZzZXQpO1xuI2lmIGRlZmluZWQoQUxQSEFURVNUKSAmJiAhZGVmaW5lZChBTFBIQVRFU1RfQUZURVJBTExBTFBIQUNPTVBVVEFUSU9OUylcbmlmIChiYXNlQ29sb3IuYTx1bmlmb3Jtcy5hbHBoYUN1dE9mZikge2Rpc2NhcmQ7fVxuI2VuZGlmXG4jaWZkZWYgQUxQSEFGUk9NRElGRlVTRVxuYWxwaGEqPWJhc2VDb2xvci5hO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfQUxQSEFcbmJhc2VDb2xvcj12ZWM0ZihiYXNlQ29sb3IucmdiKnVuaWZvcm1zLnZEaWZmdXNlSW5mb3MueSxiYXNlQ29sb3IuYSk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKERFQ0FMKSAmJiAhZGVmaW5lZChERUNBTF9BRlRFUl9ERVRBSUwpXG52YXIgZGVjYWxDb2xvcjogdmVjNGY9dGV4dHVyZVNhbXBsZShkZWNhbFNhbXBsZXIsZGVjYWxTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RGVjYWxVVit1dk9mZnNldCk7XG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50PihzdXJmYWNlQWxiZWRvLGJhc2VDb2xvcixHQU1NQURFQ0FMLF9HQU1NQURFQ0FMX05PVFVTRURfKVxuI2VuZGlmXG4jaW5jbHVkZTxkZXB0aFByZVBhc3M+XG4jaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG5iYXNlQ29sb3I9dmVjNGYoYmFzZUNvbG9yLnJnYipmcmFnbWVudElucHV0cy52Q29sb3IucmdiLGJhc2VDb2xvci5hKTtcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuYmFzZUNvbG9yPXZlYzRmKGJhc2VDb2xvci5yZ2IqMi4wKm1peCgwLjUsZGV0YWlsQ29sb3Iucix1bmlmb3Jtcy52RGV0YWlsSW5mb3MueSksYmFzZUNvbG9yLmEpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChERUNBTCkgJiYgZGVmaW5lZChERUNBTF9BRlRFUl9ERVRBSUwpXG52YXIgZGVjYWxDb2xvcjogdmVjNGY9dGV4dHVyZVNhbXBsZShkZWNhbFNhbXBsZXIsZGVjYWxTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RGVjYWxVVit1dk9mZnNldCk7XG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50PihzdXJmYWNlQWxiZWRvLGJhc2VDb2xvcixHQU1NQURFQ0FMLF9HQU1NQURFQ0FMX05PVFVTRURfKVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfRElGRlVTRVxudmFyIGJhc2VBbWJpZW50Q29sb3I6IHZlYzNmPSB2ZWMzZigxLiwxLiwxLik7XG4jaWZkZWYgQU1CSUVOVFxuYmFzZUFtYmllbnRDb2xvcj10ZXh0dXJlU2FtcGxlKGFtYmllbnRTYW1wbGVyLGFtYmllbnRTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QW1iaWVudFVWK3V2T2Zmc2V0KS5yZ2IqdW5pZm9ybXMudkFtYmllbnRJbmZvcy55O1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfTElHSFRTXG52YXIgZ2xvc3NpbmVzczogZjMyPXVuaWZvcm1zLnZTcGVjdWxhckNvbG9yLmE7dmFyIHNwZWN1bGFyQ29sb3I6IHZlYzNmPXVuaWZvcm1zLnZTcGVjdWxhckNvbG9yLnJnYjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZmRlZiBTUEVDVUxBUlxudmFyIHNwZWN1bGFyTWFwQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUoc3BlY3VsYXJTYW1wbGVyLHNwZWN1bGFyU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudlNwZWN1bGFyVVYrdXZPZmZzZXQpO3NwZWN1bGFyQ29sb3I9c3BlY3VsYXJNYXBDb2xvci5yZ2I7XG4jaWZkZWYgR0xPU1NJTkVTU1xuZ2xvc3NpbmVzcz1nbG9zc2luZXNzKnNwZWN1bGFyTWFwQ29sb3IuYTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbnZhciBkaWZmdXNlQmFzZTogdmVjM2Y9IHZlYzNmKDAuLDAuLDAuKTt2YXIgaW5mbzogbGlnaHRpbmdJbmZvO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmFyIHNwZWN1bGFyQmFzZTogdmVjM2Y9IHZlYzNmKDAuLDAuLDAuKTtcbiNlbmRpZlxudmFyIHNoYWRvdzogZjMyPTEuO3ZhciBhZ2dTaGFkb3c6IGYzMj0wLjt2YXIgbnVtTGlnaHRzOiBmMzI9MC47XG4jaWZkZWYgTElHSFRNQVBcbnZhciBsaWdodG1hcENvbG9yOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGxpZ2h0bWFwU2FtcGxlcixsaWdodG1hcFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZMaWdodG1hcFVWK3V2T2Zmc2V0KTtcbiNpZmRlZiBSR0JETElHSFRNQVBcbmxpZ2h0bWFwQ29sb3I9dmVjNGYoZnJvbVJHQkQobGlnaHRtYXBDb2xvciksbGlnaHRtYXBDb2xvci5hKTtcbiNlbmRpZlxubGlnaHRtYXBDb2xvcj12ZWM0ZihsaWdodG1hcENvbG9yLnJnYip1bmlmb3Jtcy52TGlnaHRtYXBJbmZvcy55LGxpZ2h0bWFwQ29sb3IuYSk7XG4jZW5kaWZcbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbmFnZ1NoYWRvdz1hZ2dTaGFkb3cvbnVtTGlnaHRzO3ZhciByZWZyYWN0aW9uQ29sb3I6IHZlYzRmPSB2ZWM0ZigwLiwwLiwwLiwxLik7XG4jaWZkZWYgUkVGUkFDVElPTlxudmFyIHJlZnJhY3Rpb25WZWN0b3I6IHZlYzNmPW5vcm1hbGl6ZShyZWZyYWN0KC12aWV3RGlyZWN0aW9uVyxub3JtYWxXLHVuaWZvcm1zLnZSZWZyYWN0aW9uSW5mb3MueSkpO1xuI2lmZGVmIFJFRlJBQ1RJT05NQVBfM0RcbiNpZmRlZiBVU0VfTE9DQUxfUkVGUkFDVElPTk1BUF9DVUJJQ1xucmVmcmFjdGlvblZlY3Rvcj1wYXJhbGxheENvcnJlY3ROb3JtYWwoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxyZWZyYWN0aW9uVmVjdG9yLHVuaWZvcm1zLnZSZWZyYWN0aW9uU2l6ZSx1bmlmb3Jtcy52UmVmcmFjdGlvblBvc2l0aW9uKTtcbiNlbmRpZlxucmVmcmFjdGlvblZlY3Rvci55PXJlZnJhY3Rpb25WZWN0b3IueSp1bmlmb3Jtcy52UmVmcmFjdGlvbkluZm9zLnc7dmFyIHJlZnJhY3Rpb25Mb29rdXA6IHZlYzRmPXRleHR1cmVTYW1wbGUocmVmcmFjdGlvbkN1YmVTYW1wbGVyLHJlZnJhY3Rpb25DdWJlU2FtcGxlclNhbXBsZXIscmVmcmFjdGlvblZlY3Rvcik7aWYgKGRvdChyZWZyYWN0aW9uVmVjdG9yLHZpZXdEaXJlY3Rpb25XKTwxLjApIHtyZWZyYWN0aW9uQ29sb3I9cmVmcmFjdGlvbkxvb2t1cDt9XG4jZWxzZVxudmFyIHZSZWZyYWN0aW9uVVZXOiB2ZWMzZj0gKHVuaWZvcm1zLnJlZnJhY3Rpb25NYXRyaXgqKHNjZW5lLnZpZXcqIHZlYzRmKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcrcmVmcmFjdGlvblZlY3Rvcip1bmlmb3Jtcy52UmVmcmFjdGlvbkluZm9zLnosMS4wKSkpLnh5ejt2YXIgcmVmcmFjdGlvbkNvb3JkczogdmVjMmY9dlJlZnJhY3Rpb25VVlcueHkvdlJlZnJhY3Rpb25VVlcuejtyZWZyYWN0aW9uQ29vcmRzLnk9MS4wLXJlZnJhY3Rpb25Db29yZHMueTtyZWZyYWN0aW9uQ29sb3I9dGV4dHVyZVNhbXBsZShyZWZyYWN0aW9uMkRTYW1wbGVyLHJlZnJhY3Rpb24yRFNhbXBsZXJTYW1wbGVyLHJlZnJhY3Rpb25Db29yZHMpO1xuI2VuZGlmXG4jaWZkZWYgUkdCRFJFRlJBQ1RJT05cbnJlZnJhY3Rpb25Db2xvcj12ZWM0Zihmcm9tUkdCRChyZWZyYWN0aW9uQ29sb3IpLHJlZnJhY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxuI2lmZGVmIElTX1JFRlJBQ1RJT05fTElORUFSXG5yZWZyYWN0aW9uQ29sb3I9dmVjNGYodG9HYW1tYVNwYWNlVmVjMyhyZWZyYWN0aW9uQ29sb3IucmdiKSxyZWZyYWN0aW9uQ29sb3IuYSk7XG4jZW5kaWZcbnJlZnJhY3Rpb25Db2xvcj12ZWM0ZihyZWZyYWN0aW9uQ29sb3IucmdiKnVuaWZvcm1zLnZSZWZyYWN0aW9uSW5mb3MueCxyZWZyYWN0aW9uQ29sb3IuYSk7XG4jZW5kaWZcbnZhciByZWZsZWN0aW9uQ29sb3I6IHZlYzRmPSB2ZWM0ZigwLiwwLiwwLiwxLik7XG4jaWZkZWYgUkVGTEVDVElPTlxudmFyIHZSZWZsZWN0aW9uVVZXOiB2ZWMzZj1jb21wdXRlUmVmbGVjdGlvbkNvb3JkcyggdmVjNGYoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVywxLjApLG5vcm1hbFcpO1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG52UmVmbGVjdGlvblVWVz12ZWMzZih2UmVmbGVjdGlvblVWVy54LHZSZWZsZWN0aW9uVVZXLnksdlJlZmxlY3Rpb25VVlcueiotMS4wKTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbiNpZmRlZiBST1VHSE5FU1NcbnZhciBiaWFzOiBmMzI9dW5pZm9ybXMudlJlZmxlY3Rpb25JbmZvcy55O1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxuI2lmZGVmIFNQRUNVTEFSXG4jaWZkZWYgR0xPU1NJTkVTU1xuYmlhcyo9KDEuMC1zcGVjdWxhck1hcENvbG9yLmEpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxucmVmbGVjdGlvbkNvbG9yPXRleHR1cmVTYW1wbGVMZXZlbChyZWZsZWN0aW9uQ3ViZVNhbXBsZXIscmVmbGVjdGlvbkN1YmVTYW1wbGVyU2FtcGxlcix2UmVmbGVjdGlvblVWVyxiaWFzKTtcbiNlbHNlXG5yZWZsZWN0aW9uQ29sb3I9dGV4dHVyZVNhbXBsZShyZWZsZWN0aW9uQ3ViZVNhbXBsZXIscmVmbGVjdGlvbkN1YmVTYW1wbGVyU2FtcGxlcix2UmVmbGVjdGlvblVWVyk7XG4jZW5kaWZcbiNlbHNlXG52YXIgY29vcmRzOiB2ZWMyZj12UmVmbGVjdGlvblVWVy54eTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1BST0pFQ1RJT05cbmNvb3Jkcy89dlJlZmxlY3Rpb25VVlcuejtcbiNlbmRpZlxuY29vcmRzLnk9MS4wLWNvb3Jkcy55O3JlZmxlY3Rpb25Db2xvcj10ZXh0dXJlU2FtcGxlKHJlZmxlY3Rpb24yRFNhbXBsZXIscmVmbGVjdGlvbjJEU2FtcGxlclNhbXBsZXIsY29vcmRzKTtcbiNlbmRpZlxuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5yZWZsZWN0aW9uQ29sb3I9dmVjNGYoZnJvbVJHQkQocmVmbGVjdGlvbkNvbG9yKSxyZWZsZWN0aW9uQ29sb3IuYSk7XG4jZW5kaWZcbiNpZmRlZiBJU19SRUZMRUNUSU9OX0xJTkVBUlxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHRvR2FtbWFTcGFjZVZlYzMocmVmbGVjdGlvbkNvbG9yLnJnYikscmVmbGVjdGlvbkNvbG9yLmEpO1xuI2VuZGlmXG5yZWZsZWN0aW9uQ29sb3I9dmVjNGYocmVmbGVjdGlvbkNvbG9yLnJnYip1bmlmb3Jtcy52UmVmbGVjdGlvbkluZm9zLngscmVmbGVjdGlvbkNvbG9yLmEpO1xuI2lmZGVmIFJFRkxFQ1RJT05GUkVTTkVMXG52YXIgcmVmbGVjdGlvbkZyZXNuZWxUZXJtOiBmMzI9Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdW5pZm9ybXMucmVmbGVjdGlvblJpZ2h0Q29sb3IuYSx1bmlmb3Jtcy5yZWZsZWN0aW9uTGVmdENvbG9yLmEpO1xuI2lmZGVmIFJFRkxFQ1RJT05GUkVTTkVMRlJPTVNQRUNVTEFSXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZWZsZWN0aW9uQ29sb3I9dmVjNGYocmVmbGVjdGlvbkNvbG9yLnJnYipzcGVjdWxhckNvbG9yLnJnYiooMS4wLXJlZmxlY3Rpb25GcmVzbmVsVGVybSkrcmVmbGVjdGlvbkZyZXNuZWxUZXJtKnVuaWZvcm1zLnJlZmxlY3Rpb25SaWdodENvbG9yLnJnYixyZWZsZWN0aW9uQ29sb3IuYSk7XG4jZWxzZVxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHJlZmxlY3Rpb25Db2xvci5yZ2IqdW5pZm9ybXMucmVmbGVjdGlvbkxlZnRDb2xvci5yZ2IqKDEuMC1yZWZsZWN0aW9uRnJlc25lbFRlcm0pK3JlZmxlY3Rpb25GcmVzbmVsVGVybSp1bmlmb3Jtcy5yZWZsZWN0aW9uUmlnaHRDb2xvci5yZ2IscmVmbGVjdGlvbkNvbG9yLmEpO1xuI2VuZGlmXG4jZWxzZVxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHJlZmxlY3Rpb25Db2xvci5yZ2IqdW5pZm9ybXMucmVmbGVjdGlvbkxlZnRDb2xvci5yZ2IqKDEuMC1yZWZsZWN0aW9uRnJlc25lbFRlcm0pK3JlZmxlY3Rpb25GcmVzbmVsVGVybSp1bmlmb3Jtcy5yZWZsZWN0aW9uUmlnaHRDb2xvci5yZ2IscmVmbGVjdGlvbkNvbG9yLmEpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFRlJBQ1RJT05GUkVTTkVMXG52YXIgcmVmcmFjdGlvbkZyZXNuZWxUZXJtOiBmMzI9Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdW5pZm9ybXMucmVmcmFjdGlvblJpZ2h0Q29sb3IuYSx1bmlmb3Jtcy5yZWZyYWN0aW9uTGVmdENvbG9yLmEpO3JlZnJhY3Rpb25Db2xvcj12ZWM0ZihyZWZyYWN0aW9uQ29sb3IucmdiKnVuaWZvcm1zLnJlZnJhY3Rpb25MZWZ0Q29sb3IucmdiKigxLjAtcmVmcmFjdGlvbkZyZXNuZWxUZXJtKStyZWZyYWN0aW9uRnJlc25lbFRlcm0qdW5pZm9ybXMucmVmcmFjdGlvblJpZ2h0Q29sb3IucmdiLHJlZnJhY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlcbnZhciBvcGFjaXR5TWFwOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKG9wYWNpdHlTYW1wbGVyLG9wYWNpdHlTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52T3BhY2l0eVVWK3V2T2Zmc2V0KTtcbiNpZmRlZiBPUEFDSVRZUkdCXG5vcGFjaXR5TWFwPXZlYzRmKG9wYWNpdHlNYXAucmdiKiB2ZWMzZigwLjMsMC41OSwwLjExKSxvcGFjaXR5TWFwLmEpO2FscGhhKj0ob3BhY2l0eU1hcC54K29wYWNpdHlNYXAueStvcGFjaXR5TWFwLnopKiB1bmlmb3Jtcy52T3BhY2l0eUluZm9zLnk7XG4jZWxzZVxuYWxwaGEqPW9wYWNpdHlNYXAuYSp1bmlmb3Jtcy52T3BhY2l0eUluZm9zLnk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQUxQSEEpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYWxwaGEqPWZyYWdtZW50SW5wdXRzLnZDb2xvci5hO1xuI2VuZGlmXG4jaWZkZWYgT1BBQ0lUWUZSRVNORUxcbnZhciBvcGFjaXR5RnJlc25lbFRlcm06IGYzMj1jb21wdXRlRnJlc25lbFRlcm0odmlld0RpcmVjdGlvblcsbm9ybWFsVyx1bmlmb3Jtcy5vcGFjaXR5UGFydHMueix1bmlmb3Jtcy5vcGFjaXR5UGFydHMudyk7YWxwaGErPXVuaWZvcm1zLm9wYWNpdHlQYXJ0cy54KigxLjAtb3BhY2l0eUZyZXNuZWxUZXJtKStvcGFjaXR5RnJlc25lbFRlcm0qdW5pZm9ybXMub3BhY2l0eVBhcnRzLnk7XG4jZW5kaWZcbiNpZmRlZiBBTFBIQVRFU1RcbiNpZmRlZiBBTFBIQVRFU1RfQUZURVJBTExBTFBIQUNPTVBVVEFUSU9OU1xuaWYgKGFscGhhPHVuaWZvcm1zLmFscGhhQ3V0T2ZmKSB7ZGlzY2FyZDt9XG4jZW5kaWZcbiNpZm5kZWYgQUxQSEFCTEVORFxuYWxwaGE9MS4wO1xuI2VuZGlmXG4jZW5kaWZcbnZhciBlbWlzc2l2ZUNvbG9yOiB2ZWMzZj11bmlmb3Jtcy52RW1pc3NpdmVDb2xvcjtcbiNpZmRlZiBFTUlTU0lWRVxuZW1pc3NpdmVDb2xvcis9dGV4dHVyZVNhbXBsZShlbWlzc2l2ZVNhbXBsZXIsZW1pc3NpdmVTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RW1pc3NpdmVVVit1dk9mZnNldCkucmdiKnVuaWZvcm1zLnZFbWlzc2l2ZUluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBFTUlTU0lWRUZSRVNORUxcbnZhciBlbWlzc2l2ZUZyZXNuZWxUZXJtOiBmMzI9Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdW5pZm9ybXMuZW1pc3NpdmVSaWdodENvbG9yLmEsdW5pZm9ybXMuZW1pc3NpdmVMZWZ0Q29sb3IuYSk7ZW1pc3NpdmVDb2xvcio9dW5pZm9ybXMuZW1pc3NpdmVMZWZ0Q29sb3IucmdiKigxLjAtZW1pc3NpdmVGcmVzbmVsVGVybSkrZW1pc3NpdmVGcmVzbmVsVGVybSp1bmlmb3Jtcy5lbWlzc2l2ZVJpZ2h0Q29sb3IucmdiO1xuI2VuZGlmXG4jaWZkZWYgRElGRlVTRUZSRVNORUxcbnZhciBkaWZmdXNlRnJlc25lbFRlcm06IGYzMj1jb21wdXRlRnJlc25lbFRlcm0odmlld0RpcmVjdGlvblcsbm9ybWFsVyx1bmlmb3Jtcy5kaWZmdXNlUmlnaHRDb2xvci5hLHVuaWZvcm1zLmRpZmZ1c2VMZWZ0Q29sb3IuYSk7ZGlmZnVzZUJhc2UqPXVuaWZvcm1zLmRpZmZ1c2VMZWZ0Q29sb3IucmdiKigxLjAtZGlmZnVzZUZyZXNuZWxUZXJtKStkaWZmdXNlRnJlc25lbFRlcm0qdW5pZm9ybXMuZGlmZnVzZVJpZ2h0Q29sb3IucmdiO1xuI2VuZGlmXG4jaWZkZWYgRU1JU1NJVkVBU0lMTFVNSU5BVElPTlxudmFyIGZpbmFsRGlmZnVzZTogdmVjM2Y9Y2xhbXAoZGlmZnVzZUJhc2UqZGlmZnVzZUNvbG9yK3VuaWZvcm1zLnZBbWJpZW50Q29sb3IsdmVjM2YoMC4wKSx2ZWMzZigxLjApKSpiYXNlQ29sb3IucmdiO1xuI2Vsc2VcbiNpZmRlZiBMSU5LRU1JU1NJVkVXSVRIRElGRlVTRVxudmFyIGZpbmFsRGlmZnVzZTogdmVjM2Y9Y2xhbXAoKGRpZmZ1c2VCYXNlK2VtaXNzaXZlQ29sb3IpKmRpZmZ1c2VDb2xvcit1bmlmb3Jtcy52QW1iaWVudENvbG9yLHZlYzNmKDAuMCksdmVjM2YoMS4wKSkqYmFzZUNvbG9yLnJnYjtcbiNlbHNlXG52YXIgZmluYWxEaWZmdXNlOiB2ZWMzZj1jbGFtcChkaWZmdXNlQmFzZSpkaWZmdXNlQ29sb3IrZW1pc3NpdmVDb2xvcit1bmlmb3Jtcy52QW1iaWVudENvbG9yLHZlYzNmKDAuMCksdmVjM2YoMS4wKSkqYmFzZUNvbG9yLnJnYjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgZmluYWxTcGVjdWxhcjogdmVjM2Y9c3BlY3VsYXJCYXNlKnNwZWN1bGFyQ29sb3I7XG4jaWZkZWYgU1BFQ1VMQVJPVkVSQUxQSEFcbmFscGhhPWNsYW1wKGFscGhhK2RvdChmaW5hbFNwZWN1bGFyLCB2ZWMzZigwLjMsMC41OSwwLjExKSksMC4wLDEuMCk7XG4jZW5kaWZcbiNlbHNlXG52YXIgZmluYWxTcGVjdWxhcjogdmVjM2Y9IHZlYzNmKDAuMCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OT1ZFUkFMUEhBXG5hbHBoYT1jbGFtcChhbHBoYStkb3QocmVmbGVjdGlvbkNvbG9yLnJnYiwgdmVjM2YoMC4zLDAuNTksMC4xMSkpLDAuMCwxLjApO1xuI2VuZGlmXG4jaWZkZWYgRU1JU1NJVkVBU0lMTFVNSU5BVElPTlxudmFyIGNvbG9yOiB2ZWM0Zj0gdmVjNGYoY2xhbXAoZmluYWxEaWZmdXNlKmJhc2VBbWJpZW50Q29sb3IrZmluYWxTcGVjdWxhcityZWZsZWN0aW9uQ29sb3IucmdiK2VtaXNzaXZlQ29sb3IrcmVmcmFjdGlvbkNvbG9yLnJnYiwwLjAsMS4wKSxhbHBoYSk7XG4jZWxzZVxudmFyIGNvbG9yOiB2ZWM0Zj0gdmVjNGYoZmluYWxEaWZmdXNlKmJhc2VBbWJpZW50Q29sb3IrZmluYWxTcGVjdWxhcityZWZsZWN0aW9uQ29sb3IucmdiK3JlZnJhY3Rpb25Db2xvci5yZ2IsYWxwaGEpO1xuI2VuZGlmXG4jaWZkZWYgTElHSFRNQVBcbiNpZm5kZWYgTElHSFRNQVBFWENMVURFRFxuI2lmZGVmIFVTRUxJR0hUTUFQQVNTSEFET1dNQVBcbmNvbG9yPXZlYzRmKGNvbG9yLnJnYipsaWdodG1hcENvbG9yLnJnYixjb2xvci5hKTtcbiNlbHNlXG5jb2xvcj12ZWM0Zihjb2xvci5yZ2IrbGlnaHRtYXBDb2xvci5yZ2IsY29sb3IuYSk7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRk9HXG5jb2xvcj12ZWM0ZihtYXgoY29sb3IucmdiLHZlYzNmKDAuKSksY29sb3IuYSk7XG4jaW5jbHVkZTxsb2dEZXB0aEZyYWdtZW50PlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnQ+XG4jaWZkZWYgSU1BR0VQUk9DRVNTSU5HUE9TVFBST0NFU1NcbmNvbG9yPXZlYzRmKHRvTGluZWFyU3BhY2VWZWMzKGNvbG9yLnJnYiksY29sb3IuYSk7XG4jZWxzZVxuI2lmZGVmIElNQUdFUFJPQ0VTU0lOR1xuY29sb3I9dmVjNGYodG9MaW5lYXJTcGFjZVZlYzMoY29sb3IucmdiKSxjb2xvci5hKTtjb2xvcj1hcHBseUltYWdlUHJvY2Vzc2luZyhjb2xvcik7XG4jZW5kaWZcbiNlbmRpZlxuY29sb3I9dmVjNGYoY29sb3IucmdiLGNvbG9yLmEqbWVzaC52aXNpYmlsaXR5KTtcbiNpZmRlZiBQUkVNVUxUSVBMWUFMUEhBXG5jb2xvcj12ZWM0Zihjb2xvci5yZ2IqY29sb3IuYSwgY29sb3IuYSk7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GUkFHQ09MT1JcbiNpZmRlZiBQUkVQQVNTXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjBcbnZhciB3cml0ZUdlb21ldHJ5SW5mbzogZjMyPXNlbGVjdCgwLjAsMS4wLGNvbG9yLmE+MC40KTt2YXIgZnJhZ0RhdGE6IGFycmF5PHZlYzQ8ZjMyPixTQ0VORV9NUlRfQ09VTlQ+O1xuI2lmZGVmIFBSRVBBU1NfQ09MT1JcbmZyYWdEYXRhW1BSRVBBU1NfQ09MT1JfSU5ERVhdPWNvbG9yOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfUE9TSVRJT05cbmZyYWdEYXRhW1BSRVBBU1NfUE9TSVRJT05fSU5ERVhdPXZlYzRmKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19MT0NBTF9QT1NJVElPTlxuZnJhZ0RhdGFbUFJFUEFTU19MT0NBTF9QT1NJVElPTl9JTkRFWF09dmVjNGYoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfVkVMT0NJVFlcbnZhciBhOiB2ZWMyZj0oZnJhZ21lbnRJbnB1dHMudkN1cnJlbnRQb3NpdGlvbi54eS9mcmFnbWVudElucHV0cy52Q3VycmVudFBvc2l0aW9uLncpKjAuNSswLjU7dmFyIGI6IHZlYzJmPShmcmFnbWVudElucHV0cy52UHJldmlvdXNQb3NpdGlvbi54eS9mcmFnbWVudElucHV0cy52UHJldmlvdXNQb3NpdGlvbi53KSowLjUrMC41O3ZhciB2ZWxvY2l0eTogdmVjMmY9YWJzKGEtYik7dmVsb2NpdHk9IHZlYzJmKHBvdyh2ZWxvY2l0eS54LDEuMC8zLjApLHBvdyh2ZWxvY2l0eS55LDEuMC8zLjApKSpzaWduKGEtYikqMC41KzAuNTtmcmFnRGF0YVtQUkVQQVNTX1ZFTE9DSVRZX0lOREVYXT0gdmVjNGYodmVsb2NpdHksMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbGlmIGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpXG52YXIgdmVsb2NpdHkgOiB2ZWMyZj12ZWMyZigwLjUpKigoZnJhZ21lbnRJbnB1dHMudlByZXZpb3VzUG9zaXRpb24ueHkvZnJhZ21lbnRJbnB1dHMudlByZXZpb3VzUG9zaXRpb24udykgLVxuKGZyYWdtZW50SW5wdXRzLnZDdXJyZW50UG9zaXRpb24ueHkvZnJhZ21lbnRJbnB1dHMudkN1cnJlbnRQb3NpdGlvbi53KSk7ZnJhZ0RhdGFbUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVJfSU5ERVhdPXZlYzRmKHZlbG9jaXR5LDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0lSUkFESUFOQ0VcbmZyYWdEYXRhW1BSRVBBU1NfSVJSQURJQU5DRV9JTkRFWF09dmVjNGYoMC4wLDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfREVQVEhcbmZyYWdEYXRhW1BSRVBBU1NfREVQVEhfSU5ERVhdPXZlYzRmKGZyYWdtZW50SW5wdXRzLnZWaWV3UG9zLnosMC4wLDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7IFxuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19TQ1JFRU5TUEFDRV9ERVBUSFxuZnJhZ0RhdGFbUFJFUEFTU19TQ1JFRU5TUEFDRV9ERVBUSF9JTkRFWF09dmVjNGYoZnJhZ21lbnRJbnB1dHMucG9zaXRpb24ueiwwLjAsMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfTk9STUFMSVpFRF9WSUVXX0RFUFRIXG5mcmFnRGF0YVtQUkVQQVNTX05PUk1BTElaRURfVklFV19ERVBUSF9JTkRFWF09dmVjNGYoZnJhZ21lbnRJbnB1dHMudk5vcm1WaWV3RGVwdGgsMC4wLDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX05PUk1BTFxuI2lmZGVmIFBSRVBBU1NfTk9STUFMX1dPUkxEU1BBQ0VcbmZyYWdEYXRhW1BSRVBBU1NfTk9STUFMX0lOREVYXT12ZWM0Zihub3JtYWxXLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbHNlXG5mcmFnRGF0YVtQUkVQQVNTX05PUk1BTF9JTkRFWF09dmVjNGYobm9ybWFsaXplKChzY2VuZS52aWV3KnZlYzRmKG5vcm1hbFcsMC4wKSkucmdiKSx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfV09STERfTk9STUFMXG5mcmFnRGF0YVtQUkVQQVNTX1dPUkxEX05PUk1BTF9JTkRFWF09dmVjNGYobm9ybWFsVyowLjUrMC41LHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfQUxCRURPXG5mcmFnRGF0YVtQUkVQQVNTX0FMQkVET19JTkRFWF09dmVjNGYoYmFzZUNvbG9yLnJnYix3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0FMQkVET19TUVJUXG5mcmFnRGF0YVtQUkVQQVNTX0FMQkVET19TUVJUX0lOREVYXT12ZWM0ZihzcXJ0KGJhc2VDb2xvci5yZ2IpLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfUkVGTEVDVElWSVRZXG4jaWYgZGVmaW5lZChTUEVDVUxBUilcbmZyYWdEYXRhW1BSRVBBU1NfUkVGTEVDVElWSVRZX0lOREVYXT12ZWM0Zih0b0xpbmVhclNwYWNlVmVjNChzcGVjdWxhck1hcENvbG9yKSkqd3JpdGVHZW9tZXRyeUluZm87IFxuI2Vsc2VcbmZyYWdEYXRhW1BSRVBBU1NfUkVGTEVDVElWSVRZX0lOREVYXT12ZWM0Zih0b0xpbmVhclNwYWNlVmVjMyhzcGVjdWxhckNvbG9yKSwxLjApKndyaXRlR2VvbWV0cnlJbmZvO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+MFxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhMD1mcmFnRGF0YVswXTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD4xXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGExPWZyYWdEYXRhWzFdO1xuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjJcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTI9ZnJhZ0RhdGFbMl07XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+M1xuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhMz1mcmFnRGF0YVszXTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD40XG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGE0PWZyYWdEYXRhWzRdO1xuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjVcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTU9ZnJhZ0RhdGFbNV07XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+NlxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhNj1mcmFnRGF0YVs2XTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD43XG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGE3PWZyYWdEYXRhWzddO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmICFkZWZpbmVkKFBSRVBBU1MpICYmICFkZWZpbmVkKE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWSlcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj1jb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8b2l0RnJhZ21lbnQ+XG4jaWYgT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZXG5pZiAoZnJhZ0RlcHRoPT1uZWFyZXN0RGVwdGgpIHtmcmFnbWVudE91dHB1dHMuZnJvbnRDb2xvcj12ZWM0ZihmcmFnbWVudE91dHB1dHMuZnJvbnRDb2xvci5yZ2IrY29sb3IucmdiKmNvbG9yLmEqYWxwaGFNdWx0aXBsaWVyLDEuMC1hbHBoYU11bHRpcGxpZXIqKDEuMC1jb2xvci5hKSk7fSBlbHNlIHtmcmFnbWVudE91dHB1dHMuYmFja0NvbG9yKz1jb2xvcjt9XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UGl4ZWxTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==