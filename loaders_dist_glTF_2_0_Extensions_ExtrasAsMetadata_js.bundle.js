"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_ExtrasAsMetadata_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/ExtrasAsMetadata.js":
/*!***************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/ExtrasAsMetadata.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtrasAsMetadata: () => (/* binding */ ExtrasAsMetadata)
/* harmony export */ });
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


const NAME = "ExtrasAsMetadata";
/**
 * Store glTF extras (if present) in BJS objects' metadata
 */
class ExtrasAsMetadata {
    _assignExtras(babylonObject, gltfProp) {
        if (gltfProp.extras && Object.keys(gltfProp.extras).length > 0) {
            const metadata = (babylonObject.metadata = babylonObject.metadata || {});
            const gltf = (metadata.gltf = metadata.gltf || {});
            gltf.extras = gltfProp.extras;
        }
    }
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines whether this extension is enabled.
         */
        this.enabled = true;
        this._loader = loader;
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return this._loader.loadNodeAsync(context, node, (babylonTransformNode) => {
            this._assignExtras(babylonTransformNode, node);
            assign(babylonTransformNode);
        });
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadCameraAsync(context, camera, assign) {
        return this._loader.loadCameraAsync(context, camera, (babylonCamera) => {
            this._assignExtras(babylonCamera, camera);
            assign(babylonCamera);
        });
    }
    /**
     * @internal
     */
    createMaterial(context, material, babylonDrawMode) {
        const babylonMaterial = this._loader.createMaterial(context, material, babylonDrawMode);
        this._assignExtras(babylonMaterial, material);
        return babylonMaterial;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadAnimationAsync(context, animation) {
        // eslint-disable-next-line github/no-then
        return this._loader.loadAnimationAsync(context, animation).then((babylonAnimation) => {
            this._assignExtras(babylonAnimation, animation);
            return babylonAnimation;
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.registerGLTFExtension)(NAME, false, (loader) => new ExtrasAsMetadata(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRXh0cmFzQXNNZXRhZGF0YV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBaUJBOztBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUF2QkE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRXh0cmFzQXNNZXRhZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUsIElDYW1lcmEsIElNYXRlcmlhbCwgSUFuaW1hdGlvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBHTFRGTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRXh0cmFzQXNNZXRhZGF0YVwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEV4dHJhc0FzTWV0YWRhdGEgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIkV4dHJhc0FzTWV0YWRhdGFcIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSU9iamVjdFdpdGhNZXRhZGF0YSB7XHJcbiAgICBtZXRhZGF0YTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogU3RvcmUgZ2xURiBleHRyYXMgKGlmIHByZXNlbnQpIGluIEJKUyBvYmplY3RzJyBtZXRhZGF0YVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV4dHJhc0FzTWV0YWRhdGEgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICBwcml2YXRlIF9hc3NpZ25FeHRyYXMoYmFieWxvbk9iamVjdDogSU9iamVjdFdpdGhNZXRhZGF0YSwgZ2x0ZlByb3A6IElQcm9wZXJ0eSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChnbHRmUHJvcC5leHRyYXMgJiYgT2JqZWN0LmtleXMoZ2x0ZlByb3AuZXh0cmFzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gKGJhYnlsb25PYmplY3QubWV0YWRhdGEgPSBiYWJ5bG9uT2JqZWN0Lm1ldGFkYXRhIHx8IHt9KTtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZiA9IChtZXRhZGF0YS5nbHRmID0gbWV0YWRhdGEuZ2x0ZiB8fCB7fSk7XHJcbiAgICAgICAgICAgIGdsdGYuZXh0cmFzID0gZ2x0ZlByb3AuZXh0cmFzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2lnbkV4dHJhcyhiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgbm9kZSk7XHJcbiAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZENhbWVyYUFzeW5jKGNvbnRleHQ6IHN0cmluZywgY2FtZXJhOiBJQ2FtZXJhLCBhc3NpZ246IChiYWJ5bG9uQ2FtZXJhOiBDYW1lcmEpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPENhbWVyYT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmxvYWRDYW1lcmFBc3luYyhjb250ZXh0LCBjYW1lcmEsIChiYWJ5bG9uQ2FtZXJhKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2lnbkV4dHJhcyhiYWJ5bG9uQ2FtZXJhLCBjYW1lcmEpO1xyXG4gICAgICAgICAgICBhc3NpZ24oYmFieWxvbkNhbWVyYSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZU1hdGVyaWFsKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIpOiBOdWxsYWJsZTxNYXRlcmlhbD4ge1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2xvYWRlci5jcmVhdGVNYXRlcmlhbChjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlKTtcclxuICAgICAgICB0aGlzLl9hc3NpZ25FeHRyYXMoYmFieWxvbk1hdGVyaWFsLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25NYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dDogc3RyaW5nLCBhbmltYXRpb246IElBbmltYXRpb24pOiBOdWxsYWJsZTxQcm9taXNlPEFuaW1hdGlvbkdyb3VwPj4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZEFuaW1hdGlvbkFzeW5jKGNvbnRleHQsIGFuaW1hdGlvbikudGhlbigoYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uR3JvdXApID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzaWduRXh0cmFzKGJhYnlsb25BbmltYXRpb24sIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIGZhbHNlLCAobG9hZGVyKSA9PiBuZXcgRXh0cmFzQXNNZXRhZGF0YShsb2FkZXIpKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==