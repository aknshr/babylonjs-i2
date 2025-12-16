"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_greasedLine_vertex_js"],{

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

/***/ }),

/***/ "../core/dist/ShadersWGSL/greasedLine.vertex.js":
/*!******************************************************!*\
  !*** ../core/dist/ShadersWGSL/greasedLine.vertex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLineVertexShaderWGSL: () => (/* binding */ greasedLineVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _ShadersInclude_meshUboDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "greasedLineVertexShader";
const shader = `#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute grl_widths: f32;
#ifdef GREASED_LINE_USE_OFFSETS
attribute grl_offsets: vec3f; 
#endif
attribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#ifdef GREASED_LINE_CAMERA_FACING
attribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute grl_slopes: vec3f;attribute grl_counters: f32;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vertexOutputs.grlColorPointer=input.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;
#ifdef GREASED_LINE_CAMERA_FACING
let grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=input.grl_previousAndSide.xyz;let grlSide: f32=input.grl_previousAndSide.w;let grlNext: vec3f=input.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=input.grl_nextAndCounters.w;let grlWidth:f32=grlBaseWidth*input.grl_widths;
#ifdef GREASED_LINE_USE_OFFSETS
var grlPositionOffset: vec3f=input.grl_offsets;
#else
var grlPositionOffset=vec3f(0.);
#endif
let positionUpdated: vec3f=vertexInputs.position+grlPositionOffset;let worldDir: vec3f=normalize(grlNext-grlPrevious);let nearPosition: vec3f=positionUpdated+(worldDir*0.001);let grlFinalPosition: vec4f=grlMatrix*vec4f(positionUpdated,1.0);let screenNearPos: vec4f=grlMatrix*vec4(nearPosition,1.0);let grlLinePosition: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlLineNearPosition: vec2f=grlFix(screenNearPos,uniforms.grlAspect);let grlDir: vec2f=normalize(grlLineNearPosition-grlLinePosition);var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;
#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
grlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;
#else
grlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;
#endif
grlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}
vertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);
#else
vertexOutputs.grlCounters=input.grl_counters;vertexOutputs.position=grlMatrix*vec4f((vertexInputs.position+input.grl_offsets)+input.grl_slopes*input.grl_widths,1.0) ;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const greasedLineVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2dyZWFzZWRMaW5lX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9ncmVhc2VkTGluZS52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImluc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIElOU1RBTkNFU1xuYXR0cmlidXRlIHdvcmxkMCA6IHZlYzQ8ZjMyPjthdHRyaWJ1dGUgd29ybGQxIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSB3b3JsZDIgOiB2ZWM0PGYzMj47YXR0cmlidXRlIHdvcmxkMyA6IHZlYzQ8ZjMyPjtcbiNpZmRlZiBJTlNUQU5DRVNDT0xPUlxuYXR0cmlidXRlIGluc3RhbmNlQ29sb3IgOiB2ZWM0PGYzMj47XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKSAmJiAhZGVmaW5lZChXT1JMRF9VQk8pXG51bmlmb3JtIHdvcmxkIDogbWF0NHg0PGYzMj47XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpIHx8IGRlZmluZWQoVkVMT0NJVFlfTElORUFSKVxuYXR0cmlidXRlIHByZXZpb3VzV29ybGQwIDogdmVjNDxmMzI+O2F0dHJpYnV0ZSBwcmV2aW91c1dvcmxkMSA6IHZlYzQ8ZjMyPjthdHRyaWJ1dGUgcHJldmlvdXNXb3JsZDIgOiB2ZWM0PGYzMj47YXR0cmlidXRlIHByZXZpb3VzV29ybGQzIDogdmVjNDxmMzI+O1xuI2lmZGVmIFRISU5fSU5TVEFOQ0VTXG51bmlmb3JtIHByZXZpb3VzV29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxuI2lmICFkZWZpbmVkKFdPUkxEX1VCTylcbnVuaWZvcm0gd29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUikgfHwgZGVmaW5lZChWRUxPQ0lUWV9MSU5FQVIpXG51bmlmb3JtIHByZXZpb3VzV29ybGQgOiBtYXQ0eDQ8ZjMyPjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaW5zdGFuY2VzRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJpbnN0YW5jZXNWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgSU5TVEFOQ0VTXG52YXIgZmluYWxXb3JsZD1tYXQ0eDQ8ZjMyPih2ZXJ0ZXhJbnB1dHMud29ybGQwLHZlcnRleElucHV0cy53b3JsZDEsdmVydGV4SW5wdXRzLndvcmxkMix2ZXJ0ZXhJbnB1dHMud29ybGQzKTtcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpIHx8IGRlZmluZWQoVkVMT0NJVFlfTElORUFSKVxudmFyIGZpbmFsUHJldmlvdXNXb3JsZD1tYXQ0eDQ8ZjMyPihcbnZlcnRleElucHV0cy5wcmV2aW91c1dvcmxkMCx2ZXJ0ZXhJbnB1dHMucHJldmlvdXNXb3JsZDEsXG52ZXJ0ZXhJbnB1dHMucHJldmlvdXNXb3JsZDIsdmVydGV4SW5wdXRzLnByZXZpb3VzV29ybGQzKTtcbiNlbmRpZlxuI2lmZGVmIFRISU5fSU5TVEFOQ0VTXG4jaWYgIWRlZmluZWQoV09STERfVUJPKVxuZmluYWxXb3JsZD11bmlmb3Jtcy53b3JsZCpmaW5hbFdvcmxkO1xuI2Vsc2VcbmZpbmFsV29ybGQ9bWVzaC53b3JsZCpmaW5hbFdvcmxkO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSB8fCBkZWZpbmVkKFZFTE9DSVRZX0xJTkVBUilcbmZpbmFsUHJldmlvdXNXb3JsZD11bmlmb3Jtcy5wcmV2aW91c1dvcmxkKmZpbmFsUHJldmlvdXNXb3JsZDtcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxuI2lmICFkZWZpbmVkKFdPUkxEX1VCTylcbnZhciBmaW5hbFdvcmxkPXVuaWZvcm1zLndvcmxkO1xuI2Vsc2VcbnZhciBmaW5hbFdvcmxkPW1lc2gud29ybGQ7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpIHx8IGRlZmluZWQoVkVMT0NJVFlfTElORUFSKVxudmFyIGZpbmFsUHJldmlvdXNXb3JsZD11bmlmb3Jtcy5wcmV2aW91c1dvcmxkO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpbnN0YW5jZXNWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwiZ3JlYXNlZExpbmVWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjaW5jbHVkZTxpbnN0YW5jZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG5hdHRyaWJ1dGUgZ3JsX3dpZHRoczogZjMyO1xuI2lmZGVmIEdSRUFTRURfTElORV9VU0VfT0ZGU0VUU1xuYXR0cmlidXRlIGdybF9vZmZzZXRzOiB2ZWMzZjsgXG4jZW5kaWZcbmF0dHJpYnV0ZSBncmxfY29sb3JQb2ludGVyczogZjMyO2F0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7dmFyeWluZyBncmxDb3VudGVyczogZjMyO3ZhcnlpbmcgZ3JsQ29sb3JQb2ludGVyOiBmMzI7XG4jaWZkZWYgR1JFQVNFRF9MSU5FX0NBTUVSQV9GQUNJTkdcbmF0dHJpYnV0ZSBncmxfbmV4dEFuZENvdW50ZXJzOiB2ZWM0ZjthdHRyaWJ1dGUgZ3JsX3ByZXZpb3VzQW5kU2lkZTogdmVjNGY7dW5pZm9ybSBncmxSZXNvbHV0aW9uOiB2ZWMyZjt1bmlmb3JtIGdybEFzcGVjdDogZjMyO3VuaWZvcm0gZ3JsV2lkdGg6IGYzMjt1bmlmb3JtIGdybFNpemVBdHRlbnVhdGlvbjogZjMyO2ZuIGdybEZpeChpOiB2ZWM0Zixhc3BlY3Q6IGYzMiktPnZlYzJmIHt2YXIgcmVzPWkueHkvaS53O3Jlcy54Kj1hc3BlY3Q7cmV0dXJuIHJlczt9XG4jZWxzZVxuYXR0cmlidXRlIGdybF9zbG9wZXM6IHZlYzNmO2F0dHJpYnV0ZSBncmxfY291bnRlcnM6IGYzMjtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG5AdmVydGV4XG5mbiBtYWluKGlucHV0IDogVmVydGV4SW5wdXRzKS0+RnJhZ21lbnRJbnB1dHMge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbnZlcnRleE91dHB1dHMuZ3JsQ29sb3JQb2ludGVyPWlucHV0LmdybF9jb2xvclBvaW50ZXJzO2xldCBncmxNYXRyaXg6IG1hdDR4NGY9c2NlbmUudmlld1Byb2plY3Rpb24qbWVzaC53b3JsZCA7XG4jaWZkZWYgR1JFQVNFRF9MSU5FX0NBTUVSQV9GQUNJTkdcbmxldCBncmxCYXNlV2lkdGg6IGYzMj11bmlmb3Jtcy5ncmxXaWR0aDtsZXQgZ3JsUHJldmlvdXM6IHZlYzNmPWlucHV0LmdybF9wcmV2aW91c0FuZFNpZGUueHl6O2xldCBncmxTaWRlOiBmMzI9aW5wdXQuZ3JsX3ByZXZpb3VzQW5kU2lkZS53O2xldCBncmxOZXh0OiB2ZWMzZj1pbnB1dC5ncmxfbmV4dEFuZENvdW50ZXJzLnh5ejt2ZXJ0ZXhPdXRwdXRzLmdybENvdW50ZXJzPWlucHV0LmdybF9uZXh0QW5kQ291bnRlcnMudztsZXQgZ3JsV2lkdGg6ZjMyPWdybEJhc2VXaWR0aCppbnB1dC5ncmxfd2lkdGhzO1xuI2lmZGVmIEdSRUFTRURfTElORV9VU0VfT0ZGU0VUU1xudmFyIGdybFBvc2l0aW9uT2Zmc2V0OiB2ZWMzZj1pbnB1dC5ncmxfb2Zmc2V0cztcbiNlbHNlXG52YXIgZ3JsUG9zaXRpb25PZmZzZXQ9dmVjM2YoMC4pO1xuI2VuZGlmXG5sZXQgcG9zaXRpb25VcGRhdGVkOiB2ZWMzZj12ZXJ0ZXhJbnB1dHMucG9zaXRpb24rZ3JsUG9zaXRpb25PZmZzZXQ7bGV0IHdvcmxkRGlyOiB2ZWMzZj1ub3JtYWxpemUoZ3JsTmV4dC1ncmxQcmV2aW91cyk7bGV0IG5lYXJQb3NpdGlvbjogdmVjM2Y9cG9zaXRpb25VcGRhdGVkKyh3b3JsZERpciowLjAwMSk7bGV0IGdybEZpbmFsUG9zaXRpb246IHZlYzRmPWdybE1hdHJpeCp2ZWM0Zihwb3NpdGlvblVwZGF0ZWQsMS4wKTtsZXQgc2NyZWVuTmVhclBvczogdmVjNGY9Z3JsTWF0cml4KnZlYzQobmVhclBvc2l0aW9uLDEuMCk7bGV0IGdybExpbmVQb3NpdGlvbjogdmVjMmY9Z3JsRml4KGdybEZpbmFsUG9zaXRpb24sdW5pZm9ybXMuZ3JsQXNwZWN0KTtsZXQgZ3JsTGluZU5lYXJQb3NpdGlvbjogdmVjMmY9Z3JsRml4KHNjcmVlbk5lYXJQb3MsdW5pZm9ybXMuZ3JsQXNwZWN0KTtsZXQgZ3JsRGlyOiB2ZWMyZj1ub3JtYWxpemUoZ3JsTGluZU5lYXJQb3NpdGlvbi1ncmxMaW5lUG9zaXRpb24pO3ZhciBncmxOb3JtYWw6IHZlYzRmPXZlYzRmKC1ncmxEaXIueSxncmxEaXIueCwwLjAsMS4wKTtsZXQgZ3JsSGFsZldpZHRoOiBmMzI9MC41KmdybFdpZHRoO1xuI2lmIGRlZmluZWQoR1JFQVNFRF9MSU5FX1JJR0hUX0hBTkRFRF9DT09SRElOQVRFX1NZU1RFTSlcbmdybE5vcm1hbC54Kj0tZ3JsSGFsZldpZHRoO2dybE5vcm1hbC55Kj0tZ3JsSGFsZldpZHRoO1xuI2Vsc2VcbmdybE5vcm1hbC54Kj1ncmxIYWxmV2lkdGg7Z3JsTm9ybWFsLnkqPWdybEhhbGZXaWR0aDtcbiNlbmRpZlxuZ3JsTm9ybWFsKj1zY2VuZS5wcm9qZWN0aW9uO2lmICh1bmlmb3Jtcy5ncmxTaXplQXR0ZW51YXRpb249PTEuKSB7Z3JsTm9ybWFsLngqPWdybEZpbmFsUG9zaXRpb24udztncmxOb3JtYWwueSo9Z3JsRmluYWxQb3NpdGlvbi53O2xldCBwcj12ZWM0Zih1bmlmb3Jtcy5ncmxSZXNvbHV0aW9uLDAuMCwxLjApKnNjZW5lLnByb2plY3Rpb247Z3JsTm9ybWFsLngvPXByLng7Z3JsTm9ybWFsLnkvPXByLnk7fVxudmVydGV4T3V0cHV0cy5wb3NpdGlvbj12ZWM0ZihncmxGaW5hbFBvc2l0aW9uLnh5K2dybE5vcm1hbC54eSpncmxTaWRlLGdybEZpbmFsUG9zaXRpb24ueixncmxGaW5hbFBvc2l0aW9uLncpO1xuI2Vsc2VcbnZlcnRleE91dHB1dHMuZ3JsQ291bnRlcnM9aW5wdXQuZ3JsX2NvdW50ZXJzO3ZlcnRleE91dHB1dHMucG9zaXRpb249Z3JsTWF0cml4KnZlYzRmKCh2ZXJ0ZXhJbnB1dHMucG9zaXRpb24raW5wdXQuZ3JsX29mZnNldHMpK2lucHV0LmdybF9zbG9wZXMqaW5wdXQuZ3JsX3dpZHRocywxLjApIDtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fRU5EXG59XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBncmVhc2VkTGluZVZlcnRleFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9