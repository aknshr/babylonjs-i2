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
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
#ifdef RIGHT_HANDED
vertexOutputs.vViewDepth=-(scene.view*worldPos).z;
#else
vertexOutputs.vViewDepth=(scene.view*worldPos).z;
#endif
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2RlZmF1bHRfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvZGVmYXVsdFVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9kZWZhdWx0LnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcFZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZhciB0Ym5Ob3JtYWw6IHZlYzNmPW5vcm1hbGl6ZShub3JtYWxVcGRhdGVkKTt2YXIgdGJuVGFuZ2VudDogdmVjM2Y9bm9ybWFsaXplKHRhbmdlbnRVcGRhdGVkLnh5eik7dmFyIHRibkJpdGFuZ2VudDogdmVjM2Y9Y3Jvc3ModGJuTm9ybWFsLHRiblRhbmdlbnQpKnRhbmdlbnRVcGRhdGVkLnc7dmFyIG1hdFRlbXA9IG1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopKiBtYXQzeDNmKHRiblRhbmdlbnQsdGJuQml0YW5nZW50LHRibk5vcm1hbCk7dmVydGV4T3V0cHV0cy52VEJOMD1tYXRUZW1wWzBdO3ZlcnRleE91dHB1dHMudlRCTjE9bWF0VGVtcFsxXTt2ZXJ0ZXhPdXRwdXRzLnZUQk4yPW1hdFRlbXBbMl07XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wVmVydGV4RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChCVU1QKSB8fCBkZWZpbmVkKFBBUkFMTEFYKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpIFxudmFyeWluZyB2VEJOMDogdmVjM2Y7dmFyeWluZyB2VEJOMTogdmVjM2Y7dmFyeWluZyB2VEJOMjogdmVjM2Y7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBWZXJ0ZXhEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcImRlZmF1bHRVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gZGlmZnVzZUxlZnRDb2xvcjogdmVjNGY7dW5pZm9ybSBkaWZmdXNlUmlnaHRDb2xvcjogdmVjNGY7dW5pZm9ybSBvcGFjaXR5UGFydHM6IHZlYzRmO3VuaWZvcm0gcmVmbGVjdGlvbkxlZnRDb2xvcjogdmVjNGY7dW5pZm9ybSByZWZsZWN0aW9uUmlnaHRDb2xvcjogdmVjNGY7dW5pZm9ybSByZWZyYWN0aW9uTGVmdENvbG9yOiB2ZWM0Zjt1bmlmb3JtIHJlZnJhY3Rpb25SaWdodENvbG9yOiB2ZWM0Zjt1bmlmb3JtIGVtaXNzaXZlTGVmdENvbG9yOiB2ZWM0Zjt1bmlmb3JtIGVtaXNzaXZlUmlnaHRDb2xvcjogdmVjNGY7dW5pZm9ybSB2RGlmZnVzZUluZm9zOiB2ZWMyZjt1bmlmb3JtIHZBbWJpZW50SW5mb3M6IHZlYzJmO3VuaWZvcm0gdk9wYWNpdHlJbmZvczogdmVjMmY7dW5pZm9ybSB2RW1pc3NpdmVJbmZvczogdmVjMmY7dW5pZm9ybSB2TGlnaHRtYXBJbmZvczogdmVjMmY7dW5pZm9ybSB2U3BlY3VsYXJJbmZvczogdmVjMmY7dW5pZm9ybSB2QnVtcEluZm9zOiB2ZWMzZjt1bmlmb3JtIGRpZmZ1c2VNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBhbWJpZW50TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gb3BhY2l0eU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGVtaXNzaXZlTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gbGlnaHRtYXBNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSBzcGVjdWxhck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIGJ1bXBNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2VGFuZ2VudFNwYWNlUGFyYW1zOiB2ZWMyZjt1bmlmb3JtIHBvaW50U2l6ZTogZjMyO3VuaWZvcm0gYWxwaGFDdXRPZmY6IGYzMjt1bmlmb3JtIHJlZnJhY3Rpb25NYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2UmVmcmFjdGlvbkluZm9zOiB2ZWM0Zjt1bmlmb3JtIHZSZWZyYWN0aW9uUG9zaXRpb246IHZlYzNmO3VuaWZvcm0gdlJlZnJhY3Rpb25TaXplOiB2ZWMzZjt1bmlmb3JtIHZTcGVjdWxhckNvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZFbWlzc2l2ZUNvbG9yOiB2ZWMzZjt1bmlmb3JtIHZEaWZmdXNlQ29sb3I6IHZlYzRmO3VuaWZvcm0gdkFtYmllbnRDb2xvcjogdmVjM2Y7dW5pZm9ybSBjYW1lcmFJbmZvOiB2ZWM0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uUG9zaXRpb246IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25TaXplOiB2ZWMzZjtcbiNkZWZpbmUgQURESVRJT05BTF9VQk9fREVDTEFSQVRJT05cbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFVib0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbnVuaWZvcm0gdkxpZ2h0RGF0YXtYfTogdmVjNGY7dW5pZm9ybSB2TGlnaHREaWZmdXNle1h9OiB2ZWM0ZjtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnVuaWZvcm0gdkxpZ2h0U3BlY3VsYXJ7WH06IHZlYzRmO1xuI2Vsc2VcbnZhciB2TGlnaHRTcGVjdWxhcntYfTogdmVjNGY9IHZlYzRmKDAuKTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTXtYfVxudW5pZm9ybSBsaWdodE1hdHJpeHtYfTogbWF0NHg0ZltTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmFyIHZQb3NpdGlvbkZyb21MaWdodHtYfTogdmVjNGZbU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt2YXJ5aW5nIHZhciB2RGVwdGhNZXRyaWN7WH06IGYzMltTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmFyIHZQb3NpdGlvbkZyb21DYW1lcmF7WH06IHZlYzRmO1xuI2VsaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuI2Vsc2VcbnZhcnlpbmcgdmFyIHZQb3NpdGlvbkZyb21MaWdodHtYfTogdmVjNGY7dmFyeWluZyB2YXIgdkRlcHRoTWV0cmlje1h9OiBmMzI7dW5pZm9ybSBsaWdodE1hdHJpeHtYfTogbWF0NHg0ZjtcbiNlbmRpZlxudW5pZm9ybSBzaGFkb3dzSW5mb3tYfTogdmVjNGY7dW5pZm9ybSBkZXB0aFZhbHVlc3tYfTogdmVjMmY7XG4jZW5kaWZcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnVuaWZvcm0gdkxpZ2h0RGlyZWN0aW9ue1h9OiB2ZWM0Zjt1bmlmb3JtIHZMaWdodEZhbGxvZmZ7WH06IHZlYzRmO1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxudW5pZm9ybSB2TGlnaHRGYWxsb2Zme1h9OiB2ZWM0ZjtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxudW5pZm9ybSB2TGlnaHRHcm91bmR7WH06IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG51bmlmb3JtIHZMaWdodFdpZHRoe1h9OiB2ZWM0Zjt1bmlmb3JtIHZMaWdodEhlaWdodHtYfTogdmVjNGY7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0VnhGcmFnbWVudERlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1BSU5VVntYfVxudmFyeWluZyB2TWFpblVWe1h9OiB2ZWMyZjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2RlZmF1bHRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS91dkF0dHJpYnV0ZURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdXZWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS92ZXJ0ZXhDb2xvck1peGluZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aFZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJkZWZhdWx0VmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2luY2x1ZGU8ZGVmYXVsdFVib0RlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0JFR0lOXG5hdHRyaWJ1dGUgcG9zaXRpb246IHZlYzNmO1xuI2lmZGVmIE5PUk1BTFxuYXR0cmlidXRlIG5vcm1hbDogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBUQU5HRU5UXG5hdHRyaWJ1dGUgdGFuZ2VudDogdmVjNGY7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbmF0dHJpYnV0ZSB1djogdmVjMmY7XG4jZW5kaWZcbiNpbmNsdWRlPHV2QXR0cmlidXRlRGVjbGFyYXRpb24+WzIuLjddXG4jaWZkZWYgVkVSVEVYQ09MT1JcbmF0dHJpYnV0ZSBjb2xvcjogdmVjNGY7XG4jZW5kaWZcbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb24+WzEuLjddXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxESUZGVVNFLF9WQVJZSU5HTkFNRV8sRGlmZnVzZSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFVEFJTCxfVkFSWUlOR05BTUVfLERldGFpbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTElHSFRNQVAsX1ZBUllJTkdOQU1FXyxMaWdodG1hcClcbiNpZiBkZWZpbmVkKFNQRUNVTEFSVEVSTSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXIpXG4jZW5kaWZcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJVTVAsX1ZBUllJTkdOQU1FXyxCdW1wKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVDQUwsX1ZBUllJTkdOQU1FXyxEZWNhbClcbnZhcnlpbmcgdlBvc2l0aW9uVzogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZOb3JtYWxXOiB2ZWMzZjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxudmFyeWluZyB2Q29sb3I6IHZlYzRmO1xuI2VuZGlmXG4jaW5jbHVkZTxidW1wVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8X19kZWNsX19saWdodFZ4RnJhZ21lbnQ+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmFyeWluZyB2UG9zaXRpb25VVlc6IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2RGlyZWN0aW9uVzogdmVjM2Y7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxudmFyeWluZyB2Vmlld0RlcHRoOiBmMzI7XG4jZW5kaWZcbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQgOiBWZXJ0ZXhJbnB1dHMpLT5GcmFnbWVudElucHV0cyB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxudmFyIHBvc2l0aW9uVXBkYXRlZDogdmVjM2Y9dmVydGV4SW5wdXRzLnBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFVwZGF0ZWQ6IHZlYzNmPXZlcnRleElucHV0cy5ub3JtYWw7XG4jZW5kaWZcbiNpZmRlZiBUQU5HRU5UXG52YXIgdGFuZ2VudFVwZGF0ZWQ6IHZlYzRmPXZlcnRleElucHV0cy50YW5nZW50O1xuI2VuZGlmXG4jaWZkZWYgVVYxXG52YXIgdXZVcGRhdGVkOiB2ZWMyZj12ZXJ0ZXhJbnB1dHMudXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZhciB1djJVcGRhdGVkOiB2ZWMyZj12ZXJ0ZXhJbnB1dHMudXYyO1xuI2VuZGlmXG4jaWZkZWYgVkVSVEVYQ09MT1JcbnZhciBjb2xvclVwZGF0ZWQ6IHZlYzRmPXZlcnRleElucHV0cy5jb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uVVZXPXBvc2l0aW9uVXBkYXRlZDtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9QT1NJVElPTlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9OT1JNQUxcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbiNpZiBkZWZpbmVkKFBSRVBBU1MpICYmICgoZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSkgJiYgIWRlZmluZWQoQk9ORVNfVkVMT0NJVFlfRU5BQkxFRClcbnZlcnRleE91dHB1dHMudkN1cnJlbnRQb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvbipmaW5hbFdvcmxkKnZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO3ZlcnRleE91dHB1dHMudlByZXZpb3VzUG9zaXRpb249dW5pZm9ybXMucHJldmlvdXNWaWV3UHJvamVjdGlvbipmaW5hbFByZXZpb3VzV29ybGQqdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7XG4jZW5kaWZcbiNpbmNsdWRlPGJvbmVzVmVydGV4PlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb24+XG52YXIgd29ybGRQb3M6IHZlYzRmPWZpbmFsV29ybGQqdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7XG4jaWZkZWYgTk9STUFMXG52YXIgbm9ybWFsV29ybGQ6IG1hdDN4M2Y9IG1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopO1xuI2lmIGRlZmluZWQoSU5TVEFOQ0VTKSAmJiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKVxudmVydGV4T3V0cHV0cy52Tm9ybWFsVz1ub3JtYWxVcGRhdGVkLyB2ZWMzZihkb3Qobm9ybWFsV29ybGRbMF0sbm9ybWFsV29ybGRbMF0pLGRvdChub3JtYWxXb3JsZFsxXSxub3JtYWxXb3JsZFsxXSksZG90KG5vcm1hbFdvcmxkWzJdLG5vcm1hbFdvcmxkWzJdKSk7dmVydGV4T3V0cHV0cy52Tm9ybWFsVz1ub3JtYWxpemUobm9ybWFsV29ybGQqdmVydGV4T3V0cHV0cy52Tm9ybWFsVyk7XG4jZWxzZVxuI2lmZGVmIE5PTlVOSUZPUk1TQ0FMSU5HXG5ub3JtYWxXb3JsZD10cmFuc3Bvc2VNYXQzKGludmVyc2VNYXQzKG5vcm1hbFdvcmxkKSk7XG4jZW5kaWZcbnZlcnRleE91dHB1dHMudk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKm5vcm1hbFVwZGF0ZWQpO1xuI2VuZGlmXG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfV09STERQT1NcbiNpZmRlZiBNVUxUSVZJRVdcbmlmIChnbF9WaWV3SURfT1ZSPT0wdSkge3ZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qd29ybGRQb3M7fSBlbHNlIHt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uUip3b3JsZFBvczt9XG4jZWxzZVxudmVydGV4T3V0cHV0cy5wb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvbip3b3JsZFBvcztcbiNlbmRpZlxudmVydGV4T3V0cHV0cy52UG9zaXRpb25XPSB3b3JsZFBvcy54eXo7XG4jaWZkZWYgUFJFUEFTU1xuI2luY2x1ZGU8cHJlUGFzc1ZlcnRleD5cbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZlcnRleE91dHB1dHMudkRpcmVjdGlvblc9bm9ybWFsaXplKChmaW5hbFdvcmxkKiB2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMC4wKSkueHl6KTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xVU1RMSUdIVF9CQVRDSCkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG4jaWZkZWYgUklHSFRfSEFOREVEXG52ZXJ0ZXhPdXRwdXRzLnZWaWV3RGVwdGg9LShzY2VuZS52aWV3KndvcmxkUG9zKS56O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudlZpZXdEZXB0aD0oc2NlbmUudmlldyp3b3JsZFBvcykuejtcbiNlbmRpZlxuI2VuZGlmXG4jaWZuZGVmIFVWMVxudmFyIHV2VXBkYXRlZDogdmVjMmY9dmVjMmYoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMVxudmVydGV4T3V0cHV0cy52TWFpblVWMT11dlVwZGF0ZWQ7XG4jZW5kaWZcbiNpZm5kZWYgVVYyXG52YXIgdXYyVXBkYXRlZDogdmVjMmY9dmVjMmYoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMlxudmVydGV4T3V0cHV0cy52TWFpblVWMj11djJVcGRhdGVkO1xuI2VuZGlmXG4jaW5jbHVkZTx1dlZhcmlhYmxlRGVjbGFyYXRpb24+WzMuLjddXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxESUZGVVNFLF9WQVJZSU5HTkFNRV8sRGlmZnVzZSxfTUFUUklYTkFNRV8sZGlmZnVzZSxfSU5GT05BTUVfLERpZmZ1c2VJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9NQVRSSVhOQU1FXyxkZXRhaWwsX0lORk9OQU1FXyxEZXRhaWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVCxfVkFSWUlOR05BTUVfLEFtYmllbnQsX01BVFJJWE5BTUVfLGFtYmllbnQsX0lORk9OQU1FXyxBbWJpZW50SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLE9QQUNJVFksX1ZBUllJTkdOQU1FXyxPcGFjaXR5LF9NQVRSSVhOQU1FXyxvcGFjaXR5LF9JTkZPTkFNRV8sT3BhY2l0eUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlLF9NQVRSSVhOQU1FXyxlbWlzc2l2ZSxfSU5GT05BTUVfLEVtaXNzaXZlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXAsX01BVFJJWE5BTUVfLGxpZ2h0bWFwLF9JTkZPTkFNRV8sTGlnaHRtYXBJbmZvcy54KVxuI2lmIGRlZmluZWQoU1BFQ1VMQVJURVJNKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVIsX1ZBUllJTkdOQU1FXyxTcGVjdWxhcixfTUFUUklYTkFNRV8sc3BlY3VsYXIsX0lORk9OQU1FXyxTcGVjdWxhckluZm9zLngpXG4jZW5kaWZcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJVTVAsX1ZBUllJTkdOQU1FXyxCdW1wLF9NQVRSSVhOQU1FXyxidW1wLF9JTkZPTkFNRV8sQnVtcEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsLF9NQVRSSVhOQU1FXyxkZWNhbCxfSU5GT05BTUVfLERlY2FsSW5mb3MueClcbiNpbmNsdWRlPGJ1bXBWZXJ0ZXg+XG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXg+XG4jaW5jbHVkZTxmb2dWZXJ0ZXg+XG4jaW5jbHVkZTxzaGFkb3dzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTx2ZXJ0ZXhDb2xvck1peGluZz5cbiNpbmNsdWRlPGxvZ0RlcHRoVmVydGV4PlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fRU5EXG59XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0VmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9