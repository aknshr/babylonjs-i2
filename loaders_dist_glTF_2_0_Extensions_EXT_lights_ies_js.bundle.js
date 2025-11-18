"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_EXT_lights_ies_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/EXT_lights_ies.js":
/*!*************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/EXT_lights_ies.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_lights_ies: () => (/* binding */ EXT_lights_ies)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Lights/spotLight */ "../core/dist/Lights/spotLight.js");
/* harmony import */ var core_Lights_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Lights/light */ "../core/dist/Lights/light.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








const NAME = "EXT_lights_ies";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Vendor/EXT_lights_ies)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_lights_ies {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
        delete this._lights;
    }
    /** @internal */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._lights = extension.lights;
            _glTFLoader__WEBPACK_IMPORTED_MODULE_4__.ArrayItem.Assign(this._lights);
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_4__.GLTFLoader.LoadExtensionAsync(context, node, this.name, async (extensionContext, extension) => {
            this._loader._allMaterialsDirtyRequired = true;
            let babylonSpotLight;
            let light;
            const transformNode = await this._loader.loadNodeAsync(context, node, (babylonMesh) => {
                light = _glTFLoader__WEBPACK_IMPORTED_MODULE_4__.ArrayItem.Get(extensionContext, this._lights, extension.light);
                const name = light.name || babylonMesh.name;
                this._loader.babylonScene._blockEntityCollection = !!this._loader._assetContainer;
                babylonSpotLight = new core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_2__.SpotLight(name, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Backward(), 0, 1, this._loader.babylonScene);
                babylonSpotLight.angle = Math.PI / 2;
                babylonSpotLight.innerAngle = 0;
                babylonSpotLight._parentContainer = this._loader._assetContainer;
                this._loader.babylonScene._blockEntityCollection = false;
                light._babylonLight = babylonSpotLight;
                babylonSpotLight.falloffType = core_Lights_light__WEBPACK_IMPORTED_MODULE_3__.Light.FALLOFF_GLTF;
                babylonSpotLight.diffuse = extension.color ? core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.color) : core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.White();
                babylonSpotLight.intensity = extension.multiplier || 1;
                babylonSpotLight.range = Number.MAX_VALUE;
                babylonSpotLight.parent = babylonMesh;
                this._loader._babylonLights.push(babylonSpotLight);
                _glTFLoader__WEBPACK_IMPORTED_MODULE_4__.GLTFLoader.AddPointerMetadata(babylonSpotLight, extensionContext);
                assign(babylonMesh);
            });
            // Load the profile
            let bufferData;
            if (light.uri) {
                bufferData = await this._loader.loadUriAsync(context, light, light.uri);
            }
            else {
                const bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_4__.ArrayItem.Get(`${context}/bufferView`, this._loader.gltf.bufferViews, light.bufferView);
                bufferData = await this._loader.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView);
            }
            babylonSpotLight.iesProfileTexture = new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture(name + "_iesProfile", this._loader.babylonScene, true, false, undefined, null, null, bufferData, true, undefined, undefined, undefined, undefined, ".ies");
            return transformNode;
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_5__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_5__.registerGLTFExtension)(NAME, true, (loader) => new EXT_lights_ies(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRVhUX2xpZ2h0c19pZXNfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQWFBOztBQUVBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvRVhUX2xpZ2h0c19pZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElFWFRMaWdodHNJRVNfTGlnaHRSZWZlcmVuY2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUVYVExpZ2h0c0lFU19MaWdodCwgSU5vZGUgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiRVhUX2xpZ2h0c19pZXNcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBFWFRfbGlnaHRzX2llcyBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiRVhUX2xpZ2h0c19pZXNcIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21haW4vZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9saWdodHNfaWVzKVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX2xpZ2h0c19pZXMgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIGhpZGRlbiAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfbGlnaHRzPzogSUVYVExpZ2h0c0lFU19MaWdodFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV07XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cyA9IGV4dGVuc2lvbi5saWdodHM7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fbGlnaHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJRVhUTGlnaHRzSUVTX0xpZ2h0UmVmZXJlbmNlLCBUcmFuc2Zvcm1Ob2RlPihjb250ZXh0LCBub2RlLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9hbGxNYXRlcmlhbHNEaXJ0eVJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBiYWJ5bG9uU3BvdExpZ2h0OiBTcG90TGlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBsaWdodDogSUVYVExpZ2h0c0lFU19MaWdodDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBhd2FpdCB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpZ2h0ID0gQXJyYXlJdGVtLkdldChleHRlbnNpb25Db250ZXh0LCB0aGlzLl9saWdodHMsIGV4dGVuc2lvbi5saWdodCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGlnaHQubmFtZSB8fCBiYWJ5bG9uTWVzaC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fbG9hZGVyLl9hc3NldENvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uU3BvdExpZ2h0ID0gbmV3IFNwb3RMaWdodChuYW1lLCBWZWN0b3IzLlplcm8oKSwgVmVjdG9yMy5CYWNrd2FyZCgpLCAwLCAxLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25TcG90TGlnaHQuYW5nbGUgPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25TcG90TGlnaHQuaW5uZXJBbmdsZSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvblNwb3RMaWdodC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fbG9hZGVyLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGlnaHQuX2JhYnlsb25MaWdodCA9IGJhYnlsb25TcG90TGlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvblNwb3RMaWdodC5mYWxsb2ZmVHlwZSA9IExpZ2h0LkZBTExPRkZfR0xURjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25TcG90TGlnaHQuZGlmZnVzZSA9IGV4dGVuc2lvbi5jb2xvciA/IENvbG9yMy5Gcm9tQXJyYXkoZXh0ZW5zaW9uLmNvbG9yKSA6IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvblNwb3RMaWdodC5pbnRlbnNpdHkgPSBleHRlbnNpb24ubXVsdGlwbGllciB8fCAxO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvblNwb3RMaWdodC5yYW5nZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uU3BvdExpZ2h0LnBhcmVudCA9IGJhYnlsb25NZXNoO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fYmFieWxvbkxpZ2h0cy5wdXNoKGJhYnlsb25TcG90TGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25TcG90TGlnaHQsIGV4dGVuc2lvbkNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gTG9hZCB0aGUgcHJvZmlsZVxyXG4gICAgICAgICAgICBsZXQgYnVmZmVyRGF0YTogQXJyYXlCdWZmZXJWaWV3O1xyXG4gICAgICAgICAgICBpZiAobGlnaHQhLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyRGF0YSA9IGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkVXJpQXN5bmMoY29udGV4dCwgbGlnaHQhLCBsaWdodCEudXJpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9sb2FkZXIuZ2x0Zi5idWZmZXJWaWV3cywgbGlnaHQhLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyRGF0YSA9IGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhYnlsb25TcG90TGlnaHQhLmllc1Byb2ZpbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXHJcbiAgICAgICAgICAgICAgICBuYW1lICsgXCJfaWVzUHJvZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyRGF0YSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBcIi5pZXNcIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEVYVF9saWdodHNfaWVzKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=