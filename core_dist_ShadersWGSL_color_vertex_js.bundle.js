"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_color_vertex_js"],{

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

/***/ }),

/***/ "../core/dist/ShadersWGSL/color.vertex.js":
/*!************************************************!*\
  !*** ../core/dist/ShadersWGSL/color.vertex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorVertexShaderWGSL: () => (/* binding */ colorVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_vertexColorMixing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/vertexColorMixing */ "../core/dist/ShadersWGSL/ShadersInclude/vertexColorMixing.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.












const name = "colorVertexShader";
const shader = `attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const colorVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2NvbG9yX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS92ZXJ0ZXhDb2xvck1peGluZy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML2NvbG9yLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm9uZXNEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4wXG5hdHRyaWJ1dGUgbWF0cmljZXNJbmRpY2VzIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBtYXRyaWNlc1dlaWdodHMgOiB2ZWM0PGYzMj47XG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NFxuYXR0cmlidXRlIG1hdHJpY2VzSW5kaWNlc0V4dHJhIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBtYXRyaWNlc1dlaWdodHNFeHRyYSA6IHZlYzQ8ZjMyPjtcbiNlbmRpZlxuI2lmbmRlZiBCQUtFRF9WRVJURVhfQU5JTUFUSU9OX1RFWFRVUkVcbiNpZmRlZiBCT05FVEVYVFVSRVxudmFyIGJvbmVTYW1wbGVyIDogdGV4dHVyZV8yZDxmMzI+O3VuaWZvcm0gYm9uZVRleHR1cmVXaWR0aCA6IGYzMjtcbiNlbHNlXG51bmlmb3JtIG1Cb25lcyA6IGFycmF5PG1hdDR4NGYsQm9uZXNQZXJNZXNoPjtcbiNlbmRpZlxuI2lmZGVmIEJPTkVTX1ZFTE9DSVRZX0VOQUJMRURcbnVuaWZvcm0gbVByZXZpb3VzQm9uZXMgOiBhcnJheTxtYXQ0eDRmLEJvbmVzUGVyTWVzaD47XG4jZW5kaWZcbiNpZmRlZiBCT05FVEVYVFVSRVxuZm4gcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKHNtcCA6IHRleHR1cmVfMmQ8ZjMyPixpbmRleCA6IGYzMiktPm1hdDR4NGZcbntsZXQgb2Zmc2V0PWkzMihpbmRleCkgKjQ7IFxubGV0IG0wPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzAsMCksMCk7bGV0IG0xPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzEsMCksMCk7bGV0IG0yPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzIsMCksMCk7bGV0IG0zPXRleHR1cmVMb2FkKHNtcCx2ZWMyPGkzMj4ob2Zmc2V0KzMsMCksMCk7cmV0dXJuIG1hdDR4NGYobTAsbTEsbTIsbTMpO31cbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib25lc0RlY2xhcmF0aW9uV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm9uZXNWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZuZGVmIEJBS0VEX1ZFUlRFWF9BTklNQVRJT05fVEVYVFVSRVxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjBcbnZhciBpbmZsdWVuY2UgOiBtYXQ0eDQ8ZjMyPjtcbiNpZmRlZiBCT05FVEVYVFVSRVxuaW5mbHVlbmNlPXJlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzBdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzBdO1xuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjFcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMV0pKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxuaW5mbHVlbmNlPWluZmx1ZW5jZStyZWFkTWF0cml4RnJvbVJhd1NhbXBsZXIoYm9uZVNhbXBsZXIsdmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1syXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1syXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4zXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3JlYWRNYXRyaXhGcm9tUmF3U2FtcGxlcihib25lU2FtcGxlcix2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzNdKSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzNdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjRcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVswXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsxXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzFdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjZcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjdcbmluZmx1ZW5jZT1pbmZsdWVuY2UrcmVhZE1hdHJpeEZyb21SYXdTYW1wbGVyKGJvbmVTYW1wbGVyLHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVszXSkqdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmIFxuI2Vsc2UgXG5pbmZsdWVuY2U9dW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1swXTtcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz4xXG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc1sxXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+MlxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNbMl0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzWzJdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjNcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c1szXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz40XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzBdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzBdO1xuI2VuZGlmIFxuI2lmIE5VTV9CT05FX0lORkxVRU5DRVJTPjVcbmluZmx1ZW5jZT1pbmZsdWVuY2UrdW5pZm9ybXMubUJvbmVzW2kzMih2ZXJ0ZXhJbnB1dHMubWF0cmljZXNJbmRpY2VzRXh0cmFbMV0pXSp2ZXJ0ZXhJbnB1dHMubWF0cmljZXNXZWlnaHRzRXh0cmFbMV07XG4jZW5kaWYgXG4jaWYgTlVNX0JPTkVfSU5GTFVFTkNFUlM+NlxuaW5mbHVlbmNlPWluZmx1ZW5jZSt1bmlmb3Jtcy5tQm9uZXNbaTMyKHZlcnRleElucHV0cy5tYXRyaWNlc0luZGljZXNFeHRyYVsyXSldKnZlcnRleElucHV0cy5tYXRyaWNlc1dlaWdodHNFeHRyYVsyXTtcbiNlbmRpZiBcbiNpZiBOVU1fQk9ORV9JTkZMVUVOQ0VSUz43XG5pbmZsdWVuY2U9aW5mbHVlbmNlK3VuaWZvcm1zLm1Cb25lc1tpMzIodmVydGV4SW5wdXRzLm1hdHJpY2VzSW5kaWNlc0V4dHJhWzNdKV0qdmVydGV4SW5wdXRzLm1hdHJpY2VzV2VpZ2h0c0V4dHJhWzNdO1xuI2VuZGlmIFxuI2VuZGlmXG5maW5hbFdvcmxkPWZpbmFsV29ybGQqaW5mbHVlbmNlO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib25lc1ZlcnRleFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInZlcnRleENvbG9yTWl4aW5nXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxudmVydGV4T3V0cHV0cy52Q29sb3I9dmVjNGYoMS4wKTtcbiNpZmRlZiBWRVJURVhDT0xPUlxuI2lmZGVmIFZFUlRFWEFMUEhBXG52ZXJ0ZXhPdXRwdXRzLnZDb2xvcio9dmVydGV4SW5wdXRzLmNvbG9yO1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkNvbG9yPXZlYzRmKHZlcnRleE91dHB1dHMudkNvbG9yLnJnYip2ZXJ0ZXhJbnB1dHMuY29sb3IucmdiLHZlcnRleE91dHB1dHMudkNvbG9yLmEpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBJTlNUQU5DRVNDT0xPUlxudmVydGV4T3V0cHV0cy52Q29sb3IqPXZlcnRleElucHV0cy5pbnN0YW5jZUNvbG9yO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCB2ZXJ0ZXhDb2xvck1peGluZ1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS92ZXJ0ZXhDb2xvck1peGluZ1wiO1xuXG5jb25zdCBuYW1lID0gXCJjb2xvclZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7XG4jaWZkZWYgVkVSVEVYQ09MT1JcbmF0dHJpYnV0ZSBjb2xvcjogdmVjNGY7XG4jZW5kaWZcbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpZmRlZiBGT0dcbnVuaWZvcm0gdmlldzogbWF0NHg0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG51bmlmb3JtIHZpZXdQcm9qZWN0aW9uOiBtYXQ0eDRmO1xuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxudmFyeWluZyB2Q29sb3I6IHZlYzRmO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQgOiBWZXJ0ZXhJbnB1dHMpLT5GcmFnbWVudElucHV0cyB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxuI2lmZGVmIFZFUlRFWENPTE9SXG52YXIgY29sb3JVcGRhdGVkOiB2ZWM0Zj12ZXJ0ZXhJbnB1dHMuY29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbiNpbmNsdWRlPGJvbmVzVmVydGV4PlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb24+XG52YXIgd29ybGRQb3M6IHZlYzRmPWZpbmFsV29ybGQqIHZlYzRmKGlucHV0LnBvc2l0aW9uLDEuMCk7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj11bmlmb3Jtcy52aWV3UHJvamVjdGlvbip3b3JsZFBvcztcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPHZlcnRleENvbG9yTWl4aW5nPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgY29sb3JWZXJ0ZXhTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==