"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_bumpFragment_js-core_dist_ShadersWGSL_ShadersInclude_bum-bd5114"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2J1bXBGcmFnbWVudF9qcy1jb3JlX2Rpc3RfU2hhZGVyc1dHU0xfU2hhZGVyc0luY2x1ZGVfYnVtLWJkNTExNC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudEZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudE1haW5GdW5jdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJ1bXBGcmFnbWVudFwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciB1dk9mZnNldDogdmVjMmY9IHZlYzJmKDAuMCwwLjApO1xuI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChQQVJBTExBWCkgfHwgZGVmaW5lZChERVRBSUwpXG4jaWZkZWYgTk9STUFMWFlTQ0FMRVxudmFyIG5vcm1hbFNjYWxlOiBmMzI9MS4wO1xuI2VsaWYgZGVmaW5lZChCVU1QKVxudmFyIG5vcm1hbFNjYWxlOiBmMzI9dW5pZm9ybXMudkJ1bXBJbmZvcy55O1xuI2Vsc2VcbnZhciBub3JtYWxTY2FsZTogZjMyPTEuMDtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpXG52YXIgVEJOOiBtYXQzeDNmPW1hdDN4MzxmMzI+KGlucHV0LnZUQk4wLGlucHV0LnZUQk4xLGlucHV0LnZUQk4yKTsgXG4jZWxpZiBkZWZpbmVkKEJVTVApXG52YXIgVEJOVVY6IHZlYzJmPXNlbGVjdCgtZnJhZ21lbnRJbnB1dHMudkJ1bXBVVixmcmFnbWVudElucHV0cy52QnVtcFVWLGZyYWdtZW50SW5wdXRzLmZyb250RmFjaW5nKTt2YXIgVEJOOiBtYXQzeDNmPWNvdGFuZ2VudF9mcmFtZShub3JtYWxXKm5vcm1hbFNjYWxlLGlucHV0LnZQb3NpdGlvblcsVEJOVVYsdW5pZm9ybXMudlRhbmdlbnRTcGFjZVBhcmFtcyk7XG4jZWxzZVxudmFyIFRCTlVWOiB2ZWMyZj1zZWxlY3QoLWZyYWdtZW50SW5wdXRzLnZEZXRhaWxVVixmcmFnbWVudElucHV0cy52RGV0YWlsVVYsZnJhZ21lbnRJbnB1dHMuZnJvbnRGYWNpbmcpO3ZhciBUQk46IG1hdDN4M2Y9Y290YW5nZW50X2ZyYW1lKG5vcm1hbFcqbm9ybWFsU2NhbGUsaW5wdXQudlBvc2l0aW9uVyxUQk5VViwgdmVjMmYoMS4sMS4pKTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChBTklTT1RST1BJQylcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmFyIFRCTjogbWF0M3gzZj1tYXQzeDM8ZjMyPihpbnB1dC52VEJOMCxpbnB1dC52VEJOMSxpbnB1dC52VEJOMik7IFxuI2Vsc2VcbnZhciBUQk5VVjogdmVjMmY9c2VsZWN0KCAtZnJhZ21lbnRJbnB1dHMudk1haW5VVjEsZnJhZ21lbnRJbnB1dHMudk1haW5VVjEsZnJhZ21lbnRJbnB1dHMuZnJvbnRGYWNpbmcpO3ZhciBUQk46IG1hdDN4M2Y9Y290YW5nZW50X2ZyYW1lKG5vcm1hbFcsaW5wdXQudlBvc2l0aW9uVyxUQk5VViwgdmVjMmYoMS4sMS4pKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUEFSQUxMQVhcbnZhciBpbnZUQk46IG1hdDN4M2Y9dHJhbnNwb3NlTWF0MyhUQk4pO1xuI2lmZGVmIFBBUkFMTEFYT0NDTFVTSU9OXG51dk9mZnNldD1wYXJhbGxheE9jY2x1c2lvbihpbnZUQk4qLXZpZXdEaXJlY3Rpb25XLGludlRCTipub3JtYWxXLGZyYWdtZW50SW5wdXRzLnZCdW1wVVYsdW5pZm9ybXMudkJ1bXBJbmZvcy56KTtcbiNlbHNlXG51dk9mZnNldD1wYXJhbGxheE9mZnNldChpbnZUQk4qdmlld0RpcmVjdGlvblcsdW5pZm9ybXMudkJ1bXBJbmZvcy56KTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG52YXIgZGV0YWlsQ29sb3I6IHZlYzRmPXRleHR1cmVTYW1wbGUoZGV0YWlsU2FtcGxlcixkZXRhaWxTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52RGV0YWlsVVYrdXZPZmZzZXQpO3ZhciBkZXRhaWxOb3JtYWxSRzogdmVjMmY9ZGV0YWlsQ29sb3Iud3kqMi4wLTEuMDt2YXIgZGV0YWlsTm9ybWFsQjogZjMyPXNxcnQoMS4tc2F0dXJhdGUoZG90KGRldGFpbE5vcm1hbFJHLGRldGFpbE5vcm1hbFJHKSkpO3ZhciBkZXRhaWxOb3JtYWw6IHZlYzNmPSB2ZWMzZihkZXRhaWxOb3JtYWxSRyxkZXRhaWxOb3JtYWxCKTtcbiNlbmRpZlxuI2lmZGVmIEJVTVBcbiNpZmRlZiBPQkpFQ1RTUEFDRV9OT1JNQUxNQVBcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0JVTVBfRlJBR01FTlRcbm5vcm1hbFc9bm9ybWFsaXplKHRleHR1cmVTYW1wbGUoYnVtcFNhbXBsZXIsYnVtcFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZCdW1wVVYpLnh5eiAqMi4wLTEuMCk7bm9ybWFsVz1ub3JtYWxpemUobWF0M3gzZih1bmlmb3Jtcy5ub3JtYWxNYXRyaXhbMF0ueHl6LHVuaWZvcm1zLm5vcm1hbE1hdHJpeFsxXS54eXosdW5pZm9ybXMubm9ybWFsTWF0cml4WzJdLnh5eikqbm9ybWFsVyk7XG4jZWxpZiAhZGVmaW5lZChERVRBSUwpXG5ub3JtYWxXPXBlcnR1cmJOb3JtYWwoVEJOLHRleHR1cmVTYW1wbGUoYnVtcFNhbXBsZXIsYnVtcFNhbXBsZXJTYW1wbGVyLGZyYWdtZW50SW5wdXRzLnZCdW1wVVYrdXZPZmZzZXQpLnh5eix1bmlmb3Jtcy52QnVtcEluZm9zLnkpO1xuI2Vsc2VcbnZhciBidW1wTm9ybWFsOiB2ZWMzZj10ZXh0dXJlU2FtcGxlKGJ1bXBTYW1wbGVyLGJ1bXBTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QnVtcFVWK3V2T2Zmc2V0KS54eXoqMi4wLTEuMDtcbiNpZiBERVRBSUxfTk9STUFMQkxFTkRNRVRIT0Q9PTAgXG5kZXRhaWxOb3JtYWw9dmVjM2YoZGV0YWlsTm9ybWFsLnh5KnVuaWZvcm1zLnZEZXRhaWxJbmZvcy56LGRldGFpbE5vcm1hbC56KTt2YXIgYmxlbmRlZE5vcm1hbDogdmVjM2Y9bm9ybWFsaXplKCB2ZWMzZihidW1wTm9ybWFsLnh5K2RldGFpbE5vcm1hbC54eSxidW1wTm9ybWFsLnoqZGV0YWlsTm9ybWFsLnopKTtcbiNlbGlmIERFVEFJTF9OT1JNQUxCTEVORE1FVEhPRD09MSBcbmRldGFpbE5vcm1hbD12ZWMzZihkZXRhaWxOb3JtYWwueHkqdW5pZm9ybXMudkRldGFpbEluZm9zLnosZGV0YWlsTm9ybWFsLnopO2J1bXBOb3JtYWwrPSB2ZWMzZigwLjAsMC4wLDEuMCk7ZGV0YWlsTm9ybWFsKj0gdmVjM2YoLTEuMCwtMS4wLDEuMCk7dmFyIGJsZW5kZWROb3JtYWw6IHZlYzNmPWJ1bXBOb3JtYWwqZG90KGJ1bXBOb3JtYWwsZGV0YWlsTm9ybWFsKS9idW1wTm9ybWFsLnotZGV0YWlsTm9ybWFsO1xuI2VuZGlmXG5ub3JtYWxXPXBlcnR1cmJOb3JtYWxCYXNlKFRCTixibGVuZGVkTm9ybWFsLHVuaWZvcm1zLnZCdW1wSW5mb3MueSk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoREVUQUlMKVxuZGV0YWlsTm9ybWFsPXZlYzNmKGRldGFpbE5vcm1hbC54eSp1bmlmb3Jtcy52RGV0YWlsSW5mb3MueixkZXRhaWxOb3JtYWwueik7bm9ybWFsVz1wZXJ0dXJiTm9ybWFsQmFzZShUQk4sZGV0YWlsTm9ybWFsLHVuaWZvcm1zLnZEZXRhaWxJbmZvcy56KTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBGcmFnbWVudFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJ1bXBGcmFnbWVudEZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJVTVAsX1ZBUllJTkdOQU1FXyxCdW1wLF9TQU1QTEVSTkFNRV8sYnVtcClcbiNlbmRpZlxuI2lmIGRlZmluZWQoREVUQUlMKVxuI2luY2x1ZGU8c2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERVRBSUwsX1ZBUllJTkdOQU1FXyxEZXRhaWwsX1NBTVBMRVJOQU1FXyxkZXRhaWwpXG4jZW5kaWZcbiNpZiBkZWZpbmVkKEJVTVApICYmIGRlZmluZWQoUEFSQUxMQVgpXG5jb25zdCBtaW5TYW1wbGVzOiBmMzI9NC47Y29uc3QgbWF4U2FtcGxlczogZjMyPTE1Ljtjb25zdCBpTWF4U2FtcGxlczogaTMyPTE1O2ZuIHBhcmFsbGF4T2NjbHVzaW9uKHZWaWV3RGlyQ29UOiB2ZWMzZix2Tm9ybWFsQ29UOiB2ZWMzZix0ZXhDb29yZDogdmVjMmYscGFyYWxsYXhTY2FsZTogZjMyKS0+dmVjMmYge3ZhciBwYXJhbGxheExpbWl0OiBmMzI9bGVuZ3RoKHZWaWV3RGlyQ29ULnh5KS92Vmlld0RpckNvVC56O3BhcmFsbGF4TGltaXQqPXBhcmFsbGF4U2NhbGU7dmFyIHZPZmZzZXREaXI6IHZlYzJmPW5vcm1hbGl6ZSh2Vmlld0RpckNvVC54eSk7dmFyIHZNYXhPZmZzZXQ6IHZlYzJmPXZPZmZzZXREaXIqcGFyYWxsYXhMaW1pdDt2YXIgbnVtU2FtcGxlczogZjMyPW1heFNhbXBsZXMrKGRvdCh2Vmlld0RpckNvVCx2Tm9ybWFsQ29UKSoobWluU2FtcGxlcy1tYXhTYW1wbGVzKSk7dmFyIHN0ZXBTaXplOiBmMzI9MS4wL251bVNhbXBsZXM7dmFyIGN1cnJSYXlIZWlnaHQ6IGYzMj0xLjA7dmFyIHZDdXJyT2Zmc2V0OiB2ZWMyZj0gdmVjMmYoMCwwKTt2YXIgdkxhc3RPZmZzZXQ6IHZlYzJmPSB2ZWMyZigwLDApO3ZhciBsYXN0U2FtcGxlZEhlaWdodDogZjMyPTEuMDt2YXIgY3VyclNhbXBsZWRIZWlnaHQ6IGYzMj0xLjA7dmFyIGtlZXBXb3JraW5nOiBib29sPXRydWU7Zm9yICh2YXIgaTogaTMyPTA7IGk8aU1heFNhbXBsZXM7IGkrKylcbntjdXJyU2FtcGxlZEhlaWdodD10ZXh0dXJlU2FtcGxlKGJ1bXBTYW1wbGVyLGJ1bXBTYW1wbGVyU2FtcGxlcix0ZXhDb29yZCt2Q3Vyck9mZnNldCkudztpZiAoIWtlZXBXb3JraW5nKVxue31cbmVsc2UgaWYgKGN1cnJTYW1wbGVkSGVpZ2h0PmN1cnJSYXlIZWlnaHQpXG57dmFyIGRlbHRhMTogZjMyPWN1cnJTYW1wbGVkSGVpZ2h0LWN1cnJSYXlIZWlnaHQ7dmFyIGRlbHRhMjogZjMyPShjdXJyUmF5SGVpZ2h0K3N0ZXBTaXplKS1sYXN0U2FtcGxlZEhlaWdodDt2YXIgcmF0aW86IGYzMj1kZWx0YTEvKGRlbHRhMStkZWx0YTIpO3ZDdXJyT2Zmc2V0PShyYXRpbykqIHZMYXN0T2Zmc2V0KygxLjAtcmF0aW8pKnZDdXJyT2Zmc2V0O2tlZXBXb3JraW5nPWZhbHNlO31cbmVsc2VcbntjdXJyUmF5SGVpZ2h0LT1zdGVwU2l6ZTt2TGFzdE9mZnNldD12Q3Vyck9mZnNldDtcbiNpZmRlZiBQQVJBTExBWF9SSFNcbnZDdXJyT2Zmc2V0LT1zdGVwU2l6ZSp2TWF4T2Zmc2V0O1xuI2Vsc2VcbnZDdXJyT2Zmc2V0Kz1zdGVwU2l6ZSp2TWF4T2Zmc2V0O1xuI2VuZGlmXG5sYXN0U2FtcGxlZEhlaWdodD1jdXJyU2FtcGxlZEhlaWdodDt9fVxucmV0dXJuIHZDdXJyT2Zmc2V0O31cbmZuIHBhcmFsbGF4T2Zmc2V0KHZpZXdEaXI6IHZlYzNmLGhlaWdodFNjYWxlOiBmMzIpLT52ZWMyZlxue3ZhciBoZWlnaHQ6IGYzMj10ZXh0dXJlU2FtcGxlKGJ1bXBTYW1wbGVyLGJ1bXBTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QnVtcFVWKS53O3ZhciB0ZXhDb29yZE9mZnNldDogdmVjMmY9aGVpZ2h0U2NhbGUqdmlld0Rpci54eSpoZWlnaHQ7XG4jaWZkZWYgUEFSQUxMQVhfUkhTXG5yZXR1cm4gdGV4Q29vcmRPZmZzZXQ7XG4jZWxzZVxucmV0dXJuIC10ZXhDb29yZE9mZnNldDtcbiNlbmRpZlxufVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcEZyYWdtZW50RnVuY3Rpb25zV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcEZyYWdtZW50TWFpbkZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpIHx8IGRlZmluZWQoREVUQUlMKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpIFxudmFyeWluZyB2VEJOMDogdmVjM2Y7dmFyeWluZyB2VEJOMTogdmVjM2Y7dmFyeWluZyB2VEJOMjogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBPQkpFQ1RTUEFDRV9OT1JNQUxNQVBcbnVuaWZvcm0gbm9ybWFsTWF0cml4OiBtYXQ0eDRmO2ZuIHRvTm9ybWFsTWF0cml4KG06IG1hdDR4NGYpLT5tYXQ0eDRmXG57dmFyIGEwMD1tWzBdWzBdO3ZhciBhMDE9bVswXVsxXTt2YXIgYTAyPW1bMF1bMl07dmFyIGEwMz1tWzBdWzNdO3ZhciBhMTA9bVsxXVswXTt2YXIgYTExPW1bMV1bMV07dmFyIGExMj1tWzFdWzJdO3ZhciBhMTM9bVsxXVszXTt2YXIgYTIwPW1bMl1bMF07IFxudmFyIGEyMT1tWzJdWzFdO3ZhciBhMjI9bVsyXVsyXTt2YXIgYTIzPW1bMl1bM107dmFyIGEzMD1tWzNdWzBdOyBcbnZhciBhMzE9bVszXVsxXTt2YXIgYTMyPW1bM11bMl07dmFyIGEzMz1tWzNdWzNdO3ZhciBiMDA9YTAwKmExMS1hMDEqYTEwO3ZhciBiMDE9YTAwKmExMi1hMDIqYTEwO3ZhciBiMDI9YTAwKmExMy1hMDMqYTEwO3ZhciBiMDM9YTAxKmExMi1hMDIqYTExO3ZhciBiMDQ9YTAxKmExMy1hMDMqYTExO3ZhciBiMDU9YTAyKmExMy1hMDMqYTEyO3ZhciBiMDY9YTIwKmEzMS1hMjEqYTMwO3ZhciBiMDc9YTIwKmEzMi1hMjIqYTMwO3ZhciBiMDg9YTIwKmEzMy1hMjMqYTMwO3ZhciBiMDk9YTIxKmEzMi1hMjIqYTMxO3ZhciBiMTA9YTIxKmEzMy1hMjMqYTMxO3ZhciBiMTE9YTIyKmEzMy1hMjMqYTMyO3ZhciBkZXQ9YjAwKmIxMS1iMDEqYjEwK2IwMipiMDkrYjAzKmIwOC1iMDQqYjA3K2IwNSpiMDY7dmFyIG1pPW1hdDR4NDxmMzI+KFxuKGExMSpiMTEtYTEyKmIxMCthMTMqYjA5KS9kZXQsXG4oYTAyKmIxMC1hMDEqYjExLWEwMypiMDkpL2RldCxcbihhMzEqYjA1LWEzMipiMDQrYTMzKmIwMykvZGV0LFxuKGEyMipiMDQtYTIxKmIwNS1hMjMqYjAzKS9kZXQsXG4oYTEyKmIwOC1hMTAqYjExLWExMypiMDcpL2RldCxcbihhMDAqYjExLWEwMipiMDgrYTAzKmIwNykvZGV0LFxuKGEzMipiMDItYTMwKmIwNS1hMzMqYjAxKS9kZXQsXG4oYTIwKmIwNS1hMjIqYjAyK2EyMypiMDEpL2RldCxcbihhMTAqYjEwLWExMSpiMDgrYTEzKmIwNikvZGV0LFxuKGEwMSpiMDgtYTAwKmIxMC1hMDMqYjA2KS9kZXQsXG4oYTMwKmIwNC1hMzEqYjAyK2EzMypiMDApL2RldCxcbihhMjEqYjAyLWEyMCpiMDQtYTIzKmIwMCkvZGV0LFxuKGExMSpiMDctYTEwKmIwOS1hMTIqYjA2KS9kZXQsXG4oYTAwKmIwOS1hMDEqYjA3K2EwMipiMDYpL2RldCxcbihhMzEqYjAxLWEzMCpiMDMtYTMyKmIwMCkvZGV0LFxuKGEyMCpiMDMtYTIxKmIwMSthMjIqYjAwKS9kZXQpO3JldHVybiBtYXQ0eDQ8ZjMyPihtaVswXVswXSxtaVsxXVswXSxtaVsyXVswXSxtaVszXVswXSxcbm1pWzBdWzFdLG1pWzFdWzFdLG1pWzJdWzFdLG1pWzNdWzFdLFxubWlbMF1bMl0sbWlbMV1bMl0sbWlbMl1bMl0sbWlbM11bMl0sXG5taVswXVszXSxtaVsxXVszXSxtaVsyXVszXSxtaVszXVszXSk7fVxuI2VuZGlmXG5mbiBwZXJ0dXJiTm9ybWFsQmFzZShjb3RhbmdlbnRGcmFtZTogbWF0M3gzZixub3JtYWw6IHZlYzNmLHNjYWxlOiBmMzIpLT52ZWMzZlxue3ZhciBvdXRwdXQ9bm9ybWFsO1xuI2lmZGVmIE5PUk1BTFhZU0NBTEVcbm91dHB1dD1ub3JtYWxpemUob3V0cHV0KiB2ZWMzZihzY2FsZSxzY2FsZSwxLjApKTtcbiNlbmRpZlxucmV0dXJuIG5vcm1hbGl6ZShjb3RhbmdlbnRGcmFtZSpvdXRwdXQpO31cbmZuIHBlcnR1cmJOb3JtYWwoY290YW5nZW50RnJhbWU6IG1hdDN4M2YsdGV4dHVyZVNhbXBsZTogdmVjM2Ysc2NhbGU6IGYzMiktPnZlYzNmXG57cmV0dXJuIHBlcnR1cmJOb3JtYWxCYXNlKGNvdGFuZ2VudEZyYW1lLHRleHR1cmVTYW1wbGUqMi4wLTEuMCxzY2FsZSk7fVxuZm4gY290YW5nZW50X2ZyYW1lKG5vcm1hbDogdmVjM2YscDogdmVjM2YsdXY6IHZlYzJmLHRhbmdlbnRTcGFjZVBhcmFtczogdmVjMmYpLT5tYXQzeDNmXG57dmFyIGRwMTogdmVjM2Y9ZHBkeChwKTt2YXIgZHAyOiB2ZWMzZj1kcGR5KHApO3ZhciBkdXYxOiB2ZWMyZj1kcGR4KHV2KTt2YXIgZHV2MjogdmVjMmY9ZHBkeSh1dik7dmFyIGRwMnBlcnA6IHZlYzNmPWNyb3NzKGRwMixub3JtYWwpO3ZhciBkcDFwZXJwOiB2ZWMzZj1jcm9zcyhub3JtYWwsZHAxKTt2YXIgdGFuZ2VudDogdmVjM2Y9ZHAycGVycCpkdXYxLngrZHAxcGVycCpkdXYyLng7dmFyIGJpdGFuZ2VudDogdmVjM2Y9ZHAycGVycCpkdXYxLnkrZHAxcGVycCpkdXYyLnk7dGFuZ2VudCo9dGFuZ2VudFNwYWNlUGFyYW1zLng7Yml0YW5nZW50Kj10YW5nZW50U3BhY2VQYXJhbXMueTt2YXIgZGV0OiBmMzI9bWF4KGRvdCh0YW5nZW50LHRhbmdlbnQpLGRvdChiaXRhbmdlbnQsYml0YW5nZW50KSk7dmFyIGludm1heDogZjMyPXNlbGVjdChpbnZlcnNlU3FydChkZXQpLDAuMCxkZXQ9PTAuMCk7cmV0dXJuIG1hdDN4M2YodGFuZ2VudCppbnZtYXgsYml0YW5nZW50Kmludm1heCxub3JtYWwpO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBGcmFnbWVudE1haW5GdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==