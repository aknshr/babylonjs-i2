"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_openpbr_fragment_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/openpbrBaseLayerData.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrBaseLayerData.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrBaseLayerData: () => (/* binding */ openpbrBaseLayerData)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrBaseLayerData";
const shader = `vec3 base_color=vec3(0.8);float base_metalness=0.0;float base_diffuse_roughness=0.0;float specular_weight=1.0;float specular_roughness=0.3;vec3 specular_color=vec3(1.0);float specular_roughness_anisotropy=0.0;float specular_ior=1.5;float alpha=1.0;vec2 geometry_tangent=vec2(1.0,0.0);
#ifdef BASE_WEIGHT
vec4 baseWeightFromTexture=texture2D(baseWeightSampler,vBaseWeightUV+uvOffset);
#endif
#ifdef BASE_COLOR
vec4 baseColorFromTexture=texture2D(baseColorSampler,vBaseColorUV+uvOffset);
#endif
#ifdef BASE_METALNESS
vec4 metallicFromTexture=texture2D(baseMetalnessSampler,vBaseMetalnessUV+uvOffset);
#endif
#if defined(ROUGHNESSSTOREINMETALMAPGREEN) && defined(BASE_METALNESS)
float roughnessFromTexture=metallicFromTexture.g;
#elif defined(SPECULAR_ROUGHNESS)
float roughnessFromTexture=texture2D(specularRoughnessSampler,vSpecularRoughnessUV+uvOffset).r;
#endif
#ifdef GEOMETRY_TANGENT
vec3 geometryTangentFromTexture=texture2D(geometryTangentSampler,vGeometryTangentUV+uvOffset).rgb;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
float anisotropyFromTexture=texture2D(specularRoughnessAnisotropySampler,vSpecularRoughnessAnisotropyUV+uvOffset).r*vSpecularRoughnessAnisotropyInfos.y;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
float baseDiffuseRoughnessFromTexture=texture2D(baseDiffuseRoughnessSampler,vBaseDiffuseRoughnessUV+uvOffset).r;
#endif
#ifdef GEOMETRY_OPACITY
vec4 opacityFromTexture=texture2D(geometryOpacitySampler,vGeometryOpacityUV+uvOffset);
#endif
#ifdef DECAL
vec4 decalFromTexture=texture2D(decalSampler,vDecalUV+uvOffset);
#endif
#ifdef SPECULAR_COLOR
vec4 specularColorFromTexture=texture2D(specularColorSampler,vSpecularColorUV+uvOffset);
#endif
#ifdef SPECULAR_WEIGHT
#ifdef SPECULAR_WEIGHT_IN_ALPHA
float specularWeightFromTexture=texture2D(specularWeightSampler,vSpecularWeightUV+uvOffset).a;
#else
float specularWeightFromTexture=texture2D(specularWeightSampler,vSpecularWeightUV+uvOffset).r;
#endif
#endif
#if defined(ANISOTROPIC) || defined(FUZZ)
vec3 noise=texture2D(blueNoiseSampler,gl_FragCoord.xy/256.0).xyz;
#endif
base_color=vBaseColor.rgb;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
base_color*=vColor.rgb;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
base_color*=vec3(vBaseWeight);alpha=vBaseColor.a;base_metalness=vReflectanceInfo.x;base_diffuse_roughness=vBaseDiffuseRoughness;specular_roughness=vReflectanceInfo.y;specular_color=vSpecularColor.rgb;specular_weight=vReflectanceInfo.a;specular_ior=vReflectanceInfo.z;specular_roughness_anisotropy=vSpecularAnisotropy.b;geometry_tangent=vSpecularAnisotropy.rg;
#ifdef BASE_COLOR
#ifdef BASE_COLOR_GAMMA
base_color*=toLinearSpace(baseColorFromTexture.rgb);
#else
base_color*=baseColorFromTexture.rgb;
#endif
base_color*=vBaseColorInfos.y;
#endif
#ifdef BASE_WEIGHT
base_color*=baseWeightFromTexture.r;
#endif
#if defined(BASE_COLOR) && defined(ALPHA_FROM_BASE_COLOR_TEXTURE)
alpha*=baseColorFromTexture.a;
#elif defined(GEOMETRY_OPACITY)
alpha*=opacityFromTexture.r;alpha*=vGeometryOpacityInfos.y;
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
base_diffuse_roughness*=baseDiffuseRoughnessFromTexture*vBaseDiffuseRoughnessInfos.y;
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
{vec2 tangentFromTexture=normalize(geometryTangentFromTexture.xy*2.0-1.0);float tangent_angle_texture=atan(tangentFromTexture.y,tangentFromTexture.x);float tangent_angle_uniform=atan(geometry_tangent.y,geometry_tangent.x);float tangent_angle=tangent_angle_texture+tangent_angle_uniform;geometry_tangent=vec2(cos(tangent_angle),sin(tangent_angle));}
#endif
#if defined(GEOMETRY_TANGENT) && \
defined(SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE)
specular_roughness_anisotropy*=geometryTangentFromTexture.b;
#elif defined(SPECULAR_ROUGHNESS_ANISOTROPY)
specular_roughness_anisotropy*=anisotropyFromTexture;
#endif
#ifdef DETAIL
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);float loLerp=mix(0.,specular_roughness,detailRoughness*2.);float hiLerp=mix(specular_roughness,1.,(detailRoughness-0.5)*2.);specular_roughness=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef USE_GLTF_STYLE_ANISOTROPY
float baseAlpha=specular_roughness*specular_roughness;float roughnessT=mix(baseAlpha,1.0,specular_roughness_anisotropy*specular_roughness_anisotropy);float roughnessB=baseAlpha;specular_roughness_anisotropy=1.0-roughnessB/max(roughnessT,0.00001);specular_roughness=sqrt(roughnessT/sqrt(2.0/(1.0+(1.0-specular_roughness_anisotropy)*(1.0-specular_roughness_anisotropy))));
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrBaseLayerData = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrBlockAmbientOcclusion.js":
/*!***************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrBlockAmbientOcclusion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrBlockAmbientOcclusion: () => (/* binding */ openpbrBlockAmbientOcclusion)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrBlockAmbientOcclusion";
const shader = `struct ambientOcclusionOutParams
{vec3 ambientOcclusionColor;
#if DEBUGMODE>0 && defined(AMBIENT_OCCLUSION)
vec3 ambientOcclusionColorMap;
#endif
};
#define pbr_inline
ambientOcclusionOutParams ambientOcclusionBlock(
#ifdef AMBIENT_OCCLUSION
in vec3 ambientOcclusionColorMap_,
in vec2 ambientInfos
#endif
)
{ambientOcclusionOutParams outParams;vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT_OCCLUSION
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*ambientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
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
const openpbrBlockAmbientOcclusion = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrBlockNormalFinal.js":
/*!**********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrBlockNormalFinal.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrBlockNormalFinal: () => (/* binding */ openpbrBlockNormalFinal)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrBlockNormalFinal";
const shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));coatNormalW*=sign(dot(coatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
#if defined(MIRRORED)
normalW=gl_FrontFacing ? -normalW : normalW;coatNormalW=gl_FrontFacing ? -coatNormalW : coatNormalW;
#else
normalW=gl_FrontFacing ? normalW : -normalW;coatNormalW=gl_FrontFacing ? coatNormalW : -coatNormalW;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrBlockNormalFinal = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrCoatLayerData.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrCoatLayerData.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrCoatLayerData: () => (/* binding */ openpbrCoatLayerData)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrCoatLayerData";
const shader = `float coat_weight=0.0;vec3 coat_color=vec3(1.0);float coat_roughness=0.0;float coat_roughness_anisotropy=0.0;float coat_ior=1.6;float coat_darkening=1.0;vec2 geometry_coat_tangent=vec2(1.0,0.0);
#ifdef COAT_WEIGHT
vec4 coatWeightFromTexture=texture2D(coatWeightSampler,vCoatWeightUV+uvOffset);
#endif
#ifdef COAT_COLOR
vec4 coatColorFromTexture=texture2D(coatColorSampler,vCoatColorUV+uvOffset);
#endif
#ifdef COAT_ROUGHNESS
vec4 coatRoughnessFromTexture=texture2D(coatRoughnessSampler,vCoatRoughnessUV+uvOffset);
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
float coatRoughnessAnisotropyFromTexture=texture2D(coatRoughnessAnisotropySampler,vCoatRoughnessAnisotropyUV+uvOffset).r;
#endif
#ifdef COAT_DARKENING
vec4 coatDarkeningFromTexture=texture2D(coatDarkeningSampler,vCoatDarkeningUV+uvOffset);
#endif
#ifdef GEOMETRY_COAT_TANGENT
vec3 geometryCoatTangentFromTexture=texture2D(geometryCoatTangentSampler,vGeometryCoatTangentUV+uvOffset).rgb;
#endif
coat_color=vCoatColor.rgb;coat_weight=vCoatWeight;coat_roughness=vCoatRoughness;coat_roughness_anisotropy=vCoatRoughnessAnisotropy;coat_ior=vCoatIor;coat_darkening=vCoatDarkening;geometry_coat_tangent=vGeometryCoatTangent.rg;
#ifdef COAT_WEIGHT
coat_weight*=coatWeightFromTexture.r;
#endif
#ifdef COAT_COLOR
#ifdef COAT_COLOR_GAMMA
coat_color*=toLinearSpace(coatColorFromTexture.rgb);
#else
coat_color*=coatColorFromTexture.rgb;
#endif
coat_color*=vCoatColorInfos.y;
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
{vec2 tangentFromTexture=normalize(geometryCoatTangentFromTexture.xy*2.0-1.0);float tangent_angle_texture=atan(tangentFromTexture.y,tangentFromTexture.x);float tangent_angle_uniform=atan(geometry_coat_tangent.y,geometry_coat_tangent.x);float tangent_angle=tangent_angle_texture+tangent_angle_uniform;geometry_coat_tangent=vec2(cos(tangent_angle),sin(tangent_angle));}
#endif
#ifdef USE_GLTF_STYLE_ANISOTROPY
float coatAlpha=coat_roughness*coat_roughness;float coatRoughnessT=mix(coatAlpha,1.0,coat_roughness_anisotropy*coat_roughness_anisotropy);float coatRoughnessB=coatAlpha;coat_roughness_anisotropy=1.0-coatRoughnessB/max(coatRoughnessT,0.00001);coat_roughness=sqrt(coatRoughnessT/sqrt(2.0/(1.0+(1.0-coat_roughness_anisotropy)*(1.0-coat_roughness_anisotropy))));
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrCoatLayerData = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrConductorReflectance.js":
/*!**************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrConductorReflectance.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrConductorReflectance: () => (/* binding */ openpbrConductorReflectance)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrConductorReflectance";
const shader = `#define pbr_inline
ReflectanceParams conductorReflectance(in vec3 baseColor,in vec3 specularColor,in float specularWeight)
{ReflectanceParams outParams;
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
outParams.coloredF0=baseColor*specularWeight;outParams.coloredF90=specularColor*specularWeight;
#else
outParams.coloredF0=baseColor;outParams.coloredF90=vec3(1.0);
#endif
outParams.F0=1.0;outParams.F90=1.0;return outParams;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrConductorReflectance = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrDielectricReflectance.js":
/*!***************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrDielectricReflectance.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrDielectricReflectance: () => (/* binding */ openpbrDielectricReflectance)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrDielectricReflectance";
const shader = `struct ReflectanceParams
{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};
#define pbr_inline
ReflectanceParams dielectricReflectance(
in float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight
)
{ReflectanceParams outParams;float dielectricF0=pow((insideIOR-outsideIOR)/(insideIOR+outsideIOR),2.0);float dielectricF0_NoSpec=pow((1.0-outsideIOR)/(1.0+outsideIOR),2.0);float f90Scale=clamp(2.0*abs(insideIOR-outsideIOR),0.0,1.0);float f90Scale_NoSpec=clamp(2.0*abs(1.0-outsideIOR),0.0,1.0);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
vec3 dielectricColorF90=specularColor.rgb*vec3(f90Scale);vec3 dielectricColorF90_NoSpec=specularColor.rgb*vec3(f90Scale_NoSpec);
#else
vec3 dielectricColorF90=vec3(f90Scale);vec3 dielectricColorF90_NoSpec=vec3(f90Scale_NoSpec);
#endif
#if DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_GLTF
float maxF0=max(specularColor.r,max(specularColor.g,specularColor.b));outParams.F0=mix(dielectricF0_NoSpec,dielectricF0,specularWeight)*maxF0;
#else
outParams.F0=mix(dielectricF0_NoSpec,dielectricF0,specularWeight);
#endif
outParams.F90=mix(f90Scale_NoSpec,f90Scale,specularWeight);outParams.coloredF0=mix(vec3(dielectricF0_NoSpec),vec3(dielectricF0),specularWeight)*specularColor.rgb;outParams.coloredF90=mix(dielectricColorF90_NoSpec,dielectricColorF90,specularWeight);return outParams;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrDielectricReflectance = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrDirectLighting.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrDirectLighting.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrDirectLighting: () => (/* binding */ openpbrDirectLighting)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrDirectLighting";
const shader = `#ifdef LIGHT{X}
{vec3 slab_diffuse=vec3(0.,0.,0.);vec3 slab_subsurface=vec3(0.,0.,0.);vec3 slab_translucent=vec3(0.,0.,0.);vec3 slab_glossy=vec3(0.,0.,0.);float specularFresnel=0.0;vec3 specularColoredFresnel=vec3(0.,0.,0.);vec3 slab_metal=vec3(0.,0.,0.);vec3 slab_coat=vec3(0.,0.,0.);float coatFresnel=0.0;vec3 slab_fuzz=vec3(0.,0.,0.);float fuzzFresnel=0.0;
#ifdef HEMILIGHT{X}
slab_diffuse=computeHemisphericDiffuseLighting(preInfo{X},lightColor{X}.rgb,light{X}.vLightGround);
#elif defined(AREALIGHT{X})
slab_diffuse=computeAreaDiffuseLighting(preInfo{X},lightColor{X}.rgb);
#else
slab_diffuse=computeDiffuseLighting(preInfo{X},lightColor{X}.rgb);
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
slab_diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},textureProjectionMatrix{X},vPositionW);
#endif
numLights+=1.0;
#ifdef FUZZ
float fuzzNdotH=max(dot(fuzzNormalW,preInfo{X}.H),0.0);vec3 fuzzBrdf=getFuzzBRDFLookup(fuzzNdotH,sqrt(fuzz_roughness));
#endif
#ifdef THIN_FILM
float thin_film_desaturation_scale=(thin_film_ior-1.0)*sqrt(thin_film_thickness*0.001);
#endif
#if AREALIGHT{X}
slab_glossy=computeAreaSpecularLighting(preInfo{X},light{X}.vLightSpecular.rgb,baseConductorReflectance.F0,baseConductorReflectance.F90);
#else
{
#ifdef ANISOTROPIC_BASE
slab_glossy=computeAnisotropicSpecularLighting(preInfo{X},viewDirectionW,normalW,
baseGeoInfo.anisotropicTangent,baseGeoInfo.anisotropicBitangent,baseGeoInfo.anisotropy,
0.0,lightColor{X}.rgb);
#else
slab_glossy=computeSpecularLighting(preInfo{X},normalW,vec3(1.0),vec3(1.0),specular_roughness,lightColor{X}.rgb);
#endif
float NdotH=dot(normalW,preInfo{X}.H);specularFresnel=fresnelSchlickGGX(NdotH,baseDielectricReflectance.F0,baseDielectricReflectance.F90);specularColoredFresnel=specularFresnel*specular_color;
#ifdef THIN_FILM
float thinFilmIorScale=clamp(2.0*abs(thin_film_ior-1.0),0.0,1.0);vec3 thinFilmDielectricFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,preInfo{X}.VdotH,thin_film_thickness,baseDielectricReflectance.coloredF0);thinFilmDielectricFresnel=mix(thinFilmDielectricFresnel,vec3(dot(thinFilmDielectricFresnel,vec3(0.3333))),thin_film_desaturation_scale);specularColoredFresnel=mix(specularColoredFresnel,thinFilmDielectricFresnel*specular_color,thin_film_weight*thinFilmIorScale);
#endif
}
#endif
#if AREALIGHT{X}
slab_metal=computeAreaSpecularLighting(preInfo{X},light{X}.vLightSpecular.rgb,baseConductorReflectance.F0,baseConductorReflectance.F90);
#else
{
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 coloredFresnel=getF82Specular(preInfo{X}.VdotH,baseConductorReflectance.coloredF0,baseConductorReflectance.coloredF90,specular_roughness);
#else
vec3 coloredFresnel=fresnelSchlickGGX(preInfo{X}.VdotH,baseConductorReflectance.coloredF0,baseConductorReflectance.coloredF90);
#endif
#ifdef THIN_FILM
float thinFilmIorScale=clamp(2.0*abs(thin_film_ior-1.0),0.0,1.0);vec3 thinFilmConductorFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,preInfo{X}.VdotH,thin_film_thickness,baseConductorReflectance.coloredF0);thinFilmConductorFresnel=mix(thinFilmConductorFresnel,vec3(dot(thinFilmConductorFresnel,vec3(0.3333))),thin_film_desaturation_scale);coloredFresnel=mix(coloredFresnel,specular_weight*thinFilmIorScale*thinFilmConductorFresnel,thin_film_weight);
#endif
#ifdef ANISOTROPIC_BASE
slab_metal=computeAnisotropicSpecularLighting(preInfo{X},viewDirectionW,normalW,baseGeoInfo.anisotropicTangent,baseGeoInfo.anisotropicBitangent,baseGeoInfo.anisotropy,0.0,lightColor{X}.rgb);
#else
slab_metal=computeSpecularLighting(preInfo{X},normalW,vec3(1.0),coloredFresnel,specular_roughness,lightColor{X}.rgb);
#endif
}
#endif
#if AREALIGHT{X}
slab_coat=computeAreaSpecularLighting(preInfoCoat{X},light{X}.vLightSpecular.rgb,coatReflectance.F0,coatReflectance.F90);
#else
{
#ifdef ANISOTROPIC_COAT
slab_coat=computeAnisotropicSpecularLighting(preInfoCoat{X},viewDirectionW,coatNormalW,
coatGeoInfo.anisotropicTangent,coatGeoInfo.anisotropicBitangent,coatGeoInfo.anisotropy,
0.0,lightColor{X}.rgb);
#else
slab_coat=computeSpecularLighting(preInfoCoat{X},coatNormalW,vec3(coatReflectance.F0),vec3(1.0),coat_roughness,lightColor{X}.rgb);
#endif
float NdotH=dot(coatNormalW,preInfoCoat{X}.H);coatFresnel=fresnelSchlickGGX(NdotH,coatReflectance.F0,coatReflectance.F90);}
#endif
vec3 coatAbsorption=vec3(1.0);if (coat_weight>0.0) {float cosTheta_view=max(preInfoCoat{X}.NdotV,0.001);float cosTheta_light=max(preInfoCoat{X}.NdotL,0.001);float fresnel_view=coatReflectance.F0+(1.0-coatReflectance.F0)*pow(1.0-cosTheta_view,5.0);float fresnel_light=coatReflectance.F0+(1.0-coatReflectance.F0)*pow(1.0-cosTheta_light,5.0);float averageReflectance=(fresnel_view+fresnel_light)*0.5;float darkened_transmission=(1.0-averageReflectance)/(1.0+averageReflectance);darkened_transmission=mix(1.0,darkened_transmission,coat_darkening);float sin2=1.0-cosTheta_view*cosTheta_view;sin2=sin2/(coat_ior*coat_ior);float cos_t=sqrt(1.0-sin2);float coatPathLength=1.0/cos_t;vec3 colored_transmission=pow(coat_color,vec3(coatPathLength));coatAbsorption=mix(vec3(1.0),colored_transmission*darkened_transmission,coat_weight);}
#ifdef FUZZ
fuzzFresnel=fuzzBrdf.z;vec3 fuzzNormalW=mix(normalW,coatNormalW,coat_weight);float fuzzNdotV=max(dot(fuzzNormalW,viewDirectionW.xyz),0.0);float fuzzNdotL=max(dot(fuzzNormalW,preInfo{X}.L),0.0);slab_fuzz=lightColor{X}.rgb*preInfo{X}.attenuation*evalFuzz(preInfo{X}.L,fuzzNdotL,fuzzNdotV,fuzzTangent,fuzzBitangent,fuzzBrdf);
#else
vec3 fuzz_color=vec3(0.0);
#endif
slab_diffuse*=base_color.rgb;vec3 material_opaque_base=mix(slab_diffuse,slab_subsurface,subsurface_weight);vec3 material_dielectric_base=mix(material_opaque_base,slab_translucent,transmission_weight);vec3 material_dielectric_gloss=material_dielectric_base*(1.0-specularFresnel)+slab_glossy*specularColoredFresnel;vec3 material_base_substrate=mix(material_dielectric_gloss,slab_metal,base_metalness);vec3 material_coated_base=layer(material_base_substrate,slab_coat,coatFresnel,coatAbsorption,vec3(1.0));material_surface_direct+=layer(material_coated_base,slab_fuzz,fuzzFresnel*fuzz_weight,vec3(1.0),fuzz_color);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrDirectLighting = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrDirectLightingInit.js":
/*!************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrDirectLightingInit.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrDirectLightingInit: () => (/* binding */ openpbrDirectLightingInit)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrDirectLightingInit";
const shader = `#ifdef LIGHT{X}
preLightingInfo preInfo{X};preLightingInfo preInfoCoat{X};vec4 lightColor{X}=light{X}.vLightDiffuse;float shadow{X}=1.;
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
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
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
preInfo{X}.attenuation=1.0;
#endif
preInfoCoat{X}.attenuation=preInfo{X}.attenuation;
#if defined(HEMILIGHT{X}) || defined(AREALIGHT{X})
preInfo{X}.roughness=specular_roughness;preInfoCoat{X}.roughness=coat_roughness;
#else
preInfo{X}.roughness=adjustRoughnessFromLightProperties(specular_roughness,light{X}.vLightSpecular.a,preInfo{X}.lightDistance);preInfoCoat{X}.roughness=adjustRoughnessFromLightProperties(coat_roughness,light{X}.vLightSpecular.a,preInfoCoat{X}.lightDistance);
#endif
preInfo{X}.diffuseRoughness=base_diffuse_roughness;preInfo{X}.surfaceAlbedo=base_color.rgb;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrDirectLightingInit = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrEnvironmentLighting.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrEnvironmentLighting.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrEnvironmentLighting: () => (/* binding */ openpbrEnvironmentLighting)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrEnvironmentLighting";
const shader = `#ifdef REFLECTION
#ifdef FUZZ
vec3 environmentFuzzBrdf=getFuzzBRDFLookup(fuzzGeoInfo.NdotV,sqrt(fuzz_roughness));
#endif
vec3 baseDiffuseEnvironmentLight=sampleIrradiance(
normalW
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
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
#endif
,vReflectionInfos
,viewDirectionW
,base_diffuse_roughness
,base_color
);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.,0.,0.);
#else
vec2 reflectionCoords=vec2(0.,0.);
#endif
float specularAlphaG=specular_roughness*specular_roughness;
#ifdef ANISOTROPIC_BASE
vec3 baseSpecularEnvironmentLight=sampleRadianceAnisotropic(specularAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,baseGeoInfo
,normalW
,viewDirectionW
,vPositionW
,noise
,reflectionSampler
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#else
reflectionCoords=createReflectionCoords(vPositionW,normalW);vec3 baseSpecularEnvironmentLight=sampleRadiance(specularAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,baseGeoInfo
,reflectionSampler
,reflectionCoords
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#endif
#ifdef ANISOTROPIC_BASE
baseSpecularEnvironmentLight=mix(baseSpecularEnvironmentLight.rgb,baseDiffuseEnvironmentLight,specularAlphaG*specularAlphaG*max(1.0-baseGeoInfo.anisotropy,0.3));
#else
baseSpecularEnvironmentLight=mix(baseSpecularEnvironmentLight.rgb,baseDiffuseEnvironmentLight,specularAlphaG);
#endif
vec3 coatEnvironmentLight=vec3(0.,0.,0.);if (coat_weight>0.0) {
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.,0.,0.);
#else
vec2 reflectionCoords=vec2(0.,0.);
#endif
reflectionCoords=createReflectionCoords(vPositionW,coatNormalW);float coatAlphaG=coat_roughness*coat_roughness;
#ifdef ANISOTROPIC_COAT
coatEnvironmentLight=sampleRadianceAnisotropic(coatAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,coatGeoInfo
,coatNormalW
,viewDirectionW
,vPositionW
,noise
,reflectionSampler
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#else
coatEnvironmentLight=sampleRadiance(coatAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,coatGeoInfo
,reflectionSampler
,reflectionCoords
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#endif
}
#ifdef FUZZ
float modifiedFuzzRoughness=clamp(fuzz_roughness*(1.0-0.5*environmentFuzzBrdf.y),0.0,1.0);vec3 fuzzEnvironmentLight=vec3(0.0);float totalWeight=0.0;float fuzzIblFresnel=sqrt(environmentFuzzBrdf.z);for (int i=0; i<FUZZ_IBL_SAMPLES; ++i) {float angle=(float(i)+noise.x)*(3.141592*2.0/float(FUZZ_IBL_SAMPLES));vec3 fiberCylinderNormal=normalize(cos(angle)*fuzzTangent+sin(angle)*fuzzBitangent);float fiberBend=min(environmentFuzzBrdf.x*environmentFuzzBrdf.x*modifiedFuzzRoughness,1.0);fiberCylinderNormal=normalize(mix(fiberCylinderNormal,fuzzNormalW,fiberBend));float sampleWeight=max(dot(viewDirectionW,fiberCylinderNormal),0.0);vec3 fuzzReflectionCoords=createReflectionCoords(vPositionW,fiberCylinderNormal);vec3 radianceSample=sampleRadiance(modifiedFuzzRoughness,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,fuzzGeoInfo
,reflectionSampler
,fuzzReflectionCoords
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);fuzzEnvironmentLight+=sampleWeight*mix(radianceSample,baseDiffuseEnvironmentLight,fiberBend);totalWeight+=sampleWeight;}
fuzzEnvironmentLight/=totalWeight;
#endif
float dielectricIblFresnel=getReflectanceFromBRDFLookup(vec3(baseDielectricReflectance.F0),vec3(baseDielectricReflectance.F90),baseGeoInfo.environmentBrdf).r;vec3 dielectricIblColoredFresnel=dielectricIblFresnel*specular_color;
#ifdef THIN_FILM
float thinFilmIorScale=clamp(2.0*abs(thin_film_ior-1.0),0.0,1.0);vec3 thinFilmDielectricFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,baseGeoInfo.NdotV,thin_film_thickness,baseDielectricReflectance.coloredF0);float thin_film_desaturation_scale=(thin_film_ior-1.0)*sqrt(thin_film_thickness*0.001*baseGeoInfo.NdotV);thinFilmDielectricFresnel=mix(thinFilmDielectricFresnel,vec3(dot(thinFilmDielectricFresnel,vec3(0.3333))),thin_film_desaturation_scale);dielectricIblColoredFresnel=mix(dielectricIblColoredFresnel,thinFilmDielectricFresnel*specular_color,thin_film_weight*thinFilmIorScale);
#endif
vec3 conductorIblFresnel=conductorIblFresnel(baseConductorReflectance,baseGeoInfo.NdotV,specular_roughness,baseGeoInfo.environmentBrdf);
#ifdef THIN_FILM
vec3 thinFilmConductorFresnel=specular_weight*evalIridescence(thin_film_outside_ior,thin_film_ior,baseGeoInfo.NdotV,thin_film_thickness,baseConductorReflectance.coloredF0);thinFilmConductorFresnel=mix(thinFilmConductorFresnel,vec3(dot(thinFilmConductorFresnel,vec3(0.3333))),thin_film_desaturation_scale);conductorIblFresnel=mix(conductorIblFresnel,thinFilmConductorFresnel,thin_film_weight*thinFilmIorScale);
#endif
float coatIblFresnel=0.0;if (coat_weight>0.0) {coatIblFresnel=getReflectanceFromBRDFLookup(vec3(coatReflectance.F0),vec3(coatReflectance.F90),coatGeoInfo.environmentBrdf).r;}
vec3 slab_diffuse_ibl=vec3(0.,0.,0.);vec3 slab_glossy_ibl=vec3(0.,0.,0.);vec3 slab_metal_ibl=vec3(0.,0.,0.);vec3 slab_coat_ibl=vec3(0.,0.,0.);slab_diffuse_ibl=baseDiffuseEnvironmentLight*vLightingIntensity.z;slab_diffuse_ibl*=aoOut.ambientOcclusionColor;slab_glossy_ibl=baseSpecularEnvironmentLight*vLightingIntensity.z;slab_metal_ibl=baseSpecularEnvironmentLight*conductorIblFresnel*vLightingIntensity.z;vec3 coatAbsorption=vec3(1.0);if (coat_weight>0.0) {slab_coat_ibl=coatEnvironmentLight*vLightingIntensity.z;float hemisphere_avg_fresnel=coatReflectance.F0+0.5*(1.0-coatReflectance.F0);float averageReflectance=(coatIblFresnel+hemisphere_avg_fresnel)*0.5;float roughnessFactor=1.0-coat_roughness*0.5;averageReflectance*=roughnessFactor;float darkened_transmission=(1.0-averageReflectance)*(1.0-averageReflectance);darkened_transmission=mix(1.0,darkened_transmission,coat_darkening);float sin2=1.0-coatGeoInfo.NdotV*coatGeoInfo.NdotV;sin2=sin2/(coat_ior*coat_ior);float cos_t=sqrt(1.0-sin2);float coatPathLength=1.0/cos_t;vec3 colored_transmission=pow(coat_color,vec3(coatPathLength));coatAbsorption=mix(vec3(1.0),colored_transmission*darkened_transmission,coat_weight);}
#ifdef FUZZ
vec3 slab_fuzz_ibl=fuzzEnvironmentLight*vLightingIntensity.z;
#endif
vec3 slab_subsurface_ibl=vec3(0.,0.,0.);vec3 slab_translucent_base_ibl=vec3(0.,0.,0.);slab_diffuse_ibl*=base_color.rgb;
#define CUSTOM_FRAGMENT_BEFORE_IBLLAYERCOMPOSITION
vec3 material_opaque_base_ibl=mix(slab_diffuse_ibl,slab_subsurface_ibl,subsurface_weight);vec3 material_dielectric_base_ibl=mix(material_opaque_base_ibl,slab_translucent_base_ibl,transmission_weight);vec3 material_dielectric_gloss_ibl=material_dielectric_base_ibl*(1.0-dielectricIblFresnel)+slab_glossy_ibl*dielectricIblColoredFresnel;vec3 material_base_substrate_ibl=mix(material_dielectric_gloss_ibl,slab_metal_ibl,base_metalness);vec3 material_coated_base_ibl=layer(material_base_substrate_ibl,slab_coat_ibl,coatIblFresnel,coatAbsorption,vec3(1.0));
#ifdef FUZZ
material_surface_ibl=layer(material_coated_base_ibl,slab_fuzz_ibl,fuzzIblFresnel*fuzz_weight,vec3(1.0),fuzz_color);
#else
material_surface_ibl=material_coated_base_ibl;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrEnvironmentLighting = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrFragmentDeclaration.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrFragmentDeclaration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrFragmentDeclaration: () => (/* binding */ openpbrFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/decalFragmentDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "openpbrFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vCoatWeight;uniform vec3 vCoatColor;uniform float vCoatRoughness;uniform float vCoatRoughnessAnisotropy;uniform float vCoatIor;uniform float vCoatDarkening;uniform float vFuzzWeight;uniform vec3 vFuzzColor;uniform float vFuzzRoughness;uniform vec2 vGeometryCoatTangent;uniform vec3 vEmissionColor;uniform float vThinFilmWeight;uniform vec2 vThinFilmThickness;uniform float vThinFilmIor;uniform vec4 vLightingIntensity;uniform float visibility;
#ifdef BASE_COLOR
uniform vec2 vBaseColorInfos;
#endif
#ifdef BASE_WEIGHT
uniform vec2 vBaseWeightInfos;
#endif
#ifdef BASE_METALNESS
uniform vec2 vBaseMetalnessInfos;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef SPECULAR_WEIGHT
uniform vec2 vSpecularWeightInfos;
#endif
#ifdef SPECULAR_COLOR
uniform vec2 vSpecularColorInfos;
#endif
#ifdef SPECULAR_ROUGHNESS
uniform vec2 vSpecularRoughnessInfos;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
uniform vec2 vSpecularRoughnessAnisotropyInfos;
#endif
#ifdef SPECULAR_IOR
uniform vec2 vSpecularIorInfos;
#endif
#ifdef AMBIENT_OCCLUSION
uniform vec2 vAmbientOcclusionInfos;
#endif
#ifdef GEOMETRY_NORMAL
uniform vec2 vGeometryNormalInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef GEOMETRY_TANGENT
uniform vec2 vGeometryTangentInfos;
#endif
#ifdef GEOMETRY_COAT_NORMAL
uniform vec2 vGeometryCoatNormalInfos;
#endif
#ifdef GEOMETRY_OPACITY
uniform vec2 vGeometryOpacityInfos;
#endif
#ifdef EMISSION_COLOR
uniform vec2 vEmissionColorInfos;
#endif
#ifdef COAT_WEIGHT
uniform vec2 vCoatWeightInfos;
#endif
#ifdef COAT_COLOR
uniform vec2 vCoatColorInfos;
#endif
#ifdef COAT_ROUGHNESS
uniform vec2 vCoatRoughnessInfos;
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
uniform vec2 vCoatRoughnessAnisotropyInfos;
#endif
#ifdef COAT_IOR
uniform vec2 vCoatIorInfos;
#endif
#ifdef COAT_DARKENING
uniform vec2 vCoatDarkeningInfos;
#endif
#ifdef FUZZ_WEIGHT
uniform vec2 vFuzzWeightInfos;
#endif
#ifdef FUZZ_COLOR
uniform vec2 vFuzzColorInfos;
#endif
#ifdef FUZZ_ROUGHNESS
uniform vec2 vFuzzRoughnessInfos;
#endif
#ifdef GEOMETRY_COAT_TANGENT
uniform vec2 vGeometryCoatTangentInfos;
#endif
#ifdef THIN_FILM_WEIGHT
uniform vec2 vThinFilmWeightInfos;
#endif
#ifdef THIN_FILM_THICKNESS
uniform vec2 vThinFilmThicknessInfos;
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
const openpbrFragmentDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrFragmentSamplersDeclaration.js":
/*!*********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrFragmentSamplersDeclaration.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrFragmentSamplersDeclaration: () => (/* binding */ openpbrFragmentSamplersDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js");
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
#ifdef FUZZENVIRONMENTBRDF
uniform sampler2D environmentFuzzBrdfSampler;
#endif
#if defined(ANISOTROPIC) || defined(FUZZ)
uniform sampler2D blueNoiseSampler;
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
const openpbrFragmentSamplersDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrFuzzLayerData.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrFuzzLayerData.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrFuzzLayerData: () => (/* binding */ openpbrFuzzLayerData)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrFuzzLayerData";
const shader = `float fuzz_weight=0.0;vec3 fuzz_color=vec3(1.0);float fuzz_roughness=0.0;
#ifdef FUZZ
#ifdef FUZZ_WEIGHT
vec4 fuzzWeightFromTexture=texture2D(fuzzWeightSampler,vFuzzWeightUV+uvOffset);
#endif
#ifdef FUZZ_COLOR
vec4 fuzzColorFromTexture=texture2D(fuzzColorSampler,vFuzzColorUV+uvOffset);
#endif
#ifdef FUZZ_ROUGHNESS
vec4 fuzzRoughnessFromTexture=texture2D(fuzzRoughnessSampler,vFuzzRoughnessUV+uvOffset);
#endif
fuzz_color=vFuzzColor.rgb;fuzz_weight=vFuzzWeight;fuzz_roughness=vFuzzRoughness;
#ifdef FUZZ_WEIGHT
fuzz_weight*=fuzzWeightFromTexture.r;
#endif
#ifdef FUZZ_COLOR
#ifdef FUZZ_COLOR_GAMMA
fuzz_color*=toLinearSpace(fuzzColorFromTexture.rgb);
#else
fuzz_color*=fuzzColorFromTexture.rgb;
#endif
fuzz_color*=vFuzzColorInfos.y;
#endif
#if defined(FUZZ_ROUGHNESS) && defined(FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA)
fuzz_roughness*=fuzzRoughnessFromTexture.a;
#elif defined(FUZZ_ROUGHNESS)
fuzz_roughness*=fuzzRoughnessFromTexture.r;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrFuzzLayerData = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrGeometryInfo.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrGeometryInfo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrGeometryInfo: () => (/* binding */ openpbrGeometryInfo)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrGeometryInfo";
const shader = `struct geometryInfoOutParams
{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams
{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;mat3 TBN;};
#define pbr_inline
geometryInfoOutParams geometryInfo(
in vec3 normalW,in vec3 viewDirectionW,in float roughness,in vec3 geometricNormalW
)
{geometryInfoOutParams outParams;outParams.NdotVUnclamped=dot(normalW,viewDirectionW);outParams.NdotV=absEps(outParams.NdotVUnclamped);
#if defined(ENVIRONMENTBRDF)
outParams.environmentBrdf=getBRDFLookup(outParams.NdotV,roughness);
#else
outParams.environmentBrdf=vec3(0.0);
#endif
outParams.horizonOcclusion=1.0;
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
#define pbr_inline
geometryInfoAnisoOutParams geometryInfoAniso(
in vec3 normalW,in vec3 viewDirectionW,in float roughness,in vec3 geometricNormalW
,in vec3 vAnisotropy,in mat3 TBN
)
{geometryInfoOutParams geoInfo=geometryInfo(normalW,viewDirectionW,roughness,geometricNormalW);geometryInfoAnisoOutParams outParams;outParams.NdotV=geoInfo.NdotV;outParams.NdotVUnclamped=geoInfo.NdotVUnclamped;outParams.environmentBrdf=geoInfo.environmentBrdf;outParams.horizonOcclusion=geoInfo.horizonOcclusion;outParams.anisotropy=vAnisotropy.b;vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));outParams.anisotropicTangent=normalize(anisoTBN*anisotropyDirection);outParams.anisotropicBitangent=normalize(cross(anisoTBN[2],outParams.anisotropicTangent));outParams.TBN=TBN;return outParams;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrGeometryInfo = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrIblFunctions.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrIblFunctions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrIblFunctions: () => (/* binding */ openpbrIblFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrIblFunctions";
const shader = `#ifdef REFLECTION
vec3 sampleIrradiance(
in vec3 surfaceNormal
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,in vec3 vEnvironmentIrradianceSH
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,in mat4 iblMatrix
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
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
,in vec2 vReflectionInfos
,in vec3 viewDirectionW
,in float diffuseRoughness
,in vec3 surfaceAlbedo
) {vec3 environmentIrradiance=vec3(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
vec3 irradianceVector=(iblMatrix*vec4(surfaceNormal,0)).xyz;vec3 irradianceView=(iblMatrix*vec4(viewDirectionW,0)).xyz;
#if !defined(USE_IRRADIANCE_DOMINANT_DIRECTION) && !defined(REALTIME_FILTERING)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
{float NdotV=max(dot(surfaceNormal,viewDirectionW),0.0);irradianceVector=mix(irradianceVector,irradianceView,(0.5*(1.0-NdotV))*diffuseRoughness);}
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
environmentIrradiance=vEnvironmentIrradianceSH;
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
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec4 environmentIrradianceFromTexture=sampleReflection(irradianceSampler,irradianceVector);
#else
vec4 environmentIrradianceFromTexture=sampleReflection(irradianceSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradianceFromTexture.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradianceFromTexture);
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
environmentIrradiance*=vReflectionInfos.x;return environmentIrradiance;}
#define pbr_inline
#ifdef REFLECTIONMAP_3D
vec3 createReflectionCoords(
#else
vec2 createReflectionCoords(
#endif
in vec3 vPositionW
,in vec3 normalW
)
{vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
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
return reflectionCoords;}
#define pbr_inline
#define inline
vec3 sampleRadiance(
in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in geometryInfoOutParams geoInfo
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
,const vec3 reflectionCoords
#else
,in sampler2D reflectionSampler
,const vec2 reflectionCoords
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
)
{vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,geoInfo.NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
environmentRadiance.rgb*=vec3(vReflectionInfos.x);return environmentRadiance.rgb;}
#if defined(ANISOTROPIC)
#define pbr_inline
#define inline
vec3 sampleRadianceAnisotropic(
in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in geometryInfoAnisoOutParams geoInfo
,const vec3 normalW
,const vec3 viewDirectionW
,const vec3 positionW
,const vec3 noise
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
)
{vec4 environmentRadiance=vec4(0.,0.,0.,0.);float alphaT=alphaG*sqrt(2.0/(1.0+(1.0-geoInfo.anisotropy)*(1.0-geoInfo.anisotropy)));float alphaB=(1.0-geoInfo.anisotropy)*alphaT;alphaG=alphaB;
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,geoInfo.NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef REALTIME_FILTERING
vec3 view=(reflectionMatrix*vec4(viewDirectionW,0.0)).xyz;vec3 tangent=(reflectionMatrix*vec4(geoInfo.anisotropicTangent,0.0)).xyz;vec3 bitangent=(reflectionMatrix*vec4(geoInfo.anisotropicBitangent,0.0)).xyz;vec3 normal=(reflectionMatrix*vec4(normalW,0.0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
view.z*=-1.0;tangent.z*=-1.0;bitangent.z*=-1.0;normal.z*=-1.0;
#endif
environmentRadiance =
vec4(radianceAnisotropic(alphaT,alphaB,reflectionSampler,
view,tangent,
bitangent,normal,
vReflectionFilteringInfo,noise.xy),
1.0);
#else
const int samples=16;vec4 radianceSample=vec4(0.0);vec3 reflectionCoords=vec3(0.0);float sample_weight=0.0;float total_weight=0.0;float step=1.0/float(max(samples-1,1));for (int i=0; i<samples; ++i) {float t=mix(-1.0,1.0,float(i)*step);t+=step*2.0*noise.x;sample_weight=max(1.0-abs(t),0.001);sample_weight*=sample_weight;t*=min(4.0*alphaT*geoInfo.anisotropy,1.0);vec3 bentNormal;if (t<0.0) {float blend=t+1.0;bentNormal=normalize(mix(-geoInfo.anisotropicTangent,normalW,blend));} else if (t>0.0) {float blend=t;bentNormal=normalize(mix(normalW,geoInfo.anisotropicTangent,blend));} else {bentNormal=normalW;}
reflectionCoords=createReflectionCoords(positionW,bentNormal);radianceSample=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#ifdef RGBDREFLECTION
environmentRadiance.rgb+=sample_weight*fromRGBD(radianceSample);
#elif defined(GAMMAREFLECTION)
environmentRadiance.rgb+=sample_weight*toLinearSpace(radianceSample.rgb);
#else
environmentRadiance.rgb+=sample_weight*radianceSample.rgb;
#endif
total_weight+=sample_weight;}
environmentRadiance=vec4(environmentRadiance.xyz/float(total_weight),1.0);
#endif
environmentRadiance.rgb*=vec3(vReflectionInfos.x);return environmentRadiance.rgb;}
#endif
#define pbr_inline
vec3 conductorIblFresnel(in ReflectanceParams reflectance,in float NdotV,in float roughness,in vec3 environmentBrdf)
{
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 albedoF0=mix(reflectance.coloredF0,pow(reflectance.coloredF0,vec3(1.4)),roughness);return getF82Specular(NdotV,albedoF0,reflectance.coloredF90,roughness);
#else
return getReflectanceFromBRDFLookup(reflectance.coloredF0,reflectance.coloredF90,environmentBrdf);
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrIblFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragment.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragment.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapFragment: () => (/* binding */ openpbrNormalMapFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapFragment";
const shader = `vec2 uvOffset=vec2(0.0,0.0);
#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(GEOMETRY_NORMAL)
float normalScale=vGeometryNormalInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(GEOMETRY_NORMAL)
vec2 TBNUV=gl_FrontFacing ? vGeometryNormalUV : -vGeometryNormalUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
#else
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);vec2 detailNormalRG=detailColor.wy*2.0-1.0;float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef GEOMETRY_COAT_NORMAL
coatNormalW=perturbNormal(TBN,texture2D(geometryCoatNormalSampler,vGeometryCoatNormalUV+uvOffset).xyz,vGeometryCoatNormalInfos.y);
#endif
#ifdef GEOMETRY_NORMAL
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(geometryNormalSampler,vGeometryNormalUV).xyz *2.0-1.0);normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(geometryNormalSampler,vGeometryNormalUV+uvOffset).xyz,vGeometryNormalInfos.y);
#else
vec3 sampledNormal=texture2D(geometryNormalSampler,vGeometryNormalUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;vec3 blendedNormal=normalize(vec3(sampledNormal.xy+detailNormal.xy,sampledNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;sampledNormal+=vec3(0.0,0.0,1.0);detailNormal*=vec3(-1.0,-1.0,1.0);vec3 blendedNormal=sampledNormal*dot(sampledNormal,detailNormal)/sampledNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vGeometryNormalInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrNormalMapFragment = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragmentFunctions.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragmentFunctions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapFragmentFunctions: () => (/* binding */ openpbrNormalMapFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js");
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
const float minSamples=4.;const float maxSamples=15.;const int iMaxSamples=15;vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;vec2 vOffsetDir=normalize(vViewDirCoT.xy);vec2 vMaxOffset=vOffsetDir*parallaxLimit;float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));float stepSize=1.0/numSamples;float currRayHeight=1.0;vec2 vCurrOffset=vec2(0,0);vec2 vLastOffset=vec2(0,0);float lastSampledHeight=1.0;float currSampledHeight=1.0;bool keepWorking=true;for (int i=0; i<iMaxSamples; i++)
{currSampledHeight=texture2D(geometryNormalSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{float delta1=currSampledHeight-currRayHeight;float delta2=(currRayHeight+stepSize)-lastSampledHeight;float ratio=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{float height=texture2D(geometryNormalSampler,vGeometryNormalUV).w;vec2 texCoordOffset=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrNormalMapFragmentFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js":
/*!************************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapFragmentMainFunctions: () => (/* binding */ openpbrNormalMapFragmentMainFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapFragmentMainFunctions";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{mat4 ret=inverse(wMatrix);ret=transpose(ret);ret[0][3]=0.;ret[1][3]=0.;ret[2][3]=0.;ret[3]=vec4(0.,0.,0.,1.);return ret;}
#else
mat4 toNormalMatrix(mat4 m)
{float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;float det=max(dot(tangent,tangent),dot(bitangent,bitangent));float invmax=det==0.0 ? 0.0 : inversesqrt(det);return mat3(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrNormalMapFragmentMainFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrThinFilmLayerData.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrThinFilmLayerData.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrThinFilmLayerData: () => (/* binding */ openpbrThinFilmLayerData)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrThinFilmLayerData";
const shader = `#ifdef THIN_FILM
float thin_film_weight=vThinFilmWeight;float thin_film_thickness=vThinFilmThickness.r*1000.0; 
float thin_film_ior=vThinFilmIor;
#ifdef THIN_FILM_WEIGHT
float thinFilmWeightFromTexture=texture2D(thinFilmWeightSampler,vThinFilmWeightUV+uvOffset).r*vThinFilmWeightInfos.y;
#endif
#ifdef THIN_FILM_THICKNESS
float thinFilmThicknessFromTexture=texture2D(thinFilmThicknessSampler,vThinFilmThicknessUV+uvOffset).g*vThinFilmThicknessInfos.y;
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
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const openpbrThinFilmLayerData = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrUboDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrUboDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrUboDeclaration: () => (/* binding */ openpbrUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/Shaders/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "openpbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionMicrosurfaceInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vReflectionFilteringInfo;vec3 vReflectionDominantDirection;vec3 vReflectionColor;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;float vBaseWeight;vec4 vBaseColor;float vBaseDiffuseRoughness;vec4 vReflectanceInfo;vec4 vSpecularColor;vec3 vSpecularAnisotropy;float vCoatWeight;vec3 vCoatColor;float vCoatRoughness;float vCoatRoughnessAnisotropy;float vCoatIor;float vCoatDarkening;float vFuzzWeight;vec3 vFuzzColor;float vFuzzRoughness;vec2 vGeometryCoatTangent;vec3 vEmissionColor;float vThinFilmWeight;vec2 vThinFilmThickness;float vThinFilmIor;vec2 vBaseWeightInfos;mat4 baseWeightMatrix;vec2 vBaseColorInfos;mat4 baseColorMatrix;vec2 vBaseDiffuseRoughnessInfos;mat4 baseDiffuseRoughnessMatrix;vec2 vBaseMetalnessInfos;mat4 baseMetalnessMatrix;vec2 vSpecularWeightInfos;mat4 specularWeightMatrix;vec2 vSpecularColorInfos;mat4 specularColorMatrix;vec2 vSpecularRoughnessInfos;mat4 specularRoughnessMatrix;vec2 vSpecularRoughnessAnisotropyInfos;mat4 specularRoughnessAnisotropyMatrix;vec2 vCoatWeightInfos;mat4 coatWeightMatrix;vec2 vCoatColorInfos;mat4 coatColorMatrix;vec2 vCoatRoughnessInfos;mat4 coatRoughnessMatrix;vec2 vCoatRoughnessAnisotropyInfos;mat4 coatRoughnessAnisotropyMatrix;vec2 vCoatDarkeningInfos;mat4 coatDarkeningMatrix;vec2 vFuzzWeightInfos;mat4 fuzzWeightMatrix;vec2 vFuzzColorInfos;mat4 fuzzColorMatrix;vec2 vFuzzRoughnessInfos;mat4 fuzzRoughnessMatrix;vec2 vGeometryNormalInfos;mat4 geometryNormalMatrix;vec2 vGeometryTangentInfos;mat4 geometryTangentMatrix;vec2 vGeometryCoatNormalInfos;mat4 geometryCoatNormalMatrix;vec2 vGeometryCoatTangentInfos;mat4 geometryCoatTangentMatrix;vec2 vGeometryOpacityInfos;mat4 geometryOpacityMatrix;vec2 vEmissionColorInfos;mat4 emissionColorMatrix;vec2 vThinFilmWeightInfos;mat4 thinFilmWeightMatrix;vec2 vThinFilmThicknessInfos;mat4 thinFilmThicknessMatrix;vec2 vAmbientOcclusionInfos;mat4 ambientOcclusionMatrix;
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
const openpbrUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/openpbr.fragment.js":
/*!************************************************!*\
  !*** ../core/dist/Shaders/openpbr.fragment.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrPixelShader: () => (/* binding */ openpbrPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_prePassDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/prePassDeclaration */ "../core/dist/Shaders/ShadersInclude/prePassDeclaration.js");
/* harmony import */ var _ShadersInclude_oitDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/oitDeclaration */ "../core/dist/Shaders/ShadersInclude/oitDeclaration.js");
/* harmony import */ var _ShadersInclude_openpbrFragmentDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/openpbrFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/openpbrFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_openpbrUboDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/openpbrUboDeclaration */ "../core/dist/Shaders/ShadersInclude/openpbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrFragmentExtraDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/pbrFragmentExtraDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrFragmentExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_lightFragmentDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/lightFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightUboDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/lightUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightUboDeclaration.js");
/* harmony import */ var _ShadersInclude_openpbrFragmentSamplersDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/openpbrFragmentSamplersDeclaration */ "../core/dist/Shaders/ShadersInclude/openpbrFragmentSamplersDeclaration.js");
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
/* harmony import */ var _ShadersInclude_openpbrNormalMapFragmentMainFunctions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapFragmentMainFunctions */ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js");
/* harmony import */ var _ShadersInclude_openpbrNormalMapFragmentFunctions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapFragmentFunctions */ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragmentFunctions.js");
/* harmony import */ var _ShadersInclude_reflectionFunction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/reflectionFunction */ "../core/dist/Shaders/ShadersInclude/reflectionFunction.js");
/* harmony import */ var _ShadersInclude_openpbrDielectricReflectance__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/openpbrDielectricReflectance */ "../core/dist/Shaders/ShadersInclude/openpbrDielectricReflectance.js");
/* harmony import */ var _ShadersInclude_openpbrConductorReflectance__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/openpbrConductorReflectance */ "../core/dist/Shaders/ShadersInclude/openpbrConductorReflectance.js");
/* harmony import */ var _ShadersInclude_openpbrBlockAmbientOcclusion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/openpbrBlockAmbientOcclusion */ "../core/dist/Shaders/ShadersInclude/openpbrBlockAmbientOcclusion.js");
/* harmony import */ var _ShadersInclude_openpbrGeometryInfo__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/openpbrGeometryInfo */ "../core/dist/Shaders/ShadersInclude/openpbrGeometryInfo.js");
/* harmony import */ var _ShadersInclude_openpbrIblFunctions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ShadersInclude/openpbrIblFunctions */ "../core/dist/Shaders/ShadersInclude/openpbrIblFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockNormalGeometric__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockNormalGeometric */ "../core/dist/Shaders/ShadersInclude/pbrBlockNormalGeometric.js");
/* harmony import */ var _ShadersInclude_openpbrNormalMapFragment__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapFragment */ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapFragment.js");
/* harmony import */ var _ShadersInclude_openpbrBlockNormalFinal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ShadersInclude/openpbrBlockNormalFinal */ "../core/dist/Shaders/ShadersInclude/openpbrBlockNormalFinal.js");
/* harmony import */ var _ShadersInclude_openpbrBaseLayerData__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ShadersInclude/openpbrBaseLayerData */ "../core/dist/Shaders/ShadersInclude/openpbrBaseLayerData.js");
/* harmony import */ var _ShadersInclude_openpbrCoatLayerData__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ShadersInclude/openpbrCoatLayerData */ "../core/dist/Shaders/ShadersInclude/openpbrCoatLayerData.js");
/* harmony import */ var _ShadersInclude_openpbrThinFilmLayerData__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ShadersInclude/openpbrThinFilmLayerData */ "../core/dist/Shaders/ShadersInclude/openpbrThinFilmLayerData.js");
/* harmony import */ var _ShadersInclude_openpbrFuzzLayerData__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ShadersInclude/openpbrFuzzLayerData */ "../core/dist/Shaders/ShadersInclude/openpbrFuzzLayerData.js");
/* harmony import */ var _ShadersInclude_depthPrePass__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ShadersInclude/depthPrePass */ "../core/dist/Shaders/ShadersInclude/depthPrePass.js");
/* harmony import */ var _ShadersInclude_openpbrEnvironmentLighting__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ShadersInclude/openpbrEnvironmentLighting */ "../core/dist/Shaders/ShadersInclude/openpbrEnvironmentLighting.js");
/* harmony import */ var _ShadersInclude_openpbrDirectLightingInit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ShadersInclude/openpbrDirectLightingInit */ "../core/dist/Shaders/ShadersInclude/openpbrDirectLightingInit.js");
/* harmony import */ var _ShadersInclude_openpbrDirectLighting__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ShadersInclude/openpbrDirectLighting */ "../core/dist/Shaders/ShadersInclude/openpbrDirectLighting.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_pbrBlockImageProcessing__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockImageProcessing */ "../core/dist/Shaders/ShadersInclude/pbrBlockImageProcessing.js");
/* harmony import */ var _ShadersInclude_pbrBlockPrePass__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ShadersInclude/pbrBlockPrePass */ "../core/dist/Shaders/ShadersInclude/pbrBlockPrePass.js");
/* harmony import */ var _ShadersInclude_oitFragment__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ShadersInclude/oitFragment */ "../core/dist/Shaders/ShadersInclude/oitFragment.js");
/* harmony import */ var _ShadersInclude_pbrDebug__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ShadersInclude/pbrDebug */ "../core/dist/Shaders/ShadersInclude/pbrDebug.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




















































const name = "openpbrPixelShader";
const shader = `#define OPENPBR_FRAGMENT_SHADER
#define CUSTOM_FRAGMENT_EXTENSION
#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || !defined(NORMAL) || defined(FORCENORMALFORWARD) || defined(SPECULARAA)
#extension GL_OES_standard_derivatives : enable
#endif
#ifdef LODBASEDMICROSFURACE
#extension GL_EXT_shader_texture_lod : enable
#endif
#define CUSTOM_FRAGMENT_BEGIN
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<prePassDeclaration>[SCENE_MRT_COUNT]
precision highp float;
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<__decl__openpbrFragment>
#include<pbrFragmentExtraDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
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
vec3 layer(vec3 slab_bottom,vec3 slab_top,float lerp_factor,vec3 bottom_multiplier,vec3 top_multiplier) {return mix(slab_bottom*bottom_multiplier,slab_top*top_multiplier,lerp_factor);}
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
vec3 coatNormalW=normalW;
#include<openpbrNormalMapFragment>
#include<openpbrBlockNormalFinal>
#include<openpbrBaseLayerData>
#include<openpbrCoatLayerData>
#include<openpbrThinFilmLayerData>
#include<openpbrFuzzLayerData>
float subsurface_weight=0.0;float transmission_weight=0.0;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
ambientOcclusionOutParams aoOut;
#ifdef AMBIENT_OCCLUSION
vec3 ambientOcclusionFromTexture=texture2D(ambientOcclusionSampler,vAmbientOcclusionUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT_OCCLUSION
ambientOcclusionFromTexture,
vAmbientOcclusionInfos
#endif
);
#ifdef ANISOTROPIC_COAT
geometryInfoAnisoOutParams coatGeoInfo=geometryInfoAniso(
coatNormalW,viewDirectionW.xyz,coat_roughness,geometricNormalW
,vec3(geometry_coat_tangent.x,geometry_coat_tangent.y,coat_roughness_anisotropy),TBN
);
#else
geometryInfoOutParams coatGeoInfo=geometryInfo(
coatNormalW,viewDirectionW.xyz,coat_roughness,geometricNormalW
);
#endif
specular_roughness=mix(specular_roughness,pow(min(1.0,pow(specular_roughness,4.0)+2.0*pow(coat_roughness,4.0)),0.25),coat_weight);
#ifdef ANISOTROPIC_BASE
geometryInfoAnisoOutParams baseGeoInfo=geometryInfoAniso(
normalW,viewDirectionW.xyz,specular_roughness,geometricNormalW
,vec3(geometry_tangent.x,geometry_tangent.y,specular_roughness_anisotropy),TBN
);
#else
geometryInfoOutParams baseGeoInfo=geometryInfo(
normalW,viewDirectionW.xyz,specular_roughness,geometricNormalW
);
#endif
#ifdef FUZZ
vec3 fuzzNormalW=normalize(mix(normalW,coatNormalW,coat_weight));vec3 fuzzTangent=normalize(TBN[0]);fuzzTangent=normalize(fuzzTangent-dot(fuzzTangent,fuzzNormalW)*fuzzNormalW);vec3 fuzzBitangent=cross(fuzzNormalW,fuzzTangent);geometryInfoOutParams fuzzGeoInfo=geometryInfo(
fuzzNormalW,viewDirectionW.xyz,fuzz_roughness,geometricNormalW
);
#endif
ReflectanceParams coatReflectance;coatReflectance=dielectricReflectance(
coat_ior 
,1.0 
,vec3(1.0)
,coat_weight
);
#ifdef THIN_FILM
float thin_film_outside_ior=mix(1.0,coat_ior,coat_weight);
#endif
ReflectanceParams baseDielectricReflectance;{float effectiveCoatIor=mix(1.0,coat_ior,coat_weight);baseDielectricReflectance=dielectricReflectance(
specular_ior 
,effectiveCoatIor 
,specular_color
,specular_weight
);}
ReflectanceParams baseConductorReflectance;baseConductorReflectance=conductorReflectance(base_color,specular_color,specular_weight);vec3 material_surface_ibl=vec3(0.,0.,0.);
#include<openpbrEnvironmentLighting>
vec3 material_surface_direct=vec3(0.,0.,0.);
#if defined(LIGHT0)
float aggShadow=0.;float numLights=0.;
#include<openpbrDirectLightingInit>[0..maxSimultaneousLights]
#include<openpbrDirectLighting>[0..maxSimultaneousLights]
#endif
vec3 material_surface_emission=vEmissionColor;
#ifdef EMISSION_COLOR
vec3 emissionColorTex=texture2D(emissionColorSampler,vEmissionColorUV+uvOffset).rgb;
#ifdef EMISSION_COLOR_GAMMA
material_surface_emission*=toLinearSpace(emissionColorTex.rgb);
#else
material_surface_emission*=emissionColorTex.rgb;
#endif
material_surface_emission*= vEmissionColorInfos.y;
#endif
material_surface_emission*=vLightingIntensity.y;
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
vec4 finalColor=vec4(material_surface_ibl+material_surface_direct+material_surface_emission,alpha);
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,0.0);
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
const openpbrPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfb3BlbnBicl9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVOQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJCYXNlTGF5ZXJEYXRhLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyQmxvY2tOb3JtYWxGaW5hbC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBickNvYXRMYXllckRhdGEudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJDb25kdWN0b3JSZWZsZWN0YW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBickRpZWxlY3RyaWNSZWZsZWN0YW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBickRpcmVjdExpZ2h0aW5nLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRGlyZWN0TGlnaHRpbmdJbml0LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRW52aXJvbm1lbnRMaWdodGluZy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBickZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJGcmFnbWVudFNhbXBsZXJzRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJGdXp6TGF5ZXJEYXRhLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyR2VvbWV0cnlJbmZvLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJySWJsRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwRnJhZ21lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBGcmFnbWVudEZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBick5vcm1hbE1hcEZyYWdtZW50TWFpbkZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBiclRoaW5GaWxtTGF5ZXJEYXRhLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyVWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL29wZW5wYnIuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJCYXNlTGF5ZXJEYXRhXCI7XG5jb25zdCBzaGFkZXIgPSBgdmVjMyBiYXNlX2NvbG9yPXZlYzMoMC44KTtmbG9hdCBiYXNlX21ldGFsbmVzcz0wLjA7ZmxvYXQgYmFzZV9kaWZmdXNlX3JvdWdobmVzcz0wLjA7ZmxvYXQgc3BlY3VsYXJfd2VpZ2h0PTEuMDtmbG9hdCBzcGVjdWxhcl9yb3VnaG5lc3M9MC4zO3ZlYzMgc3BlY3VsYXJfY29sb3I9dmVjMygxLjApO2Zsb2F0IHNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5PTAuMDtmbG9hdCBzcGVjdWxhcl9pb3I9MS41O2Zsb2F0IGFscGhhPTEuMDt2ZWMyIGdlb21ldHJ5X3RhbmdlbnQ9dmVjMigxLjAsMC4wKTtcbiNpZmRlZiBCQVNFX1dFSUdIVFxudmVjNCBiYXNlV2VpZ2h0RnJvbVRleHR1cmU9dGV4dHVyZTJEKGJhc2VXZWlnaHRTYW1wbGVyLHZCYXNlV2VpZ2h0VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9DT0xPUlxudmVjNCBiYXNlQ29sb3JGcm9tVGV4dHVyZT10ZXh0dXJlMkQoYmFzZUNvbG9yU2FtcGxlcix2QmFzZUNvbG9yVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9NRVRBTE5FU1NcbnZlYzQgbWV0YWxsaWNGcm9tVGV4dHVyZT10ZXh0dXJlMkQoYmFzZU1ldGFsbmVzc1NhbXBsZXIsdkJhc2VNZXRhbG5lc3NVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJPVUdITkVTU1NUT1JFSU5NRVRBTE1BUEdSRUVOKSAmJiBkZWZpbmVkKEJBU0VfTUVUQUxORVNTKVxuZmxvYXQgcm91Z2huZXNzRnJvbVRleHR1cmU9bWV0YWxsaWNGcm9tVGV4dHVyZS5nO1xuI2VsaWYgZGVmaW5lZChTUEVDVUxBUl9ST1VHSE5FU1MpXG5mbG9hdCByb3VnaG5lc3NGcm9tVGV4dHVyZT10ZXh0dXJlMkQoc3BlY3VsYXJSb3VnaG5lc3NTYW1wbGVyLHZTcGVjdWxhclJvdWdobmVzc1VWK3V2T2Zmc2V0KS5yO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfVEFOR0VOVFxudmVjMyBnZW9tZXRyeVRhbmdlbnRGcm9tVGV4dHVyZT10ZXh0dXJlMkQoZ2VvbWV0cnlUYW5nZW50U2FtcGxlcix2R2VvbWV0cnlUYW5nZW50VVYrdXZPZmZzZXQpLnJnYjtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZXG5mbG9hdCBhbmlzb3Ryb3B5RnJvbVRleHR1cmU9dGV4dHVyZTJEKHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weVNhbXBsZXIsdlNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weVVWK3V2T2Zmc2V0KS5yKnZTcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHlJbmZvcy55O1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9ESUZGVVNFX1JPVUdITkVTU1xuZmxvYXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NGcm9tVGV4dHVyZT10ZXh0dXJlMkQoYmFzZURpZmZ1c2VSb3VnaG5lc3NTYW1wbGVyLHZCYXNlRGlmZnVzZVJvdWdobmVzc1VWK3V2T2Zmc2V0KS5yO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfT1BBQ0lUWVxudmVjNCBvcGFjaXR5RnJvbVRleHR1cmU9dGV4dHVyZTJEKGdlb21ldHJ5T3BhY2l0eVNhbXBsZXIsdkdlb21ldHJ5T3BhY2l0eVVWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIERFQ0FMXG52ZWM0IGRlY2FsRnJvbVRleHR1cmU9dGV4dHVyZTJEKGRlY2FsU2FtcGxlcix2RGVjYWxVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUl9DT0xPUlxudmVjNCBzcGVjdWxhckNvbG9yRnJvbVRleHR1cmU9dGV4dHVyZTJEKHNwZWN1bGFyQ29sb3JTYW1wbGVyLHZTcGVjdWxhckNvbG9yVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJfV0VJR0hUXG4jaWZkZWYgU1BFQ1VMQVJfV0VJR0hUX0lOX0FMUEhBXG5mbG9hdCBzcGVjdWxhcldlaWdodEZyb21UZXh0dXJlPXRleHR1cmUyRChzcGVjdWxhcldlaWdodFNhbXBsZXIsdlNwZWN1bGFyV2VpZ2h0VVYrdXZPZmZzZXQpLmE7XG4jZWxzZVxuZmxvYXQgc3BlY3VsYXJXZWlnaHRGcm9tVGV4dHVyZT10ZXh0dXJlMkQoc3BlY3VsYXJXZWlnaHRTYW1wbGVyLHZTcGVjdWxhcldlaWdodFVWK3V2T2Zmc2V0KS5yO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopXG52ZWMzIG5vaXNlPXRleHR1cmUyRChibHVlTm9pc2VTYW1wbGVyLGdsX0ZyYWdDb29yZC54eS8yNTYuMCkueHl6O1xuI2VuZGlmXG5iYXNlX2NvbG9yPXZCYXNlQ29sb3IucmdiO1xuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYmFzZV9jb2xvcio9dkNvbG9yLnJnYjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQUxQSEEpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxuYWxwaGEqPXZDb2xvci5hO1xuI2VuZGlmXG5iYXNlX2NvbG9yKj12ZWMzKHZCYXNlV2VpZ2h0KTthbHBoYT12QmFzZUNvbG9yLmE7YmFzZV9tZXRhbG5lc3M9dlJlZmxlY3RhbmNlSW5mby54O2Jhc2VfZGlmZnVzZV9yb3VnaG5lc3M9dkJhc2VEaWZmdXNlUm91Z2huZXNzO3NwZWN1bGFyX3JvdWdobmVzcz12UmVmbGVjdGFuY2VJbmZvLnk7c3BlY3VsYXJfY29sb3I9dlNwZWN1bGFyQ29sb3IucmdiO3NwZWN1bGFyX3dlaWdodD12UmVmbGVjdGFuY2VJbmZvLmE7c3BlY3VsYXJfaW9yPXZSZWZsZWN0YW5jZUluZm8uejtzcGVjdWxhcl9yb3VnaG5lc3NfYW5pc290cm9weT12U3BlY3VsYXJBbmlzb3Ryb3B5LmI7Z2VvbWV0cnlfdGFuZ2VudD12U3BlY3VsYXJBbmlzb3Ryb3B5LnJnO1xuI2lmZGVmIEJBU0VfQ09MT1JcbiNpZmRlZiBCQVNFX0NPTE9SX0dBTU1BXG5iYXNlX2NvbG9yKj10b0xpbmVhclNwYWNlKGJhc2VDb2xvckZyb21UZXh0dXJlLnJnYik7XG4jZWxzZVxuYmFzZV9jb2xvcio9YmFzZUNvbG9yRnJvbVRleHR1cmUucmdiO1xuI2VuZGlmXG5iYXNlX2NvbG9yKj12QmFzZUNvbG9ySW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIEJBU0VfV0VJR0hUXG5iYXNlX2NvbG9yKj1iYXNlV2VpZ2h0RnJvbVRleHR1cmUucjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQkFTRV9DT0xPUikgJiYgZGVmaW5lZChBTFBIQV9GUk9NX0JBU0VfQ09MT1JfVEVYVFVSRSlcbmFscGhhKj1iYXNlQ29sb3JGcm9tVGV4dHVyZS5hO1xuI2VsaWYgZGVmaW5lZChHRU9NRVRSWV9PUEFDSVRZKVxuYWxwaGEqPW9wYWNpdHlGcm9tVGV4dHVyZS5yO2FscGhhKj12R2VvbWV0cnlPcGFjaXR5SW5mb3MueTtcbiNlbmRpZlxuI2lmZGVmIEFMUEhBVEVTVFxuI2lmIERFQlVHTU9ERSAhPSA4OFxuaWYgKGFscGhhPEFMUEhBVEVTVFZBTFVFKVxuZGlzY2FyZDtcbiNlbmRpZlxuI2lmbmRlZiBBTFBIQUJMRU5EXG5hbHBoYT0xLjA7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEJBU0VfTUVUQUxORVNTXG4jaWZkZWYgTUVUQUxMTkVTU1NUT1JFSU5NRVRBTE1BUEJMVUVcbmJhc2VfbWV0YWxuZXNzKj1tZXRhbGxpY0Zyb21UZXh0dXJlLmI7XG4jZWxzZVxuYmFzZV9tZXRhbG5lc3MqPW1ldGFsbGljRnJvbVRleHR1cmUucjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQkFTRV9ESUZGVVNFX1JPVUdITkVTU1xuYmFzZV9kaWZmdXNlX3JvdWdobmVzcyo9YmFzZURpZmZ1c2VSb3VnaG5lc3NGcm9tVGV4dHVyZSp2QmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcy55O1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJfQ09MT1JcbiNpZmRlZiBTUEVDVUxBUl9DT0xPUl9HQU1NQVxuc3BlY3VsYXJfY29sb3IqPXRvTGluZWFyU3BhY2Uoc3BlY3VsYXJDb2xvckZyb21UZXh0dXJlLnJnYik7XG4jZWxzZVxuc3BlY3VsYXJfY29sb3IqPXNwZWN1bGFyQ29sb3JGcm9tVGV4dHVyZS5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1dFSUdIVF9GUk9NX1NQRUNVTEFSX0NPTE9SX1RFWFRVUkVcbnNwZWN1bGFyX3dlaWdodCo9c3BlY3VsYXJDb2xvckZyb21UZXh0dXJlLmE7XG4jZWxpZiBkZWZpbmVkKFNQRUNVTEFSX1dFSUdIVClcbnNwZWN1bGFyX3dlaWdodCo9c3BlY3VsYXJXZWlnaHRGcm9tVGV4dHVyZTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU1BFQ1VMQVJfUk9VR0hORVNTKSB8fCAoZGVmaW5lZChST1VHSE5FU1NTVE9SRUlOTUVUQUxNQVBHUkVFTikgJiYgZGVmaW5lZChCQVNFX01FVEFMTkVTUykpXG5zcGVjdWxhcl9yb3VnaG5lc3MqPXJvdWdobmVzc0Zyb21UZXh0dXJlO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfVEFOR0VOVFxue3ZlYzIgdGFuZ2VudEZyb21UZXh0dXJlPW5vcm1hbGl6ZShnZW9tZXRyeVRhbmdlbnRGcm9tVGV4dHVyZS54eSoyLjAtMS4wKTtmbG9hdCB0YW5nZW50X2FuZ2xlX3RleHR1cmU9YXRhbih0YW5nZW50RnJvbVRleHR1cmUueSx0YW5nZW50RnJvbVRleHR1cmUueCk7ZmxvYXQgdGFuZ2VudF9hbmdsZV91bmlmb3JtPWF0YW4oZ2VvbWV0cnlfdGFuZ2VudC55LGdlb21ldHJ5X3RhbmdlbnQueCk7ZmxvYXQgdGFuZ2VudF9hbmdsZT10YW5nZW50X2FuZ2xlX3RleHR1cmUrdGFuZ2VudF9hbmdsZV91bmlmb3JtO2dlb21ldHJ5X3RhbmdlbnQ9dmVjMihjb3ModGFuZ2VudF9hbmdsZSksc2luKHRhbmdlbnRfYW5nbGUpKTt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEdFT01FVFJZX1RBTkdFTlQpICYmIFxcXG5kZWZpbmVkKFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZX0ZST01fVEFOR0VOVF9URVhUVVJFKVxuc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkqPWdlb21ldHJ5VGFuZ2VudEZyb21UZXh0dXJlLmI7XG4jZWxpZiBkZWZpbmVkKFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZKVxuc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkqPWFuaXNvdHJvcHlGcm9tVGV4dHVyZTtcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxuZmxvYXQgZGV0YWlsUm91Z2huZXNzPW1peCgwLjUsZGV0YWlsQ29sb3IuYix2RGV0YWlsSW5mb3Mudyk7ZmxvYXQgbG9MZXJwPW1peCgwLixzcGVjdWxhcl9yb3VnaG5lc3MsZGV0YWlsUm91Z2huZXNzKjIuKTtmbG9hdCBoaUxlcnA9bWl4KHNwZWN1bGFyX3JvdWdobmVzcywxLiwoZGV0YWlsUm91Z2huZXNzLTAuNSkqMi4pO3NwZWN1bGFyX3JvdWdobmVzcz1taXgobG9MZXJwLGhpTGVycCxzdGVwKGRldGFpbFJvdWdobmVzcywwLjUpKTtcbiNlbmRpZlxuI2lmZGVmIFVTRV9HTFRGX1NUWUxFX0FOSVNPVFJPUFlcbmZsb2F0IGJhc2VBbHBoYT1zcGVjdWxhcl9yb3VnaG5lc3Mqc3BlY3VsYXJfcm91Z2huZXNzO2Zsb2F0IHJvdWdobmVzc1Q9bWl4KGJhc2VBbHBoYSwxLjAsc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkqc3BlY3VsYXJfcm91Z2huZXNzX2FuaXNvdHJvcHkpO2Zsb2F0IHJvdWdobmVzc0I9YmFzZUFscGhhO3NwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5PTEuMC1yb3VnaG5lc3NCL21heChyb3VnaG5lc3NULDAuMDAwMDEpO3NwZWN1bGFyX3JvdWdobmVzcz1zcXJ0KHJvdWdobmVzc1Qvc3FydCgyLjAvKDEuMCsoMS4wLXNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5KSooMS4wLXNwZWN1bGFyX3JvdWdobmVzc19hbmlzb3Ryb3B5KSkpKTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyQmFzZUxheWVyRGF0YSA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickJsb2NrQW1iaWVudE9jY2x1c2lvblwiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBhbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zXG57dmVjMyBhbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jaWYgREVCVUdNT0RFPjAgJiYgZGVmaW5lZChBTUJJRU5UX09DQ0xVU0lPTilcbnZlYzMgYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwO1xuI2VuZGlmXG59O1xuI2RlZmluZSBwYnJfaW5saW5lXG5hbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zIGFtYmllbnRPY2NsdXNpb25CbG9jayhcbiNpZmRlZiBBTUJJRU5UX09DQ0xVU0lPTlxuaW4gdmVjMyBhbWJpZW50T2NjbHVzaW9uQ29sb3JNYXBfLFxuaW4gdmVjMiBhbWJpZW50SW5mb3NcbiNlbmRpZlxuKVxue2FtYmllbnRPY2NsdXNpb25PdXRQYXJhbXMgb3V0UGFyYW1zO3ZlYzMgYW1iaWVudE9jY2x1c2lvbkNvbG9yPXZlYzMoMS4sMS4sMS4pO1xuI2lmZGVmIEFNQklFTlRfT0NDTFVTSU9OXG52ZWMzIGFtYmllbnRPY2NsdXNpb25Db2xvck1hcD1hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXBfKmFtYmllbnRJbmZvcy55O1xuI2lmZGVmIEFNQklFTlRJTkdSQVlTQ0FMRVxuYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwPXZlYzMoYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwLnIsYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwLnIsYW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwLnIpO1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbm91dFBhcmFtcy5hbWJpZW50T2NjbHVzaW9uQ29sb3JNYXA9YW1iaWVudE9jY2x1c2lvbkNvbG9yTWFwO1xuI2VuZGlmXG4jZW5kaWZcbm91dFBhcmFtcy5hbWJpZW50T2NjbHVzaW9uQ29sb3I9YW1iaWVudE9jY2x1c2lvbkNvbG9yO3JldHVybiBvdXRQYXJhbXM7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyQmxvY2tOb3JtYWxGaW5hbFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEZPUkNFTk9STUFMRk9SV0FSRCkgJiYgZGVmaW5lZChOT1JNQUwpXG52ZWMzIGZhY2VOb3JtYWw9bm9ybWFsaXplKGNyb3NzKGRGZHgodlBvc2l0aW9uVyksZEZkeSh2UG9zaXRpb25XKSkpKnZFeWVQb3NpdGlvbi53O1xuI2lmIGRlZmluZWQoVFdPU0lERURMSUdIVElORylcbmZhY2VOb3JtYWw9Z2xfRnJvbnRGYWNpbmcgPyBmYWNlTm9ybWFsIDogLWZhY2VOb3JtYWw7XG4jZW5kaWZcbm5vcm1hbFcqPXNpZ24oZG90KG5vcm1hbFcsZmFjZU5vcm1hbCkpO2NvYXROb3JtYWxXKj1zaWduKGRvdChjb2F0Tm9ybWFsVyxmYWNlTm9ybWFsKSk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRXT1NJREVETElHSFRJTkcpICYmIGRlZmluZWQoTk9STUFMKVxuI2lmIGRlZmluZWQoTUlSUk9SRUQpXG5ub3JtYWxXPWdsX0Zyb250RmFjaW5nID8gLW5vcm1hbFcgOiBub3JtYWxXO2NvYXROb3JtYWxXPWdsX0Zyb250RmFjaW5nID8gLWNvYXROb3JtYWxXIDogY29hdE5vcm1hbFc7XG4jZWxzZVxubm9ybWFsVz1nbF9Gcm9udEZhY2luZyA/IG5vcm1hbFcgOiAtbm9ybWFsVztjb2F0Tm9ybWFsVz1nbF9Gcm9udEZhY2luZyA/IGNvYXROb3JtYWxXIDogLWNvYXROb3JtYWxXO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickJsb2NrTm9ybWFsRmluYWwgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJDb2F0TGF5ZXJEYXRhXCI7XG5jb25zdCBzaGFkZXIgPSBgZmxvYXQgY29hdF93ZWlnaHQ9MC4wO3ZlYzMgY29hdF9jb2xvcj12ZWMzKDEuMCk7ZmxvYXQgY29hdF9yb3VnaG5lc3M9MC4wO2Zsb2F0IGNvYXRfcm91Z2huZXNzX2FuaXNvdHJvcHk9MC4wO2Zsb2F0IGNvYXRfaW9yPTEuNjtmbG9hdCBjb2F0X2RhcmtlbmluZz0xLjA7dmVjMiBnZW9tZXRyeV9jb2F0X3RhbmdlbnQ9dmVjMigxLjAsMC4wKTtcbiNpZmRlZiBDT0FUX1dFSUdIVFxudmVjNCBjb2F0V2VpZ2h0RnJvbVRleHR1cmU9dGV4dHVyZTJEKGNvYXRXZWlnaHRTYW1wbGVyLHZDb2F0V2VpZ2h0VVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9DT0xPUlxudmVjNCBjb2F0Q29sb3JGcm9tVGV4dHVyZT10ZXh0dXJlMkQoY29hdENvbG9yU2FtcGxlcix2Q29hdENvbG9yVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9ST1VHSE5FU1NcbnZlYzQgY29hdFJvdWdobmVzc0Zyb21UZXh0dXJlPXRleHR1cmUyRChjb2F0Um91Z2huZXNzU2FtcGxlcix2Q29hdFJvdWdobmVzc1VWK3V2T2Zmc2V0KTtcbiNlbmRpZlxuI2lmZGVmIENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFlcbmZsb2F0IGNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5RnJvbVRleHR1cmU9dGV4dHVyZTJEKGNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5U2FtcGxlcix2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHlVVit1dk9mZnNldCkucjtcbiNlbmRpZlxuI2lmZGVmIENPQVRfREFSS0VOSU5HXG52ZWM0IGNvYXREYXJrZW5pbmdGcm9tVGV4dHVyZT10ZXh0dXJlMkQoY29hdERhcmtlbmluZ1NhbXBsZXIsdkNvYXREYXJrZW5pbmdVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9DT0FUX1RBTkdFTlRcbnZlYzMgZ2VvbWV0cnlDb2F0VGFuZ2VudEZyb21UZXh0dXJlPXRleHR1cmUyRChnZW9tZXRyeUNvYXRUYW5nZW50U2FtcGxlcix2R2VvbWV0cnlDb2F0VGFuZ2VudFVWK3V2T2Zmc2V0KS5yZ2I7XG4jZW5kaWZcbmNvYXRfY29sb3I9dkNvYXRDb2xvci5yZ2I7Y29hdF93ZWlnaHQ9dkNvYXRXZWlnaHQ7Y29hdF9yb3VnaG5lc3M9dkNvYXRSb3VnaG5lc3M7Y29hdF9yb3VnaG5lc3NfYW5pc290cm9weT12Q29hdFJvdWdobmVzc0FuaXNvdHJvcHk7Y29hdF9pb3I9dkNvYXRJb3I7Y29hdF9kYXJrZW5pbmc9dkNvYXREYXJrZW5pbmc7Z2VvbWV0cnlfY29hdF90YW5nZW50PXZHZW9tZXRyeUNvYXRUYW5nZW50LnJnO1xuI2lmZGVmIENPQVRfV0VJR0hUXG5jb2F0X3dlaWdodCo9Y29hdFdlaWdodEZyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX0NPTE9SXG4jaWZkZWYgQ09BVF9DT0xPUl9HQU1NQVxuY29hdF9jb2xvcio9dG9MaW5lYXJTcGFjZShjb2F0Q29sb3JGcm9tVGV4dHVyZS5yZ2IpO1xuI2Vsc2VcbmNvYXRfY29sb3IqPWNvYXRDb2xvckZyb21UZXh0dXJlLnJnYjtcbiNlbmRpZlxuY29hdF9jb2xvcio9dkNvYXRDb2xvckluZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX1JPVUdITkVTU1xuI2lmZGVmIENPQVRfUk9VR0hORVNTX0ZST01fR1JFRU5fQ0hBTk5FTFxuY29hdF9yb3VnaG5lc3MqPWNvYXRSb3VnaG5lc3NGcm9tVGV4dHVyZS5nO1xuI2Vsc2VcbmNvYXRfcm91Z2huZXNzKj1jb2F0Um91Z2huZXNzRnJvbVRleHR1cmUucjtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChHRU9NRVRSWV9DT0FUX1RBTkdFTlQpICYmIGRlZmluZWQoQ09BVF9ST1VHSE5FU1NfQU5JU09UUk9QWV9GUk9NX1RBTkdFTlRfVEVYVFVSRSlcbmNvYXRfcm91Z2huZXNzX2FuaXNvdHJvcHkqPWdlb21ldHJ5Q29hdFRhbmdlbnRGcm9tVGV4dHVyZS5iO1xuI2VsaWYgZGVmaW5lZChDT0FUX1JPVUdITkVTU19BTklTT1RST1BZKVxuY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSo9Y29hdFJvdWdobmVzc0FuaXNvdHJvcHlGcm9tVGV4dHVyZTtcbiNlbmRpZlxuI2lmZGVmIENPQVRfREFSS0VOSU5HXG5jb2F0X2RhcmtlbmluZyo9Y29hdERhcmtlbmluZ0Zyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9DT0FUX1RBTkdFTlRcbnt2ZWMyIHRhbmdlbnRGcm9tVGV4dHVyZT1ub3JtYWxpemUoZ2VvbWV0cnlDb2F0VGFuZ2VudEZyb21UZXh0dXJlLnh5KjIuMC0xLjApO2Zsb2F0IHRhbmdlbnRfYW5nbGVfdGV4dHVyZT1hdGFuKHRhbmdlbnRGcm9tVGV4dHVyZS55LHRhbmdlbnRGcm9tVGV4dHVyZS54KTtmbG9hdCB0YW5nZW50X2FuZ2xlX3VuaWZvcm09YXRhbihnZW9tZXRyeV9jb2F0X3RhbmdlbnQueSxnZW9tZXRyeV9jb2F0X3RhbmdlbnQueCk7ZmxvYXQgdGFuZ2VudF9hbmdsZT10YW5nZW50X2FuZ2xlX3RleHR1cmUrdGFuZ2VudF9hbmdsZV91bmlmb3JtO2dlb21ldHJ5X2NvYXRfdGFuZ2VudD12ZWMyKGNvcyh0YW5nZW50X2FuZ2xlKSxzaW4odGFuZ2VudF9hbmdsZSkpO31cbiNlbmRpZlxuI2lmZGVmIFVTRV9HTFRGX1NUWUxFX0FOSVNPVFJPUFlcbmZsb2F0IGNvYXRBbHBoYT1jb2F0X3JvdWdobmVzcypjb2F0X3JvdWdobmVzcztmbG9hdCBjb2F0Um91Z2huZXNzVD1taXgoY29hdEFscGhhLDEuMCxjb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5KmNvYXRfcm91Z2huZXNzX2FuaXNvdHJvcHkpO2Zsb2F0IGNvYXRSb3VnaG5lc3NCPWNvYXRBbHBoYTtjb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5PTEuMC1jb2F0Um91Z2huZXNzQi9tYXgoY29hdFJvdWdobmVzc1QsMC4wMDAwMSk7Y29hdF9yb3VnaG5lc3M9c3FydChjb2F0Um91Z2huZXNzVC9zcXJ0KDIuMC8oMS4wKygxLjAtY29hdF9yb3VnaG5lc3NfYW5pc290cm9weSkqKDEuMC1jb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5KSkpKTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyQ29hdExheWVyRGF0YSA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickNvbmR1Y3RvclJlZmxlY3RhbmNlXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBwYnJfaW5saW5lXG5SZWZsZWN0YW5jZVBhcmFtcyBjb25kdWN0b3JSZWZsZWN0YW5jZShpbiB2ZWMzIGJhc2VDb2xvcixpbiB2ZWMzIHNwZWN1bGFyQ29sb3IsaW4gZmxvYXQgc3BlY3VsYXJXZWlnaHQpXG57UmVmbGVjdGFuY2VQYXJhbXMgb3V0UGFyYW1zO1xuI2lmIChDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxub3V0UGFyYW1zLmNvbG9yZWRGMD1iYXNlQ29sb3Iqc3BlY3VsYXJXZWlnaHQ7b3V0UGFyYW1zLmNvbG9yZWRGOTA9c3BlY3VsYXJDb2xvcipzcGVjdWxhcldlaWdodDtcbiNlbHNlXG5vdXRQYXJhbXMuY29sb3JlZEYwPWJhc2VDb2xvcjtvdXRQYXJhbXMuY29sb3JlZEY5MD12ZWMzKDEuMCk7XG4jZW5kaWZcbm91dFBhcmFtcy5GMD0xLjA7b3V0UGFyYW1zLkY5MD0xLjA7cmV0dXJuIG91dFBhcmFtczt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyQ29uZHVjdG9yUmVmbGVjdGFuY2UgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJEaWVsZWN0cmljUmVmbGVjdGFuY2VcIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgUmVmbGVjdGFuY2VQYXJhbXNcbntmbG9hdCBGMDtmbG9hdCBGOTA7dmVjMyBjb2xvcmVkRjA7dmVjMyBjb2xvcmVkRjkwO307XG4jZGVmaW5lIHBicl9pbmxpbmVcblJlZmxlY3RhbmNlUGFyYW1zIGRpZWxlY3RyaWNSZWZsZWN0YW5jZShcbmluIGZsb2F0IGluc2lkZUlPUixpbiBmbG9hdCBvdXRzaWRlSU9SLGluIHZlYzMgc3BlY3VsYXJDb2xvcixpbiBmbG9hdCBzcGVjdWxhcldlaWdodFxuKVxue1JlZmxlY3RhbmNlUGFyYW1zIG91dFBhcmFtcztmbG9hdCBkaWVsZWN0cmljRjA9cG93KChpbnNpZGVJT1Itb3V0c2lkZUlPUikvKGluc2lkZUlPUitvdXRzaWRlSU9SKSwyLjApO2Zsb2F0IGRpZWxlY3RyaWNGMF9Ob1NwZWM9cG93KCgxLjAtb3V0c2lkZUlPUikvKDEuMCtvdXRzaWRlSU9SKSwyLjApO2Zsb2F0IGY5MFNjYWxlPWNsYW1wKDIuMCphYnMoaW5zaWRlSU9SLW91dHNpZGVJT1IpLDAuMCwxLjApO2Zsb2F0IGY5MFNjYWxlX05vU3BlYz1jbGFtcCgyLjAqYWJzKDEuMC1vdXRzaWRlSU9SKSwwLjAsMS4wKTtcbiNpZiAoRElFTEVDVFJJQ19TUEVDVUxBUl9NT0RFTD09RElFTEVDVFJJQ19TUEVDVUxBUl9NT0RFTF9PUEVOUEJSKVxudmVjMyBkaWVsZWN0cmljQ29sb3JGOTA9c3BlY3VsYXJDb2xvci5yZ2IqdmVjMyhmOTBTY2FsZSk7dmVjMyBkaWVsZWN0cmljQ29sb3JGOTBfTm9TcGVjPXNwZWN1bGFyQ29sb3IucmdiKnZlYzMoZjkwU2NhbGVfTm9TcGVjKTtcbiNlbHNlXG52ZWMzIGRpZWxlY3RyaWNDb2xvckY5MD12ZWMzKGY5MFNjYWxlKTt2ZWMzIGRpZWxlY3RyaWNDb2xvckY5MF9Ob1NwZWM9dmVjMyhmOTBTY2FsZV9Ob1NwZWMpO1xuI2VuZGlmXG4jaWYgRElFTEVDVFJJQ19TUEVDVUxBUl9NT0RFTD09RElFTEVDVFJJQ19TUEVDVUxBUl9NT0RFTF9HTFRGXG5mbG9hdCBtYXhGMD1tYXgoc3BlY3VsYXJDb2xvci5yLG1heChzcGVjdWxhckNvbG9yLmcsc3BlY3VsYXJDb2xvci5iKSk7b3V0UGFyYW1zLkYwPW1peChkaWVsZWN0cmljRjBfTm9TcGVjLGRpZWxlY3RyaWNGMCxzcGVjdWxhcldlaWdodCkqbWF4RjA7XG4jZWxzZVxub3V0UGFyYW1zLkYwPW1peChkaWVsZWN0cmljRjBfTm9TcGVjLGRpZWxlY3RyaWNGMCxzcGVjdWxhcldlaWdodCk7XG4jZW5kaWZcbm91dFBhcmFtcy5GOTA9bWl4KGY5MFNjYWxlX05vU3BlYyxmOTBTY2FsZSxzcGVjdWxhcldlaWdodCk7b3V0UGFyYW1zLmNvbG9yZWRGMD1taXgodmVjMyhkaWVsZWN0cmljRjBfTm9TcGVjKSx2ZWMzKGRpZWxlY3RyaWNGMCksc3BlY3VsYXJXZWlnaHQpKnNwZWN1bGFyQ29sb3IucmdiO291dFBhcmFtcy5jb2xvcmVkRjkwPW1peChkaWVsZWN0cmljQ29sb3JGOTBfTm9TcGVjLGRpZWxlY3RyaWNDb2xvckY5MCxzcGVjdWxhcldlaWdodCk7cmV0dXJuIG91dFBhcmFtczt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJEaWVsZWN0cmljUmVmbGVjdGFuY2UgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJEaXJlY3RMaWdodGluZ1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxue3ZlYzMgc2xhYl9kaWZmdXNlPXZlYzMoMC4sMC4sMC4pO3ZlYzMgc2xhYl9zdWJzdXJmYWNlPXZlYzMoMC4sMC4sMC4pO3ZlYzMgc2xhYl90cmFuc2x1Y2VudD12ZWMzKDAuLDAuLDAuKTt2ZWMzIHNsYWJfZ2xvc3N5PXZlYzMoMC4sMC4sMC4pO2Zsb2F0IHNwZWN1bGFyRnJlc25lbD0wLjA7dmVjMyBzcGVjdWxhckNvbG9yZWRGcmVzbmVsPXZlYzMoMC4sMC4sMC4pO3ZlYzMgc2xhYl9tZXRhbD12ZWMzKDAuLDAuLDAuKTt2ZWMzIHNsYWJfY29hdD12ZWMzKDAuLDAuLDAuKTtmbG9hdCBjb2F0RnJlc25lbD0wLjA7dmVjMyBzbGFiX2Z1eno9dmVjMygwLiwwLiwwLik7ZmxvYXQgZnV6ekZyZXNuZWw9MC4wO1xuI2lmZGVmIEhFTUlMSUdIVHtYfVxuc2xhYl9kaWZmdXNlPWNvbXB1dGVIZW1pc3BoZXJpY0RpZmZ1c2VMaWdodGluZyhwcmVJbmZve1h9LGxpZ2h0Q29sb3J7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodEdyb3VuZCk7XG4jZWxpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSlcbnNsYWJfZGlmZnVzZT1jb21wdXRlQXJlYURpZmZ1c2VMaWdodGluZyhwcmVJbmZve1h9LGxpZ2h0Q29sb3J7WH0ucmdiKTtcbiNlbHNlXG5zbGFiX2RpZmZ1c2U9Y29tcHV0ZURpZmZ1c2VMaWdodGluZyhwcmVJbmZve1h9LGxpZ2h0Q29sb3J7WH0ucmdiKTtcbiNlbmRpZlxuI2lmZGVmIFBST0pFQ1RFRExJR0hUVEVYVFVSRXtYfVxuc2xhYl9kaWZmdXNlKj1jb21wdXRlUHJvamVjdGlvblRleHR1cmVEaWZmdXNlTGlnaHRpbmcocHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfSx0ZXh0dXJlUHJvamVjdGlvbk1hdHJpeHtYfSx2UG9zaXRpb25XKTtcbiNlbmRpZlxubnVtTGlnaHRzKz0xLjA7XG4jaWZkZWYgRlVaWlxuZmxvYXQgZnV6ek5kb3RIPW1heChkb3QoZnV6ek5vcm1hbFcscHJlSW5mb3tYfS5IKSwwLjApO3ZlYzMgZnV6ekJyZGY9Z2V0RnV6ekJSREZMb29rdXAoZnV6ek5kb3RILHNxcnQoZnV6el9yb3VnaG5lc3MpKTtcbiNlbmRpZlxuI2lmZGVmIFRISU5fRklMTVxuZmxvYXQgdGhpbl9maWxtX2Rlc2F0dXJhdGlvbl9zY2FsZT0odGhpbl9maWxtX2lvci0xLjApKnNxcnQodGhpbl9maWxtX3RoaWNrbmVzcyowLjAwMSk7XG4jZW5kaWZcbiNpZiBBUkVBTElHSFR7WH1cbnNsYWJfZ2xvc3N5PWNvbXB1dGVBcmVhU3BlY3VsYXJMaWdodGluZyhwcmVJbmZve1h9LGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuRjAsYmFzZUNvbmR1Y3RvclJlZmxlY3RhbmNlLkY5MCk7XG4jZWxzZVxue1xuI2lmZGVmIEFOSVNPVFJPUElDX0JBU0VcbnNsYWJfZ2xvc3N5PWNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlSW5mb3tYfSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLFxuYmFzZUdlb0luZm8uYW5pc290cm9waWNUYW5nZW50LGJhc2VHZW9JbmZvLmFuaXNvdHJvcGljQml0YW5nZW50LGJhc2VHZW9JbmZvLmFuaXNvdHJvcHksXG4wLjAsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2Vsc2VcbnNsYWJfZ2xvc3N5PWNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUluZm97WH0sbm9ybWFsVyx2ZWMzKDEuMCksdmVjMygxLjApLHNwZWN1bGFyX3JvdWdobmVzcyxsaWdodENvbG9ye1h9LnJnYik7XG4jZW5kaWZcbmZsb2F0IE5kb3RIPWRvdChub3JtYWxXLHByZUluZm97WH0uSCk7c3BlY3VsYXJGcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKE5kb3RILGJhc2VEaWVsZWN0cmljUmVmbGVjdGFuY2UuRjAsYmFzZURpZWxlY3RyaWNSZWZsZWN0YW5jZS5GOTApO3NwZWN1bGFyQ29sb3JlZEZyZXNuZWw9c3BlY3VsYXJGcmVzbmVsKnNwZWN1bGFyX2NvbG9yO1xuI2lmZGVmIFRISU5fRklMTVxuZmxvYXQgdGhpbkZpbG1Jb3JTY2FsZT1jbGFtcCgyLjAqYWJzKHRoaW5fZmlsbV9pb3ItMS4wKSwwLjAsMS4wKTt2ZWMzIHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWw9ZXZhbElyaWRlc2NlbmNlKHRoaW5fZmlsbV9vdXRzaWRlX2lvcix0aGluX2ZpbG1faW9yLHByZUluZm97WH0uVmRvdEgsdGhpbl9maWxtX3RoaWNrbmVzcyxiYXNlRGllbGVjdHJpY1JlZmxlY3RhbmNlLmNvbG9yZWRGMCk7dGhpbkZpbG1EaWVsZWN0cmljRnJlc25lbD1taXgodGhpbkZpbG1EaWVsZWN0cmljRnJlc25lbCx2ZWMzKGRvdCh0aGluRmlsbURpZWxlY3RyaWNGcmVzbmVsLHZlYzMoMC4zMzMzKSkpLHRoaW5fZmlsbV9kZXNhdHVyYXRpb25fc2NhbGUpO3NwZWN1bGFyQ29sb3JlZEZyZXNuZWw9bWl4KHNwZWN1bGFyQ29sb3JlZEZyZXNuZWwsdGhpbkZpbG1EaWVsZWN0cmljRnJlc25lbCpzcGVjdWxhcl9jb2xvcix0aGluX2ZpbG1fd2VpZ2h0KnRoaW5GaWxtSW9yU2NhbGUpO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNpZiBBUkVBTElHSFR7WH1cbnNsYWJfbWV0YWw9Y29tcHV0ZUFyZWFTcGVjdWxhckxpZ2h0aW5nKHByZUluZm97WH0sbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZS5GMCxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuRjkwKTtcbiNlbHNlXG57XG4jaWYgKENPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTD09Q09ORFVDVE9SX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG52ZWMzIGNvbG9yZWRGcmVzbmVsPWdldEY4MlNwZWN1bGFyKHByZUluZm97WH0uVmRvdEgsYmFzZUNvbmR1Y3RvclJlZmxlY3RhbmNlLmNvbG9yZWRGMCxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEY5MCxzcGVjdWxhcl9yb3VnaG5lc3MpO1xuI2Vsc2VcbnZlYzMgY29sb3JlZEZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1gocHJlSW5mb3tYfS5WZG90SCxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEYwLGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZS5jb2xvcmVkRjkwKTtcbiNlbmRpZlxuI2lmZGVmIFRISU5fRklMTVxuZmxvYXQgdGhpbkZpbG1Jb3JTY2FsZT1jbGFtcCgyLjAqYWJzKHRoaW5fZmlsbV9pb3ItMS4wKSwwLjAsMS4wKTt2ZWMzIHRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbD1ldmFsSXJpZGVzY2VuY2UodGhpbl9maWxtX291dHNpZGVfaW9yLHRoaW5fZmlsbV9pb3IscHJlSW5mb3tYfS5WZG90SCx0aGluX2ZpbG1fdGhpY2tuZXNzLGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZS5jb2xvcmVkRjApO3RoaW5GaWxtQ29uZHVjdG9yRnJlc25lbD1taXgodGhpbkZpbG1Db25kdWN0b3JGcmVzbmVsLHZlYzMoZG90KHRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbCx2ZWMzKDAuMzMzMykpKSx0aGluX2ZpbG1fZGVzYXR1cmF0aW9uX3NjYWxlKTtjb2xvcmVkRnJlc25lbD1taXgoY29sb3JlZEZyZXNuZWwsc3BlY3VsYXJfd2VpZ2h0KnRoaW5GaWxtSW9yU2NhbGUqdGhpbkZpbG1Db25kdWN0b3JGcmVzbmVsLHRoaW5fZmlsbV93ZWlnaHQpO1xuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNfQkFTRVxuc2xhYl9tZXRhbD1jb21wdXRlQW5pc290cm9waWNTcGVjdWxhckxpZ2h0aW5nKHByZUluZm97WH0sdmlld0RpcmVjdGlvblcsbm9ybWFsVyxiYXNlR2VvSW5mby5hbmlzb3Ryb3BpY1RhbmdlbnQsYmFzZUdlb0luZm8uYW5pc290cm9waWNCaXRhbmdlbnQsYmFzZUdlb0luZm8uYW5pc290cm9weSwwLjAsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2Vsc2VcbnNsYWJfbWV0YWw9Y29tcHV0ZVNwZWN1bGFyTGlnaHRpbmcocHJlSW5mb3tYfSxub3JtYWxXLHZlYzMoMS4wKSxjb2xvcmVkRnJlc25lbCxzcGVjdWxhcl9yb3VnaG5lc3MsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNpZiBBUkVBTElHSFR7WH1cbnNsYWJfY29hdD1jb21wdXRlQXJlYVNwZWN1bGFyTGlnaHRpbmcocHJlSW5mb0NvYXR7WH0sbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGNvYXRSZWZsZWN0YW5jZS5GMCxjb2F0UmVmbGVjdGFuY2UuRjkwKTtcbiNlbHNlXG57XG4jaWZkZWYgQU5JU09UUk9QSUNfQ09BVFxuc2xhYl9jb2F0PWNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlSW5mb0NvYXR7WH0sdmlld0RpcmVjdGlvblcsY29hdE5vcm1hbFcsXG5jb2F0R2VvSW5mby5hbmlzb3Ryb3BpY1RhbmdlbnQsY29hdEdlb0luZm8uYW5pc290cm9waWNCaXRhbmdlbnQsY29hdEdlb0luZm8uYW5pc290cm9weSxcbjAuMCxsaWdodENvbG9ye1h9LnJnYik7XG4jZWxzZVxuc2xhYl9jb2F0PWNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUluZm9Db2F0e1h9LGNvYXROb3JtYWxXLHZlYzMoY29hdFJlZmxlY3RhbmNlLkYwKSx2ZWMzKDEuMCksY29hdF9yb3VnaG5lc3MsbGlnaHRDb2xvcntYfS5yZ2IpO1xuI2VuZGlmXG5mbG9hdCBOZG90SD1kb3QoY29hdE5vcm1hbFcscHJlSW5mb0NvYXR7WH0uSCk7Y29hdEZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1goTmRvdEgsY29hdFJlZmxlY3RhbmNlLkYwLGNvYXRSZWZsZWN0YW5jZS5GOTApO31cbiNlbmRpZlxudmVjMyBjb2F0QWJzb3JwdGlvbj12ZWMzKDEuMCk7aWYgKGNvYXRfd2VpZ2h0PjAuMCkge2Zsb2F0IGNvc1RoZXRhX3ZpZXc9bWF4KHByZUluZm9Db2F0e1h9Lk5kb3RWLDAuMDAxKTtmbG9hdCBjb3NUaGV0YV9saWdodD1tYXgocHJlSW5mb0NvYXR7WH0uTmRvdEwsMC4wMDEpO2Zsb2F0IGZyZXNuZWxfdmlldz1jb2F0UmVmbGVjdGFuY2UuRjArKDEuMC1jb2F0UmVmbGVjdGFuY2UuRjApKnBvdygxLjAtY29zVGhldGFfdmlldyw1LjApO2Zsb2F0IGZyZXNuZWxfbGlnaHQ9Y29hdFJlZmxlY3RhbmNlLkYwKygxLjAtY29hdFJlZmxlY3RhbmNlLkYwKSpwb3coMS4wLWNvc1RoZXRhX2xpZ2h0LDUuMCk7ZmxvYXQgYXZlcmFnZVJlZmxlY3RhbmNlPShmcmVzbmVsX3ZpZXcrZnJlc25lbF9saWdodCkqMC41O2Zsb2F0IGRhcmtlbmVkX3RyYW5zbWlzc2lvbj0oMS4wLWF2ZXJhZ2VSZWZsZWN0YW5jZSkvKDEuMCthdmVyYWdlUmVmbGVjdGFuY2UpO2RhcmtlbmVkX3RyYW5zbWlzc2lvbj1taXgoMS4wLGRhcmtlbmVkX3RyYW5zbWlzc2lvbixjb2F0X2RhcmtlbmluZyk7ZmxvYXQgc2luMj0xLjAtY29zVGhldGFfdmlldypjb3NUaGV0YV92aWV3O3NpbjI9c2luMi8oY29hdF9pb3IqY29hdF9pb3IpO2Zsb2F0IGNvc190PXNxcnQoMS4wLXNpbjIpO2Zsb2F0IGNvYXRQYXRoTGVuZ3RoPTEuMC9jb3NfdDt2ZWMzIGNvbG9yZWRfdHJhbnNtaXNzaW9uPXBvdyhjb2F0X2NvbG9yLHZlYzMoY29hdFBhdGhMZW5ndGgpKTtjb2F0QWJzb3JwdGlvbj1taXgodmVjMygxLjApLGNvbG9yZWRfdHJhbnNtaXNzaW9uKmRhcmtlbmVkX3RyYW5zbWlzc2lvbixjb2F0X3dlaWdodCk7fVxuI2lmZGVmIEZVWlpcbmZ1enpGcmVzbmVsPWZ1enpCcmRmLno7dmVjMyBmdXp6Tm9ybWFsVz1taXgobm9ybWFsVyxjb2F0Tm9ybWFsVyxjb2F0X3dlaWdodCk7ZmxvYXQgZnV6ek5kb3RWPW1heChkb3QoZnV6ek5vcm1hbFcsdmlld0RpcmVjdGlvblcueHl6KSwwLjApO2Zsb2F0IGZ1enpOZG90TD1tYXgoZG90KGZ1enpOb3JtYWxXLHByZUluZm97WH0uTCksMC4wKTtzbGFiX2Z1eno9bGlnaHRDb2xvcntYfS5yZ2IqcHJlSW5mb3tYfS5hdHRlbnVhdGlvbipldmFsRnV6eihwcmVJbmZve1h9LkwsZnV6ek5kb3RMLGZ1enpOZG90VixmdXp6VGFuZ2VudCxmdXp6Qml0YW5nZW50LGZ1enpCcmRmKTtcbiNlbHNlXG52ZWMzIGZ1enpfY29sb3I9dmVjMygwLjApO1xuI2VuZGlmXG5zbGFiX2RpZmZ1c2UqPWJhc2VfY29sb3IucmdiO3ZlYzMgbWF0ZXJpYWxfb3BhcXVlX2Jhc2U9bWl4KHNsYWJfZGlmZnVzZSxzbGFiX3N1YnN1cmZhY2Usc3Vic3VyZmFjZV93ZWlnaHQpO3ZlYzMgbWF0ZXJpYWxfZGllbGVjdHJpY19iYXNlPW1peChtYXRlcmlhbF9vcGFxdWVfYmFzZSxzbGFiX3RyYW5zbHVjZW50LHRyYW5zbWlzc2lvbl93ZWlnaHQpO3ZlYzMgbWF0ZXJpYWxfZGllbGVjdHJpY19nbG9zcz1tYXRlcmlhbF9kaWVsZWN0cmljX2Jhc2UqKDEuMC1zcGVjdWxhckZyZXNuZWwpK3NsYWJfZ2xvc3N5KnNwZWN1bGFyQ29sb3JlZEZyZXNuZWw7dmVjMyBtYXRlcmlhbF9iYXNlX3N1YnN0cmF0ZT1taXgobWF0ZXJpYWxfZGllbGVjdHJpY19nbG9zcyxzbGFiX21ldGFsLGJhc2VfbWV0YWxuZXNzKTt2ZWMzIG1hdGVyaWFsX2NvYXRlZF9iYXNlPWxheWVyKG1hdGVyaWFsX2Jhc2Vfc3Vic3RyYXRlLHNsYWJfY29hdCxjb2F0RnJlc25lbCxjb2F0QWJzb3JwdGlvbix2ZWMzKDEuMCkpO21hdGVyaWFsX3N1cmZhY2VfZGlyZWN0Kz1sYXllcihtYXRlcmlhbF9jb2F0ZWRfYmFzZSxzbGFiX2Z1enosZnV6ekZyZXNuZWwqZnV6el93ZWlnaHQsdmVjMygxLjApLGZ1enpfY29sb3IpO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRGlyZWN0TGlnaHRpbmcgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJEaXJlY3RMaWdodGluZ0luaXRcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbnByZUxpZ2h0aW5nSW5mbyBwcmVJbmZve1h9O3ByZUxpZ2h0aW5nSW5mbyBwcmVJbmZvQ29hdHtYfTt2ZWM0IGxpZ2h0Q29sb3J7WH09bGlnaHR7WH0udkxpZ2h0RGlmZnVzZTtmbG9hdCBzaGFkb3d7WH09MS47XG4jaWYgZGVmaW5lZChTSEFET1dPTkxZKSB8fCBkZWZpbmVkKExJR0hUTUFQKSAmJiBkZWZpbmVkKExJR0hUTUFQRVhDTFVERUR7WH0pICYmIGRlZmluZWQoTElHSFRNQVBOT1NQRUNVTEFSe1h9KVxuI2Vsc2VcbiNkZWZpbmUgQ1VTVE9NX0xJR0hUe1h9X0NPTE9SIFxuI2lmZGVmIFNQT1RMSUdIVHtYfVxucHJlSW5mb3tYfT1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyx2UG9zaXRpb25XKTtwcmVJbmZvQ29hdHtYfT1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsY29hdE5vcm1hbFcsdlBvc2l0aW9uVyk7XG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG5wcmVJbmZve1h9PWNvbXB1dGVQb2ludEFuZFNwb3RQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHZQb3NpdGlvblcpO3ByZUluZm9Db2F0e1h9PWNvbXB1dGVQb2ludEFuZFNwb3RQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxjb2F0Tm9ybWFsVyx2UG9zaXRpb25XKTtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxucHJlSW5mb3tYfT1jb21wdXRlSGVtaXNwaGVyaWNQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtwcmVJbmZvQ29hdHtYfT1jb21wdXRlSGVtaXNwaGVyaWNQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxjb2F0Tm9ybWFsVyk7XG4jZWxpZiBkZWZpbmVkKERJUkxJR0hUe1h9KVxucHJlSW5mb3tYfT1jb21wdXRlRGlyZWN0aW9uYWxQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtwcmVJbmZvQ29hdHtYfT1jb21wdXRlRGlyZWN0aW9uYWxQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxjb2F0Tm9ybWFsVyk7XG4jZWxpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5wcmVJbmZve1h9PWNvbXB1dGVBcmVhUHJlTGlnaHRpbmdJbmZvKGFyZWFMaWdodHNMVEMxU2FtcGxlcixhcmVhTGlnaHRzTFRDMlNhbXBsZXIsdmlld0RpcmVjdGlvblcsbm9ybWFsVyx2UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEsbGlnaHR7WH0udkxpZ2h0V2lkdGgueHl6LGxpZ2h0e1h9LnZMaWdodEhlaWdodC54eXosc3BlY3VsYXJfcm91Z2huZXNzKTtwcmVJbmZvQ29hdHtYfT1jb21wdXRlQXJlYVByZUxpZ2h0aW5nSW5mbyhhcmVhTGlnaHRzTFRDMVNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyLHZpZXdEaXJlY3Rpb25XLGNvYXROb3JtYWxXLHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YSxsaWdodHtYfS52TGlnaHRXaWR0aC54eXosbGlnaHR7WH0udkxpZ2h0SGVpZ2h0Lnh5eixjb2F0X3JvdWdobmVzcyk7XG4jZW5kaWZcbnByZUluZm97WH0uTmRvdFY9YmFzZUdlb0luZm8uTmRvdFY7cHJlSW5mb0NvYXR7WH0uTmRvdFY9Y29hdEdlb0luZm8uTmRvdFY7XG4jaWZkZWYgU1BPVExJR0hUe1h9XG4jaWZkZWYgTElHSFRfRkFMTE9GRl9HTFRGe1h9XG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9HTFRGKHByZUluZm97WH0ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm97WH0uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZve1h9LkwsaWVzTGlnaHRUZXh0dXJle1h9KTtcbiNlbHNlXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfR0xURihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnosbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1BIWVNJQ0FMe1h9KVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfUGh5c2ljYWwocHJlSW5mb3tYfS5saWdodERpc3RhbmNlU3F1YXJlZCk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZve1h9LmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mb3tYfS5MLGllc0xpZ2h0VGV4dHVyZXtYfSk7XG4jZWxzZVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX1BoeXNpY2FsKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mb3tYfS5MLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1NUQU5EQVJEe1h9KVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfU3RhbmRhcmQocHJlSW5mb3tYfS5saWdodE9mZnNldCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm97WH0uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncpO1xuI2VuZGlmXG4jZWxzZVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYocHJlSW5mb3tYfS5saWdodE9mZnNldCxwcmVJbmZve1h9LmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnkpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm97WH0uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm97WH0uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi56LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYudyk7XG4jZW5kaWZcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxuI2lmZGVmIExJR0hUX0ZBTExPRkZfR0xURntYfVxucHJlSW5mb3tYfS5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfR0xURihwcmVJbmZve1h9LmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfUEhZU0lDQUx7WH0pXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChwcmVJbmZve1h9LmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9TVEFOREFSRHtYfSlcbnByZUluZm97WH0uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKHByZUluZm97WH0ubGlnaHRPZmZzZXQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54KTtcbiNlbHNlXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZihwcmVJbmZve1h9LmxpZ2h0T2Zmc2V0LHByZUluZm97WH0ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZW5kaWZcbiNlbHNlXG5wcmVJbmZve1h9LmF0dGVudWF0aW9uPTEuMDtcbiNlbmRpZlxucHJlSW5mb0NvYXR7WH0uYXR0ZW51YXRpb249cHJlSW5mb3tYfS5hdHRlbnVhdGlvbjtcbiNpZiBkZWZpbmVkKEhFTUlMSUdIVHtYfSkgfHwgZGVmaW5lZChBUkVBTElHSFR7WH0pXG5wcmVJbmZve1h9LnJvdWdobmVzcz1zcGVjdWxhcl9yb3VnaG5lc3M7cHJlSW5mb0NvYXR7WH0ucm91Z2huZXNzPWNvYXRfcm91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm97WH0ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoc3BlY3VsYXJfcm91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mb3tYfS5saWdodERpc3RhbmNlKTtwcmVJbmZvQ29hdHtYfS5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhjb2F0X3JvdWdobmVzcyxsaWdodHtYfS52TGlnaHRTcGVjdWxhci5hLHByZUluZm9Db2F0e1h9LmxpZ2h0RGlzdGFuY2UpO1xuI2VuZGlmXG5wcmVJbmZve1h9LmRpZmZ1c2VSb3VnaG5lc3M9YmFzZV9kaWZmdXNlX3JvdWdobmVzcztwcmVJbmZve1h9LnN1cmZhY2VBbGJlZG89YmFzZV9jb2xvci5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRGlyZWN0TGlnaHRpbmdJbml0ID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyRW52aXJvbm1lbnRMaWdodGluZ1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBSRUZMRUNUSU9OXG4jaWZkZWYgRlVaWlxudmVjMyBlbnZpcm9ubWVudEZ1enpCcmRmPWdldEZ1enpCUkRGTG9va3VwKGZ1enpHZW9JbmZvLk5kb3RWLHNxcnQoZnV6el9yb3VnaG5lc3MpKTtcbiNlbmRpZlxudmVjMyBiYXNlRGlmZnVzZUVudmlyb25tZW50TGlnaHQ9c2FtcGxlSXJyYWRpYW5jZShcbm5vcm1hbFdcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbix2RW52aXJvbm1lbnRJcnJhZGlhbmNlXG4jZW5kaWZcbiNpZiAoZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgKCFkZWZpbmVkKE5PUk1BTCkgfHwgIWRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpKSkgfHwgKGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKSlcbixyZWZsZWN0aW9uTWF0cml4XG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG4saXJyYWRpYW5jZVNhbXBsZXJcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbix2UmVmbGVjdGlvbkRvbWluYW50RGlyZWN0aW9uXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saWNkZlNhbXBsZXJcbiNlbmRpZlxuI2VuZGlmXG4sdlJlZmxlY3Rpb25JbmZvc1xuLHZpZXdEaXJlY3Rpb25XXG4sYmFzZV9kaWZmdXNlX3JvdWdobmVzc1xuLGJhc2VfY29sb3Jcbik7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmVjMyByZWZsZWN0aW9uQ29vcmRzPXZlYzMoMC4sMC4sMC4pO1xuI2Vsc2VcbnZlYzIgcmVmbGVjdGlvbkNvb3Jkcz12ZWMyKDAuLDAuKTtcbiNlbmRpZlxuZmxvYXQgc3BlY3VsYXJBbHBoYUc9c3BlY3VsYXJfcm91Z2huZXNzKnNwZWN1bGFyX3JvdWdobmVzcztcbiNpZmRlZiBBTklTT1RST1BJQ19CQVNFXG52ZWMzIGJhc2VTcGVjdWxhckVudmlyb25tZW50TGlnaHQ9c2FtcGxlUmFkaWFuY2VBbmlzb3Ryb3BpYyhzcGVjdWxhckFscGhhRyx2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnJnYix2UmVmbGVjdGlvbkluZm9zXG4sYmFzZUdlb0luZm9cbixub3JtYWxXXG4sdmlld0RpcmVjdGlvbldcbix2UG9zaXRpb25XXG4sbm9pc2VcbixyZWZsZWN0aW9uU2FtcGxlclxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pO1xuI2Vsc2VcbnJlZmxlY3Rpb25Db29yZHM9Y3JlYXRlUmVmbGVjdGlvbkNvb3Jkcyh2UG9zaXRpb25XLG5vcm1hbFcpO3ZlYzMgYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRMaWdodD1zYW1wbGVSYWRpYW5jZShzcGVjdWxhckFscGhhRyx2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnJnYix2UmVmbGVjdGlvbkluZm9zXG4sYmFzZUdlb0luZm9cbixyZWZsZWN0aW9uU2FtcGxlclxuLHJlZmxlY3Rpb25Db29yZHNcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm9cbiNlbmRpZlxuKTtcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDX0JBU0VcbmJhc2VTcGVjdWxhckVudmlyb25tZW50TGlnaHQ9bWl4KGJhc2VTcGVjdWxhckVudmlyb25tZW50TGlnaHQucmdiLGJhc2VEaWZmdXNlRW52aXJvbm1lbnRMaWdodCxzcGVjdWxhckFscGhhRypzcGVjdWxhckFscGhhRyptYXgoMS4wLWJhc2VHZW9JbmZvLmFuaXNvdHJvcHksMC4zKSk7XG4jZWxzZVxuYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRMaWdodD1taXgoYmFzZVNwZWN1bGFyRW52aXJvbm1lbnRMaWdodC5yZ2IsYmFzZURpZmZ1c2VFbnZpcm9ubWVudExpZ2h0LHNwZWN1bGFyQWxwaGFHKTtcbiNlbmRpZlxudmVjMyBjb2F0RW52aXJvbm1lbnRMaWdodD12ZWMzKDAuLDAuLDAuKTtpZiAoY29hdF93ZWlnaHQ+MC4wKSB7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmVjMyByZWZsZWN0aW9uQ29vcmRzPXZlYzMoMC4sMC4sMC4pO1xuI2Vsc2VcbnZlYzIgcmVmbGVjdGlvbkNvb3Jkcz12ZWMyKDAuLDAuKTtcbiNlbmRpZlxucmVmbGVjdGlvbkNvb3Jkcz1jcmVhdGVSZWZsZWN0aW9uQ29vcmRzKHZQb3NpdGlvblcsY29hdE5vcm1hbFcpO2Zsb2F0IGNvYXRBbHBoYUc9Y29hdF9yb3VnaG5lc3MqY29hdF9yb3VnaG5lc3M7XG4jaWZkZWYgQU5JU09UUk9QSUNfQ09BVFxuY29hdEVudmlyb25tZW50TGlnaHQ9c2FtcGxlUmFkaWFuY2VBbmlzb3Ryb3BpYyhjb2F0QWxwaGFHLHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MucmdiLHZSZWZsZWN0aW9uSW5mb3Ncbixjb2F0R2VvSW5mb1xuLGNvYXROb3JtYWxXXG4sdmlld0RpcmVjdGlvbldcbix2UG9zaXRpb25XXG4sbm9pc2VcbixyZWZsZWN0aW9uU2FtcGxlclxuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pO1xuI2Vsc2VcbmNvYXRFbnZpcm9ubWVudExpZ2h0PXNhbXBsZVJhZGlhbmNlKGNvYXRBbHBoYUcsdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy5yZ2IsdlJlZmxlY3Rpb25JbmZvc1xuLGNvYXRHZW9JbmZvXG4scmVmbGVjdGlvblNhbXBsZXJcbixyZWZsZWN0aW9uQ29vcmRzXG4jaWZkZWYgUkVBTFRJTUVfRklMVEVSSU5HXG4sdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvXG4jZW5kaWZcbik7XG4jZW5kaWZcbn1cbiNpZmRlZiBGVVpaXG5mbG9hdCBtb2RpZmllZEZ1enpSb3VnaG5lc3M9Y2xhbXAoZnV6el9yb3VnaG5lc3MqKDEuMC0wLjUqZW52aXJvbm1lbnRGdXp6QnJkZi55KSwwLjAsMS4wKTt2ZWMzIGZ1enpFbnZpcm9ubWVudExpZ2h0PXZlYzMoMC4wKTtmbG9hdCB0b3RhbFdlaWdodD0wLjA7ZmxvYXQgZnV6eklibEZyZXNuZWw9c3FydChlbnZpcm9ubWVudEZ1enpCcmRmLnopO2ZvciAoaW50IGk9MDsgaTxGVVpaX0lCTF9TQU1QTEVTOyArK2kpIHtmbG9hdCBhbmdsZT0oZmxvYXQoaSkrbm9pc2UueCkqKDMuMTQxNTkyKjIuMC9mbG9hdChGVVpaX0lCTF9TQU1QTEVTKSk7dmVjMyBmaWJlckN5bGluZGVyTm9ybWFsPW5vcm1hbGl6ZShjb3MoYW5nbGUpKmZ1enpUYW5nZW50K3NpbihhbmdsZSkqZnV6ekJpdGFuZ2VudCk7ZmxvYXQgZmliZXJCZW5kPW1pbihlbnZpcm9ubWVudEZ1enpCcmRmLngqZW52aXJvbm1lbnRGdXp6QnJkZi54Km1vZGlmaWVkRnV6elJvdWdobmVzcywxLjApO2ZpYmVyQ3lsaW5kZXJOb3JtYWw9bm9ybWFsaXplKG1peChmaWJlckN5bGluZGVyTm9ybWFsLGZ1enpOb3JtYWxXLGZpYmVyQmVuZCkpO2Zsb2F0IHNhbXBsZVdlaWdodD1tYXgoZG90KHZpZXdEaXJlY3Rpb25XLGZpYmVyQ3lsaW5kZXJOb3JtYWwpLDAuMCk7dmVjMyBmdXp6UmVmbGVjdGlvbkNvb3Jkcz1jcmVhdGVSZWZsZWN0aW9uQ29vcmRzKHZQb3NpdGlvblcsZmliZXJDeWxpbmRlck5vcm1hbCk7dmVjMyByYWRpYW5jZVNhbXBsZT1zYW1wbGVSYWRpYW5jZShtb2RpZmllZEZ1enpSb3VnaG5lc3MsdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy5yZ2IsdlJlZmxlY3Rpb25JbmZvc1xuLGZ1enpHZW9JbmZvXG4scmVmbGVjdGlvblNhbXBsZXJcbixmdXp6UmVmbGVjdGlvbkNvb3Jkc1xuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pO2Z1enpFbnZpcm9ubWVudExpZ2h0Kz1zYW1wbGVXZWlnaHQqbWl4KHJhZGlhbmNlU2FtcGxlLGJhc2VEaWZmdXNlRW52aXJvbm1lbnRMaWdodCxmaWJlckJlbmQpO3RvdGFsV2VpZ2h0Kz1zYW1wbGVXZWlnaHQ7fVxuZnV6ekVudmlyb25tZW50TGlnaHQvPXRvdGFsV2VpZ2h0O1xuI2VuZGlmXG5mbG9hdCBkaWVsZWN0cmljSWJsRnJlc25lbD1nZXRSZWZsZWN0YW5jZUZyb21CUkRGTG9va3VwKHZlYzMoYmFzZURpZWxlY3RyaWNSZWZsZWN0YW5jZS5GMCksdmVjMyhiYXNlRGllbGVjdHJpY1JlZmxlY3RhbmNlLkY5MCksYmFzZUdlb0luZm8uZW52aXJvbm1lbnRCcmRmKS5yO3ZlYzMgZGllbGVjdHJpY0libENvbG9yZWRGcmVzbmVsPWRpZWxlY3RyaWNJYmxGcmVzbmVsKnNwZWN1bGFyX2NvbG9yO1xuI2lmZGVmIFRISU5fRklMTVxuZmxvYXQgdGhpbkZpbG1Jb3JTY2FsZT1jbGFtcCgyLjAqYWJzKHRoaW5fZmlsbV9pb3ItMS4wKSwwLjAsMS4wKTt2ZWMzIHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWw9ZXZhbElyaWRlc2NlbmNlKHRoaW5fZmlsbV9vdXRzaWRlX2lvcix0aGluX2ZpbG1faW9yLGJhc2VHZW9JbmZvLk5kb3RWLHRoaW5fZmlsbV90aGlja25lc3MsYmFzZURpZWxlY3RyaWNSZWZsZWN0YW5jZS5jb2xvcmVkRjApO2Zsb2F0IHRoaW5fZmlsbV9kZXNhdHVyYXRpb25fc2NhbGU9KHRoaW5fZmlsbV9pb3ItMS4wKSpzcXJ0KHRoaW5fZmlsbV90aGlja25lc3MqMC4wMDEqYmFzZUdlb0luZm8uTmRvdFYpO3RoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWw9bWl4KHRoaW5GaWxtRGllbGVjdHJpY0ZyZXNuZWwsdmVjMyhkb3QodGhpbkZpbG1EaWVsZWN0cmljRnJlc25lbCx2ZWMzKDAuMzMzMykpKSx0aGluX2ZpbG1fZGVzYXR1cmF0aW9uX3NjYWxlKTtkaWVsZWN0cmljSWJsQ29sb3JlZEZyZXNuZWw9bWl4KGRpZWxlY3RyaWNJYmxDb2xvcmVkRnJlc25lbCx0aGluRmlsbURpZWxlY3RyaWNGcmVzbmVsKnNwZWN1bGFyX2NvbG9yLHRoaW5fZmlsbV93ZWlnaHQqdGhpbkZpbG1Jb3JTY2FsZSk7XG4jZW5kaWZcbnZlYzMgY29uZHVjdG9ySWJsRnJlc25lbD1jb25kdWN0b3JJYmxGcmVzbmVsKGJhc2VDb25kdWN0b3JSZWZsZWN0YW5jZSxiYXNlR2VvSW5mby5OZG90VixzcGVjdWxhcl9yb3VnaG5lc3MsYmFzZUdlb0luZm8uZW52aXJvbm1lbnRCcmRmKTtcbiNpZmRlZiBUSElOX0ZJTE1cbnZlYzMgdGhpbkZpbG1Db25kdWN0b3JGcmVzbmVsPXNwZWN1bGFyX3dlaWdodCpldmFsSXJpZGVzY2VuY2UodGhpbl9maWxtX291dHNpZGVfaW9yLHRoaW5fZmlsbV9pb3IsYmFzZUdlb0luZm8uTmRvdFYsdGhpbl9maWxtX3RoaWNrbmVzcyxiYXNlQ29uZHVjdG9yUmVmbGVjdGFuY2UuY29sb3JlZEYwKTt0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWw9bWl4KHRoaW5GaWxtQ29uZHVjdG9yRnJlc25lbCx2ZWMzKGRvdCh0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWwsdmVjMygwLjMzMzMpKSksdGhpbl9maWxtX2Rlc2F0dXJhdGlvbl9zY2FsZSk7Y29uZHVjdG9ySWJsRnJlc25lbD1taXgoY29uZHVjdG9ySWJsRnJlc25lbCx0aGluRmlsbUNvbmR1Y3RvckZyZXNuZWwsdGhpbl9maWxtX3dlaWdodCp0aGluRmlsbUlvclNjYWxlKTtcbiNlbmRpZlxuZmxvYXQgY29hdElibEZyZXNuZWw9MC4wO2lmIChjb2F0X3dlaWdodD4wLjApIHtjb2F0SWJsRnJlc25lbD1nZXRSZWZsZWN0YW5jZUZyb21CUkRGTG9va3VwKHZlYzMoY29hdFJlZmxlY3RhbmNlLkYwKSx2ZWMzKGNvYXRSZWZsZWN0YW5jZS5GOTApLGNvYXRHZW9JbmZvLmVudmlyb25tZW50QnJkZikucjt9XG52ZWMzIHNsYWJfZGlmZnVzZV9pYmw9dmVjMygwLiwwLiwwLik7dmVjMyBzbGFiX2dsb3NzeV9pYmw9dmVjMygwLiwwLiwwLik7dmVjMyBzbGFiX21ldGFsX2libD12ZWMzKDAuLDAuLDAuKTt2ZWMzIHNsYWJfY29hdF9pYmw9dmVjMygwLiwwLiwwLik7c2xhYl9kaWZmdXNlX2libD1iYXNlRGlmZnVzZUVudmlyb25tZW50TGlnaHQqdkxpZ2h0aW5nSW50ZW5zaXR5Lno7c2xhYl9kaWZmdXNlX2libCo9YW9PdXQuYW1iaWVudE9jY2x1c2lvbkNvbG9yO3NsYWJfZ2xvc3N5X2libD1iYXNlU3BlY3VsYXJFbnZpcm9ubWVudExpZ2h0KnZMaWdodGluZ0ludGVuc2l0eS56O3NsYWJfbWV0YWxfaWJsPWJhc2VTcGVjdWxhckVudmlyb25tZW50TGlnaHQqY29uZHVjdG9ySWJsRnJlc25lbCp2TGlnaHRpbmdJbnRlbnNpdHkuejt2ZWMzIGNvYXRBYnNvcnB0aW9uPXZlYzMoMS4wKTtpZiAoY29hdF93ZWlnaHQ+MC4wKSB7c2xhYl9jb2F0X2libD1jb2F0RW52aXJvbm1lbnRMaWdodCp2TGlnaHRpbmdJbnRlbnNpdHkuejtmbG9hdCBoZW1pc3BoZXJlX2F2Z19mcmVzbmVsPWNvYXRSZWZsZWN0YW5jZS5GMCswLjUqKDEuMC1jb2F0UmVmbGVjdGFuY2UuRjApO2Zsb2F0IGF2ZXJhZ2VSZWZsZWN0YW5jZT0oY29hdElibEZyZXNuZWwraGVtaXNwaGVyZV9hdmdfZnJlc25lbCkqMC41O2Zsb2F0IHJvdWdobmVzc0ZhY3Rvcj0xLjAtY29hdF9yb3VnaG5lc3MqMC41O2F2ZXJhZ2VSZWZsZWN0YW5jZSo9cm91Z2huZXNzRmFjdG9yO2Zsb2F0IGRhcmtlbmVkX3RyYW5zbWlzc2lvbj0oMS4wLWF2ZXJhZ2VSZWZsZWN0YW5jZSkqKDEuMC1hdmVyYWdlUmVmbGVjdGFuY2UpO2RhcmtlbmVkX3RyYW5zbWlzc2lvbj1taXgoMS4wLGRhcmtlbmVkX3RyYW5zbWlzc2lvbixjb2F0X2RhcmtlbmluZyk7ZmxvYXQgc2luMj0xLjAtY29hdEdlb0luZm8uTmRvdFYqY29hdEdlb0luZm8uTmRvdFY7c2luMj1zaW4yLyhjb2F0X2lvcipjb2F0X2lvcik7ZmxvYXQgY29zX3Q9c3FydCgxLjAtc2luMik7ZmxvYXQgY29hdFBhdGhMZW5ndGg9MS4wL2Nvc190O3ZlYzMgY29sb3JlZF90cmFuc21pc3Npb249cG93KGNvYXRfY29sb3IsdmVjMyhjb2F0UGF0aExlbmd0aCkpO2NvYXRBYnNvcnB0aW9uPW1peCh2ZWMzKDEuMCksY29sb3JlZF90cmFuc21pc3Npb24qZGFya2VuZWRfdHJhbnNtaXNzaW9uLGNvYXRfd2VpZ2h0KTt9XG4jaWZkZWYgRlVaWlxudmVjMyBzbGFiX2Z1enpfaWJsPWZ1enpFbnZpcm9ubWVudExpZ2h0KnZMaWdodGluZ0ludGVuc2l0eS56O1xuI2VuZGlmXG52ZWMzIHNsYWJfc3Vic3VyZmFjZV9pYmw9dmVjMygwLiwwLiwwLik7dmVjMyBzbGFiX3RyYW5zbHVjZW50X2Jhc2VfaWJsPXZlYzMoMC4sMC4sMC4pO3NsYWJfZGlmZnVzZV9pYmwqPWJhc2VfY29sb3IucmdiO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0lCTExBWUVSQ09NUE9TSVRJT05cbnZlYzMgbWF0ZXJpYWxfb3BhcXVlX2Jhc2VfaWJsPW1peChzbGFiX2RpZmZ1c2VfaWJsLHNsYWJfc3Vic3VyZmFjZV9pYmwsc3Vic3VyZmFjZV93ZWlnaHQpO3ZlYzMgbWF0ZXJpYWxfZGllbGVjdHJpY19iYXNlX2libD1taXgobWF0ZXJpYWxfb3BhcXVlX2Jhc2VfaWJsLHNsYWJfdHJhbnNsdWNlbnRfYmFzZV9pYmwsdHJhbnNtaXNzaW9uX3dlaWdodCk7dmVjMyBtYXRlcmlhbF9kaWVsZWN0cmljX2dsb3NzX2libD1tYXRlcmlhbF9kaWVsZWN0cmljX2Jhc2VfaWJsKigxLjAtZGllbGVjdHJpY0libEZyZXNuZWwpK3NsYWJfZ2xvc3N5X2libCpkaWVsZWN0cmljSWJsQ29sb3JlZEZyZXNuZWw7dmVjMyBtYXRlcmlhbF9iYXNlX3N1YnN0cmF0ZV9pYmw9bWl4KG1hdGVyaWFsX2RpZWxlY3RyaWNfZ2xvc3NfaWJsLHNsYWJfbWV0YWxfaWJsLGJhc2VfbWV0YWxuZXNzKTt2ZWMzIG1hdGVyaWFsX2NvYXRlZF9iYXNlX2libD1sYXllcihtYXRlcmlhbF9iYXNlX3N1YnN0cmF0ZV9pYmwsc2xhYl9jb2F0X2libCxjb2F0SWJsRnJlc25lbCxjb2F0QWJzb3JwdGlvbix2ZWMzKDEuMCkpO1xuI2lmZGVmIEZVWlpcbm1hdGVyaWFsX3N1cmZhY2VfaWJsPWxheWVyKG1hdGVyaWFsX2NvYXRlZF9iYXNlX2libCxzbGFiX2Z1enpfaWJsLGZ1enpJYmxGcmVzbmVsKmZ1enpfd2VpZ2h0LHZlYzMoMS4wKSxmdXp6X2NvbG9yKTtcbiNlbHNlXG5tYXRlcmlhbF9zdXJmYWNlX2libD1tYXRlcmlhbF9jb2F0ZWRfYmFzZV9pYmw7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRW52aXJvbm1lbnRMaWdodGluZyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vZGVjYWxGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSB2ZWM0IHZFeWVQb3NpdGlvbjt1bmlmb3JtIGZsb2F0IHZCYXNlV2VpZ2h0O3VuaWZvcm0gdmVjNCB2QmFzZUNvbG9yO3VuaWZvcm0gZmxvYXQgdkJhc2VEaWZmdXNlUm91Z2huZXNzO3VuaWZvcm0gdmVjNCB2UmVmbGVjdGFuY2VJbmZvO3VuaWZvcm0gdmVjNCB2U3BlY3VsYXJDb2xvcjt1bmlmb3JtIHZlYzMgdlNwZWN1bGFyQW5pc290cm9weTt1bmlmb3JtIGZsb2F0IHZDb2F0V2VpZ2h0O3VuaWZvcm0gdmVjMyB2Q29hdENvbG9yO3VuaWZvcm0gZmxvYXQgdkNvYXRSb3VnaG5lc3M7dW5pZm9ybSBmbG9hdCB2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHk7dW5pZm9ybSBmbG9hdCB2Q29hdElvcjt1bmlmb3JtIGZsb2F0IHZDb2F0RGFya2VuaW5nO3VuaWZvcm0gZmxvYXQgdkZ1enpXZWlnaHQ7dW5pZm9ybSB2ZWMzIHZGdXp6Q29sb3I7dW5pZm9ybSBmbG9hdCB2RnV6elJvdWdobmVzczt1bmlmb3JtIHZlYzIgdkdlb21ldHJ5Q29hdFRhbmdlbnQ7dW5pZm9ybSB2ZWMzIHZFbWlzc2lvbkNvbG9yO3VuaWZvcm0gZmxvYXQgdlRoaW5GaWxtV2VpZ2h0O3VuaWZvcm0gdmVjMiB2VGhpbkZpbG1UaGlja25lc3M7dW5pZm9ybSBmbG9hdCB2VGhpbkZpbG1Jb3I7dW5pZm9ybSB2ZWM0IHZMaWdodGluZ0ludGVuc2l0eTt1bmlmb3JtIGZsb2F0IHZpc2liaWxpdHk7XG4jaWZkZWYgQkFTRV9DT0xPUlxudW5pZm9ybSB2ZWMyIHZCYXNlQ29sb3JJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEJBU0VfV0VJR0hUXG51bmlmb3JtIHZlYzIgdkJhc2VXZWlnaHRJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEJBU0VfTUVUQUxORVNTXG51bmlmb3JtIHZlYzIgdkJhc2VNZXRhbG5lc3NJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEJBU0VfRElGRlVTRV9ST1VHSE5FU1NcbnVuaWZvcm0gdmVjMiB2QmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcztcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1dFSUdIVFxudW5pZm9ybSB2ZWMyIHZTcGVjdWxhcldlaWdodEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJfQ09MT1JcbnVuaWZvcm0gdmVjMiB2U3BlY3VsYXJDb2xvckluZm9zO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJfUk9VR0hORVNTXG51bmlmb3JtIHZlYzIgdlNwZWN1bGFyUm91Z2huZXNzSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUl9ST1VHSE5FU1NfQU5JU09UUk9QWVxudW5pZm9ybSB2ZWMyIHZTcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHlJbmZvcztcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX0lPUlxudW5pZm9ybSB2ZWMyIHZTcGVjdWxhcklvckluZm9zO1xuI2VuZGlmXG4jaWZkZWYgQU1CSUVOVF9PQ0NMVVNJT05cbnVuaWZvcm0gdmVjMiB2QW1iaWVudE9jY2x1c2lvbkluZm9zO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfTk9STUFMXG51bmlmb3JtIHZlYzIgdkdlb21ldHJ5Tm9ybWFsSW5mb3M7dW5pZm9ybSB2ZWMyIHZUYW5nZW50U3BhY2VQYXJhbXM7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9UQU5HRU5UXG51bmlmb3JtIHZlYzIgdkdlb21ldHJ5VGFuZ2VudEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfQ09BVF9OT1JNQUxcbnVuaWZvcm0gdmVjMiB2R2VvbWV0cnlDb2F0Tm9ybWFsSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9PUEFDSVRZXG51bmlmb3JtIHZlYzIgdkdlb21ldHJ5T3BhY2l0eUluZm9zO1xuI2VuZGlmXG4jaWZkZWYgRU1JU1NJT05fQ09MT1JcbnVuaWZvcm0gdmVjMiB2RW1pc3Npb25Db2xvckluZm9zO1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9XRUlHSFRcbnVuaWZvcm0gdmVjMiB2Q29hdFdlaWdodEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9DT0xPUlxudW5pZm9ybSB2ZWMyIHZDb2F0Q29sb3JJbmZvcztcbiNlbmRpZlxuI2lmZGVmIENPQVRfUk9VR0hORVNTXG51bmlmb3JtIHZlYzIgdkNvYXRSb3VnaG5lc3NJbmZvcztcbiNlbmRpZlxuI2lmZGVmIENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFlcbnVuaWZvcm0gdmVjMiB2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHlJbmZvcztcbiNlbmRpZlxuI2lmZGVmIENPQVRfSU9SXG51bmlmb3JtIHZlYzIgdkNvYXRJb3JJbmZvcztcbiNlbmRpZlxuI2lmZGVmIENPQVRfREFSS0VOSU5HXG51bmlmb3JtIHZlYzIgdkNvYXREYXJrZW5pbmdJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEZVWlpfV0VJR0hUXG51bmlmb3JtIHZlYzIgdkZ1enpXZWlnaHRJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEZVWlpfQ09MT1JcbnVuaWZvcm0gdmVjMiB2RnV6ekNvbG9ySW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBGVVpaX1JPVUdITkVTU1xudW5pZm9ybSB2ZWMyIHZGdXp6Um91Z2huZXNzSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9DT0FUX1RBTkdFTlRcbnVuaWZvcm0gdmVjMiB2R2VvbWV0cnlDb2F0VGFuZ2VudEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgVEhJTl9GSUxNX1dFSUdIVFxudW5pZm9ybSB2ZWMyIHZUaGluRmlsbVdlaWdodEluZm9zO1xuI2VuZGlmXG4jaWZkZWYgVEhJTl9GSUxNX1RISUNLTkVTU1xudW5pZm9ybSB2ZWMyIHZUaGluRmlsbVRoaWNrbmVzc0luZm9zO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NQSEVSSUNBTCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX1BST0pFQ1RJT04pIHx8IGRlZmluZWQoU1NfUkVGUkFDVElPTikgfHwgZGVmaW5lZChQUkVQQVNTKVxudW5pZm9ybSBtYXQ0IHZpZXc7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OXG51bmlmb3JtIHZlYzIgdlJlZmxlY3Rpb25JbmZvcztcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbnVuaWZvcm0gdmVjMiB2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm87XG4jZW5kaWZcbnVuaWZvcm0gbWF0NCByZWZsZWN0aW9uTWF0cml4O3VuaWZvcm0gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO1xuI2lmIGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUCkgJiYgZGVmaW5lZChVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT04pXG51bmlmb3JtIHZlYzMgdlJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVVNFX0xPQ0FMX1JFRkxFQ1RJT05NQVBfQ1VCSUMpICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9DVUJJQylcbnVuaWZvcm0gdmVjMyB2UmVmbGVjdGlvblBvc2l0aW9uO3VuaWZvcm0gdmVjMyB2UmVmbGVjdGlvblNpemU7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NcbiNpZmRlZiBTU19TQ0FUVEVSSU5HXG51bmlmb3JtIGZsb2F0IHNjYXR0ZXJpbmdEaWZmdXNpb25Qcm9maWxlO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxudW5pZm9ybSB2ZWMyIHZEZWJ1Z01vZGU7XG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbnVuaWZvcm0gdmVjNCB2RGV0YWlsSW5mb3M7XG4jZW5kaWZcbiNpbmNsdWRlPGRlY2FsRnJhZ21lbnREZWNsYXJhdGlvbj5cbiNpZmRlZiBVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUFxuI2lmZGVmIFNQSEVSSUNBTF9IQVJNT05JQ1NcbnVuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDAwO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDFfMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwxMDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwxMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyXzI7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMl8xO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDIwO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDIxO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDIyO1xuI2Vsc2VcbnVuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFk7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxaO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWFhfWlo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxZWV9aWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFpaO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWFk7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxZWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFpYO1xuI2VuZGlmXG4jZW5kaWZcbiNkZWZpbmUgQURESVRJT05BTF9GUkFHTUVOVF9ERUNMQVJBVElPTlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRnJhZ21lbnREZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9DT0xPUixfVkFSWUlOR05BTUVfLEJhc2VDb2xvcixfU0FNUExFUk5BTUVfLGJhc2VDb2xvcilcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0LF9TQU1QTEVSTkFNRV8sYmFzZVdlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9ESUZGVVNFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzLF9TQU1QTEVSTkFNRV8sYmFzZURpZmZ1c2VSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfTUVUQUxORVNTLF9WQVJZSU5HTkFNRV8sQmFzZU1ldGFsbmVzcyxfU0FNUExFUk5BTUVfLGJhc2VNZXRhbG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1dFSUdIVCxfVkFSWUlOR05BTUVfLFNwZWN1bGFyV2VpZ2h0LF9TQU1QTEVSTkFNRV8sc3BlY3VsYXJXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX0NPTE9SLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJDb2xvcixfU0FNUExFUk5BTUVfLHNwZWN1bGFyQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLFNwZWN1bGFyUm91Z2huZXNzLF9TQU1QTEVSTkFNRV8sc3BlY3VsYXJSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5LF9TQU1QTEVSTkFNRV8sc3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1dFSUdIVCxfVkFSWUlOR05BTUVfLENvYXRXZWlnaHQsX1NBTVBMRVJOQU1FXyxjb2F0V2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX0NPTE9SLF9WQVJZSU5HTkFNRV8sQ29hdENvbG9yLF9TQU1QTEVSTkFNRV8sY29hdENvbG9yKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLENvYXRSb3VnaG5lc3MsX1NBTVBMRVJOQU1FXyxjb2F0Um91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1JPVUdITkVTU19BTklTT1RST1BZLF9WQVJZSU5HTkFNRV8sQ29hdFJvdWdobmVzc0FuaXNvdHJvcHksX1NBTVBMRVJOQU1FXyxjb2F0Um91Z2huZXNzQW5pc290cm9weSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9EQVJLRU5JTkcsX1ZBUllJTkdOQU1FXyxDb2F0RGFya2VuaW5nLF9TQU1QTEVSTkFNRV8sY29hdERhcmtlbmluZylcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sRlVaWl9XRUlHSFQsX1ZBUllJTkdOQU1FXyxGdXp6V2VpZ2h0LF9TQU1QTEVSTkFNRV8sZnV6eldlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sRlVaWl9DT0xPUixfVkFSWUlOR05BTUVfLEZ1enpDb2xvcixfU0FNUExFUk5BTUVfLGZ1enpDb2xvcilcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sRlVaWl9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxGdXp6Um91Z2huZXNzLF9TQU1QTEVSTkFNRV8sZnV6elJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfT1BBQ0lUWSxfVkFSWUlOR05BTUVfLEdlb21ldHJ5T3BhY2l0eSxfU0FNUExFUk5BTUVfLGdlb21ldHJ5T3BhY2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfVEFOR0VOVCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5VGFuZ2VudCxfU0FNUExFUk5BTUVfLGdlb21ldHJ5VGFuZ2VudClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfQ09BVF9UQU5HRU5ULF9WQVJZSU5HTkFNRV8sR2VvbWV0cnlDb2F0VGFuZ2VudCxfU0FNUExFUk5BTUVfLGdlb21ldHJ5Q29hdFRhbmdlbnQpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSU9OX0NPTE9SLF9WQVJZSU5HTkFNRV8sRW1pc3Npb25Db2xvcixfU0FNUExFUk5BTUVfLGVtaXNzaW9uQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFRISU5fRklMTV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxUaGluRmlsbVdlaWdodCxfU0FNUExFUk5BTUVfLHRoaW5GaWxtV2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxUSElOX0ZJTE1fVEhJQ0tORVNTLF9WQVJZSU5HTkFNRV8sVGhpbkZpbG1UaGlja25lc3MsX1NBTVBMRVJOQU1FXyx0aGluRmlsbVRoaWNrbmVzcylcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVF9PQ0NMVVNJT04sX1ZBUllJTkdOQU1FXyxBbWJpZW50T2NjbHVzaW9uLF9TQU1QTEVSTkFNRV8sYW1iaWVudE9jY2x1c2lvbilcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbCxfU0FNUExFUk5BTUVfLGRlY2FsKVxuI2lmZGVmIFJFRkxFQ1RJT05cbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4jZGVmaW5lIHNhbXBsZVJlZmxlY3Rpb24ocyxjKSB0ZXh0dXJlQ3ViZShzLGMpXG51bmlmb3JtIHNhbXBsZXJDdWJlIHJlZmxlY3Rpb25TYW1wbGVyO1xuI2lmZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jZGVmaW5lIHNhbXBsZVJlZmxlY3Rpb25Mb2QocyxjLGwpIHRleHR1cmVDdWJlTG9kRVhUKHMsYyxsKVxuI2Vsc2VcbnVuaWZvcm0gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJMb3c7dW5pZm9ybSBzYW1wbGVyQ3ViZSByZWZsZWN0aW9uU2FtcGxlckhpZ2g7XG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG51bmlmb3JtIHNhbXBsZXJDdWJlIGlycmFkaWFuY2VTYW1wbGVyO1xuI2VuZGlmXG4jZWxzZVxuI2RlZmluZSBzYW1wbGVSZWZsZWN0aW9uKHMsYykgdGV4dHVyZTJEKHMsYylcbnVuaWZvcm0gc2FtcGxlcjJEIHJlZmxlY3Rpb25TYW1wbGVyO1xuI2lmZGVmIExPREJBU0VETUlDUk9TRlVSQUNFXG4jZGVmaW5lIHNhbXBsZVJlZmxlY3Rpb25Mb2QocyxjLGwpIHRleHR1cmUyRExvZEVYVChzLGMsbClcbiNlbHNlXG51bmlmb3JtIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckxvdzt1bmlmb3JtIHNhbXBsZXIyRCByZWZsZWN0aW9uU2FtcGxlckhpZ2g7XG4jZW5kaWZcbiNpZmRlZiBVU0VJUlJBRElBTkNFTUFQXG51bmlmb3JtIHNhbXBsZXIyRCBpcnJhZGlhbmNlU2FtcGxlcjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb25VVlc7XG4jZWxzZVxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZhcnlpbmcgdmVjMyB2RGlyZWN0aW9uVztcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBFTlZJUk9OTUVOVEJSREZcbnVuaWZvcm0gc2FtcGxlcjJEIGVudmlyb25tZW50QnJkZlNhbXBsZXI7XG4jZW5kaWZcbiNpZmRlZiBGVVpaRU5WSVJPTk1FTlRCUkRGXG51bmlmb3JtIHNhbXBsZXIyRCBlbnZpcm9ubWVudEZ1enpCcmRmU2FtcGxlcjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQU5JU09UUk9QSUMpIHx8IGRlZmluZWQoRlVaWilcbnVuaWZvcm0gc2FtcGxlcjJEIGJsdWVOb2lzZVNhbXBsZXI7XG4jZW5kaWZcbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xudW5pZm9ybSBzYW1wbGVyMkQgaWNkZlNhbXBsZXI7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickZyYWdtZW50U2FtcGxlcnNEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickZ1enpMYXllckRhdGFcIjtcbmNvbnN0IHNoYWRlciA9IGBmbG9hdCBmdXp6X3dlaWdodD0wLjA7dmVjMyBmdXp6X2NvbG9yPXZlYzMoMS4wKTtmbG9hdCBmdXp6X3JvdWdobmVzcz0wLjA7XG4jaWZkZWYgRlVaWlxuI2lmZGVmIEZVWlpfV0VJR0hUXG52ZWM0IGZ1enpXZWlnaHRGcm9tVGV4dHVyZT10ZXh0dXJlMkQoZnV6eldlaWdodFNhbXBsZXIsdkZ1enpXZWlnaHRVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBGVVpaX0NPTE9SXG52ZWM0IGZ1enpDb2xvckZyb21UZXh0dXJlPXRleHR1cmUyRChmdXp6Q29sb3JTYW1wbGVyLHZGdXp6Q29sb3JVVit1dk9mZnNldCk7XG4jZW5kaWZcbiNpZmRlZiBGVVpaX1JPVUdITkVTU1xudmVjNCBmdXp6Um91Z2huZXNzRnJvbVRleHR1cmU9dGV4dHVyZTJEKGZ1enpSb3VnaG5lc3NTYW1wbGVyLHZGdXp6Um91Z2huZXNzVVYrdXZPZmZzZXQpO1xuI2VuZGlmXG5mdXp6X2NvbG9yPXZGdXp6Q29sb3IucmdiO2Z1enpfd2VpZ2h0PXZGdXp6V2VpZ2h0O2Z1enpfcm91Z2huZXNzPXZGdXp6Um91Z2huZXNzO1xuI2lmZGVmIEZVWlpfV0VJR0hUXG5mdXp6X3dlaWdodCo9ZnV6eldlaWdodEZyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNpZmRlZiBGVVpaX0NPTE9SXG4jaWZkZWYgRlVaWl9DT0xPUl9HQU1NQVxuZnV6el9jb2xvcio9dG9MaW5lYXJTcGFjZShmdXp6Q29sb3JGcm9tVGV4dHVyZS5yZ2IpO1xuI2Vsc2VcbmZ1enpfY29sb3IqPWZ1enpDb2xvckZyb21UZXh0dXJlLnJnYjtcbiNlbmRpZlxuZnV6el9jb2xvcio9dkZ1enpDb2xvckluZm9zLnk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEZVWlpfUk9VR0hORVNTKSAmJiBkZWZpbmVkKEZVWlpfUk9VR0hORVNTX0ZST01fVEVYVFVSRV9BTFBIQSlcbmZ1enpfcm91Z2huZXNzKj1mdXp6Um91Z2huZXNzRnJvbVRleHR1cmUuYTtcbiNlbGlmIGRlZmluZWQoRlVaWl9ST1VHSE5FU1MpXG5mdXp6X3JvdWdobmVzcyo9ZnV6elJvdWdobmVzc0Zyb21UZXh0dXJlLnI7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyRnV6ekxheWVyRGF0YSA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBickdlb21ldHJ5SW5mb1wiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBnZW9tZXRyeUluZm9PdXRQYXJhbXNcbntmbG9hdCBOZG90VjtmbG9hdCBOZG90VlVuY2xhbXBlZDt2ZWMzIGVudmlyb25tZW50QnJkZjtmbG9hdCBob3Jpem9uT2NjbHVzaW9uO307c3RydWN0IGdlb21ldHJ5SW5mb0FuaXNvT3V0UGFyYW1zXG57ZmxvYXQgTmRvdFY7ZmxvYXQgTmRvdFZVbmNsYW1wZWQ7dmVjMyBlbnZpcm9ubWVudEJyZGY7ZmxvYXQgaG9yaXpvbk9jY2x1c2lvbjtmbG9hdCBhbmlzb3Ryb3B5O3ZlYzMgYW5pc290cm9waWNUYW5nZW50O3ZlYzMgYW5pc290cm9waWNCaXRhbmdlbnQ7bWF0MyBUQk47fTtcbiNkZWZpbmUgcGJyX2lubGluZVxuZ2VvbWV0cnlJbmZvT3V0UGFyYW1zIGdlb21ldHJ5SW5mbyhcbmluIHZlYzMgbm9ybWFsVyxpbiB2ZWMzIHZpZXdEaXJlY3Rpb25XLGluIGZsb2F0IHJvdWdobmVzcyxpbiB2ZWMzIGdlb21ldHJpY05vcm1hbFdcbilcbntnZW9tZXRyeUluZm9PdXRQYXJhbXMgb3V0UGFyYW1zO291dFBhcmFtcy5OZG90VlVuY2xhbXBlZD1kb3Qobm9ybWFsVyx2aWV3RGlyZWN0aW9uVyk7b3V0UGFyYW1zLk5kb3RWPWFic0VwcyhvdXRQYXJhbXMuTmRvdFZVbmNsYW1wZWQpO1xuI2lmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKVxub3V0UGFyYW1zLmVudmlyb25tZW50QnJkZj1nZXRCUkRGTG9va3VwKG91dFBhcmFtcy5OZG90Vixyb3VnaG5lc3MpO1xuI2Vsc2Vcbm91dFBhcmFtcy5lbnZpcm9ubWVudEJyZGY9dmVjMygwLjApO1xuI2VuZGlmXG5vdXRQYXJhbXMuaG9yaXpvbk9jY2x1c2lvbj0xLjA7XG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuI2lmZGVmIEhPUklaT05PQ0NMVVNJT05cbiNpZiBkZWZpbmVkKEdFT01FVFJZX05PUk1BTCkgfHwgZGVmaW5lZChHRU9NRVRSWV9DT0FUX05PUk1BTClcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG5vdXRQYXJhbXMuaG9yaXpvbk9jY2x1c2lvbj1lbnZpcm9ubWVudEhvcml6b25PY2NsdXNpb24oLXZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsZ2VvbWV0cmljTm9ybWFsVyk7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbnJldHVybiBvdXRQYXJhbXM7fVxuI2RlZmluZSBwYnJfaW5saW5lXG5nZW9tZXRyeUluZm9Bbmlzb091dFBhcmFtcyBnZW9tZXRyeUluZm9BbmlzbyhcbmluIHZlYzMgbm9ybWFsVyxpbiB2ZWMzIHZpZXdEaXJlY3Rpb25XLGluIGZsb2F0IHJvdWdobmVzcyxpbiB2ZWMzIGdlb21ldHJpY05vcm1hbFdcbixpbiB2ZWMzIHZBbmlzb3Ryb3B5LGluIG1hdDMgVEJOXG4pXG57Z2VvbWV0cnlJbmZvT3V0UGFyYW1zIGdlb0luZm89Z2VvbWV0cnlJbmZvKG5vcm1hbFcsdmlld0RpcmVjdGlvblcscm91Z2huZXNzLGdlb21ldHJpY05vcm1hbFcpO2dlb21ldHJ5SW5mb0FuaXNvT3V0UGFyYW1zIG91dFBhcmFtcztvdXRQYXJhbXMuTmRvdFY9Z2VvSW5mby5OZG90VjtvdXRQYXJhbXMuTmRvdFZVbmNsYW1wZWQ9Z2VvSW5mby5OZG90VlVuY2xhbXBlZDtvdXRQYXJhbXMuZW52aXJvbm1lbnRCcmRmPWdlb0luZm8uZW52aXJvbm1lbnRCcmRmO291dFBhcmFtcy5ob3Jpem9uT2NjbHVzaW9uPWdlb0luZm8uaG9yaXpvbk9jY2x1c2lvbjtvdXRQYXJhbXMuYW5pc290cm9weT12QW5pc290cm9weS5iO3ZlYzMgYW5pc290cm9weURpcmVjdGlvbj12ZWMzKHZBbmlzb3Ryb3B5Lnh5LDAuKTttYXQzIGFuaXNvVEJOPW1hdDMobm9ybWFsaXplKFRCTlswXSksbm9ybWFsaXplKFRCTlsxXSksbm9ybWFsaXplKFRCTlsyXSkpO291dFBhcmFtcy5hbmlzb3Ryb3BpY1RhbmdlbnQ9bm9ybWFsaXplKGFuaXNvVEJOKmFuaXNvdHJvcHlEaXJlY3Rpb24pO291dFBhcmFtcy5hbmlzb3Ryb3BpY0JpdGFuZ2VudD1ub3JtYWxpemUoY3Jvc3MoYW5pc29UQk5bMl0sb3V0UGFyYW1zLmFuaXNvdHJvcGljVGFuZ2VudCkpO291dFBhcmFtcy5UQk49VEJOO3JldHVybiBvdXRQYXJhbXM7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBickdlb21ldHJ5SW5mbyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBicklibEZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBSRUZMRUNUSU9OXG52ZWMzIHNhbXBsZUlycmFkaWFuY2UoXG5pbiB2ZWMzIHN1cmZhY2VOb3JtYWxcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbixpbiB2ZWMzIHZFbnZpcm9ubWVudElycmFkaWFuY2VTSFxuI2VuZGlmXG4jaWYgKGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmICghZGVmaW5lZChOT1JNQUwpIHx8ICFkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKSkpIHx8IChkZWZpbmVkKFVTRUlSUkFESUFOQ0VNQVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRCkpXG4saW4gbWF0NCBpYmxNYXRyaXhcbiNlbmRpZlxuI2lmZGVmIFVTRUlSUkFESUFOQ0VNQVBcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4saW4gc2FtcGxlckN1YmUgaXJyYWRpYW5jZVNhbXBsZXJcbiNlbHNlXG4saW4gc2FtcGxlcjJEIGlycmFkaWFuY2VTYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBVU0VfSVJSQURJQU5DRV9ET01JTkFOVF9ESVJFQ1RJT05cbixpbiB2ZWMzIHJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvblxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbixpbiB2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saW4gc2FtcGxlcjJEIGljZGZTYW1wbGVyXG4jZW5kaWZcbiNlbmRpZlxuLGluIHZlYzIgdlJlZmxlY3Rpb25JbmZvc1xuLGluIHZlYzMgdmlld0RpcmVjdGlvbldcbixpbiBmbG9hdCBkaWZmdXNlUm91Z2huZXNzXG4saW4gdmVjMyBzdXJmYWNlQWxiZWRvXG4pIHt2ZWMzIGVudmlyb25tZW50SXJyYWRpYW5jZT12ZWMzKDAuLDAuLDAuKTtcbiNpZiAoZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgKCFkZWZpbmVkKE5PUk1BTCkgfHwgIWRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpKSkgfHwgKGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKSlcbnZlYzMgaXJyYWRpYW5jZVZlY3Rvcj0oaWJsTWF0cml4KnZlYzQoc3VyZmFjZU5vcm1hbCwwKSkueHl6O3ZlYzMgaXJyYWRpYW5jZVZpZXc9KGlibE1hdHJpeCp2ZWM0KHZpZXdEaXJlY3Rpb25XLDApKS54eXo7XG4jaWYgIWRlZmluZWQoVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OKSAmJiAhZGVmaW5lZChSRUFMVElNRV9GSUxURVJJTkcpXG4jaWYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MQU1CRVJUICYmIEJBU0VfRElGRlVTRV9NT0RFTCAhPSBCUkRGX0RJRkZVU0VfTU9ERUxfTEVHQUNZXG57ZmxvYXQgTmRvdFY9bWF4KGRvdChzdXJmYWNlTm9ybWFsLHZpZXdEaXJlY3Rpb25XKSwwLjApO2lycmFkaWFuY2VWZWN0b3I9bWl4KGlycmFkaWFuY2VWZWN0b3IsaXJyYWRpYW5jZVZpZXcsKDAuNSooMS4wLU5kb3RWKSkqZGlmZnVzZVJvdWdobmVzcyk7fVxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxuaXJyYWRpYW5jZVZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgSU5WRVJUQ1VCSUNNQVBcbmlycmFkaWFuY2VWZWN0b3IueSo9LTEuMDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZiBkZWZpbmVkKE5PUk1BTCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbmVudmlyb25tZW50SXJyYWRpYW5jZT12RW52aXJvbm1lbnRJcnJhZGlhbmNlU0g7XG4jZWxzZVxuI2lmIGRlZmluZWQoUkVBTFRJTUVfRklMVEVSSU5HKVxuZW52aXJvbm1lbnRJcnJhZGlhbmNlPWlycmFkaWFuY2UocmVmbGVjdGlvblNhbXBsZXIsaXJyYWRpYW5jZVZlY3Rvcix2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm8sZGlmZnVzZVJvdWdobmVzcyxzdXJmYWNlQWxiZWRvLGlycmFkaWFuY2VWaWV3XG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbixpY2RmU2FtcGxlclxuI2VuZGlmXG4pO1xuI2Vsc2VcbmVudmlyb25tZW50SXJyYWRpYW5jZT1jb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKGlycmFkaWFuY2VWZWN0b3IpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoVVNFSVJSQURJQU5DRU1BUClcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG52ZWM0IGVudmlyb25tZW50SXJyYWRpYW5jZUZyb21UZXh0dXJlPXNhbXBsZVJlZmxlY3Rpb24oaXJyYWRpYW5jZVNhbXBsZXIsaXJyYWRpYW5jZVZlY3Rvcik7XG4jZWxzZVxudmVjNCBlbnZpcm9ubWVudElycmFkaWFuY2VGcm9tVGV4dHVyZT1zYW1wbGVSZWZsZWN0aW9uKGlycmFkaWFuY2VTYW1wbGVyLHJlZmxlY3Rpb25Db29yZHMpO1xuI2VuZGlmXG5lbnZpcm9ubWVudElycmFkaWFuY2U9ZW52aXJvbm1lbnRJcnJhZGlhbmNlRnJvbVRleHR1cmUucmdiO1xuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5lbnZpcm9ubWVudElycmFkaWFuY2UucmdiPWZyb21SR0JEKGVudmlyb25tZW50SXJyYWRpYW5jZUZyb21UZXh0dXJlKTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxuZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYj10b0xpbmVhclNwYWNlKGVudmlyb25tZW50SXJyYWRpYW5jZS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgVVNFX0lSUkFESUFOQ0VfRE9NSU5BTlRfRElSRUNUSU9OXG52ZWMzIExzPW5vcm1hbGl6ZShyZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb24pO2Zsb2F0IE5vTD1kb3QoaXJyYWRpYW5jZVZlY3RvcixMcyk7ZmxvYXQgTm9WPWRvdChpcnJhZGlhbmNlVmVjdG9yLGlycmFkaWFuY2VWaWV3KTt2ZWMzIGRpZmZ1c2VSb3VnaG5lc3NUZXJtPXZlYzMoMS4wKTtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbmZsb2F0IExvVj1kb3QgKExzLGlycmFkaWFuY2VWaWV3KTtmbG9hdCBtYWc9bGVuZ3RoKHJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbikqMi4wO3ZlYzMgY2xhbXBlZEFsYmVkbz1jbGFtcChzdXJmYWNlQWxiZWRvLHZlYzMoMC4xKSx2ZWMzKDEuMCkpO2RpZmZ1c2VSb3VnaG5lc3NUZXJtPWRpZmZ1c2VCUkRGX0VPTihjbGFtcGVkQWxiZWRvLGRpZmZ1c2VSb3VnaG5lc3MsTm9MLE5vVixMb1YpKlBJO2RpZmZ1c2VSb3VnaG5lc3NUZXJtPWRpZmZ1c2VSb3VnaG5lc3NUZXJtL2NsYW1wZWRBbGJlZG87ZGlmZnVzZVJvdWdobmVzc1Rlcm09bWl4KHZlYzMoMS4wKSxkaWZmdXNlUm91Z2huZXNzVGVybSxzcXJ0KGNsYW1wKG1hZypOb1YsMC4wLDEuMCkpKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxudmVjMyBIPShpcnJhZGlhbmNlVmlldytMcykqMC41O2Zsb2F0IFZvSD1kb3QoaXJyYWRpYW5jZVZpZXcsSCk7ZGlmZnVzZVJvdWdobmVzc1Rlcm09dmVjMyhkaWZmdXNlQlJERl9CdXJsZXkoTm9MLE5vVixWb0gsZGlmZnVzZVJvdWdobmVzcykqUEkpO1xuI2VuZGlmXG5lbnZpcm9ubWVudElycmFkaWFuY2U9ZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYipkaWZmdXNlUm91Z2huZXNzVGVybTtcbiNlbmRpZlxuI2VuZGlmXG5lbnZpcm9ubWVudElycmFkaWFuY2UqPXZSZWZsZWN0aW9uSW5mb3MueDtyZXR1cm4gZW52aXJvbm1lbnRJcnJhZGlhbmNlO31cbiNkZWZpbmUgcGJyX2lubGluZVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfM0RcbnZlYzMgY3JlYXRlUmVmbGVjdGlvbkNvb3JkcyhcbiNlbHNlXG52ZWMyIGNyZWF0ZVJlZmxlY3Rpb25Db29yZHMoXG4jZW5kaWZcbmluIHZlYzMgdlBvc2l0aW9uV1xuLGluIHZlYzMgbm9ybWFsV1xuKVxue3ZlYzMgcmVmbGVjdGlvblZlY3Rvcj1jb21wdXRlUmVmbGVjdGlvbkNvb3Jkcyh2ZWM0KHZQb3NpdGlvblcsMS4wKSxub3JtYWxXKTtcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxucmVmbGVjdGlvblZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF8zRFxudmVjMyByZWZsZWN0aW9uQ29vcmRzPXJlZmxlY3Rpb25WZWN0b3I7XG4jZWxzZVxudmVjMiByZWZsZWN0aW9uQ29vcmRzPXJlZmxlY3Rpb25WZWN0b3IueHk7XG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5yZWZsZWN0aW9uQ29vcmRzLz1yZWZsZWN0aW9uVmVjdG9yLno7XG4jZW5kaWZcbnJlZmxlY3Rpb25Db29yZHMueT0xLjAtcmVmbGVjdGlvbkNvb3Jkcy55O1xuI2VuZGlmXG5yZXR1cm4gcmVmbGVjdGlvbkNvb3Jkczt9XG4jZGVmaW5lIHBicl9pbmxpbmVcbiNkZWZpbmUgaW5saW5lXG52ZWMzIHNhbXBsZVJhZGlhbmNlKFxuaW4gZmxvYXQgYWxwaGFHXG4saW4gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zXG4saW4gdmVjMiB2UmVmbGVjdGlvbkluZm9zXG4saW4gZ2VvbWV0cnlJbmZvT3V0UGFyYW1zIGdlb0luZm9cbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4saW4gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJcbixjb25zdCB2ZWMzIHJlZmxlY3Rpb25Db29yZHNcbiNlbHNlXG4saW4gc2FtcGxlcjJEIHJlZmxlY3Rpb25TYW1wbGVyXG4sY29uc3QgdmVjMiByZWZsZWN0aW9uQ29vcmRzXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbixpbiB2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pXG57dmVjNCBlbnZpcm9ubWVudFJhZGlhbmNlPXZlYzQoMC4sMC4sMC4sMC4pO1xuI2lmIGRlZmluZWQoTE9ESU5SRUZMRUNUSU9OQUxQSEEpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuZmxvYXQgcmVmbGVjdGlvbkxPRD1nZXRMb2RGcm9tQWxwaGFHKHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxhbHBoYUcsZ2VvSW5mby5OZG90VlVuY2xhbXBlZCk7XG4jZWxpZiBkZWZpbmVkKExJTkVBUlNQRUNVTEFSUkVGTEVDVElPTilcbmZsb2F0IHJlZmxlY3Rpb25MT0Q9Z2V0TGluZWFyTG9kRnJvbVJvdWdobmVzcyh2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngscm91Z2huZXNzKTtcbiNlbHNlXG5mbG9hdCByZWZsZWN0aW9uTE9EPWdldExvZEZyb21BbHBoYUcodlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54LGFscGhhRyk7XG4jZW5kaWZcbnJlZmxlY3Rpb25MT0Q9cmVmbGVjdGlvbkxPRCp2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLnkrdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy56O1xuI2lmZGVmIFJFQUxUSU1FX0ZJTFRFUklOR1xuZW52aXJvbm1lbnRSYWRpYW5jZT12ZWM0KHJhZGlhbmNlKGFscGhhRyxyZWZsZWN0aW9uU2FtcGxlcixyZWZsZWN0aW9uQ29vcmRzLHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbyksMS4wKTtcbiNlbHNlXG5lbnZpcm9ubWVudFJhZGlhbmNlPXNhbXBsZVJlZmxlY3Rpb25Mb2QocmVmbGVjdGlvblNhbXBsZXIscmVmbGVjdGlvbkNvb3JkcyxyZWZsZWN0aW9uTE9EKTtcbiNlbmRpZlxuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYj1mcm9tUkdCRChlbnZpcm9ubWVudFJhZGlhbmNlKTtcbiNlbmRpZlxuI2lmZGVmIEdBTU1BUkVGTEVDVElPTlxuZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2I9dG9MaW5lYXJTcGFjZShlbnZpcm9ubWVudFJhZGlhbmNlLnJnYik7XG4jZW5kaWZcbmVudmlyb25tZW50UmFkaWFuY2UucmdiKj12ZWMzKHZSZWZsZWN0aW9uSW5mb3MueCk7cmV0dXJuIGVudmlyb25tZW50UmFkaWFuY2UucmdiO31cbiNpZiBkZWZpbmVkKEFOSVNPVFJPUElDKVxuI2RlZmluZSBwYnJfaW5saW5lXG4jZGVmaW5lIGlubGluZVxudmVjMyBzYW1wbGVSYWRpYW5jZUFuaXNvdHJvcGljKFxuaW4gZmxvYXQgYWxwaGFHXG4saW4gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zXG4saW4gdmVjMiB2UmVmbGVjdGlvbkluZm9zXG4saW4gZ2VvbWV0cnlJbmZvQW5pc29PdXRQYXJhbXMgZ2VvSW5mb1xuLGNvbnN0IHZlYzMgbm9ybWFsV1xuLGNvbnN0IHZlYzMgdmlld0RpcmVjdGlvbldcbixjb25zdCB2ZWMzIHBvc2l0aW9uV1xuLGNvbnN0IHZlYzMgbm9pc2VcbiNpZmRlZiBSRUZMRUNUSU9OTUFQXzNEXG4saW4gc2FtcGxlckN1YmUgcmVmbGVjdGlvblNhbXBsZXJcbiNlbHNlXG4saW4gc2FtcGxlcjJEIHJlZmxlY3Rpb25TYW1wbGVyXG4jZW5kaWZcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbixpbiB2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mb1xuI2VuZGlmXG4pXG57dmVjNCBlbnZpcm9ubWVudFJhZGlhbmNlPXZlYzQoMC4sMC4sMC4sMC4pO2Zsb2F0IGFscGhhVD1hbHBoYUcqc3FydCgyLjAvKDEuMCsoMS4wLWdlb0luZm8uYW5pc290cm9weSkqKDEuMC1nZW9JbmZvLmFuaXNvdHJvcHkpKSk7ZmxvYXQgYWxwaGFCPSgxLjAtZ2VvSW5mby5hbmlzb3Ryb3B5KSphbHBoYVQ7YWxwaGFHPWFscGhhQjtcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbmZsb2F0IHJlZmxlY3Rpb25MT0Q9Z2V0TG9kRnJvbUFscGhhRyh2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zLngsYWxwaGFHLGdlb0luZm8uTmRvdFZVbmNsYW1wZWQpO1xuI2VsaWYgZGVmaW5lZChMSU5FQVJTUEVDVUxBUlJFRkxFQ1RJT04pXG5mbG9hdCByZWZsZWN0aW9uTE9EPWdldExpbmVhckxvZEZyb21Sb3VnaG5lc3ModlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy54LHJvdWdobmVzcyk7XG4jZWxzZVxuZmxvYXQgcmVmbGVjdGlvbkxPRD1nZXRMb2RGcm9tQWxwaGFHKHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MueCxhbHBoYUcpO1xuI2VuZGlmXG5yZWZsZWN0aW9uTE9EPXJlZmxlY3Rpb25MT0QqdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvcy55K3ZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MuejtcbiNpZmRlZiBSRUFMVElNRV9GSUxURVJJTkdcbnZlYzMgdmlldz0ocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KHZpZXdEaXJlY3Rpb25XLDAuMCkpLnh5ejt2ZWMzIHRhbmdlbnQ9KHJlZmxlY3Rpb25NYXRyaXgqdmVjNChnZW9JbmZvLmFuaXNvdHJvcGljVGFuZ2VudCwwLjApKS54eXo7dmVjMyBiaXRhbmdlbnQ9KHJlZmxlY3Rpb25NYXRyaXgqdmVjNChnZW9JbmZvLmFuaXNvdHJvcGljQml0YW5nZW50LDAuMCkpLnh5ejt2ZWMzIG5vcm1hbD0ocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KG5vcm1hbFcsMC4wKSkueHl6O1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG52aWV3LnoqPS0xLjA7dGFuZ2VudC56Kj0tMS4wO2JpdGFuZ2VudC56Kj0tMS4wO25vcm1hbC56Kj0tMS4wO1xuI2VuZGlmXG5lbnZpcm9ubWVudFJhZGlhbmNlID1cbnZlYzQocmFkaWFuY2VBbmlzb3Ryb3BpYyhhbHBoYVQsYWxwaGFCLHJlZmxlY3Rpb25TYW1wbGVyLFxudmlldyx0YW5nZW50LFxuYml0YW5nZW50LG5vcm1hbCxcbnZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbyxub2lzZS54eSksXG4xLjApO1xuI2Vsc2VcbmNvbnN0IGludCBzYW1wbGVzPTE2O3ZlYzQgcmFkaWFuY2VTYW1wbGU9dmVjNCgwLjApO3ZlYzMgcmVmbGVjdGlvbkNvb3Jkcz12ZWMzKDAuMCk7ZmxvYXQgc2FtcGxlX3dlaWdodD0wLjA7ZmxvYXQgdG90YWxfd2VpZ2h0PTAuMDtmbG9hdCBzdGVwPTEuMC9mbG9hdChtYXgoc2FtcGxlcy0xLDEpKTtmb3IgKGludCBpPTA7IGk8c2FtcGxlczsgKytpKSB7ZmxvYXQgdD1taXgoLTEuMCwxLjAsZmxvYXQoaSkqc3RlcCk7dCs9c3RlcCoyLjAqbm9pc2UueDtzYW1wbGVfd2VpZ2h0PW1heCgxLjAtYWJzKHQpLDAuMDAxKTtzYW1wbGVfd2VpZ2h0Kj1zYW1wbGVfd2VpZ2h0O3QqPW1pbig0LjAqYWxwaGFUKmdlb0luZm8uYW5pc290cm9weSwxLjApO3ZlYzMgYmVudE5vcm1hbDtpZiAodDwwLjApIHtmbG9hdCBibGVuZD10KzEuMDtiZW50Tm9ybWFsPW5vcm1hbGl6ZShtaXgoLWdlb0luZm8uYW5pc290cm9waWNUYW5nZW50LG5vcm1hbFcsYmxlbmQpKTt9IGVsc2UgaWYgKHQ+MC4wKSB7ZmxvYXQgYmxlbmQ9dDtiZW50Tm9ybWFsPW5vcm1hbGl6ZShtaXgobm9ybWFsVyxnZW9JbmZvLmFuaXNvdHJvcGljVGFuZ2VudCxibGVuZCkpO30gZWxzZSB7YmVudE5vcm1hbD1ub3JtYWxXO31cbnJlZmxlY3Rpb25Db29yZHM9Y3JlYXRlUmVmbGVjdGlvbkNvb3Jkcyhwb3NpdGlvblcsYmVudE5vcm1hbCk7cmFkaWFuY2VTYW1wbGU9c2FtcGxlUmVmbGVjdGlvbkxvZChyZWZsZWN0aW9uU2FtcGxlcixyZWZsZWN0aW9uQ29vcmRzLHJlZmxlY3Rpb25MT0QpO1xuI2lmZGVmIFJHQkRSRUZMRUNUSU9OXG5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYis9c2FtcGxlX3dlaWdodCpmcm9tUkdCRChyYWRpYW5jZVNhbXBsZSk7XG4jZWxpZiBkZWZpbmVkKEdBTU1BUkVGTEVDVElPTilcbmVudmlyb25tZW50UmFkaWFuY2UucmdiKz1zYW1wbGVfd2VpZ2h0KnRvTGluZWFyU3BhY2UocmFkaWFuY2VTYW1wbGUucmdiKTtcbiNlbHNlXG5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYis9c2FtcGxlX3dlaWdodCpyYWRpYW5jZVNhbXBsZS5yZ2I7XG4jZW5kaWZcbnRvdGFsX3dlaWdodCs9c2FtcGxlX3dlaWdodDt9XG5lbnZpcm9ubWVudFJhZGlhbmNlPXZlYzQoZW52aXJvbm1lbnRSYWRpYW5jZS54eXovZmxvYXQodG90YWxfd2VpZ2h0KSwxLjApO1xuI2VuZGlmXG5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYio9dmVjMyh2UmVmbGVjdGlvbkluZm9zLngpO3JldHVybiBlbnZpcm9ubWVudFJhZGlhbmNlLnJnYjt9XG4jZW5kaWZcbiNkZWZpbmUgcGJyX2lubGluZVxudmVjMyBjb25kdWN0b3JJYmxGcmVzbmVsKGluIFJlZmxlY3RhbmNlUGFyYW1zIHJlZmxlY3RhbmNlLGluIGZsb2F0IE5kb3RWLGluIGZsb2F0IHJvdWdobmVzcyxpbiB2ZWMzIGVudmlyb25tZW50QnJkZilcbntcbiNpZiAoQ09ORFVDVE9SX1NQRUNVTEFSX01PREVMPT1DT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUilcbnZlYzMgYWxiZWRvRjA9bWl4KHJlZmxlY3RhbmNlLmNvbG9yZWRGMCxwb3cocmVmbGVjdGFuY2UuY29sb3JlZEYwLHZlYzMoMS40KSkscm91Z2huZXNzKTtyZXR1cm4gZ2V0RjgyU3BlY3VsYXIoTmRvdFYsYWxiZWRvRjAscmVmbGVjdGFuY2UuY29sb3JlZEY5MCxyb3VnaG5lc3MpO1xuI2Vsc2VcbnJldHVybiBnZXRSZWZsZWN0YW5jZUZyb21CUkRGTG9va3VwKHJlZmxlY3RhbmNlLmNvbG9yZWRGMCxyZWZsZWN0YW5jZS5jb2xvcmVkRjkwLGVudmlyb25tZW50QnJkZik7XG4jZW5kaWZcbn1cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJySWJsRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGB2ZWMyIHV2T2Zmc2V0PXZlYzIoMC4wLDAuMCk7XG4jaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpIHx8IGRlZmluZWQoR0VPTUVUUllfQ09BVF9OT1JNQUwpIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoREVUQUlMKVxuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbmZsb2F0IG5vcm1hbFNjYWxlPTEuMDtcbiNlbGlmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKVxuZmxvYXQgbm9ybWFsU2NhbGU9dkdlb21ldHJ5Tm9ybWFsSW5mb3MueTtcbiNlbHNlXG5mbG9hdCBub3JtYWxTY2FsZT0xLjA7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxubWF0MyBUQk49dlRCTjtcbiNlbGlmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKVxudmVjMiBUQk5VVj1nbF9Gcm9udEZhY2luZyA/IHZHZW9tZXRyeU5vcm1hbFVWIDogLXZHZW9tZXRyeU5vcm1hbFVWO21hdDMgVEJOPWNvdGFuZ2VudF9mcmFtZShub3JtYWxXKm5vcm1hbFNjYWxlLHZQb3NpdGlvblcsVEJOVVYsdlRhbmdlbnRTcGFjZVBhcmFtcyk7XG4jZWxzZVxudmVjMiBUQk5VVj1nbF9Gcm9udEZhY2luZyA/IHZEZXRhaWxVViA6IC12RGV0YWlsVVY7bWF0MyBUQk49Y290YW5nZW50X2ZyYW1lKG5vcm1hbFcqbm9ybWFsU2NhbGUsdlBvc2l0aW9uVyxUQk5VVix2ZWMyKDEuLDEuKSk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoQU5JU09UUk9QSUMpIHx8IGRlZmluZWQoRlVaWilcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxubWF0MyBUQk49dlRCTjtcbiNlbHNlXG52ZWMyIFRCTlVWPWdsX0Zyb250RmFjaW5nID8gdk1haW5VVjEgOiAtdk1haW5VVjE7bWF0MyBUQk49Y290YW5nZW50X2ZyYW1lKG5vcm1hbFcsdlBvc2l0aW9uVyxUQk5VVix2ZWMyKDEuLDEuKSk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBBUkFMTEFYXG5tYXQzIGludlRCTj10cmFuc3Bvc2VNYXQzKFRCTik7XG4jaWZkZWYgUEFSQUxMQVhPQ0NMVVNJT05cbiNlbHNlXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxudmVjNCBkZXRhaWxDb2xvcj10ZXh0dXJlMkQoZGV0YWlsU2FtcGxlcix2RGV0YWlsVVYrdXZPZmZzZXQpO3ZlYzIgZGV0YWlsTm9ybWFsUkc9ZGV0YWlsQ29sb3Iud3kqMi4wLTEuMDtmbG9hdCBkZXRhaWxOb3JtYWxCPXNxcnQoMS4tc2F0dXJhdGUoZG90KGRldGFpbE5vcm1hbFJHLGRldGFpbE5vcm1hbFJHKSkpO3ZlYzMgZGV0YWlsTm9ybWFsPXZlYzMoZGV0YWlsTm9ybWFsUkcsZGV0YWlsTm9ybWFsQik7XG4jZW5kaWZcbiNpZmRlZiBHRU9NRVRSWV9DT0FUX05PUk1BTFxuY29hdE5vcm1hbFc9cGVydHVyYk5vcm1hbChUQk4sdGV4dHVyZTJEKGdlb21ldHJ5Q29hdE5vcm1hbFNhbXBsZXIsdkdlb21ldHJ5Q29hdE5vcm1hbFVWK3V2T2Zmc2V0KS54eXosdkdlb21ldHJ5Q29hdE5vcm1hbEluZm9zLnkpO1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfTk9STUFMXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CVU1QX0ZSQUdNRU5UXG5ub3JtYWxXPW5vcm1hbGl6ZSh0ZXh0dXJlMkQoZ2VvbWV0cnlOb3JtYWxTYW1wbGVyLHZHZW9tZXRyeU5vcm1hbFVWKS54eXogKjIuMC0xLjApO25vcm1hbFc9bm9ybWFsaXplKG1hdDMobm9ybWFsTWF0cml4KSpub3JtYWxXKTtcbiNlbGlmICFkZWZpbmVkKERFVEFJTClcbm5vcm1hbFc9cGVydHVyYk5vcm1hbChUQk4sdGV4dHVyZTJEKGdlb21ldHJ5Tm9ybWFsU2FtcGxlcix2R2VvbWV0cnlOb3JtYWxVVit1dk9mZnNldCkueHl6LHZHZW9tZXRyeU5vcm1hbEluZm9zLnkpO1xuI2Vsc2VcbnZlYzMgc2FtcGxlZE5vcm1hbD10ZXh0dXJlMkQoZ2VvbWV0cnlOb3JtYWxTYW1wbGVyLHZHZW9tZXRyeU5vcm1hbFVWK3V2T2Zmc2V0KS54eXoqMi4wLTEuMDtcbiNpZiBERVRBSUxfTk9STUFMQkxFTkRNRVRIT0Q9PTAgXG5kZXRhaWxOb3JtYWwueHkqPXZEZXRhaWxJbmZvcy56O3ZlYzMgYmxlbmRlZE5vcm1hbD1ub3JtYWxpemUodmVjMyhzYW1wbGVkTm9ybWFsLnh5K2RldGFpbE5vcm1hbC54eSxzYW1wbGVkTm9ybWFsLnoqZGV0YWlsTm9ybWFsLnopKTtcbiNlbGlmIERFVEFJTF9OT1JNQUxCTEVORE1FVEhPRD09MSBcbmRldGFpbE5vcm1hbC54eSo9dkRldGFpbEluZm9zLno7c2FtcGxlZE5vcm1hbCs9dmVjMygwLjAsMC4wLDEuMCk7ZGV0YWlsTm9ybWFsKj12ZWMzKC0xLjAsLTEuMCwxLjApO3ZlYzMgYmxlbmRlZE5vcm1hbD1zYW1wbGVkTm9ybWFsKmRvdChzYW1wbGVkTm9ybWFsLGRldGFpbE5vcm1hbCkvc2FtcGxlZE5vcm1hbC56LWRldGFpbE5vcm1hbDtcbiNlbmRpZlxubm9ybWFsVz1wZXJ0dXJiTm9ybWFsQmFzZShUQk4sYmxlbmRlZE5vcm1hbCx2R2VvbWV0cnlOb3JtYWxJbmZvcy55KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChERVRBSUwpXG5kZXRhaWxOb3JtYWwueHkqPXZEZXRhaWxJbmZvcy56O25vcm1hbFc9cGVydHVyYk5vcm1hbEJhc2UoVEJOLGRldGFpbE5vcm1hbCx2RGV0YWlsSW5mb3Mueik7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBick5vcm1hbE1hcEZyYWdtZW50ID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX05PUk1BTCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5Tm9ybWFsLF9TQU1QTEVSTkFNRV8sZ2VvbWV0cnlOb3JtYWwpXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEdFT01FVFJZX0NPQVRfTk9STUFMKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9DT0FUX05PUk1BTCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5Q29hdE5vcm1hbCxfU0FNUExFUk5BTUVfLGdlb21ldHJ5Q29hdE5vcm1hbClcbiNlbmRpZlxuI2lmIGRlZmluZWQoREVUQUlMKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERVRBSUwsX1ZBUllJTkdOQU1FXyxEZXRhaWwsX1NBTVBMRVJOQU1FXyxkZXRhaWwpXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEdFT01FVFJZX05PUk1BTCkgJiYgZGVmaW5lZChQQVJBTExBWClcbmNvbnN0IGZsb2F0IG1pblNhbXBsZXM9NC47Y29uc3QgZmxvYXQgbWF4U2FtcGxlcz0xNS47Y29uc3QgaW50IGlNYXhTYW1wbGVzPTE1O3ZlYzIgcGFyYWxsYXhPY2NsdXNpb24odmVjMyB2Vmlld0RpckNvVCx2ZWMzIHZOb3JtYWxDb1QsdmVjMiB0ZXhDb29yZCxmbG9hdCBwYXJhbGxheFNjYWxlKSB7ZmxvYXQgcGFyYWxsYXhMaW1pdD1sZW5ndGgodlZpZXdEaXJDb1QueHkpL3ZWaWV3RGlyQ29ULno7cGFyYWxsYXhMaW1pdCo9cGFyYWxsYXhTY2FsZTt2ZWMyIHZPZmZzZXREaXI9bm9ybWFsaXplKHZWaWV3RGlyQ29ULnh5KTt2ZWMyIHZNYXhPZmZzZXQ9dk9mZnNldERpcipwYXJhbGxheExpbWl0O2Zsb2F0IG51bVNhbXBsZXM9bWF4U2FtcGxlcysoZG90KHZWaWV3RGlyQ29ULHZOb3JtYWxDb1QpKihtaW5TYW1wbGVzLW1heFNhbXBsZXMpKTtmbG9hdCBzdGVwU2l6ZT0xLjAvbnVtU2FtcGxlcztmbG9hdCBjdXJyUmF5SGVpZ2h0PTEuMDt2ZWMyIHZDdXJyT2Zmc2V0PXZlYzIoMCwwKTt2ZWMyIHZMYXN0T2Zmc2V0PXZlYzIoMCwwKTtmbG9hdCBsYXN0U2FtcGxlZEhlaWdodD0xLjA7ZmxvYXQgY3VyclNhbXBsZWRIZWlnaHQ9MS4wO2Jvb2wga2VlcFdvcmtpbmc9dHJ1ZTtmb3IgKGludCBpPTA7IGk8aU1heFNhbXBsZXM7IGkrKylcbntjdXJyU2FtcGxlZEhlaWdodD10ZXh0dXJlMkQoZ2VvbWV0cnlOb3JtYWxTYW1wbGVyLHRleENvb3JkK3ZDdXJyT2Zmc2V0KS53O2lmICgha2VlcFdvcmtpbmcpXG57fVxuZWxzZSBpZiAoY3VyclNhbXBsZWRIZWlnaHQ+Y3VyclJheUhlaWdodClcbntmbG9hdCBkZWx0YTE9Y3VyclNhbXBsZWRIZWlnaHQtY3VyclJheUhlaWdodDtmbG9hdCBkZWx0YTI9KGN1cnJSYXlIZWlnaHQrc3RlcFNpemUpLWxhc3RTYW1wbGVkSGVpZ2h0O2Zsb2F0IHJhdGlvPWRlbHRhMS8oZGVsdGExK2RlbHRhMik7dkN1cnJPZmZzZXQ9KHJhdGlvKSogdkxhc3RPZmZzZXQrKDEuMC1yYXRpbykqdkN1cnJPZmZzZXQ7a2VlcFdvcmtpbmc9ZmFsc2U7fVxuZWxzZVxue2N1cnJSYXlIZWlnaHQtPXN0ZXBTaXplO3ZMYXN0T2Zmc2V0PXZDdXJyT2Zmc2V0O1xuI2lmZGVmIFBBUkFMTEFYX1JIU1xudkN1cnJPZmZzZXQtPXN0ZXBTaXplKnZNYXhPZmZzZXQ7XG4jZWxzZVxudkN1cnJPZmZzZXQrPXN0ZXBTaXplKnZNYXhPZmZzZXQ7XG4jZW5kaWZcbmxhc3RTYW1wbGVkSGVpZ2h0PWN1cnJTYW1wbGVkSGVpZ2h0O319XG5yZXR1cm4gdkN1cnJPZmZzZXQ7fVxudmVjMiBwYXJhbGxheE9mZnNldCh2ZWMzIHZpZXdEaXIsZmxvYXQgaGVpZ2h0U2NhbGUpXG57ZmxvYXQgaGVpZ2h0PXRleHR1cmUyRChnZW9tZXRyeU5vcm1hbFNhbXBsZXIsdkdlb21ldHJ5Tm9ybWFsVVYpLnc7dmVjMiB0ZXhDb29yZE9mZnNldD1oZWlnaHRTY2FsZSp2aWV3RGlyLnh5KmhlaWdodDtcbiNpZmRlZiBQQVJBTExBWF9SSFNcbnJldHVybiB0ZXhDb29yZE9mZnNldDtcbiNlbHNlXG5yZXR1cm4gLXRleENvb3JkT2Zmc2V0O1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBick5vcm1hbE1hcEZyYWdtZW50RnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRNYWluRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKSB8fCBkZWZpbmVkKEdFT01FVFJZX0NPQVRfTk9STUFMKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopIHx8IGRlZmluZWQoREVUQUlMKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpIFxudmFyeWluZyBtYXQzIHZUQk47XG4jZW5kaWZcbiNpZmRlZiBPQkpFQ1RTUEFDRV9OT1JNQUxNQVBcbnVuaWZvcm0gbWF0NCBub3JtYWxNYXRyaXg7XG4jaWYgZGVmaW5lZChXRUJHTDIpIHx8IGRlZmluZWQoV0VCR1BVKVxubWF0NCB0b05vcm1hbE1hdHJpeChtYXQ0IHdNYXRyaXgpXG57bWF0NCByZXQ9aW52ZXJzZSh3TWF0cml4KTtyZXQ9dHJhbnNwb3NlKHJldCk7cmV0WzBdWzNdPTAuO3JldFsxXVszXT0wLjtyZXRbMl1bM109MC47cmV0WzNdPXZlYzQoMC4sMC4sMC4sMS4pO3JldHVybiByZXQ7fVxuI2Vsc2Vcbm1hdDQgdG9Ob3JtYWxNYXRyaXgobWF0NCBtKVxue2Zsb2F0XG5hMDA9bVswXVswXSxhMDE9bVswXVsxXSxhMDI9bVswXVsyXSxhMDM9bVswXVszXSxcbmExMD1tWzFdWzBdLGExMT1tWzFdWzFdLGExMj1tWzFdWzJdLGExMz1tWzFdWzNdLFxuYTIwPW1bMl1bMF0sYTIxPW1bMl1bMV0sYTIyPW1bMl1bMl0sYTIzPW1bMl1bM10sXG5hMzA9bVszXVswXSxhMzE9bVszXVsxXSxhMzI9bVszXVsyXSxhMzM9bVszXVszXSxcbmIwMD1hMDAqYTExLWEwMSphMTAsXG5iMDE9YTAwKmExMi1hMDIqYTEwLFxuYjAyPWEwMCphMTMtYTAzKmExMCxcbmIwMz1hMDEqYTEyLWEwMiphMTEsXG5iMDQ9YTAxKmExMy1hMDMqYTExLFxuYjA1PWEwMiphMTMtYTAzKmExMixcbmIwNj1hMjAqYTMxLWEyMSphMzAsXG5iMDc9YTIwKmEzMi1hMjIqYTMwLFxuYjA4PWEyMCphMzMtYTIzKmEzMCxcbmIwOT1hMjEqYTMyLWEyMiphMzEsXG5iMTA9YTIxKmEzMy1hMjMqYTMxLFxuYjExPWEyMiphMzMtYTIzKmEzMixcbmRldD1iMDAqYjExLWIwMSpiMTArYjAyKmIwOStiMDMqYjA4LWIwNCpiMDcrYjA1KmIwNjttYXQ0IG1pPW1hdDQoXG5hMTEqYjExLWExMipiMTArYTEzKmIwOSxcbmEwMipiMTAtYTAxKmIxMS1hMDMqYjA5LFxuYTMxKmIwNS1hMzIqYjA0K2EzMypiMDMsXG5hMjIqYjA0LWEyMSpiMDUtYTIzKmIwMyxcbmExMipiMDgtYTEwKmIxMS1hMTMqYjA3LFxuYTAwKmIxMS1hMDIqYjA4K2EwMypiMDcsXG5hMzIqYjAyLWEzMCpiMDUtYTMzKmIwMSxcbmEyMCpiMDUtYTIyKmIwMithMjMqYjAxLFxuYTEwKmIxMC1hMTEqYjA4K2ExMypiMDYsXG5hMDEqYjA4LWEwMCpiMTAtYTAzKmIwNixcbmEzMCpiMDQtYTMxKmIwMithMzMqYjAwLFxuYTIxKmIwMi1hMjAqYjA0LWEyMypiMDAsXG5hMTEqYjA3LWExMCpiMDktYTEyKmIwNixcbmEwMCpiMDktYTAxKmIwNythMDIqYjA2LFxuYTMxKmIwMS1hMzAqYjAzLWEzMipiMDAsXG5hMjAqYjAzLWEyMSpiMDErYTIyKmIwMCkvZGV0O3JldHVybiBtYXQ0KG1pWzBdWzBdLG1pWzFdWzBdLG1pWzJdWzBdLG1pWzNdWzBdLFxubWlbMF1bMV0sbWlbMV1bMV0sbWlbMl1bMV0sbWlbM11bMV0sXG5taVswXVsyXSxtaVsxXVsyXSxtaVsyXVsyXSxtaVszXVsyXSxcbm1pWzBdWzNdLG1pWzFdWzNdLG1pWzJdWzNdLG1pWzNdWzNdKTt9XG4jZW5kaWZcbiNlbmRpZlxudmVjMyBwZXJ0dXJiTm9ybWFsQmFzZShtYXQzIGNvdGFuZ2VudEZyYW1lLHZlYzMgbm9ybWFsLGZsb2F0IHNjYWxlKVxue1xuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbm5vcm1hbD1ub3JtYWxpemUobm9ybWFsKnZlYzMoc2NhbGUsc2NhbGUsMS4wKSk7XG4jZW5kaWZcbnJldHVybiBub3JtYWxpemUoY290YW5nZW50RnJhbWUqbm9ybWFsKTt9XG52ZWMzIHBlcnR1cmJOb3JtYWwobWF0MyBjb3RhbmdlbnRGcmFtZSx2ZWMzIHRleHR1cmVTYW1wbGUsZmxvYXQgc2NhbGUpXG57cmV0dXJuIHBlcnR1cmJOb3JtYWxCYXNlKGNvdGFuZ2VudEZyYW1lLHRleHR1cmVTYW1wbGUqMi4wLTEuMCxzY2FsZSk7fVxubWF0MyBjb3RhbmdlbnRfZnJhbWUodmVjMyBub3JtYWwsdmVjMyBwLHZlYzIgdXYsdmVjMiB0YW5nZW50U3BhY2VQYXJhbXMpXG57dmVjMyBkcDE9ZEZkeChwKTt2ZWMzIGRwMj1kRmR5KHApO3ZlYzIgZHV2MT1kRmR4KHV2KTt2ZWMyIGR1djI9ZEZkeSh1dik7dmVjMyBkcDJwZXJwPWNyb3NzKGRwMixub3JtYWwpO3ZlYzMgZHAxcGVycD1jcm9zcyhub3JtYWwsZHAxKTt2ZWMzIHRhbmdlbnQ9ZHAycGVycCpkdXYxLngrZHAxcGVycCpkdXYyLng7dmVjMyBiaXRhbmdlbnQ9ZHAycGVycCpkdXYxLnkrZHAxcGVycCpkdXYyLnk7dGFuZ2VudCo9dGFuZ2VudFNwYWNlUGFyYW1zLng7Yml0YW5nZW50Kj10YW5nZW50U3BhY2VQYXJhbXMueTtmbG9hdCBkZXQ9bWF4KGRvdCh0YW5nZW50LHRhbmdlbnQpLGRvdChiaXRhbmdlbnQsYml0YW5nZW50KSk7ZmxvYXQgaW52bWF4PWRldD09MC4wID8gMC4wIDogaW52ZXJzZXNxcnQoZGV0KTtyZXR1cm4gbWF0Myh0YW5nZW50Kmludm1heCxiaXRhbmdlbnQqaW52bWF4LG5vcm1hbCk7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJOb3JtYWxNYXBGcmFnbWVudE1haW5GdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJUaGluRmlsbUxheWVyRGF0YVwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBUSElOX0ZJTE1cbmZsb2F0IHRoaW5fZmlsbV93ZWlnaHQ9dlRoaW5GaWxtV2VpZ2h0O2Zsb2F0IHRoaW5fZmlsbV90aGlja25lc3M9dlRoaW5GaWxtVGhpY2tuZXNzLnIqMTAwMC4wOyBcbmZsb2F0IHRoaW5fZmlsbV9pb3I9dlRoaW5GaWxtSW9yO1xuI2lmZGVmIFRISU5fRklMTV9XRUlHSFRcbmZsb2F0IHRoaW5GaWxtV2VpZ2h0RnJvbVRleHR1cmU9dGV4dHVyZTJEKHRoaW5GaWxtV2VpZ2h0U2FtcGxlcix2VGhpbkZpbG1XZWlnaHRVVit1dk9mZnNldCkucip2VGhpbkZpbG1XZWlnaHRJbmZvcy55O1xuI2VuZGlmXG4jaWZkZWYgVEhJTl9GSUxNX1RISUNLTkVTU1xuZmxvYXQgdGhpbkZpbG1UaGlja25lc3NGcm9tVGV4dHVyZT10ZXh0dXJlMkQodGhpbkZpbG1UaGlja25lc3NTYW1wbGVyLHZUaGluRmlsbVRoaWNrbmVzc1VWK3V2T2Zmc2V0KS5nKnZUaGluRmlsbVRoaWNrbmVzc0luZm9zLnk7XG4jZW5kaWZcbiNpZmRlZiBUSElOX0ZJTE1fV0VJR0hUXG50aGluX2ZpbG1fd2VpZ2h0Kj10aGluRmlsbVdlaWdodEZyb21UZXh0dXJlO1xuI2VuZGlmXG4jaWZkZWYgVEhJTl9GSUxNX1RISUNLTkVTU1xudGhpbl9maWxtX3RoaWNrbmVzcyo9dGhpbkZpbG1UaGlja25lc3NGcm9tVGV4dHVyZTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJUaGluRmlsbUxheWVyRGF0YSA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2NlbmVVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9tZXNoVWJvRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBiclVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgbGF5b3V0KHN0ZDE0MCxjb2x1bW5fbWFqb3IpIHVuaWZvcm07dW5pZm9ybSBNYXRlcmlhbCB7dmVjMiB2VGFuZ2VudFNwYWNlUGFyYW1zO3ZlYzQgdkxpZ2h0aW5nSW50ZW5zaXR5O2Zsb2F0IHBvaW50U2l6ZTt2ZWMyIHZEZWJ1Z01vZGU7dmVjNCBjYW1lcmFJbmZvO3ZlYzIgdlJlZmxlY3Rpb25JbmZvczttYXQ0IHJlZmxlY3Rpb25NYXRyaXg7dmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO3ZlYzMgdlJlZmxlY3Rpb25Qb3NpdGlvbjt2ZWMzIHZSZWZsZWN0aW9uU2l6ZTt2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzt2ZWMzIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb247dmVjMyB2UmVmbGVjdGlvbkNvbG9yO3ZlYzMgdlNwaGVyaWNhbEwwMDt2ZWMzIHZTcGhlcmljYWxMMV8xO3ZlYzMgdlNwaGVyaWNhbEwxMDt2ZWMzIHZTcGhlcmljYWxMMTE7dmVjMyB2U3BoZXJpY2FsTDJfMjt2ZWMzIHZTcGhlcmljYWxMMl8xO3ZlYzMgdlNwaGVyaWNhbEwyMDt2ZWMzIHZTcGhlcmljYWxMMjE7dmVjMyB2U3BoZXJpY2FsTDIyO3ZlYzMgdlNwaGVyaWNhbFg7dmVjMyB2U3BoZXJpY2FsWTt2ZWMzIHZTcGhlcmljYWxaO3ZlYzMgdlNwaGVyaWNhbFhYX1paO3ZlYzMgdlNwaGVyaWNhbFlZX1paO3ZlYzMgdlNwaGVyaWNhbFpaO3ZlYzMgdlNwaGVyaWNhbFhZO3ZlYzMgdlNwaGVyaWNhbFlaO3ZlYzMgdlNwaGVyaWNhbFpYO2Zsb2F0IHZCYXNlV2VpZ2h0O3ZlYzQgdkJhc2VDb2xvcjtmbG9hdCB2QmFzZURpZmZ1c2VSb3VnaG5lc3M7dmVjNCB2UmVmbGVjdGFuY2VJbmZvO3ZlYzQgdlNwZWN1bGFyQ29sb3I7dmVjMyB2U3BlY3VsYXJBbmlzb3Ryb3B5O2Zsb2F0IHZDb2F0V2VpZ2h0O3ZlYzMgdkNvYXRDb2xvcjtmbG9hdCB2Q29hdFJvdWdobmVzcztmbG9hdCB2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHk7ZmxvYXQgdkNvYXRJb3I7ZmxvYXQgdkNvYXREYXJrZW5pbmc7ZmxvYXQgdkZ1enpXZWlnaHQ7dmVjMyB2RnV6ekNvbG9yO2Zsb2F0IHZGdXp6Um91Z2huZXNzO3ZlYzIgdkdlb21ldHJ5Q29hdFRhbmdlbnQ7dmVjMyB2RW1pc3Npb25Db2xvcjtmbG9hdCB2VGhpbkZpbG1XZWlnaHQ7dmVjMiB2VGhpbkZpbG1UaGlja25lc3M7ZmxvYXQgdlRoaW5GaWxtSW9yO3ZlYzIgdkJhc2VXZWlnaHRJbmZvczttYXQ0IGJhc2VXZWlnaHRNYXRyaXg7dmVjMiB2QmFzZUNvbG9ySW5mb3M7bWF0NCBiYXNlQ29sb3JNYXRyaXg7dmVjMiB2QmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvczttYXQ0IGJhc2VEaWZmdXNlUm91Z2huZXNzTWF0cml4O3ZlYzIgdkJhc2VNZXRhbG5lc3NJbmZvczttYXQ0IGJhc2VNZXRhbG5lc3NNYXRyaXg7dmVjMiB2U3BlY3VsYXJXZWlnaHRJbmZvczttYXQ0IHNwZWN1bGFyV2VpZ2h0TWF0cml4O3ZlYzIgdlNwZWN1bGFyQ29sb3JJbmZvczttYXQ0IHNwZWN1bGFyQ29sb3JNYXRyaXg7dmVjMiB2U3BlY3VsYXJSb3VnaG5lc3NJbmZvczttYXQ0IHNwZWN1bGFyUm91Z2huZXNzTWF0cml4O3ZlYzIgdlNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zO21hdDQgc3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5TWF0cml4O3ZlYzIgdkNvYXRXZWlnaHRJbmZvczttYXQ0IGNvYXRXZWlnaHRNYXRyaXg7dmVjMiB2Q29hdENvbG9ySW5mb3M7bWF0NCBjb2F0Q29sb3JNYXRyaXg7dmVjMiB2Q29hdFJvdWdobmVzc0luZm9zO21hdDQgY29hdFJvdWdobmVzc01hdHJpeDt2ZWMyIHZDb2F0Um91Z2huZXNzQW5pc290cm9weUluZm9zO21hdDQgY29hdFJvdWdobmVzc0FuaXNvdHJvcHlNYXRyaXg7dmVjMiB2Q29hdERhcmtlbmluZ0luZm9zO21hdDQgY29hdERhcmtlbmluZ01hdHJpeDt2ZWMyIHZGdXp6V2VpZ2h0SW5mb3M7bWF0NCBmdXp6V2VpZ2h0TWF0cml4O3ZlYzIgdkZ1enpDb2xvckluZm9zO21hdDQgZnV6ekNvbG9yTWF0cml4O3ZlYzIgdkZ1enpSb3VnaG5lc3NJbmZvczttYXQ0IGZ1enpSb3VnaG5lc3NNYXRyaXg7dmVjMiB2R2VvbWV0cnlOb3JtYWxJbmZvczttYXQ0IGdlb21ldHJ5Tm9ybWFsTWF0cml4O3ZlYzIgdkdlb21ldHJ5VGFuZ2VudEluZm9zO21hdDQgZ2VvbWV0cnlUYW5nZW50TWF0cml4O3ZlYzIgdkdlb21ldHJ5Q29hdE5vcm1hbEluZm9zO21hdDQgZ2VvbWV0cnlDb2F0Tm9ybWFsTWF0cml4O3ZlYzIgdkdlb21ldHJ5Q29hdFRhbmdlbnRJbmZvczttYXQ0IGdlb21ldHJ5Q29hdFRhbmdlbnRNYXRyaXg7dmVjMiB2R2VvbWV0cnlPcGFjaXR5SW5mb3M7bWF0NCBnZW9tZXRyeU9wYWNpdHlNYXRyaXg7dmVjMiB2RW1pc3Npb25Db2xvckluZm9zO21hdDQgZW1pc3Npb25Db2xvck1hdHJpeDt2ZWMyIHZUaGluRmlsbVdlaWdodEluZm9zO21hdDQgdGhpbkZpbG1XZWlnaHRNYXRyaXg7dmVjMiB2VGhpbkZpbG1UaGlja25lc3NJbmZvczttYXQ0IHRoaW5GaWxtVGhpY2tuZXNzTWF0cml4O3ZlYzIgdkFtYmllbnRPY2NsdXNpb25JbmZvczttYXQ0IGFtYmllbnRPY2NsdXNpb25NYXRyaXg7XG4jZGVmaW5lIEFERElUSU9OQUxfVUJPX0RFQ0xBUkFUSU9OXG59O1xuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBiclVib0RlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb2l0RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBiclVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickZyYWdtZW50RXh0cmFEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRnJhZ21lbnRTYW1wbGVyc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbXBvcnRhbmNlU2FtcGxpbmdcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJySGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyRGlyZWN0TGlnaHRpbmdGYWxsb2ZmRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJSREZGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGRyRmlsdGVyaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickRpcmVjdExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BicklCTEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRNYWluRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBGcmFnbWVudEZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9yZWZsZWN0aW9uRnVuY3Rpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickRpZWxlY3RyaWNSZWZsZWN0YW5jZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyQ29uZHVjdG9yUmVmbGVjdGFuY2VcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickJsb2NrQW1iaWVudE9jY2x1c2lvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyR2VvbWV0cnlJbmZvXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJJYmxGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tOb3JtYWxHZW9tZXRyaWNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBick5vcm1hbE1hcEZyYWdtZW50XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJCbG9ja05vcm1hbEZpbmFsXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJCYXNlTGF5ZXJEYXRhXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJDb2F0TGF5ZXJEYXRhXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJUaGluRmlsbUxheWVyRGF0YVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRnV6ekxheWVyRGF0YVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3NcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickVudmlyb25tZW50TGlnaHRpbmdcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBickRpcmVjdExpZ2h0aW5nSW5pdFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyRGlyZWN0TGlnaHRpbmdcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja0ltYWdlUHJvY2Vzc2luZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1ByZVBhc3NcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb2l0RnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyRGVidWdcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBiclBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBPUEVOUEJSX0ZSQUdNRU5UX1NIQURFUlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfRVhURU5TSU9OXG4jaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpIHx8IGRlZmluZWQoR0VPTUVUUllfQ09BVF9OT1JNQUwpIHx8ICFkZWZpbmVkKE5PUk1BTCkgfHwgZGVmaW5lZChGT1JDRU5PUk1BTEZPUldBUkQpIHx8IGRlZmluZWQoU1BFQ1VMQVJBQSlcbiNleHRlbnNpb24gR0xfT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzIDogZW5hYmxlXG4jZW5kaWZcbiNpZmRlZiBMT0RCQVNFRE1JQ1JPU0ZVUkFDRVxuI2V4dGVuc2lvbiBHTF9FWFRfc2hhZGVyX3RleHR1cmVfbG9kIDogZW5hYmxlXG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFR0lOXG4jaWZkZWYgTE9HQVJJVEhNSUNERVBUSFxuI2V4dGVuc2lvbiBHTF9FWFRfZnJhZ19kZXB0aCA6IGVuYWJsZVxuI2VuZGlmXG4jaW5jbHVkZTxwcmVQYXNzRGVjbGFyYXRpb24+W1NDRU5FX01SVF9DT1VOVF1cbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiNpbmNsdWRlPG9pdERlY2xhcmF0aW9uPlxuI2lmbmRlZiBGUk9NTElORUFSU1BBQ0VcbiNkZWZpbmUgRlJPTUxJTkVBUlNQQUNFXG4jZW5kaWZcbiNpbmNsdWRlPF9fZGVjbF9fb3BlbnBickZyYWdtZW50PlxuI2luY2x1ZGU8cGJyRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uPlxuI2luY2x1ZGU8X19kZWNsX19saWdodEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxvcGVucGJyRnJhZ21lbnRTYW1wbGVyc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG4jaW5jbHVkZTxzdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPGltcG9ydGFuY2VTYW1wbGluZz5cbiNpbmNsdWRlPHBickhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPGltYWdlUHJvY2Vzc2luZ0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHNoYWRvd3NGcmFnbWVudEZ1bmN0aW9ucz5cbiNpbmNsdWRlPGhhcm1vbmljc0Z1bmN0aW9ucz5cbiNpbmNsdWRlPHBickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJEaXJlY3RMaWdodGluZ0ZhbGxvZmZGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJCUkRGRnVuY3Rpb25zPlxuI2luY2x1ZGU8aGRyRmlsdGVyaW5nRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyRGlyZWN0TGlnaHRpbmdGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJJQkxGdW5jdGlvbnM+XG4jaW5jbHVkZTxvcGVucGJyTm9ybWFsTWFwRnJhZ21lbnRNYWluRnVuY3Rpb25zPlxuI2luY2x1ZGU8b3BlbnBick5vcm1hbE1hcEZyYWdtZW50RnVuY3Rpb25zPlxuI2lmZGVmIFJFRkxFQ1RJT05cbiNpbmNsdWRlPHJlZmxlY3Rpb25GdW5jdGlvbj5cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbiNpbmNsdWRlPG9wZW5wYnJEaWVsZWN0cmljUmVmbGVjdGFuY2U+XG4jaW5jbHVkZTxvcGVucGJyQ29uZHVjdG9yUmVmbGVjdGFuY2U+XG4jaW5jbHVkZTxvcGVucGJyQmxvY2tBbWJpZW50T2NjbHVzaW9uPlxuI2luY2x1ZGU8b3BlbnBickdlb21ldHJ5SW5mbz5cbiNpbmNsdWRlPG9wZW5wYnJJYmxGdW5jdGlvbnM+XG52ZWMzIGxheWVyKHZlYzMgc2xhYl9ib3R0b20sdmVjMyBzbGFiX3RvcCxmbG9hdCBsZXJwX2ZhY3Rvcix2ZWMzIGJvdHRvbV9tdWx0aXBsaWVyLHZlYzMgdG9wX211bHRpcGxpZXIpIHtyZXR1cm4gbWl4KHNsYWJfYm90dG9tKmJvdHRvbV9tdWx0aXBsaWVyLHNsYWJfdG9wKnRvcF9tdWx0aXBsaWVyLGxlcnBfZmFjdG9yKTt9XG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9CRUdJTlxuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnQ+XG4jaW5jbHVkZTxwYnJCbG9ja05vcm1hbEdlb21ldHJpYz5cbnZlYzMgY29hdE5vcm1hbFc9bm9ybWFsVztcbiNpbmNsdWRlPG9wZW5wYnJOb3JtYWxNYXBGcmFnbWVudD5cbiNpbmNsdWRlPG9wZW5wYnJCbG9ja05vcm1hbEZpbmFsPlxuI2luY2x1ZGU8b3BlbnBickJhc2VMYXllckRhdGE+XG4jaW5jbHVkZTxvcGVucGJyQ29hdExheWVyRGF0YT5cbiNpbmNsdWRlPG9wZW5wYnJUaGluRmlsbUxheWVyRGF0YT5cbiNpbmNsdWRlPG9wZW5wYnJGdXp6TGF5ZXJEYXRhPlxuZmxvYXQgc3Vic3VyZmFjZV93ZWlnaHQ9MC4wO2Zsb2F0IHRyYW5zbWlzc2lvbl93ZWlnaHQ9MC4wO1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfVVBEQVRFX0FMUEhBXG4jaW5jbHVkZTxkZXB0aFByZVBhc3M+XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfTElHSFRTXG5hbWJpZW50T2NjbHVzaW9uT3V0UGFyYW1zIGFvT3V0O1xuI2lmZGVmIEFNQklFTlRfT0NDTFVTSU9OXG52ZWMzIGFtYmllbnRPY2NsdXNpb25Gcm9tVGV4dHVyZT10ZXh0dXJlMkQoYW1iaWVudE9jY2x1c2lvblNhbXBsZXIsdkFtYmllbnRPY2NsdXNpb25VVit1dk9mZnNldCkucmdiO1xuI2VuZGlmXG5hb091dD1hbWJpZW50T2NjbHVzaW9uQmxvY2soXG4jaWZkZWYgQU1CSUVOVF9PQ0NMVVNJT05cbmFtYmllbnRPY2NsdXNpb25Gcm9tVGV4dHVyZSxcbnZBbWJpZW50T2NjbHVzaW9uSW5mb3NcbiNlbmRpZlxuKTtcbiNpZmRlZiBBTklTT1RST1BJQ19DT0FUXG5nZW9tZXRyeUluZm9Bbmlzb091dFBhcmFtcyBjb2F0R2VvSW5mbz1nZW9tZXRyeUluZm9BbmlzbyhcbmNvYXROb3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eixjb2F0X3JvdWdobmVzcyxnZW9tZXRyaWNOb3JtYWxXXG4sdmVjMyhnZW9tZXRyeV9jb2F0X3RhbmdlbnQueCxnZW9tZXRyeV9jb2F0X3RhbmdlbnQueSxjb2F0X3JvdWdobmVzc19hbmlzb3Ryb3B5KSxUQk5cbik7XG4jZWxzZVxuZ2VvbWV0cnlJbmZvT3V0UGFyYW1zIGNvYXRHZW9JbmZvPWdlb21ldHJ5SW5mbyhcbmNvYXROb3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eixjb2F0X3JvdWdobmVzcyxnZW9tZXRyaWNOb3JtYWxXXG4pO1xuI2VuZGlmXG5zcGVjdWxhcl9yb3VnaG5lc3M9bWl4KHNwZWN1bGFyX3JvdWdobmVzcyxwb3cobWluKDEuMCxwb3coc3BlY3VsYXJfcm91Z2huZXNzLDQuMCkrMi4wKnBvdyhjb2F0X3JvdWdobmVzcyw0LjApKSwwLjI1KSxjb2F0X3dlaWdodCk7XG4jaWZkZWYgQU5JU09UUk9QSUNfQkFTRVxuZ2VvbWV0cnlJbmZvQW5pc29PdXRQYXJhbXMgYmFzZUdlb0luZm89Z2VvbWV0cnlJbmZvQW5pc28oXG5ub3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eixzcGVjdWxhcl9yb3VnaG5lc3MsZ2VvbWV0cmljTm9ybWFsV1xuLHZlYzMoZ2VvbWV0cnlfdGFuZ2VudC54LGdlb21ldHJ5X3RhbmdlbnQueSxzcGVjdWxhcl9yb3VnaG5lc3NfYW5pc290cm9weSksVEJOXG4pO1xuI2Vsc2Vcbmdlb21ldHJ5SW5mb091dFBhcmFtcyBiYXNlR2VvSW5mbz1nZW9tZXRyeUluZm8oXG5ub3JtYWxXLHZpZXdEaXJlY3Rpb25XLnh5eixzcGVjdWxhcl9yb3VnaG5lc3MsZ2VvbWV0cmljTm9ybWFsV1xuKTtcbiNlbmRpZlxuI2lmZGVmIEZVWlpcbnZlYzMgZnV6ek5vcm1hbFc9bm9ybWFsaXplKG1peChub3JtYWxXLGNvYXROb3JtYWxXLGNvYXRfd2VpZ2h0KSk7dmVjMyBmdXp6VGFuZ2VudD1ub3JtYWxpemUoVEJOWzBdKTtmdXp6VGFuZ2VudD1ub3JtYWxpemUoZnV6elRhbmdlbnQtZG90KGZ1enpUYW5nZW50LGZ1enpOb3JtYWxXKSpmdXp6Tm9ybWFsVyk7dmVjMyBmdXp6Qml0YW5nZW50PWNyb3NzKGZ1enpOb3JtYWxXLGZ1enpUYW5nZW50KTtnZW9tZXRyeUluZm9PdXRQYXJhbXMgZnV6ekdlb0luZm89Z2VvbWV0cnlJbmZvKFxuZnV6ek5vcm1hbFcsdmlld0RpcmVjdGlvblcueHl6LGZ1enpfcm91Z2huZXNzLGdlb21ldHJpY05vcm1hbFdcbik7XG4jZW5kaWZcblJlZmxlY3RhbmNlUGFyYW1zIGNvYXRSZWZsZWN0YW5jZTtjb2F0UmVmbGVjdGFuY2U9ZGllbGVjdHJpY1JlZmxlY3RhbmNlKFxuY29hdF9pb3IgXG4sMS4wIFxuLHZlYzMoMS4wKVxuLGNvYXRfd2VpZ2h0XG4pO1xuI2lmZGVmIFRISU5fRklMTVxuZmxvYXQgdGhpbl9maWxtX291dHNpZGVfaW9yPW1peCgxLjAsY29hdF9pb3IsY29hdF93ZWlnaHQpO1xuI2VuZGlmXG5SZWZsZWN0YW5jZVBhcmFtcyBiYXNlRGllbGVjdHJpY1JlZmxlY3RhbmNlO3tmbG9hdCBlZmZlY3RpdmVDb2F0SW9yPW1peCgxLjAsY29hdF9pb3IsY29hdF93ZWlnaHQpO2Jhc2VEaWVsZWN0cmljUmVmbGVjdGFuY2U9ZGllbGVjdHJpY1JlZmxlY3RhbmNlKFxuc3BlY3VsYXJfaW9yIFxuLGVmZmVjdGl2ZUNvYXRJb3IgXG4sc3BlY3VsYXJfY29sb3JcbixzcGVjdWxhcl93ZWlnaHRcbik7fVxuUmVmbGVjdGFuY2VQYXJhbXMgYmFzZUNvbmR1Y3RvclJlZmxlY3RhbmNlO2Jhc2VDb25kdWN0b3JSZWZsZWN0YW5jZT1jb25kdWN0b3JSZWZsZWN0YW5jZShiYXNlX2NvbG9yLHNwZWN1bGFyX2NvbG9yLHNwZWN1bGFyX3dlaWdodCk7dmVjMyBtYXRlcmlhbF9zdXJmYWNlX2libD12ZWMzKDAuLDAuLDAuKTtcbiNpbmNsdWRlPG9wZW5wYnJFbnZpcm9ubWVudExpZ2h0aW5nPlxudmVjMyBtYXRlcmlhbF9zdXJmYWNlX2RpcmVjdD12ZWMzKDAuLDAuLDAuKTtcbiNpZiBkZWZpbmVkKExJR0hUMClcbmZsb2F0IGFnZ1NoYWRvdz0wLjtmbG9hdCBudW1MaWdodHM9MC47XG4jaW5jbHVkZTxvcGVucGJyRGlyZWN0TGlnaHRpbmdJbml0PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxvcGVucGJyRGlyZWN0TGlnaHRpbmc+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNlbmRpZlxudmVjMyBtYXRlcmlhbF9zdXJmYWNlX2VtaXNzaW9uPXZFbWlzc2lvbkNvbG9yO1xuI2lmZGVmIEVNSVNTSU9OX0NPTE9SXG52ZWMzIGVtaXNzaW9uQ29sb3JUZXg9dGV4dHVyZTJEKGVtaXNzaW9uQ29sb3JTYW1wbGVyLHZFbWlzc2lvbkNvbG9yVVYrdXZPZmZzZXQpLnJnYjtcbiNpZmRlZiBFTUlTU0lPTl9DT0xPUl9HQU1NQVxubWF0ZXJpYWxfc3VyZmFjZV9lbWlzc2lvbio9dG9MaW5lYXJTcGFjZShlbWlzc2lvbkNvbG9yVGV4LnJnYik7XG4jZWxzZVxubWF0ZXJpYWxfc3VyZmFjZV9lbWlzc2lvbio9ZW1pc3Npb25Db2xvclRleC5yZ2I7XG4jZW5kaWZcbm1hdGVyaWFsX3N1cmZhY2VfZW1pc3Npb24qPSB2RW1pc3Npb25Db2xvckluZm9zLnk7XG4jZW5kaWZcbm1hdGVyaWFsX3N1cmZhY2VfZW1pc3Npb24qPXZMaWdodGluZ0ludGVuc2l0eS55O1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfQkVGT1JFX0ZJTkFMQ09MT1JDT01QT1NJVElPTlxudmVjNCBmaW5hbENvbG9yPXZlYzQobWF0ZXJpYWxfc3VyZmFjZV9pYmwrbWF0ZXJpYWxfc3VyZmFjZV9kaXJlY3QrbWF0ZXJpYWxfc3VyZmFjZV9lbWlzc2lvbixhbHBoYSk7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRk9HXG5maW5hbENvbG9yPW1heChmaW5hbENvbG9yLDAuMCk7XG4jaW5jbHVkZTxsb2dEZXB0aEZyYWdtZW50PlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnQ+KGNvbG9yLGZpbmFsQ29sb3IpXG4jaW5jbHVkZTxwYnJCbG9ja0ltYWdlUHJvY2Vzc2luZz5cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GUkFHQ09MT1JcbiNpZmRlZiBQUkVQQVNTXG4jaW5jbHVkZTxwYnJCbG9ja1ByZVBhc3M+XG4jZW5kaWZcbiNpZiAhZGVmaW5lZChQUkVQQVNTKSB8fCBkZWZpbmVkKFdFQkdMMilcbmdsX0ZyYWdDb2xvcj1maW5hbENvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxvaXRGcmFnbWVudD5cbiNpZiBPUkRFUl9JTkRFUEVOREVOVF9UUkFOU1BBUkVOQ1lcbmlmIChmcmFnRGVwdGg9PW5lYXJlc3REZXB0aCkge2Zyb250Q29sb3IucmdiKz1maW5hbENvbG9yLnJnYipmaW5hbENvbG9yLmEqYWxwaGFNdWx0aXBsaWVyO2Zyb250Q29sb3IuYT0xLjAtYWxwaGFNdWx0aXBsaWVyKigxLjAtZmluYWxDb2xvci5hKTt9IGVsc2Uge2JhY2tDb2xvcis9ZmluYWxDb2xvcjt9XG4jZW5kaWZcbiNpbmNsdWRlPHBickRlYnVnPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9