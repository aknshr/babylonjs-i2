"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_sprites_vertex_js"],{

/***/ "../core/dist/Shaders/sprites.vertex.js":
/*!**********************************************!*\
  !*** ../core/dist/Shaders/sprites.vertex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spritesVertexShader: () => (/* binding */ spritesVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




const name = "spritesVertexShader";
const shader = `attribute vec4 position;attribute vec2 options;attribute vec2 offsets;attribute vec2 inverts;attribute vec4 cellInfo;attribute vec4 color;uniform mat4 view;uniform mat4 projection;varying vec2 vUV;varying vec4 vColor;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 viewPos=(view*vec4(position.xyz,1.0)).xyz; 
vec2 cornerPos;float angle=position.w;vec2 size=vec2(options.x,options.y);vec2 offset=offsets.xy;cornerPos=vec2(offset.x-0.5,offset.y -0.5)*size;vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;gl_Position=projection*vec4(viewPos,1.0); 
vColor=color;vec2 uvOffset=vec2(abs(offset.x-inverts.x),abs(1.0-offset.y-inverts.y));vec2 uvPlace=cellInfo.xy;vec2 uvSize=cellInfo.zw;vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const spritesVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfc3ByaXRlc192ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvc3ByaXRlcy52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwic3ByaXRlc1ZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO2F0dHJpYnV0ZSB2ZWMyIG9wdGlvbnM7YXR0cmlidXRlIHZlYzIgb2Zmc2V0czthdHRyaWJ1dGUgdmVjMiBpbnZlcnRzO2F0dHJpYnV0ZSB2ZWM0IGNlbGxJbmZvO2F0dHJpYnV0ZSB2ZWM0IGNvbG9yO3VuaWZvcm0gbWF0NCB2aWV3O3VuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO3ZhcnlpbmcgdmVjMiB2VVY7dmFyeWluZyB2ZWM0IHZDb2xvcjtcbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xudm9pZCBtYWluKHZvaWQpIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52ZWMzIHZpZXdQb3M9KHZpZXcqdmVjNChwb3NpdGlvbi54eXosMS4wKSkueHl6OyBcbnZlYzIgY29ybmVyUG9zO2Zsb2F0IGFuZ2xlPXBvc2l0aW9uLnc7dmVjMiBzaXplPXZlYzIob3B0aW9ucy54LG9wdGlvbnMueSk7dmVjMiBvZmZzZXQ9b2Zmc2V0cy54eTtjb3JuZXJQb3M9dmVjMihvZmZzZXQueC0wLjUsb2Zmc2V0LnkgLTAuNSkqc2l6ZTt2ZWMzIHJvdGF0ZWRDb3JuZXI7cm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhhbmdsZSktY29ybmVyUG9zLnkqc2luKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLnk9Y29ybmVyUG9zLngqc2luKGFuZ2xlKStjb3JuZXJQb3MueSpjb3MoYW5nbGUpO3JvdGF0ZWRDb3JuZXIuej0wLjt2aWV3UG9zKz1yb3RhdGVkQ29ybmVyO2dsX1Bvc2l0aW9uPXByb2plY3Rpb24qdmVjNCh2aWV3UG9zLDEuMCk7IFxudkNvbG9yPWNvbG9yO3ZlYzIgdXZPZmZzZXQ9dmVjMihhYnMob2Zmc2V0LngtaW52ZXJ0cy54KSxhYnMoMS4wLW9mZnNldC55LWludmVydHMueSkpO3ZlYzIgdXZQbGFjZT1jZWxsSW5mby54eTt2ZWMyIHV2U2l6ZT1jZWxsSW5mby56dzt2VVYueD11dlBsYWNlLngrdXZTaXplLngqdXZPZmZzZXQueDt2VVYueT11dlBsYWNlLnkrdXZTaXplLnkqdXZPZmZzZXQueTtcbiNpZmRlZiBGT0dcbnZGb2dEaXN0YW5jZT12aWV3UG9zO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzcHJpdGVzVmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=