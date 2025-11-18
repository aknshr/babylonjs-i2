"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_lights_punctual_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_lights_punctual.js":
/*!******************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_lights_punctual.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_lights: () => (/* binding */ KHR_lights)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Lights/directionalLight */ "../core/dist/Lights/directionalLight.js");
/* harmony import */ var core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Lights/pointLight */ "../core/dist/Lights/pointLight.js");
/* harmony import */ var core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Lights/spotLight */ "../core/dist/Lights/spotLight.js");
/* harmony import */ var core_Lights_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Lights/light */ "../core/dist/Lights/light.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









const NAME = "KHR_lights_punctual";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_lights_punctual/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_lights {
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
            _glTFLoader__WEBPACK_IMPORTED_MODULE_6__.ArrayItem.Assign(this._lights);
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader.LoadExtensionAsync(context, node, this.name, async (extensionContext, extension) => {
            this._loader._allMaterialsDirtyRequired = true;
            return await this._loader.loadNodeAsync(context, node, (babylonMesh) => {
                let babylonLight;
                const light = _glTFLoader__WEBPACK_IMPORTED_MODULE_6__.ArrayItem.Get(extensionContext, this._lights, extension.light);
                const name = light.name || babylonMesh.name;
                this._loader.babylonScene._blockEntityCollection = !!this._loader._assetContainer;
                switch (light.type) {
                    case "directional" /* KHRLightsPunctual_LightType.DIRECTIONAL */: {
                        const babylonDirectionalLight = new core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(name, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Backward(), this._loader.babylonScene);
                        babylonDirectionalLight.position.setAll(0);
                        babylonLight = babylonDirectionalLight;
                        break;
                    }
                    case "point" /* KHRLightsPunctual_LightType.POINT */: {
                        babylonLight = new core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_3__.PointLight(name, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), this._loader.babylonScene);
                        break;
                    }
                    case "spot" /* KHRLightsPunctual_LightType.SPOT */: {
                        const babylonSpotLight = new core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_4__.SpotLight(name, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Backward(), 0, 1, this._loader.babylonScene);
                        babylonSpotLight.angle = ((light.spot && light.spot.outerConeAngle) || Math.PI / 4) * 2;
                        babylonSpotLight.innerAngle = ((light.spot && light.spot.innerConeAngle) || 0) * 2;
                        babylonLight = babylonSpotLight;
                        break;
                    }
                    default: {
                        this._loader.babylonScene._blockEntityCollection = false;
                        throw new Error(`${extensionContext}: Invalid light type (${light.type})`);
                    }
                }
                babylonLight._parentContainer = this._loader._assetContainer;
                this._loader.babylonScene._blockEntityCollection = false;
                light._babylonLight = babylonLight;
                babylonLight.falloffType = core_Lights_light__WEBPACK_IMPORTED_MODULE_5__.Light.FALLOFF_GLTF;
                babylonLight.diffuse = light.color ? core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(light.color) : core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.White();
                babylonLight.intensity = light.intensity == undefined ? 1 : light.intensity;
                babylonLight.range = light.range == undefined ? Number.MAX_VALUE : light.range;
                babylonLight.parent = babylonMesh;
                this._loader._babylonLights.push(babylonLight);
                _glTFLoader__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader.AddPointerMetadata(babylonLight, extensionContext);
                assign(babylonMesh);
            });
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_7__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_7__.registerGLTFExtension)(NAME, true, (loader) => new KHR_lights(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2xpZ2h0c19wdW5jdHVhbF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBZUE7O0FBRUE7QUFDQTtBQWpCQTs7QUFFQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2xpZ2h0c19wdW5jdHVhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IERpcmVjdGlvbmFsTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvZGlyZWN0aW9uYWxMaWdodFwiO1xyXG5pbXBvcnQgeyBQb2ludExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3BvaW50TGlnaHRcIjtcclxuaW1wb3J0IHsgU3BvdExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3Nwb3RMaWdodFwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRSZWZlcmVuY2UgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0IH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0gfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2xpZ2h0c19wdW5jdHVhbFwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEtIUl9saWdodHNfcHVuY3R1YWwgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIktIUl9saWdodHNfcHVuY3R1YWxcIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogW1NwZWNpZmljYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbGlnaHRzX3B1bmN0dWFsL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9saWdodHMgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIGhpZGRlbiAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfbGlnaHRzPzogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICBkZWxldGUgdGhpcy5fbGlnaHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgZXh0ZW5zaW9uc1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbdGhpcy5uYW1lXTtcclxuICAgICAgICAgICAgdGhpcy5fbGlnaHRzID0gZXh0ZW5zaW9uLmxpZ2h0cztcclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9saWdodHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRSZWZlcmVuY2UsIFRyYW5zZm9ybU5vZGU+KGNvbnRleHQsIG5vZGUsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkTm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhYnlsb25MaWdodDogTGlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBBcnJheUl0ZW0uR2V0KGV4dGVuc2lvbkNvbnRleHQsIHRoaXMuX2xpZ2h0cywgZXh0ZW5zaW9uLmxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsaWdodC5uYW1lIHx8IGJhYnlsb25NZXNoLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9sb2FkZXIuX2Fzc2V0Q29udGFpbmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobGlnaHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLkRJUkVDVElPTkFMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25EaXJlY3Rpb25hbExpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQobmFtZSwgVmVjdG9yMy5CYWNrd2FyZCgpLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0QWxsKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQgPSBiYWJ5bG9uRGlyZWN0aW9uYWxMaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlBPSU5UOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodCA9IG5ldyBQb2ludExpZ2h0KG5hbWUsIFZlY3RvcjMuWmVybygpLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRUeXBlLlNQT1Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblNwb3RMaWdodCA9IG5ldyBTcG90TGlnaHQobmFtZSwgVmVjdG9yMy5aZXJvKCksIFZlY3RvcjMuQmFja3dhcmQoKSwgMCwgMSwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25TcG90TGlnaHQuYW5nbGUgPSAoKGxpZ2h0LnNwb3QgJiYgbGlnaHQuc3BvdC5vdXRlckNvbmVBbmdsZSkgfHwgTWF0aC5QSSAvIDQpICogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblNwb3RMaWdodC5pbm5lckFuZ2xlID0gKChsaWdodC5zcG90ICYmIGxpZ2h0LnNwb3QuaW5uZXJDb25lQW5nbGUpIHx8IDApICogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0ID0gYmFieWxvblNwb3RMaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fTogSW52YWxpZCBsaWdodCB0eXBlICgke2xpZ2h0LnR5cGV9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2xvYWRlci5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgPSBiYWJ5bG9uTGlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0LmZhbGxvZmZUeXBlID0gTGlnaHQuRkFMTE9GRl9HTFRGO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0LmRpZmZ1c2UgPSBsaWdodC5jb2xvciA/IENvbG9yMy5Gcm9tQXJyYXkobGlnaHQuY29sb3IpIDogQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQuaW50ZW5zaXR5ID0gbGlnaHQuaW50ZW5zaXR5ID09IHVuZGVmaW5lZCA/IDEgOiBsaWdodC5pbnRlbnNpdHk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQucmFuZ2UgPSBsaWdodC5yYW5nZSA9PSB1bmRlZmluZWQgPyBOdW1iZXIuTUFYX1ZBTFVFIDogbGlnaHQucmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQucGFyZW50ID0gYmFieWxvbk1lc2g7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9iYWJ5bG9uTGlnaHRzLnB1c2goYmFieWxvbkxpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBHTFRGTG9hZGVyLkFkZFBvaW50ZXJNZXRhZGF0YShiYWJ5bG9uTGlnaHQsIGV4dGVuc2lvbkNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfbGlnaHRzKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=