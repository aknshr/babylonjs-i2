"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_pbrMaterialLoadingAdapter_js"],{

/***/ "../loaders/dist/glTF/2.0/pbrMaterialLoadingAdapter.js":
/*!*************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/pbrMaterialLoadingAdapter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PBRMaterialLoadingAdapter: () => (/* binding */ PBRMaterialLoadingAdapter)
/* harmony export */ });
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Material Loading Adapter for PBR materials that provides a unified OpenPBR-like interface.
 */
class PBRMaterialLoadingAdapter {
    /**
     * Creates a new instance of the PBRMaterialLoadingAdapter.
     * @param material - The PBR material to adapt.
     */
    constructor(material) {
        this._material = material;
        this._material.enableSpecularAntiAliasing = true;
    }
    /**
     * Gets the underlying material
     */
    get material() {
        return this._material;
    }
    /**
     * Whether the material should be treated as unlit
     */
    get isUnlit() {
        return this._material.unlit;
    }
    /**
     * Sets whether the material should be treated as unlit
     */
    set isUnlit(value) {
        this._material.unlit = value;
    }
    // ========================================
    // CULLING PROPERTIES
    // ========================================
    /**
     * Sets whether back face culling is enabled.
     * @param value True to enable back face culling
     */
    set backFaceCulling(value) {
        this._material.backFaceCulling = value;
    }
    /**
     * Gets whether back face culling is enabled.
     * @returns True if back face culling is enabled
     */
    get backFaceCulling() {
        return this._material.backFaceCulling;
    }
    /**
     * Sets whether two-sided lighting is enabled.
     * @param value True to enable two-sided lighting
     */
    set twoSidedLighting(value) {
        this._material.twoSidedLighting = value;
    }
    /**
     * Gets whether two-sided lighting is enabled.
     * @returns True if two-sided lighting is enabled
     */
    get twoSidedLighting() {
        return this._material.twoSidedLighting;
    }
    // ========================================
    // ALPHA PROPERTIES
    // ========================================
    /**
     * Sets the alpha cutoff value for alpha testing.
     * @param value The alpha cutoff threshold (0-1)
     */
    set alphaCutOff(value) {
        this._material.alphaCutOff = value;
    }
    /**
     * Gets the alpha cutoff value.
     * @returns The alpha cutoff threshold (0-1)
     */
    get alphaCutOff() {
        return this._material.alphaCutOff;
    }
    /**
     * Sets whether to use alpha from the albedo texture.
     * @param value True to use alpha from albedo texture
     */
    set useAlphaFromBaseColorTexture(value) {
        this._material.useAlphaFromAlbedoTexture = value;
    }
    /**
     * Gets whether alpha is used from the albedo texture.
     * @returns True if using alpha from albedo texture
     */
    get useAlphaFromBaseColorTexture() {
        return this._material.useAlphaFromAlbedoTexture;
    }
    /**
     * Gets whether the transparency is treated as alpha coverage.
     */
    get transparencyAsAlphaCoverage() {
        return this._material.useRadianceOverAlpha || this._material.useSpecularOverAlpha;
    }
    /**
     * Sets/Gets whether the transparency is treated as alpha coverage
     */
    set transparencyAsAlphaCoverage(value) {
        this._material.useRadianceOverAlpha = !value;
        this._material.useSpecularOverAlpha = !value;
    }
    // ========================================
    // BASE PARAMETERS
    // ========================================
    /**
     * Sets the base color of the material (mapped to PBR albedoColor).
     * @param value The base color as a Color3
     */
    set baseColor(value) {
        this._material.albedoColor = value;
    }
    /**
     * Gets the base color of the material.
     * @returns The base color as a Color3
     */
    get baseColor() {
        return this._material.albedoColor;
    }
    /**
     * Sets the base color texture of the material (mapped to PBR albedoTexture).
     * @param value The base color texture or null
     */
    set baseColorTexture(value) {
        this._material.albedoTexture = value;
    }
    /**
     * Gets the base color texture of the material.
     * @returns The base color texture or null
     */
    get baseColorTexture() {
        return this._material.albedoTexture;
    }
    /**
     * Sets the base diffuse roughness of the material.
     * @param value The diffuse roughness value (0-1)
     */
    set baseDiffuseRoughness(value) {
        this._material.baseDiffuseRoughness = value;
        if (value > 0) {
            this._material.brdf.baseDiffuseModel = core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR;
        }
    }
    /**
     * Gets the base diffuse roughness of the material.
     * @returns The diffuse roughness value (0-1), defaults to 0 if not set
     */
    get baseDiffuseRoughness() {
        return this._material.baseDiffuseRoughness ?? 0;
    }
    /**
     * Sets the base diffuse roughness texture of the material.
     * @param value The diffuse roughness texture or null
     */
    set baseDiffuseRoughnessTexture(value) {
        this._material.baseDiffuseRoughnessTexture = value;
    }
    /**
     * Gets the base diffuse roughness texture of the material.
     * @returns The diffuse roughness texture or null
     */
    get baseDiffuseRoughnessTexture() {
        return this._material.baseDiffuseRoughnessTexture;
    }
    /**
     * Sets the base metalness value of the material (mapped to PBR metallic).
     * @param value The metalness value (0-1)
     */
    set baseMetalness(value) {
        this._material.metallic = value;
    }
    /**
     * Gets the base metalness value of the material.
     * @returns The metalness value (0-1), defaults to 1 if not set
     */
    get baseMetalness() {
        return this._material.metallic ?? 1;
    }
    /**
     * Sets the base metalness texture of the material (mapped to PBR metallicTexture).
     * @param value The metalness texture or null
     */
    set baseMetalnessTexture(value) {
        this._material.metallicTexture = value;
    }
    /**
     * Gets the base metalness texture of the material.
     * @returns The metalness texture or null
     */
    get baseMetalnessTexture() {
        return this._material.metallicTexture;
    }
    /**
     * Sets whether to use roughness from the metallic texture's green channel.
     * Also disables using roughness from the alpha channel when enabled.
     * @param value True to use green channel for roughness
     */
    set useRoughnessFromMetallicTextureGreen(value) {
        this._material.useRoughnessFromMetallicTextureGreen = value;
        this._material.useRoughnessFromMetallicTextureAlpha = !value;
    }
    /**
     * Sets whether to use metalness from the metallic texture's blue channel.
     * @param value True to use blue channel for metalness
     */
    set useMetallicFromMetallicTextureBlue(value) {
        this._material.useMetallnessFromMetallicTextureBlue = value;
    }
    // ========================================
    // SPECULAR PARAMETERS
    // ========================================
    /**
     * Configures specular properties and optionally enables OpenPBR BRDF model for edge color support.
     * @param enableEdgeColor Whether to enable OpenPBR BRDF models for edge color support
     */
    enableSpecularEdgeColor(enableEdgeColor = false) {
        if (enableEdgeColor) {
            this._material.brdf.dielectricSpecularModel = core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR;
            this._material.brdf.conductorSpecularModel = core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR;
        }
    }
    /**
     * Sets the specular weight (mapped to PBR metallicF0Factor).
     * @param value The specular weight value
     */
    set specularWeight(value) {
        this._material.metallicF0Factor = value;
    }
    /**
     * Gets the specular weight.
     * @returns The specular weight value, defaults to 1 if not set
     */
    get specularWeight() {
        return this._material.metallicF0Factor ?? 1;
    }
    /**
     * Sets the specular weight texture (mapped to PBR metallicReflectanceTexture).
     * Configures the material to use only metalness from this texture when set.
     * @param value The specular weight texture or null
     */
    set specularWeightTexture(value) {
        if (value) {
            this._material.metallicReflectanceTexture = value;
            this._material.useOnlyMetallicFromMetallicReflectanceTexture = true;
        }
        else {
            this._material.metallicReflectanceTexture = null;
            this._material.useOnlyMetallicFromMetallicReflectanceTexture = false;
        }
    }
    /**
     * Gets the specular weight texture.
     * @returns The specular weight texture or null
     */
    get specularWeightTexture() {
        return this._material.metallicReflectanceTexture;
    }
    /**
     * Sets the specular color (mapped to PBR metallicReflectanceColor).
     * @param value The specular color as a Color3
     */
    set specularColor(value) {
        this._material.metallicReflectanceColor = value;
    }
    /**
     * Gets the specular color.
     * @returns The specular color as a Color3
     */
    get specularColor() {
        return this._material.metallicReflectanceColor;
    }
    /**
     * Sets the specular color texture (mapped to PBR reflectanceTexture).
     * @param value The specular color texture or null
     */
    set specularColorTexture(value) {
        this._material.reflectanceTexture = value;
    }
    /**
     * Gets the specular color texture.
     * @returns The specular color texture or null
     */
    get specularColorTexture() {
        return this._material.reflectanceTexture;
    }
    /**
     * Sets the specular roughness (mapped to PBR roughness).
     * @param value The roughness value (0-1)
     */
    set specularRoughness(value) {
        this._material.roughness = value;
    }
    /**
     * Gets the specular roughness.
     * @returns The roughness value (0-1), defaults to 1 if not set
     */
    get specularRoughness() {
        return this._material.roughness ?? 1;
    }
    /**
     * Sets the specular roughness texture.
     * Note: PBR uses the same texture for both metallic and roughness,
     * so this only sets the texture if no base metalness texture exists.
     * @param value The roughness texture or null
     */
    set specularRoughnessTexture(value) {
        // PBR uses the same texture for both metallic and roughness
        if (!this.baseMetalnessTexture) {
            this._material.metallicTexture = value;
        }
    }
    /**
     * Gets the specular roughness texture.
     * @returns The roughness texture (same as metallic texture for PBR) or null
     */
    get specularRoughnessTexture() {
        return this._material.metallicTexture;
    }
    /**
     * Sets the specular index of refraction (mapped to PBR indexOfRefraction).
     * @param value The IOR value
     */
    set specularIor(value) {
        this._material.indexOfRefraction = value;
    }
    /**
     * Gets the specular index of refraction.
     * @returns The IOR value
     */
    get specularIor() {
        return this._material.indexOfRefraction;
    }
    // ========================================
    // EMISSION PARAMETERS
    // ========================================
    /**
     * Sets the emission color (mapped to PBR emissiveColor).
     * @param value The emission color as a Color3
     */
    set emissionColor(value) {
        this._material.emissiveColor = value;
    }
    /**
     * Gets the emission color.
     * @returns The emission color as a Color3
     */
    get emissionColor() {
        return this._material.emissiveColor;
    }
    /**
     * Sets the emission luminance/intensity (mapped to PBR emissiveIntensity).
     * @param value The emission intensity value
     */
    set emissionLuminance(value) {
        this._material.emissiveIntensity = value;
    }
    /**
     * Gets the emission luminance/intensity.
     * @returns The emission intensity value
     */
    get emissionLuminance() {
        return this._material.emissiveIntensity;
    }
    /**
     * Sets the emission color texture (mapped to PBR emissiveTexture).
     * @param value The emission texture or null
     */
    set emissionColorTexture(value) {
        this._material.emissiveTexture = value;
    }
    /**
     * Gets the emission color texture.
     * @returns The emission texture or null
     */
    get emissionColorTexture() {
        return this._material.emissiveTexture;
    }
    // ========================================
    // AMBIENT OCCLUSION
    // ========================================
    /**
     * Sets the ambient occlusion texture (mapped to PBR ambientTexture).
     * Automatically enables grayscale mode when set.
     * @param value The ambient occlusion texture or null
     */
    set ambientOcclusionTexture(value) {
        this._material.ambientTexture = value;
        if (value) {
            this._material.useAmbientInGrayScale = true;
        }
    }
    /**
     * Gets the ambient occlusion texture.
     * @returns The ambient occlusion texture or null
     */
    get ambientOcclusionTexture() {
        return this._material.ambientTexture;
    }
    /**
     * Sets the ambient occlusion texture strength.
     * @param value The strength value (typically 0-1)
     */
    set ambientOcclusionTextureStrength(value) {
        this._material.ambientTextureStrength = value;
    }
    /**
     * Gets the ambient occlusion texture strength.
     * @returns The strength value, defaults to 1.0 if not set
     */
    get ambientOcclusionTextureStrength() {
        return this._material.ambientTextureStrength ?? 1.0;
    }
    // ========================================
    // COAT PARAMETERS
    // ========================================
    /**
     * Configures clear coat for PBR material.
     * Enables clear coat and sets up proper configuration.
     */
    configureCoat() {
        this._material.clearCoat.isEnabled = true;
        this._material.clearCoat.useRoughnessFromMainTexture = false;
        this._material.clearCoat.remapF0OnInterfaceChange = false;
    }
    /**
     * Sets the coat weight (mapped to PBR clearCoat.intensity).
     * Automatically enables clear coat.
     * @param value The coat weight value (0-1)
     */
    set coatWeight(value) {
        this._material.clearCoat.isEnabled = true;
        this._material.clearCoat.intensity = value;
    }
    /**
     * Gets the coat weight.
     * @returns The coat weight value
     */
    get coatWeight() {
        return this._material.clearCoat.intensity;
    }
    /**
     * Sets the coat weight texture (mapped to PBR clearCoat.texture).
     * Automatically enables clear coat.
     * @param value The coat weight texture or null
     */
    set coatWeightTexture(value) {
        this._material.clearCoat.isEnabled = true;
        this._material.clearCoat.texture = value;
    }
    /**
     * Gets the coat weight texture.
     * @returns The coat weight texture or null
     */
    get coatWeightTexture() {
        return this._material.clearCoat.texture;
    }
    /**
     * Sets the coat color (mapped to PBR clearCoat.tintColor).
     * @param value The coat tint color as a Color3
     */
    set coatColor(value) {
        this._material.clearCoat.isTintEnabled = value != core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
        this._material.clearCoat.tintColor = value;
    }
    /**
     * Sets the coat color texture (mapped to PBR clearCoat.tintTexture).
     * @param value The coat color texture or null
     */
    set coatColorTexture(value) {
        this._material.clearCoat.tintTexture = value;
    }
    /**
     * Sets the coat roughness (mapped to PBR clearCoat.roughness).
     * Automatically enables clear coat.
     * @param value The coat roughness value (0-1)
     */
    set coatRoughness(value) {
        this._material.clearCoat.isEnabled = true;
        this._material.clearCoat.roughness = value;
    }
    /**
     * Gets the coat roughness.
     * @returns The coat roughness value, defaults to 0 if not set
     */
    get coatRoughness() {
        return this._material.clearCoat.roughness ?? 0;
    }
    /**
     * Sets the coat roughness texture (mapped to PBR clearCoat.textureRoughness).
     * Automatically enables clear coat and disables using roughness from main texture.
     * @param value The coat roughness texture or null
     */
    set coatRoughnessTexture(value) {
        this._material.clearCoat.isEnabled = true;
        this._material.clearCoat.useRoughnessFromMainTexture = false;
        this._material.clearCoat.textureRoughness = value;
    }
    /**
     * Gets the coat roughness texture.
     * @returns The coat roughness texture or null
     */
    get coatRoughnessTexture() {
        return this._material.clearCoat.textureRoughness;
    }
    /**
     * Sets the coat index of refraction (IOR).
     */
    set coatIor(value) {
        this._material.clearCoat.indexOfRefraction = value;
    }
    /**
     * Sets the coat darkening value.
     * Note: PBR doesn't have a direct coat darkening property, so this is a no-op.
     * @param value The coat darkening value (ignored for PBR)
     */
    set coatDarkening(value) {
        // PBR doesn't have a coat darkening property
    }
    /**
     * Sets the coat darkening texture
     * @param value The coat darkening texture or null
     */
    set coatDarkeningTexture(value) {
        // PBR doesn't have a coat darkening property
    }
    /**
     * Sets the coat roughness anisotropy.
     * Note: PBR clearCoat doesn't support anisotropy yet, so this is a placeholder.
     * @param value The coat anisotropy intensity value (currently ignored)
     */
    set coatRoughnessAnisotropy(value) {
        // TODO: Implement when PBR clearCoat anisotropy becomes available
        // this._material.clearCoat.anisotropy = value;
    }
    /**
     * Gets the coat roughness anisotropy.
     * Note: PBR clearCoat doesn't support anisotropy yet, so this returns 0.
     * @returns Currently returns 0 as clearCoat anisotropy is not yet available
     */
    get coatRoughnessAnisotropy() {
        // TODO: Implement when PBR clearCoat anisotropy becomes available
        // return this._material.clearCoat.anisotropy ?? 0;
        return 0;
    }
    /**
     * Sets the coat tangent angle for anisotropy.
     * Note: PBR clearCoat doesn't support anisotropy yet, so this is a placeholder.
     * @param value The coat anisotropy rotation angle in radians (currently ignored)
     */
    set geometryCoatTangentAngle(value) {
        // TODO: Implement when PBR clearCoat anisotropy becomes available
        // this._material.clearCoat.anisotropyAngle = value;
    }
    /**
     * Sets the coat tangent texture for anisotropy.
     * Note: PBR clearCoat doesn't support anisotropy textures yet, so this is a placeholder.
     * @param value The coat anisotropy texture (currently ignored)
     */
    set geometryCoatTangentTexture(value) {
        // TODO: Implement when PBR clearCoat anisotropy becomes available
        // this._material.clearCoat.anisotropyTangentTexture = value;
    }
    /**
     * Gets the coat tangent texture for anisotropy.
     * Note: PBR clearCoat doesn't support anisotropy textures yet, so this returns null.
     * @returns Currently returns null as clearCoat anisotropy is not yet available
     */
    get geometryCoatTangentTexture() {
        // TODO: Implement when PBR clearCoat anisotropy becomes available
        // return this._material.clearCoat.anisotropyTangentTexture;
        return null;
    }
    // ========================================
    // TRANSMISSION LAYER
    // ========================================
    /**
     * Sets the transmission weight (mapped to PBR subSurface.refractionIntensity).
     * Enables refraction when value \> 0.
     * @param value The transmission weight value (0-1)
     */
    set transmissionWeight(value) {
        this._material.subSurface.isRefractionEnabled = value > 0;
        this._material.subSurface.refractionIntensity = value;
    }
    /**
     * Gets the transmission weight.
     * @returns The transmission weight value
     */
    get transmissionWeight() {
        return this._material.subSurface.refractionIntensity;
    }
    /**
     * Sets the transmission weight texture (mapped to PBR subSurface.refractionIntensityTexture).
     * Automatically enables refraction and glTF-style textures.
     * @param value The transmission weight texture or null
     */
    set transmissionWeightTexture(value) {
        this._material.subSurface.isRefractionEnabled = true;
        this._material.subSurface.refractionIntensityTexture = value;
        this._material.subSurface.useGltfStyleTextures = true;
    }
    /**
     * Sets the attenuation distance for volume scattering.
     * @param value The attenuation distance value
     */
    set transmissionDepth(value) {
        this._material.subSurface.tintColorAtDistance = value;
    }
    /**
     * Sets the attenuation color (mapped to PBR subSurface.tintColor).
     * @param value The attenuation color as a Color3
     */
    set transmissionColor(value) {
        this._material.subSurface.tintColor = value;
    }
    /**
     * Gets the transmission dispersion Abbe number.
     * @param value The Abbe number value
     */
    set transmissionDispersionAbbeNumber(value) {
        if (value > 0) {
            this._material.subSurface.isDispersionEnabled = true;
            this._material.subSurface.dispersion = 20.0 / value;
        }
        else {
            this._material.subSurface.isDispersionEnabled = false;
            this._material.subSurface.dispersion = 0;
        }
    }
    /**
     * Configures transmission for thin-surface transmission (KHR_materials_transmission).
     * Sets up the material for proper thin-surface transmission behavior.
     */
    configureTransmission() {
        // Since this extension models thin-surface transmission only, we must make IOR = 1.0
        this._material.subSurface.volumeIndexOfRefraction = 1.0;
        // Albedo colour will tint transmission.
        this._material.subSurface.useAlbedoToTintRefraction = true;
        this._material.subSurface.minimumThickness = 0.0;
        this._material.subSurface.maximumThickness = 0.0;
    }
    // ========================================
    // VOLUME PROPERTIES
    // ========================================
    /**
     * Sets the thickness texture (mapped to PBR subSurface.thicknessTexture).
     * Automatically enables refraction.
     * @param value The thickness texture or null
     */
    set volumeThicknessTexture(value) {
        this._material.subSurface.thicknessTexture = value;
        this._material.subSurface.useGltfStyleTextures = true;
    }
    /**
     * Sets the thickness factor (mapped to PBR subSurface.maximumThickness).
     * Automatically enables refraction.
     * @param value The thickness value
     */
    set volumeThickness(value) {
        this._material.subSurface.minimumThickness = 0.0;
        this._material.subSurface.maximumThickness = value;
        this._material.subSurface.useThicknessAsDepth = true;
        if (value > 0) {
            this._material.subSurface.volumeIndexOfRefraction = this._material.indexOfRefraction;
        }
    }
    // ========================================
    // SUBSURFACE PROPERTIES (Subsurface Scattering)
    // ========================================
    /**
     * Configures subsurface properties for PBR material
     */
    configureSubsurface() {
        this._material.subSurface.useGltfStyleTextures = true;
        // Since this extension models thin-surface transmission only, we must make the
        // internal IOR == 1.0 and set the thickness to 0.
        this._material.subSurface.volumeIndexOfRefraction = 1.0;
        this._material.subSurface.minimumThickness = 0.0;
        this._material.subSurface.maximumThickness = 0.0;
        // Tint color will be used for transmission.
        this._material.subSurface.useAlbedoToTintTranslucency = false;
    }
    /**
     * Sets the subsurface weight
     */
    set subsurfaceWeight(value) {
        this._material.subSurface.isTranslucencyEnabled = value > 0;
        this._material.subSurface.translucencyIntensity = value;
    }
    /**
     * Gets the subsurface weight
     * @returns The subsurface weight value
     */
    get subsurfaceWeight() {
        return this._material.subSurface.isTranslucencyEnabled ? this._material.subSurface.translucencyIntensity : 0;
    }
    /**
     * Sets the subsurface weight texture
     */
    set subsurfaceWeightTexture(value) {
        this._material.subSurface.translucencyIntensityTexture = value;
    }
    /**
     * Sets the subsurface color.
     * @param value The subsurface tint color as a Color3
     */
    set subsurfaceColor(value) {
        this._material.subSurface.tintColor = value;
    }
    /**
     * Sets the subsurface color texture.
     * @param value The subsurface tint texture or null
     */
    set subsurfaceColorTexture(value) {
        this._material.subSurface.translucencyColorTexture = value;
    }
    // ========================================
    // FUZZ LAYER (Sheen)
    // ========================================
    /**
     * Configures sheen for PBR material.
     * Enables sheen and sets up proper configuration.
     */
    configureFuzz() {
        this._material.sheen.isEnabled = true;
        this._material.sheen.useRoughnessFromMainTexture = false;
        this._material.sheen.albedoScaling = true;
    }
    /**
     * Sets the sheen weight (mapped to PBR sheen.intensity).
     * Automatically enables sheen.
     * @param value The sheen weight value
     */
    set fuzzWeight(value) {
        this._material.sheen.isEnabled = true;
        this._material.sheen.intensity = value;
    }
    /**
     * Sets the fuzz weight texture.
     * @param value The fuzz weight texture or null
     */
    set fuzzWeightTexture(value) {
        // PBRMaterial sheen supports glTF-style sheen which doesn't
        // use a separate texture for intensity. So we'll only set the
        // weight texture if none is already assigned. If one's already
        // assigned, we assume it contains the sheen color data.
        if (!this._material.sheen.texture) {
            this._material.sheen.texture = value;
        }
    }
    /**
     * Sets the sheen color (mapped to PBR sheen.color).
     * Automatically enables sheen.
     * @param value The sheen color as a Color3
     */
    set fuzzColor(value) {
        this._material.sheen.isEnabled = true;
        this._material.sheen.color = value;
    }
    /**
     * Sets the sheen color texture (mapped to PBR sheen.texture).
     * Automatically enables sheen.
     * @param value The sheen color texture or null
     */
    set fuzzColorTexture(value) {
        this._material.sheen.texture = value;
    }
    /**
     * Sets the sheen roughness (mapped to PBR sheen.roughness).
     * Automatically enables sheen.
     * @param value The sheen roughness value (0-1)
     */
    set fuzzRoughness(value) {
        this._material.sheen.isEnabled = true;
        this._material.sheen.roughness = value;
    }
    /**
     * Sets the sheen roughness texture (mapped to PBR sheen.textureRoughness).
     * Automatically enables sheen.
     * @param value The sheen roughness texture or null
     */
    set fuzzRoughnessTexture(value) {
        this._material.sheen.isEnabled = true;
        this._material.sheen.textureRoughness = value;
    }
    // ========================================
    // ANISOTROPY
    // ========================================
    /**
     * Sets the specular roughness anisotropy (mapped to PBR anisotropy.intensity).
     * Automatically enables anisotropy.
     * @param value The anisotropy intensity value
     */
    set specularRoughnessAnisotropy(value) {
        this._material.anisotropy.isEnabled = true;
        this._material.anisotropy.intensity = value;
    }
    /**
     * Gets the specular roughness anisotropy.
     * @returns The anisotropy intensity value
     */
    get specularRoughnessAnisotropy() {
        return this._material.anisotropy.intensity;
    }
    /**
     * Sets the anisotropy rotation (mapped to PBR anisotropy.angle).
     * Automatically enables anisotropy.
     * @param value The anisotropy rotation angle in radians
     */
    set geometryTangentAngle(value) {
        this._material.anisotropy.isEnabled = true;
        this._material.anisotropy.angle = value;
    }
    /**
     * Sets the geometry tangent texture (mapped to PBR anisotropy.texture).
     * Automatically enables anisotropy.
     * @param value The anisotropy texture or null
     */
    set geometryTangentTexture(value) {
        this._material.anisotropy.isEnabled = true;
        this._material.anisotropy.texture = value;
    }
    /**
     * Gets the geometry tangent texture.
     * @returns The anisotropy texture or null
     */
    get geometryTangentTexture() {
        return this._material.anisotropy.texture;
    }
    /**
     * Configures glTF-style anisotropy for the material.
     * Note: PBR materials don't need this configuration, so this is a no-op.
     * @param useGltfStyle Whether to use glTF-style anisotropy (ignored for PBR)
     */
    configureGltfStyleAnisotropy(useGltfStyle = true) {
        // PBR materials don't need this configuration
    }
    // ========================================
    // THIN FILM IRIDESCENCE
    // ========================================
    /**
     * Sets the iridescence weight (mapped to PBR iridescence.intensity).
     * Automatically enables iridescence.
     * @param value The iridescence intensity value
     */
    set thinFilmWeight(value) {
        this._material.iridescence.isEnabled = value > 0;
        this._material.iridescence.intensity = value;
    }
    /**
     * Sets the iridescence IOR (mapped to PBR iridescence.indexOfRefraction).
     * @param value The iridescence IOR value
     */
    set thinFilmIor(value) {
        this._material.iridescence.indexOfRefraction = value;
    }
    /**
     * Sets the iridescence thickness minimum (mapped to PBR iridescence.minimumThickness).
     * @param value The minimum thickness value in nanometers
     */
    set thinFilmThicknessMinimum(value) {
        this._material.iridescence.minimumThickness = value;
    }
    /**
     * Sets the iridescence thickness maximum (mapped to PBR iridescence.maximumThickness).
     * @param value The maximum thickness value in nanometers
     */
    set thinFilmThicknessMaximum(value) {
        this._material.iridescence.maximumThickness = value;
    }
    /**
     * Sets the thin film weight texture (mapped to PBR iridescence.texture).
     * @param value The thin film weight texture or null
     */
    set thinFilmWeightTexture(value) {
        this._material.iridescence.texture = value;
    }
    /**
     * Sets the iridescence thickness texture (mapped to PBR iridescence.thicknessTexture).
     * @param value The iridescence thickness texture or null
     */
    set thinFilmThicknessTexture(value) {
        this._material.iridescence.thicknessTexture = value;
    }
    // ========================================
    // DISPERSION
    // ========================================
    /**
     * Sets the transmission dispersion value.
     * Note: PBR doesn't have direct dispersion support, so this stores it as metadata.
     * @param value The dispersion value (stored as metadata)
     */
    set transmissionDispersion(value) {
        // PBR doesn't have a direct dispersion property, this would need custom shader modification
        // For now, we'll store it as metadata
        this._material._dispersion = value;
    }
    // ========================================
    // UNLIT MATERIALS
    // ========================================
    /**
     * Sets whether the material is unlit.
     * @param value True to make the material unlit
     */
    set unlit(value) {
        this._material.unlit = value;
    }
    // ========================================
    // GEOMETRY PARAMETERS
    // ========================================
    /**
     * Sets the geometry opacity (mapped to PBR alpha).
     * @param value The opacity value (0-1)
     */
    set geometryOpacity(value) {
        this._material.alpha = value;
    }
    /**
     * Gets the geometry opacity.
     * @returns The opacity value (0-1)
     */
    get geometryOpacity() {
        return this._material.alpha;
    }
    /**
     * Sets the geometry normal texture (mapped to PBR bumpTexture).
     * Also forces irradiance computation in fragment shader for better lighting.
     * @param value The normal texture or null
     */
    set geometryNormalTexture(value) {
        this._material.bumpTexture = value;
        this._material.forceIrradianceInFragment = true;
    }
    /**
     * Gets the geometry normal texture.
     * @returns The normal texture or null
     */
    get geometryNormalTexture() {
        return this._material.bumpTexture;
    }
    /**
     * Sets the normal map inversions for the material.
     * @param invertX Whether to invert the normal map on the X axis
     * @param invertY Whether to invert the normal map on the Y axis
     */
    setNormalMapInversions(invertX, invertY) {
        this._material.invertNormalMapX = invertX;
        this._material.invertNormalMapY = invertY;
    }
    /**
     * Sets the geometry coat normal texture (mapped to PBR clearCoat.bumpTexture).
     * Automatically enables clear coat.
     * @param value The coat normal texture or null
     */
    set geometryCoatNormalTexture(value) {
        this._material.clearCoat.isEnabled = true;
        this._material.clearCoat.bumpTexture = value;
    }
    /**
     * Gets the geometry coat normal texture.
     * @returns The coat normal texture or null
     */
    get geometryCoatNormalTexture() {
        return this._material.clearCoat.bumpTexture;
    }
    /**
     * Sets the geometry coat normal texture scale.
     * @param value The scale value for the coat normal texture
     */
    set geometryCoatNormalTextureScale(value) {
        if (this._material.clearCoat.bumpTexture) {
            this._material.clearCoat.bumpTexture.level = value;
        }
    }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX3Bick1hdGVyaWFsTG9hZGluZ0FkYXB0ZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9wYnJNYXRlcmlhbExvYWRpbmdBZGFwdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbExvYWRpbmdBZGFwdGVyIH0gZnJvbSBcIi4vbWF0ZXJpYWxMb2FkaW5nQWRhcHRlclwiO1xyXG5cclxuLyoqXHJcbiAqIE1hdGVyaWFsIExvYWRpbmcgQWRhcHRlciBmb3IgUEJSIG1hdGVyaWFscyB0aGF0IHByb3ZpZGVzIGEgdW5pZmllZCBPcGVuUEJSLWxpa2UgaW50ZXJmYWNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBCUk1hdGVyaWFsTG9hZGluZ0FkYXB0ZXIgaW1wbGVtZW50cyBJTWF0ZXJpYWxMb2FkaW5nQWRhcHRlciB7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbDogUEJSTWF0ZXJpYWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBQQlJNYXRlcmlhbExvYWRpbmdBZGFwdGVyLlxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIC0gVGhlIFBCUiBtYXRlcmlhbCB0byBhZGFwdC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWF0ZXJpYWw6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSBtYXRlcmlhbCBhcyBQQlJNYXRlcmlhbDtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5lbmFibGVTcGVjdWxhckFudGlBbGlhc2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF0ZXJpYWwoKTogUEJSTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIG1hdGVyaWFsIHNob3VsZCBiZSB0cmVhdGVkIGFzIHVubGl0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNVbmxpdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwudW5saXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIG1hdGVyaWFsIHNob3VsZCBiZSB0cmVhdGVkIGFzIHVubGl0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgaXNVbmxpdCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnVubGl0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ1VMTElORyBQUk9QRVJUSUVTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgYmFjayBmYWNlIGN1bGxpbmcgaXMgZW5hYmxlZC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIGVuYWJsZSBiYWNrIGZhY2UgY3VsbGluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJhY2tGYWNlQ3VsbGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aGV0aGVyIGJhY2sgZmFjZSBjdWxsaW5nIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIGJhY2sgZmFjZSBjdWxsaW5nIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYWNrRmFjZUN1bGxpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgd2hldGhlciB0d28tc2lkZWQgbGlnaHRpbmcgaXMgZW5hYmxlZC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIGVuYWJsZSB0d28tc2lkZWQgbGlnaHRpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0d29TaWRlZExpZ2h0aW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwudHdvU2lkZWRMaWdodGluZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aGV0aGVyIHR3by1zaWRlZCBsaWdodGluZyBpcyBlbmFibGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0d28tc2lkZWQgbGlnaHRpbmcgaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHR3b1NpZGVkTGlnaHRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLnR3b1NpZGVkTGlnaHRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQUxQSEEgUFJPUEVSVElFU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYWxwaGEgY3V0b2ZmIHZhbHVlIGZvciBhbHBoYSB0ZXN0aW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBhbHBoYSBjdXRvZmYgdGhyZXNob2xkICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYWxwaGFDdXRPZmYodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmFscGhhQ3V0T2ZmID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBhbHBoYSBjdXRvZmYgdmFsdWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYWxwaGEgY3V0b2ZmIHRocmVzaG9sZCAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFscGhhQ3V0T2ZmKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmFscGhhQ3V0T2ZmO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIHVzZSBhbHBoYSBmcm9tIHRoZSBhbGJlZG8gdGV4dHVyZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIHVzZSBhbHBoYSBmcm9tIGFsYmVkbyB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdXNlQWxwaGFGcm9tQmFzZUNvbG9yVGV4dHVyZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnVzZUFscGhhRnJvbUFsYmVkb1RleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciBhbHBoYSBpcyB1c2VkIGZyb20gdGhlIGFsYmVkbyB0ZXh0dXJlLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB1c2luZyBhbHBoYSBmcm9tIGFsYmVkbyB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdXNlQWxwaGFGcm9tQmFzZUNvbG9yVGV4dHVyZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwudXNlQWxwaGFGcm9tQWxiZWRvVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0aGUgdHJhbnNwYXJlbmN5IGlzIHRyZWF0ZWQgYXMgYWxwaGEgY292ZXJhZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHJhbnNwYXJlbmN5QXNBbHBoYUNvdmVyYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC51c2VSYWRpYW5jZU92ZXJBbHBoYSB8fCB0aGlzLl9tYXRlcmlhbC51c2VTcGVjdWxhck92ZXJBbHBoYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMvR2V0cyB3aGV0aGVyIHRoZSB0cmFuc3BhcmVuY3kgaXMgdHJlYXRlZCBhcyBhbHBoYSBjb3ZlcmFnZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRyYW5zcGFyZW5jeUFzQWxwaGFDb3ZlcmFnZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnVzZVJhZGlhbmNlT3ZlckFscGhhID0gIXZhbHVlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnVzZVNwZWN1bGFyT3ZlckFscGhhID0gIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJBU0UgUEFSQU1FVEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYmFzZSBjb2xvciBvZiB0aGUgbWF0ZXJpYWwgKG1hcHBlZCB0byBQQlIgYWxiZWRvQ29sb3IpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBiYXNlIGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZUNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5hbGJlZG9Db2xvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYmFzZSBjb2xvciBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYmFzZSBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2VDb2xvcigpOiBDb2xvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5hbGJlZG9Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJhc2UgY29sb3IgdGV4dHVyZSBvZiB0aGUgbWF0ZXJpYWwgKG1hcHBlZCB0byBQQlIgYWxiZWRvVGV4dHVyZSkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGJhc2UgY29sb3IgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZUNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYWxiZWRvVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYmFzZSBjb2xvciB0ZXh0dXJlIG9mIHRoZSBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBiYXNlIGNvbG9yIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2VDb2xvclRleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuYWxiZWRvVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJhc2UgZGlmZnVzZSByb3VnaG5lc3Mgb2YgdGhlIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBkaWZmdXNlIHJvdWdobmVzcyB2YWx1ZSAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJhc2VEaWZmdXNlUm91Z2huZXNzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5iYXNlRGlmZnVzZVJvdWdobmVzcyA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYnJkZi5iYXNlRGlmZnVzZU1vZGVsID0gQ29uc3RhbnRzLk1BVEVSSUFMX0RJRkZVU0VfTU9ERUxfRV9PUkVOX05BWUFSO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgZGlmZnVzZSByb3VnaG5lc3Mgb2YgdGhlIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRpZmZ1c2Ugcm91Z2huZXNzIHZhbHVlICgwLTEpLCBkZWZhdWx0cyB0byAwIGlmIG5vdCBzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYXNlRGlmZnVzZVJvdWdobmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5iYXNlRGlmZnVzZVJvdWdobmVzcyA/PyAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYmFzZSBkaWZmdXNlIHJvdWdobmVzcyB0ZXh0dXJlIG9mIHRoZSBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZGlmZnVzZSByb3VnaG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5iYXNlRGlmZnVzZVJvdWdobmVzc1RleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgZGlmZnVzZSByb3VnaG5lc3MgdGV4dHVyZSBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGlmZnVzZSByb3VnaG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmJhc2VEaWZmdXNlUm91Z2huZXNzVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJhc2UgbWV0YWxuZXNzIHZhbHVlIG9mIHRoZSBtYXRlcmlhbCAobWFwcGVkIHRvIFBCUiBtZXRhbGxpYykuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG1ldGFsbmVzcyB2YWx1ZSAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJhc2VNZXRhbG5lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLm1ldGFsbGljID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBiYXNlIG1ldGFsbmVzcyB2YWx1ZSBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWxuZXNzIHZhbHVlICgwLTEpLCBkZWZhdWx0cyB0byAxIGlmIG5vdCBzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYXNlTWV0YWxuZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLm1ldGFsbGljID8/IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBiYXNlIG1ldGFsbmVzcyB0ZXh0dXJlIG9mIHRoZSBtYXRlcmlhbCAobWFwcGVkIHRvIFBCUiBtZXRhbGxpY1RleHR1cmUpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBtZXRhbG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZU1ldGFsbmVzc1RleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLm1ldGFsbGljVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYmFzZSBtZXRhbG5lc3MgdGV4dHVyZSBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWxuZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2VNZXRhbG5lc3NUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLm1ldGFsbGljVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgd2hldGhlciB0byB1c2Ugcm91Z2huZXNzIGZyb20gdGhlIG1ldGFsbGljIHRleHR1cmUncyBncmVlbiBjaGFubmVsLlxyXG4gICAgICogQWxzbyBkaXNhYmxlcyB1c2luZyByb3VnaG5lc3MgZnJvbSB0aGUgYWxwaGEgY2hhbm5lbCB3aGVuIGVuYWJsZWQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ1ZSB0byB1c2UgZ3JlZW4gY2hhbm5lbCBmb3Igcm91Z2huZXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUdyZWVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwudXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUdyZWVuID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwudXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUFscGhhID0gIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIHVzZSBtZXRhbG5lc3MgZnJvbSB0aGUgbWV0YWxsaWMgdGV4dHVyZSdzIGJsdWUgY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIHVzZSBibHVlIGNoYW5uZWwgZm9yIG1ldGFsbmVzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHVzZU1ldGFsbGljRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC51c2VNZXRhbGxuZXNzRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTUEVDVUxBUiBQQVJBTUVURVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIHNwZWN1bGFyIHByb3BlcnRpZXMgYW5kIG9wdGlvbmFsbHkgZW5hYmxlcyBPcGVuUEJSIEJSREYgbW9kZWwgZm9yIGVkZ2UgY29sb3Igc3VwcG9ydC5cclxuICAgICAqIEBwYXJhbSBlbmFibGVFZGdlQ29sb3IgV2hldGhlciB0byBlbmFibGUgT3BlblBCUiBCUkRGIG1vZGVscyBmb3IgZWRnZSBjb2xvciBzdXBwb3J0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVTcGVjdWxhckVkZ2VDb2xvcihlbmFibGVFZGdlQ29sb3I6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChlbmFibGVFZGdlQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYnJkZi5kaWVsZWN0cmljU3BlY3VsYXJNb2RlbCA9IENvbnN0YW50cy5NQVRFUklBTF9ESUVMRUNUUklDX1NQRUNVTEFSX01PREVMX09QRU5QQlI7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLmJyZGYuY29uZHVjdG9yU3BlY3VsYXJNb2RlbCA9IENvbnN0YW50cy5NQVRFUklBTF9DT05EVUNUT1JfU1BFQ1VMQVJfTU9ERUxfT1BFTlBCUjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcGVjdWxhciB3ZWlnaHQgKG1hcHBlZCB0byBQQlIgbWV0YWxsaWNGMEZhY3RvcikuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNwZWN1bGFyIHdlaWdodCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFyV2VpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5tZXRhbGxpY0YwRmFjdG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciB3ZWlnaHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3BlY3VsYXIgd2VpZ2h0IHZhbHVlLCBkZWZhdWx0cyB0byAxIGlmIG5vdCBzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhcldlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5tZXRhbGxpY0YwRmFjdG9yID8/IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcGVjdWxhciB3ZWlnaHQgdGV4dHVyZSAobWFwcGVkIHRvIFBCUiBtZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSkuXHJcbiAgICAgKiBDb25maWd1cmVzIHRoZSBtYXRlcmlhbCB0byB1c2Ugb25seSBtZXRhbG5lc3MgZnJvbSB0aGlzIHRleHR1cmUgd2hlbiBzZXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNwZWN1bGFyIHdlaWdodCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzcGVjdWxhcldlaWdodFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC51c2VPbmx5TWV0YWxsaWNGcm9tTWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwudXNlT25seU1ldGFsbGljRnJvbU1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY3VsYXIgd2VpZ2h0IHRleHR1cmUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3BlY3VsYXIgd2VpZ2h0IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwZWN1bGFyV2VpZ2h0VGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5tZXRhbGxpY1JlZmxlY3RhbmNlVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIGNvbG9yIChtYXBwZWQgdG8gUEJSIG1ldGFsbGljUmVmbGVjdGFuY2VDb2xvcikuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNwZWN1bGFyIGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3BlY3VsYXJDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciBjb2xvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzcGVjdWxhciBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwZWN1bGFyQ29sb3IoKTogQ29sb3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwubWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3BlY3VsYXIgY29sb3IgdGV4dHVyZSAobWFwcGVkIHRvIFBCUiByZWZsZWN0YW5jZVRleHR1cmUpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzcGVjdWxhciBjb2xvciB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzcGVjdWxhckNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwucmVmbGVjdGFuY2VUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciBjb2xvciB0ZXh0dXJlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHNwZWN1bGFyIGNvbG9yIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwZWN1bGFyQ29sb3JUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLnJlZmxlY3RhbmNlVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIHJvdWdobmVzcyAobWFwcGVkIHRvIFBCUiByb3VnaG5lc3MpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSByb3VnaG5lc3MgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzcGVjdWxhclJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwucm91Z2huZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcm91Z2huZXNzIHZhbHVlICgwLTEpLCBkZWZhdWx0cyB0byAxIGlmIG5vdCBzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhclJvdWdobmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5yb3VnaG5lc3MgPz8gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIHJvdWdobmVzcyB0ZXh0dXJlLlxyXG4gICAgICogTm90ZTogUEJSIHVzZXMgdGhlIHNhbWUgdGV4dHVyZSBmb3IgYm90aCBtZXRhbGxpYyBhbmQgcm91Z2huZXNzLFxyXG4gICAgICogc28gdGhpcyBvbmx5IHNldHMgdGhlIHRleHR1cmUgaWYgbm8gYmFzZSBtZXRhbG5lc3MgdGV4dHVyZSBleGlzdHMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHJvdWdobmVzcyB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzcGVjdWxhclJvdWdobmVzc1RleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIC8vIFBCUiB1c2VzIHRoZSBzYW1lIHRleHR1cmUgZm9yIGJvdGggbWV0YWxsaWMgYW5kIHJvdWdobmVzc1xyXG4gICAgICAgIGlmICghdGhpcy5iYXNlTWV0YWxuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5tZXRhbGxpY1RleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3MgdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSByb3VnaG5lc3MgdGV4dHVyZSAoc2FtZSBhcyBtZXRhbGxpYyB0ZXh0dXJlIGZvciBQQlIpIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhclJvdWdobmVzc1RleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwubWV0YWxsaWNUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3BlY3VsYXIgaW5kZXggb2YgcmVmcmFjdGlvbiAobWFwcGVkIHRvIFBCUiBpbmRleE9mUmVmcmFjdGlvbikuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIElPUiB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFySW9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5pbmRleE9mUmVmcmFjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY3VsYXIgaW5kZXggb2YgcmVmcmFjdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBJT1IgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhcklvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5pbmRleE9mUmVmcmFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFTUlTU0lPTiBQQVJBTUVURVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBlbWlzc2lvbiBjb2xvciAobWFwcGVkIHRvIFBCUiBlbWlzc2l2ZUNvbG9yKS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW1pc3Npb24gY29sb3IgYXMgYSBDb2xvcjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBlbWlzc2lvbkNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBlbWlzc2lvbiBjb2xvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlbWlzc2lvbiBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVtaXNzaW9uQ29sb3IoKTogQ29sb3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuZW1pc3NpdmVDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGVtaXNzaW9uIGx1bWluYW5jZS9pbnRlbnNpdHkgKG1hcHBlZCB0byBQQlIgZW1pc3NpdmVJbnRlbnNpdHkpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbWlzc2lvbiBpbnRlbnNpdHkgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBlbWlzc2lvbkx1bWluYW5jZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZW1pc3NpdmVJbnRlbnNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGVtaXNzaW9uIGx1bWluYW5jZS9pbnRlbnNpdHkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZW1pc3Npb24gaW50ZW5zaXR5IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW1pc3Npb25MdW1pbmFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuZW1pc3NpdmVJbnRlbnNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBlbWlzc2lvbiBjb2xvciB0ZXh0dXJlIChtYXBwZWQgdG8gUEJSIGVtaXNzaXZlVGV4dHVyZSkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVtaXNzaW9uIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGVtaXNzaW9uQ29sb3JUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGVtaXNzaW9uIGNvbG9yIHRleHR1cmUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZW1pc3Npb24gdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW1pc3Npb25Db2xvclRleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFNQklFTlQgT0NDTFVTSU9OXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhbWJpZW50IG9jY2x1c2lvbiB0ZXh0dXJlIChtYXBwZWQgdG8gUEJSIGFtYmllbnRUZXh0dXJlKS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyBncmF5c2NhbGUgbW9kZSB3aGVuIHNldC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYW1iaWVudCBvY2NsdXNpb24gdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYW1iaWVudE9jY2x1c2lvblRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmFtYmllbnRUZXh0dXJlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnVzZUFtYmllbnRJbkdyYXlTY2FsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYW1iaWVudCBvY2NsdXNpb24gdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBhbWJpZW50IG9jY2x1c2lvbiB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhbWJpZW50T2NjbHVzaW9uVGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5hbWJpZW50VGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGFtYmllbnQgb2NjbHVzaW9uIHRleHR1cmUgc3RyZW5ndGguXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmVuZ3RoIHZhbHVlICh0eXBpY2FsbHkgMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFtYmllbnRPY2NsdXNpb25UZXh0dXJlU3RyZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmFtYmllbnRUZXh0dXJlU3RyZW5ndGggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGFtYmllbnQgb2NjbHVzaW9uIHRleHR1cmUgc3RyZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyZW5ndGggdmFsdWUsIGRlZmF1bHRzIHRvIDEuMCBpZiBub3Qgc2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW1iaWVudE9jY2x1c2lvblRleHR1cmVTdHJlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5hbWJpZW50VGV4dHVyZVN0cmVuZ3RoID8/IDEuMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDT0FUIFBBUkFNRVRFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY2xlYXIgY29hdCBmb3IgUEJSIG1hdGVyaWFsLlxyXG4gICAgICogRW5hYmxlcyBjbGVhciBjb2F0IGFuZCBzZXRzIHVwIHByb3BlciBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uZmlndXJlQ29hdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQudXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LnJlbWFwRjBPbkludGVyZmFjZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCB3ZWlnaHQgKG1hcHBlZCB0byBQQlIgY2xlYXJDb2F0LmludGVuc2l0eSkuXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgY2xlYXIgY29hdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29hdCB3ZWlnaHQgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb2F0V2VpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuaW50ZW5zaXR5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHdlaWdodC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2F0IHdlaWdodCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvYXRXZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LmludGVuc2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgd2VpZ2h0IHRleHR1cmUgKG1hcHBlZCB0byBQQlIgY2xlYXJDb2F0LnRleHR1cmUpLlxyXG4gICAgICogQXV0b21hdGljYWxseSBlbmFibGVzIGNsZWFyIGNvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgd2VpZ2h0IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXRXZWlnaHRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29hdCB3ZWlnaHQgdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2F0IHdlaWdodCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2F0V2VpZ2h0VGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQudGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgY29sb3IgKG1hcHBlZCB0byBQQlIgY2xlYXJDb2F0LnRpbnRDb2xvcikuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgdGludCBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXRDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LmlzVGludEVuYWJsZWQgPSB2YWx1ZSAhPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQudGludENvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2F0IGNvbG9yIHRleHR1cmUgKG1hcHBlZCB0byBQQlIgY2xlYXJDb2F0LnRpbnRUZXh0dXJlKS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29hdCBjb2xvciB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb2F0Q29sb3JUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQudGludFRleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgcm91Z2huZXNzIChtYXBwZWQgdG8gUEJSIGNsZWFyQ29hdC5yb3VnaG5lc3MpLlxyXG4gICAgICogQXV0b21hdGljYWxseSBlbmFibGVzIGNsZWFyIGNvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgcm91Z2huZXNzIHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29hdFJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LmlzRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29hdCByb3VnaG5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29hdCByb3VnaG5lc3MgdmFsdWUsIGRlZmF1bHRzIHRvIDAgaWYgbm90IHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvYXRSb3VnaG5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LnJvdWdobmVzcyA/PyAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCByb3VnaG5lc3MgdGV4dHVyZSAobWFwcGVkIHRvIFBCUiBjbGVhckNvYXQudGV4dHVyZVJvdWdobmVzcykuXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgY2xlYXIgY29hdCBhbmQgZGlzYWJsZXMgdXNpbmcgcm91Z2huZXNzIGZyb20gbWFpbiB0ZXh0dXJlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IHJvdWdobmVzcyB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb2F0Um91Z2huZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LmlzRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LnVzZVJvdWdobmVzc0Zyb21NYWluVGV4dHVyZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHJvdWdobmVzcyB0ZXh0dXJlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvYXQgcm91Z2huZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvYXRSb3VnaG5lc3NUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC50ZXh0dXJlUm91Z2huZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCBpbmRleCBvZiByZWZyYWN0aW9uIChJT1IpLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXRJb3IodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC5pbmRleE9mUmVmcmFjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCBkYXJrZW5pbmcgdmFsdWUuXHJcbiAgICAgKiBOb3RlOiBQQlIgZG9lc24ndCBoYXZlIGEgZGlyZWN0IGNvYXQgZGFya2VuaW5nIHByb3BlcnR5LCBzbyB0aGlzIGlzIGEgbm8tb3AuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgZGFya2VuaW5nIHZhbHVlIChpZ25vcmVkIGZvciBQQlIpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29hdERhcmtlbmluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gUEJSIGRvZXNuJ3QgaGF2ZSBhIGNvYXQgZGFya2VuaW5nIHByb3BlcnR5XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2F0IGRhcmtlbmluZyB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgZGFya2VuaW5nIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXREYXJrZW5pbmdUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICAvLyBQQlIgZG9lc24ndCBoYXZlIGEgY29hdCBkYXJrZW5pbmcgcHJvcGVydHlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgcm91Z2huZXNzIGFuaXNvdHJvcHkuXHJcbiAgICAgKiBOb3RlOiBQQlIgY2xlYXJDb2F0IGRvZXNuJ3Qgc3VwcG9ydCBhbmlzb3Ryb3B5IHlldCwgc28gdGhpcyBpcyBhIHBsYWNlaG9sZGVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IGFuaXNvdHJvcHkgaW50ZW5zaXR5IHZhbHVlIChjdXJyZW50bHkgaWdub3JlZClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb2F0Um91Z2huZXNzQW5pc290cm9weSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IHdoZW4gUEJSIGNsZWFyQ29hdCBhbmlzb3Ryb3B5IGJlY29tZXMgYXZhaWxhYmxlXHJcbiAgICAgICAgLy8gdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LmFuaXNvdHJvcHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvYXQgcm91Z2huZXNzIGFuaXNvdHJvcHkuXHJcbiAgICAgKiBOb3RlOiBQQlIgY2xlYXJDb2F0IGRvZXNuJ3Qgc3VwcG9ydCBhbmlzb3Ryb3B5IHlldCwgc28gdGhpcyByZXR1cm5zIDAuXHJcbiAgICAgKiBAcmV0dXJucyBDdXJyZW50bHkgcmV0dXJucyAwIGFzIGNsZWFyQ29hdCBhbmlzb3Ryb3B5IGlzIG5vdCB5ZXQgYXZhaWxhYmxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29hdFJvdWdobmVzc0FuaXNvdHJvcHkoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgd2hlbiBQQlIgY2xlYXJDb2F0IGFuaXNvdHJvcHkgYmVjb21lcyBhdmFpbGFibGVcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuY2xlYXJDb2F0LmFuaXNvdHJvcHkgPz8gMDtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgdGFuZ2VudCBhbmdsZSBmb3IgYW5pc290cm9weS5cclxuICAgICAqIE5vdGU6IFBCUiBjbGVhckNvYXQgZG9lc24ndCBzdXBwb3J0IGFuaXNvdHJvcHkgeWV0LCBzbyB0aGlzIGlzIGEgcGxhY2Vob2xkZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgYW5pc290cm9weSByb3RhdGlvbiBhbmdsZSBpbiByYWRpYW5zIChjdXJyZW50bHkgaWdub3JlZClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBnZW9tZXRyeUNvYXRUYW5nZW50QW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCB3aGVuIFBCUiBjbGVhckNvYXQgYW5pc290cm9weSBiZWNvbWVzIGF2YWlsYWJsZVxyXG4gICAgICAgIC8vIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC5hbmlzb3Ryb3B5QW5nbGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgdGFuZ2VudCB0ZXh0dXJlIGZvciBhbmlzb3Ryb3B5LlxyXG4gICAgICogTm90ZTogUEJSIGNsZWFyQ29hdCBkb2Vzbid0IHN1cHBvcnQgYW5pc290cm9weSB0ZXh0dXJlcyB5ZXQsIHNvIHRoaXMgaXMgYSBwbGFjZWhvbGRlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29hdCBhbmlzb3Ryb3B5IHRleHR1cmUgKGN1cnJlbnRseSBpZ25vcmVkKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Q29hdFRhbmdlbnRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgd2hlbiBQQlIgY2xlYXJDb2F0IGFuaXNvdHJvcHkgYmVjb21lcyBhdmFpbGFibGVcclxuICAgICAgICAvLyB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuYW5pc290cm9weVRhbmdlbnRUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHRhbmdlbnQgdGV4dHVyZSBmb3IgYW5pc290cm9weS5cclxuICAgICAqIE5vdGU6IFBCUiBjbGVhckNvYXQgZG9lc24ndCBzdXBwb3J0IGFuaXNvdHJvcHkgdGV4dHVyZXMgeWV0LCBzbyB0aGlzIHJldHVybnMgbnVsbC5cclxuICAgICAqIEByZXR1cm5zIEN1cnJlbnRseSByZXR1cm5zIG51bGwgYXMgY2xlYXJDb2F0IGFuaXNvdHJvcHkgaXMgbm90IHlldCBhdmFpbGFibGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnZW9tZXRyeUNvYXRUYW5nZW50VGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCB3aGVuIFBCUiBjbGVhckNvYXQgYW5pc290cm9weSBiZWNvbWVzIGF2YWlsYWJsZVxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuYW5pc290cm9weVRhbmdlbnRUZXh0dXJlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFRSQU5TTUlTU0lPTiBMQVlFUlxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdHJhbnNtaXNzaW9uIHdlaWdodCAobWFwcGVkIHRvIFBCUiBzdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkpLlxyXG4gICAgICogRW5hYmxlcyByZWZyYWN0aW9uIHdoZW4gdmFsdWUgXFw+IDAuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHRyYW5zbWlzc2lvbiB3ZWlnaHQgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc21pc3Npb25XZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UuaXNSZWZyYWN0aW9uRW5hYmxlZCA9IHZhbHVlID4gMDtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHRyYW5zbWlzc2lvbiB3ZWlnaHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNtaXNzaW9uIHdlaWdodCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRyYW5zbWlzc2lvbldlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0cmFuc21pc3Npb24gd2VpZ2h0IHRleHR1cmUgKG1hcHBlZCB0byBQQlIgc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZSkuXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgcmVmcmFjdGlvbiBhbmQgZ2xURi1zdHlsZSB0ZXh0dXJlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdHJhbnNtaXNzaW9uIHdlaWdodCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc21pc3Npb25XZWlnaHRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLmlzUmVmcmFjdGlvbkVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UucmVmcmFjdGlvbkludGVuc2l0eVRleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnVzZUdsdGZTdHlsZVRleHR1cmVzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGF0dGVudWF0aW9uIGRpc3RhbmNlIGZvciB2b2x1bWUgc2NhdHRlcmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYXR0ZW51YXRpb24gZGlzdGFuY2UgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc21pc3Npb25EZXB0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS50aW50Q29sb3JBdERpc3RhbmNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhdHRlbnVhdGlvbiBjb2xvciAobWFwcGVkIHRvIFBCUiBzdWJTdXJmYWNlLnRpbnRDb2xvcikuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGF0dGVudWF0aW9uIGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdHJhbnNtaXNzaW9uQ29sb3IodmFsdWU6IENvbG9yMykge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UudGludENvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0cmFuc21pc3Npb24gZGlzcGVyc2lvbiBBYmJlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgQWJiZSBudW1iZXIgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc21pc3Npb25EaXNwZXJzaW9uQWJiZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLmlzRGlzcGVyc2lvbkVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLmRpc3BlcnNpb24gPSAyMC4wIC8gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS5pc0Rpc3BlcnNpb25FbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UuZGlzcGVyc2lvbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0cmFuc21pc3Npb24gZm9yIHRoaW4tc3VyZmFjZSB0cmFuc21pc3Npb24gKEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uKS5cclxuICAgICAqIFNldHMgdXAgdGhlIG1hdGVyaWFsIGZvciBwcm9wZXIgdGhpbi1zdXJmYWNlIHRyYW5zbWlzc2lvbiBiZWhhdmlvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbmZpZ3VyZVRyYW5zbWlzc2lvbigpOiB2b2lkIHtcclxuICAgICAgICAvLyBTaW5jZSB0aGlzIGV4dGVuc2lvbiBtb2RlbHMgdGhpbi1zdXJmYWNlIHRyYW5zbWlzc2lvbiBvbmx5LCB3ZSBtdXN0IG1ha2UgSU9SID0gMS4wXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9IDEuMDtcclxuICAgICAgICAvLyBBbGJlZG8gY29sb3VyIHdpbGwgdGludCB0cmFuc21pc3Npb24uXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VBbGJlZG9Ub1RpbnRSZWZyYWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLm1pbmltdW1UaGlja25lc3MgPSAwLjA7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzID0gMC4wO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFZPTFVNRSBQUk9QRVJUSUVTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0aGlja25lc3MgdGV4dHVyZSAobWFwcGVkIHRvIFBCUiBzdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUpLlxyXG4gICAgICogQXV0b21hdGljYWxseSBlbmFibGVzIHJlZnJhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHRoaWNrbmVzcyB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB2b2x1bWVUaGlja25lc3NUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnRoaWNrbmVzc1RleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnVzZUdsdGZTdHlsZVRleHR1cmVzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHRoaWNrbmVzcyBmYWN0b3IgKG1hcHBlZCB0byBQQlIgc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzKS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyByZWZyYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB0aGlja25lc3MgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB2b2x1bWVUaGlja25lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UubWluaW11bVRoaWNrbmVzcyA9IDAuMDtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLm1heGltdW1UaGlja25lc3MgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnVzZVRoaWNrbmVzc0FzRGVwdGggPSB0cnVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS52b2x1bWVJbmRleE9mUmVmcmFjdGlvbiA9IHRoaXMuX21hdGVyaWFsLmluZGV4T2ZSZWZyYWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTVUJTVVJGQUNFIFBST1BFUlRJRVMgKFN1YnN1cmZhY2UgU2NhdHRlcmluZylcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgc3Vic3VyZmFjZSBwcm9wZXJ0aWVzIGZvciBQQlIgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbmZpZ3VyZVN1YnN1cmZhY2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS51c2VHbHRmU3R5bGVUZXh0dXJlcyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFNpbmNlIHRoaXMgZXh0ZW5zaW9uIG1vZGVscyB0aGluLXN1cmZhY2UgdHJhbnNtaXNzaW9uIG9ubHksIHdlIG11c3QgbWFrZSB0aGVcclxuICAgICAgICAvLyBpbnRlcm5hbCBJT1IgPT0gMS4wIGFuZCBzZXQgdGhlIHRoaWNrbmVzcyB0byAwLlxyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2Uudm9sdW1lSW5kZXhPZlJlZnJhY3Rpb24gPSAxLjA7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS5taW5pbXVtVGhpY2tuZXNzID0gMC4wO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UubWF4aW11bVRoaWNrbmVzcyA9IDAuMDtcclxuXHJcbiAgICAgICAgLy8gVGludCBjb2xvciB3aWxsIGJlIHVzZWQgZm9yIHRyYW5zbWlzc2lvbi5cclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnVzZUFsYmVkb1RvVGludFRyYW5zbHVjZW5jeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3Vic3VyZmFjZSB3ZWlnaHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzdWJzdXJmYWNlV2VpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLmlzVHJhbnNsdWNlbmN5RW5hYmxlZCA9IHZhbHVlID4gMDtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUludGVuc2l0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3Vic3VyZmFjZSB3ZWlnaHRcclxuICAgICAqIEByZXR1cm5zIFRoZSBzdWJzdXJmYWNlIHdlaWdodCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHN1YnN1cmZhY2VXZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS5pc1RyYW5zbHVjZW5jeUVuYWJsZWQgPyB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUludGVuc2l0eSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzdWJzdXJmYWNlIHdlaWdodCB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3Vic3VyZmFjZVdlaWdodFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5SW50ZW5zaXR5VGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3Vic3VyZmFjZSBjb2xvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3Vic3VyZmFjZSB0aW50IGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3Vic3VyZmFjZUNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zdWJTdXJmYWNlLnRpbnRDb2xvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3Vic3VyZmFjZSBjb2xvciB0ZXh0dXJlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdWJzdXJmYWNlIHRpbnQgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3Vic3VyZmFjZUNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lDb2xvclRleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBGVVpaIExBWUVSIChTaGVlbilcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgc2hlZW4gZm9yIFBCUiBtYXRlcmlhbC5cclxuICAgICAqIEVuYWJsZXMgc2hlZW4gYW5kIHNldHMgdXAgcHJvcGVyIGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25maWd1cmVGdXp6KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNoZWVuLmlzRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2hlZW4udXNlUm91Z2huZXNzRnJvbU1haW5UZXh0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2hlZW4uYWxiZWRvU2NhbGluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzaGVlbiB3ZWlnaHQgKG1hcHBlZCB0byBQQlIgc2hlZW4uaW50ZW5zaXR5KS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyBzaGVlbi5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc2hlZW4gd2VpZ2h0IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6eldlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2hlZW4uaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zaGVlbi5pbnRlbnNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGZ1enogd2VpZ2h0IHRleHR1cmUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGZ1enogd2VpZ2h0IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZ1enpXZWlnaHRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICAvLyBQQlJNYXRlcmlhbCBzaGVlbiBzdXBwb3J0cyBnbFRGLXN0eWxlIHNoZWVuIHdoaWNoIGRvZXNuJ3RcclxuICAgICAgICAvLyB1c2UgYSBzZXBhcmF0ZSB0ZXh0dXJlIGZvciBpbnRlbnNpdHkuIFNvIHdlJ2xsIG9ubHkgc2V0IHRoZVxyXG4gICAgICAgIC8vIHdlaWdodCB0ZXh0dXJlIGlmIG5vbmUgaXMgYWxyZWFkeSBhc3NpZ25lZC4gSWYgb25lJ3MgYWxyZWFkeVxyXG4gICAgICAgIC8vIGFzc2lnbmVkLCB3ZSBhc3N1bWUgaXQgY29udGFpbnMgdGhlIHNoZWVuIGNvbG9yIGRhdGEuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9tYXRlcmlhbC5zaGVlbi50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnNoZWVuLnRleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzaGVlbiBjb2xvciAobWFwcGVkIHRvIFBCUiBzaGVlbi5jb2xvcikuXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgc2hlZW4uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNoZWVuIGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6ekNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zaGVlbi5pc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNoZWVuLmNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzaGVlbiBjb2xvciB0ZXh0dXJlIChtYXBwZWQgdG8gUEJSIHNoZWVuLnRleHR1cmUpLlxyXG4gICAgICogQXV0b21hdGljYWxseSBlbmFibGVzIHNoZWVuLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzaGVlbiBjb2xvciB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBmdXp6Q29sb3JUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zaGVlbi50ZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzaGVlbiByb3VnaG5lc3MgKG1hcHBlZCB0byBQQlIgc2hlZW4ucm91Z2huZXNzKS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyBzaGVlbi5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc2hlZW4gcm91Z2huZXNzIHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6elJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2hlZW4uaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zaGVlbi5yb3VnaG5lc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNoZWVuIHJvdWdobmVzcyB0ZXh0dXJlIChtYXBwZWQgdG8gUEJSIHNoZWVuLnRleHR1cmVSb3VnaG5lc3MpLlxyXG4gICAgICogQXV0b21hdGljYWxseSBlbmFibGVzIHNoZWVuLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzaGVlbiByb3VnaG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6elJvdWdobmVzc1RleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNoZWVuLmlzRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2hlZW4udGV4dHVyZVJvdWdobmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFOSVNPVFJPUFlcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIHJvdWdobmVzcyBhbmlzb3Ryb3B5IChtYXBwZWQgdG8gUEJSIGFuaXNvdHJvcHkuaW50ZW5zaXR5KS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyBhbmlzb3Ryb3B5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBhbmlzb3Ryb3B5IGludGVuc2l0eSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYW5pc290cm9weS5pc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmFuaXNvdHJvcHkuaW50ZW5zaXR5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3MgYW5pc290cm9weS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBhbmlzb3Ryb3B5IGludGVuc2l0eSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5hbmlzb3Ryb3B5LmludGVuc2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGFuaXNvdHJvcHkgcm90YXRpb24gKG1hcHBlZCB0byBQQlIgYW5pc290cm9weS5hbmdsZSkuXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgYW5pc290cm9weS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYW5pc290cm9weSByb3RhdGlvbiBhbmdsZSBpbiByYWRpYW5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ2VvbWV0cnlUYW5nZW50QW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmFuaXNvdHJvcHkuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5hbmlzb3Ryb3B5LmFuZ2xlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnZW9tZXRyeSB0YW5nZW50IHRleHR1cmUgKG1hcHBlZCB0byBQQlIgYW5pc290cm9weS50ZXh0dXJlKS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyBhbmlzb3Ryb3B5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBhbmlzb3Ryb3B5IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5VGFuZ2VudFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmFuaXNvdHJvcHkuaXNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5hbmlzb3Ryb3B5LnRleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlb21ldHJ5IHRhbmdlbnQgdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBhbmlzb3Ryb3B5IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdlb21ldHJ5VGFuZ2VudFRleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuYW5pc290cm9weS50ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBnbFRGLXN0eWxlIGFuaXNvdHJvcHkgZm9yIHRoZSBtYXRlcmlhbC5cclxuICAgICAqIE5vdGU6IFBCUiBtYXRlcmlhbHMgZG9uJ3QgbmVlZCB0aGlzIGNvbmZpZ3VyYXRpb24sIHNvIHRoaXMgaXMgYSBuby1vcC5cclxuICAgICAqIEBwYXJhbSB1c2VHbHRmU3R5bGUgV2hldGhlciB0byB1c2UgZ2xURi1zdHlsZSBhbmlzb3Ryb3B5IChpZ25vcmVkIGZvciBQQlIpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25maWd1cmVHbHRmU3R5bGVBbmlzb3Ryb3B5KHVzZUdsdGZTdHlsZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICAvLyBQQlIgbWF0ZXJpYWxzIGRvbid0IG5lZWQgdGhpcyBjb25maWd1cmF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVEhJTiBGSUxNIElSSURFU0NFTkNFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpcmlkZXNjZW5jZSB3ZWlnaHQgKG1hcHBlZCB0byBQQlIgaXJpZGVzY2VuY2UuaW50ZW5zaXR5KS5cclxuICAgICAqIEF1dG9tYXRpY2FsbHkgZW5hYmxlcyBpcmlkZXNjZW5jZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgaXJpZGVzY2VuY2UgaW50ZW5zaXR5IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdGhpbkZpbG1XZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmlyaWRlc2NlbmNlLmlzRW5hYmxlZCA9IHZhbHVlID4gMDtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5pcmlkZXNjZW5jZS5pbnRlbnNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGlyaWRlc2NlbmNlIElPUiAobWFwcGVkIHRvIFBCUiBpcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbikuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGlyaWRlc2NlbmNlIElPUiB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRoaW5GaWxtSW9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5pcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaXJpZGVzY2VuY2UgdGhpY2tuZXNzIG1pbmltdW0gKG1hcHBlZCB0byBQQlIgaXJpZGVzY2VuY2UubWluaW11bVRoaWNrbmVzcykuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG1pbmltdW0gdGhpY2tuZXNzIHZhbHVlIGluIG5hbm9tZXRlcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0aGluRmlsbVRoaWNrbmVzc01pbmltdW0odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGlyaWRlc2NlbmNlIHRoaWNrbmVzcyBtYXhpbXVtIChtYXBwZWQgdG8gUEJSIGlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBtYXhpbXVtIHRoaWNrbmVzcyB2YWx1ZSBpbiBuYW5vbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdGhpbkZpbG1UaGlja25lc3NNYXhpbXVtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5pcmlkZXNjZW5jZS5tYXhpbXVtVGhpY2tuZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0aGluIGZpbG0gd2VpZ2h0IHRleHR1cmUgKG1hcHBlZCB0byBQQlIgaXJpZGVzY2VuY2UudGV4dHVyZSkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHRoaW4gZmlsbSB3ZWlnaHQgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdGhpbkZpbG1XZWlnaHRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5pcmlkZXNjZW5jZS50ZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpcmlkZXNjZW5jZSB0aGlja25lc3MgdGV4dHVyZSAobWFwcGVkIHRvIFBCUiBpcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlKS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgaXJpZGVzY2VuY2UgdGhpY2tuZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRoaW5GaWxtVGhpY2tuZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuaXJpZGVzY2VuY2UudGhpY2tuZXNzVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIERJU1BFUlNJT05cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHRyYW5zbWlzc2lvbiBkaXNwZXJzaW9uIHZhbHVlLlxyXG4gICAgICogTm90ZTogUEJSIGRvZXNuJ3QgaGF2ZSBkaXJlY3QgZGlzcGVyc2lvbiBzdXBwb3J0LCBzbyB0aGlzIHN0b3JlcyBpdCBhcyBtZXRhZGF0YS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZGlzcGVyc2lvbiB2YWx1ZSAoc3RvcmVkIGFzIG1ldGFkYXRhKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRyYW5zbWlzc2lvbkRpc3BlcnNpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFBCUiBkb2Vzbid0IGhhdmUgYSBkaXJlY3QgZGlzcGVyc2lvbiBwcm9wZXJ0eSwgdGhpcyB3b3VsZCBuZWVkIGN1c3RvbSBzaGFkZXIgbW9kaWZpY2F0aW9uXHJcbiAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwgc3RvcmUgaXQgYXMgbWV0YWRhdGFcclxuICAgICAgICAodGhpcy5fbWF0ZXJpYWwgYXMgYW55KS5fZGlzcGVyc2lvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVOTElUIE1BVEVSSUFMU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBtYXRlcmlhbCBpcyB1bmxpdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIG1ha2UgdGhlIG1hdGVyaWFsIHVubGl0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdW5saXQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC51bmxpdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEdFT01FVFJZIFBBUkFNRVRFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdlb21ldHJ5IG9wYWNpdHkgKG1hcHBlZCB0byBQQlIgYWxwaGEpLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBvcGFjaXR5IHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ2VvbWV0cnlPcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5hbHBoYSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZ2VvbWV0cnkgb3BhY2l0eS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBvcGFjaXR5IHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2VvbWV0cnlPcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmFscGhhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZ2VvbWV0cnkgbm9ybWFsIHRleHR1cmUgKG1hcHBlZCB0byBQQlIgYnVtcFRleHR1cmUpLlxyXG4gICAgICogQWxzbyBmb3JjZXMgaXJyYWRpYW5jZSBjb21wdXRhdGlvbiBpbiBmcmFnbWVudCBzaGFkZXIgZm9yIGJldHRlciBsaWdodGluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbm9ybWFsIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Tm9ybWFsVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYnVtcFRleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5mb3JjZUlycmFkaWFuY2VJbkZyYWdtZW50ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlb21ldHJ5IG5vcm1hbCB0ZXh0dXJlLlxyXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnZW9tZXRyeU5vcm1hbFRleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuYnVtcFRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBub3JtYWwgbWFwIGludmVyc2lvbnMgZm9yIHRoZSBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSBpbnZlcnRYIFdoZXRoZXIgdG8gaW52ZXJ0IHRoZSBub3JtYWwgbWFwIG9uIHRoZSBYIGF4aXNcclxuICAgICAqIEBwYXJhbSBpbnZlcnRZIFdoZXRoZXIgdG8gaW52ZXJ0IHRoZSBub3JtYWwgbWFwIG9uIHRoZSBZIGF4aXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldE5vcm1hbE1hcEludmVyc2lvbnMoaW52ZXJ0WDogYm9vbGVhbiwgaW52ZXJ0WTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmludmVydE5vcm1hbE1hcFggPSBpbnZlcnRYO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmludmVydE5vcm1hbE1hcFkgPSBpbnZlcnRZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZ2VvbWV0cnkgY29hdCBub3JtYWwgdGV4dHVyZSAobWFwcGVkIHRvIFBCUiBjbGVhckNvYXQuYnVtcFRleHR1cmUpLlxyXG4gICAgICogQXV0b21hdGljYWxseSBlbmFibGVzIGNsZWFyIGNvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgbm9ybWFsIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Q29hdE5vcm1hbFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC5pc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZ2VvbWV0cnkgY29hdCBub3JtYWwgdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2F0IG5vcm1hbCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnZW9tZXRyeUNvYXROb3JtYWxUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdlb21ldHJ5IGNvYXQgbm9ybWFsIHRleHR1cmUgc2NhbGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNjYWxlIHZhbHVlIGZvciB0aGUgY29hdCBub3JtYWwgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Q29hdE5vcm1hbFRleHR1cmVTY2FsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFsLmNsZWFyQ29hdC5idW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5jbGVhckNvYXQuYnVtcFRleHR1cmUubGV2ZWwgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==