"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_ShadersInclude_harmonicsFunctions_js-core_dist_Shaders_ShadersInclude_pbrBl-a0c5db"],{

/***/ "../core/dist/Shaders/ShadersInclude/harmonicsFunctions.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/harmonicsFunctions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   harmonicsFunctions: () => (/* binding */ harmonicsFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "harmonicsFunctions";
const shader = `#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
vec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00
+ vSphericalL1_1*(normal.y)
+ vSphericalL10*(normal.z)
+ vSphericalL11*(normal.x)
+ vSphericalL2_2*(normal.y*normal.x)
+ vSphericalL2_1*(normal.y*normal.z)
+ vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ vSphericalL21*(normal.z*normal.x)
+ vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}
#else
vec3 computeEnvironmentIrradiance(vec3 normal) {float Nx=normal.x;float Ny=normal.y;float Nz=normal.z;vec3 C1=vSphericalZZ.rgb;vec3 Cx=vSphericalX.rgb;vec3 Cy=vSphericalY.rgb;vec3 Cz=vSphericalZ.rgb;vec3 Cxx_zz=vSphericalXX_ZZ.rgb;vec3 Cyy_zz=vSphericalYY_ZZ.rgb;vec3 Cxy=vSphericalXY.rgb;vec3 Cyz=vSphericalYZ.rgb;vec3 Czx=vSphericalZX.rgb;vec3 a1=Cyy_zz*Ny+Cy;vec3 a2=Cyz*Nz+a1;vec3 b1=Czx*Nz+Cx;vec3 b2=Cxy*Ny+b1;vec3 b3=Cxx_zz*Nx+b2;vec3 t1=Cz *Nz+C1;vec3 t2=a2 *Ny+t1;vec3 t3=b3 *Nx+t2;return t3;}
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const harmonicsFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockImageProcessing.js":
/*!**********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockImageProcessing.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockImageProcessing: () => (/* binding */ pbrBlockImageProcessing)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockImageProcessing";
const shader = `#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)
#if !defined(SKIPFINALCOLORCLAMP)
finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#endif
#else
finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA
finalColor.rgb*=finalColor.a;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockImageProcessing = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockNormalGeometric.js":
/*!**********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockNormalGeometric.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockNormalGeometric: () => (/* binding */ pbrBlockNormalGeometric)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockNormalGeometric";
const shader = `vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockNormalGeometric = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrBlockPrePass.js":
/*!**************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrBlockPrePass.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrBlockPrePass: () => (/* binding */ pbrBlockPrePass)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrBlockPrePass";
const shader = `#if SCENE_MRT_COUNT>0
float writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
gl_FragData[PREPASS_LOCAL_POSITION_INDEX]=vec4(vPosition,writeGeometryInfo);
#endif
#if defined(PREPASS_VELOCITY)
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w)-(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(surfaceAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
vec3 sqAlbedo=sqrt(surfaceAlbedo); 
#endif
#ifdef PREPASS_IRRADIANCE
vec3 irradiance=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
#ifdef SS_SCATTERING
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=vec4(finalColor.rgb-irradiance,finalColor.a); 
#endif
irradiance/=sqAlbedo;
#else
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=finalColor; 
#endif
float scatteringDiffusionProfile=255.;
#endif
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(clamp(irradiance,vec3(0.),vec3(1.)),writeGeometryInfo*scatteringDiffusionProfile/255.); 
#elif defined(PREPASS_COLOR)
gl_FragData[PREPASS_COLOR_INDEX]=vec4(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
gl_FragData[PREPASS_NORMALIZED_VIEW_DEPTH_INDEX]=vec4(vNormViewDepth,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalW,writeGeometryInfo);
#else
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
gl_FragData[PREPASS_WORLD_NORMAL_INDEX]=vec4(normalW*0.5+0.5,writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqAlbedo,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#ifndef UNLIT
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(specularEnvironmentR0,microSurface)*writeGeometryInfo;
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4( 0.0,0.0,0.0,1.0 )*writeGeometryInfo;
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrBlockPrePass = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrDebug.js":
/*!*******************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrDebug.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDebug: () => (/* binding */ pbrDebug)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrDebug";
const shader = `#if DEBUGMODE>0
if (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {
#if DEBUGMODE==1
gl_FragColor.rgb=vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==2 && defined(NORMAL)
gl_FragColor.rgb=vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==3 && defined(BUMP) || DEBUGMODE==3 && defined(PARALLAX) || DEBUGMODE==3 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==4 && defined(BUMP) || DEBUGMODE==4 && defined(PARALLAX) || DEBUGMODE==4 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==5
gl_FragColor.rgb=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==6 && defined(MAINUV1)
gl_FragColor.rgb=vec3(vMainUV1,0.0);
#elif DEBUGMODE==7 && defined(MAINUV2)
gl_FragColor.rgb=vec3(vMainUV2,0.0);
#elif DEBUGMODE==8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==10 && defined(CLEARCOAT)
gl_FragColor.rgb=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==11 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==12 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==13 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==20 && defined(ALBEDO)
gl_FragColor.rgb=albedoTexture.rgb;
#ifndef GAMMAALBEDO
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==21 && defined(AMBIENT)
gl_FragColor.rgb=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE==22 && defined(OPACITY)
gl_FragColor.rgb=opacityMap.rgb;
#elif DEBUGMODE==23 && defined(EMISSIVE)
gl_FragColor.rgb=emissiveColorTex.rgb;
#ifndef GAMMAEMISSIVE
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==24 && defined(LIGHTMAP)
gl_FragColor.rgb=lightmapColor.rgb;
#ifndef GAMMALIGHTMAP
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE==26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE==28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
gl_FragColor.rgb=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE==29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
gl_FragColor.rgb=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE==30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
gl_FragColor.rgb=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE==31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
gl_FragColor.rgb=subSurfaceOut.thicknessMap.rgb;
#elif DEBUGMODE==32 && defined(BUMP)
gl_FragColor.rgb=texture2D(bumpSampler,vBumpUV).rgb;
#elif DEBUGMODE==40 && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==41 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentRadiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==42 && defined(CLEARCOAT) && defined(REFLECTION)
gl_FragColor.rgb=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==50
gl_FragColor.rgb=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==51 && defined(SPECULARTERM)
gl_FragColor.rgb=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==52 && defined(CLEARCOAT)
gl_FragColor.rgb=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==53 && defined(SHEEN)
gl_FragColor.rgb=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==54 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentIrradiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==60
gl_FragColor.rgb=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==61
gl_FragColor.rgb=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==62 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=vec3(reflectivityOut.metallic);
#elif DEBUGMODE==71 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.metallicF0;
#elif DEBUGMODE==63
gl_FragColor.rgb=vec3(roughness);
#elif DEBUGMODE==64
gl_FragColor.rgb=vec3(alphaG);
#elif DEBUGMODE==65
gl_FragColor.rgb=vec3(NdotV);
#elif DEBUGMODE==66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
gl_FragColor.rgb=clearcoatOut.clearCoatColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==67 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE==68 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE==69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
gl_FragColor.rgb=subSurfaceOut.transmittance;
#elif DEBUGMODE==70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.refractionTransmittance;
#elif DEBUGMODE==72
gl_FragColor.rgb=vec3(microSurface);
#elif DEBUGMODE==73
gl_FragColor.rgb=vAlbedoColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==74 && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=vReflectivityColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==75
gl_FragColor.rgb=vEmissiveColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==80 && defined(RADIANCEOCCLUSION)
gl_FragColor.rgb=vec3(seo);
#elif DEBUGMODE==81 && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
gl_FragColor.rgb=vec3(eho);
#elif DEBUGMODE==82 && defined(MS_BRDF_ENERGY_CONSERVATION)
gl_FragColor.rgb=vec3(energyConservationFactor);
#elif DEBUGMODE==83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=baseSpecularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==85 && defined(SHEEN) && defined(REFLECTION)
gl_FragColor.rgb=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==86 && defined(ALPHABLEND)
gl_FragColor.rgb=vec3(luminanceOverAlpha);
#elif DEBUGMODE==87
gl_FragColor.rgb=vec3(alpha);
#elif DEBUGMODE==88 && defined(ALBEDO)
gl_FragColor.rgb=vec3(albedoTexture.a);
#elif DEBUGMODE==89
gl_FragColor.rgb=aoOut.ambientOcclusionColor.rgb;
#else
float stripeWidth=30.;float stripePos=floor(gl_FragCoord.x/stripeWidth);float whichColor=mod(stripePos,2.);vec3 color1=vec3(.6,.2,.2);vec3 color2=vec3(.3,.1,.1);gl_FragColor.rgb=mix(color1,color2,whichColor);
#endif
gl_FragColor.rgb*=vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
gl_FragColor.rgb=normalize(gl_FragColor.rgb)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
gl_FragColor.rgb=toGammaSpace(gl_FragColor.rgb);
#endif
gl_FragColor.a=1.0;
#ifdef PREPASS
gl_FragData[0]=toLinearSpace(gl_FragColor); 
gl_FragData[1]=vec4(0.,0.,0.,0.); 
#endif
#ifdef DEBUGMODE_FORCERETURN
return;
#endif
}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrDebug = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrDirectLightingFalloffFunctions.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrDirectLightingFalloffFunctions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDirectLightingFalloffFunctions: () => (/* binding */ pbrDirectLightingFalloffFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrDirectLightingFalloffFunctions";
const shader = `float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
{return max(0.,1.0-length(lightOffset)/range);}
float computeDistanceLightFalloff_Physical(float lightDistanceSquared)
{return 1.0/maxEps(lightDistanceSquared);}
float computeDistanceLightFalloff_GLTF(float lightDistanceSquared,float inverseSquaredRange)
{float lightDistanceFalloff=1.0/maxEps(lightDistanceSquared);float factor=lightDistanceSquared*inverseSquaredRange;float attenuation=saturate(1.0-factor*factor);attenuation*=attenuation;lightDistanceFalloff*=attenuation;return lightDistanceFalloff;}
float computeDistanceLightFalloff(vec3 lightOffset,float lightDistanceSquared,float range,float inverseSquaredRange)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
float computeDirectionalLightFalloff_Standard(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent)
{float falloff=0.0;float cosAngle=maxEps(dot(-lightDirection,directionToLightCenterW));if (cosAngle>=cosHalfAngle)
{falloff=max(0.,pow(cosAngle,exponent));}
return falloff;}
float computeDirectionalLightFalloff_IES(vec3 lightDirection,vec3 directionToLightCenterW,sampler2D iesLightSampler)
{float cosAngle=dot(-lightDirection,directionToLightCenterW);float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
float computeDirectionalLightFalloff_Physical(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle)
{const float kMinusLog2ConeAngleIntensityRatio=6.64385618977; 
float concentrationKappa=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);vec4 lightDirectionSpreadSG=vec4(-lightDirection*concentrationKappa,-concentrationKappa);float falloff=exp2(dot(vec4(directionToLightCenterW,1.0),lightDirectionSpreadSG));return falloff;}
float computeDirectionalLightFalloff_GLTF(vec3 lightDirection,vec3 directionToLightCenterW,float lightAngleScale,float lightAngleOffset)
{float cd=dot(-lightDirection,directionToLightCenterW);float falloff=saturate(cd*lightAngleScale+lightAngleOffset);falloff*=falloff;return falloff;}
float computeDirectionalLightFalloff(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent,float lightAngleScale,float lightAngleOffset)
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
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrDirectLightingFalloffFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrDirectLightingFunctions.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrDirectLightingFunctions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDirectLightingFunctions: () => (/* binding */ pbrDirectLightingFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrDirectLightingFunctions";
const shader = `#define CLEARCOATREFLECTANCE90 1.0
struct lightingInfo
{vec3 diffuse;
#ifdef SS_TRANSLUCENCY
vec3 diffuseTransmission;
#endif
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef CLEARCOAT
vec4 clearCoat;
#endif
#ifdef SHEEN
vec3 sheen;
#endif
};float adjustRoughnessFromLightProperties(float roughness,float lightRadius,float lightDistance) {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)
float lightRoughness=lightRadius/lightDistance;float totalRoughness=saturate(lightRoughness+roughness);return totalRoughness;
#else
return roughness;
#endif
}
vec3 computeHemisphericDiffuseLighting(preLightingInfo info,vec3 lightColor,vec3 groundColor) {return mix(groundColor,lightColor,info.NdotL);}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec3 computeAreaDiffuseLighting(preLightingInfo info,vec3 lightColor) {return info.areaLightDiffuse*lightColor;}
#endif
vec3 computeDiffuseLighting(preLightingInfo info,vec3 lightColor) {vec3 diffuseTerm=vec3(1.0/PI);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_LEGACY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.diffuseRoughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
vec3 clampedAlbedo=clamp(info.surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseTerm=diffuseBRDF_EON(clampedAlbedo,info.diffuseRoughness,info.NdotL,info.NdotV,info.LdotV);diffuseTerm/=clampedAlbedo;
#endif
return diffuseTerm*info.attenuation*info.NdotL*lightColor;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return toLinearSpace(textureColor);}
#ifdef SS_TRANSLUCENCY
vec3 computeDiffuseTransmittedLighting(preLightingInfo info,vec3 lightColor,vec3 transmittance) {vec3 transmittanceNdotL=vec3(0.);float NdotL=absEps(info.NdotLUnclamped);
#ifndef SS_TRANSLUCENCY_LEGACY
if (info.NdotLUnclamped<0.0) {
#endif
float wrapNdotL=computeWrappedDiffuseNdotL(NdotL,0.02);float trAdapt=step(0.,info.NdotLUnclamped);transmittanceNdotL=mix(transmittance*wrapNdotL,vec3(wrapNdotL),trAdapt);
#ifndef SS_TRANSLUCENCY_LEGACY
}
vec3 diffuseTerm=vec3(1.0/PI);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_LEGACY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.diffuseRoughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
vec3 clampedAlbedo=clamp(info.surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseTerm=diffuseBRDF_EON(clampedAlbedo,info.diffuseRoughness,info.NdotL,info.NdotV,info.LdotV);diffuseTerm/=clampedAlbedo;
#endif
#else
float diffuseTerm=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);
#endif
return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;}
#endif
#ifdef SPECULARTERM
vec3 computeSpecularLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 fresnel,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float roughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(roughness);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
float smithVisibility=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
vec3 specTerm=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec3 computeAreaSpecularLighting(preLightingInfo info,vec3 specularColor,vec3 reflectance0,vec3 reflectance90) {vec3 fresnel=specularColor*info.areaLightFresnel.x*reflectance0+( vec3( 1.0 )-specularColor )*info.areaLightFresnel.y*reflectance90;return specularColor*fresnel*info.areaLightSpecular;}
#endif
#endif
#ifdef FUZZ
float evalFuzz(vec3 L,float NdotL,float NdotV,vec3 T,vec3 B,vec3 ltcLut)
{if (NdotL<=0.0 || NdotV<=0.0)
return 0.0;mat3 M=mat3(
vec3(ltcLut.r,0.0,0.0),
vec3(ltcLut.g,1.0,0.0),
vec3(0.0,0.0,1.0)
);vec3 Llocal=vec3(dot(L,T),dot(L,B),NdotL);vec3 Lwarp=normalize(M*Llocal);float cosThetaWarp=max(Lwarp.z,0.0);return cosThetaWarp*NdotL;}
#endif
#if defined(ANISOTROPIC) && defined(ANISOTROPIC_OPENPBR)
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float TdotH=dot(T,info.H);float BdotH=dot(B,info.H);float TdotV=dot(T,V);float BdotV=dot(B,V);float TdotL=dot(T,info.L);float BdotL=dot(B,info.L);float alphaG=convertRoughnessToAverageSlope(info.roughness);vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,square(geometricRoughnessFactor));float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);vec3 specTerm=vec3(distribution*smithVisibility);return specTerm*info.attenuation*info.NdotL*lightColor;}
#elif defined(ANISOTROPIC)
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float TdotH=dot(T,info.H);float BdotH=dot(B,info.H);float TdotV=dot(T,V);float BdotV=dot(B,V);float TdotL=dot(T,info.L);float BdotL=dot(B,info.L);float alphaG=convertRoughnessToAverageSlope(info.roughness);vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,square(geometricRoughnessFactor));vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);vec3 specTerm=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef CLEARCOAT
vec4 computeClearCoatLighting(preLightingInfo info,vec3 Ncc,float geometricRoughnessFactor,float clearCoatIntensity,vec3 lightColor) {float NccdotL=saturateEps(dot(Ncc,info.L));float NccdotH=saturateEps(dot(Ncc,info.H));float clearCoatRoughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(clearCoatRoughness);float fresnel=fresnelSchlickGGX(info.VdotH,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnel*=clearCoatIntensity;float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);float kelemenVisibility=visibility_Kelemen(info.VdotH);float clearCoatTerm=fresnel*distribution*kelemenVisibility;return vec4(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);}
vec3 computeClearCoatLightingAbsorption(float NdotVRefract,vec3 L,vec3 Ncc,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {vec3 LRefract=-refract(L,Ncc,vClearCoatRefractionParams.y);float NdotLRefract=saturateEps(dot(Ncc,LRefract));vec3 absorption=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);return absorption;}
#endif
#ifdef SHEEN
vec3 computeSheenLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float roughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(roughness);float fresnel=1.;float distribution=normalDistributionFunction_CharlieSheen(NdotH,alphaG);/*#ifdef SHEEN_SOFTER
float visibility=visibility_CharlieSheen(info.NdotL,info.NdotV,alphaG);
#else */
float visibility=visibility_Ashikhmin(info.NdotL,info.NdotV);/* #endif */
float sheenTerm=fresnel*distribution*visibility;return sheenTerm*info.attenuation*info.NdotL*lightColor;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrDirectLightingFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrDirectLightingSetupFunctions.js":
/*!******************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrDirectLightingSetupFunctions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrDirectLightingSetupFunctions: () => (/* binding */ pbrDirectLightingSetupFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ltcHelperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ltcHelperFunctions */ "../core/dist/Shaders/ShadersInclude/ltcHelperFunctions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrDirectLightingSetupFunctions";
const shader = `struct preLightingInfo
{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;
#ifdef IRIDESCENCE
float iridescenceIntensity;
#endif
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec3 areaLightDiffuse;
#ifdef SPECULARTERM
vec3 areaLightSpecular;vec4 areaLightFresnel;
#endif
#endif
};preLightingInfo computePointAndSpotPreLightingInfo(vec4 lightData,vec3 V,vec3 N,vec3 posW) {preLightingInfo result;result.lightOffset=lightData.xyz-posW;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);result.L=normalize(result.lightOffset);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);result.LdotV=0.;result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
preLightingInfo computeDirectionalPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {preLightingInfo result;result.lightDistance=length(-lightData.xyz);result.L=normalize(-lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);result.LdotV=dot(result.L,V);result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
preLightingInfo computeHemisphericPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {preLightingInfo result;result.NdotL=dot(N,lightData.xyz)*0.5+0.5;result.NdotL=saturateEps(result.NdotL);result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));
#endif
result.LdotV=0.;result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
uniform sampler2D areaLightsLTC1Sampler;uniform sampler2D areaLightsLTC2Sampler;preLightingInfo computeAreaPreLightingInfo(sampler2D ltc1,sampler2D ltc2,vec3 viewDirectionW,vec3 vNormal,vec3 vPosition,vec4 lightData,vec3 halfWidth,vec3 halfHeight,float roughness )
{preLightingInfo result;result.lightOffset=lightData.xyz-vPosition;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);areaLightData data=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc2,viewDirectionW,vNormal,vPosition,lightData.xyz,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
result.areaLightFresnel=data.Fresnel;result.areaLightSpecular=data.Specular;
#endif
result.areaLightDiffuse=data.Diffuse;result.LdotV=0.;result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrDirectLightingSetupFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrFragmentExtraDeclaration.js":
/*!**************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrFragmentExtraDeclaration.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrFragmentExtraDeclaration: () => (/* binding */ pbrFragmentExtraDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainUVVaryingDeclaration */ "../core/dist/Shaders/ShadersInclude/mainUVVaryingDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrFragmentExtraDeclaration";
const shader = `varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrFragmentExtraDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrHelperFunctions.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrHelperFunctions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrHelperFunctions: () => (/* binding */ pbrHelperFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrHelperFunctions";
const shader = `#define MINIMUMVARIANCE 0.0005
float convertRoughnessToAverageSlope(float roughness)
{return square(roughness)+MINIMUMVARIANCE;}
float fresnelGrazingReflectance(float reflectance0) {float reflectance90=saturate(reflectance0*25.0);return reflectance90;}
vec2 getAARoughnessFactors(vec3 normalVector) {
#ifdef SPECULARAA
vec3 nDfdx=dFdx(normalVector.xyz);vec3 nDfdy=dFdy(normalVector.xyz);float slopeSquare=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));float geometricRoughnessFactor=pow(saturate(slopeSquare),0.333);float geometricAlphaGFactor=sqrt(slopeSquare);geometricAlphaGFactor*=0.75;return vec2(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2(0.);
#endif
}
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_LEGACY
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);float alphaB=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy,float roughness) {vec3 anisotropicFrameDirection;if (anisotropy>=0.0) {anisotropicFrameDirection=B;} else {anisotropicFrameDirection=T;}
vec3 anisotropicFrameTangent=cross(normalize(anisotropicFrameDirection),V);vec3 anisotropicFrameNormal=cross(anisotropicFrameTangent,anisotropicFrameDirection);vec3 anisotropicNormal=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));return anisotropicNormal;}
#elif ANISOTROPIC_OPENPBR
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=alphaG*sqrt(2.0/(1.0+(1.0-anisotropy)*(1.0-anisotropy)));float alphaB=max(alphaT*(1.0-anisotropy),MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
#else
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=max(mix(alphaG,1.0,anisotropy*anisotropy),MINIMUMVARIANCE);float alphaB=max(alphaG,MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy,float roughness) {vec3 bentNormal=cross(B,V);bentNormal=normalize(cross(bentNormal,B));float a=square(square(1.0-anisotropy*(1.0-roughness)));bentNormal=normalize(mix(bentNormal,N,a));return bentNormal;}
#endif
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)
vec3 cocaLambert(vec3 alpha,float distance) {return exp(-alpha*distance);}
vec3 cocaLambert(float NdotVRefract,float NdotLRefract,vec3 alpha,float thickness) {return cocaLambert(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));}
vec3 computeColorAtDistanceInMedia(vec3 color,float distance) {return -log(color)/distance;}
vec3 computeClearCoatAbsorption(float NdotVRefract,float NdotLRefract,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {vec3 clearCoatAbsorption=mix(vec3(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);return clearCoatAbsorption;}
#endif
#ifdef MICROSURFACEAUTOMATIC
float computeDefaultMicroSurface(float microSurface,vec3 reflectivityColor)
{const float kReflectivityNoAlphaWorkflow_SmoothnessMax=0.95;float reflectivityLuminance=getLuminance(reflectivityColor);float reflectivityLuma=sqrt(reflectivityLuminance);microSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;return microSurface;}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrHelperFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrIBLFunctions.js":
/*!**************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrIBLFunctions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrIBLFunctions: () => (/* binding */ pbrIBLFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "pbrIBLFunctions";
const shader = `#if defined(REFLECTION) || defined(SS_REFRACTION)
float getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels);return lod;}
float getLinearLodFromRoughness(float cubeMapDimensionPixels,float roughness) {float lod=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
float environmentRadianceOcclusion(float ambientOcclusion,float NdotVUnclamped) {float temp=NdotVUnclamped+ambientOcclusion;return saturate(square(temp)-1.0+ambientOcclusion);}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
float environmentHorizonOcclusion(vec3 view,vec3 normal,vec3 geometricNormal) {vec3 reflection=reflect(view,normal);float temp=saturate(1.0+1.1*dot(reflection,geometricNormal));return square(temp);}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
#define UNPACK_LOD(x) (1.0-x)*255.0
float getLodFromAlphaG(float cubeMapDimensionPixels,float alphaG,float NdotV) {float microsurfaceAverageSlope=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrIBLFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/subSurfaceScatteringFunctions.js":
/*!****************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/subSurfaceScatteringFunctions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subSurfaceScatteringFunctions: () => (/* binding */ subSurfaceScatteringFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "subSurfaceScatteringFunctions";
const shader = `bool testLightingForSSS(float diffusionProfile)
{return diffusionProfile<1.;}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const subSurfaceScatteringFunctions = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfaGFybW9uaWNzRnVuY3Rpb25zX2pzLWNvcmVfZGlzdF9TaGFkZXJzX1NoYWRlcnNJbmNsdWRlX3BickJsLWEwYzVkYi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2hhcm1vbmljc0Z1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyQmxvY2tJbWFnZVByb2Nlc3NpbmcudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickJsb2NrTm9ybWFsR2VvbWV0cmljLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJCbG9ja1ByZVBhc3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickRlYnVnLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ0ZhbGxvZmZGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickRpcmVjdExpZ2h0aW5nRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJEaXJlY3RMaWdodGluZ1NldHVwRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BickhlbHBlckZ1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJySUJMRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9zdWJTdXJmYWNlU2NhdHRlcmluZ0Z1bmN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWZkZWYgU1BIRVJJQ0FMX0hBUk1PTklDU1xudmVjMyBjb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKHZlYzMgbm9ybWFsKSB7cmV0dXJuIHZTcGhlcmljYWxMMDBcbisgdlNwaGVyaWNhbEwxXzEqKG5vcm1hbC55KVxuKyB2U3BoZXJpY2FsTDEwKihub3JtYWwueilcbisgdlNwaGVyaWNhbEwxMSoobm9ybWFsLngpXG4rIHZTcGhlcmljYWxMMl8yKihub3JtYWwueSpub3JtYWwueClcbisgdlNwaGVyaWNhbEwyXzEqKG5vcm1hbC55Km5vcm1hbC56KVxuKyB2U3BoZXJpY2FsTDIwKigoMy4wKm5vcm1hbC56Km5vcm1hbC56KS0xLjApXG4rIHZTcGhlcmljYWxMMjEqKG5vcm1hbC56Km5vcm1hbC54KVxuKyB2U3BoZXJpY2FsTDIyKihub3JtYWwueCpub3JtYWwueC0obm9ybWFsLnkqbm9ybWFsLnkpKTt9XG4jZWxzZVxudmVjMyBjb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKHZlYzMgbm9ybWFsKSB7ZmxvYXQgTng9bm9ybWFsLng7ZmxvYXQgTnk9bm9ybWFsLnk7ZmxvYXQgTno9bm9ybWFsLno7dmVjMyBDMT12U3BoZXJpY2FsWloucmdiO3ZlYzMgQ3g9dlNwaGVyaWNhbFgucmdiO3ZlYzMgQ3k9dlNwaGVyaWNhbFkucmdiO3ZlYzMgQ3o9dlNwaGVyaWNhbFoucmdiO3ZlYzMgQ3h4X3p6PXZTcGhlcmljYWxYWF9aWi5yZ2I7dmVjMyBDeXlfeno9dlNwaGVyaWNhbFlZX1paLnJnYjt2ZWMzIEN4eT12U3BoZXJpY2FsWFkucmdiO3ZlYzMgQ3l6PXZTcGhlcmljYWxZWi5yZ2I7dmVjMyBDeng9dlNwaGVyaWNhbFpYLnJnYjt2ZWMzIGExPUN5eV96eipOeStDeTt2ZWMzIGEyPUN5eipOeithMTt2ZWMzIGIxPUN6eCpOeitDeDt2ZWMzIGIyPUN4eSpOeStiMTt2ZWMzIGIzPUN4eF96eipOeCtiMjt2ZWMzIHQxPUN6ICpOeitDMTt2ZWMzIHQyPWEyICpOeSt0MTt2ZWMzIHQzPWIzICpOeCt0MjtyZXR1cm4gdDM7fVxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaGFybW9uaWNzRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja0ltYWdlUHJvY2Vzc2luZ1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKElNQUdFUFJPQ0VTU0lOR1BPU1RQUk9DRVNTKSB8fCBkZWZpbmVkKFNTX1NDQVRURVJJTkcpXG4jaWYgIWRlZmluZWQoU0tJUEZJTkFMQ09MT1JDTEFNUClcbmZpbmFsQ29sb3IucmdiPWNsYW1wKGZpbmFsQ29sb3IucmdiLDAuLDMwLjApO1xuI2VuZGlmXG4jZWxzZVxuZmluYWxDb2xvcj1hcHBseUltYWdlUHJvY2Vzc2luZyhmaW5hbENvbG9yKTtcbiNlbmRpZlxuZmluYWxDb2xvci5hKj12aXNpYmlsaXR5O1xuI2lmZGVmIFBSRU1VTFRJUExZQUxQSEFcbmZpbmFsQ29sb3IucmdiKj1maW5hbENvbG9yLmE7XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyQmxvY2tJbWFnZVByb2Nlc3NpbmcgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickJsb2NrTm9ybWFsR2VvbWV0cmljXCI7XG5jb25zdCBzaGFkZXIgPSBgdmVjMyB2aWV3RGlyZWN0aW9uVz1ub3JtYWxpemUodkV5ZVBvc2l0aW9uLnh5ei12UG9zaXRpb25XKTtcbiNpZmRlZiBOT1JNQUxcbnZlYzMgbm9ybWFsVz1ub3JtYWxpemUodk5vcm1hbFcpO1xuI2Vsc2VcbnZlYzMgbm9ybWFsVz1ub3JtYWxpemUoY3Jvc3MoZEZkeCh2UG9zaXRpb25XKSxkRmR5KHZQb3NpdGlvblcpKSkqdkV5ZVBvc2l0aW9uLnc7XG4jZW5kaWZcbnZlYzMgZ2VvbWV0cmljTm9ybWFsVz1ub3JtYWxXO1xuI2lmIGRlZmluZWQoVFdPU0lERURMSUdIVElORykgJiYgZGVmaW5lZChOT1JNQUwpXG5nZW9tZXRyaWNOb3JtYWxXPWdsX0Zyb250RmFjaW5nID8gZ2VvbWV0cmljTm9ybWFsVyA6IC1nZW9tZXRyaWNOb3JtYWxXO1xuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickJsb2NrTm9ybWFsR2VvbWV0cmljID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJCbG9ja1ByZVBhc3NcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgU0NFTkVfTVJUX0NPVU5UPjBcbmZsb2F0IHdyaXRlR2VvbWV0cnlJbmZvPWZpbmFsQ29sb3IuYT5BTFBIQVRFU1RWQUxVRSA/IDEuMCA6IDAuMDtcbiNpZmRlZiBQUkVQQVNTX1BPU0lUSU9OXG5nbF9GcmFnRGF0YVtQUkVQQVNTX1BPU0lUSU9OX0lOREVYXT12ZWM0KHZQb3NpdGlvblcsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19MT0NBTF9QT1NJVElPTlxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19MT0NBTF9QT1NJVElPTl9JTkRFWF09dmVjNCh2UG9zaXRpb24sd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKVxudmVjMiBhPSh2Q3VycmVudFBvc2l0aW9uLnh5L3ZDdXJyZW50UG9zaXRpb24udykqMC41KzAuNTt2ZWMyIGI9KHZQcmV2aW91c1Bvc2l0aW9uLnh5L3ZQcmV2aW91c1Bvc2l0aW9uLncpKjAuNSswLjU7dmVjMiB2ZWxvY2l0eT1hYnMoYS1iKTt2ZWxvY2l0eT12ZWMyKHBvdyh2ZWxvY2l0eS54LDEuMC8zLjApLHBvdyh2ZWxvY2l0eS55LDEuMC8zLjApKSpzaWduKGEtYikqMC41KzAuNTtnbF9GcmFnRGF0YVtQUkVQQVNTX1ZFTE9DSVRZX0lOREVYXT12ZWM0KHZlbG9jaXR5LDAuMCx3cml0ZUdlb21ldHJ5SW5mbyk7XG4jZWxpZiBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKVxudmVjMiB2ZWxvY2l0eT12ZWMyKDAuNSkqKCh2UHJldmlvdXNQb3NpdGlvbi54eS92UHJldmlvdXNQb3NpdGlvbi53KS0odkN1cnJlbnRQb3NpdGlvbi54eS92Q3VycmVudFBvc2l0aW9uLncpKTtnbF9GcmFnRGF0YVtQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUl9JTkRFWF09dmVjNCh2ZWxvY2l0eSwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19BTEJFRE9cbmdsX0ZyYWdEYXRhW1BSRVBBU1NfQUxCRURPX0lOREVYXT12ZWM0KHN1cmZhY2VBbGJlZG8sd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19BTEJFRE9fU1FSVFxudmVjMyBzcUFsYmVkbz1zcXJ0KHN1cmZhY2VBbGJlZG8pOyBcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfSVJSQURJQU5DRVxudmVjMyBpcnJhZGlhbmNlPWZpbmFsRGlmZnVzZTtcbiNpZm5kZWYgVU5MSVRcbiNpZmRlZiBSRUZMRUNUSU9OXG5pcnJhZGlhbmNlKz1maW5hbElycmFkaWFuY2U7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNTX1NDQVRURVJJTkdcbiNpZmRlZiBQUkVQQVNTX0NPTE9SXG5nbF9GcmFnRGF0YVtQUkVQQVNTX0NPTE9SX0lOREVYXT12ZWM0KGZpbmFsQ29sb3IucmdiLWlycmFkaWFuY2UsZmluYWxDb2xvci5hKTsgXG4jZW5kaWZcbmlycmFkaWFuY2UvPXNxQWxiZWRvO1xuI2Vsc2VcbiNpZmRlZiBQUkVQQVNTX0NPTE9SXG5nbF9GcmFnRGF0YVtQUkVQQVNTX0NPTE9SX0lOREVYXT1maW5hbENvbG9yOyBcbiNlbmRpZlxuZmxvYXQgc2NhdHRlcmluZ0RpZmZ1c2lvblByb2ZpbGU9MjU1LjtcbiNlbmRpZlxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19JUlJBRElBTkNFX0lOREVYXT12ZWM0KGNsYW1wKGlycmFkaWFuY2UsdmVjMygwLiksdmVjMygxLikpLHdyaXRlR2VvbWV0cnlJbmZvKnNjYXR0ZXJpbmdEaWZmdXNpb25Qcm9maWxlLzI1NS4pOyBcbiNlbGlmIGRlZmluZWQoUFJFUEFTU19DT0xPUilcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfQ09MT1JfSU5ERVhdPXZlYzQoZmluYWxDb2xvci5yZ2IsZmluYWxDb2xvci5hKTtcbiNlbmRpZlxuI2lmZGVmIFBSRVBBU1NfREVQVEhcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfREVQVEhfSU5ERVhdPXZlYzQodlZpZXdQb3MueiwwLjAsMC4wLHdyaXRlR2VvbWV0cnlJbmZvKTsgXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1NDUkVFTlNQQUNFX0RFUFRIXG5nbF9GcmFnRGF0YVtQUkVQQVNTX1NDUkVFTlNQQUNFX0RFUFRIX0lOREVYXT12ZWM0KGdsX0ZyYWdDb29yZC56LDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxJWkVEX1ZJRVdfREVQVEhcbmdsX0ZyYWdEYXRhW1BSRVBBU1NfTk9STUFMSVpFRF9WSUVXX0RFUFRIX0lOREVYXT12ZWM0KHZOb3JtVmlld0RlcHRoLDAuMCwwLjAsd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jaWZkZWYgUFJFUEFTU19OT1JNQUxcbiNpZmRlZiBQUkVQQVNTX05PUk1BTF9XT1JMRFNQQUNFXG5nbF9GcmFnRGF0YVtQUkVQQVNTX05PUk1BTF9JTkRFWF09dmVjNChub3JtYWxXLHdyaXRlR2VvbWV0cnlJbmZvKTtcbiNlbHNlXG5nbF9GcmFnRGF0YVtQUkVQQVNTX05PUk1BTF9JTkRFWF09dmVjNChub3JtYWxpemUoKHZpZXcqdmVjNChub3JtYWxXLDAuMCkpLnJnYiksd3JpdGVHZW9tZXRyeUluZm8pO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1dPUkxEX05PUk1BTFxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19XT1JMRF9OT1JNQUxfSU5ERVhdPXZlYzQobm9ybWFsVyowLjUrMC41LHdyaXRlR2VvbWV0cnlJbmZvKTsgXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX0FMQkVET19TUVJUXG5nbF9GcmFnRGF0YVtQUkVQQVNTX0FMQkVET19TUVJUX0lOREVYXT12ZWM0KHNxQWxiZWRvLHdyaXRlR2VvbWV0cnlJbmZvKTsgXG4jZW5kaWZcbiNpZmRlZiBQUkVQQVNTX1JFRkxFQ1RJVklUWVxuI2lmbmRlZiBVTkxJVFxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19SRUZMRUNUSVZJVFlfSU5ERVhdPXZlYzQoc3BlY3VsYXJFbnZpcm9ubWVudFIwLG1pY3JvU3VyZmFjZSkqd3JpdGVHZW9tZXRyeUluZm87XG4jZWxzZVxuZ2xfRnJhZ0RhdGFbUFJFUEFTU19SRUZMRUNUSVZJVFlfSU5ERVhdPXZlYzQoIDAuMCwwLjAsMC4wLDEuMCApKndyaXRlR2VvbWV0cnlJbmZvO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJCbG9ja1ByZVBhc3MgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickRlYnVnXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIERFQlVHTU9ERT4wXG5pZiAodkNsaXBTcGFjZVBvc2l0aW9uLngvdkNsaXBTcGFjZVBvc2l0aW9uLnc+PXZEZWJ1Z01vZGUueCkge1xuI2lmIERFQlVHTU9ERT09MVxuZ2xfRnJhZ0NvbG9yLnJnYj12UG9zaXRpb25XLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT0yICYmIGRlZmluZWQoTk9STUFMKVxuZ2xfRnJhZ0NvbG9yLnJnYj12Tm9ybWFsVy5yZ2I7XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09MyAmJiBkZWZpbmVkKEJVTVApIHx8IERFQlVHTU9ERT09MyAmJiBkZWZpbmVkKFBBUkFMTEFYKSB8fCBERUJVR01PREU9PTMgJiYgZGVmaW5lZChBTklTT1RST1BJQylcbmdsX0ZyYWdDb2xvci5yZ2I9VEJOWzBdO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTQgJiYgZGVmaW5lZChCVU1QKSB8fCBERUJVR01PREU9PTQgJiYgZGVmaW5lZChQQVJBTExBWCkgfHwgREVCVUdNT0RFPT00ICYmIGRlZmluZWQoQU5JU09UUk9QSUMpXG5nbF9GcmFnQ29sb3IucmdiPVRCTlsxXTtcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT01XG5nbF9GcmFnQ29sb3IucmdiPW5vcm1hbFc7XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09NiAmJiBkZWZpbmVkKE1BSU5VVjEpXG5nbF9GcmFnQ29sb3IucmdiPXZlYzModk1haW5VVjEsMC4wKTtcbiNlbGlmIERFQlVHTU9ERT09NyAmJiBkZWZpbmVkKE1BSU5VVjIpXG5nbF9GcmFnQ29sb3IucmdiPXZlYzModk1haW5VVjIsMC4wKTtcbiNlbGlmIERFQlVHTU9ERT09OCAmJiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChDTEVBUkNPQVRfQlVNUClcbmdsX0ZyYWdDb2xvci5yZ2I9Y2xlYXJjb2F0T3V0LlRCTkNsZWFyQ29hdFswXTtcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT05ICYmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKVxuZ2xfRnJhZ0NvbG9yLnJnYj1jbGVhcmNvYXRPdXQuVEJOQ2xlYXJDb2F0WzFdO1xuI2RlZmluZSBERUJVR01PREVfTk9STUFMSVpFXG4jZWxpZiBERUJVR01PREU9PTEwICYmIGRlZmluZWQoQ0xFQVJDT0FUKVxuZ2xfRnJhZ0NvbG9yLnJnYj1jbGVhcmNvYXRPdXQuY2xlYXJDb2F0Tm9ybWFsVztcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT0xMSAmJiBkZWZpbmVkKEFOSVNPVFJPUElDKVxuZ2xfRnJhZ0NvbG9yLnJnYj1hbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY05vcm1hbDtcbiNkZWZpbmUgREVCVUdNT0RFX05PUk1BTElaRVxuI2VsaWYgREVCVUdNT0RFPT0xMiAmJiBkZWZpbmVkKEFOSVNPVFJPUElDKVxuZ2xfRnJhZ0NvbG9yLnJnYj1hbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY1RhbmdlbnQ7XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09MTMgJiYgZGVmaW5lZChBTklTT1RST1BJQylcbmdsX0ZyYWdDb2xvci5yZ2I9YW5pc290cm9waWNPdXQuYW5pc290cm9waWNCaXRhbmdlbnQ7XG4jZGVmaW5lIERFQlVHTU9ERV9OT1JNQUxJWkVcbiNlbGlmIERFQlVHTU9ERT09MjAgJiYgZGVmaW5lZChBTEJFRE8pXG5nbF9GcmFnQ29sb3IucmdiPWFsYmVkb1RleHR1cmUucmdiO1xuI2lmbmRlZiBHQU1NQUFMQkVET1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbmRpZlxuI2VsaWYgREVCVUdNT0RFPT0yMSAmJiBkZWZpbmVkKEFNQklFTlQpXG5nbF9GcmFnQ29sb3IucmdiPWFvT3V0LmFtYmllbnRPY2NsdXNpb25Db2xvck1hcC5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTIyICYmIGRlZmluZWQoT1BBQ0lUWSlcbmdsX0ZyYWdDb2xvci5yZ2I9b3BhY2l0eU1hcC5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTIzICYmIGRlZmluZWQoRU1JU1NJVkUpXG5nbF9GcmFnQ29sb3IucmdiPWVtaXNzaXZlQ29sb3JUZXgucmdiO1xuI2lmbmRlZiBHQU1NQUVNSVNTSVZFXG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VuZGlmXG4jZWxpZiBERUJVR01PREU9PTI0ICYmIGRlZmluZWQoTElHSFRNQVApXG5nbF9GcmFnQ29sb3IucmdiPWxpZ2h0bWFwQ29sb3IucmdiO1xuI2lmbmRlZiBHQU1NQUxJR0hUTUFQXG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VuZGlmXG4jZWxpZiBERUJVR01PREU9PTI1ICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiBkZWZpbmVkKE1FVEFMTElDV09SS0ZMT1cpXG5nbF9GcmFnQ29sb3IucmdiPXJlZmxlY3Rpdml0eU91dC5zdXJmYWNlTWV0YWxsaWNDb2xvck1hcC5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTI2ICYmIGRlZmluZWQoUkVGTEVDVElWSVRZKSAmJiAhZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKVxuZ2xfRnJhZ0NvbG9yLnJnYj1yZWZsZWN0aXZpdHlPdXQuc3VyZmFjZVJlZmxlY3Rpdml0eUNvbG9yTWFwLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTI3ICYmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9URVhUVVJFKVxuZ2xfRnJhZ0NvbG9yLnJnYj12ZWMzKGNsZWFyY29hdE91dC5jbGVhckNvYXRNYXBEYXRhLnJnLDAuMCk7XG4jZWxpZiBERUJVR01PREU9PTI4ICYmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9USU5UKSAmJiBkZWZpbmVkKENMRUFSQ09BVF9USU5UX1RFWFRVUkUpXG5nbF9GcmFnQ29sb3IucmdiPWNsZWFyY29hdE91dC5jbGVhckNvYXRUaW50TWFwRGF0YS5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTI5ICYmIGRlZmluZWQoU0hFRU4pICYmIGRlZmluZWQoU0hFRU5fVEVYVFVSRSlcbmdsX0ZyYWdDb2xvci5yZ2I9c2hlZW5PdXQuc2hlZW5NYXBEYXRhLnJnYjtcbiNlbGlmIERFQlVHTU9ERT09MzAgJiYgZGVmaW5lZChBTklTT1RST1BJQykgJiYgZGVmaW5lZChBTklTT1RST1BJQ19URVhUVVJFKVxuZ2xfRnJhZ0NvbG9yLnJnYj1hbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3B5TWFwRGF0YS5yZ2I7XG4jZWxpZiBERUJVR01PREU9PTMxICYmIGRlZmluZWQoU1VCU1VSRkFDRSkgJiYgZGVmaW5lZChTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkUpXG5nbF9GcmFnQ29sb3IucmdiPXN1YlN1cmZhY2VPdXQudGhpY2tuZXNzTWFwLnJnYjtcbiNlbGlmIERFQlVHTU9ERT09MzIgJiYgZGVmaW5lZChCVU1QKVxuZ2xfRnJhZ0NvbG9yLnJnYj10ZXh0dXJlMkQoYnVtcFNhbXBsZXIsdkJ1bXBVVikucmdiO1xuI2VsaWYgREVCVUdNT0RFPT00MCAmJiBkZWZpbmVkKFNTX1JFRlJBQ1RJT04pXG5nbF9GcmFnQ29sb3IucmdiPXN1YlN1cmZhY2VPdXQuZW52aXJvbm1lbnRSZWZyYWN0aW9uLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTQxICYmIGRlZmluZWQoUkVGTEVDVElPTilcbmdsX0ZyYWdDb2xvci5yZ2I9cmVmbGVjdGlvbk91dC5lbnZpcm9ubWVudFJhZGlhbmNlLnJnYjtcbiNpZm5kZWYgR0FNTUFSRUZMRUNUSU9OXG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VuZGlmXG4jZWxpZiBERUJVR01PREU9PTQyICYmIGRlZmluZWQoQ0xFQVJDT0FUKSAmJiBkZWZpbmVkKFJFRkxFQ1RJT04pXG5nbF9GcmFnQ29sb3IucmdiPWNsZWFyY29hdE91dC5lbnZpcm9ubWVudENsZWFyQ29hdFJhZGlhbmNlLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTUwXG5nbF9GcmFnQ29sb3IucmdiPWRpZmZ1c2VCYXNlLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTUxICYmIGRlZmluZWQoU1BFQ1VMQVJURVJNKVxuZ2xfRnJhZ0NvbG9yLnJnYj1zcGVjdWxhckJhc2UucmdiO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NTIgJiYgZGVmaW5lZChDTEVBUkNPQVQpXG5nbF9GcmFnQ29sb3IucmdiPWNsZWFyQ29hdEJhc2UucmdiO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NTMgJiYgZGVmaW5lZChTSEVFTilcbmdsX0ZyYWdDb2xvci5yZ2I9c2hlZW5CYXNlLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTU0ICYmIGRlZmluZWQoUkVGTEVDVElPTilcbmdsX0ZyYWdDb2xvci5yZ2I9cmVmbGVjdGlvbk91dC5lbnZpcm9ubWVudElycmFkaWFuY2UucmdiO1xuI2lmbmRlZiBHQU1NQVJFRkxFQ1RJT05cbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZW5kaWZcbiNlbGlmIERFQlVHTU9ERT09NjBcbmdsX0ZyYWdDb2xvci5yZ2I9c3VyZmFjZUFsYmVkby5yZ2I7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT02MVxuZ2xfRnJhZ0NvbG9yLnJnYj1jbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NjIgJiYgZGVmaW5lZChNRVRBTExJQ1dPUktGTE9XKVxuZ2xfRnJhZ0NvbG9yLnJnYj12ZWMzKHJlZmxlY3Rpdml0eU91dC5tZXRhbGxpYyk7XG4jZWxpZiBERUJVR01PREU9PTcxICYmIGRlZmluZWQoTUVUQUxMSUNXT1JLRkxPVylcbmdsX0ZyYWdDb2xvci5yZ2I9cmVmbGVjdGl2aXR5T3V0Lm1ldGFsbGljRjA7XG4jZWxpZiBERUJVR01PREU9PTYzXG5nbF9GcmFnQ29sb3IucmdiPXZlYzMocm91Z2huZXNzKTtcbiNlbGlmIERFQlVHTU9ERT09NjRcbmdsX0ZyYWdDb2xvci5yZ2I9dmVjMyhhbHBoYUcpO1xuI2VsaWYgREVCVUdNT0RFPT02NVxuZ2xfRnJhZ0NvbG9yLnJnYj12ZWMzKE5kb3RWKTtcbiNlbGlmIERFQlVHTU9ERT09NjYgJiYgZGVmaW5lZChDTEVBUkNPQVQpICYmIGRlZmluZWQoQ0xFQVJDT0FUX1RJTlQpXG5nbF9GcmFnQ29sb3IucmdiPWNsZWFyY29hdE91dC5jbGVhckNvYXRDb2xvci5yZ2I7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT02NyAmJiBkZWZpbmVkKENMRUFSQ09BVClcbmdsX0ZyYWdDb2xvci5yZ2I9dmVjMyhjbGVhcmNvYXRPdXQuY2xlYXJDb2F0Um91Z2huZXNzKTtcbiNlbGlmIERFQlVHTU9ERT09NjggJiYgZGVmaW5lZChDTEVBUkNPQVQpXG5nbF9GcmFnQ29sb3IucmdiPXZlYzMoY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5kb3RWKTtcbiNlbGlmIERFQlVHTU9ERT09NjkgJiYgZGVmaW5lZChTVUJTVVJGQUNFKSAmJiBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWSlcbmdsX0ZyYWdDb2xvci5yZ2I9c3ViU3VyZmFjZU91dC50cmFuc21pdHRhbmNlO1xuI2VsaWYgREVCVUdNT0RFPT03MCAmJiBkZWZpbmVkKFNVQlNVUkZBQ0UpICYmIGRlZmluZWQoU1NfUkVGUkFDVElPTilcbmdsX0ZyYWdDb2xvci5yZ2I9c3ViU3VyZmFjZU91dC5yZWZyYWN0aW9uVHJhbnNtaXR0YW5jZTtcbiNlbGlmIERFQlVHTU9ERT09NzJcbmdsX0ZyYWdDb2xvci5yZ2I9dmVjMyhtaWNyb1N1cmZhY2UpO1xuI2VsaWYgREVCVUdNT0RFPT03M1xuZ2xfRnJhZ0NvbG9yLnJnYj12QWxiZWRvQ29sb3IucmdiO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09NzQgJiYgIWRlZmluZWQoTUVUQUxMSUNXT1JLRkxPVylcbmdsX0ZyYWdDb2xvci5yZ2I9dlJlZmxlY3Rpdml0eUNvbG9yLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTc1XG5nbF9GcmFnQ29sb3IucmdiPXZFbWlzc2l2ZUNvbG9yLnJnYjtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTgwICYmIGRlZmluZWQoUkFESUFOQ0VPQ0NMVVNJT04pXG5nbF9GcmFnQ29sb3IucmdiPXZlYzMoc2VvKTtcbiNlbGlmIERFQlVHTU9ERT09ODEgJiYgZGVmaW5lZChIT1JJWk9OT0NDTFVTSU9OKSAmJiBkZWZpbmVkKEJVTVApICYmIGRlZmluZWQoUkVGTEVDVElPTk1BUF8zRClcbmdsX0ZyYWdDb2xvci5yZ2I9dmVjMyhlaG8pO1xuI2VsaWYgREVCVUdNT0RFPT04MiAmJiBkZWZpbmVkKE1TX0JSREZfRU5FUkdZX0NPTlNFUlZBVElPTilcbmdsX0ZyYWdDb2xvci5yZ2I9dmVjMyhlbmVyZ3lDb25zZXJ2YXRpb25GYWN0b3IpO1xuI2VsaWYgREVCVUdNT0RFPT04MyAmJiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgIWRlZmluZWQoUkVGTEVDVElPTk1BUF9TS1lCT1gpXG5nbF9GcmFnQ29sb3IucmdiPWJhc2VTcGVjdWxhckVudmlyb25tZW50UmVmbGVjdGFuY2U7XG4jZGVmaW5lIERFQlVHTU9ERV9HQU1NQVxuI2VsaWYgREVCVUdNT0RFPT04NCAmJiBkZWZpbmVkKENMRUFSQ09BVCkgJiYgZGVmaW5lZChFTlZJUk9OTUVOVEJSREYpICYmICFkZWZpbmVkKFJFRkxFQ1RJT05NQVBfU0tZQk9YKVxuZ2xfRnJhZ0NvbG9yLnJnYj1jbGVhcmNvYXRPdXQuY2xlYXJDb2F0RW52aXJvbm1lbnRSZWZsZWN0YW5jZTtcbiNkZWZpbmUgREVCVUdNT0RFX0dBTU1BXG4jZWxpZiBERUJVR01PREU9PTg1ICYmIGRlZmluZWQoU0hFRU4pICYmIGRlZmluZWQoUkVGTEVDVElPTilcbmdsX0ZyYWdDb2xvci5yZ2I9c2hlZW5PdXQuc2hlZW5FbnZpcm9ubWVudFJlZmxlY3RhbmNlO1xuI2RlZmluZSBERUJVR01PREVfR0FNTUFcbiNlbGlmIERFQlVHTU9ERT09ODYgJiYgZGVmaW5lZChBTFBIQUJMRU5EKVxuZ2xfRnJhZ0NvbG9yLnJnYj12ZWMzKGx1bWluYW5jZU92ZXJBbHBoYSk7XG4jZWxpZiBERUJVR01PREU9PTg3XG5nbF9GcmFnQ29sb3IucmdiPXZlYzMoYWxwaGEpO1xuI2VsaWYgREVCVUdNT0RFPT04OCAmJiBkZWZpbmVkKEFMQkVETylcbmdsX0ZyYWdDb2xvci5yZ2I9dmVjMyhhbGJlZG9UZXh0dXJlLmEpO1xuI2VsaWYgREVCVUdNT0RFPT04OVxuZ2xfRnJhZ0NvbG9yLnJnYj1hb091dC5hbWJpZW50T2NjbHVzaW9uQ29sb3IucmdiO1xuI2Vsc2VcbmZsb2F0IHN0cmlwZVdpZHRoPTMwLjtmbG9hdCBzdHJpcGVQb3M9Zmxvb3IoZ2xfRnJhZ0Nvb3JkLngvc3RyaXBlV2lkdGgpO2Zsb2F0IHdoaWNoQ29sb3I9bW9kKHN0cmlwZVBvcywyLik7dmVjMyBjb2xvcjE9dmVjMyguNiwuMiwuMik7dmVjMyBjb2xvcjI9dmVjMyguMywuMSwuMSk7Z2xfRnJhZ0NvbG9yLnJnYj1taXgoY29sb3IxLGNvbG9yMix3aGljaENvbG9yKTtcbiNlbmRpZlxuZ2xfRnJhZ0NvbG9yLnJnYio9dkRlYnVnTW9kZS55O1xuI2lmZGVmIERFQlVHTU9ERV9OT1JNQUxJWkVcbmdsX0ZyYWdDb2xvci5yZ2I9bm9ybWFsaXplKGdsX0ZyYWdDb2xvci5yZ2IpKjAuNSswLjU7XG4jZW5kaWZcbiNpZmRlZiBERUJVR01PREVfR0FNTUFcbmdsX0ZyYWdDb2xvci5yZ2I9dG9HYW1tYVNwYWNlKGdsX0ZyYWdDb2xvci5yZ2IpO1xuI2VuZGlmXG5nbF9GcmFnQ29sb3IuYT0xLjA7XG4jaWZkZWYgUFJFUEFTU1xuZ2xfRnJhZ0RhdGFbMF09dG9MaW5lYXJTcGFjZShnbF9GcmFnQ29sb3IpOyBcbmdsX0ZyYWdEYXRhWzFdPXZlYzQoMC4sMC4sMC4sMC4pOyBcbiNlbmRpZlxuI2lmZGVmIERFQlVHTU9ERV9GT1JDRVJFVFVSTlxucmV0dXJuO1xuI2VuZGlmXG59XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyRGVidWcgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickRpcmVjdExpZ2h0aW5nRmFsbG9mZkZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYGZsb2F0IGNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9TdGFuZGFyZCh2ZWMzIGxpZ2h0T2Zmc2V0LGZsb2F0IHJhbmdlKVxue3JldHVybiBtYXgoMC4sMS4wLWxlbmd0aChsaWdodE9mZnNldCkvcmFuZ2UpO31cbmZsb2F0IGNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChmbG9hdCBsaWdodERpc3RhbmNlU3F1YXJlZClcbntyZXR1cm4gMS4wL21heEVwcyhsaWdodERpc3RhbmNlU3F1YXJlZCk7fVxuZmxvYXQgY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX0dMVEYoZmxvYXQgbGlnaHREaXN0YW5jZVNxdWFyZWQsZmxvYXQgaW52ZXJzZVNxdWFyZWRSYW5nZSlcbntmbG9hdCBsaWdodERpc3RhbmNlRmFsbG9mZj0xLjAvbWF4RXBzKGxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtmbG9hdCBmYWN0b3I9bGlnaHREaXN0YW5jZVNxdWFyZWQqaW52ZXJzZVNxdWFyZWRSYW5nZTtmbG9hdCBhdHRlbnVhdGlvbj1zYXR1cmF0ZSgxLjAtZmFjdG9yKmZhY3Rvcik7YXR0ZW51YXRpb24qPWF0dGVudWF0aW9uO2xpZ2h0RGlzdGFuY2VGYWxsb2ZmKj1hdHRlbnVhdGlvbjtyZXR1cm4gbGlnaHREaXN0YW5jZUZhbGxvZmY7fVxuZmxvYXQgY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmKHZlYzMgbGlnaHRPZmZzZXQsZmxvYXQgbGlnaHREaXN0YW5jZVNxdWFyZWQsZmxvYXQgcmFuZ2UsZmxvYXQgaW52ZXJzZVNxdWFyZWRSYW5nZSlcbntcbiNpZmRlZiBVU0VQSFlTSUNBTExJR0hURkFMTE9GRlxucmV0dXJuIGNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChsaWdodERpc3RhbmNlU3F1YXJlZCk7XG4jZWxpZiBkZWZpbmVkKFVTRUdMVEZMSUdIVEZBTExPRkYpXG5yZXR1cm4gY29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX0dMVEYobGlnaHREaXN0YW5jZVNxdWFyZWQsaW52ZXJzZVNxdWFyZWRSYW5nZSk7XG4jZWxzZVxucmV0dXJuIGNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodE9mZnNldCxyYW5nZSk7XG4jZW5kaWZcbn1cbmZsb2F0IGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZCh2ZWMzIGxpZ2h0RGlyZWN0aW9uLHZlYzMgZGlyZWN0aW9uVG9MaWdodENlbnRlclcsZmxvYXQgY29zSGFsZkFuZ2xlLGZsb2F0IGV4cG9uZW50KVxue2Zsb2F0IGZhbGxvZmY9MC4wO2Zsb2F0IGNvc0FuZ2xlPW1heEVwcyhkb3QoLWxpZ2h0RGlyZWN0aW9uLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXKSk7aWYgKGNvc0FuZ2xlPj1jb3NIYWxmQW5nbGUpXG57ZmFsbG9mZj1tYXgoMC4scG93KGNvc0FuZ2xlLGV4cG9uZW50KSk7fVxucmV0dXJuIGZhbGxvZmY7fVxuZmxvYXQgY29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyh2ZWMzIGxpZ2h0RGlyZWN0aW9uLHZlYzMgZGlyZWN0aW9uVG9MaWdodENlbnRlclcsc2FtcGxlcjJEIGllc0xpZ2h0U2FtcGxlcilcbntmbG9hdCBjb3NBbmdsZT1kb3QoLWxpZ2h0RGlyZWN0aW9uLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXKTtmbG9hdCBhbmdsZT1hY29zKGNvc0FuZ2xlKS9QSTtyZXR1cm4gdGV4dHVyZTJEKGllc0xpZ2h0U2FtcGxlcix2ZWMyKGFuZ2xlLDAuKSkucjt9XG5mbG9hdCBjb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfUGh5c2ljYWwodmVjMyBsaWdodERpcmVjdGlvbix2ZWMzIGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXLGZsb2F0IGNvc0hhbGZBbmdsZSlcbntjb25zdCBmbG9hdCBrTWludXNMb2cyQ29uZUFuZ2xlSW50ZW5zaXR5UmF0aW89Ni42NDM4NTYxODk3NzsgXG5mbG9hdCBjb25jZW50cmF0aW9uS2FwcGE9a01pbnVzTG9nMkNvbmVBbmdsZUludGVuc2l0eVJhdGlvLygxLjAtY29zSGFsZkFuZ2xlKTt2ZWM0IGxpZ2h0RGlyZWN0aW9uU3ByZWFkU0c9dmVjNCgtbGlnaHREaXJlY3Rpb24qY29uY2VudHJhdGlvbkthcHBhLC1jb25jZW50cmF0aW9uS2FwcGEpO2Zsb2F0IGZhbGxvZmY9ZXhwMihkb3QodmVjNChkaXJlY3Rpb25Ub0xpZ2h0Q2VudGVyVywxLjApLGxpZ2h0RGlyZWN0aW9uU3ByZWFkU0cpKTtyZXR1cm4gZmFsbG9mZjt9XG5mbG9hdCBjb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfR0xURih2ZWMzIGxpZ2h0RGlyZWN0aW9uLHZlYzMgZGlyZWN0aW9uVG9MaWdodENlbnRlclcsZmxvYXQgbGlnaHRBbmdsZVNjYWxlLGZsb2F0IGxpZ2h0QW5nbGVPZmZzZXQpXG57ZmxvYXQgY2Q9ZG90KC1saWdodERpcmVjdGlvbixkaXJlY3Rpb25Ub0xpZ2h0Q2VudGVyVyk7ZmxvYXQgZmFsbG9mZj1zYXR1cmF0ZShjZCpsaWdodEFuZ2xlU2NhbGUrbGlnaHRBbmdsZU9mZnNldCk7ZmFsbG9mZio9ZmFsbG9mZjtyZXR1cm4gZmFsbG9mZjt9XG5mbG9hdCBjb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmYodmVjMyBsaWdodERpcmVjdGlvbix2ZWMzIGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXLGZsb2F0IGNvc0hhbGZBbmdsZSxmbG9hdCBleHBvbmVudCxmbG9hdCBsaWdodEFuZ2xlU2NhbGUsZmxvYXQgbGlnaHRBbmdsZU9mZnNldClcbntcbiNpZmRlZiBVU0VQSFlTSUNBTExJR0hURkFMTE9GRlxucmV0dXJuIGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9QaHlzaWNhbChsaWdodERpcmVjdGlvbixkaXJlY3Rpb25Ub0xpZ2h0Q2VudGVyVyxjb3NIYWxmQW5nbGUpO1xuI2VsaWYgZGVmaW5lZChVU0VHTFRGTElHSFRGQUxMT0ZGKVxucmV0dXJuIGNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9HTFRGKGxpZ2h0RGlyZWN0aW9uLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXLGxpZ2h0QW5nbGVTY2FsZSxsaWdodEFuZ2xlT2Zmc2V0KTtcbiNlbHNlXG5yZXR1cm4gY29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKGxpZ2h0RGlyZWN0aW9uLGRpcmVjdGlvblRvTGlnaHRDZW50ZXJXLGNvc0hhbGZBbmdsZSxleHBvbmVudCk7XG4jZW5kaWZcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickRpcmVjdExpZ2h0aW5nRmFsbG9mZkZ1bmN0aW9ucyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyRGlyZWN0TGlnaHRpbmdGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIENMRUFSQ09BVFJFRkxFQ1RBTkNFOTAgMS4wXG5zdHJ1Y3QgbGlnaHRpbmdJbmZvXG57dmVjMyBkaWZmdXNlO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxudmVjMyBkaWZmdXNlVHJhbnNtaXNzaW9uO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52ZWMzIHNwZWN1bGFyO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG52ZWM0IGNsZWFyQ29hdDtcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG52ZWMzIHNoZWVuO1xuI2VuZGlmXG59O2Zsb2F0IGFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoZmxvYXQgcm91Z2huZXNzLGZsb2F0IGxpZ2h0UmFkaXVzLGZsb2F0IGxpZ2h0RGlzdGFuY2UpIHtcbiNpZiBkZWZpbmVkKFVTRVBIWVNJQ0FMTElHSFRGQUxMT0ZGKSB8fCBkZWZpbmVkKFVTRUdMVEZMSUdIVEZBTExPRkYpXG5mbG9hdCBsaWdodFJvdWdobmVzcz1saWdodFJhZGl1cy9saWdodERpc3RhbmNlO2Zsb2F0IHRvdGFsUm91Z2huZXNzPXNhdHVyYXRlKGxpZ2h0Um91Z2huZXNzK3JvdWdobmVzcyk7cmV0dXJuIHRvdGFsUm91Z2huZXNzO1xuI2Vsc2VcbnJldHVybiByb3VnaG5lc3M7XG4jZW5kaWZcbn1cbnZlYzMgY29tcHV0ZUhlbWlzcGhlcmljRGlmZnVzZUxpZ2h0aW5nKHByZUxpZ2h0aW5nSW5mbyBpbmZvLHZlYzMgbGlnaHRDb2xvcix2ZWMzIGdyb3VuZENvbG9yKSB7cmV0dXJuIG1peChncm91bmRDb2xvcixsaWdodENvbG9yLGluZm8uTmRvdEwpO31cbiNpZiBkZWZpbmVkKEFSRUFMSUdIVFVTRUQpICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxudmVjMyBjb21wdXRlQXJlYURpZmZ1c2VMaWdodGluZyhwcmVMaWdodGluZ0luZm8gaW5mbyx2ZWMzIGxpZ2h0Q29sb3IpIHtyZXR1cm4gaW5mby5hcmVhTGlnaHREaWZmdXNlKmxpZ2h0Q29sb3I7fVxuI2VuZGlmXG52ZWMzIGNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlTGlnaHRpbmdJbmZvIGluZm8sdmVjMyBsaWdodENvbG9yKSB7dmVjMyBkaWZmdXNlVGVybT12ZWMzKDEuMC9QSSk7XG4jaWYgQkFTRV9ESUZGVVNFX01PREVMPT1CUkRGX0RJRkZVU0VfTU9ERUxfTEVHQUNZXG5kaWZmdXNlVGVybT12ZWMzKGRpZmZ1c2VCUkRGX0J1cmxleShpbmZvLk5kb3RMLGluZm8uTmRvdFYsaW5mby5WZG90SCxpbmZvLnJvdWdobmVzcykpO1xuI2VsaWYgQkFTRV9ESUZGVVNFX01PREVMPT1CUkRGX0RJRkZVU0VfTU9ERUxfQlVSTEVZXG5kaWZmdXNlVGVybT12ZWMzKGRpZmZ1c2VCUkRGX0J1cmxleShpbmZvLk5kb3RMLGluZm8uTmRvdFYsaW5mby5WZG90SCxpbmZvLmRpZmZ1c2VSb3VnaG5lc3MpKTtcbiNlbGlmIEJBU0VfRElGRlVTRV9NT0RFTD09QlJERl9ESUZGVVNFX01PREVMX0VPTlxudmVjMyBjbGFtcGVkQWxiZWRvPWNsYW1wKGluZm8uc3VyZmFjZUFsYmVkbyx2ZWMzKDAuMSksdmVjMygxLjApKTtkaWZmdXNlVGVybT1kaWZmdXNlQlJERl9FT04oY2xhbXBlZEFsYmVkbyxpbmZvLmRpZmZ1c2VSb3VnaG5lc3MsaW5mby5OZG90TCxpbmZvLk5kb3RWLGluZm8uTGRvdFYpO2RpZmZ1c2VUZXJtLz1jbGFtcGVkQWxiZWRvO1xuI2VuZGlmXG5yZXR1cm4gZGlmZnVzZVRlcm0qaW5mby5hdHRlbnVhdGlvbippbmZvLk5kb3RMKmxpZ2h0Q29sb3I7fVxuI2RlZmluZSBpbmxpbmVcbnZlYzMgY29tcHV0ZVByb2plY3Rpb25UZXh0dXJlRGlmZnVzZUxpZ2h0aW5nKHNhbXBsZXIyRCBwcm9qZWN0aW9uTGlnaHRTYW1wbGVyLG1hdDQgdGV4dHVyZVByb2plY3Rpb25NYXRyaXgsdmVjMyBwb3NXKXt2ZWM0IHN0cnE9dGV4dHVyZVByb2plY3Rpb25NYXRyaXgqdmVjNChwb3NXLDEuMCk7c3RycS89c3RycS53O3ZlYzMgdGV4dHVyZUNvbG9yPXRleHR1cmUyRChwcm9qZWN0aW9uTGlnaHRTYW1wbGVyLHN0cnEueHkpLnJnYjtyZXR1cm4gdG9MaW5lYXJTcGFjZSh0ZXh0dXJlQ29sb3IpO31cbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbnZlYzMgY29tcHV0ZURpZmZ1c2VUcmFuc21pdHRlZExpZ2h0aW5nKHByZUxpZ2h0aW5nSW5mbyBpbmZvLHZlYzMgbGlnaHRDb2xvcix2ZWMzIHRyYW5zbWl0dGFuY2UpIHt2ZWMzIHRyYW5zbWl0dGFuY2VOZG90TD12ZWMzKDAuKTtmbG9hdCBOZG90TD1hYnNFcHMoaW5mby5OZG90TFVuY2xhbXBlZCk7XG4jaWZuZGVmIFNTX1RSQU5TTFVDRU5DWV9MRUdBQ1lcbmlmIChpbmZvLk5kb3RMVW5jbGFtcGVkPDAuMCkge1xuI2VuZGlmXG5mbG9hdCB3cmFwTmRvdEw9Y29tcHV0ZVdyYXBwZWREaWZmdXNlTmRvdEwoTmRvdEwsMC4wMik7ZmxvYXQgdHJBZGFwdD1zdGVwKDAuLGluZm8uTmRvdExVbmNsYW1wZWQpO3RyYW5zbWl0dGFuY2VOZG90TD1taXgodHJhbnNtaXR0YW5jZSp3cmFwTmRvdEwsdmVjMyh3cmFwTmRvdEwpLHRyQWRhcHQpO1xuI2lmbmRlZiBTU19UUkFOU0xVQ0VOQ1lfTEVHQUNZXG59XG52ZWMzIGRpZmZ1c2VUZXJtPXZlYzMoMS4wL1BJKTtcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9MRUdBQ1lcbmRpZmZ1c2VUZXJtPXZlYzMoZGlmZnVzZUJSREZfQnVybGV5KGluZm8uTmRvdEwsaW5mby5OZG90VixpbmZvLlZkb3RILGluZm8ucm91Z2huZXNzKSk7XG4jZWxpZiBCQVNFX0RJRkZVU0VfTU9ERUw9PUJSREZfRElGRlVTRV9NT0RFTF9CVVJMRVlcbmRpZmZ1c2VUZXJtPXZlYzMoZGlmZnVzZUJSREZfQnVybGV5KGluZm8uTmRvdEwsaW5mby5OZG90VixpbmZvLlZkb3RILGluZm8uZGlmZnVzZVJvdWdobmVzcykpO1xuI2VsaWYgQkFTRV9ESUZGVVNFX01PREVMPT1CUkRGX0RJRkZVU0VfTU9ERUxfRU9OXG52ZWMzIGNsYW1wZWRBbGJlZG89Y2xhbXAoaW5mby5zdXJmYWNlQWxiZWRvLHZlYzMoMC4xKSx2ZWMzKDEuMCkpO2RpZmZ1c2VUZXJtPWRpZmZ1c2VCUkRGX0VPTihjbGFtcGVkQWxiZWRvLGluZm8uZGlmZnVzZVJvdWdobmVzcyxpbmZvLk5kb3RMLGluZm8uTmRvdFYsaW5mby5MZG90Vik7ZGlmZnVzZVRlcm0vPWNsYW1wZWRBbGJlZG87XG4jZW5kaWZcbiNlbHNlXG5mbG9hdCBkaWZmdXNlVGVybT1kaWZmdXNlQlJERl9CdXJsZXkoTmRvdEwsaW5mby5OZG90VixpbmZvLlZkb3RILGluZm8ucm91Z2huZXNzKTtcbiNlbmRpZlxucmV0dXJuIGRpZmZ1c2VUZXJtKnRyYW5zbWl0dGFuY2VOZG90TCppbmZvLmF0dGVudWF0aW9uKmxpZ2h0Q29sb3I7fVxuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG52ZWMzIGNvbXB1dGVTcGVjdWxhckxpZ2h0aW5nKHByZUxpZ2h0aW5nSW5mbyBpbmZvLHZlYzMgTix2ZWMzIHJlZmxlY3RhbmNlMCx2ZWMzIGZyZXNuZWwsZmxvYXQgZ2VvbWV0cmljUm91Z2huZXNzRmFjdG9yLHZlYzMgbGlnaHRDb2xvcikge2Zsb2F0IE5kb3RIPXNhdHVyYXRlRXBzKGRvdChOLGluZm8uSCkpO2Zsb2F0IHJvdWdobmVzcz1tYXgoaW5mby5yb3VnaG5lc3MsZ2VvbWV0cmljUm91Z2huZXNzRmFjdG9yKTtmbG9hdCBhbHBoYUc9Y29udmVydFJvdWdobmVzc1RvQXZlcmFnZVNsb3BlKHJvdWdobmVzcyk7XG4jaWZkZWYgSVJJREVTQ0VOQ0VcbmZyZXNuZWw9bWl4KGZyZXNuZWwscmVmbGVjdGFuY2UwLGluZm8uaXJpZGVzY2VuY2VJbnRlbnNpdHkpO1xuI2VuZGlmXG5mbG9hdCBkaXN0cmlidXRpb249bm9ybWFsRGlzdHJpYnV0aW9uRnVuY3Rpb25fVHJvd2JyaWRnZVJlaXR6R0dYKE5kb3RILGFscGhhRyk7XG4jaWZkZWYgQlJERl9WX0hFSUdIVF9DT1JSRUxBVEVEXG5mbG9hdCBzbWl0aFZpc2liaWxpdHk9c21pdGhWaXNpYmlsaXR5X0dHWENvcnJlbGF0ZWQoaW5mby5OZG90TCxpbmZvLk5kb3RWLGFscGhhRyk7XG4jZWxzZVxuZmxvYXQgc21pdGhWaXNpYmlsaXR5PXNtaXRoVmlzaWJpbGl0eV9Ucm93YnJpZGdlUmVpdHpHR1hGYXN0KGluZm8uTmRvdEwsaW5mby5OZG90VixhbHBoYUcpO1xuI2VuZGlmXG52ZWMzIHNwZWNUZXJtPWZyZXNuZWwqZGlzdHJpYnV0aW9uKnNtaXRoVmlzaWJpbGl0eTtyZXR1cm4gc3BlY1Rlcm0qaW5mby5hdHRlbnVhdGlvbippbmZvLk5kb3RMKmxpZ2h0Q29sb3I7fVxuI2lmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG52ZWMzIGNvbXB1dGVBcmVhU3BlY3VsYXJMaWdodGluZyhwcmVMaWdodGluZ0luZm8gaW5mbyx2ZWMzIHNwZWN1bGFyQ29sb3IsdmVjMyByZWZsZWN0YW5jZTAsdmVjMyByZWZsZWN0YW5jZTkwKSB7dmVjMyBmcmVzbmVsPXNwZWN1bGFyQ29sb3IqaW5mby5hcmVhTGlnaHRGcmVzbmVsLngqcmVmbGVjdGFuY2UwKyggdmVjMyggMS4wICktc3BlY3VsYXJDb2xvciApKmluZm8uYXJlYUxpZ2h0RnJlc25lbC55KnJlZmxlY3RhbmNlOTA7cmV0dXJuIHNwZWN1bGFyQ29sb3IqZnJlc25lbCppbmZvLmFyZWFMaWdodFNwZWN1bGFyO31cbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgRlVaWlxuZmxvYXQgZXZhbEZ1enoodmVjMyBMLGZsb2F0IE5kb3RMLGZsb2F0IE5kb3RWLHZlYzMgVCx2ZWMzIEIsdmVjMyBsdGNMdXQpXG57aWYgKE5kb3RMPD0wLjAgfHwgTmRvdFY8PTAuMClcbnJldHVybiAwLjA7bWF0MyBNPW1hdDMoXG52ZWMzKGx0Y0x1dC5yLDAuMCwwLjApLFxudmVjMyhsdGNMdXQuZywxLjAsMC4wKSxcbnZlYzMoMC4wLDAuMCwxLjApXG4pO3ZlYzMgTGxvY2FsPXZlYzMoZG90KEwsVCksZG90KEwsQiksTmRvdEwpO3ZlYzMgTHdhcnA9bm9ybWFsaXplKE0qTGxvY2FsKTtmbG9hdCBjb3NUaGV0YVdhcnA9bWF4KEx3YXJwLnosMC4wKTtyZXR1cm4gY29zVGhldGFXYXJwKk5kb3RMO31cbiNlbmRpZlxuI2lmIGRlZmluZWQoQU5JU09UUk9QSUMpICYmIGRlZmluZWQoQU5JU09UUk9QSUNfT1BFTlBCUilcbnZlYzMgY29tcHV0ZUFuaXNvdHJvcGljU3BlY3VsYXJMaWdodGluZyhwcmVMaWdodGluZ0luZm8gaW5mbyx2ZWMzIFYsdmVjMyBOLHZlYzMgVCx2ZWMzIEIsZmxvYXQgYW5pc290cm9weSxmbG9hdCBnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IsdmVjMyBsaWdodENvbG9yKSB7ZmxvYXQgTmRvdEg9c2F0dXJhdGVFcHMoZG90KE4saW5mby5IKSk7ZmxvYXQgVGRvdEg9ZG90KFQsaW5mby5IKTtmbG9hdCBCZG90SD1kb3QoQixpbmZvLkgpO2Zsb2F0IFRkb3RWPWRvdChULFYpO2Zsb2F0IEJkb3RWPWRvdChCLFYpO2Zsb2F0IFRkb3RMPWRvdChULGluZm8uTCk7ZmxvYXQgQmRvdEw9ZG90KEIsaW5mby5MKTtmbG9hdCBhbHBoYUc9Y29udmVydFJvdWdobmVzc1RvQXZlcmFnZVNsb3BlKGluZm8ucm91Z2huZXNzKTt2ZWMyIGFscGhhVEI9Z2V0QW5pc290cm9waWNSb3VnaG5lc3MoYWxwaGFHLGFuaXNvdHJvcHkpO2FscGhhVEI9bWF4KGFscGhhVEIsc3F1YXJlKGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcikpO2Zsb2F0IGRpc3RyaWJ1dGlvbj1ub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9CdXJsZXlHR1hfQW5pc290cm9waWMoTmRvdEgsVGRvdEgsQmRvdEgsYWxwaGFUQik7ZmxvYXQgc21pdGhWaXNpYmlsaXR5PXNtaXRoVmlzaWJpbGl0eV9HR1hDb3JyZWxhdGVkX0FuaXNvdHJvcGljKGluZm8uTmRvdEwsaW5mby5OZG90VixUZG90VixCZG90VixUZG90TCxCZG90TCxhbHBoYVRCKTt2ZWMzIHNwZWNUZXJtPXZlYzMoZGlzdHJpYnV0aW9uKnNtaXRoVmlzaWJpbGl0eSk7cmV0dXJuIHNwZWNUZXJtKmluZm8uYXR0ZW51YXRpb24qaW5mby5OZG90TCpsaWdodENvbG9yO31cbiNlbGlmIGRlZmluZWQoQU5JU09UUk9QSUMpXG52ZWMzIGNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlTGlnaHRpbmdJbmZvIGluZm8sdmVjMyBWLHZlYzMgTix2ZWMzIFQsdmVjMyBCLGZsb2F0IGFuaXNvdHJvcHksdmVjMyByZWZsZWN0YW5jZTAsdmVjMyByZWZsZWN0YW5jZTkwLGZsb2F0IGdlb21ldHJpY1JvdWdobmVzc0ZhY3Rvcix2ZWMzIGxpZ2h0Q29sb3IpIHtmbG9hdCBOZG90SD1zYXR1cmF0ZUVwcyhkb3QoTixpbmZvLkgpKTtmbG9hdCBUZG90SD1kb3QoVCxpbmZvLkgpO2Zsb2F0IEJkb3RIPWRvdChCLGluZm8uSCk7ZmxvYXQgVGRvdFY9ZG90KFQsVik7ZmxvYXQgQmRvdFY9ZG90KEIsVik7ZmxvYXQgVGRvdEw9ZG90KFQsaW5mby5MKTtmbG9hdCBCZG90TD1kb3QoQixpbmZvLkwpO2Zsb2F0IGFscGhhRz1jb252ZXJ0Um91Z2huZXNzVG9BdmVyYWdlU2xvcGUoaW5mby5yb3VnaG5lc3MpO3ZlYzIgYWxwaGFUQj1nZXRBbmlzb3Ryb3BpY1JvdWdobmVzcyhhbHBoYUcsYW5pc290cm9weSk7YWxwaGFUQj1tYXgoYWxwaGFUQixzcXVhcmUoZ2VvbWV0cmljUm91Z2huZXNzRmFjdG9yKSk7dmVjMyBmcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKGluZm8uVmRvdEgscmVmbGVjdGFuY2UwLHJlZmxlY3RhbmNlOTApO1xuI2lmZGVmIElSSURFU0NFTkNFXG5mcmVzbmVsPW1peChmcmVzbmVsLHJlZmxlY3RhbmNlMCxpbmZvLmlyaWRlc2NlbmNlSW50ZW5zaXR5KTtcbiNlbmRpZlxuZmxvYXQgZGlzdHJpYnV0aW9uPW5vcm1hbERpc3RyaWJ1dGlvbkZ1bmN0aW9uX0J1cmxleUdHWF9Bbmlzb3Ryb3BpYyhOZG90SCxUZG90SCxCZG90SCxhbHBoYVRCKTtmbG9hdCBzbWl0aFZpc2liaWxpdHk9c21pdGhWaXNpYmlsaXR5X0dHWENvcnJlbGF0ZWRfQW5pc290cm9waWMoaW5mby5OZG90TCxpbmZvLk5kb3RWLFRkb3RWLEJkb3RWLFRkb3RMLEJkb3RMLGFscGhhVEIpO3ZlYzMgc3BlY1Rlcm09ZnJlc25lbCpkaXN0cmlidXRpb24qc21pdGhWaXNpYmlsaXR5O3JldHVybiBzcGVjVGVybSppbmZvLmF0dGVudWF0aW9uKmluZm8uTmRvdEwqbGlnaHRDb2xvcjt9XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbnZlYzQgY29tcHV0ZUNsZWFyQ29hdExpZ2h0aW5nKHByZUxpZ2h0aW5nSW5mbyBpbmZvLHZlYzMgTmNjLGZsb2F0IGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcixmbG9hdCBjbGVhckNvYXRJbnRlbnNpdHksdmVjMyBsaWdodENvbG9yKSB7ZmxvYXQgTmNjZG90TD1zYXR1cmF0ZUVwcyhkb3QoTmNjLGluZm8uTCkpO2Zsb2F0IE5jY2RvdEg9c2F0dXJhdGVFcHMoZG90KE5jYyxpbmZvLkgpKTtmbG9hdCBjbGVhckNvYXRSb3VnaG5lc3M9bWF4KGluZm8ucm91Z2huZXNzLGdlb21ldHJpY1JvdWdobmVzc0ZhY3Rvcik7ZmxvYXQgYWxwaGFHPWNvbnZlcnRSb3VnaG5lc3NUb0F2ZXJhZ2VTbG9wZShjbGVhckNvYXRSb3VnaG5lc3MpO2Zsb2F0IGZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1goaW5mby5WZG90SCx2Q2xlYXJDb2F0UmVmcmFjdGlvblBhcmFtcy54LENMRUFSQ09BVFJFRkxFQ1RBTkNFOTApO2ZyZXNuZWwqPWNsZWFyQ29hdEludGVuc2l0eTtmbG9hdCBkaXN0cmlidXRpb249bm9ybWFsRGlzdHJpYnV0aW9uRnVuY3Rpb25fVHJvd2JyaWRnZVJlaXR6R0dYKE5jY2RvdEgsYWxwaGFHKTtmbG9hdCBrZWxlbWVuVmlzaWJpbGl0eT12aXNpYmlsaXR5X0tlbGVtZW4oaW5mby5WZG90SCk7ZmxvYXQgY2xlYXJDb2F0VGVybT1mcmVzbmVsKmRpc3RyaWJ1dGlvbiprZWxlbWVuVmlzaWJpbGl0eTtyZXR1cm4gdmVjNChcbmNsZWFyQ29hdFRlcm0qaW5mby5hdHRlbnVhdGlvbipOY2Nkb3RMKmxpZ2h0Q29sb3IsXG4xLjAtZnJlc25lbFxuKTt9XG52ZWMzIGNvbXB1dGVDbGVhckNvYXRMaWdodGluZ0Fic29ycHRpb24oZmxvYXQgTmRvdFZSZWZyYWN0LHZlYzMgTCx2ZWMzIE5jYyx2ZWMzIGNsZWFyQ29hdENvbG9yLGZsb2F0IGNsZWFyQ29hdFRoaWNrbmVzcyxmbG9hdCBjbGVhckNvYXRJbnRlbnNpdHkpIHt2ZWMzIExSZWZyYWN0PS1yZWZyYWN0KEwsTmNjLHZDbGVhckNvYXRSZWZyYWN0aW9uUGFyYW1zLnkpO2Zsb2F0IE5kb3RMUmVmcmFjdD1zYXR1cmF0ZUVwcyhkb3QoTmNjLExSZWZyYWN0KSk7dmVjMyBhYnNvcnB0aW9uPWNvbXB1dGVDbGVhckNvYXRBYnNvcnB0aW9uKE5kb3RWUmVmcmFjdCxOZG90TFJlZnJhY3QsY2xlYXJDb2F0Q29sb3IsY2xlYXJDb2F0VGhpY2tuZXNzLGNsZWFyQ29hdEludGVuc2l0eSk7cmV0dXJuIGFic29ycHRpb247fVxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnZlYzMgY29tcHV0ZVNoZWVuTGlnaHRpbmcocHJlTGlnaHRpbmdJbmZvIGluZm8sdmVjMyBOLHZlYzMgcmVmbGVjdGFuY2UwLHZlYzMgcmVmbGVjdGFuY2U5MCxmbG9hdCBnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IsdmVjMyBsaWdodENvbG9yKSB7ZmxvYXQgTmRvdEg9c2F0dXJhdGVFcHMoZG90KE4saW5mby5IKSk7ZmxvYXQgcm91Z2huZXNzPW1heChpbmZvLnJvdWdobmVzcyxnZW9tZXRyaWNSb3VnaG5lc3NGYWN0b3IpO2Zsb2F0IGFscGhhRz1jb252ZXJ0Um91Z2huZXNzVG9BdmVyYWdlU2xvcGUocm91Z2huZXNzKTtmbG9hdCBmcmVzbmVsPTEuO2Zsb2F0IGRpc3RyaWJ1dGlvbj1ub3JtYWxEaXN0cmlidXRpb25GdW5jdGlvbl9DaGFybGllU2hlZW4oTmRvdEgsYWxwaGFHKTsvKiNpZmRlZiBTSEVFTl9TT0ZURVJcbmZsb2F0IHZpc2liaWxpdHk9dmlzaWJpbGl0eV9DaGFybGllU2hlZW4oaW5mby5OZG90TCxpbmZvLk5kb3RWLGFscGhhRyk7XG4jZWxzZSAqL1xuZmxvYXQgdmlzaWJpbGl0eT12aXNpYmlsaXR5X0FzaGlraG1pbihpbmZvLk5kb3RMLGluZm8uTmRvdFYpOy8qICNlbmRpZiAqL1xuZmxvYXQgc2hlZW5UZXJtPWZyZXNuZWwqZGlzdHJpYnV0aW9uKnZpc2liaWxpdHk7cmV0dXJuIHNoZWVuVGVybSppbmZvLmF0dGVudWF0aW9uKmluZm8uTmRvdEwqbGlnaHRDb2xvcjt9XG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgcGJyRGlyZWN0TGlnaHRpbmdGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL2x0Y0hlbHBlckZ1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJEaXJlY3RMaWdodGluZ1NldHVwRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IHByZUxpZ2h0aW5nSW5mb1xue3ZlYzMgbGlnaHRPZmZzZXQ7ZmxvYXQgbGlnaHREaXN0YW5jZVNxdWFyZWQ7ZmxvYXQgbGlnaHREaXN0YW5jZTtmbG9hdCBhdHRlbnVhdGlvbjt2ZWMzIEw7dmVjMyBIO2Zsb2F0IE5kb3RWO2Zsb2F0IE5kb3RMVW5jbGFtcGVkO2Zsb2F0IE5kb3RMO2Zsb2F0IFZkb3RIO2Zsb2F0IExkb3RWO2Zsb2F0IHJvdWdobmVzcztmbG9hdCBkaWZmdXNlUm91Z2huZXNzO3ZlYzMgc3VyZmFjZUFsYmVkbztcbiNpZmRlZiBJUklERVNDRU5DRVxuZmxvYXQgaXJpZGVzY2VuY2VJbnRlbnNpdHk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEFSRUFMSUdIVFVTRUQpICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxudmVjMyBhcmVhTGlnaHREaWZmdXNlO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxudmVjMyBhcmVhTGlnaHRTcGVjdWxhcjt2ZWM0IGFyZWFMaWdodEZyZXNuZWw7XG4jZW5kaWZcbiNlbmRpZlxufTtwcmVMaWdodGluZ0luZm8gY29tcHV0ZVBvaW50QW5kU3BvdFByZUxpZ2h0aW5nSW5mbyh2ZWM0IGxpZ2h0RGF0YSx2ZWMzIFYsdmVjMyBOLHZlYzMgcG9zVykge3ByZUxpZ2h0aW5nSW5mbyByZXN1bHQ7cmVzdWx0LmxpZ2h0T2Zmc2V0PWxpZ2h0RGF0YS54eXotcG9zVztyZXN1bHQubGlnaHREaXN0YW5jZVNxdWFyZWQ9ZG90KHJlc3VsdC5saWdodE9mZnNldCxyZXN1bHQubGlnaHRPZmZzZXQpO3Jlc3VsdC5saWdodERpc3RhbmNlPXNxcnQocmVzdWx0LmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtyZXN1bHQuTD1ub3JtYWxpemUocmVzdWx0LmxpZ2h0T2Zmc2V0KTtyZXN1bHQuSD1ub3JtYWxpemUoVityZXN1bHQuTCk7cmVzdWx0LlZkb3RIPXNhdHVyYXRlKGRvdChWLHJlc3VsdC5IKSk7cmVzdWx0Lk5kb3RMVW5jbGFtcGVkPWRvdChOLHJlc3VsdC5MKTtyZXN1bHQuTmRvdEw9c2F0dXJhdGVFcHMocmVzdWx0Lk5kb3RMVW5jbGFtcGVkKTtyZXN1bHQuTGRvdFY9MC47cmVzdWx0LnJvdWdobmVzcz0wLjtyZXN1bHQuZGlmZnVzZVJvdWdobmVzcz0wLjtyZXN1bHQuc3VyZmFjZUFsYmVkbz12ZWMzKDAuKTtyZXR1cm4gcmVzdWx0O31cbnByZUxpZ2h0aW5nSW5mbyBjb21wdXRlRGlyZWN0aW9uYWxQcmVMaWdodGluZ0luZm8odmVjNCBsaWdodERhdGEsdmVjMyBWLHZlYzMgTikge3ByZUxpZ2h0aW5nSW5mbyByZXN1bHQ7cmVzdWx0LmxpZ2h0RGlzdGFuY2U9bGVuZ3RoKC1saWdodERhdGEueHl6KTtyZXN1bHQuTD1ub3JtYWxpemUoLWxpZ2h0RGF0YS54eXopO3Jlc3VsdC5IPW5vcm1hbGl6ZShWK3Jlc3VsdC5MKTtyZXN1bHQuVmRvdEg9c2F0dXJhdGUoZG90KFYscmVzdWx0LkgpKTtyZXN1bHQuTmRvdExVbmNsYW1wZWQ9ZG90KE4scmVzdWx0LkwpO3Jlc3VsdC5OZG90TD1zYXR1cmF0ZUVwcyhyZXN1bHQuTmRvdExVbmNsYW1wZWQpO3Jlc3VsdC5MZG90Vj1kb3QocmVzdWx0LkwsVik7cmVzdWx0LnJvdWdobmVzcz0wLjtyZXN1bHQuZGlmZnVzZVJvdWdobmVzcz0wLjtyZXN1bHQuc3VyZmFjZUFsYmVkbz12ZWMzKDAuKTtyZXR1cm4gcmVzdWx0O31cbnByZUxpZ2h0aW5nSW5mbyBjb21wdXRlSGVtaXNwaGVyaWNQcmVMaWdodGluZ0luZm8odmVjNCBsaWdodERhdGEsdmVjMyBWLHZlYzMgTikge3ByZUxpZ2h0aW5nSW5mbyByZXN1bHQ7cmVzdWx0Lk5kb3RMPWRvdChOLGxpZ2h0RGF0YS54eXopKjAuNSswLjU7cmVzdWx0Lk5kb3RMPXNhdHVyYXRlRXBzKHJlc3VsdC5OZG90TCk7cmVzdWx0Lk5kb3RMVW5jbGFtcGVkPXJlc3VsdC5OZG90TDtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5MPW5vcm1hbGl6ZShsaWdodERhdGEueHl6KTtyZXN1bHQuSD1ub3JtYWxpemUoVityZXN1bHQuTCk7cmVzdWx0LlZkb3RIPXNhdHVyYXRlKGRvdChWLHJlc3VsdC5IKSk7XG4jZW5kaWZcbnJlc3VsdC5MZG90Vj0wLjtyZXN1bHQucm91Z2huZXNzPTAuO3Jlc3VsdC5kaWZmdXNlUm91Z2huZXNzPTAuO3Jlc3VsdC5zdXJmYWNlQWxiZWRvPXZlYzMoMC4pO3JldHVybiByZXN1bHQ7fVxuI2lmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG4jaW5jbHVkZTxsdGNIZWxwZXJGdW5jdGlvbnM+XG51bmlmb3JtIHNhbXBsZXIyRCBhcmVhTGlnaHRzTFRDMVNhbXBsZXI7dW5pZm9ybSBzYW1wbGVyMkQgYXJlYUxpZ2h0c0xUQzJTYW1wbGVyO3ByZUxpZ2h0aW5nSW5mbyBjb21wdXRlQXJlYVByZUxpZ2h0aW5nSW5mbyhzYW1wbGVyMkQgbHRjMSxzYW1wbGVyMkQgbHRjMix2ZWMzIHZpZXdEaXJlY3Rpb25XLHZlYzMgdk5vcm1hbCx2ZWMzIHZQb3NpdGlvbix2ZWM0IGxpZ2h0RGF0YSx2ZWMzIGhhbGZXaWR0aCx2ZWMzIGhhbGZIZWlnaHQsZmxvYXQgcm91Z2huZXNzIClcbntwcmVMaWdodGluZ0luZm8gcmVzdWx0O3Jlc3VsdC5saWdodE9mZnNldD1saWdodERhdGEueHl6LXZQb3NpdGlvbjtyZXN1bHQubGlnaHREaXN0YW5jZVNxdWFyZWQ9ZG90KHJlc3VsdC5saWdodE9mZnNldCxyZXN1bHQubGlnaHRPZmZzZXQpO3Jlc3VsdC5saWdodERpc3RhbmNlPXNxcnQocmVzdWx0LmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTthcmVhTGlnaHREYXRhIGRhdGE9Y29tcHV0ZUFyZWFMaWdodFNwZWN1bGFyRGlmZnVzZUZyZXNuZWwobHRjMSxsdGMyLHZpZXdEaXJlY3Rpb25XLHZOb3JtYWwsdlBvc2l0aW9uLGxpZ2h0RGF0YS54eXosaGFsZldpZHRoLGhhbGZIZWlnaHQscm91Z2huZXNzKTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnJlc3VsdC5hcmVhTGlnaHRGcmVzbmVsPWRhdGEuRnJlc25lbDtyZXN1bHQuYXJlYUxpZ2h0U3BlY3VsYXI9ZGF0YS5TcGVjdWxhcjtcbiNlbmRpZlxucmVzdWx0LmFyZWFMaWdodERpZmZ1c2U9ZGF0YS5EaWZmdXNlO3Jlc3VsdC5MZG90Vj0wLjtyZXN1bHQucm91Z2huZXNzPTAuO3Jlc3VsdC5kaWZmdXNlUm91Z2huZXNzPTAuO3Jlc3VsdC5zdXJmYWNlQWxiZWRvPXZlYzMoMC4pO3JldHVybiByZXN1bHQ7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBickRpcmVjdExpZ2h0aW5nU2V0dXBGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL21haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB2YXJ5aW5nIHZlYzMgdlBvc2l0aW9uVztcbiNpZiBERUJVR01PREU+MFxudmFyeWluZyB2ZWM0IHZDbGlwU3BhY2VQb3NpdGlvbjtcbiNlbmRpZlxuI2luY2x1ZGU8bWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uPlsxLi43XVxuI2lmZGVmIE5PUk1BTFxudmFyeWluZyB2ZWMzIHZOb3JtYWxXO1xuI2lmIGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG52YXJ5aW5nIHZlYzMgdkVudmlyb25tZW50SXJyYWRpYW5jZTtcbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG52YXJ5aW5nIHZlYzQgdkNvbG9yO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbnZhcnlpbmcgZmxvYXQgdlZpZXdEZXB0aDtcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJGcmFnbWVudEV4dHJhRGVjbGFyYXRpb24gPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBickhlbHBlckZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNkZWZpbmUgTUlOSU1VTVZBUklBTkNFIDAuMDAwNVxuZmxvYXQgY29udmVydFJvdWdobmVzc1RvQXZlcmFnZVNsb3BlKGZsb2F0IHJvdWdobmVzcylcbntyZXR1cm4gc3F1YXJlKHJvdWdobmVzcykrTUlOSU1VTVZBUklBTkNFO31cbmZsb2F0IGZyZXNuZWxHcmF6aW5nUmVmbGVjdGFuY2UoZmxvYXQgcmVmbGVjdGFuY2UwKSB7ZmxvYXQgcmVmbGVjdGFuY2U5MD1zYXR1cmF0ZShyZWZsZWN0YW5jZTAqMjUuMCk7cmV0dXJuIHJlZmxlY3RhbmNlOTA7fVxudmVjMiBnZXRBQVJvdWdobmVzc0ZhY3RvcnModmVjMyBub3JtYWxWZWN0b3IpIHtcbiNpZmRlZiBTUEVDVUxBUkFBXG52ZWMzIG5EZmR4PWRGZHgobm9ybWFsVmVjdG9yLnh5eik7dmVjMyBuRGZkeT1kRmR5KG5vcm1hbFZlY3Rvci54eXopO2Zsb2F0IHNsb3BlU3F1YXJlPW1heChkb3QobkRmZHgsbkRmZHgpLGRvdChuRGZkeSxuRGZkeSkpO2Zsb2F0IGdlb21ldHJpY1JvdWdobmVzc0ZhY3Rvcj1wb3coc2F0dXJhdGUoc2xvcGVTcXVhcmUpLDAuMzMzKTtmbG9hdCBnZW9tZXRyaWNBbHBoYUdGYWN0b3I9c3FydChzbG9wZVNxdWFyZSk7Z2VvbWV0cmljQWxwaGFHRmFjdG9yKj0wLjc1O3JldHVybiB2ZWMyKGdlb21ldHJpY1JvdWdobmVzc0ZhY3RvcixnZW9tZXRyaWNBbHBoYUdGYWN0b3IpO1xuI2Vsc2VcbnJldHVybiB2ZWMyKDAuKTtcbiNlbmRpZlxufVxuI2lmZGVmIEFOSVNPVFJPUElDXG4jaWZkZWYgQU5JU09UUk9QSUNfTEVHQUNZXG52ZWMyIGdldEFuaXNvdHJvcGljUm91Z2huZXNzKGZsb2F0IGFscGhhRyxmbG9hdCBhbmlzb3Ryb3B5KSB7ZmxvYXQgYWxwaGFUPW1heChhbHBoYUcqKDEuMCthbmlzb3Ryb3B5KSxNSU5JTVVNVkFSSUFOQ0UpO2Zsb2F0IGFscGhhQj1tYXgoYWxwaGFHKigxLjAtYW5pc290cm9weSksTUlOSU1VTVZBUklBTkNFKTtyZXR1cm4gdmVjMihhbHBoYVQsYWxwaGFCKTt9XG52ZWMzIGdldEFuaXNvdHJvcGljQmVudE5vcm1hbHMoY29uc3QgdmVjMyBULGNvbnN0IHZlYzMgQixjb25zdCB2ZWMzIE4sY29uc3QgdmVjMyBWLGZsb2F0IGFuaXNvdHJvcHksZmxvYXQgcm91Z2huZXNzKSB7dmVjMyBhbmlzb3Ryb3BpY0ZyYW1lRGlyZWN0aW9uO2lmIChhbmlzb3Ryb3B5Pj0wLjApIHthbmlzb3Ryb3BpY0ZyYW1lRGlyZWN0aW9uPUI7fSBlbHNlIHthbmlzb3Ryb3BpY0ZyYW1lRGlyZWN0aW9uPVQ7fVxudmVjMyBhbmlzb3Ryb3BpY0ZyYW1lVGFuZ2VudD1jcm9zcyhub3JtYWxpemUoYW5pc290cm9waWNGcmFtZURpcmVjdGlvbiksVik7dmVjMyBhbmlzb3Ryb3BpY0ZyYW1lTm9ybWFsPWNyb3NzKGFuaXNvdHJvcGljRnJhbWVUYW5nZW50LGFuaXNvdHJvcGljRnJhbWVEaXJlY3Rpb24pO3ZlYzMgYW5pc290cm9waWNOb3JtYWw9bm9ybWFsaXplKG1peChOLGFuaXNvdHJvcGljRnJhbWVOb3JtYWwsYWJzKGFuaXNvdHJvcHkpKSk7cmV0dXJuIGFuaXNvdHJvcGljTm9ybWFsO31cbiNlbGlmIEFOSVNPVFJPUElDX09QRU5QQlJcbnZlYzIgZ2V0QW5pc290cm9waWNSb3VnaG5lc3MoZmxvYXQgYWxwaGFHLGZsb2F0IGFuaXNvdHJvcHkpIHtmbG9hdCBhbHBoYVQ9YWxwaGFHKnNxcnQoMi4wLygxLjArKDEuMC1hbmlzb3Ryb3B5KSooMS4wLWFuaXNvdHJvcHkpKSk7ZmxvYXQgYWxwaGFCPW1heChhbHBoYVQqKDEuMC1hbmlzb3Ryb3B5KSxNSU5JTVVNVkFSSUFOQ0UpO3JldHVybiB2ZWMyKGFscGhhVCxhbHBoYUIpO31cbiNlbHNlXG52ZWMyIGdldEFuaXNvdHJvcGljUm91Z2huZXNzKGZsb2F0IGFscGhhRyxmbG9hdCBhbmlzb3Ryb3B5KSB7ZmxvYXQgYWxwaGFUPW1heChtaXgoYWxwaGFHLDEuMCxhbmlzb3Ryb3B5KmFuaXNvdHJvcHkpLE1JTklNVU1WQVJJQU5DRSk7ZmxvYXQgYWxwaGFCPW1heChhbHBoYUcsTUlOSU1VTVZBUklBTkNFKTtyZXR1cm4gdmVjMihhbHBoYVQsYWxwaGFCKTt9XG52ZWMzIGdldEFuaXNvdHJvcGljQmVudE5vcm1hbHMoY29uc3QgdmVjMyBULGNvbnN0IHZlYzMgQixjb25zdCB2ZWMzIE4sY29uc3QgdmVjMyBWLGZsb2F0IGFuaXNvdHJvcHksZmxvYXQgcm91Z2huZXNzKSB7dmVjMyBiZW50Tm9ybWFsPWNyb3NzKEIsVik7YmVudE5vcm1hbD1ub3JtYWxpemUoY3Jvc3MoYmVudE5vcm1hbCxCKSk7ZmxvYXQgYT1zcXVhcmUoc3F1YXJlKDEuMC1hbmlzb3Ryb3B5KigxLjAtcm91Z2huZXNzKSkpO2JlbnROb3JtYWw9bm9ybWFsaXplKG1peChiZW50Tm9ybWFsLE4sYSkpO3JldHVybiBiZW50Tm9ybWFsO31cbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChDTEVBUkNPQVQpIHx8IGRlZmluZWQoU1NfUkVGUkFDVElPTilcbnZlYzMgY29jYUxhbWJlcnQodmVjMyBhbHBoYSxmbG9hdCBkaXN0YW5jZSkge3JldHVybiBleHAoLWFscGhhKmRpc3RhbmNlKTt9XG52ZWMzIGNvY2FMYW1iZXJ0KGZsb2F0IE5kb3RWUmVmcmFjdCxmbG9hdCBOZG90TFJlZnJhY3QsdmVjMyBhbHBoYSxmbG9hdCB0aGlja25lc3MpIHtyZXR1cm4gY29jYUxhbWJlcnQoYWxwaGEsKHRoaWNrbmVzcyooKE5kb3RMUmVmcmFjdCtOZG90VlJlZnJhY3QpLyhOZG90TFJlZnJhY3QqTmRvdFZSZWZyYWN0KSkpKTt9XG52ZWMzIGNvbXB1dGVDb2xvckF0RGlzdGFuY2VJbk1lZGlhKHZlYzMgY29sb3IsZmxvYXQgZGlzdGFuY2UpIHtyZXR1cm4gLWxvZyhjb2xvcikvZGlzdGFuY2U7fVxudmVjMyBjb21wdXRlQ2xlYXJDb2F0QWJzb3JwdGlvbihmbG9hdCBOZG90VlJlZnJhY3QsZmxvYXQgTmRvdExSZWZyYWN0LHZlYzMgY2xlYXJDb2F0Q29sb3IsZmxvYXQgY2xlYXJDb2F0VGhpY2tuZXNzLGZsb2F0IGNsZWFyQ29hdEludGVuc2l0eSkge3ZlYzMgY2xlYXJDb2F0QWJzb3JwdGlvbj1taXgodmVjMygxLjApLFxuY29jYUxhbWJlcnQoTmRvdFZSZWZyYWN0LE5kb3RMUmVmcmFjdCxjbGVhckNvYXRDb2xvcixjbGVhckNvYXRUaGlja25lc3MpLFxuY2xlYXJDb2F0SW50ZW5zaXR5KTtyZXR1cm4gY2xlYXJDb2F0QWJzb3JwdGlvbjt9XG4jZW5kaWZcbiNpZmRlZiBNSUNST1NVUkZBQ0VBVVRPTUFUSUNcbmZsb2F0IGNvbXB1dGVEZWZhdWx0TWljcm9TdXJmYWNlKGZsb2F0IG1pY3JvU3VyZmFjZSx2ZWMzIHJlZmxlY3Rpdml0eUNvbG9yKVxue2NvbnN0IGZsb2F0IGtSZWZsZWN0aXZpdHlOb0FscGhhV29ya2Zsb3dfU21vb3RobmVzc01heD0wLjk1O2Zsb2F0IHJlZmxlY3Rpdml0eUx1bWluYW5jZT1nZXRMdW1pbmFuY2UocmVmbGVjdGl2aXR5Q29sb3IpO2Zsb2F0IHJlZmxlY3Rpdml0eUx1bWE9c3FydChyZWZsZWN0aXZpdHlMdW1pbmFuY2UpO21pY3JvU3VyZmFjZT1yZWZsZWN0aXZpdHlMdW1hKmtSZWZsZWN0aXZpdHlOb0FscGhhV29ya2Zsb3dfU21vb3RobmVzc01heDtyZXR1cm4gbWljcm9TdXJmYWNlO31cbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJIZWxwZXJGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBicklCTEZ1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKFJFRkxFQ1RJT04pIHx8IGRlZmluZWQoU1NfUkVGUkFDVElPTilcbmZsb2F0IGdldExvZEZyb21BbHBoYUcoZmxvYXQgY3ViZU1hcERpbWVuc2lvblBpeGVscyxmbG9hdCBtaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGUpIHtmbG9hdCBtaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGVUZXhlbHM9Y3ViZU1hcERpbWVuc2lvblBpeGVscyptaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGU7ZmxvYXQgbG9kPWxvZzIobWljcm9zdXJmYWNlQXZlcmFnZVNsb3BlVGV4ZWxzKTtyZXR1cm4gbG9kO31cbmZsb2F0IGdldExpbmVhckxvZEZyb21Sb3VnaG5lc3MoZmxvYXQgY3ViZU1hcERpbWVuc2lvblBpeGVscyxmbG9hdCByb3VnaG5lc3MpIHtmbG9hdCBsb2Q9bG9nMihjdWJlTWFwRGltZW5zaW9uUGl4ZWxzKSpyb3VnaG5lc3M7cmV0dXJuIGxvZDt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChSQURJQU5DRU9DQ0xVU0lPTilcbmZsb2F0IGVudmlyb25tZW50UmFkaWFuY2VPY2NsdXNpb24oZmxvYXQgYW1iaWVudE9jY2x1c2lvbixmbG9hdCBOZG90VlVuY2xhbXBlZCkge2Zsb2F0IHRlbXA9TmRvdFZVbmNsYW1wZWQrYW1iaWVudE9jY2x1c2lvbjtyZXR1cm4gc2F0dXJhdGUoc3F1YXJlKHRlbXApLTEuMCthbWJpZW50T2NjbHVzaW9uKTt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEVOVklST05NRU5UQlJERikgJiYgZGVmaW5lZChIT1JJWk9OT0NDTFVTSU9OKVxuZmxvYXQgZW52aXJvbm1lbnRIb3Jpem9uT2NjbHVzaW9uKHZlYzMgdmlldyx2ZWMzIG5vcm1hbCx2ZWMzIGdlb21ldHJpY05vcm1hbCkge3ZlYzMgcmVmbGVjdGlvbj1yZWZsZWN0KHZpZXcsbm9ybWFsKTtmbG9hdCB0ZW1wPXNhdHVyYXRlKDEuMCsxLjEqZG90KHJlZmxlY3Rpb24sZ2VvbWV0cmljTm9ybWFsKSk7cmV0dXJuIHNxdWFyZSh0ZW1wKTt9XG4jZW5kaWZcbiNpZiBkZWZpbmVkKExPRElOUkVGTEVDVElPTkFMUEhBKSB8fCBkZWZpbmVkKFNTX0xPRElOUkVGUkFDVElPTkFMUEhBKVxuI2RlZmluZSBVTlBBQ0tfTE9EKHgpICgxLjAteCkqMjU1LjBcbmZsb2F0IGdldExvZEZyb21BbHBoYUcoZmxvYXQgY3ViZU1hcERpbWVuc2lvblBpeGVscyxmbG9hdCBhbHBoYUcsZmxvYXQgTmRvdFYpIHtmbG9hdCBtaWNyb3N1cmZhY2VBdmVyYWdlU2xvcGU9YWxwaGFHO21pY3Jvc3VyZmFjZUF2ZXJhZ2VTbG9wZSo9c3FydChhYnMoTmRvdFYpKTtyZXR1cm4gZ2V0TG9kRnJvbUFscGhhRyhjdWJlTWFwRGltZW5zaW9uUGl4ZWxzLG1pY3Jvc3VyZmFjZUF2ZXJhZ2VTbG9wZSk7fVxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBicklCTEZ1bmN0aW9ucyA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwic3ViU3VyZmFjZVNjYXR0ZXJpbmdGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGBib29sIHRlc3RMaWdodGluZ0ZvclNTUyhmbG9hdCBkaWZmdXNpb25Qcm9maWxlKVxue3JldHVybiBkaWZmdXNpb25Qcm9maWxlPDEuO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHN1YlN1cmZhY2VTY2F0dGVyaW5nRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=