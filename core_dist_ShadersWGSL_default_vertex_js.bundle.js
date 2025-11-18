"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_default_vertex_js"],{

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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/lightVxFragmentDeclaration.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/lightVxFragmentDeclaration.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxFragmentDeclarationWGSL: () => (/* binding */ lightVxFragmentDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightVxFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vLightData{X}: vec4f;uniform vLightDiffuse{X}: vec4f;
#ifdef SPECULARTERM
uniform vLightSpecular{X}: vec4f;
#else
var vLightSpecular{X}: vec4f= vec4f(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: mat4x4f[SHADOWCSMNUM_CASCADES{X}];varying var vPositionFromLight{X}: vec4f[SHADOWCSMNUM_CASCADES{X}];varying var vDepthMetric{X}: f32[SHADOWCSMNUM_CASCADES{X}];varying var vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying var vPositionFromLight{X}: vec4f;varying var vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
uniform shadowsInfo{X}: vec4f;uniform depthValues{X}: vec2f;
#endif
#ifdef SPOTLIGHT{X}
uniform vLightDirection{X}: vec4f;uniform vLightFalloff{X}: vec4f;
#elif defined(POINTLIGHT{X})
uniform vLightFalloff{X}: vec4f;
#elif defined(HEMILIGHT{X})
uniform vLightGround{X}: vec3f;
#endif
#if defined(AREALIGHT{X})
uniform vLightWidth{X}: vec4f;uniform vLightHeight{X}: vec4f;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const lightVxFragmentDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/default.vertex.js":
/*!**************************************************!*\
  !*** ../core/dist/ShadersWGSL/default.vertex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultVertexShaderWGSL: () => (/* binding */ defaultVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_defaultUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/defaultUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js");
/* harmony import */ var _ShadersInclude_uvAttributeDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/uvAttributeDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_prePassVertexDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/prePassVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/mainUVVaryingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_bumpVertexDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/bumpVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxFragmentDeclaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/lightVxFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightVxFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/lightVxUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_prePassVertex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/prePassVertex */ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertex.js");
/* harmony import */ var _ShadersInclude_uvVariableDeclaration__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/uvVariableDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexImplementation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexImplementation */ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js");
/* harmony import */ var _ShadersInclude_bumpVertex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/bumpVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bumpVertex.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_vertexColorMixing__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/vertexColorMixing */ "../core/dist/ShadersWGSL/ShadersInclude/vertexColorMixing.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.
































const name = "defaultVertexShader";
const shader = `#include<defaultUboDeclaration>
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
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
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
var worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);
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
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld* vec4f(positionUpdated,0.0)).xyz);
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
vertexOutputs.vViewDepth=(scene.view*worldPos).z;
#endif
#ifndef UV1
var uvUpdated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const defaultVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2RlZmF1bHRfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9kZWZhdWx0VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9saWdodFZ4RnJhZ21lbnREZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL21haW5VVlZhcnlpbmdEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML2RlZmF1bHQudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChQQVJBTExBWCkgfHwgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChBTklTT1RST1BJQylcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmFyIHRibk5vcm1hbDogdmVjM2Y9bm9ybWFsaXplKG5vcm1hbFVwZGF0ZWQpO3ZhciB0Ym5UYW5nZW50OiB2ZWMzZj1ub3JtYWxpemUodGFuZ2VudFVwZGF0ZWQueHl6KTt2YXIgdGJuQml0YW5nZW50OiB2ZWMzZj1jcm9zcyh0Ym5Ob3JtYWwsdGJuVGFuZ2VudCkqdGFuZ2VudFVwZGF0ZWQudzt2YXIgbWF0VGVtcD0gbWF0M3gzZihmaW5hbFdvcmxkWzBdLnh5eixmaW5hbFdvcmxkWzFdLnh5eixmaW5hbFdvcmxkWzJdLnh5eikqIG1hdDN4M2YodGJuVGFuZ2VudCx0Ym5CaXRhbmdlbnQsdGJuTm9ybWFsKTt2ZXJ0ZXhPdXRwdXRzLnZUQk4wPW1hdFRlbXBbMF07dmVydGV4T3V0cHV0cy52VEJOMT1tYXRUZW1wWzFdO3ZlcnRleE91dHB1dHMudlRCTjI9bWF0VGVtcFsyXTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcFZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJ1bXBWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTCkgXG52YXJ5aW5nIHZUQk4wOiB2ZWMzZjt2YXJ5aW5nIHZUQk4xOiB2ZWMzZjt2YXJ5aW5nIHZUQk4yOiB2ZWMzZjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcFZlcnRleERlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2NlbmVVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9tZXNoVWJvRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwiZGVmYXVsdFVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBkaWZmdXNlTGVmdENvbG9yOiB2ZWM0Zjt1bmlmb3JtIGRpZmZ1c2VSaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIG9wYWNpdHlQYXJ0czogdmVjNGY7dW5pZm9ybSByZWZsZWN0aW9uTGVmdENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHJlZmxlY3Rpb25SaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHJlZnJhY3Rpb25MZWZ0Q29sb3I6IHZlYzRmO3VuaWZvcm0gcmVmcmFjdGlvblJpZ2h0Q29sb3I6IHZlYzRmO3VuaWZvcm0gZW1pc3NpdmVMZWZ0Q29sb3I6IHZlYzRmO3VuaWZvcm0gZW1pc3NpdmVSaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZEaWZmdXNlSW5mb3M6IHZlYzJmO3VuaWZvcm0gdkFtYmllbnRJbmZvczogdmVjMmY7dW5pZm9ybSB2T3BhY2l0eUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZFbWlzc2l2ZUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZMaWdodG1hcEluZm9zOiB2ZWMyZjt1bmlmb3JtIHZTcGVjdWxhckluZm9zOiB2ZWMyZjt1bmlmb3JtIHZCdW1wSW5mb3M6IHZlYzNmO3VuaWZvcm0gZGlmZnVzZU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGFtYmllbnRNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBvcGFjaXR5TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gZW1pc3NpdmVNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBsaWdodG1hcE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHNwZWN1bGFyTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gYnVtcE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZUYW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmO3VuaWZvcm0gcG9pbnRTaXplOiBmMzI7dW5pZm9ybSBhbHBoYUN1dE9mZjogZjMyO3VuaWZvcm0gcmVmcmFjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZyYWN0aW9uSW5mb3M6IHZlYzRmO3VuaWZvcm0gdlJlZnJhY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmcmFjdGlvblNpemU6IHZlYzNmO3VuaWZvcm0gdlNwZWN1bGFyQ29sb3I6IHZlYzRmO3VuaWZvcm0gdkVtaXNzaXZlQ29sb3I6IHZlYzNmO3VuaWZvcm0gdkRpZmZ1c2VDb2xvcjogdmVjNGY7dW5pZm9ybSB2QW1iaWVudENvbG9yOiB2ZWMzZjt1bmlmb3JtIGNhbWVyYUluZm86IHZlYzRmO3VuaWZvcm0gdlJlZmxlY3Rpb25JbmZvczogdmVjMmY7dW5pZm9ybSByZWZsZWN0aW9uTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlJlZmxlY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblNpemU6IHZlYzNmO1xuI2RlZmluZSBBRERJVElPTkFMX1VCT19ERUNMQVJBVElPTlxuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0VWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodFZ4RnJhZ21lbnREZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxudW5pZm9ybSB2TGlnaHREYXRhe1h9OiB2ZWM0Zjt1bmlmb3JtIHZMaWdodERpZmZ1c2V7WH06IHZlYzRmO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudW5pZm9ybSB2TGlnaHRTcGVjdWxhcntYfTogdmVjNGY7XG4jZWxzZVxudmFyIHZMaWdodFNwZWN1bGFye1h9OiB2ZWM0Zj0gdmVjNGYoMC4pO1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9Xe1h9XG4jaWZkZWYgU0hBRE9XQ1NNe1h9XG51bmlmb3JtIGxpZ2h0TWF0cml4e1h9OiBtYXQ0eDRmW1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dmFyeWluZyB2YXIgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9OiB2ZWM0ZltTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmFyIHZEZXB0aE1ldHJpY3tYfTogZjMyW1NIQURPV0NTTU5VTV9DQVNDQURFU3tYfV07dmFyeWluZyB2YXIgdlBvc2l0aW9uRnJvbUNhbWVyYXtYfTogdmVjNGY7XG4jZWxpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG4jZWxzZVxudmFyeWluZyB2YXIgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9OiB2ZWM0Zjt2YXJ5aW5nIHZhciB2RGVwdGhNZXRyaWN7WH06IGYzMjt1bmlmb3JtIGxpZ2h0TWF0cml4e1h9OiBtYXQ0eDRmO1xuI2VuZGlmXG51bmlmb3JtIHNoYWRvd3NJbmZve1h9OiB2ZWM0Zjt1bmlmb3JtIGRlcHRoVmFsdWVze1h9OiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIFNQT1RMSUdIVHtYfVxudW5pZm9ybSB2TGlnaHREaXJlY3Rpb257WH06IHZlYzRmO3VuaWZvcm0gdkxpZ2h0RmFsbG9mZntYfTogdmVjNGY7XG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG51bmlmb3JtIHZMaWdodEZhbGxvZmZ7WH06IHZlYzRmO1xuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG51bmlmb3JtIHZMaWdodEdyb3VuZHtYfTogdmVjM2Y7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSlcbnVuaWZvcm0gdkxpZ2h0V2lkdGh7WH06IHZlYzRmO3VuaWZvcm0gdkxpZ2h0SGVpZ2h0e1h9OiB2ZWM0ZjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTUFJTlVWe1h9XG52YXJ5aW5nIHZNYWluVVZ7WH06IHZlYzJmO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZGVmYXVsdFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3V2QXR0cmlidXRlRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRWeFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS91dlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ZlcnRleENvbG9yTWl4aW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoVmVydGV4XCI7XG5cbmNvbnN0IG5hbWUgPSBcImRlZmF1bHRWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjaW5jbHVkZTxkZWZhdWx0VWJvRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfQkVHSU5cbmF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFsOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbmF0dHJpYnV0ZSB0YW5nZW50OiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHV2OiB2ZWMyZjtcbiNlbmRpZlxuI2luY2x1ZGU8dXZBdHRyaWJ1dGVEZWNsYXJhdGlvbj5bMi4uN11cbiNpZmRlZiBWRVJURVhDT0xPUlxuYXR0cmlidXRlIGNvbG9yOiB2ZWM0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8Ym9uZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbnN0YW5jZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbj5bMS4uN11cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERJRkZVU0UsX1ZBUllJTkdOQU1FXyxEaWZmdXNlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVCxfVkFSWUlOR05BTUVfLEFtYmllbnQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxPUEFDSVRZLF9WQVJZSU5HTkFNRV8sT3BhY2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSVZFLF9WQVJZSU5HTkFNRV8sRW1pc3NpdmUpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxMSUdIVE1BUCxfVkFSWUlOR05BTUVfLExpZ2h0bWFwKVxuI2lmIGRlZmluZWQoU1BFQ1VMQVJURVJNKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVIsX1ZBUllJTkdOQU1FXyxTcGVjdWxhcilcbiNlbmRpZlxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQlVNUCxfVkFSWUlOR05BTUVfLEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsKVxudmFyeWluZyB2UG9zaXRpb25XOiB2ZWMzZjtcbiNpZmRlZiBOT1JNQUxcbnZhcnlpbmcgdk5vcm1hbFc6IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG52YXJ5aW5nIHZDb2xvcjogdmVjNGY7XG4jZW5kaWZcbiNpbmNsdWRlPGJ1bXBWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxfX2RlY2xfX2xpZ2h0VnhGcmFnbWVudD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvbj5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52YXJ5aW5nIHZQb3NpdGlvblVWVzogdmVjM2Y7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52YXJ5aW5nIHZEaXJlY3Rpb25XOiB2ZWMzZjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG52YXJ5aW5nIHZWaWV3RGVwdGg6IGYzMjtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xuQHZlcnRleFxuZm4gbWFpbihpbnB1dCA6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52YXIgcG9zaXRpb25VcGRhdGVkOiB2ZWMzZj12ZXJ0ZXhJbnB1dHMucG9zaXRpb247XG4jaWZkZWYgTk9STUFMXG52YXIgbm9ybWFsVXBkYXRlZDogdmVjM2Y9dmVydGV4SW5wdXRzLm5vcm1hbDtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbnZhciB0YW5nZW50VXBkYXRlZDogdmVjNGY9dmVydGV4SW5wdXRzLnRhbmdlbnQ7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbnZhciB1dlVwZGF0ZWQ6IHZlYzJmPXZlcnRleElucHV0cy51djtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPXZlcnRleElucHV0cy51djI7XG4jZW5kaWZcbiNpZmRlZiBWRVJURVhDT0xPUlxudmFyIGNvbG9yVXBkYXRlZDogdmVjNGY9dmVydGV4SW5wdXRzLmNvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWw+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmVydGV4T3V0cHV0cy52UG9zaXRpb25VVlc9cG9zaXRpb25VcGRhdGVkO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1BPU0lUSU9OXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX05PUk1BTFxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2lmIGRlZmluZWQoUFJFUEFTUykgJiYgKChkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpKSAmJiAhZGVmaW5lZChCT05FU19WRUxPQ0lUWV9FTkFCTEVEKVxudmVydGV4T3V0cHV0cy52Q3VycmVudFBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKmZpbmFsV29ybGQqdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7dmVydGV4T3V0cHV0cy52UHJldmlvdXNQb3NpdGlvbj11bmlmb3Jtcy5wcmV2aW91c1ZpZXdQcm9qZWN0aW9uKmZpbmFsUHJldmlvdXNXb3JsZCp2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNlbmRpZlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbnZhciB3b3JsZFBvczogdmVjNGY9ZmluYWxXb3JsZCp2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNpZmRlZiBOT1JNQUxcbnZhciBub3JtYWxXb3JsZDogbWF0M3gzZj0gbWF0M3gzZihmaW5hbFdvcmxkWzBdLnh5eixmaW5hbFdvcmxkWzFdLnh5eixmaW5hbFdvcmxkWzJdLnh5eik7XG4jaWYgZGVmaW5lZChJTlNUQU5DRVMpICYmIGRlZmluZWQoVEhJTl9JTlNUQU5DRVMpXG52ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXPW5vcm1hbFVwZGF0ZWQvIHZlYzNmKGRvdChub3JtYWxXb3JsZFswXSxub3JtYWxXb3JsZFswXSksZG90KG5vcm1hbFdvcmxkWzFdLG5vcm1hbFdvcmxkWzFdKSxkb3Qobm9ybWFsV29ybGRbMl0sbm9ybWFsV29ybGRbMl0pKTt2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXPW5vcm1hbGl6ZShub3JtYWxXb3JsZCp2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXKTtcbiNlbHNlXG4jaWZkZWYgTk9OVU5JRk9STVNDQUxJTkdcbm5vcm1hbFdvcmxkPXRyYW5zcG9zZU1hdDMoaW52ZXJzZU1hdDMobm9ybWFsV29ybGQpKTtcbiNlbmRpZlxudmVydGV4T3V0cHV0cy52Tm9ybWFsVz1ub3JtYWxpemUobm9ybWFsV29ybGQqbm9ybWFsVXBkYXRlZCk7XG4jZW5kaWZcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9XT1JMRFBPU1xuI2lmZGVmIE1VTFRJVklFV1xuaWYgKGdsX1ZpZXdJRF9PVlI9PTB1KSB7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvbip3b3JsZFBvczt9IGVsc2Uge3ZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb25SKndvcmxkUG9zO31cbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblc9IHdvcmxkUG9zLnh5ejtcbiNpZmRlZiBQUkVQQVNTXG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4PlxuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmVydGV4T3V0cHV0cy52RGlyZWN0aW9uVz1ub3JtYWxpemUoKGZpbmFsV29ybGQqIHZlYzRmKHBvc2l0aW9uVXBkYXRlZCwwLjApKS54eXopO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbnZlcnRleE91dHB1dHMudlZpZXdEZXB0aD0oc2NlbmUudmlldyp3b3JsZFBvcykuejtcbiNlbmRpZlxuI2lmbmRlZiBVVjFcbnZhciB1dlVwZGF0ZWQ6IHZlYzJmPXZlYzJmKDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjFcbnZlcnRleE91dHB1dHMudk1haW5VVjE9dXZVcGRhdGVkO1xuI2VuZGlmXG4jaWZuZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPXZlYzJmKDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjJcbnZlcnRleE91dHB1dHMudk1haW5VVjI9dXYyVXBkYXRlZDtcbiNlbmRpZlxuI2luY2x1ZGU8dXZWYXJpYWJsZURlY2xhcmF0aW9uPlszLi43XVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sRElGRlVTRSxfVkFSWUlOR05BTUVfLERpZmZ1c2UsX01BVFJJWE5BTUVfLGRpZmZ1c2UsX0lORk9OQU1FXyxEaWZmdXNlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLERFVEFJTCxfVkFSWUlOR05BTUVfLERldGFpbCxfTUFUUklYTkFNRV8sZGV0YWlsLF9JTkZPTkFNRV8sRGV0YWlsSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50LF9NQVRSSVhOQU1FXyxhbWJpZW50LF9JTkZPTkFNRV8sQW1iaWVudEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxPUEFDSVRZLF9WQVJZSU5HTkFNRV8sT3BhY2l0eSxfTUFUUklYTkFNRV8sb3BhY2l0eSxfSU5GT05BTUVfLE9wYWNpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sRU1JU1NJVkUsX1ZBUllJTkdOQU1FXyxFbWlzc2l2ZSxfTUFUUklYTkFNRV8sZW1pc3NpdmUsX0lORk9OQU1FXyxFbWlzc2l2ZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxMSUdIVE1BUCxfVkFSWUlOR05BTUVfLExpZ2h0bWFwLF9NQVRSSVhOQU1FXyxsaWdodG1hcCxfSU5GT05BTUVfLExpZ2h0bWFwSW5mb3MueClcbiNpZiBkZWZpbmVkKFNQRUNVTEFSVEVSTSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXIsX01BVFJJWE5BTUVfLHNwZWN1bGFyLF9JTkZPTkFNRV8sU3BlY3VsYXJJbmZvcy54KVxuI2VuZGlmXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCVU1QLF9WQVJZSU5HTkFNRV8sQnVtcCxfTUFUUklYTkFNRV8sYnVtcCxfSU5GT05BTUVfLEJ1bXBJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbCxfTUFUUklYTkFNRV8sZGVjYWwsX0lORk9OQU1FXyxEZWNhbEluZm9zLngpXG4jaW5jbHVkZTxidW1wVmVydGV4PlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxuI2luY2x1ZGU8Zm9nVmVydGV4PlxuI2luY2x1ZGU8c2hhZG93c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8dmVydGV4Q29sb3JNaXhpbmc+XG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFZlcnRleFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9