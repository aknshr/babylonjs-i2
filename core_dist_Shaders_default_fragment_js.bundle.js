"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_default_fragment_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/defaultFragmentDeclaration.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/defaultFragmentDeclaration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFragmentDeclaration: () => (/* binding */ defaultFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/decalFragmentDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "defaultFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;uniform vec4 emissiveRightColor;
#endif
#if defined(REFLECTION) || (defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED))
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const defaultFragmentDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/defaultUboDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/defaultUboDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultUboDeclaration: () => (/* binding */ defaultUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/Shaders/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "defaultUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionPosition;vec3 vReflectionSize;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const defaultUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/fresnelFunction.js":
/*!**************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/fresnelFunction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fresnelFunction: () => (/* binding */ fresnelFunction)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "fresnelFunction";
const shader = `#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const fresnelFunction = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/lightsFragmentFunctions.js":
/*!**********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/lightsFragmentFunctions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightsFragmentFunctions: () => (/* binding */ lightsFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ltcHelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ltcHelperFunctions */ "../core/dist/Shaders/ShadersInclude/ltcHelperFunctions.js");
/* harmony import */ var _clusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clusteredLightingFunctions */ "../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "lightsFragmentFunctions";
const shader = `struct lightingInfo
{vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {lightingInfo result;vec3 lightVectorW;float attenuation=1.0;if (lightData.w==0.)
{vec3 direction=lightData.xyz-vPositionW;attenuation=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
float getAttenuation(float cosAngle,float exponent) {return max(0.,pow(cosAngle,exponent));}
float getIESAttenuation(float cosAngle,sampler2D iesLightSampler) {float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
lightingInfo basicSpotLighting(vec3 viewDirectionW,vec3 lightVectorW,vec3 vNormal,float attenuation,vec3 diffuseColor,vec3 specularColor,float glossiness) {lightingInfo result; 
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
lightingInfo computeIESSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness,sampler2D iesLightSampler) { 
vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float dotProduct=dot(lightDirection.xyz,-lightVectorW);float cosAngle=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{ 
attenuation*=getIESAttenuation(dotProduct,iesLightSampler);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{ 
attenuation*=getAttenuation(cosAngle,lightData.w);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {lightingInfo result;float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return textureColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
uniform sampler2D areaLightsLTC1Sampler;uniform sampler2D areaLightsLTC2Sampler;
#define inline
lightingInfo computeAreaLighting(sampler2D ltc1,sampler2D ltc2,vec3 viewDirectionW,vec3 vNormal,vec3 vPosition,vec3 lightPosition,vec3 halfWidth,vec3 halfHeight,vec3 diffuseColor,vec3 specularColor,float roughness) 
{lightingInfo result;areaLightData data=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc2,viewDirectionW,vNormal,vPosition,lightPosition,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
vec3 fresnel=( specularColor*data.Fresnel.x+( vec3( 1.0 )-specularColor )*data.Fresnel.y );result.specular+=specularColor*fresnel*data.Specular;
#endif
result.diffuse+=diffuseColor*data.Diffuse;return result;}
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
#include<clusteredLightingFunctions>
#define inline
lightingInfo computeClusteredLighting(
sampler2D lightDataTexture,
sampler2D tileMaskTexture,
vec3 viewDirectionW,
vec3 vNormal,
vec4 lightData,
ivec2 sliceRange,
float glossiness
) {lightingInfo result;ivec2 tilePosition=ivec2(gl_FragCoord.xy*lightData.xy);int maskHeight=int(lightData.z);tilePosition.y=min(tilePosition.y,maskHeight-1);ivec2 batchRange=sliceRange/CLUSTLIGHT_BATCH;int batchOffset=batchRange.x*CLUSTLIGHT_BATCH;tilePosition.y+=maskHeight*batchRange.x;for (int i=batchRange.x; i<=batchRange.y; i+=1) {uint mask=uint(texelFetch(tileMaskTexture,tilePosition,0).r);tilePosition.y+=maskHeight;int maskOffset=max(sliceRange.x-batchOffset,0);int maskWidth=min(sliceRange.y-batchOffset+1,CLUSTLIGHT_BATCH);mask=extractBits(mask,maskOffset,maskWidth);while (mask != 0u) {uint bit=mask & -mask;mask ^= bit;int position=onlyBitPosition(bit);ClusteredLight light=getClusteredLight(lightDataTexture,batchOffset+maskOffset+position);lightingInfo info;if (light.vLightDirection.w<0.0) {info=computeLighting(viewDirectionW,vNormal,light.vLightData,light.vLightDiffuse.rgb,light.vLightSpecular.rgb,light.vLightDiffuse.a,glossiness);} else {info=computeSpotLighting(viewDirectionW,vNormal,light.vLightData,light.vLightDirection,light.vLightDiffuse.rgb,light.vLightSpecular.rgb,light.vLightDiffuse.a,glossiness);}
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
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const lightsFragmentFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/default.fragment.js":
/*!************************************************!*\
  !*** ../core/dist/Shaders/default.fragment.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPixelShader: () => (/* binding */ defaultPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_defaultFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/defaultFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/defaultFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_defaultUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/defaultUboDeclaration */ "../core/dist/Shaders/ShadersInclude/defaultUboDeclaration.js");
/* harmony import */ var _ShadersInclude_prePassDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/prePassDeclaration */ "../core/dist/Shaders/ShadersInclude/prePassDeclaration.js");
/* harmony import */ var _ShadersInclude_oitDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/oitDeclaration */ "../core/dist/Shaders/ShadersInclude/oitDeclaration.js");
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/mainUVVaryingDeclaration */ "../core/dist/Shaders/ShadersInclude/mainUVVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_lightFragmentDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/lightFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_lightsFragmentFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/lightsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/lightsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/shadowsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/samplerFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_fresnelFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/fresnelFunction */ "../core/dist/Shaders/ShadersInclude/fresnelFunction.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/Shaders/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/Shaders/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/Shaders/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentMainFunctions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentMainFunctions */ "../core/dist/Shaders/ShadersInclude/bumpFragmentMainFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentFunctions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/bumpFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_bumpFragment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/bumpFragment */ "../core/dist/Shaders/ShadersInclude/bumpFragment.js");
/* harmony import */ var _ShadersInclude_decalFragment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/decalFragment */ "../core/dist/Shaders/ShadersInclude/decalFragment.js");
/* harmony import */ var _ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/depthPrePass */ "../core/dist/Shaders/ShadersInclude/depthPrePass.js");
/* harmony import */ var _ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/lightFragment */ "../core/dist/Shaders/ShadersInclude/lightFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_oitFragment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/oitFragment */ "../core/dist/Shaders/ShadersInclude/oitFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





























const name = "defaultPixelShader";
const shader = `#define CUSTOM_FRAGMENT_EXTENSION
#include<__decl__defaultFragment>
#if defined(BUMP) || !defined(NORMAL)
#extension GL_OES_standard_derivatives : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
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
uniform samplerCube refractionCubeSampler;
#else
uniform sampler2D refraction2DSampler;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
uniform samplerCube reflectionCubeSampler;
#else
uniform sampler2D reflection2DSampler;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
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
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<alphaCutOff)
discard;
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor.rgb*=vDiffuseInfos.y;
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef DETAIL
baseColor.rgb=baseColor.rgb*2.0*mix(0.5,detailColor.r,vDetailInfos.y);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
vec3 baseAmbientColor=vec3(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb*vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
vec4 specularMapColor=texture2D(specularSampler,vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;vec4 refractionColor=vec4(0.,0.,0.,1.);
#ifdef REFRACTION
vec3 refractionVector=normalize(refract(-viewDirectionW,normalW,vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,vRefractionSize,vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;vec4 refractionLookup=textureCube(refractionCubeSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=texture2D(refraction2DSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor.rgb=fromRGBD(refractionColor);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor.rgb=toGammaSpace(refractionColor.rgb);
#endif
refractionColor.rgb*=vRefractionInfos.x;
#endif
vec4 reflectionColor=vec4(0.,0.,0.,1.);
#ifdef REFLECTION
vec3 vReflectionUVW=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
float bias=vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW,bias);
#else
reflectionColor=textureCube(reflectionCubeSampler,vReflectionUVW);
#endif
#else
vec2 coords=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=texture2D(reflection2DSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor.rgb=toGammaSpace(reflectionColor.rgb);
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#ifdef REFLECTIONFRESNEL
float reflectionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,reflectionRightColor.a,reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor.rgb*=specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#else
reflectionColor.rgb*=reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*reflectionRightColor.rgb;
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
float refractionFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,refractionRightColor.a,refractionLeftColor.a);refractionColor.rgb*=refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*refractionRightColor.rgb;
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;
#else
alpha*=opacityMap.a*vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef OPACITYFRESNEL
float opacityFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,opacityParts.z,opacityParts.w);alpha+=opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<alphaCutOff)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
vec3 emissiveColor=vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb*vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
float emissiveFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,emissiveRightColor.a,emissiveLeftColor.a);emissiveColor*=emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
float diffuseFresnelTerm=computeFresnelTerm(viewDirectionW,normalW,diffuseRightColor.a,diffuseLeftColor.a);diffuseBase*=diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
vec3 finalDiffuse=clamp((diffuseBase+emissiveColor)*diffuseColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor+emissiveColor+vAmbientColor,0.0,1.0)*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#else
vec3 finalSpecular=vec3(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb,vec3(0.3,0.59,0.11)),0.,1.);
#endif
#ifdef EMISSIVEASILLUMINATION
vec4 color=vec4(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
vec4 color=vec4(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color.rgb*=lightmapColor.rgb;
#else
color.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color.rgb=max(color.rgb,0.);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#else
#ifdef IMAGEPROCESSING
color.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);
#endif
#endif
color.a*=visibility;
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#if SCENE_MRT_COUNT>0
float writeGeometryInfo=color.a>0.4 ? 1.0 : 0.0;
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
gl_FragData[PREPASS_LOCAL_POSITION_INDEX]=vec4(vPosition,writeGeometryInfo);
#endif
#if defined(PREPASS_VELOCITY)
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w)-(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
gl_FragData[PREPASS_NORMALIZED_VIEW_DEPTH_INDEX]=vec4(vNormViewDepth,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalW,writeGeometryInfo);
#else
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
gl_FragData[PREPASS_WORLD_NORMAL_INDEX]=vec4(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularMapColor))*writeGeometryInfo; 
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(toLinearSpace(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#endif
#endif
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {frontColor.rgb+=color.rgb*color.a*alphaMultiplier;frontColor.a=1.0-alphaMultiplier*(1.0-color.a);} else {backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const defaultPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfZGVmYXVsdF9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNlZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2RlZmF1bHRGcmFnbWVudERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9kZWZhdWx0VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2ZyZXNuZWxGdW5jdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRzRnJhZ21lbnRGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL2RlZmF1bHQuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2RlY2FsRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJkZWZhdWx0RnJhZ21lbnREZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gdmVjNCB2RXllUG9zaXRpb247dW5pZm9ybSB2ZWM0IHZEaWZmdXNlQ29sb3I7dW5pZm9ybSB2ZWM0IHZTcGVjdWxhckNvbG9yO3VuaWZvcm0gdmVjMyB2RW1pc3NpdmVDb2xvcjt1bmlmb3JtIHZlYzMgdkFtYmllbnRDb2xvcjt1bmlmb3JtIGZsb2F0IHZpc2liaWxpdHk7XG4jaWZkZWYgRElGRlVTRVxudW5pZm9ybSB2ZWMyIHZEaWZmdXNlSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBBTUJJRU5UXG51bmlmb3JtIHZlYzIgdkFtYmllbnRJbmZvcztcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFkgXG51bmlmb3JtIHZlYzIgdk9wYWNpdHlJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEVNSVNTSVZFXG51bmlmb3JtIHZlYzIgdkVtaXNzaXZlSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBMSUdIVE1BUFxudW5pZm9ybSB2ZWMyIHZMaWdodG1hcEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgQlVNUFxudW5pZm9ybSB2ZWMzIHZCdW1wSW5mb3M7dW5pZm9ybSB2ZWMyIHZUYW5nZW50U3BhY2VQYXJhbXM7XG4jZW5kaWZcbiNpZmRlZiBBTFBIQVRFU1RcbnVuaWZvcm0gZmxvYXQgYWxwaGFDdXRPZmY7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU1BIRVJJQ0FMKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfUFJPSkVDVElPTikgfHwgZGVmaW5lZChSRUZSQUNUSU9OKSB8fCBkZWZpbmVkKFBSRVBBU1MpXG51bmlmb3JtIG1hdDQgdmlldztcbiNlbmRpZlxuI2lmZGVmIFJFRlJBQ1RJT05cbnVuaWZvcm0gdmVjNCB2UmVmcmFjdGlvbkluZm9zO1xuI2lmbmRlZiBSRUZSQUNUSU9OTUFQXzNEXG51bmlmb3JtIG1hdDQgcmVmcmFjdGlvbk1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFJFRlJBQ1RJT05GUkVTTkVMXG51bmlmb3JtIHZlYzQgcmVmcmFjdGlvbkxlZnRDb2xvcjt1bmlmb3JtIHZlYzQgcmVmcmFjdGlvblJpZ2h0Q29sb3I7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFVTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDKSAmJiBkZWZpbmVkKFJFRlJBQ1RJT05NQVBfM0QpXG51bmlmb3JtIHZlYzMgdlJlZnJhY3Rpb25Qb3NpdGlvbjt1bmlmb3JtIHZlYzMgdlJlZnJhY3Rpb25TaXplOyBcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTUEVDVUxBUikgJiYgZGVmaW5lZChTUEVDVUxBUlRFUk0pXG51bmlmb3JtIHZlYzIgdlNwZWN1bGFySW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBESUZGVVNFRlJFU05FTFxudW5pZm9ybSB2ZWM0IGRpZmZ1c2VMZWZ0Q29sb3I7dW5pZm9ybSB2ZWM0IGRpZmZ1c2VSaWdodENvbG9yO1xuI2VuZGlmXG4jaWZkZWYgT1BBQ0lUWUZSRVNORUxcbnVuaWZvcm0gdmVjNCBvcGFjaXR5UGFydHM7XG4jZW5kaWZcbiNpZmRlZiBFTUlTU0lWRUZSRVNORUxcbnVuaWZvcm0gdmVjNCBlbWlzc2l2ZUxlZnRDb2xvcjt1bmlmb3JtIHZlYzQgZW1pc3NpdmVSaWdodENvbG9yO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OKSB8fCAoZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRCkpXG51bmlmb3JtIHZlYzIgdlJlZmxlY3Rpb25JbmZvcztcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfUExBTkFSKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfQ1VCSUMpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU1BIRVJJQ0FMKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxudW5pZm9ybSBtYXQ0IHJlZmxlY3Rpb25NYXRyaXg7XG4jZW5kaWZcbiNpZm5kZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbiNpZiBkZWZpbmVkKFVTRV9MT0NBTF9SRUZMRUNUSU9OTUFQX0NVQklDKSAmJiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfQ1VCSUMpXG51bmlmb3JtIHZlYzMgdlJlZmxlY3Rpb25Qb3NpdGlvbjt1bmlmb3JtIHZlYzMgdlJlZmxlY3Rpb25TaXplOyBcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTkZSRVNORUxcbnVuaWZvcm0gdmVjNCByZWZsZWN0aW9uTGVmdENvbG9yO3VuaWZvcm0gdmVjNCByZWZsZWN0aW9uUmlnaHRDb2xvcjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG51bmlmb3JtIHZlYzQgdkRldGFpbEluZm9zO1xuI2VuZGlmXG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50RGVjbGFyYXRpb24+XG4jZGVmaW5lIEFERElUSU9OQUxfRlJBR01FTlRfREVDTEFSQVRJT05cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVmYXVsdEZyYWdtZW50RGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcImRlZmF1bHRVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYGxheW91dChzdGQxNDAsY29sdW1uX21ham9yKSB1bmlmb3JtO3VuaWZvcm0gTWF0ZXJpYWxcbnt2ZWM0IGRpZmZ1c2VMZWZ0Q29sb3I7dmVjNCBkaWZmdXNlUmlnaHRDb2xvcjt2ZWM0IG9wYWNpdHlQYXJ0czt2ZWM0IHJlZmxlY3Rpb25MZWZ0Q29sb3I7dmVjNCByZWZsZWN0aW9uUmlnaHRDb2xvcjt2ZWM0IHJlZnJhY3Rpb25MZWZ0Q29sb3I7dmVjNCByZWZyYWN0aW9uUmlnaHRDb2xvcjt2ZWM0IGVtaXNzaXZlTGVmdENvbG9yO3ZlYzQgZW1pc3NpdmVSaWdodENvbG9yO3ZlYzIgdkRpZmZ1c2VJbmZvczt2ZWMyIHZBbWJpZW50SW5mb3M7dmVjMiB2T3BhY2l0eUluZm9zO3ZlYzIgdkVtaXNzaXZlSW5mb3M7dmVjMiB2TGlnaHRtYXBJbmZvczt2ZWMyIHZTcGVjdWxhckluZm9zO3ZlYzMgdkJ1bXBJbmZvczttYXQ0IGRpZmZ1c2VNYXRyaXg7bWF0NCBhbWJpZW50TWF0cml4O21hdDQgb3BhY2l0eU1hdHJpeDttYXQ0IGVtaXNzaXZlTWF0cml4O21hdDQgbGlnaHRtYXBNYXRyaXg7bWF0NCBzcGVjdWxhck1hdHJpeDttYXQ0IGJ1bXBNYXRyaXg7dmVjMiB2VGFuZ2VudFNwYWNlUGFyYW1zO2Zsb2F0IHBvaW50U2l6ZTtmbG9hdCBhbHBoYUN1dE9mZjttYXQ0IHJlZnJhY3Rpb25NYXRyaXg7dmVjNCB2UmVmcmFjdGlvbkluZm9zO3ZlYzMgdlJlZnJhY3Rpb25Qb3NpdGlvbjt2ZWMzIHZSZWZyYWN0aW9uU2l6ZTt2ZWM0IHZTcGVjdWxhckNvbG9yO3ZlYzMgdkVtaXNzaXZlQ29sb3I7dmVjNCB2RGlmZnVzZUNvbG9yO3ZlYzMgdkFtYmllbnRDb2xvcjt2ZWM0IGNhbWVyYUluZm87dmVjMiB2UmVmbGVjdGlvbkluZm9zO21hdDQgcmVmbGVjdGlvbk1hdHJpeDt2ZWMzIHZSZWZsZWN0aW9uUG9zaXRpb247dmVjMyB2UmVmbGVjdGlvblNpemU7XG4jZGVmaW5lIEFERElUSU9OQUxfVUJPX0RFQ0xBUkFUSU9OXG59O1xuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFVib0RlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJmcmVzbmVsRnVuY3Rpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgRlJFU05FTFxuZmxvYXQgY29tcHV0ZUZyZXNuZWxUZXJtKHZlYzMgdmlld0RpcmVjdGlvbix2ZWMzIHdvcmxkTm9ybWFsLGZsb2F0IGJpYXMsZmxvYXQgcG93ZXIpXG57ZmxvYXQgZnJlc25lbFRlcm09cG93KGJpYXMrYWJzKGRvdCh2aWV3RGlyZWN0aW9uLHdvcmxkTm9ybWFsKSkscG93ZXIpO3JldHVybiBjbGFtcChmcmVzbmVsVGVybSwwLiwxLik7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGZyZXNuZWxGdW5jdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vbHRjSGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGxpZ2h0aW5nSW5mb1xue3ZlYzMgZGlmZnVzZTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgc3BlY3VsYXI7XG4jZW5kaWZcbiNpZmRlZiBORE9UTFxuZmxvYXQgbmRsO1xuI2VuZGlmXG59O2xpZ2h0aW5nSW5mbyBjb21wdXRlTGlnaHRpbmcodmVjMyB2aWV3RGlyZWN0aW9uVyx2ZWMzIHZOb3JtYWwsdmVjNCBsaWdodERhdGEsdmVjMyBkaWZmdXNlQ29sb3IsdmVjMyBzcGVjdWxhckNvbG9yLGZsb2F0IHJhbmdlLGZsb2F0IGdsb3NzaW5lc3MpIHtsaWdodGluZ0luZm8gcmVzdWx0O3ZlYzMgbGlnaHRWZWN0b3JXO2Zsb2F0IGF0dGVudWF0aW9uPTEuMDtpZiAobGlnaHREYXRhLnc9PTAuKVxue3ZlYzMgZGlyZWN0aW9uPWxpZ2h0RGF0YS54eXotdlBvc2l0aW9uVzthdHRlbnVhdGlvbj1tYXgoMC4sMS4wLWxlbmd0aChkaXJlY3Rpb24pL3JhbmdlKTtsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7fVxuZWxzZVxue2xpZ2h0VmVjdG9yVz1ub3JtYWxpemUoLWxpZ2h0RGF0YS54eXopO31cbmZsb2F0IG5kbD1tYXgoMC4sZG90KHZOb3JtYWwsbGlnaHRWZWN0b3JXKSk7XG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9bmRsO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZT1uZGwqZGlmZnVzZUNvbG9yKmF0dGVudWF0aW9uO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMyBhbmdsZVc9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0VmVjdG9yVyk7ZmxvYXQgc3BlY0NvbXA9bWF4KDAuLGRvdCh2Tm9ybWFsLGFuZ2xlVykpO3NwZWNDb21wPXBvdyhzcGVjQ29tcCxtYXgoMS4sZ2xvc3NpbmVzcykpO3Jlc3VsdC5zcGVjdWxhcj1zcGVjQ29tcCpzcGVjdWxhckNvbG9yKmF0dGVudWF0aW9uO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZsb2F0IGdldEF0dGVudWF0aW9uKGZsb2F0IGNvc0FuZ2xlLGZsb2F0IGV4cG9uZW50KSB7cmV0dXJuIG1heCgwLixwb3coY29zQW5nbGUsZXhwb25lbnQpKTt9XG5mbG9hdCBnZXRJRVNBdHRlbnVhdGlvbihmbG9hdCBjb3NBbmdsZSxzYW1wbGVyMkQgaWVzTGlnaHRTYW1wbGVyKSB7ZmxvYXQgYW5nbGU9YWNvcyhjb3NBbmdsZSkvUEk7cmV0dXJuIHRleHR1cmUyRChpZXNMaWdodFNhbXBsZXIsdmVjMihhbmdsZSwwLikpLnI7fVxubGlnaHRpbmdJbmZvIGJhc2ljU3BvdExpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyBsaWdodFZlY3RvclcsdmVjMyB2Tm9ybWFsLGZsb2F0IGF0dGVudWF0aW9uLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCBnbG9zc2luZXNzKSB7bGlnaHRpbmdJbmZvIHJlc3VsdDsgXG5mbG9hdCBuZGw9bWF4KDAuLGRvdCh2Tm9ybWFsLGxpZ2h0VmVjdG9yVykpO1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bmRsKmRpZmZ1c2VDb2xvciphdHRlbnVhdGlvbjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgYW5nbGVXPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodFZlY3RvclcpO2Zsb2F0IHNwZWNDb21wPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvciphdHRlbnVhdGlvbjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5saWdodGluZ0luZm8gY29tcHV0ZUlFU1Nwb3RMaWdodGluZyh2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgdk5vcm1hbCx2ZWM0IGxpZ2h0RGF0YSx2ZWM0IGxpZ2h0RGlyZWN0aW9uLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCByYW5nZSxmbG9hdCBnbG9zc2luZXNzLHNhbXBsZXIyRCBpZXNMaWdodFNhbXBsZXIpIHsgXG52ZWMzIGRpcmVjdGlvbj1saWdodERhdGEueHl6LXZQb3NpdGlvblc7dmVjMyBsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7ZmxvYXQgYXR0ZW51YXRpb249bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7ZmxvYXQgZG90UHJvZHVjdD1kb3QobGlnaHREaXJlY3Rpb24ueHl6LC1saWdodFZlY3RvclcpO2Zsb2F0IGNvc0FuZ2xlPW1heCgwLixkb3RQcm9kdWN0KTtpZiAoY29zQW5nbGU+PWxpZ2h0RGlyZWN0aW9uLncpXG57IFxuYXR0ZW51YXRpb24qPWdldElFU0F0dGVudWF0aW9uKGRvdFByb2R1Y3QsaWVzTGlnaHRTYW1wbGVyKTtyZXR1cm4gYmFzaWNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbGlnaHRWZWN0b3JXLHZOb3JtYWwsYXR0ZW51YXRpb24sZGlmZnVzZUNvbG9yLHNwZWN1bGFyQ29sb3IsZ2xvc3NpbmVzcyk7fVxubGlnaHRpbmdJbmZvIHJlc3VsdDtyZXN1bHQuZGlmZnVzZT12ZWMzKDAuKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5zcGVjdWxhcj12ZWMzKDAuKTtcbiNlbmRpZlxuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPTAuO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmxpZ2h0aW5nSW5mbyBjb21wdXRlU3BvdExpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzQgbGlnaHREYXRhLHZlYzQgbGlnaHREaXJlY3Rpb24sdmVjMyBkaWZmdXNlQ29sb3IsdmVjMyBzcGVjdWxhckNvbG9yLGZsb2F0IHJhbmdlLGZsb2F0IGdsb3NzaW5lc3MpIHt2ZWMzIGRpcmVjdGlvbj1saWdodERhdGEueHl6LXZQb3NpdGlvblc7dmVjMyBsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7ZmxvYXQgYXR0ZW51YXRpb249bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7ZmxvYXQgY29zQW5nbGU9bWF4KDAuLGRvdChsaWdodERpcmVjdGlvbi54eXosLWxpZ2h0VmVjdG9yVykpO2lmIChjb3NBbmdsZT49bGlnaHREaXJlY3Rpb24udylcbnsgXG5hdHRlbnVhdGlvbio9Z2V0QXR0ZW51YXRpb24oY29zQW5nbGUsbGlnaHREYXRhLncpO3JldHVybiBiYXNpY1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxsaWdodFZlY3Rvclcsdk5vcm1hbCxhdHRlbnVhdGlvbixkaWZmdXNlQ29sb3Isc3BlY3VsYXJDb2xvcixnbG9zc2luZXNzKTt9XG5saWdodGluZ0luZm8gcmVzdWx0O3Jlc3VsdC5kaWZmdXNlPXZlYzMoMC4pO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyPXZlYzMoMC4pO1xuI2VuZGlmXG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9MC47XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxubGlnaHRpbmdJbmZvIGNvbXB1dGVIZW1pc3BoZXJpY0xpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzQgbGlnaHREYXRhLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcix2ZWMzIGdyb3VuZENvbG9yLGZsb2F0IGdsb3NzaW5lc3MpIHtsaWdodGluZ0luZm8gcmVzdWx0O2Zsb2F0IG5kbD1kb3Qodk5vcm1hbCxsaWdodERhdGEueHl6KSowLjUrMC41O1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bWl4KGdyb3VuZENvbG9yLGRpZmZ1c2VDb2xvcixuZGwpO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMyBhbmdsZVc9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0RGF0YS54eXopO2Zsb2F0IHNwZWNDb21wPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvcjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG4jZGVmaW5lIGlubGluZVxudmVjMyBjb21wdXRlUHJvamVjdGlvblRleHR1cmVEaWZmdXNlTGlnaHRpbmcoc2FtcGxlcjJEIHByb2plY3Rpb25MaWdodFNhbXBsZXIsbWF0NCB0ZXh0dXJlUHJvamVjdGlvbk1hdHJpeCx2ZWMzIHBvc1cpe3ZlYzQgc3RycT10ZXh0dXJlUHJvamVjdGlvbk1hdHJpeCp2ZWM0KHBvc1csMS4wKTtzdHJxLz1zdHJxLnc7dmVjMyB0ZXh0dXJlQ29sb3I9dGV4dHVyZTJEKHByb2plY3Rpb25MaWdodFNhbXBsZXIsc3RycS54eSkucmdiO3JldHVybiB0ZXh0dXJlQ29sb3I7fVxuI2lmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG4jaW5jbHVkZTxsdGNIZWxwZXJGdW5jdGlvbnM+XG51bmlmb3JtIHNhbXBsZXIyRCBhcmVhTGlnaHRzTFRDMVNhbXBsZXI7dW5pZm9ybSBzYW1wbGVyMkQgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyO1xuI2RlZmluZSBpbmxpbmVcbmxpZ2h0aW5nSW5mbyBjb21wdXRlQXJlYUxpZ2h0aW5nKHNhbXBsZXIyRCBsdGMxLHNhbXBsZXIyRCBsdGMyLHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzMgdlBvc2l0aW9uLHZlYzMgbGlnaHRQb3NpdGlvbix2ZWMzIGhhbGZXaWR0aCx2ZWMzIGhhbGZIZWlnaHQsdmVjMyBkaWZmdXNlQ29sb3IsdmVjMyBzcGVjdWxhckNvbG9yLGZsb2F0IHJvdWdobmVzcykgXG57bGlnaHRpbmdJbmZvIHJlc3VsdDthcmVhTGlnaHREYXRhIGRhdGE9Y29tcHV0ZUFyZWFMaWdodFNwZWN1bGFyRGlmZnVzZUZyZXNuZWwobHRjMSxsdGMyLHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsdlBvc2l0aW9uLGxpZ2h0UG9zaXRpb24saGFsZldpZHRoLGhhbGZIZWlnaHQscm91Z2huZXNzKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgZnJlc25lbD0oIHNwZWN1bGFyQ29sb3IqZGF0YS5GcmVzbmVsLngrKCB2ZWMzKCAxLjAgKS1zcGVjdWxhckNvbG9yICkqZGF0YS5GcmVzbmVsLnkgKTtyZXN1bHQuc3BlY3VsYXIrPXNwZWN1bGFyQ29sb3IqZnJlc25lbCpkYXRhLlNwZWN1bGFyO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZSs9ZGlmZnVzZUNvbG9yKmRhdGEuRGlmZnVzZTtyZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG4jaW5jbHVkZTxjbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9ucz5cbiNkZWZpbmUgaW5saW5lXG5saWdodGluZ0luZm8gY29tcHV0ZUNsdXN0ZXJlZExpZ2h0aW5nKFxuc2FtcGxlcjJEIGxpZ2h0RGF0YVRleHR1cmUsXG5zYW1wbGVyMkQgdGlsZU1hc2tUZXh0dXJlLFxudmVjMyB2aWV3RGlyZWN0aW9uVyxcbnZlYzMgdk5vcm1hbCxcbnZlYzQgbGlnaHREYXRhLFxuaXZlYzIgc2xpY2VSYW5nZSxcbmZsb2F0IGdsb3NzaW5lc3Ncbikge2xpZ2h0aW5nSW5mbyByZXN1bHQ7aXZlYzIgdGlsZVBvc2l0aW9uPWl2ZWMyKGdsX0ZyYWdDb29yZC54eSpsaWdodERhdGEueHkpO2ludCBtYXNrSGVpZ2h0PWludChsaWdodERhdGEueik7dGlsZVBvc2l0aW9uLnk9bWluKHRpbGVQb3NpdGlvbi55LG1hc2tIZWlnaHQtMSk7aXZlYzIgYmF0Y2hSYW5nZT1zbGljZVJhbmdlL0NMVVNUTElHSFRfQkFUQ0g7aW50IGJhdGNoT2Zmc2V0PWJhdGNoUmFuZ2UueCpDTFVTVExJR0hUX0JBVENIO3RpbGVQb3NpdGlvbi55Kz1tYXNrSGVpZ2h0KmJhdGNoUmFuZ2UueDtmb3IgKGludCBpPWJhdGNoUmFuZ2UueDsgaTw9YmF0Y2hSYW5nZS55OyBpKz0xKSB7dWludCBtYXNrPXVpbnQodGV4ZWxGZXRjaCh0aWxlTWFza1RleHR1cmUsdGlsZVBvc2l0aW9uLDApLnIpO3RpbGVQb3NpdGlvbi55Kz1tYXNrSGVpZ2h0O2ludCBtYXNrT2Zmc2V0PW1heChzbGljZVJhbmdlLngtYmF0Y2hPZmZzZXQsMCk7aW50IG1hc2tXaWR0aD1taW4oc2xpY2VSYW5nZS55LWJhdGNoT2Zmc2V0KzEsQ0xVU1RMSUdIVF9CQVRDSCk7bWFzaz1leHRyYWN0Qml0cyhtYXNrLG1hc2tPZmZzZXQsbWFza1dpZHRoKTt3aGlsZSAobWFzayAhPSAwdSkge3VpbnQgYml0PW1hc2sgJiAtbWFzazttYXNrIF49IGJpdDtpbnQgcG9zaXRpb249b25seUJpdFBvc2l0aW9uKGJpdCk7Q2x1c3RlcmVkTGlnaHQgbGlnaHQ9Z2V0Q2x1c3RlcmVkTGlnaHQobGlnaHREYXRhVGV4dHVyZSxiYXRjaE9mZnNldCttYXNrT2Zmc2V0K3Bvc2l0aW9uKTtsaWdodGluZ0luZm8gaW5mbztpZiAobGlnaHQudkxpZ2h0RGlyZWN0aW9uLnc8MC4wKSB7aW5mbz1jb21wdXRlTGlnaHRpbmcodmlld0RpcmVjdGlvblcsdk5vcm1hbCxsaWdodC52TGlnaHREYXRhLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiLGxpZ2h0LnZMaWdodFNwZWN1bGFyLnJnYixsaWdodC52TGlnaHREaWZmdXNlLmEsZ2xvc3NpbmVzcyk7fSBlbHNlIHtpbmZvPWNvbXB1dGVTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsdk5vcm1hbCxsaWdodC52TGlnaHREYXRhLGxpZ2h0LnZMaWdodERpcmVjdGlvbixsaWdodC52TGlnaHREaWZmdXNlLnJnYixsaWdodC52TGlnaHRTcGVjdWxhci5yZ2IsbGlnaHQudkxpZ2h0RGlmZnVzZS5hLGdsb3NzaW5lc3MpO31cbnJlc3VsdC5kaWZmdXNlKz1pbmZvLmRpZmZ1c2U7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXIrPWluZm8uc3BlY3VsYXI7XG4jZW5kaWZcbn1cbmJhdGNoT2Zmc2V0Kz1DTFVTVExJR0hUX0JBVENIO31cbnJldHVybiByZXN1bHQ7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZWZhdWx0RnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZWZhdWx0VWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29pdERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZyZXNuZWxGdW5jdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9yZWZsZWN0aW9uRnVuY3Rpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudE1haW5GdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcEZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZWNhbEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2RlcHRoUHJlUGFzc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb2l0RnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwiZGVmYXVsdFBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBDVVNUT01fRlJBR01FTlRfRVhURU5TSU9OXG4jaW5jbHVkZTxfX2RlY2xfX2RlZmF1bHRGcmFnbWVudD5cbiNpZiBkZWZpbmVkKEJVTVApIHx8ICFkZWZpbmVkKE5PUk1BTClcbiNleHRlbnNpb24gR0xfT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzIDogZW5hYmxlXG4jZW5kaWZcbiNpbmNsdWRlPHByZVBhc3NEZWNsYXJhdGlvbj5bU0NFTkVfTVJUX0NPVU5UXVxuI2luY2x1ZGU8b2l0RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUdJTlxuI2lmZGVmIExPR0FSSVRITUlDREVQVEhcbiNleHRlbnNpb24gR0xfRVhUX2ZyYWdfZGVwdGggOiBlbmFibGVcbiNlbmRpZlxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblc7XG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZlYzMgdk5vcm1hbFc7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbnZhcnlpbmcgdmVjNCB2Q29sb3I7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxudmFyeWluZyBmbG9hdCB2Vmlld0RlcHRoO1xuI2VuZGlmXG4jaW5jbHVkZTxtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb24+WzEuLjddXG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG4jaW5jbHVkZTxfX2RlY2xfX2xpZ2h0RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8c2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxESUZGVVNFLF9WQVJZSU5HTkFNRV8sRGlmZnVzZSxfU0FNUExFUk5BTUVfLGRpZmZ1c2UpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50LF9TQU1QTEVSTkFNRV8sYW1iaWVudClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHksX1NBTVBMRVJOQU1FXyxvcGFjaXR5KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlLF9TQU1QTEVSTkFNRV8sZW1pc3NpdmUpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXAsX1NBTVBMRVJOQU1FXyxsaWdodG1hcClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbCxfU0FNUExFUk5BTUVfLGRlY2FsKVxuI2lmZGVmIFJFRlJBQ1RJT05cbiNpZmRlZiBSRUZSQUNUSU9OTUFQXzNEXG51bmlmb3JtIHNhbXBsZXJDdWJlIHJlZnJhY3Rpb25DdWJlU2FtcGxlcjtcbiNlbHNlXG51bmlmb3JtIHNhbXBsZXIyRCByZWZyYWN0aW9uMkRTYW1wbGVyO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNQRUNVTEFSVEVSTSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVIsX1ZBUllJTkdOQU1FXyxTcGVjdWxhcixfU0FNUExFUk5BTUVfLHNwZWN1bGFyKVxuI2VuZGlmXG4jaW5jbHVkZTxmcmVzbmVsRnVuY3Rpb24+XG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnVuaWZvcm0gc2FtcGxlckN1YmUgcmVmbGVjdGlvbkN1YmVTYW1wbGVyO1xuI2Vsc2VcbnVuaWZvcm0gc2FtcGxlcjJEIHJlZmxlY3Rpb24yRFNhbXBsZXI7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblVWVztcbiNlbHNlXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2ZWMzIHZEaXJlY3Rpb25XO1xuI2VuZGlmXG4jZW5kaWZcbiNpbmNsdWRlPHJlZmxlY3Rpb25GdW5jdGlvbj5cbiNlbmRpZlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnM+XG4jaW5jbHVkZTxidW1wRnJhZ21lbnRNYWluRnVuY3Rpb25zPlxuI2luY2x1ZGU8YnVtcEZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dGcmFnbWVudERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbnZlYzMgdmlld0RpcmVjdGlvblc9bm9ybWFsaXplKHZFeWVQb3NpdGlvbi54eXotdlBvc2l0aW9uVyk7dmVjNCBiYXNlQ29sb3I9dmVjNCgxLiwxLiwxLiwxLik7dmVjMyBkaWZmdXNlQ29sb3I9dkRpZmZ1c2VDb2xvci5yZ2I7ZmxvYXQgYWxwaGE9dkRpZmZ1c2VDb2xvci5hO1xuI2lmZGVmIE5PUk1BTFxudmVjMyBub3JtYWxXPW5vcm1hbGl6ZSh2Tm9ybWFsVyk7XG4jZWxzZVxudmVjMyBub3JtYWxXPW5vcm1hbGl6ZShjcm9zcyhkRmR4KHZQb3NpdGlvblcpLGRGZHkodlBvc2l0aW9uVykpKSp2RXllUG9zaXRpb24udztcbiNlbmRpZlxuI2luY2x1ZGU8YnVtcEZyYWdtZW50PlxuI2lmZGVmIFRXT1NJREVETElHSFRJTkdcbm5vcm1hbFc9Z2xfRnJvbnRGYWNpbmcgPyBub3JtYWxXIDogLW5vcm1hbFc7XG4jZW5kaWZcbiNpZmRlZiBESUZGVVNFXG5iYXNlQ29sb3I9dGV4dHVyZTJEKGRpZmZ1c2VTYW1wbGVyLHZEaWZmdXNlVVYrdXZPZmZzZXQpO1xuI2lmIGRlZmluZWQoQUxQSEFURVNUKSAmJiAhZGVmaW5lZChBTFBIQVRFU1RfQUZURVJBTExBTFBIQUNPTVBVVEFUSU9OUylcbmlmIChiYXNlQ29sb3IuYTxhbHBoYUN1dE9mZilcbmRpc2NhcmQ7XG4jZW5kaWZcbiNpZmRlZiBBTFBIQUZST01ESUZGVVNFXG5hbHBoYSo9YmFzZUNvbG9yLmE7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX1VQREFURV9BTFBIQVxuYmFzZUNvbG9yLnJnYio9dkRpZmZ1c2VJbmZvcy55O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChERUNBTCkgJiYgIWRlZmluZWQoREVDQUxfQUZURVJfREVUQUlMKVxudmVjNCBkZWNhbENvbG9yPXRleHR1cmUyRChkZWNhbFNhbXBsZXIsdkRlY2FsVVYrdXZPZmZzZXQpO1xuI2luY2x1ZGU8ZGVjYWxGcmFnbWVudD4oc3VyZmFjZUFsYmVkbyxiYXNlQ29sb3IsR0FNTUFERUNBTCxfR0FNTUFERUNBTF9OT1RVU0VEXylcbiNlbmRpZlxuI2luY2x1ZGU8ZGVwdGhQcmVQYXNzPlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYmFzZUNvbG9yLnJnYio9dkNvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuYmFzZUNvbG9yLnJnYj1iYXNlQ29sb3IucmdiKjIuMCptaXgoMC41LGRldGFpbENvbG9yLnIsdkRldGFpbEluZm9zLnkpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChERUNBTCkgJiYgZGVmaW5lZChERUNBTF9BRlRFUl9ERVRBSUwpXG52ZWM0IGRlY2FsQ29sb3I9dGV4dHVyZTJEKGRlY2FsU2FtcGxlcix2RGVjYWxVVit1dk9mZnNldCk7XG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50PihzdXJmYWNlQWxiZWRvLGJhc2VDb2xvcixHQU1NQURFQ0FMLF9HQU1NQURFQ0FMX05PVFVTRURfKVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfRElGRlVTRVxudmVjMyBiYXNlQW1iaWVudENvbG9yPXZlYzMoMS4sMS4sMS4pO1xuI2lmZGVmIEFNQklFTlRcbmJhc2VBbWJpZW50Q29sb3I9dGV4dHVyZTJEKGFtYmllbnRTYW1wbGVyLHZBbWJpZW50VVYrdXZPZmZzZXQpLnJnYip2QW1iaWVudEluZm9zLnk7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9MSUdIVFNcbmZsb2F0IGdsb3NzaW5lc3M9dlNwZWN1bGFyQ29sb3IuYTt2ZWMzIHNwZWN1bGFyQ29sb3I9dlNwZWN1bGFyQ29sb3IucmdiO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxuI2lmZGVmIFNQRUNVTEFSXG52ZWM0IHNwZWN1bGFyTWFwQ29sb3I9dGV4dHVyZTJEKHNwZWN1bGFyU2FtcGxlcix2U3BlY3VsYXJVVit1dk9mZnNldCk7c3BlY3VsYXJDb2xvcj1zcGVjdWxhck1hcENvbG9yLnJnYjtcbiNpZmRlZiBHTE9TU0lORVNTXG5nbG9zc2luZXNzPWdsb3NzaW5lc3Mqc3BlY3VsYXJNYXBDb2xvci5hO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxudmVjMyBkaWZmdXNlQmFzZT12ZWMzKDAuLDAuLDAuKTtsaWdodGluZ0luZm8gaW5mbztcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgc3BlY3VsYXJCYXNlPXZlYzMoMC4sMC4sMC4pO1xuI2VuZGlmXG5mbG9hdCBzaGFkb3c9MS47ZmxvYXQgYWdnU2hhZG93PTAuO2Zsb2F0IG51bUxpZ2h0cz0wLjtcbiNpZmRlZiBMSUdIVE1BUFxudmVjNCBsaWdodG1hcENvbG9yPXRleHR1cmUyRChsaWdodG1hcFNhbXBsZXIsdkxpZ2h0bWFwVVYrdXZPZmZzZXQpO1xuI2lmZGVmIFJHQkRMSUdIVE1BUFxubGlnaHRtYXBDb2xvci5yZ2I9ZnJvbVJHQkQobGlnaHRtYXBDb2xvcik7XG4jZW5kaWZcbmxpZ2h0bWFwQ29sb3IucmdiKj12TGlnaHRtYXBJbmZvcy55O1xuI2VuZGlmXG4jaW5jbHVkZTxsaWdodEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG5hZ2dTaGFkb3c9YWdnU2hhZG93L251bUxpZ2h0czt2ZWM0IHJlZnJhY3Rpb25Db2xvcj12ZWM0KDAuLDAuLDAuLDEuKTtcbiNpZmRlZiBSRUZSQUNUSU9OXG52ZWMzIHJlZnJhY3Rpb25WZWN0b3I9bm9ybWFsaXplKHJlZnJhY3QoLXZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdlJlZnJhY3Rpb25JbmZvcy55KSk7XG4jaWZkZWYgUkVGUkFDVElPTk1BUF8zRFxuI2lmZGVmIFVTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG5yZWZyYWN0aW9uVmVjdG9yPXBhcmFsbGF4Q29ycmVjdE5vcm1hbCh2UG9zaXRpb25XLHJlZnJhY3Rpb25WZWN0b3IsdlJlZnJhY3Rpb25TaXplLHZSZWZyYWN0aW9uUG9zaXRpb24pO1xuI2VuZGlmXG5yZWZyYWN0aW9uVmVjdG9yLnk9cmVmcmFjdGlvblZlY3Rvci55KnZSZWZyYWN0aW9uSW5mb3Mudzt2ZWM0IHJlZnJhY3Rpb25Mb29rdXA9dGV4dHVyZUN1YmUocmVmcmFjdGlvbkN1YmVTYW1wbGVyLHJlZnJhY3Rpb25WZWN0b3IpO2lmIChkb3QocmVmcmFjdGlvblZlY3Rvcix2aWV3RGlyZWN0aW9uVyk8MS4wKSB7cmVmcmFjdGlvbkNvbG9yPXJlZnJhY3Rpb25Mb29rdXA7fVxuI2Vsc2VcbnZlYzMgdlJlZnJhY3Rpb25VVlc9dmVjMyhyZWZyYWN0aW9uTWF0cml4Kih2aWV3KnZlYzQodlBvc2l0aW9uVytyZWZyYWN0aW9uVmVjdG9yKnZSZWZyYWN0aW9uSW5mb3MueiwxLjApKSk7dmVjMiByZWZyYWN0aW9uQ29vcmRzPXZSZWZyYWN0aW9uVVZXLnh5L3ZSZWZyYWN0aW9uVVZXLno7cmVmcmFjdGlvbkNvb3Jkcy55PTEuMC1yZWZyYWN0aW9uQ29vcmRzLnk7cmVmcmFjdGlvbkNvbG9yPXRleHR1cmUyRChyZWZyYWN0aW9uMkRTYW1wbGVyLHJlZnJhY3Rpb25Db29yZHMpO1xuI2VuZGlmXG4jaWZkZWYgUkdCRFJFRlJBQ1RJT05cbnJlZnJhY3Rpb25Db2xvci5yZ2I9ZnJvbVJHQkQocmVmcmFjdGlvbkNvbG9yKTtcbiNlbmRpZlxuI2lmZGVmIElTX1JFRlJBQ1RJT05fTElORUFSXG5yZWZyYWN0aW9uQ29sb3IucmdiPXRvR2FtbWFTcGFjZShyZWZyYWN0aW9uQ29sb3IucmdiKTtcbiNlbmRpZlxucmVmcmFjdGlvbkNvbG9yLnJnYio9dlJlZnJhY3Rpb25JbmZvcy54O1xuI2VuZGlmXG52ZWM0IHJlZmxlY3Rpb25Db2xvcj12ZWM0KDAuLDAuLDAuLDEuKTtcbiNpZmRlZiBSRUZMRUNUSU9OXG52ZWMzIHZSZWZsZWN0aW9uVVZXPWNvbXB1dGVSZWZsZWN0aW9uQ29vcmRzKHZlYzQodlBvc2l0aW9uVywxLjApLG5vcm1hbFcpO1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG52UmVmbGVjdGlvblVWVy56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuI2lmZGVmIFJPVUdITkVTU1xuZmxvYXQgYmlhcz12UmVmbGVjdGlvbkluZm9zLnk7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG4jaWZkZWYgU1BFQ1VMQVJcbiNpZmRlZiBHTE9TU0lORVNTXG5iaWFzKj0oMS4wLXNwZWN1bGFyTWFwQ29sb3IuYSk7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5yZWZsZWN0aW9uQ29sb3I9dGV4dHVyZUN1YmUocmVmbGVjdGlvbkN1YmVTYW1wbGVyLHZSZWZsZWN0aW9uVVZXLGJpYXMpO1xuI2Vsc2VcbnJlZmxlY3Rpb25Db2xvcj10ZXh0dXJlQ3ViZShyZWZsZWN0aW9uQ3ViZVNhbXBsZXIsdlJlZmxlY3Rpb25VVlcpO1xuI2VuZGlmXG4jZWxzZVxudmVjMiBjb29yZHM9dlJlZmxlY3Rpb25VVlcueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5jb29yZHMvPXZSZWZsZWN0aW9uVVZXLno7XG4jZW5kaWZcbmNvb3Jkcy55PTEuMC1jb29yZHMueTtyZWZsZWN0aW9uQ29sb3I9dGV4dHVyZTJEKHJlZmxlY3Rpb24yRFNhbXBsZXIsY29vcmRzKTtcbiNlbmRpZlxuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5yZWZsZWN0aW9uQ29sb3IucmdiPWZyb21SR0JEKHJlZmxlY3Rpb25Db2xvcik7XG4jZW5kaWZcbiNpZmRlZiBJU19SRUZMRUNUSU9OX0xJTkVBUlxucmVmbGVjdGlvbkNvbG9yLnJnYj10b0dhbW1hU3BhY2UocmVmbGVjdGlvbkNvbG9yLnJnYik7XG4jZW5kaWZcbnJlZmxlY3Rpb25Db2xvci5yZ2IqPXZSZWZsZWN0aW9uSW5mb3MueDtcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTFxuZmxvYXQgcmVmbGVjdGlvbkZyZXNuZWxUZXJtPWNvbXB1dGVGcmVzbmVsVGVybSh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHJlZmxlY3Rpb25SaWdodENvbG9yLmEscmVmbGVjdGlvbkxlZnRDb2xvci5hKTtcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTEZST01TUEVDVUxBUlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVmbGVjdGlvbkNvbG9yLnJnYio9c3BlY3VsYXJDb2xvci5yZ2IqKDEuMC1yZWZsZWN0aW9uRnJlc25lbFRlcm0pK3JlZmxlY3Rpb25GcmVzbmVsVGVybSpyZWZsZWN0aW9uUmlnaHRDb2xvci5yZ2I7XG4jZWxzZVxucmVmbGVjdGlvbkNvbG9yLnJnYio9cmVmbGVjdGlvbkxlZnRDb2xvci5yZ2IqKDEuMC1yZWZsZWN0aW9uRnJlc25lbFRlcm0pK3JlZmxlY3Rpb25GcmVzbmVsVGVybSpyZWZsZWN0aW9uUmlnaHRDb2xvci5yZ2I7XG4jZW5kaWZcbiNlbHNlXG5yZWZsZWN0aW9uQ29sb3IucmdiKj1yZWZsZWN0aW9uTGVmdENvbG9yLnJnYiooMS4wLXJlZmxlY3Rpb25GcmVzbmVsVGVybSkrcmVmbGVjdGlvbkZyZXNuZWxUZXJtKnJlZmxlY3Rpb25SaWdodENvbG9yLnJnYjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZSQUNUSU9ORlJFU05FTFxuZmxvYXQgcmVmcmFjdGlvbkZyZXNuZWxUZXJtPWNvbXB1dGVGcmVzbmVsVGVybSh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHJlZnJhY3Rpb25SaWdodENvbG9yLmEscmVmcmFjdGlvbkxlZnRDb2xvci5hKTtyZWZyYWN0aW9uQ29sb3IucmdiKj1yZWZyYWN0aW9uTGVmdENvbG9yLnJnYiooMS4wLXJlZnJhY3Rpb25GcmVzbmVsVGVybSkrcmVmcmFjdGlvbkZyZXNuZWxUZXJtKnJlZnJhY3Rpb25SaWdodENvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlcbnZlYzQgb3BhY2l0eU1hcD10ZXh0dXJlMkQob3BhY2l0eVNhbXBsZXIsdk9wYWNpdHlVVit1dk9mZnNldCk7XG4jaWZkZWYgT1BBQ0lUWVJHQlxub3BhY2l0eU1hcC5yZ2I9b3BhY2l0eU1hcC5yZ2IqdmVjMygwLjMsMC41OSwwLjExKTthbHBoYSo9KG9wYWNpdHlNYXAueCtvcGFjaXR5TWFwLnkrb3BhY2l0eU1hcC56KSogdk9wYWNpdHlJbmZvcy55O1xuI2Vsc2VcbmFscGhhKj1vcGFjaXR5TWFwLmEqdk9wYWNpdHlJbmZvcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWEFMUEhBKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbmFscGhhKj12Q29sb3IuYTtcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlGUkVTTkVMXG5mbG9hdCBvcGFjaXR5RnJlc25lbFRlcm09Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsb3BhY2l0eVBhcnRzLnosb3BhY2l0eVBhcnRzLncpO2FscGhhKz1vcGFjaXR5UGFydHMueCooMS4wLW9wYWNpdHlGcmVzbmVsVGVybSkrb3BhY2l0eUZyZXNuZWxUZXJtKm9wYWNpdHlQYXJ0cy55O1xuI2VuZGlmXG4jaWZkZWYgQUxQSEFURVNUXG4jaWZkZWYgQUxQSEFURVNUX0FGVEVSQUxMQUxQSEFDT01QVVRBVElPTlNcbmlmIChhbHBoYTxhbHBoYUN1dE9mZilcbmRpc2NhcmQ7XG4jZW5kaWZcbiNpZm5kZWYgQUxQSEFCTEVORFxuYWxwaGE9MS4wO1xuI2VuZGlmXG4jZW5kaWZcbnZlYzMgZW1pc3NpdmVDb2xvcj12RW1pc3NpdmVDb2xvcjtcbiNpZmRlZiBFTUlTU0lWRVxuZW1pc3NpdmVDb2xvcis9dGV4dHVyZTJEKGVtaXNzaXZlU2FtcGxlcix2RW1pc3NpdmVVVit1dk9mZnNldCkucmdiKnZFbWlzc2l2ZUluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBFTUlTU0lWRUZSRVNORUxcbmZsb2F0IGVtaXNzaXZlRnJlc25lbFRlcm09Y29tcHV0ZUZyZXNuZWxUZXJtKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsZW1pc3NpdmVSaWdodENvbG9yLmEsZW1pc3NpdmVMZWZ0Q29sb3IuYSk7ZW1pc3NpdmVDb2xvcio9ZW1pc3NpdmVMZWZ0Q29sb3IucmdiKigxLjAtZW1pc3NpdmVGcmVzbmVsVGVybSkrZW1pc3NpdmVGcmVzbmVsVGVybSplbWlzc2l2ZVJpZ2h0Q29sb3IucmdiO1xuI2VuZGlmXG4jaWZkZWYgRElGRlVTRUZSRVNORUxcbmZsb2F0IGRpZmZ1c2VGcmVzbmVsVGVybT1jb21wdXRlRnJlc25lbFRlcm0odmlld0RpcmVjdGlvblcsbm9ybWFsVyxkaWZmdXNlUmlnaHRDb2xvci5hLGRpZmZ1c2VMZWZ0Q29sb3IuYSk7ZGlmZnVzZUJhc2UqPWRpZmZ1c2VMZWZ0Q29sb3IucmdiKigxLjAtZGlmZnVzZUZyZXNuZWxUZXJtKStkaWZmdXNlRnJlc25lbFRlcm0qZGlmZnVzZVJpZ2h0Q29sb3IucmdiO1xuI2VuZGlmXG4jaWZkZWYgRU1JU1NJVkVBU0lMTFVNSU5BVElPTlxudmVjMyBmaW5hbERpZmZ1c2U9Y2xhbXAoZGlmZnVzZUJhc2UqZGlmZnVzZUNvbG9yK3ZBbWJpZW50Q29sb3IsMC4wLDEuMCkqYmFzZUNvbG9yLnJnYjtcbiNlbHNlXG4jaWZkZWYgTElOS0VNSVNTSVZFV0lUSERJRkZVU0VcbnZlYzMgZmluYWxEaWZmdXNlPWNsYW1wKChkaWZmdXNlQmFzZStlbWlzc2l2ZUNvbG9yKSpkaWZmdXNlQ29sb3IrdkFtYmllbnRDb2xvciwwLjAsMS4wKSpiYXNlQ29sb3IucmdiO1xuI2Vsc2VcbnZlYzMgZmluYWxEaWZmdXNlPWNsYW1wKGRpZmZ1c2VCYXNlKmRpZmZ1c2VDb2xvcitlbWlzc2l2ZUNvbG9yK3ZBbWJpZW50Q29sb3IsMC4wLDEuMCkqYmFzZUNvbG9yLnJnYjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52ZWMzIGZpbmFsU3BlY3VsYXI9c3BlY3VsYXJCYXNlKnNwZWN1bGFyQ29sb3I7XG4jaWZkZWYgU1BFQ1VMQVJPVkVSQUxQSEFcbmFscGhhPWNsYW1wKGFscGhhK2RvdChmaW5hbFNwZWN1bGFyLHZlYzMoMC4zLDAuNTksMC4xMSkpLDAuLDEuKTtcbiNlbmRpZlxuI2Vsc2VcbnZlYzMgZmluYWxTcGVjdWxhcj12ZWMzKDAuMCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OT1ZFUkFMUEhBXG5hbHBoYT1jbGFtcChhbHBoYStkb3QocmVmbGVjdGlvbkNvbG9yLnJnYix2ZWMzKDAuMywwLjU5LDAuMTEpKSwwLiwxLik7XG4jZW5kaWZcbiNpZmRlZiBFTUlTU0lWRUFTSUxMVU1JTkFUSU9OXG52ZWM0IGNvbG9yPXZlYzQoY2xhbXAoZmluYWxEaWZmdXNlKmJhc2VBbWJpZW50Q29sb3IrZmluYWxTcGVjdWxhcityZWZsZWN0aW9uQ29sb3IucmdiK2VtaXNzaXZlQ29sb3IrcmVmcmFjdGlvbkNvbG9yLnJnYiwwLjAsMS4wKSxhbHBoYSk7XG4jZWxzZVxudmVjNCBjb2xvcj12ZWM0KGZpbmFsRGlmZnVzZSpiYXNlQW1iaWVudENvbG9yK2ZpbmFsU3BlY3VsYXIrcmVmbGVjdGlvbkNvbG9yLnJnYityZWZyYWN0aW9uQ29sb3IucmdiLGFscGhhKTtcbiNlbmRpZlxuI2lmZGVmIExJR0hUTUFQXG4jaWZuZGVmIExJR0hUTUFQRVhDTFVERURcbiNpZmRlZiBVU0VMSUdIVE1BUEFTU0hBRE9XTUFQXG5jb2xvci5yZ2IqPWxpZ2h0bWFwQ29sb3IucmdiO1xuI2Vsc2VcbmNvbG9yLnJnYis9bGlnaHRtYXBDb2xvci5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRk9HXG5jb2xvci5yZ2I9bWF4KGNvbG9yLnJnYiwwLik7XG4jaW5jbHVkZTxsb2dEZXB0aEZyYWdtZW50PlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnQ+XG4jaWZkZWYgSU1BR0VQUk9DRVNTSU5HUE9TVFBST0NFU1NcbmNvbG9yLnJnYj10b0xpbmVhclNwYWNlKGNvbG9yLnJnYik7XG4jZWxzZVxuI2lmZGVmIElNQUdFUFJPQ0VTU0lOR1xuY29sb3IucmdiPXRvTGluZWFyU3BhY2UoY29sb3IucmdiKTtjb2xvcj1hcHBseUltYWdlUHJvY2Vzc2luZyhjb2xvcik7XG4jZW5kaWZcbiNlbmRpZlxuY29sb3IuYSo9dmlzaWJpbGl0eTtcbiNpZmRlZiBQUkVNVUxUSVBMWUFMUEhBXG5jb2xvci5yZ2IqPWNvbG9yLmE7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GUkFHQ09MT1JcbiNpZmRlZiBQUkVQQVNTXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjBcbmZsb2F0IHdyaXRlR2VvbWV0cnlJbmZvPWNvbG9yLmE+MC40ID8gMS4wIDogMC4wO1xuI2lmZGVmIFBSRVBBU1NfQ09MT1JcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfQ09MT1JfSU5ERVhdPWNvbG9yOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfUE9TSVRJT05cbmdsX0ZyYWdEYXRhW1BSRVBBU1NfUE9TSVRJT05fSU5ERVhdPXZlYzQodlBvc2l0aW9uVyx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OXG5nbF9GcmFnRGF0YVtQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OX0lOREVYXT12ZWM0KHZQb3NpdGlvbix3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpXG52ZWMyIGE9KHZDdXJyZW50UG9zaXRpb24ueHkvdkN1cnJlbnRQb3NpdGlvbi53KSowLjUrMC41O3ZlYzIgYj0odlByZXZpb3VzUG9zaXRpb24ueHkvdlByZXZpb3VzUG9zaXRpb24udykqMC41KzAuNTt2ZWMyIHZlbG9jaXR5PWFicyhhLWIpO3ZlbG9jaXR5PXZlYzIocG93KHZlbG9jaXR5LngsMS4wLzMuMCkscG93KHZlbG9jaXR5LnksMS4wLzMuMCkpKnNpZ24oYS1iKSowLjUrMC41O2dsX0ZyYWdEYXRhW1BSRVBBU1NfVkVMT0NJVFlfSU5ERVhdPXZlYzQodmVsb2NpdHksMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbGlmIGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpXG52ZWMyIHZlbG9jaXR5PXZlYzIoMC41KSooKHZQcmV2aW91c1Bvc2l0aW9uLnh5L3ZQcmV2aW91c1Bvc2l0aW9uLncpLSh2Q3VycmVudFBvc2l0aW9uLnh5L3ZDdXJyZW50UG9zaXRpb24udykpO2dsX0ZyYWdEYXRhW1BSRVBBU1NfVkVMT0NJVFlfTElORUFSX0lOREVYXT12ZWM0KHZlbG9jaXR5LDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0lSUkFESUFOQ0VcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfSVJSQURJQU5DRV9JTkRFWF09dmVjNCgwLjAsMC4wLDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7IFxuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19ERVBUSFxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19ERVBUSF9JTkRFWF09dmVjNCh2Vmlld1Bvcy56LDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfU0NSRUVOU1BBQ0VfREVQVEhcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfU0NSRUVOU1BBQ0VfREVQVEhfSU5ERVhdPXZlYzQoZ2xfRnJhZ0Nvb3JkLnosMC4wLDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX05PUk1BTElaRURfVklFV19ERVBUSFxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhfSU5ERVhdPXZlYzQodk5vcm1WaWV3RGVwdGgsMC4wLDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX05PUk1BTFxuI2lmZGVmIFBSRVBBU1NfTk9STUFMX1dPUkxEU1BBQ0VcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfTk9STUFMX0lOREVYXT12ZWM0KG5vcm1hbFcsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2Vsc2VcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfTk9STUFMX0lOREVYXT12ZWM0KG5vcm1hbGl6ZSgodmlldyp2ZWM0KG5vcm1hbFcsMC4wKSkucmdiKSx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfV09STERfTk9STUFMXG5nbF9GcmFnRGF0YVtQUkVQQVNTX1dPUkxEX05PUk1BTF9JTkRFWF09dmVjNChub3JtYWxXKjAuNSswLjUsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19BTEJFRE9cbmdsX0ZyYWdEYXRhW1BSRVBBU1NfQUxCRURPX0lOREVYXT12ZWM0KGJhc2VDb2xvci5yZ2Isd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19BTEJFRE9fU1FSVFxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19BTEJFRE9fU1FSVF9JTkRFWF09dmVjNChzcXJ0KGJhc2VDb2xvci5yZ2IpLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfUkVGTEVDVElWSVRZXG4jaWYgZGVmaW5lZChTUEVDVUxBUilcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfUkVGTEVDVElWSVRZX0lOREVYXT12ZWM0KHRvTGluZWFyU3BhY2Uoc3BlY3VsYXJNYXBDb2xvcikpKndyaXRlR2VvbWV0cnlJbmZvOyBcbiNlbHNlXG5nbF9GcmFnRGF0YVtQUkVQQVNTX1JFRkxFQ1RJVklUWV9JTkRFWF09dmVjNCh0b0xpbmVhclNwYWNlKHNwZWN1bGFyQ29sb3IpLDEuMCkqd3JpdGVHZW9tZXRyeUluZm87XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChQUkVQQVNTKSB8fCBkZWZpbmVkKFdFQkdMMilcbmdsX0ZyYWdDb2xvcj1jb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8b2l0RnJhZ21lbnQ+XG4jaWYgT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZXG5pZiAoZnJhZ0RlcHRoPT1uZWFyZXN0RGVwdGgpIHtmcm9udENvbG9yLnJnYis9Y29sb3IucmdiKmNvbG9yLmEqYWxwaGFNdWx0aXBsaWVyO2Zyb250Q29sb3IuYT0xLjAtYWxwaGFNdWx0aXBsaWVyKigxLjAtY29sb3IuYSk7fSBlbHNlIHtiYWNrQ29sb3IrPWNvbG9yO31cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==