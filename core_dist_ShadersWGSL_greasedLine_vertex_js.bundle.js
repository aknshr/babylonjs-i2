"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_greasedLine_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/greasedLine.vertex.js":
/*!******************************************************!*\
  !*** ../core/dist/ShadersWGSL/greasedLine.vertex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   greasedLineVertexShaderWGSL: () => (/* binding */ greasedLineVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _ShadersInclude_meshUboDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.





const name = "greasedLineVertexShader";
const shader = `#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute grl_widths: f32;
#ifdef GREASED_LINE_USE_OFFSETS
attribute grl_offsets: vec3f; 
#endif
attribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#ifdef GREASED_LINE_CAMERA_FACING
attribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute grl_slopes: vec3f;attribute grl_counters: f32;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vertexOutputs.grlColorPointer=input.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;
#ifdef GREASED_LINE_CAMERA_FACING
let grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=input.grl_previousAndSide.xyz;let grlSide: f32=input.grl_previousAndSide.w;let grlNext: vec3f=input.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=input.grl_nextAndCounters.w;let grlWidth:f32=grlBaseWidth*input.grl_widths;
#ifdef GREASED_LINE_USE_OFFSETS
var grlPositionOffset: vec3f=input.grl_offsets;
#else
var grlPositionOffset=vec3f(0.);
#endif
let positionUpdated: vec3f=vertexInputs.position+grlPositionOffset;let worldDir: vec3f=normalize(grlNext-grlPrevious);let nearPosition: vec3f=positionUpdated+(worldDir*0.001);let grlFinalPosition: vec4f=grlMatrix*vec4f(positionUpdated,1.0);let screenNearPos: vec4f=grlMatrix*vec4(nearPosition,1.0);let grlLinePosition: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlLineNearPosition: vec2f=grlFix(screenNearPos,uniforms.grlAspect);let grlDir: vec2f=normalize(grlLineNearPosition-grlLinePosition);var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;
#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
grlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;
#else
grlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;
#endif
grlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}
vertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);
#else
vertexOutputs.grlCounters=input.grl_counters;vertexOutputs.position=grlMatrix*vec4f((vertexInputs.position+input.grl_offsets)+input.grl_slopes*input.grl_widths,1.0) ;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const greasedLineVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2dyZWFzZWRMaW5lX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9ncmVhc2VkTGluZS52ZXJ0ZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJncmVhc2VkTGluZVZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNpbmNsdWRlPGluc3RhbmNlc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmF0dHJpYnV0ZSBncmxfd2lkdGhzOiBmMzI7XG4jaWZkZWYgR1JFQVNFRF9MSU5FX1VTRV9PRkZTRVRTXG5hdHRyaWJ1dGUgZ3JsX29mZnNldHM6IHZlYzNmOyBcbiNlbmRpZlxuYXR0cmlidXRlIGdybF9jb2xvclBvaW50ZXJzOiBmMzI7YXR0cmlidXRlIHBvc2l0aW9uOiB2ZWMzZjt2YXJ5aW5nIGdybENvdW50ZXJzOiBmMzI7dmFyeWluZyBncmxDb2xvclBvaW50ZXI6IGYzMjtcbiNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xuYXR0cmlidXRlIGdybF9uZXh0QW5kQ291bnRlcnM6IHZlYzRmO2F0dHJpYnV0ZSBncmxfcHJldmlvdXNBbmRTaWRlOiB2ZWM0Zjt1bmlmb3JtIGdybFJlc29sdXRpb246IHZlYzJmO3VuaWZvcm0gZ3JsQXNwZWN0OiBmMzI7dW5pZm9ybSBncmxXaWR0aDogZjMyO3VuaWZvcm0gZ3JsU2l6ZUF0dGVudWF0aW9uOiBmMzI7Zm4gZ3JsRml4KGk6IHZlYzRmLGFzcGVjdDogZjMyKS0+dmVjMmYge3ZhciByZXM9aS54eS9pLnc7cmVzLngqPWFzcGVjdDtyZXR1cm4gcmVzO31cbiNlbHNlXG5hdHRyaWJ1dGUgZ3JsX3Nsb3BlczogdmVjM2Y7YXR0cmlidXRlIGdybF9jb3VudGVyczogZjMyO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQgOiBWZXJ0ZXhJbnB1dHMpLT5GcmFnbWVudElucHV0cyB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxudmVydGV4T3V0cHV0cy5ncmxDb2xvclBvaW50ZXI9aW5wdXQuZ3JsX2NvbG9yUG9pbnRlcnM7bGV0IGdybE1hdHJpeDogbWF0NHg0Zj1zY2VuZS52aWV3UHJvamVjdGlvbiptZXNoLndvcmxkIDtcbiNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xubGV0IGdybEJhc2VXaWR0aDogZjMyPXVuaWZvcm1zLmdybFdpZHRoO2xldCBncmxQcmV2aW91czogdmVjM2Y9aW5wdXQuZ3JsX3ByZXZpb3VzQW5kU2lkZS54eXo7bGV0IGdybFNpZGU6IGYzMj1pbnB1dC5ncmxfcHJldmlvdXNBbmRTaWRlLnc7bGV0IGdybE5leHQ6IHZlYzNmPWlucHV0LmdybF9uZXh0QW5kQ291bnRlcnMueHl6O3ZlcnRleE91dHB1dHMuZ3JsQ291bnRlcnM9aW5wdXQuZ3JsX25leHRBbmRDb3VudGVycy53O2xldCBncmxXaWR0aDpmMzI9Z3JsQmFzZVdpZHRoKmlucHV0LmdybF93aWR0aHM7XG4jaWZkZWYgR1JFQVNFRF9MSU5FX1VTRV9PRkZTRVRTXG52YXIgZ3JsUG9zaXRpb25PZmZzZXQ6IHZlYzNmPWlucHV0LmdybF9vZmZzZXRzO1xuI2Vsc2VcbnZhciBncmxQb3NpdGlvbk9mZnNldD12ZWMzZigwLik7XG4jZW5kaWZcbmxldCBwb3NpdGlvblVwZGF0ZWQ6IHZlYzNmPXZlcnRleElucHV0cy5wb3NpdGlvbitncmxQb3NpdGlvbk9mZnNldDtsZXQgd29ybGREaXI6IHZlYzNmPW5vcm1hbGl6ZShncmxOZXh0LWdybFByZXZpb3VzKTtsZXQgbmVhclBvc2l0aW9uOiB2ZWMzZj1wb3NpdGlvblVwZGF0ZWQrKHdvcmxkRGlyKjAuMDAxKTtsZXQgZ3JsRmluYWxQb3NpdGlvbjogdmVjNGY9Z3JsTWF0cml4KnZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO2xldCBzY3JlZW5OZWFyUG9zOiB2ZWM0Zj1ncmxNYXRyaXgqdmVjNChuZWFyUG9zaXRpb24sMS4wKTtsZXQgZ3JsTGluZVBvc2l0aW9uOiB2ZWMyZj1ncmxGaXgoZ3JsRmluYWxQb3NpdGlvbix1bmlmb3Jtcy5ncmxBc3BlY3QpO2xldCBncmxMaW5lTmVhclBvc2l0aW9uOiB2ZWMyZj1ncmxGaXgoc2NyZWVuTmVhclBvcyx1bmlmb3Jtcy5ncmxBc3BlY3QpO2xldCBncmxEaXI6IHZlYzJmPW5vcm1hbGl6ZShncmxMaW5lTmVhclBvc2l0aW9uLWdybExpbmVQb3NpdGlvbik7dmFyIGdybE5vcm1hbDogdmVjNGY9dmVjNGYoLWdybERpci55LGdybERpci54LDAuMCwxLjApO2xldCBncmxIYWxmV2lkdGg6IGYzMj0wLjUqZ3JsV2lkdGg7XG4jaWYgZGVmaW5lZChHUkVBU0VEX0xJTkVfUklHSFRfSEFOREVEX0NPT1JESU5BVEVfU1lTVEVNKVxuZ3JsTm9ybWFsLngqPS1ncmxIYWxmV2lkdGg7Z3JsTm9ybWFsLnkqPS1ncmxIYWxmV2lkdGg7XG4jZWxzZVxuZ3JsTm9ybWFsLngqPWdybEhhbGZXaWR0aDtncmxOb3JtYWwueSo9Z3JsSGFsZldpZHRoO1xuI2VuZGlmXG5ncmxOb3JtYWwqPXNjZW5lLnByb2plY3Rpb247aWYgKHVuaWZvcm1zLmdybFNpemVBdHRlbnVhdGlvbj09MS4pIHtncmxOb3JtYWwueCo9Z3JsRmluYWxQb3NpdGlvbi53O2dybE5vcm1hbC55Kj1ncmxGaW5hbFBvc2l0aW9uLnc7bGV0IHByPXZlYzRmKHVuaWZvcm1zLmdybFJlc29sdXRpb24sMC4wLDEuMCkqc2NlbmUucHJvamVjdGlvbjtncmxOb3JtYWwueC89cHIueDtncmxOb3JtYWwueS89cHIueTt9XG52ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXZlYzRmKGdybEZpbmFsUG9zaXRpb24ueHkrZ3JsTm9ybWFsLnh5KmdybFNpZGUsZ3JsRmluYWxQb3NpdGlvbi56LGdybEZpbmFsUG9zaXRpb24udyk7XG4jZWxzZVxudmVydGV4T3V0cHV0cy5ncmxDb3VudGVycz1pbnB1dC5ncmxfY291bnRlcnM7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj1ncmxNYXRyaXgqdmVjNGYoKHZlcnRleElucHV0cy5wb3NpdGlvbitpbnB1dC5ncmxfb2Zmc2V0cykraW5wdXQuZ3JsX3Nsb3BlcyppbnB1dC5ncmxfd2lkdGhzLDEuMCkgO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGdyZWFzZWRMaW5lVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=