"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphSetDelayBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js":
/*!*************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSetDelayBlock: () => (/* binding */ FlowGraphSetDelayBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphAsyncExecutionBlock */ "../core/dist/FlowGraph/flowGraphAsyncExecutionBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/timer */ "../core/dist/Misc/timer.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Block that sets a delay in seconds before activating the output signal.
 */
class FlowGraphSetDelayBlock extends _flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphAsyncExecutionBlock {
    constructor(config) {
        super(config);
        this.cancel = this._registerSignalInput("cancel");
        this.duration = this.registerDataInput("duration", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.lastDelayIndex = this.registerDataOutput("lastDelayIndex", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_5__.FlowGraphInteger(-1));
    }
    _preparePendingTasks(context) {
        const duration = this.duration.getValue(context);
        if (duration < 0 || isNaN(duration) || !isFinite(duration)) {
            return this._reportError(context, "Invalid duration in SetDelay block");
        }
        // active delays are global to the context
        const activeDelays = context._getGlobalContextVariable("activeDelays", 0);
        if (activeDelays >= FlowGraphSetDelayBlock.MaxParallelDelayCount) {
            return this._reportError(context, "Max parallel delays reached");
        }
        // get the last global delay index
        const lastDelayIndex = context._getGlobalContextVariable("lastDelayIndex", -1);
        // these are block-specific and not global
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        const scene = context.configuration.scene;
        const timer = new _Misc_timer__WEBPACK_IMPORTED_MODULE_2__.AdvancedTimer({
            timeout: duration * 1000, // duration is in seconds
            contextObservable: scene.onBeforeRenderObservable,
            onEnded: () => this._onEnded(timer, context),
        });
        timer.start();
        const newIndex = lastDelayIndex + 1;
        this.lastDelayIndex.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_5__.FlowGraphInteger(newIndex), context);
        context._setGlobalContextVariable("lastDelayIndex", newIndex);
        timers[newIndex] = timer;
        context._setExecutionVariable(this, "pendingDelays", timers);
        this._updateGlobalTimers(context);
    }
    _cancelPendingTasks(context) {
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        for (const timer of timers) {
            timer?.dispose();
        }
        context._deleteExecutionVariable(this, "pendingDelays");
        this.lastDelayIndex.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_5__.FlowGraphInteger(-1), context);
        this._updateGlobalTimers(context);
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.cancel) {
            this._cancelPendingTasks(context);
            return;
        }
        else {
            this._preparePendingTasks(context);
            this.out._activateSignal(context);
        }
    }
    getClassName() {
        return "FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */;
    }
    _onEnded(timer, context) {
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        const index = timers.indexOf(timer);
        if (index !== -1) {
            timers.splice(index, 1);
        }
        else {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn("FlowGraphTimerBlock: Timer ended but was not found in the running timers list");
        }
        context._removePendingBlock(this);
        this.done._activateSignal(context);
        this._updateGlobalTimers(context);
    }
    _updateGlobalTimers(context) {
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        const globalTimers = context._getGlobalContextVariable("pendingDelays", []);
        // there should NEVER be the same index in the global and local timers, unless they are equal
        for (let i = 0; i < timers.length; i++) {
            if (!timers[i]) {
                continue;
            }
            const timer = timers[i];
            if (globalTimers[i] && globalTimers[i] !== timer) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn("FlowGraphTimerBlock: Timer ended but was not found in the running timers list");
            }
            else {
                globalTimers[i] = timer;
            }
        }
        context._setGlobalContextVariable("pendingDelays", globalTimers);
    }
}
/**
 * The maximum number of parallel delays that can be set per node.
 */
FlowGraphSetDelayBlock.MaxParallelDelayCount = 100;
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */, FlowGraphSetDelayBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaFNldERlbGF5QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoSEE7O0FBRUE7QUFDQTtBQWdIQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoU2V0RGVsYXlCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgUmljaFR5cGVOdW1iZXIgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgQWR2YW5jZWRUaW1lciB9IGZyb20gXCIuLi8uLi8uLi8uLi9NaXNjL3RpbWVyXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy9sb2dnZXJcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhJbnRlZ2VyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL0N1c3RvbVR5cGVzL2Zsb3dHcmFwaEludGVnZXJcIjtcblxuLyoqXG4gKiBCbG9jayB0aGF0IHNldHMgYSBkZWxheSBpbiBzZWNvbmRzIGJlZm9yZSBhY3RpdmF0aW5nIHRoZSBvdXRwdXQgc2lnbmFsLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoU2V0RGVsYXlCbG9jayBleHRlbmRzIEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sge1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBwYXJhbGxlbCBkZWxheXMgdGhhdCBjYW4gYmUgc2V0IHBlciBub2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTWF4UGFyYWxsZWxEZWxheUNvdW50ID0gMTAwO1xuICAgIC8qKlxuICAgICAqIElucHV0IHNpZ25hbDogSWYgYWN0aXZhdGVkIHRoZSBkZWxheWVkIGFjdGl2YXRpb25zIHNldCBieSB0aGlzIGJsb2NrIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGNhbmNlbDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBkdXJhdGlvbiBvZiB0aGUgZGVsYXkgaW4gc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZHVyYXRpb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGxhc3QgZGVsYXkgaW5kZXggdGhhdCB3YXMgc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBsYXN0RGVsYXlJbmRleDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Rmxvd0dyYXBoSW50ZWdlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuY2FuY2VsID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxJbnB1dChcImNhbmNlbFwiKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJkdXJhdGlvblwiLCBSaWNoVHlwZU51bWJlcik7XG4gICAgICAgIHRoaXMubGFzdERlbGF5SW5kZXggPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImxhc3REZWxheUluZGV4XCIsIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgbmV3IEZsb3dHcmFwaEludGVnZXIoLTEpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3ByZXBhcmVQZW5kaW5nVGFza3MoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24uZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGlmIChkdXJhdGlvbiA8IDAgfHwgaXNOYU4oZHVyYXRpb24pIHx8ICFpc0Zpbml0ZShkdXJhdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBcIkludmFsaWQgZHVyYXRpb24gaW4gU2V0RGVsYXkgYmxvY2tcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3RpdmUgZGVsYXlzIGFyZSBnbG9iYWwgdG8gdGhlIGNvbnRleHRcbiAgICAgICAgY29uc3QgYWN0aXZlRGVsYXlzOiBudW1iZXIgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJhY3RpdmVEZWxheXNcIiwgMCk7XG4gICAgICAgIGlmIChhY3RpdmVEZWxheXMgPj0gRmxvd0dyYXBoU2V0RGVsYXlCbG9jay5NYXhQYXJhbGxlbERlbGF5Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBcIk1heCBwYXJhbGxlbCBkZWxheXMgcmVhY2hlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgdGhlIGxhc3QgZ2xvYmFsIGRlbGF5IGluZGV4XG4gICAgICAgIGNvbnN0IGxhc3REZWxheUluZGV4OiBudW1iZXIgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJsYXN0RGVsYXlJbmRleFwiLCAtMSk7XG5cbiAgICAgICAgLy8gdGhlc2UgYXJlIGJsb2NrLXNwZWNpZmljIGFuZCBub3QgZ2xvYmFsXG4gICAgICAgIGNvbnN0IHRpbWVycyA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwicGVuZGluZ0RlbGF5c1wiLCBbXSBhcyBBZHZhbmNlZFRpbWVyW10pO1xuICAgICAgICBjb25zdCBzY2VuZSA9IGNvbnRleHQuY29uZmlndXJhdGlvbi5zY2VuZTtcbiAgICAgICAgY29uc3QgdGltZXI6IEFkdmFuY2VkVGltZXIgPSBuZXcgQWR2YW5jZWRUaW1lcih7XG4gICAgICAgICAgICB0aW1lb3V0OiBkdXJhdGlvbiAqIDEwMDAsIC8vIGR1cmF0aW9uIGlzIGluIHNlY29uZHNcbiAgICAgICAgICAgIGNvbnRleHRPYnNlcnZhYmxlOiBzY2VuZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUsXG4gICAgICAgICAgICBvbkVuZGVkOiAoKSA9PiB0aGlzLl9vbkVuZGVkKHRpbWVyLCBjb250ZXh0KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gbGFzdERlbGF5SW5kZXggKyAxO1xuICAgICAgICB0aGlzLmxhc3REZWxheUluZGV4LnNldFZhbHVlKG5ldyBGbG93R3JhcGhJbnRlZ2VyKG5ld0luZGV4KSwgY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuX3NldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImxhc3REZWxheUluZGV4XCIsIG5ld0luZGV4KTtcblxuICAgICAgICB0aW1lcnNbbmV3SW5kZXhdID0gdGltZXI7XG4gICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwicGVuZGluZ0RlbGF5c1wiLCB0aW1lcnMpO1xuICAgICAgICB0aGlzLl91cGRhdGVHbG9iYWxUaW1lcnMoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF9jYW5jZWxQZW5kaW5nVGFza3MoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aW1lcnMgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcInBlbmRpbmdEZWxheXNcIiwgW10gYXMgQWR2YW5jZWRUaW1lcltdKTtcbiAgICAgICAgZm9yIChjb25zdCB0aW1lciBvZiB0aW1lcnMpIHtcbiAgICAgICAgICAgIHRpbWVyPy5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5fZGVsZXRlRXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJwZW5kaW5nRGVsYXlzXCIpO1xuICAgICAgICB0aGlzLmxhc3REZWxheUluZGV4LnNldFZhbHVlKG5ldyBGbG93R3JhcGhJbnRlZ2VyKC0xKSwgY29udGV4dCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUdsb2JhbFRpbWVycyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgY2FsbGluZ1NpZ25hbDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoY2FsbGluZ1NpZ25hbCA9PT0gdGhpcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbFBlbmRpbmdUYXNrcyhjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXBhcmVQZW5kaW5nVGFza3MoY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlNldERlbGF5O1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uRW5kZWQodGltZXI6IEFkdmFuY2VkVGltZXIsIGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgdGltZXJzID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJwZW5kaW5nRGVsYXlzXCIsIFtdIGFzIEFkdmFuY2VkVGltZXJbXSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGltZXJzLmluZGV4T2YodGltZXIpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aW1lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiRmxvd0dyYXBoVGltZXJCbG9jazogVGltZXIgZW5kZWQgYnV0IHdhcyBub3QgZm91bmQgaW4gdGhlIHJ1bm5pbmcgdGltZXJzIGxpc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5fcmVtb3ZlUGVuZGluZ0Jsb2NrKHRoaXMpO1xuICAgICAgICB0aGlzLmRvbmUuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUdsb2JhbFRpbWVycyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVHbG9iYWxUaW1lcnMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xuICAgICAgICBjb25zdCB0aW1lcnMgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcInBlbmRpbmdEZWxheXNcIiwgW10gYXMgQWR2YW5jZWRUaW1lcltdKTtcbiAgICAgICAgY29uc3QgZ2xvYmFsVGltZXJzID0gY29udGV4dC5fZ2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwicGVuZGluZ0RlbGF5c1wiLCBbXSBhcyBBZHZhbmNlZFRpbWVyW10pO1xuICAgICAgICAvLyB0aGVyZSBzaG91bGQgTkVWRVIgYmUgdGhlIHNhbWUgaW5kZXggaW4gdGhlIGdsb2JhbCBhbmQgbG9jYWwgdGltZXJzLCB1bmxlc3MgdGhleSBhcmUgZXF1YWxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghdGltZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHRpbWVyc1tpXTtcbiAgICAgICAgICAgIGlmIChnbG9iYWxUaW1lcnNbaV0gJiYgZ2xvYmFsVGltZXJzW2ldICE9PSB0aW1lcikge1xuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiRmxvd0dyYXBoVGltZXJCbG9jazogVGltZXIgZW5kZWQgYnV0IHdhcyBub3QgZm91bmQgaW4gdGhlIHJ1bm5pbmcgdGltZXJzIGxpc3RcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsb2JhbFRpbWVyc1tpXSA9IHRpbWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuX3NldEdsb2JhbENvbnRleHRWYXJpYWJsZShcInBlbmRpbmdEZWxheXNcIiwgZ2xvYmFsVGltZXJzKTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXREZWxheSwgRmxvd0dyYXBoU2V0RGVsYXlCbG9jayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=