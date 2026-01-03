"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_openpbrMaterialLoadingAdapter_js"],{

/***/ "../loaders/dist/glTF/2.0/openpbrMaterialLoadingAdapter.js":
/*!*****************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/openpbrMaterialLoadingAdapter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenPBRMaterialLoadingAdapter: () => (/* binding */ OpenPBRMaterialLoadingAdapter)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Material Loading Adapter for OpenPBR materials that provides a unified OpenPBR-like interface.
 */
class OpenPBRMaterialLoadingAdapter {
    /**
     * Creates a new instance of the OpenPBRMaterialLoadingAdapter.
     * @param material - The OpenPBR material to adapt.
     */
    constructor(material) {
        this._material = material;
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
     * Note: OpenPBR doesn't have a direct equivalent, so this is a no-op.
     * @param value The alpha cutoff threshold (ignored for OpenPBR)
     */
    set alphaCutOff(value) {
        // OpenPBR doesn't have a direct equivalent, but could be implemented if needed
    }
    /**
     * Gets the alpha cutoff value.
     * @returns Default value of 0.5 (OpenPBR doesn't support this directly)
     */
    get alphaCutOff() {
        return 0.5; // Default value
    }
    /**
     * Sets whether to use alpha from the base color texture.
     * Note: OpenPBR handles this differently through the baseColorTexture alpha channel.
     * @param value True to use alpha from base color texture (handled automatically in OpenPBR)
     */
    set useAlphaFromBaseColorTexture(value) {
        this._material._useAlphaFromBaseColorTexture = value;
    }
    /**
     * Gets whether alpha is used from the base color texture.
     * @returns Always false for OpenPBR as it's handled automatically
     */
    get useAlphaFromBaseColorTexture() {
        return false;
    }
    /**
     * Gets whether the transparency is treated as alpha coverage.
     */
    get transparencyAsAlphaCoverage() {
        // OpenPBR doesn't support treating transparency as alpha coverage.
        return false;
    }
    /**
     * Sets/Gets whether the transparency is treated as alpha coverage
     */
    set transparencyAsAlphaCoverage(value) {
        // OpenPBR doesn't support treating transparency as alpha coverage.
    }
    // ========================================
    // BASE PARAMETERS
    // ========================================
    /**
     * Sets the base color of the OpenPBR material.
     * @param value The base color as a Color3
     */
    set baseColor(value) {
        this._material.baseColor = value;
    }
    /**
     * Gets the base color of the OpenPBR material.
     * @returns The base color as a Color3
     */
    get baseColor() {
        return this._material.baseColor;
    }
    /**
     * Sets the base color texture of the OpenPBR material.
     * @param value The base color texture or null
     */
    set baseColorTexture(value) {
        this._material.baseColorTexture = value;
    }
    /**
     * Gets the base color texture of the OpenPBR material.
     * @returns The base color texture or null
     */
    get baseColorTexture() {
        return this._material.baseColorTexture;
    }
    /**
     * Sets the base diffuse roughness of the OpenPBR material.
     * @param value The diffuse roughness value (0-1)
     */
    set baseDiffuseRoughness(value) {
        this._material.baseDiffuseRoughness = value;
    }
    /**
     * Gets the base diffuse roughness of the OpenPBR material.
     * @returns The diffuse roughness value (0-1)
     */
    get baseDiffuseRoughness() {
        return this._material.baseDiffuseRoughness;
    }
    /**
     * Sets the base diffuse roughness texture of the OpenPBR material.
     * @param value The diffuse roughness texture or null
     */
    set baseDiffuseRoughnessTexture(value) {
        this._material.baseDiffuseRoughnessTexture = value;
    }
    /**
     * Gets the base diffuse roughness texture of the OpenPBR material.
     * @returns The diffuse roughness texture or null
     */
    get baseDiffuseRoughnessTexture() {
        return this._material.baseDiffuseRoughnessTexture;
    }
    /**
     * Sets the base metalness value of the OpenPBR material.
     * @param value The metalness value (0-1)
     */
    set baseMetalness(value) {
        this._material.baseMetalness = value;
    }
    /**
     * Gets the base metalness value of the OpenPBR material.
     * @returns The metalness value (0-1)
     */
    get baseMetalness() {
        return this._material.baseMetalness;
    }
    /**
     * Sets the base metalness texture of the OpenPBR material.
     * @param value The metalness texture or null
     */
    set baseMetalnessTexture(value) {
        this._material.baseMetalnessTexture = value;
    }
    /**
     * Gets the base metalness texture of the OpenPBR material.
     * @returns The metalness texture or null
     */
    get baseMetalnessTexture() {
        return this._material.baseMetalnessTexture;
    }
    /**
     * Sets whether to use roughness from the metallic texture's green channel.
     * @param value True to use green channel for roughness
     */
    set useRoughnessFromMetallicTextureGreen(value) {
        this._material._useRoughnessFromMetallicTextureGreen = value;
    }
    /**
     * Sets whether to use metalness from the metallic texture's blue channel.
     * @param value True to use blue channel for metalness
     */
    set useMetallicFromMetallicTextureBlue(value) {
        this._material._useMetallicFromMetallicTextureBlue = value;
    }
    // ========================================
    // SPECULAR PARAMETERS
    // ========================================
    /**
     * Configures specular properties for OpenPBR material.
     * @param _enableEdgeColor Whether to enable edge color support (ignored for OpenPBR)
     */
    enableSpecularEdgeColor(_enableEdgeColor = false) {
        // OpenPBR already supports edge color natively, no configuration needed
    }
    /**
     * Sets the specular weight of the OpenPBR material.
     * @param value The specular weight value (0-1)
     */
    set specularWeight(value) {
        this._material.specularWeight = value;
    }
    /**
     * Gets the specular weight of the OpenPBR material.
     * @returns The specular weight value (0-1)
     */
    get specularWeight() {
        return this._material.specularWeight;
    }
    /**
     * Sets the specular weight texture of the OpenPBR material.
     * If the same texture is used for specular color, optimizes by using alpha channel for weight.
     * @param value The specular weight texture or null
     */
    set specularWeightTexture(value) {
        if (this._material.specularColorTexture === value) {
            this._material.specularWeightTexture = null;
            this._material._useSpecularWeightFromSpecularColorTexture = true;
            this._material._useSpecularWeightFromAlpha = true;
        }
        else {
            this._material.specularWeightTexture = value;
        }
    }
    /**
     * Gets the specular weight texture of the OpenPBR material.
     * @returns The specular weight texture or null
     */
    get specularWeightTexture() {
        return this._material.specularWeightTexture;
    }
    /**
     * Sets the specular color of the OpenPBR material.
     * @param value The specular color as a Color3
     */
    set specularColor(value) {
        this._material.specularColor = value;
    }
    /**
     * Gets the specular color of the OpenPBR material.
     * @returns The specular color as a Color3
     */
    get specularColor() {
        return this._material.specularColor;
    }
    /**
     * Sets the specular color texture of the OpenPBR material.
     * If the same texture is used for specular weight, optimizes by using alpha channel for weight.
     * @param value The specular color texture or null
     */
    set specularColorTexture(value) {
        this._material.specularColorTexture = value;
        if (this._material.specularWeightTexture === this._material.specularColorTexture) {
            this._material.specularWeightTexture = null;
            this._material._useSpecularWeightFromSpecularColorTexture = true;
            this._material._useSpecularWeightFromAlpha = true;
        }
    }
    /**
     * Gets the specular color texture of the OpenPBR material.
     * @returns The specular color texture or null
     */
    get specularColorTexture() {
        return this._material.specularColorTexture;
    }
    /**
     * Sets the specular roughness of the OpenPBR material.
     * @param value The roughness value (0-1)
     */
    set specularRoughness(value) {
        this._material.specularRoughness = value;
    }
    /**
     * Gets the specular roughness of the OpenPBR material.
     * @returns The roughness value (0-1)
     */
    get specularRoughness() {
        return this._material.specularRoughness;
    }
    /**
     * Sets the specular roughness texture of the OpenPBR material.
     * @param value The roughness texture or null
     */
    set specularRoughnessTexture(value) {
        this._material.specularRoughnessTexture = value;
    }
    /**
     * Gets the specular roughness texture of the OpenPBR material.
     * @returns The roughness texture or null
     */
    get specularRoughnessTexture() {
        return this._material.specularRoughnessTexture;
    }
    /**
     * Sets the specular index of refraction (IOR) of the OpenPBR material.
     * @param value The IOR value
     */
    set specularIor(value) {
        this._material.specularIor = value;
    }
    /**
     * Gets the specular index of refraction (IOR) of the OpenPBR material.
     * @returns The IOR value
     */
    get specularIor() {
        return this._material.specularIor;
    }
    // ========================================
    // EMISSION PARAMETERS
    // ========================================
    /**
     * Sets the emission color of the OpenPBR material.
     * @param value The emission color as a Color3
     */
    set emissionColor(value) {
        this._material.emissionColor = value;
    }
    /**
     * Gets the emission color of the OpenPBR material.
     * @returns The emission color as a Color3
     */
    get emissionColor() {
        return this._material.emissionColor;
    }
    /**
     * Sets the emission luminance of the OpenPBR material.
     * @param value The emission luminance value
     */
    set emissionLuminance(value) {
        this._material.emissionLuminance = value;
    }
    /**
     * Gets the emission luminance of the OpenPBR material.
     * @returns The emission luminance value
     */
    get emissionLuminance() {
        return this._material.emissionLuminance;
    }
    /**
     * Sets the emission color texture of the OpenPBR material.
     * @param value The emission texture or null
     */
    set emissionColorTexture(value) {
        this._material.emissionColorTexture = value;
    }
    /**
     * Gets the emission color texture of the OpenPBR material.
     * @returns The emission texture or null
     */
    get emissionColorTexture() {
        return this._material.emissionColorTexture;
    }
    // ========================================
    // AMBIENT OCCLUSION
    // ========================================
    /**
     * Sets the ambient occlusion texture of the OpenPBR material.
     * @param value The ambient occlusion texture or null
     */
    set ambientOcclusionTexture(value) {
        this._material.ambientOcclusionTexture = value;
    }
    /**
     * Gets the ambient occlusion texture of the OpenPBR material.
     * @returns The ambient occlusion texture or null
     */
    get ambientOcclusionTexture() {
        return this._material.ambientOcclusionTexture;
    }
    /**
     * Sets the ambient occlusion texture strength by modifying the texture's level.
     * @param value The strength value (typically 0-1)
     */
    set ambientOcclusionTextureStrength(value) {
        const texture = this._material.ambientOcclusionTexture;
        if (texture) {
            texture.level = value;
        }
    }
    /**
     * Gets the ambient occlusion texture strength from the texture's level property.
     * @returns The strength value, defaults to 1.0 if no texture or level is set
     */
    get ambientOcclusionTextureStrength() {
        const texture = this._material.ambientOcclusionTexture;
        return texture?.level ?? 1.0;
    }
    // ========================================
    // COAT PARAMETERS
    // ========================================
    /**
     * Configures coat parameters for OpenPBR material.
     * OpenPBR coat is already built-in, so no configuration is needed.
     */
    configureCoat() {
        // OpenPBR coat is already built-in, no configuration needed
    }
    /**
     * Sets the coat weight of the OpenPBR material.
     * @param value The coat weight value (0-1)
     */
    set coatWeight(value) {
        this._material.coatWeight = value;
    }
    /**
     * Gets the coat weight of the OpenPBR material.
     * @returns The coat weight value (0-1)
     */
    get coatWeight() {
        return this._material.coatWeight;
    }
    /**
     * Sets the coat weight texture of the OpenPBR material.
     * @param value The coat weight texture or null
     */
    set coatWeightTexture(value) {
        this._material.coatWeightTexture = value;
    }
    /**
     * Gets the coat weight texture of the OpenPBR material.
     * @returns The coat weight texture or null
     */
    get coatWeightTexture() {
        return this._material.coatWeightTexture;
    }
    /**
     * Sets the coat color of the OpenPBR material.
     * @param value The coat color as a Color3
     */
    set coatColor(value) {
        this._material.coatColor = value;
    }
    /**
     * Sets the coat color texture of the OpenPBR material.
     * @param value The coat color texture or null
     */
    set coatColorTexture(value) {
        this._material.coatColorTexture = value;
    }
    /**
     * Sets the coat roughness of the OpenPBR material.
     * @param value The coat roughness value (0-1)
     */
    set coatRoughness(value) {
        this._material.coatRoughness = value;
    }
    /**
     * Gets the coat roughness of the OpenPBR material.
     * @returns The coat roughness value (0-1)
     */
    get coatRoughness() {
        return this._material.coatRoughness;
    }
    /**
     * Sets the coat roughness texture of the OpenPBR material.
     * @param value The coat roughness texture or null
     */
    set coatRoughnessTexture(value) {
        this._material.coatRoughnessTexture = value;
        if (value) {
            this._material._useCoatRoughnessFromGreenChannel = true;
        }
    }
    /**
     * Gets the coat roughness texture of the OpenPBR material.
     * @returns The coat roughness texture or null
     */
    get coatRoughnessTexture() {
        return this._material.coatRoughnessTexture;
    }
    /**
     * Sets the coat index of refraction (IOR) of the OpenPBR material.
     */
    set coatIor(value) {
        this._material.coatIor = value;
    }
    /**
     * Sets the coat darkening value of the OpenPBR material.
     * @param value The coat darkening value
     */
    set coatDarkening(value) {
        this._material.coatDarkening = value;
    }
    /**
     * Sets the coat darkening texture (OpenPBR: coatDarkeningTexture, no PBR equivalent)
     */
    set coatDarkeningTexture(value) {
        this._material.coatDarkeningTexture = value;
    }
    /**
     * Sets the coat roughness anisotropy.
     * TODO: Implementation pending OpenPBR coat anisotropy feature availability.
     * @param value The coat anisotropy intensity value
     */
    set coatRoughnessAnisotropy(value) {
        this._material.coatRoughnessAnisotropy = value;
    }
    /**
     * Gets the coat roughness anisotropy.
     * TODO: Implementation pending OpenPBR coat anisotropy feature availability.
     * @returns Currently returns 0 as coat anisotropy is not yet available
     */
    get coatRoughnessAnisotropy() {
        return this._material.coatRoughnessAnisotropy;
    }
    /**
     * Sets the coat tangent angle for anisotropy.
     * TODO: Implementation pending OpenPBR coat anisotropy feature availability.
     * @param value The coat anisotropy rotation angle in radians
     */
    set geometryCoatTangentAngle(value) {
        this._material.geometryCoatTangentAngle = value;
    }
    /**
     * Sets the coat tangent texture for anisotropy.
     * TODO: Implementation pending OpenPBR coat anisotropy feature availability.
     * @param value The coat anisotropy texture or null
     */
    set geometryCoatTangentTexture(value) {
        this._material.geometryCoatTangentTexture = value;
        if (value) {
            this._material._useCoatRoughnessAnisotropyFromTangentTexture = true;
        }
    }
    /**
     * Gets the coat tangent texture for anisotropy.
     * TODO: Implementation pending OpenPBR coat anisotropy feature availability.
     * @returns Currently returns null as coat anisotropy is not yet available
     */
    get geometryCoatTangentTexture() {
        return this._material.geometryCoatTangentTexture;
    }
    // ========================================
    // TRANSMISSION LAYER
    // ========================================
    /**
     * Sets the transmission weight.
     * TODO: Implementation pending OpenPBR transmission feature availability.
     * @param value The transmission weight value (0-1)
     */
    set transmissionWeight(value) {
        // TODO: Implement when OpenPBR transmission is available
        // this._material.transmissionWeight = value;
    }
    /**
     * Sets the transmission weight texture.
     * TODO: Implementation pending OpenPBR transmission feature availability.
     * @param value The transmission weight texture or null
     */
    set transmissionWeightTexture(value) {
        // TODO: Implement when OpenPBR transmission is available
        // this._material.transmissionWeightTexture = value;
    }
    /**
     * Gets the transmission weight.
     * TODO: Implementation pending OpenPBR transmission feature availability.
     * @returns Currently returns 0 as transmission is not yet available
     */
    get transmissionWeight() {
        // TODO: Implement when OpenPBR transmission is available
        // return this._material.transmissionWeight;
        return 0;
    }
    /**
     * Gets the transmission dispersion Abbe number.
     * @param value The Abbe number value
     */
    set transmissionDispersionAbbeNumber(value) {
        // TODO: Implement when OpenPBR transmission dispersion is available
    }
    /**
     * Configures transmission for OpenPBR material.
     * TODO: Implementation pending OpenPBR transmission feature availability.
     */
    configureTransmission() {
        // OpenPBR transmission will be configured differently when available
    }
    // ========================================
    // VOLUME PROPERTIES (Subsurface Scattering)
    // ========================================
    /**
     * Sets the attenuation distance for volume scattering.
     * TODO: Implementation pending OpenPBR volume feature availability.
     * @param value The attenuation distance value
     */
    set transmissionDepth(value) {
        // TODO: Implement when OpenPBR volume properties are available
        // this._material.attenuationDistance = value;
    }
    /**
     * Sets the attenuation color for volume scattering.
     * TODO: Implementation pending OpenPBR volume feature availability.
     * @param value The attenuation color as a Color3
     */
    set transmissionColor(value) {
        // TODO: Implement when OpenPBR volume properties are available
        // this._material.attenuationColor = value;
    }
    /**
     * Sets the thickness texture for volume scattering.
     * TODO: Implementation pending OpenPBR volume feature availability.
     * @param value The thickness texture or null
     */
    set volumeThicknessTexture(value) {
        // TODO: Implement when OpenPBR volume properties are available
        // this._material.thicknessTexture = value;
    }
    /**
     * Sets the thickness factor for volume scattering.
     * TODO: Implementation pending OpenPBR volume feature availability.
     * @param value The thickness value
     */
    set volumeThickness(value) {
        // TODO: Implement when OpenPBR volume properties are available
        // this._material.thickness = value;
    }
    // ========================================
    // SUBSURFACE PROPERTIES (Subsurface Scattering)
    // ========================================
    /**
     * Configures subsurface properties for PBR material
     */
    configureSubsurface() {
        // TODO
    }
    /**
     * Sets the subsurface weight
     */
    set subsurfaceWeight(value) {
        // TODO
    }
    get subsurfaceWeight() {
        // TODO
        return 0;
    }
    /**
     * Sets the subsurface weight texture
     */
    set subsurfaceWeightTexture(value) {
        // TODO
    }
    /**
     * Sets the subsurface color.
     * @param value The subsurface tint color as a Color3
     */
    set subsurfaceColor(value) {
        // TODO
    }
    /**
     * Sets the subsurface color texture.
     * @param value The subsurface tint texture or null
     */
    set subsurfaceColorTexture(value) {
        // TODO
    }
    // ========================================
    // FUZZ LAYER (Sheen)
    // ========================================
    /**
     * Configures fuzz for OpenPBR.
     * Enables fuzz and sets up proper configuration.
     */
    configureFuzz() {
        // Currently no setup to do for OpenPBR
    }
    /**
     * Sets the fuzz weight.
     * @param value The fuzz weight value
     */
    set fuzzWeight(value) {
        this._material.fuzzWeight = value;
    }
    /**
     * Sets the fuzz weight texture.
     * @param value The fuzz weight texture or null
     */
    set fuzzWeightTexture(value) {
        this._material.fuzzWeightTexture = value;
    }
    /**
     * Sets the fuzz color.
     * @param value The fuzz color as a Color3
     */
    set fuzzColor(value) {
        this._material.fuzzColor = value;
    }
    /**
     * Sets the fuzz color texture.
     * @param value The fuzz color texture or null
     */
    set fuzzColorTexture(value) {
        this._material.fuzzColorTexture = value;
    }
    /**
     * Sets the fuzz roughness.
     * @param value The fuzz roughness value (0-1)
     */
    set fuzzRoughness(value) {
        this._material.fuzzRoughness = value;
    }
    /**
     * Sets the fuzz roughness texture.
     * @param value The fuzz roughness texture or null
     */
    set fuzzRoughnessTexture(value) {
        this._material.fuzzRoughnessTexture = value;
        this._material._useFuzzRoughnessFromTextureAlpha = true;
    }
    // ========================================
    // ANISOTROPY
    // ========================================
    /**
     * Sets the specular roughness anisotropy of the OpenPBR material.
     * @param value The anisotropy intensity value
     */
    set specularRoughnessAnisotropy(value) {
        this._material.specularRoughnessAnisotropy = value;
    }
    /**
     * Gets the specular roughness anisotropy of the OpenPBR material.
     * @returns The anisotropy intensity value
     */
    get specularRoughnessAnisotropy() {
        return this._material.specularRoughnessAnisotropy;
    }
    /**
     * Sets the anisotropy rotation angle.
     * @param value The anisotropy rotation angle in radians
     */
    set geometryTangentAngle(value) {
        this._material.geometryTangentAngle = value;
    }
    /**
     * Sets the geometry tangent texture for anisotropy.
     * Automatically enables using anisotropy from the tangent texture.
     * @param value The anisotropy texture or null
     */
    set geometryTangentTexture(value) {
        this._material.geometryTangentTexture = value;
        this._material._useSpecularRoughnessAnisotropyFromTangentTexture = true;
    }
    /**
     * Gets the geometry tangent texture for anisotropy.
     * @returns The anisotropy texture or null
     */
    get geometryTangentTexture() {
        return this._material.geometryTangentTexture;
    }
    /**
     * Configures glTF-style anisotropy for the OpenPBR material.
     * @param useGltfStyle Whether to use glTF-style anisotropy
     */
    configureGltfStyleAnisotropy(useGltfStyle = true) {
        this._material._useGltfStyleAnisotropy = useGltfStyle;
    }
    // ========================================
    // THIN FILM IRIDESCENCE
    // ========================================
    /**
     * Sets the thin film weight.
     * @param value The thin film weight value
     */
    set thinFilmWeight(value) {
        this._material.thinFilmWeight = value;
    }
    /**
     * Sets the thin film IOR.
     * @param value The thin film IOR value
     */
    set thinFilmIor(value) {
        this._material.thinFilmIor = value;
    }
    /**
     * Sets the thin film thickness minimum.
     * @param value The minimum thickness value in nanometers
     */
    set thinFilmThicknessMinimum(value) {
        this._material.thinFilmThicknessMin = value / 1000.0; // Convert to micrometers for OpenPBR
    }
    /**
     * Sets the thin film thickness maximum.
     * @param value The maximum thickness value in nanometers
     */
    set thinFilmThicknessMaximum(value) {
        this._material.thinFilmThickness = value / 1000.0; // Convert to micrometers for OpenPBR
    }
    /**
     * Sets the thin film weight texture.
     * @param value The thin film weight texture or null
     */
    set thinFilmWeightTexture(value) {
        this._material.thinFilmWeightTexture = value;
    }
    /**
     * Sets the thin film thickness texture.
     * @param value The thin film thickness texture or null
     */
    set thinFilmThicknessTexture(value) {
        this._material.thinFilmThicknessTexture = value;
        this._material._useThinFilmThicknessFromTextureGreen = true;
    }
    // ========================================
    // UNLIT MATERIALS
    // ========================================
    /**
     * Sets whether the OpenPBR material is unlit.
     * @param value True to make the material unlit
     */
    set unlit(value) {
        this._material.unlit = value;
    }
    // ========================================
    // GEOMETRY PARAMETERS
    // ========================================
    /**
     * Sets the geometry opacity of the OpenPBR material.
     * @param value The opacity value (0-1)
     */
    set geometryOpacity(value) {
        this._material.geometryOpacity = value;
    }
    /**
     * Gets the geometry opacity of the OpenPBR material.
     * @returns The opacity value (0-1)
     */
    get geometryOpacity() {
        return this._material.geometryOpacity;
    }
    /**
     * Sets the geometry normal texture of the OpenPBR material.
     * @param value The normal texture or null
     */
    set geometryNormalTexture(value) {
        this._material.geometryNormalTexture = value;
    }
    /**
     * Gets the geometry normal texture of the OpenPBR material.
     * @returns The normal texture or null
     */
    get geometryNormalTexture() {
        return this._material.geometryNormalTexture;
    }
    /**
     * Sets the normal map inversions for the OpenPBR material.
     * Note: OpenPBR may handle normal map inversions differently or may not need them.
     * @param invertX Whether to invert the normal map on the X axis (may be ignored)
     * @param invertY Whether to invert the normal map on the Y axis (may be ignored)
     */
    setNormalMapInversions(invertX, invertY) {
        // OpenPBR handles normal map inversions differently or may not need them
    }
    /**
     * Sets the geometry coat normal texture of the OpenPBR material.
     * @param value The coat normal texture or null
     */
    set geometryCoatNormalTexture(value) {
        this._material.geometryCoatNormalTexture = value;
    }
    /**
     * Gets the geometry coat normal texture of the OpenPBR material.
     * @returns The coat normal texture or null
     */
    get geometryCoatNormalTexture() {
        return this._material.geometryCoatNormalTexture;
    }
    /**
     * Sets the geometry coat normal texture scale.
     * @param value The scale value for the coat normal texture
     */
    set geometryCoatNormalTextureScale(value) {
        if (this._material.geometryCoatNormalTexture) {
            this._material.geometryCoatNormalTexture.level = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX29wZW5wYnJNYXRlcmlhbExvYWRpbmdBZGFwdGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBRUE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL29wZW5wYnJNYXRlcmlhbExvYWRpbmdBZGFwdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgT3BlblBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9vcGVucGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWxMb2FkaW5nQWRhcHRlciB9IGZyb20gXCIuL21hdGVyaWFsTG9hZGluZ0FkYXB0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBNYXRlcmlhbCBMb2FkaW5nIEFkYXB0ZXIgZm9yIE9wZW5QQlIgbWF0ZXJpYWxzIHRoYXQgcHJvdmlkZXMgYSB1bmlmaWVkIE9wZW5QQlItbGlrZSBpbnRlcmZhY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT3BlblBCUk1hdGVyaWFsTG9hZGluZ0FkYXB0ZXIgaW1wbGVtZW50cyBJTWF0ZXJpYWxMb2FkaW5nQWRhcHRlciB7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbDogT3BlblBCUk1hdGVyaWFsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgT3BlblBCUk1hdGVyaWFsTG9hZGluZ0FkYXB0ZXIuXHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgLSBUaGUgT3BlblBCUiBtYXRlcmlhbCB0byBhZGFwdC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWF0ZXJpYWw6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSBtYXRlcmlhbCBhcyBPcGVuUEJSTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB1bmRlcmx5aW5nIG1hdGVyaWFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF0ZXJpYWwoKTogT3BlblBCUk1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBtYXRlcmlhbCBzaG91bGQgYmUgdHJlYXRlZCBhcyB1bmxpdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzVW5saXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLnVubGl0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBtYXRlcmlhbCBzaG91bGQgYmUgdHJlYXRlZCBhcyB1bmxpdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGlzVW5saXQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC51bmxpdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENVTExJTkcgUFJPUEVSVElFU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIGJhY2sgZmFjZSBjdWxsaW5nIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ1ZSB0byBlbmFibGUgYmFjayBmYWNlIGN1bGxpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBiYWNrRmFjZUN1bGxpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciBiYWNrIGZhY2UgY3VsbGluZyBpcyBlbmFibGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBiYWNrIGZhY2UgY3VsbGluZyBpcyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYmFja0ZhY2VDdWxsaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgdHdvLXNpZGVkIGxpZ2h0aW5nIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ1ZSB0byBlbmFibGUgdHdvLXNpZGVkIGxpZ2h0aW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdHdvU2lkZWRMaWdodGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnR3b1NpZGVkTGlnaHRpbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0d28tc2lkZWQgbGlnaHRpbmcgaXMgZW5hYmxlZC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdHdvLXNpZGVkIGxpZ2h0aW5nIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0d29TaWRlZExpZ2h0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEFMUEhBIFBST1BFUlRJRVNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGFscGhhIGN1dG9mZiB2YWx1ZSBmb3IgYWxwaGEgdGVzdGluZy5cclxuICAgICAqIE5vdGU6IE9wZW5QQlIgZG9lc24ndCBoYXZlIGEgZGlyZWN0IGVxdWl2YWxlbnQsIHNvIHRoaXMgaXMgYSBuby1vcC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYWxwaGEgY3V0b2ZmIHRocmVzaG9sZCAoaWdub3JlZCBmb3IgT3BlblBCUilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhbHBoYUN1dE9mZih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gT3BlblBCUiBkb2Vzbid0IGhhdmUgYSBkaXJlY3QgZXF1aXZhbGVudCwgYnV0IGNvdWxkIGJlIGltcGxlbWVudGVkIGlmIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYWxwaGEgY3V0b2ZmIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMgRGVmYXVsdCB2YWx1ZSBvZiAwLjUgKE9wZW5QQlIgZG9lc24ndCBzdXBwb3J0IHRoaXMgZGlyZWN0bHkpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYWxwaGFDdXRPZmYoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMC41OyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgdG8gdXNlIGFscGhhIGZyb20gdGhlIGJhc2UgY29sb3IgdGV4dHVyZS5cclxuICAgICAqIE5vdGU6IE9wZW5QQlIgaGFuZGxlcyB0aGlzIGRpZmZlcmVudGx5IHRocm91Z2ggdGhlIGJhc2VDb2xvclRleHR1cmUgYWxwaGEgY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIHVzZSBhbHBoYSBmcm9tIGJhc2UgY29sb3IgdGV4dHVyZSAoaGFuZGxlZCBhdXRvbWF0aWNhbGx5IGluIE9wZW5QQlIpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdXNlQWxwaGFGcm9tQmFzZUNvbG9yVGV4dHVyZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLl91c2VBbHBoYUZyb21CYXNlQ29sb3JUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgYWxwaGEgaXMgdXNlZCBmcm9tIHRoZSBiYXNlIGNvbG9yIHRleHR1cmUuXHJcbiAgICAgKiBAcmV0dXJucyBBbHdheXMgZmFsc2UgZm9yIE9wZW5QQlIgYXMgaXQncyBoYW5kbGVkIGF1dG9tYXRpY2FsbHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1c2VBbHBoYUZyb21CYXNlQ29sb3JUZXh0dXJlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciB0aGUgdHJhbnNwYXJlbmN5IGlzIHRyZWF0ZWQgYXMgYWxwaGEgY292ZXJhZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHJhbnNwYXJlbmN5QXNBbHBoYUNvdmVyYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIE9wZW5QQlIgZG9lc24ndCBzdXBwb3J0IHRyZWF0aW5nIHRyYW5zcGFyZW5jeSBhcyBhbHBoYSBjb3ZlcmFnZS5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzL0dldHMgd2hldGhlciB0aGUgdHJhbnNwYXJlbmN5IGlzIHRyZWF0ZWQgYXMgYWxwaGEgY292ZXJhZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc3BhcmVuY3lBc0FscGhhQ292ZXJhZ2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBPcGVuUEJSIGRvZXNuJ3Qgc3VwcG9ydCB0cmVhdGluZyB0cmFuc3BhcmVuY3kgYXMgYWxwaGEgY292ZXJhZ2UuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkFTRSBQQVJBTUVURVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBiYXNlIGNvbG9yIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBiYXNlIGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZUNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5iYXNlQ29sb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgY29sb3Igb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYmFzZSBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2VDb2xvcigpOiBDb2xvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5iYXNlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBiYXNlIGNvbG9yIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGJhc2UgY29sb3IgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZUNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYmFzZUNvbG9yVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYmFzZSBjb2xvciB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGJhc2UgY29sb3IgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYmFzZUNvbG9yVGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5iYXNlQ29sb3JUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYmFzZSBkaWZmdXNlIHJvdWdobmVzcyBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZGlmZnVzZSByb3VnaG5lc3MgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBiYXNlRGlmZnVzZVJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYmFzZURpZmZ1c2VSb3VnaG5lc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgZGlmZnVzZSByb3VnaG5lc3Mgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGlmZnVzZSByb3VnaG5lc3MgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYXNlRGlmZnVzZVJvdWdobmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5iYXNlRGlmZnVzZVJvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJhc2UgZGlmZnVzZSByb3VnaG5lc3MgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZGlmZnVzZSByb3VnaG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5iYXNlRGlmZnVzZVJvdWdobmVzc1RleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgZGlmZnVzZSByb3VnaG5lc3MgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkaWZmdXNlIHJvdWdobmVzcyB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYXNlRGlmZnVzZVJvdWdobmVzc1RleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuYmFzZURpZmZ1c2VSb3VnaG5lc3NUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYmFzZSBtZXRhbG5lc3MgdmFsdWUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG1ldGFsbmVzcyB2YWx1ZSAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGJhc2VNZXRhbG5lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmJhc2VNZXRhbG5lc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgbWV0YWxuZXNzIHZhbHVlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1ldGFsbmVzcyB2YWx1ZSAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2VNZXRhbG5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuYmFzZU1ldGFsbmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJhc2UgbWV0YWxuZXNzIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG1ldGFsbmVzcyB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBiYXNlTWV0YWxuZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuYmFzZU1ldGFsbmVzc1RleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJhc2UgbWV0YWxuZXNzIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWxuZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhc2VNZXRhbG5lc3NUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmJhc2VNZXRhbG5lc3NUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIHVzZSByb3VnaG5lc3MgZnJvbSB0aGUgbWV0YWxsaWMgdGV4dHVyZSdzIGdyZWVuIGNoYW5uZWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ1ZSB0byB1c2UgZ3JlZW4gY2hhbm5lbCBmb3Igcm91Z2huZXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdXNlUm91Z2huZXNzRnJvbU1ldGFsbGljVGV4dHVyZUdyZWVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuX3VzZVJvdWdobmVzc0Zyb21NZXRhbGxpY1RleHR1cmVHcmVlbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIHVzZSBtZXRhbG5lc3MgZnJvbSB0aGUgbWV0YWxsaWMgdGV4dHVyZSdzIGJsdWUgY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnVlIHRvIHVzZSBibHVlIGNoYW5uZWwgZm9yIG1ldGFsbmVzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHVzZU1ldGFsbGljRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5fdXNlTWV0YWxsaWNGcm9tTWV0YWxsaWNUZXh0dXJlQmx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNQRUNVTEFSIFBBUkFNRVRFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgc3BlY3VsYXIgcHJvcGVydGllcyBmb3IgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSBfZW5hYmxlRWRnZUNvbG9yIFdoZXRoZXIgdG8gZW5hYmxlIGVkZ2UgY29sb3Igc3VwcG9ydCAoaWdub3JlZCBmb3IgT3BlblBCUilcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZVNwZWN1bGFyRWRnZUNvbG9yKF9lbmFibGVFZGdlQ29sb3I6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9wZW5QQlIgYWxyZWFkeSBzdXBwb3J0cyBlZGdlIGNvbG9yIG5hdGl2ZWx5LCBubyBjb25maWd1cmF0aW9uIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3BlY3VsYXIgd2VpZ2h0IG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzcGVjdWxhciB3ZWlnaHQgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzcGVjdWxhcldlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3BlY3VsYXJXZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNwZWN1bGFyIHdlaWdodCBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzcGVjdWxhciB3ZWlnaHQgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhcldlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5zcGVjdWxhcldlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIHdlaWdodCB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogSWYgdGhlIHNhbWUgdGV4dHVyZSBpcyB1c2VkIGZvciBzcGVjdWxhciBjb2xvciwgb3B0aW1pemVzIGJ5IHVzaW5nIGFscGhhIGNoYW5uZWwgZm9yIHdlaWdodC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3BlY3VsYXIgd2VpZ2h0IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFyV2VpZ2h0VGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyQ29sb3JUZXh0dXJlID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5zcGVjdWxhcldlaWdodFRleHR1cmUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5fdXNlU3BlY3VsYXJXZWlnaHRGcm9tU3BlY3VsYXJDb2xvclRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5fdXNlU3BlY3VsYXJXZWlnaHRGcm9tQWxwaGEgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyV2VpZ2h0VGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNwZWN1bGFyIHdlaWdodCB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIHNwZWN1bGFyIHdlaWdodCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhcldlaWdodFRleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuc3BlY3VsYXJXZWlnaHRUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3BlY3VsYXIgY29sb3Igb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNwZWN1bGFyIGNvbG9yIGFzIGEgQ29sb3IzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3BlY3VsYXJDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY3VsYXIgY29sb3Igb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3BlY3VsYXIgY29sb3IgYXMgYSBDb2xvcjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhckNvbG9yKCk6IENvbG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcGVjdWxhciBjb2xvciB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogSWYgdGhlIHNhbWUgdGV4dHVyZSBpcyB1c2VkIGZvciBzcGVjdWxhciB3ZWlnaHQsIG9wdGltaXplcyBieSB1c2luZyBhbHBoYSBjaGFubmVsIGZvciB3ZWlnaHQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHNwZWN1bGFyIGNvbG9yIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFyQ29sb3JUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zcGVjdWxhckNvbG9yVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXRlcmlhbC5zcGVjdWxhcldlaWdodFRleHR1cmUgPT09IHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyQ29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyV2VpZ2h0VGV4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLl91c2VTcGVjdWxhcldlaWdodEZyb21TcGVjdWxhckNvbG9yVGV4dHVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLl91c2VTcGVjdWxhcldlaWdodEZyb21BbHBoYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY3VsYXIgY29sb3IgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzcGVjdWxhciBjb2xvciB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhckNvbG9yVGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5zcGVjdWxhckNvbG9yVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIHJvdWdobmVzcyBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcm91Z2huZXNzIHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3BlY3VsYXJSb3VnaG5lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3Mgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcm91Z2huZXNzIHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3BlY3VsYXJSb3VnaG5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3MgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcm91Z2huZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFyUm91Z2huZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3NUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3MgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSByb3VnaG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3BlY3VsYXJSb3VnaG5lc3NUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwZWN1bGFyIGluZGV4IG9mIHJlZnJhY3Rpb24gKElPUikgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIElPUiB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwZWN1bGFySW9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5zcGVjdWxhcklvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY3VsYXIgaW5kZXggb2YgcmVmcmFjdGlvbiAoSU9SKSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBJT1IgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhcklvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5zcGVjdWxhcklvcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFTUlTU0lPTiBQQVJBTUVURVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBlbWlzc2lvbiBjb2xvciBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW1pc3Npb24gY29sb3IgYXMgYSBDb2xvcjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBlbWlzc2lvbkNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5lbWlzc2lvbkNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBlbWlzc2lvbiBjb2xvciBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlbWlzc2lvbiBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVtaXNzaW9uQ29sb3IoKTogQ29sb3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuZW1pc3Npb25Db2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGVtaXNzaW9uIGx1bWluYW5jZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW1pc3Npb24gbHVtaW5hbmNlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZW1pc3Npb25MdW1pbmFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmVtaXNzaW9uTHVtaW5hbmNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBlbWlzc2lvbiBsdW1pbmFuY2Ugb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZW1pc3Npb24gbHVtaW5hbmNlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW1pc3Npb25MdW1pbmFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuZW1pc3Npb25MdW1pbmFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBlbWlzc2lvbiBjb2xvciB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbWlzc2lvbiB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBlbWlzc2lvbkNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZW1pc3Npb25Db2xvclRleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGVtaXNzaW9uIGNvbG9yIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZW1pc3Npb24gdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW1pc3Npb25Db2xvclRleHR1cmUoKTogTnVsbGFibGU8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuZW1pc3Npb25Db2xvclRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQU1CSUVOVCBPQ0NMVVNJT05cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGFtYmllbnQgb2NjbHVzaW9uIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGFtYmllbnQgb2NjbHVzaW9uIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFtYmllbnRPY2NsdXNpb25UZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5hbWJpZW50T2NjbHVzaW9uVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYW1iaWVudCBvY2NsdXNpb24gdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBhbWJpZW50IG9jY2x1c2lvbiB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhbWJpZW50T2NjbHVzaW9uVGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5hbWJpZW50T2NjbHVzaW9uVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGFtYmllbnQgb2NjbHVzaW9uIHRleHR1cmUgc3RyZW5ndGggYnkgbW9kaWZ5aW5nIHRoZSB0ZXh0dXJlJ3MgbGV2ZWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmVuZ3RoIHZhbHVlICh0eXBpY2FsbHkgMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGFtYmllbnRPY2NsdXNpb25UZXh0dXJlU3RyZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLl9tYXRlcmlhbC5hbWJpZW50T2NjbHVzaW9uVGV4dHVyZTtcclxuICAgICAgICBpZiAodGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlLmxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYW1iaWVudCBvY2NsdXNpb24gdGV4dHVyZSBzdHJlbmd0aCBmcm9tIHRoZSB0ZXh0dXJlJ3MgbGV2ZWwgcHJvcGVydHkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyZW5ndGggdmFsdWUsIGRlZmF1bHRzIHRvIDEuMCBpZiBubyB0ZXh0dXJlIG9yIGxldmVsIGlzIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFtYmllbnRPY2NsdXNpb25UZXh0dXJlU3RyZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5fbWF0ZXJpYWwuYW1iaWVudE9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU/LmxldmVsID8/IDEuMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDT0FUIFBBUkFNRVRFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZXMgY29hdCBwYXJhbWV0ZXJzIGZvciBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogT3BlblBCUiBjb2F0IGlzIGFscmVhZHkgYnVpbHQtaW4sIHNvIG5vIGNvbmZpZ3VyYXRpb24gaXMgbmVlZGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uZmlndXJlQ29hdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBPcGVuUEJSIGNvYXQgaXMgYWxyZWFkeSBidWlsdC1pbiwgbm8gY29uZmlndXJhdGlvbiBuZWVkZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgd2VpZ2h0IG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IHdlaWdodCB2YWx1ZSAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXRXZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNvYXRXZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvYXQgd2VpZ2h0IG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvYXQgd2VpZ2h0IHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29hdFdlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5jb2F0V2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCB3ZWlnaHQgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29hdCB3ZWlnaHQgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29hdFdlaWdodFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNvYXRXZWlnaHRUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHdlaWdodCB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvYXQgd2VpZ2h0IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvYXRXZWlnaHRUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmNvYXRXZWlnaHRUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCBjb2xvciBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgY29hdCBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXRDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY29hdENvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2F0IGNvbG9yIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgY29sb3IgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29hdENvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY29hdENvbG9yVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCByb3VnaG5lc3Mgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgcm91Z2huZXNzIHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29hdFJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY29hdFJvdWdobmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29hdCByb3VnaG5lc3Mgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29hdCByb3VnaG5lc3MgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2F0Um91Z2huZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmNvYXRSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2F0IHJvdWdobmVzcyB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IHJvdWdobmVzcyB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb2F0Um91Z2huZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY29hdFJvdWdobmVzc1RleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuX3VzZUNvYXRSb3VnaG5lc3NGcm9tR3JlZW5DaGFubmVsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHJvdWdobmVzcyB0ZXh0dXJlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvYXQgcm91Z2huZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvYXRSb3VnaG5lc3NUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmNvYXRSb3VnaG5lc3NUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29hdCBpbmRleCBvZiByZWZyYWN0aW9uIChJT1IpIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXRJb3IodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNvYXRJb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgZGFya2VuaW5nIHZhbHVlIG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IGRhcmtlbmluZyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNvYXREYXJrZW5pbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNvYXREYXJrZW5pbmcgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgZGFya2VuaW5nIHRleHR1cmUgKE9wZW5QQlI6IGNvYXREYXJrZW5pbmdUZXh0dXJlLCBubyBQQlIgZXF1aXZhbGVudClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBjb2F0RGFya2VuaW5nVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuY29hdERhcmtlbmluZ1RleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvYXQgcm91Z2huZXNzIGFuaXNvdHJvcHkuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgY29hdCBhbmlzb3Ryb3B5IGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IGFuaXNvdHJvcHkgaW50ZW5zaXR5IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY29hdFJvdWdobmVzc0FuaXNvdHJvcHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHJvdWdobmVzcyBhbmlzb3Ryb3B5LlxyXG4gICAgICogVE9ETzogSW1wbGVtZW50YXRpb24gcGVuZGluZyBPcGVuUEJSIGNvYXQgYW5pc290cm9weSBmZWF0dXJlIGF2YWlsYWJpbGl0eS5cclxuICAgICAqIEByZXR1cm5zIEN1cnJlbnRseSByZXR1cm5zIDAgYXMgY29hdCBhbmlzb3Ryb3B5IGlzIG5vdCB5ZXQgYXZhaWxhYmxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29hdFJvdWdobmVzc0FuaXNvdHJvcHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuY29hdFJvdWdobmVzc0FuaXNvdHJvcHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2F0IHRhbmdlbnQgYW5nbGUgZm9yIGFuaXNvdHJvcHkuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgY29hdCBhbmlzb3Ryb3B5IGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBjb2F0IGFuaXNvdHJvcHkgcm90YXRpb24gYW5nbGUgaW4gcmFkaWFuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Q29hdFRhbmdlbnRBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZ2VvbWV0cnlDb2F0VGFuZ2VudEFuZ2xlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2F0IHRhbmdlbnQgdGV4dHVyZSBmb3IgYW5pc290cm9weS5cclxuICAgICAqIFRPRE86IEltcGxlbWVudGF0aW9uIHBlbmRpbmcgT3BlblBCUiBjb2F0IGFuaXNvdHJvcHkgZmVhdHVyZSBhdmFpbGFiaWxpdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgYW5pc290cm9weSB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBnZW9tZXRyeUNvYXRUYW5nZW50VGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZ2VvbWV0cnlDb2F0VGFuZ2VudFRleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwuX3VzZUNvYXRSb3VnaG5lc3NBbmlzb3Ryb3B5RnJvbVRhbmdlbnRUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2F0IHRhbmdlbnQgdGV4dHVyZSBmb3IgYW5pc290cm9weS5cclxuICAgICAqIFRPRE86IEltcGxlbWVudGF0aW9uIHBlbmRpbmcgT3BlblBCUiBjb2F0IGFuaXNvdHJvcHkgZmVhdHVyZSBhdmFpbGFiaWxpdHkuXHJcbiAgICAgKiBAcmV0dXJucyBDdXJyZW50bHkgcmV0dXJucyBudWxsIGFzIGNvYXQgYW5pc290cm9weSBpcyBub3QgeWV0IGF2YWlsYWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdlb21ldHJ5Q29hdFRhbmdlbnRUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmdlb21ldHJ5Q29hdFRhbmdlbnRUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFRSQU5TTUlTU0lPTiBMQVlFUlxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdHJhbnNtaXNzaW9uIHdlaWdodC5cclxuICAgICAqIFRPRE86IEltcGxlbWVudGF0aW9uIHBlbmRpbmcgT3BlblBCUiB0cmFuc21pc3Npb24gZmVhdHVyZSBhdmFpbGFiaWxpdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHRyYW5zbWlzc2lvbiB3ZWlnaHQgdmFsdWUgKDAtMSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc21pc3Npb25XZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCB3aGVuIE9wZW5QQlIgdHJhbnNtaXNzaW9uIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgIC8vIHRoaXMuX21hdGVyaWFsLnRyYW5zbWlzc2lvbldlaWdodCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdHJhbnNtaXNzaW9uIHdlaWdodCB0ZXh0dXJlLlxyXG4gICAgICogVE9ETzogSW1wbGVtZW50YXRpb24gcGVuZGluZyBPcGVuUEJSIHRyYW5zbWlzc2lvbiBmZWF0dXJlIGF2YWlsYWJpbGl0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdHJhbnNtaXNzaW9uIHdlaWdodCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0cmFuc21pc3Npb25XZWlnaHRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgd2hlbiBPcGVuUEJSIHRyYW5zbWlzc2lvbiBpcyBhdmFpbGFibGVcclxuICAgICAgICAvLyB0aGlzLl9tYXRlcmlhbC50cmFuc21pc3Npb25XZWlnaHRUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0cmFuc21pc3Npb24gd2VpZ2h0LlxyXG4gICAgICogVE9ETzogSW1wbGVtZW50YXRpb24gcGVuZGluZyBPcGVuUEJSIHRyYW5zbWlzc2lvbiBmZWF0dXJlIGF2YWlsYWJpbGl0eS5cclxuICAgICAqIEByZXR1cm5zIEN1cnJlbnRseSByZXR1cm5zIDAgYXMgdHJhbnNtaXNzaW9uIGlzIG5vdCB5ZXQgYXZhaWxhYmxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHJhbnNtaXNzaW9uV2VpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IHdoZW4gT3BlblBCUiB0cmFuc21pc3Npb24gaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX21hdGVyaWFsLnRyYW5zbWlzc2lvbldlaWdodDtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHRyYW5zbWlzc2lvbiBkaXNwZXJzaW9uIEFiYmUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBBYmJlIG51bWJlciB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRyYW5zbWlzc2lvbkRpc3BlcnNpb25BYmJlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgd2hlbiBPcGVuUEJSIHRyYW5zbWlzc2lvbiBkaXNwZXJzaW9uIGlzIGF2YWlsYWJsZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0cmFuc21pc3Npb24gZm9yIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgdHJhbnNtaXNzaW9uIGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uZmlndXJlVHJhbnNtaXNzaW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9wZW5QQlIgdHJhbnNtaXNzaW9uIHdpbGwgYmUgY29uZmlndXJlZCBkaWZmZXJlbnRseSB3aGVuIGF2YWlsYWJsZVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFZPTFVNRSBQUk9QRVJUSUVTIChTdWJzdXJmYWNlIFNjYXR0ZXJpbmcpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhdHRlbnVhdGlvbiBkaXN0YW5jZSBmb3Igdm9sdW1lIHNjYXR0ZXJpbmcuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgdm9sdW1lIGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBhdHRlbnVhdGlvbiBkaXN0YW5jZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRyYW5zbWlzc2lvbkRlcHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgd2hlbiBPcGVuUEJSIHZvbHVtZSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGVcclxuICAgICAgICAvLyB0aGlzLl9tYXRlcmlhbC5hdHRlbnVhdGlvbkRpc3RhbmNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBhdHRlbnVhdGlvbiBjb2xvciBmb3Igdm9sdW1lIHNjYXR0ZXJpbmcuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgdm9sdW1lIGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBhdHRlbnVhdGlvbiBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRyYW5zbWlzc2lvbkNvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgd2hlbiBPcGVuUEJSIHZvbHVtZSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGVcclxuICAgICAgICAvLyB0aGlzLl9tYXRlcmlhbC5hdHRlbnVhdGlvbkNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0aGlja25lc3MgdGV4dHVyZSBmb3Igdm9sdW1lIHNjYXR0ZXJpbmcuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgdm9sdW1lIGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB0aGlja25lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdm9sdW1lVGhpY2tuZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IHdoZW4gT3BlblBCUiB2b2x1bWUgcHJvcGVydGllcyBhcmUgYXZhaWxhYmxlXHJcbiAgICAgICAgLy8gdGhpcy5fbWF0ZXJpYWwudGhpY2tuZXNzVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGhpY2tuZXNzIGZhY3RvciBmb3Igdm9sdW1lIHNjYXR0ZXJpbmcuXHJcbiAgICAgKiBUT0RPOiBJbXBsZW1lbnRhdGlvbiBwZW5kaW5nIE9wZW5QQlIgdm9sdW1lIGZlYXR1cmUgYXZhaWxhYmlsaXR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB0aGlja25lc3MgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB2b2x1bWVUaGlja25lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCB3aGVuIE9wZW5QQlIgdm9sdW1lIHByb3BlcnRpZXMgYXJlIGF2YWlsYWJsZVxyXG4gICAgICAgIC8vIHRoaXMuX21hdGVyaWFsLnRoaWNrbmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNVQlNVUkZBQ0UgUFJPUEVSVElFUyAoU3Vic3VyZmFjZSBTY2F0dGVyaW5nKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBzdWJzdXJmYWNlIHByb3BlcnRpZXMgZm9yIFBCUiBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uZmlndXJlU3Vic3VyZmFjZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzdWJzdXJmYWNlIHdlaWdodFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHN1YnN1cmZhY2VXZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN1YnN1cmZhY2VXZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzdWJzdXJmYWNlIHdlaWdodCB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3Vic3VyZmFjZVdlaWdodFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHN1YnN1cmZhY2UgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN1YnN1cmZhY2UgdGludCBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHN1YnN1cmZhY2VDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3Vic3VyZmFjZSBjb2xvciB0ZXh0dXJlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdWJzdXJmYWNlIHRpbnQgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3Vic3VyZmFjZUNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEZVWlogTEFZRVIgKFNoZWVuKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBmdXp6IGZvciBPcGVuUEJSLlxyXG4gICAgICogRW5hYmxlcyBmdXp6IGFuZCBzZXRzIHVwIHByb3BlciBjb25maWd1cmF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uZmlndXJlRnV6eigpOiB2b2lkIHtcclxuICAgICAgICAvLyBDdXJyZW50bHkgbm8gc2V0dXAgdG8gZG8gZm9yIE9wZW5QQlJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGZ1enogd2VpZ2h0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBmdXp6IHdlaWdodCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZ1enpXZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmZ1enpXZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGZ1enogd2VpZ2h0IHRleHR1cmUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGZ1enogd2VpZ2h0IHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZ1enpXZWlnaHRUZXh0dXJlKHZhbHVlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5mdXp6V2VpZ2h0VGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnV6eiBjb2xvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZnV6eiBjb2xvciBhcyBhIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZ1enpDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZnV6ekNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBmdXp6IGNvbG9yIHRleHR1cmUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGZ1enogY29sb3IgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6ekNvbG9yVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZnV6ekNvbG9yVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnV6eiByb3VnaG5lc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGZ1enogcm91Z2huZXNzIHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6elJvdWdobmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZnV6elJvdWdobmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZnV6eiByb3VnaG5lc3MgdGV4dHVyZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZnV6eiByb3VnaG5lc3MgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZnV6elJvdWdobmVzc1RleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmZ1enpSb3VnaG5lc3NUZXh0dXJlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuX3VzZUZ1enpSb3VnaG5lc3NGcm9tVGV4dHVyZUFscGhhID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBTklTT1RST1BZXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcGVjdWxhciByb3VnaG5lc3MgYW5pc290cm9weSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYW5pc290cm9weSBpbnRlbnNpdHkgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzQW5pc290cm9weSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc3BlY3VsYXIgcm91Z2huZXNzIGFuaXNvdHJvcHkgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYW5pc290cm9weSBpbnRlbnNpdHkgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3NBbmlzb3Ryb3B5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgYW5pc290cm9weSByb3RhdGlvbiBhbmdsZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYW5pc290cm9weSByb3RhdGlvbiBhbmdsZSBpbiByYWRpYW5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ2VvbWV0cnlUYW5nZW50QW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmdlb21ldHJ5VGFuZ2VudEFuZ2xlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnZW9tZXRyeSB0YW5nZW50IHRleHR1cmUgZm9yIGFuaXNvdHJvcHkuXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGVuYWJsZXMgdXNpbmcgYW5pc290cm9weSBmcm9tIHRoZSB0YW5nZW50IHRleHR1cmUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGFuaXNvdHJvcHkgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ2VvbWV0cnlUYW5nZW50VGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZ2VvbWV0cnlUYW5nZW50VGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLl91c2VTcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHlGcm9tVGFuZ2VudFRleHR1cmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZ2VvbWV0cnkgdGFuZ2VudCB0ZXh0dXJlIGZvciBhbmlzb3Ryb3B5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGFuaXNvdHJvcHkgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2VvbWV0cnlUYW5nZW50VGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5nZW9tZXRyeVRhbmdlbnRUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBnbFRGLXN0eWxlIGFuaXNvdHJvcHkgZm9yIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHVzZUdsdGZTdHlsZSBXaGV0aGVyIHRvIHVzZSBnbFRGLXN0eWxlIGFuaXNvdHJvcHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbmZpZ3VyZUdsdGZTdHlsZUFuaXNvdHJvcHkodXNlR2x0ZlN0eWxlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLl91c2VHbHRmU3R5bGVBbmlzb3Ryb3B5ID0gdXNlR2x0ZlN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFRISU4gRklMTSBJUklERVNDRU5DRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGhpbiBmaWxtIHdlaWdodC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdGhpbiBmaWxtIHdlaWdodCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRoaW5GaWxtV2VpZ2h0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC50aGluRmlsbVdlaWdodCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGhpbiBmaWxtIElPUi5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdGhpbiBmaWxtIElPUiB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRoaW5GaWxtSW9yKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC50aGluRmlsbUlvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGhpbiBmaWxtIHRoaWNrbmVzcyBtaW5pbXVtLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBtaW5pbXVtIHRoaWNrbmVzcyB2YWx1ZSBpbiBuYW5vbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdGhpbkZpbG1UaGlja25lc3NNaW5pbXVtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC50aGluRmlsbVRoaWNrbmVzc01pbiA9IHZhbHVlIC8gMTAwMC4wOyAvLyBDb252ZXJ0IHRvIG1pY3JvbWV0ZXJzIGZvciBPcGVuUEJSXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0aGluIGZpbG0gdGhpY2tuZXNzIG1heGltdW0uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG1heGltdW0gdGhpY2tuZXNzIHZhbHVlIGluIG5hbm9tZXRlcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0aGluRmlsbVRoaWNrbmVzc01heGltdW0odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnRoaW5GaWxtVGhpY2tuZXNzID0gdmFsdWUgLyAxMDAwLjA7IC8vIENvbnZlcnQgdG8gbWljcm9tZXRlcnMgZm9yIE9wZW5QQlJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHRoaW4gZmlsbSB3ZWlnaHQgdGV4dHVyZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdGhpbiBmaWxtIHdlaWdodCB0ZXh0dXJlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB0aGluRmlsbVdlaWdodFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLnRoaW5GaWxtV2VpZ2h0VGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdGhpbiBmaWxtIHRoaWNrbmVzcyB0ZXh0dXJlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB0aGluIGZpbG0gdGhpY2tuZXNzIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHRoaW5GaWxtVGhpY2tuZXNzVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwudGhpbkZpbG1UaGlja25lc3NUZXh0dXJlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuX3VzZVRoaW5GaWxtVGhpY2tuZXNzRnJvbVRleHR1cmVHcmVlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVU5MSVQgTUFURVJJQUxTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIE9wZW5QQlIgbWF0ZXJpYWwgaXMgdW5saXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ1ZSB0byBtYWtlIHRoZSBtYXRlcmlhbCB1bmxpdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHVubGl0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwudW5saXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBHRU9NRVRSWSBQQVJBTUVURVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnZW9tZXRyeSBvcGFjaXR5IG9mIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBvcGFjaXR5IHZhbHVlICgwLTEpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ2VvbWV0cnlPcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbC5nZW9tZXRyeU9wYWNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlb21ldHJ5IG9wYWNpdHkgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgb3BhY2l0eSB2YWx1ZSAoMC0xKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdlb21ldHJ5T3BhY2l0eSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5nZW9tZXRyeU9wYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnZW9tZXRyeSBub3JtYWwgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbm9ybWFsIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Tm9ybWFsVGV4dHVyZSh2YWx1ZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuZ2VvbWV0cnlOb3JtYWxUZXh0dXJlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBnZW9tZXRyeSBub3JtYWwgdGV4dHVyZSBvZiB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBub3JtYWwgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2VvbWV0cnlOb3JtYWxUZXh0dXJlKCk6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsLmdlb21ldHJ5Tm9ybWFsVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG5vcm1hbCBtYXAgaW52ZXJzaW9ucyBmb3IgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBOb3RlOiBPcGVuUEJSIG1heSBoYW5kbGUgbm9ybWFsIG1hcCBpbnZlcnNpb25zIGRpZmZlcmVudGx5IG9yIG1heSBub3QgbmVlZCB0aGVtLlxyXG4gICAgICogQHBhcmFtIGludmVydFggV2hldGhlciB0byBpbnZlcnQgdGhlIG5vcm1hbCBtYXAgb24gdGhlIFggYXhpcyAobWF5IGJlIGlnbm9yZWQpXHJcbiAgICAgKiBAcGFyYW0gaW52ZXJ0WSBXaGV0aGVyIHRvIGludmVydCB0aGUgbm9ybWFsIG1hcCBvbiB0aGUgWSBheGlzIChtYXkgYmUgaWdub3JlZClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldE5vcm1hbE1hcEludmVyc2lvbnMoaW52ZXJ0WDogYm9vbGVhbiwgaW52ZXJ0WTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIE9wZW5QQlIgaGFuZGxlcyBub3JtYWwgbWFwIGludmVyc2lvbnMgZGlmZmVyZW50bHkgb3IgbWF5IG5vdCBuZWVkIHRoZW1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdlb21ldHJ5IGNvYXQgbm9ybWFsIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvYXQgbm9ybWFsIHRleHR1cmUgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGdlb21ldHJ5Q29hdE5vcm1hbFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsLmdlb21ldHJ5Q29hdE5vcm1hbFRleHR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdlb21ldHJ5IGNvYXQgbm9ybWFsIHRleHR1cmUgb2YgdGhlIE9wZW5QQlIgbWF0ZXJpYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29hdCBub3JtYWwgdGV4dHVyZSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2VvbWV0cnlDb2F0Tm9ybWFsVGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbC5nZW9tZXRyeUNvYXROb3JtYWxUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZ2VvbWV0cnkgY29hdCBub3JtYWwgdGV4dHVyZSBzY2FsZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc2NhbGUgdmFsdWUgZm9yIHRoZSBjb2F0IG5vcm1hbCB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZ2VvbWV0cnlDb2F0Tm9ybWFsVGV4dHVyZVNjYWxlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fbWF0ZXJpYWwuZ2VvbWV0cnlDb2F0Tm9ybWFsVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbC5nZW9tZXRyeUNvYXROb3JtYWxUZXh0dXJlLmxldmVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=