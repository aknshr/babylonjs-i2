"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_depthPrePass_js-core_dist_ShadersWGSL_ShadersInclude_hdr-efd88d"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js":
/*!***************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/depthPrePass.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthPrePassWGSL: () => (/* binding */ depthPrePassWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
fragmentOutputs.color= vec4f(0.,0.,0.,1.0);return fragmentOutputs;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const depthPrePassWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hdrFilteringFunctionsWGSL: () => (/* binding */ hdrFilteringFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "hdrFilteringFunctions";
const shader = `#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
fn radicalInverse_VdC(value: u32)->f32 
{var bits=(value<<16u) | (value>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);return f32(bits)*2.3283064365386963e-10; }
fn hammersley(i: u32,N: u32)->vec2f
{return vec2f( f32(i)/ f32(N),radicalInverse_VdC(i));}
fn log4(x: f32)->f32 {return log2(x)/2.;}
fn uv_to_normal(uv: vec2f)->vec3f {var N: vec3f;var uvRange: vec2f=uv;var theta: f32=uvRange.x*2.0*PI;var phi: f32=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
const NUM_SAMPLES_FLOAT: f32= f32(NUM_SAMPLES);const NUM_SAMPLES_FLOAT_INVERSED: f32=1./NUM_SAMPLES_FLOAT;const K: f32=4.;fn irradiance(
#ifdef CUSTOM_IRRADIANCE_FILTERING_INPUT
CUSTOM_IRRADIANCE_FILTERING_INPUT
#else
inputTexture: texture_cube<f32>,inputSampler: sampler,
#endif
inputN: vec3f,
filteringInfo: vec2f,
diffuseRoughness: f32,
surfaceAlbedo: vec3f,
inputV: vec3f
#ifdef IBL_CDF_FILTERING
,icdfSampler: texture_2d<f32>,icdfSamplerSampler: sampler
#endif
)->vec3f
{var n: vec3f=normalize(inputN);var result: vec3f= vec3f(0.0);
#ifndef IBL_CDF_FILTERING
var tangent: vec3f=select(vec3f(1.,0.,0.),vec3f(0.,0.,1.),abs(n.z)<0.999);tangent=normalize(cross(tangent,n));var bitangent: vec3f=cross(n,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,n);var tbnInverse: mat3x3f=transpose(tbn);
#endif
var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var omegaP: f32=(4.*PI)/(6.*dim0*dim0);var clampedAlbedo: vec3f=clamp(surfaceAlbedo,vec3f(0.1),vec3f(1.0));for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);
#ifdef IBL_CDF_FILTERING
var T: vec2f;T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(Xi.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(T.x,Xi.y),0.0).y;var Ls: vec3f=uv_to_normal(vec2f(1.0-fract(T.x+0.25),T.y));var NoL: f32=dot(n,Ls);var NoV: f32=dot(n,inputV);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
var LoV: f32=dot(Ls,inputV);
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
var H: vec3f=(inputV+Ls)*0.5;var VoH: f32=dot(inputV,H);
#endif 
#else
var Ls: vec3f=hemisphereCosSample(Xi);Ls=normalize(Ls);var Ns: vec3f= vec3f(0.,0.,1.);var NoL: f32=dot(Ns,Ls);var V: vec3f=tbnInverse*inputV;var NoV: f32=dot(Ns,V);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
var LoV: f32=dot(Ls,V);
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
var H: vec3f=(V+Ls)*0.5;var VoH: f32=dot(V,H);
#endif
#endif
if (NoL>0.) {
#ifdef IBL_CDF_FILTERING
var pdf: f32=textureSampleLevel(icdfSampler,icdfSamplerSampler,T,0.0).z;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,Ls,0.0).rgb;
#else
var pdf_inversed: f32=PI/NoL;var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp(l,0.0,maxLevel);
#ifdef CUSTOM_IRRADIANCE_FILTERING_FUNCTION
CUSTOM_IRRADIANCE_FILTERING_FUNCTION
#else
var c: vec3f=textureSampleLevel(inputTexture,inputSampler,tbn*Ls,mipLevel).rgb;
#endif
#endif
#ifdef GAMMA_INPUT
c=toLinearSpaceVec3(c);
#endif
var diffuseRoughnessTerm: vec3f=vec3f(1.0);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseRoughnessTerm=vec3f(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
#ifdef IBL_CDF_FILTERING
var light: vec3f=vec3f(0.0);if (pdf>1e-6) {light=vec3f(1.0)/vec3f(pdf)*c;}
result+=NoL*diffuseRoughnessTerm*light;
#else
result+=c*diffuseRoughnessTerm;
#endif
}}
result=result*NUM_SAMPLES_FLOAT_INVERSED;
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
result=result/clampedAlbedo;
#endif
return result;}
fn radiance(alphaG: f32,inputTexture: texture_cube<f32>,inputSampler: sampler,inputN: vec3f,filteringInfo: vec2f)->vec3f
{var n: vec3f=normalize(inputN);var c: vec3f=textureSample(inputTexture,inputSampler,n).rgb; 
if (alphaG==0.) {
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;} else {var result: vec3f= vec3f(0.);var tangent: vec3f=select(vec3f(1.,0.,0.),vec3f(0.,0.,1.),abs(n.z)<0.999);tangent=normalize(cross(tangent,n));var bitangent: vec3f=cross(n,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,n);var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var omegaP: f32=(4.*PI)/(6.*dim0*dim0);var weight: f32=0.;for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);var H: vec3f=hemisphereImportanceSampleDggx(Xi,alphaG);var NoV: f32=1.;var NoH: f32=H.z;var NoH2: f32=H.z*H.z;var NoL: f32=2.*NoH2-1.;var L: vec3f= vec3f(2.*NoH*H.x,2.*NoH*H.y,NoL);L=normalize(L);if (NoL>0.) {var pdf_inversed: f32=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp( f32(l),0.0,maxLevel);weight+=NoL;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}}
#ifdef ANISOTROPIC
fn radianceAnisotropic(
alphaTangent: f32, 
alphaBitangent: f32, 
inputTexture: texture_cube<f32>,
inputSampler: sampler,
inputView: vec3f, 
inputTangent: vec3f, 
inputBitangent: vec3f, 
inputNormal: vec3f, 
filteringInfo: vec2f,
noiseInput: vec2f 
)->vec3f {var V: vec3f=inputView;var N: vec3f=inputNormal;var T: vec3f=inputTangent;var B: vec3f=inputBitangent;var R: vec3f=reflect(-V,N);var c: vec3f=textureSample(inputTexture,inputSampler,R).rgb;if (alphaTangent==0.f && alphaBitangent==0.f) {
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;}
var result: vec3f=vec3f(0.f);var maxLevel: f32=filteringInfo.y;var dim0: f32=filteringInfo.x;var effectiveDim: f32=dim0*sqrt(alphaTangent*alphaBitangent);var omegaP: f32=(4.f*PI)/(6.f*effectiveDim*effectiveDim);let noiseScale: f32=clamp(log2(f32(NUM_SAMPLES))/12.0f,0.0f,1.0f);var weight: f32=0.f;for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);Xi=fract(Xi+noiseInput*mix(0.5f,0.015f,noiseScale)); 
var H_tangent: vec3f=hemisphereImportanceSampleDggxAnisotropic(Xi,alphaTangent,alphaBitangent);var H: vec3f=normalize(H_tangent.x*T+H_tangent.y*B+H_tangent.z*N);var L: vec3f=normalize(2.0f*dot(V,H)*H-V);var NoH: f32=max(dot(N,H),0.001f);var VoH: f32=max(dot(V,H),0.001f);var NoL: f32=max(dot(N,L),0.001f);if (NoL>0.f) {var pdf_inversed: f32=4./normalDistributionFunction_BurleyGGX_Anisotropic(
H_tangent.z,H_tangent.x,H_tangent.y,vec2(alphaTangent,alphaBitangent)
);var omegaS: f32=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;var l: f32=log4(omegaS)-log4(omegaP)+log4(K);var mipLevel: f32=clamp(l,0.0f,maxLevel);weight+=NoL;var c: vec3f=textureSampleLevel(inputTexture,inputSampler,L,mipLevel).rgb;
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const hdrFilteringFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/importanceSampling.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/importanceSampling.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importanceSamplingWGSL: () => (/* binding */ importanceSamplingWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "importanceSampling";
const shader = `fn hemisphereCosSample(u: vec2f)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=1.-u.y;var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
fn hemisphereImportanceSampleDggx(u: vec2f,a: f32)->vec3f {var phi: f32=2.*PI*u.x;var cosTheta2: f32=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));var cosTheta: f32=sqrt(cosTheta2);var sinTheta: f32=sqrt(1.-cosTheta2);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
fn hemisphereImportanceSampleDggxAnisotropic(Xi: vec2f,alphaTangent: f32,alphaBitangent: f32)->vec3f
{let alphaT: f32=max(alphaTangent,0.0001);let alphaB: f32=max(alphaBitangent,0.0001);var phi: f32=atan(alphaB/alphaT*tan(2.0f*PI*Xi.x));if (Xi.x>0.5) {phi+=PI; }
let cosPhi: f32=cos(phi);let sinPhi: f32=sin(phi);let alpha2: f32=(cosPhi*cosPhi)/(alphaTangent*alphaTangent) +
(sinPhi*sinPhi)/(alphaB*alphaB);let tanTheta2: f32=Xi.y/(1.0f-Xi.y)/alpha2;let cosTheta: f32=1.0f/sqrt(1.0f+tanTheta2);let sinTheta: f32=sqrt(max(0.0f,1.0f-cosTheta*cosTheta));return vec3f(sinTheta*cosPhi,sinTheta*sinPhi,cosTheta);}
fn hemisphereImportanceSampleDCharlie(u: vec2f,a: f32)->vec3f { 
var phi: f32=2.*PI*u.x;var sinTheta: f32=pow(u.y,a/(2.*a+1.));var cosTheta: f32=sqrt(1.-sinTheta*sinTheta);return vec3f(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const importanceSamplingWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js":
/*!*****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/oitDeclaration.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitDeclarationWGSL: () => (/* binding */ oitDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "oitDeclaration";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#define MAX_DEPTH 99999.0
var oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const oitDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js":
/*!**************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/oitFragment.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oitFragmentWGSL: () => (/* binding */ oitFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "oitFragment";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
var fragDepth: f32=fragmentInputs.position.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
var halfFloat: u32=pack2x16float( vec2f(fragDepth));var full: vec2f=unpack2x16float(halfFloat);fragDepth=full.x;
#endif
var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var lastDepth: vec2f=textureLoad(oitDepthSampler,fragCoord,0).rg;var lastFrontColor: vec4f=textureLoad(oitFrontColorSampler,fragCoord,0);fragmentOutputs.depth=vec2f(-MAX_DEPTH);fragmentOutputs.frontColor=lastFrontColor;fragmentOutputs.backColor= vec4f(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
var furthestDepth: f32=-lastDepth.x;var nearestDepth: f32=lastDepth.y;
#else
var nearestDepth: f32=-lastDepth.x;var furthestDepth: f32=lastDepth.y;
#endif
var alphaMultiplier: f32=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return fragmentOutputs;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
fragmentOutputs.depth=vec2f(-fragDepth,fragDepth);return fragmentOutputs;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const oitFragmentWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js":
/*!**************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockImageProcessingWGSL: () => (/* binding */ pbrBlockImageProcessingWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockImageProcessing";
const shader = `#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)
#if !defined(SKIPFINALCOLORCLAMP)
finalColor=vec4f(clamp(finalColor.rgb,vec3f(0.),vec3f(30.0)),finalColor.a);
#endif
#else
finalColor=applyImageProcessing(finalColor);
#endif
finalColor=vec4f(finalColor.rgb,finalColor.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
finalColor=vec4f(finalColor.rgb*finalColor.a,finalColor.a);;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockImageProcessingWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js":
/*!**************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockNormalGeometricWGSL: () => (/* binding */ pbrBlockNormalGeometricWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockNormalGeometric";
const shader = `var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(input.vNormalW);
#else
var normalW: vec3f=normalize(cross(dpdx(input.vPositionW),dpdy(input.vPositionW)))*scene.vEyePosition.w;
#endif
var geometricNormalW: vec3f=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=select(-geometricNormalW,geometricNormalW,fragmentInputs.frontFacing);
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockNormalGeometricWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js":
/*!******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockPrePassWGSL: () => (/* binding */ pbrBlockPrePassWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockPrePass";
const shader = `#if SCENE_MRT_COUNT>0
var writeGeometryInfo: f32=select(0.0,1.0,finalColor.a>ALPHATESTVALUE);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]= vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX]=vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
fragData[PREPASS_ALBEDO_INDEX]=vec4f(surfaceAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
var sqAlbedo : vec3f=sqrt(surfaceAlbedo); 
#endif
#ifdef PREPASS_IRRADIANCE
var irradiance : vec3f=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
#ifdef SS_SCATTERING
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=vec4f(finalColor.rgb-irradiance,finalColor.a); 
#endif
irradiance/=sqAlbedo;fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(clamp(irradiance,vec3f(0.),vec3f(1.)),writeGeometryInfo*uniforms.scatteringDiffusionProfile/255.); 
#else
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=finalColor; 
#endif
fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(clamp(irradiance,vec3f(0.),vec3f(1.)),writeGeometryInfo); 
#endif
#elif defined(PREPASS_COLOR)
fragData[PREPASS_COLOR_INDEX]=vec4f(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
fragData[PREPASS_NORMALIZED_VIEW_DEPTH_INDEX]=vec4f(fragmentInputs.vNormViewDepth,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalW,writeGeometryInfo);
#else
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX]=vec4f(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4f(sqAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#ifndef UNLIT
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(specularEnvironmentR0,microSurface)*writeGeometryInfo;
#else
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockPrePassWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance0.js":
/*!***********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance0.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockReflectance0WGSL: () => (/* binding */ pbrBlockReflectance0WGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockReflectance0";
const shader = `var reflectanceF0: f32=reflectivityOut.reflectanceF0;var specularEnvironmentR0: vec3f=reflectivityOut.colorReflectanceF0;var specularEnvironmentR90: vec3f= reflectivityOut.reflectanceF90;
#ifdef ALPHAFRESNEL
var reflectance90: f32=fresnelGrazingReflectance(reflectanceF0);specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBlockReflectance0WGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrDebug.js":
/*!***********************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrDebug.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDebugWGSL: () => (/* binding */ pbrDebugWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrDebug";
const shader = `#if DEBUGMODE>0
if (input.vClipSpacePosition.x/input.vClipSpacePosition.w>=uniforms.vDebugMode.x) {var color: vec3f;
#if DEBUGMODE==1
color=fragmentInputs.vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==2 && defined(NORMAL)
color=fragmentInputs.vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==3 && defined(BUMP) || DEBUGMODE==3 && defined(PARALLAX) || DEBUGMODE==3 && defined(ANISOTROPIC)
color=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==4 && defined(BUMP) || DEBUGMODE==4 && defined(PARALLAX) || DEBUGMODE==4 && defined(ANISOTROPIC)
color=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==5
color=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==6 && defined(MAINUV1)
color= vec3f(input.vMainUV1,0.0);
#elif DEBUGMODE==7 && defined(MAINUV2)
color= vec3f(input.vMainUV2,0.0);
#elif DEBUGMODE==8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
color=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
color=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==10 && defined(CLEARCOAT)
color=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==11 && defined(ANISOTROPIC)
color=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==12 && defined(ANISOTROPIC)
color=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==13 && defined(ANISOTROPIC)
color=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==20 && defined(ALBEDO)
color=albedoTexture.rgb;
#ifndef GAMMAALBEDO
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==21 && defined(AMBIENT)
color=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE==22 && defined(OPACITY)
color=opacityMap.rgb;
#elif DEBUGMODE==23 && defined(EMISSIVE)
color=emissiveColorTex.rgb;
#ifndef GAMMAEMISSIVE
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==24 && defined(LIGHTMAP)
color=lightmapColor;
#ifndef GAMMALIGHTMAP
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
color=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE==26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
color=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
color= vec3f(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE==28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
color=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE==29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
color=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE==30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
color=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE==31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
color=subSurfaceOut.thicknessMap.rgb;
#elif DEBUGMODE==32 && defined(BUMP)
color=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).rgb;
#elif DEBUGMODE==40 && defined(SS_REFRACTION)
color=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==41 && defined(REFLECTION)
color=reflectionOut.environmentRadiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==42 && defined(CLEARCOAT) && defined(REFLECTION)
color=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==50
color=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==51 && defined(SPECULARTERM)
color=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==52 && defined(CLEARCOAT)
color=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==53 && defined(SHEEN)
color=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==54 && defined(REFLECTION)
color=reflectionOut.environmentIrradiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==60
color=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==61
color=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==62 && defined(METALLICWORKFLOW)
color= vec3f(reflectivityOut.metallic);
#elif DEBUGMODE==71 && defined(METALLICWORKFLOW)
color=reflectivityOut.metallicF0;
#elif DEBUGMODE==63
color= vec3f(roughness);
#elif DEBUGMODE==64
color= vec3f(alphaG);
#elif DEBUGMODE==65
color= vec3f(NdotV);
#elif DEBUGMODE==66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
color=clearcoatOut.clearCoatColor;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==67 && defined(CLEARCOAT)
color= vec3f(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE==68 && defined(CLEARCOAT)
color= vec3f(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE==69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
color=subSurfaceOut.transmittance;
#elif DEBUGMODE==70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
color=subSurfaceOut.refractionTransmittance;
#elif DEBUGMODE==72
color= vec3f(microSurface);
#elif DEBUGMODE==73
color=uniforms.vAlbedoColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==74 && !defined(METALLICWORKFLOW)
color=uniforms.vReflectivityColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==75
color=uniforms.vEmissiveColor;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==80 && defined(RADIANCEOCCLUSION)
color= vec3f(seo);
#elif DEBUGMODE==81 && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
color= vec3f(eho);
#elif DEBUGMODE==82 && defined(MS_BRDF_ENERGY_CONSERVATION)
color= vec3f(energyConservationFactor);
#elif DEBUGMODE==83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
color=baseSpecularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
color=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==85 && defined(SHEEN) && defined(REFLECTION)
color=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==86 && defined(ALPHABLEND)
color= vec3f(luminanceOverAlpha);
#elif DEBUGMODE==87
color= vec3f(alpha);
#elif DEBUGMODE==88 && defined(ALBEDO)
color= vec3f(albedoTexture.a);
#elif DEBUGMODE==89
color=aoOut.ambientOcclusionColor;
#else
var stripeWidth: f32=30.;var stripePos: f32=abs(floor(input.position.x/stripeWidth));var whichColor: f32=((stripePos)%(2.));var color1: vec3f= vec3f(.6,.2,.2);var color2: vec3f= vec3f(.3,.1,.1);color=mix(color1,color2,whichColor);
#endif
color*=uniforms.vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
color=normalize(color)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
color=toGammaSpaceVec3(color);
#endif
fragmentOutputs.color=vec4f(color,1.0);
#ifdef PREPASS
fragmentOutputs.fragData0=toLinearSpaceVec3(color); 
fragmentOutputs.fragData1=vec4f(0.,0.,0.,0.); 
#endif
#ifdef DEBUGMODE_FORCERETURN
return fragmentOutputs;
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrDebugWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingFalloffFunctions.js":
/*!************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingFalloffFunctions.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDirectLightingFalloffFunctionsWGSL: () => (/* binding */ pbrDirectLightingFalloffFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrDirectLightingFalloffFunctions";
const shader = `fn computeDistanceLightFalloff_Standard(lightOffset: vec3f,range: f32)->f32
{return max(0.,1.0-length(lightOffset)/range);}
fn computeDistanceLightFalloff_Physical(lightDistanceSquared: f32)->f32
{return 1.0/maxEps(lightDistanceSquared);}
fn computeDistanceLightFalloff_GLTF(lightDistanceSquared: f32,inverseSquaredRange: f32)->f32
{var lightDistanceFalloff: f32=1.0/maxEps(lightDistanceSquared);var factor: f32=lightDistanceSquared*inverseSquaredRange;var attenuation: f32=saturate(1.0-factor*factor);attenuation*=attenuation;lightDistanceFalloff*=attenuation;return lightDistanceFalloff;}
fn computeDirectionalLightFalloff_IES(lightDirection: vec3f,directionToLightCenterW: vec3f,iesLightTexture: texture_2d<f32>,iesLightTextureSampler: sampler)->f32
{var cosAngle: f32=dot(-lightDirection,directionToLightCenterW);var angle=acos(cosAngle)/PI;return textureSampleLevel(iesLightTexture,iesLightTextureSampler,vec2f(angle,0),0.).r;}
fn computeDistanceLightFalloff(lightOffset: vec3f,lightDistanceSquared: f32,range: f32,inverseSquaredRange: f32)->f32
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
fn computeDirectionalLightFalloff_Standard(lightDirection: vec3f,directionToLightCenterW: vec3f,cosHalfAngle: f32,exponent: f32)->f32
{var falloff: f32=0.0;var cosAngle: f32=maxEps(dot(-lightDirection,directionToLightCenterW));if (cosAngle>=cosHalfAngle)
{falloff=max(0.,pow(cosAngle,exponent));}
return falloff;}
fn computeDirectionalLightFalloff_Physical(lightDirection: vec3f,directionToLightCenterW: vec3f,cosHalfAngle: f32)->f32
{const kMinusLog2ConeAngleIntensityRatio: f32=6.64385618977; 
var concentrationKappa: f32=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);var lightDirectionSpreadSG: vec4f= vec4f(-lightDirection*concentrationKappa,-concentrationKappa);var falloff: f32=exp2(dot( vec4f(directionToLightCenterW,1.0),lightDirectionSpreadSG));return falloff;}
fn computeDirectionalLightFalloff_GLTF(lightDirection: vec3f,directionToLightCenterW: vec3f,lightAngleScale: f32,lightAngleOffset: f32)->f32
{var cd: f32=dot(-lightDirection,directionToLightCenterW);var falloff: f32=saturate(cd*lightAngleScale+lightAngleOffset);falloff*=falloff;return falloff;}
fn computeDirectionalLightFalloff(lightDirection: vec3f,directionToLightCenterW: vec3f,cosHalfAngle: f32,exponent: f32,lightAngleScale: f32,lightAngleOffset: f32)->f32
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDirectionalLightFalloff_Physical(lightDirection,directionToLightCenterW,cosHalfAngle);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDirectionalLightFalloff_GLTF(lightDirection,directionToLightCenterW,lightAngleScale,lightAngleOffset);
#else
return computeDirectionalLightFalloff_Standard(lightDirection,directionToLightCenterW,cosHalfAngle,exponent);
#endif
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrDirectLightingFalloffFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingFunctions.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingFunctions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDirectLightingFunctionsWGSL: () => (/* binding */ pbrDirectLightingFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _clusteredLightingFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clusteredLightingFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js");
/* harmony import */ var _pbrBlockReflectance0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pbrBlockReflectance0 */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBlockReflectance0.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "pbrDirectLightingFunctions";
const shader = `#define CLEARCOATREFLECTANCE90 1.0
struct lightingInfo
{diffuse: vec3f,
#ifdef SS_TRANSLUCENCY
diffuseTransmission: vec3f,
#endif
#ifdef SPECULARTERM
specular: vec3f,
#endif
#ifdef CLEARCOAT
clearCoat: vec4f,
#endif
#ifdef SHEEN
sheen: vec3f
#endif
};fn adjustRoughnessFromLightProperties(roughness: f32,lightRadius: f32,lightDistance: f32)->f32 {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)
var lightRoughness: f32=lightRadius/lightDistance;var totalRoughness: f32=saturate(lightRoughness+roughness);return totalRoughness;
#else
return roughness;
#endif
}
fn computeHemisphericDiffuseLighting(info: preLightingInfo,lightColor: vec3f,groundColor: vec3f)->vec3f {return mix(groundColor,lightColor,info.NdotL);}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
fn computeAreaDiffuseLighting(info: preLightingInfo,lightColor: vec3f)->vec3f {return info.areaLightDiffuse*lightColor;}
#endif
fn computeDiffuseLighting(info: preLightingInfo,lightColor: vec3f)->vec3f {var diffuseTerm: vec3f=vec3f(1.0/PI);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_LEGACY
diffuseTerm=vec3f(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseTerm=vec3f(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.diffuseRoughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
var clampedAlbedo: vec3f=clamp(info.surfaceAlbedo,vec3f(0.1),vec3f(1.0));diffuseTerm=diffuseBRDF_EON(clampedAlbedo,info.diffuseRoughness,info.NdotL,info.NdotV,info.LdotV);diffuseTerm/=clampedAlbedo;
#endif
return diffuseTerm*info.attenuation*info.NdotL*lightColor;}
fn computeProjectionTextureDiffuseLighting(projectionLightTexture: texture_2d<f32>,projectionLightSampler: sampler,textureProjectionMatrix: mat4x4f,posW: vec3f)->vec3f{var strq: vec4f=textureProjectionMatrix* vec4f(posW,1.0);strq/=strq.w;var textureColor: vec3f=textureSample(projectionLightTexture,projectionLightSampler,strq.xy).rgb;return toLinearSpaceVec3(textureColor);}
#ifdef SS_TRANSLUCENCY
fn computeDiffuseTransmittedLighting(info: preLightingInfo,lightColor: vec3f,transmittance: vec3f)->vec3f {var transmittanceNdotL=vec3f(0.0);var NdotL: f32=absEps(info.NdotLUnclamped);
#ifndef SS_TRANSLUCENCY_LEGACY
if (info.NdotLUnclamped<0.0) {
#endif
var wrapNdotL: f32=computeWrappedDiffuseNdotL(NdotL,0.02);var trAdapt: f32=step(0.,info.NdotLUnclamped);transmittanceNdotL=mix(transmittance*wrapNdotL, vec3f(wrapNdotL),trAdapt);
#ifndef SS_TRANSLUCENCY_LEGACY
}
var diffuseTerm : vec3f=vec3f(1.0/PI);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_LEGACY
diffuseTerm=vec3f(diffuseBRDF_Burley(
info.NdotL,info.NdotV,info.VdotH,info.roughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseTerm=vec3f(diffuseBRDF_Burley(
info.NdotL,info.NdotV,info.VdotH,info.diffuseRoughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
var clampedAlbedo: vec3f=clamp(info.surfaceAlbedo,vec3f(0.1),vec3f(1.0));diffuseTerm=diffuseBRDF_EON(clampedAlbedo,info.diffuseRoughness,
info.NdotL,info.NdotV,info.LdotV);diffuseTerm/=clampedAlbedo;
#endif
return (transmittanceNdotL*diffuseTerm)*info.attenuation*lightColor;
#else
let diffuseTerm=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;
#endif
}
#endif
#ifdef SPECULARTERM
fn computeSpecularLighting(info: preLightingInfo,N: vec3f,reflectance0: vec3f,fresnel: vec3f,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var roughness: f32=max(info.roughness,geometricRoughnessFactor);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var modifiedFresnel: vec3f=fresnel;
#ifdef IRIDESCENCE
modifiedFresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
var distribution: f32=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
var smithVisibility: f32=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
var smithVisibility: f32=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
var specTerm: vec3f=modifiedFresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
fn computeAreaSpecularLighting(info: preLightingInfo,specularColor: vec3f,reflectance0: vec3f,reflectance90: vec3f)->vec3f {var fresnel:vec3f =reflectance0*specularColor*info.areaLightFresnel.x+( vec3f( 1.0 )-specularColor )*info.areaLightFresnel.y*reflectance90;return specularColor*fresnel*info.areaLightSpecular;}
#endif
#endif
#ifdef FUZZ
fn evalFuzz(L: vec3f,NdotL: f32,NdotV: f32,T: vec3f,B: vec3f,ltcLut: vec3f)->f32
{if (NdotL<=0.0f || NdotV<=0.0f) {return 0.0f;}
let M=mat3x3f(
vec3f(ltcLut.r,0.0f,0.0f),
vec3f(ltcLut.g,1.0f,0.0f),
vec3f(0.0f,0.0f,1.0f)
);let Llocal: vec3f=vec3f(dot(L,T),dot(L,B),NdotL);let Lwarp: vec3f=normalize(M*Llocal);let cosThetaWarp: f32=max(Lwarp.z,0.0f);return cosThetaWarp*NdotL;}
#endif
#if defined(ANISOTROPIC) && defined(ANISOTROPIC_OPENPBR)
fn computeAnisotropicSpecularLighting(info: preLightingInfo,V: vec3f,N: vec3f,T: vec3f,B: vec3f,anisotropy: f32,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var TdotH: f32=dot(T,info.H);var BdotH: f32=dot(B,info.H);var TdotV: f32=dot(T,V);var BdotV: f32=dot(B,V);var TdotL: f32=dot(T,info.L);var BdotL: f32=dot(B,info.L);var alphaG: f32=convertRoughnessToAverageSlope(info.roughness);var alphaTB: vec2f=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,vec2f(geometricRoughnessFactor*geometricRoughnessFactor));var distribution: f32=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);var smithVisibility: f32=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);var specTerm: vec3f=vec3f(distribution*smithVisibility);return specTerm*info.attenuation*info.NdotL*lightColor;}
#elif defined(ANISOTROPIC)
fn computeAnisotropicSpecularLighting(info: preLightingInfo,V: vec3f,N: vec3f,T: vec3f,B: vec3f,anisotropy: f32,reflectance0: vec3f,reflectance90: vec3f,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var TdotH: f32=dot(T,info.H);var BdotH: f32=dot(B,info.H);var TdotV: f32=dot(T,V);var BdotV: f32=dot(B,V);var TdotL: f32=dot(T,info.L);var BdotL: f32=dot(B,info.L);var alphaG: f32=convertRoughnessToAverageSlope(info.roughness);var alphaTB: vec2f=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,vec2f(geometricRoughnessFactor*geometricRoughnessFactor));var fresnel: vec3f=fresnelSchlickGGXVec3(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
var distribution: f32=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);var smithVisibility: f32=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);var specTerm: vec3f=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef CLEARCOAT
fn computeClearCoatLighting(info: preLightingInfo,Ncc: vec3f,geometricRoughnessFactor: f32,clearCoatIntensity: f32,lightColor: vec3f)->vec4f {var NccdotL: f32=saturateEps(dot(Ncc,info.L));var NccdotH: f32=saturateEps(dot(Ncc,info.H));var clearCoatRoughness: f32=max(info.roughness,geometricRoughnessFactor);var alphaG: f32=convertRoughnessToAverageSlope(clearCoatRoughness);var fresnel: f32=fresnelSchlickGGX(info.VdotH,uniforms.vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnel*=clearCoatIntensity;var distribution: f32=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);var kelemenVisibility: f32=visibility_Kelemen(info.VdotH);var clearCoatTerm: f32=fresnel*distribution*kelemenVisibility;return vec4f(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);}
fn computeClearCoatLightingAbsorption(NdotVRefract: f32,L: vec3f,Ncc: vec3f,clearCoatColor: vec3f,clearCoatThickness: f32,clearCoatIntensity: f32)->vec3f {var LRefract: vec3f=-refract(L,Ncc,uniforms.vClearCoatRefractionParams.y);var NdotLRefract: f32=saturateEps(dot(Ncc,LRefract));var absorption: vec3f=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);return absorption;}
#endif
#ifdef SHEEN
fn computeSheenLighting(info: preLightingInfo,N: vec3f,reflectance0: vec3f,reflectance90: vec3f,geometricRoughnessFactor: f32,lightColor: vec3f)->vec3f {var NdotH: f32=saturateEps(dot(N,info.H));var roughness: f32=max(info.roughness,geometricRoughnessFactor);var alphaG: f32=convertRoughnessToAverageSlope(roughness);var fresnel: f32=1.;var distribution: f32=normalDistributionFunction_CharlieSheen(NdotH,alphaG);/*#ifdef SHEEN_SOFTER
var visibility: f32=visibility_CharlieSheen(info.NdotL,info.NdotV,alphaG);
#else */
var visibility: f32=visibility_Ashikhmin(info.NdotL,info.NdotV);/* #endif */
var sheenTerm: f32=fresnel*distribution*visibility;return sheenTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
#include<clusteredLightingFunctions>
fn computeClusteredLighting(
lightDataTexture: texture_2d<f32>,
tileMaskBuffer: ptr<storage,array<u32>>,
lightData: vec4f,
sliceRange: vec2u,
V: vec3f,
N: vec3f,
posW: vec3f,
surfaceAlbedo: vec3f,
reflectivityOut: reflectivityOutParams,
#ifdef IRIDESCENCE
iridescenceIntensity: f32,
#endif
#ifdef SS_TRANSLUCENCY
subSurfaceOut: subSurfaceOutParams,
#endif
#ifdef SPECULARTERM
AARoughnessFactor: f32,
#endif
#ifdef ANISOTROPIC
anisotropicOut: anisotropicOutParams,
#endif
#ifdef SHEEN
sheenOut: sheenOutParams,
#endif
#ifdef CLEARCOAT
clearcoatOut: clearcoatOutParams,
#endif
)->lightingInfo {let NdotV=absEps(dot(N,V));
#include<pbrBlockReflectance0>
#ifdef CLEARCOAT
specularEnvironmentR0=clearcoatOut.specularEnvironmentR0;
#endif
var result: lightingInfo;let tilePosition=vec2u(fragmentInputs.position.xy*lightData.xy);let maskResolution=vec2u(lightData.zw);var tileIndex=(tilePosition.x*maskResolution.x+tilePosition.y)*maskResolution.y;let batchRange=sliceRange/CLUSTLIGHT_BATCH;var batchOffset=batchRange.x*CLUSTLIGHT_BATCH;tileIndex+=batchRange.x;for (var i=batchRange.x; i<=batchRange.y; i+=1) {var mask=tileMaskBuffer[tileIndex];tileIndex+=1;let maskOffset=max(sliceRange.x,batchOffset)-batchOffset; 
let maskWidth=min(sliceRange.y-batchOffset+1,CLUSTLIGHT_BATCH);mask=extractBits(mask,maskOffset,maskWidth);while mask != 0 {let trailing=firstTrailingBit(mask);mask ^= 1u<<trailing;let light=getClusteredLight(lightDataTexture,batchOffset+maskOffset+trailing);var preInfo=computePointAndSpotPreLightingInfo(light.vLightData,V,N,posW);preInfo.NdotV=NdotV;preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light.vLightFalloff.x,light.vLightFalloff.y);if light.vLightDirection.w>=0.0 {preInfo.attenuation*=computeDirectionalLightFalloff(light.vLightDirection.xyz,preInfo.L,light.vLightDirection.w,light.vLightData.w,light.vLightFalloff.z,light.vLightFalloff.w);}
preInfo.roughness=adjustRoughnessFromLightProperties(reflectivityOut.roughness,light.vLightSpecular.a,preInfo.lightDistance);preInfo.diffuseRoughness=reflectivityOut.diffuseRoughness;preInfo.surfaceAlbedo=surfaceAlbedo;
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
var info: lightingInfo;
#ifdef SS_TRANSLUCENCY
#ifdef SS_TRANSLUCENCY_LEGACY
info.diffuse=computeDiffuseTransmittedLighting(preInfo,light.vLightDiffuse.rgb,subSurfaceOut.transmittance);info.diffuseTransmission=vec3(0);
#else
info.diffuse=computeDiffuseLighting(preInfo,light.vLightDiffuse.rgb)*(1.0-subSurfaceOut.translucencyIntensity);info.diffuseTransmission=computeDiffuseTransmittedLighting(preInfo,light.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#endif
#else
info.diffuse=computeDiffuseLighting(preInfo,light.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#if CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR
let metalFresnel=reflectivityOut.specularWeight*getF82Specular(preInfo.VdotH,specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);let dielectricFresnel=fresnelSchlickGGXVec3(preInfo.VdotH,reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90);let coloredFresnel=mix(dielectricFresnel,metalFresnel,reflectivityOut.metallic);
#else
let coloredFresnel=fresnelSchlickGGXVec3(preInfo.VdotH,specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#endif
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
let NdotH=dot(N,preInfo.H);let fresnel=fresnelSchlickGGXVec3(NdotH,vec3(reflectanceF0),specularEnvironmentR90);info.diffuse*=(vec3(1.0)-fresnel);
#endif
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,V,N,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactor,light.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,N,specularEnvironmentR0,coloredFresnel,AARoughnessFactor,light.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light.vLightSpecular.a,preInfo.lightDistance);
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactor,light.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light.vLightSpecular.a,preInfo.lightDistance);info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
let absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=absorption;
#endif
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=info.clearCoat.w;
#endif
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
result.diffuse+=info.diffuse;
#ifdef SS_TRANSLUCENCY
result.diffuseTransmission+=info.diffuseTransmission;
#endif
#ifdef SPECULARTERM
result.specular+=info.specular;
#endif
#ifdef CLEARCOAT
result.clearCoat+=info.clearCoat;
#endif
#ifdef SHEEN
result.sheen+=info.sheen;
#endif
}
batchOffset+=CLUSTLIGHT_BATCH;}
return result;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrDirectLightingFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingSetupFunctions.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrDirectLightingSetupFunctions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDirectLightingSetupFunctionsWGSL: () => (/* binding */ pbrDirectLightingSetupFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ltcHelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ltcHelperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/ltcHelperFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrDirectLightingSetupFunctions";
const shader = `struct preLightingInfo
{lightOffset: vec3f,
lightDistanceSquared: f32,
lightDistance: f32,
attenuation: f32,
L: vec3f,
H: vec3f,
NdotV: f32,
NdotLUnclamped: f32,
NdotL: f32,
VdotH: f32,
LdotV: f32,
roughness: f32,
diffuseRoughness: f32,
surfaceAlbedo: vec3f,
#ifdef IRIDESCENCE
iridescenceIntensity: f32
#endif
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
areaLightDiffuse: vec3f,
#ifdef SPECULARTERM
areaLightSpecular: vec3f,
areaLightFresnel: vec4f
#endif
#endif
};fn computePointAndSpotPreLightingInfo(lightData: vec4f,V: vec3f,N: vec3f,posW: vec3f)->preLightingInfo {var result: preLightingInfo;result.lightOffset=lightData.xyz-posW;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);result.L=normalize(result.lightOffset);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);return result;}
fn computeDirectionalPreLightingInfo(lightData: vec4f,V: vec3f,N: vec3f)->preLightingInfo {var result: preLightingInfo;result.lightDistance=length(-lightData.xyz);result.L=normalize(-lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);result.LdotV=dot(result.L,V);return result;}
fn computeHemisphericPreLightingInfo(lightData: vec4f,V: vec3f,N: vec3f)->preLightingInfo {var result: preLightingInfo;result.NdotL=dot(N,lightData.xyz)*0.5+0.5;result.NdotL=saturateEps(result.NdotL);result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));
#endif
return result;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
var areaLightsLTC1SamplerSampler: sampler;var areaLightsLTC1Sampler: texture_2d<f32>;var areaLightsLTC2SamplerSampler: sampler;var areaLightsLTC2Sampler: texture_2d<f32>;fn computeAreaPreLightingInfo(ltc1: texture_2d<f32>,ltc1Sampler:sampler,ltc2:texture_2d<f32>,ltc2Sampler:sampler,viewDirectionW: vec3f,vNormal:vec3f,vPosition:vec3f,lightCenter:vec3f,halfWidth:vec3f, halfHeight:vec3f,roughness:f32)->preLightingInfo {var result: preLightingInfo;var data: areaLightData=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc1Sampler,ltc2,ltc2Sampler,viewDirectionW,vNormal,vPosition,lightCenter,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
result.areaLightFresnel=data.Fresnel;result.areaLightSpecular=data.Specular;
#endif
result.areaLightDiffuse+=data.Diffuse;return result;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrDirectLightingSetupFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js":
/*!******************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrFragmentExtraDeclarationWGSL: () => (/* binding */ pbrFragmentExtraDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainUVVaryingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrFragmentExtraDeclaration";
const shader = `varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrFragmentExtraDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrHelperFunctions.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrHelperFunctions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrHelperFunctionsWGSL: () => (/* binding */ pbrHelperFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrHelperFunctions";
const shader = `#define MINIMUMVARIANCE 0.0005
fn convertRoughnessToAverageSlope(roughness: f32)->f32
{return roughness*roughness+MINIMUMVARIANCE;}
fn fresnelGrazingReflectance(reflectance0: f32)->f32 {var reflectance90: f32=saturate(reflectance0*25.0);return reflectance90;}
fn getAARoughnessFactors(normalVector: vec3f)->vec2f {
#ifdef SPECULARAA
var nDfdx: vec3f=dpdx(normalVector.xyz);var nDfdy: vec3f=dpdy(normalVector.xyz);var slopeSquare: f32=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));var geometricRoughnessFactor: f32=pow(saturate(slopeSquare),0.333);var geometricAlphaGFactor: f32=sqrt(slopeSquare);geometricAlphaGFactor*=0.75;return vec2f(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2f(0.);
#endif
}
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_LEGACY
fn getAnisotropicRoughness(alphaG: f32,anisotropy: f32)->vec2f {var alphaT: f32=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);var alphaB: f32=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);return vec2f(alphaT,alphaB);}
fn getAnisotropicBentNormals(T: vec3f,B: vec3f,N: vec3f,V: vec3f,anisotropy: f32,roughness: f32)->vec3f {var anisotropicFrameDirection: vec3f=select(T,B,anisotropy>=0.0);var anisotropicFrameTangent: vec3f=cross(normalize(anisotropicFrameDirection),V);var anisotropicFrameNormal: vec3f=cross(anisotropicFrameTangent,anisotropicFrameDirection);var anisotropicNormal: vec3f=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));return anisotropicNormal;}
#elif ANISOTROPIC_OPENPBR
fn getAnisotropicRoughness(alphaG: f32,anisotropy: f32)->vec2f {var alphaT: f32=alphaG*sqrt(2.0/(1.0+(1.0-anisotropy)*(1.0-anisotropy)));var alphaB: f32=max(alphaT*(1.0-anisotropy),MINIMUMVARIANCE);return vec2f(alphaT,alphaB);}
#else
fn getAnisotropicRoughness(alphaG: f32,anisotropy: f32)->vec2f {var alphaT: f32=max(mix(alphaG,1.0,anisotropy*anisotropy),MINIMUMVARIANCE);var alphaB: f32=max(alphaG,MINIMUMVARIANCE);return vec2f(alphaT,alphaB);}
fn getAnisotropicBentNormals(T: vec3f,B: vec3f,N: vec3f,V: vec3f,anisotropy: f32,roughness: f32)->vec3f {var bentNormal: vec3f=cross(B,V);bentNormal=normalize(cross(bentNormal,B));var sq=1.0-anisotropy*(1.0-roughness);var a: f32=sq*sq*sq*sq;bentNormal=normalize(mix(bentNormal,N,a));return bentNormal;}
#endif
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)
fn cocaLambertVec3(alpha: vec3f,distance: f32)->vec3f {return exp(-alpha*distance);}
fn cocaLambert(NdotVRefract: f32,NdotLRefract: f32,alpha: vec3f,thickness: f32)->vec3f {return cocaLambertVec3(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));}
fn computeColorAtDistanceInMedia(color: vec3f,distance: f32)->vec3f {return -log(color)/distance;}
fn computeClearCoatAbsorption(NdotVRefract: f32,NdotLRefract: f32,clearCoatColor: vec3f,clearCoatThickness: f32,clearCoatIntensity: f32)->vec3f {var clearCoatAbsorption: vec3f=mix( vec3f(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);return clearCoatAbsorption;}
#endif
#ifdef MICROSURFACEAUTOMATIC
fn computeDefaultMicroSurface(microSurface: f32,reflectivityColor: vec3f)->f32
{const kReflectivityNoAlphaWorkflow_SmoothnessMax: f32=0.95;var reflectivityLuminance: f32=getLuminance(reflectivityColor);var reflectivityLuma: f32=sqrt(reflectivityLuminance);var resultMicroSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;return resultMicroSurface;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrHelperFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrIBLFunctions.js":
/*!******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrIBLFunctions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrIBLFunctionsWGSL: () => (/* binding */ pbrIBLFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrIBLFunctions";
const shader = `#if defined(REFLECTION) || defined(SS_REFRACTION)
fn getLodFromAlphaG(cubeMapDimensionPixels: f32,microsurfaceAverageSlope: f32)->f32 {var microsurfaceAverageSlopeTexels: f32=cubeMapDimensionPixels*microsurfaceAverageSlope;var lod: f32=log2(microsurfaceAverageSlopeTexels);return lod;}
fn getLinearLodFromRoughness(cubeMapDimensionPixels: f32,roughness: f32)->f32 {var lod: f32=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
fn environmentRadianceOcclusion(ambientOcclusion: f32,NdotVUnclamped: f32)->f32 {var temp: f32=NdotVUnclamped+ambientOcclusion;return saturate(temp*temp-1.0+ambientOcclusion);}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
fn environmentHorizonOcclusion(view: vec3f,normal: vec3f,geometricNormal: vec3f)->f32 {var reflection: vec3f=reflect(view,normal);var temp: f32=saturate(1.0+1.1*dot(reflection,geometricNormal));return temp*temp;}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
fn UNPACK_LOD(x: f32)->f32 {return (1.0-x)*255.0;}
fn getLodFromAlphaGNdotV(cubeMapDimensionPixels: f32,alphaG: f32,NdotV: f32)->f32 {var microsurfaceAverageSlope: f32=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrIBLFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/prePassDeclaration.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prePassDeclarationWGSL: () => (/* binding */ prePassDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "prePassDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying vNormViewDepth: f32;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const prePassDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   samplerFragmentDeclarationWGSL: () => (/* binding */ samplerFragmentDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "samplerFragmentDeclaration";
const shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying v_VARYINGNAME_UV: vec2f;
#endif
var _SAMPLERNAME_SamplerSampler: sampler;var _SAMPLERNAME_Sampler: texture_2d<f32>;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const samplerFragmentDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js":
/*!********************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subSurfaceScatteringFunctionsWGSL: () => (/* binding */ subSurfaceScatteringFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "subSurfaceScatteringFunctions";
const shader = `fn testLightingForSSS(diffusionProfile: f32)->bool
{return diffusionProfile<1.;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const subSurfaceScatteringFunctionsWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2RlcHRoUHJlUGFzc19qcy1jb3JlX2Rpc3RfU2hhZGVyc1dHU0xfU2hhZGVyc0luY2x1ZGVfaGRyLWVmZDg4ZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9kZXB0aFByZVBhc3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9oZHJGaWx0ZXJpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9pbXBvcnRhbmNlU2FtcGxpbmcudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9vaXREZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29pdEZyYWdtZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tJbWFnZVByb2Nlc3NpbmcudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja05vcm1hbEdlb21ldHJpYy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUHJlUGFzcy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickJsb2NrUmVmbGVjdGFuY2UwLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcGJyRGVidWcudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ0ZhbGxvZmZGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ0Z1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3BickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJIZWxwZXJGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wYnJJQkxGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyRnJhZ21lbnREZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL3N1YlN1cmZhY2VTY2F0dGVyaW5nRnVuY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJkZXB0aFByZVBhc3NcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgREVQVEhQUkVQQVNTXG5mcmFnbWVudE91dHB1dHMuY29sb3I9IHZlYzRmKDAuLDAuLDAuLDEuMCk7cmV0dXJuIGZyYWdtZW50T3V0cHV0cztcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGRlcHRoUHJlUGFzc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImhkckZpbHRlcmluZ0Z1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBOVU1fU0FNUExFU1xuI2lmIE5VTV9TQU1QTEVTPjBcbmZuIHJhZGljYWxJbnZlcnNlX1ZkQyh2YWx1ZTogdTMyKS0+ZjMyIFxue3ZhciBiaXRzPSh2YWx1ZTw8MTZ1KSB8ICh2YWx1ZT4+MTZ1KTtiaXRzPSgoYml0cyAmIDB4NTU1NTU1NTV1KTw8MXUpIHwgKChiaXRzICYgMHhBQUFBQUFBQXUpPj4xdSk7Yml0cz0oKGJpdHMgJiAweDMzMzMzMzMzdSk8PDJ1KSB8ICgoYml0cyAmIDB4Q0NDQ0NDQ0N1KT4+MnUpO2JpdHM9KChiaXRzICYgMHgwRjBGMEYwRnUpPDw0dSkgfCAoKGJpdHMgJiAweEYwRjBGMEYwdSk+PjR1KTtiaXRzPSgoYml0cyAmIDB4MDBGRjAwRkZ1KTw8OHUpIHwgKChiaXRzICYgMHhGRjAwRkYwMHUpPj44dSk7cmV0dXJuIGYzMihiaXRzKSoyLjMyODMwNjQzNjUzODY5NjNlLTEwOyB9XG5mbiBoYW1tZXJzbGV5KGk6IHUzMixOOiB1MzIpLT52ZWMyZlxue3JldHVybiB2ZWMyZiggZjMyKGkpLyBmMzIoTikscmFkaWNhbEludmVyc2VfVmRDKGkpKTt9XG5mbiBsb2c0KHg6IGYzMiktPmYzMiB7cmV0dXJuIGxvZzIoeCkvMi47fVxuZm4gdXZfdG9fbm9ybWFsKHV2OiB2ZWMyZiktPnZlYzNmIHt2YXIgTjogdmVjM2Y7dmFyIHV2UmFuZ2U6IHZlYzJmPXV2O3ZhciB0aGV0YTogZjMyPXV2UmFuZ2UueCoyLjAqUEk7dmFyIHBoaTogZjMyPXV2UmFuZ2UueSpQSTtOLng9Y29zKHRoZXRhKSpzaW4ocGhpKTtOLno9c2luKHRoZXRhKSpzaW4ocGhpKTtOLnk9Y29zKHBoaSk7cmV0dXJuIE47fVxuY29uc3QgTlVNX1NBTVBMRVNfRkxPQVQ6IGYzMj0gZjMyKE5VTV9TQU1QTEVTKTtjb25zdCBOVU1fU0FNUExFU19GTE9BVF9JTlZFUlNFRDogZjMyPTEuL05VTV9TQU1QTEVTX0ZMT0FUO2NvbnN0IEs6IGYzMj00LjtmbiBpcnJhZGlhbmNlKFxuI2lmZGVmIENVU1RPTV9JUlJBRElBTkNFX0ZJTFRFUklOR19JTlBVVFxuQ1VTVE9NX0lSUkFESUFOQ0VfRklMVEVSSU5HX0lOUFVUXG4jZWxzZVxuaW5wdXRUZXh0dXJlOiB0ZXh0dXJlX2N1YmU8ZjMyPixpbnB1dFNhbXBsZXI6IHNhbXBsZXIsXG4jZW5kaWZcbmlucHV0TjogdmVjM2YsXG5maWx0ZXJpbmdJbmZvOiB2ZWMyZixcbmRpZmZ1c2VSb3VnaG5lc3M6IGYzMixcbnN1cmZhY2VBbGJlZG86IHZlYzNmLFxuaW5wdXRWOiB2ZWMzZlxuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG4saWNkZlNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPixpY2RmU2FtcGxlclNhbXBsZXI6IHNhbXBsZXJcbiNlbmRpZlxuKS0+dmVjM2Zcbnt2YXIgbjogdmVjM2Y9bm9ybWFsaXplKGlucHV0Tik7dmFyIHJlc3VsdDogdmVjM2Y9IHZlYzNmKDAuMCk7XG4jaWZuZGVmIElCTF9DREZfRklMVEVSSU5HXG52YXIgdGFuZ2VudDogdmVjM2Y9c2VsZWN0KHZlYzNmKDEuLDAuLDAuKSx2ZWMzZigwLiwwLiwxLiksYWJzKG4ueik8MC45OTkpO3RhbmdlbnQ9bm9ybWFsaXplKGNyb3NzKHRhbmdlbnQsbikpO3ZhciBiaXRhbmdlbnQ6IHZlYzNmPWNyb3NzKG4sdGFuZ2VudCk7dmFyIHRibjogbWF0M3gzZj0gbWF0M3gzZih0YW5nZW50LGJpdGFuZ2VudCxuKTt2YXIgdGJuSW52ZXJzZTogbWF0M3gzZj10cmFuc3Bvc2UodGJuKTtcbiNlbmRpZlxudmFyIG1heExldmVsOiBmMzI9ZmlsdGVyaW5nSW5mby55O3ZhciBkaW0wOiBmMzI9ZmlsdGVyaW5nSW5mby54O3ZhciBvbWVnYVA6IGYzMj0oNC4qUEkpLyg2LipkaW0wKmRpbTApO3ZhciBjbGFtcGVkQWxiZWRvOiB2ZWMzZj1jbGFtcChzdXJmYWNlQWxiZWRvLHZlYzNmKDAuMSksdmVjM2YoMS4wKSk7Zm9yKHZhciBpOiB1MzI9MHU7IGk8TlVNX1NBTVBMRVM7IGkrKylcbnt2YXIgWGk6IHZlYzJmPWhhbW1lcnNsZXkoaSxOVU1fU0FNUExFUyk7XG4jaWZkZWYgSUJMX0NERl9GSUxURVJJTkdcbnZhciBUOiB2ZWMyZjtULng9dGV4dHVyZVNhbXBsZUxldmVsKGljZGZTYW1wbGVyLGljZGZTYW1wbGVyU2FtcGxlcix2ZWMyKFhpLngsMC4wKSwwLjApLng7VC55PXRleHR1cmVTYW1wbGVMZXZlbChpY2RmU2FtcGxlcixpY2RmU2FtcGxlclNhbXBsZXIsdmVjMihULngsWGkueSksMC4wKS55O3ZhciBMczogdmVjM2Y9dXZfdG9fbm9ybWFsKHZlYzJmKDEuMC1mcmFjdChULngrMC4yNSksVC55KSk7dmFyIE5vTDogZjMyPWRvdChuLExzKTt2YXIgTm9WOiBmMzI9ZG90KG4saW5wdXRWKTtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbnZhciBMb1Y6IGYzMj1kb3QoTHMsaW5wdXRWKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxudmFyIEg6IHZlYzNmPShpbnB1dFYrTHMpKjAuNTt2YXIgVm9IOiBmMzI9ZG90KGlucHV0VixIKTtcbiNlbmRpZiBcbiNlbHNlXG52YXIgTHM6IHZlYzNmPWhlbWlzcGhlcmVDb3NTYW1wbGUoWGkpO0xzPW5vcm1hbGl6ZShMcyk7dmFyIE5zOiB2ZWMzZj0gdmVjM2YoMC4sMC4sMS4pO3ZhciBOb0w6IGYzMj1kb3QoTnMsTHMpO3ZhciBWOiB2ZWMzZj10Ym5JbnZlcnNlKmlucHV0Vjt2YXIgTm9WOiBmMzI9ZG90KE5zLFYpO1xuI2lmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0VPTlxudmFyIExvVjogZjMyPWRvdChMcyxWKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxudmFyIEg6IHZlYzNmPShWK0xzKSowLjU7dmFyIFZvSDogZjMyPWRvdChWLEgpO1xuI2VuZGlmXG4jZW5kaWZcbmlmIChOb0w+MC4pIHtcbiNpZmRlZiBJQkxfQ0RGX0ZJTFRFUklOR1xudmFyIHBkZjogZjMyPXRleHR1cmVTYW1wbGVMZXZlbChpY2RmU2FtcGxlcixpY2RmU2FtcGxlclNhbXBsZXIsVCwwLjApLno7dmFyIGM6IHZlYzNmPXRleHR1cmVTYW1wbGVMZXZlbChpbnB1dFRleHR1cmUsaW5wdXRTYW1wbGVyLExzLDAuMCkucmdiO1xuI2Vsc2VcbnZhciBwZGZfaW52ZXJzZWQ6IGYzMj1QSS9Ob0w7dmFyIG9tZWdhUzogZjMyPU5VTV9TQU1QTEVTX0ZMT0FUX0lOVkVSU0VEKnBkZl9pbnZlcnNlZDt2YXIgbDogZjMyPWxvZzQob21lZ2FTKS1sb2c0KG9tZWdhUCkrbG9nNChLKTt2YXIgbWlwTGV2ZWw6IGYzMj1jbGFtcChsLDAuMCxtYXhMZXZlbCk7XG4jaWZkZWYgQ1VTVE9NX0lSUkFESUFOQ0VfRklMVEVSSU5HX0ZVTkNUSU9OXG5DVVNUT01fSVJSQURJQU5DRV9GSUxURVJJTkdfRlVOQ1RJT05cbiNlbHNlXG52YXIgYzogdmVjM2Y9dGV4dHVyZVNhbXBsZUxldmVsKGlucHV0VGV4dHVyZSxpbnB1dFNhbXBsZXIsdGJuKkxzLG1pcExldmVsKS5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEdBTU1BX0lOUFVUXG5jPXRvTGluZWFyU3BhY2VWZWMzKGMpO1xuI2VuZGlmXG52YXIgZGlmZnVzZVJvdWdobmVzc1Rlcm06IHZlYzNmPXZlYzNmKDEuMCk7XG4jaWYgQkFTRV9ESUZGVVNFX01PREVMPT1CUkRGX0RJRkZVU0VfTU9ERUxfRU9OXG5kaWZmdXNlUm91Z2huZXNzVGVybT1kaWZmdXNlQlJERl9FT04oY2xhbXBlZEFsYmVkbyxkaWZmdXNlUm91Z2huZXNzLE5vTCxOb1YsTG9WKSpQSTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxuZGlmZnVzZVJvdWdobmVzc1Rlcm09dmVjM2YoZGlmZnVzZUJSREZfQnVybGV5KE5vTCxOb1YsVm9ILGRpZmZ1c2VSb3VnaG5lc3MpKlBJKTtcbiNlbmRpZlxuI2lmZGVmIElCTF9DREZfRklMVEVSSU5HXG52YXIgbGlnaHQ6IHZlYzNmPXZlYzNmKDAuMCk7aWYgKHBkZj4xZS02KSB7bGlnaHQ9dmVjM2YoMS4wKS92ZWMzZihwZGYpKmM7fVxucmVzdWx0Kz1Ob0wqZGlmZnVzZVJvdWdobmVzc1Rlcm0qbGlnaHQ7XG4jZWxzZVxucmVzdWx0Kz1jKmRpZmZ1c2VSb3VnaG5lc3NUZXJtO1xuI2VuZGlmXG59fVxucmVzdWx0PXJlc3VsdCpOVU1fU0FNUExFU19GTE9BVF9JTlZFUlNFRDtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbnJlc3VsdD1yZXN1bHQvY2xhbXBlZEFsYmVkbztcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG5mbiByYWRpYW5jZShhbHBoYUc6IGYzMixpbnB1dFRleHR1cmU6IHRleHR1cmVfY3ViZTxmMzI+LGlucHV0U2FtcGxlcjogc2FtcGxlcixpbnB1dE46IHZlYzNmLGZpbHRlcmluZ0luZm86IHZlYzJmKS0+dmVjM2Zcbnt2YXIgbjogdmVjM2Y9bm9ybWFsaXplKGlucHV0Tik7dmFyIGM6IHZlYzNmPXRleHR1cmVTYW1wbGUoaW5wdXRUZXh0dXJlLGlucHV0U2FtcGxlcixuKS5yZ2I7IFxuaWYgKGFscGhhRz09MC4pIHtcbiNpZmRlZiBHQU1NQV9JTlBVVFxuYz10b0xpbmVhclNwYWNlKGMpO1xuI2VuZGlmXG5yZXR1cm4gYzt9IGVsc2Uge3ZhciByZXN1bHQ6IHZlYzNmPSB2ZWMzZigwLik7dmFyIHRhbmdlbnQ6IHZlYzNmPXNlbGVjdCh2ZWMzZigxLiwwLiwwLiksdmVjM2YoMC4sMC4sMS4pLGFicyhuLnopPDAuOTk5KTt0YW5nZW50PW5vcm1hbGl6ZShjcm9zcyh0YW5nZW50LG4pKTt2YXIgYml0YW5nZW50OiB2ZWMzZj1jcm9zcyhuLHRhbmdlbnQpO3ZhciB0Ym46IG1hdDN4M2Y9IG1hdDN4M2YodGFuZ2VudCxiaXRhbmdlbnQsbik7dmFyIG1heExldmVsOiBmMzI9ZmlsdGVyaW5nSW5mby55O3ZhciBkaW0wOiBmMzI9ZmlsdGVyaW5nSW5mby54O3ZhciBvbWVnYVA6IGYzMj0oNC4qUEkpLyg2LipkaW0wKmRpbTApO3ZhciB3ZWlnaHQ6IGYzMj0wLjtmb3IodmFyIGk6IHUzMj0wdTsgaTxOVU1fU0FNUExFUzsgaSsrKVxue3ZhciBYaTogdmVjMmY9aGFtbWVyc2xleShpLE5VTV9TQU1QTEVTKTt2YXIgSDogdmVjM2Y9aGVtaXNwaGVyZUltcG9ydGFuY2VTYW1wbGVEZ2d4KFhpLGFscGhhRyk7dmFyIE5vVjogZjMyPTEuO3ZhciBOb0g6IGYzMj1ILno7dmFyIE5vSDI6IGYzMj1ILnoqSC56O3ZhciBOb0w6IGYzMj0yLipOb0gyLTEuO3ZhciBMOiB2ZWMzZj0gdmVjM2YoMi4qTm9IKkgueCwyLipOb0gqSC55LE5vTCk7TD1ub3JtYWxpemUoTCk7aWYgKE5vTD4wLikge3ZhciBwZGZfaW52ZXJzZWQ6IGYzMj00Li9ub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9Ucm93YnJpZGdlUmVpdHpHR1goTm9ILGFscGhhRyk7dmFyIG9tZWdhUzogZjMyPU5VTV9TQU1QTEVTX0ZMT0FUX0lOVkVSU0VEKnBkZl9pbnZlcnNlZDt2YXIgbDogZjMyPWxvZzQob21lZ2FTKS1sb2c0KG9tZWdhUCkrbG9nNChLKTt2YXIgbWlwTGV2ZWw6IGYzMj1jbGFtcCggZjMyKGwpLDAuMCxtYXhMZXZlbCk7d2VpZ2h0Kz1Ob0w7dmFyIGM6IHZlYzNmPXRleHR1cmVTYW1wbGVMZXZlbChpbnB1dFRleHR1cmUsaW5wdXRTYW1wbGVyLHRibipMLG1pcExldmVsKS5yZ2I7XG4jaWZkZWYgR0FNTUFfSU5QVVRcbmM9dG9MaW5lYXJTcGFjZShjKTtcbiNlbmRpZlxucmVzdWx0Kz1jKk5vTDt9fVxucmVzdWx0PXJlc3VsdC93ZWlnaHQ7cmV0dXJuIHJlc3VsdDt9fVxuI2lmZGVmIEFOSVNPVFJPUElDXG5mbiByYWRpYW5jZUFuaXNvdHJvcGljKFxuYWxwaGFUYW5nZW50OiBmMzIsIFxuYWxwaGFCaXRhbmdlbnQ6IGYzMiwgXG5pbnB1dFRleHR1cmU6IHRleHR1cmVfY3ViZTxmMzI+LFxuaW5wdXRTYW1wbGVyOiBzYW1wbGVyLFxuaW5wdXRWaWV3OiB2ZWMzZiwgXG5pbnB1dFRhbmdlbnQ6IHZlYzNmLCBcbmlucHV0Qml0YW5nZW50OiB2ZWMzZiwgXG5pbnB1dE5vcm1hbDogdmVjM2YsIFxuZmlsdGVyaW5nSW5mbzogdmVjMmYsXG5ub2lzZUlucHV0OiB2ZWMyZiBcbiktPnZlYzNmIHt2YXIgVjogdmVjM2Y9aW5wdXRWaWV3O3ZhciBOOiB2ZWMzZj1pbnB1dE5vcm1hbDt2YXIgVDogdmVjM2Y9aW5wdXRUYW5nZW50O3ZhciBCOiB2ZWMzZj1pbnB1dEJpdGFuZ2VudDt2YXIgUjogdmVjM2Y9cmVmbGVjdCgtVixOKTt2YXIgYzogdmVjM2Y9dGV4dHVyZVNhbXBsZShpbnB1dFRleHR1cmUsaW5wdXRTYW1wbGVyLFIpLnJnYjtpZiAoYWxwaGFUYW5nZW50PT0wLmYgJiYgYWxwaGFCaXRhbmdlbnQ9PTAuZikge1xuI2lmIEdBTU1BX0lOUFVUXG5jPXRvTGluZWFyU3BhY2UoYyk7XG4jZW5kaWZcbnJldHVybiBjO31cbnZhciByZXN1bHQ6IHZlYzNmPXZlYzNmKDAuZik7dmFyIG1heExldmVsOiBmMzI9ZmlsdGVyaW5nSW5mby55O3ZhciBkaW0wOiBmMzI9ZmlsdGVyaW5nSW5mby54O3ZhciBlZmZlY3RpdmVEaW06IGYzMj1kaW0wKnNxcnQoYWxwaGFUYW5nZW50KmFscGhhQml0YW5nZW50KTt2YXIgb21lZ2FQOiBmMzI9KDQuZipQSSkvKDYuZiplZmZlY3RpdmVEaW0qZWZmZWN0aXZlRGltKTtsZXQgbm9pc2VTY2FsZTogZjMyPWNsYW1wKGxvZzIoZjMyKE5VTV9TQU1QTEVTKSkvMTIuMGYsMC4wZiwxLjBmKTt2YXIgd2VpZ2h0OiBmMzI9MC5mO2Zvcih2YXIgaTogdTMyPTB1OyBpPE5VTV9TQU1QTEVTOyBpKyspXG57dmFyIFhpOiB2ZWMyZj1oYW1tZXJzbGV5KGksTlVNX1NBTVBMRVMpO1hpPWZyYWN0KFhpK25vaXNlSW5wdXQqbWl4KDAuNWYsMC4wMTVmLG5vaXNlU2NhbGUpKTsgXG52YXIgSF90YW5nZW50OiB2ZWMzZj1oZW1pc3BoZXJlSW1wb3J0YW5jZVNhbXBsZURnZ3hBbmlzb3Ryb3BpYyhYaSxhbHBoYVRhbmdlbnQsYWxwaGFCaXRhbmdlbnQpO3ZhciBIOiB2ZWMzZj1ub3JtYWxpemUoSF90YW5nZW50LngqVCtIX3RhbmdlbnQueSpCK0hfdGFuZ2VudC56Kk4pO3ZhciBMOiB2ZWMzZj1ub3JtYWxpemUoMi4wZipkb3QoVixIKSpILVYpO3ZhciBOb0g6IGYzMj1tYXgoZG90KE4sSCksMC4wMDFmKTt2YXIgVm9IOiBmMzI9bWF4KGRvdChWLEgpLDAuMDAxZik7dmFyIE5vTDogZjMyPW1heChkb3QoTixMKSwwLjAwMWYpO2lmIChOb0w+MC5mKSB7dmFyIHBkZl9pbnZlcnNlZDogZjMyPTQuL25vcm1hbERpc3RyaWJ1dGlvbkZ1bmN0aW9uX0J1cmxleUdHWF9Bbmlzb3Ryb3BpYyhcbkhfdGFuZ2VudC56LEhfdGFuZ2VudC54LEhfdGFuZ2VudC55LHZlYzIoYWxwaGFUYW5nZW50LGFscGhhQml0YW5nZW50KVxuKTt2YXIgb21lZ2FTOiBmMzI9TlVNX1NBTVBMRVNfRkxPQVRfSU5WRVJTRUQqcGRmX2ludmVyc2VkO3ZhciBsOiBmMzI9bG9nNChvbWVnYVMpLWxvZzQob21lZ2FQKStsb2c0KEspO3ZhciBtaXBMZXZlbDogZjMyPWNsYW1wKGwsMC4wZixtYXhMZXZlbCk7d2VpZ2h0Kz1Ob0w7dmFyIGM6IHZlYzNmPXRleHR1cmVTYW1wbGVMZXZlbChpbnB1dFRleHR1cmUsaW5wdXRTYW1wbGVyLEwsbWlwTGV2ZWwpLnJnYjtcbiNpZiBHQU1NQV9JTlBVVFxuYz10b0xpbmVhclNwYWNlKGMpO1xuI2VuZGlmXG5yZXN1bHQrPWMqTm9MO319XG5yZXN1bHQ9cmVzdWx0L3dlaWdodDtyZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBoZHJGaWx0ZXJpbmdGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJpbXBvcnRhbmNlU2FtcGxpbmdcIjtcbmNvbnN0IHNoYWRlciA9IGBmbiBoZW1pc3BoZXJlQ29zU2FtcGxlKHU6IHZlYzJmKS0+dmVjM2Yge3ZhciBwaGk6IGYzMj0yLipQSSp1Lng7dmFyIGNvc1RoZXRhMjogZjMyPTEuLXUueTt2YXIgY29zVGhldGE6IGYzMj1zcXJ0KGNvc1RoZXRhMik7dmFyIHNpblRoZXRhOiBmMzI9c3FydCgxLi1jb3NUaGV0YTIpO3JldHVybiB2ZWMzZihzaW5UaGV0YSpjb3MocGhpKSxzaW5UaGV0YSpzaW4ocGhpKSxjb3NUaGV0YSk7fVxuZm4gaGVtaXNwaGVyZUltcG9ydGFuY2VTYW1wbGVEZ2d4KHU6IHZlYzJmLGE6IGYzMiktPnZlYzNmIHt2YXIgcGhpOiBmMzI9Mi4qUEkqdS54O3ZhciBjb3NUaGV0YTI6IGYzMj0oMS4tdS55KS8oMS4rKGErMS4pKigoYS0xLikqdS55KSk7dmFyIGNvc1RoZXRhOiBmMzI9c3FydChjb3NUaGV0YTIpO3ZhciBzaW5UaGV0YTogZjMyPXNxcnQoMS4tY29zVGhldGEyKTtyZXR1cm4gdmVjM2Yoc2luVGhldGEqY29zKHBoaSksc2luVGhldGEqc2luKHBoaSksY29zVGhldGEpO31cbmZuIGhlbWlzcGhlcmVJbXBvcnRhbmNlU2FtcGxlRGdneEFuaXNvdHJvcGljKFhpOiB2ZWMyZixhbHBoYVRhbmdlbnQ6IGYzMixhbHBoYUJpdGFuZ2VudDogZjMyKS0+dmVjM2ZcbntsZXQgYWxwaGFUOiBmMzI9bWF4KGFscGhhVGFuZ2VudCwwLjAwMDEpO2xldCBhbHBoYUI6IGYzMj1tYXgoYWxwaGFCaXRhbmdlbnQsMC4wMDAxKTt2YXIgcGhpOiBmMzI9YXRhbihhbHBoYUIvYWxwaGFUKnRhbigyLjBmKlBJKlhpLngpKTtpZiAoWGkueD4wLjUpIHtwaGkrPVBJOyB9XG5sZXQgY29zUGhpOiBmMzI9Y29zKHBoaSk7bGV0IHNpblBoaTogZjMyPXNpbihwaGkpO2xldCBhbHBoYTI6IGYzMj0oY29zUGhpKmNvc1BoaSkvKGFscGhhVGFuZ2VudCphbHBoYVRhbmdlbnQpICtcbihzaW5QaGkqc2luUGhpKS8oYWxwaGFCKmFscGhhQik7bGV0IHRhblRoZXRhMjogZjMyPVhpLnkvKDEuMGYtWGkueSkvYWxwaGEyO2xldCBjb3NUaGV0YTogZjMyPTEuMGYvc3FydCgxLjBmK3RhblRoZXRhMik7bGV0IHNpblRoZXRhOiBmMzI9c3FydChtYXgoMC4wZiwxLjBmLWNvc1RoZXRhKmNvc1RoZXRhKSk7cmV0dXJuIHZlYzNmKHNpblRoZXRhKmNvc1BoaSxzaW5UaGV0YSpzaW5QaGksY29zVGhldGEpO31cbmZuIGhlbWlzcGhlcmVJbXBvcnRhbmNlU2FtcGxlRENoYXJsaWUodTogdmVjMmYsYTogZjMyKS0+dmVjM2YgeyBcbnZhciBwaGk6IGYzMj0yLipQSSp1Lng7dmFyIHNpblRoZXRhOiBmMzI9cG93KHUueSxhLygyLiphKzEuKSk7dmFyIGNvc1RoZXRhOiBmMzI9c3FydCgxLi1zaW5UaGV0YSpzaW5UaGV0YSk7cmV0dXJuIHZlYzNmKHNpblRoZXRhKmNvcyhwaGkpLHNpblRoZXRhKnNpbihwaGkpLGNvc1RoZXRhKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGltcG9ydGFuY2VTYW1wbGluZ1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9pdERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxuI2RlZmluZSBNQVhfREVQVEggOTk5OTkuMFxudmFyIG9pdERlcHRoU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIG9pdERlcHRoU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O3ZhciBvaXRGcm9udENvbG9yU2FtcGxlclNhbXBsZXI6IHNhbXBsZXI7dmFyIG9pdEZyb250Q29sb3JTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvaXREZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9pdEZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWVxudmFyIGZyYWdEZXB0aDogZjMyPWZyYWdtZW50SW5wdXRzLnBvc2l0aW9uLno7IFxuI2lmZGVmIE9SREVSX0lOREVQRU5ERU5UX1RSQU5TUEFSRU5DWV8xNkJJVFNcbnZhciBoYWxmRmxvYXQ6IHUzMj1wYWNrMngxNmZsb2F0KCB2ZWMyZihmcmFnRGVwdGgpKTt2YXIgZnVsbDogdmVjMmY9dW5wYWNrMngxNmZsb2F0KGhhbGZGbG9hdCk7ZnJhZ0RlcHRoPWZ1bGwueDtcbiNlbmRpZlxudmFyIGZyYWdDb29yZDogdmVjMmk9dmVjMmkoZnJhZ21lbnRJbnB1dHMucG9zaXRpb24ueHkpO3ZhciBsYXN0RGVwdGg6IHZlYzJmPXRleHR1cmVMb2FkKG9pdERlcHRoU2FtcGxlcixmcmFnQ29vcmQsMCkucmc7dmFyIGxhc3RGcm9udENvbG9yOiB2ZWM0Zj10ZXh0dXJlTG9hZChvaXRGcm9udENvbG9yU2FtcGxlcixmcmFnQ29vcmQsMCk7ZnJhZ21lbnRPdXRwdXRzLmRlcHRoPXZlYzJmKC1NQVhfREVQVEgpO2ZyYWdtZW50T3V0cHV0cy5mcm9udENvbG9yPWxhc3RGcm9udENvbG9yO2ZyYWdtZW50T3V0cHV0cy5iYWNrQ29sb3I9IHZlYzRmKDAuMCk7XG4jaWZkZWYgVVNFX1JFVkVSU0VfREVQVEhCVUZGRVJcbnZhciBmdXJ0aGVzdERlcHRoOiBmMzI9LWxhc3REZXB0aC54O3ZhciBuZWFyZXN0RGVwdGg6IGYzMj1sYXN0RGVwdGgueTtcbiNlbHNlXG52YXIgbmVhcmVzdERlcHRoOiBmMzI9LWxhc3REZXB0aC54O3ZhciBmdXJ0aGVzdERlcHRoOiBmMzI9bGFzdERlcHRoLnk7XG4jZW5kaWZcbnZhciBhbHBoYU11bHRpcGxpZXI6IGYzMj0xLjAtbGFzdEZyb250Q29sb3IuYTtcbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuaWYgKGZyYWdEZXB0aD5uZWFyZXN0RGVwdGggfHwgZnJhZ0RlcHRoPGZ1cnRoZXN0RGVwdGgpIHtcbiNlbHNlXG5pZiAoZnJhZ0RlcHRoPG5lYXJlc3REZXB0aCB8fCBmcmFnRGVwdGg+ZnVydGhlc3REZXB0aCkge1xuI2VuZGlmXG5yZXR1cm4gZnJhZ21lbnRPdXRwdXRzO31cbiNpZmRlZiBVU0VfUkVWRVJTRV9ERVBUSEJVRkZFUlxuaWYgKGZyYWdEZXB0aDxuZWFyZXN0RGVwdGggJiYgZnJhZ0RlcHRoPmZ1cnRoZXN0RGVwdGgpIHtcbiNlbHNlXG5pZiAoZnJhZ0RlcHRoPm5lYXJlc3REZXB0aCAmJiBmcmFnRGVwdGg8ZnVydGhlc3REZXB0aCkge1xuI2VuZGlmXG5mcmFnbWVudE91dHB1dHMuZGVwdGg9dmVjMmYoLWZyYWdEZXB0aCxmcmFnRGVwdGgpO3JldHVybiBmcmFnbWVudE91dHB1dHM7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb2l0RnJhZ21lbnRXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0ltYWdlUHJvY2Vzc2luZ1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKElNQUdFUFJPQ0VTU0lOR1BPU1RQUk9DRVNTKSB8fCBkZWZpbmVkKFNTX1NDQVRURVJJTkcpXG4jaWYgIWRlZmluZWQoU0tJUEZJTkFMQ09MT1JDTEFNUClcbmZpbmFsQ29sb3I9dmVjNGYoY2xhbXAoZmluYWxDb2xvci5yZ2IsdmVjM2YoMC4pLHZlYzNmKDMwLjApKSxmaW5hbENvbG9yLmEpO1xuI2VuZGlmXG4jZWxzZVxuZmluYWxDb2xvcj1hcHBseUltYWdlUHJvY2Vzc2luZyhmaW5hbENvbG9yKTtcbiNlbmRpZlxuZmluYWxDb2xvcj12ZWM0ZihmaW5hbENvbG9yLnJnYixmaW5hbENvbG9yLmEqbWVzaC52aXNpYmlsaXR5KTtcbiNpZmRlZiBQUkVNVUxUSVBMWUFMUEhBXG5maW5hbENvbG9yPXZlYzRmKGZpbmFsQ29sb3IucmdiKmZpbmFsQ29sb3IuYSxmaW5hbENvbG9yLmEpOztcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrSW1hZ2VQcm9jZXNzaW5nV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tOb3JtYWxHZW9tZXRyaWNcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgdmlld0RpcmVjdGlvblc6IHZlYzNmPW5vcm1hbGl6ZShzY2VuZS52RXllUG9zaXRpb24ueHl6LWlucHV0LnZQb3NpdGlvblcpO1xuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFc6IHZlYzNmPW5vcm1hbGl6ZShpbnB1dC52Tm9ybWFsVyk7XG4jZWxzZVxudmFyIG5vcm1hbFc6IHZlYzNmPW5vcm1hbGl6ZShjcm9zcyhkcGR4KGlucHV0LnZQb3NpdGlvblcpLGRwZHkoaW5wdXQudlBvc2l0aW9uVykpKSpzY2VuZS52RXllUG9zaXRpb24udztcbiNlbmRpZlxudmFyIGdlb21ldHJpY05vcm1hbFc6IHZlYzNmPW5vcm1hbFc7XG4jaWYgZGVmaW5lZChUV09TSURFRExJR0hUSU5HKSAmJiBkZWZpbmVkKE5PUk1BTClcbmdlb21ldHJpY05vcm1hbFc9c2VsZWN0KC1nZW9tZXRyaWNOb3JtYWxXLGdlb21ldHJpY05vcm1hbFcsZnJhZ21lbnRJbnB1dHMuZnJvbnRGYWNpbmcpO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tOb3JtYWxHZW9tZXRyaWNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja1ByZVBhc3NcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgU0NFTkVfTVJUX0NPVU5UPjBcbnZhciB3cml0ZUdlb21ldHJ5SW5mbzogZjMyPXNlbGVjdCgwLjAsMS4wLGZpbmFsQ29sb3IuYT5BTFBIQVRFU1RWQUxVRSk7dmFyIGZyYWdEYXRhOiBhcnJheTx2ZWM0PGYzMj4sU0NFTkVfTVJUX0NPVU5UPjtcbiNpZmRlZiBQUkVQQVNTX1BPU0lUSU9OXG5mcmFnRGF0YVtQUkVQQVNTX1BPU0lUSU9OX0lOREVYXT0gdmVjNGYoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OXG5mcmFnRGF0YVtQUkVQQVNTX0xPQ0FMX1BPU0lUSU9OX0lOREVYXT12ZWM0ZihmcmFnbWVudElucHV0cy52UG9zaXRpb24sd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19WRUxPQ0lUWVxudmFyIGE6IHZlYzJmPShmcmFnbWVudElucHV0cy52Q3VycmVudFBvc2l0aW9uLnh5L2ZyYWdtZW50SW5wdXRzLnZDdXJyZW50UG9zaXRpb24udykqMC41KzAuNTt2YXIgYjogdmVjMmY9KGZyYWdtZW50SW5wdXRzLnZQcmV2aW91c1Bvc2l0aW9uLnh5L2ZyYWdtZW50SW5wdXRzLnZQcmV2aW91c1Bvc2l0aW9uLncpKjAuNSswLjU7dmFyIHZlbG9jaXR5OiB2ZWMyZj1hYnMoYS1iKTt2ZWxvY2l0eT0gdmVjMmYocG93KHZlbG9jaXR5LngsMS4wLzMuMCkscG93KHZlbG9jaXR5LnksMS4wLzMuMCkpKnNpZ24oYS1iKSowLjUrMC41O2ZyYWdEYXRhW1BSRVBBU1NfVkVMT0NJVFlfSU5ERVhdPSB2ZWM0Zih2ZWxvY2l0eSwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VsaWYgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUilcbnZhciB2ZWxvY2l0eSA6IHZlYzJmPXZlYzJmKDAuNSkqKChmcmFnbWVudElucHV0cy52UHJldmlvdXNQb3NpdGlvbi54eS9mcmFnbWVudElucHV0cy52UHJldmlvdXNQb3NpdGlvbi53KSAtXG4oZnJhZ21lbnRJbnB1dHMudkN1cnJlbnRQb3NpdGlvbi54eS9mcmFnbWVudElucHV0cy52Q3VycmVudFBvc2l0aW9uLncpKTtmcmFnRGF0YVtQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUl9JTkRFWF09dmVjNGYodmVsb2NpdHksMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfQUxCRURPXG5mcmFnRGF0YVtQUkVQQVNTX0FMQkVET19JTkRFWF09dmVjNGYoc3VyZmFjZUFsYmVkbyx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0FMQkVET19TUVJUXG52YXIgc3FBbGJlZG8gOiB2ZWMzZj1zcXJ0KHN1cmZhY2VBbGJlZG8pOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfSVJSQURJQU5DRVxudmFyIGlycmFkaWFuY2UgOiB2ZWMzZj1maW5hbERpZmZ1c2U7XG4jaWZuZGVmIFVOTElUXG4jaWZkZWYgUkVGTEVDVElPTlxuaXJyYWRpYW5jZSs9ZmluYWxJcnJhZGlhbmNlO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTU19TQ0FUVEVSSU5HXG4jaWZkZWYgUFJFUEFTU19DT0xPUlxuZnJhZ0RhdGFbUFJFUEFTU19DT0xPUl9JTkRFWF09dmVjNGYoZmluYWxDb2xvci5yZ2ItaXJyYWRpYW5jZSxmaW5hbENvbG9yLmEpOyBcbiNlbmRpZlxuaXJyYWRpYW5jZS89c3FBbGJlZG87ZnJhZ0RhdGFbUFJFUEFTU19JUlJBRElBTkNFX0lOREVYXT12ZWM0ZihjbGFtcChpcnJhZGlhbmNlLHZlYzNmKDAuKSx2ZWMzZigxLikpLHdyaXRlR2VvbWV0cnlJbmZvKnVuaWZvcm1zLnNjYXR0ZXJpbmdEaWZmdXNpb25Qcm9maWxlLzI1NS4pOyBcbiNlbHNlXG4jaWZkZWYgUFJFUEFTU19DT0xPUlxuZnJhZ0RhdGFbUFJFUEFTU19DT0xPUl9JTkRFWF09ZmluYWxDb2xvcjsgXG4jZW5kaWZcbmZyYWdEYXRhW1BSRVBBU1NfSVJSQURJQU5DRV9JTkRFWF09dmVjNGYoY2xhbXAoaXJyYWRpYW5jZSx2ZWMzZigwLiksdmVjM2YoMS4pKSx3cml0ZUdlb21ldHJ5SW5mbyk7IFxuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFBSRVBBU1NfQ09MT1IpXG5mcmFnRGF0YVtQUkVQQVNTX0NPTE9SX0lOREVYXT12ZWM0ZihmaW5hbENvbG9yLnJnYixmaW5hbENvbG9yLmEpO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19ERVBUSFxuZnJhZ0RhdGFbUFJFUEFTU19ERVBUSF9JTkRFWF09dmVjNGYoZnJhZ21lbnRJbnB1dHMudlZpZXdQb3MueiwwLjAsMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTsgXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1NDUkVFTlNQQUNFX0RFUFRIXG5mcmFnRGF0YVtQUkVQQVNTX1NDUkVFTlNQQUNFX0RFUFRIX0lOREVYXT12ZWM0ZihmcmFnbWVudElucHV0cy5wb3NpdGlvbi56LDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhcbmZyYWdEYXRhW1BSRVBBU1NfTk9STUFMSVpFRF9WSUVXX0RFUFRIX0lOREVYXT12ZWM0ZihmcmFnbWVudElucHV0cy52Tm9ybVZpZXdEZXB0aCwwLjAsMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfTk9STUFMXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxfV09STERTUEFDRVxuZnJhZ0RhdGFbUFJFUEFTU19OT1JNQUxfSU5ERVhdPXZlYzRmKG5vcm1hbFcsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2Vsc2VcbmZyYWdEYXRhW1BSRVBBU1NfTk9STUFMX0lOREVYXT12ZWM0Zihub3JtYWxpemUoKHNjZW5lLnZpZXcqdmVjNGYobm9ybWFsVywwLjApKS5yZ2IpLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19XT1JMRF9OT1JNQUxcbmZyYWdEYXRhW1BSRVBBU1NfV09STERfTk9STUFMX0lOREVYXT12ZWM0Zihub3JtYWxXKjAuNSswLjUsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19BTEJFRE9fU1FSVFxuZnJhZ0RhdGFbUFJFUEFTU19BTEJFRE9fU1FSVF9JTkRFWF09dmVjNGYoc3FBbGJlZG8sd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19SRUZMRUNUSVZJVFlcbiNpZm5kZWYgVU5MSVRcbmZyYWdEYXRhW1BSRVBBU1NfUkVGTEVDVElWSVRZX0lOREVYXT12ZWM0ZihzcGVjdWxhckVudmlyb25tZW50UjAsbWljcm9TdXJmYWNlKSp3cml0ZUdlb21ldHJ5SW5mbztcbiNlbHNlXG5mcmFnRGF0YVtQUkVQQVNTX1JFRkxFQ1RJVklUWV9JTkRFWF09dmVjNGYoMC4wLDAuMCwwLjAsMS4wKSp3cml0ZUdlb21ldHJ5SW5mbztcbiNlbmRpZlxuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjBcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTA9ZnJhZ0RhdGFbMF07XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+MVxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhMT1mcmFnRGF0YVsxXTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD4yXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGEyPWZyYWdEYXRhWzJdO1xuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjNcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTM9ZnJhZ0RhdGFbM107XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+NFxuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhND1mcmFnRGF0YVs0XTtcbiNlbmRpZlxuI2lmIFNDRU5FX01SVF9DT1VOVD41XG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGE1PWZyYWdEYXRhWzVdO1xuI2VuZGlmXG4jaWYgU0NFTkVfTVJUX0NPVU5UPjZcbmZyYWdtZW50T3V0cHV0cy5mcmFnRGF0YTY9ZnJhZ0RhdGFbNl07XG4jZW5kaWZcbiNpZiBTQ0VORV9NUlRfQ09VTlQ+N1xuZnJhZ21lbnRPdXRwdXRzLmZyYWdEYXRhNz1mcmFnRGF0YVs3XTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tQcmVQYXNzV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyQmxvY2tSZWZsZWN0YW5jZTBcIjtcbmNvbnN0IHNoYWRlciA9IGB2YXIgcmVmbGVjdGFuY2VGMDogZjMyPXJlZmxlY3Rpdml0eU91dC5yZWZsZWN0YW5jZUYwO3ZhciBzcGVjdWxhckVudmlyb25tZW50UjA6IHZlYzNmPXJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjA7dmFyIHNwZWN1bGFyRW52aXJvbm1lbnRSOTA6IHZlYzNmPSByZWZsZWN0aXZpdHlPdXQucmVmbGVjdGFuY2VGOTA7XG4jaWZkZWYgQUxQSEFGUkVTTkVMXG52YXIgcmVmbGVjdGFuY2U5MDogZjMyPWZyZXNuZWxHcmF6aW5nUmVmbGVjdGFuY2UocmVmbGVjdGFuY2VGMCk7c3BlY3VsYXJFbnZpcm9ubWVudFI5MD1zcGVjdWxhckVudmlyb25tZW50UjkwKnJlZmxlY3RhbmNlOTA7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja1JlZmxlY3RhbmNlMFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickRlYnVnXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIERFQlVHTU9ERT4wXG5pZiAoaW5wdXQudkNsaXBTcGFjZVBvc2l0aW9uLngvaW5wdXQudkNsaXBTcGFjZVBvc2l0aW9uLnc+PXVuaWZvcm1zLnZEZWJ1Z01vZGUueCkge3ZhciBjb2xvcjogdmVjM2Y7XG4jaWYgREVCVUdNT0RFPT0xXG5jb2xvcj1mcmFnbWVudElucHV0cy52UG9zaXRpb25XLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT0yICYmIGRlZmluZWQoTk9STUFMKVxuY29sb3I9ZnJhZ21lbnRJbnB1dHMudk5vcm1hbFcucmdiO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTMgJiYgZGVmaW5lZChCVU1QKSB8fCBERUJVR01PREU9PTMgJiYgZGVmaW5lZChQQVJBTExBWCkgfHwgREVCVUdNT0RFPT0zICYmIGRlZmluZWQoQU5JU09UUk9QSUMpXG5jb2xvcj1UQk5bMF07XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09NCAmJiBkZWZpbmVkKEJVTVApIHx8IERFQlVHTU9ERT09NCAmJiBkZWZpbmVkKFBBUkFMTEFYKSB8fCBERUJVR01PREU9PTQgJiYgZGVmaW5lZChBTklTT1RST1BJQylcbmNvbG9yPVRCTlsxXTtcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT01XG5jb2xvcj1ub3JtYWxXO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTYgJiYgZGVmaW5lZChNQUlOVVYxKVxuY29sb3I9IHZlYzNmKGlucHV0LnZNYWluVVYxLDAuMCk7XG4jZWxpZiBERUJVR01PREU9PTcgJiYgZGVmaW5lZChNQUlOVVYyKVxuY29sb3I9IHZlYzNmKGlucHV0LnZNYWluVVYyLDAuMCk7XG4jZWxpZiBERUJVR01PREU9PTggJiYgZGVmaW5lZChDTEVBUkNPQVQpICYmIGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApXG5jb2xvcj1jbGVhcmNvYXRPdXQuVEJOQ2xlYXJDb2F0WzBdO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTkgJiYgZGVmaW5lZChDTEVBUkNPQVQpICYmIGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApXG5jb2xvcj1jbGVhcmNvYXRPdXQuVEJOQ2xlYXJDb2F0WzFdO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTEwICYmIGRlZmluZWQoQ0xFQVJDT0FUKVxuY29sb3I9Y2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5vcm1hbFc7XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09MTEgJiYgZGVmaW5lZChBTklTT1RST1BJQylcbmNvbG9yPWFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljTm9ybWFsO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTEyICYmIGRlZmluZWQoQU5JU09UUk9QSUMpXG5jb2xvcj1hbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY1RhbmdlbnQ7XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09MTMgJiYgZGVmaW5lZChBTklTT1RST1BJQylcbmNvbG9yPWFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljQml0YW5nZW50O1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTIwICYmIGRlZmluZWQoQUxCRURPKVxuY29sb3I9YWxiZWRvVGV4dHVyZS5yZ2I7XG4jaWZuZGVmIEdBTU1BQUxCRURPXG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VuZGlmXG4jZWxpZiBERUJVR01PREU9PTIxICYmIGRlZmluZWQoQU1CSUVOVClcbmNvbG9yPWFvT3V0LmFtYmllbnRPY2NsdXNpb25Db2xvck1hcC5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTIyICYmIGRlZmluZWQoT1BBQ0lUWSlcbmNvbG9yPW9wYWNpdHlNYXAucmdiO1xuI2VsaWYgREVCVUdNT0RFPT0yMyAmJiBkZWZpbmVkKEVNSVNTSVZFKVxuY29sb3I9ZW1pc3NpdmVDb2xvclRleC5yZ2I7XG4jaWZuZGVmIEdBTU1BRU1JU1NJVkVcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZW5kaWZcbiNlbGlmIERFQlVHTU9ERT09MjQgJiYgZGVmaW5lZChMSUdIVE1BUClcbmNvbG9yPWxpZ2h0bWFwQ29sb3I7XG4jaWZuZGVmIEdBTU1BTElHSFRNQVBcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZW5kaWZcbiNlbGlmIERFQlVHTU9ERT09MjUgJiYgZGVmaW5lZChSRUZMRUNUSVZJVFkpICYmIGRlZmluZWQoTUVUQUxMSUNXT1JLRkxPVylcbmNvbG9yPXJlZmxlY3Rpdml0eU91dC5zdXJmYWNlTWV0YWxsaWNDb2xvck1hcC5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTI2ICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiAhZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKVxuY29sb3I9cmVmbGVjdGl2aXR5T3V0LnN1cmZhY2VSZWZsZWN0aXZpdHlDb2xvck1hcC5yZ2I7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT0yNyAmJiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfVEVYVFVSRSlcbmNvbG9yPSB2ZWMzZihjbGVhcmNvYXRPdXQuY2xlYXJDb2F0TWFwRGF0YS5yZywwLjApO1xuI2VsaWYgREVCVUdNT0RFPT0yOCAmJiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfVElOVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfVElOVF9URVhUVVJFKVxuY29sb3I9Y2xlYXJjb2F0T3V0LmNsZWFyQ29hdFRpbnRNYXBEYXRhLnJnYjtcbiNlbGlmIERFQlVHTU9ERT09MjkgJiYgZGVmaW5lZChTSEVFTikgJiYgZGVmaW5lZChTSEVFTl9URVhUVVJFKVxuY29sb3I9c2hlZW5PdXQuc2hlZW5NYXBEYXRhLnJnYjtcbiNlbGlmIERFQlVHTU9ERT09MzAgJiYgZGVmaW5lZChBTklTT1RST1BJQykgJiYgZGVmaW5lZChBTklTT1RST1BJQ19URVhUVVJFKVxuY29sb3I9YW5pc290cm9waWNPdXQuYW5pc290cm9weU1hcERhdGEucmdiO1xuI2VsaWYgREVCVUdNT0RFPT0zMSAmJiBkZWZpbmVkKFNVQlNVUkZBQ0UpICYmIGRlZmluZWQoU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFKVxuY29sb3I9c3ViU3VyZmFjZU91dC50aGlja25lc3NNYXAucmdiO1xuI2VsaWYgREVCVUdNT0RFPT0zMiAmJiBkZWZpbmVkKEJVTVApXG5jb2xvcj10ZXh0dXJlU2FtcGxlKGJ1bXBTYW1wbGVyLGJ1bXBTYW1wbGVyU2FtcGxlcixmcmFnbWVudElucHV0cy52QnVtcFVWKS5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTQwICYmIGRlZmluZWQoU1NfUkVGUkFDVElPTilcbmNvbG9yPXN1YlN1cmZhY2VPdXQuZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTQxICYmIGRlZmluZWQoUkVGTEVDVElPTilcbmNvbG9yPXJlZmxlY3Rpb25PdXQuZW52aXJvbm1lbnRSYWRpYW5jZS5yZ2I7XG4jaWZuZGVmIEdBTU1BUkVGTEVDVElPTlxuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbmRpZlxuI2VsaWYgREVCVUdNT0RFPT00MiAmJiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OKVxuY29sb3I9Y2xlYXJjb2F0T3V0LmVudmlyb25tZW50Q2xlYXJDb2F0UmFkaWFuY2UucmdiO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NTBcbmNvbG9yPWRpZmZ1c2VCYXNlLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTUxICYmIGRlZmluZWQoU1BFQ1VMQVJURVJNKVxuY29sb3I9c3BlY3VsYXJCYXNlLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTUyICYmIGRlZmluZWQoQ0xFQVJDT0FUKVxuY29sb3I9Y2xlYXJDb2F0QmFzZS5yZ2I7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT01MyAmJiBkZWZpbmVkKFNIRUVOKVxuY29sb3I9c2hlZW5CYXNlLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTU0ICYmIGRlZmluZWQoUkVGTEVDVElPTilcbmNvbG9yPXJlZmxlY3Rpb25PdXQuZW52aXJvbm1lbnRJcnJhZGlhbmNlLnJnYjtcbiNpZm5kZWYgR0FNTUFSRUZMRUNUSU9OXG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VuZGlmXG4jZWxpZiBERUJVR01PREU9PTYwXG5jb2xvcj1zdXJmYWNlQWxiZWRvLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTYxXG5jb2xvcj1jbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NjIgJiYgZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKVxuY29sb3I9IHZlYzNmKHJlZmxlY3Rpdml0eU91dC5tZXRhbGxpYyk7XG4jZWxpZiBERUJVR01PREU9PTcxICYmIGRlZmluZWQoTUVUQUxMSUNXT1JLRkxPVylcbmNvbG9yPXJlZmxlY3Rpdml0eU91dC5tZXRhbGxpY0YwO1xuI2VsaWYgREVCVUdNT0RFPT02M1xuY29sb3I9IHZlYzNmKHJvdWdobmVzcyk7XG4jZWxpZiBERUJVR01PREU9PTY0XG5jb2xvcj0gdmVjM2YoYWxwaGFHKTtcbiNlbGlmIERFQlVHTU9ERT09NjVcbmNvbG9yPSB2ZWMzZihOZG90Vik7XG4jZWxpZiBERUJVR01PREU9PTY2ICYmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKVxuY29sb3I9Y2xlYXJjb2F0T3V0LmNsZWFyQ29hdENvbG9yO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NjcgJiYgZGVmaW5lZChDTEVBUkNPQVQpXG5jb2xvcj0gdmVjM2YoY2xlYXJjb2F0T3V0LmNsZWFyQ29hdFJvdWdobmVzcyk7XG4jZWxpZiBERUJVR01PREU9PTY4ICYmIGRlZmluZWQoQ0xFQVJDT0FUKVxuY29sb3I9IHZlYzNmKGNsZWFyY29hdE91dC5jbGVhckNvYXROZG90Vik7XG4jZWxpZiBERUJVR01PREU9PTY5ICYmIGRlZmluZWQoU1VCU1VSRkFDRSkgJiYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpXG5jb2xvcj1zdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2U7XG4jZWxpZiBERUJVR01PREU9PTcwICYmIGRlZmluZWQoU1VCU1VSRkFDRSkgJiYgZGVmaW5lZChTU19SRUZSQUNUSU9OKVxuY29sb3I9c3ViU3VyZmFjZU91dC5yZWZyYWN0aW9uVHJhbnNtaXR0YW5jZTtcbiNlbGlmIERFQlVHTU9ERT09NzJcbmNvbG9yPSB2ZWMzZihtaWNyb1N1cmZhY2UpO1xuI2VsaWYgREVCVUdNT0RFPT03M1xuY29sb3I9dW5pZm9ybXMudkFsYmVkb0NvbG9yLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTc0ICYmICFkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpXG5jb2xvcj11bmlmb3Jtcy52UmVmbGVjdGl2aXR5Q29sb3IucmdiO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NzVcbmNvbG9yPXVuaWZvcm1zLnZFbWlzc2l2ZUNvbG9yO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09ODAgJiYgZGVmaW5lZChSQURJQU5DRU9DQ0xVU0lPTilcbmNvbG9yPSB2ZWMzZihzZW8pO1xuI2VsaWYgREVCVUdNT0RFPT04MSAmJiBkZWZpbmVkKEhPUklaT05PQ0NMVVNJT04pICYmIGRlZmluZWQoQlVNUCkgJiYgZGVmaW5lZChSRUZMRUNUSU9OTUFQXzNEKVxuY29sb3I9IHZlYzNmKGVobyk7XG4jZWxpZiBERUJVR01PREU9PTgyICYmIGRlZmluZWQoTVNfQlJERl9FTkVSR1lfQ09OU0VSVkFUSU9OKVxuY29sb3I9IHZlYzNmKGVuZXJneUNvbnNlcnZhdGlvbkZhY3Rvcik7XG4jZWxpZiBERUJVR01PREU9PTgzICYmIGRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSAmJiAhZGVmaW5lZChSRUZMRUNUSU9OTUFQX1NLWUJPWClcbmNvbG9yPWJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT04NCAmJiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuY29sb3I9Y2xlYXJjb2F0T3V0LmNsZWFyQ29hdEVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT04NSAmJiBkZWZpbmVkKFNIRUVOKSAmJiBkZWZpbmVkKFJFRkxFQ1RJT04pXG5jb2xvcj1zaGVlbk91dC5zaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT04NiAmJiBkZWZpbmVkKEFMUEhBQkxFTkQpXG5jb2xvcj0gdmVjM2YobHVtaW5hbmNlT3ZlckFscGhhKTtcbiNlbGlmIERFQlVHTU9ERT09ODdcbmNvbG9yPSB2ZWMzZihhbHBoYSk7XG4jZWxpZiBERUJVR01PREU9PTg4ICYmIGRlZmluZWQoQUxCRURPKVxuY29sb3I9IHZlYzNmKGFsYmVkb1RleHR1cmUuYSk7XG4jZWxpZiBERUJVR01PREU9PTg5XG5jb2xvcj1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3I7XG4jZWxzZVxudmFyIHN0cmlwZVdpZHRoOiBmMzI9MzAuO3ZhciBzdHJpcGVQb3M6IGYzMj1hYnMoZmxvb3IoaW5wdXQucG9zaXRpb24ueC9zdHJpcGVXaWR0aCkpO3ZhciB3aGljaENvbG9yOiBmMzI9KChzdHJpcGVQb3MpJSgyLikpO3ZhciBjb2xvcjE6IHZlYzNmPSB2ZWMzZiguNiwuMiwuMik7dmFyIGNvbG9yMjogdmVjM2Y9IHZlYzNmKC4zLC4xLC4xKTtjb2xvcj1taXgoY29sb3IxLGNvbG9yMix3aGljaENvbG9yKTtcbiNlbmRpZlxuY29sb3IqPXVuaWZvcm1zLnZEZWJ1Z01vZGUueTtcbiNpZmRlZiBERUJVR01PREVfTk9STUFMSVpFXG5jb2xvcj1ub3JtYWxpemUoY29sb3IpKjAuNSswLjU7XG4jZW5kaWZcbiNpZmRlZiBERUJVR01PREVfR0FNTUFcbmNvbG9yPXRvR2FtbWFTcGFjZVZlYzMoY29sb3IpO1xuI2VuZGlmXG5mcmFnbWVudE91dHB1dHMuY29sb3I9dmVjNGYoY29sb3IsMS4wKTtcbiNpZmRlZiBQUkVQQVNTXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGEwPXRvTGluZWFyU3BhY2VWZWMzKGNvbG9yKTsgXG5mcmFnbWVudE91dHB1dHMuZnJhZ0RhdGExPXZlYzRmKDAuLDAuLDAuLDAuKTsgXG4jZW5kaWZcbiNpZmRlZiBERUJVR01PREVfRk9SQ0VSRVRVUk5cbnJldHVybiBmcmFnbWVudE91dHB1dHM7XG4jZW5kaWZcbn1cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickRlYnVnV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyRGlyZWN0TGlnaHRpbmdGYWxsb2ZmRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgZm4gY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKGxpZ2h0T2Zmc2V0OiB2ZWMzZixyYW5nZTogZjMyKS0+ZjMyXG57cmV0dXJuIG1heCgwLiwxLjAtbGVuZ3RoKGxpZ2h0T2Zmc2V0KS9yYW5nZSk7fVxuZm4gY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1BoeXNpY2FsKGxpZ2h0RGlzdGFuY2VTcXVhcmVkOiBmMzIpLT5mMzJcbntyZXR1cm4gMS4wL21heEVwcyhsaWdodERpc3RhbmNlU3F1YXJlZCk7fVxuZm4gY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX0dMVEYobGlnaHREaXN0YW5jZVNxdWFyZWQ6IGYzMixpbnZlcnNlU3F1YXJlZFJhbmdlOiBmMzIpLT5mMzJcbnt2YXIgbGlnaHREaXN0YW5jZUZhbGxvZmY6IGYzMj0xLjAvbWF4RXBzKGxpZ2h0RGlzdGFuY2VTcXVhcmVkKTt2YXIgZmFjdG9yOiBmMzI9bGlnaHREaXN0YW5jZVNxdWFyZWQqaW52ZXJzZVNxdWFyZWRSYW5nZTt2YXIgYXR0ZW51YXRpb246IGYzMj1zYXR1cmF0ZSgxLjAtZmFjdG9yKmZhY3Rvcik7YXR0ZW51YXRpb24qPWF0dGVudWF0aW9uO2xpZ2h0RGlzdGFuY2VGYWxsb2ZmKj1hdHRlbnVhdGlvbjtyZXR1cm4gbGlnaHREaXN0YW5jZUZhbGxvZmY7fVxuZm4gY29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodERpcmVjdGlvbjogdmVjM2YsZGlyZWN0aW9uVG9MaWdodENlbnRlclc6IHZlYzNmLGllc0xpZ2h0VGV4dHVyZTogdGV4dHVyZV8yZDxmMzI+LGllc0xpZ2h0VGV4dHVyZVNhbXBsZXI6IHNhbXBsZXIpLT5mMzJcbnt2YXIgY29zQW5nbGU6IGYzMj1kb3QoLWxpZ2h0RGlyZWN0aW9uLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXKTt2YXIgYW5nbGU9YWNvcyhjb3NBbmdsZSkvUEk7cmV0dXJuIHRleHR1cmVTYW1wbGVMZXZlbChpZXNMaWdodFRleHR1cmUsaWVzTGlnaHRUZXh0dXJlU2FtcGxlcix2ZWMyZihhbmdsZSwwKSwwLikucjt9XG5mbiBjb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYobGlnaHRPZmZzZXQ6IHZlYzNmLGxpZ2h0RGlzdGFuY2VTcXVhcmVkOiBmMzIscmFuZ2U6IGYzMixpbnZlcnNlU3F1YXJlZFJhbmdlOiBmMzIpLT5mMzJcbntcbiNpZmRlZiBVU0VQSFlTSUNBTExJR0hURkFMTE9GRlxucmV0dXJuIGNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChsaWdodERpc3RhbmNlU3F1YXJlZCk7XG4jZWxpZiBkZWZpbmVkKFVTRUdMVEZMSUdIVEZBTExPRkYpXG5yZXR1cm4gY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX0dMVEYobGlnaHREaXN0YW5jZVNxdWFyZWQsaW52ZXJzZVNxdWFyZWRSYW5nZSk7XG4jZWxzZVxucmV0dXJuIGNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodE9mZnNldCxyYW5nZSk7XG4jZW5kaWZcbn1cbmZuIGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodERpcmVjdGlvbjogdmVjM2YsZGlyZWN0aW9uVG9MaWdodENlbnRlclc6IHZlYzNmLGNvc0hhbGZBbmdsZTogZjMyLGV4cG9uZW50OiBmMzIpLT5mMzJcbnt2YXIgZmFsbG9mZjogZjMyPTAuMDt2YXIgY29zQW5nbGU6IGYzMj1tYXhFcHMoZG90KC1saWdodERpcmVjdGlvbixkaXJlY3Rpb25Ub0xpZ2h0Q2VudGVyVykpO2lmIChjb3NBbmdsZT49Y29zSGFsZkFuZ2xlKVxue2ZhbGxvZmY9bWF4KDAuLHBvdyhjb3NBbmdsZSxleHBvbmVudCkpO31cbnJldHVybiBmYWxsb2ZmO31cbmZuIGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9QaHlzaWNhbChsaWdodERpcmVjdGlvbjogdmVjM2YsZGlyZWN0aW9uVG9MaWdodENlbnRlclc6IHZlYzNmLGNvc0hhbGZBbmdsZTogZjMyKS0+ZjMyXG57Y29uc3Qga01pbnVzTG9nMkNvbmVBbmdsZUludGVuc2l0eVJhdGlvOiBmMzI9Ni42NDM4NTYxODk3NzsgXG52YXIgY29uY2VudHJhdGlvbkthcHBhOiBmMzI9a01pbnVzTG9nMkNvbmVBbmdsZUludGVuc2l0eVJhdGlvLygxLjAtY29zSGFsZkFuZ2xlKTt2YXIgbGlnaHREaXJlY3Rpb25TcHJlYWRTRzogdmVjNGY9IHZlYzRmKC1saWdodERpcmVjdGlvbipjb25jZW50cmF0aW9uS2FwcGEsLWNvbmNlbnRyYXRpb25LYXBwYSk7dmFyIGZhbGxvZmY6IGYzMj1leHAyKGRvdCggdmVjNGYoZGlyZWN0aW9uVG9MaWdodENlbnRlclcsMS4wKSxsaWdodERpcmVjdGlvblNwcmVhZFNHKSk7cmV0dXJuIGZhbGxvZmY7fVxuZm4gY29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0dMVEYobGlnaHREaXJlY3Rpb246IHZlYzNmLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXOiB2ZWMzZixsaWdodEFuZ2xlU2NhbGU6IGYzMixsaWdodEFuZ2xlT2Zmc2V0OiBmMzIpLT5mMzJcbnt2YXIgY2Q6IGYzMj1kb3QoLWxpZ2h0RGlyZWN0aW9uLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXKTt2YXIgZmFsbG9mZjogZjMyPXNhdHVyYXRlKGNkKmxpZ2h0QW5nbGVTY2FsZStsaWdodEFuZ2xlT2Zmc2V0KTtmYWxsb2ZmKj1mYWxsb2ZmO3JldHVybiBmYWxsb2ZmO31cbmZuIGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodERpcmVjdGlvbjogdmVjM2YsZGlyZWN0aW9uVG9MaWdodENlbnRlclc6IHZlYzNmLGNvc0hhbGZBbmdsZTogZjMyLGV4cG9uZW50OiBmMzIsbGlnaHRBbmdsZVNjYWxlOiBmMzIsbGlnaHRBbmdsZU9mZnNldDogZjMyKS0+ZjMyXG57XG4jaWZkZWYgVVNFUEhZU0lDQUxMSUdIVEZBTExPRkZcbnJldHVybiBjb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfUGh5c2ljYWwobGlnaHREaXJlY3Rpb24sZGlyZWN0aW9uVG9MaWdodENlbnRlclcsY29zSGFsZkFuZ2xlKTtcbiNlbGlmIGRlZmluZWQoVVNFR0xURkxJR0hURkFMTE9GRilcbnJldHVybiBjb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfR0xURihsaWdodERpcmVjdGlvbixkaXJlY3Rpb25Ub0xpZ2h0Q2VudGVyVyxsaWdodEFuZ2xlU2NhbGUsbGlnaHRBbmdsZU9mZnNldCk7XG4jZWxzZVxucmV0dXJuIGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodERpcmVjdGlvbixkaXJlY3Rpb25Ub0xpZ2h0Q2VudGVyVyxjb3NIYWxmQW5nbGUsZXhwb25lbnQpO1xuI2VuZGlmXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickRpcmVjdExpZ2h0aW5nRmFsbG9mZkZ1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL3BickJsb2NrUmVmbGVjdGFuY2UwXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickRpcmVjdExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBDTEVBUkNPQVRSRUZMRUNUQU5DRTkwIDEuMFxuc3RydWN0IGxpZ2h0aW5nSW5mb1xue2RpZmZ1c2U6IHZlYzNmLFxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuZGlmZnVzZVRyYW5zbWlzc2lvbjogdmVjM2YsXG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnNwZWN1bGFyOiB2ZWMzZixcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuY2xlYXJDb2F0OiB2ZWM0ZixcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5zaGVlbjogdmVjM2ZcbiNlbmRpZlxufTtmbiBhZGp1c3RSb3VnaG5lc3NGcm9tTGlnaHRQcm9wZXJ0aWVzKHJvdWdobmVzczogZjMyLGxpZ2h0UmFkaXVzOiBmMzIsbGlnaHREaXN0YW5jZTogZjMyKS0+ZjMyIHtcbiNpZiBkZWZpbmVkKFVTRVBIWVNJQ0FMTElHSFRGQUxMT0ZGKSB8fCBkZWZpbmVkKFVTRUdMVEZMSUdIVEZBTExPRkYpXG52YXIgbGlnaHRSb3VnaG5lc3M6IGYzMj1saWdodFJhZGl1cy9saWdodERpc3RhbmNlO3ZhciB0b3RhbFJvdWdobmVzczogZjMyPXNhdHVyYXRlKGxpZ2h0Um91Z2huZXNzK3JvdWdobmVzcyk7cmV0dXJuIHRvdGFsUm91Z2huZXNzO1xuI2Vsc2VcbnJldHVybiByb3VnaG5lc3M7XG4jZW5kaWZcbn1cbmZuIGNvbXB1dGVIZW1pc3BoZXJpY0RpZmZ1c2VMaWdodGluZyhpbmZvOiBwcmVMaWdodGluZ0luZm8sbGlnaHRDb2xvcjogdmVjM2YsZ3JvdW5kQ29sb3I6IHZlYzNmKS0+dmVjM2Yge3JldHVybiBtaXgoZ3JvdW5kQ29sb3IsbGlnaHRDb2xvcixpbmZvLk5kb3RMKTt9XG4jaWYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbmZuIGNvbXB1dGVBcmVhRGlmZnVzZUxpZ2h0aW5nKGluZm86IHByZUxpZ2h0aW5nSW5mbyxsaWdodENvbG9yOiB2ZWMzZiktPnZlYzNmIHtyZXR1cm4gaW5mby5hcmVhTGlnaHREaWZmdXNlKmxpZ2h0Q29sb3I7fVxuI2VuZGlmXG5mbiBjb21wdXRlRGlmZnVzZUxpZ2h0aW5nKGluZm86IHByZUxpZ2h0aW5nSW5mbyxsaWdodENvbG9yOiB2ZWMzZiktPnZlYzNmIHt2YXIgZGlmZnVzZVRlcm06IHZlYzNmPXZlYzNmKDEuMC9QSSk7XG4jaWYgQkFTRV9ESUZGVVNFX01PREVMPT1CUkRGX0RJRkZVU0VfTU9ERUxfTEVHQUNZXG5kaWZmdXNlVGVybT12ZWMzZihkaWZmdXNlQlJERl9CdXJsZXkoaW5mby5OZG90TCxpbmZvLk5kb3RWLGluZm8uVmRvdEgsaW5mby5yb3VnaG5lc3MpKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxuZGlmZnVzZVRlcm09dmVjM2YoZGlmZnVzZUJSREZfQnVybGV5KGluZm8uTmRvdEwsaW5mby5OZG90VixpbmZvLlZkb3RILGluZm8uZGlmZnVzZVJvdWdobmVzcykpO1xuI2VsaWYgQkFTRV9ESUZGVVNFX01PREVMPT1CUkRGX0RJRkZVU0VfTU9ERUxfRU9OXG52YXIgY2xhbXBlZEFsYmVkbzogdmVjM2Y9Y2xhbXAoaW5mby5zdXJmYWNlQWxiZWRvLHZlYzNmKDAuMSksdmVjM2YoMS4wKSk7ZGlmZnVzZVRlcm09ZGlmZnVzZUJSREZfRU9OKGNsYW1wZWRBbGJlZG8saW5mby5kaWZmdXNlUm91Z2huZXNzLGluZm8uTmRvdEwsaW5mby5OZG90VixpbmZvLkxkb3RWKTtkaWZmdXNlVGVybS89Y2xhbXBlZEFsYmVkbztcbiNlbmRpZlxucmV0dXJuIGRpZmZ1c2VUZXJtKmluZm8uYXR0ZW51YXRpb24qaW5mby5OZG90TCpsaWdodENvbG9yO31cbmZuIGNvbXB1dGVQcm9qZWN0aW9uVGV4dHVyZURpZmZ1c2VMaWdodGluZyhwcm9qZWN0aW9uTGlnaHRUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4scHJvamVjdGlvbkxpZ2h0U2FtcGxlcjogc2FtcGxlcix0ZXh0dXJlUHJvamVjdGlvbk1hdHJpeDogbWF0NHg0Zixwb3NXOiB2ZWMzZiktPnZlYzNme3ZhciBzdHJxOiB2ZWM0Zj10ZXh0dXJlUHJvamVjdGlvbk1hdHJpeCogdmVjNGYocG9zVywxLjApO3N0cnEvPXN0cnEudzt2YXIgdGV4dHVyZUNvbG9yOiB2ZWMzZj10ZXh0dXJlU2FtcGxlKHByb2plY3Rpb25MaWdodFRleHR1cmUscHJvamVjdGlvbkxpZ2h0U2FtcGxlcixzdHJxLnh5KS5yZ2I7cmV0dXJuIHRvTGluZWFyU3BhY2VWZWMzKHRleHR1cmVDb2xvcik7fVxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuZm4gY29tcHV0ZURpZmZ1c2VUcmFuc21pdHRlZExpZ2h0aW5nKGluZm86IHByZUxpZ2h0aW5nSW5mbyxsaWdodENvbG9yOiB2ZWMzZix0cmFuc21pdHRhbmNlOiB2ZWMzZiktPnZlYzNmIHt2YXIgdHJhbnNtaXR0YW5jZU5kb3RMPXZlYzNmKDAuMCk7dmFyIE5kb3RMOiBmMzI9YWJzRXBzKGluZm8uTmRvdExVbmNsYW1wZWQpO1xuI2lmbmRlZiBTU19UUkFOU0xVQ0VOQ1lfTEVHQUNZXG5pZiAoaW5mby5OZG90TFVuY2xhbXBlZDwwLjApIHtcbiNlbmRpZlxudmFyIHdyYXBOZG90TDogZjMyPWNvbXB1dGVXcmFwcGVkRGlmZnVzZU5kb3RMKE5kb3RMLDAuMDIpO3ZhciB0ckFkYXB0OiBmMzI9c3RlcCgwLixpbmZvLk5kb3RMVW5jbGFtcGVkKTt0cmFuc21pdHRhbmNlTmRvdEw9bWl4KHRyYW5zbWl0dGFuY2Uqd3JhcE5kb3RMLCB2ZWMzZih3cmFwTmRvdEwpLHRyQWRhcHQpO1xuI2lmbmRlZiBTU19UUkFOU0xVQ0VOQ1lfTEVHQUNZXG59XG52YXIgZGlmZnVzZVRlcm0gOiB2ZWMzZj12ZWMzZigxLjAvUEkpO1xuI2lmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0xFR0FDWVxuZGlmZnVzZVRlcm09dmVjM2YoZGlmZnVzZUJSREZfQnVybGV5KFxuaW5mby5OZG90TCxpbmZvLk5kb3RWLGluZm8uVmRvdEgsaW5mby5yb3VnaG5lc3MpKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0JVUkxFWVxuZGlmZnVzZVRlcm09dmVjM2YoZGlmZnVzZUJSREZfQnVybGV5KFxuaW5mby5OZG90TCxpbmZvLk5kb3RWLGluZm8uVmRvdEgsaW5mby5kaWZmdXNlUm91Z2huZXNzKSk7XG4jZWxpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9FT05cbnZhciBjbGFtcGVkQWxiZWRvOiB2ZWMzZj1jbGFtcChpbmZvLnN1cmZhY2VBbGJlZG8sdmVjM2YoMC4xKSx2ZWMzZigxLjApKTtkaWZmdXNlVGVybT1kaWZmdXNlQlJERl9FT04oY2xhbXBlZEFsYmVkbyxpbmZvLmRpZmZ1c2VSb3VnaG5lc3MsXG5pbmZvLk5kb3RMLGluZm8uTmRvdFYsaW5mby5MZG90Vik7ZGlmZnVzZVRlcm0vPWNsYW1wZWRBbGJlZG87XG4jZW5kaWZcbnJldHVybiAodHJhbnNtaXR0YW5jZU5kb3RMKmRpZmZ1c2VUZXJtKSppbmZvLmF0dGVudWF0aW9uKmxpZ2h0Q29sb3I7XG4jZWxzZVxubGV0IGRpZmZ1c2VUZXJtPWRpZmZ1c2VCUkRGX0J1cmxleShOZG90TCxpbmZvLk5kb3RWLGluZm8uVmRvdEgsaW5mby5yb3VnaG5lc3MpO3JldHVybiBkaWZmdXNlVGVybSp0cmFuc21pdHRhbmNlTmRvdEwqaW5mby5hdHRlbnVhdGlvbipsaWdodENvbG9yO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbmZuIGNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKGluZm86IHByZUxpZ2h0aW5nSW5mbyxOOiB2ZWMzZixyZWZsZWN0YW5jZTA6IHZlYzNmLGZyZXNuZWw6IHZlYzNmLGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcjogZjMyLGxpZ2h0Q29sb3I6IHZlYzNmKS0+dmVjM2Yge3ZhciBOZG90SDogZjMyPXNhdHVyYXRlRXBzKGRvdChOLGluZm8uSCkpO3ZhciByb3VnaG5lc3M6IGYzMj1tYXgoaW5mby5yb3VnaG5lc3MsZ2VvbWV0cmljUm91Z2huZXNzRmFjdG9yKTt2YXIgYWxwaGFHOiBmMzI9Y29udmVydFJvdWdobmVzc1RvQXZlcmFnZVNsb3BlKHJvdWdobmVzcyk7dmFyIG1vZGlmaWVkRnJlc25lbDogdmVjM2Y9ZnJlc25lbDtcbiNpZmRlZiBJUklERVNDRU5DRVxubW9kaWZpZWRGcmVzbmVsPW1peChmcmVzbmVsLHJlZmxlY3RhbmNlMCxpbmZvLmlyaWRlc2NlbmNlSW50ZW5zaXR5KTtcbiNlbmRpZlxudmFyIGRpc3RyaWJ1dGlvbjogZjMyPW5vcm1hbERpc3RyaWJ1dGlvbkZ1bmN0aW9uX1Ryb3dicmlkZ2VSZWl0ekdHWChOZG90SCxhbHBoYUcpO1xuI2lmZGVmIEJSREZfVl9IRUlHSFRfQ09SUkVMQVRFRFxudmFyIHNtaXRoVmlzaWJpbGl0eTogZjMyPXNtaXRoVmlzaWJpbGl0eV9HR1hDb3JyZWxhdGVkKGluZm8uTmRvdEwsaW5mby5OZG90VixhbHBoYUcpO1xuI2Vsc2VcbnZhciBzbWl0aFZpc2liaWxpdHk6IGYzMj1zbWl0aFZpc2liaWxpdHlfVHJvd2JyaWRnZVJlaXR6R0dYRmFzdChpbmZvLk5kb3RMLGluZm8uTmRvdFYsYWxwaGFHKTtcbiNlbmRpZlxudmFyIHNwZWNUZXJtOiB2ZWMzZj1tb2RpZmllZEZyZXNuZWwqZGlzdHJpYnV0aW9uKnNtaXRoVmlzaWJpbGl0eTtyZXR1cm4gc3BlY1Rlcm0qaW5mby5hdHRlbnVhdGlvbippbmZvLk5kb3RMKmxpZ2h0Q29sb3I7fVxuI2lmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5mbiBjb21wdXRlQXJlYVNwZWN1bGFyTGlnaHRpbmcoaW5mbzogcHJlTGlnaHRpbmdJbmZvLHNwZWN1bGFyQ29sb3I6IHZlYzNmLHJlZmxlY3RhbmNlMDogdmVjM2YscmVmbGVjdGFuY2U5MDogdmVjM2YpLT52ZWMzZiB7dmFyIGZyZXNuZWw6dmVjM2YgPXJlZmxlY3RhbmNlMCpzcGVjdWxhckNvbG9yKmluZm8uYXJlYUxpZ2h0RnJlc25lbC54KyggdmVjM2YoIDEuMCApLXNwZWN1bGFyQ29sb3IgKSppbmZvLmFyZWFMaWdodEZyZXNuZWwueSpyZWZsZWN0YW5jZTkwO3JldHVybiBzcGVjdWxhckNvbG9yKmZyZXNuZWwqaW5mby5hcmVhTGlnaHRTcGVjdWxhcjt9XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEZVWlpcbmZuIGV2YWxGdXp6KEw6IHZlYzNmLE5kb3RMOiBmMzIsTmRvdFY6IGYzMixUOiB2ZWMzZixCOiB2ZWMzZixsdGNMdXQ6IHZlYzNmKS0+ZjMyXG57aWYgKE5kb3RMPD0wLjBmIHx8IE5kb3RWPD0wLjBmKSB7cmV0dXJuIDAuMGY7fVxubGV0IE09bWF0M3gzZihcbnZlYzNmKGx0Y0x1dC5yLDAuMGYsMC4wZiksXG52ZWMzZihsdGNMdXQuZywxLjBmLDAuMGYpLFxudmVjM2YoMC4wZiwwLjBmLDEuMGYpXG4pO2xldCBMbG9jYWw6IHZlYzNmPXZlYzNmKGRvdChMLFQpLGRvdChMLEIpLE5kb3RMKTtsZXQgTHdhcnA6IHZlYzNmPW5vcm1hbGl6ZShNKkxsb2NhbCk7bGV0IGNvc1RoZXRhV2FycDogZjMyPW1heChMd2FycC56LDAuMGYpO3JldHVybiBjb3NUaGV0YVdhcnAqTmRvdEw7fVxuI2VuZGlmXG4jaWYgZGVmaW5lZChBTklTT1RST1BJQykgJiYgZGVmaW5lZChBTklTT1RST1BJQ19PUEVOUEJSKVxuZm4gY29tcHV0ZUFuaXNvdHJvcGljU3BlY3VsYXJMaWdodGluZyhpbmZvOiBwcmVMaWdodGluZ0luZm8sVjogdmVjM2YsTjogdmVjM2YsVDogdmVjM2YsQjogdmVjM2YsYW5pc290cm9weTogZjMyLGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcjogZjMyLGxpZ2h0Q29sb3I6IHZlYzNmKS0+dmVjM2Yge3ZhciBOZG90SDogZjMyPXNhdHVyYXRlRXBzKGRvdChOLGluZm8uSCkpO3ZhciBUZG90SDogZjMyPWRvdChULGluZm8uSCk7dmFyIEJkb3RIOiBmMzI9ZG90KEIsaW5mby5IKTt2YXIgVGRvdFY6IGYzMj1kb3QoVCxWKTt2YXIgQmRvdFY6IGYzMj1kb3QoQixWKTt2YXIgVGRvdEw6IGYzMj1kb3QoVCxpbmZvLkwpO3ZhciBCZG90TDogZjMyPWRvdChCLGluZm8uTCk7dmFyIGFscGhhRzogZjMyPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShpbmZvLnJvdWdobmVzcyk7dmFyIGFscGhhVEI6IHZlYzJmPWdldEFuaXNvdHJvcGljUm91Z2huZXNzKGFscGhhRyxhbmlzb3Ryb3B5KTthbHBoYVRCPW1heChhbHBoYVRCLHZlYzJmKGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcipnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IpKTt2YXIgZGlzdHJpYnV0aW9uOiBmMzI9bm9ybWFsRGlzdHJpYnV0aW9uRnVuY3Rpb25fQnVybGV5R0dYX0FuaXNvdHJvcGljKE5kb3RILFRkb3RILEJkb3RILGFscGhhVEIpO3ZhciBzbWl0aFZpc2liaWxpdHk6IGYzMj1zbWl0aFZpc2liaWxpdHlfR0dYQ29ycmVsYXRlZF9Bbmlzb3Ryb3BpYyhpbmZvLk5kb3RMLGluZm8uTmRvdFYsVGRvdFYsQmRvdFYsVGRvdEwsQmRvdEwsYWxwaGFUQik7dmFyIHNwZWNUZXJtOiB2ZWMzZj12ZWMzZihkaXN0cmlidXRpb24qc21pdGhWaXNpYmlsaXR5KTtyZXR1cm4gc3BlY1Rlcm0qaW5mby5hdHRlbnVhdGlvbippbmZvLk5kb3RMKmxpZ2h0Q29sb3I7fVxuI2VsaWYgZGVmaW5lZChBTklTT1RST1BJQylcbmZuIGNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcoaW5mbzogcHJlTGlnaHRpbmdJbmZvLFY6IHZlYzNmLE46IHZlYzNmLFQ6IHZlYzNmLEI6IHZlYzNmLGFuaXNvdHJvcHk6IGYzMixyZWZsZWN0YW5jZTA6IHZlYzNmLHJlZmxlY3RhbmNlOTA6IHZlYzNmLGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcjogZjMyLGxpZ2h0Q29sb3I6IHZlYzNmKS0+dmVjM2Yge3ZhciBOZG90SDogZjMyPXNhdHVyYXRlRXBzKGRvdChOLGluZm8uSCkpO3ZhciBUZG90SDogZjMyPWRvdChULGluZm8uSCk7dmFyIEJkb3RIOiBmMzI9ZG90KEIsaW5mby5IKTt2YXIgVGRvdFY6IGYzMj1kb3QoVCxWKTt2YXIgQmRvdFY6IGYzMj1kb3QoQixWKTt2YXIgVGRvdEw6IGYzMj1kb3QoVCxpbmZvLkwpO3ZhciBCZG90TDogZjMyPWRvdChCLGluZm8uTCk7dmFyIGFscGhhRzogZjMyPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShpbmZvLnJvdWdobmVzcyk7dmFyIGFscGhhVEI6IHZlYzJmPWdldEFuaXNvdHJvcGljUm91Z2huZXNzKGFscGhhRyxhbmlzb3Ryb3B5KTthbHBoYVRCPW1heChhbHBoYVRCLHZlYzJmKGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcipnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IpKTt2YXIgZnJlc25lbDogdmVjM2Y9ZnJlc25lbFNjaGxpY2tHR1hWZWMzKGluZm8uVmRvdEgscmVmbGVjdGFuY2UwLHJlZmxlY3RhbmNlOTApO1xuI2lmZGVmIElSSURFU0NFTkNFXG5mcmVzbmVsPW1peChmcmVzbmVsLHJlZmxlY3RhbmNlMCxpbmZvLmlyaWRlc2NlbmNlSW50ZW5zaXR5KTtcbiNlbmRpZlxudmFyIGRpc3RyaWJ1dGlvbjogZjMyPW5vcm1hbERpc3RyaWJ1dGlvbkZ1bmN0aW9uX0J1cmxleUdHWF9Bbmlzb3Ryb3BpYyhOZG90SCxUZG90SCxCZG90SCxhbHBoYVRCKTt2YXIgc21pdGhWaXNpYmlsaXR5OiBmMzI9c21pdGhWaXNpYmlsaXR5X0dHWENvcnJlbGF0ZWRfQW5pc290cm9waWMoaW5mby5OZG90TCxpbmZvLk5kb3RWLFRkb3RWLEJkb3RWLFRkb3RMLEJkb3RMLGFscGhhVEIpO3ZhciBzcGVjVGVybTogdmVjM2Y9ZnJlc25lbCpkaXN0cmlidXRpb24qc21pdGhWaXNpYmlsaXR5O3JldHVybiBzcGVjVGVybSppbmZvLmF0dGVudWF0aW9uKmluZm8uTmRvdEwqbGlnaHRDb2xvcjt9XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbmZuIGNvbXB1dGVDbGVhckNvYXRMaWdodGluZyhpbmZvOiBwcmVMaWdodGluZ0luZm8sTmNjOiB2ZWMzZixnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3I6IGYzMixjbGVhckNvYXRJbnRlbnNpdHk6IGYzMixsaWdodENvbG9yOiB2ZWMzZiktPnZlYzRmIHt2YXIgTmNjZG90TDogZjMyPXNhdHVyYXRlRXBzKGRvdChOY2MsaW5mby5MKSk7dmFyIE5jY2RvdEg6IGYzMj1zYXR1cmF0ZUVwcyhkb3QoTmNjLGluZm8uSCkpO3ZhciBjbGVhckNvYXRSb3VnaG5lc3M6IGYzMj1tYXgoaW5mby5yb3VnaG5lc3MsZ2VvbWV0cmljUm91Z2huZXNzRmFjdG9yKTt2YXIgYWxwaGFHOiBmMzI9Y29udmVydFJvdWdobmVzc1RvQXZlcmFnZVNsb3BlKGNsZWFyQ29hdFJvdWdobmVzcyk7dmFyIGZyZXNuZWw6IGYzMj1mcmVzbmVsU2NobGlja0dHWChpbmZvLlZkb3RILHVuaWZvcm1zLnZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zLngsQ0xFQVJDT0FUUkVGTEVDVEFOQ0U5MCk7ZnJlc25lbCo9Y2xlYXJDb2F0SW50ZW5zaXR5O3ZhciBkaXN0cmlidXRpb246IGYzMj1ub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9Ucm93YnJpZGdlUmVpdHpHR1goTmNjZG90SCxhbHBoYUcpO3ZhciBrZWxlbWVuVmlzaWJpbGl0eTogZjMyPXZpc2liaWxpdHlfS2VsZW1lbihpbmZvLlZkb3RIKTt2YXIgY2xlYXJDb2F0VGVybTogZjMyPWZyZXNuZWwqZGlzdHJpYnV0aW9uKmtlbGVtZW5WaXNpYmlsaXR5O3JldHVybiB2ZWM0ZihcbmNsZWFyQ29hdFRlcm0qaW5mby5hdHRlbnVhdGlvbipOY2Nkb3RMKmxpZ2h0Q29sb3IsXG4xLjAtZnJlc25lbFxuKTt9XG5mbiBjb21wdXRlQ2xlYXJDb2F0TGlnaHRpbmdBYnNvcnB0aW9uKE5kb3RWUmVmcmFjdDogZjMyLEw6IHZlYzNmLE5jYzogdmVjM2YsY2xlYXJDb2F0Q29sb3I6IHZlYzNmLGNsZWFyQ29hdFRoaWNrbmVzczogZjMyLGNsZWFyQ29hdEludGVuc2l0eTogZjMyKS0+dmVjM2Yge3ZhciBMUmVmcmFjdDogdmVjM2Y9LXJlZnJhY3QoTCxOY2MsdW5pZm9ybXMudkNsZWFyQ29hdFJlZnJhY3Rpb25QYXJhbXMueSk7dmFyIE5kb3RMUmVmcmFjdDogZjMyPXNhdHVyYXRlRXBzKGRvdChOY2MsTFJlZnJhY3QpKTt2YXIgYWJzb3JwdGlvbjogdmVjM2Y9Y29tcHV0ZUNsZWFyQ29hdEFic29ycHRpb24oTmRvdFZSZWZyYWN0LE5kb3RMUmVmcmFjdCxjbGVhckNvYXRDb2xvcixjbGVhckNvYXRUaGlja25lc3MsY2xlYXJDb2F0SW50ZW5zaXR5KTtyZXR1cm4gYWJzb3JwdGlvbjt9XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuZm4gY29tcHV0ZVNoZWVuTGlnaHRpbmcoaW5mbzogcHJlTGlnaHRpbmdJbmZvLE46IHZlYzNmLHJlZmxlY3RhbmNlMDogdmVjM2YscmVmbGVjdGFuY2U5MDogdmVjM2YsZ2VvbWV0cmljUm91Z2huZXNzRmFjdG9yOiBmMzIsbGlnaHRDb2xvcjogdmVjM2YpLT52ZWMzZiB7dmFyIE5kb3RIOiBmMzI9c2F0dXJhdGVFcHMoZG90KE4saW5mby5IKSk7dmFyIHJvdWdobmVzczogZjMyPW1heChpbmZvLnJvdWdobmVzcyxnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IpO3ZhciBhbHBoYUc6IGYzMj1jb252ZXJ0Um91Z2huZXNzVG9BdmVyYWdlU2xvcGUocm91Z2huZXNzKTt2YXIgZnJlc25lbDogZjMyPTEuO3ZhciBkaXN0cmlidXRpb246IGYzMj1ub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9DaGFybGllU2hlZW4oTmRvdEgsYWxwaGFHKTsvKiNpZmRlZiBTSEVFTl9TT0ZURVJcbnZhciB2aXNpYmlsaXR5OiBmMzI9dmlzaWJpbGl0eV9DaGFybGllU2hlZW4oaW5mby5OZG90TCxpbmZvLk5kb3RWLGFscGhhRyk7XG4jZWxzZSAqL1xudmFyIHZpc2liaWxpdHk6IGYzMj12aXNpYmlsaXR5X0FzaGlraG1pbihpbmZvLk5kb3RMLGluZm8uTmRvdFYpOy8qICNlbmRpZiAqL1xudmFyIHNoZWVuVGVybTogZjMyPWZyZXNuZWwqZGlzdHJpYnV0aW9uKnZpc2liaWxpdHk7cmV0dXJuIHNoZWVuVGVybSppbmZvLmF0dGVudWF0aW9uKmluZm8uTmRvdEwqbGlnaHRDb2xvcjt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxuI2luY2x1ZGU8Y2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnM+XG5mbiBjb21wdXRlQ2x1c3RlcmVkTGlnaHRpbmcoXG5saWdodERhdGFUZXh0dXJlOiB0ZXh0dXJlXzJkPGYzMj4sXG50aWxlTWFza0J1ZmZlcjogcHRyPHN0b3JhZ2UsYXJyYXk8dTMyPj4sXG5saWdodERhdGE6IHZlYzRmLFxuc2xpY2VSYW5nZTogdmVjMnUsXG5WOiB2ZWMzZixcbk46IHZlYzNmLFxucG9zVzogdmVjM2YsXG5zdXJmYWNlQWxiZWRvOiB2ZWMzZixcbnJlZmxlY3Rpdml0eU91dDogcmVmbGVjdGl2aXR5T3V0UGFyYW1zLFxuI2lmZGVmIElSSURFU0NFTkNFXG5pcmlkZXNjZW5jZUludGVuc2l0eTogZjMyLFxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5zdWJTdXJmYWNlT3V0OiBzdWJTdXJmYWNlT3V0UGFyYW1zLFxuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5BQVJvdWdobmVzc0ZhY3RvcjogZjMyLFxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbmFuaXNvdHJvcGljT3V0OiBhbmlzb3Ryb3BpY091dFBhcmFtcyxcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5zaGVlbk91dDogc2hlZW5PdXRQYXJhbXMsXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbmNsZWFyY29hdE91dDogY2xlYXJjb2F0T3V0UGFyYW1zLFxuI2VuZGlmXG4pLT5saWdodGluZ0luZm8ge2xldCBOZG90Vj1hYnNFcHMoZG90KE4sVikpO1xuI2luY2x1ZGU8cGJyQmxvY2tSZWZsZWN0YW5jZTA+XG4jaWZkZWYgQ0xFQVJDT0FUXG5zcGVjdWxhckVudmlyb25tZW50UjA9Y2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMDtcbiNlbmRpZlxudmFyIHJlc3VsdDogbGlnaHRpbmdJbmZvO2xldCB0aWxlUG9zaXRpb249dmVjMnUoZnJhZ21lbnRJbnB1dHMucG9zaXRpb24ueHkqbGlnaHREYXRhLnh5KTtsZXQgbWFza1Jlc29sdXRpb249dmVjMnUobGlnaHREYXRhLnp3KTt2YXIgdGlsZUluZGV4PSh0aWxlUG9zaXRpb24ueCptYXNrUmVzb2x1dGlvbi54K3RpbGVQb3NpdGlvbi55KSptYXNrUmVzb2x1dGlvbi55O2xldCBiYXRjaFJhbmdlPXNsaWNlUmFuZ2UvQ0xVU1RMSUdIVF9CQVRDSDt2YXIgYmF0Y2hPZmZzZXQ9YmF0Y2hSYW5nZS54KkNMVVNUTElHSFRfQkFUQ0g7dGlsZUluZGV4Kz1iYXRjaFJhbmdlLng7Zm9yICh2YXIgaT1iYXRjaFJhbmdlLng7IGk8PWJhdGNoUmFuZ2UueTsgaSs9MSkge3ZhciBtYXNrPXRpbGVNYXNrQnVmZmVyW3RpbGVJbmRleF07dGlsZUluZGV4Kz0xO2xldCBtYXNrT2Zmc2V0PW1heChzbGljZVJhbmdlLngsYmF0Y2hPZmZzZXQpLWJhdGNoT2Zmc2V0OyBcbmxldCBtYXNrV2lkdGg9bWluKHNsaWNlUmFuZ2UueS1iYXRjaE9mZnNldCsxLENMVVNUTElHSFRfQkFUQ0gpO21hc2s9ZXh0cmFjdEJpdHMobWFzayxtYXNrT2Zmc2V0LG1hc2tXaWR0aCk7d2hpbGUgbWFzayAhPSAwIHtsZXQgdHJhaWxpbmc9Zmlyc3RUcmFpbGluZ0JpdChtYXNrKTttYXNrIF49IDF1PDx0cmFpbGluZztsZXQgbGlnaHQ9Z2V0Q2x1c3RlcmVkTGlnaHQobGlnaHREYXRhVGV4dHVyZSxiYXRjaE9mZnNldCttYXNrT2Zmc2V0K3RyYWlsaW5nKTt2YXIgcHJlSW5mbz1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0LnZMaWdodERhdGEsVixOLHBvc1cpO3ByZUluZm8uTmRvdFY9TmRvdFY7cHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYocHJlSW5mby5saWdodE9mZnNldCxwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0LnZMaWdodEZhbGxvZmYueCxsaWdodC52TGlnaHRGYWxsb2ZmLnkpO2lmIGxpZ2h0LnZMaWdodERpcmVjdGlvbi53Pj0wLjAge3ByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodC52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodC52TGlnaHREaXJlY3Rpb24udyxsaWdodC52TGlnaHREYXRhLncsbGlnaHQudkxpZ2h0RmFsbG9mZi56LGxpZ2h0LnZMaWdodEZhbGxvZmYudyk7fVxucHJlSW5mby5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhyZWZsZWN0aXZpdHlPdXQucm91Z2huZXNzLGxpZ2h0LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtwcmVJbmZvLmRpZmZ1c2VSb3VnaG5lc3M9cmVmbGVjdGl2aXR5T3V0LmRpZmZ1c2VSb3VnaG5lc3M7cHJlSW5mby5zdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG87XG4jaWZkZWYgSVJJREVTQ0VOQ0VcbnByZUluZm8uaXJpZGVzY2VuY2VJbnRlbnNpdHk9aXJpZGVzY2VuY2VJbnRlbnNpdHk7XG4jZW5kaWZcbnZhciBpbmZvOiBsaWdodGluZ0luZm87XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZX0xFR0FDWVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlVHJhbnNtaXR0ZWRMaWdodGluZyhwcmVJbmZvLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiLHN1YlN1cmZhY2VPdXQudHJhbnNtaXR0YW5jZSk7aW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uPXZlYzMoMCk7XG4jZWxzZVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxsaWdodC52TGlnaHREaWZmdXNlLnJnYikqKDEuMC1zdWJTdXJmYWNlT3V0LnRyYW5zbHVjZW5jeUludGVuc2l0eSk7aW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uPWNvbXB1dGVEaWZmdXNlVHJhbnNtaXR0ZWRMaWdodGluZyhwcmVJbmZvLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiLHN1YlN1cmZhY2VPdXQudHJhbnNtaXR0YW5jZSk7XG4jZW5kaWZcbiNlbHNlXG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZURpZmZ1c2VMaWdodGluZyhwcmVJbmZvLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiKTtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuI2lmIENPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTD09Q09ORFVDVE9SX1NQRUNVTEFSX01PREVMX09QRU5QQlJcbmxldCBtZXRhbEZyZXNuZWw9cmVmbGVjdGl2aXR5T3V0LnNwZWN1bGFyV2VpZ2h0KmdldEY4MlNwZWN1bGFyKHByZUluZm8uVmRvdEgsc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwLHJlZmxlY3Rpdml0eU91dC5yb3VnaG5lc3MpO2xldCBkaWVsZWN0cmljRnJlc25lbD1mcmVzbmVsU2NobGlja0dHWFZlYzMocHJlSW5mby5WZG90SCxyZWZsZWN0aXZpdHlPdXQuZGllbGVjdHJpY0NvbG9yRjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTApO2xldCBjb2xvcmVkRnJlc25lbD1taXgoZGllbGVjdHJpY0ZyZXNuZWwsbWV0YWxGcmVzbmVsLHJlZmxlY3Rpdml0eU91dC5tZXRhbGxpYyk7XG4jZWxzZVxubGV0IGNvbG9yZWRGcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYVmVjMyhwcmVJbmZvLlZkb3RILHNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCk7XG4jZW5kaWZcbiNpZm5kZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbmxldCBOZG90SD1kb3QoTixwcmVJbmZvLkgpO2xldCBmcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYVmVjMyhOZG90SCx2ZWMzKHJlZmxlY3RhbmNlRjApLHNwZWN1bGFyRW52aXJvbm1lbnRSOTApO2luZm8uZGlmZnVzZSo9KHZlYzMoMS4wKS1mcmVzbmVsKTtcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG5pbmZvLnNwZWN1bGFyPWNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlSW5mbyxWLE4sYW5pc290cm9waWNPdXQuYW5pc290cm9waWNUYW5nZW50LGFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljQml0YW5nZW50LGFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcHksY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxzcGVjdWxhckVudmlyb25tZW50UjkwLEFBUm91Z2huZXNzRmFjdG9yLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiKTtcbiNlbHNlXG5pbmZvLnNwZWN1bGFyPWNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUluZm8sTixzcGVjdWxhckVudmlyb25tZW50UjAsY29sb3JlZEZyZXNuZWwsQUFSb3VnaG5lc3NGYWN0b3IsbGlnaHQudkxpZ2h0RGlmZnVzZS5yZ2IpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG5wcmVJbmZvLnJvdWdobmVzcz1zaGVlbk91dC5zaGVlbkludGVuc2l0eTtcbiNlbHNlXG5wcmVJbmZvLnJvdWdobmVzcz1hZGp1c3RSb3VnaG5lc3NGcm9tTGlnaHRQcm9wZXJ0aWVzKHNoZWVuT3V0LnNoZWVuUm91Z2huZXNzLGxpZ2h0LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxuaW5mby5zaGVlbj1jb21wdXRlU2hlZW5MaWdodGluZyhwcmVJbmZvLG5vcm1hbFcsc2hlZW5PdXQuc2hlZW5Db2xvcixzcGVjdWxhckVudmlyb25tZW50UjkwLEFBUm91Z2huZXNzRmFjdG9yLGxpZ2h0LnZMaWdodERpZmZ1c2UucmdiKTtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxucHJlSW5mby5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhjbGVhcmNvYXRPdXQuY2xlYXJDb2F0Um91Z2huZXNzLGxpZ2h0LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtpbmZvLmNsZWFyQ29hdD1jb21wdXRlQ2xlYXJDb2F0TGlnaHRpbmcocHJlSW5mbyxjbGVhcmNvYXRPdXQuY2xlYXJDb2F0Tm9ybWFsVyxjbGVhcmNvYXRPdXQuY2xlYXJDb2F0QUFSb3VnaG5lc3NGYWN0b3JzLngsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdEludGVuc2l0eSxsaWdodC52TGlnaHREaWZmdXNlLnJnYik7XG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRcbmxldCBhYnNvcnB0aW9uPWNvbXB1dGVDbGVhckNvYXRMaWdodGluZ0Fic29ycHRpb24oY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5kb3RWUmVmcmFjdCxwcmVJbmZvLkwsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5vcm1hbFcsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdENvbG9yLGNsZWFyY29hdE91dC5jbGVhckNvYXRUaGlja25lc3MsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdEludGVuc2l0eSk7aW5mby5kaWZmdXNlKj1hYnNvcnB0aW9uO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuaW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uKj1hYnNvcnB0aW9uO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5pbmZvLnNwZWN1bGFyKj1hYnNvcnB0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbmluZm8uZGlmZnVzZSo9aW5mby5jbGVhckNvYXQudztcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuaW5mby5zcGVjdWxhcio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5pbmZvLnNoZWVuKj1pbmZvLmNsZWFyQ29hdC53O1xuI2VuZGlmXG4jZW5kaWZcbnJlc3VsdC5kaWZmdXNlKz1pbmZvLmRpZmZ1c2U7XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5yZXN1bHQuZGlmZnVzZVRyYW5zbWlzc2lvbis9aW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5yZXN1bHQuc3BlY3VsYXIrPWluZm8uc3BlY3VsYXI7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbnJlc3VsdC5jbGVhckNvYXQrPWluZm8uY2xlYXJDb2F0O1xuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnJlc3VsdC5zaGVlbis9aW5mby5zaGVlbjtcbiNlbmRpZlxufVxuYmF0Y2hPZmZzZXQrPUNMVVNUTElHSFRfQkFUQ0g7fVxucmV0dXJuIHJlc3VsdDt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJEaXJlY3RMaWdodGluZ0Z1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2x0Y0hlbHBlckZ1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJEaXJlY3RMaWdodGluZ1NldHVwRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IHByZUxpZ2h0aW5nSW5mb1xue2xpZ2h0T2Zmc2V0OiB2ZWMzZixcbmxpZ2h0RGlzdGFuY2VTcXVhcmVkOiBmMzIsXG5saWdodERpc3RhbmNlOiBmMzIsXG5hdHRlbnVhdGlvbjogZjMyLFxuTDogdmVjM2YsXG5IOiB2ZWMzZixcbk5kb3RWOiBmMzIsXG5OZG90TFVuY2xhbXBlZDogZjMyLFxuTmRvdEw6IGYzMixcblZkb3RIOiBmMzIsXG5MZG90VjogZjMyLFxucm91Z2huZXNzOiBmMzIsXG5kaWZmdXNlUm91Z2huZXNzOiBmMzIsXG5zdXJmYWNlQWxiZWRvOiB2ZWMzZixcbiNpZmRlZiBJUklERVNDRU5DRVxuaXJpZGVzY2VuY2VJbnRlbnNpdHk6IGYzMlxuI2VuZGlmXG4jaWYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbmFyZWFMaWdodERpZmZ1c2U6IHZlYzNmLFxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuYXJlYUxpZ2h0U3BlY3VsYXI6IHZlYzNmLFxuYXJlYUxpZ2h0RnJlc25lbDogdmVjNGZcbiNlbmRpZlxuI2VuZGlmXG59O2ZuIGNvbXB1dGVQb2ludEFuZFNwb3RQcmVMaWdodGluZ0luZm8obGlnaHREYXRhOiB2ZWM0ZixWOiB2ZWMzZixOOiB2ZWMzZixwb3NXOiB2ZWMzZiktPnByZUxpZ2h0aW5nSW5mbyB7dmFyIHJlc3VsdDogcHJlTGlnaHRpbmdJbmZvO3Jlc3VsdC5saWdodE9mZnNldD1saWdodERhdGEueHl6LXBvc1c7cmVzdWx0LmxpZ2h0RGlzdGFuY2VTcXVhcmVkPWRvdChyZXN1bHQubGlnaHRPZmZzZXQscmVzdWx0LmxpZ2h0T2Zmc2V0KTtyZXN1bHQubGlnaHREaXN0YW5jZT1zcXJ0KHJlc3VsdC5saWdodERpc3RhbmNlU3F1YXJlZCk7cmVzdWx0Lkw9bm9ybWFsaXplKHJlc3VsdC5saWdodE9mZnNldCk7cmVzdWx0Lkg9bm9ybWFsaXplKFYrcmVzdWx0LkwpO3Jlc3VsdC5WZG90SD1zYXR1cmF0ZShkb3QoVixyZXN1bHQuSCkpO3Jlc3VsdC5OZG90TFVuY2xhbXBlZD1kb3QoTixyZXN1bHQuTCk7cmVzdWx0Lk5kb3RMPXNhdHVyYXRlRXBzKHJlc3VsdC5OZG90TFVuY2xhbXBlZCk7cmV0dXJuIHJlc3VsdDt9XG5mbiBjb21wdXRlRGlyZWN0aW9uYWxQcmVMaWdodGluZ0luZm8obGlnaHREYXRhOiB2ZWM0ZixWOiB2ZWMzZixOOiB2ZWMzZiktPnByZUxpZ2h0aW5nSW5mbyB7dmFyIHJlc3VsdDogcHJlTGlnaHRpbmdJbmZvO3Jlc3VsdC5saWdodERpc3RhbmNlPWxlbmd0aCgtbGlnaHREYXRhLnh5eik7cmVzdWx0Lkw9bm9ybWFsaXplKC1saWdodERhdGEueHl6KTtyZXN1bHQuSD1ub3JtYWxpemUoVityZXN1bHQuTCk7cmVzdWx0LlZkb3RIPXNhdHVyYXRlKGRvdChWLHJlc3VsdC5IKSk7cmVzdWx0Lk5kb3RMVW5jbGFtcGVkPWRvdChOLHJlc3VsdC5MKTtyZXN1bHQuTmRvdEw9c2F0dXJhdGVFcHMocmVzdWx0Lk5kb3RMVW5jbGFtcGVkKTtyZXN1bHQuTGRvdFY9ZG90KHJlc3VsdC5MLFYpO3JldHVybiByZXN1bHQ7fVxuZm4gY29tcHV0ZUhlbWlzcGhlcmljUHJlTGlnaHRpbmdJbmZvKGxpZ2h0RGF0YTogdmVjNGYsVjogdmVjM2YsTjogdmVjM2YpLT5wcmVMaWdodGluZ0luZm8ge3ZhciByZXN1bHQ6IHByZUxpZ2h0aW5nSW5mbztyZXN1bHQuTmRvdEw9ZG90KE4sbGlnaHREYXRhLnh5eikqMC41KzAuNTtyZXN1bHQuTmRvdEw9c2F0dXJhdGVFcHMocmVzdWx0Lk5kb3RMKTtyZXN1bHQuTmRvdExVbmNsYW1wZWQ9cmVzdWx0Lk5kb3RMO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxucmVzdWx0Lkw9bm9ybWFsaXplKGxpZ2h0RGF0YS54eXopO3Jlc3VsdC5IPW5vcm1hbGl6ZShWK3Jlc3VsdC5MKTtyZXN1bHQuVmRvdEg9c2F0dXJhdGUoZG90KFYscmVzdWx0LkgpKTtcbiNlbmRpZlxucmV0dXJuIHJlc3VsdDt9XG4jaWYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbiNpbmNsdWRlPGx0Y0hlbHBlckZ1bmN0aW9ucz5cbnZhciBhcmVhTGlnaHRzTFRDMVNhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBhcmVhTGlnaHRzTFRDMVNhbXBsZXI6IHRleHR1cmVfMmQ8ZjMyPjt2YXIgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyU2FtcGxlcjogc2FtcGxlcjt2YXIgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyOiB0ZXh0dXJlXzJkPGYzMj47Zm4gY29tcHV0ZUFyZWFQcmVMaWdodGluZ0luZm8obHRjMTogdGV4dHVyZV8yZDxmMzI+LGx0YzFTYW1wbGVyOnNhbXBsZXIsbHRjMjp0ZXh0dXJlXzJkPGYzMj4sbHRjMlNhbXBsZXI6c2FtcGxlcix2aWV3RGlyZWN0aW9uVzogdmVjM2Ysdk5vcm1hbDp2ZWMzZix2UG9zaXRpb246dmVjM2YsbGlnaHRDZW50ZXI6dmVjM2YsaGFsZldpZHRoOnZlYzNmLCBoYWxmSGVpZ2h0OnZlYzNmLHJvdWdobmVzczpmMzIpLT5wcmVMaWdodGluZ0luZm8ge3ZhciByZXN1bHQ6IHByZUxpZ2h0aW5nSW5mbzt2YXIgZGF0YTogYXJlYUxpZ2h0RGF0YT1jb21wdXRlQXJlYUxpZ2h0U3BlY3VsYXJEaWZmdXNlRnJlc25lbChsdGMxLGx0YzFTYW1wbGVyLGx0YzIsbHRjMlNhbXBsZXIsdmlld0RpcmVjdGlvblcsdk5vcm1hbCx2UG9zaXRpb24sbGlnaHRDZW50ZXIsaGFsZldpZHRoLGhhbGZIZWlnaHQscm91Z2huZXNzKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5hcmVhTGlnaHRGcmVzbmVsPWRhdGEuRnJlc25lbDtyZXN1bHQuYXJlYUxpZ2h0U3BlY3VsYXI9ZGF0YS5TcGVjdWxhcjtcbiNlbmRpZlxucmVzdWx0LmFyZWFMaWdodERpZmZ1c2UrPWRhdGEuRGlmZnVzZTtyZXR1cm4gcmVzdWx0O31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwicGJyRnJhZ21lbnRFeHRyYURlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdmFyeWluZyB2UG9zaXRpb25XOiB2ZWMzZjtcbiNpZiBERUJVR01PREU+MFxudmFyeWluZyB2Q2xpcFNwYWNlUG9zaXRpb246IHZlYzRmO1xuI2VuZGlmXG4jaW5jbHVkZTxtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb24+WzEuLjddXG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZOb3JtYWxXOiB2ZWMzZjtcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxudmFyeWluZyB2RW52aXJvbm1lbnRJcnJhZGlhbmNlOiB2ZWMzZjtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG52YXJ5aW5nIHZDb2xvcjogdmVjNGY7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxudmFyeWluZyB2Vmlld0RlcHRoOiBmMzI7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJIZWxwZXJGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIE1JTklNVU1WQVJJQU5DRSAwLjAwMDVcbmZuIGNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShyb3VnaG5lc3M6IGYzMiktPmYzMlxue3JldHVybiByb3VnaG5lc3Mqcm91Z2huZXNzK01JTklNVU1WQVJJQU5DRTt9XG5mbiBmcmVzbmVsR3JhemluZ1JlZmxlY3RhbmNlKHJlZmxlY3RhbmNlMDogZjMyKS0+ZjMyIHt2YXIgcmVmbGVjdGFuY2U5MDogZjMyPXNhdHVyYXRlKHJlZmxlY3RhbmNlMCoyNS4wKTtyZXR1cm4gcmVmbGVjdGFuY2U5MDt9XG5mbiBnZXRBQVJvdWdobmVzc0ZhY3RvcnMobm9ybWFsVmVjdG9yOiB2ZWMzZiktPnZlYzJmIHtcbiNpZmRlZiBTUEVDVUxBUkFBXG52YXIgbkRmZHg6IHZlYzNmPWRwZHgobm9ybWFsVmVjdG9yLnh5eik7dmFyIG5EZmR5OiB2ZWMzZj1kcGR5KG5vcm1hbFZlY3Rvci54eXopO3ZhciBzbG9wZVNxdWFyZTogZjMyPW1heChkb3QobkRmZHgsbkRmZHgpLGRvdChuRGZkeSxuRGZkeSkpO3ZhciBnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3I6IGYzMj1wb3coc2F0dXJhdGUoc2xvcGVTcXVhcmUpLDAuMzMzKTt2YXIgZ2VvbWV0cmljQWxwaGFHRmFjdG9yOiBmMzI9c3FydChzbG9wZVNxdWFyZSk7Z2VvbWV0cmljQWxwaGFHRmFjdG9yKj0wLjc1O3JldHVybiB2ZWMyZihnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IsZ2VvbWV0cmljQWxwaGFHRmFjdG9yKTtcbiNlbHNlXG5yZXR1cm4gdmVjMmYoMC4pO1xuI2VuZGlmXG59XG4jaWZkZWYgQU5JU09UUk9QSUNcbiNpZmRlZiBBTklTT1RST1BJQ19MRUdBQ1lcbmZuIGdldEFuaXNvdHJvcGljUm91Z2huZXNzKGFscGhhRzogZjMyLGFuaXNvdHJvcHk6IGYzMiktPnZlYzJmIHt2YXIgYWxwaGFUOiBmMzI9bWF4KGFscGhhRyooMS4wK2FuaXNvdHJvcHkpLE1JTklNVU1WQVJJQU5DRSk7dmFyIGFscGhhQjogZjMyPW1heChhbHBoYUcqKDEuMC1hbmlzb3Ryb3B5KSxNSU5JTVVNVkFSSUFOQ0UpO3JldHVybiB2ZWMyZihhbHBoYVQsYWxwaGFCKTt9XG5mbiBnZXRBbmlzb3Ryb3BpY0JlbnROb3JtYWxzKFQ6IHZlYzNmLEI6IHZlYzNmLE46IHZlYzNmLFY6IHZlYzNmLGFuaXNvdHJvcHk6IGYzMixyb3VnaG5lc3M6IGYzMiktPnZlYzNmIHt2YXIgYW5pc290cm9waWNGcmFtZURpcmVjdGlvbjogdmVjM2Y9c2VsZWN0KFQsQixhbmlzb3Ryb3B5Pj0wLjApO3ZhciBhbmlzb3Ryb3BpY0ZyYW1lVGFuZ2VudDogdmVjM2Y9Y3Jvc3Mobm9ybWFsaXplKGFuaXNvdHJvcGljRnJhbWVEaXJlY3Rpb24pLFYpO3ZhciBhbmlzb3Ryb3BpY0ZyYW1lTm9ybWFsOiB2ZWMzZj1jcm9zcyhhbmlzb3Ryb3BpY0ZyYW1lVGFuZ2VudCxhbmlzb3Ryb3BpY0ZyYW1lRGlyZWN0aW9uKTt2YXIgYW5pc290cm9waWNOb3JtYWw6IHZlYzNmPW5vcm1hbGl6ZShtaXgoTixhbmlzb3Ryb3BpY0ZyYW1lTm9ybWFsLGFicyhhbmlzb3Ryb3B5KSkpO3JldHVybiBhbmlzb3Ryb3BpY05vcm1hbDt9XG4jZWxpZiBBTklTT1RST1BJQ19PUEVOUEJSXG5mbiBnZXRBbmlzb3Ryb3BpY1JvdWdobmVzcyhhbHBoYUc6IGYzMixhbmlzb3Ryb3B5OiBmMzIpLT52ZWMyZiB7dmFyIGFscGhhVDogZjMyPWFscGhhRypzcXJ0KDIuMC8oMS4wKygxLjAtYW5pc290cm9weSkqKDEuMC1hbmlzb3Ryb3B5KSkpO3ZhciBhbHBoYUI6IGYzMj1tYXgoYWxwaGFUKigxLjAtYW5pc290cm9weSksTUlOSU1VTVZBUklBTkNFKTtyZXR1cm4gdmVjMmYoYWxwaGFULGFscGhhQik7fVxuI2Vsc2VcbmZuIGdldEFuaXNvdHJvcGljUm91Z2huZXNzKGFscGhhRzogZjMyLGFuaXNvdHJvcHk6IGYzMiktPnZlYzJmIHt2YXIgYWxwaGFUOiBmMzI9bWF4KG1peChhbHBoYUcsMS4wLGFuaXNvdHJvcHkqYW5pc290cm9weSksTUlOSU1VTVZBUklBTkNFKTt2YXIgYWxwaGFCOiBmMzI9bWF4KGFscGhhRyxNSU5JTVVNVkFSSUFOQ0UpO3JldHVybiB2ZWMyZihhbHBoYVQsYWxwaGFCKTt9XG5mbiBnZXRBbmlzb3Ryb3BpY0JlbnROb3JtYWxzKFQ6IHZlYzNmLEI6IHZlYzNmLE46IHZlYzNmLFY6IHZlYzNmLGFuaXNvdHJvcHk6IGYzMixyb3VnaG5lc3M6IGYzMiktPnZlYzNmIHt2YXIgYmVudE5vcm1hbDogdmVjM2Y9Y3Jvc3MoQixWKTtiZW50Tm9ybWFsPW5vcm1hbGl6ZShjcm9zcyhiZW50Tm9ybWFsLEIpKTt2YXIgc3E9MS4wLWFuaXNvdHJvcHkqKDEuMC1yb3VnaG5lc3MpO3ZhciBhOiBmMzI9c3Eqc3Eqc3Eqc3E7YmVudE5vcm1hbD1ub3JtYWxpemUobWl4KGJlbnROb3JtYWwsTixhKSk7cmV0dXJuIGJlbnROb3JtYWw7fVxuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMRUFSQ09BVCkgfHwgZGVmaW5lZChTU19SRUZSQUNUSU9OKVxuZm4gY29jYUxhbWJlcnRWZWMzKGFscGhhOiB2ZWMzZixkaXN0YW5jZTogZjMyKS0+dmVjM2Yge3JldHVybiBleHAoLWFscGhhKmRpc3RhbmNlKTt9XG5mbiBjb2NhTGFtYmVydChOZG90VlJlZnJhY3Q6IGYzMixOZG90TFJlZnJhY3Q6IGYzMixhbHBoYTogdmVjM2YsdGhpY2tuZXNzOiBmMzIpLT52ZWMzZiB7cmV0dXJuIGNvY2FMYW1iZXJ0VmVjMyhhbHBoYSwodGhpY2tuZXNzKigoTmRvdExSZWZyYWN0K05kb3RWUmVmcmFjdCkvKE5kb3RMUmVmcmFjdCpOZG90VlJlZnJhY3QpKSkpO31cbmZuIGNvbXB1dGVDb2xvckF0RGlzdGFuY2VJbk1lZGlhKGNvbG9yOiB2ZWMzZixkaXN0YW5jZTogZjMyKS0+dmVjM2Yge3JldHVybiAtbG9nKGNvbG9yKS9kaXN0YW5jZTt9XG5mbiBjb21wdXRlQ2xlYXJDb2F0QWJzb3JwdGlvbihOZG90VlJlZnJhY3Q6IGYzMixOZG90TFJlZnJhY3Q6IGYzMixjbGVhckNvYXRDb2xvcjogdmVjM2YsY2xlYXJDb2F0VGhpY2tuZXNzOiBmMzIsY2xlYXJDb2F0SW50ZW5zaXR5OiBmMzIpLT52ZWMzZiB7dmFyIGNsZWFyQ29hdEFic29ycHRpb246IHZlYzNmPW1peCggdmVjM2YoMS4wKSxcbmNvY2FMYW1iZXJ0KE5kb3RWUmVmcmFjdCxOZG90TFJlZnJhY3QsY2xlYXJDb2F0Q29sb3IsY2xlYXJDb2F0VGhpY2tuZXNzKSxcbmNsZWFyQ29hdEludGVuc2l0eSk7cmV0dXJuIGNsZWFyQ29hdEFic29ycHRpb247fVxuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFQVVUT01BVElDXG5mbiBjb21wdXRlRGVmYXVsdE1pY3JvU3VyZmFjZShtaWNyb1N1cmZhY2U6IGYzMixyZWZsZWN0aXZpdHlDb2xvcjogdmVjM2YpLT5mMzJcbntjb25zdCBrUmVmbGVjdGl2aXR5Tm9BbHBoYVdvcmtmbG93X1Ntb290aG5lc3NNYXg6IGYzMj0wLjk1O3ZhciByZWZsZWN0aXZpdHlMdW1pbmFuY2U6IGYzMj1nZXRMdW1pbmFuY2UocmVmbGVjdGl2aXR5Q29sb3IpO3ZhciByZWZsZWN0aXZpdHlMdW1hOiBmMzI9c3FydChyZWZsZWN0aXZpdHlMdW1pbmFuY2UpO3ZhciByZXN1bHRNaWNyb1N1cmZhY2U9cmVmbGVjdGl2aXR5THVtYSprUmVmbGVjdGl2aXR5Tm9BbHBoYVdvcmtmbG93X1Ntb290aG5lc3NNYXg7cmV0dXJuIHJlc3VsdE1pY3JvU3VyZmFjZTt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJIZWxwZXJGdW5jdGlvbnNXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJJQkxGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChSRUZMRUNUSU9OKSB8fCBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pXG5mbiBnZXRMb2RGcm9tQWxwaGFHKGN1YmVNYXBEaW1lbnNpb25QaXhlbHM6IGYzMixtaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGU6IGYzMiktPmYzMiB7dmFyIG1pY3Jvc3VyZmFjZUF2ZXJhZ2VTbG9wZVRleGVsczogZjMyPWN1YmVNYXBEaW1lbnNpb25QaXhlbHMqbWljcm9zdXJmYWNlQXZlcmFnZVNsb3BlO3ZhciBsb2Q6IGYzMj1sb2cyKG1pY3Jvc3VyZmFjZUF2ZXJhZ2VTbG9wZVRleGVscyk7cmV0dXJuIGxvZDt9XG5mbiBnZXRMaW5lYXJMb2RGcm9tUm91Z2huZXNzKGN1YmVNYXBEaW1lbnNpb25QaXhlbHM6IGYzMixyb3VnaG5lc3M6IGYzMiktPmYzMiB7dmFyIGxvZDogZjMyPWxvZzIoY3ViZU1hcERpbWVuc2lvblBpeGVscykqcm91Z2huZXNzO3JldHVybiBsb2Q7fVxuI2VuZGlmXG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmIGRlZmluZWQoUkFESUFOQ0VPQ0NMVVNJT04pXG5mbiBlbnZpcm9ubWVudFJhZGlhbmNlT2NjbHVzaW9uKGFtYmllbnRPY2NsdXNpb246IGYzMixOZG90VlVuY2xhbXBlZDogZjMyKS0+ZjMyIHt2YXIgdGVtcDogZjMyPU5kb3RWVW5jbGFtcGVkK2FtYmllbnRPY2NsdXNpb247cmV0dXJuIHNhdHVyYXRlKHRlbXAqdGVtcC0xLjArYW1iaWVudE9jY2x1c2lvbik7fVxuI2VuZGlmXG4jaWYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmIGRlZmluZWQoSE9SSVpPTk9DQ0xVU0lPTilcbmZuIGVudmlyb25tZW50SG9yaXpvbk9jY2x1c2lvbih2aWV3OiB2ZWMzZixub3JtYWw6IHZlYzNmLGdlb21ldHJpY05vcm1hbDogdmVjM2YpLT5mMzIge3ZhciByZWZsZWN0aW9uOiB2ZWMzZj1yZWZsZWN0KHZpZXcsbm9ybWFsKTt2YXIgdGVtcDogZjMyPXNhdHVyYXRlKDEuMCsxLjEqZG90KHJlZmxlY3Rpb24sZ2VvbWV0cmljTm9ybWFsKSk7cmV0dXJuIHRlbXAqdGVtcDt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSB8fCBkZWZpbmVkKFNTX0xPRElOUkVGUkFDVElPTkFMUEhBKVxuZm4gVU5QQUNLX0xPRCh4OiBmMzIpLT5mMzIge3JldHVybiAoMS4wLXgpKjI1NS4wO31cbmZuIGdldExvZEZyb21BbHBoYUdOZG90VihjdWJlTWFwRGltZW5zaW9uUGl4ZWxzOiBmMzIsYWxwaGFHOiBmMzIsTmRvdFY6IGYzMiktPmYzMiB7dmFyIG1pY3Jvc3VyZmFjZUF2ZXJhZ2VTbG9wZTogZjMyPWFscGhhRzttaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGUqPXNxcnQoYWJzKE5kb3RWKSk7cmV0dXJuIGdldExvZEZyb21BbHBoYUcoY3ViZU1hcERpbWVuc2lvblBpeGVscyxtaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGUpO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBicklCTEZ1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInByZVBhc3NEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBQUkVQQVNTXG4jaWZkZWYgUFJFUEFTU19MT0NBTF9QT1NJVElPTlxudmFyeWluZyB2UG9zaXRpb24gOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfREVQVEhcbnZhcnlpbmcgdlZpZXdQb3M6IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhcbnZhcnlpbmcgdk5vcm1WaWV3RGVwdGg6IGYzMjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUilcbnZhcnlpbmcgdkN1cnJlbnRQb3NpdGlvbjogdmVjNGY7dmFyeWluZyB2UHJldmlvdXNQb3NpdGlvbjogdmVjNGY7XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHByZVBhc3NEZWNsYXJhdGlvbldHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInNhbXBsZXJGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIF9ERUZJTkVOQU1FX1xuI2lmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0xXG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjFcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0yXG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjJcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT0zXG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjNcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT00XG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjRcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT01XG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjVcbiNlbGlmIF9ERUZJTkVOQU1FX0RJUkVDVFVWPT02XG4jZGVmaW5lIHZfVkFSWUlOR05BTUVfVVYgdk1haW5VVjZcbiNlbHNlXG52YXJ5aW5nIHZfVkFSWUlOR05BTUVfVVY6IHZlYzJmO1xuI2VuZGlmXG52YXIgX1NBTVBMRVJOQU1FX1NhbXBsZXJTYW1wbGVyOiBzYW1wbGVyO3ZhciBfU0FNUExFUk5BTUVfU2FtcGxlcjogdGV4dHVyZV8yZDxmMzI+O1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2FtcGxlckZyYWdtZW50RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJzdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYGZuIHRlc3RMaWdodGluZ0ZvclNTUyhkaWZmdXNpb25Qcm9maWxlOiBmMzIpLT5ib29sXG57cmV0dXJuIGRpZmZ1c2lvblByb2ZpbGU8MS47fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9