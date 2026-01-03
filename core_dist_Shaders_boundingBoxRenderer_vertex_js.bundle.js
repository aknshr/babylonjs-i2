"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_boundingBoxRenderer_vertex_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/boundingBoxRendererUboDeclaration.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/boundingBoxRendererUboDeclaration.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundingBoxRendererUboDeclaration: () => (/* binding */ boundingBoxRendererUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "boundingBoxRendererUboDeclaration";
const shader = `#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const boundingBoxRendererUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/boundingBoxRendererVertexDeclaration.js":
/*!***********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/boundingBoxRendererVertexDeclaration.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundingBoxRendererVertexDeclaration: () => (/* binding */ boundingBoxRendererVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "boundingBoxRendererVertexDeclaration";
const shader = `uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const boundingBoxRendererVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/boundingBoxRenderer.vertex.js":
/*!**********************************************************!*\
  !*** ../core/dist/Shaders/boundingBoxRenderer.vertex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundingBoxRendererVertexShader: () => (/* binding */ boundingBoxRendererVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_boundingBoxRendererVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/boundingBoxRendererVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/boundingBoxRendererVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_boundingBoxRendererUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/boundingBoxRendererUboDeclaration */ "../core/dist/Shaders/ShadersInclude/boundingBoxRendererUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "boundingBoxRendererVertexShader";
const shader = `attribute vec3 position;
#include<__decl__boundingBoxRendererVertex>
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);vec4 worldPos=finalWorld*vec4(position,1.0);
#else
vec4 worldPos=world*vec4(position,1.0);
#endif
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const boundingBoxRendererVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfYm91bmRpbmdCb3hSZW5kZXJlcl92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2JvdW5kaW5nQm94UmVuZGVyZXJVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYm91bmRpbmdCb3hSZW5kZXJlclZlcnRleERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9ib3VuZGluZ0JveFJlbmRlcmVyLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm91bmRpbmdCb3hSZW5kZXJlclVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFdFQkdMMlxudW5pZm9ybSB2ZWM0IGNvbG9yO3VuaWZvcm0gbWF0NCB3b3JsZDt1bmlmb3JtIG1hdDQgdmlld1Byb2plY3Rpb247XG4jaWZkZWYgTVVMVElWSUVXXG51bmlmb3JtIG1hdDQgdmlld1Byb2plY3Rpb25SO1xuI2VuZGlmXG4jZWxzZVxubGF5b3V0KHN0ZDE0MCxjb2x1bW5fbWFqb3IpIHVuaWZvcm07dW5pZm9ybSBCb3VuZGluZ0JveFJlbmRlcmVyIHt2ZWM0IGNvbG9yO21hdDQgd29ybGQ7bWF0NCB2aWV3UHJvamVjdGlvbjttYXQ0IHZpZXdQcm9qZWN0aW9uUjt9O1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kaW5nQm94UmVuZGVyZXJVYm9EZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYm91bmRpbmdCb3hSZW5kZXJlclZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBtYXQ0IHdvcmxkO3VuaWZvcm0gbWF0NCB2aWV3UHJvamVjdGlvbjtcbiNpZmRlZiBNVUxUSVZJRVdcbnVuaWZvcm0gbWF0NCB2aWV3UHJvamVjdGlvblI7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYm91bmRpbmdCb3hSZW5kZXJlclZlcnRleERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib3VuZGluZ0JveFJlbmRlcmVyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm91bmRpbmdCb3hSZW5kZXJlclVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJvdW5kaW5nQm94UmVuZGVyZXJWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcbiNpbmNsdWRlPF9fZGVjbF9fYm91bmRpbmdCb3hSZW5kZXJlclZlcnRleD5cbiNpZmRlZiBJTlNUQU5DRVNcbmF0dHJpYnV0ZSB2ZWM0IHdvcmxkMDthdHRyaWJ1dGUgdmVjNCB3b3JsZDE7YXR0cmlidXRlIHZlYzQgd29ybGQyO2F0dHJpYnV0ZSB2ZWM0IHdvcmxkMztcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbiNpZmRlZiBJTlNUQU5DRVNcbm1hdDQgZmluYWxXb3JsZD1tYXQ0KHdvcmxkMCx3b3JsZDEsd29ybGQyLHdvcmxkMyk7dmVjNCB3b3JsZFBvcz1maW5hbFdvcmxkKnZlYzQocG9zaXRpb24sMS4wKTtcbiNlbHNlXG52ZWM0IHdvcmxkUG9zPXdvcmxkKnZlYzQocG9zaXRpb24sMS4wKTtcbiNlbmRpZlxuI2lmZGVmIE1VTFRJVklFV1xuaWYgKGdsX1ZpZXdJRF9PVlI9PTB1KSB7Z2xfUG9zaXRpb249dmlld1Byb2plY3Rpb24qd29ybGRQb3M7fSBlbHNlIHtnbF9Qb3NpdGlvbj12aWV3UHJvamVjdGlvblIqd29ybGRQb3M7fVxuI2Vsc2VcbmdsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBib3VuZGluZ0JveFJlbmRlcmVyVmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=