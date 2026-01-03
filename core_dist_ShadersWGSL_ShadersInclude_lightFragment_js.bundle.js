"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_ShadersWGSL_ShadersInclude_lightFragment_js"],{

/***/ "../core/dist/ShadersWGSL/ShadersInclude/lightFragment.js":
/*!****************************************************************!*\
  !*** ../core/dist/ShadersWGSL/ShadersInclude/lightFragment.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFragmentWGSL: () => (/* binding */ lightFragmentWGSL)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "lightFragment";
const shader = `#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
var diffuse{X}: vec4f=light{X}.vLightDiffuse;
#define CUSTOM_LIGHT{X}_COLOR 
#if defined(PBR) && defined(CLUSTLIGHT{X})
{let sliceIndex=min(getClusteredSliceIndex(light{X}.vSliceData,fragmentInputs.vViewDepth),CLUSTLIGHT_SLICES-1);info=computeClusteredLighting(
lightDataTexture{X},
&tileMaskBuffer{X},
light{X}.vLightData,
vec2u(light{X}.vSliceRanges[sliceIndex].xy),
viewDirectionW,
normalW,
fragmentInputs.vPositionW,
surfaceAlbedo,
reflectivityOut,
#ifdef IRIDESCENCE
iridescenceIntensity,
#endif
#ifdef SS_TRANSLUCENCY
subSurfaceOut,
#endif
#ifdef SPECULARTERM
AARoughnessFactors.x,
#endif
#ifdef ANISOTROPIC
anisotropicOut,
#endif
#ifdef SHEEN
sheenOut,
#endif
#ifdef CLEARCOAT
clearcoatOut,
#endif
);}
#elif defined(PBR)
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,fragmentInputs.vPositionW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,fragmentInputs.vPositionW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
preInfo=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC1SamplerSampler,areaLightsLTC2Sampler,areaLightsLTC2SamplerSampler,viewDirectionW,normalW,fragmentInputs.vPositionW,light{X}.vLightData.xyz,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,roughness);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X},iesLightTexture{X}Sampler);
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
info.diffuseTransmission=vec3f(0.0);
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
{let metalFresnel: vec3f=vec3f(reflectivityOut.specularWeight)*getF82Specular(preInfo.VdotH,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);let dielectricFresnel: vec3f=fresnelSchlickGGXVec3(preInfo.VdotH,reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90);coloredFresnel=mix(dielectricFresnel,metalFresnel,reflectivityOut.metallic);}
#else
coloredFresnel=fresnelSchlickGGXVec3(preInfo.VdotH,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#endif
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
{let NdotH: f32=dot(normalW,preInfo.H);let fresnel: vec3f=fresnelSchlickGGXVec3(NdotH,vec3f(reflectanceF0),specularEnvironmentR90);info.diffuse*=(vec3f(1.0)-fresnel);}
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
info=computeIESSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness,iesLightTexture{X},iesLightTexture{X}Sampler);
#else
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#endif
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#elif define(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
info=computeAreaLighting(areaLightsLTC1Sampler,areaLightsLTC1SamplerSampler,areaLightsLTC2Sampler,areaLightsLTC2SamplerSampler,viewDirectionW,normalW,fragmentInputs.vPositionW,light{X}.vLightData.xyz,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,
#ifdef AREALIGHTNOROUGHTNESS
0.5
#else
uniforms.vReflectionInfos.y
#endif
);
#elif defined(CLUSTLIGHT{X})
{let sliceIndex=min(getClusteredSliceIndex(light{X}.vSliceData,fragmentInputs.vViewDepth),CLUSTLIGHT_SLICES-1);info=computeClusteredLighting(lightDataTexture{X},&tileMaskBuffer{X},viewDirectionW,normalW,light{X}.vLightData,vec2u(light{X}.vSliceRanges[sliceIndex].xy),glossiness);}
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},projectionLightTexture{X}Sampler,uniforms.textureProjectionMatrix{X},fragmentInputs.vPositionW);
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSMDEBUG{X}
var shadowDebug{X}: vec3f;
#endif
#ifdef SHADOWCSM{X}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
var index{X}: i32=-1;
#else
var index{X}: i32=SHADOWCSMNUM_CASCADES{X}-1;
#endif
var diff{X}: f32=0.;vPositionFromLight{X}[0]=fragmentInputs.vPositionFromLight{X}_0;vPositionFromLight{X}[1]=fragmentInputs.vPositionFromLight{X}_1;vPositionFromLight{X}[2]=fragmentInputs.vPositionFromLight{X}_2;vPositionFromLight{X}[3]=fragmentInputs.vPositionFromLight{X}_3;vDepthMetric{X}[0]=fragmentInputs.vDepthMetric{X}_0;vDepthMetric{X}[1]=fragmentInputs.vDepthMetric{X}_1;vDepthMetric{X}[2]=fragmentInputs.vDepthMetric{X}_2;vDepthMetric{X}[3]=fragmentInputs.vDepthMetric{X}_3;for (var i:i32=0; i<SHADOWCSMNUM_CASCADES{X}; i++)
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=uniforms.viewFrustumZ{X}[i]+fragmentInputs.vPositionFromCamera{X}.z;
#else
diff{X}=uniforms.viewFrustumZ{X}[i]-fragmentInputs.vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {index{X}=i;break;}}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3f(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
var frustumLength:f32=uniforms.frustumLengths{X}[index{X}];var diffRatio:f32=clamp(diff{X}/frustumLength,0.,1.)*uniforms.cascadeBlendFactor{X};if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{index{X}+=1;var nextShadow: f32=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],,shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
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
shadow=computeShadowWithCloseESMCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
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
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.IncludesShadersStoreWGSL[name] = shader;
}
/** @internal */
const lightFragmentWGSL = { name, shader };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2xpZ2h0RnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnNXR1NML1NoYWRlcnNJbmNsdWRlL2xpZ2h0RnJhZ21lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImxpZ2h0RnJhZ21lbnRcIjtcbmNvbnN0IHNoYWRlciA9IGAjaWZkZWYgTElHSFR7WH1cbiNpZiBkZWZpbmVkKFNIQURPV09OTFkpIHx8IGRlZmluZWQoTElHSFRNQVApICYmIGRlZmluZWQoTElHSFRNQVBFWENMVURFRHtYfSkgJiYgZGVmaW5lZChMSUdIVE1BUE5PU1BFQ1VMQVJ7WH0pXG4jZWxzZVxudmFyIGRpZmZ1c2V7WH06IHZlYzRmPWxpZ2h0e1h9LnZMaWdodERpZmZ1c2U7XG4jZGVmaW5lIENVU1RPTV9MSUdIVHtYfV9DT0xPUiBcbiNpZiBkZWZpbmVkKFBCUikgJiYgZGVmaW5lZChDTFVTVExJR0hUe1h9KVxue2xldCBzbGljZUluZGV4PW1pbihnZXRDbHVzdGVyZWRTbGljZUluZGV4KGxpZ2h0e1h9LnZTbGljZURhdGEsZnJhZ21lbnRJbnB1dHMudlZpZXdEZXB0aCksQ0xVU1RMSUdIVF9TTElDRVMtMSk7aW5mbz1jb21wdXRlQ2x1c3RlcmVkTGlnaHRpbmcoXG5saWdodERhdGFUZXh0dXJle1h9LFxuJnRpbGVNYXNrQnVmZmVye1h9LFxubGlnaHR7WH0udkxpZ2h0RGF0YSxcbnZlYzJ1KGxpZ2h0e1h9LnZTbGljZVJhbmdlc1tzbGljZUluZGV4XS54eSksXG52aWV3RGlyZWN0aW9uVyxcbm5vcm1hbFcsXG5mcmFnbWVudElucHV0cy52UG9zaXRpb25XLFxuc3VyZmFjZUFsYmVkbyxcbnJlZmxlY3Rpdml0eU91dCxcbiNpZmRlZiBJUklERVNDRU5DRVxuaXJpZGVzY2VuY2VJbnRlbnNpdHksXG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbnN1YlN1cmZhY2VPdXQsXG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbkFBUm91Z2huZXNzRmFjdG9ycy54LFxuI2VuZGlmXG4jaWZkZWYgQU5JU09UUk9QSUNcbmFuaXNvdHJvcGljT3V0LFxuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnNoZWVuT3V0LFxuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5jbGVhcmNvYXRPdXQsXG4jZW5kaWZcbik7fVxuI2VsaWYgZGVmaW5lZChQQlIpXG4jaWZkZWYgU1BPVExJR0hUe1h9XG5wcmVJbmZvPWNvbXB1dGVQb2ludEFuZFNwb3RQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcpO1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxucHJlSW5mbz1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyxmcmFnbWVudElucHV0cy52UG9zaXRpb25XKTtcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxucHJlSW5mbz1jb21wdXRlSGVtaXNwaGVyaWNQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtcbiNlbGlmIGRlZmluZWQoRElSTElHSFR7WH0pXG5wcmVJbmZvPWNvbXB1dGVEaXJlY3Rpb25hbFByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5wcmVJbmZvPWNvbXB1dGVBcmVhUHJlTGlnaHRpbmdJbmZvKGFyZWFMaWdodHNMVEMxU2FtcGxlcixhcmVhTGlnaHRzTFRDMVNhbXBsZXJTYW1wbGVyLGFyZWFMaWdodHNMVEMyU2FtcGxlcixhcmVhTGlnaHRzTFRDMlNhbXBsZXJTYW1wbGVyLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixsaWdodHtYfS52TGlnaHRXaWR0aC54eXosbGlnaHR7WH0udkxpZ2h0SGVpZ2h0Lnh5eixyb3VnaG5lc3MpO1xuI2VuZGlmXG5wcmVJbmZvLk5kb3RWPU5kb3RWO1xuI2lmZGVmIFNQT1RMSUdIVHtYfVxuI2lmZGVmIExJR0hUX0ZBTExPRkZfR0xURntYfVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfR0xURihwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGllc0xpZ2h0VGV4dHVyZXtYfSxpZXNMaWdodFRleHR1cmV7WH1TYW1wbGVyKTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfR0xURihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnosbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1BIWVNJQ0FMe1h9KVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfUGh5c2ljYWwocHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGllc0xpZ2h0VGV4dHVyZXtYfSxpZXNMaWdodFRleHR1cmV7WH1TYW1wbGVyKTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfUGh5c2ljYWwobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfU1RBTkRBUkR7WH0pXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9TdGFuZGFyZChwcmVJbmZvLmxpZ2h0T2Zmc2V0LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCk7XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfSUVTKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGllc0xpZ2h0VGV4dHVyZXtYfSxpZXNMaWdodFRleHR1cmV7WH1TYW1wbGVyKTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uKj1jb21wdXRlRGlyZWN0aW9uYWxMaWdodEZhbGxvZmZfU3RhbmRhcmQobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLncsbGlnaHR7WH0udkxpZ2h0RGF0YS53KTtcbiNlbmRpZlxuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmKHByZUluZm8ubGlnaHRPZmZzZXQscHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9LGllc0xpZ2h0VGV4dHVyZXtYfVNhbXBsZXIpO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZihsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi56LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYudyk7XG4jZW5kaWZcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KVxuI2lmZGVmIExJR0hUX0ZBTExPRkZfR0xURntYfVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfR0xURihwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfUEhZU0lDQUx7WH0pXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9TVEFOREFSRHtYfSlcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKHByZUluZm8ubGlnaHRPZmZzZXQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54KTtcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZihwcmVJbmZvLmxpZ2h0T2Zmc2V0LHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54LGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueSk7XG4jZW5kaWZcbiNlbHNlXG5wcmVJbmZvLmF0dGVudWF0aW9uPTEuMDtcbiNlbmRpZlxuI2lmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxucHJlSW5mby5yb3VnaG5lc3M9cm91Z2huZXNzO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5wcmVJbmZvLnJvdWdobmVzcz1yb3VnaG5lc3M7XG4jZWxzZVxucHJlSW5mby5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhyb3VnaG5lc3MsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIuYSxwcmVJbmZvLmxpZ2h0RGlzdGFuY2UpO1xuI2VuZGlmXG5wcmVJbmZvLmRpZmZ1c2VSb3VnaG5lc3M9ZGlmZnVzZVJvdWdobmVzcztwcmVJbmZvLnN1cmZhY2VBbGJlZG89c3VyZmFjZUFsYmVkbztcbiNpZmRlZiBJUklERVNDRU5DRVxucHJlSW5mby5pcmlkZXNjZW5jZUludGVuc2l0eT1pcmlkZXNjZW5jZUludGVuc2l0eTtcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuaW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uPXZlYzNmKDAuMCk7XG4jZW5kaWZcbiNpZmRlZiBIRU1JTElHSFR7WH1cbmluZm8uZGlmZnVzZT1jb21wdXRlSGVtaXNwaGVyaWNEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRHcm91bmQpO1xuI2VsaWYgZGVmaW5lZChBUkVBTElHSFR7WH0pICYmIGRlZmluZWQoQVJFQUxJR0hUVVNFRCkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZUFyZWFEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYik7XG4jZWxpZiBkZWZpbmVkKFNTX1RSQU5TTFVDRU5DWSlcbiNpZm5kZWYgU1NfVFJBTlNMVUNFTkNZX0xFR0FDWVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYikqKDEuMC1zdWJTdXJmYWNlT3V0LnRyYW5zbHVjZW5jeUludGVuc2l0eSk7aW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uPWNvbXB1dGVEaWZmdXNlVHJhbnNtaXR0ZWRMaWdodGluZyhwcmVJbmZvLGRpZmZ1c2V7WH0ucmdiLHN1YlN1cmZhY2VPdXQudHJhbnNtaXR0YW5jZSk7IFxuI2Vsc2VcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZVRyYW5zbWl0dGVkTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYixzdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2UpO1xuI2VuZGlmXG4jZWxzZVxuaW5mby5kaWZmdXNlPWNvbXB1dGVEaWZmdXNlTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYik7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZiBkZWZpbmVkKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRVU0VEKSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbmluZm8uc3BlY3VsYXI9Y29tcHV0ZUFyZWFTcGVjdWxhckxpZ2h0aW5nKHByZUluZm8sbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTApO1xuI2Vsc2VcbiNpZiAoQ09ORFVDVE9SX1NQRUNVTEFSX01PREVMPT1DT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUilcbntsZXQgbWV0YWxGcmVzbmVsOiB2ZWMzZj12ZWMzZihyZWZsZWN0aXZpdHlPdXQuc3BlY3VsYXJXZWlnaHQpKmdldEY4MlNwZWN1bGFyKHByZUluZm8uVmRvdEgsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCxyZWZsZWN0aXZpdHlPdXQucm91Z2huZXNzKTtsZXQgZGllbGVjdHJpY0ZyZXNuZWw6IHZlYzNmPWZyZXNuZWxTY2hsaWNrR0dYVmVjMyhwcmVJbmZvLlZkb3RILHJlZmxlY3Rpdml0eU91dC5kaWVsZWN0cmljQ29sb3JGMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCk7Y29sb3JlZEZyZXNuZWw9bWl4KGRpZWxlY3RyaWNGcmVzbmVsLG1ldGFsRnJlc25lbCxyZWZsZWN0aXZpdHlPdXQubWV0YWxsaWMpO31cbiNlbHNlXG5jb2xvcmVkRnJlc25lbD1mcmVzbmVsU2NobGlja0dHWFZlYzMocHJlSW5mby5WZG90SCxjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwKTtcbiNlbmRpZlxuI2lmbmRlZiBMRUdBQ1lfU1BFQ1VMQVJfRU5FUkdZX0NPTlNFUlZBVElPTlxue2xldCBOZG90SDogZjMyPWRvdChub3JtYWxXLHByZUluZm8uSCk7bGV0IGZyZXNuZWw6IHZlYzNmPWZyZXNuZWxTY2hsaWNrR0dYVmVjMyhOZG90SCx2ZWMzZihyZWZsZWN0YW5jZUYwKSxzcGVjdWxhckVudmlyb25tZW50UjkwKTtpbmZvLmRpZmZ1c2UqPSh2ZWMzZigxLjApLWZyZXNuZWwpO31cbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG5pbmZvLnNwZWN1bGFyPWNvbXB1dGVBbmlzb3Ryb3BpY1NwZWN1bGFyTGlnaHRpbmcocHJlSW5mbyx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGFuaXNvdHJvcGljT3V0LmFuaXNvdHJvcGljVGFuZ2VudCxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY0JpdGFuZ2VudCxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3B5LGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAsc3BlY3VsYXJFbnZpcm9ubWVudFI5MCxBQVJvdWdobmVzc0ZhY3RvcnMueCxkaWZmdXNle1h9LnJnYik7XG4jZWxzZVxuaW5mby5zcGVjdWxhcj1jb21wdXRlU3BlY3VsYXJMaWdodGluZyhwcmVJbmZvLG5vcm1hbFcsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxjb2xvcmVkRnJlc25lbCxBQVJvdWdobmVzc0ZhY3RvcnMueCxkaWZmdXNle1h9LnJnYik7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jaWZuZGVmIEFSRUFMSUdIVHtYfVxuI2lmZGVmIFNIRUVOXG4jaWZkZWYgU0hFRU5fTElOS1dJVEhBTEJFRE9cbnByZUluZm8ucm91Z2huZXNzPXNoZWVuT3V0LnNoZWVuSW50ZW5zaXR5O1xuI2Vsc2VcbiNpZmRlZiBIRU1JTElHSFR7WH1cbnByZUluZm8ucm91Z2huZXNzPXNoZWVuT3V0LnNoZWVuUm91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoc2hlZW5PdXQuc2hlZW5Sb3VnaG5lc3MsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIuYSxwcmVJbmZvLmxpZ2h0RGlzdGFuY2UpO1xuI2VuZGlmXG4jZW5kaWZcbmluZm8uc2hlZW49Y29tcHV0ZVNoZWVuTGlnaHRpbmcocHJlSW5mbyxub3JtYWxXLHNoZWVuT3V0LnNoZWVuQ29sb3Isc3BlY3VsYXJFbnZpcm9ubWVudFI5MCxBQVJvdWdobmVzc0ZhY3RvcnMueCxkaWZmdXNle1h9LnJnYik7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbiNpZmRlZiBIRU1JTElHSFR7WH1cbnByZUluZm8ucm91Z2huZXNzPWNsZWFyY29hdE91dC5jbGVhckNvYXRSb3VnaG5lc3M7XG4jZWxzZVxucHJlSW5mby5yb3VnaG5lc3M9YWRqdXN0Um91Z2huZXNzRnJvbUxpZ2h0UHJvcGVydGllcyhjbGVhcmNvYXRPdXQuY2xlYXJDb2F0Um91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxuaW5mby5jbGVhckNvYXQ9Y29tcHV0ZUNsZWFyQ29hdExpZ2h0aW5nKHByZUluZm8sY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5vcm1hbFcsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdEFBUm91Z2huZXNzRmFjdG9ycy54LGNsZWFyY29hdE91dC5jbGVhckNvYXRJbnRlbnNpdHksZGlmZnVzZXtYfS5yZ2IpO1xuI2lmZGVmIENMRUFSQ09BVF9USU5UXG5hYnNvcnB0aW9uPWNvbXB1dGVDbGVhckNvYXRMaWdodGluZ0Fic29ycHRpb24oY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5kb3RWUmVmcmFjdCxwcmVJbmZvLkwsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdE5vcm1hbFcsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdENvbG9yLGNsZWFyY29hdE91dC5jbGVhckNvYXRUaGlja25lc3MsY2xlYXJjb2F0T3V0LmNsZWFyQ29hdEludGVuc2l0eSk7aW5mby5kaWZmdXNlKj1hYnNvcnB0aW9uO1xuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuaW5mby5kaWZmdXNlVHJhbnNtaXNzaW9uKj1hYnNvcnB0aW9uO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5pbmZvLnNwZWN1bGFyKj1hYnNvcnB0aW9uO1xuI2VuZGlmXG4jZW5kaWZcbmluZm8uZGlmZnVzZSo9aW5mby5jbGVhckNvYXQudztcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuaW5mby5zcGVjdWxhcio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5pbmZvLnNoZWVuKj1pbmZvLmNsZWFyQ29hdC53O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBTUE9UTElHSFR7WH1cbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbmluZm89Y29tcHV0ZUlFU1Nwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixkaWZmdXNle1h9LmEsZ2xvc3NpbmVzcyxpZXNMaWdodFRleHR1cmV7WH0saWVzTGlnaHRUZXh0dXJle1h9U2FtcGxlcik7XG4jZWxzZVxuaW5mbz1jb21wdXRlU3BvdExpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsbGlnaHR7WH0udkxpZ2h0RGF0YSxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24sZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGRpZmZ1c2V7WH0uYSxnbG9zc2luZXNzKTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pXG5pbmZvPWNvbXB1dGVIZW1pc3BoZXJpY0xpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsbGlnaHR7WH0udkxpZ2h0RGF0YSxkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsbGlnaHR7WH0udkxpZ2h0R3JvdW5kLGdsb3NzaW5lc3MpO1xuI2VsaWYgZGVmaW5lZChQT0lOVExJR0hUe1h9KSB8fCBkZWZpbmVkKERJUkxJR0hUe1h9KVxuaW5mbz1jb21wdXRlTGlnaHRpbmcodmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixkaWZmdXNle1h9LmEsZ2xvc3NpbmVzcyk7XG4jZWxpZiBkZWZpbmUoQVJFQUxJR0hUe1h9KSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbmluZm89Y29tcHV0ZUFyZWFMaWdodGluZyhhcmVhTGlnaHRzTFRDMVNhbXBsZXIsYXJlYUxpZ2h0c0xUQzFTYW1wbGVyU2FtcGxlcixhcmVhTGlnaHRzTFRDMlNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyU2FtcGxlcix2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosbGlnaHR7WH0udkxpZ2h0V2lkdGgueHl6LGxpZ2h0e1h9LnZMaWdodEhlaWdodC54eXosZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLFxuI2lmZGVmIEFSRUFMSUdIVE5PUk9VR0hUTkVTU1xuMC41XG4jZWxzZVxudW5pZm9ybXMudlJlZmxlY3Rpb25JbmZvcy55XG4jZW5kaWZcbik7XG4jZWxpZiBkZWZpbmVkKENMVVNUTElHSFR7WH0pXG57bGV0IHNsaWNlSW5kZXg9bWluKGdldENsdXN0ZXJlZFNsaWNlSW5kZXgobGlnaHR7WH0udlNsaWNlRGF0YSxmcmFnbWVudElucHV0cy52Vmlld0RlcHRoKSxDTFVTVExJR0hUX1NMSUNFUy0xKTtpbmZvPWNvbXB1dGVDbHVzdGVyZWRMaWdodGluZyhsaWdodERhdGFUZXh0dXJle1h9LCZ0aWxlTWFza0J1ZmZlcntYfSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsdmVjMnUobGlnaHR7WH0udlNsaWNlUmFuZ2VzW3NsaWNlSW5kZXhdLnh5KSxnbG9zc2luZXNzKTt9XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFBST0pFQ1RFRExJR0hUVEVYVFVSRXtYfVxuaW5mby5kaWZmdXNlKj1jb21wdXRlUHJvamVjdGlvblRleHR1cmVEaWZmdXNlTGlnaHRpbmcocHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfSxwcm9qZWN0aW9uTGlnaHRUZXh0dXJle1h9U2FtcGxlcix1bmlmb3Jtcy50ZXh0dXJlUHJvamVjdGlvbk1hdHJpeHtYfSxmcmFnbWVudElucHV0cy52UG9zaXRpb25XKTtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgU0hBRE9Xe1h9XG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbnZhciBzaGFkb3dEZWJ1Z3tYfTogdmVjM2Y7XG4jZW5kaWZcbiNpZmRlZiBTSEFET1dDU017WH1cbiNpZmRlZiBTSEFET1dDU01VU0VTSEFET1dNQVhae1h9XG52YXIgaW5kZXh7WH06IGkzMj0tMTtcbiNlbHNlXG52YXIgaW5kZXh7WH06IGkzMj1TSEFET1dDU01OVU1fQ0FTQ0FERVN7WH0tMTtcbiNlbmRpZlxudmFyIGRpZmZ7WH06IGYzMj0wLjt2UG9zaXRpb25Gcm9tTGlnaHR7WH1bMF09ZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzA7dlBvc2l0aW9uRnJvbUxpZ2h0e1h9WzFdPWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8xO3ZQb3NpdGlvbkZyb21MaWdodHtYfVsyXT1mcmFnbWVudElucHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMjt2UG9zaXRpb25Gcm9tTGlnaHR7WH1bM109ZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzM7dkRlcHRoTWV0cmlje1h9WzBdPWZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfV8wO3ZEZXB0aE1ldHJpY3tYfVsxXT1mcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH1fMTt2RGVwdGhNZXRyaWN7WH1bMl09ZnJhZ21lbnRJbnB1dHMudkRlcHRoTWV0cmlje1h9XzI7dkRlcHRoTWV0cmlje1h9WzNdPWZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfV8zO2ZvciAodmFyIGk6aTMyPTA7IGk8U0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9OyBpKyspXG57XG4jaWZkZWYgU0hBRE9XQ1NNX1JJR0hUSEFOREVEe1h9XG5kaWZme1h9PXVuaWZvcm1zLnZpZXdGcnVzdHVtWntYfVtpXStmcmFnbWVudElucHV0cy52UG9zaXRpb25Gcm9tQ2FtZXJhe1h9Lno7XG4jZWxzZVxuZGlmZntYfT11bmlmb3Jtcy52aWV3RnJ1c3R1bVp7WH1baV0tZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUNhbWVyYXtYfS56O1xuI2VuZGlmXG5pZiAoZGlmZntYfT49MC4pIHtpbmRleHtYfT1pO2JyZWFrO319XG4jaWZkZWYgU0hBRE9XQ1NNVVNFU0hBRE9XTUFYWntYfVxuaWYgKGluZGV4e1h9Pj0wKVxuI2VuZGlmXG57XG4jaWYgZGVmaW5lZChTSEFET1dQQ0Z7WH0pXG4jaWYgZGVmaW5lZChTSEFET1dMT1dRVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMShpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMyhpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55eixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjUoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1MxNihpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LGRlcHRoVGV4dHVyZXtYfVNhbXBsZXIsc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53LHVuaWZvcm1zLmxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMuZGVwdGhDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5wZW51bWJyYURhcmtuZXNze1h9KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1MzMihpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LGRlcHRoVGV4dHVyZXtYfVNhbXBsZXIsc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53LHVuaWZvcm1zLmxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMuZGVwdGhDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5wZW51bWJyYURhcmtuZXNze1h9KTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTNjQoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxkZXB0aFRleHR1cmV7WH1TYW1wbGVyLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyx1bmlmb3Jtcy5saWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLmRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMucGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZW5kaWZcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd0NTTShpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbnNoYWRvd0RlYnVne1h9PXZlYzNmKHNoYWRvdykqdkNhc2NhZGVDb2xvcnNNdWx0aXBsaWVye1h9W2luZGV4e1h9XTtcbiNlbmRpZlxuI2lmbmRlZiBTSEFET1dDU01OT0JMRU5Ee1h9XG52YXIgZnJ1c3R1bUxlbmd0aDpmMzI9dW5pZm9ybXMuZnJ1c3R1bUxlbmd0aHN7WH1baW5kZXh7WH1dO3ZhciBkaWZmUmF0aW86ZjMyPWNsYW1wKGRpZmZ7WH0vZnJ1c3R1bUxlbmd0aCwwLiwxLikqdW5pZm9ybXMuY2FzY2FkZUJsZW5kRmFjdG9ye1h9O2lmIChpbmRleHtYfTwoU0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9LTEpICYmIGRpZmZSYXRpbzwxLilcbntpbmRleHtYfSs9MTt2YXIgbmV4dFNoYWRvdzogZjMyPTAuO1xuI2lmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YxKGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSwsc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ0YzKGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxzZVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjUoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQQ1NTe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMTYoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxkZXB0aFRleHR1cmV7WH1TYW1wbGVyLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyx1bmlmb3Jtcy5saWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLmRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMucGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzMyKGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sZGVwdGhUZXh0dXJle1h9U2FtcGxlcixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsdW5pZm9ybXMubGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5kZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLnBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2Vsc2Vcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTNjQoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxkZXB0aFRleHR1cmV7WH1TYW1wbGVyLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyx1bmlmb3Jtcy5saWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLmRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMucGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZW5kaWZcbiNlbHNlXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dDU00oaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuc2hhZG93PW1peChuZXh0U2hhZG93LHNoYWRvdyxkaWZmUmF0aW8pO1xuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG5zaGFkb3dEZWJ1Z3tYfT1taXgodmVjMyhuZXh0U2hhZG93KSp2Q2FzY2FkZUNvbG9yc011bHRpcGxpZXJ7WH1baW5kZXh7WH1dLHNoYWRvd0RlYnVne1h9LGRpZmZSYXRpbyk7XG4jZW5kaWZcbn1cbiNlbmRpZlxufVxuI2VsaWYgZGVmaW5lZChTSEFET1dDTE9TRUVTTXtYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDbG9zZUVTTUN1YmUoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5kZXB0aFZhbHVlcyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ2xvc2VFU00oZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dFU017WH0pXG4jaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoRVNNQ3ViZShmcmFnbWVudElucHV0cy52UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEueHl6LHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LmRlcHRoVmFsdWVzKTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhFU00oZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChTSEFET1dQT0lTU09Oe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBvaXNzb25TYW1wbGluZ0N1YmUoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5kZXB0aFZhbHVlcyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUG9pc3NvblNhbXBsaW5nKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBDRjEoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ0YzKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55eixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBDRjUoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ1NTMTYoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxkZXB0aFRleHR1cmV7WH0sZGVwdGhUZXh0dXJle1h9U2FtcGxlcixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENTUzMyKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sZGVwdGhUZXh0dXJle1h9LGRlcHRoVGV4dHVyZXtYfVNhbXBsZXIsc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ1NTNjQoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxkZXB0aFRleHR1cmV7WH0sZGVwdGhUZXh0dXJle1h9U2FtcGxlcixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxzZVxuI2lmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93Q3ViZShmcmFnbWVudElucHV0cy52UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEueHl6LHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5kZXB0aFZhbHVlcyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3coZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9LGZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIQURPV09OTFlcbiNpZm5kZWYgU0hBRE9XSU5VU0VcbiNkZWZpbmUgU0hBRE9XSU5VU0VcbiNlbmRpZlxuZ2xvYmFsU2hhZG93Kz1zaGFkb3c7c2hhZG93TGlnaHRDb3VudCs9MS4wO1xuI2VuZGlmXG4jZWxzZVxuc2hhZG93PTEuO1xuI2VuZGlmXG5hZ2dTaGFkb3crPXNoYWRvdztudW1MaWdodHMrPTEuMDtcbiNpZm5kZWYgU0hBRE9XT05MWVxuI2lmZGVmIENVU1RPTVVTRVJMSUdIVElOR1xuZGlmZnVzZUJhc2UrPWNvbXB1dGVDdXN0b21EaWZmdXNlTGlnaHRpbmcoaW5mbyxkaWZmdXNlQmFzZSxzaGFkb3cpO1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxuc3BlY3VsYXJCYXNlKz1jb21wdXRlQ3VzdG9tU3BlY3VsYXJMaWdodGluZyhpbmZvLHNwZWN1bGFyQmFzZSxzaGFkb3cpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKExJR0hUTUFQKSAmJiBkZWZpbmVkKExJR0hUTUFQRVhDTFVERUR7WH0pXG5kaWZmdXNlQmFzZSs9bGlnaHRtYXBDb2xvci5yZ2Iqc2hhZG93O1xuI2lmZGVmIFNQRUNVTEFSVEVSTVxuI2lmbmRlZiBMSUdIVE1BUE5PU1BFQ1VMQVJ7WH1cbnNwZWN1bGFyQmFzZSs9aW5mby5zcGVjdWxhcipzaGFkb3cqbGlnaHRtYXBDb2xvci5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuI2lmbmRlZiBMSUdIVE1BUE5PU1BFQ1VMQVJ7WH1cbmNsZWFyQ29hdEJhc2UrPWluZm8uY2xlYXJDb2F0LnJnYipzaGFkb3cqbGlnaHRtYXBDb2xvci5yZ2I7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG4jaWZuZGVmIExJR0hUTUFQTk9TUEVDVUxBUntYfVxuc2hlZW5CYXNlKz1pbmZvLnNoZWVuLnJnYipzaGFkb3c7XG4jZW5kaWZcbiNlbmRpZlxuI2Vsc2VcbiNpZmRlZiBTSEFET1dDU01ERUJVR3tYfVxuZGlmZnVzZUJhc2UrPWluZm8uZGlmZnVzZSpzaGFkb3dEZWJ1Z3tYfTtcbiNlbHNlXG5kaWZmdXNlQmFzZSs9aW5mby5kaWZmdXNlKnNoYWRvdztcbiNlbmRpZlxuI2lmZGVmIFNTX1RSQU5TTFVDRU5DWVxuZGlmZnVzZVRyYW5zbWlzc2lvbkJhc2UrPWluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbipzaGFkb3c7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnNwZWN1bGFyQmFzZSs9aW5mby5zcGVjdWxhcipzaGFkb3c7XG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbmNsZWFyQ29hdEJhc2UrPWluZm8uY2xlYXJDb2F0LnJnYipzaGFkb3c7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuc2hlZW5CYXNlKz1pbmZvLnNoZWVuLnJnYipzaGFkb3c7XG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLkluY2x1ZGVzU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsaWdodEZyYWdtZW50V0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9