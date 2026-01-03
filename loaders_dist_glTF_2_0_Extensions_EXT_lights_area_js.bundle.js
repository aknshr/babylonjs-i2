"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_EXT_lights_area_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/EXT_lights_area.js":
/*!**************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/EXT_lights_area.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_lights_area: () => (/* binding */ EXT_lights_area)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Lights_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Lights/light */ "../core/dist/Lights/light.js");
/* harmony import */ var core_Lights_rectAreaLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Lights/rectAreaLight */ "../core/dist/Lights/rectAreaLight.js");
/* harmony import */ var core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








const NAME = "EXT_lights_area";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_lights_area/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_lights_area {
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
            _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Assign(this._lights);
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader.LoadExtensionAsync(context, node, this.name, async (extensionContext, extension) => {
            this._loader._allMaterialsDirtyRequired = true;
            return await this._loader.loadNodeAsync(context, node, (babylonMesh) => {
                let babylonLight;
                const light = _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Get(extensionContext, this._lights, extension.light);
                const name = light.name || babylonMesh.name;
                this._loader.babylonScene._blockEntityCollection = !!this._loader._assetContainer;
                const size = light.size !== undefined ? light.size : 1.0;
                switch (light.type) {
                    case "rect" /* EXTLightsArea_LightType.RECT */: {
                        const width = light.rect?.aspect !== undefined ? light.rect.aspect * size : size;
                        const height = size;
                        const babylonRectAreaLight = new core_Lights_rectAreaLight__WEBPACK_IMPORTED_MODULE_3__.RectAreaLight(name, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), width, height, this._loader.babylonScene);
                        babylonLight = babylonRectAreaLight;
                        break;
                    }
                    case "disk" /* EXTLightsArea_LightType.DISK */: {
                        // For disk lights, we'll use a rectangle light with the same area to approximate the disk light
                        // In the future, this could be extended to support actual disk area lights
                        const newSize = Math.sqrt(size * size * 0.25 * Math.PI); // Area of the disk
                        const babylonRectAreaLight = new core_Lights_rectAreaLight__WEBPACK_IMPORTED_MODULE_3__.RectAreaLight(name, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), newSize, newSize, this._loader.babylonScene);
                        babylonLight = babylonRectAreaLight;
                        break;
                    }
                    default: {
                        this._loader.babylonScene._blockEntityCollection = false;
                        throw new Error(`${extensionContext}: Invalid area light type (${light.type})`);
                    }
                }
                babylonLight._parentContainer = this._loader._assetContainer;
                this._loader.babylonScene._blockEntityCollection = false;
                light._babylonLight = babylonLight;
                babylonLight.falloffType = core_Lights_light__WEBPACK_IMPORTED_MODULE_2__.Light.FALLOFF_GLTF;
                babylonLight.diffuse = light.color ? core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(light.color) : core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.White();
                babylonLight.intensity = light.intensity == undefined ? 1 : light.intensity;
                // glTF EXT_lights_area specifies lights face down -Z, but Babylon.js area lights face down +Z
                // Create a parent transform node with 180-degree rotation around Y axis to flip the direction
                const lightParentNode = new core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_4__.TransformNode(`${name}_orientation`, this._loader.babylonScene);
                lightParentNode.rotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxis(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), Math.PI);
                lightParentNode.parent = babylonMesh;
                babylonLight.parent = lightParentNode;
                this._loader._babylonLights.push(babylonLight);
                _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader.AddPointerMetadata(babylonLight, extensionContext);
                assign(babylonMesh);
            });
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_6__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_6__.registerGLTFExtension)(NAME, true, (loader) => new EXT_lights_area(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRVhUX2xpZ2h0c19hcmVhX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBOztBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbGlnaHRzX2FyZWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBRdWF0ZXJuaW9uIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgeyBSZWN0QXJlYUxpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3JlY3RBcmVhTGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSBhcyBCYWJ5bG9uVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElFWFRMaWdodHNBcmVhX0xpZ2h0UmVmZXJlbmNlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBFWFRMaWdodHNBcmVhX0xpZ2h0VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJTm9kZSwgSUVYVExpZ2h0c0FyZWFfTGlnaHQgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfbGlnaHRzX2FyZWFcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBFWFRfbGlnaHRzX2FyZWEgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIkVYVF9saWdodHNfYXJlYVwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX2xpZ2h0c19hcmVhL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF9saWdodHNfYXJlYSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogaGlkZGVuICovXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcbiAgICBwcml2YXRlIF9saWdodHM/OiBJRVhUTGlnaHRzQXJlYV9MaWdodFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpZ2h0cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV07XHJcbiAgICAgICAgICAgIHRoaXMuX2xpZ2h0cyA9IGV4dGVuc2lvbi5saWdodHM7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fbGlnaHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUVYVExpZ2h0c0FyZWFfTGlnaHRSZWZlcmVuY2UsIFRyYW5zZm9ybU5vZGU+KGNvbnRleHQsIG5vZGUsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkTm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhYnlsb25MaWdodDogTGlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBBcnJheUl0ZW0uR2V0KGV4dGVuc2lvbkNvbnRleHQsIHRoaXMuX2xpZ2h0cywgZXh0ZW5zaW9uLmxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsaWdodC5uYW1lIHx8IGJhYnlsb25NZXNoLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9sb2FkZXIuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGxpZ2h0LnNpemUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0LnNpemUgOiAxLjA7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsaWdodC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBFWFRMaWdodHNBcmVhX0xpZ2h0VHlwZS5SRUNUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gbGlnaHQucmVjdD8uYXNwZWN0ICE9PSB1bmRlZmluZWQgPyBsaWdodC5yZWN0LmFzcGVjdCAqIHNpemUgOiBzaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uUmVjdEFyZWFMaWdodCA9IG5ldyBSZWN0QXJlYUxpZ2h0KG5hbWUsIFZlY3RvcjMuWmVybygpLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0ID0gYmFieWxvblJlY3RBcmVhTGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEVYVExpZ2h0c0FyZWFfTGlnaHRUeXBlLkRJU0s6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGRpc2sgbGlnaHRzLCB3ZSdsbCB1c2UgYSByZWN0YW5nbGUgbGlnaHQgd2l0aCB0aGUgc2FtZSBhcmVhIHRvIGFwcHJveGltYXRlIHRoZSBkaXNrIGxpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYmUgZXh0ZW5kZWQgdG8gc3VwcG9ydCBhY3R1YWwgZGlzayBhcmVhIGxpZ2h0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTaXplID0gTWF0aC5zcXJ0KHNpemUgKiBzaXplICogMC4yNSAqIE1hdGguUEkpOyAvLyBBcmVhIG9mIHRoZSBkaXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25SZWN0QXJlYUxpZ2h0ID0gbmV3IFJlY3RBcmVhTGlnaHQobmFtZSwgVmVjdG9yMy5aZXJvKCksIG5ld1NpemUsIG5ld1NpemUsIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQgPSBiYWJ5bG9uUmVjdEFyZWFMaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fTogSW52YWxpZCBhcmVhIGxpZ2h0IHR5cGUgKCR7bGlnaHQudHlwZX0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fbG9hZGVyLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGlnaHQuX2JhYnlsb25MaWdodCA9IGJhYnlsb25MaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQuZmFsbG9mZlR5cGUgPSBMaWdodC5GQUxMT0ZGX0dMVEY7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTGlnaHQuZGlmZnVzZSA9IGxpZ2h0LmNvbG9yID8gQ29sb3IzLkZyb21BcnJheShsaWdodC5jb2xvcikgOiBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25MaWdodC5pbnRlbnNpdHkgPSBsaWdodC5pbnRlbnNpdHkgPT0gdW5kZWZpbmVkID8gMSA6IGxpZ2h0LmludGVuc2l0eTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBnbFRGIEVYVF9saWdodHNfYXJlYSBzcGVjaWZpZXMgbGlnaHRzIGZhY2UgZG93biAtWiwgYnV0IEJhYnlsb24uanMgYXJlYSBsaWdodHMgZmFjZSBkb3duICtaXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwYXJlbnQgdHJhbnNmb3JtIG5vZGUgd2l0aCAxODAtZGVncmVlIHJvdGF0aW9uIGFyb3VuZCBZIGF4aXMgdG8gZmxpcCB0aGUgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodFBhcmVudE5vZGUgPSBuZXcgQmFieWxvblRyYW5zZm9ybU5vZGUoYCR7bmFtZX1fb3JpZW50YXRpb25gLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGxpZ2h0UGFyZW50Tm9kZS5yb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLlJvdGF0aW9uQXhpcyhWZWN0b3IzLlVwKCksIE1hdGguUEkpO1xyXG4gICAgICAgICAgICAgICAgbGlnaHRQYXJlbnROb2RlLnBhcmVudCA9IGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkxpZ2h0LnBhcmVudCA9IGxpZ2h0UGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkZXIuX2JhYnlsb25MaWdodHMucHVzaChiYWJ5bG9uTGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25MaWdodCwgZXh0ZW5zaW9uQ29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXNzaWduKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEVYVF9saWdodHNfYXJlYShsb2FkZXIpKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==