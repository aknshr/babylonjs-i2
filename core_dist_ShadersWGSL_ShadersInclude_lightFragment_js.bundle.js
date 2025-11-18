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
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
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
info.diffuseTransmission=vec3f(0.0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X1NoYWRlcnNXR1NMX1NoYWRlcnNJbmNsdWRlX2xpZ2h0RnJhZ21lbnRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzV0dTTC9TaGFkZXJzSW5jbHVkZS9saWdodEZyYWdtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJsaWdodEZyYWdtZW50XCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIExJR0hUe1h9XG4jaWYgZGVmaW5lZChTSEFET1dPTkxZKSB8fCBkZWZpbmVkKExJR0hUTUFQKSAmJiBkZWZpbmVkKExJR0hUTUFQRVhDTFVERUR7WH0pICYmIGRlZmluZWQoTElHSFRNQVBOT1NQRUNVTEFSe1h9KVxuI2Vsc2VcbnZhciBkaWZmdXNle1h9OiB2ZWM0Zj1saWdodHtYfS52TGlnaHREaWZmdXNlO1xuI2RlZmluZSBDVVNUT01fTElHSFR7WH1fQ09MT1IgXG4jaWYgZGVmaW5lZChQQlIpICYmIGRlZmluZWQoQ0xVU1RMSUdIVHtYfSlcbntsZXQgc2xpY2VJbmRleD1taW4oZ2V0Q2x1c3RlcmVkU2xpY2VJbmRleChsaWdodHtYfS52U2xpY2VEYXRhLGZyYWdtZW50SW5wdXRzLnZWaWV3RGVwdGgpLENMVVNUTElHSFRfU0xJQ0VTLTEpO2luZm89Y29tcHV0ZUNsdXN0ZXJlZExpZ2h0aW5nKFxubGlnaHREYXRhVGV4dHVyZXtYfSxcbiZ0aWxlTWFza0J1ZmZlcntYfSxcbmxpZ2h0e1h9LnZMaWdodERhdGEsXG52ZWMydShsaWdodHtYfS52U2xpY2VSYW5nZXNbc2xpY2VJbmRleF0ueHkpLFxudmlld0RpcmVjdGlvblcsXG5ub3JtYWxXLFxuZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxcbnN1cmZhY2VBbGJlZG8sXG5yZWZsZWN0aXZpdHlPdXQsXG4jaWZkZWYgSVJJREVTQ0VOQ0VcbmlyaWRlc2NlbmNlSW50ZW5zaXR5LFxuI2VuZGlmXG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5zdWJTdXJmYWNlT3V0LFxuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5BQVJvdWdobmVzc0ZhY3RvcnMueCxcbiNlbmRpZlxuI2lmZGVmIEFOSVNPVFJPUElDXG5hbmlzb3Ryb3BpY091dCxcbiNlbmRpZlxuI2lmZGVmIFNIRUVOXG5zaGVlbk91dCxcbiNlbmRpZlxuI2lmZGVmIENMRUFSQ09BVFxuY2xlYXJjb2F0T3V0LFxuI2VuZGlmXG4pO31cbiNlbGlmIGRlZmluZWQoUEJSKVxuI2lmZGVmIFNQT1RMSUdIVHtYfVxucHJlSW5mbz1jb21wdXRlUG9pbnRBbmRTcG90UHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyxmcmFnbWVudElucHV0cy52UG9zaXRpb25XKTtcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSlcbnByZUluZm89Y29tcHV0ZVBvaW50QW5kU3BvdFByZUxpZ2h0aW5nSW5mbyhsaWdodHtYfS52TGlnaHREYXRhLHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyk7XG4jZWxpZiBkZWZpbmVkKEhFTUlMSUdIVHtYfSlcbnByZUluZm89Y29tcHV0ZUhlbWlzcGhlcmljUHJlTGlnaHRpbmdJbmZvKGxpZ2h0e1h9LnZMaWdodERhdGEsdmlld0RpcmVjdGlvblcsbm9ybWFsVyk7XG4jZWxpZiBkZWZpbmVkKERJUkxJR0hUe1h9KVxucHJlSW5mbz1jb21wdXRlRGlyZWN0aW9uYWxQcmVMaWdodGluZ0luZm8obGlnaHR7WH0udkxpZ2h0RGF0YSx2aWV3RGlyZWN0aW9uVyxub3JtYWxXKTtcbiNlbGlmIGRlZmluZWQoQVJFQUxJR0hUe1h9KSAmJiBkZWZpbmVkKEFSRUFMSUdIVFNVUFBPUlRFRClcbnByZUluZm89Y29tcHV0ZUFyZWFQcmVMaWdodGluZ0luZm8oYXJlYUxpZ2h0c0xUQzFTYW1wbGVyLGFyZWFMaWdodHNMVEMxU2FtcGxlclNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyLGFyZWFMaWdodHNMVEMyU2FtcGxlclNhbXBsZXIsdmlld0RpcmVjdGlvblcsbm9ybWFsVyxmcmFnbWVudElucHV0cy52UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEueHl6LGxpZ2h0e1h9LnZMaWdodFdpZHRoLnh5eixsaWdodHtYfS52TGlnaHRIZWlnaHQueHl6LHJvdWdobmVzcyk7XG4jZW5kaWZcbnByZUluZm8uTmRvdFY9TmRvdFY7XG4jaWZkZWYgU1BPVExJR0hUe1h9XG4jaWZkZWYgTElHSFRfRkFMTE9GRl9HTFRGe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9HTFRGKHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9LGllc0xpZ2h0VGV4dHVyZXtYfVNhbXBsZXIpO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9HTFRGKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueixsaWdodHtYfS52TGlnaHRGYWxsb2ZmLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKExJR0hUX0ZBTExPRkZfUEhZU0lDQUx7WH0pXG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9QaHlzaWNhbChwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkKTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9LGllc0xpZ2h0VGV4dHVyZXtYfVNhbXBsZXIpO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9QaHlzaWNhbChsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9TVEFOREFSRHtYfSlcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1N0YW5kYXJkKHByZUluZm8ubGlnaHRPZmZzZXQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi54KTtcbiNpZmRlZiBJRVNMSUdIVFRFWFRVUkV7WH1cbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9JRVMobGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLnh5eixwcmVJbmZvLkwsaWVzTGlnaHRUZXh0dXJle1h9LGllc0xpZ2h0VGV4dHVyZXtYfVNhbXBsZXIpO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb24qPWNvbXB1dGVEaXJlY3Rpb25hbExpZ2h0RmFsbG9mZl9TdGFuZGFyZChsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxsaWdodHtYfS52TGlnaHREaXJlY3Rpb24udyxsaWdodHtYfS52TGlnaHREYXRhLncpO1xuI2VuZGlmXG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmYocHJlSW5mby5saWdodE9mZnNldCxwcmVJbmZvLmxpZ2h0RGlzdGFuY2VTcXVhcmVkLGxpZ2h0e1h9LnZMaWdodEZhbGxvZmYueCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnkpO1xuI2lmZGVmIElFU0xJR0hUVEVYVFVSRXtYfVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmX0lFUyhsaWdodHtYfS52TGlnaHREaXJlY3Rpb24ueHl6LHByZUluZm8uTCxpZXNMaWdodFRleHR1cmV7WH0saWVzTGlnaHRUZXh0dXJle1h9U2FtcGxlcik7XG4jZWxzZVxucHJlSW5mby5hdHRlbnVhdGlvbio9Y29tcHV0ZURpcmVjdGlvbmFsTGlnaHRGYWxsb2ZmKGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi54eXoscHJlSW5mby5MLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbi53LGxpZ2h0e1h9LnZMaWdodERhdGEudyxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLnosbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi53KTtcbiNlbmRpZlxuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFBPSU5UTElHSFR7WH0pXG4jaWZkZWYgTElHSFRfRkFMTE9GRl9HTFRGe1h9XG5wcmVJbmZvLmF0dGVudWF0aW9uPWNvbXB1dGVEaXN0YW5jZUxpZ2h0RmFsbG9mZl9HTFRGKHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNlbGlmIGRlZmluZWQoTElHSFRfRkFMTE9GRl9QSFlTSUNBTHtYfSlcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmX1BoeXNpY2FsKHByZUluZm8ubGlnaHREaXN0YW5jZVNxdWFyZWQpO1xuI2VsaWYgZGVmaW5lZChMSUdIVF9GQUxMT0ZGX1NUQU5EQVJEe1h9KVxucHJlSW5mby5hdHRlbnVhdGlvbj1jb21wdXRlRGlzdGFuY2VMaWdodEZhbGxvZmZfU3RhbmRhcmQocHJlSW5mby5saWdodE9mZnNldCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngpO1xuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb249Y29tcHV0ZURpc3RhbmNlTGlnaHRGYWxsb2ZmKHByZUluZm8ubGlnaHRPZmZzZXQscHJlSW5mby5saWdodERpc3RhbmNlU3F1YXJlZCxsaWdodHtYfS52TGlnaHRGYWxsb2ZmLngsbGlnaHR7WH0udkxpZ2h0RmFsbG9mZi55KTtcbiNlbmRpZlxuI2Vsc2VcbnByZUluZm8uYXR0ZW51YXRpb249MS4wO1xuI2VuZGlmXG4jaWYgZGVmaW5lZChIRU1JTElHSFR7WH0pIHx8IGRlZmluZWQoQVJFQUxJR0hUe1h9KVxucHJlSW5mby5yb3VnaG5lc3M9cm91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMocm91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxucHJlSW5mby5kaWZmdXNlUm91Z2huZXNzPWRpZmZ1c2VSb3VnaG5lc3M7cHJlSW5mby5zdXJmYWNlQWxiZWRvPXN1cmZhY2VBbGJlZG87XG4jaWZkZWYgSVJJREVTQ0VOQ0VcbnByZUluZm8uaXJpZGVzY2VuY2VJbnRlbnNpdHk9aXJpZGVzY2VuY2VJbnRlbnNpdHk7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbj12ZWMzZigwLjApO1xuI2VuZGlmXG4jaWZkZWYgSEVNSUxJR0hUe1h9XG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZUhlbWlzcGhlcmljRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0R3JvdW5kKTtcbiNlbGlmIGRlZmluZWQoQVJFQUxJR0hUe1h9KVxuaW5mby5kaWZmdXNlPWNvbXB1dGVBcmVhRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IpO1xuI2VsaWYgZGVmaW5lZChTU19UUkFOU0xVQ0VOQ1kpXG4jaWZuZGVmIFNTX1RSQU5TTFVDRU5DWV9MRUdBQ1lcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IpKigxLjAtc3ViU3VyZmFjZU91dC50cmFuc2x1Y2VuY3lJbnRlbnNpdHkpO2luZm8uZGlmZnVzZVRyYW5zbWlzc2lvbj1jb21wdXRlRGlmZnVzZVRyYW5zbWl0dGVkTGlnaHRpbmcocHJlSW5mbyxkaWZmdXNle1h9LnJnYixzdWJTdXJmYWNlT3V0LnRyYW5zbWl0dGFuY2UpOyBcbiNlbHNlXG5pbmZvLmRpZmZ1c2U9Y29tcHV0ZURpZmZ1c2VUcmFuc21pdHRlZExpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2Isc3ViU3VyZmFjZU91dC50cmFuc21pdHRhbmNlKTtcbiNlbmRpZlxuI2Vsc2VcbmluZm8uZGlmZnVzZT1jb21wdXRlRGlmZnVzZUxpZ2h0aW5nKHByZUluZm8sZGlmZnVzZXtYfS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG4jaWYgQVJFQUxJR0hUe1h9XG5pbmZvLnNwZWN1bGFyPWNvbXB1dGVBcmVhU3BlY3VsYXJMaWdodGluZyhwcmVJbmZvLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHJlZmxlY3Rpdml0eU91dC5jb2xvclJlZmxlY3RhbmNlRjkwKTtcbiNlbHNlXG4jaWYgKENPTkRVQ1RPUl9TUEVDVUxBUl9NT0RFTD09Q09ORFVDVE9SX1NQRUNVTEFSX01PREVMX09QRU5QQlIpXG57bGV0IG1ldGFsRnJlc25lbDogdmVjM2Y9dmVjM2YocmVmbGVjdGl2aXR5T3V0LnNwZWN1bGFyV2VpZ2h0KSpnZXRGODJTcGVjdWxhcihwcmVJbmZvLlZkb3RILGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTAscmVmbGVjdGl2aXR5T3V0LnJvdWdobmVzcyk7bGV0IGRpZWxlY3RyaWNGcmVzbmVsOiB2ZWMzZj1mcmVzbmVsU2NobGlja0dHWFZlYzMocHJlSW5mby5WZG90SCxyZWZsZWN0aXZpdHlPdXQuZGllbGVjdHJpY0NvbG9yRjAscmVmbGVjdGl2aXR5T3V0LmNvbG9yUmVmbGVjdGFuY2VGOTApO2NvbG9yZWRGcmVzbmVsPW1peChkaWVsZWN0cmljRnJlc25lbCxtZXRhbEZyZXNuZWwscmVmbGVjdGl2aXR5T3V0Lm1ldGFsbGljKTt9XG4jZWxzZVxuY29sb3JlZEZyZXNuZWw9ZnJlc25lbFNjaGxpY2tHR1hWZWMzKHByZUluZm8uVmRvdEgsY2xlYXJjb2F0T3V0LnNwZWN1bGFyRW52aXJvbm1lbnRSMCxyZWZsZWN0aXZpdHlPdXQuY29sb3JSZWZsZWN0YW5jZUY5MCk7XG4jZW5kaWZcbiNpZm5kZWYgTEVHQUNZX1NQRUNVTEFSX0VORVJHWV9DT05TRVJWQVRJT05cbntsZXQgTmRvdEg6IGYzMj1kb3Qobm9ybWFsVyxwcmVJbmZvLkgpO2xldCBmcmVzbmVsOiB2ZWMzZj1mcmVzbmVsU2NobGlja0dHWFZlYzMoTmRvdEgsdmVjM2YocmVmbGVjdGFuY2VGMCksc3BlY3VsYXJFbnZpcm9ubWVudFI5MCk7aW5mby5kaWZmdXNlKj0odmVjM2YoMS4wKS1mcmVzbmVsKTt9XG4jZW5kaWZcbiNpZmRlZiBBTklTT1RST1BJQ1xuaW5mby5zcGVjdWxhcj1jb21wdXRlQW5pc290cm9waWNTcGVjdWxhckxpZ2h0aW5nKHByZUluZm8sdmlld0RpcmVjdGlvblcsbm9ybWFsVyxhbmlzb3Ryb3BpY091dC5hbmlzb3Ryb3BpY1RhbmdlbnQsYW5pc290cm9waWNPdXQuYW5pc290cm9waWNCaXRhbmdlbnQsYW5pc290cm9waWNPdXQuYW5pc290cm9weSxjbGVhcmNvYXRPdXQuc3BlY3VsYXJFbnZpcm9ubWVudFIwLHNwZWN1bGFyRW52aXJvbm1lbnRSOTAsQUFSb3VnaG5lc3NGYWN0b3JzLngsZGlmZnVzZXtYfS5yZ2IpO1xuI2Vsc2VcbmluZm8uc3BlY3VsYXI9Y29tcHV0ZVNwZWN1bGFyTGlnaHRpbmcocHJlSW5mbyxub3JtYWxXLGNsZWFyY29hdE91dC5zcGVjdWxhckVudmlyb25tZW50UjAsY29sb3JlZEZyZXNuZWwsQUFSb3VnaG5lc3NGYWN0b3JzLngsZGlmZnVzZXtYfS5yZ2IpO1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2lmbmRlZiBBUkVBTElHSFR7WH1cbiNpZmRlZiBTSEVFTlxuI2lmZGVmIFNIRUVOX0xJTktXSVRIQUxCRURPXG5wcmVJbmZvLnJvdWdobmVzcz1zaGVlbk91dC5zaGVlbkludGVuc2l0eTtcbiNlbHNlXG4jaWZkZWYgSEVNSUxJR0hUe1h9XG5wcmVJbmZvLnJvdWdobmVzcz1zaGVlbk91dC5zaGVlblJvdWdobmVzcztcbiNlbHNlXG5wcmVJbmZvLnJvdWdobmVzcz1hZGp1c3RSb3VnaG5lc3NGcm9tTGlnaHRQcm9wZXJ0aWVzKHNoZWVuT3V0LnNoZWVuUm91Z2huZXNzLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLmEscHJlSW5mby5saWdodERpc3RhbmNlKTtcbiNlbmRpZlxuI2VuZGlmXG5pbmZvLnNoZWVuPWNvbXB1dGVTaGVlbkxpZ2h0aW5nKHByZUluZm8sbm9ybWFsVyxzaGVlbk91dC5zaGVlbkNvbG9yLHNwZWN1bGFyRW52aXJvbm1lbnRSOTAsQUFSb3VnaG5lc3NGYWN0b3JzLngsZGlmZnVzZXtYfS5yZ2IpO1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG4jaWZkZWYgSEVNSUxJR0hUe1h9XG5wcmVJbmZvLnJvdWdobmVzcz1jbGVhcmNvYXRPdXQuY2xlYXJDb2F0Um91Z2huZXNzO1xuI2Vsc2VcbnByZUluZm8ucm91Z2huZXNzPWFkanVzdFJvdWdobmVzc0Zyb21MaWdodFByb3BlcnRpZXMoY2xlYXJjb2F0T3V0LmNsZWFyQ29hdFJvdWdobmVzcyxsaWdodHtYfS52TGlnaHRTcGVjdWxhci5hLHByZUluZm8ubGlnaHREaXN0YW5jZSk7XG4jZW5kaWZcbmluZm8uY2xlYXJDb2F0PWNvbXB1dGVDbGVhckNvYXRMaWdodGluZyhwcmVJbmZvLGNsZWFyY29hdE91dC5jbGVhckNvYXROb3JtYWxXLGNsZWFyY29hdE91dC5jbGVhckNvYXRBQVJvdWdobmVzc0ZhY3RvcnMueCxjbGVhcmNvYXRPdXQuY2xlYXJDb2F0SW50ZW5zaXR5LGRpZmZ1c2V7WH0ucmdiKTtcbiNpZmRlZiBDTEVBUkNPQVRfVElOVFxuYWJzb3JwdGlvbj1jb21wdXRlQ2xlYXJDb2F0TGlnaHRpbmdBYnNvcnB0aW9uKGNsZWFyY29hdE91dC5jbGVhckNvYXROZG90VlJlZnJhY3QscHJlSW5mby5MLGNsZWFyY29hdE91dC5jbGVhckNvYXROb3JtYWxXLGNsZWFyY29hdE91dC5jbGVhckNvYXRDb2xvcixjbGVhcmNvYXRPdXQuY2xlYXJDb2F0VGhpY2tuZXNzLGNsZWFyY29hdE91dC5jbGVhckNvYXRJbnRlbnNpdHkpO2luZm8uZGlmZnVzZSo9YWJzb3JwdGlvbjtcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmluZm8uZGlmZnVzZVRyYW5zbWlzc2lvbio9YWJzb3JwdGlvbjtcbiNlbmRpZlxuI2lmZGVmIFNQRUNVTEFSVEVSTVxuaW5mby5zcGVjdWxhcio9YWJzb3JwdGlvbjtcbiNlbmRpZlxuI2VuZGlmXG5pbmZvLmRpZmZ1c2UqPWluZm8uY2xlYXJDb2F0Lnc7XG4jaWZkZWYgU1NfVFJBTlNMVUNFTkNZXG5pbmZvLmRpZmZ1c2VUcmFuc21pc3Npb24qPWluZm8uY2xlYXJDb2F0Lnc7XG4jZW5kaWZcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbmluZm8uc3BlY3VsYXIqPWluZm8uY2xlYXJDb2F0Lnc7XG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuaW5mby5zaGVlbio9aW5mby5jbGVhckNvYXQudztcbiNlbmRpZlxuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgU1BPVExJR0hUe1h9XG4jaWZkZWYgSUVTTElHSFRURVhUVVJFe1h9XG5pbmZvPWNvbXB1dGVJRVNTcG90TGlnaHRpbmcodmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLGxpZ2h0e1h9LnZMaWdodERpcmVjdGlvbixkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsZGlmZnVzZXtYfS5hLGdsb3NzaW5lc3MsaWVzTGlnaHRUZXh0dXJle1h9LGllc0xpZ2h0VGV4dHVyZXtYfVNhbXBsZXIpO1xuI2Vsc2VcbmluZm89Y29tcHV0ZVNwb3RMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsbGlnaHR7WH0udkxpZ2h0RGlyZWN0aW9uLGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixkaWZmdXNle1h9LmEsZ2xvc3NpbmVzcyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoSEVNSUxJR0hUe1h9KVxuaW5mbz1jb21wdXRlSGVtaXNwaGVyaWNMaWdodGluZyh2aWV3RGlyZWN0aW9uVyxub3JtYWxXLGxpZ2h0e1h9LnZMaWdodERhdGEsZGlmZnVzZXtYfS5yZ2IsbGlnaHR7WH0udkxpZ2h0U3BlY3VsYXIucmdiLGxpZ2h0e1h9LnZMaWdodEdyb3VuZCxnbG9zc2luZXNzKTtcbiNlbGlmIGRlZmluZWQoUE9JTlRMSUdIVHtYfSkgfHwgZGVmaW5lZChESVJMSUdIVHtYfSlcbmluZm89Y29tcHV0ZUxpZ2h0aW5nKHZpZXdEaXJlY3Rpb25XLG5vcm1hbFcsbGlnaHR7WH0udkxpZ2h0RGF0YSxkaWZmdXNle1h9LnJnYixsaWdodHtYfS52TGlnaHRTcGVjdWxhci5yZ2IsZGlmZnVzZXtYfS5hLGdsb3NzaW5lc3MpO1xuI2VsaWYgZGVmaW5lKEFSRUFMSUdIVHtYfSkgJiYgZGVmaW5lZChBUkVBTElHSFRTVVBQT1JURUQpXG5pbmZvPWNvbXB1dGVBcmVhTGlnaHRpbmcoYXJlYUxpZ2h0c0xUQzFTYW1wbGVyLGFyZWFMaWdodHNMVEMxU2FtcGxlclNhbXBsZXIsYXJlYUxpZ2h0c0xUQzJTYW1wbGVyLGFyZWFMaWdodHNMVEMyU2FtcGxlclNhbXBsZXIsdmlld0RpcmVjdGlvblcsbm9ybWFsVyxmcmFnbWVudElucHV0cy52UG9zaXRpb25XLGxpZ2h0e1h9LnZMaWdodERhdGEueHl6LGxpZ2h0e1h9LnZMaWdodFdpZHRoLnh5eixsaWdodHtYfS52TGlnaHRIZWlnaHQueHl6LGRpZmZ1c2V7WH0ucmdiLGxpZ2h0e1h9LnZMaWdodFNwZWN1bGFyLnJnYixcbiNpZmRlZiBBUkVBTElHSFROT1JPVUdIVE5FU1NcbjAuNVxuI2Vsc2VcbnVuaWZvcm1zLnZSZWZsZWN0aW9uSW5mb3MueVxuI2VuZGlmXG4pO1xuI2VsaWYgZGVmaW5lZChDTFVTVExJR0hUe1h9KVxue2xldCBzbGljZUluZGV4PW1pbihnZXRDbHVzdGVyZWRTbGljZUluZGV4KGxpZ2h0e1h9LnZTbGljZURhdGEsZnJhZ21lbnRJbnB1dHMudlZpZXdEZXB0aCksQ0xVU1RMSUdIVF9TTElDRVMtMSk7aW5mbz1jb21wdXRlQ2x1c3RlcmVkTGlnaHRpbmcobGlnaHREYXRhVGV4dHVyZXtYfSwmdGlsZU1hc2tCdWZmZXJ7WH0sdmlld0RpcmVjdGlvblcsbm9ybWFsVyxsaWdodHtYfS52TGlnaHREYXRhLHZlYzJ1KGxpZ2h0e1h9LnZTbGljZVJhbmdlc1tzbGljZUluZGV4XS54eSksZ2xvc3NpbmVzcyk7fVxuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBQUk9KRUNURURMSUdIVFRFWFRVUkV7WH1cbmluZm8uZGlmZnVzZSo9Y29tcHV0ZVByb2plY3Rpb25UZXh0dXJlRGlmZnVzZUxpZ2h0aW5nKHByb2plY3Rpb25MaWdodFRleHR1cmV7WH0scHJvamVjdGlvbkxpZ2h0VGV4dHVyZXtYfVNhbXBsZXIsdW5pZm9ybXMudGV4dHVyZVByb2plY3Rpb25NYXRyaXh7WH0sZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyk7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIFNIQURPV3tYfVxuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG52YXIgc2hhZG93RGVidWd7WH06IHZlYzNmO1xuI2VuZGlmXG4jaWZkZWYgU0hBRE9XQ1NNe1h9XG4jaWZkZWYgU0hBRE9XQ1NNVVNFU0hBRE9XTUFYWntYfVxudmFyIGluZGV4e1h9OiBpMzI9LTE7XG4jZWxzZVxudmFyIGluZGV4e1h9OiBpMzI9U0hBRE9XQ1NNTlVNX0NBU0NBREVTe1h9LTE7XG4jZW5kaWZcbnZhciBkaWZme1h9OiBmMzI9MC47dlBvc2l0aW9uRnJvbUxpZ2h0e1h9WzBdPWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8wO3ZQb3NpdGlvbkZyb21MaWdodHtYfVsxXT1mcmFnbWVudElucHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH1fMTt2UG9zaXRpb25Gcm9tTGlnaHR7WH1bMl09ZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUxpZ2h0e1h9XzI7dlBvc2l0aW9uRnJvbUxpZ2h0e1h9WzNdPWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfV8zO3ZEZXB0aE1ldHJpY3tYfVswXT1mcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH1fMDt2RGVwdGhNZXRyaWN7WH1bMV09ZnJhZ21lbnRJbnB1dHMudkRlcHRoTWV0cmlje1h9XzE7dkRlcHRoTWV0cmlje1h9WzJdPWZyYWdtZW50SW5wdXRzLnZEZXB0aE1ldHJpY3tYfV8yO3ZEZXB0aE1ldHJpY3tYfVszXT1mcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH1fMztmb3IgKHZhciBpOmkzMj0wOyBpPFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfTsgaSsrKVxue1xuI2lmZGVmIFNIQURPV0NTTV9SSUdIVEhBTkRFRHtYfVxuZGlmZntYfT11bmlmb3Jtcy52aWV3RnJ1c3R1bVp7WH1baV0rZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uRnJvbUNhbWVyYXtYfS56O1xuI2Vsc2VcbmRpZmZ7WH09dW5pZm9ybXMudmlld0ZydXN0dW1ae1h9W2ldLWZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21DYW1lcmF7WH0uejtcbiNlbmRpZlxuaWYgKGRpZmZ7WH0+PTAuKSB7aW5kZXh7WH09aTticmVhazt9fVxuI2lmZGVmIFNIQURPV0NTTVVTRVNIQURPV01BWFp7WH1cbmlmIChpbmRleHtYfT49MClcbiNlbmRpZlxue1xuI2lmIGRlZmluZWQoU0hBRE9XUENGe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XTE9XUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjEoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDRjMoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ0Y1KGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMTYoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxkZXB0aFRleHR1cmV7WH1TYW1wbGVyLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyx1bmlmb3Jtcy5saWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLmRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMucGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ1NTMzIoaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLGRlcHRoVGV4dHVyZXtYfSxkZXB0aFRleHR1cmV7WH1TYW1wbGVyLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyx1bmlmb3Jtcy5saWdodFNpemVVVkNvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLmRlcHRoQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMucGVudW1icmFEYXJrbmVzc3tYfSk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzY0KGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sZGVwdGhUZXh0dXJle1h9U2FtcGxlcixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsdW5pZm9ybXMubGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5kZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLnBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2VuZGlmXG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dDU00oaW5kZXh7WH0sdlBvc2l0aW9uRnJvbUxpZ2h0e1h9W2luZGV4e1h9XSx2RGVwdGhNZXRyaWN7WH1baW5kZXh7WH1dLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2lmZGVmIFNIQURPV0NTTURFQlVHe1h9XG5zaGFkb3dEZWJ1Z3tYfT12ZWMzZihzaGFkb3cpKnZDYXNjYWRlQ29sb3JzTXVsdGlwbGllcntYfVtpbmRleHtYfV07XG4jZW5kaWZcbiNpZm5kZWYgU0hBRE9XQ1NNTk9CTEVORHtYfVxudmFyIGZydXN0dW1MZW5ndGg6ZjMyPXVuaWZvcm1zLmZydXN0dW1MZW5ndGhze1h9W2luZGV4e1h9XTt2YXIgZGlmZlJhdGlvOmYzMj1jbGFtcChkaWZme1h9L2ZydXN0dW1MZW5ndGgsMC4sMS4pKnVuaWZvcm1zLmNhc2NhZGVCbGVuZEZhY3RvcntYfTtpZiAoaW5kZXh7WH08KFNIQURPV0NTTU5VTV9DQVNDQURFU3tYfS0xKSAmJiBkaWZmUmF0aW88MS4pXG57aW5kZXh7WH0rPTE7dmFyIG5leHRTaGFkb3c6IGYzMj0wLjtcbiNpZiBkZWZpbmVkKFNIQURPV1BDRntYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMShpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sLHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxpZiBkZWZpbmVkKFNIQURPV01FRElVTVFVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENGMyhpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55eixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2Vsc2Vcbm5leHRTaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhDU01QQ0Y1KGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnl6LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUENTU3tYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzE2KGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sZGVwdGhUZXh0dXJle1h9U2FtcGxlcixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsdW5pZm9ybXMubGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5kZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLnBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENTTVBDU1MzMihpbmRleHtYfSx2UG9zaXRpb25Gcm9tTGlnaHR7WH1baW5kZXh7WH1dLHZEZXB0aE1ldHJpY3tYfVtpbmRleHtYfV0sZGVwdGhUZXh0dXJle1h9LGRlcHRoVGV4dHVyZXtYfVNhbXBsZXIsc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53LHVuaWZvcm1zLmxpZ2h0U2l6ZVVWQ29ycmVjdGlvbntYfVtpbmRleHtYfV0sdW5pZm9ybXMuZGVwdGhDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5wZW51bWJyYURhcmtuZXNze1h9KTtcbiNlbHNlXG5uZXh0U2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ1NNUENTUzY0KGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxkZXB0aFRleHR1cmV7WH0sZGVwdGhUZXh0dXJle1h9U2FtcGxlcixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnksbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncsdW5pZm9ybXMubGlnaHRTaXplVVZDb3JyZWN0aW9ue1h9W2luZGV4e1h9XSx1bmlmb3Jtcy5kZXB0aENvcnJlY3Rpb257WH1baW5kZXh7WH1dLHVuaWZvcm1zLnBlbnVtYnJhRGFya25lc3N7WH0pO1xuI2VuZGlmXG4jZWxzZVxubmV4dFNoYWRvdz1jb21wdXRlU2hhZG93Q1NNKGluZGV4e1h9LHZQb3NpdGlvbkZyb21MaWdodHtYfVtpbmRleHtYfV0sdkRlcHRoTWV0cmlje1h9W2luZGV4e1h9XSxzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbnNoYWRvdz1taXgobmV4dFNoYWRvdyxzaGFkb3csZGlmZlJhdGlvKTtcbiNpZmRlZiBTSEFET1dDU01ERUJVR3tYfVxuc2hhZG93RGVidWd7WH09bWl4KHZlYzMobmV4dFNoYWRvdykqdkNhc2NhZGVDb2xvcnNNdWx0aXBsaWVye1h9W2luZGV4e1h9XSxzaGFkb3dEZWJ1Z3tYfSxkaWZmUmF0aW8pO1xuI2VuZGlmXG59XG4jZW5kaWZcbn1cbiNlbGlmIGRlZmluZWQoU0hBRE9XQ0xPU0VFU017WH0pXG4jaWYgZGVmaW5lZChTSEFET1dDVUJFe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoQ2xvc2VFU01DdWJlKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aENsb3NlRVNNKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XRVNNe1h9KVxuI2lmIGRlZmluZWQoU0hBRE9XQ1VCRXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aEVTTUN1YmUoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8ueixsaWdodHtYfS5kZXB0aFZhbHVlcyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoRVNNKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoU0hBRE9XUE9JU1NPTntYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQb2lzc29uU2FtcGxpbmdDdWJlKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvblcsbGlnaHR7WH0udkxpZ2h0RGF0YS54eXosc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBvaXNzb25TYW1wbGluZyhmcmFnbWVudElucHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH0sZnJhZ21lbnRJbnB1dHMudkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFNIQURPV1BDRntYfSlcbiNpZiBkZWZpbmVkKFNIQURPV0xPV1FVQUxJVFl7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ0YxKGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VsaWYgZGVmaW5lZChTSEFET1dNRURJVU1RVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENGMyhmcmFnbWVudElucHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH0sZnJhZ21lbnRJbnB1dHMudkRlcHRoTWV0cmlje1h9LHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueXosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbHNlXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd1dpdGhQQ0Y1KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55eixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZWxpZiBkZWZpbmVkKFNIQURPV1BDU1N7WH0pXG4jaWYgZGVmaW5lZChTSEFET1dMT1dRVUFMSVRZe1h9KVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENTUzE2KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sZGVwdGhUZXh0dXJle1h9LGRlcHRoVGV4dHVyZXtYfVNhbXBsZXIsc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbGlmIGRlZmluZWQoU0hBRE9XTUVESVVNUVVBTElUWXtYfSlcbnNoYWRvdz1jb21wdXRlU2hhZG93V2l0aFBDU1MzMihmcmFnbWVudElucHV0cy52UG9zaXRpb25Gcm9tTGlnaHR7WH0sZnJhZ21lbnRJbnB1dHMudkRlcHRoTWV0cmlje1h9LGRlcHRoVGV4dHVyZXtYfSxkZXB0aFRleHR1cmV7WH1TYW1wbGVyLHNoYWRvd1RleHR1cmV7WH0sc2hhZG93VGV4dHVyZXtYfVNhbXBsZXIsbGlnaHR7WH0uc2hhZG93c0luZm8ueSxsaWdodHtYfS5zaGFkb3dzSW5mby56LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uc2hhZG93c0luZm8udyk7XG4jZWxzZVxuc2hhZG93PWNvbXB1dGVTaGFkb3dXaXRoUENTUzY0KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sZGVwdGhUZXh0dXJle1h9LGRlcHRoVGV4dHVyZXtYfVNhbXBsZXIsc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby55LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLnosbGlnaHR7WH0uc2hhZG93c0luZm8ueCxsaWdodHtYfS5zaGFkb3dzSW5mby53KTtcbiNlbmRpZlxuI2Vsc2VcbiNpZiBkZWZpbmVkKFNIQURPV0NVQkV7WH0pXG5zaGFkb3c9Y29tcHV0ZVNoYWRvd0N1YmUoZnJhZ21lbnRJbnB1dHMudlBvc2l0aW9uVyxsaWdodHtYfS52TGlnaHREYXRhLnh5eixzaGFkb3dUZXh0dXJle1h9LHNoYWRvd1RleHR1cmV7WH1TYW1wbGVyLGxpZ2h0e1h9LnNoYWRvd3NJbmZvLngsbGlnaHR7WH0uZGVwdGhWYWx1ZXMpO1xuI2Vsc2VcbnNoYWRvdz1jb21wdXRlU2hhZG93KGZyYWdtZW50SW5wdXRzLnZQb3NpdGlvbkZyb21MaWdodHtYfSxmcmFnbWVudElucHV0cy52RGVwdGhNZXRyaWN7WH0sc2hhZG93VGV4dHVyZXtYfSxzaGFkb3dUZXh0dXJle1h9U2FtcGxlcixsaWdodHtYfS5zaGFkb3dzSW5mby54LGxpZ2h0e1h9LnNoYWRvd3NJbmZvLncpO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTSEFET1dPTkxZXG4jaWZuZGVmIFNIQURPV0lOVVNFXG4jZGVmaW5lIFNIQURPV0lOVVNFXG4jZW5kaWZcbmdsb2JhbFNoYWRvdys9c2hhZG93O3NoYWRvd0xpZ2h0Q291bnQrPTEuMDtcbiNlbmRpZlxuI2Vsc2VcbnNoYWRvdz0xLjtcbiNlbmRpZlxuYWdnU2hhZG93Kz1zaGFkb3c7bnVtTGlnaHRzKz0xLjA7XG4jaWZuZGVmIFNIQURPV09OTFlcbiNpZmRlZiBDVVNUT01VU0VSTElHSFRJTkdcbmRpZmZ1c2VCYXNlKz1jb21wdXRlQ3VzdG9tRGlmZnVzZUxpZ2h0aW5nKGluZm8sZGlmZnVzZUJhc2Usc2hhZG93KTtcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbnNwZWN1bGFyQmFzZSs9Y29tcHV0ZUN1c3RvbVNwZWN1bGFyTGlnaHRpbmcoaW5mbyxzcGVjdWxhckJhc2Usc2hhZG93KTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChMSUdIVE1BUCkgJiYgZGVmaW5lZChMSUdIVE1BUEVYQ0xVREVEe1h9KVxuZGlmZnVzZUJhc2UrPWxpZ2h0bWFwQ29sb3IucmdiKnNoYWRvdztcbiNpZmRlZiBTUEVDVUxBUlRFUk1cbiNpZm5kZWYgTElHSFRNQVBOT1NQRUNVTEFSe1h9XG5zcGVjdWxhckJhc2UrPWluZm8uc3BlY3VsYXIqc2hhZG93KmxpZ2h0bWFwQ29sb3IucmdiO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBDTEVBUkNPQVRcbiNpZm5kZWYgTElHSFRNQVBOT1NQRUNVTEFSe1h9XG5jbGVhckNvYXRCYXNlKz1pbmZvLmNsZWFyQ29hdC5yZ2Iqc2hhZG93KmxpZ2h0bWFwQ29sb3IucmdiO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBTSEVFTlxuI2lmbmRlZiBMSUdIVE1BUE5PU1BFQ1VMQVJ7WH1cbnNoZWVuQmFzZSs9aW5mby5zaGVlbi5yZ2Iqc2hhZG93O1xuI2VuZGlmXG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgU0hBRE9XQ1NNREVCVUd7WH1cbmRpZmZ1c2VCYXNlKz1pbmZvLmRpZmZ1c2Uqc2hhZG93RGVidWd7WH07XG4jZWxzZVxuZGlmZnVzZUJhc2UrPWluZm8uZGlmZnVzZSpzaGFkb3c7XG4jZW5kaWZcbiNpZmRlZiBTU19UUkFOU0xVQ0VOQ1lcbmRpZmZ1c2VUcmFuc21pc3Npb25CYXNlKz1pbmZvLmRpZmZ1c2VUcmFuc21pc3Npb24qc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgU1BFQ1VMQVJURVJNXG5zcGVjdWxhckJhc2UrPWluZm8uc3BlY3VsYXIqc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgQ0xFQVJDT0FUXG5jbGVhckNvYXRCYXNlKz1pbmZvLmNsZWFyQ29hdC5yZ2Iqc2hhZG93O1xuI2VuZGlmXG4jaWZkZWYgU0hFRU5cbnNoZWVuQmFzZSs9aW5mby5zaGVlbi5yZ2Iqc2hhZG93O1xuI2VuZGlmXG4jZW5kaWZcbiNlbmRpZlxuI2VuZGlmXG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5JbmNsdWRlc1NoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbGlnaHRGcmFnbWVudFdHU0wgPSB7IG5hbWUsIHNoYWRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9