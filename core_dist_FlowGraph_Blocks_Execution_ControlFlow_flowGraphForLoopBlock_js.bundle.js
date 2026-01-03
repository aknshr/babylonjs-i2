"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphForLoopBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js":
/*!************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphForLoopBlock: () => (/* binding */ FlowGraphForLoopBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * Block that executes an action in a loop.
 */
class FlowGraphForLoopBlock extends core_FlowGraph_flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        this.startIndex = this.registerDataInput("startIndex", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, 0);
        this.endIndex = this.registerDataInput("endIndex", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.step = this.registerDataInput("step", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, 1);
        this.index = this.registerDataOutput("index", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_4__.FlowGraphInteger((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(config?.initialIndex ?? 0)));
        this.executionFlow = this._registerSignalOutput("executionFlow");
        this.completed = this._registerSignalOutput("completed");
        this._unregisterSignalOutput("out");
    }
    /**
     * @internal
     */
    _execute(context) {
        const index = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(this.startIndex.getValue(context));
        const step = this.step.getValue(context);
        let endIndex = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(this.endIndex.getValue(context));
        for (let i = index; i < endIndex; i += step) {
            this.index.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_4__.FlowGraphInteger(i), context);
            this.executionFlow._activateSignal(context);
            endIndex = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(this.endIndex.getValue(context));
            if (i > FlowGraphForLoopBlock.MaxLoopIterations * step) {
                break;
            }
        }
        if (this.config?.incrementIndexWhenLoopDone) {
            this.index.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_4__.FlowGraphInteger((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(this.index.getValue(context)) + step), context);
        }
        this.completed._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */;
    }
}
/**
 * The maximum number of iterations allowed for the loop.
 * If the loop exceeds this number, it will stop. This number is configurable to avoid infinite loops.
 */
FlowGraphForLoopBlock.MaxLoopIterations = 1000;
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */, FlowGraphForLoopBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaEZvckxvb3BCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQW1CQTs7QUFFQTtBQUNBO0FBaUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBMUVBOzs7QUFHQTtBQUNBO0FBd0VBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhGb3JMb29wQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIFJpY2hUeXBlTnVtYmVyIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhOdW1iZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdXRpbHNcIjtcclxuaW1wb3J0IHsgZ2V0TnVtZXJpY1ZhbHVlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBGb3IgTG9vcCBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEZvckxvb3BCbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGluaXRpYWwgaW5kZXggb2YgdGhlIGxvb3AuXHJcbiAgICAgKiBpZiBub3Qgc2V0IHdpbGwgZGVmYXVsdCB0byAwXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxJbmRleD86IEZsb3dHcmFwaE51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgaW5kZXggb2YgdGhlIGNhc2Ugd2lsbCBiZSBpbmNyZW1lbnRlZCB3aGVuIHRoZSBsb29wIGlzIGRvbmUuXHJcbiAgICAgKiBUaGlzIHdpbGwgcmVzdWx0IHRoYXQgdGhlIGluZGV4IHdpbGwgZXF1YWwgZW5kSW5kZXggd2hlbiB0aGUgbG9vcCBmaW5pc2hlZCBpdHMgd29yay5cclxuICAgICAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3IgaW4gZ2xURiBpbnRlcmFjdGl2aXR5XHJcbiAgICAgKi9cclxuICAgIGluY3JlbWVudEluZGV4V2hlbkxvb3BEb25lPzogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogQmxvY2sgdGhhdCBleGVjdXRlcyBhbiBhY3Rpb24gaW4gYSBsb29wLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEZvckxvb3BCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIGFsbG93ZWQgZm9yIHRoZSBsb29wLlxyXG4gICAgICogSWYgdGhlIGxvb3AgZXhjZWVkcyB0aGlzIG51bWJlciwgaXQgd2lsbCBzdG9wLiBUaGlzIG51bWJlciBpcyBjb25maWd1cmFibGUgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTWF4TG9vcEl0ZXJhdGlvbnMgPSAxMDAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgc3RhcnQgaW5kZXggb2YgdGhlIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBzdGFydEluZGV4OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxGbG93R3JhcGhOdW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgZW5kIGluZGV4IG9mIHRoZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZW5kSW5kZXg6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaE51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBzdGVwIG9mIHRoZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RlcDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5kZXg6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaEludGVnZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHNpZ25hbCB0aGF0IGlzIGFjdGl2YXRlZCB3aGVuIHRoZSBsb29wIGJvZHkgaXMgZXhlY3V0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBleGVjdXRpb25GbG93OiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBjb21wbGV0ZWQgc2lnbmFsLiBUcmlnZ2VyZWQgd2hlbiBjb25kaXRpb24gaXMgZmFsc2UuXHJcbiAgICAgKiBObyBvdXQgc2lnbmFsIGlzIGF2YWlsYWJsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbXBsZXRlZDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEZvckxvb3BCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwic3RhcnRJbmRleFwiLCBSaWNoVHlwZUFueSwgMCk7XHJcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJlbmRJbmRleFwiLCBSaWNoVHlwZUFueSk7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInN0ZXBcIiwgUmljaFR5cGVOdW1iZXIsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJpbmRleFwiLCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIG5ldyBGbG93R3JhcGhJbnRlZ2VyKGdldE51bWVyaWNWYWx1ZShjb25maWc/LmluaXRpYWxJbmRleCA/PyAwKSkpO1xyXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uRmxvdyA9IHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KFwiZXhlY3V0aW9uRmxvd1wiKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KFwiY29tcGxldGVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl91bnJlZ2lzdGVyU2lnbmFsT3V0cHV0KFwib3V0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXROdW1lcmljVmFsdWUodGhpcy5zdGFydEluZGV4LmdldFZhbHVlKGNvbnRleHQpKTtcclxuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5zdGVwLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGxldCBlbmRJbmRleCA9IGdldE51bWVyaWNWYWx1ZSh0aGlzLmVuZEluZGV4LmdldFZhbHVlKGNvbnRleHQpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBlbmRJbmRleDsgaSArPSBzdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXguc2V0VmFsdWUobmV3IEZsb3dHcmFwaEludGVnZXIoaSksIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGlvbkZsb3cuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgICAgICBlbmRJbmRleCA9IGdldE51bWVyaWNWYWx1ZSh0aGlzLmVuZEluZGV4LmdldFZhbHVlKGNvbnRleHQpKTtcclxuICAgICAgICAgICAgaWYgKGkgPiBGbG93R3JhcGhGb3JMb29wQmxvY2suTWF4TG9vcEl0ZXJhdGlvbnMgKiBzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnPy5pbmNyZW1lbnRJbmRleFdoZW5Mb29wRG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4LnNldFZhbHVlKG5ldyBGbG93R3JhcGhJbnRlZ2VyKGdldE51bWVyaWNWYWx1ZSh0aGlzLmluZGV4LmdldFZhbHVlKGNvbnRleHQpKSArIHN0ZXApLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuRm9yTG9vcDtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRm9yTG9vcCwgRmxvd0dyYXBoRm9yTG9vcEJsb2NrKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==