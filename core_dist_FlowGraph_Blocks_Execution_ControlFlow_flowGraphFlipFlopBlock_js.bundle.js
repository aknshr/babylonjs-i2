"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphFlipFlopBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js":
/*!*************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphFlipFlopBlock: () => (/* binding */ FlowGraphFlipFlopBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * This block flip flops between two outputs.
 */
class FlowGraphFlipFlopBlock extends core_FlowGraph_flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlock {
    constructor(config) {
        super(config);
        this.onOn = this._registerSignalOutput("onOn");
        this.onOff = this._registerSignalOutput("onOff");
        this.value = this.registerDataOutput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean);
    }
    _execute(context, _callingSignal) {
        let value = context._getExecutionVariable(this, "value", typeof this.config?.startValue === "boolean" ? !this.config.startValue : false);
        value = !value;
        context._setExecutionVariable(this, "value", value);
        this.value.setValue(value, context);
        if (value) {
            this.onOn._activateSignal(context);
        }
        else {
            this.onOff._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphFlipFlopBlock" /* FlowGraphBlockNames.FlipFlop */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphFlipFlopBlock" /* FlowGraphBlockNames.FlipFlop */, FlowGraphFlipFlopBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaEZsaXBGbG9wQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFjQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhGbGlwRmxvcEJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tcIjtcclxuaW1wb3J0IHsgUmljaFR5cGVCb29sZWFuIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgZmxpcCBmbG9wIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoRmxpcEZsb3BCbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBmbGlwIGZsb3Agc3dpdGNoXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0VmFsdWU/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBibG9jayBmbGlwIGZsb3BzIGJldHdlZW4gdHdvIG91dHB1dHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoRmxpcEZsb3BCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBzaWduYWwgdG8gZXhlY3V0ZSB3aGVuIHRoZSB2YXJpYWJsZSBpcyBvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uT246IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgc2lnbmFsIHRvIGV4ZWN1dGUgd2hlbiB0aGUgdmFyaWFibGUgaXMgb2ZmLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25PZmY6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBJZiB0aGUgdmFyaWFibGUgaXMgb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Ym9vbGVhbj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEZsaXBGbG9wQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbk9uID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxPdXRwdXQoXCJvbk9uXCIpO1xyXG4gICAgICAgIHRoaXMub25PZmYgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcIm9uT2ZmXCIpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInZhbHVlXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leGVjdXRlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIF9jYWxsaW5nU2lnbmFsOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJ2YWx1ZVwiLCB0eXBlb2YgdGhpcy5jb25maWc/LnN0YXJ0VmFsdWUgPT09IFwiYm9vbGVhblwiID8gIXRoaXMuY29uZmlnLnN0YXJ0VmFsdWUgOiBmYWxzZSk7XHJcblxyXG4gICAgICAgIHZhbHVlID0gIXZhbHVlO1xyXG4gICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwidmFsdWVcIiwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUodmFsdWUsIGNvbnRleHQpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uT24uX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25PZmYuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxpcEZsb3A7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkZsaXBGbG9wLCBGbG93R3JhcGhGbGlwRmxvcEJsb2NrKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==