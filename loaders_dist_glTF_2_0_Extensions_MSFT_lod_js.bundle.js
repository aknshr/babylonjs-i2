"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_MSFT_lod_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/MSFT_lod.js":
/*!*******************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/MSFT_lod.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_lod: () => (/* binding */ MSFT_lod)
/* harmony export */ });
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var core_Misc_deferred__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/deferred */ "../core/dist/Misc/deferred.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





const NAME = "MSFT_lod";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/MSFT_lod/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class MSFT_lod {
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
        this.order = 100;
        /**
         * Maximum number of LODs to load, starting from the lowest LOD.
         */
        this.maxLODsToLoad = 10;
        /**
         * Observable raised when all node LODs of one level are loaded.
         * The event data is the index of the loaded LOD starting from zero.
         * Dispose the loader to cancel the loading of the next level of LODs.
         */
        this.onNodeLODsLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when all material LODs of one level are loaded.
         * The event data is the index of the loaded LOD starting from zero.
         * Dispose the loader to cancel the loading of the next level of LODs.
         */
        this.onMaterialLODsLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._bufferLODs = new Array();
        this._nodeIndexLOD = null;
        this._nodeSignalLODs = new Array();
        this._nodePromiseLODs = new Array();
        this._nodeBufferLODs = new Array();
        this._materialIndexLOD = null;
        this._materialSignalLODs = new Array();
        this._materialPromiseLODs = new Array();
        this._materialBufferLODs = new Array();
        this._loader = loader;
        // Options takes precedence. The maxLODsToLoad extension property is retained for back compat.
        // For new extensions, they should only use options.
        this.maxLODsToLoad = this._loader.parent.extensionOptions[NAME]?.maxLODsToLoad ?? this.maxLODsToLoad;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
        this._nodeIndexLOD = null;
        this._nodeSignalLODs.length = 0;
        this._nodePromiseLODs.length = 0;
        this._nodeBufferLODs.length = 0;
        this._materialIndexLOD = null;
        this._materialSignalLODs.length = 0;
        this._materialPromiseLODs.length = 0;
        this._materialBufferLODs.length = 0;
        this.onMaterialLODsLoadedObservable.clear();
        this.onNodeLODsLoadedObservable.clear();
    }
    /** @internal */
    onReady() {
        for (let indexLOD = 0; indexLOD < this._nodePromiseLODs.length; indexLOD++) {
            const promise = Promise.all(this._nodePromiseLODs[indexLOD]).then(() => {
                if (indexLOD !== 0) {
                    this._loader.endPerformanceCounter(`Node LOD ${indexLOD}`);
                    this._loader.log(`Loaded node LOD ${indexLOD}`);
                }
                this.onNodeLODsLoadedObservable.notifyObservers(indexLOD);
                if (indexLOD !== this._nodePromiseLODs.length - 1) {
                    this._loader.startPerformanceCounter(`Node LOD ${indexLOD + 1}`);
                    this._loadBufferLOD(this._nodeBufferLODs, indexLOD + 1);
                    if (this._nodeSignalLODs[indexLOD]) {
                        this._nodeSignalLODs[indexLOD].resolve();
                    }
                }
            });
            this._loader._completePromises.push(promise);
        }
        for (let indexLOD = 0; indexLOD < this._materialPromiseLODs.length; indexLOD++) {
            const promise = Promise.all(this._materialPromiseLODs[indexLOD]).then(() => {
                if (indexLOD !== 0) {
                    this._loader.endPerformanceCounter(`Material LOD ${indexLOD}`);
                    this._loader.log(`Loaded material LOD ${indexLOD}`);
                }
                this.onMaterialLODsLoadedObservable.notifyObservers(indexLOD);
                if (indexLOD !== this._materialPromiseLODs.length - 1) {
                    this._loader.startPerformanceCounter(`Material LOD ${indexLOD + 1}`);
                    this._loadBufferLOD(this._materialBufferLODs, indexLOD + 1);
                    if (this._materialSignalLODs[indexLOD]) {
                        this._materialSignalLODs[indexLOD].resolve();
                    }
                }
            });
            this._loader._completePromises.push(promise);
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadSceneAsync(context, scene) {
        const promise = this._loader.loadSceneAsync(context, scene);
        this._loadBufferLOD(this._bufferLODs, 0);
        return promise;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader.LoadExtensionAsync(context, node, this.name, async (extensionContext, extension) => {
            let firstPromise;
            const nodeLODs = this._getLODs(extensionContext, node, this._loader.gltf.nodes, extension.ids);
            this._loader.logOpen(`${extensionContext}`);
            for (let indexLOD = 0; indexLOD < nodeLODs.length; indexLOD++) {
                const nodeLOD = nodeLODs[indexLOD];
                if (indexLOD !== 0) {
                    this._nodeIndexLOD = indexLOD;
                    this._nodeSignalLODs[indexLOD] = this._nodeSignalLODs[indexLOD] || new core_Misc_deferred__WEBPACK_IMPORTED_MODULE_1__.Deferred();
                }
                const assignWrap = (babylonTransformNode) => {
                    assign(babylonTransformNode);
                    babylonTransformNode.setEnabled(false);
                };
                const promise = this._loader.loadNodeAsync(`/nodes/${nodeLOD.index}`, nodeLOD, assignWrap).then((babylonMesh) => {
                    if (indexLOD !== 0) {
                        // TODO: should not rely on _babylonTransformNode
                        const previousNodeLOD = nodeLODs[indexLOD - 1];
                        if (previousNodeLOD._babylonTransformNode) {
                            this._disposeTransformNode(previousNodeLOD._babylonTransformNode);
                            delete previousNodeLOD._babylonTransformNode;
                        }
                    }
                    babylonMesh.setEnabled(true);
                    return babylonMesh;
                });
                this._nodePromiseLODs[indexLOD] = this._nodePromiseLODs[indexLOD] || [];
                if (indexLOD === 0) {
                    firstPromise = promise;
                }
                else {
                    this._nodeIndexLOD = null;
                    this._nodePromiseLODs[indexLOD].push(promise);
                }
            }
            this._loader.logClose();
            return await firstPromise;
        });
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    _loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign) {
        // Don't load material LODs if already loading a node LOD.
        if (this._nodeIndexLOD) {
            return null;
        }
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader.LoadExtensionAsync(context, material, this.name, async (extensionContext, extension) => {
            let firstPromise;
            const materialLODs = this._getLODs(extensionContext, material, this._loader.gltf.materials, extension.ids);
            this._loader.logOpen(`${extensionContext}`);
            for (let indexLOD = 0; indexLOD < materialLODs.length; indexLOD++) {
                const materialLOD = materialLODs[indexLOD];
                if (indexLOD !== 0) {
                    this._materialIndexLOD = indexLOD;
                }
                const promise = this._loader
                    ._loadMaterialAsync(`/materials/${materialLOD.index}`, materialLOD, babylonMesh, babylonDrawMode, (babylonMaterial) => {
                    if (indexLOD === 0) {
                        assign(babylonMaterial);
                    }
                })
                    .then((babylonMaterial) => {
                    if (indexLOD !== 0) {
                        assign(babylonMaterial);
                        // TODO: should not rely on _data
                        const previousDataLOD = materialLODs[indexLOD - 1]._data;
                        if (previousDataLOD[babylonDrawMode]) {
                            this._disposeMaterials([previousDataLOD[babylonDrawMode].babylonMaterial]);
                            delete previousDataLOD[babylonDrawMode];
                        }
                    }
                    return babylonMaterial;
                });
                this._materialPromiseLODs[indexLOD] = this._materialPromiseLODs[indexLOD] || [];
                if (indexLOD === 0) {
                    firstPromise = promise;
                }
                else {
                    this._materialIndexLOD = null;
                    this._materialPromiseLODs[indexLOD].push(promise);
                }
            }
            this._loader.logClose();
            return await firstPromise;
        });
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    _loadUriAsync(context, property, uri) {
        // Defer the loading of uris if loading a node or material LOD.
        if (this._nodeIndexLOD !== null) {
            this._loader.log(`deferred`);
            const previousIndexLOD = this._nodeIndexLOD - 1;
            this._nodeSignalLODs[previousIndexLOD] = this._nodeSignalLODs[previousIndexLOD] || new core_Misc_deferred__WEBPACK_IMPORTED_MODULE_1__.Deferred();
            return this._nodeSignalLODs[this._nodeIndexLOD - 1].promise.then(async () => {
                return await this._loader.loadUriAsync(context, property, uri);
            });
        }
        else if (this._materialIndexLOD !== null) {
            this._loader.log(`deferred`);
            const previousIndexLOD = this._materialIndexLOD - 1;
            this._materialSignalLODs[previousIndexLOD] = this._materialSignalLODs[previousIndexLOD] || new core_Misc_deferred__WEBPACK_IMPORTED_MODULE_1__.Deferred();
            return this._materialSignalLODs[previousIndexLOD].promise.then(async () => {
                return await this._loader.loadUriAsync(context, property, uri);
            });
        }
        return null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadBufferAsync(context, buffer, byteOffset, byteLength) {
        if (this._loader.parent.useRangeRequests && !buffer.uri) {
            if (!this._loader.bin) {
                throw new Error(`${context}: Uri is missing or the binary glTF is missing its binary chunk`);
            }
            const loadAsync = async (bufferLODs, indexLOD) => {
                const start = byteOffset;
                const end = start + byteLength - 1;
                let bufferLOD = bufferLODs[indexLOD];
                if (bufferLOD) {
                    bufferLOD.start = Math.min(bufferLOD.start, start);
                    bufferLOD.end = Math.max(bufferLOD.end, end);
                }
                else {
                    bufferLOD = { start: start, end: end, loaded: new core_Misc_deferred__WEBPACK_IMPORTED_MODULE_1__.Deferred() };
                    bufferLODs[indexLOD] = bufferLOD;
                }
                return await bufferLOD.loaded.promise.then((data) => {
                    return new Uint8Array(data.buffer, data.byteOffset + byteOffset - bufferLOD.start, byteLength);
                });
            };
            this._loader.log(`deferred`);
            if (this._nodeIndexLOD !== null) {
                return loadAsync(this._nodeBufferLODs, this._nodeIndexLOD);
            }
            else if (this._materialIndexLOD !== null) {
                return loadAsync(this._materialBufferLODs, this._materialIndexLOD);
            }
            else {
                return loadAsync(this._bufferLODs, 0);
            }
        }
        return null;
    }
    _loadBufferLOD(bufferLODs, indexLOD) {
        const bufferLOD = bufferLODs[indexLOD];
        if (bufferLOD) {
            this._loader.log(`Loading buffer range [${bufferLOD.start}-${bufferLOD.end}]`);
            this._loader.bin.readAsync(bufferLOD.start, bufferLOD.end - bufferLOD.start + 1).then((data) => {
                bufferLOD.loaded.resolve(data);
            }, (error) => {
                bufferLOD.loaded.reject(error);
            });
        }
    }
    /**
     * @returns an array of LOD properties from lowest to highest.
     * @param context
     * @param property
     * @param array
     * @param ids
     */
    _getLODs(context, property, array, ids) {
        if (this.maxLODsToLoad <= 0) {
            throw new Error("maxLODsToLoad must be greater than zero");
        }
        const properties = [];
        for (let i = ids.length - 1; i >= 0; i--) {
            properties.push(_glTFLoader__WEBPACK_IMPORTED_MODULE_2__.ArrayItem.Get(`${context}/ids/${ids[i]}`, array, ids[i]));
            if (properties.length === this.maxLODsToLoad) {
                return properties;
            }
        }
        properties.push(property);
        return properties;
    }
    _disposeTransformNode(babylonTransformNode) {
        const babylonMaterials = [];
        const babylonMaterial = babylonTransformNode.material;
        if (babylonMaterial) {
            babylonMaterials.push(babylonMaterial);
        }
        for (const babylonMesh of babylonTransformNode.getChildMeshes()) {
            if (babylonMesh.material) {
                babylonMaterials.push(babylonMesh.material);
            }
        }
        babylonTransformNode.dispose();
        const babylonMaterialsToDispose = babylonMaterials.filter((babylonMaterial) => this._loader.babylonScene.meshes.every((mesh) => mesh.material != babylonMaterial));
        this._disposeMaterials(babylonMaterialsToDispose);
    }
    _disposeMaterials(babylonMaterials) {
        const babylonTextures = {};
        for (const babylonMaterial of babylonMaterials) {
            for (const babylonTexture of babylonMaterial.getActiveTextures()) {
                babylonTextures[babylonTexture.uniqueId] = babylonTexture;
            }
            babylonMaterial.dispose();
        }
        for (const uniqueId in babylonTextures) {
            for (const babylonMaterial of this._loader.babylonScene.materials) {
                if (babylonMaterial.hasTexture(babylonTextures[uniqueId])) {
                    delete babylonTextures[uniqueId];
                }
            }
        }
        for (const uniqueId in babylonTextures) {
            babylonTextures[uniqueId].dispose();
        }
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.registerGLTFExtension)(NAME, true, (loader) => new MSFT_lod(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfTVNGVF9sb2RfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFFQTtBQXdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFpREE7O0FBRUE7QUFDQTtBQW5EQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvTVNGVF9sb2QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZ2l0aHViL25vLXRoZW4gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tIFwiY29yZS9NaXNjL2RlZmVycmVkXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlLCBJTWF0ZXJpYWwsIElCdWZmZXIsIElTY2VuZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHksIElNU0ZUTE9EIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiTVNGVF9sb2RcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBNU0ZUX2xvZCBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiTVNGVF9sb2RcIl06IFBhcnRpYWw8e1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogTWF4aW11bSBudW1iZXIgb2YgTE9EcyB0byBsb2FkLCBzdGFydGluZyBmcm9tIHRoZSBsb3dlc3QgTE9ELlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbWF4TE9Ec1RvTG9hZDogbnVtYmVyO1xyXG4gICAgICAgIH0+O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUJ1ZmZlckluZm8ge1xyXG4gICAgc3RhcnQ6IG51bWJlcjtcclxuICAgIGVuZDogbnVtYmVyO1xyXG4gICAgbG9hZGVkOiBEZWZlcnJlZDxBcnJheUJ1ZmZlclZpZXc+O1xyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL01TRlRfbG9kL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIE1TRlRfbG9kIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxMDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIG51bWJlciBvZiBMT0RzIHRvIGxvYWQsIHN0YXJ0aW5nIGZyb20gdGhlIGxvd2VzdCBMT0QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXhMT0RzVG9Mb2FkID0gMTA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIGFsbCBub2RlIExPRHMgb2Ygb25lIGxldmVsIGFyZSBsb2FkZWQuXHJcbiAgICAgKiBUaGUgZXZlbnQgZGF0YSBpcyB0aGUgaW5kZXggb2YgdGhlIGxvYWRlZCBMT0Qgc3RhcnRpbmcgZnJvbSB6ZXJvLlxyXG4gICAgICogRGlzcG9zZSB0aGUgbG9hZGVyIHRvIGNhbmNlbCB0aGUgbG9hZGluZyBvZiB0aGUgbmV4dCBsZXZlbCBvZiBMT0RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Ob2RlTE9Ec0xvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxudW1iZXI+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIGFsbCBtYXRlcmlhbCBMT0RzIG9mIG9uZSBsZXZlbCBhcmUgbG9hZGVkLlxyXG4gICAgICogVGhlIGV2ZW50IGRhdGEgaXMgdGhlIGluZGV4IG9mIHRoZSBsb2FkZWQgTE9EIHN0YXJ0aW5nIGZyb20gemVyby5cclxuICAgICAqIERpc3Bvc2UgdGhlIGxvYWRlciB0byBjYW5jZWwgdGhlIGxvYWRpbmcgb2YgdGhlIG5leHQgbGV2ZWwgb2YgTE9Ecy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uTWF0ZXJpYWxMT0RzTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPG51bWJlcj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYnVmZmVyTE9EcyA9IG5ldyBBcnJheTxJQnVmZmVySW5mbz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9ub2RlSW5kZXhMT0Q6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbm9kZVNpZ25hbExPRHMgPSBuZXcgQXJyYXk8RGVmZXJyZWQ8dm9pZD4+KCk7XHJcbiAgICBwcml2YXRlIF9ub2RlUHJvbWlzZUxPRHMgPSBuZXcgQXJyYXk8QXJyYXk8UHJvbWlzZTxhbnk+Pj4oKTtcclxuICAgIHByaXZhdGUgX25vZGVCdWZmZXJMT0RzID0gbmV3IEFycmF5PElCdWZmZXJJbmZvPigpO1xyXG5cclxuICAgIHByaXZhdGUgX21hdGVyaWFsSW5kZXhMT0Q6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxTaWduYWxMT0RzID0gbmV3IEFycmF5PERlZmVycmVkPHZvaWQ+PigpO1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxQcm9taXNlTE9EcyA9IG5ldyBBcnJheTxBcnJheTxQcm9taXNlPGFueT4+PigpO1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxCdWZmZXJMT0RzID0gbmV3IEFycmF5PElCdWZmZXJJbmZvPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICAvLyBPcHRpb25zIHRha2VzIHByZWNlZGVuY2UuIFRoZSBtYXhMT0RzVG9Mb2FkIGV4dGVuc2lvbiBwcm9wZXJ0eSBpcyByZXRhaW5lZCBmb3IgYmFjayBjb21wYXQuXHJcbiAgICAgICAgLy8gRm9yIG5ldyBleHRlbnNpb25zLCB0aGV5IHNob3VsZCBvbmx5IHVzZSBvcHRpb25zLlxyXG4gICAgICAgIHRoaXMubWF4TE9Ec1RvTG9hZCA9IHRoaXMuX2xvYWRlci5wYXJlbnQuZXh0ZW5zaW9uT3B0aW9uc1tOQU1FXT8ubWF4TE9Ec1RvTG9hZCA/PyB0aGlzLm1heExPRHNUb0xvYWQ7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9ub2RlSW5kZXhMT0QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX25vZGVTaWduYWxMT0RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbm9kZVByb21pc2VMT0RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbm9kZUJ1ZmZlckxPRHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxJbmRleExPRCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ecy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX21hdGVyaWFsQnVmZmVyTE9Ecy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMT0RzTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ob2RlTE9Ec0xvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25SZWFkeSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgdGhpcy5fbm9kZVByb21pc2VMT0RzLmxlbmd0aDsgaW5kZXhMT0QrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gUHJvbWlzZS5hbGwodGhpcy5fbm9kZVByb21pc2VMT0RzW2luZGV4TE9EXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuZW5kUGVyZm9ybWFuY2VDb3VudGVyKGBOb2RlIExPRCAke2luZGV4TE9EfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYExvYWRlZCBub2RlIExPRCAke2luZGV4TE9EfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25Ob2RlTE9Ec0xvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGluZGV4TE9EKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IHRoaXMuX25vZGVQcm9taXNlTE9Ecy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnN0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGBOb2RlIExPRCAke2luZGV4TE9EICsgMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQnVmZmVyTE9EKHRoaXMuX25vZGVCdWZmZXJMT0RzLCBpbmRleExPRCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub2RlU2lnbmFsTE9Ec1tpbmRleExPRF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZVNpZ25hbExPRHNbaW5kZXhMT0RdLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9jb21wbGV0ZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ecy5sZW5ndGg7IGluZGV4TE9EKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IFByb21pc2UuYWxsKHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHNbaW5kZXhMT0RdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5lbmRQZXJmb3JtYW5jZUNvdW50ZXIoYE1hdGVyaWFsIExPRCAke2luZGV4TE9EfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYExvYWRlZCBtYXRlcmlhbCBMT0QgJHtpbmRleExPRH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMT0RzTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoaW5kZXhMT0QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gdGhpcy5fbWF0ZXJpYWxQcm9taXNlTE9Ecy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnN0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGBNYXRlcmlhbCBMT0QgJHtpbmRleExPRCArIDF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlckxPRCh0aGlzLl9tYXRlcmlhbEJ1ZmZlckxPRHMsIGluZGV4TE9EICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFsU2lnbmFsTE9Ec1tpbmRleExPRF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxTaWduYWxMT0RzW2luZGV4TE9EXS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fY29tcGxldGVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkU2NlbmVBc3luYyhjb250ZXh0LCBzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlckxPRCh0aGlzLl9idWZmZXJMT0RzLCAwKTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJTVNGVExPRCwgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdFByb21pc2U6IFByb21pc2U8VHJhbnNmb3JtTm9kZT47XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub2RlTE9EcyA9IHRoaXMuX2dldExPRHMoZXh0ZW5zaW9uQ29udGV4dCwgbm9kZSwgdGhpcy5fbG9hZGVyLmdsdGYubm9kZXMsIGV4dGVuc2lvbi5pZHMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nT3BlbihgJHtleHRlbnNpb25Db250ZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhMT0QgPSAwOyBpbmRleExPRCA8IG5vZGVMT0RzLmxlbmd0aDsgaW5kZXhMT0QrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxPRCA9IG5vZGVMT0RzW2luZGV4TE9EXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhMT0QgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlSW5kZXhMT0QgPSBpbmRleExPRDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlU2lnbmFsTE9Ec1tpbmRleExPRF0gPSB0aGlzLl9ub2RlU2lnbmFsTE9Ec1tpbmRleExPRF0gfHwgbmV3IERlZmVycmVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzaWduV3JhcCA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUuc2V0RW5hYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZUxPRC5pbmRleH1gLCBub2RlTE9ELCBhc3NpZ25XcmFwKS50aGVuKChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgbm90IHJlbHkgb24gX2JhYnlsb25UcmFuc2Zvcm1Ob2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzTm9kZUxPRCA9IG5vZGVMT0RzW2luZGV4TE9EIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c05vZGVMT0QuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwb3NlVHJhbnNmb3JtTm9kZShwcmV2aW91c05vZGVMT0QuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmV2aW91c05vZGVMT0QuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5zZXRFbmFibGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVQcm9taXNlTE9Ec1tpbmRleExPRF0gPSB0aGlzLl9ub2RlUHJvbWlzZUxPRHNbaW5kZXhMT0RdIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UHJvbWlzZSA9IHByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVJbmRleExPRCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZVByb21pc2VMT0RzW2luZGV4TE9EXS5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZpcnN0UHJvbWlzZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgX2xvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBtYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPixcclxuICAgICAgICBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcixcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPE1hdGVyaWFsPj4ge1xyXG4gICAgICAgIC8vIERvbid0IGxvYWQgbWF0ZXJpYWwgTE9EcyBpZiBhbHJlYWR5IGxvYWRpbmcgYSBub2RlIExPRC5cclxuICAgICAgICBpZiAodGhpcy5fbm9kZUluZGV4TE9EKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUTE9ELCBNYXRlcmlhbD4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3RQcm9taXNlOiBQcm9taXNlPE1hdGVyaWFsPjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTE9EcyA9IHRoaXMuX2dldExPRHMoZXh0ZW5zaW9uQ29udGV4dCwgbWF0ZXJpYWwsIHRoaXMuX2xvYWRlci5nbHRmLm1hdGVyaWFscywgZXh0ZW5zaW9uLmlkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dPcGVuKGAke2V4dGVuc2lvbkNvbnRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleExPRCA9IDA7IGluZGV4TE9EIDwgbWF0ZXJpYWxMT0RzLmxlbmd0aDsgaW5kZXhMT0QrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxMT0QgPSBtYXRlcmlhbExPRHNbaW5kZXhMT0RdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgPSBpbmRleExPRDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fbG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLl9sb2FkTWF0ZXJpYWxBc3luYyhgL21hdGVyaWFscy8ke21hdGVyaWFsTE9ELmluZGV4fWAsIG1hdGVyaWFsTE9ELCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCAoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChiYWJ5bG9uTWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4TE9EICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgbm90IHJlbHkgb24gX2RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRGF0YUxPRCA9IG1hdGVyaWFsTE9Ec1tpbmRleExPRCAtIDFdLl9kYXRhITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0RhdGFMT0RbYmFieWxvbkRyYXdNb2RlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3Bvc2VNYXRlcmlhbHMoW3ByZXZpb3VzRGF0YUxPRFtiYWJ5bG9uRHJhd01vZGVdLmJhYnlsb25NYXRlcmlhbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmV2aW91c0RhdGFMT0RbYmFieWxvbkRyYXdNb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRlcmlhbFByb21pc2VMT0RzW2luZGV4TE9EXSA9IHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHNbaW5kZXhMT0RdIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleExPRCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UHJvbWlzZSA9IHByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsUHJvbWlzZUxPRHNbaW5kZXhMT0RdLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZmlyc3RQcm9taXNlITtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBfbG9hZFVyaUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydHk6IElQcm9wZXJ0eSwgdXJpOiBzdHJpbmcpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICAvLyBEZWZlciB0aGUgbG9hZGluZyBvZiB1cmlzIGlmIGxvYWRpbmcgYSBub2RlIG9yIG1hdGVyaWFsIExPRC5cclxuICAgICAgICBpZiAodGhpcy5fbm9kZUluZGV4TE9EICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYGRlZmVycmVkYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSW5kZXhMT0QgPSB0aGlzLl9ub2RlSW5kZXhMT0QgLSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlU2lnbmFsTE9Ec1twcmV2aW91c0luZGV4TE9EXSA9IHRoaXMuX25vZGVTaWduYWxMT0RzW3ByZXZpb3VzSW5kZXhMT0RdIHx8IG5ldyBEZWZlcnJlZDx2b2lkPigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZVNpZ25hbExPRHNbdGhpcy5fbm9kZUluZGV4TE9EIC0gMV0ucHJvbWlzZS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2FkZXIubG9hZFVyaUFzeW5jKGNvbnRleHQsIHByb3BlcnR5LCB1cmkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvZyhgZGVmZXJyZWRgKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJbmRleExPRCA9IHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgLSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRlcmlhbFNpZ25hbExPRHNbcHJldmlvdXNJbmRleExPRF0gPSB0aGlzLl9tYXRlcmlhbFNpZ25hbExPRHNbcHJldmlvdXNJbmRleExPRF0gfHwgbmV3IERlZmVycmVkPHZvaWQ+KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXRlcmlhbFNpZ25hbExPRHNbcHJldmlvdXNJbmRleExPRF0ucHJvbWlzZS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2FkZXIubG9hZFVyaUFzeW5jKGNvbnRleHQsIHByb3BlcnR5LCB1cmkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRCdWZmZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlcjogSUJ1ZmZlciwgYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyLnBhcmVudC51c2VSYW5nZVJlcXVlc3RzICYmICFidWZmZXIudXJpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbG9hZGVyLmJpbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBVcmkgaXMgbWlzc2luZyBvciB0aGUgYmluYXJ5IGdsVEYgaXMgbWlzc2luZyBpdHMgYmluYXJ5IGNodW5rYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRBc3luYyA9IGFzeW5jIChidWZmZXJMT0RzOiBBcnJheTxJQnVmZmVySW5mbz4sIGluZGV4TE9EOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gYnl0ZU9mZnNldDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgYnl0ZUxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyTE9EID0gYnVmZmVyTE9Ec1tpbmRleExPRF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyTE9EKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9ELnN0YXJ0ID0gTWF0aC5taW4oYnVmZmVyTE9ELnN0YXJ0LCBzdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9ELmVuZCA9IE1hdGgubWF4KGJ1ZmZlckxPRC5lbmQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckxPRCA9IHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCwgbG9hZGVkOiBuZXcgRGVmZXJyZWQoKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckxPRHNbaW5kZXhMT0RdID0gYnVmZmVyTE9EO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBidWZmZXJMT0QubG9hZGVkLnByb21pc2UudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0ICsgYnl0ZU9mZnNldCAtIGJ1ZmZlckxPRC5zdGFydCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2coYGRlZmVycmVkYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbm9kZUluZGV4TE9EICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEFzeW5jKHRoaXMuX25vZGVCdWZmZXJMT0RzLCB0aGlzLl9ub2RlSW5kZXhMT0QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX21hdGVyaWFsSW5kZXhMT0QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXN5bmModGhpcy5fbWF0ZXJpYWxCdWZmZXJMT0RzLCB0aGlzLl9tYXRlcmlhbEluZGV4TE9EKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkQXN5bmModGhpcy5fYnVmZmVyTE9EcywgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCdWZmZXJMT0QoYnVmZmVyTE9EczogQXJyYXk8SUJ1ZmZlckluZm8+LCBpbmRleExPRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyTE9EID0gYnVmZmVyTE9Ec1tpbmRleExPRF07XHJcbiAgICAgICAgaWYgKGJ1ZmZlckxPRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9nKGBMb2FkaW5nIGJ1ZmZlciByYW5nZSBbJHtidWZmZXJMT0Quc3RhcnR9LSR7YnVmZmVyTE9ELmVuZH1dYCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iaW4hLnJlYWRBc3luYyhidWZmZXJMT0Quc3RhcnQsIGJ1ZmZlckxPRC5lbmQgLSBidWZmZXJMT0Quc3RhcnQgKyAxKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJMT0QubG9hZGVkLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyTE9ELmxvYWRlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIExPRCBwcm9wZXJ0aWVzIGZyb20gbG93ZXN0IHRvIGhpZ2hlc3QuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dFxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXJyYXlcclxuICAgICAqIEBwYXJhbSBpZHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0TE9EczxUPihjb250ZXh0OiBzdHJpbmcsIHByb3BlcnR5OiBULCBhcnJheTogQXJyYXlMaWtlPFQ+IHwgdW5kZWZpbmVkLCBpZHM6IG51bWJlcltdKTogVFtdIHtcclxuICAgICAgICBpZiAodGhpcy5tYXhMT0RzVG9Mb2FkIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWF4TE9Ec1RvTG9hZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllczogVFtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBpZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vaWRzLyR7aWRzW2ldfWAsIGFycmF5LCBpZHNbaV0pKTtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID09PSB0aGlzLm1heExPRHNUb0xvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VUcmFuc2Zvcm1Ob2RlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsczogTWF0ZXJpYWxbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBNZXNoKS5tYXRlcmlhbDtcclxuICAgICAgICBpZiAoYmFieWxvbk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbHMucHVzaChiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NZXNoIG9mIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLmdldENoaWxkTWVzaGVzKCkpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWxzLnB1c2goYmFieWxvbk1lc2gubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbHNUb0Rpc3Bvc2UgPSBiYWJ5bG9uTWF0ZXJpYWxzLmZpbHRlcigoYmFieWxvbk1hdGVyaWFsKSA9PiB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLm1lc2hlcy5ldmVyeSgobWVzaCkgPT4gbWVzaC5tYXRlcmlhbCAhPSBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICB0aGlzLl9kaXNwb3NlTWF0ZXJpYWxzKGJhYnlsb25NYXRlcmlhbHNUb0Rpc3Bvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VNYXRlcmlhbHMoYmFieWxvbk1hdGVyaWFsczogTWF0ZXJpYWxbXSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlczogeyBbdW5pcXVlSWQ6IG51bWJlcl06IEJhc2VUZXh0dXJlIH0gPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgb2YgYmFieWxvbk1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25UZXh0dXJlIG9mIGJhYnlsb25NYXRlcmlhbC5nZXRBY3RpdmVUZXh0dXJlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZXNbYmFieWxvblRleHR1cmUudW5pcXVlSWRdID0gYmFieWxvblRleHR1cmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUlkIGluIGJhYnlsb25UZXh0dXJlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NYXRlcmlhbCBvZiB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5oYXNUZXh0dXJlKGJhYnlsb25UZXh0dXJlc1t1bmlxdWVJZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGJhYnlsb25UZXh0dXJlc1t1bmlxdWVJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdW5pcXVlSWQgaW4gYmFieWxvblRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlc1t1bmlxdWVJZF0uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9sb2QobG9hZGVyKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==