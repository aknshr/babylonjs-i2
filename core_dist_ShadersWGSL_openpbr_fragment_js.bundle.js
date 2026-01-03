"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_openpbr_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrBaseLayerData.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrBaseLayerData.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrBaseLayerDataWGSL: () => (/* binding */ openpbrBaseLayerDataWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrBaseLayerData";
const shader = `var base_color=vec3f(0.8);var base_metalness: f32=0.0;var base_diffuse_roughness: f32=0.0;var specular_weight: f32=1.0;var specular_roughness: f32=0.3;var specular_color: vec3f=vec3f(1.0);var specular_roughness_anisotropy: f32=0.0;var specular_ior: f32=1.5;var alpha: f32=1.0;var geometry_tangent: vec2f=vec2f(1.0,0.0);
#ifdef BASE_WEIGHT
let baseWeightFromTexture: vec4f=textureSample(baseWeightSampler,baseWeightSamplerSampler,fragmentInputs.vBaseWeightUV+uvOffset);
#endif
#ifdef BASE_COLOR
let baseColorFromTexture: vec4f=textureSample(baseColorSampler,baseColorSamplerSampler,fragmentInputs.vBaseColorUV+uvOffset);
#endif
#ifdef BASE_METALNESS
let metallicFromTexture: vec4f=textureSample(baseMetalnessSampler,baseMetalnessSamplerSampler,fragmentInputs.vBaseMetalnessUV+uvOffset);
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
let baseDiffuseRoughnessFromTexture: f32=textureSample(baseDiffuseRoughnessSampler,baseDiffuseRoughnessSamplerSampler,fragmentInputs.vBaseDiffuseRoughnessUV+uvOffset).r;
#endif
#ifdef GEOMETRY_TANGENT
let geometryTangentFromTexture: vec3f=textureSample(geometryTangentSampler,geometryTangentSamplerSampler,fragmentInputs.vGeometryTangentUV+uvOffset).rgb;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
let anisotropyFromTexture: f32=textureSample(specularRoughnessAnisotropySampler,specularRoughnessAnisotropySamplerSampler,fragmentInputs.vSpecularRoughnessAnisotropyUV+uvOffset).r*uniforms.vSpecularRoughnessAnisotropyInfos.y;
#endif
#ifdef GEOMETRY_OPACITY
let opacityFromTexture: vec4f=textureSample(geometryOpacitySampler,geometryOpacitySamplerSampler,fragmentInputs.vGeometryOpacityUV+uvOffset);
#endif
#ifdef DECAL
let decalFromTexture: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#endif
#ifdef SPECULAR_COLOR
let specularColorFromTexture: vec4f=textureSample(specularColorSampler,specularColorSamplerSampler,fragmentInputs.vSpecularColorUV+uvOffset);
#endif
#if defined(SPECULAR_WEIGHT)
#ifdef SPECULAR_WEIGHT_IN_ALPHA
let specularWeightFromTexture: f32=textureSample(specularWeightSampler,specularWeightSamplerSampler,fragmentInputs.vSpecularWeightUV+uvOffset).a;
#else
let specularWeightFromTexture: f32=textureSample(specularWeightSampler,specularWeightSamplerSampler,fragmentInputs.vSpecularWeightUV+uvOffset).r;
#endif
#endif
#if defined(ANISOTROPIC) || defined(FUZZ)
let noise=textureSample(blueNoiseSampler,blueNoiseSamplerSampler,fragmentInputs.position.xy/256.0).xyz;
#endif
#if defined(ROUGHNESSSTOREINMETALMAPGREEN) && defined(BASE_METALNESS)
let roughnessFromTexture: f32=metallicFromTexture.g;
#elif defined(SPECULAR_ROUGHNESS)
let roughnessFromTexture: f32=textureSample(specularRoughnessSampler,specularRoughnessSamplerSampler,fragmentInputs.vSpecularRoughnessUV+uvOffset).r;
#endif
base_color=uniforms.vBaseColor.rgb;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
base_color*=fragmentInputs.vColor.rgb;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
base_color*=vec3(uniforms.vBaseWeight);alpha=uniforms.vBaseColor.a;base_metalness=uniforms.vReflectanceInfo.x;base_diffuse_roughness=uniforms.vBaseDiffuseRoughness;specular_roughness=uniforms.vReflectanceInfo.y;specular_color=uniforms.vSpecularColor.rgb;specular_weight=uniforms.vReflectanceInfo.a;specular_ior=uniforms.vReflectanceInfo.z;specular_roughness_anisotropy=uniforms.vSpecularAnisotropy.b;geometry_tangent=uniforms.vSpecularAnisotropy.rg;
#ifdef BASE_COLOR
#ifdef BASE_COLOR_GAMMA
base_color*=toLinearSpace(baseColorFromTexture.rgb);
#else
base_color*=baseColorFromTexture.rgb;
#endif
base_color*=uniforms.vBaseColorInfos.y;
#endif
#ifdef BASE_WEIGHT
base_color*=baseWeightFromTexture.r;
#endif
#if defined(BASE_COLOR) && defined(ALPHA_FROM_BASE_COLOR_TEXTURE)
alpha*=baseColorFromTexture.a;
#elif defined(GEOMETRY_OPACITY)
alpha*=opacityFromTexture.a;alpha*=uniforms.vGeometryOpacityInfos.y;
#endif
#ifdef ALPHATEST
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#ifdef BASE_METALNESS
#ifdef METALLNESSSTOREINMETALMAPBLUE
base_metalness*=metallicFromTexture.b;
#else
base_metalness*=metallicFromTexture.r;
#endif
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
base_diffuse_roughness*=baseDiffuseRoughnessFromTexture*uniforms.vBaseDiffuseRoughnessInfos.y;
#endif
#ifdef SPECULAR_COLOR
#ifdef SPECULAR_COLOR_GAMMA
specular_color*=toLinearSpace(specularColorFromTexture.rgb);
#else
specular_color*=specularColorFromTexture.rgb;
#endif
#endif
#ifdef SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE
specular_weight*=specularColorFromTexture.a;
#elif defined(SPECULAR_WEIGHT)
specular_weight*=specularWeightFromTexture;
#endif
#if defined(SPECULAR_ROUGHNESS) || (defined(ROUGHNESSSTOREINMETALMAPGREEN) && defined(BASE_METALNESS))
specular_roughness*=roughnessFromTexture;
#endif
#ifdef GEOMETRY_TANGENT
{let tangentFromTexture: vec2f=normalize(geometryTangentFromTexture.xy*vec2f(2.0f)-vec2f(1.0f));let tangent_angle_texture: f32=atan2(tangentFromTexture.y,tangentFromTexture.x);let tangent_angle_uniform: f32=atan2(geometry_tangent.y,geometry_tangent.x);let tangent_angle: f32=tangent_angle_texture+tangent_angle_uniform;geometry_tangent=vec2f(cos(tangent_angle),sin(tangent_angle));}
#endif
#if defined(GEOMETRY_TANGENT) && defined(SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE)
specular_roughness_anisotropy*=geometryTangentFromTexture.b;
#elif defined(SPECULAR_ROUGHNESS_ANISOTROPY)
specular_roughness_anisotropy*=anisotropyFromTexture;
#endif
#ifdef DETAIL
let detailRoughness: f32=mix(0.5f,detailColor.b,vDetailInfos.w);let loLerp: f32=mix(0.f,specular_roughness,detailRoughness*2.f);let hiLerp: f32=mix(specular_roughness,1.f,(detailRoughness-0.5f)*2.f);specular_roughness=mix(loLerp,hiLerp,step(detailRoughness,0.5f));
#endif
#ifdef USE_GLTF_STYLE_ANISOTROPY
let baseAlpha: f32=specular_roughness*specular_roughness;let roughnessT: f32=mix(baseAlpha,1.0f,specular_roughness_anisotropy*specular_roughness_anisotropy);let roughnessB: f32=baseAlpha;specular_roughness_anisotropy=1.0f-roughnessB/max(roughnessT,0.00001f);specular_roughness=sqrt(roughnessT/sqrt(2.0f/(1.0f+(1.0f-specular_roughness_anisotropy)*(1.0f-specular_roughness_anisotropy))));
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrBaseLayerDataWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrBlockAmbientOcclusion.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrBlockAmbientOcclusion.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrBlockAmbientOcclusionWGSL: () => (/* binding */ openpbrBlockAmbientOcclusionWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrBlockAmbientOcclusion";
const shader = `struct ambientOcclusionOutParams
{ambientOcclusionColor: vec3f,
#if DEBUGMODE>0 && defined(AMBIENT_OCCLUSION)
ambientOcclusionColorMap: vec3f
#endif
};
#define pbr_inline
fn ambientOcclusionBlock(
#ifdef AMBIENT_OCCLUSION
ambientOcclusionColorMap_: vec3f,
ambientInfos: vec2f
#endif
)->ambientOcclusionOutParams
{ 
var outParams: ambientOcclusionOutParams;var ambientOcclusionColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT_OCCLUSION
var ambientOcclusionColorMap: vec3f=ambientOcclusionColorMap_*ambientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap= vec3f(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
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
const openpbrBlockAmbientOcclusionWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrBlockNormalFinal.js":
/*!**************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrBlockNormalFinal.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrBlockNormalFinalWGSL: () => (/* binding */ openpbrBlockNormalFinalWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrBlockNormalFinal";
const shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
var faceNormal: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))*scene.vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=select(-faceNormal,faceNormal,fragmentInputs.frontFacing);
#endif
normalW*=sign(dot(normalW,faceNormal));coatNormalW*=sign(dot(coatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
#if defined(MIRRORED)
normalW=select(normalW,-normalW,fragmentInputs.frontFacing);coatNormalW=select(coatNormalW,-coatNormalW,fragmentInputs.frontFacing);
#else
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);coatNormalW=select(-coatNormalW,coatNormalW,fragmentInputs.frontFacing);
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrBlockNormalFinalWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrCoatLayerData.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrCoatLayerData.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrCoatLayerDataWGSL: () => (/* binding */ openpbrCoatLayerDataWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrCoatLayerData";
const shader = `var coat_weight: f32=0.0f;var coat_color: vec3f=vec3f(1.0f);var coat_roughness: f32=0.0f;var coat_roughness_anisotropy: f32=0.0f;var coat_ior: f32=1.6f;var coat_darkening: f32=1.0f;var geometry_coat_tangent: vec2f=vec2f(1.0f,0.0f);
#ifdef COAT_WEIGHT
var coatWeightFromTexture: vec4f=textureSample(coatWeightSampler,coatWeightSamplerSampler,fragmentInputs.vCoatWeightUV+uvOffset);
#endif
#ifdef COAT_COLOR
var coatColorFromTexture: vec4f=textureSample(coatColorSampler,coatColorSamplerSampler,fragmentInputs.vCoatColorUV+uvOffset);
#endif
#ifdef COAT_ROUGHNESS
var coatRoughnessFromTexture: vec4f=textureSample(coatRoughnessSampler,coatRoughnessSamplerSampler,fragmentInputs.vCoatRoughnessUV+uvOffset);
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
var coatRoughnessAnisotropyFromTexture: f32=textureSample(coatRoughnessAnisotropySampler,coatRoughnessAnisotropySamplerSampler,fragmentInputs.vCoatRoughnessAnisotropyUV+uvOffset).r;
#endif
#ifdef COAT_DARKENING
var coatDarkeningFromTexture: vec4f=textureSample(coatDarkeningSampler,coatDarkeningSamplerSampler,fragmentInputs.vCoatDarkeningUV+uvOffset);
#endif
#ifdef GEOMETRY_COAT_TANGENT
var geometryCoatTangentFromTexture: vec3f=textureSample(geometryCoatTangentSampler,geometryCoatTangentSamplerSampler,fragmentInputs.vGeometryCoatTangentUV+uvOffset).rgb;
#endif
coat_color=uniforms.vCoatColor.rgb;coat_weight=uniforms.vCoatWeight;coat_roughness=uniforms.vCoatRoughness;coat_roughness_anisotropy=uniforms.vCoatRoughnessAnisotropy;coat_ior=uniforms.vCoatIor;coat_darkening=uniforms.vCoatDarkening;geometry_coat_tangent=uniforms.vGeometryCoatTangent.rg;
#ifdef COAT_WEIGHT
coat_weight*=coatWeightFromTexture.r;
#endif
#ifdef COAT_COLOR
#ifdef COAT_COLOR_GAMMA
coat_color*=toLinearSpace(coatColorFromTexture.rgb);
#else
coat_color*=coatColorFromTexture.rgb;
#endif
coat_color*=uniforms.vCoatColorInfos.y;
#endif
#ifdef COAT_ROUGHNESS
#ifdef COAT_ROUGHNESS_FROM_GREEN_CHANNEL
coat_roughness*=coatRoughnessFromTexture.g;
#else
coat_roughness*=coatRoughnessFromTexture.r;
#endif
#endif
#if defined(GEOMETRY_COAT_TANGENT) && defined(COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE)
coat_roughness_anisotropy*=geometryCoatTangentFromTexture.b;
#elif defined(COAT_ROUGHNESS_ANISOTROPY)
coat_roughness_anisotropy*=coatRoughnessAnisotropyFromTexture;
#endif
#ifdef COAT_DARKENING
coat_darkening*=coatDarkeningFromTexture.r;
#endif
#ifdef GEOMETRY_COAT_TANGENT
{let tangentFromTexture: vec2f=normalize(geometryCoatTangentFromTexture.xy*vec2f(2.0f)-vec2f(1.0f));let tangent_angle_texture: f32=atan2(tangentFromTexture.y,tangentFromTexture.x);let tangent_angle_uniform: f32=atan2(geometry_coat_tangent.y,geometry_coat_tangent.x);let tangent_angle: f32=tangent_angle_texture+tangent_angle_uniform;geometry_coat_tangent=vec2f(cos(tangent_angle),sin(tangent_angle));}
#endif
#ifdef USE_GLTF_STYLE_ANISOTROPY
let coatAlpha: f32=coat_roughness*coat_roughness;let coatRoughnessT: f32=mix(coatAlpha,1.0f,coat_roughness_anisotropy*coat_roughness_anisotropy);let coatRoughnessB: f32=coatAlpha;coat_roughness_anisotropy=1.0f-coatRoughnessB/max(coatRoughnessT,0.00001f);coat_roughness=sqrt(coatRoughnessT/sqrt(2.0f/(1.0f+(1.0f-coat_roughness_anisotropy)*(1.0f-coat_roughness_anisotropy))));
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrCoatLayerDataWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrConductorReflectance.js":
/*!******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrConductorReflectance.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrConductorReflectanceWGSL: () => (/* binding */ openpbrConductorReflectanceWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrConductorReflectance";
const shader = `#define pbr_inline
fn conductorReflectance(baseColor: vec3f,specularColor: vec3f,specularWeight: f32)->ReflectanceParams
{var outParams: ReflectanceParams;
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
outParams.coloredF0=baseColor*specularWeight;outParams.coloredF90=specularColor*specularWeight;
#else
outParams.coloredF0=baseColor;outParams.coloredF90=vec3f(1.0f);
#endif
outParams.F0=1.0f;outParams.F90=1.0f;return outParams;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrConductorReflectanceWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrDielectricReflectance.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrDielectricReflectance.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrDielectricReflectanceWGSL: () => (/* binding */ openpbrDielectricReflectanceWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrDielectricReflectance";
const shader = `struct ReflectanceParams
{F0: f32,
F90: f32,
coloredF0: vec3f,
coloredF90: vec3f,};
#define pbr_inline
fn dielectricReflectance(
insideIOR: f32,outsideIOR: f32,specularColor: vec3f,specularWeight: f32
)->ReflectanceParams
{var outParams: ReflectanceParams;let dielectricF0=pow((insideIOR-outsideIOR)/(insideIOR+outsideIOR),2.0);
#if DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_GLTF
let maxF0=max(specularColor.r,max(specularColor.g,specularColor.b));outParams.F0=dielectricF0*maxF0*specularWeight;
#else
outParams.F0=dielectricF0*specularWeight;
#endif
let f90Scale=clamp(2.0f*abs(insideIOR-outsideIOR),0.0f,1.0f);outParams.F90=f90Scale*specularWeight;outParams.coloredF0=vec3f(dielectricF0*specularWeight)*specularColor.rgb;
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
let dielectricColorF90: vec3f=specularColor.rgb*vec3f(f90Scale)*specularWeight;
#else
let dielectricColorF90: vec3f=vec3f(f90Scale)*specularWeight;
#endif
outParams.coloredF90=dielectricColorF90;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrDielectricReflectanceWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrDirectLighting.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrDirectLighting.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrDirectLightingWGSL: () => (/* binding */ openpbrDirectLightingWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrDirectLighting";
const shader = `#ifdef LIGHT{X}
{var slab_diffuse: vec3f=vec3f(0.f,0.f,0.f);var slab_subsurface: vec3f=vec3f(0.f,0.f,0.f);var slab_translucent: vec3f=vec3f(0.f,0.f,0.f);var slab_glossy: vec3f=vec3f(0.f,0.f,0.f);var specularFresnel: f32=0.0f;var specularColoredFresnel: vec3f=vec3f(0.f,0.f,0.f);var slab_metal: vec3f=vec3f(0.f,0.f,0.f);var slab_coat: vec3f=vec3f(0.f,0.f,0.f);var coatFresnel: f32=0.0f;var slab_fuzz: vec3f=vec3f(0.f,0.f,0.f);var fuzzFresnel: f32=0.0f;
#ifdef HEMILIGHT{X}
slab_diffuse=computeHemisphericDiffuseLighting(preInfo{X},lightColor{X}.rgb,light{X}.vLightGround);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
slab_diffuse=computeAreaDiffuseLighting(preInfo{X},lightColor{X}.rgb);
#else
slab_diffuse=computeDiffuseLighting(preInfo{X},lightColor{X}.rgb);
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
slab_diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},textureProjectionMatrix{X},vPositionW);
#endif
numLights+=1.0f;
#ifdef FUZZ
let fuzzNdotH: f32=max(dot(fuzzNormalW,preInfo{X}.H),0.0f);let fuzzBrdf: vec3f=getFuzzBRDFLookup(fuzzNdotH,sqrt(fuzz_roughness));
#endif
#ifdef THIN_FILM
let thin_film_desaturation_scale: f32=(thin_film_ior-1.0f)*sqrt(thin_film_thickness*0.001f);
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
slab_glossy=computeAreaSpecularLighting(preInfo{X},light{X}.vLightSpecular.rgb,baseConductorReflectance.F0,baseConductorReflectance.F90);
#else
{
#ifdef ANISOTROPIC_BASE
slab_glossy=computeAnisotropicSpecularLighting(preInfo{X},viewDirectionW,normalW,
baseGeoInfo.anisotropicTangent,baseGeoInfo.anisotropicBitangent,baseGeoInfo.anisotropy,
0.0f,lightColor{X}.rgb);
#else
slab_glossy=computeSpecularLighting(preInfo{X},normalW,vec3(1.0),vec3(1.0),specular_roughness,lightColor{X}.rgb);
#endif
let NdotH: f32=dot(normalW,preInfo{X}.H);specularFresnel=fresnelSchlickGGX(NdotH,baseDielectricReflectance.F0,baseDielectricReflectance.F90);specularColoredFresnel=specularFresnel*specular_color;
#ifdef THIN_FILM
let thinFilmIorScale: f32=clamp(2.0f*abs(thin_film_ior-1.0f),0.0f,1.0f);var thinFilmDielectricFresnel: vec3f=evalIridescence(thin_film_outside_ior,thin_film_ior,preInfo{X}.VdotH,thin_film_thickness,baseDielectricReflectance.coloredF0);thinFilmDielectricFresnel=mix(thinFilmDielectricFresnel,vec3f(dot(thinFilmDielectricFresnel,vec3f(0.3333f))),thin_film_desaturation_scale);specularColoredFresnel=mix(specularColoredFresnel,thinFilmDielectricFresnel*specular_color,thin_film_weight*thinFilmIorScale);
#endif
}
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
slab_metal=computeAreaSpecularLighting(preInfo{X},light{X}.vLightSpecular.rgb,baseConductorReflectance.F0,baseConductorReflectance.F90);
#else
{
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
var coloredFresnel: vec3f=getF82Specular(preInfo{X}.VdotH,baseConductorReflectance.coloredF0,baseConductorReflectance.coloredF90,specular_roughness);
#else
var coloredFresnel: vec3f=fresnelSchlickGGX(preInfo{X}.VdotH,baseConductorReflectance.coloredF0,baseConductorReflectance.coloredF90);
#endif
#ifdef THIN_FILM
let thinFilmIorScale: f32=clamp(2.0f*abs(thin_film_ior-1.0f),0.0f,1.0f);var thinFilmConductorFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,preInfo{X}.VdotH,thin_film_thickness,baseConductorReflectance.coloredF0);thinFilmConductorFresnel=mix(thinFilmConductorFresnel,vec3f(dot(thinFilmConductorFresnel,vec3f(0.3333f))),thin_film_desaturation_scale);coloredFresnel=mix(coloredFresnel,specular_weight*thinFilmIorScale*thinFilmConductorFresnel,thin_film_weight);
#endif
#ifdef ANISOTROPIC_BASE
slab_metal=computeAnisotropicSpecularLighting(preInfo{X},viewDirectionW,normalW,baseGeoInfo.anisotropicTangent,baseGeoInfo.anisotropicBitangent,baseGeoInfo.anisotropy,0.0,lightColor{X}.rgb);
#else
slab_metal=computeSpecularLighting(preInfo{X},normalW,vec3f(baseConductorReflectance.coloredF0),coloredFresnel,specular_roughness,lightColor{X}.rgb);
#endif
}
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
slab_coat=computeAreaSpecularLighting(preInfoCoat{X},light{X}.vLightSpecular.rgb,coatReflectance.F0,coatReflectance.F90);
#else
{
#ifdef ANISOTROPIC_COAT
slab_coat=computeAnisotropicSpecularLighting(preInfoCoat{X},viewDirectionW,coatNormalW,
coatGeoInfo.anisotropicTangent,coatGeoInfo.anisotropicBitangent,coatGeoInfo.anisotropy,0.0,
lightColor{X}.rgb);
#else
slab_coat=computeSpecularLighting(preInfoCoat{X},coatNormalW,vec3f(coatReflectance.F0),vec3f(1.0f),coat_roughness,lightColor{X}.rgb);
#endif
let NdotH: f32=dot(coatNormalW,preInfoCoat{X}.H);coatFresnel=fresnelSchlickGGX(NdotH,coatReflectance.F0,coatReflectance.F90);}
#endif
var coatAbsorption=vec3f(1.0f);if (coat_weight>0.0) {let cosTheta_view: f32=max(preInfoCoat{X}.NdotV,0.001f);let cosTheta_light: f32=max(preInfoCoat{X}.NdotL,0.001f);let fresnel_view: f32=coatReflectance.F0+(1.0f-coatReflectance.F0)*pow(1.0f-cosTheta_view,5.0);let fresnel_light: f32=coatReflectance.F0+(1.0f-coatReflectance.F0)*pow(1.0f-cosTheta_light,5.0);let averageReflectance: f32=(fresnel_view+fresnel_light)*0.5;var darkened_transmission: f32=(1.0f-averageReflectance)/(1.0f+averageReflectance);darkened_transmission=mix(1.0f,darkened_transmission,coat_darkening);var sin2: f32=1.0f-coatGeoInfo.NdotV*coatGeoInfo.NdotV;sin2=sin2/(coat_ior*coat_ior);let cos_t: f32=sqrt(1.0f-sin2);let coatPathLength=1.0f/cos_t;let colored_transmission: vec3f=pow(coat_color,vec3f(coatPathLength));coatAbsorption=mix(vec3f(1.0f),colored_transmission*vec3f(darkened_transmission),coat_weight);}
#ifdef FUZZ
fuzzFresnel=fuzzBrdf.z;let fuzzNormalW=mix(normalW,coatNormalW,coat_weight);let fuzzNdotV: f32=max(dot(fuzzNormalW,viewDirectionW.xyz),0.0f);let fuzzNdotL: f32=max(dot(fuzzNormalW,preInfo{X}.L),0.0);slab_fuzz=lightColor{X}.rgb*preInfo{X}.attenuation*evalFuzz(preInfo{X}.L,fuzzNdotL,fuzzNdotV,fuzzTangent,fuzzBitangent,fuzzBrdf);
#else
let fuzz_color=vec3f(0.0);
#endif
slab_diffuse*=base_color.rgb;let material_opaque_base: vec3f=mix(slab_diffuse,slab_subsurface,subsurface_weight);let material_dielectric_base: vec3f=mix(material_opaque_base,slab_translucent,transmission_weight);let material_dielectric_gloss: vec3f=material_dielectric_base*(1.0f-specularFresnel)+slab_glossy*specularColoredFresnel;let material_base_substrate: vec3f=mix(material_dielectric_gloss,slab_metal,base_metalness);let material_coated_base: vec3f=layer(material_base_substrate,slab_coat,coatFresnel,coatAbsorption,vec3f(1.0f));material_surface_direct+=layer(material_coated_base,slab_fuzz,fuzzFresnel*fuzz_weight,vec3f(1.0f),fuzz_color);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrDirectLightingWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrDirectLightingInit.js":
/*!****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrDirectLightingInit.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrDirectLightingInitWGSL: () => (/* binding */ openpbrDirectLightingInitWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrDirectLightingInit";
const shader = `#ifdef LIGHT{X}
var preInfo{X}: preLightingInfo;var preInfoCoat{X}: preLightingInfo;let lightColor{X}: vec4f=light{X}.vLightDiffuse;var shadow{X}: f32=1.0f;
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#define CUSTOM_LIGHT{X}_COLOR 
#ifdef SPOTLIGHT{X}
preInfo{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);preInfoCoat{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW,vPositionW);
#elif defined(POINTLIGHT{X})
preInfo{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);preInfoCoat{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW,vPositionW);
#elif defined(HEMILIGHT{X})
preInfo{X}=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);preInfoCoat{X}=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW);
#elif defined(DIRLIGHT{X})
preInfo{X}=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);preInfoCoat{X}=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
preInfo{X}=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,normalW,vPositionW,light{X}.vLightData,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,specular_roughness);preInfoCoat{X}=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,coatNormalW,vPositionW,light{X}.vLightData,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,coat_roughness);
#endif
preInfo{X}.NdotV=baseGeoInfo.NdotV;preInfoCoat{X}.NdotV=coatGeoInfo.NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo{X}.attenuation=computeDistanceLightFalloff_GLTF(preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Physical(preInfo{X}.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Standard(preInfo{X}.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo{X}.attenuation=computeDistanceLightFalloff(preInfo{X}.lightOffset,preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo{X}.attenuation=computeDistanceLightFalloff_GLTF(preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Physical(preInfo{X}.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Standard(preInfo{X}.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo{X}.attenuation=computeDistanceLightFalloff(preInfo{X}.lightOffset,preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo{X}.attenuation=1.0f;
#endif
preInfoCoat{X}.attenuation=preInfo{X}.attenuation;
#if defined(HEMILIGHT{X})
preInfo{X}.roughness=specular_roughness;preInfoCoat{X}.roughness=coat_roughness;
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
preInfo{X}.roughness=specular_roughness;preInfoCoat{X}.roughness=coat_roughness;
#else
preInfo{X}.roughness=adjustRoughnessFromLightProperties(specular_roughness,light{X}.vLightSpecular.a,preInfo{X}.lightDistance);preInfoCoat{X}.roughness=adjustRoughnessFromLightProperties(coat_roughness,light{X}.vLightSpecular.a,preInfoCoat{X}.lightDistance);
#endif
preInfo{X}.diffuseRoughness=base_diffuse_roughness;preInfo{X}.surfaceAlbedo=base_color.rgb;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrDirectLightingInitWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrEnvironmentLighting.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrEnvironmentLighting.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrEnvironmentLightingWGSL: () => (/* binding */ openpbrEnvironmentLightingWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrEnvironmentLighting";
const shader = `#ifdef REFLECTION
#ifdef FUZZ
let environmentFuzzBrdf: vec3f=getFuzzBRDFLookup(fuzzGeoInfo.NdotV,sqrt(fuzz_roughness));
#endif
var baseDiffuseEnvironmentLight: vec3f=sampleIrradiance(
normalW
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradiance 
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
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
,uniforms.vReflectionInfos
,viewDirectionW
,base_diffuse_roughness
,base_color
);
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f=vec3f(0.f,0.f,0.f);
#else
var reflectionCoords: vec2f=vec2f(0.f,0.f);
#endif
let specularAlphaG: f32=specular_roughness*specular_roughness;
#ifdef ANISOTROPIC_BASE
var baseSpecularEnvironmentLight: vec3f=sampleRadianceAnisotropic(specularAlphaG,uniforms.vReflectionMicrosurfaceInfos.rgb,uniforms.vReflectionInfos
,baseGeoInfo
,normalW
,viewDirectionW
,fragmentInputs.vPositionW
,noise
,reflectionSampler
,reflectionSamplerSampler
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
);
#else
reflectionCoords=createReflectionCoords(fragmentInputs.vPositionW,normalW);var baseSpecularEnvironmentLight: vec3f=sampleRadiance(specularAlphaG,uniforms.vReflectionMicrosurfaceInfos.rgb,uniforms.vReflectionInfos
,baseGeoInfo
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
);
#endif
#ifdef ANISOTROPIC_BASE
baseSpecularEnvironmentLight=mix(baseSpecularEnvironmentLight.rgb,baseDiffuseEnvironmentLight,specularAlphaG*specularAlphaG *max(1.0f-baseGeoInfo.anisotropy,0.3f));
#else
baseSpecularEnvironmentLight=mix(baseSpecularEnvironmentLight.rgb,baseDiffuseEnvironmentLight,specularAlphaG);
#endif
var coatEnvironmentLight: vec3f=vec3f(0.f,0.f,0.f);if (coat_weight>0.0) {
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f=vec3f(0.f,0.f,0.f);
#else
var reflectionCoords: vec2f=vec2f(0.f,0.f);
#endif
reflectionCoords=createReflectionCoords(fragmentInputs.vPositionW,coatNormalW);var coatAlphaG: f32=coat_roughness*coat_roughness;
#ifdef ANISOTROPIC_COAT
coatEnvironmentLight=sampleRadianceAnisotropic(coatAlphaG,uniforms.vReflectionMicrosurfaceInfos.rgb,uniforms.vReflectionInfos
,coatGeoInfo
,coatNormalW
,viewDirectionW
,fragmentInputs.vPositionW
,noise
,reflectionSampler
,reflectionSamplerSampler
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
);
#else
coatEnvironmentLight=sampleRadiance(coatAlphaG,uniforms.vReflectionMicrosurfaceInfos.rgb,uniforms.vReflectionInfos
,coatGeoInfo
,reflectionSampler
,reflectionSamplerSampler
,reflectionCoords
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
);
#endif
}
#ifdef FUZZ
let modifiedFuzzRoughness: f32=clamp(fuzz_roughness*(1.0f-0.5f*environmentFuzzBrdf.y),0.0f,1.0f);var fuzzEnvironmentLight=vec3f(0.0f,0.0f,0.0f);var totalWeight=0.0f;let fuzzIblFresnel: f32=sqrt(environmentFuzzBrdf.z);for (var i: i32=0; i<i32(FUZZ_IBL_SAMPLES); i++) {var angle: f32=(f32(i)+noise.x)*(3.141592f*2.0f/f32(FUZZ_IBL_SAMPLES));var fiberCylinderNormal: vec3f=normalize(cos(angle)*fuzzTangent+sin(angle)*fuzzBitangent);let fiberBend=min(environmentFuzzBrdf.x*environmentFuzzBrdf.x*modifiedFuzzRoughness,1.0f);fiberCylinderNormal=normalize(mix(fiberCylinderNormal,fuzzNormalW,fiberBend));let sampleWeight=max(dot(viewDirectionW,fiberCylinderNormal),0.0f);var fuzzReflectionCoords=createReflectionCoords(fragmentInputs.vPositionW,fiberCylinderNormal);let radianceSample: vec3f=sampleRadiance(modifiedFuzzRoughness,uniforms.vReflectionMicrosurfaceInfos.rgb,uniforms.vReflectionInfos
,fuzzGeoInfo
,reflectionSampler
,reflectionSamplerSampler
,fuzzReflectionCoords
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
);fuzzEnvironmentLight+=sampleWeight*mix(radianceSample,baseDiffuseEnvironmentLight,fiberBend);totalWeight+=sampleWeight;}
fuzzEnvironmentLight/=totalWeight;
#endif
let dielectricIblFresnel: f32=getReflectanceFromBRDFWithEnvLookup(vec3f(baseDielectricReflectance.F0),vec3f(baseDielectricReflectance.F90),baseGeoInfo.environmentBrdf).r;var dielectricIblColoredFresnel: vec3f=dielectricIblFresnel*specular_color;
#ifdef THIN_FILM
let thinFilmIorScale: f32=clamp(2.0f*abs(thin_film_ior-1.0f),0.0f,1.0f);var thin_film_dielectric: vec3f=evalIridescence(thin_film_outside_ior,thin_film_ior,baseGeoInfo.NdotV,thin_film_thickness,baseDielectricReflectance.coloredF0);let thin_film_desaturation_scale=(thin_film_ior-1.0)*sqrt(thin_film_thickness*0.001f*baseGeoInfo.NdotV);thin_film_dielectric=mix(thin_film_dielectric,vec3(dot(thin_film_dielectric,vec3f(0.3333f))),thin_film_desaturation_scale);dielectricIblColoredFresnel=mix(dielectricIblColoredFresnel,thin_film_dielectric*specular_color,thin_film_weight*thinFilmIorScale);
#endif
var conductorIblFresnel: vec3f=conductorIblFresnel(baseConductorReflectance,baseGeoInfo.NdotV,specular_roughness,baseGeoInfo.environmentBrdf);
#ifdef THIN_FILM
var thinFilmConductorFresnel: vec3f=specular_weight*evalIridescence(thin_film_outside_ior,thin_film_ior,baseGeoInfo.NdotV,thin_film_thickness,baseConductorReflectance.coloredF0);thinFilmConductorFresnel=mix(thinFilmConductorFresnel,vec3(dot(thinFilmConductorFresnel,vec3f(0.3333f))),thin_film_desaturation_scale);conductorIblFresnel=mix(conductorIblFresnel,thinFilmConductorFresnel,thin_film_weight*thinFilmIorScale);
#endif
var coatIblFresnel: f32=0.0;if (coat_weight>0.0) {coatIblFresnel=getReflectanceFromBRDFWithEnvLookup(vec3f(coatReflectance.F0),vec3f(coatReflectance.F90),coatGeoInfo.environmentBrdf).r;}
var slab_diffuse_ibl: vec3f=vec3f(0.,0.,0.);var slab_glossy_ibl: vec3f=vec3f(0.,0.,0.);var slab_metal_ibl: vec3f=vec3f(0.,0.,0.);var slab_coat_ibl: vec3f=vec3f(0.,0.,0.);slab_diffuse_ibl=baseDiffuseEnvironmentLight*uniforms.vLightingIntensity.z;slab_diffuse_ibl*=aoOut.ambientOcclusionColor;slab_glossy_ibl=baseSpecularEnvironmentLight*uniforms.vLightingIntensity.z;slab_metal_ibl=baseSpecularEnvironmentLight*conductorIblFresnel*uniforms.vLightingIntensity.z;var coatAbsorption=vec3f(1.0);if (coat_weight>0.0) {slab_coat_ibl=coatEnvironmentLight*uniforms.vLightingIntensity.z;let hemisphere_avg_fresnel: f32=coatReflectance.F0+0.5f*(1.0f-coatReflectance.F0);var averageReflectance: f32=(coatIblFresnel+hemisphere_avg_fresnel)*0.5f;let roughnessFactor=1.0f-coat_roughness*0.5f;averageReflectance*=roughnessFactor;var darkened_transmission: f32=(1.0f-averageReflectance)*(1.0f-averageReflectance);darkened_transmission=mix(1.0,darkened_transmission,coat_darkening);var sin2: f32=1.0f-coatGeoInfo.NdotV*coatGeoInfo.NdotV;sin2=sin2/(coat_ior*coat_ior);let cos_t: f32=sqrt(1.0f-sin2);let coatPathLength=1.0f/cos_t;let colored_transmission: vec3f=pow(coat_color,vec3f(coatPathLength));coatAbsorption=mix(vec3f(1.0f),colored_transmission*vec3f(darkened_transmission),coat_weight);}
#ifdef FUZZ
let slab_fuzz_ibl=fuzzEnvironmentLight*uniforms.vLightingIntensity.z;
#endif
var slab_subsurface_ibl: vec3f=vec3f(0.,0.,0.);var slab_translucent_base_ibl: vec3f=vec3f(0.,0.,0.);slab_diffuse_ibl*=base_color.rgb;
#define CUSTOM_FRAGMENT_BEFORE_IBLLAYERCOMPOSITION
let material_opaque_base_ibl: vec3f=mix(slab_diffuse_ibl,slab_subsurface_ibl,subsurface_weight);let material_dielectric_base_ibl: vec3f=mix(material_opaque_base_ibl,slab_translucent_base_ibl,transmission_weight);let material_dielectric_gloss_ibl: vec3f=material_dielectric_base_ibl*(1.0-dielectricIblFresnel)+slab_glossy_ibl*dielectricIblColoredFresnel;let material_base_substrate_ibl: vec3f=mix(material_dielectric_gloss_ibl,slab_metal_ibl,base_metalness);let material_coated_base_ibl: vec3f=layer(material_base_substrate_ibl,slab_coat_ibl,coatIblFresnel,coatAbsorption,vec3f(1.0f));
#ifdef FUZZ
material_surface_ibl=layer(material_coated_base_ibl,slab_fuzz_ibl,fuzzIblFresnel*fuzz_weight,vec3(1.0),fuzz_color);
#else
material_surface_ibl=material_coated_base_ibl;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrEnvironmentLightingWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrFragmentSamplersDeclaration.js":
/*!*************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrFragmentSamplersDeclaration.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrFragmentSamplersDeclarationWGSL: () => (/* binding */ openpbrFragmentSamplersDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "openpbrFragmentSamplersDeclaration";
const shader = `#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_SAMPLERNAME_,baseDiffuseRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_METALNESS,_VARYINGNAME_,BaseMetalness,_SAMPLERNAME_,baseMetalness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_WEIGHT,_VARYINGNAME_,SpecularWeight,_SAMPLERNAME_,specularWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_COLOR,_VARYINGNAME_,SpecularColor,_SAMPLERNAME_,specularColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS,_VARYINGNAME_,SpecularRoughness,_SAMPLERNAME_,specularRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,SpecularRoughnessAnisotropy,_SAMPLERNAME_,specularRoughnessAnisotropy)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_WEIGHT,_VARYINGNAME_,CoatWeight,_SAMPLERNAME_,coatWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_COLOR,_VARYINGNAME_,CoatColor,_SAMPLERNAME_,coatColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness,_SAMPLERNAME_,coatRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy,_SAMPLERNAME_,coatRoughnessAnisotropy)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening,_SAMPLERNAME_,coatDarkening)
#include<samplerFragmentDeclaration>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight,_SAMPLERNAME_,fuzzWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor,_SAMPLERNAME_,fuzzColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness,_SAMPLERNAME_,fuzzRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity,_SAMPLERNAME_,geometryOpacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent,_SAMPLERNAME_,geometryTangent)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_TANGENT,_VARYINGNAME_,GeometryCoatTangent,_SAMPLERNAME_,geometryCoatTangent)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSION_COLOR,_VARYINGNAME_,EmissionColor,_SAMPLERNAME_,emissionColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,THIN_FILM_WEIGHT,_VARYINGNAME_,ThinFilmWeight,_SAMPLERNAME_,thinFilmWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,THIN_FILM_THICKNESS,_VARYINGNAME_,ThinFilmThickness,_SAMPLERNAME_,thinFilmThickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT_OCCLUSION,_VARYINGNAME_,AmbientOcclusion,_SAMPLERNAME_,ambientOcclusion)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
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
#ifdef FUZZENVIRONMENTBRDF
var environmentFuzzBrdfSamplerSampler: sampler;var environmentFuzzBrdfSampler: texture_2d<f32>;
#endif
#if defined(ANISOTROPIC) || defined(FUZZ)
var blueNoiseSamplerSampler: sampler;var blueNoiseSampler: texture_2d<f32>;
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
const openpbrFragmentSamplersDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrFuzzLayerData.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrFuzzLayerData.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrFuzzLayerDataWGSL: () => (/* binding */ openpbrFuzzLayerDataWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrFuzzLayerData";
const shader = `var fuzz_weight: f32=0.0f;var fuzz_color: vec3f=vec3f(1.0);var fuzz_roughness: f32=0.0f;
#ifdef FUZZ
#ifdef FUZZ_WEIGHT
let fuzzWeightFromTexture: vec4=textureSample(fuzzWeightSampler,fuzzWeightSamplerSampler,fragmentInputs.vFuzzWeightUV+uvOffset);
#endif
#ifdef FUZZ_COLOR
var fuzzColorFromTexture: vec4=textureSample(fuzzColorSampler,fuzzColorSamplerSampler,fragmentInputs.vFuzzColorUV+uvOffset);
#endif
#ifdef FUZZ_ROUGHNESS
let fuzzRoughnessFromTexture: vec4=textureSample(fuzzRoughnessSampler,fuzzRoughnessSamplerSampler,fragmentInputs.vFuzzRoughnessUV+uvOffset);
#endif
fuzz_color=uniforms.vFuzzColor.rgb;fuzz_weight=uniforms.vFuzzWeight;fuzz_roughness=uniforms.vFuzzRoughness;
#ifdef FUZZ_WEIGHT
fuzz_weight*=fuzzWeightFromTexture.r;
#endif
#ifdef FUZZ_COLOR
#ifdef FUZZ_COLOR_GAMMA
fuzz_color*=toLinearSpace(fuzzColorFromTexture.rgb);
#else
fuzz_color*=fuzzColorFromTexture.rgb;
#endif
fuzz_color*=uniforms.vFuzzColorInfos.y;
#endif
#if defined(FUZZ_ROUGHNESS) && defined(FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA)
fuzz_roughness*=fuzzRoughnessFromTexture.a;
#elif defined(FUZZ_ROUGHNESS)
fuzz_roughness*=fuzzRoughnessFromTexture.r;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrFuzzLayerDataWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrGeometryInfo.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrGeometryInfo.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrGeometryInfoWGSL: () => (/* binding */ openpbrGeometryInfoWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrGeometryInfo";
const shader = `struct geometryInfoOutParams
{NdotV: f32,
NdotVUnclamped: f32,
environmentBrdf: vec3f,
horizonOcclusion: f32};struct geometryInfoAnisoOutParams
{NdotV: f32,
NdotVUnclamped: f32,
environmentBrdf: vec3f,
horizonOcclusion: f32,
anisotropy: f32,
anisotropicTangent: vec3f,
anisotropicBitangent: vec3f,
TBN: mat3x3<f32>};fn geometryInfo(
normalW: vec3f,viewDirectionW: vec3f,roughness: f32,geometricNormalW: vec3f
)->geometryInfoOutParams
{var outParams: geometryInfoOutParams;outParams.NdotVUnclamped=dot(normalW,viewDirectionW);outParams.NdotV=absEps(outParams.NdotVUnclamped);
#if defined(ENVIRONMENTBRDF)
outParams.environmentBrdf=getBRDFLookup(outParams.NdotV,roughness);
#else
outParams.environmentBrdf=vec3f(0.0);
#endif
outParams.horizonOcclusion=1.0f;
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef HORIZONOCCLUSION
#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL)
#ifdef REFLECTIONMAP_3D
outParams.horizonOcclusion=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
return outParams;}
fn geometryInfoAniso(
normalW: vec3f,viewDirectionW: vec3f,roughness: f32,geometricNormalW: vec3f
,vAnisotropy: vec3f,TBN: mat3x3<f32>
)->geometryInfoAnisoOutParams
{let geoInfo: geometryInfoOutParams=geometryInfo(normalW,viewDirectionW,roughness,geometricNormalW);var outParams: geometryInfoAnisoOutParams;outParams.NdotV=geoInfo.NdotV;outParams.NdotVUnclamped=geoInfo.NdotVUnclamped;outParams.environmentBrdf=geoInfo.environmentBrdf;outParams.horizonOcclusion=geoInfo.horizonOcclusion;outParams.anisotropy=vAnisotropy.b;let anisotropyDirection: vec3f=vec3f(vAnisotropy.xy,0.);let anisoTBN: mat3x3<f32>=mat3x3<f32>(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));outParams.anisotropicTangent=normalize(anisoTBN*anisotropyDirection);outParams.anisotropicBitangent=normalize(cross(anisoTBN[2],outParams.anisotropicTangent));outParams.TBN=TBN;return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrGeometryInfoWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrIblFunctions.js":
/*!**********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrIblFunctions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrIblFunctionsWGSL: () => (/* binding */ openpbrIblFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrIblFunctions";
const shader = `#ifdef REFLECTION
fn sampleIrradiance(
surfaceNormal: vec3f
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradianceSH: vec3f
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,iblMatrix: mat4x4f
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
#ifdef REALTIME_FILTERING
,reflectionFilteringInfo: vec2f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>
,icdfSamplerSampler: sampler
#endif
#endif
,reflectionInfos: vec2f
,viewDirectionW: vec3f
,diffuseRoughness: f32
,surfaceAlbedo: vec3f
)->vec3f {var environmentIrradiance=vec3f(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
var irradianceVector=(iblMatrix*vec4f(surfaceNormal,0.0f)).xyz;let irradianceView=(iblMatrix*vec4f(viewDirectionW,0.0f)).xyz;
#if !defined(USE_IRRADIANCE_DOMINANT_DIRECTION) && !defined(REALTIME_FILTERING)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
{let NdotV=max(dot(surfaceNormal,viewDirectionW),0.0f);irradianceVector=mix(irradianceVector,irradianceView,(0.5f*(1.0f-NdotV))*diffuseRoughness);}
#endif
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0f;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0f;
#endif
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradianceSH;
#else
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,reflectionSamplerSampler,irradianceVector,reflectionFilteringInfo,diffuseRoughness,surfaceAlbedo,irradianceView
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
let environmentIrradianceFromTexture: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,irradianceVector);
#else
let environmentIrradianceFromTexture: vec4f=textureSample(irradianceSampler,irradianceSamplerSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradianceFromTexture.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradianceFromTexture);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
let Ls: vec3f=normalize(reflectionDominantDirection);let NoL: f32=dot(irradianceVector,Ls);let NoV: f32=dot(irradianceVector,irradianceView);var diffuseRoughnessTerm=vec3f(1.0f);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
let LoV: f32=dot (Ls,irradianceView);let mag: f32=length(reflectionDominantDirection)*2.0f;let clampedAlbedo: vec3f=clamp(surfaceAlbedo,vec3f(0.1f),vec3f(1.0f));diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;diffuseRoughnessTerm=diffuseRoughnessTerm/clampedAlbedo;diffuseRoughnessTerm=mix(vec3f(1.0f),diffuseRoughnessTerm,sqrt(clamp(mag*NoV,0.0f,1.0f)));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
let H: vec3f=(irradianceView+Ls)*0.5f;let VoH: f32=dot(irradianceView,H);diffuseRoughnessTerm=vec3f(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
environmentIrradiance=environmentIrradiance.rgb*diffuseRoughnessTerm;
#endif
#endif
environmentIrradiance*=reflectionInfos.x;return environmentIrradiance;}
#ifdef REFLECTIONMAP_3D
fn createReflectionCoords(vPositionW: vec3f,normalW: vec3f)->vec3f
#else
fn createReflectionCoords(vPositionW: vec3f,normalW: vec3f)->vec2f
#endif
{var reflectionVector: vec3f=computeReflectionCoords(vec4f(vPositionW,1.0f),normalW);
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
reflectionCoords.y=1.0f-reflectionCoords.y;
#endif
return reflectionCoords;}
fn sampleRadiance(
alphaG: f32
,reflectionMicrosurfaceInfos: vec3f
,reflectionInfos: vec2f
,geoInfo: geometryInfoOutParams
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec3f
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
,reflectionCoords: vec2f
#endif
#ifdef REALTIME_FILTERING
,reflectionFilteringInfo: vec2f
#endif
)->vec3f {var environmentRadiance: vec4f=vec4f(0.f,0.f,0.f,0.f);
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
var reflectionLOD: f32=getLodFromAlphaG(reflectionMicrosurfaceInfos.x,alphaG,geoInfo.NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
var reflectionLOD: f32=getLinearLodFromRoughness(reflectionMicrosurfaceInfos.x,roughness);
#else
var reflectionLOD: f32=getLodFromAlphaG(reflectionMicrosurfaceInfos.x,alphaG);
#endif
reflectionLOD=reflectionLOD*reflectionMicrosurfaceInfos.y+reflectionMicrosurfaceInfos.z;
#ifdef REALTIME_FILTERING
environmentRadiance=vec4f(radiance(alphaG,reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionFilteringInfo),1.0f);
#else
environmentRadiance=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
return environmentRadiance.rgb;}
#if defined(ANISOTROPIC)
fn sampleRadianceAnisotropic(
alphaG: f32
,reflectionMicrosurfaceInfos: vec3f
,reflectionInfos: vec2f
,geoInfo: geometryInfoAnisoOutParams
,normalW: vec3f
,viewDirectionW: vec3f
,positionW: vec3f
,noise: vec3f
#ifdef REFLECTIONMAP_3D
,reflectionSampler: texture_cube<f32>
,reflectionSamplerSampler: sampler
#else
,reflectionSampler: texture_2d<f32>
,reflectionSamplerSampler: sampler
#endif
#ifdef REALTIME_FILTERING
,reflectionFilteringInfo: vec2f
#endif
)->vec3f {var environmentRadiance: vec4f=vec4f(0.f,0.f,0.f,0.f);let alphaT=alphaG*sqrt(2.0f/(1.0f+(1.0f-geoInfo.anisotropy)*(1.0f-geoInfo.anisotropy)));let alphaB=(1.0f-geoInfo.anisotropy)*alphaT;let modifiedAlphaG=alphaB;
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
var reflectionLOD: f32=getLodFromAlphaG(reflectionMicrosurfaceInfos.x,modifiedAlphaG,geoInfo.NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
var reflectionLOD: f32=getLinearLodFromRoughness(reflectionMicrosurfaceInfos.x,roughness);
#else
var reflectionLOD: f32=getLodFromAlphaG(reflectionMicrosurfaceInfos.x,modifiedAlphaG);
#endif
reflectionLOD=reflectionLOD*reflectionMicrosurfaceInfos.y+reflectionMicrosurfaceInfos.z;
#ifdef REALTIME_FILTERING
var view=(uniforms.reflectionMatrix*vec4f(viewDirectionW,0.0f)).xyz;var tangent=(uniforms.reflectionMatrix*vec4f(geoInfo.anisotropicTangent,0.0f)).xyz;var bitangent=(uniforms.reflectionMatrix*vec4f(geoInfo.anisotropicBitangent,0.0f)).xyz;var normal=(uniforms.reflectionMatrix*vec4f(normalW,0.0f)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
view.z*=-1.0f;tangent.z*=-1.0f;bitangent.z*=-1.0f;normal.z*=-1.0f;
#endif
environmentRadiance =
vec4f(radianceAnisotropic(alphaT,alphaB,reflectionSampler,reflectionSamplerSampler,
view,tangent,
bitangent,normal,
reflectionFilteringInfo,noise.xy),
1.0f);
#else
const samples: i32=16;var radianceSample=vec4f(0.0);var accumulatedRadiance=vec3f(0.0);var reflectionCoords=vec3f(0.0);var sample_weight=0.0f;var total_weight=0.0f;let step=1.0f/f32(max(samples-1,1));for (var i: i32=0; i<samples; i++) {var t: f32=mix(-1.0,1.0,f32(i)*step);t+=step*2.0*noise.x;sample_weight=max(1.0-abs(t),0.001);sample_weight*=sample_weight;t*=min(4.0*alphaT*geoInfo.anisotropy,1.0);var bentNormal: vec3f;if (t<0.0) {let blend: f32=t+1.0;bentNormal=normalize(mix(-geoInfo.anisotropicTangent,normalW,blend));} else if (t>0.0) {let blend: f32=t;bentNormal=normalize(mix(normalW,geoInfo.anisotropicTangent,blend));} else {bentNormal=normalW;}
reflectionCoords=createReflectionCoords(positionW,bentNormal);radianceSample=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#ifdef RGBDREFLECTION
accumulatedRadiance+=vec3f(sample_weight)*fromRGBD(radianceSample);
#elif defined(GAMMAREFLECTION)
accumulatedRadiance+=vec3f(sample_weight)*toLinearSpace(radianceSample.rgb);
#else
accumulatedRadiance+=vec3f(sample_weight)*radianceSample.rgb;
#endif
total_weight+=sample_weight;}
environmentRadiance=vec4f(accumulatedRadiance/vec3f(total_weight),1.0f);
#endif
environmentRadiance=vec4f(environmentRadiance.rgb*reflectionInfos.xxx,environmentRadiance.a);return environmentRadiance.rgb;}
#endif
fn conductorIblFresnel(reflectance: ReflectanceParams,NdotV: f32,roughness: f32,environmentBrdf: vec3f)->vec3f
{
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
let albedoF0: vec3f=mix(reflectance.coloredF0,pow(reflectance.coloredF0,vec3f(1.4f)),roughness);return getF82Specular(NdotV,albedoF0,reflectance.coloredF90,roughness);
#else
return getReflectanceFromBRDFLookup(reflectance.coloredF0,reflectance.coloredF90,environmentBrdf);
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrIblFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragment.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragment.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapFragmentWGSL: () => (/* binding */ openpbrNormalMapFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapFragment";
const shader = `var uvOffset: vec2f= vec2f(0.0,0.0);
#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
var normalScale: f32=1.0;
#elif defined(GEOMETRY_NORMAL)
var normalScale: f32=uniforms.vGeometryNormalInfos.y;
#else
var normalScale: f32=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#elif defined(GEOMETRY_NORMAL)
var TBNUV: vec2f=select(-fragmentInputs.vGeometryNormalUV,fragmentInputs.vGeometryNormalUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV,uniforms.vTangentSpaceParams);
#else
var TBNUV: vec2f=select(-fragmentInputs.vDetailUV,fragmentInputs.vDetailUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#elif defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2);
#else
var TBNUV: vec2f=select( -fragmentInputs.vMainUV1,fragmentInputs.vMainUV1,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#endif
#ifdef PARALLAX
var invTBN: mat3x3f=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
#else
#endif
#endif
#ifdef DETAIL
var detailColor: vec4f=textureSample(detailSampler,detailSamplerSampler,fragmentInputs.vDetailUV+uvOffset);var detailNormalRG: vec2f=detailColor.wy*2.0-1.0;var detailNormalB: f32=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));var detailNormal: vec3f= vec3f(detailNormalRG,detailNormalB);
#endif
#ifdef GEOMETRY_COAT_NORMAL
coatNormalW=perturbNormal(TBN,textureSample(geometryCoatNormalSampler,geometryCoatNormalSamplerSampler,fragmentInputs.vGeometryCoatNormalUV+uvOffset).xyz,uniforms.vGeometryCoatNormalInfos.y);
#endif
#ifdef GEOMETRY_NORMAL
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(textureSample(geometryNormalSampler,geometryNormalSamplerSampler,fragmentInputs.vGeometryNormalUV).xyz *2.0-1.0);normalW=normalize(mat3x3f(uniforms.normalMatrix[0].xyz,uniforms.normalMatrix[1].xyz,uniforms.normalMatrix[2].xyz)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,textureSample(geometryNormalSampler,geometryNormalSamplerSampler,fragmentInputs.vGeometryNormalUV+uvOffset).xyz,uniforms.vGeometryNormalInfos.y);
#else
var sampledNormal: vec3f=textureSample(geometryNormalSampler,geometryNormalSamplerSampler,fragmentInputs.vGeometryNormalUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);var blendedNormal: vec3f=normalize( vec3f(sampledNormal.xy+detailNormal.xy,sampledNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);sampledNormal+= vec3f(0.0,0.0,1.0);detailNormal*= vec3f(-1.0,-1.0,1.0);var blendedNormal: vec3f=sampledNormal*dot(sampledNormal,detailNormal)/sampledNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,uniforms.vGeometryNormalInfos.y);
#endif
#elif defined(DETAIL)
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);normalW=perturbNormalBase(TBN,detailNormal,uniforms.vDetailInfos.z);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrNormalMapFragmentWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentFunctions.js":
/*!************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentFunctions.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapFragmentFunctionsWGSL: () => (/* binding */ openpbrNormalMapFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "openpbrNormalMapFragmentFunctions";
const shader = `#if defined(GEOMETRY_NORMAL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)
#endif
#if defined(GEOMETRY_COAT_NORMAL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal,_SAMPLERNAME_,geometryCoatNormal)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(GEOMETRY_NORMAL) && defined(PARALLAX)
const minSamples: f32=4.;const maxSamples: f32=15.;const iMaxSamples: i32=15;fn parallaxOcclusion(vViewDirCoT: vec3f,vNormalCoT: vec3f,texCoord: vec2f,parallaxScale: f32)->vec2f {var parallaxLimit: f32=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;var vOffsetDir: vec2f=normalize(vViewDirCoT.xy);var vMaxOffset: vec2f=vOffsetDir*parallaxLimit;var numSamples: f32=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));var stepSize: f32=1.0/numSamples;var currRayHeight: f32=1.0;var vCurrOffset: vec2f= vec2f(0,0);var vLastOffset: vec2f= vec2f(0,0);var lastSampledHeight: f32=1.0;var currSampledHeight: f32=1.0;var keepWorking: bool=true;for (var i: i32=0; i<iMaxSamples; i++)
{currSampledHeight=textureSample(geometryNormalSampler,geometryNormalSamplerSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{var delta1: f32=currSampledHeight-currRayHeight;var delta2: f32=(currRayHeight+stepSize)-lastSampledHeight;var ratio: f32=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
fn parallaxOffset(viewDir: vec3f,heightScale: f32)->vec2f
{var height: f32=textureSample(geometryNormalSampler,geometryNormalSamplerSampler,fragmentInputs.vGeometryNormalUV).w;var texCoordOffset: vec2f=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrNormalMapFragmentFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js":
/*!****************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapFragmentMainFunctionsWGSL: () => (/* binding */ openpbrNormalMapFragmentMainFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapFragmentMainFunctions";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform normalMatrix: mat4x4f;fn toNormalMatrix(m: mat4x4f)->mat4x4f
{var a00=m[0][0];var a01=m[0][1];var a02=m[0][2];var a03=m[0][3];var a10=m[1][0];var a11=m[1][1];var a12=m[1][2];var a13=m[1][3];var a20=m[2][0]; 
var a21=m[2][1];var a22=m[2][2];var a23=m[2][3];var a30=m[3][0]; 
var a31=m[3][1];var a32=m[3][2];var a33=m[3][3];var b00=a00*a11-a01*a10;var b01=a00*a12-a02*a10;var b02=a00*a13-a03*a10;var b03=a01*a12-a02*a11;var b04=a01*a13-a03*a11;var b05=a02*a13-a03*a12;var b06=a20*a31-a21*a30;var b07=a20*a32-a22*a30;var b08=a20*a33-a23*a30;var b09=a21*a32-a22*a31;var b10=a21*a33-a23*a31;var b11=a22*a33-a23*a32;var det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;var mi=mat4x4<f32>(
(a11*b11-a12*b10+a13*b09)/det,
(a02*b10-a01*b11-a03*b09)/det,
(a31*b05-a32*b04+a33*b03)/det,
(a22*b04-a21*b05-a23*b03)/det,
(a12*b08-a10*b11-a13*b07)/det,
(a00*b11-a02*b08+a03*b07)/det,
(a32*b02-a30*b05-a33*b01)/det,
(a20*b05-a22*b02+a23*b01)/det,
(a10*b10-a11*b08+a13*b06)/det,
(a01*b08-a00*b10-a03*b06)/det,
(a30*b04-a31*b02+a33*b00)/det,
(a21*b02-a20*b04-a23*b00)/det,
(a11*b07-a10*b09-a12*b06)/det,
(a00*b09-a01*b07+a02*b06)/det,
(a31*b01-a30*b03-a32*b00)/det,
(a20*b03-a21*b01+a22*b00)/det);return mat4x4<f32>(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
fn perturbNormalBase(cotangentFrame: mat3x3f,normal: vec3f,scale: f32)->vec3f
{var output=normal;
#ifdef NORMALXYSCALE
output=normalize(output* vec3f(scale,scale,1.0));
#endif
return normalize(cotangentFrame*output);}
fn perturbNormal(cotangentFrame: mat3x3f,textureSample: vec3f,scale: f32)->vec3f
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
fn cotangent_frame(normal: vec3f,p: vec3f,uv: vec2f,tangentSpaceParams: vec2f)->mat3x3f
{var dp1: vec3f=dpdx(p);var dp2: vec3f=dpdy(p);var duv1: vec2f=dpdx(uv);var duv2: vec2f=dpdy(uv);var dp2perp: vec3f=cross(dp2,normal);var dp1perp: vec3f=cross(normal,dp1);var tangent: vec3f=dp2perp*duv1.x+dp1perp*duv2.x;var bitangent: vec3f=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;var det: f32=max(dot(tangent,tangent),dot(bitangent,bitangent));var invmax: f32=select(inverseSqrt(det),0.0,det==0.0);return mat3x3f(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrNormalMapFragmentMainFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrThinFilmLayerData.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrThinFilmLayerData.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrThinFilmLayerDataWGSL: () => (/* binding */ openpbrThinFilmLayerDataWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrThinFilmLayerData";
const shader = `#ifdef THIN_FILM
var thin_film_weight: f32=uniforms.vThinFilmWeight;var thin_film_thickness: f32=uniforms.vThinFilmThickness.r*1000.0f; 
var thin_film_ior: f32=uniforms.vThinFilmIor;
#ifdef THIN_FILM_WEIGHT
var thinFilmWeightFromTexture: f32=textureSample(thinFilmWeightSampler,thinFilmWeightSamplerSampler,fragmentInputs.vThinFilmWeightUV+uvOffset).r*uniforms.vThinFilmWeightInfos.y;
#endif
#ifdef THIN_FILM_THICKNESS
var thinFilmThicknessFromTexture: f32=textureSample(thinFilmThicknessSampler,thinFilmThicknessSamplerSampler,fragmentInputs.vThinFilmThicknessUV+uvOffset).g*uniforms.vThinFilmThicknessInfos.y;
#endif
#ifdef THIN_FILM_WEIGHT
thin_film_weight*=thinFilmWeightFromTexture;
#endif
#ifdef THIN_FILM_THICKNESS
thin_film_thickness*=thinFilmThicknessFromTexture;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrThinFilmLayerDataWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrUboDeclarationWGSL: () => (/* binding */ openpbrUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "openpbrUboDeclaration";
const shader = `uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform cameraInfo: vec4f;uniform vReflectionInfos: vec2f;uniform reflectionMatrix: mat4x4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vReflectionFilteringInfo: vec2f;uniform vReflectionDominantDirection: vec3f;uniform vReflectionColor: vec3f;uniform vSphericalL00: vec3f;uniform vSphericalL1_1: vec3f;uniform vSphericalL10: vec3f;uniform vSphericalL11: vec3f;uniform vSphericalL2_2: vec3f;uniform vSphericalL2_1: vec3f;uniform vSphericalL20: vec3f;uniform vSphericalL21: vec3f;uniform vSphericalL22: vec3f;uniform vSphericalX: vec3f;uniform vSphericalY: vec3f;uniform vSphericalZ: vec3f;uniform vSphericalXX_ZZ: vec3f;uniform vSphericalYY_ZZ: vec3f;uniform vSphericalZZ: vec3f;uniform vSphericalXY: vec3f;uniform vSphericalYZ: vec3f;uniform vSphericalZX: vec3f;uniform vBaseWeight: f32;uniform vBaseColor: vec4f;uniform vBaseDiffuseRoughness: f32;uniform vReflectanceInfo: vec4f;uniform vSpecularColor: vec4f;uniform vSpecularAnisotropy: vec3f;uniform vCoatWeight: f32;uniform vCoatColor: vec3f;uniform vCoatRoughness: f32;uniform vCoatRoughnessAnisotropy: f32;uniform vCoatIor: f32;uniform vCoatDarkening : f32;uniform vFuzzWeight: f32;uniform vFuzzColor: vec3f;uniform vFuzzRoughness: f32;uniform vGeometryCoatTangent: vec2f;uniform vEmissionColor: vec3f;uniform vThinFilmWeight: f32;uniform vThinFilmThickness: vec2f;uniform vThinFilmIor: f32;uniform vBaseWeightInfos: vec2f;uniform baseWeightMatrix: mat4x4f;uniform vBaseColorInfos: vec2f;uniform baseColorMatrix: mat4x4f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform baseDiffuseRoughnessMatrix: mat4x4f;uniform vBaseMetalnessInfos: vec2f;uniform baseMetalnessMatrix: mat4x4f;uniform vSpecularWeightInfos: vec2f;uniform specularWeightMatrix: mat4x4f;uniform vSpecularColorInfos: vec2f;uniform specularColorMatrix: mat4x4f;uniform vSpecularRoughnessInfos: vec2f;uniform specularRoughnessMatrix: mat4x4f;uniform vSpecularRoughnessAnisotropyInfos: vec2f;uniform specularRoughnessAnisotropyMatrix: mat4x4f;uniform vCoatWeightInfos: vec2f;uniform coatWeightMatrix: mat4x4f;uniform vCoatColorInfos: vec2f;uniform coatColorMatrix: mat4x4f;uniform vCoatRoughnessInfos: vec2f;uniform coatRoughnessMatrix: mat4x4f;uniform vCoatRoughnessAnisotropyInfos: vec2f;uniform coatRoughnessAnisotropyMatrix: mat4x4f;uniform vCoatDarkeningInfos : vec2f;uniform coatDarkeningMatrix : mat4x4f;uniform vFuzzWeightInfos: vec2f;uniform fuzzWeightMatrix: mat4x4f;uniform vFuzzColorInfos: vec2f;uniform fuzzColorMatrix: mat4x4f;uniform vFuzzRoughnessInfos: vec2f;uniform fuzzRoughnessMatrix: mat4x4f;uniform vGeometryNormalInfos: vec2f;uniform geometryNormalMatrix: mat4x4f;uniform vGeometryTangentInfos: vec2f;uniform geometryTangentMatrix: mat4x4f;uniform vGeometryCoatNormalInfos: vec2f;uniform geometryCoatNormalMatrix: mat4x4f;uniform vGeometryCoatTangentInfos: vec2f;uniform geometryCoatTangentMatrix: mat4x4f;uniform vGeometryOpacityInfos: vec2f;uniform geometryOpacityMatrix: mat4x4f;uniform vEmissionInfos: vec2f;uniform emissionMatrix: mat4x4f;uniform vThinFilmWeightInfos: vec2f;uniform thinFilmWeightMatrix: mat4x4f;uniform vThinFilmThicknessInfos: vec2f;uniform thinFilmThicknessMatrix: mat4x4f;uniform vAmbientOcclusionInfos: vec2f;uniform ambientOcclusionMatrix: mat4x4f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/openpbr.fragment.js":
/*!****************************************************!*\
  !*** ../core/dist/ShadersWGSL/openpbr.fragment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrPixelShaderWGSL: () => (/* binding */ openpbrPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_prePassDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/prePassDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js");
/* harmony import */ var _ShadersInclude_oitDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/oitDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js");
/* harmony import */ var _ShadersInclude_openpbrUboDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/openpbrUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentExtraDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentExtraDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_openpbrFragmentSamplersDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/openpbrFragmentSamplersDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrFragmentSamplersDeclaration.js");
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
/* harmony import */ var _ShadersInclude_openpbrNormalMapFragmentMainFunctions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapFragmentMainFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js");
/* harmony import */ var _ShadersInclude_openpbrNormalMapFragmentFunctions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapFragmentFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/ShadersWGSL/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_openpbrDielectricReflectance__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/openpbrDielectricReflectance */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrDielectricReflectance.js");
/* harmony import */ var _ShadersInclude_openpbrConductorReflectance__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/openpbrConductorReflectance */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrConductorReflectance.js");
/* harmony import */ var _ShadersInclude_openpbrBlockAmbientOcclusion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/openpbrBlockAmbientOcclusion */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrBlockAmbientOcclusion.js");
/* harmony import */ var _ShadersInclude_openpbrGeometryInfo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/openpbrGeometryInfo */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrGeometryInfo.js");
/* harmony import */ var _ShadersInclude_openpbrIblFunctions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/openpbrIblFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrIblFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockNormalGeometric__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockNormalGeometric */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js");
/* harmony import */ var _ShadersInclude_openpbrNormalMapFragment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapFragment */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapFragment.js");
/* harmony import */ var _ShadersInclude_openpbrBlockNormalFinal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ShadersInclude/openpbrBlockNormalFinal */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrBlockNormalFinal.js");
/* harmony import */ var _ShadersInclude_openpbrBaseLayerData__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ShadersInclude/openpbrBaseLayerData */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrBaseLayerData.js");
/* harmony import */ var _ShadersInclude_openpbrCoatLayerData__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ShadersInclude/openpbrCoatLayerData */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrCoatLayerData.js");
/* harmony import */ var _ShadersInclude_openpbrThinFilmLayerData__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ShadersInclude/openpbrThinFilmLayerData */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrThinFilmLayerData.js");
/* harmony import */ var _ShadersInclude_openpbrFuzzLayerData__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ShadersInclude/openpbrFuzzLayerData */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrFuzzLayerData.js");
/* harmony import */ var _ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ShadersInclude/depthPrePass */ "../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js");
/* harmony import */ var _ShadersInclude_openpbrEnvironmentLighting__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ShadersInclude/openpbrEnvironmentLighting */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrEnvironmentLighting.js");
/* harmony import */ var _ShadersInclude_openpbrDirectLightingInit__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ShadersInclude/openpbrDirectLightingInit */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrDirectLightingInit.js");
/* harmony import */ var _ShadersInclude_openpbrDirectLighting__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ShadersInclude/openpbrDirectLighting */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrDirectLighting.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/ShadersWGSL/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockImageProcessing__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockImageProcessing */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js");
/* harmony import */ var _ShadersInclude_pbrBlockPrePass__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockPrePass */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js");
/* harmony import */ var _ShadersInclude_oitFragment__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ShadersInclude/oitFragment */ "../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js");
/* harmony import */ var _ShadersInclude_pbrDebug__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ShadersInclude/pbrDebug */ "../core/dist/ShadersWGSL/ShadersInclude/pbrDebug.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


















































const name = "openpbrPixelShader";
const shader = `#define OPENPBR_FRAGMENT_SHADER
#define CUSTOM_FRAGMENT_BEGIN
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<openpbrUboDeclaration>
#include<pbrFragmentExtraDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<openpbrFragmentSamplersDeclaration>
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
#include<openpbrNormalMapFragmentMainFunctions>
#include<openpbrNormalMapFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<openpbrDielectricReflectance>
#include<openpbrConductorReflectance>
#include<openpbrBlockAmbientOcclusion>
#include<openpbrGeometryInfo>
#include<openpbrIblFunctions>
fn layer(slab_bottom: vec3f,slab_top: vec3f,lerp_factor: f32,bottom_multiplier: vec3f,top_multiplier: vec3f)->vec3f {return mix(slab_bottom*bottom_multiplier,slab_top*top_multiplier,lerp_factor);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
var coatNormalW: vec3f=normalW;
#include<openpbrNormalMapFragment>
#include<openpbrBlockNormalFinal>
#include<openpbrBaseLayerData>
#include<openpbrCoatLayerData>
#include<openpbrThinFilmLayerData>
#include<openpbrFuzzLayerData>
var subsurface_weight: f32=0.0f;var transmission_weight: f32=0.0f;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var aoOut: ambientOcclusionOutParams;
#ifdef AMBIENT_OCCLUSION
var ambientOcclusionFromTexture: vec3f=textureSample(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fragmentInputs.vAmbientOcclusionUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT_OCCLUSION
ambientOcclusionFromTexture,
uniforms.vAmbientOcclusionInfos
#endif
);
#ifdef ANISOTROPIC_COAT
let coatGeoInfo: geometryInfoAnisoOutParams=geometryInfoAniso(
coatNormalW,viewDirectionW.xyz,coat_roughness,geometricNormalW
,vec3f(geometry_coat_tangent.x,geometry_coat_tangent.y,coat_roughness_anisotropy),TBN
);
#else
let coatGeoInfo: geometryInfoOutParams=geometryInfo(
coatNormalW,viewDirectionW.xyz,coat_roughness,geometricNormalW
);
#endif
specular_roughness=mix(specular_roughness,pow(min(1.0f,pow(specular_roughness,4.0f)+2.0f*pow(coat_roughness,4.0f)),0.25f),coat_weight);
#ifdef ANISOTROPIC_BASE
let baseGeoInfo: geometryInfoAnisoOutParams=geometryInfoAniso(
normalW,viewDirectionW.xyz,specular_roughness,geometricNormalW
,vec3f(geometry_tangent.x,geometry_tangent.y,specular_roughness_anisotropy),TBN
);
#else
let baseGeoInfo: geometryInfoOutParams=geometryInfo(
normalW,viewDirectionW.xyz,specular_roughness,geometricNormalW
);
#endif
#ifdef FUZZ
let fuzzNormalW=normalize(mix(normalW,coatNormalW,coat_weight));var fuzzTangent=normalize(TBN[0]);fuzzTangent=normalize(fuzzTangent-dot(fuzzTangent,fuzzNormalW)*fuzzNormalW);let fuzzBitangent=cross(fuzzNormalW,fuzzTangent);let fuzzGeoInfo: geometryInfoOutParams=geometryInfo(
fuzzNormalW,viewDirectionW.xyz,fuzz_roughness,geometricNormalW
);
#endif
let coatReflectance: ReflectanceParams=dielectricReflectance(
coat_ior 
,1.0f 
,vec3f(1.0f)
,coat_weight
);
#ifdef THIN_FILM
let thin_film_outside_ior: f32=mix(1.0f,coat_ior,coat_weight);
#endif
let baseDielectricReflectance: ReflectanceParams=dielectricReflectance(
specular_ior 
,mix(1.0f,coat_ior,coat_weight) 
,specular_color
,specular_weight
);let baseConductorReflectance: ReflectanceParams=conductorReflectance(base_color,specular_color,specular_weight);var material_surface_ibl: vec3f=vec3f(0.f,0.f,0.f);
#include<openpbrEnvironmentLighting>
var material_surface_direct: vec3f=vec3f(0.f,0.f,0.f);
#if defined(LIGHT0)
var aggShadow: f32=0.f;var numLights: f32=0.f;
#include<openpbrDirectLightingInit>[0..maxSimultaneousLights]
#include<openpbrDirectLighting>[0..maxSimultaneousLights]
#endif
var material_surface_emission: vec3f=uniforms.vEmissionColor;
#ifdef EMISSION_COLOR
let emissionColorTex: vec3f=textureSample(emissionColorSampler,emissionColorSamplerSampler,uniforms.vEmissionColorUV+uvOffset).rgb;
#ifdef EMISSION_COLOR_GAMMA
material_surface_emission*=toLinearSpace(emissionColorTex.rgb);
#else
material_surface_emission*=emissionColorTex.rgb;
#endif
material_surface_emission*= uniforms.vEmissionColorInfos.y;
#endif
material_surface_emission*=uniforms.vLightingIntensity.y;
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
var finalColor: vec4f=vec4f(material_surface_ibl+material_surface_direct+material_surface_emission,alpha);
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,vec4f(0.0));
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
const openpbrPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX29wZW5wYnJfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek5BO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJCYXNlTGF5ZXJEYXRhLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBickJsb2NrQW1iaWVudE9jY2x1c2lvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJCbG9ja05vcm1hbEZpbmFsLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBickNvYXRMYXllckRhdGEudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vcGVucGJyQ29uZHVjdG9yUmVmbGVjdGFuY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRGllbGVjdHJpY1JlZmxlY3RhbmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBickRpcmVjdExpZ2h0aW5nLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBickRpcmVjdExpZ2h0aW5nSW5pdC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJFbnZpcm9ubWVudExpZ2h0aW5nLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJGdXp6TGF5ZXJEYXRhLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBickdlb21ldHJ5SW5mby50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJJYmxGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwRnJhZ21lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRNYWluRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBiclRoaW5GaWxtTGF5ZXJEYXRhLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBiclVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvb3BlbnBici5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickJhc2VMYXllckRhdGFcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgYmFzZV9jb2xvcj12ZWMzZigwLjgpO3ZhciBiYXNlX21ldGFsbmVzczogZjMyPTAuMDt2YXIgYmFzZV9kaWZmdXNlX3JvdWdobmVzczogZjMyPTAuMDt2YXIgc3BlY3VsYXJfd2VpZ2h0OiBmMzI9MS4wO3ZhciBzcGVjdWxhcl9yb3VnaG5lc3M6IGYzMj0wLjM7dmFyIHNwZWN1bGFyX2NvbG9yOiB2ZWMzZj12ZWMzZigxLjApO3ZhciBzcGVjdWxhcl9yb3VnaG5lc3NfYW5pc290cm9weTogZjMyPTAuMDt2YXIgc3BlY3VsYXJfaW9yOiBmMzI9MS41O3ZhciBhbHBoYTogZjMyPTEuMDt2YXIgZ2VvbWV0cnlfdGFuZ2VudDogdmVjMmY9dmVjMmYoMS4wLDAuMCk7XG4jaWZkZWYgQkFTRV9XRUlHSFRcbmxldCBiYXNlV2VpZ2h0RnJvbVRleHR1cmU6IHZlYzRmPXRleHR1cmVTYW1wbGUoYmFzZVdlaWdodFNhbXBsZXIsYmFzZVdlaWdodFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZCYXNlV2VpZ2h0VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9DT0xPUlxubGV0IGJhc2VDb2xvckZyb21UZXh0dXJlOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGJhc2VDb2xvclNhbXBsZXIsYmFzZUNvbG9yU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJhc2VDb2xvclVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIEJBU0VfTUVUQUxORVNTXG5sZXQgbWV0YWxsaWNGcm9tVGV4dHVyZTogdmVjNGY9dGV4dHVyZVNhbXBsZShiYXNlTWV0YWxuZXNzU2FtcGxlcixiYXNlTWV0YWxuZXNzU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJhc2VNZXRhbG5lc3NVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBCQVNFX0RJRkZVU0VfUk9VR0hORVNTXG5sZXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NGcm9tVGV4dHVyZTogZjMyPXRleHR1cmVTYW1wbGUoYmFzZURpZmZ1c2VSb3VnaG5lc3NTYW1wbGVyLGJhc2VEaWZmdXNlUm91Z2huZXNzU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJhc2VEaWZmdXNlUm91Z2huZXNzVVYrdXZPZmZzZXQpLnI7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9UQU5HRU5UXG5sZXQgZ2VvbWV0cnlUYW5nZW50RnJvbVRleHR1cmU6IHZlYzNmPXRleHR1cmVTYW1wbGUoZ2VvbWV0cnlUYW5nZW50U2FtcGxlcixnZW9tZXRyeVRhbmdlbnRTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52R2VvbWV0cnlUYW5nZW50VVYrdXZPZmZzZXQpLnJnYjtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZXG5sZXQgYW5pc290cm9weUZyb21UZXh0dXJlOiBmMzI9dGV4dHVyZVNhbXBsZShzcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHlTYW1wbGVyLHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weVNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZTcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHlVVit1dk9mZnNldCkucip1bmlmb3Jtcy52U3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5SW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIEdFT01FVFJZX09QQUNJVFlcbmxldCBvcGFjaXR5RnJvbVRleHR1cmU6IHZlYzRmPXRleHR1cmVTYW1wbGUoZ2VvbWV0cnlPcGFjaXR5U2FtcGxlcixnZW9tZXRyeU9wYWNpdHlTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52R2VvbWV0cnlPcGFjaXR5VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgREVDQUxcbmxldCBkZWNhbEZyb21UZXh0dXJlOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGRlY2FsU2FtcGxlcixkZWNhbFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZEZWNhbFVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX0NPTE9SXG5sZXQgc3BlY3VsYXJDb2xvckZyb21UZXh0dXJlOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKHNwZWN1bGFyQ29sb3JTYW1wbGVyLHNwZWN1bGFyQ29sb3JTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52U3BlY3VsYXJDb2xvclVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1BFQ1VMQVJfV0VJR0hUKVxuI2lmZGVmIFNQRUNVTEFSX1dFSUdIVF9JTl9BTFBIQVxubGV0IHNwZWN1bGFyV2VpZ2h0RnJvbVRleHR1cmU6IGYzMj10ZXh0dXJlU2FtcGxlKHNwZWN1bGFyV2VpZ2h0U2FtcGxlcixzcGVjdWxhcldlaWdodFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZTcGVjdWxhcldlaWdodFVWK3V2T2Zmc2V0KS5hO1xuI2Vsc2VcbmxldCBzcGVjdWxhcldlaWdodEZyb21UZXh0dXJlOiBmMzI9dGV4dHVyZVNhbXBsZShzcGVjdWxhcldlaWdodFNhbXBsZXIsc3BlY3VsYXJXZWlnaHRTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52U3BlY3VsYXJXZWlnaHRVVit1dk9mZnNldCkucjtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChBTklTT1RST1BJQykgfHwgZGVmaW5lZChGVVpaKVxubGV0IG5vaXNlPXRleHR1cmVTYW1wbGUoYmx1ZU5vaXNlU2FtcGxlcixibHVlTm9pc2VTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy5wb3NpdGlvbi54eS8yNTYuMCkueHl6O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChST1VHSE5FU1NTVE9SRUlOTUVUQUxNQVBHUkVFTikgJiYgZGVmaW5lZChCQVNFX01FVEFMTkVTUylcbmxldCByb3VnaG5lc3NGcm9tVGV4dHVyZTogZjMyPW1ldGFsbGljRnJvbVRleHR1cmUuZztcbiNlbGlmIGRlZmluZWQoU1BFQ1VMQVJfUk9VR0hORVNTKVxubGV0IHJvdWdobmVzc0Zyb21UZXh0dXJlOiBmMzI9dGV4dHVyZVNhbXBsZShzcGVjdWxhclJvdWdobmVzc1NhbXBsZXIsc3BlY3VsYXJSb3VnaG5lc3NTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52U3BlY3VsYXJSb3VnaG5lc3NVVit1dk9mZnNldCkucjtcbiNlbmRpZlxuYmFzZV9jb2xvcj11bmlmb3Jtcy52QmFzZUNvbG9yLnJnYjtcbiNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbmJhc2VfY29sb3IqPWZyYWdtZW50SW5wdXRzLnZDb2xvci5yZ2I7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWEFMUEhBKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbmFscGhhKj1mcmFnbWVudElucHV0cy52Q29sb3IuYTtcbiNlbmRpZlxuYmFzZV9jb2xvcio9dmVjMyh1bmlmb3Jtcy52QmFzZVdlaWdodCk7YWxwaGE9dW5pZm9ybXMudkJhc2VDb2xvci5hO2Jhc2VfbWV0YWxuZXNzPXVuaWZvcm1zLnZSZWZsZWN0YW5jZUluZm8ueDtiYXNlX2RpZmZ1c2Vfcm91Z2huZXNzPXVuaWZvcm1zLnZCYXNlRGlmZnVzZVJvdWdobmVzcztzcGVjdWxhcl9yb3VnaG5lc3M9dW5pZm9ybXMudlJlZmxlY3RhbmNlSW5mby55O3NwZWN1bGFyX2NvbG9yPXVuaWZvcm1zLnZTcGVjdWxhckNvbG9yLnJnYjtzcGVjdWxhcl93ZWlnaHQ9dW5pZm9ybXMudlJlZmxlY3RhbmNlSW5mby5hO3NwZWN1bGFyX2lvcj11bmlmb3Jtcy52UmVmbGVjdGFuY2VJbmZvLno7c3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHk9dW5pZm9ybXMudlNwZWN1bGFyQW5pc290cm9weS5iO2dlb21ldHJ5X3RhbmdlbnQ9dW5pZm9ybXMudlNwZWN1bGFyQW5pc290cm9weS5yZztcbiNpZmRlZiBCQVNFX0NPTE9SXG4jaWZkZWYgQkFTRV9DT0xPUl9HQU1NQVxuYmFzZV9jb2xvcio9dG9MaW5lYXJTcGFjZShiYXNlQ29sb3JGcm9tVGV4dHVyZS5yZ2IpO1xuI2Vsc2VcbmJhc2VfY29sb3IqPWJhc2VDb2xvckZyb21UZXh0dXJlLnJnYjtcbiNlbmRpZlxuYmFzZV9jb2xvcio9dW5pZm9ybXMudkJhc2VDb2xvckluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBCQVNFX1dFSUdIVFxuYmFzZV9jb2xvcio9YmFzZVdlaWdodEZyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEJBU0VfQ09MT1IpICYmIGRlZmluZWQoQUxQSEFfRlJPTV9CQVNFX0NPTE9SX1RFWFRVUkUpXG5hbHBoYSo9YmFzZUNvbG9yRnJvbVRleHR1cmUuYTtcbiNlbGlmIGRlZmluZWQoR0VPTUVUUllfT1BBQ0lUWSlcbmFscGhhKj1vcGFjaXR5RnJvbVRleHR1cmUuYTthbHBoYSo9dW5pZm9ybXMudkdlb21ldHJ5T3BhY2l0eUluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBBTFBIQVRFU1RcbiNpZiBERUJVR01PREUgIT0gODhcbmlmIChhbHBoYTxBTFBIQVRFU1RWQUxVRSlcbmRpc2NhcmQ7XG4jZW5kaWZcbiNpZm5kZWYgQUxQSEFCTEVORFxuYWxwaGE9MS4wO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBCQVNFX01FVEFMTkVTU1xuI2lmZGVmIE1FVEFMTE5FU1NTVE9SRUlOTUVUQUxNQVBCTFVFXG5iYXNlX21ldGFsbmVzcyo9bWV0YWxsaWNGcm9tVGV4dHVyZS5iO1xuI2Vsc2VcbmJhc2VfbWV0YWxuZXNzKj1tZXRhbGxpY0Zyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEJBU0VfRElGRlVTRV9ST1VHSE5FU1NcbmJhc2VfZGlmZnVzZV9yb3VnaG5lc3MqPWJhc2VEaWZmdXNlUm91Z2huZXNzRnJvbVRleHR1cmUqdW5pZm9ybXMudkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX0NPTE9SXG4jaWZkZWYgU1BFQ1VMQVJfQ09MT1JfR0FNTUFcbnNwZWN1bGFyX2NvbG9yKj10b0xpbmVhclNwYWNlKHNwZWN1bGFyQ29sb3JGcm9tVGV4dHVyZS5yZ2IpO1xuI2Vsc2VcbnNwZWN1bGFyX2NvbG9yKj1zcGVjdWxhckNvbG9yRnJvbVRleHR1cmUucmdiO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUl9XRUlHSFRfRlJPTV9TUEVDVUxBUl9DT0xPUl9URVhUVVJFXG5zcGVjdWxhcl93ZWlnaHQqPXNwZWN1bGFyQ29sb3JGcm9tVGV4dHVyZS5hO1xuI2VsaWYgZGVmaW5lZChTUEVDVUxBUl9XRUlHSFQpXG5zcGVjdWxhcl93ZWlnaHQqPXNwZWN1bGFyV2VpZ2h0RnJvbVRleHR1cmU7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNQRUNVTEFSX1JPVUdITkVTUykgfHwgKGRlZmluZWQoUk9VR0hORVNTU1RPUkVJTk1FVEFMTUFQR1JFRU4pICYmIGRlZmluZWQoQkFTRV9NRVRBTE5FU1MpKVxuc3BlY3VsYXJfcm91Z2huZXNzKj1yb3VnaG5lc3NGcm9tVGV4dHVyZTtcbiNlbmRpZlxuI2lmZGVmIEdFT01FVFJZX1RBTkdFTlRcbntsZXQgdGFuZ2VudEZyb21UZXh0dXJlOiB2ZWMyZj1ub3JtYWxpemUoZ2VvbWV0cnlUYW5nZW50RnJvbVRleHR1cmUueHkqdmVjMmYoMi4wZiktdmVjMmYoMS4wZikpO2xldCB0YW5nZW50X2FuZ2xlX3RleHR1cmU6IGYzMj1hdGFuMih0YW5nZW50RnJvbVRleHR1cmUueSx0YW5nZW50RnJvbVRleHR1cmUueCk7bGV0IHRhbmdlbnRfYW5nbGVfdW5pZm9ybTogZjMyPWF0YW4yKGdlb21ldHJ5X3RhbmdlbnQueSxnZW9tZXRyeV90YW5nZW50LngpO2xldCB0YW5nZW50X2FuZ2xlOiBmMzI9dGFuZ2VudF9hbmdsZV90ZXh0dXJlK3RhbmdlbnRfYW5nbGVfdW5pZm9ybTtnZW9tZXRyeV90YW5nZW50PXZlYzJmKGNvcyh0YW5nZW50X2FuZ2xlKSxzaW4odGFuZ2VudF9hbmdsZSkpO31cbiNlbmRpZlxuI2lmIGRlZmluZWQoR0VPTUVUUllfVEFOR0VOVCkgJiYgZGVmaW5lZChTUEVDVUxBUl9ST1VHSE5FU1NfQU5JU09UUk9QWV9GUk9NX1RBTkdFTlRfVEVYVFVSRSlcbnNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5Kj1nZW9tZXRyeVRhbmdlbnRGcm9tVGV4dHVyZS5iO1xuI2VsaWYgZGVmaW5lZChTUEVDVUxBUl9ST1VHSE5FU1NfQU5JU09UUk9QWSlcbnNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5Kj1hbmlzb3Ryb3B5RnJvbVRleHR1cmU7XG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbmxldCBkZXRhaWxSb3VnaG5lc3M6IGYzMj1taXgoMC41ZixkZXRhaWxDb2xvci5iLHZEZXRhaWxJbmZvcy53KTtsZXQgbG9MZXJwOiBmMzI9bWl4KDAuZixzcGVjdWxhcl9yb3VnaG5lc3MsZGV0YWlsUm91Z2huZXNzKjIuZik7bGV0IGhpTGVycDogZjMyPW1peChzcGVjdWxhcl9yb3VnaG5lc3MsMS5mLChkZXRhaWxSb3VnaG5lc3MtMC41ZikqMi5mKTtzcGVjdWxhcl9yb3VnaG5lc3M9bWl4KGxvTGVycCxoaUxlcnAsc3RlcChkZXRhaWxSb3VnaG5lc3MsMC41ZikpO1xuI2VuZGlmXG4jaWZkZWYgVVNFX0dMVEZfU1RZTEVfQU5JU09UUk9QWVxubGV0IGJhc2VBbHBoYTogZjMyPXNwZWN1bGFyX3JvdWdobmVzcypzcGVjdWxhcl9yb3VnaG5lc3M7bGV0IHJvdWdobmVzc1Q6IGYzMj1taXgoYmFzZUFscGhhLDEuMGYsc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkqc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkpO2xldCByb3VnaG5lc3NCOiBmMzI9YmFzZUFscGhhO3NwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5PTEuMGYtcm91Z2huZXNzQi9tYXgocm91Z2huZXNzVCwwLjAwMDAxZik7c3BlY3VsYXJfcm91Z2huZXNzPXNxcnQocm91Z2huZXNzVC9zcXJ0KDIuMGYvKDEuMGYrKDEuMGYtc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkpKigxLjBmLXNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5KSkpKTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJCYXNlTGF5ZXJEYXRhV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickJsb2NrQW1iaWVudE9jY2x1c2lvblwiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBhbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zXG57YW1iaWVudE9jY2x1c2lvbkNvbG9yOiB2ZWMzZixcbiNpZiBERUJVR01PREU+MCAmJiBkZWZpbmVkKEFNQklFTlRfT0NDTFVTSU9OKVxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwOiB2ZWMzZlxuI2VuZGlmXG59O1xuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBhbWJpZW50T2NjbHVzaW9uQmxvY2soXG4jaWZkZWYgQU1CSUVOVF9PQ0NMVVNJT05cbmFtYmllbnRPY2NsdXNpb25Db2xvck1hcF86IHZlYzNmLFxuYW1iaWVudEluZm9zOiB2ZWMyZlxuI2VuZGlmXG4pLT5hbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zXG57IFxudmFyIG91dFBhcmFtczogYW1iaWVudE9jY2x1c2lvbk91dFBhcmFtczt2YXIgYW1iaWVudE9jY2x1c2lvbkNvbG9yOiB2ZWMzZj0gdmVjM2YoMS4sMS4sMS4pO1xuI2lmZGVmIEFNQklFTlRfT0NDTFVTSU9OXG52YXIgYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwOiB2ZWMzZj1hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXBfKmFtYmllbnRJbmZvcy55O1xuI2lmZGVmIEFNQklFTlRJTkdSQVlTQ0FMRVxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPSB2ZWMzZihhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAucixhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAucixhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXAucik7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxub3V0UGFyYW1zLmFtYmllbnRPY2NsdXNpb25Db2xvck1hcD1hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXA7XG4jZW5kaWZcbiNlbmRpZlxub3V0UGFyYW1zLmFtYmllbnRPY2NsdXNpb25Db2xvcj1hbWJpZW50T2NjbHVzaW9uQ29sb3I7cmV0dXJuIG91dFBhcmFtczt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickJsb2NrQW1iaWVudE9jY2x1c2lvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJCbG9ja05vcm1hbEZpbmFsXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoRk9SQ0VOT1JNQUxGT1JXQVJEKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZhciBmYWNlTm9ybWFsOiB2ZWMzZj1ub3JtYWxpemUoY3Jvc3MoZHBkeChmcmFnbWVudElucHV0cy52UG9zaXRpb25XKSxkcGR5KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcpKSkqc2NlbmUudkV5ZVBvc2l0aW9uLnc7XG4jaWYgZGVmaW5lZChUV09TSURFRExJR0hUSU5HKVxuZmFjZU5vcm1hbD1zZWxlY3QoLWZhY2VOb3JtYWwsZmFjZU5vcm1hbCxmcmFnbWVudElucHV0cy5mcm9udEZhY2luZyk7XG4jZW5kaWZcbm5vcm1hbFcqPXNpZ24oZG90KG5vcm1hbFcsZmFjZU5vcm1hbCkpO2NvYXROb3JtYWxXKj1zaWduKGRvdChjb2F0Tm9ybWFsVyxmYWNlTm9ybWFsKSk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRXT1NJREVETElHSFRJTkcpICYmIGRlZmluZWQoTk9STUFMKVxuI2lmIGRlZmluZWQoTUlSUk9SRUQpXG5ub3JtYWxXPXNlbGVjdChub3JtYWxXLC1ub3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtjb2F0Tm9ybWFsVz1zZWxlY3QoY29hdE5vcm1hbFcsLWNvYXROb3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtcbiNlbHNlXG5ub3JtYWxXPXNlbGVjdCgtbm9ybWFsVyxub3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtjb2F0Tm9ybWFsVz1zZWxlY3QoLWNvYXROb3JtYWxXLGNvYXROb3JtYWxXLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickJsb2NrTm9ybWFsRmluYWxXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyQ29hdExheWVyRGF0YVwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciBjb2F0X3dlaWdodDogZjMyPTAuMGY7dmFyIGNvYXRfY29sb3I6IHZlYzNmPXZlYzNmKDEuMGYpO3ZhciBjb2F0X3JvdWdobmVzczogZjMyPTAuMGY7dmFyIGNvYXRfcm91Z2huZXNzX2FuaXNvdHJvcHk6IGYzMj0wLjBmO3ZhciBjb2F0X2lvcjogZjMyPTEuNmY7dmFyIGNvYXRfZGFya2VuaW5nOiBmMzI9MS4wZjt2YXIgZ2VvbWV0cnlfY29hdF90YW5nZW50OiB2ZWMyZj12ZWMyZigxLjBmLDAuMGYpO1xuI2lmZGVmIENPQVRfV0VJR0hUXG52YXIgY29hdFdlaWdodEZyb21UZXh0dXJlOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGNvYXRXZWlnaHRTYW1wbGVyLGNvYXRXZWlnaHRTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52Q29hdFdlaWdodFVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIENPQVRfQ09MT1JcbnZhciBjb2F0Q29sb3JGcm9tVGV4dHVyZTogdmVjNGY9dGV4dHVyZVNhbXBsZShjb2F0Q29sb3JTYW1wbGVyLGNvYXRDb2xvclNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZDb2F0Q29sb3JVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX1JPVUdITkVTU1xudmFyIGNvYXRSb3VnaG5lc3NGcm9tVGV4dHVyZTogdmVjNGY9dGV4dHVyZVNhbXBsZShjb2F0Um91Z2huZXNzU2FtcGxlcixjb2F0Um91Z2huZXNzU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkNvYXRSb3VnaG5lc3NVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX1JPVUdITkVTU19BTklTT1RST1BZXG52YXIgY29hdFJvdWdobmVzc0FuaXNvdHJvcHlGcm9tVGV4dHVyZTogZjMyPXRleHR1cmVTYW1wbGUoY29hdFJvdWdobmVzc0FuaXNvdHJvcHlTYW1wbGVyLGNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5U2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5VVYrdXZPZmZzZXQpLnI7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX0RBUktFTklOR1xudmFyIGNvYXREYXJrZW5pbmdGcm9tVGV4dHVyZTogdmVjNGY9dGV4dHVyZVNhbXBsZShjb2F0RGFya2VuaW5nU2FtcGxlcixjb2F0RGFya2VuaW5nU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkNvYXREYXJrZW5pbmdVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9DT0FUX1RBTkdFTlRcbnZhciBnZW9tZXRyeUNvYXRUYW5nZW50RnJvbVRleHR1cmU6IHZlYzNmPXRleHR1cmVTYW1wbGUoZ2VvbWV0cnlDb2F0VGFuZ2VudFNhbXBsZXIsZ2VvbWV0cnlDb2F0VGFuZ2VudFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZHZW9tZXRyeUNvYXRUYW5nZW50VVYrdXZPZmZzZXQpLnJnYjtcbiNlbmRpZlxuY29hdF9jb2xvcj11bmlmb3Jtcy52Q29hdENvbG9yLnJnYjtjb2F0X3dlaWdodD11bmlmb3Jtcy52Q29hdFdlaWdodDtjb2F0X3JvdWdobmVzcz11bmlmb3Jtcy52Q29hdFJvdWdobmVzcztjb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5PXVuaWZvcm1zLnZDb2F0Um91Z2huZXNzQW5pc290cm9weTtjb2F0X2lvcj11bmlmb3Jtcy52Q29hdElvcjtjb2F0X2RhcmtlbmluZz11bmlmb3Jtcy52Q29hdERhcmtlbmluZztnZW9tZXRyeV9jb2F0X3RhbmdlbnQ9dW5pZm9ybXMudkdlb21ldHJ5Q29hdFRhbmdlbnQucmc7XG4jaWZkZWYgQ09BVF9XRUlHSFRcbmNvYXRfd2VpZ2h0Kj1jb2F0V2VpZ2h0RnJvbVRleHR1cmUucjtcbiNlbmRpZlxuI2lmZGVmIENPQVRfQ09MT1JcbiNpZmRlZiBDT0FUX0NPTE9SX0dBTU1BXG5jb2F0X2NvbG9yKj10b0xpbmVhclNwYWNlKGNvYXRDb2xvckZyb21UZXh0dXJlLnJnYik7XG4jZWxzZVxuY29hdF9jb2xvcio9Y29hdENvbG9yRnJvbVRleHR1cmUucmdiO1xuI2VuZGlmXG5jb2F0X2NvbG9yKj11bmlmb3Jtcy52Q29hdENvbG9ySW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIENPQVRfUk9VR0hORVNTXG4jaWZkZWYgQ09BVF9ST1VHSE5FU1NfRlJPTV9HUkVFTl9DSEFOTkVMXG5jb2F0X3JvdWdobmVzcyo9Y29hdFJvdWdobmVzc0Zyb21UZXh0dXJlLmc7XG4jZWxzZVxuY29hdF9yb3VnaG5lc3MqPWNvYXRSb3VnaG5lc3NGcm9tVGV4dHVyZS5yO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEdFT01FVFJZX0NPQVRfVEFOR0VOVCkgJiYgZGVmaW5lZChDT0FUX1JPVUdITkVTU19BTklTT1RST1BZX0ZST01fVEFOR0VOVF9URVhUVVJFKVxuY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSo9Z2VvbWV0cnlDb2F0VGFuZ2VudEZyb21UZXh0dXJlLmI7XG4jZWxpZiBkZWZpbmVkKENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFkpXG5jb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5Kj1jb2F0Um91Z2huZXNzQW5pc290cm9weUZyb21UZXh0dXJlO1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9EQVJLRU5JTkdcbmNvYXRfZGFya2VuaW5nKj1jb2F0RGFya2VuaW5nRnJvbVRleHR1cmUucjtcbiNlbmRpZlxuI2lmZGVmIEdFT01FVFJZX0NPQVRfVEFOR0VOVFxue2xldCB0YW5nZW50RnJvbVRleHR1cmU6IHZlYzJmPW5vcm1hbGl6ZShnZW9tZXRyeUNvYXRUYW5nZW50RnJvbVRleHR1cmUueHkqdmVjMmYoMi4wZiktdmVjMmYoMS4wZikpO2xldCB0YW5nZW50X2FuZ2xlX3RleHR1cmU6IGYzMj1hdGFuMih0YW5nZW50RnJvbVRleHR1cmUueSx0YW5nZW50RnJvbVRleHR1cmUueCk7bGV0IHRhbmdlbnRfYW5nbGVfdW5pZm9ybTogZjMyPWF0YW4yKGdlb21ldHJ5X2NvYXRfdGFuZ2VudC55LGdlb21ldHJ5X2NvYXRfdGFuZ2VudC54KTtsZXQgdGFuZ2VudF9hbmdsZTogZjMyPXRhbmdlbnRfYW5nbGVfdGV4dHVyZSt0YW5nZW50X2FuZ2xlX3VuaWZvcm07Z2VvbWV0cnlfY29hdF90YW5nZW50PXZlYzJmKGNvcyh0YW5nZW50X2FuZ2xlKSxzaW4odGFuZ2VudF9hbmdsZSkpO31cbiNlbmRpZlxuI2lmZGVmIFVTRV9HTFRGX1NUWUxFX0FOSVNPVFJPUFlcbmxldCBjb2F0QWxwaGE6IGYzMj1jb2F0X3JvdWdobmVzcypjb2F0X3JvdWdobmVzcztsZXQgY29hdFJvdWdobmVzc1Q6IGYzMj1taXgoY29hdEFscGhhLDEuMGYsY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSpjb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5KTtsZXQgY29hdFJvdWdobmVzc0I6IGYzMj1jb2F0QWxwaGE7Y29hdF9yb3VnaG5lc3NfYW5pc290cm9weT0xLjBmLWNvYXRSb3VnaG5lc3NCL21heChjb2F0Um91Z2huZXNzVCwwLjAwMDAxZik7Y29hdF9yb3VnaG5lc3M9c3FydChjb2F0Um91Z2huZXNzVC9zcXJ0KDIuMGYvKDEuMGYrKDEuMGYtY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSkqKDEuMGYtY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSkpKSk7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyQ29hdExheWVyRGF0YVdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJDb25kdWN0b3JSZWZsZWN0YW5jZVwiO1xuY29uc3Qgc2hhZGVyID0gYCNkZWZpbmUgcGJyX2lubGluZVxuZm4gY29uZHVjdG9yUmVmbGVjdGFuY2UoYmFzZUNvbG9yOiB2ZWMzZixzcGVjdWxhckNvbG9yOiB2ZWMzZixzcGVjdWxhcldlaWdodDogZjMyKS0+UmVmbGVjdGFuY2VQYXJhbXNcbnt2YXIgb3V0UGFyYW1zOiBSZWZsZWN0YW5jZVBhcmFtcztcbiNpZiAoQ09ORFVDVE9SX1NQRUNVTEFSX01PREVMPT1DT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUilcbm91dFBhcmFtcy5jb2xvcmVkRjA9YmFzZUNvbG9yKnNwZWN1bGFyV2VpZ2h0O291dFBhcmFtcy5jb2xvcmVkRjkwPXNwZWN1bGFyQ29sb3Iqc3BlY3VsYXJXZWlnaHQ7XG4jZWxzZVxub3V0UGFyYW1zLmNvbG9yZWRGMD1iYXNlQ29sb3I7b3V0UGFyYW1zLmNvbG9yZWRGOTA9dmVjM2YoMS4wZik7XG4jZW5kaWZcbm91dFBhcmFtcy5GMD0xLjBmO291dFBhcmFtcy5GOTA9MS4wZjtyZXR1cm4gb3V0UGFyYW1zO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickNvbmR1Y3RvclJlZmxlY3RhbmNlV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickRpZWxlY3RyaWNSZWZsZWN0YW5jZVwiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBSZWZsZWN0YW5jZVBhcmFtc1xue0YwOiBmMzIsXG5GOTA6IGYzMixcbmNvbG9yZWRGMDogdmVjM2YsXG5jb2xvcmVkRjkwOiB2ZWMzZix9O1xuI2RlZmluZSBwYnJfaW5saW5lXG5mbiBkaWVsZWN0cmljUmVmbGVjdGFuY2UoXG5pbnNpZGVJT1I6IGYzMixvdXRzaWRlSU9SOiBmMzIsc3BlY3VsYXJDb2xvcjogdmVjM2Ysc3BlY3VsYXJXZWlnaHQ6IGYzMlxuKS0+UmVmbGVjdGFuY2VQYXJhbXNcbnt2YXIgb3V0UGFyYW1zOiBSZWZsZWN0YW5jZVBhcmFtcztsZXQgZGllbGVjdHJpY0YwPXBvdygoaW5zaWRlSU9SLW91dHNpZGVJT1IpLyhpbnNpZGVJT1Irb3V0c2lkZUlPUiksMi4wKTtcbiNpZiBESUVMRUNUUklDX1NQRUNVTEFSX01PREVMPT1ESUVMRUNUUklDX1NQRUNVTEFSX01PREVMX0dMVEZcbmxldCBtYXhGMD1tYXgoc3BlY3VsYXJDb2xvci5yLG1heChzcGVjdWxhckNvbG9yLmcsc3BlY3VsYXJDb2xvci5iKSk7b3V0UGFyYW1zLkYwPWRpZWxlY3RyaWNGMCptYXhGMCpzcGVjdWxhcldlaWdodDtcbiNlbHNlXG5vdXRQYXJhbXMuRjA9ZGllbGVjdHJpY0YwKnNwZWN1bGFyV2VpZ2h0O1xuI2VuZGlmXG5sZXQgZjkwU2NhbGU9Y2xhbXAoMi4wZiphYnMoaW5zaWRlSU9SLW91dHNpZGVJT1IpLDAuMGYsMS4wZik7b3V0UGFyYW1zLkY5MD1mOTBTY2FsZSpzcGVjdWxhcldlaWdodDtvdXRQYXJhbXMuY29sb3JlZEYwPXZlYzNmKGRpZWxlY3RyaWNGMCpzcGVjdWxhcldlaWdodCkqc3BlY3VsYXJDb2xvci5yZ2I7XG4jaWYgKERJRUxFQ1RSSUNfU1BFQ1VMQVJfTU9ERUw9PURJRUxFQ1RSSUNfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUilcbmxldCBkaWVsZWN0cmljQ29sb3JGOTA6IHZlYzNmPXNwZWN1bGFyQ29sb3IucmdiKnZlYzNmKGY5MFNjYWxlKSpzcGVjdWxhcldlaWdodDtcbiNlbHNlXG5sZXQgZGllbGVjdHJpY0NvbG9yRjkwOiB2ZWMzZj12ZWMzZihmOTBTY2FsZSkqc3BlY3VsYXJXZWlnaHQ7XG4jZW5kaWZcbm91dFBhcmFtcy5jb2xvcmVkRjkwPWRpZWxlY3RyaWNDb2xvckY5MDtyZXR1cm4gb3V0UGFyYW1zO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRGllbGVjdHJpY1JlZmxlY3RhbmNlV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickRpcmVjdExpZ2h0aW5nXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIExJR0hUe1h9XG57dmFyIHNsYWJfZGlmZnVzZTogdmVjM2Y9dmVjM2YoMC5mLDAuZiwwLmYpO3ZhciBzbGFiX3N1YnN1cmZhY2U6IHZlYzNmPXZlYzNmKDAuZiwwLmYsMC5mKTt2YXIgc2xhYl90cmFuc2x1Y2VudDogdmVjM2Y9dmVjM2YoMC5mLDAuZiwwLmYpO3ZhciBzbGFiX2dsb3NzeTogdmVjM2Y9dmVjM2YoMC5mLDAuZiwwLmYpO3ZhciBzcGVjdWxhckZyZXNuZWw6IGYzMj0wLjBmO3ZhciBzcGVjdWxhckNvbG9yZWRGcmVzbmVsOiB2ZWMzZj12ZWMzZigwLmYsMC5mLDAuZik7dmFyIHNsYWJfbWV0YWw6IHZlYzNmPXZlYzNmKDAuZiwwLmYsMC5mKTt2YXIgc2xhYl9jb2F0OiB2ZWMzZj12ZWMzZigwLmYsMC5mLDAuZik7dmFyIGNvYXRGcmVzbmVsOiBmMzI9MC4wZjt2YXIgc2xhYl9mdXp6OiB2ZWMzZj12ZWMzZigwLmYsMC5mLDAuZik7dmFyIGZ1enpGcmVzbmVsOiBmMzI9MC4wZjtcbiNpZmRlZiBIRU1JTElHSFR7WH1cbnNsYWJfZGlmZnVzZT1jb21wdXRlSGVtaXNwaGVyaWNEaWZmdXNlTGlnaHRpbmcocHJlSW5mb3tYfSxsaWdodENvbG9ye1h9LnJnYixsaWdodHtYfS52TGlnaHRHcm91bmQpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5zbGFiX2RpZmZ1c2U9Y29tcHV0ZUFyZWFEaWZmdXNlTGlnaHRpbmcocHJlSW5mb3tYfSxsaWdodENvbG9ye1h9LnJnYik7XG4jZWxzZVxuc2xhYl9kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mb3tYfSxsaWdodENvbG9ye1h9LnJnYik7XG4jZW5kaWZcbiNpZmRlZiBQUk9KRUNURURMSUdIVFRFWFRVUkV7WH1cbnNsYWJfZGlmZnVzZSo9Y29tcHV0ZVByb2plY3Rpb25UZXh0dXJlRGlmZnVzZUxpZ2h0aW5nKHByb2plY3Rpb25MaWdodFRleHR1cmV7WH0sdGV4dHVyZVByb2plY3Rpb25NYXRyaXh7WH0sdlBvc2l0aW9uVyk7XG4jZW5kaWZcbm51bUxpZ2h0cys9MS4wZjtcbiNpZmRlZiBGVVpaXG5sZXQgZnV6ek5kb3RIOiBmMzI9bWF4KGRvdChmdXp6Tm9ybWFsVyxwcmVJbmZve1h9LkgpLDAuMGYpO2xldCBmdXp6QnJkZjogdmVjM2Y9Z2V0RnV6ekJSREZMb29rdXAoZnV6ek5kb3RILHNxcnQoZnV6el9yb3VnaG5lc3MpKTtcbiNlbmRpZlxuI2lmZGVmIFRISU5fRklMTVxubGV0IHRoaW5fZmlsbV9kZXNhdHVyYXRpb25fc2NhbGU6IGYzMj0odGhpbl9maWxtX2lvci0xLjBmKSpzcXJ0KHRoaW5fZmlsbV90aGlja25lc3MqMC4wMDFmKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQVJFQUxJR0hUe1h9KSAmJiBkZWZpbmVkKEFSRUFMSUdIVFVTRUQpICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxuc2xhYl9nbG9zc3k9Y29tcHV0ZUFyZWFTcGVjdWxhckxpZ2h0aW5nKHByZUluZm97WH0sbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZS5GMCxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuRjkwKTtcbiNlbHNlXG57XG4jaWZkZWYgQU5JU09UUk9QSUNfQkFTRVxuc2xhYl9nbG9zc3k9Y29tcHV0ZUFuaXNvdHJvcGljU3BlY3VsYXJMaWdodGluZyhwcmVJbmZve1h9LHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsXG5iYXNlR2VvSW5mby5hbmlzb3Ryb3BpY1RhbmdlbnQsYmFzZUdlb0luZm8uYW5pc290cm9waWNCaXRhbmdlbnQsYmFzZUdlb0luZm8uYW5pc290cm9weSxcbjAuMGYsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2Vsc2VcbnNsYWJfZ2xvc3N5PWNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUluZm97WH0sbm9ybWFsVyx2ZWMzKDEuMCksdmVjMygxLjApLHNwZWN1bGFyX3JvdWdobmVzcyxsaWdodENvbG9ye1h9LnJnYik7XG4jZW5kaWZcbmxldCBOZG90SDogZjMyPWRvdChub3JtYWxXLHByZUluZm97WH0uSCk7c3BlY3VsYXJGcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKE5kb3RILGJhc2VEaWVsZWN0cmljUmVmbGVjdGFuY2UuRjAsYmFzZURpZWxlY3RyaWNSZWZsZWN0YW5jZS5GOTApO3NwZWN1bGFyQ29sb3JlZEZyZXNuZWw9c3BlY3VsYXJGcmVzbmVsKnNwZWN1bGFyX2NvbG9yO1xuI2lmZGVmIFRISU5fRklMTVxubGV0IHRoaW5GaWxtSW9yU2NhbGU6IGYzMj1jbGFtcCgyLjBmKmFicyh0aGluX2ZpbG1faW9yLTEuMGYpLDAuMGYsMS4wZik7dmFyIHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWw6IHZlYzNmPWV2YWxJcmlkZXNjZW5jZSh0aGluX2ZpbG1fb3V0c2lkZV9pb3IsdGhpbl9maWxtX2lvcixwcmVJbmZve1h9LlZkb3RILHRoaW5fZmlsbV90aGlja25lc3MsYmFzZURpZWxlY3RyaWNSZWZsZWN0YW5jZS5jb2xvcmVkRjApO3RoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWw9bWl4KHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWwsdmVjM2YoZG90KHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWwsdmVjM2YoMC4zMzMzZikpKSx0aGluX2ZpbG1fZGVzYXR1cmF0aW9uX3NjYWxlKTtzcGVjdWxhckNvbG9yZWRGcmVzbmVsPW1peChzcGVjdWxhckNvbG9yZWRGcmVzbmVsLHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWwqc3BlY3VsYXJfY29sb3IsdGhpbl9maWxtX3dlaWdodCp0aGluRmlsbUlvclNjYWxlKTtcbiNlbmRpZlxufVxuI2VuZGlmXG4jaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5zbGFiX21ldGFsPWNvbXB1dGVBcmVhU3BlY3VsYXJMaWdodGluZyhwcmVJbmZve1h9LGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuRjAsYmFzZUNvbmR1Y3RvclJlZmxlY3RhbmNlLkY5MCk7XG4jZWxzZVxue1xuI2lmIChDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxudmFyIGNvbG9yZWRGcmVzbmVsOiB2ZWMzZj1nZXRGODJTcGVjdWxhcihwcmVJbmZve1h9LlZkb3RILGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZS5jb2xvcmVkRjAsYmFzZUNvbmR1Y3RvclJlZmxlY3RhbmNlLmNvbG9yZWRGOTAsc3BlY3VsYXJfcm91Z2huZXNzKTtcbiNlbHNlXG52YXIgY29sb3JlZEZyZXNuZWw6IHZlYzNmPWZyZXNuZWxTY2hsaWNrR0dYKHByZUluZm97WH0uVmRvdEgsYmFzZUNvbmR1Y3RvclJlZmxlY3RhbmNlLmNvbG9yZWRGMCxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEY5MCk7XG4jZW5kaWZcbiNpZmRlZiBUSElOX0ZJTE1cbmxldCB0aGluRmlsbUlvclNjYWxlOiBmMzI9Y2xhbXAoMi4wZiphYnModGhpbl9maWxtX2lvci0xLjBmKSwwLjBmLDEuMGYpO3ZhciB0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWw9ZXZhbElyaWRlc2NlbmNlKHRoaW5fZmlsbV9vdXRzaWRlX2lvcix0aGluX2ZpbG1faW9yLHByZUluZm97WH0uVmRvdEgsdGhpbl9maWxtX3RoaWNrbmVzcyxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEYwKTt0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWw9bWl4KHRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbCx2ZWMzZihkb3QodGhpbkZpbG1Db25kdWN0b3JGcmVzbmVsLHZlYzNmKDAuMzMzM2YpKSksdGhpbl9maWxtX2Rlc2F0dXJhdGlvbl9zY2FsZSk7Y29sb3JlZEZyZXNuZWw9bWl4KGNvbG9yZWRGcmVzbmVsLHNwZWN1bGFyX3dlaWdodCp0aGluRmlsbUlvclNjYWxlKnRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbCx0aGluX2ZpbG1fd2VpZ2h0KTtcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDX0JBU0VcbnNsYWJfbWV0YWw9Y29tcHV0ZUFuaXNvdHJvcGljU3BlY3VsYXJMaWdodGluZyhwcmVJbmZve1h9LHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsYmFzZUdlb0luZm8uYW5pc290cm9waWNUYW5nZW50LGJhc2VHZW9JbmZvLmFuaXNvdHJvcGljQml0YW5nZW50LGJhc2VHZW9JbmZvLmFuaXNvdHJvcHksMC4wLGxpZ2h0Q29sb3J7WH0ucmdiKTtcbiNlbHNlXG5zbGFiX21ldGFsPWNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUluZm97WH0sbm9ybWFsVyx2ZWMzZihiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEYwKSxjb2xvcmVkRnJlc25lbCxzcGVjdWxhcl9yb3VnaG5lc3MsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbnNsYWJfY29hdD1jb21wdXRlQXJlYVNwZWN1bGFyTGlnaHRpbmcocHJlSW5mb0NvYXR7WH0sbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGNvYXRSZWZsZWN0YW5jZS5GMCxjb2F0UmVmbGVjdGFuY2UuRjkwKTtcbiNlbHNlXG57XG4jaWZkZWYgQU5JU09UUk9QSUNfQ09BVFxuc2xhYl9jb2F0PWNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlSW5mb0NvYXR7WH0sdmlld0RpcmVjdGlvblcsY29hdE5vcm1hbFcsXG5jb2F0R2VvSW5mby5hbmlzb3Ryb3BpY1RhbmdlbnQsY29hdEdlb0luZm8uYW5pc290cm9waWNCaXRhbmdlbnQsY29hdEdlb0luZm8uYW5pc290cm9weSwwLjAsXG5saWdodENvbG9ye1h9LnJnYik7XG4jZWxzZVxuc2xhYl9jb2F0PWNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUluZm9Db2F0e1h9LGNvYXROb3JtYWxXLHZlYzNmKGNvYXRSZWZsZWN0YW5jZS5GMCksdmVjM2YoMS4wZiksY29hdF9yb3VnaG5lc3MsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2VuZGlmXG5sZXQgTmRvdEg6IGYzMj1kb3QoY29hdE5vcm1hbFcscHJlSW5mb0NvYXR7WH0uSCk7Y29hdEZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1goTmRvdEgsY29hdFJlZmxlY3RhbmNlLkYwLGNvYXRSZWZsZWN0YW5jZS5GOTApO31cbiNlbmRpZlxudmFyIGNvYXRBYnNvcnB0aW9uPXZlYzNmKDEuMGYpO2lmIChjb2F0X3dlaWdodD4wLjApIHtsZXQgY29zVGhldGFfdmlldzogZjMyPW1heChwcmVJbmZvQ29hdHtYfS5OZG90ViwwLjAwMWYpO2xldCBjb3NUaGV0YV9saWdodDogZjMyPW1heChwcmVJbmZvQ29hdHtYfS5OZG90TCwwLjAwMWYpO2xldCBmcmVzbmVsX3ZpZXc6IGYzMj1jb2F0UmVmbGVjdGFuY2UuRjArKDEuMGYtY29hdFJlZmxlY3RhbmNlLkYwKSpwb3coMS4wZi1jb3NUaGV0YV92aWV3LDUuMCk7bGV0IGZyZXNuZWxfbGlnaHQ6IGYzMj1jb2F0UmVmbGVjdGFuY2UuRjArKDEuMGYtY29hdFJlZmxlY3RhbmNlLkYwKSpwb3coMS4wZi1jb3NUaGV0YV9saWdodCw1LjApO2xldCBhdmVyYWdlUmVmbGVjdGFuY2U6IGYzMj0oZnJlc25lbF92aWV3K2ZyZXNuZWxfbGlnaHQpKjAuNTt2YXIgZGFya2VuZWRfdHJhbnNtaXNzaW9uOiBmMzI9KDEuMGYtYXZlcmFnZVJlZmxlY3RhbmNlKS8oMS4wZithdmVyYWdlUmVmbGVjdGFuY2UpO2RhcmtlbmVkX3RyYW5zbWlzc2lvbj1taXgoMS4wZixkYXJrZW5lZF90cmFuc21pc3Npb24sY29hdF9kYXJrZW5pbmcpO3ZhciBzaW4yOiBmMzI9MS4wZi1jb2F0R2VvSW5mby5OZG90Vipjb2F0R2VvSW5mby5OZG90VjtzaW4yPXNpbjIvKGNvYXRfaW9yKmNvYXRfaW9yKTtsZXQgY29zX3Q6IGYzMj1zcXJ0KDEuMGYtc2luMik7bGV0IGNvYXRQYXRoTGVuZ3RoPTEuMGYvY29zX3Q7bGV0IGNvbG9yZWRfdHJhbnNtaXNzaW9uOiB2ZWMzZj1wb3coY29hdF9jb2xvcix2ZWMzZihjb2F0UGF0aExlbmd0aCkpO2NvYXRBYnNvcnB0aW9uPW1peCh2ZWMzZigxLjBmKSxjb2xvcmVkX3RyYW5zbWlzc2lvbip2ZWMzZihkYXJrZW5lZF90cmFuc21pc3Npb24pLGNvYXRfd2VpZ2h0KTt9XG4jaWZkZWYgRlVaWlxuZnV6ekZyZXNuZWw9ZnV6ekJyZGYuejtsZXQgZnV6ek5vcm1hbFc9bWl4KG5vcm1hbFcsY29hdE5vcm1hbFcsY29hdF93ZWlnaHQpO2xldCBmdXp6TmRvdFY6IGYzMj1tYXgoZG90KGZ1enpOb3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eiksMC4wZik7bGV0IGZ1enpOZG90TDogZjMyPW1heChkb3QoZnV6ek5vcm1hbFcscHJlSW5mb3tYfS5MKSwwLjApO3NsYWJfZnV6ej1saWdodENvbG9ye1h9LnJnYipwcmVJbmZve1h9LmF0dGVudWF0aW9uKmV2YWxGdXp6KHByZUluZm97WH0uTCxmdXp6TmRvdEwsZnV6ek5kb3RWLGZ1enpUYW5nZW50LGZ1enpCaXRhbmdlbnQsZnV6ekJyZGYpO1xuI2Vsc2VcbmxldCBmdXp6X2NvbG9yPXZlYzNmKDAuMCk7XG4jZW5kaWZcbnNsYWJfZGlmZnVzZSo9YmFzZV9jb2xvci5yZ2I7bGV0IG1hdGVyaWFsX29wYXF1ZV9iYXNlOiB2ZWMzZj1taXgoc2xhYl9kaWZmdXNlLHNsYWJfc3Vic3VyZmFjZSxzdWJzdXJmYWNlX3dlaWdodCk7bGV0IG1hdGVyaWFsX2RpZWxlY3RyaWNfYmFzZTogdmVjM2Y9bWl4KG1hdGVyaWFsX29wYXF1ZV9iYXNlLHNsYWJfdHJhbnNsdWNlbnQsdHJhbnNtaXNzaW9uX3dlaWdodCk7bGV0IG1hdGVyaWFsX2RpZWxlY3RyaWNfZ2xvc3M6IHZlYzNmPW1hdGVyaWFsX2RpZWxlY3RyaWNfYmFzZSooMS4wZi1zcGVjdWxhckZyZXNuZWwpK3NsYWJfZ2xvc3N5KnNwZWN1bGFyQ29sb3JlZEZyZXNuZWw7bGV0IG1hdGVyaWFsX2Jhc2Vfc3Vic3RyYXRlOiB2ZWMzZj1taXgobWF0ZXJpYWxfZGllbGVjdHJpY19nbG9zcyxzbGFiX21ldGFsLGJhc2VfbWV0YWxuZXNzKTtsZXQgbWF0ZXJpYWxfY29hdGVkX2Jhc2U6IHZlYzNmPWxheWVyKG1hdGVyaWFsX2Jhc2Vfc3Vic3RyYXRlLHNsYWJfY29hdCxjb2F0RnJlc25lbCxjb2F0QWJzb3JwdGlvbix2ZWMzZigxLjBmKSk7bWF0ZXJpYWxfc3VyZmFjZV9kaXJlY3QrPWxheWVyKG1hdGVyaWFsX2NvYXRlZF9iYXNlLHNsYWJfZnV6eixmdXp6RnJlc25lbCpmdXp6X3dlaWdodCx2ZWMzZigxLjBmKSxmdXp6X2NvbG9yKTt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRGlyZWN0TGlnaHRpbmdXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyRGlyZWN0TGlnaHRpbmdJbml0XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIExJR0hUe1h9XG52YXIgcHJlSW5mb3tYfTogcHJlTGlnaHRpbmdJbmZvO3ZhciBwcmVJbmZvQ29hdHtYfTogcHJlTGlnaHRpbmdJbmZvO2xldCBsaWdodENvbG9ye1h9OiB2ZWM0Zj1saWdodHtYfS52TGlnaHREaWZmdXNlO3ZhciBzaGFkb3d7WH06IGYzMj0xLjBmO1xuI2lmIGRlZmluZWQoU0hBRE9XT05MWSkgfHwgZGVmaW5lZChMSUdIVE1BUCkgJiYgZGVmaW5lZChMSUdIVE1BUEVYQ0xVREVEe1h9KSAmJiBkZWZpbmVkKExJR0hUTUFQTk9TUEVDVUxBUntYfSlcbiNlbHNlXG4jZGVmaW5lIENVU1RPTV9MSUdIVHtYfV9DT0xPUiBcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnByZUluZm97WH09Y29tcHV0ZVBvaW50QW5kU3BvdFByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdlBvc2l0aW9uVyk7cHJlSW5mb0NvYXR7WH09Y29tcHV0ZVBvaW50QW5kU3BvdFByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLGNvYXROb3JtYWxXLHZQb3NpdGlvblcpO1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxucHJlSW5mb3tYfT1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyx2UG9zaXRpb25XKTtwcmVJbmZvQ29hdHtYfT1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsY29hdE5vcm1hbFcsdlBvc2l0aW9uVyk7XG4jZWxpZiBkZWZpbmVkKEhFTUlMSUdIVHtYfSlcbnByZUluZm97WH09Y29tcHV0ZUhlbWlzcGhlcmljUHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyk7cHJlSW5mb0NvYXR7WH09Y29tcHV0ZUhlbWlzcGhlcmljUHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsY29hdE5vcm1hbFcpO1xuI2VsaWYgZGVmaW5lZChESVJMSUdIVHtYfSlcbnByZUluZm97WH09Y29tcHV0ZURpcmVjdGlvbmFsUHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyk7cHJlSW5mb0NvYXR7WH09Y29tcHV0ZURpcmVjdGlvbmFsUHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsY29hdE5vcm1hbFcpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5wcmVJbmZve1h9PWNvbXB1dGVBcmVhUHJlTGlnaHRpbmdJbmZvKGFyZWFMaWdodHNMVEMxU2FtcGxlcixhcmVhTGlnaHRzTFRDMlNhbXBsZXIsdmlld0RpcmVjdGlvblcsbm9ybWFsVyx2UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEsbGlnaHR7WH0udkxpZ2h0V2lkdGgueHl6LGxpZ2h0e1h9LnZMaWdodEhlaWdodC54eXosc3BlY3VsYXJfcm91Z2huZXNzKTtwcmVJbmZvQ29hdHtYfT1jb21wdXRlQXJlYVByZUxpZ2h0aW5nSW5mbyhhcmVhTGlnaHRzTFRDMVNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyLHZpZXdEaXJlY3Rpb25XLGNvYXROb3JtYWxXLHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YSxsaWdodHtYfS52TGlnaHRXaWR0aC54eXosbGlnaHR7WH0udkxpZ2h0SGVpZ2h0Lnh5eixjb2F0X3JvdWdobmVzcyk7XG4jZW5kaWZcbnByZUluZm97WH0uTmRvdFY9YmFzZUdlb0luZm8uTmRvdFY7cHJlSW5mb0NvYXR7WH0uTmRvdFY9Y29hdEdlb0luZm8uTmRvdFY7XG4jaWZkZWYgU1BPVExJR0hUe1h9XG4jaWZkZWYgTElHSFRfRkFMTE9GRl9HTFRGe1h9XG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9HTFRGKHByZUluZm97WH0ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm97WH0uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZve1h9LkwsaWVzTGlnaHRUZXh0dXJle1h9KTtcbiNlbHNlXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfR0xURihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnosbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1BIWVNJQ0FMe1h9KVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfUGh5c2ljYWwocHJlSW5mb3tYfS5saWdodERpc3RhbmNlU3F1YXJlZCk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZve1h9LmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mb3tYfS5MLGllc0xpZ2h0VGV4dHVyZXtYfSk7XG4jZWxzZVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX1BoeXNpY2FsKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mb3tYfS5MLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1NUQU5EQVJEe1h9KVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfU3RhbmRhcmQocHJlSW5mb3tYfS5saWdodE9mZnNldCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm97WH0uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncpO1xuI2VuZGlmXG4jZWxzZVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYocHJlSW5mb3tYfS5saWdodE9mZnNldCxwcmVJbmZve1h9LmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnkpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm97WH0uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi56LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYudyk7XG4jZW5kaWZcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxuI2lmZGVmIExJR0hUX0ZBTExPRkZfR0xURntYfVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfR0xURihwcmVJbmZve1h9LmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfUEhZU0lDQUx7WH0pXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChwcmVJbmZve1h9LmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9TVEFOREFSRHtYfSlcbnByZUluZm97WH0uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKHByZUluZm97WH0ubGlnaHRPZmZzZXQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54KTtcbiNlbHNlXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZihwcmVJbmZve1h9LmxpZ2h0T2Zmc2V0LHByZUluZm97WH0ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZW5kaWZcbiNlbHNlXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPTEuMGY7XG4jZW5kaWZcbnByZUluZm9Db2F0e1h9LmF0dGVudWF0aW9uPXByZUluZm97WH0uYXR0ZW51YXRpb247XG4jaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG5wcmVJbmZve1h9LnJvdWdobmVzcz1zcGVjdWxhcl9yb3VnaG5lc3M7cHJlSW5mb0NvYXR7WH0ucm91Z2huZXNzPWNvYXRfcm91Z2huZXNzO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5wcmVJbmZve1h9LnJvdWdobmVzcz1zcGVjdWxhcl9yb3VnaG5lc3M7cHJlSW5mb0NvYXR7WH0ucm91Z2huZXNzPWNvYXRfcm91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm97WH0ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoc3BlY3VsYXJfcm91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mb3tYfS5saWdodERpc3RhbmNlKTtwcmVJbmZvQ29hdHtYfS5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhjb2F0X3JvdWdobmVzcyxsaWdodHtYfS52TGlnaHRTcGVjdWxhci5hLHByZUluZm9Db2F0e1h9LmxpZ2h0RGlzdGFuY2UpO1xuI2VuZGlmXG5wcmVJbmZve1h9LmRpZmZ1c2VSb3VnaG5lc3M9YmFzZV9kaWZmdXNlX3JvdWdobmVzcztwcmVJbmZve1h9LnN1cmZhY2VBbGJlZG89YmFzZV9jb2xvci5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJEaXJlY3RMaWdodGluZ0luaXRXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyRW52aXJvbm1lbnRMaWdodGluZ1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBSRUZMRUNUSU9OXG4jaWZkZWYgRlVaWlxubGV0IGVudmlyb25tZW50RnV6ekJyZGY6IHZlYzNmPWdldEZ1enpCUkRGTG9va3VwKGZ1enpHZW9JbmZvLk5kb3RWLHNxcnQoZnV6el9yb3VnaG5lc3MpKTtcbiNlbmRpZlxudmFyIGJhc2VEaWZmdXNlRW52aXJvbm1lbnRMaWdodDogdmVjM2Y9c2FtcGxlSXJyYWRpYW5jZShcbm5vcm1hbFdcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbix2RW52aXJvbm1lbnRJcnJhZGlhbmNlIFxuI2VuZGlmXG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4sdW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeFxuI2VuZGlmXG4jaWZkZWYgVVNFSVJSQURJQU5DRU1BUFxuLGlycmFkaWFuY2VTYW1wbGVyXG4saXJyYWRpYW5jZVNhbXBsZXJTYW1wbGVyXG4jaWZkZWYgVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvblxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix1bmlmb3Jtcy52UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xuLGljZGZTYW1wbGVyXG4saWNkZlNhbXBsZXJTYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuLHVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3Ncbix2aWV3RGlyZWN0aW9uV1xuLGJhc2VfZGlmZnVzZV9yb3VnaG5lc3NcbixiYXNlX2NvbG9yXG4pO1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZhciByZWZsZWN0aW9uQ29vcmRzOiB2ZWMzZj12ZWMzZigwLmYsMC5mLDAuZik7XG4jZWxzZVxudmFyIHJlZmxlY3Rpb25Db29yZHM6IHZlYzJmPXZlYzJmKDAuZiwwLmYpO1xuI2VuZGlmXG5sZXQgc3BlY3VsYXJBbHBoYUc6IGYzMj1zcGVjdWxhcl9yb3VnaG5lc3Mqc3BlY3VsYXJfcm91Z2huZXNzO1xuI2lmZGVmIEFOSVNPVFJPUElDX0JBU0VcbnZhciBiYXNlU3BlY3VsYXJFbnZpcm9ubWVudExpZ2h0OiB2ZWMzZj1zYW1wbGVSYWRpYW5jZUFuaXNvdHJvcGljKHNwZWN1bGFyQWxwaGFHLHVuaWZvcm1zLnZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MucmdiLHVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3NcbixiYXNlR2VvSW5mb1xuLG5vcm1hbFdcbix2aWV3RGlyZWN0aW9uV1xuLGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbldcbixub2lzZVxuLHJlZmxlY3Rpb25TYW1wbGVyXG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbik7XG4jZWxzZVxucmVmbGVjdGlvbkNvb3Jkcz1jcmVhdGVSZWZsZWN0aW9uQ29vcmRzKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcsbm9ybWFsVyk7dmFyIGJhc2VTcGVjdWxhckVudmlyb25tZW50TGlnaHQ6IHZlYzNmPXNhbXBsZVJhZGlhbmNlKHNwZWN1bGFyQWxwaGFHLHVuaWZvcm1zLnZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MucmdiLHVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3NcbixiYXNlR2VvSW5mb1xuLHJlZmxlY3Rpb25TYW1wbGVyXG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyXG4scmVmbGVjdGlvbkNvb3Jkc1xuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pO1xuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNfQkFTRVxuYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRMaWdodD1taXgoYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRMaWdodC5yZ2IsYmFzZURpZmZ1c2VFbnZpcm9ubWVudExpZ2h0LHNwZWN1bGFyQWxwaGFHKnNwZWN1bGFyQWxwaGFHICptYXgoMS4wZi1iYXNlR2VvSW5mby5hbmlzb3Ryb3B5LDAuM2YpKTtcbiNlbHNlXG5iYXNlU3BlY3VsYXJFbnZpcm9ubWVudExpZ2h0PW1peChiYXNlU3BlY3VsYXJFbnZpcm9ubWVudExpZ2h0LnJnYixiYXNlRGlmZnVzZUVudmlyb25tZW50TGlnaHQsc3BlY3VsYXJBbHBoYUcpO1xuI2VuZGlmXG52YXIgY29hdEVudmlyb25tZW50TGlnaHQ6IHZlYzNmPXZlYzNmKDAuZiwwLmYsMC5mKTtpZiAoY29hdF93ZWlnaHQ+MC4wKSB7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmFyIHJlZmxlY3Rpb25Db29yZHM6IHZlYzNmPXZlYzNmKDAuZiwwLmYsMC5mKTtcbiNlbHNlXG52YXIgcmVmbGVjdGlvbkNvb3JkczogdmVjMmY9dmVjMmYoMC5mLDAuZik7XG4jZW5kaWZcbnJlZmxlY3Rpb25Db29yZHM9Y3JlYXRlUmVmbGVjdGlvbkNvb3JkcyhmcmFnbWVudElucHV0cy52UG9zaXRpb25XLGNvYXROb3JtYWxXKTt2YXIgY29hdEFscGhhRzogZjMyPWNvYXRfcm91Z2huZXNzKmNvYXRfcm91Z2huZXNzO1xuI2lmZGVmIEFOSVNPVFJPUElDX0NPQVRcbmNvYXRFbnZpcm9ubWVudExpZ2h0PXNhbXBsZVJhZGlhbmNlQW5pc290cm9waWMoY29hdEFscGhhRyx1bmlmb3Jtcy52UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnJnYix1bmlmb3Jtcy52UmVmbGVjdGlvbkluZm9zXG4sY29hdEdlb0luZm9cbixjb2F0Tm9ybWFsV1xuLHZpZXdEaXJlY3Rpb25XXG4sZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uV1xuLG5vaXNlXG4scmVmbGVjdGlvblNhbXBsZXJcbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXJcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix1bmlmb3Jtcy52UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuKTtcbiNlbHNlXG5jb2F0RW52aXJvbm1lbnRMaWdodD1zYW1wbGVSYWRpYW5jZShjb2F0QWxwaGFHLHVuaWZvcm1zLnZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MucmdiLHVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3Ncbixjb2F0R2VvSW5mb1xuLHJlZmxlY3Rpb25TYW1wbGVyXG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyXG4scmVmbGVjdGlvbkNvb3Jkc1xuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHVuaWZvcm1zLnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pO1xuI2VuZGlmXG59XG4jaWZkZWYgRlVaWlxubGV0IG1vZGlmaWVkRnV6elJvdWdobmVzczogZjMyPWNsYW1wKGZ1enpfcm91Z2huZXNzKigxLjBmLTAuNWYqZW52aXJvbm1lbnRGdXp6QnJkZi55KSwwLjBmLDEuMGYpO3ZhciBmdXp6RW52aXJvbm1lbnRMaWdodD12ZWMzZigwLjBmLDAuMGYsMC4wZik7dmFyIHRvdGFsV2VpZ2h0PTAuMGY7bGV0IGZ1enpJYmxGcmVzbmVsOiBmMzI9c3FydChlbnZpcm9ubWVudEZ1enpCcmRmLnopO2ZvciAodmFyIGk6IGkzMj0wOyBpPGkzMihGVVpaX0lCTF9TQU1QTEVTKTsgaSsrKSB7dmFyIGFuZ2xlOiBmMzI9KGYzMihpKStub2lzZS54KSooMy4xNDE1OTJmKjIuMGYvZjMyKEZVWlpfSUJMX1NBTVBMRVMpKTt2YXIgZmliZXJDeWxpbmRlck5vcm1hbDogdmVjM2Y9bm9ybWFsaXplKGNvcyhhbmdsZSkqZnV6elRhbmdlbnQrc2luKGFuZ2xlKSpmdXp6Qml0YW5nZW50KTtsZXQgZmliZXJCZW5kPW1pbihlbnZpcm9ubWVudEZ1enpCcmRmLngqZW52aXJvbm1lbnRGdXp6QnJkZi54Km1vZGlmaWVkRnV6elJvdWdobmVzcywxLjBmKTtmaWJlckN5bGluZGVyTm9ybWFsPW5vcm1hbGl6ZShtaXgoZmliZXJDeWxpbmRlck5vcm1hbCxmdXp6Tm9ybWFsVyxmaWJlckJlbmQpKTtsZXQgc2FtcGxlV2VpZ2h0PW1heChkb3Qodmlld0RpcmVjdGlvblcsZmliZXJDeWxpbmRlck5vcm1hbCksMC4wZik7dmFyIGZ1enpSZWZsZWN0aW9uQ29vcmRzPWNyZWF0ZVJlZmxlY3Rpb25Db29yZHMoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxmaWJlckN5bGluZGVyTm9ybWFsKTtsZXQgcmFkaWFuY2VTYW1wbGU6IHZlYzNmPXNhbXBsZVJhZGlhbmNlKG1vZGlmaWVkRnV6elJvdWdobmVzcyx1bmlmb3Jtcy52UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnJnYix1bmlmb3Jtcy52UmVmbGVjdGlvbkluZm9zXG4sZnV6ekdlb0luZm9cbixyZWZsZWN0aW9uU2FtcGxlclxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlclxuLGZ1enpSZWZsZWN0aW9uQ29vcmRzXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdW5pZm9ybXMudlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbik7ZnV6ekVudmlyb25tZW50TGlnaHQrPXNhbXBsZVdlaWdodCptaXgocmFkaWFuY2VTYW1wbGUsYmFzZURpZmZ1c2VFbnZpcm9ubWVudExpZ2h0LGZpYmVyQmVuZCk7dG90YWxXZWlnaHQrPXNhbXBsZVdlaWdodDt9XG5mdXp6RW52aXJvbm1lbnRMaWdodC89dG90YWxXZWlnaHQ7XG4jZW5kaWZcbmxldCBkaWVsZWN0cmljSWJsRnJlc25lbDogZjMyPWdldFJlZmxlY3RhbmNlRnJvbUJSREZXaXRoRW52TG9va3VwKHZlYzNmKGJhc2VEaWVsZWN0cmljUmVmbGVjdGFuY2UuRjApLHZlYzNmKGJhc2VEaWVsZWN0cmljUmVmbGVjdGFuY2UuRjkwKSxiYXNlR2VvSW5mby5lbnZpcm9ubWVudEJyZGYpLnI7dmFyIGRpZWxlY3RyaWNJYmxDb2xvcmVkRnJlc25lbDogdmVjM2Y9ZGllbGVjdHJpY0libEZyZXNuZWwqc3BlY3VsYXJfY29sb3I7XG4jaWZkZWYgVEhJTl9GSUxNXG5sZXQgdGhpbkZpbG1Jb3JTY2FsZTogZjMyPWNsYW1wKDIuMGYqYWJzKHRoaW5fZmlsbV9pb3ItMS4wZiksMC4wZiwxLjBmKTt2YXIgdGhpbl9maWxtX2RpZWxlY3RyaWM6IHZlYzNmPWV2YWxJcmlkZXNjZW5jZSh0aGluX2ZpbG1fb3V0c2lkZV9pb3IsdGhpbl9maWxtX2lvcixiYXNlR2VvSW5mby5OZG90Vix0aGluX2ZpbG1fdGhpY2tuZXNzLGJhc2VEaWVsZWN0cmljUmVmbGVjdGFuY2UuY29sb3JlZEYwKTtsZXQgdGhpbl9maWxtX2Rlc2F0dXJhdGlvbl9zY2FsZT0odGhpbl9maWxtX2lvci0xLjApKnNxcnQodGhpbl9maWxtX3RoaWNrbmVzcyowLjAwMWYqYmFzZUdlb0luZm8uTmRvdFYpO3RoaW5fZmlsbV9kaWVsZWN0cmljPW1peCh0aGluX2ZpbG1fZGllbGVjdHJpYyx2ZWMzKGRvdCh0aGluX2ZpbG1fZGllbGVjdHJpYyx2ZWMzZigwLjMzMzNmKSkpLHRoaW5fZmlsbV9kZXNhdHVyYXRpb25fc2NhbGUpO2RpZWxlY3RyaWNJYmxDb2xvcmVkRnJlc25lbD1taXgoZGllbGVjdHJpY0libENvbG9yZWRGcmVzbmVsLHRoaW5fZmlsbV9kaWVsZWN0cmljKnNwZWN1bGFyX2NvbG9yLHRoaW5fZmlsbV93ZWlnaHQqdGhpbkZpbG1Jb3JTY2FsZSk7XG4jZW5kaWZcbnZhciBjb25kdWN0b3JJYmxGcmVzbmVsOiB2ZWMzZj1jb25kdWN0b3JJYmxGcmVzbmVsKGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZSxiYXNlR2VvSW5mby5OZG90VixzcGVjdWxhcl9yb3VnaG5lc3MsYmFzZUdlb0luZm8uZW52aXJvbm1lbnRCcmRmKTtcbiNpZmRlZiBUSElOX0ZJTE1cbnZhciB0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWw6IHZlYzNmPXNwZWN1bGFyX3dlaWdodCpldmFsSXJpZGVzY2VuY2UodGhpbl9maWxtX291dHNpZGVfaW9yLHRoaW5fZmlsbV9pb3IsYmFzZUdlb0luZm8uTmRvdFYsdGhpbl9maWxtX3RoaWNrbmVzcyxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEYwKTt0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWw9bWl4KHRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbCx2ZWMzKGRvdCh0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWwsdmVjM2YoMC4zMzMzZikpKSx0aGluX2ZpbG1fZGVzYXR1cmF0aW9uX3NjYWxlKTtjb25kdWN0b3JJYmxGcmVzbmVsPW1peChjb25kdWN0b3JJYmxGcmVzbmVsLHRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbCx0aGluX2ZpbG1fd2VpZ2h0KnRoaW5GaWxtSW9yU2NhbGUpO1xuI2VuZGlmXG52YXIgY29hdElibEZyZXNuZWw6IGYzMj0wLjA7aWYgKGNvYXRfd2VpZ2h0PjAuMCkge2NvYXRJYmxGcmVzbmVsPWdldFJlZmxlY3RhbmNlRnJvbUJSREZXaXRoRW52TG9va3VwKHZlYzNmKGNvYXRSZWZsZWN0YW5jZS5GMCksdmVjM2YoY29hdFJlZmxlY3RhbmNlLkY5MCksY29hdEdlb0luZm8uZW52aXJvbm1lbnRCcmRmKS5yO31cbnZhciBzbGFiX2RpZmZ1c2VfaWJsOiB2ZWMzZj12ZWMzZigwLiwwLiwwLik7dmFyIHNsYWJfZ2xvc3N5X2libDogdmVjM2Y9dmVjM2YoMC4sMC4sMC4pO3ZhciBzbGFiX21ldGFsX2libDogdmVjM2Y9dmVjM2YoMC4sMC4sMC4pO3ZhciBzbGFiX2NvYXRfaWJsOiB2ZWMzZj12ZWMzZigwLiwwLiwwLik7c2xhYl9kaWZmdXNlX2libD1iYXNlRGlmZnVzZUVudmlyb25tZW50TGlnaHQqdW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5Lno7c2xhYl9kaWZmdXNlX2libCo9YW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yO3NsYWJfZ2xvc3N5X2libD1iYXNlU3BlY3VsYXJFbnZpcm9ubWVudExpZ2h0KnVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS56O3NsYWJfbWV0YWxfaWJsPWJhc2VTcGVjdWxhckVudmlyb25tZW50TGlnaHQqY29uZHVjdG9ySWJsRnJlc25lbCp1bmlmb3Jtcy52TGlnaHRpbmdJbnRlbnNpdHkuejt2YXIgY29hdEFic29ycHRpb249dmVjM2YoMS4wKTtpZiAoY29hdF93ZWlnaHQ+MC4wKSB7c2xhYl9jb2F0X2libD1jb2F0RW52aXJvbm1lbnRMaWdodCp1bmlmb3Jtcy52TGlnaHRpbmdJbnRlbnNpdHkuejtsZXQgaGVtaXNwaGVyZV9hdmdfZnJlc25lbDogZjMyPWNvYXRSZWZsZWN0YW5jZS5GMCswLjVmKigxLjBmLWNvYXRSZWZsZWN0YW5jZS5GMCk7dmFyIGF2ZXJhZ2VSZWZsZWN0YW5jZTogZjMyPShjb2F0SWJsRnJlc25lbCtoZW1pc3BoZXJlX2F2Z19mcmVzbmVsKSowLjVmO2xldCByb3VnaG5lc3NGYWN0b3I9MS4wZi1jb2F0X3JvdWdobmVzcyowLjVmO2F2ZXJhZ2VSZWZsZWN0YW5jZSo9cm91Z2huZXNzRmFjdG9yO3ZhciBkYXJrZW5lZF90cmFuc21pc3Npb246IGYzMj0oMS4wZi1hdmVyYWdlUmVmbGVjdGFuY2UpKigxLjBmLWF2ZXJhZ2VSZWZsZWN0YW5jZSk7ZGFya2VuZWRfdHJhbnNtaXNzaW9uPW1peCgxLjAsZGFya2VuZWRfdHJhbnNtaXNzaW9uLGNvYXRfZGFya2VuaW5nKTt2YXIgc2luMjogZjMyPTEuMGYtY29hdEdlb0luZm8uTmRvdFYqY29hdEdlb0luZm8uTmRvdFY7c2luMj1zaW4yLyhjb2F0X2lvcipjb2F0X2lvcik7bGV0IGNvc190OiBmMzI9c3FydCgxLjBmLXNpbjIpO2xldCBjb2F0UGF0aExlbmd0aD0xLjBmL2Nvc190O2xldCBjb2xvcmVkX3RyYW5zbWlzc2lvbjogdmVjM2Y9cG93KGNvYXRfY29sb3IsdmVjM2YoY29hdFBhdGhMZW5ndGgpKTtjb2F0QWJzb3JwdGlvbj1taXgodmVjM2YoMS4wZiksY29sb3JlZF90cmFuc21pc3Npb24qdmVjM2YoZGFya2VuZWRfdHJhbnNtaXNzaW9uKSxjb2F0X3dlaWdodCk7fVxuI2lmZGVmIEZVWlpcbmxldCBzbGFiX2Z1enpfaWJsPWZ1enpFbnZpcm9ubWVudExpZ2h0KnVuaWZvcm1zLnZMaWdodGluZ0ludGVuc2l0eS56O1xuI2VuZGlmXG52YXIgc2xhYl9zdWJzdXJmYWNlX2libDogdmVjM2Y9dmVjM2YoMC4sMC4sMC4pO3ZhciBzbGFiX3RyYW5zbHVjZW50X2Jhc2VfaWJsOiB2ZWMzZj12ZWMzZigwLiwwLiwwLik7c2xhYl9kaWZmdXNlX2libCo9YmFzZV9jb2xvci5yZ2I7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfSUJMTEFZRVJDT01QT1NJVElPTlxubGV0IG1hdGVyaWFsX29wYXF1ZV9iYXNlX2libDogdmVjM2Y9bWl4KHNsYWJfZGlmZnVzZV9pYmwsc2xhYl9zdWJzdXJmYWNlX2libCxzdWJzdXJmYWNlX3dlaWdodCk7bGV0IG1hdGVyaWFsX2RpZWxlY3RyaWNfYmFzZV9pYmw6IHZlYzNmPW1peChtYXRlcmlhbF9vcGFxdWVfYmFzZV9pYmwsc2xhYl90cmFuc2x1Y2VudF9iYXNlX2libCx0cmFuc21pc3Npb25fd2VpZ2h0KTtsZXQgbWF0ZXJpYWxfZGllbGVjdHJpY19nbG9zc19pYmw6IHZlYzNmPW1hdGVyaWFsX2RpZWxlY3RyaWNfYmFzZV9pYmwqKDEuMC1kaWVsZWN0cmljSWJsRnJlc25lbCkrc2xhYl9nbG9zc3lfaWJsKmRpZWxlY3RyaWNJYmxDb2xvcmVkRnJlc25lbDtsZXQgbWF0ZXJpYWxfYmFzZV9zdWJzdHJhdGVfaWJsOiB2ZWMzZj1taXgobWF0ZXJpYWxfZGllbGVjdHJpY19nbG9zc19pYmwsc2xhYl9tZXRhbF9pYmwsYmFzZV9tZXRhbG5lc3MpO2xldCBtYXRlcmlhbF9jb2F0ZWRfYmFzZV9pYmw6IHZlYzNmPWxheWVyKG1hdGVyaWFsX2Jhc2Vfc3Vic3RyYXRlX2libCxzbGFiX2NvYXRfaWJsLGNvYXRJYmxGcmVzbmVsLGNvYXRBYnNvcnB0aW9uLHZlYzNmKDEuMGYpKTtcbiNpZmRlZiBGVVpaXG5tYXRlcmlhbF9zdXJmYWNlX2libD1sYXllcihtYXRlcmlhbF9jb2F0ZWRfYmFzZV9pYmwsc2xhYl9mdXp6X2libCxmdXp6SWJsRnJlc25lbCpmdXp6X3dlaWdodCx2ZWMzKDEuMCksZnV6el9jb2xvcik7XG4jZWxzZVxubWF0ZXJpYWxfc3VyZmFjZV9pYmw9bWF0ZXJpYWxfY29hdGVkX2Jhc2VfaWJsO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRW52aXJvbm1lbnRMaWdodGluZ1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfQ09MT1IsX1ZBUllJTkdOQU1FXyxCYXNlQ29sb3IsX1NBTVBMRVJOQU1FXyxiYXNlQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfV0VJR0hULF9WQVJZSU5HTkFNRV8sQmFzZVdlaWdodCxfU0FNUExFUk5BTUVfLGJhc2VXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcyxfU0FNUExFUk5BTUVfLGJhc2VEaWZmdXNlUm91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX01FVEFMTkVTUyxfVkFSWUlOR05BTUVfLEJhc2VNZXRhbG5lc3MsX1NBTVBMRVJOQU1FXyxiYXNlTWV0YWxuZXNzKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9XRUlHSFQsX1ZBUllJTkdOQU1FXyxTcGVjdWxhcldlaWdodCxfU0FNUExFUk5BTUVfLHNwZWN1bGFyV2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9DT0xPUixfVkFSWUlOR05BTUVfLFNwZWN1bGFyQ29sb3IsX1NBTVBMRVJOQU1FXyxzcGVjdWxhckNvbG9yKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTcGVjdWxhclJvdWdobmVzcyxfU0FNUExFUk5BTUVfLHNwZWN1bGFyUm91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9ST1VHSE5FU1NfQU5JU09UUk9QWSxfVkFSWUlOR05BTUVfLFNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSxfU0FNUExFUk5BTUVfLHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9XRUlHSFQsX1ZBUllJTkdOQU1FXyxDb2F0V2VpZ2h0LF9TQU1QTEVSTkFNRV8sY29hdFdlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9DT0xPUixfVkFSWUlOR05BTUVfLENvYXRDb2xvcixfU0FNUExFUk5BTUVfLGNvYXRDb2xvcilcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxDb2F0Um91Z2huZXNzLF9TQU1QTEVSTkFNRV8sY29hdFJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9ST1VHSE5FU1NfQU5JU09UUk9QWSxfVkFSWUlOR05BTUVfLENvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5LF9TQU1QTEVSTkFNRV8sY29hdFJvdWdobmVzc0FuaXNvdHJvcHkpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfREFSS0VOSU5HLF9WQVJZSU5HTkFNRV8sQ29hdERhcmtlbmluZyxfU0FNUExFUk5BTUVfLGNvYXREYXJrZW5pbmcpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfV0VJR0hULF9WQVJZSU5HTkFNRV8sRnV6eldlaWdodCxfU0FNUExFUk5BTUVfLGZ1enpXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfQ09MT1IsX1ZBUllJTkdOQU1FXyxGdXp6Q29sb3IsX1NBTVBMRVJOQU1FXyxmdXp6Q29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sRnV6elJvdWdobmVzcyxfU0FNUExFUk5BTUVfLGZ1enpSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX09QQUNJVFksX1ZBUllJTkdOQU1FXyxHZW9tZXRyeU9wYWNpdHksX1NBTVBMRVJOQU1FXyxnZW9tZXRyeU9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX1RBTkdFTlQsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeVRhbmdlbnQsX1NBTVBMRVJOQU1FXyxnZW9tZXRyeVRhbmdlbnQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX0NPQVRfVEFOR0VOVCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5Q29hdFRhbmdlbnQsX1NBTVBMRVJOQU1FXyxnZW9tZXRyeUNvYXRUYW5nZW50KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lPTl9DT0xPUixfVkFSWUlOR05BTUVfLEVtaXNzaW9uQ29sb3IsX1NBTVBMRVJOQU1FXyxlbWlzc2lvbkNvbG9yKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxUSElOX0ZJTE1fV0VJR0hULF9WQVJZSU5HTkFNRV8sVGhpbkZpbG1XZWlnaHQsX1NBTVBMRVJOQU1FXyx0aGluRmlsbVdlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sVEhJTl9GSUxNX1RISUNLTkVTUyxfVkFSWUlOR05BTUVfLFRoaW5GaWxtVGhpY2tuZXNzLF9TQU1QTEVSTkFNRV8sdGhpbkZpbG1UaGlja25lc3MpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlRfT0NDTFVTSU9OLF9WQVJZSU5HTkFNRV8sQW1iaWVudE9jY2x1c2lvbixfU0FNUExFUk5BTUVfLGFtYmllbnRPY2NsdXNpb24pXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFQ0FMLF9WQVJZSU5HTkFNRV8sRGVjYWwsX1NBTVBMRVJOQU1FXyxkZWNhbClcbiNpZmRlZiBSRUZMRUNUSU9OXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmFyIHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvblNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+O1xuI2lmZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jZWxzZVxudmFyIHJlZmxlY3Rpb25Mb3dTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvbkxvd1NhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+O3ZhciByZWZsZWN0aW9uSGlnaFNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciByZWZsZWN0aW9uSGlnaFNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgVVNFSVJSQURJQU5DRU1BUFxudmFyIGlycmFkaWFuY2VTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgaXJyYWRpYW5jZVNhbXBsZXI6IHRleHR1cmVfY3ViZTxmMzI+O1xuI2VuZGlmXG4jZWxzZVxudmFyIHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgcmVmbGVjdGlvblNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNpZmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2Vsc2VcbnZhciByZWZsZWN0aW9uTG93U2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25Mb3dTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47dmFyIHJlZmxlY3Rpb25IaWdoU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHJlZmxlY3Rpb25IaWdoU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgVVNFSVJSQURJQU5DRU1BUFxudmFyIGlycmFkaWFuY2VTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgaXJyYWRpYW5jZVNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdlBvc2l0aW9uVVZXOiB2ZWMzZjtcbiNlbHNlXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2RGlyZWN0aW9uVzogdmVjM2Y7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgRU5WSVJPTk1FTlRCUkRGXG52YXIgZW52aXJvbm1lbnRCcmRmU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGVudmlyb25tZW50QnJkZlNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIEZVWlpFTlZJUk9OTUVOVEJSREZcbnZhciBlbnZpcm9ubWVudEZ1enpCcmRmU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGVudmlyb25tZW50RnV6ekJyZGZTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopXG52YXIgYmx1ZU5vaXNlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIGJsdWVOb2lzZVNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG52YXIgaWNkZlNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBpY2RmU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJGdXp6TGF5ZXJEYXRhXCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyIGZ1enpfd2VpZ2h0OiBmMzI9MC4wZjt2YXIgZnV6el9jb2xvcjogdmVjM2Y9dmVjM2YoMS4wKTt2YXIgZnV6el9yb3VnaG5lc3M6IGYzMj0wLjBmO1xuI2lmZGVmIEZVWlpcbiNpZmRlZiBGVVpaX1dFSUdIVFxubGV0IGZ1enpXZWlnaHRGcm9tVGV4dHVyZTogdmVjND10ZXh0dXJlU2FtcGxlKGZ1enpXZWlnaHRTYW1wbGVyLGZ1enpXZWlnaHRTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RnV6eldlaWdodFVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIEZVWlpfQ09MT1JcbnZhciBmdXp6Q29sb3JGcm9tVGV4dHVyZTogdmVjND10ZXh0dXJlU2FtcGxlKGZ1enpDb2xvclNhbXBsZXIsZnV6ekNvbG9yU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkZ1enpDb2xvclVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIEZVWlpfUk9VR0hORVNTXG5sZXQgZnV6elJvdWdobmVzc0Zyb21UZXh0dXJlOiB2ZWM0PXRleHR1cmVTYW1wbGUoZnV6elJvdWdobmVzc1NhbXBsZXIsZnV6elJvdWdobmVzc1NhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZGdXp6Um91Z2huZXNzVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG5mdXp6X2NvbG9yPXVuaWZvcm1zLnZGdXp6Q29sb3IucmdiO2Z1enpfd2VpZ2h0PXVuaWZvcm1zLnZGdXp6V2VpZ2h0O2Z1enpfcm91Z2huZXNzPXVuaWZvcm1zLnZGdXp6Um91Z2huZXNzO1xuI2lmZGVmIEZVWlpfV0VJR0hUXG5mdXp6X3dlaWdodCo9ZnV6eldlaWdodEZyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNpZmRlZiBGVVpaX0NPTE9SXG4jaWZkZWYgRlVaWl9DT0xPUl9HQU1NQVxuZnV6el9jb2xvcio9dG9MaW5lYXJTcGFjZShmdXp6Q29sb3JGcm9tVGV4dHVyZS5yZ2IpO1xuI2Vsc2VcbmZ1enpfY29sb3IqPWZ1enpDb2xvckZyb21UZXh0dXJlLnJnYjtcbiNlbmRpZlxuZnV6el9jb2xvcio9dW5pZm9ybXMudkZ1enpDb2xvckluZm9zLnk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEZVWlpfUk9VR0hORVNTKSAmJiBkZWZpbmVkKEZVWlpfUk9VR0hORVNTX0ZST01fVEVYVFVSRV9BTFBIQSlcbmZ1enpfcm91Z2huZXNzKj1mdXp6Um91Z2huZXNzRnJvbVRleHR1cmUuYTtcbiNlbGlmIGRlZmluZWQoRlVaWl9ST1VHSE5FU1MpXG5mdXp6X3JvdWdobmVzcyo9ZnV6elJvdWdobmVzc0Zyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJGdXp6TGF5ZXJEYXRhV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickdlb21ldHJ5SW5mb1wiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBnZW9tZXRyeUluZm9PdXRQYXJhbXNcbntOZG90VjogZjMyLFxuTmRvdFZVbmNsYW1wZWQ6IGYzMixcbmVudmlyb25tZW50QnJkZjogdmVjM2YsXG5ob3Jpem9uT2NjbHVzaW9uOiBmMzJ9O3N0cnVjdCBnZW9tZXRyeUluZm9Bbmlzb091dFBhcmFtc1xue05kb3RWOiBmMzIsXG5OZG90VlVuY2xhbXBlZDogZjMyLFxuZW52aXJvbm1lbnRCcmRmOiB2ZWMzZixcbmhvcml6b25PY2NsdXNpb246IGYzMixcbmFuaXNvdHJvcHk6IGYzMixcbmFuaXNvdHJvcGljVGFuZ2VudDogdmVjM2YsXG5hbmlzb3Ryb3BpY0JpdGFuZ2VudDogdmVjM2YsXG5UQk46IG1hdDN4MzxmMzI+fTtmbiBnZW9tZXRyeUluZm8oXG5ub3JtYWxXOiB2ZWMzZix2aWV3RGlyZWN0aW9uVzogdmVjM2Yscm91Z2huZXNzOiBmMzIsZ2VvbWV0cmljTm9ybWFsVzogdmVjM2ZcbiktPmdlb21ldHJ5SW5mb091dFBhcmFtc1xue3ZhciBvdXRQYXJhbXM6IGdlb21ldHJ5SW5mb091dFBhcmFtcztvdXRQYXJhbXMuTmRvdFZVbmNsYW1wZWQ9ZG90KG5vcm1hbFcsdmlld0RpcmVjdGlvblcpO291dFBhcmFtcy5OZG90Vj1hYnNFcHMob3V0UGFyYW1zLk5kb3RWVW5jbGFtcGVkKTtcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERilcbm91dFBhcmFtcy5lbnZpcm9ubWVudEJyZGY9Z2V0QlJERkxvb2t1cChvdXRQYXJhbXMuTmRvdFYscm91Z2huZXNzKTtcbiNlbHNlXG5vdXRQYXJhbXMuZW52aXJvbm1lbnRCcmRmPXZlYzNmKDAuMCk7XG4jZW5kaWZcbm91dFBhcmFtcy5ob3Jpem9uT2NjbHVzaW9uPTEuMGY7XG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuI2lmZGVmIEhPUklaT05PQ0NMVVNJT05cbiNpZiBkZWZpbmVkKEdFT01FVFJZX05PUk1BTCkgfHwgZGVmaW5lZChHRU9NRVRSWV9DT0FUX05PUk1BTClcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG5vdXRQYXJhbXMuaG9yaXpvbk9jY2x1c2lvbj1lbnZpcm9ubWVudEhvcml6b25PY2NsdXNpb24oLXZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsZ2VvbWV0cmljTm9ybWFsVyk7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbnJldHVybiBvdXRQYXJhbXM7fVxuZm4gZ2VvbWV0cnlJbmZvQW5pc28oXG5ub3JtYWxXOiB2ZWMzZix2aWV3RGlyZWN0aW9uVzogdmVjM2Yscm91Z2huZXNzOiBmMzIsZ2VvbWV0cmljTm9ybWFsVzogdmVjM2Zcbix2QW5pc290cm9weTogdmVjM2YsVEJOOiBtYXQzeDM8ZjMyPlxuKS0+Z2VvbWV0cnlJbmZvQW5pc29PdXRQYXJhbXNcbntsZXQgZ2VvSW5mbzogZ2VvbWV0cnlJbmZvT3V0UGFyYW1zPWdlb21ldHJ5SW5mbyhub3JtYWxXLHZpZXdEaXJlY3Rpb25XLHJvdWdobmVzcyxnZW9tZXRyaWNOb3JtYWxXKTt2YXIgb3V0UGFyYW1zOiBnZW9tZXRyeUluZm9Bbmlzb091dFBhcmFtcztvdXRQYXJhbXMuTmRvdFY9Z2VvSW5mby5OZG90VjtvdXRQYXJhbXMuTmRvdFZVbmNsYW1wZWQ9Z2VvSW5mby5OZG90VlVuY2xhbXBlZDtvdXRQYXJhbXMuZW52aXJvbm1lbnRCcmRmPWdlb0luZm8uZW52aXJvbm1lbnRCcmRmO291dFBhcmFtcy5ob3Jpem9uT2NjbHVzaW9uPWdlb0luZm8uaG9yaXpvbk9jY2x1c2lvbjtvdXRQYXJhbXMuYW5pc290cm9weT12QW5pc290cm9weS5iO2xldCBhbmlzb3Ryb3B5RGlyZWN0aW9uOiB2ZWMzZj12ZWMzZih2QW5pc290cm9weS54eSwwLik7bGV0IGFuaXNvVEJOOiBtYXQzeDM8ZjMyPj1tYXQzeDM8ZjMyPihub3JtYWxpemUoVEJOWzBdKSxub3JtYWxpemUoVEJOWzFdKSxub3JtYWxpemUoVEJOWzJdKSk7b3V0UGFyYW1zLmFuaXNvdHJvcGljVGFuZ2VudD1ub3JtYWxpemUoYW5pc29UQk4qYW5pc290cm9weURpcmVjdGlvbik7b3V0UGFyYW1zLmFuaXNvdHJvcGljQml0YW5nZW50PW5vcm1hbGl6ZShjcm9zcyhhbmlzb1RCTlsyXSxvdXRQYXJhbXMuYW5pc290cm9waWNUYW5nZW50KSk7b3V0UGFyYW1zLlRCTj1UQk47cmV0dXJuIG91dFBhcmFtczt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickdlb21ldHJ5SW5mb1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJJYmxGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgUkVGTEVDVElPTlxuZm4gc2FtcGxlSXJyYWRpYW5jZShcbnN1cmZhY2VOb3JtYWw6IHZlYzNmXG4jaWYgZGVmaW5lZChOT1JNQUwpICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG4sdkVudmlyb25tZW50SXJyYWRpYW5jZVNIOiB2ZWMzZlxuI2VuZGlmXG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4saWJsTWF0cml4OiBtYXQ0eDRmXG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLGlycmFkaWFuY2VTYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLGlycmFkaWFuY2VTYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2Vsc2VcbixpcnJhZGlhbmNlU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4saXJyYWRpYW5jZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbixyZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb246IHZlYzNmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZlxuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saWNkZlNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPlxuLGljZGZTYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2VuZGlmXG4jZW5kaWZcbixyZWZsZWN0aW9uSW5mb3M6IHZlYzJmXG4sdmlld0RpcmVjdGlvblc6IHZlYzNmXG4sZGlmZnVzZVJvdWdobmVzczogZjMyXG4sc3VyZmFjZUFsYmVkbzogdmVjM2ZcbiktPnZlYzNmIHt2YXIgZW52aXJvbm1lbnRJcnJhZGlhbmNlPXZlYzNmKDAuLDAuLDAuKTtcbiNpZiAoZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgKCFkZWZpbmVkKE5PUk1BTCkgfHwgIWRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpKSkgfHwgKGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKSlcbnZhciBpcnJhZGlhbmNlVmVjdG9yPShpYmxNYXRyaXgqdmVjNGYoc3VyZmFjZU5vcm1hbCwwLjBmKSkueHl6O2xldCBpcnJhZGlhbmNlVmlldz0oaWJsTWF0cml4KnZlYzRmKHZpZXdEaXJlY3Rpb25XLDAuMGYpKS54eXo7XG4jaWYgIWRlZmluZWQoVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OKSAmJiAhZGVmaW5lZChSRUFMVElNRV9GSUxURVJJTkcpXG4jaWYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MQU1CRVJUICYmIEJBU0VfRElGRlVTRV9NT0RFTCAhPSBCUkRGX0RJRkZVU0VfTU9ERUxfTEVHQUNZXG57bGV0IE5kb3RWPW1heChkb3Qoc3VyZmFjZU5vcm1hbCx2aWV3RGlyZWN0aW9uVyksMC4wZik7aXJyYWRpYW5jZVZlY3Rvcj1taXgoaXJyYWRpYW5jZVZlY3RvcixpcnJhZGlhbmNlVmlldywoMC41ZiooMS4wZi1OZG90VikpKmRpZmZ1c2VSb3VnaG5lc3MpO31cbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbmlycmFkaWFuY2VWZWN0b3Iueio9LTEuMGY7XG4jZW5kaWZcbiNpZmRlZiBJTlZFUlRDVUJJQ01BUFxuaXJyYWRpYW5jZVZlY3Rvci55Kj0tMS4wZjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbmVudmlyb25tZW50SXJyYWRpYW5jZT12RW52aXJvbm1lbnRJcnJhZGlhbmNlU0g7XG4jZWxzZVxuI2lmIGRlZmluZWQoUkVBTFRJTUVfRklMVEVSSU5HKVxuZW52aXJvbm1lbnRJcnJhZGlhbmNlPWlycmFkaWFuY2UocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyLGlycmFkaWFuY2VWZWN0b3IscmVmbGVjdGlvbkZpbHRlcmluZ0luZm8sZGlmZnVzZVJvdWdobmVzcyxzdXJmYWNlQWxiZWRvLGlycmFkaWFuY2VWaWV3XG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbixpY2RmU2FtcGxlclxuLGljZGZTYW1wbGVyU2FtcGxlclxuI2VuZGlmXG4pO1xuI2Vsc2VcbmVudmlyb25tZW50SXJyYWRpYW5jZT1jb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKGlycmFkaWFuY2VWZWN0b3IpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUClcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG5sZXQgZW52aXJvbm1lbnRJcnJhZGlhbmNlRnJvbVRleHR1cmU6IHZlYzRmPXRleHR1cmVTYW1wbGUoaXJyYWRpYW5jZVNhbXBsZXIsaXJyYWRpYW5jZVNhbXBsZXJTYW1wbGVyLGlycmFkaWFuY2VWZWN0b3IpO1xuI2Vsc2VcbmxldCBlbnZpcm9ubWVudElycmFkaWFuY2VGcm9tVGV4dHVyZTogdmVjNGY9dGV4dHVyZVNhbXBsZShpcnJhZGlhbmNlU2FtcGxlcixpcnJhZGlhbmNlU2FtcGxlclNhbXBsZXIscmVmbGVjdGlvbkNvb3Jkcyk7XG4jZW5kaWZcbmVudmlyb25tZW50SXJyYWRpYW5jZT1lbnZpcm9ubWVudElycmFkaWFuY2VGcm9tVGV4dHVyZS5yZ2I7XG4jaWZkZWYgUkdCRFJFRkxFQ1RJT05cbmVudmlyb25tZW50SXJyYWRpYW5jZS5yZ2I9ZnJvbVJHQkQoZW52aXJvbm1lbnRJcnJhZGlhbmNlRnJvbVRleHR1cmUpO1xuI2VuZGlmXG4jaWZkZWYgR0FNTUFSRUZMRUNUSU9OXG5lbnZpcm9ubWVudElycmFkaWFuY2UucmdiPXRvTGluZWFyU3BhY2UoZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYik7XG4jZW5kaWZcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbmxldCBMczogdmVjM2Y9bm9ybWFsaXplKHJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbik7bGV0IE5vTDogZjMyPWRvdChpcnJhZGlhbmNlVmVjdG9yLExzKTtsZXQgTm9WOiBmMzI9ZG90KGlycmFkaWFuY2VWZWN0b3IsaXJyYWRpYW5jZVZpZXcpO3ZhciBkaWZmdXNlUm91Z2huZXNzVGVybT12ZWMzZigxLjBmKTtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbmxldCBMb1Y6IGYzMj1kb3QgKExzLGlycmFkaWFuY2VWaWV3KTtsZXQgbWFnOiBmMzI9bGVuZ3RoKHJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbikqMi4wZjtsZXQgY2xhbXBlZEFsYmVkbzogdmVjM2Y9Y2xhbXAoc3VyZmFjZUFsYmVkbyx2ZWMzZigwLjFmKSx2ZWMzZigxLjBmKSk7ZGlmZnVzZVJvdWdobmVzc1Rlcm09ZGlmZnVzZUJSREZfRU9OKGNsYW1wZWRBbGJlZG8sZGlmZnVzZVJvdWdobmVzcyxOb0wsTm9WLExvVikqUEk7ZGlmZnVzZVJvdWdobmVzc1Rlcm09ZGlmZnVzZVJvdWdobmVzc1Rlcm0vY2xhbXBlZEFsYmVkbztkaWZmdXNlUm91Z2huZXNzVGVybT1taXgodmVjM2YoMS4wZiksZGlmZnVzZVJvdWdobmVzc1Rlcm0sc3FydChjbGFtcChtYWcqTm9WLDAuMGYsMS4wZikpKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxubGV0IEg6IHZlYzNmPShpcnJhZGlhbmNlVmlldytMcykqMC41ZjtsZXQgVm9IOiBmMzI9ZG90KGlycmFkaWFuY2VWaWV3LEgpO2RpZmZ1c2VSb3VnaG5lc3NUZXJtPXZlYzNmKGRpZmZ1c2VCUkRGX0J1cmxleShOb0wsTm9WLFZvSCxkaWZmdXNlUm91Z2huZXNzKSpQSSk7XG4jZW5kaWZcbmVudmlyb25tZW50SXJyYWRpYW5jZT1lbnZpcm9ubWVudElycmFkaWFuY2UucmdiKmRpZmZ1c2VSb3VnaG5lc3NUZXJtO1xuI2VuZGlmXG4jZW5kaWZcbmVudmlyb25tZW50SXJyYWRpYW5jZSo9cmVmbGVjdGlvbkluZm9zLng7cmV0dXJuIGVudmlyb25tZW50SXJyYWRpYW5jZTt9XG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuZm4gY3JlYXRlUmVmbGVjdGlvbkNvb3Jkcyh2UG9zaXRpb25XOiB2ZWMzZixub3JtYWxXOiB2ZWMzZiktPnZlYzNmXG4jZWxzZVxuZm4gY3JlYXRlUmVmbGVjdGlvbkNvb3Jkcyh2UG9zaXRpb25XOiB2ZWMzZixub3JtYWxXOiB2ZWMzZiktPnZlYzJmXG4jZW5kaWZcbnt2YXIgcmVmbGVjdGlvblZlY3RvcjogdmVjM2Y9Y29tcHV0ZVJlZmxlY3Rpb25Db29yZHModmVjNGYodlBvc2l0aW9uVywxLjBmKSxub3JtYWxXKTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxucmVmbGVjdGlvblZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmFyIHJlZmxlY3Rpb25Db29yZHM6IHZlYzNmPXJlZmxlY3Rpb25WZWN0b3I7XG4jZWxzZVxudmFyIHJlZmxlY3Rpb25Db29yZHM6IHZlYzJmPXJlZmxlY3Rpb25WZWN0b3IueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5yZWZsZWN0aW9uQ29vcmRzLz1yZWZsZWN0aW9uVmVjdG9yLno7XG4jZW5kaWZcbnJlZmxlY3Rpb25Db29yZHMueT0xLjBmLXJlZmxlY3Rpb25Db29yZHMueTtcbiNlbmRpZlxucmV0dXJuIHJlZmxlY3Rpb25Db29yZHM7fVxuZm4gc2FtcGxlUmFkaWFuY2UoXG5hbHBoYUc6IGYzMlxuLHJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvczogdmVjM2ZcbixyZWZsZWN0aW9uSW5mb3M6IHZlYzJmXG4sZ2VvSW5mbzogZ2VvbWV0cnlJbmZvT3V0UGFyYW1zXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuLHJlZmxlY3Rpb25Db29yZHM6IHZlYzNmXG4jZWxzZVxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj5cbixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbixyZWZsZWN0aW9uQ29vcmRzOiB2ZWMyZlxuI2VuZGlmXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4scmVmbGVjdGlvbkZpbHRlcmluZ0luZm86IHZlYzJmXG4jZW5kaWZcbiktPnZlYzNmIHt2YXIgZW52aXJvbm1lbnRSYWRpYW5jZTogdmVjNGY9dmVjNGYoMC5mLDAuZiwwLmYsMC5mKTtcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbnZhciByZWZsZWN0aW9uTE9EOiBmMzI9Z2V0TG9kRnJvbUFscGhhRyhyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxhbHBoYUcsZ2VvSW5mby5OZG90VlVuY2xhbXBlZCk7XG4jZWxpZiBkZWZpbmVkKExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTilcbnZhciByZWZsZWN0aW9uTE9EOiBmMzI9Z2V0TGluZWFyTG9kRnJvbVJvdWdobmVzcyhyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyb3VnaG5lc3MpO1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uTE9EOiBmMzI9Z2V0TG9kRnJvbUFscGhhRyhyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxhbHBoYUcpO1xuI2VuZGlmXG5yZWZsZWN0aW9uTE9EPXJlZmxlY3Rpb25MT0QqcmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnkrcmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLno7XG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG5lbnZpcm9ubWVudFJhZGlhbmNlPXZlYzRmKHJhZGlhbmNlKGFscGhhRyxyZWZsZWN0aW9uU2FtcGxlcixyZWZsZWN0aW9uU2FtcGxlclNhbXBsZXIscmVmbGVjdGlvbkNvb3JkcyxyZWZsZWN0aW9uRmlsdGVyaW5nSW5mbyksMS4wZik7XG4jZWxzZVxuZW52aXJvbm1lbnRSYWRpYW5jZT10ZXh0dXJlU2FtcGxlTGV2ZWwocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMscmVmbGVjdGlvbkxPRCk7XG4jZW5kaWZcbiNpZmRlZiBSR0JEUkVGTEVDVElPTlxuZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2I9ZnJvbVJHQkQoZW52aXJvbm1lbnRSYWRpYW5jZSk7XG4jZW5kaWZcbiNpZmRlZiBHQU1NQVJFRkxFQ1RJT05cbmVudmlyb25tZW50UmFkaWFuY2UucmdiPXRvTGluZWFyU3BhY2UoZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2IpO1xuI2VuZGlmXG5yZXR1cm4gZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2I7fVxuI2lmIGRlZmluZWQoQU5JU09UUk9QSUMpXG5mbiBzYW1wbGVSYWRpYW5jZUFuaXNvdHJvcGljKFxuYWxwaGFHOiBmMzJcbixyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M6IHZlYzNmXG4scmVmbGVjdGlvbkluZm9zOiB2ZWMyZlxuLGdlb0luZm86IGdlb21ldHJ5SW5mb0FuaXNvT3V0UGFyYW1zXG4sbm9ybWFsVzogdmVjM2Zcbix2aWV3RGlyZWN0aW9uVzogdmVjM2Zcbixwb3NpdGlvblc6IHZlYzNmXG4sbm9pc2U6IHZlYzNmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxuLHJlZmxlY3Rpb25TYW1wbGVyOiB0ZXh0dXJlX2N1YmU8ZjMyPlxuLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcjogc2FtcGxlclxuI2Vsc2VcbixyZWZsZWN0aW9uU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+XG4scmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbixyZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzogdmVjMmZcbiNlbmRpZlxuKS0+dmVjM2Yge3ZhciBlbnZpcm9ubWVudFJhZGlhbmNlOiB2ZWM0Zj12ZWM0ZigwLmYsMC5mLDAuZiwwLmYpO2xldCBhbHBoYVQ9YWxwaGFHKnNxcnQoMi4wZi8oMS4wZisoMS4wZi1nZW9JbmZvLmFuaXNvdHJvcHkpKigxLjBmLWdlb0luZm8uYW5pc290cm9weSkpKTtsZXQgYWxwaGFCPSgxLjBmLWdlb0luZm8uYW5pc290cm9weSkqYWxwaGFUO2xldCBtb2RpZmllZEFscGhhRz1hbHBoYUI7XG4jaWYgZGVmaW5lZChMT0RJTlJFRkxFQ1RJT05BTFBIQSkgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG52YXIgcmVmbGVjdGlvbkxPRDogZjMyPWdldExvZEZyb21BbHBoYUcocmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngsbW9kaWZpZWRBbHBoYUcsZ2VvSW5mby5OZG90VlVuY2xhbXBlZCk7XG4jZWxpZiBkZWZpbmVkKExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTilcbnZhciByZWZsZWN0aW9uTE9EOiBmMzI9Z2V0TGluZWFyTG9kRnJvbVJvdWdobmVzcyhyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxyb3VnaG5lc3MpO1xuI2Vsc2VcbnZhciByZWZsZWN0aW9uTE9EOiBmMzI9Z2V0TG9kRnJvbUFscGhhRyhyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxtb2RpZmllZEFscGhhRyk7XG4jZW5kaWZcbnJlZmxlY3Rpb25MT0Q9cmVmbGVjdGlvbkxPRCpyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueStyZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MuejtcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbnZhciB2aWV3PSh1bmlmb3Jtcy5yZWZsZWN0aW9uTWF0cml4KnZlYzRmKHZpZXdEaXJlY3Rpb25XLDAuMGYpKS54eXo7dmFyIHRhbmdlbnQ9KHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXgqdmVjNGYoZ2VvSW5mby5hbmlzb3Ryb3BpY1RhbmdlbnQsMC4wZikpLnh5ejt2YXIgYml0YW5nZW50PSh1bmlmb3Jtcy5yZWZsZWN0aW9uTWF0cml4KnZlYzRmKGdlb0luZm8uYW5pc290cm9waWNCaXRhbmdlbnQsMC4wZikpLnh5ejt2YXIgbm9ybWFsPSh1bmlmb3Jtcy5yZWZsZWN0aW9uTWF0cml4KnZlYzRmKG5vcm1hbFcsMC4wZikpLnh5ejtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxudmlldy56Kj0tMS4wZjt0YW5nZW50LnoqPS0xLjBmO2JpdGFuZ2VudC56Kj0tMS4wZjtub3JtYWwueio9LTEuMGY7XG4jZW5kaWZcbmVudmlyb25tZW50UmFkaWFuY2UgPVxudmVjNGYocmFkaWFuY2VBbmlzb3Ryb3BpYyhhbHBoYVQsYWxwaGFCLHJlZmxlY3Rpb25TYW1wbGVyLHJlZmxlY3Rpb25TYW1wbGVyU2FtcGxlcixcbnZpZXcsdGFuZ2VudCxcbmJpdGFuZ2VudCxub3JtYWwsXG5yZWZsZWN0aW9uRmlsdGVyaW5nSW5mbyxub2lzZS54eSksXG4xLjBmKTtcbiNlbHNlXG5jb25zdCBzYW1wbGVzOiBpMzI9MTY7dmFyIHJhZGlhbmNlU2FtcGxlPXZlYzRmKDAuMCk7dmFyIGFjY3VtdWxhdGVkUmFkaWFuY2U9dmVjM2YoMC4wKTt2YXIgcmVmbGVjdGlvbkNvb3Jkcz12ZWMzZigwLjApO3ZhciBzYW1wbGVfd2VpZ2h0PTAuMGY7dmFyIHRvdGFsX3dlaWdodD0wLjBmO2xldCBzdGVwPTEuMGYvZjMyKG1heChzYW1wbGVzLTEsMSkpO2ZvciAodmFyIGk6IGkzMj0wOyBpPHNhbXBsZXM7IGkrKykge3ZhciB0OiBmMzI9bWl4KC0xLjAsMS4wLGYzMihpKSpzdGVwKTt0Kz1zdGVwKjIuMCpub2lzZS54O3NhbXBsZV93ZWlnaHQ9bWF4KDEuMC1hYnModCksMC4wMDEpO3NhbXBsZV93ZWlnaHQqPXNhbXBsZV93ZWlnaHQ7dCo9bWluKDQuMCphbHBoYVQqZ2VvSW5mby5hbmlzb3Ryb3B5LDEuMCk7dmFyIGJlbnROb3JtYWw6IHZlYzNmO2lmICh0PDAuMCkge2xldCBibGVuZDogZjMyPXQrMS4wO2JlbnROb3JtYWw9bm9ybWFsaXplKG1peCgtZ2VvSW5mby5hbmlzb3Ryb3BpY1RhbmdlbnQsbm9ybWFsVyxibGVuZCkpO30gZWxzZSBpZiAodD4wLjApIHtsZXQgYmxlbmQ6IGYzMj10O2JlbnROb3JtYWw9bm9ybWFsaXplKG1peChub3JtYWxXLGdlb0luZm8uYW5pc290cm9waWNUYW5nZW50LGJsZW5kKSk7fSBlbHNlIHtiZW50Tm9ybWFsPW5vcm1hbFc7fVxucmVmbGVjdGlvbkNvb3Jkcz1jcmVhdGVSZWZsZWN0aW9uQ29vcmRzKHBvc2l0aW9uVyxiZW50Tm9ybWFsKTtyYWRpYW5jZVNhbXBsZT10ZXh0dXJlU2FtcGxlTGV2ZWwocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvblNhbXBsZXJTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMscmVmbGVjdGlvbkxPRCk7XG4jaWZkZWYgUkdCRFJFRkxFQ1RJT05cbmFjY3VtdWxhdGVkUmFkaWFuY2UrPXZlYzNmKHNhbXBsZV93ZWlnaHQpKmZyb21SR0JEKHJhZGlhbmNlU2FtcGxlKTtcbiNlbGlmIGRlZmluZWQoR0FNTUFSRUZMRUNUSU9OKVxuYWNjdW11bGF0ZWRSYWRpYW5jZSs9dmVjM2Yoc2FtcGxlX3dlaWdodCkqdG9MaW5lYXJTcGFjZShyYWRpYW5jZVNhbXBsZS5yZ2IpO1xuI2Vsc2VcbmFjY3VtdWxhdGVkUmFkaWFuY2UrPXZlYzNmKHNhbXBsZV93ZWlnaHQpKnJhZGlhbmNlU2FtcGxlLnJnYjtcbiNlbmRpZlxudG90YWxfd2VpZ2h0Kz1zYW1wbGVfd2VpZ2h0O31cbmVudmlyb25tZW50UmFkaWFuY2U9dmVjNGYoYWNjdW11bGF0ZWRSYWRpYW5jZS92ZWMzZih0b3RhbF93ZWlnaHQpLDEuMGYpO1xuI2VuZGlmXG5lbnZpcm9ubWVudFJhZGlhbmNlPXZlYzRmKGVudmlyb25tZW50UmFkaWFuY2UucmdiKnJlZmxlY3Rpb25JbmZvcy54eHgsZW52aXJvbm1lbnRSYWRpYW5jZS5hKTtyZXR1cm4gZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2I7fVxuI2VuZGlmXG5mbiBjb25kdWN0b3JJYmxGcmVzbmVsKHJlZmxlY3RhbmNlOiBSZWZsZWN0YW5jZVBhcmFtcyxOZG90VjogZjMyLHJvdWdobmVzczogZjMyLGVudmlyb25tZW50QnJkZjogdmVjM2YpLT52ZWMzZlxue1xuI2lmIChDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxubGV0IGFsYmVkb0YwOiB2ZWMzZj1taXgocmVmbGVjdGFuY2UuY29sb3JlZEYwLHBvdyhyZWZsZWN0YW5jZS5jb2xvcmVkRjAsdmVjM2YoMS40ZikpLHJvdWdobmVzcyk7cmV0dXJuIGdldEY4MlNwZWN1bGFyKE5kb3RWLGFsYmVkb0YwLHJlZmxlY3RhbmNlLmNvbG9yZWRGOTAscm91Z2huZXNzKTtcbiNlbHNlXG5yZXR1cm4gZ2V0UmVmbGVjdGFuY2VGcm9tQlJERkxvb2t1cChyZWZsZWN0YW5jZS5jb2xvcmVkRjAscmVmbGVjdGFuY2UuY29sb3JlZEY5MCxlbnZpcm9ubWVudEJyZGYpO1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJySWJsRnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBick5vcm1hbE1hcEZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyIHV2T2Zmc2V0OiB2ZWMyZj0gdmVjMmYoMC4wLDAuMCk7XG4jaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpIHx8IGRlZmluZWQoR0VPTUVUUllfQ09BVF9OT1JNQUwpIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoREVUQUlMKVxuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbnZhciBub3JtYWxTY2FsZTogZjMyPTEuMDtcbiNlbGlmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKVxudmFyIG5vcm1hbFNjYWxlOiBmMzI9dW5pZm9ybXMudkdlb21ldHJ5Tm9ybWFsSW5mb3MueTtcbiNlbHNlXG52YXIgbm9ybWFsU2NhbGU6IGYzMj0xLjA7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmFyIFRCTjogbWF0M3gzZj1tYXQzeDM8ZjMyPihpbnB1dC52VEJOMCxpbnB1dC52VEJOMSxpbnB1dC52VEJOMik7IFxuI2VsaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpXG52YXIgVEJOVVY6IHZlYzJmPXNlbGVjdCgtZnJhZ21lbnRJbnB1dHMudkdlb21ldHJ5Tm9ybWFsVVYsZnJhZ21lbnRJbnB1dHMudkdlb21ldHJ5Tm9ybWFsVVYsZnJhZ21lbnRJbnB1dHMuZnJvbnRGYWNpbmcpO3ZhciBUQk46IG1hdDN4M2Y9Y290YW5nZW50X2ZyYW1lKG5vcm1hbFcqbm9ybWFsU2NhbGUsaW5wdXQudlBvc2l0aW9uVyxUQk5VVix1bmlmb3Jtcy52VGFuZ2VudFNwYWNlUGFyYW1zKTtcbiNlbHNlXG52YXIgVEJOVVY6IHZlYzJmPXNlbGVjdCgtZnJhZ21lbnRJbnB1dHMudkRldGFpbFVWLGZyYWdtZW50SW5wdXRzLnZEZXRhaWxVVixmcmFnbWVudElucHV0cy5mcm9udEZhY2luZyk7dmFyIFRCTjogbWF0M3gzZj1jb3RhbmdlbnRfZnJhbWUobm9ybWFsVypub3JtYWxTY2FsZSxpbnB1dC52UG9zaXRpb25XLFRCTlVWLCB2ZWMyZigxLiwxLikpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZhciBUQk46IG1hdDN4M2Y9bWF0M3gzPGYzMj4oaW5wdXQudlRCTjAsaW5wdXQudlRCTjEsaW5wdXQudlRCTjIpO1xuI2Vsc2VcbnZhciBUQk5VVjogdmVjMmY9c2VsZWN0KCAtZnJhZ21lbnRJbnB1dHMudk1haW5VVjEsZnJhZ21lbnRJbnB1dHMudk1haW5VVjEsZnJhZ21lbnRJbnB1dHMuZnJvbnRGYWNpbmcpO3ZhciBUQk46IG1hdDN4M2Y9Y290YW5nZW50X2ZyYW1lKG5vcm1hbFcsaW5wdXQudlBvc2l0aW9uVyxUQk5VViwgdmVjMmYoMS4sMS4pKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUEFSQUxMQVhcbnZhciBpbnZUQk46IG1hdDN4M2Y9dHJhbnNwb3NlTWF0MyhUQk4pO1xuI2lmZGVmIFBBUkFMTEFYT0NDTFVTSU9OXG4jZWxzZVxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbnZhciBkZXRhaWxDb2xvcjogdmVjNGY9dGV4dHVyZVNhbXBsZShkZXRhaWxTYW1wbGVyLGRldGFpbFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZEZXRhaWxVVit1dk9mZnNldCk7dmFyIGRldGFpbE5vcm1hbFJHOiB2ZWMyZj1kZXRhaWxDb2xvci53eSoyLjAtMS4wO3ZhciBkZXRhaWxOb3JtYWxCOiBmMzI9c3FydCgxLi1zYXR1cmF0ZShkb3QoZGV0YWlsTm9ybWFsUkcsZGV0YWlsTm9ybWFsUkcpKSk7dmFyIGRldGFpbE5vcm1hbDogdmVjM2Y9IHZlYzNmKGRldGFpbE5vcm1hbFJHLGRldGFpbE5vcm1hbEIpO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfQ09BVF9OT1JNQUxcbmNvYXROb3JtYWxXPXBlcnR1cmJOb3JtYWwoVEJOLHRleHR1cmVTYW1wbGUoZ2VvbWV0cnlDb2F0Tm9ybWFsU2FtcGxlcixnZW9tZXRyeUNvYXROb3JtYWxTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52R2VvbWV0cnlDb2F0Tm9ybWFsVVYrdXZPZmZzZXQpLnh5eix1bmlmb3Jtcy52R2VvbWV0cnlDb2F0Tm9ybWFsSW5mb3MueSk7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9OT1JNQUxcbiNpZmRlZiBPQkpFQ1RTUEFDRV9OT1JNQUxNQVBcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JVTVBfRlJBR01FTlRcbm5vcm1hbFc9bm9ybWFsaXplKHRleHR1cmVTYW1wbGUoZ2VvbWV0cnlOb3JtYWxTYW1wbGVyLGdlb21ldHJ5Tm9ybWFsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkdlb21ldHJ5Tm9ybWFsVVYpLnh5eiAqMi4wLTEuMCk7bm9ybWFsVz1ub3JtYWxpemUobWF0M3gzZih1bmlmb3Jtcy5ub3JtYWxNYXRyaXhbMF0ueHl6LHVuaWZvcm1zLm5vcm1hbE1hdHJpeFsxXS54eXosdW5pZm9ybXMubm9ybWFsTWF0cml4WzJdLnh5eikqbm9ybWFsVyk7XG4jZWxpZiAhZGVmaW5lZChERVRBSUwpXG5ub3JtYWxXPXBlcnR1cmJOb3JtYWwoVEJOLHRleHR1cmVTYW1wbGUoZ2VvbWV0cnlOb3JtYWxTYW1wbGVyLGdlb21ldHJ5Tm9ybWFsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkdlb21ldHJ5Tm9ybWFsVVYrdXZPZmZzZXQpLnh5eix1bmlmb3Jtcy52R2VvbWV0cnlOb3JtYWxJbmZvcy55KTtcbiNlbHNlXG52YXIgc2FtcGxlZE5vcm1hbDogdmVjM2Y9dGV4dHVyZVNhbXBsZShnZW9tZXRyeU5vcm1hbFNhbXBsZXIsZ2VvbWV0cnlOb3JtYWxTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52R2VvbWV0cnlOb3JtYWxVVit1dk9mZnNldCkueHl6KjIuMC0xLjA7XG4jaWYgREVUQUlMX05PUk1BTEJMRU5ETUVUSE9EPT0wIFxuZGV0YWlsTm9ybWFsPXZlYzNmKGRldGFpbE5vcm1hbC54eSp1bmlmb3Jtcy52RGV0YWlsSW5mb3MueixkZXRhaWxOb3JtYWwueik7dmFyIGJsZW5kZWROb3JtYWw6IHZlYzNmPW5vcm1hbGl6ZSggdmVjM2Yoc2FtcGxlZE5vcm1hbC54eStkZXRhaWxOb3JtYWwueHksc2FtcGxlZE5vcm1hbC56KmRldGFpbE5vcm1hbC56KSk7XG4jZWxpZiBERVRBSUxfTk9STUFMQkxFTkRNRVRIT0Q9PTEgXG5kZXRhaWxOb3JtYWw9dmVjM2YoZGV0YWlsTm9ybWFsLnh5KnVuaWZvcm1zLnZEZXRhaWxJbmZvcy56LGRldGFpbE5vcm1hbC56KTtzYW1wbGVkTm9ybWFsKz0gdmVjM2YoMC4wLDAuMCwxLjApO2RldGFpbE5vcm1hbCo9IHZlYzNmKC0xLjAsLTEuMCwxLjApO3ZhciBibGVuZGVkTm9ybWFsOiB2ZWMzZj1zYW1wbGVkTm9ybWFsKmRvdChzYW1wbGVkTm9ybWFsLGRldGFpbE5vcm1hbCkvc2FtcGxlZE5vcm1hbC56LWRldGFpbE5vcm1hbDtcbiNlbmRpZlxubm9ybWFsVz1wZXJ0dXJiTm9ybWFsQmFzZShUQk4sYmxlbmRlZE5vcm1hbCx1bmlmb3Jtcy52R2VvbWV0cnlOb3JtYWxJbmZvcy55KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChERVRBSUwpXG5kZXRhaWxOb3JtYWw9dmVjM2YoZGV0YWlsTm9ybWFsLnh5KnVuaWZvcm1zLnZEZXRhaWxJbmZvcy56LGRldGFpbE5vcm1hbC56KTtub3JtYWxXPXBlcnR1cmJOb3JtYWxCYXNlKFRCTixkZXRhaWxOb3JtYWwsdW5pZm9ybXMudkRldGFpbEluZm9zLnopO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBick5vcm1hbE1hcEZyYWdtZW50V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBick5vcm1hbE1hcEZyYWdtZW50RnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9OT1JNQUwsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeU5vcm1hbCxfU0FNUExFUk5BTUVfLGdlb21ldHJ5Tm9ybWFsKVxuI2VuZGlmXG4jaWYgZGVmaW5lZChHRU9NRVRSWV9DT0FUX05PUk1BTClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfQ09BVF9OT1JNQUwsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeUNvYXROb3JtYWwsX1NBTVBMRVJOQU1FXyxnZW9tZXRyeUNvYXROb3JtYWwpXG4jZW5kaWZcbiNpZiBkZWZpbmVkKERFVEFJTClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9TQU1QTEVSTkFNRV8sZGV0YWlsKVxuI2VuZGlmXG4jaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpICYmIGRlZmluZWQoUEFSQUxMQVgpXG5jb25zdCBtaW5TYW1wbGVzOiBmMzI9NC47Y29uc3QgbWF4U2FtcGxlczogZjMyPTE1Ljtjb25zdCBpTWF4U2FtcGxlczogaTMyPTE1O2ZuIHBhcmFsbGF4T2NjbHVzaW9uKHZWaWV3RGlyQ29UOiB2ZWMzZix2Tm9ybWFsQ29UOiB2ZWMzZix0ZXhDb29yZDogdmVjMmYscGFyYWxsYXhTY2FsZTogZjMyKS0+dmVjMmYge3ZhciBwYXJhbGxheExpbWl0OiBmMzI9bGVuZ3RoKHZWaWV3RGlyQ29ULnh5KS92Vmlld0RpckNvVC56O3BhcmFsbGF4TGltaXQqPXBhcmFsbGF4U2NhbGU7dmFyIHZPZmZzZXREaXI6IHZlYzJmPW5vcm1hbGl6ZSh2Vmlld0RpckNvVC54eSk7dmFyIHZNYXhPZmZzZXQ6IHZlYzJmPXZPZmZzZXREaXIqcGFyYWxsYXhMaW1pdDt2YXIgbnVtU2FtcGxlczogZjMyPW1heFNhbXBsZXMrKGRvdCh2Vmlld0RpckNvVCx2Tm9ybWFsQ29UKSoobWluU2FtcGxlcy1tYXhTYW1wbGVzKSk7dmFyIHN0ZXBTaXplOiBmMzI9MS4wL251bVNhbXBsZXM7dmFyIGN1cnJSYXlIZWlnaHQ6IGYzMj0xLjA7dmFyIHZDdXJyT2Zmc2V0OiB2ZWMyZj0gdmVjMmYoMCwwKTt2YXIgdkxhc3RPZmZzZXQ6IHZlYzJmPSB2ZWMyZigwLDApO3ZhciBsYXN0U2FtcGxlZEhlaWdodDogZjMyPTEuMDt2YXIgY3VyclNhbXBsZWRIZWlnaHQ6IGYzMj0xLjA7dmFyIGtlZXBXb3JraW5nOiBib29sPXRydWU7Zm9yICh2YXIgaTogaTMyPTA7IGk8aU1heFNhbXBsZXM7IGkrKylcbntjdXJyU2FtcGxlZEhlaWdodD10ZXh0dXJlU2FtcGxlKGdlb21ldHJ5Tm9ybWFsU2FtcGxlcixnZW9tZXRyeU5vcm1hbFNhbXBsZXJTYW1wbGVyLHRleENvb3JkK3ZDdXJyT2Zmc2V0KS53O2lmICgha2VlcFdvcmtpbmcpXG57fVxuZWxzZSBpZiAoY3VyclNhbXBsZWRIZWlnaHQ+Y3VyclJheUhlaWdodClcbnt2YXIgZGVsdGExOiBmMzI9Y3VyclNhbXBsZWRIZWlnaHQtY3VyclJheUhlaWdodDt2YXIgZGVsdGEyOiBmMzI9KGN1cnJSYXlIZWlnaHQrc3RlcFNpemUpLWxhc3RTYW1wbGVkSGVpZ2h0O3ZhciByYXRpbzogZjMyPWRlbHRhMS8oZGVsdGExK2RlbHRhMik7dkN1cnJPZmZzZXQ9KHJhdGlvKSogdkxhc3RPZmZzZXQrKDEuMC1yYXRpbykqdkN1cnJPZmZzZXQ7a2VlcFdvcmtpbmc9ZmFsc2U7fVxuZWxzZVxue2N1cnJSYXlIZWlnaHQtPXN0ZXBTaXplO3ZMYXN0T2Zmc2V0PXZDdXJyT2Zmc2V0O1xuI2lmZGVmIFBBUkFMTEFYX1JIU1xudkN1cnJPZmZzZXQtPXN0ZXBTaXplKnZNYXhPZmZzZXQ7XG4jZWxzZVxudkN1cnJPZmZzZXQrPXN0ZXBTaXplKnZNYXhPZmZzZXQ7XG4jZW5kaWZcbmxhc3RTYW1wbGVkSGVpZ2h0PWN1cnJTYW1wbGVkSGVpZ2h0O319XG5yZXR1cm4gdkN1cnJPZmZzZXQ7fVxuZm4gcGFyYWxsYXhPZmZzZXQodmlld0RpcjogdmVjM2YsaGVpZ2h0U2NhbGU6IGYzMiktPnZlYzJmXG57dmFyIGhlaWdodDogZjMyPXRleHR1cmVTYW1wbGUoZ2VvbWV0cnlOb3JtYWxTYW1wbGVyLGdlb21ldHJ5Tm9ybWFsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkdlb21ldHJ5Tm9ybWFsVVYpLnc7dmFyIHRleENvb3JkT2Zmc2V0OiB2ZWMyZj1oZWlnaHRTY2FsZSp2aWV3RGlyLnh5KmhlaWdodDtcbiNpZmRlZiBQQVJBTExBWF9SSFNcbnJldHVybiB0ZXhDb29yZE9mZnNldDtcbiNlbHNlXG5yZXR1cm4gLXRleENvb3JkT2Zmc2V0O1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRNYWluRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopIHx8IGRlZmluZWQoREVUQUlMKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpIFxudmFyeWluZyB2VEJOMDogdmVjM2Y7dmFyeWluZyB2VEJOMTogdmVjM2Y7dmFyeWluZyB2VEJOMjogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBPQkpFQ1RTUEFDRV9OT1JNQUxNQVBcbnVuaWZvcm0gbm9ybWFsTWF0cml4OiBtYXQ0eDRmO2ZuIHRvTm9ybWFsTWF0cml4KG06IG1hdDR4NGYpLT5tYXQ0eDRmXG57dmFyIGEwMD1tWzBdWzBdO3ZhciBhMDE9bVswXVsxXTt2YXIgYTAyPW1bMF1bMl07dmFyIGEwMz1tWzBdWzNdO3ZhciBhMTA9bVsxXVswXTt2YXIgYTExPW1bMV1bMV07dmFyIGExMj1tWzFdWzJdO3ZhciBhMTM9bVsxXVszXTt2YXIgYTIwPW1bMl1bMF07IFxudmFyIGEyMT1tWzJdWzFdO3ZhciBhMjI9bVsyXVsyXTt2YXIgYTIzPW1bMl1bM107dmFyIGEzMD1tWzNdWzBdOyBcbnZhciBhMzE9bVszXVsxXTt2YXIgYTMyPW1bM11bMl07dmFyIGEzMz1tWzNdWzNdO3ZhciBiMDA9YTAwKmExMS1hMDEqYTEwO3ZhciBiMDE9YTAwKmExMi1hMDIqYTEwO3ZhciBiMDI9YTAwKmExMy1hMDMqYTEwO3ZhciBiMDM9YTAxKmExMi1hMDIqYTExO3ZhciBiMDQ9YTAxKmExMy1hMDMqYTExO3ZhciBiMDU9YTAyKmExMy1hMDMqYTEyO3ZhciBiMDY9YTIwKmEzMS1hMjEqYTMwO3ZhciBiMDc9YTIwKmEzMi1hMjIqYTMwO3ZhciBiMDg9YTIwKmEzMy1hMjMqYTMwO3ZhciBiMDk9YTIxKmEzMi1hMjIqYTMxO3ZhciBiMTA9YTIxKmEzMy1hMjMqYTMxO3ZhciBiMTE9YTIyKmEzMy1hMjMqYTMyO3ZhciBkZXQ9YjAwKmIxMS1iMDEqYjEwK2IwMipiMDkrYjAzKmIwOC1iMDQqYjA3K2IwNSpiMDY7dmFyIG1pPW1hdDR4NDxmMzI+KFxuKGExMSpiMTEtYTEyKmIxMCthMTMqYjA5KS9kZXQsXG4oYTAyKmIxMC1hMDEqYjExLWEwMypiMDkpL2RldCxcbihhMzEqYjA1LWEzMipiMDQrYTMzKmIwMykvZGV0LFxuKGEyMipiMDQtYTIxKmIwNS1hMjMqYjAzKS9kZXQsXG4oYTEyKmIwOC1hMTAqYjExLWExMypiMDcpL2RldCxcbihhMDAqYjExLWEwMipiMDgrYTAzKmIwNykvZGV0LFxuKGEzMipiMDItYTMwKmIwNS1hMzMqYjAxKS9kZXQsXG4oYTIwKmIwNS1hMjIqYjAyK2EyMypiMDEpL2RldCxcbihhMTAqYjEwLWExMSpiMDgrYTEzKmIwNikvZGV0LFxuKGEwMSpiMDgtYTAwKmIxMC1hMDMqYjA2KS9kZXQsXG4oYTMwKmIwNC1hMzEqYjAyK2EzMypiMDApL2RldCxcbihhMjEqYjAyLWEyMCpiMDQtYTIzKmIwMCkvZGV0LFxuKGExMSpiMDctYTEwKmIwOS1hMTIqYjA2KS9kZXQsXG4oYTAwKmIwOS1hMDEqYjA3K2EwMipiMDYpL2RldCxcbihhMzEqYjAxLWEzMCpiMDMtYTMyKmIwMCkvZGV0LFxuKGEyMCpiMDMtYTIxKmIwMSthMjIqYjAwKS9kZXQpO3JldHVybiBtYXQ0eDQ8ZjMyPihtaVswXVswXSxtaVsxXVswXSxtaVsyXVswXSxtaVszXVswXSxcbm1pWzBdWzFdLG1pWzFdWzFdLG1pWzJdWzFdLG1pWzNdWzFdLFxubWlbMF1bMl0sbWlbMV1bMl0sbWlbMl1bMl0sbWlbM11bMl0sXG5taVswXVszXSxtaVsxXVszXSxtaVsyXVszXSxtaVszXVszXSk7fVxuI2VuZGlmXG5mbiBwZXJ0dXJiTm9ybWFsQmFzZShjb3RhbmdlbnRGcmFtZTogbWF0M3gzZixub3JtYWw6IHZlYzNmLHNjYWxlOiBmMzIpLT52ZWMzZlxue3ZhciBvdXRwdXQ9bm9ybWFsO1xuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbm91dHB1dD1ub3JtYWxpemUob3V0cHV0KiB2ZWMzZihzY2FsZSxzY2FsZSwxLjApKTtcbiNlbmRpZlxucmV0dXJuIG5vcm1hbGl6ZShjb3RhbmdlbnRGcmFtZSpvdXRwdXQpO31cbmZuIHBlcnR1cmJOb3JtYWwoY290YW5nZW50RnJhbWU6IG1hdDN4M2YsdGV4dHVyZVNhbXBsZTogdmVjM2Ysc2NhbGU6IGYzMiktPnZlYzNmXG57cmV0dXJuIHBlcnR1cmJOb3JtYWxCYXNlKGNvdGFuZ2VudEZyYW1lLHRleHR1cmVTYW1wbGUqMi4wLTEuMCxzY2FsZSk7fVxuZm4gY290YW5nZW50X2ZyYW1lKG5vcm1hbDogdmVjM2YscDogdmVjM2YsdXY6IHZlYzJmLHRhbmdlbnRTcGFjZVBhcmFtczogdmVjMmYpLT5tYXQzeDNmXG57dmFyIGRwMTogdmVjM2Y9ZHBkeChwKTt2YXIgZHAyOiB2ZWMzZj1kcGR5KHApO3ZhciBkdXYxOiB2ZWMyZj1kcGR4KHV2KTt2YXIgZHV2MjogdmVjMmY9ZHBkeSh1dik7dmFyIGRwMnBlcnA6IHZlYzNmPWNyb3NzKGRwMixub3JtYWwpO3ZhciBkcDFwZXJwOiB2ZWMzZj1jcm9zcyhub3JtYWwsZHAxKTt2YXIgdGFuZ2VudDogdmVjM2Y9ZHAycGVycCpkdXYxLngrZHAxcGVycCpkdXYyLng7dmFyIGJpdGFuZ2VudDogdmVjM2Y9ZHAycGVycCpkdXYxLnkrZHAxcGVycCpkdXYyLnk7dGFuZ2VudCo9dGFuZ2VudFNwYWNlUGFyYW1zLng7Yml0YW5nZW50Kj10YW5nZW50U3BhY2VQYXJhbXMueTt2YXIgZGV0OiBmMzI9bWF4KGRvdCh0YW5nZW50LHRhbmdlbnQpLGRvdChiaXRhbmdlbnQsYml0YW5nZW50KSk7dmFyIGludm1heDogZjMyPXNlbGVjdChpbnZlcnNlU3FydChkZXQpLDAuMCxkZXQ9PTAuMCk7cmV0dXJuIG1hdDN4M2YodGFuZ2VudCppbnZtYXgsYml0YW5nZW50Kmludm1heCxub3JtYWwpO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJOb3JtYWxNYXBGcmFnbWVudE1haW5GdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyVGhpbkZpbG1MYXllckRhdGFcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgVEhJTl9GSUxNXG52YXIgdGhpbl9maWxtX3dlaWdodDogZjMyPXVuaWZvcm1zLnZUaGluRmlsbVdlaWdodDt2YXIgdGhpbl9maWxtX3RoaWNrbmVzczogZjMyPXVuaWZvcm1zLnZUaGluRmlsbVRoaWNrbmVzcy5yKjEwMDAuMGY7IFxudmFyIHRoaW5fZmlsbV9pb3I6IGYzMj11bmlmb3Jtcy52VGhpbkZpbG1Jb3I7XG4jaWZkZWYgVEhJTl9GSUxNX1dFSUdIVFxudmFyIHRoaW5GaWxtV2VpZ2h0RnJvbVRleHR1cmU6IGYzMj10ZXh0dXJlU2FtcGxlKHRoaW5GaWxtV2VpZ2h0U2FtcGxlcix0aGluRmlsbVdlaWdodFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZUaGluRmlsbVdlaWdodFVWK3V2T2Zmc2V0KS5yKnVuaWZvcm1zLnZUaGluRmlsbVdlaWdodEluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBUSElOX0ZJTE1fVEhJQ0tORVNTXG52YXIgdGhpbkZpbG1UaGlja25lc3NGcm9tVGV4dHVyZTogZjMyPXRleHR1cmVTYW1wbGUodGhpbkZpbG1UaGlja25lc3NTYW1wbGVyLHRoaW5GaWxtVGhpY2tuZXNzU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudlRoaW5GaWxtVGhpY2tuZXNzVVYrdXZPZmZzZXQpLmcqdW5pZm9ybXMudlRoaW5GaWxtVGhpY2tuZXNzSW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIFRISU5fRklMTV9XRUlHSFRcbnRoaW5fZmlsbV93ZWlnaHQqPXRoaW5GaWxtV2VpZ2h0RnJvbVRleHR1cmU7XG4jZW5kaWZcbiNpZmRlZiBUSElOX0ZJTE1fVEhJQ0tORVNTXG50aGluX2ZpbG1fdGhpY2tuZXNzKj10aGluRmlsbVRoaWNrbmVzc0Zyb21UZXh0dXJlO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyVGhpbkZpbG1MYXllckRhdGFXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyVWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB1bmlmb3JtIHZUYW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmO3VuaWZvcm0gdkxpZ2h0aW5nSW50ZW5zaXR5OiB2ZWM0Zjt1bmlmb3JtIHBvaW50U2l6ZTogZjMyO3VuaWZvcm0gdkRlYnVnTW9kZTogdmVjMmY7dW5pZm9ybSBjYW1lcmFJbmZvOiB2ZWM0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblNpemU6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb246IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Db2xvcjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDAwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMV8xOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMTA6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwxMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDIwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMjE6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwyMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWDogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFhfWlo6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlZX1paOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFk6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlaOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWDogdmVjM2Y7dW5pZm9ybSB2QmFzZVdlaWdodDogZjMyO3VuaWZvcm0gdkJhc2VDb2xvcjogdmVjNGY7dW5pZm9ybSB2QmFzZURpZmZ1c2VSb3VnaG5lc3M6IGYzMjt1bmlmb3JtIHZSZWZsZWN0YW5jZUluZm86IHZlYzRmO3VuaWZvcm0gdlNwZWN1bGFyQ29sb3I6IHZlYzRmO3VuaWZvcm0gdlNwZWN1bGFyQW5pc290cm9weTogdmVjM2Y7dW5pZm9ybSB2Q29hdFdlaWdodDogZjMyO3VuaWZvcm0gdkNvYXRDb2xvcjogdmVjM2Y7dW5pZm9ybSB2Q29hdFJvdWdobmVzczogZjMyO3VuaWZvcm0gdkNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5OiBmMzI7dW5pZm9ybSB2Q29hdElvcjogZjMyO3VuaWZvcm0gdkNvYXREYXJrZW5pbmcgOiBmMzI7dW5pZm9ybSB2RnV6eldlaWdodDogZjMyO3VuaWZvcm0gdkZ1enpDb2xvcjogdmVjM2Y7dW5pZm9ybSB2RnV6elJvdWdobmVzczogZjMyO3VuaWZvcm0gdkdlb21ldHJ5Q29hdFRhbmdlbnQ6IHZlYzJmO3VuaWZvcm0gdkVtaXNzaW9uQ29sb3I6IHZlYzNmO3VuaWZvcm0gdlRoaW5GaWxtV2VpZ2h0OiBmMzI7dW5pZm9ybSB2VGhpbkZpbG1UaGlja25lc3M6IHZlYzJmO3VuaWZvcm0gdlRoaW5GaWxtSW9yOiBmMzI7dW5pZm9ybSB2QmFzZVdlaWdodEluZm9zOiB2ZWMyZjt1bmlmb3JtIGJhc2VXZWlnaHRNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2QmFzZUNvbG9ySW5mb3M6IHZlYzJmO3VuaWZvcm0gYmFzZUNvbG9yTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M6IHZlYzJmO3VuaWZvcm0gYmFzZURpZmZ1c2VSb3VnaG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2QmFzZU1ldGFsbmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIGJhc2VNZXRhbG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2U3BlY3VsYXJXZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSBzcGVjdWxhcldlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZTcGVjdWxhckNvbG9ySW5mb3M6IHZlYzJmO3VuaWZvcm0gc3BlY3VsYXJDb2xvck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZTcGVjdWxhclJvdWdobmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIHNwZWN1bGFyUm91Z2huZXNzTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zOiB2ZWMyZjt1bmlmb3JtIHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZDb2F0V2VpZ2h0SW5mb3M6IHZlYzJmO3VuaWZvcm0gY29hdFdlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZDb2F0Q29sb3JJbmZvczogdmVjMmY7dW5pZm9ybSBjb2F0Q29sb3JNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2Q29hdFJvdWdobmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIGNvYXRSb3VnaG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHlJbmZvczogdmVjMmY7dW5pZm9ybSBjb2F0Um91Z2huZXNzQW5pc290cm9weU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZDb2F0RGFya2VuaW5nSW5mb3MgOiB2ZWMyZjt1bmlmb3JtIGNvYXREYXJrZW5pbmdNYXRyaXggOiBtYXQ0eDRmO3VuaWZvcm0gdkZ1enpXZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSBmdXp6V2VpZ2h0TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkZ1enpDb2xvckluZm9zOiB2ZWMyZjt1bmlmb3JtIGZ1enpDb2xvck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZGdXp6Um91Z2huZXNzSW5mb3M6IHZlYzJmO3VuaWZvcm0gZnV6elJvdWdobmVzc01hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZHZW9tZXRyeU5vcm1hbEluZm9zOiB2ZWMyZjt1bmlmb3JtIGdlb21ldHJ5Tm9ybWFsTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkdlb21ldHJ5VGFuZ2VudEluZm9zOiB2ZWMyZjt1bmlmb3JtIGdlb21ldHJ5VGFuZ2VudE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZHZW9tZXRyeUNvYXROb3JtYWxJbmZvczogdmVjMmY7dW5pZm9ybSBnZW9tZXRyeUNvYXROb3JtYWxNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2R2VvbWV0cnlDb2F0VGFuZ2VudEluZm9zOiB2ZWMyZjt1bmlmb3JtIGdlb21ldHJ5Q29hdFRhbmdlbnRNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2R2VvbWV0cnlPcGFjaXR5SW5mb3M6IHZlYzJmO3VuaWZvcm0gZ2VvbWV0cnlPcGFjaXR5TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkVtaXNzaW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gZW1pc3Npb25NYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2VGhpbkZpbG1XZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSB0aGluRmlsbVdlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZUaGluRmlsbVRoaWNrbmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIHRoaW5GaWxtVGhpY2tuZXNzTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkFtYmllbnRPY2NsdXNpb25JbmZvczogdmVjMmY7dW5pZm9ybSBhbWJpZW50T2NjbHVzaW9uTWF0cml4OiBtYXQ0eDRmO1xuI2RlZmluZSBBRERJVElPTkFMX1VCT19ERUNMQVJBVElPTlxuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyVWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb2l0RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBiclVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50RXh0cmFEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3N1YlN1cmZhY2VTY2F0dGVyaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltcG9ydGFuY2VTYW1wbGluZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJIZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NGcmFnbWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oYXJtb25pY3NGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyRGlyZWN0TGlnaHRpbmdTZXR1cEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ0ZhbGxvZmZGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQlJERkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZHJGaWx0ZXJpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyRGlyZWN0TGlnaHRpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJySUJMRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBGcmFnbWVudE1haW5GdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBick5vcm1hbE1hcEZyYWdtZW50RnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3JlZmxlY3Rpb25GdW5jdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRGllbGVjdHJpY1JlZmxlY3RhbmNlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJDb25kdWN0b3JSZWZsZWN0YW5jZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJHZW9tZXRyeUluZm9cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBicklibEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja05vcm1hbEdlb21ldHJpY1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickJsb2NrTm9ybWFsRmluYWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickJhc2VMYXllckRhdGFcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickNvYXRMYXllckRhdGFcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBiclRoaW5GaWxtTGF5ZXJEYXRhXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJGdXp6TGF5ZXJEYXRhXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2RlcHRoUHJlUGFzc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRW52aXJvbm1lbnRMaWdodGluZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRGlyZWN0TGlnaHRpbmdJbml0XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJEaXJlY3RMaWdodGluZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrSW1hZ2VQcm9jZXNzaW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUHJlUGFzc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vaXRGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJEZWJ1Z1wiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIE9QRU5QQlJfRlJBR01FTlRfU0hBREVSXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUdJTlxuI2luY2x1ZGU8cHJlUGFzc0RlY2xhcmF0aW9uPltTQ0VORV9NUlRfQ09VTlRdXG4jaW5jbHVkZTxvaXREZWNsYXJhdGlvbj5cbiNpZm5kZWYgRlJPTUxJTkVBUlNQQUNFXG4jZGVmaW5lIEZST01MSU5FQVJTUEFDRVxuI2VuZGlmXG4jaW5jbHVkZTxvcGVucGJyVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxwYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsaWdodFVib0RlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxvcGVucGJyRnJhZ21lbnRTYW1wbGVyc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG4jaW5jbHVkZTxzdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPGltcG9ydGFuY2VTYW1wbGluZz5cbiNpbmNsdWRlPHBickhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHNoYWRvd3NGcmFnbWVudEZ1bmN0aW9ucz5cbiNpbmNsdWRlPGhhcm1vbmljc0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHBickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJEaXJlY3RMaWdodGluZ0ZhbGxvZmZGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJCUkRGRnVuY3Rpb25zPlxuI2luY2x1ZGU8aGRyRmlsdGVyaW5nRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyRGlyZWN0TGlnaHRpbmdGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJJQkxGdW5jdGlvbnM+XG4jaW5jbHVkZTxvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRNYWluRnVuY3Rpb25zPlxuI2luY2x1ZGU8b3BlbnBick5vcm1hbE1hcEZyYWdtZW50RnVuY3Rpb25zPlxuI2lmZGVmIFJFRkxFQ1RJT05cbiNpbmNsdWRlPHJlZmxlY3Rpb25GdW5jdGlvbj5cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbiNpbmNsdWRlPG9wZW5wYnJEaWVsZWN0cmljUmVmbGVjdGFuY2U+XG4jaW5jbHVkZTxvcGVucGJyQ29uZHVjdG9yUmVmbGVjdGFuY2U+XG4jaW5jbHVkZTxvcGVucGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uPlxuI2luY2x1ZGU8b3BlbnBickdlb21ldHJ5SW5mbz5cbiNpbmNsdWRlPG9wZW5wYnJJYmxGdW5jdGlvbnM+XG5mbiBsYXllcihzbGFiX2JvdHRvbTogdmVjM2Ysc2xhYl90b3A6IHZlYzNmLGxlcnBfZmFjdG9yOiBmMzIsYm90dG9tX211bHRpcGxpZXI6IHZlYzNmLHRvcF9tdWx0aXBsaWVyOiB2ZWMzZiktPnZlYzNmIHtyZXR1cm4gbWl4KHNsYWJfYm90dG9tKmJvdHRvbV9tdWx0aXBsaWVyLHNsYWJfdG9wKnRvcF9tdWx0aXBsaWVyLGxlcnBfZmFjdG9yKTt9XG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fQkVHSU5cbiNpbmNsdWRlPGNsaXBQbGFuZUZyYWdtZW50PlxuI2luY2x1ZGU8cGJyQmxvY2tOb3JtYWxHZW9tZXRyaWM+XG52YXIgY29hdE5vcm1hbFc6IHZlYzNmPW5vcm1hbFc7XG4jaW5jbHVkZTxvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnQ+XG4jaW5jbHVkZTxvcGVucGJyQmxvY2tOb3JtYWxGaW5hbD5cbiNpbmNsdWRlPG9wZW5wYnJCYXNlTGF5ZXJEYXRhPlxuI2luY2x1ZGU8b3BlbnBickNvYXRMYXllckRhdGE+XG4jaW5jbHVkZTxvcGVucGJyVGhpbkZpbG1MYXllckRhdGE+XG4jaW5jbHVkZTxvcGVucGJyRnV6ekxheWVyRGF0YT5cbnZhciBzdWJzdXJmYWNlX3dlaWdodDogZjMyPTAuMGY7dmFyIHRyYW5zbWlzc2lvbl93ZWlnaHQ6IGYzMj0wLjBmO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0FMUEhBXG4jaW5jbHVkZTxkZXB0aFByZVBhc3M+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfTElHSFRTXG52YXIgYW9PdXQ6IGFtYmllbnRPY2NsdXNpb25PdXRQYXJhbXM7XG4jaWZkZWYgQU1CSUVOVF9PQ0NMVVNJT05cbnZhciBhbWJpZW50T2NjbHVzaW9uRnJvbVRleHR1cmU6IHZlYzNmPXRleHR1cmVTYW1wbGUoYW1iaWVudE9jY2x1c2lvblNhbXBsZXIsYW1iaWVudE9jY2x1c2lvblNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZBbWJpZW50T2NjbHVzaW9uVVYrdXZPZmZzZXQpLnJnYjtcbiNlbmRpZlxuYW9PdXQ9YW1iaWVudE9jY2x1c2lvbkJsb2NrKFxuI2lmZGVmIEFNQklFTlRfT0NDTFVTSU9OXG5hbWJpZW50T2NjbHVzaW9uRnJvbVRleHR1cmUsXG51bmlmb3Jtcy52QW1iaWVudE9jY2x1c2lvbkluZm9zXG4jZW5kaWZcbik7XG4jaWZkZWYgQU5JU09UUk9QSUNfQ09BVFxubGV0IGNvYXRHZW9JbmZvOiBnZW9tZXRyeUluZm9Bbmlzb091dFBhcmFtcz1nZW9tZXRyeUluZm9BbmlzbyhcbmNvYXROb3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eixjb2F0X3JvdWdobmVzcyxnZW9tZXRyaWNOb3JtYWxXXG4sdmVjM2YoZ2VvbWV0cnlfY29hdF90YW5nZW50LngsZ2VvbWV0cnlfY29hdF90YW5nZW50LnksY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSksVEJOXG4pO1xuI2Vsc2VcbmxldCBjb2F0R2VvSW5mbzogZ2VvbWV0cnlJbmZvT3V0UGFyYW1zPWdlb21ldHJ5SW5mbyhcbmNvYXROb3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eixjb2F0X3JvdWdobmVzcyxnZW9tZXRyaWNOb3JtYWxXXG4pO1xuI2VuZGlmXG5zcGVjdWxhcl9yb3VnaG5lc3M9bWl4KHNwZWN1bGFyX3JvdWdobmVzcyxwb3cobWluKDEuMGYscG93KHNwZWN1bGFyX3JvdWdobmVzcyw0LjBmKSsyLjBmKnBvdyhjb2F0X3JvdWdobmVzcyw0LjBmKSksMC4yNWYpLGNvYXRfd2VpZ2h0KTtcbiNpZmRlZiBBTklTT1RST1BJQ19CQVNFXG5sZXQgYmFzZUdlb0luZm86IGdlb21ldHJ5SW5mb0FuaXNvT3V0UGFyYW1zPWdlb21ldHJ5SW5mb0FuaXNvKFxubm9ybWFsVyx2aWV3RGlyZWN0aW9uVy54eXosc3BlY3VsYXJfcm91Z2huZXNzLGdlb21ldHJpY05vcm1hbFdcbix2ZWMzZihnZW9tZXRyeV90YW5nZW50LngsZ2VvbWV0cnlfdGFuZ2VudC55LHNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5KSxUQk5cbik7XG4jZWxzZVxubGV0IGJhc2VHZW9JbmZvOiBnZW9tZXRyeUluZm9PdXRQYXJhbXM9Z2VvbWV0cnlJbmZvKFxubm9ybWFsVyx2aWV3RGlyZWN0aW9uVy54eXosc3BlY3VsYXJfcm91Z2huZXNzLGdlb21ldHJpY05vcm1hbFdcbik7XG4jZW5kaWZcbiNpZmRlZiBGVVpaXG5sZXQgZnV6ek5vcm1hbFc9bm9ybWFsaXplKG1peChub3JtYWxXLGNvYXROb3JtYWxXLGNvYXRfd2VpZ2h0KSk7dmFyIGZ1enpUYW5nZW50PW5vcm1hbGl6ZShUQk5bMF0pO2Z1enpUYW5nZW50PW5vcm1hbGl6ZShmdXp6VGFuZ2VudC1kb3QoZnV6elRhbmdlbnQsZnV6ek5vcm1hbFcpKmZ1enpOb3JtYWxXKTtsZXQgZnV6ekJpdGFuZ2VudD1jcm9zcyhmdXp6Tm9ybWFsVyxmdXp6VGFuZ2VudCk7bGV0IGZ1enpHZW9JbmZvOiBnZW9tZXRyeUluZm9PdXRQYXJhbXM9Z2VvbWV0cnlJbmZvKFxuZnV6ek5vcm1hbFcsdmlld0RpcmVjdGlvblcueHl6LGZ1enpfcm91Z2huZXNzLGdlb21ldHJpY05vcm1hbFdcbik7XG4jZW5kaWZcbmxldCBjb2F0UmVmbGVjdGFuY2U6IFJlZmxlY3RhbmNlUGFyYW1zPWRpZWxlY3RyaWNSZWZsZWN0YW5jZShcbmNvYXRfaW9yIFxuLDEuMGYgXG4sdmVjM2YoMS4wZilcbixjb2F0X3dlaWdodFxuKTtcbiNpZmRlZiBUSElOX0ZJTE1cbmxldCB0aGluX2ZpbG1fb3V0c2lkZV9pb3I6IGYzMj1taXgoMS4wZixjb2F0X2lvcixjb2F0X3dlaWdodCk7XG4jZW5kaWZcbmxldCBiYXNlRGllbGVjdHJpY1JlZmxlY3RhbmNlOiBSZWZsZWN0YW5jZVBhcmFtcz1kaWVsZWN0cmljUmVmbGVjdGFuY2UoXG5zcGVjdWxhcl9pb3IgXG4sbWl4KDEuMGYsY29hdF9pb3IsY29hdF93ZWlnaHQpIFxuLHNwZWN1bGFyX2NvbG9yXG4sc3BlY3VsYXJfd2VpZ2h0XG4pO2xldCBiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2U6IFJlZmxlY3RhbmNlUGFyYW1zPWNvbmR1Y3RvclJlZmxlY3RhbmNlKGJhc2VfY29sb3Isc3BlY3VsYXJfY29sb3Isc3BlY3VsYXJfd2VpZ2h0KTt2YXIgbWF0ZXJpYWxfc3VyZmFjZV9pYmw6IHZlYzNmPXZlYzNmKDAuZiwwLmYsMC5mKTtcbiNpbmNsdWRlPG9wZW5wYnJFbnZpcm9ubWVudExpZ2h0aW5nPlxudmFyIG1hdGVyaWFsX3N1cmZhY2VfZGlyZWN0OiB2ZWMzZj12ZWMzZigwLmYsMC5mLDAuZik7XG4jaWYgZGVmaW5lZChMSUdIVDApXG52YXIgYWdnU2hhZG93OiBmMzI9MC5mO3ZhciBudW1MaWdodHM6IGYzMj0wLmY7XG4jaW5jbHVkZTxvcGVucGJyRGlyZWN0TGlnaHRpbmdJbml0PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxvcGVucGJyRGlyZWN0TGlnaHRpbmc+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNlbmRpZlxudmFyIG1hdGVyaWFsX3N1cmZhY2VfZW1pc3Npb246IHZlYzNmPXVuaWZvcm1zLnZFbWlzc2lvbkNvbG9yO1xuI2lmZGVmIEVNSVNTSU9OX0NPTE9SXG5sZXQgZW1pc3Npb25Db2xvclRleDogdmVjM2Y9dGV4dHVyZVNhbXBsZShlbWlzc2lvbkNvbG9yU2FtcGxlcixlbWlzc2lvbkNvbG9yU2FtcGxlclNhbXBsZXIsdW5pZm9ybXMudkVtaXNzaW9uQ29sb3JVVit1dk9mZnNldCkucmdiO1xuI2lmZGVmIEVNSVNTSU9OX0NPTE9SX0dBTU1BXG5tYXRlcmlhbF9zdXJmYWNlX2VtaXNzaW9uKj10b0xpbmVhclNwYWNlKGVtaXNzaW9uQ29sb3JUZXgucmdiKTtcbiNlbHNlXG5tYXRlcmlhbF9zdXJmYWNlX2VtaXNzaW9uKj1lbWlzc2lvbkNvbG9yVGV4LnJnYjtcbiNlbmRpZlxubWF0ZXJpYWxfc3VyZmFjZV9lbWlzc2lvbio9IHVuaWZvcm1zLnZFbWlzc2lvbkNvbG9ySW5mb3MueTtcbiNlbmRpZlxubWF0ZXJpYWxfc3VyZmFjZV9lbWlzc2lvbio9dW5pZm9ybXMudkxpZ2h0aW5nSW50ZW5zaXR5Lnk7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRklOQUxDT0xPUkNPTVBPU0lUSU9OXG52YXIgZmluYWxDb2xvcjogdmVjNGY9dmVjNGYobWF0ZXJpYWxfc3VyZmFjZV9pYmwrbWF0ZXJpYWxfc3VyZmFjZV9kaXJlY3QrbWF0ZXJpYWxfc3VyZmFjZV9lbWlzc2lvbixhbHBoYSk7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRk9HXG5maW5hbENvbG9yPW1heChmaW5hbENvbG9yLHZlYzRmKDAuMCkpO1xuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50Pihjb2xvcixmaW5hbENvbG9yKVxuI2luY2x1ZGU8cGJyQmxvY2tJbWFnZVByb2Nlc3Npbmc+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRlJBR0NPTE9SXG4jaWZkZWYgUFJFUEFTU1xuI2luY2x1ZGU8cGJyQmxvY2tQcmVQYXNzPlxuI2VuZGlmXG4jaWYgIWRlZmluZWQoUFJFUEFTUykgJiYgIWRlZmluZWQoT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZKVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPWZpbmFsQ29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPG9pdEZyYWdtZW50PlxuI2lmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxuaWYgKGZyYWdEZXB0aD09bmVhcmVzdERlcHRoKSB7ZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3I9dmVjNGYoZnJhZ21lbnRPdXRwdXRzLmZyb250Q29sb3IucmdiK2ZpbmFsQ29sb3IucmdiKmZpbmFsQ29sb3IuYSphbHBoYU11bHRpcGxpZXIsMS4wLWFscGhhTXVsdGlwbGllciooMS4wLWZpbmFsQ29sb3IuYSkpO30gZWxzZSB7ZnJhZ21lbnRPdXRwdXRzLmJhY2tDb2xvcis9ZmluYWxDb2xvcjt9XG4jZW5kaWZcbiNpbmNsdWRlPHBickRlYnVnPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==