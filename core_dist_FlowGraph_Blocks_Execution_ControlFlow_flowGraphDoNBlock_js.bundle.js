"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphDoNBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js":
/*!********************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphDoNBlock: () => (/* binding */ FlowGraphDoNBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that executes a branch a set number of times.
 */
class FlowGraphDoNBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlockWithOutSignal {
    constructor(
    /**
     * [Object] the configuration of the block
     */
    config = {}) {
        super(config);
        this.config = config;
        this.config.startIndex = config.startIndex ?? new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(0);
        this.reset = this._registerSignalInput("reset");
        this.maxExecutions = this.registerDataInput("maxExecutions", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeFlowGraphInteger);
        this.executionCount = this.registerDataOutput("executionCount", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeFlowGraphInteger, new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(0));
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            this.executionCount.setValue(this.config.startIndex, context);
        }
        else {
            const currentCountValue = this.executionCount.getValue(context);
            if (currentCountValue.value < this.maxExecutions.getValue(context).value) {
                this.executionCount.setValue(new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(currentCountValue.value + 1), context);
                this.out._activateSignal(context);
            }
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */, FlowGraphDoNBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaERvTkJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBWUE7O0FBRUE7QUFDQTtBQWNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhEb05CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhJbnRlZ2VyIH0gZnJvbSBcIi4uLy4uLy4uL0N1c3RvbVR5cGVzL2Zsb3dHcmFwaEludGVnZXJcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIERvTiBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaERvTkJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhcnQgaW5kZXggZm9yIHRoZSBjb3VudGVyLlxyXG4gICAgICovXHJcbiAgICBzdGFydEluZGV4PzogRmxvd0dyYXBoSW50ZWdlcjtcclxufVxyXG4vKipcclxuICogQSBibG9jayB0aGF0IGV4ZWN1dGVzIGEgYnJhbmNoIGEgc2V0IG51bWJlciBvZiB0aW1lcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhEb05CbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFJlc2V0cyB0aGUgY291bnRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVzZXQ6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBtYXhpbXVtIG51bWJlciBvZiB0aW1lcyB0aGUgYmxvY2sgY2FuIGJlIGV4ZWN1dGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWF4RXhlY3V0aW9uczogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Rmxvd0dyYXBoSW50ZWdlcj47XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBibG9jayBoYXMgYmVlbiBleGVjdXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGV4ZWN1dGlvbkNvdW50OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxGbG93R3JhcGhJbnRlZ2VyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBbT2JqZWN0XSB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYmxvY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoRG9OQmxvY2tDb25maWd1cmF0aW9uID0ge31cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5jb25maWcuc3RhcnRJbmRleCA9IGNvbmZpZy5zdGFydEluZGV4ID8/IG5ldyBGbG93R3JhcGhJbnRlZ2VyKDApO1xyXG4gICAgICAgIHRoaXMucmVzZXQgPSB0aGlzLl9yZWdpc3RlclNpZ25hbElucHV0KFwicmVzZXRcIik7XHJcbiAgICAgICAgdGhpcy5tYXhFeGVjdXRpb25zID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcIm1heEV4ZWN1dGlvbnNcIiwgUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyKTtcclxuICAgICAgICB0aGlzLmV4ZWN1dGlvbkNvdW50ID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJleGVjdXRpb25Db3VudFwiLCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIG5ldyBGbG93R3JhcGhJbnRlZ2VyKDApKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgY2FsbGluZ1NpZ25hbDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYWxsaW5nU2lnbmFsID09PSB0aGlzLnJlc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uQ291bnQuc2V0VmFsdWUodGhpcy5jb25maWcuc3RhcnRJbmRleCEsIGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudFZhbHVlID0gdGhpcy5leGVjdXRpb25Db3VudC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb3VudFZhbHVlLnZhbHVlIDwgdGhpcy5tYXhFeGVjdXRpb25zLmdldFZhbHVlKGNvbnRleHQpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGlvbkNvdW50LnNldFZhbHVlKG5ldyBGbG93R3JhcGhJbnRlZ2VyKGN1cnJlbnRDb3VudFZhbHVlLnZhbHVlICsgMSksIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXQuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5Eb047XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkRvTiwgRmxvd0dyYXBoRG9OQmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9