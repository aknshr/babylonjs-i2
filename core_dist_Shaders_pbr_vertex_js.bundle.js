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
#ifdef RIGHT_HANDED
vViewDepth=-(view*worldPos).z;
#else
vViewDepth=(view*worldPos).z;
#endif
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfcGJyX3ZlcnRleF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleERlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9oYXJtb25pY3NGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL3BiclVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9wYnJWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvcGJyLnZlcnRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiYnVtcFZlcnRleFwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZlYzMgdGJuTm9ybWFsPW5vcm1hbGl6ZShub3JtYWxVcGRhdGVkKTt2ZWMzIHRiblRhbmdlbnQ9bm9ybWFsaXplKHRhbmdlbnRVcGRhdGVkLnh5eik7dmVjMyB0Ym5CaXRhbmdlbnQ9Y3Jvc3ModGJuTm9ybWFsLHRiblRhbmdlbnQpKnRhbmdlbnRVcGRhdGVkLnc7dlRCTj1tYXQzKGZpbmFsV29ybGQpKm1hdDModGJuVGFuZ2VudCx0Ym5CaXRhbmdlbnQsdGJuTm9ybWFsKTtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBWZXJ0ZXggPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJ1bXBWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZiBkZWZpbmVkKEJVTVApIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTCkgXG52YXJ5aW5nIG1hdDMgdlRCTjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGJ1bXBWZXJ0ZXhEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWZkZWYgU1BIRVJJQ0FMX0hBUk1PTklDU1xudmVjMyBjb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKHZlYzMgbm9ybWFsKSB7cmV0dXJuIHZTcGhlcmljYWxMMDBcbisgdlNwaGVyaWNhbEwxXzEqKG5vcm1hbC55KVxuKyB2U3BoZXJpY2FsTDEwKihub3JtYWwueilcbisgdlNwaGVyaWNhbEwxMSoobm9ybWFsLngpXG4rIHZTcGhlcmljYWxMMl8yKihub3JtYWwueSpub3JtYWwueClcbisgdlNwaGVyaWNhbEwyXzEqKG5vcm1hbC55Km5vcm1hbC56KVxuKyB2U3BoZXJpY2FsTDIwKigoMy4wKm5vcm1hbC56Km5vcm1hbC56KS0xLjApXG4rIHZTcGhlcmljYWxMMjEqKG5vcm1hbC56Km5vcm1hbC54KVxuKyB2U3BoZXJpY2FsTDIyKihub3JtYWwueCpub3JtYWwueC0obm9ybWFsLnkqbm9ybWFsLnkpKTt9XG4jZWxzZVxudmVjMyBjb21wdXRlRW52aXJvbm1lbnRJcnJhZGlhbmNlKHZlYzMgbm9ybWFsKSB7ZmxvYXQgTng9bm9ybWFsLng7ZmxvYXQgTnk9bm9ybWFsLnk7ZmxvYXQgTno9bm9ybWFsLno7dmVjMyBDMT12U3BoZXJpY2FsWloucmdiO3ZlYzMgQ3g9dlNwaGVyaWNhbFgucmdiO3ZlYzMgQ3k9dlNwaGVyaWNhbFkucmdiO3ZlYzMgQ3o9dlNwaGVyaWNhbFoucmdiO3ZlYzMgQ3h4X3p6PXZTcGhlcmljYWxYWF9aWi5yZ2I7dmVjMyBDeXlfeno9dlNwaGVyaWNhbFlZX1paLnJnYjt2ZWMzIEN4eT12U3BoZXJpY2FsWFkucmdiO3ZlYzMgQ3l6PXZTcGhlcmljYWxZWi5yZ2I7dmVjMyBDeng9dlNwaGVyaWNhbFpYLnJnYjt2ZWMzIGExPUN5eV96eipOeStDeTt2ZWMzIGEyPUN5eipOeithMTt2ZWMzIGIxPUN6eCpOeitDeDt2ZWMzIGIyPUN4eSpOeStiMTt2ZWMzIGIzPUN4eF96eipOeCtiMjt2ZWMzIHQxPUN6ICpOeitDMTt2ZWMzIHQyPWEyICpOeSt0MTt2ZWMzIHQzPWIzICpOeCt0MjtyZXR1cm4gdDM7fVxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaGFybW9uaWNzRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJVYm9EZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYGxheW91dChzdGQxNDAsY29sdW1uX21ham9yKSB1bmlmb3JtO3VuaWZvcm0gTWF0ZXJpYWwge3ZlYzIgdkFsYmVkb0luZm9zO3ZlYzIgdkJhc2VXZWlnaHRJbmZvczt2ZWMyIHZCYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zO3ZlYzQgdkFtYmllbnRJbmZvczt2ZWMyIHZPcGFjaXR5SW5mb3M7dmVjMiB2RW1pc3NpdmVJbmZvczt2ZWMyIHZMaWdodG1hcEluZm9zO3ZlYzMgdlJlZmxlY3Rpdml0eUluZm9zO3ZlYzIgdk1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvczt2ZWMzIHZCdW1wSW5mb3M7bWF0NCBhbGJlZG9NYXRyaXg7bWF0NCBiYXNlV2VpZ2h0TWF0cml4O21hdDQgYmFzZURpZmZ1c2VSb3VnaG5lc3NNYXRyaXg7bWF0NCBhbWJpZW50TWF0cml4O21hdDQgb3BhY2l0eU1hdHJpeDttYXQ0IGVtaXNzaXZlTWF0cml4O21hdDQgbGlnaHRtYXBNYXRyaXg7bWF0NCByZWZsZWN0aXZpdHlNYXRyaXg7bWF0NCBtaWNyb1N1cmZhY2VTYW1wbGVyTWF0cml4O21hdDQgYnVtcE1hdHJpeDt2ZWMyIHZUYW5nZW50U3BhY2VQYXJhbXM7dmVjNCB2QWxiZWRvQ29sb3I7ZmxvYXQgYmFzZVdlaWdodDtmbG9hdCBiYXNlRGlmZnVzZVJvdWdobmVzczt2ZWM0IHZMaWdodGluZ0ludGVuc2l0eTtmbG9hdCBwb2ludFNpemU7dmVjNCB2UmVmbGVjdGl2aXR5Q29sb3I7dmVjMyB2RW1pc3NpdmVDb2xvcjt2ZWMzIHZBbWJpZW50Q29sb3I7dmVjMiB2RGVidWdNb2RlO3ZlYzQgdk1ldGFsbGljUmVmbGVjdGFuY2VGYWN0b3JzO3ZlYzIgdk1ldGFsbGljUmVmbGVjdGFuY2VJbmZvczttYXQ0IG1ldGFsbGljUmVmbGVjdGFuY2VNYXRyaXg7dmVjMiB2UmVmbGVjdGFuY2VJbmZvczttYXQ0IHJlZmxlY3RhbmNlTWF0cml4O3ZlYzQgY2FtZXJhSW5mbzt2ZWMyIHZSZWZsZWN0aW9uSW5mb3M7bWF0NCByZWZsZWN0aW9uTWF0cml4O3ZlYzMgdlJlZmxlY3Rpb25NaWNyb3N1cmZhY2VJbmZvczt2ZWMzIHZSZWZsZWN0aW9uUG9zaXRpb247dmVjMyB2UmVmbGVjdGlvblNpemU7dmVjMiB2UmVmbGVjdGlvbkZpbHRlcmluZ0luZm87dmVjMyB2UmVmbGVjdGlvbkRvbWluYW50RGlyZWN0aW9uO3ZlYzMgdlJlZmxlY3Rpb25Db2xvcjt2ZWMzIHZTcGhlcmljYWxMMDA7dmVjMyB2U3BoZXJpY2FsTDFfMTt2ZWMzIHZTcGhlcmljYWxMMTA7dmVjMyB2U3BoZXJpY2FsTDExO3ZlYzMgdlNwaGVyaWNhbEwyXzI7dmVjMyB2U3BoZXJpY2FsTDJfMTt2ZWMzIHZTcGhlcmljYWxMMjA7dmVjMyB2U3BoZXJpY2FsTDIxO3ZlYzMgdlNwaGVyaWNhbEwyMjt2ZWMzIHZTcGhlcmljYWxYO3ZlYzMgdlNwaGVyaWNhbFk7dmVjMyB2U3BoZXJpY2FsWjt2ZWMzIHZTcGhlcmljYWxYWF9aWjt2ZWMzIHZTcGhlcmljYWxZWV9aWjt2ZWMzIHZTcGhlcmljYWxaWjt2ZWMzIHZTcGhlcmljYWxYWTt2ZWMzIHZTcGhlcmljYWxZWjt2ZWMzIHZTcGhlcmljYWxaWDtcbiNkZWZpbmUgQURESVRJT05BTF9VQk9fREVDTEFSQVRJT05cbn07XG4jaW5jbHVkZTxzY2VuZVVib0RlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bWVzaFVib0RlY2xhcmF0aW9uPlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJVYm9EZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vZGVjYWxWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJwYnJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gbWF0NCB2aWV3O3VuaWZvcm0gbWF0NCB2aWV3UHJvamVjdGlvbjt1bmlmb3JtIHZlYzQgdkV5ZVBvc2l0aW9uO1xuI2lmZGVmIE1VTFRJVklFV1xubWF0NCB2aWV3UHJvamVjdGlvblI7XG4jZW5kaWZcbiNpZmRlZiBBTEJFRE9cbnVuaWZvcm0gbWF0NCBhbGJlZG9NYXRyaXg7dW5pZm9ybSB2ZWMyIHZBbGJlZG9JbmZvcztcbiNlbmRpZlxuI2lmZGVmIEJBU0VfV0VJR0hUXG51bmlmb3JtIG1hdDQgYmFzZVdlaWdodE1hdHJpeDt1bmlmb3JtIHZlYzIgdkJhc2VXZWlnaHRJbmZvcztcbiNlbmRpZlxudW5pZm9ybSBmbG9hdCBiYXNlRGlmZnVzZVJvdWdobmVzcztcbiNpZmRlZiBCQVNFX0RJRkZVU0VfUk9VR0hORVNTXG51bmlmb3JtIG1hdDQgYmFzZURpZmZ1c2VSb3VnaG5lc3NNYXRyaXg7dW5pZm9ybSB2ZWMyIHZCYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zO1xuI2VuZGlmXG4jaWZkZWYgQU1CSUVOVFxudW5pZm9ybSBtYXQ0IGFtYmllbnRNYXRyaXg7dW5pZm9ybSB2ZWM0IHZBbWJpZW50SW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBPUEFDSVRZXG51bmlmb3JtIG1hdDQgb3BhY2l0eU1hdHJpeDt1bmlmb3JtIHZlYzIgdk9wYWNpdHlJbmZvcztcbiNlbmRpZlxuI2lmZGVmIEVNSVNTSVZFXG51bmlmb3JtIHZlYzIgdkVtaXNzaXZlSW5mb3M7dW5pZm9ybSBtYXQ0IGVtaXNzaXZlTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgTElHSFRNQVBcbnVuaWZvcm0gdmVjMiB2TGlnaHRtYXBJbmZvczt1bmlmb3JtIG1hdDQgbGlnaHRtYXBNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSVZJVFlcbnVuaWZvcm0gdmVjMyB2UmVmbGVjdGl2aXR5SW5mb3M7dW5pZm9ybSBtYXQ0IHJlZmxlY3Rpdml0eU1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIE1FVEFMTElDX1JFRkxFQ1RBTkNFXG51bmlmb3JtIHZlYzIgdk1ldGFsbGljUmVmbGVjdGFuY2VJbmZvczt1bmlmb3JtIG1hdDQgbWV0YWxsaWNSZWZsZWN0YW5jZU1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RBTkNFXG51bmlmb3JtIHZlYzIgdlJlZmxlY3RhbmNlSW5mb3M7dW5pZm9ybSBtYXQ0IHJlZmxlY3RhbmNlTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgTUlDUk9TVVJGQUNFTUFQXG51bmlmb3JtIHZlYzIgdk1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvczt1bmlmb3JtIG1hdDQgbWljcm9TdXJmYWNlU2FtcGxlck1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIEJVTVBcbnVuaWZvcm0gdmVjMyB2QnVtcEluZm9zO3VuaWZvcm0gbWF0NCBidW1wTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgUE9JTlRTSVpFXG51bmlmb3JtIGZsb2F0IHBvaW50U2l6ZTtcbiNlbmRpZlxudW5pZm9ybSB2ZWM0IGNhbWVyYUluZm87XG4jaWZkZWYgUkVGTEVDVElPTlxudW5pZm9ybSB2ZWMyIHZSZWZsZWN0aW9uSW5mb3M7dW5pZm9ybSBtYXQ0IHJlZmxlY3Rpb25NYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbiNpZiBkZWZpbmVkKENMRUFSQ09BVF9URVhUVVJFKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTUylcbnVuaWZvcm0gdmVjNCB2Q2xlYXJDb2F0SW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRfVEVYVFVSRVxudW5pZm9ybSBtYXQ0IGNsZWFyQ29hdE1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9URVhUVVJFX1JPVUdITkVTU1xudW5pZm9ybSBtYXQ0IGNsZWFyQ29hdFJvdWdobmVzc01hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9CVU1QXG51bmlmb3JtIHZlYzIgdkNsZWFyQ29hdEJ1bXBJbmZvczt1bmlmb3JtIG1hdDQgY2xlYXJDb2F0QnVtcE1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVF9USU5UX1RFWFRVUkVcbnVuaWZvcm0gdmVjMiB2Q2xlYXJDb2F0VGludEluZm9zO3VuaWZvcm0gbWF0NCBjbGVhckNvYXRUaW50TWF0cml4O1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBJUklERVNDRU5DRVxuI2lmIGRlZmluZWQoSVJJREVTQ0VOQ0VfVEVYVFVSRSkgfHwgZGVmaW5lZChJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSlcbnVuaWZvcm0gdmVjNCB2SXJpZGVzY2VuY2VJbmZvcztcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RFWFRVUkVcbnVuaWZvcm0gbWF0NCBpcmlkZXNjZW5jZU1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFX1RISUNLTkVTU19URVhUVVJFXG51bmlmb3JtIG1hdDQgaXJpZGVzY2VuY2VUaGlja25lc3NNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG4jaWZkZWYgQU5JU09UUk9QSUNfVEVYVFVSRVxudW5pZm9ybSB2ZWMyIHZBbmlzb3Ryb3B5SW5mb3M7dW5pZm9ybSBtYXQ0IGFuaXNvdHJvcHlNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG4jaWYgZGVmaW5lZChTSEVFTl9URVhUVVJFKSB8fCBkZWZpbmVkKFNIRUVOX1RFWFRVUkVfUk9VR0hORVNTKVxudW5pZm9ybSB2ZWM0IHZTaGVlbkluZm9zO1xuI2VuZGlmXG4jaWZkZWYgU0hFRU5fVEVYVFVSRVxudW5pZm9ybSBtYXQ0IHNoZWVuTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1NcbnVuaWZvcm0gbWF0NCBzaGVlblJvdWdobmVzc01hdHJpeDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU1VCU1VSRkFDRVxuI2lmZGVmIFNTX1JFRlJBQ1RJT05cbnVuaWZvcm0gdmVjNCB2UmVmcmFjdGlvbkluZm9zO3VuaWZvcm0gbWF0NCByZWZyYWN0aW9uTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgU1NfVEhJQ0tORVNTQU5ETUFTS19URVhUVVJFXG51bmlmb3JtIHZlYzIgdlRoaWNrbmVzc0luZm9zO3VuaWZvcm0gbWF0NCB0aGlja25lc3NNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkVcbnVuaWZvcm0gdmVjMiB2UmVmcmFjdGlvbkludGVuc2l0eUluZm9zO3VuaWZvcm0gbWF0NCByZWZyYWN0aW9uSW50ZW5zaXR5TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkVcbnVuaWZvcm0gdmVjMiB2VHJhbnNsdWNlbmN5SW50ZW5zaXR5SW5mb3M7dW5pZm9ybSBtYXQ0IHRyYW5zbHVjZW5jeUludGVuc2l0eU1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWUNPTE9SX1RFWFRVUkVcbnVuaWZvcm0gdmVjMiB2VHJhbnNsdWNlbmN5Q29sb3JJbmZvczt1bmlmb3JtIG1hdDQgdHJhbnNsdWNlbmN5Q29sb3JNYXRyaXg7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIE5PUk1BTFxuI2lmIGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG4jaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZmRlZiBTUEhFUklDQUxfSEFSTU9OSUNTXG51bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwwMDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwxXzE7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMTA7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMTE7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMl8yO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDJfMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyMDt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyMTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyMjtcbiNlbHNlXG51bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFg7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxZO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFhYX1paO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWVlfWlo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxaWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFhZO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWVo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxaWDtcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIERFVEFJTFxudW5pZm9ybSB2ZWM0IHZEZXRhaWxJbmZvczt1bmlmb3JtIG1hdDQgZGV0YWlsTWF0cml4O1xuI2VuZGlmXG4jaW5jbHVkZTxkZWNhbFZlcnRleERlY2xhcmF0aW9uPlxuI2RlZmluZSBBRERJVElPTkFMX1ZFUlRFWF9ERUNMQVJBVElPTlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwYnJWZXJ0ZXhEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcGJyVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdXZBdHRyaWJ1dGVEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJSREZGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2J1bXBWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFZ4RnJhZ21lbnREZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFZ4VWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3V2VmFyaWFibGVEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYnVtcFZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdmVydGV4Q29sb3JNaXhpbmdcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwicGJyVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBQQlJfVkVSVEVYX1NIQURFUlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0VYVEVOU0lPTlxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuI2luY2x1ZGU8X19kZWNsX19wYnJWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfQkVHSU5cbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xuI2VuZGlmXG4jaWZkZWYgVEFOR0VOVFxuYXR0cmlidXRlIHZlYzQgdGFuZ2VudDtcbiNlbmRpZlxuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHZlYzIgdXY7XG4jZW5kaWZcbiNpbmNsdWRlPHV2QXR0cmlidXRlRGVjbGFyYXRpb24+WzIuLjddXG4jaW5jbHVkZTxtYWluVVZWYXJ5aW5nRGVjbGFyYXRpb24+WzEuLjddXG4jaWZkZWYgVkVSVEVYQ09MT1JcbmF0dHJpYnV0ZSB2ZWM0IGNvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxoZWxwZXJGdW5jdGlvbnM+XG4jaW5jbHVkZTxwYnJCUkRGRnVuY3Rpb25zPlxuI2luY2x1ZGU8Ym9uZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxpbnN0YW5jZXNEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFMQkVETyxfVkFSWUlOR05BTUVfLEFsYmVkbylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfV0VJR0hULF9WQVJZSU5HTkFNRV8sQmFzZVdlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLERFVEFJTCxfVkFSWUlOR05BTUVfLERldGFpbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEFNQklFTlQsX1ZBUllJTkdOQU1FXyxBbWJpZW50KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sT1BBQ0lUWSxfVkFSWUlOR05BTUVfLE9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sTElHSFRNQVAsX1ZBUllJTkdOQU1FXyxMaWdodG1hcClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFJFRkxFQ1RJVklUWSxfVkFSWUlOR05BTUVfLFJlZmxlY3Rpdml0eSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLE1JQ1JPU1VSRkFDRU1BUCxfVkFSWUlOR05BTUVfLE1pY3JvU3VyZmFjZVNhbXBsZXIpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxNRVRBTExJQ19SRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLE1ldGFsbGljUmVmbGVjdGFuY2UpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLFJlZmxlY3RhbmNlKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQlVNUCxfVkFSWUlOR05BTUVfLEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsKVxuI2lmZGVmIENMRUFSQ09BVFxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfQlVNUCxfVkFSWUlOR05BTUVfLENsZWFyQ29hdEJ1bXApXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVElOVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0VGludClcbiNlbmRpZlxuI2lmZGVmIElSSURFU0NFTkNFXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sSXJpZGVzY2VuY2UpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlVGhpY2tuZXNzKVxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNIRUVOX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxTaGVlbilcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNIRUVOX1RFWFRVUkVfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sU2hlZW5Sb3VnaG5lc3MpXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQU5JU09UUk9QSUNfVEVYVFVSRSxfVkFSWUlOR05BTUVfLEFuaXNvdHJvcHkpXG4jZW5kaWZcbiNpZmRlZiBTVUJTVVJGQUNFXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19USElDS05FU1NBTkRNQVNLX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUaGlja25lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19SRUZSQUNUSU9OSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxSZWZyYWN0aW9uSW50ZW5zaXR5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZSU5URU5TSVRZX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxUcmFuc2x1Y2VuY3lJbnRlbnNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTU19UUkFOU0xVQ0VOQ1lDT0xPUl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5Q29sb3IpXG4jZW5kaWZcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb25XO1xuI2lmIERFQlVHTU9ERT4wXG52YXJ5aW5nIHZlYzQgdkNsaXBTcGFjZVBvc2l0aW9uO1xuI2VuZGlmXG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZlYzMgdk5vcm1hbFc7XG4jaWYgZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbnZhcnlpbmcgdmVjMyB2RW52aXJvbm1lbnRJcnJhZGlhbmNlO1xuI2luY2x1ZGU8aGFybW9uaWNzRnVuY3Rpb25zPlxuI2VuZGlmXG4jZW5kaWZcbiNpZiBkZWZpbmVkKFZFUlRFWENPTE9SKSB8fCBkZWZpbmVkKElOU1RBTkNFU0NPTE9SKSAmJiBkZWZpbmVkKElOU1RBTkNFUylcbnZhcnlpbmcgdmVjNCB2Q29sb3I7XG4jZW5kaWZcbiNpbmNsdWRlPGJ1bXBWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxfX2RlY2xfX2xpZ2h0VnhGcmFnbWVudD5bMC4ubWF4U2ltdWx0YW5lb3VzTGlnaHRzXVxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhEZWNsYXJhdGlvbj5bMC4ubWF4U2ltdWx0YW5lb3VzTW9ycGhUYXJnZXRzXVxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfU0tZQk9YXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uVVZXO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2ZWMzIHZEaXJlY3Rpb25XO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbnZhcnlpbmcgZmxvYXQgdlZpZXdEZXB0aDtcbiNlbmRpZlxuI2luY2x1ZGU8bG9nRGVwdGhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9ERUZJTklUSU9OU1xudm9pZCBtYWluKHZvaWQpIHtcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0JFR0lOXG52ZWMzIHBvc2l0aW9uVXBkYXRlZD1wb3NpdGlvbjtcbiNpZmRlZiBOT1JNQUxcbnZlYzMgbm9ybWFsVXBkYXRlZD1ub3JtYWw7XG4jZW5kaWZcbiNpZmRlZiBUQU5HRU5UXG52ZWM0IHRhbmdlbnRVcGRhdGVkPXRhbmdlbnQ7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbnZlYzIgdXZVcGRhdGVkPXV2O1xuI2VuZGlmXG4jaWZkZWYgVVYyXG52ZWMyIHV2MlVwZGF0ZWQ9dXYyO1xuI2VuZGlmXG4jaWZkZWYgVkVSVEVYQ09MT1JcbnZlYzQgY29sb3JVcGRhdGVkPWNvbG9yO1xuI2VuZGlmXG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWw+XG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudlBvc2l0aW9uVVZXPXBvc2l0aW9uVXBkYXRlZDtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9QT1NJVElPTlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9OT1JNQUxcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbiNpZiBkZWZpbmVkKFBSRVBBU1MpICYmICgoZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSkgJiYgIWRlZmluZWQoQk9ORVNfVkVMT0NJVFlfRU5BQkxFRClcbnZDdXJyZW50UG9zaXRpb249dmlld1Byb2plY3Rpb24qZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uVXBkYXRlZCwxLjApO3ZQcmV2aW91c1Bvc2l0aW9uPXByZXZpb3VzVmlld1Byb2plY3Rpb24qZmluYWxQcmV2aW91c1dvcmxkKnZlYzQocG9zaXRpb25VcGRhdGVkLDEuMCk7XG4jZW5kaWZcbiNpbmNsdWRlPGJvbmVzVmVydGV4PlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb24+XG52ZWM0IHdvcmxkUG9zPWZpbmFsV29ybGQqdmVjNChwb3NpdGlvblVwZGF0ZWQsMS4wKTt2UG9zaXRpb25XPXZlYzMod29ybGRQb3MpO1xuI2lmZGVmIFBSRVBBU1NcbiNpbmNsdWRlPHByZVBhc3NWZXJ0ZXg+XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbm1hdDMgbm9ybWFsV29ybGQ9bWF0MyhmaW5hbFdvcmxkKTtcbiNpZiBkZWZpbmVkKElOU1RBTkNFUykgJiYgZGVmaW5lZChUSElOX0lOU1RBTkNFUylcbnZOb3JtYWxXPW5vcm1hbFVwZGF0ZWQvdmVjMyhkb3Qobm9ybWFsV29ybGRbMF0sbm9ybWFsV29ybGRbMF0pLGRvdChub3JtYWxXb3JsZFsxXSxub3JtYWxXb3JsZFsxXSksZG90KG5vcm1hbFdvcmxkWzJdLG5vcm1hbFdvcmxkWzJdKSk7dk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKnZOb3JtYWxXKTtcbiNlbHNlXG4jaWZkZWYgTk9OVU5JRk9STVNDQUxJTkdcbm5vcm1hbFdvcmxkPXRyYW5zcG9zZU1hdDMoaW52ZXJzZU1hdDMobm9ybWFsV29ybGQpKTtcbiNlbmRpZlxudk5vcm1hbFc9bm9ybWFsaXplKG5vcm1hbFdvcmxkKm5vcm1hbFVwZGF0ZWQpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChVU0VTUEhFUklDQUxGUk9NUkVGTEVDVElPTk1BUCkgJiYgZGVmaW5lZChVU0VTUEhFUklDQUxJTlZFUlRFWClcbiNpZiBCQVNFX0RJRkZVU0VfTU9ERUwgIT0gQlJERl9ESUZGVVNFX01PREVMX0xBTUJFUlQgJiYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MRUdBQ1lcbnZlYzMgdmlld0RpcmVjdGlvblc9bm9ybWFsaXplKHZFeWVQb3NpdGlvbi54eXotdlBvc2l0aW9uVyk7ZmxvYXQgTmRvdFY9bWF4KGRvdCh2Tm9ybWFsVyx2aWV3RGlyZWN0aW9uVyksMC4wKTt2ZWMzIHJvdWdoTm9ybWFsPW1peCh2Tm9ybWFsVyx2aWV3RGlyZWN0aW9uVywoMC41KigxLjAtTmRvdFYpKSpiYXNlRGlmZnVzZVJvdWdobmVzcyk7dmVjMyByZWZsZWN0aW9uVmVjdG9yPXZlYzMocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KHJvdWdoTm9ybWFsLDApKS54eXo7XG4jZWxzZVxudmVjMyByZWZsZWN0aW9uVmVjdG9yPXZlYzMocmVmbGVjdGlvbk1hdHJpeCp2ZWM0KHZOb3JtYWxXLDApKS54eXo7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxucmVmbGVjdGlvblZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG52RW52aXJvbm1lbnRJcnJhZGlhbmNlPWNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UocmVmbGVjdGlvblZlY3Rvcik7XG4jZW5kaWZcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9XT1JMRFBPU1xuI2lmZGVmIE1VTFRJVklFV1xuaWYgKGdsX1ZpZXdJRF9PVlI9PTB1KSB7Z2xfUG9zaXRpb249dmlld1Byb2plY3Rpb24qd29ybGRQb3M7fSBlbHNlIHtnbF9Qb3NpdGlvbj12aWV3UHJvamVjdGlvblIqd29ybGRQb3M7fVxuI2Vsc2VcbmdsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO1xuI2VuZGlmXG4jaWYgREVCVUdNT0RFPjBcbnZDbGlwU3BhY2VQb3NpdGlvbj1nbF9Qb3NpdGlvbjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZEaXJlY3Rpb25XPW5vcm1hbGl6ZSh2ZWMzKGZpbmFsV29ybGQqdmVjNChwb3NpdGlvblVwZGF0ZWQsMC4wKSkpO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbiNpZmRlZiBSSUdIVF9IQU5ERURcbnZWaWV3RGVwdGg9LSh2aWV3KndvcmxkUG9zKS56O1xuI2Vsc2VcbnZWaWV3RGVwdGg9KHZpZXcqd29ybGRQb3MpLno7XG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBVVjFcbnZlYzIgdXZVcGRhdGVkPXZlYzIoMC4sMC4pO1xuI2VuZGlmXG4jaWZuZGVmIFVWMlxudmVjMiB1djJVcGRhdGVkPXZlYzIoMC4sMC4pO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMVxudk1haW5VVjE9dXZVcGRhdGVkO1xuI2VuZGlmXG4jaWZkZWYgTUFJTlVWMlxudk1haW5VVjI9dXYyVXBkYXRlZDtcbiNlbmRpZlxuI2luY2x1ZGU8dXZWYXJpYWJsZURlY2xhcmF0aW9uPlszLi43XVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQUxCRURPLF9WQVJZSU5HTkFNRV8sQWxiZWRvLF9NQVRSSVhOQU1FXyxhbGJlZG8sX0lORk9OQU1FXyxBbGJlZG9JbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0LF9NQVRSSVhOQU1FXyxiYXNlV2VpZ2h0LF9JTkZPTkFNRV8sQmFzZVdlaWdodEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX0RJRkZVU0VfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQmFzZURpZmZ1c2VSb3VnaG5lc3MsX01BVFJJWE5BTUVfLGJhc2VEaWZmdXNlUm91Z2huZXNzLF9JTkZPTkFNRV8sQmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9NQVRSSVhOQU1FXyxkZXRhaWwsX0lORk9OQU1FXyxEZXRhaWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQU1CSUVOVCxfVkFSWUlOR05BTUVfLEFtYmllbnQsX01BVFJJWE5BTUVfLGFtYmllbnQsX0lORk9OQU1FXyxBbWJpZW50SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLE9QQUNJVFksX1ZBUllJTkdOQU1FXyxPcGFjaXR5LF9NQVRSSVhOQU1FXyxvcGFjaXR5LF9JTkZPTkFNRV8sT3BhY2l0eUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lWRSxfVkFSWUlOR05BTUVfLEVtaXNzaXZlLF9NQVRSSVhOQU1FXyxlbWlzc2l2ZSxfSU5GT05BTUVfLEVtaXNzaXZlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLExJR0hUTUFQLF9WQVJZSU5HTkFNRV8sTGlnaHRtYXAsX01BVFJJWE5BTUVfLGxpZ2h0bWFwLF9JTkZPTkFNRV8sTGlnaHRtYXBJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sUkVGTEVDVElWSVRZLF9WQVJZSU5HTkFNRV8sUmVmbGVjdGl2aXR5LF9NQVRSSVhOQU1FXyxyZWZsZWN0aXZpdHksX0lORk9OQU1FXyxSZWZsZWN0aXZpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sTUlDUk9TVVJGQUNFTUFQLF9WQVJZSU5HTkFNRV8sTWljcm9TdXJmYWNlU2FtcGxlcixfTUFUUklYTkFNRV8sbWljcm9TdXJmYWNlU2FtcGxlcixfSU5GT05BTUVfLE1pY3JvU3VyZmFjZVNhbXBsZXJJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sTUVUQUxMSUNfUkVGTEVDVEFOQ0UsX1ZBUllJTkdOQU1FXyxNZXRhbGxpY1JlZmxlY3RhbmNlLF9NQVRSSVhOQU1FXyxtZXRhbGxpY1JlZmxlY3RhbmNlLF9JTkZPTkFNRV8sTWV0YWxsaWNSZWZsZWN0YW5jZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxSRUZMRUNUQU5DRSxfVkFSWUlOR05BTUVfLFJlZmxlY3RhbmNlLF9NQVRSSVhOQU1FXyxyZWZsZWN0YW5jZSxfSU5GT05BTUVfLFJlZmxlY3RhbmNlSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJVTVAsX1ZBUllJTkdOQU1FXyxCdW1wLF9NQVRSSVhOQU1FXyxidW1wLF9JTkZPTkFNRV8sQnVtcEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsLF9NQVRSSVhOQU1FXyxkZWNhbCxfSU5GT05BTUVfLERlY2FsSW5mb3MueClcbiNpZmRlZiBDTEVBUkNPQVRcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENMRUFSQ09BVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0LF9NQVRSSVhOQU1FXyxjbGVhckNvYXQsX0lORk9OQU1FXyxDbGVhckNvYXRJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX1RFWFRVUkVfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0Um91Z2huZXNzLF9NQVRSSVhOQU1FXyxjbGVhckNvYXRSb3VnaG5lc3MsX0lORk9OQU1FXyxDbGVhckNvYXRJbmZvcy56KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQ0xFQVJDT0FUX0JVTVAsX1ZBUllJTkdOQU1FXyxDbGVhckNvYXRCdW1wLF9NQVRSSVhOQU1FXyxjbGVhckNvYXRCdW1wLF9JTkZPTkFNRV8sQ2xlYXJDb2F0QnVtcEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDTEVBUkNPQVRfVElOVF9URVhUVVJFLF9WQVJZSU5HTkFNRV8sQ2xlYXJDb2F0VGludCxfTUFUUklYTkFNRV8sY2xlYXJDb2F0VGludCxfSU5GT05BTUVfLENsZWFyQ29hdFRpbnRJbmZvcy54KVxuI2VuZGlmXG4jaWZkZWYgSVJJREVTQ0VOQ0VcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLElSSURFU0NFTkNFX1RFWFRVUkUsX1ZBUllJTkdOQU1FXyxJcmlkZXNjZW5jZSxfTUFUUklYTkFNRV8saXJpZGVzY2VuY2UsX0lORk9OQU1FXyxJcmlkZXNjZW5jZUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxJUklERVNDRU5DRV9USElDS05FU1NfVEVYVFVSRSxfVkFSWUlOR05BTUVfLElyaWRlc2NlbmNlVGhpY2tuZXNzLF9NQVRSSVhOQU1FXyxpcmlkZXNjZW5jZVRoaWNrbmVzcyxfSU5GT05BTUVfLElyaWRlc2NlbmNlSW5mb3MueilcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxTSEVFTl9URVhUVVJFLF9WQVJZSU5HTkFNRV8sU2hlZW4sX01BVFJJWE5BTUVfLHNoZWVuLF9JTkZPTkFNRV8sU2hlZW5JbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU0hFRU5fVEVYVFVSRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTaGVlblJvdWdobmVzcyxfTUFUUklYTkFNRV8sc2hlZW5Sb3VnaG5lc3MsX0lORk9OQU1FXyxTaGVlbkluZm9zLnopXG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sQU5JU09UUk9QSUNfVEVYVFVSRSxfVkFSWUlOR05BTUVfLEFuaXNvdHJvcHksX01BVFJJWE5BTUVfLGFuaXNvdHJvcHksX0lORk9OQU1FXyxBbmlzb3Ryb3B5SW5mb3MueClcbiNlbmRpZlxuI2lmZGVmIFNVQlNVUkZBQ0VcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RISUNLTkVTU0FORE1BU0tfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRoaWNrbmVzcyxfTUFUUklYTkFNRV8sdGhpY2tuZXNzLF9JTkZPTkFNRV8sVGhpY2tuZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1JFRlJBQ1RJT05JTlRFTlNJVFlfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFJlZnJhY3Rpb25JbnRlbnNpdHksX01BVFJJWE5BTUVfLHJlZnJhY3Rpb25JbnRlbnNpdHksX0lORk9OQU1FXyxSZWZyYWN0aW9uSW50ZW5zaXR5SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNTX1RSQU5TTFVDRU5DWUlOVEVOU0lUWV9URVhUVVJFLF9WQVJZSU5HTkFNRV8sVHJhbnNsdWNlbmN5SW50ZW5zaXR5LF9NQVRSSVhOQU1FXyx0cmFuc2x1Y2VuY3lJbnRlbnNpdHksX0lORk9OQU1FXyxUcmFuc2x1Y2VuY3lJbnRlbnNpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1NfVFJBTlNMVUNFTkNZQ09MT1JfVEVYVFVSRSxfVkFSWUlOR05BTUVfLFRyYW5zbHVjZW5jeUNvbG9yLF9NQVRSSVhOQU1FXyx0cmFuc2x1Y2VuY3lDb2xvcixfSU5GT05BTUVfLFRyYW5zbHVjZW5jeUNvbG9ySW5mb3MueClcbiNlbmRpZlxuI2luY2x1ZGU8YnVtcFZlcnRleD5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPHNoYWRvd3NWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHZlcnRleENvbG9yTWl4aW5nPlxuI2lmIGRlZmluZWQoUE9JTlRTSVpFKSAmJiAhZGVmaW5lZChXRUJHUFUpXG5nbF9Qb2ludFNpemU9cG9pbnRTaXplO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHBiclZlcnRleFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=