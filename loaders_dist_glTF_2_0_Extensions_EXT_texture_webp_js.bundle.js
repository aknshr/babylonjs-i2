"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_EXT_texture_webp_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/EXT_texture_webp.js":
/*!***************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/EXT_texture_webp.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_texture_webp: () => (/* binding */ EXT_texture_webp)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "EXT_texture_webp";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_texture_webp/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_texture_webp {
    /**
     * @internal
     */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        this._loader = loader;
        this.enabled = loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    _loadTextureAsync(context, texture, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, texture, this.name, async (extensionContext, extension) => {
            const sampler = texture.sampler == undefined ? _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.DefaultSampler : _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get(`${context}/sampler`, this._loader.gltf.samplers, texture.sampler);
            const image = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get(`${extensionContext}/source`, this._loader.gltf.images, extension.source);
            return await this._loader._createTextureAsync(context, sampler, image, (babylonTexture) => {
                assign(babylonTexture);
            }, undefined, !texture._textureInfo.nonColorData);
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new EXT_texture_webp(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRVhUX3RleHR1cmVfd2VicF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQUVBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQVhBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRVhUX3RleHR1cmVfd2VicC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJVGV4dHVyZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElFWFRUZXh0dXJlV2ViUCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IE5BTUUgPSBcIkVYVF90ZXh0dXJlX3dlYnBcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBFWFRfdGV4dHVyZV93ZWJwIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJFWFRfdGV4dHVyZV93ZWJwXCJdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYWluL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfdGV4dHVyZV93ZWJwL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF90ZXh0dXJlX3dlYnAgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKiogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLiAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBsb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUVYVFRleHR1cmVXZWJQLCBCYXNlVGV4dHVyZT4oY29udGV4dCwgdGV4dHVyZSwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZXIgPSB0ZXh0dXJlLnNhbXBsZXIgPT0gdW5kZWZpbmVkID8gR0xURkxvYWRlci5EZWZhdWx0U2FtcGxlciA6IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2FtcGxlcmAsIHRoaXMuX2xvYWRlci5nbHRmLnNhbXBsZXJzLCB0ZXh0dXJlLnNhbXBsZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vc291cmNlYCwgdGhpcy5fbG9hZGVyLmdsdGYuaW1hZ2VzLCBleHRlbnNpb24uc291cmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2xvYWRlci5fY3JlYXRlVGV4dHVyZUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgICAgIChiYWJ5bG9uVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgIXRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBFWFRfdGV4dHVyZV93ZWJwKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9