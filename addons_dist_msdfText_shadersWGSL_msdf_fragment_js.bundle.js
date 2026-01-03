"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["addons_dist_msdfText_shadersWGSL_msdf_fragment_js"],{

/***/ "../addons/dist/msdfText/shadersWGSL/msdf.fragment.js":
/*!************************************************************!*\
  !*** ../addons/dist/msdfText/shadersWGSL/msdf.fragment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfPixelShaderWGSL: () => (/* binding */ msdfPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "msdfPixelShader";
const shader = `var fontAtlas: texture_2d<f32>;var fontAtlasSampler: sampler;uniform uColor: vec4f;uniform thickness: f32;uniform uStrokeColor: vec4f;uniform uStrokeInsetWidth: f32;uniform uStrokeOutsetWidth: f32;varying atlasUV: vec2f;fn median(msdf: vec3<f32>)->f32 {let a=min(msdf.r,msdf.g);let b=max(msdf.r,msdf.g);return max(a,min(b,msdf.b));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let s=textureSample(fontAtlas,fontAtlasSampler,input.atlasUV).rgb;let sigDist=median(s)-0.5+uniforms.thickness;let afwidth=length(vec2<f32>(dpdx(sigDist),dpdy(sigDist)));let alpha=clamp(sigDist/afwidth+0.5,0.0,1.0);let sigDistOutset=sigDist+uniforms.uStrokeOutsetWidth*0.5;let sigDistInset=sigDist-uniforms.uStrokeInsetWidth*0.5;let afwidthOutset=length(vec2<f32>(dpdx(sigDistOutset),dpdy(sigDistOutset)));let afwidthInset=length(vec2<f32>(dpdx(sigDistInset),dpdy(sigDistInset)));let outset=clamp(sigDistOutset/afwidthOutset+0.5,0.0,1.0);let inset=1.0-clamp(sigDistInset/afwidthInset+0.5,0.0,1.0);let border=outset*inset;let filledFragColor=vec4<f32>(uniforms.uColor.rgb,alpha*uniforms.uColor.a);let strokedFragColor=vec4<f32>(uniforms.uStrokeColor.rgb,border*uniforms.uStrokeColor.a);fragmentOutputs.color=mix(filledFragColor,strokedFragColor,border);}`;
// Sideeffect
if (!core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const msdfPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb25zX2Rpc3RfbXNkZlRleHRfc2hhZGVyc1dHU0xfbXNkZl9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvYWRkb25zL3NyYy9tc2RmVGV4dC9zaGFkZXJzV0dTTC9tc2RmLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1zZGZQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciBmb250QXRsYXM6IHRleHR1cmVfMmQ8ZjMyPjt2YXIgZm9udEF0bGFzU2FtcGxlcjogc2FtcGxlcjt1bmlmb3JtIHVDb2xvcjogdmVjNGY7dW5pZm9ybSB0aGlja25lc3M6IGYzMjt1bmlmb3JtIHVTdHJva2VDb2xvcjogdmVjNGY7dW5pZm9ybSB1U3Ryb2tlSW5zZXRXaWR0aDogZjMyO3VuaWZvcm0gdVN0cm9rZU91dHNldFdpZHRoOiBmMzI7dmFyeWluZyBhdGxhc1VWOiB2ZWMyZjtmbiBtZWRpYW4obXNkZjogdmVjMzxmMzI+KS0+ZjMyIHtsZXQgYT1taW4obXNkZi5yLG1zZGYuZyk7bGV0IGI9bWF4KG1zZGYucixtc2RmLmcpO3JldHVybiBtYXgoYSxtaW4oYixtc2RmLmIpKTt9XG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtsZXQgcz10ZXh0dXJlU2FtcGxlKGZvbnRBdGxhcyxmb250QXRsYXNTYW1wbGVyLGlucHV0LmF0bGFzVVYpLnJnYjtsZXQgc2lnRGlzdD1tZWRpYW4ocyktMC41K3VuaWZvcm1zLnRoaWNrbmVzcztsZXQgYWZ3aWR0aD1sZW5ndGgodmVjMjxmMzI+KGRwZHgoc2lnRGlzdCksZHBkeShzaWdEaXN0KSkpO2xldCBhbHBoYT1jbGFtcChzaWdEaXN0L2Fmd2lkdGgrMC41LDAuMCwxLjApO2xldCBzaWdEaXN0T3V0c2V0PXNpZ0Rpc3QrdW5pZm9ybXMudVN0cm9rZU91dHNldFdpZHRoKjAuNTtsZXQgc2lnRGlzdEluc2V0PXNpZ0Rpc3QtdW5pZm9ybXMudVN0cm9rZUluc2V0V2lkdGgqMC41O2xldCBhZndpZHRoT3V0c2V0PWxlbmd0aCh2ZWMyPGYzMj4oZHBkeChzaWdEaXN0T3V0c2V0KSxkcGR5KHNpZ0Rpc3RPdXRzZXQpKSk7bGV0IGFmd2lkdGhJbnNldD1sZW5ndGgodmVjMjxmMzI+KGRwZHgoc2lnRGlzdEluc2V0KSxkcGR5KHNpZ0Rpc3RJbnNldCkpKTtsZXQgb3V0c2V0PWNsYW1wKHNpZ0Rpc3RPdXRzZXQvYWZ3aWR0aE91dHNldCswLjUsMC4wLDEuMCk7bGV0IGluc2V0PTEuMC1jbGFtcChzaWdEaXN0SW5zZXQvYWZ3aWR0aEluc2V0KzAuNSwwLjAsMS4wKTtsZXQgYm9yZGVyPW91dHNldCppbnNldDtsZXQgZmlsbGVkRnJhZ0NvbG9yPXZlYzQ8ZjMyPih1bmlmb3Jtcy51Q29sb3IucmdiLGFscGhhKnVuaWZvcm1zLnVDb2xvci5hKTtsZXQgc3Ryb2tlZEZyYWdDb2xvcj12ZWM0PGYzMj4odW5pZm9ybXMudVN0cm9rZUNvbG9yLnJnYixib3JkZXIqdW5pZm9ybXMudVN0cm9rZUNvbG9yLmEpO2ZyYWdtZW50T3V0cHV0cy5jb2xvcj1taXgoZmlsbGVkRnJhZ0NvbG9yLHN0cm9rZWRGcmFnQ29sb3IsYm9yZGVyKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbXNkZlBpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9