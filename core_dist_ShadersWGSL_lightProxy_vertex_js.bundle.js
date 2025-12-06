"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_lightProxy_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clusteredLightingFunctionsWGSL: () => (/* binding */ clusteredLightingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "clusteredLightingFunctions";
const shader = `struct ClusteredLight {vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
vLightDirection: vec4f,
vLightFalloff: vec4f,}
fn getClusteredLight(lightDataTexture: texture_2d<f32>,index: u32)->ClusteredLight {return ClusteredLight(
textureLoad(lightDataTexture,vec2u(0,index),0),
textureLoad(lightDataTexture,vec2u(1,index),0),
textureLoad(lightDataTexture,vec2u(2,index),0),
textureLoad(lightDataTexture,vec2u(3,index),0),
textureLoad(lightDataTexture,vec2u(4,index),0)
);}
fn getClusteredSliceIndex(sliceData: vec2f,viewDepth: f32)->i32 {return i32(log(viewDepth)*sliceData.x+sliceData.y);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const clusteredLightingFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/lightProxy.vertex.js":
/*!*****************************************************!*\
  !*** ../core/dist/ShadersWGSL/lightProxy.vertex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightProxyVertexShaderWGSL: () => (/* binding */ lightProxyVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _ShadersInclude_clusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/clusteredLightingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "lightProxyVertexShader";
const shader = `attribute position: vec3f;flat varying vOffset: u32;flat varying vMask: u32;
#include<sceneUboDeclaration>
var lightDataTexture: texture_2d<f32>;uniform tileMaskResolution: vec3f;uniform halfTileRes: vec2f;
#include<clusteredLightingFunctions>
@vertex
fn main(input: VertexInputs)->FragmentInputs {let light=getClusteredLight(lightDataTexture,vertexInputs.instanceIndex);let range=light.vLightFalloff.x;let viewPosition=scene.view*vec4f(light.vLightData.xyz,1);let viewPositionSq=viewPosition*viewPosition;let distSq=viewPositionSq.xy+viewPositionSq.z;let sinSq=(range*range)/distSq;let cosSq=max(1.0-sinSq,vec2f(0.01));let sinCos=vertexInputs.position.xy*sqrt(sinSq*cosSq);let rotatedX=mat2x2f(cosSq.x,-sinCos.x,sinCos.x,cosSq.x)*viewPosition.xz;let rotatedY=mat2x2f(cosSq.y,-sinCos.y,sinCos.y,cosSq.y)*viewPosition.yz;let projX=scene.projection*vec4f(rotatedX.x,0,rotatedX.y,1);let projY=scene.projection*vec4f(0,rotatedY.x,rotatedY.y,1);var projPosition=vec2f(projX.x/max(projX.w,0.01),projY.y/max(projY.w,0.01));projPosition=select(vertexInputs.position.xy,projPosition,cosSq>vec2(0.01));let halfTileRes=uniforms.tileMaskResolution.xy/2.0;var tilePosition=(projPosition+1.0)*halfTileRes;tilePosition=select(floor(tilePosition)-0.01,ceil(tilePosition)+0.01,vertexInputs.position.xy>vec2f(0));vertexOutputs.position=vec4f(tilePosition/halfTileRes-1.0,0,1);vertexOutputs.vOffset=vertexInputs.instanceIndex/CLUSTLIGHT_BATCH;vertexOutputs.vMask=1u<<(vertexInputs.instanceIndex % CLUSTLIGHT_BATCH);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const lightProxyVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX2xpZ2h0UHJveHlfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9saWdodFByb3h5LnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGBzdHJ1Y3QgQ2x1c3RlcmVkTGlnaHQge3ZMaWdodERhdGE6IHZlYzRmLFxudkxpZ2h0RGlmZnVzZTogdmVjNGYsXG52TGlnaHRTcGVjdWxhcjogdmVjNGYsXG52TGlnaHREaXJlY3Rpb246IHZlYzRmLFxudkxpZ2h0RmFsbG9mZjogdmVjNGYsfVxuZm4gZ2V0Q2x1c3RlcmVkTGlnaHQobGlnaHREYXRhVGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LGluZGV4OiB1MzIpLT5DbHVzdGVyZWRMaWdodCB7cmV0dXJuIENsdXN0ZXJlZExpZ2h0KFxudGV4dHVyZUxvYWQobGlnaHREYXRhVGV4dHVyZSx2ZWMydSgwLGluZGV4KSwwKSxcbnRleHR1cmVMb2FkKGxpZ2h0RGF0YVRleHR1cmUsdmVjMnUoMSxpbmRleCksMCksXG50ZXh0dXJlTG9hZChsaWdodERhdGFUZXh0dXJlLHZlYzJ1KDIsaW5kZXgpLDApLFxudGV4dHVyZUxvYWQobGlnaHREYXRhVGV4dHVyZSx2ZWMydSgzLGluZGV4KSwwKSxcbnRleHR1cmVMb2FkKGxpZ2h0RGF0YVRleHR1cmUsdmVjMnUoNCxpbmRleCksMClcbik7fVxuZm4gZ2V0Q2x1c3RlcmVkU2xpY2VJbmRleChzbGljZURhdGE6IHZlYzJmLHZpZXdEZXB0aDogZjMyKS0+aTMyIHtyZXR1cm4gaTMyKGxvZyh2aWV3RGVwdGgpKnNsaWNlRGF0YS54K3NsaWNlRGF0YS55KTt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0UHJveHlWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBhdHRyaWJ1dGUgcG9zaXRpb246IHZlYzNmO2ZsYXQgdmFyeWluZyB2T2Zmc2V0OiB1MzI7ZmxhdCB2YXJ5aW5nIHZNYXNrOiB1MzI7XG4jaW5jbHVkZTxzY2VuZVVib0RlY2xhcmF0aW9uPlxudmFyIGxpZ2h0RGF0YVRleHR1cmU6IHRleHR1cmVfMmQ8ZjMyPjt1bmlmb3JtIHRpbGVNYXNrUmVzb2x1dGlvbjogdmVjM2Y7dW5pZm9ybSBoYWxmVGlsZVJlczogdmVjMmY7XG4jaW5jbHVkZTxjbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9ucz5cbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQ6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtsZXQgbGlnaHQ9Z2V0Q2x1c3RlcmVkTGlnaHQobGlnaHREYXRhVGV4dHVyZSx2ZXJ0ZXhJbnB1dHMuaW5zdGFuY2VJbmRleCk7bGV0IHJhbmdlPWxpZ2h0LnZMaWdodEZhbGxvZmYueDtsZXQgdmlld1Bvc2l0aW9uPXNjZW5lLnZpZXcqdmVjNGYobGlnaHQudkxpZ2h0RGF0YS54eXosMSk7bGV0IHZpZXdQb3NpdGlvblNxPXZpZXdQb3NpdGlvbip2aWV3UG9zaXRpb247bGV0IGRpc3RTcT12aWV3UG9zaXRpb25TcS54eSt2aWV3UG9zaXRpb25TcS56O2xldCBzaW5TcT0ocmFuZ2UqcmFuZ2UpL2Rpc3RTcTtsZXQgY29zU3E9bWF4KDEuMC1zaW5TcSx2ZWMyZigwLjAxKSk7bGV0IHNpbkNvcz12ZXJ0ZXhJbnB1dHMucG9zaXRpb24ueHkqc3FydChzaW5TcSpjb3NTcSk7bGV0IHJvdGF0ZWRYPW1hdDJ4MmYoY29zU3EueCwtc2luQ29zLngsc2luQ29zLngsY29zU3EueCkqdmlld1Bvc2l0aW9uLnh6O2xldCByb3RhdGVkWT1tYXQyeDJmKGNvc1NxLnksLXNpbkNvcy55LHNpbkNvcy55LGNvc1NxLnkpKnZpZXdQb3NpdGlvbi55ejtsZXQgcHJvalg9c2NlbmUucHJvamVjdGlvbip2ZWM0Zihyb3RhdGVkWC54LDAscm90YXRlZFgueSwxKTtsZXQgcHJvalk9c2NlbmUucHJvamVjdGlvbip2ZWM0ZigwLHJvdGF0ZWRZLngscm90YXRlZFkueSwxKTt2YXIgcHJvalBvc2l0aW9uPXZlYzJmKHByb2pYLngvbWF4KHByb2pYLncsMC4wMSkscHJvalkueS9tYXgocHJvalkudywwLjAxKSk7cHJvalBvc2l0aW9uPXNlbGVjdCh2ZXJ0ZXhJbnB1dHMucG9zaXRpb24ueHkscHJvalBvc2l0aW9uLGNvc1NxPnZlYzIoMC4wMSkpO2xldCBoYWxmVGlsZVJlcz11bmlmb3Jtcy50aWxlTWFza1Jlc29sdXRpb24ueHkvMi4wO3ZhciB0aWxlUG9zaXRpb249KHByb2pQb3NpdGlvbisxLjApKmhhbGZUaWxlUmVzO3RpbGVQb3NpdGlvbj1zZWxlY3QoZmxvb3IodGlsZVBvc2l0aW9uKS0wLjAxLGNlaWwodGlsZVBvc2l0aW9uKSswLjAxLHZlcnRleElucHV0cy5wb3NpdGlvbi54eT52ZWMyZigwKSk7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj12ZWM0Zih0aWxlUG9zaXRpb24vaGFsZlRpbGVSZXMtMS4wLDAsMSk7dmVydGV4T3V0cHV0cy52T2Zmc2V0PXZlcnRleElucHV0cy5pbnN0YW5jZUluZGV4L0NMVVNUTElHSFRfQkFUQ0g7dmVydGV4T3V0cHV0cy52TWFzaz0xdTw8KHZlcnRleElucHV0cy5pbnN0YW5jZUluZGV4ICUgQ0xVU1RMSUdIVF9CQVRDSCk7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRQcm94eVZlcnRleFNoYWRlcldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9