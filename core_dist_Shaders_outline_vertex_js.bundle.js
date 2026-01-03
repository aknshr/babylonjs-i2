"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_outline_vertex_js"],{

/***/ "../core/dist/Shaders/outline.vertex.js":
/*!**********************************************!*\
  !*** ../core/dist/Shaders/outline.vertex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outlineVertexShader: () => (/* binding */ outlineVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/Shaders/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/Shaders/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/Shaders/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/Shaders/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.















const name = "outlineVertexShader";
const shader = `attribute vec3 position;attribute vec3 normal;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform float offset;
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef ALPHATEST
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
vec3 offsetPosition=positionUpdated+(normalUpdated*offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(offsetPosition,1.0);gl_Position=viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const outlineVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfb3V0bGluZV92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvb3V0bGluZS52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aFZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJvdXRsaW5lVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgYXR0cmlidXRlIHZlYzMgcG9zaXRpb247YXR0cmlidXRlIHZlYzMgbm9ybWFsO1xuI2luY2x1ZGU8Ym9uZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvbj5cbnVuaWZvcm0gZmxvYXQgb2Zmc2V0O1xuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG51bmlmb3JtIG1hdDQgdmlld1Byb2plY3Rpb247XG4jaWZkZWYgQUxQSEFURVNUXG52YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gbWF0NCBkaWZmdXNlTWF0cml4O1xuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHZlYzIgdXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbmF0dHJpYnV0ZSB2ZWMyIHV2MjtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZClcbnt2ZWMzIHBvc2l0aW9uVXBkYXRlZD1wb3NpdGlvbjt2ZWMzIG5vcm1hbFVwZGF0ZWQ9bm9ybWFsO1xuI2lmZGVmIFVWMVxudmVjMiB1dlVwZGF0ZWQ9dXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZlYzIgdXYyVXBkYXRlZD11djI7XG4jZW5kaWZcbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbD5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxudmVjMyBvZmZzZXRQb3NpdGlvbj1wb3NpdGlvblVwZGF0ZWQrKG5vcm1hbFVwZGF0ZWQqb2Zmc2V0KTtcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbiNpbmNsdWRlPGJvbmVzVmVydGV4PlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb24+XG52ZWM0IHdvcmxkUG9zPWZpbmFsV29ybGQqdmVjNChvZmZzZXRQb3NpdGlvbiwxLjApO2dsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2lmZGVmIEFMUEhBVEVTVFxuI2lmZGVmIFVWMVxudlVWPXZlYzIoZGlmZnVzZU1hdHJpeCp2ZWM0KHV2VXBkYXRlZCwxLjAsMC4wKSk7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZVVj12ZWMyKGRpZmZ1c2VNYXRyaXgqdmVjNCh1djJVcGRhdGVkLDEuMCwwLjApKTtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVWZXJ0ZXg+XG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvdXRsaW5lVmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=