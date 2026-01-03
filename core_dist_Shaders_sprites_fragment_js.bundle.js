"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_sprites_fragment_js"],{

/***/ "../core/dist/Shaders/sprites.fragment.js":
/*!************************************************!*\
  !*** ../core/dist/Shaders/sprites.fragment.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spritesPixelShader: () => (/* binding */ spritesPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_fogFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/fogFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/fogFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/logDepthFragment */ "../core/dist/Shaders/ShadersInclude/logDepthFragment.js");
/* harmony import */ var _ShadersInclude_fogFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/fogFragment */ "../core/dist/Shaders/ShadersInclude/fogFragment.js");
/* harmony import */ var _ShadersInclude_imageProcessingCompatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/imageProcessingCompatibility */ "../core/dist/Shaders/ShadersInclude/imageProcessingCompatibility.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.






const name = "spritesPixelShader";
const shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform bool alphaTest;varying vec4 vColor;varying vec2 vUV;uniform sampler2D diffuseSampler;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
vec2 uvPixelPerfect(vec2 uv) {vec2 res=vec2(textureSize(diffuseSampler,0));uv=uv*res;vec2 seam=floor(uv+0.5);uv=seam+clamp((uv-seam)/fwidth(uv),-0.5,0.5);return uv/res;}
#endif
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
vec2 uv=uvPixelPerfect(vUV);
#else
vec2 uv=vUV;
#endif
vec4 color=texture2D(diffuseSampler,uv);float fAlphaTest=float(alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95)
discard;}
color*=vColor;
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const spritesPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfc3ByaXRlc19mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvc3ByaXRlcy5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nRnJhZ21lbnRcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW1hZ2VQcm9jZXNzaW5nQ29tcGF0aWJpbGl0eVwiO1xuXG5jb25zdCBuYW1lID0gXCJzcHJpdGVzUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTE9HQVJJVEhNSUNERVBUSFxuI2V4dGVuc2lvbiBHTF9FWFRfZnJhZ19kZXB0aCA6IGVuYWJsZVxuI2VuZGlmXG51bmlmb3JtIGJvb2wgYWxwaGFUZXN0O3ZhcnlpbmcgdmVjNCB2Q29sb3I7dmFyeWluZyB2ZWMyIHZVVjt1bmlmb3JtIHNhbXBsZXIyRCBkaWZmdXNlU2FtcGxlcjtcbiNpbmNsdWRlPGZvZ0ZyYWdtZW50RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbiNpZmRlZiBQSVhFTF9QRVJGRUNUXG52ZWMyIHV2UGl4ZWxQZXJmZWN0KHZlYzIgdXYpIHt2ZWMyIHJlcz12ZWMyKHRleHR1cmVTaXplKGRpZmZ1c2VTYW1wbGVyLDApKTt1dj11dipyZXM7dmVjMiBzZWFtPWZsb29yKHV2KzAuNSk7dXY9c2VhbStjbGFtcCgodXYtc2VhbSkvZndpZHRoKHV2KSwtMC41LDAuNSk7cmV0dXJuIHV2L3Jlczt9XG4jZW5kaWZcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG4jaWZkZWYgUElYRUxfUEVSRkVDVFxudmVjMiB1dj11dlBpeGVsUGVyZmVjdCh2VVYpO1xuI2Vsc2VcbnZlYzIgdXY9dlVWO1xuI2VuZGlmXG52ZWM0IGNvbG9yPXRleHR1cmUyRChkaWZmdXNlU2FtcGxlcix1dik7ZmxvYXQgZkFscGhhVGVzdD1mbG9hdChhbHBoYVRlc3QpO2lmIChmQWxwaGFUZXN0ICE9IDAuKVxue2lmIChjb2xvci5hPDAuOTUpXG5kaXNjYXJkO31cbmNvbG9yKj12Q29sb3I7XG4jaW5jbHVkZTxsb2dEZXB0aEZyYWdtZW50PlxuI2luY2x1ZGU8Zm9nRnJhZ21lbnQ+XG5nbF9GcmFnQ29sb3I9Y29sb3I7XG4jaW5jbHVkZTxpbWFnZVByb2Nlc3NpbmdDb21wYXRpYmlsaXR5PlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc3ByaXRlc1BpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=