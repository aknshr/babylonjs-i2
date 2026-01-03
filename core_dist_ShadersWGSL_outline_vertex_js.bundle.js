"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_outline_vertex_js"],{

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

/***/ "../core/dist/ShadersWGSL/outline.vertex.js":
/*!**************************************************!*\
  !*** ../core/dist/ShadersWGSL/outline.vertex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlineVertexShaderWGSL: () => (/* binding */ outlineVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.















const name = "outlineVertexShader";
const shader = `attribute position: vec3f;attribute normal: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform offset: f32;
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;var normalUpdated: vec3f=vertexInputs.normal;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
var offsetPosition: vec3f=positionUpdated+(normalUpdated*uniforms.offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(offsetPosition,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const outlineVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX291dGxpbmVfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9vdXRsaW5lLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaW5zdGFuY2VzRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgSU5TVEFOQ0VTXG5hdHRyaWJ1dGUgd29ybGQwIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSB3b3JsZDEgOiB2ZWM0PGYzMj47YXR0cmlidXRlIHdvcmxkMiA6IHZlYzQ8ZjMyPjthdHRyaWJ1dGUgd29ybGQzIDogdmVjNDxmMzI+O1xuI2lmZGVmIElOU1RBTkNFU0NPTE9SXG5hdHRyaWJ1dGUgaW5zdGFuY2VDb2xvciA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVEhJTl9JTlNUQU5DRVMpICYmICFkZWZpbmVkKFdPUkxEX1VCTylcbnVuaWZvcm0gd29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUikgfHwgZGVmaW5lZChWRUxPQ0lUWV9MSU5FQVIpXG5hdHRyaWJ1dGUgcHJldmlvdXNXb3JsZDAgOiB2ZWM0PGYzMj47YXR0cmlidXRlIHByZXZpb3VzV29ybGQxIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBwcmV2aW91c1dvcmxkMiA6IHZlYzQ8ZjMyPjthdHRyaWJ1dGUgcHJldmlvdXNXb3JsZDMgOiB2ZWM0PGYzMj47XG4jaWZkZWYgVEhJTl9JTlNUQU5DRVNcbnVuaWZvcm0gcHJldmlvdXNXb3JsZCA6IG1hdDR4NDxmMzI+O1xuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG4jaWYgIWRlZmluZWQoV09STERfVUJPKVxudW5pZm9ybSB3b3JsZCA6IG1hdDR4NDxmMzI+O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChWRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSB8fCBkZWZpbmVkKFZFTE9DSVRZX0xJTkVBUilcbnVuaWZvcm0gcHJldmlvdXNXb3JsZCA6IG1hdDR4NDxmMzI+O1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpbnN0YW5jZXNEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1vcnBoVGFyZ2V0c1ZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBNT1JQSFRBUkdFVFNcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVEVYVFVSRVxuI2lmIHtYfT09MFxuZm9yICh2YXIgaT0wOyBpPE5VTV9NT1JQSF9JTkZMVUVOQ0VSUzsgaT1pKzEpIHtpZiAoZjMyKGkpPj11bmlmb3Jtcy5tb3JwaFRhcmdldENvdW50KSB7YnJlYWs7fVxudmVydGV4SUQ9ZjMyKHZlcnRleElucHV0cy52ZXJ0ZXhJbmRleCkqdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby54O1xuI2lmZGVmIE1PUlBIVEFSR0VUU19QT1NJVElPTlxucG9zaXRpb25VcGRhdGVkPXBvc2l0aW9uVXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKS12ZXJ0ZXhJbnB1dHMucG9zaXRpb24pKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1tpXTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUVEVYVFVSRV9IQVNQT1NJVElPTlNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19OT1JNQUxcbm5vcm1hbFVwZGF0ZWQ9bm9ybWFsVXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKSAtdmVydGV4SW5wdXRzLm5vcm1hbCkqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU05PUk1BTFNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVlxudXZVcGRhdGVkPXV2VXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKS54eS12ZXJ0ZXhJbnB1dHMudXYpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1tpXTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUVEVYVFVSRV9IQVNVVlNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19UQU5HRU5UXG50YW5nZW50VXBkYXRlZD12ZWM0Zih0YW5nZW50VXBkYXRlZC54eXorKHJlYWRWZWN0b3IzRnJvbVJhd1NhbXBsZXIoaSx2ZXJ0ZXhJRCkgLXZlcnRleElucHV0cy50YW5nZW50Lnh5eikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldLHRhbmdlbnRVcGRhdGVkLmEpO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU1RBTkdFTlRTXG52ZXJ0ZXhJRD12ZXJ0ZXhJRCsxLjA7XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVVYyXG51djJVcGRhdGVkPXV2MlVwZGF0ZWQrKHJlYWRWZWN0b3IzRnJvbVJhd1NhbXBsZXIoaSx2ZXJ0ZXhJRCkueHktdmVydGV4SW5wdXRzLnV2MikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX0NPTE9SXG5jb2xvclVwZGF0ZWQ9Y29sb3JVcGRhdGVkKyhyZWFkVmVjdG9yNEZyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpLXZlcnRleElucHV0cy5jb2xvcikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1BPU0lUSU9OXG5wb3NpdGlvblVwZGF0ZWQ9cG9zaXRpb25VcGRhdGVkKyh2ZXJ0ZXhJbnB1dHMucG9zaXRpb257WH0tdmVydGV4SW5wdXRzLnBvc2l0aW9uKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19OT1JNQUxcbm5vcm1hbFVwZGF0ZWQ9bm9ybWFsVXBkYXRlZCsodmVydGV4SW5wdXRzLm5vcm1hbHtYfS12ZXJ0ZXhJbnB1dHMubm9ybWFsKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19UQU5HRU5UXG50YW5nZW50VXBkYXRlZD12ZWM0Zih0YW5nZW50VXBkYXRlZC54eXorKHZlcnRleElucHV0cy50YW5nZW50e1h9LXZlcnRleElucHV0cy50YW5nZW50Lnh5eikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3tYfV0sdGFuZ2VudFVwZGF0ZWQuYSk7XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVVZcbnV2VXBkYXRlZD11dlVwZGF0ZWQrKHZlcnRleElucHV0cy51dl97WH0tdmVydGV4SW5wdXRzLnV2KSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVjJcbnV2MlVwZGF0ZWQ9dXYyVXBkYXRlZCsodmVydGV4SW5wdXRzLnV2Ml97WH0tdmVydGV4SW5wdXRzLnV2MikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3tYfV07XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfQ09MT1JcbmNvbG9yVXBkYXRlZD1jb2xvclVwZGF0ZWQrKHZlcnRleElucHV0cy5jb2xvcntYfS12ZXJ0ZXhJbnB1dHMuY29sb3IpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1vcnBoVGFyZ2V0c1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xuI2lmbmRlZiBNT1JQSFRBUkdFVFNfVEVYVFVSRVxuI2lmZGVmIE1PUlBIVEFSR0VUU19QT1NJVElPTlxuYXR0cmlidXRlIHBvc2l0aW9ue1h9IDogdmVjMzxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX05PUk1BTFxuYXR0cmlidXRlIG5vcm1hbHtYfSA6IHZlYzM8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19UQU5HRU5UXG5hdHRyaWJ1dGUgdGFuZ2VudHtYfSA6IHZlYzM8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVlxuYXR0cmlidXRlIHV2X3tYfSA6IHZlYzI8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVjJcbmF0dHJpYnV0ZSB1djJfe1h9IDogdmVjMjxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX0NPTE9SXG5hdHRyaWJ1dGUgY29sb3J7WH0gOiB2ZWM0PGYzMj47XG4jZW5kaWZcbiNlbGlmIHtYfT09MFxudW5pZm9ybSBtb3JwaFRhcmdldENvdW50OiBmMzI7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xuI2lmZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFXG52YXIgdmVydGV4SUQgOiBmMzI7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xudW5pZm9ybSBtb3JwaFRhcmdldEluZmx1ZW5jZXMgOiBhcnJheTxmMzIsTlVNX01PUlBIX0lORkxVRU5DRVJTPjtcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVEVYVFVSRSBcbnVuaWZvcm0gbW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlcyA6IGFycmF5PGYzMixOVU1fTU9SUEhfSU5GTFVFTkNFUlM+O3VuaWZvcm0gbW9ycGhUYXJnZXRUZXh0dXJlSW5mbyA6IHZlYzM8ZjMyPjt2YXIgbW9ycGhUYXJnZXRzIDogdGV4dHVyZV8yZF9hcnJheTxmMzI+O3ZhciBtb3JwaFRhcmdldHNTYW1wbGVyIDogc2FtcGxlcjtmbiByZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKHRhcmdldEluZGV4IDogaTMyLHZlcnRleEluZGV4IDogZjMyKS0+dmVjMzxmMzI+XG57IFxubGV0IHk9Zmxvb3IodmVydGV4SW5kZXgvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55KTtsZXQgeD12ZXJ0ZXhJbmRleC15KnVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueTtsZXQgdGV4dHVyZVVWPXZlYzI8ZjMyPigoeCswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueSwoeSswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueik7cmV0dXJuIHRleHR1cmVTYW1wbGVMZXZlbChtb3JwaFRhcmdldHMsbW9ycGhUYXJnZXRzU2FtcGxlcix0ZXh0dXJlVVYsaTMyKHVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXNbdGFyZ2V0SW5kZXhdKSwwLjApLnh5ejt9XG5mbiByZWFkVmVjdG9yNEZyb21SYXdTYW1wbGVyKHRhcmdldEluZGV4IDogaTMyLHZlcnRleEluZGV4IDogZjMyKS0+dmVjNDxmMzI+XG57IFxubGV0IHk9Zmxvb3IodmVydGV4SW5kZXgvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55KTtsZXQgeD12ZXJ0ZXhJbmRleC15KnVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueTtsZXQgdGV4dHVyZVVWPXZlYzI8ZjMyPigoeCswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueSwoeSswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueik7cmV0dXJuIHRleHR1cmVTYW1wbGVMZXZlbChtb3JwaFRhcmdldHMsbW9ycGhUYXJnZXRzU2FtcGxlcix0ZXh0dXJlVVYsaTMyKHVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXNbdGFyZ2V0SW5kZXhdKSwwLjApO31cbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwib3V0bGluZVZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7YXR0cmlidXRlIG5vcm1hbDogdmVjM2Y7XG4jaW5jbHVkZTxib25lc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxudW5pZm9ybSBvZmZzZXQ6IGYzMjtcbiNpbmNsdWRlPGluc3RhbmNlc0RlY2xhcmF0aW9uPlxudW5pZm9ybSB2aWV3UHJvamVjdGlvbjogbWF0NHg0ZjtcbiNpZmRlZiBBTFBIQVRFU1RcbnZhcnlpbmcgdlVWOiB2ZWMyZjt1bmlmb3JtIGRpZmZ1c2VNYXRyaXg6IG1hdDR4NGY7IFxuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHV2OiB2ZWMyZjtcbiNlbmRpZlxuI2lmZGVmIFVWMlxuYXR0cmlidXRlIHV2MjogdmVjMmY7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xuQHZlcnRleFxuZm4gbWFpbihpbnB1dDogVmVydGV4SW5wdXRzKS0+RnJhZ21lbnRJbnB1dHMge3ZhciBwb3NpdGlvblVwZGF0ZWQ6IHZlYzNmPXZlcnRleElucHV0cy5wb3NpdGlvbjt2YXIgbm9ybWFsVXBkYXRlZDogdmVjM2Y9dmVydGV4SW5wdXRzLm5vcm1hbDtcbiNpZmRlZiBVVjFcbnZhciB1dlVwZGF0ZWQ6IHZlYzJmPXZlcnRleElucHV0cy51djtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPXZlcnRleElucHV0cy51djI7XG4jZW5kaWZcbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbD5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxudmFyIG9mZnNldFBvc2l0aW9uOiB2ZWMzZj1wb3NpdGlvblVwZGF0ZWQrKG5vcm1hbFVwZGF0ZWQqdW5pZm9ybXMub2Zmc2V0KTtcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbiNpbmNsdWRlPGJvbmVzVmVydGV4PlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb24+XG52YXIgd29ybGRQb3M6IHZlYzRmPWZpbmFsV29ybGQqdmVjNGYob2Zmc2V0UG9zaXRpb24sMS4wKTt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXVuaWZvcm1zLnZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2lmZGVmIEFMUEhBVEVTVFxuI2lmZGVmIFVWMVxudmVydGV4T3V0cHV0cy52VVY9KHVuaWZvcm1zLmRpZmZ1c2VNYXRyaXgqdmVjNGYodXZVcGRhdGVkLDEuMCwwLjApKS54eTtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmVydGV4T3V0cHV0cy52VVY9KHVuaWZvcm1zLmRpZmZ1c2VNYXRyaXgqdmVjNGYodXYyVXBkYXRlZCwxLjAsMC4wKSkueHk7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG59XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvdXRsaW5lVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9