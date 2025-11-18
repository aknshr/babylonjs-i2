"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["materials_dist_normal_normalMaterial_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/depthPrePass.js":
/*!***********************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/depthPrePass.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPrePass: () => (/* binding */ depthPrePass)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);return;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const depthPrePass = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowsVertex.js":
/*!************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowsVertex.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsVertex: () => (/* binding */ shadowsVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowsVertex";
const shader = `#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowsVertex = { name, shader };


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

/***/ "../materials/dist/normal/normal.fragment.js":
/*!***************************************************!*\
  !*** ../materials/dist/normal/normal.fragment.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalPixelShader: () => (/* binding */ normalPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var core_Shaders_ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Shaders/ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var core_Shaders_ShadersInclude_lightFragmentDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Shaders/ShadersInclude/lightFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Shaders/ShadersInclude/lightUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_lightsFragmentFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Shaders/ShadersInclude/lightsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/lightsFragmentFunctions.js");
/* harmony import */ var core_Shaders_ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Shaders/ShadersInclude/shadowsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var core_Shaders_ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Shaders/ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Shaders/ShadersInclude/fogFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Shaders/ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var core_Shaders_ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/Shaders/ShadersInclude/depthPrePass */ "../core/dist/Shaders/ShadersInclude/depthPrePass.js");
/* harmony import */ var core_Shaders_ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Shaders/ShadersInclude/lightFragment */ "../core/dist/Shaders/ShadersInclude/lightFragment.js");
/* harmony import */ var core_Shaders_ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Shaders/ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var core_Shaders_ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core/Shaders/ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* harmony import */ var core_Shaders_ShadersInclude_imageProcessingCompatibility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core/Shaders/ShadersInclude/imageProcessingCompatibility */ "../core/dist/Shaders/ShadersInclude/imageProcessingCompatibility.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.















const name = "normalPixelShader";
const shader = `precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef LIGHTING
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef NORMAL
baseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef LIGHTING
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse= baseColor.rgb;
#endif
vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const normalPixelShader = { name, shader };


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

/***/ "../materials/dist/normal/normal.vertex.js":
/*!*************************************************!*\
  !*** ../materials/dist/normal/normal.vertex.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalVertexShader: () => (/* binding */ normalVertexShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var core_Shaders_ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Shaders/ShadersInclude/bonesDeclaration */ "../core/dist/Shaders/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Shaders/ShadersInclude/instancesDeclaration */ "../core/dist/Shaders/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Shaders/ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Shaders/ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Shaders/ShadersInclude/fogVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_lightFragmentDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Shaders/ShadersInclude/lightFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Shaders/ShadersInclude/lightUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var core_Shaders_ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Shaders/ShadersInclude/instancesVertex */ "../core/dist/Shaders/ShadersInclude/instancesVertex.js");
/* harmony import */ var core_Shaders_ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/Shaders/ShadersInclude/bonesVertex */ "../core/dist/Shaders/ShadersInclude/bonesVertex.js");
/* harmony import */ var core_Shaders_ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Shaders/ShadersInclude/bakedVertexAnimation */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var core_Shaders_ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Shaders/ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var core_Shaders_ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core/Shaders/ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* harmony import */ var core_Shaders_ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core/Shaders/ShadersInclude/fogVertex */ "../core/dist/Shaders/ShadersInclude/fogVertex.js");
/* harmony import */ var core_Shaders_ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core/Shaders/ShadersInclude/shadowsVertex */ "../core/dist/Shaders/ShadersInclude/shadowsVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.
















const name = "normalVertexShader";
const shader = `precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const normalVertexShader = { name, shader };


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

/***/ "../materials/dist/normal/normalMaterial.js":
/*!**************************************************!*\
  !*** ../materials/dist/normal/normalMaterial.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalMaterial: () => (/* binding */ NormalMaterial)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Materials/materialDefines */ "../core/dist/Materials/materialDefines.js");
/* harmony import */ var core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Materials/pushMaterial */ "../core/dist/Materials/pushMaterial.js");
/* harmony import */ var core_Materials_materialFlags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Materials/materialFlags */ "../core/dist/Materials/materialFlags.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_scene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/scene */ "../core/dist/scene.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _normal_fragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./normal.fragment */ "../materials/dist/normal/normal.fragment.js");
/* harmony import */ var _normal_vertex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./normal.vertex */ "../materials/dist/normal/normal.vertex.js");
/* harmony import */ var core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Materials/effectFallbacks */ "../core/dist/Materials/effectFallbacks.js");
/* harmony import */ var core_Materials_clipPlaneMaterialHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Materials/clipPlaneMaterialHelper */ "../core/dist/Materials/clipPlaneMaterialHelper.js");
/* harmony import */ var core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core/Materials/materialHelper.functions */ "../core/dist/Materials/materialHelper.functions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");
















class NormalMaterialDefines extends core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_3__.MaterialDefines {
    constructor() {
        super();
        this.DIFFUSE = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.ALPHATEST = false;
        this.DEPTHPREPASS = false;
        this.POINTSIZE = false;
        this.FOG = false;
        this.LIGHT0 = false;
        this.LIGHT1 = false;
        this.LIGHT2 = false;
        this.LIGHT3 = false;
        this.SPOTLIGHT0 = false;
        this.SPOTLIGHT1 = false;
        this.SPOTLIGHT2 = false;
        this.SPOTLIGHT3 = false;
        this.HEMILIGHT0 = false;
        this.HEMILIGHT1 = false;
        this.HEMILIGHT2 = false;
        this.HEMILIGHT3 = false;
        this.DIRLIGHT0 = false;
        this.DIRLIGHT1 = false;
        this.DIRLIGHT2 = false;
        this.DIRLIGHT3 = false;
        this.POINTLIGHT0 = false;
        this.POINTLIGHT1 = false;
        this.POINTLIGHT2 = false;
        this.POINTLIGHT3 = false;
        this.SHADOW0 = false;
        this.SHADOW1 = false;
        this.SHADOW2 = false;
        this.SHADOW3 = false;
        this.SHADOWS = false;
        this.SHADOWESM0 = false;
        this.SHADOWESM1 = false;
        this.SHADOWESM2 = false;
        this.SHADOWESM3 = false;
        this.SHADOWPOISSON0 = false;
        this.SHADOWPOISSON1 = false;
        this.SHADOWPOISSON2 = false;
        this.SHADOWPOISSON3 = false;
        this.SHADOWPCF0 = false;
        this.SHADOWPCF1 = false;
        this.SHADOWPCF2 = false;
        this.SHADOWPCF3 = false;
        this.SHADOWPCSS0 = false;
        this.SHADOWPCSS1 = false;
        this.SHADOWPCSS2 = false;
        this.SHADOWPCSS3 = false;
        this.NORMAL = false;
        this.UV1 = false;
        this.UV2 = false;
        this.NUM_BONE_INFLUENCERS = 0;
        this.BonesPerMesh = 0;
        this.INSTANCES = false;
        this.THIN_INSTANCES = false;
        this.LIGHTING = false;
        this.IMAGEPROCESSINGPOSTPROCESS = false;
        this.SKIPFINALCOLORCLAMP = false;
        this.LOGARITHMICDEPTH = false;
        this.AREALIGHTSUPPORTED = true;
        this.AREALIGHTNOROUGHTNESS = true;
        this.rebuild();
    }
}
class NormalMaterial extends core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_4__.PushMaterial {
    constructor(name, scene) {
        super(name, scene);
        this.diffuseColor = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3(1, 1, 1);
        this._disableLighting = false;
        this._maxSimultaneousLights = 4;
    }
    needAlphaBlending() {
        return this.alpha < 1.0;
    }
    needAlphaBlendingForMesh(mesh) {
        return this.needAlphaBlending() || mesh.visibility < 1.0;
    }
    needAlphaTesting() {
        return false;
    }
    getAlphaTestTexture() {
        return null;
    }
    // Methods
    isReadyForSubMesh(mesh, subMesh, useInstances) {
        const drawWrapper = subMesh._drawWrapper;
        if (this.isFrozen) {
            if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            subMesh.materialDefines = new NormalMaterialDefines();
        }
        const defines = subMesh.materialDefines;
        const scene = this.getScene();
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        const engine = scene.getEngine();
        // Textures
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            if (scene.texturesEnabled) {
                if (this._diffuseTexture && core_Materials_materialFlags__WEBPACK_IMPORTED_MODULE_5__.MaterialFlags.DiffuseTextureEnabled) {
                    if (!this._diffuseTexture.isReady()) {
                        return false;
                    }
                    else {
                        defines._needUVs = true;
                        defines.DIFFUSE = true;
                    }
                }
            }
        }
        // Misc.
        (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(mesh), defines, undefined, undefined, undefined, this._isVertexOutputInvariant);
        // Lights
        defines._needNormals = true;
        (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
        // Values that need to be evaluated on every frame
        (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false, null, subMesh.getRenderingMesh().hasThinInstances);
        defines.LIGHTING = !this._disableLighting;
        // Attribs
        (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareDefinesForAttributes)(mesh, defines, true, true);
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            scene.resetCachedMaterial();
            // Fallbacks
            const fallbacks = new core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_11__.EffectFallbacks();
            if (defines.FOG) {
                fallbacks.addFallback(1, "FOG");
            }
            (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.HandleFallbacksForShadows)(defines, fallbacks);
            if (defines.NUM_BONE_INFLUENCERS > 0) {
                fallbacks.addCPUSkinningFallback(0, mesh);
            }
            defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
            //Attributes
            const attribs = [core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__.VertexBuffer.PositionKind];
            if (defines.NORMAL) {
                attribs.push(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__.VertexBuffer.NormalKind);
            }
            if (defines.UV1) {
                attribs.push(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__.VertexBuffer.UVKind);
            }
            if (defines.UV2) {
                attribs.push(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_6__.VertexBuffer.UV2Kind);
            }
            (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
            (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareAttributesForInstances)(attribs, defines);
            const shaderName = "normal";
            const join = defines.toString();
            const uniforms = [
                "world",
                "view",
                "viewProjection",
                "vEyePosition",
                "vLightsType",
                "vDiffuseColor",
                "vFogInfos",
                "vFogColor",
                "pointSize",
                "vDiffuseInfos",
                "mBones",
                "diffuseMatrix",
                "logarithmicDepthConstant",
            ];
            const samplers = ["diffuseSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            const uniformBuffers = [];
            (0,core_Materials_clipPlaneMaterialHelper__WEBPACK_IMPORTED_MODULE_12__.AddClipPlaneUniforms)(uniforms);
            (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.PrepareUniformsAndSamplersList)({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: defines,
                maxSimultaneousLights: 4,
            });
            subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: join,
                fallbacks: fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: { maxSimultaneousLights: 4 },
            }, engine), defines, this._materialContext);
        }
        // Check if Area Lights have LTC texture.
        if (defines["AREALIGHTUSED"]) {
            for (let index = 0; index < mesh.lightSources.length; index++) {
                if (!mesh.lightSources[index]._isReady()) {
                    return false;
                }
            }
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        drawWrapper._wasPreviouslyReady = true;
        drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
        return true;
    }
    bindForSubMesh(world, mesh, subMesh) {
        const scene = this.getScene();
        const defines = subMesh.materialDefines;
        if (!defines) {
            return;
        }
        const effect = subMesh.effect;
        if (!effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices
        this.bindOnlyWorldMatrix(world);
        this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
        // Bones
        (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.BindBonesParameters)(mesh, this._activeEffect);
        if (this._mustRebind(scene, effect, subMesh)) {
            // Textures
            if (this.diffuseTexture && core_Materials_materialFlags__WEBPACK_IMPORTED_MODULE_5__.MaterialFlags.DiffuseTextureEnabled) {
                this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture);
                this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level);
                this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix());
            }
            // Clip plane
            (0,core_Materials_clipPlaneMaterialHelper__WEBPACK_IMPORTED_MODULE_12__.BindClipPlane)(effect, this, scene);
            // Point size
            if (this.pointsCloud) {
                this._activeEffect.setFloat("pointSize", this.pointSize);
            }
            // Log. depth
            if (this._useLogarithmicDepth) {
                (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.BindLogDepth)(defines, effect, scene);
            }
            scene.bindEyePosition(effect);
        }
        this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
        // Lights
        if (scene.lightsEnabled && !this.disableLighting) {
            (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.BindLights)(scene, mesh, this._activeEffect, defines);
        }
        // View
        if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== core_scene__WEBPACK_IMPORTED_MODULE_7__.Scene.FOGMODE_NONE) {
            this._activeEffect.setMatrix("view", scene.getViewMatrix());
        }
        // Fog
        (0,core_Materials_materialHelper_functions__WEBPACK_IMPORTED_MODULE_13__.BindFogParameters)(scene, mesh, this._activeEffect);
        this._afterBind(mesh, this._activeEffect, subMesh);
    }
    getAnimatables() {
        const results = [];
        if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
            results.push(this.diffuseTexture);
        }
        return results;
    }
    getActiveTextures() {
        const activeTextures = super.getActiveTextures();
        if (this._diffuseTexture) {
            activeTextures.push(this._diffuseTexture);
        }
        return activeTextures;
    }
    hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        if (this.diffuseTexture === texture) {
            return true;
        }
        return false;
    }
    dispose(forceDisposeEffect) {
        if (this.diffuseTexture) {
            this.diffuseTexture.dispose();
        }
        super.dispose(forceDisposeEffect);
    }
    clone(name) {
        return core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Clone(() => new NormalMaterial(name, this.getScene()), this);
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.customType = "BABYLON.NormalMaterial";
        return serializationObject;
    }
    getClassName() {
        return "NormalMaterial";
    }
    // Statics
    static Parse(source, scene, rootUrl) {
        return core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(() => new NormalMaterial(source.name, scene), source, scene, rootUrl);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
], NormalMaterial.prototype, "_diffuseTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
], NormalMaterial.prototype, "diffuseTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
], NormalMaterial.prototype, "diffuseColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
], NormalMaterial.prototype, "_disableLighting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
], NormalMaterial.prototype, "disableLighting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
], NormalMaterial.prototype, "_maxSimultaneousLights", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
], NormalMaterial.prototype, "maxSimultaneousLights", void 0);
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_8__.RegisterClass)("BABYLON.NormalMaterial", NormalMaterial);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWxzX2Rpc3Rfbm9ybWFsX25vcm1hbE1hdGVyaWFsX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBbUVBO0FBQ0E7QUFuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBbUJBO0FBQ0E7QUFiQTtBQUdBO0FBS0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNVVBO0FBREE7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUVBO0FBREE7QUFDQTtBQStUQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbWF0ZXJpYWxzL3NyYy9ub3JtYWwvbm9ybWFsLmZyYWdtZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbWF0ZXJpYWxzL3NyYy9ub3JtYWwvbm9ybWFsLnZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L21hdGVyaWFscy9zcmMvbm9ybWFsL25vcm1hbE1hdGVyaWFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJkZXB0aFByZVBhc3NcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgREVQVEhQUkVQQVNTXG5nbF9GcmFnQ29sb3I9dmVjNCgwLiwwLiwwLiwxLjApO3JldHVybjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZXB0aFByZVBhc3MgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2x0Y0hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9jbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodHNGcmFnbWVudEZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBsaWdodGluZ0luZm9cbnt2ZWMzIGRpZmZ1c2U7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52ZWMzIHNwZWN1bGFyO1xuI2VuZGlmXG4jaWZkZWYgTkRPVExcbmZsb2F0IG5kbDtcbiNlbmRpZlxufTtsaWdodGluZ0luZm8gY29tcHV0ZUxpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzQgbGlnaHREYXRhLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCByYW5nZSxmbG9hdCBnbG9zc2luZXNzKSB7bGlnaHRpbmdJbmZvIHJlc3VsdDt2ZWMzIGxpZ2h0VmVjdG9yVztmbG9hdCBhdHRlbnVhdGlvbj0xLjA7aWYgKGxpZ2h0RGF0YS53PT0wLilcbnt2ZWMzIGRpcmVjdGlvbj1saWdodERhdGEueHl6LXZQb3NpdGlvblc7YXR0ZW51YXRpb249bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7bGlnaHRWZWN0b3JXPW5vcm1hbGl6ZShkaXJlY3Rpb24pO31cbmVsc2VcbntsaWdodFZlY3Rvclc9bm9ybWFsaXplKC1saWdodERhdGEueHl6KTt9XG5mbG9hdCBuZGw9bWF4KDAuLGRvdCh2Tm9ybWFsLGxpZ2h0VmVjdG9yVykpO1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bmRsKmRpZmZ1c2VDb2xvciphdHRlbnVhdGlvbjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgYW5nbGVXPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodFZlY3RvclcpO2Zsb2F0IHNwZWNDb21wPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvciphdHRlbnVhdGlvbjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbG9hdCBnZXRBdHRlbnVhdGlvbihmbG9hdCBjb3NBbmdsZSxmbG9hdCBleHBvbmVudCkge3JldHVybiBtYXgoMC4scG93KGNvc0FuZ2xlLGV4cG9uZW50KSk7fVxuZmxvYXQgZ2V0SUVTQXR0ZW51YXRpb24oZmxvYXQgY29zQW5nbGUsc2FtcGxlcjJEIGllc0xpZ2h0U2FtcGxlcikge2Zsb2F0IGFuZ2xlPWFjb3MoY29zQW5nbGUpL1BJO3JldHVybiB0ZXh0dXJlMkQoaWVzTGlnaHRTYW1wbGVyLHZlYzIoYW5nbGUsMC4pKS5yO31cbmxpZ2h0aW5nSW5mbyBiYXNpY1Nwb3RMaWdodGluZyh2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgbGlnaHRWZWN0b3JXLHZlYzMgdk5vcm1hbCxmbG9hdCBhdHRlbnVhdGlvbix2ZWMzIGRpZmZ1c2VDb2xvcix2ZWMzIHNwZWN1bGFyQ29sb3IsZmxvYXQgZ2xvc3NpbmVzcykge2xpZ2h0aW5nSW5mbyByZXN1bHQ7IFxuZmxvYXQgbmRsPW1heCgwLixkb3Qodk5vcm1hbCxsaWdodFZlY3RvclcpKTtcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD1uZGw7XG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlPW5kbCpkaWZmdXNlQ29sb3IqYXR0ZW51YXRpb247XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52ZWMzIGFuZ2xlVz1ub3JtYWxpemUodmlld0RpcmVjdGlvblcrbGlnaHRWZWN0b3JXKTtmbG9hdCBzcGVjQ29tcD1tYXgoMC4sZG90KHZOb3JtYWwsYW5nbGVXKSk7c3BlY0NvbXA9cG93KHNwZWNDb21wLG1heCgxLixnbG9zc2luZXNzKSk7cmVzdWx0LnNwZWN1bGFyPXNwZWNDb21wKnNwZWN1bGFyQ29sb3IqYXR0ZW51YXRpb247XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxubGlnaHRpbmdJbmZvIGNvbXB1dGVJRVNTcG90TGlnaHRpbmcodmVjMyB2aWV3RGlyZWN0aW9uVyx2ZWMzIHZOb3JtYWwsdmVjNCBsaWdodERhdGEsdmVjNCBsaWdodERpcmVjdGlvbix2ZWMzIGRpZmZ1c2VDb2xvcix2ZWMzIHNwZWN1bGFyQ29sb3IsZmxvYXQgcmFuZ2UsZmxvYXQgZ2xvc3NpbmVzcyxzYW1wbGVyMkQgaWVzTGlnaHRTYW1wbGVyKSB7IFxudmVjMyBkaXJlY3Rpb249bGlnaHREYXRhLnh5ei12UG9zaXRpb25XO3ZlYzMgbGlnaHRWZWN0b3JXPW5vcm1hbGl6ZShkaXJlY3Rpb24pO2Zsb2F0IGF0dGVudWF0aW9uPW1heCgwLiwxLjAtbGVuZ3RoKGRpcmVjdGlvbikvcmFuZ2UpO2Zsb2F0IGRvdFByb2R1Y3Q9ZG90KGxpZ2h0RGlyZWN0aW9uLnh5eiwtbGlnaHRWZWN0b3JXKTtmbG9hdCBjb3NBbmdsZT1tYXgoMC4sZG90UHJvZHVjdCk7aWYgKGNvc0FuZ2xlPj1saWdodERpcmVjdGlvbi53KVxueyBcbmF0dGVudWF0aW9uKj1nZXRJRVNBdHRlbnVhdGlvbihkb3RQcm9kdWN0LGllc0xpZ2h0U2FtcGxlcik7cmV0dXJuIGJhc2ljU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLGxpZ2h0VmVjdG9yVyx2Tm9ybWFsLGF0dGVudWF0aW9uLGRpZmZ1c2VDb2xvcixzcGVjdWxhckNvbG9yLGdsb3NzaW5lc3MpO31cbmxpZ2h0aW5nSW5mbyByZXN1bHQ7cmVzdWx0LmRpZmZ1c2U9dmVjMygwLik7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXI9dmVjMygwLik7XG4jZW5kaWZcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD0wLjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5saWdodGluZ0luZm8gY29tcHV0ZVNwb3RMaWdodGluZyh2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgdk5vcm1hbCx2ZWM0IGxpZ2h0RGF0YSx2ZWM0IGxpZ2h0RGlyZWN0aW9uLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCByYW5nZSxmbG9hdCBnbG9zc2luZXNzKSB7dmVjMyBkaXJlY3Rpb249bGlnaHREYXRhLnh5ei12UG9zaXRpb25XO3ZlYzMgbGlnaHRWZWN0b3JXPW5vcm1hbGl6ZShkaXJlY3Rpb24pO2Zsb2F0IGF0dGVudWF0aW9uPW1heCgwLiwxLjAtbGVuZ3RoKGRpcmVjdGlvbikvcmFuZ2UpO2Zsb2F0IGNvc0FuZ2xlPW1heCgwLixkb3QobGlnaHREaXJlY3Rpb24ueHl6LC1saWdodFZlY3RvclcpKTtpZiAoY29zQW5nbGU+PWxpZ2h0RGlyZWN0aW9uLncpXG57IFxuYXR0ZW51YXRpb24qPWdldEF0dGVudWF0aW9uKGNvc0FuZ2xlLGxpZ2h0RGF0YS53KTtyZXR1cm4gYmFzaWNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbGlnaHRWZWN0b3JXLHZOb3JtYWwsYXR0ZW51YXRpb24sZGlmZnVzZUNvbG9yLHNwZWN1bGFyQ29sb3IsZ2xvc3NpbmVzcyk7fVxubGlnaHRpbmdJbmZvIHJlc3VsdDtyZXN1bHQuZGlmZnVzZT12ZWMzKDAuKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5zcGVjdWxhcj12ZWMzKDAuKTtcbiNlbmRpZlxuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPTAuO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmxpZ2h0aW5nSW5mbyBjb21wdXRlSGVtaXNwaGVyaWNMaWdodGluZyh2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgdk5vcm1hbCx2ZWM0IGxpZ2h0RGF0YSx2ZWMzIGRpZmZ1c2VDb2xvcix2ZWMzIHNwZWN1bGFyQ29sb3IsdmVjMyBncm91bmRDb2xvcixmbG9hdCBnbG9zc2luZXNzKSB7bGlnaHRpbmdJbmZvIHJlc3VsdDtmbG9hdCBuZGw9ZG90KHZOb3JtYWwsbGlnaHREYXRhLnh5eikqMC41KzAuNTtcbiNpZmRlZiBORE9UTFxucmVzdWx0Lm5kbD1uZGw7XG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlPW1peChncm91bmRDb2xvcixkaWZmdXNlQ29sb3IsbmRsKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgYW5nbGVXPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodERhdGEueHl6KTtmbG9hdCBzcGVjQ29tcD1tYXgoMC4sZG90KHZOb3JtYWwsYW5nbGVXKSk7c3BlY0NvbXA9cG93KHNwZWNDb21wLG1heCgxLixnbG9zc2luZXNzKSk7cmVzdWx0LnNwZWN1bGFyPXNwZWNDb21wKnNwZWN1bGFyQ29sb3I7XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxuI2RlZmluZSBpbmxpbmVcbnZlYzMgY29tcHV0ZVByb2plY3Rpb25UZXh0dXJlRGlmZnVzZUxpZ2h0aW5nKHNhbXBsZXIyRCBwcm9qZWN0aW9uTGlnaHRTYW1wbGVyLG1hdDQgdGV4dHVyZVByb2plY3Rpb25NYXRyaXgsdmVjMyBwb3NXKXt2ZWM0IHN0cnE9dGV4dHVyZVByb2plY3Rpb25NYXRyaXgqdmVjNChwb3NXLDEuMCk7c3RycS89c3RycS53O3ZlYzMgdGV4dHVyZUNvbG9yPXRleHR1cmUyRChwcm9qZWN0aW9uTGlnaHRTYW1wbGVyLHN0cnEueHkpLnJnYjtyZXR1cm4gdGV4dHVyZUNvbG9yO31cbiNpZiBkZWZpbmVkKEFSRUFMSUdIVFVTRUQpICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxuI2luY2x1ZGU8bHRjSGVscGVyRnVuY3Rpb25zPlxudW5pZm9ybSBzYW1wbGVyMkQgYXJlYUxpZ2h0c0xUQzFTYW1wbGVyO3VuaWZvcm0gc2FtcGxlcjJEIGFyZWFMaWdodHNMVEMyU2FtcGxlcjtcbiNkZWZpbmUgaW5saW5lXG5saWdodGluZ0luZm8gY29tcHV0ZUFyZWFMaWdodGluZyhzYW1wbGVyMkQgbHRjMSxzYW1wbGVyMkQgbHRjMix2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgdk5vcm1hbCx2ZWMzIHZQb3NpdGlvbix2ZWMzIGxpZ2h0UG9zaXRpb24sdmVjMyBoYWxmV2lkdGgsdmVjMyBoYWxmSGVpZ2h0LHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCByb3VnaG5lc3MpIFxue2xpZ2h0aW5nSW5mbyByZXN1bHQ7YXJlYUxpZ2h0RGF0YSBkYXRhPWNvbXB1dGVBcmVhTGlnaHRTcGVjdWxhckRpZmZ1c2VGcmVzbmVsKGx0YzEsbHRjMix2aWV3RGlyZWN0aW9uVyx2Tm9ybWFsLHZQb3NpdGlvbixsaWdodFBvc2l0aW9uLGhhbGZXaWR0aCxoYWxmSGVpZ2h0LHJvdWdobmVzcyk7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52ZWMzIGZyZXNuZWw9KCBzcGVjdWxhckNvbG9yKmRhdGEuRnJlc25lbC54KyggdmVjMyggMS4wICktc3BlY3VsYXJDb2xvciApKmRhdGEuRnJlc25lbC55ICk7cmVzdWx0LnNwZWN1bGFyKz1zcGVjdWxhckNvbG9yKmZyZXNuZWwqZGF0YS5TcGVjdWxhcjtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2UrPWRpZmZ1c2VDb2xvcipkYXRhLkRpZmZ1c2U7cmV0dXJuIHJlc3VsdDt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxuI2luY2x1ZGU8Y2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnM+XG4jZGVmaW5lIGlubGluZVxubGlnaHRpbmdJbmZvIGNvbXB1dGVDbHVzdGVyZWRMaWdodGluZyhcbnNhbXBsZXIyRCBsaWdodERhdGFUZXh0dXJlLFxuc2FtcGxlcjJEIHRpbGVNYXNrVGV4dHVyZSxcbnZlYzMgdmlld0RpcmVjdGlvblcsXG52ZWMzIHZOb3JtYWwsXG52ZWM0IGxpZ2h0RGF0YSxcbml2ZWMyIHNsaWNlUmFuZ2UsXG5mbG9hdCBnbG9zc2luZXNzXG4pIHtsaWdodGluZ0luZm8gcmVzdWx0O2l2ZWMyIHRpbGVQb3NpdGlvbj1pdmVjMihnbF9GcmFnQ29vcmQueHkqbGlnaHREYXRhLnh5KTtpbnQgbWFza0hlaWdodD1pbnQobGlnaHREYXRhLnopO3RpbGVQb3NpdGlvbi55PW1pbih0aWxlUG9zaXRpb24ueSxtYXNrSGVpZ2h0LTEpO2l2ZWMyIGJhdGNoUmFuZ2U9c2xpY2VSYW5nZS9DTFVTVExJR0hUX0JBVENIO2ludCBiYXRjaE9mZnNldD1iYXRjaFJhbmdlLngqQ0xVU1RMSUdIVF9CQVRDSDt0aWxlUG9zaXRpb24ueSs9bWFza0hlaWdodCpiYXRjaFJhbmdlLng7Zm9yIChpbnQgaT1iYXRjaFJhbmdlLng7IGk8PWJhdGNoUmFuZ2UueTsgaSs9MSkge3VpbnQgbWFzaz11aW50KHRleGVsRmV0Y2godGlsZU1hc2tUZXh0dXJlLHRpbGVQb3NpdGlvbiwwKS5yKTt0aWxlUG9zaXRpb24ueSs9bWFza0hlaWdodDtpbnQgbWFza09mZnNldD1tYXgoc2xpY2VSYW5nZS54LWJhdGNoT2Zmc2V0LDApO2ludCBtYXNrV2lkdGg9bWluKHNsaWNlUmFuZ2UueS1iYXRjaE9mZnNldCsxLENMVVNUTElHSFRfQkFUQ0gpO21hc2s9ZXh0cmFjdEJpdHMobWFzayxtYXNrT2Zmc2V0LG1hc2tXaWR0aCk7d2hpbGUgKG1hc2sgIT0gMHUpIHt1aW50IGJpdD1tYXNrICYgLW1hc2s7bWFzayBePSBiaXQ7aW50IHBvc2l0aW9uPW9ubHlCaXRQb3NpdGlvbihiaXQpO0NsdXN0ZXJlZExpZ2h0IGxpZ2h0PWdldENsdXN0ZXJlZExpZ2h0KGxpZ2h0RGF0YVRleHR1cmUsYmF0Y2hPZmZzZXQrbWFza09mZnNldCtwb3NpdGlvbik7bGlnaHRpbmdJbmZvIGluZm87aWYgKGxpZ2h0LnZMaWdodERpcmVjdGlvbi53PDAuMCkge2luZm89Y29tcHV0ZUxpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsbGlnaHQudkxpZ2h0RGF0YSxsaWdodC52TGlnaHREaWZmdXNlLnJnYixsaWdodC52TGlnaHRTcGVjdWxhci5yZ2IsbGlnaHQudkxpZ2h0RGlmZnVzZS5hLGdsb3NzaW5lc3MpO30gZWxzZSB7aW5mbz1jb21wdXRlU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsbGlnaHQudkxpZ2h0RGF0YSxsaWdodC52TGlnaHREaXJlY3Rpb24sbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IsbGlnaHQudkxpZ2h0U3BlY3VsYXIucmdiLGxpZ2h0LnZMaWdodERpZmZ1c2UuYSxnbG9zc2luZXNzKTt9XG5yZXN1bHQuZGlmZnVzZSs9aW5mby5kaWZmdXNlO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyKz1pbmZvLnNwZWN1bGFyO1xuI2VuZGlmXG59XG5iYXRjaE9mZnNldCs9Q0xVU1RMSUdIVF9CQVRDSDt9XG5yZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodHNGcmFnbWVudEZ1bmN0aW9ucyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93c1ZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBTSEFET1dTXG4jaWYgZGVmaW5lZChTSEFET1dDU017WH0pXG52UG9zaXRpb25Gcm9tQ2FtZXJhe1h9PXZpZXcqd29ybGRQb3M7Zm9yIChpbnQgaT0wOyBpPFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfTsgaSsrKSB7dlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2ldPWxpZ2h0TWF0cml4e1h9W2ldKndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52RGVwdGhNZXRyaWN7WH1baV09KC12UG9zaXRpb25Gcm9tTGlnaHR7WH1baV0ueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZEZXB0aE1ldHJpY3tYfVtpXT0odlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2ldLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxufVxuI2VsaWYgZGVmaW5lZChTSEFET1d7WH0pICYmICFkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG52UG9zaXRpb25Gcm9tTGlnaHR7WH09bGlnaHRNYXRyaXh7WH0qd29ybGRQb3M7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZEZXB0aE1ldHJpY3tYfT0oLXZQb3NpdGlvbkZyb21MaWdodHtYfS56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZWxzZVxudkRlcHRoTWV0cmlje1h9PSh2UG9zaXRpb25Gcm9tTGlnaHR7WH0ueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dzVmVydGV4ID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3NcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhGcmFnbWVudFwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nQ29tcGF0aWJpbGl0eVwiO1xuXG5jb25zdCBuYW1lID0gXCJub3JtYWxQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHByZWNpc2lvbiBoaWdocCBmbG9hdDt1bmlmb3JtIHZlYzQgdkV5ZVBvc2l0aW9uO3VuaWZvcm0gdmVjNCB2RGlmZnVzZUNvbG9yO3ZhcnlpbmcgdmVjMyB2UG9zaXRpb25XO1xuI2lmZGVmIE5PUk1BTFxudmFyeWluZyB2ZWMzIHZOb3JtYWxXO1xuI2VuZGlmXG4jaWZkZWYgTElHSFRJTkdcbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRGcmFnbWVudD5bMF1cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRGcmFnbWVudD5bMV1cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRGcmFnbWVudD5bMl1cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRGcmFnbWVudD5bM11cbiNpbmNsdWRlPGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8c2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2VuZGlmXG4jaWZkZWYgRElGRlVTRVxudmFyeWluZyB2ZWMyIHZEaWZmdXNlVVY7dW5pZm9ybSBzYW1wbGVyMkQgZGlmZnVzZVNhbXBsZXI7dW5pZm9ybSB2ZWMyIHZEaWZmdXNlSW5mb3M7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb24+XG4jaWZkZWYgTE9HQVJJVEhNSUNERVBUSFxuI2V4dGVuc2lvbiBHTF9FWFRfZnJhZ19kZXB0aCA6IGVuYWJsZVxuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9CRUdJTlxuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnQ+XG52ZWMzIHZpZXdEaXJlY3Rpb25XPW5vcm1hbGl6ZSh2RXllUG9zaXRpb24ueHl6LXZQb3NpdGlvblcpO3ZlYzQgYmFzZUNvbG9yPXZlYzQoMS4sMS4sMS4sMS4pO3ZlYzMgZGlmZnVzZUNvbG9yPXZEaWZmdXNlQ29sb3IucmdiO2Zsb2F0IGFscGhhPXZEaWZmdXNlQ29sb3IuYTtcbiNpZmRlZiBESUZGVVNFXG5iYXNlQ29sb3I9dGV4dHVyZTJEKGRpZmZ1c2VTYW1wbGVyLHZEaWZmdXNlVVYpO1xuI2lmZGVmIEFMUEhBVEVTVFxuaWYgKGJhc2VDb2xvci5hPDAuNClcbmRpc2NhcmQ7XG4jZW5kaWZcbiNpbmNsdWRlPGRlcHRoUHJlUGFzcz5cbmJhc2VDb2xvci5yZ2IqPXZEaWZmdXNlSW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxuYmFzZUNvbG9yPW1peChiYXNlQ29sb3IsdmVjNCh2Tm9ybWFsVywxLjApLDAuNSk7XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZlYzMgbm9ybWFsVz1ub3JtYWxpemUodk5vcm1hbFcpO1xuI2Vsc2VcbnZlYzMgbm9ybWFsVz12ZWMzKDEuMCwxLjAsMS4wKTtcbiNlbmRpZlxuI2lmZGVmIExJR0hUSU5HXG52ZWMzIGRpZmZ1c2VCYXNlPXZlYzMoMC4sMC4sMC4pO2xpZ2h0aW5nSW5mbyBpbmZvO2Zsb2F0IHNoYWRvdz0xLjtmbG9hdCBnbG9zc2luZXNzPTAuO2Zsb2F0IGFnZ1NoYWRvdz0wLjtmbG9hdCBudW1MaWdodHM9MC47XG4jaW5jbHVkZTxsaWdodEZyYWdtZW50PlswXVxuI2luY2x1ZGU8bGlnaHRGcmFnbWVudD5bMV1cbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzJdXG4jaW5jbHVkZTxsaWdodEZyYWdtZW50PlszXVxudmVjMyBmaW5hbERpZmZ1c2U9Y2xhbXAoZGlmZnVzZUJhc2UqZGlmZnVzZUNvbG9yLDAuMCwxLjApKmJhc2VDb2xvci5yZ2I7XG4jZWxzZVxudmVjMyBmaW5hbERpZmZ1c2U9IGJhc2VDb2xvci5yZ2I7XG4jZW5kaWZcbnZlYzQgY29sb3I9dmVjNChmaW5hbERpZmZ1c2UsYWxwaGEpO1xuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50PlxuZ2xfRnJhZ0NvbG9yPWNvbG9yO1xuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nQ29tcGF0aWJpbGl0eT5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbFBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCJjb3JlL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcImNvcmUvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aFZlcnRleFwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleFwiO1xuaW1wb3J0IFwiY29yZS9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwibm9ybWFsVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xuI2VuZGlmXG4jaWZkZWYgVVYxXG5hdHRyaWJ1dGUgdmVjMiB1djtcbiNlbmRpZlxuI2lmZGVmIFVWMlxuYXR0cmlidXRlIHZlYzIgdXYyO1xuI2VuZGlmXG4jaWZkZWYgVkVSVEVYQ09MT1JcbmF0dHJpYnV0ZSB2ZWM0IGNvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxib25lc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGluc3RhbmNlc0RlY2xhcmF0aW9uPlxudW5pZm9ybSBtYXQ0IHZpZXc7dW5pZm9ybSBtYXQ0IHZpZXdQcm9qZWN0aW9uO1xuI2lmZGVmIERJRkZVU0VcbnZhcnlpbmcgdmVjMiB2RGlmZnVzZVVWO3VuaWZvcm0gbWF0NCBkaWZmdXNlTWF0cml4O3VuaWZvcm0gdmVjMiB2RGlmZnVzZUluZm9zO1xuI2VuZGlmXG4jaWZkZWYgUE9JTlRTSVpFXG51bmlmb3JtIGZsb2F0IHBvaW50U2l6ZTtcbiNlbmRpZlxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblc7XG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZlYzMgdk5vcm1hbFc7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbnZlYzQgd29ybGRQb3M9ZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uLDEuMCk7Z2xfUG9zaXRpb249dmlld1Byb2plY3Rpb24qd29ybGRQb3M7dlBvc2l0aW9uVz12ZWMzKHdvcmxkUG9zKTtcbiNpZmRlZiBOT1JNQUxcbnZOb3JtYWxXPW5vcm1hbGl6ZSh2ZWMzKGZpbmFsV29ybGQqdmVjNChub3JtYWwsMC4wKSkpO1xuI2VuZGlmXG4jaWZuZGVmIFVWMVxudmVjMiB1dj12ZWMyKDAuLDAuKTtcbiNlbmRpZlxuI2lmbmRlZiBVVjJcbnZlYzIgdXYyPXZlYzIoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgRElGRlVTRVxuaWYgKHZEaWZmdXNlSW5mb3MueD09MC4pXG57dkRpZmZ1c2VVVj12ZWMyKGRpZmZ1c2VNYXRyaXgqdmVjNCh1diwxLjAsMC4wKSk7fVxuZWxzZVxue3ZEaWZmdXNlVVY9dmVjMihkaWZmdXNlTWF0cml4KnZlYzQodXYyLDEuMCwwLjApKTt9XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGxvZ0RlcHRoVmVydGV4PlxuI2luY2x1ZGU8Zm9nVmVydGV4PlxuI2luY2x1ZGU8c2hhZG93c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2lmIGRlZmluZWQoUE9JTlRTSVpFKSAmJiAhZGVmaW5lZChXRUJHUFUpXG5nbF9Qb2ludFNpemU9cG9pbnRTaXplO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBub3JtYWxWZXJ0ZXhTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemVBc1RleHR1cmUsIHNlcmlhbGl6ZSwgZXhwYW5kVG9Qcm9wZXJ0eSwgc2VyaWFsaXplQXNDb2xvcjMgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvbkhlbHBlciB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9ycy5zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0cml4IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRhYmxlIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRhYmxlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUVmZmVjdENyZWF0aW9uT3B0aW9ucyB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9lZmZlY3RcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxEZWZpbmVzIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsRGVmaW5lc1wiO1xyXG5pbXBvcnQgeyBQdXNoTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvcHVzaE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsRmxhZ3MgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxGbGFnc1wiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBTdWJNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL3N1Yk1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcclxuXHJcbmltcG9ydCBcIi4vbm9ybWFsLmZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vbm9ybWFsLnZlcnRleFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RGYWxsYmFja3MgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvZWZmZWN0RmFsbGJhY2tzXCI7XHJcbmltcG9ydCB7IEFkZENsaXBQbGFuZVVuaWZvcm1zLCBCaW5kQ2xpcFBsYW5lIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL2NsaXBQbGFuZU1hdGVyaWFsSGVscGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBCaW5kQm9uZXNQYXJhbWV0ZXJzLFxyXG4gICAgQmluZEZvZ1BhcmFtZXRlcnMsXHJcbiAgICBCaW5kTGlnaHRzLFxyXG4gICAgQmluZExvZ0RlcHRoLFxyXG4gICAgSGFuZGxlRmFsbGJhY2tzRm9yU2hhZG93cyxcclxuICAgIFByZXBhcmVBdHRyaWJ1dGVzRm9yQm9uZXMsXHJcbiAgICBQcmVwYXJlQXR0cmlidXRlc0Zvckluc3RhbmNlcyxcclxuICAgIFByZXBhcmVEZWZpbmVzRm9yQXR0cmlidXRlcyxcclxuICAgIFByZXBhcmVEZWZpbmVzRm9yRnJhbWVCb3VuZFZhbHVlcyxcclxuICAgIFByZXBhcmVEZWZpbmVzRm9yTGlnaHRzLFxyXG4gICAgUHJlcGFyZURlZmluZXNGb3JNaXNjLFxyXG4gICAgUHJlcGFyZVVuaWZvcm1zQW5kU2FtcGxlcnNMaXN0LFxyXG59IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbEhlbHBlci5mdW5jdGlvbnNcIjtcclxuXHJcbmNsYXNzIE5vcm1hbE1hdGVyaWFsRGVmaW5lcyBleHRlbmRzIE1hdGVyaWFsRGVmaW5lcyB7XHJcbiAgICBwdWJsaWMgRElGRlVTRSA9IGZhbHNlO1xyXG4gICAgcHVibGljIENMSVBQTEFORSA9IGZhbHNlO1xyXG4gICAgcHVibGljIENMSVBQTEFORTIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBDTElQUExBTkUzID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgQ0xJUFBMQU5FNCA9IGZhbHNlO1xyXG4gICAgcHVibGljIENMSVBQTEFORTUgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBDTElQUExBTkU2ID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgQUxQSEFURVNUID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgREVQVEhQUkVQQVNTID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgUE9JTlRTSVpFID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgRk9HID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTElHSFQwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTElHSFQxID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTElHSFQyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTElHSFQzID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU1BPVExJR0hUMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNQT1RMSUdIVDEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTUE9UTElHSFQyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU1BPVExJR0hUMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIEhFTUlMSUdIVDAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBIRU1JTElHSFQxID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgSEVNSUxJR0hUMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIEhFTUlMSUdIVDMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBESVJMSUdIVDAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBESVJMSUdIVDEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBESVJMSUdIVDIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBESVJMSUdIVDMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBQT0lOVExJR0hUMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIFBPSU5UTElHSFQxID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgUE9JTlRMSUdIVDIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBQT0lOVExJR0hUMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPVzAgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1cxID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPVzMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dTID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XRVNNMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV0VTTTEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dFU00yID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XRVNNMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BPSVNTT04wID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUE9JU1NPTjEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQT0lTU09OMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BPSVNTT04zID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUENGMCA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BDRjEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQQ0YyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUENGMyA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BDU1MwID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0hBRE9XUENTUzEgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBTSEFET1dQQ1NTMiA9IGZhbHNlO1xyXG4gICAgcHVibGljIFNIQURPV1BDU1MzID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTk9STUFMID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgVVYxID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgVVYyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgTlVNX0JPTkVfSU5GTFVFTkNFUlMgPSAwO1xyXG4gICAgcHVibGljIEJvbmVzUGVyTWVzaCA9IDA7XHJcbiAgICBwdWJsaWMgSU5TVEFOQ0VTID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgVEhJTl9JTlNUQU5DRVMgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBMSUdIVElORyA9IGZhbHNlO1xyXG4gICAgcHVibGljIElNQUdFUFJPQ0VTU0lOR1BPU1RQUk9DRVNTID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgU0tJUEZJTkFMQ09MT1JDTEFNUCA9IGZhbHNlO1xyXG4gICAgcHVibGljIExPR0FSSVRITUlDREVQVEggPSBmYWxzZTtcclxuICAgIHB1YmxpYyBBUkVBTElHSFRTVVBQT1JURUQgPSB0cnVlO1xyXG4gICAgcHVibGljIEFSRUFMSUdIVE5PUk9VR0hUTkVTUyA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlYnVpbGQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vcm1hbE1hdGVyaWFsIGV4dGVuZHMgUHVzaE1hdGVyaWFsIHtcclxuICAgIEBzZXJpYWxpemVBc1RleHR1cmUoXCJkaWZmdXNlVGV4dHVyZVwiKVxyXG4gICAgcHJpdmF0ZSBfZGlmZnVzZVRleHR1cmU6IEJhc2VUZXh0dXJlO1xyXG4gICAgQGV4cGFuZFRvUHJvcGVydHkoXCJfbWFya0FsbFN1Yk1lc2hlc0FzVGV4dHVyZXNEaXJ0eVwiKVxyXG4gICAgcHVibGljIGRpZmZ1c2VUZXh0dXJlOiBCYXNlVGV4dHVyZTtcclxuXHJcbiAgICBAc2VyaWFsaXplQXNDb2xvcjMoKVxyXG4gICAgcHVibGljIGRpZmZ1c2VDb2xvciA9IG5ldyBDb2xvcjMoMSwgMSwgMSk7XHJcblxyXG4gICAgQHNlcmlhbGl6ZShcImRpc2FibGVMaWdodGluZ1wiKVxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZUxpZ2h0aW5nID0gZmFsc2U7XHJcbiAgICBAZXhwYW5kVG9Qcm9wZXJ0eShcIl9tYXJrQWxsU3ViTWVzaGVzQXNMaWdodHNEaXJ0eVwiKVxyXG4gICAgcHVibGljIGRpc2FibGVMaWdodGluZzogYm9vbGVhbjtcclxuXHJcbiAgICBAc2VyaWFsaXplKFwibWF4U2ltdWx0YW5lb3VzTGlnaHRzXCIpXHJcbiAgICBwcml2YXRlIF9tYXhTaW11bHRhbmVvdXNMaWdodHMgPSA0O1xyXG4gICAgQGV4cGFuZFRvUHJvcGVydHkoXCJfbWFya0FsbFN1Yk1lc2hlc0FzTGlnaHRzRGlydHlcIilcclxuICAgIHB1YmxpYyBtYXhTaW11bHRhbmVvdXNMaWdodHM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNjZW5lPzogU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIG5lZWRBbHBoYUJsZW5kaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFscGhhIDwgMS4wO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBuZWVkQWxwaGFCbGVuZGluZ0Zvck1lc2gobWVzaDogQWJzdHJhY3RNZXNoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmVlZEFscGhhQmxlbmRpbmcoKSB8fCBtZXNoLnZpc2liaWxpdHkgPCAxLjA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIG5lZWRBbHBoYVRlc3RpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRBbHBoYVRlc3RUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGlzUmVhZHlGb3JTdWJNZXNoKG1lc2g6IEFic3RyYWN0TWVzaCwgc3ViTWVzaDogU3ViTWVzaCwgdXNlSW5zdGFuY2VzPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGRyYXdXcmFwcGVyID0gc3ViTWVzaC5fZHJhd1dyYXBwZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRnJvemVuKSB7XHJcbiAgICAgICAgICAgIGlmIChkcmF3V3JhcHBlci5lZmZlY3QgJiYgZHJhd1dyYXBwZXIuX3dhc1ByZXZpb3VzbHlSZWFkeSAmJiBkcmF3V3JhcHBlci5fd2FzUHJldmlvdXNseVVzaW5nSW5zdGFuY2VzID09PSB1c2VJbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN1Yk1lc2gubWF0ZXJpYWxEZWZpbmVzKSB7XHJcbiAgICAgICAgICAgIHN1Yk1lc2gubWF0ZXJpYWxEZWZpbmVzID0gbmV3IE5vcm1hbE1hdGVyaWFsRGVmaW5lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGVmaW5lcyA9IDxOb3JtYWxNYXRlcmlhbERlZmluZXM+c3ViTWVzaC5tYXRlcmlhbERlZmluZXM7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdldFNjZW5lKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1JlYWR5Rm9yU3ViTWVzaChzdWJNZXNoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHNjZW5lLmdldEVuZ2luZSgpO1xyXG5cclxuICAgICAgICAvLyBUZXh0dXJlc1xyXG4gICAgICAgIGlmIChkZWZpbmVzLl9hcmVUZXh0dXJlc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIGRlZmluZXMuX25lZWRVVnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNjZW5lLnRleHR1cmVzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlICYmIE1hdGVyaWFsRmxhZ3MuRGlmZnVzZVRleHR1cmVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaWZmdXNlVGV4dHVyZS5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZXMuX25lZWRVVnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVzLkRJRkZVU0UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWlzYy5cclxuICAgICAgICBQcmVwYXJlRGVmaW5lc0Zvck1pc2MoXHJcbiAgICAgICAgICAgIG1lc2gsXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICB0aGlzLl91c2VMb2dhcml0aG1pY0RlcHRoLFxyXG4gICAgICAgICAgICB0aGlzLnBvaW50c0Nsb3VkLFxyXG4gICAgICAgICAgICB0aGlzLmZvZ0VuYWJsZWQsXHJcbiAgICAgICAgICAgIHRoaXMubmVlZEFscGhhVGVzdGluZ0Zvck1lc2gobWVzaCksXHJcbiAgICAgICAgICAgIGRlZmluZXMsXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX2lzVmVydGV4T3V0cHV0SW52YXJpYW50XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gTGlnaHRzXHJcbiAgICAgICAgZGVmaW5lcy5fbmVlZE5vcm1hbHMgPSB0cnVlO1xyXG4gICAgICAgIFByZXBhcmVEZWZpbmVzRm9yTGlnaHRzKHNjZW5lLCBtZXNoLCBkZWZpbmVzLCBmYWxzZSwgdGhpcy5fbWF4U2ltdWx0YW5lb3VzTGlnaHRzLCB0aGlzLl9kaXNhYmxlTGlnaHRpbmcpO1xyXG5cclxuICAgICAgICAvLyBWYWx1ZXMgdGhhdCBuZWVkIHRvIGJlIGV2YWx1YXRlZCBvbiBldmVyeSBmcmFtZVxyXG4gICAgICAgIFByZXBhcmVEZWZpbmVzRm9yRnJhbWVCb3VuZFZhbHVlcyhzY2VuZSwgZW5naW5lLCB0aGlzLCBkZWZpbmVzLCB1c2VJbnN0YW5jZXMgPyB0cnVlIDogZmFsc2UsIG51bGwsIHN1Yk1lc2guZ2V0UmVuZGVyaW5nTWVzaCgpLmhhc1RoaW5JbnN0YW5jZXMpO1xyXG5cclxuICAgICAgICBkZWZpbmVzLkxJR0hUSU5HID0gIXRoaXMuX2Rpc2FibGVMaWdodGluZztcclxuXHJcbiAgICAgICAgLy8gQXR0cmlic1xyXG4gICAgICAgIFByZXBhcmVEZWZpbmVzRm9yQXR0cmlidXRlcyhtZXNoLCBkZWZpbmVzLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGNvcnJlY3QgZWZmZWN0XHJcbiAgICAgICAgaWYgKGRlZmluZXMuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBkZWZpbmVzLm1hcmtBc1Byb2Nlc3NlZCgpO1xyXG5cclxuICAgICAgICAgICAgc2NlbmUucmVzZXRDYWNoZWRNYXRlcmlhbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRmFsbGJhY2tzXHJcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrcyA9IG5ldyBFZmZlY3RGYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgaWYgKGRlZmluZXMuRk9HKSB7XHJcbiAgICAgICAgICAgICAgICBmYWxsYmFja3MuYWRkRmFsbGJhY2soMSwgXCJGT0dcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEhhbmRsZUZhbGxiYWNrc0ZvclNoYWRvd3MoZGVmaW5lcywgZmFsbGJhY2tzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkZWZpbmVzLk5VTV9CT05FX0lORkxVRU5DRVJTID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tzLmFkZENQVVNraW5uaW5nRmFsbGJhY2soMCwgbWVzaCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmluZXMuSU1BR0VQUk9DRVNTSU5HUE9TVFBST0NFU1MgPSBzY2VuZS5pbWFnZVByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmFwcGx5QnlQb3N0UHJvY2VzcztcclxuXHJcbiAgICAgICAgICAgIC8vQXR0cmlidXRlc1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJzID0gW1ZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlZmluZXMuTk9STUFMKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJzLnB1c2goVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVmaW5lcy5VVjEpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnMucHVzaChWZXJ0ZXhCdWZmZXIuVVZLaW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlZmluZXMuVVYyKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJzLnB1c2goVmVydGV4QnVmZmVyLlVWMktpbmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBQcmVwYXJlQXR0cmlidXRlc0ZvckJvbmVzKGF0dHJpYnMsIG1lc2gsIGRlZmluZXMsIGZhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgIFByZXBhcmVBdHRyaWJ1dGVzRm9ySW5zdGFuY2VzKGF0dHJpYnMsIGRlZmluZXMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hhZGVyTmFtZSA9IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW4gPSBkZWZpbmVzLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1bmlmb3JtcyA9IFtcclxuICAgICAgICAgICAgICAgIFwid29ybGRcIixcclxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2aWV3UHJvamVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2RXllUG9zaXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidkxpZ2h0c1R5cGVcIixcclxuICAgICAgICAgICAgICAgIFwidkRpZmZ1c2VDb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2Rm9nSW5mb3NcIixcclxuICAgICAgICAgICAgICAgIFwidkZvZ0NvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcInBvaW50U2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2RGlmZnVzZUluZm9zXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1Cb25lc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkaWZmdXNlTWF0cml4XCIsXHJcbiAgICAgICAgICAgICAgICBcImxvZ2FyaXRobWljRGVwdGhDb25zdGFudFwiLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVycyA9IFtcImRpZmZ1c2VTYW1wbGVyXCIsIFwiYXJlYUxpZ2h0c0xUQzFTYW1wbGVyXCIsIFwiYXJlYUxpZ2h0c0xUQzJTYW1wbGVyXCJdO1xyXG4gICAgICAgICAgICBjb25zdCB1bmlmb3JtQnVmZmVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIEFkZENsaXBQbGFuZVVuaWZvcm1zKHVuaWZvcm1zKTtcclxuICAgICAgICAgICAgUHJlcGFyZVVuaWZvcm1zQW5kU2FtcGxlcnNMaXN0KDxJRWZmZWN0Q3JlYXRpb25PcHRpb25zPntcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zTmFtZXM6IHVuaWZvcm1zLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlcnNOYW1lczogdW5pZm9ybUJ1ZmZlcnMsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyczogc2FtcGxlcnMsXHJcbiAgICAgICAgICAgICAgICBkZWZpbmVzOiBkZWZpbmVzLFxyXG4gICAgICAgICAgICAgICAgbWF4U2ltdWx0YW5lb3VzTGlnaHRzOiA0LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN1Yk1lc2guc2V0RWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgc2NlbmUuZ2V0RW5naW5lKCkuY3JlYXRlRWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgPElFZmZlY3RDcmVhdGlvbk9wdGlvbnM+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3Jtc05hbWVzOiB1bmlmb3JtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlcnNOYW1lczogdW5pZm9ybUJ1ZmZlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXJzOiBzYW1wbGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lczogam9pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tzOiBmYWxsYmFja3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGlsZWQ6IHRoaXMub25Db21waWxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBhcmFtZXRlcnM6IHsgbWF4U2ltdWx0YW5lb3VzTGlnaHRzOiA0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkZWZpbmVzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxDb250ZXh0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBBcmVhIExpZ2h0cyBoYXZlIExUQyB0ZXh0dXJlLlxyXG4gICAgICAgIGlmIChkZWZpbmVzW1wiQVJFQUxJR0hUVVNFRFwiXSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVzaC5saWdodFNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc2gubGlnaHRTb3VyY2VzW2luZGV4XS5faXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXN1Yk1lc2guZWZmZWN0IHx8ICFzdWJNZXNoLmVmZmVjdC5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmaW5lcy5fcmVuZGVySWQgPSBzY2VuZS5nZXRSZW5kZXJJZCgpO1xyXG4gICAgICAgIGRyYXdXcmFwcGVyLl93YXNQcmV2aW91c2x5UmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIGRyYXdXcmFwcGVyLl93YXNQcmV2aW91c2x5VXNpbmdJbnN0YW5jZXMgPSAhIXVzZUluc3RhbmNlcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGJpbmRGb3JTdWJNZXNoKHdvcmxkOiBNYXRyaXgsIG1lc2g6IE1lc2gsIHN1Yk1lc2g6IFN1Yk1lc2gpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmaW5lcyA9IDxOb3JtYWxNYXRlcmlhbERlZmluZXM+c3ViTWVzaC5tYXRlcmlhbERlZmluZXM7XHJcbiAgICAgICAgaWYgKCFkZWZpbmVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IHN1Yk1lc2guZWZmZWN0O1xyXG4gICAgICAgIGlmICghZWZmZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0ID0gZWZmZWN0O1xyXG5cclxuICAgICAgICAvLyBNYXRyaWNlc1xyXG4gICAgICAgIHRoaXMuYmluZE9ubHlXb3JsZE1hdHJpeCh3b3JsZCk7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldE1hdHJpeChcInZpZXdQcm9qZWN0aW9uXCIsIHNjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpKTtcclxuXHJcbiAgICAgICAgLy8gQm9uZXNcclxuICAgICAgICBCaW5kQm9uZXNQYXJhbWV0ZXJzKG1lc2gsIHRoaXMuX2FjdGl2ZUVmZmVjdCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tdXN0UmViaW5kKHNjZW5lLCBlZmZlY3QsIHN1Yk1lc2gpKSB7XHJcbiAgICAgICAgICAgIC8vIFRleHR1cmVzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpZmZ1c2VUZXh0dXJlICYmIE1hdGVyaWFsRmxhZ3MuRGlmZnVzZVRleHR1cmVFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFZmZlY3Quc2V0VGV4dHVyZShcImRpZmZ1c2VTYW1wbGVyXCIsIHRoaXMuZGlmZnVzZVRleHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRGbG9hdDIoXCJ2RGlmZnVzZUluZm9zXCIsIHRoaXMuZGlmZnVzZVRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCwgdGhpcy5kaWZmdXNlVGV4dHVyZS5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFZmZlY3Quc2V0TWF0cml4KFwiZGlmZnVzZU1hdHJpeFwiLCB0aGlzLmRpZmZ1c2VUZXh0dXJlLmdldFRleHR1cmVNYXRyaXgoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2xpcCBwbGFuZVxyXG4gICAgICAgICAgICBCaW5kQ2xpcFBsYW5lKGVmZmVjdCwgdGhpcywgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgLy8gUG9pbnQgc2l6ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHNDbG91ZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldEZsb2F0KFwicG9pbnRTaXplXCIsIHRoaXMucG9pbnRTaXplKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTG9nLiBkZXB0aFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXNlTG9nYXJpdGhtaWNEZXB0aCkge1xyXG4gICAgICAgICAgICAgICAgQmluZExvZ0RlcHRoKGRlZmluZXMsIGVmZmVjdCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzY2VuZS5iaW5kRXllUG9zaXRpb24oZWZmZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVmZmVjdC5zZXRDb2xvcjQoXCJ2RGlmZnVzZUNvbG9yXCIsIHRoaXMuZGlmZnVzZUNvbG9yLCB0aGlzLmFscGhhICogbWVzaC52aXNpYmlsaXR5KTtcclxuXHJcbiAgICAgICAgLy8gTGlnaHRzXHJcbiAgICAgICAgaWYgKHNjZW5lLmxpZ2h0c0VuYWJsZWQgJiYgIXRoaXMuZGlzYWJsZUxpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgIEJpbmRMaWdodHMoc2NlbmUsIG1lc2gsIHRoaXMuX2FjdGl2ZUVmZmVjdCwgZGVmaW5lcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBWaWV3XHJcbiAgICAgICAgaWYgKHNjZW5lLmZvZ0VuYWJsZWQgJiYgbWVzaC5hcHBseUZvZyAmJiBzY2VuZS5mb2dNb2RlICE9PSBTY2VuZS5GT0dNT0RFX05PTkUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWZmZWN0LnNldE1hdHJpeChcInZpZXdcIiwgc2NlbmUuZ2V0Vmlld01hdHJpeCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvZ1xyXG4gICAgICAgIEJpbmRGb2dQYXJhbWV0ZXJzKHNjZW5lLCBtZXNoLCB0aGlzLl9hY3RpdmVFZmZlY3QpO1xyXG5cclxuICAgICAgICB0aGlzLl9hZnRlckJpbmQobWVzaCwgdGhpcy5fYWN0aXZlRWZmZWN0LCBzdWJNZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0QW5pbWF0YWJsZXMoKTogSUFuaW1hdGFibGVbXSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaWZmdXNlVGV4dHVyZSAmJiB0aGlzLmRpZmZ1c2VUZXh0dXJlLmFuaW1hdGlvbnMgJiYgdGhpcy5kaWZmdXNlVGV4dHVyZS5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuZGlmZnVzZVRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldEFjdGl2ZVRleHR1cmVzKCk6IEJhc2VUZXh0dXJlW10ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRleHR1cmVzID0gc3VwZXIuZ2V0QWN0aXZlVGV4dHVyZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRleHR1cmVzLnB1c2godGhpcy5fZGlmZnVzZVRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVRleHR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBoYXNUZXh0dXJlKHRleHR1cmU6IEJhc2VUZXh0dXJlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHN1cGVyLmhhc1RleHR1cmUodGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaWZmdXNlVGV4dHVyZSA9PT0gdGV4dHVyZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZShmb3JjZURpc3Bvc2VFZmZlY3Q/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaWZmdXNlVGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci5kaXNwb3NlKGZvcmNlRGlzcG9zZUVmZmVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIGNsb25lKG5hbWU6IHN0cmluZyk6IE5vcm1hbE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gU2VyaWFsaXphdGlvbkhlbHBlci5DbG9uZSgoKSA9PiBuZXcgTm9ybWFsTWF0ZXJpYWwobmFtZSwgdGhpcy5nZXRTY2VuZSgpKSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBzdXBlci5zZXJpYWxpemUoKTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmN1c3RvbVR5cGUgPSBcIkJBQllMT04uTm9ybWFsTWF0ZXJpYWxcIjtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiTm9ybWFsTWF0ZXJpYWxcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0aWNzXHJcbiAgICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIFBhcnNlKHNvdXJjZTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IE5vcm1hbE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZSgoKSA9PiBuZXcgTm9ybWFsTWF0ZXJpYWwoc291cmNlLm5hbWUsIHNjZW5lKSwgc291cmNlLCBzY2VuZSwgcm9vdFVybCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLk5vcm1hbE1hdGVyaWFsXCIsIE5vcm1hbE1hdGVyaWFsKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9