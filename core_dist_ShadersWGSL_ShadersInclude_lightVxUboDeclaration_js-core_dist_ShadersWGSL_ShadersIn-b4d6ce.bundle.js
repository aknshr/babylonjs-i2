"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_lightVxUboDeclaration_js-core_dist_ShadersWGSL_ShadersIn-b4d6ce"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2xpZ2h0VnhVYm9EZWNsYXJhdGlvbl9qcy1jb3JlX2Rpc3RfU2hhZGVyc1dHU0xfU2hhZGVyc0luLWI0ZDZjZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbGlnaHRWeFVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS91dkF0dHJpYnV0ZURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvdXZWYXJpYWJsZURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvdmVydGV4Q29sb3JNaXhpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxuc3RydWN0IExpZ2h0e1h9XG57dkxpZ2h0RGF0YTogdmVjNGYsXG52TGlnaHREaWZmdXNlOiB2ZWM0ZixcbnZMaWdodFNwZWN1bGFyOiB2ZWM0ZixcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnZMaWdodERpcmVjdGlvbjogdmVjNGYsXG52TGlnaHRGYWxsb2ZmOiB2ZWM0ZixcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbnZMaWdodEZhbGxvZmY6IHZlYzRmLFxuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG52TGlnaHRHcm91bmQ6IHZlYzNmLFxuI2VsaWYgZGVmaW5lZChDTFVTVExJR0hUe1h9KVxudlNsaWNlRGF0YTogdmVjMmYsXG52U2xpY2VSYW5nZXM6IGFycmF5PHZlYzRmLENMVVNUTElHSFRfU0xJQ0VTPixcbiNlbmRpZlxuI2lmIGRlZmluZWQoQVJFQUxJR0hUe1h9KVxudkxpZ2h0V2lkdGg6IHZlYzRmLFxudkxpZ2h0SGVpZ2h0OiB2ZWM0ZixcbiNlbmRpZlxuc2hhZG93c0luZm86IHZlYzRmLFxuZGVwdGhWYWx1ZXM6IHZlYzJmfSA7dmFyPHVuaWZvcm0+IGxpZ2h0e1h9IDogTGlnaHR7WH07XG4jaWZkZWYgU0hBRE9Xe1h9XG4jaWZkZWYgU0hBRE9XQ1NNe1h9XG51bmlmb3JtIGxpZ2h0TWF0cml4e1h9OiBhcnJheTxtYXQ0eDRmLFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfT47dmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH1fMDogdmVjNGY7dmFyeWluZyB2RGVwdGhNZXRyaWN7WH1fMDogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzE6IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9XzE6IGYzMjt2YXJ5aW5nIHZQb3NpdGlvbkZyb21MaWdodHtYfV8yOiB2ZWM0Zjt2YXJ5aW5nIHZEZXB0aE1ldHJpY3tYfV8yOiBmMzI7dmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH1fMzogdmVjNGY7dmFyeWluZyB2RGVwdGhNZXRyaWN7WH1fMzogZjMyO3ZhcnlpbmcgdlBvc2l0aW9uRnJvbUNhbWVyYXtYfTogdmVjNGY7XG4jZWxpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG4jZWxzZVxudmFyeWluZyB2UG9zaXRpb25Gcm9tTGlnaHR7WH06IHZlYzRmO3ZhcnlpbmcgdkRlcHRoTWV0cmlje1h9OiBmMzI7dW5pZm9ybSBsaWdodE1hdHJpeHtYfTogbWF0NHg0ZjtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodFZ4VWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwcmVQYXNzVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFBSRVBBU1NfREVQVEhcbnZlcnRleE91dHB1dHMudlZpZXdQb3M9KHNjZW5lLnZpZXcqd29ybGRQb3MpLnJnYjtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfTk9STUFMSVpFRF9WSUVXX0RFUFRIXG52ZXJ0ZXhPdXRwdXRzLnZOb3JtVmlld0RlcHRoPSgoc2NlbmUudmlldyp3b3JsZFBvcykuei11bmlmb3Jtcy5jYW1lcmFJbmZvLngpLyh1bmlmb3Jtcy5jYW1lcmFJbmZvLnktdW5pZm9ybXMuY2FtZXJhSW5mby54KTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfTE9DQUxfUE9TSVRJT05cbnZlcnRleE91dHB1dHMudlBvc2l0aW9uPXBvc2l0aW9uVXBkYXRlZC54eXo7XG4jZW5kaWZcbiNpZiAoZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSkgJiYgZGVmaW5lZChCT05FU19WRUxPQ0lUWV9FTkFCTEVEKVxudmVydGV4T3V0cHV0cy52Q3VycmVudFBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjBcbnZhciBwcmV2aW91c0luZmx1ZW5jZTogbWF0NHg0ZjtwcmV2aW91c0luZmx1ZW5jZT11bmlmb3Jtcy5tUHJldmlvdXNCb25lc1sgaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMF0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzBdO1xuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjFcbnByZXZpb3VzSW5mbHVlbmNlKz11bmlmb3Jtcy5tUHJldmlvdXNCb25lc1sgaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMV0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjJcbnByZXZpb3VzSW5mbHVlbmNlKz11bmlmb3Jtcy5tUHJldmlvdXNCb25lc1sgaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMl0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjNcbnByZXZpb3VzSW5mbHVlbmNlKz11bmlmb3Jtcy5tUHJldmlvdXNCb25lc1sgaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbM10pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzNdO1xuI2VuZGlmXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NFxucHJldmlvdXNJbmZsdWVuY2UrPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbnByZXZpb3VzSW5mbHVlbmNlKz11bmlmb3Jtcy5tUHJldmlvdXNCb25lc1sgaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsxXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsxXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz42XG5wcmV2aW91c0luZmx1ZW5jZSs9dW5pZm9ybXMubVByZXZpb3VzQm9uZXNbIGkzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMl0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMl07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+N1xucHJldmlvdXNJbmZsdWVuY2UrPXVuaWZvcm1zLm1QcmV2aW91c0JvbmVzWyBpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnZQcmV2aW91c1Bvc2l0aW9uPXVuaWZvcm1zLnByZXZpb3VzVmlld1Byb2plY3Rpb24qZmluYWxQcmV2aW91c1dvcmxkKnByZXZpb3VzSW5mbHVlbmNlKiB2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZQcmV2aW91c1Bvc2l0aW9uPXVuaWZvcm1zLnByZXZpb3VzVmlld1Byb2plY3Rpb24qZmluYWxQcmV2aW91c1dvcmxkKiB2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcHJlUGFzc1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBQUkVQQVNTXG4jaWZkZWYgUFJFUEFTU19MT0NBTF9QT1NJVElPTlxudmFyeWluZyB2UG9zaXRpb24gOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfREVQVEhcbnZhcnlpbmcgdlZpZXdQb3M6IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhcbnZhcnlpbmcgdk5vcm1WaWV3RGVwdGg6IGYzMjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUilcbnVuaWZvcm0gcHJldmlvdXNWaWV3UHJvamVjdGlvbjogbWF0NHg0Zjt2YXJ5aW5nIHZDdXJyZW50UG9zaXRpb246IHZlYzRmO3ZhcnlpbmcgdlByZXZpb3VzUG9zaXRpb246IHZlYzRmO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwcmVQYXNzVmVydGV4RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzYW1wbGVyVmVydGV4RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChfREVGSU5FTkFNRV8pICYmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0wXG52YXJ5aW5nIHZfVkFSWUlOR05BTUVfVVY6IHZlYzJmO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2FtcGxlclZlcnRleERlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoX0RFRklORU5BTUVfKSAmJiBfREVGSU5FTkFNRV9ESVJFQ1RVVj09MFxuaWYgKHVuaWZvcm1zLnZfSU5GT05BTUVfPT0wLilcbnt2ZXJ0ZXhPdXRwdXRzLnZfVkFSWUlOR05BTUVfVVY9ICh1bmlmb3Jtcy5fTUFUUklYTkFNRV9NYXRyaXgqIHZlYzRmKHV2VXBkYXRlZCwxLjAsMC4wKSkueHk7fVxuI2lmZGVmIFVWMlxuZWxzZSBpZiAodW5pZm9ybXMudl9JTkZPTkFNRV89PTEuKVxue3ZlcnRleE91dHB1dHMudl9WQVJZSU5HTkFNRV9VVj0gKHVuaWZvcm1zLl9NQVRSSVhOQU1FX01hdHJpeCogdmVjNGYodXYyVXBkYXRlZCwxLjAsMC4wKSkueHk7fVxuI2VuZGlmXG4jaWZkZWYgVVYzXG5lbHNlIGlmICh1bmlmb3Jtcy52X0lORk9OQU1FXz09Mi4pXG57dmVydGV4T3V0cHV0cy52X1ZBUllJTkdOQU1FX1VWPSAodW5pZm9ybXMuX01BVFJJWE5BTUVfTWF0cml4KiB2ZWM0Zih2ZXJ0ZXhJbnB1dHMudXYzLDEuMCwwLjApKS54eTt9XG4jZW5kaWZcbiNpZmRlZiBVVjRcbmVsc2UgaWYgKHVuaWZvcm1zLnZfSU5GT05BTUVfPT0zLilcbnt2ZXJ0ZXhPdXRwdXRzLnZfVkFSWUlOR05BTUVfVVY9ICh1bmlmb3Jtcy5fTUFUUklYTkFNRV9NYXRyaXgqIHZlYzRmKHZlcnRleElucHV0cy51djQsMS4wLDAuMCkpLnh5O31cbiNlbmRpZlxuI2lmZGVmIFVWNVxuZWxzZSBpZiAodW5pZm9ybXMudl9JTkZPTkFNRV89PTQuKVxue3ZlcnRleE91dHB1dHMudl9WQVJZSU5HTkFNRV9VVj0gKHVuaWZvcm1zLl9NQVRSSVhOQU1FX01hdHJpeCogdmVjNGYodmVydGV4SW5wdXRzLnV2NSwxLjAsMC4wKSkueHk7fVxuI2VuZGlmXG4jaWZkZWYgVVY2XG5lbHNlIGlmICh1bmlmb3Jtcy52X0lORk9OQU1FXz09NS4pXG57dmVydGV4T3V0cHV0cy52X1ZBUllJTkdOQU1FX1VWPSAodW5pZm9ybXMuX01BVFJJWE5BTUVfTWF0cml4KiB2ZWM0Zih2ZXJ0ZXhJbnB1dHMudXY2LDEuMCwwLjApKS54eTt9XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd3NWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgU0hBRE9XU1xuI2lmIGRlZmluZWQoU0hBRE9XQ1NNe1h9KVxudmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tQ2FtZXJhe1h9PXNjZW5lLnZpZXcqd29ybGRQb3M7XG4jaWYgU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9PjBcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzA9dW5pZm9ybXMubGlnaHRNYXRyaXh7WH1bMF0qd29ybGRQb3M7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzA9KC12ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8wLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8wPSAodmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMC56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmIFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfT4xXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8xPXVuaWZvcm1zLmxpZ2h0TWF0cml4e1h9WzFdKndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8xPSgtdmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMS56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMT0gKHZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzEueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2VuZGlmXG4jZW5kaWYgXG4jaWYgU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9PjJcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzI9dW5pZm9ybXMubGlnaHRNYXRyaXh7WH1bMl0qd29ybGRQb3M7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzI9KC12ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8yLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbHNlXG52ZXJ0ZXhPdXRwdXRzLnZEZXB0aE1ldHJpY3tYfV8yPSAodmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMi56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZW5kaWZcbiNlbmRpZiBcbiNpZiBTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0+M1xudmVydGV4T3V0cHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMz11bmlmb3Jtcy5saWdodE1hdHJpeHtYfVszXSp3b3JsZFBvcztcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH1fMz0oLXZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzMueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmlje1h9XzM9ICh2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8zLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxuI2VuZGlmIFxuI2VsaWYgZGVmaW5lZChTSEFET1d7WH0pICYmICFkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfT11bmlmb3Jtcy5saWdodE1hdHJpeHtYfSp3b3JsZFBvcztcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH09KC12ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfS56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWN7WH09KHZlcnRleE91dHB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dzVmVydGV4V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwidXZBdHRyaWJ1dGVEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBVVntYfVxuYXR0cmlidXRlIHV2e1h9OiB2ZWMyZjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHV2QXR0cmlidXRlRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJ1dlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTUFJTlVWe1h9XG4jaWYgIWRlZmluZWQoVVZ7WH0pXG52YXIgdXZ7WH06IHZlYzJmPXZlYzJmKDAuLDAuKTtcbiNlbHNlXG52YXIgdXZ7WH06IHZlYzJmPXZlcnRleElucHV0cy51dntYfTtcbiNlbmRpZlxudmVydGV4T3V0cHV0cy52TWFpblVWe1h9PXV2e1h9O1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgdXZWYXJpYWJsZURlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwidmVydGV4Q29sb3JNaXhpbmdcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG52ZXJ0ZXhPdXRwdXRzLnZDb2xvcj12ZWM0ZigxLjApO1xuI2lmZGVmIFZFUlRFWENPTE9SXG4jaWZkZWYgVkVSVEVYQUxQSEFcbnZlcnRleE91dHB1dHMudkNvbG9yKj12ZXJ0ZXhJbnB1dHMuY29sb3I7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52Q29sb3I9dmVjNGYodmVydGV4T3V0cHV0cy52Q29sb3IucmdiKnZlcnRleElucHV0cy5jb2xvci5yZ2IsdmVydGV4T3V0cHV0cy52Q29sb3IuYSk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIElOU1RBTkNFU0NPTE9SXG52ZXJ0ZXhPdXRwdXRzLnZDb2xvcio9dmVydGV4SW5wdXRzLmluc3RhbmNlQ29sb3I7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHZlcnRleENvbG9yTWl4aW5nV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=