"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_depth_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/depth.fragment.js":
/*!**************************************************!*\
  !*** ../core/dist/ShadersWGSL/depth.fragment.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPixelShaderWGSL: () => (/* binding */ depthPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_packingFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/packingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/packingFunctions.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




const name = "depthPixelShader";
const shader = `#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
varying vDepthMetric: f32;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vViewPos: vec4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
fragmentOutputs.color=pack(input.vViewPos.z);
#else
fragmentOutputs.color= vec4f(input.vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
fragmentOutputs.color=pack(input.position.z);
#else
fragmentOutputs.color= vec4f(input.position.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
fragmentOutputs.color=pack(input.vDepthMetric);
#else
fragmentOutputs.color= vec4f(input.vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const depthPixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2RlcHRoX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML2RlcHRoLmZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BhY2tpbmdGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcblxuY29uc3QgbmFtZSA9IFwiZGVwdGhQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBBTFBIQVRFU1RcbnZhcnlpbmcgdlVWOiB2ZWMyZjt2YXIgZGlmZnVzZVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBkaWZmdXNlU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxudmFyeWluZyB2RGVwdGhNZXRyaWM6IGYzMjtcbiNpZmRlZiBQQUNLRURcbiNpbmNsdWRlPHBhY2tpbmdGdW5jdGlvbnM+XG4jZW5kaWZcbiNpZmRlZiBTVE9SRV9DQU1FUkFTUEFDRV9aXG52YXJ5aW5nIHZWaWV3UG9zOiB2ZWM0ZjtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbkBmcmFnbWVudFxuZm4gbWFpbihpbnB1dDogRnJhZ21lbnRJbnB1dHMpLT5GcmFnbWVudE91dHB1dHMge1xuI2luY2x1ZGU8Y2xpcFBsYW5lRnJhZ21lbnQ+XG4jaWZkZWYgQUxQSEFURVNUXG5pZiAodGV4dHVyZVNhbXBsZShkaWZmdXNlU2FtcGxlcixkaWZmdXNlU2FtcGxlclNhbXBsZXIsaW5wdXQudlVWKS5hPDAuNCkge2Rpc2NhcmQ7fVxuI2VuZGlmXG4jaWZkZWYgU1RPUkVfQ0FNRVJBU1BBQ0VfWlxuI2lmZGVmIFBBQ0tFRFxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXBhY2soaW5wdXQudlZpZXdQb3Mueik7XG4jZWxzZVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPSB2ZWM0ZihpbnB1dC52Vmlld1Bvcy56LDAuMCwwLjAsMS4wKTtcbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBOT05MSU5FQVJERVBUSFxuI2lmZGVmIFBBQ0tFRFxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPXBhY2soaW5wdXQucG9zaXRpb24ueik7XG4jZWxzZVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPSB2ZWM0ZihpbnB1dC5wb3NpdGlvbi56LDAuMCwwLjAsMC4wKTtcbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBQQUNLRURcbmZyYWdtZW50T3V0cHV0cy5jb2xvcj1wYWNrKGlucHV0LnZEZXB0aE1ldHJpYyk7XG4jZWxzZVxuZnJhZ21lbnRPdXRwdXRzLmNvbG9yPSB2ZWM0ZihpbnB1dC52RGVwdGhNZXRyaWMsMC4wLDAuMCwxLjApO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGRlcHRoUGl4ZWxTaGFkZXJXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==