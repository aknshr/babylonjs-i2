"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_MSFT_minecraftMesh_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/MSFT_minecraftMesh.js":
/*!*****************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/MSFT_minecraftMesh.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_minecraftMesh: () => (/* binding */ MSFT_minecraftMesh)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "MSFT_minecraftMesh";
/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
class MSFT_minecraftMesh {
    /** @internal */
    constructor(loader) {
        /** @internal */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /** @internal */
    // eslint-disable-next-line no-restricted-syntax
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtraAsync(context, material, this.name, async (extraContext, extra) => {
            if (extra) {
                if (!this._loader._pbrMaterialImpl) {
                    throw new Error(`${extraContext}: Material type not supported`);
                }
                const promise = this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial);
                if (babylonMaterial.needAlphaBlending()) {
                    babylonMaterial.forceDepthWrite = true;
                    babylonMaterial.separateCullingPass = true;
                }
                babylonMaterial.backFaceCulling = babylonMaterial.forceDepthWrite;
                babylonMaterial.twoSidedLighting = true;
                return await promise;
            }
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new MSFT_minecraftMesh(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfTVNGVF9taW5lY3JhZnRNZXNoX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFhQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvTVNGVF9taW5lY3JhZnRNZXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIk1TRlRfbWluZWNyYWZ0TWVzaFwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIE1TRlRfbWluZWNyYWZ0TWVzaCBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiTVNGVF9taW5lY3JhZnRNZXNoXCJdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBNU0ZUX21pbmVjcmFmdE1lc2ggaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0cmFBc3luYzxib29sZWFuPihjb250ZXh0LCBtYXRlcmlhbCwgdGhpcy5uYW1lLCBhc3luYyAoZXh0cmFDb250ZXh0LCBleHRyYSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXh0cmEpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbG9hZGVyLl9wYnJNYXRlcmlhbEltcGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXh0cmFDb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbC5uZWVkQWxwaGFCbGVuZGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmZvcmNlRGVwdGhXcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnNlcGFyYXRlQ3VsbGluZ1Bhc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VEZXB0aFdyaXRlO1xyXG4gICAgICAgICAgICAgICAgKGJhYnlsb25NYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCkudHdvU2lkZWRMaWdodGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9taW5lY3JhZnRNZXNoKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9