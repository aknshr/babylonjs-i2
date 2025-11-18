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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3BhcnRpY2xlc192ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9wYXJ0aWNsZXMudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwicGFydGljbGVzVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgYXR0cmlidXRlIHBvc2l0aW9uOiB2ZWMzZjthdHRyaWJ1dGUgY29sb3I6IHZlYzRmO2F0dHJpYnV0ZSBhbmdsZTogZjMyO2F0dHJpYnV0ZSBzaXplOiB2ZWMyZjtcbiNpZmRlZiBBTklNQVRFU0hFRVRcbmF0dHJpYnV0ZSBjZWxsSW5kZXg6IGYzMjtcbiNlbmRpZlxuI2lmbmRlZiBCSUxMQk9BUkRcbmF0dHJpYnV0ZSBkaXJlY3Rpb246IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgQklMTEJPQVJEU1RSRVRDSEVEXG5hdHRyaWJ1dGUgZGlyZWN0aW9uOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFJBTVBHUkFESUVOVFxuYXR0cmlidXRlIHJlbWFwRGF0YTogdmVjNGY7XG4jZW5kaWZcbmF0dHJpYnV0ZSBvZmZzZXQ6IHZlYzJmO3VuaWZvcm0gdmlldzogbWF0NHg0Zjt1bmlmb3JtIHByb2plY3Rpb246IG1hdDR4NGY7dW5pZm9ybSB0cmFuc2xhdGlvblBpdm90OiB2ZWMyZjtcbiNpZmRlZiBBTklNQVRFU0hFRVRcbnVuaWZvcm0gcGFydGljbGVzSW5mb3M6IHZlYzNmOyBcbiNlbmRpZlxudmFyeWluZyB2VVY6IHZlYzJmO3ZhcnlpbmcgdkNvbG9yOiB2ZWM0ZjtcbiNpZmRlZiBSQU1QR1JBRElFTlRcbnZhcnlpbmcgcmVtYXBSYW5nZXM6IHZlYzRmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChCSUxMQk9BUkQpICYmICFkZWZpbmVkKEJJTExCT0FSRFkpICYmICFkZWZpbmVkKEJJTExCT0FSRFNUUkVUQ0hFRClcbnVuaWZvcm0gaW52VmlldzogbWF0NHg0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jaWZkZWYgQklMTEJPQVJEXG51bmlmb3JtIGV5ZVBvc2l0aW9uOiB2ZWMzZjtcbiNlbmRpZlxuZm4gcm90YXRlKHlheGlzOiB2ZWMzZixyb3RhdGVkQ29ybmVyOiB2ZWMzZiktPnZlYzNmIHt2YXIgeGF4aXM6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyggdmVjM2YoMC4sMS4wLDAuKSx5YXhpcykpO3ZhciB6YXhpczogdmVjM2Y9bm9ybWFsaXplKGNyb3NzKHlheGlzLHhheGlzKSk7dmFyIHJvdzA6IHZlYzNmPSB2ZWMzZih4YXhpcy54LHhheGlzLnkseGF4aXMueik7dmFyIHJvdzE6IHZlYzNmPSB2ZWMzZih5YXhpcy54LHlheGlzLnkseWF4aXMueik7dmFyIHJvdzI6IHZlYzNmPSB2ZWMzZih6YXhpcy54LHpheGlzLnksemF4aXMueik7dmFyIHJvdE1hdHJpeDogbWF0M3gzZj0gbWF0M3gzZihyb3cwLHJvdzEscm93Mik7dmFyIGFsaWduZWRDb3JuZXI6IHZlYzNmPXJvdE1hdHJpeCpyb3RhdGVkQ29ybmVyO3JldHVybiB2ZXJ0ZXhJbnB1dHMucG9zaXRpb24rYWxpZ25lZENvcm5lcjt9XG4jaWZkZWYgQklMTEJPQVJEU1RSRVRDSEVEXG5mbiByb3RhdGVBbGlnbih0b0NhbWVyYTogdmVjM2Yscm90YXRlZENvcm5lcjogdmVjM2YpLT52ZWMzZiB7dmFyIG5vcm1hbGl6ZWRUb0NhbWVyYTogdmVjM2Y9bm9ybWFsaXplKHRvQ2FtZXJhKTt2YXIgbm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmE6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyhub3JtYWxpemUodmVydGV4SW5wdXRzLmRpcmVjdGlvbiksbm9ybWFsaXplZFRvQ2FtZXJhKSk7dmFyIHJvdzA6IHZlYzNmPSB2ZWMzZihub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYS54LG5vcm1hbGl6ZWRDcm9zc0RpclRvQ2FtZXJhLnksbm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmEueik7dmFyIHJvdzI6IHZlYzNmPSB2ZWMzZihub3JtYWxpemVkVG9DYW1lcmEueCxub3JtYWxpemVkVG9DYW1lcmEueSxub3JtYWxpemVkVG9DYW1lcmEueik7XG4jaWZkZWYgQklMTEJPQVJEU1RSRVRDSEVEX0xPQ0FMXG52YXIgcm93MTogdmVjM2Y9bm9ybWFsaXplKHZlcnRleElucHV0cy5kaXJlY3Rpb24pO1xuI2Vsc2VcbnZhciBjcm9zc1Byb2R1Y3Q6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyhub3JtYWxpemVkVG9DYW1lcmEsbm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmEpKTt2YXIgcm93MTogdmVjM2Y9IHZlYzNmKGNyb3NzUHJvZHVjdC54LGNyb3NzUHJvZHVjdC55LGNyb3NzUHJvZHVjdC56KTtcbiNlbmRpZlxudmFyIHJvdE1hdHJpeDogbWF0M3gzZj0gbWF0M3gzZihyb3cwLHJvdzEscm93Mik7dmFyIGFsaWduZWRDb3JuZXI6IHZlYzNmPXJvdE1hdHJpeCpyb3RhdGVkQ29ybmVyO3JldHVybiB2ZXJ0ZXhJbnB1dHMucG9zaXRpb24rYWxpZ25lZENvcm5lcjt9XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xuQHZlcnRleFxuZm4gbWFpbihpbnB1dCA6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52YXIgY29ybmVyUG9zOiB2ZWMyZjt2YXIgdlBvc2l0aW9uVzogdmVjM2Y7Y29ybmVyUG9zPSggdmVjMmYoaW5wdXQub2Zmc2V0LngtMC41LGlucHV0Lm9mZnNldC55IC0wLjUpLXVuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QpKmlucHV0LnNpemU7XG4jaWZkZWYgQklMTEJPQVJEXG52YXIgcm90YXRlZENvcm5lcjogdmVjM2Y7XG4jaWZkZWYgQklMTEJPQVJEWVxucm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhpbnB1dC5hbmdsZSktY29ybmVyUG9zLnkqc2luKGlucHV0LmFuZ2xlKSt1bmlmb3Jtcy50cmFuc2xhdGlvblBpdm90Lng7cm90YXRlZENvcm5lci56PWNvcm5lclBvcy54KnNpbihpbnB1dC5hbmdsZSkrY29ybmVyUG9zLnkqY29zKGlucHV0LmFuZ2xlKSt1bmlmb3Jtcy50cmFuc2xhdGlvblBpdm90Lnk7cm90YXRlZENvcm5lci55PTAuO3ZhciB5YXhpczogdmVjM2Y9aW5wdXQucG9zaXRpb24tdW5pZm9ybXMuZXllUG9zaXRpb247eWF4aXMueT0wLjt2UG9zaXRpb25XPXJvdGF0ZShub3JtYWxpemUoeWF4aXMpLHJvdGF0ZWRDb3JuZXIpO3ZhciB2aWV3UG9zOiB2ZWMzZj0odW5pZm9ybXMudmlldyogdmVjNGYodlBvc2l0aW9uVywxLjApKS54eXo7XG4jZWxpZiBkZWZpbmVkKEJJTExCT0FSRFNUUkVUQ0hFRClcbnJvdGF0ZWRDb3JuZXIueD1jb3JuZXJQb3MueCpjb3MoaW5wdXQuYW5nbGUpLWNvcm5lclBvcy55KnNpbihpbnB1dC5hbmdsZSkrdW5pZm9ybXMudHJhbnNsYXRpb25QaXZvdC54O3JvdGF0ZWRDb3JuZXIueT1jb3JuZXJQb3MueCpzaW4oaW5wdXQuYW5nbGUpK2Nvcm5lclBvcy55KmNvcyhpbnB1dC5hbmdsZSkrdW5pZm9ybXMudHJhbnNsYXRpb25QaXZvdC55O3JvdGF0ZWRDb3JuZXIuej0wLjt2YXIgdG9DYW1lcmE6IHZlYzNmPWlucHV0LnBvc2l0aW9uLXVuaWZvcm1zLmV5ZVBvc2l0aW9uO3ZQb3NpdGlvblc9cm90YXRlQWxpZ24odG9DYW1lcmEscm90YXRlZENvcm5lcik7dmFyIHZpZXdQb3M6IHZlYzNmPSh1bmlmb3Jtcy52aWV3KiB2ZWM0Zih2UG9zaXRpb25XLDEuMCkpLnh5ejtcbiNlbHNlXG5yb3RhdGVkQ29ybmVyLng9Y29ybmVyUG9zLngqY29zKGlucHV0LmFuZ2xlKS1jb3JuZXJQb3MueSpzaW4oaW5wdXQuYW5nbGUpK3VuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QueDtyb3RhdGVkQ29ybmVyLnk9Y29ybmVyUG9zLngqc2luKGlucHV0LmFuZ2xlKStjb3JuZXJQb3MueSpjb3MoaW5wdXQuYW5nbGUpK3VuaWZvcm1zLnRyYW5zbGF0aW9uUGl2b3QueTtyb3RhdGVkQ29ybmVyLno9MC47dmFyIHZpZXdQb3M6IHZlYzNmPSh1bmlmb3Jtcy52aWV3KiB2ZWM0ZihpbnB1dC5wb3NpdGlvbiwxLjApKS54eXorcm90YXRlZENvcm5lcjt2UG9zaXRpb25XPSh1bmlmb3Jtcy5pbnZWaWV3KiB2ZWM0Zih2aWV3UG9zLDEpKS54eXo7XG4jZW5kaWZcbiNpZmRlZiBSQU1QR1JBRElFTlRcbnZlcnRleE91dHB1dHMucmVtYXBSYW5nZXM9aW5wdXQucmVtYXBEYXRhO1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXVuaWZvcm1zLnByb2plY3Rpb24qIHZlYzRmKHZpZXdQb3MsMS4wKTtcbiNlbHNlXG52YXIgcm90YXRlZENvcm5lcjogdmVjM2Y7cm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhpbnB1dC5hbmdsZSktY29ybmVyUG9zLnkqc2luKGlucHV0LmFuZ2xlKSt1bmlmb3Jtcy50cmFuc2xhdGlvblBpdm90Lng7cm90YXRlZENvcm5lci56PWNvcm5lclBvcy54KnNpbihpbnB1dC5hbmdsZSkrY29ybmVyUG9zLnkqY29zKGlucHV0LmFuZ2xlKSt1bmlmb3Jtcy50cmFuc2xhdGlvblBpdm90Lnk7cm90YXRlZENvcm5lci55PTAuO3ZhciB5YXhpczogdmVjM2Y9bm9ybWFsaXplKHZlcnRleElucHV0cy5kaXJlY3Rpb24pO3ZQb3NpdGlvblc9cm90YXRlKHlheGlzLHJvdGF0ZWRDb3JuZXIpO3ZlcnRleE91dHB1dHMucG9zaXRpb249dW5pZm9ybXMucHJvamVjdGlvbip1bmlmb3Jtcy52aWV3KiB2ZWM0Zih2UG9zaXRpb25XLDEuMCk7XG4jZW5kaWZcbnZlcnRleE91dHB1dHMudkNvbG9yPWlucHV0LmNvbG9yO1xuI2lmZGVmIEFOSU1BVEVTSEVFVFxudmFyIHJvd09mZnNldDogZjMyPWZsb29yKGlucHV0LmNlbGxJbmRleCp1bmlmb3Jtcy5wYXJ0aWNsZXNJbmZvcy56KTt2YXIgY29sdW1uT2Zmc2V0OiBmMzI9aW5wdXQuY2VsbEluZGV4LXJvd09mZnNldC91bmlmb3Jtcy5wYXJ0aWNsZXNJbmZvcy56O3ZhciB1dlNjYWxlOiB2ZWMyZj11bmlmb3Jtcy5wYXJ0aWNsZXNJbmZvcy54eTt2YXIgdXZPZmZzZXQ6IHZlYzJmPSB2ZWMyZihpbnB1dC5vZmZzZXQueCAsMS4wLWlucHV0Lm9mZnNldC55KTt2ZXJ0ZXhPdXRwdXRzLnZVVj0odXZPZmZzZXQrIHZlYzJmKGNvbHVtbk9mZnNldCxyb3dPZmZzZXQpKSp1dlNjYWxlO1xuI2Vsc2VcbnZlcnRleE91dHB1dHMudlVWPWlucHV0Lm9mZnNldDtcbiNlbmRpZlxuI2lmIGRlZmluZWQoQ0xJUFBMQU5FKSB8fCBkZWZpbmVkKENMSVBQTEFORTIpIHx8IGRlZmluZWQoQ0xJUFBMQU5FMykgfHwgZGVmaW5lZChDTElQUExBTkU0KSB8fCBkZWZpbmVkKENMSVBQTEFORTUpIHx8IGRlZmluZWQoQ0xJUFBMQU5FNikgfHwgZGVmaW5lZChGT0cpXG52YXIgd29ybGRQb3M6IHZlYzRmPSB2ZWM0Zih2UG9zaXRpb25XLDEuMCk7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPGxvZ0RlcHRoVmVydGV4PlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGFydGljbGVzVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=