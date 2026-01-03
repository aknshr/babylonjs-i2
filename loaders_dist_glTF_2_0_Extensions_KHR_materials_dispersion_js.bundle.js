"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_dispersion_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_dispersion.js":
/*!***********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_dispersion.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_dispersion: () => (/* binding */ KHR_materials_dispersion)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "KHR_materials_dispersion";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/87bd64a7f5e23c84b6aef2e6082069583ed0ddb4/extensions/2.0/Khronos/KHR_materials_dispersion/README.md)
 * @experimental
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_dispersion {
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
        this.order = 174;
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
            promises.push(this._loadDispersionPropertiesAsync(extensionContext, material, babylonMaterial, extension));
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(() => { });
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadDispersionPropertiesAsync(context, material, babylonMaterial, extension) {
        const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
        // If transparency isn't enabled already, this extension shouldn't do anything.
        // i.e. it requires either the KHR_materials_transmission or KHR_materials_diffuse_transmission extensions.
        if (adapter.transmissionWeight > 0 || !extension.dispersion) {
            return Promise.resolve();
        }
        adapter.transmissionDispersionAbbeNumber = 20.0 / extension.dispersion;
        return Promise.resolve();
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_dispersion(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUVBO0FBRUE7QUFhQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlzcGVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNEaXNwZXJzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb25cIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iLzg3YmQ2NGE3ZjVlMjNjODRiNmFlZjJlNjA4MjA2OTU4M2VkMGRkYjQvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24vUkVBRE1FLm1kKVxyXG4gKiBAZXhwZXJpbWVudGFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb24gaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgbnVtYmVyIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3JkZXIgdGhlIGV4dGVuc2lvbnMgYXJlIGFwcGxpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvcmRlciA9IDE3NDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbj4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZERpc3BlcnNpb25Qcm9wZXJ0aWVzQXN5bmMoZXh0ZW5zaW9uQ29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCwgZXh0ZW5zaW9uKSk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWREaXNwZXJzaW9uUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCwgZXh0ZW5zaW9uOiBJS0hSTWF0ZXJpYWxzRGlzcGVyc2lvbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9sb2FkZXIuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRyYW5zcGFyZW5jeSBpc24ndCBlbmFibGVkIGFscmVhZHksIHRoaXMgZXh0ZW5zaW9uIHNob3VsZG4ndCBkbyBhbnl0aGluZy5cclxuICAgICAgICAvLyBpLmUuIGl0IHJlcXVpcmVzIGVpdGhlciB0aGUgS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24gb3IgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbiBleHRlbnNpb25zLlxyXG4gICAgICAgIGlmIChhZGFwdGVyLnRyYW5zbWlzc2lvbldlaWdodCA+IDAgfHwgIWV4dGVuc2lvbi5kaXNwZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkYXB0ZXIudHJhbnNtaXNzaW9uRGlzcGVyc2lvbkFiYmVOdW1iZXIgPSAyMC4wIC8gZXh0ZW5zaW9uLmRpc3BlcnNpb247XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9