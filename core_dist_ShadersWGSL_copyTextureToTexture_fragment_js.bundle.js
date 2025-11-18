"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_copyTextureToTexture_fragment_js"],{

/***/ "../core/dist/ShadersWGSL/copyTextureToTexture.fragment.js":
/*!*****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/copyTextureToTexture.fragment.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyTextureToTexturePixelShaderWGSL: () => (/* binding */ copyTextureToTexturePixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "copyTextureToTexturePixelShader";
const shader = `uniform conversion: f32;
#ifndef NO_SAMPLER
var textureSamplerSampler: sampler;
#endif
var textureSampler: texture_2d<f32>;uniform lodLevel : f32;varying vUV: vec2f;
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef NO_SAMPLER
var color: vec4f=textureLoad(textureSampler,vec2u(fragmentInputs.position.xy),u32(uniforms.lodLevel));
#else
var color: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,uniforms.lodLevel);
#endif
#ifdef DEPTH_TEXTURE
fragmentOutputs.fragDepth=color.r;
#else
if (uniforms.conversion==1.) {color=toLinearSpaceVec4(color);} else if (uniforms.conversion==2.) {color=toGammaSpace(color);}
fragmentOutputs.color=color;
#endif
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const copyTextureToTexturePixelShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2NvcHlUZXh0dXJlVG9UZXh0dXJlX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvY29weVRleHR1cmVUb1RleHR1cmUuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJjb3B5VGV4dHVyZVRvVGV4dHVyZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBjb252ZXJzaW9uOiBmMzI7XG4jaWZuZGVmIE5PX1NBTVBMRVJcbnZhciB0ZXh0dXJlU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7XG4jZW5kaWZcbnZhciB0ZXh0dXJlU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3VuaWZvcm0gbG9kTGV2ZWwgOiBmMzI7dmFyeWluZyB2VVY6IHZlYzJmO1xuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuQGZyYWdtZW50XG5mbiBtYWluKGlucHV0OiBGcmFnbWVudElucHV0cyktPkZyYWdtZW50T3V0cHV0cyB7XG4jaWZkZWYgTk9fU0FNUExFUlxudmFyIGNvbG9yOiB2ZWM0Zj10ZXh0dXJlTG9hZCh0ZXh0dXJlU2FtcGxlcix2ZWMydShmcmFnbWVudElucHV0cy5wb3NpdGlvbi54eSksdTMyKHVuaWZvcm1zLmxvZExldmVsKSk7XG4jZWxzZVxudmFyIGNvbG9yOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlTGV2ZWwodGV4dHVyZVNhbXBsZXIsdGV4dHVyZVNhbXBsZXJTYW1wbGVyLGlucHV0LnZVVix1bmlmb3Jtcy5sb2RMZXZlbCk7XG4jZW5kaWZcbiNpZmRlZiBERVBUSF9URVhUVVJFXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RlcHRoPWNvbG9yLnI7XG4jZWxzZVxuaWYgKHVuaWZvcm1zLmNvbnZlcnNpb249PTEuKSB7Y29sb3I9dG9MaW5lYXJTcGFjZVZlYzQoY29sb3IpO30gZWxzZSBpZiAodW5pZm9ybXMuY29udmVyc2lvbj09Mi4pIHtjb2xvcj10b0dhbW1hU3BhY2UoY29sb3IpO31cbmZyYWdtZW50T3V0cHV0cy5jb2xvcj1jb2xvcjtcbiNlbmRpZlxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgY29weVRleHR1cmVUb1RleHR1cmVQaXhlbFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9