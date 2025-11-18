"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_shadowMap_vertex_js"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3NoYWRvd01hcF92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhNZXRyaWMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhOb3JtYWxCaWFzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvc2hhZG93TWFwLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwVmVydGV4RXh0cmFEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBTTV9OT1JNQUxCSUFTPT0xXG51bmlmb3JtIGxpZ2h0RGF0YVNNOiB2ZWMzZjtcbiNlbmRpZlxudW5pZm9ybSBiaWFzQW5kU2NhbGVTTTogdmVjM2Y7dW5pZm9ybSBkZXB0aFZhbHVlc1NNOiB2ZWMyZjt2YXJ5aW5nIHZEZXB0aE1ldHJpY1NNOiBmMzI7XG4jaWYgU01fVVNFRElTVEFOQ0U9PTFcbnZhcnlpbmcgdlBvc2l0aW9uV1NNOiB2ZWMzZjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoU01fREVQVEhDTEFNUCkgJiYgU01fREVQVEhDTEFNUD09MVxudmFyeWluZyB6U006IGYzMjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBWZXJ0ZXhNZXRyaWNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgU01fVVNFRElTVEFOQ0U9PTFcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uV1NNPXdvcmxkUG9zLnh5ejtcbiNlbmRpZlxuI2lmIFNNX0RFUFRIVEVYVFVSRT09MVxuI2lmZGVmIElTX05EQ19IQUxGX1pSQU5HRVxuI2RlZmluZSBCSUFTRkFDVE9SIDAuNVxuI2Vsc2VcbiNkZWZpbmUgQklBU0ZBQ1RPUiAxLjBcbiNlbmRpZlxuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLnotPXVuaWZvcm1zLmJpYXNBbmRTY2FsZVNNLngqdmVydGV4T3V0cHV0cy5wb3NpdGlvbi53KkJJQVNGQUNUT1I7XG4jZWxzZVxudmVydGV4T3V0cHV0cy5wb3NpdGlvbi56Kz11bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54KnZlcnRleE91dHB1dHMucG9zaXRpb24udypCSUFTRkFDVE9SO1xuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNNX0RFUFRIQ0xBTVApICYmIFNNX0RFUFRIQ0xBTVA9PTFcbnZlcnRleE91dHB1dHMuelNNPXZlcnRleE91dHB1dHMucG9zaXRpb24uejt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLno9MC4wO1xuI2VsaWYgU01fVVNFRElTVEFOQ0U9PTBcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudmVydGV4T3V0cHV0cy52RGVwdGhNZXRyaWNTTT0oLXZlcnRleE91dHB1dHMucG9zaXRpb24ueit1bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLngpL3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueSt1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54O1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudkRlcHRoTWV0cmljU009KHZlcnRleE91dHB1dHMucG9zaXRpb24ueit1bmlmb3Jtcy5kZXB0aFZhbHVlc1NNLngpL3VuaWZvcm1zLmRlcHRoVmFsdWVzU00ueSt1bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS54O1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBWZXJ0ZXhNZXRyaWNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBWZXJ0ZXhOb3JtYWxCaWFzXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIFNNX05PUk1BTEJJQVM9PTFcbiNpZiBTTV9ESVJFQ1RJT05JTkxJR0hUREFUQT09MVxudmFyIHdvcmxkTGlnaHREaXJTTTogdmVjM2Y9bm9ybWFsaXplKC11bmlmb3Jtcy5saWdodERhdGFTTS54eXopO1xuI2Vsc2VcbnZhciBkaXJlY3Rpb25Ub0xpZ2h0U006IHZlYzNmPXVuaWZvcm1zLmxpZ2h0RGF0YVNNLnh5ei13b3JsZFBvcy54eXo7dmFyIHdvcmxkTGlnaHREaXJTTTogdmVjM2Y9bm9ybWFsaXplKGRpcmVjdGlvblRvTGlnaHRTTSk7XG4jZW5kaWZcbnZhciBuZGxTTTogZjMyPWRvdCh2Tm9ybWFsVyx3b3JsZExpZ2h0RGlyU00pO3ZhciBzaW5OTFNNOiBmMzI9c3FydCgxLjAtbmRsU00qbmRsU00pO3ZhciBub3JtYWxCaWFzU006IGYzMj11bmlmb3Jtcy5iaWFzQW5kU2NhbGVTTS55KnNpbk5MU007d29ybGRQb3M9dmVjNGYod29ybGRQb3MueHl6LXZOb3JtYWxXKm5vcm1hbEJpYXNTTSx3b3JsZFBvcy53KTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcFZlcnRleE5vcm1hbEJpYXNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwVmVydGV4Tm9ybWFsQmlhc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhNZXRyaWNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4XCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFsOiB2ZWMzZjtcbiNlbmRpZlxuI2luY2x1ZGU8Ym9uZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgSU5TVEFOQ0VTXG5hdHRyaWJ1dGUgd29ybGQwOiB2ZWM0ZjthdHRyaWJ1dGUgd29ybGQxOiB2ZWM0ZjthdHRyaWJ1dGUgd29ybGQyOiB2ZWM0ZjthdHRyaWJ1dGUgd29ybGQzOiB2ZWM0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbiNpZmRlZiBBTFBIQVRFWFRVUkVcbnZhcnlpbmcgdlVWOiB2ZWMyZjt1bmlmb3JtIGRpZmZ1c2VNYXRyaXg6IG1hdDR4NGY7XG4jaWZkZWYgVVYxXG5hdHRyaWJ1dGUgdXY6IHZlYzJmO1xuI2VuZGlmXG4jaWZkZWYgVVYyXG5hdHRyaWJ1dGUgdXYyOiB2ZWMyZjtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxzaGFkb3dNYXBWZXJ0ZXhFeHRyYURlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQgOiBWZXJ0ZXhJbnB1dHMpLT5GcmFnbWVudElucHV0cyB7dmFyIHBvc2l0aW9uVXBkYXRlZDogdmVjM2Y9aW5wdXQucG9zaXRpb247XG4jaWZkZWYgVVYxXG52YXIgdXZVcGRhdGVkOiB2ZWMyZj1pbnB1dC51djtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPWlucHV0LnV2MjtcbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFVwZGF0ZWQ6IHZlYzNmPWlucHV0Lm5vcm1hbDtcbiNlbmRpZlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaW5jbHVkZTxpbnN0YW5jZXNWZXJ0ZXg+XG4jaW5jbHVkZTxib25lc1ZlcnRleD5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uPlxudmFyIHdvcmxkUG9zOiB2ZWM0Zj1maW5hbFdvcmxkKiB2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNpZmRlZiBOT1JNQUxcbnZhciBub3JtV29ybGRTTTogbWF0M3gzZj0gbWF0M3gzZihmaW5hbFdvcmxkWzBdLnh5eixmaW5hbFdvcmxkWzFdLnh5eixmaW5hbFdvcmxkWzJdLnh5eik7XG4jaWYgZGVmaW5lZChJTlNUQU5DRVMpICYmIGRlZmluZWQoVEhJTl9JTlNUQU5DRVMpXG52YXIgdk5vcm1hbFc6IHZlYzNmPW5vcm1hbFVwZGF0ZWQvIHZlYzNmKGRvdChub3JtV29ybGRTTVswXSxub3JtV29ybGRTTVswXSksZG90KG5vcm1Xb3JsZFNNWzFdLG5vcm1Xb3JsZFNNWzFdKSxkb3Qobm9ybVdvcmxkU01bMl0sbm9ybVdvcmxkU01bMl0pKTt2Tm9ybWFsVz1ub3JtYWxpemUobm9ybVdvcmxkU00qdk5vcm1hbFcpO1xuI2Vsc2VcbiNpZmRlZiBOT05VTklGT1JNU0NBTElOR1xubm9ybVdvcmxkU009dHJhbnNwb3NlTWF0MyhpbnZlcnNlTWF0Myhub3JtV29ybGRTTSkpO1xuI2VuZGlmXG52YXIgdk5vcm1hbFc6IHZlYzNmPW5vcm1hbGl6ZShub3JtV29ybGRTTSpub3JtYWxVcGRhdGVkKTtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxzaGFkb3dNYXBWZXJ0ZXhOb3JtYWxCaWFzPlxudmVydGV4T3V0cHV0cy5wb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvbip3b3JsZFBvcztcbiNpbmNsdWRlPHNoYWRvd01hcFZlcnRleE1ldHJpYz5cbiNpZmRlZiBBTFBIQVRFWFRVUkVcbiNpZmRlZiBVVjFcbnZlcnRleE91dHB1dHMudlVWPSAodW5pZm9ybXMuZGlmZnVzZU1hdHJpeCogdmVjNGYodXZVcGRhdGVkLDEuMCwwLjApKS54eTtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmVydGV4T3V0cHV0cy52VVY9ICh1bmlmb3Jtcy5kaWZmdXNlTWF0cml4KiB2ZWM0Zih1djJVcGRhdGVkLDEuMCwwLjApKS54eTtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXg+XG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2hhZG93TWFwVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=