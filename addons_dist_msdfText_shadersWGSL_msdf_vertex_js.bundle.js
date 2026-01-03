"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["addons_dist_msdfText_shadersWGSL_msdf_vertex_js"],{

/***/ "../addons/dist/msdfText/shadersWGSL/msdf.vertex.js":
/*!**********************************************************!*\
  !*** ../addons/dist/msdfText/shadersWGSL/msdf.vertex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfVertexShaderWGSL: () => (/* binding */ msdfVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "msdfVertexShader";
const shader = `#define BILLBOARD 1
#define BILLBOARDSCREENPROJECTED 2
attribute offsets: vec2f;attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;attribute uvs: vec4f;uniform transform: mat4x4f;uniform parentWorld: mat4x4f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform mode: u32;varying atlasUV: vec2f;@vertex
fn main(input: VertexInputs)->FragmentInputs {let world=mat4x4<f32>(input.world0,input.world1,input.world2,input.world3);let localOffset=vec4<f32>(input.offsets-vec2<f32>(0.5,0.5),0.0,1.0);let worldPos=uniforms.transform*world*localOffset;if (uniforms.mode>=BILLBOARD) { 
var viewPos=(uniforms.view*uniforms.parentWorld*vec4f(0.,0.,0.,1.0)).xyz;if (uniforms.mode==BILLBOARDSCREENPROJECTED) {viewPos=vec3f(viewPos.x/viewPos.z,viewPos.y/viewPos.z,1.0);} 
vertexOutputs.position=uniforms.projection*vec4<f32>(viewPos+worldPos.xyz,1.0);} else { 
let viewPos=(uniforms.view*uniforms.parentWorld*worldPos).xyz;vertexOutputs.position=uniforms.projection*vec4<f32>(viewPos,1.0);}
vertexOutputs.atlasUV=vec2<f32>(
input.uvs.x+input.offsets.x*input.uvs.z,
input.uvs.y+(1.0-input.offsets.y)*input.uvs.w
);}`;
// Sideeffect
if (!core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const msdfVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb25zX2Rpc3RfbXNkZlRleHRfc2hhZGVyc1dHU0xfbXNkZl92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvYWRkb25zL3NyYy9tc2RmVGV4dC9zaGFkZXJzV0dTTC9tc2RmLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtc2RmVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBCSUxMQk9BUkQgMVxuI2RlZmluZSBCSUxMQk9BUkRTQ1JFRU5QUk9KRUNURUQgMlxuYXR0cmlidXRlIG9mZnNldHM6IHZlYzJmO2F0dHJpYnV0ZSB3b3JsZDA6IHZlYzRmO2F0dHJpYnV0ZSB3b3JsZDE6IHZlYzRmO2F0dHJpYnV0ZSB3b3JsZDI6IHZlYzRmO2F0dHJpYnV0ZSB3b3JsZDM6IHZlYzRmO2F0dHJpYnV0ZSB1dnM6IHZlYzRmO3VuaWZvcm0gdHJhbnNmb3JtOiBtYXQ0eDRmO3VuaWZvcm0gcGFyZW50V29ybGQ6IG1hdDR4NGY7dW5pZm9ybSB2aWV3OiBtYXQ0eDRmO3VuaWZvcm0gcHJvamVjdGlvbjogbWF0NHg0Zjt1bmlmb3JtIG1vZGU6IHUzMjt2YXJ5aW5nIGF0bGFzVVY6IHZlYzJmO0B2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQ6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtsZXQgd29ybGQ9bWF0NHg0PGYzMj4oaW5wdXQud29ybGQwLGlucHV0LndvcmxkMSxpbnB1dC53b3JsZDIsaW5wdXQud29ybGQzKTtsZXQgbG9jYWxPZmZzZXQ9dmVjNDxmMzI+KGlucHV0Lm9mZnNldHMtdmVjMjxmMzI+KDAuNSwwLjUpLDAuMCwxLjApO2xldCB3b3JsZFBvcz11bmlmb3Jtcy50cmFuc2Zvcm0qd29ybGQqbG9jYWxPZmZzZXQ7aWYgKHVuaWZvcm1zLm1vZGU+PUJJTExCT0FSRCkgeyBcbnZhciB2aWV3UG9zPSh1bmlmb3Jtcy52aWV3KnVuaWZvcm1zLnBhcmVudFdvcmxkKnZlYzRmKDAuLDAuLDAuLDEuMCkpLnh5ejtpZiAodW5pZm9ybXMubW9kZT09QklMTEJPQVJEU0NSRUVOUFJPSkVDVEVEKSB7dmlld1Bvcz12ZWMzZih2aWV3UG9zLngvdmlld1Bvcy56LHZpZXdQb3MueS92aWV3UG9zLnosMS4wKTt9IFxudmVydGV4T3V0cHV0cy5wb3NpdGlvbj11bmlmb3Jtcy5wcm9qZWN0aW9uKnZlYzQ8ZjMyPih2aWV3UG9zK3dvcmxkUG9zLnh5eiwxLjApO30gZWxzZSB7IFxubGV0IHZpZXdQb3M9KHVuaWZvcm1zLnZpZXcqdW5pZm9ybXMucGFyZW50V29ybGQqd29ybGRQb3MpLnh5ejt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXVuaWZvcm1zLnByb2plY3Rpb24qdmVjNDxmMzI+KHZpZXdQb3MsMS4wKTt9XG52ZXJ0ZXhPdXRwdXRzLmF0bGFzVVY9dmVjMjxmMzI+KFxuaW5wdXQudXZzLngraW5wdXQub2Zmc2V0cy54KmlucHV0LnV2cy56LFxuaW5wdXQudXZzLnkrKDEuMC1pbnB1dC5vZmZzZXRzLnkpKmlucHV0LnV2cy53XG4pO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtc2RmVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9