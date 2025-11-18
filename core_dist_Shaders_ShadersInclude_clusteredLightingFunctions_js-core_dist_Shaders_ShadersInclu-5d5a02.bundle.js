"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Shaders_ShadersInclude_clusteredLightingFunctions_js-core_dist_Shaders_ShadersInclu-5d5a02"],{

/***/ "../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/clusteredLightingFunctions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clusteredLightingFunctions: () => (/* binding */ clusteredLightingFunctions)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "clusteredLightingFunctions";
const shader = `struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};
#define inline
ClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(
texelFetch(lightDataTexture,ivec2(0,index),0),
texelFetch(lightDataTexture,ivec2(1,index),0),
texelFetch(lightDataTexture,ivec2(2,index),0),
texelFetch(lightDataTexture,ivec2(3,index),0),
texelFetch(lightDataTexture,ivec2(4,index),0)
);}
int getClusteredSliceIndex(vec2 sliceData,float viewDepth) {return int(log(viewDepth)*sliceData.x+sliceData.y);}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const clusteredLightingFunctions = { name, shader };


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

/***/ "../core/dist/Shaders/ShadersInclude/lightFragment.js":
/*!************************************************************!*\
  !*** ../core/dist/Shaders/ShadersInclude/lightFragment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFragment: () => (/* binding */ lightFragment)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightFragment";
const shader = `#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
vec4 diffuse{X}=light{X}.vLightDiffuse;
#define CUSTOM_LIGHT{X}_COLOR 
#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
{int sliceIndex=min(getClusteredSliceIndex(light{X}.vSliceData,vViewDepth),CLUSTLIGHT_SLICES-1);info=computeClusteredLighting(
lightDataTexture{X},
tileMaskTexture{X},
light{X}.vLightData,
ivec2(light{X}.vSliceRanges[sliceIndex]),
viewDirectionW,
normalW,
vPositionW,
surfaceAlbedo,
reflectivityOut
#ifdef IRIDESCENCE
,iridescenceIntensity
#endif
#ifdef SS_TRANSLUCENCY
,subSurfaceOut
#endif
#ifdef SPECULARTERM
,AARoughnessFactors.x
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef SHEEN
,sheenOut
#endif
#ifdef CLEARCOAT
,clearcoatOut
#endif
);}
#elif defined(PBR)
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
preInfo=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,normalW,vPositionW,light{X}.vLightData,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,roughness);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#if defined(HEMILIGHT{X}) || defined(AREALIGHT{X})
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
preInfo.diffuseRoughness=diffuseRoughness;preInfo.surfaceAlbedo=surfaceAlbedo;
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission=vec3(0.0);
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,diffuse{X}.rgb,light{X}.vLightGround);
#elif defined(AREALIGHT{X})
info.diffuse=computeAreaDiffuseLighting(preInfo,diffuse{X}.rgb);
#elif defined(SS_TRANSLUCENCY)
#ifndef SS_TRANSLUCENCY_LEGACY
info.diffuse=computeDiffuseLighting(preInfo,diffuse{X}.rgb)*(1.0-subSurfaceOut.translucencyIntensity);info.diffuseTransmission=computeDiffuseTransmittedLighting(preInfo,diffuse{X}.rgb,subSurfaceOut.transmittance); 
#else
info.diffuse=computeDiffuseTransmittedLighting(preInfo,diffuse{X}.rgb,subSurfaceOut.transmittance);
#endif
#else
info.diffuse=computeDiffuseLighting(preInfo,diffuse{X}.rgb);
#endif
#ifdef SPECULARTERM
#if AREALIGHT{X}
info.specular=computeAreaSpecularLighting(preInfo,light{X}.vLightSpecular.rgb,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#else
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
{vec3 metalFresnel=reflectivityOut.specularWeight*getF82Specular(preInfo.VdotH,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);vec3 dielectricFresnel=fresnelSchlickGGX(preInfo.VdotH,reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90);coloredFresnel=mix(dielectricFresnel,metalFresnel,reflectivityOut.metallic);}
#else
coloredFresnel=fresnelSchlickGGX(preInfo.VdotH,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#endif
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
{float NdotH=dot(normalW,preInfo.H);vec3 fresnel=fresnelSchlickGGX(NdotH,vec3(reflectanceF0),specularEnvironmentR90);info.diffuse*=(vec3(1.0)-fresnel);}
#endif
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,coloredFresnel,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#endif
#endif
#ifndef AREALIGHT{X}
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,diffuse{X}.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
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
#endif
#else
#ifdef SPOTLIGHT{X}
#ifdef IESLIGHTTEXTURE{X}
info=computeIESSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness,iesLightTexture{X});
#else
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#endif
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
info=computeAreaLighting(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,normalW,vPositionW,light{X}.vLightData.xyz,light{X}.vLightWidth.rgb,light{X}.vLightHeight.rgb,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,
#ifdef AREALIGHTNOROUGHTNESS
0.5
#else
vReflectionInfos.y
#endif
);
#elif defined(CLUSTLIGHT{X}) && CLUSTLIGHT_BATCH>0
{int sliceIndex=min(getClusteredSliceIndex(light{X}.vSliceData,vViewDepth),CLUSTLIGHT_SLICES-1);info=computeClusteredLighting(lightDataTexture{X},tileMaskTexture{X},viewDirectionW,normalW,light{X}.vLightData,ivec2(light{X}.vSliceRanges[sliceIndex]),glossiness);}
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},textureProjectionMatrix{X},vPositionW);
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++)
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {index{X}=i;break;}}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{index{X}+=1;float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
aggShadow+=shadow;numLights+=1.0;
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SS_TRANSLUCENCY
diffuseTransmissionBase+=info.diffuseTransmission*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStore[name] = shader;
}
/** @internal */
const lightFragment = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnNfanMtY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1LTVkNWEwMi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2NsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvU2hhZGVycy9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJjbHVzdGVyZWRMaWdodGluZ0Z1bmN0aW9uc1wiO1xuY29uc3Qgc2hhZGVyID0gYHN0cnVjdCBDbHVzdGVyZWRMaWdodCB7dmVjNCB2TGlnaHREYXRhO3ZlYzQgdkxpZ2h0RGlmZnVzZTt2ZWM0IHZMaWdodFNwZWN1bGFyO3ZlYzQgdkxpZ2h0RGlyZWN0aW9uO3ZlYzQgdkxpZ2h0RmFsbG9mZjt9O1xuI2RlZmluZSBpbmxpbmVcbkNsdXN0ZXJlZExpZ2h0IGdldENsdXN0ZXJlZExpZ2h0KHNhbXBsZXIyRCBsaWdodERhdGFUZXh0dXJlLGludCBpbmRleCkge3JldHVybiBDbHVzdGVyZWRMaWdodChcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigwLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigxLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigyLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMigzLGluZGV4KSwwKSxcbnRleGVsRmV0Y2gobGlnaHREYXRhVGV4dHVyZSxpdmVjMig0LGluZGV4KSwwKVxuKTt9XG5pbnQgZ2V0Q2x1c3RlcmVkU2xpY2VJbmRleCh2ZWMyIHNsaWNlRGF0YSxmbG9hdCB2aWV3RGVwdGgpIHtyZXR1cm4gaW50KGxvZyh2aWV3RGVwdGgpKnNsaWNlRGF0YS54K3NsaWNlRGF0YS55KTt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodEZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIExJR0hUe1h9XG4jaWYgZGVmaW5lZChTSEFET1dPTkxZKSB8fCBkZWZpbmVkKExJR0hUTUFQKSAmJiBkZWZpbmVkKExJR0hUTUFQRVhDTFVERUR7WH0pICYmIGRlZmluZWQoTElHSFRNQVBOT1NQRUNVTEFSe1h9KVxuI2Vsc2VcbnZlYzQgZGlmZnVzZXtYfT1saWdodHtYfS52TGlnaHREaWZmdXNlO1xuI2RlZmluZSBDVVNUT01fTElHSFR7WH1fQ09MT1IgXG4jaWYgZGVmaW5lZChQQlIpICYmIGRlZmluZWQoQ0xVU1RMSUdIVHtYfSkgJiYgZGVmaW5lZChDTFVTVExJR0hUX0JBVENIKSAmJiBDTFVTVExJR0hUX0JBVENIPjBcbntpbnQgc2xpY2VJbmRleD1taW4oZ2V0Q2x1c3RlcmVkU2xpY2VJbmRleChsaWdodHtYfS52U2xpY2VEYXRhLHZWaWV3RGVwdGgpLENMVVNUTElHSFRfU0xJQ0VTLTEpO2luZm89Y29tcHV0ZUNsdXN0ZXJlZExpZ2h0aW5nKFxubGlnaHREYXRhVGV4dHVyZXtYfSxcbnRpbGVNYXNrVGV4dHVyZXtYfSxcbmxpZ2h0e1h9LnZMaWdodERhdGEsXG5pdmVjMihsaWdodHtYfS52U2xpY2VSYW5nZXNbc2xpY2VJbmRleF0pLFxudmlld0RpcmVjdGlvblcsXG5ub3JtYWxXLFxudlBvc2l0aW9uVyxcbnN1cmZhY2VBbGJlZG8sXG5yZWZsZWN0aXZpdHlPdXRcbiNpZmRlZiBJUklERVNDRU5DRVxuLGlyaWRlc2NlbmNlSW50ZW5zaXR5XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbixzdWJTdXJmYWNlT3V0XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbixBQVJvdWdobmVzc0ZhY3RvcnMueFxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbixhbmlzb3Ryb3BpY091dFxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbixzaGVlbk91dFxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4sY2xlYXJjb2F0T3V0XG4jZW5kaWZcbik7fVxuI2VsaWYgZGVmaW5lZChQQlIpXG4jaWZkZWYgU1BPVExJR0hUe1h9XG5wcmVJbmZvPWNvbXB1dGVQb2ludEFuZFNwb3RQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHZQb3NpdGlvblcpO1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxucHJlSW5mbz1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyx2UG9zaXRpb25XKTtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxucHJlSW5mbz1jb21wdXRlSGVtaXNwaGVyaWNQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtcbiNlbGlmIGRlZmluZWQoRElSTElHSFR7WH0pXG5wcmVJbmZvPWNvbXB1dGVEaXJlY3Rpb25hbFByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxucHJlSW5mbz1jb21wdXRlQXJlYVByZUxpZ2h0aW5nSW5mbyhhcmVhTGlnaHRzTFRDMVNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLGxpZ2h0e1h9LnZMaWdodFdpZHRoLnh5eixsaWdodHtYfS52TGlnaHRIZWlnaHQueHl6LHJvdWdobmVzcyk7XG4jZW5kaWZcbnByZUluZm8uTmRvdFY9TmRvdFY7XG4jaWZkZWYgU1BPVExJR0hUe1h9XG4jaWZkZWYgTElHSFRfRkFMTE9GRl9HTFRGe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9HTFRGKHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9KTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfR0xURihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnosbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1BIWVNJQ0FMe1h9KVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfUGh5c2ljYWwocHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGllc0xpZ2h0VGV4dHVyZXtYfSk7XG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX1BoeXNpY2FsKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1NUQU5EQVJEe1h9KVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfU3RhbmRhcmQocHJlSW5mby5saWdodE9mZnNldCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncpO1xuI2VuZGlmXG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYocHJlSW5mby5saWdodE9mZnNldCxwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnkpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi56LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYudyk7XG4jZW5kaWZcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxuI2lmZGVmIExJR0hUX0ZBTExPRkZfR0xURntYfVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfR0xURihwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfUEhZU0lDQUx7WH0pXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9TVEFOREFSRHtYfSlcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKHByZUluZm8ubGlnaHRPZmZzZXQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54KTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZihwcmVJbmZvLmxpZ2h0T2Zmc2V0LHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZW5kaWZcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uPTEuMDtcbiNlbmRpZlxuI2lmIGRlZmluZWQoSEVNSUxJR0hUe1h9KSB8fCBkZWZpbmVkKEFSRUFMSUdIVHtYfSlcbnByZUluZm8ucm91Z2huZXNzPXJvdWdobmVzcztcbiNlbHNlXG5wcmVJbmZvLnJvdWdobmVzcz1hZGp1c3RSb3VnaG5lc3NGcm9tTGlnaHRQcm9wZXJ0aWVzKHJvdWdobmVzcyxsaWdodHtYfS52TGlnaHRTcGVjdWxhci5hLHByZUluZm8ubGlnaHREaXN0YW5jZSk7XG4jZW5kaWZcbnByZUluZm8uZGlmZnVzZVJvdWdobmVzcz1kaWZmdXNlUm91Z2huZXNzO3ByZUluZm8uc3VyZmFjZUFsYmVkbz1zdXJmYWNlQWxiZWRvO1xuI2lmZGVmIElSSURFU0NFTkNFXG5wcmVJbmZvLmlyaWRlc2NlbmNlSW50ZW5zaXR5PWlyaWRlc2NlbmNlSW50ZW5zaXR5O1xuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5pbmZvLmRpZmZ1c2VUcmFuc21pc3Npb249dmVjMygwLjApO1xuI2VuZGlmXG4jaWZkZWYgSEVNSUxJR0hUe1h9XG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZUhlbWlzcGhlcmljRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0R3JvdW5kKTtcbiNlbGlmIGRlZmluZWQoQVJFQUxJR0hUe1h9KVxuaW5mby5kaWZmdXNlPWNvbXB1dGVBcmVhRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IpO1xuI2VsaWYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpXG4jaWZuZGVmIFNTX1RSQU5TTFVDRU5DWV9MRUdBQ1lcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IpKigxLjAtc3ViU3VyZmFjZU91dC50cmFuc2x1Y2VuY3lJbnRlbnNpdHkpO2luZm8uZGlmZnVzZVRyYW5zbWlzc2lvbj1jb21wdXRlRGlmZnVzZVRyYW5zbWl0dGVkTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYixzdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2UpOyBcbiNlbHNlXG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZURpZmZ1c2VUcmFuc21pdHRlZExpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2Isc3ViU3VyZmFjZU91dC50cmFuc21pdHRhbmNlKTtcbiNlbmRpZlxuI2Vsc2VcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG4jaWYgQVJFQUxJR0hUe1h9XG5pbmZvLnNwZWN1bGFyPWNvbXB1dGVBcmVhU3BlY3VsYXJMaWdodGluZyhwcmVJbmZvLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwKTtcbiNlbHNlXG4jaWYgKENPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTD09Q09ORFVDVE9SX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG57dmVjMyBtZXRhbEZyZXNuZWw9cmVmbGVjdGl2aXR5T3V0LnNwZWN1bGFyV2VpZ2h0KmdldEY4MlNwZWN1bGFyKHByZUluZm8uVmRvdEgsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCxyZWZsZWN0aXZpdHlPdXQucm91Z2huZXNzKTt2ZWMzIGRpZWxlY3RyaWNGcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKHByZUluZm8uVmRvdEgscmVmbGVjdGl2aXR5T3V0LmRpZWxlY3RyaWNDb2xvckYwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwKTtjb2xvcmVkRnJlc25lbD1taXgoZGllbGVjdHJpY0ZyZXNuZWwsbWV0YWxGcmVzbmVsLHJlZmxlY3Rpdml0eU91dC5tZXRhbGxpYyk7fVxuI2Vsc2VcbmNvbG9yZWRGcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKHByZUluZm8uVmRvdEgsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCk7XG4jZW5kaWZcbiNpZm5kZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbntmbG9hdCBOZG90SD1kb3Qobm9ybWFsVyxwcmVJbmZvLkgpO3ZlYzMgZnJlc25lbD1mcmVzbmVsU2NobGlja0dHWChOZG90SCx2ZWMzKHJlZmxlY3RhbmNlRjApLHNwZWN1bGFyRW52aXJvbm1lbnRSOTApO2luZm8uZGlmZnVzZSo9KHZlYzMoMS4wKS1mcmVzbmVsKTt9XG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuaW5mby5zcGVjdWxhcj1jb21wdXRlQW5pc290cm9waWNTcGVjdWxhckxpZ2h0aW5nKHByZUluZm8sdmlld0RpcmVjdGlvblcsbm9ybWFsVyxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY1RhbmdlbnQsYW5pc290cm9waWNPdXQuYW5pc290cm9waWNCaXRhbmdlbnQsYW5pc290cm9waWNPdXQuYW5pc290cm9weSxjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHNwZWN1bGFyRW52aXJvbm1lbnRSOTAsQUFSb3VnaG5lc3NGYWN0b3JzLngsZGlmZnVzZXtYfS5yZ2IpO1xuI2Vsc2VcbmluZm8uc3BlY3VsYXI9Y29tcHV0ZVNwZWN1bGFyTGlnaHRpbmcocHJlSW5mbyxub3JtYWxXLGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAsY29sb3JlZEZyZXNuZWwsQUFSb3VnaG5lc3NGYWN0b3JzLngsZGlmZnVzZXtYfS5yZ2IpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBBUkVBTElHSFR7WH1cbiNpZmRlZiBTSEVFTlxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG5wcmVJbmZvLnJvdWdobmVzcz1zaGVlbk91dC5zaGVlbkludGVuc2l0eTtcbiNlbHNlXG4jaWZkZWYgSEVNSUxJR0hUe1h9XG5wcmVJbmZvLnJvdWdobmVzcz1zaGVlbk91dC5zaGVlblJvdWdobmVzcztcbiNlbHNlXG5wcmVJbmZvLnJvdWdobmVzcz1hZGp1c3RSb3VnaG5lc3NGcm9tTGlnaHRQcm9wZXJ0aWVzKHNoZWVuT3V0LnNoZWVuUm91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxuI2VuZGlmXG5pbmZvLnNoZWVuPWNvbXB1dGVTaGVlbkxpZ2h0aW5nKHByZUluZm8sbm9ybWFsVyxzaGVlbk91dC5zaGVlbkNvbG9yLHNwZWN1bGFyRW52aXJvbm1lbnRSOTAsQUFSb3VnaG5lc3NGYWN0b3JzLngsZGlmZnVzZXtYfS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaWZkZWYgSEVNSUxJR0hUe1h9XG5wcmVJbmZvLnJvdWdobmVzcz1jbGVhcmNvYXRPdXQuY2xlYXJDb2F0Um91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoY2xlYXJjb2F0T3V0LmNsZWFyQ29hdFJvdWdobmVzcyxsaWdodHtYfS52TGlnaHRTcGVjdWxhci5hLHByZUluZm8ubGlnaHREaXN0YW5jZSk7XG4jZW5kaWZcbmluZm8uY2xlYXJDb2F0PWNvbXB1dGVDbGVhckNvYXRMaWdodGluZyhwcmVJbmZvLGNsZWFyY29hdE91dC5jbGVhckNvYXROb3JtYWxXLGNsZWFyY29hdE91dC5jbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnMueCxjbGVhcmNvYXRPdXQuY2xlYXJDb2F0SW50ZW5zaXR5LGRpZmZ1c2V7WH0ucmdiKTtcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxuYWJzb3JwdGlvbj1jb21wdXRlQ2xlYXJDb2F0TGlnaHRpbmdBYnNvcnB0aW9uKGNsZWFyY29hdE91dC5jbGVhckNvYXROZG90VlJlZnJhY3QscHJlSW5mby5MLGNsZWFyY29hdE91dC5jbGVhckNvYXROb3JtYWxXLGNsZWFyY29hdE91dC5jbGVhckNvYXRDb2xvcixjbGVhcmNvYXRPdXQuY2xlYXJDb2F0VGhpY2tuZXNzLGNsZWFyY29hdE91dC5jbGVhckNvYXRJbnRlbnNpdHkpO2luZm8uZGlmZnVzZSo9YWJzb3JwdGlvbjtcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbio9YWJzb3JwdGlvbjtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuaW5mby5zcGVjdWxhcio9YWJzb3JwdGlvbjtcbiNlbmRpZlxuI2VuZGlmXG5pbmZvLmRpZmZ1c2UqPWluZm8uY2xlYXJDb2F0Lnc7XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5pbmZvLmRpZmZ1c2VUcmFuc21pc3Npb24qPWluZm8uY2xlYXJDb2F0Lnc7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbmluZm8uc3BlY3VsYXIqPWluZm8uY2xlYXJDb2F0Lnc7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuaW5mby5zaGVlbio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgU1BPVExJR0hUe1h9XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5pbmZvPWNvbXB1dGVJRVNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbixkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsZGlmZnVzZXtYfS5hLGdsb3NzaW5lc3MsaWVzTGlnaHRUZXh0dXJle1h9KTtcbiNlbHNlXG5pbmZvPWNvbXB1dGVTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbixkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsZGlmZnVzZXtYfS5hLGdsb3NzaW5lc3MpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKEhFTUlMSUdIVHtYfSlcbmluZm89Y29tcHV0ZUhlbWlzcGhlcmljTGlnaHRpbmcodmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixsaWdodHtYfS52TGlnaHRHcm91bmQsZ2xvc3NpbmVzcyk7XG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pIHx8IGRlZmluZWQoRElSTElHSFR7WH0pXG5pbmZvPWNvbXB1dGVMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGRpZmZ1c2V7WH0uYSxnbG9zc2luZXNzKTtcbiNlbGlmIGRlZmluZWQoQVJFQUxJR0hUe1h9KSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbmluZm89Y29tcHV0ZUFyZWFMaWdodGluZyhhcmVhTGlnaHRzTFRDMVNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixsaWdodHtYfS52TGlnaHRXaWR0aC5yZ2IsbGlnaHR7WH0udkxpZ2h0SGVpZ2h0LnJnYixkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsXG4jaWZkZWYgQVJFQUxJR0hUTk9ST1VHSFRORVNTXG4wLjVcbiNlbHNlXG52UmVmbGVjdGlvbkluZm9zLnlcbiNlbmRpZlxuKTtcbiNlbGlmIGRlZmluZWQoQ0xVU1RMSUdIVHtYfSkgJiYgQ0xVU1RMSUdIVF9CQVRDSD4wXG57aW50IHNsaWNlSW5kZXg9bWluKGdldENsdXN0ZXJlZFNsaWNlSW5kZXgobGlnaHR7WH0udlNsaWNlRGF0YSx2Vmlld0RlcHRoKSxDTFVTVExJR0hUX1NMSUNFUy0xKTtpbmZvPWNvbXB1dGVDbHVzdGVyZWRMaWdodGluZyhsaWdodERhdGFUZXh0dXJle1h9LHRpbGVNYXNrVGV4dHVyZXtYfSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsaXZlYzIobGlnaHR7WH0udlNsaWNlUmFuZ2VzW3NsaWNlSW5kZXhdKSxnbG9zc2luZXNzKTt9XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBST0pFQ1RFRExJR0hUVEVYVFVSRXtYfVxuaW5mby5kaWZmdXNlKj1jb21wdXRlUHJvamVjdGlvblRleHR1cmVEaWZmdXNlTGlnaHRpbmcocHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfSx0ZXh0dXJlUHJvamVjdGlvbk1hdHJpeHtYfSx2UG9zaXRpb25XKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hBRE9Xe1h9XG4jaWZkZWYgU0hBRE9XQ1NNe1h9XG5mb3IgKGludCBpPTA7IGk8U0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9OyBpKyspXG57XG4jaWZkZWYgU0hBRE9XQ1NNX1JJR0hUSEFOREVEe1h9XG5kaWZme1h9PXZpZXdGcnVzdHVtWntYfVtpXSt2UG9zaXRpb25Gcm9tQ2FtZXJhe1h9Lno7XG4jZWxzZVxuZGlmZntYfT12aWV3RnJ1c3R1bVp7WH1baV0tdlBvc2l0aW9uRnJvbUNhbWVyYXtYfS56O1xuI2VuZGlmXG5pZiAoZGlmZntYfT49MC4pIHtpbmRleHtYfT1pO2JyZWFrO319XG4jaWZkZWYgU0hBRE9XQ1NNVVNFU0hBRE9XTUFYWntYfVxuaWYgKGluZGV4e1h9Pj0wKVxuI2VuZGlmXG57XG4jaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG4jaWYgZGVmaW5lZChTSEFET1dMT1dRVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMShmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjMoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGNShmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1MxNihmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsbGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxkZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzMyKGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyxsaWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLGRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0scGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzY0KGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyxsaWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLGRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0scGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZW5kaWZcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd0NTTShmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG5zaGFkb3dEZWJ1Z3tYfT12ZWMzKHNoYWRvdykqdkNhc2NhZGVDb2xvcnNNdWx0aXBsaWVye1h9W2luZGV4e1h9XTtcbiNlbmRpZlxuI2lmbmRlZiBTSEFET1dDU01OT0JMRU5Ee1h9XG5mbG9hdCBmcnVzdHVtTGVuZ3RoPWZydXN0dW1MZW5ndGhze1h9W2luZGV4e1h9XTtmbG9hdCBkaWZmUmF0aW89Y2xhbXAoZGlmZntYfS9mcnVzdHVtTGVuZ3RoLDAuLDEuKSpjYXNjYWRlQmxlbmRGYWN0b3J7WH07aWYgKGluZGV4e1h9PChTSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0tMSkgJiYgZGlmZlJhdGlvPDEuKVxue2luZGV4e1h9Kz0xO2Zsb2F0IG5leHRTaGFkb3c9MC47XG4jaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG4jaWYgZGVmaW5lZChTSEFET1dMT1dRVUFMSVRZe1h9KVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjEoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMyhmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbHNlXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGNShmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMTYoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53LGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sZGVwdGhDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxwZW51bWJyYURhcmtuZXNze1h9KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMzIoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53LGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sZGVwdGhDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxwZW51bWJyYURhcmtuZXNze1h9KTtcbiNlbHNlXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzY0KGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyxsaWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLGRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0scGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZW5kaWZcbiNlbHNlXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dDU00oZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbnNoYWRvdz1taXgobmV4dFNoYWRvdyxzaGFkb3csZGlmZlJhdGlvKTtcbiNpZmRlZiBTSEFET1dDU01ERUJVR3tYfVxuc2hhZG93RGVidWd7WH09bWl4KHZlYzMobmV4dFNoYWRvdykqdkNhc2NhZGVDb2xvcnNNdWx0aXBsaWVye1h9W2luZGV4e1h9XSxzaGFkb3dEZWJ1Z3tYfSxkaWZmUmF0aW8pO1xuI2VuZGlmXG59XG4jZW5kaWZcbn1cbiNlbGlmIGRlZmluZWQoU0hBRE9XQ0xPU0VFU017WH0pXG4jaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ2xvc2VFU01DdWJlKHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENsb3NlRVNNKHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XRVNNe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aEVTTUN1YmUodlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5kZXB0aFZhbHVlcyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoRVNNKHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUE9JU1NPTntYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmdDdWJlKHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBvaXNzb25TYW1wbGluZyh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFNIQURPV1BDRntYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ0YxKHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENGMyh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ0Y1KHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55eixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFNIQURPV1BDU1N7WH0pXG4jaWYgZGVmaW5lZChTSEFET1dMT1dRVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENTUzE2KHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ1NTMzIodlBvc2l0aW9uRnJvbUxpZ2h0e1h9LHZEZXB0aE1ldHJpY3tYfSxkZXB0aFRleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ1NTNjQodlBvc2l0aW9uRnJvbUxpZ2h0e1h9LHZEZXB0aE1ldHJpY3tYfSxkZXB0aFRleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2Vsc2VcbiNpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd0N1YmUodlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93KHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTSEFET1dPTkxZXG4jaWZuZGVmIFNIQURPV0lOVVNFXG4jZGVmaW5lIFNIQURPV0lOVVNFXG4jZW5kaWZcbmdsb2JhbFNoYWRvdys9c2hhZG93O3NoYWRvd0xpZ2h0Q291bnQrPTEuMDtcbiNlbmRpZlxuI2Vsc2VcbnNoYWRvdz0xLjtcbiNlbmRpZlxuYWdnU2hhZG93Kz1zaGFkb3c7bnVtTGlnaHRzKz0xLjA7XG4jaWZuZGVmIFNIQURPV09OTFlcbiNpZmRlZiBDVVNUT01VU0VSTElHSFRJTkdcbmRpZmZ1c2VCYXNlKz1jb21wdXRlQ3VzdG9tRGlmZnVzZUxpZ2h0aW5nKGluZm8sZGlmZnVzZUJhc2Usc2hhZG93KTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnNwZWN1bGFyQmFzZSs9Y29tcHV0ZUN1c3RvbVNwZWN1bGFyTGlnaHRpbmcoaW5mbyxzcGVjdWxhckJhc2Usc2hhZG93KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVE1BUCkgJiYgZGVmaW5lZChMSUdIVE1BUEVYQ0xVREVEe1h9KVxuZGlmZnVzZUJhc2UrPWxpZ2h0bWFwQ29sb3IucmdiKnNoYWRvdztcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZm5kZWYgTElHSFRNQVBOT1NQRUNVTEFSe1h9XG5zcGVjdWxhckJhc2UrPWluZm8uc3BlY3VsYXIqc2hhZG93KmxpZ2h0bWFwQ29sb3IucmdiO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbiNpZm5kZWYgTElHSFRNQVBOT1NQRUNVTEFSe1h9XG5jbGVhckNvYXRCYXNlKz1pbmZvLmNsZWFyQ29hdC5yZ2Iqc2hhZG93KmxpZ2h0bWFwQ29sb3IucmdiO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2lmbmRlZiBMSUdIVE1BUE5PU1BFQ1VMQVJ7WH1cbnNoZWVuQmFzZSs9aW5mby5zaGVlbi5yZ2Iqc2hhZG93O1xuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbmRpZmZ1c2VCYXNlKz1pbmZvLmRpZmZ1c2Uqc2hhZG93RGVidWd7WH07XG4jZWxzZVxuZGlmZnVzZUJhc2UrPWluZm8uZGlmZnVzZSpzaGFkb3c7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmRpZmZ1c2VUcmFuc21pc3Npb25CYXNlKz1pbmZvLmRpZmZ1c2VUcmFuc21pc3Npb24qc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5zcGVjdWxhckJhc2UrPWluZm8uc3BlY3VsYXIqc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5jbGVhckNvYXRCYXNlKz1pbmZvLmNsZWFyQ29hdC5yZ2Iqc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnNoZWVuQmFzZSs9aW5mby5zaGVlbi5yZ2Iqc2hhZG93O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGxpZ2h0RnJhZ21lbnQgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9