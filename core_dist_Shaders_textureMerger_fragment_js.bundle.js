"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_textureMerger_fragment_js"],{

/***/ "../core/dist/Shaders/textureMerger.fragment.js":
/*!******************************************************!*\
  !*** ../core/dist/Shaders/textureMerger.fragment.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textureMergerPixelShader: () => (/* binding */ textureMergerPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "textureMergerPixelShader";
const shader = `#ifdef USE_TEXTURE0
uniform sampler2D inputTexture0;
#endif
#ifdef USE_TEXTURE1
uniform sampler2D inputTexture1;
#endif
#ifdef USE_TEXTURE2
uniform sampler2D inputTexture2;
#endif
#ifdef USE_TEXTURE3
uniform sampler2D inputTexture3;
#endif
#ifdef RED_FROM_TEXTURE
uniform int redTextureIndex;uniform int redSourceChannel;
#else
uniform float redConstantValue;
#endif
#ifdef GREEN_FROM_TEXTURE
uniform int greenTextureIndex;uniform int greenSourceChannel;
#else
uniform float greenConstantValue;
#endif
#ifdef BLUE_FROM_TEXTURE
uniform int blueTextureIndex;uniform int blueSourceChannel;
#else
uniform float blueConstantValue;
#endif
#ifdef ALPHA_FROM_TEXTURE
uniform int alphaTextureIndex;uniform int alphaSourceChannel;
#else
uniform float alphaConstantValue;
#endif
varying vec2 vUV;
#if defined(RED_FROM_TEXTURE) || defined(GREEN_FROM_TEXTURE) || defined(BLUE_FROM_TEXTURE) || defined(ALPHA_FROM_TEXTURE)
vec4 sampleTexture(int textureIndex,vec2 uv) {switch (textureIndex) {
#ifdef USE_TEXTURE0
case 0:
return texture2D(inputTexture0,uv);
#endif
#ifdef USE_TEXTURE1
case 1:
return texture2D(inputTexture1,uv);
#endif
#ifdef USE_TEXTURE2
case 2:
return texture2D(inputTexture2,uv);
#endif
#ifdef USE_TEXTURE3
case 3:
return texture2D(inputTexture3,uv);
#endif
default:
return vec4(0.0,0.0,0.0,1.0); }}
float extractChannel(vec4 color,int channelIndex) {switch (channelIndex) {case 0:
return color.r; 
case 1:
return color.g; 
case 2:
return color.b; 
default:
return color.a; }}
#endif
void main() {vec2 uv=vUV;
#ifdef RED_FROM_TEXTURE
vec4 redSample=sampleTexture(redTextureIndex,uv);float r=extractChannel(redSample,redSourceChannel);
#else
float r=redConstantValue;
#endif
#ifdef GREEN_FROM_TEXTURE
vec4 greenSample=sampleTexture(greenTextureIndex,uv);float g=extractChannel(greenSample,greenSourceChannel);
#else
float g=greenConstantValue;
#endif
#ifdef BLUE_FROM_TEXTURE
vec4 blueSample=sampleTexture(blueTextureIndex,uv);float b=extractChannel(blueSample,blueSourceChannel);
#else
float b=blueConstantValue;
#endif
#ifdef ALPHA_FROM_TEXTURE
vec4 alphaSample=sampleTexture(alphaTextureIndex,uv);float a=extractChannel(alphaSample,alphaSourceChannel);
#else
float a=alphaConstantValue;
#endif
gl_FragColor=vec4(r,g,b,a);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const textureMergerPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfdGV4dHVyZU1lcmdlcl9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvdGV4dHVyZU1lcmdlci5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwidGV4dHVyZU1lcmdlclBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFVTRV9URVhUVVJFMFxudW5pZm9ybSBzYW1wbGVyMkQgaW5wdXRUZXh0dXJlMDtcbiNlbmRpZlxuI2lmZGVmIFVTRV9URVhUVVJFMVxudW5pZm9ybSBzYW1wbGVyMkQgaW5wdXRUZXh0dXJlMTtcbiNlbmRpZlxuI2lmZGVmIFVTRV9URVhUVVJFMlxudW5pZm9ybSBzYW1wbGVyMkQgaW5wdXRUZXh0dXJlMjtcbiNlbmRpZlxuI2lmZGVmIFVTRV9URVhUVVJFM1xudW5pZm9ybSBzYW1wbGVyMkQgaW5wdXRUZXh0dXJlMztcbiNlbmRpZlxuI2lmZGVmIFJFRF9GUk9NX1RFWFRVUkVcbnVuaWZvcm0gaW50IHJlZFRleHR1cmVJbmRleDt1bmlmb3JtIGludCByZWRTb3VyY2VDaGFubmVsO1xuI2Vsc2VcbnVuaWZvcm0gZmxvYXQgcmVkQ29uc3RhbnRWYWx1ZTtcbiNlbmRpZlxuI2lmZGVmIEdSRUVOX0ZST01fVEVYVFVSRVxudW5pZm9ybSBpbnQgZ3JlZW5UZXh0dXJlSW5kZXg7dW5pZm9ybSBpbnQgZ3JlZW5Tb3VyY2VDaGFubmVsO1xuI2Vsc2VcbnVuaWZvcm0gZmxvYXQgZ3JlZW5Db25zdGFudFZhbHVlO1xuI2VuZGlmXG4jaWZkZWYgQkxVRV9GUk9NX1RFWFRVUkVcbnVuaWZvcm0gaW50IGJsdWVUZXh0dXJlSW5kZXg7dW5pZm9ybSBpbnQgYmx1ZVNvdXJjZUNoYW5uZWw7XG4jZWxzZVxudW5pZm9ybSBmbG9hdCBibHVlQ29uc3RhbnRWYWx1ZTtcbiNlbmRpZlxuI2lmZGVmIEFMUEhBX0ZST01fVEVYVFVSRVxudW5pZm9ybSBpbnQgYWxwaGFUZXh0dXJlSW5kZXg7dW5pZm9ybSBpbnQgYWxwaGFTb3VyY2VDaGFubmVsO1xuI2Vsc2VcbnVuaWZvcm0gZmxvYXQgYWxwaGFDb25zdGFudFZhbHVlO1xuI2VuZGlmXG52YXJ5aW5nIHZlYzIgdlVWO1xuI2lmIGRlZmluZWQoUkVEX0ZST01fVEVYVFVSRSkgfHwgZGVmaW5lZChHUkVFTl9GUk9NX1RFWFRVUkUpIHx8IGRlZmluZWQoQkxVRV9GUk9NX1RFWFRVUkUpIHx8IGRlZmluZWQoQUxQSEFfRlJPTV9URVhUVVJFKVxudmVjNCBzYW1wbGVUZXh0dXJlKGludCB0ZXh0dXJlSW5kZXgsdmVjMiB1dikge3N3aXRjaCAodGV4dHVyZUluZGV4KSB7XG4jaWZkZWYgVVNFX1RFWFRVUkUwXG5jYXNlIDA6XG5yZXR1cm4gdGV4dHVyZTJEKGlucHV0VGV4dHVyZTAsdXYpO1xuI2VuZGlmXG4jaWZkZWYgVVNFX1RFWFRVUkUxXG5jYXNlIDE6XG5yZXR1cm4gdGV4dHVyZTJEKGlucHV0VGV4dHVyZTEsdXYpO1xuI2VuZGlmXG4jaWZkZWYgVVNFX1RFWFRVUkUyXG5jYXNlIDI6XG5yZXR1cm4gdGV4dHVyZTJEKGlucHV0VGV4dHVyZTIsdXYpO1xuI2VuZGlmXG4jaWZkZWYgVVNFX1RFWFRVUkUzXG5jYXNlIDM6XG5yZXR1cm4gdGV4dHVyZTJEKGlucHV0VGV4dHVyZTMsdXYpO1xuI2VuZGlmXG5kZWZhdWx0OlxucmV0dXJuIHZlYzQoMC4wLDAuMCwwLjAsMS4wKTsgfX1cbmZsb2F0IGV4dHJhY3RDaGFubmVsKHZlYzQgY29sb3IsaW50IGNoYW5uZWxJbmRleCkge3N3aXRjaCAoY2hhbm5lbEluZGV4KSB7Y2FzZSAwOlxucmV0dXJuIGNvbG9yLnI7IFxuY2FzZSAxOlxucmV0dXJuIGNvbG9yLmc7IFxuY2FzZSAyOlxucmV0dXJuIGNvbG9yLmI7IFxuZGVmYXVsdDpcbnJldHVybiBjb2xvci5hOyB9fVxuI2VuZGlmXG52b2lkIG1haW4oKSB7dmVjMiB1dj12VVY7XG4jaWZkZWYgUkVEX0ZST01fVEVYVFVSRVxudmVjNCByZWRTYW1wbGU9c2FtcGxlVGV4dHVyZShyZWRUZXh0dXJlSW5kZXgsdXYpO2Zsb2F0IHI9ZXh0cmFjdENoYW5uZWwocmVkU2FtcGxlLHJlZFNvdXJjZUNoYW5uZWwpO1xuI2Vsc2VcbmZsb2F0IHI9cmVkQ29uc3RhbnRWYWx1ZTtcbiNlbmRpZlxuI2lmZGVmIEdSRUVOX0ZST01fVEVYVFVSRVxudmVjNCBncmVlblNhbXBsZT1zYW1wbGVUZXh0dXJlKGdyZWVuVGV4dHVyZUluZGV4LHV2KTtmbG9hdCBnPWV4dHJhY3RDaGFubmVsKGdyZWVuU2FtcGxlLGdyZWVuU291cmNlQ2hhbm5lbCk7XG4jZWxzZVxuZmxvYXQgZz1ncmVlbkNvbnN0YW50VmFsdWU7XG4jZW5kaWZcbiNpZmRlZiBCTFVFX0ZST01fVEVYVFVSRVxudmVjNCBibHVlU2FtcGxlPXNhbXBsZVRleHR1cmUoYmx1ZVRleHR1cmVJbmRleCx1dik7ZmxvYXQgYj1leHRyYWN0Q2hhbm5lbChibHVlU2FtcGxlLGJsdWVTb3VyY2VDaGFubmVsKTtcbiNlbHNlXG5mbG9hdCBiPWJsdWVDb25zdGFudFZhbHVlO1xuI2VuZGlmXG4jaWZkZWYgQUxQSEFfRlJPTV9URVhUVVJFXG52ZWM0IGFscGhhU2FtcGxlPXNhbXBsZVRleHR1cmUoYWxwaGFUZXh0dXJlSW5kZXgsdXYpO2Zsb2F0IGE9ZXh0cmFjdENoYW5uZWwoYWxwaGFTYW1wbGUsYWxwaGFTb3VyY2VDaGFubmVsKTtcbiNlbHNlXG5mbG9hdCBhPWFscGhhQ29uc3RhbnRWYWx1ZTtcbiNlbmRpZlxuZ2xfRnJhZ0NvbG9yPXZlYzQocixnLGIsYSk7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCB0ZXh0dXJlTWVyZ2VyUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9