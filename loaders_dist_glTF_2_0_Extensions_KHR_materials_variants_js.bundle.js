"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_variants_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_variants.js":
/*!*********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_variants.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_variants: () => (/* binding */ KHR_materials_variants)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const NAME = "KHR_materials_variants";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_variants/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_variants {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME) && !this._loader.parent.skipMaterials;
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /**
     * Gets the list of available variant names for this asset.
     * @param rootNode The glTF root node
     * @returns the list of all the variant names for this model
     */
    static GetAvailableVariants(rootNode) {
        const extensionMetadata = this._GetExtensionMetadata(rootNode);
        if (!extensionMetadata) {
            return [];
        }
        return Object.keys(extensionMetadata.variants);
    }
    /**
     * Gets the list of available variant names for this asset.
     * @param rootNode The glTF root node
     * @returns the list of all the variant names for this model
     */
    getAvailableVariants(rootNode) {
        return KHR_materials_variants.GetAvailableVariants(rootNode);
    }
    /**
     * Select a variant given a variant name or a list of variant names.
     * @param rootNode The glTF root node
     * @param variantName The variant name(s) to select.
     */
    static SelectVariant(rootNode, variantName) {
        const extensionMetadata = this._GetExtensionMetadata(rootNode);
        if (!extensionMetadata) {
            throw new Error(`Cannot select variant on a glTF mesh that does not have the ${NAME} extension`);
        }
        const select = (variantName) => {
            const entries = extensionMetadata.variants[variantName];
            if (entries) {
                for (const entry of entries) {
                    entry.mesh.material = entry.material;
                }
            }
        };
        if (variantName instanceof Array) {
            for (const name of variantName) {
                select(name);
            }
        }
        else {
            select(variantName);
        }
        extensionMetadata.lastSelected = variantName;
    }
    /**
     * Select a variant given a variant name or a list of variant names.
     * @param rootNode The glTF root node
     * @param variantName The variant name(s) to select.
     */
    selectVariant(rootNode, variantName) {
        KHR_materials_variants.SelectVariant(rootNode, variantName);
    }
    /**
     * Reset back to the original before selecting a variant.
     * @param rootNode The glTF root node
     */
    static Reset(rootNode) {
        const extensionMetadata = this._GetExtensionMetadata(rootNode);
        if (!extensionMetadata) {
            throw new Error(`Cannot reset on a glTF mesh that does not have the ${NAME} extension`);
        }
        for (const entry of extensionMetadata.original) {
            entry.mesh.material = entry.material;
        }
        extensionMetadata.lastSelected = null;
    }
    /**
     * Reset back to the original before selecting a variant.
     * @param rootNode The glTF root node
     */
    reset(rootNode) {
        KHR_materials_variants.Reset(rootNode);
    }
    /**
     * Gets the last selected variant name(s) or null if original.
     * @param rootNode The glTF root node
     * @returns The selected variant name(s).
     */
    static GetLastSelectedVariant(rootNode) {
        const extensionMetadata = this._GetExtensionMetadata(rootNode);
        if (!extensionMetadata) {
            throw new Error(`Cannot get the last selected variant on a glTF mesh that does not have the ${NAME} extension`);
        }
        return extensionMetadata.lastSelected;
    }
    /**
     * Gets the last selected variant name(s) or null if original.
     * @param rootNode The glTF root node
     * @returns The selected variant name(s).
     */
    getLastSelectedVariant(rootNode) {
        return KHR_materials_variants.GetLastSelectedVariant(rootNode);
    }
    static _GetExtensionMetadata(rootNode) {
        return rootNode?._internalMetadata?.gltf?.[NAME] || null;
    }
    /** @internal */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._variants = extension.variants;
        }
    }
    /** @internal */
    onReady() {
        const rootNode = this._loader.rootBabylonMesh;
        if (rootNode) {
            const options = this._loader.parent.extensionOptions[NAME];
            if (options?.defaultVariant) {
                KHR_materials_variants.SelectVariant(rootNode, options.defaultVariant);
            }
            options?.onLoaded?.({
                get variants() {
                    return KHR_materials_variants.GetAvailableVariants(rootNode);
                },
                get selectedVariant() {
                    const lastSelectedVariant = KHR_materials_variants.GetLastSelectedVariant(rootNode);
                    if (!lastSelectedVariant) {
                        return KHR_materials_variants.GetAvailableVariants(rootNode)[0];
                    }
                    if (Array.isArray(lastSelectedVariant)) {
                        return lastSelectedVariant[0];
                    }
                    return lastSelectedVariant;
                },
                set selectedVariant(variantName) {
                    KHR_materials_variants.SelectVariant(rootNode, variantName);
                },
            });
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    _loadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, primitive, this.name, async (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader._loadMeshPrimitiveAsync(context, name, node, mesh, primitive, (babylonMesh) => {
                assign(babylonMesh);
                if (babylonMesh instanceof core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
                    const babylonDrawMode = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader._GetDrawMode(context, primitive.mode);
                    const root = this._loader.rootBabylonMesh;
                    const metadata = root ? (root._internalMetadata = root._internalMetadata || {}) : {};
                    const gltf = (metadata.gltf = metadata.gltf || {});
                    const extensionMetadata = (gltf[NAME] = gltf[NAME] || { lastSelected: null, original: [], variants: {} });
                    // Store the original material.
                    extensionMetadata.original.push({ mesh: babylonMesh, material: babylonMesh.material });
                    // For each mapping, look at the variants and make a new entry for them.
                    for (let mappingIndex = 0; mappingIndex < extension.mappings.length; ++mappingIndex) {
                        const mapping = extension.mappings[mappingIndex];
                        const material = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get(`${extensionContext}/mappings/${mappingIndex}/material`, this._loader.gltf.materials, mapping.material);
                        promises.push(this._loader._loadMaterialAsync(`#/materials/${mapping.material}`, material, babylonMesh, babylonDrawMode, (babylonMaterial) => {
                            for (let mappingVariantIndex = 0; mappingVariantIndex < mapping.variants.length; ++mappingVariantIndex) {
                                const variantIndex = mapping.variants[mappingVariantIndex];
                                const variant = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get(`/extensions/${NAME}/variants/${variantIndex}`, this._variants, variantIndex);
                                extensionMetadata.variants[variant.name] = extensionMetadata.variants[variant.name] || [];
                                extensionMetadata.variants[variant.name].push({
                                    mesh: babylonMesh,
                                    material: babylonMaterial,
                                });
                                // Replace the target when original mesh is cloned
                                babylonMesh.onClonedObservable.add((newOne) => {
                                    const newMesh = newOne;
                                    let metadata = null;
                                    let newRoot = newMesh;
                                    // Find root to get medata
                                    do {
                                        newRoot = newRoot.parent;
                                        if (!newRoot) {
                                            return;
                                        }
                                        metadata = KHR_materials_variants._GetExtensionMetadata(newRoot);
                                    } while (metadata === null);
                                    // Need to clone the metadata on the root (first time only)
                                    if (root && metadata === KHR_materials_variants._GetExtensionMetadata(root)) {
                                        // Copy main metadata
                                        newRoot._internalMetadata = {};
                                        for (const key in root._internalMetadata) {
                                            newRoot._internalMetadata[key] = root._internalMetadata[key];
                                        }
                                        // Copy the gltf metadata
                                        newRoot._internalMetadata.gltf = [];
                                        for (const key in root._internalMetadata.gltf) {
                                            newRoot._internalMetadata.gltf[key] = root._internalMetadata.gltf[key];
                                        }
                                        // Duplicate the extension specific metadata
                                        newRoot._internalMetadata.gltf[NAME] = { lastSelected: null, original: [], variants: {} };
                                        for (const original of metadata.original) {
                                            newRoot._internalMetadata.gltf[NAME].original.push({
                                                mesh: original.mesh,
                                                material: original.material,
                                            });
                                        }
                                        for (const key in metadata.variants) {
                                            if (Object.prototype.hasOwnProperty.call(metadata.variants, key)) {
                                                newRoot._internalMetadata.gltf[NAME].variants[key] = [];
                                                for (const variantEntry of metadata.variants[key]) {
                                                    newRoot._internalMetadata.gltf[NAME].variants[key].push({
                                                        mesh: variantEntry.mesh,
                                                        material: variantEntry.material,
                                                    });
                                                }
                                            }
                                        }
                                        metadata = newRoot._internalMetadata.gltf[NAME];
                                    }
                                    // Relocate
                                    for (const target of metadata.original) {
                                        if (target.mesh === babylonMesh) {
                                            target.mesh = newMesh;
                                        }
                                    }
                                    for (const target of metadata.variants[variant.name]) {
                                        if (target.mesh === babylonMesh) {
                                            target.mesh = newMesh;
                                        }
                                    }
                                });
                            }
                        }));
                    }
                }
            }));
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(([babylonMesh]) => {
                return babylonMesh;
            });
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_variants(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc192YXJpYW50c19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFNQTtBQUdBO0FBbURBOztBQUVBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdmFyaWFudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSwgSU1lc2hQcmltaXRpdmUsIElNZXNoIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsVmFyaWFudHNfTWFwcGluZywgSUtIUk1hdGVyaWFsVmFyaWFudHNfVmFyaWFudCwgSUtIUk1hdGVyaWFsVmFyaWFudHNfVmFyaWFudHMgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWxWYXJpYW50c0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdmFyaWFudHNcIjtcclxuXHJcbmV4cG9ydCB7IE1hdGVyaWFsVmFyaWFudHNDb250cm9sbGVyIH07XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gRGVmaW5lIG9wdGlvbnMgcmVsYXRlZCB0eXBlcyBoZXJlIHNvIHRoZXkgY2FuIGJlIHJlZmVyZW5jZWQgaW4gdGhlIG9wdGlvbnMsXHJcbiAgICAvLyBidXQgZXhwb3J0IHRoZSB0eXBlcyBhdCB0aGUgbW9kdWxlIGxldmVsLiBUaGlzIGVuc3VyZXMgdGhlIHR5cGVzIGFyZSBpbiB0aGVcclxuICAgIC8vIGNvcnJlY3QgbmFtZXNwYWNlIGZvciBVTUQuXHJcbiAgICB0eXBlIE1hdGVyaWFsVmFyaWFudHNDb250cm9sbGVyID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBsaXN0IG9mIGF2YWlsYWJsZSB2YXJpYW50IG5hbWVzIGZvciB0aGlzIGFzc2V0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWRvbmx5IHZhcmlhbnRzOiByZWFkb25seSBzdHJpbmdbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIHRoZSBzZWxlY3RlZCB2YXJpYW50LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNlbGVjdGVkVmFyaWFudDogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzXCJdOiBQYXJ0aWFsPHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNwZWNpZmllcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFudCB0aGF0IHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGVmYXVsdFZhcmlhbnQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWZpbmVzIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBpZiBtYXRlcmlhbCB2YXJpYW50cyBhcmUgbG9hZGVkLlxyXG4gICAgICAgICAgICAgKiBAZXhwZXJpbWVudGFsXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkxvYWRlZDogKGNvbnRyb2xsZXI6IE1hdGVyaWFsVmFyaWFudHNDb250cm9sbGVyKSA9PiB2b2lkO1xyXG4gICAgICAgIH0+O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVZhcmlhbnRzTWFwIHtcclxuICAgIFtrZXk6IHN0cmluZ106IEFycmF5PHsgbWVzaDogQWJzdHJhY3RNZXNoOyBtYXRlcmlhbDogTnVsbGFibGU8TWF0ZXJpYWw+IH0+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUV4dGVuc2lvbk1ldGFkYXRhIHtcclxuICAgIGxhc3RTZWxlY3RlZDogTnVsbGFibGU8c3RyaW5nIHwgQXJyYXk8c3RyaW5nPj47XHJcbiAgICBvcmlnaW5hbDogQXJyYXk8eyBtZXNoOiBBYnN0cmFjdE1lc2g7IG1hdGVyaWFsOiBOdWxsYWJsZTxNYXRlcmlhbD4gfT47XHJcbiAgICB2YXJpYW50czogSVZhcmlhbnRzTWFwO1xyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdmFyaWFudHMgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3ZhcmlhbnRzPzogQXJyYXk8SUtIUk1hdGVyaWFsVmFyaWFudHNfVmFyaWFudD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSkgJiYgIXRoaXMuX2xvYWRlci5wYXJlbnQuc2tpcE1hdGVyaWFscztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdmFyaWFudCBuYW1lcyBmb3IgdGhpcyBhc3NldC5cclxuICAgICAqIEBwYXJhbSByb290Tm9kZSBUaGUgZ2xURiByb290IG5vZGVcclxuICAgICAqIEByZXR1cm5zIHRoZSBsaXN0IG9mIGFsbCB0aGUgdmFyaWFudCBuYW1lcyBmb3IgdGhpcyBtb2RlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3ROb2RlOiBUcmFuc2Zvcm1Ob2RlKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbk1ldGFkYXRhID0gdGhpcy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdE5vZGUpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGV4dGVuc2lvbk1ldGFkYXRhLnZhcmlhbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIHZhcmlhbnQgbmFtZXMgZm9yIHRoaXMgYXNzZXQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE5vZGUgVGhlIGdsVEYgcm9vdCBub2RlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgdGhlIHZhcmlhbnQgbmFtZXMgZm9yIHRoaXMgbW9kZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3ROb2RlOiBUcmFuc2Zvcm1Ob2RlKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLkdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3ROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhIHZhcmlhbnQgZ2l2ZW4gYSB2YXJpYW50IG5hbWUgb3IgYSBsaXN0IG9mIHZhcmlhbnQgbmFtZXMuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE5vZGUgVGhlIGdsVEYgcm9vdCBub2RlXHJcbiAgICAgKiBAcGFyYW0gdmFyaWFudE5hbWUgVGhlIHZhcmlhbnQgbmFtZShzKSB0byBzZWxlY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2VsZWN0VmFyaWFudChyb290Tm9kZTogVHJhbnNmb3JtTm9kZSwgdmFyaWFudE5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWV0YWRhdGEgPSB0aGlzLl9HZXRFeHRlbnNpb25NZXRhZGF0YShyb290Tm9kZSk7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25NZXRhZGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzZWxlY3QgdmFyaWFudCBvbiBhIGdsVEYgbWVzaCB0aGF0IGRvZXMgbm90IGhhdmUgdGhlICR7TkFNRX0gZXh0ZW5zaW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3QgPSAodmFyaWFudE5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gZXh0ZW5zaW9uTWV0YWRhdGEudmFyaWFudHNbdmFyaWFudE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubWVzaC5tYXRlcmlhbCA9IGVudHJ5Lm1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHZhcmlhbnROYW1lIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHZhcmlhbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxlY3QodmFyaWFudE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXh0ZW5zaW9uTWV0YWRhdGEubGFzdFNlbGVjdGVkID0gdmFyaWFudE5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYSB2YXJpYW50IGdpdmVuIGEgdmFyaWFudCBuYW1lIG9yIGEgbGlzdCBvZiB2YXJpYW50IG5hbWVzLlxyXG4gICAgICogQHBhcmFtIHJvb3ROb2RlIFRoZSBnbFRGIHJvb3Qgbm9kZVxyXG4gICAgICogQHBhcmFtIHZhcmlhbnROYW1lIFRoZSB2YXJpYW50IG5hbWUocykgdG8gc2VsZWN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VsZWN0VmFyaWFudChyb290Tm9kZTogVHJhbnNmb3JtTm9kZSwgdmFyaWFudE5hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgS0hSX21hdGVyaWFsc192YXJpYW50cy5TZWxlY3RWYXJpYW50KHJvb3ROb2RlLCB2YXJpYW50TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCBiYWNrIHRvIHRoZSBvcmlnaW5hbCBiZWZvcmUgc2VsZWN0aW5nIGEgdmFyaWFudC5cclxuICAgICAqIEBwYXJhbSByb290Tm9kZSBUaGUgZ2xURiByb290IG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZXNldChyb290Tm9kZTogVHJhbnNmb3JtTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbk1ldGFkYXRhID0gdGhpcy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdE5vZGUpO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVzZXQgb24gYSBnbFRGIG1lc2ggdGhhdCBkb2VzIG5vdCBoYXZlIHRoZSAke05BTUV9IGV4dGVuc2lvbmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleHRlbnNpb25NZXRhZGF0YS5vcmlnaW5hbCkge1xyXG4gICAgICAgICAgICBlbnRyeS5tZXNoLm1hdGVyaWFsID0gZW50cnkubWF0ZXJpYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleHRlbnNpb25NZXRhZGF0YS5sYXN0U2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgYmFjayB0byB0aGUgb3JpZ2luYWwgYmVmb3JlIHNlbGVjdGluZyBhIHZhcmlhbnQuXHJcbiAgICAgKiBAcGFyYW0gcm9vdE5vZGUgVGhlIGdsVEYgcm9vdCBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXNldChyb290Tm9kZTogVHJhbnNmb3JtTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuUmVzZXQocm9vdE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGFzdCBzZWxlY3RlZCB2YXJpYW50IG5hbWUocykgb3IgbnVsbCBpZiBvcmlnaW5hbC5cclxuICAgICAqIEBwYXJhbSByb290Tm9kZSBUaGUgZ2xURiByb290IG5vZGVcclxuICAgICAqIEByZXR1cm5zIFRoZSBzZWxlY3RlZCB2YXJpYW50IG5hbWUocykuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TGFzdFNlbGVjdGVkVmFyaWFudChyb290Tm9kZTogVHJhbnNmb3JtTm9kZSk6IE51bGxhYmxlPHN0cmluZyB8IHN0cmluZ1tdPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWV0YWRhdGEgPSB0aGlzLl9HZXRFeHRlbnNpb25NZXRhZGF0YShyb290Tm9kZSk7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25NZXRhZGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBnZXQgdGhlIGxhc3Qgc2VsZWN0ZWQgdmFyaWFudCBvbiBhIGdsVEYgbWVzaCB0aGF0IGRvZXMgbm90IGhhdmUgdGhlICR7TkFNRX0gZXh0ZW5zaW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uTWV0YWRhdGEubGFzdFNlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGFzdCBzZWxlY3RlZCB2YXJpYW50IG5hbWUocykgb3IgbnVsbCBpZiBvcmlnaW5hbC5cclxuICAgICAqIEBwYXJhbSByb290Tm9kZSBUaGUgZ2xURiByb290IG5vZGVcclxuICAgICAqIEByZXR1cm5zIFRoZSBzZWxlY3RlZCB2YXJpYW50IG5hbWUocykuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMYXN0U2VsZWN0ZWRWYXJpYW50KHJvb3ROb2RlOiBUcmFuc2Zvcm1Ob2RlKTogTnVsbGFibGU8c3RyaW5nIHwgc3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm4gS0hSX21hdGVyaWFsc192YXJpYW50cy5HZXRMYXN0U2VsZWN0ZWRWYXJpYW50KHJvb3ROb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdE5vZGU6IE51bGxhYmxlPFRyYW5zZm9ybU5vZGU+KTogTnVsbGFibGU8SUV4dGVuc2lvbk1ldGFkYXRhPiB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlPy5faW50ZXJuYWxNZXRhZGF0YT8uZ2x0Zj8uW05BTUVdIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gdGhpcy5fbG9hZGVyLmdsdGYuZXh0ZW5zaW9ucztcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBleHRlbnNpb25zW3RoaXMubmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1t0aGlzLm5hbWVdIGFzIElLSFJNYXRlcmlhbFZhcmlhbnRzX1ZhcmlhbnRzO1xyXG4gICAgICAgICAgICB0aGlzLl92YXJpYW50cyA9IGV4dGVuc2lvbi52YXJpYW50cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uUmVhZHkoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSB0aGlzLl9sb2FkZXIucm9vdEJhYnlsb25NZXNoO1xyXG4gICAgICAgIGlmIChyb290Tm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fbG9hZGVyLnBhcmVudC5leHRlbnNpb25PcHRpb25zW05BTUVdO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucz8uZGVmYXVsdFZhcmlhbnQpIHtcclxuICAgICAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuU2VsZWN0VmFyaWFudChyb290Tm9kZSwgb3B0aW9ucy5kZWZhdWx0VmFyaWFudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnM/Lm9uTG9hZGVkPy4oe1xyXG4gICAgICAgICAgICAgICAgZ2V0IHZhcmlhbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLkdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXQgc2VsZWN0ZWRWYXJpYW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFNlbGVjdGVkVmFyaWFudCA9IEtIUl9tYXRlcmlhbHNfdmFyaWFudHMuR2V0TGFzdFNlbGVjdGVkVmFyaWFudChyb290Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0U2VsZWN0ZWRWYXJpYW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLkdldEF2YWlsYWJsZVZhcmlhbnRzKHJvb3ROb2RlKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdFNlbGVjdGVkVmFyaWFudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RTZWxlY3RlZFZhcmlhbnRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0U2VsZWN0ZWRWYXJpYW50O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldCBzZWxlY3RlZFZhcmlhbnQodmFyaWFudE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLlNlbGVjdFZhcmlhbnQocm9vdE5vZGUsIHZhcmlhbnROYW1lKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBfbG9hZE1lc2hQcmltaXRpdmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IElOb2RlLFxyXG4gICAgICAgIG1lc2g6IElNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxBYnN0cmFjdE1lc2g+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbFZhcmlhbnRzX01hcHBpbmcsIEFic3RyYWN0TWVzaD4oY29udGV4dCwgcHJpbWl0aXZlLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGNvbnRleHQsIG5hbWUsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uRHJhd01vZGUgPSBHTFRGTG9hZGVyLl9HZXREcmF3TW9kZShjb250ZXh0LCBwcmltaXRpdmUubW9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5fbG9hZGVyLnJvb3RCYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSByb290ID8gKHJvb3QuX2ludGVybmFsTWV0YWRhdGEgPSByb290Ll9pbnRlcm5hbE1ldGFkYXRhIHx8IHt9KSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnbHRmID0gKG1ldGFkYXRhLmdsdGYgPSBtZXRhZGF0YS5nbHRmIHx8IHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWV0YWRhdGE6IElFeHRlbnNpb25NZXRhZGF0YSA9IChnbHRmW05BTUVdID0gZ2x0ZltOQU1FXSB8fCB7IGxhc3RTZWxlY3RlZDogbnVsbCwgb3JpZ2luYWw6IFtdLCB2YXJpYW50czoge30gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgbWF0ZXJpYWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbk1ldGFkYXRhLm9yaWdpbmFsLnB1c2goeyBtZXNoOiBiYWJ5bG9uTWVzaCwgbWF0ZXJpYWw6IGJhYnlsb25NZXNoLm1hdGVyaWFsIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggbWFwcGluZywgbG9vayBhdCB0aGUgdmFyaWFudHMgYW5kIG1ha2UgYSBuZXcgZW50cnkgZm9yIHRoZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1hcHBpbmdJbmRleCA9IDA7IG1hcHBpbmdJbmRleCA8IGV4dGVuc2lvbi5tYXBwaW5ncy5sZW5ndGg7ICsrbWFwcGluZ0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXBwaW5nID0gZXh0ZW5zaW9uLm1hcHBpbmdzW21hcHBpbmdJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vbWFwcGluZ3MvJHttYXBwaW5nSW5kZXh9L21hdGVyaWFsYCwgdGhpcy5fbG9hZGVyLmdsdGYubWF0ZXJpYWxzLCBtYXBwaW5nLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9sb2FkTWF0ZXJpYWxBc3luYyhgIy9tYXRlcmlhbHMvJHttYXBwaW5nLm1hdGVyaWFsfWAsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCAoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1hcHBpbmdWYXJpYW50SW5kZXggPSAwOyBtYXBwaW5nVmFyaWFudEluZGV4IDwgbWFwcGluZy52YXJpYW50cy5sZW5ndGg7ICsrbWFwcGluZ1ZhcmlhbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEluZGV4ID0gbWFwcGluZy52YXJpYW50c1ttYXBwaW5nVmFyaWFudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnQgPSBBcnJheUl0ZW0uR2V0KGAvZXh0ZW5zaW9ucy8ke05BTUV9L3ZhcmlhbnRzLyR7dmFyaWFudEluZGV4fWAsIHRoaXMuX3ZhcmlhbnRzLCB2YXJpYW50SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uTWV0YWRhdGEudmFyaWFudHNbdmFyaWFudC5uYW1lXSA9IGV4dGVuc2lvbk1ldGFkYXRhLnZhcmlhbnRzW3ZhcmlhbnQubmFtZV0gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25NZXRhZGF0YS52YXJpYW50c1t2YXJpYW50Lm5hbWVdLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2g6IGJhYnlsb25NZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBiYWJ5bG9uTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSB0YXJnZXQgd2hlbiBvcmlnaW5hbCBtZXNoIGlzIGNsb25lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gub25DbG9uZWRPYnNlcnZhYmxlLmFkZCgobmV3T25lOiBOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TWVzaCA9IG5ld09uZSBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXRhZGF0YTogTnVsbGFibGU8SUV4dGVuc2lvbk1ldGFkYXRhPiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Jvb3Q6IE51bGxhYmxlPE5vZGU+ID0gbmV3TWVzaDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCByb290IHRvIGdldCBtZWRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QgPSBuZXdSb290LnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEgPSBLSFJfbWF0ZXJpYWxzX3ZhcmlhbnRzLl9HZXRFeHRlbnNpb25NZXRhZGF0YShuZXdSb290IGFzIE1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKG1ldGFkYXRhID09PSBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZCB0byBjbG9uZSB0aGUgbWV0YWRhdGEgb24gdGhlIHJvb3QgKGZpcnN0IHRpbWUgb25seSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm9vdCAmJiBtZXRhZGF0YSA9PT0gS0hSX21hdGVyaWFsc192YXJpYW50cy5fR2V0RXh0ZW5zaW9uTWV0YWRhdGEocm9vdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29weSBtYWluIG1ldGFkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcm9vdC5faW50ZXJuYWxNZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9vdC5faW50ZXJuYWxNZXRhZGF0YVtrZXldID0gcm9vdC5faW50ZXJuYWxNZXRhZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBnbHRmIG1ldGFkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltrZXldID0gcm9vdC5faW50ZXJuYWxNZXRhZGF0YS5nbHRmW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSB0aGUgZXh0ZW5zaW9uIHNwZWNpZmljIG1ldGFkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltOQU1FXSA9IHsgbGFzdFNlbGVjdGVkOiBudWxsLCBvcmlnaW5hbDogW10sIHZhcmlhbnRzOiB7fSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9yaWdpbmFsIG9mIG1ldGFkYXRhLm9yaWdpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZbTkFNRV0ub3JpZ2luYWwucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaDogb3JpZ2luYWwubWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogb3JpZ2luYWwubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBtZXRhZGF0YS52YXJpYW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXRhZGF0YS52YXJpYW50cywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltOQU1FXS52YXJpYW50c1trZXldID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YXJpYW50RW50cnkgb2YgbWV0YWRhdGEudmFyaWFudHNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdSb290Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGZbTkFNRV0udmFyaWFudHNba2V5XS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2g6IHZhcmlhbnRFbnRyeS5tZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IHZhcmlhbnRFbnRyeS5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IG5ld1Jvb3QuX2ludGVybmFsTWV0YWRhdGEuZ2x0ZltOQU1FXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbG9jYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgbWV0YWRhdGEhLm9yaWdpbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubWVzaCA9PT0gYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5tZXNoID0gbmV3TWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBtZXRhZGF0YSEudmFyaWFudHNbdmFyaWFudC5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lm1lc2ggPT09IGJhYnlsb25NZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQubWVzaCA9IG5ld01lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoW2JhYnlsb25NZXNoXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc192YXJpYW50cyhsb2FkZXIpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9