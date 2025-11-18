"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_openpbr_vertex_js"],{

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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapVertex.js":
/*!*********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrNormalMapVertex.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapVertex: () => (/* binding */ openpbrNormalMapVertex)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapVertex";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)
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
const openpbrNormalMapVertex = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapVertexDeclaration.js":
/*!********************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrNormalMapVertexDeclaration.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapVertexDeclaration: () => (/* binding */ openpbrNormalMapVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapVertexDeclaration";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)
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
const openpbrNormalMapVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrUboDeclaration.js":
/*!********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrUboDeclaration.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrUboDeclaration: () => (/* binding */ openpbrUboDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/Shaders/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/Shaders/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "openpbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionMicrosurfaceInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vReflectionFilteringInfo;vec3 vReflectionDominantDirection;vec3 vReflectionColor;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;float vBaseWeight;vec4 vBaseColor;float vBaseDiffuseRoughness;vec4 vReflectanceInfo;vec4 vSpecularColor;vec3 vSpecularAnisotropy;float vCoatWeight;vec3 vCoatColor;float vCoatRoughness;float vCoatRoughnessAnisotropy;float vCoatIor;float vCoatDarkening;float vFuzzWeight;vec3 vFuzzColor;float vFuzzRoughness;vec2 vGeometryCoatTangent;vec3 vEmissionColor;float vThinFilmWeight;vec2 vThinFilmThickness;float vThinFilmIor;vec2 vBaseWeightInfos;mat4 baseWeightMatrix;vec2 vBaseColorInfos;mat4 baseColorMatrix;vec2 vBaseDiffuseRoughnessInfos;mat4 baseDiffuseRoughnessMatrix;vec2 vBaseMetalnessInfos;mat4 baseMetalnessMatrix;vec2 vSpecularWeightInfos;mat4 specularWeightMatrix;vec2 vSpecularColorInfos;mat4 specularColorMatrix;vec2 vSpecularRoughnessInfos;mat4 specularRoughnessMatrix;vec2 vSpecularRoughnessAnisotropyInfos;mat4 specularRoughnessAnisotropyMatrix;vec2 vCoatWeightInfos;mat4 coatWeightMatrix;vec2 vCoatColorInfos;mat4 coatColorMatrix;vec2 vCoatRoughnessInfos;mat4 coatRoughnessMatrix;vec2 vCoatRoughnessAnisotropyInfos;mat4 coatRoughnessAnisotropyMatrix;vec2 vCoatDarkeningInfos;mat4 coatDarkeningMatrix;vec2 vFuzzWeightInfos;mat4 fuzzWeightMatrix;vec2 vFuzzColorInfos;mat4 fuzzColorMatrix;vec2 vFuzzRoughnessInfos;mat4 fuzzRoughnessMatrix;vec2 vGeometryNormalInfos;mat4 geometryNormalMatrix;vec2 vGeometryTangentInfos;mat4 geometryTangentMatrix;vec2 vGeometryCoatNormalInfos;mat4 geometryCoatNormalMatrix;vec2 vGeometryCoatTangentInfos;mat4 geometryCoatTangentMatrix;vec2 vGeometryOpacityInfos;mat4 geometryOpacityMatrix;vec2 vEmissionColorInfos;mat4 emissionColorMatrix;vec2 vThinFilmWeightInfos;mat4 thinFilmWeightMatrix;vec2 vThinFilmThicknessInfos;mat4 thinFilmThicknessMatrix;vec2 vAmbientOcclusionInfos;mat4 ambientOcclusionMatrix;
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
const openpbrUboDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/openpbrVertexDeclaration.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/openpbrVertexDeclaration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrVertexDeclaration: () => (/* binding */ openpbrVertexDeclaration)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _decalVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decalVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/decalVertexDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.


const name = "openpbrVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
#ifdef BASE_COLOR
uniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;
#endif
#ifdef BASE_WEIGHT
uniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;
#endif
uniform float vBaseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform mat4 baseDiffuseRoughnessMatrix;uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef AMBIENT_OCCLUSION
uniform vec2 vAmbientOcclusionInfos;uniform mat4 ambientOcclusionMatrix;
#endif
#ifdef EMISSION_COLOR
uniform vec2 vEmissionColorInfos;uniform mat4 emissionColorMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#ifdef BASE_METALNESS
uniform vec2 vBaseMetalnessInfos;uniform mat4 baseMetalnessMatrix;
#endif
#ifdef SPECULAR_WEIGHT
uniform vec2 vSpecularWeightInfos;uniform mat4 specularWeightMatrix;
#endif
#ifdef SPECULAR_COLOR
uniform vec2 vSpecularColorInfos;uniform mat4 specularColorMatrix;
#endif
#ifdef SPECULAR_ROUGHNESS
uniform vec2 vSpecularRoughnessInfos;uniform mat4 specularRoughnessMatrix;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
uniform vec2 vSpecularRoughnessAnisotropyInfos;uniform mat4 specularRoughnessAnisotropyMatrix;
#endif
#ifdef COAT_WEIGHT
uniform vec2 vCoatWeightInfos;uniform mat4 coatWeightMatrix;
#endif
#ifdef COAT_COLOR
uniform vec2 vCoatColorInfos;uniform mat4 coatColorMatrix;
#endif
#ifdef COAT_ROUGHNESS
uniform vec2 vCoatRoughnessInfos;uniform mat4 coatRoughnessMatrix;
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
uniform vec2 vCoatRoughnessAnisotropyInfos;uniform mat4 coatRoughnessAnisotropyMatrix;
#endif
#ifdef COAT_IOR
uniform vec2 vCoatIorInfos;uniform mat4 coatIorMatrix;
#endif
#ifdef COAT_DARKENING
uniform vec2 vCoatDarkeningInfos;uniform mat4 coatDarkeningMatrix;
#endif
#ifdef FUZZ_WEIGHT
uniform vec2 vFuzzWeightInfos;uniform mat4 fuzzWeightMatrix;
#endif
#ifdef FUZZ_COLOR
uniform vec2 vFuzzColorInfos;uniform mat4 fuzzColorMatrix;
#endif
#ifdef FUZZ_ROUGHNESS
uniform vec2 vFuzzRoughnessInfos;uniform mat4 fuzzRoughnessMatrix;
#endif
#ifdef GEOMETRY_NORMAL
uniform vec2 vGeometryNormalInfos;uniform mat4 geometryNormalMatrix;
#endif
#ifdef GEOMETRY_TANGENT
uniform vec2 vGeometryTangentInfos;uniform mat4 geometryTangentMatrix;
#endif
#ifdef GEOMETRY_COAT_NORMAL
uniform vec2 vGeometryCoatNormalInfos;uniform mat4 geometryCoatNormalMatrix;
#endif
#ifdef THIN_FILM_WEIGHT
uniform vec2 vThinFilmWeightInfos;uniform mat4 thinFilmWeightMatrix;
#endif
#ifdef THIN_FILM_THICKNESS
uniform vec2 vThinFilmThicknessInfos;uniform mat4 thinFilmThicknessMatrix;
#endif
#ifdef GEOMETRY_OPACITY
uniform mat4 geometryOpacityMatrix;uniform vec2 vGeometryOpacityInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
uniform vec4 cameraInfo;
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;
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
const openpbrVertexDeclaration = { name, shader };


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

/***/ "../core/dist/Shaders/openpbr.vertex.js":
/*!**********************************************!*\
  !*** ../core/dist/Shaders/openpbr.vertex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrVertexShader: () => (/* binding */ openpbrVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_openpbrVertexDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/openpbrVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/openpbrVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_openpbrUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/openpbrUboDeclaration */ "../core/dist/Shaders/ShadersInclude/openpbrUboDeclaration.js");
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
/* harmony import */ var _ShadersInclude_openpbrNormalMapVertexDeclaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapVertexDeclaration */ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapVertexDeclaration.js");
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
/* harmony import */ var _ShadersInclude_openpbrNormalMapVertex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapVertex */ "../core/dist/Shaders/ShadersInclude/openpbrNormalMapVertex.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/Shaders/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/Shaders/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/Shaders/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_vertexColorMixing__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ShadersInclude/vertexColorMixing */ "../core/dist/Shaders/ShadersInclude/vertexColorMixing.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/Shaders/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



































const name = "openpbrVertexShader";
const shader = `#define OPENPBR_VERTEX_SHADER
#define CUSTOM_VERTEX_EXTENSION
precision highp float;
#include<__decl__openpbrVertex>
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
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_METALNESS,_VARYINGNAME_,BaseMetalness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_WEIGHT,_VARYINGNAME_,SpecularWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_COLOR,_VARYINGNAME_,SpecularColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS,_VARYINGNAME_,SpecularRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,SpecularRoughnessAnisotropy)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_WEIGHT,_VARYINGNAME_,CoatWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_COLOR,_VARYINGNAME_,CoatColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening)
#include<samplerVertexDeclaration>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSION_COLOR,_VARYINGNAME_,EmissionColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,THIN_FILM_WEIGHT,_VARYINGNAME_,ThinFilmWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,THIN_FILM_THICKNESS,_VARYINGNAME_,ThinFilmThickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT_OCCLUSION,_VARYINGNAME_,AmbientOcclusion)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
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
#include<openpbrNormalMapVertexDeclaration>
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
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#if !defined(NATIVE) && !defined(WEBGPU)
bool bbb=any(isnan(position));if (bbb) { }
#endif
float NdotV=max(dot(vNormalW,viewDirectionW),0.0);vec3 roughNormal=mix(vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*vBaseDiffuseRoughness);vec3 reflectionVector=vec3(reflectionMatrix*vec4(roughNormal,0)).xyz;
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
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_MATRIXNAME_,baseColor,_INFONAME_,BaseColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_MATRIXNAME_,baseDiffuseRoughness,_INFONAME_,BaseDiffuseRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_METALNESS,_VARYINGNAME_,BaseMetalness,_MATRIXNAME_,baseMetalness,_INFONAME_,BaseMetalnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_WEIGHT,_VARYINGNAME_,SpecularWeight,_MATRIXNAME_,specularWeight,_INFONAME_,SpecularWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_COLOR,_VARYINGNAME_,SpecularColor,_MATRIXNAME_,specularColor,_INFONAME_,SpecularColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_ROUGHNESS,_VARYINGNAME_,SpecularRoughness,_MATRIXNAME_,specularRoughness,_INFONAME_,SpecularRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,SpecularRoughnessAnisotropy,_MATRIXNAME_,specularRoughnessAnisotropy,_INFONAME_,SpecularRoughnessAnisotropyInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_WEIGHT,_VARYINGNAME_,CoatWeight,_MATRIXNAME_,coatWeight,_INFONAME_,CoatWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_COLOR,_VARYINGNAME_,CoatColor,_MATRIXNAME_,coatColor,_INFONAME_,CoatColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness,_MATRIXNAME_,coatRoughness,_INFONAME_,CoatRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy,_MATRIXNAME_,coatRoughnessAnisotropy,_INFONAME_,CoatRoughnessAnisotropyInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening,_MATRIXNAME_,coatDarkening,_INFONAME_,CoatDarkeningInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight,_MATRIXNAME_,fuzzWeight,_INFONAME_,FuzzWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor,_MATRIXNAME_,fuzzColor,_INFONAME_,FuzzColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness,_MATRIXNAME_,fuzzRoughness,_INFONAME_,FuzzRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_MATRIXNAME_,geometryNormal,_INFONAME_,GeometryNormalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal,_MATRIXNAME_,geometryCoatNormal,_INFONAME_,GeometryCoatNormalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity,_MATRIXNAME_,geometryOpacity,_INFONAME_,GeometryOpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent,_MATRIXNAME_,geometryTangent,_INFONAME_,GeometryTangentInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSION_COLOR,_VARYINGNAME_,EmissionColor,_MATRIXNAME_,emissionColor,_INFONAME_,EmissionColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,THIN_FILM_WEIGHT,_VARYINGNAME_,ThinFilmWeight,_MATRIXNAME_,thinFilmWeight,_INFONAME_,ThinFilmWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,THIN_FILM_THICKNESS,_VARYINGNAME_,ThinFilmThickness,_MATRIXNAME_,thinFilmThickness,_INFONAME_,ThinFilmThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT_OCCLUSION,_VARYINGNAME_,AmbientOcclusion,_MATRIXNAME_,ambientOcclusion,_INFONAME_,AmbientOcclusionInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<openpbrNormalMapVertex>
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
const openpbrVertexShader = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfb3BlbnBicl92ZXJ0ZXhfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9oYXJtb25pY3NGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBWZXJ0ZXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvb3BlbnBiclVib0RlY2xhcmF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9vcGVucGJyVmVydGV4RGVjbGFyYXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL29wZW5wYnIudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJoYXJtb25pY3NGdW5jdGlvbnNcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVBcbiNpZmRlZiBTUEhFUklDQUxfSEFSTU9OSUNTXG52ZWMzIGNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UodmVjMyBub3JtYWwpIHtyZXR1cm4gdlNwaGVyaWNhbEwwMFxuKyB2U3BoZXJpY2FsTDFfMSoobm9ybWFsLnkpXG4rIHZTcGhlcmljYWxMMTAqKG5vcm1hbC56KVxuKyB2U3BoZXJpY2FsTDExKihub3JtYWwueClcbisgdlNwaGVyaWNhbEwyXzIqKG5vcm1hbC55Km5vcm1hbC54KVxuKyB2U3BoZXJpY2FsTDJfMSoobm9ybWFsLnkqbm9ybWFsLnopXG4rIHZTcGhlcmljYWxMMjAqKCgzLjAqbm9ybWFsLnoqbm9ybWFsLnopLTEuMClcbisgdlNwaGVyaWNhbEwyMSoobm9ybWFsLnoqbm9ybWFsLngpXG4rIHZTcGhlcmljYWxMMjIqKG5vcm1hbC54Km5vcm1hbC54LShub3JtYWwueSpub3JtYWwueSkpO31cbiNlbHNlXG52ZWMzIGNvbXB1dGVFbnZpcm9ubWVudElycmFkaWFuY2UodmVjMyBub3JtYWwpIHtmbG9hdCBOeD1ub3JtYWwueDtmbG9hdCBOeT1ub3JtYWwueTtmbG9hdCBOej1ub3JtYWwuejt2ZWMzIEMxPXZTcGhlcmljYWxaWi5yZ2I7dmVjMyBDeD12U3BoZXJpY2FsWC5yZ2I7dmVjMyBDeT12U3BoZXJpY2FsWS5yZ2I7dmVjMyBDej12U3BoZXJpY2FsWi5yZ2I7dmVjMyBDeHhfeno9dlNwaGVyaWNhbFhYX1paLnJnYjt2ZWMzIEN5eV96ej12U3BoZXJpY2FsWVlfWloucmdiO3ZlYzMgQ3h5PXZTcGhlcmljYWxYWS5yZ2I7dmVjMyBDeXo9dlNwaGVyaWNhbFlaLnJnYjt2ZWMzIEN6eD12U3BoZXJpY2FsWlgucmdiO3ZlYzMgYTE9Q3l5X3p6Kk55K0N5O3ZlYzMgYTI9Q3l6Kk56K2ExO3ZlYzMgYjE9Q3p4Kk56K0N4O3ZlYzMgYjI9Q3h5Kk55K2IxO3ZlYzMgYjM9Q3h4X3p6Kk54K2IyO3ZlYzMgdDE9Q3ogKk56K0MxO3ZlYzMgdDI9YTIgKk55K3QxO3ZlYzMgdDM9YjMgKk54K3QyO3JldHVybiB0Mzt9XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBoYXJtb25pY3NGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoR0VPTUVUUllfQ09BVF9OT1JNQUwpIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpIHx8IGRlZmluZWQoRlVaWilcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKVxudmVjMyB0Ym5Ob3JtYWw9bm9ybWFsaXplKG5vcm1hbFVwZGF0ZWQpO3ZlYzMgdGJuVGFuZ2VudD1ub3JtYWxpemUodGFuZ2VudFVwZGF0ZWQueHl6KTt2ZWMzIHRibkJpdGFuZ2VudD1jcm9zcyh0Ym5Ob3JtYWwsdGJuVGFuZ2VudCkqdGFuZ2VudFVwZGF0ZWQudzt2VEJOPW1hdDMoZmluYWxXb3JsZCkqbWF0Myh0Ym5UYW5nZW50LHRibkJpdGFuZ2VudCx0Ym5Ob3JtYWwpO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBick5vcm1hbE1hcFZlcnRleCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBick5vcm1hbE1hcFZlcnRleERlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKSB8fCBkZWZpbmVkKFBBUkFMTEFYKSB8fCBkZWZpbmVkKEdFT01FVFJZX0NPQVRfTk9STUFMKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTCkgXG52YXJ5aW5nIG1hdDMgdlRCTjtcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhEZWNsYXJhdGlvbiA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcbmltcG9ydCBcIi4vc2NlbmVVYm9EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9tZXNoVWJvRGVjbGFyYXRpb25cIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBiclVib0RlY2xhcmF0aW9uXCI7XG5jb25zdCBzaGFkZXIgPSBgbGF5b3V0KHN0ZDE0MCxjb2x1bW5fbWFqb3IpIHVuaWZvcm07dW5pZm9ybSBNYXRlcmlhbCB7dmVjMiB2VGFuZ2VudFNwYWNlUGFyYW1zO3ZlYzQgdkxpZ2h0aW5nSW50ZW5zaXR5O2Zsb2F0IHBvaW50U2l6ZTt2ZWMyIHZEZWJ1Z01vZGU7dmVjNCBjYW1lcmFJbmZvO3ZlYzIgdlJlZmxlY3Rpb25JbmZvczttYXQ0IHJlZmxlY3Rpb25NYXRyaXg7dmVjMyB2UmVmbGVjdGlvbk1pY3Jvc3VyZmFjZUluZm9zO3ZlYzMgdlJlZmxlY3Rpb25Qb3NpdGlvbjt2ZWMzIHZSZWZsZWN0aW9uU2l6ZTt2ZWMyIHZSZWZsZWN0aW9uRmlsdGVyaW5nSW5mbzt2ZWMzIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb247dmVjMyB2UmVmbGVjdGlvbkNvbG9yO3ZlYzMgdlNwaGVyaWNhbEwwMDt2ZWMzIHZTcGhlcmljYWxMMV8xO3ZlYzMgdlNwaGVyaWNhbEwxMDt2ZWMzIHZTcGhlcmljYWxMMTE7dmVjMyB2U3BoZXJpY2FsTDJfMjt2ZWMzIHZTcGhlcmljYWxMMl8xO3ZlYzMgdlNwaGVyaWNhbEwyMDt2ZWMzIHZTcGhlcmljYWxMMjE7dmVjMyB2U3BoZXJpY2FsTDIyO3ZlYzMgdlNwaGVyaWNhbFg7dmVjMyB2U3BoZXJpY2FsWTt2ZWMzIHZTcGhlcmljYWxaO3ZlYzMgdlNwaGVyaWNhbFhYX1paO3ZlYzMgdlNwaGVyaWNhbFlZX1paO3ZlYzMgdlNwaGVyaWNhbFpaO3ZlYzMgdlNwaGVyaWNhbFhZO3ZlYzMgdlNwaGVyaWNhbFlaO3ZlYzMgdlNwaGVyaWNhbFpYO2Zsb2F0IHZCYXNlV2VpZ2h0O3ZlYzQgdkJhc2VDb2xvcjtmbG9hdCB2QmFzZURpZmZ1c2VSb3VnaG5lc3M7dmVjNCB2UmVmbGVjdGFuY2VJbmZvO3ZlYzQgdlNwZWN1bGFyQ29sb3I7dmVjMyB2U3BlY3VsYXJBbmlzb3Ryb3B5O2Zsb2F0IHZDb2F0V2VpZ2h0O3ZlYzMgdkNvYXRDb2xvcjtmbG9hdCB2Q29hdFJvdWdobmVzcztmbG9hdCB2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHk7ZmxvYXQgdkNvYXRJb3I7ZmxvYXQgdkNvYXREYXJrZW5pbmc7ZmxvYXQgdkZ1enpXZWlnaHQ7dmVjMyB2RnV6ekNvbG9yO2Zsb2F0IHZGdXp6Um91Z2huZXNzO3ZlYzIgdkdlb21ldHJ5Q29hdFRhbmdlbnQ7dmVjMyB2RW1pc3Npb25Db2xvcjtmbG9hdCB2VGhpbkZpbG1XZWlnaHQ7dmVjMiB2VGhpbkZpbG1UaGlja25lc3M7ZmxvYXQgdlRoaW5GaWxtSW9yO3ZlYzIgdkJhc2VXZWlnaHRJbmZvczttYXQ0IGJhc2VXZWlnaHRNYXRyaXg7dmVjMiB2QmFzZUNvbG9ySW5mb3M7bWF0NCBiYXNlQ29sb3JNYXRyaXg7dmVjMiB2QmFzZURpZmZ1c2VSb3VnaG5lc3NJbmZvczttYXQ0IGJhc2VEaWZmdXNlUm91Z2huZXNzTWF0cml4O3ZlYzIgdkJhc2VNZXRhbG5lc3NJbmZvczttYXQ0IGJhc2VNZXRhbG5lc3NNYXRyaXg7dmVjMiB2U3BlY3VsYXJXZWlnaHRJbmZvczttYXQ0IHNwZWN1bGFyV2VpZ2h0TWF0cml4O3ZlYzIgdlNwZWN1bGFyQ29sb3JJbmZvczttYXQ0IHNwZWN1bGFyQ29sb3JNYXRyaXg7dmVjMiB2U3BlY3VsYXJSb3VnaG5lc3NJbmZvczttYXQ0IHNwZWN1bGFyUm91Z2huZXNzTWF0cml4O3ZlYzIgdlNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zO21hdDQgc3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5TWF0cml4O3ZlYzIgdkNvYXRXZWlnaHRJbmZvczttYXQ0IGNvYXRXZWlnaHRNYXRyaXg7dmVjMiB2Q29hdENvbG9ySW5mb3M7bWF0NCBjb2F0Q29sb3JNYXRyaXg7dmVjMiB2Q29hdFJvdWdobmVzc0luZm9zO21hdDQgY29hdFJvdWdobmVzc01hdHJpeDt2ZWMyIHZDb2F0Um91Z2huZXNzQW5pc290cm9weUluZm9zO21hdDQgY29hdFJvdWdobmVzc0FuaXNvdHJvcHlNYXRyaXg7dmVjMiB2Q29hdERhcmtlbmluZ0luZm9zO21hdDQgY29hdERhcmtlbmluZ01hdHJpeDt2ZWMyIHZGdXp6V2VpZ2h0SW5mb3M7bWF0NCBmdXp6V2VpZ2h0TWF0cml4O3ZlYzIgdkZ1enpDb2xvckluZm9zO21hdDQgZnV6ekNvbG9yTWF0cml4O3ZlYzIgdkZ1enpSb3VnaG5lc3NJbmZvczttYXQ0IGZ1enpSb3VnaG5lc3NNYXRyaXg7dmVjMiB2R2VvbWV0cnlOb3JtYWxJbmZvczttYXQ0IGdlb21ldHJ5Tm9ybWFsTWF0cml4O3ZlYzIgdkdlb21ldHJ5VGFuZ2VudEluZm9zO21hdDQgZ2VvbWV0cnlUYW5nZW50TWF0cml4O3ZlYzIgdkdlb21ldHJ5Q29hdE5vcm1hbEluZm9zO21hdDQgZ2VvbWV0cnlDb2F0Tm9ybWFsTWF0cml4O3ZlYzIgdkdlb21ldHJ5Q29hdFRhbmdlbnRJbmZvczttYXQ0IGdlb21ldHJ5Q29hdFRhbmdlbnRNYXRyaXg7dmVjMiB2R2VvbWV0cnlPcGFjaXR5SW5mb3M7bWF0NCBnZW9tZXRyeU9wYWNpdHlNYXRyaXg7dmVjMiB2RW1pc3Npb25Db2xvckluZm9zO21hdDQgZW1pc3Npb25Db2xvck1hdHJpeDt2ZWMyIHZUaGluRmlsbVdlaWdodEluZm9zO21hdDQgdGhpbkZpbG1XZWlnaHRNYXRyaXg7dmVjMiB2VGhpbkZpbG1UaGlja25lc3NJbmZvczttYXQ0IHRoaW5GaWxtVGhpY2tuZXNzTWF0cml4O3ZlYzIgdkFtYmllbnRPY2NsdXNpb25JbmZvczttYXQ0IGFtYmllbnRPY2NsdXNpb25NYXRyaXg7XG4jZGVmaW5lIEFERElUSU9OQUxfVUJPX0RFQ0xBUkFUSU9OXG59O1xuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBiclVib0RlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9kZWNhbFZlcnRleERlY2xhcmF0aW9uXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuY29uc3Qgc2hhZGVyID0gYHVuaWZvcm0gbWF0NCB2aWV3O3VuaWZvcm0gbWF0NCB2aWV3UHJvamVjdGlvbjt1bmlmb3JtIHZlYzQgdkV5ZVBvc2l0aW9uO1xuI2lmZGVmIE1VTFRJVklFV1xubWF0NCB2aWV3UHJvamVjdGlvblI7XG4jZW5kaWZcbiNpZmRlZiBCQVNFX0NPTE9SXG51bmlmb3JtIHZlYzIgdkJhc2VDb2xvckluZm9zO3VuaWZvcm0gbWF0NCBiYXNlQ29sb3JNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBCQVNFX1dFSUdIVFxudW5pZm9ybSBtYXQ0IGJhc2VXZWlnaHRNYXRyaXg7dW5pZm9ybSB2ZWMyIHZCYXNlV2VpZ2h0SW5mb3M7XG4jZW5kaWZcbnVuaWZvcm0gZmxvYXQgdkJhc2VEaWZmdXNlUm91Z2huZXNzO1xuI2lmZGVmIEJBU0VfRElGRlVTRV9ST1VHSE5FU1NcbnVuaWZvcm0gbWF0NCBiYXNlRGlmZnVzZVJvdWdobmVzc01hdHJpeDt1bmlmb3JtIHZlYzIgdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M7XG4jZW5kaWZcbiNpZmRlZiBBTUJJRU5UX09DQ0xVU0lPTlxudW5pZm9ybSB2ZWMyIHZBbWJpZW50T2NjbHVzaW9uSW5mb3M7dW5pZm9ybSBtYXQ0IGFtYmllbnRPY2NsdXNpb25NYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBFTUlTU0lPTl9DT0xPUlxudW5pZm9ybSB2ZWMyIHZFbWlzc2lvbkNvbG9ySW5mb3M7dW5pZm9ybSBtYXQ0IGVtaXNzaW9uQ29sb3JNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBMSUdIVE1BUFxudW5pZm9ybSB2ZWMyIHZMaWdodG1hcEluZm9zO3VuaWZvcm0gbWF0NCBsaWdodG1hcE1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIEJBU0VfTUVUQUxORVNTXG51bmlmb3JtIHZlYzIgdkJhc2VNZXRhbG5lc3NJbmZvczt1bmlmb3JtIG1hdDQgYmFzZU1ldGFsbmVzc01hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1dFSUdIVFxudW5pZm9ybSB2ZWMyIHZTcGVjdWxhcldlaWdodEluZm9zO3VuaWZvcm0gbWF0NCBzcGVjdWxhcldlaWdodE1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX0NPTE9SXG51bmlmb3JtIHZlYzIgdlNwZWN1bGFyQ29sb3JJbmZvczt1bmlmb3JtIG1hdDQgc3BlY3VsYXJDb2xvck1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1JPVUdITkVTU1xudW5pZm9ybSB2ZWMyIHZTcGVjdWxhclJvdWdobmVzc0luZm9zO3VuaWZvcm0gbWF0NCBzcGVjdWxhclJvdWdobmVzc01hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZXG51bmlmb3JtIHZlYzIgdlNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zO3VuaWZvcm0gbWF0NCBzcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHlNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX1dFSUdIVFxudW5pZm9ybSB2ZWMyIHZDb2F0V2VpZ2h0SW5mb3M7dW5pZm9ybSBtYXQ0IGNvYXRXZWlnaHRNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX0NPTE9SXG51bmlmb3JtIHZlYzIgdkNvYXRDb2xvckluZm9zO3VuaWZvcm0gbWF0NCBjb2F0Q29sb3JNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX1JPVUdITkVTU1xudW5pZm9ybSB2ZWMyIHZDb2F0Um91Z2huZXNzSW5mb3M7dW5pZm9ybSBtYXQ0IGNvYXRSb3VnaG5lc3NNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBDT0FUX1JPVUdITkVTU19BTklTT1RST1BZXG51bmlmb3JtIHZlYzIgdkNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5SW5mb3M7dW5pZm9ybSBtYXQ0IGNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9JT1JcbnVuaWZvcm0gdmVjMiB2Q29hdElvckluZm9zO3VuaWZvcm0gbWF0NCBjb2F0SW9yTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgQ09BVF9EQVJLRU5JTkdcbnVuaWZvcm0gdmVjMiB2Q29hdERhcmtlbmluZ0luZm9zO3VuaWZvcm0gbWF0NCBjb2F0RGFya2VuaW5nTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgRlVaWl9XRUlHSFRcbnVuaWZvcm0gdmVjMiB2RnV6eldlaWdodEluZm9zO3VuaWZvcm0gbWF0NCBmdXp6V2VpZ2h0TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgRlVaWl9DT0xPUlxudW5pZm9ybSB2ZWMyIHZGdXp6Q29sb3JJbmZvczt1bmlmb3JtIG1hdDQgZnV6ekNvbG9yTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgRlVaWl9ST1VHSE5FU1NcbnVuaWZvcm0gdmVjMiB2RnV6elJvdWdobmVzc0luZm9zO3VuaWZvcm0gbWF0NCBmdXp6Um91Z2huZXNzTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfTk9STUFMXG51bmlmb3JtIHZlYzIgdkdlb21ldHJ5Tm9ybWFsSW5mb3M7dW5pZm9ybSBtYXQ0IGdlb21ldHJ5Tm9ybWFsTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfVEFOR0VOVFxudW5pZm9ybSB2ZWMyIHZHZW9tZXRyeVRhbmdlbnRJbmZvczt1bmlmb3JtIG1hdDQgZ2VvbWV0cnlUYW5nZW50TWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfQ09BVF9OT1JNQUxcbnVuaWZvcm0gdmVjMiB2R2VvbWV0cnlDb2F0Tm9ybWFsSW5mb3M7dW5pZm9ybSBtYXQ0IGdlb21ldHJ5Q29hdE5vcm1hbE1hdHJpeDtcbiNlbmRpZlxuI2lmZGVmIFRISU5fRklMTV9XRUlHSFRcbnVuaWZvcm0gdmVjMiB2VGhpbkZpbG1XZWlnaHRJbmZvczt1bmlmb3JtIG1hdDQgdGhpbkZpbG1XZWlnaHRNYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBUSElOX0ZJTE1fVEhJQ0tORVNTXG51bmlmb3JtIHZlYzIgdlRoaW5GaWxtVGhpY2tuZXNzSW5mb3M7dW5pZm9ybSBtYXQ0IHRoaW5GaWxtVGhpY2tuZXNzTWF0cml4O1xuI2VuZGlmXG4jaWZkZWYgR0VPTUVUUllfT1BBQ0lUWVxudW5pZm9ybSBtYXQ0IGdlb21ldHJ5T3BhY2l0eU1hdHJpeDt1bmlmb3JtIHZlYzIgdkdlb21ldHJ5T3BhY2l0eUluZm9zO1xuI2VuZGlmXG4jaWZkZWYgUE9JTlRTSVpFXG51bmlmb3JtIGZsb2F0IHBvaW50U2l6ZTtcbiNlbmRpZlxudW5pZm9ybSB2ZWM0IGNhbWVyYUluZm87XG4jaWZkZWYgUkVGTEVDVElPTlxudW5pZm9ybSB2ZWMyIHZSZWZsZWN0aW9uSW5mb3M7dW5pZm9ybSBtYXQ0IHJlZmxlY3Rpb25NYXRyaXg7XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxuI2lmZGVmIFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQXG4jaWZkZWYgU1BIRVJJQ0FMX0hBUk1PTklDU1xudW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMDA7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMV8xO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDEwO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDExO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsTDJfMjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbEwyXzE7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMjA7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMjE7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxMMjI7XG4jZWxzZVxudW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxYO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxYWF9aWjt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFlZX1paO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWlo7dW5pZm9ybSB2ZWMzIHZTcGhlcmljYWxYWTt1bmlmb3JtIHZlYzMgdlNwaGVyaWNhbFlaO3VuaWZvcm0gdmVjMyB2U3BoZXJpY2FsWlg7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBERVRBSUxcbnVuaWZvcm0gdmVjNCB2RGV0YWlsSW5mb3M7dW5pZm9ybSBtYXQ0IGRldGFpbE1hdHJpeDtcbiNlbmRpZlxuI2luY2x1ZGU8ZGVjYWxWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNkZWZpbmUgQURESVRJT05BTF9WRVJURVhfREVDTEFSQVRJT05cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgb3BlbnBiclZlcnRleERlY2xhcmF0aW9uID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBiclVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3V2QXR0cmlidXRlRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wYnJCUkRGRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2JvbmVzRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25EZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2FtcGxlclZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2hhcm1vbmljc0Z1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyTm9ybWFsTWFwVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRWeEZyYWdtZW50RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbGlnaHRWeFVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL21vcnBoVGFyZ2V0c1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9pbnN0YW5jZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYmFrZWRWZXJ0ZXhBbmltYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvcHJlUGFzc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS91dlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvc2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvY2xpcFBsYW5lVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2ZvZ1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zaGFkb3dzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ZlcnRleENvbG9yTWl4aW5nXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2xvZ0RlcHRoVmVydGV4XCI7XG5cbmNvbnN0IG5hbWUgPSBcIm9wZW5wYnJWZXJ0ZXhTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjZGVmaW5lIE9QRU5QQlJfVkVSVEVYX1NIQURFUlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0VYVEVOU0lPTlxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuI2luY2x1ZGU8X19kZWNsX19vcGVucGJyVmVydGV4PlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX0JFR0lOXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcbiNpZmRlZiBOT1JNQUxcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbmF0dHJpYnV0ZSB2ZWM0IHRhbmdlbnQ7XG4jZW5kaWZcbiNpZmRlZiBVVjFcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xuI2VuZGlmXG4jaW5jbHVkZTx1dkF0dHJpYnV0ZURlY2xhcmF0aW9uPlsyLi43XVxuI2luY2x1ZGU8bWFpblVWVmFyeWluZ0RlY2xhcmF0aW9uPlsxLi43XVxuI2lmZGVmIFZFUlRFWENPTE9SXG5hdHRyaWJ1dGUgdmVjNCBjb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyQlJERkZ1bmN0aW9ucz5cbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX0NPTE9SLF9WQVJZSU5HTkFNRV8sQmFzZUNvbG9yKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9ESUZGVVNFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9NRVRBTE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlTWV0YWxuZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVJfV0VJR0hULF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9DT0xPUixfVkFSWUlOR05BTUVfLFNwZWN1bGFyQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTcGVjdWxhclJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9XRUlHSFQsX1ZBUllJTkdOQU1FXyxDb2F0V2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9DT0xPUixfVkFSWUlOR05BTUVfLENvYXRDb2xvcilcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQ29hdFJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFksX1ZBUllJTkdOQU1FXyxDb2F0Um91Z2huZXNzQW5pc290cm9weSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfREFSS0VOSU5HLF9WQVJZSU5HTkFNRV8sQ29hdERhcmtlbmluZylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfV0VJR0hULF9WQVJZSU5HTkFNRV8sRnV6eldlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfQ09MT1IsX1ZBUllJTkdOQU1FXyxGdXp6Q29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxGVVpaX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEZ1enpSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9OT1JNQUwsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeU5vcm1hbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX1RBTkdFTlQsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeVRhbmdlbnQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9DT0FUX05PUk1BTCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5Q29hdE5vcm1hbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX09QQUNJVFksX1ZBUllJTkdOQU1FXyxHZW9tZXRyeU9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lPTl9DT0xPUixfVkFSWUlOR05BTUVfLEVtaXNzaW9uQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxUSElOX0ZJTE1fV0VJR0hULF9WQVJZSU5HTkFNRV8sVGhpbkZpbG1XZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxUSElOX0ZJTE1fVEhJQ0tORVNTLF9WQVJZSU5HTkFNRV8sVGhpbkZpbG1UaGlja25lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5UX09DQ0xVU0lPTixfVkFSWUlOR05BTUVfLEFtYmllbnRPY2NsdXNpb24pXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsKVxudmFyeWluZyB2ZWMzIHZQb3NpdGlvblc7XG4jaWYgREVCVUdNT0RFPjBcbnZhcnlpbmcgdmVjNCB2Q2xpcFNwYWNlUG9zaXRpb247XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsVztcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxudmFyeWluZyB2ZWMzIHZFbnZpcm9ubWVudElycmFkaWFuY2U7XG4jaW5jbHVkZTxoYXJtb25pY3NGdW5jdGlvbnM+XG4jZW5kaWZcbiNlbmRpZlxuI2lmIGRlZmluZWQoVkVSVEVYQ09MT1IpIHx8IGRlZmluZWQoSU5TVEFOQ0VTQ09MT1IpICYmIGRlZmluZWQoSU5TVEFOQ0VTKVxudmFyeWluZyB2ZWM0IHZDb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8b3BlbnBick5vcm1hbE1hcFZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Y2xpcFBsYW5lVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxmb2dWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPF9fZGVjbF9fbGlnaHRWeEZyYWdtZW50PlswLi5tYXhTaW11bHRhbmVvdXNMaWdodHNdXG4jaW5jbHVkZTxtb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleERlY2xhcmF0aW9uPlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZhcnlpbmcgdmVjMyB2UG9zaXRpb25VVlc7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfRVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKSB8fCBkZWZpbmVkKFJFRkxFQ1RJT05NQVBfTUlSUk9SRURFUVVJUkVDVEFOR1VMQVJfRklYRUQpXG52YXJ5aW5nIHZlYzMgdkRpcmVjdGlvblc7XG4jZW5kaWZcbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxudmVjMyBwb3NpdGlvblVwZGF0ZWQ9cG9zaXRpb247XG4jaWZkZWYgTk9STUFMXG52ZWMzIG5vcm1hbFVwZGF0ZWQ9bm9ybWFsO1xuI2VuZGlmXG4jaWZkZWYgVEFOR0VOVFxudmVjNCB0YW5nZW50VXBkYXRlZD10YW5nZW50O1xuI2VuZGlmXG4jaWZkZWYgVVYxXG52ZWMyIHV2VXBkYXRlZD11djtcbiNlbmRpZlxuI2lmZGVmIFVWMlxudmVjMiB1djJVcGRhdGVkPXV2MjtcbiNlbmRpZlxuI2lmZGVmIFZFUlRFWENPTE9SXG52ZWM0IGNvbG9yVXBkYXRlZD1jb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZQb3NpdGlvblVWVz1wb3NpdGlvblVwZGF0ZWQ7XG4jZW5kaWZcbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfUE9TSVRJT05cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9VUERBVEVfTk9STUFMXG4jaW5jbHVkZTxpbnN0YW5jZXNWZXJ0ZXg+XG4jaWYgZGVmaW5lZChQUkVQQVNTKSAmJiAoKGRlZmluZWQoUFJFUEFTU19WRUxPQ0lUWSkgfHwgZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZX0xJTkVBUikpICYmICFkZWZpbmVkKEJPTkVTX1ZFTE9DSVRZX0VOQUJMRUQpXG52Q3VycmVudFBvc2l0aW9uPXZpZXdQcm9qZWN0aW9uKmZpbmFsV29ybGQqdmVjNChwb3NpdGlvblVwZGF0ZWQsMS4wKTt2UHJldmlvdXNQb3NpdGlvbj1wcmV2aW91c1ZpZXdQcm9qZWN0aW9uKmZpbmFsUHJldmlvdXNXb3JsZCp2ZWM0KHBvc2l0aW9uVXBkYXRlZCwxLjApO1xuI2VuZGlmXG4jaW5jbHVkZTxib25lc1ZlcnRleD5cbiNpbmNsdWRlPGJha2VkVmVydGV4QW5pbWF0aW9uPlxudmVjNCB3b3JsZFBvcz1maW5hbFdvcmxkKnZlYzQocG9zaXRpb25VcGRhdGVkLDEuMCk7dlBvc2l0aW9uVz12ZWMzKHdvcmxkUG9zKTtcbiNpZmRlZiBQUkVQQVNTXG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4PlxuI2VuZGlmXG4jaWZkZWYgTk9STUFMXG5tYXQzIG5vcm1hbFdvcmxkPW1hdDMoZmluYWxXb3JsZCk7XG4jaWYgZGVmaW5lZChJTlNUQU5DRVMpICYmIGRlZmluZWQoVEhJTl9JTlNUQU5DRVMpXG52Tm9ybWFsVz1ub3JtYWxVcGRhdGVkL3ZlYzMoZG90KG5vcm1hbFdvcmxkWzBdLG5vcm1hbFdvcmxkWzBdKSxkb3Qobm9ybWFsV29ybGRbMV0sbm9ybWFsV29ybGRbMV0pLGRvdChub3JtYWxXb3JsZFsyXSxub3JtYWxXb3JsZFsyXSkpO3ZOb3JtYWxXPW5vcm1hbGl6ZShub3JtYWxXb3JsZCp2Tm9ybWFsVyk7XG4jZWxzZVxuI2lmZGVmIE5PTlVOSUZPUk1TQ0FMSU5HXG5ub3JtYWxXb3JsZD10cmFuc3Bvc2VNYXQzKGludmVyc2VNYXQzKG5vcm1hbFdvcmxkKSk7XG4jZW5kaWZcbnZOb3JtYWxXPW5vcm1hbGl6ZShub3JtYWxXb3JsZCpub3JtYWxVcGRhdGVkKTtcbiNlbmRpZlxuI2lmIGRlZmluZWQoVVNFU1BIRVJJQ0FMRlJPTVJFRkxFQ1RJT05NQVApICYmIGRlZmluZWQoVVNFU1BIRVJJQ0FMSU5WRVJURVgpXG4jaWYgQkFTRV9ESUZGVVNFX01PREVMICE9IEJSREZfRElGRlVTRV9NT0RFTF9MQU1CRVJUICYmIEJBU0VfRElGRlVTRV9NT0RFTCAhPSBCUkRGX0RJRkZVU0VfTU9ERUxfTEVHQUNZXG52ZWMzIHZpZXdEaXJlY3Rpb25XPW5vcm1hbGl6ZSh2RXllUG9zaXRpb24ueHl6LXZQb3NpdGlvblcpO1xuI2lmICFkZWZpbmVkKE5BVElWRSkgJiYgIWRlZmluZWQoV0VCR1BVKVxuYm9vbCBiYmI9YW55KGlzbmFuKHBvc2l0aW9uKSk7aWYgKGJiYikgeyB9XG4jZW5kaWZcbmZsb2F0IE5kb3RWPW1heChkb3Qodk5vcm1hbFcsdmlld0RpcmVjdGlvblcpLDAuMCk7dmVjMyByb3VnaE5vcm1hbD1taXgodk5vcm1hbFcsdmlld0RpcmVjdGlvblcsKDAuNSooMS4wLU5kb3RWKSkqdkJhc2VEaWZmdXNlUm91Z2huZXNzKTt2ZWMzIHJlZmxlY3Rpb25WZWN0b3I9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQocm91Z2hOb3JtYWwsMCkpLnh5ejtcbiNlbHNlXG52ZWMzIHJlZmxlY3Rpb25WZWN0b3I9dmVjMyhyZWZsZWN0aW9uTWF0cml4KnZlYzQodk5vcm1hbFcsMCkpLnh5ejtcbiNlbmRpZlxuI2lmZGVmIFJFRkxFQ1RJT05NQVBfT1BQT1NJVEVaXG5yZWZsZWN0aW9uVmVjdG9yLnoqPS0xLjA7XG4jZW5kaWZcbnZFbnZpcm9ubWVudElycmFkaWFuY2U9Y29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZShyZWZsZWN0aW9uVmVjdG9yKTtcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1dPUkxEUE9TXG4jaWZkZWYgTVVMVElWSUVXXG5pZiAoZ2xfVmlld0lEX09WUj09MHUpIHtnbF9Qb3NpdGlvbj12aWV3UHJvamVjdGlvbip3b3JsZFBvczt9IGVsc2Uge2dsX1Bvc2l0aW9uPXZpZXdQcm9qZWN0aW9uUip3b3JsZFBvczt9XG4jZWxzZVxuZ2xfUG9zaXRpb249dmlld1Byb2plY3Rpb24qd29ybGRQb3M7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxudkNsaXBTcGFjZVBvc2l0aW9uPWdsX1Bvc2l0aW9uO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudkRpcmVjdGlvblc9bm9ybWFsaXplKHZlYzMoZmluYWxXb3JsZCp2ZWM0KHBvc2l0aW9uVXBkYXRlZCwwLjApKSk7XG4jZW5kaWZcbiNpZm5kZWYgVVYxXG52ZWMyIHV2VXBkYXRlZD12ZWMyKDAuLDAuKTtcbiNlbmRpZlxuI2lmbmRlZiBVVjJcbnZlYzIgdXYyVXBkYXRlZD12ZWMyKDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjFcbnZNYWluVVYxPXV2VXBkYXRlZDtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjJcbnZNYWluVVYyPXV2MlVwZGF0ZWQ7XG4jZW5kaWZcbiNpbmNsdWRlPHV2VmFyaWFibGVEZWNsYXJhdGlvbj5bMy4uN11cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfQ09MT1IsX1ZBUllJTkdOQU1FXyxCYXNlQ29sb3IsX01BVFJJWE5BTUVfLGJhc2VDb2xvcixfSU5GT05BTUVfLEJhc2VDb2xvckluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX1dFSUdIVCxfVkFSWUlOR05BTUVfLEJhc2VXZWlnaHQsX01BVFJJWE5BTUVfLGJhc2VXZWlnaHQsX0lORk9OQU1FXyxCYXNlV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcyxfTUFUUklYTkFNRV8sYmFzZURpZmZ1c2VSb3VnaG5lc3MsX0lORk9OQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX01FVEFMTkVTUyxfVkFSWUlOR05BTUVfLEJhc2VNZXRhbG5lc3MsX01BVFJJWE5BTUVfLGJhc2VNZXRhbG5lc3MsX0lORk9OQU1FXyxCYXNlTWV0YWxuZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1dFSUdIVCxfVkFSWUlOR05BTUVfLFNwZWN1bGFyV2VpZ2h0LF9NQVRSSVhOQU1FXyxzcGVjdWxhcldlaWdodCxfSU5GT05BTUVfLFNwZWN1bGFyV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX0NPTE9SLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJDb2xvcixfTUFUUklYTkFNRV8sc3BlY3VsYXJDb2xvcixfSU5GT05BTUVfLFNwZWN1bGFyQ29sb3JJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVJfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3MsX01BVFJJWE5BTUVfLHNwZWN1bGFyUm91Z2huZXNzLF9JTkZPTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVJfUk9VR0hORVNTX0FOSVNPVFJPUFksX1ZBUllJTkdOQU1FXyxTcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHksX01BVFJJWE5BTUVfLHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSxfSU5GT05BTUVfLFNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1dFSUdIVCxfVkFSWUlOR05BTUVfLENvYXRXZWlnaHQsX01BVFJJWE5BTUVfLGNvYXRXZWlnaHQsX0lORk9OQU1FXyxDb2F0V2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfQ09MT1IsX1ZBUllJTkdOQU1FXyxDb2F0Q29sb3IsX01BVFJJWE5BTUVfLGNvYXRDb2xvcixfSU5GT05BTUVfLENvYXRDb2xvckluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLENvYXRSb3VnaG5lc3MsX01BVFJJWE5BTUVfLGNvYXRSb3VnaG5lc3MsX0lORk9OQU1FXyxDb2F0Um91Z2huZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFksX1ZBUllJTkdOQU1FXyxDb2F0Um91Z2huZXNzQW5pc290cm9weSxfTUFUUklYTkFNRV8sY29hdFJvdWdobmVzc0FuaXNvdHJvcHksX0lORk9OQU1FXyxDb2F0Um91Z2huZXNzQW5pc290cm9weUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX0RBUktFTklORyxfVkFSWUlOR05BTUVfLENvYXREYXJrZW5pbmcsX01BVFJJWE5BTUVfLGNvYXREYXJrZW5pbmcsX0lORk9OQU1FXyxDb2F0RGFya2VuaW5nSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfV0VJR0hULF9WQVJZSU5HTkFNRV8sRnV6eldlaWdodCxfTUFUUklYTkFNRV8sZnV6eldlaWdodCxfSU5GT05BTUVfLEZ1enpXZWlnaHRJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sRlVaWl9DT0xPUixfVkFSWUlOR05BTUVfLEZ1enpDb2xvcixfTUFUUklYTkFNRV8sZnV6ekNvbG9yLF9JTkZPTkFNRV8sRnV6ekNvbG9ySW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sRnV6elJvdWdobmVzcyxfTUFUUklYTkFNRV8sZnV6elJvdWdobmVzcyxfSU5GT05BTUVfLEZ1enpSb3VnaG5lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfTk9STUFMLF9WQVJZSU5HTkFNRV8sR2VvbWV0cnlOb3JtYWwsX01BVFJJWE5BTUVfLGdlb21ldHJ5Tm9ybWFsLF9JTkZPTkFNRV8sR2VvbWV0cnlOb3JtYWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfQ09BVF9OT1JNQUwsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeUNvYXROb3JtYWwsX01BVFJJWE5BTUVfLGdlb21ldHJ5Q29hdE5vcm1hbCxfSU5GT05BTUVfLEdlb21ldHJ5Q29hdE5vcm1hbEluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9PUEFDSVRZLF9WQVJZSU5HTkFNRV8sR2VvbWV0cnlPcGFjaXR5LF9NQVRSSVhOQU1FXyxnZW9tZXRyeU9wYWNpdHksX0lORk9OQU1FXyxHZW9tZXRyeU9wYWNpdHlJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfVEFOR0VOVCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5VGFuZ2VudCxfTUFUUklYTkFNRV8sZ2VvbWV0cnlUYW5nZW50LF9JTkZPTkFNRV8sR2VvbWV0cnlUYW5nZW50SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSU9OX0NPTE9SLF9WQVJZSU5HTkFNRV8sRW1pc3Npb25Db2xvcixfTUFUUklYTkFNRV8sZW1pc3Npb25Db2xvcixfSU5GT05BTUVfLEVtaXNzaW9uQ29sb3JJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sVEhJTl9GSUxNX1dFSUdIVCxfVkFSWUlOR05BTUVfLFRoaW5GaWxtV2VpZ2h0LF9NQVRSSVhOQU1FXyx0aGluRmlsbVdlaWdodCxfSU5GT05BTUVfLFRoaW5GaWxtV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFRISU5fRklMTV9USElDS05FU1MsX1ZBUllJTkdOQU1FXyxUaGluRmlsbVRoaWNrbmVzcyxfTUFUUklYTkFNRV8sdGhpbkZpbG1UaGlja25lc3MsX0lORk9OQU1FXyxUaGluRmlsbVRoaWNrbmVzc0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5UX09DQ0xVU0lPTixfVkFSWUlOR05BTUVfLEFtYmllbnRPY2NsdXNpb24sX01BVFJJWE5BTUVfLGFtYmllbnRPY2NsdXNpb24sX0lORk9OQU1FXyxBbWJpZW50T2NjbHVzaW9uSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLERFQ0FMLF9WQVJZSU5HTkFNRV8sRGVjYWwsX01BVFJJWE5BTUVfLGRlY2FsLF9JTkZPTkFNRV8sRGVjYWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9NQVRSSVhOQU1FXyxkZXRhaWwsX0lORk9OQU1FXyxEZXRhaWxJbmZvcy54KVxuI2luY2x1ZGU8b3BlbnBick5vcm1hbE1hcFZlcnRleD5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPHNoYWRvd3NWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHZlcnRleENvbG9yTWl4aW5nPlxuI2lmIGRlZmluZWQoUE9JTlRTSVpFKSAmJiAhZGVmaW5lZChXRUJHUFUpXG5nbF9Qb2ludFNpemU9cG9pbnRTaXplO1xuI2VuZGlmXG4jaW5jbHVkZTxsb2dEZXB0aFZlcnRleD5cbiNkZWZpbmUgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORFxufVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJWZXJ0ZXhTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9