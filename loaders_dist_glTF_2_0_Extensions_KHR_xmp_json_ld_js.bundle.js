"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_xmp_json_ld_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_xmp_json_ld.js":
/*!**************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_xmp_json_ld.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_xmp_json_ld: () => (/* binding */ KHR_xmp_json_ld)
/* harmony export */ });
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


const NAME = "KHR_xmp_json_ld";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_xmp_json_ld/README.md)
 * @since 5.0.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_xmp_json_ld {
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
        this.order = 100;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /**
     * Called after the loader state changes to LOADING.
     */
    onLoading() {
        if (this._loader.rootBabylonMesh === null) {
            return;
        }
        const xmpGltf = this._loader.gltf.extensions?.KHR_xmp_json_ld;
        const xmpNode = this._loader.gltf.asset?.extensions?.KHR_xmp_json_ld;
        if (xmpGltf && xmpNode) {
            const packet = +xmpNode.packet;
            if (xmpGltf.packets && packet < xmpGltf.packets.length) {
                this._loader.rootBabylonMesh.metadata = this._loader.rootBabylonMesh.metadata || {};
                this._loader.rootBabylonMesh.metadata.xmp = xmpGltf.packets[packet];
            }
        }
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.registerGLTFExtension)(NAME, true, (loader) => new KHR_xmp_json_ld(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX3htcF9qc29uX2xkX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBRUE7QUFhQTs7O0FBR0E7QUFDQTtBQUNBO0FBa0JBOztBQUVBO0FBQ0E7QUFwQkE7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfeG1wX2pzb25fbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUlhtcEpzb25MZF9HbHRmLCBJS0hSWG1wSnNvbkxkX05vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfeG1wX2pzb25fbGRcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBLSFJfeG1wX2pzb25fbGQgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIktIUl94bXBfanNvbl9sZFwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl94bXBfanNvbl9sZC9SRUFETUUubWQpXHJcbiAqIEBzaW5jZSA1LjAuMFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX3htcF9qc29uX2xkIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG51bWJlciB0aGF0IGRldGVybWluZXMgdGhlIG9yZGVyIHRoZSBleHRlbnNpb25zIGFyZSBhcHBsaWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3JkZXIgPSAxMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIGxvYWRlciBzdGF0ZSBjaGFuZ2VzIHRvIExPQURJTkcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlci5yb290QmFieWxvbk1lc2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeG1wR2x0ZiA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM/LktIUl94bXBfanNvbl9sZCBhcyBJS0hSWG1wSnNvbkxkX0dsdGY7XHJcbiAgICAgICAgY29uc3QgeG1wTm9kZSA9IHRoaXMuX2xvYWRlci5nbHRmLmFzc2V0Py5leHRlbnNpb25zPy5LSFJfeG1wX2pzb25fbGQgYXMgSUtIUlhtcEpzb25MZF9Ob2RlO1xyXG4gICAgICAgIGlmICh4bXBHbHRmICYmIHhtcE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFja2V0ID0gK3htcE5vZGUucGFja2V0O1xyXG4gICAgICAgICAgICBpZiAoeG1wR2x0Zi5wYWNrZXRzICYmIHBhY2tldCA8IHhtcEdsdGYucGFja2V0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRlci5yb290QmFieWxvbk1lc2gubWV0YWRhdGEgPSB0aGlzLl9sb2FkZXIucm9vdEJhYnlsb25NZXNoLm1ldGFkYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVyLnJvb3RCYWJ5bG9uTWVzaC5tZXRhZGF0YS54bXAgPSB4bXBHbHRmLnBhY2tldHNbcGFja2V0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgS0hSX3htcF9qc29uX2xkKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9