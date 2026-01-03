"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_EXT_mesh_gpu_instancing_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.js":
/*!**********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_mesh_gpu_instancing: () => (/* binding */ EXT_mesh_gpu_instancing)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var core_Meshes_thinInstanceMesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Meshes/thinInstanceMesh */ "../core/dist/Meshes/thinInstanceMesh.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






const NAME = "EXT_mesh_gpu_instancing";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)
 * [Playground Sample](https://playground.babylonjs.com/#QFIGLW#9)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_mesh_gpu_instancing {
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
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader.LoadExtensionAsync(context, node, this.name, async (extensionContext, extension) => {
            this._loader._disableInstancedMesh++;
            const promise = this._loader.loadNodeAsync(`/nodes/${node.index}`, node, assign);
            this._loader._disableInstancedMesh--;
            if (!node._primitiveBabylonMeshes) {
                return await promise;
            }
            const promises = new Array();
            let instanceCount = 0;
            const loadAttribute = (attribute) => {
                if (extension.attributes[attribute] == undefined) {
                    promises.push(Promise.resolve(null));
                    return;
                }
                const accessor = _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.ArrayItem.Get(`${extensionContext}/attributes/${attribute}`, this._loader.gltf.accessors, extension.attributes[attribute]);
                promises.push(this._loader._loadFloatAccessorAsync(`/accessors/${accessor.bufferView}`, accessor));
                if (instanceCount === 0) {
                    instanceCount = accessor.count;
                }
                else if (instanceCount !== accessor.count) {
                    throw new Error(`${extensionContext}/attributes: Instance buffer accessors do not have the same count.`);
                }
            };
            loadAttribute("TRANSLATION");
            loadAttribute("ROTATION");
            loadAttribute("SCALE");
            loadAttribute("_COLOR_0");
            // eslint-disable-next-line github/no-then
            return await promise.then(async (babylonTransformNode) => {
                const [translationBuffer, rotationBuffer, scaleBuffer, colorBuffer] = await Promise.all(promises);
                const matrices = new Float32Array(instanceCount * 16);
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0].copyFromFloats(0, 0, 0); // translation
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0].copyFromFloats(0, 0, 0, 1); // rotation
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1].copyFromFloats(1, 1, 1); // scale
                for (let i = 0; i < instanceCount; ++i) {
                    translationBuffer && core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(translationBuffer, i * 3, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
                    rotationBuffer && core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(rotationBuffer, i * 4, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
                    scaleBuffer && core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(scaleBuffer, i * 3, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1]);
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[1], core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0], core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0], core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
                    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0].copyToArray(matrices, i * 16);
                }
                for (const babylonMesh of node._primitiveBabylonMeshes) {
                    babylonMesh.thinInstanceSetBuffer("matrix", matrices, 16, true);
                    if (colorBuffer) {
                        if (colorBuffer.length === instanceCount * 3) {
                            babylonMesh.thinInstanceSetBuffer("color", colorBuffer, 3, true);
                        }
                        else if (colorBuffer.length === instanceCount * 4) {
                            babylonMesh.thinInstanceSetBuffer("color", colorBuffer, 4, true);
                        }
                        else {
                            core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn("Unexpected size of _COLOR_0 attribute for mesh " + babylonMesh.name);
                        }
                    }
                }
                return babylonTransformNode;
            });
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.registerGLTFExtension)(NAME, true, (loader) => new EXT_mesh_gpu_instancing(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQWFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBZkE7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaF9ncHVfaW5zdGFuY2luZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IzLCBRdWF0ZXJuaW9uLCBNYXRyaXgsIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSU5vZGUgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRVhUTWVzaEdwdUluc3RhbmNpbmcgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5pbXBvcnQgXCJjb3JlL01lc2hlcy90aGluSW5zdGFuY2VNZXNoXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJFWFRfbWVzaF9ncHVfaW5zdGFuY2luZ1wiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmcvUkVBRE1FLm1kKVxyXG4gKiBbUGxheWdyb3VuZCBTYW1wbGVdKGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyNRRklHTFcjOSlcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElFWFRNZXNoR3B1SW5zdGFuY2luZywgVHJhbnNmb3JtTm9kZT4oY29udGV4dCwgbm9kZSwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5fZGlzYWJsZUluc3RhbmNlZE1lc2grKztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZS5pbmRleH1gLCBub2RlLCBhc3NpZ24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLl9kaXNhYmxlSW5zdGFuY2VkTWVzaC0tO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxOdWxsYWJsZTxGbG9hdDMyQXJyYXk+Pj4oKTtcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUobnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vYXR0cmlidXRlcy8ke2F0dHJpYnV0ZX1gLCB0aGlzLl9sb2FkZXIuZ2x0Zi5hY2Nlc3NvcnMsIGV4dGVuc2lvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5idWZmZXJWaWV3fWAsIGFjY2Vzc29yKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUNvdW50ID0gYWNjZXNzb3IuY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlQ291bnQgIT09IGFjY2Vzc29yLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9L2F0dHJpYnV0ZXM6IEluc3RhbmNlIGJ1ZmZlciBhY2Nlc3NvcnMgZG8gbm90IGhhdmUgdGhlIHNhbWUgY291bnQuYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVFJBTlNMQVRJT05cIik7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJST1RBVElPTlwiKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlNDQUxFXCIpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiX0NPTE9SXzBcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHByb21pc2UudGhlbihhc3luYyAoYmFieWxvblRyYW5zZm9ybU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt0cmFuc2xhdGlvbkJ1ZmZlciwgcm90YXRpb25CdWZmZXIsIHNjYWxlQnVmZmVyLCBjb2xvckJ1ZmZlcl0gPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoaW5zdGFuY2VDb3VudCAqIDE2KTtcclxuICAgICAgICAgICAgICAgIFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbUZsb2F0cygwLCAwLCAwKTsgLy8gdHJhbnNsYXRpb25cclxuICAgICAgICAgICAgICAgIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXS5jb3B5RnJvbUZsb2F0cygwLCAwLCAwLCAxKTsgLy8gcm90YXRpb25cclxuICAgICAgICAgICAgICAgIFRtcFZlY3RvcnMuVmVjdG9yM1sxXS5jb3B5RnJvbUZsb2F0cygxLCAxLCAxKTsgLy8gc2NhbGVcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdGFuY2VDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25CdWZmZXIgJiYgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZih0cmFuc2xhdGlvbkJ1ZmZlciwgaSAqIDMsIFRtcFZlY3RvcnMuVmVjdG9yM1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb25CdWZmZXIgJiYgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihyb3RhdGlvbkJ1ZmZlciwgaSAqIDQsIFRtcFZlY3RvcnMuUXVhdGVybmlvblswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVCdWZmZXIgJiYgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihzY2FsZUJ1ZmZlciwgaSAqIDMsIFRtcFZlY3RvcnMuVmVjdG9yM1sxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE1hdHJpeC5Db21wb3NlVG9SZWYoVG1wVmVjdG9ycy5WZWN0b3IzWzFdLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0sIFRtcFZlY3RvcnMuVmVjdG9yM1swXSwgVG1wVmVjdG9ycy5NYXRyaXhbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBUbXBWZWN0b3JzLk1hdHJpeFswXS5jb3B5VG9BcnJheShtYXRyaWNlcywgaSAqIDE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2Ygbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyEpIHtcclxuICAgICAgICAgICAgICAgICAgICAoYmFieWxvbk1lc2ggYXMgTWVzaCkudGhpbkluc3RhbmNlU2V0QnVmZmVyKFwibWF0cml4XCIsIG1hdHJpY2VzLCAxNiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yQnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvckJ1ZmZlci5sZW5ndGggPT09IGluc3RhbmNlQ291bnQgKiAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmFieWxvbk1lc2ggYXMgTWVzaCkudGhpbkluc3RhbmNlU2V0QnVmZmVyKFwiY29sb3JcIiwgY29sb3JCdWZmZXIsIDMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbG9yQnVmZmVyLmxlbmd0aCA9PT0gaW5zdGFuY2VDb3VudCAqIDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChiYWJ5bG9uTWVzaCBhcyBNZXNoKS50aGluSW5zdGFuY2VTZXRCdWZmZXIoXCJjb2xvclwiLCBjb2xvckJ1ZmZlciwgNCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIlVuZXhwZWN0ZWQgc2l6ZSBvZiBfQ09MT1JfMCBhdHRyaWJ1dGUgZm9yIG1lc2ggXCIgKyBiYWJ5bG9uTWVzaC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uVHJhbnNmb3JtTm9kZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEVYVF9tZXNoX2dwdV9pbnN0YW5jaW5nKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9