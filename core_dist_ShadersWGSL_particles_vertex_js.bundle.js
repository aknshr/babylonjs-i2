"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_particles_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/particles.vertex.js":
/*!****************************************************!*\
  !*** ../core/dist/ShadersWGSL/particles.vertex.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesVertexShaderWGSL: () => (/* binding */ particlesVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.







const name = "particlesVertexShader";
const shader = `attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;
#ifdef ANIMATESHEET
attribute cellIndex: f32;
#endif
#ifndef BILLBOARD
attribute direction: vec3f;
#endif
#ifdef BILLBOARDSTRETCHED
attribute direction: vec3f;
#endif
#ifdef RAMPGRADIENT
attribute remapData: vec4f;
#endif
attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform translationPivot: vec2f;
#ifdef ANIMATESHEET
uniform particlesInfos: vec3f; 
#endif
varying vUV: vec2f;varying vColor: vec4f;
#ifdef POSITIONW_AS_VARYING
varying vPositionW: vec3f;
#endif
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform invView: mat4x4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform eyePosition: vec3f;
#endif
fn rotate(yaxis: vec3f,rotatedCorner: vec3f)->vec3f {var xaxis: vec3f=normalize(cross( vec3f(0.,1.0,0.),yaxis));var zaxis: vec3f=normalize(cross(yaxis,xaxis));var row0: vec3f= vec3f(xaxis.x,xaxis.y,xaxis.z);var row1: vec3f= vec3f(yaxis.x,yaxis.y,yaxis.z);var row2: vec3f= vec3f(zaxis.x,zaxis.y,zaxis.z);var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
fn rotateAlign(toCamera: vec3f,rotatedCorner: vec3f)->vec3f {var normalizedToCamera: vec3f=normalize(toCamera);var normalizedCrossDirToCamera: vec3f=normalize(cross(normalize(vertexInputs.direction),normalizedToCamera));var row0: vec3f= vec3f(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);var row2: vec3f= vec3f(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
var row1: vec3f=normalize(vertexInputs.direction);
#else
var crossProduct: vec3f=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));var row1: vec3f= vec3f(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var cornerPos: vec2f;var vPositionW: vec3f;cornerPos=( vec2f(input.offset.x-0.5,input.offset.y -0.5)-uniforms.translationPivot)*input.size;
#ifdef BILLBOARD
var rotatedCorner: vec3f;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=input.position-uniforms.eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var toCamera: vec3f=input.position-uniforms.eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var viewPos: vec3f=(uniforms.view* vec4f(input.position,1.0)).xyz+rotatedCorner;vPositionW=(uniforms.invView* vec4f(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
vertexOutputs.remapRanges=input.remapData;
#endif
vertexOutputs.position=uniforms.projection* vec4f(viewPos,1.0);
#else
var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=normalize(vertexInputs.direction);vPositionW=rotate(yaxis,rotatedCorner);vertexOutputs.position=uniforms.projection*uniforms.view* vec4f(vPositionW,1.0);
#endif
vertexOutputs.vColor=input.color;
#ifdef ANIMATESHEET
var rowOffset: f32=floor(input.cellIndex*uniforms.particlesInfos.z);var columnOffset: f32=input.cellIndex-rowOffset/uniforms.particlesInfos.z;var uvScale: vec2f=uniforms.particlesInfos.xy;var uvOffset: vec2f= vec2f(input.offset.x ,1.0-input.offset.y);vertexOutputs.vUV=(uvOffset+ vec2f(columnOffset,rowOffset))*uvScale;
#else
vertexOutputs.vUV=input.offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
var worldPos: vec4f= vec4f(vPositionW,1.0);
#endif
#ifdef POSITIONW_AS_VARYING
vertexOutputs.vPositionW=vPositionW;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const particlesVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3BhcnRpY2xlc192ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9wYXJ0aWNsZXMudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwicGFydGljbGVzVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgYXR0cmlidXRlIHBvc2l0aW9uOiB2ZWMzZjthdHRyaWJ1dGUgY29sb3I6IHZlYzRmO2F0dHJpYnV0ZSBhbmdsZTogZjMyO2F0dHJpYnV0ZSBzaXplOiB2ZWMyZjtcbiNpZmRlZiBBTklNQVRFU0hFRVRcbmF0dHJpYnV0ZSBjZWxsSW5kZXg6IGYzMjtcbiNlbmRpZlxuI2lmbmRlZiBCSUxMQk9BUkRcbmF0dHJpYnV0ZSBkaXJlY3Rpb246IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgQklMTEJPQVJEU1RSRVRDSEVEXG5hdHRyaWJ1dGUgZGlyZWN0aW9uOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFJBTVBHUkFESUVOVFxuYXR0cmlidXRlIHJlbWFwRGF0YTogdmVjNGY7XG4jZW5kaWZcbmF0dHJpYnV0ZSBvZmZzZXQ6IHZlYzJmO3VuaWZvcm0gdmlldzogbWF0NHg0Zjt1bmlmb3JtIHByb2plY3Rpb246IG1hdDR4NGY7dW5pZm9ybSB0cmFuc2xhdGlvblBpdm90OiB2ZWMyZjtcbiNpZmRlZiBBTklNQVRFU0hFRVRcbnVuaWZvcm0gcGFydGljbGVzSW5mb3M6IHZlYzNmOyBcbiNlbmRpZlxudmFyeWluZyB2VVY6IHZlYzJmO3ZhcnlpbmcgdkNvbG9yOiB2ZWM0ZjtcbiNpZmRlZiBQT1NJVElPTldfQVNfVkFSWUlOR1xudmFyeWluZyB2UG9zaXRpb25XOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFJBTVBHUkFESUVOVFxudmFyeWluZyByZW1hcFJhbmdlczogdmVjNGY7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEJJTExCT0FSRCkgJiYgIWRlZmluZWQoQklMTEJPQVJEWSkgJiYgIWRlZmluZWQoQklMTEJPQVJEU1RSRVRDSEVEKVxudW5pZm9ybSBpbnZWaWV3OiBtYXQ0eDRmO1xuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpZmRlZiBCSUxMQk9BUkRcbnVuaWZvcm0gZXllUG9zaXRpb246IHZlYzNmO1xuI2VuZGlmXG5mbiByb3RhdGUoeWF4aXM6IHZlYzNmLHJvdGF0ZWRDb3JuZXI6IHZlYzNmKS0+dmVjM2Yge3ZhciB4YXhpczogdmVjM2Y9bm9ybWFsaXplKGNyb3NzKCB2ZWMzZigwLiwxLjAsMC4pLHlheGlzKSk7dmFyIHpheGlzOiB2ZWMzZj1ub3JtYWxpemUoY3Jvc3MoeWF4aXMseGF4aXMpKTt2YXIgcm93MDogdmVjM2Y9IHZlYzNmKHhheGlzLngseGF4aXMueSx4YXhpcy56KTt2YXIgcm93MTogdmVjM2Y9IHZlYzNmKHlheGlzLngseWF4aXMueSx5YXhpcy56KTt2YXIgcm93MjogdmVjM2Y9IHZlYzNmKHpheGlzLngsemF4aXMueSx6YXhpcy56KTt2YXIgcm90TWF0cml4OiBtYXQzeDNmPSBtYXQzeDNmKHJvdzAscm93MSxyb3cyKTt2YXIgYWxpZ25lZENvcm5lcjogdmVjM2Y9cm90TWF0cml4KnJvdGF0ZWRDb3JuZXI7cmV0dXJuIHZlcnRleElucHV0cy5wb3NpdGlvbithbGlnbmVkQ29ybmVyO31cbiNpZmRlZiBCSUxMQk9BUkRTVFJFVENIRURcbmZuIHJvdGF0ZUFsaWduKHRvQ2FtZXJhOiB2ZWMzZixyb3RhdGVkQ29ybmVyOiB2ZWMzZiktPnZlYzNmIHt2YXIgbm9ybWFsaXplZFRvQ2FtZXJhOiB2ZWMzZj1ub3JtYWxpemUodG9DYW1lcmEpO3ZhciBub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYTogdmVjM2Y9bm9ybWFsaXplKGNyb3NzKG5vcm1hbGl6ZSh2ZXJ0ZXhJbnB1dHMuZGlyZWN0aW9uKSxub3JtYWxpemVkVG9DYW1lcmEpKTt2YXIgcm93MDogdmVjM2Y9IHZlYzNmKG5vcm1hbGl6ZWRDcm9zc0RpclRvQ2FtZXJhLngsbm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmEueSxub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYS56KTt2YXIgcm93MjogdmVjM2Y9IHZlYzNmKG5vcm1hbGl6ZWRUb0NhbWVyYS54LG5vcm1hbGl6ZWRUb0NhbWVyYS55LG5vcm1hbGl6ZWRUb0NhbWVyYS56KTtcbiNpZmRlZiBCSUxMQk9BUkRTVFJFVENIRURfTE9DQUxcbnZhciByb3cxOiB2ZWMzZj1ub3JtYWxpemUodmVydGV4SW5wdXRzLmRpcmVjdGlvbik7XG4jZWxzZVxudmFyIGNyb3NzUHJvZHVjdDogdmVjM2Y9bm9ybWFsaXplKGNyb3NzKG5vcm1hbGl6ZWRUb0NhbWVyYSxub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYSkpO3ZhciByb3cxOiB2ZWMzZj0gdmVjM2YoY3Jvc3NQcm9kdWN0LngsY3Jvc3NQcm9kdWN0LnksY3Jvc3NQcm9kdWN0LnopO1xuI2VuZGlmXG52YXIgcm90TWF0cml4OiBtYXQzeDNmPSBtYXQzeDNmKHJvdzAscm93MSxyb3cyKTt2YXIgYWxpZ25lZENvcm5lcjogdmVjM2Y9cm90TWF0cml4KnJvdGF0ZWRDb3JuZXI7cmV0dXJuIHZlcnRleElucHV0cy5wb3NpdGlvbithbGlnbmVkQ29ybmVyO31cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG5AdmVydGV4XG5mbiBtYWluKGlucHV0IDogVmVydGV4SW5wdXRzKS0+RnJhZ21lbnRJbnB1dHMge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbnZhciBjb3JuZXJQb3M6IHZlYzJmO3ZhciB2UG9zaXRpb25XOiB2ZWMzZjtjb3JuZXJQb3M9KCB2ZWMyZihpbnB1dC5vZmZzZXQueC0wLjUsaW5wdXQub2Zmc2V0LnkgLTAuNSktdW5pZm9ybXMudHJhbnNsYXRpb25QaXZvdCkqaW5wdXQuc2l6ZTtcbiNpZmRlZiBCSUxMQk9BUkRcbnZhciByb3RhdGVkQ29ybmVyOiB2ZWMzZjtcbiNpZmRlZiBCSUxMQk9BUkRZXG5yb3RhdGVkQ29ybmVyLng9Y29ybmVyUG9zLngqY29zKGlucHV0LmFuZ2xlKS1jb3JuZXJQb3MueSpzaW4oaW5wdXQuYW5nbGUpK3VuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QueDtyb3RhdGVkQ29ybmVyLno9Y29ybmVyUG9zLngqc2luKGlucHV0LmFuZ2xlKStjb3JuZXJQb3MueSpjb3MoaW5wdXQuYW5nbGUpK3VuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QueTtyb3RhdGVkQ29ybmVyLnk9MC47dmFyIHlheGlzOiB2ZWMzZj1pbnB1dC5wb3NpdGlvbi11bmlmb3Jtcy5leWVQb3NpdGlvbjt5YXhpcy55PTAuO3ZQb3NpdGlvblc9cm90YXRlKG5vcm1hbGl6ZSh5YXhpcykscm90YXRlZENvcm5lcik7dmFyIHZpZXdQb3M6IHZlYzNmPSh1bmlmb3Jtcy52aWV3KiB2ZWM0Zih2UG9zaXRpb25XLDEuMCkpLnh5ejtcbiNlbGlmIGRlZmluZWQoQklMTEJPQVJEU1RSRVRDSEVEKVxucm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhpbnB1dC5hbmdsZSktY29ybmVyUG9zLnkqc2luKGlucHV0LmFuZ2xlKSt1bmlmb3Jtcy50cmFuc2xhdGlvblBpdm90Lng7cm90YXRlZENvcm5lci55PWNvcm5lclBvcy54KnNpbihpbnB1dC5hbmdsZSkrY29ybmVyUG9zLnkqY29zKGlucHV0LmFuZ2xlKSt1bmlmb3Jtcy50cmFuc2xhdGlvblBpdm90Lnk7cm90YXRlZENvcm5lci56PTAuO3ZhciB0b0NhbWVyYTogdmVjM2Y9aW5wdXQucG9zaXRpb24tdW5pZm9ybXMuZXllUG9zaXRpb247dlBvc2l0aW9uVz1yb3RhdGVBbGlnbih0b0NhbWVyYSxyb3RhdGVkQ29ybmVyKTt2YXIgdmlld1BvczogdmVjM2Y9KHVuaWZvcm1zLnZpZXcqIHZlYzRmKHZQb3NpdGlvblcsMS4wKSkueHl6O1xuI2Vsc2VcbnJvdGF0ZWRDb3JuZXIueD1jb3JuZXJQb3MueCpjb3MoaW5wdXQuYW5nbGUpLWNvcm5lclBvcy55KnNpbihpbnB1dC5hbmdsZSkrdW5pZm9ybXMudHJhbnNsYXRpb25QaXZvdC54O3JvdGF0ZWRDb3JuZXIueT1jb3JuZXJQb3MueCpzaW4oaW5wdXQuYW5nbGUpK2Nvcm5lclBvcy55KmNvcyhpbnB1dC5hbmdsZSkrdW5pZm9ybXMudHJhbnNsYXRpb25QaXZvdC55O3JvdGF0ZWRDb3JuZXIuej0wLjt2YXIgdmlld1BvczogdmVjM2Y9KHVuaWZvcm1zLnZpZXcqIHZlYzRmKGlucHV0LnBvc2l0aW9uLDEuMCkpLnh5eityb3RhdGVkQ29ybmVyO3ZQb3NpdGlvblc9KHVuaWZvcm1zLmludlZpZXcqIHZlYzRmKHZpZXdQb3MsMSkpLnh5ejtcbiNlbmRpZlxuI2lmZGVmIFJBTVBHUkFESUVOVFxudmVydGV4T3V0cHV0cy5yZW1hcFJhbmdlcz1pbnB1dC5yZW1hcERhdGE7XG4jZW5kaWZcbnZlcnRleE91dHB1dHMucG9zaXRpb249dW5pZm9ybXMucHJvamVjdGlvbiogdmVjNGYodmlld1BvcywxLjApO1xuI2Vsc2VcbnZhciByb3RhdGVkQ29ybmVyOiB2ZWMzZjtyb3RhdGVkQ29ybmVyLng9Y29ybmVyUG9zLngqY29zKGlucHV0LmFuZ2xlKS1jb3JuZXJQb3MueSpzaW4oaW5wdXQuYW5nbGUpK3VuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QueDtyb3RhdGVkQ29ybmVyLno9Y29ybmVyUG9zLngqc2luKGlucHV0LmFuZ2xlKStjb3JuZXJQb3MueSpjb3MoaW5wdXQuYW5nbGUpK3VuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QueTtyb3RhdGVkQ29ybmVyLnk9MC47dmFyIHlheGlzOiB2ZWMzZj1ub3JtYWxpemUodmVydGV4SW5wdXRzLmRpcmVjdGlvbik7dlBvc2l0aW9uVz1yb3RhdGUoeWF4aXMscm90YXRlZENvcm5lcik7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj11bmlmb3Jtcy5wcm9qZWN0aW9uKnVuaWZvcm1zLnZpZXcqIHZlYzRmKHZQb3NpdGlvblcsMS4wKTtcbiNlbmRpZlxudmVydGV4T3V0cHV0cy52Q29sb3I9aW5wdXQuY29sb3I7XG4jaWZkZWYgQU5JTUFURVNIRUVUXG52YXIgcm93T2Zmc2V0OiBmMzI9Zmxvb3IoaW5wdXQuY2VsbEluZGV4KnVuaWZvcm1zLnBhcnRpY2xlc0luZm9zLnopO3ZhciBjb2x1bW5PZmZzZXQ6IGYzMj1pbnB1dC5jZWxsSW5kZXgtcm93T2Zmc2V0L3VuaWZvcm1zLnBhcnRpY2xlc0luZm9zLno7dmFyIHV2U2NhbGU6IHZlYzJmPXVuaWZvcm1zLnBhcnRpY2xlc0luZm9zLnh5O3ZhciB1dk9mZnNldDogdmVjMmY9IHZlYzJmKGlucHV0Lm9mZnNldC54ICwxLjAtaW5wdXQub2Zmc2V0LnkpO3ZlcnRleE91dHB1dHMudlVWPSh1dk9mZnNldCsgdmVjMmYoY29sdW1uT2Zmc2V0LHJvd09mZnNldCkpKnV2U2NhbGU7XG4jZWxzZVxudmVydGV4T3V0cHV0cy52VVY9aW5wdXQub2Zmc2V0O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTElQUExBTkUpIHx8IGRlZmluZWQoQ0xJUFBMQU5FMikgfHwgZGVmaW5lZChDTElQUExBTkUzKSB8fCBkZWZpbmVkKENMSVBQTEFORTQpIHx8IGRlZmluZWQoQ0xJUFBMQU5FNSkgfHwgZGVmaW5lZChDTElQUExBTkU2KSB8fCBkZWZpbmVkKEZPRylcbnZhciB3b3JsZFBvczogdmVjNGY9IHZlYzRmKHZQb3NpdGlvblcsMS4wKTtcbiNlbmRpZlxuI2lmZGVmIFBPU0lUSU9OV19BU19WQVJZSU5HXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblc9dlBvc2l0aW9uVztcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxuI2luY2x1ZGU8Zm9nVmVydGV4PlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYXJ0aWNsZXNWZXJ0ZXhTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=