"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["addons_dist_msdfText_shaders_msdf_vertex_js"],{

/***/ "../addons/dist/msdfText/shaders/msdf.vertex.js":
/*!******************************************************!*\
  !*** ../addons/dist/msdfText/shaders/msdf.vertex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfVertexShader: () => (/* binding */ msdfVertexShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "msdfVertexShader";
const shader = `#define BILLBOARD 1
#define BILLBOARDSCREENPROJECTED 2
attribute vec2 offsets;attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;attribute vec4 uvs;uniform mat4 transform;uniform mat4 parentWorld;uniform mat4 view;uniform mat4 projection;uniform vec3 center;uniform int mode;varying vec2 atlasUV;void main(void) {mat4 world=mat4(world0,world1,world2,world3);vec4 worldPos=transform*(world*vec4(offsets.xy-vec2(0.5,0.5),0.,1.0));if (mode>=BILLBOARD) {vec3 viewPos=(view*parentWorld*vec4(0.,0.,0.,1.0)).xyz; 
if (mode==BILLBOARDSCREENPROJECTED) {viewPos.x/=viewPos.z;viewPos.y/=viewPos.z;viewPos.z=1.0;}
gl_Position=projection*vec4(viewPos+worldPos.xyz,1.0); } else {vec3 viewPos=(view*parentWorld*worldPos).xyz; 
gl_Position=projection*vec4(viewPos,1.0); }
atlasUV=vec2(uvs.x+offsets.x*uvs.z,uvs.y+(1.0-offsets.y)*uvs.w);}`;
// Sideeffect
if (!core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const msdfVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb25zX2Rpc3RfbXNkZlRleHRfc2hhZGVyc19tc2RmX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2FkZG9ucy9zcmMvbXNkZlRleHQvc2hhZGVycy9tc2RmLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtc2RmVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBCSUxMQk9BUkQgMVxuI2RlZmluZSBCSUxMQk9BUkRTQ1JFRU5QUk9KRUNURUQgMlxuYXR0cmlidXRlIHZlYzIgb2Zmc2V0czthdHRyaWJ1dGUgdmVjNCB3b3JsZDA7YXR0cmlidXRlIHZlYzQgd29ybGQxO2F0dHJpYnV0ZSB2ZWM0IHdvcmxkMjthdHRyaWJ1dGUgdmVjNCB3b3JsZDM7YXR0cmlidXRlIHZlYzQgdXZzO3VuaWZvcm0gbWF0NCB0cmFuc2Zvcm07dW5pZm9ybSBtYXQ0IHBhcmVudFdvcmxkO3VuaWZvcm0gbWF0NCB2aWV3O3VuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO3VuaWZvcm0gdmVjMyBjZW50ZXI7dW5pZm9ybSBpbnQgbW9kZTt2YXJ5aW5nIHZlYzIgYXRsYXNVVjt2b2lkIG1haW4odm9pZCkge21hdDQgd29ybGQ9bWF0NCh3b3JsZDAsd29ybGQxLHdvcmxkMix3b3JsZDMpO3ZlYzQgd29ybGRQb3M9dHJhbnNmb3JtKih3b3JsZCp2ZWM0KG9mZnNldHMueHktdmVjMigwLjUsMC41KSwwLiwxLjApKTtpZiAobW9kZT49QklMTEJPQVJEKSB7dmVjMyB2aWV3UG9zPSh2aWV3KnBhcmVudFdvcmxkKnZlYzQoMC4sMC4sMC4sMS4wKSkueHl6OyBcbmlmIChtb2RlPT1CSUxMQk9BUkRTQ1JFRU5QUk9KRUNURUQpIHt2aWV3UG9zLngvPXZpZXdQb3Muejt2aWV3UG9zLnkvPXZpZXdQb3Muejt2aWV3UG9zLno9MS4wO31cbmdsX1Bvc2l0aW9uPXByb2plY3Rpb24qdmVjNCh2aWV3UG9zK3dvcmxkUG9zLnh5eiwxLjApOyB9IGVsc2Uge3ZlYzMgdmlld1Bvcz0odmlldypwYXJlbnRXb3JsZCp3b3JsZFBvcykueHl6OyBcbmdsX1Bvc2l0aW9uPXByb2plY3Rpb24qdmVjNCh2aWV3UG9zLDEuMCk7IH1cbmF0bGFzVVY9dmVjMih1dnMueCtvZmZzZXRzLngqdXZzLnosdXZzLnkrKDEuMC1vZmZzZXRzLnkpKnV2cy53KTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1zZGZWZXJ0ZXhTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9