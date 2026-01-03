"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_clearcoat_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_clearcoat.js":
/*!**********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_clearcoat.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_clearcoat: () => (/* binding */ KHR_materials_clearcoat)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "KHR_materials_clearcoat";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_clearcoat/README.md)
 * [Playground Sample](https://www.babylonjs-playground.com/frame.html#7F7PN6#8)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_clearcoat {
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
        this.order = 190;
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
            promises.push(this._loadClearCoatPropertiesAsync(extensionContext, extension, babylonMaterial));
            await Promise.all(promises);
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadClearCoatPropertiesAsync(context, properties, babylonMaterial) {
        const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
        const promises = new Array();
        // Set non-texture properties immediately
        adapter.configureCoat();
        adapter.coatWeight = properties.clearcoatFactor !== undefined ? properties.clearcoatFactor : 0;
        adapter.coatRoughness = properties.clearcoatRoughnessFactor !== undefined ? properties.clearcoatRoughnessFactor : 0;
        // Load textures
        if (properties.clearcoatTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/clearcoatTexture`, properties.clearcoatTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (ClearCoat)`;
                adapter.coatWeightTexture = texture;
            }));
        }
        if (properties.clearcoatRoughnessTexture) {
            properties.clearcoatRoughnessTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync(`${context}/clearcoatRoughnessTexture`, properties.clearcoatRoughnessTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (ClearCoat Roughness)`;
                adapter.coatRoughnessTexture = texture;
            }));
        }
        if (properties.clearcoatNormalTexture) {
            properties.clearcoatNormalTexture.nonColorData = true;
            promises.push(this._loader.loadTextureInfoAsync(`${context}/clearcoatNormalTexture`, properties.clearcoatNormalTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (ClearCoat Normal)`;
                adapter.geometryCoatNormalTexture = texture;
                if (properties.clearcoatNormalTexture?.scale != undefined) {
                    adapter.geometryCoatNormalTextureScale = properties.clearcoatNormalTexture.scale;
                }
            }));
            adapter.setNormalMapInversions(!babylonMaterial.getScene().useRightHandedSystem, babylonMaterial.getScene().useRightHandedSystem);
        }
        // eslint-disable-next-line github/no-then
        return Promise.all(promises).then(() => { });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_clearcoat(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc19jbGVhcmNvYXRfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBRUE7QUFFQTtBQWFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFrQkE7O0FBRUE7QUFDQTtBQXBCQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwsIElUZXh0dXJlSW5mbyB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0NsZWFyY29hdCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIktIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIktIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XCJdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvUkVBRE1FLm1kKVxyXG4gKiBbUGxheWdyb3VuZCBTYW1wbGVdKGh0dHBzOi8vd3d3LmJhYnlsb25qcy1wbGF5Z3JvdW5kLmNvbS9mcmFtZS5odG1sIzdGN1BONiM4KVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDE5MDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxzQ2xlYXJjb2F0Pihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkQ2xlYXJDb2F0UHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9sb2FkQ2xlYXJDb2F0UHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSUtIUk1hdGVyaWFsc0NsZWFyY29hdCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9sb2FkZXIuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAvLyBTZXQgbm9uLXRleHR1cmUgcHJvcGVydGllcyBpbW1lZGlhdGVseVxyXG4gICAgICAgIGFkYXB0ZXIuY29uZmlndXJlQ29hdCgpO1xyXG4gICAgICAgIGFkYXB0ZXIuY29hdFdlaWdodCA9IHByb3BlcnRpZXMuY2xlYXJjb2F0RmFjdG9yICE9PSB1bmRlZmluZWQgPyBwcm9wZXJ0aWVzLmNsZWFyY29hdEZhY3RvciA6IDA7XHJcbiAgICAgICAgYWRhcHRlci5jb2F0Um91Z2huZXNzID0gcHJvcGVydGllcy5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IHByb3BlcnRpZXMuY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yIDogMDtcclxuXHJcbiAgICAgICAgLy8gTG9hZCB0ZXh0dXJlc1xyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdFRleHR1cmUpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9jbGVhcmNvYXRUZXh0dXJlYCwgcHJvcGVydGllcy5jbGVhcmNvYXRUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQ2xlYXJDb2F0KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRlci5jb2F0V2VpZ2h0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAocHJvcGVydGllcy5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlIGFzIElUZXh0dXJlSW5mbykubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlYCwgcHJvcGVydGllcy5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQ2xlYXJDb2F0IFJvdWdobmVzcylgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIuY29hdFJvdWdobmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdE5vcm1hbFRleHR1cmUpIHtcclxuICAgICAgICAgICAgKHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSBhcyBJVGV4dHVyZUluZm8pLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZWAsIHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKENsZWFyQ29hdCBOb3JtYWwpYDtcclxuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmdlb21ldHJ5Q29hdE5vcm1hbFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmNsZWFyY29hdE5vcm1hbFRleHR1cmU/LnNjYWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmdlb21ldHJ5Q29hdE5vcm1hbFRleHR1cmVTY2FsZSA9IHByb3BlcnRpZXMuY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhZGFwdGVyLnNldE5vcm1hbE1hcEludmVyc2lvbnMoIWJhYnlsb25NYXRlcmlhbC5nZXRTY2VuZSgpLnVzZVJpZ2h0SGFuZGVkU3lzdGVtLCBiYWJ5bG9uTWF0ZXJpYWwuZ2V0U2NlbmUoKS51c2VSaWdodEhhbmRlZFN5c3RlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfY2xlYXJjb2F0KGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9