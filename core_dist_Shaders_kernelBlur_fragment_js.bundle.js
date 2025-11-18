"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_kernelBlur_fragment_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/kernelBlurFragment.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/kernelBlurFragment.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurFragment: () => (/* binding */ kernelBlurFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "kernelBlurFragment";
const shader = `#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const kernelBlurFragment = { name, shader };


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

/***/ }),

/***/ "../core/dist/Shaders/ShadersInclude/kernelBlurFragment2.js":
/*!******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/kernelBlurFragment2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurFragment2: () => (/* binding */ kernelBlurFragment2)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "kernelBlurFragment2";
const shader = `#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const kernelBlurFragment2 = { name, shader };


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

/***/ }),

/***/ "../core/dist/Shaders/ShadersInclude/kernelBlurVaryingDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/kernelBlurVaryingDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurVaryingDeclaration: () => (/* binding */ kernelBlurVaryingDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "kernelBlurVaryingDeclaration";
const shader = `varying vec2 sampleCoord{X};`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const kernelBlurVaryingDeclaration = { name, shader };


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

/***/ }),

/***/ "../core/dist/Shaders/kernelBlur.fragment.js":
/*!***************************************************!*\
  !*** ../core/dist/Shaders/kernelBlur.fragment.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kernelBlurPixelShader: () => (/* binding */ kernelBlurPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_kernelBlurVaryingDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/kernelBlurVaryingDeclaration */ "../core/dist/Shaders/ShadersInclude/kernelBlurVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_packingFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/packingFunctions */ "../core/dist/Shaders/ShadersInclude/packingFunctions.js");
/* harmony import */ var _ShadersInclude_kernelBlurFragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/kernelBlurFragment */ "../core/dist/Shaders/ShadersInclude/kernelBlurFragment.js");
/* harmony import */ var _ShadersInclude_kernelBlurFragment2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/kernelBlurFragment2 */ "../core/dist/Shaders/ShadersInclude/kernelBlurFragment2.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "kernelBlurPixelShader";
const shader = `uniform sampler2D textureSampler;uniform vec2 delta;varying vec2 sampleCenter;
#ifdef DOF
uniform sampler2D circleOfConfusionSampler;float sampleCoC(in vec2 offset) {float coc=texture2D(circleOfConfusionSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{float computedWeight=0.0;
#ifdef PACKEDFLOAT
float blend=0.;
#else
vec4 blend=vec4(0.);
#endif
#ifdef DOF
float sumOfWeights=CENTER_WEIGHT; 
float factor=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;
#else
blend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
gl_FragColor=pack(blend);
#else
gl_FragColor=blend;
#endif
#ifdef DOF
gl_FragColor/=sumOfWeights;
#endif
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const kernelBlurPixelShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfa2VybmVsQmx1cl9mcmFnbWVudF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2tlcm5lbEJsdXJGcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUva2VybmVsQmx1ckZyYWdtZW50Mi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUva2VybmVsQmx1clZhcnlpbmdEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMva2VybmVsQmx1ci5mcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwia2VybmVsQmx1ckZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIERPRlxuZmFjdG9yPXNhbXBsZUNvQyhzYW1wbGVDb29yZHtYfSk7IFxuY29tcHV0ZWRXZWlnaHQ9S0VSTkVMX1dFSUdIVHtYfSpmYWN0b3I7c3VtT2ZXZWlnaHRzKz1jb21wdXRlZFdlaWdodDtcbiNlbHNlXG5jb21wdXRlZFdlaWdodD1LRVJORUxfV0VJR0hUe1h9O1xuI2VuZGlmXG4jaWZkZWYgUEFDS0VERkxPQVRcbmJsZW5kKz11bnBhY2sodGV4dHVyZTJEKHRleHR1cmVTYW1wbGVyLHNhbXBsZUNvb3Jke1h9KSkqY29tcHV0ZWRXZWlnaHQ7XG4jZWxzZVxuYmxlbmQrPXRleHR1cmUyRCh0ZXh0dXJlU2FtcGxlcixzYW1wbGVDb29yZHtYfSkqY29tcHV0ZWRXZWlnaHQ7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qga2VybmVsQmx1ckZyYWdtZW50ID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJrZXJuZWxCbHVyRnJhZ21lbnQyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIERPRlxuZmFjdG9yPXNhbXBsZUNvQyhzYW1wbGVDZW50ZXIrZGVsdGEqS0VSTkVMX0RFUF9PRkZTRVR7WH0pO2NvbXB1dGVkV2VpZ2h0PUtFUk5FTF9ERVBfV0VJR0hUe1h9KmZhY3RvcjtzdW1PZldlaWdodHMrPWNvbXB1dGVkV2VpZ2h0O1xuI2Vsc2VcbmNvbXB1dGVkV2VpZ2h0PUtFUk5FTF9ERVBfV0VJR0hUe1h9O1xuI2VuZGlmXG4jaWZkZWYgUEFDS0VERkxPQVRcbmJsZW5kKz11bnBhY2sodGV4dHVyZTJEKHRleHR1cmVTYW1wbGVyLHNhbXBsZUNlbnRlcitkZWx0YSpLRVJORUxfREVQX09GRlNFVHtYfSkpKmNvbXB1dGVkV2VpZ2h0O1xuI2Vsc2VcbmJsZW5kKz10ZXh0dXJlMkQodGV4dHVyZVNhbXBsZXIsc2FtcGxlQ2VudGVyK2RlbHRhKktFUk5FTF9ERVBfT0ZGU0VUe1h9KSpjb21wdXRlZFdlaWdodDtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBrZXJuZWxCbHVyRnJhZ21lbnQyID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJrZXJuZWxCbHVyVmFyeWluZ0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyeWluZyB2ZWMyIHNhbXBsZUNvb3Jke1h9O2A7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qga2VybmVsQmx1clZhcnlpbmdEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUva2VybmVsQmx1clZhcnlpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYWNraW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2tlcm5lbEJsdXJGcmFnbWVudFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9rZXJuZWxCbHVyRnJhZ21lbnQyXCI7XG5cbmNvbnN0IG5hbWUgPSBcImtlcm5lbEJsdXJQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmVTYW1wbGVyO3VuaWZvcm0gdmVjMiBkZWx0YTt2YXJ5aW5nIHZlYzIgc2FtcGxlQ2VudGVyO1xuI2lmZGVmIERPRlxudW5pZm9ybSBzYW1wbGVyMkQgY2lyY2xlT2ZDb25mdXNpb25TYW1wbGVyO2Zsb2F0IHNhbXBsZUNvQyhpbiB2ZWMyIG9mZnNldCkge2Zsb2F0IGNvYz10ZXh0dXJlMkQoY2lyY2xlT2ZDb25mdXNpb25TYW1wbGVyLG9mZnNldCkucjtyZXR1cm4gY29jOyB9XG4jZW5kaWZcbiNpbmNsdWRlPGtlcm5lbEJsdXJWYXJ5aW5nRGVjbGFyYXRpb24+WzAuLnZhcnlpbmdDb3VudF1cbiNpZmRlZiBQQUNLRURGTE9BVFxuI2luY2x1ZGU8cGFja2luZ0Z1bmN0aW9ucz5cbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKVxue2Zsb2F0IGNvbXB1dGVkV2VpZ2h0PTAuMDtcbiNpZmRlZiBQQUNLRURGTE9BVFxuZmxvYXQgYmxlbmQ9MC47XG4jZWxzZVxudmVjNCBibGVuZD12ZWM0KDAuKTtcbiNlbmRpZlxuI2lmZGVmIERPRlxuZmxvYXQgc3VtT2ZXZWlnaHRzPUNFTlRFUl9XRUlHSFQ7IFxuZmxvYXQgZmFjdG9yPTAuMDtcbiNpZmRlZiBQQUNLRURGTE9BVFxuYmxlbmQrPXVucGFjayh0ZXh0dXJlMkQodGV4dHVyZVNhbXBsZXIsc2FtcGxlQ2VudGVyKSkqQ0VOVEVSX1dFSUdIVDtcbiNlbHNlXG5ibGVuZCs9dGV4dHVyZTJEKHRleHR1cmVTYW1wbGVyLHNhbXBsZUNlbnRlcikqQ0VOVEVSX1dFSUdIVDtcbiNlbmRpZlxuI2VuZGlmXG4jaW5jbHVkZTxrZXJuZWxCbHVyRnJhZ21lbnQ+WzAuLnZhcnlpbmdDb3VudF1cbiNpbmNsdWRlPGtlcm5lbEJsdXJGcmFnbWVudDI+WzAuLmRlcENvdW50XVxuI2lmZGVmIFBBQ0tFREZMT0FUXG5nbF9GcmFnQ29sb3I9cGFjayhibGVuZCk7XG4jZWxzZVxuZ2xfRnJhZ0NvbG9yPWJsZW5kO1xuI2VuZGlmXG4jaWZkZWYgRE9GXG5nbF9GcmFnQ29sb3IvPXN1bU9mV2VpZ2h0cztcbiNlbmRpZlxufWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBrZXJuZWxCbHVyUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9