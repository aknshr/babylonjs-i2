"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_emissive_strength_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_emissive_strength.js":
/*!******************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_emissive_strength.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_emissive_strength: () => (/* binding */ KHR_materials_emissive_strength)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "KHR_materials_emissive_strength";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_emissive_strength {
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
        this.order = 170;
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
            await this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial);
            this._loadEmissiveProperties(extensionContext, extension, babylonMaterial);
            return await Promise.resolve();
        });
    }
    _loadEmissiveProperties(context, properties, babylonMaterial) {
        if (properties.emissiveStrength !== undefined) {
            const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
            adapter.emissionLuminance = properties.emissiveStrength;
        }
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_emissive_strength(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQTtBQUVBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbCB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUk1hdGVyaWFsc0VtaXNzaXZlU3RyZW5ndGggfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aCBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aFwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aCBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTcwO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoPihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRFbWlzc2l2ZVByb3BlcnRpZXMoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEVtaXNzaXZlUHJvcGVydGllcyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZW1pc3NpdmVTdHJlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9sb2FkZXIuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGFkYXB0ZXIuZW1pc3Npb25MdW1pbmFuY2UgPSBwcm9wZXJ0aWVzLmVtaXNzaXZlU3RyZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9