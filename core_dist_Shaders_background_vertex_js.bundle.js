"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_background_vertex_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/backgroundUboDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/backgroundUboDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundUboDeclaration: () => (/* binding */ backgroundUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "backgroundUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{uniform vec4 vPrimaryColor;uniform vec4 vPrimaryColorShadow;uniform vec2 vDiffuseInfos;uniform mat4 diffuseMatrix;uniform float fFovMultiplier;uniform float pointSize;uniform float shadowLevel;uniform float alpha;uniform vec3 vBackgroundCenter;uniform vec4 vReflectionControl;uniform vec2 projectedGroundInfos;uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;};
#include<sceneUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const backgroundUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/backgroundVertexDeclaration.js":
/*!**************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/backgroundVertexDeclaration.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundVertexDeclaration: () => (/* binding */ backgroundVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "backgroundVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform float shadowLevel;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const backgroundVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/lightVxFragmentDeclaration.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/lightVxFragmentDeclaration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxFragmentDeclaration: () => (/* binding */ lightVxFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightVxFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
uniform vec4 vLightWidth{X};uniform vec4 vLightHeight{X};
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const lightVxFragmentDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/lightVxUboDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/lightVxUboDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightVxUboDeclaration: () => (/* binding */ lightVxUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightVxUboDeclaration";
const shader = `#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#elif defined(CLUSTLIGHT{X})
vec2 vSliceData;vec2 vSliceRanges[CLUSTLIGHT_SLICES];
#endif
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec4 vLightWidth;vec4 vLightHeight;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const lightVxUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/shadowsVertex.js":
/*!************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/shadowsVertex.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowsVertex: () => (/* binding */ shadowsVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "shadowsVertex";
const shader = `#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const shadowsVertex = { name, shader };


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

/***/ "../core/dist/Shaders/background.vertex.js":
/*!*************************************************!*\
  !*** ../core/dist/Shaders/background.vertex.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundVertexShader: () => (/* binding */ backgroundVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_backgroundVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/backgroundVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/backgroundVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_backgroundUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/backgroundUboDeclaration */ "../core/dist/Shaders/ShadersInclude/backgroundUboDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/Shaders/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/Shaders/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxFragmentDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/lightVxFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightVxFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/lightVxUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightVxUboDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/Shaders/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/Shaders/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/Shaders/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/Shaders/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



















const name = "backgroundVertexShader";
const shader = `precision highp float;
#include<__decl__backgroundVertex>
#include<helperFunctions>
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vec2 vDiffuseUV;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*finalWorld*vec4(position,1.0);} else {gl_Position=viewProjectionR*finalWorld*vec4(position,1.0);}
#else
gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#endif
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(position,0.0)));
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
mat3 screenToWorld=inverseMat3(mat3(finalWorld*viewProjection));vec3 segment=mix(vDirectionW,screenToWorld*vec3(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vDirectionW=normalize(segment);} else {vDirectionW=normalize(vDirectionW+(vDirectionW-segment));}
#endif
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uv;
#endif
#ifdef MAINUV2
vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vColor=colorUpdated;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const backgroundVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfYmFja2dyb3VuZF92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYmFja2dyb3VuZFVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9iYWNrZ3JvdW5kVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhGcmFnbWVudERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9saWdodFZ4VWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL2JhY2tncm91bmQudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJhY2tncm91bmRVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYGxheW91dChzdGQxNDAsY29sdW1uX21ham9yKSB1bmlmb3JtO3VuaWZvcm0gTWF0ZXJpYWxcbnt1bmlmb3JtIHZlYzQgdlByaW1hcnlDb2xvcjt1bmlmb3JtIHZlYzQgdlByaW1hcnlDb2xvclNoYWRvdzt1bmlmb3JtIHZlYzIgdkRpZmZ1c2VJbmZvczt1bmlmb3JtIG1hdDQgZGlmZnVzZU1hdHJpeDt1bmlmb3JtIGZsb2F0IGZGb3ZNdWx0aXBsaWVyO3VuaWZvcm0gZmxvYXQgcG9pbnRTaXplO3VuaWZvcm0gZmxvYXQgc2hhZG93TGV2ZWw7dW5pZm9ybSBmbG9hdCBhbHBoYTt1bmlmb3JtIHZlYzMgdkJhY2tncm91bmRDZW50ZXI7dW5pZm9ybSB2ZWM0IHZSZWZsZWN0aW9uQ29udHJvbDt1bmlmb3JtIHZlYzIgcHJvamVjdGVkR3JvdW5kSW5mb3M7dW5pZm9ybSB2ZWMyIHZSZWZsZWN0aW9uSW5mb3M7dW5pZm9ybSBtYXQ0IHJlZmxlY3Rpb25NYXRyaXg7dW5pZm9ybSB2ZWMzIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M7fTtcbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRVYm9EZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYmFja2dyb3VuZFZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBtYXQ0IHZpZXc7dW5pZm9ybSBtYXQ0IHZpZXdQcm9qZWN0aW9uO1xuI2lmZGVmIE1VTFRJVklFV1xudW5pZm9ybSBtYXQ0IHZpZXdQcm9qZWN0aW9uUjtcbiNlbmRpZlxudW5pZm9ybSBmbG9hdCBzaGFkb3dMZXZlbDtcbiNpZmRlZiBESUZGVVNFXG51bmlmb3JtIG1hdDQgZGlmZnVzZU1hdHJpeDt1bmlmb3JtIHZlYzIgdkRpZmZ1c2VJbmZvcztcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05cbnVuaWZvcm0gdmVjMiB2UmVmbGVjdGlvbkluZm9zO3VuaWZvcm0gbWF0NCByZWZsZWN0aW9uTWF0cml4O3VuaWZvcm0gdmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO3VuaWZvcm0gZmxvYXQgZkZvdk11bHRpcGxpZXI7XG4jZW5kaWZcbiNpZmRlZiBQT0lOVFNJWkVcbnVuaWZvcm0gZmxvYXQgcG9pbnRTaXplO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRWZXJ0ZXhEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbnVuaWZvcm0gdmVjNCB2TGlnaHREYXRhe1h9O3VuaWZvcm0gdmVjNCB2TGlnaHREaWZmdXNle1h9O1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudW5pZm9ybSB2ZWM0IHZMaWdodFNwZWN1bGFye1h9O1xuI2Vsc2VcbnZlYzQgdkxpZ2h0U3BlY3VsYXJ7WH09dmVjNCgwLik7XG4jZW5kaWZcbiNpZmRlZiBTSEFET1d7WH1cbiNpZmRlZiBTSEFET1dDU017WH1cbnVuaWZvcm0gbWF0NCBsaWdodE1hdHJpeHtYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHR7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt2YXJ5aW5nIGZsb2F0IHZEZXB0aE1ldHJpY3tYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tQ2FtZXJhe1h9O1xuI2VsaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuI2Vsc2VcbnZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHR7WH07dmFyeWluZyBmbG9hdCB2RGVwdGhNZXRyaWN7WH07dW5pZm9ybSBtYXQ0IGxpZ2h0TWF0cml4e1h9O1xuI2VuZGlmXG51bmlmb3JtIHZlYzQgc2hhZG93c0luZm97WH07dW5pZm9ybSB2ZWMyIGRlcHRoVmFsdWVze1h9O1xuI2VuZGlmXG4jaWZkZWYgU1BPVExJR0hUe1h9XG51bmlmb3JtIHZlYzQgdkxpZ2h0RGlyZWN0aW9ue1h9O3VuaWZvcm0gdmVjNCB2TGlnaHRGYWxsb2Zme1h9O1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxudW5pZm9ybSB2ZWM0IHZMaWdodEZhbGxvZmZ7WH07XG4jZWxpZiBkZWZpbmVkKEhFTUlMSUdIVHtYfSlcbnVuaWZvcm0gdmVjMyB2TGlnaHRHcm91bmR7WH07XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbnVuaWZvcm0gdmVjNCB2TGlnaHRXaWR0aHtYfTt1bmlmb3JtIHZlYzQgdkxpZ2h0SGVpZ2h0e1h9O1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMSUdIVHtYfVxudW5pZm9ybSBMaWdodHtYfVxue3ZlYzQgdkxpZ2h0RGF0YTt2ZWM0IHZMaWdodERpZmZ1c2U7dmVjNCB2TGlnaHRTcGVjdWxhcjtcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnZlYzQgdkxpZ2h0RGlyZWN0aW9uO3ZlYzQgdkxpZ2h0RmFsbG9mZjtcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbnZlYzQgdkxpZ2h0RmFsbG9mZjtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxudmVjMyB2TGlnaHRHcm91bmQ7XG4jZWxpZiBkZWZpbmVkKENMVVNUTElHSFR7WH0pXG52ZWMyIHZTbGljZURhdGE7dmVjMiB2U2xpY2VSYW5nZXNbQ0xVU1RMSUdIVF9TTElDRVNdO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG52ZWM0IHZMaWdodFdpZHRoO3ZlYzQgdkxpZ2h0SGVpZ2h0O1xuI2VuZGlmXG52ZWM0IHNoYWRvd3NJbmZvO3ZlYzIgZGVwdGhWYWx1ZXM7fSBsaWdodHtYfTtcbiNpZmRlZiBTSEFET1d7WH1cbiNpZmRlZiBTSEFET1dDU017WH1cbnVuaWZvcm0gbWF0NCBsaWdodE1hdHJpeHtYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHR7WH1bU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9XTt2YXJ5aW5nIGZsb2F0IHZEZXB0aE1ldHJpY3tYfVtTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH1dO3ZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tQ2FtZXJhe1h9O1xuI2VsaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuI2Vsc2VcbnZhcnlpbmcgdmVjNCB2UG9zaXRpb25Gcm9tTGlnaHR7WH07dmFyeWluZyBmbG9hdCB2RGVwdGhNZXRyaWN7WH07dW5pZm9ybSBtYXQ0IGxpZ2h0TWF0cml4e1h9O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodFZ4VWJvRGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNoYWRvd3NWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgU0hBRE9XU1xuI2lmIGRlZmluZWQoU0hBRE9XQ1NNe1h9KVxudlBvc2l0aW9uRnJvbUNhbWVyYXtYfT12aWV3KndvcmxkUG9zO2ZvciAoaW50IGk9MDsgaTxTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH07IGkrKykge3ZQb3NpdGlvbkZyb21MaWdodHtYfVtpXT1saWdodE1hdHJpeHtYfVtpXSp3b3JsZFBvcztcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxudkRlcHRoTWV0cmlje1h9W2ldPSgtdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2ldLnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbHNlXG52RGVwdGhNZXRyaWN7WH1baV09KHZQb3NpdGlvbkZyb21MaWdodHtYfVtpXS56K2xpZ2h0e1h9LmRlcHRoVmFsdWVzLngpL2xpZ2h0e1h9LmRlcHRoVmFsdWVzLnk7XG4jZW5kaWZcbn1cbiNlbGlmIGRlZmluZWQoU0hBRE9Xe1h9KSAmJiAhZGVmaW5lZChTSEFET1dDVUJFe1h9KVxudlBvc2l0aW9uRnJvbUxpZ2h0e1h9PWxpZ2h0TWF0cml4e1h9KndvcmxkUG9zO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG52RGVwdGhNZXRyaWN7WH09KC12UG9zaXRpb25Gcm9tTGlnaHR7WH0ueitsaWdodHtYfS5kZXB0aFZhbHVlcy54KS9saWdodHtYfS5kZXB0aFZhbHVlcy55O1xuI2Vsc2VcbnZEZXB0aE1ldHJpY3tYfT0odlBvc2l0aW9uRnJvbUxpZ2h0e1h9LnorbGlnaHR7WH0uZGVwdGhWYWx1ZXMueCkvbGlnaHR7WH0uZGVwdGhWYWx1ZXMueTtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2hhZG93c1ZlcnRleCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFja2dyb3VuZFZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JhY2tncm91bmRVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwiYmFja2dyb3VuZFZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiNpbmNsdWRlPF9fZGVjbF9fYmFja2dyb3VuZFZlcnRleD5cbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xuI2VuZGlmXG4jaW5jbHVkZTxib25lc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGluc3RhbmNlc0RlY2xhcmF0aW9uPlxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblc7XG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZlYzMgdk5vcm1hbFc7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xuI2VuZGlmXG4jaWZkZWYgVVYyXG5hdHRyaWJ1dGUgdmVjMiB1djI7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYxXG52YXJ5aW5nIHZlYzIgdk1haW5VVjE7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYyXG52YXJ5aW5nIHZlYzIgdk1haW5VVjI7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKERJRkZVU0UpICYmIERJRkZVU0VESVJFQ1RVVj09MFxudmFyeWluZyB2ZWMyIHZEaWZmdXNlVVY7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxfX2RlY2xfX2xpZ2h0VnhGcmFnbWVudD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uVVZXO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2ZWMzIHZEaXJlY3Rpb25XO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudlBvc2l0aW9uVVZXPXBvc2l0aW9uO1xuI2VuZGlmXG4jaW5jbHVkZTxpbnN0YW5jZXNWZXJ0ZXg+XG4jaW5jbHVkZTxib25lc1ZlcnRleD5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uPlxuI2lmZGVmIE1VTFRJVklFV1xuaWYgKGdsX1ZpZXdJRF9PVlI9PTB1KSB7Z2xfUG9zaXRpb249dmlld1Byb2plY3Rpb24qZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uLDEuMCk7fSBlbHNlIHtnbF9Qb3NpdGlvbj12aWV3UHJvamVjdGlvblIqZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uLDEuMCk7fVxuI2Vsc2VcbmdsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uKmZpbmFsV29ybGQqdmVjNChwb3NpdGlvbiwxLjApO1xuI2VuZGlmXG52ZWM0IHdvcmxkUG9zPWZpbmFsV29ybGQqdmVjNChwb3NpdGlvbiwxLjApO3ZQb3NpdGlvblc9dmVjMyh3b3JsZFBvcyk7XG4jaWZkZWYgTk9STUFMXG5tYXQzIG5vcm1hbFdvcmxkPW1hdDMoZmluYWxXb3JsZCk7XG4jaWZkZWYgTk9OVU5JRk9STVNDQUxJTkdcbm5vcm1hbFdvcmxkPXRyYW5zcG9zZU1hdDMoaW52ZXJzZU1hdDMobm9ybWFsV29ybGQpKTtcbiNlbmRpZlxudk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKm5vcm1hbCk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52RGlyZWN0aW9uVz1ub3JtYWxpemUodmVjMyhmaW5hbFdvcmxkKnZlYzQocG9zaXRpb24sMC4wKSkpO1xuI2lmZGVmIEVRVUlSRUNUQU5HVUxBUl9SRUxGRUNUSU9OX0ZPVlxubWF0MyBzY3JlZW5Ub1dvcmxkPWludmVyc2VNYXQzKG1hdDMoZmluYWxXb3JsZCp2aWV3UHJvamVjdGlvbikpO3ZlYzMgc2VnbWVudD1taXgodkRpcmVjdGlvblcsc2NyZWVuVG9Xb3JsZCp2ZWMzKDAuMCwwLjAsMS4wKSxhYnMoZkZvdk11bHRpcGxpZXItMS4wKSk7aWYgKGZGb3ZNdWx0aXBsaWVyPD0xLjApIHt2RGlyZWN0aW9uVz1ub3JtYWxpemUoc2VnbWVudCk7fSBlbHNlIHt2RGlyZWN0aW9uVz1ub3JtYWxpemUodkRpcmVjdGlvblcrKHZEaXJlY3Rpb25XLXNlZ21lbnQpKTt9XG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBVVjFcbnZlYzIgdXY9dmVjMigwLiwwLik7XG4jZW5kaWZcbiNpZm5kZWYgVVYyXG52ZWMyIHV2Mj12ZWMyKDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjFcbnZNYWluVVYxPXV2O1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMlxudk1haW5VVjI9dXYyO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChESUZGVVNFKSAmJiBESUZGVVNFRElSRUNUVVY9PTBcbmlmICh2RGlmZnVzZUluZm9zLng9PTAuKVxue3ZEaWZmdXNlVVY9dmVjMihkaWZmdXNlTWF0cml4KnZlYzQodXYsMS4wLDAuMCkpO31cbmVsc2Vcbnt2RGlmZnVzZVVWPXZlYzIoZGlmZnVzZU1hdHJpeCp2ZWM0KHV2MiwxLjAsMC4wKSk7fVxuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXg+XG4jaW5jbHVkZTxmb2dWZXJ0ZXg+XG4jaW5jbHVkZTxzaGFkb3dzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaWZkZWYgVkVSVEVYQ09MT1JcbnZDb2xvcj1jb2xvclVwZGF0ZWQ7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFBPSU5UU0laRSkgJiYgIWRlZmluZWQoV0VCR1BVKVxuZ2xfUG9pbnRTaXplPXBvaW50U2l6ZTtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kVmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=