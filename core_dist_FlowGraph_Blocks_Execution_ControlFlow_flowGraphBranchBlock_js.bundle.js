"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphBranchBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js":
/*!***********************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphBranchBlock: () => (/* binding */ FlowGraphBranchBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A block that evaluates a condition and activates one of two branches.
 */
class FlowGraphBranchBlock extends _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlock {
    constructor(config) {
        super(config);
        this.condition = this.registerDataInput("condition", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeBoolean);
        this.onTrue = this._registerSignalOutput("onTrue");
        this.onFalse = this._registerSignalOutput("onFalse");
    }
    _execute(context) {
        if (this.condition.getValue(context)) {
            this.onTrue._activateSignal(context);
        }
        else {
            this.onFalse._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */, FlowGraphBranchBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaEJyYW5jaEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBSUE7O0FBRUE7QUFDQTtBQWNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaEJyYW5jaEJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGJsb2NrIHRoYXQgZXZhbHVhdGVzIGEgY29uZGl0aW9uIGFuZCBhY3RpdmF0ZXMgb25lIG9mIHR3byBicmFuY2hlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhCcmFuY2hCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIGNvbmRpdGlvbiB0byBldmFsdWF0ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbmRpdGlvbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Ym9vbGVhbj47XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgYnJhbmNoIHRvIGV4ZWN1dGUgaWYgdGhlIGNvbmRpdGlvbiBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25UcnVlOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGJyYW5jaCB0byBleGVjdXRlIGlmIHRoZSBjb25kaXRpb24gaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkZhbHNlOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJjb25kaXRpb25cIiwgUmljaFR5cGVCb29sZWFuKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblRydWUgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcIm9uVHJ1ZVwiKTtcclxuICAgICAgICB0aGlzLm9uRmFsc2UgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcIm9uRmFsc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leGVjdXRlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uZ2V0VmFsdWUoY29udGV4dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRydWUuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25GYWxzZS5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5CcmFuY2g7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkJyYW5jaCwgRmxvd0dyYXBoQnJhbmNoQmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9