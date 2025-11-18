"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_pbr_vertex_js"],{

/***/ "../core/dist/Shaders/ShadersInclude/bumpVertex.js":
/*!*********************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/bumpVertex.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpVertex: () => (/* binding */ bumpVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpVertex";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const bumpVertex = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/bumpVertexDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/bumpVertexDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bumpVertexDeclaration: () => (/* binding */ bumpVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "bumpVertexDeclaration";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const bumpVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrUboDeclaration.js":
/*!****************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrUboDeclaration.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrUboDeclaration: () => (/* binding */ pbrUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/Shaders/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "pbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBumpInfos;mat4 albedoMatrix;mat4 baseWeightMatrix;mat4 baseDiffuseRoughnessMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 reflectivityMatrix;mat4 microSurfaceSamplerMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;vec4 vAlbedoColor;float baseWeight;float baseDiffuseRoughness;vec4 vLightingIntensity;float pointSize;vec4 vReflectivityColor;vec3 vEmissiveColor;vec3 vAmbientColor;vec2 vDebugMode;vec4 vMetallicReflectanceFactors;vec2 vMetallicReflectanceInfos;mat4 metallicReflectanceMatrix;vec2 vReflectanceInfos;mat4 reflectanceMatrix;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionMicrosurfaceInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vReflectionFilteringInfo;vec3 vReflectionDominantDirection;vec3 vReflectionColor;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/pbrVertexDeclaration.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/pbrVertexDeclaration.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrVertexDeclaration: () => (/* binding */ pbrVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/decalVertexDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "pbrVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
#ifdef ALBEDO
uniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;
#endif
#ifdef BASE_WEIGHT
uniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;
#endif
uniform float baseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform mat4 baseDiffuseRoughnessMatrix;uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec4 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;uniform mat4 reflectivityMatrix;
#endif
#ifdef METALLIC_REFLECTANCE
uniform vec2 vMetallicReflectanceInfos;uniform mat4 metallicReflectanceMatrix;
#endif
#ifdef REFLECTANCE
uniform vec2 vReflectanceInfos;uniform mat4 reflectanceMatrix;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;uniform mat4 microSurfaceSamplerMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
uniform vec4 cameraInfo;
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#ifdef IRIDESCENCE
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const pbrVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/pbr.vertex.js":
/*!******************************************!*\
  !*** ../core/dist/Shaders/pbr.vertex.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pbrVertexShader: () => (/* binding */ pbrVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_pbrVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/pbrVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_pbrUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/pbrUboDeclaration */ "../core/dist/Shaders/ShadersInclude/pbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_uvAttributeDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/uvAttributeDeclaration */ "../core/dist/Shaders/ShadersInclude/uvAttributeDeclaration.js");
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/mainUVVaryingDeclaration */ "../core/dist/Shaders/ShadersInclude/mainUVVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/Shaders/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/pbrBRDFFunctions */ "../core/dist/Shaders/ShadersInclude/pbrBRDFFunctions.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/Shaders/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/Shaders/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_prePassVertexDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/prePassVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/prePassVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexDeclaration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/samplerVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_harmonicsFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/harmonicsFunctions */ "../core/dist/Shaders/ShadersInclude/harmonicsFunctions.js");
/* harmony import */ var _ShadersInclude_bumpVertexDeclaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/bumpVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/bumpVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxFragmentDeclaration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/lightVxFragmentDeclaration */ "../core/dist/Shaders/ShadersInclude/lightVxFragmentDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/lightVxUboDeclaration */ "../core/dist/Shaders/ShadersInclude/lightVxUboDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/Shaders/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/Shaders/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/Shaders/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/Shaders/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/Shaders/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_prePassVertex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/prePassVertex */ "../core/dist/Shaders/ShadersInclude/prePassVertex.js");
/* harmony import */ var _ShadersInclude_uvVariableDeclaration__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/uvVariableDeclaration */ "../core/dist/Shaders/ShadersInclude/uvVariableDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexImplementation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexImplementation */ "../core/dist/Shaders/ShadersInclude/samplerVertexImplementation.js");
/* harmony import */ var _ShadersInclude_bumpVertex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/bumpVertex */ "../core/dist/Shaders/ShadersInclude/bumpVertex.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/Shaders/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/Shaders/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_vertexColorMixing__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ShadersInclude/vertexColorMixing */ "../core/dist/Shaders/ShadersInclude/vertexColorMixing.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



































const name = "pbrVertexShader";
const shader = `#define PBR_VERTEX_SHADER
#define CUSTOM_VERTEX_EXTENSION
precision highp float;
#include<__decl__pbrVertex>
#define CUSTOM_VERTEX_BEGIN
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef TANGENT
attribute vec4 tangent;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)
#endif
varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec3 positionUpdated=position;
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#ifdef TANGENT
vec4 tangentUpdated=tangent;
#endif
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*finalWorld*vec4(positionUpdated,1.0);vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);vPositionW=vec3(worldPos);
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/vec3(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vNormalW=normalize(normalWorld*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);float NdotV=max(dot(vNormalW,viewDirectionW),0.0);vec3 roughNormal=mix(vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*baseDiffuseRoughness);vec3 reflectionVector=vec3(reflectionMatrix*vec4(roughNormal,0)).xyz;
#else
vec3 reflectionVector=vec3(reflectionMatrix*vec4(vNormalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vClipSpacePosition=gl_Position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(positionUpdated,0.0)));
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
vViewDepth=(view*worldPos).z;
#endif
#ifndef UV1
vec2 uvUpdated=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2Updated=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uvUpdated;
#endif
#ifdef MAINUV2
vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_MATRIXNAME_,baseDiffuseRoughness,_INFONAME_,BaseDiffuseRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const pbrVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGJyX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2hhcm1vbmljc0Z1bmN0aW9ucy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvcGJyVWJvRGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BiclZlcnRleERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9wYnIudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJidW1wVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChQQVJBTExBWCkgfHwgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChBTklTT1RST1BJQylcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmVjMyB0Ym5Ob3JtYWw9bm9ybWFsaXplKG5vcm1hbFVwZGF0ZWQpO3ZlYzMgdGJuVGFuZ2VudD1ub3JtYWxpemUodGFuZ2VudFVwZGF0ZWQueHl6KTt2ZWMzIHRibkJpdGFuZ2VudD1jcm9zcyh0Ym5Ob3JtYWwsdGJuVGFuZ2VudCkqdGFuZ2VudFVwZGF0ZWQudzt2VEJOPW1hdDMoZmluYWxXb3JsZCkqbWF0Myh0Ym5UYW5nZW50LHRibkJpdGFuZ2VudCx0Ym5Ob3JtYWwpO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcFZlcnRleCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcFZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoQlVNUCkgfHwgZGVmaW5lZChQQVJBTExBWCkgfHwgZGVmaW5lZChDTEVBUkNPQVRfQlVNUCkgfHwgZGVmaW5lZChBTklTT1RST1BJQylcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKSBcbnZhcnlpbmcgbWF0MyB2VEJOO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgYnVtcFZlcnRleERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJoYXJtb25pY3NGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZmRlZiBTUEhFUklDQUxfSEFSTU9OSUNTXG52ZWMzIGNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UodmVjMyBub3JtYWwpIHtyZXR1cm4gdlNwaGVyaWNhbEwwMFxuKyB2U3BoZXJpY2FsTDFfMSoobm9ybWFsLnkpXG4rIHZTcGhlcmljYWxMMTAqKG5vcm1hbC56KVxuKyB2U3BoZXJpY2FsTDExKihub3JtYWwueClcbisgdlNwaGVyaWNhbEwyXzIqKG5vcm1hbC55Km5vcm1hbC54KVxuKyB2U3BoZXJpY2FsTDJfMSoobm9ybWFsLnkqbm9ybWFsLnopXG4rIHZTcGhlcmljYWxMMjAqKCgzLjAqbm9ybWFsLnoqbm9ybWFsLnopLTEuMClcbisgdlNwaGVyaWNhbEwyMSoobm9ybWFsLnoqbm9ybWFsLngpXG4rIHZTcGhlcmljYWxMMjIqKG5vcm1hbC54Km5vcm1hbC54LShub3JtYWwueSpub3JtYWwueSkpO31cbiNlbHNlXG52ZWMzIGNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UodmVjMyBub3JtYWwpIHtmbG9hdCBOeD1ub3JtYWwueDtmbG9hdCBOeT1ub3JtYWwueTtmbG9hdCBOej1ub3JtYWwuejt2ZWMzIEMxPXZTcGhlcmljYWxaWi5yZ2I7dmVjMyBDeD12U3BoZXJpY2FsWC5yZ2I7dmVjMyBDeT12U3BoZXJpY2FsWS5yZ2I7dmVjMyBDej12U3BoZXJpY2FsWi5yZ2I7dmVjMyBDeHhfeno9dlNwaGVyaWNhbFhYX1paLnJnYjt2ZWMzIEN5eV96ej12U3BoZXJpY2FsWVlfWloucmdiO3ZlYzMgQ3h5PXZTcGhlcmljYWxYWS5yZ2I7dmVjMyBDeXo9dlNwaGVyaWNhbFlaLnJnYjt2ZWMzIEN6eD12U3BoZXJpY2FsWlgucmdiO3ZlYzMgYTE9Q3l5X3p6Kk55K0N5O3ZlYzMgYTI9Q3l6Kk56K2ExO3ZlYzMgYjE9Q3p4Kk56K0N4O3ZlYzMgYjI9Q3h5Kk55K2IxO3ZlYzMgYjM9Q3h4X3p6Kk54K2IyO3ZlYzMgdDE9Q3ogKk56K0MxO3ZlYzMgdDI9YTIgKk55K3QxO3ZlYzMgdDM9YjMgKk54K3QyO3JldHVybiB0Mzt9XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBoYXJtb25pY3NGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5pbXBvcnQgXCIuL3NjZW5lVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vbWVzaFVib0RlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBiclVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgbGF5b3V0KHN0ZDE0MCxjb2x1bW5fbWFqb3IpIHVuaWZvcm07dW5pZm9ybSBNYXRlcmlhbCB7dmVjMiB2QWxiZWRvSW5mb3M7dmVjMiB2QmFzZVdlaWdodEluZm9zO3ZlYzIgdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M7dmVjNCB2QW1iaWVudEluZm9zO3ZlYzIgdk9wYWNpdHlJbmZvczt2ZWMyIHZFbWlzc2l2ZUluZm9zO3ZlYzIgdkxpZ2h0bWFwSW5mb3M7dmVjMyB2UmVmbGVjdGl2aXR5SW5mb3M7dmVjMiB2TWljcm9TdXJmYWNlU2FtcGxlckluZm9zO3ZlYzMgdkJ1bXBJbmZvczttYXQ0IGFsYmVkb01hdHJpeDttYXQ0IGJhc2VXZWlnaHRNYXRyaXg7bWF0NCBiYXNlRGlmZnVzZVJvdWdobmVzc01hdHJpeDttYXQ0IGFtYmllbnRNYXRyaXg7bWF0NCBvcGFjaXR5TWF0cml4O21hdDQgZW1pc3NpdmVNYXRyaXg7bWF0NCBsaWdodG1hcE1hdHJpeDttYXQ0IHJlZmxlY3Rpdml0eU1hdHJpeDttYXQ0IG1pY3JvU3VyZmFjZVNhbXBsZXJNYXRyaXg7bWF0NCBidW1wTWF0cml4O3ZlYzIgdlRhbmdlbnRTcGFjZVBhcmFtczt2ZWM0IHZBbGJlZG9Db2xvcjtmbG9hdCBiYXNlV2VpZ2h0O2Zsb2F0IGJhc2VEaWZmdXNlUm91Z2huZXNzO3ZlYzQgdkxpZ2h0aW5nSW50ZW5zaXR5O2Zsb2F0IHBvaW50U2l6ZTt2ZWM0IHZSZWZsZWN0aXZpdHlDb2xvcjt2ZWMzIHZFbWlzc2l2ZUNvbG9yO3ZlYzMgdkFtYmllbnRDb2xvcjt2ZWMyIHZEZWJ1Z01vZGU7dmVjNCB2TWV0YWxsaWNSZWZsZWN0YW5jZUZhY3RvcnM7dmVjMiB2TWV0YWxsaWNSZWZsZWN0YW5jZUluZm9zO21hdDQgbWV0YWxsaWNSZWZsZWN0YW5jZU1hdHJpeDt2ZWMyIHZSZWZsZWN0YW5jZUluZm9zO21hdDQgcmVmbGVjdGFuY2VNYXRyaXg7dmVjNCBjYW1lcmFJbmZvO3ZlYzIgdlJlZmxlY3Rpb25JbmZvczttYXQ0IHJlZmxlY3Rpb25NYXRyaXg7dmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO3ZlYzMgdlJlZmxlY3Rpb25Qb3NpdGlvbjt2ZWMzIHZSZWZsZWN0aW9uU2l6ZTt2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzt2ZWMzIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb247dmVjMyB2UmVmbGVjdGlvbkNvbG9yO3ZlYzMgdlNwaGVyaWNhbEwwMDt2ZWMzIHZTcGhlcmljYWxMMV8xO3ZlYzMgdlNwaGVyaWNhbEwxMDt2ZWMzIHZTcGhlcmljYWxMMTE7dmVjMyB2U3BoZXJpY2FsTDJfMjt2ZWMzIHZTcGhlcmljYWxMMl8xO3ZlYzMgdlNwaGVyaWNhbEwyMDt2ZWMzIHZTcGhlcmljYWxMMjE7dmVjMyB2U3BoZXJpY2FsTDIyO3ZlYzMgdlNwaGVyaWNhbFg7dmVjMyB2U3BoZXJpY2FsWTt2ZWMzIHZTcGhlcmljYWxaO3ZlYzMgdlNwaGVyaWNhbFhYX1paO3ZlYzMgdlNwaGVyaWNhbFlZX1paO3ZlYzMgdlNwaGVyaWNhbFpaO3ZlYzMgdlNwaGVyaWNhbFhZO3ZlYzMgdlNwaGVyaWNhbFlaO3ZlYzMgdlNwaGVyaWNhbFpYO1xuI2RlZmluZSBBRERJVElPTkFMX1VCT19ERUNMQVJBVElPTlxufTtcbiNpbmNsdWRlPHNjZW5lVWJvRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtZXNoVWJvRGVjbGFyYXRpb24+XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclVib0RlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9kZWNhbFZlcnRleERlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcInBiclZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgdW5pZm9ybSBtYXQ0IHZpZXc7dW5pZm9ybSBtYXQ0IHZpZXdQcm9qZWN0aW9uO3VuaWZvcm0gdmVjNCB2RXllUG9zaXRpb247XG4jaWZkZWYgTVVMVElWSUVXXG5tYXQ0IHZpZXdQcm9qZWN0aW9uUjtcbiNlbmRpZlxuI2lmZGVmIEFMQkVET1xudW5pZm9ybSBtYXQ0IGFsYmVkb01hdHJpeDt1bmlmb3JtIHZlYzIgdkFsYmVkb0luZm9zO1xuI2VuZGlmXG4jaWZkZWYgQkFTRV9XRUlHSFRcbnVuaWZvcm0gbWF0NCBiYXNlV2VpZ2h0TWF0cml4O3VuaWZvcm0gdmVjMiB2QmFzZVdlaWdodEluZm9zO1xuI2VuZGlmXG51bmlmb3JtIGZsb2F0IGJhc2VEaWZmdXNlUm91Z2huZXNzO1xuI2lmZGVmIEJBU0VfRElGRlVTRV9ST1VHSE5FU1NcbnVuaWZvcm0gbWF0NCBiYXNlRGlmZnVzZVJvdWdobmVzc01hdHJpeDt1bmlmb3JtIHZlYzIgdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBBTUJJRU5UXG51bmlmb3JtIG1hdDQgYW1iaWVudE1hdHJpeDt1bmlmb3JtIHZlYzQgdkFtYmllbnRJbmZvcztcbiNlbmRpZlxuI2lmZGVmIE9QQUNJVFlcbnVuaWZvcm0gbWF0NCBvcGFjaXR5TWF0cml4O3VuaWZvcm0gdmVjMiB2T3BhY2l0eUluZm9zO1xuI2VuZGlmXG4jaWZkZWYgRU1JU1NJVkVcbnVuaWZvcm0gdmVjMiB2RW1pc3NpdmVJbmZvczt1bmlmb3JtIG1hdDQgZW1pc3NpdmVNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBMSUdIVE1BUFxudW5pZm9ybSB2ZWMyIHZMaWdodG1hcEluZm9zO3VuaWZvcm0gbWF0NCBsaWdodG1hcE1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJVklUWVxudW5pZm9ybSB2ZWMzIHZSZWZsZWN0aXZpdHlJbmZvczt1bmlmb3JtIG1hdDQgcmVmbGVjdGl2aXR5TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgTUVUQUxMSUNfUkVGTEVDVEFOQ0VcbnVuaWZvcm0gdmVjMiB2TWV0YWxsaWNSZWZsZWN0YW5jZUluZm9zO3VuaWZvcm0gbWF0NCBtZXRhbGxpY1JlZmxlY3RhbmNlTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgUkVGTEVDVEFOQ0VcbnVuaWZvcm0gdmVjMiB2UmVmbGVjdGFuY2VJbmZvczt1bmlmb3JtIG1hdDQgcmVmbGVjdGFuY2VNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBNSUNST1NVUkZBQ0VNQVBcbnVuaWZvcm0gdmVjMiB2TWljcm9TdXJmYWNlU2FtcGxlckluZm9zO3VuaWZvcm0gbWF0NCBtaWNyb1N1cmZhY2VTYW1wbGVyTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgQlVNUFxudW5pZm9ybSB2ZWMzIHZCdW1wSW5mb3M7dW5pZm9ybSBtYXQ0IGJ1bXBNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBQT0lOVFNJWkVcbnVuaWZvcm0gZmxvYXQgcG9pbnRTaXplO1xuI2VuZGlmXG51bmlmb3JtIHZlYzQgY2FtZXJhSW5mbztcbiNpZmRlZiBSRUZMRUNUSU9OXG51bmlmb3JtIHZlYzIgdlJlZmxlY3Rpb25JbmZvczt1bmlmb3JtIG1hdDQgcmVmbGVjdGlvbk1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuI2lmIGRlZmluZWQoQ0xFQVJDT0FUX1RFWFRVUkUpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTKVxudW5pZm9ybSB2ZWM0IHZDbGVhckNvYXRJbmZvcztcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9URVhUVVJFXG51bmlmb3JtIG1hdDQgY2xlYXJDb2F0TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTXG51bmlmb3JtIG1hdDQgY2xlYXJDb2F0Um91Z2huZXNzTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX0JVTVBcbnVuaWZvcm0gdmVjMiB2Q2xlYXJDb2F0QnVtcEluZm9zO3VuaWZvcm0gbWF0NCBjbGVhckNvYXRCdW1wTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUX1RJTlRfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZDbGVhckNvYXRUaW50SW5mb3M7dW5pZm9ybSBtYXQ0IGNsZWFyQ29hdFRpbnRNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG4jaWYgZGVmaW5lZChJUklERVNDRU5DRV9URVhUVVJFKSB8fCBkZWZpbmVkKElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFKVxudW5pZm9ybSB2ZWM0IHZJcmlkZXNjZW5jZUluZm9zO1xuI2VuZGlmXG4jaWZkZWYgSVJJREVTQ0VOQ0VfVEVYVFVSRVxudW5pZm9ybSBtYXQ0IGlyaWRlc2NlbmNlTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgSVJJREVTQ0VOQ0VfVEhJQ0tORVNTX1RFWFRVUkVcbnVuaWZvcm0gbWF0NCBpcmlkZXNjZW5jZVRoaWNrbmVzc01hdHJpeDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbiNpZmRlZiBBTklTT1RST1BJQ19URVhUVVJFXG51bmlmb3JtIHZlYzIgdkFuaXNvdHJvcHlJbmZvczt1bmlmb3JtIG1hdDQgYW5pc290cm9weU1hdHJpeDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbiNpZiBkZWZpbmVkKFNIRUVOX1RFWFRVUkUpIHx8IGRlZmluZWQoU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MpXG51bmlmb3JtIHZlYzQgdlNoZWVuSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTl9URVhUVVJFXG51bmlmb3JtIG1hdDQgc2hlZW5NYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTl9URVhUVVJFX1JPVUdITkVTU1xudW5pZm9ybSBtYXQ0IHNoZWVuUm91Z2huZXNzTWF0cml4O1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTVUJTVVJGQUNFXG4jaWZkZWYgU1NfUkVGUkFDVElPTlxudW5pZm9ybSB2ZWM0IHZSZWZyYWN0aW9uSW5mb3M7dW5pZm9ybSBtYXQ0IHJlZnJhY3Rpb25NYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkVcbnVuaWZvcm0gdmVjMiB2VGhpY2tuZXNzSW5mb3M7dW5pZm9ybSBtYXQ0IHRoaWNrbmVzc01hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNTX1JFRlJBQ1RJT05JTlRFTlNJVFlfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZSZWZyYWN0aW9uSW50ZW5zaXR5SW5mb3M7dW5pZm9ybSBtYXQ0IHJlZnJhY3Rpb25JbnRlbnNpdHlNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lJTlRFTlNJVFlfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZUcmFuc2x1Y2VuY3lJbnRlbnNpdHlJbmZvczt1bmlmb3JtIG1hdDQgdHJhbnNsdWNlbmN5SW50ZW5zaXR5TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZUcmFuc2x1Y2VuY3lDb2xvckluZm9zO3VuaWZvcm0gbWF0NCB0cmFuc2x1Y2VuY3lDb2xvck1hdHJpeDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgTk9STUFMXG4jaWYgZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbiNpZmRlZiBVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUFxuI2lmZGVmIFNQSEVSSUNBTF9IQVJNT05JQ1NcbnVuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDAwO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDFfMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwxMDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwxMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyXzI7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMl8xO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDIwO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDIxO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDIyO1xuI2Vsc2VcbnVuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFk7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxaO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWFhfWlo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxZWV9aWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFpaO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWFk7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxZWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFpYO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgREVUQUlMXG51bmlmb3JtIHZlYzQgdkRldGFpbEluZm9zO3VuaWZvcm0gbWF0NCBkZXRhaWxNYXRyaXg7XG4jZW5kaWZcbiNpbmNsdWRlPGRlY2FsVmVydGV4RGVjbGFyYXRpb24+XG4jZGVmaW5lIEFERElUSU9OQUxfVkVSVEVYX0RFQ0xBUkFUSU9OXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclZlcnRleERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS91dkF0dHJpYnV0ZURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21haW5VVlZhcnlpbmdEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyQlJERkZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9oYXJtb25pY3NGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhGcmFnbWVudERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xpZ2h0VnhVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaW5zdGFuY2VzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2Jha2VkVmVydGV4QW5pbWF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdXZWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9idW1wVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2NsaXBQbGFuZVZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2hhZG93c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS92ZXJ0ZXhDb2xvck1peGluZ1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9sb2dEZXB0aFZlcnRleFwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIFBCUl9WRVJURVhfU0hBREVSXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfRVhURU5TSU9OXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4jaW5jbHVkZTxfX2RlY2xfX3BiclZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9CRUdJTlxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgdmVjMyBub3JtYWw7XG4jZW5kaWZcbiNpZmRlZiBUQU5HRU5UXG5hdHRyaWJ1dGUgdmVjNCB0YW5nZW50O1xuI2VuZGlmXG4jaWZkZWYgVVYxXG5hdHRyaWJ1dGUgdmVjMiB1djtcbiNlbmRpZlxuI2luY2x1ZGU8dXZBdHRyaWJ1dGVEZWNsYXJhdGlvbj5bMi4uN11cbiNpbmNsdWRlPG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbj5bMS4uN11cbiNpZmRlZiBWRVJURVhDT0xPUlxuYXR0cmlidXRlIHZlYzQgY29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPGhlbHBlckZ1bmN0aW9ucz5cbiNpbmNsdWRlPHBickJSREZGdW5jdGlvbnM+XG4jaW5jbHVkZTxib25lc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGluc3RhbmNlc0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8cHJlUGFzc1ZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQUxCRURPLF9WQVJZSU5HTkFNRV8sQWxiZWRvKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9ESUZGVVNFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVCxfVkFSWUlOR05BTUVfLEFtYmllbnQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxPUEFDSVRZLF9WQVJZSU5HTkFNRV8sT3BhY2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSVZFLF9WQVJZSU5HTkFNRV8sRW1pc3NpdmUpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxMSUdIVE1BUCxfVkFSWUlOR05BTUVfLExpZ2h0bWFwKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVElWSVRZLF9WQVJZSU5HTkFNRV8sUmVmbGVjdGl2aXR5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTUlDUk9TVVJGQUNFTUFQLF9WQVJZSU5HTkFNRV8sTWljcm9TdXJmYWNlU2FtcGxlcilcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLE1FVEFMTElDX1JFRkxFQ1RBTkNFLF9WQVJZSU5HTkFNRV8sTWV0YWxsaWNSZWZsZWN0YW5jZSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFJFRkxFQ1RBTkNFLF9WQVJZSU5HTkFNRV8sUmVmbGVjdGFuY2UpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCVU1QLF9WQVJZSU5HTkFNRV8sQnVtcClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFQ0FMLF9WQVJZSU5HTkFNRV8sRGVjYWwpXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVEVYVFVSRSxfVkFSWUlOR05BTUVfLENsZWFyQ29hdClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLENsZWFyQ29hdFJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9CVU1QLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0QnVtcClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9USU5UX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRUaW50KVxuI2VuZGlmXG4jaWZkZWYgSVJJREVTQ0VOQ0VcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFLF9WQVJZSU5HTkFNRV8sSXJpZGVzY2VuY2VUaGlja25lc3MpXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRSxfVkFSWUlOR05BTUVfLFNoZWVuKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTaGVlblJvdWdobmVzcylcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTklTT1RST1BJQ19URVhUVVJFLF9WQVJZSU5HTkFNRV8sQW5pc290cm9weSlcbiNlbmRpZlxuI2lmZGVmIFNVQlNVUkZBQ0VcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRoaWNrbmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1JFRlJBQ1RJT05JTlRFTlNJVFlfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFJlZnJhY3Rpb25JbnRlbnNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19UUkFOU0xVQ0VOQ1lJTlRFTlNJVFlfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRyYW5zbHVjZW5jeUludGVuc2l0eSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lDb2xvcilcbiNlbmRpZlxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblc7XG4jaWYgREVCVUdNT0RFPjBcbnZhcnlpbmcgdmVjNCB2Q2xpcFNwYWNlUG9zaXRpb247XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsVztcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxudmFyeWluZyB2ZWMzIHZFbnZpcm9ubWVudElycmFkaWFuY2U7XG4jaW5jbHVkZTxoYXJtb25pY3NGdW5jdGlvbnM+XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxudmFyeWluZyB2ZWM0IHZDb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8YnVtcFZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRWeEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb25VVlc7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52YXJ5aW5nIHZlYzMgdkRpcmVjdGlvblc7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxudmFyeWluZyBmbG9hdCB2Vmlld0RlcHRoO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aERlY2xhcmF0aW9uPlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fVkVSVEVYX01BSU5fQkVHSU5cbnZlYzMgcG9zaXRpb25VcGRhdGVkPXBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxudmVjMyBub3JtYWxVcGRhdGVkPW5vcm1hbDtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbnZlYzQgdGFuZ2VudFVwZGF0ZWQ9dGFuZ2VudDtcbiNlbmRpZlxuI2lmZGVmIFVWMVxudmVjMiB1dlVwZGF0ZWQ9dXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZlYzIgdXYyVXBkYXRlZD11djI7XG4jZW5kaWZcbiNpZmRlZiBWRVJURVhDT0xPUlxudmVjNCBjb2xvclVwZGF0ZWQ9Y29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbD5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleD5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52UG9zaXRpb25VVlc9cG9zaXRpb25VcGRhdGVkO1xuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1BPU0lUSU9OXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX05PUk1BTFxuI2luY2x1ZGU8aW5zdGFuY2VzVmVydGV4PlxuI2lmIGRlZmluZWQoUFJFUEFTUykgJiYgKChkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFkpIHx8IGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWV9MSU5FQVIpKSAmJiAhZGVmaW5lZChCT05FU19WRUxPQ0lUWV9FTkFCTEVEKVxudkN1cnJlbnRQb3NpdGlvbj12aWV3UHJvamVjdGlvbipmaW5hbFdvcmxkKnZlYzQocG9zaXRpb25VcGRhdGVkLDEuMCk7dlByZXZpb3VzUG9zaXRpb249cHJldmlvdXNWaWV3UHJvamVjdGlvbipmaW5hbFByZXZpb3VzV29ybGQqdmVjNChwb3NpdGlvblVwZGF0ZWQsMS4wKTtcbiNlbmRpZlxuI2luY2x1ZGU8Ym9uZXNWZXJ0ZXg+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbj5cbnZlYzQgd29ybGRQb3M9ZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uVXBkYXRlZCwxLjApO3ZQb3NpdGlvblc9dmVjMyh3b3JsZFBvcyk7XG4jaWZkZWYgUFJFUEFTU1xuI2luY2x1ZGU8cHJlUGFzc1ZlcnRleD5cbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxubWF0MyBub3JtYWxXb3JsZD1tYXQzKGZpbmFsV29ybGQpO1xuI2lmIGRlZmluZWQoSU5TVEFOQ0VTKSAmJiBkZWZpbmVkKFRISU5fSU5TVEFOQ0VTKVxudk5vcm1hbFc9bm9ybWFsVXBkYXRlZC92ZWMzKGRvdChub3JtYWxXb3JsZFswXSxub3JtYWxXb3JsZFswXSksZG90KG5vcm1hbFdvcmxkWzFdLG5vcm1hbFdvcmxkWzFdKSxkb3Qobm9ybWFsV29ybGRbMl0sbm9ybWFsV29ybGRbMl0pKTt2Tm9ybWFsVz1ub3JtYWxpemUobm9ybWFsV29ybGQqdk5vcm1hbFcpO1xuI2Vsc2VcbiNpZmRlZiBOT05VTklGT1JNU0NBTElOR1xubm9ybWFsV29ybGQ9dHJhbnNwb3NlTWF0MyhpbnZlcnNlTWF0Myhub3JtYWxXb3JsZCkpO1xuI2VuZGlmXG52Tm9ybWFsVz1ub3JtYWxpemUobm9ybWFsV29ybGQqbm9ybWFsVXBkYXRlZCk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxuI2lmIEJBU0VfRElGRlVTRV9NT0RFTCAhPSBCUkRGX0RJRkZVU0VfTU9ERUxfTEFNQkVSVCAmJiBCQVNFX0RJRkZVU0VfTU9ERUwgIT0gQlJERl9ESUZGVVNFX01PREVMX0xFR0FDWVxudmVjMyB2aWV3RGlyZWN0aW9uVz1ub3JtYWxpemUodkV5ZVBvc2l0aW9uLnh5ei12UG9zaXRpb25XKTtmbG9hdCBOZG90Vj1tYXgoZG90KHZOb3JtYWxXLHZpZXdEaXJlY3Rpb25XKSwwLjApO3ZlYzMgcm91Z2hOb3JtYWw9bWl4KHZOb3JtYWxXLHZpZXdEaXJlY3Rpb25XLCgwLjUqKDEuMC1OZG90VikpKmJhc2VEaWZmdXNlUm91Z2huZXNzKTt2ZWMzIHJlZmxlY3Rpb25WZWN0b3I9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQocm91Z2hOb3JtYWwsMCkpLnh5ejtcbiNlbHNlXG52ZWMzIHJlZmxlY3Rpb25WZWN0b3I9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQodk5vcm1hbFcsMCkpLnh5ejtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG5yZWZsZWN0aW9uVmVjdG9yLnoqPS0xLjA7XG4jZW5kaWZcbnZFbnZpcm9ubWVudElycmFkaWFuY2U9Y29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZShyZWZsZWN0aW9uVmVjdG9yKTtcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1dPUkxEUE9TXG4jaWZkZWYgTVVMVElWSUVXXG5pZiAoZ2xfVmlld0lEX09WUj09MHUpIHtnbF9Qb3NpdGlvbj12aWV3UHJvamVjdGlvbip3b3JsZFBvczt9IGVsc2Uge2dsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uUip3b3JsZFBvczt9XG4jZWxzZVxuZ2xfUG9zaXRpb249dmlld1Byb2plY3Rpb24qd29ybGRQb3M7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxudkNsaXBTcGFjZVBvc2l0aW9uPWdsX1Bvc2l0aW9uO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudkRpcmVjdGlvblc9bm9ybWFsaXplKHZlYzMoZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uVXBkYXRlZCwwLjApKSk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxudlZpZXdEZXB0aD0odmlldyp3b3JsZFBvcykuejtcbiNlbmRpZlxuI2lmbmRlZiBVVjFcbnZlYzIgdXZVcGRhdGVkPXZlYzIoMC4sMC4pO1xuI2VuZGlmXG4jaWZuZGVmIFVWMlxudmVjMiB1djJVcGRhdGVkPXZlYzIoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMVxudk1haW5VVjE9dXZVcGRhdGVkO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMlxudk1haW5VVjI9dXYyVXBkYXRlZDtcbiNlbmRpZlxuI2luY2x1ZGU8dXZWYXJpYWJsZURlY2xhcmF0aW9uPlszLi43XVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQUxCRURPLF9WQVJZSU5HTkFNRV8sQWxiZWRvLF9NQVRSSVhOQU1FXyxhbGJlZG8sX0lORk9OQU1FXyxBbGJlZG9JbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0LF9NQVRSSVhOQU1FXyxiYXNlV2VpZ2h0LF9JTkZPTkFNRV8sQmFzZVdlaWdodEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX0RJRkZVU0VfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQmFzZURpZmZ1c2VSb3VnaG5lc3MsX01BVFJJWE5BTUVfLGJhc2VEaWZmdXNlUm91Z2huZXNzLF9JTkZPTkFNRV8sQmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9NQVRSSVhOQU1FXyxkZXRhaWwsX0lORk9OQU1FXyxEZXRhaWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVCxfVkFSWUlOR05BTUVfLEFtYmllbnQsX01BVFJJWE5BTUVfLGFtYmllbnQsX0lORk9OQU1FXyxBbWJpZW50SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLE9QQUNJVFksX1ZBUllJTkdOQU1FXyxPcGFjaXR5LF9NQVRSSVhOQU1FXyxvcGFjaXR5LF9JTkZPTkFNRV8sT3BhY2l0eUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlLF9NQVRSSVhOQU1FXyxlbWlzc2l2ZSxfSU5GT05BTUVfLEVtaXNzaXZlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXAsX01BVFJJWE5BTUVfLGxpZ2h0bWFwLF9JTkZPTkFNRV8sTGlnaHRtYXBJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVElWSVRZLF9WQVJZSU5HTkFNRV8sUmVmbGVjdGl2aXR5LF9NQVRSSVhOQU1FXyxyZWZsZWN0aXZpdHksX0lORk9OQU1FXyxSZWZsZWN0aXZpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sTUlDUk9TVVJGQUNFTUFQLF9WQVJZSU5HTkFNRV8sTWljcm9TdXJmYWNlU2FtcGxlcixfTUFUUklYTkFNRV8sbWljcm9TdXJmYWNlU2FtcGxlcixfSU5GT05BTUVfLE1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sTUVUQUxMSUNfUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxNZXRhbGxpY1JlZmxlY3RhbmNlLF9NQVRSSVhOQU1FXyxtZXRhbGxpY1JlZmxlY3RhbmNlLF9JTkZPTkFNRV8sTWV0YWxsaWNSZWZsZWN0YW5jZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLFJlZmxlY3RhbmNlLF9NQVRSSVhOQU1FXyxyZWZsZWN0YW5jZSxfSU5GT05BTUVfLFJlZmxlY3RhbmNlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJVTVAsX1ZBUllJTkdOQU1FXyxCdW1wLF9NQVRSSVhOQU1FXyxidW1wLF9JTkZPTkFNRV8sQnVtcEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsLF9NQVRSSVhOQU1FXyxkZWNhbCxfSU5GT05BTUVfLERlY2FsSW5mb3MueClcbiNpZmRlZiBDTEVBUkNPQVRcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0LF9NQVRSSVhOQU1FXyxjbGVhckNvYXQsX0lORk9OQU1FXyxDbGVhckNvYXRJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0Um91Z2huZXNzLF9NQVRSSVhOQU1FXyxjbGVhckNvYXRSb3VnaG5lc3MsX0lORk9OQU1FXyxDbGVhckNvYXRJbmZvcy56KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX0JVTVAsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRCdW1wLF9NQVRSSVhOQU1FXyxjbGVhckNvYXRCdW1wLF9JTkZPTkFNRV8sQ2xlYXJDb2F0QnVtcEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVElOVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0VGludCxfTUFUUklYTkFNRV8sY2xlYXJDb2F0VGludCxfSU5GT05BTUVfLENsZWFyQ29hdFRpbnRJbmZvcy54KVxuI2VuZGlmXG4jaWZkZWYgSVJJREVTQ0VOQ0VcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZSxfTUFUUklYTkFNRV8saXJpZGVzY2VuY2UsX0lORk9OQU1FXyxJcmlkZXNjZW5jZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlVGhpY2tuZXNzLF9NQVRSSVhOQU1FXyxpcmlkZXNjZW5jZVRoaWNrbmVzcyxfSU5GT05BTUVfLElyaWRlc2NlbmNlSW5mb3MueilcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sU2hlZW4sX01BVFJJWE5BTUVfLHNoZWVuLF9JTkZPTkFNRV8sU2hlZW5JbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTaGVlblJvdWdobmVzcyxfTUFUUklYTkFNRV8sc2hlZW5Sb3VnaG5lc3MsX0lORk9OQU1FXyxTaGVlbkluZm9zLnopXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQU5JU09UUk9QSUNfVEVYVFVSRSxfVkFSWUlOR05BTUVfLEFuaXNvdHJvcHksX01BVFJJWE5BTUVfLGFuaXNvdHJvcHksX0lORk9OQU1FXyxBbmlzb3Ryb3B5SW5mb3MueClcbiNlbmRpZlxuI2lmZGVmIFNVQlNVUkZBQ0VcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRoaWNrbmVzcyxfTUFUUklYTkFNRV8sdGhpY2tuZXNzLF9JTkZPTkFNRV8sVGhpY2tuZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1JFRlJBQ1RJT05JTlRFTlNJVFlfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFJlZnJhY3Rpb25JbnRlbnNpdHksX01BVFJJWE5BTUVfLHJlZnJhY3Rpb25JbnRlbnNpdHksX0lORk9OQU1FXyxSZWZyYWN0aW9uSW50ZW5zaXR5SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUlOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5SW50ZW5zaXR5LF9NQVRSSVhOQU1FXyx0cmFuc2x1Y2VuY3lJbnRlbnNpdHksX0lORk9OQU1FXyxUcmFuc2x1Y2VuY3lJbnRlbnNpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRyYW5zbHVjZW5jeUNvbG9yLF9NQVRSSVhOQU1FXyx0cmFuc2x1Y2VuY3lDb2xvcixfSU5GT05BTUVfLFRyYW5zbHVjZW5jeUNvbG9ySW5mb3MueClcbiNlbmRpZlxuI2luY2x1ZGU8YnVtcFZlcnRleD5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPHNoYWRvd3NWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHZlcnRleENvbG9yTWl4aW5nPlxuI2lmIGRlZmluZWQoUE9JTlRTSVpFKSAmJiAhZGVmaW5lZChXRUJHUFUpXG5nbF9Qb2ludFNpemU9cG9pbnRTaXplO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclZlcnRleFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=