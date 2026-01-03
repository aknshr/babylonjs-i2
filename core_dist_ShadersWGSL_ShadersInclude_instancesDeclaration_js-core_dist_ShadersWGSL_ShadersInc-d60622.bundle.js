"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_instancesDeclaration_js-core_dist_ShadersWGSL_ShadersInc-d60622"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instancesDeclarationWGSL: () => (/* binding */ instancesDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "instancesDeclaration";
const shader = `#ifdef INSTANCES
attribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;
#ifdef INSTANCESCOLOR
attribute instanceColor : vec4<f32>;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
attribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;
#ifdef THIN_INSTANCES
uniform previousWorld : mat4x4<f32>;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform world : mat4x4<f32>;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
uniform previousWorld : mat4x4<f32>;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const instancesDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxUboDeclarationWGSL: () => (/* binding */ lightVxUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightVxUboDeclaration";
const shader = `#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#elif defined(CLUSTLIGHT{X})
vSliceData: vec2f,
vSliceRanges: array<vec4f,CLUSTLIGHT_SLICES>,
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vLightWidth: vec4f,
vLightHeight: vec4f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;
#elif defined(SHADOWCUBE{X})
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const lightVxUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertex.js":
/*!****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/prePassVertex.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prePassVertexWGSL: () => (/* binding */ prePassVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "prePassVertex";
const shader = `#ifdef PREPASS_DEPTH
vertexOutputs.vViewPos=(scene.view*worldPos).rgb;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
vertexOutputs.vNormViewDepth=((scene.view*worldPos).z-uniforms.cameraInfo.x)/(uniforms.cameraInfo.y-uniforms.cameraInfo.x);
#endif
#ifdef PREPASS_LOCAL_POSITION
vertexOutputs.vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const prePassVertexWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prePassVertexDeclarationWGSL: () => (/* binding */ prePassVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "prePassVertexDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying vNormViewDepth: f32;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const prePassVertexDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerVertexDeclarationWGSL: () => (/* binding */ samplerVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "samplerVertexDeclaration";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying v_VARYINGNAME_UV: vec2f;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const samplerVertexDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js":
/*!******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerVertexImplementationWGSL: () => (/* binding */ samplerVertexImplementationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "samplerVertexImplementation";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (uniforms.v_INFONAME_==0.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}
#ifdef UV2
else if (uniforms.v_INFONAME_==1.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}
#endif
#ifdef UV3
else if (uniforms.v_INFONAME_==2.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv3,1.0,0.0)).xy;}
#endif
#ifdef UV4
else if (uniforms.v_INFONAME_==3.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv4,1.0,0.0)).xy;}
#endif
#ifdef UV5
else if (uniforms.v_INFONAME_==4.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv5,1.0,0.0)).xy;}
#endif
#ifdef UV6
else if (uniforms.v_INFONAME_==5.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv6,1.0,0.0)).xy;}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const samplerVertexImplementationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/shadowsVertex.js":
/*!****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/shadowsVertex.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsVertexWGSL: () => (/* binding */ shadowsVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowsVertex";
const shader = `#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vertexOutputs.vPositionFromCamera{X}=scene.view*worldPos;
#if SHADOWCSMNUM_CASCADES{X}>0
vertexOutputs.vPositionFromLight{X}_0=uniforms.lightMatrix{X}[0]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_0=(-vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_0= (vertexOutputs.vPositionFromLight{X}_0.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#if SHADOWCSMNUM_CASCADES{X}>1
vertexOutputs.vPositionFromLight{X}_1=uniforms.lightMatrix{X}[1]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_1=(-vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_1= (vertexOutputs.vPositionFromLight{X}_1.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>2
vertexOutputs.vPositionFromLight{X}_2=uniforms.lightMatrix{X}[2]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_2=(-vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_2= (vertexOutputs.vPositionFromLight{X}_2.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#if SHADOWCSMNUM_CASCADES{X}>3
vertexOutputs.vPositionFromLight{X}_3=uniforms.lightMatrix{X}[3]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}_3=(-vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}_3= (vertexOutputs.vPositionFromLight{X}_3.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif 
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vertexOutputs.vPositionFromLight{X}=uniforms.lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric{X}=(-vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vertexOutputs.vDepthMetric{X}=(vertexOutputs.vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const shadowsVertexWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js":
/*!*************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uvAttributeDeclarationWGSL: () => (/* binding */ uvAttributeDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "uvAttributeDeclaration";
const shader = `#ifdef UV{X}
attribute uv{X}: vec2f;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const uvAttributeDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uvVariableDeclarationWGSL: () => (/* binding */ uvVariableDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "uvVariableDeclaration";
const shader = `#ifdef MAINUV{X}
#if !defined(UV{X})
var uv{X}: vec2f=vec2f(0.,0.);
#else
var uv{X}: vec2f=vertexInputs.uv{X};
#endif
vertexOutputs.vMainUV{X}=uv{X};
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const uvVariableDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/vertexColorMixing.js":
/*!********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/vertexColorMixing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vertexColorMixingWGSL: () => (/* binding */ vertexColorMixingWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "vertexColorMixing";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vertexOutputs.vColor=vec4f(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vertexOutputs.vColor*=vertexInputs.color;
#else
vertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*vertexInputs.color.rgb,vertexOutputs.vColor.a);
#endif
#endif
#ifdef INSTANCESCOLOR
vertexOutputs.vColor*=vertexInputs.instanceColor;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const vertexColorMixingWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2luc3RhbmNlc0RlY2xhcmF0aW9uX2pzLWNvcmVfZGlzdF9TaGFkZXJzV0dTTF9TaGFkZXJzSW5jLWQ2MDYyMi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9saWdodFZ4VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS91dkF0dHJpYnV0ZURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvdXZWYXJpYWJsZURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvdmVydGV4Q29sb3JNaXhpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImluc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIElOU1RBTkNFU1xuYXR0cmlidXRlIHdvcmxkMCA6IHZlYzQ8ZjMyPjthdHRyaWJ1dGUgd29ybGQxIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSB3b3JsZDIgOiB2ZWM0PGYzMj47YXR0cmlidXRlIHdvcmxkMyA6IHZlYzQ8ZjMyPjtcbiNpZmRlZiBJTlNUQU5DRVNDT0xPUlxuYXR0cmlidXRlIGluc3RhbmNlQ29sb3IgOiB2ZWM0PGYzMj47XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKSAmJiAhZGVmaW5lZChXT1JMRF9VQk8pXG51bmlmb3JtIHdvcmxkIDogbWF0NHg0PGYzMj47XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpIHx8IGRlZmluZWQoVkVMT0NJVFlfTElORUFSKVxuYXR0cmlidXRlIHByZXZpb3VzV29ybGQwIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBwcmV2aW91c1dvcmxkMSA6IHZlYzQ8ZjMyPjthdHRyaWJ1dGUgcHJldmlvdXNXb3JsZDIgOiB2ZWM0PGYzMj47YXR0cmlidXRlIHByZXZpb3VzV29ybGQzIDogdmVjNDxmMzI+O1xuI2lmZGVmIFRISU5fSU5TVEFOQ0VTXG51bmlmb3JtIHByZXZpb3VzV29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxuI2lmICFkZWZpbmVkKFdPUkxEX1VCTylcbnVuaWZvcm0gd29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUikgfHwgZGVmaW5lZChWRUxPQ0lUWV9MSU5FQVIpXG51bmlmb3JtIHByZXZpb3VzV29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaW5zdGFuY2VzRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodFZ4VWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbnN0cnVjdCBMaWdodHtYfVxue3ZMaWdodERhdGE6IHZlYzRmLFxudkxpZ2h0RGlmZnVzZTogdmVjNGYsXG52TGlnaHRTcGVjdWxhcjogdmVjNGYsXG4jaWZkZWYgU1BPVExJR0hUe1h9XG52TGlnaHREaXJlY3Rpb246IHZlYzRmLFxudkxpZ2h0RmFsbG9mZjogdmVjNGYsXG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG52TGlnaHRGYWxsb2ZmOiB2ZWM0ZixcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxudkxpZ2h0R3JvdW5kOiB2ZWMzZixcbiNlbGlmIGRlZmluZWQoQ0xVU1RMSUdIVHtYfSlcbnZTbGljZURhdGE6IHZlYzJmLFxudlNsaWNlUmFuZ2VzOiBhcnJheTx2ZWM0ZixDTFVTVExJR0hUX1NMSUNFUz4sXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbnZMaWdodFdpZHRoOiB2ZWM0ZixcbnZMaWdodEhlaWdodDogdmVjNGYsXG4jZW5kaWZcbnNoYWRvd3NJbmZvOiB2ZWM0ZixcbmRlcHRoVmFsdWVzOiB2ZWMyZn0gO3Zhcjx1bmlmb3JtPiBsaWdodHtYfSA6IExpZ2h0e1h9O1xuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTXtYfVxudW5pZm9ybSBsaWdodE1hdHJpeHtYfTogYXJyYXk8bWF0NHg0ZixTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+O3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzA6IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9XzA6IGYzMjt2YXJ5aW5nIHZQb3NpdGlvbkZyb21MaWdodHtYfV8xOiB2ZWM0Zjt2YXJ5aW5nIHZEZXB0aE1ldHJpY3tYfV8xOiBmMzI7dmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH1fMjogdmVjNGY7dmFyeWluZyB2RGVwdGhNZXRyaWN7WH1fMjogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzM6IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9XzM6IGYzMjt2YXJ5aW5nIHZQb3NpdGlvbkZyb21DYW1lcmF7WH06IHZlYzRmO1xuI2VsaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuI2Vsc2VcbnZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9OiB2ZWM0Zjt2YXJ5aW5nIHZEZXB0aE1ldHJpY3tYfTogZjMyO3VuaWZvcm0gbGlnaHRNYXRyaXh7WH06IG1hdDR4NGY7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRWeFVib0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xuI2lmZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFXG4jaWYge1h9PT0wXG5mb3IgKHZhciBpPTA7IGk8TlVNX01PUlBIX0lORkxVRU5DRVJTOyBpPWkrMSkge2lmIChmMzIoaSk+PXVuaWZvcm1zLm1vcnBoVGFyZ2V0Q291bnQpIHticmVhazt9XG52ZXJ0ZXhJRD1mMzIodmVydGV4SW5wdXRzLnZlcnRleEluZGV4KSp1bmlmb3Jtcy5tb3JwaFRhcmdldFRleHR1cmVJbmZvLng7XG4jaWZkZWYgTU9SUEhUQVJHRVRTX1BPU0lUSU9OXG5wb3NpdGlvblVwZGF0ZWQ9cG9zaXRpb25VcGRhdGVkKyhyZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpLXZlcnRleElucHV0cy5wb3NpdGlvbikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU1BPU0lUSU9OU1xudmVydGV4SUQ9dmVydGV4SUQrMS4wO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX05PUk1BTFxubm9ybWFsVXBkYXRlZD1ub3JtYWxVcGRhdGVkKyhyZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpIC12ZXJ0ZXhJbnB1dHMubm9ybWFsKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV07XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFRFWFRVUkVfSEFTTk9STUFMU1xudmVydGV4SUQ9dmVydGV4SUQrMS4wO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWXG51dlVwZGF0ZWQ9dXZVcGRhdGVkKyhyZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpLnh5LXZlcnRleElucHV0cy51dikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU1VWU1xudmVydGV4SUQ9dmVydGV4SUQrMS4wO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RBTkdFTlRcbnRhbmdlbnRVcGRhdGVkPXZlYzRmKHRhbmdlbnRVcGRhdGVkLnh5eisocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKSAtdmVydGV4SW5wdXRzLnRhbmdlbnQueHl6KSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV0sdGFuZ2VudFVwZGF0ZWQuYSk7XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFRFWFRVUkVfSEFTVEFOR0VOVFNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVjJcbnV2MlVwZGF0ZWQ9dXYyVXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKS54eS12ZXJ0ZXhJbnB1dHMudXYyKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV07XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfQ09MT1JcbmNvbG9yVXBkYXRlZD1jb2xvclVwZGF0ZWQrKHJlYWRWZWN0b3I0RnJvbVJhd1NhbXBsZXIoaSx2ZXJ0ZXhJRCktdmVydGV4SW5wdXRzLmNvbG9yKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV07XG4jZW5kaWZcbn1cbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBNT1JQSFRBUkdFVFNfUE9TSVRJT05cbnBvc2l0aW9uVXBkYXRlZD1wb3NpdGlvblVwZGF0ZWQrKHZlcnRleElucHV0cy5wb3NpdGlvbntYfS12ZXJ0ZXhJbnB1dHMucG9zaXRpb24pKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX05PUk1BTFxubm9ybWFsVXBkYXRlZD1ub3JtYWxVcGRhdGVkKyh2ZXJ0ZXhJbnB1dHMubm9ybWFse1h9LXZlcnRleElucHV0cy5ub3JtYWwpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RBTkdFTlRcbnRhbmdlbnRVcGRhdGVkPXZlYzRmKHRhbmdlbnRVcGRhdGVkLnh5eisodmVydGV4SW5wdXRzLnRhbmdlbnR7WH0tdmVydGV4SW5wdXRzLnRhbmdlbnQueHl6KSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XSx0YW5nZW50VXBkYXRlZC5hKTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVlxudXZVcGRhdGVkPXV2VXBkYXRlZCsodmVydGV4SW5wdXRzLnV2X3tYfS12ZXJ0ZXhJbnB1dHMudXYpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWMlxudXYyVXBkYXRlZD11djJVcGRhdGVkKyh2ZXJ0ZXhJbnB1dHMudXYyX3tYfS12ZXJ0ZXhJbnB1dHMudXYyKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19DT0xPUlxuY29sb3JVcGRhdGVkPWNvbG9yVXBkYXRlZCsodmVydGV4SW5wdXRzLmNvbG9ye1h9LXZlcnRleElucHV0cy5jb2xvcikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3tYfV07XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTU9SUEhUQVJHRVRTXG4jaWZuZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1BPU0lUSU9OXG5hdHRyaWJ1dGUgcG9zaXRpb257WH0gOiB2ZWMzPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFse1h9IDogdmVjMzxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RBTkdFTlRcbmF0dHJpYnV0ZSB0YW5nZW50e1h9IDogdmVjMzxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWXG5hdHRyaWJ1dGUgdXZfe1h9IDogdmVjMjxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1VWMlxuYXR0cmlidXRlIHV2Ml97WH0gOiB2ZWMyPGYzMj47XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfQ09MT1JcbmF0dHJpYnV0ZSBjb2xvcntYfSA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuI2VsaWYge1h9PT0wXG51bmlmb3JtIG1vcnBoVGFyZ2V0Q291bnQ6IGYzMjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTU9SUEhUQVJHRVRTXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1RFWFRVUkVcbnZhciB2ZXJ0ZXhJRCA6IGYzMjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTU9SUEhUQVJHRVRTXG51bmlmb3JtIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcyA6IGFycmF5PGYzMixOVU1fTU9SUEhfSU5GTFVFTkNFUlM+O1xuI2lmZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFIFxudW5pZm9ybSBtb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzIDogYXJyYXk8ZjMyLE5VTV9NT1JQSF9JTkZMVUVOQ0VSUz47dW5pZm9ybSBtb3JwaFRhcmdldFRleHR1cmVJbmZvIDogdmVjMzxmMzI+O3ZhciBtb3JwaFRhcmdldHMgOiB0ZXh0dXJlXzJkX2FycmF5PGYzMj47dmFyIG1vcnBoVGFyZ2V0c1NhbXBsZXIgOiBzYW1wbGVyO2ZuIHJlYWRWZWN0b3IzRnJvbVJhd1NhbXBsZXIodGFyZ2V0SW5kZXggOiBpMzIsdmVydGV4SW5kZXggOiBmMzIpLT52ZWMzPGYzMj5cbnsgXG5sZXQgeT1mbG9vcih2ZXJ0ZXhJbmRleC91bmlmb3Jtcy5tb3JwaFRhcmdldFRleHR1cmVJbmZvLnkpO2xldCB4PXZlcnRleEluZGV4LXkqdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55O2xldCB0ZXh0dXJlVVY9dmVjMjxmMzI+KCh4KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55LCh5KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby56KTtyZXR1cm4gdGV4dHVyZVNhbXBsZUxldmVsKG1vcnBoVGFyZ2V0cyxtb3JwaFRhcmdldHNTYW1wbGVyLHRleHR1cmVVVixpMzIodW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlc1t0YXJnZXRJbmRleF0pLDAuMCkueHl6O31cbmZuIHJlYWRWZWN0b3I0RnJvbVJhd1NhbXBsZXIodGFyZ2V0SW5kZXggOiBpMzIsdmVydGV4SW5kZXggOiBmMzIpLT52ZWM0PGYzMj5cbnsgXG5sZXQgeT1mbG9vcih2ZXJ0ZXhJbmRleC91bmlmb3Jtcy5tb3JwaFRhcmdldFRleHR1cmVJbmZvLnkpO2xldCB4PXZlcnRleEluZGV4LXkqdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55O2xldCB0ZXh0dXJlVVY9dmVjMjxmMzI+KCh4KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55LCh5KzAuNSkvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby56KTtyZXR1cm4gdGV4dHVyZVNhbXBsZUxldmVsKG1vcnBoVGFyZ2V0cyxtb3JwaFRhcmdldHNTYW1wbGVyLHRleHR1cmVVVixpMzIodW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlc1t0YXJnZXRJbmRleF0pLDAuMCk7fVxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInByZVBhc3NWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgUFJFUEFTU19ERVBUSFxudmVydGV4T3V0cHV0cy52Vmlld1Bvcz0oc2NlbmUudmlldyp3b3JsZFBvcykucmdiO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhcbnZlcnRleE91dHB1dHMudk5vcm1WaWV3RGVwdGg9KChzY2VuZS52aWV3KndvcmxkUG9zKS56LXVuaWZvcm1zLmNhbWVyYUluZm8ueCkvKHVuaWZvcm1zLmNhbWVyYUluZm8ueS11bmlmb3Jtcy5jYW1lcmFJbmZvLngpO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19MT0NBTF9QT1NJVElPTlxudmVydGV4T3V0cHV0cy52UG9zaXRpb249cG9zaXRpb25VcGRhdGVkLnh5ejtcbiNlbmRpZlxuI2lmIChkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpKSAmJiBkZWZpbmVkKEJPTkVTX1ZFTE9DSVRZX0VOQUJMRUQpXG52ZXJ0ZXhPdXRwdXRzLnZDdXJyZW50UG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qd29ybGRQb3M7XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MFxudmFyIHByZXZpb3VzSW5mbHVlbmNlOiBtYXQ0eDRmO3ByZXZpb3VzSW5mbHVlbmNlPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1swXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMF07XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MVxucHJldmlvdXNJbmZsdWVuY2UrPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1sxXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxucHJldmlvdXNJbmZsdWVuY2UrPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1syXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMl07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+M1xucHJldmlvdXNJbmZsdWVuY2UrPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1szXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbM107XG4jZW5kaWZcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz40XG5wcmV2aW91c0luZmx1ZW5jZSs9dW5pZm9ybXMubVByZXZpb3VzQm9uZXNbIGkzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMF0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMF07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NVxucHJldmlvdXNJbmZsdWVuY2UrPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzFdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjZcbnByZXZpb3VzSW5mbHVlbmNlKz11bmlmb3Jtcy5tUHJldmlvdXNCb25lc1sgaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsyXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz43XG5wcmV2aW91c0luZmx1ZW5jZSs9dW5pZm9ybXMubVByZXZpb3VzQm9uZXNbIGkzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbM10pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbM107XG4jZW5kaWZcbnZlcnRleE91dHB1dHMudlByZXZpb3VzUG9zaXRpb249dW5pZm9ybXMucHJldmlvdXNWaWV3UHJvamVjdGlvbipmaW5hbFByZXZpb3VzV29ybGQqcHJldmlvdXNJbmZsdWVuY2UqIHZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudlByZXZpb3VzUG9zaXRpb249dW5pZm9ybXMucHJldmlvdXNWaWV3UHJvamVjdGlvbipmaW5hbFByZXZpb3VzV29ybGQqIHZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwcmVQYXNzVmVydGV4V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicHJlUGFzc1ZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFBSRVBBU1NcbiNpZmRlZiBQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OXG52YXJ5aW5nIHZQb3NpdGlvbiA6IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19ERVBUSFxudmFyeWluZyB2Vmlld1BvczogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX05PUk1BTElaRURfVklFV19ERVBUSFxudmFyeWluZyB2Tm9ybVZpZXdEZXB0aDogZjMyO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKVxudW5pZm9ybSBwcmV2aW91c1ZpZXdQcm9qZWN0aW9uOiBtYXQ0eDRmO3ZhcnlpbmcgdkN1cnJlbnRQb3NpdGlvbjogdmVjNGY7dmFyeWluZyB2UHJldmlvdXNQb3NpdGlvbjogdmVjNGY7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKF9ERUZJTkVOQU1FXykgJiYgX0RFRklORU5BTUVfRElSRUNUVVY9PTBcbnZhcnlpbmcgdl9WQVJZSU5HTkFNRV9VVjogdmVjMmY7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzYW1wbGVyVmVydGV4RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChfREVGSU5FTkFNRV8pICYmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0wXG5pZiAodW5pZm9ybXMudl9JTkZPTkFNRV89PTAuKVxue3ZlcnRleE91dHB1dHMudl9WQVJZSU5HTkFNRV9VVj0gKHVuaWZvcm1zLl9NQVRSSVhOQU1FX01hdHJpeCogdmVjNGYodXZVcGRhdGVkLDEuMCwwLjApKS54eTt9XG4jaWZkZWYgVVYyXG5lbHNlIGlmICh1bmlmb3Jtcy52X0lORk9OQU1FXz09MS4pXG57dmVydGV4T3V0cHV0cy52X1ZBUllJTkdOQU1FX1VWPSAodW5pZm9ybXMuX01BVFJJWE5BTUVfTWF0cml4KiB2ZWM0Zih1djJVcGRhdGVkLDEuMCwwLjApKS54eTt9XG4jZW5kaWZcbiNpZmRlZiBVVjNcbmVsc2UgaWYgKHVuaWZvcm1zLnZfSU5GT05BTUVfPT0yLilcbnt2ZXJ0ZXhPdXRwdXRzLnZfVkFSWUlOR05BTUVfVVY9ICh1bmlmb3Jtcy5fTUFUUklYTkFNRV9NYXRyaXgqIHZlYzRmKHZlcnRleElucHV0cy51djMsMS4wLDAuMCkpLnh5O31cbiNlbmRpZlxuI2lmZGVmIFVWNFxuZWxzZSBpZiAodW5pZm9ybXMudl9JTkZPTkFNRV89PTMuKVxue3ZlcnRleE91dHB1dHMudl9WQVJZSU5HTkFNRV9VVj0gKHVuaWZvcm1zLl9NQVRSSVhOQU1FX01hdHJpeCogdmVjNGYodmVydGV4SW5wdXRzLnV2NCwxLjAsMC4wKSkueHk7fVxuI2VuZGlmXG4jaWZkZWYgVVY1XG5lbHNlIGlmICh1bmlmb3Jtcy52X0lORk9OQU1FXz09NC4pXG57dmVydGV4T3V0cHV0cy52X1ZBUllJTkdOQU1FX1VWPSAodW5pZm9ybXMuX01BVFJJWE5BTUVfTWF0cml4KiB2ZWM0Zih2ZXJ0ZXhJbnB1dHMudXY1LDEuMCwwLjApKS54eTt9XG4jZW5kaWZcbiNpZmRlZiBVVjZcbmVsc2UgaWYgKHVuaWZvcm1zLnZfSU5GT05BTUVfPT01Lilcbnt2ZXJ0ZXhPdXRwdXRzLnZfVkFSWUlOR05BTUVfVVY9ICh1bmlmb3Jtcy5fTUFUUklYTkFNRV9NYXRyaXgqIHZlYzRmKHZlcnRleElucHV0cy51djYsMS4wLDAuMCkpLnh5O31cbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93c1ZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBTSEFET1dTXG4jaWYgZGVmaW5lZChTSEFET1dDU017WH0pXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21DYW1lcmF7WH09c2NlbmUudmlldyp3b3JsZFBvcztcbiNpZiBTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+MFxudmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMD11bmlmb3Jtcy5saWdodE1hdHJpeHtYfVswXSp3b3JsZFBvcztcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMD0oLXZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzAueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzA9ICh2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8wLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9PjFcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzE9dW5pZm9ybXMubGlnaHRNYXRyaXh7WH1bMV0qd29ybGRQb3M7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzE9KC12ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8xLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8xPSAodmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMS56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZW5kaWZcbiNlbmRpZiBcbiNpZiBTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+MlxudmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMj11bmlmb3Jtcy5saWdodE1hdHJpeHtYfVsyXSp3b3JsZFBvcztcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMj0oLXZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzIueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzI9ICh2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8yLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxuI2VuZGlmIFxuI2lmIFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfT4zXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8zPXVuaWZvcm1zLmxpZ2h0TWF0cml4e1h9WzNdKndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8zPSgtdmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMy56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMz0gKHZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzMueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2VuZGlmXG4jZW5kaWYgXG4jZWxpZiBkZWZpbmVkKFNIQURPV3tYfSkgJiYgIWRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9PXVuaWZvcm1zLmxpZ2h0TWF0cml4e1h9KndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfT0oLXZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfT0odmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH0ueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd3NWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJ1dkF0dHJpYnV0ZURlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFVWe1h9XG5hdHRyaWJ1dGUgdXZ7WH06IHZlYzJmO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgdXZBdHRyaWJ1dGVEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInV2VmFyaWFibGVEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBNQUlOVVZ7WH1cbiNpZiAhZGVmaW5lZChVVntYfSlcbnZhciB1dntYfTogdmVjMmY9dmVjMmYoMC4sMC4pO1xuI2Vsc2VcbnZhciB1dntYfTogdmVjMmY9dmVydGV4SW5wdXRzLnV2e1h9O1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnZNYWluVVZ7WH09dXZ7WH07XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCB1dlZhcmlhYmxlRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJ2ZXJ0ZXhDb2xvck1peGluZ1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbnZlcnRleE91dHB1dHMudkNvbG9yPXZlYzRmKDEuMCk7XG4jaWZkZWYgVkVSVEVYQ09MT1JcbiNpZmRlZiBWRVJURVhBTFBIQVxudmVydGV4T3V0cHV0cy52Q29sb3IqPXZlcnRleElucHV0cy5jb2xvcjtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZDb2xvcj12ZWM0Zih2ZXJ0ZXhPdXRwdXRzLnZDb2xvci5yZ2IqdmVydGV4SW5wdXRzLmNvbG9yLnJnYix2ZXJ0ZXhPdXRwdXRzLnZDb2xvci5hKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgSU5TVEFOQ0VTQ09MT1JcbnZlcnRleE91dHB1dHMudkNvbG9yKj12ZXJ0ZXhJbnB1dHMuaW5zdGFuY2VDb2xvcjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgdmVydGV4Q29sb3JNaXhpbmdXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=