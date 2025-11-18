"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphTransformCoordinatesSystemBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js":
/*!**************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphTransformCoordinatesSystemBlock: () => (/* binding */ FlowGraphTransformCoordinatesSystemBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * This blocks transforms a vector from one coordinate system to another.
 */
class FlowGraphTransformCoordinatesSystemBlock extends _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    /**
     * Creates a new FlowGraphCoordinateTransformBlock
     * @param config optional configuration for this block
     */
    constructor(config) {
        super(config);
        this.sourceSystem = this.registerDataInput("sourceSystem", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.destinationSystem = this.registerDataInput("destinationSystem", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.inputCoordinates = this.registerDataInput("inputCoordinates", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
        this.outputCoordinates = this.registerDataOutput("outputCoordinates", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
    }
    _updateOutputs(_context) {
        const sourceSystemValue = this.sourceSystem.getValue(_context);
        const destinationSystemValue = this.destinationSystem.getValue(_context);
        const inputCoordinatesValue = this.inputCoordinates.getValue(_context);
        // takes coordinates from source space to world space
        const sourceWorld = sourceSystemValue.getWorldMatrix();
        // takes coordinates from destination space to world space
        const destinationWorld = destinationSystemValue.getWorldMatrix();
        const destinationWorldInverse = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[0].copyFrom(destinationWorld);
        // takes coordinates from world space to destination space
        destinationWorldInverse.invert();
        const sourceToDestination = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Matrix[1];
        // takes coordinates from source space to world space to destination space
        destinationWorldInverse.multiplyToRef(sourceWorld, sourceToDestination);
        const outputCoordinatesValue = this.outputCoordinates.getValue(_context);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformCoordinatesToRef(inputCoordinatesValue, sourceToDestination, outputCoordinatesValue);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphTransformCoordinatesSystemBlock" /* FlowGraphBlockNames.TransformCoordinatesSystem */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphTransformCoordinatesSystemBlock" /* FlowGraphBlockNames.TransformCoordinatesSystem */, FlowGraphTransformCoordinatesSystemBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc1N5c3RlbUJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUdBO0FBR0E7O0FBRUE7QUFDQTtBQWtCQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoVHJhbnNmb3JtQ29vcmRpbmF0ZXNTeXN0ZW1CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZVZlY3RvcjMgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IFRtcFZlY3RvcnMsIFZlY3RvcjMgfSBmcm9tIFwiLi4vLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcIi4uLy4uLy4uL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgYmxvY2tzIHRyYW5zZm9ybXMgYSB2ZWN0b3IgZnJvbSBvbmUgY29vcmRpbmF0ZSBzeXN0ZW0gdG8gYW5vdGhlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc1N5c3RlbUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgc291cmNlIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc291cmNlU3lzdGVtOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUcmFuc2Zvcm1Ob2RlPjtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIGRlc3RpbmF0aW9uIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVzdGluYXRpb25TeXN0ZW06IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFRyYW5zZm9ybU5vZGU+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgY29vcmRpbmF0ZXMgdG8gdHJhbnNmb3JtLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5wdXRDb29yZGluYXRlczogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VmVjdG9yMz47XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgdHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvdXRwdXRDb29yZGluYXRlczogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VmVjdG9yMz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEZsb3dHcmFwaENvb3JkaW5hdGVUcmFuc2Zvcm1CbG9ja1xyXG4gICAgICogQHBhcmFtIGNvbmZpZyBvcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGlzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZVN5c3RlbSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJzb3VyY2VTeXN0ZW1cIiwgUmljaFR5cGVBbnkpO1xyXG4gICAgICAgIHRoaXMuZGVzdGluYXRpb25TeXN0ZW0gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiZGVzdGluYXRpb25TeXN0ZW1cIiwgUmljaFR5cGVBbnkpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRDb29yZGluYXRlcyA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJpbnB1dENvb3JkaW5hdGVzXCIsIFJpY2hUeXBlVmVjdG9yMyk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRDb29yZGluYXRlcyA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwib3V0cHV0Q29vcmRpbmF0ZXNcIiwgUmljaFR5cGVWZWN0b3IzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoX2NvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VTeXN0ZW1WYWx1ZSA9IHRoaXMuc291cmNlU3lzdGVtLmdldFZhbHVlKF9jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvblN5c3RlbVZhbHVlID0gdGhpcy5kZXN0aW5hdGlvblN5c3RlbS5nZXRWYWx1ZShfY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb29yZGluYXRlc1ZhbHVlID0gdGhpcy5pbnB1dENvb3JkaW5hdGVzLmdldFZhbHVlKF9jb250ZXh0KTtcclxuXHJcbiAgICAgICAgLy8gdGFrZXMgY29vcmRpbmF0ZXMgZnJvbSBzb3VyY2Ugc3BhY2UgdG8gd29ybGQgc3BhY2VcclxuICAgICAgICBjb25zdCBzb3VyY2VXb3JsZCA9IHNvdXJjZVN5c3RlbVZhbHVlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgLy8gdGFrZXMgY29vcmRpbmF0ZXMgZnJvbSBkZXN0aW5hdGlvbiBzcGFjZSB0byB3b3JsZCBzcGFjZVxyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uV29ybGQgPSBkZXN0aW5hdGlvblN5c3RlbVZhbHVlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25Xb3JsZEludmVyc2UgPSBUbXBWZWN0b3JzLk1hdHJpeFswXS5jb3B5RnJvbShkZXN0aW5hdGlvbldvcmxkKTtcclxuICAgICAgICAvLyB0YWtlcyBjb29yZGluYXRlcyBmcm9tIHdvcmxkIHNwYWNlIHRvIGRlc3RpbmF0aW9uIHNwYWNlXHJcbiAgICAgICAgZGVzdGluYXRpb25Xb3JsZEludmVyc2UuaW52ZXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZVRvRGVzdGluYXRpb24gPSBUbXBWZWN0b3JzLk1hdHJpeFsxXTtcclxuICAgICAgICAvLyB0YWtlcyBjb29yZGluYXRlcyBmcm9tIHNvdXJjZSBzcGFjZSB0byB3b3JsZCBzcGFjZSB0byBkZXN0aW5hdGlvbiBzcGFjZVxyXG4gICAgICAgIGRlc3RpbmF0aW9uV29ybGRJbnZlcnNlLm11bHRpcGx5VG9SZWYoc291cmNlV29ybGQsIHNvdXJjZVRvRGVzdGluYXRpb24pO1xyXG4gICAgICAgIGNvbnN0IG91dHB1dENvb3JkaW5hdGVzVmFsdWUgPSB0aGlzLm91dHB1dENvb3JkaW5hdGVzLmdldFZhbHVlKF9jb250ZXh0KTtcclxuXHJcbiAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Db29yZGluYXRlc1RvUmVmKGlucHV0Q29vcmRpbmF0ZXNWYWx1ZSwgc291cmNlVG9EZXN0aW5hdGlvbiwgb3V0cHV0Q29vcmRpbmF0ZXNWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5UcmFuc2Zvcm1Db29yZGluYXRlc1N5c3RlbTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNTeXN0ZW0sIEZsb3dHcmFwaFRyYW5zZm9ybUNvb3JkaW5hdGVzU3lzdGVtQmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=