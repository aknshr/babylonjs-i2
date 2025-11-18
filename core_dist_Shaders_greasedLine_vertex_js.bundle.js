"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_greasedLine_vertex_js"],{

/***/ "../core/dist/Shaders/greasedLine.vertex.js":
/*!**************************************************!*\
  !*** ../core/dist/Shaders/greasedLine.vertex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLineVertexShader: () => (/* binding */ greasedLineVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/Shaders/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/Shaders/ShadersInclude/instancesVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "greasedLineVertexShader";
const shader = `precision highp float;
#include<instancesDeclaration>
attribute float grl_widths;attribute vec3 grl_offsets;attribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;varying float grlCounters;varying float grlColorPointer;
#ifdef GREASED_LINE_CAMERA_FACING
attribute vec4 grl_nextAndCounters;attribute vec4 grl_previousAndSide;uniform vec2 grlResolution;uniform float grlAspect;uniform float grlWidth;uniform float grlSizeAttenuation;vec2 grlFix( vec4 i,float aspect ) {vec2 res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute vec3 grl_slopes;attribute float grl_counters;
#endif
void main() {
#include<instancesVertex>
grlColorPointer=grl_colorPointers;mat4 grlMatrix=viewProjection*finalWorld ;
#ifdef GREASED_LINE_CAMERA_FACING
float grlBaseWidth=grlWidth;vec3 grlPrevious=grl_previousAndSide.xyz;float grlSide=grl_previousAndSide.w;vec3 grlNext=grl_nextAndCounters.xyz;grlCounters=grl_nextAndCounters.w;float grlWidth=grlBaseWidth*grl_widths;vec3 positionUpdated=position+grl_offsets;vec3 worldDir=normalize(grlNext-grlPrevious);vec3 nearPosition=positionUpdated+(worldDir*0.01);vec4 grlFinalPosition=grlMatrix*vec4( positionUpdated ,1.0);vec4 screenNearPos=grlMatrix*vec4(nearPosition,1.0);vec2 grlLinePosition=grlFix(grlFinalPosition,grlAspect);vec2 grlLineNearPosition=grlFix(screenNearPos,grlAspect);vec2 grlDir=normalize(grlLineNearPosition-grlLinePosition);vec4 grlNormal=vec4( -grlDir.y,grlDir.x,0.,1. );
#ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM
grlNormal.xy*=-.5*grlWidth;
#else
grlNormal.xy*=.5*grlWidth;
#endif
grlNormal*=projection;if (grlSizeAttenuation==1.) {grlNormal.xy*=grlFinalPosition.w;grlNormal.xy/=( vec4( grlResolution,0.,1. )*projection ).xy;}
grlFinalPosition.xy+=grlNormal.xy*grlSide;gl_Position=grlFinalPosition;
#else
grlCounters=grl_counters;vec4 grlFinalPosition=grlMatrix*vec4( (position+grl_offsets)+grl_slopes*grl_widths ,1.0 ) ;gl_Position=grlFinalPosition;
#endif
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const greasedLineVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfZ3JlYXNlZExpbmVfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvZ3JlYXNlZExpbmUudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwiZ3JlYXNlZExpbmVWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4jaW5jbHVkZTxpbnN0YW5jZXNEZWNsYXJhdGlvbj5cbmF0dHJpYnV0ZSBmbG9hdCBncmxfd2lkdGhzO2F0dHJpYnV0ZSB2ZWMzIGdybF9vZmZzZXRzO2F0dHJpYnV0ZSBmbG9hdCBncmxfY29sb3JQb2ludGVyczthdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjt1bmlmb3JtIG1hdDQgdmlld1Byb2plY3Rpb247dW5pZm9ybSBtYXQ0IHByb2plY3Rpb247dmFyeWluZyBmbG9hdCBncmxDb3VudGVyczt2YXJ5aW5nIGZsb2F0IGdybENvbG9yUG9pbnRlcjtcbiNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xuYXR0cmlidXRlIHZlYzQgZ3JsX25leHRBbmRDb3VudGVyczthdHRyaWJ1dGUgdmVjNCBncmxfcHJldmlvdXNBbmRTaWRlO3VuaWZvcm0gdmVjMiBncmxSZXNvbHV0aW9uO3VuaWZvcm0gZmxvYXQgZ3JsQXNwZWN0O3VuaWZvcm0gZmxvYXQgZ3JsV2lkdGg7dW5pZm9ybSBmbG9hdCBncmxTaXplQXR0ZW51YXRpb247dmVjMiBncmxGaXgoIHZlYzQgaSxmbG9hdCBhc3BlY3QgKSB7dmVjMiByZXM9aS54eS9pLnc7cmVzLngqPWFzcGVjdDtyZXR1cm4gcmVzO31cbiNlbHNlXG5hdHRyaWJ1dGUgdmVjMyBncmxfc2xvcGVzO2F0dHJpYnV0ZSBmbG9hdCBncmxfY291bnRlcnM7XG4jZW5kaWZcbnZvaWQgbWFpbigpIHtcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbmdybENvbG9yUG9pbnRlcj1ncmxfY29sb3JQb2ludGVyczttYXQ0IGdybE1hdHJpeD12aWV3UHJvamVjdGlvbipmaW5hbFdvcmxkIDtcbiNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xuZmxvYXQgZ3JsQmFzZVdpZHRoPWdybFdpZHRoO3ZlYzMgZ3JsUHJldmlvdXM9Z3JsX3ByZXZpb3VzQW5kU2lkZS54eXo7ZmxvYXQgZ3JsU2lkZT1ncmxfcHJldmlvdXNBbmRTaWRlLnc7dmVjMyBncmxOZXh0PWdybF9uZXh0QW5kQ291bnRlcnMueHl6O2dybENvdW50ZXJzPWdybF9uZXh0QW5kQ291bnRlcnMudztmbG9hdCBncmxXaWR0aD1ncmxCYXNlV2lkdGgqZ3JsX3dpZHRoczt2ZWMzIHBvc2l0aW9uVXBkYXRlZD1wb3NpdGlvbitncmxfb2Zmc2V0czt2ZWMzIHdvcmxkRGlyPW5vcm1hbGl6ZShncmxOZXh0LWdybFByZXZpb3VzKTt2ZWMzIG5lYXJQb3NpdGlvbj1wb3NpdGlvblVwZGF0ZWQrKHdvcmxkRGlyKjAuMDEpO3ZlYzQgZ3JsRmluYWxQb3NpdGlvbj1ncmxNYXRyaXgqdmVjNCggcG9zaXRpb25VcGRhdGVkICwxLjApO3ZlYzQgc2NyZWVuTmVhclBvcz1ncmxNYXRyaXgqdmVjNChuZWFyUG9zaXRpb24sMS4wKTt2ZWMyIGdybExpbmVQb3NpdGlvbj1ncmxGaXgoZ3JsRmluYWxQb3NpdGlvbixncmxBc3BlY3QpO3ZlYzIgZ3JsTGluZU5lYXJQb3NpdGlvbj1ncmxGaXgoc2NyZWVuTmVhclBvcyxncmxBc3BlY3QpO3ZlYzIgZ3JsRGlyPW5vcm1hbGl6ZShncmxMaW5lTmVhclBvc2l0aW9uLWdybExpbmVQb3NpdGlvbik7dmVjNCBncmxOb3JtYWw9dmVjNCggLWdybERpci55LGdybERpci54LDAuLDEuICk7XG4jaWZkZWYgR1JFQVNFRF9MSU5FX1JJR0hUX0hBTkRFRF9DT09SRElOQVRFX1NZU1RFTVxuZ3JsTm9ybWFsLnh5Kj0tLjUqZ3JsV2lkdGg7XG4jZWxzZVxuZ3JsTm9ybWFsLnh5Kj0uNSpncmxXaWR0aDtcbiNlbmRpZlxuZ3JsTm9ybWFsKj1wcm9qZWN0aW9uO2lmIChncmxTaXplQXR0ZW51YXRpb249PTEuKSB7Z3JsTm9ybWFsLnh5Kj1ncmxGaW5hbFBvc2l0aW9uLnc7Z3JsTm9ybWFsLnh5Lz0oIHZlYzQoIGdybFJlc29sdXRpb24sMC4sMS4gKSpwcm9qZWN0aW9uICkueHk7fVxuZ3JsRmluYWxQb3NpdGlvbi54eSs9Z3JsTm9ybWFsLnh5KmdybFNpZGU7Z2xfUG9zaXRpb249Z3JsRmluYWxQb3NpdGlvbjtcbiNlbHNlXG5ncmxDb3VudGVycz1ncmxfY291bnRlcnM7dmVjNCBncmxGaW5hbFBvc2l0aW9uPWdybE1hdHJpeCp2ZWM0KCAocG9zaXRpb24rZ3JsX29mZnNldHMpK2dybF9zbG9wZXMqZ3JsX3dpZHRocyAsMS4wICkgO2dsX1Bvc2l0aW9uPWdybEZpbmFsUG9zaXRpb247XG4jZW5kaWZcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBncmVhc2VkTGluZVZlcnRleFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=