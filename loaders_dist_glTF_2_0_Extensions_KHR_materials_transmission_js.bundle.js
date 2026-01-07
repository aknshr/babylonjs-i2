"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_transmission_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_transmission.js":
/*!*************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_transmission.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_transmission: () => (/* binding */ KHR_materials_transmission)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var core_Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/Textures/renderTargetTexture */ "../core/dist/Materials/Textures/renderTargetTexture.js");
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * A class to handle setting up the rendering of opaque objects to be shown through transmissive objects.
 */
class TransmissionHelper {
    /**
     * Creates the default options for the helper.
     * @returns the default options
     */
    static _GetDefaultOptions() {
        return {
            renderSize: 1024,
            samples: 4,
            lodGenerationScale: 1,
            lodGenerationOffset: -4,
            renderTargetTextureType: core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURETYPE_HALF_FLOAT,
            generateMipmaps: true,
        };
    }
    /**
     * constructor
     * @param options Defines the options we want to customize the helper
     * @param scene The scene to add the material to
     */
    constructor(options, scene) {
        this._opaqueRenderTarget = null;
        this._opaqueMeshesCache = [];
        this._transparentMeshesCache = [];
        this._materialObservers = {};
        this._options = {
            ...TransmissionHelper._GetDefaultOptions(),
            ...options,
        };
        this._scene = scene;
        this._scene._transmissionHelper = this;
        this.onErrorObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        this._scene.onDisposeObservable.addOnce(() => {
            this.dispose();
        });
        this._parseScene();
        this._setupRenderTargets();
    }
    /**
     * Updates the background according to the new options
     * @param options
     */
    updateOptions(options) {
        // First check if any options are actually being changed. If not, exit.
        const newValues = Object.keys(options).filter((key) => this._options[key] !== options[key]);
        if (!newValues.length) {
            return;
        }
        const newOptions = {
            ...this._options,
            ...options,
        };
        const oldOptions = this._options;
        this._options = newOptions;
        // If size changes, recreate everything
        if (newOptions.renderSize !== oldOptions.renderSize ||
            newOptions.renderTargetTextureType !== oldOptions.renderTargetTextureType ||
            newOptions.generateMipmaps !== oldOptions.generateMipmaps ||
            !this._opaqueRenderTarget) {
            this._setupRenderTargets();
        }
        else {
            this._opaqueRenderTarget.samples = newOptions.samples;
            this._opaqueRenderTarget.lodGenerationScale = newOptions.lodGenerationScale;
            this._opaqueRenderTarget.lodGenerationOffset = newOptions.lodGenerationOffset;
        }
    }
    /**
     * @returns the opaque render target texture or null if not available.
     */
    getOpaqueTarget() {
        return this._opaqueRenderTarget;
    }
    _shouldRenderAsTransmission(material) {
        return material?.subSurface?.isRefractionEnabled ? true : false;
    }
    _addMesh(mesh) {
        this._materialObservers[mesh.uniqueId] = mesh.onMaterialChangedObservable.add(this._onMeshMaterialChanged.bind(this));
        // we need to defer the processing because _addMesh may be called as part as an instance mesh creation, in which case some
        // internal properties are not setup yet, like _sourceMesh (needed when doing mesh.material below)
        core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.SetImmediate(() => {
            if (this._shouldRenderAsTransmission(mesh.material)) {
                mesh.material.refractionTexture = this._opaqueRenderTarget;
                if (this._transparentMeshesCache.indexOf(mesh) === -1) {
                    this._transparentMeshesCache.push(mesh);
                }
            }
            else {
                if (this._opaqueMeshesCache.indexOf(mesh) === -1) {
                    this._opaqueMeshesCache.push(mesh);
                }
            }
        });
    }
    _removeMesh(mesh) {
        mesh.onMaterialChangedObservable.remove(this._materialObservers[mesh.uniqueId]);
        delete this._materialObservers[mesh.uniqueId];
        let idx = this._transparentMeshesCache.indexOf(mesh);
        if (idx !== -1) {
            this._transparentMeshesCache.splice(idx, 1);
        }
        idx = this._opaqueMeshesCache.indexOf(mesh);
        if (idx !== -1) {
            this._opaqueMeshesCache.splice(idx, 1);
        }
    }
    _parseScene() {
        this._scene.meshes.forEach(this._addMesh.bind(this));
        // Listen for when a mesh is added to the scene and add it to our cache lists.
        this._scene.onNewMeshAddedObservable.add(this._addMesh.bind(this));
        // Listen for when a mesh is removed from to the scene and remove it from our cache lists.
        this._scene.onMeshRemovedObservable.add(this._removeMesh.bind(this));
    }
    // When one of the meshes in the scene has its material changed, make sure that it's in the correct cache list.
    _onMeshMaterialChanged(mesh) {
        const transparentIdx = this._transparentMeshesCache.indexOf(mesh);
        const opaqueIdx = this._opaqueMeshesCache.indexOf(mesh);
        // If the material is transparent, make sure that it's added to the transparent list and removed from the opaque list
        const useTransmission = this._shouldRenderAsTransmission(mesh.material);
        if (useTransmission) {
            if (mesh.material) {
                const subSurface = mesh.material.subSurface;
                if (subSurface) {
                    subSurface.refractionTexture = this._opaqueRenderTarget;
                }
            }
            if (opaqueIdx !== -1) {
                this._opaqueMeshesCache.splice(opaqueIdx, 1);
                this._transparentMeshesCache.push(mesh);
            }
            else if (transparentIdx === -1) {
                this._transparentMeshesCache.push(mesh);
            }
            // If the material is opaque, make sure that it's added to the opaque list and removed from the transparent list
        }
        else {
            if (transparentIdx !== -1) {
                this._transparentMeshesCache.splice(transparentIdx, 1);
                this._opaqueMeshesCache.push(mesh);
            }
            else if (opaqueIdx === -1) {
                this._opaqueMeshesCache.push(mesh);
            }
        }
    }
    /**
     * @internal
     * Check if the opaque render target has not been disposed and can still be used.
     * @returns
     */
    _isRenderTargetValid() {
        return this._opaqueRenderTarget?.getInternalTexture() !== null;
    }
    /**
     * @internal
     * Setup the render targets according to the specified options.
     */
    _setupRenderTargets() {
        if (this._opaqueRenderTarget) {
            this._opaqueRenderTarget.dispose();
        }
        this._opaqueRenderTarget = new core_Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_1__.RenderTargetTexture("opaqueSceneTexture", this._options.renderSize, this._scene, this._options.generateMipmaps, undefined, this._options.renderTargetTextureType);
        this._opaqueRenderTarget.ignoreCameraViewport = true;
        this._opaqueRenderTarget.renderList = this._opaqueMeshesCache;
        this._opaqueRenderTarget.clearColor = this._options.clearColor?.clone() ?? this._scene.clearColor.clone();
        this._opaqueRenderTarget.gammaSpace = false;
        this._opaqueRenderTarget.lodGenerationScale = this._options.lodGenerationScale;
        this._opaqueRenderTarget.lodGenerationOffset = this._options.lodGenerationOffset;
        this._opaqueRenderTarget.samples = this._options.samples;
        this._opaqueRenderTarget.renderSprites = true;
        this._opaqueRenderTarget.renderParticles = true;
        this._opaqueRenderTarget.disableImageProcessing = true;
        let saveSceneEnvIntensity;
        this._opaqueRenderTarget.onBeforeBindObservable.add((opaqueRenderTarget) => {
            saveSceneEnvIntensity = this._scene.environmentIntensity;
            this._scene.environmentIntensity = 1.0;
            if (!this._options.clearColor) {
                this._scene.clearColor.toLinearSpaceToRef(opaqueRenderTarget.clearColor, this._scene.getEngine().useExactSrgbConversions);
            }
            else {
                opaqueRenderTarget.clearColor.copyFrom(this._options.clearColor);
            }
        });
        this._opaqueRenderTarget.onAfterUnbindObservable.add(() => {
            this._scene.environmentIntensity = saveSceneEnvIntensity;
        });
        for (const mesh of this._transparentMeshesCache) {
            if (this._shouldRenderAsTransmission(mesh.material)) {
                mesh.material.refractionTexture = this._opaqueRenderTarget;
            }
        }
    }
    /**
     * Dispose all the elements created by the Helper.
     */
    dispose() {
        this._scene._transmissionHelper = undefined;
        if (this._opaqueRenderTarget) {
            this._opaqueRenderTarget.dispose();
            this._opaqueRenderTarget = null;
        }
        this._transparentMeshesCache = [];
        this._opaqueMeshesCache = [];
    }
}
const NAME = "KHR_materials_transmission";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_transmission {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines a number that determines the order the extensions are applied.
         */
        this.order = 175;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
        if (this.enabled) {
            loader.parent.transparencyAsCoverage = true;
        }
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, material, this.name, async (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(this._loadTransparentPropertiesAsync(extensionContext, material, babylonMaterial, extension));
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(() => { });
        });
    }
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    _loadTransparentPropertiesAsync(context, material, babylonMaterial, extension) {
        const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
        const transmissionWeight = extension.transmissionFactor !== undefined ? extension.transmissionFactor : 0.0;
        if (transmissionWeight === 0) {
            return Promise.resolve();
        }
        // Set transmission properties immediately via adapter
        adapter.configureTransmission();
        adapter.transmissionWeight = transmissionWeight;
        // Handle transmission helper setup (only needed for PBR materials)
        if (transmissionWeight > 0 && !this._loader.parent.dontUseTransmissionHelper) {
            const scene = babylonMaterial.getScene();
            if (!scene._transmissionHelper) {
                new TransmissionHelper({}, babylonMaterial.getScene());
            }
            else if (!scene._transmissionHelper?._isRenderTargetValid()) {
                // If the render target is not valid, recreate it.
                scene._transmissionHelper?._setupRenderTargets();
            }
        }
        // Load texture if present
        let texturePromise = Promise.resolve(null);
        if (extension.transmissionTexture) {
            extension.transmissionTexture.nonColorData = true;
            texturePromise = this._loader.loadTextureInfoAsync(`${context}/transmissionTexture`, extension.transmissionTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Transmission)`;
                adapter.transmissionWeightTexture = texture;
            });
        }
        // eslint-disable-next-line github/no-then
        return texturePromise.then(() => { });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_5__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_5__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_transmission(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUErQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBb0JBOzs7O0FBSUE7QUFDQTtBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSVRleHR1cmVJbmZvIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxzVHJhbnNtaXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFJlbmRlclRhcmdldFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvcmVuZGVyVGFyZ2V0VGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE9ic2VydmVyIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcImNvcmUvRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5cclxuaW50ZXJmYWNlIElUcmFuc21pc3Npb25IZWxwZXJIb2xkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgX3RyYW5zbWlzc2lvbkhlbHBlcjogVHJhbnNtaXNzaW9uSGVscGVyIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVRyYW5zbWlzc2lvbkhlbHBlck9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmVuZGVyIGJ1ZmZlcnMgKGRlZmF1bHQ6IDEwMjQpXHJcbiAgICAgKi9cclxuICAgIHJlbmRlclNpemU6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2Ygc2FtcGxlcyB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHRoZSByZW5kZXIgdGFyZ2V0IHRleHR1cmUgZm9yIG9wYXF1ZSBtZXNoZXMgKGRlZmF1bHQ6IDQpXHJcbiAgICAgKi9cclxuICAgIHNhbXBsZXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjYWxlIHRvIGFwcGx5IHdoZW4gc2VsZWN0aW5nIHRoZSBMT0QgbGV2ZWwgdG8gc2FtcGxlIHRoZSByZWZyYWN0aW9uIHRleHR1cmUgKGRlZmF1bHQ6IDEpXHJcbiAgICAgKi9cclxuICAgIGxvZEdlbmVyYXRpb25TY2FsZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2Zmc2V0IHRvIGFwcGx5IHdoZW4gc2VsZWN0aW5nIHRoZSBMT0QgbGV2ZWwgdG8gc2FtcGxlIHRoZSByZWZyYWN0aW9uIHRleHR1cmUgKGRlZmF1bHQ6IC00KVxyXG4gICAgICovXHJcbiAgICBsb2RHZW5lcmF0aW9uT2Zmc2V0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIG9mIHRoZSByZWZyYWN0aW9uIHJlbmRlciB0YXJnZXQgdGV4dHVyZSAoZGVmYXVsdDogVEVYVFVSRVRZUEVfSEFMRl9GTE9BVClcclxuICAgICAqL1xyXG4gICAgcmVuZGVyVGFyZ2V0VGV4dHVyZVR5cGU6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIG1pcG1hcHMgZm9yIHRoZSByZWZyYWN0aW9uIHJlbmRlciB0YXJnZXQgdGV4dHVyZSBtdXN0IGJlIGdlbmVyYXRlZCAoZGVmYXVsdDogdHJ1ZSlcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVNaXBtYXBzOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgY29sb3Igb2YgdGhlIG9wYXF1ZSB0ZXh0dXJlLiBJZiBub3QgcHJvdmlkZWQsIHVzZSB0aGUgc2NlbmUgY2xlYXIgY29sb3IgKHdoaWNoIHdpbGwgYmUgY29udmVydGVkIHRvIGxpbmVhciBzcGFjZSkuXHJcbiAgICAgKiBJZiBwcm92aWRlZCwgc2hvdWxkIGJlIGluIGxpbmVhciBzcGFjZVxyXG4gICAgICovXHJcbiAgICBjbGVhckNvbG9yPzogQ29sb3I0O1xyXG59XHJcblxyXG4vKipcclxuICogQSBjbGFzcyB0byBoYW5kbGUgc2V0dGluZyB1cCB0aGUgcmVuZGVyaW5nIG9mIG9wYXF1ZSBvYmplY3RzIHRvIGJlIHNob3duIHRocm91Z2ggdHJhbnNtaXNzaXZlIG9iamVjdHMuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc21pc3Npb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBoZWxwZXIuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZGVmYXVsdCBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXREZWZhdWx0T3B0aW9ucygpOiBJVHJhbnNtaXNzaW9uSGVscGVyT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVuZGVyU2l6ZTogMTAyNCxcclxuICAgICAgICAgICAgc2FtcGxlczogNCxcclxuICAgICAgICAgICAgbG9kR2VuZXJhdGlvblNjYWxlOiAxLFxyXG4gICAgICAgICAgICBsb2RHZW5lcmF0aW9uT2Zmc2V0OiAtNCxcclxuICAgICAgICAgICAgcmVuZGVyVGFyZ2V0VGV4dHVyZVR5cGU6IENvbnN0YW50cy5URVhUVVJFVFlQRV9IQUxGX0ZMT0FULFxyXG4gICAgICAgICAgICBnZW5lcmF0ZU1pcG1hcHM6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyB0aGUgY3JlYXRpb24gb3B0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2NlbmU6IFNjZW5lICYgSVRyYW5zbWlzc2lvbkhlbHBlckhvbGRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9vcHRpb25zOiBJVHJhbnNtaXNzaW9uSGVscGVyT3B0aW9ucztcclxuXHJcbiAgICBwcml2YXRlIF9vcGFxdWVSZW5kZXJUYXJnZXQ6IE51bGxhYmxlPFJlbmRlclRhcmdldFRleHR1cmU+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX29wYXF1ZU1lc2hlc0NhY2hlOiBBYnN0cmFjdE1lc2hbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfdHJhbnNwYXJlbnRNZXNoZXNDYWNoZTogQWJzdHJhY3RNZXNoW10gPSBbXTtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsT2JzZXJ2ZXJzOiB7IFtpZDogc3RyaW5nXTogTnVsbGFibGU8T2JzZXJ2ZXI8QWJzdHJhY3RNZXNoPj4gfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBvYnNlcnZhYmxlIHdpbGwgYmUgbm90aWZpZWQgd2l0aCBhbnkgZXJyb3IgZHVyaW5nIHRoZSBjcmVhdGlvbiBvZiB0aGUgZW52aXJvbm1lbnQsXHJcbiAgICAgKiBtYWlubHkgdGV4dHVyZSBjcmVhdGlvbiBlcnJvcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkVycm9yT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTx7IG1lc3NhZ2U/OiBzdHJpbmc7IGV4Y2VwdGlvbj86IGFueSB9PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBEZWZpbmVzIHRoZSBvcHRpb25zIHdlIHdhbnQgdG8gY3VzdG9taXplIHRoZSBoZWxwZXJcclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gYWRkIHRoZSBtYXRlcmlhbCB0b1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPElUcmFuc21pc3Npb25IZWxwZXJPcHRpb25zPiwgc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4uVHJhbnNtaXNzaW9uSGVscGVyLl9HZXREZWZhdWx0T3B0aW9ucygpLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUuX3RyYW5zbWlzc2lvbkhlbHBlciA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMub25FcnJvck9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJzZVNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0dXBSZW5kZXJUYXJnZXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBiYWNrZ3JvdW5kIGFjY29yZGluZyB0byB0aGUgbmV3IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8SVRyYW5zbWlzc2lvbkhlbHBlck9wdGlvbnM+KSB7XHJcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgYW55IG9wdGlvbnMgYXJlIGFjdHVhbGx5IGJlaW5nIGNoYW5nZWQuIElmIG5vdCwgZXhpdC5cclxuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5maWx0ZXIoKGtleTogc3RyaW5nKSA9PiAodGhpcy5fb3B0aW9ucyBhcyBhbnkpW2tleV0gIT09IChvcHRpb25zIGFzIGFueSlba2V5XSk7XHJcbiAgICAgICAgaWYgKCFuZXdWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuX29wdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2xkT3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcblxyXG4gICAgICAgIC8vIElmIHNpemUgY2hhbmdlcywgcmVjcmVhdGUgZXZlcnl0aGluZ1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmV3T3B0aW9ucy5yZW5kZXJTaXplICE9PSBvbGRPcHRpb25zLnJlbmRlclNpemUgfHxcclxuICAgICAgICAgICAgbmV3T3B0aW9ucy5yZW5kZXJUYXJnZXRUZXh0dXJlVHlwZSAhPT0gb2xkT3B0aW9ucy5yZW5kZXJUYXJnZXRUZXh0dXJlVHlwZSB8fFxyXG4gICAgICAgICAgICBuZXdPcHRpb25zLmdlbmVyYXRlTWlwbWFwcyAhPT0gb2xkT3B0aW9ucy5nZW5lcmF0ZU1pcG1hcHMgfHxcclxuICAgICAgICAgICAgIXRoaXMuX29wYXF1ZVJlbmRlclRhcmdldFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXR1cFJlbmRlclRhcmdldHMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQuc2FtcGxlcyA9IG5ld09wdGlvbnMuc2FtcGxlcztcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmxvZEdlbmVyYXRpb25TY2FsZSA9IG5ld09wdGlvbnMubG9kR2VuZXJhdGlvblNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQubG9kR2VuZXJhdGlvbk9mZnNldCA9IG5ld09wdGlvbnMubG9kR2VuZXJhdGlvbk9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgb3BhcXVlIHJlbmRlciB0YXJnZXQgdGV4dHVyZSBvciBudWxsIGlmIG5vdCBhdmFpbGFibGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRPcGFxdWVUYXJnZXQoKTogTnVsbGFibGU8VGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvdWxkUmVuZGVyQXNUcmFuc21pc3Npb24obWF0ZXJpYWw6IE51bGxhYmxlPE1hdGVyaWFsPik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAobWF0ZXJpYWwgYXMgYW55KT8uc3ViU3VyZmFjZT8uaXNSZWZyYWN0aW9uRW5hYmxlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGRNZXNoKG1lc2g6IEFic3RyYWN0TWVzaCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsT2JzZXJ2ZXJzW21lc2gudW5pcXVlSWRdID0gbWVzaC5vbk1hdGVyaWFsQ2hhbmdlZE9ic2VydmFibGUuYWRkKHRoaXMuX29uTWVzaE1hdGVyaWFsQ2hhbmdlZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byBkZWZlciB0aGUgcHJvY2Vzc2luZyBiZWNhdXNlIF9hZGRNZXNoIG1heSBiZSBjYWxsZWQgYXMgcGFydCBhcyBhbiBpbnN0YW5jZSBtZXNoIGNyZWF0aW9uLCBpbiB3aGljaCBjYXNlIHNvbWVcclxuICAgICAgICAvLyBpbnRlcm5hbCBwcm9wZXJ0aWVzIGFyZSBub3Qgc2V0dXAgeWV0LCBsaWtlIF9zb3VyY2VNZXNoIChuZWVkZWQgd2hlbiBkb2luZyBtZXNoLm1hdGVyaWFsIGJlbG93KVxyXG4gICAgICAgIFRvb2xzLlNldEltbWVkaWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRSZW5kZXJBc1RyYW5zbWlzc2lvbihtZXNoLm1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgKG1lc2gubWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWwpLnJlZnJhY3Rpb25UZXh0dXJlID0gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUuaW5kZXhPZihtZXNoKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlLnB1c2gobWVzaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUuaW5kZXhPZihtZXNoKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtb3ZlTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gpOiB2b2lkIHtcclxuICAgICAgICBtZXNoLm9uTWF0ZXJpYWxDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fbWF0ZXJpYWxPYnNlcnZlcnNbbWVzaC51bmlxdWVJZF0pO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9tYXRlcmlhbE9ic2VydmVyc1ttZXNoLnVuaXF1ZUlkXTtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5pbmRleE9mKG1lc2gpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkeCA9IHRoaXMuX29wYXF1ZU1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCk7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlU2NlbmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUubWVzaGVzLmZvckVhY2godGhpcy5fYWRkTWVzaC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBMaXN0ZW4gZm9yIHdoZW4gYSBtZXNoIGlzIGFkZGVkIHRvIHRoZSBzY2VuZSBhbmQgYWRkIGl0IHRvIG91ciBjYWNoZSBsaXN0cy5cclxuICAgICAgICB0aGlzLl9zY2VuZS5vbk5ld01lc2hBZGRlZE9ic2VydmFibGUuYWRkKHRoaXMuX2FkZE1lc2guYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciB3aGVuIGEgbWVzaCBpcyByZW1vdmVkIGZyb20gdG8gdGhlIHNjZW5lIGFuZCByZW1vdmUgaXQgZnJvbSBvdXIgY2FjaGUgbGlzdHMuXHJcbiAgICAgICAgdGhpcy5fc2NlbmUub25NZXNoUmVtb3ZlZE9ic2VydmFibGUuYWRkKHRoaXMuX3JlbW92ZU1lc2guYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBvbmUgb2YgdGhlIG1lc2hlcyBpbiB0aGUgc2NlbmUgaGFzIGl0cyBtYXRlcmlhbCBjaGFuZ2VkLCBtYWtlIHN1cmUgdGhhdCBpdCdzIGluIHRoZSBjb3JyZWN0IGNhY2hlIGxpc3QuXHJcbiAgICBwcml2YXRlIF9vbk1lc2hNYXRlcmlhbENoYW5nZWQobWVzaDogQWJzdHJhY3RNZXNoKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNwYXJlbnRJZHggPSB0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlLmluZGV4T2YobWVzaCk7XHJcbiAgICAgICAgY29uc3Qgb3BhcXVlSWR4ID0gdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUuaW5kZXhPZihtZXNoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIG1hdGVyaWFsIGlzIHRyYW5zcGFyZW50LCBtYWtlIHN1cmUgdGhhdCBpdCdzIGFkZGVkIHRvIHRoZSB0cmFuc3BhcmVudCBsaXN0IGFuZCByZW1vdmVkIGZyb20gdGhlIG9wYXF1ZSBsaXN0XHJcbiAgICAgICAgY29uc3QgdXNlVHJhbnNtaXNzaW9uID0gdGhpcy5fc2hvdWxkUmVuZGVyQXNUcmFuc21pc3Npb24obWVzaC5tYXRlcmlhbCk7XHJcbiAgICAgICAgaWYgKHVzZVRyYW5zbWlzc2lvbikge1xyXG4gICAgICAgICAgICBpZiAobWVzaC5tYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViU3VyZmFjZSA9IChtZXNoLm1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5zdWJTdXJmYWNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YlN1cmZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJTdXJmYWNlLnJlZnJhY3Rpb25UZXh0dXJlID0gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcGFxdWVJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5zcGxpY2Uob3BhcXVlSWR4LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc3BhcmVudElkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcGFyZW50TWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgbWF0ZXJpYWwgaXMgb3BhcXVlLCBtYWtlIHN1cmUgdGhhdCBpdCdzIGFkZGVkIHRvIHRoZSBvcGFxdWUgbGlzdCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSB0cmFuc3BhcmVudCBsaXN0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50SWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZS5zcGxpY2UodHJhbnNwYXJlbnRJZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUucHVzaChtZXNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcGFxdWVJZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZS5wdXNoKG1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3BhcXVlIHJlbmRlciB0YXJnZXQgaGFzIG5vdCBiZWVuIGRpc3Bvc2VkIGFuZCBjYW4gc3RpbGwgYmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaXNSZW5kZXJUYXJnZXRWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0Py5nZXRJbnRlcm5hbFRleHR1cmUoKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogU2V0dXAgdGhlIHJlbmRlciB0YXJnZXRzIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2V0dXBSZW5kZXJUYXJnZXRzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0ID0gbmV3IFJlbmRlclRhcmdldFRleHR1cmUoXHJcbiAgICAgICAgICAgIFwib3BhcXVlU2NlbmVUZXh0dXJlXCIsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVuZGVyU2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVuZGVyVGFyZ2V0VGV4dHVyZVR5cGVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5pZ25vcmVDYW1lcmFWaWV3cG9ydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnJlbmRlckxpc3QgPSB0aGlzLl9vcGFxdWVNZXNoZXNDYWNoZTtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQuY2xlYXJDb2xvciA9IHRoaXMuX29wdGlvbnMuY2xlYXJDb2xvcj8uY2xvbmUoKSA/PyB0aGlzLl9zY2VuZS5jbGVhckNvbG9yLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmdhbW1hU3BhY2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQubG9kR2VuZXJhdGlvblNjYWxlID0gdGhpcy5fb3B0aW9ucy5sb2RHZW5lcmF0aW9uU2NhbGU7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LmxvZEdlbmVyYXRpb25PZmZzZXQgPSB0aGlzLl9vcHRpb25zLmxvZEdlbmVyYXRpb25PZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnNhbXBsZXMgPSB0aGlzLl9vcHRpb25zLnNhbXBsZXM7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0LnJlbmRlclNwcml0ZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5yZW5kZXJQYXJ0aWNsZXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5kaXNhYmxlSW1hZ2VQcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHNhdmVTY2VuZUVudkludGVuc2l0eTogbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldC5vbkJlZm9yZUJpbmRPYnNlcnZhYmxlLmFkZCgob3BhcXVlUmVuZGVyVGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIHNhdmVTY2VuZUVudkludGVuc2l0eSA9IHRoaXMuX3NjZW5lLmVudmlyb25tZW50SW50ZW5zaXR5O1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5lbnZpcm9ubWVudEludGVuc2l0eSA9IDEuMDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmNsZWFyQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLmNsZWFyQ29sb3IudG9MaW5lYXJTcGFjZVRvUmVmKG9wYXF1ZVJlbmRlclRhcmdldC5jbGVhckNvbG9yLCB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGFxdWVSZW5kZXJUYXJnZXQuY2xlYXJDb2xvci5jb3B5RnJvbSh0aGlzLl9vcHRpb25zLmNsZWFyQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlUmVuZGVyVGFyZ2V0Lm9uQWZ0ZXJVbmJpbmRPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLmVudmlyb25tZW50SW50ZW5zaXR5ID0gc2F2ZVNjZW5lRW52SW50ZW5zaXR5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdGhpcy5fdHJhbnNwYXJlbnRNZXNoZXNDYWNoZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyQXNUcmFuc21pc3Npb24obWVzaC5tYXRlcmlhbCkpIHtcclxuICAgICAgICAgICAgICAgIChtZXNoLm1hdGVyaWFsIGFzIFBCUk1hdGVyaWFsKS5yZWZyYWN0aW9uVGV4dHVyZSA9IHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgYWxsIHRoZSBlbGVtZW50cyBjcmVhdGVkIGJ5IHRoZSBIZWxwZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lLl90cmFuc21pc3Npb25IZWxwZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wYXF1ZVJlbmRlclRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vcGFxdWVSZW5kZXJUYXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90cmFuc3BhcmVudE1lc2hlc0NhY2hlID0gW107XHJcbiAgICAgICAgdGhpcy5fb3BhcXVlTWVzaGVzQ2FjaGUgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbiBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTc1O1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGxvYWRlci5wYXJlbnQudHJhbnNwYXJlbmN5QXNDb3ZlcmFnZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1RyYW5zbWlzc2lvbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFRyYW5zcGFyZW50UHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwsIGV4dGVuc2lvbikpO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICBwcml2YXRlIF9sb2FkVHJhbnNwYXJlbnRQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBleHRlbnNpb246IElLSFJNYXRlcmlhbHNUcmFuc21pc3Npb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5fbG9hZGVyLl9nZXRPckNyZWF0ZU1hdGVyaWFsQWRhcHRlcihiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbWlzc2lvbldlaWdodCA9IGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3IgOiAwLjA7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc21pc3Npb25XZWlnaHQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IHRyYW5zbWlzc2lvbiBwcm9wZXJ0aWVzIGltbWVkaWF0ZWx5IHZpYSBhZGFwdGVyXHJcbiAgICAgICAgYWRhcHRlci5jb25maWd1cmVUcmFuc21pc3Npb24oKTtcclxuICAgICAgICBhZGFwdGVyLnRyYW5zbWlzc2lvbldlaWdodCA9IHRyYW5zbWlzc2lvbldlaWdodDtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIHRyYW5zbWlzc2lvbiBoZWxwZXIgc2V0dXAgKG9ubHkgbmVlZGVkIGZvciBQQlIgbWF0ZXJpYWxzKVxyXG4gICAgICAgIGlmICh0cmFuc21pc3Npb25XZWlnaHQgPiAwICYmICF0aGlzLl9sb2FkZXIucGFyZW50LmRvbnRVc2VUcmFuc21pc3Npb25IZWxwZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBiYWJ5bG9uTWF0ZXJpYWwuZ2V0U2NlbmUoKSBhcyB1bmtub3duIGFzIElUcmFuc21pc3Npb25IZWxwZXJIb2xkZXI7XHJcbiAgICAgICAgICAgIGlmICghc2NlbmUuX3RyYW5zbWlzc2lvbkhlbHBlcikge1xyXG4gICAgICAgICAgICAgICAgbmV3IFRyYW5zbWlzc2lvbkhlbHBlcih7fSwgYmFieWxvbk1hdGVyaWFsLmdldFNjZW5lKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzY2VuZS5fdHJhbnNtaXNzaW9uSGVscGVyPy5faXNSZW5kZXJUYXJnZXRWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVuZGVyIHRhcmdldCBpcyBub3QgdmFsaWQsIHJlY3JlYXRlIGl0LlxyXG4gICAgICAgICAgICAgICAgc2NlbmUuX3RyYW5zbWlzc2lvbkhlbHBlcj8uX3NldHVwUmVuZGVyVGFyZ2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb2FkIHRleHR1cmUgaWYgcHJlc2VudFxyXG4gICAgICAgIGxldCB0ZXh0dXJlUHJvbWlzZTogUHJvbWlzZTxOdWxsYWJsZTxCYXNlVGV4dHVyZT4+ID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgYXMgSVRleHR1cmVJbmZvKS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXh0dXJlUHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS90cmFuc21pc3Npb25UZXh0dXJlYCwgZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUsICh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChUcmFuc21pc3Npb24pYDtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIudHJhbnNtaXNzaW9uV2VpZ2h0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmVQcm9taXNlLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbihsb2FkZXIpKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==