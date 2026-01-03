"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphWhileLoopBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js":
/*!**************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphWhileLoopBlock: () => (/* binding */ FlowGraphWhileLoopBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that executes a branch while a condition is true.
 */
class FlowGraphWhileLoopBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_2__.FlowGraphExecutionBlockWithOutSignal {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        this.condition = this.registerDataInput("condition", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeBoolean);
        this.executionFlow = this._registerSignalOutput("executionFlow");
        this.completed = this._registerSignalOutput("completed");
        // unregister "out" signal
        this._unregisterSignalOutput("out");
    }
    _execute(context, _callingSignal) {
        let conditionValue = this.condition.getValue(context);
        if (this.config?.doWhile && !conditionValue) {
            this.executionFlow._activateSignal(context);
        }
        let i = 0;
        while (conditionValue) {
            this.executionFlow._activateSignal(context);
            ++i;
            if (i >= FlowGraphWhileLoopBlock.MaxLoopCount) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn("FlowGraphWhileLoopBlock: Max loop count reached. Breaking.");
                break;
            }
            conditionValue = this.condition.getValue(context);
        }
        // out is not triggered - completed is triggered
        this.completed._activateSignal(context);
    }
    getClassName() {
        return "FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */;
    }
}
/**
 * The maximum number of iterations allowed in a loop.
 * This can be set to avoid an infinite loop.
 */
FlowGraphWhileLoopBlock.MaxLoopCount = 1000;
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */, FlowGraphWhileLoopBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaFdoaWxlTG9vcEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQXNCQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQXpEQTs7O0FBR0E7QUFDQTtBQXdEQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoV2hpbGVMb29wQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgd2hpbGUgbG9vcCBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFdoaWxlTG9vcEJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCB0aGUgbG9vcCBib2R5IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbGVhc3Qgb25jZS5cclxuICAgICAqL1xyXG4gICAgZG9XaGlsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGJsb2NrIHRoYXQgZXhlY3V0ZXMgYSBicmFuY2ggd2hpbGUgYSBjb25kaXRpb24gaXMgdHJ1ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhXaGlsZUxvb3BCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIGFsbG93ZWQgaW4gYSBsb29wLlxyXG4gICAgICogVGhpcyBjYW4gYmUgc2V0IHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTWF4TG9vcENvdW50ID0gMTAwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBjb25kaXRpb24gdG8gZXZhbHVhdGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBjb25kaXRpb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGJvb2xlYW4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGxvb3AgYm9keS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGV4ZWN1dGlvbkZsb3c6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGNvbXBsZXRlZCBzaWduYWwuIFRyaWdnZXJlZCB3aGVuIGNvbmRpdGlvbiBpcyBmYWxzZS5cclxuICAgICAqIE5vIG91dCBzaWduYWwgaXMgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29tcGxldGVkOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBjb25maWc/OiBJRmxvd0dyYXBoV2hpbGVMb29wQmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJjb25kaXRpb25cIiwgUmljaFR5cGVCb29sZWFuKTtcclxuICAgICAgICB0aGlzLmV4ZWN1dGlvbkZsb3cgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcImV4ZWN1dGlvbkZsb3dcIik7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcImNvbXBsZXRlZFwiKTtcclxuICAgICAgICAvLyB1bnJlZ2lzdGVyIFwib3V0XCIgc2lnbmFsXHJcbiAgICAgICAgdGhpcy5fdW5yZWdpc3RlclNpZ25hbE91dHB1dChcIm91dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgX2NhbGxpbmdTaWduYWw6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgY29uZGl0aW9uVmFsdWUgPSB0aGlzLmNvbmRpdGlvbi5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICBpZiAodGhpcy5jb25maWc/LmRvV2hpbGUgJiYgIWNvbmRpdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uRmxvdy5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB3aGlsZSAoY29uZGl0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRpb25GbG93Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBGbG93R3JhcGhXaGlsZUxvb3BCbG9jay5NYXhMb29wQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiRmxvd0dyYXBoV2hpbGVMb29wQmxvY2s6IE1heCBsb29wIGNvdW50IHJlYWNoZWQuIEJyZWFraW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlID0gdGhpcy5jb25kaXRpb24uZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG91dCBpcyBub3QgdHJpZ2dlcmVkIC0gY29tcGxldGVkIGlzIHRyaWdnZXJlZFxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuV2hpbGVMb29wO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuV2hpbGVMb29wLCBGbG93R3JhcGhXaGlsZUxvb3BCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=