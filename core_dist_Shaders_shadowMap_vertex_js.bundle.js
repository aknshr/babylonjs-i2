"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_shadowMap_vertex_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/meshVertexDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/meshVertexDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   meshVertexDeclaration: () => (/* binding */ meshVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "meshVertexDeclaration";
const shader = `uniform mat4 world;uniform float visibility;
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const meshVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapUboDeclaration.js":
/*!**********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapUboDeclaration.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapUboDeclaration: () => (/* binding */ shadowMapUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/Shaders/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "shadowMapUboDeclaration";
const shader = `layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapVertexDeclaration.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapVertexDeclaration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexDeclaration: () => (/* binding */ shadowMapVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneVertexDeclaration.js");
/* harmony import */ var _meshVertexDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/meshVertexDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "shadowMapVertexDeclaration";
const shader = `#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapVertexExtraDeclaration.js":
/*!******************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapVertexExtraDeclaration.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexExtraDeclaration: () => (/* binding */ shadowMapVertexExtraDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapVertexExtraDeclaration";
const shader = `#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapVertexExtraDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapVertexMetric.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapVertexMetric.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexMetric: () => (/* binding */ shadowMapVertexMetric)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapVertexMetric";
const shader = `#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapVertexMetric = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowMapVertexNormalBias.js":
/*!************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowMapVertexNormalBias.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexNormalBias: () => (/* binding */ shadowMapVertexNormalBias)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowMapVertexNormalBias";
const shader = `#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowMapVertexNormalBias = { name, shader };


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

/***/ "../core/dist/Shaders/shadowMap.vertex.js":
/*!************************************************!*\
  !*** ../core/dist/Shaders/shadowMap.vertex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowMapVertexShader: () => (/* binding */ shadowMapVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/Shaders/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/shadowMapVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_shadowMapUboDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/shadowMapUboDeclaration */ "../core/dist/Shaders/ShadersInclude/shadowMapUboDeclaration.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexExtraDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexExtraDeclaration */ "../core/dist/Shaders/ShadersInclude/shadowMapVertexExtraDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/Shaders/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/Shaders/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexNormalBias__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexNormalBias */ "../core/dist/Shaders/ShadersInclude/shadowMapVertexNormalBias.js");
/* harmony import */ var _ShadersInclude_shadowMapVertexMetric__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/shadowMapVertexMetric */ "../core/dist/Shaders/ShadersInclude/shadowMapVertexMetric.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


















const name = "shadowMapVertexShader";
const shader = `attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const shadowMapVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfc2hhZG93TWFwX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL21lc2hWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwVWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhFeHRyYURlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhNZXRyaWMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleE5vcm1hbEJpYXMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL3NoYWRvd01hcC52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1lc2hWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gbWF0NCB3b3JsZDt1bmlmb3JtIGZsb2F0IHZpc2liaWxpdHk7XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1lc2hWZXJ0ZXhEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2NlbmVVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9tZXNoVWJvRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwic2hhZG93TWFwVWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGBsYXlvdXQoc3RkMTQwLGNvbHVtbl9tYWpvcikgdW5pZm9ybTtcbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcFVib0RlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpbmNsdWRlPHNjZW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVmVydGV4RGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcFZlcnRleERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzaGFkb3dNYXBWZXJ0ZXhFeHRyYURlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIFNNX05PUk1BTEJJQVM9PTFcbnVuaWZvcm0gdmVjMyBsaWdodERhdGFTTTtcbiNlbmRpZlxudW5pZm9ybSB2ZWMzIGJpYXNBbmRTY2FsZVNNO3VuaWZvcm0gdmVjMiBkZXB0aFZhbHVlc1NNO3ZhcnlpbmcgZmxvYXQgdkRlcHRoTWV0cmljU007XG4jaWYgU01fVVNFRElTVEFOQ0U9PTFcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb25XU007XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFNNX0RFUFRIQ0xBTVApICYmIFNNX0RFUFRIQ0xBTVA9PTFcbnZhcnlpbmcgZmxvYXQgelNNO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFZlcnRleE1ldHJpY1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBTTV9VU0VESVNUQU5DRT09MVxudlBvc2l0aW9uV1NNPXdvcmxkUG9zLnh5ejtcbiNlbmRpZlxuI2lmIFNNX0RFUFRIVEVYVFVSRT09MVxuI2lmZGVmIElTX05EQ19IQUxGX1pSQU5HRVxuI2RlZmluZSBCSUFTRkFDVE9SIDAuNVxuI2Vsc2VcbiNkZWZpbmUgQklBU0ZBQ1RPUiAxLjBcbiNlbmRpZlxuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG5nbF9Qb3NpdGlvbi56LT1iaWFzQW5kU2NhbGVTTS54KmdsX1Bvc2l0aW9uLncqQklBU0ZBQ1RPUjtcbiNlbHNlXG5nbF9Qb3NpdGlvbi56Kz1iaWFzQW5kU2NhbGVTTS54KmdsX1Bvc2l0aW9uLncqQklBU0ZBQ1RPUjtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChTTV9ERVBUSENMQU1QKSAmJiBTTV9ERVBUSENMQU1QPT0xXG56U009Z2xfUG9zaXRpb24uejtnbF9Qb3NpdGlvbi56PTAuMDtcbiNlbGlmIFNNX1VTRURJU1RBTkNFPT0wXG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZEZXB0aE1ldHJpY1NNPSgtZ2xfUG9zaXRpb24ueitkZXB0aFZhbHVlc1NNLngpL2RlcHRoVmFsdWVzU00ueStiaWFzQW5kU2NhbGVTTS54O1xuI2Vsc2VcbnZEZXB0aE1ldHJpY1NNPShnbF9Qb3NpdGlvbi56K2RlcHRoVmFsdWVzU00ueCkvZGVwdGhWYWx1ZXNTTS55K2JpYXNBbmRTY2FsZVNNLng7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBWZXJ0ZXhNZXRyaWMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFZlcnRleE5vcm1hbEJpYXNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgU01fTk9STUFMQklBUz09MVxuI2lmIFNNX0RJUkVDVElPTklOTElHSFREQVRBPT0xXG52ZWMzIHdvcmxkTGlnaHREaXJTTT1ub3JtYWxpemUoLWxpZ2h0RGF0YVNNLnh5eik7XG4jZWxzZVxudmVjMyBkaXJlY3Rpb25Ub0xpZ2h0U009bGlnaHREYXRhU00ueHl6LXdvcmxkUG9zLnh5ejt2ZWMzIHdvcmxkTGlnaHREaXJTTT1ub3JtYWxpemUoZGlyZWN0aW9uVG9MaWdodFNNKTtcbiNlbmRpZlxuZmxvYXQgbmRsU009ZG90KHZOb3JtYWxXLHdvcmxkTGlnaHREaXJTTSk7ZmxvYXQgc2luTkxTTT1zcXJ0KDEuMC1uZGxTTSpuZGxTTSk7ZmxvYXQgbm9ybWFsQmlhc1NNPWJpYXNBbmRTY2FsZVNNLnkqc2luTkxTTTt3b3JsZFBvcy54eXotPXZOb3JtYWxXKm5vcm1hbEJpYXNTTTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBWZXJ0ZXhOb3JtYWxCaWFzID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd01hcFZlcnRleEV4dHJhRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93TWFwVmVydGV4Tm9ybWFsQmlhc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dNYXBWZXJ0ZXhNZXRyaWNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4XCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd01hcFZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xuI2VuZGlmXG4jaW5jbHVkZTxib25lc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpZmRlZiBJTlNUQU5DRVNcbmF0dHJpYnV0ZSB2ZWM0IHdvcmxkMDthdHRyaWJ1dGUgdmVjNCB3b3JsZDE7YXR0cmlidXRlIHZlYzQgd29ybGQyO2F0dHJpYnV0ZSB2ZWM0IHdvcmxkMztcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8X19kZWNsX19zaGFkb3dNYXBWZXJ0ZXg+XG4jaWZkZWYgQUxQSEFURVhUVVJFXG52YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gbWF0NCBkaWZmdXNlTWF0cml4O1xuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHZlYzIgdXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbmF0dHJpYnV0ZSB2ZWMyIHV2MjtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxzaGFkb3dNYXBWZXJ0ZXhFeHRyYURlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKVxue3ZlYzMgcG9zaXRpb25VcGRhdGVkPXBvc2l0aW9uO1xuI2lmZGVmIFVWMVxudmVjMiB1dlVwZGF0ZWQ9dXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZlYzIgdXYyVXBkYXRlZD11djI7XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZlYzMgbm9ybWFsVXBkYXRlZD1ub3JtYWw7XG4jZW5kaWZcbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbD5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbnZlYzQgd29ybGRQb3M9ZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uVXBkYXRlZCwxLjApO1xuI2lmZGVmIE5PUk1BTFxubWF0MyBub3JtV29ybGRTTT1tYXQzKGZpbmFsV29ybGQpO1xuI2lmIGRlZmluZWQoSU5TVEFOQ0VTKSAmJiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKVxudmVjMyB2Tm9ybWFsVz1ub3JtYWxVcGRhdGVkL3ZlYzMoZG90KG5vcm1Xb3JsZFNNWzBdLG5vcm1Xb3JsZFNNWzBdKSxkb3Qobm9ybVdvcmxkU01bMV0sbm9ybVdvcmxkU01bMV0pLGRvdChub3JtV29ybGRTTVsyXSxub3JtV29ybGRTTVsyXSkpO3ZOb3JtYWxXPW5vcm1hbGl6ZShub3JtV29ybGRTTSp2Tm9ybWFsVyk7XG4jZWxzZVxuI2lmZGVmIE5PTlVOSUZPUk1TQ0FMSU5HXG5ub3JtV29ybGRTTT10cmFuc3Bvc2VNYXQzKGludmVyc2VNYXQzKG5vcm1Xb3JsZFNNKSk7XG4jZW5kaWZcbnZlYzMgdk5vcm1hbFc9bm9ybWFsaXplKG5vcm1Xb3JsZFNNKm5vcm1hbFVwZGF0ZWQpO1xuI2VuZGlmXG4jZW5kaWZcbiNpbmNsdWRlPHNoYWRvd01hcFZlcnRleE5vcm1hbEJpYXM+XG5nbF9Qb3NpdGlvbj12aWV3UHJvamVjdGlvbip3b3JsZFBvcztcbiNpbmNsdWRlPHNoYWRvd01hcFZlcnRleE1ldHJpYz5cbiNpZmRlZiBBTFBIQVRFWFRVUkVcbiNpZmRlZiBVVjFcbnZVVj12ZWMyKGRpZmZ1c2VNYXRyaXgqdmVjNCh1dlVwZGF0ZWQsMS4wLDAuMCkpO1xuI2VuZGlmXG4jaWZkZWYgVVYyXG52VVY9dmVjMihkaWZmdXNlTWF0cml4KnZlYzQodXYyVXBkYXRlZCwxLjAsMC4wKSk7XG4jZW5kaWZcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzaGFkb3dNYXBWZXJ0ZXhTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==