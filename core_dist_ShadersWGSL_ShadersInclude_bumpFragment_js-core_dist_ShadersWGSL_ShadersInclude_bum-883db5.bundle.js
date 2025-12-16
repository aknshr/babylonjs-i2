"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_bumpFragment_js-core_dist_ShadersWGSL_ShadersInclude_bum-883db5"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragment.js":
/*!***************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bumpFragment.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentWGSL: () => (/* binding */ bumpFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpFragment";
const shader = `var uvOffset: vec2f= vec2f(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
var normalScale: f32=1.0;
#elif defined(BUMP)
var normalScale: f32=uniforms.vBumpInfos.y;
#else
var normalScale: f32=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#elif defined(BUMP)
var TBNUV: vec2f=select(-fragmentInputs.vBumpUV,fragmentInputs.vBumpUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV,uniforms.vTangentSpaceParams);
#else
var TBNUV: vec2f=select(-fragmentInputs.vDetailUV,fragmentInputs.vDetailUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#else
var TBNUV: vec2f=select( -fragmentInputs.vMainUV1,fragmentInputs.vMainUV1,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#endif
#ifdef PARALLAX
var invTBN: mat3x3f=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,fragmentInputs.vBumpUV,uniforms.vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,uniforms.vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
var detailColor: vec4f=textureSample(detailSampler,detailSamplerSampler,fragmentInputs.vDetailUV+uvOffset);var detailNormalRG: vec2f=detailColor.wy*2.0-1.0;var detailNormalB: f32=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));var detailNormal: vec3f= vec3f(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).xyz *2.0-1.0);normalW=normalize(mat3x3f(uniforms.normalMatrix[0].xyz,uniforms.normalMatrix[1].xyz,uniforms.normalMatrix[2].xyz)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV+uvOffset).xyz,uniforms.vBumpInfos.y);
#else
var bumpNormal: vec3f=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);var blendedNormal: vec3f=normalize( vec3f(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);bumpNormal+= vec3f(0.0,0.0,1.0);detailNormal*= vec3f(-1.0,-1.0,1.0);var blendedNormal: vec3f=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,uniforms.vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);normalW=perturbNormalBase(TBN,detailNormal,uniforms.vDetailInfos.z);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bumpFragmentWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentFunctionsWGSL: () => (/* binding */ bumpFragmentFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "bumpFragmentFunctions";
const shader = `#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const minSamples: f32=4.;const maxSamples: f32=15.;const iMaxSamples: i32=15;fn parallaxOcclusion(vViewDirCoT: vec3f,vNormalCoT: vec3f,texCoord: vec2f,parallaxScale: f32)->vec2f {var parallaxLimit: f32=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;var vOffsetDir: vec2f=normalize(vViewDirCoT.xy);var vMaxOffset: vec2f=vOffsetDir*parallaxLimit;var numSamples: f32=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));var stepSize: f32=1.0/numSamples;var currRayHeight: f32=1.0;var vCurrOffset: vec2f= vec2f(0,0);var vLastOffset: vec2f= vec2f(0,0);var lastSampledHeight: f32=1.0;var currSampledHeight: f32=1.0;var keepWorking: bool=true;for (var i: i32=0; i<iMaxSamples; i++)
{currSampledHeight=textureSample(bumpSampler,bumpSamplerSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{var delta1: f32=currSampledHeight-currRayHeight;var delta2: f32=(currRayHeight+stepSize)-lastSampledHeight;var ratio: f32=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
fn parallaxOffset(viewDir: vec3f,heightScale: f32)->vec2f
{var height: f32=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).w;var texCoordOffset: vec2f=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bumpFragmentFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js":
/*!****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentMainFunctionsWGSL: () => (/* binding */ bumpFragmentMainFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpFragmentMainFunctions";
const shader = `#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform normalMatrix: mat4x4f;fn toNormalMatrix(m: mat4x4f)->mat4x4f
{var a00=m[0][0];var a01=m[0][1];var a02=m[0][2];var a03=m[0][3];var a10=m[1][0];var a11=m[1][1];var a12=m[1][2];var a13=m[1][3];var a20=m[2][0]; 
var a21=m[2][1];var a22=m[2][2];var a23=m[2][3];var a30=m[3][0]; 
var a31=m[3][1];var a32=m[3][2];var a33=m[3][3];var b00=a00*a11-a01*a10;var b01=a00*a12-a02*a10;var b02=a00*a13-a03*a10;var b03=a01*a12-a02*a11;var b04=a01*a13-a03*a11;var b05=a02*a13-a03*a12;var b06=a20*a31-a21*a30;var b07=a20*a32-a22*a30;var b08=a20*a33-a23*a30;var b09=a21*a32-a22*a31;var b10=a21*a33-a23*a31;var b11=a22*a33-a23*a32;var det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;var mi=mat4x4<f32>(
(a11*b11-a12*b10+a13*b09)/det,
(a02*b10-a01*b11-a03*b09)/det,
(a31*b05-a32*b04+a33*b03)/det,
(a22*b04-a21*b05-a23*b03)/det,
(a12*b08-a10*b11-a13*b07)/det,
(a00*b11-a02*b08+a03*b07)/det,
(a32*b02-a30*b05-a33*b01)/det,
(a20*b05-a22*b02+a23*b01)/det,
(a10*b10-a11*b08+a13*b06)/det,
(a01*b08-a00*b10-a03*b06)/det,
(a30*b04-a31*b02+a33*b00)/det,
(a21*b02-a20*b04-a23*b00)/det,
(a11*b07-a10*b09-a12*b06)/det,
(a00*b09-a01*b07+a02*b06)/det,
(a31*b01-a30*b03-a32*b00)/det,
(a20*b03-a21*b01+a22*b00)/det);return mat4x4<f32>(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
fn perturbNormalBase(cotangentFrame: mat3x3f,normal: vec3f,scale: f32)->vec3f
{var output=normal;
#ifdef NORMALXYSCALE
output=normalize(output* vec3f(scale,scale,1.0));
#endif
return normalize(cotangentFrame*output);}
fn perturbNormal(cotangentFrame: mat3x3f,textureSample: vec3f,scale: f32)->vec3f
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
fn cotangent_frame(normal: vec3f,p: vec3f,uv: vec2f,tangentSpaceParams: vec2f)->mat3x3f
{var dp1: vec3f=dpdx(p);var dp2: vec3f=dpdy(p);var duv1: vec2f=dpdx(uv);var duv2: vec2f=dpdy(uv);var dp2perp: vec3f=cross(dp2,normal);var dp1perp: vec3f=cross(normal,dp1);var tangent: vec3f=dp2perp*duv1.x+dp1perp*duv2.x;var bitangent: vec3f=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;var det: f32=max(dot(tangent,tangent),dot(bitangent,bitangent));var invmax: f32=select(inverseSqrt(det),0.0,det==0.0);return mat3x3f(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const bumpFragmentMainFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/decalFragment.js":
/*!****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/decalFragment.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decalFragmentWGSL: () => (/* binding */ decalFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "decalFragment";
const shader = `#ifdef DECAL
var decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;
#ifdef GAMMADECAL
decalTempColor=toLinearSpaceVec3(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalTempAlpha=decalColor.a*decalColor.a;
#endif
surfaceAlbedo=mix(surfaceAlbedo.rgb,decalTempColor,decalTempAlpha);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const decalFragmentWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2J1bXBGcmFnbWVudF9qcy1jb3JlX2Rpc3RfU2hhZGVyc1dHU0xfU2hhZGVyc0luY2x1ZGVfYnVtLTg4M2RiNS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudEZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudE1haW5GdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9kZWNhbEZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wRnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgdXZPZmZzZXQ6IHZlYzJmPSB2ZWMyZigwLjAsMC4wKTtcbiNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoREVUQUlMKVxuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbnZhciBub3JtYWxTY2FsZTogZjMyPTEuMDtcbiNlbGlmIGRlZmluZWQoQlVNUClcbnZhciBub3JtYWxTY2FsZTogZjMyPXVuaWZvcm1zLnZCdW1wSW5mb3MueTtcbiNlbHNlXG52YXIgbm9ybWFsU2NhbGU6IGYzMj0xLjA7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmFyIFRCTjogbWF0M3gzZj1tYXQzeDM8ZjMyPihpbnB1dC52VEJOMCxpbnB1dC52VEJOMSxpbnB1dC52VEJOMik7IFxuI2VsaWYgZGVmaW5lZChCVU1QKVxudmFyIFRCTlVWOiB2ZWMyZj1zZWxlY3QoLWZyYWdtZW50SW5wdXRzLnZCdW1wVVYsZnJhZ21lbnRJbnB1dHMudkJ1bXBVVixmcmFnbWVudElucHV0cy5mcm9udEZhY2luZyk7dmFyIFRCTjogbWF0M3gzZj1jb3RhbmdlbnRfZnJhbWUobm9ybWFsVypub3JtYWxTY2FsZSxpbnB1dC52UG9zaXRpb25XLFRCTlVWLHVuaWZvcm1zLnZUYW5nZW50U3BhY2VQYXJhbXMpO1xuI2Vsc2VcbnZhciBUQk5VVjogdmVjMmY9c2VsZWN0KC1mcmFnbWVudElucHV0cy52RGV0YWlsVVYsZnJhZ21lbnRJbnB1dHMudkRldGFpbFVWLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTt2YXIgVEJOOiBtYXQzeDNmPWNvdGFuZ2VudF9mcmFtZShub3JtYWxXKm5vcm1hbFNjYWxlLGlucHV0LnZQb3NpdGlvblcsVEJOVVYsIHZlYzJmKDEuLDEuKSk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoQU5JU09UUk9QSUMpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZhciBUQk46IG1hdDN4M2Y9bWF0M3gzPGYzMj4oaW5wdXQudlRCTjAsaW5wdXQudlRCTjEsaW5wdXQudlRCTjIpOyBcbiNlbHNlXG52YXIgVEJOVVY6IHZlYzJmPXNlbGVjdCggLWZyYWdtZW50SW5wdXRzLnZNYWluVVYxLGZyYWdtZW50SW5wdXRzLnZNYWluVVYxLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTt2YXIgVEJOOiBtYXQzeDNmPWNvdGFuZ2VudF9mcmFtZShub3JtYWxXLGlucHV0LnZQb3NpdGlvblcsVEJOVVYsIHZlYzJmKDEuLDEuKSk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBBUkFMTEFYXG52YXIgaW52VEJOOiBtYXQzeDNmPXRyYW5zcG9zZU1hdDMoVEJOKTtcbiNpZmRlZiBQQVJBTExBWE9DQ0xVU0lPTlxudXZPZmZzZXQ9cGFyYWxsYXhPY2NsdXNpb24oaW52VEJOKi12aWV3RGlyZWN0aW9uVyxpbnZUQk4qbm9ybWFsVyxmcmFnbWVudElucHV0cy52QnVtcFVWLHVuaWZvcm1zLnZCdW1wSW5mb3Mueik7XG4jZWxzZVxudXZPZmZzZXQ9cGFyYWxsYXhPZmZzZXQoaW52VEJOKnZpZXdEaXJlY3Rpb25XLHVuaWZvcm1zLnZCdW1wSW5mb3Mueik7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxudmFyIGRldGFpbENvbG9yOiB2ZWM0Zj10ZXh0dXJlU2FtcGxlKGRldGFpbFNhbXBsZXIsZGV0YWlsU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkRldGFpbFVWK3V2T2Zmc2V0KTt2YXIgZGV0YWlsTm9ybWFsUkc6IHZlYzJmPWRldGFpbENvbG9yLnd5KjIuMC0xLjA7dmFyIGRldGFpbE5vcm1hbEI6IGYzMj1zcXJ0KDEuLXNhdHVyYXRlKGRvdChkZXRhaWxOb3JtYWxSRyxkZXRhaWxOb3JtYWxSRykpKTt2YXIgZGV0YWlsTm9ybWFsOiB2ZWMzZj0gdmVjM2YoZGV0YWlsTm9ybWFsUkcsZGV0YWlsTm9ybWFsQik7XG4jZW5kaWZcbiNpZmRlZiBCVU1QXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CVU1QX0ZSQUdNRU5UXG5ub3JtYWxXPW5vcm1hbGl6ZSh0ZXh0dXJlU2FtcGxlKGJ1bXBTYW1wbGVyLGJ1bXBTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QnVtcFVWKS54eXogKjIuMC0xLjApO25vcm1hbFc9bm9ybWFsaXplKG1hdDN4M2YodW5pZm9ybXMubm9ybWFsTWF0cml4WzBdLnh5eix1bmlmb3Jtcy5ub3JtYWxNYXRyaXhbMV0ueHl6LHVuaWZvcm1zLm5vcm1hbE1hdHJpeFsyXS54eXopKm5vcm1hbFcpO1xuI2VsaWYgIWRlZmluZWQoREVUQUlMKVxubm9ybWFsVz1wZXJ0dXJiTm9ybWFsKFRCTix0ZXh0dXJlU2FtcGxlKGJ1bXBTYW1wbGVyLGJ1bXBTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QnVtcFVWK3V2T2Zmc2V0KS54eXosdW5pZm9ybXMudkJ1bXBJbmZvcy55KTtcbiNlbHNlXG52YXIgYnVtcE5vcm1hbDogdmVjM2Y9dGV4dHVyZVNhbXBsZShidW1wU2FtcGxlcixidW1wU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJ1bXBVVit1dk9mZnNldCkueHl6KjIuMC0xLjA7XG4jaWYgREVUQUlMX05PUk1BTEJMRU5ETUVUSE9EPT0wIFxuZGV0YWlsTm9ybWFsPXZlYzNmKGRldGFpbE5vcm1hbC54eSp1bmlmb3Jtcy52RGV0YWlsSW5mb3MueixkZXRhaWxOb3JtYWwueik7dmFyIGJsZW5kZWROb3JtYWw6IHZlYzNmPW5vcm1hbGl6ZSggdmVjM2YoYnVtcE5vcm1hbC54eStkZXRhaWxOb3JtYWwueHksYnVtcE5vcm1hbC56KmRldGFpbE5vcm1hbC56KSk7XG4jZWxpZiBERVRBSUxfTk9STUFMQkxFTkRNRVRIT0Q9PTEgXG5kZXRhaWxOb3JtYWw9dmVjM2YoZGV0YWlsTm9ybWFsLnh5KnVuaWZvcm1zLnZEZXRhaWxJbmZvcy56LGRldGFpbE5vcm1hbC56KTtidW1wTm9ybWFsKz0gdmVjM2YoMC4wLDAuMCwxLjApO2RldGFpbE5vcm1hbCo9IHZlYzNmKC0xLjAsLTEuMCwxLjApO3ZhciBibGVuZGVkTm9ybWFsOiB2ZWMzZj1idW1wTm9ybWFsKmRvdChidW1wTm9ybWFsLGRldGFpbE5vcm1hbCkvYnVtcE5vcm1hbC56LWRldGFpbE5vcm1hbDtcbiNlbmRpZlxubm9ybWFsVz1wZXJ0dXJiTm9ybWFsQmFzZShUQk4sYmxlbmRlZE5vcm1hbCx1bmlmb3Jtcy52QnVtcEluZm9zLnkpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKERFVEFJTClcbmRldGFpbE5vcm1hbD12ZWMzZihkZXRhaWxOb3JtYWwueHkqdW5pZm9ybXMudkRldGFpbEluZm9zLnosZGV0YWlsTm9ybWFsLnopO25vcm1hbFc9cGVydHVyYk5vcm1hbEJhc2UoVEJOLGRldGFpbE5vcm1hbCx1bmlmb3Jtcy52RGV0YWlsSW5mb3Mueik7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBidW1wRnJhZ21lbnRXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wRnJhZ21lbnRGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChCVU1QKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCVU1QLF9WQVJZSU5HTkFNRV8sQnVtcCxfU0FNUExFUk5BTUVfLGJ1bXApXG4jZW5kaWZcbiNpZiBkZWZpbmVkKERFVEFJTClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9TQU1QTEVSTkFNRV8sZGV0YWlsKVxuI2VuZGlmXG4jaWYgZGVmaW5lZChCVU1QKSAmJiBkZWZpbmVkKFBBUkFMTEFYKVxuY29uc3QgbWluU2FtcGxlczogZjMyPTQuO2NvbnN0IG1heFNhbXBsZXM6IGYzMj0xNS47Y29uc3QgaU1heFNhbXBsZXM6IGkzMj0xNTtmbiBwYXJhbGxheE9jY2x1c2lvbih2Vmlld0RpckNvVDogdmVjM2Ysdk5vcm1hbENvVDogdmVjM2YsdGV4Q29vcmQ6IHZlYzJmLHBhcmFsbGF4U2NhbGU6IGYzMiktPnZlYzJmIHt2YXIgcGFyYWxsYXhMaW1pdDogZjMyPWxlbmd0aCh2Vmlld0RpckNvVC54eSkvdlZpZXdEaXJDb1QuejtwYXJhbGxheExpbWl0Kj1wYXJhbGxheFNjYWxlO3ZhciB2T2Zmc2V0RGlyOiB2ZWMyZj1ub3JtYWxpemUodlZpZXdEaXJDb1QueHkpO3ZhciB2TWF4T2Zmc2V0OiB2ZWMyZj12T2Zmc2V0RGlyKnBhcmFsbGF4TGltaXQ7dmFyIG51bVNhbXBsZXM6IGYzMj1tYXhTYW1wbGVzKyhkb3QodlZpZXdEaXJDb1Qsdk5vcm1hbENvVCkqKG1pblNhbXBsZXMtbWF4U2FtcGxlcykpO3ZhciBzdGVwU2l6ZTogZjMyPTEuMC9udW1TYW1wbGVzO3ZhciBjdXJyUmF5SGVpZ2h0OiBmMzI9MS4wO3ZhciB2Q3Vyck9mZnNldDogdmVjMmY9IHZlYzJmKDAsMCk7dmFyIHZMYXN0T2Zmc2V0OiB2ZWMyZj0gdmVjMmYoMCwwKTt2YXIgbGFzdFNhbXBsZWRIZWlnaHQ6IGYzMj0xLjA7dmFyIGN1cnJTYW1wbGVkSGVpZ2h0OiBmMzI9MS4wO3ZhciBrZWVwV29ya2luZzogYm9vbD10cnVlO2ZvciAodmFyIGk6IGkzMj0wOyBpPGlNYXhTYW1wbGVzOyBpKyspXG57Y3VyclNhbXBsZWRIZWlnaHQ9dGV4dHVyZVNhbXBsZShidW1wU2FtcGxlcixidW1wU2FtcGxlclNhbXBsZXIsdGV4Q29vcmQrdkN1cnJPZmZzZXQpLnc7aWYgKCFrZWVwV29ya2luZylcbnt9XG5lbHNlIGlmIChjdXJyU2FtcGxlZEhlaWdodD5jdXJyUmF5SGVpZ2h0KVxue3ZhciBkZWx0YTE6IGYzMj1jdXJyU2FtcGxlZEhlaWdodC1jdXJyUmF5SGVpZ2h0O3ZhciBkZWx0YTI6IGYzMj0oY3VyclJheUhlaWdodCtzdGVwU2l6ZSktbGFzdFNhbXBsZWRIZWlnaHQ7dmFyIHJhdGlvOiBmMzI9ZGVsdGExLyhkZWx0YTErZGVsdGEyKTt2Q3Vyck9mZnNldD0ocmF0aW8pKiB2TGFzdE9mZnNldCsoMS4wLXJhdGlvKSp2Q3Vyck9mZnNldDtrZWVwV29ya2luZz1mYWxzZTt9XG5lbHNlXG57Y3VyclJheUhlaWdodC09c3RlcFNpemU7dkxhc3RPZmZzZXQ9dkN1cnJPZmZzZXQ7XG4jaWZkZWYgUEFSQUxMQVhfUkhTXG52Q3Vyck9mZnNldC09c3RlcFNpemUqdk1heE9mZnNldDtcbiNlbHNlXG52Q3Vyck9mZnNldCs9c3RlcFNpemUqdk1heE9mZnNldDtcbiNlbmRpZlxubGFzdFNhbXBsZWRIZWlnaHQ9Y3VyclNhbXBsZWRIZWlnaHQ7fX1cbnJldHVybiB2Q3Vyck9mZnNldDt9XG5mbiBwYXJhbGxheE9mZnNldCh2aWV3RGlyOiB2ZWMzZixoZWlnaHRTY2FsZTogZjMyKS0+dmVjMmZcbnt2YXIgaGVpZ2h0OiBmMzI9dGV4dHVyZVNhbXBsZShidW1wU2FtcGxlcixidW1wU2FtcGxlclNhbXBsZXIsZnJhZ21lbnRJbnB1dHMudkJ1bXBVVikudzt2YXIgdGV4Q29vcmRPZmZzZXQ6IHZlYzJmPWhlaWdodFNjYWxlKnZpZXdEaXIueHkqaGVpZ2h0O1xuI2lmZGVmIFBBUkFMTEFYX1JIU1xucmV0dXJuIHRleENvb3JkT2Zmc2V0O1xuI2Vsc2VcbnJldHVybiAtdGV4Q29vcmRPZmZzZXQ7XG4jZW5kaWZcbn1cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBGcmFnbWVudEZ1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJ1bXBGcmFnbWVudE1haW5GdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChCVU1QKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKERFVEFJTClcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKSBcbnZhcnlpbmcgdlRCTjA6IHZlYzNmO3ZhcnlpbmcgdlRCTjE6IHZlYzNmO3ZhcnlpbmcgdlRCTjI6IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG51bmlmb3JtIG5vcm1hbE1hdHJpeDogbWF0NHg0ZjtmbiB0b05vcm1hbE1hdHJpeChtOiBtYXQ0eDRmKS0+bWF0NHg0Zlxue3ZhciBhMDA9bVswXVswXTt2YXIgYTAxPW1bMF1bMV07dmFyIGEwMj1tWzBdWzJdO3ZhciBhMDM9bVswXVszXTt2YXIgYTEwPW1bMV1bMF07dmFyIGExMT1tWzFdWzFdO3ZhciBhMTI9bVsxXVsyXTt2YXIgYTEzPW1bMV1bM107dmFyIGEyMD1tWzJdWzBdOyBcbnZhciBhMjE9bVsyXVsxXTt2YXIgYTIyPW1bMl1bMl07dmFyIGEyMz1tWzJdWzNdO3ZhciBhMzA9bVszXVswXTsgXG52YXIgYTMxPW1bM11bMV07dmFyIGEzMj1tWzNdWzJdO3ZhciBhMzM9bVszXVszXTt2YXIgYjAwPWEwMCphMTEtYTAxKmExMDt2YXIgYjAxPWEwMCphMTItYTAyKmExMDt2YXIgYjAyPWEwMCphMTMtYTAzKmExMDt2YXIgYjAzPWEwMSphMTItYTAyKmExMTt2YXIgYjA0PWEwMSphMTMtYTAzKmExMTt2YXIgYjA1PWEwMiphMTMtYTAzKmExMjt2YXIgYjA2PWEyMCphMzEtYTIxKmEzMDt2YXIgYjA3PWEyMCphMzItYTIyKmEzMDt2YXIgYjA4PWEyMCphMzMtYTIzKmEzMDt2YXIgYjA5PWEyMSphMzItYTIyKmEzMTt2YXIgYjEwPWEyMSphMzMtYTIzKmEzMTt2YXIgYjExPWEyMiphMzMtYTIzKmEzMjt2YXIgZGV0PWIwMCpiMTEtYjAxKmIxMCtiMDIqYjA5K2IwMypiMDgtYjA0KmIwNytiMDUqYjA2O3ZhciBtaT1tYXQ0eDQ8ZjMyPihcbihhMTEqYjExLWExMipiMTArYTEzKmIwOSkvZGV0LFxuKGEwMipiMTAtYTAxKmIxMS1hMDMqYjA5KS9kZXQsXG4oYTMxKmIwNS1hMzIqYjA0K2EzMypiMDMpL2RldCxcbihhMjIqYjA0LWEyMSpiMDUtYTIzKmIwMykvZGV0LFxuKGExMipiMDgtYTEwKmIxMS1hMTMqYjA3KS9kZXQsXG4oYTAwKmIxMS1hMDIqYjA4K2EwMypiMDcpL2RldCxcbihhMzIqYjAyLWEzMCpiMDUtYTMzKmIwMSkvZGV0LFxuKGEyMCpiMDUtYTIyKmIwMithMjMqYjAxKS9kZXQsXG4oYTEwKmIxMC1hMTEqYjA4K2ExMypiMDYpL2RldCxcbihhMDEqYjA4LWEwMCpiMTAtYTAzKmIwNikvZGV0LFxuKGEzMCpiMDQtYTMxKmIwMithMzMqYjAwKS9kZXQsXG4oYTIxKmIwMi1hMjAqYjA0LWEyMypiMDApL2RldCxcbihhMTEqYjA3LWExMCpiMDktYTEyKmIwNikvZGV0LFxuKGEwMCpiMDktYTAxKmIwNythMDIqYjA2KS9kZXQsXG4oYTMxKmIwMS1hMzAqYjAzLWEzMipiMDApL2RldCxcbihhMjAqYjAzLWEyMSpiMDErYTIyKmIwMCkvZGV0KTtyZXR1cm4gbWF0NHg0PGYzMj4obWlbMF1bMF0sbWlbMV1bMF0sbWlbMl1bMF0sbWlbM11bMF0sXG5taVswXVsxXSxtaVsxXVsxXSxtaVsyXVsxXSxtaVszXVsxXSxcbm1pWzBdWzJdLG1pWzFdWzJdLG1pWzJdWzJdLG1pWzNdWzJdLFxubWlbMF1bM10sbWlbMV1bM10sbWlbMl1bM10sbWlbM11bM10pO31cbiNlbmRpZlxuZm4gcGVydHVyYk5vcm1hbEJhc2UoY290YW5nZW50RnJhbWU6IG1hdDN4M2Ysbm9ybWFsOiB2ZWMzZixzY2FsZTogZjMyKS0+dmVjM2Zcbnt2YXIgb3V0cHV0PW5vcm1hbDtcbiNpZmRlZiBOT1JNQUxYWVNDQUxFXG5vdXRwdXQ9bm9ybWFsaXplKG91dHB1dCogdmVjM2Yoc2NhbGUsc2NhbGUsMS4wKSk7XG4jZW5kaWZcbnJldHVybiBub3JtYWxpemUoY290YW5nZW50RnJhbWUqb3V0cHV0KTt9XG5mbiBwZXJ0dXJiTm9ybWFsKGNvdGFuZ2VudEZyYW1lOiBtYXQzeDNmLHRleHR1cmVTYW1wbGU6IHZlYzNmLHNjYWxlOiBmMzIpLT52ZWMzZlxue3JldHVybiBwZXJ0dXJiTm9ybWFsQmFzZShjb3RhbmdlbnRGcmFtZSx0ZXh0dXJlU2FtcGxlKjIuMC0xLjAsc2NhbGUpO31cbmZuIGNvdGFuZ2VudF9mcmFtZShub3JtYWw6IHZlYzNmLHA6IHZlYzNmLHV2OiB2ZWMyZix0YW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmKS0+bWF0M3gzZlxue3ZhciBkcDE6IHZlYzNmPWRwZHgocCk7dmFyIGRwMjogdmVjM2Y9ZHBkeShwKTt2YXIgZHV2MTogdmVjMmY9ZHBkeCh1dik7dmFyIGR1djI6IHZlYzJmPWRwZHkodXYpO3ZhciBkcDJwZXJwOiB2ZWMzZj1jcm9zcyhkcDIsbm9ybWFsKTt2YXIgZHAxcGVycDogdmVjM2Y9Y3Jvc3Mobm9ybWFsLGRwMSk7dmFyIHRhbmdlbnQ6IHZlYzNmPWRwMnBlcnAqZHV2MS54K2RwMXBlcnAqZHV2Mi54O3ZhciBiaXRhbmdlbnQ6IHZlYzNmPWRwMnBlcnAqZHV2MS55K2RwMXBlcnAqZHV2Mi55O3RhbmdlbnQqPXRhbmdlbnRTcGFjZVBhcmFtcy54O2JpdGFuZ2VudCo9dGFuZ2VudFNwYWNlUGFyYW1zLnk7dmFyIGRldDogZjMyPW1heChkb3QodGFuZ2VudCx0YW5nZW50KSxkb3QoYml0YW5nZW50LGJpdGFuZ2VudCkpO3ZhciBpbnZtYXg6IGYzMj1zZWxlY3QoaW52ZXJzZVNxcnQoZGV0KSwwLjAsZGV0PT0wLjApO3JldHVybiBtYXQzeDNmKHRhbmdlbnQqaW52bWF4LGJpdGFuZ2VudCppbnZtYXgsbm9ybWFsKTt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBidW1wRnJhZ21lbnRNYWluRnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZGVjYWxGcmFnbWVudFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBERUNBTFxudmFyIGRlY2FsVGVtcENvbG9yPWRlY2FsQ29sb3IucmdiO3ZhciBkZWNhbFRlbXBBbHBoYT1kZWNhbENvbG9yLmE7XG4jaWZkZWYgR0FNTUFERUNBTFxuZGVjYWxUZW1wQ29sb3I9dG9MaW5lYXJTcGFjZVZlYzMoZGVjYWxDb2xvci5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgREVDQUxfU01PT1RIQUxQSEFcbmRlY2FsVGVtcEFscGhhPWRlY2FsQ29sb3IuYSpkZWNhbENvbG9yLmE7XG4jZW5kaWZcbnN1cmZhY2VBbGJlZG89bWl4KHN1cmZhY2VBbGJlZG8ucmdiLGRlY2FsVGVtcENvbG9yLGRlY2FsVGVtcEFscGhhKTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGRlY2FsRnJhZ21lbnRXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==