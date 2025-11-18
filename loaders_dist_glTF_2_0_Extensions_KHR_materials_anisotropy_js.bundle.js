"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_anisotropy_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_anisotropy.js":
/*!***********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_anisotropy.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_anisotropy: () => (/* binding */ KHR_materials_anisotropy)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "KHR_materials_anisotropy";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_anisotropy)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_anisotropy {
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
        this.order = 195;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
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
            promises.push(this._loadAnisotropyPropertiesAsync(extensionContext, extension, babylonMaterial));
            await Promise.all(promises);
        });
    }
    async _loadAnisotropyPropertiesAsync(context, properties, babylonMaterial) {
        const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
        const promises = new Array();
        // Set non-texture properties immediately
        const anisotropyWeight = properties.anisotropyStrength ?? 0;
        const anisotropyAngle = properties.anisotropyRotation ?? 0;
        adapter.specularRoughnessAnisotropy = anisotropyWeight;
        adapter.geometryTangentAngle = anisotropyAngle;
        // Check if this is glTF-style anisotropy
        const extensions = properties.extensions ?? {};
        if (!extensions.EXT_materials_anisotropy_openpbr || !extensions.EXT_materials_anisotropy_openpbr.openPbrAnisotropyEnabled) {
            adapter.configureGltfStyleAnisotropy(true);
        }
        // Load texture if present
        if (properties.anisotropyTexture) {
            properties.anisotropyTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync(`${context}/anisotropyTexture`, properties.anisotropyTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Anisotropy Intensity)`;
                adapter.geometryTangentTexture = texture;
            }));
        }
        await Promise.all(promises);
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_anisotropy(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUVBO0FBRUE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCwgSVRleHR1cmVJbmZvIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxzQW5pc290cm9weSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfYW5pc290cm9weVwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEtIUl9tYXRlcmlhbHNfYW5pc290cm9weSBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5XCJdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5KVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxOTU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc0FuaXNvdHJvcHk+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRBbmlzb3Ryb3B5UHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkQW5pc290cm9weVByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNBbmlzb3Ryb3B5LCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuX2xvYWRlci5fZ2V0T3JDcmVhdGVNYXRlcmlhbEFkYXB0ZXIoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBub24tdGV4dHVyZSBwcm9wZXJ0aWVzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgY29uc3QgYW5pc290cm9weVdlaWdodCA9IHByb3BlcnRpZXMuYW5pc290cm9weVN0cmVuZ3RoID8/IDA7XHJcbiAgICAgICAgY29uc3QgYW5pc290cm9weUFuZ2xlID0gcHJvcGVydGllcy5hbmlzb3Ryb3B5Um90YXRpb24gPz8gMDtcclxuXHJcbiAgICAgICAgYWRhcHRlci5zcGVjdWxhclJvdWdobmVzc0FuaXNvdHJvcHkgPSBhbmlzb3Ryb3B5V2VpZ2h0O1xyXG4gICAgICAgIGFkYXB0ZXIuZ2VvbWV0cnlUYW5nZW50QW5nbGUgPSBhbmlzb3Ryb3B5QW5nbGU7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgZ2xURi1zdHlsZSBhbmlzb3Ryb3B5XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHByb3BlcnRpZXMuZXh0ZW5zaW9ucyA/PyB7fTtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbnMuRVhUX21hdGVyaWFsc19hbmlzb3Ryb3B5X29wZW5wYnIgfHwgIWV4dGVuc2lvbnMuRVhUX21hdGVyaWFsc19hbmlzb3Ryb3B5X29wZW5wYnIub3BlblBickFuaXNvdHJvcHlFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGFkYXB0ZXIuY29uZmlndXJlR2x0ZlN0eWxlQW5pc290cm9weSh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvYWQgdGV4dHVyZSBpZiBwcmVzZW50XHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuYW5pc290cm9weVRleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuYW5pc290cm9weVRleHR1cmUgYXMgSVRleHR1cmVJbmZvKS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2FuaXNvdHJvcHlUZXh0dXJlYCwgcHJvcGVydGllcy5hbmlzb3Ryb3B5VGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEFuaXNvdHJvcHkgSW50ZW5zaXR5KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRlci5nZW9tZXRyeVRhbmdlbnRUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfYW5pc290cm9weShsb2FkZXIpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9