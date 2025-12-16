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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/fresnelFunction.js":
/*!******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/fresnelFunction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fresnelFunctionWGSL: () => (/* binding */ fresnelFunctionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "fresnelFunction";
const shader = `#ifdef FRESNEL
fn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32
{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const fresnelFunctionWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2RlZmF1bHRfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvZGVmYXVsdFVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvZGVwdGhQcmVQYXNzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvZnJlc25lbEZ1bmN0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbGlnaHRzRnJhZ21lbnRGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vaXREZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29pdEZyYWdtZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcHJlUGFzc0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9kZWZhdWx0LmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJkZWZhdWx0VWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB1bmlmb3JtIGRpZmZ1c2VMZWZ0Q29sb3I6IHZlYzRmO3VuaWZvcm0gZGlmZnVzZVJpZ2h0Q29sb3I6IHZlYzRmO3VuaWZvcm0gb3BhY2l0eVBhcnRzOiB2ZWM0Zjt1bmlmb3JtIHJlZmxlY3Rpb25MZWZ0Q29sb3I6IHZlYzRmO3VuaWZvcm0gcmVmbGVjdGlvblJpZ2h0Q29sb3I6IHZlYzRmO3VuaWZvcm0gcmVmcmFjdGlvbkxlZnRDb2xvcjogdmVjNGY7dW5pZm9ybSByZWZyYWN0aW9uUmlnaHRDb2xvcjogdmVjNGY7dW5pZm9ybSBlbWlzc2l2ZUxlZnRDb2xvcjogdmVjNGY7dW5pZm9ybSBlbWlzc2l2ZVJpZ2h0Q29sb3I6IHZlYzRmO3VuaWZvcm0gdkRpZmZ1c2VJbmZvczogdmVjMmY7dW5pZm9ybSB2QW1iaWVudEluZm9zOiB2ZWMyZjt1bmlmb3JtIHZPcGFjaXR5SW5mb3M6IHZlYzJmO3VuaWZvcm0gdkVtaXNzaXZlSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkxpZ2h0bWFwSW5mb3M6IHZlYzJmO3VuaWZvcm0gdlNwZWN1bGFySW5mb3M6IHZlYzJmO3VuaWZvcm0gdkJ1bXBJbmZvczogdmVjM2Y7dW5pZm9ybSBkaWZmdXNlTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYW1iaWVudE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIG9wYWNpdHlNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBlbWlzc2l2ZU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGxpZ2h0bWFwTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gc3BlY3VsYXJNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBidW1wTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlRhbmdlbnRTcGFjZVBhcmFtczogdmVjMmY7dW5pZm9ybSBwb2ludFNpemU6IGYzMjt1bmlmb3JtIGFscGhhQ3V0T2ZmOiBmMzI7dW5pZm9ybSByZWZyYWN0aW9uTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlJlZnJhY3Rpb25JbmZvczogdmVjNGY7dW5pZm9ybSB2UmVmcmFjdGlvblBvc2l0aW9uOiB2ZWMzZjt1bmlmb3JtIHZSZWZyYWN0aW9uU2l6ZTogdmVjM2Y7dW5pZm9ybSB2U3BlY3VsYXJDb2xvcjogdmVjNGY7dW5pZm9ybSB2RW1pc3NpdmVDb2xvcjogdmVjM2Y7dW5pZm9ybSB2RGlmZnVzZUNvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZBbWJpZW50Q29sb3I6IHZlYzNmO3VuaWZvcm0gY2FtZXJhSW5mbzogdmVjNGY7dW5pZm9ybSB2UmVmbGVjdGlvbkluZm9zOiB2ZWMyZjt1bmlmb3JtIHJlZmxlY3Rpb25NYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2UmVmbGVjdGlvblBvc2l0aW9uOiB2ZWMzZjt1bmlmb3JtIHZSZWZsZWN0aW9uU2l6ZTogdmVjM2Y7XG4jZGVmaW5lIEFERElUSU9OQUxfVUJPX0RFQ0xBUkFUSU9OXG4jaW5jbHVkZTxzY2VuZVVib0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bWVzaFVib0RlY2xhcmF0aW9uPlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRVYm9EZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImRlcHRoUHJlUGFzc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBERVBUSFBSRVBBU1NcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj0gdmVjNGYoMC4sMC4sMC4sMS4wKTtyZXR1cm4gZnJhZ21lbnRPdXRwdXRzO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVwdGhQcmVQYXNzV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZnJlc25lbEZ1bmN0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIEZSRVNORUxcbmZuIGNvbXB1dGVGcmVzbmVsVGVybSh2aWV3RGlyZWN0aW9uOiB2ZWMzZix3b3JsZE5vcm1hbDogdmVjM2YsYmlhczogZjMyLHBvd2VyOiBmMzIpLT5mMzJcbntsZXQgZnJlc25lbFRlcm06IGYzMj1wb3coYmlhcythYnMoZG90KHZpZXdEaXJlY3Rpb24sd29ybGROb3JtYWwpKSxwb3dlcik7cmV0dXJuIGNsYW1wKGZyZXNuZWxUZXJtLDAuLDEuKTt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBmcmVzbmVsRnVuY3Rpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9sdGNIZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnNcIjtcblxuY29uc3QgbmFtZSA9IFwibGlnaHRzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgbGlnaHRpbmdJbmZvXG57ZGlmZnVzZTogdmVjM2YsXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5zcGVjdWxhcjogdmVjM2YsXG4jZW5kaWZcbiNpZmRlZiBORE9UTFxubmRsOiBmMzIsXG4jZW5kaWZcbn07Zm4gY29tcHV0ZUxpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XOiB2ZWMzZix2Tm9ybWFsOiB2ZWMzZixsaWdodERhdGE6IHZlYzRmLGRpZmZ1c2VDb2xvcjogdmVjM2Ysc3BlY3VsYXJDb2xvcjogdmVjM2YscmFuZ2U6IGYzMixnbG9zc2luZXNzOiBmMzIpLT5saWdodGluZ0luZm8ge3ZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbzt2YXIgbGlnaHRWZWN0b3JXOiB2ZWMzZjt2YXIgYXR0ZW51YXRpb246IGYzMj0xLjA7aWYgKGxpZ2h0RGF0YS53PT0wLilcbnt2YXIgZGlyZWN0aW9uOiB2ZWMzZj1saWdodERhdGEueHl6LWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblc7YXR0ZW51YXRpb249bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7bGlnaHRWZWN0b3JXPW5vcm1hbGl6ZShkaXJlY3Rpb24pO31cbmVsc2VcbntsaWdodFZlY3Rvclc9bm9ybWFsaXplKC1saWdodERhdGEueHl6KTt9XG52YXIgbmRsOiBmMzI9bWF4KDAuLGRvdCh2Tm9ybWFsLGxpZ2h0VmVjdG9yVykpO1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bmRsKmRpZmZ1c2VDb2xvciphdHRlbnVhdGlvbjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZhciBhbmdsZVc6IHZlYzNmPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodFZlY3RvclcpO3ZhciBzcGVjQ29tcDogZjMyPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvciphdHRlbnVhdGlvbjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbiBnZXRBdHRlbnVhdGlvbihjb3NBbmdsZTogZjMyLGV4cG9uZW50OiBmMzIpLT5mMzIge3JldHVybiBtYXgoMC4scG93KGNvc0FuZ2xlLGV4cG9uZW50KSk7fVxuZm4gZ2V0SUVTQXR0ZW51YXRpb24oY29zQW5nbGU6IGYzMixpZXNMaWdodFRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixpZXNMaWdodFRleHR1cmVTYW1wbGVyOiBzYW1wbGVyKS0+ZjMyIHt2YXIgYW5nbGU9YWNvcyhjb3NBbmdsZSkvUEk7cmV0dXJuIHRleHR1cmVTYW1wbGVMZXZlbChpZXNMaWdodFRleHR1cmUsaWVzTGlnaHRUZXh0dXJlU2FtcGxlcix2ZWMyZihhbmdsZSwwKSwwLikucjt9XG5mbiBjb21wdXRlQmFzaWNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblc6IHZlYzNmLGxpZ2h0VmVjdG9yVzogdmVjM2Ysdk5vcm1hbDogdmVjM2YsYXR0ZW51YXRpb246IGYzMixkaWZmdXNlQ29sb3I6IHZlYzNmLHNwZWN1bGFyQ29sb3I6IHZlYzNmLGdsb3NzaW5lc3M6IGYzMiktPmxpZ2h0aW5nSW5mbyB7dmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO3ZhciBuZGw6IGYzMj1tYXgoMC4sZG90KHZOb3JtYWwsbGlnaHRWZWN0b3JXKSk7XG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9bmRsO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZT1uZGwqZGlmZnVzZUNvbG9yKmF0dGVudWF0aW9uO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmFyIGFuZ2xlVzogdmVjM2Y9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0VmVjdG9yVyk7dmFyIHNwZWNDb21wOiBmMzI9bWF4KDAuLGRvdCh2Tm9ybWFsLGFuZ2xlVykpO3NwZWNDb21wPXBvdyhzcGVjQ29tcCxtYXgoMS4sZ2xvc3NpbmVzcykpO3Jlc3VsdC5zcGVjdWxhcj1zcGVjQ29tcCpzcGVjdWxhckNvbG9yKmF0dGVudWF0aW9uO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZuIGNvbXB1dGVJRVNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblc6IHZlYzNmLHZOb3JtYWw6IHZlYzNmLGxpZ2h0RGF0YTogdmVjNGYsbGlnaHREaXJlY3Rpb246IHZlYzRmLGRpZmZ1c2VDb2xvcjogdmVjM2Ysc3BlY3VsYXJDb2xvcjogdmVjM2YscmFuZ2U6IGYzMixnbG9zc2luZXNzOiBmMzIsaWVzTGlnaHRUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4saWVzTGlnaHRUZXh0dXJlU2FtcGxlcjogc2FtcGxlciktPmxpZ2h0aW5nSW5mbyB7dmFyIGRpcmVjdGlvbjogdmVjM2Y9bGlnaHREYXRhLnh5ei1mcmFnbWVudElucHV0cy52UG9zaXRpb25XO3ZhciBsaWdodFZlY3Rvclc6IHZlYzNmPW5vcm1hbGl6ZShkaXJlY3Rpb24pO3ZhciBhdHRlbnVhdGlvbjogZjMyPW1heCgwLiwxLjAtbGVuZ3RoKGRpcmVjdGlvbikvcmFuZ2UpO3ZhciBkb3RQcm9kdWN0PWRvdChsaWdodERpcmVjdGlvbi54eXosLWxpZ2h0VmVjdG9yVyk7dmFyIGNvc0FuZ2xlOiBmMzI9bWF4KDAuLGRvdFByb2R1Y3QpO2lmIChjb3NBbmdsZT49bGlnaHREaXJlY3Rpb24udylcbnthdHRlbnVhdGlvbio9Z2V0SUVTQXR0ZW51YXRpb24oZG90UHJvZHVjdCxpZXNMaWdodFRleHR1cmUsaWVzTGlnaHRUZXh0dXJlU2FtcGxlcik7cmV0dXJuIGNvbXB1dGVCYXNpY1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxsaWdodFZlY3Rvclcsdk5vcm1hbCxhdHRlbnVhdGlvbixkaWZmdXNlQ29sb3Isc3BlY3VsYXJDb2xvcixnbG9zc2luZXNzKTt9XG52YXIgcmVzdWx0OiBsaWdodGluZ0luZm87cmVzdWx0LmRpZmZ1c2U9dmVjM2YoMC4pO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyPXZlYzNmKDAuKTtcbiNlbmRpZlxuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPTAuO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZuIGNvbXB1dGVTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblc6IHZlYzNmLHZOb3JtYWw6IHZlYzNmICxsaWdodERhdGE6IHZlYzRmLGxpZ2h0RGlyZWN0aW9uOiB2ZWM0ZixkaWZmdXNlQ29sb3I6IHZlYzNmLHNwZWN1bGFyQ29sb3I6IHZlYzNmLHJhbmdlOiBmMzIsZ2xvc3NpbmVzczogZjMyKS0+bGlnaHRpbmdJbmZvIHt2YXIgZGlyZWN0aW9uOiB2ZWMzZj1saWdodERhdGEueHl6LWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblc7dmFyIGxpZ2h0VmVjdG9yVzogdmVjM2Y9bm9ybWFsaXplKGRpcmVjdGlvbik7dmFyIGF0dGVudWF0aW9uOiBmMzI9bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7dmFyIGNvc0FuZ2xlOiBmMzI9bWF4KDAuLGRvdChsaWdodERpcmVjdGlvbi54eXosLWxpZ2h0VmVjdG9yVykpO2lmIChjb3NBbmdsZT49bGlnaHREaXJlY3Rpb24udylcbnthdHRlbnVhdGlvbio9Z2V0QXR0ZW51YXRpb24oY29zQW5nbGUsbGlnaHREYXRhLncpO3JldHVybiBjb21wdXRlQmFzaWNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbGlnaHRWZWN0b3JXLHZOb3JtYWwsYXR0ZW51YXRpb24sZGlmZnVzZUNvbG9yLHNwZWN1bGFyQ29sb3IsZ2xvc3NpbmVzcyk7fVxudmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO3Jlc3VsdC5kaWZmdXNlPXZlYzNmKDAuKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5zcGVjdWxhcj12ZWMzZigwLik7XG4jZW5kaWZcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD0wLjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbiBjb21wdXRlSGVtaXNwaGVyaWNMaWdodGluZyh2aWV3RGlyZWN0aW9uVzogdmVjM2Ysdk5vcm1hbDogdmVjM2YsbGlnaHREYXRhOiB2ZWM0ZixkaWZmdXNlQ29sb3I6IHZlYzNmLHNwZWN1bGFyQ29sb3I6IHZlYzNmLGdyb3VuZENvbG9yOiB2ZWMzZixnbG9zc2luZXNzOiBmMzIpLT5saWdodGluZ0luZm8ge3ZhciByZXN1bHQ6IGxpZ2h0aW5nSW5mbzt2YXIgbmRsOiBmMzI9ZG90KHZOb3JtYWwsbGlnaHREYXRhLnh5eikqMC41KzAuNTtcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD1uZGw7XG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlPW1peChncm91bmRDb2xvcixkaWZmdXNlQ29sb3IsbmRsKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZhciBhbmdsZVc6IHZlYzNmPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodERhdGEueHl6KTt2YXIgc3BlY0NvbXA6IGYzMj1tYXgoMC4sZG90KHZOb3JtYWwsYW5nbGVXKSk7c3BlY0NvbXA9cG93KHNwZWNDb21wLG1heCgxLixnbG9zc2luZXNzKSk7cmVzdWx0LnNwZWN1bGFyPXNwZWNDb21wKnNwZWN1bGFyQ29sb3I7XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxuZm4gY29tcHV0ZVByb2plY3Rpb25UZXh0dXJlRGlmZnVzZUxpZ2h0aW5nKHByb2plY3Rpb25MaWdodFRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPixwcm9qZWN0aW9uTGlnaHRTYW1wbGVyOiBzYW1wbGVyLHRleHR1cmVQcm9qZWN0aW9uTWF0cml4OiBtYXQ0eDRmLHBvc1c6IHZlYzNmKS0+dmVjM2Yge3ZhciBzdHJxOiB2ZWM0Zj10ZXh0dXJlUHJvamVjdGlvbk1hdHJpeCp2ZWM0Zihwb3NXLDEuMCk7c3RycS89c3RycS53O3ZhciB0ZXh0dXJlQ29sb3I6IHZlYzNmPXRleHR1cmVTYW1wbGUocHJvamVjdGlvbkxpZ2h0VGV4dHVyZSxwcm9qZWN0aW9uTGlnaHRTYW1wbGVyLHN0cnEueHkpLnJnYjtyZXR1cm4gdGV4dHVyZUNvbG9yO31cbiNpZiBkZWZpbmVkKEFSRUFMSUdIVFVTRUQpICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxuI2luY2x1ZGU8bHRjSGVscGVyRnVuY3Rpb25zPlxudmFyIGFyZWFMaWdodHNMVEMxU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGFyZWFMaWdodHNMVEMxU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3ZhciBhcmVhTGlnaHRzTFRDMlNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBhcmVhTGlnaHRzTFRDMlNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtmbiBjb21wdXRlQXJlYUxpZ2h0aW5nKGx0YzE6IHRleHR1cmVfMmQ8ZjMyPixsdGMxU2FtcGxlcjpzYW1wbGVyLGx0YzI6dGV4dHVyZV8yZDxmMzI+LGx0YzJTYW1wbGVyOnNhbXBsZXIsdmlld0RpcmVjdGlvblc6IHZlYzNmLHZOb3JtYWw6dmVjM2YsdlBvc2l0aW9uOnZlYzNmLGxpZ2h0UG9zaXRpb246dmVjM2YsaGFsZldpZHRoOnZlYzNmLCBoYWxmSGVpZ2h0OnZlYzNmLGRpZmZ1c2VDb2xvcjp2ZWMzZixzcGVjdWxhckNvbG9yOnZlYzNmLHJvdWdobmVzczpmMzIgKS0+bGlnaHRpbmdJbmZvXG57dmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO3ZhciBkYXRhOiBhcmVhTGlnaHREYXRhPWNvbXB1dGVBcmVhTGlnaHRTcGVjdWxhckRpZmZ1c2VGcmVzbmVsKGx0YzEsbHRjMVNhbXBsZXIsbHRjMixsdGMyU2FtcGxlcix2aWV3RGlyZWN0aW9uVyx2Tm9ybWFsLHZQb3NpdGlvbixsaWdodFBvc2l0aW9uLGhhbGZXaWR0aCxoYWxmSGVpZ2h0LHJvdWdobmVzcyk7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgZnJlc25lbDp2ZWMzZj0oIHNwZWN1bGFyQ29sb3IqZGF0YS5GcmVzbmVsLngrKCB2ZWMzZiggMS4wICktc3BlY3VsYXJDb2xvciApKmRhdGEuRnJlc25lbC55ICk7cmVzdWx0LnNwZWN1bGFyKz1zcGVjdWxhckNvbG9yKmZyZXNuZWwqZGF0YS5TcGVjdWxhcjtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2UrPWRpZmZ1c2VDb2xvcipkYXRhLkRpZmZ1c2U7cmV0dXJuIHJlc3VsdDt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxuI2luY2x1ZGU8Y2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnM+XG5mbiBjb21wdXRlQ2x1c3RlcmVkTGlnaHRpbmcoXG5saWdodERhdGFUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4sXG50aWxlTWFza0J1ZmZlcjogcHRyPHN0b3JhZ2UsYXJyYXk8dTMyPj4sXG52aWV3RGlyZWN0aW9uVzogdmVjM2YsXG52Tm9ybWFsOiB2ZWMzZixcbmxpZ2h0RGF0YTogdmVjNGYsXG5zbGljZVJhbmdlOiB2ZWMydSxcbmdsb3NzaW5lc3M6IGYzMlxuKS0+bGlnaHRpbmdJbmZvIHt2YXIgcmVzdWx0OiBsaWdodGluZ0luZm87bGV0IHRpbGVQb3NpdGlvbj12ZWMydShmcmFnbWVudElucHV0cy5wb3NpdGlvbi54eSpsaWdodERhdGEueHkpO2xldCBtYXNrUmVzb2x1dGlvbj12ZWMydShsaWdodERhdGEuencpO3ZhciB0aWxlSW5kZXg9KHRpbGVQb3NpdGlvbi54Km1hc2tSZXNvbHV0aW9uLngrdGlsZVBvc2l0aW9uLnkpKm1hc2tSZXNvbHV0aW9uLnk7bGV0IGJhdGNoUmFuZ2U9c2xpY2VSYW5nZS9DTFVTVExJR0hUX0JBVENIO3ZhciBiYXRjaE9mZnNldD1iYXRjaFJhbmdlLngqQ0xVU1RMSUdIVF9CQVRDSDt0aWxlSW5kZXgrPWJhdGNoUmFuZ2UueDtmb3IgKHZhciBpPWJhdGNoUmFuZ2UueDsgaTw9YmF0Y2hSYW5nZS55OyBpKz0xKSB7dmFyIG1hc2s9dGlsZU1hc2tCdWZmZXJbdGlsZUluZGV4XTt0aWxlSW5kZXgrPTE7bGV0IG1hc2tPZmZzZXQ9bWF4KHNsaWNlUmFuZ2UueCxiYXRjaE9mZnNldCktYmF0Y2hPZmZzZXQ7IFxubGV0IG1hc2tXaWR0aD1taW4oc2xpY2VSYW5nZS55LWJhdGNoT2Zmc2V0KzEsQ0xVU1RMSUdIVF9CQVRDSCk7bWFzaz1leHRyYWN0Qml0cyhtYXNrLG1hc2tPZmZzZXQsbWFza1dpZHRoKTt3aGlsZSBtYXNrICE9IDAge2xldCB0cmFpbGluZz1maXJzdFRyYWlsaW5nQml0KG1hc2spO21hc2sgXj0gMXU8PHRyYWlsaW5nO2xldCBsaWdodD1nZXRDbHVzdGVyZWRMaWdodChsaWdodERhdGFUZXh0dXJlLGJhdGNoT2Zmc2V0K21hc2tPZmZzZXQrdHJhaWxpbmcpO3ZhciBpbmZvOiBsaWdodGluZ0luZm87aWYgbGlnaHQudkxpZ2h0RGlyZWN0aW9uLnc8MC4wIHtpbmZvPWNvbXB1dGVMaWdodGluZyh2aWV3RGlyZWN0aW9uVyx2Tm9ybWFsLGxpZ2h0LnZMaWdodERhdGEsbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IsbGlnaHQudkxpZ2h0U3BlY3VsYXIucmdiLGxpZ2h0LnZMaWdodERpZmZ1c2UuYSxnbG9zc2luZXNzKTt9IGVsc2Uge2luZm89Y29tcHV0ZVNwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyx2Tm9ybWFsLGxpZ2h0LnZMaWdodERhdGEsbGlnaHQudkxpZ2h0RGlyZWN0aW9uLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiLGxpZ2h0LnZMaWdodFNwZWN1bGFyLnJnYixsaWdodC52TGlnaHREaWZmdXNlLmEsZ2xvc3NpbmVzcyk7fVxucmVzdWx0LmRpZmZ1c2UrPWluZm8uZGlmZnVzZTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5zcGVjdWxhcis9aW5mby5zcGVjdWxhcjtcbiNlbmRpZlxufVxuYmF0Y2hPZmZzZXQrPUNMVVNUTElHSFRfQkFUQ0g7fVxucmV0dXJuIHJlc3VsdDt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodHNGcmFnbWVudEZ1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBNQUlOVVZ7WH1cbnZhcnlpbmcgdk1haW5VVntYfTogdmVjMmY7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvaXREZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBPUkRFUl9JTkRFUEVOREVOVF9UUkFOU1BBUkVOQ1lcbiNkZWZpbmUgTUFYX0RFUFRIIDk5OTk5LjBcbnZhciBvaXREZXB0aFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBvaXREZXB0aFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjt2YXIgb2l0RnJvbnRDb2xvclNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBvaXRGcm9udENvbG9yU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb2l0RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvaXRGcmFnbWVudFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBPUkRFUl9JTkRFUEVOREVOVF9UUkFOU1BBUkVOQ1lcbnZhciBmcmFnRGVwdGg6IGYzMj1mcmFnbWVudElucHV0cy5wb3NpdGlvbi56OyBcbiNpZmRlZiBPUkRFUl9JTkRFUEVOREVOVF9UUkFOU1BBUkVOQ1lfMTZCSVRTXG52YXIgaGFsZkZsb2F0OiB1MzI9cGFjazJ4MTZmbG9hdCggdmVjMmYoZnJhZ0RlcHRoKSk7dmFyIGZ1bGw6IHZlYzJmPXVucGFjazJ4MTZmbG9hdChoYWxmRmxvYXQpO2ZyYWdEZXB0aD1mdWxsLng7XG4jZW5kaWZcbnZhciBmcmFnQ29vcmQ6IHZlYzJpPXZlYzJpKGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnh5KTt2YXIgbGFzdERlcHRoOiB2ZWMyZj10ZXh0dXJlTG9hZChvaXREZXB0aFNhbXBsZXIsZnJhZ0Nvb3JkLDApLnJnO3ZhciBsYXN0RnJvbnRDb2xvcjogdmVjNGY9dGV4dHVyZUxvYWQob2l0RnJvbnRDb2xvclNhbXBsZXIsZnJhZ0Nvb3JkLDApO2ZyYWdtZW50T3V0cHV0cy5kZXB0aD12ZWMyZigtTUFYX0RFUFRIKTtmcmFnbWVudE91dHB1dHMuZnJvbnRDb2xvcj1sYXN0RnJvbnRDb2xvcjtmcmFnbWVudE91dHB1dHMuYmFja0NvbG9yPSB2ZWM0ZigwLjApO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52YXIgZnVydGhlc3REZXB0aDogZjMyPS1sYXN0RGVwdGgueDt2YXIgbmVhcmVzdERlcHRoOiBmMzI9bGFzdERlcHRoLnk7XG4jZWxzZVxudmFyIG5lYXJlc3REZXB0aDogZjMyPS1sYXN0RGVwdGgueDt2YXIgZnVydGhlc3REZXB0aDogZjMyPWxhc3REZXB0aC55O1xuI2VuZGlmXG52YXIgYWxwaGFNdWx0aXBsaWVyOiBmMzI9MS4wLWxhc3RGcm9udENvbG9yLmE7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbmlmIChmcmFnRGVwdGg+bmVhcmVzdERlcHRoIHx8IGZyYWdEZXB0aDxmdXJ0aGVzdERlcHRoKSB7XG4jZWxzZVxuaWYgKGZyYWdEZXB0aDxuZWFyZXN0RGVwdGggfHwgZnJhZ0RlcHRoPmZ1cnRoZXN0RGVwdGgpIHtcbiNlbmRpZlxucmV0dXJuIGZyYWdtZW50T3V0cHV0czt9XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbmlmIChmcmFnRGVwdGg8bmVhcmVzdERlcHRoICYmIGZyYWdEZXB0aD5mdXJ0aGVzdERlcHRoKSB7XG4jZWxzZVxuaWYgKGZyYWdEZXB0aD5uZWFyZXN0RGVwdGggJiYgZnJhZ0RlcHRoPGZ1cnRoZXN0RGVwdGgpIHtcbiNlbmRpZlxuZnJhZ21lbnRPdXRwdXRzLmRlcHRoPXZlYzJmKC1mcmFnRGVwdGgsZnJhZ0RlcHRoKTtyZXR1cm4gZnJhZ21lbnRPdXRwdXRzO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9pdEZyYWdtZW50V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicHJlUGFzc0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFBSRVBBU1NcbiNpZmRlZiBQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OXG52YXJ5aW5nIHZQb3NpdGlvbiA6IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19ERVBUSFxudmFyeWluZyB2Vmlld1BvczogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX05PUk1BTElaRURfVklFV19ERVBUSFxudmFyeWluZyB2Tm9ybVZpZXdEZXB0aDogZjMyO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKVxudmFyeWluZyB2Q3VycmVudFBvc2l0aW9uOiB2ZWM0Zjt2YXJ5aW5nIHZQcmV2aW91c1Bvc2l0aW9uOiB2ZWM0ZjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcHJlUGFzc0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgX0RFRklORU5BTUVfXG4jaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTFcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWMVxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTJcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWMlxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTNcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWM1xuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTRcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWNFxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTVcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWNVxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTZcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWNlxuI2Vsc2VcbnZhcnlpbmcgdl9WQVJZSU5HTkFNRV9VVjogdmVjMmY7XG4jZW5kaWZcbnZhciBfU0FNUExFUk5BTUVfU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIF9TQU1QTEVSTkFNRV9TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2RlZmF1bHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb2l0RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NGcmFnbWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mcmVzbmVsRnVuY3Rpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcmVmbGVjdGlvbkZ1bmN0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnRNYWluRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZGVjYWxGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3NcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29pdEZyYWdtZW50XCI7XG5cbmNvbnN0IG5hbWUgPSBcImRlZmF1bHRQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNpbmNsdWRlPGRlZmF1bHRVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHByZVBhc3NEZWNsYXJhdGlvbj5bU0NFTkVfTVJUX0NPVU5UXVxuI2luY2x1ZGU8b2l0RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUdJTlxudmFyeWluZyB2UG9zaXRpb25XOiB2ZWMzZjtcbiNpZmRlZiBOT1JNQUxcbnZhcnlpbmcgdk5vcm1hbFc6IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG52YXJ5aW5nIHZDb2xvcjogdmVjNGY7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxudmFyeWluZyB2Vmlld0RlcHRoOiBmMzI7XG4jZW5kaWZcbiNpbmNsdWRlPG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbj5bMS4uN11cbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPGxpZ2h0VWJvRGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8c2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxESUZGVVNFLF9WQVJZSU5HTkFNRV8sRGlmZnVzZSxfU0FNUExFUk5BTUVfLGRpZmZ1c2UpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50LF9TQU1QTEVSTkFNRV8sYW1iaWVudClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHksX1NBTVBMRVJOQU1FXyxvcGFjaXR5KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlLF9TQU1QTEVSTkFNRV8sZW1pc3NpdmUpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXAsX1NBTVBMRVJOQU1FXyxsaWdodG1hcClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbCxfU0FNUExFUk5BTUVfLGRlY2FsKVxuI2lmZGVmIFJFRlJBQ1RJT05cbiNpZmRlZiBSRUZSQUNUSU9OTUFQXzNEXG52YXIgcmVmcmFjdGlvbkN1YmVTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmcmFjdGlvbkN1YmVTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNlbHNlXG52YXIgcmVmcmFjdGlvbjJEU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZnJhY3Rpb24yRFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTUEVDVUxBUlRFUk0pXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXIsX1NBTVBMRVJOQU1FXyxzcGVjdWxhcilcbiNlbmRpZlxuI2luY2x1ZGU8ZnJlc25lbEZ1bmN0aW9uPlxuI2lmZGVmIFJFRkxFQ1RJT05cbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52YXIgcmVmbGVjdGlvbkN1YmVTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvbkN1YmVTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNlbHNlXG52YXIgcmVmbGVjdGlvbjJEU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb24yRFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52YXJ5aW5nIHZQb3NpdGlvblVWVzogdmVjM2Y7XG4jZWxzZVxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZhcnlpbmcgdkRpcmVjdGlvblc6IHZlYzNmO1xuI2VuZGlmXG4jZW5kaWZcbiNpbmNsdWRlPHJlZmxlY3Rpb25GdW5jdGlvbj5cbiNlbmRpZlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnM+XG4jaW5jbHVkZTxidW1wRnJhZ21lbnRNYWluRnVuY3Rpb25zPlxuI2luY2x1ZGU8YnVtcEZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dGcmFnbWVudERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbkBmcmFnbWVudFxuZm4gbWFpbihpbnB1dDogRnJhZ21lbnRJbnB1dHMpLT5GcmFnbWVudE91dHB1dHMge1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9CRUdJTlxuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnQ+XG52YXIgdmlld0RpcmVjdGlvblc6IHZlYzNmPW5vcm1hbGl6ZShzY2VuZS52RXllUG9zaXRpb24ueHl6LWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcpO3ZhciBiYXNlQ29sb3I6IHZlYzRmPSB2ZWM0ZigxLiwxLiwxLiwxLik7dmFyIGRpZmZ1c2VDb2xvcjogdmVjM2Y9dW5pZm9ybXMudkRpZmZ1c2VDb2xvci5yZ2I7dmFyIGFscGhhOiBmMzI9dW5pZm9ybXMudkRpZmZ1c2VDb2xvci5hO1xuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFc6IHZlYzNmPW5vcm1hbGl6ZShmcmFnbWVudElucHV0cy52Tm9ybWFsVyk7XG4jZWxzZVxudmFyIG5vcm1hbFc6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyhkcGR4KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcpLGRwZHkoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVykpKSogc2NlbmUudkV5ZVBvc2l0aW9uLnc7XG4jZW5kaWZcbiNpbmNsdWRlPGJ1bXBGcmFnbWVudD5cbiNpZmRlZiBUV09TSURFRExJR0hUSU5HXG5ub3JtYWxXPXNlbGVjdCgtbm9ybWFsVyxub3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtcbiNlbmRpZlxuI2lmZGVmIERJRkZVU0VcbmJhc2VDb2xvcj10ZXh0dXJlU2FtcGxlKGRpZmZ1c2VTYW1wbGVyLGRpZmZ1c2VTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RGlmZnVzZVVWK3V2T2Zmc2V0KTtcbiNpZiBkZWZpbmVkKEFMUEhBVEVTVCkgJiYgIWRlZmluZWQoQUxQSEFURVNUX0FGVEVSQUxMQUxQSEFDT01QVVRBVElPTlMpXG5pZiAoYmFzZUNvbG9yLmE8dW5pZm9ybXMuYWxwaGFDdXRPZmYpIHtkaXNjYXJkO31cbiNlbmRpZlxuI2lmZGVmIEFMUEhBRlJPTURJRkZVU0VcbmFscGhhKj1iYXNlQ29sb3IuYTtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0FMUEhBXG5iYXNlQ29sb3I9dmVjNGYoYmFzZUNvbG9yLnJnYip1bmlmb3Jtcy52RGlmZnVzZUluZm9zLnksYmFzZUNvbG9yLmEpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChERUNBTCkgJiYgIWRlZmluZWQoREVDQUxfQUZURVJfREVUQUlMKVxudmFyIGRlY2FsQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUoZGVjYWxTYW1wbGVyLGRlY2FsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkRlY2FsVVYrdXZPZmZzZXQpO1xuI2luY2x1ZGU8ZGVjYWxGcmFnbWVudD4oc3VyZmFjZUFsYmVkbyxiYXNlQ29sb3IsR0FNTUFERUNBTCxfR0FNTUFERUNBTF9OT1RVU0VEXylcbiNlbmRpZlxuI2luY2x1ZGU8ZGVwdGhQcmVQYXNzPlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYmFzZUNvbG9yPXZlYzRmKGJhc2VDb2xvci5yZ2IqZnJhZ21lbnRJbnB1dHMudkNvbG9yLnJnYixiYXNlQ29sb3IuYSk7XG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbmJhc2VDb2xvcj12ZWM0ZihiYXNlQ29sb3IucmdiKjIuMCptaXgoMC41LGRldGFpbENvbG9yLnIsdW5pZm9ybXMudkRldGFpbEluZm9zLnkpLGJhc2VDb2xvci5hKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoREVDQUwpICYmIGRlZmluZWQoREVDQUxfQUZURVJfREVUQUlMKVxudmFyIGRlY2FsQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUoZGVjYWxTYW1wbGVyLGRlY2FsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkRlY2FsVVYrdXZPZmZzZXQpO1xuI2luY2x1ZGU8ZGVjYWxGcmFnbWVudD4oc3VyZmFjZUFsYmVkbyxiYXNlQ29sb3IsR0FNTUFERUNBTCxfR0FNTUFERUNBTF9OT1RVU0VEXylcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0RJRkZVU0VcbnZhciBiYXNlQW1iaWVudENvbG9yOiB2ZWMzZj0gdmVjM2YoMS4sMS4sMS4pO1xuI2lmZGVmIEFNQklFTlRcbmJhc2VBbWJpZW50Q29sb3I9dGV4dHVyZVNhbXBsZShhbWJpZW50U2FtcGxlcixhbWJpZW50U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkFtYmllbnRVVit1dk9mZnNldCkucmdiKnVuaWZvcm1zLnZBbWJpZW50SW5mb3MueTtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0xJR0hUU1xudmFyIGdsb3NzaW5lc3M6IGYzMj11bmlmb3Jtcy52U3BlY3VsYXJDb2xvci5hO3ZhciBzcGVjdWxhckNvbG9yOiB2ZWMzZj11bmlmb3Jtcy52U3BlY3VsYXJDb2xvci5yZ2I7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG4jaWZkZWYgU1BFQ1VMQVJcbnZhciBzcGVjdWxhck1hcENvbG9yOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKHNwZWN1bGFyU2FtcGxlcixzcGVjdWxhclNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZTcGVjdWxhclVWK3V2T2Zmc2V0KTtzcGVjdWxhckNvbG9yPXNwZWN1bGFyTWFwQ29sb3IucmdiO1xuI2lmZGVmIEdMT1NTSU5FU1Ncbmdsb3NzaW5lc3M9Z2xvc3NpbmVzcypzcGVjdWxhck1hcENvbG9yLmE7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG52YXIgZGlmZnVzZUJhc2U6IHZlYzNmPSB2ZWMzZigwLiwwLiwwLik7dmFyIGluZm86IGxpZ2h0aW5nSW5mbztcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZhciBzcGVjdWxhckJhc2U6IHZlYzNmPSB2ZWMzZigwLiwwLiwwLik7XG4jZW5kaWZcbnZhciBzaGFkb3c6IGYzMj0xLjt2YXIgYWdnU2hhZG93OiBmMzI9MC47dmFyIG51bUxpZ2h0czogZjMyPTAuO1xuI2lmZGVmIExJR0hUTUFQXG52YXIgbGlnaHRtYXBDb2xvcjogdmVjNGY9dGV4dHVyZVNhbXBsZShsaWdodG1hcFNhbXBsZXIsbGlnaHRtYXBTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52TGlnaHRtYXBVVit1dk9mZnNldCk7XG4jaWZkZWYgUkdCRExJR0hUTUFQXG5saWdodG1hcENvbG9yPXZlYzRmKGZyb21SR0JEKGxpZ2h0bWFwQ29sb3IpLGxpZ2h0bWFwQ29sb3IuYSk7XG4jZW5kaWZcbmxpZ2h0bWFwQ29sb3I9dmVjNGYobGlnaHRtYXBDb2xvci5yZ2IqdW5pZm9ybXMudkxpZ2h0bWFwSW5mb3MueSxsaWdodG1hcENvbG9yLmEpO1xuI2VuZGlmXG4jaW5jbHVkZTxsaWdodEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG5hZ2dTaGFkb3c9YWdnU2hhZG93L251bUxpZ2h0czt2YXIgcmVmcmFjdGlvbkNvbG9yOiB2ZWM0Zj0gdmVjNGYoMC4sMC4sMC4sMS4pO1xuI2lmZGVmIFJFRlJBQ1RJT05cbnZhciByZWZyYWN0aW9uVmVjdG9yOiB2ZWMzZj1ub3JtYWxpemUocmVmcmFjdCgtdmlld0RpcmVjdGlvblcsbm9ybWFsVyx1bmlmb3Jtcy52UmVmcmFjdGlvbkluZm9zLnkpKTtcbiNpZmRlZiBSRUZSQUNUSU9OTUFQXzNEXG4jaWZkZWYgVVNFX0xPQ0FMX1JFRlJBQ1RJT05NQVBfQ1VCSUNcbnJlZnJhY3Rpb25WZWN0b3I9cGFyYWxsYXhDb3JyZWN0Tm9ybWFsKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcscmVmcmFjdGlvblZlY3Rvcix1bmlmb3Jtcy52UmVmcmFjdGlvblNpemUsdW5pZm9ybXMudlJlZnJhY3Rpb25Qb3NpdGlvbik7XG4jZW5kaWZcbnJlZnJhY3Rpb25WZWN0b3IueT1yZWZyYWN0aW9uVmVjdG9yLnkqdW5pZm9ybXMudlJlZnJhY3Rpb25JbmZvcy53O3ZhciByZWZyYWN0aW9uTG9va3VwOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKHJlZnJhY3Rpb25DdWJlU2FtcGxlcixyZWZyYWN0aW9uQ3ViZVNhbXBsZXJTYW1wbGVyLHJlZnJhY3Rpb25WZWN0b3IpO2lmIChkb3QocmVmcmFjdGlvblZlY3Rvcix2aWV3RGlyZWN0aW9uVyk8MS4wKSB7cmVmcmFjdGlvbkNvbG9yPXJlZnJhY3Rpb25Mb29rdXA7fVxuI2Vsc2VcbnZhciB2UmVmcmFjdGlvblVWVzogdmVjM2Y9ICh1bmlmb3Jtcy5yZWZyYWN0aW9uTWF0cml4KihzY2VuZS52aWV3KiB2ZWM0ZihmcmFnbWVudElucHV0cy52UG9zaXRpb25XK3JlZnJhY3Rpb25WZWN0b3IqdW5pZm9ybXMudlJlZnJhY3Rpb25JbmZvcy56LDEuMCkpKS54eXo7dmFyIHJlZnJhY3Rpb25Db29yZHM6IHZlYzJmPXZSZWZyYWN0aW9uVVZXLnh5L3ZSZWZyYWN0aW9uVVZXLno7cmVmcmFjdGlvbkNvb3Jkcy55PTEuMC1yZWZyYWN0aW9uQ29vcmRzLnk7cmVmcmFjdGlvbkNvbG9yPXRleHR1cmVTYW1wbGUocmVmcmFjdGlvbjJEU2FtcGxlcixyZWZyYWN0aW9uMkRTYW1wbGVyU2FtcGxlcixyZWZyYWN0aW9uQ29vcmRzKTtcbiNlbmRpZlxuI2lmZGVmIFJHQkRSRUZSQUNUSU9OXG5yZWZyYWN0aW9uQ29sb3I9dmVjNGYoZnJvbVJHQkQocmVmcmFjdGlvbkNvbG9yKSxyZWZyYWN0aW9uQ29sb3IuYSk7XG4jZW5kaWZcbiNpZmRlZiBJU19SRUZSQUNUSU9OX0xJTkVBUlxucmVmcmFjdGlvbkNvbG9yPXZlYzRmKHRvR2FtbWFTcGFjZVZlYzMocmVmcmFjdGlvbkNvbG9yLnJnYikscmVmcmFjdGlvbkNvbG9yLmEpO1xuI2VuZGlmXG5yZWZyYWN0aW9uQ29sb3I9dmVjNGYocmVmcmFjdGlvbkNvbG9yLnJnYip1bmlmb3Jtcy52UmVmcmFjdGlvbkluZm9zLngscmVmcmFjdGlvbkNvbG9yLmEpO1xuI2VuZGlmXG52YXIgcmVmbGVjdGlvbkNvbG9yOiB2ZWM0Zj0gdmVjNGYoMC4sMC4sMC4sMS4pO1xuI2lmZGVmIFJFRkxFQ1RJT05cbnZhciB2UmVmbGVjdGlvblVWVzogdmVjM2Y9Y29tcHV0ZVJlZmxlY3Rpb25Db29yZHMoIHZlYzRmKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcsMS4wKSxub3JtYWxXKTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxudlJlZmxlY3Rpb25VVlc9dmVjM2YodlJlZmxlY3Rpb25VVlcueCx2UmVmbGVjdGlvblVWVy55LHZSZWZsZWN0aW9uVVZXLnoqLTEuMCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4jaWZkZWYgUk9VR0hORVNTXG52YXIgYmlhczogZjMyPXVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3MueTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZmRlZiBTUEVDVUxBUlxuI2lmZGVmIEdMT1NTSU5FU1NcbmJpYXMqPSgxLjAtc3BlY3VsYXJNYXBDb2xvci5hKTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbnJlZmxlY3Rpb25Db2xvcj10ZXh0dXJlU2FtcGxlTGV2ZWwocmVmbGVjdGlvbkN1YmVTYW1wbGVyLHJlZmxlY3Rpb25DdWJlU2FtcGxlclNhbXBsZXIsdlJlZmxlY3Rpb25VVlcsYmlhcyk7XG4jZWxzZVxucmVmbGVjdGlvbkNvbG9yPXRleHR1cmVTYW1wbGUocmVmbGVjdGlvbkN1YmVTYW1wbGVyLHJlZmxlY3Rpb25DdWJlU2FtcGxlclNhbXBsZXIsdlJlZmxlY3Rpb25VVlcpO1xuI2VuZGlmXG4jZWxzZVxudmFyIGNvb3JkczogdmVjMmY9dlJlZmxlY3Rpb25VVlcueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5jb29yZHMvPXZSZWZsZWN0aW9uVVZXLno7XG4jZW5kaWZcbmNvb3Jkcy55PTEuMC1jb29yZHMueTtyZWZsZWN0aW9uQ29sb3I9dGV4dHVyZVNhbXBsZShyZWZsZWN0aW9uMkRTYW1wbGVyLHJlZmxlY3Rpb24yRFNhbXBsZXJTYW1wbGVyLGNvb3Jkcyk7XG4jZW5kaWZcbiNpZmRlZiBSR0JEUkVGTEVDVElPTlxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKGZyb21SR0JEKHJlZmxlY3Rpb25Db2xvcikscmVmbGVjdGlvbkNvbG9yLmEpO1xuI2VuZGlmXG4jaWZkZWYgSVNfUkVGTEVDVElPTl9MSU5FQVJcbnJlZmxlY3Rpb25Db2xvcj12ZWM0Zih0b0dhbW1hU3BhY2VWZWMzKHJlZmxlY3Rpb25Db2xvci5yZ2IpLHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHJlZmxlY3Rpb25Db2xvci5yZ2IqdW5pZm9ybXMudlJlZmxlY3Rpb25JbmZvcy54LHJlZmxlY3Rpb25Db2xvci5hKTtcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTFxudmFyIHJlZmxlY3Rpb25GcmVzbmVsVGVybTogZjMyPWNvbXB1dGVGcmVzbmVsVGVybSh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHVuaWZvcm1zLnJlZmxlY3Rpb25SaWdodENvbG9yLmEsdW5pZm9ybXMucmVmbGVjdGlvbkxlZnRDb2xvci5hKTtcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTEZST01TUEVDVUxBUlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVmbGVjdGlvbkNvbG9yPXZlYzRmKHJlZmxlY3Rpb25Db2xvci5yZ2Iqc3BlY3VsYXJDb2xvci5yZ2IqKDEuMC1yZWZsZWN0aW9uRnJlc25lbFRlcm0pK3JlZmxlY3Rpb25GcmVzbmVsVGVybSp1bmlmb3Jtcy5yZWZsZWN0aW9uUmlnaHRDb2xvci5yZ2IscmVmbGVjdGlvbkNvbG9yLmEpO1xuI2Vsc2VcbnJlZmxlY3Rpb25Db2xvcj12ZWM0ZihyZWZsZWN0aW9uQ29sb3IucmdiKnVuaWZvcm1zLnJlZmxlY3Rpb25MZWZ0Q29sb3IucmdiKigxLjAtcmVmbGVjdGlvbkZyZXNuZWxUZXJtKStyZWZsZWN0aW9uRnJlc25lbFRlcm0qdW5pZm9ybXMucmVmbGVjdGlvblJpZ2h0Q29sb3IucmdiLHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxuI2Vsc2VcbnJlZmxlY3Rpb25Db2xvcj12ZWM0ZihyZWZsZWN0aW9uQ29sb3IucmdiKnVuaWZvcm1zLnJlZmxlY3Rpb25MZWZ0Q29sb3IucmdiKigxLjAtcmVmbGVjdGlvbkZyZXNuZWxUZXJtKStyZWZsZWN0aW9uRnJlc25lbFRlcm0qdW5pZm9ybXMucmVmbGVjdGlvblJpZ2h0Q29sb3IucmdiLHJlZmxlY3Rpb25Db2xvci5hKTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZSQUNUSU9ORlJFU05FTFxudmFyIHJlZnJhY3Rpb25GcmVzbmVsVGVybTogZjMyPWNvbXB1dGVGcmVzbmVsVGVybSh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHVuaWZvcm1zLnJlZnJhY3Rpb25SaWdodENvbG9yLmEsdW5pZm9ybXMucmVmcmFjdGlvbkxlZnRDb2xvci5hKTtyZWZyYWN0aW9uQ29sb3I9dmVjNGYocmVmcmFjdGlvbkNvbG9yLnJnYip1bmlmb3Jtcy5yZWZyYWN0aW9uTGVmdENvbG9yLnJnYiooMS4wLXJlZnJhY3Rpb25GcmVzbmVsVGVybSkrcmVmcmFjdGlvbkZyZXNuZWxUZXJtKnVuaWZvcm1zLnJlZnJhY3Rpb25SaWdodENvbG9yLnJnYixyZWZyYWN0aW9uQ29sb3IuYSk7XG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZXG52YXIgb3BhY2l0eU1hcDogdmVjNGY9dGV4dHVyZVNhbXBsZShvcGFjaXR5U2FtcGxlcixvcGFjaXR5U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudk9wYWNpdHlVVit1dk9mZnNldCk7XG4jaWZkZWYgT1BBQ0lUWVJHQlxub3BhY2l0eU1hcD12ZWM0ZihvcGFjaXR5TWFwLnJnYiogdmVjM2YoMC4zLDAuNTksMC4xMSksb3BhY2l0eU1hcC5hKTthbHBoYSo9KG9wYWNpdHlNYXAueCtvcGFjaXR5TWFwLnkrb3BhY2l0eU1hcC56KSogdW5pZm9ybXMudk9wYWNpdHlJbmZvcy55O1xuI2Vsc2VcbmFscGhhKj1vcGFjaXR5TWFwLmEqdW5pZm9ybXMudk9wYWNpdHlJbmZvcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWEFMUEhBKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbmFscGhhKj1mcmFnbWVudElucHV0cy52Q29sb3IuYTtcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlGUkVTTkVMXG52YXIgb3BhY2l0eUZyZXNuZWxUZXJtOiBmMzI9Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdW5pZm9ybXMub3BhY2l0eVBhcnRzLnosdW5pZm9ybXMub3BhY2l0eVBhcnRzLncpO2FscGhhKz11bmlmb3Jtcy5vcGFjaXR5UGFydHMueCooMS4wLW9wYWNpdHlGcmVzbmVsVGVybSkrb3BhY2l0eUZyZXNuZWxUZXJtKnVuaWZvcm1zLm9wYWNpdHlQYXJ0cy55O1xuI2VuZGlmXG4jaWZkZWYgQUxQSEFURVNUXG4jaWZkZWYgQUxQSEFURVNUX0FGVEVSQUxMQUxQSEFDT01QVVRBVElPTlNcbmlmIChhbHBoYTx1bmlmb3Jtcy5hbHBoYUN1dE9mZikge2Rpc2NhcmQ7fVxuI2VuZGlmXG4jaWZuZGVmIEFMUEhBQkxFTkRcbmFscGhhPTEuMDtcbiNlbmRpZlxuI2VuZGlmXG52YXIgZW1pc3NpdmVDb2xvcjogdmVjM2Y9dW5pZm9ybXMudkVtaXNzaXZlQ29sb3I7XG4jaWZkZWYgRU1JU1NJVkVcbmVtaXNzaXZlQ29sb3IrPXRleHR1cmVTYW1wbGUoZW1pc3NpdmVTYW1wbGVyLGVtaXNzaXZlU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkVtaXNzaXZlVVYrdXZPZmZzZXQpLnJnYip1bmlmb3Jtcy52RW1pc3NpdmVJbmZvcy55O1xuI2VuZGlmXG4jaWZkZWYgRU1JU1NJVkVGUkVTTkVMXG52YXIgZW1pc3NpdmVGcmVzbmVsVGVybTogZjMyPWNvbXB1dGVGcmVzbmVsVGVybSh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHVuaWZvcm1zLmVtaXNzaXZlUmlnaHRDb2xvci5hLHVuaWZvcm1zLmVtaXNzaXZlTGVmdENvbG9yLmEpO2VtaXNzaXZlQ29sb3IqPXVuaWZvcm1zLmVtaXNzaXZlTGVmdENvbG9yLnJnYiooMS4wLWVtaXNzaXZlRnJlc25lbFRlcm0pK2VtaXNzaXZlRnJlc25lbFRlcm0qdW5pZm9ybXMuZW1pc3NpdmVSaWdodENvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIERJRkZVU0VGUkVTTkVMXG52YXIgZGlmZnVzZUZyZXNuZWxUZXJtOiBmMzI9Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdW5pZm9ybXMuZGlmZnVzZVJpZ2h0Q29sb3IuYSx1bmlmb3Jtcy5kaWZmdXNlTGVmdENvbG9yLmEpO2RpZmZ1c2VCYXNlKj11bmlmb3Jtcy5kaWZmdXNlTGVmdENvbG9yLnJnYiooMS4wLWRpZmZ1c2VGcmVzbmVsVGVybSkrZGlmZnVzZUZyZXNuZWxUZXJtKnVuaWZvcm1zLmRpZmZ1c2VSaWdodENvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIEVNSVNTSVZFQVNJTExVTUlOQVRJT05cbnZhciBmaW5hbERpZmZ1c2U6IHZlYzNmPWNsYW1wKGRpZmZ1c2VCYXNlKmRpZmZ1c2VDb2xvcit1bmlmb3Jtcy52QW1iaWVudENvbG9yLHZlYzNmKDAuMCksdmVjM2YoMS4wKSkqYmFzZUNvbG9yLnJnYjtcbiNlbHNlXG4jaWZkZWYgTElOS0VNSVNTSVZFV0lUSERJRkZVU0VcbnZhciBmaW5hbERpZmZ1c2U6IHZlYzNmPWNsYW1wKChkaWZmdXNlQmFzZStlbWlzc2l2ZUNvbG9yKSpkaWZmdXNlQ29sb3IrdW5pZm9ybXMudkFtYmllbnRDb2xvcix2ZWMzZigwLjApLHZlYzNmKDEuMCkpKmJhc2VDb2xvci5yZ2I7XG4jZWxzZVxudmFyIGZpbmFsRGlmZnVzZTogdmVjM2Y9Y2xhbXAoZGlmZnVzZUJhc2UqZGlmZnVzZUNvbG9yK2VtaXNzaXZlQ29sb3IrdW5pZm9ybXMudkFtYmllbnRDb2xvcix2ZWMzZigwLjApLHZlYzNmKDEuMCkpKmJhc2VDb2xvci5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmFyIGZpbmFsU3BlY3VsYXI6IHZlYzNmPXNwZWN1bGFyQmFzZSpzcGVjdWxhckNvbG9yO1xuI2lmZGVmIFNQRUNVTEFST1ZFUkFMUEhBXG5hbHBoYT1jbGFtcChhbHBoYStkb3QoZmluYWxTcGVjdWxhciwgdmVjM2YoMC4zLDAuNTksMC4xMSkpLDAuMCwxLjApO1xuI2VuZGlmXG4jZWxzZVxudmFyIGZpbmFsU3BlY3VsYXI6IHZlYzNmPSB2ZWMzZigwLjApO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk9WRVJBTFBIQVxuYWxwaGE9Y2xhbXAoYWxwaGErZG90KHJlZmxlY3Rpb25Db2xvci5yZ2IsIHZlYzNmKDAuMywwLjU5LDAuMTEpKSwwLjAsMS4wKTtcbiNlbmRpZlxuI2lmZGVmIEVNSVNTSVZFQVNJTExVTUlOQVRJT05cbnZhciBjb2xvcjogdmVjNGY9IHZlYzRmKGNsYW1wKGZpbmFsRGlmZnVzZSpiYXNlQW1iaWVudENvbG9yK2ZpbmFsU3BlY3VsYXIrcmVmbGVjdGlvbkNvbG9yLnJnYitlbWlzc2l2ZUNvbG9yK3JlZnJhY3Rpb25Db2xvci5yZ2IsMC4wLDEuMCksYWxwaGEpO1xuI2Vsc2VcbnZhciBjb2xvcjogdmVjNGY9IHZlYzRmKGZpbmFsRGlmZnVzZSpiYXNlQW1iaWVudENvbG9yK2ZpbmFsU3BlY3VsYXIrcmVmbGVjdGlvbkNvbG9yLnJnYityZWZyYWN0aW9uQ29sb3IucmdiLGFscGhhKTtcbiNlbmRpZlxuI2lmZGVmIExJR0hUTUFQXG4jaWZuZGVmIExJR0hUTUFQRVhDTFVERURcbiNpZmRlZiBVU0VMSUdIVE1BUEFTU0hBRE9XTUFQXG5jb2xvcj12ZWM0Zihjb2xvci5yZ2IqbGlnaHRtYXBDb2xvci5yZ2IsY29sb3IuYSk7XG4jZWxzZVxuY29sb3I9dmVjNGYoY29sb3IucmdiK2xpZ2h0bWFwQ29sb3IucmdiLGNvbG9yLmEpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0ZPR1xuY29sb3I9dmVjNGYobWF4KGNvbG9yLnJnYix2ZWMzZigwLikpLGNvbG9yLmEpO1xuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50PlxuI2lmZGVmIElNQUdFUFJPQ0VTU0lOR1BPU1RQUk9DRVNTXG5jb2xvcj12ZWM0Zih0b0xpbmVhclNwYWNlVmVjMyhjb2xvci5yZ2IpLGNvbG9yLmEpO1xuI2Vsc2VcbiNpZmRlZiBJTUFHRVBST0NFU1NJTkdcbmNvbG9yPXZlYzRmKHRvTGluZWFyU3BhY2VWZWMzKGNvbG9yLnJnYiksY29sb3IuYSk7Y29sb3I9YXBwbHlJbWFnZVByb2Nlc3NpbmcoY29sb3IpO1xuI2VuZGlmXG4jZW5kaWZcbmNvbG9yPXZlYzRmKGNvbG9yLnJnYixjb2xvci5hKm1lc2gudmlzaWJpbGl0eSk7XG4jaWZkZWYgUFJFTVVMVElQTFlBTFBIQVxuY29sb3I9dmVjNGYoY29sb3IucmdiKmNvbG9yLmEsIGNvbG9yLmEpO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRlJBR0NPTE9SXG4jaWZkZWYgUFJFUEFTU1xuI2lmIFNDRU5FX01SVF9DT1VOVD4wXG52YXIgd3JpdGVHZW9tZXRyeUluZm86IGYzMj1zZWxlY3QoMC4wLDEuMCxjb2xvci5hPjAuNCk7dmFyIGZyYWdEYXRhOiBhcnJheTx2ZWM0PGYzMj4sU0NFTkVfTVJUX0NPVU5UPjtcbiNpZmRlZiBQUkVQQVNTX0NPTE9SXG5mcmFnRGF0YVtQUkVQQVNTX0NPTE9SX0lOREVYXT1jb2xvcjsgXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1BPU0lUSU9OXG5mcmFnRGF0YVtQUkVQQVNTX1BPU0lUSU9OX0lOREVYXT12ZWM0ZihmcmFnbWVudElucHV0cy52UG9zaXRpb25XLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfTE9DQUxfUE9TSVRJT05cbmZyYWdEYXRhW1BSRVBBU1NfTE9DQUxfUE9TSVRJT05fSU5ERVhdPXZlYzRmKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbix3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1ZFTE9DSVRZXG52YXIgYTogdmVjMmY9KGZyYWdtZW50SW5wdXRzLnZDdXJyZW50UG9zaXRpb24ueHkvZnJhZ21lbnRJbnB1dHMudkN1cnJlbnRQb3NpdGlvbi53KSowLjUrMC41O3ZhciBiOiB2ZWMyZj0oZnJhZ21lbnRJbnB1dHMudlByZXZpb3VzUG9zaXRpb24ueHkvZnJhZ21lbnRJbnB1dHMudlByZXZpb3VzUG9zaXRpb24udykqMC41KzAuNTt2YXIgdmVsb2NpdHk6IHZlYzJmPWFicyhhLWIpO3ZlbG9jaXR5PSB2ZWMyZihwb3codmVsb2NpdHkueCwxLjAvMy4wKSxwb3codmVsb2NpdHkueSwxLjAvMy4wKSkqc2lnbihhLWIpKjAuNSswLjU7ZnJhZ0RhdGFbUFJFUEFTU19WRUxPQ0lUWV9JTkRFWF09IHZlYzRmKHZlbG9jaXR5LDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZWxpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKVxudmFyIHZlbG9jaXR5IDogdmVjMmY9dmVjMmYoMC41KSooKGZyYWdtZW50SW5wdXRzLnZQcmV2aW91c1Bvc2l0aW9uLnh5L2ZyYWdtZW50SW5wdXRzLnZQcmV2aW91c1Bvc2l0aW9uLncpIC1cbihmcmFnbWVudElucHV0cy52Q3VycmVudFBvc2l0aW9uLnh5L2ZyYWdtZW50SW5wdXRzLnZDdXJyZW50UG9zaXRpb24udykpO2ZyYWdEYXRhW1BSRVBBU1NfVkVMT0NJVFlfTElORUFSX0lOREVYXT12ZWM0Zih2ZWxvY2l0eSwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19JUlJBRElBTkNFXG5mcmFnRGF0YVtQUkVQQVNTX0lSUkFESUFOQ0VfSU5ERVhdPXZlYzRmKDAuMCwwLjAsMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTsgXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0RFUFRIXG5mcmFnRGF0YVtQUkVQQVNTX0RFUFRIX0lOREVYXT12ZWM0ZihmcmFnbWVudElucHV0cy52Vmlld1Bvcy56LDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfU0NSRUVOU1BBQ0VfREVQVEhcbmZyYWdEYXRhW1BSRVBBU1NfU0NSRUVOU1BBQ0VfREVQVEhfSU5ERVhdPXZlYzRmKGZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLnosMC4wLDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX05PUk1BTElaRURfVklFV19ERVBUSFxuZnJhZ0RhdGFbUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhfSU5ERVhdPXZlYzRmKGZyYWdtZW50SW5wdXRzLnZOb3JtVmlld0RlcHRoLDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxcbiNpZmRlZiBQUkVQQVNTX05PUk1BTF9XT1JMRFNQQUNFXG5mcmFnRGF0YVtQUkVQQVNTX05PUk1BTF9JTkRFWF09dmVjNGYobm9ybWFsVyx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZWxzZVxuZnJhZ0RhdGFbUFJFUEFTU19OT1JNQUxfSU5ERVhdPXZlYzRmKG5vcm1hbGl6ZSgoc2NlbmUudmlldyp2ZWM0Zihub3JtYWxXLDAuMCkpLnJnYiksd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1dPUkxEX05PUk1BTFxuZnJhZ0RhdGFbUFJFUEFTU19XT1JMRF9OT1JNQUxfSU5ERVhdPXZlYzRmKG5vcm1hbFcqMC41KzAuNSx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0FMQkVET1xuZnJhZ0RhdGFbUFJFUEFTU19BTEJFRE9fSU5ERVhdPXZlYzRmKGJhc2VDb2xvci5yZ2Isd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19BTEJFRE9fU1FSVFxuZnJhZ0RhdGFbUFJFUEFTU19BTEJFRE9fU1FSVF9JTkRFWF09dmVjNGYoc3FydChiYXNlQ29sb3IucmdiKSx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1JFRkxFQ1RJVklUWVxuI2lmIGRlZmluZWQoU1BFQ1VMQVIpXG5mcmFnRGF0YVtQUkVQQVNTX1JFRkxFQ1RJVklUWV9JTkRFWF09dmVjNGYodG9MaW5lYXJTcGFjZVZlYzQoc3BlY3VsYXJNYXBDb2xvcikpKndyaXRlR2VvbWV0cnlJbmZvOyBcbiNlbHNlXG5mcmFnRGF0YVtQUkVQQVNTX1JFRkxFQ1RJVklUWV9JTkRFWF09dmVjNGYodG9MaW5lYXJTcGFjZVZlYzMoc3BlY3VsYXJDb2xvciksMS4wKSp3cml0ZUdlb21ldHJ5SW5mbztcbiNlbmRpZlxuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjBcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTA9ZnJhZ0RhdGFbMF07XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+MVxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhMT1mcmFnRGF0YVsxXTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD4yXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGEyPWZyYWdEYXRhWzJdO1xuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjNcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTM9ZnJhZ0RhdGFbM107XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+NFxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhND1mcmFnRGF0YVs0XTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD41XG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGE1PWZyYWdEYXRhWzVdO1xuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjZcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTY9ZnJhZ0RhdGFbNl07XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+N1xuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhNz1mcmFnRGF0YVs3XTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChQUkVQQVNTKSAmJiAhZGVmaW5lZChPUkRFUl9JTkRFUEVOREVOVF9UUkFOU1BBUkVOQ1kpXG5mcmFnbWVudE91dHB1dHMuY29sb3I9Y29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPG9pdEZyYWdtZW50PlxuI2lmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxuaWYgKGZyYWdEZXB0aD09bmVhcmVzdERlcHRoKSB7ZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3I9dmVjNGYoZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3IucmdiK2NvbG9yLnJnYipjb2xvci5hKmFscGhhTXVsdGlwbGllciwxLjAtYWxwaGFNdWx0aXBsaWVyKigxLjAtY29sb3IuYSkpO30gZWxzZSB7ZnJhZ21lbnRPdXRwdXRzLmJhY2tDb2xvcis9Y29sb3I7fVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0VORFxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFBpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=