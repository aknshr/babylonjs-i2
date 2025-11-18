"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_ShadersInclude_decalFragmentDeclaration_js-core_dist_Shaders_ShadersInclude-ebef7a"],{

/***/ "../core/dist/Shaders/ShadersInclude/decalFragmentDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/decalFragmentDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decalFragmentDeclaration: () => (/* binding */ decalFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "decalFragmentDeclaration";
const shader = `#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const decalFragmentDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/depthPrePass.js":
/*!***********************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/depthPrePass.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPrePass: () => (/* binding */ depthPrePass)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);return;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const depthPrePass = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/mainUVVaryingDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/mainUVVaryingDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainUVVaryingDeclaration: () => (/* binding */ mainUVVaryingDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "mainUVVaryingDeclaration";
const shader = `#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const mainUVVaryingDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/oitDeclaration.js":
/*!*************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/oitDeclaration.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitDeclaration: () => (/* binding */ oitDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "oitDeclaration";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;uniform sampler2D oitDepthSampler;uniform sampler2D oitFrontColorSampler;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const oitDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/oitFragment.js":
/*!**********************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/oitFragment.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitFragment: () => (/* binding */ oitFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "oitFragment";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);depth.rg=vec2(-MAX_DEPTH);frontColor=lastFrontColor;backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);return;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const oitFragment = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/prePassDeclaration.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/prePassDeclaration.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prePassDeclaration: () => (/* binding */ prePassDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "prePassDeclaration";
const shader = `#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_LOCAL_POSITION
varying highp vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying highp float vNormViewDepth;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const prePassDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/reflectionFunction.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/reflectionFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reflectionFunction: () => (/* binding */ reflectionFunction)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "reflectionFunction";
const shader = `vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0); }
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(1.0-s,t,0); }
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);vec3 r=normalize(reflect(cameraToVertex,worldNormal));r=vec3(reflectionMatrix*vec4(r,0));float lon=atan(r.z,r.x);float lat=acos(r.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0);}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{vec3 viewDir=normalize(vec3(view*worldPos));vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));vec3 r=reflect(viewDir,viewNormal);r=vec3(reflectionMatrix*vec4(r,0));r.z=r.z-1.0;float m=2.0*length(r);return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=worldPos.xyz-eyePosition;vec3 coords=normalize(reflect(viewDir,worldNormal));return vec3(reflectionMatrix*vec4(coords,1));}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*(view*worldPos));}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*vec4(positionW,1.));}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const reflectionFunction = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerFragmentDeclaration: () => (/* binding */ samplerFragmentDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "samplerFragmentDeclaration";
const shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const samplerFragmentDeclaration = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfZGVjYWxGcmFnbWVudERlY2xhcmF0aW9uX2pzLWNvcmVfZGlzdF9TaGFkZXJzX1NoYWRlcnNJbmNsdWRlLWViZWY3YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9kZWNhbEZyYWdtZW50RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2RlcHRoUHJlUGFzcy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vaXREZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb2l0RnJhZ21lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcmVmbGVjdGlvbkZ1bmN0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZGVjYWxGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIERFQ0FMXG51bmlmb3JtIHZlYzQgdkRlY2FsSW5mb3M7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZGVjYWxGcmFnbWVudERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJkZXB0aFByZVBhc3NcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgREVQVEhQUkVQQVNTXG5nbF9GcmFnQ29sb3I9dmVjNCgwLiwwLiwwLiwxLjApO3JldHVybjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZXB0aFByZVBhc3MgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBNQUlOVVZ7WH1cbnZhcnlpbmcgdmVjMiB2TWFpblVWe1h9O1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib2l0RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZXG4jZXh0ZW5zaW9uIEdMX0VYVF9kcmF3X2J1ZmZlcnMgOiByZXF1aXJlXG5sYXlvdXQobG9jYXRpb249MCkgb3V0IHZlYzIgZGVwdGg7IFxubGF5b3V0KGxvY2F0aW9uPTEpIG91dCB2ZWM0IGZyb250Q29sb3I7bGF5b3V0KGxvY2F0aW9uPTIpIG91dCB2ZWM0IGJhY2tDb2xvcjtcbiNkZWZpbmUgTUFYX0RFUFRIIDk5OTk5LjBcbmhpZ2hwIHZlYzQgZ2xfRnJhZ0NvbG9yO3VuaWZvcm0gc2FtcGxlcjJEIG9pdERlcHRoU2FtcGxlcjt1bmlmb3JtIHNhbXBsZXIyRCBvaXRGcm9udENvbG9yU2FtcGxlcjtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvaXREZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib2l0RnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgT1JERVJfSU5ERVBFTkRFTlRfVFJBTlNQQVJFTkNZXG5mbG9hdCBmcmFnRGVwdGg9Z2xfRnJhZ0Nvb3JkLno7IFxuI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWV8xNkJJVFNcbnVpbnQgaGFsZkZsb2F0PXBhY2tIYWxmMngxNih2ZWMyKGZyYWdEZXB0aCkpO3ZlYzIgZnVsbD11bnBhY2tIYWxmMngxNihoYWxmRmxvYXQpO2ZyYWdEZXB0aD1mdWxsLng7XG4jZW5kaWZcbml2ZWMyIGZyYWdDb29yZD1pdmVjMihnbF9GcmFnQ29vcmQueHkpO3ZlYzIgbGFzdERlcHRoPXRleGVsRmV0Y2gob2l0RGVwdGhTYW1wbGVyLGZyYWdDb29yZCwwKS5yZzt2ZWM0IGxhc3RGcm9udENvbG9yPXRleGVsRmV0Y2gob2l0RnJvbnRDb2xvclNhbXBsZXIsZnJhZ0Nvb3JkLDApO2RlcHRoLnJnPXZlYzIoLU1BWF9ERVBUSCk7ZnJvbnRDb2xvcj1sYXN0RnJvbnRDb2xvcjtiYWNrQ29sb3I9dmVjNCgwLjApO1xuI2lmZGVmIFVTRV9SRVZFUlNFX0RFUFRIQlVGRkVSXG5mbG9hdCBmdXJ0aGVzdERlcHRoPS1sYXN0RGVwdGgueDtmbG9hdCBuZWFyZXN0RGVwdGg9bGFzdERlcHRoLnk7XG4jZWxzZVxuZmxvYXQgbmVhcmVzdERlcHRoPS1sYXN0RGVwdGgueDtmbG9hdCBmdXJ0aGVzdERlcHRoPWxhc3REZXB0aC55O1xuI2VuZGlmXG5mbG9hdCBhbHBoYU11bHRpcGxpZXI9MS4wLWxhc3RGcm9udENvbG9yLmE7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbmlmIChmcmFnRGVwdGg+bmVhcmVzdERlcHRoIHx8IGZyYWdEZXB0aDxmdXJ0aGVzdERlcHRoKSB7XG4jZWxzZVxuaWYgKGZyYWdEZXB0aDxuZWFyZXN0RGVwdGggfHwgZnJhZ0RlcHRoPmZ1cnRoZXN0RGVwdGgpIHtcbiNlbmRpZlxucmV0dXJuO31cbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuaWYgKGZyYWdEZXB0aDxuZWFyZXN0RGVwdGggJiYgZnJhZ0RlcHRoPmZ1cnRoZXN0RGVwdGgpIHtcbiNlbHNlXG5pZiAoZnJhZ0RlcHRoPm5lYXJlc3REZXB0aCAmJiBmcmFnRGVwdGg8ZnVydGhlc3REZXB0aCkge1xuI2VuZGlmXG5kZXB0aC5yZz12ZWMyKC1mcmFnRGVwdGgsZnJhZ0RlcHRoKTtyZXR1cm47fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9pdEZyYWdtZW50ID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwcmVQYXNzRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgUFJFUEFTU1xuI2V4dGVuc2lvbiBHTF9FWFRfZHJhd19idWZmZXJzIDogcmVxdWlyZVxubGF5b3V0KGxvY2F0aW9uPTApIG91dCBoaWdocCB2ZWM0IGdsRnJhZ0RhdGFbe1h9XTtoaWdocCB2ZWM0IGdsX0ZyYWdDb2xvcjtcbiNpZmRlZiBQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OXG52YXJ5aW5nIGhpZ2hwIHZlYzMgdlBvc2l0aW9uO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19ERVBUSFxudmFyeWluZyBoaWdocCB2ZWMzIHZWaWV3UG9zO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhcbnZhcnlpbmcgaGlnaHAgZmxvYXQgdk5vcm1WaWV3RGVwdGg7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpXG52YXJ5aW5nIGhpZ2hwIHZlYzQgdkN1cnJlbnRQb3NpdGlvbjt2YXJ5aW5nIGhpZ2hwIHZlYzQgdlByZXZpb3VzUG9zaXRpb247XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwcmVQYXNzRGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInJlZmxlY3Rpb25GdW5jdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHZlYzMgY29tcHV0ZUZpeGVkRXF1aXJlY3Rhbmd1bGFyQ29vcmRzKHZlYzQgd29ybGRQb3MsdmVjMyB3b3JsZE5vcm1hbCx2ZWMzIGRpcmVjdGlvbilcbntmbG9hdCBsb249YXRhbihkaXJlY3Rpb24ueixkaXJlY3Rpb24ueCk7ZmxvYXQgbGF0PWFjb3MoZGlyZWN0aW9uLnkpO3ZlYzIgc3BoZXJlQ29vcmRzPXZlYzIobG9uLGxhdCkqUkVDSVBST0NBTF9QSTIqMi4wO2Zsb2F0IHM9c3BoZXJlQ29vcmRzLngqMC41KzAuNTtmbG9hdCB0PXNwaGVyZUNvb3Jkcy55O3JldHVybiB2ZWMzKHMsdCwwKTsgfVxudmVjMyBjb21wdXRlTWlycm9yZWRGaXhlZEVxdWlyZWN0YW5ndWxhckNvb3Jkcyh2ZWM0IHdvcmxkUG9zLHZlYzMgd29ybGROb3JtYWwsdmVjMyBkaXJlY3Rpb24pXG57ZmxvYXQgbG9uPWF0YW4oZGlyZWN0aW9uLnosZGlyZWN0aW9uLngpO2Zsb2F0IGxhdD1hY29zKGRpcmVjdGlvbi55KTt2ZWMyIHNwaGVyZUNvb3Jkcz12ZWMyKGxvbixsYXQpKlJFQ0lQUk9DQUxfUEkyKjIuMDtmbG9hdCBzPXNwaGVyZUNvb3Jkcy54KjAuNSswLjU7ZmxvYXQgdD1zcGhlcmVDb29yZHMueTtyZXR1cm4gdmVjMygxLjAtcyx0LDApOyB9XG52ZWMzIGNvbXB1dGVFcXVpcmVjdGFuZ3VsYXJDb29yZHModmVjNCB3b3JsZFBvcyx2ZWMzIHdvcmxkTm9ybWFsLHZlYzMgZXllUG9zaXRpb24sbWF0NCByZWZsZWN0aW9uTWF0cml4KVxue3ZlYzMgY2FtZXJhVG9WZXJ0ZXg9bm9ybWFsaXplKHdvcmxkUG9zLnh5ei1leWVQb3NpdGlvbik7dmVjMyByPW5vcm1hbGl6ZShyZWZsZWN0KGNhbWVyYVRvVmVydGV4LHdvcmxkTm9ybWFsKSk7cj12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChyLDApKTtmbG9hdCBsb249YXRhbihyLnosci54KTtmbG9hdCBsYXQ9YWNvcyhyLnkpO3ZlYzIgc3BoZXJlQ29vcmRzPXZlYzIobG9uLGxhdCkqUkVDSVBST0NBTF9QSTIqMi4wO2Zsb2F0IHM9c3BoZXJlQ29vcmRzLngqMC41KzAuNTtmbG9hdCB0PXNwaGVyZUNvb3Jkcy55O3JldHVybiB2ZWMzKHMsdCwwKTt9XG52ZWMzIGNvbXB1dGVTcGhlcmljYWxDb29yZHModmVjNCB3b3JsZFBvcyx2ZWMzIHdvcmxkTm9ybWFsLG1hdDQgdmlldyxtYXQ0IHJlZmxlY3Rpb25NYXRyaXgpXG57dmVjMyB2aWV3RGlyPW5vcm1hbGl6ZSh2ZWMzKHZpZXcqd29ybGRQb3MpKTt2ZWMzIHZpZXdOb3JtYWw9bm9ybWFsaXplKHZlYzModmlldyp2ZWM0KHdvcmxkTm9ybWFsLDAuMCkpKTt2ZWMzIHI9cmVmbGVjdCh2aWV3RGlyLHZpZXdOb3JtYWwpO3I9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQociwwKSk7ci56PXIuei0xLjA7ZmxvYXQgbT0yLjAqbGVuZ3RoKHIpO3JldHVybiB2ZWMzKHIueC9tKzAuNSwxLjAtci55L20tMC41LDApO31cbnZlYzMgY29tcHV0ZVBsYW5hckNvb3Jkcyh2ZWM0IHdvcmxkUG9zLHZlYzMgd29ybGROb3JtYWwsdmVjMyBleWVQb3NpdGlvbixtYXQ0IHJlZmxlY3Rpb25NYXRyaXgpXG57dmVjMyB2aWV3RGlyPXdvcmxkUG9zLnh5ei1leWVQb3NpdGlvbjt2ZWMzIGNvb3Jkcz1ub3JtYWxpemUocmVmbGVjdCh2aWV3RGlyLHdvcmxkTm9ybWFsKSk7cmV0dXJuIHZlYzMocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KGNvb3JkcywxKSk7fVxudmVjMyBjb21wdXRlQ3ViaWNDb29yZHModmVjNCB3b3JsZFBvcyx2ZWMzIHdvcmxkTm9ybWFsLHZlYzMgZXllUG9zaXRpb24sbWF0NCByZWZsZWN0aW9uTWF0cml4KVxue3ZlYzMgdmlld0Rpcj1ub3JtYWxpemUod29ybGRQb3MueHl6LWV5ZVBvc2l0aW9uKTt2ZWMzIGNvb3Jkcz1yZWZsZWN0KHZpZXdEaXIsd29ybGROb3JtYWwpO2Nvb3Jkcz12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChjb29yZHMsMCkpO1xuI2lmZGVmIElOVkVSVENVQklDTUFQXG5jb29yZHMueSo9LTEuMDtcbiNlbmRpZlxucmV0dXJuIGNvb3Jkczt9XG52ZWMzIGNvbXB1dGVDdWJpY0xvY2FsQ29vcmRzKHZlYzQgd29ybGRQb3MsdmVjMyB3b3JsZE5vcm1hbCx2ZWMzIGV5ZVBvc2l0aW9uLG1hdDQgcmVmbGVjdGlvbk1hdHJpeCx2ZWMzIHJlZmxlY3Rpb25TaXplLHZlYzMgcmVmbGVjdGlvblBvc2l0aW9uKVxue3ZlYzMgdmlld0Rpcj1ub3JtYWxpemUod29ybGRQb3MueHl6LWV5ZVBvc2l0aW9uKTt2ZWMzIGNvb3Jkcz1yZWZsZWN0KHZpZXdEaXIsd29ybGROb3JtYWwpO2Nvb3Jkcz1wYXJhbGxheENvcnJlY3ROb3JtYWwod29ybGRQb3MueHl6LGNvb3JkcyxyZWZsZWN0aW9uU2l6ZSxyZWZsZWN0aW9uUG9zaXRpb24pO2Nvb3Jkcz12ZWMzKHJlZmxlY3Rpb25NYXRyaXgqdmVjNChjb29yZHMsMCkpO1xuI2lmZGVmIElOVkVSVENVQklDTUFQXG5jb29yZHMueSo9LTEuMDtcbiNlbmRpZlxucmV0dXJuIGNvb3Jkczt9XG52ZWMzIGNvbXB1dGVQcm9qZWN0aW9uQ29vcmRzKHZlYzQgd29ybGRQb3MsbWF0NCB2aWV3LG1hdDQgcmVmbGVjdGlvbk1hdHJpeClcbntyZXR1cm4gdmVjMyhyZWZsZWN0aW9uTWF0cml4Kih2aWV3KndvcmxkUG9zKSk7fVxudmVjMyBjb21wdXRlU2t5Qm94Q29vcmRzKHZlYzMgcG9zaXRpb25XLG1hdDQgcmVmbGVjdGlvbk1hdHJpeClcbntyZXR1cm4gdmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQocG9zaXRpb25XLDEuKSk7fVxuI2lmZGVmIFJFRkxFQ1RJT05cbnZlYzMgY29tcHV0ZVJlZmxlY3Rpb25Db29yZHModmVjNCB3b3JsZFBvcyx2ZWMzIHdvcmxkTm9ybWFsKVxue1xuI2lmZGVmIFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRURcbnZlYzMgZGlyZWN0aW9uPW5vcm1hbGl6ZSh2RGlyZWN0aW9uVyk7cmV0dXJuIGNvbXB1dGVNaXJyb3JlZEZpeGVkRXF1aXJlY3Rhbmd1bGFyQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLGRpcmVjdGlvbik7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRFxudmVjMyBkaXJlY3Rpb249bm9ybWFsaXplKHZEaXJlY3Rpb25XKTtyZXR1cm4gY29tcHV0ZUZpeGVkRXF1aXJlY3Rhbmd1bGFyQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLGRpcmVjdGlvbik7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUlxucmV0dXJuIGNvbXB1dGVFcXVpcmVjdGFuZ3VsYXJDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsdkV5ZVBvc2l0aW9uLnh5eixyZWZsZWN0aW9uTWF0cml4KTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU1BIRVJJQ0FMXG5yZXR1cm4gY29tcHV0ZVNwaGVyaWNhbENvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCx2aWV3LHJlZmxlY3Rpb25NYXRyaXgpO1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QTEFOQVJcbnJldHVybiBjb21wdXRlUGxhbmFyQ29vcmRzKHdvcmxkUG9zLHdvcmxkTm9ybWFsLHZFeWVQb3NpdGlvbi54eXoscmVmbGVjdGlvbk1hdHJpeCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX0NVQklDXG4jaWZkZWYgVVNFX0xPQ0FMX1JFRkxFQ1RJT05NQVBfQ1VCSUNcbnJldHVybiBjb21wdXRlQ3ViaWNMb2NhbENvb3Jkcyh3b3JsZFBvcyx3b3JsZE5vcm1hbCx2RXllUG9zaXRpb24ueHl6LHJlZmxlY3Rpb25NYXRyaXgsdlJlZmxlY3Rpb25TaXplLHZSZWZsZWN0aW9uUG9zaXRpb24pO1xuI2Vsc2VcbnJldHVybiBjb21wdXRlQ3ViaWNDb29yZHMod29ybGRQb3Msd29ybGROb3JtYWwsdkV5ZVBvc2l0aW9uLnh5eixyZWZsZWN0aW9uTWF0cml4KTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9QUk9KRUNUSU9OXG5yZXR1cm4gY29tcHV0ZVByb2plY3Rpb25Db29yZHMod29ybGRQb3MsdmlldyxyZWZsZWN0aW9uTWF0cml4KTtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG5yZXR1cm4gY29tcHV0ZVNreUJveENvb3Jkcyh2UG9zaXRpb25VVlcscmVmbGVjdGlvbk1hdHJpeCk7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX0VYUExJQ0lUXG5yZXR1cm4gdmVjMygwLDAsMCk7XG4jZW5kaWZcbn1cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCByZWZsZWN0aW9uRnVuY3Rpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIF9ERUZJTkVOQU1FX1xuI2lmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0xXG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjFcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0yXG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjJcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0zXG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjNcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT00XG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjRcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT01XG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjVcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT02XG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjZcbiNlbHNlXG52YXJ5aW5nIHZlYzIgdl9WQVJZSU5HTkFNRV9VVjtcbiNlbmRpZlxudW5pZm9ybSBzYW1wbGVyMkQgX1NBTVBMRVJOQU1FX1NhbXBsZXI7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9