"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_bakedVertexAnimation_js-core_dist_ShadersWGSL_ShadersInc-b6945e"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bakedVertexAnimationWGSL: () => (/* binding */ bakedVertexAnimationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bakedVertexAnimation";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
let VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.z;let VATSpeed: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.w;
#else
let VATStartFrame: f32=uniforms.bakedVertexAnimationSettings.x;let VATEndFrame: f32=uniforms.bakedVertexAnimationSettings.y;let VATOffsetFrame: f32=uniforms.bakedVertexAnimationSettings.z;let VATSpeed: f32=uniforms.bakedVertexAnimationSettings.w;
#endif
let totalFrames: f32=VATEndFrame-VATStartFrame+1.0;let time: f32=uniforms.bakedVertexAnimationTime*VATSpeed/totalFrames;let frameCorrection: f32=select(1.0,0.0,time<1.0);let numOfFrames: f32=totalFrames-frameCorrection;var VATFrameNum: f32=fract(time)*numOfFrames;VATFrameNum=(VATFrameNum+VATOffsetFrame) % numOfFrames;VATFrameNum=floor(VATFrameNum);VATFrameNum=VATFrameNum+VATStartFrame+frameCorrection;var VATInfluence : mat4x4<f32>;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[0],VATFrameNum)*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[1],VATFrameNum)*vertexInputs.matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[2],VATFrameNum)*vertexInputs.matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[3],VATFrameNum)*vertexInputs.matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[0],VATFrameNum)*vertexInputs.matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[1],VATFrameNum)*vertexInputs.matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[2],VATFrameNum)*vertexInputs.matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[3],VATFrameNum)*vertexInputs.matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bakedVertexAnimationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bakedVertexAnimationDeclarationWGSL: () => (/* binding */ bakedVertexAnimationDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bakedVertexAnimationDeclaration";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationTextureSizeInverted: vec2<f32>;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;
#ifdef INSTANCES
attribute bakedVertexAnimationSettingsInstanced : vec4<f32>;
#endif
fn readMatrixFromRawSamplerVAT(smp : texture_2d<f32>,index : f32,frame : f32)->mat4x4<f32>
{let offset=i32(index)*4;let frameUV=i32(frame);let m0=textureLoad(smp,vec2<i32>(offset+0,frameUV),0);let m1=textureLoad(smp,vec2<i32>(offset+1,frameUV),0);let m2=textureLoad(smp,vec2<i32>(offset+2,frameUV),0);let m3=textureLoad(smp,vec2<i32>(offset+3,frameUV),0);return mat4x4<f32>(m0,m1,m2,m3);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bakedVertexAnimationDeclarationWGSL = { name, shader };


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
attribute matricesIndices : vec4f;attribute matricesWeights : vec4f;
#if NUM_BONE_INFLUENCERS>4
attribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;
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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js":
/*!******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instancesVertexWGSL: () => (/* binding */ instancesVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "instancesVertex";
const shader = `#ifdef INSTANCES
var finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
var finalPreviousWorld=mat4x4<f32>(
vertexInputs.previousWorld0,vertexInputs.previousWorld1,
vertexInputs.previousWorld2,vertexInputs.previousWorld3);
#endif
#ifdef THIN_INSTANCES
#if !defined(WORLD_UBO)
finalWorld=uniforms.world*finalWorld;
#else
finalWorld=mesh.world*finalWorld;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
finalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
var finalWorld=uniforms.world;
#else
var finalWorld=mesh.world;
#endif
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
var finalPreviousWorld=uniforms.previousWorld;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const instancesVertexWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2Jha2VkVmVydGV4QW5pbWF0aW9uX2pzLWNvcmVfZGlzdF9TaGFkZXJzV0dTTF9TaGFkZXJzSW5jLWI2OTQ1ZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzVmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJiYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBCQUtFRF9WRVJURVhfQU5JTUFUSU9OX1RFWFRVUkVcbntcbiNpZmRlZiBJTlNUQU5DRVNcbmxldCBWQVRTdGFydEZyYW1lOiBmMzI9dmVydGV4SW5wdXRzLmJha2VkVmVydGV4QW5pbWF0aW9uU2V0dGluZ3NJbnN0YW5jZWQueDtsZXQgVkFURW5kRnJhbWU6IGYzMj12ZXJ0ZXhJbnB1dHMuYmFrZWRWZXJ0ZXhBbmltYXRpb25TZXR0aW5nc0luc3RhbmNlZC55O2xldCBWQVRPZmZzZXRGcmFtZTogZjMyPXZlcnRleElucHV0cy5iYWtlZFZlcnRleEFuaW1hdGlvblNldHRpbmdzSW5zdGFuY2VkLno7bGV0IFZBVFNwZWVkOiBmMzI9dmVydGV4SW5wdXRzLmJha2VkVmVydGV4QW5pbWF0aW9uU2V0dGluZ3NJbnN0YW5jZWQudztcbiNlbHNlXG5sZXQgVkFUU3RhcnRGcmFtZTogZjMyPXVuaWZvcm1zLmJha2VkVmVydGV4QW5pbWF0aW9uU2V0dGluZ3MueDtsZXQgVkFURW5kRnJhbWU6IGYzMj11bmlmb3Jtcy5iYWtlZFZlcnRleEFuaW1hdGlvblNldHRpbmdzLnk7bGV0IFZBVE9mZnNldEZyYW1lOiBmMzI9dW5pZm9ybXMuYmFrZWRWZXJ0ZXhBbmltYXRpb25TZXR0aW5ncy56O2xldCBWQVRTcGVlZDogZjMyPXVuaWZvcm1zLmJha2VkVmVydGV4QW5pbWF0aW9uU2V0dGluZ3MudztcbiNlbmRpZlxubGV0IHRvdGFsRnJhbWVzOiBmMzI9VkFURW5kRnJhbWUtVkFUU3RhcnRGcmFtZSsxLjA7bGV0IHRpbWU6IGYzMj11bmlmb3Jtcy5iYWtlZFZlcnRleEFuaW1hdGlvblRpbWUqVkFUU3BlZWQvdG90YWxGcmFtZXM7bGV0IGZyYW1lQ29ycmVjdGlvbjogZjMyPXNlbGVjdCgxLjAsMC4wLHRpbWU8MS4wKTtsZXQgbnVtT2ZGcmFtZXM6IGYzMj10b3RhbEZyYW1lcy1mcmFtZUNvcnJlY3Rpb247dmFyIFZBVEZyYW1lTnVtOiBmMzI9ZnJhY3QodGltZSkqbnVtT2ZGcmFtZXM7VkFURnJhbWVOdW09KFZBVEZyYW1lTnVtK1ZBVE9mZnNldEZyYW1lKSAlIG51bU9mRnJhbWVzO1ZBVEZyYW1lTnVtPWZsb29yKFZBVEZyYW1lTnVtKTtWQVRGcmFtZU51bT1WQVRGcmFtZU51bStWQVRTdGFydEZyYW1lK2ZyYW1lQ29ycmVjdGlvbjt2YXIgVkFUSW5mbHVlbmNlIDogbWF0NHg0PGYzMj47VkFUSW5mbHVlbmNlPXJlYWRNYXRyaXhGcm9tUmF3U2FtcGxlclZBVChiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1swXSxWQVRGcmFtZU51bSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1swXTtcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4xXG5WQVRJbmZsdWVuY2U9VkFUSW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlclZBVChiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1sxXSxWQVRGcmFtZU51bSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1sxXTtcbiNlbmRpZlxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjJcblZBVEluZmx1ZW5jZT1WQVRJbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyVkFUKGJha2VkVmVydGV4QW5pbWF0aW9uVGV4dHVyZSx2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzJdLFZBVEZyYW1lTnVtKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzJdO1xuI2VuZGlmXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+M1xuVkFUSW5mbHVlbmNlPVZBVEluZmx1ZW5jZStyZWFkTWF0cml4RnJvbVJhd1NhbXBsZXJWQVQoYmFrZWRWZXJ0ZXhBbmltYXRpb25UZXh0dXJlLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbM10sVkFURnJhbWVOdW0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbM107XG4jZW5kaWZcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz40XG5WQVRJbmZsdWVuY2U9VkFUSW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlclZBVChiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzBdLFZBVEZyYW1lTnVtKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMF07XG4jZW5kaWZcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz41XG5WQVRJbmZsdWVuY2U9VkFUSW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlclZBVChiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzFdLFZBVEZyYW1lTnVtKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMV07XG4jZW5kaWZcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz42XG5WQVRJbmZsdWVuY2U9VkFUSW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlclZBVChiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzJdLFZBVEZyYW1lTnVtKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMl07XG4jZW5kaWZcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz43XG5WQVRJbmZsdWVuY2U9VkFUSW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlclZBVChiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzNdLFZBVEZyYW1lTnVtKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbM107XG4jZW5kaWZcbmZpbmFsV29ybGQ9ZmluYWxXb3JsZCpWQVRJbmZsdWVuY2U7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYmFrZWRWZXJ0ZXhBbmltYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIEJBS0VEX1ZFUlRFWF9BTklNQVRJT05fVEVYVFVSRVxudW5pZm9ybSBiYWtlZFZlcnRleEFuaW1hdGlvblRpbWU6IGYzMjt1bmlmb3JtIGJha2VkVmVydGV4QW5pbWF0aW9uVGV4dHVyZVNpemVJbnZlcnRlZDogdmVjMjxmMzI+O3VuaWZvcm0gYmFrZWRWZXJ0ZXhBbmltYXRpb25TZXR0aW5nczogdmVjNDxmMzI+O3ZhciBiYWtlZFZlcnRleEFuaW1hdGlvblRleHR1cmUgOiB0ZXh0dXJlXzJkPGYzMj47XG4jaWZkZWYgSU5TVEFOQ0VTXG5hdHRyaWJ1dGUgYmFrZWRWZXJ0ZXhBbmltYXRpb25TZXR0aW5nc0luc3RhbmNlZCA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuZm4gcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyVkFUKHNtcCA6IHRleHR1cmVfMmQ8ZjMyPixpbmRleCA6IGYzMixmcmFtZSA6IGYzMiktPm1hdDR4NDxmMzI+XG57bGV0IG9mZnNldD1pMzIoaW5kZXgpKjQ7bGV0IGZyYW1lVVY9aTMyKGZyYW1lKTtsZXQgbTA9dGV4dHVyZUxvYWQoc21wLHZlYzI8aTMyPihvZmZzZXQrMCxmcmFtZVVWKSwwKTtsZXQgbTE9dGV4dHVyZUxvYWQoc21wLHZlYzI8aTMyPihvZmZzZXQrMSxmcmFtZVVWKSwwKTtsZXQgbTI9dGV4dHVyZUxvYWQoc21wLHZlYzI8aTMyPihvZmZzZXQrMixmcmFtZVVWKSwwKTtsZXQgbTM9dGV4dHVyZUxvYWQoc21wLHZlYzI8aTMyPihvZmZzZXQrMyxmcmFtZVVWKSwwKTtyZXR1cm4gbWF0NHg0PGYzMj4obTAsbTEsbTIsbTMpO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJib25lc0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjBcbmF0dHJpYnV0ZSBtYXRyaWNlc0luZGljZXMgOiB2ZWM0ZjthdHRyaWJ1dGUgbWF0cmljZXNXZWlnaHRzIDogdmVjNGY7XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NFxuYXR0cmlidXRlIG1hdHJpY2VzSW5kaWNlc0V4dHJhIDogdmVjNGY7YXR0cmlidXRlIG1hdHJpY2VzV2VpZ2h0c0V4dHJhIDogdmVjNGY7XG4jZW5kaWZcbiNpZm5kZWYgQkFLRURfVkVSVEVYX0FOSU1BVElPTl9URVhUVVJFXG4jaWZkZWYgQk9ORVRFWFRVUkVcbnZhciBib25lU2FtcGxlciA6IHRleHR1cmVfMmQ8ZjMyPjt1bmlmb3JtIGJvbmVUZXh0dXJlV2lkdGggOiBmMzI7XG4jZWxzZVxudW5pZm9ybSBtQm9uZXMgOiBhcnJheTxtYXQ0eDRmLEJvbmVzUGVyTWVzaD47XG4jZW5kaWZcbiNpZmRlZiBCT05FU19WRUxPQ0lUWV9FTkFCTEVEXG51bmlmb3JtIG1QcmV2aW91c0JvbmVzIDogYXJyYXk8bWF0NHg0ZixCb25lc1Blck1lc2g+O1xuI2VuZGlmXG4jaWZkZWYgQk9ORVRFWFRVUkVcbmZuIHJlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihzbXAgOiB0ZXh0dXJlXzJkPGYzMj4saW5kZXggOiBmMzIpLT5tYXQ0eDRmXG57bGV0IG9mZnNldD1pMzIoaW5kZXgpICo0OyBcbmxldCBtMD10ZXh0dXJlTG9hZChzbXAsdmVjMjxpMzI+KG9mZnNldCswLDApLDApO2xldCBtMT10ZXh0dXJlTG9hZChzbXAsdmVjMjxpMzI+KG9mZnNldCsxLDApLDApO2xldCBtMj10ZXh0dXJlTG9hZChzbXAsdmVjMjxpMzI+KG9mZnNldCsyLDApLDApO2xldCBtMz10ZXh0dXJlTG9hZChzbXAsdmVjMjxpMzI+KG9mZnNldCszLDApLDApO3JldHVybiBtYXQ0eDRmKG0wLG0xLG0yLG0zKTt9XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYm9uZXNEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJvbmVzVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmbmRlZiBCQUtFRF9WRVJURVhfQU5JTUFUSU9OX1RFWFRVUkVcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4wXG52YXIgaW5mbHVlbmNlIDogbWF0NHg0PGYzMj47XG4jaWZkZWYgQk9ORVRFWFRVUkVcbmluZmx1ZW5jZT1yZWFkTWF0cml4RnJvbVJhd1NhbXBsZXIoYm9uZVNhbXBsZXIsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1swXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1swXTtcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4xXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzFdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjJcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMl0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMl07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+M1xuaW5mbHVlbmNlPWluZmx1ZW5jZStyZWFkTWF0cml4RnJvbVJhd1NhbXBsZXIoYm9uZVNhbXBsZXIsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1szXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1szXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz40XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMF0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVswXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz41XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMV0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsxXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz42XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMl0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsyXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz43XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbM10pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVszXTtcbiNlbmRpZiBcbiNlbHNlIFxuaW5mbHVlbmNlPXVuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1swXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMF07XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MVxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMV0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjJcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzJdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1syXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4zXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1szXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbM107XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NFxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVswXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVswXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz41XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzFdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjZcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMl0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMl07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+N1xuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVszXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVszXTtcbiNlbmRpZiBcbiNlbmRpZlxuZmluYWxXb3JsZD1maW5hbFdvcmxkKmluZmx1ZW5jZTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYm9uZXNWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJpbnN0YW5jZXNWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgSU5TVEFOQ0VTXG52YXIgZmluYWxXb3JsZD1tYXQ0eDQ8ZjMyPih2ZXJ0ZXhJbnB1dHMud29ybGQwLHZlcnRleElucHV0cy53b3JsZDEsdmVydGV4SW5wdXRzLndvcmxkMix2ZXJ0ZXhJbnB1dHMud29ybGQzKTtcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpIHx8IGRlZmluZWQoVkVMT0NJVFlfTElORUFSKVxudmFyIGZpbmFsUHJldmlvdXNXb3JsZD1tYXQ0eDQ8ZjMyPihcbnZlcnRleElucHV0cy5wcmV2aW91c1dvcmxkMCx2ZXJ0ZXhJbnB1dHMucHJldmlvdXNXb3JsZDEsXG52ZXJ0ZXhJbnB1dHMucHJldmlvdXNXb3JsZDIsdmVydGV4SW5wdXRzLnByZXZpb3VzV29ybGQzKTtcbiNlbmRpZlxuI2lmZGVmIFRISU5fSU5TVEFOQ0VTXG4jaWYgIWRlZmluZWQoV09STERfVUJPKVxuZmluYWxXb3JsZD11bmlmb3Jtcy53b3JsZCpmaW5hbFdvcmxkO1xuI2Vsc2VcbmZpbmFsV29ybGQ9bWVzaC53b3JsZCpmaW5hbFdvcmxkO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSB8fCBkZWZpbmVkKFZFTE9DSVRZX0xJTkVBUilcbmZpbmFsUHJldmlvdXNXb3JsZD11bmlmb3Jtcy5wcmV2aW91c1dvcmxkKmZpbmFsUHJldmlvdXNXb3JsZDtcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxuI2lmICFkZWZpbmVkKFdPUkxEX1VCTylcbnZhciBmaW5hbFdvcmxkPXVuaWZvcm1zLndvcmxkO1xuI2Vsc2VcbnZhciBmaW5hbFdvcmxkPW1lc2gud29ybGQ7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpIHx8IGRlZmluZWQoVkVMT0NJVFlfTElORUFSKVxudmFyIGZpbmFsUHJldmlvdXNXb3JsZD11bmlmb3Jtcy5wcmV2aW91c1dvcmxkO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpbnN0YW5jZXNWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=