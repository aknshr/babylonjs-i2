"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_ShadersInclude_bumpFragment_js-core_dist_Shaders_ShadersInclude_bumpFragmen-2b9383"],{

/***/ "../core/dist/Shaders/ShadersInclude/bumpFragment.js":
/*!***********************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/bumpFragment.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragment: () => (/* binding */ bumpFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpFragment";
const shader = `vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);vec2 detailNormalRG=detailColor.wy*2.0-1.0;float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;bumpNormal+=vec3(0.0,0.0,1.0);detailNormal*=vec3(-1.0,-1.0,1.0);vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const bumpFragment = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/bumpFragmentFunctions.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/bumpFragmentFunctions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentFunctions: () => (/* binding */ bumpFragmentFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _samplerFragmentDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplerFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerFragmentDeclaration.js");
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
const float minSamples=4.;const float maxSamples=15.;const int iMaxSamples=15;vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;vec2 vOffsetDir=normalize(vViewDirCoT.xy);vec2 vMaxOffset=vOffsetDir*parallaxLimit;float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));float stepSize=1.0/numSamples;float currRayHeight=1.0;vec2 vCurrOffset=vec2(0,0);vec2 vLastOffset=vec2(0,0);float lastSampledHeight=1.0;float currSampledHeight=1.0;bool keepWorking=true;for (int i=0; i<iMaxSamples; i++)
{currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{float delta1=currSampledHeight-currRayHeight;float delta2=(currRayHeight+stepSize)-lastSampledHeight;float ratio=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{float height=texture2D(bumpSampler,vBumpUV).w;vec2 texCoordOffset=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const bumpFragmentFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/bumpFragmentMainFunctions.js":
/*!************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/bumpFragmentMainFunctions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpFragmentMainFunctions: () => (/* binding */ bumpFragmentMainFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpFragmentMainFunctions";
const shader = `#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{mat4 ret=inverse(wMatrix);ret=transpose(ret);ret[0][3]=0.;ret[1][3]=0.;ret[2][3]=0.;ret[3]=vec4(0.,0.,0.,1.);return ret;}
#else
mat4 toNormalMatrix(mat4 m)
{float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;float det=max(dot(tangent,tangent),dot(bitangent,bitangent));float invmax=det==0.0 ? 0.0 : inversesqrt(det);return mat3(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const bumpFragmentMainFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/decalFragment.js":
/*!************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/decalFragment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decalFragment: () => (/* binding */ decalFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "decalFragment";
const shader = `#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const decalFragment = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfYnVtcEZyYWdtZW50X2pzLWNvcmVfZGlzdF9TaGFkZXJzX1NoYWRlcnNJbmNsdWRlX2J1bXBGcmFnbWVuLTJiOTM4My5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9idW1wRnJhZ21lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2J1bXBGcmFnbWVudEZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYnVtcEZyYWdtZW50TWFpbkZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvZGVjYWxGcmFnbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcEZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgdmVjMiB1dk9mZnNldD12ZWMyKDAuMCwwLjApO1xuI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChQQVJBTExBWCkgfHwgZGVmaW5lZChERVRBSUwpXG4jaWZkZWYgTk9STUFMWFlTQ0FMRVxuZmxvYXQgbm9ybWFsU2NhbGU9MS4wO1xuI2VsaWYgZGVmaW5lZChCVU1QKVxuZmxvYXQgbm9ybWFsU2NhbGU9dkJ1bXBJbmZvcy55O1xuI2Vsc2VcbmZsb2F0IG5vcm1hbFNjYWxlPTEuMDtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpXG5tYXQzIFRCTj12VEJOO1xuI2VsaWYgZGVmaW5lZChCVU1QKVxudmVjMiBUQk5VVj1nbF9Gcm9udEZhY2luZyA/IHZCdW1wVVYgOiAtdkJ1bXBVVjttYXQzIFRCTj1jb3RhbmdlbnRfZnJhbWUobm9ybWFsVypub3JtYWxTY2FsZSx2UG9zaXRpb25XLFRCTlVWLHZUYW5nZW50U3BhY2VQYXJhbXMpO1xuI2Vsc2VcbnZlYzIgVEJOVVY9Z2xfRnJvbnRGYWNpbmcgPyB2RGV0YWlsVVYgOiAtdkRldGFpbFVWO21hdDMgVEJOPWNvdGFuZ2VudF9mcmFtZShub3JtYWxXKm5vcm1hbFNjYWxlLHZQb3NpdGlvblcsVEJOVVYsdmVjMigxLiwxLikpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKEFOSVNPVFJPUElDKVxuI2lmIGRlZmluZWQoVEFOR0VOVCkgJiYgZGVmaW5lZChOT1JNQUwpXG5tYXQzIFRCTj12VEJOO1xuI2Vsc2VcbnZlYzIgVEJOVVY9Z2xfRnJvbnRGYWNpbmcgPyB2TWFpblVWMSA6IC12TWFpblVWMTttYXQzIFRCTj1jb3RhbmdlbnRfZnJhbWUobm9ybWFsVyx2UG9zaXRpb25XLFRCTlVWLHZlYzIoMS4sMS4pKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUEFSQUxMQVhcbm1hdDMgaW52VEJOPXRyYW5zcG9zZU1hdDMoVEJOKTtcbiNpZmRlZiBQQVJBTExBWE9DQ0xVU0lPTlxudXZPZmZzZXQ9cGFyYWxsYXhPY2NsdXNpb24oaW52VEJOKi12aWV3RGlyZWN0aW9uVyxpbnZUQk4qbm9ybWFsVyx2QnVtcFVWLHZCdW1wSW5mb3Mueik7XG4jZWxzZVxudXZPZmZzZXQ9cGFyYWxsYXhPZmZzZXQoaW52VEJOKnZpZXdEaXJlY3Rpb25XLHZCdW1wSW5mb3Mueik7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxudmVjNCBkZXRhaWxDb2xvcj10ZXh0dXJlMkQoZGV0YWlsU2FtcGxlcix2RGV0YWlsVVYrdXZPZmZzZXQpO3ZlYzIgZGV0YWlsTm9ybWFsUkc9ZGV0YWlsQ29sb3Iud3kqMi4wLTEuMDtmbG9hdCBkZXRhaWxOb3JtYWxCPXNxcnQoMS4tc2F0dXJhdGUoZG90KGRldGFpbE5vcm1hbFJHLGRldGFpbE5vcm1hbFJHKSkpO3ZlYzMgZGV0YWlsTm9ybWFsPXZlYzMoZGV0YWlsTm9ybWFsUkcsZGV0YWlsTm9ybWFsQik7XG4jZW5kaWZcbiNpZmRlZiBCVU1QXG4jaWZkZWYgT0JKRUNUU1BBQ0VfTk9STUFMTUFQXG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9CVU1QX0ZSQUdNRU5UXG5ub3JtYWxXPW5vcm1hbGl6ZSh0ZXh0dXJlMkQoYnVtcFNhbXBsZXIsdkJ1bXBVVikueHl6ICoyLjAtMS4wKTtub3JtYWxXPW5vcm1hbGl6ZShtYXQzKG5vcm1hbE1hdHJpeCkqbm9ybWFsVyk7XG4jZWxpZiAhZGVmaW5lZChERVRBSUwpXG5ub3JtYWxXPXBlcnR1cmJOb3JtYWwoVEJOLHRleHR1cmUyRChidW1wU2FtcGxlcix2QnVtcFVWK3V2T2Zmc2V0KS54eXosdkJ1bXBJbmZvcy55KTtcbiNlbHNlXG52ZWMzIGJ1bXBOb3JtYWw9dGV4dHVyZTJEKGJ1bXBTYW1wbGVyLHZCdW1wVVYrdXZPZmZzZXQpLnh5eioyLjAtMS4wO1xuI2lmIERFVEFJTF9OT1JNQUxCTEVORE1FVEhPRD09MCBcbmRldGFpbE5vcm1hbC54eSo9dkRldGFpbEluZm9zLno7dmVjMyBibGVuZGVkTm9ybWFsPW5vcm1hbGl6ZSh2ZWMzKGJ1bXBOb3JtYWwueHkrZGV0YWlsTm9ybWFsLnh5LGJ1bXBOb3JtYWwueipkZXRhaWxOb3JtYWwueikpO1xuI2VsaWYgREVUQUlMX05PUk1BTEJMRU5ETUVUSE9EPT0xIFxuZGV0YWlsTm9ybWFsLnh5Kj12RGV0YWlsSW5mb3MuejtidW1wTm9ybWFsKz12ZWMzKDAuMCwwLjAsMS4wKTtkZXRhaWxOb3JtYWwqPXZlYzMoLTEuMCwtMS4wLDEuMCk7dmVjMyBibGVuZGVkTm9ybWFsPWJ1bXBOb3JtYWwqZG90KGJ1bXBOb3JtYWwsZGV0YWlsTm9ybWFsKS9idW1wTm9ybWFsLnotZGV0YWlsTm9ybWFsO1xuI2VuZGlmXG5ub3JtYWxXPXBlcnR1cmJOb3JtYWxCYXNlKFRCTixibGVuZGVkTm9ybWFsLHZCdW1wSW5mb3MueSk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoREVUQUlMKVxuZGV0YWlsTm9ybWFsLnh5Kj12RGV0YWlsSW5mb3Muejtub3JtYWxXPXBlcnR1cmJOb3JtYWxCYXNlKFRCTixkZXRhaWxOb3JtYWwsdkRldGFpbEluZm9zLnopO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBGcmFnbWVudCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcEZyYWdtZW50RnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoQlVNUClcbiNpbmNsdWRlPHNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQlVNUCxfVkFSWUlOR05BTUVfLEJ1bXAsX1NBTVBMRVJOQU1FXyxidW1wKVxuI2VuZGlmXG4jaWYgZGVmaW5lZChERVRBSUwpXG4jaW5jbHVkZTxzYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFVEFJTCxfVkFSWUlOR05BTUVfLERldGFpbCxfU0FNUExFUk5BTUVfLGRldGFpbClcbiNlbmRpZlxuI2lmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChQQVJBTExBWClcbmNvbnN0IGZsb2F0IG1pblNhbXBsZXM9NC47Y29uc3QgZmxvYXQgbWF4U2FtcGxlcz0xNS47Y29uc3QgaW50IGlNYXhTYW1wbGVzPTE1O3ZlYzIgcGFyYWxsYXhPY2NsdXNpb24odmVjMyB2Vmlld0RpckNvVCx2ZWMzIHZOb3JtYWxDb1QsdmVjMiB0ZXhDb29yZCxmbG9hdCBwYXJhbGxheFNjYWxlKSB7ZmxvYXQgcGFyYWxsYXhMaW1pdD1sZW5ndGgodlZpZXdEaXJDb1QueHkpL3ZWaWV3RGlyQ29ULno7cGFyYWxsYXhMaW1pdCo9cGFyYWxsYXhTY2FsZTt2ZWMyIHZPZmZzZXREaXI9bm9ybWFsaXplKHZWaWV3RGlyQ29ULnh5KTt2ZWMyIHZNYXhPZmZzZXQ9dk9mZnNldERpcipwYXJhbGxheExpbWl0O2Zsb2F0IG51bVNhbXBsZXM9bWF4U2FtcGxlcysoZG90KHZWaWV3RGlyQ29ULHZOb3JtYWxDb1QpKihtaW5TYW1wbGVzLW1heFNhbXBsZXMpKTtmbG9hdCBzdGVwU2l6ZT0xLjAvbnVtU2FtcGxlcztmbG9hdCBjdXJyUmF5SGVpZ2h0PTEuMDt2ZWMyIHZDdXJyT2Zmc2V0PXZlYzIoMCwwKTt2ZWMyIHZMYXN0T2Zmc2V0PXZlYzIoMCwwKTtmbG9hdCBsYXN0U2FtcGxlZEhlaWdodD0xLjA7ZmxvYXQgY3VyclNhbXBsZWRIZWlnaHQ9MS4wO2Jvb2wga2VlcFdvcmtpbmc9dHJ1ZTtmb3IgKGludCBpPTA7IGk8aU1heFNhbXBsZXM7IGkrKylcbntjdXJyU2FtcGxlZEhlaWdodD10ZXh0dXJlMkQoYnVtcFNhbXBsZXIsdGV4Q29vcmQrdkN1cnJPZmZzZXQpLnc7aWYgKCFrZWVwV29ya2luZylcbnt9XG5lbHNlIGlmIChjdXJyU2FtcGxlZEhlaWdodD5jdXJyUmF5SGVpZ2h0KVxue2Zsb2F0IGRlbHRhMT1jdXJyU2FtcGxlZEhlaWdodC1jdXJyUmF5SGVpZ2h0O2Zsb2F0IGRlbHRhMj0oY3VyclJheUhlaWdodCtzdGVwU2l6ZSktbGFzdFNhbXBsZWRIZWlnaHQ7ZmxvYXQgcmF0aW89ZGVsdGExLyhkZWx0YTErZGVsdGEyKTt2Q3Vyck9mZnNldD0ocmF0aW8pKiB2TGFzdE9mZnNldCsoMS4wLXJhdGlvKSp2Q3Vyck9mZnNldDtrZWVwV29ya2luZz1mYWxzZTt9XG5lbHNlXG57Y3VyclJheUhlaWdodC09c3RlcFNpemU7dkxhc3RPZmZzZXQ9dkN1cnJPZmZzZXQ7XG4jaWZkZWYgUEFSQUxMQVhfUkhTXG52Q3Vyck9mZnNldC09c3RlcFNpemUqdk1heE9mZnNldDtcbiNlbHNlXG52Q3Vyck9mZnNldCs9c3RlcFNpemUqdk1heE9mZnNldDtcbiNlbmRpZlxubGFzdFNhbXBsZWRIZWlnaHQ9Y3VyclNhbXBsZWRIZWlnaHQ7fX1cbnJldHVybiB2Q3Vyck9mZnNldDt9XG52ZWMyIHBhcmFsbGF4T2Zmc2V0KHZlYzMgdmlld0RpcixmbG9hdCBoZWlnaHRTY2FsZSlcbntmbG9hdCBoZWlnaHQ9dGV4dHVyZTJEKGJ1bXBTYW1wbGVyLHZCdW1wVVYpLnc7dmVjMiB0ZXhDb29yZE9mZnNldD1oZWlnaHRTY2FsZSp2aWV3RGlyLnh5KmhlaWdodDtcbiNpZmRlZiBQQVJBTExBWF9SSFNcbnJldHVybiB0ZXhDb29yZE9mZnNldDtcbiNlbHNlXG5yZXR1cm4gLXRleENvb3JkT2Zmc2V0O1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcEZyYWdtZW50RnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wRnJhZ21lbnRNYWluRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChBTklTT1RST1BJQykgfHwgZGVmaW5lZChERVRBSUwpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTCkgXG52YXJ5aW5nIG1hdDMgdlRCTjtcbiNlbmRpZlxuI2lmZGVmIE9CSkVDVFNQQUNFX05PUk1BTE1BUFxudW5pZm9ybSBtYXQ0IG5vcm1hbE1hdHJpeDtcbiNpZiBkZWZpbmVkKFdFQkdMMikgfHwgZGVmaW5lZChXRUJHUFUpXG5tYXQ0IHRvTm9ybWFsTWF0cml4KG1hdDQgd01hdHJpeClcbnttYXQ0IHJldD1pbnZlcnNlKHdNYXRyaXgpO3JldD10cmFuc3Bvc2UocmV0KTtyZXRbMF1bM109MC47cmV0WzFdWzNdPTAuO3JldFsyXVszXT0wLjtyZXRbM109dmVjNCgwLiwwLiwwLiwxLik7cmV0dXJuIHJldDt9XG4jZWxzZVxubWF0NCB0b05vcm1hbE1hdHJpeChtYXQ0IG0pXG57ZmxvYXRcbmEwMD1tWzBdWzBdLGEwMT1tWzBdWzFdLGEwMj1tWzBdWzJdLGEwMz1tWzBdWzNdLFxuYTEwPW1bMV1bMF0sYTExPW1bMV1bMV0sYTEyPW1bMV1bMl0sYTEzPW1bMV1bM10sXG5hMjA9bVsyXVswXSxhMjE9bVsyXVsxXSxhMjI9bVsyXVsyXSxhMjM9bVsyXVszXSxcbmEzMD1tWzNdWzBdLGEzMT1tWzNdWzFdLGEzMj1tWzNdWzJdLGEzMz1tWzNdWzNdLFxuYjAwPWEwMCphMTEtYTAxKmExMCxcbmIwMT1hMDAqYTEyLWEwMiphMTAsXG5iMDI9YTAwKmExMy1hMDMqYTEwLFxuYjAzPWEwMSphMTItYTAyKmExMSxcbmIwND1hMDEqYTEzLWEwMyphMTEsXG5iMDU9YTAyKmExMy1hMDMqYTEyLFxuYjA2PWEyMCphMzEtYTIxKmEzMCxcbmIwNz1hMjAqYTMyLWEyMiphMzAsXG5iMDg9YTIwKmEzMy1hMjMqYTMwLFxuYjA5PWEyMSphMzItYTIyKmEzMSxcbmIxMD1hMjEqYTMzLWEyMyphMzEsXG5iMTE9YTIyKmEzMy1hMjMqYTMyLFxuZGV0PWIwMCpiMTEtYjAxKmIxMCtiMDIqYjA5K2IwMypiMDgtYjA0KmIwNytiMDUqYjA2O21hdDQgbWk9bWF0NChcbmExMSpiMTEtYTEyKmIxMCthMTMqYjA5LFxuYTAyKmIxMC1hMDEqYjExLWEwMypiMDksXG5hMzEqYjA1LWEzMipiMDQrYTMzKmIwMyxcbmEyMipiMDQtYTIxKmIwNS1hMjMqYjAzLFxuYTEyKmIwOC1hMTAqYjExLWExMypiMDcsXG5hMDAqYjExLWEwMipiMDgrYTAzKmIwNyxcbmEzMipiMDItYTMwKmIwNS1hMzMqYjAxLFxuYTIwKmIwNS1hMjIqYjAyK2EyMypiMDEsXG5hMTAqYjEwLWExMSpiMDgrYTEzKmIwNixcbmEwMSpiMDgtYTAwKmIxMC1hMDMqYjA2LFxuYTMwKmIwNC1hMzEqYjAyK2EzMypiMDAsXG5hMjEqYjAyLWEyMCpiMDQtYTIzKmIwMCxcbmExMSpiMDctYTEwKmIwOS1hMTIqYjA2LFxuYTAwKmIwOS1hMDEqYjA3K2EwMipiMDYsXG5hMzEqYjAxLWEzMCpiMDMtYTMyKmIwMCxcbmEyMCpiMDMtYTIxKmIwMSthMjIqYjAwKS9kZXQ7cmV0dXJuIG1hdDQobWlbMF1bMF0sbWlbMV1bMF0sbWlbMl1bMF0sbWlbM11bMF0sXG5taVswXVsxXSxtaVsxXVsxXSxtaVsyXVsxXSxtaVszXVsxXSxcbm1pWzBdWzJdLG1pWzFdWzJdLG1pWzJdWzJdLG1pWzNdWzJdLFxubWlbMF1bM10sbWlbMV1bM10sbWlbMl1bM10sbWlbM11bM10pO31cbiNlbmRpZlxuI2VuZGlmXG52ZWMzIHBlcnR1cmJOb3JtYWxCYXNlKG1hdDMgY290YW5nZW50RnJhbWUsdmVjMyBub3JtYWwsZmxvYXQgc2NhbGUpXG57XG4jaWZkZWYgTk9STUFMWFlTQ0FMRVxubm9ybWFsPW5vcm1hbGl6ZShub3JtYWwqdmVjMyhzY2FsZSxzY2FsZSwxLjApKTtcbiNlbmRpZlxucmV0dXJuIG5vcm1hbGl6ZShjb3RhbmdlbnRGcmFtZSpub3JtYWwpO31cbnZlYzMgcGVydHVyYk5vcm1hbChtYXQzIGNvdGFuZ2VudEZyYW1lLHZlYzMgdGV4dHVyZVNhbXBsZSxmbG9hdCBzY2FsZSlcbntyZXR1cm4gcGVydHVyYk5vcm1hbEJhc2UoY290YW5nZW50RnJhbWUsdGV4dHVyZVNhbXBsZSoyLjAtMS4wLHNjYWxlKTt9XG5tYXQzIGNvdGFuZ2VudF9mcmFtZSh2ZWMzIG5vcm1hbCx2ZWMzIHAsdmVjMiB1dix2ZWMyIHRhbmdlbnRTcGFjZVBhcmFtcylcbnt2ZWMzIGRwMT1kRmR4KHApO3ZlYzMgZHAyPWRGZHkocCk7dmVjMiBkdXYxPWRGZHgodXYpO3ZlYzIgZHV2Mj1kRmR5KHV2KTt2ZWMzIGRwMnBlcnA9Y3Jvc3MoZHAyLG5vcm1hbCk7dmVjMyBkcDFwZXJwPWNyb3NzKG5vcm1hbCxkcDEpO3ZlYzMgdGFuZ2VudD1kcDJwZXJwKmR1djEueCtkcDFwZXJwKmR1djIueDt2ZWMzIGJpdGFuZ2VudD1kcDJwZXJwKmR1djEueStkcDFwZXJwKmR1djIueTt0YW5nZW50Kj10YW5nZW50U3BhY2VQYXJhbXMueDtiaXRhbmdlbnQqPXRhbmdlbnRTcGFjZVBhcmFtcy55O2Zsb2F0IGRldD1tYXgoZG90KHRhbmdlbnQsdGFuZ2VudCksZG90KGJpdGFuZ2VudCxiaXRhbmdlbnQpKTtmbG9hdCBpbnZtYXg9ZGV0PT0wLjAgPyAwLjAgOiBpbnZlcnNlc3FydChkZXQpO3JldHVybiBtYXQzKHRhbmdlbnQqaW52bWF4LGJpdGFuZ2VudCppbnZtYXgsbm9ybWFsKTt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcEZyYWdtZW50TWFpbkZ1bmN0aW9ucyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZGVjYWxGcmFnbWVudFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBERUNBTFxuI2lmZGVmIEdBTU1BREVDQUxcbmRlY2FsQ29sb3IucmdiPXRvTGluZWFyU3BhY2UoZGVjYWxDb2xvci5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgREVDQUxfU01PT1RIQUxQSEFcbmRlY2FsQ29sb3IuYSo9ZGVjYWxDb2xvci5hO1xuI2VuZGlmXG5zdXJmYWNlQWxiZWRvLnJnYj1taXgoc3VyZmFjZUFsYmVkby5yZ2IsZGVjYWxDb2xvci5yZ2IsZGVjYWxDb2xvci5hKTtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBkZWNhbEZyYWdtZW50ID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=