"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_node_visibility_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_node_visibility.js":
/*!******************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_node_visibility.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_node_visibility: () => (/* binding */ KHR_node_visibility)
/* harmony export */ });
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var _objectModelMapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const NAME = "KHR_node_visibility";
// object model extension for visibility
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_1__.AddObjectAccessorToKey)("/nodes/{}/extensions/KHR_node_visibility/visible", {
    get: (node) => {
        const tn = node._babylonTransformNode;
        if (tn && tn.isVisible !== undefined) {
            return tn.isVisible;
        }
        return true;
    },
    set: (value, node) => {
        node._primitiveBabylonMeshes?.forEach((mesh) => {
            mesh.inheritVisibility = true;
        });
        if (node._babylonTransformNode) {
            node._babylonTransformNode.isVisible = value;
        }
        node._primitiveBabylonMeshes?.forEach((mesh) => {
            mesh.isVisible = value;
        });
    },
    getTarget: (node) => node._babylonTransformNode,
    getPropertyName: [() => "isVisible"],
    type: "boolean",
});
/**
 * Loader extension for KHR_node_visibility
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_node_visibility {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = loader.isExtensionUsed(NAME);
    }
    onReady() {
        if (!this._loader) {
            return;
        }
        const nodes = this._loader.gltf.nodes;
        if (nodes) {
            for (const node of nodes) {
                const babylonTransformNode = node._babylonTransformNode;
                if (babylonTransformNode) {
                    babylonTransformNode.inheritVisibility = true;
                    if (node.extensions && node.extensions.KHR_node_visibility && node.extensions.KHR_node_visibility.visible === false) {
                        babylonTransformNode.isVisible = false;
                    }
                }
            }
        }
    }
    dispose() {
        delete this._loader;
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.registerGLTFExtension)(NAME, true, (loader) => new KHR_node_visibility(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX25vZGVfdmlzaWJpbGl0eV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFFQTtBQUVBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBYUE7O0FBRUE7QUFDQTtBQWZBOztBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9ub2RlX3Zpc2liaWxpdHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XG5pbXBvcnQgdHlwZSB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgQWRkT2JqZWN0QWNjZXNzb3JUb0tleSB9IGZyb20gXCIuL29iamVjdE1vZGVsTWFwcGluZ1wiO1xuXG5jb25zdCBOQU1FID0gXCJLSFJfbm9kZV92aXNpYmlsaXR5XCI7XG5cbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgS0hSX25vZGVfdmlzaWJpbGl0eSBleHRlbnNpb24uXG4gICAgICAgICAqL1xuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cbiAgICAgICAgW1wiS0hSX25vZGVfdmlzaWJpbGl0eVwiXToge307XG4gICAgfVxufVxuXG4vLyBvYmplY3QgbW9kZWwgZXh0ZW5zaW9uIGZvciB2aXNpYmlsaXR5XG5BZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL25vZGVzL3t9L2V4dGVuc2lvbnMvS0hSX25vZGVfdmlzaWJpbGl0eS92aXNpYmxlXCIsIHtcbiAgICBnZXQ6IChub2RlOiBJTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0biA9IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIGFueTtcbiAgICAgICAgaWYgKHRuICYmIHRuLmlzVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG4uaXNWaXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgc2V0OiAodmFsdWU6IGJvb2xlYW4sIG5vZGU6IElOb2RlKSA9PiB7XG4gICAgICAgIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXM/LmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgIG1lc2guaW5oZXJpdFZpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XG4gICAgICAgICAgICAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgQWJzdHJhY3RNZXNoKS5pc1Zpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzPy5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICAgICAgICBtZXNoLmlzVmlzaWJsZSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFRhcmdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSxcbiAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImlzVmlzaWJsZVwiXSxcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbn0pO1xuXG4vKipcbiAqIExvYWRlciBleHRlbnNpb24gZm9yIEtIUl9ub2RlX3Zpc2liaWxpdHlcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGNsYXNzIEtIUl9ub2RlX3Zpc2liaWxpdHkgaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9sb2FkZXI/OiBHTFRGTG9hZGVyO1xuXG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZWFkeSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb2FkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fbG9hZGVyLmdsdGYubm9kZXM7XG4gICAgICAgIGlmIChub2Rlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblRyYW5zZm9ybU5vZGUgPSBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvblRyYW5zZm9ybU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUuaW5oZXJpdFZpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5leHRlbnNpb25zICYmIG5vZGUuZXh0ZW5zaW9ucy5LSFJfbm9kZV92aXNpYmlsaXR5ICYmIG5vZGUuZXh0ZW5zaW9ucy5LSFJfbm9kZV92aXNpYmlsaXR5LnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fbG9hZGVyO1xuICAgIH1cbn1cblxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEtIUl9ub2RlX3Zpc2liaWxpdHkobG9hZGVyKSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9