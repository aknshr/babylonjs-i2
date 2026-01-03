"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_shadowMap_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexWGSL: () => (/* binding */ morphTargetsVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "morphTargetsVertex";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}
vertexID=f32(vertexInputs.vertexIndex)*uniforms.morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,vertexID)-vertexInputs.position)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASPOSITIONS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(readVector3FromRawSampler(i,vertexID) -vertexInputs.normal)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASNORMALS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUVS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(readVector3FromRawSampler(i,vertexID) -vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[i],tangentUpdated.a);
#endif
#ifdef MORPHTARGETTEXTURE_HASTANGENTS
vertexID=vertexID+1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv2)*uniforms.morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated=colorUpdated+(readVector4FromRawSampler(i,vertexID)-vertexInputs.color)*uniforms.morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated=positionUpdated+(vertexInputs.position{X}-vertexInputs.position)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated=normalUpdated+(vertexInputs.normal{X}-vertexInputs.normal)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated=vec4f(tangentUpdated.xyz+(vertexInputs.tangent{X}-vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[{X}],tangentUpdated.a);
#endif
#ifdef MORPHTARGETS_UV
uvUpdated=uvUpdated+(vertexInputs.uv_{X}-vertexInputs.uv)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated=uv2Updated+(vertexInputs.uv2_{X}-vertexInputs.uv2)*uniforms.morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated=colorUpdated+(vertexInputs.color{X}-vertexInputs.color)*uniforms.morphTargetInfluences[{X}];
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const morphTargetsVertexWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js":
/*!********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexDeclarationWGSL: () => (/* binding */ morphTargetsVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "morphTargetsVertexDeclaration";
const shader = `#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute position{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_NORMAL
attribute normal{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_TANGENT
attribute tangent{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_UV
attribute uv_{X} : vec2<f32>;
#endif
#ifdef MORPHTARGETS_UV2
attribute uv2_{X} : vec2<f32>;
#endif
#ifdef MORPHTARGETS_COLOR
attribute color{X} : vec4<f32>;
#endif
#elif {X}==0
uniform morphTargetCount: f32;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const morphTargetsVertexDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexGlobalWGSL: () => (/* binding */ morphTargetsVertexGlobalWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "morphTargetsVertexGlobal";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
var vertexID : f32;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const morphTargetsVertexGlobalWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js":
/*!**************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   morphTargetsVertexGlobalDeclarationWGSL: () => (/* binding */ morphTargetsVertexGlobalDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "morphTargetsVertexGlobalDeclaration";
const shader = `#ifdef MORPHTARGETS
uniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;
#ifdef MORPHTARGETS_TEXTURE 
uniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f32>;var morphTargetsSampler : sampler;fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec3<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0).xyz;}
fn readVector4FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec4<f32>
{ 
let y=floor(vertexIndex/uniforms.morphTargetTextureInfo.y);let x=vertexIndex-y*uniforms.morphTargetTextureInfo.y;let textureUV=vec2<f32>((x+0.5)/uniforms.morphTargetTextureInfo.y,(y+0.5)/uniforms.morphTargetTextureInfo.z);return textureSampleLevel(morphTargets,morphTargetsSampler,textureUV,i32(uniforms.morphTargetTextureIndices[targetIndex]),0.0);}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const morphTargetsVertexGlobalDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexExtraDeclaration.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexExtraDeclaration.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexExtraDeclarationWGSL: () => (/* binding */ shadowMapVertexExtraDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapVertexExtraDeclaration";
const shader = `#if SM_NORMALBIAS==1
uniform lightDataSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
varying vPositionWSM: vec3f;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapVertexExtraDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexMetricWGSL: () => (/* binding */ shadowMapVertexMetricWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapVertexMetric";
const shader = `#if SM_USEDISTANCE==1
vertexOutputs.vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.position.z-=uniforms.biasAndScaleSM.x*vertexOutputs.position.w*BIASFACTOR;
#else
vertexOutputs.position.z+=uniforms.biasAndScaleSM.x*vertexOutputs.position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
vertexOutputs.zSM=vertexOutputs.position.z;vertexOutputs.position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetricSM=(-vertexOutputs.position.z+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
vertexOutputs.vDepthMetricSM=(vertexOutputs.position.z+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapVertexMetricWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexNormalBias.js":
/*!****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexNormalBias.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexNormalBiasWGSL: () => (/* binding */ shadowMapVertexNormalBiasWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapVertexNormalBias";
const shader = `#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
var worldLightDirSM: vec3f=normalize(-uniforms.lightDataSM.xyz);
#else
var directionToLightSM: vec3f=uniforms.lightDataSM.xyz-worldPos.xyz;var worldLightDirSM: vec3f=normalize(directionToLightSM);
#endif
var ndlSM: f32=dot(vNormalW,worldLightDirSM);var sinNLSM: f32=sqrt(1.0-ndlSM*ndlSM);var normalBiasSM: f32=uniforms.biasAndScaleSM.y*sinNLSM;worldPos=vec4f(worldPos.xyz-vNormalW*normalBiasSM,worldPos.w);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapVertexNormalBiasWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/shadowMap.vertex.js":
/*!****************************************************!*\
  !*** ../core/dist/ShadersWGSL/shadowMap.vertex.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexShaderWGSL: () => (/* binding */ shadowMapVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _ShadersInclude_meshUboDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexExtraDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexExtraDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexNormalBias__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexNormalBias */ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexNormalBias.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexMetric__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexMetric */ "../core/dist/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


















const name = "shadowMapVertexShader";
const shader = `attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;
#endif
#include<helperFunctions>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#ifdef NORMAL
var normalUpdated: vec3f=input.normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
var vNormalW: vec3f=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
var vNormalW: vec3f=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
vertexOutputs.position=scene.viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowMapVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3NoYWRvd01hcF92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWwudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhNZXRyaWMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhOb3JtYWxCaWFzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvc2hhZG93TWFwLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xuI2lmZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFXG4jaWYge1h9PT0wXG5mb3IgKHZhciBpPTA7IGk8TlVNX01PUlBIX0lORkxVRU5DRVJTOyBpPWkrMSkge2lmIChmMzIoaSk+PXVuaWZvcm1zLm1vcnBoVGFyZ2V0Q291bnQpIHticmVhazt9XG52ZXJ0ZXhJRD1mMzIodmVydGV4SW5wdXRzLnZlcnRleEluZGV4KSp1bmlmb3Jtcy5tb3JwaFRhcmdldFRleHR1cmVJbmZvLng7XG4jaWZkZWYgTU9SUEhUQVJHRVRTX1BPU0lUSU9OXG5wb3NpdGlvblVwZGF0ZWQ9cG9zaXRpb25VcGRhdGVkKyhyZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpLXZlcnRleElucHV0cy5wb3NpdGlvbikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU1BPU0lUSU9OU1xudmVydGV4SUQ9dmVydGV4SUQrMS4wO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX05PUk1BTFxubm9ybWFsVXBkYXRlZD1ub3JtYWxVcGRhdGVkKyhyZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpIC12ZXJ0ZXhJbnB1dHMubm9ybWFsKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV07XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFRFWFRVUkVfSEFTTk9STUFMU1xudmVydGV4SUQ9dmVydGV4SUQrMS4wO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWXG51dlVwZGF0ZWQ9dXZVcGRhdGVkKyhyZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpLnh5LXZlcnRleElucHV0cy51dikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU1VWU1xudmVydGV4SUQ9dmVydGV4SUQrMS4wO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RBTkdFTlRcbnRhbmdlbnRVcGRhdGVkPXZlYzRmKHRhbmdlbnRVcGRhdGVkLnh5eisocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKSAtdmVydGV4SW5wdXRzLnRhbmdlbnQueHl6KSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV0sdGFuZ2VudFVwZGF0ZWQuYSk7XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFRFWFRVUkVfSEFTVEFOR0VOVFNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVjJcbnV2MlVwZGF0ZWQ9dXYyVXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKS54eS12ZXJ0ZXhJbnB1dHMudXYyKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV07XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfQ09MT1JcbmNvbG9yVXBkYXRlZD1jb2xvclVwZGF0ZWQrKHJlYWRWZWN0b3I0RnJvbVJhd1NhbXBsZXIoaSx2ZXJ0ZXhJRCktdmVydGV4SW5wdXRzLmNvbG9yKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV07XG4jZW5kaWZcbn1cbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBNT1JQSFRBUkdFVFNfUE9TSVRJT05cbnBvc2l0aW9uVXBkYXRlZD1wb3NpdGlvblVwZGF0ZWQrKHZlcnRleElucHV0cy5wb3NpdGlvbntYfS12ZXJ0ZXhJbnB1dHMucG9zaXRpb24pKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX05PUk1BTFxubm9ybWFsVXBkYXRlZD1ub3JtYWxVcGRhdGVkKyh2ZXJ0ZXhJbnB1dHMubm9ybWFse1h9LXZlcnRleElucHV0cy5ub3JtYWwpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RBTkdFTlRcbnRhbmdlbnRVcGRhdGVkPXZlYzRmKHRhbmdlbnRVcGRhdGVkLnh5eisodmVydGV4SW5wdXRzLnRhbmdlbnR7WH0tdmVydGV4SW5wdXRzLnRhbmdlbnQueHl6KSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XSx0YW5nZW50VXBkYXRlZC5hKTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVlxudXZVcGRhdGVkPXV2VXBkYXRlZCsodmVydGV4SW5wdXRzLnV2X3tYfS12ZXJ0ZXhJbnB1dHMudXYpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWMlxudXYyVXBkYXRlZD11djJVcGRhdGVkKyh2ZXJ0ZXhJbnB1dHMudXYyX3tYfS12ZXJ0ZXhJbnB1dHMudXYyKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19DT0xPUlxuY29sb3JVcGRhdGVkPWNvbG9yVXBkYXRlZCsodmVydGV4SW5wdXRzLmNvbG9ye1h9LXZlcnRleElucHV0cy5jb2xvcikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3tYfV07XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTU9SUEhUQVJHRVRTXG4jaWZuZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1BPU0lUSU9OXG5hdHRyaWJ1dGUgcG9zaXRpb257WH0gOiB2ZWMzPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFse1h9IDogdmVjMzxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RBTkdFTlRcbmF0dHJpYnV0ZSB0YW5nZW50e1h9IDogdmVjMzxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWXG5hdHRyaWJ1dGUgdXZfe1h9IDogdmVjMjxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWMlxuYXR0cmlidXRlIHV2Ml97WH0gOiB2ZWMyPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfQ09MT1JcbmF0dHJpYnV0ZSBjb2xvcntYfSA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuI2VsaWYge1h9PT0wXG51bmlmb3JtIG1vcnBoVGFyZ2V0Q291bnQ6IGYzMjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTU9SUEhUQVJHRVRTXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RFWFRVUkVcbnZhciB2ZXJ0ZXhJRCA6IGYzMjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTU9SUEhUQVJHRVRTXG51bmlmb3JtIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcyA6IGFycmF5PGYzMixOVU1fTU9SUEhfSU5GTFVFTkNFUlM+O1xuI2lmZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFIFxudW5pZm9ybSBtb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzIDogYXJyYXk8ZjMyLE5VTV9NT1JQSF9JTkZMVUVOQ0VSUz47dW5pZm9ybSBtb3JwaFRhcmdldFRleHR1cmVJbmZvIDogdmVjMzxmMzI+O3ZhciBtb3JwaFRhcmdldHMgOiB0ZXh0dXJlXzJkX2FycmF5PGYzMj47dmFyIG1vcnBoVGFyZ2V0c1NhbXBsZXIgOiBzYW1wbGVyO2ZuIHJlYWRWZWN0b3IzRnJvbVJhd1NhbXBsZXIodGFyZ2V0SW5kZXggOiBpMzIsdmVydGV4SW5kZXggOiBmMzIpLT52ZWMzPGYzMj5cbnsgXG5sZXQgeT1mbG9vcih2ZXJ0ZXhJbmRleC91bmlmb3Jtcy5tb3JwaFRhcmdldFRleHR1cmVJbmZvLnkpO2xldCB4PXZlcnRleEluZGV4LXkqdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55O2xldCB0ZXh0dXJlVVY9dmVjMjxmMzI+KCh4KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55LCh5KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby56KTtyZXR1cm4gdGV4dHVyZVNhbXBsZUxldmVsKG1vcnBoVGFyZ2V0cyxtb3JwaFRhcmdldHNTYW1wbGVyLHRleHR1cmVVVixpMzIodW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlc1t0YXJnZXRJbmRleF0pLDAuMCkueHl6O31cbmZuIHJlYWRWZWN0b3I0RnJvbVJhd1NhbXBsZXIodGFyZ2V0SW5kZXggOiBpMzIsdmVydGV4SW5kZXggOiBmMzIpLT52ZWM0PGYzMj5cbnsgXG5sZXQgeT1mbG9vcih2ZXJ0ZXhJbmRleC91bmlmb3Jtcy5tb3JwaFRhcmdldFRleHR1cmVJbmZvLnkpO2xldCB4PXZlcnRleEluZGV4LXkqdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55O2xldCB0ZXh0dXJlVVY9dmVjMjxmMzI+KCh4KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55LCh5KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby56KTtyZXR1cm4gdGV4dHVyZVNhbXBsZUxldmVsKG1vcnBoVGFyZ2V0cyxtb3JwaFRhcmdldHNTYW1wbGVyLHRleHR1cmVVVixpMzIodW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlc1t0YXJnZXRJbmRleF0pLDAuMCk7fVxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgU01fTk9STUFMQklBUz09MVxudW5pZm9ybSBsaWdodERhdGFTTTogdmVjM2Y7XG4jZW5kaWZcbnVuaWZvcm0gYmlhc0FuZFNjYWxlU006IHZlYzNmO3VuaWZvcm0gZGVwdGhWYWx1ZXNTTTogdmVjMmY7dmFyeWluZyB2RGVwdGhNZXRyaWNTTTogZjMyO1xuI2lmIFNNX1VTRURJU1RBTkNFPT0xXG52YXJ5aW5nIHZQb3NpdGlvbldTTTogdmVjM2Y7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNNX0RFUFRIQ0xBTVApICYmIFNNX0RFUFRIQ0xBTVA9PTFcbnZhcnlpbmcgelNNOiBmMzI7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBWZXJ0ZXhFeHRyYURlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwVmVydGV4TWV0cmljXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIFNNX1VTRURJU1RBTkNFPT0xXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbldTTT13b3JsZFBvcy54eXo7XG4jZW5kaWZcbiNpZiBTTV9ERVBUSFRFWFRVUkU9PTFcbiNpZmRlZiBJU19ORENfSEFMRl9aUkFOR0VcbiNkZWZpbmUgQklBU0ZBQ1RPUiAwLjVcbiNlbHNlXG4jZGVmaW5lIEJJQVNGQUNUT1IgMS4wXG4jZW5kaWZcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy5wb3NpdGlvbi56LT11bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54KnZlcnRleE91dHB1dHMucG9zaXRpb24udypCSUFTRkFDVE9SO1xuI2Vsc2VcbnZlcnRleE91dHB1dHMucG9zaXRpb24ueis9dW5pZm9ybXMuYmlhc0FuZFNjYWxlU00ueCp2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLncqQklBU0ZBQ1RPUjtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTTV9ERVBUSENMQU1QKSAmJiBTTV9ERVBUSENMQU1QPT0xXG52ZXJ0ZXhPdXRwdXRzLnpTTT12ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLno7dmVydGV4T3V0cHV0cy5wb3NpdGlvbi56PTAuMDtcbiNlbGlmIFNNX1VTRURJU1RBTkNFPT0wXG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmljU009KC12ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLnordW5pZm9ybXMuZGVwdGhWYWx1ZXNTTS54KS91bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLnkrdW5pZm9ybXMuYmlhc0FuZFNjYWxlU00ueDtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY1NNPSh2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLnordW5pZm9ybXMuZGVwdGhWYWx1ZXNTTS54KS91bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLnkrdW5pZm9ybXMuYmlhc0FuZFNjYWxlU00ueDtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2hhZG93TWFwVmVydGV4TWV0cmljV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwVmVydGV4Tm9ybWFsQmlhc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBTTV9OT1JNQUxCSUFTPT0xXG4jaWYgU01fRElSRUNUSU9OSU5MSUdIVERBVEE9PTFcbnZhciB3b3JsZExpZ2h0RGlyU006IHZlYzNmPW5vcm1hbGl6ZSgtdW5pZm9ybXMubGlnaHREYXRhU00ueHl6KTtcbiNlbHNlXG52YXIgZGlyZWN0aW9uVG9MaWdodFNNOiB2ZWMzZj11bmlmb3Jtcy5saWdodERhdGFTTS54eXotd29ybGRQb3MueHl6O3ZhciB3b3JsZExpZ2h0RGlyU006IHZlYzNmPW5vcm1hbGl6ZShkaXJlY3Rpb25Ub0xpZ2h0U00pO1xuI2VuZGlmXG52YXIgbmRsU006IGYzMj1kb3Qodk5vcm1hbFcsd29ybGRMaWdodERpclNNKTt2YXIgc2luTkxTTTogZjMyPXNxcnQoMS4wLW5kbFNNKm5kbFNNKTt2YXIgbm9ybWFsQmlhc1NNOiBmMzI9dW5pZm9ybXMuYmlhc0FuZFNjYWxlU00ueSpzaW5OTFNNO3dvcmxkUG9zPXZlYzRmKHdvcmxkUG9zLnh5ei12Tm9ybWFsVypub3JtYWxCaWFzU00sd29ybGRQb3Mudyk7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBWZXJ0ZXhOb3JtYWxCaWFzV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhFeHRyYURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleE5vcm1hbEJpYXNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwVmVydGV4TWV0cmljXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBhdHRyaWJ1dGUgcG9zaXRpb246IHZlYzNmO1xuI2lmZGVmIE5PUk1BTFxuYXR0cmlidXRlIG5vcm1hbDogdmVjM2Y7XG4jZW5kaWZcbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvbj5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2lmZGVmIElOU1RBTkNFU1xuYXR0cmlidXRlIHdvcmxkMDogdmVjNGY7YXR0cmlidXRlIHdvcmxkMTogdmVjNGY7YXR0cmlidXRlIHdvcmxkMjogdmVjNGY7YXR0cmlidXRlIHdvcmxkMzogdmVjNGY7XG4jZW5kaWZcbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG4jaWZkZWYgQUxQSEFURVhUVVJFXG52YXJ5aW5nIHZVVjogdmVjMmY7dW5pZm9ybSBkaWZmdXNlTWF0cml4OiBtYXQ0eDRmO1xuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHV2OiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIFVWMlxuYXR0cmlidXRlIHV2MjogdmVjMmY7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8c2hhZG93TWFwVmVydGV4RXh0cmFEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG5AdmVydGV4XG5mbiBtYWluKGlucHV0IDogVmVydGV4SW5wdXRzKS0+RnJhZ21lbnRJbnB1dHMge3ZhciBwb3NpdGlvblVwZGF0ZWQ6IHZlYzNmPWlucHV0LnBvc2l0aW9uO1xuI2lmZGVmIFVWMVxudmFyIHV2VXBkYXRlZDogdmVjMmY9aW5wdXQudXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZhciB1djJVcGRhdGVkOiB2ZWMyZj1pbnB1dC51djI7XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZhciBub3JtYWxVcGRhdGVkOiB2ZWMzZj1pbnB1dC5ub3JtYWw7XG4jZW5kaWZcbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbD5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbnZhciB3b3JsZFBvczogdmVjNGY9ZmluYWxXb3JsZCogdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7XG4jaWZkZWYgTk9STUFMXG52YXIgbm9ybVdvcmxkU006IG1hdDN4M2Y9IG1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopO1xuI2lmIGRlZmluZWQoSU5TVEFOQ0VTKSAmJiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKVxudmFyIHZOb3JtYWxXOiB2ZWMzZj1ub3JtYWxVcGRhdGVkLyB2ZWMzZihkb3Qobm9ybVdvcmxkU01bMF0sbm9ybVdvcmxkU01bMF0pLGRvdChub3JtV29ybGRTTVsxXSxub3JtV29ybGRTTVsxXSksZG90KG5vcm1Xb3JsZFNNWzJdLG5vcm1Xb3JsZFNNWzJdKSk7dk5vcm1hbFc9bm9ybWFsaXplKG5vcm1Xb3JsZFNNKnZOb3JtYWxXKTtcbiNlbHNlXG4jaWZkZWYgTk9OVU5JRk9STVNDQUxJTkdcbm5vcm1Xb3JsZFNNPXRyYW5zcG9zZU1hdDMoaW52ZXJzZU1hdDMobm9ybVdvcmxkU00pKTtcbiNlbmRpZlxudmFyIHZOb3JtYWxXOiB2ZWMzZj1ub3JtYWxpemUobm9ybVdvcmxkU00qbm9ybWFsVXBkYXRlZCk7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8c2hhZG93TWFwVmVydGV4Tm9ybWFsQmlhcz5cbnZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qd29ybGRQb3M7XG4jaW5jbHVkZTxzaGFkb3dNYXBWZXJ0ZXhNZXRyaWM+XG4jaWZkZWYgQUxQSEFURVhUVVJFXG4jaWZkZWYgVVYxXG52ZXJ0ZXhPdXRwdXRzLnZVVj0gKHVuaWZvcm1zLmRpZmZ1c2VNYXRyaXgqIHZlYzRmKHV2VXBkYXRlZCwxLjAsMC4wKSkueHk7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZlcnRleE91dHB1dHMudlVWPSAodW5pZm9ybXMuZGlmZnVzZU1hdHJpeCogdmVjNGYodXYyVXBkYXRlZCwxLjAsMC4wKSkueHk7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcFZlcnRleFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==