"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_materials_pbrSpecularGlossiness_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.js":
/*!**********************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_materials_pbrSpecularGlossiness: () => (/* binding */ KHR_materials_pbrSpecularGlossiness)
/* harmony export */ });
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/PBR/pbrMaterial */ "../core/dist/Materials/PBR/pbrMaterial.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





const NAME = "KHR_materials_pbrSpecularGlossiness";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_materials_pbrSpecularGlossiness {
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
        this.order = 200;
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
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader.LoadExtensionAsync(context, material, this.name, async (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(this._loadSpecularGlossinessPropertiesAsync(extensionContext, extension, babylonMaterial));
            this._loader.loadMaterialAlphaProperties(context, material, babylonMaterial);
            // eslint-disable-next-line github/no-then
            return await Promise.all(promises).then(() => { });
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadSpecularGlossinessPropertiesAsync(context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial)) {
            throw new Error(`${context}: Material type not supported`);
        }
        const promises = new Array();
        babylonMaterial.metallic = null;
        babylonMaterial.roughness = null;
        if (properties.diffuseFactor) {
            babylonMaterial.albedoColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.diffuseFactor);
            babylonMaterial.alpha = properties.diffuseFactor[3];
        }
        else {
            babylonMaterial.albedoColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
        }
        babylonMaterial.reflectivityColor = properties.specularFactor ? core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(properties.specularFactor) : core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
        babylonMaterial.microSurface = properties.glossinessFactor == undefined ? 1 : properties.glossinessFactor;
        if (properties.diffuseTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/diffuseTexture`, properties.diffuseTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Diffuse)`;
                babylonMaterial.albedoTexture = texture;
            }));
        }
        if (properties.specularGlossinessTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/specularGlossinessTexture`, properties.specularGlossinessTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Specular Glossiness)`;
                babylonMaterial.reflectivityTexture = texture;
                babylonMaterial.reflectivityTexture.hasAlpha = true;
            }));
            babylonMaterial.useMicroSurfaceFromReflectivityMapAlpha = true;
        }
        // eslint-disable-next-line github/no-then
        return Promise.all(promises).then(() => { });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.registerGLTFExtension)(NAME, true, (loader) => new KHR_materials_pbrSpecularGlossiness(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3NfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQWFBOztBQUVBO0FBQ0E7QUFDQTtBQWtCQTs7QUFFQTtBQUNBO0FBcEJBOztBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBQQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWwgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElLSFJNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3MgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1wiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEtIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1wiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9BcmNoaXZlZC9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcy9SRUFETUUubWQpXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcyBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSBudW1iZXIgdGhhdCBkZXRlcm1pbmVzIHRoZSBvcmRlciB0aGUgZXh0ZW5zaW9ucyBhcmUgYXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9yZGVyID0gMjAwO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElLSFJNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3M+KGNvbnRleHQsIG1hdGVyaWFsLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxCYXNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkU3BlY3VsYXJHbG9zc2luZXNzUHJvcGVydGllc0FzeW5jKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbiwgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkTWF0ZXJpYWxBbHBoYVByb3BlcnRpZXMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRTcGVjdWxhckdsb3NzaW5lc3NQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0aWVzOiBJS0hSTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCEoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSTWF0ZXJpYWwpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5tZXRhbGxpYyA9IG51bGw7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnJvdWdobmVzcyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmRpZmZ1c2VGYWN0b3IpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb0NvbG9yID0gQ29sb3IzLkZyb21BcnJheShwcm9wZXJ0aWVzLmRpZmZ1c2VGYWN0b3IpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGEgPSBwcm9wZXJ0aWVzLmRpZmZ1c2VGYWN0b3JbM107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb0NvbG9yID0gQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGl2aXR5Q29sb3IgPSBwcm9wZXJ0aWVzLnNwZWN1bGFyRmFjdG9yID8gQ29sb3IzLkZyb21BcnJheShwcm9wZXJ0aWVzLnNwZWN1bGFyRmFjdG9yKSA6IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5taWNyb1N1cmZhY2UgPSBwcm9wZXJ0aWVzLmdsb3NzaW5lc3NGYWN0b3IgPT0gdW5kZWZpbmVkID8gMSA6IHByb3BlcnRpZXMuZ2xvc3NpbmVzc0ZhY3RvcjtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMuZGlmZnVzZVRleHR1cmUpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9kaWZmdXNlVGV4dHVyZWAsIHByb3BlcnRpZXMuZGlmZnVzZVRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChEaWZmdXNlKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLmFsYmVkb1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlYCwgcHJvcGVydGllcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoU3BlY3VsYXIgR2xvc3NpbmVzcylgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5yZWZsZWN0aXZpdHlUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwucmVmbGVjdGl2aXR5VGV4dHVyZS5oYXNBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnVzZU1pY3JvU3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcyhsb2FkZXIpKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==