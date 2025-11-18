"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_volume_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_volume.js":
/*!*******************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_volume.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_volume: () => (/* binding */ KHR_materials_volume)
/* harmony export */ });
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const NAME = "KHR_materials_volume";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)
 * @since 5.0.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_volume {
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
        this.order = 173;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
        if (this.enabled) {
            // We need to disable instance usage because the attenuation factor depends on the node scale of each individual mesh
            this._loader._disableInstancedMesh++;
        }
    }
    /** @internal */
    dispose() {
        if (this.enabled) {
            this._loader._disableInstancedMesh--;
        }
        this._loader = null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader.LoadExtensionAsync(context, material, this.name, async (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial));
            promises.push(this._loadVolumePropertiesAsync(extensionContext, material, babylonMaterial, extension));
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(() => { });
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadVolumePropertiesAsync(context, material, babylonMaterial, extension) {
        const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
        // If transparency isn't enabled already, this extension shouldn't do anything.
        // i.e. it requires either the KHR_materials_transmission or KHR_materials_diffuse_transmission extensions.
        if ((adapter.transmissionWeight === 0 && adapter.subsurfaceWeight === 0) || !extension.thicknessFactor) {
            return Promise.resolve();
        }
        adapter.transmissionDepth = extension.attenuationDistance !== undefined ? extension.attenuationDistance : Number.MAX_VALUE;
        adapter.transmissionColor =
            extension.attenuationColor !== undefined && extension.attenuationColor.length == 3 ? core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(extension.attenuationColor) : core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
        adapter.volumeThickness = extension.thicknessFactor ?? 0;
        const promises = new Array();
        if (extension.thicknessTexture) {
            extension.thicknessTexture.nonColorData = true;
            // eslint-disable-next-line github/no-then
            promises.push(this._loader.loadTextureInfoAsync(`${context}/thicknessTexture`, extension.thicknessTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Thickness)`;
                adapter.volumeThicknessTexture = texture;
            }));
        }
        // eslint-disable-next-line github/no-then
        return Promise.all(promises).then(() => { });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_volume(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc192b2x1bWVfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUlBO0FBRUE7QUFFQTtBQWFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElUZXh0dXJlSW5mbyB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc1ZvbHVtZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfdm9sdW1lXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgS0hSX21hdGVyaWFsc192b2x1bWUgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIktIUl9tYXRlcmlhbHNfdm9sdW1lXCJdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192b2x1bWUvUkVBRE1FLm1kKVxyXG4gKiBAc2luY2UgNS4wLjBcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9tYXRlcmlhbHNfdm9sdW1lIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxNzM7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBkaXNhYmxlIGluc3RhbmNlIHVzYWdlIGJlY2F1c2UgdGhlIGF0dGVudWF0aW9uIGZhY3RvciBkZXBlbmRzIG9uIHRoZSBub2RlIHNjYWxlIG9mIGVhY2ggaW5kaXZpZHVhbCBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fZGlzYWJsZUluc3RhbmNlZE1lc2grKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2Rpc2FibGVJbnN0YW5jZWRNZXNoLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUtIUk1hdGVyaWFsc1ZvbHVtZT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZFZvbHVtZVByb3BlcnRpZXNBc3luYyhleHRlbnNpb25Db250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsLCBleHRlbnNpb24pKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZFZvbHVtZVByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIGV4dGVuc2lvbjogSUtIUk1hdGVyaWFsc1ZvbHVtZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9sb2FkZXIuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRyYW5zcGFyZW5jeSBpc24ndCBlbmFibGVkIGFscmVhZHksIHRoaXMgZXh0ZW5zaW9uIHNob3VsZG4ndCBkbyBhbnl0aGluZy5cclxuICAgICAgICAvLyBpLmUuIGl0IHJlcXVpcmVzIGVpdGhlciB0aGUgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gb3IgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbiBleHRlbnNpb25zLlxyXG4gICAgICAgIGlmICgoYWRhcHRlci50cmFuc21pc3Npb25XZWlnaHQgPT09IDAgJiYgYWRhcHRlci5zdWJzdXJmYWNlV2VpZ2h0ID09PSAwKSB8fCAhZXh0ZW5zaW9uLnRoaWNrbmVzc0ZhY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGFwdGVyLnRyYW5zbWlzc2lvbkRlcHRoID0gZXh0ZW5zaW9uLmF0dGVudWF0aW9uRGlzdGFuY2UgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi5hdHRlbnVhdGlvbkRpc3RhbmNlIDogTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBhZGFwdGVyLnRyYW5zbWlzc2lvbkNvbG9yID1cclxuICAgICAgICAgICAgZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3IgIT09IHVuZGVmaW5lZCAmJiBleHRlbnNpb24uYXR0ZW51YXRpb25Db2xvci5sZW5ndGggPT0gMyA/IENvbG9yMy5Gcm9tQXJyYXkoZXh0ZW5zaW9uLmF0dGVudWF0aW9uQ29sb3IpIDogQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgYWRhcHRlci52b2x1bWVUaGlja25lc3MgPSBleHRlbnNpb24udGhpY2tuZXNzRmFjdG9yID8/IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIChleHRlbnNpb24udGhpY2tuZXNzVGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L3RoaWNrbmVzc1RleHR1cmVgLCBleHRlbnNpb24udGhpY2tuZXNzVGV4dHVyZSwgKHRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChUaGlja25lc3MpYDtcclxuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLnZvbHVtZVRoaWNrbmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfdm9sdW1lKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=