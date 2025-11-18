"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphThrottleBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js":
/*!*************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphThrottleBlock: () => (/* binding */ FlowGraphThrottleBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A block that throttles the execution of its output flow.
 */
class FlowGraphThrottleBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        this.reset = this._registerSignalInput("reset");
        this.duration = this.registerDataInput("duration", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeNumber);
        this.lastRemainingTime = this.registerDataOutput("lastRemainingTime", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeNumber, NaN);
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            this.lastRemainingTime.setValue(NaN, context);
            context._setExecutionVariable(this, "lastRemainingTime", NaN);
            context._setExecutionVariable(this, "timestamp", 0);
            return;
        }
        // in seconds
        const durationValue = this.duration.getValue(context);
        if (durationValue <= 0 || isNaN(durationValue) || !isFinite(durationValue)) {
            return this._reportError(context, "Invalid duration in Throttle block");
        }
        const lastRemainingTime = context._getExecutionVariable(this, "lastRemainingTime", NaN);
        // Using Date.now() to get ms since epoch. not using performance.now() because its precision is not needed here
        const currentTime = Date.now();
        if (isNaN(lastRemainingTime)) {
            this.lastRemainingTime.setValue(0, context);
            context._setExecutionVariable(this, "lastRemainingTime", 0);
            context._setExecutionVariable(this, "timestamp", currentTime);
            // according to glTF interactivity specs
            return this.out._activateSignal(context);
        }
        else {
            const elapsedTime = currentTime - context._getExecutionVariable(this, "timestamp", 0);
            // duration is in seconds, so we need to multiply by 1000
            const durationInMs = durationValue * 1000;
            if (durationInMs <= elapsedTime) {
                this.lastRemainingTime.setValue(0, context);
                context._setExecutionVariable(this, "lastRemainingTime", 0);
                context._setExecutionVariable(this, "timestamp", currentTime);
                return this.out._activateSignal(context);
            }
            else {
                const remainingTime = durationInMs - elapsedTime;
                // output is in seconds
                this.lastRemainingTime.setValue(remainingTime / 1000, context);
                context._setExecutionVariable(this, "lastRemainingTime", remainingTime);
            }
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */, FlowGraphThrottleBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaFRocm90dGxlQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaFRocm90dGxlQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZU51bWJlciB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbFwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCB0aHJvdHRsZXMgdGhlIGV4ZWN1dGlvbiBvZiBpdHMgb3V0cHV0IGZsb3cuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoVGhyb3R0bGVCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBkdXJhdGlvbiBvZiB0aGUgdGhyb3R0bGUsIGluIHNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBkdXJhdGlvbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogUmVzZXRzIHRoZSB0aHJvdHRsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHJlc2V0OiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHRpbWUgcmVtYWluaW5nIGJlZm9yZSB0aGUgdGhyb3R0bGUgaXMgdHJpZ2dlcmluZyBhZ2FpbiwgaW4gc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGxhc3RSZW1haW5pbmdUaW1lOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMucmVzZXQgPSB0aGlzLl9yZWdpc3RlclNpZ25hbElucHV0KFwicmVzZXRcIik7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJkdXJhdGlvblwiLCBSaWNoVHlwZU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5sYXN0UmVtYWluaW5nVGltZSA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwibGFzdFJlbWFpbmluZ1RpbWVcIiwgUmljaFR5cGVOdW1iZXIsIE5hTik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgY2FsbGluZ1NpZ25hbDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYWxsaW5nU2lnbmFsID09PSB0aGlzLnJlc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFJlbWFpbmluZ1RpbWUuc2V0VmFsdWUoTmFOLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJsYXN0UmVtYWluaW5nVGltZVwiLCBOYU4pO1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcInRpbWVzdGFtcFwiLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbiBzZWNvbmRzXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb25WYWx1ZSA9IHRoaXMuZHVyYXRpb24uZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGR1cmF0aW9uVmFsdWUgPD0gMCB8fCBpc05hTihkdXJhdGlvblZhbHVlKSB8fCAhaXNGaW5pdGUoZHVyYXRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcG9ydEVycm9yKGNvbnRleHQsIFwiSW52YWxpZCBkdXJhdGlvbiBpbiBUaHJvdHRsZSBibG9ja1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdFJlbWFpbmluZ1RpbWUgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImxhc3RSZW1haW5pbmdUaW1lXCIsIE5hTik7XHJcbiAgICAgICAgLy8gVXNpbmcgRGF0ZS5ub3coKSB0byBnZXQgbXMgc2luY2UgZXBvY2guIG5vdCB1c2luZyBwZXJmb3JtYW5jZS5ub3coKSBiZWNhdXNlIGl0cyBwcmVjaXNpb24gaXMgbm90IG5lZWRlZCBoZXJlXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChpc05hTihsYXN0UmVtYWluaW5nVGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UmVtYWluaW5nVGltZS5zZXRWYWx1ZSgwLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJsYXN0UmVtYWluaW5nVGltZVwiLCAwKTtcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJ0aW1lc3RhbXBcIiwgY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICAvLyBhY2NvcmRpbmcgdG8gZ2xURiBpbnRlcmFjdGl2aXR5IHNwZWNzXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBjdXJyZW50VGltZSAtIGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwidGltZXN0YW1wXCIsIDApO1xyXG4gICAgICAgICAgICAvLyBkdXJhdGlvbiBpcyBpbiBzZWNvbmRzLCBzbyB3ZSBuZWVkIHRvIG11bHRpcGx5IGJ5IDEwMDBcclxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb25Jbk1zID0gZHVyYXRpb25WYWx1ZSAqIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbkluTXMgPD0gZWxhcHNlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFJlbWFpbmluZ1RpbWUuc2V0VmFsdWUoMCwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImxhc3RSZW1haW5pbmdUaW1lXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJ0aW1lc3RhbXBcIiwgY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBkdXJhdGlvbkluTXMgLSBlbGFwc2VkVGltZTtcclxuICAgICAgICAgICAgICAgIC8vIG91dHB1dCBpcyBpbiBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSZW1haW5pbmdUaW1lLnNldFZhbHVlKHJlbWFpbmluZ1RpbWUgLyAxMDAwLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwibGFzdFJlbWFpbmluZ1RpbWVcIiwgcmVtYWluaW5nVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuVGhyb3R0bGU7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlRocm90dGxlLCBGbG93R3JhcGhUaHJvdHRsZUJsb2NrKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9