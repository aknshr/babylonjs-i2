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
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
#if defined(HEMILIGHT{X})
preInfo.roughness=roughness;
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
#if defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1ZGVfY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnNfanMtY29yZV9kaXN0X1NoYWRlcnNfU2hhZGVyc0luY2x1LTVkNWEwMi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvU2hhZGVyc0luY2x1ZGUvY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImNsdXN0ZXJlZExpZ2h0aW5nRnVuY3Rpb25zXCI7XG5jb25zdCBzaGFkZXIgPSBgc3RydWN0IENsdXN0ZXJlZExpZ2h0IHt2ZWM0IHZMaWdodERhdGE7dmVjNCB2TGlnaHREaWZmdXNlO3ZlYzQgdkxpZ2h0U3BlY3VsYXI7dmVjNCB2TGlnaHREaXJlY3Rpb247dmVjNCB2TGlnaHRGYWxsb2ZmO307XG4jZGVmaW5lIGlubGluZVxuQ2x1c3RlcmVkTGlnaHQgZ2V0Q2x1c3RlcmVkTGlnaHQoc2FtcGxlcjJEIGxpZ2h0RGF0YVRleHR1cmUsaW50IGluZGV4KSB7cmV0dXJuIENsdXN0ZXJlZExpZ2h0KFxudGV4ZWxGZXRjaChsaWdodERhdGFUZXh0dXJlLGl2ZWMyKDAsaW5kZXgpLDApLFxudGV4ZWxGZXRjaChsaWdodERhdGFUZXh0dXJlLGl2ZWMyKDEsaW5kZXgpLDApLFxudGV4ZWxGZXRjaChsaWdodERhdGFUZXh0dXJlLGl2ZWMyKDIsaW5kZXgpLDApLFxudGV4ZWxGZXRjaChsaWdodERhdGFUZXh0dXJlLGl2ZWMyKDMsaW5kZXgpLDApLFxudGV4ZWxGZXRjaChsaWdodERhdGFUZXh0dXJlLGl2ZWMyKDQsaW5kZXgpLDApXG4pO31cbmludCBnZXRDbHVzdGVyZWRTbGljZUluZGV4KHZlYzIgc2xpY2VEYXRhLGZsb2F0IHZpZXdEZXB0aCkge3JldHVybiBpbnQobG9nKHZpZXdEZXB0aCkqc2xpY2VEYXRhLngrc2xpY2VEYXRhLnkpO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgY2x1c3RlcmVkTGlnaHRpbmdGdW5jdGlvbnMgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0RnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbiNpZiBkZWZpbmVkKFNIQURPV09OTFkpIHx8IGRlZmluZWQoTElHSFRNQVApICYmIGRlZmluZWQoTElHSFRNQVBFWENMVURFRHtYfSkgJiYgZGVmaW5lZChMSUdIVE1BUE5PU1BFQ1VMQVJ7WH0pXG4jZWxzZVxudmVjNCBkaWZmdXNle1h9PWxpZ2h0e1h9LnZMaWdodERpZmZ1c2U7XG4jZGVmaW5lIENVU1RPTV9MSUdIVHtYfV9DT0xPUiBcbiNpZiBkZWZpbmVkKFBCUikgJiYgZGVmaW5lZChDTFVTVExJR0hUe1h9KSAmJiBkZWZpbmVkKENMVVNUTElHSFRfQkFUQ0gpICYmIENMVVNUTElHSFRfQkFUQ0g+MFxue2ludCBzbGljZUluZGV4PW1pbihnZXRDbHVzdGVyZWRTbGljZUluZGV4KGxpZ2h0e1h9LnZTbGljZURhdGEsdlZpZXdEZXB0aCksQ0xVU1RMSUdIVF9TTElDRVMtMSk7aW5mbz1jb21wdXRlQ2x1c3RlcmVkTGlnaHRpbmcoXG5saWdodERhdGFUZXh0dXJle1h9LFxudGlsZU1hc2tUZXh0dXJle1h9LFxubGlnaHR7WH0udkxpZ2h0RGF0YSxcbml2ZWMyKGxpZ2h0e1h9LnZTbGljZVJhbmdlc1tzbGljZUluZGV4XSksXG52aWV3RGlyZWN0aW9uVyxcbm5vcm1hbFcsXG52UG9zaXRpb25XLFxuc3VyZmFjZUFsYmVkbyxcbnJlZmxlY3Rpdml0eU91dFxuI2lmZGVmIElSSURFU0NFTkNFXG4saXJpZGVzY2VuY2VJbnRlbnNpdHlcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuLHN1YlN1cmZhY2VPdXRcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuLEFBUm91Z2huZXNzRmFjdG9ycy54XG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuLGFuaXNvdHJvcGljT3V0XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuLHNoZWVuT3V0XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbixjbGVhcmNvYXRPdXRcbiNlbmRpZlxuKTt9XG4jZWxpZiBkZWZpbmVkKFBCUilcbiNpZmRlZiBTUE9UTElHSFR7WH1cbnByZUluZm89Y29tcHV0ZVBvaW50QW5kU3BvdFByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsdlBvc2l0aW9uVyk7XG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG5wcmVJbmZvPWNvbXB1dGVQb2ludEFuZFNwb3RQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHZQb3NpdGlvblcpO1xuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG5wcmVJbmZvPWNvbXB1dGVIZW1pc3BoZXJpY1ByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcpO1xuI2VsaWYgZGVmaW5lZChESVJMSUdIVHtYfSlcbnByZUluZm89Y29tcHV0ZURpcmVjdGlvbmFsUHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyk7XG4jZWxpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbnByZUluZm89Y29tcHV0ZUFyZWFQcmVMaWdodGluZ0luZm8oYXJlYUxpZ2h0c0xUQzFTYW1wbGVyLGFyZWFMaWdodHNMVEMyU2FtcGxlcix2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YSxsaWdodHtYfS52TGlnaHRXaWR0aC54eXosbGlnaHR7WH0udkxpZ2h0SGVpZ2h0Lnh5eixyb3VnaG5lc3MpO1xuI2VuZGlmXG5wcmVJbmZvLk5kb3RWPU5kb3RWO1xuI2lmZGVmIFNQT1RMSUdIVHtYfVxuI2lmZGVmIExJR0hUX0ZBTExPRkZfR0xURntYfVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfR0xURihwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGllc0xpZ2h0VGV4dHVyZXtYfSk7XG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0dMVEYobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi56LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYudyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9QSFlTSUNBTHtYfSlcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1BoeXNpY2FsKHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9QaHlzaWNhbChsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9TVEFOREFSRHtYfSlcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKHByZUluZm8ubGlnaHRPZmZzZXQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9KTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfU3RhbmRhcmQobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLncsbGlnaHR7WH0udkxpZ2h0RGF0YS53KTtcbiNlbmRpZlxuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmKHByZUluZm8ubGlnaHRPZmZzZXQscHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9KTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmYobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLncsbGlnaHR7WH0udkxpZ2h0RGF0YS53LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueixsaWdodHtYfS52TGlnaHRGYWxsb2ZmLncpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbiNpZmRlZiBMSUdIVF9GQUxMT0ZGX0dMVEZ7WH1cbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX0dMVEYocHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnkpO1xuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1BIWVNJQ0FMe1h9KVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfUGh5c2ljYWwocHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCk7XG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfU1RBTkRBUkR7WH0pXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9TdGFuZGFyZChwcmVJbmZvLmxpZ2h0T2Zmc2V0LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCk7XG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYocHJlSW5mby5saWdodE9mZnNldCxwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnkpO1xuI2VuZGlmXG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbj0xLjA7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKEhFTUlMSUdIVHtYfSlcbnByZUluZm8ucm91Z2huZXNzPXJvdWdobmVzcztcbiNlbGlmIGRlZmluZWQoQVJFQUxJR0hUe1h9KSAmJiBkZWZpbmVkKEFSRUFMSUdIVFVTRUQpICYmIGRlZmluZWQoQVJFQUxJR0hUU1VQUE9SVEVEKVxucHJlSW5mby5yb3VnaG5lc3M9cm91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMocm91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxucHJlSW5mby5kaWZmdXNlUm91Z2huZXNzPWRpZmZ1c2VSb3VnaG5lc3M7cHJlSW5mby5zdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG87XG4jaWZkZWYgSVJJREVTQ0VOQ0VcbnByZUluZm8uaXJpZGVzY2VuY2VJbnRlbnNpdHk9aXJpZGVzY2VuY2VJbnRlbnNpdHk7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbj12ZWMzKDAuMCk7XG4jZW5kaWZcbiNpZmRlZiBIRU1JTElHSFR7WH1cbmluZm8uZGlmZnVzZT1jb21wdXRlSGVtaXNwaGVyaWNEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRHcm91bmQpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZUFyZWFEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYik7XG4jZWxpZiBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWSlcbiNpZm5kZWYgU1NfVFJBTlNMVUNFTkNZX0xFR0FDWVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYikqKDEuMC1zdWJTdXJmYWNlT3V0LnRyYW5zbHVjZW5jeUludGVuc2l0eSk7aW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uPWNvbXB1dGVEaWZmdXNlVHJhbnNtaXR0ZWRMaWdodGluZyhwcmVJbmZvLGRpZmZ1c2V7WH0ucmdiLHN1YlN1cmZhY2VPdXQudHJhbnNtaXR0YW5jZSk7IFxuI2Vsc2VcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZVRyYW5zbWl0dGVkTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYixzdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2UpO1xuI2VuZGlmXG4jZWxzZVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYik7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbmluZm8uc3BlY3VsYXI9Y29tcHV0ZUFyZWFTcGVjdWxhckxpZ2h0aW5nKHByZUluZm8sbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTApO1xuI2Vsc2VcbiNpZiAoQ09ORFVDVE9SX1NQRUNVTEFSX01PREVMPT1DT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUilcbnt2ZWMzIG1ldGFsRnJlc25lbD1yZWZsZWN0aXZpdHlPdXQuc3BlY3VsYXJXZWlnaHQqZ2V0RjgyU3BlY3VsYXIocHJlSW5mby5WZG90SCxjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwLHJlZmxlY3Rpdml0eU91dC5yb3VnaG5lc3MpO3ZlYzMgZGllbGVjdHJpY0ZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1gocHJlSW5mby5WZG90SCxyZWZsZWN0aXZpdHlPdXQuZGllbGVjdHJpY0NvbG9yRjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTApO2NvbG9yZWRGcmVzbmVsPW1peChkaWVsZWN0cmljRnJlc25lbCxtZXRhbEZyZXNuZWwscmVmbGVjdGl2aXR5T3V0Lm1ldGFsbGljKTt9XG4jZWxzZVxuY29sb3JlZEZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1gocHJlSW5mby5WZG90SCxjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwKTtcbiNlbmRpZlxuI2lmbmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxue2Zsb2F0IE5kb3RIPWRvdChub3JtYWxXLHByZUluZm8uSCk7dmVjMyBmcmVzbmVsPWZyZXNuZWxTY2hsaWNrR0dYKE5kb3RILHZlYzMocmVmbGVjdGFuY2VGMCksc3BlY3VsYXJFbnZpcm9ubWVudFI5MCk7aW5mby5kaWZmdXNlKj0odmVjMygxLjApLWZyZXNuZWwpO31cbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG5pbmZvLnNwZWN1bGFyPWNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlSW5mbyx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljVGFuZ2VudCxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY0JpdGFuZ2VudCxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3B5LGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAsc3BlY3VsYXJFbnZpcm9ubWVudFI5MCxBQVJvdWdobmVzc0ZhY3RvcnMueCxkaWZmdXNle1h9LnJnYik7XG4jZWxzZVxuaW5mby5zcGVjdWxhcj1jb21wdXRlU3BlY3VsYXJMaWdodGluZyhwcmVJbmZvLG5vcm1hbFcsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxjb2xvcmVkRnJlc25lbCxBQVJvdWdobmVzc0ZhY3RvcnMueCxkaWZmdXNle1h9LnJnYik7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZuZGVmIEFSRUFMSUdIVHtYfVxuI2lmZGVmIFNIRUVOXG4jaWZkZWYgU0hFRU5fTElOS1dJVEhBTEJFRE9cbnByZUluZm8ucm91Z2huZXNzPXNoZWVuT3V0LnNoZWVuSW50ZW5zaXR5O1xuI2Vsc2VcbiNpZmRlZiBIRU1JTElHSFR7WH1cbnByZUluZm8ucm91Z2huZXNzPXNoZWVuT3V0LnNoZWVuUm91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoc2hlZW5PdXQuc2hlZW5Sb3VnaG5lc3MsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIuYSxwcmVJbmZvLmxpZ2h0RGlzdGFuY2UpO1xuI2VuZGlmXG4jZW5kaWZcbmluZm8uc2hlZW49Y29tcHV0ZVNoZWVuTGlnaHRpbmcocHJlSW5mbyxub3JtYWxXLHNoZWVuT3V0LnNoZWVuQ29sb3Isc3BlY3VsYXJFbnZpcm9ubWVudFI5MCxBQVJvdWdobmVzc0ZhY3RvcnMueCxkaWZmdXNle1h9LnJnYik7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbiNpZmRlZiBIRU1JTElHSFR7WH1cbnByZUluZm8ucm91Z2huZXNzPWNsZWFyY29hdE91dC5jbGVhckNvYXRSb3VnaG5lc3M7XG4jZWxzZVxucHJlSW5mby5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhjbGVhcmNvYXRPdXQuY2xlYXJDb2F0Um91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxuaW5mby5jbGVhckNvYXQ9Y29tcHV0ZUNsZWFyQ29hdExpZ2h0aW5nKHByZUluZm8sY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5vcm1hbFcsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdEFBUm91Z2huZXNzRmFjdG9ycy54LGNsZWFyY29hdE91dC5jbGVhckNvYXRJbnRlbnNpdHksZGlmZnVzZXtYfS5yZ2IpO1xuI2lmZGVmIENMRUFSQ09BVF9USU5UXG5hYnNvcnB0aW9uPWNvbXB1dGVDbGVhckNvYXRMaWdodGluZ0Fic29ycHRpb24oY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5kb3RWUmVmcmFjdCxwcmVJbmZvLkwsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5vcm1hbFcsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdENvbG9yLGNsZWFyY29hdE91dC5jbGVhckNvYXRUaGlja25lc3MsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdEludGVuc2l0eSk7aW5mby5kaWZmdXNlKj1hYnNvcnB0aW9uO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuaW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uKj1hYnNvcnB0aW9uO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5pbmZvLnNwZWN1bGFyKj1hYnNvcnB0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbmluZm8uZGlmZnVzZSo9aW5mby5jbGVhckNvYXQudztcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuaW5mby5zcGVjdWxhcio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5pbmZvLnNoZWVuKj1pbmZvLmNsZWFyQ29hdC53O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBTUE9UTElHSFR7WH1cbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbmluZm89Y29tcHV0ZUlFU1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixkaWZmdXNle1h9LmEsZ2xvc3NpbmVzcyxpZXNMaWdodFRleHR1cmV7WH0pO1xuI2Vsc2VcbmluZm89Y29tcHV0ZVNwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixkaWZmdXNle1h9LmEsZ2xvc3NpbmVzcyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxuaW5mbz1jb21wdXRlSGVtaXNwaGVyaWNMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGxpZ2h0e1h9LnZMaWdodEdyb3VuZCxnbG9zc2luZXNzKTtcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSkgfHwgZGVmaW5lZChESVJMSUdIVHtYfSlcbmluZm89Y29tcHV0ZUxpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsbGlnaHR7WH0udkxpZ2h0RGF0YSxkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsZGlmZnVzZXtYfS5hLGdsb3NzaW5lc3MpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5pbmZvPWNvbXB1dGVBcmVhTGlnaHRpbmcoYXJlYUxpZ2h0c0xUQzFTYW1wbGVyLGFyZWFMaWdodHNMVEMyU2FtcGxlcix2aWV3RGlyZWN0aW9uVyxub3JtYWxXLHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosbGlnaHR7WH0udkxpZ2h0V2lkdGgucmdiLGxpZ2h0e1h9LnZMaWdodEhlaWdodC5yZ2IsZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLFxuI2lmZGVmIEFSRUFMSUdIVE5PUk9VR0hUTkVTU1xuMC41XG4jZWxzZVxudlJlZmxlY3Rpb25JbmZvcy55XG4jZW5kaWZcbik7XG4jZWxpZiBkZWZpbmVkKENMVVNUTElHSFR7WH0pICYmIENMVVNUTElHSFRfQkFUQ0g+MFxue2ludCBzbGljZUluZGV4PW1pbihnZXRDbHVzdGVyZWRTbGljZUluZGV4KGxpZ2h0e1h9LnZTbGljZURhdGEsdlZpZXdEZXB0aCksQ0xVU1RMSUdIVF9TTElDRVMtMSk7aW5mbz1jb21wdXRlQ2x1c3RlcmVkTGlnaHRpbmcobGlnaHREYXRhVGV4dHVyZXtYfSx0aWxlTWFza1RleHR1cmV7WH0sdmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLGl2ZWMyKGxpZ2h0e1h9LnZTbGljZVJhbmdlc1tzbGljZUluZGV4XSksZ2xvc3NpbmVzcyk7fVxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBQUk9KRUNURURMSUdIVFRFWFRVUkV7WH1cbmluZm8uZGlmZnVzZSo9Y29tcHV0ZVByb2plY3Rpb25UZXh0dXJlRGlmZnVzZUxpZ2h0aW5nKHByb2plY3Rpb25MaWdodFRleHR1cmV7WH0sdGV4dHVyZVByb2plY3Rpb25NYXRyaXh7WH0sdlBvc2l0aW9uVyk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTXtYfVxuZm9yIChpbnQgaT0wOyBpPFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfTsgaSsrKVxue1xuI2lmZGVmIFNIQURPV0NTTV9SSUdIVEhBTkRFRHtYfVxuZGlmZntYfT12aWV3RnJ1c3R1bVp7WH1baV0rdlBvc2l0aW9uRnJvbUNhbWVyYXtYfS56O1xuI2Vsc2VcbmRpZmZ7WH09dmlld0ZydXN0dW1ae1h9W2ldLXZQb3NpdGlvbkZyb21DYW1lcmF7WH0uejtcbiNlbmRpZlxuaWYgKGRpZmZ7WH0+PTAuKSB7aW5kZXh7WH09aTticmVhazt9fVxuI2lmZGVmIFNIQURPV0NTTVVTRVNIQURPV01BWFp7WH1cbmlmIChpbmRleHtYfT49MClcbiNlbmRpZlxue1xuI2lmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjEoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YzKGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55eixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjUoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMTYoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53LGxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sZGVwdGhDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxwZW51bWJyYURhcmtuZXNze1h9KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1MzMihmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsbGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxkZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1M2NChmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsbGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxkZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2VuZGlmXG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dDU00oZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNpZmRlZiBTSEFET1dDU01ERUJVR3tYfVxuc2hhZG93RGVidWd7WH09dmVjMyhzaGFkb3cpKnZDYXNjYWRlQ29sb3JzTXVsdGlwbGllcntYfVtpbmRleHtYfV07XG4jZW5kaWZcbiNpZm5kZWYgU0hBRE9XQ1NNTk9CTEVORHtYfVxuZmxvYXQgZnJ1c3R1bUxlbmd0aD1mcnVzdHVtTGVuZ3Roc3tYfVtpbmRleHtYfV07ZmxvYXQgZGlmZlJhdGlvPWNsYW1wKGRpZmZ7WH0vZnJ1c3R1bUxlbmd0aCwwLiwxLikqY2FzY2FkZUJsZW5kRmFjdG9ye1h9O2lmIChpbmRleHtYfTwoU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9LTEpICYmIGRpZmZSYXRpbzwxLilcbntpbmRleHtYfSs9MTtmbG9hdCBuZXh0U2hhZG93PTAuO1xuI2lmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YxKGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjMoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxzZVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjUoZmxvYXQoaW5kZXh7WH0pLHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzE2KGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyxsaWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLGRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0scGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzMyKGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyxsaWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLGRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0scGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZWxzZVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1M2NChmbG9hdChpbmRleHtYfSksdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsbGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSxkZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2VuZGlmXG4jZWxzZVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93Q1NNKGZsb2F0KGluZGV4e1h9KSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG5zaGFkb3c9bWl4KG5leHRTaGFkb3csc2hhZG93LGRpZmZSYXRpbyk7XG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbnNoYWRvd0RlYnVne1h9PW1peCh2ZWMzKG5leHRTaGFkb3cpKnZDYXNjYWRlQ29sb3JzTXVsdGlwbGllcntYfVtpbmRleHtYfV0sc2hhZG93RGVidWd7WH0sZGlmZlJhdGlvKTtcbiNlbmRpZlxufVxuI2VuZGlmXG59XG4jZWxpZiBkZWZpbmVkKFNIQURPV0NMT1NFRVNNe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENsb3NlRVNNQ3ViZSh2UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEueHl6LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LmRlcHRoVmFsdWVzKTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDbG9zZUVTTSh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFNIQURPV0VTTXtYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhFU01DdWJlKHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aEVTTSh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFNIQURPV1BPSVNTT057WH0pXG4jaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUG9pc3NvblNhbXBsaW5nQ3ViZSh2UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEueHl6LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LmRlcHRoVmFsdWVzKTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmcodlBvc2l0aW9uRnJvbUxpZ2h0e1h9LHZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG4jaWYgZGVmaW5lZChTSEFET1dMT1dRVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENGMSh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBDRjModlBvc2l0aW9uRnJvbUxpZ2h0e1h9LHZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENGNSh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBDU1MxNih2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LGRlcHRoVGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENTUzMyKHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENTUzY0KHZQb3NpdGlvbkZyb21MaWdodHtYfSx2RGVwdGhNZXRyaWN7WH0sZGVwdGhUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbHNlXG4jaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dDdWJlKHZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosc2hhZG93VGV4dHVyZXtYfSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LmRlcHRoVmFsdWVzKTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvdyh2UG9zaXRpb25Gcm9tTGlnaHR7WH0sdkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hBRE9XT05MWVxuI2lmbmRlZiBTSEFET1dJTlVTRVxuI2RlZmluZSBTSEFET1dJTlVTRVxuI2VuZGlmXG5nbG9iYWxTaGFkb3crPXNoYWRvdztzaGFkb3dMaWdodENvdW50Kz0xLjA7XG4jZW5kaWZcbiNlbHNlXG5zaGFkb3c9MS47XG4jZW5kaWZcbmFnZ1NoYWRvdys9c2hhZG93O251bUxpZ2h0cys9MS4wO1xuI2lmbmRlZiBTSEFET1dPTkxZXG4jaWZkZWYgQ1VTVE9NVVNFUkxJR0hUSU5HXG5kaWZmdXNlQmFzZSs9Y29tcHV0ZUN1c3RvbURpZmZ1c2VMaWdodGluZyhpbmZvLGRpZmZ1c2VCYXNlLHNoYWRvdyk7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5zcGVjdWxhckJhc2UrPWNvbXB1dGVDdXN0b21TcGVjdWxhckxpZ2h0aW5nKGluZm8sc3BlY3VsYXJCYXNlLHNoYWRvdyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoTElHSFRNQVApICYmIGRlZmluZWQoTElHSFRNQVBFWENMVURFRHtYfSlcbmRpZmZ1c2VCYXNlKz1saWdodG1hcENvbG9yLnJnYipzaGFkb3c7XG4jaWZkZWYgU1BFQ1VMQVJURVJNXG4jaWZuZGVmIExJR0hUTUFQTk9TUEVDVUxBUntYfVxuc3BlY3VsYXJCYXNlKz1pbmZvLnNwZWN1bGFyKnNoYWRvdypsaWdodG1hcENvbG9yLnJnYjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaWZuZGVmIExJR0hUTUFQTk9TUEVDVUxBUntYfVxuY2xlYXJDb2F0QmFzZSs9aW5mby5jbGVhckNvYXQucmdiKnNoYWRvdypsaWdodG1hcENvbG9yLnJnYjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbiNpZm5kZWYgTElHSFRNQVBOT1NQRUNVTEFSe1h9XG5zaGVlbkJhc2UrPWluZm8uc2hlZW4ucmdiKnNoYWRvdztcbiNlbmRpZlxuI2VuZGlmXG4jZWxzZVxuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG5kaWZmdXNlQmFzZSs9aW5mby5kaWZmdXNlKnNoYWRvd0RlYnVne1h9O1xuI2Vsc2VcbmRpZmZ1c2VCYXNlKz1pbmZvLmRpZmZ1c2Uqc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5kaWZmdXNlVHJhbnNtaXNzaW9uQmFzZSs9aW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uKnNoYWRvdztcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuc3BlY3VsYXJCYXNlKz1pbmZvLnNwZWN1bGFyKnNoYWRvdztcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuY2xlYXJDb2F0QmFzZSs9aW5mby5jbGVhckNvYXQucmdiKnNoYWRvdztcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5zaGVlbkJhc2UrPWluZm8uc2hlZW4ucmdiKnNoYWRvdztcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuSW5jbHVkZXNTaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodEZyYWdtZW50ID0geyBuYW1lLCBzaGFkZXIgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=