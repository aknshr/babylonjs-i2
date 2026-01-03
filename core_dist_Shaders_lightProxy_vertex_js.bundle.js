"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_lightProxy_vertex_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clusteredLightingFunctions: () => (/* binding */ clusteredLightingFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "clusteredLightingFunctions";
const shader = `struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};
#define inline
ClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(
texelFetch(lightDataTexture,ivec2(0,index),0),
texelFetch(lightDataTexture,ivec2(1,index),0),
texelFetch(lightDataTexture,ivec2(2,index),0),
texelFetch(lightDataTexture,ivec2(3,index),0),
texelFetch(lightDataTexture,ivec2(4,index),0)
);}
int getClusteredSliceIndex(vec2 sliceData,float viewDepth) {return int(log(viewDepth)*sliceData.x+sliceData.y);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const clusteredLightingFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/lightProxy.vertex.js":
/*!*************************************************!*\
  !*** ../core/dist/Shaders/lightProxy.vertex.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightProxyVertexShader: () => (/* binding */ lightProxyVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_sceneVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/sceneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _ShadersInclude_clusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/clusteredLightingFunctions */ "../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.




const name = "lightProxyVertexShader";
const shader = `attribute vec3 position;flat varying vec2 vLimits;flat varying highp uint vMask;
#include<__decl__sceneVertex>
uniform sampler2D lightDataTexture;uniform vec3 tileMaskResolution;
#include<clusteredLightingFunctions>
void main(void) {ClusteredLight light=getClusteredLight(lightDataTexture,gl_InstanceID);float range=light.vLightFalloff.x;vec4 viewPosition=view*vec4(light.vLightData.xyz,1);vec4 viewPositionSq=viewPosition*viewPosition;vec2 distSq=viewPositionSq.xy+viewPositionSq.z;vec2 sinSq=(range*range)/distSq;vec2 cosSq=max(1.0-sinSq,0.01);vec2 sinCos=position.xy*sqrt(sinSq*cosSq);
#ifdef RIGHT_HANDED
vec2 rotatedX=mat2(cosSq.x,sinCos.x,-sinCos.x,cosSq.x)*viewPosition.xz;vec2 rotatedY=mat2(cosSq.y,sinCos.y,-sinCos.y,cosSq.y)*viewPosition.yz;
#else
vec2 rotatedX=mat2(cosSq.x,-sinCos.x,sinCos.x,cosSq.x)*viewPosition.xz;vec2 rotatedY=mat2(cosSq.y,-sinCos.y,sinCos.y,cosSq.y)*viewPosition.yz;
#endif
vec4 projX=projection*vec4(rotatedX.x,0,rotatedX.y,1);vec4 projY=projection*vec4(0,rotatedY.x,rotatedY.y,1);vec2 projPosition=vec2(projX.x/max(projX.w,0.01),projY.y/max(projY.w,0.01));projPosition=mix(position.xy,projPosition,greaterThan(cosSq,vec2(0.01)));vec2 halfTileRes=tileMaskResolution.xy/2.0;vec2 tilePosition=(projPosition+1.0)*halfTileRes;tilePosition=mix(floor(tilePosition)-0.01,ceil(tilePosition)+0.01,greaterThan(position.xy,vec2(0)));float offset=float(gl_InstanceID/CLUSTLIGHT_BATCH)*tileMaskResolution.y;tilePosition.y=(tilePosition.y+offset)/tileMaskResolution.z;gl_Position=vec4(tilePosition/halfTileRes-1.0,0,1);vLimits=vec2(offset,offset+tileMaskResolution.y);vMask=1u<<(gl_InstanceID % CLUSTLIGHT_BATCH);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const lightProxyVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfbGlnaHRQcm94eV92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL2xpZ2h0UHJveHkudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJjbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBDbHVzdGVyZWRMaWdodCB7dmVjNCB2TGlnaHREYXRhO3ZlYzQgdkxpZ2h0RGlmZnVzZTt2ZWM0IHZMaWdodFNwZWN1bGFyO3ZlYzQgdkxpZ2h0RGlyZWN0aW9uO3ZlYzQgdkxpZ2h0RmFsbG9mZjt9O1xuI2RlZmluZSBpbmxpbmVcbkNsdXN0ZXJlZExpZ2h0IGdldENsdXN0ZXJlZExpZ2h0KHNhbXBsZXIyRCBsaWdodERhdGFUZXh0dXJlLGludCBpbmRleCkge3JldHVybiBDbHVzdGVyZWRMaWdodChcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigwLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigxLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigyLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigzLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMig0LGluZGV4KSwwKVxuKTt9XG5pbnQgZ2V0Q2x1c3RlcmVkU2xpY2VJbmRleCh2ZWMyIHNsaWNlRGF0YSxmbG9hdCB2aWV3RGVwdGgpIHtyZXR1cm4gaW50KGxvZyh2aWV3RGVwdGgpKnNsaWNlRGF0YS54K3NsaWNlRGF0YS55KTt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zY2VuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnNcIjtcblxuY29uc3QgbmFtZSA9IFwibGlnaHRQcm94eVZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO2ZsYXQgdmFyeWluZyB2ZWMyIHZMaW1pdHM7ZmxhdCB2YXJ5aW5nIGhpZ2hwIHVpbnQgdk1hc2s7XG4jaW5jbHVkZTxfX2RlY2xfX3NjZW5lVmVydGV4PlxudW5pZm9ybSBzYW1wbGVyMkQgbGlnaHREYXRhVGV4dHVyZTt1bmlmb3JtIHZlYzMgdGlsZU1hc2tSZXNvbHV0aW9uO1xuI2luY2x1ZGU8Y2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnM+XG52b2lkIG1haW4odm9pZCkge0NsdXN0ZXJlZExpZ2h0IGxpZ2h0PWdldENsdXN0ZXJlZExpZ2h0KGxpZ2h0RGF0YVRleHR1cmUsZ2xfSW5zdGFuY2VJRCk7ZmxvYXQgcmFuZ2U9bGlnaHQudkxpZ2h0RmFsbG9mZi54O3ZlYzQgdmlld1Bvc2l0aW9uPXZpZXcqdmVjNChsaWdodC52TGlnaHREYXRhLnh5eiwxKTt2ZWM0IHZpZXdQb3NpdGlvblNxPXZpZXdQb3NpdGlvbip2aWV3UG9zaXRpb247dmVjMiBkaXN0U3E9dmlld1Bvc2l0aW9uU3EueHkrdmlld1Bvc2l0aW9uU3Euejt2ZWMyIHNpblNxPShyYW5nZSpyYW5nZSkvZGlzdFNxO3ZlYzIgY29zU3E9bWF4KDEuMC1zaW5TcSwwLjAxKTt2ZWMyIHNpbkNvcz1wb3NpdGlvbi54eSpzcXJ0KHNpblNxKmNvc1NxKTtcbiNpZmRlZiBSSUdIVF9IQU5ERURcbnZlYzIgcm90YXRlZFg9bWF0Mihjb3NTcS54LHNpbkNvcy54LC1zaW5Db3MueCxjb3NTcS54KSp2aWV3UG9zaXRpb24ueHo7dmVjMiByb3RhdGVkWT1tYXQyKGNvc1NxLnksc2luQ29zLnksLXNpbkNvcy55LGNvc1NxLnkpKnZpZXdQb3NpdGlvbi55ejtcbiNlbHNlXG52ZWMyIHJvdGF0ZWRYPW1hdDIoY29zU3EueCwtc2luQ29zLngsc2luQ29zLngsY29zU3EueCkqdmlld1Bvc2l0aW9uLnh6O3ZlYzIgcm90YXRlZFk9bWF0Mihjb3NTcS55LC1zaW5Db3MueSxzaW5Db3MueSxjb3NTcS55KSp2aWV3UG9zaXRpb24ueXo7XG4jZW5kaWZcbnZlYzQgcHJvalg9cHJvamVjdGlvbip2ZWM0KHJvdGF0ZWRYLngsMCxyb3RhdGVkWC55LDEpO3ZlYzQgcHJvalk9cHJvamVjdGlvbip2ZWM0KDAscm90YXRlZFkueCxyb3RhdGVkWS55LDEpO3ZlYzIgcHJvalBvc2l0aW9uPXZlYzIocHJvalgueC9tYXgocHJvalgudywwLjAxKSxwcm9qWS55L21heChwcm9qWS53LDAuMDEpKTtwcm9qUG9zaXRpb249bWl4KHBvc2l0aW9uLnh5LHByb2pQb3NpdGlvbixncmVhdGVyVGhhbihjb3NTcSx2ZWMyKDAuMDEpKSk7dmVjMiBoYWxmVGlsZVJlcz10aWxlTWFza1Jlc29sdXRpb24ueHkvMi4wO3ZlYzIgdGlsZVBvc2l0aW9uPShwcm9qUG9zaXRpb24rMS4wKSpoYWxmVGlsZVJlczt0aWxlUG9zaXRpb249bWl4KGZsb29yKHRpbGVQb3NpdGlvbiktMC4wMSxjZWlsKHRpbGVQb3NpdGlvbikrMC4wMSxncmVhdGVyVGhhbihwb3NpdGlvbi54eSx2ZWMyKDApKSk7ZmxvYXQgb2Zmc2V0PWZsb2F0KGdsX0luc3RhbmNlSUQvQ0xVU1RMSUdIVF9CQVRDSCkqdGlsZU1hc2tSZXNvbHV0aW9uLnk7dGlsZVBvc2l0aW9uLnk9KHRpbGVQb3NpdGlvbi55K29mZnNldCkvdGlsZU1hc2tSZXNvbHV0aW9uLno7Z2xfUG9zaXRpb249dmVjNCh0aWxlUG9zaXRpb24vaGFsZlRpbGVSZXMtMS4wLDAsMSk7dkxpbWl0cz12ZWMyKG9mZnNldCxvZmZzZXQrdGlsZU1hc2tSZXNvbHV0aW9uLnkpO3ZNYXNrPTF1PDwoZ2xfSW5zdGFuY2VJRCAlIENMVVNUTElHSFRfQkFUQ0gpO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodFByb3h5VmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=