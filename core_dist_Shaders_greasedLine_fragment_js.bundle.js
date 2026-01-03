"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_greasedLine_fragment_js"],{

/***/ "../core/dist/Shaders/greasedLine.fragment.js":
/*!****************************************************!*\
  !*** ../core/dist/Shaders/greasedLine.fragment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLinePixelShader: () => (/* binding */ greasedLinePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "greasedLinePixelShader";
const shader = `precision highp float;uniform sampler2D grlColors;uniform float grlUseColors;uniform float grlUseDash;uniform float grlDashArray;uniform float grlDashOffset;uniform float grlDashRatio;uniform float grlVisibility;uniform float grlColorsWidth;uniform vec2 grl_colorModeAndColorDistributionType;uniform vec3 grlColor;varying float grlCounters;varying float grlColorPointer;void main() {float grlColorMode=grl_colorModeAndColorDistributionType.x;float grlColorDistributionType=grl_colorModeAndColorDistributionType.y;gl_FragColor=vec4(grlColor,1.);gl_FragColor.a=step(grlCounters,grlVisibility);if (gl_FragColor.a==0.) discard;if( grlUseDash==1. ){gl_FragColor.a=ceil(mod(grlCounters+grlDashOffset,grlDashArray)-(grlDashArray*grlDashRatio));if (gl_FragColor.a==0.) discard;}
if (grlUseColors==1.) {vec4 textureColor;if (grlColorDistributionType==COLOR_DISTRIBUTION_TYPE_LINE) { 
textureColor=texture2D(grlColors,vec2(grlCounters,0.),0.);} else {textureColor=texture2D(grlColors,vec2(grlColorPointer/grlColorsWidth,0.),0.);}
if (grlColorMode==COLOR_MODE_SET) {gl_FragColor=textureColor;} else if (grlColorMode==COLOR_MODE_ADD) {gl_FragColor+=textureColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {gl_FragColor*=textureColor;}}}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const greasedLinePixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfZ3JlYXNlZExpbmVfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9ncmVhc2VkTGluZS5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZ3JlYXNlZExpbmVQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHByZWNpc2lvbiBoaWdocCBmbG9hdDt1bmlmb3JtIHNhbXBsZXIyRCBncmxDb2xvcnM7dW5pZm9ybSBmbG9hdCBncmxVc2VDb2xvcnM7dW5pZm9ybSBmbG9hdCBncmxVc2VEYXNoO3VuaWZvcm0gZmxvYXQgZ3JsRGFzaEFycmF5O3VuaWZvcm0gZmxvYXQgZ3JsRGFzaE9mZnNldDt1bmlmb3JtIGZsb2F0IGdybERhc2hSYXRpbzt1bmlmb3JtIGZsb2F0IGdybFZpc2liaWxpdHk7dW5pZm9ybSBmbG9hdCBncmxDb2xvcnNXaWR0aDt1bmlmb3JtIHZlYzIgZ3JsX2NvbG9yTW9kZUFuZENvbG9yRGlzdHJpYnV0aW9uVHlwZTt1bmlmb3JtIHZlYzMgZ3JsQ29sb3I7dmFyeWluZyBmbG9hdCBncmxDb3VudGVyczt2YXJ5aW5nIGZsb2F0IGdybENvbG9yUG9pbnRlcjt2b2lkIG1haW4oKSB7ZmxvYXQgZ3JsQ29sb3JNb2RlPWdybF9jb2xvck1vZGVBbmRDb2xvckRpc3RyaWJ1dGlvblR5cGUueDtmbG9hdCBncmxDb2xvckRpc3RyaWJ1dGlvblR5cGU9Z3JsX2NvbG9yTW9kZUFuZENvbG9yRGlzdHJpYnV0aW9uVHlwZS55O2dsX0ZyYWdDb2xvcj12ZWM0KGdybENvbG9yLDEuKTtnbF9GcmFnQ29sb3IuYT1zdGVwKGdybENvdW50ZXJzLGdybFZpc2liaWxpdHkpO2lmIChnbF9GcmFnQ29sb3IuYT09MC4pIGRpc2NhcmQ7aWYoIGdybFVzZURhc2g9PTEuICl7Z2xfRnJhZ0NvbG9yLmE9Y2VpbChtb2QoZ3JsQ291bnRlcnMrZ3JsRGFzaE9mZnNldCxncmxEYXNoQXJyYXkpLShncmxEYXNoQXJyYXkqZ3JsRGFzaFJhdGlvKSk7aWYgKGdsX0ZyYWdDb2xvci5hPT0wLikgZGlzY2FyZDt9XG5pZiAoZ3JsVXNlQ29sb3JzPT0xLikge3ZlYzQgdGV4dHVyZUNvbG9yO2lmIChncmxDb2xvckRpc3RyaWJ1dGlvblR5cGU9PUNPTE9SX0RJU1RSSUJVVElPTl9UWVBFX0xJTkUpIHsgXG50ZXh0dXJlQ29sb3I9dGV4dHVyZTJEKGdybENvbG9ycyx2ZWMyKGdybENvdW50ZXJzLDAuKSwwLik7fSBlbHNlIHt0ZXh0dXJlQ29sb3I9dGV4dHVyZTJEKGdybENvbG9ycyx2ZWMyKGdybENvbG9yUG9pbnRlci9ncmxDb2xvcnNXaWR0aCwwLiksMC4pO31cbmlmIChncmxDb2xvck1vZGU9PUNPTE9SX01PREVfU0VUKSB7Z2xfRnJhZ0NvbG9yPXRleHR1cmVDb2xvcjt9IGVsc2UgaWYgKGdybENvbG9yTW9kZT09Q09MT1JfTU9ERV9BREQpIHtnbF9GcmFnQ29sb3IrPXRleHR1cmVDb2xvcjt9IGVsc2UgaWYgKGdybENvbG9yTW9kZT09Q09MT1JfTU9ERV9NVUxUSVBMWSkge2dsX0ZyYWdDb2xvcio9dGV4dHVyZUNvbG9yO319fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGdyZWFzZWRMaW5lUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==