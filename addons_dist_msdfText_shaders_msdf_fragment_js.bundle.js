"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["addons_dist_msdfText_shaders_msdf_fragment_js"],{

/***/ "../addons/dist/msdfText/shaders/msdf.fragment.js":
/*!********************************************************!*\
  !*** ../addons/dist/msdfText/shaders/msdf.fragment.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfPixelShader: () => (/* binding */ msdfPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "msdfPixelShader";
const shader = `#extension GL_OES_standard_derivatives : enable
precision highp float;uniform sampler2D fontAtlas;uniform vec4 uColor;uniform vec4 uStrokeColor;uniform float uStrokeInsetWidth;uniform float uStrokeOutsetWidth;uniform float thickness;varying vec2 atlasUV;float median(vec3 msdf) {return max(min(msdf.r,msdf.g),min(max(msdf.r,msdf.g),msdf.b));}
void main(void)
{vec3 s=texture2D(fontAtlas,atlasUV).rgb;float sigDist=median(s)-0.5+thickness;float alpha=clamp(sigDist/fwidth(sigDist)+0.5,0.0,1.0);float sigDistOutset=sigDist+uStrokeOutsetWidth*0.5;float sigDistInset=sigDist-uStrokeInsetWidth*0.5;float outset=clamp(sigDistOutset/fwidth(sigDistOutset)+0.5,0.0,1.0);float inset=1.0-clamp(sigDistInset/fwidth(sigDistInset)+0.5,0.0,1.0);float border=outset*inset;vec4 filledFragColor=vec4(uColor.rgb,alpha*uColor.a);vec4 strokedFragColor=vec4(uStrokeColor.rgb,border*uStrokeColor.a);gl_FragColor=mix(filledFragColor,strokedFragColor,border);}`;
// Sideeffect
if (!core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const msdfPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb25zX2Rpc3RfbXNkZlRleHRfc2hhZGVyc19tc2RmX2ZyYWdtZW50X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvYWRkb25zL3NyYy9tc2RmVGV4dC9zaGFkZXJzL21zZGYuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibXNkZlBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2V4dGVuc2lvbiBHTF9PRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXMgOiBlbmFibGVcbnByZWNpc2lvbiBoaWdocCBmbG9hdDt1bmlmb3JtIHNhbXBsZXIyRCBmb250QXRsYXM7dW5pZm9ybSB2ZWM0IHVDb2xvcjt1bmlmb3JtIHZlYzQgdVN0cm9rZUNvbG9yO3VuaWZvcm0gZmxvYXQgdVN0cm9rZUluc2V0V2lkdGg7dW5pZm9ybSBmbG9hdCB1U3Ryb2tlT3V0c2V0V2lkdGg7dW5pZm9ybSBmbG9hdCB0aGlja25lc3M7dmFyeWluZyB2ZWMyIGF0bGFzVVY7ZmxvYXQgbWVkaWFuKHZlYzMgbXNkZikge3JldHVybiBtYXgobWluKG1zZGYucixtc2RmLmcpLG1pbihtYXgobXNkZi5yLG1zZGYuZyksbXNkZi5iKSk7fVxudm9pZCBtYWluKHZvaWQpXG57dmVjMyBzPXRleHR1cmUyRChmb250QXRsYXMsYXRsYXNVVikucmdiO2Zsb2F0IHNpZ0Rpc3Q9bWVkaWFuKHMpLTAuNSt0aGlja25lc3M7ZmxvYXQgYWxwaGE9Y2xhbXAoc2lnRGlzdC9md2lkdGgoc2lnRGlzdCkrMC41LDAuMCwxLjApO2Zsb2F0IHNpZ0Rpc3RPdXRzZXQ9c2lnRGlzdCt1U3Ryb2tlT3V0c2V0V2lkdGgqMC41O2Zsb2F0IHNpZ0Rpc3RJbnNldD1zaWdEaXN0LXVTdHJva2VJbnNldFdpZHRoKjAuNTtmbG9hdCBvdXRzZXQ9Y2xhbXAoc2lnRGlzdE91dHNldC9md2lkdGgoc2lnRGlzdE91dHNldCkrMC41LDAuMCwxLjApO2Zsb2F0IGluc2V0PTEuMC1jbGFtcChzaWdEaXN0SW5zZXQvZndpZHRoKHNpZ0Rpc3RJbnNldCkrMC41LDAuMCwxLjApO2Zsb2F0IGJvcmRlcj1vdXRzZXQqaW5zZXQ7dmVjNCBmaWxsZWRGcmFnQ29sb3I9dmVjNCh1Q29sb3IucmdiLGFscGhhKnVDb2xvci5hKTt2ZWM0IHN0cm9rZWRGcmFnQ29sb3I9dmVjNCh1U3Ryb2tlQ29sb3IucmdiLGJvcmRlcip1U3Ryb2tlQ29sb3IuYSk7Z2xfRnJhZ0NvbG9yPW1peChmaWxsZWRGcmFnQ29sb3Isc3Ryb2tlZEZyYWdDb2xvcixib3JkZXIpO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbXNkZlBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=