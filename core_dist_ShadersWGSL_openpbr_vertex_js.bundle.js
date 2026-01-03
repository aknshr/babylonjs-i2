"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_openpbr_vertex_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapVertex.js":
/*!*************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapVertex.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapVertexWGSL: () => (/* binding */ openpbrNormalMapVertexWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapVertex";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL)
var tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrNormalMapVertexWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapVertexDeclaration.js":
/*!************************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapVertexDeclaration.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrNormalMapVertexDeclarationWGSL: () => (/* binding */ openpbrNormalMapVertexDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "openpbrNormalMapVertexDeclaration";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrNormalMapVertexDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js":
/*!************************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrUboDeclarationWGSL: () => (/* binding */ openpbrUboDeclarationWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _sceneUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sceneUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js");
/* harmony import */ var _meshUboDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/meshUboDeclaration.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.



const name = "openpbrUboDeclaration";
const shader = `uniform vTangentSpaceParams: vec2f;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vDebugMode: vec2f;uniform cameraInfo: vec4f;uniform vReflectionInfos: vec2f;uniform reflectionMatrix: mat4x4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vReflectionFilteringInfo: vec2f;uniform vReflectionDominantDirection: vec3f;uniform vReflectionColor: vec3f;uniform vSphericalL00: vec3f;uniform vSphericalL1_1: vec3f;uniform vSphericalL10: vec3f;uniform vSphericalL11: vec3f;uniform vSphericalL2_2: vec3f;uniform vSphericalL2_1: vec3f;uniform vSphericalL20: vec3f;uniform vSphericalL21: vec3f;uniform vSphericalL22: vec3f;uniform vSphericalX: vec3f;uniform vSphericalY: vec3f;uniform vSphericalZ: vec3f;uniform vSphericalXX_ZZ: vec3f;uniform vSphericalYY_ZZ: vec3f;uniform vSphericalZZ: vec3f;uniform vSphericalXY: vec3f;uniform vSphericalYZ: vec3f;uniform vSphericalZX: vec3f;uniform vBaseWeight: f32;uniform vBaseColor: vec4f;uniform vBaseDiffuseRoughness: f32;uniform vReflectanceInfo: vec4f;uniform vSpecularColor: vec4f;uniform vSpecularAnisotropy: vec3f;uniform vCoatWeight: f32;uniform vCoatColor: vec3f;uniform vCoatRoughness: f32;uniform vCoatRoughnessAnisotropy: f32;uniform vCoatIor: f32;uniform vCoatDarkening : f32;uniform vFuzzWeight: f32;uniform vFuzzColor: vec3f;uniform vFuzzRoughness: f32;uniform vGeometryCoatTangent: vec2f;uniform vEmissionColor: vec3f;uniform vThinFilmWeight: f32;uniform vThinFilmThickness: vec2f;uniform vThinFilmIor: f32;uniform vBaseWeightInfos: vec2f;uniform baseWeightMatrix: mat4x4f;uniform vBaseColorInfos: vec2f;uniform baseColorMatrix: mat4x4f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform baseDiffuseRoughnessMatrix: mat4x4f;uniform vBaseMetalnessInfos: vec2f;uniform baseMetalnessMatrix: mat4x4f;uniform vSpecularWeightInfos: vec2f;uniform specularWeightMatrix: mat4x4f;uniform vSpecularColorInfos: vec2f;uniform specularColorMatrix: mat4x4f;uniform vSpecularRoughnessInfos: vec2f;uniform specularRoughnessMatrix: mat4x4f;uniform vSpecularRoughnessAnisotropyInfos: vec2f;uniform specularRoughnessAnisotropyMatrix: mat4x4f;uniform vCoatWeightInfos: vec2f;uniform coatWeightMatrix: mat4x4f;uniform vCoatColorInfos: vec2f;uniform coatColorMatrix: mat4x4f;uniform vCoatRoughnessInfos: vec2f;uniform coatRoughnessMatrix: mat4x4f;uniform vCoatRoughnessAnisotropyInfos: vec2f;uniform coatRoughnessAnisotropyMatrix: mat4x4f;uniform vCoatDarkeningInfos : vec2f;uniform coatDarkeningMatrix : mat4x4f;uniform vFuzzWeightInfos: vec2f;uniform fuzzWeightMatrix: mat4x4f;uniform vFuzzColorInfos: vec2f;uniform fuzzColorMatrix: mat4x4f;uniform vFuzzRoughnessInfos: vec2f;uniform fuzzRoughnessMatrix: mat4x4f;uniform vGeometryNormalInfos: vec2f;uniform geometryNormalMatrix: mat4x4f;uniform vGeometryTangentInfos: vec2f;uniform geometryTangentMatrix: mat4x4f;uniform vGeometryCoatNormalInfos: vec2f;uniform geometryCoatNormalMatrix: mat4x4f;uniform vGeometryCoatTangentInfos: vec2f;uniform geometryCoatTangentMatrix: mat4x4f;uniform vGeometryOpacityInfos: vec2f;uniform geometryOpacityMatrix: mat4x4f;uniform vEmissionInfos: vec2f;uniform emissionMatrix: mat4x4f;uniform vThinFilmWeightInfos: vec2f;uniform thinFilmWeightMatrix: mat4x4f;uniform vThinFilmThicknessInfos: vec2f;uniform thinFilmThicknessMatrix: mat4x4f;uniform vAmbientOcclusionInfos: vec2f;uniform ambientOcclusionMatrix: mat4x4f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrUboDeclarationWGSL = { name, shader };


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

/***/ "../core/dist/ShadersWGSL/openpbr.vertex.js":
/*!**************************************************!*\
  !*** ../core/dist/ShadersWGSL/openpbr.vertex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openpbrVertexShaderWGSL: () => (/* binding */ openpbrVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* harmony import */ var _ShadersInclude_openpbrUboDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShadersInclude/openpbrUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js");
/* harmony import */ var _ShadersInclude_uvAttributeDeclaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShadersInclude/uvAttributeDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js");
/* harmony import */ var _ShadersInclude_mainUVVaryingDeclaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadersInclude/mainUVVaryingDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js");
/* harmony import */ var _ShadersInclude_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShadersInclude/helperFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/helperFunctions.js");
/* harmony import */ var _ShadersInclude_pbrBRDFFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ShadersInclude/pbrBRDFFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js");
/* harmony import */ var _ShadersInclude_bonesDeclaration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShadersInclude/bonesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bonesDeclaration.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimationDeclaration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimationDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js");
/* harmony import */ var _ShadersInclude_instancesDeclaration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShadersInclude/instancesDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/instancesDeclaration.js");
/* harmony import */ var _ShadersInclude_prePassVertexDeclaration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShadersInclude/prePassVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexDeclaration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_harmonicsFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ShadersInclude/harmonicsFunctions */ "../core/dist/ShadersWGSL/ShadersInclude/harmonicsFunctions.js");
/* harmony import */ var _ShadersInclude_openpbrNormalMapVertexDeclaration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertexDeclaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_fogVertexDeclaration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ShadersInclude/fogVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_lightVxUboDeclaration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ShadersInclude/lightVxUboDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobalDeclaration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobalDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexDeclaration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js");
/* harmony import */ var _ShadersInclude_logDepthDeclaration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShadersInclude/logDepthDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthDeclaration.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertexGlobal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertexGlobal */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js");
/* harmony import */ var _ShadersInclude_morphTargetsVertex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ShadersInclude/morphTargetsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/morphTargetsVertex.js");
/* harmony import */ var _ShadersInclude_instancesVertex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ShadersInclude/instancesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/instancesVertex.js");
/* harmony import */ var _ShadersInclude_bonesVertex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ShadersInclude/bonesVertex */ "../core/dist/ShadersWGSL/ShadersInclude/bonesVertex.js");
/* harmony import */ var _ShadersInclude_bakedVertexAnimation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShadersInclude/bakedVertexAnimation */ "../core/dist/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js");
/* harmony import */ var _ShadersInclude_prePassVertex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShadersInclude/prePassVertex */ "../core/dist/ShadersWGSL/ShadersInclude/prePassVertex.js");
/* harmony import */ var _ShadersInclude_uvVariableDeclaration__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ShadersInclude/uvVariableDeclaration */ "../core/dist/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js");
/* harmony import */ var _ShadersInclude_samplerVertexImplementation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ShadersInclude/samplerVertexImplementation */ "../core/dist/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js");
/* harmony import */ var _ShadersInclude_openpbrNormalMapVertex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ShadersInclude/openpbrNormalMapVertex */ "../core/dist/ShadersWGSL/ShadersInclude/openpbrNormalMapVertex.js");
/* harmony import */ var _ShadersInclude_clipPlaneVertex__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ShadersInclude/clipPlaneVertex */ "../core/dist/ShadersWGSL/ShadersInclude/clipPlaneVertex.js");
/* harmony import */ var _ShadersInclude_fogVertex__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ShadersInclude/fogVertex */ "../core/dist/ShadersWGSL/ShadersInclude/fogVertex.js");
/* harmony import */ var _ShadersInclude_shadowsVertex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ShadersInclude/shadowsVertex */ "../core/dist/ShadersWGSL/ShadersInclude/shadowsVertex.js");
/* harmony import */ var _ShadersInclude_vertexColorMixing__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ShadersInclude/vertexColorMixing */ "../core/dist/ShadersWGSL/ShadersInclude/vertexColorMixing.js");
/* harmony import */ var _ShadersInclude_logDepthVertex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ShadersInclude/logDepthVertex */ "../core/dist/ShadersWGSL/ShadersInclude/logDepthVertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

































const name = "openpbrVertexShader";
const shader = `#define OPENPBR_VERTEX_SHADER
#include<openpbrUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
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
varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<openpbrNormalMapVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-vertexOutputs.vPositionW);var NdotV: f32=max(dot(vertexOutputs.vNormalW,viewDirectionW),0.0);var roughNormal: vec3f=mix(vertexOutputs.vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*uniforms.vBaseDiffuseRoughness);var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(roughNormal,0)).xyz;
#else
var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vertexOutputs.vClipSpacePosition=vertexOutputs.position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);
#endif
#ifndef UV1
var uvUpdated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
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
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_COLOR,_VARYNAME_,CoatColor,_MATRIXNAME_,coatColor,_INFONAME_,CoatColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness,_MATRIXNAME_,coatRoughness,_INFONAME_,CoatRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy,_MATRIXNAME_,coatRoughnessAnisotropy,_INFONAME_,CoatRoughnessAnisotropyInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening,_MATRIXNAME_,coatDarkening,_INFONAME_,CoatDarkeningInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight,_MATRIXNAME_,fuzzWeight,_INFONAME_,FuzzWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor,_MATRIXNAME_,fuzzColor,_INFONAME_,FuzzColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness,_MATRIXNAME_,fuzzRoughness,_INFONAME_,FuzzRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_MATRIXNAME_,geometryNormal,_INFONAME_,GeometryNormalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent,_MATRIXNAME_,geometryTangent,_INFONAME_,GeometryTangentInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal,_MATRIXNAME_,geometryCoatNormal,_INFONAME_,GeometryCoatNormalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity,_MATRIXNAME_,geometryOpacity,_INFONAME_,GeometryOpacityInfos.x)
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
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
const openpbrVertexShaderWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX29wZW5wYnJfdmVydGV4X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVyc1dHU0wvU2hhZGVyc0luY2x1ZGUvb3BlbnBick5vcm1hbE1hcFZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhEZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL29wZW5wYnJVYm9EZWNsYXJhdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML29wZW5wYnIudmVydGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyTm9ybWFsTWFwVmVydGV4XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmIGRlZmluZWQoR0VPTUVUUllfTk9STUFMKSB8fCBkZWZpbmVkKFBBUkFMTEFYKSB8fCBkZWZpbmVkKENMRUFSQ09BVF9CVU1QKSB8fCBkZWZpbmVkKEFOSVNPVFJPUElDKSB8fCBkZWZpbmVkKEZVWlopXG4jaWYgZGVmaW5lZChUQU5HRU5UKSAmJiBkZWZpbmVkKE5PUk1BTClcbnZhciB0Ym5Ob3JtYWw6IHZlYzNmPW5vcm1hbGl6ZShub3JtYWxVcGRhdGVkKTt2YXIgdGJuVGFuZ2VudDogdmVjM2Y9bm9ybWFsaXplKHRhbmdlbnRVcGRhdGVkLnh5eik7dmFyIHRibkJpdGFuZ2VudDogdmVjM2Y9Y3Jvc3ModGJuTm9ybWFsLHRiblRhbmdlbnQpKnRhbmdlbnRVcGRhdGVkLnc7dmFyIG1hdFRlbXA9IG1hdDN4M2YoZmluYWxXb3JsZFswXS54eXosZmluYWxXb3JsZFsxXS54eXosZmluYWxXb3JsZFsyXS54eXopKiBtYXQzeDNmKHRiblRhbmdlbnQsdGJuQml0YW5nZW50LHRibk5vcm1hbCk7dmVydGV4T3V0cHV0cy52VEJOMD1tYXRUZW1wWzBdO3ZlcnRleE91dHB1dHMudlRCTjE9bWF0VGVtcFsxXTt2ZXJ0ZXhPdXRwdXRzLnZUQk4yPW1hdFRlbXBbMl07XG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVXR1NMW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG9wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhXR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyTm9ybWFsTWFwVmVydGV4RGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGAjaWYgZGVmaW5lZChHRU9NRVRSWV9OT1JNQUwpIHx8IGRlZmluZWQoUEFSQUxMQVgpIHx8IGRlZmluZWQoQ0xFQVJDT0FUX0JVTVApIHx8IGRlZmluZWQoQU5JU09UUk9QSUMpIHx8IGRlZmluZWQoRlVaWilcbiNpZiBkZWZpbmVkKFRBTkdFTlQpICYmIGRlZmluZWQoTk9STUFMKSBcbnZhcnlpbmcgdlRCTjA6IHZlYzNmO3ZhcnlpbmcgdlRCTjE6IHZlYzNmO3ZhcnlpbmcgdlRCTjI6IHZlYzNmO1xuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyTm9ybWFsTWFwVmVydGV4RGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9zY2VuZVVib0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL21lc2hVYm9EZWNsYXJhdGlvblwiO1xuXG5jb25zdCBuYW1lID0gXCJvcGVucGJyVWJvRGVjbGFyYXRpb25cIjtcbmNvbnN0IHNoYWRlciA9IGB1bmlmb3JtIHZUYW5nZW50U3BhY2VQYXJhbXM6IHZlYzJmO3VuaWZvcm0gdkxpZ2h0aW5nSW50ZW5zaXR5OiB2ZWM0Zjt1bmlmb3JtIHBvaW50U2l6ZTogZjMyO3VuaWZvcm0gdkRlYnVnTW9kZTogdmVjMmY7dW5pZm9ybSBjYW1lcmFJbmZvOiB2ZWM0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gcmVmbGVjdGlvbk1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZSZWZsZWN0aW9uTWljcm9zdXJmYWNlSW5mb3M6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Qb3NpdGlvbjogdmVjM2Y7dW5pZm9ybSB2UmVmbGVjdGlvblNpemU6IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25GaWx0ZXJpbmdJbmZvOiB2ZWMyZjt1bmlmb3JtIHZSZWZsZWN0aW9uRG9taW5hbnREaXJlY3Rpb246IHZlYzNmO3VuaWZvcm0gdlJlZmxlY3Rpb25Db2xvcjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDAwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMV8xOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMTA6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwxMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDJfMTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsTDIwOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxMMjE6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbEwyMjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWDogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWTogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFhfWlo6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlZX1paOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWjogdmVjM2Y7dW5pZm9ybSB2U3BoZXJpY2FsWFk6IHZlYzNmO3VuaWZvcm0gdlNwaGVyaWNhbFlaOiB2ZWMzZjt1bmlmb3JtIHZTcGhlcmljYWxaWDogdmVjM2Y7dW5pZm9ybSB2QmFzZVdlaWdodDogZjMyO3VuaWZvcm0gdkJhc2VDb2xvcjogdmVjNGY7dW5pZm9ybSB2QmFzZURpZmZ1c2VSb3VnaG5lc3M6IGYzMjt1bmlmb3JtIHZSZWZsZWN0YW5jZUluZm86IHZlYzRmO3VuaWZvcm0gdlNwZWN1bGFyQ29sb3I6IHZlYzRmO3VuaWZvcm0gdlNwZWN1bGFyQW5pc290cm9weTogdmVjM2Y7dW5pZm9ybSB2Q29hdFdlaWdodDogZjMyO3VuaWZvcm0gdkNvYXRDb2xvcjogdmVjM2Y7dW5pZm9ybSB2Q29hdFJvdWdobmVzczogZjMyO3VuaWZvcm0gdkNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5OiBmMzI7dW5pZm9ybSB2Q29hdElvcjogZjMyO3VuaWZvcm0gdkNvYXREYXJrZW5pbmcgOiBmMzI7dW5pZm9ybSB2RnV6eldlaWdodDogZjMyO3VuaWZvcm0gdkZ1enpDb2xvcjogdmVjM2Y7dW5pZm9ybSB2RnV6elJvdWdobmVzczogZjMyO3VuaWZvcm0gdkdlb21ldHJ5Q29hdFRhbmdlbnQ6IHZlYzJmO3VuaWZvcm0gdkVtaXNzaW9uQ29sb3I6IHZlYzNmO3VuaWZvcm0gdlRoaW5GaWxtV2VpZ2h0OiBmMzI7dW5pZm9ybSB2VGhpbkZpbG1UaGlja25lc3M6IHZlYzJmO3VuaWZvcm0gdlRoaW5GaWxtSW9yOiBmMzI7dW5pZm9ybSB2QmFzZVdlaWdodEluZm9zOiB2ZWMyZjt1bmlmb3JtIGJhc2VXZWlnaHRNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2QmFzZUNvbG9ySW5mb3M6IHZlYzJmO3VuaWZvcm0gYmFzZUNvbG9yTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkJhc2VEaWZmdXNlUm91Z2huZXNzSW5mb3M6IHZlYzJmO3VuaWZvcm0gYmFzZURpZmZ1c2VSb3VnaG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2QmFzZU1ldGFsbmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIGJhc2VNZXRhbG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2U3BlY3VsYXJXZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSBzcGVjdWxhcldlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZTcGVjdWxhckNvbG9ySW5mb3M6IHZlYzJmO3VuaWZvcm0gc3BlY3VsYXJDb2xvck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZTcGVjdWxhclJvdWdobmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIHNwZWN1bGFyUm91Z2huZXNzTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdlNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zOiB2ZWMyZjt1bmlmb3JtIHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZDb2F0V2VpZ2h0SW5mb3M6IHZlYzJmO3VuaWZvcm0gY29hdFdlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZDb2F0Q29sb3JJbmZvczogdmVjMmY7dW5pZm9ybSBjb2F0Q29sb3JNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2Q29hdFJvdWdobmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIGNvYXRSb3VnaG5lc3NNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2Q29hdFJvdWdobmVzc0FuaXNvdHJvcHlJbmZvczogdmVjMmY7dW5pZm9ybSBjb2F0Um91Z2huZXNzQW5pc290cm9weU1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZDb2F0RGFya2VuaW5nSW5mb3MgOiB2ZWMyZjt1bmlmb3JtIGNvYXREYXJrZW5pbmdNYXRyaXggOiBtYXQ0eDRmO3VuaWZvcm0gdkZ1enpXZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSBmdXp6V2VpZ2h0TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkZ1enpDb2xvckluZm9zOiB2ZWMyZjt1bmlmb3JtIGZ1enpDb2xvck1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZGdXp6Um91Z2huZXNzSW5mb3M6IHZlYzJmO3VuaWZvcm0gZnV6elJvdWdobmVzc01hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZHZW9tZXRyeU5vcm1hbEluZm9zOiB2ZWMyZjt1bmlmb3JtIGdlb21ldHJ5Tm9ybWFsTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkdlb21ldHJ5VGFuZ2VudEluZm9zOiB2ZWMyZjt1bmlmb3JtIGdlb21ldHJ5VGFuZ2VudE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZHZW9tZXRyeUNvYXROb3JtYWxJbmZvczogdmVjMmY7dW5pZm9ybSBnZW9tZXRyeUNvYXROb3JtYWxNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2R2VvbWV0cnlDb2F0VGFuZ2VudEluZm9zOiB2ZWMyZjt1bmlmb3JtIGdlb21ldHJ5Q29hdFRhbmdlbnRNYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2R2VvbWV0cnlPcGFjaXR5SW5mb3M6IHZlYzJmO3VuaWZvcm0gZ2VvbWV0cnlPcGFjaXR5TWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkVtaXNzaW9uSW5mb3M6IHZlYzJmO3VuaWZvcm0gZW1pc3Npb25NYXRyaXg6IG1hdDR4NGY7dW5pZm9ybSB2VGhpbkZpbG1XZWlnaHRJbmZvczogdmVjMmY7dW5pZm9ybSB0aGluRmlsbVdlaWdodE1hdHJpeDogbWF0NHg0Zjt1bmlmb3JtIHZUaGluRmlsbVRoaWNrbmVzc0luZm9zOiB2ZWMyZjt1bmlmb3JtIHRoaW5GaWxtVGhpY2tuZXNzTWF0cml4OiBtYXQ0eDRmO3VuaWZvcm0gdkFtYmllbnRPY2NsdXNpb25JbmZvczogdmVjMmY7dW5pZm9ybSBhbWJpZW50T2NjbHVzaW9uTWF0cml4OiBtYXQ0eDRmO1xuI2RlZmluZSBBRERJVElPTkFMX1VCT19ERUNMQVJBVElPTlxuI2luY2x1ZGU8c2NlbmVVYm9EZWNsYXJhdGlvbj5cbiNpbmNsdWRlPG1lc2hVYm9EZWNsYXJhdGlvbj5cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyVWJvRGVjbGFyYXRpb25XR1NMID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9vcGVucGJyVWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdXZBdHRyaWJ1dGVEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tYWluVVZWYXJ5aW5nRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGVscGVyRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3BickJSREZGdW5jdGlvbnNcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvYm9uZXNEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc0RlY2xhcmF0aW9uXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3ByZVBhc3NWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvaGFybW9uaWNzRnVuY3Rpb25zXCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL29wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9mb2dWZXJ0ZXhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9saWdodFZ4VWJvRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsRGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9tb3JwaFRhcmdldHNWZXJ0ZXhHbG9iYWxcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbW9ycGhUYXJnZXRzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL2luc3RhbmNlc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9ib25lc1ZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9iYWtlZFZlcnRleEFuaW1hdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9wcmVQYXNzVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3V2VmFyaWFibGVEZWNsYXJhdGlvblwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9zYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb25cIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvb3BlbnBick5vcm1hbE1hcFZlcnRleFwiO1xuaW1wb3J0IFwiLi9TaGFkZXJzSW5jbHVkZS9jbGlwUGxhbmVWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvZm9nVmVydGV4XCI7XG5pbXBvcnQgXCIuL1NoYWRlcnNJbmNsdWRlL3NoYWRvd3NWZXJ0ZXhcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvdmVydGV4Q29sb3JNaXhpbmdcIjtcbmltcG9ydCBcIi4vU2hhZGVyc0luY2x1ZGUvbG9nRGVwdGhWZXJ0ZXhcIjtcblxuY29uc3QgbmFtZSA9IFwib3BlbnBiclZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNkZWZpbmUgT1BFTlBCUl9WRVJURVhfU0hBREVSXG4jaW5jbHVkZTxvcGVucGJyVWJvRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfQkVHSU5cbmF0dHJpYnV0ZSBwb3NpdGlvbjogdmVjM2Y7XG4jaWZkZWYgTk9STUFMXG5hdHRyaWJ1dGUgbm9ybWFsOiB2ZWMzZjtcbiNlbmRpZlxuI2lmZGVmIFRBTkdFTlRcbmF0dHJpYnV0ZSB0YW5nZW50OiB2ZWM0ZjtcbiNlbmRpZlxuI2lmZGVmIFVWMVxuYXR0cmlidXRlIHV2OiB2ZWMyZjtcbiNlbmRpZlxuI2luY2x1ZGU8dXZBdHRyaWJ1dGVEZWNsYXJhdGlvbj5bMi4uN11cbiNpbmNsdWRlPG1haW5VVlZhcnlpbmdEZWNsYXJhdGlvbj5bMS4uN11cbiNpZmRlZiBWRVJURVhDT0xPUlxuYXR0cmlidXRlIGNvbG9yOiB2ZWM0ZjtcbiNlbmRpZlxuI2luY2x1ZGU8aGVscGVyRnVuY3Rpb25zPlxuI2luY2x1ZGU8cGJyQlJERkZ1bmN0aW9ucz5cbiNpbmNsdWRlPGJvbmVzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxiYWtlZFZlcnRleEFuaW1hdGlvbkRlY2xhcmF0aW9uPlxuI2luY2x1ZGU8aW5zdGFuY2VzRGVjbGFyYXRpb24+XG4jaW5jbHVkZTxwcmVQYXNzVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX0NPTE9SLF9WQVJZSU5HTkFNRV8sQmFzZUNvbG9yKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9XRUlHSFQsX1ZBUllJTkdOQU1FXyxCYXNlV2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9ESUZGVVNFX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEJhc2VEaWZmdXNlUm91Z2huZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQkFTRV9NRVRBTE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlTWV0YWxuZXNzKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVJfV0VJR0hULF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJXZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9DT0xPUixfVkFSWUlOR05BTUVfLFNwZWN1bGFyQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxTUEVDVUxBUl9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxTcGVjdWxhclJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1JPVUdITkVTU19BTklTT1RST1BZLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9XRUlHSFQsX1ZBUllJTkdOQU1FXyxDb2F0V2VpZ2h0KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sQ09BVF9DT0xPUixfVkFSWUlOR05BTUVfLENvYXRDb2xvcilcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sQ29hdFJvdWdobmVzcylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFksX1ZBUllJTkdOQU1FXyxDb2F0Um91Z2huZXNzQW5pc290cm9weSlcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfREFSS0VOSU5HLF9WQVJZSU5HTkFNRV8sQ29hdERhcmtlbmluZylcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfV0VJR0hULF9WQVJZSU5HTkFNRV8sRnV6eldlaWdodClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfQ09MT1IsX1ZBUllJTkdOQU1FXyxGdXp6Q29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxGVVpaX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLEZ1enpSb3VnaG5lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9OT1JNQUwsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeU5vcm1hbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX1RBTkdFTlQsX1ZBUllJTkdOQU1FXyxHZW9tZXRyeVRhbmdlbnQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxHRU9NRVRSWV9DT0FUX05PUk1BTCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5Q29hdE5vcm1hbClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhEZWNsYXJhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX09QQUNJVFksX1ZBUllJTkdOQU1FXyxHZW9tZXRyeU9wYWNpdHkpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxFTUlTU0lPTl9DT0xPUixfVkFSWUlOR05BTUVfLEVtaXNzaW9uQ29sb3IpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxUSElOX0ZJTE1fV0VJR0hULF9WQVJZSU5HTkFNRV8sVGhpbkZpbG1XZWlnaHQpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxUSElOX0ZJTE1fVEhJQ0tORVNTLF9WQVJZSU5HTkFNRV8sVGhpbkZpbG1UaGlja25lc3MpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5UX09DQ0xVU0lPTixfVkFSWUlOR05BTUVfLEFtYmllbnRPY2NsdXNpb24pXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4RGVjbGFyYXRpb24+KF9ERUZJTkVOQU1FXyxERUNBTCxfVkFSWUlOR05BTUVfLERlY2FsKVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleERlY2xhcmF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsKVxudmFyeWluZyB2UG9zaXRpb25XOiB2ZWMzZjtcbiNpZiBERUJVR01PREU+MFxudmFyeWluZyB2Q2xpcFNwYWNlUG9zaXRpb246IHZlYzRmO1xuI2VuZGlmXG4jaWZkZWYgTk9STUFMXG52YXJ5aW5nIHZOb3JtYWxXOiB2ZWMzZjtcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxudmFyeWluZyB2RW52aXJvbm1lbnRJcnJhZGlhbmNlOiB2ZWMzZjtcbiNpbmNsdWRlPGhhcm1vbmljc0Z1bmN0aW9ucz5cbiNlbmRpZlxuI2VuZGlmXG4jaWYgZGVmaW5lZChWRVJURVhDT0xPUikgfHwgZGVmaW5lZChJTlNUQU5DRVNDT0xPUikgJiYgZGVmaW5lZChJTlNUQU5DRVMpXG52YXJ5aW5nIHZDb2xvcjogdmVjNGY7XG4jZW5kaWZcbiNpbmNsdWRlPG9wZW5wYnJOb3JtYWxNYXBWZXJ0ZXhEZWNsYXJhdGlvbj5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8Zm9nVmVydGV4RGVjbGFyYXRpb24+XG4jaW5jbHVkZTxsaWdodFZ4VWJvRGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPG1vcnBoVGFyZ2V0c1ZlcnRleEdsb2JhbERlY2xhcmF0aW9uPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4RGVjbGFyYXRpb24+WzAuLm1heFNpbXVsdGFuZW91c01vcnBoVGFyZ2V0c11cbiNpZmRlZiBSRUZMRUNUSU9OTUFQX1NLWUJPWFxudmFyeWluZyB2UG9zaXRpb25VVlc6IHZlYzNmO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChSRUZMRUNUSU9OTUFQX0VRVUlSRUNUQU5HVUxBUl9GSVhFRCkgfHwgZGVmaW5lZChSRUZMRUNUSU9OTUFQX01JUlJPUkVERVFVSVJFQ1RBTkdVTEFSX0ZJWEVEKVxudmFyeWluZyB2RGlyZWN0aW9uVzogdmVjM2Y7XG4jZW5kaWZcbiNpbmNsdWRlPGxvZ0RlcHRoRGVjbGFyYXRpb24+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlNcbkB2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQgOiBWZXJ0ZXhJbnB1dHMpLT5GcmFnbWVudElucHV0cyB7XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9CRUdJTlxudmFyIHBvc2l0aW9uVXBkYXRlZDogdmVjM2Y9dmVydGV4SW5wdXRzLnBvc2l0aW9uO1xuI2lmZGVmIE5PUk1BTFxudmFyIG5vcm1hbFVwZGF0ZWQ6IHZlYzNmPXZlcnRleElucHV0cy5ub3JtYWw7XG4jZW5kaWZcbiNpZmRlZiBUQU5HRU5UXG52YXIgdGFuZ2VudFVwZGF0ZWQ6IHZlYzRmPXZlcnRleElucHV0cy50YW5nZW50O1xuI2VuZGlmXG4jaWZkZWYgVVYxXG52YXIgdXZVcGRhdGVkOiB2ZWMyZj12ZXJ0ZXhJbnB1dHMudXY7XG4jZW5kaWZcbiNpZmRlZiBVVjJcbnZhciB1djJVcGRhdGVkOiB2ZWMyZj12ZXJ0ZXhJbnB1dHMudXYyO1xuI2VuZGlmXG4jaWZkZWYgVkVSVEVYQ09MT1JcbnZhciBjb2xvclVwZGF0ZWQ6IHZlYzRmPXZlcnRleElucHV0cy5jb2xvcjtcbiNlbmRpZlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4R2xvYmFsPlxuI2luY2x1ZGU8bW9ycGhUYXJnZXRzVmVydGV4PlswLi5tYXhTaW11bHRhbmVvdXNNb3JwaFRhcmdldHNdXG4jaWZkZWYgUkVGTEVDVElPTk1BUF9TS1lCT1hcbnZlcnRleE91dHB1dHMudlBvc2l0aW9uVVZXPXBvc2l0aW9uVXBkYXRlZDtcbiNlbmRpZlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9QT1NJVElPTlxuI2RlZmluZSBDVVNUT01fVkVSVEVYX1VQREFURV9OT1JNQUxcbiNpbmNsdWRlPGluc3RhbmNlc1ZlcnRleD5cbiNpZiBkZWZpbmVkKFBSRVBBU1MpICYmICgoZGVmaW5lZChQUkVQQVNTX1ZFTE9DSVRZKSB8fCBkZWZpbmVkKFBSRVBBU1NfVkVMT0NJVFlfTElORUFSKSkgJiYgIWRlZmluZWQoQk9ORVNfVkVMT0NJVFlfRU5BQkxFRClcbnZlcnRleE91dHB1dHMudkN1cnJlbnRQb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvbipmaW5hbFdvcmxkKnZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO3ZlcnRleE91dHB1dHMudlByZXZpb3VzUG9zaXRpb249dW5pZm9ybXMucHJldmlvdXNWaWV3UHJvamVjdGlvbipmaW5hbFByZXZpb3VzV29ybGQqdmVjNGYocG9zaXRpb25VcGRhdGVkLDEuMCk7XG4jZW5kaWZcbiNpbmNsdWRlPGJvbmVzVmVydGV4PlxuI2luY2x1ZGU8YmFrZWRWZXJ0ZXhBbmltYXRpb24+XG52YXIgd29ybGRQb3M6IHZlYzRmPWZpbmFsV29ybGQqIHZlYzRmKHBvc2l0aW9uVXBkYXRlZCwxLjApO3ZlcnRleE91dHB1dHMudlBvc2l0aW9uVz0gd29ybGRQb3MueHl6O1xuI2lmZGVmIFBSRVBBU1NcbiNpbmNsdWRlPHByZVBhc3NWZXJ0ZXg+XG4jZW5kaWZcbiNpZmRlZiBOT1JNQUxcbnZhciBub3JtYWxXb3JsZDogbWF0M3gzZj0gbWF0M3gzZihmaW5hbFdvcmxkWzBdLnh5eixmaW5hbFdvcmxkWzFdLnh5eixmaW5hbFdvcmxkWzJdLnh5eik7XG4jaWYgZGVmaW5lZChJTlNUQU5DRVMpICYmIGRlZmluZWQoVEhJTl9JTlNUQU5DRVMpXG52ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXPW5vcm1hbFVwZGF0ZWQvIHZlYzNmKGRvdChub3JtYWxXb3JsZFswXSxub3JtYWxXb3JsZFswXSksZG90KG5vcm1hbFdvcmxkWzFdLG5vcm1hbFdvcmxkWzFdKSxkb3Qobm9ybWFsV29ybGRbMl0sbm9ybWFsV29ybGRbMl0pKTt2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXPW5vcm1hbGl6ZShub3JtYWxXb3JsZCp2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXKTtcbiNlbHNlXG4jaWZkZWYgTk9OVU5JRk9STVNDQUxJTkdcbm5vcm1hbFdvcmxkPXRyYW5zcG9zZU1hdDMoaW52ZXJzZU1hdDMobm9ybWFsV29ybGQpKTtcbiNlbmRpZlxudmVydGV4T3V0cHV0cy52Tm9ybWFsVz1ub3JtYWxpemUobm9ybWFsV29ybGQqbm9ybWFsVXBkYXRlZCk7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKFVTRVNQSEVSSUNBTEZST01SRUZMRUNUSU9OTUFQKSAmJiBkZWZpbmVkKFVTRVNQSEVSSUNBTElOVkVSVEVYKVxuI2lmIEJBU0VfRElGRlVTRV9NT0RFTCAhPSBCUkRGX0RJRkZVU0VfTU9ERUxfTEFNQkVSVCAmJiBCQVNFX0RJRkZVU0VfTU9ERUwgIT0gQlJERl9ESUZGVVNFX01PREVMX0xFR0FDWVxudmFyIHZpZXdEaXJlY3Rpb25XOiB2ZWMzZj1ub3JtYWxpemUoc2NlbmUudkV5ZVBvc2l0aW9uLnh5ei12ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblcpO3ZhciBOZG90VjogZjMyPW1heChkb3QodmVydGV4T3V0cHV0cy52Tm9ybWFsVyx2aWV3RGlyZWN0aW9uVyksMC4wKTt2YXIgcm91Z2hOb3JtYWw6IHZlYzNmPW1peCh2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXLHZpZXdEaXJlY3Rpb25XLCgwLjUqKDEuMC1OZG90VikpKnVuaWZvcm1zLnZCYXNlRGlmZnVzZVJvdWdobmVzcyk7dmFyIHJlZmxlY3Rpb25WZWN0b3I6IHZlYzNmPSAodW5pZm9ybXMucmVmbGVjdGlvbk1hdHJpeCogdmVjNGYocm91Z2hOb3JtYWwsMCkpLnh5ejtcbiNlbHNlXG52YXIgcmVmbGVjdGlvblZlY3RvcjogdmVjM2Y9ICh1bmlmb3Jtcy5yZWZsZWN0aW9uTWF0cml4KiB2ZWM0Zih2ZXJ0ZXhPdXRwdXRzLnZOb3JtYWxXLDApKS54eXo7XG4jZW5kaWZcbiNpZmRlZiBSRUZMRUNUSU9OTUFQX09QUE9TSVRFWlxucmVmbGVjdGlvblZlY3Rvci56Kj0tMS4wO1xuI2VuZGlmXG52ZXJ0ZXhPdXRwdXRzLnZFbnZpcm9ubWVudElycmFkaWFuY2U9Y29tcHV0ZUVudmlyb25tZW50SXJyYWRpYW5jZShyZWZsZWN0aW9uVmVjdG9yKTtcbiNlbmRpZlxuI2VuZGlmXG4jZGVmaW5lIENVU1RPTV9WRVJURVhfVVBEQVRFX1dPUkxEUE9TXG4jaWZkZWYgTVVMVElWSUVXXG5pZiAoZ2xfVmlld0lEX09WUj09MHUpIHt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXNjZW5lLnZpZXdQcm9qZWN0aW9uKndvcmxkUG9zO30gZWxzZSB7dmVydGV4T3V0cHV0cy5wb3NpdGlvbj1zY2VuZS52aWV3UHJvamVjdGlvblIqd29ybGRQb3M7fVxuI2Vsc2VcbnZlcnRleE91dHB1dHMucG9zaXRpb249c2NlbmUudmlld1Byb2plY3Rpb24qd29ybGRQb3M7XG4jZW5kaWZcbiNpZiBERUJVR01PREU+MFxudmVydGV4T3V0cHV0cy52Q2xpcFNwYWNlUG9zaXRpb249dmVydGV4T3V0cHV0cy5wb3NpdGlvbjtcbiNlbmRpZlxuI2lmIGRlZmluZWQoUkVGTEVDVElPTk1BUF9FUVVJUkVDVEFOR1VMQVJfRklYRUQpIHx8IGRlZmluZWQoUkVGTEVDVElPTk1BUF9NSVJST1JFREVRVUlSRUNUQU5HVUxBUl9GSVhFRClcbnZlcnRleE91dHB1dHMudkRpcmVjdGlvblc9bm9ybWFsaXplKChmaW5hbFdvcmxkKnZlYzRmKHBvc2l0aW9uVXBkYXRlZCwwLjApKS54eXopO1xuI2VuZGlmXG4jaWZuZGVmIFVWMVxudmFyIHV2VXBkYXRlZDogdmVjMmY9IHZlYzJmKDAuLDAuKTtcbiNlbmRpZlxuI2lmZGVmIE1BSU5VVjFcbnZlcnRleE91dHB1dHMudk1haW5VVjE9dXZVcGRhdGVkO1xuI2VuZGlmXG4jaWZuZGVmIFVWMlxudmFyIHV2MlVwZGF0ZWQ6IHZlYzJmPSB2ZWMyZigwLiwwLik7XG4jZW5kaWZcbiNpZmRlZiBNQUlOVVYyXG52ZXJ0ZXhPdXRwdXRzLnZNYWluVVYyPXV2MlVwZGF0ZWQ7XG4jZW5kaWZcbiNpbmNsdWRlPHV2VmFyaWFibGVEZWNsYXJhdGlvbj5bMy4uN11cbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfQ09MT1IsX1ZBUllJTkdOQU1FXyxCYXNlQ29sb3IsX01BVFJJWE5BTUVfLGJhc2VDb2xvcixfSU5GT05BTUVfLEJhc2VDb2xvckluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX1dFSUdIVCxfVkFSWUlOR05BTUVfLEJhc2VXZWlnaHQsX01BVFJJWE5BTUVfLGJhc2VXZWlnaHQsX0lORk9OQU1FXyxCYXNlV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEJBU0VfRElGRlVTRV9ST1VHSE5FU1MsX1ZBUllJTkdOQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzcyxfTUFUUklYTkFNRV8sYmFzZURpZmZ1c2VSb3VnaG5lc3MsX0lORk9OQU1FXyxCYXNlRGlmZnVzZVJvdWdobmVzc0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxCQVNFX01FVEFMTkVTUyxfVkFSWUlOR05BTUVfLEJhc2VNZXRhbG5lc3MsX01BVFJJWE5BTUVfLGJhc2VNZXRhbG5lc3MsX0lORk9OQU1FXyxCYXNlTWV0YWxuZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX1dFSUdIVCxfVkFSWUlOR05BTUVfLFNwZWN1bGFyV2VpZ2h0LF9NQVRSSVhOQU1FXyxzcGVjdWxhcldlaWdodCxfSU5GT05BTUVfLFNwZWN1bGFyV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFNQRUNVTEFSX0NPTE9SLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJDb2xvcixfTUFUUklYTkFNRV8sc3BlY3VsYXJDb2xvcixfSU5GT05BTUVfLFNwZWN1bGFyQ29sb3JJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVJfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3MsX01BVFJJWE5BTUVfLHNwZWN1bGFyUm91Z2huZXNzLF9JTkZPTkFNRV8sU3BlY3VsYXJSb3VnaG5lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sU1BFQ1VMQVJfUk9VR0hORVNTX0FOSVNPVFJPUFksX1ZBUllJTkdOQU1FXyxTcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHksX01BVFJJWE5BTUVfLHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSxfSU5GT05BTUVfLFNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1dFSUdIVCxfVkFSWUlOR05BTUVfLENvYXRXZWlnaHQsX01BVFJJWE5BTUVfLGNvYXRXZWlnaHQsX0lORk9OQU1FXyxDb2F0V2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfQ09MT1IsX1ZBUllOQU1FXyxDb2F0Q29sb3IsX01BVFJJWE5BTUVfLGNvYXRDb2xvcixfSU5GT05BTUVfLENvYXRDb2xvckluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX1JPVUdITkVTUyxfVkFSWUlOR05BTUVfLENvYXRSb3VnaG5lc3MsX01BVFJJWE5BTUVfLGNvYXRSb3VnaG5lc3MsX0lORk9OQU1FXyxDb2F0Um91Z2huZXNzSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLENPQVRfUk9VR0hORVNTX0FOSVNPVFJPUFksX1ZBUllJTkdOQU1FXyxDb2F0Um91Z2huZXNzQW5pc290cm9weSxfTUFUUklYTkFNRV8sY29hdFJvdWdobmVzc0FuaXNvdHJvcHksX0lORk9OQU1FXyxDb2F0Um91Z2huZXNzQW5pc290cm9weUluZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxDT0FUX0RBUktFTklORyxfVkFSWUlOR05BTUVfLENvYXREYXJrZW5pbmcsX01BVFJJWE5BTUVfLGNvYXREYXJrZW5pbmcsX0lORk9OQU1FXyxDb2F0RGFya2VuaW5nSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfV0VJR0hULF9WQVJZSU5HTkFNRV8sRnV6eldlaWdodCxfTUFUUklYTkFNRV8sZnV6eldlaWdodCxfSU5GT05BTUVfLEZ1enpXZWlnaHRJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sRlVaWl9DT0xPUixfVkFSWUlOR05BTUVfLEZ1enpDb2xvcixfTUFUUklYTkFNRV8sZnV6ekNvbG9yLF9JTkZPTkFNRV8sRnV6ekNvbG9ySW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEZVWlpfUk9VR0hORVNTLF9WQVJZSU5HTkFNRV8sRnV6elJvdWdobmVzcyxfTUFUUklYTkFNRV8sZnV6elJvdWdobmVzcyxfSU5GT05BTUVfLEZ1enpSb3VnaG5lc3NJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfTk9STUFMLF9WQVJZSU5HTkFNRV8sR2VvbWV0cnlOb3JtYWwsX01BVFJJWE5BTUVfLGdlb21ldHJ5Tm9ybWFsLF9JTkZPTkFNRV8sR2VvbWV0cnlOb3JtYWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfVEFOR0VOVCxfVkFSWUlOR05BTUVfLEdlb21ldHJ5VGFuZ2VudCxfTUFUUklYTkFNRV8sZ2VvbWV0cnlUYW5nZW50LF9JTkZPTkFNRV8sR2VvbWV0cnlUYW5nZW50SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEdFT01FVFJZX0NPQVRfTk9STUFMLF9WQVJZSU5HTkFNRV8sR2VvbWV0cnlDb2F0Tm9ybWFsLF9NQVRSSVhOQU1FXyxnZW9tZXRyeUNvYXROb3JtYWwsX0lORk9OQU1FXyxHZW9tZXRyeUNvYXROb3JtYWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sR0VPTUVUUllfT1BBQ0lUWSxfVkFSWUlOR05BTUVfLEdlb21ldHJ5T3BhY2l0eSxfTUFUUklYTkFNRV8sZ2VvbWV0cnlPcGFjaXR5LF9JTkZPTkFNRV8sR2VvbWV0cnlPcGFjaXR5SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLEVNSVNTSU9OX0NPTE9SLF9WQVJZSU5HTkFNRV8sRW1pc3Npb25Db2xvcixfTUFUUklYTkFNRV8sZW1pc3Npb25Db2xvcixfSU5GT05BTUVfLEVtaXNzaW9uQ29sb3JJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sVEhJTl9GSUxNX1dFSUdIVCxfVkFSWUlOR05BTUVfLFRoaW5GaWxtV2VpZ2h0LF9NQVRSSVhOQU1FXyx0aGluRmlsbVdlaWdodCxfSU5GT05BTUVfLFRoaW5GaWxtV2VpZ2h0SW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLFRISU5fRklMTV9USElDS05FU1MsX1ZBUllJTkdOQU1FXyxUaGluRmlsbVRoaWNrbmVzcyxfTUFUUklYTkFNRV8sdGhpbkZpbG1UaGlja25lc3MsX0lORk9OQU1FXyxUaGluRmlsbVRoaWNrbmVzc0luZm9zLngpXG4jaW5jbHVkZTxzYW1wbGVyVmVydGV4SW1wbGVtZW50YXRpb24+KF9ERUZJTkVOQU1FXyxBTUJJRU5UX09DQ0xVU0lPTixfVkFSWUlOR05BTUVfLEFtYmllbnRPY2NsdXNpb24sX01BVFJJWE5BTUVfLGFtYmllbnRPY2NsdXNpb24sX0lORk9OQU1FXyxBbWJpZW50T2NjbHVzaW9uSW5mb3MueClcbiNpbmNsdWRlPHNhbXBsZXJWZXJ0ZXhJbXBsZW1lbnRhdGlvbj4oX0RFRklORU5BTUVfLERFQ0FMLF9WQVJZSU5HTkFNRV8sRGVjYWwsX01BVFJJWE5BTUVfLGRlY2FsLF9JTkZPTkFNRV8sRGVjYWxJbmZvcy54KVxuI2luY2x1ZGU8c2FtcGxlclZlcnRleEltcGxlbWVudGF0aW9uPihfREVGSU5FTkFNRV8sREVUQUlMLF9WQVJZSU5HTkFNRV8sRGV0YWlsLF9NQVRSSVhOQU1FXyxkZXRhaWwsX0lORk9OQU1FXyxEZXRhaWxJbmZvcy54KVxuI2luY2x1ZGU8b3BlbnBick5vcm1hbE1hcFZlcnRleD5cbiNpbmNsdWRlPGNsaXBQbGFuZVZlcnRleD5cbiNpbmNsdWRlPGZvZ1ZlcnRleD5cbiNpbmNsdWRlPHNoYWRvd3NWZXJ0ZXg+WzAuLm1heFNpbXVsdGFuZW91c0xpZ2h0c11cbiNpbmNsdWRlPHZlcnRleENvbG9yTWl4aW5nPlxuI2luY2x1ZGU8bG9nRGVwdGhWZXJ0ZXg+XG4jZGVmaW5lIENVU1RPTV9WRVJURVhfTUFJTl9FTkRcbn1gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBvcGVucGJyVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9