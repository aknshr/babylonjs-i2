"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphCancelDelayBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js":
/*!****************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCancelDelayBlock: () => (/* binding */ FlowGraphCancelDelayBlock)
/* harmony export */ });
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * This block cancels a delay that was previously scheduled.
 */
class FlowGraphCancelDelayBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        this.delayIndex = this.registerDataInput("delayIndex", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeFlowGraphInteger);
    }
    _execute(context, _callingSignal) {
        const delayIndex = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(this.delayIndex.getValue(context));
        if (delayIndex <= 0 || isNaN(delayIndex) || !isFinite(delayIndex)) {
            return this._reportError(context, "Invalid delay index");
        }
        const timers = context._getGlobalContextVariable("pendingDelays", []);
        const timer = timers[delayIndex];
        if (timer) {
            timer.dispose();
            // not removing it from the array. Disposing it will clear all of its resources
        }
        // activate the out output flow
        this.out._activateSignal(context);
    }
    getClassName() {
        return "FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */, FlowGraphCancelDelayBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaENhbmNlbERlbGF5QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoQ2FuY2VsRGVsYXlCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgQWR2YW5jZWRUaW1lciB9IGZyb20gXCIuLi8uLi8uLi8uLi9NaXNjL3RpbWVyXCI7XG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsXCI7XG5pbXBvcnQgeyBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlclwiO1xuaW1wb3J0IHsgZ2V0TnVtZXJpY1ZhbHVlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XG5cbi8qKlxuICogVGhpcyBibG9jayBjYW5jZWxzIGEgZGVsYXkgdGhhdCB3YXMgcHJldmlvdXNseSBzY2hlZHVsZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDYW5jZWxEZWxheUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIHtcbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgaW5kZXggdmFsdWUgb2YgdGhlIHNjaGVkdWxlZCBhY3RpdmF0aW9uIHRvIGJlIGNhbmNlbGxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVsYXlJbmRleDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Rmxvd0dyYXBoSW50ZWdlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuZGVsYXlJbmRleCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJkZWxheUluZGV4XCIsIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlcik7XG4gICAgfVxuXG4gICAgcHVibGljIF9leGVjdXRlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIF9jYWxsaW5nU2lnbmFsOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRlbGF5SW5kZXggPSBnZXROdW1lcmljVmFsdWUodGhpcy5kZWxheUluZGV4LmdldFZhbHVlKGNvbnRleHQpKTtcbiAgICAgICAgaWYgKGRlbGF5SW5kZXggPD0gMCB8fCBpc05hTihkZWxheUluZGV4KSB8fCAhaXNGaW5pdGUoZGVsYXlJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBcIkludmFsaWQgZGVsYXkgaW5kZXhcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXJzID0gY29udGV4dC5fZ2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwicGVuZGluZ0RlbGF5c1wiLCBbXSBhcyBBZHZhbmNlZFRpbWVyW10pO1xuICAgICAgICBjb25zdCB0aW1lciA9IHRpbWVyc1tkZWxheUluZGV4XTtcbiAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICB0aW1lci5kaXNwb3NlKCk7XG4gICAgICAgICAgICAvLyBub3QgcmVtb3ZpbmcgaXQgZnJvbSB0aGUgYXJyYXkuIERpc3Bvc2luZyBpdCB3aWxsIGNsZWFyIGFsbCBvZiBpdHMgcmVzb3VyY2VzXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWN0aXZhdGUgdGhlIG91dCBvdXRwdXQgZmxvd1xuICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5DYW5jZWxEZWxheTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5DYW5jZWxEZWxheSwgRmxvd0dyYXBoQ2FuY2VsRGVsYXlCbG9jayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=