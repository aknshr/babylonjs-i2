"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_vrDistortionCorrection_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/vrDistortionCorrection.fragment.js":
/*!*******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/vrDistortionCorrection.fragment.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vrDistortionCorrectionPixelShaderWGSL: () => (/* binding */ vrDistortionCorrectionPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "vrDistortionCorrectionPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform LensCenter: vec2f;uniform Scale: vec2f;uniform ScaleIn: vec2f;uniform HmdWarpParam: vec4f;fn HmdWarp(in01: vec2f)->vec2f {var theta: vec2f=(in01-uniforms.LensCenter)*uniforms.ScaleIn; 
var rSq: f32=theta.x*theta.x+theta.y*theta.y;var rvector: vec2f=theta*(uniforms.HmdWarpParam.x+uniforms.HmdWarpParam.y*rSq+uniforms.HmdWarpParam.z*rSq*rSq+uniforms.HmdWarpParam.w*rSq*rSq*rSq);return uniforms.LensCenter+uniforms.Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tc: vec2f=HmdWarp(input.vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0) {fragmentOutputs.color=vec4f(0.0,0.0,0.0,0.0);}
else{fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,tc);}}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const vrDistortionCorrectionPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX3ZyRGlzdG9ydGlvbkNvcnJlY3Rpb25fZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC92ckRpc3RvcnRpb25Db3JyZWN0aW9uLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJ2ckRpc3RvcnRpb25Db3JyZWN0aW9uUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIERJU0FCTEVfVU5JRk9STUlUWV9BTkFMWVNJU1xudmFyeWluZyB2VVY6IHZlYzJmO3ZhciB0ZXh0dXJlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIHRleHR1cmVTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47dW5pZm9ybSBMZW5zQ2VudGVyOiB2ZWMyZjt1bmlmb3JtIFNjYWxlOiB2ZWMyZjt1bmlmb3JtIFNjYWxlSW46IHZlYzJmO3VuaWZvcm0gSG1kV2FycFBhcmFtOiB2ZWM0ZjtmbiBIbWRXYXJwKGluMDE6IHZlYzJmKS0+dmVjMmYge3ZhciB0aGV0YTogdmVjMmY9KGluMDEtdW5pZm9ybXMuTGVuc0NlbnRlcikqdW5pZm9ybXMuU2NhbGVJbjsgXG52YXIgclNxOiBmMzI9dGhldGEueCp0aGV0YS54K3RoZXRhLnkqdGhldGEueTt2YXIgcnZlY3RvcjogdmVjMmY9dGhldGEqKHVuaWZvcm1zLkhtZFdhcnBQYXJhbS54K3VuaWZvcm1zLkhtZFdhcnBQYXJhbS55KnJTcSt1bmlmb3Jtcy5IbWRXYXJwUGFyYW0ueipyU3EqclNxK3VuaWZvcm1zLkhtZFdhcnBQYXJhbS53KnJTcSpyU3EqclNxKTtyZXR1cm4gdW5pZm9ybXMuTGVuc0NlbnRlcit1bmlmb3Jtcy5TY2FsZSpydmVjdG9yO31cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHt2YXIgdGM6IHZlYzJmPUhtZFdhcnAoaW5wdXQudlVWKTtpZiAodGMueCA8MC4wIHx8IHRjLng+MS4wIHx8IHRjLnk8MC4wIHx8IHRjLnk+MS4wKSB7ZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXZlYzRmKDAuMCwwLjAsMC4wLDAuMCk7fVxuZWxzZXtmcmFnbWVudE91dHB1dHMuY29sb3I9dGV4dHVyZVNhbXBsZSh0ZXh0dXJlU2FtcGxlcix0ZXh0dXJlU2FtcGxlclNhbXBsZXIsdGMpO319YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgdnJEaXN0b3J0aW9uQ29ycmVjdGlvblBpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9