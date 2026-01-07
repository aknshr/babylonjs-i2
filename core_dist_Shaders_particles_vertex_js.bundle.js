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
#ifdef POSITIONW_AS_VARYING
varying vec3 vPositionW;
#endif
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
vec2 cornerPos;
#ifndef POSITIONW_AS_VARYING
vec3 vPositionW;
#endif
cornerPos=(vec2(offset.x-0.5,offset.y -0.5)-translationPivot)*size;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGFydGljbGVzX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvcGFydGljbGVzLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoVmVydGV4XCI7XG5cbmNvbnN0IG5hbWUgPSBcInBhcnRpY2xlc1ZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO2F0dHJpYnV0ZSB2ZWM0IGNvbG9yO2F0dHJpYnV0ZSBmbG9hdCBhbmdsZTthdHRyaWJ1dGUgdmVjMiBzaXplO1xuI2lmZGVmIEFOSU1BVEVTSEVFVFxuYXR0cmlidXRlIGZsb2F0IGNlbGxJbmRleDtcbiNlbmRpZlxuI2lmbmRlZiBCSUxMQk9BUkRcbmF0dHJpYnV0ZSB2ZWMzIGRpcmVjdGlvbjtcbiNlbmRpZlxuI2lmZGVmIEJJTExCT0FSRFNUUkVUQ0hFRFxuYXR0cmlidXRlIHZlYzMgZGlyZWN0aW9uO1xuI2VuZGlmXG4jaWZkZWYgUkFNUEdSQURJRU5UXG5hdHRyaWJ1dGUgdmVjNCByZW1hcERhdGE7XG4jZW5kaWZcbmF0dHJpYnV0ZSB2ZWMyIG9mZnNldDt1bmlmb3JtIG1hdDQgdmlldzt1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjt1bmlmb3JtIHZlYzIgdHJhbnNsYXRpb25QaXZvdDtcbiNpZmRlZiBBTklNQVRFU0hFRVRcbnVuaWZvcm0gdmVjMyBwYXJ0aWNsZXNJbmZvczsgXG4jZW5kaWZcbnZhcnlpbmcgdmVjMiB2VVY7dmFyeWluZyB2ZWM0IHZDb2xvcjtcbiNpZmRlZiBQT1NJVElPTldfQVNfVkFSWUlOR1xudmFyeWluZyB2ZWMzIHZQb3NpdGlvblc7XG4jZW5kaWZcbiNpZmRlZiBSQU1QR1JBRElFTlRcbnZhcnlpbmcgdmVjNCByZW1hcFJhbmdlcztcbiNlbmRpZlxuI2lmIGRlZmluZWQoQklMTEJPQVJEKSAmJiAhZGVmaW5lZChCSUxMQk9BUkRZKSAmJiAhZGVmaW5lZChCSUxMQk9BUkRTVFJFVENIRUQpXG51bmlmb3JtIG1hdDQgaW52VmlldztcbiNlbmRpZlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jaWZkZWYgQklMTEJPQVJEXG51bmlmb3JtIHZlYzMgZXllUG9zaXRpb247XG4jZW5kaWZcbnZlYzMgcm90YXRlKHZlYzMgeWF4aXMsdmVjMyByb3RhdGVkQ29ybmVyKSB7dmVjMyB4YXhpcz1ub3JtYWxpemUoY3Jvc3ModmVjMygwLiwxLjAsMC4pLHlheGlzKSk7dmVjMyB6YXhpcz1ub3JtYWxpemUoY3Jvc3MoeWF4aXMseGF4aXMpKTt2ZWMzIHJvdzA9dmVjMyh4YXhpcy54LHhheGlzLnkseGF4aXMueik7dmVjMyByb3cxPXZlYzMoeWF4aXMueCx5YXhpcy55LHlheGlzLnopO3ZlYzMgcm93Mj12ZWMzKHpheGlzLngsemF4aXMueSx6YXhpcy56KTttYXQzIHJvdE1hdHJpeD0gbWF0Myhyb3cwLHJvdzEscm93Mik7dmVjMyBhbGlnbmVkQ29ybmVyPXJvdE1hdHJpeCpyb3RhdGVkQ29ybmVyO3JldHVybiBwb3NpdGlvbithbGlnbmVkQ29ybmVyO31cbiNpZmRlZiBCSUxMQk9BUkRTVFJFVENIRURcbnZlYzMgcm90YXRlQWxpZ24odmVjMyB0b0NhbWVyYSx2ZWMzIHJvdGF0ZWRDb3JuZXIpIHt2ZWMzIG5vcm1hbGl6ZWRUb0NhbWVyYT1ub3JtYWxpemUodG9DYW1lcmEpO3ZlYzMgbm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmE9bm9ybWFsaXplKGNyb3NzKG5vcm1hbGl6ZShkaXJlY3Rpb24pLG5vcm1hbGl6ZWRUb0NhbWVyYSkpO3ZlYzMgcm93MD12ZWMzKG5vcm1hbGl6ZWRDcm9zc0RpclRvQ2FtZXJhLngsbm9ybWFsaXplZENyb3NzRGlyVG9DYW1lcmEueSxub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYS56KTt2ZWMzIHJvdzI9dmVjMyhub3JtYWxpemVkVG9DYW1lcmEueCxub3JtYWxpemVkVG9DYW1lcmEueSxub3JtYWxpemVkVG9DYW1lcmEueik7XG4jaWZkZWYgQklMTEJPQVJEU1RSRVRDSEVEX0xPQ0FMXG52ZWMzIHJvdzE9bm9ybWFsaXplKGRpcmVjdGlvbik7XG4jZWxzZVxudmVjMyBjcm9zc1Byb2R1Y3Q9bm9ybWFsaXplKGNyb3NzKG5vcm1hbGl6ZWRUb0NhbWVyYSxub3JtYWxpemVkQ3Jvc3NEaXJUb0NhbWVyYSkpO3ZlYzMgcm93MT12ZWMzKGNyb3NzUHJvZHVjdC54LGNyb3NzUHJvZHVjdC55LGNyb3NzUHJvZHVjdC56KTtcbiNlbmRpZlxubWF0MyByb3RNYXRyaXg9IG1hdDMocm93MCxyb3cxLHJvdzIpO3ZlYzMgYWxpZ25lZENvcm5lcj1yb3RNYXRyaXgqcm90YXRlZENvcm5lcjtyZXR1cm4gcG9zaXRpb24rYWxpZ25lZENvcm5lcjt9XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xudm9pZCBtYWluKHZvaWQpIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52ZWMyIGNvcm5lclBvcztcbiNpZm5kZWYgUE9TSVRJT05XX0FTX1ZBUllJTkdcbnZlYzMgdlBvc2l0aW9uVztcbiNlbmRpZlxuY29ybmVyUG9zPSh2ZWMyKG9mZnNldC54LTAuNSxvZmZzZXQueSAtMC41KS10cmFuc2xhdGlvblBpdm90KSpzaXplO1xuI2lmZGVmIEJJTExCT0FSRFxudmVjMyByb3RhdGVkQ29ybmVyO1xuI2lmZGVmIEJJTExCT0FSRFlcbnJvdGF0ZWRDb3JuZXIueD1jb3JuZXJQb3MueCpjb3MoYW5nbGUpLWNvcm5lclBvcy55KnNpbihhbmdsZSk7cm90YXRlZENvcm5lci56PWNvcm5lclBvcy54KnNpbihhbmdsZSkrY29ybmVyUG9zLnkqY29zKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLnk9MC47cm90YXRlZENvcm5lci54eis9dHJhbnNsYXRpb25QaXZvdDt2ZWMzIHlheGlzPXBvc2l0aW9uLWV5ZVBvc2l0aW9uO3lheGlzLnk9MC47dlBvc2l0aW9uVz1yb3RhdGUobm9ybWFsaXplKHlheGlzKSxyb3RhdGVkQ29ybmVyKTt2ZWMzIHZpZXdQb3M9KHZpZXcqdmVjNCh2UG9zaXRpb25XLDEuMCkpLnh5ejtcbiNlbGlmIGRlZmluZWQoQklMTEJPQVJEU1RSRVRDSEVEKVxucm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhhbmdsZSktY29ybmVyUG9zLnkqc2luKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLnk9Y29ybmVyUG9zLngqc2luKGFuZ2xlKStjb3JuZXJQb3MueSpjb3MoYW5nbGUpO3JvdGF0ZWRDb3JuZXIuej0wLjtyb3RhdGVkQ29ybmVyLnh5Kz10cmFuc2xhdGlvblBpdm90O3ZlYzMgdG9DYW1lcmE9cG9zaXRpb24tZXllUG9zaXRpb247dlBvc2l0aW9uVz1yb3RhdGVBbGlnbih0b0NhbWVyYSxyb3RhdGVkQ29ybmVyKTt2ZWMzIHZpZXdQb3M9KHZpZXcqdmVjNCh2UG9zaXRpb25XLDEuMCkpLnh5ejtcbiNlbHNlXG5yb3RhdGVkQ29ybmVyLng9Y29ybmVyUG9zLngqY29zKGFuZ2xlKS1jb3JuZXJQb3MueSpzaW4oYW5nbGUpO3JvdGF0ZWRDb3JuZXIueT1jb3JuZXJQb3MueCpzaW4oYW5nbGUpK2Nvcm5lclBvcy55KmNvcyhhbmdsZSk7cm90YXRlZENvcm5lci56PTAuO3JvdGF0ZWRDb3JuZXIueHkrPXRyYW5zbGF0aW9uUGl2b3Q7dmVjMyB2aWV3UG9zPSh2aWV3KnZlYzQocG9zaXRpb24sMS4wKSkueHl6K3JvdGF0ZWRDb3JuZXI7dlBvc2l0aW9uVz0oaW52Vmlldyp2ZWM0KHZpZXdQb3MsMSkpLnh5ejtcbiNlbmRpZlxuI2lmZGVmIFJBTVBHUkFESUVOVFxucmVtYXBSYW5nZXM9cmVtYXBEYXRhO1xuI2VuZGlmXG5nbF9Qb3NpdGlvbj1wcm9qZWN0aW9uKnZlYzQodmlld1BvcywxLjApO1xuI2Vsc2VcbnZlYzMgcm90YXRlZENvcm5lcjtyb3RhdGVkQ29ybmVyLng9Y29ybmVyUG9zLngqY29zKGFuZ2xlKS1jb3JuZXJQb3MueSpzaW4oYW5nbGUpO3JvdGF0ZWRDb3JuZXIuej1jb3JuZXJQb3MueCpzaW4oYW5nbGUpK2Nvcm5lclBvcy55KmNvcyhhbmdsZSk7cm90YXRlZENvcm5lci55PTAuO3JvdGF0ZWRDb3JuZXIueHorPXRyYW5zbGF0aW9uUGl2b3Q7dmVjMyB5YXhpcz1ub3JtYWxpemUoZGlyZWN0aW9uKTt2UG9zaXRpb25XPXJvdGF0ZSh5YXhpcyxyb3RhdGVkQ29ybmVyKTtnbF9Qb3NpdGlvbj1wcm9qZWN0aW9uKnZpZXcqdmVjNCh2UG9zaXRpb25XLDEuMCk7XG4jZW5kaWZcbnZDb2xvcj1jb2xvcjtcbiNpZmRlZiBBTklNQVRFU0hFRVRcbmZsb2F0IHJvd09mZnNldD1mbG9vcihjZWxsSW5kZXgqcGFydGljbGVzSW5mb3Mueik7ZmxvYXQgY29sdW1uT2Zmc2V0PWNlbGxJbmRleC1yb3dPZmZzZXQvcGFydGljbGVzSW5mb3Muejt2ZWMyIHV2U2NhbGU9cGFydGljbGVzSW5mb3MueHk7dmVjMiB1dk9mZnNldD12ZWMyKG9mZnNldC54ICwxLjAtb2Zmc2V0LnkpO3ZVVj0odXZPZmZzZXQrdmVjMihjb2x1bW5PZmZzZXQscm93T2Zmc2V0KSkqdXZTY2FsZTtcbiNlbHNlXG52VVY9b2Zmc2V0O1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTElQUExBTkUpIHx8IGRlZmluZWQoQ0xJUFBMQU5FMikgfHwgZGVmaW5lZChDTElQUExBTkUzKSB8fCBkZWZpbmVkKENMSVBQTEFORTQpIHx8IGRlZmluZWQoQ0xJUFBMQU5FNSkgfHwgZGVmaW5lZChDTElQUExBTkU2KSB8fCBkZWZpbmVkKEZPRylcbnZlYzQgd29ybGRQb3M9dmVjNCh2UG9zaXRpb25XLDEuMCk7XG4jZW5kaWZcbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPGxvZ0RlcHRoVmVydGV4PlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpY2xlc1ZlcnRleFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9