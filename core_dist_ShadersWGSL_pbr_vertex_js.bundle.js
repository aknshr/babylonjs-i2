"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_pbr_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bumpVertex.js":
/*!*************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bumpVertex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpVertexWGSL: () => (/* binding */ bumpVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpVertex";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bumpVertexWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpVertexDeclarationWGSL: () => (/* binding */ bumpVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpVertexDeclaration";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bumpVertexDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/pbr.vertex.js":
/*!**********************************************!*\
  !*** ../core/dist/ShadersWGSL/pbr.vertex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrVertexShaderWGSL: () => (/* binding */ pbrVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_pbrUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/pbrUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_uvAttributeDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/uvAttributeDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js");
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/mainUVVaryingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/pbrBRDFFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_prePassVertexDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/prePassVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_harmonicsFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/harmonicsFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/harmonicsFunctions.js");
/* harmony import */ var _ShadersInclude_bumpVertexDeclaration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/bumpVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/lightVxUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_prePassVertex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/prePassVertex */ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertex.js");
/* harmony import */ var _ShadersInclude_uvVariableDeclaration__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/uvVariableDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexImplementation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexImplementation */ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js");
/* harmony import */ var _ShadersInclude_bumpVertex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/bumpVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bumpVertex.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_vertexColorMixing__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/vertexColorMixing */ "../core/dist/ShadersWGSL/ShadersInclude/vertexColorMixing.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

































const name = "pbrVertexShader";
const shader = `#define PBR_VERTEX_SHADER
#include<pbrUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)
#endif
varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-vertexOutputs.vPositionW);var NdotV: f32=max(dot(vertexOutputs.vNormalW,viewDirectionW),0.0);var roughNormal: vec3f=mix(vertexOutputs.vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*uniforms.baseDiffuseRoughness);var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(roughNormal,0)).xyz;
#else
var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vertexOutputs.vClipSpacePosition=vertexOutputs.position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
vertexOutputs.vViewDepth=(scene.view*worldPos).z;
#endif
#ifndef UV1
var uvUpdated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_MATRIXNAME_,baseDiffuseRoughness,_INFONAME_,BaseDiffuseRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3Bicl92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BiclVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvcGJyLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcFZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZhciB0Ym5Ob3JtYWw6IHZlYzNmPW5vcm1hbGl6ZShub3JtYWxVcGRhdGVkKTt2YXIgdGJuVGFuZ2VudDogdmVjM2Y9bm9ybWFsaXplKHRhbmdlbnRVcGRhdGVkLnh5eik7dmFyIHRibkJpdGFuZ2VudDogdmVjM2Y9Y3Jvc3ModGJuTm9ybWFsLHRiblRhbmdlbnQpKnRhbmdlbnRVcGRhdGVkLnc7dmFyIG1hdFRlbXA9IG1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopKiBtYXQzeDNmKHRiblRhbmdlbnQsdGJuQml0YW5nZW50LHRibk5vcm1hbCk7dmVydGV4T3V0cHV0cy52VEJOMD1tYXRUZW1wWzBdO3ZlcnRleE91dHB1dHMudlRCTjE9bWF0VGVtcFsxXTt2ZXJ0ZXhPdXRwdXRzLnZUQk4yPW1hdFRlbXBbMl07XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wVmVydGV4RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChCVU1QKSB8fCBkZWZpbmVkKFBBUkFMTEFYKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpIFxudmFyeWluZyB2VEJOMDogdmVjM2Y7dmFyeWluZyB2VEJOMTogdmVjM2Y7dmFyeWluZyB2VEJOMjogdmVjM2Y7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBWZXJ0ZXhEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBiclVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSB2QWxiZWRvSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkJhc2VXZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSB2QmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvczogdmVjMmY7dW5pZm9ybSB2QW1iaWVudEluZm9zOiB2ZWM0Zjt1bmlmb3JtIHZPcGFjaXR5SW5mb3M6IHZlYzJmO3VuaWZvcm0gdkVtaXNzaXZlSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkxpZ2h0bWFwSW5mb3M6IHZlYzJmO3VuaWZvcm0gdlJlZmxlY3Rpdml0eUluZm9zOiB2ZWMzZjt1bmlmb3JtIHZNaWNyb1N1cmZhY2VTYW1wbGVySW5mb3M6IHZlYzJmO3VuaWZvcm0gdkJ1bXBJbmZvczogdmVjM2Y7dW5pZm9ybSBhbGJlZG9NYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBiYXNlV2VpZ2h0TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYmFzZURpZmZ1c2VSb3VnaG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBhbWJpZW50TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gb3BhY2l0eU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGVtaXNzaXZlTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gbGlnaHRtYXBNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSByZWZsZWN0aXZpdHlNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBtaWNyb1N1cmZhY2VTYW1wbGVyTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYnVtcE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZUYW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmO3VuaWZvcm0gdkFsYmVkb0NvbG9yOiB2ZWM0Zjt1bmlmb3JtIGJhc2VXZWlnaHQ6IGYzMjt1bmlmb3JtIGJhc2VEaWZmdXNlUm91Z2huZXNzOiBmMzI7dW5pZm9ybSB2TGlnaHRpbmdJbnRlbnNpdHk6IHZlYzRmO3VuaWZvcm0gcG9pbnRTaXplOiBmMzI7dW5pZm9ybSB2UmVmbGVjdGl2aXR5Q29sb3I6IHZlYzRmO3VuaWZvcm0gdkVtaXNzaXZlQ29sb3I6IHZlYzNmO3VuaWZvcm0gdkFtYmllbnRDb2xvcjogdmVjM2Y7dW5pZm9ybSB2RGVidWdNb2RlOiB2ZWMyZjt1bmlmb3JtIHZNZXRhbGxpY1JlZmxlY3RhbmNlRmFjdG9yczogdmVjNGY7dW5pZm9ybSB2TWV0YWxsaWNSZWZsZWN0YW5jZUluZm9zOiB2ZWMyZjt1bmlmb3JtIG1ldGFsbGljUmVmbGVjdGFuY2VNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2UmVmbGVjdGFuY2VJbmZvczogdmVjMmY7dW5pZm9ybSByZWZsZWN0YW5jZU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGNhbWVyYUluZm86IHZlYzRmO3VuaWZvcm0gdlJlZmxlY3Rpb25JbmZvczogdmVjMmY7dW5pZm9ybSByZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvczogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblBvc2l0aW9uOiB2ZWMzZjt1bmlmb3JtIHZSZWZsZWN0aW9uU2l6ZTogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm86IHZlYzJmO3VuaWZvcm0gdlJlZmxlY3Rpb25Eb21pbmFudERpcmVjdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvbkNvbG9yOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMDA6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwxXzE6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwxMDogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDExOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMl8yOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMl8xOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMjA6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwyMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDIyOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxYOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxZOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxYWF9aWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWVlfWlo6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFpaOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxYWTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWVo6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFpYOiB2ZWMzZjtcbiNkZWZpbmUgQURESVRJT05BTF9VQk9fREVDTEFSQVRJT05cbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyVWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS91dkF0dHJpYnV0ZURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQlJERkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oYXJtb25pY3NGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdXZWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS92ZXJ0ZXhDb2xvck1peGluZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aFZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIFBCUl9WRVJURVhfU0hBREVSXG4jaW5jbHVkZTxwYnJVYm9EZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9CRUdJTlxuYXR0cmlidXRlIHBvc2l0aW9uOiB2ZWMzZjtcbiNpZmRlZiBOT1JNQUxcbmF0dHJpYnV0ZSBub3JtYWw6IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgVEFOR0VOVFxuYXR0cmlidXRlIHRhbmdlbnQ6IHZlYzRmO1xuI2VuZGlmXG4jaWZkZWYgVVYxXG5hdHRyaWJ1dGUgdXY6IHZlYzJmO1xuI2VuZGlmXG4jaW5jbHVkZTx1dkF0dHJpYnV0ZURlY2xhcmF0aW9uPlsyLi43XVxuI2luY2x1ZGU8bWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uPlsxLi43XVxuI2lmZGVmIFZFUlRFWENPTE9SXG5hdHRyaWJ1dGUgY29sb3I6IHZlYzRmO1xuI2VuZGlmXG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJCUkRGRnVuY3Rpb25zPlxuI2luY2x1ZGU8Ym9uZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbnN0YW5jZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFMQkVETyxfVkFSWUlOR05BTUVfLEFsYmVkbylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfV0VJR0hULF9WQVJZSU5HTkFNRV8sQmFzZVdlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFVEFJTCxfVkFSWUlOR05BTUVfLERldGFpbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTElHSFRNQVAsX1ZBUllJTkdOQU1FXyxMaWdodG1hcClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFJFRkxFQ1RJVklUWSxfVkFSWUlOR05BTUVfLFJlZmxlY3Rpdml0eSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLE1JQ1JPU1VSRkFDRU1BUCxfVkFSWUlOR05BTUVfLE1pY3JvU3VyZmFjZVNhbXBsZXIpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxNRVRBTExJQ19SRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLE1ldGFsbGljUmVmbGVjdGFuY2UpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLFJlZmxlY3RhbmNlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQlVNUCxfVkFSWUlOR05BTUVfLEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsKVxuI2lmZGVmIENMRUFSQ09BVFxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfQlVNUCxfVkFSWUlOR05BTUVfLENsZWFyQ29hdEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVElOVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0VGludClcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sSXJpZGVzY2VuY2UpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlVGhpY2tuZXNzKVxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNIRUVOX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxTaGVlbilcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNIRUVOX1RFWFRVUkVfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sU2hlZW5Sb3VnaG5lc3MpXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU5JU09UUk9QSUNfVEVYVFVSRSxfVkFSWUlOR05BTUVfLEFuaXNvdHJvcHkpXG4jZW5kaWZcbiNpZmRlZiBTVUJTVVJGQUNFXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUaGlja25lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxSZWZyYWN0aW9uSW50ZW5zaXR5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lJbnRlbnNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5Q29sb3IpXG4jZW5kaWZcbnZhcnlpbmcgdlBvc2l0aW9uVzogdmVjM2Y7XG4jaWYgREVCVUdNT0RFPjBcbnZhcnlpbmcgdkNsaXBTcGFjZVBvc2l0aW9uOiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxudmFyeWluZyB2Tm9ybWFsVzogdmVjM2Y7XG4jaWYgZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbnZhcnlpbmcgdkVudmlyb25tZW50SXJyYWRpYW5jZTogdmVjM2Y7XG4jaW5jbHVkZTxoYXJtb25pY3NGdW5jdGlvbnM+XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxudmFyeWluZyB2Q29sb3I6IHZlYzRmO1xuI2VuZGlmXG4jaW5jbHVkZTxidW1wVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bGlnaHRWeFVib0RlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdlBvc2l0aW9uVVZXOiB2ZWMzZjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZhcnlpbmcgdkRpcmVjdGlvblc6IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbnZhcnlpbmcgdlZpZXdEZXB0aDogZjMyO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG5AdmVydGV4XG5mbiBtYWluKGlucHV0IDogVmVydGV4SW5wdXRzKS0+RnJhZ21lbnRJbnB1dHMge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbnZhciBwb3NpdGlvblVwZGF0ZWQ6IHZlYzNmPXZlcnRleElucHV0cy5wb3NpdGlvbjtcbiNpZmRlZiBOT1JNQUxcbnZhciBub3JtYWxVcGRhdGVkOiB2ZWMzZj12ZXJ0ZXhJbnB1dHMubm9ybWFsO1xuI2VuZGlmXG4jaWZkZWYgVEFOR0VOVFxudmFyIHRhbmdlbnRVcGRhdGVkOiB2ZWM0Zj12ZXJ0ZXhJbnB1dHMudGFuZ2VudDtcbiNlbmRpZlxuI2lmZGVmIFVWMVxudmFyIHV2VXBkYXRlZDogdmVjMmY9dmVydGV4SW5wdXRzLnV2O1xuI2VuZGlmXG4jaWZkZWYgVVYyXG52YXIgdXYyVXBkYXRlZDogdmVjMmY9dmVydGV4SW5wdXRzLnV2MjtcbiNlbmRpZlxuI2lmZGVmIFZFUlRFWENPTE9SXG52YXIgY29sb3JVcGRhdGVkOiB2ZWM0Zj12ZXJ0ZXhJbnB1dHMuY29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbD5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblVWVz1wb3NpdGlvblVwZGF0ZWQ7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfUE9TSVRJT05cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfTk9STUFMXG4jaW5jbHVkZTxpbnN0YW5jZXNWZXJ0ZXg+XG4jaWYgZGVmaW5lZChQUkVQQVNTKSAmJiAoKGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUikpICYmICFkZWZpbmVkKEJPTkVTX1ZFTE9DSVRZX0VOQUJMRUQpXG52ZXJ0ZXhPdXRwdXRzLnZDdXJyZW50UG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qZmluYWxXb3JsZCp2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTt2ZXJ0ZXhPdXRwdXRzLnZQcmV2aW91c1Bvc2l0aW9uPXVuaWZvcm1zLnByZXZpb3VzVmlld1Byb2plY3Rpb24qZmluYWxQcmV2aW91c1dvcmxkKnZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO1xuI2VuZGlmXG4jaW5jbHVkZTxib25lc1ZlcnRleD5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uPlxudmFyIHdvcmxkUG9zOiB2ZWM0Zj1maW5hbFdvcmxkKiB2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTt2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblc9IHdvcmxkUG9zLnh5ejtcbiNpZmRlZiBQUkVQQVNTXG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4PlxuI2VuZGlmXG4jaWZkZWYgTk9STUFMXG52YXIgbm9ybWFsV29ybGQ6IG1hdDN4M2Y9IG1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopO1xuI2lmIGRlZmluZWQoSU5TVEFOQ0VTKSAmJiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKVxudmVydGV4T3V0cHV0cy52Tm9ybWFsVz1ub3JtYWxVcGRhdGVkLyB2ZWMzZihkb3Qobm9ybWFsV29ybGRbMF0sbm9ybWFsV29ybGRbMF0pLGRvdChub3JtYWxXb3JsZFsxXSxub3JtYWxXb3JsZFsxXSksZG90KG5vcm1hbFdvcmxkWzJdLG5vcm1hbFdvcmxkWzJdKSk7dmVydGV4T3V0cHV0cy52Tm9ybWFsVz1ub3JtYWxpemUobm9ybWFsV29ybGQqdmVydGV4T3V0cHV0cy52Tm9ybWFsVyk7XG4jZWxzZVxuI2lmZGVmIE5PTlVOSUZPUk1TQ0FMSU5HXG5ub3JtYWxXb3JsZD10cmFuc3Bvc2VNYXQzKGludmVyc2VNYXQzKG5vcm1hbFdvcmxkKSk7XG4jZW5kaWZcbnZlcnRleE91dHB1dHMudk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKm5vcm1hbFVwZGF0ZWQpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUwgIT0gQlJERl9ESUZGVVNFX01PREVMX0xBTUJFUlQgJiYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MRUdBQ1lcbnZhciB2aWV3RGlyZWN0aW9uVzogdmVjM2Y9bm9ybWFsaXplKHNjZW5lLnZFeWVQb3NpdGlvbi54eXotdmVydGV4T3V0cHV0cy52UG9zaXRpb25XKTt2YXIgTmRvdFY6IGYzMj1tYXgoZG90KHZlcnRleE91dHB1dHMudk5vcm1hbFcsdmlld0RpcmVjdGlvblcpLDAuMCk7dmFyIHJvdWdoTm9ybWFsOiB2ZWMzZj1taXgodmVydGV4T3V0cHV0cy52Tm9ybWFsVyx2aWV3RGlyZWN0aW9uVywoMC41KigxLjAtTmRvdFYpKSp1bmlmb3Jtcy5iYXNlRGlmZnVzZVJvdWdobmVzcyk7dmFyIHJlZmxlY3Rpb25WZWN0b3I6IHZlYzNmPSAodW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeCogdmVjNGYocm91Z2hOb3JtYWwsMCkpLnh5ejtcbiNlbHNlXG52YXIgcmVmbGVjdGlvblZlY3RvcjogdmVjM2Y9ICh1bmlmb3Jtcy5yZWZsZWN0aW9uTWF0cml4KiB2ZWM0Zih2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXLDApKS54eXo7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxucmVmbGVjdGlvblZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnZFbnZpcm9ubWVudElycmFkaWFuY2U9Y29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZShyZWZsZWN0aW9uVmVjdG9yKTtcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1dPUkxEUE9TXG4jaWZkZWYgTVVMVElWSUVXXG5pZiAoZ2xfVmlld0lEX09WUj09MHUpIHt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO30gZWxzZSB7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvblIqd29ybGRQb3M7fVxuI2Vsc2VcbnZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qd29ybGRQb3M7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxudmVydGV4T3V0cHV0cy52Q2xpcFNwYWNlUG9zaXRpb249dmVydGV4T3V0cHV0cy5wb3NpdGlvbjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZlcnRleE91dHB1dHMudkRpcmVjdGlvblc9bm9ybWFsaXplKChmaW5hbFdvcmxkKnZlYzRmKHBvc2l0aW9uVXBkYXRlZCwwLjApKS54eXopO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbnZlcnRleE91dHB1dHMudlZpZXdEZXB0aD0oc2NlbmUudmlldyp3b3JsZFBvcykuejtcbiNlbmRpZlxuI2lmbmRlZiBVVjFcbnZhciB1dlVwZGF0ZWQ6IHZlYzJmPSB2ZWMyZigwLiwwLik7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYxXG52ZXJ0ZXhPdXRwdXRzLnZNYWluVVYxPXV2VXBkYXRlZDtcbiNlbmRpZlxuI2lmbmRlZiBVVjJcbnZhciB1djJVcGRhdGVkOiB2ZWMyZj0gdmVjMmYoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMlxudmVydGV4T3V0cHV0cy52TWFpblVWMj11djJVcGRhdGVkO1xuI2VuZGlmXG4jaW5jbHVkZTx1dlZhcmlhYmxlRGVjbGFyYXRpb24+WzMuLjddXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxBTEJFRE8sX1ZBUllJTkdOQU1FXyxBbGJlZG8sX01BVFJJWE5BTUVfLGFsYmVkbyxfSU5GT05BTUVfLEFsYmVkb0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX1dFSUdIVCxfVkFSWUlOR05BTUVfLEJhc2VXZWlnaHQsX01BVFJJWE5BTUVfLGJhc2VXZWlnaHQsX0lORk9OQU1FXyxCYXNlV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcyxfTUFUUklYTkFNRV8sYmFzZURpZmZ1c2VSb3VnaG5lc3MsX0lORk9OQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxERVRBSUwsX1ZBUllJTkdOQU1FXyxEZXRhaWwsX01BVFJJWE5BTUVfLGRldGFpbCxfSU5GT05BTUVfLERldGFpbEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5ULF9WQVJZSU5HTkFNRV8sQW1iaWVudCxfTUFUUklYTkFNRV8sYW1iaWVudCxfSU5GT05BTUVfLEFtYmllbnRJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHksX01BVFJJWE5BTUVfLG9wYWNpdHksX0lORk9OQU1FXyxPcGFjaXR5SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSVZFLF9WQVJZSU5HTkFNRV8sRW1pc3NpdmUsX01BVFJJWE5BTUVfLGVtaXNzaXZlLF9JTkZPTkFNRV8sRW1pc3NpdmVJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sTElHSFRNQVAsX1ZBUllJTkdOQU1FXyxMaWdodG1hcCxfTUFUUklYTkFNRV8sbGlnaHRtYXAsX0lORk9OQU1FXyxMaWdodG1hcEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUSVZJVFksX1ZBUllJTkdOQU1FXyxSZWZsZWN0aXZpdHksX01BVFJJWE5BTUVfLHJlZmxlY3Rpdml0eSxfSU5GT05BTUVfLFJlZmxlY3Rpdml0eUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxNSUNST1NVUkZBQ0VNQVAsX1ZBUllJTkdOQU1FXyxNaWNyb1N1cmZhY2VTYW1wbGVyLF9NQVRSSVhOQU1FXyxtaWNyb1N1cmZhY2VTYW1wbGVyLF9JTkZPTkFNRV8sTWljcm9TdXJmYWNlU2FtcGxlckluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxNRVRBTExJQ19SRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLE1ldGFsbGljUmVmbGVjdGFuY2UsX01BVFJJWE5BTUVfLG1ldGFsbGljUmVmbGVjdGFuY2UsX0lORk9OQU1FXyxNZXRhbGxpY1JlZmxlY3RhbmNlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFJFRkxFQ1RBTkNFLF9WQVJZSU5HTkFNRV8sUmVmbGVjdGFuY2UsX01BVFJJWE5BTUVfLHJlZmxlY3RhbmNlLF9JTkZPTkFNRV8sUmVmbGVjdGFuY2VJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQlVNUCxfVkFSWUlOR05BTUVfLEJ1bXAsX01BVFJJWE5BTUVfLGJ1bXAsX0lORk9OQU1FXyxCdW1wSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLERFQ0FMLF9WQVJZSU5HTkFNRV8sRGVjYWwsX01BVFJJWE5BTUVfLGRlY2FsLF9JTkZPTkFNRV8sRGVjYWxJbmZvcy54KVxuI2lmZGVmIENMRUFSQ09BVFxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXQsX01BVFJJWE5BTUVfLGNsZWFyQ29hdCxfSU5GT05BTUVfLENsZWFyQ29hdEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRSb3VnaG5lc3MsX01BVFJJWE5BTUVfLGNsZWFyQ29hdFJvdWdobmVzcyxfSU5GT05BTUVfLENsZWFyQ29hdEluZm9zLnopXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfQlVNUCxfVkFSWUlOR05BTUVfLENsZWFyQ29hdEJ1bXAsX01BVFJJWE5BTUVfLGNsZWFyQ29hdEJ1bXAsX0lORk9OQU1FXyxDbGVhckNvYXRCdW1wSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9USU5UX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRUaW50LF9NQVRSSVhOQU1FXyxjbGVhckNvYXRUaW50LF9JTkZPTkFNRV8sQ2xlYXJDb2F0VGludEluZm9zLngpXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sSVJJREVTQ0VOQ0VfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlLF9NQVRSSVhOQU1FXyxpcmlkZXNjZW5jZSxfSU5GT05BTUVfLElyaWRlc2NlbmNlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFLF9WQVJZSU5HTkFNRV8sSXJpZGVzY2VuY2VUaGlja25lc3MsX01BVFJJWE5BTUVfLGlyaWRlc2NlbmNlVGhpY2tuZXNzLF9JTkZPTkFNRV8sSXJpZGVzY2VuY2VJbmZvcy56KVxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNIRUVOX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxTaGVlbixfTUFUUklYTkFNRV8sc2hlZW4sX0lORk9OQU1FXyxTaGVlbkluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLFNoZWVuUm91Z2huZXNzLF9NQVRSSVhOQU1FXyxzaGVlblJvdWdobmVzcyxfSU5GT05BTUVfLFNoZWVuSW5mb3MueilcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxBTklTT1RST1BJQ19URVhUVVJFLF9WQVJZSU5HTkFNRV8sQW5pc290cm9weSxfTUFUUklYTkFNRV8sYW5pc290cm9weSxfSU5GT05BTUVfLEFuaXNvdHJvcHlJbmZvcy54KVxuI2VuZGlmXG4jaWZkZWYgU1VCU1VSRkFDRVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFLF9WQVJZSU5HTkFNRV8sVGhpY2tuZXNzLF9NQVRSSVhOQU1FXyx0aGlja25lc3MsX0lORk9OQU1FXyxUaGlja25lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sUmVmcmFjdGlvbkludGVuc2l0eSxfTUFUUklYTkFNRV8scmVmcmFjdGlvbkludGVuc2l0eSxfSU5GT05BTUVfLFJlZnJhY3Rpb25JbnRlbnNpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lJbnRlbnNpdHksX01BVFJJWE5BTUVfLHRyYW5zbHVjZW5jeUludGVuc2l0eSxfSU5GT05BTUVfLFRyYW5zbHVjZW5jeUludGVuc2l0eUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5Q29sb3IsX01BVFJJWE5BTUVfLHRyYW5zbHVjZW5jeUNvbG9yLF9JTkZPTkFNRV8sVHJhbnNsdWNlbmN5Q29sb3JJbmZvcy54KVxuI2VuZGlmXG4jaW5jbHVkZTxidW1wVmVydGV4PlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxuI2luY2x1ZGU8Zm9nVmVydGV4PlxuI2luY2x1ZGU8c2hhZG93c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8dmVydGV4Q29sb3JNaXhpbmc+XG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclZlcnRleFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9