"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_background_fragment_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/backgroundFragmentDeclaration.js":
/*!****************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/backgroundFragmentDeclaration.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundFragmentDeclaration: () => (/* binding */ backgroundFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "backgroundFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec4 vPrimaryColor;
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
uniform vec4 vPrimaryColorShadow;
#endif
uniform float shadowLevel;uniform float alpha;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#endif
#if defined(REFLECTIONFRESNEL) || defined(OPACITYFRESNEL)
uniform vec3 vBackgroundCenter;
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 vReflectionControl;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION)
uniform mat4 view;
#endif
#ifdef PROJECTED_GROUND
uniform vec2 projectedGroundInfos;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const backgroundFragmentDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/backgroundUboDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/backgroundUboDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundUboDeclaration: () => (/* binding */ backgroundUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "backgroundUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{uniform vec4 vPrimaryColor;uniform vec4 vPrimaryColorShadow;uniform vec2 vDiffuseInfos;uniform mat4 diffuseMatrix;uniform float fFovMultiplier;uniform float pointSize;uniform float shadowLevel;uniform float alpha;uniform vec3 vBackgroundCenter;uniform vec4 vReflectionControl;uniform vec2 projectedGroundInfos;uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;};
#include<sceneUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const backgroundUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/reflectionFunction.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/reflectionFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reflectionFunction: () => (/* binding */ reflectionFunction)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "reflectionFunction";
const shader = `vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0); }
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(1.0-s,t,0); }
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);vec3 r=normalize(reflect(cameraToVertex,worldNormal));r=vec3(reflectionMatrix*vec4(r,0));float lon=atan(r.z,r.x);float lat=acos(r.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0);}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{vec3 viewDir=normalize(vec3(view*worldPos));vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));vec3 r=reflect(viewDir,viewNormal);r=vec3(reflectionMatrix*vec4(r,0));r.z=r.z-1.0;float m=2.0*length(r);return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=worldPos.xyz-eyePosition;vec3 coords=normalize(reflect(viewDir,worldNormal));return vec3(reflectionMatrix*vec4(coords,1));}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*(view*worldPos));}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*vec4(positionW,1.));}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const reflectionFunction = { name, shader };


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

/***/ "../core/dist/Shaders/background.fragment.js":
/*!***************************************************!*\
  !*** ../core/dist/Shaders/background.fragment.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundPixelShader: () => (/* binding */ backgroundPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_backgroundFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/backgroundFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/backgroundFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_backgroundUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/backgroundUboDeclaration */ "../core/dist/Shaders/ShadersInclude/backgroundUboDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/Shaders/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/Shaders/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_lightFragmentDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/lightFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_lightsFragmentFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/lightsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/lightsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/shadowsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/Shaders/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_intersectionFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/intersectionFunctions */ "../core/dist/Shaders/ShadersInclude/intersectionFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/lightFragment */ "../core/dist/Shaders/ShadersInclude/lightFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



















const name = "backgroundPixelShader";
const shader = `#ifdef TEXTURELODSUPPORT
#extension GL_EXT_shader_texture_lod : enable
#endif
precision highp float;
#include<__decl__backgroundFragment>
#include<helperFunctions>
varying vec3 vPositionW;
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif 
#ifdef MAINUV2 
varying vec2 vMainUV2; 
#endif 
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vec2 vDiffuseUV;
#endif
uniform sampler2D diffuseSampler;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef TEXTURELODSUPPORT
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef TEXTURELODSUPPORT
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
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
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE;
#endif
#ifndef SHADOWONLY
#define SHADOWONLY;
#endif
#include<imageProcessingDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
vec3 fresnelSchlickEnvironmentGGX(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
vec3 project(vec3 viewDirectionW,vec3 eyePosition) {float radius=projectedGroundInfos.x;float height=projectedGroundInfos.y;vec3 camDir=-viewDirectionW;float skySphereDistance=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;vec3 skySpherePositionW=eyePosition+camDir*skySphereDistance;vec3 p=normalize(skySpherePositionW);eyePosition.y-=height;float sIntersection=sphereIntersectFromOrigin(eyePosition,p,radius).x;vec3 h=vec3(0.0,-height,0.0);float dIntersection=diskIntersectWithBackFaceCulling(eyePosition,p,h,radius);p=(eyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(0.0,1.0,0.0);
#endif
float shadow=1.;float globalShadow=0.;float shadowLightCount=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
vec4 reflectionColor=vec4(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
vec3 reflectionVector=project(viewDirectionW,vEyePosition.xyz);reflectionVector=vec3(reflectionMatrix*vec4(reflectionVector,1.));
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=reflectionVector;
#else
vec2 reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
float reflectionLOD=vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(vReflectionMicrosurfaceInfos.x)*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;reflectionColor=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#else
float lodReflectionNormalized=saturate(reflectionLOD);float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;vec4 reflectionSpecularMid=sampleReflection(reflectionSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
vec4 reflectionSample=sampleReflection(reflectionSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor.rgb=fromRGBD(reflectionColor);
#endif
#ifdef GAMMAREFLECTION
reflectionColor.rgb=toLinearSpace(reflectionColor.rgb);
#endif
#ifdef REFLECTIONBGR
reflectionColor.rgb=reflectionColor.bgr;
#endif
reflectionColor.rgb*=vReflectionInfos.x;
#endif
vec3 diffuseColor=vec3(1.,1.,1.);float finalAlpha=alpha;
#ifdef DIFFUSE
vec4 diffuseMap=texture2D(diffuseSampler,vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap.rgb=toLinearSpace(diffuseMap.rgb);
#endif
diffuseMap.rgb*=vDiffuseInfos.y;
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
vec3 colorBase=diffuseColor;
#else
vec3 colorBase=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,0.0);
#ifdef USERGBCOLOR
vec3 finalColor=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
vec3 mainColor=mix(vPrimaryColorShadow.rgb,vPrimaryColor.rgb,colorBase);
#else
vec3 mainColor=vPrimaryColor.rgb;
#endif
vec3 finalColor=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
vec3 reflectionAmount=vReflectionControl.xxx;vec3 reflectionReflectance0=vReflectionControl.yyy;vec3 reflectionReflectance90=vReflectionControl.zzz;float VdotN=dot(normalize(vEyePosition.xyz),normalW);vec3 planarReflectionFresnel=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
float reflectionDistanceFalloff=1.0-saturate(length(vPositionW.xyz-vBackgroundCenter)*vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturate(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
float viewAngleToFloor=dot(normalW,normalize(vEyePosition.xyz-vBackgroundCenter));const float startAngle=0.1;float fadeFactor=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*shadowLevel,finalColor,globalShadow);
#endif
vec4 color=vec4(finalColor,finalAlpha);
#else
vec4 color=vec4(vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color.rgb=clamp(color.rgb,0.,30.0);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color.rgb*=color.a;
#endif
#ifdef NOISE
color.rgb+=dither(vPositionW.xy,0.5);color=max(color,0.0);
#endif
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const backgroundPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfYmFja2dyb3VuZF9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYmFja2dyb3VuZEZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2JhY2tncm91bmRVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbGlnaHRzRnJhZ21lbnRGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3JlZmxlY3Rpb25GdW5jdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvYmFja2dyb3VuZC5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYmFja2dyb3VuZEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB1bmlmb3JtIHZlYzQgdkV5ZVBvc2l0aW9uO3VuaWZvcm0gdmVjNCB2UHJpbWFyeUNvbG9yO1xuI2lmZGVmIFVTRUhJR0hMSUdIVEFORFNIQURPV0NPTE9SU1xudW5pZm9ybSB2ZWM0IHZQcmltYXJ5Q29sb3JTaGFkb3c7XG4jZW5kaWZcbnVuaWZvcm0gZmxvYXQgc2hhZG93TGV2ZWw7dW5pZm9ybSBmbG9hdCBhbHBoYTtcbiNpZmRlZiBESUZGVVNFXG51bmlmb3JtIHZlYzIgdkRpZmZ1c2VJbmZvcztcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbnVuaWZvcm0gdmVjMiB2UmVmbGVjdGlvbkluZm9zO3VuaWZvcm0gbWF0NCByZWZsZWN0aW9uTWF0cml4O3VuaWZvcm0gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9ORlJFU05FTCkgfHwgZGVmaW5lZChPUEFDSVRZRlJFU05FTClcbnVuaWZvcm0gdmVjMyB2QmFja2dyb3VuZENlbnRlcjtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05GUkVTTkVMXG51bmlmb3JtIHZlYzQgdlJlZmxlY3Rpb25Db250cm9sO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NQSEVSSUNBTCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX1BST0pFQ1RJT04pIHx8IGRlZmluZWQoUkVGUkFDVElPTilcbnVuaWZvcm0gbWF0NCB2aWV3O1xuI2VuZGlmXG4jaWZkZWYgUFJPSkVDVEVEX0dST1VORFxudW5pZm9ybSB2ZWMyIHByb2plY3RlZEdyb3VuZEluZm9zO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRGcmFnbWVudERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJhY2tncm91bmRVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYGxheW91dChzdGQxNDAsY29sdW1uX21ham9yKSB1bmlmb3JtO3VuaWZvcm0gTWF0ZXJpYWxcbnt1bmlmb3JtIHZlYzQgdlByaW1hcnlDb2xvcjt1bmlmb3JtIHZlYzQgdlByaW1hcnlDb2xvclNoYWRvdzt1bmlmb3JtIHZlYzIgdkRpZmZ1c2VJbmZvczt1bmlmb3JtIG1hdDQgZGlmZnVzZU1hdHJpeDt1bmlmb3JtIGZsb2F0IGZGb3ZNdWx0aXBsaWVyO3VuaWZvcm0gZmxvYXQgcG9pbnRTaXplO3VuaWZvcm0gZmxvYXQgc2hhZG93TGV2ZWw7dW5pZm9ybSBmbG9hdCBhbHBoYTt1bmlmb3JtIHZlYzMgdkJhY2tncm91bmRDZW50ZXI7dW5pZm9ybSB2ZWM0IHZSZWZsZWN0aW9uQ29udHJvbDt1bmlmb3JtIHZlYzIgcHJvamVjdGVkR3JvdW5kSW5mb3M7dW5pZm9ybSB2ZWMyIHZSZWZsZWN0aW9uSW5mb3M7dW5pZm9ybSBtYXQ0IHJlZmxlY3Rpb25NYXRyaXg7dW5pZm9ybSB2ZWMzIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M7fTtcbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRVYm9EZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vbHRjSGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGxpZ2h0aW5nSW5mb1xue3ZlYzMgZGlmZnVzZTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgc3BlY3VsYXI7XG4jZW5kaWZcbiNpZmRlZiBORE9UTFxuZmxvYXQgbmRsO1xuI2VuZGlmXG59O2xpZ2h0aW5nSW5mbyBjb21wdXRlTGlnaHRpbmcodmVjMyB2aWV3RGlyZWN0aW9uVyx2ZWMzIHZOb3JtYWwsdmVjNCBsaWdodERhdGEsdmVjMyBkaWZmdXNlQ29sb3IsdmVjMyBzcGVjdWxhckNvbG9yLGZsb2F0IHJhbmdlLGZsb2F0IGdsb3NzaW5lc3MpIHtsaWdodGluZ0luZm8gcmVzdWx0O3ZlYzMgbGlnaHRWZWN0b3JXO2Zsb2F0IGF0dGVudWF0aW9uPTEuMDtpZiAobGlnaHREYXRhLnc9PTAuKVxue3ZlYzMgZGlyZWN0aW9uPWxpZ2h0RGF0YS54eXotdlBvc2l0aW9uVzthdHRlbnVhdGlvbj1tYXgoMC4sMS4wLWxlbmd0aChkaXJlY3Rpb24pL3JhbmdlKTtsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7fVxuZWxzZVxue2xpZ2h0VmVjdG9yVz1ub3JtYWxpemUoLWxpZ2h0RGF0YS54eXopO31cbmZsb2F0IG5kbD1tYXgoMC4sZG90KHZOb3JtYWwsbGlnaHRWZWN0b3JXKSk7XG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9bmRsO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZT1uZGwqZGlmZnVzZUNvbG9yKmF0dGVudWF0aW9uO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMyBhbmdsZVc9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0VmVjdG9yVyk7ZmxvYXQgc3BlY0NvbXA9bWF4KDAuLGRvdCh2Tm9ybWFsLGFuZ2xlVykpO3NwZWNDb21wPXBvdyhzcGVjQ29tcCxtYXgoMS4sZ2xvc3NpbmVzcykpO3Jlc3VsdC5zcGVjdWxhcj1zcGVjQ29tcCpzcGVjdWxhckNvbG9yKmF0dGVudWF0aW9uO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmZsb2F0IGdldEF0dGVudWF0aW9uKGZsb2F0IGNvc0FuZ2xlLGZsb2F0IGV4cG9uZW50KSB7cmV0dXJuIG1heCgwLixwb3coY29zQW5nbGUsZXhwb25lbnQpKTt9XG5mbG9hdCBnZXRJRVNBdHRlbnVhdGlvbihmbG9hdCBjb3NBbmdsZSxzYW1wbGVyMkQgaWVzTGlnaHRTYW1wbGVyKSB7ZmxvYXQgYW5nbGU9YWNvcyhjb3NBbmdsZSkvUEk7cmV0dXJuIHRleHR1cmUyRChpZXNMaWdodFNhbXBsZXIsdmVjMihhbmdsZSwwLikpLnI7fVxubGlnaHRpbmdJbmZvIGJhc2ljU3BvdExpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyBsaWdodFZlY3RvclcsdmVjMyB2Tm9ybWFsLGZsb2F0IGF0dGVudWF0aW9uLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCBnbG9zc2luZXNzKSB7bGlnaHRpbmdJbmZvIHJlc3VsdDsgXG5mbG9hdCBuZGw9bWF4KDAuLGRvdCh2Tm9ybWFsLGxpZ2h0VmVjdG9yVykpO1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bmRsKmRpZmZ1c2VDb2xvciphdHRlbnVhdGlvbjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgYW5nbGVXPW5vcm1hbGl6ZSh2aWV3RGlyZWN0aW9uVytsaWdodFZlY3RvclcpO2Zsb2F0IHNwZWNDb21wPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvciphdHRlbnVhdGlvbjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5saWdodGluZ0luZm8gY29tcHV0ZUlFU1Nwb3RMaWdodGluZyh2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgdk5vcm1hbCx2ZWM0IGxpZ2h0RGF0YSx2ZWM0IGxpZ2h0RGlyZWN0aW9uLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcixmbG9hdCByYW5nZSxmbG9hdCBnbG9zc2luZXNzLHNhbXBsZXIyRCBpZXNMaWdodFNhbXBsZXIpIHsgXG52ZWMzIGRpcmVjdGlvbj1saWdodERhdGEueHl6LXZQb3NpdGlvblc7dmVjMyBsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7ZmxvYXQgYXR0ZW51YXRpb249bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7ZmxvYXQgZG90UHJvZHVjdD1kb3QobGlnaHREaXJlY3Rpb24ueHl6LC1saWdodFZlY3RvclcpO2Zsb2F0IGNvc0FuZ2xlPW1heCgwLixkb3RQcm9kdWN0KTtpZiAoY29zQW5nbGU+PWxpZ2h0RGlyZWN0aW9uLncpXG57IFxuYXR0ZW51YXRpb24qPWdldElFU0F0dGVudWF0aW9uKGRvdFByb2R1Y3QsaWVzTGlnaHRTYW1wbGVyKTtyZXR1cm4gYmFzaWNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbGlnaHRWZWN0b3JXLHZOb3JtYWwsYXR0ZW51YXRpb24sZGlmZnVzZUNvbG9yLHNwZWN1bGFyQ29sb3IsZ2xvc3NpbmVzcyk7fVxubGlnaHRpbmdJbmZvIHJlc3VsdDtyZXN1bHQuZGlmZnVzZT12ZWMzKDAuKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5zcGVjdWxhcj12ZWMzKDAuKTtcbiNlbmRpZlxuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPTAuO1xuI2VuZGlmXG5yZXR1cm4gcmVzdWx0O31cbmxpZ2h0aW5nSW5mbyBjb21wdXRlU3BvdExpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzQgbGlnaHREYXRhLHZlYzQgbGlnaHREaXJlY3Rpb24sdmVjMyBkaWZmdXNlQ29sb3IsdmVjMyBzcGVjdWxhckNvbG9yLGZsb2F0IHJhbmdlLGZsb2F0IGdsb3NzaW5lc3MpIHt2ZWMzIGRpcmVjdGlvbj1saWdodERhdGEueHl6LXZQb3NpdGlvblc7dmVjMyBsaWdodFZlY3Rvclc9bm9ybWFsaXplKGRpcmVjdGlvbik7ZmxvYXQgYXR0ZW51YXRpb249bWF4KDAuLDEuMC1sZW5ndGgoZGlyZWN0aW9uKS9yYW5nZSk7ZmxvYXQgY29zQW5nbGU9bWF4KDAuLGRvdChsaWdodERpcmVjdGlvbi54eXosLWxpZ2h0VmVjdG9yVykpO2lmIChjb3NBbmdsZT49bGlnaHREaXJlY3Rpb24udylcbnsgXG5hdHRlbnVhdGlvbio9Z2V0QXR0ZW51YXRpb24oY29zQW5nbGUsbGlnaHREYXRhLncpO3JldHVybiBiYXNpY1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxsaWdodFZlY3Rvclcsdk5vcm1hbCxhdHRlbnVhdGlvbixkaWZmdXNlQ29sb3Isc3BlY3VsYXJDb2xvcixnbG9zc2luZXNzKTt9XG5saWdodGluZ0luZm8gcmVzdWx0O3Jlc3VsdC5kaWZmdXNlPXZlYzMoMC4pO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyPXZlYzMoMC4pO1xuI2VuZGlmXG4jaWZkZWYgTkRPVExcbnJlc3VsdC5uZGw9MC47XG4jZW5kaWZcbnJldHVybiByZXN1bHQ7fVxubGlnaHRpbmdJbmZvIGNvbXB1dGVIZW1pc3BoZXJpY0xpZ2h0aW5nKHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzQgbGlnaHREYXRhLHZlYzMgZGlmZnVzZUNvbG9yLHZlYzMgc3BlY3VsYXJDb2xvcix2ZWMzIGdyb3VuZENvbG9yLGZsb2F0IGdsb3NzaW5lc3MpIHtsaWdodGluZ0luZm8gcmVzdWx0O2Zsb2F0IG5kbD1kb3Qodk5vcm1hbCxsaWdodERhdGEueHl6KSowLjUrMC41O1xuI2lmZGVmIE5ET1RMXG5yZXN1bHQubmRsPW5kbDtcbiNlbmRpZlxucmVzdWx0LmRpZmZ1c2U9bWl4KGdyb3VuZENvbG9yLGRpZmZ1c2VDb2xvcixuZGwpO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMyBhbmdsZVc9bm9ybWFsaXplKHZpZXdEaXJlY3Rpb25XK2xpZ2h0RGF0YS54eXopO2Zsb2F0IHNwZWNDb21wPW1heCgwLixkb3Qodk5vcm1hbCxhbmdsZVcpKTtzcGVjQ29tcD1wb3coc3BlY0NvbXAsbWF4KDEuLGdsb3NzaW5lc3MpKTtyZXN1bHQuc3BlY3VsYXI9c3BlY0NvbXAqc3BlY3VsYXJDb2xvcjtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG4jZGVmaW5lIGlubGluZVxudmVjMyBjb21wdXRlUHJvamVjdGlvblRleHR1cmVEaWZmdXNlTGlnaHRpbmcoc2FtcGxlcjJEIHByb2plY3Rpb25MaWdodFNhbXBsZXIsbWF0NCB0ZXh0dXJlUHJvamVjdGlvbk1hdHJpeCx2ZWMzIHBvc1cpe3ZlYzQgc3RycT10ZXh0dXJlUHJvamVjdGlvbk1hdHJpeCp2ZWM0KHBvc1csMS4wKTtzdHJxLz1zdHJxLnc7dmVjMyB0ZXh0dXJlQ29sb3I9dGV4dHVyZTJEKHByb2plY3Rpb25MaWdodFNhbXBsZXIsc3RycS54eSkucmdiO3JldHVybiB0ZXh0dXJlQ29sb3I7fVxuI2lmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG4jaW5jbHVkZTxsdGNIZWxwZXJGdW5jdGlvbnM+XG51bmlmb3JtIHNhbXBsZXIyRCBhcmVhTGlnaHRzTFRDMVNhbXBsZXI7dW5pZm9ybSBzYW1wbGVyMkQgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyO1xuI2RlZmluZSBpbmxpbmVcbmxpZ2h0aW5nSW5mbyBjb21wdXRlQXJlYUxpZ2h0aW5nKHNhbXBsZXIyRCBsdGMxLHNhbXBsZXIyRCBsdGMyLHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyB2Tm9ybWFsLHZlYzMgdlBvc2l0aW9uLHZlYzMgbGlnaHRQb3NpdGlvbix2ZWMzIGhhbGZXaWR0aCx2ZWMzIGhhbGZIZWlnaHQsdmVjMyBkaWZmdXNlQ29sb3IsdmVjMyBzcGVjdWxhckNvbG9yLGZsb2F0IHJvdWdobmVzcykgXG57bGlnaHRpbmdJbmZvIHJlc3VsdDthcmVhTGlnaHREYXRhIGRhdGE9Y29tcHV0ZUFyZWFMaWdodFNwZWN1bGFyRGlmZnVzZUZyZXNuZWwobHRjMSxsdGMyLHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsdlBvc2l0aW9uLGxpZ2h0UG9zaXRpb24saGFsZldpZHRoLGhhbGZIZWlnaHQscm91Z2huZXNzKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgZnJlc25lbD0oIHNwZWN1bGFyQ29sb3IqZGF0YS5GcmVzbmVsLngrKCB2ZWMzKCAxLjAgKS1zcGVjdWxhckNvbG9yICkqZGF0YS5GcmVzbmVsLnkgKTtyZXN1bHQuc3BlY3VsYXIrPXNwZWN1bGFyQ29sb3IqZnJlc25lbCpkYXRhLlNwZWN1bGFyO1xuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZSs9ZGlmZnVzZUNvbG9yKmRhdGEuRGlmZnVzZTtyZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG4jaW5jbHVkZTxjbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9ucz5cbiNkZWZpbmUgaW5saW5lXG5saWdodGluZ0luZm8gY29tcHV0ZUNsdXN0ZXJlZExpZ2h0aW5nKFxuc2FtcGxlcjJEIGxpZ2h0RGF0YVRleHR1cmUsXG5zYW1wbGVyMkQgdGlsZU1hc2tUZXh0dXJlLFxudmVjMyB2aWV3RGlyZWN0aW9uVyxcbnZlYzMgdk5vcm1hbCxcbnZlYzQgbGlnaHREYXRhLFxuaXZlYzIgc2xpY2VSYW5nZSxcbmZsb2F0IGdsb3NzaW5lc3Ncbikge2xpZ2h0aW5nSW5mbyByZXN1bHQ7aXZlYzIgdGlsZVBvc2l0aW9uPWl2ZWMyKGdsX0ZyYWdDb29yZC54eSpsaWdodERhdGEueHkpO2ludCBtYXNrSGVpZ2h0PWludChsaWdodERhdGEueik7dGlsZVBvc2l0aW9uLnk9bWluKHRpbGVQb3NpdGlvbi55LG1hc2tIZWlnaHQtMSk7aXZlYzIgYmF0Y2hSYW5nZT1zbGljZVJhbmdlL0NMVVNUTElHSFRfQkFUQ0g7aW50IGJhdGNoT2Zmc2V0PWJhdGNoUmFuZ2UueCpDTFVTVExJR0hUX0JBVENIO3RpbGVQb3NpdGlvbi55Kz1tYXNrSGVpZ2h0KmJhdGNoUmFuZ2UueDtmb3IgKGludCBpPWJhdGNoUmFuZ2UueDsgaTw9YmF0Y2hSYW5nZS55OyBpKz0xKSB7dWludCBtYXNrPXVpbnQodGV4ZWxGZXRjaCh0aWxlTWFza1RleHR1cmUsdGlsZVBvc2l0aW9uLDApLnIpO3RpbGVQb3NpdGlvbi55Kz1tYXNrSGVpZ2h0O2ludCBtYXNrT2Zmc2V0PW1heChzbGljZVJhbmdlLngtYmF0Y2hPZmZzZXQsMCk7aW50IG1hc2tXaWR0aD1taW4oc2xpY2VSYW5nZS55LWJhdGNoT2Zmc2V0KzEsQ0xVU1RMSUdIVF9CQVRDSCk7bWFzaz1leHRyYWN0Qml0cyhtYXNrLG1hc2tPZmZzZXQsbWFza1dpZHRoKTt3aGlsZSAobWFzayAhPSAwdSkge3VpbnQgYml0PW1hc2sgJiAtbWFzazttYXNrIF49IGJpdDtpbnQgcG9zaXRpb249b25seUJpdFBvc2l0aW9uKGJpdCk7Q2x1c3RlcmVkTGlnaHQgbGlnaHQ9Z2V0Q2x1c3RlcmVkTGlnaHQobGlnaHREYXRhVGV4dHVyZSxiYXRjaE9mZnNldCttYXNrT2Zmc2V0K3Bvc2l0aW9uKTtsaWdodGluZ0luZm8gaW5mbztpZiAobGlnaHQudkxpZ2h0RGlyZWN0aW9uLnc8MC4wKSB7aW5mbz1jb21wdXRlTGlnaHRpbmcodmlld0RpcmVjdGlvblcsdk5vcm1hbCxsaWdodC52TGlnaHREYXRhLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiLGxpZ2h0LnZMaWdodFNwZWN1bGFyLnJnYixsaWdodC52TGlnaHREaWZmdXNlLmEsZ2xvc3NpbmVzcyk7fSBlbHNlIHtpbmZvPWNvbXB1dGVTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsdk5vcm1hbCxsaWdodC52TGlnaHREYXRhLGxpZ2h0LnZMaWdodERpcmVjdGlvbixsaWdodC52TGlnaHREaWZmdXNlLnJnYixsaWdodC52TGlnaHRTcGVjdWxhci5yZ2IsbGlnaHQudkxpZ2h0RGlmZnVzZS5hLGdsb3NzaW5lc3MpO31cbnJlc3VsdC5kaWZmdXNlKz1pbmZvLmRpZmZ1c2U7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXIrPWluZm8uc3BlY3VsYXI7XG4jZW5kaWZcbn1cbmJhdGNoT2Zmc2V0Kz1DTFVTVExJR0hUX0JBVENIO31cbnJldHVybiByZXN1bHQ7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0c0ZyYWdtZW50RnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJyZWZsZWN0aW9uRnVuY3Rpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB2ZWMzIGNvbXB1dGVGaXhlZEVxdWlyZWN0YW5ndWxhckNvb3Jkcyh2ZWM0IHdvcmxkUG9zLHZlYzMgd29ybGROb3JtYWwsdmVjMyBkaXJlY3Rpb24pXG57ZmxvYXQgbG9uPWF0YW4oZGlyZWN0aW9uLnosZGlyZWN0aW9uLngpO2Zsb2F0IGxhdD1hY29zKGRpcmVjdGlvbi55KTt2ZWMyIHNwaGVyZUNvb3Jkcz12ZWMyKGxvbixsYXQpKlJFQ0lQUk9DQUxfUEkyKjIuMDtmbG9hdCBzPXNwaGVyZUNvb3Jkcy54KjAuNSswLjU7ZmxvYXQgdD1zcGhlcmVDb29yZHMueTtyZXR1cm4gdmVjMyhzLHQsMCk7IH1cbnZlYzMgY29tcHV0ZU1pcnJvcmVkRml4ZWRFcXVpcmVjdGFuZ3VsYXJDb29yZHModmVjNCB3b3JsZFBvcyx2ZWMzIHdvcmxkTm9ybWFsLHZlYzMgZGlyZWN0aW9uKVxue2Zsb2F0IGxvbj1hdGFuKGRpcmVjdGlvbi56LGRpcmVjdGlvbi54KTtmbG9hdCBsYXQ9YWNvcyhkaXJlY3Rpb24ueSk7dmVjMiBzcGhlcmVDb29yZHM9dmVjMihsb24sbGF0KSpSRUNJUFJPQ0FMX1BJMioyLjA7ZmxvYXQgcz1zcGhlcmVDb29yZHMueCowLjUrMC41O2Zsb2F0IHQ9c3BoZXJlQ29vcmRzLnk7cmV0dXJuIHZlYzMoMS4wLXMsdCwwKTsgfVxudmVjMyBjb21wdXRlRXF1aXJlY3Rhbmd1bGFyQ29vcmRzKHZlYzQgd29ybGRQb3MsdmVjMyB3b3JsZE5vcm1hbCx2ZWMzIGV5ZVBvc2l0aW9uLG1hdDQgcmVmbGVjdGlvbk1hdHJpeClcbnt2ZWMzIGNhbWVyYVRvVmVydGV4PW5vcm1hbGl6ZSh3b3JsZFBvcy54eXotZXllUG9zaXRpb24pO3ZlYzMgcj1ub3JtYWxpemUocmVmbGVjdChjYW1lcmFUb1ZlcnRleCx3b3JsZE5vcm1hbCkpO3I9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQociwwKSk7ZmxvYXQgbG9uPWF0YW4oci56LHIueCk7ZmxvYXQgbGF0PWFjb3Moci55KTt2ZWMyIHNwaGVyZUNvb3Jkcz12ZWMyKGxvbixsYXQpKlJFQ0lQUk9DQUxfUEkyKjIuMDtmbG9hdCBzPXNwaGVyZUNvb3Jkcy54KjAuNSswLjU7ZmxvYXQgdD1zcGhlcmVDb29yZHMueTtyZXR1cm4gdmVjMyhzLHQsMCk7fVxudmVjMyBjb21wdXRlU3BoZXJpY2FsQ29vcmRzKHZlYzQgd29ybGRQb3MsdmVjMyB3b3JsZE5vcm1hbCxtYXQ0IHZpZXcsbWF0NCByZWZsZWN0aW9uTWF0cml4KVxue3ZlYzMgdmlld0Rpcj1ub3JtYWxpemUodmVjMyh2aWV3KndvcmxkUG9zKSk7dmVjMyB2aWV3Tm9ybWFsPW5vcm1hbGl6ZSh2ZWMzKHZpZXcqdmVjNCh3b3JsZE5vcm1hbCwwLjApKSk7dmVjMyByPXJlZmxlY3Qodmlld0Rpcix2aWV3Tm9ybWFsKTtyPXZlYzMocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KHIsMCkpO3Iuej1yLnotMS4wO2Zsb2F0IG09Mi4wKmxlbmd0aChyKTtyZXR1cm4gdmVjMyhyLngvbSswLjUsMS4wLXIueS9tLTAuNSwwKTt9XG52ZWMzIGNvbXB1dGVQbGFuYXJDb29yZHModmVjNCB3b3JsZFBvcyx2ZWMzIHdvcmxkTm9ybWFsLHZlYzMgZXllUG9zaXRpb24sbWF0NCByZWZsZWN0aW9uTWF0cml4KVxue3ZlYzMgdmlld0Rpcj13b3JsZFBvcy54eXotZXllUG9zaXRpb247dmVjMyBjb29yZHM9bm9ybWFsaXplKHJlZmxlY3Qodmlld0Rpcix3b3JsZE5vcm1hbCkpO3JldHVybiB2ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChjb29yZHMsMSkpO31cbnZlYzMgY29tcHV0ZUN1YmljQ29vcmRzKHZlYzQgd29ybGRQb3MsdmVjMyB3b3JsZE5vcm1hbCx2ZWMzIGV5ZVBvc2l0aW9uLG1hdDQgcmVmbGVjdGlvbk1hdHJpeClcbnt2ZWMzIHZpZXdEaXI9bm9ybWFsaXplKHdvcmxkUG9zLnh5ei1leWVQb3NpdGlvbik7dmVjMyBjb29yZHM9cmVmbGVjdCh2aWV3RGlyLHdvcmxkTm9ybWFsKTtjb29yZHM9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQoY29vcmRzLDApKTtcbiNpZmRlZiBJTlZFUlRDVUJJQ01BUFxuY29vcmRzLnkqPS0xLjA7XG4jZW5kaWZcbnJldHVybiBjb29yZHM7fVxudmVjMyBjb21wdXRlQ3ViaWNMb2NhbENvb3Jkcyh2ZWM0IHdvcmxkUG9zLHZlYzMgd29ybGROb3JtYWwsdmVjMyBleWVQb3NpdGlvbixtYXQ0IHJlZmxlY3Rpb25NYXRyaXgsdmVjMyByZWZsZWN0aW9uU2l6ZSx2ZWMzIHJlZmxlY3Rpb25Qb3NpdGlvbilcbnt2ZWMzIHZpZXdEaXI9bm9ybWFsaXplKHdvcmxkUG9zLnh5ei1leWVQb3NpdGlvbik7dmVjMyBjb29yZHM9cmVmbGVjdCh2aWV3RGlyLHdvcmxkTm9ybWFsKTtjb29yZHM9cGFyYWxsYXhDb3JyZWN0Tm9ybWFsKHdvcmxkUG9zLnh5eixjb29yZHMscmVmbGVjdGlvblNpemUscmVmbGVjdGlvblBvc2l0aW9uKTtjb29yZHM9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQoY29vcmRzLDApKTtcbiNpZmRlZiBJTlZFUlRDVUJJQ01BUFxuY29vcmRzLnkqPS0xLjA7XG4jZW5kaWZcbnJldHVybiBjb29yZHM7fVxudmVjMyBjb21wdXRlUHJvamVjdGlvbkNvb3Jkcyh2ZWM0IHdvcmxkUG9zLG1hdDQgdmlldyxtYXQ0IHJlZmxlY3Rpb25NYXRyaXgpXG57cmV0dXJuIHZlYzMocmVmbGVjdGlvbk1hdHJpeCoodmlldyp3b3JsZFBvcykpO31cbnZlYzMgY29tcHV0ZVNreUJveENvb3Jkcyh2ZWMzIHBvc2l0aW9uVyxtYXQ0IHJlZmxlY3Rpb25NYXRyaXgpXG57cmV0dXJuIHZlYzMocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KHBvc2l0aW9uVywxLikpO31cbiNpZmRlZiBSRUZMRUNUSU9OXG52ZWMzIGNvbXB1dGVSZWZsZWN0aW9uQ29vcmRzKHZlYzQgd29ybGRQb3MsdmVjMyB3b3JsZE5vcm1hbClcbntcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEXG52ZWMzIGRpcmVjdGlvbj1ub3JtYWxpemUodkRpcmVjdGlvblcpO3JldHVybiBjb21wdXRlTWlycm9yZWRGaXhlZEVxdWlyZWN0YW5ndWxhckNvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCxkaXJlY3Rpb24pO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRURcbnZlYzMgZGlyZWN0aW9uPW5vcm1hbGl6ZSh2RGlyZWN0aW9uVyk7cmV0dXJuIGNvbXB1dGVGaXhlZEVxdWlyZWN0YW5ndWxhckNvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCxkaXJlY3Rpb24pO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJcbnJldHVybiBjb21wdXRlRXF1aXJlY3Rhbmd1bGFyQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLHZFeWVQb3NpdGlvbi54eXoscmVmbGVjdGlvbk1hdHJpeCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NQSEVSSUNBTFxucmV0dXJuIGNvbXB1dGVTcGhlcmljYWxDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsdmlldyxyZWZsZWN0aW9uTWF0cml4KTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfUExBTkFSXG5yZXR1cm4gY29tcHV0ZVBsYW5hckNvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCx2RXllUG9zaXRpb24ueHl6LHJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9DVUJJQ1xuI2lmZGVmIFVTRV9MT0NBTF9SRUZMRUNUSU9OTUFQX0NVQklDXG5yZXR1cm4gY29tcHV0ZUN1YmljTG9jYWxDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsdkV5ZVBvc2l0aW9uLnh5eixyZWZsZWN0aW9uTWF0cml4LHZSZWZsZWN0aW9uU2l6ZSx2UmVmbGVjdGlvblBvc2l0aW9uKTtcbiNlbHNlXG5yZXR1cm4gY29tcHV0ZUN1YmljQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLHZFeWVQb3NpdGlvbi54eXoscmVmbGVjdGlvbk1hdHJpeCk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfUFJPSkVDVElPTlxucmV0dXJuIGNvbXB1dGVQcm9qZWN0aW9uQ29vcmRzKHdvcmxkUG9zLHZpZXcscmVmbGVjdGlvbk1hdHJpeCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxucmV0dXJuIGNvbXB1dGVTa3lCb3hDb29yZHModlBvc2l0aW9uVVZXLHJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9FWFBMSUNJVFxucmV0dXJuIHZlYzMoMCwwLDApO1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcmVmbGVjdGlvbkZ1bmN0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWNrZ3JvdW5kRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWNrZ3JvdW5kVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3JlZmxlY3Rpb25GdW5jdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodHNGcmFnbWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ludGVyc2VjdGlvbkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwiYmFja2dyb3VuZFBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFRFWFRVUkVMT0RTVVBQT1JUXG4jZXh0ZW5zaW9uIEdMX0VYVF9zaGFkZXJfdGV4dHVyZV9sb2QgOiBlbmFibGVcbiNlbmRpZlxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuI2luY2x1ZGU8X19kZWNsX19iYWNrZ3JvdW5kRnJhZ21lbnQ+XG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uVztcbiNpZmRlZiBNQUlOVVYxXG52YXJ5aW5nIHZlYzIgdk1haW5VVjE7XG4jZW5kaWYgXG4jaWZkZWYgTUFJTlVWMiBcbnZhcnlpbmcgdmVjMiB2TWFpblVWMjsgXG4jZW5kaWYgXG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZlYzMgdk5vcm1hbFc7XG4jZW5kaWZcbiNpZmRlZiBESUZGVVNFXG4jaWYgRElGRlVTRURJUkVDVFVWPT0xXG4jZGVmaW5lIHZEaWZmdXNlVVYgdk1haW5VVjFcbiNlbGlmIERJRkZVU0VESVJFQ1RVVj09MlxuI2RlZmluZSB2RGlmZnVzZVVWIHZNYWluVVYyXG4jZWxzZVxudmFyeWluZyB2ZWMyIHZEaWZmdXNlVVY7XG4jZW5kaWZcbnVuaWZvcm0gc2FtcGxlcjJEIGRpZmZ1c2VTYW1wbGVyO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbiNkZWZpbmUgc2FtcGxlUmVmbGVjdGlvbihzLGMpIHRleHR1cmVDdWJlKHMsYylcbnVuaWZvcm0gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXI7XG4jaWZkZWYgVEVYVFVSRUxPRFNVUFBPUlRcbiNkZWZpbmUgc2FtcGxlUmVmbGVjdGlvbkxvZChzLGMsbCkgdGV4dHVyZUN1YmVMb2RFWFQocyxjLGwpXG4jZWxzZVxudW5pZm9ybSBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlckxvdzt1bmlmb3JtIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVySGlnaDtcbiNlbmRpZlxuI2Vsc2VcbiNkZWZpbmUgc2FtcGxlUmVmbGVjdGlvbihzLGMpIHRleHR1cmUyRChzLGMpXG51bmlmb3JtIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlcjtcbiNpZmRlZiBURVhUVVJFTE9EU1VQUE9SVFxuI2RlZmluZSBzYW1wbGVSZWZsZWN0aW9uTG9kKHMsYyxsKSB0ZXh0dXJlMkRMb2RFWFQocyxjLGwpXG4jZWxzZVxudW5pZm9ybSBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlckxvdzt1bmlmb3JtIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVySGlnaDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb25VVlc7XG4jZWxzZVxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZhcnlpbmcgdmVjMyB2RGlyZWN0aW9uVztcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxyZWZsZWN0aW9uRnVuY3Rpb24+XG4jZW5kaWZcbiNpZm5kZWYgRlJPTUxJTkVBUlNQQUNFXG4jZGVmaW5lIEZST01MSU5FQVJTUEFDRTtcbiNlbmRpZlxuI2lmbmRlZiBTSEFET1dPTkxZXG4jZGVmaW5lIFNIQURPV09OTFk7XG4jZW5kaWZcbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxsaWdodHNGcmFnbWVudEZ1bmN0aW9ucz5cbiNpbmNsdWRlPHNoYWRvd3NGcmFnbWVudEZ1bmN0aW9ucz5cbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucz5cbiNpZmRlZiBMT0dBUklUSE1JQ0RFUFRIXG4jZXh0ZW5zaW9uIEdMX0VYVF9mcmFnX2RlcHRoIDogZW5hYmxlXG4jZW5kaWZcbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTFxuI2RlZmluZSBGUkVTTkVMX01BWElNVU1fT05fUk9VR0ggMC4yNVxudmVjMyBmcmVzbmVsU2NobGlja0Vudmlyb25tZW50R0dYKGZsb2F0IFZkb3ROLHZlYzMgcmVmbGVjdGFuY2UwLHZlYzMgcmVmbGVjdGFuY2U5MCxmbG9hdCBzbW9vdGhuZXNzKVxue2Zsb2F0IHdlaWdodD1taXgoRlJFU05FTF9NQVhJTVVNX09OX1JPVUdILDEuMCxzbW9vdGhuZXNzKTtyZXR1cm4gcmVmbGVjdGFuY2UwK3dlaWdodCoocmVmbGVjdGFuY2U5MC1yZWZsZWN0YW5jZTApKnBvdzUoc2F0dXJhdGUoMS4wLVZkb3ROKSk7fVxuI2VuZGlmXG4jaWZkZWYgUFJPSkVDVEVEX0dST1VORFxuI2luY2x1ZGU8aW50ZXJzZWN0aW9uRnVuY3Rpb25zPlxudmVjMyBwcm9qZWN0KHZlYzMgdmlld0RpcmVjdGlvblcsdmVjMyBleWVQb3NpdGlvbikge2Zsb2F0IHJhZGl1cz1wcm9qZWN0ZWRHcm91bmRJbmZvcy54O2Zsb2F0IGhlaWdodD1wcm9qZWN0ZWRHcm91bmRJbmZvcy55O3ZlYzMgY2FtRGlyPS12aWV3RGlyZWN0aW9uVztmbG9hdCBza3lTcGhlcmVEaXN0YW5jZT1zcGhlcmVJbnRlcnNlY3RGcm9tT3JpZ2luKGV5ZVBvc2l0aW9uLGNhbURpcixyYWRpdXMpLng7dmVjMyBza3lTcGhlcmVQb3NpdGlvblc9ZXllUG9zaXRpb24rY2FtRGlyKnNreVNwaGVyZURpc3RhbmNlO3ZlYzMgcD1ub3JtYWxpemUoc2t5U3BoZXJlUG9zaXRpb25XKTtleWVQb3NpdGlvbi55LT1oZWlnaHQ7ZmxvYXQgc0ludGVyc2VjdGlvbj1zcGhlcmVJbnRlcnNlY3RGcm9tT3JpZ2luKGV5ZVBvc2l0aW9uLHAscmFkaXVzKS54O3ZlYzMgaD12ZWMzKDAuMCwtaGVpZ2h0LDAuMCk7ZmxvYXQgZEludGVyc2VjdGlvbj1kaXNrSW50ZXJzZWN0V2l0aEJhY2tGYWNlQ3VsbGluZyhleWVQb3NpdGlvbixwLGgscmFkaXVzKTtwPShleWVQb3NpdGlvbittaW4oc0ludGVyc2VjdGlvbixkSW50ZXJzZWN0aW9uKSpwKTtyZXR1cm4gcDt9XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9CRUdJTlxuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnQ+XG52ZWMzIHZpZXdEaXJlY3Rpb25XPW5vcm1hbGl6ZSh2RXllUG9zaXRpb24ueHl6LXZQb3NpdGlvblcpO1xuI2lmZGVmIE5PUk1BTFxudmVjMyBub3JtYWxXPW5vcm1hbGl6ZSh2Tm9ybWFsVyk7XG4jZWxzZVxudmVjMyBub3JtYWxXPXZlYzMoMC4wLDEuMCwwLjApO1xuI2VuZGlmXG5mbG9hdCBzaGFkb3c9MS47ZmxvYXQgZ2xvYmFsU2hhZG93PTAuO2Zsb2F0IHNoYWRvd0xpZ2h0Q291bnQ9MC47ZmxvYXQgYWdnU2hhZG93PTAuO2Zsb2F0IG51bUxpZ2h0cz0wLjtcbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpZmRlZiBTSEFET1dJTlVTRVxuZ2xvYmFsU2hhZG93Lz1zaGFkb3dMaWdodENvdW50O1xuI2Vsc2Vcbmdsb2JhbFNoYWRvdz0xLjA7XG4jZW5kaWZcbiNpZm5kZWYgQkFDS01BVF9TSEFET1dPTkxZXG52ZWM0IHJlZmxlY3Rpb25Db2xvcj12ZWM0KDEuLDEuLDEuLDEuKTtcbiNpZmRlZiBSRUZMRUNUSU9OXG4jaWZkZWYgUFJPSkVDVEVEX0dST1VORFxudmVjMyByZWZsZWN0aW9uVmVjdG9yPXByb2plY3Qodmlld0RpcmVjdGlvblcsdkV5ZVBvc2l0aW9uLnh5eik7cmVmbGVjdGlvblZlY3Rvcj12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChyZWZsZWN0aW9uVmVjdG9yLDEuKSk7XG4jZWxzZVxudmVjMyByZWZsZWN0aW9uVmVjdG9yPWNvbXB1dGVSZWZsZWN0aW9uQ29vcmRzKHZlYzQodlBvc2l0aW9uVywxLjApLG5vcm1hbFcpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbnJlZmxlY3Rpb25WZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZlYzMgcmVmbGVjdGlvbkNvb3Jkcz1yZWZsZWN0aW9uVmVjdG9yO1xuI2Vsc2VcbnZlYzIgcmVmbGVjdGlvbkNvb3Jkcz1yZWZsZWN0aW9uVmVjdG9yLnh5O1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfUFJPSkVDVElPTlxucmVmbGVjdGlvbkNvb3Jkcy89cmVmbGVjdGlvblZlY3Rvci56O1xuI2VuZGlmXG5yZWZsZWN0aW9uQ29vcmRzLnk9MS4wLXJlZmxlY3Rpb25Db29yZHMueTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05CTFVSXG5mbG9hdCByZWZsZWN0aW9uTE9EPXZSZWZsZWN0aW9uSW5mb3MueTtcbiNpZmRlZiBURVhUVVJFTE9EU1VQUE9SVFxucmVmbGVjdGlvbkxPRD1yZWZsZWN0aW9uTE9EKmxvZzIodlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54KSp2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnkrdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy56O3JlZmxlY3Rpb25Db2xvcj1zYW1wbGVSZWZsZWN0aW9uTG9kKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMscmVmbGVjdGlvbkxPRCk7XG4jZWxzZVxuZmxvYXQgbG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWQ9c2F0dXJhdGUocmVmbGVjdGlvbkxPRCk7ZmxvYXQgbG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkPWxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkKjIuMDt2ZWM0IHJlZmxlY3Rpb25TcGVjdWxhck1pZD1zYW1wbGVSZWZsZWN0aW9uKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMpO2lmKGxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkRG91YmxlZDwxLjApe3JlZmxlY3Rpb25Db2xvcj1taXgoXG5zYW1wbGVSZWZsZWN0aW9uKHJlZmxlY3Rpb25TYW1wbGVySGlnaCxyZWZsZWN0aW9uQ29vcmRzKSxcbnJlZmxlY3Rpb25TcGVjdWxhck1pZCxcbmxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkRG91YmxlZFxuKTt9IGVsc2Uge3JlZmxlY3Rpb25Db2xvcj1taXgoXG5yZWZsZWN0aW9uU3BlY3VsYXJNaWQsXG5zYW1wbGVSZWZsZWN0aW9uKHJlZmxlY3Rpb25TYW1wbGVyTG93LHJlZmxlY3Rpb25Db29yZHMpLFxubG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkLTEuMFxuKTt9XG4jZW5kaWZcbiNlbHNlXG52ZWM0IHJlZmxlY3Rpb25TYW1wbGU9c2FtcGxlUmVmbGVjdGlvbihyZWZsZWN0aW9uU2FtcGxlcixyZWZsZWN0aW9uQ29vcmRzKTtyZWZsZWN0aW9uQ29sb3I9cmVmbGVjdGlvblNhbXBsZTtcbiNlbmRpZlxuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5yZWZsZWN0aW9uQ29sb3IucmdiPWZyb21SR0JEKHJlZmxlY3Rpb25Db2xvcik7XG4jZW5kaWZcbiNpZmRlZiBHQU1NQVJFRkxFQ1RJT05cbnJlZmxlY3Rpb25Db2xvci5yZ2I9dG9MaW5lYXJTcGFjZShyZWZsZWN0aW9uQ29sb3IucmdiKTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05CR1JcbnJlZmxlY3Rpb25Db2xvci5yZ2I9cmVmbGVjdGlvbkNvbG9yLmJncjtcbiNlbmRpZlxucmVmbGVjdGlvbkNvbG9yLnJnYio9dlJlZmxlY3Rpb25JbmZvcy54O1xuI2VuZGlmXG52ZWMzIGRpZmZ1c2VDb2xvcj12ZWMzKDEuLDEuLDEuKTtmbG9hdCBmaW5hbEFscGhhPWFscGhhO1xuI2lmZGVmIERJRkZVU0VcbnZlYzQgZGlmZnVzZU1hcD10ZXh0dXJlMkQoZGlmZnVzZVNhbXBsZXIsdkRpZmZ1c2VVVik7XG4jaWZkZWYgR0FNTUFESUZGVVNFXG5kaWZmdXNlTWFwLnJnYj10b0xpbmVhclNwYWNlKGRpZmZ1c2VNYXAucmdiKTtcbiNlbmRpZlxuZGlmZnVzZU1hcC5yZ2IqPXZEaWZmdXNlSW5mb3MueTtcbiNpZmRlZiBESUZGVVNFSEFTQUxQSEFcbmZpbmFsQWxwaGEqPWRpZmZ1c2VNYXAuYTtcbiNlbmRpZlxuZGlmZnVzZUNvbG9yPWRpZmZ1c2VNYXAucmdiO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTkZSRVNORUxcbnZlYzMgY29sb3JCYXNlPWRpZmZ1c2VDb2xvcjtcbiNlbHNlXG52ZWMzIGNvbG9yQmFzZT1yZWZsZWN0aW9uQ29sb3IucmdiKmRpZmZ1c2VDb2xvcjtcbiNlbmRpZlxuY29sb3JCYXNlPW1heChjb2xvckJhc2UsMC4wKTtcbiNpZmRlZiBVU0VSR0JDT0xPUlxudmVjMyBmaW5hbENvbG9yPWNvbG9yQmFzZTtcbiNlbHNlXG4jaWZkZWYgVVNFSElHSExJR0hUQU5EU0hBRE9XQ09MT1JTXG52ZWMzIG1haW5Db2xvcj1taXgodlByaW1hcnlDb2xvclNoYWRvdy5yZ2IsdlByaW1hcnlDb2xvci5yZ2IsY29sb3JCYXNlKTtcbiNlbHNlXG52ZWMzIG1haW5Db2xvcj12UHJpbWFyeUNvbG9yLnJnYjtcbiNlbmRpZlxudmVjMyBmaW5hbENvbG9yPWNvbG9yQmFzZSptYWluQ29sb3I7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9ORlJFU05FTFxudmVjMyByZWZsZWN0aW9uQW1vdW50PXZSZWZsZWN0aW9uQ29udHJvbC54eHg7dmVjMyByZWZsZWN0aW9uUmVmbGVjdGFuY2UwPXZSZWZsZWN0aW9uQ29udHJvbC55eXk7dmVjMyByZWZsZWN0aW9uUmVmbGVjdGFuY2U5MD12UmVmbGVjdGlvbkNvbnRyb2wuenp6O2Zsb2F0IFZkb3ROPWRvdChub3JtYWxpemUodkV5ZVBvc2l0aW9uLnh5eiksbm9ybWFsVyk7dmVjMyBwbGFuYXJSZWZsZWN0aW9uRnJlc25lbD1mcmVzbmVsU2NobGlja0Vudmlyb25tZW50R0dYKHNhdHVyYXRlKFZkb3ROKSxyZWZsZWN0aW9uUmVmbGVjdGFuY2UwLHJlZmxlY3Rpb25SZWZsZWN0YW5jZTkwLDEuMCk7cmVmbGVjdGlvbkFtb3VudCo9cGxhbmFyUmVmbGVjdGlvbkZyZXNuZWw7XG4jaWZkZWYgUkVGTEVDVElPTkZBTExPRkZcbmZsb2F0IHJlZmxlY3Rpb25EaXN0YW5jZUZhbGxvZmY9MS4wLXNhdHVyYXRlKGxlbmd0aCh2UG9zaXRpb25XLnh5ei12QmFja2dyb3VuZENlbnRlcikqdlJlZmxlY3Rpb25Db250cm9sLncpO3JlZmxlY3Rpb25EaXN0YW5jZUZhbGxvZmYqPXJlZmxlY3Rpb25EaXN0YW5jZUZhbGxvZmY7cmVmbGVjdGlvbkFtb3VudCo9cmVmbGVjdGlvbkRpc3RhbmNlRmFsbG9mZjtcbiNlbmRpZlxuZmluYWxDb2xvcj1taXgoZmluYWxDb2xvcixyZWZsZWN0aW9uQ29sb3IucmdiLHNhdHVyYXRlKHJlZmxlY3Rpb25BbW91bnQpKTtcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlGUkVTTkVMXG5mbG9hdCB2aWV3QW5nbGVUb0Zsb29yPWRvdChub3JtYWxXLG5vcm1hbGl6ZSh2RXllUG9zaXRpb24ueHl6LXZCYWNrZ3JvdW5kQ2VudGVyKSk7Y29uc3QgZmxvYXQgc3RhcnRBbmdsZT0wLjE7ZmxvYXQgZmFkZUZhY3Rvcj1zYXR1cmF0ZSh2aWV3QW5nbGVUb0Zsb29yL3N0YXJ0QW5nbGUpO2ZpbmFsQWxwaGEqPWZhZGVGYWN0b3IqZmFkZUZhY3RvcjtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0lOVVNFXG5maW5hbENvbG9yPW1peChmaW5hbENvbG9yKnNoYWRvd0xldmVsLGZpbmFsQ29sb3IsZ2xvYmFsU2hhZG93KTtcbiNlbmRpZlxudmVjNCBjb2xvcj12ZWM0KGZpbmFsQ29sb3IsZmluYWxBbHBoYSk7XG4jZWxzZVxudmVjNCBjb2xvcj12ZWM0KHZQcmltYXJ5Q29sb3IucmdiLCgxLjAtY2xhbXAoZ2xvYmFsU2hhZG93LDAuLDEuKSkqYWxwaGEpO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aEZyYWdtZW50PlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnQ+XG4jaWZkZWYgSU1BR0VQUk9DRVNTSU5HUE9TVFBST0NFU1NcbiNpZiAhZGVmaW5lZChTS0lQRklOQUxDT0xPUkNMQU1QKVxuY29sb3IucmdiPWNsYW1wKGNvbG9yLnJnYiwwLiwzMC4wKTtcbiNlbmRpZlxuI2Vsc2VcbmNvbG9yPWFwcGx5SW1hZ2VQcm9jZXNzaW5nKGNvbG9yKTtcbiNlbmRpZlxuI2lmZGVmIFBSRU1VTFRJUExZQUxQSEFcbmNvbG9yLnJnYio9Y29sb3IuYTtcbiNlbmRpZlxuI2lmZGVmIE5PSVNFXG5jb2xvci5yZ2IrPWRpdGhlcih2UG9zaXRpb25XLnh5LDAuNSk7Y29sb3I9bWF4KGNvbG9yLDAuMCk7XG4jZW5kaWZcbmdsX0ZyYWdDb2xvcj1jb2xvcjtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZFBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==