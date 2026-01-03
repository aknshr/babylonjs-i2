"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_particles_vertex_js"],{

/***/ "../core/dist/Shaders/particles.vertex.js":
/*!************************************************!*\
  !*** ../core/dist/Shaders/particles.vertex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesVertexShader: () => (/* binding */ particlesVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/Shaders/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.







const name = "particlesVertexShader";
const shader = `attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;
#ifdef ANIMATESHEET
attribute float cellIndex;
#endif
#ifndef BILLBOARD
attribute vec3 direction;
#endif
#ifdef BILLBOARDSTRETCHED
attribute vec3 direction;
#endif
#ifdef RAMPGRADIENT
attribute vec4 remapData;
#endif
attribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;
#ifdef ANIMATESHEET
uniform vec3 particlesInfos; 
#endif
varying vec2 vUV;varying vec4 vColor;
#ifdef RAMPGRADIENT
varying vec4 remapRanges;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform mat4 invView;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform vec3 eyePosition;
#endif
vec3 rotate(vec3 yaxis,vec3 rotatedCorner) {vec3 xaxis=normalize(cross(vec3(0.,1.0,0.),yaxis));vec3 zaxis=normalize(cross(yaxis,xaxis));vec3 row0=vec3(xaxis.x,xaxis.y,xaxis.z);vec3 row1=vec3(yaxis.x,yaxis.y,yaxis.z);vec3 row2=vec3(zaxis.x,zaxis.y,zaxis.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
vec3 rotateAlign(vec3 toCamera,vec3 rotatedCorner) {vec3 normalizedToCamera=normalize(toCamera);vec3 normalizedCrossDirToCamera=normalize(cross(normalize(direction),normalizedToCamera));vec3 row0=vec3(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);vec3 row2=vec3(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
vec3 row1=normalize(direction);
#else
vec3 crossProduct=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));vec3 row1=vec3(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec2 cornerPos;vec3 vPositionW;cornerPos=(vec2(offset.x-0.5,offset.y -0.5)-translationPivot)*size;
#ifdef BILLBOARD
vec3 rotatedCorner;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=position-eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 toCamera=position-eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 viewPos=(view*vec4(position,1.0)).xyz+rotatedCorner;vPositionW=(invView*vec4(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
remapRanges=remapData;
#endif
gl_Position=projection*vec4(viewPos,1.0);
#else
vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=normalize(direction);vPositionW=rotate(yaxis,rotatedCorner);gl_Position=projection*view*vec4(vPositionW,1.0);
#endif
vColor=color;
#ifdef ANIMATESHEET
float rowOffset=floor(cellIndex*particlesInfos.z);float columnOffset=cellIndex-rowOffset/particlesInfos.z;vec2 uvScale=particlesInfos.xy;vec2 uvOffset=vec2(offset.x ,1.0-offset.y);vUV=(uvOffset+vec2(columnOffset,rowOffset))*uvScale;
#else
vUV=offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
vec4 worldPos=vec4(vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const particlesVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGFydGljbGVzX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9wYXJ0aWNsZXMudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwicGFydGljbGVzVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgYXR0cmlidXRlIHZlYzMgcG9zaXRpb247YXR0cmlidXRlIHZlYzQgY29sb3I7YXR0cmlidXRlIGZsb2F0IGFuZ2xlO2F0dHJpYnV0ZSB2ZWMyIHNpemU7XG4jaWZkZWYgQU5JTUFURVNIRUVUXG5hdHRyaWJ1dGUgZmxvYXQgY2VsbEluZGV4O1xuI2VuZGlmXG4jaWZuZGVmIEJJTExCT0FSRFxuYXR0cmlidXRlIHZlYzMgZGlyZWN0aW9uO1xuI2VuZGlmXG4jaWZkZWYgQklMTEJPQVJEU1RSRVRDSEVEXG5hdHRyaWJ1dGUgdmVjMyBkaXJlY3Rpb247XG4jZW5kaWZcbiNpZmRlZiBSQU1QR1JBRElFTlRcbmF0dHJpYnV0ZSB2ZWM0IHJlbWFwRGF0YTtcbiNlbmRpZlxuYXR0cmlidXRlIHZlYzIgb2Zmc2V0O3VuaWZvcm0gbWF0NCB2aWV3O3VuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO3VuaWZvcm0gdmVjMiB0cmFuc2xhdGlvblBpdm90O1xuI2lmZGVmIEFOSU1BVEVTSEVFVFxudW5pZm9ybSB2ZWMzIHBhcnRpY2xlc0luZm9zOyBcbiNlbmRpZlxudmFyeWluZyB2ZWMyIHZVVjt2YXJ5aW5nIHZlYzQgdkNvbG9yO1xuI2lmZGVmIFJBTVBHUkFESUVOVFxudmFyeWluZyB2ZWM0IHJlbWFwUmFuZ2VzO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChCSUxMQk9BUkQpICYmICFkZWZpbmVkKEJJTExCT0FSRFkpICYmICFkZWZpbmVkKEJJTExCT0FSRFNUUkVUQ0hFRClcbnVuaWZvcm0gbWF0NCBpbnZWaWV3O1xuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNpZmRlZiBCSUxMQk9BUkRcbnVuaWZvcm0gdmVjMyBleWVQb3NpdGlvbjtcbiNlbmRpZlxudmVjMyByb3RhdGUodmVjMyB5YXhpcyx2ZWMzIHJvdGF0ZWRDb3JuZXIpIHt2ZWMzIHhheGlzPW5vcm1hbGl6ZShjcm9zcyh2ZWMzKDAuLDEuMCwwLikseWF4aXMpKTt2ZWMzIHpheGlzPW5vcm1hbGl6ZShjcm9zcyh5YXhpcyx4YXhpcykpO3ZlYzMgcm93MD12ZWMzKHhheGlzLngseGF4aXMueSx4YXhpcy56KTt2ZWMzIHJvdzE9dmVjMyh5YXhpcy54LHlheGlzLnkseWF4aXMueik7dmVjMyByb3cyPXZlYzMoemF4aXMueCx6YXhpcy55LHpheGlzLnopO21hdDMgcm90TWF0cml4PSBtYXQzKHJvdzAscm93MSxyb3cyKTt2ZWMzIGFsaWduZWRDb3JuZXI9cm90TWF0cml4KnJvdGF0ZWRDb3JuZXI7cmV0dXJuIHBvc2l0aW9uK2FsaWduZWRDb3JuZXI7fVxuI2lmZGVmIEJJTExCT0FSRFNUUkVUQ0hFRFxudmVjMyByb3RhdGVBbGlnbih2ZWMzIHRvQ2FtZXJhLHZlYzMgcm90YXRlZENvcm5lcikge3ZlYzMgbm9ybWFsaXplZFRvQ2FtZXJhPW5vcm1hbGl6ZSh0b0NhbWVyYSk7dmVjMyBub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYT1ub3JtYWxpemUoY3Jvc3Mobm9ybWFsaXplKGRpcmVjdGlvbiksbm9ybWFsaXplZFRvQ2FtZXJhKSk7dmVjMyByb3cwPXZlYzMobm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmEueCxub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYS55LG5vcm1hbGl6ZWRDcm9zc0RpclRvQ2FtZXJhLnopO3ZlYzMgcm93Mj12ZWMzKG5vcm1hbGl6ZWRUb0NhbWVyYS54LG5vcm1hbGl6ZWRUb0NhbWVyYS55LG5vcm1hbGl6ZWRUb0NhbWVyYS56KTtcbiNpZmRlZiBCSUxMQk9BUkRTVFJFVENIRURfTE9DQUxcbnZlYzMgcm93MT1ub3JtYWxpemUoZGlyZWN0aW9uKTtcbiNlbHNlXG52ZWMzIGNyb3NzUHJvZHVjdD1ub3JtYWxpemUoY3Jvc3Mobm9ybWFsaXplZFRvQ2FtZXJhLG5vcm1hbGl6ZWRDcm9zc0RpclRvQ2FtZXJhKSk7dmVjMyByb3cxPXZlYzMoY3Jvc3NQcm9kdWN0LngsY3Jvc3NQcm9kdWN0LnksY3Jvc3NQcm9kdWN0LnopO1xuI2VuZGlmXG5tYXQzIHJvdE1hdHJpeD0gbWF0Myhyb3cwLHJvdzEscm93Mik7dmVjMyBhbGlnbmVkQ29ybmVyPXJvdE1hdHJpeCpyb3RhdGVkQ29ybmVyO3JldHVybiBwb3NpdGlvbithbGlnbmVkQ29ybmVyO31cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbnZlYzIgY29ybmVyUG9zO3ZlYzMgdlBvc2l0aW9uVztjb3JuZXJQb3M9KHZlYzIob2Zmc2V0LngtMC41LG9mZnNldC55IC0wLjUpLXRyYW5zbGF0aW9uUGl2b3QpKnNpemU7XG4jaWZkZWYgQklMTEJPQVJEXG52ZWMzIHJvdGF0ZWRDb3JuZXI7XG4jaWZkZWYgQklMTEJPQVJEWVxucm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhhbmdsZSktY29ybmVyUG9zLnkqc2luKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLno9Y29ybmVyUG9zLngqc2luKGFuZ2xlKStjb3JuZXJQb3MueSpjb3MoYW5nbGUpO3JvdGF0ZWRDb3JuZXIueT0wLjtyb3RhdGVkQ29ybmVyLnh6Kz10cmFuc2xhdGlvblBpdm90O3ZlYzMgeWF4aXM9cG9zaXRpb24tZXllUG9zaXRpb247eWF4aXMueT0wLjt2UG9zaXRpb25XPXJvdGF0ZShub3JtYWxpemUoeWF4aXMpLHJvdGF0ZWRDb3JuZXIpO3ZlYzMgdmlld1Bvcz0odmlldyp2ZWM0KHZQb3NpdGlvblcsMS4wKSkueHl6O1xuI2VsaWYgZGVmaW5lZChCSUxMQk9BUkRTVFJFVENIRUQpXG5yb3RhdGVkQ29ybmVyLng9Y29ybmVyUG9zLngqY29zKGFuZ2xlKS1jb3JuZXJQb3MueSpzaW4oYW5nbGUpO3JvdGF0ZWRDb3JuZXIueT1jb3JuZXJQb3MueCpzaW4oYW5nbGUpK2Nvcm5lclBvcy55KmNvcyhhbmdsZSk7cm90YXRlZENvcm5lci56PTAuO3JvdGF0ZWRDb3JuZXIueHkrPXRyYW5zbGF0aW9uUGl2b3Q7dmVjMyB0b0NhbWVyYT1wb3NpdGlvbi1leWVQb3NpdGlvbjt2UG9zaXRpb25XPXJvdGF0ZUFsaWduKHRvQ2FtZXJhLHJvdGF0ZWRDb3JuZXIpO3ZlYzMgdmlld1Bvcz0odmlldyp2ZWM0KHZQb3NpdGlvblcsMS4wKSkueHl6O1xuI2Vsc2VcbnJvdGF0ZWRDb3JuZXIueD1jb3JuZXJQb3MueCpjb3MoYW5nbGUpLWNvcm5lclBvcy55KnNpbihhbmdsZSk7cm90YXRlZENvcm5lci55PWNvcm5lclBvcy54KnNpbihhbmdsZSkrY29ybmVyUG9zLnkqY29zKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLno9MC47cm90YXRlZENvcm5lci54eSs9dHJhbnNsYXRpb25QaXZvdDt2ZWMzIHZpZXdQb3M9KHZpZXcqdmVjNChwb3NpdGlvbiwxLjApKS54eXorcm90YXRlZENvcm5lcjt2UG9zaXRpb25XPShpbnZWaWV3KnZlYzQodmlld1BvcywxKSkueHl6O1xuI2VuZGlmXG4jaWZkZWYgUkFNUEdSQURJRU5UXG5yZW1hcFJhbmdlcz1yZW1hcERhdGE7XG4jZW5kaWZcbmdsX1Bvc2l0aW9uPXByb2plY3Rpb24qdmVjNCh2aWV3UG9zLDEuMCk7XG4jZWxzZVxudmVjMyByb3RhdGVkQ29ybmVyO3JvdGF0ZWRDb3JuZXIueD1jb3JuZXJQb3MueCpjb3MoYW5nbGUpLWNvcm5lclBvcy55KnNpbihhbmdsZSk7cm90YXRlZENvcm5lci56PWNvcm5lclBvcy54KnNpbihhbmdsZSkrY29ybmVyUG9zLnkqY29zKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLnk9MC47cm90YXRlZENvcm5lci54eis9dHJhbnNsYXRpb25QaXZvdDt2ZWMzIHlheGlzPW5vcm1hbGl6ZShkaXJlY3Rpb24pO3ZQb3NpdGlvblc9cm90YXRlKHlheGlzLHJvdGF0ZWRDb3JuZXIpO2dsX1Bvc2l0aW9uPXByb2plY3Rpb24qdmlldyp2ZWM0KHZQb3NpdGlvblcsMS4wKTtcbiNlbmRpZlxudkNvbG9yPWNvbG9yO1xuI2lmZGVmIEFOSU1BVEVTSEVFVFxuZmxvYXQgcm93T2Zmc2V0PWZsb29yKGNlbGxJbmRleCpwYXJ0aWNsZXNJbmZvcy56KTtmbG9hdCBjb2x1bW5PZmZzZXQ9Y2VsbEluZGV4LXJvd09mZnNldC9wYXJ0aWNsZXNJbmZvcy56O3ZlYzIgdXZTY2FsZT1wYXJ0aWNsZXNJbmZvcy54eTt2ZWMyIHV2T2Zmc2V0PXZlYzIob2Zmc2V0LnggLDEuMC1vZmZzZXQueSk7dlVWPSh1dk9mZnNldCt2ZWMyKGNvbHVtbk9mZnNldCxyb3dPZmZzZXQpKSp1dlNjYWxlO1xuI2Vsc2VcbnZVVj1vZmZzZXQ7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMSVBQTEFORSkgfHwgZGVmaW5lZChDTElQUExBTkUyKSB8fCBkZWZpbmVkKENMSVBQTEFORTMpIHx8IGRlZmluZWQoQ0xJUFBMQU5FNCkgfHwgZGVmaW5lZChDTElQUExBTkU1KSB8fCBkZWZpbmVkKENMSVBQTEFORTYpIHx8IGRlZmluZWQoRk9HKVxudmVjNCB3b3JsZFBvcz12ZWM0KHZQb3NpdGlvblcsMS4wKTtcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4PlxuI2luY2x1ZGU8Zm9nVmVydGV4PlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGFydGljbGVzVmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=