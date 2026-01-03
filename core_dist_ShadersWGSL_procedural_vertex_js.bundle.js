"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_procedural_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/procedural.vertex.js":
/*!*****************************************************!*\
  !*** ../core/dist/ShadersWGSL/procedural.vertex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proceduralVertexShaderWGSL: () => (/* binding */ proceduralVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "proceduralVertexShader";
const shader = `attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const proceduralVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3Byb2NlZHVyYWxfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML3Byb2NlZHVyYWwudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwcm9jZWR1cmFsVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgYXR0cmlidXRlIHBvc2l0aW9uOiB2ZWMyZjt2YXJ5aW5nIHZQb3NpdGlvbjogdmVjMmY7dmFyeWluZyB2VVY6IHZlYzJmO2NvbnN0IG1hZGQ6IHZlYzJmPSB2ZWMyZigwLjUsMC41KTtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xuQHZlcnRleFxuZm4gbWFpbihpbnB1dCA6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvbj1pbnB1dC5wb3NpdGlvbjt2ZXJ0ZXhPdXRwdXRzLnZVVj1pbnB1dC5wb3NpdGlvbiptYWRkK21hZGQ7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj0gdmVjNGYoaW5wdXQucG9zaXRpb24sMC4wLDEuMCk7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwcm9jZWR1cmFsVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9