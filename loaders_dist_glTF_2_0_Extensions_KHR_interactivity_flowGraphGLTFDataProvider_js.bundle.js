"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_interactivity_flowGraphGLTFDataProvider_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.js":
/*!******************************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphGLTFDataProvider: () => (/* binding */ FlowGraphGLTFDataProvider)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * a glTF-based FlowGraph block that provides arrays with babylon object, based on the glTF tree
 * Can be used, for example, to get animation index from a glTF animation
 */
class FlowGraphGLTFDataProvider extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(config) {
        super();
        const glTF = config.glTF;
        const animationGroups = glTF.animations?.map((a) => a._babylonAnimationGroup) || [];
        this.animationGroups = this.registerDataOutput("animationGroups", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, animationGroups);
        const nodes = glTF.nodes?.map((n) => n._babylonTransformNode) || [];
        this.nodes = this.registerDataOutput("nodes", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, nodes);
    }
    getClassName() {
        return "FlowGraphGLTFDataProvider";
    }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2ludGVyYWN0aXZpdHlfZmxvd0dyYXBoR0xURkRhdGFQcm92aWRlcl9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFLQTtBQVlBOzs7QUFHQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9pbnRlcmFjdGl2aXR5L2Zsb3dHcmFwaEdMVEZEYXRhUHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBJR0xURiB9IGZyb20gXCIuLi8uLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBBbmltYXRpb25Hcm91cCB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uR3JvdXBcIjtcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XG5pbXBvcnQgeyBSaWNoVHlwZUFueSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcblxuLyoqXG4gKiBhIGNvbmZpZ3VyYXRpb24gaW50ZXJmYWNlIGZvciB0aGlzIGJsb2NrXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEdMVEZEYXRhUHJvdmlkZXJCbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiB0aGUgZ2xURiBvYmplY3QgdG8gcHJvdmlkZSBkYXRhIGZyb21cbiAgICAgKi9cbiAgICBnbFRGOiBJR0xURjtcbn1cblxuLyoqXG4gKiBhIGdsVEYtYmFzZWQgRmxvd0dyYXBoIGJsb2NrIHRoYXQgcHJvdmlkZXMgYXJyYXlzIHdpdGggYmFieWxvbiBvYmplY3QsIGJhc2VkIG9uIHRoZSBnbFRGIHRyZWVcbiAqIENhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSwgdG8gZ2V0IGFuaW1hdGlvbiBpbmRleCBmcm9tIGEgZ2xURiBhbmltYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEdMVEZEYXRhUHJvdmlkZXIgZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogT3V0cHV0OiBhbiBhcnJheSBvZiBhbmltYXRpb24gZ3JvdXBzXG4gICAgICogQ29ycmVzcG9uZHMgZGlyZWN0bHkgdG8gdGhlIGdsVEYgYW5pbWF0aW9ucyBhcnJheVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhbmltYXRpb25Hcm91cHM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEFuaW1hdGlvbkdyb3VwW10+O1xuXG4gICAgLyoqXG4gICAgICogT3V0cHV0IGFuIGFycmF5IG9mIChUcmFuc2Zvcm0pIG5vZGVzXG4gICAgICogQ29ycmVzcG9uZHMgZGlyZWN0bHkgdG8gdGhlIGdsVEYgbm9kZXMgYXJyYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgbm9kZXM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFRyYW5zZm9ybU5vZGVbXT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElGbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGdsVEYgPSBjb25maWcuZ2xURjtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBzID0gZ2xURi5hbmltYXRpb25zPy5tYXAoKGEpID0+IGEuX2JhYnlsb25BbmltYXRpb25Hcm91cCkgfHwgW107XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uR3JvdXBzID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJhbmltYXRpb25Hcm91cHNcIiwgUmljaFR5cGVBbnksIGFuaW1hdGlvbkdyb3Vwcyk7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gZ2xURi5ub2Rlcz8ubWFwKChuKSA9PiBuLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSkgfHwgW107XG4gICAgICAgIHRoaXMubm9kZXMgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcIm5vZGVzXCIsIFJpY2hUeXBlQW55LCBub2Rlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJGbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyXCI7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==