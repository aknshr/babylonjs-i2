"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphReceiveCustomEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphReceiveCustomEventBlock: () => (/* binding */ FlowGraphReceiveCustomEventBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/flowGraphCoordinator */ "../core/dist/FlowGraph/flowGraphCoordinator.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that receives a custom event.
 * It saves the event data in the data outputs, based on the provided eventData in the configuration. For example, if the event data is
 * `{ x: { type: RichTypeNumber }, y: { type: RichTypeNumber } }`, the block will have two data outputs: x and y.
 */
class FlowGraphReceiveCustomEventBlock extends _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphEventBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        this.initPriority = 1;
        // use event data to register data outputs
        for (const key in this.config.eventData) {
            this.registerDataOutput(key, this.config.eventData[key].type);
        }
    }
    _preparePendingTasks(context) {
        const observable = context.configuration.coordinator.getCustomEventObservable(this.config.eventId);
        // check if we are not exceeding the max number of events
        if (observable && observable.hasObservers() && observable.observers.length > core_FlowGraph_flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_3__.FlowGraphCoordinator.MaxEventsPerType) {
            this._reportError(context, `FlowGraphReceiveCustomEventBlock: Too many observers for event ${this.config.eventId}. Max is ${core_FlowGraph_flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_3__.FlowGraphCoordinator.MaxEventsPerType}.`);
            return;
        }
        const eventObserver = observable.add((eventData) => {
            const keys = Object.keys(eventData);
            for (const key of keys) {
                this.getDataOutput(key)?.setValue(eventData[key], context);
            }
            this._execute(context);
        });
        context._setExecutionVariable(this, "_eventObserver", eventObserver);
    }
    _cancelPendingTasks(context) {
        const observable = context.configuration.coordinator.getCustomEventObservable(this.config.eventId);
        if (observable) {
            const eventObserver = context._getExecutionVariable(this, "_eventObserver", null);
            observable.remove(eventObserver);
        }
        else {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`FlowGraphReceiveCustomEventBlock: Missing observable for event ${this.config.eventId}`);
        }
    }
    _executeEvent(_context, _payload) {
        return true;
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */, FlowGraphReceiveCustomEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFpQkE7Ozs7QUFJQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXZlbnQvZmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhFdmVudEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ29vcmRpbmF0b3IgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29vcmRpbmF0b3JcIjtcclxuLyoqXHJcbiAqIFBhcmFtZXRlcnMgdXNlZCB0byBjcmVhdGUgYSBGbG93R3JhcGhSZWNlaXZlQ3VzdG9tRXZlbnRCbG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFJlY2VpdmVDdXN0b21FdmVudEJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaWQgb2YgdGhlIGV2ZW50IHRvIHJlY2VpdmUuXHJcbiAgICAgKiBUaGlzIGV2ZW50IGlkIGlzIHVuaXF1ZSB0byB0aGUgZW52aXJvbm1lbnQgKG5vdCB0aGUgY29udGV4dCkuXHJcbiAgICAgKi9cclxuICAgIGV2ZW50SWQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWVzIG9mIHRoZSBkYXRhIG91dHB1dHMgZm9yIHRoYXQgZXZlbnQuIFNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgZXZlbnQgZGF0YSBpblxyXG4gICAgICogU2VuZEN1c3RvbUV2ZW50XHJcbiAgICAgKi9cclxuICAgIGV2ZW50RGF0YTogeyBba2V5OiBzdHJpbmddOiB7IHR5cGU6IFJpY2hUeXBlPGFueT4gfSB9O1xyXG59XHJcblxyXG4vKipcclxuICogQSBibG9jayB0aGF0IHJlY2VpdmVzIGEgY3VzdG9tIGV2ZW50LlxyXG4gKiBJdCBzYXZlcyB0aGUgZXZlbnQgZGF0YSBpbiB0aGUgZGF0YSBvdXRwdXRzLCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgZXZlbnREYXRhIGluIHRoZSBjb25maWd1cmF0aW9uLiBGb3IgZXhhbXBsZSwgaWYgdGhlIGV2ZW50IGRhdGEgaXNcclxuICogYHsgeDogeyB0eXBlOiBSaWNoVHlwZU51bWJlciB9LCB5OiB7IHR5cGU6IFJpY2hUeXBlTnVtYmVyIH0gfWAsIHRoZSBibG9jayB3aWxsIGhhdmUgdHdvIGRhdGEgb3V0cHV0czogeCBhbmQgeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhSZWNlaXZlQ3VzdG9tRXZlbnRCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV2ZW50QmxvY2sge1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGluaXRQcmlvcml0eTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYmxvY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIC8vIHVzZSBldmVudCBkYXRhIHRvIHJlZ2lzdGVyIGRhdGEgb3V0cHV0c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLmV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChrZXksIHRoaXMuY29uZmlnLmV2ZW50RGF0YVtrZXldLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3ByZXBhcmVQZW5kaW5nVGFza3MoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBjb250ZXh0LmNvbmZpZ3VyYXRpb24uY29vcmRpbmF0b3IuZ2V0Q3VzdG9tRXZlbnRPYnNlcnZhYmxlKHRoaXMuY29uZmlnLmV2ZW50SWQpO1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBub3QgZXhjZWVkaW5nIHRoZSBtYXggbnVtYmVyIG9mIGV2ZW50c1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlICYmIG9ic2VydmFibGUuaGFzT2JzZXJ2ZXJzKCkgJiYgb2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoID4gRmxvd0dyYXBoQ29vcmRpbmF0b3IuTWF4RXZlbnRzUGVyVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBgRmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2s6IFRvbyBtYW55IG9ic2VydmVycyBmb3IgZXZlbnQgJHt0aGlzLmNvbmZpZy5ldmVudElkfS4gTWF4IGlzICR7Rmxvd0dyYXBoQ29vcmRpbmF0b3IuTWF4RXZlbnRzUGVyVHlwZX0uYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50T2JzZXJ2ZXIgPSBvYnNlcnZhYmxlLmFkZCgoZXZlbnREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudERhdGEpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoa2V5KT8uc2V0VmFsdWUoZXZlbnREYXRhW2tleV0sIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGUoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJfZXZlbnRPYnNlcnZlclwiLCBldmVudE9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfY2FuY2VsUGVuZGluZ1Rhc2tzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY29udGV4dC5jb25maWd1cmF0aW9uLmNvb3JkaW5hdG9yLmdldEN1c3RvbUV2ZW50T2JzZXJ2YWJsZSh0aGlzLmNvbmZpZy5ldmVudElkKTtcclxuICAgICAgICBpZiAob2JzZXJ2YWJsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudE9ic2VydmVyID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGU8TnVsbGFibGU8T2JzZXJ2ZXI8YW55W10+Pj4odGhpcywgXCJfZXZlbnRPYnNlcnZlclwiLCBudWxsKTtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5yZW1vdmUoZXZlbnRPYnNlcnZlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgRmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2s6IE1pc3Npbmcgb2JzZXJ2YWJsZSBmb3IgZXZlbnQgJHt0aGlzLmNvbmZpZy5ldmVudElkfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2V4ZWN1dGVFdmVudChfY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgX3BheWxvYWQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5SZWNlaXZlQ3VzdG9tRXZlbnQ7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlJlY2VpdmVDdXN0b21FdmVudCwgRmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9