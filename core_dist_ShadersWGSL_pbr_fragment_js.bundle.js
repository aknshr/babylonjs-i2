"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_pbr_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAlbedoOpacity.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAlbedoOpacity.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAlbedoOpacityWGSL: () => (/* binding */ pbrBlockAlbedoOpacityWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalFragment */ "../core/dist/ShadersWGSL/ShadersInclude/decalFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrBlockAlbedoOpacity";
const shader = `struct albedoOpacityOutParams
{surfaceAlbedo: vec3f,
alpha: f32};
#define pbr_inline
fn albedoOpacityBlock(
vAlbedoColor: vec4f
#ifdef ALBEDO
,albedoTexture: vec4f
,albedoInfos: vec2f
#endif
,baseWeight: f32
#ifdef BASE_WEIGHT
,baseWeightTexture: vec4f
,vBaseWeightInfos: vec2f
#endif
#ifdef OPACITY
,opacityMap: vec4f
,vOpacityInfos: vec2f
#endif
#ifdef DETAIL
,detailColor: vec4f
,vDetailInfos: vec4f
#endif
#ifdef DECAL
,decalColor: vec4f
,vDecalInfos: vec4f
#endif
)->albedoOpacityOutParams
{var outParams: albedoOpacityOutParams;var surfaceAlbedo: vec3f=vAlbedoColor.rgb;var alpha: f32=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpaceVec3(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#ifndef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
surfaceAlbedo*=fragmentInputs.vColor.rgb;
#endif
#ifdef DETAIL
var detailAlbedo: f32=2.0*mix(0.5,detailColor.r,vDetailInfos.y);surfaceAlbedo=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo; 
#endif
#ifdef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALBEDO
surfaceAlbedo*=baseWeight;
#ifdef BASE_WEIGHT
surfaceAlbedo*=baseWeightTexture.r;
#endif
#ifdef OPACITY
#ifdef OPACITYRGB
alpha=getLuminance(opacityMap.rgb);
#else
alpha*=opacityMap.a;
#endif
alpha*=vOpacityInfos.y;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.alpha=alpha;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockAlbedoOpacityWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAlphaFresnel.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAlphaFresnel.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAlphaFresnelWGSL: () => (/* binding */ pbrBlockAlphaFresnelWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockAlphaFresnel";
const shader = `#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{alpha: f32};fn faceforward(N: vec3<f32>,I: vec3<f32>,Nref: vec3<f32>)->vec3<f32> {return select(N,-N,dot(Nref,I)>0.0);}
#define pbr_inline
fn alphaFresnelBlock(
normalW: vec3f,
viewDirectionW: vec3f,
alpha: f32,
microSurface: f32
)->alphaFresnelOutParams
{var outParams: alphaFresnelOutParams;var opacityPerceptual: f32=alpha;
#ifdef LINEARALPHAFRESNEL
var opacity0: f32=opacityPerceptual;
#else
var opacity0: f32=opacityPerceptual*opacityPerceptual;
#endif
var opacity90: f32=fresnelGrazingReflectance(opacity0);var normalForward: vec3f=faceforward(normalW,-viewDirectionW,normalW);outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)), vec3f(opacity0), vec3f(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE) {discard;}
#ifndef ALPHABLEND
outParams.alpha=1.0;
#endif
#endif
return outParams;}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockAlphaFresnelWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAmbientOcclusion.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAmbientOcclusion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAmbientOcclusionWGSL: () => (/* binding */ pbrBlockAmbientOcclusionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockAmbientOcclusion";
const shader = `struct ambientOcclusionOutParams
{ambientOcclusionColor: vec3f,
#if DEBUGMODE>0 && defined(AMBIENT)
ambientOcclusionColorMap: vec3f
#endif
};
#define pbr_inline
fn ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap_: vec3f,
vAmbientInfos: vec4f
#endif
)->ambientOcclusionOutParams
{ 
var outParams: ambientOcclusionOutParams;var ambientOcclusionColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
var ambientOcclusionColorMap: vec3f=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap= vec3f(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockAmbientOcclusionWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAnisotropic.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAnisotropic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAnisotropicWGSL: () => (/* binding */ pbrBlockAnisotropicWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockAnisotropic";
const shader = `#ifdef ANISOTROPIC
struct anisotropicOutParams
{anisotropy: f32,
anisotropicTangent: vec3f,
anisotropicBitangent: vec3f,
anisotropicNormal: vec3f,
#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)
anisotropyMapData: vec3f
#endif
};
#define pbr_inline
fn anisotropicBlock(
vAnisotropy: vec3f,
roughness: f32,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData: vec3f,
#endif
TBN: mat3x3f,
normalW: vec3f,
viewDirectionW: vec3f
)->anisotropicOutParams
{ 
var outParams: anisotropicOutParams;var anisotropy: f32=vAnisotropy.b;var anisotropyDirection: vec3f= vec3f(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
var amd=anisotropyMapData.rg;anisotropy*=anisotropyMapData.b;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
amd=amd*2.0-1.0;
#ifdef ANISOTROPIC_LEGACY
anisotropyDirection=vec3f(anisotropyDirection.xy*amd,anisotropyDirection.z);
#else
anisotropyDirection=vec3f(mat2x2f(anisotropyDirection.x,anisotropyDirection.y,-anisotropyDirection.y,anisotropyDirection.x)*normalize(amd),anisotropyDirection.z);
#endif
#endif
var anisoTBN: mat3x3f= mat3x3f(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));var anisotropicTangent: vec3f=normalize(anisoTBN*anisotropyDirection);var anisotropicBitangent: vec3f=normalize(cross(anisoTBN[2],anisotropicTangent));outParams.anisotropy=anisotropy;outParams.anisotropicTangent=anisotropicTangent;outParams.anisotropicBitangent=anisotropicBitangent;outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy,roughness);return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockAnisotropicWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockClearcoat.js":
/*!********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockClearcoat.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockClearcoatWGSL: () => (/* binding */ pbrBlockClearcoatWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockClearcoat";
const shader = `struct clearcoatOutParams
{specularEnvironmentR0: vec3f,
conservationFactor: f32,
clearCoatNormalW: vec3f,
clearCoatAARoughnessFactors: vec2f,
clearCoatIntensity: f32,
clearCoatRoughness: f32,
#ifdef REFLECTION
finalClearCoatRadianceScaled: vec3f,
#endif
#ifdef CLEARCOAT_TINT
absorption: vec3f,
clearCoatNdotVRefract: f32,
clearCoatColor: vec3f,
clearCoatThickness: f32,
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
energyConservationFactorClearCoat: vec3f,
#endif
#if DEBUGMODE>0
#ifdef CLEARCOAT_BUMP
TBNClearCoat: mat3x3f,
#endif
#ifdef CLEARCOAT_TEXTURE
clearCoatMapData: vec2f,
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
clearCoatTintMapData: vec4f,
#endif
#ifdef REFLECTION
environmentClearCoatRadiance: vec4f,
clearCoatEnvironmentReflectance: vec3f,
#endif
clearCoatNdotV: f32
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
fn clearcoatBlock(
vPositionW: vec3f
,geometricNormalW: vec3f
,viewDirectionW: vec3f
,vClearCoatParams: vec2f
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData: vec4f
#endif
,specularEnvironmentR0: vec3f
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData: vec2f
#endif
#ifdef CLEARCOAT_TINT
,vClearCoatTintParams: vec4f
,clearCoatColorAtDistance: f32
,vClearCoatRefractionParams: vec4f
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData: vec4f
#endif
#endif
#ifdef CLEARCOAT_BUMP
,vClearCoatBumpInfos: vec2f
,clearCoatBumpMapData: vec4f
,vClearCoatBumpUV: vec2f
#if defined(TANGENT) && defined(NORMAL)
,vTBN: mat3x3f
#else
,vClearCoatTangentSpaceParams: vec2f
#endif
#ifdef OBJECTSPACE_NORMALMAP
,normalMatrix: mat4x4f
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal: vec3f
#endif
#ifdef REFLECTION
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
,vLightingIntensity: vec4f
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler 
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler 
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,frontFacingMultiplier: f32
#endif 
)->clearcoatOutParams
{var outParams: clearcoatOutParams;var clearCoatIntensity: f32=vClearCoatParams.x;var clearCoatRoughness: f32=vClearCoatParams.y;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#ifdef CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE
clearCoatRoughness*=clearCoatMapData.y;
#endif
#if DEBUGMODE>0
outParams.clearCoatMapData=clearCoatMapData;
#endif
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
clearCoatRoughness*=clearCoatMapRoughnessData.y;
#endif
outParams.clearCoatIntensity=clearCoatIntensity;outParams.clearCoatRoughness=clearCoatRoughness;
#ifdef CLEARCOAT_TINT
var clearCoatColor: vec3f=vClearCoatTintParams.rgb;var clearCoatThickness: f32=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
#ifdef CLEARCOAT_TINT_GAMMATEXTURE
clearCoatColor*=toLinearSpaceVec3(clearCoatTintMapData.rgb);
#else
clearCoatColor*=clearCoatTintMapData.rgb;
#endif
clearCoatThickness*=clearCoatTintMapData.a;
#if DEBUGMODE>0
outParams.clearCoatTintMapData=clearCoatTintMapData;
#endif
#endif
outParams.clearCoatColor=computeColorAtDistanceInMedia(clearCoatColor,clearCoatColorAtDistance);outParams.clearCoatThickness=clearCoatThickness;
#endif
#ifdef CLEARCOAT_REMAP_F0
var specularEnvironmentR0Updated: vec3f=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
var specularEnvironmentR0Updated: vec3f=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);var clearCoatNormalW: vec3f=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
var clearCoatNormalScale: f32=1.0;
#else
var clearCoatNormalScale: f32=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
var TBNClearCoat: mat3x3f=vTBN;
#else
var TBNClearCoatUV: vec2f=vClearCoatBumpUV*frontFacingMultiplier;var TBNClearCoat: mat3x3f=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz *2.0-1.0);clearCoatNormalW=normalize( mat3x3f(normalMatrix[0].xyz,normalMatrix[1].xyz,normalMatrix[2].xyz)*clearCoatNormalW);
#else
clearCoatNormalW=perturbNormal(TBNClearCoat,clearCoatBumpMapData.xyz,vClearCoatBumpInfos.y);
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
clearCoatNormalW*=sign(dot(clearCoatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
clearCoatNormalW=clearCoatNormalW*frontFacingMultiplier;
#endif
outParams.clearCoatNormalW=clearCoatNormalW;outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);var clearCoatNdotVUnclamped: f32=dot(clearCoatNormalW,viewDirectionW);var clearCoatNdotV: f32=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT
var clearCoatVRefract: vec3f=refract(-viewDirectionW,clearCoatNormalW,vClearCoatRefractionParams.y);outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))
var environmentClearCoatBrdf: vec3f=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif
#if defined(REFLECTION)
var clearCoatAlphaG: f32=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA
clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
var environmentClearCoatRadiance: vec4f= vec4f(0.,0.,0.,0.);var clearCoatReflectionVector: vec3f=computeReflectionCoords( vec4f(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
var clearCoatReflectionCoords: vec3f=clearCoatReflectionVector;
#else
var clearCoatReflectionCoords: vec2f=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
environmentClearCoatRadiance=sampleReflectionTexture(
clearCoatAlphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,clearCoatNdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,clearCoatRoughness
#endif
,reflectionSampler
,reflectionSamplerSampler
,clearCoatReflectionCoords
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif 
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
var clearCoatEnvironmentReflectance: vec3f=getReflectanceFromBRDFLookup(vec3f(uniforms.vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
var clearCoatEho: f32=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else
var clearCoatEnvironmentReflectance: vec3f=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV, vec3f(1.), vec3f(1.),sqrt(1.-clearCoatRoughness));
#endif
clearCoatEnvironmentReflectance*=clearCoatIntensity;
#if DEBUGMODE>0
outParams.clearCoatEnvironmentReflectance=clearCoatEnvironmentReflectance;
#endif
outParams.finalClearCoatRadianceScaled=
environmentClearCoatRadiance.rgb *
clearCoatEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(CLEARCOAT_TINT)
outParams.absorption=computeClearCoatAbsorption(outParams.clearCoatNdotVRefract,outParams.clearCoatNdotVRefract,outParams.clearCoatColor,clearCoatThickness,clearCoatIntensity);
#endif
var fresnelIBLClearCoat: f32=fresnelSchlickGGX(clearCoatNdotV,uniforms.vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnelIBLClearCoat*=clearCoatIntensity;outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockClearcoatWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockDirectLighting.js":
/*!*************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockDirectLighting.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockDirectLightingWGSL: () => (/* binding */ pbrBlockDirectLightingWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockDirectLighting";
const shader = `var diffuseBase: vec3f=vec3f(0.,0.,0.);
#ifdef SS_TRANSLUCENCY
var diffuseTransmissionBase: vec3f=vec3f(0.,0.,0.);
#endif
#ifdef SPECULARTERM
var specularBase: vec3f=vec3f(0.,0.,0.);
#endif
#ifdef CLEARCOAT
var clearCoatBase: vec3f=vec3f(0.,0.,0.);
#endif
#ifdef SHEEN
var sheenBase: vec3f=vec3f(0.,0.,0.);
#endif
#if defined(SPECULARTERM) && defined(LIGHT0)
var coloredFresnel: vec3f=vec3f(0.,0.,0.);
#endif
var preInfo: preLightingInfo;var info: lightingInfo;var shadow: f32=1.; 
var aggShadow: f32=0.;var numLights: f32=0.;
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
var absorption: vec3f=vec3f(0.);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockDirectLightingWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalColorComposition.js":
/*!********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalColorComposition.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockFinalColorCompositionWGSL: () => (/* binding */ pbrBlockFinalColorCompositionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockFinalColorComposition";
const shader = `var finalColor: vec4f= vec4f(
#ifndef UNLIT
#ifdef REFLECTION
finalIrradiance +
#endif
#ifdef SPECULARTERM
finalSpecularScaled +
#endif
#ifdef SHEEN
finalSheenScaled +
#endif
#ifdef CLEARCOAT
finalClearCoatScaled +
#endif
#ifdef REFLECTION
finalRadianceScaled +
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled +
#endif
#ifdef CLEARCOAT
clearcoatOut.finalClearCoatRadianceScaled +
#endif
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction +
#endif
#endif
finalAmbient +
finalDiffuse,
alpha);
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
finalColor=vec4f(finalColor.rgb*lightmapColor.rgb,finalColor.a);
#else
finalColor=vec4f(finalColor.rgb+lightmapColor.rgb,finalColor.a);
#endif
#endif
#endif
finalColor=vec4f(finalColor.rgb+finalEmissive,finalColor.a);
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,vec4f(0.0));
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockFinalColorCompositionWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalLitComponents.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalLitComponents.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockFinalLitComponentsWGSL: () => (/* binding */ pbrBlockFinalLitComponentsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockFinalLitComponents";
const shader = `aggShadow=aggShadow/numLights;
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
var baseSpecularEnergyConservationFactor: vec3f=getEnergyConservationFactor(vec3f(reflectanceF0),environmentBrdf);var coloredEnergyConservationFactor: vec3f=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo=vec3f(1.-reflectanceF0)*surfaceAlbedo.rgb;
#endif
#endif
#endif
#ifdef REFLECTION
var finalIrradiance: vec3f=reflectionOut.environmentIrradiance;
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
#if defined(METALLICWORKFLOW) || defined(SPECULAR_GLOSSINESS_ENERGY_CONSERVATION)
var baseSpecularEnergy: vec3f=vec3f(baseSpecularEnvironmentReflectance);
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
baseSpecularEnergy*=baseSpecularEnergyConservationFactor;
#endif
#endif
finalIrradiance*=clamp(vec3f(1.0)-baseSpecularEnergy,vec3f(0.0),vec3f(1.0));
#endif
#endif
#if defined(CLEARCOAT)
finalIrradiance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
finalIrradiance*=clearcoatOut.absorption;
#endif
#endif
#ifndef SS_APPLY_ALBEDO_AFTER_SUBSURFACE
finalIrradiance*=surfaceAlbedo.rgb;
#endif
#if defined(SS_REFRACTION)
finalIrradiance*=subSurfaceOut.refractionOpacity;
#endif
#if defined(SS_TRANSLUCENCY)
finalIrradiance*=(1.0-subSurfaceOut.translucencyIntensity);finalIrradiance+=subSurfaceOut.refractionIrradiance;
#endif
#ifdef SS_APPLY_ALBEDO_AFTER_SUBSURFACE
finalIrradiance*=surfaceAlbedo.rgb;
#endif
finalIrradiance*=uniforms.vLightingIntensity.z;finalIrradiance*=aoOut.ambientOcclusionColor;
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase;finalSpecular=max(finalSpecular,vec3f(0.0));var finalSpecularScaled: vec3f=finalSpecular*uniforms.vLightingIntensity.x*uniforms.vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=coloredEnergyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef REFLECTION
var finalRadiance: vec3f=reflectionOut.environmentRadiance.rgb;finalRadiance*=colorSpecularEnvironmentReflectance;;var finalRadianceScaled: vec3f=finalRadiance*uniforms.vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=coloredEnergyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef SHEEN
var finalSheen: vec3f=sheenBase*sheenOut.sheenColor;finalSheen=max(finalSheen,vec3f(0.0));var finalSheenScaled: vec3f=finalSheen*uniforms.vLightingIntensity.x*uniforms.vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef CLEARCOAT
var finalClearCoat: vec3f=clearCoatBase;finalClearCoat=max(finalClearCoat,vec3f(0.0));var finalClearCoatScaled: vec3f=finalClearCoat*uniforms.vLightingIntensity.x*uniforms.vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalClearCoatScaled*=clearcoatOut.energyConservationFactorClearCoat;
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction*=clearcoatOut.conservationFactor;
#ifdef CLEARCOAT_TINT
subSurfaceOut.finalRefraction*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef ALPHABLEND
var luminanceOverAlpha: f32=0.0;
#if defined(REFLECTION) && defined(RADIANCEOVERALPHA)
luminanceOverAlpha+=getLuminance(finalRadianceScaled);
#if defined(CLEARCOAT)
luminanceOverAlpha+=getLuminance(clearcoatOut.finalClearCoatRadianceScaled);
#endif
#endif
#if defined(SPECULARTERM) && defined(SPECULAROVERALPHA)
luminanceOverAlpha+=getLuminance(finalSpecularScaled);
#endif
#if defined(CLEARCOAT) && defined(CLEARCOATOVERALPHA)
luminanceOverAlpha+=getLuminance(finalClearCoatScaled);
#endif
#if defined(RADIANCEOVERALPHA) || defined(SPECULAROVERALPHA) || defined(CLEARCOATOVERALPHA)
alpha=saturate(alpha+luminanceOverAlpha*luminanceOverAlpha);
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockFinalLitComponentsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalUnlitComponents.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalUnlitComponents.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockFinalUnlitComponentsWGSL: () => (/* binding */ pbrBlockFinalUnlitComponentsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockFinalUnlitComponents";
const shader = `var finalDiffuse: vec3f=diffuseBase;finalDiffuse*=surfaceAlbedo;
#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)
finalDiffuse*=subSurfaceOut.refractionOpacity;
#endif
#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)
finalDiffuse+=diffuseTransmissionBase;
#endif
finalDiffuse=max(finalDiffuse,vec3f(0.0));finalDiffuse*=uniforms.vLightingIntensity.x;var finalAmbient: vec3f=uniforms.vAmbientColor;finalAmbient*=surfaceAlbedo.rgb;var finalEmissive: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
var emissiveColorTex: vec3f=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb;
#ifdef GAMMAEMISSIVE
finalEmissive*=toLinearSpaceVec3(emissiveColorTex.rgb);
#else
finalEmissive*=emissiveColorTex.rgb;
#endif
finalEmissive*= uniforms.vEmissiveInfos.y;
#endif
finalEmissive*=uniforms.vLightingIntensity.y;
#ifdef AMBIENT
var ambientOcclusionForDirectDiffuse: vec3f=mix( vec3f(1.),aoOut.ambientOcclusionColor,uniforms.vAmbientInfos.w);
#else
var ambientOcclusionForDirectDiffuse: vec3f=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockFinalUnlitComponentsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockGeometryInfo.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockGeometryInfo.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockGeometryInfoWGSL: () => (/* binding */ pbrBlockGeometryInfoWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockGeometryInfo";
const shader = `var NdotVUnclamped: f32=dot(normalW,viewDirectionW);var NdotV: f32=absEps(NdotVUnclamped);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var AARoughnessFactors: vec2f=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA
alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)
var environmentBrdf: vec3f=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
var ambientMonochrome: f32=aoOut.ambientOcclusionColor.r;
#else
var ambientMonochrome: f32=getLuminance(aoOut.ambientOcclusionColor);
#endif
var seo: f32=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
var eho: f32=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockGeometryInfoWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockIridescence.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockIridescence.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockIridescenceWGSL: () => (/* binding */ pbrBlockIridescenceWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockIridescence";
const shader = `struct iridescenceOutParams
{iridescenceIntensity: f32,
iridescenceIOR: f32,
iridescenceThickness: f32,
specularEnvironmentR0: vec3f};
#ifdef IRIDESCENCE
fn iridescenceBlock(
vIridescenceParams: vec4f
,viewAngle_: f32
,specularEnvironmentR0: vec3f
#ifdef IRIDESCENCE_TEXTURE
,iridescenceMapData: vec2f
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,iridescenceThicknessMapData: vec2f
#endif
#ifdef CLEARCOAT
,NdotVUnclamped: f32
,vClearCoatParams: vec2f
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData: vec2f
#endif
#endif
)->iridescenceOutParams
{var outParams: iridescenceOutParams;var iridescenceIntensity: f32=vIridescenceParams.x;var iridescenceIOR: f32=vIridescenceParams.y;var iridescenceThicknessMin: f32=vIridescenceParams.z;var iridescenceThicknessMax: f32=vIridescenceParams.w;var iridescenceThicknessWeight: f32=1.;var viewAngle=viewAngle_;
#ifdef IRIDESCENCE_TEXTURE
iridescenceIntensity*=iridescenceMapData.x;
#endif
#if defined(IRIDESCENCE_THICKNESS_TEXTURE)
iridescenceThicknessWeight=iridescenceThicknessMapData.g;
#endif
var iridescenceThickness: f32=mix(iridescenceThicknessMin,iridescenceThicknessMax,iridescenceThicknessWeight);var topIor: f32=1.; 
#ifdef CLEARCOAT
var clearCoatIntensity: f32=vClearCoatParams.x;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#endif
topIor=mix(1.0,uniforms.vClearCoatRefractionParams.w-1.,clearCoatIntensity);viewAngle=sqrt(1.0+((1.0/topIor)*(1.0/topIor))*((NdotVUnclamped*NdotVUnclamped)-1.0));
#endif
var iridescenceFresnel: vec3f=evalIridescence(topIor,iridescenceIOR,viewAngle,iridescenceThickness,specularEnvironmentR0);outParams.specularEnvironmentR0=mix(specularEnvironmentR0,iridescenceFresnel,iridescenceIntensity);outParams.iridescenceIntensity=iridescenceIntensity;outParams.iridescenceThickness=iridescenceThickness;outParams.iridescenceIOR=iridescenceIOR;return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockIridescenceWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockLightmapInit.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockLightmapInit.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockLightmapInitWGSL: () => (/* binding */ pbrBlockLightmapInitWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockLightmapInit";
const shader = `#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor=vec4f(toLinearSpaceVec3(lightmapColor.rgb),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*uniforms.vLightmapInfos.y,lightmapColor.a);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockLightmapInitWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalFinal.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalFinal.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockNormalFinalWGSL: () => (/* binding */ pbrBlockNormalFinalWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockNormalFinal";
const shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
var faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=select(-faceNormal,faceNormal,fragmentInputs.frontFacing);
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
#if defined(MIRRORED)
normalW=select(normalW,-normalW,fragmentInputs.frontFacing);
#else
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockNormalFinalWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectanceWGSL: () => (/* binding */ pbrBlockReflectanceWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflectance";
const shader = `#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
var baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromBRDFWithEnvLookup(vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),environmentBrdf);
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
let metalEnvironmentReflectance: vec3f=vec3f(reflectivityOut.specularWeight)*getF82Specular(NdotV,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);let dielectricEnvironmentReflectance=getReflectanceFromBRDFWithEnvLookup(reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90,environmentBrdf);var colorSpecularEnvironmentReflectance: vec3f=mix(dielectricEnvironmentReflectance,metalEnvironmentReflectance,reflectivityOut.metallic);
#else
var colorSpecularEnvironmentReflectance=getReflectanceFromBRDFWithEnvLookup(clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,environmentBrdf);
#endif
#ifdef RADIANCEOCCLUSION
colorSpecularEnvironmentReflectance*=seo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
colorSpecularEnvironmentReflectance*=eho;
#endif
#endif
#endif
#else
var colorSpecularEnvironmentReflectance: vec3f=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));var baseSpecularEnvironmentReflectance: vec3f=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,vec3f(reflectanceF0),vec3f(reflectivityOut.reflectanceF90),sqrt(microSurface));
#endif
#ifdef CLEARCOAT
colorSpecularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
colorSpecularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockReflectanceWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflection.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectionWGSL: () => (/* binding */ pbrBlockReflectionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflection";
const shader = `#ifdef REFLECTION
struct reflectionOutParams
{environmentRadiance: vec4f
,environmentIrradiance: vec3f
#ifdef REFLECTIONMAP_3D
,reflectionCoords: vec3f
#else
,reflectionCoords: vec2f
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,irradianceVector: vec3f
#endif
#endif
#endif
};
#define pbr_inline
#ifdef REFLECTIONMAP_3D
fn createReflectionCoords(
vPositionW: vec3f,
normalW: vec3f,
#ifdef ANISOTROPIC
anisotropicOut: anisotropicOutParams,
#endif
)->vec3f
{var reflectionCoords: vec3f;
#else
fn createReflectionCoords(
vPositionW: vec3f,
normalW: vec3f,
#ifdef ANISOTROPIC
anisotropicOut: anisotropicOutParams,
#endif
)->vec2f
{ 
var reflectionCoords: vec2f;
#endif
#ifdef ANISOTROPIC
var reflectionVector: vec3f=computeReflectionCoords( vec4f(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
var reflectionVector: vec3f=computeReflectionCoords( vec4f(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
reflectionCoords=reflectionVector;
#else
reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
return reflectionCoords;}
#define pbr_inline
fn sampleReflectionTexture(
alphaG: f32
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped: f32
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness: f32
#endif
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec3f
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec2f
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#endif 
)->vec4f
{var environmentRadiance: vec4f;
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
var reflectionLOD: f32=getLodFromAlphaGNdotV(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
var reflectionLOD: f32=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
var reflectionLOD: f32=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA
var automaticReflectionLOD: f32=UNPACK_LOD(textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords).a);var requestedReflectionLOD: f32=max(automaticReflectionLOD,reflectionLOD);
#else
var requestedReflectionLOD: f32=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance= vec4f(radiance(alphaG,reflectionSampler,reflectionSamplerSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#endif
#else
var lodReflectionNormalized: f32=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));var lodReflectionNormalizedDoubled: f32=lodReflectionNormalized*2.0;var environmentMid: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);if (lodReflectionNormalizedDoubled<1.0){environmentRadiance=mix(
textureSample(reflectionHighSampler,reflectionHighSamplerSampler,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);} else {environmentRadiance=mix(
environmentMid,
textureSample(reflectionLowSampler,reflectionLowSamplerSampler,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
var envRadiance=environmentRadiance.rgb;
#ifdef RGBDREFLECTION
envRadiance=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
envRadiance=toLinearSpaceVec3(environmentRadiance.rgb);
#endif
envRadiance*=vReflectionInfos.x;envRadiance*=vReflectionColor.rgb;return vec4f(envRadiance,environmentRadiance.a);}
#define pbr_inline
fn reflectionBlock(
vPositionW: vec3f
,normalW: vec3f
,alphaG: f32
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
#ifdef ANISOTROPIC
,anisotropicOut: anisotropicOutParams
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped: f32
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness: f32
#endif
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradiance: vec3f
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,reflectionMatrix: mat4x4f
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,irradianceSampler: texture_cube<f32>
,irradianceSamplerSampler: sampler 
#else
,irradianceSampler: texture_2d<f32>
,irradianceSamplerSampler: sampler 
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,reflectionDominantDirection: vec3f
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler 
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler 
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>
,icdfSamplerSampler: sampler
#endif
#endif
,viewDirectionW: vec3f
,diffuseRoughness: f32
,surfaceAlbedo: vec3f
)->reflectionOutParams
{var outParams: reflectionOutParams;var environmentRadiance: vec4f= vec4f(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f= vec3f(0.);
#else
var reflectionCoords: vec2f= vec2f(0.);
#endif
reflectionCoords=createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif 
);environmentRadiance=sampleReflectionTexture(
alphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness
#endif
#ifdef REFLECTIONMAP_3D
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#else
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif 
);var environmentIrradiance: vec3f= vec3f(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
#ifdef ANISOTROPIC
var irradianceVector: vec3f= (reflectionMatrix* vec4f(anisotropicOut.anisotropicNormal,0)).xyz;
#else
var irradianceVector: vec3f= (reflectionMatrix* vec4f(normalW,0)).xyz;
#endif
var irradianceView: vec3f= (reflectionMatrix* vec4f(viewDirectionW,0)).xyz;
#if !defined(USE_IRRADIANCE_DOMINANT_DIRECTION) && !defined(REALTIME_FILTERING)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
var NdotV: f32=max(dot(normalW,viewDirectionW),0.0);irradianceVector=mix(irradianceVector,irradianceView,(0.5*(1.0-NdotV))*diffuseRoughness);
#endif
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradiance;
#else
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,reflectionSamplerSampler,irradianceVector,vReflectionFilteringInfo,diffuseRoughness,surfaceAlbedo,irradianceView
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#ifdef SS_TRANSLUCENCY
outParams.irradianceVector=irradianceVector;
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
var environmentIrradiance4: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,irradianceVector);
#else
var environmentIrradiance4: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,reflectionCoords);
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
var Ls: vec3f=normalize(reflectionDominantDirection);var NoL: f32=dot(irradianceVector,Ls);var NoV: f32=dot(irradianceVector,irradianceView);var diffuseRoughnessTerm: vec3f=vec3f(1.0);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
var LoV: f32=dot(Ls,irradianceView);var mag: f32=length(reflectionDominantDirection)*2.0f;var clampedAlbedo: vec3f=clamp(surfaceAlbedo,vec3f(0.1),vec3f(1.0));diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;diffuseRoughnessTerm=diffuseRoughnessTerm/clampedAlbedo;diffuseRoughnessTerm=mix(vec3f(1.0),diffuseRoughnessTerm,sqrt(clamp(mag*NoV,0.0,1.0f)));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
var H: vec3f=(irradianceView+Ls)*0.5f;var VoH: f32=dot(irradianceView,H);diffuseRoughnessTerm=vec3f(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
environmentIrradiance=environmentIrradiance4.rgb*diffuseRoughnessTerm;
#else
environmentIrradiance=environmentIrradiance4.rgb;
#endif
#ifdef RGBDREFLECTION
environmentIrradiance=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance=toLinearSpaceVec3(environmentIrradiance.rgb);
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb*vReflectionInfos.x;
#ifdef MIX_IBL_RADIANCE_WITH_IRRADIANCE
outParams.environmentRadiance=vec4f(mix(environmentRadiance.rgb,environmentIrradiance,alphaG),environmentRadiance.a);
#else
outParams.environmentRadiance=environmentRadiance;
#endif
outParams.environmentIrradiance=environmentIrradiance;outParams.reflectionCoords=reflectionCoords;return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockReflectionWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectivity.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectivity.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectivityWGSL: () => (/* binding */ pbrBlockReflectivityWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflectivity";
const shader = `struct reflectivityOutParams
{microSurface: f32,
roughness: f32,
diffuseRoughness: f32,
reflectanceF0: f32,
reflectanceF90: vec3f,
colorReflectanceF0: vec3f,
colorReflectanceF90: vec3f,
#ifdef METALLICWORKFLOW
surfaceAlbedo: vec3f,
metallic: f32,
specularWeight: f32,
dielectricColorF0: vec3f,
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
ambientOcclusionColor: vec3f,
#endif
#if DEBUGMODE>0
#ifdef METALLICWORKFLOW
#ifdef REFLECTIVITY
surfaceMetallicColorMap: vec4f,
#endif
metallicF0: vec3f,
#else
#ifdef REFLECTIVITY
surfaceReflectivityColorMap: vec4f,
#endif
#endif
#endif
};
#define pbr_inline
fn reflectivityBlock(
reflectivityColor: vec4f
#ifdef METALLICWORKFLOW
,surfaceAlbedo: vec3f
,metallicReflectanceFactors: vec4f
#endif
,baseDiffuseRoughness: f32
#ifdef BASE_DIFFUSE_ROUGHNESS
,baseDiffuseRoughnessTexture: f32
,baseDiffuseRoughnessInfos: vec2f
#endif
#ifdef REFLECTIVITY
,reflectivityInfos: vec3f
,surfaceMetallicOrReflectivityColorMap: vec4f
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,ambientOcclusionColorIn: vec3f
#endif
#ifdef MICROSURFACEMAP
,microSurfaceTexel: vec4f
#endif
#ifdef DETAIL
,detailColor: vec4f
,vDetailInfos: vec4f
#endif
)->reflectivityOutParams
{var outParams: reflectivityOutParams;var microSurface: f32=reflectivityColor.a;var surfaceReflectivityColor: vec3f=reflectivityColor.rgb;
#ifdef METALLICWORKFLOW
var metallicRoughness: vec2f=surfaceReflectivityColor.rg;var ior: f32=surfaceReflectivityColor.b;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
var aoStoreInMetalMap: vec3f= vec3f(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
#endif
#ifdef METALLNESSSTOREINMETALMAPBLUE
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.b;
#else
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.r;
#endif
#ifdef ROUGHNESSSTOREINMETALMAPALPHA
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.a;
#else
#ifdef ROUGHNESSSTOREINMETALMAPGREEN
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.g;
#endif
#endif
#endif
#ifdef DETAIL
var detailRoughness: f32=mix(0.5,detailColor.b,vDetailInfos.w);var loLerp: f32=mix(0.,metallicRoughness.g,detailRoughness*2.);var hiLerp: f32=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS
microSurface=1.0-metallicRoughness.g;var baseColor: vec3f=surfaceAlbedo;outParams.metallic=metallicRoughness.r;outParams.specularWeight=metallicReflectanceFactors.a;var dielectricF0 : f32=reflectivityColor.a*outParams.specularWeight;surfaceReflectivityColor=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=dielectricF0*surfaceReflectivityColor;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.surfaceAlbedo=baseColor.rgb*(vec3f(1.0)-vec3f(dielectricF0)*surfaceReflectivityColor)*(1.0-outParams.metallic);
#else
outParams.surfaceAlbedo=baseColor.rgb;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
{let reflectivityColor: vec3f=mix(dielectricF0*surfaceReflectivityColor,baseColor.rgb,outParams.metallic);outParams.reflectanceF0=max(reflectivityColor.r,max(reflectivityColor.g,reflectivityColor.b));}
#else
#if DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_GLTF
let maxF0: f32=max(surfaceReflectivityColor.r,max(surfaceReflectivityColor.g,surfaceReflectivityColor.b));outParams.reflectanceF0=mix(dielectricF0*maxF0,1.0f,outParams.metallic);
#else
outParams.reflectanceF0=mix(dielectricF0,1.0,outParams.metallic);
#endif
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.reflectanceF90=vec3(outParams.specularWeight);var f90Scale: f32=1.0;
#else
var f90Scale: f32=clamp(2.0*(ior-1.0),0.0,1.0);outParams.reflectanceF90=vec3(mix(
outParams.specularWeight*f90Scale,1.0,outParams.metallic));
#endif
outParams.dielectricColorF0=vec3f(dielectricF0*surfaceReflectivityColor);var metallicColorF0: vec3f=baseColor.rgb;outParams.colorReflectanceF0=mix(outParams.dielectricColorF0,metallicColorF0,outParams.metallic);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
let dielectricColorF90
: vec3f=surfaceReflectivityColor *
vec3f(outParams.specularWeight*f90Scale);
#else
let dielectricColorF90
: vec3f=vec3f(outParams.specularWeight*f90Scale);
#endif
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
let conductorColorF90: vec3f=surfaceReflectivityColor;
#else
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
let conductorColorF90: vec3f=outParams.reflectanceF90;
#else
let conductorColorF90: vec3f=vec3f(1.0f);
#endif
#endif
outParams.colorReflectanceF90=mix(dielectricColorF90,conductorColorF90,outParams.metallic);
#else
#ifdef REFLECTIVITY
surfaceReflectivityColor*=surfaceMetallicOrReflectivityColorMap.rgb;
#if DEBUGMODE>0
outParams.surfaceReflectivityColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef MICROSURFACEFROMREFLECTIVITYMAP
microSurface*=surfaceMetallicOrReflectivityColorMap.a;microSurface*=reflectivityInfos.z;
#else
#ifdef MICROSURFACEAUTOMATIC
microSurface*=computeDefaultMicroSurface(microSurface,surfaceReflectivityColor);
#endif
#ifdef MICROSURFACEMAP
microSurface*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE
#endif
#endif
outParams.colorReflectanceF0=surfaceReflectivityColor;outParams.reflectanceF0=max(surfaceReflectivityColor.r,max(surfaceReflectivityColor.g,surfaceReflectivityColor.b));outParams.reflectanceF90=vec3f(1.0);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
outParams.colorReflectanceF90=surfaceReflectivityColor;
#else
outParams.colorReflectanceF90=vec3(1.0);
#endif
#endif
microSurface=saturate(microSurface);var roughness: f32=1.-microSurface;var diffuseRoughness: f32=baseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
diffuseRoughness*=baseDiffuseRoughnessTexture*baseDiffuseRoughnessInfos.y;
#endif
outParams.microSurface=microSurface;outParams.roughness=roughness;outParams.diffuseRoughness=diffuseRoughness;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockReflectivityWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockSheen.js":
/*!****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockSheen.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockSheenWGSL: () => (/* binding */ pbrBlockSheenWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockSheen";
const shader = `#ifdef SHEEN
struct sheenOutParams
{sheenIntensity: f32
,sheenColor: vec3f
,sheenRoughness: f32
#ifdef SHEEN_LINKWITHALBEDO
,surfaceAlbedo: vec3f
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
,sheenAlbedoScaling: f32
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,finalSheenRadianceScaled: vec3f
#endif
#if DEBUGMODE>0
#ifdef SHEEN_TEXTURE
,sheenMapData: vec4f
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,sheenEnvironmentReflectance: vec3f
#endif
#endif
};
#define pbr_inline
fn sheenBlock(
vSheenColor: vec4f
#ifdef SHEEN_ROUGHNESS
,vSheenRoughness: f32
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData: vec4f
#endif
#endif
,roughness: f32
#ifdef SHEEN_TEXTURE
,sheenMapData: vec4f
,sheenMapLevel: f32
#endif
,reflectance: f32
#ifdef SHEEN_LINKWITHALBEDO
,baseColor: vec3f
,surfaceAlbedo: vec3f
#endif
#ifdef ENVIRONMENTBRDF
,NdotV: f32
,environmentBrdf: vec3f
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,AARoughnessFactors: vec2f
,vReflectionMicrosurfaceInfos: vec3f
,vReflectionInfos: vec2f
,vReflectionColor: vec3f
,vLightingIntensity: vec4f
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec3f
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec2f
#endif
,NdotVUnclamped: f32
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,reflectionLowSampler: texture_cube<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_cube<f32>
,reflectionHighSamplerSampler: sampler 
#else
,reflectionLowSampler: texture_2d<f32>
,reflectionLowSamplerSampler: sampler 
,reflectionHighSampler: texture_2d<f32>
,reflectionHighSamplerSampler: sampler 
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo: vec2f
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,seo: f32
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,eho: f32
#endif
#endif
)->sheenOutParams
{var outParams: sheenOutParams;var sheenIntensity: f32=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
var sheenFactor: f32=pow5(1.0-sheenIntensity);var sheenColor: vec3f=baseColor.rgb*(1.0-sheenFactor);var sheenRoughness: f32=sheenIntensity;outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
var sheenColor: vec3f=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
#ifdef SHEEN_GAMMATEXTURE
sheenColor*=toLinearSpaceVec3(sheenMapData.rgb);
#else
sheenColor*=sheenMapData.rgb;
#endif
sheenColor*=sheenMapLevel;
#endif
#ifdef SHEEN_ROUGHNESS
var sheenRoughness: f32=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#else
var sheenRoughness: f32=roughness;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#endif
#if !defined(SHEEN_ALBEDOSCALING)
sheenIntensity*=(1.-reflectance);
#endif
sheenColor*=sheenIntensity;
#endif
#ifdef ENVIRONMENTBRDF
/*#ifdef SHEEN_SOFTER
var environmentSheenBrdf: vec3f= vec3f(0.,0.,getBRDFLookupCharlieSheen(NdotV,sheenRoughness));
#else*/
#ifdef SHEEN_ROUGHNESS
var environmentSheenBrdf: vec3f=getBRDFLookup(NdotV,sheenRoughness);
#else
var environmentSheenBrdf: vec3f=environmentBrdf;
#endif
/*#endif*/
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
var sheenAlphaG: f32=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA
sheenAlphaG+=AARoughnessFactors.y;
#endif
var environmentSheenRadiance: vec4f= vec4f(0.,0.,0.,0.);environmentSheenRadiance=sampleReflectionTexture(
sheenAlphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,sheenRoughness
#endif
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);var sheenEnvironmentReflectance: vec3f=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
sheenEnvironmentReflectance*=seo;
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
sheenEnvironmentReflectance*=eho;
#endif
#if DEBUGMODE>0
outParams.sheenEnvironmentReflectance=sheenEnvironmentReflectance;
#endif
outParams.finalSheenRadianceScaled=
environmentSheenRadiance.rgb *
sheenEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
outParams.sheenAlbedoScaling=1.0-sheenIntensity*max(max(sheenColor.r,sheenColor.g),sheenColor.b)*environmentSheenBrdf.b;
#endif
outParams.sheenIntensity=sheenIntensity;outParams.sheenColor=sheenColor;outParams.sheenRoughness=sheenRoughness;return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockSheenWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockSubSurface.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockSubSurface.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockSubSurfaceWGSL: () => (/* binding */ pbrBlockSubSurfaceWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockSubSurface";
const shader = `struct subSurfaceOutParams
{specularEnvironmentReflectance: vec3f,
#ifdef SS_REFRACTION
finalRefraction: vec3f,
surfaceAlbedo: vec3f,
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha: f32,
#endif
refractionOpacity: f32,
#endif
#ifdef SS_TRANSLUCENCY
transmittance: vec3f,
translucencyIntensity: f32,
#ifdef REFLECTION
refractionIrradiance: vec3f,
#endif
#endif
#if DEBUGMODE>0
#ifdef SS_THICKNESSANDMASK_TEXTURE
thicknessMap: vec4f,
#endif
#ifdef SS_REFRACTION
environmentRefraction: vec4f,
refractionTransmittance: vec3f
#endif
#endif
};
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#define pbr_inline
fn sampleEnvironmentRefraction(
ior: f32
,thickness: f32
,refractionLOD: f32
,normalW: vec3f
,vPositionW: vec3f
,viewDirectionW: vec3f
,view: mat4x4f
,vRefractionInfos: vec4f
,refractionMatrix: mat4x4f
,vRefractionMicrosurfaceInfos: vec4f
,alphaG: f32
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler: texture_cube<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_cube<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_cube<f32>
,refractionHighSamplerSampler: sampler 
#endif
#else
,refractionSampler: texture_2d<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_2d<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_2d<f32>
,refractionHighSamplerSampler: sampler 
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut: anisotropicOutParams
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo: vec2f
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition: vec3f
,refractionSize: vec3f
#endif
)->vec4f {var environmentRefraction: vec4f= vec4f(0.,0.,0.,0.);
#ifdef ANISOTROPIC
var refractionVector: vec3f=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,ior);
#else
var refractionVector: vec3f=refract(-viewDirectionW,normalW,ior);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif
#ifdef SS_REFRACTIONMAP_3D
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,refractionSize,refractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;var refractionCoords: vec3f=refractionVector;refractionCoords= (refractionMatrix* vec4f(refractionCoords,0)).xyz;
#else
#ifdef SS_USE_THICKNESS_AS_DEPTH
var vRefractionUVW: vec3f= (refractionMatrix*(view* vec4f(vPositionW+refractionVector*thickness,1.0))).xyz;
#else
var vRefractionUVW: vec3f= (refractionMatrix*(view* vec4f(vPositionW+refractionVector*vRefractionInfos.z,1.0))).xyz;
#endif
var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef LODBASEDMICROSFURACE
var lod=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA
var automaticRefractionLOD: f32=UNPACK_LOD(textureSample(refractionSampler,refractionSamplerSampler,refractionCoords).a);var requestedRefractionLOD: f32=max(automaticRefractionLOD,lod);
#else
var requestedRefractionLOD: f32=lod;
#endif
#if defined(REALTIME_FILTERING) && defined(SS_REFRACTIONMAP_3D)
environmentRefraction= vec4f(radiance(alphaG,refractionSampler,refractionSamplerSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=textureSampleLevel(refractionSampler,refractionSamplerSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
var lodRefractionNormalized: f32=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));var lodRefractionNormalizedDoubled: f32=lodRefractionNormalized*2.0;var environmentRefractionMid: vec4f=textureSample(refractionSampler,refractionSamplerSampler,refractionCoords);if (lodRefractionNormalizedDoubled<1.0){environmentRefraction=mix(
textureSample(refractionHighSampler,refractionHighSamplerSampler,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);} else {environmentRefraction=mix(
environmentRefractionMid,
textureSample(refractionLowSampler,refractionLowSamplerSampler,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);}
#endif
var refraction=environmentRefraction.rgb;
#ifdef SS_RGBDREFRACTION
refraction=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
refraction=toLinearSpaceVec3(environmentRefraction.rgb);
#endif
return vec4f(refraction,environmentRefraction.a);}
#endif
#define pbr_inline
fn subSurfaceBlock(
vSubSurfaceIntensity: vec3f
,vThicknessParam: vec2f
,vTintColor: vec4f
,normalW: vec3f
,specularEnvironmentReflectance: vec3f
#ifdef SS_THICKNESSANDMASK_TEXTURE
,thicknessMap: vec4f
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,refractionIntensityMap: vec4f
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,translucencyIntensityMap: vec4f
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,reflectionMatrix: mat4x4f
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,irradianceVector_: vec3f
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,vReflectionFilteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>
,icdfSamplerSampler: sampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,irradianceSampler: texture_cube<f32>
,irradianceSamplerSampler: sampler
#else
,irradianceSampler: texture_2d<f32>
,irradianceSamplerSampler: sampler
#endif
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo: vec3f
#endif
#ifdef SS_REFRACTION
,vPositionW: vec3f
,viewDirectionW: vec3f
,view: mat4x4f
,vRefractionInfos: vec4f
,refractionMatrix: mat4x4f
,vRefractionMicrosurfaceInfos: vec4f
,vLightingIntensity: vec4f
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,alpha: f32
#endif
#ifdef SS_LODINREFRACTIONALPHA
,NdotVUnclamped: f32
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,roughness: f32
#endif
,alphaG: f32
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler: texture_cube<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_cube<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_cube<f32>
,refractionHighSamplerSampler: sampler 
#endif
#else
,refractionSampler: texture_2d<f32>
,refractionSamplerSampler: sampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler: texture_2d<f32>
,refractionLowSamplerSampler: sampler
,refractionHighSampler: texture_2d<f32>
,refractionHighSamplerSampler: sampler 
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut: anisotropicOutParams
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo: vec2f
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition: vec3f
,refractionSize: vec3f
#endif
#ifdef SS_DISPERSION
,dispersion: f32
#endif
#endif
#ifdef SS_TRANSLUCENCY
,vDiffusionDistance: vec3f
,vTranslucencyColor: vec4f
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,translucencyColorMap: vec4f
#endif
#endif
)->subSurfaceOutParams
{var outParams: subSurfaceOutParams;outParams.specularEnvironmentReflectance=specularEnvironmentReflectance;
#ifdef SS_REFRACTION
var refractionIntensity: f32=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
var translucencyIntensity: f32=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#ifdef SS_USE_GLTF_TEXTURES
var thickness: f32=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#else
var thickness: f32=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
#endif
#if DEBUGMODE>0
outParams.thicknessMap=thicknessMap;
#endif
#if defined(SS_REFRACTION) && defined(SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS)
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=thicknessMap.r;
#else
refractionIntensity*=thicknessMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS)
#ifdef SS_USE_GLTF_TEXTURES
translucencyIntensity*=thicknessMap.a;
#else
translucencyIntensity*=thicknessMap.b;
#endif
#endif
#else
var thickness: f32=vThicknessParam.y;
#endif
#if defined(SS_REFRACTION) && defined(SS_REFRACTIONINTENSITY_TEXTURE)
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=refractionIntensityMap.r;
#else
refractionIntensity*=refractionIntensityMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCYINTENSITY_TEXTURE)
#ifdef SS_USE_GLTF_TEXTURES
translucencyIntensity*=translucencyIntensityMap.a;
#else
translucencyIntensity*=translucencyIntensityMap.b;
#endif
#endif
#ifdef SS_TRANSLUCENCY
thickness=maxEps(thickness);var translucencyColor: vec4f=vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
translucencyColor*=translucencyColorMap;
#endif
var transmittance: vec3f=transmittanceBRDF_Burley(translucencyColor.rgb,vDiffusionDistance,thickness);transmittance*=translucencyIntensity;outParams.transmittance=transmittance;outParams.translucencyIntensity=translucencyIntensity;
#endif
#ifdef SS_REFRACTION
var environmentRefraction: vec4f= vec4f(0.,0.,0.,0.);
#ifdef SS_HAS_THICKNESS
var ior: f32=vRefractionInfos.y;
#else
var ior: f32=vRefractionMicrosurfaceInfos.w;
#endif
#ifdef SS_LODINREFRACTIONALPHA
var refractionAlphaG: f32=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));var refractionLOD: f32=getLodFromAlphaGNdotV(vRefractionMicrosurfaceInfos.x,refractionAlphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
var refractionRoughness: f32=alphaG;refractionRoughness=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));var refractionLOD: f32=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,refractionRoughness);
#else
var refractionAlphaG: f32=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));var refractionLOD: f32=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG);
#endif
var refraction_ior: f32=vRefractionInfos.y;
#ifdef SS_DISPERSION
var realIOR: f32=1.0/refraction_ior;var iorDispersionSpread: f32=0.04*dispersion*(realIOR-1.0);var iors: vec3f= vec3f(1.0/(realIOR-iorDispersionSpread),refraction_ior,1.0/(realIOR+iorDispersionSpread));for (var i: i32=0; i<3; i++) {refraction_ior=iors[i];
#endif
var envSample: vec4f=sampleEnvironmentRefraction(refraction_ior,thickness,refractionLOD,normalW,vPositionW,viewDirectionW,view,vRefractionInfos,refractionMatrix,vRefractionMicrosurfaceInfos,alphaG
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#else
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition
,refractionSize
#endif
);
#ifdef SS_DISPERSION
environmentRefraction[i]=envSample[i];}
#else
environmentRefraction=envSample;
#endif
environmentRefraction=vec4f(environmentRefraction.rgb*vRefractionInfos.x,environmentRefraction.a);
#endif
#ifdef SS_REFRACTION
var refractionTransmittance: vec3f= vec3f(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
var volumeAlbedo: vec3f=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambertVec3(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)
var maxChannel: f32=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);var volumeAlbedo: vec3f=saturateVec3(maxChannel*surfaceAlbedo);environmentRefraction=vec4f(environmentRefraction.rgb*volumeAlbedo,environmentRefraction.a);
#else
var volumeAlbedo: vec3f=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambertVec3(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT
environmentRefraction=vec4f(environmentRefraction.rgb*surfaceAlbedo.rgb,environmentRefraction.a);
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.refractionOpacity=1.-refractionIntensity;
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.surfaceAlbedo*=outParams.refractionOpacity;
#endif
#ifdef UNUSED_MULTIPLEBOUNCES
var bounceSpecularEnvironmentReflectance: vec3f=(2.0*specularEnvironmentReflectance)/(1.0+specularEnvironmentReflectance);outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,specularEnvironmentReflectance,refractionIntensity);
#endif
#if DEBUGMODE>0
outParams.refractionTransmittance=refractionTransmittance;
#endif
outParams.finalRefraction=environmentRefraction.rgb*refractionTransmittance*vLightingIntensity.z;outParams.finalRefraction*=vec3f(1.0)-specularEnvironmentReflectance;
#if DEBUGMODE>0
outParams.environmentRefraction=environmentRefraction;
#endif
#endif
#if defined(REFLECTION) && defined(SS_TRANSLUCENCY)
#if defined(NORMAL) && defined(USESPHERICALINVERTEX) || !defined(USESPHERICALFROMREFLECTIONMAP)
var irradianceVector: vec3f= (reflectionMatrix* vec4f(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
var irradianceVector: vec3f=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
var refractionIrradiance: vec3f=irradiance(reflectionSampler,reflectionSamplerSampler,-irradianceVector,vReflectionFilteringInfo,0.0,surfaceAlbedo,irradianceVector
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
);
#else
var refractionIrradiance: vec3f=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
var irradianceCoords: vec3f=irradianceVector;
#else
var irradianceCoords: vec2f=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
var temp: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,-irradianceCoords);var refractionIrradiance=temp.rgb;
#ifdef RGBDREFLECTION
refractionIrradiance=fromRGBD(temp).rgb;
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance=toLinearSpaceVec3(refractionIrradiance);
#endif
#else
var refractionIrradiance: vec3f= vec3f(0.);
#endif
refractionIrradiance*=transmittance;
#ifdef SS_ALBEDOFORTRANSLUCENCYTINT
refractionIrradiance*=surfaceAlbedo.rgb;
#endif
outParams.refractionIrradiance=refractionIrradiance;
#endif
return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockSubSurfaceWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentSamplersDeclaration.js":
/*!*********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentSamplersDeclaration.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrFragmentSamplersDeclarationWGSL: () => (/* binding */ pbrFragmentSamplersDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js");
/* harmony import */ var _samplerFragmentAlternateDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samplerFragmentAlternateDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentAlternateDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "pbrFragmentSamplersDeclaration";
const shader = `#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_SAMPLERNAME_,baseDiffuseRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_SAMPLERNAME_,reflectivity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_SAMPLERNAME_,microSurface)
#include<samplerFragmentDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_SAMPLERNAME_,metallicReflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_SAMPLERNAME_,reflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef CLEARCOAT
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_SAMPLERNAME_,clearCoat)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS)
var clearCoatRoughnessSamplerSampler: sampler;var clearCoatRoughnessSampler: texture_2d<f32>;
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_SAMPLERNAME_,clearCoatBump)
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_SAMPLERNAME_,clearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_SAMPLERNAME_,iridescence)
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_SAMPLERNAME_,iridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerFragmentDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_SAMPLERNAME_,sheen)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS)
var sheenRoughnessSamplerSampler: sampler;var sheenRoughnessSampler: texture_2d<f32>;
#endif
#endif
#ifdef ANISOTROPIC
#include<samplerFragmentDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_SAMPLERNAME_,anisotropy)
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#ifdef USEIRRADIANCEMAP
var irradianceSamplerSampler: sampler;var irradianceSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#ifdef USEIRRADIANCEMAP
var irradianceSamplerSampler: sampler;var irradianceSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
var environmentBrdfSamplerSampler: sampler;var environmentBrdfSampler: texture_2d<f32>;
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
var refractionSamplerSampler: sampler;var refractionSampler: texture_cube<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var refractionLowSamplerSampler: sampler;var refractionLowSampler: texture_cube<f32>;var refractionHighSamplerSampler: sampler;var refractionHighSampler: texture_cube<f32>;
#endif
#else
var refractionSamplerSampler: sampler;var refractionSampler: texture_2d<f32>;
#ifdef LODBASEDMICROSFURACE
#else
var refractionLowSamplerSampler: sampler;var refractionLowSampler: texture_2d<f32>;var refractionHighSamplerSampler: sampler;var refractionHighSampler: texture_2d<f32>;
#endif
#endif
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_SAMPLERNAME_,thickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_SAMPLERNAME_,refractionIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_SAMPLERNAME_,translucencyIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_SAMPLERNAME_,translucencyColor)
#endif
#ifdef IBL_CDF_FILTERING
var icdfSamplerSampler: sampler;var icdfSampler: texture_2d<f32>;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrFragmentSamplersDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrUboDeclarationWGSL: () => (/* binding */ pbrUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "pbrUboDeclaration";
const shader = `uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicroSurfaceSamplerInfos: vec2f;uniform vBumpInfos: vec3f;uniform albedoMatrix: mat4x4f;uniform baseWeightMatrix: mat4x4f;uniform baseDiffuseRoughnessMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform reflectivityMatrix: mat4x4f;uniform microSurfaceSamplerMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform vAlbedoColor: vec4f;uniform baseWeight: f32;uniform baseDiffuseRoughness: f32;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vReflectivityColor: vec4f;uniform vEmissiveColor: vec3f;uniform vAmbientColor: vec3f;uniform vDebugMode: vec2f;uniform vMetallicReflectanceFactors: vec4f;uniform vMetallicReflectanceInfos: vec2f;uniform metallicReflectanceMatrix: mat4x4f;uniform vReflectanceInfos: vec2f;uniform reflectanceMatrix: mat4x4f;uniform cameraInfo: vec4f;uniform vReflectionInfos: vec2f;uniform reflectionMatrix: mat4x4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vReflectionFilteringInfo: vec2f;uniform vReflectionDominantDirection: vec3f;uniform vReflectionColor: vec3f;uniform vSphericalL00: vec3f;uniform vSphericalL1_1: vec3f;uniform vSphericalL10: vec3f;uniform vSphericalL11: vec3f;uniform vSphericalL2_2: vec3f;uniform vSphericalL2_1: vec3f;uniform vSphericalL20: vec3f;uniform vSphericalL21: vec3f;uniform vSphericalL22: vec3f;uniform vSphericalX: vec3f;uniform vSphericalY: vec3f;uniform vSphericalZ: vec3f;uniform vSphericalXX_ZZ: vec3f;uniform vSphericalYY_ZZ: vec3f;uniform vSphericalZZ: vec3f;uniform vSphericalXY: vec3f;uniform vSphericalYZ: vec3f;uniform vSphericalZX: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentAlternateDeclaration.js":
/*!**************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentAlternateDeclaration.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerFragmentAlternateDeclarationWGSL: () => (/* binding */ samplerFragmentAlternateDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "samplerFragmentAlternateDeclaration";
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
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const samplerFragmentAlternateDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/pbr.fragment.js":
/*!************************************************!*\
  !*** ../core/dist/ShadersWGSL/pbr.fragment.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrPixelShaderWGSL: () => (/* binding */ pbrPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_prePassDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/prePassDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js");
/* harmony import */ var _ShadersInclude_oitDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/oitDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrUboDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/pbrUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentExtraDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentExtraDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentSamplersDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentSamplersDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentSamplersDeclaration.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_subSurfaceScatteringFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/subSurfaceScatteringFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js");
/* harmony import */ var _ShadersInclude_importanceSampling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/importanceSampling */ "../core/dist/ShadersWGSL/ShadersInclude/importanceSampling.js");
/* harmony import */ var _ShadersInclude_pbrHelperFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/pbrHelperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrHelperFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/shadowsFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_harmonicsFunctions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/harmonicsFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/harmonicsFunctions.js");
/* harmony import */ var _ShadersInclude_pbrDirectLightingSetupFunctions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/pbrDirectLightingSetupFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingSetupFunctions.js");
/* harmony import */ var _ShadersInclude_pbrDirectLightingFalloffFunctions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/pbrDirectLightingFalloffFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingFalloffFunctions.js");
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/pbrBRDFFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js");
/* harmony import */ var _ShadersInclude_hdrFilteringFunctions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/hdrFilteringFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js");
/* harmony import */ var _ShadersInclude_pbrDirectLightingFunctions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/pbrDirectLightingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingFunctions.js");
/* harmony import */ var _ShadersInclude_pbrIBLFunctions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/pbrIBLFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrIBLFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentMainFunctions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentMainFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentFunctions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/ShadersWGSL/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_pbrBlockAlbedoOpacity__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAlbedoOpacity */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAlbedoOpacity.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflectivity__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflectivity */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectivity.js");
/* harmony import */ var _ShadersInclude_pbrBlockAmbientOcclusion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAmbientOcclusion */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAmbientOcclusion.js");
/* harmony import */ var _ShadersInclude_pbrBlockAlphaFresnel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAlphaFresnel */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAlphaFresnel.js");
/* harmony import */ var _ShadersInclude_pbrBlockAnisotropic__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAnisotropic */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockAnisotropic.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflection__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflection */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflection.js");
/* harmony import */ var _ShadersInclude_pbrBlockSheen__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockSheen */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockSheen.js");
/* harmony import */ var _ShadersInclude_pbrBlockClearcoat__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockClearcoat */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockClearcoat.js");
/* harmony import */ var _ShadersInclude_pbrBlockIridescence__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockIridescence */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockIridescence.js");
/* harmony import */ var _ShadersInclude_pbrBlockSubSurface__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockSubSurface */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockSubSurface.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockNormalGeometric__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockNormalGeometric */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js");
/* harmony import */ var _ShadersInclude_bumpFragment__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ShadersInclude/bumpFragment */ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockNormalFinal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockNormalFinal */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalFinal.js");
/* harmony import */ var _ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ShadersInclude/depthPrePass */ "../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js");
/* harmony import */ var _ShadersInclude_pbrBlockLightmapInit__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockLightmapInit */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockLightmapInit.js");
/* harmony import */ var _ShadersInclude_pbrBlockGeometryInfo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockGeometryInfo */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockGeometryInfo.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflectance0__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflectance0 */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance0.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflectance__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflectance */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance.js");
/* harmony import */ var _ShadersInclude_pbrBlockDirectLighting__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockDirectLighting */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockDirectLighting.js");
/* harmony import */ var _ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ShadersInclude/lightFragment */ "../core/dist/ShadersWGSL/ShadersInclude/lightFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockFinalLitComponents__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockFinalLitComponents */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalLitComponents.js");
/* harmony import */ var _ShadersInclude_pbrBlockFinalUnlitComponents__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockFinalUnlitComponents */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalUnlitComponents.js");
/* harmony import */ var _ShadersInclude_pbrBlockFinalColorComposition__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockFinalColorComposition */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockFinalColorComposition.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockImageProcessing__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockImageProcessing */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js");
/* harmony import */ var _ShadersInclude_pbrBlockPrePass__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockPrePass */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js");
/* harmony import */ var _ShadersInclude_oitFragment__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ShadersInclude/oitFragment */ "../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js");
/* harmony import */ var _ShadersInclude_pbrDebug__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ShadersInclude/pbrDebug */ "../core/dist/ShadersWGSL/ShadersInclude/pbrDebug.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

























































const name = "pbrPixelShader";
const shader = `#define PBR_FRAGMENT_SHADER
#define CUSTOM_FRAGMENT_BEGIN
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<pbrUboDeclaration>
#include<pbrFragmentExtraDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<pbrFragmentSamplersDeclaration>
#include<imageProcessingDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<importanceSampling>
#include<pbrHelperFunctions>
#include<imageProcessingFunctions>
#include<shadowsFragmentFunctions>
#include<harmonicsFunctions>
#include<pbrDirectLightingSetupFunctions>
#include<pbrDirectLightingFalloffFunctions>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
#include<pbrDirectLightingFunctions>
#include<pbrIBLFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<pbrBlockAlbedoOpacity>
#include<pbrBlockReflectivity>
#include<pbrBlockAmbientOcclusion>
#include<pbrBlockAlphaFresnel>
#include<pbrBlockAnisotropic>
#include<pbrBlockReflection>
#include<pbrBlockSheen>
#include<pbrBlockClearcoat>
#include<pbrBlockIridescence>
#include<pbrBlockSubSurface>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>
var albedoOpacityOut: albedoOpacityOutParams;
#ifdef ALBEDO
var albedoTexture: vec4f=textureSample(albedoSampler,albedoSamplerSampler,fragmentInputs.vAlbedoUV+uvOffset);
#endif
#ifdef BASE_WEIGHT
var baseWeightTexture: vec4f=textureSample(baseWeightSampler,baseWeightSamplerSampler,fragmentInputs.vBaseWeightUV+uvOffset);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#endif
#ifdef DECAL
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#endif
albedoOpacityOut=albedoOpacityBlock(
uniforms.vAlbedoColor
#ifdef ALBEDO
,albedoTexture
,uniforms.vAlbedoInfos
#endif
,uniforms.baseWeight
#ifdef BASE_WEIGHT
,baseWeightTexture
,uniforms.vBaseWeightInfos
#endif
#ifdef OPACITY
,opacityMap
,uniforms.vOpacityInfos
#endif
#ifdef DETAIL
,detailColor
,uniforms.vDetailInfos
#endif
#ifdef DECAL
,decalColor
,uniforms.vDecalInfos
#endif
);var surfaceAlbedo: vec3f=albedoOpacityOut.surfaceAlbedo;var alpha: f32=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var aoOut: ambientOcclusionOutParams;
#ifdef AMBIENT
var ambientOcclusionColorMap: vec3f=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
uniforms.vAmbientInfos
#endif
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
var diffuseBase: vec3f= vec3f(1.,1.,1.);
#else
var baseColor: vec3f=surfaceAlbedo;var reflectivityOut: reflectivityOutParams;
#if defined(REFLECTIVITY)
var surfaceMetallicOrReflectivityColorMap: vec4f=textureSample(reflectivitySampler,reflectivitySamplerSampler,fragmentInputs.vReflectivityUV+uvOffset);var baseReflectivity: vec4f=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
#ifdef REFLECTIVITY_GAMMA
surfaceMetallicOrReflectivityColorMap=toLinearSpaceVec4(surfaceMetallicOrReflectivityColorMap);
#endif
surfaceMetallicOrReflectivityColorMap=vec4f(surfaceMetallicOrReflectivityColorMap.rgb*uniforms.vReflectivityInfos.y,surfaceMetallicOrReflectivityColorMap.a);
#endif
#endif
#if defined(MICROSURFACEMAP)
var microSurfaceTexel: vec4f=textureSample(microSurfaceSampler,microSurfaceSamplerSampler,fragmentInputs.vMicroSurfaceSamplerUV+uvOffset)*uniforms.vMicroSurfaceSamplerInfos.y;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
var baseDiffuseRoughnessTexture: f32=textureSample(baseDiffuseRoughnessSampler,baseDiffuseRoughnessSamplerSampler,fragmentInputs.vBaseDiffuseRoughnessUV+uvOffset).x;
#endif
#ifdef METALLICWORKFLOW
var metallicReflectanceFactors: vec4f=uniforms.vMetallicReflectanceFactors;
#ifdef REFLECTANCE
var reflectanceFactorsMap: vec4f=textureSample(reflectanceSampler,reflectanceSamplerSampler,fragmentInputs.vReflectanceUV+uvOffset);
#ifdef REFLECTANCE_GAMMA
reflectanceFactorsMap=toLinearSpaceVec4(reflectanceFactorsMap);
#endif
metallicReflectanceFactors=vec4f(metallicReflectanceFactors.rgb*reflectanceFactorsMap.rgb,metallicReflectanceFactors.a);
#endif
#ifdef METALLIC_REFLECTANCE
var metallicReflectanceFactorsMap: vec4f=textureSample(metallicReflectanceSampler,metallicReflectanceSamplerSampler,fragmentInputs.vMetallicReflectanceUV+uvOffset);
#ifdef METALLIC_REFLECTANCE_GAMMA
metallicReflectanceFactorsMap=toLinearSpaceVec4(metallicReflectanceFactorsMap);
#endif
#ifndef METALLIC_REFLECTANCE_USE_ALPHA_ONLY
metallicReflectanceFactors=vec4f(metallicReflectanceFactors.rgb*metallicReflectanceFactorsMap.rgb,metallicReflectanceFactors.a);
#endif
metallicReflectanceFactors.a*=metallicReflectanceFactorsMap.a;
#endif
#endif
reflectivityOut=reflectivityBlock(
uniforms.vReflectivityColor
#ifdef METALLICWORKFLOW
,surfaceAlbedo
,metallicReflectanceFactors
#endif
,uniforms.baseDiffuseRoughness
#ifdef BASE_DIFFUSE_ROUGHNESS
,baseDiffuseRoughnessTexture
,uniforms.vBaseDiffuseRoughnessInfos
#endif
#ifdef REFLECTIVITY
,uniforms.vReflectivityInfos
,surfaceMetallicOrReflectivityColorMap
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,aoOut.ambientOcclusionColor
#endif
#ifdef MICROSURFACEMAP
,microSurfaceTexel
#endif
#ifdef DETAIL
,detailColor
,uniforms.vDetailInfos
#endif
);var microSurface: f32=reflectivityOut.microSurface;var roughness: f32=reflectivityOut.roughness;var diffuseRoughness: f32=reflectivityOut.diffuseRoughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif
#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
var alphaFresnelOut: alphaFresnelOutParams;alphaFresnelOut=alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface
);alpha=alphaFresnelOut.alpha;
#endif
#endif
#include<pbrBlockGeometryInfo>
#ifdef ANISOTROPIC
var anisotropicOut: anisotropicOutParams;
#ifdef ANISOTROPIC_TEXTURE
var anisotropyMapData: vec3f=textureSample(anisotropySampler,anisotropySamplerSampler,fragmentInputs.vAnisotropyUV+uvOffset).rgb*uniforms.vAnisotropyInfos.y;
#endif
anisotropicOut=anisotropicBlock(
uniforms.vAnisotropy,
roughness,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData,
#endif
TBN,
normalW,
viewDirectionW
);
#endif
#ifdef REFLECTION
var reflectionOut: reflectionOutParams;
#ifndef USE_CUSTOM_REFLECTION
reflectionOut=reflectionBlock(
fragmentInputs.vPositionW
,normalW
,alphaG
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness
#endif
,reflectionSampler
,reflectionSamplerSampler
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,fragmentInputs.vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,uniforms.reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
,irradianceSamplerSampler
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,uniforms.vReflectionDominantDirection
#endif
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
,viewDirectionW
,diffuseRoughness
,surfaceAlbedo
);
#else
#define CUSTOM_REFLECTION
#endif
#endif
#include<pbrBlockReflectance0>
#ifdef SHEEN
var sheenOut: sheenOutParams;
#ifdef SHEEN_TEXTURE
var sheenMapData: vec4f=textureSample(sheenSampler,sheenSamplerSampler,fragmentInputs.vSheenUV+uvOffset);
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
var sheenMapRoughnessData: vec4f=textureSample(sheenRoughnessSampler,sheenRoughnessSamplerSampler,fragmentInputs.vSheenRoughnessUV+uvOffset)*uniforms.vSheenInfos.w;
#endif
sheenOut=sheenBlock(
uniforms.vSheenColor
#ifdef SHEEN_ROUGHNESS
,uniforms.vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData
#endif
#endif
,roughness
#ifdef SHEEN_TEXTURE
,sheenMapData
,uniforms.vSheenInfos.y
#endif
,reflectanceF0
#ifdef SHEEN_LINKWITHALBEDO
,baseColor
,surfaceAlbedo
#endif
#ifdef ENVIRONMENTBRDF
,NdotV
,environmentBrdf
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,AARoughnessFactors
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
,uniforms.vLightingIntensity
,reflectionSampler
,reflectionSamplerSampler
,reflectionOut.reflectionCoords
,NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,seo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,eho
#endif
#endif
);
#ifdef SHEEN_LINKWITHALBEDO
surfaceAlbedo=sheenOut.surfaceAlbedo;
#endif
#endif
#ifdef CLEARCOAT
#ifdef CLEARCOAT_TEXTURE
var clearCoatMapData: vec2f=textureSample(clearCoatSampler,clearCoatSamplerSampler,fragmentInputs.vClearCoatUV+uvOffset).rg*uniforms.vClearCoatInfos.y;
#endif
#endif
#ifdef IRIDESCENCE
var iridescenceOut: iridescenceOutParams;
#ifdef IRIDESCENCE_TEXTURE
var iridescenceMapData: vec2f=textureSample(iridescenceSampler,iridescenceSamplerSampler,fragmentInputs.vIridescenceUV+uvOffset).rg*uniforms.vIridescenceInfos.y;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
var iridescenceThicknessMapData: vec2f=textureSample(iridescenceThicknessSampler,iridescenceThicknessSamplerSampler,fragmentInputs.vIridescenceThicknessUV+uvOffset).rg*uniforms.vIridescenceInfos.w;
#endif
iridescenceOut=iridescenceBlock(
uniforms.vIridescenceParams
,NdotV
,specularEnvironmentR0
#ifdef IRIDESCENCE_TEXTURE
,iridescenceMapData
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,iridescenceThicknessMapData
#endif
#ifdef CLEARCOAT
,NdotVUnclamped
,uniforms.vClearCoatParams
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#endif
);var iridescenceIntensity: f32=iridescenceOut.iridescenceIntensity;specularEnvironmentR0=iridescenceOut.specularEnvironmentR0;
#endif
var clearcoatOut: clearcoatOutParams;
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
var clearCoatMapRoughnessData: vec4f=textureSample(clearCoatRoughnessSampler,clearCoatRoughnessSamplerSampler,fragmentInputs.vClearCoatRoughnessUV+uvOffset)*uniforms.vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
var clearCoatTintMapData: vec4f=textureSample(clearCoatTintSampler,clearCoatTintSamplerSampler,fragmentInputs.vClearCoatTintUV+uvOffset);
#endif
#ifdef CLEARCOAT_BUMP
var clearCoatBumpMapData: vec4f=textureSample(clearCoatBumpSampler,clearCoatBumpSamplerSampler,fragmentInputs.vClearCoatBumpUV+uvOffset);
#endif
clearcoatOut=clearcoatBlock(
fragmentInputs.vPositionW
,geometricNormalW
,viewDirectionW
,uniforms.vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData
#endif
,specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,uniforms.vClearCoatTintParams
,uniforms.clearCoatColorAtDistance
,uniforms.vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,uniforms.vClearCoatBumpInfos
,clearCoatBumpMapData
,fragmentInputs.vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2)
#else
,uniforms.vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,uniforms.normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal
#endif
#ifdef REFLECTION
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
,uniforms.vLightingIntensity
,reflectionSampler
,reflectionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,select(-1.,1.,fragmentInputs.frontFacing)
#endif
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif
#include<pbrBlockReflectance>
var subSurfaceOut: subSurfaceOutParams;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
var thicknessMap: vec4f=textureSample(thicknessSampler,thicknessSamplerSampler,fragmentInputs.vThicknessUV+uvOffset);
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
var refractionIntensityMap: vec4f=textureSample(refractionIntensitySampler,refractionIntensitySamplerSampler,fragmentInputs.vRefractionIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
var translucencyIntensityMap: vec4f=textureSample(translucencyIntensitySampler,translucencyIntensitySamplerSampler,fragmentInputs.vTranslucencyIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
var translucencyColorMap: vec4f=textureSample(translucencyColorSampler,translucencyColorSamplerSampler,fragmentInputs.vTranslucencyColorUV+uvOffset);
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA
translucencyColorMap=toLinearSpaceVec4(translucencyColorMap);
#endif
#endif
subSurfaceOut=subSurfaceBlock(
uniforms.vSubSurfaceIntensity
,uniforms.vThicknessParam
,uniforms.vTintColor
,normalW
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
,vec3f(max(colorSpecularEnvironmentReflectance.r,max(colorSpecularEnvironmentReflectance.g,colorSpecularEnvironmentReflectance.b)))
#else
,baseSpecularEnvironmentReflectance
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
,thicknessMap
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,refractionIntensityMap
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,translucencyIntensityMap
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,uniforms.reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,reflectionOut.irradianceVector
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler
,reflectionSamplerSampler
,uniforms.vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
,irradianceSamplerSampler
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,fragmentInputs.vPositionW
,viewDirectionW
,scene.view
,uniforms.vRefractionInfos
,uniforms.refractionMatrix
,uniforms.vRefractionMicrosurfaceInfos
,uniforms.vLightingIntensity
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,alpha
#endif
#ifdef SS_LODINREFRACTIONALPHA
,NdotVUnclamped
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,roughness
#endif
,alphaG
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,uniforms.vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,uniforms.vRefractionPosition
,uniforms.vRefractionSize
#endif
#ifdef SS_DISPERSION
,uniforms.dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,uniforms.vDiffusionDistance
,uniforms.vTranslucencyColor
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,translucencyColorMap
#endif
#endif
);
#ifdef SS_REFRACTION
surfaceAlbedo=subSurfaceOut.surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha=subSurfaceOut.alpha;
#endif
#endif
#else
subSurfaceOut.specularEnvironmentReflectance=colorSpecularEnvironmentReflectance;
#endif
#include<pbrBlockDirectLighting>
#include<lightFragment>[0..maxSimultaneousLights]
#include<pbrBlockFinalLitComponents>
#endif 
#include<pbrBlockFinalUnlitComponents>
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
#include<pbrBlockFinalColorComposition>
#include<logDepthFragment>
#include<fogFragment>(color,finalColor)
#include<pbrBlockImageProcessing>
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#include<pbrBlockPrePass>
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+finalColor.rgb*finalColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-finalColor.a));} else {fragmentOutputs.backColor+=finalColor;}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3Bicl9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hVQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc2FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0FsYmVkb09wYWNpdHkudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0FscGhhRnJlc25lbC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQW1iaWVudE9jY2x1c2lvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQW5pc290cm9waWMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0NsZWFyY29hdC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrRGlyZWN0TGlnaHRpbmcudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0ZpbmFsQ29sb3JDb21wb3NpdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrRmluYWxMaXRDb21wb25lbnRzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50cy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrR2VvbWV0cnlJbmZvLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tJcmlkZXNjZW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrTGlnaHRtYXBJbml0LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tOb3JtYWxGaW5hbC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUmVmbGVjdGFuY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1JlZmxlY3Rpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1JlZmxlY3Rpdml0eS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrU2hlZW4udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1N1YlN1cmZhY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJGcmFnbWVudEFsdGVybmF0ZURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvcGJyLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9kZWNhbEZyYWdtZW50XCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrQWxiZWRvT3BhY2l0eVwiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBhbGJlZG9PcGFjaXR5T3V0UGFyYW1zXG57c3VyZmFjZUFsYmVkbzogdmVjM2YsXG5hbHBoYTogZjMyfTtcbiNkZWZpbmUgcGJyX2lubGluZVxuZm4gYWxiZWRvT3BhY2l0eUJsb2NrKFxudkFsYmVkb0NvbG9yOiB2ZWM0ZlxuI2lmZGVmIEFMQkVET1xuLGFsYmVkb1RleHR1cmU6IHZlYzRmXG4sYWxiZWRvSW5mb3M6IHZlYzJmXG4jZW5kaWZcbixiYXNlV2VpZ2h0OiBmMzJcbiNpZmRlZiBCQVNFX1dFSUdIVFxuLGJhc2VXZWlnaHRUZXh0dXJlOiB2ZWM0ZlxuLHZCYXNlV2VpZ2h0SW5mb3M6IHZlYzJmXG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZXG4sb3BhY2l0eU1hcDogdmVjNGZcbix2T3BhY2l0eUluZm9zOiB2ZWMyZlxuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG4sZGV0YWlsQ29sb3I6IHZlYzRmXG4sdkRldGFpbEluZm9zOiB2ZWM0ZlxuI2VuZGlmXG4jaWZkZWYgREVDQUxcbixkZWNhbENvbG9yOiB2ZWM0ZlxuLHZEZWNhbEluZm9zOiB2ZWM0ZlxuI2VuZGlmXG4pLT5hbGJlZG9PcGFjaXR5T3V0UGFyYW1zXG57dmFyIG91dFBhcmFtczogYWxiZWRvT3BhY2l0eU91dFBhcmFtczt2YXIgc3VyZmFjZUFsYmVkbzogdmVjM2Y9dkFsYmVkb0NvbG9yLnJnYjt2YXIgYWxwaGE6IGYzMj12QWxiZWRvQ29sb3IuYTtcbiNpZmRlZiBBTEJFRE9cbiNpZiBkZWZpbmVkKEFMUEhBRlJPTUFMQkVETykgfHwgZGVmaW5lZChBTFBIQVRFU1QpXG5hbHBoYSo9YWxiZWRvVGV4dHVyZS5hO1xuI2VuZGlmXG4jaWZkZWYgR0FNTUFBTEJFRE9cbnN1cmZhY2VBbGJlZG8qPXRvTGluZWFyU3BhY2VWZWMzKGFsYmVkb1RleHR1cmUucmdiKTtcbiNlbHNlXG5zdXJmYWNlQWxiZWRvKj1hbGJlZG9UZXh0dXJlLnJnYjtcbiNlbmRpZlxuc3VyZmFjZUFsYmVkbyo9YWxiZWRvSW5mb3MueTtcbiNlbmRpZlxuI2lmbmRlZiBERUNBTF9BRlRFUl9ERVRBSUxcbiNpbmNsdWRlPGRlY2FsRnJhZ21lbnQ+XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbnN1cmZhY2VBbGJlZG8qPWZyYWdtZW50SW5wdXRzLnZDb2xvci5yZ2I7XG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbnZhciBkZXRhaWxBbGJlZG86IGYzMj0yLjAqbWl4KDAuNSxkZXRhaWxDb2xvci5yLHZEZXRhaWxJbmZvcy55KTtzdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG8ucmdiKmRldGFpbEFsYmVkbypkZXRhaWxBbGJlZG87IFxuI2VuZGlmXG4jaWZkZWYgREVDQUxfQUZURVJfREVUQUlMXG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50PlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfQUxCRURPXG5zdXJmYWNlQWxiZWRvKj1iYXNlV2VpZ2h0O1xuI2lmZGVmIEJBU0VfV0VJR0hUXG5zdXJmYWNlQWxiZWRvKj1iYXNlV2VpZ2h0VGV4dHVyZS5yO1xuI2VuZGlmXG4jaWZkZWYgT1BBQ0lUWVxuI2lmZGVmIE9QQUNJVFlSR0JcbmFscGhhPWdldEx1bWluYW5jZShvcGFjaXR5TWFwLnJnYik7XG4jZWxzZVxuYWxwaGEqPW9wYWNpdHlNYXAuYTtcbiNlbmRpZlxuYWxwaGEqPXZPcGFjaXR5SW5mb3MueTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQUxQSEEpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYWxwaGEqPWZyYWdtZW50SW5wdXRzLnZDb2xvci5hO1xuI2VuZGlmXG4jaWYgIWRlZmluZWQoU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWSkgJiYgIWRlZmluZWQoQUxQSEFGUkVTTkVMKVxuI2lmZGVmIEFMUEhBVEVTVFxuI2lmIERFQlVHTU9ERSAhPSA4OFxuaWYgKGFscGhhPEFMUEhBVEVTVFZBTFVFKSB7ZGlzY2FyZDt9XG4jZW5kaWZcbiNpZm5kZWYgQUxQSEFCTEVORFxuYWxwaGE9MS4wO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxub3V0UGFyYW1zLnN1cmZhY2VBbGJlZG89c3VyZmFjZUFsYmVkbztvdXRQYXJhbXMuYWxwaGE9YWxwaGE7cmV0dXJuIG91dFBhcmFtczt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tBbGJlZG9PcGFjaXR5V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tBbHBoYUZyZXNuZWxcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgQUxQSEFGUkVTTkVMXG4jaWYgZGVmaW5lZChBTFBIQVRFU1QpIHx8IGRlZmluZWQoQUxQSEFCTEVORClcbnN0cnVjdCBhbHBoYUZyZXNuZWxPdXRQYXJhbXNcbnthbHBoYTogZjMyfTtmbiBmYWNlZm9yd2FyZChOOiB2ZWMzPGYzMj4sSTogdmVjMzxmMzI+LE5yZWY6IHZlYzM8ZjMyPiktPnZlYzM8ZjMyPiB7cmV0dXJuIHNlbGVjdChOLC1OLGRvdChOcmVmLEkpPjAuMCk7fVxuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBhbHBoYUZyZXNuZWxCbG9jayhcbm5vcm1hbFc6IHZlYzNmLFxudmlld0RpcmVjdGlvblc6IHZlYzNmLFxuYWxwaGE6IGYzMixcbm1pY3JvU3VyZmFjZTogZjMyXG4pLT5hbHBoYUZyZXNuZWxPdXRQYXJhbXNcbnt2YXIgb3V0UGFyYW1zOiBhbHBoYUZyZXNuZWxPdXRQYXJhbXM7dmFyIG9wYWNpdHlQZXJjZXB0dWFsOiBmMzI9YWxwaGE7XG4jaWZkZWYgTElORUFSQUxQSEFGUkVTTkVMXG52YXIgb3BhY2l0eTA6IGYzMj1vcGFjaXR5UGVyY2VwdHVhbDtcbiNlbHNlXG52YXIgb3BhY2l0eTA6IGYzMj1vcGFjaXR5UGVyY2VwdHVhbCpvcGFjaXR5UGVyY2VwdHVhbDtcbiNlbmRpZlxudmFyIG9wYWNpdHk5MDogZjMyPWZyZXNuZWxHcmF6aW5nUmVmbGVjdGFuY2Uob3BhY2l0eTApO3ZhciBub3JtYWxGb3J3YXJkOiB2ZWMzZj1mYWNlZm9yd2FyZChub3JtYWxXLC12aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtvdXRQYXJhbXMuYWxwaGE9Z2V0UmVmbGVjdGFuY2VGcm9tQW5hbHl0aWNhbEJSREZMb29rdXBfSm9uZXMoc2F0dXJhdGUoZG90KHZpZXdEaXJlY3Rpb25XLG5vcm1hbEZvcndhcmQpKSwgdmVjM2Yob3BhY2l0eTApLCB2ZWMzZihvcGFjaXR5OTApLHNxcnQobWljcm9TdXJmYWNlKSkueDtcbiNpZmRlZiBBTFBIQVRFU1RcbmlmIChvdXRQYXJhbXMuYWxwaGE8QUxQSEFURVNUVkFMVUUpIHtkaXNjYXJkO31cbiNpZm5kZWYgQUxQSEFCTEVORFxub3V0UGFyYW1zLmFscGhhPTEuMDtcbiNlbmRpZlxuI2VuZGlmXG5yZXR1cm4gb3V0UGFyYW1zO31cbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tBbHBoYUZyZXNuZWxXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0FtYmllbnRPY2NsdXNpb25cIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgYW1iaWVudE9jY2x1c2lvbk91dFBhcmFtc1xue2FtYmllbnRPY2NsdXNpb25Db2xvcjogdmVjM2YsXG4jaWYgREVCVUdNT0RFPjAgJiYgZGVmaW5lZChBTUJJRU5UKVxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwOiB2ZWMzZlxuI2VuZGlmXG59O1xuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBhbWJpZW50T2NjbHVzaW9uQmxvY2soXG4jaWZkZWYgQU1CSUVOVFxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwXzogdmVjM2YsXG52QW1iaWVudEluZm9zOiB2ZWM0ZlxuI2VuZGlmXG4pLT5hbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zXG57IFxudmFyIG91dFBhcmFtczogYW1iaWVudE9jY2x1c2lvbk91dFBhcmFtczt2YXIgYW1iaWVudE9jY2x1c2lvbkNvbG9yOiB2ZWMzZj0gdmVjM2YoMS4sMS4sMS4pO1xuI2lmZGVmIEFNQklFTlRcbnZhciBhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXA6IHZlYzNmPWFtYmllbnRPY2NsdXNpb25Db2xvck1hcF8qdkFtYmllbnRJbmZvcy55O1xuI2lmZGVmIEFNQklFTlRJTkdSQVlTQ0FMRVxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPSB2ZWMzZihhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAucixhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAucixhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAucik7XG4jZW5kaWZcbmFtYmllbnRPY2NsdXNpb25Db2xvcj1taXgoYW1iaWVudE9jY2x1c2lvbkNvbG9yLGFtYmllbnRPY2NsdXNpb25Db2xvck1hcCx2QW1iaWVudEluZm9zLnopO1xuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPWFtYmllbnRPY2NsdXNpb25Db2xvck1hcDtcbiNlbmRpZlxuI2VuZGlmXG5vdXRQYXJhbXMuYW1iaWVudE9jY2x1c2lvbkNvbG9yPWFtYmllbnRPY2NsdXNpb25Db2xvcjtyZXR1cm4gb3V0UGFyYW1zO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0FtYmllbnRPY2NsdXNpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0FuaXNvdHJvcGljXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIEFOSVNPVFJPUElDXG5zdHJ1Y3QgYW5pc290cm9waWNPdXRQYXJhbXNcbnthbmlzb3Ryb3B5OiBmMzIsXG5hbmlzb3Ryb3BpY1RhbmdlbnQ6IHZlYzNmLFxuYW5pc290cm9waWNCaXRhbmdlbnQ6IHZlYzNmLFxuYW5pc290cm9waWNOb3JtYWw6IHZlYzNmLFxuI2lmIERFQlVHTU9ERT4wICYmIGRlZmluZWQoQU5JU09UUk9QSUNfVEVYVFVSRSlcbmFuaXNvdHJvcHlNYXBEYXRhOiB2ZWMzZlxuI2VuZGlmXG59O1xuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBhbmlzb3Ryb3BpY0Jsb2NrKFxudkFuaXNvdHJvcHk6IHZlYzNmLFxucm91Z2huZXNzOiBmMzIsXG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxuYW5pc290cm9weU1hcERhdGE6IHZlYzNmLFxuI2VuZGlmXG5UQk46IG1hdDN4M2YsXG5ub3JtYWxXOiB2ZWMzZixcbnZpZXdEaXJlY3Rpb25XOiB2ZWMzZlxuKS0+YW5pc290cm9waWNPdXRQYXJhbXNcbnsgXG52YXIgb3V0UGFyYW1zOiBhbmlzb3Ryb3BpY091dFBhcmFtczt2YXIgYW5pc290cm9weTogZjMyPXZBbmlzb3Ryb3B5LmI7dmFyIGFuaXNvdHJvcHlEaXJlY3Rpb246IHZlYzNmPSB2ZWMzZih2QW5pc290cm9weS54eSwwLik7XG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxudmFyIGFtZD1hbmlzb3Ryb3B5TWFwRGF0YS5yZzthbmlzb3Ryb3B5Kj1hbmlzb3Ryb3B5TWFwRGF0YS5iO1xuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuYW5pc290cm9weU1hcERhdGE9YW5pc290cm9weU1hcERhdGE7XG4jZW5kaWZcbmFtZD1hbWQqMi4wLTEuMDtcbiNpZmRlZiBBTklTT1RST1BJQ19MRUdBQ1lcbmFuaXNvdHJvcHlEaXJlY3Rpb249dmVjM2YoYW5pc290cm9weURpcmVjdGlvbi54eSphbWQsYW5pc290cm9weURpcmVjdGlvbi56KTtcbiNlbHNlXG5hbmlzb3Ryb3B5RGlyZWN0aW9uPXZlYzNmKG1hdDJ4MmYoYW5pc290cm9weURpcmVjdGlvbi54LGFuaXNvdHJvcHlEaXJlY3Rpb24ueSwtYW5pc290cm9weURpcmVjdGlvbi55LGFuaXNvdHJvcHlEaXJlY3Rpb24ueCkqbm9ybWFsaXplKGFtZCksYW5pc290cm9weURpcmVjdGlvbi56KTtcbiNlbmRpZlxuI2VuZGlmXG52YXIgYW5pc29UQk46IG1hdDN4M2Y9IG1hdDN4M2Yobm9ybWFsaXplKFRCTlswXSksbm9ybWFsaXplKFRCTlsxXSksbm9ybWFsaXplKFRCTlsyXSkpO3ZhciBhbmlzb3Ryb3BpY1RhbmdlbnQ6IHZlYzNmPW5vcm1hbGl6ZShhbmlzb1RCTiphbmlzb3Ryb3B5RGlyZWN0aW9uKTt2YXIgYW5pc290cm9waWNCaXRhbmdlbnQ6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyhhbmlzb1RCTlsyXSxhbmlzb3Ryb3BpY1RhbmdlbnQpKTtvdXRQYXJhbXMuYW5pc290cm9weT1hbmlzb3Ryb3B5O291dFBhcmFtcy5hbmlzb3Ryb3BpY1RhbmdlbnQ9YW5pc290cm9waWNUYW5nZW50O291dFBhcmFtcy5hbmlzb3Ryb3BpY0JpdGFuZ2VudD1hbmlzb3Ryb3BpY0JpdGFuZ2VudDtvdXRQYXJhbXMuYW5pc290cm9waWNOb3JtYWw9Z2V0QW5pc290cm9waWNCZW50Tm9ybWFscyhhbmlzb3Ryb3BpY1RhbmdlbnQsYW5pc290cm9waWNCaXRhbmdlbnQsbm9ybWFsVyx2aWV3RGlyZWN0aW9uVyxhbmlzb3Ryb3B5LHJvdWdobmVzcyk7cmV0dXJuIG91dFBhcmFtczt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0FuaXNvdHJvcGljV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tDbGVhcmNvYXRcIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgY2xlYXJjb2F0T3V0UGFyYW1zXG57c3BlY3VsYXJFbnZpcm9ubWVudFIwOiB2ZWMzZixcbmNvbnNlcnZhdGlvbkZhY3RvcjogZjMyLFxuY2xlYXJDb2F0Tm9ybWFsVzogdmVjM2YsXG5jbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnM6IHZlYzJmLFxuY2xlYXJDb2F0SW50ZW5zaXR5OiBmMzIsXG5jbGVhckNvYXRSb3VnaG5lc3M6IGYzMixcbiNpZmRlZiBSRUZMRUNUSU9OXG5maW5hbENsZWFyQ29hdFJhZGlhbmNlU2NhbGVkOiB2ZWMzZixcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9USU5UXG5hYnNvcnB0aW9uOiB2ZWMzZixcbmNsZWFyQ29hdE5kb3RWUmVmcmFjdDogZjMyLFxuY2xlYXJDb2F0Q29sb3I6IHZlYzNmLFxuY2xlYXJDb2F0VGhpY2tuZXNzOiBmMzIsXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT04pXG5lbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3JDbGVhckNvYXQ6IHZlYzNmLFxuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbiNpZmRlZiBDTEVBUkNPQVRfQlVNUFxuVEJOQ2xlYXJDb2F0OiBtYXQzeDNmLFxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbmNsZWFyQ29hdE1hcERhdGE6IHZlYzJmLFxuI2VuZGlmXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVElOVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfVElOVF9URVhUVVJFKVxuY2xlYXJDb2F0VGludE1hcERhdGE6IHZlYzRmLFxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZTogdmVjNGYsXG5jbGVhckNvYXRFbnZpcm9ubWVudFJlZmxlY3RhbmNlOiB2ZWMzZixcbiNlbmRpZlxuY2xlYXJDb2F0TmRvdFY6IGYzMlxuI2VuZGlmXG59O1xuI2lmZGVmIENMRUFSQ09BVFxuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBjbGVhcmNvYXRCbG9jayhcbnZQb3NpdGlvblc6IHZlYzNmXG4sZ2VvbWV0cmljTm9ybWFsVzogdmVjM2Zcbix2aWV3RGlyZWN0aW9uVzogdmVjM2Zcbix2Q2xlYXJDb2F0UGFyYW1zOiB2ZWMyZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTKSAmJiAhZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1NfSURFTlRJQ0FMKSAmJiAhZGVmaW5lZChDTEVBUkNPQVRfVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxuLGNsZWFyQ29hdE1hcFJvdWdobmVzc0RhdGE6IHZlYzRmXG4jZW5kaWZcbixzcGVjdWxhckVudmlyb25tZW50UjA6IHZlYzNmXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbixjbGVhckNvYXRNYXBEYXRhOiB2ZWMyZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRcbix2Q2xlYXJDb2F0VGludFBhcmFtczogdmVjNGZcbixjbGVhckNvYXRDb2xvckF0RGlzdGFuY2U6IGYzMlxuLHZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zOiB2ZWM0ZlxuI2lmZGVmIENMRUFSQ09BVF9USU5UX1RFWFRVUkVcbixjbGVhckNvYXRUaW50TWFwRGF0YTogdmVjNGZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX0JVTVBcbix2Q2xlYXJDb2F0QnVtcEluZm9zOiB2ZWMyZlxuLGNsZWFyQ29hdEJ1bXBNYXBEYXRhOiB2ZWM0ZlxuLHZDbGVhckNvYXRCdW1wVVY6IHZlYzJmXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbix2VEJOOiBtYXQzeDNmXG4jZWxzZVxuLHZDbGVhckNvYXRUYW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmXG4jZW5kaWZcbiNpZmRlZiBPQkpFQ1RTUEFDRV9OT1JNQUxNQVBcbixub3JtYWxNYXRyaXg6IG1hdDR4NGZcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChGT1JDRU5PUk1BTEZPUldBUkQpICYmIGRlZmluZWQoTk9STUFMKVxuLGZhY2VOb3JtYWw6IHZlYzNmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG4sdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvczogdmVjM2Zcbix2UmVmbGVjdGlvbkluZm9zOiB2ZWMyZlxuLHZSZWZsZWN0aW9uQ29sb3I6IHZlYzNmXG4sdkxpZ2h0aW5nSW50ZW5zaXR5OiB2ZWM0ZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixyZWZsZWN0aW9uU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbiNlbHNlXG4scmVmbGVjdGlvblNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPlxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2VuZGlmXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyU2FtcGxlcjogc2FtcGxlciBcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+XG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlciBcbiNlbHNlXG4scmVmbGVjdGlvbkxvd1NhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPlxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyU2FtcGxlcjogc2FtcGxlciBcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPlxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclNhbXBsZXI6IHNhbXBsZXIgXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzogdmVjMmZcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChUV09TSURFRExJR0hUSU5HKVxuLGZyb250RmFjaW5nTXVsdGlwbGllcjogZjMyXG4jZW5kaWYgXG4pLT5jbGVhcmNvYXRPdXRQYXJhbXNcbnt2YXIgb3V0UGFyYW1zOiBjbGVhcmNvYXRPdXRQYXJhbXM7dmFyIGNsZWFyQ29hdEludGVuc2l0eTogZjMyPXZDbGVhckNvYXRQYXJhbXMueDt2YXIgY2xlYXJDb2F0Um91Z2huZXNzOiBmMzI9dkNsZWFyQ29hdFBhcmFtcy55O1xuI2lmZGVmIENMRUFSQ09BVF9URVhUVVJFXG5jbGVhckNvYXRJbnRlbnNpdHkqPWNsZWFyQ29hdE1hcERhdGEueDtcbiNpZmRlZiBDTEVBUkNPQVRfVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFXG5jbGVhckNvYXRSb3VnaG5lc3MqPWNsZWFyQ29hdE1hcERhdGEueTtcbiNlbmRpZlxuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuY2xlYXJDb2F0TWFwRGF0YT1jbGVhckNvYXRNYXBEYXRhO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUykgJiYgIWRlZmluZWQoQ0xFQVJDT0FUX1VTRV9ST1VHSE5FU1NfRlJPTV9NQUlOVEVYVFVSRSlcbmNsZWFyQ29hdFJvdWdobmVzcyo9Y2xlYXJDb2F0TWFwUm91Z2huZXNzRGF0YS55O1xuI2VuZGlmXG5vdXRQYXJhbXMuY2xlYXJDb2F0SW50ZW5zaXR5PWNsZWFyQ29hdEludGVuc2l0eTtvdXRQYXJhbXMuY2xlYXJDb2F0Um91Z2huZXNzPWNsZWFyQ29hdFJvdWdobmVzcztcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxudmFyIGNsZWFyQ29hdENvbG9yOiB2ZWMzZj12Q2xlYXJDb2F0VGludFBhcmFtcy5yZ2I7dmFyIGNsZWFyQ29hdFRoaWNrbmVzczogZjMyPXZDbGVhckNvYXRUaW50UGFyYW1zLmE7XG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRfVEVYVFVSRVxuI2lmZGVmIENMRUFSQ09BVF9USU5UX0dBTU1BVEVYVFVSRVxuY2xlYXJDb2F0Q29sb3IqPXRvTGluZWFyU3BhY2VWZWMzKGNsZWFyQ29hdFRpbnRNYXBEYXRhLnJnYik7XG4jZWxzZVxuY2xlYXJDb2F0Q29sb3IqPWNsZWFyQ29hdFRpbnRNYXBEYXRhLnJnYjtcbiNlbmRpZlxuY2xlYXJDb2F0VGhpY2tuZXNzKj1jbGVhckNvYXRUaW50TWFwRGF0YS5hO1xuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuY2xlYXJDb2F0VGludE1hcERhdGE9Y2xlYXJDb2F0VGludE1hcERhdGE7XG4jZW5kaWZcbiNlbmRpZlxub3V0UGFyYW1zLmNsZWFyQ29hdENvbG9yPWNvbXB1dGVDb2xvckF0RGlzdGFuY2VJbk1lZGlhKGNsZWFyQ29hdENvbG9yLGNsZWFyQ29hdENvbG9yQXREaXN0YW5jZSk7b3V0UGFyYW1zLmNsZWFyQ29hdFRoaWNrbmVzcz1jbGVhckNvYXRUaGlja25lc3M7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfUkVNQVBfRjBcbnZhciBzcGVjdWxhckVudmlyb25tZW50UjBVcGRhdGVkOiB2ZWMzZj1nZXRSMFJlbWFwcGVkRm9yQ2xlYXJDb2F0KHNwZWN1bGFyRW52aXJvbm1lbnRSMCk7XG4jZWxzZVxudmFyIHNwZWN1bGFyRW52aXJvbm1lbnRSMFVwZGF0ZWQ6IHZlYzNmPXNwZWN1bGFyRW52aXJvbm1lbnRSMDtcbiNlbmRpZlxub3V0UGFyYW1zLnNwZWN1bGFyRW52aXJvbm1lbnRSMD1taXgoc3BlY3VsYXJFbnZpcm9ubWVudFIwLHNwZWN1bGFyRW52aXJvbm1lbnRSMFVwZGF0ZWQsY2xlYXJDb2F0SW50ZW5zaXR5KTt2YXIgY2xlYXJDb2F0Tm9ybWFsVzogdmVjM2Y9Z2VvbWV0cmljTm9ybWFsVztcbiNpZmRlZiBDTEVBUkNPQVRfQlVNUFxuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbnZhciBjbGVhckNvYXROb3JtYWxTY2FsZTogZjMyPTEuMDtcbiNlbHNlXG52YXIgY2xlYXJDb2F0Tm9ybWFsU2NhbGU6IGYzMj12Q2xlYXJDb2F0QnVtcEluZm9zLnk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmFyIFRCTkNsZWFyQ29hdDogbWF0M3gzZj12VEJOO1xuI2Vsc2VcbnZhciBUQk5DbGVhckNvYXRVVjogdmVjMmY9dkNsZWFyQ29hdEJ1bXBVVipmcm9udEZhY2luZ011bHRpcGxpZXI7dmFyIFRCTkNsZWFyQ29hdDogbWF0M3gzZj1jb3RhbmdlbnRfZnJhbWUoY2xlYXJDb2F0Tm9ybWFsVypjbGVhckNvYXROb3JtYWxTY2FsZSx2UG9zaXRpb25XLFRCTkNsZWFyQ29hdFVWLHZDbGVhckNvYXRUYW5nZW50U3BhY2VQYXJhbXMpO1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5UQk5DbGVhckNvYXQ9VEJOQ2xlYXJDb2F0O1xuI2VuZGlmXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG5jbGVhckNvYXROb3JtYWxXPW5vcm1hbGl6ZShjbGVhckNvYXRCdW1wTWFwRGF0YS54eXogKjIuMC0xLjApO2NsZWFyQ29hdE5vcm1hbFc9bm9ybWFsaXplKCBtYXQzeDNmKG5vcm1hbE1hdHJpeFswXS54eXosbm9ybWFsTWF0cml4WzFdLnh5eixub3JtYWxNYXRyaXhbMl0ueHl6KSpjbGVhckNvYXROb3JtYWxXKTtcbiNlbHNlXG5jbGVhckNvYXROb3JtYWxXPXBlcnR1cmJOb3JtYWwoVEJOQ2xlYXJDb2F0LGNsZWFyQ29hdEJ1bXBNYXBEYXRhLnh5eix2Q2xlYXJDb2F0QnVtcEluZm9zLnkpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEZPUkNFTk9STUFMRk9SV0FSRCkgJiYgZGVmaW5lZChOT1JNQUwpXG5jbGVhckNvYXROb3JtYWxXKj1zaWduKGRvdChjbGVhckNvYXROb3JtYWxXLGZhY2VOb3JtYWwpKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVFdPU0lERURMSUdIVElORykgJiYgZGVmaW5lZChOT1JNQUwpXG5jbGVhckNvYXROb3JtYWxXPWNsZWFyQ29hdE5vcm1hbFcqZnJvbnRGYWNpbmdNdWx0aXBsaWVyO1xuI2VuZGlmXG5vdXRQYXJhbXMuY2xlYXJDb2F0Tm9ybWFsVz1jbGVhckNvYXROb3JtYWxXO291dFBhcmFtcy5jbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnM9Z2V0QUFSb3VnaG5lc3NGYWN0b3JzKGNsZWFyQ29hdE5vcm1hbFcueHl6KTt2YXIgY2xlYXJDb2F0TmRvdFZVbmNsYW1wZWQ6IGYzMj1kb3QoY2xlYXJDb2F0Tm9ybWFsVyx2aWV3RGlyZWN0aW9uVyk7dmFyIGNsZWFyQ29hdE5kb3RWOiBmMzI9YWJzRXBzKGNsZWFyQ29hdE5kb3RWVW5jbGFtcGVkKTtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmNsZWFyQ29hdE5kb3RWPWNsZWFyQ29hdE5kb3RWO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRcbnZhciBjbGVhckNvYXRWUmVmcmFjdDogdmVjM2Y9cmVmcmFjdCgtdmlld0RpcmVjdGlvblcsY2xlYXJDb2F0Tm9ybWFsVyx2Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtcy55KTtvdXRQYXJhbXMuY2xlYXJDb2F0TmRvdFZSZWZyYWN0PWFic0Vwcyhkb3QoY2xlYXJDb2F0Tm9ybWFsVyxjbGVhckNvYXRWUmVmcmFjdCkpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICghZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWCkgfHwgZGVmaW5lZChNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT04pKVxudmFyIGVudmlyb25tZW50Q2xlYXJDb2F0QnJkZjogdmVjM2Y9Z2V0QlJERkxvb2t1cChjbGVhckNvYXROZG90VixjbGVhckNvYXRSb3VnaG5lc3MpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OKVxudmFyIGNsZWFyQ29hdEFscGhhRzogZjMyPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShjbGVhckNvYXRSb3VnaG5lc3MpO1xuI2lmZGVmIFNQRUNVTEFSQUFcbmNsZWFyQ29hdEFscGhhRys9b3V0UGFyYW1zLmNsZWFyQ29hdEFBUm91Z2huZXNzRmFjdG9ycy55O1xuI2VuZGlmXG52YXIgZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZTogdmVjNGY9IHZlYzRmKDAuLDAuLDAuLDAuKTt2YXIgY2xlYXJDb2F0UmVmbGVjdGlvblZlY3RvcjogdmVjM2Y9Y29tcHV0ZVJlZmxlY3Rpb25Db29yZHMoIHZlYzRmKHZQb3NpdGlvblcsMS4wKSxjbGVhckNvYXROb3JtYWxXKTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxuY2xlYXJDb2F0UmVmbGVjdGlvblZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmFyIGNsZWFyQ29hdFJlZmxlY3Rpb25Db29yZHM6IHZlYzNmPWNsZWFyQ29hdFJlZmxlY3Rpb25WZWN0b3I7XG4jZWxzZVxudmFyIGNsZWFyQ29hdFJlZmxlY3Rpb25Db29yZHM6IHZlYzJmPWNsZWFyQ29hdFJlZmxlY3Rpb25WZWN0b3IueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5jbGVhckNvYXRSZWZsZWN0aW9uQ29vcmRzLz1jbGVhckNvYXRSZWZsZWN0aW9uVmVjdG9yLno7XG4jZW5kaWZcbmNsZWFyQ29hdFJlZmxlY3Rpb25Db29yZHMueT0xLjAtY2xlYXJDb2F0UmVmbGVjdGlvbkNvb3Jkcy55O1xuI2VuZGlmXG5lbnZpcm9ubWVudENsZWFyQ29hdFJhZGlhbmNlPXNhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuY2xlYXJDb2F0QWxwaGFHXG4sdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHZSZWZsZWN0aW9uSW5mb3Ncbix2UmVmbGVjdGlvbkNvbG9yXG4jaWYgZGVmaW5lZChMT0RJTlJFRkxFQ1RJT05BTFBIQSkgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG4sY2xlYXJDb2F0TmRvdFZVbmNsYW1wZWRcbiNlbmRpZlxuI2lmZGVmIExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTlxuLGNsZWFyQ29hdFJvdWdobmVzc1xuI2VuZGlmXG4scmVmbGVjdGlvblNhbXBsZXJcbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXJcbixjbGVhckNvYXRSZWZsZWN0aW9uQ29vcmRzXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4scmVmbGVjdGlvbkxvd1NhbXBsZXJcbixyZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXJcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZiBcbik7XG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5lbnZpcm9ubWVudENsZWFyQ29hdFJhZGlhbmNlPWVudmlyb25tZW50Q2xlYXJDb2F0UmFkaWFuY2U7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG52YXIgY2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZTogdmVjM2Y9Z2V0UmVmbGVjdGFuY2VGcm9tQlJERkxvb2t1cCh2ZWMzZih1bmlmb3Jtcy52Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtcy54KSxlbnZpcm9ubWVudENsZWFyQ29hdEJyZGYpO1xuI2lmZGVmIEhPUklaT05PQ0NMVVNJT05cbiNpZmRlZiBCVU1QXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmFyIGNsZWFyQ29hdEVobzogZjMyPWVudmlyb25tZW50SG9yaXpvbk9jY2x1c2lvbigtdmlld0RpcmVjdGlvblcsY2xlYXJDb2F0Tm9ybWFsVyxnZW9tZXRyaWNOb3JtYWxXKTtjbGVhckNvYXRFbnZpcm9ubWVudFJlZmxlY3RhbmNlKj1jbGVhckNvYXRFaG87XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxudmFyIGNsZWFyQ29hdEVudmlyb25tZW50UmVmbGVjdGFuY2U6IHZlYzNmPWdldFJlZmxlY3RhbmNlRnJvbUFuYWx5dGljYWxCUkRGTG9va3VwX0pvbmVzKGNsZWFyQ29hdE5kb3RWLCB2ZWMzZigxLiksIHZlYzNmKDEuKSxzcXJ0KDEuLWNsZWFyQ29hdFJvdWdobmVzcykpO1xuI2VuZGlmXG5jbGVhckNvYXRFbnZpcm9ubWVudFJlZmxlY3RhbmNlKj1jbGVhckNvYXRJbnRlbnNpdHk7XG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5jbGVhckNvYXRFbnZpcm9ubWVudFJlZmxlY3RhbmNlPWNsZWFyQ29hdEVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZW5kaWZcbm91dFBhcmFtcy5maW5hbENsZWFyQ29hdFJhZGlhbmNlU2NhbGVkPVxuZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZS5yZ2IgKlxuY2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZSAqXG52TGlnaHRpbmdJbnRlbnNpdHkuejtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RJTlQpXG5vdXRQYXJhbXMuYWJzb3JwdGlvbj1jb21wdXRlQ2xlYXJDb2F0QWJzb3JwdGlvbihvdXRQYXJhbXMuY2xlYXJDb2F0TmRvdFZSZWZyYWN0LG91dFBhcmFtcy5jbGVhckNvYXROZG90VlJlZnJhY3Qsb3V0UGFyYW1zLmNsZWFyQ29hdENvbG9yLGNsZWFyQ29hdFRoaWNrbmVzcyxjbGVhckNvYXRJbnRlbnNpdHkpO1xuI2VuZGlmXG52YXIgZnJlc25lbElCTENsZWFyQ29hdDogZjMyPWZyZXNuZWxTY2hsaWNrR0dYKGNsZWFyQ29hdE5kb3RWLHVuaWZvcm1zLnZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zLngsQ0xFQVJDT0FUUkVGTEVDVEFOQ0U5MCk7ZnJlc25lbElCTENsZWFyQ29hdCo9Y2xlYXJDb2F0SW50ZW5zaXR5O291dFBhcmFtcy5jb25zZXJ2YXRpb25GYWN0b3I9KDEuLWZyZXNuZWxJQkxDbGVhckNvYXQpO1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTilcbm91dFBhcmFtcy5lbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3JDbGVhckNvYXQ9Z2V0RW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yKG91dFBhcmFtcy5zcGVjdWxhckVudmlyb25tZW50UjAsZW52aXJvbm1lbnRDbGVhckNvYXRCcmRmKTtcbiNlbmRpZlxucmV0dXJuIG91dFBhcmFtczt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0NsZWFyY29hdFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrRGlyZWN0TGlnaHRpbmdcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgZGlmZnVzZUJhc2U6IHZlYzNmPXZlYzNmKDAuLDAuLDAuKTtcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbnZhciBkaWZmdXNlVHJhbnNtaXNzaW9uQmFzZTogdmVjM2Y9dmVjM2YoMC4sMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgc3BlY3VsYXJCYXNlOiB2ZWMzZj12ZWMzZigwLiwwLiwwLik7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbnZhciBjbGVhckNvYXRCYXNlOiB2ZWMzZj12ZWMzZigwLiwwLiwwLik7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxudmFyIHNoZWVuQmFzZTogdmVjM2Y9dmVjM2YoMC4sMC4sMC4pO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTUEVDVUxBUlRFUk0pICYmIGRlZmluZWQoTElHSFQwKVxudmFyIGNvbG9yZWRGcmVzbmVsOiB2ZWMzZj12ZWMzZigwLiwwLiwwLik7XG4jZW5kaWZcbnZhciBwcmVJbmZvOiBwcmVMaWdodGluZ0luZm87dmFyIGluZm86IGxpZ2h0aW5nSW5mbzt2YXIgc2hhZG93OiBmMzI9MS47IFxudmFyIGFnZ1NoYWRvdzogZjMyPTAuO3ZhciBudW1MaWdodHM6IGYzMj0wLjtcbiNpZiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfVElOVClcbnZhciBhYnNvcnB0aW9uOiB2ZWMzZj12ZWMzZigwLik7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0RpcmVjdExpZ2h0aW5nV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tGaW5hbENvbG9yQ29tcG9zaXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgZmluYWxDb2xvcjogdmVjNGY9IHZlYzRmKFxuI2lmbmRlZiBVTkxJVFxuI2lmZGVmIFJFRkxFQ1RJT05cbmZpbmFsSXJyYWRpYW5jZSArXG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbmZpbmFsU3BlY3VsYXJTY2FsZWQgK1xuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbmZpbmFsU2hlZW5TY2FsZWQgK1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5maW5hbENsZWFyQ29hdFNjYWxlZCArXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG5maW5hbFJhZGlhbmNlU2NhbGVkICtcbiNpZiBkZWZpbmVkKFNIRUVOKSAmJiBkZWZpbmVkKEVOVklST05NRU5UQlJERilcbnNoZWVuT3V0LmZpbmFsU2hlZW5SYWRpYW5jZVNjYWxlZCArXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbmNsZWFyY29hdE91dC5maW5hbENsZWFyQ29hdFJhZGlhbmNlU2NhbGVkICtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTlxuc3ViU3VyZmFjZU91dC5maW5hbFJlZnJhY3Rpb24gK1xuI2VuZGlmXG4jZW5kaWZcbmZpbmFsQW1iaWVudCArXG5maW5hbERpZmZ1c2UsXG5hbHBoYSk7XG4jaWZkZWYgTElHSFRNQVBcbiNpZm5kZWYgTElHSFRNQVBFWENMVURFRFxuI2lmZGVmIFVTRUxJR0hUTUFQQVNTSEFET1dNQVBcbmZpbmFsQ29sb3I9dmVjNGYoZmluYWxDb2xvci5yZ2IqbGlnaHRtYXBDb2xvci5yZ2IsZmluYWxDb2xvci5hKTtcbiNlbHNlXG5maW5hbENvbG9yPXZlYzRmKGZpbmFsQ29sb3IucmdiK2xpZ2h0bWFwQ29sb3IucmdiLGZpbmFsQ29sb3IuYSk7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5maW5hbENvbG9yPXZlYzRmKGZpbmFsQ29sb3IucmdiK2ZpbmFsRW1pc3NpdmUsZmluYWxDb2xvci5hKTtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GT0dcbmZpbmFsQ29sb3I9bWF4KGZpbmFsQ29sb3IsdmVjNGYoMC4wKSk7XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tGaW5hbENvbG9yQ29tcG9zaXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0ZpbmFsTGl0Q29tcG9uZW50c1wiO1xuY29uc3Qgc2hhZGVyID0gYGFnZ1NoYWRvdz1hZ2dTaGFkb3cvbnVtTGlnaHRzO1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuI2lmZGVmIE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTlxudmFyIGJhc2VTcGVjdWxhckVuZXJneUNvbnNlcnZhdGlvbkZhY3RvcjogdmVjM2Y9Z2V0RW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yKHZlYzNmKHJlZmxlY3RhbmNlRjApLGVudmlyb25tZW50QnJkZik7dmFyIGNvbG9yZWRFbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3I6IHZlYzNmPWdldEVuZXJneUNvbnNlcnZhdGlvbkZhY3RvcihjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLGVudmlyb25tZW50QnJkZik7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoU0hFRU4pICYmIGRlZmluZWQoU0hFRU5fQUxCRURPU0NBTElORykgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG5zdXJmYWNlQWxiZWRvPXNoZWVuT3V0LnNoZWVuQWxiZWRvU2NhbGluZypzdXJmYWNlQWxiZWRvLnJnYjtcbiNlbmRpZlxuI2lmZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG4jaWZuZGVmIE1FVEFMTElDV09SS0ZMT1dcbiNpZmRlZiBTUEVDVUxBUl9HTE9TU0lORVNTX0VORVJHWV9DT05TRVJWQVRJT05cbnN1cmZhY2VBbGJlZG89dmVjM2YoMS4tcmVmbGVjdGFuY2VGMCkqc3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxudmFyIGZpbmFsSXJyYWRpYW5jZTogdmVjM2Y9cmVmbGVjdGlvbk91dC5lbnZpcm9ubWVudElycmFkaWFuY2U7XG4jaWZuZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG4jaWYgZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKSB8fCBkZWZpbmVkKFNQRUNVTEFSX0dMT1NTSU5FU1NfRU5FUkdZX0NPTlNFUlZBVElPTilcbnZhciBiYXNlU3BlY3VsYXJFbmVyZ3k6IHZlYzNmPXZlYzNmKGJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UpO1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuI2lmZGVmIE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTlxuYmFzZVNwZWN1bGFyRW5lcmd5Kj1iYXNlU3BlY3VsYXJFbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3I7XG4jZW5kaWZcbiNlbmRpZlxuZmluYWxJcnJhZGlhbmNlKj1jbGFtcCh2ZWMzZigxLjApLWJhc2VTcGVjdWxhckVuZXJneSx2ZWMzZigwLjApLHZlYzNmKDEuMCkpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMRUFSQ09BVClcbmZpbmFsSXJyYWRpYW5jZSo9Y2xlYXJjb2F0T3V0LmNvbnNlcnZhdGlvbkZhY3RvcjtcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKVxuZmluYWxJcnJhZGlhbmNlKj1jbGVhcmNvYXRPdXQuYWJzb3JwdGlvbjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZuZGVmIFNTX0FQUExZX0FMQkVET19BRlRFUl9TVUJTVVJGQUNFXG5maW5hbElycmFkaWFuY2UqPXN1cmZhY2VBbGJlZG8ucmdiO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19SRUZSQUNUSU9OKVxuZmluYWxJcnJhZGlhbmNlKj1zdWJTdXJmYWNlT3V0LnJlZnJhY3Rpb25PcGFjaXR5O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpXG5maW5hbElycmFkaWFuY2UqPSgxLjAtc3ViU3VyZmFjZU91dC50cmFuc2x1Y2VuY3lJbnRlbnNpdHkpO2ZpbmFsSXJyYWRpYW5jZSs9c3ViU3VyZmFjZU91dC5yZWZyYWN0aW9uSXJyYWRpYW5jZTtcbiNlbmRpZlxuI2lmZGVmIFNTX0FQUExZX0FMQkVET19BRlRFUl9TVUJTVVJGQUNFXG5maW5hbElycmFkaWFuY2UqPXN1cmZhY2VBbGJlZG8ucmdiO1xuI2VuZGlmXG5maW5hbElycmFkaWFuY2UqPXVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS56O2ZpbmFsSXJyYWRpYW5jZSo9YW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52YXIgZmluYWxTcGVjdWxhcjogdmVjM2Y9c3BlY3VsYXJCYXNlO2ZpbmFsU3BlY3VsYXI9bWF4KGZpbmFsU3BlY3VsYXIsdmVjM2YoMC4wKSk7dmFyIGZpbmFsU3BlY3VsYXJTY2FsZWQ6IHZlYzNmPWZpbmFsU3BlY3VsYXIqdW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5LngqdW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5Lnc7XG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmIGRlZmluZWQoTVNfQlJERl9FTkVSR1lfQ09OU0VSVkFUSU9OKVxuZmluYWxTcGVjdWxhclNjYWxlZCo9Y29sb3JlZEVuZXJneUNvbnNlcnZhdGlvbkZhY3RvcjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU0hFRU4pICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKFNIRUVOX0FMQkVET1NDQUxJTkcpXG5maW5hbFNwZWN1bGFyU2NhbGVkKj1zaGVlbk91dC5zaGVlbkFsYmVkb1NjYWxpbmc7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbnZhciBmaW5hbFJhZGlhbmNlOiB2ZWMzZj1yZWZsZWN0aW9uT3V0LmVudmlyb25tZW50UmFkaWFuY2UucmdiO2ZpbmFsUmFkaWFuY2UqPWNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlOzt2YXIgZmluYWxSYWRpYW5jZVNjYWxlZDogdmVjM2Y9ZmluYWxSYWRpYW5jZSp1bmlmb3Jtcy52TGlnaHRpbmdJbnRlbnNpdHkuejtcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT04pXG5maW5hbFJhZGlhbmNlU2NhbGVkKj1jb2xvcmVkRW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTSEVFTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmIGRlZmluZWQoU0hFRU5fQUxCRURPU0NBTElORylcbmZpbmFsUmFkaWFuY2VTY2FsZWQqPXNoZWVuT3V0LnNoZWVuQWxiZWRvU2NhbGluZztcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnZhciBmaW5hbFNoZWVuOiB2ZWMzZj1zaGVlbkJhc2Uqc2hlZW5PdXQuc2hlZW5Db2xvcjtmaW5hbFNoZWVuPW1heChmaW5hbFNoZWVuLHZlYzNmKDAuMCkpO3ZhciBmaW5hbFNoZWVuU2NhbGVkOiB2ZWMzZj1maW5hbFNoZWVuKnVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS54KnVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS53O1xuI2lmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKFJFRkxFQ1RJT04pICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuc2hlZW5PdXQuZmluYWxTaGVlblJhZGlhbmNlU2NhbGVkKj1jbGVhcmNvYXRPdXQuY29uc2VydmF0aW9uRmFjdG9yO1xuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RJTlQpXG5zaGVlbk91dC5maW5hbFNoZWVuUmFkaWFuY2VTY2FsZWQqPWNsZWFyY29hdE91dC5hYnNvcnB0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxudmFyIGZpbmFsQ2xlYXJDb2F0OiB2ZWMzZj1jbGVhckNvYXRCYXNlO2ZpbmFsQ2xlYXJDb2F0PW1heChmaW5hbENsZWFyQ29hdCx2ZWMzZigwLjApKTt2YXIgZmluYWxDbGVhckNvYXRTY2FsZWQ6IHZlYzNmPWZpbmFsQ2xlYXJDb2F0KnVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS54KnVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS53O1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTilcbmZpbmFsQ2xlYXJDb2F0U2NhbGVkKj1jbGVhcmNvYXRPdXQuZW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yQ2xlYXJDb2F0O1xuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTlxuc3ViU3VyZmFjZU91dC5maW5hbFJlZnJhY3Rpb24qPWNsZWFyY29hdE91dC5jb25zZXJ2YXRpb25GYWN0b3I7XG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRcbnN1YlN1cmZhY2VPdXQuZmluYWxSZWZyYWN0aW9uKj1jbGVhcmNvYXRPdXQuYWJzb3JwdGlvbjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBBTFBIQUJMRU5EXG52YXIgbHVtaW5hbmNlT3ZlckFscGhhOiBmMzI9MC4wO1xuI2lmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChSQURJQU5DRU9WRVJBTFBIQSlcbmx1bWluYW5jZU92ZXJBbHBoYSs9Z2V0THVtaW5hbmNlKGZpbmFsUmFkaWFuY2VTY2FsZWQpO1xuI2lmIGRlZmluZWQoQ0xFQVJDT0FUKVxubHVtaW5hbmNlT3ZlckFscGhhKz1nZXRMdW1pbmFuY2UoY2xlYXJjb2F0T3V0LmZpbmFsQ2xlYXJDb2F0UmFkaWFuY2VTY2FsZWQpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNQRUNVTEFSVEVSTSkgJiYgZGVmaW5lZChTUEVDVUxBUk9WRVJBTFBIQSlcbmx1bWluYW5jZU92ZXJBbHBoYSs9Z2V0THVtaW5hbmNlKGZpbmFsU3BlY3VsYXJTY2FsZWQpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTEVBUkNPQVQpICYmIGRlZmluZWQoQ0xFQVJDT0FUT1ZFUkFMUEhBKVxubHVtaW5hbmNlT3ZlckFscGhhKz1nZXRMdW1pbmFuY2UoZmluYWxDbGVhckNvYXRTY2FsZWQpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSQURJQU5DRU9WRVJBTFBIQSkgfHwgZGVmaW5lZChTUEVDVUxBUk9WRVJBTFBIQSkgfHwgZGVmaW5lZChDTEVBUkNPQVRPVkVSQUxQSEEpXG5hbHBoYT1zYXR1cmF0ZShhbHBoYStsdW1pbmFuY2VPdmVyQWxwaGEqbHVtaW5hbmNlT3ZlckFscGhhKTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tGaW5hbExpdENvbXBvbmVudHNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0ZpbmFsVW5saXRDb21wb25lbnRzXCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyIGZpbmFsRGlmZnVzZTogdmVjM2Y9ZGlmZnVzZUJhc2U7ZmluYWxEaWZmdXNlKj1zdXJmYWNlQWxiZWRvO1xuI2lmIGRlZmluZWQoU1NfUkVGUkFDVElPTikgJiYgIWRlZmluZWQoVU5MSVQpICYmICFkZWZpbmVkKExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OKVxuZmluYWxEaWZmdXNlKj1zdWJTdXJmYWNlT3V0LnJlZnJhY3Rpb25PcGFjaXR5O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpICYmICFkZWZpbmVkKFVOTElUKVxuZmluYWxEaWZmdXNlKz1kaWZmdXNlVHJhbnNtaXNzaW9uQmFzZTtcbiNlbmRpZlxuZmluYWxEaWZmdXNlPW1heChmaW5hbERpZmZ1c2UsdmVjM2YoMC4wKSk7ZmluYWxEaWZmdXNlKj11bmlmb3Jtcy52TGlnaHRpbmdJbnRlbnNpdHkueDt2YXIgZmluYWxBbWJpZW50OiB2ZWMzZj11bmlmb3Jtcy52QW1iaWVudENvbG9yO2ZpbmFsQW1iaWVudCo9c3VyZmFjZUFsYmVkby5yZ2I7dmFyIGZpbmFsRW1pc3NpdmU6IHZlYzNmPXVuaWZvcm1zLnZFbWlzc2l2ZUNvbG9yO1xuI2lmZGVmIEVNSVNTSVZFXG52YXIgZW1pc3NpdmVDb2xvclRleDogdmVjM2Y9dGV4dHVyZVNhbXBsZShlbWlzc2l2ZVNhbXBsZXIsZW1pc3NpdmVTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RW1pc3NpdmVVVit1dk9mZnNldCkucmdiO1xuI2lmZGVmIEdBTU1BRU1JU1NJVkVcbmZpbmFsRW1pc3NpdmUqPXRvTGluZWFyU3BhY2VWZWMzKGVtaXNzaXZlQ29sb3JUZXgucmdiKTtcbiNlbHNlXG5maW5hbEVtaXNzaXZlKj1lbWlzc2l2ZUNvbG9yVGV4LnJnYjtcbiNlbmRpZlxuZmluYWxFbWlzc2l2ZSo9IHVuaWZvcm1zLnZFbWlzc2l2ZUluZm9zLnk7XG4jZW5kaWZcbmZpbmFsRW1pc3NpdmUqPXVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS55O1xuI2lmZGVmIEFNQklFTlRcbnZhciBhbWJpZW50T2NjbHVzaW9uRm9yRGlyZWN0RGlmZnVzZTogdmVjM2Y9bWl4KCB2ZWMzZigxLiksYW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yLHVuaWZvcm1zLnZBbWJpZW50SW5mb3Mudyk7XG4jZWxzZVxudmFyIGFtYmllbnRPY2NsdXNpb25Gb3JEaXJlY3REaWZmdXNlOiB2ZWMzZj1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jZW5kaWZcbmZpbmFsQW1iaWVudCo9YW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yO2ZpbmFsRGlmZnVzZSo9YW1iaWVudE9jY2x1c2lvbkZvckRpcmVjdERpZmZ1c2U7XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50c1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrR2VvbWV0cnlJbmZvXCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyIE5kb3RWVW5jbGFtcGVkOiBmMzI9ZG90KG5vcm1hbFcsdmlld0RpcmVjdGlvblcpO3ZhciBOZG90VjogZjMyPWFic0VwcyhOZG90VlVuY2xhbXBlZCk7dmFyIGFscGhhRzogZjMyPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShyb3VnaG5lc3MpO3ZhciBBQVJvdWdobmVzc0ZhY3RvcnM6IHZlYzJmPWdldEFBUm91Z2huZXNzRmFjdG9ycyhub3JtYWxXLnh5eik7XG4jaWZkZWYgU1BFQ1VMQVJBQVxuYWxwaGFHKz1BQVJvdWdobmVzc0ZhY3RvcnMueTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxudmFyIGVudmlyb25tZW50QnJkZjogdmVjM2Y9Z2V0QlJERkxvb2t1cChOZG90Vixyb3VnaG5lc3MpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuI2lmZGVmIFJBRElBTkNFT0NDTFVTSU9OXG4jaWZkZWYgQU1CSUVOVElOR1JBWVNDQUxFXG52YXIgYW1iaWVudE1vbm9jaHJvbWU6IGYzMj1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3IucjtcbiNlbHNlXG52YXIgYW1iaWVudE1vbm9jaHJvbWU6IGYzMj1nZXRMdW1pbmFuY2UoYW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yKTtcbiNlbmRpZlxudmFyIHNlbzogZjMyPWVudmlyb25tZW50UmFkaWFuY2VPY2NsdXNpb24oYW1iaWVudE1vbm9jaHJvbWUsTmRvdFZVbmNsYW1wZWQpO1xuI2VuZGlmXG4jaWZkZWYgSE9SSVpPTk9DQ0xVU0lPTlxuI2lmZGVmIEJVTVBcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52YXIgZWhvOiBmMzI9ZW52aXJvbm1lbnRIb3Jpem9uT2NjbHVzaW9uKC12aWV3RGlyZWN0aW9uVyxub3JtYWxXLGdlb21ldHJpY05vcm1hbFcpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tHZW9tZXRyeUluZm9XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0lyaWRlc2NlbmNlXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGlyaWRlc2NlbmNlT3V0UGFyYW1zXG57aXJpZGVzY2VuY2VJbnRlbnNpdHk6IGYzMixcbmlyaWRlc2NlbmNlSU9SOiBmMzIsXG5pcmlkZXNjZW5jZVRoaWNrbmVzczogZjMyLFxuc3BlY3VsYXJFbnZpcm9ubWVudFIwOiB2ZWMzZn07XG4jaWZkZWYgSVJJREVTQ0VOQ0VcbmZuIGlyaWRlc2NlbmNlQmxvY2soXG52SXJpZGVzY2VuY2VQYXJhbXM6IHZlYzRmXG4sdmlld0FuZ2xlXzogZjMyXG4sc3BlY3VsYXJFbnZpcm9ubWVudFIwOiB2ZWMzZlxuI2lmZGVmIElSSURFU0NFTkNFX1RFWFRVUkVcbixpcmlkZXNjZW5jZU1hcERhdGE6IHZlYzJmXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRVxuLGlyaWRlc2NlbmNlVGhpY2tuZXNzTWFwRGF0YTogdmVjMmZcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuLE5kb3RWVW5jbGFtcGVkOiBmMzJcbix2Q2xlYXJDb2F0UGFyYW1zOiB2ZWMyZlxuI2lmZGVmIENMRUFSQ09BVF9URVhUVVJFXG4sY2xlYXJDb2F0TWFwRGF0YTogdmVjMmZcbiNlbmRpZlxuI2VuZGlmXG4pLT5pcmlkZXNjZW5jZU91dFBhcmFtc1xue3ZhciBvdXRQYXJhbXM6IGlyaWRlc2NlbmNlT3V0UGFyYW1zO3ZhciBpcmlkZXNjZW5jZUludGVuc2l0eTogZjMyPXZJcmlkZXNjZW5jZVBhcmFtcy54O3ZhciBpcmlkZXNjZW5jZUlPUjogZjMyPXZJcmlkZXNjZW5jZVBhcmFtcy55O3ZhciBpcmlkZXNjZW5jZVRoaWNrbmVzc01pbjogZjMyPXZJcmlkZXNjZW5jZVBhcmFtcy56O3ZhciBpcmlkZXNjZW5jZVRoaWNrbmVzc01heDogZjMyPXZJcmlkZXNjZW5jZVBhcmFtcy53O3ZhciBpcmlkZXNjZW5jZVRoaWNrbmVzc1dlaWdodDogZjMyPTEuO3ZhciB2aWV3QW5nbGU9dmlld0FuZ2xlXztcbiNpZmRlZiBJUklERVNDRU5DRV9URVhUVVJFXG5pcmlkZXNjZW5jZUludGVuc2l0eSo9aXJpZGVzY2VuY2VNYXBEYXRhLng7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFKVxuaXJpZGVzY2VuY2VUaGlja25lc3NXZWlnaHQ9aXJpZGVzY2VuY2VUaGlja25lc3NNYXBEYXRhLmc7XG4jZW5kaWZcbnZhciBpcmlkZXNjZW5jZVRoaWNrbmVzczogZjMyPW1peChpcmlkZXNjZW5jZVRoaWNrbmVzc01pbixpcmlkZXNjZW5jZVRoaWNrbmVzc01heCxpcmlkZXNjZW5jZVRoaWNrbmVzc1dlaWdodCk7dmFyIHRvcElvcjogZjMyPTEuOyBcbiNpZmRlZiBDTEVBUkNPQVRcbnZhciBjbGVhckNvYXRJbnRlbnNpdHk6IGYzMj12Q2xlYXJDb2F0UGFyYW1zLng7XG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbmNsZWFyQ29hdEludGVuc2l0eSo9Y2xlYXJDb2F0TWFwRGF0YS54O1xuI2VuZGlmXG50b3BJb3I9bWl4KDEuMCx1bmlmb3Jtcy52Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtcy53LTEuLGNsZWFyQ29hdEludGVuc2l0eSk7dmlld0FuZ2xlPXNxcnQoMS4wKygoMS4wL3RvcElvcikqKDEuMC90b3BJb3IpKSooKE5kb3RWVW5jbGFtcGVkKk5kb3RWVW5jbGFtcGVkKS0xLjApKTtcbiNlbmRpZlxudmFyIGlyaWRlc2NlbmNlRnJlc25lbDogdmVjM2Y9ZXZhbElyaWRlc2NlbmNlKHRvcElvcixpcmlkZXNjZW5jZUlPUix2aWV3QW5nbGUsaXJpZGVzY2VuY2VUaGlja25lc3Msc3BlY3VsYXJFbnZpcm9ubWVudFIwKTtvdXRQYXJhbXMuc3BlY3VsYXJFbnZpcm9ubWVudFIwPW1peChzcGVjdWxhckVudmlyb25tZW50UjAsaXJpZGVzY2VuY2VGcmVzbmVsLGlyaWRlc2NlbmNlSW50ZW5zaXR5KTtvdXRQYXJhbXMuaXJpZGVzY2VuY2VJbnRlbnNpdHk9aXJpZGVzY2VuY2VJbnRlbnNpdHk7b3V0UGFyYW1zLmlyaWRlc2NlbmNlVGhpY2tuZXNzPWlyaWRlc2NlbmNlVGhpY2tuZXNzO291dFBhcmFtcy5pcmlkZXNjZW5jZUlPUj1pcmlkZXNjZW5jZUlPUjtyZXR1cm4gb3V0UGFyYW1zO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrSXJpZGVzY2VuY2VXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0xpZ2h0bWFwSW5pdFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVE1BUFxudmFyIGxpZ2h0bWFwQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUobGlnaHRtYXBTYW1wbGVyLGxpZ2h0bWFwU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkxpZ2h0bWFwVVYrdXZPZmZzZXQpO1xuI2lmZGVmIFJHQkRMSUdIVE1BUFxubGlnaHRtYXBDb2xvcj12ZWM0Zihmcm9tUkdCRChsaWdodG1hcENvbG9yKSxsaWdodG1hcENvbG9yLmEpO1xuI2VuZGlmXG4jaWZkZWYgR0FNTUFMSUdIVE1BUFxubGlnaHRtYXBDb2xvcj12ZWM0Zih0b0xpbmVhclNwYWNlVmVjMyhsaWdodG1hcENvbG9yLnJnYiksbGlnaHRtYXBDb2xvci5hKTtcbiNlbmRpZlxubGlnaHRtYXBDb2xvcj12ZWM0ZihsaWdodG1hcENvbG9yLnJnYip1bmlmb3Jtcy52TGlnaHRtYXBJbmZvcy55LGxpZ2h0bWFwQ29sb3IuYSk7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0xpZ2h0bWFwSW5pdFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrTm9ybWFsRmluYWxcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChGT1JDRU5PUk1BTEZPUldBUkQpICYmIGRlZmluZWQoTk9STUFMKVxudmFyIGZhY2VOb3JtYWw6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyhkcGR4KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcpLGRwZHkoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVykpKSpzY2VuZS52RXllUG9zaXRpb24udztcbiNpZiBkZWZpbmVkKFRXT1NJREVETElHSFRJTkcpXG5mYWNlTm9ybWFsPXNlbGVjdCgtZmFjZU5vcm1hbCxmYWNlTm9ybWFsLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtcbiNlbmRpZlxubm9ybWFsVyo9c2lnbihkb3Qobm9ybWFsVyxmYWNlTm9ybWFsKSk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRXT1NJREVETElHSFRJTkcpICYmIGRlZmluZWQoTk9STUFMKVxuI2lmIGRlZmluZWQoTUlSUk9SRUQpXG5ub3JtYWxXPXNlbGVjdChub3JtYWxXLC1ub3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtcbiNlbHNlXG5ub3JtYWxXPXNlbGVjdCgtbm9ybWFsVyxub3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tOb3JtYWxGaW5hbFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrUmVmbGVjdGFuY2VcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxudmFyIGJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U6IHZlYzNmPWdldFJlZmxlY3RhbmNlRnJvbUJSREZXaXRoRW52TG9va3VwKHZlYzNmKHJlZmxlY3RhbmNlRjApLHZlYzNmKHJlZmxlY3Rpdml0eU91dC5yZWZsZWN0YW5jZUY5MCksZW52aXJvbm1lbnRCcmRmKTtcbiNpZiAoQ09ORFVDVE9SX1NQRUNVTEFSX01PREVMPT1DT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUilcbmxldCBtZXRhbEVudmlyb25tZW50UmVmbGVjdGFuY2U6IHZlYzNmPXZlYzNmKHJlZmxlY3Rpdml0eU91dC5zcGVjdWxhcldlaWdodCkqZ2V0RjgyU3BlY3VsYXIoTmRvdFYsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCxyZWZsZWN0aXZpdHlPdXQucm91Z2huZXNzKTtsZXQgZGllbGVjdHJpY0Vudmlyb25tZW50UmVmbGVjdGFuY2U9Z2V0UmVmbGVjdGFuY2VGcm9tQlJERldpdGhFbnZMb29rdXAocmVmbGVjdGl2aXR5T3V0LmRpZWxlY3RyaWNDb2xvckYwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwLGVudmlyb25tZW50QnJkZik7dmFyIGNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlOiB2ZWMzZj1taXgoZGllbGVjdHJpY0Vudmlyb25tZW50UmVmbGVjdGFuY2UsbWV0YWxFbnZpcm9ubWVudFJlZmxlY3RhbmNlLHJlZmxlY3Rpdml0eU91dC5tZXRhbGxpYyk7XG4jZWxzZVxudmFyIGNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlPWdldFJlZmxlY3RhbmNlRnJvbUJSREZXaXRoRW52TG9va3VwKGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTAsZW52aXJvbm1lbnRCcmRmKTtcbiNlbmRpZlxuI2lmZGVmIFJBRElBTkNFT0NDTFVTSU9OXG5jb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSo9c2VvO1xuI2VuZGlmXG4jaWZkZWYgSE9SSVpPTk9DQ0xVU0lPTlxuI2lmZGVmIEJVTVBcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG5jb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSo9ZWhvO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2Vsc2VcbnZhciBjb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTogdmVjM2Y9Z2V0UmVmbGVjdGFuY2VGcm9tQW5hbHl0aWNhbEJSREZMb29rdXBfSm9uZXMoTmRvdFYsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxzcGVjdWxhckVudmlyb25tZW50UjkwLHNxcnQobWljcm9TdXJmYWNlKSk7dmFyIGJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U6IHZlYzNmPWdldFJlZmxlY3RhbmNlRnJvbUFuYWx5dGljYWxCUkRGTG9va3VwX0pvbmVzKE5kb3RWLHZlYzNmKHJlZmxlY3RhbmNlRjApLHZlYzNmKHJlZmxlY3Rpdml0eU91dC5yZWZsZWN0YW5jZUY5MCksc3FydChtaWNyb1N1cmZhY2UpKTtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UqPWNsZWFyY29hdE91dC5jb25zZXJ2YXRpb25GYWN0b3I7XG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVElOVClcbmNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlKj1jbGVhcmNvYXRPdXQuYWJzb3JwdGlvbjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tSZWZsZWN0YW5jZVdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrUmVmbGVjdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBSRUZMRUNUSU9OXG5zdHJ1Y3QgcmVmbGVjdGlvbk91dFBhcmFtc1xue2Vudmlyb25tZW50UmFkaWFuY2U6IHZlYzRmXG4sZW52aXJvbm1lbnRJcnJhZGlhbmNlOiB2ZWMzZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixyZWZsZWN0aW9uQ29vcmRzOiB2ZWMzZlxuI2Vsc2VcbixyZWZsZWN0aW9uQ29vcmRzOiB2ZWMyZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZiAhZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxuLGlycmFkaWFuY2VWZWN0b3I6IHZlYzNmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG59O1xuI2RlZmluZSBwYnJfaW5saW5lXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuZm4gY3JlYXRlUmVmbGVjdGlvbkNvb3JkcyhcbnZQb3NpdGlvblc6IHZlYzNmLFxubm9ybWFsVzogdmVjM2YsXG4jaWZkZWYgQU5JU09UUk9QSUNcbmFuaXNvdHJvcGljT3V0OiBhbmlzb3Ryb3BpY091dFBhcmFtcyxcbiNlbmRpZlxuKS0+dmVjM2Zcbnt2YXIgcmVmbGVjdGlvbkNvb3JkczogdmVjM2Y7XG4jZWxzZVxuZm4gY3JlYXRlUmVmbGVjdGlvbkNvb3JkcyhcbnZQb3NpdGlvblc6IHZlYzNmLFxubm9ybWFsVzogdmVjM2YsXG4jaWZkZWYgQU5JU09UUk9QSUNcbmFuaXNvdHJvcGljT3V0OiBhbmlzb3Ryb3BpY091dFBhcmFtcyxcbiNlbmRpZlxuKS0+dmVjMmZcbnsgXG52YXIgcmVmbGVjdGlvbkNvb3JkczogdmVjMmY7XG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xudmFyIHJlZmxlY3Rpb25WZWN0b3I6IHZlYzNmPWNvbXB1dGVSZWZsZWN0aW9uQ29vcmRzKCB2ZWM0Zih2UG9zaXRpb25XLDEuMCksYW5pc290cm9waWNPdXQuYW5pc290cm9waWNOb3JtYWwpO1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uVmVjdG9yOiB2ZWMzZj1jb21wdXRlUmVmbGVjdGlvbkNvb3JkcyggdmVjNGYodlBvc2l0aW9uVywxLjApLG5vcm1hbFcpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbnJlZmxlY3Rpb25WZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnJlZmxlY3Rpb25Db29yZHM9cmVmbGVjdGlvblZlY3RvcjtcbiNlbHNlXG5yZWZsZWN0aW9uQ29vcmRzPXJlZmxlY3Rpb25WZWN0b3IueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5yZWZsZWN0aW9uQ29vcmRzLz1yZWZsZWN0aW9uVmVjdG9yLno7XG4jZW5kaWZcbnJlZmxlY3Rpb25Db29yZHMueT0xLjAtcmVmbGVjdGlvbkNvb3Jkcy55O1xuI2VuZGlmXG5yZXR1cm4gcmVmbGVjdGlvbkNvb3Jkczt9XG4jZGVmaW5lIHBicl9pbmxpbmVcbmZuIHNhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuYWxwaGFHOiBmMzJcbix2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zOiB2ZWMzZlxuLHZSZWZsZWN0aW9uSW5mb3M6IHZlYzJmXG4sdlJlZmxlY3Rpb25Db2xvcjogdmVjM2ZcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbixOZG90VlVuY2xhbXBlZDogZjMyXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbixyb3VnaG5lc3M6IGYzMlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuLHJlZmxlY3Rpb25Db29yZHM6IHZlYzNmXG4jZWxzZVxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbixyZWZsZWN0aW9uQ29vcmRzOiB2ZWMyZlxuI2VuZGlmXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jZWxzZVxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPlxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZlxuI2VuZGlmIFxuKS0+dmVjNGZcbnt2YXIgZW52aXJvbm1lbnRSYWRpYW5jZTogdmVjNGY7XG4jaWYgZGVmaW5lZChMT0RJTlJFRkxFQ1RJT05BTFBIQSkgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG52YXIgcmVmbGVjdGlvbkxPRDogZjMyPWdldExvZEZyb21BbHBoYUdOZG90Vih2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngsYWxwaGFHLE5kb3RWVW5jbGFtcGVkKTtcbiNlbGlmIGRlZmluZWQoTElORUFSU1BFQ1VMQVJSRUZMRUNUSU9OKVxudmFyIHJlZmxlY3Rpb25MT0Q6IGYzMj1nZXRMaW5lYXJMb2RGcm9tUm91Z2huZXNzKHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyb3VnaG5lc3MpO1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uTE9EOiBmMzI9Z2V0TG9kRnJvbUFscGhhRyh2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngsYWxwaGFHKTtcbiNlbmRpZlxuI2lmZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG5yZWZsZWN0aW9uTE9EPXJlZmxlY3Rpb25MT0QqdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy55K3ZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MuejtcbiNpZmRlZiBMT0RJTlJFRkxFQ1RJT05BTFBIQVxudmFyIGF1dG9tYXRpY1JlZmxlY3Rpb25MT0Q6IGYzMj1VTlBBQ0tfTE9EKHRleHR1cmVTYW1wbGUocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMpLmEpO3ZhciByZXF1ZXN0ZWRSZWZsZWN0aW9uTE9EOiBmMzI9bWF4KGF1dG9tYXRpY1JlZmxlY3Rpb25MT0QscmVmbGVjdGlvbkxPRCk7XG4jZWxzZVxudmFyIHJlcXVlc3RlZFJlZmxlY3Rpb25MT0Q6IGYzMj1yZWZsZWN0aW9uTE9EO1xuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG5lbnZpcm9ubWVudFJhZGlhbmNlPSB2ZWM0ZihyYWRpYW5jZShhbHBoYUcscmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMsdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvKSwxLjApO1xuI2Vsc2VcbmVudmlyb25tZW50UmFkaWFuY2U9dGV4dHVyZVNhbXBsZUxldmVsKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcixyZWZsZWN0aW9uQ29vcmRzLHJlZmxlY3Rpb25MT0QpO1xuI2VuZGlmXG4jZWxzZVxudmFyIGxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkOiBmMzI9c2F0dXJhdGUocmVmbGVjdGlvbkxPRC9sb2cyKHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCkpO3ZhciBsb2RSZWZsZWN0aW9uTm9ybWFsaXplZERvdWJsZWQ6IGYzMj1sb2RSZWZsZWN0aW9uTm9ybWFsaXplZCoyLjA7dmFyIGVudmlyb25tZW50TWlkOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcixyZWZsZWN0aW9uQ29vcmRzKTtpZiAobG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkPDEuMCl7ZW52aXJvbm1lbnRSYWRpYW5jZT1taXgoXG50ZXh0dXJlU2FtcGxlKHJlZmxlY3Rpb25IaWdoU2FtcGxlcixyZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMpLFxuZW52aXJvbm1lbnRNaWQsXG5sb2RSZWZsZWN0aW9uTm9ybWFsaXplZERvdWJsZWRcbik7fSBlbHNlIHtlbnZpcm9ubWVudFJhZGlhbmNlPW1peChcbmVudmlyb25tZW50TWlkLFxudGV4dHVyZVNhbXBsZShyZWZsZWN0aW9uTG93U2FtcGxlcixyZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXIscmVmbGVjdGlvbkNvb3JkcyksXG5sb2RSZWZsZWN0aW9uTm9ybWFsaXplZERvdWJsZWQtMS4wXG4pO31cbiNlbmRpZlxudmFyIGVudlJhZGlhbmNlPWVudmlyb25tZW50UmFkaWFuY2UucmdiO1xuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5lbnZSYWRpYW5jZT1mcm9tUkdCRChlbnZpcm9ubWVudFJhZGlhbmNlKTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxuZW52UmFkaWFuY2U9dG9MaW5lYXJTcGFjZVZlYzMoZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2IpO1xuI2VuZGlmXG5lbnZSYWRpYW5jZSo9dlJlZmxlY3Rpb25JbmZvcy54O2VudlJhZGlhbmNlKj12UmVmbGVjdGlvbkNvbG9yLnJnYjtyZXR1cm4gdmVjNGYoZW52UmFkaWFuY2UsZW52aXJvbm1lbnRSYWRpYW5jZS5hKTt9XG4jZGVmaW5lIHBicl9pbmxpbmVcbmZuIHJlZmxlY3Rpb25CbG9jayhcbnZQb3NpdGlvblc6IHZlYzNmXG4sbm9ybWFsVzogdmVjM2ZcbixhbHBoYUc6IGYzMlxuLHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M6IHZlYzNmXG4sdlJlZmxlY3Rpb25JbmZvczogdmVjMmZcbix2UmVmbGVjdGlvbkNvbG9yOiB2ZWMzZlxuI2lmZGVmIEFOSVNPVFJPUElDXG4sYW5pc290cm9waWNPdXQ6IGFuaXNvdHJvcGljT3V0UGFyYW1zXG4jZW5kaWZcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbixOZG90VlVuY2xhbXBlZDogZjMyXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbixyb3VnaG5lc3M6IGYzMlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2Vsc2VcbixyZWZsZWN0aW9uU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jZW5kaWZcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbix2RW52aXJvbm1lbnRJcnJhZGlhbmNlOiB2ZWMzZlxuI2VuZGlmXG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4scmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0ZlxuI2VuZGlmXG4jaWZkZWYgVVNFSVJSQURJQU5DRU1BUFxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixpcnJhZGlhbmNlU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXIgXG4jZWxzZVxuLGlycmFkaWFuY2VTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXIgXG4jZW5kaWZcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbixyZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb246IHZlYzNmXG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixyZWZsZWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXIgXG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclNhbXBsZXI6IHNhbXBsZXIgXG4jZWxzZVxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXIgXG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyIFxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm86IHZlYzJmXG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbixpY2RmU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4saWNkZlNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuLHZpZXdEaXJlY3Rpb25XOiB2ZWMzZlxuLGRpZmZ1c2VSb3VnaG5lc3M6IGYzMlxuLHN1cmZhY2VBbGJlZG86IHZlYzNmXG4pLT5yZWZsZWN0aW9uT3V0UGFyYW1zXG57dmFyIG91dFBhcmFtczogcmVmbGVjdGlvbk91dFBhcmFtczt2YXIgZW52aXJvbm1lbnRSYWRpYW5jZTogdmVjNGY9IHZlYzRmKDAuLDAuLDAuLDAuKTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52YXIgcmVmbGVjdGlvbkNvb3JkczogdmVjM2Y9IHZlYzNmKDAuKTtcbiNlbHNlXG52YXIgcmVmbGVjdGlvbkNvb3JkczogdmVjMmY9IHZlYzJmKDAuKTtcbiNlbmRpZlxucmVmbGVjdGlvbkNvb3Jkcz1jcmVhdGVSZWZsZWN0aW9uQ29vcmRzKFxudlBvc2l0aW9uVyxcbm5vcm1hbFcsXG4jaWZkZWYgQU5JU09UUk9QSUNcbmFuaXNvdHJvcGljT3V0LFxuI2VuZGlmIFxuKTtlbnZpcm9ubWVudFJhZGlhbmNlPXNhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuYWxwaGFHXG4sdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHZSZWZsZWN0aW9uSW5mb3Ncbix2UmVmbGVjdGlvbkNvbG9yXG4jaWYgZGVmaW5lZChMT0RJTlJFRkxFQ1RJT05BTFBIQSkgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG4sTmRvdFZVbmNsYW1wZWRcbiNlbmRpZlxuI2lmZGVmIExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTlxuLHJvdWdobmVzc1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25TYW1wbGVyXG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyXG4scmVmbGVjdGlvbkNvb3Jkc1xuI2Vsc2VcbixyZWZsZWN0aW9uU2FtcGxlclxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlclxuLHJlZmxlY3Rpb25Db29yZHNcbiNlbmRpZlxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyXG4scmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyXG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyXG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlclxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWYgXG4pO3ZhciBlbnZpcm9ubWVudElycmFkaWFuY2U6IHZlYzNmPSB2ZWMzZigwLiwwLiwwLik7XG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4jaWZkZWYgQU5JU09UUk9QSUNcbnZhciBpcnJhZGlhbmNlVmVjdG9yOiB2ZWMzZj0gKHJlZmxlY3Rpb25NYXRyaXgqIHZlYzRmKGFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljTm9ybWFsLDApKS54eXo7XG4jZWxzZVxudmFyIGlycmFkaWFuY2VWZWN0b3I6IHZlYzNmPSAocmVmbGVjdGlvbk1hdHJpeCogdmVjNGYobm9ybWFsVywwKSkueHl6O1xuI2VuZGlmXG52YXIgaXJyYWRpYW5jZVZpZXc6IHZlYzNmPSAocmVmbGVjdGlvbk1hdHJpeCogdmVjNGYodmlld0RpcmVjdGlvblcsMCkpLnh5ejtcbiNpZiAhZGVmaW5lZChVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT04pICYmICFkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUwgIT0gQlJERl9ESUZGVVNFX01PREVMX0xBTUJFUlQgJiYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MRUdBQ1lcbnZhciBOZG90VjogZjMyPW1heChkb3Qobm9ybWFsVyx2aWV3RGlyZWN0aW9uVyksMC4wKTtpcnJhZGlhbmNlVmVjdG9yPW1peChpcnJhZGlhbmNlVmVjdG9yLGlycmFkaWFuY2VWaWV3LCgwLjUqKDEuMC1OZG90VikpKmRpZmZ1c2VSb3VnaG5lc3MpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxuaXJyYWRpYW5jZVZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgSU5WRVJUQ1VCSUNNQVBcbmlycmFkaWFuY2VWZWN0b3IueSo9LTEuMDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbmVudmlyb25tZW50SXJyYWRpYW5jZT12RW52aXJvbm1lbnRJcnJhZGlhbmNlO1xuI2Vsc2VcbiNpZiBkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbmVudmlyb25tZW50SXJyYWRpYW5jZT1pcnJhZGlhbmNlKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcixpcnJhZGlhbmNlVmVjdG9yLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbyxkaWZmdXNlUm91Z2huZXNzLHN1cmZhY2VBbGJlZG8saXJyYWRpYW5jZVZpZXdcbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGljZGZTYW1wbGVyXG4saWNkZlNhbXBsZXJTYW1wbGVyXG4jZW5kaWZcbik7XG4jZWxzZVxuZW52aXJvbm1lbnRJcnJhZGlhbmNlPWNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UoaXJyYWRpYW5jZVZlY3Rvcik7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbm91dFBhcmFtcy5pcnJhZGlhbmNlVmVjdG9yPWlycmFkaWFuY2VWZWN0b3I7XG4jZW5kaWZcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChVU0VJUlJBRElBTkNFTUFQKVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciBlbnZpcm9ubWVudElycmFkaWFuY2U0OiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGlycmFkaWFuY2VTYW1wbGVyLGlycmFkaWFuY2VTYW1wbGVyU2FtcGxlcixpcnJhZGlhbmNlVmVjdG9yKTtcbiNlbHNlXG52YXIgZW52aXJvbm1lbnRJcnJhZGlhbmNlNDogdmVjNGY9dGV4dHVyZVNhbXBsZShpcnJhZGlhbmNlU2FtcGxlcixpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXIscmVmbGVjdGlvbkNvb3Jkcyk7XG4jZW5kaWZcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbnZhciBMczogdmVjM2Y9bm9ybWFsaXplKHJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbik7dmFyIE5vTDogZjMyPWRvdChpcnJhZGlhbmNlVmVjdG9yLExzKTt2YXIgTm9WOiBmMzI9ZG90KGlycmFkaWFuY2VWZWN0b3IsaXJyYWRpYW5jZVZpZXcpO3ZhciBkaWZmdXNlUm91Z2huZXNzVGVybTogdmVjM2Y9dmVjM2YoMS4wKTtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbnZhciBMb1Y6IGYzMj1kb3QoTHMsaXJyYWRpYW5jZVZpZXcpO3ZhciBtYWc6IGYzMj1sZW5ndGgocmVmbGVjdGlvbkRvbWluYW50RGlyZWN0aW9uKSoyLjBmO3ZhciBjbGFtcGVkQWxiZWRvOiB2ZWMzZj1jbGFtcChzdXJmYWNlQWxiZWRvLHZlYzNmKDAuMSksdmVjM2YoMS4wKSk7ZGlmZnVzZVJvdWdobmVzc1Rlcm09ZGlmZnVzZUJSREZfRU9OKGNsYW1wZWRBbGJlZG8sZGlmZnVzZVJvdWdobmVzcyxOb0wsTm9WLExvVikqUEk7ZGlmZnVzZVJvdWdobmVzc1Rlcm09ZGlmZnVzZVJvdWdobmVzc1Rlcm0vY2xhbXBlZEFsYmVkbztkaWZmdXNlUm91Z2huZXNzVGVybT1taXgodmVjM2YoMS4wKSxkaWZmdXNlUm91Z2huZXNzVGVybSxzcXJ0KGNsYW1wKG1hZypOb1YsMC4wLDEuMGYpKSk7XG4jZWxpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9CVVJMRVlcbnZhciBIOiB2ZWMzZj0oaXJyYWRpYW5jZVZpZXcrTHMpKjAuNWY7dmFyIFZvSDogZjMyPWRvdChpcnJhZGlhbmNlVmlldyxIKTtkaWZmdXNlUm91Z2huZXNzVGVybT12ZWMzZihkaWZmdXNlQlJERl9CdXJsZXkoTm9MLE5vVixWb0gsZGlmZnVzZVJvdWdobmVzcykqUEkpO1xuI2VuZGlmXG5lbnZpcm9ubWVudElycmFkaWFuY2U9ZW52aXJvbm1lbnRJcnJhZGlhbmNlNC5yZ2IqZGlmZnVzZVJvdWdobmVzc1Rlcm07XG4jZWxzZVxuZW52aXJvbm1lbnRJcnJhZGlhbmNlPWVudmlyb25tZW50SXJyYWRpYW5jZTQucmdiO1xuI2VuZGlmXG4jaWZkZWYgUkdCRFJFRkxFQ1RJT05cbmVudmlyb25tZW50SXJyYWRpYW5jZT1mcm9tUkdCRChlbnZpcm9ubWVudElycmFkaWFuY2U0KTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxuZW52aXJvbm1lbnRJcnJhZGlhbmNlPXRvTGluZWFyU3BhY2VWZWMzKGVudmlyb25tZW50SXJyYWRpYW5jZS5yZ2IpO1xuI2VuZGlmXG4jZW5kaWZcbmVudmlyb25tZW50SXJyYWRpYW5jZSo9dlJlZmxlY3Rpb25Db2xvci5yZ2IqdlJlZmxlY3Rpb25JbmZvcy54O1xuI2lmZGVmIE1JWF9JQkxfUkFESUFOQ0VfV0lUSF9JUlJBRElBTkNFXG5vdXRQYXJhbXMuZW52aXJvbm1lbnRSYWRpYW5jZT12ZWM0ZihtaXgoZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2IsZW52aXJvbm1lbnRJcnJhZGlhbmNlLGFscGhhRyksZW52aXJvbm1lbnRSYWRpYW5jZS5hKTtcbiNlbHNlXG5vdXRQYXJhbXMuZW52aXJvbm1lbnRSYWRpYW5jZT1lbnZpcm9ubWVudFJhZGlhbmNlO1xuI2VuZGlmXG5vdXRQYXJhbXMuZW52aXJvbm1lbnRJcnJhZGlhbmNlPWVudmlyb25tZW50SXJyYWRpYW5jZTtvdXRQYXJhbXMucmVmbGVjdGlvbkNvb3Jkcz1yZWZsZWN0aW9uQ29vcmRzO3JldHVybiBvdXRQYXJhbXM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tSZWZsZWN0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tSZWZsZWN0aXZpdHlcIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgcmVmbGVjdGl2aXR5T3V0UGFyYW1zXG57bWljcm9TdXJmYWNlOiBmMzIsXG5yb3VnaG5lc3M6IGYzMixcbmRpZmZ1c2VSb3VnaG5lc3M6IGYzMixcbnJlZmxlY3RhbmNlRjA6IGYzMixcbnJlZmxlY3RhbmNlRjkwOiB2ZWMzZixcbmNvbG9yUmVmbGVjdGFuY2VGMDogdmVjM2YsXG5jb2xvclJlZmxlY3RhbmNlRjkwOiB2ZWMzZixcbiNpZmRlZiBNRVRBTExJQ1dPUktGTE9XXG5zdXJmYWNlQWxiZWRvOiB2ZWMzZixcbm1ldGFsbGljOiBmMzIsXG5zcGVjdWxhcldlaWdodDogZjMyLFxuZGllbGVjdHJpY0NvbG9yRjA6IHZlYzNmLFxuI2VuZGlmXG4jaWYgZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKSAmJiBkZWZpbmVkKFJFRkxFQ1RJVklUWSkgJiYgZGVmaW5lZChBT1NUT1JFSU5NRVRBTE1BUFJFRClcbmFtYmllbnRPY2NsdXNpb25Db2xvcjogdmVjM2YsXG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxuI2lmZGVmIE1FVEFMTElDV09SS0ZMT1dcbiNpZmRlZiBSRUZMRUNUSVZJVFlcbnN1cmZhY2VNZXRhbGxpY0NvbG9yTWFwOiB2ZWM0ZixcbiNlbmRpZlxubWV0YWxsaWNGMDogdmVjM2YsXG4jZWxzZVxuI2lmZGVmIFJFRkxFQ1RJVklUWVxuc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yTWFwOiB2ZWM0ZixcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbn07XG4jZGVmaW5lIHBicl9pbmxpbmVcbmZuIHJlZmxlY3Rpdml0eUJsb2NrKFxucmVmbGVjdGl2aXR5Q29sb3I6IHZlYzRmXG4jaWZkZWYgTUVUQUxMSUNXT1JLRkxPV1xuLHN1cmZhY2VBbGJlZG86IHZlYzNmXG4sbWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM6IHZlYzRmXG4jZW5kaWZcbixiYXNlRGlmZnVzZVJvdWdobmVzczogZjMyXG4jaWZkZWYgQkFTRV9ESUZGVVNFX1JPVUdITkVTU1xuLGJhc2VEaWZmdXNlUm91Z2huZXNzVGV4dHVyZTogZjMyXG4sYmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvczogdmVjMmZcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJVklUWVxuLHJlZmxlY3Rpdml0eUluZm9zOiB2ZWMzZlxuLHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXA6IHZlYzRmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiBkZWZpbmVkKEFPU1RPUkVJTk1FVEFMTUFQUkVEKVxuLGFtYmllbnRPY2NsdXNpb25Db2xvckluOiB2ZWMzZlxuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFTUFQXG4sbWljcm9TdXJmYWNlVGV4ZWw6IHZlYzRmXG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbixkZXRhaWxDb2xvcjogdmVjNGZcbix2RGV0YWlsSW5mb3M6IHZlYzRmXG4jZW5kaWZcbiktPnJlZmxlY3Rpdml0eU91dFBhcmFtc1xue3ZhciBvdXRQYXJhbXM6IHJlZmxlY3Rpdml0eU91dFBhcmFtczt2YXIgbWljcm9TdXJmYWNlOiBmMzI9cmVmbGVjdGl2aXR5Q29sb3IuYTt2YXIgc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yOiB2ZWMzZj1yZWZsZWN0aXZpdHlDb2xvci5yZ2I7XG4jaWZkZWYgTUVUQUxMSUNXT1JLRkxPV1xudmFyIG1ldGFsbGljUm91Z2huZXNzOiB2ZWMyZj1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3Iucmc7dmFyIGlvcjogZjMyPXN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvci5iO1xuI2lmZGVmIFJFRkxFQ1RJVklUWVxuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuc3VyZmFjZU1ldGFsbGljQ29sb3JNYXA9c3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcDtcbiNlbmRpZlxuI2lmZGVmIEFPU1RPUkVJTk1FVEFMTUFQUkVEXG52YXIgYW9TdG9yZUluTWV0YWxNYXA6IHZlYzNmPSB2ZWMzZihzdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLnIsc3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcC5yLHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAucik7b3V0UGFyYW1zLmFtYmllbnRPY2NsdXNpb25Db2xvcj1taXgoYW1iaWVudE9jY2x1c2lvbkNvbG9ySW4sYW9TdG9yZUluTWV0YWxNYXAscmVmbGVjdGl2aXR5SW5mb3Mueik7XG4jZW5kaWZcbiNpZmRlZiBNRVRBTExORVNTU1RPUkVJTk1FVEFMTUFQQkxVRVxubWV0YWxsaWNSb3VnaG5lc3Mucio9c3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcC5iO1xuI2Vsc2Vcbm1ldGFsbGljUm91Z2huZXNzLnIqPXN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAucjtcbiNlbmRpZlxuI2lmZGVmIFJPVUdITkVTU1NUT1JFSU5NRVRBTE1BUEFMUEhBXG5tZXRhbGxpY1JvdWdobmVzcy5nKj1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLmE7XG4jZWxzZVxuI2lmZGVmIFJPVUdITkVTU1NUT1JFSU5NRVRBTE1BUEdSRUVOXG5tZXRhbGxpY1JvdWdobmVzcy5nKj1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLmc7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG52YXIgZGV0YWlsUm91Z2huZXNzOiBmMzI9bWl4KDAuNSxkZXRhaWxDb2xvci5iLHZEZXRhaWxJbmZvcy53KTt2YXIgbG9MZXJwOiBmMzI9bWl4KDAuLG1ldGFsbGljUm91Z2huZXNzLmcsZGV0YWlsUm91Z2huZXNzKjIuKTt2YXIgaGlMZXJwOiBmMzI9bWl4KG1ldGFsbGljUm91Z2huZXNzLmcsMS4sKGRldGFpbFJvdWdobmVzcy0wLjUpKjIuKTttZXRhbGxpY1JvdWdobmVzcy5nPW1peChsb0xlcnAsaGlMZXJwLHN0ZXAoZGV0YWlsUm91Z2huZXNzLDAuNSkpO1xuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFTUFQXG5tZXRhbGxpY1JvdWdobmVzcy5nKj1taWNyb1N1cmZhY2VUZXhlbC5yO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfTUVUQUxMSUNST1VHSE5FU1Ncbm1pY3JvU3VyZmFjZT0xLjAtbWV0YWxsaWNSb3VnaG5lc3MuZzt2YXIgYmFzZUNvbG9yOiB2ZWMzZj1zdXJmYWNlQWxiZWRvO291dFBhcmFtcy5tZXRhbGxpYz1tZXRhbGxpY1JvdWdobmVzcy5yO291dFBhcmFtcy5zcGVjdWxhcldlaWdodD1tZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycy5hO3ZhciBkaWVsZWN0cmljRjAgOiBmMzI9cmVmbGVjdGl2aXR5Q29sb3IuYSpvdXRQYXJhbXMuc3BlY3VsYXJXZWlnaHQ7c3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yPW1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzLnJnYjtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLm1ldGFsbGljRjA9ZGllbGVjdHJpY0YwKnN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvcjtcbiNlbmRpZlxuI2lmZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG5vdXRQYXJhbXMuc3VyZmFjZUFsYmVkbz1iYXNlQ29sb3IucmdiKih2ZWMzZigxLjApLXZlYzNmKGRpZWxlY3RyaWNGMCkqc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yKSooMS4wLW91dFBhcmFtcy5tZXRhbGxpYyk7XG4jZWxzZVxub3V0UGFyYW1zLnN1cmZhY2VBbGJlZG89YmFzZUNvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG57bGV0IHJlZmxlY3Rpdml0eUNvbG9yOiB2ZWMzZj1taXgoZGllbGVjdHJpY0YwKnN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvcixiYXNlQ29sb3IucmdiLG91dFBhcmFtcy5tZXRhbGxpYyk7b3V0UGFyYW1zLnJlZmxlY3RhbmNlRjA9bWF4KHJlZmxlY3Rpdml0eUNvbG9yLnIsbWF4KHJlZmxlY3Rpdml0eUNvbG9yLmcscmVmbGVjdGl2aXR5Q29sb3IuYikpO31cbiNlbHNlXG4jaWYgRElFTEVDVFJJQ19TUEVDVUxBUl9NT0RFTD09RElFTEVDVFJJQ19TUEVDVUxBUl9NT0RFTF9HTFRGXG5sZXQgbWF4RjA6IGYzMj1tYXgoc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yLnIsbWF4KHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvci5nLHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvci5iKSk7b3V0UGFyYW1zLnJlZmxlY3RhbmNlRjA9bWl4KGRpZWxlY3RyaWNGMCptYXhGMCwxLjBmLG91dFBhcmFtcy5tZXRhbGxpYyk7XG4jZWxzZVxub3V0UGFyYW1zLnJlZmxlY3RhbmNlRjA9bWl4KGRpZWxlY3RyaWNGMCwxLjAsb3V0UGFyYW1zLm1ldGFsbGljKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbm91dFBhcmFtcy5yZWZsZWN0YW5jZUY5MD12ZWMzKG91dFBhcmFtcy5zcGVjdWxhcldlaWdodCk7dmFyIGY5MFNjYWxlOiBmMzI9MS4wO1xuI2Vsc2VcbnZhciBmOTBTY2FsZTogZjMyPWNsYW1wKDIuMCooaW9yLTEuMCksMC4wLDEuMCk7b3V0UGFyYW1zLnJlZmxlY3RhbmNlRjkwPXZlYzMobWl4KFxub3V0UGFyYW1zLnNwZWN1bGFyV2VpZ2h0KmY5MFNjYWxlLDEuMCxvdXRQYXJhbXMubWV0YWxsaWMpKTtcbiNlbmRpZlxub3V0UGFyYW1zLmRpZWxlY3RyaWNDb2xvckYwPXZlYzNmKGRpZWxlY3RyaWNGMCpzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IpO3ZhciBtZXRhbGxpY0NvbG9yRjA6IHZlYzNmPWJhc2VDb2xvci5yZ2I7b3V0UGFyYW1zLmNvbG9yUmVmbGVjdGFuY2VGMD1taXgob3V0UGFyYW1zLmRpZWxlY3RyaWNDb2xvckYwLG1ldGFsbGljQ29sb3JGMCxvdXRQYXJhbXMubWV0YWxsaWMpO1xuI2lmIChESUVMRUNUUklDX1NQRUNVTEFSX01PREVMPT1ESUVMRUNUUklDX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG5sZXQgZGllbGVjdHJpY0NvbG9yRjkwXG46IHZlYzNmPXN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvciAqXG52ZWMzZihvdXRQYXJhbXMuc3BlY3VsYXJXZWlnaHQqZjkwU2NhbGUpO1xuI2Vsc2VcbmxldCBkaWVsZWN0cmljQ29sb3JGOTBcbjogdmVjM2Y9dmVjM2Yob3V0UGFyYW1zLnNwZWN1bGFyV2VpZ2h0KmY5MFNjYWxlKTtcbiNlbmRpZlxuI2lmIChDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxubGV0IGNvbmR1Y3RvckNvbG9yRjkwOiB2ZWMzZj1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3I7XG4jZWxzZVxuI2lmZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG5sZXQgY29uZHVjdG9yQ29sb3JGOTA6IHZlYzNmPW91dFBhcmFtcy5yZWZsZWN0YW5jZUY5MDtcbiNlbHNlXG5sZXQgY29uZHVjdG9yQ29sb3JGOTA6IHZlYzNmPXZlYzNmKDEuMGYpO1xuI2VuZGlmXG4jZW5kaWZcbm91dFBhcmFtcy5jb2xvclJlZmxlY3RhbmNlRjkwPW1peChkaWVsZWN0cmljQ29sb3JGOTAsY29uZHVjdG9yQ29sb3JGOTAsb3V0UGFyYW1zLm1ldGFsbGljKTtcbiNlbHNlXG4jaWZkZWYgUkVGTEVDVElWSVRZXG5zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IqPXN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAucmdiO1xuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yTWFwPXN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXA7XG4jZW5kaWZcbiNpZmRlZiBNSUNST1NVUkZBQ0VGUk9NUkVGTEVDVElWSVRZTUFQXG5taWNyb1N1cmZhY2UqPXN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAuYTttaWNyb1N1cmZhY2UqPXJlZmxlY3Rpdml0eUluZm9zLno7XG4jZWxzZVxuI2lmZGVmIE1JQ1JPU1VSRkFDRUFVVE9NQVRJQ1xubWljcm9TdXJmYWNlKj1jb21wdXRlRGVmYXVsdE1pY3JvU3VyZmFjZShtaWNyb1N1cmZhY2Usc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yKTtcbiNlbmRpZlxuI2lmZGVmIE1JQ1JPU1VSRkFDRU1BUFxubWljcm9TdXJmYWNlKj1taWNyb1N1cmZhY2VUZXhlbC5yO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfTUlDUk9TVVJGQUNFXG4jZW5kaWZcbiNlbmRpZlxub3V0UGFyYW1zLmNvbG9yUmVmbGVjdGFuY2VGMD1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3I7b3V0UGFyYW1zLnJlZmxlY3RhbmNlRjA9bWF4KHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvci5yLG1heChzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IuZyxzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IuYikpO291dFBhcmFtcy5yZWZsZWN0YW5jZUY5MD12ZWMzZigxLjApO1xuI2lmIChESUVMRUNUUklDX1NQRUNVTEFSX01PREVMPT1ESUVMRUNUUklDX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG5vdXRQYXJhbXMuY29sb3JSZWZsZWN0YW5jZUY5MD1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3I7XG4jZWxzZVxub3V0UGFyYW1zLmNvbG9yUmVmbGVjdGFuY2VGOTA9dmVjMygxLjApO1xuI2VuZGlmXG4jZW5kaWZcbm1pY3JvU3VyZmFjZT1zYXR1cmF0ZShtaWNyb1N1cmZhY2UpO3ZhciByb3VnaG5lc3M6IGYzMj0xLi1taWNyb1N1cmZhY2U7dmFyIGRpZmZ1c2VSb3VnaG5lc3M6IGYzMj1iYXNlRGlmZnVzZVJvdWdobmVzcztcbiNpZmRlZiBCQVNFX0RJRkZVU0VfUk9VR0hORVNTXG5kaWZmdXNlUm91Z2huZXNzKj1iYXNlRGlmZnVzZVJvdWdobmVzc1RleHR1cmUqYmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcy55O1xuI2VuZGlmXG5vdXRQYXJhbXMubWljcm9TdXJmYWNlPW1pY3JvU3VyZmFjZTtvdXRQYXJhbXMucm91Z2huZXNzPXJvdWdobmVzcztvdXRQYXJhbXMuZGlmZnVzZVJvdWdobmVzcz1kaWZmdXNlUm91Z2huZXNzO3JldHVybiBvdXRQYXJhbXM7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrUmVmbGVjdGl2aXR5V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tTaGVlblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBTSEVFTlxuc3RydWN0IHNoZWVuT3V0UGFyYW1zXG57c2hlZW5JbnRlbnNpdHk6IGYzMlxuLHNoZWVuQ29sb3I6IHZlYzNmXG4sc2hlZW5Sb3VnaG5lc3M6IGYzMlxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG4sc3VyZmFjZUFsYmVkbzogdmVjM2ZcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKFNIRUVOX0FMQkVET1NDQUxJTkcpXG4sc2hlZW5BbGJlZG9TY2FsaW5nOiBmMzJcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG4sZmluYWxTaGVlblJhZGlhbmNlU2NhbGVkOiB2ZWMzZlxuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG4sc2hlZW5NYXBEYXRhOiB2ZWM0ZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OKSAmJiBkZWZpbmVkKEVOVklST05NRU5UQlJERilcbixzaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2U6IHZlYzNmXG4jZW5kaWZcbiNlbmRpZlxufTtcbiNkZWZpbmUgcGJyX2lubGluZVxuZm4gc2hlZW5CbG9jayhcbnZTaGVlbkNvbG9yOiB2ZWM0ZlxuI2lmZGVmIFNIRUVOX1JPVUdITkVTU1xuLHZTaGVlblJvdWdobmVzczogZjMyXG4jaWYgZGVmaW5lZChTSEVFTl9URVhUVVJFX1JPVUdITkVTUykgJiYgIWRlZmluZWQoU0hFRU5fVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxuLHNoZWVuTWFwUm91Z2huZXNzRGF0YTogdmVjNGZcbiNlbmRpZlxuI2VuZGlmXG4scm91Z2huZXNzOiBmMzJcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG4sc2hlZW5NYXBEYXRhOiB2ZWM0ZlxuLHNoZWVuTWFwTGV2ZWw6IGYzMlxuI2VuZGlmXG4scmVmbGVjdGFuY2U6IGYzMlxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG4sYmFzZUNvbG9yOiB2ZWMzZlxuLHN1cmZhY2VBbGJlZG86IHZlYzNmXG4jZW5kaWZcbiNpZmRlZiBFTlZJUk9OTUVOVEJSREZcbixOZG90VjogZjMyXG4sZW52aXJvbm1lbnRCcmRmOiB2ZWMzZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OKSAmJiBkZWZpbmVkKEVOVklST05NRU5UQlJERilcbixBQVJvdWdobmVzc0ZhY3RvcnM6IHZlYzJmXG4sdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvczogdmVjM2Zcbix2UmVmbGVjdGlvbkluZm9zOiB2ZWMyZlxuLHZSZWZsZWN0aW9uQ29sb3I6IHZlYzNmXG4sdkxpZ2h0aW5nSW50ZW5zaXR5OiB2ZWM0ZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixyZWZsZWN0aW9uU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbixyZWZsZWN0aW9uQ29vcmRzOiB2ZWMzZlxuI2Vsc2VcbixyZWZsZWN0aW9uU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4scmVmbGVjdGlvbkNvb3JkczogdmVjMmZcbiNlbmRpZlxuLE5kb3RWVW5jbGFtcGVkOiBmMzJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4scmVmbGVjdGlvbkxvd1NhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+XG4scmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyIFxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyIFxuI2Vsc2VcbixyZWZsZWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyIFxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlciBcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZlxuI2VuZGlmXG4jaWYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpICYmIGRlZmluZWQoUkFESUFOQ0VPQ0NMVVNJT04pXG4sc2VvOiBmMzJcbiNlbmRpZlxuI2lmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuLGVobzogZjMyXG4jZW5kaWZcbiNlbmRpZlxuKS0+c2hlZW5PdXRQYXJhbXNcbnt2YXIgb3V0UGFyYW1zOiBzaGVlbk91dFBhcmFtczt2YXIgc2hlZW5JbnRlbnNpdHk6IGYzMj12U2hlZW5Db2xvci5hO1xuI2lmZGVmIFNIRUVOX1RFWFRVUkVcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLnNoZWVuTWFwRGF0YT1zaGVlbk1hcERhdGE7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG52YXIgc2hlZW5GYWN0b3I6IGYzMj1wb3c1KDEuMC1zaGVlbkludGVuc2l0eSk7dmFyIHNoZWVuQ29sb3I6IHZlYzNmPWJhc2VDb2xvci5yZ2IqKDEuMC1zaGVlbkZhY3Rvcik7dmFyIHNoZWVuUm91Z2huZXNzOiBmMzI9c2hlZW5JbnRlbnNpdHk7b3V0UGFyYW1zLnN1cmZhY2VBbGJlZG89c3VyZmFjZUFsYmVkbypzaGVlbkZhY3RvcjtcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG5zaGVlbkludGVuc2l0eSo9c2hlZW5NYXBEYXRhLmE7XG4jZW5kaWZcbiNlbHNlXG52YXIgc2hlZW5Db2xvcjogdmVjM2Y9dlNoZWVuQ29sb3IucmdiO1xuI2lmZGVmIFNIRUVOX1RFWFRVUkVcbiNpZmRlZiBTSEVFTl9HQU1NQVRFWFRVUkVcbnNoZWVuQ29sb3IqPXRvTGluZWFyU3BhY2VWZWMzKHNoZWVuTWFwRGF0YS5yZ2IpO1xuI2Vsc2VcbnNoZWVuQ29sb3IqPXNoZWVuTWFwRGF0YS5yZ2I7XG4jZW5kaWZcbnNoZWVuQ29sb3IqPXNoZWVuTWFwTGV2ZWw7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTl9ST1VHSE5FU1NcbnZhciBzaGVlblJvdWdobmVzczogZjMyPXZTaGVlblJvdWdobmVzcztcbiNpZmRlZiBTSEVFTl9VU0VfUk9VR0hORVNTX0ZST01fTUFJTlRFWFRVUkVcbiNpZiBkZWZpbmVkKFNIRUVOX1RFWFRVUkUpXG5zaGVlblJvdWdobmVzcyo9c2hlZW5NYXBEYXRhLmE7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MpXG5zaGVlblJvdWdobmVzcyo9c2hlZW5NYXBSb3VnaG5lc3NEYXRhLmE7XG4jZW5kaWZcbiNlbHNlXG52YXIgc2hlZW5Sb3VnaG5lc3M6IGYzMj1yb3VnaG5lc3M7XG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxuc2hlZW5JbnRlbnNpdHkqPXNoZWVuTWFwRGF0YS5hO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChTSEVFTl9BTEJFRE9TQ0FMSU5HKVxuc2hlZW5JbnRlbnNpdHkqPSgxLi1yZWZsZWN0YW5jZSk7XG4jZW5kaWZcbnNoZWVuQ29sb3IqPXNoZWVuSW50ZW5zaXR5O1xuI2VuZGlmXG4jaWZkZWYgRU5WSVJPTk1FTlRCUkRGXG4vKiNpZmRlZiBTSEVFTl9TT0ZURVJcbnZhciBlbnZpcm9ubWVudFNoZWVuQnJkZjogdmVjM2Y9IHZlYzNmKDAuLDAuLGdldEJSREZMb29rdXBDaGFybGllU2hlZW4oTmRvdFYsc2hlZW5Sb3VnaG5lc3MpKTtcbiNlbHNlKi9cbiNpZmRlZiBTSEVFTl9ST1VHSE5FU1NcbnZhciBlbnZpcm9ubWVudFNoZWVuQnJkZjogdmVjM2Y9Z2V0QlJERkxvb2t1cChOZG90VixzaGVlblJvdWdobmVzcyk7XG4jZWxzZVxudmFyIGVudmlyb25tZW50U2hlZW5CcmRmOiB2ZWMzZj1lbnZpcm9ubWVudEJyZGY7XG4jZW5kaWZcbi8qI2VuZGlmKi9cbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG52YXIgc2hlZW5BbHBoYUc6IGYzMj1jb252ZXJ0Um91Z2huZXNzVG9BdmVyYWdlU2xvcGUoc2hlZW5Sb3VnaG5lc3MpO1xuI2lmZGVmIFNQRUNVTEFSQUFcbnNoZWVuQWxwaGFHKz1BQVJvdWdobmVzc0ZhY3RvcnMueTtcbiNlbmRpZlxudmFyIGVudmlyb25tZW50U2hlZW5SYWRpYW5jZTogdmVjNGY9IHZlYzRmKDAuLDAuLDAuLDAuKTtlbnZpcm9ubWVudFNoZWVuUmFkaWFuY2U9c2FtcGxlUmVmbGVjdGlvblRleHR1cmUoXG5zaGVlbkFscGhhR1xuLHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3Ncbix2UmVmbGVjdGlvbkluZm9zXG4sdlJlZmxlY3Rpb25Db2xvclxuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuLE5kb3RWVW5jbGFtcGVkXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbixzaGVlblJvdWdobmVzc1xuI2VuZGlmXG4scmVmbGVjdGlvblNhbXBsZXJcbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXJcbixyZWZsZWN0aW9uQ29vcmRzXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4scmVmbGVjdGlvbkxvd1NhbXBsZXJcbixyZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXJcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJcbixyZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuKTt2YXIgc2hlZW5FbnZpcm9ubWVudFJlZmxlY3RhbmNlOiB2ZWMzZj1nZXRTaGVlblJlZmxlY3RhbmNlRnJvbUJSREZMb29rdXAoc2hlZW5Db2xvcixlbnZpcm9ubWVudFNoZWVuQnJkZik7XG4jaWYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpICYmIGRlZmluZWQoUkFESUFOQ0VPQ0NMVVNJT04pXG5zaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2UqPXNlbztcbiNlbmRpZlxuI2lmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuc2hlZW5FbnZpcm9ubWVudFJlZmxlY3RhbmNlKj1laG87XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLnNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1zaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZW5kaWZcbm91dFBhcmFtcy5maW5hbFNoZWVuUmFkaWFuY2VTY2FsZWQ9XG5lbnZpcm9ubWVudFNoZWVuUmFkaWFuY2UucmdiICpcbnNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZSAqXG52TGlnaHRpbmdJbnRlbnNpdHkuejtcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKFNIRUVOX0FMQkVET1NDQUxJTkcpXG5vdXRQYXJhbXMuc2hlZW5BbGJlZG9TY2FsaW5nPTEuMC1zaGVlbkludGVuc2l0eSptYXgobWF4KHNoZWVuQ29sb3IucixzaGVlbkNvbG9yLmcpLHNoZWVuQ29sb3IuYikqZW52aXJvbm1lbnRTaGVlbkJyZGYuYjtcbiNlbmRpZlxub3V0UGFyYW1zLnNoZWVuSW50ZW5zaXR5PXNoZWVuSW50ZW5zaXR5O291dFBhcmFtcy5zaGVlbkNvbG9yPXNoZWVuQ29sb3I7b3V0UGFyYW1zLnNoZWVuUm91Z2huZXNzPXNoZWVuUm91Z2huZXNzO3JldHVybiBvdXRQYXJhbXM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tTaGVlbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrU3ViU3VyZmFjZVwiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBzdWJTdXJmYWNlT3V0UGFyYW1zXG57c3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlOiB2ZWMzZixcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG5maW5hbFJlZnJhY3Rpb246IHZlYzNmLFxuc3VyZmFjZUFsYmVkbzogdmVjM2YsXG4jaWZkZWYgU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWVxuYWxwaGE6IGYzMixcbiNlbmRpZlxucmVmcmFjdGlvbk9wYWNpdHk6IGYzMixcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxudHJhbnNtaXR0YW5jZTogdmVjM2YsXG50cmFuc2x1Y2VuY3lJbnRlbnNpdHk6IGYzMixcbiNpZmRlZiBSRUZMRUNUSU9OXG5yZWZyYWN0aW9uSXJyYWRpYW5jZTogdmVjM2YsXG4jZW5kaWZcbiNlbmRpZlxuI2lmIERFQlVHTU9ERT4wXG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG50aGlja25lc3NNYXA6IHZlYzRmLFxuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTlxuZW52aXJvbm1lbnRSZWZyYWN0aW9uOiB2ZWM0ZixcbnJlZnJhY3Rpb25UcmFuc21pdHRhbmNlOiB2ZWMzZlxuI2VuZGlmXG4jZW5kaWZcbn07XG4jaWZkZWYgU1VCU1VSRkFDRVxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbiNkZWZpbmUgcGJyX2lubGluZVxuZm4gc2FtcGxlRW52aXJvbm1lbnRSZWZyYWN0aW9uKFxuaW9yOiBmMzJcbix0aGlja25lc3M6IGYzMlxuLHJlZnJhY3Rpb25MT0Q6IGYzMlxuLG5vcm1hbFc6IHZlYzNmXG4sdlBvc2l0aW9uVzogdmVjM2Zcbix2aWV3RGlyZWN0aW9uVzogdmVjM2Zcbix2aWV3OiBtYXQ0eDRmXG4sdlJlZnJhY3Rpb25JbmZvczogdmVjNGZcbixyZWZyYWN0aW9uTWF0cml4OiBtYXQ0eDRmXG4sdlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvczogdmVjNGZcbixhbHBoYUc6IGYzMlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05NQVBfM0RcbixyZWZyYWN0aW9uU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZyYWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZyYWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZyYWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbixyZWZyYWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+XG4scmVmcmFjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlciBcbiNlbmRpZlxuI2Vsc2VcbixyZWZyYWN0aW9uU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmcmFjdGlvblNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4scmVmcmFjdGlvbkxvd1NhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPlxuLHJlZnJhY3Rpb25Mb3dTYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuLHJlZnJhY3Rpb25IaWdoU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmcmFjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlciBcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbixhbmlzb3Ryb3BpY091dDogYW5pc290cm9waWNPdXRQYXJhbXNcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHZSZWZyYWN0aW9uRmlsdGVyaW5nSW5mbzogdmVjMmZcbiNlbmRpZlxuI2lmZGVmIFNTX1VTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG4scmVmcmFjdGlvblBvc2l0aW9uOiB2ZWMzZlxuLHJlZnJhY3Rpb25TaXplOiB2ZWMzZlxuI2VuZGlmXG4pLT52ZWM0ZiB7dmFyIGVudmlyb25tZW50UmVmcmFjdGlvbjogdmVjNGY9IHZlYzRmKDAuLDAuLDAuLDAuKTtcbiNpZmRlZiBBTklTT1RST1BJQ1xudmFyIHJlZnJhY3Rpb25WZWN0b3I6IHZlYzNmPXJlZnJhY3QoLXZpZXdEaXJlY3Rpb25XLGFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljTm9ybWFsLGlvcik7XG4jZWxzZVxudmFyIHJlZnJhY3Rpb25WZWN0b3I6IHZlYzNmPXJlZnJhY3QoLXZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsaW9yKTtcbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05NQVBfT1BQT1NJVEVaXG5yZWZyYWN0aW9uVmVjdG9yLnoqPS0xLjA7XG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OTUFQXzNEXG4jaWZkZWYgU1NfVVNFX0xPQ0FMX1JFRlJBQ1RJT05NQVBfQ1VCSUNcbnJlZnJhY3Rpb25WZWN0b3I9cGFyYWxsYXhDb3JyZWN0Tm9ybWFsKHZQb3NpdGlvblcscmVmcmFjdGlvblZlY3RvcixyZWZyYWN0aW9uU2l6ZSxyZWZyYWN0aW9uUG9zaXRpb24pO1xuI2VuZGlmXG5yZWZyYWN0aW9uVmVjdG9yLnk9cmVmcmFjdGlvblZlY3Rvci55KnZSZWZyYWN0aW9uSW5mb3Mudzt2YXIgcmVmcmFjdGlvbkNvb3JkczogdmVjM2Y9cmVmcmFjdGlvblZlY3RvcjtyZWZyYWN0aW9uQ29vcmRzPSAocmVmcmFjdGlvbk1hdHJpeCogdmVjNGYocmVmcmFjdGlvbkNvb3JkcywwKSkueHl6O1xuI2Vsc2VcbiNpZmRlZiBTU19VU0VfVEhJQ0tORVNTX0FTX0RFUFRIXG52YXIgdlJlZnJhY3Rpb25VVlc6IHZlYzNmPSAocmVmcmFjdGlvbk1hdHJpeCoodmlldyogdmVjNGYodlBvc2l0aW9uVytyZWZyYWN0aW9uVmVjdG9yKnRoaWNrbmVzcywxLjApKSkueHl6O1xuI2Vsc2VcbnZhciB2UmVmcmFjdGlvblVWVzogdmVjM2Y9IChyZWZyYWN0aW9uTWF0cml4Kih2aWV3KiB2ZWM0Zih2UG9zaXRpb25XK3JlZnJhY3Rpb25WZWN0b3IqdlJlZnJhY3Rpb25JbmZvcy56LDEuMCkpKS54eXo7XG4jZW5kaWZcbnZhciByZWZyYWN0aW9uQ29vcmRzOiB2ZWMyZj12UmVmcmFjdGlvblVWVy54eS92UmVmcmFjdGlvblVWVy56O3JlZnJhY3Rpb25Db29yZHMueT0xLjAtcmVmcmFjdGlvbkNvb3Jkcy55O1xuI2VuZGlmXG4jaWZkZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbnZhciBsb2Q9cmVmcmFjdGlvbkxPRCp2UmVmcmFjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnkrdlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy56O1xuI2lmZGVmIFNTX0xPRElOUkVGUkFDVElPTkFMUEhBXG52YXIgYXV0b21hdGljUmVmcmFjdGlvbkxPRDogZjMyPVVOUEFDS19MT0QodGV4dHVyZVNhbXBsZShyZWZyYWN0aW9uU2FtcGxlcixyZWZyYWN0aW9uU2FtcGxlclNhbXBsZXIscmVmcmFjdGlvbkNvb3JkcykuYSk7dmFyIHJlcXVlc3RlZFJlZnJhY3Rpb25MT0Q6IGYzMj1tYXgoYXV0b21hdGljUmVmcmFjdGlvbkxPRCxsb2QpO1xuI2Vsc2VcbnZhciByZXF1ZXN0ZWRSZWZyYWN0aW9uTE9EOiBmMzI9bG9kO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUFMVElNRV9GSUxURVJJTkcpICYmIGRlZmluZWQoU1NfUkVGUkFDVElPTk1BUF8zRClcbmVudmlyb25tZW50UmVmcmFjdGlvbj0gdmVjNGYocmFkaWFuY2UoYWxwaGFHLHJlZnJhY3Rpb25TYW1wbGVyLHJlZnJhY3Rpb25TYW1wbGVyU2FtcGxlcixyZWZyYWN0aW9uQ29vcmRzLHZSZWZyYWN0aW9uRmlsdGVyaW5nSW5mbyksMS4wKTtcbiNlbHNlXG5lbnZpcm9ubWVudFJlZnJhY3Rpb249dGV4dHVyZVNhbXBsZUxldmVsKHJlZnJhY3Rpb25TYW1wbGVyLHJlZnJhY3Rpb25TYW1wbGVyU2FtcGxlcixyZWZyYWN0aW9uQ29vcmRzLHJlcXVlc3RlZFJlZnJhY3Rpb25MT0QpO1xuI2VuZGlmXG4jZWxzZVxudmFyIGxvZFJlZnJhY3Rpb25Ob3JtYWxpemVkOiBmMzI9c2F0dXJhdGUocmVmcmFjdGlvbkxPRC9sb2cyKHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCkpO3ZhciBsb2RSZWZyYWN0aW9uTm9ybWFsaXplZERvdWJsZWQ6IGYzMj1sb2RSZWZyYWN0aW9uTm9ybWFsaXplZCoyLjA7dmFyIGVudmlyb25tZW50UmVmcmFjdGlvbk1pZDogdmVjNGY9dGV4dHVyZVNhbXBsZShyZWZyYWN0aW9uU2FtcGxlcixyZWZyYWN0aW9uU2FtcGxlclNhbXBsZXIscmVmcmFjdGlvbkNvb3Jkcyk7aWYgKGxvZFJlZnJhY3Rpb25Ob3JtYWxpemVkRG91YmxlZDwxLjApe2Vudmlyb25tZW50UmVmcmFjdGlvbj1taXgoXG50ZXh0dXJlU2FtcGxlKHJlZnJhY3Rpb25IaWdoU2FtcGxlcixyZWZyYWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyLHJlZnJhY3Rpb25Db29yZHMpLFxuZW52aXJvbm1lbnRSZWZyYWN0aW9uTWlkLFxubG9kUmVmcmFjdGlvbk5vcm1hbGl6ZWREb3VibGVkXG4pO30gZWxzZSB7ZW52aXJvbm1lbnRSZWZyYWN0aW9uPW1peChcbmVudmlyb25tZW50UmVmcmFjdGlvbk1pZCxcbnRleHR1cmVTYW1wbGUocmVmcmFjdGlvbkxvd1NhbXBsZXIscmVmcmFjdGlvbkxvd1NhbXBsZXJTYW1wbGVyLHJlZnJhY3Rpb25Db29yZHMpLFxubG9kUmVmcmFjdGlvbk5vcm1hbGl6ZWREb3VibGVkLTEuMFxuKTt9XG4jZW5kaWZcbnZhciByZWZyYWN0aW9uPWVudmlyb25tZW50UmVmcmFjdGlvbi5yZ2I7XG4jaWZkZWYgU1NfUkdCRFJFRlJBQ1RJT05cbnJlZnJhY3Rpb249ZnJvbVJHQkQoZW52aXJvbm1lbnRSZWZyYWN0aW9uKTtcbiNlbmRpZlxuI2lmZGVmIFNTX0dBTU1BUkVGUkFDVElPTlxucmVmcmFjdGlvbj10b0xpbmVhclNwYWNlVmVjMyhlbnZpcm9ubWVudFJlZnJhY3Rpb24ucmdiKTtcbiNlbmRpZlxucmV0dXJuIHZlYzRmKHJlZnJhY3Rpb24sZW52aXJvbm1lbnRSZWZyYWN0aW9uLmEpO31cbiNlbmRpZlxuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBzdWJTdXJmYWNlQmxvY2soXG52U3ViU3VyZmFjZUludGVuc2l0eTogdmVjM2Zcbix2VGhpY2tuZXNzUGFyYW06IHZlYzJmXG4sdlRpbnRDb2xvcjogdmVjNGZcbixub3JtYWxXOiB2ZWMzZlxuLHNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTogdmVjM2ZcbiNpZmRlZiBTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkVcbix0aGlja25lc3NNYXA6IHZlYzRmXG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkVcbixyZWZyYWN0aW9uSW50ZW5zaXR5TWFwOiB2ZWM0ZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkVcbix0cmFuc2x1Y2VuY3lJbnRlbnNpdHlNYXA6IHZlYzRmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG4scmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0ZlxuI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWYgIWRlZmluZWQoTk9STUFMKSB8fCAhZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbixpcnJhZGlhbmNlVmVjdG9yXzogdmVjM2ZcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVBTFRJTUVfRklMVEVSSU5HKVxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzogdmVjMmZcbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGljZGZTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixpY2RmU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGlycmFkaWFuY2VTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLGlycmFkaWFuY2VTYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2Vsc2VcbixpcnJhZGlhbmNlU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4saXJyYWRpYW5jZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pIHx8IGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZKVxuLHN1cmZhY2VBbGJlZG86IHZlYzNmXG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG4sdlBvc2l0aW9uVzogdmVjM2Zcbix2aWV3RGlyZWN0aW9uVzogdmVjM2Zcbix2aWV3OiBtYXQ0eDRmXG4sdlJlZnJhY3Rpb25JbmZvczogdmVjNGZcbixyZWZyYWN0aW9uTWF0cml4OiBtYXQ0eDRmXG4sdlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvczogdmVjNGZcbix2TGlnaHRpbmdJbnRlbnNpdHk6IHZlYzRmXG4jaWZkZWYgU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWVxuLGFscGhhOiBmMzJcbiNlbmRpZlxuI2lmZGVmIFNTX0xPRElOUkVGUkFDVElPTkFMUEhBXG4sTmRvdFZVbmNsYW1wZWQ6IGYzMlxuI2VuZGlmXG4jaWZkZWYgU1NfTElORUFSU1BFQ1VMQVJSRUZSQUNUSU9OXG4scm91Z2huZXNzOiBmMzJcbiNlbmRpZlxuLGFscGhhRzogZjMyXG4jaWZkZWYgU1NfUkVGUkFDVElPTk1BUF8zRFxuLHJlZnJhY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZnJhY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZnJhY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZnJhY3Rpb25Mb3dTYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuLHJlZnJhY3Rpb25IaWdoU2FtcGxlcjogdGV4dHVyZV9jdWJlPGYzMj5cbixyZWZyYWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyIFxuI2VuZGlmXG4jZWxzZVxuLHJlZnJhY3Rpb25TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZyYWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZyYWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmcmFjdGlvbkxvd1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4scmVmcmFjdGlvbkhpZ2hTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZyYWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyIFxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0OiBhbmlzb3Ryb3BpY091dFBhcmFtc1xuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZnJhY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZlxuI2VuZGlmXG4jaWZkZWYgU1NfVVNFX0xPQ0FMX1JFRlJBQ1RJT05NQVBfQ1VCSUNcbixyZWZyYWN0aW9uUG9zaXRpb246IHZlYzNmXG4scmVmcmFjdGlvblNpemU6IHZlYzNmXG4jZW5kaWZcbiNpZmRlZiBTU19ESVNQRVJTSU9OXG4sZGlzcGVyc2lvbjogZjMyXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuLHZEaWZmdXNpb25EaXN0YW5jZTogdmVjM2Zcbix2VHJhbnNsdWNlbmN5Q29sb3I6IHZlYzRmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRVxuLHRyYW5zbHVjZW5jeUNvbG9yTWFwOiB2ZWM0ZlxuI2VuZGlmXG4jZW5kaWZcbiktPnN1YlN1cmZhY2VPdXRQYXJhbXNcbnt2YXIgb3V0UGFyYW1zOiBzdWJTdXJmYWNlT3V0UGFyYW1zO291dFBhcmFtcy5zcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U9c3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlO1xuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbnZhciByZWZyYWN0aW9uSW50ZW5zaXR5OiBmMzI9dlN1YlN1cmZhY2VJbnRlbnNpdHkueDtcbiNpZmRlZiBTU19MSU5LUkVGUkFDVElPTlRPVFJBTlNQQVJFTkNZXG5yZWZyYWN0aW9uSW50ZW5zaXR5Kj0oMS4wLWFscGhhKTtvdXRQYXJhbXMuYWxwaGE9MS4wO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbnZhciB0cmFuc2x1Y2VuY3lJbnRlbnNpdHk6IGYzMj12U3ViU3VyZmFjZUludGVuc2l0eS55O1xuI2VuZGlmXG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG4jaWZkZWYgU1NfVVNFX0dMVEZfVEVYVFVSRVNcbnZhciB0aGlja25lc3M6IGYzMj10aGlja25lc3NNYXAuZyp2VGhpY2tuZXNzUGFyYW0ueSt2VGhpY2tuZXNzUGFyYW0ueDtcbiNlbHNlXG52YXIgdGhpY2tuZXNzOiBmMzI9dGhpY2tuZXNzTWFwLnIqdlRoaWNrbmVzc1BhcmFtLnkrdlRoaWNrbmVzc1BhcmFtLng7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLnRoaWNrbmVzc01hcD10aGlja25lc3NNYXA7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pICYmIGRlZmluZWQoU1NfUkVGUkFDVElPTl9VU0VfSU5URU5TSVRZX0ZST01fVEhJQ0tORVNTKVxuI2lmZGVmIFNTX1VTRV9HTFRGX1RFWFRVUkVTXG5yZWZyYWN0aW9uSW50ZW5zaXR5Kj10aGlja25lc3NNYXAucjtcbiNlbHNlXG5yZWZyYWN0aW9uSW50ZW5zaXR5Kj10aGlja25lc3NNYXAuZztcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpICYmIGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZX1VTRV9JTlRFTlNJVFlfRlJPTV9USElDS05FU1MpXG4jaWZkZWYgU1NfVVNFX0dMVEZfVEVYVFVSRVNcbnRyYW5zbHVjZW5jeUludGVuc2l0eSo9dGhpY2tuZXNzTWFwLmE7XG4jZWxzZVxudHJhbnNsdWNlbmN5SW50ZW5zaXR5Kj10aGlja25lc3NNYXAuYjtcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxudmFyIHRoaWNrbmVzczogZjMyPXZUaGlja25lc3NQYXJhbS55O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19SRUZSQUNUSU9OKSAmJiBkZWZpbmVkKFNTX1JFRlJBQ1RJT05JTlRFTlNJVFlfVEVYVFVSRSlcbiNpZmRlZiBTU19VU0VfR0xURl9URVhUVVJFU1xucmVmcmFjdGlvbkludGVuc2l0eSo9cmVmcmFjdGlvbkludGVuc2l0eU1hcC5yO1xuI2Vsc2VcbnJlZnJhY3Rpb25JbnRlbnNpdHkqPXJlZnJhY3Rpb25JbnRlbnNpdHlNYXAuZztcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpICYmIGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkUpXG4jaWZkZWYgU1NfVVNFX0dMVEZfVEVYVFVSRVNcbnRyYW5zbHVjZW5jeUludGVuc2l0eSo9dHJhbnNsdWNlbmN5SW50ZW5zaXR5TWFwLmE7XG4jZWxzZVxudHJhbnNsdWNlbmN5SW50ZW5zaXR5Kj10cmFuc2x1Y2VuY3lJbnRlbnNpdHlNYXAuYjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG50aGlja25lc3M9bWF4RXBzKHRoaWNrbmVzcyk7dmFyIHRyYW5zbHVjZW5jeUNvbG9yOiB2ZWM0Zj12VHJhbnNsdWNlbmN5Q29sb3I7XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRVxudHJhbnNsdWNlbmN5Q29sb3IqPXRyYW5zbHVjZW5jeUNvbG9yTWFwO1xuI2VuZGlmXG52YXIgdHJhbnNtaXR0YW5jZTogdmVjM2Y9dHJhbnNtaXR0YW5jZUJSREZfQnVybGV5KHRyYW5zbHVjZW5jeUNvbG9yLnJnYix2RGlmZnVzaW9uRGlzdGFuY2UsdGhpY2tuZXNzKTt0cmFuc21pdHRhbmNlKj10cmFuc2x1Y2VuY3lJbnRlbnNpdHk7b3V0UGFyYW1zLnRyYW5zbWl0dGFuY2U9dHJhbnNtaXR0YW5jZTtvdXRQYXJhbXMudHJhbnNsdWNlbmN5SW50ZW5zaXR5PXRyYW5zbHVjZW5jeUludGVuc2l0eTtcbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbnZhciBlbnZpcm9ubWVudFJlZnJhY3Rpb246IHZlYzRmPSB2ZWM0ZigwLiwwLiwwLiwwLik7XG4jaWZkZWYgU1NfSEFTX1RISUNLTkVTU1xudmFyIGlvcjogZjMyPXZSZWZyYWN0aW9uSW5mb3MueTtcbiNlbHNlXG52YXIgaW9yOiBmMzI9dlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy53O1xuI2VuZGlmXG4jaWZkZWYgU1NfTE9ESU5SRUZSQUNUSU9OQUxQSEFcbnZhciByZWZyYWN0aW9uQWxwaGFHOiBmMzI9YWxwaGFHO3JlZnJhY3Rpb25BbHBoYUc9bWl4KGFscGhhRywwLjAsY2xhbXAoaW9yKjMuMC0yLjAsMC4wLDEuMCkpO3ZhciByZWZyYWN0aW9uTE9EOiBmMzI9Z2V0TG9kRnJvbUFscGhhR05kb3RWKHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyZWZyYWN0aW9uQWxwaGFHLE5kb3RWVW5jbGFtcGVkKTtcbiNlbGlmIGRlZmluZWQoU1NfTElORUFSU1BFQ1VMQVJSRUZSQUNUSU9OKVxudmFyIHJlZnJhY3Rpb25Sb3VnaG5lc3M6IGYzMj1hbHBoYUc7cmVmcmFjdGlvblJvdWdobmVzcz1taXgoYWxwaGFHLDAuMCxjbGFtcChpb3IqMy4wLTIuMCwwLjAsMS4wKSk7dmFyIHJlZnJhY3Rpb25MT0Q6IGYzMj1nZXRMaW5lYXJMb2RGcm9tUm91Z2huZXNzKHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyZWZyYWN0aW9uUm91Z2huZXNzKTtcbiNlbHNlXG52YXIgcmVmcmFjdGlvbkFscGhhRzogZjMyPWFscGhhRztyZWZyYWN0aW9uQWxwaGFHPW1peChhbHBoYUcsMC4wLGNsYW1wKGlvciozLjAtMi4wLDAuMCwxLjApKTt2YXIgcmVmcmFjdGlvbkxPRDogZjMyPWdldExvZEZyb21BbHBoYUcodlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54LHJlZnJhY3Rpb25BbHBoYUcpO1xuI2VuZGlmXG52YXIgcmVmcmFjdGlvbl9pb3I6IGYzMj12UmVmcmFjdGlvbkluZm9zLnk7XG4jaWZkZWYgU1NfRElTUEVSU0lPTlxudmFyIHJlYWxJT1I6IGYzMj0xLjAvcmVmcmFjdGlvbl9pb3I7dmFyIGlvckRpc3BlcnNpb25TcHJlYWQ6IGYzMj0wLjA0KmRpc3BlcnNpb24qKHJlYWxJT1ItMS4wKTt2YXIgaW9yczogdmVjM2Y9IHZlYzNmKDEuMC8ocmVhbElPUi1pb3JEaXNwZXJzaW9uU3ByZWFkKSxyZWZyYWN0aW9uX2lvciwxLjAvKHJlYWxJT1IraW9yRGlzcGVyc2lvblNwcmVhZCkpO2ZvciAodmFyIGk6IGkzMj0wOyBpPDM7IGkrKykge3JlZnJhY3Rpb25faW9yPWlvcnNbaV07XG4jZW5kaWZcbnZhciBlbnZTYW1wbGU6IHZlYzRmPXNhbXBsZUVudmlyb25tZW50UmVmcmFjdGlvbihyZWZyYWN0aW9uX2lvcix0aGlja25lc3MscmVmcmFjdGlvbkxPRCxub3JtYWxXLHZQb3NpdGlvblcsdmlld0RpcmVjdGlvblcsdmlldyx2UmVmcmFjdGlvbkluZm9zLHJlZnJhY3Rpb25NYXRyaXgsdlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvcyxhbHBoYUdcbiNpZmRlZiBTU19SRUZSQUNUSU9OTUFQXzNEXG4scmVmcmFjdGlvblNhbXBsZXJcbixyZWZyYWN0aW9uU2FtcGxlclNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZyYWN0aW9uTG93U2FtcGxlclxuLHJlZnJhY3Rpb25Mb3dTYW1wbGVyU2FtcGxlclxuLHJlZnJhY3Rpb25IaWdoU2FtcGxlclxuLHJlZnJhY3Rpb25IaWdoU2FtcGxlclNhbXBsZXJcbiNlbmRpZlxuI2Vsc2VcbixyZWZyYWN0aW9uU2FtcGxlclxuLHJlZnJhY3Rpb25TYW1wbGVyU2FtcGxlclxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZnJhY3Rpb25Mb3dTYW1wbGVyXG4scmVmcmFjdGlvbkxvd1NhbXBsZXJTYW1wbGVyXG4scmVmcmFjdGlvbkhpZ2hTYW1wbGVyXG4scmVmcmFjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlclxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0XG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmcmFjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuI2lmZGVmIFNTX1VTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG4scmVmcmFjdGlvblBvc2l0aW9uXG4scmVmcmFjdGlvblNpemVcbiNlbmRpZlxuKTtcbiNpZmRlZiBTU19ESVNQRVJTSU9OXG5lbnZpcm9ubWVudFJlZnJhY3Rpb25baV09ZW52U2FtcGxlW2ldO31cbiNlbHNlXG5lbnZpcm9ubWVudFJlZnJhY3Rpb249ZW52U2FtcGxlO1xuI2VuZGlmXG5lbnZpcm9ubWVudFJlZnJhY3Rpb249dmVjNGYoZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYip2UmVmcmFjdGlvbkluZm9zLngsZW52aXJvbm1lbnRSZWZyYWN0aW9uLmEpO1xuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTlxudmFyIHJlZnJhY3Rpb25UcmFuc21pdHRhbmNlOiB2ZWMzZj0gdmVjM2YocmVmcmFjdGlvbkludGVuc2l0eSk7XG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG52YXIgdm9sdW1lQWxiZWRvOiB2ZWMzZj1jb21wdXRlQ29sb3JBdERpc3RhbmNlSW5NZWRpYSh2VGludENvbG9yLnJnYix2VGludENvbG9yLncpO3JlZnJhY3Rpb25UcmFuc21pdHRhbmNlKj1jb2NhTGFtYmVydFZlYzModm9sdW1lQWxiZWRvLHRoaWNrbmVzcyk7XG4jZWxpZiBkZWZpbmVkKFNTX0xJTktSRUZSQUNUSU9OVE9UUkFOU1BBUkVOQ1kpXG52YXIgbWF4Q2hhbm5lbDogZjMyPW1heChtYXgoc3VyZmFjZUFsYmVkby5yLHN1cmZhY2VBbGJlZG8uZyksc3VyZmFjZUFsYmVkby5iKTt2YXIgdm9sdW1lQWxiZWRvOiB2ZWMzZj1zYXR1cmF0ZVZlYzMobWF4Q2hhbm5lbCpzdXJmYWNlQWxiZWRvKTtlbnZpcm9ubWVudFJlZnJhY3Rpb249dmVjNGYoZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYip2b2x1bWVBbGJlZG8sZW52aXJvbm1lbnRSZWZyYWN0aW9uLmEpO1xuI2Vsc2VcbnZhciB2b2x1bWVBbGJlZG86IHZlYzNmPWNvbXB1dGVDb2xvckF0RGlzdGFuY2VJbk1lZGlhKHZUaW50Q29sb3IucmdiLHZUaW50Q29sb3Iudyk7cmVmcmFjdGlvblRyYW5zbWl0dGFuY2UqPWNvY2FMYW1iZXJ0VmVjMyh2b2x1bWVBbGJlZG8sdlRoaWNrbmVzc1BhcmFtLnkpO1xuI2VuZGlmXG4jaWZkZWYgU1NfQUxCRURPRk9SUkVGUkFDVElPTlRJTlRcbmVudmlyb25tZW50UmVmcmFjdGlvbj12ZWM0ZihlbnZpcm9ubWVudFJlZnJhY3Rpb24ucmdiKnN1cmZhY2VBbGJlZG8ucmdiLGVudmlyb25tZW50UmVmcmFjdGlvbi5hKTtcbiNlbmRpZlxub3V0UGFyYW1zLnN1cmZhY2VBbGJlZG89c3VyZmFjZUFsYmVkbztvdXRQYXJhbXMucmVmcmFjdGlvbk9wYWNpdHk9MS4tcmVmcmFjdGlvbkludGVuc2l0eTtcbiNpZmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxub3V0UGFyYW1zLnN1cmZhY2VBbGJlZG8qPW91dFBhcmFtcy5yZWZyYWN0aW9uT3BhY2l0eTtcbiNlbmRpZlxuI2lmZGVmIFVOVVNFRF9NVUxUSVBMRUJPVU5DRVNcbnZhciBib3VuY2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U6IHZlYzNmPSgyLjAqc3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlKS8oMS4wK3NwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSk7b3V0UGFyYW1zLnNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1taXgoYm91bmNlU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlLHNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSxyZWZyYWN0aW9uSW50ZW5zaXR5KTtcbiNlbmRpZlxuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMucmVmcmFjdGlvblRyYW5zbWl0dGFuY2U9cmVmcmFjdGlvblRyYW5zbWl0dGFuY2U7XG4jZW5kaWZcbm91dFBhcmFtcy5maW5hbFJlZnJhY3Rpb249ZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYipyZWZyYWN0aW9uVHJhbnNtaXR0YW5jZSp2TGlnaHRpbmdJbnRlbnNpdHkuejtvdXRQYXJhbXMuZmluYWxSZWZyYWN0aW9uKj12ZWMzZigxLjApLXNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmVudmlyb25tZW50UmVmcmFjdGlvbj1lbnZpcm9ubWVudFJlZnJhY3Rpb247XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpXG4jaWYgZGVmaW5lZChOT1JNQUwpICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKVxudmFyIGlycmFkaWFuY2VWZWN0b3I6IHZlYzNmPSAocmVmbGVjdGlvbk1hdHJpeCogdmVjNGYobm9ybWFsVywwKSkueHl6O1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG5pcnJhZGlhbmNlVmVjdG9yLnoqPS0xLjA7XG4jZW5kaWZcbiNpZmRlZiBJTlZFUlRDVUJJQ01BUFxuaXJyYWRpYW5jZVZlY3Rvci55Kj0tMS4wO1xuI2VuZGlmXG4jZWxzZVxudmFyIGlycmFkaWFuY2VWZWN0b3I6IHZlYzNmPWlycmFkaWFuY2VWZWN0b3JfO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUClcbiNpZiBkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbnZhciByZWZyYWN0aW9uSXJyYWRpYW5jZTogdmVjM2Y9aXJyYWRpYW5jZShyZWZsZWN0aW9uU2FtcGxlcixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXIsLWlycmFkaWFuY2VWZWN0b3IsdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvLDAuMCxzdXJmYWNlQWxiZWRvLGlycmFkaWFuY2VWZWN0b3JcbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGljZGZTYW1wbGVyXG4saWNkZlNhbXBsZXJTYW1wbGVyXG4jZW5kaWZcbik7XG4jZWxzZVxudmFyIHJlZnJhY3Rpb25JcnJhZGlhbmNlOiB2ZWMzZj1jb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKC1pcnJhZGlhbmNlVmVjdG9yKTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChVU0VJUlJBRElBTkNFTUFQKVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciBpcnJhZGlhbmNlQ29vcmRzOiB2ZWMzZj1pcnJhZGlhbmNlVmVjdG9yO1xuI2Vsc2VcbnZhciBpcnJhZGlhbmNlQ29vcmRzOiB2ZWMyZj1pcnJhZGlhbmNlVmVjdG9yLnh5O1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfUFJPSkVDVElPTlxuaXJyYWRpYW5jZUNvb3Jkcy89aXJyYWRpYW5jZVZlY3Rvci56O1xuI2VuZGlmXG5pcnJhZGlhbmNlQ29vcmRzLnk9MS4wLWlycmFkaWFuY2VDb29yZHMueTtcbiNlbmRpZlxudmFyIHRlbXA6IHZlYzRmPXRleHR1cmVTYW1wbGUoaXJyYWRpYW5jZVNhbXBsZXIsaXJyYWRpYW5jZVNhbXBsZXJTYW1wbGVyLC1pcnJhZGlhbmNlQ29vcmRzKTt2YXIgcmVmcmFjdGlvbklycmFkaWFuY2U9dGVtcC5yZ2I7XG4jaWZkZWYgUkdCRFJFRkxFQ1RJT05cbnJlZnJhY3Rpb25JcnJhZGlhbmNlPWZyb21SR0JEKHRlbXApLnJnYjtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxucmVmcmFjdGlvbklycmFkaWFuY2U9dG9MaW5lYXJTcGFjZVZlYzMocmVmcmFjdGlvbklycmFkaWFuY2UpO1xuI2VuZGlmXG4jZWxzZVxudmFyIHJlZnJhY3Rpb25JcnJhZGlhbmNlOiB2ZWMzZj0gdmVjM2YoMC4pO1xuI2VuZGlmXG5yZWZyYWN0aW9uSXJyYWRpYW5jZSo9dHJhbnNtaXR0YW5jZTtcbiNpZmRlZiBTU19BTEJFRE9GT1JUUkFOU0xVQ0VOQ1lUSU5UXG5yZWZyYWN0aW9uSXJyYWRpYW5jZSo9c3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbm91dFBhcmFtcy5yZWZyYWN0aW9uSXJyYWRpYW5jZT1yZWZyYWN0aW9uSXJyYWRpYW5jZTtcbiNlbmRpZlxucmV0dXJuIG91dFBhcmFtczt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja1N1YlN1cmZhY2VXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9zYW1wbGVyRnJhZ21lbnRBbHRlcm5hdGVEZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFMQkVETyxfVkFSWUlOR05BTUVfLEFsYmVkbyxfU0FNUExFUk5BTUVfLGFsYmVkbylcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0LF9TQU1QTEVSTkFNRV8sYmFzZVdlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9ESUZGVVNFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzLF9TQU1QTEVSTkFNRV8sYmFzZURpZmZ1c2VSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50LF9TQU1QTEVSTkFNRV8sYW1iaWVudClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHksX1NBTVBMRVJOQU1FXyxvcGFjaXR5KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlLF9TQU1QTEVSTkFNRV8sZW1pc3NpdmUpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXAsX1NBTVBMRVJOQU1FXyxsaWdodG1hcClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVElWSVRZLF9WQVJZSU5HTkFNRV8sUmVmbGVjdGl2aXR5LF9TQU1QTEVSTkFNRV8scmVmbGVjdGl2aXR5KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxNSUNST1NVUkZBQ0VNQVAsX1ZBUllJTkdOQU1FXyxNaWNyb1N1cmZhY2VTYW1wbGVyLF9TQU1QTEVSTkFNRV8sbWljcm9TdXJmYWNlKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxNRVRBTExJQ19SRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLE1ldGFsbGljUmVmbGVjdGFuY2UsX1NBTVBMRVJOQU1FXyxtZXRhbGxpY1JlZmxlY3RhbmNlKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLFJlZmxlY3RhbmNlLF9TQU1QTEVSTkFNRV8scmVmbGVjdGFuY2UpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFQ0FMLF9WQVJZSU5HTkFNRV8sRGVjYWwsX1NBTVBMRVJOQU1FXyxkZWNhbClcbiNpZmRlZiBDTEVBUkNPQVRcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXQsX1NBTVBMRVJOQU1FXyxjbGVhckNvYXQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnRBbHRlcm5hdGVEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLENsZWFyQ29hdFJvdWdobmVzcylcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUylcbnZhciBjbGVhckNvYXRSb3VnaG5lc3NTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgY2xlYXJDb2F0Um91Z2huZXNzU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9CVU1QLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0QnVtcCxfU0FNUExFUk5BTUVfLGNsZWFyQ29hdEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9USU5UX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRUaW50LF9TQU1QTEVSTkFNRV8sY2xlYXJDb2F0VGludClcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZSxfU0FNUExFUk5BTUVfLGlyaWRlc2NlbmNlKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlVGhpY2tuZXNzLF9TQU1QTEVSTkFNRV8saXJpZGVzY2VuY2VUaGlja25lc3MpXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sU2hlZW4sX1NBTVBMRVJOQU1FXyxzaGVlbilcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudEFsdGVybmF0ZURlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTaGVlblJvdWdobmVzcylcbiNpZiBkZWZpbmVkKFNIRUVOX1JPVUdITkVTUykgJiYgZGVmaW5lZChTSEVFTl9URVhUVVJFX1JPVUdITkVTUylcbnZhciBzaGVlblJvdWdobmVzc1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBzaGVlblJvdWdobmVzc1NhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU5JU09UUk9QSUNfVEVYVFVSRSxfVkFSWUlOR05BTUVfLEFuaXNvdHJvcHksX1NBTVBMRVJOQU1FXyxhbmlzb3Ryb3B5KVxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciByZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNpZmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2Vsc2VcbnZhciByZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjt2YXIgcmVmbGVjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvbkhpZ2hTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIFVTRUlSUkFESUFOQ0VNQVBcbnZhciBpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGlycmFkaWFuY2VTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNlbmRpZlxuI2Vsc2VcbnZhciByZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jaWZkZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbiNlbHNlXG52YXIgcmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZsZWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3ZhciByZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZsZWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIFVTRUlSUkFESUFOQ0VNQVBcbnZhciBpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGlycmFkaWFuY2VTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52YXJ5aW5nIHZQb3NpdGlvblVWVzogdmVjM2Y7XG4jZWxzZVxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZhcnlpbmcgdkRpcmVjdGlvblc6IHZlYzNmO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEVOVklST05NRU5UQlJERlxudmFyIGVudmlyb25tZW50QnJkZlNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBlbnZpcm9ubWVudEJyZGZTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBTVUJTVVJGQUNFXG4jaWZkZWYgU1NfUkVGUkFDVElPTlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05NQVBfM0RcbnZhciByZWZyYWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZnJhY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNpZmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2Vsc2VcbnZhciByZWZyYWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZnJhY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjt2YXIgcmVmcmFjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmcmFjdGlvbkhpZ2hTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPjtcbiNlbmRpZlxuI2Vsc2VcbnZhciByZWZyYWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZnJhY3Rpb25TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jaWZkZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbiNlbHNlXG52YXIgcmVmcmFjdGlvbkxvd1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZyYWN0aW9uTG93U2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3ZhciByZWZyYWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZyYWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFLF9WQVJZSU5HTkFNRV8sVGhpY2tuZXNzLF9TQU1QTEVSTkFNRV8sdGhpY2tuZXNzKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxSZWZyYWN0aW9uSW50ZW5zaXR5LF9TQU1QTEVSTkFNRV8scmVmcmFjdGlvbkludGVuc2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lJbnRlbnNpdHksX1NBTVBMRVJOQU1FXyx0cmFuc2x1Y2VuY3lJbnRlbnNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lDb2xvcixfU0FNUExFUk5BTUVfLHRyYW5zbHVjZW5jeUNvbG9yKVxuI2VuZGlmXG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbnZhciBpY2RmU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGljZGZTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gdkFsYmVkb0luZm9zOiB2ZWMyZjt1bmlmb3JtIHZCYXNlV2VpZ2h0SW5mb3M6IHZlYzJmO3VuaWZvcm0gdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkFtYmllbnRJbmZvczogdmVjNGY7dW5pZm9ybSB2T3BhY2l0eUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZFbWlzc2l2ZUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZMaWdodG1hcEluZm9zOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aXZpdHlJbmZvczogdmVjM2Y7dW5pZm9ybSB2TWljcm9TdXJmYWNlU2FtcGxlckluZm9zOiB2ZWMyZjt1bmlmb3JtIHZCdW1wSW5mb3M6IHZlYzNmO3VuaWZvcm0gYWxiZWRvTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYmFzZVdlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGJhc2VEaWZmdXNlUm91Z2huZXNzTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYW1iaWVudE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIG9wYWNpdHlNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBlbWlzc2l2ZU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGxpZ2h0bWFwTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gcmVmbGVjdGl2aXR5TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gbWljcm9TdXJmYWNlU2FtcGxlck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGJ1bXBNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2VGFuZ2VudFNwYWNlUGFyYW1zOiB2ZWMyZjt1bmlmb3JtIHZBbGJlZG9Db2xvcjogdmVjNGY7dW5pZm9ybSBiYXNlV2VpZ2h0OiBmMzI7dW5pZm9ybSBiYXNlRGlmZnVzZVJvdWdobmVzczogZjMyO3VuaWZvcm0gdkxpZ2h0aW5nSW50ZW5zaXR5OiB2ZWM0Zjt1bmlmb3JtIHBvaW50U2l6ZTogZjMyO3VuaWZvcm0gdlJlZmxlY3Rpdml0eUNvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZFbWlzc2l2ZUNvbG9yOiB2ZWMzZjt1bmlmb3JtIHZBbWJpZW50Q29sb3I6IHZlYzNmO3VuaWZvcm0gdkRlYnVnTW9kZTogdmVjMmY7dW5pZm9ybSB2TWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM6IHZlYzRmO3VuaWZvcm0gdk1ldGFsbGljUmVmbGVjdGFuY2VJbmZvczogdmVjMmY7dW5pZm9ybSBtZXRhbGxpY1JlZmxlY3RhbmNlTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlJlZmxlY3RhbmNlSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGFuY2VNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBjYW1lcmFJbmZvOiB2ZWM0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblNpemU6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb246IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Db2xvcjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDAwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMV8xOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMTA6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwxMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDIwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMjE6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwyMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWDogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFhfWlo6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlZX1paOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFk6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlaOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWDogdmVjM2Y7XG4jZGVmaW5lIEFERElUSU9OQUxfVUJPX0RFQ0xBUkFUSU9OXG4jaW5jbHVkZTxzY2VuZVVib0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bWVzaFVib0RlY2xhcmF0aW9uPlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclVib0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2FtcGxlckZyYWdtZW50QWx0ZXJuYXRlRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgX0RFRklORU5BTUVfXG4jaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTFcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWMVxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTJcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWMlxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTNcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWM1xuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTRcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWNFxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTVcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWNVxuI2VsaWYgX0RFRklORU5BTUVfRElSRUNUVVY9PTZcbiNkZWZpbmUgdl9WQVJZSU5HTkFNRV9VViB2TWFpblVWNlxuI2Vsc2VcbnZhcnlpbmcgdl9WQVJZSU5HTkFNRV9VVjogdmVjMmY7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNhbXBsZXJGcmFnbWVudEFsdGVybmF0ZURlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29pdERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BiclVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50RXh0cmFEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc3ViU3VyZmFjZVNjYXR0ZXJpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1wb3J0YW5jZVNhbXBsaW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickhlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hhcm1vbmljc0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ1NldHVwRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickRpcmVjdExpZ2h0aW5nRmFsbG9mZkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCUkRGRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hkckZpbHRlcmluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJJQkxGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcEZyYWdtZW50TWFpbkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcmVmbGVjdGlvbkZ1bmN0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQWxiZWRvT3BhY2l0eVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1JlZmxlY3Rpdml0eVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0FtYmllbnRPY2NsdXNpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tBbHBoYUZyZXNuZWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tBbmlzb3Ryb3BpY1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1JlZmxlY3Rpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tTaGVlblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0NsZWFyY29hdFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0lyaWRlc2NlbmNlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrU3ViU3VyZmFjZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja05vcm1hbEdlb21ldHJpY1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tOb3JtYWxGaW5hbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3NcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tMaWdodG1hcEluaXRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tHZW9tZXRyeUluZm9cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0YW5jZTBcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0YW5jZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0RpcmVjdExpZ2h0aW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tGaW5hbExpdENvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50c1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0ZpbmFsQ29sb3JDb21wb3NpdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrSW1hZ2VQcm9jZXNzaW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUHJlUGFzc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vaXRGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEZWJ1Z1wiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNkZWZpbmUgUEJSX0ZSQUdNRU5UX1NIQURFUlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfQkVHSU5cbiNpbmNsdWRlPHByZVBhc3NEZWNsYXJhdGlvbj5bU0NFTkVfTVJUX0NPVU5UXVxuI2luY2x1ZGU8b2l0RGVjbGFyYXRpb24+XG4jaWZuZGVmIEZST01MSU5FQVJTUEFDRVxuI2RlZmluZSBGUk9NTElORUFSU1BBQ0VcbiNlbmRpZlxuI2luY2x1ZGU8cGJyVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxwYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsaWdodFVib0RlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxwYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPHN1YlN1cmZhY2VTY2F0dGVyaW5nRnVuY3Rpb25zPlxuI2luY2x1ZGU8aW1wb3J0YW5jZVNhbXBsaW5nPlxuI2luY2x1ZGU8cGJySGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zPlxuI2luY2x1ZGU8c2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zPlxuI2luY2x1ZGU8aGFybW9uaWNzRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyRGlyZWN0TGlnaHRpbmdTZXR1cEZ1bmN0aW9ucz5cbiNpbmNsdWRlPHBickRpcmVjdExpZ2h0aW5nRmFsbG9mZkZ1bmN0aW9ucz5cbiNpbmNsdWRlPHBickJSREZGdW5jdGlvbnM+XG4jaW5jbHVkZTxoZHJGaWx0ZXJpbmdGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJEaXJlY3RMaWdodGluZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHBicklCTEZ1bmN0aW9ucz5cbiNpbmNsdWRlPGJ1bXBGcmFnbWVudE1haW5GdW5jdGlvbnM+XG4jaW5jbHVkZTxidW1wRnJhZ21lbnRGdW5jdGlvbnM+XG4jaWZkZWYgUkVGTEVDVElPTlxuI2luY2x1ZGU8cmVmbGVjdGlvbkZ1bmN0aW9uPlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xuI2luY2x1ZGU8cGJyQmxvY2tBbGJlZG9PcGFjaXR5PlxuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0aXZpdHk+XG4jaW5jbHVkZTxwYnJCbG9ja0FtYmllbnRPY2NsdXNpb24+XG4jaW5jbHVkZTxwYnJCbG9ja0FscGhhRnJlc25lbD5cbiNpbmNsdWRlPHBickJsb2NrQW5pc290cm9waWM+XG4jaW5jbHVkZTxwYnJCbG9ja1JlZmxlY3Rpb24+XG4jaW5jbHVkZTxwYnJCbG9ja1NoZWVuPlxuI2luY2x1ZGU8cGJyQmxvY2tDbGVhcmNvYXQ+XG4jaW5jbHVkZTxwYnJCbG9ja0lyaWRlc2NlbmNlPlxuI2luY2x1ZGU8cGJyQmxvY2tTdWJTdXJmYWNlPlxuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbiNpbmNsdWRlPHBickJsb2NrTm9ybWFsR2VvbWV0cmljPlxuI2luY2x1ZGU8YnVtcEZyYWdtZW50PlxuI2luY2x1ZGU8cGJyQmxvY2tOb3JtYWxGaW5hbD5cbnZhciBhbGJlZG9PcGFjaXR5T3V0OiBhbGJlZG9PcGFjaXR5T3V0UGFyYW1zO1xuI2lmZGVmIEFMQkVET1xudmFyIGFsYmVkb1RleHR1cmU6IHZlYzRmPXRleHR1cmVTYW1wbGUoYWxiZWRvU2FtcGxlcixhbGJlZG9TYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QWxiZWRvVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9XRUlHSFRcbnZhciBiYXNlV2VpZ2h0VGV4dHVyZTogdmVjNGY9dGV4dHVyZVNhbXBsZShiYXNlV2VpZ2h0U2FtcGxlcixiYXNlV2VpZ2h0U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJhc2VXZWlnaHRVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZXG52YXIgb3BhY2l0eU1hcDogdmVjNGY9dGV4dHVyZVNhbXBsZShvcGFjaXR5U2FtcGxlcixvcGFjaXR5U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudk9wYWNpdHlVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBERUNBTFxudmFyIGRlY2FsQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUoZGVjYWxTYW1wbGVyLGRlY2FsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkRlY2FsVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG5hbGJlZG9PcGFjaXR5T3V0PWFsYmVkb09wYWNpdHlCbG9jayhcbnVuaWZvcm1zLnZBbGJlZG9Db2xvclxuI2lmZGVmIEFMQkVET1xuLGFsYmVkb1RleHR1cmVcbix1bmlmb3Jtcy52QWxiZWRvSW5mb3NcbiNlbmRpZlxuLHVuaWZvcm1zLmJhc2VXZWlnaHRcbiNpZmRlZiBCQVNFX1dFSUdIVFxuLGJhc2VXZWlnaHRUZXh0dXJlXG4sdW5pZm9ybXMudkJhc2VXZWlnaHRJbmZvc1xuI2VuZGlmXG4jaWZkZWYgT1BBQ0lUWVxuLG9wYWNpdHlNYXBcbix1bmlmb3Jtcy52T3BhY2l0eUluZm9zXG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbixkZXRhaWxDb2xvclxuLHVuaWZvcm1zLnZEZXRhaWxJbmZvc1xuI2VuZGlmXG4jaWZkZWYgREVDQUxcbixkZWNhbENvbG9yXG4sdW5pZm9ybXMudkRlY2FsSW5mb3NcbiNlbmRpZlxuKTt2YXIgc3VyZmFjZUFsYmVkbzogdmVjM2Y9YWxiZWRvT3BhY2l0eU91dC5zdXJmYWNlQWxiZWRvO3ZhciBhbHBoYTogZjMyPWFsYmVkb09wYWNpdHlPdXQuYWxwaGE7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfQUxQSEFcbiNpbmNsdWRlPGRlcHRoUHJlUGFzcz5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9MSUdIVFNcbnZhciBhb091dDogYW1iaWVudE9jY2x1c2lvbk91dFBhcmFtcztcbiNpZmRlZiBBTUJJRU5UXG52YXIgYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwOiB2ZWMzZj10ZXh0dXJlU2FtcGxlKGFtYmllbnRTYW1wbGVyLGFtYmllbnRTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QW1iaWVudFVWK3V2T2Zmc2V0KS5yZ2I7XG4jZW5kaWZcbmFvT3V0PWFtYmllbnRPY2NsdXNpb25CbG9jayhcbiNpZmRlZiBBTUJJRU5UXG5hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAsXG51bmlmb3Jtcy52QW1iaWVudEluZm9zXG4jZW5kaWZcbik7XG4jaW5jbHVkZTxwYnJCbG9ja0xpZ2h0bWFwSW5pdD5cbiNpZmRlZiBVTkxJVFxudmFyIGRpZmZ1c2VCYXNlOiB2ZWMzZj0gdmVjM2YoMS4sMS4sMS4pO1xuI2Vsc2VcbnZhciBiYXNlQ29sb3I6IHZlYzNmPXN1cmZhY2VBbGJlZG87dmFyIHJlZmxlY3Rpdml0eU91dDogcmVmbGVjdGl2aXR5T3V0UGFyYW1zO1xuI2lmIGRlZmluZWQoUkVGTEVDVElWSVRZKVxudmFyIHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXA6IHZlYzRmPXRleHR1cmVTYW1wbGUocmVmbGVjdGl2aXR5U2FtcGxlcixyZWZsZWN0aXZpdHlTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52UmVmbGVjdGl2aXR5VVYrdXZPZmZzZXQpO3ZhciBiYXNlUmVmbGVjdGl2aXR5OiB2ZWM0Zj1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwO1xuI2lmbmRlZiBNRVRBTExJQ1dPUktGTE9XXG4jaWZkZWYgUkVGTEVDVElWSVRZX0dBTU1BXG5zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwPXRvTGluZWFyU3BhY2VWZWM0KHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXApO1xuI2VuZGlmXG5zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwPXZlYzRmKHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAucmdiKnVuaWZvcm1zLnZSZWZsZWN0aXZpdHlJbmZvcy55LHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAuYSk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoTUlDUk9TVVJGQUNFTUFQKVxudmFyIG1pY3JvU3VyZmFjZVRleGVsOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKG1pY3JvU3VyZmFjZVNhbXBsZXIsbWljcm9TdXJmYWNlU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudk1pY3JvU3VyZmFjZVNhbXBsZXJVVit1dk9mZnNldCkqdW5pZm9ybXMudk1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvcy55O1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9ESUZGVVNFX1JPVUdITkVTU1xudmFyIGJhc2VEaWZmdXNlUm91Z2huZXNzVGV4dHVyZTogZjMyPXRleHR1cmVTYW1wbGUoYmFzZURpZmZ1c2VSb3VnaG5lc3NTYW1wbGVyLGJhc2VEaWZmdXNlUm91Z2huZXNzU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJhc2VEaWZmdXNlUm91Z2huZXNzVVYrdXZPZmZzZXQpLng7XG4jZW5kaWZcbiNpZmRlZiBNRVRBTExJQ1dPUktGTE9XXG52YXIgbWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM6IHZlYzRmPXVuaWZvcm1zLnZNZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycztcbiNpZmRlZiBSRUZMRUNUQU5DRVxudmFyIHJlZmxlY3RhbmNlRmFjdG9yc01hcDogdmVjNGY9dGV4dHVyZVNhbXBsZShyZWZsZWN0YW5jZVNhbXBsZXIscmVmbGVjdGFuY2VTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52UmVmbGVjdGFuY2VVVit1dk9mZnNldCk7XG4jaWZkZWYgUkVGTEVDVEFOQ0VfR0FNTUFcbnJlZmxlY3RhbmNlRmFjdG9yc01hcD10b0xpbmVhclNwYWNlVmVjNChyZWZsZWN0YW5jZUZhY3RvcnNNYXApO1xuI2VuZGlmXG5tZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycz12ZWM0ZihtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycy5yZ2IqcmVmbGVjdGFuY2VGYWN0b3JzTWFwLnJnYixtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycy5hKTtcbiNlbmRpZlxuI2lmZGVmIE1FVEFMTElDX1JFRkxFQ1RBTkNFXG52YXIgbWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnNNYXA6IHZlYzRmPXRleHR1cmVTYW1wbGUobWV0YWxsaWNSZWZsZWN0YW5jZVNhbXBsZXIsbWV0YWxsaWNSZWZsZWN0YW5jZVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZNZXRhbGxpY1JlZmxlY3RhbmNlVVYrdXZPZmZzZXQpO1xuI2lmZGVmIE1FVEFMTElDX1JFRkxFQ1RBTkNFX0dBTU1BXG5tZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yc01hcD10b0xpbmVhclNwYWNlVmVjNChtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yc01hcCk7XG4jZW5kaWZcbiNpZm5kZWYgTUVUQUxMSUNfUkVGTEVDVEFOQ0VfVVNFX0FMUEhBX09OTFlcbm1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzPXZlYzRmKG1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzLnJnYiptZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yc01hcC5yZ2IsbWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnMuYSk7XG4jZW5kaWZcbm1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzLmEqPW1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzTWFwLmE7XG4jZW5kaWZcbiNlbmRpZlxucmVmbGVjdGl2aXR5T3V0PXJlZmxlY3Rpdml0eUJsb2NrKFxudW5pZm9ybXMudlJlZmxlY3Rpdml0eUNvbG9yXG4jaWZkZWYgTUVUQUxMSUNXT1JLRkxPV1xuLHN1cmZhY2VBbGJlZG9cbixtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yc1xuI2VuZGlmXG4sdW5pZm9ybXMuYmFzZURpZmZ1c2VSb3VnaG5lc3NcbiNpZmRlZiBCQVNFX0RJRkZVU0VfUk9VR0hORVNTXG4sYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlXG4sdW5pZm9ybXMudkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3NcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJVklUWVxuLHVuaWZvcm1zLnZSZWZsZWN0aXZpdHlJbmZvc1xuLHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXBcbiNlbmRpZlxuI2lmIGRlZmluZWQoTUVUQUxMSUNXT1JLRkxPVykgJiYgZGVmaW5lZChSRUZMRUNUSVZJVFkpICYmIGRlZmluZWQoQU9TVE9SRUlOTUVUQUxNQVBSRUQpXG4sYW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yXG4jZW5kaWZcbiNpZmRlZiBNSUNST1NVUkZBQ0VNQVBcbixtaWNyb1N1cmZhY2VUZXhlbFxuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG4sZGV0YWlsQ29sb3Jcbix1bmlmb3Jtcy52RGV0YWlsSW5mb3NcbiNlbmRpZlxuKTt2YXIgbWljcm9TdXJmYWNlOiBmMzI9cmVmbGVjdGl2aXR5T3V0Lm1pY3JvU3VyZmFjZTt2YXIgcm91Z2huZXNzOiBmMzI9cmVmbGVjdGl2aXR5T3V0LnJvdWdobmVzczt2YXIgZGlmZnVzZVJvdWdobmVzczogZjMyPXJlZmxlY3Rpdml0eU91dC5kaWZmdXNlUm91Z2huZXNzO1xuI2lmZGVmIE1FVEFMTElDV09SS0ZMT1dcbnN1cmZhY2VBbGJlZG89cmVmbGVjdGl2aXR5T3V0LnN1cmZhY2VBbGJlZG87XG4jZW5kaWZcbiNpZiBkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiBkZWZpbmVkKEFPU1RPUkVJTk1FVEFMTUFQUkVEKVxuYW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yPXJlZmxlY3Rpdml0eU91dC5hbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jZW5kaWZcbiNpZmRlZiBBTFBIQUZSRVNORUxcbiNpZiBkZWZpbmVkKEFMUEhBVEVTVCkgfHwgZGVmaW5lZChBTFBIQUJMRU5EKVxudmFyIGFscGhhRnJlc25lbE91dDogYWxwaGFGcmVzbmVsT3V0UGFyYW1zO2FscGhhRnJlc25lbE91dD1hbHBoYUZyZXNuZWxCbG9jayhcbm5vcm1hbFcsXG52aWV3RGlyZWN0aW9uVyxcbmFscGhhLFxubWljcm9TdXJmYWNlXG4pO2FscGhhPWFscGhhRnJlc25lbE91dC5hbHBoYTtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxwYnJCbG9ja0dlb21ldHJ5SW5mbz5cbiNpZmRlZiBBTklTT1RST1BJQ1xudmFyIGFuaXNvdHJvcGljT3V0OiBhbmlzb3Ryb3BpY091dFBhcmFtcztcbiNpZmRlZiBBTklTT1RST1BJQ19URVhUVVJFXG52YXIgYW5pc290cm9weU1hcERhdGE6IHZlYzNmPXRleHR1cmVTYW1wbGUoYW5pc290cm9weVNhbXBsZXIsYW5pc290cm9weVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZBbmlzb3Ryb3B5VVYrdXZPZmZzZXQpLnJnYip1bmlmb3Jtcy52QW5pc290cm9weUluZm9zLnk7XG4jZW5kaWZcbmFuaXNvdHJvcGljT3V0PWFuaXNvdHJvcGljQmxvY2soXG51bmlmb3Jtcy52QW5pc290cm9weSxcbnJvdWdobmVzcyxcbiNpZmRlZiBBTklTT1RST1BJQ19URVhUVVJFXG5hbmlzb3Ryb3B5TWFwRGF0YSxcbiNlbmRpZlxuVEJOLFxubm9ybWFsVyxcbnZpZXdEaXJlY3Rpb25XXG4pO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxudmFyIHJlZmxlY3Rpb25PdXQ6IHJlZmxlY3Rpb25PdXRQYXJhbXM7XG4jaWZuZGVmIFVTRV9DVVNUT01fUkVGTEVDVElPTlxucmVmbGVjdGlvbk91dD1yZWZsZWN0aW9uQmxvY2soXG5mcmFnbWVudElucHV0cy52UG9zaXRpb25XXG4sbm9ybWFsV1xuLGFscGhhR1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3Ncbix1bmlmb3Jtcy52UmVmbGVjdGlvbkluZm9zXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25Db2xvclxuI2lmZGVmIEFOSVNPVFJPUElDXG4sYW5pc290cm9waWNPdXRcbiNlbmRpZlxuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuLE5kb3RWVW5jbGFtcGVkXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbixyb3VnaG5lc3NcbiNlbmRpZlxuLHJlZmxlY3Rpb25TYW1wbGVyXG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyXG4jaWYgZGVmaW5lZChOT1JNQUwpICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG4sZnJhZ21lbnRJbnB1dHMudkVudmlyb25tZW50SXJyYWRpYW5jZVxuI2VuZGlmXG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4sdW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeFxuI2VuZGlmXG4jaWZkZWYgVVNFSVJSQURJQU5DRU1BUFxuLGlycmFkaWFuY2VTYW1wbGVyXG4saXJyYWRpYW5jZVNhbXBsZXJTYW1wbGVyXG4jaWZkZWYgVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvblxuI2VuZGlmXG4jZW5kaWZcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZsZWN0aW9uTG93U2FtcGxlclxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyU2FtcGxlclxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclNhbXBsZXJcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saWNkZlNhbXBsZXJcbixpY2RmU2FtcGxlclNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4sdmlld0RpcmVjdGlvbldcbixkaWZmdXNlUm91Z2huZXNzXG4sc3VyZmFjZUFsYmVkb1xuKTtcbiNlbHNlXG4jZGVmaW5lIENVU1RPTV9SRUZMRUNUSU9OXG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0YW5jZTA+XG4jaWZkZWYgU0hFRU5cbnZhciBzaGVlbk91dDogc2hlZW5PdXRQYXJhbXM7XG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxudmFyIHNoZWVuTWFwRGF0YTogdmVjNGY9dGV4dHVyZVNhbXBsZShzaGVlblNhbXBsZXIsc2hlZW5TYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52U2hlZW5VVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNIRUVOX1JPVUdITkVTUykgJiYgZGVmaW5lZChTSEVFTl9URVhUVVJFX1JPVUdITkVTUykgJiYgIWRlZmluZWQoU0hFRU5fVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxudmFyIHNoZWVuTWFwUm91Z2huZXNzRGF0YTogdmVjNGY9dGV4dHVyZVNhbXBsZShzaGVlblJvdWdobmVzc1NhbXBsZXIsc2hlZW5Sb3VnaG5lc3NTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52U2hlZW5Sb3VnaG5lc3NVVit1dk9mZnNldCkqdW5pZm9ybXMudlNoZWVuSW5mb3MudztcbiNlbmRpZlxuc2hlZW5PdXQ9c2hlZW5CbG9jayhcbnVuaWZvcm1zLnZTaGVlbkNvbG9yXG4jaWZkZWYgU0hFRU5fUk9VR0hORVNTXG4sdW5pZm9ybXMudlNoZWVuUm91Z2huZXNzXG4jaWYgZGVmaW5lZChTSEVFTl9URVhUVVJFX1JPVUdITkVTUykgJiYgIWRlZmluZWQoU0hFRU5fVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxuLHNoZWVuTWFwUm91Z2huZXNzRGF0YVxuI2VuZGlmXG4jZW5kaWZcbixyb3VnaG5lc3NcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG4sc2hlZW5NYXBEYXRhXG4sdW5pZm9ybXMudlNoZWVuSW5mb3MueVxuI2VuZGlmXG4scmVmbGVjdGFuY2VGMFxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG4sYmFzZUNvbG9yXG4sc3VyZmFjZUFsYmVkb1xuI2VuZGlmXG4jaWZkZWYgRU5WSVJPTk1FTlRCUkRGXG4sTmRvdFZcbixlbnZpcm9ubWVudEJyZGZcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG4sQUFSb3VnaG5lc3NGYWN0b3JzXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3Ncbix1bmlmb3Jtcy52UmVmbGVjdGlvbkNvbG9yXG4sdW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5XG4scmVmbGVjdGlvblNhbXBsZXJcbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXJcbixyZWZsZWN0aW9uT3V0LnJlZmxlY3Rpb25Db29yZHNcbixOZG90VlVuY2xhbXBlZFxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyXG4scmVmbGVjdGlvbkxvd1NhbXBsZXJTYW1wbGVyXG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyXG4scmVmbGVjdGlvbkhpZ2hTYW1wbGVyU2FtcGxlclxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWCkgJiYgZGVmaW5lZChSQURJQU5DRU9DQ0xVU0lPTilcbixzZW9cbiNlbmRpZlxuI2lmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuLGVob1xuI2VuZGlmXG4jZW5kaWZcbik7XG4jaWZkZWYgU0hFRU5fTElOS1dJVEhBTEJFRE9cbnN1cmZhY2VBbGJlZG89c2hlZW5PdXQuc3VyZmFjZUFsYmVkbztcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbnZhciBjbGVhckNvYXRNYXBEYXRhOiB2ZWMyZj10ZXh0dXJlU2FtcGxlKGNsZWFyQ29hdFNhbXBsZXIsY2xlYXJDb2F0U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkNsZWFyQ29hdFVWK3V2T2Zmc2V0KS5yZyp1bmlmb3Jtcy52Q2xlYXJDb2F0SW5mb3MueTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgSVJJREVTQ0VOQ0VcbnZhciBpcmlkZXNjZW5jZU91dDogaXJpZGVzY2VuY2VPdXRQYXJhbXM7XG4jaWZkZWYgSVJJREVTQ0VOQ0VfVEVYVFVSRVxudmFyIGlyaWRlc2NlbmNlTWFwRGF0YTogdmVjMmY9dGV4dHVyZVNhbXBsZShpcmlkZXNjZW5jZVNhbXBsZXIsaXJpZGVzY2VuY2VTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52SXJpZGVzY2VuY2VVVit1dk9mZnNldCkucmcqdW5pZm9ybXMudklyaWRlc2NlbmNlSW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFXG52YXIgaXJpZGVzY2VuY2VUaGlja25lc3NNYXBEYXRhOiB2ZWMyZj10ZXh0dXJlU2FtcGxlKGlyaWRlc2NlbmNlVGhpY2tuZXNzU2FtcGxlcixpcmlkZXNjZW5jZVRoaWNrbmVzc1NhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZJcmlkZXNjZW5jZVRoaWNrbmVzc1VWK3V2T2Zmc2V0KS5yZyp1bmlmb3Jtcy52SXJpZGVzY2VuY2VJbmZvcy53O1xuI2VuZGlmXG5pcmlkZXNjZW5jZU91dD1pcmlkZXNjZW5jZUJsb2NrKFxudW5pZm9ybXMudklyaWRlc2NlbmNlUGFyYW1zXG4sTmRvdFZcbixzcGVjdWxhckVudmlyb25tZW50UjBcbiNpZmRlZiBJUklERVNDRU5DRV9URVhUVVJFXG4saXJpZGVzY2VuY2VNYXBEYXRhXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRVxuLGlyaWRlc2NlbmNlVGhpY2tuZXNzTWFwRGF0YVxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4sTmRvdFZVbmNsYW1wZWRcbix1bmlmb3Jtcy52Q2xlYXJDb2F0UGFyYW1zXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbixjbGVhckNvYXRNYXBEYXRhXG4jZW5kaWZcbiNlbmRpZlxuKTt2YXIgaXJpZGVzY2VuY2VJbnRlbnNpdHk6IGYzMj1pcmlkZXNjZW5jZU91dC5pcmlkZXNjZW5jZUludGVuc2l0eTtzcGVjdWxhckVudmlyb25tZW50UjA9aXJpZGVzY2VuY2VPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwO1xuI2VuZGlmXG52YXIgY2xlYXJjb2F0T3V0OiBjbGVhcmNvYXRPdXRQYXJhbXM7XG4jaWZkZWYgQ0xFQVJDT0FUXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MpICYmICFkZWZpbmVkKENMRUFSQ09BVF9VU0VfUk9VR0hORVNTX0ZST01fTUFJTlRFWFRVUkUpXG52YXIgY2xlYXJDb2F0TWFwUm91Z2huZXNzRGF0YTogdmVjNGY9dGV4dHVyZVNhbXBsZShjbGVhckNvYXRSb3VnaG5lc3NTYW1wbGVyLGNsZWFyQ29hdFJvdWdobmVzc1NhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZDbGVhckNvYXRSb3VnaG5lc3NVVit1dk9mZnNldCkqdW5pZm9ybXMudkNsZWFyQ29hdEluZm9zLnc7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9USU5UX1RFWFRVUkUpXG52YXIgY2xlYXJDb2F0VGludE1hcERhdGE6IHZlYzRmPXRleHR1cmVTYW1wbGUoY2xlYXJDb2F0VGludFNhbXBsZXIsY2xlYXJDb2F0VGludFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZDbGVhckNvYXRUaW50VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX0JVTVBcbnZhciBjbGVhckNvYXRCdW1wTWFwRGF0YTogdmVjNGY9dGV4dHVyZVNhbXBsZShjbGVhckNvYXRCdW1wU2FtcGxlcixjbGVhckNvYXRCdW1wU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkNsZWFyQ29hdEJ1bXBVVit1dk9mZnNldCk7XG4jZW5kaWZcbmNsZWFyY29hdE91dD1jbGVhcmNvYXRCbG9jayhcbmZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbldcbixnZW9tZXRyaWNOb3JtYWxXXG4sdmlld0RpcmVjdGlvbldcbix1bmlmb3Jtcy52Q2xlYXJDb2F0UGFyYW1zXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MpICYmICFkZWZpbmVkKENMRUFSQ09BVF9VU0VfUk9VR0hORVNTX0ZST01fTUFJTlRFWFRVUkUpXG4sY2xlYXJDb2F0TWFwUm91Z2huZXNzRGF0YVxuI2VuZGlmXG4sc3BlY3VsYXJFbnZpcm9ubWVudFIwXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbixjbGVhckNvYXRNYXBEYXRhXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxuLHVuaWZvcm1zLnZDbGVhckNvYXRUaW50UGFyYW1zXG4sdW5pZm9ybXMuY2xlYXJDb2F0Q29sb3JBdERpc3RhbmNlXG4sdW5pZm9ybXMudkNsZWFyQ29hdFJlZnJhY3Rpb25QYXJhbXNcbiNpZmRlZiBDTEVBUkNPQVRfVElOVF9URVhUVVJFXG4sY2xlYXJDb2F0VGludE1hcERhdGFcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX0JVTVBcbix1bmlmb3Jtcy52Q2xlYXJDb2F0QnVtcEluZm9zXG4sY2xlYXJDb2F0QnVtcE1hcERhdGFcbixmcmFnbWVudElucHV0cy52Q2xlYXJDb2F0QnVtcFVWXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbixtYXQzeDM8ZjMyPihpbnB1dC52VEJOMCxpbnB1dC52VEJOMSxpbnB1dC52VEJOMilcbiNlbHNlXG4sdW5pZm9ybXMudkNsZWFyQ29hdFRhbmdlbnRTcGFjZVBhcmFtc1xuI2VuZGlmXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG4sdW5pZm9ybXMubm9ybWFsTWF0cml4XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoRk9SQ0VOT1JNQUxGT1JXQVJEKSAmJiBkZWZpbmVkKE5PUk1BTClcbixmYWNlTm9ybWFsXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3Ncbix1bmlmb3Jtcy52UmVmbGVjdGlvbkNvbG9yXG4sdW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5XG4scmVmbGVjdGlvblNhbXBsZXJcbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZsZWN0aW9uTG93U2FtcGxlclxuLHJlZmxlY3Rpb25Mb3dTYW1wbGVyU2FtcGxlclxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclxuLHJlZmxlY3Rpb25IaWdoU2FtcGxlclNhbXBsZXJcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKFRXT1NJREVETElHSFRJTkcpXG4sc2VsZWN0KC0xLiwxLixmcmFnbWVudElucHV0cy5mcm9udEZhY2luZylcbiNlbmRpZlxuKTtcbiNlbHNlXG5jbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwPXNwZWN1bGFyRW52aXJvbm1lbnRSMDtcbiNlbmRpZlxuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0YW5jZT5cbnZhciBzdWJTdXJmYWNlT3V0OiBzdWJTdXJmYWNlT3V0UGFyYW1zO1xuI2lmZGVmIFNVQlNVUkZBQ0VcbiNpZmRlZiBTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkVcbnZhciB0aGlja25lc3NNYXA6IHZlYzRmPXRleHR1cmVTYW1wbGUodGhpY2tuZXNzU2FtcGxlcix0aGlja25lc3NTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52VGhpY2tuZXNzVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFXG52YXIgcmVmcmFjdGlvbkludGVuc2l0eU1hcDogdmVjNGY9dGV4dHVyZVNhbXBsZShyZWZyYWN0aW9uSW50ZW5zaXR5U2FtcGxlcixyZWZyYWN0aW9uSW50ZW5zaXR5U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudlJlZnJhY3Rpb25JbnRlbnNpdHlVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lJTlRFTlNJVFlfVEVYVFVSRVxudmFyIHRyYW5zbHVjZW5jeUludGVuc2l0eU1hcDogdmVjNGY9dGV4dHVyZVNhbXBsZSh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlTYW1wbGVyLHRyYW5zbHVjZW5jeUludGVuc2l0eVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZUcmFuc2x1Y2VuY3lJbnRlbnNpdHlVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFXG52YXIgdHJhbnNsdWNlbmN5Q29sb3JNYXA6IHZlYzRmPXRleHR1cmVTYW1wbGUodHJhbnNsdWNlbmN5Q29sb3JTYW1wbGVyLHRyYW5zbHVjZW5jeUNvbG9yU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudlRyYW5zbHVjZW5jeUNvbG9yVVYrdXZPZmZzZXQpO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkVfR0FNTUFcbnRyYW5zbHVjZW5jeUNvbG9yTWFwPXRvTGluZWFyU3BhY2VWZWM0KHRyYW5zbHVjZW5jeUNvbG9yTWFwKTtcbiNlbmRpZlxuI2VuZGlmXG5zdWJTdXJmYWNlT3V0PXN1YlN1cmZhY2VCbG9jayhcbnVuaWZvcm1zLnZTdWJTdXJmYWNlSW50ZW5zaXR5XG4sdW5pZm9ybXMudlRoaWNrbmVzc1BhcmFtXG4sdW5pZm9ybXMudlRpbnRDb2xvclxuLG5vcm1hbFdcbiNpZmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxuLHZlYzNmKG1heChjb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZS5yLG1heChjb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZS5nLGNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlLmIpKSlcbiNlbHNlXG4sYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZVxuI2VuZGlmXG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG4sdGhpY2tuZXNzTWFwXG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkVcbixyZWZyYWN0aW9uSW50ZW5zaXR5TWFwXG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lJTlRFTlNJVFlfVEVYVFVSRVxuLHRyYW5zbHVjZW5jeUludGVuc2l0eU1hcFxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuLHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXhcbiNpZmRlZiBVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUFxuI2lmICFkZWZpbmVkKE5PUk1BTCkgfHwgIWRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG4scmVmbGVjdGlvbk91dC5pcnJhZGlhbmNlVmVjdG9yXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbixyZWZsZWN0aW9uU2FtcGxlclxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlclxuLHVuaWZvcm1zLnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saWNkZlNhbXBsZXJcbixpY2RmU2FtcGxlclNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4saXJyYWRpYW5jZVNhbXBsZXJcbixpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pIHx8IGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZKVxuLHN1cmZhY2VBbGJlZG9cbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbixmcmFnbWVudElucHV0cy52UG9zaXRpb25XXG4sdmlld0RpcmVjdGlvbldcbixzY2VuZS52aWV3XG4sdW5pZm9ybXMudlJlZnJhY3Rpb25JbmZvc1xuLHVuaWZvcm1zLnJlZnJhY3Rpb25NYXRyaXhcbix1bmlmb3Jtcy52UmVmcmFjdGlvbk1pY3Jvc3VyZmFjZUluZm9zXG4sdW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5XG4jaWZkZWYgU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWVxuLGFscGhhXG4jZW5kaWZcbiNpZmRlZiBTU19MT0RJTlJFRlJBQ1RJT05BTFBIQVxuLE5kb3RWVW5jbGFtcGVkXG4jZW5kaWZcbiNpZmRlZiBTU19MSU5FQVJTUEVDVUxBUlJFRlJBQ1RJT05cbixyb3VnaG5lc3NcbiNlbmRpZlxuLGFscGhhR1xuLHJlZnJhY3Rpb25TYW1wbGVyXG4scmVmcmFjdGlvblNhbXBsZXJTYW1wbGVyXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4scmVmcmFjdGlvbkxvd1NhbXBsZXJcbixyZWZyYWN0aW9uTG93U2FtcGxlclNhbXBsZXJcbixyZWZyYWN0aW9uSGlnaFNhbXBsZXJcbixyZWZyYWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0XG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix1bmlmb3Jtcy52UmVmcmFjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuI2lmZGVmIFNTX1VTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG4sdW5pZm9ybXMudlJlZnJhY3Rpb25Qb3NpdGlvblxuLHVuaWZvcm1zLnZSZWZyYWN0aW9uU2l6ZVxuI2VuZGlmXG4jaWZkZWYgU1NfRElTUEVSU0lPTlxuLHVuaWZvcm1zLmRpc3BlcnNpb25cbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG4sdW5pZm9ybXMudkRpZmZ1c2lvbkRpc3RhbmNlXG4sdW5pZm9ybXMudlRyYW5zbHVjZW5jeUNvbG9yXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRVxuLHRyYW5zbHVjZW5jeUNvbG9yTWFwXG4jZW5kaWZcbiNlbmRpZlxuKTtcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG5zdXJmYWNlQWxiZWRvPXN1YlN1cmZhY2VPdXQuc3VyZmFjZUFsYmVkbztcbiNpZmRlZiBTU19MSU5LUkVGUkFDVElPTlRPVFJBTlNQQVJFTkNZXG5hbHBoYT1zdWJTdXJmYWNlT3V0LmFscGhhO1xuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG5zdWJTdXJmYWNlT3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1jb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTtcbiNlbmRpZlxuI2luY2x1ZGU8cGJyQmxvY2tEaXJlY3RMaWdodGluZz5cbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHBickJsb2NrRmluYWxMaXRDb21wb25lbnRzPlxuI2VuZGlmIFxuI2luY2x1ZGU8cGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50cz5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GSU5BTENPTE9SQ09NUE9TSVRJT05cbiNpbmNsdWRlPHBickJsb2NrRmluYWxDb2xvckNvbXBvc2l0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50Pihjb2xvcixmaW5hbENvbG9yKVxuI2luY2x1ZGU8cGJyQmxvY2tJbWFnZVByb2Nlc3Npbmc+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRlJBR0NPTE9SXG4jaWZkZWYgUFJFUEFTU1xuI2luY2x1ZGU8cGJyQmxvY2tQcmVQYXNzPlxuI2VuZGlmXG4jaWYgIWRlZmluZWQoUFJFUEFTUykgJiYgIWRlZmluZWQoT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZKVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPWZpbmFsQ29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPG9pdEZyYWdtZW50PlxuI2lmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxuaWYgKGZyYWdEZXB0aD09bmVhcmVzdERlcHRoKSB7ZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3I9dmVjNGYoZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3IucmdiK2ZpbmFsQ29sb3IucmdiKmZpbmFsQ29sb3IuYSphbHBoYU11bHRpcGxpZXIsMS4wLWFscGhhTXVsdGlwbGllciooMS4wLWZpbmFsQ29sb3IuYSkpO30gZWxzZSB7ZnJhZ21lbnRPdXRwdXRzLmJhY2tDb2xvcis9ZmluYWxDb2xvcjt9XG4jZW5kaWZcbiNpbmNsdWRlPHBickRlYnVnPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclBpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9