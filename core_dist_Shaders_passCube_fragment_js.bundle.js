"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_passCube_fragment_js"],{

/***/ "../core/dist/Shaders/passCube.fragment.js":
/*!*************************************************!*\
  !*** ../core/dist/Shaders/passCube.fragment.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passCubePixelShader: () => (/* binding */ passCubePixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "passCubePixelShader";
const shader = `varying vec2 vUV;uniform samplerCube textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{vec2 uv=vUV*2.0-1.0;
#ifdef POSITIVEX
gl_FragColor=textureCube(textureSampler,vec3(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
gl_FragColor=textureCube(textureSampler,vec3(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
gl_FragColor=textureCube(textureSampler,vec3(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,1.001));
#endif
#ifdef NEGATIVEZ
gl_FragColor=textureCube(textureSampler,vec3(uv,-1.001));
#endif
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const passCubePixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGFzc0N1YmVfZnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvcGFzc0N1YmUuZnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBhc3NDdWJlUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gc2FtcGxlckN1YmUgdGV4dHVyZVNhbXBsZXI7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9ERUZJTklUSU9OU1xudm9pZCBtYWluKHZvaWQpIFxue3ZlYzIgdXY9dlVWKjIuMC0xLjA7XG4jaWZkZWYgUE9TSVRJVkVYXG5nbF9GcmFnQ29sb3I9dGV4dHVyZUN1YmUodGV4dHVyZVNhbXBsZXIsdmVjMygxLjAwMSx1di55LHV2LngpKTtcbiNlbmRpZlxuI2lmZGVmIE5FR0FUSVZFWFxuZ2xfRnJhZ0NvbG9yPXRleHR1cmVDdWJlKHRleHR1cmVTYW1wbGVyLHZlYzMoLTEuMDAxLHV2LnksdXYueCkpO1xuI2VuZGlmXG4jaWZkZWYgUE9TSVRJVkVZXG5nbF9GcmFnQ29sb3I9dGV4dHVyZUN1YmUodGV4dHVyZVNhbXBsZXIsdmVjMyh1di55LDEuMDAxLHV2LngpKTtcbiNlbmRpZlxuI2lmZGVmIE5FR0FUSVZFWVxuZ2xfRnJhZ0NvbG9yPXRleHR1cmVDdWJlKHRleHR1cmVTYW1wbGVyLHZlYzModXYueSwtMS4wMDEsdXYueCkpO1xuI2VuZGlmXG4jaWZkZWYgUE9TSVRJVkVaXG5nbF9GcmFnQ29sb3I9dGV4dHVyZUN1YmUodGV4dHVyZVNhbXBsZXIsdmVjMyh1diwxLjAwMSkpO1xuI2VuZGlmXG4jaWZkZWYgTkVHQVRJVkVaXG5nbF9GcmFnQ29sb3I9dGV4dHVyZUN1YmUodGV4dHVyZVNhbXBsZXIsdmVjMyh1diwtMS4wMDEpKTtcbiNlbmRpZlxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYXNzQ3ViZVBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=