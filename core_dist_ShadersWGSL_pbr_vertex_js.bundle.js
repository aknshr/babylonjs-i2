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
#ifdef RIGHT_HANDED
vertexOutputs.vViewDepth=-(scene.view*worldPos).z;
#else
vertexOutputs.vViewDepth=(scene.view*worldPos).z;
#endif
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3Bicl92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML3Bici52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJ1bXBWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChCVU1QKSB8fCBkZWZpbmVkKFBBUkFMTEFYKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpXG52YXIgdGJuTm9ybWFsOiB2ZWMzZj1ub3JtYWxpemUobm9ybWFsVXBkYXRlZCk7dmFyIHRiblRhbmdlbnQ6IHZlYzNmPW5vcm1hbGl6ZSh0YW5nZW50VXBkYXRlZC54eXopO3ZhciB0Ym5CaXRhbmdlbnQ6IHZlYzNmPWNyb3NzKHRibk5vcm1hbCx0Ym5UYW5nZW50KSp0YW5nZW50VXBkYXRlZC53O3ZhciBtYXRUZW1wPSBtYXQzeDNmKGZpbmFsV29ybGRbMF0ueHl6LGZpbmFsV29ybGRbMV0ueHl6LGZpbmFsV29ybGRbMl0ueHl6KSogbWF0M3gzZih0Ym5UYW5nZW50LHRibkJpdGFuZ2VudCx0Ym5Ob3JtYWwpO3ZlcnRleE91dHB1dHMudlRCTjA9bWF0VGVtcFswXTt2ZXJ0ZXhPdXRwdXRzLnZUQk4xPW1hdFRlbXBbMV07dmVydGV4T3V0cHV0cy52VEJOMj1tYXRUZW1wWzJdO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBidW1wVmVydGV4V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcFZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChQQVJBTExBWCkgfHwgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChBTklTT1RST1BJQylcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKSBcbnZhcnlpbmcgdlRCTjA6IHZlYzNmO3ZhcnlpbmcgdlRCTjE6IHZlYzNmO3ZhcnlpbmcgdlRCTjI6IHZlYzNmO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBidW1wVmVydGV4RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gdkFsYmVkb0luZm9zOiB2ZWMyZjt1bmlmb3JtIHZCYXNlV2VpZ2h0SW5mb3M6IHZlYzJmO3VuaWZvcm0gdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkFtYmllbnRJbmZvczogdmVjNGY7dW5pZm9ybSB2T3BhY2l0eUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZFbWlzc2l2ZUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZMaWdodG1hcEluZm9zOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aXZpdHlJbmZvczogdmVjM2Y7dW5pZm9ybSB2TWljcm9TdXJmYWNlU2FtcGxlckluZm9zOiB2ZWMyZjt1bmlmb3JtIHZCdW1wSW5mb3M6IHZlYzNmO3VuaWZvcm0gYWxiZWRvTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYmFzZVdlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGJhc2VEaWZmdXNlUm91Z2huZXNzTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYW1iaWVudE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIG9wYWNpdHlNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBlbWlzc2l2ZU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGxpZ2h0bWFwTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gcmVmbGVjdGl2aXR5TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gbWljcm9TdXJmYWNlU2FtcGxlck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGJ1bXBNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2VGFuZ2VudFNwYWNlUGFyYW1zOiB2ZWMyZjt1bmlmb3JtIHZBbGJlZG9Db2xvcjogdmVjNGY7dW5pZm9ybSBiYXNlV2VpZ2h0OiBmMzI7dW5pZm9ybSBiYXNlRGlmZnVzZVJvdWdobmVzczogZjMyO3VuaWZvcm0gdkxpZ2h0aW5nSW50ZW5zaXR5OiB2ZWM0Zjt1bmlmb3JtIHBvaW50U2l6ZTogZjMyO3VuaWZvcm0gdlJlZmxlY3Rpdml0eUNvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZFbWlzc2l2ZUNvbG9yOiB2ZWMzZjt1bmlmb3JtIHZBbWJpZW50Q29sb3I6IHZlYzNmO3VuaWZvcm0gdkRlYnVnTW9kZTogdmVjMmY7dW5pZm9ybSB2TWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM6IHZlYzRmO3VuaWZvcm0gdk1ldGFsbGljUmVmbGVjdGFuY2VJbmZvczogdmVjMmY7dW5pZm9ybSBtZXRhbGxpY1JlZmxlY3RhbmNlTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlJlZmxlY3RhbmNlSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGFuY2VNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBjYW1lcmFJbmZvOiB2ZWM0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblNpemU6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb246IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Db2xvcjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDAwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMV8xOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMTA6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwxMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDIwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMjE6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwyMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWDogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFhfWlo6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlZX1paOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFk6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlaOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWDogdmVjM2Y7XG4jZGVmaW5lIEFERElUSU9OQUxfVUJPX0RFQ0xBUkFUSU9OXG4jaW5jbHVkZTxzY2VuZVVib0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bWVzaFVib0RlY2xhcmF0aW9uPlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclVib0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdXZBdHRyaWJ1dGVEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJSREZGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFZ4VWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3V2VmFyaWFibGVEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdmVydGV4Q29sb3JNaXhpbmdcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBQQlJfVkVSVEVYX1NIQURFUlxuI2luY2x1ZGU8cGJyVWJvRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfQkVHSU5cbmF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFsOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbmF0dHJpYnV0ZSB0YW5nZW50OiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHV2OiB2ZWMyZjtcbiNlbmRpZlxuI2luY2x1ZGU8dXZBdHRyaWJ1dGVEZWNsYXJhdGlvbj5bMi4uN11cbiNpbmNsdWRlPG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbj5bMS4uN11cbiNpZmRlZiBWRVJURVhDT0xPUlxuYXR0cmlidXRlIGNvbG9yOiB2ZWM0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyQlJERkZ1bmN0aW9ucz5cbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTEJFRE8sX1ZBUllJTkdOQU1FXyxBbGJlZG8pXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX1dFSUdIVCxfVkFSWUlOR05BTUVfLEJhc2VXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX0RJRkZVU0VfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQmFzZURpZmZ1c2VSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERVRBSUwsX1ZBUllJTkdOQU1FXyxEZXRhaWwpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5ULF9WQVJZSU5HTkFNRV8sQW1iaWVudClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLE9QQUNJVFksX1ZBUllJTkdOQU1FXyxPcGFjaXR5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sRU1JU1NJVkUsX1ZBUllJTkdOQU1FXyxFbWlzc2l2ZSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXApXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUSVZJVFksX1ZBUllJTkdOQU1FXyxSZWZsZWN0aXZpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxNSUNST1NVUkZBQ0VNQVAsX1ZBUllJTkdOQU1FXyxNaWNyb1N1cmZhY2VTYW1wbGVyKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTUVUQUxMSUNfUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxNZXRhbGxpY1JlZmxlY3RhbmNlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxSZWZsZWN0YW5jZSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJVTVAsX1ZBUllJTkdOQU1FXyxCdW1wKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbClcbiNpZmRlZiBDTEVBUkNPQVRcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0Um91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX0JVTVAsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRCdW1wKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RJTlRfVEVYVFVSRSxfVkFSWUlOR05BTUVfLENsZWFyQ29hdFRpbnQpXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sSVJJREVTQ0VOQ0VfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sSVJJREVTQ0VOQ0VfVEhJQ0tORVNTX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZVRoaWNrbmVzcylcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sU2hlZW4pXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLFNoZWVuUm91Z2huZXNzKVxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFOSVNPVFJPUElDX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxBbmlzb3Ryb3B5KVxuI2VuZGlmXG4jaWZkZWYgU1VCU1VSRkFDRVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFLF9WQVJZSU5HTkFNRV8sVGhpY2tuZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfUkVGUkFDVElPTklOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sUmVmcmFjdGlvbkludGVuc2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUlOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5SW50ZW5zaXR5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRyYW5zbHVjZW5jeUNvbG9yKVxuI2VuZGlmXG52YXJ5aW5nIHZQb3NpdGlvblc6IHZlYzNmO1xuI2lmIERFQlVHTU9ERT4wXG52YXJ5aW5nIHZDbGlwU3BhY2VQb3NpdGlvbjogdmVjNGY7XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZhcnlpbmcgdk5vcm1hbFc6IHZlYzNmO1xuI2lmIGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG52YXJ5aW5nIHZFbnZpcm9ubWVudElycmFkaWFuY2U6IHZlYzNmO1xuI2luY2x1ZGU8aGFybW9uaWNzRnVuY3Rpb25zPlxuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbnZhcnlpbmcgdkNvbG9yOiB2ZWM0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8YnVtcFZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxpZ2h0VnhVYm9EZWNsYXJhdGlvbj5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvbj5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52YXJ5aW5nIHZQb3NpdGlvblVWVzogdmVjM2Y7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52YXJ5aW5nIHZEaXJlY3Rpb25XOiB2ZWMzZjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG52YXJ5aW5nIHZWaWV3RGVwdGg6IGYzMjtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xuQHZlcnRleFxuZm4gbWFpbihpbnB1dCA6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52YXIgcG9zaXRpb25VcGRhdGVkOiB2ZWMzZj12ZXJ0ZXhJbnB1dHMucG9zaXRpb247XG4jaWZkZWYgTk9STUFMXG52YXIgbm9ybWFsVXBkYXRlZDogdmVjM2Y9dmVydGV4SW5wdXRzLm5vcm1hbDtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbnZhciB0YW5nZW50VXBkYXRlZDogdmVjNGY9dmVydGV4SW5wdXRzLnRhbmdlbnQ7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbnZhciB1dlVwZGF0ZWQ6IHZlYzJmPXZlcnRleElucHV0cy51djtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPXZlcnRleElucHV0cy51djI7XG4jZW5kaWZcbiNpZmRlZiBWRVJURVhDT0xPUlxudmFyIGNvbG9yVXBkYXRlZDogdmVjNGY9dmVydGV4SW5wdXRzLmNvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWw+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmVydGV4T3V0cHV0cy52UG9zaXRpb25VVlc9cG9zaXRpb25VcGRhdGVkO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1BPU0lUSU9OXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX05PUk1BTFxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2lmIGRlZmluZWQoUFJFUEFTUykgJiYgKChkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpKSAmJiAhZGVmaW5lZChCT05FU19WRUxPQ0lUWV9FTkFCTEVEKVxudmVydGV4T3V0cHV0cy52Q3VycmVudFBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKmZpbmFsV29ybGQqdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7dmVydGV4T3V0cHV0cy52UHJldmlvdXNQb3NpdGlvbj11bmlmb3Jtcy5wcmV2aW91c1ZpZXdQcm9qZWN0aW9uKmZpbmFsUHJldmlvdXNXb3JsZCp2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNlbmRpZlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbnZhciB3b3JsZFBvczogdmVjNGY9ZmluYWxXb3JsZCogdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7dmVydGV4T3V0cHV0cy52UG9zaXRpb25XPSB3b3JsZFBvcy54eXo7XG4jaWZkZWYgUFJFUEFTU1xuI2luY2x1ZGU8cHJlUGFzc1ZlcnRleD5cbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFdvcmxkOiBtYXQzeDNmPSBtYXQzeDNmKGZpbmFsV29ybGRbMF0ueHl6LGZpbmFsV29ybGRbMV0ueHl6LGZpbmFsV29ybGRbMl0ueHl6KTtcbiNpZiBkZWZpbmVkKElOU1RBTkNFUykgJiYgZGVmaW5lZChUSElOX0lOU1RBTkNFUylcbnZlcnRleE91dHB1dHMudk5vcm1hbFc9bm9ybWFsVXBkYXRlZC8gdmVjM2YoZG90KG5vcm1hbFdvcmxkWzBdLG5vcm1hbFdvcmxkWzBdKSxkb3Qobm9ybWFsV29ybGRbMV0sbm9ybWFsV29ybGRbMV0pLGRvdChub3JtYWxXb3JsZFsyXSxub3JtYWxXb3JsZFsyXSkpO3ZlcnRleE91dHB1dHMudk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKnZlcnRleE91dHB1dHMudk5vcm1hbFcpO1xuI2Vsc2VcbiNpZmRlZiBOT05VTklGT1JNU0NBTElOR1xubm9ybWFsV29ybGQ9dHJhbnNwb3NlTWF0MyhpbnZlcnNlTWF0Myhub3JtYWxXb3JsZCkpO1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXPW5vcm1hbGl6ZShub3JtYWxXb3JsZCpub3JtYWxVcGRhdGVkKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG4jaWYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MQU1CRVJUICYmIEJBU0VfRElGRlVTRV9NT0RFTCAhPSBCUkRGX0RJRkZVU0VfTU9ERUxfTEVHQUNZXG52YXIgdmlld0RpcmVjdGlvblc6IHZlYzNmPW5vcm1hbGl6ZShzY2VuZS52RXllUG9zaXRpb24ueHl6LXZlcnRleE91dHB1dHMudlBvc2l0aW9uVyk7dmFyIE5kb3RWOiBmMzI9bWF4KGRvdCh2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXLHZpZXdEaXJlY3Rpb25XKSwwLjApO3ZhciByb3VnaE5vcm1hbDogdmVjM2Y9bWl4KHZlcnRleE91dHB1dHMudk5vcm1hbFcsdmlld0RpcmVjdGlvblcsKDAuNSooMS4wLU5kb3RWKSkqdW5pZm9ybXMuYmFzZURpZmZ1c2VSb3VnaG5lc3MpO3ZhciByZWZsZWN0aW9uVmVjdG9yOiB2ZWMzZj0gKHVuaWZvcm1zLnJlZmxlY3Rpb25NYXRyaXgqIHZlYzRmKHJvdWdoTm9ybWFsLDApKS54eXo7XG4jZWxzZVxudmFyIHJlZmxlY3Rpb25WZWN0b3I6IHZlYzNmPSAodW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeCogdmVjNGYodmVydGV4T3V0cHV0cy52Tm9ybWFsVywwKSkueHl6O1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9PUFBPU0lURVpcbnJlZmxlY3Rpb25WZWN0b3Iueio9LTEuMDtcbiNlbmRpZlxudmVydGV4T3V0cHV0cy52RW52aXJvbm1lbnRJcnJhZGlhbmNlPWNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UocmVmbGVjdGlvblZlY3Rvcik7XG4jZW5kaWZcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9XT1JMRFBPU1xuI2lmZGVmIE1VTFRJVklFV1xuaWYgKGdsX1ZpZXdJRF9PVlI9PTB1KSB7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvbip3b3JsZFBvczt9IGVsc2Uge3ZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb25SKndvcmxkUG9zO31cbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbnZlcnRleE91dHB1dHMudkNsaXBTcGFjZVBvc2l0aW9uPXZlcnRleE91dHB1dHMucG9zaXRpb247XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52ZXJ0ZXhPdXRwdXRzLnZEaXJlY3Rpb25XPW5vcm1hbGl6ZSgoZmluYWxXb3JsZCp2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMC4wKSkueHl6KTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG4jaWZkZWYgUklHSFRfSEFOREVEXG52ZXJ0ZXhPdXRwdXRzLnZWaWV3RGVwdGg9LShzY2VuZS52aWV3KndvcmxkUG9zKS56O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudlZpZXdEZXB0aD0oc2NlbmUudmlldyp3b3JsZFBvcykuejtcbiNlbmRpZlxuI2VuZGlmXG4jaWZuZGVmIFVWMVxudmFyIHV2VXBkYXRlZDogdmVjMmY9IHZlYzJmKDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjFcbnZlcnRleE91dHB1dHMudk1haW5VVjE9dXZVcGRhdGVkO1xuI2VuZGlmXG4jaWZuZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPSB2ZWMyZigwLiwwLik7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYyXG52ZXJ0ZXhPdXRwdXRzLnZNYWluVVYyPXV2MlVwZGF0ZWQ7XG4jZW5kaWZcbiNpbmNsdWRlPHV2VmFyaWFibGVEZWNsYXJhdGlvbj5bMy4uN11cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEFMQkVETyxfVkFSWUlOR05BTUVfLEFsYmVkbyxfTUFUUklYTkFNRV8sYWxiZWRvLF9JTkZPTkFNRV8sQWxiZWRvSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfV0VJR0hULF9WQVJZSU5HTkFNRV8sQmFzZVdlaWdodCxfTUFUUklYTkFNRV8sYmFzZVdlaWdodCxfSU5GT05BTUVfLEJhc2VXZWlnaHRJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9ESUZGVVNFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzLF9NQVRSSVhOQU1FXyxiYXNlRGlmZnVzZVJvdWdobmVzcyxfSU5GT05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLERFVEFJTCxfVkFSWUlOR05BTUVfLERldGFpbCxfTUFUUklYTkFNRV8sZGV0YWlsLF9JTkZPTkFNRV8sRGV0YWlsSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50LF9NQVRSSVhOQU1FXyxhbWJpZW50LF9JTkZPTkFNRV8sQW1iaWVudEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxPUEFDSVRZLF9WQVJZSU5HTkFNRV8sT3BhY2l0eSxfTUFUUklYTkFNRV8sb3BhY2l0eSxfSU5GT05BTUVfLE9wYWNpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sRU1JU1NJVkUsX1ZBUllJTkdOQU1FXyxFbWlzc2l2ZSxfTUFUUklYTkFNRV8sZW1pc3NpdmUsX0lORk9OQU1FXyxFbWlzc2l2ZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxMSUdIVE1BUCxfVkFSWUlOR05BTUVfLExpZ2h0bWFwLF9NQVRSSVhOQU1FXyxsaWdodG1hcCxfSU5GT05BTUVfLExpZ2h0bWFwSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFJFRkxFQ1RJVklUWSxfVkFSWUlOR05BTUVfLFJlZmxlY3Rpdml0eSxfTUFUUklYTkFNRV8scmVmbGVjdGl2aXR5LF9JTkZPTkFNRV8sUmVmbGVjdGl2aXR5SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLE1JQ1JPU1VSRkFDRU1BUCxfVkFSWUlOR05BTUVfLE1pY3JvU3VyZmFjZVNhbXBsZXIsX01BVFJJWE5BTUVfLG1pY3JvU3VyZmFjZVNhbXBsZXIsX0lORk9OQU1FXyxNaWNyb1N1cmZhY2VTYW1wbGVySW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLE1FVEFMTElDX1JFRkxFQ1RBTkNFLF9WQVJZSU5HTkFNRV8sTWV0YWxsaWNSZWZsZWN0YW5jZSxfTUFUUklYTkFNRV8sbWV0YWxsaWNSZWZsZWN0YW5jZSxfSU5GT05BTUVfLE1ldGFsbGljUmVmbGVjdGFuY2VJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxSZWZsZWN0YW5jZSxfTUFUUklYTkFNRV8scmVmbGVjdGFuY2UsX0lORk9OQU1FXyxSZWZsZWN0YW5jZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCVU1QLF9WQVJZSU5HTkFNRV8sQnVtcCxfTUFUUklYTkFNRV8sYnVtcCxfSU5GT05BTUVfLEJ1bXBJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbCxfTUFUUklYTkFNRV8sZGVjYWwsX0lORk9OQU1FXyxEZWNhbEluZm9zLngpXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVEVYVFVSRSxfVkFSWUlOR05BTUVfLENsZWFyQ29hdCxfTUFUUklYTkFNRV8sY2xlYXJDb2F0LF9JTkZPTkFNRV8sQ2xlYXJDb2F0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLENsZWFyQ29hdFJvdWdobmVzcyxfTUFUUklYTkFNRV8sY2xlYXJDb2F0Um91Z2huZXNzLF9JTkZPTkFNRV8sQ2xlYXJDb2F0SW5mb3MueilcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9CVU1QLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0QnVtcCxfTUFUUklYTkFNRV8sY2xlYXJDb2F0QnVtcCxfSU5GT05BTUVfLENsZWFyQ29hdEJ1bXBJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RJTlRfVEVYVFVSRSxfVkFSWUlOR05BTUVfLENsZWFyQ29hdFRpbnQsX01BVFJJWE5BTUVfLGNsZWFyQ29hdFRpbnQsX0lORk9OQU1FXyxDbGVhckNvYXRUaW50SW5mb3MueClcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sSXJpZGVzY2VuY2UsX01BVFJJWE5BTUVfLGlyaWRlc2NlbmNlLF9JTkZPTkFNRV8sSXJpZGVzY2VuY2VJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sSVJJREVTQ0VOQ0VfVEhJQ0tORVNTX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZVRoaWNrbmVzcyxfTUFUUklYTkFNRV8saXJpZGVzY2VuY2VUaGlja25lc3MsX0lORk9OQU1FXyxJcmlkZXNjZW5jZUluZm9zLnopXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRSxfVkFSWUlOR05BTUVfLFNoZWVuLF9NQVRSSVhOQU1FXyxzaGVlbixfSU5GT05BTUVfLFNoZWVuSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNIRUVOX1RFWFRVUkVfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sU2hlZW5Sb3VnaG5lc3MsX01BVFJJWE5BTUVfLHNoZWVuUm91Z2huZXNzLF9JTkZPTkFNRV8sU2hlZW5JbmZvcy56KVxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEFOSVNPVFJPUElDX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxBbmlzb3Ryb3B5LF9NQVRSSVhOQU1FXyxhbmlzb3Ryb3B5LF9JTkZPTkFNRV8sQW5pc290cm9weUluZm9zLngpXG4jZW5kaWZcbiNpZmRlZiBTVUJTVVJGQUNFXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUaGlja25lc3MsX01BVFJJWE5BTUVfLHRoaWNrbmVzcyxfSU5GT05BTUVfLFRoaWNrbmVzc0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxSZWZyYWN0aW9uSW50ZW5zaXR5LF9NQVRSSVhOQU1FXyxyZWZyYWN0aW9uSW50ZW5zaXR5LF9JTkZPTkFNRV8sUmVmcmFjdGlvbkludGVuc2l0eUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTU19UUkFOU0xVQ0VOQ1lJTlRFTlNJVFlfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRyYW5zbHVjZW5jeUludGVuc2l0eSxfTUFUUklYTkFNRV8sdHJhbnNsdWNlbmN5SW50ZW5zaXR5LF9JTkZPTkFNRV8sVHJhbnNsdWNlbmN5SW50ZW5zaXR5SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lDb2xvcixfTUFUUklYTkFNRV8sdHJhbnNsdWNlbmN5Q29sb3IsX0lORk9OQU1FXyxUcmFuc2x1Y2VuY3lDb2xvckluZm9zLngpXG4jZW5kaWZcbiNpbmNsdWRlPGJ1bXBWZXJ0ZXg+XG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXg+XG4jaW5jbHVkZTxmb2dWZXJ0ZXg+XG4jaW5jbHVkZTxzaGFkb3dzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTx2ZXJ0ZXhDb2xvck1peGluZz5cbiNpbmNsdWRlPGxvZ0RlcHRoVmVydGV4PlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=