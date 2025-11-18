"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_pbr_fragment_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockAlbedoOpacity.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockAlbedoOpacity.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAlbedoOpacity: () => (/* binding */ pbrBlockAlbedoOpacity)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalFragment */ "../core/dist/Shaders/ShadersInclude/decalFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrBlockAlbedoOpacity";
const shader = `struct albedoOpacityOutParams
{vec3 surfaceAlbedo;float alpha;};
#define pbr_inline
albedoOpacityOutParams albedoOpacityBlock(
in vec4 vAlbedoColor
#ifdef ALBEDO
,in vec4 albedoTexture
,in vec2 albedoInfos
#endif
,in float baseWeight
#ifdef BASE_WEIGHT
,in vec4 baseWeightTexture
,in vec2 vBaseWeightInfos
#endif
#ifdef OPACITY
,in vec4 opacityMap
,in vec2 vOpacityInfos
#endif
#ifdef DETAIL
,in vec4 detailColor
,in vec4 vDetailInfos
#endif
#ifdef DECAL
,in vec4 decalColor
,in vec4 vDecalInfos
#endif
)
{albedoOpacityOutParams outParams;vec3 surfaceAlbedo=vAlbedoColor.rgb;float alpha=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpace(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#ifndef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
surfaceAlbedo*=vColor.rgb;
#endif
#ifdef DETAIL
float detailAlbedo=2.0*mix(0.5,detailColor.r,vDetailInfos.y);surfaceAlbedo.rgb=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo; 
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
alpha*=vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.alpha=alpha;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockAlbedoOpacity = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockAlphaFresnel.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockAlphaFresnel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAlphaFresnel: () => (/* binding */ pbrBlockAlphaFresnel)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockAlphaFresnel";
const shader = `#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{float alpha;};
#define pbr_inline
alphaFresnelOutParams alphaFresnelBlock(
in vec3 normalW,
in vec3 viewDirectionW,
in float alpha,
in float microSurface
)
{alphaFresnelOutParams outParams;float opacityPerceptual=alpha;
#ifdef LINEARALPHAFRESNEL
float opacity0=opacityPerceptual;
#else
float opacity0=opacityPerceptual*opacityPerceptual;
#endif
float opacity90=fresnelGrazingReflectance(opacity0);vec3 normalForward=faceforward(normalW,-viewDirectionW,normalW);outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)),vec3(opacity0),vec3(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND
outParams.alpha=1.0;
#endif
#endif
return outParams;}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockAlphaFresnel = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockAmbientOcclusion.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockAmbientOcclusion.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAmbientOcclusion: () => (/* binding */ pbrBlockAmbientOcclusion)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockAmbientOcclusion";
const shader = `struct ambientOcclusionOutParams
{vec3 ambientOcclusionColor;
#if DEBUGMODE>0 && defined(AMBIENT)
vec3 ambientOcclusionColorMap;
#endif
};ambientOcclusionOutParams ambientOcclusionBlock(
#ifdef AMBIENT
in vec3 ambientOcclusionColorMap_,
in vec4 vAmbientInfos
#endif
)
{ambientOcclusionOutParams outParams;vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockAmbientOcclusion = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockAnisotropic.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockAnisotropic.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockAnisotropic: () => (/* binding */ pbrBlockAnisotropic)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockAnisotropic";
const shader = `#ifdef ANISOTROPIC
struct anisotropicOutParams
{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;
#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)
vec3 anisotropyMapData;
#endif
};
#define pbr_inline
anisotropicOutParams anisotropicBlock(
in vec3 vAnisotropy,
in float roughness,
#ifdef ANISOTROPIC_TEXTURE
in vec3 anisotropyMapData,
#endif
in mat3 TBN,
in vec3 normalW,
in vec3 viewDirectionW
)
{anisotropicOutParams outParams;float anisotropy=vAnisotropy.b;vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
anisotropy*=anisotropyMapData.b;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
anisotropyMapData.rg=anisotropyMapData.rg*2.0-1.0;
#ifdef ANISOTROPIC_LEGACY
anisotropyDirection.rg*=anisotropyMapData.rg;
#else
anisotropyDirection.xy=mat2(anisotropyDirection.x,anisotropyDirection.y,-anisotropyDirection.y,anisotropyDirection.x)*normalize(anisotropyMapData.rg);
#endif
#endif
mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));vec3 anisotropicTangent=normalize(anisoTBN*anisotropyDirection);vec3 anisotropicBitangent=normalize(cross(anisoTBN[2],anisotropicTangent));outParams.anisotropy=anisotropy;outParams.anisotropicTangent=anisotropicTangent;outParams.anisotropicBitangent=anisotropicBitangent;outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy,roughness);return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockAnisotropic = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockClearcoat.js":
/*!****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockClearcoat.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockClearcoat: () => (/* binding */ pbrBlockClearcoat)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockClearcoat";
const shader = `struct clearcoatOutParams
{vec3 specularEnvironmentR0;float conservationFactor;vec3 clearCoatNormalW;vec2 clearCoatAARoughnessFactors;float clearCoatIntensity;float clearCoatRoughness;
#ifdef REFLECTION
vec3 finalClearCoatRadianceScaled;
#endif
#ifdef CLEARCOAT_TINT
vec3 absorption;float clearCoatNdotVRefract;vec3 clearCoatColor;float clearCoatThickness;
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
vec3 energyConservationFactorClearCoat;
#endif
#if DEBUGMODE>0
#ifdef CLEARCOAT_BUMP
mat3 TBNClearCoat;
#endif
#ifdef CLEARCOAT_TEXTURE
vec2 clearCoatMapData;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData;
#endif
#ifdef REFLECTION
vec4 environmentClearCoatRadiance;vec3 clearCoatEnvironmentReflectance;
#endif
float clearCoatNdotV;
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
#define inline
clearcoatOutParams clearcoatBlock(
in vec3 vPositionW
,in vec3 geometricNormalW
,in vec3 viewDirectionW
,in vec2 vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,in vec4 clearCoatMapRoughnessData
#endif
,in vec3 specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,in vec2 clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,in vec4 vClearCoatTintParams
,in float clearCoatColorAtDistance
,in vec4 vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,in vec4 clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,in vec2 vClearCoatBumpInfos
,in vec4 clearCoatBumpMapData
,in vec2 vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,in mat3 vTBN
#else
,in vec2 vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,in mat4 normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,in vec3 faceNormal
#endif
#ifdef REFLECTION
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
,in vec4 vLightingIntensity
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,in float frontFacingMultiplier
#endif
)
{clearcoatOutParams outParams;float clearCoatIntensity=vClearCoatParams.x;float clearCoatRoughness=vClearCoatParams.y;
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
vec3 clearCoatColor=vClearCoatTintParams.rgb;float clearCoatThickness=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
#ifdef CLEARCOAT_TINT_GAMMATEXTURE
clearCoatColor*=toLinearSpace(clearCoatTintMapData.rgb);
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
vec3 specularEnvironmentR0Updated=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
vec3 specularEnvironmentR0Updated=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);vec3 clearCoatNormalW=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
float clearCoatNormalScale=1.0;
#else
float clearCoatNormalScale=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBNClearCoat=vTBN;
#else
vec2 TBNClearCoatUV=vClearCoatBumpUV*frontFacingMultiplier;mat3 TBNClearCoat=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz *2.0-1.0);clearCoatNormalW=normalize(mat3(normalMatrix)*clearCoatNormalW);
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
outParams.clearCoatNormalW=clearCoatNormalW;outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);float clearCoatNdotVUnclamped=dot(clearCoatNormalW,viewDirectionW);float clearCoatNdotV=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT
vec3 clearCoatVRefract=refract(-viewDirectionW,clearCoatNormalW,vClearCoatRefractionParams.y);outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))
vec3 environmentClearCoatBrdf=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif
#if defined(REFLECTION)
float clearCoatAlphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA
clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
vec4 environmentClearCoatRadiance=vec4(0.,0.,0.,0.);vec3 clearCoatReflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 clearCoatReflectionCoords=clearCoatReflectionVector;
#else
vec2 clearCoatReflectionCoords=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
sampleReflectionTexture(
clearCoatAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
clearCoatNdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
clearCoatRoughness,
#endif
reflectionSampler,
clearCoatReflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentClearCoatRadiance
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 clearCoatEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float clearCoatEho=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else
vec3 clearCoatEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV,vec3(1.),vec3(1.),sqrt(1.-clearCoatRoughness));
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
float fresnelIBLClearCoat=fresnelSchlickGGX(clearCoatNdotV,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnelIBLClearCoat*=clearCoatIntensity;outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockClearcoat = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockDirectLighting.js":
/*!*********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockDirectLighting.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockDirectLighting: () => (/* binding */ pbrBlockDirectLighting)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockDirectLighting";
const shader = `vec3 diffuseBase=vec3(0.,0.,0.);
#ifdef SS_TRANSLUCENCY
vec3 diffuseTransmissionBase=vec3(0.,0.,0.);
#endif
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#ifdef CLEARCOAT
vec3 clearCoatBase=vec3(0.,0.,0.);
#endif
#ifdef SHEEN
vec3 sheenBase=vec3(0.,0.,0.);
#endif
#if defined(SPECULARTERM) && defined(LIGHT0)
vec3 coloredFresnel;
#endif
preLightingInfo preInfo;lightingInfo info;float shadow=1.; 
float aggShadow=0.;float numLights=0.;
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
vec3 absorption=vec3(0.);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockDirectLighting = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockFinalColorComposition.js":
/*!****************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockFinalColorComposition.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockFinalColorComposition: () => (/* binding */ pbrBlockFinalColorComposition)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockFinalColorComposition";
const shader = `vec4 finalColor=vec4(
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
finalColor.rgb*=lightmapColor.rgb;
#else
finalColor.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
finalColor.rgb+=finalEmissive;
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,0.0);
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockFinalColorComposition = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockFinalLitComponents.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockFinalLitComponents.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockFinalLitComponents: () => (/* binding */ pbrBlockFinalLitComponents)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockFinalLitComponents";
const shader = `aggShadow=aggShadow/numLights;
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 baseSpecularEnergyConservationFactor=getEnergyConservationFactor(vec3(reflectanceF0),environmentBrdf);vec3 coloredEnergyConservationFactor=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo.rgb=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo.rgb=(1.-reflectanceF0)*surfaceAlbedo.rgb;
#endif
#endif
#endif
#ifdef REFLECTION
vec3 finalIrradiance=reflectionOut.environmentIrradiance;
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
#if defined(METALLICWORKFLOW) || defined(SPECULAR_GLOSSINESS_ENERGY_CONSERVATION)
vec3 baseSpecularEnergy=vec3(baseSpecularEnvironmentReflectance);
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
baseSpecularEnergy*=baseSpecularEnergyConservationFactor;
#endif
#endif
finalIrradiance*=clamp(vec3(1.0)-baseSpecularEnergy,0.0,1.0);
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
finalIrradiance*=vLightingIntensity.z;finalIrradiance*=aoOut.ambientOcclusionColor;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase;finalSpecular=max(finalSpecular,0.0);vec3 finalSpecularScaled=finalSpecular*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=coloredEnergyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef REFLECTION
vec3 finalRadiance=reflectionOut.environmentRadiance.rgb;finalRadiance*=colorSpecularEnvironmentReflectance;vec3 finalRadianceScaled=finalRadiance*vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=coloredEnergyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef SHEEN
vec3 finalSheen=sheenBase*sheenOut.sheenColor;finalSheen=max(finalSheen,0.0);vec3 finalSheenScaled=finalSheen*vLightingIntensity.x*vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef CLEARCOAT
vec3 finalClearCoat=clearCoatBase;finalClearCoat=max(finalClearCoat,0.0);vec3 finalClearCoatScaled=finalClearCoat*vLightingIntensity.x*vLightingIntensity.w;
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
float luminanceOverAlpha=0.0;
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
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockFinalLitComponents = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockFinalUnlitComponents.js":
/*!***************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockFinalUnlitComponents.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockFinalUnlitComponents: () => (/* binding */ pbrBlockFinalUnlitComponents)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockFinalUnlitComponents";
const shader = `vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo;
#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)
finalDiffuse*=subSurfaceOut.refractionOpacity;
#endif
#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)
finalDiffuse+=diffuseTransmissionBase;
#endif
finalDiffuse=max(finalDiffuse,0.0);finalDiffuse*=vLightingIntensity.x;vec3 finalAmbient=vAmbientColor;finalAmbient*=surfaceAlbedo.rgb;vec3 finalEmissive=vEmissiveColor;
#ifdef EMISSIVE
vec3 emissiveColorTex=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb;
#ifdef GAMMAEMISSIVE
finalEmissive*=toLinearSpace(emissiveColorTex.rgb);
#else
finalEmissive*=emissiveColorTex.rgb;
#endif
finalEmissive*= vEmissiveInfos.y;
#endif
finalEmissive*=vLightingIntensity.y;
#ifdef AMBIENT
vec3 ambientOcclusionForDirectDiffuse=mix(vec3(1.),aoOut.ambientOcclusionColor,vAmbientInfos.w);
#else
vec3 ambientOcclusionForDirectDiffuse=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockFinalUnlitComponents = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockGeometryInfo.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockGeometryInfo.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockGeometryInfo: () => (/* binding */ pbrBlockGeometryInfo)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockGeometryInfo";
const shader = `float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA
alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)
vec3 environmentBrdf=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
float ambientMonochrome=aoOut.ambientOcclusionColor.r;
#else
float ambientMonochrome=getLuminance(aoOut.ambientOcclusionColor);
#endif
float seo=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float eho=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockGeometryInfo = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockIridescence.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockIridescence.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockIridescence: () => (/* binding */ pbrBlockIridescence)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockIridescence";
const shader = `struct iridescenceOutParams
{float iridescenceIntensity;float iridescenceIOR;float iridescenceThickness;vec3 specularEnvironmentR0;};
#ifdef IRIDESCENCE
#define pbr_inline
#define inline
iridescenceOutParams iridescenceBlock(
in vec4 vIridescenceParams
,in float viewAngle
,in vec3 specularEnvironmentR0
#ifdef IRIDESCENCE_TEXTURE
,in vec2 iridescenceMapData
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,in vec2 iridescenceThicknessMapData
#endif
#ifdef CLEARCOAT
,in float NdotVUnclamped
,in vec2 vClearCoatParams
#ifdef CLEARCOAT_TEXTURE
,in vec2 clearCoatMapData
#endif
#endif
)
{iridescenceOutParams outParams;float iridescenceIntensity=vIridescenceParams.x;float iridescenceIOR=vIridescenceParams.y;float iridescenceThicknessMin=vIridescenceParams.z;float iridescenceThicknessMax=vIridescenceParams.w;float iridescenceThicknessWeight=1.;
#ifdef IRIDESCENCE_TEXTURE
iridescenceIntensity*=iridescenceMapData.x;
#endif
#if defined(IRIDESCENCE_THICKNESS_TEXTURE)
iridescenceThicknessWeight=iridescenceThicknessMapData.g;
#endif
float iridescenceThickness=mix(iridescenceThicknessMin,iridescenceThicknessMax,iridescenceThicknessWeight);float topIor=1.; 
#ifdef CLEARCOAT
float clearCoatIntensity=vClearCoatParams.x;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#endif
topIor=mix(1.0,vClearCoatRefractionParams.w-1.,clearCoatIntensity);viewAngle=sqrt(1.0+square(1.0/topIor)*(square(NdotVUnclamped)-1.0));
#endif
vec3 iridescenceFresnel=evalIridescence(topIor,iridescenceIOR,viewAngle,iridescenceThickness,specularEnvironmentR0);outParams.specularEnvironmentR0=mix(specularEnvironmentR0,iridescenceFresnel,iridescenceIntensity);outParams.iridescenceIntensity=iridescenceIntensity;outParams.iridescenceThickness=iridescenceThickness;outParams.iridescenceIOR=iridescenceIOR;return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockIridescence = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockLightmapInit.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockLightmapInit.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockLightmapInit: () => (/* binding */ pbrBlockLightmapInit)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockLightmapInit";
const shader = `#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockLightmapInit = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockNormalFinal.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockNormalFinal.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockNormalFinal: () => (/* binding */ pbrBlockNormalFinal)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockNormalFinal";
const shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
#if defined(MIRRORED)
normalW=gl_FrontFacing ? -normalW : normalW;
#else
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockNormalFinal = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectance.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockReflectance.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectance: () => (/* binding */ pbrBlockReflectance)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflectance";
const shader = `#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 baseSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(reflectanceF0),reflectivityOut.reflectanceF90,environmentBrdf);
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 metalEnvironmentReflectance=reflectivityOut.specularWeight*getF82Specular(NdotV,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);vec3 dielectricEnvironmentReflectance=getReflectanceFromBRDFLookup(reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90,environmentBrdf);vec3 colorSpecularEnvironmentReflectance=mix(dielectricEnvironmentReflectance,metalEnvironmentReflectance,reflectivityOut.metallic);
#else
vec3 colorSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,environmentBrdf);
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
vec3 colorSpecularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));vec3 baseSpecularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,vec3(reflectanceF0),reflectivityOut.reflectanceF90,sqrt(microSurface));
#endif
#ifdef CLEARCOAT
colorSpecularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
colorSpecularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockReflectance = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectance0.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockReflectance0.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectance0: () => (/* binding */ pbrBlockReflectance0)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflectance0";
const shader = `float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;
#ifdef ALPHAFRESNEL
float reflectance90=fresnelGrazingReflectance(reflectanceF0);specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockReflectance0 = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockReflection.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockReflection.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflection: () => (/* binding */ pbrBlockReflection)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflection";
const shader = `#ifdef REFLECTION
struct reflectionOutParams
{vec4 environmentRadiance;vec3 environmentIrradiance;
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords;
#else
vec2 reflectionCoords;
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
vec3 irradianceVector;
#endif
#endif
#endif
};
#define pbr_inline
void createReflectionCoords(
in vec3 vPositionW,
in vec3 normalW,
#ifdef ANISOTROPIC
in anisotropicOutParams anisotropicOut,
#endif
#ifdef REFLECTIONMAP_3D
out vec3 reflectionCoords
#else
out vec2 reflectionCoords
#endif
)
{
#ifdef ANISOTROPIC
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
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
}
#define pbr_inline
#define inline
void sampleReflectionTexture(
in float alphaG,
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
const vec3 reflectionCoords,
#else
in sampler2D reflectionSampler,
const vec2 reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
out vec4 environmentRadiance
)
{
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA
float automaticReflectionLOD=UNPACK_LOD(sampleReflection(reflectionSampler,reflectionCoords).a);float requestedReflectionLOD=max(automaticReflectionLOD,reflectionLOD);
#else
float requestedReflectionLOD=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#else
float lodReflectionNormalized=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;vec4 environmentMid=sampleReflection(reflectionSampler,reflectionCoords);if (lodReflectionNormalizedDoubled<1.0){environmentRadiance=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);} else {environmentRadiance=mix(
environmentMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
environmentRadiance.rgb*=vReflectionInfos.x;environmentRadiance.rgb*=vReflectionColor.rgb;}
#define pbr_inline
#define inline
reflectionOutParams reflectionBlock(
in vec3 vPositionW
,in vec3 normalW
,in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,in float NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,in float roughness
#endif
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,in vec3 vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,in mat4 reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,in vec3 reflectionDominantDirection
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
,in vec3 viewDirectionW
,in float diffuseRoughness
,in vec3 surfaceAlbedo
)
{reflectionOutParams outParams;vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.);
#else
vec2 reflectionCoords=vec2(0.);
#endif
createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
reflectionCoords
);sampleReflectionTexture(
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
#ifdef REFLECTIONMAP_3D
reflectionSampler,
reflectionCoords,
#else
reflectionSampler,
reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentRadiance
);vec3 environmentIrradiance=vec3(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
#ifdef ANISOTROPIC
vec3 irradianceVector=vec3(reflectionMatrix*vec4(anisotropicOut.anisotropicNormal,0)).xyz;
#else
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#endif
vec3 irradianceView=vec3(reflectionMatrix*vec4(viewDirectionW,0)).xyz;
#if !defined(USE_IRRADIANCE_DOMINANT_DIRECTION) && !defined(REALTIME_FILTERING)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
float NdotV=max(dot(normalW,viewDirectionW),0.0);irradianceVector=mix(irradianceVector,irradianceView,(0.5*(1.0-NdotV))*diffuseRoughness);
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
environmentIrradiance=irradiance(reflectionSampler,irradianceVector,vReflectionFilteringInfo,diffuseRoughness,surfaceAlbedo,irradianceView
#ifdef IBL_CDF_FILTERING
,icdfSampler
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
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,irradianceVector);
#else
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradiance4.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
vec3 Ls=normalize(reflectionDominantDirection);float NoL=dot(irradianceVector,Ls);float NoV=dot(irradianceVector,irradianceView);vec3 diffuseRoughnessTerm=vec3(1.0);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
float LoV=dot (Ls,irradianceView);float mag=length(reflectionDominantDirection)*2.0;vec3 clampedAlbedo=clamp(surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;diffuseRoughnessTerm=diffuseRoughnessTerm/clampedAlbedo;diffuseRoughnessTerm=mix(vec3(1.0),diffuseRoughnessTerm,sqrt(clamp(mag*NoV,0.0,1.0)));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
vec3 H=(irradianceView+Ls)*0.5;float VoH=dot(irradianceView,H);diffuseRoughnessTerm=vec3(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
environmentIrradiance=environmentIrradiance.rgb*diffuseRoughnessTerm;
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb*vReflectionInfos.x;
#ifdef MIX_IBL_RADIANCE_WITH_IRRADIANCE
outParams.environmentRadiance=vec4(mix(environmentRadiance.rgb,environmentIrradiance,alphaG),environmentRadiance.a);
#else
outParams.environmentRadiance=environmentRadiance;
#endif
outParams.environmentIrradiance=environmentIrradiance;outParams.reflectionCoords=reflectionCoords;return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockReflection = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectivity.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockReflectivity.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectivity: () => (/* binding */ pbrBlockReflectivity)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflectivity";
const shader = `struct reflectivityOutParams
{float microSurface;float roughness;float diffuseRoughness;float reflectanceF0;vec3 reflectanceF90;vec3 colorReflectanceF0;vec3 colorReflectanceF90;
#ifdef METALLICWORKFLOW
vec3 surfaceAlbedo;float metallic;float specularWeight;vec3 dielectricColorF0;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
vec3 ambientOcclusionColor;
#endif
#if DEBUGMODE>0
#ifdef METALLICWORKFLOW
#ifdef REFLECTIVITY
vec4 surfaceMetallicColorMap;
#endif
vec3 metallicF0;
#else
#ifdef REFLECTIVITY
vec4 surfaceReflectivityColorMap;
#endif
#endif
#endif
};
#define pbr_inline
reflectivityOutParams reflectivityBlock(
in vec4 reflectivityColor
#ifdef METALLICWORKFLOW
,in vec3 surfaceAlbedo
,in vec4 metallicReflectanceFactors
#endif
,in float baseDiffuseRoughness
#ifdef BASE_DIFFUSE_ROUGHNESS
,in float baseDiffuseRoughnessTexture
,in vec2 baseDiffuseRoughnessInfos
#endif
#ifdef REFLECTIVITY
,in vec3 reflectivityInfos
,in vec4 surfaceMetallicOrReflectivityColorMap
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,in vec3 ambientOcclusionColorIn
#endif
#ifdef MICROSURFACEMAP
,in vec4 microSurfaceTexel
#endif
#ifdef DETAIL
,in vec4 detailColor
,in vec4 vDetailInfos
#endif
)
{reflectivityOutParams outParams;float microSurface=reflectivityColor.a;vec3 surfaceReflectivityColor=reflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec2 metallicRoughness=surfaceReflectivityColor.rg;float ior=surfaceReflectivityColor.b;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
vec3 aoStoreInMetalMap=vec3(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
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
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);float loLerp=mix(0.,metallicRoughness.g,detailRoughness*2.);float hiLerp=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS
microSurface=1.0-metallicRoughness.g;vec3 baseColor=surfaceAlbedo;outParams.metallic=metallicRoughness.r;outParams.specularWeight=metallicReflectanceFactors.a;float dielectricF0=reflectivityColor.a*outParams.specularWeight;surfaceReflectivityColor=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=vec3(dielectricF0)*surfaceReflectivityColor;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.surfaceAlbedo=baseColor.rgb*(vec3(1.0)-vec3(dielectricF0)*surfaceReflectivityColor)*(1.0-outParams.metallic);
#else
outParams.surfaceAlbedo=baseColor.rgb;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
{vec3 reflectivityColor=mix(dielectricF0*surfaceReflectivityColor,baseColor.rgb,outParams.metallic);outParams.reflectanceF0=max(reflectivityColor.r,max(reflectivityColor.g,reflectivityColor.b));}
#else
#if DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_GLTF
float maxF0=max(surfaceReflectivityColor.r,max(surfaceReflectivityColor.g,surfaceReflectivityColor.b));outParams.reflectanceF0=mix(dielectricF0*maxF0,1.0,outParams.metallic);
#else
outParams.reflectanceF0=mix(dielectricF0,1.0,outParams.metallic);
#endif
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.reflectanceF90=vec3(outParams.specularWeight);float f90Scale=1.0;
#else
float f90Scale=clamp(2.0*(ior-1.0),0.0,1.0);outParams.reflectanceF90=vec3(mix(outParams.specularWeight*f90Scale,1.0,outParams.metallic));
#endif
outParams.dielectricColorF0=vec3(dielectricF0*surfaceReflectivityColor);vec3 metallicColorF0=baseColor.rgb;outParams.colorReflectanceF0=mix(outParams.dielectricColorF0,metallicColorF0,outParams.metallic);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
vec3 dielectricColorF90=surfaceReflectivityColor*vec3(outParams.specularWeight)*vec3(f90Scale);
#else
vec3 dielectricColorF90=vec3(outParams.specularWeight*f90Scale);
#endif
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 conductorColorF90=surfaceReflectivityColor;
#else
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
vec3 conductorColorF90=outParams.reflectanceF90;
#else
vec3 conductorColorF90=vec3(1.0);
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
outParams.colorReflectanceF0=surfaceReflectivityColor;outParams.reflectanceF0=max(surfaceReflectivityColor.r,max(surfaceReflectivityColor.g,surfaceReflectivityColor.b));outParams.reflectanceF90=vec3(1.0);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
outParams.colorReflectanceF90=surfaceReflectivityColor;
#else
outParams.colorReflectanceF90=vec3(1.0);
#endif
#endif
microSurface=saturate(microSurface);float roughness=1.-microSurface;float diffuseRoughness=baseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
diffuseRoughness*=baseDiffuseRoughnessTexture*baseDiffuseRoughnessInfos.y;
#endif
outParams.microSurface=microSurface;outParams.roughness=roughness;outParams.diffuseRoughness=diffuseRoughness;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockReflectivity = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockSheen.js":
/*!************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockSheen.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockSheen: () => (/* binding */ pbrBlockSheen)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockSheen";
const shader = `#ifdef SHEEN
struct sheenOutParams
{float sheenIntensity;vec3 sheenColor;float sheenRoughness;
#ifdef SHEEN_LINKWITHALBEDO
vec3 surfaceAlbedo;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
float sheenAlbedoScaling;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 finalSheenRadianceScaled;
#endif
#if DEBUGMODE>0
#ifdef SHEEN_TEXTURE
vec4 sheenMapData;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 sheenEnvironmentReflectance;
#endif
#endif
};
#define pbr_inline
#define inline
sheenOutParams sheenBlock(
in vec4 vSheenColor
#ifdef SHEEN_ROUGHNESS
,in float vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,in vec4 sheenMapRoughnessData
#endif
#endif
,in float roughness
#ifdef SHEEN_TEXTURE
,in vec4 sheenMapData
,in float sheenMapLevel
#endif
,in float reflectance
#ifdef SHEEN_LINKWITHALBEDO
,in vec3 baseColor
,in vec3 surfaceAlbedo
#endif
#ifdef ENVIRONMENTBRDF
,in float NdotV
,in vec3 environmentBrdf
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,in vec2 AARoughnessFactors
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
,in vec4 vLightingIntensity
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
,in vec3 reflectionCoords
#else
,in sampler2D reflectionSampler
,in vec2 reflectionCoords
#endif
,in float NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,in float seo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,in float eho
#endif
#endif
)
{sheenOutParams outParams;float sheenIntensity=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
float sheenFactor=pow5(1.0-sheenIntensity);vec3 sheenColor=baseColor.rgb*(1.0-sheenFactor);float sheenRoughness=sheenIntensity;outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
vec3 sheenColor=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
#ifdef SHEEN_GAMMATEXTURE
sheenColor.rgb*=toLinearSpace(sheenMapData.rgb);
#else
sheenColor.rgb*=sheenMapData.rgb;
#endif
sheenColor.rgb*=sheenMapLevel;
#endif
#ifdef SHEEN_ROUGHNESS
float sheenRoughness=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#else
float sheenRoughness=roughness;
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
vec3 environmentSheenBrdf=vec3(0.,0.,getBRDFLookupCharlieSheen(NdotV,sheenRoughness));
#else*/
#ifdef SHEEN_ROUGHNESS
vec3 environmentSheenBrdf=getBRDFLookup(NdotV,sheenRoughness);
#else
vec3 environmentSheenBrdf=environmentBrdf;
#endif
/*#endif*/
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
float sheenAlphaG=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA
sheenAlphaG+=AARoughnessFactors.y;
#endif
vec4 environmentSheenRadiance=vec4(0.,0.,0.,0.);sampleReflectionTexture(
sheenAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
sheenRoughness,
#endif
reflectionSampler,
reflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentSheenRadiance
);vec3 sheenEnvironmentReflectance=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
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
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockSheen = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockSubSurface.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockSubSurface.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockSubSurface: () => (/* binding */ pbrBlockSubSurface)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockSubSurface";
const shader = `struct subSurfaceOutParams
{vec3 specularEnvironmentReflectance;
#ifdef SS_REFRACTION
vec3 finalRefraction;vec3 surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
float alpha;
#endif
float refractionOpacity;
#endif
#ifdef SS_TRANSLUCENCY
vec3 transmittance;float translucencyIntensity;
#ifdef REFLECTION
vec3 refractionIrradiance;
#endif
#endif
#if DEBUGMODE>0
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction;vec3 refractionTransmittance;
#endif
#endif
};
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#define pbr_inline
#define inline
vec4 sampleEnvironmentRefraction(
in float ior
,in float thickness
,in float refractionLOD
,in vec3 normalW
,in vec3 vPositionW
,in vec3 viewDirectionW
,in mat4 view
,in vec4 vRefractionInfos
,in mat4 refractionMatrix
,in vec4 vRefractionMicrosurfaceInfos
,in float alphaG
#ifdef SS_REFRACTIONMAP_3D
,in samplerCube refractionSampler
#ifndef LODBASEDMICROSFURACE
,in samplerCube refractionSamplerLow
,in samplerCube refractionSamplerHigh
#endif
#else
,in sampler2D refractionSampler
#ifndef LODBASEDMICROSFURACE
,in sampler2D refractionSamplerLow
,in sampler2D refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,in vec2 vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,in vec3 refractionPosition
,in vec3 refractionSize
#endif
) {vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef ANISOTROPIC
vec3 refractionVector=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,ior);
#else
vec3 refractionVector=refract(-viewDirectionW,normalW,ior);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif
#ifdef SS_REFRACTIONMAP_3D
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,refractionSize,refractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;vec3 refractionCoords=refractionVector;refractionCoords=vec3(refractionMatrix*vec4(refractionCoords,0));
#else
#ifdef SS_USE_THICKNESS_AS_DEPTH
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*thickness,1.0)));
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
#endif
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef LODBASEDMICROSFURACE
refractionLOD=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA
float automaticRefractionLOD=UNPACK_LOD(sampleRefraction(refractionSampler,refractionCoords).a);float requestedRefractionLOD=max(automaticRefractionLOD,refractionLOD);
#else
float requestedRefractionLOD=refractionLOD;
#endif
#if defined(REALTIME_FILTERING) && defined(SS_REFRACTIONMAP_3D)
environmentRefraction=vec4(radiance(alphaG,refractionSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=sampleRefractionLod(refractionSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
float lodRefractionNormalized=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));float lodRefractionNormalizedDoubled=lodRefractionNormalized*2.0;vec4 environmentRefractionMid=sampleRefraction(refractionSampler,refractionCoords);if (lodRefractionNormalizedDoubled<1.0){environmentRefraction=mix(
sampleRefraction(refractionSamplerHigh,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);} else {environmentRefraction=mix(
environmentRefractionMid,
sampleRefraction(refractionSamplerLow,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);}
#endif
#ifdef SS_RGBDREFRACTION
environmentRefraction.rgb=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
environmentRefraction.rgb=toLinearSpace(environmentRefraction.rgb);
#endif
return environmentRefraction;}
#endif
#define pbr_inline
#define inline
subSurfaceOutParams subSurfaceBlock(
in vec3 vSubSurfaceIntensity
,in vec2 vThicknessParam
,in vec4 vTintColor
,in vec3 normalW
,in vec3 vSpecularEnvironmentReflectance
#ifdef SS_THICKNESSANDMASK_TEXTURE
,in vec4 thicknessMap
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,in vec4 refractionIntensityMap
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,in vec4 translucencyIntensityMap
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,in mat4 reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,in vec3 irradianceVector_
#endif
#if defined(REALTIME_FILTERING)
,in samplerCube reflectionSampler
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,in vec3 surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,in vec3 vPositionW
,in vec3 viewDirectionW
,in mat4 view
,in vec4 vRefractionInfos
,in mat4 refractionMatrix
,in vec4 vRefractionMicrosurfaceInfos
,in vec4 vLightingIntensity
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,in float alpha
#endif
#ifdef SS_LODINREFRACTIONALPHA
,in float NdotVUnclamped
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,in float roughness
#endif
,in float alphaG
#ifdef SS_REFRACTIONMAP_3D
,in samplerCube refractionSampler
#ifndef LODBASEDMICROSFURACE
,in samplerCube refractionSamplerLow
,in samplerCube refractionSamplerHigh
#endif
#else
,in sampler2D refractionSampler
#ifndef LODBASEDMICROSFURACE
,in sampler2D refractionSamplerLow
,in sampler2D refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,in vec2 vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,in vec3 refractionPosition
,in vec3 refractionSize
#endif
#ifdef SS_DISPERSION
,in float dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,in vec3 vDiffusionDistance
,in vec4 vTranslucencyColor
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,in vec4 translucencyColorMap
#endif
#endif
)
{subSurfaceOutParams outParams;outParams.specularEnvironmentReflectance=vSpecularEnvironmentReflectance;
#ifdef SS_REFRACTION
float refractionIntensity=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
float translucencyIntensity=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#ifdef SS_USE_GLTF_TEXTURES
float thickness=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#else
float thickness=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
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
float thickness=vThicknessParam.y;
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
thickness=maxEps(thickness);vec4 translucencyColor=vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
translucencyColor*=translucencyColorMap;
#endif
vec3 transmittance=transmittanceBRDF_Burley(translucencyColor.rgb,vDiffusionDistance,thickness);transmittance*=translucencyIntensity;outParams.transmittance=transmittance;outParams.translucencyIntensity=translucencyIntensity;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef SS_HAS_THICKNESS
float ior=vRefractionInfos.y;
#else
float ior=vRefractionMicrosurfaceInfos.w;
#endif
#ifdef SS_LODINREFRACTIONALPHA
float refractionAlphaG=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
float refractionRoughness=alphaG;refractionRoughness=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,refractionRoughness);
#else
float refractionAlphaG=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG);
#endif
float refraction_ior=vRefractionInfos.y;
#ifdef SS_DISPERSION
float realIOR=1.0/refraction_ior;float iorDispersionSpread=0.04*dispersion*(realIOR-1.0);vec3 iors=vec3(1.0/(realIOR-iorDispersionSpread),refraction_ior,1.0/(realIOR+iorDispersionSpread));for (int i=0; i<3; i++) {refraction_ior=iors[i];
#endif
vec4 envSample=sampleEnvironmentRefraction(refraction_ior,thickness,refractionLOD,normalW,vPositionW,viewDirectionW,view,vRefractionInfos,refractionMatrix,vRefractionMicrosurfaceInfos,alphaG
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
#endif
#else
,refractionSampler
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
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
environmentRefraction.rgb*=vRefractionInfos.x;
#endif
#ifdef SS_REFRACTION
vec3 refractionTransmittance=vec3(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambert(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)
float maxChannel=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);vec3 volumeAlbedo=saturate(maxChannel*surfaceAlbedo);environmentRefraction.rgb*=volumeAlbedo;
#else
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambert(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT
environmentRefraction.rgb*=surfaceAlbedo.rgb;
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.refractionOpacity=1.-refractionIntensity;
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.surfaceAlbedo*=outParams.refractionOpacity;
#endif
#ifdef UNUSED_MULTIPLEBOUNCES
vec3 bounceSpecularEnvironmentReflectance=(2.0*vSpecularEnvironmentReflectance)/(1.0+vSpecularEnvironmentReflectance);outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,vSpecularEnvironmentReflectance,refractionIntensity);
#endif
#if DEBUGMODE>0
outParams.refractionTransmittance=refractionTransmittance;
#endif
outParams.finalRefraction=environmentRefraction.rgb*refractionTransmittance*vLightingIntensity.z;outParams.finalRefraction*=vec3(1.0)-vSpecularEnvironmentReflectance;
#if DEBUGMODE>0
outParams.environmentRefraction=environmentRefraction;
#endif
#endif
#if defined(REFLECTION) && defined(SS_TRANSLUCENCY)
#if defined(NORMAL) && defined(USESPHERICALINVERTEX) || !defined(USESPHERICALFROMREFLECTIONMAP)
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
vec3 irradianceVector=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
vec3 refractionIrradiance=irradiance(reflectionSampler,-irradianceVector,vReflectionFilteringInfo,0.0,surfaceAlbedo,irradianceVector
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
);
#else
vec3 refractionIrradiance=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec3 irradianceCoords=irradianceVector;
#else
vec2 irradianceCoords=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
vec4 refractionIrradiance=sampleReflection(irradianceSampler,-irradianceCoords);
#ifdef RGBDREFLECTION
refractionIrradiance.rgb=fromRGBD(refractionIrradiance);
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance.rgb=toLinearSpace(refractionIrradiance.rgb);
#endif
#else
vec4 refractionIrradiance=vec4(0.);
#endif
refractionIrradiance.rgb*=transmittance;
#ifdef SS_ALBEDOFORTRANSLUCENCYTINT
refractionIrradiance.rgb*=surfaceAlbedo.rgb;
#endif
outParams.refractionIrradiance=refractionIrradiance.rgb;
#endif
return outParams;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockSubSurface = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrClusteredLightingFunctions.js":
/*!****************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrClusteredLightingFunctions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrClusteredLightingFunctions: () => (/* binding */ pbrClusteredLightingFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _clusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clusteredLightingFunctions */ "../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js");
/* harmony import */ var _pbrBlockReflectance0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pbrBlockReflectance0 */ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectance0.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "pbrClusteredLightingFunctions";
const shader = `#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
#include<clusteredLightingFunctions>
#define inline
lightingInfo computeClusteredLighting(
sampler2D lightDataTexture,
sampler2D tileMaskTexture,
vec4 lightData,
ivec2 sliceRange,
vec3 V,
vec3 N,
vec3 posW,
vec3 surfaceAlbedo,
reflectivityOutParams reflectivityOut
#ifdef IRIDESCENCE
,float iridescenceIntensity
#endif
#ifdef SS_TRANSLUCENCY
,subSurfaceOutParams subSurfaceOut
#endif
#ifdef SPECULARTERM
,float AARoughnessFactor
#endif
#ifdef ANISOTROPIC
,anisotropicOutParams anisotropicOut
#endif
#ifdef SHEEN
,sheenOutParams sheenOut
#endif
#ifdef CLEARCOAT
,clearcoatOutParams clearcoatOut
#endif
) {float NdotV=absEps(dot(N,V));
#include<pbrBlockReflectance0>
#ifdef CLEARCOAT
specularEnvironmentR0=clearcoatOut.specularEnvironmentR0;
#endif
lightingInfo result;ivec2 tilePosition=ivec2(gl_FragCoord.xy*lightData.xy);int maskHeight=int(lightData.z);tilePosition.y=min(tilePosition.y,maskHeight-1);ivec2 batchRange=sliceRange/CLUSTLIGHT_BATCH;int batchOffset=batchRange.x*CLUSTLIGHT_BATCH;tilePosition.y+=maskHeight*batchRange.x;for (int i=batchRange.x; i<=batchRange.y; i+=1) {uint mask=uint(texelFetch(tileMaskTexture,tilePosition,0).r);tilePosition.y+=maskHeight;int maskOffset=max(sliceRange.x-batchOffset,0);int maskWidth=min(sliceRange.y-batchOffset+1,CLUSTLIGHT_BATCH);mask=extractBits(mask,maskOffset,maskWidth);while (mask != 0u) {uint bit=mask & -mask;mask ^= bit;int position=onlyBitPosition(bit);ClusteredLight light=getClusteredLight(lightDataTexture,batchOffset+maskOffset+position);preLightingInfo preInfo=computePointAndSpotPreLightingInfo(light.vLightData,V,N,posW);preInfo.NdotV=NdotV;preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light.vLightFalloff.x,light.vLightFalloff.y);if (light.vLightDirection.w>=0.0) {preInfo.attenuation*=computeDirectionalLightFalloff(light.vLightDirection.xyz,preInfo.L,light.vLightDirection.w,light.vLightData.w,light.vLightFalloff.z,light.vLightFalloff.w);}
preInfo.roughness=adjustRoughnessFromLightProperties(reflectivityOut.roughness,light.vLightSpecular.a,preInfo.lightDistance);preInfo.diffuseRoughness=reflectivityOut.diffuseRoughness;preInfo.surfaceAlbedo=surfaceAlbedo;
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
lightingInfo info;
#ifdef SS_TRANSLUCENCY
#ifdef SS_TRANSLUCENCY_LEGACY
info.diffuse=computeDiffuseTransmittedLighting(preInfo,light.vLightDiffuse.rgb,subSurfaceOut.transmittance);info.diffuseTransmission=vec3(0);
#else
info.diffuse=computeDiffuseLighting(preInfo,light.vLightDiffuse.rgb)*(1.0-subSurfaceOut.translucencyIntensity);info.diffuseTransmission=computeDiffuseTransmittedLighting(preInfo,light.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#endif
#else
info.diffuse=computeDiffuseLighting(preInfo,light.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#if CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR
vec3 metalFresnel=reflectivityOut.specularWeight*getF82Specular(preInfo.VdotH,specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);vec3 dielectricFresnel=fresnelSchlickGGX(preInfo.VdotH,reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90);vec3 coloredFresnel=mix(dielectricFresnel,metalFresnel,reflectivityOut.metallic);
#else
vec3 coloredFresnel=fresnelSchlickGGX(preInfo.VdotH,specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#endif
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
float NdotH=dot(N,preInfo.H);vec3 fresnel=fresnelSchlickGGX(NdotH,vec3(reflectanceF0),specularEnvironmentR90);info.diffuse*=(vec3(1.0)-fresnel);
#endif
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,V,N,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactor,light.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,N,specularEnvironmentR0,coloredFresnel,AARoughnessFactor,light.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light.vLightSpecular.a,preInfo.lightDistance);
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactor,light.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light.vLightSpecular.a,preInfo.lightDistance);info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
float absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=absorption;
#endif
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=info.clearCoat.w;
#endif
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
result.diffuse+=info.diffuse;
#ifdef SS_TRANSLUCENCY
result.diffuseTransmission+=info.diffuseTransmission;
#endif
#ifdef SPECULARTERM
result.specular+=info.specular;
#endif
#ifdef CLEARCOAT
result.clearCoat+=info.clearCoat;
#endif
#ifdef SHEEN
result.sheen+=info.sheen;
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
const pbrClusteredLightingFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrFragmentDeclaration.js":
/*!*********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrFragmentDeclaration.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrFragmentDeclaration: () => (/* binding */ pbrFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/decalFragmentDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiveColor;uniform float visibility;uniform vec3 vAmbientColor;
#ifdef ALBEDO
uniform vec2 vAlbedoInfos;
#endif
#ifdef BASE_WEIGHT
uniform vec2 vBaseWeightInfos;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef AMBIENT
uniform vec4 vAmbientInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
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
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(SS_REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#ifdef REALTIME_FILTERING
uniform vec2 vReflectionFilteringInfo;
#endif
uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#if defined(USEIRRADIANCEMAP) && defined(USE_IRRADIANCE_DOMINANT_DIRECTION)
uniform vec3 vReflectionDominantDirection;
#endif
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize;
#endif
#endif
#if defined(SS_REFRACTION) && defined(SS_USE_LOCAL_REFRACTIONMAP_CUBIC)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize;
#endif
#ifdef CLEARCOAT
uniform vec2 vClearCoatParams;uniform vec4 vClearCoatRefractionParams;
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform vec2 vClearCoatTangentSpaceParams;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT
uniform vec4 vClearCoatTintParams;uniform float clearCoatColorAtDistance;
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#endif
#ifdef IRIDESCENCE
uniform vec4 vIridescenceParams;
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
uniform vec3 vAnisotropy;
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
uniform vec4 vSheenColor;
#ifdef SHEEN_ROUGHNESS
uniform float vSheenRoughness;
#endif
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionMicrosurfaceInfos;uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#ifdef REALTIME_FILTERING
uniform vec2 vRefractionFilteringInfo;
#endif
#ifdef SS_DISPERSION
uniform float dispersion;
#endif
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
uniform vec2 vThicknessParam;uniform vec3 vDiffusionDistance;uniform vec4 vTintColor;uniform vec3 vSubSurfaceIntensity;uniform vec4 vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef PREPASS
#ifdef SS_SCATTERING
uniform float scatteringDiffusionProfile;
#endif
#endif
#if DEBUGMODE>0
uniform vec2 vDebugMode;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrFragmentDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrFragmentSamplersDeclaration.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrFragmentSamplersDeclaration.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrFragmentSamplersDeclaration: () => (/* binding */ pbrFragmentSamplersDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js");
/* harmony import */ var _samplerFragmentAlternateDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samplerFragmentAlternateDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerFragmentAlternateDeclaration.js");
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
uniform sampler2D clearCoatRoughnessSampler;
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
uniform sampler2D sheenRoughnessSampler;
#endif
#endif
#ifdef ANISOTROPIC
#include<samplerFragmentDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_SAMPLERNAME_,anisotropy)
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
uniform sampler2D environmentBrdfSampler;
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
#define sampleRefraction(s,c) textureCube(s,c)
uniform samplerCube refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube refractionSamplerLow;uniform samplerCube refractionSamplerHigh;
#endif
#else
#define sampleRefraction(s,c) texture2D(s,c)
uniform sampler2D refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D refractionSamplerLow;uniform sampler2D refractionSamplerHigh;
#endif
#endif
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_SAMPLERNAME_,thickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_SAMPLERNAME_,refractionIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_SAMPLERNAME_,translucencyIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_SAMPLERNAME_,translucencyColor)
#endif
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfSampler;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrFragmentSamplersDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrUboDeclaration.js":
/*!****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrUboDeclaration.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrUboDeclaration: () => (/* binding */ pbrUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/Shaders/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "pbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBumpInfos;mat4 albedoMatrix;mat4 baseWeightMatrix;mat4 baseDiffuseRoughnessMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 reflectivityMatrix;mat4 microSurfaceSamplerMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;vec4 vAlbedoColor;float baseWeight;float baseDiffuseRoughness;vec4 vLightingIntensity;float pointSize;vec4 vReflectivityColor;vec3 vEmissiveColor;vec3 vAmbientColor;vec2 vDebugMode;vec4 vMetallicReflectanceFactors;vec2 vMetallicReflectanceInfos;mat4 metallicReflectanceMatrix;vec2 vReflectanceInfos;mat4 reflectanceMatrix;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionMicrosurfaceInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vReflectionFilteringInfo;vec3 vReflectionDominantDirection;vec3 vReflectionColor;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;
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
const pbrUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/samplerFragmentAlternateDeclaration.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/samplerFragmentAlternateDeclaration.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerFragmentAlternateDeclaration: () => (/* binding */ samplerFragmentAlternateDeclaration)
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
varying vec2 v_VARYINGNAME_UV;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const samplerFragmentAlternateDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/pbr.fragment.js":
/*!********************************************!*\
  !*** ../core/dist/Shaders/pbr.fragment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrPixelShader: () => (/* binding */ pbrPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_prePassDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/prePassDeclaration */ "../core/dist/Shaders/ShadersInclude/prePassDeclaration.js");
/* harmony import */ var _ShadersInclude_oitDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/oitDeclaration */ "../core/dist/Shaders/ShadersInclude/oitDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrUboDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/pbrUboDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentExtraDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentExtraDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrFragmentExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_lightFragmentDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/lightFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentSamplersDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentSamplersDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrFragmentSamplersDeclaration.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/Shaders/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_subSurfaceScatteringFunctions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/subSurfaceScatteringFunctions */ "../core/dist/Shaders/ShadersInclude/subSurfaceScatteringFunctions.js");
/* harmony import */ var _ShadersInclude_importanceSampling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/importanceSampling */ "../core/dist/Shaders/ShadersInclude/importanceSampling.js");
/* harmony import */ var _ShadersInclude_pbrHelperFunctions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/pbrHelperFunctions */ "../core/dist/Shaders/ShadersInclude/pbrHelperFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/Shaders/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_shadowsFragmentFunctions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/shadowsFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/shadowsFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_harmonicsFunctions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/harmonicsFunctions */ "../core/dist/Shaders/ShadersInclude/harmonicsFunctions.js");
/* harmony import */ var _ShadersInclude_pbrDirectLightingSetupFunctions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/pbrDirectLightingSetupFunctions */ "../core/dist/Shaders/ShadersInclude/pbrDirectLightingSetupFunctions.js");
/* harmony import */ var _ShadersInclude_pbrDirectLightingFalloffFunctions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/pbrDirectLightingFalloffFunctions */ "../core/dist/Shaders/ShadersInclude/pbrDirectLightingFalloffFunctions.js");
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/pbrBRDFFunctions */ "../core/dist/Shaders/ShadersInclude/pbrBRDFFunctions.js");
/* harmony import */ var _ShadersInclude_hdrFilteringFunctions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/hdrFilteringFunctions */ "../core/dist/Shaders/ShadersInclude/hdrFilteringFunctions.js");
/* harmony import */ var _ShadersInclude_pbrDirectLightingFunctions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/pbrDirectLightingFunctions */ "../core/dist/Shaders/ShadersInclude/pbrDirectLightingFunctions.js");
/* harmony import */ var _ShadersInclude_pbrIBLFunctions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/pbrIBLFunctions */ "../core/dist/Shaders/ShadersInclude/pbrIBLFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentMainFunctions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentMainFunctions */ "../core/dist/Shaders/ShadersInclude/bumpFragmentMainFunctions.js");
/* harmony import */ var _ShadersInclude_bumpFragmentFunctions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/bumpFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/bumpFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/Shaders/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_pbrBlockAlbedoOpacity__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAlbedoOpacity */ "../core/dist/Shaders/ShadersInclude/pbrBlockAlbedoOpacity.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflectivity__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflectivity */ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectivity.js");
/* harmony import */ var _ShadersInclude_pbrBlockAmbientOcclusion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAmbientOcclusion */ "../core/dist/Shaders/ShadersInclude/pbrBlockAmbientOcclusion.js");
/* harmony import */ var _ShadersInclude_pbrBlockAlphaFresnel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAlphaFresnel */ "../core/dist/Shaders/ShadersInclude/pbrBlockAlphaFresnel.js");
/* harmony import */ var _ShadersInclude_pbrBlockAnisotropic__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockAnisotropic */ "../core/dist/Shaders/ShadersInclude/pbrBlockAnisotropic.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflection__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflection */ "../core/dist/Shaders/ShadersInclude/pbrBlockReflection.js");
/* harmony import */ var _ShadersInclude_pbrBlockSheen__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockSheen */ "../core/dist/Shaders/ShadersInclude/pbrBlockSheen.js");
/* harmony import */ var _ShadersInclude_pbrBlockClearcoat__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockClearcoat */ "../core/dist/Shaders/ShadersInclude/pbrBlockClearcoat.js");
/* harmony import */ var _ShadersInclude_pbrBlockIridescence__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockIridescence */ "../core/dist/Shaders/ShadersInclude/pbrBlockIridescence.js");
/* harmony import */ var _ShadersInclude_pbrBlockSubSurface__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockSubSurface */ "../core/dist/Shaders/ShadersInclude/pbrBlockSubSurface.js");
/* harmony import */ var _ShadersInclude_pbrClusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ShadersInclude/pbrClusteredLightingFunctions */ "../core/dist/Shaders/ShadersInclude/pbrClusteredLightingFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockNormalGeometric__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockNormalGeometric */ "../core/dist/Shaders/ShadersInclude/pbrBlockNormalGeometric.js");
/* harmony import */ var _ShadersInclude_bumpFragment__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ShadersInclude/bumpFragment */ "../core/dist/Shaders/ShadersInclude/bumpFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockNormalFinal__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockNormalFinal */ "../core/dist/Shaders/ShadersInclude/pbrBlockNormalFinal.js");
/* harmony import */ var _ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ShadersInclude/depthPrePass */ "../core/dist/Shaders/ShadersInclude/depthPrePass.js");
/* harmony import */ var _ShadersInclude_pbrBlockLightmapInit__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockLightmapInit */ "../core/dist/Shaders/ShadersInclude/pbrBlockLightmapInit.js");
/* harmony import */ var _ShadersInclude_pbrBlockGeometryInfo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockGeometryInfo */ "../core/dist/Shaders/ShadersInclude/pbrBlockGeometryInfo.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflectance0__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflectance0 */ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectance0.js");
/* harmony import */ var _ShadersInclude_pbrBlockReflectance__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockReflectance */ "../core/dist/Shaders/ShadersInclude/pbrBlockReflectance.js");
/* harmony import */ var _ShadersInclude_pbrBlockDirectLighting__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockDirectLighting */ "../core/dist/Shaders/ShadersInclude/pbrBlockDirectLighting.js");
/* harmony import */ var _ShadersInclude_lightFragment__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ShadersInclude/lightFragment */ "../core/dist/Shaders/ShadersInclude/lightFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockFinalLitComponents__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockFinalLitComponents */ "../core/dist/Shaders/ShadersInclude/pbrBlockFinalLitComponents.js");
/* harmony import */ var _ShadersInclude_pbrBlockFinalUnlitComponents__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockFinalUnlitComponents */ "../core/dist/Shaders/ShadersInclude/pbrBlockFinalUnlitComponents.js");
/* harmony import */ var _ShadersInclude_pbrBlockFinalColorComposition__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockFinalColorComposition */ "../core/dist/Shaders/ShadersInclude/pbrBlockFinalColorComposition.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockImageProcessing__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockImageProcessing */ "../core/dist/Shaders/ShadersInclude/pbrBlockImageProcessing.js");
/* harmony import */ var _ShadersInclude_pbrBlockPrePass__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockPrePass */ "../core/dist/Shaders/ShadersInclude/pbrBlockPrePass.js");
/* harmony import */ var _ShadersInclude_oitFragment__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./ShadersInclude/oitFragment */ "../core/dist/Shaders/ShadersInclude/oitFragment.js");
/* harmony import */ var _ShadersInclude_pbrDebug__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./ShadersInclude/pbrDebug */ "../core/dist/Shaders/ShadersInclude/pbrDebug.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




























































const name = "pbrPixelShader";
const shader = `#define PBR_FRAGMENT_SHADER
#define CUSTOM_FRAGMENT_EXTENSION
#if defined(BUMP) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef LODBASEDMICROSFURACE
#extension GL_EXT_shader_texture_lod : enable
#endif
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#if SCENE_MRT_COUNT>0
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#endif
precision highp float;
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<__decl__pbrFragment>
#include<pbrFragmentExtraDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
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
#include<pbrClusteredLightingFunctions>
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>
albedoOpacityOutParams albedoOpacityOut;
#ifdef ALBEDO
vec4 albedoTexture=texture2D(albedoSampler,vAlbedoUV+uvOffset);
#endif
#ifdef BASE_WEIGHT
vec4 baseWeightTexture=texture2D(baseWeightSampler,vBaseWeightUV+uvOffset);
#endif
#ifdef OPACITY
vec4 opacityMap=texture2D(opacitySampler,vOpacityUV+uvOffset);
#endif
#ifdef DECAL
vec4 decalColor=texture2D(decalSampler,vDecalUV+uvOffset);
#endif
albedoOpacityOut=albedoOpacityBlock(
vAlbedoColor
#ifdef ALBEDO
,albedoTexture
,vAlbedoInfos
#endif
,baseWeight
#ifdef BASE_WEIGHT
,baseWeightTexture
,vBaseWeightInfos
#endif
#ifdef OPACITY
,opacityMap
,vOpacityInfos
#endif
#ifdef DETAIL
,detailColor
,vDetailInfos
#endif
#ifdef DECAL
,decalColor
,vDecalInfos
#endif
);vec3 surfaceAlbedo=albedoOpacityOut.surfaceAlbedo;float alpha=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
ambientOcclusionOutParams aoOut;
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=texture2D(ambientSampler,vAmbientUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
vAmbientInfos
#endif
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else 
vec3 baseColor=surfaceAlbedo;reflectivityOutParams reflectivityOut;
#if defined(REFLECTIVITY)
vec4 surfaceMetallicOrReflectivityColorMap=texture2D(reflectivitySampler,vReflectivityUV+uvOffset);vec4 baseReflectivity=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
#ifdef REFLECTIVITY_GAMMA
surfaceMetallicOrReflectivityColorMap=toLinearSpace(surfaceMetallicOrReflectivityColorMap);
#endif
surfaceMetallicOrReflectivityColorMap.rgb*=vReflectivityInfos.y;
#endif
#endif
#if defined(MICROSURFACEMAP)
vec4 microSurfaceTexel=texture2D(microSurfaceSampler,vMicroSurfaceSamplerUV+uvOffset)*vMicroSurfaceSamplerInfos.y;
#endif
#ifdef METALLICWORKFLOW
vec4 metallicReflectanceFactors=vMetallicReflectanceFactors;
#ifdef REFLECTANCE
vec4 reflectanceFactorsMap=texture2D(reflectanceSampler,vReflectanceUV+uvOffset);
#ifdef REFLECTANCE_GAMMA
reflectanceFactorsMap=toLinearSpace(reflectanceFactorsMap);
#endif
metallicReflectanceFactors.rgb*=reflectanceFactorsMap.rgb;
#endif
#ifdef METALLIC_REFLECTANCE
vec4 metallicReflectanceFactorsMap=texture2D(metallicReflectanceSampler,vMetallicReflectanceUV+uvOffset);
#ifdef METALLIC_REFLECTANCE_GAMMA
metallicReflectanceFactorsMap=toLinearSpace(metallicReflectanceFactorsMap);
#endif
#ifndef METALLIC_REFLECTANCE_USE_ALPHA_ONLY
metallicReflectanceFactors.rgb*=metallicReflectanceFactorsMap.rgb;
#endif
metallicReflectanceFactors.a*=metallicReflectanceFactorsMap.a;
#endif
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
float baseDiffuseRoughnessTexture=texture2D(baseDiffuseRoughnessSampler,vBaseDiffuseRoughnessUV+uvOffset).r;
#endif
reflectivityOut=reflectivityBlock(
vReflectivityColor
#ifdef METALLICWORKFLOW
,surfaceAlbedo
,metallicReflectanceFactors
#endif
,baseDiffuseRoughness
#ifdef BASE_DIFFUSE_ROUGHNESS
,baseDiffuseRoughnessTexture
,vBaseDiffuseRoughnessInfos
#endif
#ifdef REFLECTIVITY
,vReflectivityInfos
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
,vDetailInfos
#endif
);float microSurface=reflectivityOut.microSurface;float roughness=reflectivityOut.roughness;float diffuseRoughness=reflectivityOut.diffuseRoughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif
#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
alphaFresnelOutParams alphaFresnelOut;alphaFresnelOut=alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface
);alpha=alphaFresnelOut.alpha;
#endif
#endif
#include<pbrBlockGeometryInfo>
#ifdef ANISOTROPIC
anisotropicOutParams anisotropicOut;
#ifdef ANISOTROPIC_TEXTURE
vec3 anisotropyMapData=texture2D(anisotropySampler,vAnisotropyUV+uvOffset).rgb*vAnisotropyInfos.y;
#endif
anisotropicOut=anisotropicBlock(
vAnisotropy,
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
reflectionOutParams reflectionOut;
#ifndef USE_CUSTOM_REFLECTION
reflectionOut=reflectionBlock(
vPositionW
,normalW
,alphaG
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
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
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,vReflectionDominantDirection
#endif
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionSamplerLow
,reflectionSamplerHigh
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
#endif
,viewDirectionW
,diffuseRoughness
,baseColor
);
#else
#define CUSTOM_REFLECTION
#endif
#endif
#include<pbrBlockReflectance0>
#ifdef SHEEN
sheenOutParams sheenOut;
#ifdef SHEEN_TEXTURE
vec4 sheenMapData=texture2D(sheenSampler,vSheenUV+uvOffset);
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 sheenMapRoughnessData=texture2D(sheenRoughnessSampler,vSheenRoughnessUV+uvOffset)*vSheenInfos.w;
#endif
sheenOut=sheenBlock(
vSheenColor
#ifdef SHEEN_ROUGHNESS
,vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData
#endif
#endif
,roughness
#ifdef SHEEN_TEXTURE
,sheenMapData
,vSheenInfos.y
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
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
,vLightingIntensity
,reflectionSampler
,reflectionOut.reflectionCoords
,NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
,reflectionSamplerLow
,reflectionSamplerHigh
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
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
vec2 clearCoatMapData=texture2D(clearCoatSampler,vClearCoatUV+uvOffset).rg*vClearCoatInfos.y;
#endif
#endif
#ifdef IRIDESCENCE
iridescenceOutParams iridescenceOut;
#ifdef IRIDESCENCE_TEXTURE
vec2 iridescenceMapData=texture2D(iridescenceSampler,vIridescenceUV+uvOffset).rg*vIridescenceInfos.y;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
vec2 iridescenceThicknessMapData=texture2D(iridescenceThicknessSampler,vIridescenceThicknessUV+uvOffset).rg*vIridescenceInfos.w;
#endif
iridescenceOut=iridescenceBlock(
vIridescenceParams
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
,vClearCoatParams
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#endif
);float iridescenceIntensity=iridescenceOut.iridescenceIntensity;specularEnvironmentR0=iridescenceOut.specularEnvironmentR0;
#endif
clearcoatOutParams clearcoatOut;
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
vec4 clearCoatMapRoughnessData=texture2D(clearCoatRoughnessSampler,vClearCoatRoughnessUV+uvOffset)*vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData=texture2D(clearCoatTintSampler,vClearCoatTintUV+uvOffset);
#endif
#ifdef CLEARCOAT_BUMP
vec4 clearCoatBumpMapData=texture2D(clearCoatBumpSampler,vClearCoatBumpUV+uvOffset);
#endif
clearcoatOut=clearcoatBlock(
vPositionW
,geometricNormalW
,viewDirectionW
,vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData
#endif
,specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,vClearCoatTintParams
,clearCoatColorAtDistance
,vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,vClearCoatBumpInfos
,clearCoatBumpMapData
,vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,vTBN
#else
,vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal
#endif
#ifdef REFLECTION
,vReflectionMicrosurfaceInfos
,vReflectionInfos
,vReflectionColor
,vLightingIntensity
,reflectionSampler
#ifndef LODBASEDMICROSFURACE
,reflectionSamplerLow
,reflectionSamplerHigh
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,(gl_FrontFacing ? 1. : -1.)
#endif
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif
#include<pbrBlockReflectance>
subSurfaceOutParams subSurfaceOut;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap=texture2D(thicknessSampler,vThicknessUV+uvOffset);
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
vec4 refractionIntensityMap=texture2D(refractionIntensitySampler,vRefractionIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
vec4 translucencyIntensityMap=texture2D(translucencyIntensitySampler,vTranslucencyIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
vec4 translucencyColorMap=texture2D(translucencyColorSampler,vTranslucencyColorUV+uvOffset);
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA
translucencyColorMap=toLinearSpace(translucencyColorMap);
#endif
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
vec3 vSpecularEnvironmentReflectance=vec3(max(colorSpecularEnvironmentReflectance.r,max(colorSpecularEnvironmentReflectance.g,colorSpecularEnvironmentReflectance.b)));
#endif
subSurfaceOut=subSurfaceBlock(
vSubSurfaceIntensity
,vThicknessParam
,vTintColor
,normalW
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
,vSpecularEnvironmentReflectance
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
,reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,reflectionOut.irradianceVector
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,vPositionW
,viewDirectionW
,view
,vRefractionInfos
,refractionMatrix
,vRefractionMicrosurfaceInfos
,vLightingIntensity
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
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,vRefractionPosition
,vRefractionSize
#endif
#ifdef SS_DISPERSION
,dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,vDiffusionDistance
,vTranslucencyColor
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
#if !defined(PREPASS) || defined(WEBGL2)
gl_FragColor=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {frontColor.rgb+=finalColor.rgb*finalColor.a*alphaMultiplier;frontColor.a=1.0-alphaMultiplier*(1.0-finalColor.a);} else {backColor+=finalColor;}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const pbrPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGJyX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZQQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2U0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2WkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0FsYmVkb09wYWNpdHkudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQWxwaGFGcmVzbmVsLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0FtYmllbnRPY2NsdXNpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQW5pc290cm9waWMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQ2xlYXJjb2F0LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0RpcmVjdExpZ2h0aW5nLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0ZpbmFsQ29sb3JDb21wb3NpdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tGaW5hbExpdENvbXBvbmVudHMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrRmluYWxVbmxpdENvbXBvbmVudHMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrR2VvbWV0cnlJbmZvLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0lyaWRlc2NlbmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0xpZ2h0bWFwSW5pdC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tOb3JtYWxGaW5hbC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0YW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0YW5jZTAudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUmVmbGVjdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0aXZpdHkudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrU2hlZW4udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrU3ViU3VyZmFjZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQ2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyVWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJGcmFnbWVudEFsdGVybmF0ZURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9wYnIuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2RlY2FsRnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tBbGJlZG9PcGFjaXR5XCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGFsYmVkb09wYWNpdHlPdXRQYXJhbXNcbnt2ZWMzIHN1cmZhY2VBbGJlZG87ZmxvYXQgYWxwaGE7fTtcbiNkZWZpbmUgcGJyX2lubGluZVxuYWxiZWRvT3BhY2l0eU91dFBhcmFtcyBhbGJlZG9PcGFjaXR5QmxvY2soXG5pbiB2ZWM0IHZBbGJlZG9Db2xvclxuI2lmZGVmIEFMQkVET1xuLGluIHZlYzQgYWxiZWRvVGV4dHVyZVxuLGluIHZlYzIgYWxiZWRvSW5mb3NcbiNlbmRpZlxuLGluIGZsb2F0IGJhc2VXZWlnaHRcbiNpZmRlZiBCQVNFX1dFSUdIVFxuLGluIHZlYzQgYmFzZVdlaWdodFRleHR1cmVcbixpbiB2ZWMyIHZCYXNlV2VpZ2h0SW5mb3NcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlcbixpbiB2ZWM0IG9wYWNpdHlNYXBcbixpbiB2ZWMyIHZPcGFjaXR5SW5mb3NcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuLGluIHZlYzQgZGV0YWlsQ29sb3JcbixpbiB2ZWM0IHZEZXRhaWxJbmZvc1xuI2VuZGlmXG4jaWZkZWYgREVDQUxcbixpbiB2ZWM0IGRlY2FsQ29sb3JcbixpbiB2ZWM0IHZEZWNhbEluZm9zXG4jZW5kaWZcbilcbnthbGJlZG9PcGFjaXR5T3V0UGFyYW1zIG91dFBhcmFtczt2ZWMzIHN1cmZhY2VBbGJlZG89dkFsYmVkb0NvbG9yLnJnYjtmbG9hdCBhbHBoYT12QWxiZWRvQ29sb3IuYTtcbiNpZmRlZiBBTEJFRE9cbiNpZiBkZWZpbmVkKEFMUEhBRlJPTUFMQkVETykgfHwgZGVmaW5lZChBTFBIQVRFU1QpXG5hbHBoYSo9YWxiZWRvVGV4dHVyZS5hO1xuI2VuZGlmXG4jaWZkZWYgR0FNTUFBTEJFRE9cbnN1cmZhY2VBbGJlZG8qPXRvTGluZWFyU3BhY2UoYWxiZWRvVGV4dHVyZS5yZ2IpO1xuI2Vsc2VcbnN1cmZhY2VBbGJlZG8qPWFsYmVkb1RleHR1cmUucmdiO1xuI2VuZGlmXG5zdXJmYWNlQWxiZWRvKj1hbGJlZG9JbmZvcy55O1xuI2VuZGlmXG4jaWZuZGVmIERFQ0FMX0FGVEVSX0RFVEFJTFxuI2luY2x1ZGU8ZGVjYWxGcmFnbWVudD5cbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuc3VyZmFjZUFsYmVkbyo9dkNvbG9yLnJnYjtcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuZmxvYXQgZGV0YWlsQWxiZWRvPTIuMCptaXgoMC41LGRldGFpbENvbG9yLnIsdkRldGFpbEluZm9zLnkpO3N1cmZhY2VBbGJlZG8ucmdiPXN1cmZhY2VBbGJlZG8ucmdiKmRldGFpbEFsYmVkbypkZXRhaWxBbGJlZG87IFxuI2VuZGlmXG4jaWZkZWYgREVDQUxfQUZURVJfREVUQUlMXG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50PlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9VUERBVEVfQUxCRURPXG5zdXJmYWNlQWxiZWRvKj1iYXNlV2VpZ2h0O1xuI2lmZGVmIEJBU0VfV0VJR0hUXG5zdXJmYWNlQWxiZWRvKj1iYXNlV2VpZ2h0VGV4dHVyZS5yO1xuI2VuZGlmXG4jaWZkZWYgT1BBQ0lUWVxuI2lmZGVmIE9QQUNJVFlSR0JcbmFscGhhPWdldEx1bWluYW5jZShvcGFjaXR5TWFwLnJnYik7XG4jZWxzZVxuYWxwaGEqPW9wYWNpdHlNYXAuYTtcbiNlbmRpZlxuYWxwaGEqPXZPcGFjaXR5SW5mb3MueTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQUxQSEEpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYWxwaGEqPXZDb2xvci5hO1xuI2VuZGlmXG4jaWYgIWRlZmluZWQoU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWSkgJiYgIWRlZmluZWQoQUxQSEFGUkVTTkVMKVxuI2lmZGVmIEFMUEhBVEVTVFxuI2lmIERFQlVHTU9ERSAhPSA4OFxuaWYgKGFscGhhPEFMUEhBVEVTVFZBTFVFKVxuZGlzY2FyZDtcbiNlbmRpZlxuI2lmbmRlZiBBTFBIQUJMRU5EXG5hbHBoYT0xLjA7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5vdXRQYXJhbXMuc3VyZmFjZUFsYmVkbz1zdXJmYWNlQWxiZWRvO291dFBhcmFtcy5hbHBoYT1hbHBoYTtyZXR1cm4gb3V0UGFyYW1zO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tBbGJlZG9PcGFjaXR5ID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0FscGhhRnJlc25lbFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBBTFBIQUZSRVNORUxcbiNpZiBkZWZpbmVkKEFMUEhBVEVTVCkgfHwgZGVmaW5lZChBTFBIQUJMRU5EKVxuc3RydWN0IGFscGhhRnJlc25lbE91dFBhcmFtc1xue2Zsb2F0IGFscGhhO307XG4jZGVmaW5lIHBicl9pbmxpbmVcbmFscGhhRnJlc25lbE91dFBhcmFtcyBhbHBoYUZyZXNuZWxCbG9jayhcbmluIHZlYzMgbm9ybWFsVyxcbmluIHZlYzMgdmlld0RpcmVjdGlvblcsXG5pbiBmbG9hdCBhbHBoYSxcbmluIGZsb2F0IG1pY3JvU3VyZmFjZVxuKVxue2FscGhhRnJlc25lbE91dFBhcmFtcyBvdXRQYXJhbXM7ZmxvYXQgb3BhY2l0eVBlcmNlcHR1YWw9YWxwaGE7XG4jaWZkZWYgTElORUFSQUxQSEFGUkVTTkVMXG5mbG9hdCBvcGFjaXR5MD1vcGFjaXR5UGVyY2VwdHVhbDtcbiNlbHNlXG5mbG9hdCBvcGFjaXR5MD1vcGFjaXR5UGVyY2VwdHVhbCpvcGFjaXR5UGVyY2VwdHVhbDtcbiNlbmRpZlxuZmxvYXQgb3BhY2l0eTkwPWZyZXNuZWxHcmF6aW5nUmVmbGVjdGFuY2Uob3BhY2l0eTApO3ZlYzMgbm9ybWFsRm9yd2FyZD1mYWNlZm9yd2FyZChub3JtYWxXLC12aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtvdXRQYXJhbXMuYWxwaGE9Z2V0UmVmbGVjdGFuY2VGcm9tQW5hbHl0aWNhbEJSREZMb29rdXBfSm9uZXMoc2F0dXJhdGUoZG90KHZpZXdEaXJlY3Rpb25XLG5vcm1hbEZvcndhcmQpKSx2ZWMzKG9wYWNpdHkwKSx2ZWMzKG9wYWNpdHk5MCksc3FydChtaWNyb1N1cmZhY2UpKS54O1xuI2lmZGVmIEFMUEhBVEVTVFxuaWYgKG91dFBhcmFtcy5hbHBoYTxBTFBIQVRFU1RWQUxVRSlcbmRpc2NhcmQ7XG4jaWZuZGVmIEFMUEhBQkxFTkRcbm91dFBhcmFtcy5hbHBoYT0xLjA7XG4jZW5kaWZcbiNlbmRpZlxucmV0dXJuIG91dFBhcmFtczt9XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0FscGhhRnJlc25lbCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGFtYmllbnRPY2NsdXNpb25PdXRQYXJhbXNcbnt2ZWMzIGFtYmllbnRPY2NsdXNpb25Db2xvcjtcbiNpZiBERUJVR01PREU+MCAmJiBkZWZpbmVkKEFNQklFTlQpXG52ZWMzIGFtYmllbnRPY2NsdXNpb25Db2xvck1hcDtcbiNlbmRpZlxufTthbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zIGFtYmllbnRPY2NsdXNpb25CbG9jayhcbiNpZmRlZiBBTUJJRU5UXG5pbiB2ZWMzIGFtYmllbnRPY2NsdXNpb25Db2xvck1hcF8sXG5pbiB2ZWM0IHZBbWJpZW50SW5mb3NcbiNlbmRpZlxuKVxue2FtYmllbnRPY2NsdXNpb25PdXRQYXJhbXMgb3V0UGFyYW1zO3ZlYzMgYW1iaWVudE9jY2x1c2lvbkNvbG9yPXZlYzMoMS4sMS4sMS4pO1xuI2lmZGVmIEFNQklFTlRcbnZlYzMgYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPWFtYmllbnRPY2NsdXNpb25Db2xvck1hcF8qdkFtYmllbnRJbmZvcy55O1xuI2lmZGVmIEFNQklFTlRJTkdSQVlTQ0FMRVxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPXZlYzMoYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwLnIsYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwLnIsYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwLnIpO1xuI2VuZGlmXG5hbWJpZW50T2NjbHVzaW9uQ29sb3I9bWl4KGFtYmllbnRPY2NsdXNpb25Db2xvcixhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAsdkFtYmllbnRJbmZvcy56KTtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmFtYmllbnRPY2NsdXNpb25Db2xvck1hcD1hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXA7XG4jZW5kaWZcbiNlbmRpZlxub3V0UGFyYW1zLmFtYmllbnRPY2NsdXNpb25Db2xvcj1hbWJpZW50T2NjbHVzaW9uQ29sb3I7cmV0dXJuIG91dFBhcmFtczt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrQW1iaWVudE9jY2x1c2lvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tBbmlzb3Ryb3BpY1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBBTklTT1RST1BJQ1xuc3RydWN0IGFuaXNvdHJvcGljT3V0UGFyYW1zXG57ZmxvYXQgYW5pc290cm9weTt2ZWMzIGFuaXNvdHJvcGljVGFuZ2VudDt2ZWMzIGFuaXNvdHJvcGljQml0YW5nZW50O3ZlYzMgYW5pc290cm9waWNOb3JtYWw7XG4jaWYgREVCVUdNT0RFPjAgJiYgZGVmaW5lZChBTklTT1RST1BJQ19URVhUVVJFKVxudmVjMyBhbmlzb3Ryb3B5TWFwRGF0YTtcbiNlbmRpZlxufTtcbiNkZWZpbmUgcGJyX2lubGluZVxuYW5pc290cm9waWNPdXRQYXJhbXMgYW5pc290cm9waWNCbG9jayhcbmluIHZlYzMgdkFuaXNvdHJvcHksXG5pbiBmbG9hdCByb3VnaG5lc3MsXG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxuaW4gdmVjMyBhbmlzb3Ryb3B5TWFwRGF0YSxcbiNlbmRpZlxuaW4gbWF0MyBUQk4sXG5pbiB2ZWMzIG5vcm1hbFcsXG5pbiB2ZWMzIHZpZXdEaXJlY3Rpb25XXG4pXG57YW5pc290cm9waWNPdXRQYXJhbXMgb3V0UGFyYW1zO2Zsb2F0IGFuaXNvdHJvcHk9dkFuaXNvdHJvcHkuYjt2ZWMzIGFuaXNvdHJvcHlEaXJlY3Rpb249dmVjMyh2QW5pc290cm9weS54eSwwLik7XG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxuYW5pc290cm9weSo9YW5pc290cm9weU1hcERhdGEuYjtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmFuaXNvdHJvcHlNYXBEYXRhPWFuaXNvdHJvcHlNYXBEYXRhO1xuI2VuZGlmXG5hbmlzb3Ryb3B5TWFwRGF0YS5yZz1hbmlzb3Ryb3B5TWFwRGF0YS5yZyoyLjAtMS4wO1xuI2lmZGVmIEFOSVNPVFJPUElDX0xFR0FDWVxuYW5pc290cm9weURpcmVjdGlvbi5yZyo9YW5pc290cm9weU1hcERhdGEucmc7XG4jZWxzZVxuYW5pc290cm9weURpcmVjdGlvbi54eT1tYXQyKGFuaXNvdHJvcHlEaXJlY3Rpb24ueCxhbmlzb3Ryb3B5RGlyZWN0aW9uLnksLWFuaXNvdHJvcHlEaXJlY3Rpb24ueSxhbmlzb3Ryb3B5RGlyZWN0aW9uLngpKm5vcm1hbGl6ZShhbmlzb3Ryb3B5TWFwRGF0YS5yZyk7XG4jZW5kaWZcbiNlbmRpZlxubWF0MyBhbmlzb1RCTj1tYXQzKG5vcm1hbGl6ZShUQk5bMF0pLG5vcm1hbGl6ZShUQk5bMV0pLG5vcm1hbGl6ZShUQk5bMl0pKTt2ZWMzIGFuaXNvdHJvcGljVGFuZ2VudD1ub3JtYWxpemUoYW5pc29UQk4qYW5pc290cm9weURpcmVjdGlvbik7dmVjMyBhbmlzb3Ryb3BpY0JpdGFuZ2VudD1ub3JtYWxpemUoY3Jvc3MoYW5pc29UQk5bMl0sYW5pc290cm9waWNUYW5nZW50KSk7b3V0UGFyYW1zLmFuaXNvdHJvcHk9YW5pc290cm9weTtvdXRQYXJhbXMuYW5pc290cm9waWNUYW5nZW50PWFuaXNvdHJvcGljVGFuZ2VudDtvdXRQYXJhbXMuYW5pc290cm9waWNCaXRhbmdlbnQ9YW5pc290cm9waWNCaXRhbmdlbnQ7b3V0UGFyYW1zLmFuaXNvdHJvcGljTm9ybWFsPWdldEFuaXNvdHJvcGljQmVudE5vcm1hbHMoYW5pc290cm9waWNUYW5nZW50LGFuaXNvdHJvcGljQml0YW5nZW50LG5vcm1hbFcsdmlld0RpcmVjdGlvblcsYW5pc290cm9weSxyb3VnaG5lc3MpO3JldHVybiBvdXRQYXJhbXM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrQW5pc290cm9waWMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrQ2xlYXJjb2F0XCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGNsZWFyY29hdE91dFBhcmFtc1xue3ZlYzMgc3BlY3VsYXJFbnZpcm9ubWVudFIwO2Zsb2F0IGNvbnNlcnZhdGlvbkZhY3Rvcjt2ZWMzIGNsZWFyQ29hdE5vcm1hbFc7dmVjMiBjbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnM7ZmxvYXQgY2xlYXJDb2F0SW50ZW5zaXR5O2Zsb2F0IGNsZWFyQ29hdFJvdWdobmVzcztcbiNpZmRlZiBSRUZMRUNUSU9OXG52ZWMzIGZpbmFsQ2xlYXJDb2F0UmFkaWFuY2VTY2FsZWQ7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxudmVjMyBhYnNvcnB0aW9uO2Zsb2F0IGNsZWFyQ29hdE5kb3RWUmVmcmFjdDt2ZWMzIGNsZWFyQ29hdENvbG9yO2Zsb2F0IGNsZWFyQ29hdFRoaWNrbmVzcztcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTilcbnZlYzMgZW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yQ2xlYXJDb2F0O1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbiNpZmRlZiBDTEVBUkNPQVRfQlVNUFxubWF0MyBUQk5DbGVhckNvYXQ7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfVEVYVFVSRVxudmVjMiBjbGVhckNvYXRNYXBEYXRhO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVElOVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfVElOVF9URVhUVVJFKVxudmVjNCBjbGVhckNvYXRUaW50TWFwRGF0YTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbnZlYzQgZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZTt2ZWMzIGNsZWFyQ29hdEVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZW5kaWZcbmZsb2F0IGNsZWFyQ29hdE5kb3RWO1xuI2VuZGlmXG59O1xuI2lmZGVmIENMRUFSQ09BVFxuI2RlZmluZSBwYnJfaW5saW5lXG4jZGVmaW5lIGlubGluZVxuY2xlYXJjb2F0T3V0UGFyYW1zIGNsZWFyY29hdEJsb2NrKFxuaW4gdmVjMyB2UG9zaXRpb25XXG4saW4gdmVjMyBnZW9tZXRyaWNOb3JtYWxXXG4saW4gdmVjMyB2aWV3RGlyZWN0aW9uV1xuLGluIHZlYzIgdkNsZWFyQ29hdFBhcmFtc1xuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTKSAmJiAhZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1NfSURFTlRJQ0FMKSAmJiAhZGVmaW5lZChDTEVBUkNPQVRfVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxuLGluIHZlYzQgY2xlYXJDb2F0TWFwUm91Z2huZXNzRGF0YVxuI2VuZGlmXG4saW4gdmVjMyBzcGVjdWxhckVudmlyb25tZW50UjBcbiNpZmRlZiBDTEVBUkNPQVRfVEVYVFVSRVxuLGluIHZlYzIgY2xlYXJDb2F0TWFwRGF0YVxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRcbixpbiB2ZWM0IHZDbGVhckNvYXRUaW50UGFyYW1zXG4saW4gZmxvYXQgY2xlYXJDb2F0Q29sb3JBdERpc3RhbmNlXG4saW4gdmVjNCB2Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtc1xuI2lmZGVmIENMRUFSQ09BVF9USU5UX1RFWFRVUkVcbixpbiB2ZWM0IGNsZWFyQ29hdFRpbnRNYXBEYXRhXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9CVU1QXG4saW4gdmVjMiB2Q2xlYXJDb2F0QnVtcEluZm9zXG4saW4gdmVjNCBjbGVhckNvYXRCdW1wTWFwRGF0YVxuLGluIHZlYzIgdkNsZWFyQ29hdEJ1bXBVVlxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpXG4saW4gbWF0MyB2VEJOXG4jZWxzZVxuLGluIHZlYzIgdkNsZWFyQ29hdFRhbmdlbnRTcGFjZVBhcmFtc1xuI2VuZGlmXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG4saW4gbWF0NCBub3JtYWxNYXRyaXhcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChGT1JDRU5PUk1BTEZPUldBUkQpICYmIGRlZmluZWQoTk9STUFMKVxuLGluIHZlYzMgZmFjZU5vcm1hbFxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuLGluIHZlYzMgdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLGluIHZlYzIgdlJlZmxlY3Rpb25JbmZvc1xuLGluIHZlYzMgdlJlZmxlY3Rpb25Db2xvclxuLGluIHZlYzQgdkxpZ2h0aW5nSW50ZW5zaXR5XG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGluIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVyXG4jZWxzZVxuLGluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlclxuI2VuZGlmXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGluIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVyTG93XG4saW4gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJIaWdoXG4jZWxzZVxuLGluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckxvd1xuLGluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckhpZ2hcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4saW4gdmVjMiB2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChUV09TSURFRExJR0hUSU5HKVxuLGluIGZsb2F0IGZyb250RmFjaW5nTXVsdGlwbGllclxuI2VuZGlmXG4pXG57Y2xlYXJjb2F0T3V0UGFyYW1zIG91dFBhcmFtcztmbG9hdCBjbGVhckNvYXRJbnRlbnNpdHk9dkNsZWFyQ29hdFBhcmFtcy54O2Zsb2F0IGNsZWFyQ29hdFJvdWdobmVzcz12Q2xlYXJDb2F0UGFyYW1zLnk7XG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbmNsZWFyQ29hdEludGVuc2l0eSo9Y2xlYXJDb2F0TWFwRGF0YS54O1xuI2lmZGVmIENMRUFSQ09BVF9VU0VfUk9VR0hORVNTX0ZST01fTUFJTlRFWFRVUkVcbmNsZWFyQ29hdFJvdWdobmVzcyo9Y2xlYXJDb2F0TWFwRGF0YS55O1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5jbGVhckNvYXRNYXBEYXRhPWNsZWFyQ29hdE1hcERhdGE7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTKSAmJiAhZGVmaW5lZChDTEVBUkNPQVRfVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxuY2xlYXJDb2F0Um91Z2huZXNzKj1jbGVhckNvYXRNYXBSb3VnaG5lc3NEYXRhLnk7XG4jZW5kaWZcbm91dFBhcmFtcy5jbGVhckNvYXRJbnRlbnNpdHk9Y2xlYXJDb2F0SW50ZW5zaXR5O291dFBhcmFtcy5jbGVhckNvYXRSb3VnaG5lc3M9Y2xlYXJDb2F0Um91Z2huZXNzO1xuI2lmZGVmIENMRUFSQ09BVF9USU5UXG52ZWMzIGNsZWFyQ29hdENvbG9yPXZDbGVhckNvYXRUaW50UGFyYW1zLnJnYjtmbG9hdCBjbGVhckNvYXRUaGlja25lc3M9dkNsZWFyQ29hdFRpbnRQYXJhbXMuYTtcbiNpZmRlZiBDTEVBUkNPQVRfVElOVF9URVhUVVJFXG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRfR0FNTUFURVhUVVJFXG5jbGVhckNvYXRDb2xvcio9dG9MaW5lYXJTcGFjZShjbGVhckNvYXRUaW50TWFwRGF0YS5yZ2IpO1xuI2Vsc2VcbmNsZWFyQ29hdENvbG9yKj1jbGVhckNvYXRUaW50TWFwRGF0YS5yZ2I7XG4jZW5kaWZcbmNsZWFyQ29hdFRoaWNrbmVzcyo9Y2xlYXJDb2F0VGludE1hcERhdGEuYTtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmNsZWFyQ29hdFRpbnRNYXBEYXRhPWNsZWFyQ29hdFRpbnRNYXBEYXRhO1xuI2VuZGlmXG4jZW5kaWZcbm91dFBhcmFtcy5jbGVhckNvYXRDb2xvcj1jb21wdXRlQ29sb3JBdERpc3RhbmNlSW5NZWRpYShjbGVhckNvYXRDb2xvcixjbGVhckNvYXRDb2xvckF0RGlzdGFuY2UpO291dFBhcmFtcy5jbGVhckNvYXRUaGlja25lc3M9Y2xlYXJDb2F0VGhpY2tuZXNzO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1JFTUFQX0YwXG52ZWMzIHNwZWN1bGFyRW52aXJvbm1lbnRSMFVwZGF0ZWQ9Z2V0UjBSZW1hcHBlZEZvckNsZWFyQ29hdChzcGVjdWxhckVudmlyb25tZW50UjApO1xuI2Vsc2VcbnZlYzMgc3BlY3VsYXJFbnZpcm9ubWVudFIwVXBkYXRlZD1zcGVjdWxhckVudmlyb25tZW50UjA7XG4jZW5kaWZcbm91dFBhcmFtcy5zcGVjdWxhckVudmlyb25tZW50UjA9bWl4KHNwZWN1bGFyRW52aXJvbm1lbnRSMCxzcGVjdWxhckVudmlyb25tZW50UjBVcGRhdGVkLGNsZWFyQ29hdEludGVuc2l0eSk7dmVjMyBjbGVhckNvYXROb3JtYWxXPWdlb21ldHJpY05vcm1hbFc7XG4jaWZkZWYgQ0xFQVJDT0FUX0JVTVBcbiNpZmRlZiBOT1JNQUxYWVNDQUxFXG5mbG9hdCBjbGVhckNvYXROb3JtYWxTY2FsZT0xLjA7XG4jZWxzZVxuZmxvYXQgY2xlYXJDb2F0Tm9ybWFsU2NhbGU9dkNsZWFyQ29hdEJ1bXBJbmZvcy55O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbm1hdDMgVEJOQ2xlYXJDb2F0PXZUQk47XG4jZWxzZVxudmVjMiBUQk5DbGVhckNvYXRVVj12Q2xlYXJDb2F0QnVtcFVWKmZyb250RmFjaW5nTXVsdGlwbGllcjttYXQzIFRCTkNsZWFyQ29hdD1jb3RhbmdlbnRfZnJhbWUoY2xlYXJDb2F0Tm9ybWFsVypjbGVhckNvYXROb3JtYWxTY2FsZSx2UG9zaXRpb25XLFRCTkNsZWFyQ29hdFVWLHZDbGVhckNvYXRUYW5nZW50U3BhY2VQYXJhbXMpO1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5UQk5DbGVhckNvYXQ9VEJOQ2xlYXJDb2F0O1xuI2VuZGlmXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG5jbGVhckNvYXROb3JtYWxXPW5vcm1hbGl6ZShjbGVhckNvYXRCdW1wTWFwRGF0YS54eXogKjIuMC0xLjApO2NsZWFyQ29hdE5vcm1hbFc9bm9ybWFsaXplKG1hdDMobm9ybWFsTWF0cml4KSpjbGVhckNvYXROb3JtYWxXKTtcbiNlbHNlXG5jbGVhckNvYXROb3JtYWxXPXBlcnR1cmJOb3JtYWwoVEJOQ2xlYXJDb2F0LGNsZWFyQ29hdEJ1bXBNYXBEYXRhLnh5eix2Q2xlYXJDb2F0QnVtcEluZm9zLnkpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEZPUkNFTk9STUFMRk9SV0FSRCkgJiYgZGVmaW5lZChOT1JNQUwpXG5jbGVhckNvYXROb3JtYWxXKj1zaWduKGRvdChjbGVhckNvYXROb3JtYWxXLGZhY2VOb3JtYWwpKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVFdPU0lERURMSUdIVElORykgJiYgZGVmaW5lZChOT1JNQUwpXG5jbGVhckNvYXROb3JtYWxXPWNsZWFyQ29hdE5vcm1hbFcqZnJvbnRGYWNpbmdNdWx0aXBsaWVyO1xuI2VuZGlmXG5vdXRQYXJhbXMuY2xlYXJDb2F0Tm9ybWFsVz1jbGVhckNvYXROb3JtYWxXO291dFBhcmFtcy5jbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnM9Z2V0QUFSb3VnaG5lc3NGYWN0b3JzKGNsZWFyQ29hdE5vcm1hbFcueHl6KTtmbG9hdCBjbGVhckNvYXROZG90VlVuY2xhbXBlZD1kb3QoY2xlYXJDb2F0Tm9ybWFsVyx2aWV3RGlyZWN0aW9uVyk7ZmxvYXQgY2xlYXJDb2F0TmRvdFY9YWJzRXBzKGNsZWFyQ29hdE5kb3RWVW5jbGFtcGVkKTtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmNsZWFyQ29hdE5kb3RWPWNsZWFyQ29hdE5kb3RWO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRcbnZlYzMgY2xlYXJDb2F0VlJlZnJhY3Q9cmVmcmFjdCgtdmlld0RpcmVjdGlvblcsY2xlYXJDb2F0Tm9ybWFsVyx2Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtcy55KTtvdXRQYXJhbXMuY2xlYXJDb2F0TmRvdFZSZWZyYWN0PWFic0Vwcyhkb3QoY2xlYXJDb2F0Tm9ybWFsVyxjbGVhckNvYXRWUmVmcmFjdCkpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICghZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWCkgfHwgZGVmaW5lZChNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT04pKVxudmVjMyBlbnZpcm9ubWVudENsZWFyQ29hdEJyZGY9Z2V0QlJERkxvb2t1cChjbGVhckNvYXROZG90VixjbGVhckNvYXRSb3VnaG5lc3MpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OKVxuZmxvYXQgY2xlYXJDb2F0QWxwaGFHPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShjbGVhckNvYXRSb3VnaG5lc3MpO1xuI2lmZGVmIFNQRUNVTEFSQUFcbmNsZWFyQ29hdEFscGhhRys9b3V0UGFyYW1zLmNsZWFyQ29hdEFBUm91Z2huZXNzRmFjdG9ycy55O1xuI2VuZGlmXG52ZWM0IGVudmlyb25tZW50Q2xlYXJDb2F0UmFkaWFuY2U9dmVjNCgwLiwwLiwwLiwwLik7dmVjMyBjbGVhckNvYXRSZWZsZWN0aW9uVmVjdG9yPWNvbXB1dGVSZWZsZWN0aW9uQ29vcmRzKHZlYzQodlBvc2l0aW9uVywxLjApLGNsZWFyQ29hdE5vcm1hbFcpO1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG5jbGVhckNvYXRSZWZsZWN0aW9uVmVjdG9yLnoqPS0xLjA7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52ZWMzIGNsZWFyQ29hdFJlZmxlY3Rpb25Db29yZHM9Y2xlYXJDb2F0UmVmbGVjdGlvblZlY3RvcjtcbiNlbHNlXG52ZWMyIGNsZWFyQ29hdFJlZmxlY3Rpb25Db29yZHM9Y2xlYXJDb2F0UmVmbGVjdGlvblZlY3Rvci54eTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1BST0pFQ1RJT05cbmNsZWFyQ29hdFJlZmxlY3Rpb25Db29yZHMvPWNsZWFyQ29hdFJlZmxlY3Rpb25WZWN0b3IuejtcbiNlbmRpZlxuY2xlYXJDb2F0UmVmbGVjdGlvbkNvb3Jkcy55PTEuMC1jbGVhckNvYXRSZWZsZWN0aW9uQ29vcmRzLnk7XG4jZW5kaWZcbnNhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuY2xlYXJDb2F0QWxwaGFHLFxudlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcyxcbnZSZWZsZWN0aW9uSW5mb3MsXG52UmVmbGVjdGlvbkNvbG9yLFxuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuY2xlYXJDb2F0TmRvdFZVbmNsYW1wZWQsXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbmNsZWFyQ29hdFJvdWdobmVzcyxcbiNlbmRpZlxucmVmbGVjdGlvblNhbXBsZXIsXG5jbGVhckNvYXRSZWZsZWN0aW9uQ29vcmRzLFxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxucmVmbGVjdGlvblNhbXBsZXJMb3csXG5yZWZsZWN0aW9uU2FtcGxlckhpZ2gsXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbyxcbiNlbmRpZlxuZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZVxuKTtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmVudmlyb25tZW50Q2xlYXJDb2F0UmFkaWFuY2U9ZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbnZlYzMgY2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZT1nZXRSZWZsZWN0YW5jZUZyb21CUkRGTG9va3VwKHZlYzModkNsZWFyQ29hdFJlZnJhY3Rpb25QYXJhbXMueCksZW52aXJvbm1lbnRDbGVhckNvYXRCcmRmKTtcbiNpZmRlZiBIT1JJWk9OT0NDTFVTSU9OXG4jaWZkZWYgQlVNUFxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbmZsb2F0IGNsZWFyQ29hdEVobz1lbnZpcm9ubWVudEhvcml6b25PY2NsdXNpb24oLXZpZXdEaXJlY3Rpb25XLGNsZWFyQ29hdE5vcm1hbFcsZ2VvbWV0cmljTm9ybWFsVyk7Y2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZSo9Y2xlYXJDb2F0RWhvO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2Vsc2VcbnZlYzMgY2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZT1nZXRSZWZsZWN0YW5jZUZyb21BbmFseXRpY2FsQlJERkxvb2t1cF9Kb25lcyhjbGVhckNvYXROZG90Vix2ZWMzKDEuKSx2ZWMzKDEuKSxzcXJ0KDEuLWNsZWFyQ29hdFJvdWdobmVzcykpO1xuI2VuZGlmXG5jbGVhckNvYXRFbnZpcm9ubWVudFJlZmxlY3RhbmNlKj1jbGVhckNvYXRJbnRlbnNpdHk7XG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5jbGVhckNvYXRFbnZpcm9ubWVudFJlZmxlY3RhbmNlPWNsZWFyQ29hdEVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZW5kaWZcbm91dFBhcmFtcy5maW5hbENsZWFyQ29hdFJhZGlhbmNlU2NhbGVkPVxuZW52aXJvbm1lbnRDbGVhckNvYXRSYWRpYW5jZS5yZ2IgKlxuY2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZSAqXG52TGlnaHRpbmdJbnRlbnNpdHkuejtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RJTlQpXG5vdXRQYXJhbXMuYWJzb3JwdGlvbj1jb21wdXRlQ2xlYXJDb2F0QWJzb3JwdGlvbihvdXRQYXJhbXMuY2xlYXJDb2F0TmRvdFZSZWZyYWN0LG91dFBhcmFtcy5jbGVhckNvYXROZG90VlJlZnJhY3Qsb3V0UGFyYW1zLmNsZWFyQ29hdENvbG9yLGNsZWFyQ29hdFRoaWNrbmVzcyxjbGVhckNvYXRJbnRlbnNpdHkpO1xuI2VuZGlmXG5mbG9hdCBmcmVzbmVsSUJMQ2xlYXJDb2F0PWZyZXNuZWxTY2hsaWNrR0dYKGNsZWFyQ29hdE5kb3RWLHZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zLngsQ0xFQVJDT0FUUkVGTEVDVEFOQ0U5MCk7ZnJlc25lbElCTENsZWFyQ29hdCo9Y2xlYXJDb2F0SW50ZW5zaXR5O291dFBhcmFtcy5jb25zZXJ2YXRpb25GYWN0b3I9KDEuLWZyZXNuZWxJQkxDbGVhckNvYXQpO1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTilcbm91dFBhcmFtcy5lbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3JDbGVhckNvYXQ9Z2V0RW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yKG91dFBhcmFtcy5zcGVjdWxhckVudmlyb25tZW50UjAsZW52aXJvbm1lbnRDbGVhckNvYXRCcmRmKTtcbiNlbmRpZlxucmV0dXJuIG91dFBhcmFtczt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tDbGVhcmNvYXQgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrRGlyZWN0TGlnaHRpbmdcIjtcbmNvbnN0IHNoYWRlciA9IGB2ZWMzIGRpZmZ1c2VCYXNlPXZlYzMoMC4sMC4sMC4pO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxudmVjMyBkaWZmdXNlVHJhbnNtaXNzaW9uQmFzZT12ZWMzKDAuLDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMyBzcGVjdWxhckJhc2U9dmVjMygwLiwwLiwwLik7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbnZlYzMgY2xlYXJDb2F0QmFzZT12ZWMzKDAuLDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG52ZWMzIHNoZWVuQmFzZT12ZWMzKDAuLDAuLDAuKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1BFQ1VMQVJURVJNKSAmJiBkZWZpbmVkKExJR0hUMClcbnZlYzMgY29sb3JlZEZyZXNuZWw7XG4jZW5kaWZcbnByZUxpZ2h0aW5nSW5mbyBwcmVJbmZvO2xpZ2h0aW5nSW5mbyBpbmZvO2Zsb2F0IHNoYWRvdz0xLjsgXG5mbG9hdCBhZ2dTaGFkb3c9MC47ZmxvYXQgbnVtTGlnaHRzPTAuO1xuI2lmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKVxudmVjMyBhYnNvcnB0aW9uPXZlYzMoMC4pO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrRGlyZWN0TGlnaHRpbmcgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrRmluYWxDb2xvckNvbXBvc2l0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdmVjNCBmaW5hbENvbG9yPXZlYzQoXG4jaWZuZGVmIFVOTElUXG4jaWZkZWYgUkVGTEVDVElPTlxuZmluYWxJcnJhZGlhbmNlICtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuZmluYWxTcGVjdWxhclNjYWxlZCArXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuZmluYWxTaGVlblNjYWxlZCArXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbmZpbmFsQ2xlYXJDb2F0U2NhbGVkICtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbmZpbmFsUmFkaWFuY2VTY2FsZWQgK1xuI2lmIGRlZmluZWQoU0hFRU4pICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuc2hlZW5PdXQuZmluYWxTaGVlblJhZGlhbmNlU2NhbGVkICtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuY2xlYXJjb2F0T3V0LmZpbmFsQ2xlYXJDb2F0UmFkaWFuY2VTY2FsZWQgK1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG5zdWJTdXJmYWNlT3V0LmZpbmFsUmVmcmFjdGlvbiArXG4jZW5kaWZcbiNlbmRpZlxuZmluYWxBbWJpZW50ICtcbmZpbmFsRGlmZnVzZSxcbmFscGhhKTtcbiNpZmRlZiBMSUdIVE1BUFxuI2lmbmRlZiBMSUdIVE1BUEVYQ0xVREVEXG4jaWZkZWYgVVNFTElHSFRNQVBBU1NIQURPV01BUFxuZmluYWxDb2xvci5yZ2IqPWxpZ2h0bWFwQ29sb3IucmdiO1xuI2Vsc2VcbmZpbmFsQ29sb3IucmdiKz1saWdodG1hcENvbG9yLnJnYjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmZpbmFsQ29sb3IucmdiKz1maW5hbEVtaXNzaXZlO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0ZPR1xuZmluYWxDb2xvcj1tYXgoZmluYWxDb2xvciwwLjApO1xuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0ZpbmFsQ29sb3JDb21wb3NpdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tGaW5hbExpdENvbXBvbmVudHNcIjtcbmNvbnN0IHNoYWRlciA9IGBhZ2dTaGFkb3c9YWdnU2hhZG93L251bUxpZ2h0cztcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERilcbiNpZmRlZiBNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT05cbnZlYzMgYmFzZVNwZWN1bGFyRW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yPWdldEVuZXJneUNvbnNlcnZhdGlvbkZhY3Rvcih2ZWMzKHJlZmxlY3RhbmNlRjApLGVudmlyb25tZW50QnJkZik7dmVjMyBjb2xvcmVkRW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yPWdldEVuZXJneUNvbnNlcnZhdGlvbkZhY3RvcihjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLGVudmlyb25tZW50QnJkZik7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoU0hFRU4pICYmIGRlZmluZWQoU0hFRU5fQUxCRURPU0NBTElORykgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG5zdXJmYWNlQWxiZWRvLnJnYj1zaGVlbk91dC5zaGVlbkFsYmVkb1NjYWxpbmcqc3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbiNpZmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxuI2lmbmRlZiBNRVRBTExJQ1dPUktGTE9XXG4jaWZkZWYgU1BFQ1VMQVJfR0xPU1NJTkVTU19FTkVSR1lfQ09OU0VSVkFUSU9OXG5zdXJmYWNlQWxiZWRvLnJnYj0oMS4tcmVmbGVjdGFuY2VGMCkqc3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxudmVjMyBmaW5hbElycmFkaWFuY2U9cmVmbGVjdGlvbk91dC5lbnZpcm9ubWVudElycmFkaWFuY2U7XG4jaWZuZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG4jaWYgZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKSB8fCBkZWZpbmVkKFNQRUNVTEFSX0dMT1NTSU5FU1NfRU5FUkdZX0NPTlNFUlZBVElPTilcbnZlYzMgYmFzZVNwZWN1bGFyRW5lcmd5PXZlYzMoYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSk7XG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG4jaWZkZWYgTVNfQlJERl9FTkVSR1lfQ09OU0VSVkFUSU9OXG5iYXNlU3BlY3VsYXJFbmVyZ3kqPWJhc2VTcGVjdWxhckVuZXJneUNvbnNlcnZhdGlvbkZhY3RvcjtcbiNlbmRpZlxuI2VuZGlmXG5maW5hbElycmFkaWFuY2UqPWNsYW1wKHZlYzMoMS4wKS1iYXNlU3BlY3VsYXJFbmVyZ3ksMC4wLDEuMCk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUKVxuZmluYWxJcnJhZGlhbmNlKj1jbGVhcmNvYXRPdXQuY29uc2VydmF0aW9uRmFjdG9yO1xuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RJTlQpXG5maW5hbElycmFkaWFuY2UqPWNsZWFyY29hdE91dC5hYnNvcnB0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbiNpZm5kZWYgU1NfQVBQTFlfQUxCRURPX0FGVEVSX1NVQlNVUkZBQ0VcbmZpbmFsSXJyYWRpYW5jZSo9c3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pXG5maW5hbElycmFkaWFuY2UqPXN1YlN1cmZhY2VPdXQucmVmcmFjdGlvbk9wYWNpdHk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWSlcbmZpbmFsSXJyYWRpYW5jZSo9KDEuMC1zdWJTdXJmYWNlT3V0LnRyYW5zbHVjZW5jeUludGVuc2l0eSk7ZmluYWxJcnJhZGlhbmNlKz1zdWJTdXJmYWNlT3V0LnJlZnJhY3Rpb25JcnJhZGlhbmNlO1xuI2VuZGlmXG4jaWZkZWYgU1NfQVBQTFlfQUxCRURPX0FGVEVSX1NVQlNVUkZBQ0VcbmZpbmFsSXJyYWRpYW5jZSo9c3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbmZpbmFsSXJyYWRpYW5jZSo9dkxpZ2h0aW5nSW50ZW5zaXR5Lno7ZmluYWxJcnJhZGlhbmNlKj1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnZlYzMgZmluYWxTcGVjdWxhcj1zcGVjdWxhckJhc2U7ZmluYWxTcGVjdWxhcj1tYXgoZmluYWxTcGVjdWxhciwwLjApO3ZlYzMgZmluYWxTcGVjdWxhclNjYWxlZD1maW5hbFNwZWN1bGFyKnZMaWdodGluZ0ludGVuc2l0eS54KnZMaWdodGluZ0ludGVuc2l0eS53O1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTilcbmZpbmFsU3BlY3VsYXJTY2FsZWQqPWNvbG9yZWRFbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3I7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNIRUVOKSAmJiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChTSEVFTl9BTEJFRE9TQ0FMSU5HKVxuZmluYWxTcGVjdWxhclNjYWxlZCo9c2hlZW5PdXQuc2hlZW5BbGJlZG9TY2FsaW5nO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG52ZWMzIGZpbmFsUmFkaWFuY2U9cmVmbGVjdGlvbk91dC5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYjtmaW5hbFJhZGlhbmNlKj1jb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTt2ZWMzIGZpbmFsUmFkaWFuY2VTY2FsZWQ9ZmluYWxSYWRpYW5jZSp2TGlnaHRpbmdJbnRlbnNpdHkuejtcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT04pXG5maW5hbFJhZGlhbmNlU2NhbGVkKj1jb2xvcmVkRW5lcmd5Q29uc2VydmF0aW9uRmFjdG9yO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTSEVFTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmIGRlZmluZWQoU0hFRU5fQUxCRURPU0NBTElORylcbmZpbmFsUmFkaWFuY2VTY2FsZWQqPXNoZWVuT3V0LnNoZWVuQWxiZWRvU2NhbGluZztcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnZlYzMgZmluYWxTaGVlbj1zaGVlbkJhc2Uqc2hlZW5PdXQuc2hlZW5Db2xvcjtmaW5hbFNoZWVuPW1heChmaW5hbFNoZWVuLDAuMCk7dmVjMyBmaW5hbFNoZWVuU2NhbGVkPWZpbmFsU2hlZW4qdkxpZ2h0aW5nSW50ZW5zaXR5LngqdkxpZ2h0aW5nSW50ZW5zaXR5Lnc7XG4jaWYgZGVmaW5lZChDTEVBUkNPQVQpICYmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG5zaGVlbk91dC5maW5hbFNoZWVuUmFkaWFuY2VTY2FsZWQqPWNsZWFyY29hdE91dC5jb25zZXJ2YXRpb25GYWN0b3I7XG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVElOVClcbnNoZWVuT3V0LmZpbmFsU2hlZW5SYWRpYW5jZVNjYWxlZCo9Y2xlYXJjb2F0T3V0LmFic29ycHRpb247XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG52ZWMzIGZpbmFsQ2xlYXJDb2F0PWNsZWFyQ29hdEJhc2U7ZmluYWxDbGVhckNvYXQ9bWF4KGZpbmFsQ2xlYXJDb2F0LDAuMCk7dmVjMyBmaW5hbENsZWFyQ29hdFNjYWxlZD1maW5hbENsZWFyQ29hdCp2TGlnaHRpbmdJbnRlbnNpdHkueCp2TGlnaHRpbmdJbnRlbnNpdHkudztcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChNU19CUkRGX0VORVJHWV9DT05TRVJWQVRJT04pXG5maW5hbENsZWFyQ29hdFNjYWxlZCo9Y2xlYXJjb2F0T3V0LmVuZXJneUNvbnNlcnZhdGlvbkZhY3RvckNsZWFyQ29hdDtcbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbnN1YlN1cmZhY2VPdXQuZmluYWxSZWZyYWN0aW9uKj1jbGVhcmNvYXRPdXQuY29uc2VydmF0aW9uRmFjdG9yO1xuI2lmZGVmIENMRUFSQ09BVF9USU5UXG5zdWJTdXJmYWNlT3V0LmZpbmFsUmVmcmFjdGlvbio9Y2xlYXJjb2F0T3V0LmFic29ycHRpb247XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQUxQSEFCTEVORFxuZmxvYXQgbHVtaW5hbmNlT3ZlckFscGhhPTAuMDtcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT04pICYmIGRlZmluZWQoUkFESUFOQ0VPVkVSQUxQSEEpXG5sdW1pbmFuY2VPdmVyQWxwaGErPWdldEx1bWluYW5jZShmaW5hbFJhZGlhbmNlU2NhbGVkKTtcbiNpZiBkZWZpbmVkKENMRUFSQ09BVClcbmx1bWluYW5jZU92ZXJBbHBoYSs9Z2V0THVtaW5hbmNlKGNsZWFyY29hdE91dC5maW5hbENsZWFyQ29hdFJhZGlhbmNlU2NhbGVkKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTUEVDVUxBUlRFUk0pICYmIGRlZmluZWQoU1BFQ1VMQVJPVkVSQUxQSEEpXG5sdW1pbmFuY2VPdmVyQWxwaGErPWdldEx1bWluYW5jZShmaW5hbFNwZWN1bGFyU2NhbGVkKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKENMRUFSQ09BVE9WRVJBTFBIQSlcbmx1bWluYW5jZU92ZXJBbHBoYSs9Z2V0THVtaW5hbmNlKGZpbmFsQ2xlYXJDb2F0U2NhbGVkKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkFESUFOQ0VPVkVSQUxQSEEpIHx8IGRlZmluZWQoU1BFQ1VMQVJPVkVSQUxQSEEpIHx8IGRlZmluZWQoQ0xFQVJDT0FUT1ZFUkFMUEhBKVxuYWxwaGE9c2F0dXJhdGUoYWxwaGErbHVtaW5hbmNlT3ZlckFscGhhKmx1bWluYW5jZU92ZXJBbHBoYSk7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0ZpbmFsTGl0Q29tcG9uZW50cyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50c1wiO1xuY29uc3Qgc2hhZGVyID0gYHZlYzMgZmluYWxEaWZmdXNlPWRpZmZ1c2VCYXNlO2ZpbmFsRGlmZnVzZSo9c3VyZmFjZUFsYmVkbztcbiNpZiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pICYmICFkZWZpbmVkKFVOTElUKSAmJiAhZGVmaW5lZChMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTilcbmZpbmFsRGlmZnVzZSo9c3ViU3VyZmFjZU91dC5yZWZyYWN0aW9uT3BhY2l0eTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZKSAmJiAhZGVmaW5lZChVTkxJVClcbmZpbmFsRGlmZnVzZSs9ZGlmZnVzZVRyYW5zbWlzc2lvbkJhc2U7XG4jZW5kaWZcbmZpbmFsRGlmZnVzZT1tYXgoZmluYWxEaWZmdXNlLDAuMCk7ZmluYWxEaWZmdXNlKj12TGlnaHRpbmdJbnRlbnNpdHkueDt2ZWMzIGZpbmFsQW1iaWVudD12QW1iaWVudENvbG9yO2ZpbmFsQW1iaWVudCo9c3VyZmFjZUFsYmVkby5yZ2I7dmVjMyBmaW5hbEVtaXNzaXZlPXZFbWlzc2l2ZUNvbG9yO1xuI2lmZGVmIEVNSVNTSVZFXG52ZWMzIGVtaXNzaXZlQ29sb3JUZXg9dGV4dHVyZTJEKGVtaXNzaXZlU2FtcGxlcix2RW1pc3NpdmVVVit1dk9mZnNldCkucmdiO1xuI2lmZGVmIEdBTU1BRU1JU1NJVkVcbmZpbmFsRW1pc3NpdmUqPXRvTGluZWFyU3BhY2UoZW1pc3NpdmVDb2xvclRleC5yZ2IpO1xuI2Vsc2VcbmZpbmFsRW1pc3NpdmUqPWVtaXNzaXZlQ29sb3JUZXgucmdiO1xuI2VuZGlmXG5maW5hbEVtaXNzaXZlKj0gdkVtaXNzaXZlSW5mb3MueTtcbiNlbmRpZlxuZmluYWxFbWlzc2l2ZSo9dkxpZ2h0aW5nSW50ZW5zaXR5Lnk7XG4jaWZkZWYgQU1CSUVOVFxudmVjMyBhbWJpZW50T2NjbHVzaW9uRm9yRGlyZWN0RGlmZnVzZT1taXgodmVjMygxLiksYW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yLHZBbWJpZW50SW5mb3Mudyk7XG4jZWxzZVxudmVjMyBhbWJpZW50T2NjbHVzaW9uRm9yRGlyZWN0RGlmZnVzZT1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jZW5kaWZcbmZpbmFsQW1iaWVudCo9YW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yO2ZpbmFsRGlmZnVzZSo9YW1iaWVudE9jY2x1c2lvbkZvckRpcmVjdERpZmZ1c2U7XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrRmluYWxVbmxpdENvbXBvbmVudHMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrR2VvbWV0cnlJbmZvXCI7XG5jb25zdCBzaGFkZXIgPSBgZmxvYXQgTmRvdFZVbmNsYW1wZWQ9ZG90KG5vcm1hbFcsdmlld0RpcmVjdGlvblcpO2Zsb2F0IE5kb3RWPWFic0VwcyhOZG90VlVuY2xhbXBlZCk7ZmxvYXQgYWxwaGFHPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShyb3VnaG5lc3MpO3ZlYzIgQUFSb3VnaG5lc3NGYWN0b3JzPWdldEFBUm91Z2huZXNzRmFjdG9ycyhub3JtYWxXLnh5eik7XG4jaWZkZWYgU1BFQ1VMQVJBQVxuYWxwaGFHKz1BQVJvdWdobmVzc0ZhY3RvcnMueTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxudmVjMyBlbnZpcm9ubWVudEJyZGY9Z2V0QlJERkxvb2t1cChOZG90Vixyb3VnaG5lc3MpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuI2lmZGVmIFJBRElBTkNFT0NDTFVTSU9OXG4jaWZkZWYgQU1CSUVOVElOR1JBWVNDQUxFXG5mbG9hdCBhbWJpZW50TW9ub2Nocm9tZT1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3IucjtcbiNlbHNlXG5mbG9hdCBhbWJpZW50TW9ub2Nocm9tZT1nZXRMdW1pbmFuY2UoYW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yKTtcbiNlbmRpZlxuZmxvYXQgc2VvPWVudmlyb25tZW50UmFkaWFuY2VPY2NsdXNpb24oYW1iaWVudE1vbm9jaHJvbWUsTmRvdFZVbmNsYW1wZWQpO1xuI2VuZGlmXG4jaWZkZWYgSE9SSVpPTk9DQ0xVU0lPTlxuI2lmZGVmIEJVTVBcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG5mbG9hdCBlaG89ZW52aXJvbm1lbnRIb3Jpem9uT2NjbHVzaW9uKC12aWV3RGlyZWN0aW9uVyxub3JtYWxXLGdlb21ldHJpY05vcm1hbFcpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrR2VvbWV0cnlJbmZvID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0lyaWRlc2NlbmNlXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IGlyaWRlc2NlbmNlT3V0UGFyYW1zXG57ZmxvYXQgaXJpZGVzY2VuY2VJbnRlbnNpdHk7ZmxvYXQgaXJpZGVzY2VuY2VJT1I7ZmxvYXQgaXJpZGVzY2VuY2VUaGlja25lc3M7dmVjMyBzcGVjdWxhckVudmlyb25tZW50UjA7fTtcbiNpZmRlZiBJUklERVNDRU5DRVxuI2RlZmluZSBwYnJfaW5saW5lXG4jZGVmaW5lIGlubGluZVxuaXJpZGVzY2VuY2VPdXRQYXJhbXMgaXJpZGVzY2VuY2VCbG9jayhcbmluIHZlYzQgdklyaWRlc2NlbmNlUGFyYW1zXG4saW4gZmxvYXQgdmlld0FuZ2xlXG4saW4gdmVjMyBzcGVjdWxhckVudmlyb25tZW50UjBcbiNpZmRlZiBJUklERVNDRU5DRV9URVhUVVJFXG4saW4gdmVjMiBpcmlkZXNjZW5jZU1hcERhdGFcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFXG4saW4gdmVjMiBpcmlkZXNjZW5jZVRoaWNrbmVzc01hcERhdGFcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuLGluIGZsb2F0IE5kb3RWVW5jbGFtcGVkXG4saW4gdmVjMiB2Q2xlYXJDb2F0UGFyYW1zXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbixpbiB2ZWMyIGNsZWFyQ29hdE1hcERhdGFcbiNlbmRpZlxuI2VuZGlmXG4pXG57aXJpZGVzY2VuY2VPdXRQYXJhbXMgb3V0UGFyYW1zO2Zsb2F0IGlyaWRlc2NlbmNlSW50ZW5zaXR5PXZJcmlkZXNjZW5jZVBhcmFtcy54O2Zsb2F0IGlyaWRlc2NlbmNlSU9SPXZJcmlkZXNjZW5jZVBhcmFtcy55O2Zsb2F0IGlyaWRlc2NlbmNlVGhpY2tuZXNzTWluPXZJcmlkZXNjZW5jZVBhcmFtcy56O2Zsb2F0IGlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4PXZJcmlkZXNjZW5jZVBhcmFtcy53O2Zsb2F0IGlyaWRlc2NlbmNlVGhpY2tuZXNzV2VpZ2h0PTEuO1xuI2lmZGVmIElSSURFU0NFTkNFX1RFWFRVUkVcbmlyaWRlc2NlbmNlSW50ZW5zaXR5Kj1pcmlkZXNjZW5jZU1hcERhdGEueDtcbiNlbmRpZlxuI2lmIGRlZmluZWQoSVJJREVTQ0VOQ0VfVEhJQ0tORVNTX1RFWFRVUkUpXG5pcmlkZXNjZW5jZVRoaWNrbmVzc1dlaWdodD1pcmlkZXNjZW5jZVRoaWNrbmVzc01hcERhdGEuZztcbiNlbmRpZlxuZmxvYXQgaXJpZGVzY2VuY2VUaGlja25lc3M9bWl4KGlyaWRlc2NlbmNlVGhpY2tuZXNzTWluLGlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4LGlyaWRlc2NlbmNlVGhpY2tuZXNzV2VpZ2h0KTtmbG9hdCB0b3BJb3I9MS47IFxuI2lmZGVmIENMRUFSQ09BVFxuZmxvYXQgY2xlYXJDb2F0SW50ZW5zaXR5PXZDbGVhckNvYXRQYXJhbXMueDtcbiNpZmRlZiBDTEVBUkNPQVRfVEVYVFVSRVxuY2xlYXJDb2F0SW50ZW5zaXR5Kj1jbGVhckNvYXRNYXBEYXRhLng7XG4jZW5kaWZcbnRvcElvcj1taXgoMS4wLHZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zLnctMS4sY2xlYXJDb2F0SW50ZW5zaXR5KTt2aWV3QW5nbGU9c3FydCgxLjArc3F1YXJlKDEuMC90b3BJb3IpKihzcXVhcmUoTmRvdFZVbmNsYW1wZWQpLTEuMCkpO1xuI2VuZGlmXG52ZWMzIGlyaWRlc2NlbmNlRnJlc25lbD1ldmFsSXJpZGVzY2VuY2UodG9wSW9yLGlyaWRlc2NlbmNlSU9SLHZpZXdBbmdsZSxpcmlkZXNjZW5jZVRoaWNrbmVzcyxzcGVjdWxhckVudmlyb25tZW50UjApO291dFBhcmFtcy5zcGVjdWxhckVudmlyb25tZW50UjA9bWl4KHNwZWN1bGFyRW52aXJvbm1lbnRSMCxpcmlkZXNjZW5jZUZyZXNuZWwsaXJpZGVzY2VuY2VJbnRlbnNpdHkpO291dFBhcmFtcy5pcmlkZXNjZW5jZUludGVuc2l0eT1pcmlkZXNjZW5jZUludGVuc2l0eTtvdXRQYXJhbXMuaXJpZGVzY2VuY2VUaGlja25lc3M9aXJpZGVzY2VuY2VUaGlja25lc3M7b3V0UGFyYW1zLmlyaWRlc2NlbmNlSU9SPWlyaWRlc2NlbmNlSU9SO3JldHVybiBvdXRQYXJhbXM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrSXJpZGVzY2VuY2UgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrTGlnaHRtYXBJbml0XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIExJR0hUTUFQXG52ZWM0IGxpZ2h0bWFwQ29sb3I9dGV4dHVyZTJEKGxpZ2h0bWFwU2FtcGxlcix2TGlnaHRtYXBVVit1dk9mZnNldCk7XG4jaWZkZWYgUkdCRExJR0hUTUFQXG5saWdodG1hcENvbG9yLnJnYj1mcm9tUkdCRChsaWdodG1hcENvbG9yKTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BTElHSFRNQVBcbmxpZ2h0bWFwQ29sb3IucmdiPXRvTGluZWFyU3BhY2UobGlnaHRtYXBDb2xvci5yZ2IpO1xuI2VuZGlmXG5saWdodG1hcENvbG9yLnJnYio9dkxpZ2h0bWFwSW5mb3MueTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja0xpZ2h0bWFwSW5pdCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tOb3JtYWxGaW5hbFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEZPUkNFTk9STUFMRk9SV0FSRCkgJiYgZGVmaW5lZChOT1JNQUwpXG52ZWMzIGZhY2VOb3JtYWw9bm9ybWFsaXplKGNyb3NzKGRGZHgodlBvc2l0aW9uVyksZEZkeSh2UG9zaXRpb25XKSkpKnZFeWVQb3NpdGlvbi53O1xuI2lmIGRlZmluZWQoVFdPU0lERURMSUdIVElORylcbmZhY2VOb3JtYWw9Z2xfRnJvbnRGYWNpbmcgPyBmYWNlTm9ybWFsIDogLWZhY2VOb3JtYWw7XG4jZW5kaWZcbm5vcm1hbFcqPXNpZ24oZG90KG5vcm1hbFcsZmFjZU5vcm1hbCkpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChUV09TSURFRExJR0hUSU5HKSAmJiBkZWZpbmVkKE5PUk1BTClcbiNpZiBkZWZpbmVkKE1JUlJPUkVEKVxubm9ybWFsVz1nbF9Gcm9udEZhY2luZyA/IC1ub3JtYWxXIDogbm9ybWFsVztcbiNlbHNlXG5ub3JtYWxXPWdsX0Zyb250RmFjaW5nID8gbm9ybWFsVyA6IC1ub3JtYWxXO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tOb3JtYWxGaW5hbCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tSZWZsZWN0YW5jZVwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG52ZWMzIGJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U9Z2V0UmVmbGVjdGFuY2VGcm9tQlJERkxvb2t1cCh2ZWMzKHJlZmxlY3RhbmNlRjApLHJlZmxlY3Rpdml0eU91dC5yZWZsZWN0YW5jZUY5MCxlbnZpcm9ubWVudEJyZGYpO1xuI2lmIChDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxudmVjMyBtZXRhbEVudmlyb25tZW50UmVmbGVjdGFuY2U9cmVmbGVjdGl2aXR5T3V0LnNwZWN1bGFyV2VpZ2h0KmdldEY4MlNwZWN1bGFyKE5kb3RWLGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTAscmVmbGVjdGl2aXR5T3V0LnJvdWdobmVzcyk7dmVjMyBkaWVsZWN0cmljRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1nZXRSZWZsZWN0YW5jZUZyb21CUkRGTG9va3VwKHJlZmxlY3Rpdml0eU91dC5kaWVsZWN0cmljQ29sb3JGMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCxlbnZpcm9ubWVudEJyZGYpO3ZlYzMgY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U9bWl4KGRpZWxlY3RyaWNFbnZpcm9ubWVudFJlZmxlY3RhbmNlLG1ldGFsRW52aXJvbm1lbnRSZWZsZWN0YW5jZSxyZWZsZWN0aXZpdHlPdXQubWV0YWxsaWMpO1xuI2Vsc2VcbnZlYzMgY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U9Z2V0UmVmbGVjdGFuY2VGcm9tQlJERkxvb2t1cChjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwLGVudmlyb25tZW50QnJkZik7XG4jZW5kaWZcbiNpZmRlZiBSQURJQU5DRU9DQ0xVU0lPTlxuY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UqPXNlbztcbiNlbmRpZlxuI2lmZGVmIEhPUklaT05PQ0NMVVNJT05cbiNpZmRlZiBCVU1QXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UqPWVobztcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG52ZWMzIGNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlPWdldFJlZmxlY3RhbmNlRnJvbUFuYWx5dGljYWxCUkRGTG9va3VwX0pvbmVzKE5kb3RWLGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAsc3BlY3VsYXJFbnZpcm9ubWVudFI5MCxzcXJ0KG1pY3JvU3VyZmFjZSkpO3ZlYzMgYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1nZXRSZWZsZWN0YW5jZUZyb21BbmFseXRpY2FsQlJERkxvb2t1cF9Kb25lcyhOZG90Vix2ZWMzKHJlZmxlY3RhbmNlRjApLHJlZmxlY3Rpdml0eU91dC5yZWZsZWN0YW5jZUY5MCxzcXJ0KG1pY3JvU3VyZmFjZSkpO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5jb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSo9Y2xlYXJjb2F0T3V0LmNvbnNlcnZhdGlvbkZhY3RvcjtcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKVxuY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UqPWNsZWFyY29hdE91dC5hYnNvcnB0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tSZWZsZWN0YW5jZSA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tSZWZsZWN0YW5jZTBcIjtcbmNvbnN0IHNoYWRlciA9IGBmbG9hdCByZWZsZWN0YW5jZUYwPXJlZmxlY3Rpdml0eU91dC5yZWZsZWN0YW5jZUYwO3ZlYzMgc3BlY3VsYXJFbnZpcm9ubWVudFIwPXJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjA7dmVjMyBzcGVjdWxhckVudmlyb25tZW50UjkwPXJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwO1xuI2lmZGVmIEFMUEhBRlJFU05FTFxuZmxvYXQgcmVmbGVjdGFuY2U5MD1mcmVzbmVsR3JhemluZ1JlZmxlY3RhbmNlKHJlZmxlY3RhbmNlRjApO3NwZWN1bGFyRW52aXJvbm1lbnRSOTA9c3BlY3VsYXJFbnZpcm9ubWVudFI5MCpyZWZsZWN0YW5jZTkwO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrUmVmbGVjdGFuY2UwID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja1JlZmxlY3Rpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgUkVGTEVDVElPTlxuc3RydWN0IHJlZmxlY3Rpb25PdXRQYXJhbXNcbnt2ZWM0IGVudmlyb25tZW50UmFkaWFuY2U7dmVjMyBlbnZpcm9ubWVudElycmFkaWFuY2U7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmVjMyByZWZsZWN0aW9uQ29vcmRzO1xuI2Vsc2VcbnZlYzIgcmVmbGVjdGlvbkNvb3JkcztcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWYgIWRlZmluZWQoTk9STUFMKSB8fCAhZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbnZlYzMgaXJyYWRpYW5jZVZlY3RvcjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbn07XG4jZGVmaW5lIHBicl9pbmxpbmVcbnZvaWQgY3JlYXRlUmVmbGVjdGlvbkNvb3JkcyhcbmluIHZlYzMgdlBvc2l0aW9uVyxcbmluIHZlYzMgbm9ybWFsVyxcbiNpZmRlZiBBTklTT1RST1BJQ1xuaW4gYW5pc290cm9waWNPdXRQYXJhbXMgYW5pc290cm9waWNPdXQsXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG5vdXQgdmVjMyByZWZsZWN0aW9uQ29vcmRzXG4jZWxzZVxub3V0IHZlYzIgcmVmbGVjdGlvbkNvb3Jkc1xuI2VuZGlmXG4pXG57XG4jaWZkZWYgQU5JU09UUk9QSUNcbnZlYzMgcmVmbGVjdGlvblZlY3Rvcj1jb21wdXRlUmVmbGVjdGlvbkNvb3Jkcyh2ZWM0KHZQb3NpdGlvblcsMS4wKSxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY05vcm1hbCk7XG4jZWxzZVxudmVjMyByZWZsZWN0aW9uVmVjdG9yPWNvbXB1dGVSZWZsZWN0aW9uQ29vcmRzKHZlYzQodlBvc2l0aW9uVywxLjApLG5vcm1hbFcpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbnJlZmxlY3Rpb25WZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnJlZmxlY3Rpb25Db29yZHM9cmVmbGVjdGlvblZlY3RvcjtcbiNlbHNlXG5yZWZsZWN0aW9uQ29vcmRzPXJlZmxlY3Rpb25WZWN0b3IueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5yZWZsZWN0aW9uQ29vcmRzLz1yZWZsZWN0aW9uVmVjdG9yLno7XG4jZW5kaWZcbnJlZmxlY3Rpb25Db29yZHMueT0xLjAtcmVmbGVjdGlvbkNvb3Jkcy55O1xuI2VuZGlmXG59XG4jZGVmaW5lIHBicl9pbmxpbmVcbiNkZWZpbmUgaW5saW5lXG52b2lkIHNhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuaW4gZmxvYXQgYWxwaGFHLFxuaW4gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLFxuaW4gdmVjMiB2UmVmbGVjdGlvbkluZm9zLFxuaW4gdmVjMyB2UmVmbGVjdGlvbkNvbG9yLFxuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuaW4gZmxvYXQgTmRvdFZVbmNsYW1wZWQsXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbmluIGZsb2F0IHJvdWdobmVzcyxcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbmluIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVyLFxuY29uc3QgdmVjMyByZWZsZWN0aW9uQ29vcmRzLFxuI2Vsc2VcbmluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlcixcbmNvbnN0IHZlYzIgcmVmbGVjdGlvbkNvb3JkcyxcbiNlbmRpZlxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbmluIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVyTG93LFxuaW4gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJIaWdoLFxuI2Vsc2VcbmluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckxvdyxcbmluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckhpZ2gsXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuaW4gdmVjMiB2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm8sXG4jZW5kaWZcbm91dCB2ZWM0IGVudmlyb25tZW50UmFkaWFuY2VcbilcbntcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbmZsb2F0IHJlZmxlY3Rpb25MT0Q9Z2V0TG9kRnJvbUFscGhhRyh2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngsYWxwaGFHLE5kb3RWVW5jbGFtcGVkKTtcbiNlbGlmIGRlZmluZWQoTElORUFSU1BFQ1VMQVJSRUZMRUNUSU9OKVxuZmxvYXQgcmVmbGVjdGlvbkxPRD1nZXRMaW5lYXJMb2RGcm9tUm91Z2huZXNzKHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyb3VnaG5lc3MpO1xuI2Vsc2VcbmZsb2F0IHJlZmxlY3Rpb25MT0Q9Z2V0TG9kRnJvbUFscGhhRyh2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngsYWxwaGFHKTtcbiNlbmRpZlxuI2lmZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG5yZWZsZWN0aW9uTE9EPXJlZmxlY3Rpb25MT0QqdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy55K3ZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MuejtcbiNpZmRlZiBMT0RJTlJFRkxFQ1RJT05BTFBIQVxuZmxvYXQgYXV0b21hdGljUmVmbGVjdGlvbkxPRD1VTlBBQ0tfTE9EKHNhbXBsZVJlZmxlY3Rpb24ocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvbkNvb3JkcykuYSk7ZmxvYXQgcmVxdWVzdGVkUmVmbGVjdGlvbkxPRD1tYXgoYXV0b21hdGljUmVmbGVjdGlvbkxPRCxyZWZsZWN0aW9uTE9EKTtcbiNlbHNlXG5mbG9hdCByZXF1ZXN0ZWRSZWZsZWN0aW9uTE9EPXJlZmxlY3Rpb25MT0Q7XG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbmVudmlyb25tZW50UmFkaWFuY2U9dmVjNChyYWRpYW5jZShhbHBoYUcscmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvbkNvb3Jkcyx2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm8pLDEuMCk7XG4jZWxzZVxuZW52aXJvbm1lbnRSYWRpYW5jZT1zYW1wbGVSZWZsZWN0aW9uTG9kKHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMscmVmbGVjdGlvbkxPRCk7XG4jZW5kaWZcbiNlbHNlXG5mbG9hdCBsb2RSZWZsZWN0aW9uTm9ybWFsaXplZD1zYXR1cmF0ZShyZWZsZWN0aW9uTE9EL2xvZzIodlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54KSk7ZmxvYXQgbG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkPWxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkKjIuMDt2ZWM0IGVudmlyb25tZW50TWlkPXNhbXBsZVJlZmxlY3Rpb24ocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvbkNvb3Jkcyk7aWYgKGxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkRG91YmxlZDwxLjApe2Vudmlyb25tZW50UmFkaWFuY2U9bWl4KFxuc2FtcGxlUmVmbGVjdGlvbihyZWZsZWN0aW9uU2FtcGxlckhpZ2gscmVmbGVjdGlvbkNvb3JkcyksXG5lbnZpcm9ubWVudE1pZCxcbmxvZFJlZmxlY3Rpb25Ob3JtYWxpemVkRG91YmxlZFxuKTt9IGVsc2Uge2Vudmlyb25tZW50UmFkaWFuY2U9bWl4KFxuZW52aXJvbm1lbnRNaWQsXG5zYW1wbGVSZWZsZWN0aW9uKHJlZmxlY3Rpb25TYW1wbGVyTG93LHJlZmxlY3Rpb25Db29yZHMpLFxubG9kUmVmbGVjdGlvbk5vcm1hbGl6ZWREb3VibGVkLTEuMFxuKTt9XG4jZW5kaWZcbiNpZmRlZiBSR0JEUkVGTEVDVElPTlxuZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2I9ZnJvbVJHQkQoZW52aXJvbm1lbnRSYWRpYW5jZSk7XG4jZW5kaWZcbiNpZmRlZiBHQU1NQVJFRkxFQ1RJT05cbmVudmlyb25tZW50UmFkaWFuY2UucmdiPXRvTGluZWFyU3BhY2UoZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2IpO1xuI2VuZGlmXG5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYio9dlJlZmxlY3Rpb25JbmZvcy54O2Vudmlyb25tZW50UmFkaWFuY2UucmdiKj12UmVmbGVjdGlvbkNvbG9yLnJnYjt9XG4jZGVmaW5lIHBicl9pbmxpbmVcbiNkZWZpbmUgaW5saW5lXG5yZWZsZWN0aW9uT3V0UGFyYW1zIHJlZmxlY3Rpb25CbG9jayhcbmluIHZlYzMgdlBvc2l0aW9uV1xuLGluIHZlYzMgbm9ybWFsV1xuLGluIGZsb2F0IGFscGhhR1xuLGluIHZlYzMgdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLGluIHZlYzIgdlJlZmxlY3Rpb25JbmZvc1xuLGluIHZlYzMgdlJlZmxlY3Rpb25Db2xvclxuI2lmZGVmIEFOSVNPVFJPUElDXG4saW4gYW5pc290cm9waWNPdXRQYXJhbXMgYW5pc290cm9waWNPdXRcbiNlbmRpZlxuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuLGluIGZsb2F0IE5kb3RWVW5jbGFtcGVkXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbixpbiBmbG9hdCByb3VnaG5lc3NcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixpbiBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlclxuI2Vsc2VcbixpbiBzYW1wbGVyMkQgcmVmbGVjdGlvblNhbXBsZXJcbiNlbmRpZlxuI2lmIGRlZmluZWQoTk9STUFMKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxuLGluIHZlYzMgdkVudmlyb25tZW50SXJyYWRpYW5jZVxuI2VuZGlmXG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4saW4gbWF0NCByZWZsZWN0aW9uTWF0cml4XG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGluIHNhbXBsZXJDdWJlIGlycmFkaWFuY2VTYW1wbGVyXG4jZWxzZVxuLGluIHNhbXBsZXIyRCBpcnJhZGlhbmNlU2FtcGxlclxuI2VuZGlmXG4jaWZkZWYgVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OXG4saW4gdmVjMyByZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb25cbiNlbmRpZlxuI2VuZGlmXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGluIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVyTG93XG4saW4gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJIaWdoXG4jZWxzZVxuLGluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckxvd1xuLGluIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckhpZ2hcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4saW4gdmVjMiB2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGluIHNhbXBsZXIyRCBpY2RmU2FtcGxlclxuI2VuZGlmXG4jZW5kaWZcbixpbiB2ZWMzIHZpZXdEaXJlY3Rpb25XXG4saW4gZmxvYXQgZGlmZnVzZVJvdWdobmVzc1xuLGluIHZlYzMgc3VyZmFjZUFsYmVkb1xuKVxue3JlZmxlY3Rpb25PdXRQYXJhbXMgb3V0UGFyYW1zO3ZlYzQgZW52aXJvbm1lbnRSYWRpYW5jZT12ZWM0KDAuLDAuLDAuLDAuKTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52ZWMzIHJlZmxlY3Rpb25Db29yZHM9dmVjMygwLik7XG4jZWxzZVxudmVjMiByZWZsZWN0aW9uQ29vcmRzPXZlYzIoMC4pO1xuI2VuZGlmXG5jcmVhdGVSZWZsZWN0aW9uQ29vcmRzKFxudlBvc2l0aW9uVyxcbm5vcm1hbFcsXG4jaWZkZWYgQU5JU09UUk9QSUNcbmFuaXNvdHJvcGljT3V0LFxuI2VuZGlmXG5yZWZsZWN0aW9uQ29vcmRzXG4pO3NhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuYWxwaGFHLFxudlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcyxcbnZSZWZsZWN0aW9uSW5mb3MsXG52UmVmbGVjdGlvbkNvbG9yLFxuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuTmRvdFZVbmNsYW1wZWQsXG4jZW5kaWZcbiNpZmRlZiBMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT05cbnJvdWdobmVzcyxcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnJlZmxlY3Rpb25TYW1wbGVyLFxucmVmbGVjdGlvbkNvb3JkcyxcbiNlbHNlXG5yZWZsZWN0aW9uU2FtcGxlcixcbnJlZmxlY3Rpb25Db29yZHMsXG4jZW5kaWZcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbnJlZmxlY3Rpb25TYW1wbGVyTG93LFxucmVmbGVjdGlvblNhbXBsZXJIaWdoLFxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG52UmVmbGVjdGlvbkZpbHRlcmluZ0luZm8sXG4jZW5kaWZcbmVudmlyb25tZW50UmFkaWFuY2Vcbik7dmVjMyBlbnZpcm9ubWVudElycmFkaWFuY2U9dmVjMygwLiwwLiwwLik7XG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4jaWZkZWYgQU5JU09UUk9QSUNcbnZlYzMgaXJyYWRpYW5jZVZlY3Rvcj12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY05vcm1hbCwwKSkueHl6O1xuI2Vsc2VcbnZlYzMgaXJyYWRpYW5jZVZlY3Rvcj12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChub3JtYWxXLDApKS54eXo7XG4jZW5kaWZcbnZlYzMgaXJyYWRpYW5jZVZpZXc9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQodmlld0RpcmVjdGlvblcsMCkpLnh5ejtcbiNpZiAhZGVmaW5lZChVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT04pICYmICFkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUwgIT0gQlJERl9ESUZGVVNFX01PREVMX0xBTUJFUlQgJiYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MRUdBQ1lcbmZsb2F0IE5kb3RWPW1heChkb3Qobm9ybWFsVyx2aWV3RGlyZWN0aW9uVyksMC4wKTtpcnJhZGlhbmNlVmVjdG9yPW1peChpcnJhZGlhbmNlVmVjdG9yLGlycmFkaWFuY2VWaWV3LCgwLjUqKDEuMC1OZG90VikpKmRpZmZ1c2VSb3VnaG5lc3MpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxuaXJyYWRpYW5jZVZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgSU5WRVJUQ1VCSUNNQVBcbmlycmFkaWFuY2VWZWN0b3IueSo9LTEuMDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbmVudmlyb25tZW50SXJyYWRpYW5jZT12RW52aXJvbm1lbnRJcnJhZGlhbmNlO1xuI2Vsc2VcbiNpZiBkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbmVudmlyb25tZW50SXJyYWRpYW5jZT1pcnJhZGlhbmNlKHJlZmxlY3Rpb25TYW1wbGVyLGlycmFkaWFuY2VWZWN0b3IsdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvLGRpZmZ1c2VSb3VnaG5lc3Msc3VyZmFjZUFsYmVkbyxpcnJhZGlhbmNlVmlld1xuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saWNkZlNhbXBsZXJcbiNlbmRpZlxuKTtcbiNlbHNlXG5lbnZpcm9ubWVudElycmFkaWFuY2U9Y29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZShpcnJhZGlhbmNlVmVjdG9yKTtcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxub3V0UGFyYW1zLmlycmFkaWFuY2VWZWN0b3I9aXJyYWRpYW5jZVZlY3RvcjtcbiNlbmRpZlxuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmVjNCBlbnZpcm9ubWVudElycmFkaWFuY2U0PXNhbXBsZVJlZmxlY3Rpb24oaXJyYWRpYW5jZVNhbXBsZXIsaXJyYWRpYW5jZVZlY3Rvcik7XG4jZWxzZVxudmVjNCBlbnZpcm9ubWVudElycmFkaWFuY2U0PXNhbXBsZVJlZmxlY3Rpb24oaXJyYWRpYW5jZVNhbXBsZXIscmVmbGVjdGlvbkNvb3Jkcyk7XG4jZW5kaWZcbmVudmlyb25tZW50SXJyYWRpYW5jZT1lbnZpcm9ubWVudElycmFkaWFuY2U0LnJnYjtcbiNpZmRlZiBSR0JEUkVGTEVDVElPTlxuZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYj1mcm9tUkdCRChlbnZpcm9ubWVudElycmFkaWFuY2U0KTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxuZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYj10b0xpbmVhclNwYWNlKGVudmlyb25tZW50SXJyYWRpYW5jZS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OXG52ZWMzIExzPW5vcm1hbGl6ZShyZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb24pO2Zsb2F0IE5vTD1kb3QoaXJyYWRpYW5jZVZlY3RvcixMcyk7ZmxvYXQgTm9WPWRvdChpcnJhZGlhbmNlVmVjdG9yLGlycmFkaWFuY2VWaWV3KTt2ZWMzIGRpZmZ1c2VSb3VnaG5lc3NUZXJtPXZlYzMoMS4wKTtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbmZsb2F0IExvVj1kb3QgKExzLGlycmFkaWFuY2VWaWV3KTtmbG9hdCBtYWc9bGVuZ3RoKHJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbikqMi4wO3ZlYzMgY2xhbXBlZEFsYmVkbz1jbGFtcChzdXJmYWNlQWxiZWRvLHZlYzMoMC4xKSx2ZWMzKDEuMCkpO2RpZmZ1c2VSb3VnaG5lc3NUZXJtPWRpZmZ1c2VCUkRGX0VPTihjbGFtcGVkQWxiZWRvLGRpZmZ1c2VSb3VnaG5lc3MsTm9MLE5vVixMb1YpKlBJO2RpZmZ1c2VSb3VnaG5lc3NUZXJtPWRpZmZ1c2VSb3VnaG5lc3NUZXJtL2NsYW1wZWRBbGJlZG87ZGlmZnVzZVJvdWdobmVzc1Rlcm09bWl4KHZlYzMoMS4wKSxkaWZmdXNlUm91Z2huZXNzVGVybSxzcXJ0KGNsYW1wKG1hZypOb1YsMC4wLDEuMCkpKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxudmVjMyBIPShpcnJhZGlhbmNlVmlldytMcykqMC41O2Zsb2F0IFZvSD1kb3QoaXJyYWRpYW5jZVZpZXcsSCk7ZGlmZnVzZVJvdWdobmVzc1Rlcm09dmVjMyhkaWZmdXNlQlJERl9CdXJsZXkoTm9MLE5vVixWb0gsZGlmZnVzZVJvdWdobmVzcykqUEkpO1xuI2VuZGlmXG5lbnZpcm9ubWVudElycmFkaWFuY2U9ZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYipkaWZmdXNlUm91Z2huZXNzVGVybTtcbiNlbmRpZlxuI2VuZGlmXG5lbnZpcm9ubWVudElycmFkaWFuY2UqPXZSZWZsZWN0aW9uQ29sb3IucmdiKnZSZWZsZWN0aW9uSW5mb3MueDtcbiNpZmRlZiBNSVhfSUJMX1JBRElBTkNFX1dJVEhfSVJSQURJQU5DRVxub3V0UGFyYW1zLmVudmlyb25tZW50UmFkaWFuY2U9dmVjNChtaXgoZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2IsZW52aXJvbm1lbnRJcnJhZGlhbmNlLGFscGhhRyksZW52aXJvbm1lbnRSYWRpYW5jZS5hKTtcbiNlbHNlXG5vdXRQYXJhbXMuZW52aXJvbm1lbnRSYWRpYW5jZT1lbnZpcm9ubWVudFJhZGlhbmNlO1xuI2VuZGlmXG5vdXRQYXJhbXMuZW52aXJvbm1lbnRJcnJhZGlhbmNlPWVudmlyb25tZW50SXJyYWRpYW5jZTtvdXRQYXJhbXMucmVmbGVjdGlvbkNvb3Jkcz1yZWZsZWN0aW9uQ29vcmRzO3JldHVybiBvdXRQYXJhbXM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrUmVmbGVjdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tSZWZsZWN0aXZpdHlcIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgcmVmbGVjdGl2aXR5T3V0UGFyYW1zXG57ZmxvYXQgbWljcm9TdXJmYWNlO2Zsb2F0IHJvdWdobmVzcztmbG9hdCBkaWZmdXNlUm91Z2huZXNzO2Zsb2F0IHJlZmxlY3RhbmNlRjA7dmVjMyByZWZsZWN0YW5jZUY5MDt2ZWMzIGNvbG9yUmVmbGVjdGFuY2VGMDt2ZWMzIGNvbG9yUmVmbGVjdGFuY2VGOTA7XG4jaWZkZWYgTUVUQUxMSUNXT1JLRkxPV1xudmVjMyBzdXJmYWNlQWxiZWRvO2Zsb2F0IG1ldGFsbGljO2Zsb2F0IHNwZWN1bGFyV2VpZ2h0O3ZlYzMgZGllbGVjdHJpY0NvbG9yRjA7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiBkZWZpbmVkKEFPU1RPUkVJTk1FVEFMTUFQUkVEKVxudmVjMyBhbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxuI2lmZGVmIE1FVEFMTElDV09SS0ZMT1dcbiNpZmRlZiBSRUZMRUNUSVZJVFlcbnZlYzQgc3VyZmFjZU1ldGFsbGljQ29sb3JNYXA7XG4jZW5kaWZcbnZlYzMgbWV0YWxsaWNGMDtcbiNlbHNlXG4jaWZkZWYgUkVGTEVDVElWSVRZXG52ZWM0IHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvck1hcDtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbn07XG4jZGVmaW5lIHBicl9pbmxpbmVcbnJlZmxlY3Rpdml0eU91dFBhcmFtcyByZWZsZWN0aXZpdHlCbG9jayhcbmluIHZlYzQgcmVmbGVjdGl2aXR5Q29sb3JcbiNpZmRlZiBNRVRBTExJQ1dPUktGTE9XXG4saW4gdmVjMyBzdXJmYWNlQWxiZWRvXG4saW4gdmVjNCBtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yc1xuI2VuZGlmXG4saW4gZmxvYXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NcbiNpZmRlZiBCQVNFX0RJRkZVU0VfUk9VR0hORVNTXG4saW4gZmxvYXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlXG4saW4gdmVjMiBiYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSVZJVFlcbixpbiB2ZWMzIHJlZmxlY3Rpdml0eUluZm9zXG4saW4gdmVjNCBzdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwXG4jZW5kaWZcbiNpZiBkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiBkZWZpbmVkKEFPU1RPUkVJTk1FVEFMTUFQUkVEKVxuLGluIHZlYzMgYW1iaWVudE9jY2x1c2lvbkNvbG9ySW5cbiNlbmRpZlxuI2lmZGVmIE1JQ1JPU1VSRkFDRU1BUFxuLGluIHZlYzQgbWljcm9TdXJmYWNlVGV4ZWxcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuLGluIHZlYzQgZGV0YWlsQ29sb3JcbixpbiB2ZWM0IHZEZXRhaWxJbmZvc1xuI2VuZGlmXG4pXG57cmVmbGVjdGl2aXR5T3V0UGFyYW1zIG91dFBhcmFtcztmbG9hdCBtaWNyb1N1cmZhY2U9cmVmbGVjdGl2aXR5Q29sb3IuYTt2ZWMzIHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvcj1yZWZsZWN0aXZpdHlDb2xvci5yZ2I7XG4jaWZkZWYgTUVUQUxMSUNXT1JLRkxPV1xudmVjMiBtZXRhbGxpY1JvdWdobmVzcz1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3Iucmc7ZmxvYXQgaW9yPXN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvci5iO1xuI2lmZGVmIFJFRkxFQ1RJVklUWVxuI2lmIERFQlVHTU9ERT4wXG5vdXRQYXJhbXMuc3VyZmFjZU1ldGFsbGljQ29sb3JNYXA9c3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcDtcbiNlbmRpZlxuI2lmZGVmIEFPU1RPUkVJTk1FVEFMTUFQUkVEXG52ZWMzIGFvU3RvcmVJbk1ldGFsTWFwPXZlYzMoc3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcC5yLHN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAucixzdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLnIpO291dFBhcmFtcy5hbWJpZW50T2NjbHVzaW9uQ29sb3I9bWl4KGFtYmllbnRPY2NsdXNpb25Db2xvckluLGFvU3RvcmVJbk1ldGFsTWFwLHJlZmxlY3Rpdml0eUluZm9zLnopO1xuI2VuZGlmXG4jaWZkZWYgTUVUQUxMTkVTU1NUT1JFSU5NRVRBTE1BUEJMVUVcbm1ldGFsbGljUm91Z2huZXNzLnIqPXN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXAuYjtcbiNlbHNlXG5tZXRhbGxpY1JvdWdobmVzcy5yKj1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLnI7XG4jZW5kaWZcbiNpZmRlZiBST1VHSE5FU1NTVE9SRUlOTUVUQUxNQVBBTFBIQVxubWV0YWxsaWNSb3VnaG5lc3MuZyo9c3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcC5hO1xuI2Vsc2VcbiNpZmRlZiBST1VHSE5FU1NTVE9SRUlOTUVUQUxNQVBHUkVFTlxubWV0YWxsaWNSb3VnaG5lc3MuZyo9c3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcC5nO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuZmxvYXQgZGV0YWlsUm91Z2huZXNzPW1peCgwLjUsZGV0YWlsQ29sb3IuYix2RGV0YWlsSW5mb3Mudyk7ZmxvYXQgbG9MZXJwPW1peCgwLixtZXRhbGxpY1JvdWdobmVzcy5nLGRldGFpbFJvdWdobmVzcyoyLik7ZmxvYXQgaGlMZXJwPW1peChtZXRhbGxpY1JvdWdobmVzcy5nLDEuLChkZXRhaWxSb3VnaG5lc3MtMC41KSoyLik7bWV0YWxsaWNSb3VnaG5lc3MuZz1taXgobG9MZXJwLGhpTGVycCxzdGVwKGRldGFpbFJvdWdobmVzcywwLjUpKTtcbiNlbmRpZlxuI2lmZGVmIE1JQ1JPU1VSRkFDRU1BUFxubWV0YWxsaWNSb3VnaG5lc3MuZyo9bWljcm9TdXJmYWNlVGV4ZWwucjtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX01FVEFMTElDUk9VR0hORVNTXG5taWNyb1N1cmZhY2U9MS4wLW1ldGFsbGljUm91Z2huZXNzLmc7dmVjMyBiYXNlQ29sb3I9c3VyZmFjZUFsYmVkbztvdXRQYXJhbXMubWV0YWxsaWM9bWV0YWxsaWNSb3VnaG5lc3MucjtvdXRQYXJhbXMuc3BlY3VsYXJXZWlnaHQ9bWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnMuYTtmbG9hdCBkaWVsZWN0cmljRjA9cmVmbGVjdGl2aXR5Q29sb3IuYSpvdXRQYXJhbXMuc3BlY3VsYXJXZWlnaHQ7c3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yPW1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzLnJnYjtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLm1ldGFsbGljRjA9dmVjMyhkaWVsZWN0cmljRjApKnN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvcjtcbiNlbmRpZlxuI2lmZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG5vdXRQYXJhbXMuc3VyZmFjZUFsYmVkbz1iYXNlQ29sb3IucmdiKih2ZWMzKDEuMCktdmVjMyhkaWVsZWN0cmljRjApKnN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvcikqKDEuMC1vdXRQYXJhbXMubWV0YWxsaWMpO1xuI2Vsc2Vcbm91dFBhcmFtcy5zdXJmYWNlQWxiZWRvPWJhc2VDb2xvci5yZ2I7XG4jZW5kaWZcbiNpZmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxue3ZlYzMgcmVmbGVjdGl2aXR5Q29sb3I9bWl4KGRpZWxlY3RyaWNGMCpzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IsYmFzZUNvbG9yLnJnYixvdXRQYXJhbXMubWV0YWxsaWMpO291dFBhcmFtcy5yZWZsZWN0YW5jZUYwPW1heChyZWZsZWN0aXZpdHlDb2xvci5yLG1heChyZWZsZWN0aXZpdHlDb2xvci5nLHJlZmxlY3Rpdml0eUNvbG9yLmIpKTt9XG4jZWxzZVxuI2lmIERJRUxFQ1RSSUNfU1BFQ1VMQVJfTU9ERUw9PURJRUxFQ1RSSUNfU1BFQ1VMQVJfTU9ERUxfR0xURlxuZmxvYXQgbWF4RjA9bWF4KHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvci5yLG1heChzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IuZyxzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IuYikpO291dFBhcmFtcy5yZWZsZWN0YW5jZUYwPW1peChkaWVsZWN0cmljRjAqbWF4RjAsMS4wLG91dFBhcmFtcy5tZXRhbGxpYyk7XG4jZWxzZVxub3V0UGFyYW1zLnJlZmxlY3RhbmNlRjA9bWl4KGRpZWxlY3RyaWNGMCwxLjAsb3V0UGFyYW1zLm1ldGFsbGljKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbm91dFBhcmFtcy5yZWZsZWN0YW5jZUY5MD12ZWMzKG91dFBhcmFtcy5zcGVjdWxhcldlaWdodCk7ZmxvYXQgZjkwU2NhbGU9MS4wO1xuI2Vsc2VcbmZsb2F0IGY5MFNjYWxlPWNsYW1wKDIuMCooaW9yLTEuMCksMC4wLDEuMCk7b3V0UGFyYW1zLnJlZmxlY3RhbmNlRjkwPXZlYzMobWl4KG91dFBhcmFtcy5zcGVjdWxhcldlaWdodCpmOTBTY2FsZSwxLjAsb3V0UGFyYW1zLm1ldGFsbGljKSk7XG4jZW5kaWZcbm91dFBhcmFtcy5kaWVsZWN0cmljQ29sb3JGMD12ZWMzKGRpZWxlY3RyaWNGMCpzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IpO3ZlYzMgbWV0YWxsaWNDb2xvckYwPWJhc2VDb2xvci5yZ2I7b3V0UGFyYW1zLmNvbG9yUmVmbGVjdGFuY2VGMD1taXgob3V0UGFyYW1zLmRpZWxlY3RyaWNDb2xvckYwLG1ldGFsbGljQ29sb3JGMCxvdXRQYXJhbXMubWV0YWxsaWMpO1xuI2lmIChESUVMRUNUUklDX1NQRUNVTEFSX01PREVMPT1ESUVMRUNUUklDX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG52ZWMzIGRpZWxlY3RyaWNDb2xvckY5MD1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IqdmVjMyhvdXRQYXJhbXMuc3BlY3VsYXJXZWlnaHQpKnZlYzMoZjkwU2NhbGUpO1xuI2Vsc2VcbnZlYzMgZGllbGVjdHJpY0NvbG9yRjkwPXZlYzMob3V0UGFyYW1zLnNwZWN1bGFyV2VpZ2h0KmY5MFNjYWxlKTtcbiNlbmRpZlxuI2lmIChDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxudmVjMyBjb25kdWN0b3JDb2xvckY5MD1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3I7XG4jZWxzZVxuI2lmZGVmIExFR0FDWV9TUEVDVUxBUl9FTkVSR1lfQ09OU0VSVkFUSU9OXG52ZWMzIGNvbmR1Y3RvckNvbG9yRjkwPW91dFBhcmFtcy5yZWZsZWN0YW5jZUY5MDtcbiNlbHNlXG52ZWMzIGNvbmR1Y3RvckNvbG9yRjkwPXZlYzMoMS4wKTtcbiNlbmRpZlxuI2VuZGlmXG5vdXRQYXJhbXMuY29sb3JSZWZsZWN0YW5jZUY5MD1taXgoZGllbGVjdHJpY0NvbG9yRjkwLGNvbmR1Y3RvckNvbG9yRjkwLG91dFBhcmFtcy5tZXRhbGxpYyk7XG4jZWxzZVxuI2lmZGVmIFJFRkxFQ1RJVklUWVxuc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yKj1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLnJnYjtcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLnN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvck1hcD1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwO1xuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFRlJPTVJFRkxFQ1RJVklUWU1BUFxubWljcm9TdXJmYWNlKj1zdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwLmE7bWljcm9TdXJmYWNlKj1yZWZsZWN0aXZpdHlJbmZvcy56O1xuI2Vsc2VcbiNpZmRlZiBNSUNST1NVUkZBQ0VBVVRPTUFUSUNcbm1pY3JvU3VyZmFjZSo9Y29tcHV0ZURlZmF1bHRNaWNyb1N1cmZhY2UobWljcm9TdXJmYWNlLHN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvcik7XG4jZW5kaWZcbiNpZmRlZiBNSUNST1NVUkZBQ0VNQVBcbm1pY3JvU3VyZmFjZSo9bWljcm9TdXJmYWNlVGV4ZWwucjtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX01JQ1JPU1VSRkFDRVxuI2VuZGlmXG4jZW5kaWZcbm91dFBhcmFtcy5jb2xvclJlZmxlY3RhbmNlRjA9c3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yO291dFBhcmFtcy5yZWZsZWN0YW5jZUYwPW1heChzdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3IucixtYXgoc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yLmcsc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yLmIpKTtvdXRQYXJhbXMucmVmbGVjdGFuY2VGOTA9dmVjMygxLjApO1xuI2lmIChESUVMRUNUUklDX1NQRUNVTEFSX01PREVMPT1ESUVMRUNUUklDX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG5vdXRQYXJhbXMuY29sb3JSZWZsZWN0YW5jZUY5MD1zdXJmYWNlUmVmbGVjdGl2aXR5Q29sb3I7XG4jZWxzZVxub3V0UGFyYW1zLmNvbG9yUmVmbGVjdGFuY2VGOTA9dmVjMygxLjApO1xuI2VuZGlmXG4jZW5kaWZcbm1pY3JvU3VyZmFjZT1zYXR1cmF0ZShtaWNyb1N1cmZhY2UpO2Zsb2F0IHJvdWdobmVzcz0xLi1taWNyb1N1cmZhY2U7ZmxvYXQgZGlmZnVzZVJvdWdobmVzcz1iYXNlRGlmZnVzZVJvdWdobmVzcztcbiNpZmRlZiBCQVNFX0RJRkZVU0VfUk9VR0hORVNTXG5kaWZmdXNlUm91Z2huZXNzKj1iYXNlRGlmZnVzZVJvdWdobmVzc1RleHR1cmUqYmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcy55O1xuI2VuZGlmXG5vdXRQYXJhbXMubWljcm9TdXJmYWNlPW1pY3JvU3VyZmFjZTtvdXRQYXJhbXMucm91Z2huZXNzPXJvdWdobmVzcztvdXRQYXJhbXMuZGlmZnVzZVJvdWdobmVzcz1kaWZmdXNlUm91Z2huZXNzO3JldHVybiBvdXRQYXJhbXM7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja1JlZmxlY3Rpdml0eSA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tTaGVlblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBTSEVFTlxuc3RydWN0IHNoZWVuT3V0UGFyYW1zXG57ZmxvYXQgc2hlZW5JbnRlbnNpdHk7dmVjMyBzaGVlbkNvbG9yO2Zsb2F0IHNoZWVuUm91Z2huZXNzO1xuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG52ZWMzIHN1cmZhY2VBbGJlZG87XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChTSEVFTl9BTEJFRE9TQ0FMSU5HKVxuZmxvYXQgc2hlZW5BbGJlZG9TY2FsaW5nO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OKSAmJiBkZWZpbmVkKEVOVklST05NRU5UQlJERilcbnZlYzMgZmluYWxTaGVlblJhZGlhbmNlU2NhbGVkO1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG52ZWM0IHNoZWVuTWFwRGF0YTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG52ZWMzIHNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZTtcbiNlbmRpZlxuI2VuZGlmXG59O1xuI2RlZmluZSBwYnJfaW5saW5lXG4jZGVmaW5lIGlubGluZVxuc2hlZW5PdXRQYXJhbXMgc2hlZW5CbG9jayhcbmluIHZlYzQgdlNoZWVuQ29sb3JcbiNpZmRlZiBTSEVFTl9ST1VHSE5FU1NcbixpbiBmbG9hdCB2U2hlZW5Sb3VnaG5lc3NcbiNpZiBkZWZpbmVkKFNIRUVOX1RFWFRVUkVfUk9VR0hORVNTKSAmJiAhZGVmaW5lZChTSEVFTl9VU0VfUk9VR0hORVNTX0ZST01fTUFJTlRFWFRVUkUpXG4saW4gdmVjNCBzaGVlbk1hcFJvdWdobmVzc0RhdGFcbiNlbmRpZlxuI2VuZGlmXG4saW4gZmxvYXQgcm91Z2huZXNzXG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxuLGluIHZlYzQgc2hlZW5NYXBEYXRhXG4saW4gZmxvYXQgc2hlZW5NYXBMZXZlbFxuI2VuZGlmXG4saW4gZmxvYXQgcmVmbGVjdGFuY2VcbiNpZmRlZiBTSEVFTl9MSU5LV0lUSEFMQkVET1xuLGluIHZlYzMgYmFzZUNvbG9yXG4saW4gdmVjMyBzdXJmYWNlQWxiZWRvXG4jZW5kaWZcbiNpZmRlZiBFTlZJUk9OTUVOVEJSREZcbixpbiBmbG9hdCBOZG90VlxuLGluIHZlYzMgZW52aXJvbm1lbnRCcmRmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT04pICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuLGluIHZlYzIgQUFSb3VnaG5lc3NGYWN0b3JzXG4saW4gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zXG4saW4gdmVjMiB2UmVmbGVjdGlvbkluZm9zXG4saW4gdmVjMyB2UmVmbGVjdGlvbkNvbG9yXG4saW4gdmVjNCB2TGlnaHRpbmdJbnRlbnNpdHlcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4saW4gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJcbixpbiB2ZWMzIHJlZmxlY3Rpb25Db29yZHNcbiNlbHNlXG4saW4gc2FtcGxlcjJEIHJlZmxlY3Rpb25TYW1wbGVyXG4saW4gdmVjMiByZWZsZWN0aW9uQ29vcmRzXG4jZW5kaWZcbixpbiBmbG9hdCBOZG90VlVuY2xhbXBlZFxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbixpbiBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlckxvd1xuLGluIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVySGlnaFxuI2Vsc2VcbixpbiBzYW1wbGVyMkQgcmVmbGVjdGlvblNhbXBsZXJMb3dcbixpbiBzYW1wbGVyMkQgcmVmbGVjdGlvblNhbXBsZXJIaWdoXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLGluIHZlYzIgdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWCkgJiYgZGVmaW5lZChSQURJQU5DRU9DQ0xVU0lPTilcbixpbiBmbG9hdCBzZW9cbiNlbmRpZlxuI2lmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuLGluIGZsb2F0IGVob1xuI2VuZGlmXG4jZW5kaWZcbilcbntzaGVlbk91dFBhcmFtcyBvdXRQYXJhbXM7ZmxvYXQgc2hlZW5JbnRlbnNpdHk9dlNoZWVuQ29sb3IuYTtcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5zaGVlbk1hcERhdGE9c2hlZW5NYXBEYXRhO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTSEVFTl9MSU5LV0lUSEFMQkVET1xuZmxvYXQgc2hlZW5GYWN0b3I9cG93NSgxLjAtc2hlZW5JbnRlbnNpdHkpO3ZlYzMgc2hlZW5Db2xvcj1iYXNlQ29sb3IucmdiKigxLjAtc2hlZW5GYWN0b3IpO2Zsb2F0IHNoZWVuUm91Z2huZXNzPXNoZWVuSW50ZW5zaXR5O291dFBhcmFtcy5zdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG8qc2hlZW5GYWN0b3I7XG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxuc2hlZW5JbnRlbnNpdHkqPXNoZWVuTWFwRGF0YS5hO1xuI2VuZGlmXG4jZWxzZVxudmVjMyBzaGVlbkNvbG9yPXZTaGVlbkNvbG9yLnJnYjtcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG4jaWZkZWYgU0hFRU5fR0FNTUFURVhUVVJFXG5zaGVlbkNvbG9yLnJnYio9dG9MaW5lYXJTcGFjZShzaGVlbk1hcERhdGEucmdiKTtcbiNlbHNlXG5zaGVlbkNvbG9yLnJnYio9c2hlZW5NYXBEYXRhLnJnYjtcbiNlbmRpZlxuc2hlZW5Db2xvci5yZ2IqPXNoZWVuTWFwTGV2ZWw7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTl9ST1VHSE5FU1NcbmZsb2F0IHNoZWVuUm91Z2huZXNzPXZTaGVlblJvdWdobmVzcztcbiNpZmRlZiBTSEVFTl9VU0VfUk9VR0hORVNTX0ZST01fTUFJTlRFWFRVUkVcbiNpZiBkZWZpbmVkKFNIRUVOX1RFWFRVUkUpXG5zaGVlblJvdWdobmVzcyo9c2hlZW5NYXBEYXRhLmE7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MpXG5zaGVlblJvdWdobmVzcyo9c2hlZW5NYXBSb3VnaG5lc3NEYXRhLmE7XG4jZW5kaWZcbiNlbHNlXG5mbG9hdCBzaGVlblJvdWdobmVzcz1yb3VnaG5lc3M7XG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxuc2hlZW5JbnRlbnNpdHkqPXNoZWVuTWFwRGF0YS5hO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChTSEVFTl9BTEJFRE9TQ0FMSU5HKVxuc2hlZW5JbnRlbnNpdHkqPSgxLi1yZWZsZWN0YW5jZSk7XG4jZW5kaWZcbnNoZWVuQ29sb3IqPXNoZWVuSW50ZW5zaXR5O1xuI2VuZGlmXG4jaWZkZWYgRU5WSVJPTk1FTlRCUkRGXG4vKiNpZmRlZiBTSEVFTl9TT0ZURVJcbnZlYzMgZW52aXJvbm1lbnRTaGVlbkJyZGY9dmVjMygwLiwwLixnZXRCUkRGTG9va3VwQ2hhcmxpZVNoZWVuKE5kb3RWLHNoZWVuUm91Z2huZXNzKSk7XG4jZWxzZSovXG4jaWZkZWYgU0hFRU5fUk9VR0hORVNTXG52ZWMzIGVudmlyb25tZW50U2hlZW5CcmRmPWdldEJSREZMb29rdXAoTmRvdFYsc2hlZW5Sb3VnaG5lc3MpO1xuI2Vsc2VcbnZlYzMgZW52aXJvbm1lbnRTaGVlbkJyZGY9ZW52aXJvbm1lbnRCcmRmO1xuI2VuZGlmXG4vKiNlbmRpZiovXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT04pICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuZmxvYXQgc2hlZW5BbHBoYUc9Y29udmVydFJvdWdobmVzc1RvQXZlcmFnZVNsb3BlKHNoZWVuUm91Z2huZXNzKTtcbiNpZmRlZiBTUEVDVUxBUkFBXG5zaGVlbkFscGhhRys9QUFSb3VnaG5lc3NGYWN0b3JzLnk7XG4jZW5kaWZcbnZlYzQgZW52aXJvbm1lbnRTaGVlblJhZGlhbmNlPXZlYzQoMC4sMC4sMC4sMC4pO3NhbXBsZVJlZmxlY3Rpb25UZXh0dXJlKFxuc2hlZW5BbHBoYUcsXG52UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLFxudlJlZmxlY3Rpb25JbmZvcyxcbnZSZWZsZWN0aW9uQ29sb3IsXG4jaWYgZGVmaW5lZChMT0RJTlJFRkxFQ1RJT05BTFBIQSkgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG5OZG90VlVuY2xhbXBlZCxcbiNlbmRpZlxuI2lmZGVmIExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTlxuc2hlZW5Sb3VnaG5lc3MsXG4jZW5kaWZcbnJlZmxlY3Rpb25TYW1wbGVyLFxucmVmbGVjdGlvbkNvb3JkcyxcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbnJlZmxlY3Rpb25TYW1wbGVyTG93LFxucmVmbGVjdGlvblNhbXBsZXJIaWdoLFxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG52UmVmbGVjdGlvbkZpbHRlcmluZ0luZm8sXG4jZW5kaWZcbmVudmlyb25tZW50U2hlZW5SYWRpYW5jZVxuKTt2ZWMzIHNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1nZXRTaGVlblJlZmxlY3RhbmNlRnJvbUJSREZMb29rdXAoc2hlZW5Db2xvcixlbnZpcm9ubWVudFNoZWVuQnJkZik7XG4jaWYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpICYmIGRlZmluZWQoUkFESUFOQ0VPQ0NMVVNJT04pXG5zaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2UqPXNlbztcbiNlbmRpZlxuI2lmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuc2hlZW5FbnZpcm9ubWVudFJlZmxlY3RhbmNlKj1laG87XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLnNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1zaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZW5kaWZcbm91dFBhcmFtcy5maW5hbFNoZWVuUmFkaWFuY2VTY2FsZWQ9XG5lbnZpcm9ubWVudFNoZWVuUmFkaWFuY2UucmdiICpcbnNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZSAqXG52TGlnaHRpbmdJbnRlbnNpdHkuejtcbiNlbmRpZlxuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiBkZWZpbmVkKFNIRUVOX0FMQkVET1NDQUxJTkcpXG5vdXRQYXJhbXMuc2hlZW5BbGJlZG9TY2FsaW5nPTEuMC1zaGVlbkludGVuc2l0eSptYXgobWF4KHNoZWVuQ29sb3IucixzaGVlbkNvbG9yLmcpLHNoZWVuQ29sb3IuYikqZW52aXJvbm1lbnRTaGVlbkJyZGYuYjtcbiNlbmRpZlxub3V0UGFyYW1zLnNoZWVuSW50ZW5zaXR5PXNoZWVuSW50ZW5zaXR5O291dFBhcmFtcy5zaGVlbkNvbG9yPXNoZWVuQ29sb3I7b3V0UGFyYW1zLnNoZWVuUm91Z2huZXNzPXNoZWVuUm91Z2huZXNzO3JldHVybiBvdXRQYXJhbXM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrU2hlZW4gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrU3ViU3VyZmFjZVwiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBzdWJTdXJmYWNlT3V0UGFyYW1zXG57dmVjMyBzcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jaWZkZWYgU1NfUkVGUkFDVElPTlxudmVjMyBmaW5hbFJlZnJhY3Rpb247dmVjMyBzdXJmYWNlQWxiZWRvO1xuI2lmZGVmIFNTX0xJTktSRUZSQUNUSU9OVE9UUkFOU1BBUkVOQ1lcbmZsb2F0IGFscGhhO1xuI2VuZGlmXG5mbG9hdCByZWZyYWN0aW9uT3BhY2l0eTtcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxudmVjMyB0cmFuc21pdHRhbmNlO2Zsb2F0IHRyYW5zbHVjZW5jeUludGVuc2l0eTtcbiNpZmRlZiBSRUZMRUNUSU9OXG52ZWMzIHJlZnJhY3Rpb25JcnJhZGlhbmNlO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxuI2lmZGVmIFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRVxudmVjNCB0aGlja25lc3NNYXA7XG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG52ZWM0IGVudmlyb25tZW50UmVmcmFjdGlvbjt2ZWMzIHJlZnJhY3Rpb25UcmFuc21pdHRhbmNlO1xuI2VuZGlmXG4jZW5kaWZcbn07XG4jaWZkZWYgU1VCU1VSRkFDRVxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbiNkZWZpbmUgcGJyX2lubGluZVxuI2RlZmluZSBpbmxpbmVcbnZlYzQgc2FtcGxlRW52aXJvbm1lbnRSZWZyYWN0aW9uKFxuaW4gZmxvYXQgaW9yXG4saW4gZmxvYXQgdGhpY2tuZXNzXG4saW4gZmxvYXQgcmVmcmFjdGlvbkxPRFxuLGluIHZlYzMgbm9ybWFsV1xuLGluIHZlYzMgdlBvc2l0aW9uV1xuLGluIHZlYzMgdmlld0RpcmVjdGlvbldcbixpbiBtYXQ0IHZpZXdcbixpbiB2ZWM0IHZSZWZyYWN0aW9uSW5mb3NcbixpbiBtYXQ0IHJlZnJhY3Rpb25NYXRyaXhcbixpbiB2ZWM0IHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3NcbixpbiBmbG9hdCBhbHBoYUdcbiNpZmRlZiBTU19SRUZSQUNUSU9OTUFQXzNEXG4saW4gc2FtcGxlckN1YmUgcmVmcmFjdGlvblNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixpbiBzYW1wbGVyQ3ViZSByZWZyYWN0aW9uU2FtcGxlckxvd1xuLGluIHNhbXBsZXJDdWJlIHJlZnJhY3Rpb25TYW1wbGVySGlnaFxuI2VuZGlmXG4jZWxzZVxuLGluIHNhbXBsZXIyRCByZWZyYWN0aW9uU2FtcGxlclxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLGluIHNhbXBsZXIyRCByZWZyYWN0aW9uU2FtcGxlckxvd1xuLGluIHNhbXBsZXIyRCByZWZyYWN0aW9uU2FtcGxlckhpZ2hcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbixpbiBhbmlzb3Ryb3BpY091dFBhcmFtcyBhbmlzb3Ryb3BpY091dFxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4saW4gdmVjMiB2UmVmcmFjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuI2lmZGVmIFNTX1VTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG4saW4gdmVjMyByZWZyYWN0aW9uUG9zaXRpb25cbixpbiB2ZWMzIHJlZnJhY3Rpb25TaXplXG4jZW5kaWZcbikge3ZlYzQgZW52aXJvbm1lbnRSZWZyYWN0aW9uPXZlYzQoMC4sMC4sMC4sMC4pO1xuI2lmZGVmIEFOSVNPVFJPUElDXG52ZWMzIHJlZnJhY3Rpb25WZWN0b3I9cmVmcmFjdCgtdmlld0RpcmVjdGlvblcsYW5pc290cm9waWNPdXQuYW5pc290cm9waWNOb3JtYWwsaW9yKTtcbiNlbHNlXG52ZWMzIHJlZnJhY3Rpb25WZWN0b3I9cmVmcmFjdCgtdmlld0RpcmVjdGlvblcsbm9ybWFsVyxpb3IpO1xuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTk1BUF9PUFBPU0lURVpcbnJlZnJhY3Rpb25WZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05NQVBfM0RcbiNpZmRlZiBTU19VU0VfTE9DQUxfUkVGUkFDVElPTk1BUF9DVUJJQ1xucmVmcmFjdGlvblZlY3Rvcj1wYXJhbGxheENvcnJlY3ROb3JtYWwodlBvc2l0aW9uVyxyZWZyYWN0aW9uVmVjdG9yLHJlZnJhY3Rpb25TaXplLHJlZnJhY3Rpb25Qb3NpdGlvbik7XG4jZW5kaWZcbnJlZnJhY3Rpb25WZWN0b3IueT1yZWZyYWN0aW9uVmVjdG9yLnkqdlJlZnJhY3Rpb25JbmZvcy53O3ZlYzMgcmVmcmFjdGlvbkNvb3Jkcz1yZWZyYWN0aW9uVmVjdG9yO3JlZnJhY3Rpb25Db29yZHM9dmVjMyhyZWZyYWN0aW9uTWF0cml4KnZlYzQocmVmcmFjdGlvbkNvb3JkcywwKSk7XG4jZWxzZVxuI2lmZGVmIFNTX1VTRV9USElDS05FU1NfQVNfREVQVEhcbnZlYzMgdlJlZnJhY3Rpb25VVlc9dmVjMyhyZWZyYWN0aW9uTWF0cml4Kih2aWV3KnZlYzQodlBvc2l0aW9uVytyZWZyYWN0aW9uVmVjdG9yKnRoaWNrbmVzcywxLjApKSk7XG4jZWxzZVxudmVjMyB2UmVmcmFjdGlvblVWVz12ZWMzKHJlZnJhY3Rpb25NYXRyaXgqKHZpZXcqdmVjNCh2UG9zaXRpb25XK3JlZnJhY3Rpb25WZWN0b3IqdlJlZnJhY3Rpb25JbmZvcy56LDEuMCkpKTtcbiNlbmRpZlxudmVjMiByZWZyYWN0aW9uQ29vcmRzPXZSZWZyYWN0aW9uVVZXLnh5L3ZSZWZyYWN0aW9uVVZXLno7cmVmcmFjdGlvbkNvb3Jkcy55PTEuMC1yZWZyYWN0aW9uQ29vcmRzLnk7XG4jZW5kaWZcbiNpZmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxucmVmcmFjdGlvbkxPRD1yZWZyYWN0aW9uTE9EKnZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueSt2UmVmcmFjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLno7XG4jaWZkZWYgU1NfTE9ESU5SRUZSQUNUSU9OQUxQSEFcbmZsb2F0IGF1dG9tYXRpY1JlZnJhY3Rpb25MT0Q9VU5QQUNLX0xPRChzYW1wbGVSZWZyYWN0aW9uKHJlZnJhY3Rpb25TYW1wbGVyLHJlZnJhY3Rpb25Db29yZHMpLmEpO2Zsb2F0IHJlcXVlc3RlZFJlZnJhY3Rpb25MT0Q9bWF4KGF1dG9tYXRpY1JlZnJhY3Rpb25MT0QscmVmcmFjdGlvbkxPRCk7XG4jZWxzZVxuZmxvYXQgcmVxdWVzdGVkUmVmcmFjdGlvbkxPRD1yZWZyYWN0aW9uTE9EO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUFMVElNRV9GSUxURVJJTkcpICYmIGRlZmluZWQoU1NfUkVGUkFDVElPTk1BUF8zRClcbmVudmlyb25tZW50UmVmcmFjdGlvbj12ZWM0KHJhZGlhbmNlKGFscGhhRyxyZWZyYWN0aW9uU2FtcGxlcixyZWZyYWN0aW9uQ29vcmRzLHZSZWZyYWN0aW9uRmlsdGVyaW5nSW5mbyksMS4wKTtcbiNlbHNlXG5lbnZpcm9ubWVudFJlZnJhY3Rpb249c2FtcGxlUmVmcmFjdGlvbkxvZChyZWZyYWN0aW9uU2FtcGxlcixyZWZyYWN0aW9uQ29vcmRzLHJlcXVlc3RlZFJlZnJhY3Rpb25MT0QpO1xuI2VuZGlmXG4jZWxzZVxuZmxvYXQgbG9kUmVmcmFjdGlvbk5vcm1hbGl6ZWQ9c2F0dXJhdGUocmVmcmFjdGlvbkxPRC9sb2cyKHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCkpO2Zsb2F0IGxvZFJlZnJhY3Rpb25Ob3JtYWxpemVkRG91YmxlZD1sb2RSZWZyYWN0aW9uTm9ybWFsaXplZCoyLjA7dmVjNCBlbnZpcm9ubWVudFJlZnJhY3Rpb25NaWQ9c2FtcGxlUmVmcmFjdGlvbihyZWZyYWN0aW9uU2FtcGxlcixyZWZyYWN0aW9uQ29vcmRzKTtpZiAobG9kUmVmcmFjdGlvbk5vcm1hbGl6ZWREb3VibGVkPDEuMCl7ZW52aXJvbm1lbnRSZWZyYWN0aW9uPW1peChcbnNhbXBsZVJlZnJhY3Rpb24ocmVmcmFjdGlvblNhbXBsZXJIaWdoLHJlZnJhY3Rpb25Db29yZHMpLFxuZW52aXJvbm1lbnRSZWZyYWN0aW9uTWlkLFxubG9kUmVmcmFjdGlvbk5vcm1hbGl6ZWREb3VibGVkXG4pO30gZWxzZSB7ZW52aXJvbm1lbnRSZWZyYWN0aW9uPW1peChcbmVudmlyb25tZW50UmVmcmFjdGlvbk1pZCxcbnNhbXBsZVJlZnJhY3Rpb24ocmVmcmFjdGlvblNhbXBsZXJMb3cscmVmcmFjdGlvbkNvb3JkcyksXG5sb2RSZWZyYWN0aW9uTm9ybWFsaXplZERvdWJsZWQtMS4wXG4pO31cbiNlbmRpZlxuI2lmZGVmIFNTX1JHQkRSRUZSQUNUSU9OXG5lbnZpcm9ubWVudFJlZnJhY3Rpb24ucmdiPWZyb21SR0JEKGVudmlyb25tZW50UmVmcmFjdGlvbik7XG4jZW5kaWZcbiNpZmRlZiBTU19HQU1NQVJFRlJBQ1RJT05cbmVudmlyb25tZW50UmVmcmFjdGlvbi5yZ2I9dG9MaW5lYXJTcGFjZShlbnZpcm9ubWVudFJlZnJhY3Rpb24ucmdiKTtcbiNlbmRpZlxucmV0dXJuIGVudmlyb25tZW50UmVmcmFjdGlvbjt9XG4jZW5kaWZcbiNkZWZpbmUgcGJyX2lubGluZVxuI2RlZmluZSBpbmxpbmVcbnN1YlN1cmZhY2VPdXRQYXJhbXMgc3ViU3VyZmFjZUJsb2NrKFxuaW4gdmVjMyB2U3ViU3VyZmFjZUludGVuc2l0eVxuLGluIHZlYzIgdlRoaWNrbmVzc1BhcmFtXG4saW4gdmVjNCB2VGludENvbG9yXG4saW4gdmVjMyBub3JtYWxXXG4saW4gdmVjMyB2U3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlXG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG4saW4gdmVjNCB0aGlja25lc3NNYXBcbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05JTlRFTlNJVFlfVEVYVFVSRVxuLGluIHZlYzQgcmVmcmFjdGlvbkludGVuc2l0eU1hcFxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkVcbixpbiB2ZWM0IHRyYW5zbHVjZW5jeUludGVuc2l0eU1hcFxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuLGluIG1hdDQgcmVmbGVjdGlvbk1hdHJpeFxuI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWYgIWRlZmluZWQoTk9STUFMKSB8fCAhZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbixpbiB2ZWMzIGlycmFkaWFuY2VWZWN0b3JfXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFQUxUSU1FX0ZJTFRFUklORylcbixpbiBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlclxuLGluIHZlYzIgdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbixpbiBzYW1wbGVyMkQgaWNkZlNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGluIHNhbXBsZXJDdWJlIGlycmFkaWFuY2VTYW1wbGVyXG4jZWxzZVxuLGluIHNhbXBsZXIyRCBpcnJhZGlhbmNlU2FtcGxlclxuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19SRUZSQUNUSU9OKSB8fCBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWSlcbixpbiB2ZWMzIHN1cmZhY2VBbGJlZG9cbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbixpbiB2ZWMzIHZQb3NpdGlvbldcbixpbiB2ZWMzIHZpZXdEaXJlY3Rpb25XXG4saW4gbWF0NCB2aWV3XG4saW4gdmVjNCB2UmVmcmFjdGlvbkluZm9zXG4saW4gbWF0NCByZWZyYWN0aW9uTWF0cml4XG4saW4gdmVjNCB2UmVmcmFjdGlvbk1pY3Jvc3VyZmFjZUluZm9zXG4saW4gdmVjNCB2TGlnaHRpbmdJbnRlbnNpdHlcbiNpZmRlZiBTU19MSU5LUkVGUkFDVElPTlRPVFJBTlNQQVJFTkNZXG4saW4gZmxvYXQgYWxwaGFcbiNlbmRpZlxuI2lmZGVmIFNTX0xPRElOUkVGUkFDVElPTkFMUEhBXG4saW4gZmxvYXQgTmRvdFZVbmNsYW1wZWRcbiNlbmRpZlxuI2lmZGVmIFNTX0xJTkVBUlNQRUNVTEFSUkVGUkFDVElPTlxuLGluIGZsb2F0IHJvdWdobmVzc1xuI2VuZGlmXG4saW4gZmxvYXQgYWxwaGFHXG4jaWZkZWYgU1NfUkVGUkFDVElPTk1BUF8zRFxuLGluIHNhbXBsZXJDdWJlIHJlZnJhY3Rpb25TYW1wbGVyXG4jaWZuZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4saW4gc2FtcGxlckN1YmUgcmVmcmFjdGlvblNhbXBsZXJMb3dcbixpbiBzYW1wbGVyQ3ViZSByZWZyYWN0aW9uU2FtcGxlckhpZ2hcbiNlbmRpZlxuI2Vsc2VcbixpbiBzYW1wbGVyMkQgcmVmcmFjdGlvblNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixpbiBzYW1wbGVyMkQgcmVmcmFjdGlvblNhbXBsZXJMb3dcbixpbiBzYW1wbGVyMkQgcmVmcmFjdGlvblNhbXBsZXJIaWdoXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG4saW4gYW5pc290cm9waWNPdXRQYXJhbXMgYW5pc290cm9waWNPdXRcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLGluIHZlYzIgdlJlZnJhY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbiNpZmRlZiBTU19VU0VfTE9DQUxfUkVGUkFDVElPTk1BUF9DVUJJQ1xuLGluIHZlYzMgcmVmcmFjdGlvblBvc2l0aW9uXG4saW4gdmVjMyByZWZyYWN0aW9uU2l6ZVxuI2VuZGlmXG4jaWZkZWYgU1NfRElTUEVSU0lPTlxuLGluIGZsb2F0IGRpc3BlcnNpb25cbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG4saW4gdmVjMyB2RGlmZnVzaW9uRGlzdGFuY2VcbixpbiB2ZWM0IHZUcmFuc2x1Y2VuY3lDb2xvclxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkVcbixpbiB2ZWM0IHRyYW5zbHVjZW5jeUNvbG9yTWFwXG4jZW5kaWZcbiNlbmRpZlxuKVxue3N1YlN1cmZhY2VPdXRQYXJhbXMgb3V0UGFyYW1zO291dFBhcmFtcy5zcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U9dlNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTtcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG5mbG9hdCByZWZyYWN0aW9uSW50ZW5zaXR5PXZTdWJTdXJmYWNlSW50ZW5zaXR5Lng7XG4jaWZkZWYgU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWVxucmVmcmFjdGlvbkludGVuc2l0eSo9KDEuMC1hbHBoYSk7b3V0UGFyYW1zLmFscGhhPTEuMDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5mbG9hdCB0cmFuc2x1Y2VuY3lJbnRlbnNpdHk9dlN1YlN1cmZhY2VJbnRlbnNpdHkueTtcbiNlbmRpZlxuI2lmZGVmIFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRVxuI2lmZGVmIFNTX1VTRV9HTFRGX1RFWFRVUkVTXG5mbG9hdCB0aGlja25lc3M9dGhpY2tuZXNzTWFwLmcqdlRoaWNrbmVzc1BhcmFtLnkrdlRoaWNrbmVzc1BhcmFtLng7XG4jZWxzZVxuZmxvYXQgdGhpY2tuZXNzPXRoaWNrbmVzc01hcC5yKnZUaGlja25lc3NQYXJhbS55K3ZUaGlja25lc3NQYXJhbS54O1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy50aGlja25lc3NNYXA9dGhpY2tuZXNzTWFwO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19SRUZSQUNUSU9OKSAmJiBkZWZpbmVkKFNTX1JFRlJBQ1RJT05fVVNFX0lOVEVOU0lUWV9GUk9NX1RISUNLTkVTUylcbiNpZmRlZiBTU19VU0VfR0xURl9URVhUVVJFU1xucmVmcmFjdGlvbkludGVuc2l0eSo9dGhpY2tuZXNzTWFwLnI7XG4jZWxzZVxucmVmcmFjdGlvbkludGVuc2l0eSo9dGhpY2tuZXNzTWFwLmc7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZKSAmJiBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWV9VU0VfSU5URU5TSVRZX0ZST01fVEhJQ0tORVNTKVxuI2lmZGVmIFNTX1VTRV9HTFRGX1RFWFRVUkVTXG50cmFuc2x1Y2VuY3lJbnRlbnNpdHkqPXRoaWNrbmVzc01hcC5hO1xuI2Vsc2VcbnRyYW5zbHVjZW5jeUludGVuc2l0eSo9dGhpY2tuZXNzTWFwLmI7XG4jZW5kaWZcbiNlbmRpZlxuI2Vsc2VcbmZsb2F0IHRoaWNrbmVzcz12VGhpY2tuZXNzUGFyYW0ueTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1NfUkVGUkFDVElPTikgJiYgZGVmaW5lZChTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkUpXG4jaWZkZWYgU1NfVVNFX0dMVEZfVEVYVFVSRVNcbnJlZnJhY3Rpb25JbnRlbnNpdHkqPXJlZnJhY3Rpb25JbnRlbnNpdHlNYXAucjtcbiNlbHNlXG5yZWZyYWN0aW9uSW50ZW5zaXR5Kj1yZWZyYWN0aW9uSW50ZW5zaXR5TWFwLmc7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZKSAmJiBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWUlOVEVOU0lUWV9URVhUVVJFKVxuI2lmZGVmIFNTX1VTRV9HTFRGX1RFWFRVUkVTXG50cmFuc2x1Y2VuY3lJbnRlbnNpdHkqPXRyYW5zbHVjZW5jeUludGVuc2l0eU1hcC5hO1xuI2Vsc2VcbnRyYW5zbHVjZW5jeUludGVuc2l0eSo9dHJhbnNsdWNlbmN5SW50ZW5zaXR5TWFwLmI7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxudGhpY2tuZXNzPW1heEVwcyh0aGlja25lc3MpO3ZlYzQgdHJhbnNsdWNlbmN5Q29sb3I9dlRyYW5zbHVjZW5jeUNvbG9yO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkVcbnRyYW5zbHVjZW5jeUNvbG9yKj10cmFuc2x1Y2VuY3lDb2xvck1hcDtcbiNlbmRpZlxudmVjMyB0cmFuc21pdHRhbmNlPXRyYW5zbWl0dGFuY2VCUkRGX0J1cmxleSh0cmFuc2x1Y2VuY3lDb2xvci5yZ2IsdkRpZmZ1c2lvbkRpc3RhbmNlLHRoaWNrbmVzcyk7dHJhbnNtaXR0YW5jZSo9dHJhbnNsdWNlbmN5SW50ZW5zaXR5O291dFBhcmFtcy50cmFuc21pdHRhbmNlPXRyYW5zbWl0dGFuY2U7b3V0UGFyYW1zLnRyYW5zbHVjZW5jeUludGVuc2l0eT10cmFuc2x1Y2VuY3lJbnRlbnNpdHk7XG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG52ZWM0IGVudmlyb25tZW50UmVmcmFjdGlvbj12ZWM0KDAuLDAuLDAuLDAuKTtcbiNpZmRlZiBTU19IQVNfVEhJQ0tORVNTXG5mbG9hdCBpb3I9dlJlZnJhY3Rpb25JbmZvcy55O1xuI2Vsc2VcbmZsb2F0IGlvcj12UmVmcmFjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnc7XG4jZW5kaWZcbiNpZmRlZiBTU19MT0RJTlJFRlJBQ1RJT05BTFBIQVxuZmxvYXQgcmVmcmFjdGlvbkFscGhhRz1hbHBoYUc7cmVmcmFjdGlvbkFscGhhRz1taXgoYWxwaGFHLDAuMCxjbGFtcChpb3IqMy4wLTIuMCwwLjAsMS4wKSk7ZmxvYXQgcmVmcmFjdGlvbkxPRD1nZXRMb2RGcm9tQWxwaGFHKHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyZWZyYWN0aW9uQWxwaGFHLE5kb3RWVW5jbGFtcGVkKTtcbiNlbGlmIGRlZmluZWQoU1NfTElORUFSU1BFQ1VMQVJSRUZSQUNUSU9OKVxuZmxvYXQgcmVmcmFjdGlvblJvdWdobmVzcz1hbHBoYUc7cmVmcmFjdGlvblJvdWdobmVzcz1taXgoYWxwaGFHLDAuMCxjbGFtcChpb3IqMy4wLTIuMCwwLjAsMS4wKSk7ZmxvYXQgcmVmcmFjdGlvbkxPRD1nZXRMaW5lYXJMb2RGcm9tUm91Z2huZXNzKHZSZWZyYWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyZWZyYWN0aW9uUm91Z2huZXNzKTtcbiNlbHNlXG5mbG9hdCByZWZyYWN0aW9uQWxwaGFHPWFscGhhRztyZWZyYWN0aW9uQWxwaGFHPW1peChhbHBoYUcsMC4wLGNsYW1wKGlvciozLjAtMi4wLDAuMCwxLjApKTtmbG9hdCByZWZyYWN0aW9uTE9EPWdldExvZEZyb21BbHBoYUcodlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54LHJlZnJhY3Rpb25BbHBoYUcpO1xuI2VuZGlmXG5mbG9hdCByZWZyYWN0aW9uX2lvcj12UmVmcmFjdGlvbkluZm9zLnk7XG4jaWZkZWYgU1NfRElTUEVSU0lPTlxuZmxvYXQgcmVhbElPUj0xLjAvcmVmcmFjdGlvbl9pb3I7ZmxvYXQgaW9yRGlzcGVyc2lvblNwcmVhZD0wLjA0KmRpc3BlcnNpb24qKHJlYWxJT1ItMS4wKTt2ZWMzIGlvcnM9dmVjMygxLjAvKHJlYWxJT1ItaW9yRGlzcGVyc2lvblNwcmVhZCkscmVmcmFjdGlvbl9pb3IsMS4wLyhyZWFsSU9SK2lvckRpc3BlcnNpb25TcHJlYWQpKTtmb3IgKGludCBpPTA7IGk8MzsgaSsrKSB7cmVmcmFjdGlvbl9pb3I9aW9yc1tpXTtcbiNlbmRpZlxudmVjNCBlbnZTYW1wbGU9c2FtcGxlRW52aXJvbm1lbnRSZWZyYWN0aW9uKHJlZnJhY3Rpb25faW9yLHRoaWNrbmVzcyxyZWZyYWN0aW9uTE9ELG5vcm1hbFcsdlBvc2l0aW9uVyx2aWV3RGlyZWN0aW9uVyx2aWV3LHZSZWZyYWN0aW9uSW5mb3MscmVmcmFjdGlvbk1hdHJpeCx2UmVmcmFjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLGFscGhhR1xuI2lmZGVmIFNTX1JFRlJBQ1RJT05NQVBfM0RcbixyZWZyYWN0aW9uU2FtcGxlclxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZnJhY3Rpb25TYW1wbGVyTG93XG4scmVmcmFjdGlvblNhbXBsZXJIaWdoXG4jZW5kaWZcbiNlbHNlXG4scmVmcmFjdGlvblNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZyYWN0aW9uU2FtcGxlckxvd1xuLHJlZnJhY3Rpb25TYW1wbGVySGlnaFxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0XG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmcmFjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuI2lmZGVmIFNTX1VTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG4scmVmcmFjdGlvblBvc2l0aW9uXG4scmVmcmFjdGlvblNpemVcbiNlbmRpZlxuKTtcbiNpZmRlZiBTU19ESVNQRVJTSU9OXG5lbnZpcm9ubWVudFJlZnJhY3Rpb25baV09ZW52U2FtcGxlW2ldO31cbiNlbHNlXG5lbnZpcm9ubWVudFJlZnJhY3Rpb249ZW52U2FtcGxlO1xuI2VuZGlmXG5lbnZpcm9ubWVudFJlZnJhY3Rpb24ucmdiKj12UmVmcmFjdGlvbkluZm9zLng7XG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG52ZWMzIHJlZnJhY3Rpb25UcmFuc21pdHRhbmNlPXZlYzMocmVmcmFjdGlvbkludGVuc2l0eSk7XG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG52ZWMzIHZvbHVtZUFsYmVkbz1jb21wdXRlQ29sb3JBdERpc3RhbmNlSW5NZWRpYSh2VGludENvbG9yLnJnYix2VGludENvbG9yLncpO3JlZnJhY3Rpb25UcmFuc21pdHRhbmNlKj1jb2NhTGFtYmVydCh2b2x1bWVBbGJlZG8sdGhpY2tuZXNzKTtcbiNlbGlmIGRlZmluZWQoU1NfTElOS1JFRlJBQ1RJT05UT1RSQU5TUEFSRU5DWSlcbmZsb2F0IG1heENoYW5uZWw9bWF4KG1heChzdXJmYWNlQWxiZWRvLnIsc3VyZmFjZUFsYmVkby5nKSxzdXJmYWNlQWxiZWRvLmIpO3ZlYzMgdm9sdW1lQWxiZWRvPXNhdHVyYXRlKG1heENoYW5uZWwqc3VyZmFjZUFsYmVkbyk7ZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYio9dm9sdW1lQWxiZWRvO1xuI2Vsc2VcbnZlYzMgdm9sdW1lQWxiZWRvPWNvbXB1dGVDb2xvckF0RGlzdGFuY2VJbk1lZGlhKHZUaW50Q29sb3IucmdiLHZUaW50Q29sb3Iudyk7cmVmcmFjdGlvblRyYW5zbWl0dGFuY2UqPWNvY2FMYW1iZXJ0KHZvbHVtZUFsYmVkbyx2VGhpY2tuZXNzUGFyYW0ueSk7XG4jZW5kaWZcbiNpZmRlZiBTU19BTEJFRE9GT1JSRUZSQUNUSU9OVElOVFxuZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYio9c3VyZmFjZUFsYmVkby5yZ2I7XG4jZW5kaWZcbm91dFBhcmFtcy5zdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG87b3V0UGFyYW1zLnJlZnJhY3Rpb25PcGFjaXR5PTEuLXJlZnJhY3Rpb25JbnRlbnNpdHk7XG4jaWZkZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbm91dFBhcmFtcy5zdXJmYWNlQWxiZWRvKj1vdXRQYXJhbXMucmVmcmFjdGlvbk9wYWNpdHk7XG4jZW5kaWZcbiNpZmRlZiBVTlVTRURfTVVMVElQTEVCT1VOQ0VTXG52ZWMzIGJvdW5jZVNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZT0oMi4wKnZTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UpLygxLjArdlNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZSk7b3V0UGFyYW1zLnNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1taXgoYm91bmNlU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlLHZTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UscmVmcmFjdGlvbkludGVuc2l0eSk7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLnJlZnJhY3Rpb25UcmFuc21pdHRhbmNlPXJlZnJhY3Rpb25UcmFuc21pdHRhbmNlO1xuI2VuZGlmXG5vdXRQYXJhbXMuZmluYWxSZWZyYWN0aW9uPWVudmlyb25tZW50UmVmcmFjdGlvbi5yZ2IqcmVmcmFjdGlvblRyYW5zbWl0dGFuY2UqdkxpZ2h0aW5nSW50ZW5zaXR5Lno7b3V0UGFyYW1zLmZpbmFsUmVmcmFjdGlvbio9dmVjMygxLjApLXZTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5lbnZpcm9ubWVudFJlZnJhY3Rpb249ZW52aXJvbm1lbnRSZWZyYWN0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT04pICYmIGRlZmluZWQoU1NfVFJBTlNMVUNFTkNZKVxuI2lmIGRlZmluZWQoTk9STUFMKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSB8fCAhZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUClcbnZlYzMgaXJyYWRpYW5jZVZlY3Rvcj12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChub3JtYWxXLDApKS54eXo7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbmlycmFkaWFuY2VWZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxuI2lmZGVmIElOVkVSVENVQklDTUFQXG5pcnJhZGlhbmNlVmVjdG9yLnkqPS0xLjA7XG4jZW5kaWZcbiNlbHNlXG52ZWMzIGlycmFkaWFuY2VWZWN0b3I9aXJyYWRpYW5jZVZlY3Rvcl87XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKVxuI2lmIGRlZmluZWQoUkVBTFRJTUVfRklMVEVSSU5HKVxudmVjMyByZWZyYWN0aW9uSXJyYWRpYW5jZT1pcnJhZGlhbmNlKHJlZmxlY3Rpb25TYW1wbGVyLC1pcnJhZGlhbmNlVmVjdG9yLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbywwLjAsc3VyZmFjZUFsYmVkbyxpcnJhZGlhbmNlVmVjdG9yXG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbixpY2RmU2FtcGxlclxuI2VuZGlmXG4pO1xuI2Vsc2VcbnZlYzMgcmVmcmFjdGlvbklycmFkaWFuY2U9Y29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZSgtaXJyYWRpYW5jZVZlY3Rvcik7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUClcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52ZWMzIGlycmFkaWFuY2VDb29yZHM9aXJyYWRpYW5jZVZlY3RvcjtcbiNlbHNlXG52ZWMyIGlycmFkaWFuY2VDb29yZHM9aXJyYWRpYW5jZVZlY3Rvci54eTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1BST0pFQ1RJT05cbmlycmFkaWFuY2VDb29yZHMvPWlycmFkaWFuY2VWZWN0b3IuejtcbiNlbmRpZlxuaXJyYWRpYW5jZUNvb3Jkcy55PTEuMC1pcnJhZGlhbmNlQ29vcmRzLnk7XG4jZW5kaWZcbnZlYzQgcmVmcmFjdGlvbklycmFkaWFuY2U9c2FtcGxlUmVmbGVjdGlvbihpcnJhZGlhbmNlU2FtcGxlciwtaXJyYWRpYW5jZUNvb3Jkcyk7XG4jaWZkZWYgUkdCRFJFRkxFQ1RJT05cbnJlZnJhY3Rpb25JcnJhZGlhbmNlLnJnYj1mcm9tUkdCRChyZWZyYWN0aW9uSXJyYWRpYW5jZSk7XG4jZW5kaWZcbiNpZmRlZiBHQU1NQVJFRkxFQ1RJT05cbnJlZnJhY3Rpb25JcnJhZGlhbmNlLnJnYj10b0xpbmVhclNwYWNlKHJlZnJhY3Rpb25JcnJhZGlhbmNlLnJnYik7XG4jZW5kaWZcbiNlbHNlXG52ZWM0IHJlZnJhY3Rpb25JcnJhZGlhbmNlPXZlYzQoMC4pO1xuI2VuZGlmXG5yZWZyYWN0aW9uSXJyYWRpYW5jZS5yZ2IqPXRyYW5zbWl0dGFuY2U7XG4jaWZkZWYgU1NfQUxCRURPRk9SVFJBTlNMVUNFTkNZVElOVFxucmVmcmFjdGlvbklycmFkaWFuY2UucmdiKj1zdXJmYWNlQWxiZWRvLnJnYjtcbiNlbmRpZlxub3V0UGFyYW1zLnJlZnJhY3Rpb25JcnJhZGlhbmNlPXJlZnJhY3Rpb25JcnJhZGlhbmNlLnJnYjtcbiNlbmRpZlxucmV0dXJuIG91dFBhcmFtczt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tTdWJTdXJmYWNlID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9jbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9wYnJCbG9ja1JlZmxlY3RhbmNlMFwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJDbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxuI2luY2x1ZGU8Y2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnM+XG4jZGVmaW5lIGlubGluZVxubGlnaHRpbmdJbmZvIGNvbXB1dGVDbHVzdGVyZWRMaWdodGluZyhcbnNhbXBsZXIyRCBsaWdodERhdGFUZXh0dXJlLFxuc2FtcGxlcjJEIHRpbGVNYXNrVGV4dHVyZSxcbnZlYzQgbGlnaHREYXRhLFxuaXZlYzIgc2xpY2VSYW5nZSxcbnZlYzMgVixcbnZlYzMgTixcbnZlYzMgcG9zVyxcbnZlYzMgc3VyZmFjZUFsYmVkbyxcbnJlZmxlY3Rpdml0eU91dFBhcmFtcyByZWZsZWN0aXZpdHlPdXRcbiNpZmRlZiBJUklERVNDRU5DRVxuLGZsb2F0IGlyaWRlc2NlbmNlSW50ZW5zaXR5XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbixzdWJTdXJmYWNlT3V0UGFyYW1zIHN1YlN1cmZhY2VPdXRcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuLGZsb2F0IEFBUm91Z2huZXNzRmFjdG9yXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0UGFyYW1zIGFuaXNvdHJvcGljT3V0XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuLHNoZWVuT3V0UGFyYW1zIHNoZWVuT3V0XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbixjbGVhcmNvYXRPdXRQYXJhbXMgY2xlYXJjb2F0T3V0XG4jZW5kaWZcbikge2Zsb2F0IE5kb3RWPWFic0Vwcyhkb3QoTixWKSk7XG4jaW5jbHVkZTxwYnJCbG9ja1JlZmxlY3RhbmNlMD5cbiNpZmRlZiBDTEVBUkNPQVRcbnNwZWN1bGFyRW52aXJvbm1lbnRSMD1jbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwO1xuI2VuZGlmXG5saWdodGluZ0luZm8gcmVzdWx0O2l2ZWMyIHRpbGVQb3NpdGlvbj1pdmVjMihnbF9GcmFnQ29vcmQueHkqbGlnaHREYXRhLnh5KTtpbnQgbWFza0hlaWdodD1pbnQobGlnaHREYXRhLnopO3RpbGVQb3NpdGlvbi55PW1pbih0aWxlUG9zaXRpb24ueSxtYXNrSGVpZ2h0LTEpO2l2ZWMyIGJhdGNoUmFuZ2U9c2xpY2VSYW5nZS9DTFVTVExJR0hUX0JBVENIO2ludCBiYXRjaE9mZnNldD1iYXRjaFJhbmdlLngqQ0xVU1RMSUdIVF9CQVRDSDt0aWxlUG9zaXRpb24ueSs9bWFza0hlaWdodCpiYXRjaFJhbmdlLng7Zm9yIChpbnQgaT1iYXRjaFJhbmdlLng7IGk8PWJhdGNoUmFuZ2UueTsgaSs9MSkge3VpbnQgbWFzaz11aW50KHRleGVsRmV0Y2godGlsZU1hc2tUZXh0dXJlLHRpbGVQb3NpdGlvbiwwKS5yKTt0aWxlUG9zaXRpb24ueSs9bWFza0hlaWdodDtpbnQgbWFza09mZnNldD1tYXgoc2xpY2VSYW5nZS54LWJhdGNoT2Zmc2V0LDApO2ludCBtYXNrV2lkdGg9bWluKHNsaWNlUmFuZ2UueS1iYXRjaE9mZnNldCsxLENMVVNUTElHSFRfQkFUQ0gpO21hc2s9ZXh0cmFjdEJpdHMobWFzayxtYXNrT2Zmc2V0LG1hc2tXaWR0aCk7d2hpbGUgKG1hc2sgIT0gMHUpIHt1aW50IGJpdD1tYXNrICYgLW1hc2s7bWFzayBePSBiaXQ7aW50IHBvc2l0aW9uPW9ubHlCaXRQb3NpdGlvbihiaXQpO0NsdXN0ZXJlZExpZ2h0IGxpZ2h0PWdldENsdXN0ZXJlZExpZ2h0KGxpZ2h0RGF0YVRleHR1cmUsYmF0Y2hPZmZzZXQrbWFza09mZnNldCtwb3NpdGlvbik7cHJlTGlnaHRpbmdJbmZvIHByZUluZm89Y29tcHV0ZVBvaW50QW5kU3BvdFByZUxpZ2h0aW5nSW5mbyhsaWdodC52TGlnaHREYXRhLFYsTixwb3NXKTtwcmVJbmZvLk5kb3RWPU5kb3RWO3ByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmKHByZUluZm8ubGlnaHRPZmZzZXQscHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCxsaWdodC52TGlnaHRGYWxsb2ZmLngsbGlnaHQudkxpZ2h0RmFsbG9mZi55KTtpZiAobGlnaHQudkxpZ2h0RGlyZWN0aW9uLnc+PTAuMCkge3ByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodC52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodC52TGlnaHREaXJlY3Rpb24udyxsaWdodC52TGlnaHREYXRhLncsbGlnaHQudkxpZ2h0RmFsbG9mZi56LGxpZ2h0LnZMaWdodEZhbGxvZmYudyk7fVxucHJlSW5mby5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhyZWZsZWN0aXZpdHlPdXQucm91Z2huZXNzLGxpZ2h0LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtwcmVJbmZvLmRpZmZ1c2VSb3VnaG5lc3M9cmVmbGVjdGl2aXR5T3V0LmRpZmZ1c2VSb3VnaG5lc3M7cHJlSW5mby5zdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG87XG4jaWZkZWYgSVJJREVTQ0VOQ0VcbnByZUluZm8uaXJpZGVzY2VuY2VJbnRlbnNpdHk9aXJpZGVzY2VuY2VJbnRlbnNpdHk7XG4jZW5kaWZcbmxpZ2h0aW5nSW5mbyBpbmZvO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWV9MRUdBQ1lcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZVRyYW5zbWl0dGVkTGlnaHRpbmcocHJlSW5mbyxsaWdodC52TGlnaHREaWZmdXNlLnJnYixzdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2UpO2luZm8uZGlmZnVzZVRyYW5zbWlzc2lvbj12ZWMzKDApO1xuI2Vsc2VcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IpKigxLjAtc3ViU3VyZmFjZU91dC50cmFuc2x1Y2VuY3lJbnRlbnNpdHkpO2luZm8uZGlmZnVzZVRyYW5zbWlzc2lvbj1jb21wdXRlRGlmZnVzZVRyYW5zbWl0dGVkTGlnaHRpbmcocHJlSW5mbyxsaWdodC52TGlnaHREaWZmdXNlLnJnYixzdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2UpO1xuI2VuZGlmXG4jZWxzZVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxsaWdodC52TGlnaHREaWZmdXNlLnJnYik7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZiBDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSXG52ZWMzIG1ldGFsRnJlc25lbD1yZWZsZWN0aXZpdHlPdXQuc3BlY3VsYXJXZWlnaHQqZ2V0RjgyU3BlY3VsYXIocHJlSW5mby5WZG90SCxzcGVjdWxhckVudmlyb25tZW50UjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTAscmVmbGVjdGl2aXR5T3V0LnJvdWdobmVzcyk7dmVjMyBkaWVsZWN0cmljRnJlc25lbD1mcmVzbmVsU2NobGlja0dHWChwcmVJbmZvLlZkb3RILHJlZmxlY3Rpdml0eU91dC5kaWVsZWN0cmljQ29sb3JGMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCk7dmVjMyBjb2xvcmVkRnJlc25lbD1taXgoZGllbGVjdHJpY0ZyZXNuZWwsbWV0YWxGcmVzbmVsLHJlZmxlY3Rpdml0eU91dC5tZXRhbGxpYyk7XG4jZWxzZVxudmVjMyBjb2xvcmVkRnJlc25lbD1mcmVzbmVsU2NobGlja0dHWChwcmVJbmZvLlZkb3RILHNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCk7XG4jZW5kaWZcbiNpZm5kZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbmZsb2F0IE5kb3RIPWRvdChOLHByZUluZm8uSCk7dmVjMyBmcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKE5kb3RILHZlYzMocmVmbGVjdGFuY2VGMCksc3BlY3VsYXJFbnZpcm9ubWVudFI5MCk7aW5mby5kaWZmdXNlKj0odmVjMygxLjApLWZyZXNuZWwpO1xuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbmluZm8uc3BlY3VsYXI9Y29tcHV0ZUFuaXNvdHJvcGljU3BlY3VsYXJMaWdodGluZyhwcmVJbmZvLFYsTixhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY1RhbmdlbnQsYW5pc290cm9waWNPdXQuYW5pc290cm9waWNCaXRhbmdlbnQsYW5pc290cm9waWNPdXQuYW5pc290cm9weSxjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHNwZWN1bGFyRW52aXJvbm1lbnRSOTAsQUFSb3VnaG5lc3NGYWN0b3IsbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IpO1xuI2Vsc2VcbmluZm8uc3BlY3VsYXI9Y29tcHV0ZVNwZWN1bGFyTGlnaHRpbmcocHJlSW5mbyxOLHNwZWN1bGFyRW52aXJvbm1lbnRSMCxjb2xvcmVkRnJlc25lbCxBQVJvdWdobmVzc0ZhY3RvcixsaWdodC52TGlnaHREaWZmdXNlLnJnYik7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG4jaWZkZWYgU0hFRU5fTElOS1dJVEhBTEJFRE9cbnByZUluZm8ucm91Z2huZXNzPXNoZWVuT3V0LnNoZWVuSW50ZW5zaXR5O1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoc2hlZW5PdXQuc2hlZW5Sb3VnaG5lc3MsbGlnaHQudkxpZ2h0U3BlY3VsYXIuYSxwcmVJbmZvLmxpZ2h0RGlzdGFuY2UpO1xuI2VuZGlmXG5pbmZvLnNoZWVuPWNvbXB1dGVTaGVlbkxpZ2h0aW5nKHByZUluZm8sbm9ybWFsVyxzaGVlbk91dC5zaGVlbkNvbG9yLHNwZWN1bGFyRW52aXJvbm1lbnRSOTAsQUFSb3VnaG5lc3NGYWN0b3IsbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5wcmVJbmZvLnJvdWdobmVzcz1hZGp1c3RSb3VnaG5lc3NGcm9tTGlnaHRQcm9wZXJ0aWVzKGNsZWFyY29hdE91dC5jbGVhckNvYXRSb3VnaG5lc3MsbGlnaHQudkxpZ2h0U3BlY3VsYXIuYSxwcmVJbmZvLmxpZ2h0RGlzdGFuY2UpO2luZm8uY2xlYXJDb2F0PWNvbXB1dGVDbGVhckNvYXRMaWdodGluZyhwcmVJbmZvLGNsZWFyY29hdE91dC5jbGVhckNvYXROb3JtYWxXLGNsZWFyY29hdE91dC5jbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnMueCxjbGVhcmNvYXRPdXQuY2xlYXJDb2F0SW50ZW5zaXR5LGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiKTtcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxuZmxvYXQgYWJzb3JwdGlvbj1jb21wdXRlQ2xlYXJDb2F0TGlnaHRpbmdBYnNvcnB0aW9uKGNsZWFyY29hdE91dC5jbGVhckNvYXROZG90VlJlZnJhY3QscHJlSW5mby5MLGNsZWFyY29hdE91dC5jbGVhckNvYXROb3JtYWxXLGNsZWFyY29hdE91dC5jbGVhckNvYXRDb2xvcixjbGVhcmNvYXRPdXQuY2xlYXJDb2F0VGhpY2tuZXNzLGNsZWFyY29hdE91dC5jbGVhckNvYXRJbnRlbnNpdHkpO2luZm8uZGlmZnVzZSo9YWJzb3JwdGlvbjtcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbio9YWJzb3JwdGlvbjtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuaW5mby5zcGVjdWxhcio9YWJzb3JwdGlvbjtcbiNlbmRpZlxuI2VuZGlmXG5pbmZvLmRpZmZ1c2UqPWluZm8uY2xlYXJDb2F0Lnc7XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5pbmZvLmRpZmZ1c2VUcmFuc21pc3Npb24qPWluZm8uY2xlYXJDb2F0Lnc7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbmluZm8uc3BlY3VsYXIqPWluZm8uY2xlYXJDb2F0Lnc7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuaW5mby5zaGVlbio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2VuZGlmXG5yZXN1bHQuZGlmZnVzZSs9aW5mby5kaWZmdXNlO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxucmVzdWx0LmRpZmZ1c2VUcmFuc21pc3Npb24rPWluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbjtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0LnNwZWN1bGFyKz1pbmZvLnNwZWN1bGFyO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5yZXN1bHQuY2xlYXJDb2F0Kz1pbmZvLmNsZWFyQ29hdDtcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5yZXN1bHQuc2hlZW4rPWluZm8uc2hlZW47XG4jZW5kaWZcbn1cbmJhdGNoT2Zmc2V0Kz1DTFVTVExJR0hUX0JBVENIO31cbnJldHVybiByZXN1bHQ7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9kZWNhbEZyYWdtZW50RGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwicGJyRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gdmVjNCB2RXllUG9zaXRpb247dW5pZm9ybSB2ZWMzIHZSZWZsZWN0aW9uQ29sb3I7dW5pZm9ybSB2ZWM0IHZBbGJlZG9Db2xvcjt1bmlmb3JtIGZsb2F0IGJhc2VXZWlnaHQ7dW5pZm9ybSBmbG9hdCBiYXNlRGlmZnVzZVJvdWdobmVzczt1bmlmb3JtIHZlYzQgdkxpZ2h0aW5nSW50ZW5zaXR5O3VuaWZvcm0gdmVjNCB2UmVmbGVjdGl2aXR5Q29sb3I7dW5pZm9ybSB2ZWM0IHZNZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yczt1bmlmb3JtIHZlYzMgdkVtaXNzaXZlQ29sb3I7dW5pZm9ybSBmbG9hdCB2aXNpYmlsaXR5O3VuaWZvcm0gdmVjMyB2QW1iaWVudENvbG9yO1xuI2lmZGVmIEFMQkVET1xudW5pZm9ybSB2ZWMyIHZBbGJlZG9JbmZvcztcbiNlbmRpZlxuI2lmZGVmIEJBU0VfV0VJR0hUXG51bmlmb3JtIHZlYzIgdkJhc2VXZWlnaHRJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEJBU0VfRElGRlVTRV9ST1VHSE5FU1NcbnVuaWZvcm0gdmVjMiB2QmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEFNQklFTlRcbnVuaWZvcm0gdmVjNCB2QW1iaWVudEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgQlVNUFxudW5pZm9ybSB2ZWMzIHZCdW1wSW5mb3M7dW5pZm9ybSB2ZWMyIHZUYW5nZW50U3BhY2VQYXJhbXM7XG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZXG51bmlmb3JtIHZlYzIgdk9wYWNpdHlJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEVNSVNTSVZFXG51bmlmb3JtIHZlYzIgdkVtaXNzaXZlSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBMSUdIVE1BUFxudW5pZm9ybSB2ZWMyIHZMaWdodG1hcEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElWSVRZXG51bmlmb3JtIHZlYzMgdlJlZmxlY3Rpdml0eUluZm9zO1xuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFTUFQXG51bmlmb3JtIHZlYzIgdk1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvcztcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9TUEhFUklDQUwpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OKSB8fCBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pIHx8IGRlZmluZWQoUFJFUEFTUylcbnVuaWZvcm0gbWF0NCB2aWV3O1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxudW5pZm9ybSB2ZWMyIHZSZWZsZWN0aW9uSW5mb3M7XG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG51bmlmb3JtIHZlYzIgdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvO1xuI2VuZGlmXG51bmlmb3JtIG1hdDQgcmVmbGVjdGlvbk1hdHJpeDt1bmlmb3JtIHZlYzMgdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcztcbiNpZiBkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OKVxudW5pZm9ybSB2ZWMzIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb247XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFVTRV9MT0NBTF9SRUZMRUNUSU9OTUFQX0NVQklDKSAmJiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfQ1VCSUMpXG51bmlmb3JtIHZlYzMgdlJlZmxlY3Rpb25Qb3NpdGlvbjt1bmlmb3JtIHZlYzMgdlJlZmxlY3Rpb25TaXplO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pICYmIGRlZmluZWQoU1NfVVNFX0xPQ0FMX1JFRlJBQ1RJT05NQVBfQ1VCSUMpXG51bmlmb3JtIHZlYzMgdlJlZnJhY3Rpb25Qb3NpdGlvbjt1bmlmb3JtIHZlYzMgdlJlZnJhY3Rpb25TaXplO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG51bmlmb3JtIHZlYzIgdkNsZWFyQ29hdFBhcmFtczt1bmlmb3JtIHZlYzQgdkNsZWFyQ29hdFJlZnJhY3Rpb25QYXJhbXM7XG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRSkgfHwgZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MpXG51bmlmb3JtIHZlYzQgdkNsZWFyQ29hdEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbnVuaWZvcm0gbWF0NCBjbGVhckNvYXRNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1NcbnVuaWZvcm0gbWF0NCBjbGVhckNvYXRSb3VnaG5lc3NNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfQlVNUFxudW5pZm9ybSB2ZWMyIHZDbGVhckNvYXRCdW1wSW5mb3M7dW5pZm9ybSB2ZWMyIHZDbGVhckNvYXRUYW5nZW50U3BhY2VQYXJhbXM7dW5pZm9ybSBtYXQ0IGNsZWFyQ29hdEJ1bXBNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxudW5pZm9ybSB2ZWM0IHZDbGVhckNvYXRUaW50UGFyYW1zO3VuaWZvcm0gZmxvYXQgY2xlYXJDb2F0Q29sb3JBdERpc3RhbmNlO1xuI2lmZGVmIENMRUFSQ09BVF9USU5UX1RFWFRVUkVcbnVuaWZvcm0gdmVjMiB2Q2xlYXJDb2F0VGludEluZm9zO3VuaWZvcm0gbWF0NCBjbGVhckNvYXRUaW50TWF0cml4O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG51bmlmb3JtIHZlYzQgdklyaWRlc2NlbmNlUGFyYW1zO1xuI2lmIGRlZmluZWQoSVJJREVTQ0VOQ0VfVEVYVFVSRSkgfHwgZGVmaW5lZChJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSlcbnVuaWZvcm0gdmVjNCB2SXJpZGVzY2VuY2VJbmZvcztcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RFWFRVUkVcbnVuaWZvcm0gbWF0NCBpcmlkZXNjZW5jZU1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFXG51bmlmb3JtIG1hdDQgaXJpZGVzY2VuY2VUaGlja25lc3NNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG51bmlmb3JtIHZlYzMgdkFuaXNvdHJvcHk7XG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZBbmlzb3Ryb3B5SW5mb3M7dW5pZm9ybSBtYXQ0IGFuaXNvdHJvcHlNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG51bmlmb3JtIHZlYzQgdlNoZWVuQ29sb3I7XG4jaWZkZWYgU0hFRU5fUk9VR0hORVNTXG51bmlmb3JtIGZsb2F0IHZTaGVlblJvdWdobmVzcztcbiNlbmRpZlxuI2lmIGRlZmluZWQoU0hFRU5fVEVYVFVSRSkgfHwgZGVmaW5lZChTSEVFTl9URVhUVVJFX1JPVUdITkVTUylcbnVuaWZvcm0gdmVjNCB2U2hlZW5JbmZvcztcbiNlbmRpZlxuI2lmZGVmIFNIRUVOX1RFWFRVUkVcbnVuaWZvcm0gbWF0NCBzaGVlbk1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNIRUVOX1RFWFRVUkVfUk9VR0hORVNTXG51bmlmb3JtIG1hdDQgc2hlZW5Sb3VnaG5lc3NNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNVQlNVUkZBQ0VcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG51bmlmb3JtIHZlYzQgdlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvczt1bmlmb3JtIHZlYzQgdlJlZnJhY3Rpb25JbmZvczt1bmlmb3JtIG1hdDQgcmVmcmFjdGlvbk1hdHJpeDtcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbnVuaWZvcm0gdmVjMiB2UmVmcmFjdGlvbkZpbHRlcmluZ0luZm87XG4jZW5kaWZcbiNpZmRlZiBTU19ESVNQRVJTSU9OXG51bmlmb3JtIGZsb2F0IGRpc3BlcnNpb247XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZUaGlja25lc3NJbmZvczt1bmlmb3JtIG1hdDQgdGhpY2tuZXNzTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFXG51bmlmb3JtIHZlYzIgdlJlZnJhY3Rpb25JbnRlbnNpdHlJbmZvczt1bmlmb3JtIG1hdDQgcmVmcmFjdGlvbkludGVuc2l0eU1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWUlOVEVOU0lUWV9URVhUVVJFXG51bmlmb3JtIHZlYzIgdlRyYW5zbHVjZW5jeUludGVuc2l0eUluZm9zO3VuaWZvcm0gbWF0NCB0cmFuc2x1Y2VuY3lJbnRlbnNpdHlNYXRyaXg7XG4jZW5kaWZcbnVuaWZvcm0gdmVjMiB2VGhpY2tuZXNzUGFyYW07dW5pZm9ybSB2ZWMzIHZEaWZmdXNpb25EaXN0YW5jZTt1bmlmb3JtIHZlYzQgdlRpbnRDb2xvcjt1bmlmb3JtIHZlYzMgdlN1YlN1cmZhY2VJbnRlbnNpdHk7dW5pZm9ybSB2ZWM0IHZUcmFuc2x1Y2VuY3lDb2xvcjtcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFXG51bmlmb3JtIHZlYzIgdlRyYW5zbHVjZW5jeUNvbG9ySW5mb3M7dW5pZm9ybSBtYXQ0IHRyYW5zbHVjZW5jeUNvbG9yTWF0cml4O1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTXG4jaWZkZWYgU1NfU0NBVFRFUklOR1xudW5pZm9ybSBmbG9hdCBzY2F0dGVyaW5nRGlmZnVzaW9uUHJvZmlsZTtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbnVuaWZvcm0gdmVjMiB2RGVidWdNb2RlO1xuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG51bmlmb3JtIHZlYzQgdkRldGFpbEluZm9zO1xuI2VuZGlmXG4jaW5jbHVkZTxkZWNhbEZyYWdtZW50RGVjbGFyYXRpb24+XG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZmRlZiBTUEhFUklDQUxfSEFSTU9OSUNTXG51bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwwMDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwxXzE7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMTA7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMTE7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMl8yO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDJfMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyMDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyMjtcbiNlbHNlXG51bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFg7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxZO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFhYX1paO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWVlfWlo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxaWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFhZO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWVo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxaWDtcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIEFERElUSU9OQUxfRlJBR01FTlRfREVDTEFSQVRJT05cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyRnJhZ21lbnREZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vc2FtcGxlckZyYWdtZW50QWx0ZXJuYXRlRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwicGJyRnJhZ21lbnRTYW1wbGVyc0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTEJFRE8sX1ZBUllJTkdOQU1FXyxBbGJlZG8sX1NBTVBMRVJOQU1FXyxhbGJlZG8pXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfV0VJR0hULF9WQVJZSU5HTkFNRV8sQmFzZVdlaWdodCxfU0FNUExFUk5BTUVfLGJhc2VXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcyxfU0FNUExFUk5BTUVfLGJhc2VEaWZmdXNlUm91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5ULF9WQVJZSU5HTkFNRV8sQW1iaWVudCxfU0FNUExFUk5BTUVfLGFtYmllbnQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLE9QQUNJVFksX1ZBUllJTkdOQU1FXyxPcGFjaXR5LF9TQU1QTEVSTkFNRV8sb3BhY2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sRU1JU1NJVkUsX1ZBUllJTkdOQU1FXyxFbWlzc2l2ZSxfU0FNUExFUk5BTUVfLGVtaXNzaXZlKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxMSUdIVE1BUCxfVkFSWUlOR05BTUVfLExpZ2h0bWFwLF9TQU1QTEVSTkFNRV8sbGlnaHRtYXApXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFJFRkxFQ1RJVklUWSxfVkFSWUlOR05BTUVfLFJlZmxlY3Rpdml0eSxfU0FNUExFUk5BTUVfLHJlZmxlY3Rpdml0eSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTUlDUk9TVVJGQUNFTUFQLF9WQVJZSU5HTkFNRV8sTWljcm9TdXJmYWNlU2FtcGxlcixfU0FNUExFUk5BTUVfLG1pY3JvU3VyZmFjZSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTUVUQUxMSUNfUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxNZXRhbGxpY1JlZmxlY3RhbmNlLF9TQU1QTEVSTkFNRV8sbWV0YWxsaWNSZWZsZWN0YW5jZSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxSZWZsZWN0YW5jZSxfU0FNUExFUk5BTUVfLHJlZmxlY3RhbmNlKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsLF9TQU1QTEVSTkFNRV8sZGVjYWwpXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0LF9TQU1QTEVSTkFNRV8sY2xlYXJDb2F0KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50QWx0ZXJuYXRlRGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRSb3VnaG5lc3MpXG4jaWYgZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MpXG51bmlmb3JtIHNhbXBsZXIyRCBjbGVhckNvYXRSb3VnaG5lc3NTYW1wbGVyO1xuI2VuZGlmXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9CVU1QLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0QnVtcCxfU0FNUExFUk5BTUVfLGNsZWFyQ29hdEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9USU5UX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRUaW50LF9TQU1QTEVSTkFNRV8sY2xlYXJDb2F0VGludClcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZSxfU0FNUExFUk5BTUVfLGlyaWRlc2NlbmNlKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlVGhpY2tuZXNzLF9TQU1QTEVSTkFNRV8saXJpZGVzY2VuY2VUaGlja25lc3MpXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sU2hlZW4sX1NBTVBMRVJOQU1FXyxzaGVlbilcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudEFsdGVybmF0ZURlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTaGVlblJvdWdobmVzcylcbiNpZiBkZWZpbmVkKFNIRUVOX1JPVUdITkVTUykgJiYgZGVmaW5lZChTSEVFTl9URVhUVVJFX1JPVUdITkVTUylcbnVuaWZvcm0gc2FtcGxlcjJEIHNoZWVuUm91Z2huZXNzU2FtcGxlcjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU5JU09UUk9QSUNfVEVYVFVSRSxfVkFSWUlOR05BTUVfLEFuaXNvdHJvcHksX1NBTVBMRVJOQU1FXyxhbmlzb3Ryb3B5KVxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbiNkZWZpbmUgc2FtcGxlUmVmbGVjdGlvbihzLGMpIHRleHR1cmVDdWJlKHMsYylcbnVuaWZvcm0gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXI7XG4jaWZkZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbiNkZWZpbmUgc2FtcGxlUmVmbGVjdGlvbkxvZChzLGMsbCkgdGV4dHVyZUN1YmVMb2RFWFQocyxjLGwpXG4jZWxzZVxudW5pZm9ybSBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlckxvdzt1bmlmb3JtIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVySGlnaDtcbiNlbmRpZlxuI2lmZGVmIFVTRUlSUkFESUFOQ0VNQVBcbnVuaWZvcm0gc2FtcGxlckN1YmUgaXJyYWRpYW5jZVNhbXBsZXI7XG4jZW5kaWZcbiNlbHNlXG4jZGVmaW5lIHNhbXBsZVJlZmxlY3Rpb24ocyxjKSB0ZXh0dXJlMkQocyxjKVxudW5pZm9ybSBzYW1wbGVyMkQgcmVmbGVjdGlvblNhbXBsZXI7XG4jaWZkZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbiNkZWZpbmUgc2FtcGxlUmVmbGVjdGlvbkxvZChzLGMsbCkgdGV4dHVyZTJETG9kRVhUKHMsYyxsKVxuI2Vsc2VcbnVuaWZvcm0gc2FtcGxlcjJEIHJlZmxlY3Rpb25TYW1wbGVyTG93O3VuaWZvcm0gc2FtcGxlcjJEIHJlZmxlY3Rpb25TYW1wbGVySGlnaDtcbiNlbmRpZlxuI2lmZGVmIFVTRUlSUkFESUFOQ0VNQVBcbnVuaWZvcm0gc2FtcGxlcjJEIGlycmFkaWFuY2VTYW1wbGVyO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblVWVztcbiNlbHNlXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2ZWMzIHZEaXJlY3Rpb25XO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEVOVklST05NRU5UQlJERlxudW5pZm9ybSBzYW1wbGVyMkQgZW52aXJvbm1lbnRCcmRmU2FtcGxlcjtcbiNlbmRpZlxuI2lmZGVmIFNVQlNVUkZBQ0VcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG4jaWZkZWYgU1NfUkVGUkFDVElPTk1BUF8zRFxuI2RlZmluZSBzYW1wbGVSZWZyYWN0aW9uKHMsYykgdGV4dHVyZUN1YmUocyxjKVxudW5pZm9ybSBzYW1wbGVyQ3ViZSByZWZyYWN0aW9uU2FtcGxlcjtcbiNpZmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2RlZmluZSBzYW1wbGVSZWZyYWN0aW9uTG9kKHMsYyxsKSB0ZXh0dXJlQ3ViZUxvZEVYVChzLGMsbClcbiNlbHNlXG51bmlmb3JtIHNhbXBsZXJDdWJlIHJlZnJhY3Rpb25TYW1wbGVyTG93O3VuaWZvcm0gc2FtcGxlckN1YmUgcmVmcmFjdGlvblNhbXBsZXJIaWdoO1xuI2VuZGlmXG4jZWxzZVxuI2RlZmluZSBzYW1wbGVSZWZyYWN0aW9uKHMsYykgdGV4dHVyZTJEKHMsYylcbnVuaWZvcm0gc2FtcGxlcjJEIHJlZnJhY3Rpb25TYW1wbGVyO1xuI2lmZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jZGVmaW5lIHNhbXBsZVJlZnJhY3Rpb25Mb2QocyxjLGwpIHRleHR1cmUyRExvZEVYVChzLGMsbClcbiNlbHNlXG51bmlmb3JtIHNhbXBsZXIyRCByZWZyYWN0aW9uU2FtcGxlckxvdzt1bmlmb3JtIHNhbXBsZXIyRCByZWZyYWN0aW9uU2FtcGxlckhpZ2g7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRoaWNrbmVzcyxfU0FNUExFUk5BTUVfLHRoaWNrbmVzcylcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sUmVmcmFjdGlvbkludGVuc2l0eSxfU0FNUExFUk5BTUVfLHJlZnJhY3Rpb25JbnRlbnNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUlOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5SW50ZW5zaXR5LF9TQU1QTEVSTkFNRV8sdHJhbnNsdWNlbmN5SW50ZW5zaXR5KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5Q29sb3IsX1NBTVBMRVJOQU1FXyx0cmFuc2x1Y2VuY3lDb2xvcilcbiNlbmRpZlxuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG51bmlmb3JtIHNhbXBsZXIyRCBpY2RmU2FtcGxlcjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBiclVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgbGF5b3V0KHN0ZDE0MCxjb2x1bW5fbWFqb3IpIHVuaWZvcm07dW5pZm9ybSBNYXRlcmlhbCB7dmVjMiB2QWxiZWRvSW5mb3M7dmVjMiB2QmFzZVdlaWdodEluZm9zO3ZlYzIgdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M7dmVjNCB2QW1iaWVudEluZm9zO3ZlYzIgdk9wYWNpdHlJbmZvczt2ZWMyIHZFbWlzc2l2ZUluZm9zO3ZlYzIgdkxpZ2h0bWFwSW5mb3M7dmVjMyB2UmVmbGVjdGl2aXR5SW5mb3M7dmVjMiB2TWljcm9TdXJmYWNlU2FtcGxlckluZm9zO3ZlYzMgdkJ1bXBJbmZvczttYXQ0IGFsYmVkb01hdHJpeDttYXQ0IGJhc2VXZWlnaHRNYXRyaXg7bWF0NCBiYXNlRGlmZnVzZVJvdWdobmVzc01hdHJpeDttYXQ0IGFtYmllbnRNYXRyaXg7bWF0NCBvcGFjaXR5TWF0cml4O21hdDQgZW1pc3NpdmVNYXRyaXg7bWF0NCBsaWdodG1hcE1hdHJpeDttYXQ0IHJlZmxlY3Rpdml0eU1hdHJpeDttYXQ0IG1pY3JvU3VyZmFjZVNhbXBsZXJNYXRyaXg7bWF0NCBidW1wTWF0cml4O3ZlYzIgdlRhbmdlbnRTcGFjZVBhcmFtczt2ZWM0IHZBbGJlZG9Db2xvcjtmbG9hdCBiYXNlV2VpZ2h0O2Zsb2F0IGJhc2VEaWZmdXNlUm91Z2huZXNzO3ZlYzQgdkxpZ2h0aW5nSW50ZW5zaXR5O2Zsb2F0IHBvaW50U2l6ZTt2ZWM0IHZSZWZsZWN0aXZpdHlDb2xvcjt2ZWMzIHZFbWlzc2l2ZUNvbG9yO3ZlYzMgdkFtYmllbnRDb2xvcjt2ZWMyIHZEZWJ1Z01vZGU7dmVjNCB2TWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM7dmVjMiB2TWV0YWxsaWNSZWZsZWN0YW5jZUluZm9zO21hdDQgbWV0YWxsaWNSZWZsZWN0YW5jZU1hdHJpeDt2ZWMyIHZSZWZsZWN0YW5jZUluZm9zO21hdDQgcmVmbGVjdGFuY2VNYXRyaXg7dmVjNCBjYW1lcmFJbmZvO3ZlYzIgdlJlZmxlY3Rpb25JbmZvczttYXQ0IHJlZmxlY3Rpb25NYXRyaXg7dmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO3ZlYzMgdlJlZmxlY3Rpb25Qb3NpdGlvbjt2ZWMzIHZSZWZsZWN0aW9uU2l6ZTt2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzt2ZWMzIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb247dmVjMyB2UmVmbGVjdGlvbkNvbG9yO3ZlYzMgdlNwaGVyaWNhbEwwMDt2ZWMzIHZTcGhlcmljYWxMMV8xO3ZlYzMgdlNwaGVyaWNhbEwxMDt2ZWMzIHZTcGhlcmljYWxMMTE7dmVjMyB2U3BoZXJpY2FsTDJfMjt2ZWMzIHZTcGhlcmljYWxMMl8xO3ZlYzMgdlNwaGVyaWNhbEwyMDt2ZWMzIHZTcGhlcmljYWxMMjE7dmVjMyB2U3BoZXJpY2FsTDIyO3ZlYzMgdlNwaGVyaWNhbFg7dmVjMyB2U3BoZXJpY2FsWTt2ZWMzIHZTcGhlcmljYWxaO3ZlYzMgdlNwaGVyaWNhbFhYX1paO3ZlYzMgdlNwaGVyaWNhbFlZX1paO3ZlYzMgdlNwaGVyaWNhbFpaO3ZlYzMgdlNwaGVyaWNhbFhZO3ZlYzMgdlNwaGVyaWNhbFlaO3ZlYzMgdlNwaGVyaWNhbFpYO1xuI2RlZmluZSBBRERJVElPTkFMX1VCT19ERUNMQVJBVElPTlxufTtcbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclVib0RlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzYW1wbGVyRnJhZ21lbnRBbHRlcm5hdGVEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBfREVGSU5FTkFNRV9cbiNpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09MVxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVYxXG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09MlxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVYyXG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09M1xuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVYzXG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09NFxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVY0XG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09NVxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVY1XG4jZWxpZiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09NlxuI2RlZmluZSB2X1ZBUllJTkdOQU1FX1VWIHZNYWluVVY2XG4jZWxzZVxudmFyeWluZyB2ZWMyIHZfVkFSWUlOR05BTUVfVVY7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzYW1wbGVyRnJhZ21lbnRBbHRlcm5hdGVEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29pdERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc3ViU3VyZmFjZVNjYXR0ZXJpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1wb3J0YW5jZVNhbXBsaW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickhlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbWFnZVByb2Nlc3NpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c0ZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hhcm1vbmljc0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ1NldHVwRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickRpcmVjdExpZ2h0aW5nRmFsbG9mZkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCUkRGRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hkckZpbHRlcmluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJJQkxGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcEZyYWdtZW50TWFpbkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcmVmbGVjdGlvbkZ1bmN0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrQWxiZWRvT3BhY2l0eVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1JlZmxlY3Rpdml0eVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0FtYmllbnRPY2NsdXNpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tBbHBoYUZyZXNuZWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tBbmlzb3Ryb3BpY1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1JlZmxlY3Rpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tTaGVlblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0NsZWFyY29hdFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0lyaWRlc2NlbmNlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrU3ViU3VyZmFjZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJDbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja05vcm1hbEdlb21ldHJpY1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tOb3JtYWxGaW5hbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3NcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tMaWdodG1hcEluaXRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tHZW9tZXRyeUluZm9cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0YW5jZTBcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tSZWZsZWN0YW5jZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0RpcmVjdExpZ2h0aW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tGaW5hbExpdENvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50c1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0ZpbmFsQ29sb3JDb21wb3NpdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrSW1hZ2VQcm9jZXNzaW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUHJlUGFzc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vaXRGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEZWJ1Z1wiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNkZWZpbmUgUEJSX0ZSQUdNRU5UX1NIQURFUlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfRVhURU5TSU9OXG4jaWYgZGVmaW5lZChCVU1QKSB8fCAhZGVmaW5lZChOT1JNQUwpIHx8IGRlZmluZWQoRk9SQ0VOT1JNQUxGT1JXQVJEKSB8fCBkZWZpbmVkKFNQRUNVTEFSQUEpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpXG4jZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxuI2VuZGlmXG4jaWZkZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbiNleHRlbnNpb24gR0xfRVhUX3NoYWRlcl90ZXh0dXJlX2xvZCA6IGVuYWJsZVxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUdJTlxuI2lmZGVmIExPR0FSSVRITUlDREVQVEhcbiNleHRlbnNpb24gR0xfRVhUX2ZyYWdfZGVwdGggOiBlbmFibGVcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD4wXG4jaW5jbHVkZTxwcmVQYXNzRGVjbGFyYXRpb24+W1NDRU5FX01SVF9DT1VOVF1cbiNlbmRpZlxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuI2luY2x1ZGU8b2l0RGVjbGFyYXRpb24+XG4jaWZuZGVmIEZST01MSU5FQVJTUEFDRVxuI2RlZmluZSBGUk9NTElORUFSU1BBQ0VcbiNlbmRpZlxuI2luY2x1ZGU8X19kZWNsX19wYnJGcmFnbWVudD5cbiNpbmNsdWRlPHBickZyYWdtZW50RXh0cmFEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRGcmFnbWVudD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8cGJyRnJhZ21lbnRTYW1wbGVyc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG4jaW5jbHVkZTxzdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPGltcG9ydGFuY2VTYW1wbGluZz5cbiNpbmNsdWRlPHBickhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHNoYWRvd3NGcmFnbWVudEZ1bmN0aW9ucz5cbiNpbmNsdWRlPGhhcm1vbmljc0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHBickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJEaXJlY3RMaWdodGluZ0ZhbGxvZmZGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJCUkRGRnVuY3Rpb25zPlxuI2luY2x1ZGU8aGRyRmlsdGVyaW5nRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyRGlyZWN0TGlnaHRpbmdGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJJQkxGdW5jdGlvbnM+XG4jaW5jbHVkZTxidW1wRnJhZ21lbnRNYWluRnVuY3Rpb25zPlxuI2luY2x1ZGU8YnVtcEZyYWdtZW50RnVuY3Rpb25zPlxuI2lmZGVmIFJFRkxFQ1RJT05cbiNpbmNsdWRlPHJlZmxlY3Rpb25GdW5jdGlvbj5cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbiNpbmNsdWRlPHBickJsb2NrQWxiZWRvT3BhY2l0eT5cbiNpbmNsdWRlPHBickJsb2NrUmVmbGVjdGl2aXR5PlxuI2luY2x1ZGU8cGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uPlxuI2luY2x1ZGU8cGJyQmxvY2tBbHBoYUZyZXNuZWw+XG4jaW5jbHVkZTxwYnJCbG9ja0FuaXNvdHJvcGljPlxuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0aW9uPlxuI2luY2x1ZGU8cGJyQmxvY2tTaGVlbj5cbiNpbmNsdWRlPHBickJsb2NrQ2xlYXJjb2F0PlxuI2luY2x1ZGU8cGJyQmxvY2tJcmlkZXNjZW5jZT5cbiNpbmNsdWRlPHBickJsb2NrU3ViU3VyZmFjZT5cbiNpbmNsdWRlPHBickNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zPlxudm9pZCBtYWluKHZvaWQpIHtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50PlxuI2luY2x1ZGU8cGJyQmxvY2tOb3JtYWxHZW9tZXRyaWM+XG4jaW5jbHVkZTxidW1wRnJhZ21lbnQ+XG4jaW5jbHVkZTxwYnJCbG9ja05vcm1hbEZpbmFsPlxuYWxiZWRvT3BhY2l0eU91dFBhcmFtcyBhbGJlZG9PcGFjaXR5T3V0O1xuI2lmZGVmIEFMQkVET1xudmVjNCBhbGJlZG9UZXh0dXJlPXRleHR1cmUyRChhbGJlZG9TYW1wbGVyLHZBbGJlZG9VVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBCQVNFX1dFSUdIVFxudmVjNCBiYXNlV2VpZ2h0VGV4dHVyZT10ZXh0dXJlMkQoYmFzZVdlaWdodFNhbXBsZXIsdkJhc2VXZWlnaHRVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZXG52ZWM0IG9wYWNpdHlNYXA9dGV4dHVyZTJEKG9wYWNpdHlTYW1wbGVyLHZPcGFjaXR5VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgREVDQUxcbnZlYzQgZGVjYWxDb2xvcj10ZXh0dXJlMkQoZGVjYWxTYW1wbGVyLHZEZWNhbFVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuYWxiZWRvT3BhY2l0eU91dD1hbGJlZG9PcGFjaXR5QmxvY2soXG52QWxiZWRvQ29sb3JcbiNpZmRlZiBBTEJFRE9cbixhbGJlZG9UZXh0dXJlXG4sdkFsYmVkb0luZm9zXG4jZW5kaWZcbixiYXNlV2VpZ2h0XG4jaWZkZWYgQkFTRV9XRUlHSFRcbixiYXNlV2VpZ2h0VGV4dHVyZVxuLHZCYXNlV2VpZ2h0SW5mb3NcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlcbixvcGFjaXR5TWFwXG4sdk9wYWNpdHlJbmZvc1xuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG4sZGV0YWlsQ29sb3Jcbix2RGV0YWlsSW5mb3NcbiNlbmRpZlxuI2lmZGVmIERFQ0FMXG4sZGVjYWxDb2xvclxuLHZEZWNhbEluZm9zXG4jZW5kaWZcbik7dmVjMyBzdXJmYWNlQWxiZWRvPWFsYmVkb09wYWNpdHlPdXQuc3VyZmFjZUFsYmVkbztmbG9hdCBhbHBoYT1hbGJlZG9PcGFjaXR5T3V0LmFscGhhO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0FMUEhBXG4jaW5jbHVkZTxkZXB0aFByZVBhc3M+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfTElHSFRTXG5hbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zIGFvT3V0O1xuI2lmZGVmIEFNQklFTlRcbnZlYzMgYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPXRleHR1cmUyRChhbWJpZW50U2FtcGxlcix2QW1iaWVudFVWK3V2T2Zmc2V0KS5yZ2I7XG4jZW5kaWZcbmFvT3V0PWFtYmllbnRPY2NsdXNpb25CbG9jayhcbiNpZmRlZiBBTUJJRU5UXG5hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAsXG52QW1iaWVudEluZm9zXG4jZW5kaWZcbik7XG4jaW5jbHVkZTxwYnJCbG9ja0xpZ2h0bWFwSW5pdD5cbiNpZmRlZiBVTkxJVFxudmVjMyBkaWZmdXNlQmFzZT12ZWMzKDEuLDEuLDEuKTtcbiNlbHNlIFxudmVjMyBiYXNlQ29sb3I9c3VyZmFjZUFsYmVkbztyZWZsZWN0aXZpdHlPdXRQYXJhbXMgcmVmbGVjdGl2aXR5T3V0O1xuI2lmIGRlZmluZWQoUkVGTEVDVElWSVRZKVxudmVjNCBzdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwPXRleHR1cmUyRChyZWZsZWN0aXZpdHlTYW1wbGVyLHZSZWZsZWN0aXZpdHlVVit1dk9mZnNldCk7dmVjNCBiYXNlUmVmbGVjdGl2aXR5PXN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXA7XG4jaWZuZGVmIE1FVEFMTElDV09SS0ZMT1dcbiNpZmRlZiBSRUZMRUNUSVZJVFlfR0FNTUFcbnN1cmZhY2VNZXRhbGxpY09yUmVmbGVjdGl2aXR5Q29sb3JNYXA9dG9MaW5lYXJTcGFjZShzdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwKTtcbiNlbmRpZlxuc3VyZmFjZU1ldGFsbGljT3JSZWZsZWN0aXZpdHlDb2xvck1hcC5yZ2IqPXZSZWZsZWN0aXZpdHlJbmZvcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKE1JQ1JPU1VSRkFDRU1BUClcbnZlYzQgbWljcm9TdXJmYWNlVGV4ZWw9dGV4dHVyZTJEKG1pY3JvU3VyZmFjZVNhbXBsZXIsdk1pY3JvU3VyZmFjZVNhbXBsZXJVVit1dk9mZnNldCkqdk1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvcy55O1xuI2VuZGlmXG4jaWZkZWYgTUVUQUxMSUNXT1JLRkxPV1xudmVjNCBtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycz12TWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM7XG4jaWZkZWYgUkVGTEVDVEFOQ0VcbnZlYzQgcmVmbGVjdGFuY2VGYWN0b3JzTWFwPXRleHR1cmUyRChyZWZsZWN0YW5jZVNhbXBsZXIsdlJlZmxlY3RhbmNlVVYrdXZPZmZzZXQpO1xuI2lmZGVmIFJFRkxFQ1RBTkNFX0dBTU1BXG5yZWZsZWN0YW5jZUZhY3RvcnNNYXA9dG9MaW5lYXJTcGFjZShyZWZsZWN0YW5jZUZhY3RvcnNNYXApO1xuI2VuZGlmXG5tZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycy5yZ2IqPXJlZmxlY3RhbmNlRmFjdG9yc01hcC5yZ2I7XG4jZW5kaWZcbiNpZmRlZiBNRVRBTExJQ19SRUZMRUNUQU5DRVxudmVjNCBtZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yc01hcD10ZXh0dXJlMkQobWV0YWxsaWNSZWZsZWN0YW5jZVNhbXBsZXIsdk1ldGFsbGljUmVmbGVjdGFuY2VVVit1dk9mZnNldCk7XG4jaWZkZWYgTUVUQUxMSUNfUkVGTEVDVEFOQ0VfR0FNTUFcbm1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzTWFwPXRvTGluZWFyU3BhY2UobWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnNNYXApO1xuI2VuZGlmXG4jaWZuZGVmIE1FVEFMTElDX1JFRkxFQ1RBTkNFX1VTRV9BTFBIQV9PTkxZXG5tZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9ycy5yZ2IqPW1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzTWFwLnJnYjtcbiNlbmRpZlxubWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnMuYSo9bWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnNNYXAuYTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQkFTRV9ESUZGVVNFX1JPVUdITkVTU1xuZmxvYXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlPXRleHR1cmUyRChiYXNlRGlmZnVzZVJvdWdobmVzc1NhbXBsZXIsdkJhc2VEaWZmdXNlUm91Z2huZXNzVVYrdXZPZmZzZXQpLnI7XG4jZW5kaWZcbnJlZmxlY3Rpdml0eU91dD1yZWZsZWN0aXZpdHlCbG9jayhcbnZSZWZsZWN0aXZpdHlDb2xvclxuI2lmZGVmIE1FVEFMTElDV09SS0ZMT1dcbixzdXJmYWNlQWxiZWRvXG4sbWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnNcbiNlbmRpZlxuLGJhc2VEaWZmdXNlUm91Z2huZXNzXG4jaWZkZWYgQkFTRV9ESUZGVVNFX1JPVUdITkVTU1xuLGJhc2VEaWZmdXNlUm91Z2huZXNzVGV4dHVyZVxuLHZCYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSVZJVFlcbix2UmVmbGVjdGl2aXR5SW5mb3NcbixzdXJmYWNlTWV0YWxsaWNPclJlZmxlY3Rpdml0eUNvbG9yTWFwXG4jZW5kaWZcbiNpZiBkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiBkZWZpbmVkKEFPU1RPUkVJTk1FVEFMTUFQUkVEKVxuLGFvT3V0LmFtYmllbnRPY2NsdXNpb25Db2xvclxuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFTUFQXG4sbWljcm9TdXJmYWNlVGV4ZWxcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuLGRldGFpbENvbG9yXG4sdkRldGFpbEluZm9zXG4jZW5kaWZcbik7ZmxvYXQgbWljcm9TdXJmYWNlPXJlZmxlY3Rpdml0eU91dC5taWNyb1N1cmZhY2U7ZmxvYXQgcm91Z2huZXNzPXJlZmxlY3Rpdml0eU91dC5yb3VnaG5lc3M7ZmxvYXQgZGlmZnVzZVJvdWdobmVzcz1yZWZsZWN0aXZpdHlPdXQuZGlmZnVzZVJvdWdobmVzcztcbiNpZmRlZiBNRVRBTExJQ1dPUktGTE9XXG5zdXJmYWNlQWxiZWRvPXJlZmxlY3Rpdml0eU91dC5zdXJmYWNlQWxiZWRvO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKSAmJiBkZWZpbmVkKFJFRkxFQ1RJVklUWSkgJiYgZGVmaW5lZChBT1NUT1JFSU5NRVRBTE1BUFJFRClcbmFvT3V0LmFtYmllbnRPY2NsdXNpb25Db2xvcj1yZWZsZWN0aXZpdHlPdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yO1xuI2VuZGlmXG4jaWZkZWYgQUxQSEFGUkVTTkVMXG4jaWYgZGVmaW5lZChBTFBIQVRFU1QpIHx8IGRlZmluZWQoQUxQSEFCTEVORClcbmFscGhhRnJlc25lbE91dFBhcmFtcyBhbHBoYUZyZXNuZWxPdXQ7YWxwaGFGcmVzbmVsT3V0PWFscGhhRnJlc25lbEJsb2NrKFxubm9ybWFsVyxcbnZpZXdEaXJlY3Rpb25XLFxuYWxwaGEsXG5taWNyb1N1cmZhY2Vcbik7YWxwaGE9YWxwaGFGcmVzbmVsT3V0LmFscGhhO1xuI2VuZGlmXG4jZW5kaWZcbiNpbmNsdWRlPHBickJsb2NrR2VvbWV0cnlJbmZvPlxuI2lmZGVmIEFOSVNPVFJPUElDXG5hbmlzb3Ryb3BpY091dFBhcmFtcyBhbmlzb3Ryb3BpY091dDtcbiNpZmRlZiBBTklTT1RST1BJQ19URVhUVVJFXG52ZWMzIGFuaXNvdHJvcHlNYXBEYXRhPXRleHR1cmUyRChhbmlzb3Ryb3B5U2FtcGxlcix2QW5pc290cm9weVVWK3V2T2Zmc2V0KS5yZ2IqdkFuaXNvdHJvcHlJbmZvcy55O1xuI2VuZGlmXG5hbmlzb3Ryb3BpY091dD1hbmlzb3Ryb3BpY0Jsb2NrKFxudkFuaXNvdHJvcHksXG5yb3VnaG5lc3MsXG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxuYW5pc290cm9weU1hcERhdGEsXG4jZW5kaWZcblRCTixcbm5vcm1hbFcsXG52aWV3RGlyZWN0aW9uV1xuKTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbnJlZmxlY3Rpb25PdXRQYXJhbXMgcmVmbGVjdGlvbk91dDtcbiNpZm5kZWYgVVNFX0NVU1RPTV9SRUZMRUNUSU9OXG5yZWZsZWN0aW9uT3V0PXJlZmxlY3Rpb25CbG9jayhcbnZQb3NpdGlvbldcbixub3JtYWxXXG4sYWxwaGFHXG4sdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHZSZWZsZWN0aW9uSW5mb3Ncbix2UmVmbGVjdGlvbkNvbG9yXG4jaWZkZWYgQU5JU09UUk9QSUNcbixhbmlzb3Ryb3BpY091dFxuI2VuZGlmXG4jaWYgZGVmaW5lZChMT0RJTlJFRkxFQ1RJT05BTFBIQSkgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG4sTmRvdFZVbmNsYW1wZWRcbiNlbmRpZlxuI2lmZGVmIExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTlxuLHJvdWdobmVzc1xuI2VuZGlmXG4scmVmbGVjdGlvblNhbXBsZXJcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbix2RW52aXJvbm1lbnRJcnJhZGlhbmNlXG4jZW5kaWZcbiNpZiAoZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgKCFkZWZpbmVkKE5PUk1BTCkgfHwgIWRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpKSkgfHwgKGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKSlcbixyZWZsZWN0aW9uTWF0cml4XG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4saXJyYWRpYW5jZVNhbXBsZXJcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbix2UmVmbGVjdGlvbkRvbWluYW50RGlyZWN0aW9uXG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZmxlY3Rpb25TYW1wbGVyTG93XG4scmVmbGVjdGlvblNhbXBsZXJIaWdoXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGljZGZTYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuLHZpZXdEaXJlY3Rpb25XXG4sZGlmZnVzZVJvdWdobmVzc1xuLGJhc2VDb2xvclxuKTtcbiNlbHNlXG4jZGVmaW5lIENVU1RPTV9SRUZMRUNUSU9OXG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0YW5jZTA+XG4jaWZkZWYgU0hFRU5cbnNoZWVuT3V0UGFyYW1zIHNoZWVuT3V0O1xuI2lmZGVmIFNIRUVOX1RFWFRVUkVcbnZlYzQgc2hlZW5NYXBEYXRhPXRleHR1cmUyRChzaGVlblNhbXBsZXIsdlNoZWVuVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChTSEVFTl9ST1VHSE5FU1MpICYmIGRlZmluZWQoU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MpICYmICFkZWZpbmVkKFNIRUVOX1VTRV9ST1VHSE5FU1NfRlJPTV9NQUlOVEVYVFVSRSlcbnZlYzQgc2hlZW5NYXBSb3VnaG5lc3NEYXRhPXRleHR1cmUyRChzaGVlblJvdWdobmVzc1NhbXBsZXIsdlNoZWVuUm91Z2huZXNzVVYrdXZPZmZzZXQpKnZTaGVlbkluZm9zLnc7XG4jZW5kaWZcbnNoZWVuT3V0PXNoZWVuQmxvY2soXG52U2hlZW5Db2xvclxuI2lmZGVmIFNIRUVOX1JPVUdITkVTU1xuLHZTaGVlblJvdWdobmVzc1xuI2lmIGRlZmluZWQoU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MpICYmICFkZWZpbmVkKFNIRUVOX1VTRV9ST1VHSE5FU1NfRlJPTV9NQUlOVEVYVFVSRSlcbixzaGVlbk1hcFJvdWdobmVzc0RhdGFcbiNlbmRpZlxuI2VuZGlmXG4scm91Z2huZXNzXG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxuLHNoZWVuTWFwRGF0YVxuLHZTaGVlbkluZm9zLnlcbiNlbmRpZlxuLHJlZmxlY3RhbmNlRjBcbiNpZmRlZiBTSEVFTl9MSU5LV0lUSEFMQkVET1xuLGJhc2VDb2xvclxuLHN1cmZhY2VBbGJlZG9cbiNlbmRpZlxuI2lmZGVmIEVOVklST05NRU5UQlJERlxuLE5kb3RWXG4sZW52aXJvbm1lbnRCcmRmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT04pICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxuLEFBUm91Z2huZXNzRmFjdG9yc1xuLHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3Ncbix2UmVmbGVjdGlvbkluZm9zXG4sdlJlZmxlY3Rpb25Db2xvclxuLHZMaWdodGluZ0ludGVuc2l0eVxuLHJlZmxlY3Rpb25TYW1wbGVyXG4scmVmbGVjdGlvbk91dC5yZWZsZWN0aW9uQ29vcmRzXG4sTmRvdFZVbmNsYW1wZWRcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZsZWN0aW9uU2FtcGxlckxvd1xuLHJlZmxlY3Rpb25TYW1wbGVySGlnaFxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbiNpZiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWCkgJiYgZGVmaW5lZChSQURJQU5DRU9DQ0xVU0lPTilcbixzZW9cbiNlbmRpZlxuI2lmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuLGVob1xuI2VuZGlmXG4jZW5kaWZcbik7XG4jaWZkZWYgU0hFRU5fTElOS1dJVEhBTEJFRE9cbnN1cmZhY2VBbGJlZG89c2hlZW5PdXQuc3VyZmFjZUFsYmVkbztcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbnZlYzIgY2xlYXJDb2F0TWFwRGF0YT10ZXh0dXJlMkQoY2xlYXJDb2F0U2FtcGxlcix2Q2xlYXJDb2F0VVYrdXZPZmZzZXQpLnJnKnZDbGVhckNvYXRJbmZvcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRVxuaXJpZGVzY2VuY2VPdXRQYXJhbXMgaXJpZGVzY2VuY2VPdXQ7XG4jaWZkZWYgSVJJREVTQ0VOQ0VfVEVYVFVSRVxudmVjMiBpcmlkZXNjZW5jZU1hcERhdGE9dGV4dHVyZTJEKGlyaWRlc2NlbmNlU2FtcGxlcix2SXJpZGVzY2VuY2VVVit1dk9mZnNldCkucmcqdklyaWRlc2NlbmNlSW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFXG52ZWMyIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWFwRGF0YT10ZXh0dXJlMkQoaXJpZGVzY2VuY2VUaGlja25lc3NTYW1wbGVyLHZJcmlkZXNjZW5jZVRoaWNrbmVzc1VWK3V2T2Zmc2V0KS5yZyp2SXJpZGVzY2VuY2VJbmZvcy53O1xuI2VuZGlmXG5pcmlkZXNjZW5jZU91dD1pcmlkZXNjZW5jZUJsb2NrKFxudklyaWRlc2NlbmNlUGFyYW1zXG4sTmRvdFZcbixzcGVjdWxhckVudmlyb25tZW50UjBcbiNpZmRlZiBJUklERVNDRU5DRV9URVhUVVJFXG4saXJpZGVzY2VuY2VNYXBEYXRhXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRVxuLGlyaWRlc2NlbmNlVGhpY2tuZXNzTWFwRGF0YVxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4sTmRvdFZVbmNsYW1wZWRcbix2Q2xlYXJDb2F0UGFyYW1zXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVcbixjbGVhckNvYXRNYXBEYXRhXG4jZW5kaWZcbiNlbmRpZlxuKTtmbG9hdCBpcmlkZXNjZW5jZUludGVuc2l0eT1pcmlkZXNjZW5jZU91dC5pcmlkZXNjZW5jZUludGVuc2l0eTtzcGVjdWxhckVudmlyb25tZW50UjA9aXJpZGVzY2VuY2VPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwO1xuI2VuZGlmXG5jbGVhcmNvYXRPdXRQYXJhbXMgY2xlYXJjb2F0T3V0O1xuI2lmZGVmIENMRUFSQ09BVFxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTKSAmJiAhZGVmaW5lZChDTEVBUkNPQVRfVVNFX1JPVUdITkVTU19GUk9NX01BSU5URVhUVVJFKVxudmVjNCBjbGVhckNvYXRNYXBSb3VnaG5lc3NEYXRhPXRleHR1cmUyRChjbGVhckNvYXRSb3VnaG5lc3NTYW1wbGVyLHZDbGVhckNvYXRSb3VnaG5lc3NVVit1dk9mZnNldCkqdkNsZWFyQ29hdEluZm9zLnc7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9USU5UX1RFWFRVUkUpXG52ZWM0IGNsZWFyQ29hdFRpbnRNYXBEYXRhPXRleHR1cmUyRChjbGVhckNvYXRUaW50U2FtcGxlcix2Q2xlYXJDb2F0VGludFVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9CVU1QXG52ZWM0IGNsZWFyQ29hdEJ1bXBNYXBEYXRhPXRleHR1cmUyRChjbGVhckNvYXRCdW1wU2FtcGxlcix2Q2xlYXJDb2F0QnVtcFVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuY2xlYXJjb2F0T3V0PWNsZWFyY29hdEJsb2NrKFxudlBvc2l0aW9uV1xuLGdlb21ldHJpY05vcm1hbFdcbix2aWV3RGlyZWN0aW9uV1xuLHZDbGVhckNvYXRQYXJhbXNcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUykgJiYgIWRlZmluZWQoQ0xFQVJDT0FUX1VTRV9ST1VHSE5FU1NfRlJPTV9NQUlOVEVYVFVSRSlcbixjbGVhckNvYXRNYXBSb3VnaG5lc3NEYXRhXG4jZW5kaWZcbixzcGVjdWxhckVudmlyb25tZW50UjBcbiNpZmRlZiBDTEVBUkNPQVRfVEVYVFVSRVxuLGNsZWFyQ29hdE1hcERhdGFcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9USU5UXG4sdkNsZWFyQ29hdFRpbnRQYXJhbXNcbixjbGVhckNvYXRDb2xvckF0RGlzdGFuY2Vcbix2Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtc1xuI2lmZGVmIENMRUFSQ09BVF9USU5UX1RFWFRVUkVcbixjbGVhckNvYXRUaW50TWFwRGF0YVxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfQlVNUFxuLHZDbGVhckNvYXRCdW1wSW5mb3NcbixjbGVhckNvYXRCdW1wTWFwRGF0YVxuLHZDbGVhckNvYXRCdW1wVVZcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxuLHZUQk5cbiNlbHNlXG4sdkNsZWFyQ29hdFRhbmdlbnRTcGFjZVBhcmFtc1xuI2VuZGlmXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG4sbm9ybWFsTWF0cml4XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoRk9SQ0VOT1JNQUxGT1JXQVJEKSAmJiBkZWZpbmVkKE5PUk1BTClcbixmYWNlTm9ybWFsXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG4sdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHZSZWZsZWN0aW9uSW5mb3Ncbix2UmVmbGVjdGlvbkNvbG9yXG4sdkxpZ2h0aW5nSW50ZW5zaXR5XG4scmVmbGVjdGlvblNhbXBsZXJcbiNpZm5kZWYgTE9EQkFTRURNSUNST1NGVVJBQ0VcbixyZWZsZWN0aW9uU2FtcGxlckxvd1xuLHJlZmxlY3Rpb25TYW1wbGVySGlnaFxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoVFdPU0lERURMSUdIVElORylcbiwoZ2xfRnJvbnRGYWNpbmcgPyAxLiA6IC0xLilcbiNlbmRpZlxuKTtcbiNlbHNlXG5jbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwPXNwZWN1bGFyRW52aXJvbm1lbnRSMDtcbiNlbmRpZlxuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0YW5jZT5cbnN1YlN1cmZhY2VPdXRQYXJhbXMgc3ViU3VyZmFjZU91dDtcbiNpZmRlZiBTVUJTVVJGQUNFXG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG52ZWM0IHRoaWNrbmVzc01hcD10ZXh0dXJlMkQodGhpY2tuZXNzU2FtcGxlcix2VGhpY2tuZXNzVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFXG52ZWM0IHJlZnJhY3Rpb25JbnRlbnNpdHlNYXA9dGV4dHVyZTJEKHJlZnJhY3Rpb25JbnRlbnNpdHlTYW1wbGVyLHZSZWZyYWN0aW9uSW50ZW5zaXR5VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkVcbnZlYzQgdHJhbnNsdWNlbmN5SW50ZW5zaXR5TWFwPXRleHR1cmUyRCh0cmFuc2x1Y2VuY3lJbnRlbnNpdHlTYW1wbGVyLHZUcmFuc2x1Y2VuY3lJbnRlbnNpdHlVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFXG52ZWM0IHRyYW5zbHVjZW5jeUNvbG9yTWFwPXRleHR1cmUyRCh0cmFuc2x1Y2VuY3lDb2xvclNhbXBsZXIsdlRyYW5zbHVjZW5jeUNvbG9yVVYrdXZPZmZzZXQpO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkVfR0FNTUFcbnRyYW5zbHVjZW5jeUNvbG9yTWFwPXRvTGluZWFyU3BhY2UodHJhbnNsdWNlbmN5Q29sb3JNYXApO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxudmVjMyB2U3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlPXZlYzMobWF4KGNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlLnIsbWF4KGNvbG9yU3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlLmcsY29sb3JTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2UuYikpKTtcbiNlbmRpZlxuc3ViU3VyZmFjZU91dD1zdWJTdXJmYWNlQmxvY2soXG52U3ViU3VyZmFjZUludGVuc2l0eVxuLHZUaGlja25lc3NQYXJhbVxuLHZUaW50Q29sb3Jcbixub3JtYWxXXG4jaWZkZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbix2U3BlY3VsYXJFbnZpcm9ubWVudFJlZmxlY3RhbmNlXG4jZWxzZVxuLGJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2VcbiNlbmRpZlxuI2lmZGVmIFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRVxuLHRoaWNrbmVzc01hcFxuI2VuZGlmXG4jaWZkZWYgU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFXG4scmVmcmFjdGlvbkludGVuc2l0eU1hcFxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkVcbix0cmFuc2x1Y2VuY3lJbnRlbnNpdHlNYXBcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbixyZWZsZWN0aW9uTWF0cml4XG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZiAhZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxuLHJlZmxlY3Rpb25PdXQuaXJyYWRpYW5jZVZlY3RvclxuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUFMVElNRV9GSUxURVJJTkcpXG4scmVmbGVjdGlvblNhbXBsZXJcbix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGljZGZTYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgVVNFSVJSQURJQU5DRU1BUFxuLGlycmFkaWFuY2VTYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTU19SRUZSQUNUSU9OKSB8fCBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWSlcbixzdXJmYWNlQWxiZWRvXG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG4sdlBvc2l0aW9uV1xuLHZpZXdEaXJlY3Rpb25XXG4sdmlld1xuLHZSZWZyYWN0aW9uSW5mb3NcbixyZWZyYWN0aW9uTWF0cml4XG4sdlJlZnJhY3Rpb25NaWNyb3N1cmZhY2VJbmZvc1xuLHZMaWdodGluZ0ludGVuc2l0eVxuI2lmZGVmIFNTX0xJTktSRUZSQUNUSU9OVE9UUkFOU1BBUkVOQ1lcbixhbHBoYVxuI2VuZGlmXG4jaWZkZWYgU1NfTE9ESU5SRUZSQUNUSU9OQUxQSEFcbixOZG90VlVuY2xhbXBlZFxuI2VuZGlmXG4jaWZkZWYgU1NfTElORUFSU1BFQ1VMQVJSRUZSQUNUSU9OXG4scm91Z2huZXNzXG4jZW5kaWZcbixhbHBoYUdcbixyZWZyYWN0aW9uU2FtcGxlclxuI2lmbmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuLHJlZnJhY3Rpb25TYW1wbGVyTG93XG4scmVmcmFjdGlvblNhbXBsZXJIaWdoXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0XG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmcmFjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuI2lmZGVmIFNTX1VTRV9MT0NBTF9SRUZSQUNUSU9OTUFQX0NVQklDXG4sdlJlZnJhY3Rpb25Qb3NpdGlvblxuLHZSZWZyYWN0aW9uU2l6ZVxuI2VuZGlmXG4jaWZkZWYgU1NfRElTUEVSU0lPTlxuLGRpc3BlcnNpb25cbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG4sdkRpZmZ1c2lvbkRpc3RhbmNlXG4sdlRyYW5zbHVjZW5jeUNvbG9yXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRVxuLHRyYW5zbHVjZW5jeUNvbG9yTWFwXG4jZW5kaWZcbiNlbmRpZlxuKTtcbiNpZmRlZiBTU19SRUZSQUNUSU9OXG5zdXJmYWNlQWxiZWRvPXN1YlN1cmZhY2VPdXQuc3VyZmFjZUFsYmVkbztcbiNpZmRlZiBTU19MSU5LUkVGUkFDVElPTlRPVFJBTlNQQVJFTkNZXG5hbHBoYT1zdWJTdXJmYWNlT3V0LmFscGhhO1xuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG5zdWJTdXJmYWNlT3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZT1jb2xvclNwZWN1bGFyRW52aXJvbm1lbnRSZWZsZWN0YW5jZTtcbiNlbmRpZlxuI2luY2x1ZGU8cGJyQmxvY2tEaXJlY3RMaWdodGluZz5cbiNpbmNsdWRlPGxpZ2h0RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHBickJsb2NrRmluYWxMaXRDb21wb25lbnRzPlxuI2VuZGlmIFxuI2luY2x1ZGU8cGJyQmxvY2tGaW5hbFVubGl0Q29tcG9uZW50cz5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GSU5BTENPTE9SQ09NUE9TSVRJT05cbiNpbmNsdWRlPHBickJsb2NrRmluYWxDb2xvckNvbXBvc2l0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50Pihjb2xvcixmaW5hbENvbG9yKVxuI2luY2x1ZGU8cGJyQmxvY2tJbWFnZVByb2Nlc3Npbmc+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRlJBR0NPTE9SXG4jaWZkZWYgUFJFUEFTU1xuI2luY2x1ZGU8cGJyQmxvY2tQcmVQYXNzPlxuI2VuZGlmXG4jaWYgIWRlZmluZWQoUFJFUEFTUykgfHwgZGVmaW5lZChXRUJHTDIpXG5nbF9GcmFnQ29sb3I9ZmluYWxDb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8b2l0RnJhZ21lbnQ+XG4jaWYgT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZXG5pZiAoZnJhZ0RlcHRoPT1uZWFyZXN0RGVwdGgpIHtmcm9udENvbG9yLnJnYis9ZmluYWxDb2xvci5yZ2IqZmluYWxDb2xvci5hKmFscGhhTXVsdGlwbGllcjtmcm9udENvbG9yLmE9MS4wLWFscGhhTXVsdGlwbGllciooMS4wLWZpbmFsQ29sb3IuYSk7fSBlbHNlIHtiYWNrQ29sb3IrPWZpbmFsQ29sb3I7fVxuI2VuZGlmXG4jaW5jbHVkZTxwYnJEZWJ1Zz5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9