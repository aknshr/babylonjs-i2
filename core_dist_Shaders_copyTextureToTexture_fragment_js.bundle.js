"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_copyTextureToTexture_fragment_js"],{

/***/ "../core/dist/Shaders/copyTextureToTexture.fragment.js":
/*!*************************************************************!*\
  !*** ../core/dist/Shaders/copyTextureToTexture.fragment.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyTextureToTexturePixelShader: () => (/* binding */ copyTextureToTexturePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "copyTextureToTexturePixelShader";
const shader = `uniform float conversion;uniform sampler2D textureSampler;uniform float lodLevel;varying vec2 vUV;
#include<helperFunctions>
void main(void) 
{
#ifdef NO_SAMPLER
vec4 color=texelFetch(textureSampler,ivec2(gl_FragCoord.xy),0);
#else
vec4 color=textureLod(textureSampler,vUV,lodLevel);
#endif
#ifdef DEPTH_TEXTURE
gl_FragDepth=color.r;
#else
if (conversion==1.) {color=toLinearSpace(color);} else if (conversion==2.) {color=toGammaSpace(color);}
gl_FragColor=color;
#endif
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const copyTextureToTexturePixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfY29weVRleHR1cmVUb1RleHR1cmVfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvY29weVRleHR1cmVUb1RleHR1cmUuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJjb3B5VGV4dHVyZVRvVGV4dHVyZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBmbG9hdCBjb252ZXJzaW9uO3VuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmVTYW1wbGVyO3VuaWZvcm0gZmxvYXQgbG9kTGV2ZWw7dmFyeWluZyB2ZWMyIHZVVjtcbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbnZvaWQgbWFpbih2b2lkKSBcbntcbiNpZmRlZiBOT19TQU1QTEVSXG52ZWM0IGNvbG9yPXRleGVsRmV0Y2godGV4dHVyZVNhbXBsZXIsaXZlYzIoZ2xfRnJhZ0Nvb3JkLnh5KSwwKTtcbiNlbHNlXG52ZWM0IGNvbG9yPXRleHR1cmVMb2QodGV4dHVyZVNhbXBsZXIsdlVWLGxvZExldmVsKTtcbiNlbmRpZlxuI2lmZGVmIERFUFRIX1RFWFRVUkVcbmdsX0ZyYWdEZXB0aD1jb2xvci5yO1xuI2Vsc2VcbmlmIChjb252ZXJzaW9uPT0xLikge2NvbG9yPXRvTGluZWFyU3BhY2UoY29sb3IpO30gZWxzZSBpZiAoY29udmVyc2lvbj09Mi4pIHtjb2xvcj10b0dhbW1hU3BhY2UoY29sb3IpO31cbmdsX0ZyYWdDb2xvcj1jb2xvcjtcbiNlbmRpZlxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGNvcHlUZXh0dXJlVG9UZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9