"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_EXT_lights_image_based_js"],{

/***/ "../core/dist/Materials/Textures/rawCubeTexture.js":
/*!*********************************************************!*\
  !*** ../core/dist/Materials/Textures/rawCubeTexture.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawCubeTexture: () => (/* binding */ RawCubeTexture)
/* harmony export */ });
/* harmony import */ var _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var _Misc_environmentTextureTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/environmentTextureTools */ "../core/dist/Misc/environmentTextureTools.js");
/* harmony import */ var _cubeTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubeTexture */ "../core/dist/Materials/Textures/cubeTexture.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Raw cube texture where the raw buffers are passed in
 */
class RawCubeTexture extends _cubeTexture__WEBPACK_IMPORTED_MODULE_2__.CubeTexture {
    /**
     * Creates a cube texture where the raw buffers are passed in.
     * @param scene defines the scene the texture is attached to
     * @param data defines the array of data to use to create each face
     * @param size defines the size of the textures
     * @param format defines the format of the data
     * @param type defines the type of the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)
     * @param generateMipMaps  defines if the engine should generate the mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)
     * @param compression defines the compression used (null by default)
     */
    constructor(scene, data, size, format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGBA, type = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURETYPE_UNSIGNED_BYTE, generateMipMaps = false, invertY = false, samplingMode = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURE_TRILINEAR_SAMPLINGMODE, compression = null) {
        super("", scene);
        this._texture = scene.getEngine().createRawCubeTexture(data, size, format, type, generateMipMaps, invertY, samplingMode, compression);
    }
    /**
     * Updates the raw cube texture.
     * @param data defines the data to store
     * @param format defines the data format
     * @param type defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)
     * @param invertY defines if data must be stored with Y axis inverted
     * @param compression defines the compression used (null by default)
     */
    update(data, format, type, invertY, compression = null) {
        this._texture.getEngine().updateRawCubeTexture(this._texture, data, format, type, invertY, compression);
    }
    /**
     * Updates a raw cube texture with RGBD encoded data.
     * @param data defines the array of data [mipmap][face] to use to create each face
     * @param sphericalPolynomial defines the spherical polynomial for irradiance
     * @param lodScale defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness
     * @param lodOffset defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness
     * @returns a promise that resolves when the operation is complete
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    updateRGBDAsync(data, sphericalPolynomial = null, lodScale = 0.8, lodOffset = 0) {
        // eslint-disable-next-line github/no-then
        return (0,_Misc_environmentTextureTools__WEBPACK_IMPORTED_MODULE_1__._UpdateRGBDAsync)(this._texture, data, sphericalPolynomial, lodScale, lodOffset).then(() => { });
    }
    /**
     * Clones the raw cube texture.
     * @returns a new cube texture
     */
    clone() {
        return _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(() => {
            const scene = this.getScene();
            const internalTexture = this._texture;
            const texture = new RawCubeTexture(scene, internalTexture._bufferViewArray, internalTexture.width, internalTexture.format, internalTexture.type, internalTexture.generateMipMaps, internalTexture.invertY, internalTexture.samplingMode, internalTexture._compression);
            if (internalTexture.source === 13 /* InternalTextureSource.CubeRawRGBD */) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                texture.updateRGBDAsync(internalTexture._bufferViewArrayArray, internalTexture._sphericalPolynomial, internalTexture._lodGenerationScale, internalTexture._lodGenerationOffset);
            }
            return texture;
        }, this);
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

/***/ }),

/***/ "../loaders/dist/glTF/2.0/Extensions/EXT_lights_image_based.js":
/*!*********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/EXT_lights_image_based.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_lights_image_based: () => (/* binding */ EXT_lights_image_based)
/* harmony export */ });
/* harmony import */ var core_Maths_sphericalPolynomial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/sphericalPolynomial */ "../core/dist/Maths/sphericalPolynomial.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Materials_Textures_rawCubeTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Materials/Textures/rawCubeTexture */ "../core/dist/Materials/Textures/rawCubeTexture.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






const NAME = "EXT_lights_image_based";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_lights_image_based/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_lights_image_based {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
        delete this._lights;
    }
    /** @internal */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._lights = extension.lights;
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadSceneAsync(context, scene) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader.LoadExtensionAsync(context, scene, this.name, async (extensionContext, extension) => {
            this._loader._allMaterialsDirtyRequired = true;
            const promises = new Array();
            promises.push(this._loader.loadSceneAsync(context, scene));
            this._loader.logOpen(`${extensionContext}`);
            const light = _glTFLoader__WEBPACK_IMPORTED_MODULE_3__.ArrayItem.Get(`${extensionContext}/light`, this._lights, extension.light);
            promises.push(
            // eslint-disable-next-line github/no-then
            this._loadLightAsync(`/extensions/${this.name}/lights/${extension.light}`, light).then((texture) => {
                this._loader.babylonScene.environmentTexture = texture;
            }));
            this._loader.logClose();
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(() => { });
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadLightAsync(context, light) {
        if (!light._loaded) {
            const promises = new Array();
            this._loader.logOpen(`${context}`);
            const imageData = new Array(light.specularImages.length);
            for (let mipmap = 0; mipmap < light.specularImages.length; mipmap++) {
                const faces = light.specularImages[mipmap];
                imageData[mipmap] = new Array(faces.length);
                for (let face = 0; face < faces.length; face++) {
                    const specularImageContext = `${context}/specularImages/${mipmap}/${face}`;
                    this._loader.logOpen(`${specularImageContext}`);
                    const index = faces[face];
                    const image = _glTFLoader__WEBPACK_IMPORTED_MODULE_3__.ArrayItem.Get(specularImageContext, this._loader.gltf.images, index);
                    promises.push(
                    // eslint-disable-next-line github/no-then
                    this._loader.loadImageAsync(`/images/${index}`, image).then((data) => {
                        imageData[mipmap][face] = data;
                    }));
                    this._loader.logClose();
                }
            }
            this._loader.logClose();
            // eslint-disable-next-line github/no-then
            light._loaded = Promise.all(promises).then(async () => {
                const babylonTexture = new core_Materials_Textures_rawCubeTexture__WEBPACK_IMPORTED_MODULE_2__.RawCubeTexture(this._loader.babylonScene, null, light.specularImageSize);
                babylonTexture.name = light.name || "environment";
                light._babylonTexture = babylonTexture;
                if (light.intensity != undefined) {
                    babylonTexture.level = light.intensity;
                }
                if (light.rotation) {
                    let rotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(light.rotation);
                    // Invert the rotation so that positive rotation is counter-clockwise.
                    if (!this._loader.babylonScene.useRightHandedSystem) {
                        rotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Inverse(rotation);
                    }
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromQuaternionToRef(rotation, babylonTexture.getReflectionTextureMatrix());
                }
                if (!light.irradianceCoefficients) {
                    throw new Error(`${context}: Irradiance coefficients are missing`);
                }
                const sphericalHarmonics = core_Maths_sphericalPolynomial__WEBPACK_IMPORTED_MODULE_0__.SphericalHarmonics.FromArray(light.irradianceCoefficients);
                sphericalHarmonics.scaleInPlace(light.intensity);
                sphericalHarmonics.convertIrradianceToLambertianRadiance();
                const sphericalPolynomial = core_Maths_sphericalPolynomial__WEBPACK_IMPORTED_MODULE_0__.SphericalPolynomial.FromHarmonics(sphericalHarmonics);
                // Compute the lod generation scale to fit exactly to the number of levels available.
                const lodGenerationScale = (imageData.length - 1) / Math.log2(light.specularImageSize);
                return await babylonTexture.updateRGBDAsync(imageData, sphericalPolynomial, lodGenerationScale);
            });
        }
        // eslint-disable-next-line github/no-then
        return light._loaded.then(() => {
            return light._babylonTexture;
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_4__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_4__.registerGLTFExtension)(NAME, true, (loader) => new EXT_lights_image_based(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRVhUX2xpZ2h0c19pbWFnZV9iYXNlZF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFzQkE7O0FBRUE7QUFDQTtBQUNBO0FBY0E7O0FBRUE7QUFDQTtBQWhCQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9yYXdDdWJlVGV4dHVyZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRVhUX2xpZ2h0c19pbWFnZV9iYXNlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcIi4uLy4uL01pc2MvZGVjb3JhdG9ycy5zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IF9VcGRhdGVSR0JEQXN5bmMgYXMgVXBkYXRlUkdCREFzeW5jRW52VG9vbHMgfSBmcm9tIFwiLi4vLi4vTWlzYy9lbnZpcm9ubWVudFRleHR1cmVUb29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTcGhlcmljYWxQb2x5bm9taWFsIH0gZnJvbSBcIi4uLy4uL01hdGhzL3NwaGVyaWNhbFBvbHlub21pYWxcIjtcclxuaW1wb3J0IHsgSW50ZXJuYWxUZXh0dXJlU291cmNlIH0gZnJvbSBcIi4vaW50ZXJuYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB7IEN1YmVUZXh0dXJlIH0gZnJvbSBcIi4vY3ViZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogUmF3IGN1YmUgdGV4dHVyZSB3aGVyZSB0aGUgcmF3IGJ1ZmZlcnMgYXJlIHBhc3NlZCBpblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJhd0N1YmVUZXh0dXJlIGV4dGVuZHMgQ3ViZVRleHR1cmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgY3ViZSB0ZXh0dXJlIHdoZXJlIHRoZSByYXcgYnVmZmVycyBhcmUgcGFzc2VkIGluLlxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHRoZSB0ZXh0dXJlIGlzIGF0dGFjaGVkIHRvXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBhcnJheSBvZiBkYXRhIHRvIHVzZSB0byBjcmVhdGUgZWFjaCBmYWNlXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBkZWZpbmVzIHRoZSBzaXplIG9mIHRoZSB0ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIGZvcm1hdCBkZWZpbmVzIHRoZSBmb3JtYXQgb2YgdGhlIGRhdGFcclxuICAgICAqIEBwYXJhbSB0eXBlIGRlZmluZXMgdGhlIHR5cGUgb2YgdGhlIGRhdGEgKGxpa2UgRW5naW5lLlRFWFRVUkVUWVBFX1VOU0lHTkVEX0JZVEUpXHJcbiAgICAgKiBAcGFyYW0gZ2VuZXJhdGVNaXBNYXBzICBkZWZpbmVzIGlmIHRoZSBlbmdpbmUgc2hvdWxkIGdlbmVyYXRlIHRoZSBtaXAgbGV2ZWxzXHJcbiAgICAgKiBAcGFyYW0gaW52ZXJ0WSBkZWZpbmVzIGlmIGRhdGEgbXVzdCBiZSBzdG9yZWQgd2l0aCBZIGF4aXMgaW52ZXJ0ZWRcclxuICAgICAqIEBwYXJhbSBzYW1wbGluZ01vZGUgZGVmaW5lcyB0aGUgcmVxdWlyZWQgc2FtcGxpbmcgbW9kZSAobGlrZSBUZXh0dXJlLk5FQVJFU1RfU0FNUExJTkdNT0RFKVxyXG4gICAgICogQHBhcmFtIGNvbXByZXNzaW9uIGRlZmluZXMgdGhlIGNvbXByZXNzaW9uIHVzZWQgKG51bGwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlld1tdPixcclxuICAgICAgICBzaXplOiBudW1iZXIsXHJcbiAgICAgICAgZm9ybWF0OiBudW1iZXIgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBLFxyXG4gICAgICAgIHR5cGU6IG51bWJlciA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFLFxyXG4gICAgICAgIGdlbmVyYXRlTWlwTWFwczogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGludmVydFk6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBzYW1wbGluZ01vZGU6IG51bWJlciA9IENvbnN0YW50cy5URVhUVVJFX1RSSUxJTkVBUl9TQU1QTElOR01PREUsXHJcbiAgICAgICAgY29tcHJlc3Npb246IE51bGxhYmxlPHN0cmluZz4gPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcIlwiLCBzY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBzY2VuZS5nZXRFbmdpbmUoKS5jcmVhdGVSYXdDdWJlVGV4dHVyZShkYXRhLCBzaXplLCBmb3JtYXQsIHR5cGUsIGdlbmVyYXRlTWlwTWFwcywgaW52ZXJ0WSwgc2FtcGxpbmdNb2RlLCBjb21wcmVzc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSByYXcgY3ViZSB0ZXh0dXJlLlxyXG4gICAgICogQHBhcmFtIGRhdGEgZGVmaW5lcyB0aGUgZGF0YSB0byBzdG9yZVxyXG4gICAgICogQHBhcmFtIGZvcm1hdCBkZWZpbmVzIHRoZSBkYXRhIGZvcm1hdFxyXG4gICAgICogQHBhcmFtIHR5cGUgZGVmaW5lcyB0aGUgdHlwZSBmbyB0aGUgZGF0YSAoRW5naW5lLlRFWFRVUkVUWVBFX1VOU0lHTkVEX0JZVEUgYnkgZGVmYXVsdClcclxuICAgICAqIEBwYXJhbSBpbnZlcnRZIGRlZmluZXMgaWYgZGF0YSBtdXN0IGJlIHN0b3JlZCB3aXRoIFkgYXhpcyBpbnZlcnRlZFxyXG4gICAgICogQHBhcmFtIGNvbXByZXNzaW9uIGRlZmluZXMgdGhlIGNvbXByZXNzaW9uIHVzZWQgKG51bGwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBBcnJheUJ1ZmZlclZpZXdbXSwgZm9ybWF0OiBudW1iZXIsIHR5cGU6IG51bWJlciwgaW52ZXJ0WTogYm9vbGVhbiwgY29tcHJlc3Npb246IE51bGxhYmxlPHN0cmluZz4gPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZSEuZ2V0RW5naW5lKCkudXBkYXRlUmF3Q3ViZVRleHR1cmUodGhpcy5fdGV4dHVyZSEsIGRhdGEsIGZvcm1hdCwgdHlwZSwgaW52ZXJ0WSwgY29tcHJlc3Npb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBhIHJhdyBjdWJlIHRleHR1cmUgd2l0aCBSR0JEIGVuY29kZWQgZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIGFycmF5IG9mIGRhdGEgW21pcG1hcF1bZmFjZV0gdG8gdXNlIHRvIGNyZWF0ZSBlYWNoIGZhY2VcclxuICAgICAqIEBwYXJhbSBzcGhlcmljYWxQb2x5bm9taWFsIGRlZmluZXMgdGhlIHNwaGVyaWNhbCBwb2x5bm9taWFsIGZvciBpcnJhZGlhbmNlXHJcbiAgICAgKiBAcGFyYW0gbG9kU2NhbGUgZGVmaW5lcyB0aGUgc2NhbGUgYXBwbGllZCB0byBlbnZpcm9ubWVudCB0ZXh0dXJlLiBUaGlzIG1hbmFnZXMgdGhlIHJhbmdlIG9mIExPRCBsZXZlbCB1c2VkIGZvciBJQkwgYWNjb3JkaW5nIHRvIHRoZSByb3VnaG5lc3NcclxuICAgICAqIEBwYXJhbSBsb2RPZmZzZXQgZGVmaW5lcyB0aGUgb2Zmc2V0IGFwcGxpZWQgdG8gZW52aXJvbm1lbnQgdGV4dHVyZS4gVGhpcyBtYW5hZ2VzIGZpcnN0IExPRCBsZXZlbCB1c2VkIGZvciBJQkwgYWNjb3JkaW5nIHRvIHRoZSByb3VnaG5lc3NcclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgdXBkYXRlUkdCREFzeW5jKGRhdGE6IEFycmF5QnVmZmVyVmlld1tdW10sIHNwaGVyaWNhbFBvbHlub21pYWw6IE51bGxhYmxlPFNwaGVyaWNhbFBvbHlub21pYWw+ID0gbnVsbCwgbG9kU2NhbGU6IG51bWJlciA9IDAuOCwgbG9kT2Zmc2V0OiBudW1iZXIgPSAwKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIFVwZGF0ZVJHQkRBc3luY0VudlRvb2xzKHRoaXMuX3RleHR1cmUhLCBkYXRhLCBzcGhlcmljYWxQb2x5bm9taWFsLCBsb2RTY2FsZSwgbG9kT2Zmc2V0KS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb25lcyB0aGUgcmF3IGN1YmUgdGV4dHVyZS5cclxuICAgICAqIEByZXR1cm5zIGEgbmV3IGN1YmUgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgY2xvbmUoKTogQ3ViZVRleHR1cmUge1xyXG4gICAgICAgIHJldHVybiBTZXJpYWxpemF0aW9uSGVscGVyLkNsb25lKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdldFNjZW5lKCkhO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmUgPSB0aGlzLl90ZXh0dXJlITtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgUmF3Q3ViZVRleHR1cmUoXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS5fYnVmZmVyVmlld0FycmF5LFxyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlLmZvcm1hdCxcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlLmdlbmVyYXRlTWlwTWFwcyxcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS5pbnZlcnRZLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxUZXh0dXJlLnNhbXBsaW5nTW9kZSxcclxuICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS5fY29tcHJlc3Npb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbFRleHR1cmUuc291cmNlID09PSBJbnRlcm5hbFRleHR1cmVTb3VyY2UuQ3ViZVJhd1JHQkQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgICAgIHRleHR1cmUudXBkYXRlUkdCREFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS5fYnVmZmVyVmlld0FycmF5QXJyYXkhLFxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS5fc3BoZXJpY2FsUG9seW5vbWlhbCxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFRleHR1cmUuX2xvZEdlbmVyYXRpb25TY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFRleHR1cmUuX2xvZEdlbmVyYXRpb25PZmZzZXRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBTcGhlcmljYWxIYXJtb25pY3MsIFNwaGVyaWNhbFBvbHlub21pYWwgfSBmcm9tIFwiY29yZS9NYXRocy9zcGhlcmljYWxQb2x5bm9taWFsXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgUmF3Q3ViZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3Q3ViZVRleHR1cmVcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRSZWZlcmVuY2VJbWFnZUJhc2VkLCBJRVhUTGlnaHRzSW1hZ2VCYXNlZF9MaWdodEltYWdlQmFzZWQsIElFWFRMaWdodHNJbWFnZUJhc2VkIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF9saWdodHNfaW1hZ2VfYmFzZWRcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBFWFRfbGlnaHRzX2ltYWdlX2Jhc2VkIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJFWFRfbGlnaHRzX2ltYWdlX2Jhc2VkXCJdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIiB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBpbnRlcmZhY2UgSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRJbWFnZUJhc2VkIHtcclxuICAgICAgICBfYmFieWxvblRleHR1cmU/OiBCYXNlVGV4dHVyZTtcclxuICAgICAgICBfbG9hZGVkPzogUHJvbWlzZTx2b2lkPjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbGlnaHRzX2ltYWdlX2Jhc2VkL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF9saWdodHNfaW1hZ2VfYmFzZWQgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfbGlnaHRzPzogSUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRJbWFnZUJhc2VkW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICBkZWxldGUgdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgZXh0ZW5zaW9uc1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbdGhpcy5uYW1lXSBhcyBJRVhUTGlnaHRzSW1hZ2VCYXNlZDtcclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRzID0gZXh0ZW5zaW9uLmxpZ2h0cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZFNjZW5lQXN5bmMoY29udGV4dDogc3RyaW5nLCBzY2VuZTogSVNjZW5lKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJRVhUTGlnaHRzSW1hZ2VCYXNlZF9MaWdodFJlZmVyZW5jZUltYWdlQmFzZWQ+KGNvbnRleHQsIHNjZW5lLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9hbGxNYXRlcmlhbHNEaXJ0eVJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtleHRlbnNpb25Db250ZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L2xpZ2h0YCwgdGhpcy5fbGlnaHRzLCBleHRlbnNpb24ubGlnaHQpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTGlnaHRBc3luYyhgL2V4dGVuc2lvbnMvJHt0aGlzLm5hbWV9L2xpZ2h0cy8ke2V4dGVuc2lvbi5saWdodH1gLCBsaWdodCkudGhlbigodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuZW52aXJvbm1lbnRUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRMaWdodEFzeW5jKGNvbnRleHQ6IHN0cmluZywgbGlnaHQ6IElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZCk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBpZiAoIWxpZ2h0Ll9sb2FkZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZ09wZW4oYCR7Y29udGV4dH1gKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IG5ldyBBcnJheTxBcnJheTxBcnJheUJ1ZmZlclZpZXc+PihsaWdodC5zcGVjdWxhckltYWdlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBtaXBtYXAgPSAwOyBtaXBtYXAgPCBsaWdodC5zcGVjdWxhckltYWdlcy5sZW5ndGg7IG1pcG1hcCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWNlcyA9IGxpZ2h0LnNwZWN1bGFySW1hZ2VzW21pcG1hcF07XHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGFbbWlwbWFwXSA9IG5ldyBBcnJheTxBcnJheUJ1ZmZlclZpZXc+KGZhY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmYWNlID0gMDsgZmFjZSA8IGZhY2VzLmxlbmd0aDsgZmFjZSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJJbWFnZUNvbnRleHQgPSBgJHtjb250ZXh0fS9zcGVjdWxhckltYWdlcy8ke21pcG1hcH0vJHtmYWNlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZ09wZW4oYCR7c3BlY3VsYXJJbWFnZUNvbnRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmFjZXNbZmFjZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBBcnJheUl0ZW0uR2V0KHNwZWN1bGFySW1hZ2VDb250ZXh0LCB0aGlzLl9sb2FkZXIuZ2x0Zi5pbWFnZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRJbWFnZUFzeW5jKGAvaW1hZ2VzLyR7aW5kZXh9YCwgaW1hZ2UpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YVttaXBtYXBdW2ZhY2VdID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgbGlnaHQuX2xvYWRlZCA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlID0gbmV3IFJhd0N1YmVUZXh0dXJlKHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUsIG51bGwsIGxpZ2h0LnNwZWN1bGFySW1hZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLm5hbWUgPSBsaWdodC5uYW1lIHx8IFwiZW52aXJvbm1lbnRcIjtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSA9IGJhYnlsb25UZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5pbnRlbnNpdHkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUubGV2ZWwgPSBsaWdodC5pbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxpZ2h0LnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobGlnaHQucm90YXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnZlcnQgdGhlIHJvdGF0aW9uIHNvIHRoYXQgcG9zaXRpdmUgcm90YXRpb24gaXMgY291bnRlci1jbG9ja3dpc2UuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gUXVhdGVybmlvbi5JbnZlcnNlKHJvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE1hdHJpeC5Gcm9tUXVhdGVybmlvblRvUmVmKHJvdGF0aW9uLCBiYWJ5bG9uVGV4dHVyZS5nZXRSZWZsZWN0aW9uVGV4dHVyZU1hdHJpeCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWxpZ2h0LmlycmFkaWFuY2VDb2VmZmljaWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IElycmFkaWFuY2UgY29lZmZpY2llbnRzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJpY2FsSGFybW9uaWNzID0gU3BoZXJpY2FsSGFybW9uaWNzLkZyb21BcnJheShsaWdodC5pcnJhZGlhbmNlQ29lZmZpY2llbnRzKTtcclxuICAgICAgICAgICAgICAgIHNwaGVyaWNhbEhhcm1vbmljcy5zY2FsZUluUGxhY2UobGlnaHQuaW50ZW5zaXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGhlcmljYWxIYXJtb25pY3MuY29udmVydElycmFkaWFuY2VUb0xhbWJlcnRpYW5SYWRpYW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJpY2FsUG9seW5vbWlhbCA9IFNwaGVyaWNhbFBvbHlub21pYWwuRnJvbUhhcm1vbmljcyhzcGhlcmljYWxIYXJtb25pY3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGxvZCBnZW5lcmF0aW9uIHNjYWxlIHRvIGZpdCBleGFjdGx5IHRvIHRoZSBudW1iZXIgb2YgbGV2ZWxzIGF2YWlsYWJsZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvZEdlbmVyYXRpb25TY2FsZSA9IChpbWFnZURhdGEubGVuZ3RoIC0gMSkgLyBNYXRoLmxvZzIobGlnaHQuc3BlY3VsYXJJbWFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGJhYnlsb25UZXh0dXJlLnVwZGF0ZVJHQkRBc3luYyhpbWFnZURhdGEsIHNwaGVyaWNhbFBvbHlub21pYWwsIGxvZEdlbmVyYXRpb25TY2FsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIGxpZ2h0Ll9sb2FkZWQudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaWdodC5fYmFieWxvblRleHR1cmUhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBFWFRfbGlnaHRzX2ltYWdlX2Jhc2VkKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9