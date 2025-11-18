"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_background_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundUboDeclarationWGSL: () => (/* binding */ backgroundUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "backgroundUboDeclaration";
const shader = `uniform vPrimaryColor: vec4f;uniform vPrimaryColorShadow: vec4f;uniform vDiffuseInfos : vec2f;uniform diffuseMatrix : mat4x4f;uniform fFovMultiplier: f32;uniform pointSize: f32;uniform shadowLevel: f32;uniform alpha: f32;uniform vBackgroundCenter: vec3f;uniform vReflectionControl: vec4f;uniform projectedGroundInfos: vec2f;uniform vReflectionInfos : vec2f;uniform reflectionMatrix : mat4x4f;uniform vReflectionMicrosurfaceInfos : vec3f;
#include<sceneUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const backgroundUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js":
/*!*******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bonesDeclarationWGSL: () => (/* binding */ bonesDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bonesDeclaration";
const shader = `#if NUM_BONE_INFLUENCERS>0
attribute matricesIndices : vec4<f32>;attribute matricesWeights : vec4<f32>;
#if NUM_BONE_INFLUENCERS>4
attribute matricesIndicesExtra : vec4<f32>;attribute matricesWeightsExtra : vec4<f32>;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
var boneSampler : texture_2d<f32>;uniform boneTextureWidth : f32;
#else
uniform mBones : array<mat4x4f,BonesPerMesh>;
#endif
#ifdef BONES_VELOCITY_ENABLED
uniform mPreviousBones : array<mat4x4f,BonesPerMesh>;
#endif
#ifdef BONETEXTURE
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4f
{let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);return mat4x4f(m0,m1,m2,m3);}
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bonesDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js":
/*!**************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bonesVertexWGSL: () => (/* binding */ bonesVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bonesVertex";
const shader = `#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[1])*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[2])*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[3])*vertexInputs.matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[0])*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[1])*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[2])*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[3])*vertexInputs.matricesWeightsExtra[3];
#endif 
#else 
influence=uniforms.mBones[i32(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];
#endif 
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bonesVertexWGSL = { name, shader };


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
#if defined(AREALIGHT{X})
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

/***/ "../core/dist/ShadersWGSL/background.vertex.js":
/*!*****************************************************!*\
  !*** ../core/dist/ShadersWGSL/background.vertex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundVertexShaderWGSL: () => (/* binding */ backgroundVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_backgroundUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/backgroundUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/lightVxUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

















const name = "backgroundVertexShader";
const shader = `#include<backgroundUboDeclaration>
#include<helperFunctions>
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif
#ifdef MAINUV2
varying vMainUV2: vec2f;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vDiffuseUV: vec2f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=input.position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);} else {vertexOutputs.position=scene.viewProjectionR*finalWorld* vec4f(input.position,1.0);}
#else
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);
#endif
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef NORMAL
var normalWorld: mat3x3f=mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*input.normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(input.position,0.0)).xyz);
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
var screenToWorld: mat3x3f=inverseMat3( mat3x3f(finalWorld*scene.viewProjection));var segment: vec3f=mix(vertexOutputs.vDirectionW,screenToWorld* vec3f(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vertexOutputs.vDirectionW=normalize(segment);} else {vertexOutputs.vDirectionW=normalize(vertexOutputs.vDirectionW+(vertexOutputs.vDirectionW-segment));}
#endif
#endif
#ifndef UV1
var uv: vec2f=vec2f(0.,0.);
#else
var uv=input.uv;
#endif
#ifndef UV2
var uv2: vec2f=vec2f(0.,0.);
#else
var uv2=input.uv2;
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uv;
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (uniforms.vDiffuseInfos.x==0.)
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv,1.0,0.0)).xy;}
else
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2,1.0,0.0)).xy;}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const backgroundVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2JhY2tncm91bmRfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9iYWNrZ3JvdW5kVWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9saWdodFZ4VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvYmFja2dyb3VuZC52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwiYmFja2dyb3VuZFVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSB2UHJpbWFyeUNvbG9yOiB2ZWM0Zjt1bmlmb3JtIHZQcmltYXJ5Q29sb3JTaGFkb3c6IHZlYzRmO3VuaWZvcm0gdkRpZmZ1c2VJbmZvcyA6IHZlYzJmO3VuaWZvcm0gZGlmZnVzZU1hdHJpeCA6IG1hdDR4NGY7dW5pZm9ybSBmRm92TXVsdGlwbGllcjogZjMyO3VuaWZvcm0gcG9pbnRTaXplOiBmMzI7dW5pZm9ybSBzaGFkb3dMZXZlbDogZjMyO3VuaWZvcm0gYWxwaGE6IGYzMjt1bmlmb3JtIHZCYWNrZ3JvdW5kQ2VudGVyOiB2ZWMzZjt1bmlmb3JtIHZSZWZsZWN0aW9uQ29udHJvbDogdmVjNGY7dW5pZm9ybSBwcm9qZWN0ZWRHcm91bmRJbmZvczogdmVjMmY7dW5pZm9ybSB2UmVmbGVjdGlvbkluZm9zIDogdmVjMmY7dW5pZm9ybSByZWZsZWN0aW9uTWF0cml4IDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3MgOiB2ZWMzZjtcbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZFVib0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm9uZXNEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4wXG5hdHRyaWJ1dGUgbWF0cmljZXNJbmRpY2VzIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBtYXRyaWNlc1dlaWdodHMgOiB2ZWM0PGYzMj47XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NFxuYXR0cmlidXRlIG1hdHJpY2VzSW5kaWNlc0V4dHJhIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBtYXRyaWNlc1dlaWdodHNFeHRyYSA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuI2lmbmRlZiBCQUtFRF9WRVJURVhfQU5JTUFUSU9OX1RFWFRVUkVcbiNpZmRlZiBCT05FVEVYVFVSRVxudmFyIGJvbmVTYW1wbGVyIDogdGV4dHVyZV8yZDxmMzI+O3VuaWZvcm0gYm9uZVRleHR1cmVXaWR0aCA6IGYzMjtcbiNlbHNlXG51bmlmb3JtIG1Cb25lcyA6IGFycmF5PG1hdDR4NGYsQm9uZXNQZXJNZXNoPjtcbiNlbmRpZlxuI2lmZGVmIEJPTkVTX1ZFTE9DSVRZX0VOQUJMRURcbnVuaWZvcm0gbVByZXZpb3VzQm9uZXMgOiBhcnJheTxtYXQ0eDRmLEJvbmVzUGVyTWVzaD47XG4jZW5kaWZcbiNpZmRlZiBCT05FVEVYVFVSRVxuZm4gcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKHNtcCA6IHRleHR1cmVfMmQ8ZjMyPixpbmRleCA6IGYzMiktPm1hdDR4NGZcbntsZXQgb2Zmc2V0PWkzMihpbmRleCkgKjQ7IFxubGV0IG0wPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzAsMCksMCk7bGV0IG0xPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzEsMCksMCk7bGV0IG0yPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzIsMCksMCk7bGV0IG0zPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzMsMCksMCk7cmV0dXJuIG1hdDR4NGYobTAsbTEsbTIsbTMpO31cbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib25lc0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm9uZXNWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZuZGVmIEJBS0VEX1ZFUlRFWF9BTklNQVRJT05fVEVYVFVSRVxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjBcbnZhciBpbmZsdWVuY2UgOiBtYXQ0eDQ8ZjMyPjtcbiNpZmRlZiBCT05FVEVYVFVSRVxuaW5mbHVlbmNlPXJlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzBdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzBdO1xuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjFcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMV0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxuaW5mbHVlbmNlPWluZmx1ZW5jZStyZWFkTWF0cml4RnJvbVJhd1NhbXBsZXIoYm9uZVNhbXBsZXIsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1syXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1syXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4zXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzNdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzNdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjRcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVswXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsxXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjZcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjdcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVszXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmIFxuI2Vsc2UgXG5pbmZsdWVuY2U9dW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1swXTtcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4xXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1sxXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMl0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjNcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1szXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz40XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMV0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NlxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsyXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz43XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmIFxuI2VuZGlmXG5maW5hbFdvcmxkPWZpbmFsV29ybGQqaW5mbHVlbmNlO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib25lc1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxuc3RydWN0IExpZ2h0e1h9XG57dkxpZ2h0RGF0YTogdmVjNGYsXG52TGlnaHREaWZmdXNlOiB2ZWM0ZixcbnZMaWdodFNwZWN1bGFyOiB2ZWM0ZixcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnZMaWdodERpcmVjdGlvbjogdmVjNGYsXG52TGlnaHRGYWxsb2ZmOiB2ZWM0ZixcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbnZMaWdodEZhbGxvZmY6IHZlYzRmLFxuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG52TGlnaHRHcm91bmQ6IHZlYzNmLFxuI2VsaWYgZGVmaW5lZChDTFVTVExJR0hUe1h9KVxudlNsaWNlRGF0YTogdmVjMmYsXG52U2xpY2VSYW5nZXM6IGFycmF5PHZlYzRmLENMVVNUTElHSFRfU0xJQ0VTPixcbiNlbmRpZlxuI2lmIGRlZmluZWQoQVJFQUxJR0hUe1h9KVxudkxpZ2h0V2lkdGg6IHZlYzRmLFxudkxpZ2h0SGVpZ2h0OiB2ZWM0ZixcbiNlbmRpZlxuc2hhZG93c0luZm86IHZlYzRmLFxuZGVwdGhWYWx1ZXM6IHZlYzJmfSA7dmFyPHVuaWZvcm0+IGxpZ2h0e1h9IDogTGlnaHR7WH07XG4jaWZkZWYgU0hBRE9Xe1h9XG4jaWZkZWYgU0hBRE9XQ1NNe1h9XG51bmlmb3JtIGxpZ2h0TWF0cml4e1h9OiBhcnJheTxtYXQ0eDRmLFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfT47dmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH1fMDogdmVjNGY7dmFyeWluZyB2RGVwdGhNZXRyaWN7WH1fMDogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzE6IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9XzE6IGYzMjt2YXJ5aW5nIHZQb3NpdGlvbkZyb21MaWdodHtYfV8yOiB2ZWM0Zjt2YXJ5aW5nIHZEZXB0aE1ldHJpY3tYfV8yOiBmMzI7dmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH1fMzogdmVjNGY7dmFyeWluZyB2RGVwdGhNZXRyaWN7WH1fMzogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUNhbWVyYXtYfTogdmVjNGY7XG4jZWxpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG4jZWxzZVxudmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH06IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9OiBmMzI7dW5pZm9ybSBsaWdodE1hdHJpeHtYfTogbWF0NHg0ZjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodFZ4VWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dzVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFNIQURPV1NcbiNpZiBkZWZpbmVkKFNIQURPV0NTTXtYfSlcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUNhbWVyYXtYfT1zY2VuZS52aWV3KndvcmxkUG9zO1xuI2lmIFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfT4wXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8wPXVuaWZvcm1zLmxpZ2h0TWF0cml4e1h9WzBdKndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8wPSgtdmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMC56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMD0gKHZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzAueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+MVxudmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMT11bmlmb3Jtcy5saWdodE1hdHJpeHtYfVsxXSp3b3JsZFBvcztcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMT0oLXZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzEueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzE9ICh2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8xLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxuI2VuZGlmIFxuI2lmIFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfT4yXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8yPXVuaWZvcm1zLmxpZ2h0TWF0cml4e1h9WzJdKndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8yPSgtdmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMi56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMj0gKHZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzIueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2VuZGlmXG4jZW5kaWYgXG4jaWYgU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9PjNcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzM9dW5pZm9ybXMubGlnaHRNYXRyaXh7WH1bM10qd29ybGRQb3M7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzM9KC12ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8zLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8zPSAodmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMy56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZW5kaWZcbiNlbmRpZiBcbiNlbGlmIGRlZmluZWQoU0hBRE9Xe1h9KSAmJiAhZGVmaW5lZChTSEFET1dDVUJFe1h9KVxudmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH09dW5pZm9ybXMubGlnaHRNYXRyaXh7WH0qd29ybGRQb3M7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9PSgtdmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH0ueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9PSh2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfS56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2hhZG93c1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JhY2tncm91bmRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwiYmFja2dyb3VuZFZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNpbmNsdWRlPGJhY2tncm91bmRVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbmF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFsOiB2ZWMzZjtcbiNlbmRpZlxuI2luY2x1ZGU8Ym9uZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbnN0YW5jZXNEZWNsYXJhdGlvbj5cbnZhcnlpbmcgdlBvc2l0aW9uVzogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZOb3JtYWxXOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHV2OiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIFVWMlxuYXR0cmlidXRlIHV2MjogdmVjMmY7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYxXG52YXJ5aW5nIHZNYWluVVYxOiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjJcbnZhcnlpbmcgdk1haW5VVjI6IHZlYzJmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChESUZGVVNFKSAmJiBESUZGVVNFRElSRUNUVVY9PTBcbnZhcnlpbmcgdkRpZmZ1c2VVVjogdmVjMmY7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsaWdodFZ4VWJvRGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmFyeWluZyB2UG9zaXRpb25VVlc6IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2RGlyZWN0aW9uVzogdmVjM2Y7XG4jZW5kaWZcbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQgOiBWZXJ0ZXhJbnB1dHMpLT5GcmFnbWVudElucHV0cyB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblVWVz1pbnB1dC5wb3NpdGlvbjtcbiNlbmRpZlxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbiNpZmRlZiBNVUxUSVZJRVdcbmlmIChnbF9WaWV3SURfT1ZSPT0wdSkge3ZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qZmluYWxXb3JsZCogdmVjNGYoaW5wdXQucG9zaXRpb24sMS4wKTt9IGVsc2Uge3ZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb25SKmZpbmFsV29ybGQqIHZlYzRmKGlucHV0LnBvc2l0aW9uLDEuMCk7fVxuI2Vsc2VcbnZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qZmluYWxXb3JsZCogdmVjNGYoaW5wdXQucG9zaXRpb24sMS4wKTtcbiNlbmRpZlxudmFyIHdvcmxkUG9zOiB2ZWM0Zj1maW5hbFdvcmxkKiB2ZWM0ZihpbnB1dC5wb3NpdGlvbiwxLjApO3ZlcnRleE91dHB1dHMudlBvc2l0aW9uVz0gd29ybGRQb3MueHl6O1xuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFdvcmxkOiBtYXQzeDNmPW1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopO1xuI2lmZGVmIE5PTlVOSUZPUk1TQ0FMSU5HXG5ub3JtYWxXb3JsZD10cmFuc3Bvc2VNYXQzKGludmVyc2VNYXQzKG5vcm1hbFdvcmxkKSk7XG4jZW5kaWZcbnZlcnRleE91dHB1dHMudk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKmlucHV0Lm5vcm1hbCk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52ZXJ0ZXhPdXRwdXRzLnZEaXJlY3Rpb25XPW5vcm1hbGl6ZSgoZmluYWxXb3JsZCp2ZWM0ZihpbnB1dC5wb3NpdGlvbiwwLjApKS54eXopO1xuI2lmZGVmIEVRVUlSRUNUQU5HVUxBUl9SRUxGRUNUSU9OX0ZPVlxudmFyIHNjcmVlblRvV29ybGQ6IG1hdDN4M2Y9aW52ZXJzZU1hdDMoIG1hdDN4M2YoZmluYWxXb3JsZCpzY2VuZS52aWV3UHJvamVjdGlvbikpO3ZhciBzZWdtZW50OiB2ZWMzZj1taXgodmVydGV4T3V0cHV0cy52RGlyZWN0aW9uVyxzY3JlZW5Ub1dvcmxkKiB2ZWMzZigwLjAsMC4wLDEuMCksYWJzKGZGb3ZNdWx0aXBsaWVyLTEuMCkpO2lmIChmRm92TXVsdGlwbGllcjw9MS4wKSB7dmVydGV4T3V0cHV0cy52RGlyZWN0aW9uVz1ub3JtYWxpemUoc2VnbWVudCk7fSBlbHNlIHt2ZXJ0ZXhPdXRwdXRzLnZEaXJlY3Rpb25XPW5vcm1hbGl6ZSh2ZXJ0ZXhPdXRwdXRzLnZEaXJlY3Rpb25XKyh2ZXJ0ZXhPdXRwdXRzLnZEaXJlY3Rpb25XLXNlZ21lbnQpKTt9XG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBVVjFcbnZhciB1djogdmVjMmY9dmVjMmYoMC4sMC4pO1xuI2Vsc2VcbnZhciB1dj1pbnB1dC51djtcbiNlbmRpZlxuI2lmbmRlZiBVVjJcbnZhciB1djI6IHZlYzJmPXZlYzJmKDAuLDAuKTtcbiNlbHNlXG52YXIgdXYyPWlucHV0LnV2MjtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjFcbnZlcnRleE91dHB1dHMudk1haW5VVjE9dXY7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYyXG52ZXJ0ZXhPdXRwdXRzLnZNYWluVVYyPXV2MjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoRElGRlVTRSkgJiYgRElGRlVTRURJUkVDVFVWPT0wXG5pZiAodW5pZm9ybXMudkRpZmZ1c2VJbmZvcy54PT0wLilcbnt2ZXJ0ZXhPdXRwdXRzLnZEaWZmdXNlVVY9ICh1bmlmb3Jtcy5kaWZmdXNlTWF0cml4KiB2ZWM0Zih1diwxLjAsMC4wKSkueHk7fVxuZWxzZVxue3ZlcnRleE91dHB1dHMudkRpZmZ1c2VVVj0gKHVuaWZvcm1zLmRpZmZ1c2VNYXRyaXgqIHZlYzRmKHV2MiwxLjAsMC4wKSkueHk7fVxuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXg+XG4jaW5jbHVkZTxmb2dWZXJ0ZXg+XG4jaW5jbHVkZTxzaGFkb3dzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaWZkZWYgVkVSVEVYQ09MT1JcbnZlcnRleE91dHB1dHMudkNvbG9yPXZlcnRleElucHV0cy5jb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRWZXJ0ZXhTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==