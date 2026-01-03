"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_harmonicsFunctions_js-core_dist_ShadersWGSL_ShadersInclu-844251"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/harmonicsFunctions.js":
/*!*********************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/harmonicsFunctions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   harmonicsFunctionsWGSL: () => (/* binding */ harmonicsFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "harmonicsFunctions";
const shader = `#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
fn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00
+ uniforms.vSphericalL1_1*(normal.y)
+ uniforms.vSphericalL10*(normal.z)
+ uniforms.vSphericalL11*(normal.x)
+ uniforms.vSphericalL2_2*(normal.y*normal.x)
+ uniforms.vSphericalL2_1*(normal.y*normal.z)
+ uniforms.vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ uniforms.vSphericalL21*(normal.z*normal.x)
+ uniforms.vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}
#else
fn computeEnvironmentIrradiance(normal: vec3f)->vec3f {var Nx: f32=normal.x;var Ny: f32=normal.y;var Nz: f32=normal.z;var C1: vec3f=uniforms.vSphericalZZ.rgb;var Cx: vec3f=uniforms.vSphericalX.rgb;var Cy: vec3f=uniforms.vSphericalY.rgb;var Cz: vec3f=uniforms.vSphericalZ.rgb;var Cxx_zz: vec3f=uniforms.vSphericalXX_ZZ.rgb;var Cyy_zz: vec3f=uniforms.vSphericalYY_ZZ.rgb;var Cxy: vec3f=uniforms.vSphericalXY.rgb;var Cyz: vec3f=uniforms.vSphericalYZ.rgb;var Czx: vec3f=uniforms.vSphericalZX.rgb;var a1: vec3f=Cyy_zz*Ny+Cy;var a2: vec3f=Cyz*Nz+a1;var b1: vec3f=Czx*Nz+Cx;var b2: vec3f=Cxy*Ny+b1;var b3: vec3f=Cxx_zz*Nx+b2;var t1: vec3f=Cz *Nz+C1;var t2: vec3f=a2 *Ny+t1;var t3: vec3f=b3 *Nx+t2;return t3;}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const harmonicsFunctionsWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js":
/*!***************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainUVVaryingDeclarationWGSL: () => (/* binding */ mainUVVaryingDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "mainUVVaryingDeclaration";
const shader = `#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const mainUVVaryingDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js":
/*!*******************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBRDFFunctionsWGSL: () => (/* binding */ pbrBRDFFunctionsWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBRDFFunctions";
const shader = `#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
#define BRDF_DIFFUSE_MODEL_EON 0
#define BRDF_DIFFUSE_MODEL_BURLEY 1
#define BRDF_DIFFUSE_MODEL_LAMBERT 2
#define BRDF_DIFFUSE_MODEL_LEGACY 3
#define DIELECTRIC_SPECULAR_MODEL_GLTF 0
#define DIELECTRIC_SPECULAR_MODEL_OPENPBR 1
#define CONDUCTOR_SPECULAR_MODEL_GLTF 0
#define CONDUCTOR_SPECULAR_MODEL_OPENPBR 1
#if !defined(PBR_VERTEX_SHADER) && !defined(OPENPBR_VERTEX_SHADER)
#ifdef MS_BRDF_ENERGY_CONSERVATION
fn getEnergyConservationFactor(specularEnvironmentR0: vec3f,environmentBrdf: vec3f)->vec3f {return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);}
#endif
#if CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR 
fn getF82Specular(NdotV: f32,F0: vec3f,edgeTint: vec3f,roughness: f32)->vec3f {const cos_theta_max: f32=0.142857143; 
const one_minus_cos_theta_max_to_the_fifth: f32=0.462664366; 
const one_minus_cos_theta_max_to_the_sixth: f32=0.396569457; 
let white_minus_F0: vec3f=vec3f(1.0f)-F0;let b_numerator: vec3f=(F0+white_minus_F0*one_minus_cos_theta_max_to_the_fifth)*(vec3f(1.0)-edgeTint);const b_denominator: f32=cos_theta_max*one_minus_cos_theta_max_to_the_sixth;const b_denominator_reciprocal: f32=1.0f/b_denominator;let b: vec3f=b_numerator*b_denominator_reciprocal; 
let cos_theta: f32=max(roughness,NdotV);let one_minus_cos_theta: f32=1.0-cos_theta;let offset_from_F0: vec3f=(white_minus_F0-b*cos_theta*one_minus_cos_theta)*pow(one_minus_cos_theta,5.0f);return clamp(F0+offset_from_F0,vec3f(0.0f),vec3f(1.0f));}
#endif
#ifdef FUZZENVIRONMENTBRDF
fn getFuzzBRDFLookup(NdotV: f32,perceptualRoughness: f32)->vec3f {let UV: vec2f=vec2f(perceptualRoughness,NdotV);var brdfLookup: vec4f=textureSample(environmentFuzzBrdfSampler,environmentFuzzBrdfSamplerSampler,UV);const RiRange: vec2f=vec2f(0.0f,0.75f);const ARange: vec2f=vec2f(0.005f,0.88f);const BRange: vec2f=vec2f(-0.18f,0.002f);brdfLookup.r=mix(ARange.x, ARange.y, brdfLookup.r);brdfLookup.g=mix(BRange.x, BRange.y, brdfLookup.g);brdfLookup.b=mix(RiRange.x,RiRange.y,brdfLookup.b);return brdfLookup.rgb;}
#endif
#ifdef ENVIRONMENTBRDF
fn getBRDFLookup(NdotV: f32,perceptualRoughness: f32)->vec3f {var UV: vec2f= vec2f(NdotV,perceptualRoughness);var brdfLookup: vec4f= textureSample(environmentBrdfSampler,environmentBrdfSamplerSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup=vec4f(fromRGBD(brdfLookup.rgba),brdfLookup.a);
#endif
return brdfLookup.rgb;}
fn getReflectanceFromBRDFWithEnvLookup(specularEnvironmentR0: vec3f,specularEnvironmentR90: vec3f,environmentBrdf: vec3f)->vec3f {
#ifdef BRDF_V_HEIGHT_CORRELATED
var reflectance: vec3f=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;
#else
var reflectance: vec3f=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;}
fn getReflectanceFromBRDFLookup(specularEnvironmentR0: vec3f,environmentBrdf: vec3f)->vec3f {
#ifdef BRDF_V_HEIGHT_CORRELATED
var reflectance: vec3f=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
var reflectance: vec3f=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;}
#endif
/* NOT USED
#if defined(SHEEN) && defined(SHEEN_SOFTER)
fn getBRDFLookupCharlieSheen(NdotV: f32,perceptualRoughness: f32)->f32
{var c: f32=1.0-NdotV;var c3: f32=c*c*c;return 0.65584461*c3+1.0/(4.16526551+exp(-7.97291361*perceptualRoughness+6.33516894));}
#endif
*/
#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
fn getReflectanceFromAnalyticalBRDFLookup_Jones(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
/**
* The sheen BRDF not containing F can be easily stored in the blue channel of the BRDF texture.
* The blue channel contains DCharlie*VAshikhmin*NdotL as a lokkup table
*/
fn getSheenReflectanceFromBRDFLookup(reflectance0: vec3f,environmentBrdf: vec3f)->vec3f {var sheenEnvironmentReflectance: vec3f=reflectance0*environmentBrdf.b;return sheenEnvironmentReflectance;}
#endif
fn fresnelSchlickGGXVec3(VdotH: f32,reflectance0: vec3f,reflectance90: vec3f)->vec3f
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
fn fresnelSchlickGGX(VdotH: f32,reflectance0: f32,reflectance90: f32)->f32
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
#ifdef CLEARCOAT
fn getR0RemappedForClearCoat(f0: vec3f)->vec3f {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturateVec3(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturateVec3(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
var s: vec3f=sqrt(f0);var t: vec3f=(uniforms.vClearCoatRefractionParams.z+uniforms.vClearCoatRefractionParams.w*s)/(uniforms.vClearCoatRefractionParams.w+uniforms.vClearCoatRefractionParams.z*s);return squareVec3(t);
#endif
}
#endif
#ifdef IRIDESCENCE
const XYZ_TO_REC709: mat3x3f= mat3x3f(
3.2404542,-0.9692660, 0.0556434,
-1.5371385, 1.8760108,-0.2040259,
-0.4985314, 0.0415560, 1.0572252
);fn getIORTfromAirToSurfaceR0(f0: vec3f)->vec3f {var sqrtF0: vec3f=sqrt(f0);return (1.+sqrtF0)/(1.-sqrtF0);}
fn getR0fromIORsVec3(iorT: vec3f,iorI: f32)->vec3f {return squareVec3((iorT- vec3f(iorI))/(iorT+ vec3f(iorI)));}
fn getR0fromIORs(iorT: f32,iorI: f32)->f32 {return square((iorT-iorI)/(iorT+iorI));}
fn evalSensitivity(opd: f32,shift: vec3f)->vec3f {var phase: f32=2.0*PI*opd*1.0e-9;const val: vec3f= vec3f(5.4856e-13,4.4201e-13,5.2481e-13);const pos: vec3f= vec3f(1.6810e+06,1.7953e+06,2.2084e+06);const vr: vec3f= vec3f(4.3278e+09,9.3046e+09,6.6121e+09);var xyz: vec3f=val*sqrt(2.0*PI*vr)*cos(pos*phase+shift)*exp(-square(phase)*vr);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*square(phase));xyz/=1.0685e-7;var srgb: vec3f=XYZ_TO_REC709*xyz;return srgb;}
fn evalIridescence(outsideIOR: f32,eta2: f32,cosTheta1: f32,thinFilmThickness: f32,baseF0: vec3f)->vec3f {var I: vec3f= vec3f(1.0);var iridescenceIOR: f32=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));var sinTheta2Sq: f32=square(outsideIOR/iridescenceIOR)*(1.0-square(cosTheta1));var cosTheta2Sq: f32=1.0-sinTheta2Sq;if (cosTheta2Sq<0.0) {return I;}
var cosTheta2: f32=sqrt(cosTheta2Sq);var R0: f32=getR0fromIORs(iridescenceIOR,outsideIOR);var R12: f32=fresnelSchlickGGX(cosTheta1,R0,1.);var R21: f32=R12;var T121: f32=1.0-R12;var phi12: f32=0.0;if (iridescenceIOR<outsideIOR) {phi12=PI;}
var phi21: f32=PI-phi12;var baseIOR: vec3f=getIORTfromAirToSurfaceR0(clamp(baseF0,vec3f(0.0),vec3f(0.9999))); 
var R1: vec3f=getR0fromIORsVec3(baseIOR,iridescenceIOR);var R23: vec3f=fresnelSchlickGGXVec3(cosTheta2,R1, vec3f(1.));var phi23: vec3f= vec3f(0.0);if (baseIOR[0]<iridescenceIOR) {phi23[0]=PI;}
if (baseIOR[1]<iridescenceIOR) {phi23[1]=PI;}
if (baseIOR[2]<iridescenceIOR) {phi23[2]=PI;}
var opd: f32=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;var phi: vec3f= vec3f(phi21)+phi23;var R123: vec3f=clamp(R12*R23,vec3f(1e-5),vec3f(0.9999));var r123: vec3f=sqrt(R123);var Rs: vec3f=(T121*T121)*R23/( vec3f(1.0)-R123);var C0: vec3f=R12+Rs;I=C0;var Cm: vec3f=Rs-T121;for (var m: i32=1; m<=2; m++)
{Cm*=r123;var Sm: vec3f=2.0*evalSensitivity( f32(m)*opd, f32(m)*phi);I+=Cm*Sm;}
return max(I, vec3f(0.0));}
#endif
fn normalDistributionFunction_TrowbridgeReitzGGX(NdotH: f32,alphaG: f32)->f32
{var a2: f32=alphaG*alphaG;var d: f32=NdotH*NdotH*(a2-1.0)+1.0;return a2/(PI*d*d);}
#ifdef SHEEN
fn normalDistributionFunction_CharlieSheen(NdotH: f32,alphaG: f32)->f32
{var invR: f32=1./alphaG;var cos2h: f32=NdotH*NdotH;var sin2h: f32=1.-cos2h;return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);}
#endif
#ifdef ANISOTROPIC
fn normalDistributionFunction_BurleyGGX_Anisotropic(NdotH: f32,TdotH: f32,BdotH: f32,alphaTB: vec2f)->f32 {var a2: f32=alphaTB.x*alphaTB.y;var v: vec3f= vec3f(alphaTB.y*TdotH,alphaTB.x *BdotH,a2*NdotH);var v2: f32=dot(v,v);var w2: f32=a2/v2;return a2*w2*w2*RECIPROCAL_PI;}
#endif
#ifdef BRDF_V_HEIGHT_CORRELATED
fn smithVisibility_GGXCorrelated(NdotL: f32,NdotV: f32,alphaG: f32)->f32 {
#ifdef MOBILE
var GGXV: f32=NdotL*(NdotV*(1.0-alphaG)+alphaG);var GGXL: f32=NdotV*(NdotL*(1.0-alphaG)+alphaG);return 0.5/(GGXV+GGXL);
#else
var a2: f32=alphaG*alphaG;var GGXV: f32=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);var GGXL: f32=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);return 0.5/(GGXV+GGXL);
#endif
}
#else
fn smithVisibilityG1_TrowbridgeReitzGGXFast(dot: f32,alphaG: f32)->f32
{
#ifdef MOBILE
return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
var alphaSquared: f32=alphaG*alphaG;return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
fn smithVisibility_TrowbridgeReitzGGXFast(NdotL: f32,NdotV: f32,alphaG: f32)->f32
{var visibility: f32=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);return visibility;}
#endif
#ifdef ANISOTROPIC
fn smithVisibility_GGXCorrelated_Anisotropic(NdotL: f32,NdotV: f32,TdotV: f32,BdotV: f32,TdotL: f32,BdotL: f32,alphaTB: vec2f)->f32 {var lambdaV: f32=NdotL*length( vec3f(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));var lambdaL: f32=NdotV*length( vec3f(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));var v: f32=0.5/(lambdaV+lambdaL);return v;}
#endif
#ifdef CLEARCOAT
fn visibility_Kelemen(VdotH: f32)->f32 {return 0.25/(VdotH*VdotH); }
#endif
#ifdef SHEEN
fn visibility_Ashikhmin(NdotL: f32,NdotV: f32)->f32
{return 1./(4.*(NdotL+NdotV-NdotL*NdotV));}
/* NOT USED
#ifdef SHEEN_SOFTER
fn l(x: f32,alphaG: f32)->f32
{var oneMinusAlphaSq: f32=(1.0-alphaG)*(1.0-alphaG);var a: f32=mix(21.5473,25.3245,oneMinusAlphaSq);var b: f32=mix(3.82987,3.32435,oneMinusAlphaSq);var c: f32=mix(0.19823,0.16801,oneMinusAlphaSq);var d: f32=mix(-1.97760,-1.27393,oneMinusAlphaSq);var e: f32=mix(-4.32054,-4.85967,oneMinusAlphaSq);return a/(1.0+b*pow(x,c))+d*x+e;}
fn lambdaSheen(cosTheta: f32,alphaG: f32)->f32
{return abs(cosTheta)<0.5 ? exp(l(cosTheta,alphaG)) : exp(2.0*l(0.5,alphaG)-l(1.0-cosTheta,alphaG));}
fn visibility_CharlieSheen(NdotL: f32,NdotV: f32,alphaG: f32)->f32
{var G: f32=1.0/(1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG));return G/(4.0*NdotV*NdotL);}
#endif
*/
#endif
const constant1_FON: f32=0.5f-2.0f/(3.0f*PI);const constant2_FON: f32=2.0f/3.0f-28.0f/(15.0f*PI);fn E_FON_approx(mu: f32,roughness: f32)->f32
{var sigma: f32=roughness; 
var mucomp: f32=1.0f-mu;var mucomp2: f32=mucomp*mucomp;const Gcoeffs: mat2x2f=mat2x2f(0.0571085289f,-0.332181442f,
0.491881867f,0.0714429953f);var GoverPi: f32=dot(Gcoeffs*vec2f(mucomp,mucomp2),vec2f(1.0f,mucomp2));return (1.0f+sigma*GoverPi)/(1.0f+constant1_FON*sigma);}
fn diffuseBRDF_EON(albedo: vec3f,roughness: f32,NdotL: f32,NdotV: f32,LdotV: f32)->vec3f
{var rho: vec3f=albedo;var sigma: f32=roughness; 
var mu_i: f32=NdotL; 
var mu_o: f32=NdotV; 
var s: f32=LdotV-mu_i*mu_o; 
var sovertF: f32=select(s,s/max(mu_i,mu_o),s>0.0f); 
var AF: f32=1.0f/(1.0f+constant1_FON*sigma); 
var f_ss: vec3f=(rho*RECIPROCAL_PI)*AF*(1.0f+sigma*sovertF); 
var EFo: f32=E_FON_approx(mu_o,sigma); 
var EFi: f32=E_FON_approx(mu_i,sigma); 
var avgEF: f32=AF*(1.0f+constant2_FON*sigma); 
var rho_ms: vec3f=(rho*rho)*avgEF/(vec3f(1.0f)-rho*(1.0f-avgEF));const eps: f32=1.0e-7f;var f_ms: vec3f=(rho_ms*RECIPROCAL_PI)*max(eps,1.0f-EFo) 
* max(eps,1.0f-EFi)
/ max(eps,1.0f-avgEF);return (f_ss+f_ms);}
fn diffuseBRDF_Burley(NdotL: f32,NdotV: f32,VdotH: f32,roughness: f32)->f32 {var diffuseFresnelNV: f32=pow5(saturateEps(1.0-NdotL));var diffuseFresnelNL: f32=pow5(saturateEps(1.0-NdotV));var diffuseFresnel90: f32=0.5+2.0*VdotH*VdotH*roughness;var fresnel: f32 =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);return fresnel/PI;}
#ifdef SS_TRANSLUCENCY
fn transmittanceBRDF_Burley(tintColor: vec3f,diffusionDistance: vec3f,thickness: f32)->vec3f {var S: vec3f=1./maxEpsVec3(diffusionDistance);var temp: vec3f=exp((-0.333333333*thickness)*S);return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);}
fn computeWrappedDiffuseNdotL(NdotL: f32,w: f32)->f32 {var t: f32=1.0+w;var invt2: f32=1.0/(t*t);return saturate((NdotL+w)*invt2);}
#endif
#endif 
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const pbrBRDFFunctionsWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2hhcm1vbmljc0Z1bmN0aW9uc19qcy1jb3JlX2Rpc3RfU2hhZGVyc1dHU0xfU2hhZGVyc0luY2x1LTg0NDI1MS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvaGFybW9uaWNzRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvcGJyQlJERkZ1bmN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWZkZWYgU1BIRVJJQ0FMX0hBUk1PTklDU1xuZm4gY29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZShub3JtYWw6IHZlYzNmKS0+dmVjM2Yge3JldHVybiB1bmlmb3Jtcy52U3BoZXJpY2FsTDAwXG4rIHVuaWZvcm1zLnZTcGhlcmljYWxMMV8xKihub3JtYWwueSlcbisgdW5pZm9ybXMudlNwaGVyaWNhbEwxMCoobm9ybWFsLnopXG4rIHVuaWZvcm1zLnZTcGhlcmljYWxMMTEqKG5vcm1hbC54KVxuKyB1bmlmb3Jtcy52U3BoZXJpY2FsTDJfMioobm9ybWFsLnkqbm9ybWFsLngpXG4rIHVuaWZvcm1zLnZTcGhlcmljYWxMMl8xKihub3JtYWwueSpub3JtYWwueilcbisgdW5pZm9ybXMudlNwaGVyaWNhbEwyMCooKDMuMCpub3JtYWwueipub3JtYWwueiktMS4wKVxuKyB1bmlmb3Jtcy52U3BoZXJpY2FsTDIxKihub3JtYWwueipub3JtYWwueClcbisgdW5pZm9ybXMudlNwaGVyaWNhbEwyMioobm9ybWFsLngqbm9ybWFsLngtKG5vcm1hbC55Km5vcm1hbC55KSk7fVxuI2Vsc2VcbmZuIGNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2Uobm9ybWFsOiB2ZWMzZiktPnZlYzNmIHt2YXIgTng6IGYzMj1ub3JtYWwueDt2YXIgTnk6IGYzMj1ub3JtYWwueTt2YXIgTno6IGYzMj1ub3JtYWwuejt2YXIgQzE6IHZlYzNmPXVuaWZvcm1zLnZTcGhlcmljYWxaWi5yZ2I7dmFyIEN4OiB2ZWMzZj11bmlmb3Jtcy52U3BoZXJpY2FsWC5yZ2I7dmFyIEN5OiB2ZWMzZj11bmlmb3Jtcy52U3BoZXJpY2FsWS5yZ2I7dmFyIEN6OiB2ZWMzZj11bmlmb3Jtcy52U3BoZXJpY2FsWi5yZ2I7dmFyIEN4eF96ejogdmVjM2Y9dW5pZm9ybXMudlNwaGVyaWNhbFhYX1paLnJnYjt2YXIgQ3l5X3p6OiB2ZWMzZj11bmlmb3Jtcy52U3BoZXJpY2FsWVlfWloucmdiO3ZhciBDeHk6IHZlYzNmPXVuaWZvcm1zLnZTcGhlcmljYWxYWS5yZ2I7dmFyIEN5ejogdmVjM2Y9dW5pZm9ybXMudlNwaGVyaWNhbFlaLnJnYjt2YXIgQ3p4OiB2ZWMzZj11bmlmb3Jtcy52U3BoZXJpY2FsWlgucmdiO3ZhciBhMTogdmVjM2Y9Q3l5X3p6Kk55K0N5O3ZhciBhMjogdmVjM2Y9Q3l6Kk56K2ExO3ZhciBiMTogdmVjM2Y9Q3p4Kk56K0N4O3ZhciBiMjogdmVjM2Y9Q3h5Kk55K2IxO3ZhciBiMzogdmVjM2Y9Q3h4X3p6Kk54K2IyO3ZhciB0MTogdmVjM2Y9Q3ogKk56K0MxO3ZhciB0MjogdmVjM2Y9YTIgKk55K3QxO3ZhciB0MzogdmVjM2Y9YjMgKk54K3QyO3JldHVybiB0Mzt9XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGhhcm1vbmljc0Z1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBNQUlOVVZ7WH1cbnZhcnlpbmcgdk1haW5VVntYfTogdmVjMmY7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCUkRGRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBGUkVTTkVMX01BWElNVU1fT05fUk9VR0ggMC4yNVxuI2RlZmluZSBCUkRGX0RJRkZVU0VfTU9ERUxfRU9OIDBcbiNkZWZpbmUgQlJERl9ESUZGVVNFX01PREVMX0JVUkxFWSAxXG4jZGVmaW5lIEJSREZfRElGRlVTRV9NT0RFTF9MQU1CRVJUIDJcbiNkZWZpbmUgQlJERl9ESUZGVVNFX01PREVMX0xFR0FDWSAzXG4jZGVmaW5lIERJRUxFQ1RSSUNfU1BFQ1VMQVJfTU9ERUxfR0xURiAwXG4jZGVmaW5lIERJRUxFQ1RSSUNfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUiAxXG4jZGVmaW5lIENPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9HTFRGIDBcbiNkZWZpbmUgQ09ORFVDVE9SX1NQRUNVTEFSX01PREVMX09QRU5QQlIgMVxuI2lmICFkZWZpbmVkKFBCUl9WRVJURVhfU0hBREVSKSAmJiAhZGVmaW5lZChPUEVOUEJSX1ZFUlRFWF9TSEFERVIpXG4jaWZkZWYgTVNfQlJERl9FTkVSR1lfQ09OU0VSVkFUSU9OXG5mbiBnZXRFbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3Ioc3BlY3VsYXJFbnZpcm9ubWVudFIwOiB2ZWMzZixlbnZpcm9ubWVudEJyZGY6IHZlYzNmKS0+dmVjM2Yge3JldHVybiAxLjArc3BlY3VsYXJFbnZpcm9ubWVudFIwKigxLjAvZW52aXJvbm1lbnRCcmRmLnktMS4wKTt9XG4jZW5kaWZcbiNpZiBDT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUw9PUNPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTF9PUEVOUEJSIFxuZm4gZ2V0RjgyU3BlY3VsYXIoTmRvdFY6IGYzMixGMDogdmVjM2YsZWRnZVRpbnQ6IHZlYzNmLHJvdWdobmVzczogZjMyKS0+dmVjM2Yge2NvbnN0IGNvc190aGV0YV9tYXg6IGYzMj0wLjE0Mjg1NzE0MzsgXG5jb25zdCBvbmVfbWludXNfY29zX3RoZXRhX21heF90b190aGVfZmlmdGg6IGYzMj0wLjQ2MjY2NDM2NjsgXG5jb25zdCBvbmVfbWludXNfY29zX3RoZXRhX21heF90b190aGVfc2l4dGg6IGYzMj0wLjM5NjU2OTQ1NzsgXG5sZXQgd2hpdGVfbWludXNfRjA6IHZlYzNmPXZlYzNmKDEuMGYpLUYwO2xldCBiX251bWVyYXRvcjogdmVjM2Y9KEYwK3doaXRlX21pbnVzX0YwKm9uZV9taW51c19jb3NfdGhldGFfbWF4X3RvX3RoZV9maWZ0aCkqKHZlYzNmKDEuMCktZWRnZVRpbnQpO2NvbnN0IGJfZGVub21pbmF0b3I6IGYzMj1jb3NfdGhldGFfbWF4Km9uZV9taW51c19jb3NfdGhldGFfbWF4X3RvX3RoZV9zaXh0aDtjb25zdCBiX2Rlbm9taW5hdG9yX3JlY2lwcm9jYWw6IGYzMj0xLjBmL2JfZGVub21pbmF0b3I7bGV0IGI6IHZlYzNmPWJfbnVtZXJhdG9yKmJfZGVub21pbmF0b3JfcmVjaXByb2NhbDsgXG5sZXQgY29zX3RoZXRhOiBmMzI9bWF4KHJvdWdobmVzcyxOZG90Vik7bGV0IG9uZV9taW51c19jb3NfdGhldGE6IGYzMj0xLjAtY29zX3RoZXRhO2xldCBvZmZzZXRfZnJvbV9GMDogdmVjM2Y9KHdoaXRlX21pbnVzX0YwLWIqY29zX3RoZXRhKm9uZV9taW51c19jb3NfdGhldGEpKnBvdyhvbmVfbWludXNfY29zX3RoZXRhLDUuMGYpO3JldHVybiBjbGFtcChGMCtvZmZzZXRfZnJvbV9GMCx2ZWMzZigwLjBmKSx2ZWMzZigxLjBmKSk7fVxuI2VuZGlmXG4jaWZkZWYgRlVaWkVOVklST05NRU5UQlJERlxuZm4gZ2V0RnV6ekJSREZMb29rdXAoTmRvdFY6IGYzMixwZXJjZXB0dWFsUm91Z2huZXNzOiBmMzIpLT52ZWMzZiB7bGV0IFVWOiB2ZWMyZj12ZWMyZihwZXJjZXB0dWFsUm91Z2huZXNzLE5kb3RWKTt2YXIgYnJkZkxvb2t1cDogdmVjNGY9dGV4dHVyZVNhbXBsZShlbnZpcm9ubWVudEZ1enpCcmRmU2FtcGxlcixlbnZpcm9ubWVudEZ1enpCcmRmU2FtcGxlclNhbXBsZXIsVVYpO2NvbnN0IFJpUmFuZ2U6IHZlYzJmPXZlYzJmKDAuMGYsMC43NWYpO2NvbnN0IEFSYW5nZTogdmVjMmY9dmVjMmYoMC4wMDVmLDAuODhmKTtjb25zdCBCUmFuZ2U6IHZlYzJmPXZlYzJmKC0wLjE4ZiwwLjAwMmYpO2JyZGZMb29rdXAucj1taXgoQVJhbmdlLngsIEFSYW5nZS55LCBicmRmTG9va3VwLnIpO2JyZGZMb29rdXAuZz1taXgoQlJhbmdlLngsIEJSYW5nZS55LCBicmRmTG9va3VwLmcpO2JyZGZMb29rdXAuYj1taXgoUmlSYW5nZS54LFJpUmFuZ2UueSxicmRmTG9va3VwLmIpO3JldHVybiBicmRmTG9va3VwLnJnYjt9XG4jZW5kaWZcbiNpZmRlZiBFTlZJUk9OTUVOVEJSREZcbmZuIGdldEJSREZMb29rdXAoTmRvdFY6IGYzMixwZXJjZXB0dWFsUm91Z2huZXNzOiBmMzIpLT52ZWMzZiB7dmFyIFVWOiB2ZWMyZj0gdmVjMmYoTmRvdFYscGVyY2VwdHVhbFJvdWdobmVzcyk7dmFyIGJyZGZMb29rdXA6IHZlYzRmPSB0ZXh0dXJlU2FtcGxlKGVudmlyb25tZW50QnJkZlNhbXBsZXIsZW52aXJvbm1lbnRCcmRmU2FtcGxlclNhbXBsZXIsVVYpO1xuI2lmZGVmIEVOVklST05NRU5UQlJERl9SR0JEXG5icmRmTG9va3VwPXZlYzRmKGZyb21SR0JEKGJyZGZMb29rdXAucmdiYSksYnJkZkxvb2t1cC5hKTtcbiNlbmRpZlxucmV0dXJuIGJyZGZMb29rdXAucmdiO31cbmZuIGdldFJlZmxlY3RhbmNlRnJvbUJSREZXaXRoRW52TG9va3VwKHNwZWN1bGFyRW52aXJvbm1lbnRSMDogdmVjM2Ysc3BlY3VsYXJFbnZpcm9ubWVudFI5MDogdmVjM2YsZW52aXJvbm1lbnRCcmRmOiB2ZWMzZiktPnZlYzNmIHtcbiNpZmRlZiBCUkRGX1ZfSEVJR0hUX0NPUlJFTEFURURcbnZhciByZWZsZWN0YW5jZTogdmVjM2Y9KHNwZWN1bGFyRW52aXJvbm1lbnRSOTAtc3BlY3VsYXJFbnZpcm9ubWVudFIwKSplbnZpcm9ubWVudEJyZGYueCtzcGVjdWxhckVudmlyb25tZW50UjAqZW52aXJvbm1lbnRCcmRmLnk7XG4jZWxzZVxudmFyIHJlZmxlY3RhbmNlOiB2ZWMzZj1zcGVjdWxhckVudmlyb25tZW50UjAqZW52aXJvbm1lbnRCcmRmLngrc3BlY3VsYXJFbnZpcm9ubWVudFI5MCplbnZpcm9ubWVudEJyZGYueTtcbiNlbmRpZlxucmV0dXJuIHJlZmxlY3RhbmNlO31cbmZuIGdldFJlZmxlY3RhbmNlRnJvbUJSREZMb29rdXAoc3BlY3VsYXJFbnZpcm9ubWVudFIwOiB2ZWMzZixlbnZpcm9ubWVudEJyZGY6IHZlYzNmKS0+dmVjM2Yge1xuI2lmZGVmIEJSREZfVl9IRUlHSFRfQ09SUkVMQVRFRFxudmFyIHJlZmxlY3RhbmNlOiB2ZWMzZj1taXgoZW52aXJvbm1lbnRCcmRmLnh4eCxlbnZpcm9ubWVudEJyZGYueXl5LHNwZWN1bGFyRW52aXJvbm1lbnRSMCk7XG4jZWxzZVxudmFyIHJlZmxlY3RhbmNlOiB2ZWMzZj1zcGVjdWxhckVudmlyb25tZW50UjAqZW52aXJvbm1lbnRCcmRmLngrZW52aXJvbm1lbnRCcmRmLnk7XG4jZW5kaWZcbnJldHVybiByZWZsZWN0YW5jZTt9XG4jZW5kaWZcbi8qIE5PVCBVU0VEXG4jaWYgZGVmaW5lZChTSEVFTikgJiYgZGVmaW5lZChTSEVFTl9TT0ZURVIpXG5mbiBnZXRCUkRGTG9va3VwQ2hhcmxpZVNoZWVuKE5kb3RWOiBmMzIscGVyY2VwdHVhbFJvdWdobmVzczogZjMyKS0+ZjMyXG57dmFyIGM6IGYzMj0xLjAtTmRvdFY7dmFyIGMzOiBmMzI9YypjKmM7cmV0dXJuIDAuNjU1ODQ0NjEqYzMrMS4wLyg0LjE2NTI2NTUxK2V4cCgtNy45NzI5MTM2MSpwZXJjZXB0dWFsUm91Z2huZXNzKzYuMzM1MTY4OTQpKTt9XG4jZW5kaWZcbiovXG4jaWYgIWRlZmluZWQoRU5WSVJPTk1FTlRCUkRGKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKSB8fCBkZWZpbmVkKEFMUEhBRlJFU05FTClcbmZuIGdldFJlZmxlY3RhbmNlRnJvbUFuYWx5dGljYWxCUkRGTG9va3VwX0pvbmVzKFZkb3ROOiBmMzIscmVmbGVjdGFuY2UwOiB2ZWMzZixyZWZsZWN0YW5jZTkwOiB2ZWMzZixzbW9vdGhuZXNzOiBmMzIpLT52ZWMzZlxue3ZhciB3ZWlnaHQ6IGYzMj1taXgoRlJFU05FTF9NQVhJTVVNX09OX1JPVUdILDEuMCxzbW9vdGhuZXNzKTtyZXR1cm4gcmVmbGVjdGFuY2UwK3dlaWdodCoocmVmbGVjdGFuY2U5MC1yZWZsZWN0YW5jZTApKnBvdzUoc2F0dXJhdGUoMS4wLVZkb3ROKSk7fVxuI2VuZGlmXG4jaWYgZGVmaW5lZChTSEVFTikgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpXG4vKipcbiogVGhlIHNoZWVuIEJSREYgbm90IGNvbnRhaW5pbmcgRiBjYW4gYmUgZWFzaWx5IHN0b3JlZCBpbiB0aGUgYmx1ZSBjaGFubmVsIG9mIHRoZSBCUkRGIHRleHR1cmUuXG4qIFRoZSBibHVlIGNoYW5uZWwgY29udGFpbnMgRENoYXJsaWUqVkFzaGlraG1pbipOZG90TCBhcyBhIGxva2t1cCB0YWJsZVxuKi9cbmZuIGdldFNoZWVuUmVmbGVjdGFuY2VGcm9tQlJERkxvb2t1cChyZWZsZWN0YW5jZTA6IHZlYzNmLGVudmlyb25tZW50QnJkZjogdmVjM2YpLT52ZWMzZiB7dmFyIHNoZWVuRW52aXJvbm1lbnRSZWZsZWN0YW5jZTogdmVjM2Y9cmVmbGVjdGFuY2UwKmVudmlyb25tZW50QnJkZi5iO3JldHVybiBzaGVlbkVudmlyb25tZW50UmVmbGVjdGFuY2U7fVxuI2VuZGlmXG5mbiBmcmVzbmVsU2NobGlja0dHWFZlYzMoVmRvdEg6IGYzMixyZWZsZWN0YW5jZTA6IHZlYzNmLHJlZmxlY3RhbmNlOTA6IHZlYzNmKS0+dmVjM2ZcbntyZXR1cm4gcmVmbGVjdGFuY2UwKyhyZWZsZWN0YW5jZTkwLXJlZmxlY3RhbmNlMCkqcG93NSgxLjAtVmRvdEgpO31cbmZuIGZyZXNuZWxTY2hsaWNrR0dYKFZkb3RIOiBmMzIscmVmbGVjdGFuY2UwOiBmMzIscmVmbGVjdGFuY2U5MDogZjMyKS0+ZjMyXG57cmV0dXJuIHJlZmxlY3RhbmNlMCsocmVmbGVjdGFuY2U5MC1yZWZsZWN0YW5jZTApKnBvdzUoMS4wLVZkb3RIKTt9XG4jaWZkZWYgQ0xFQVJDT0FUXG5mbiBnZXRSMFJlbWFwcGVkRm9yQ2xlYXJDb2F0KGYwOiB2ZWMzZiktPnZlYzNmIHtcbiNpZmRlZiBDTEVBUkNPQVRfREVGQVVMVElPUlxuI2lmZGVmIE1PQklMRVxucmV0dXJuIHNhdHVyYXRlVmVjMyhmMCooZjAqMC41MjY4NjgrMC41MjkzMjQpLTAuMDQ4MjI1Nik7XG4jZWxzZVxucmV0dXJuIHNhdHVyYXRlVmVjMyhmMCooZjAqKDAuOTQxODkyLTAuMjYzMDA4KmYwKSswLjM0NjQ3OSktMC4wMjg1OTk4KTtcbiNlbmRpZlxuI2Vsc2VcbnZhciBzOiB2ZWMzZj1zcXJ0KGYwKTt2YXIgdDogdmVjM2Y9KHVuaWZvcm1zLnZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zLnordW5pZm9ybXMudkNsZWFyQ29hdFJlZnJhY3Rpb25QYXJhbXMudypzKS8odW5pZm9ybXMudkNsZWFyQ29hdFJlZnJhY3Rpb25QYXJhbXMudyt1bmlmb3Jtcy52Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtcy56KnMpO3JldHVybiBzcXVhcmVWZWMzKHQpO1xuI2VuZGlmXG59XG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRVxuY29uc3QgWFlaX1RPX1JFQzcwOTogbWF0M3gzZj0gbWF0M3gzZihcbjMuMjQwNDU0MiwtMC45NjkyNjYwLCAwLjA1NTY0MzQsXG4tMS41MzcxMzg1LCAxLjg3NjAxMDgsLTAuMjA0MDI1OSxcbi0wLjQ5ODUzMTQsIDAuMDQxNTU2MCwgMS4wNTcyMjUyXG4pO2ZuIGdldElPUlRmcm9tQWlyVG9TdXJmYWNlUjAoZjA6IHZlYzNmKS0+dmVjM2Yge3ZhciBzcXJ0RjA6IHZlYzNmPXNxcnQoZjApO3JldHVybiAoMS4rc3FydEYwKS8oMS4tc3FydEYwKTt9XG5mbiBnZXRSMGZyb21JT1JzVmVjMyhpb3JUOiB2ZWMzZixpb3JJOiBmMzIpLT52ZWMzZiB7cmV0dXJuIHNxdWFyZVZlYzMoKGlvclQtIHZlYzNmKGlvckkpKS8oaW9yVCsgdmVjM2YoaW9ySSkpKTt9XG5mbiBnZXRSMGZyb21JT1JzKGlvclQ6IGYzMixpb3JJOiBmMzIpLT5mMzIge3JldHVybiBzcXVhcmUoKGlvclQtaW9ySSkvKGlvclQraW9ySSkpO31cbmZuIGV2YWxTZW5zaXRpdml0eShvcGQ6IGYzMixzaGlmdDogdmVjM2YpLT52ZWMzZiB7dmFyIHBoYXNlOiBmMzI9Mi4wKlBJKm9wZCoxLjBlLTk7Y29uc3QgdmFsOiB2ZWMzZj0gdmVjM2YoNS40ODU2ZS0xMyw0LjQyMDFlLTEzLDUuMjQ4MWUtMTMpO2NvbnN0IHBvczogdmVjM2Y9IHZlYzNmKDEuNjgxMGUrMDYsMS43OTUzZSswNiwyLjIwODRlKzA2KTtjb25zdCB2cjogdmVjM2Y9IHZlYzNmKDQuMzI3OGUrMDksOS4zMDQ2ZSswOSw2LjYxMjFlKzA5KTt2YXIgeHl6OiB2ZWMzZj12YWwqc3FydCgyLjAqUEkqdnIpKmNvcyhwb3MqcGhhc2Urc2hpZnQpKmV4cCgtc3F1YXJlKHBoYXNlKSp2cik7eHl6LngrPTkuNzQ3MGUtMTQqc3FydCgyLjAqUEkqNC41MjgyZSswOSkqY29zKDIuMjM5OWUrMDYqcGhhc2Urc2hpZnRbMF0pKmV4cCgtNC41MjgyZSswOSpzcXVhcmUocGhhc2UpKTt4eXovPTEuMDY4NWUtNzt2YXIgc3JnYjogdmVjM2Y9WFlaX1RPX1JFQzcwOSp4eXo7cmV0dXJuIHNyZ2I7fVxuZm4gZXZhbElyaWRlc2NlbmNlKG91dHNpZGVJT1I6IGYzMixldGEyOiBmMzIsY29zVGhldGExOiBmMzIsdGhpbkZpbG1UaGlja25lc3M6IGYzMixiYXNlRjA6IHZlYzNmKS0+dmVjM2Yge3ZhciBJOiB2ZWMzZj0gdmVjM2YoMS4wKTt2YXIgaXJpZGVzY2VuY2VJT1I6IGYzMj1taXgob3V0c2lkZUlPUixldGEyLHNtb290aHN0ZXAoMC4wLDAuMDMsdGhpbkZpbG1UaGlja25lc3MpKTt2YXIgc2luVGhldGEyU3E6IGYzMj1zcXVhcmUob3V0c2lkZUlPUi9pcmlkZXNjZW5jZUlPUikqKDEuMC1zcXVhcmUoY29zVGhldGExKSk7dmFyIGNvc1RoZXRhMlNxOiBmMzI9MS4wLXNpblRoZXRhMlNxO2lmIChjb3NUaGV0YTJTcTwwLjApIHtyZXR1cm4gSTt9XG52YXIgY29zVGhldGEyOiBmMzI9c3FydChjb3NUaGV0YTJTcSk7dmFyIFIwOiBmMzI9Z2V0UjBmcm9tSU9ScyhpcmlkZXNjZW5jZUlPUixvdXRzaWRlSU9SKTt2YXIgUjEyOiBmMzI9ZnJlc25lbFNjaGxpY2tHR1goY29zVGhldGExLFIwLDEuKTt2YXIgUjIxOiBmMzI9UjEyO3ZhciBUMTIxOiBmMzI9MS4wLVIxMjt2YXIgcGhpMTI6IGYzMj0wLjA7aWYgKGlyaWRlc2NlbmNlSU9SPG91dHNpZGVJT1IpIHtwaGkxMj1QSTt9XG52YXIgcGhpMjE6IGYzMj1QSS1waGkxMjt2YXIgYmFzZUlPUjogdmVjM2Y9Z2V0SU9SVGZyb21BaXJUb1N1cmZhY2VSMChjbGFtcChiYXNlRjAsdmVjM2YoMC4wKSx2ZWMzZigwLjk5OTkpKSk7IFxudmFyIFIxOiB2ZWMzZj1nZXRSMGZyb21JT1JzVmVjMyhiYXNlSU9SLGlyaWRlc2NlbmNlSU9SKTt2YXIgUjIzOiB2ZWMzZj1mcmVzbmVsU2NobGlja0dHWFZlYzMoY29zVGhldGEyLFIxLCB2ZWMzZigxLikpO3ZhciBwaGkyMzogdmVjM2Y9IHZlYzNmKDAuMCk7aWYgKGJhc2VJT1JbMF08aXJpZGVzY2VuY2VJT1IpIHtwaGkyM1swXT1QSTt9XG5pZiAoYmFzZUlPUlsxXTxpcmlkZXNjZW5jZUlPUikge3BoaTIzWzFdPVBJO31cbmlmIChiYXNlSU9SWzJdPGlyaWRlc2NlbmNlSU9SKSB7cGhpMjNbMl09UEk7fVxudmFyIG9wZDogZjMyPTIuMCppcmlkZXNjZW5jZUlPUip0aGluRmlsbVRoaWNrbmVzcypjb3NUaGV0YTI7dmFyIHBoaTogdmVjM2Y9IHZlYzNmKHBoaTIxKStwaGkyMzt2YXIgUjEyMzogdmVjM2Y9Y2xhbXAoUjEyKlIyMyx2ZWMzZigxZS01KSx2ZWMzZigwLjk5OTkpKTt2YXIgcjEyMzogdmVjM2Y9c3FydChSMTIzKTt2YXIgUnM6IHZlYzNmPShUMTIxKlQxMjEpKlIyMy8oIHZlYzNmKDEuMCktUjEyMyk7dmFyIEMwOiB2ZWMzZj1SMTIrUnM7ST1DMDt2YXIgQ206IHZlYzNmPVJzLVQxMjE7Zm9yICh2YXIgbTogaTMyPTE7IG08PTI7IG0rKylcbntDbSo9cjEyMzt2YXIgU206IHZlYzNmPTIuMCpldmFsU2Vuc2l0aXZpdHkoIGYzMihtKSpvcGQsIGYzMihtKSpwaGkpO0krPUNtKlNtO31cbnJldHVybiBtYXgoSSwgdmVjM2YoMC4wKSk7fVxuI2VuZGlmXG5mbiBub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9Ucm93YnJpZGdlUmVpdHpHR1goTmRvdEg6IGYzMixhbHBoYUc6IGYzMiktPmYzMlxue3ZhciBhMjogZjMyPWFscGhhRyphbHBoYUc7dmFyIGQ6IGYzMj1OZG90SCpOZG90SCooYTItMS4wKSsxLjA7cmV0dXJuIGEyLyhQSSpkKmQpO31cbiNpZmRlZiBTSEVFTlxuZm4gbm9ybWFsRGlzdHJpYnV0aW9uRnVuY3Rpb25fQ2hhcmxpZVNoZWVuKE5kb3RIOiBmMzIsYWxwaGFHOiBmMzIpLT5mMzJcbnt2YXIgaW52UjogZjMyPTEuL2FscGhhRzt2YXIgY29zMmg6IGYzMj1OZG90SCpOZG90SDt2YXIgc2luMmg6IGYzMj0xLi1jb3MyaDtyZXR1cm4gKDIuK2ludlIpKnBvdyhzaW4yaCxpbnZSKi41KS8oMi4qUEkpO31cbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG5mbiBub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9CdXJsZXlHR1hfQW5pc290cm9waWMoTmRvdEg6IGYzMixUZG90SDogZjMyLEJkb3RIOiBmMzIsYWxwaGFUQjogdmVjMmYpLT5mMzIge3ZhciBhMjogZjMyPWFscGhhVEIueCphbHBoYVRCLnk7dmFyIHY6IHZlYzNmPSB2ZWMzZihhbHBoYVRCLnkqVGRvdEgsYWxwaGFUQi54ICpCZG90SCxhMipOZG90SCk7dmFyIHYyOiBmMzI9ZG90KHYsdik7dmFyIHcyOiBmMzI9YTIvdjI7cmV0dXJuIGEyKncyKncyKlJFQ0lQUk9DQUxfUEk7fVxuI2VuZGlmXG4jaWZkZWYgQlJERl9WX0hFSUdIVF9DT1JSRUxBVEVEXG5mbiBzbWl0aFZpc2liaWxpdHlfR0dYQ29ycmVsYXRlZChOZG90TDogZjMyLE5kb3RWOiBmMzIsYWxwaGFHOiBmMzIpLT5mMzIge1xuI2lmZGVmIE1PQklMRVxudmFyIEdHWFY6IGYzMj1OZG90TCooTmRvdFYqKDEuMC1hbHBoYUcpK2FscGhhRyk7dmFyIEdHWEw6IGYzMj1OZG90ViooTmRvdEwqKDEuMC1hbHBoYUcpK2FscGhhRyk7cmV0dXJuIDAuNS8oR0dYVitHR1hMKTtcbiNlbHNlXG52YXIgYTI6IGYzMj1hbHBoYUcqYWxwaGFHO3ZhciBHR1hWOiBmMzI9TmRvdEwqc3FydChOZG90ViooTmRvdFYtYTIqTmRvdFYpK2EyKTt2YXIgR0dYTDogZjMyPU5kb3RWKnNxcnQoTmRvdEwqKE5kb3RMLWEyKk5kb3RMKSthMik7cmV0dXJuIDAuNS8oR0dYVitHR1hMKTtcbiNlbmRpZlxufVxuI2Vsc2VcbmZuIHNtaXRoVmlzaWJpbGl0eUcxX1Ryb3dicmlkZ2VSZWl0ekdHWEZhc3QoZG90OiBmMzIsYWxwaGFHOiBmMzIpLT5mMzJcbntcbiNpZmRlZiBNT0JJTEVcbnJldHVybiAxLjAvKGRvdCthbHBoYUcrKDEuMC1hbHBoYUcpKmRvdCApKTtcbiNlbHNlXG52YXIgYWxwaGFTcXVhcmVkOiBmMzI9YWxwaGFHKmFscGhhRztyZXR1cm4gMS4wLyhkb3Qrc3FydChhbHBoYVNxdWFyZWQrKDEuMC1hbHBoYVNxdWFyZWQpKmRvdCpkb3QpKTtcbiNlbmRpZlxufVxuZm4gc21pdGhWaXNpYmlsaXR5X1Ryb3dicmlkZ2VSZWl0ekdHWEZhc3QoTmRvdEw6IGYzMixOZG90VjogZjMyLGFscGhhRzogZjMyKS0+ZjMyXG57dmFyIHZpc2liaWxpdHk6IGYzMj1zbWl0aFZpc2liaWxpdHlHMV9Ucm93YnJpZGdlUmVpdHpHR1hGYXN0KE5kb3RMLGFscGhhRykqc21pdGhWaXNpYmlsaXR5RzFfVHJvd2JyaWRnZVJlaXR6R0dYRmFzdChOZG90VixhbHBoYUcpO3JldHVybiB2aXNpYmlsaXR5O31cbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG5mbiBzbWl0aFZpc2liaWxpdHlfR0dYQ29ycmVsYXRlZF9Bbmlzb3Ryb3BpYyhOZG90TDogZjMyLE5kb3RWOiBmMzIsVGRvdFY6IGYzMixCZG90VjogZjMyLFRkb3RMOiBmMzIsQmRvdEw6IGYzMixhbHBoYVRCOiB2ZWMyZiktPmYzMiB7dmFyIGxhbWJkYVY6IGYzMj1OZG90TCpsZW5ndGgoIHZlYzNmKGFscGhhVEIueCpUZG90VixhbHBoYVRCLnkqQmRvdFYsTmRvdFYpKTt2YXIgbGFtYmRhTDogZjMyPU5kb3RWKmxlbmd0aCggdmVjM2YoYWxwaGFUQi54KlRkb3RMLGFscGhhVEIueSpCZG90TCxOZG90TCkpO3ZhciB2OiBmMzI9MC41LyhsYW1iZGFWK2xhbWJkYUwpO3JldHVybiB2O31cbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuZm4gdmlzaWJpbGl0eV9LZWxlbWVuKFZkb3RIOiBmMzIpLT5mMzIge3JldHVybiAwLjI1LyhWZG90SCpWZG90SCk7IH1cbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5mbiB2aXNpYmlsaXR5X0FzaGlraG1pbihOZG90TDogZjMyLE5kb3RWOiBmMzIpLT5mMzJcbntyZXR1cm4gMS4vKDQuKihOZG90TCtOZG90Vi1OZG90TCpOZG90VikpO31cbi8qIE5PVCBVU0VEXG4jaWZkZWYgU0hFRU5fU09GVEVSXG5mbiBsKHg6IGYzMixhbHBoYUc6IGYzMiktPmYzMlxue3ZhciBvbmVNaW51c0FscGhhU3E6IGYzMj0oMS4wLWFscGhhRykqKDEuMC1hbHBoYUcpO3ZhciBhOiBmMzI9bWl4KDIxLjU0NzMsMjUuMzI0NSxvbmVNaW51c0FscGhhU3EpO3ZhciBiOiBmMzI9bWl4KDMuODI5ODcsMy4zMjQzNSxvbmVNaW51c0FscGhhU3EpO3ZhciBjOiBmMzI9bWl4KDAuMTk4MjMsMC4xNjgwMSxvbmVNaW51c0FscGhhU3EpO3ZhciBkOiBmMzI9bWl4KC0xLjk3NzYwLC0xLjI3MzkzLG9uZU1pbnVzQWxwaGFTcSk7dmFyIGU6IGYzMj1taXgoLTQuMzIwNTQsLTQuODU5Njcsb25lTWludXNBbHBoYVNxKTtyZXR1cm4gYS8oMS4wK2IqcG93KHgsYykpK2QqeCtlO31cbmZuIGxhbWJkYVNoZWVuKGNvc1RoZXRhOiBmMzIsYWxwaGFHOiBmMzIpLT5mMzJcbntyZXR1cm4gYWJzKGNvc1RoZXRhKTwwLjUgPyBleHAobChjb3NUaGV0YSxhbHBoYUcpKSA6IGV4cCgyLjAqbCgwLjUsYWxwaGFHKS1sKDEuMC1jb3NUaGV0YSxhbHBoYUcpKTt9XG5mbiB2aXNpYmlsaXR5X0NoYXJsaWVTaGVlbihOZG90TDogZjMyLE5kb3RWOiBmMzIsYWxwaGFHOiBmMzIpLT5mMzJcbnt2YXIgRzogZjMyPTEuMC8oMS4wK2xhbWJkYVNoZWVuKE5kb3RWLGFscGhhRykrbGFtYmRhU2hlZW4oTmRvdEwsYWxwaGFHKSk7cmV0dXJuIEcvKDQuMCpOZG90VipOZG90TCk7fVxuI2VuZGlmXG4qL1xuI2VuZGlmXG5jb25zdCBjb25zdGFudDFfRk9OOiBmMzI9MC41Zi0yLjBmLygzLjBmKlBJKTtjb25zdCBjb25zdGFudDJfRk9OOiBmMzI9Mi4wZi8zLjBmLTI4LjBmLygxNS4wZipQSSk7Zm4gRV9GT05fYXBwcm94KG11OiBmMzIscm91Z2huZXNzOiBmMzIpLT5mMzJcbnt2YXIgc2lnbWE6IGYzMj1yb3VnaG5lc3M7IFxudmFyIG11Y29tcDogZjMyPTEuMGYtbXU7dmFyIG11Y29tcDI6IGYzMj1tdWNvbXAqbXVjb21wO2NvbnN0IEdjb2VmZnM6IG1hdDJ4MmY9bWF0MngyZigwLjA1NzEwODUyODlmLC0wLjMzMjE4MTQ0MmYsXG4wLjQ5MTg4MTg2N2YsMC4wNzE0NDI5OTUzZik7dmFyIEdvdmVyUGk6IGYzMj1kb3QoR2NvZWZmcyp2ZWMyZihtdWNvbXAsbXVjb21wMiksdmVjMmYoMS4wZixtdWNvbXAyKSk7cmV0dXJuICgxLjBmK3NpZ21hKkdvdmVyUGkpLygxLjBmK2NvbnN0YW50MV9GT04qc2lnbWEpO31cbmZuIGRpZmZ1c2VCUkRGX0VPTihhbGJlZG86IHZlYzNmLHJvdWdobmVzczogZjMyLE5kb3RMOiBmMzIsTmRvdFY6IGYzMixMZG90VjogZjMyKS0+dmVjM2Zcbnt2YXIgcmhvOiB2ZWMzZj1hbGJlZG87dmFyIHNpZ21hOiBmMzI9cm91Z2huZXNzOyBcbnZhciBtdV9pOiBmMzI9TmRvdEw7IFxudmFyIG11X286IGYzMj1OZG90VjsgXG52YXIgczogZjMyPUxkb3RWLW11X2kqbXVfbzsgXG52YXIgc292ZXJ0RjogZjMyPXNlbGVjdChzLHMvbWF4KG11X2ksbXVfbykscz4wLjBmKTsgXG52YXIgQUY6IGYzMj0xLjBmLygxLjBmK2NvbnN0YW50MV9GT04qc2lnbWEpOyBcbnZhciBmX3NzOiB2ZWMzZj0ocmhvKlJFQ0lQUk9DQUxfUEkpKkFGKigxLjBmK3NpZ21hKnNvdmVydEYpOyBcbnZhciBFRm86IGYzMj1FX0ZPTl9hcHByb3gobXVfbyxzaWdtYSk7IFxudmFyIEVGaTogZjMyPUVfRk9OX2FwcHJveChtdV9pLHNpZ21hKTsgXG52YXIgYXZnRUY6IGYzMj1BRiooMS4wZitjb25zdGFudDJfRk9OKnNpZ21hKTsgXG52YXIgcmhvX21zOiB2ZWMzZj0ocmhvKnJobykqYXZnRUYvKHZlYzNmKDEuMGYpLXJobyooMS4wZi1hdmdFRikpO2NvbnN0IGVwczogZjMyPTEuMGUtN2Y7dmFyIGZfbXM6IHZlYzNmPShyaG9fbXMqUkVDSVBST0NBTF9QSSkqbWF4KGVwcywxLjBmLUVGbykgXG4qIG1heChlcHMsMS4wZi1FRmkpXG4vIG1heChlcHMsMS4wZi1hdmdFRik7cmV0dXJuIChmX3NzK2ZfbXMpO31cbmZuIGRpZmZ1c2VCUkRGX0J1cmxleShOZG90TDogZjMyLE5kb3RWOiBmMzIsVmRvdEg6IGYzMixyb3VnaG5lc3M6IGYzMiktPmYzMiB7dmFyIGRpZmZ1c2VGcmVzbmVsTlY6IGYzMj1wb3c1KHNhdHVyYXRlRXBzKDEuMC1OZG90TCkpO3ZhciBkaWZmdXNlRnJlc25lbE5MOiBmMzI9cG93NShzYXR1cmF0ZUVwcygxLjAtTmRvdFYpKTt2YXIgZGlmZnVzZUZyZXNuZWw5MDogZjMyPTAuNSsyLjAqVmRvdEgqVmRvdEgqcm91Z2huZXNzO3ZhciBmcmVzbmVsOiBmMzIgPVxuKDEuMCsoZGlmZnVzZUZyZXNuZWw5MC0xLjApKmRpZmZ1c2VGcmVzbmVsTkwpICpcbigxLjArKGRpZmZ1c2VGcmVzbmVsOTAtMS4wKSpkaWZmdXNlRnJlc25lbE5WKTtyZXR1cm4gZnJlc25lbC9QSTt9XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5mbiB0cmFuc21pdHRhbmNlQlJERl9CdXJsZXkodGludENvbG9yOiB2ZWMzZixkaWZmdXNpb25EaXN0YW5jZTogdmVjM2YsdGhpY2tuZXNzOiBmMzIpLT52ZWMzZiB7dmFyIFM6IHZlYzNmPTEuL21heEVwc1ZlYzMoZGlmZnVzaW9uRGlzdGFuY2UpO3ZhciB0ZW1wOiB2ZWMzZj1leHAoKC0wLjMzMzMzMzMzMyp0aGlja25lc3MpKlMpO3JldHVybiB0aW50Q29sb3IucmdiKjAuMjUqKHRlbXAqdGVtcCp0ZW1wKzMuMCp0ZW1wKTt9XG5mbiBjb21wdXRlV3JhcHBlZERpZmZ1c2VOZG90TChOZG90TDogZjMyLHc6IGYzMiktPmYzMiB7dmFyIHQ6IGYzMj0xLjArdzt2YXIgaW52dDI6IGYzMj0xLjAvKHQqdCk7cmV0dXJuIHNhdHVyYXRlKChOZG90TCt3KSppbnZ0Mik7fVxuI2VuZGlmXG4jZW5kaWYgXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQlJERkZ1bmN0aW9uc1dHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==