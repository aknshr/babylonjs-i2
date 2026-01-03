"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphDebounceBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js":
/*!*************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphDebounceBlock: () => (/* binding */ FlowGraphDebounceBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_FlowGraph_flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * This block debounces the execution of a input, i.e. ensures that the input is only executed once every X times
 */
class FlowGraphDebounceBlock extends core_FlowGraph_flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        this.count = this.registerDataInput("count", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeNumber);
        this.reset = this._registerSignalInput("reset");
        this.currentCount = this.registerDataOutput("currentCount", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeNumber);
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            context._setExecutionVariable(this, "debounceCount", 0);
            return;
        }
        const count = this.count.getValue(context);
        const currentCount = context._getExecutionVariable(this, "debounceCount", 0);
        const newCount = currentCount + 1;
        this.currentCount.setValue(newCount, context);
        context._setExecutionVariable(this, "debounceCount", newCount);
        if (newCount >= count) {
            this.out._activateSignal(context);
            context._setExecutionVariable(this, "debounceCount", 0);
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphDebounceBlock" /* FlowGraphBlockNames.Debounce */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphDebounceBlock" /* FlowGraphBlockNames.Debounce */, FlowGraphDebounceBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaERlYm91bmNlQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhEZWJvdW5jZUJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgUmljaFR5cGVOdW1iZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWxcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBibG9jayBkZWJvdW5jZXMgdGhlIGV4ZWN1dGlvbiBvZiBhIGlucHV0LCBpLmUuIGVuc3VyZXMgdGhhdCB0aGUgaW5wdXQgaXMgb25seSBleGVjdXRlZCBvbmNlIGV2ZXJ5IFggdGltZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhEZWJvdW5jZUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQ6IFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGlucHV0IG11c3QgYmUgZXhlY3V0ZWQgYmVmb3JlIHRoZSBvbkRvbmUgc2lnbmFsIGlzIGFjdGl2YXRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY291bnQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIElucHV0OiBSZXNldHMgdGhlIGRlYm91bmNlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHJlc2V0OiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQ6IFRoZSBjdXJyZW50IGNvdW50IG9mIHRoZSBkZWJvdW5jZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBjdXJyZW50Q291bnQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJjb3VudFwiLCBSaWNoVHlwZU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5yZXNldCA9IHRoaXMuX3JlZ2lzdGVyU2lnbmFsSW5wdXQoXCJyZXNldFwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwiY3VycmVudENvdW50XCIsIFJpY2hUeXBlTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgY2FsbGluZ1NpZ25hbDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYWxsaW5nU2lnbmFsID09PSB0aGlzLnJlc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiZGVib3VuY2VDb3VudFwiLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnQuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvdW50ID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJkZWJvdW5jZUNvdW50XCIsIDApO1xyXG4gICAgICAgIGNvbnN0IG5ld0NvdW50ID0gY3VycmVudENvdW50ICsgMTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQuc2V0VmFsdWUobmV3Q291bnQsIGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiZGVib3VuY2VDb3VudFwiLCBuZXdDb3VudCk7XHJcbiAgICAgICAgaWYgKG5ld0NvdW50ID49IGNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJkZWJvdW5jZUNvdW50XCIsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuRGVib3VuY2U7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkRlYm91bmNlLCBGbG93R3JhcGhEZWJvdW5jZUJsb2NrKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==