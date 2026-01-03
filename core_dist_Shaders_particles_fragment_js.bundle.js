"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_particles_fragment_js"],{

/***/ "../core/dist/Shaders/particles.fragment.js":
/*!**************************************************!*\
  !*** ../core/dist/Shaders/particles.fragment.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   particlesPixelShader: () => (/* binding */ particlesPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_imageProcessingDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingDeclaration */ "../core/dist/Shaders/ShadersInclude/imageProcessingDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_imageProcessingFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingFunctions */ "../core/dist/Shaders/ShadersInclude/imageProcessingFunctions.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneFragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneFragment */ "../core/dist/Shaders/ShadersInclude/clipPlaneFragment.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.










const name = "particlesPixelShader";
const shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying vec4 remapRanges;uniform sampler2D rampSampler;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec4 textureColor=texture2D(diffuseSampler,vUV);vec4 baseColor=(textureColor*textureMask+(vec4(1.,1.,1.,1.)-textureMask))*vColor;
#ifdef RAMPGRADIENT
float alpha=baseColor.a;float remappedColorIndex=clamp((alpha-remapRanges.x)/remapRanges.y,0.0,1.0);vec4 rampColor=texture2D(rampSampler,vec2(1.0-remappedColorIndex,0.));baseColor.rgb*=rampColor.rgb;float finalAlpha=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-remapRanges.z)/remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
float sourceAlpha=vColor.a*textureColor.a;baseColor.rgb=baseColor.rgb*sourceAlpha+vec3(1.0)*(1.0-sourceAlpha);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor.rgb=toLinearSpace(baseColor.rgb);
#else
#ifdef IMAGEPROCESSING
baseColor.rgb=toLinearSpace(baseColor.rgb);baseColor=applyImageProcessing(baseColor);
#endif
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const particlesPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGFydGljbGVzX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9wYXJ0aWNsZXMuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZUZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ0ZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dGcmFnbWVudFwiO1xuXG5jb25zdCBuYW1lID0gXCJwYXJ0aWNsZXNQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBMT0dBUklUSE1JQ0RFUFRIXG4jZXh0ZW5zaW9uIEdMX0VYVF9mcmFnX2RlcHRoIDogZW5hYmxlXG4jZW5kaWZcbnZhcnlpbmcgdmVjMiB2VVY7dmFyeWluZyB2ZWM0IHZDb2xvcjt1bmlmb3JtIHZlYzQgdGV4dHVyZU1hc2s7dW5pZm9ybSBzYW1wbGVyMkQgZGlmZnVzZVNhbXBsZXI7XG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8aW1hZ2VQcm9jZXNzaW5nRnVuY3Rpb25zPlxuI2lmZGVmIFJBTVBHUkFESUVOVFxudmFyeWluZyB2ZWM0IHJlbWFwUmFuZ2VzO3VuaWZvcm0gc2FtcGxlcjJEIHJhbXBTYW1wbGVyO1xuI2VuZGlmXG4jaW5jbHVkZTxmb2dGcmFnbWVudERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG4jaW5jbHVkZTxjbGlwUGxhbmVGcmFnbWVudD5cbnZlYzQgdGV4dHVyZUNvbG9yPXRleHR1cmUyRChkaWZmdXNlU2FtcGxlcix2VVYpO3ZlYzQgYmFzZUNvbG9yPSh0ZXh0dXJlQ29sb3IqdGV4dHVyZU1hc2srKHZlYzQoMS4sMS4sMS4sMS4pLXRleHR1cmVNYXNrKSkqdkNvbG9yO1xuI2lmZGVmIFJBTVBHUkFESUVOVFxuZmxvYXQgYWxwaGE9YmFzZUNvbG9yLmE7ZmxvYXQgcmVtYXBwZWRDb2xvckluZGV4PWNsYW1wKChhbHBoYS1yZW1hcFJhbmdlcy54KS9yZW1hcFJhbmdlcy55LDAuMCwxLjApO3ZlYzQgcmFtcENvbG9yPXRleHR1cmUyRChyYW1wU2FtcGxlcix2ZWMyKDEuMC1yZW1hcHBlZENvbG9ySW5kZXgsMC4pKTtiYXNlQ29sb3IucmdiKj1yYW1wQ29sb3IucmdiO2Zsb2F0IGZpbmFsQWxwaGE9YmFzZUNvbG9yLmE7YmFzZUNvbG9yLmE9Y2xhbXAoKGFscGhhKnJhbXBDb2xvci5hLXJlbWFwUmFuZ2VzLnopL3JlbWFwUmFuZ2VzLncsMC4wLDEuMCk7XG4jZW5kaWZcbiNpZmRlZiBCTEVORE1VTFRJUExZTU9ERVxuZmxvYXQgc291cmNlQWxwaGE9dkNvbG9yLmEqdGV4dHVyZUNvbG9yLmE7YmFzZUNvbG9yLnJnYj1iYXNlQ29sb3IucmdiKnNvdXJjZUFscGhhK3ZlYzMoMS4wKSooMS4wLXNvdXJjZUFscGhhKTtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhGcmFnbWVudD5cbiNpbmNsdWRlPGZvZ0ZyYWdtZW50Pihjb2xvcixiYXNlQ29sb3IpXG4jaWZkZWYgSU1BR0VQUk9DRVNTSU5HUE9TVFBST0NFU1NcbmJhc2VDb2xvci5yZ2I9dG9MaW5lYXJTcGFjZShiYXNlQ29sb3IucmdiKTtcbiNlbHNlXG4jaWZkZWYgSU1BR0VQUk9DRVNTSU5HXG5iYXNlQ29sb3IucmdiPXRvTGluZWFyU3BhY2UoYmFzZUNvbG9yLnJnYik7YmFzZUNvbG9yPWFwcGx5SW1hZ2VQcm9jZXNzaW5nKGJhc2VDb2xvcik7XG4jZW5kaWZcbiNlbmRpZlxuZ2xfRnJhZ0NvbG9yPWJhc2VDb2xvcjtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpY2xlc1BpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=