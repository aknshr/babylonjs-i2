"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_iridescence_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_iridescence.js":
/*!************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_iridescence.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_iridescence: () => (/* binding */ KHR_materials_iridescence)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "KHR_materials_iridescence";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_iridescence/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_iridescence {
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
            promises.push(this._loadIridescencePropertiesAsync(extensionContext, extension, babylonMaterial));
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(() => { });
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadIridescencePropertiesAsync(context, properties, babylonMaterial) {
        const adapter = this._loader._getOrCreateMaterialAdapter(babylonMaterial);
        const promises = new Array();
        // Set non-texture properties immediately
        adapter.thinFilmWeight = properties.iridescenceFactor ?? 0;
        adapter.thinFilmIor = properties.iridescenceIor ?? properties.iridescenceIOR ?? 1.3;
        adapter.thinFilmThicknessMinimum = properties.iridescenceThicknessMinimum ?? 100;
        adapter.thinFilmThicknessMaximum = properties.iridescenceThicknessMaximum ?? 400;
        // Load textures
        if (properties.iridescenceTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/iridescenceTexture`, properties.iridescenceTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Iridescence)`;
                adapter.thinFilmWeightTexture = texture;
            }));
        }
        if (properties.iridescenceThicknessTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/iridescenceThicknessTexture`, properties.iridescenceThicknessTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Iridescence Thickness)`;
                adapter.thinFilmThicknessTexture = texture;
            }));
        }
        // eslint-disable-next-line github/no-then
        return Promise.all(promises).then(() => { });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_iridescence(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFFQTtBQUVBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1hdGVyaWFsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSTWF0ZXJpYWxzSXJpZGVzY2VuY2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZSBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZVwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UvUkVBRE1FLm1kKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMTk1O1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZT4oY29udGV4dCwgbWF0ZXJpYWwsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZElyaWRlc2NlbmNlUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRJcmlkZXNjZW5jZVByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElLSFJNYXRlcmlhbHNJcmlkZXNjZW5jZSwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9sb2FkZXIuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAvLyBTZXQgbm9uLXRleHR1cmUgcHJvcGVydGllcyBpbW1lZGlhdGVseVxyXG4gICAgICAgIGFkYXB0ZXIudGhpbkZpbG1XZWlnaHQgPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlRmFjdG9yID8/IDA7XHJcbiAgICAgICAgYWRhcHRlci50aGluRmlsbUlvciA9IHByb3BlcnRpZXMuaXJpZGVzY2VuY2VJb3IgPz8gKHByb3BlcnRpZXMgYXMgYW55KS5pcmlkZXNjZW5jZUlPUiA/PyAxLjM7XHJcbiAgICAgICAgYWRhcHRlci50aGluRmlsbVRoaWNrbmVzc01pbmltdW0gPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bSA/PyAxMDA7XHJcbiAgICAgICAgYWRhcHRlci50aGluRmlsbVRoaWNrbmVzc01heGltdW0gPSBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWF4aW11bSA/PyA0MDA7XHJcblxyXG4gICAgICAgIC8vIExvYWQgdGV4dHVyZXNcclxuICAgICAgICBpZiAocHJvcGVydGllcy5pcmlkZXNjZW5jZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9pcmlkZXNjZW5jZVRleHR1cmVgLCBwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKElyaWRlc2NlbmNlKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRlci50aGluRmlsbVdlaWdodFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2lyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZWAsIHByb3BlcnRpZXMuaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoSXJpZGVzY2VuY2UgVGhpY2tuZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRlci50aGluRmlsbVRoaWNrbmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UobG9hZGVyKSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=