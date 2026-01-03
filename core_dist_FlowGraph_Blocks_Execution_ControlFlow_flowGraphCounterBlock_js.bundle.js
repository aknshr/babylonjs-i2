"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphCounterBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js":
/*!************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCallCounterBlock: () => (/* binding */ FlowGraphCallCounterBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A block that counts the number of times it has been called.
 * Afterwards it activates its out signal.
 */
class FlowGraphCallCounterBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        this.count = this.registerDataOutput("count", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeNumber);
        this.reset = this._registerSignalInput("reset");
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            context._setExecutionVariable(this, "count", 0);
            this.count.setValue(0, context);
            return;
        }
        const countValue = context._getExecutionVariable(this, "count", 0) + 1;
        context._setExecutionVariable(this, "count", countValue);
        this.count.setValue(countValue, context);
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphCallCounterBlock" /* FlowGraphBlockNames.CallCounter */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphCallCounterBlock" /* FlowGraphBlockNames.CallCounter */, FlowGraphCallCounterBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaENvdW50ZXJCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaENvdW50ZXJCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlTnVtYmVyIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xyXG4vKipcclxuICogQSBibG9jayB0aGF0IGNvdW50cyB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0IGhhcyBiZWVuIGNhbGxlZC5cclxuICogQWZ0ZXJ3YXJkcyBpdCBhY3RpdmF0ZXMgaXRzIG91dCBzaWduYWwuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ2FsbENvdW50ZXJCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBibG9jayBoYXMgYmVlbiBjYWxsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBjb3VudDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogUmVzZXRzIHRoZSBjb3VudGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVzZXQ6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImNvdW50XCIsIFJpY2hUeXBlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLnJlc2V0ID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxJbnB1dChcInJlc2V0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBjYWxsaW5nU2lnbmFsOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNhbGxpbmdTaWduYWwgPT09IHRoaXMucmVzZXQpIHtcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjb3VudFwiLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudC5zZXRWYWx1ZSgwLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb3VudFZhbHVlID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjb3VudFwiLCAwKSArIDE7XHJcblxyXG4gICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiY291bnRcIiwgY291bnRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jb3VudC5zZXRWYWx1ZShjb3VudFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNhbGxDb3VudGVyO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5DYWxsQ291bnRlciwgRmxvd0dyYXBoQ2FsbENvdW50ZXJCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=