"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_sprites_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/sprites.vertex.js":
/*!**************************************************!*\
  !*** ../core/dist/ShadersWGSL/sprites.vertex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spritesVertexShaderWGSL: () => (/* binding */ spritesVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




const name = "spritesVertexShader";
const shader = `attribute position: vec4f;attribute options: vec2f;attribute offsets: vec2f;attribute inverts: vec2f;attribute cellInfo: vec4f;attribute color: vec4f;uniform view: mat4x4f;uniform projection: mat4x4f;varying vUV: vec2f;varying vColor: vec4f;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var viewPos: vec3f=(uniforms.view* vec4f(input.position.xyz,1.0)).xyz; 
var cornerPos: vec2f;var angle: f32=input.position.w;var size: vec2f= vec2f(input.options.x,input.options.y);var offset: vec2f=input.offsets.xy;cornerPos= vec2f(offset.x-0.5,offset.y -0.5)*size;var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0); 
vertexOutputs.vColor=input.color;var uvOffset: vec2f= vec2f(abs(offset.x-input.inverts.x),abs(1.0-offset.y-input.inverts.y));var uvPlace: vec2f=input.cellInfo.xy;var uvSize: vec2f=input.cellInfo.zw;vertexOutputs.vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vertexOutputs.vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vertexOutputs.vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const spritesVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3Nwcml0ZXNfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvc3ByaXRlcy52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwic3ByaXRlc1ZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjNGY7YXR0cmlidXRlIG9wdGlvbnM6IHZlYzJmO2F0dHJpYnV0ZSBvZmZzZXRzOiB2ZWMyZjthdHRyaWJ1dGUgaW52ZXJ0czogdmVjMmY7YXR0cmlidXRlIGNlbGxJbmZvOiB2ZWM0ZjthdHRyaWJ1dGUgY29sb3I6IHZlYzRmO3VuaWZvcm0gdmlldzogbWF0NHg0Zjt1bmlmb3JtIHByb2plY3Rpb246IG1hdDR4NGY7dmFyeWluZyB2VVY6IHZlYzJmO3ZhcnlpbmcgdkNvbG9yOiB2ZWM0ZjtcbiNpbmNsdWRlPGZvZ1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xuQHZlcnRleFxuZm4gbWFpbihpbnB1dCA6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52YXIgdmlld1BvczogdmVjM2Y9KHVuaWZvcm1zLnZpZXcqIHZlYzRmKGlucHV0LnBvc2l0aW9uLnh5eiwxLjApKS54eXo7IFxudmFyIGNvcm5lclBvczogdmVjMmY7dmFyIGFuZ2xlOiBmMzI9aW5wdXQucG9zaXRpb24udzt2YXIgc2l6ZTogdmVjMmY9IHZlYzJmKGlucHV0Lm9wdGlvbnMueCxpbnB1dC5vcHRpb25zLnkpO3ZhciBvZmZzZXQ6IHZlYzJmPWlucHV0Lm9mZnNldHMueHk7Y29ybmVyUG9zPSB2ZWMyZihvZmZzZXQueC0wLjUsb2Zmc2V0LnkgLTAuNSkqc2l6ZTt2YXIgcm90YXRlZENvcm5lcjogdmVjM2Y7cm90YXRlZENvcm5lci54PWNvcm5lclBvcy54KmNvcyhhbmdsZSktY29ybmVyUG9zLnkqc2luKGFuZ2xlKTtyb3RhdGVkQ29ybmVyLnk9Y29ybmVyUG9zLngqc2luKGFuZ2xlKStjb3JuZXJQb3MueSpjb3MoYW5nbGUpO3JvdGF0ZWRDb3JuZXIuej0wLjt2aWV3UG9zKz1yb3RhdGVkQ29ybmVyO3ZlcnRleE91dHB1dHMucG9zaXRpb249dW5pZm9ybXMucHJvamVjdGlvbip2ZWM0Zih2aWV3UG9zLDEuMCk7IFxudmVydGV4T3V0cHV0cy52Q29sb3I9aW5wdXQuY29sb3I7dmFyIHV2T2Zmc2V0OiB2ZWMyZj0gdmVjMmYoYWJzKG9mZnNldC54LWlucHV0LmludmVydHMueCksYWJzKDEuMC1vZmZzZXQueS1pbnB1dC5pbnZlcnRzLnkpKTt2YXIgdXZQbGFjZTogdmVjMmY9aW5wdXQuY2VsbEluZm8ueHk7dmFyIHV2U2l6ZTogdmVjMmY9aW5wdXQuY2VsbEluZm8uenc7dmVydGV4T3V0cHV0cy52VVYueD11dlBsYWNlLngrdXZTaXplLngqdXZPZmZzZXQueDt2ZXJ0ZXhPdXRwdXRzLnZVVi55PXV2UGxhY2UueSt1dlNpemUueSp1dk9mZnNldC55O1xuI2lmZGVmIEZPR1xudmVydGV4T3V0cHV0cy52Rm9nRGlzdGFuY2U9dmlld1BvcztcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzcHJpdGVzVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9