"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_bonesDeclaration_js-core_dist_ShadersWGSL_ShadersInclude-9b75b5"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2JvbmVzRGVjbGFyYXRpb25fanMtY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlLTliNzViNS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWwudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm9uZXNEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4wXG5hdHRyaWJ1dGUgbWF0cmljZXNJbmRpY2VzIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBtYXRyaWNlc1dlaWdodHMgOiB2ZWM0PGYzMj47XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NFxuYXR0cmlidXRlIG1hdHJpY2VzSW5kaWNlc0V4dHJhIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBtYXRyaWNlc1dlaWdodHNFeHRyYSA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuI2lmbmRlZiBCQUtFRF9WRVJURVhfQU5JTUFUSU9OX1RFWFRVUkVcbiNpZmRlZiBCT05FVEVYVFVSRVxudmFyIGJvbmVTYW1wbGVyIDogdGV4dHVyZV8yZDxmMzI+O3VuaWZvcm0gYm9uZVRleHR1cmVXaWR0aCA6IGYzMjtcbiNlbHNlXG51bmlmb3JtIG1Cb25lcyA6IGFycmF5PG1hdDR4NGYsQm9uZXNQZXJNZXNoPjtcbiNlbmRpZlxuI2lmZGVmIEJPTkVTX1ZFTE9DSVRZX0VOQUJMRURcbnVuaWZvcm0gbVByZXZpb3VzQm9uZXMgOiBhcnJheTxtYXQ0eDRmLEJvbmVzUGVyTWVzaD47XG4jZW5kaWZcbiNpZmRlZiBCT05FVEVYVFVSRVxuZm4gcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKHNtcCA6IHRleHR1cmVfMmQ8ZjMyPixpbmRleCA6IGYzMiktPm1hdDR4NGZcbntsZXQgb2Zmc2V0PWkzMihpbmRleCkgKjQ7IFxubGV0IG0wPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzAsMCksMCk7bGV0IG0xPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzEsMCksMCk7bGV0IG0yPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzIsMCksMCk7bGV0IG0zPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzMsMCksMCk7cmV0dXJuIG1hdDR4NGYobTAsbTEsbTIsbTMpO31cbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib25lc0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm9uZXNWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZuZGVmIEJBS0VEX1ZFUlRFWF9BTklNQVRJT05fVEVYVFVSRVxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjBcbnZhciBpbmZsdWVuY2UgOiBtYXQ0eDQ8ZjMyPjtcbiNpZmRlZiBCT05FVEVYVFVSRVxuaW5mbHVlbmNlPXJlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzBdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzBdO1xuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjFcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMV0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxuaW5mbHVlbmNlPWluZmx1ZW5jZStyZWFkTWF0cml4RnJvbVJhd1NhbXBsZXIoYm9uZVNhbXBsZXIsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1syXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1syXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4zXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzNdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzNdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjRcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVswXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsxXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjZcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjdcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVszXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmIFxuI2Vsc2UgXG5pbmZsdWVuY2U9dW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1swXTtcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4xXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1sxXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMl0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjNcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1szXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz40XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMV0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NlxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsyXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz43XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmIFxuI2VuZGlmXG5maW5hbFdvcmxkPWZpbmFsV29ybGQqaW5mbHVlbmNlO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib25lc1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1vcnBoVGFyZ2V0c1ZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBNT1JQSFRBUkdFVFNcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVEVYVFVSRVxuI2lmIHtYfT09MFxuZm9yICh2YXIgaT0wOyBpPE5VTV9NT1JQSF9JTkZMVUVOQ0VSUzsgaT1pKzEpIHtpZiAoZjMyKGkpPj11bmlmb3Jtcy5tb3JwaFRhcmdldENvdW50KSB7YnJlYWs7fVxudmVydGV4SUQ9ZjMyKHZlcnRleElucHV0cy52ZXJ0ZXhJbmRleCkqdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby54O1xuI2lmZGVmIE1PUlBIVEFSR0VUU19QT1NJVElPTlxucG9zaXRpb25VcGRhdGVkPXBvc2l0aW9uVXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKS12ZXJ0ZXhJbnB1dHMucG9zaXRpb24pKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1tpXTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUVEVYVFVSRV9IQVNQT1NJVElPTlNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19OT1JNQUxcbm5vcm1hbFVwZGF0ZWQ9bm9ybWFsVXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKSAtdmVydGV4SW5wdXRzLm5vcm1hbCkqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU05PUk1BTFNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVlxudXZVcGRhdGVkPXV2VXBkYXRlZCsocmVhZFZlY3RvcjNGcm9tUmF3U2FtcGxlcihpLHZlcnRleElEKS54eS12ZXJ0ZXhJbnB1dHMudXYpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1tpXTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUVEVYVFVSRV9IQVNVVlNcbnZlcnRleElEPXZlcnRleElEKzEuMDtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19UQU5HRU5UXG50YW5nZW50VXBkYXRlZD12ZWM0Zih0YW5nZW50VXBkYXRlZC54eXorKHJlYWRWZWN0b3IzRnJvbVJhd1NhbXBsZXIoaSx2ZXJ0ZXhJRCkgLXZlcnRleElucHV0cy50YW5nZW50Lnh5eikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldLHRhbmdlbnRVcGRhdGVkLmEpO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRURVhUVVJFX0hBU1RBTkdFTlRTXG52ZXJ0ZXhJRD12ZXJ0ZXhJRCsxLjA7XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVVYyXG51djJVcGRhdGVkPXV2MlVwZGF0ZWQrKHJlYWRWZWN0b3IzRnJvbVJhd1NhbXBsZXIoaSx2ZXJ0ZXhJRCkueHktdmVydGV4SW5wdXRzLnV2MikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX0NPTE9SXG5jb2xvclVwZGF0ZWQ9Y29sb3JVcGRhdGVkKyhyZWFkVmVjdG9yNEZyb21SYXdTYW1wbGVyKGksdmVydGV4SUQpLXZlcnRleElucHV0cy5jb2xvcikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW2ldO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgTU9SUEhUQVJHRVRTX1BPU0lUSU9OXG5wb3NpdGlvblVwZGF0ZWQ9cG9zaXRpb25VcGRhdGVkKyh2ZXJ0ZXhJbnB1dHMucG9zaXRpb257WH0tdmVydGV4SW5wdXRzLnBvc2l0aW9uKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19OT1JNQUxcbm5vcm1hbFVwZGF0ZWQ9bm9ybWFsVXBkYXRlZCsodmVydGV4SW5wdXRzLm5vcm1hbHtYfS12ZXJ0ZXhJbnB1dHMubm9ybWFsKSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19UQU5HRU5UXG50YW5nZW50VXBkYXRlZD12ZWM0Zih0YW5nZW50VXBkYXRlZC54eXorKHZlcnRleElucHV0cy50YW5nZW50e1h9LXZlcnRleElucHV0cy50YW5nZW50Lnh5eikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3tYfV0sdGFuZ2VudFVwZGF0ZWQuYSk7XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVVZcbnV2VXBkYXRlZD11dlVwZGF0ZWQrKHZlcnRleElucHV0cy51dl97WH0tdmVydGV4SW5wdXRzLnV2KSp1bmlmb3Jtcy5tb3JwaFRhcmdldEluZmx1ZW5jZXNbe1h9XTtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVjJcbnV2MlVwZGF0ZWQ9dXYyVXBkYXRlZCsodmVydGV4SW5wdXRzLnV2Ml97WH0tdmVydGV4SW5wdXRzLnV2MikqdW5pZm9ybXMubW9ycGhUYXJnZXRJbmZsdWVuY2VzW3tYfV07XG4jZW5kaWZcbiNpZmRlZiBNT1JQSFRBUkdFVFNfQ09MT1JcbmNvbG9yVXBkYXRlZD1jb2xvclVwZGF0ZWQrKHZlcnRleElucHV0cy5jb2xvcntYfS12ZXJ0ZXhJbnB1dHMuY29sb3IpKnVuaWZvcm1zLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1t7WH1dO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1vcnBoVGFyZ2V0c1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xuI2lmbmRlZiBNT1JQSFRBUkdFVFNfVEVYVFVSRVxuI2lmZGVmIE1PUlBIVEFSR0VUU19QT1NJVElPTlxuYXR0cmlidXRlIHBvc2l0aW9ue1h9IDogdmVjMzxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX05PUk1BTFxuYXR0cmlidXRlIG5vcm1hbHtYfSA6IHZlYzM8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19UQU5HRU5UXG5hdHRyaWJ1dGUgdGFuZ2VudHtYfSA6IHZlYzM8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVlxuYXR0cmlidXRlIHV2X3tYfSA6IHZlYzI8ZjMyPjtcbiNlbmRpZlxuI2lmZGVmIE1PUlBIVEFSR0VUU19VVjJcbmF0dHJpYnV0ZSB1djJfe1h9IDogdmVjMjxmMzI+O1xuI2VuZGlmXG4jaWZkZWYgTU9SUEhUQVJHRVRTX0NPTE9SXG5hdHRyaWJ1dGUgY29sb3J7WH0gOiB2ZWM0PGYzMj47XG4jZW5kaWZcbiNlbGlmIHtYfT09MFxudW5pZm9ybSBtb3JwaFRhcmdldENvdW50OiBmMzI7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xuI2lmZGVmIE1PUlBIVEFSR0VUU19URVhUVVJFXG52YXIgdmVydGV4SUQgOiBmMzI7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE1PUlBIVEFSR0VUU1xudW5pZm9ybSBtb3JwaFRhcmdldEluZmx1ZW5jZXMgOiBhcnJheTxmMzIsTlVNX01PUlBIX0lORkxVRU5DRVJTPjtcbiNpZmRlZiBNT1JQSFRBUkdFVFNfVEVYVFVSRSBcbnVuaWZvcm0gbW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlcyA6IGFycmF5PGYzMixOVU1fTU9SUEhfSU5GTFVFTkNFUlM+O3VuaWZvcm0gbW9ycGhUYXJnZXRUZXh0dXJlSW5mbyA6IHZlYzM8ZjMyPjt2YXIgbW9ycGhUYXJnZXRzIDogdGV4dHVyZV8yZF9hcnJheTxmMzI+O3ZhciBtb3JwaFRhcmdldHNTYW1wbGVyIDogc2FtcGxlcjtmbiByZWFkVmVjdG9yM0Zyb21SYXdTYW1wbGVyKHRhcmdldEluZGV4IDogaTMyLHZlcnRleEluZGV4IDogZjMyKS0+dmVjMzxmMzI+XG57IFxubGV0IHk9Zmxvb3IodmVydGV4SW5kZXgvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55KTtsZXQgeD12ZXJ0ZXhJbmRleC15KnVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueTtsZXQgdGV4dHVyZVVWPXZlYzI8ZjMyPigoeCswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueSwoeSswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueik7cmV0dXJuIHRleHR1cmVTYW1wbGVMZXZlbChtb3JwaFRhcmdldHMsbW9ycGhUYXJnZXRzU2FtcGxlcix0ZXh0dXJlVVYsaTMyKHVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXNbdGFyZ2V0SW5kZXhdKSwwLjApLnh5ejt9XG5mbiByZWFkVmVjdG9yNEZyb21SYXdTYW1wbGVyKHRhcmdldEluZGV4IDogaTMyLHZlcnRleEluZGV4IDogZjMyKS0+dmVjNDxmMzI+XG57IFxubGV0IHk9Zmxvb3IodmVydGV4SW5kZXgvdW5pZm9ybXMubW9ycGhUYXJnZXRUZXh0dXJlSW5mby55KTtsZXQgeD12ZXJ0ZXhJbmRleC15KnVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueTtsZXQgdGV4dHVyZVVWPXZlYzI8ZjMyPigoeCswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueSwoeSswLjUpL3VuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZm8ueik7cmV0dXJuIHRleHR1cmVTYW1wbGVMZXZlbChtb3JwaFRhcmdldHMsbW9ycGhUYXJnZXRzU2FtcGxlcix0ZXh0dXJlVVYsaTMyKHVuaWZvcm1zLm1vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXNbdGFyZ2V0SW5kZXhdKSwwLjApO31cbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==