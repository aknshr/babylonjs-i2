"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphSwitchBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js":
/*!***********************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSwitchBlock: () => (/* binding */ FlowGraphSwitchBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that executes a branch based on a selection.
 */
class FlowGraphSwitchBlock extends _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        /**
         * The default case to execute if no other case is found.
         */
        this.default = this._registerSignalOutput("default");
        this._caseToOutputFlow = new Map();
        this.case = this.registerDataInput("case", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        // iterate the set not using for of
        const array = this.config.cases || [];
        for (const caseValue of array) {
            this._caseToOutputFlow.set(caseValue, this._registerSignalOutput(`out_${caseValue}`));
        }
    }
    _execute(context, _callingSignal) {
        const selectionValue = this.case.getValue(context);
        let outputFlow;
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.isNumeric)(selectionValue)) {
            outputFlow = this._getOutputFlowForCase((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__.getNumericValue)(selectionValue));
        }
        else {
            outputFlow = this._getOutputFlowForCase(selectionValue);
        }
        if (outputFlow) {
            outputFlow._activateSignal(context);
        }
        else {
            this.default._activateSignal(context);
        }
    }
    /**
     * Adds a new case to the switch block.
     * @param newCase the new case to add.
     */
    addCase(newCase) {
        if (this.config.cases.includes(newCase)) {
            return;
        }
        this.config.cases.push(newCase);
        this._caseToOutputFlow.set(newCase, this._registerSignalOutput(`out_${newCase}`));
    }
    /**
     * Removes a case from the switch block.
     * @param caseToRemove the case to remove.
     */
    removeCase(caseToRemove) {
        if (!this.config.cases.includes(caseToRemove)) {
            return;
        }
        const index = this.config.cases.indexOf(caseToRemove);
        this.config.cases.splice(index, 1);
        this._caseToOutputFlow.delete(caseToRemove);
    }
    /**
     * @internal
     */
    _getOutputFlowForCase(caseValue) {
        return this._caseToOutputFlow.get(caseValue);
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */;
    }
    /**
     * Serialize the block to a JSON representation.
     * @param serializationObject the object to serialize to.
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.cases = this.config.cases;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */, FlowGraphSwitchBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaFN3aXRjaEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBV0E7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFYQTs7QUFFQTtBQUNBO0FBRUE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoU3dpdGNoQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZUFueSB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldE51bWVyaWNWYWx1ZSwgaXNOdW1lcmljIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBhIHN3aXRjaCBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFN3aXRjaEJsb2NrQ29uZmlndXJhdGlvbjxUPiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcG9zc2libGUgdmFsdWVzIGZvciB0aGUgc2VsZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBjYXNlczogVFtdO1xyXG59XHJcblxyXG4vKipcclxuICogQSBibG9jayB0aGF0IGV4ZWN1dGVzIGEgYnJhbmNoIGJhc2VkIG9uIGEgc2VsZWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFN3aXRjaEJsb2NrPFQgZXh0ZW5kcyBGbG93R3JhcGhOdW1iZXI+IGV4dGVuZHMgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgdmFsdWUgb2YgdGhlIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGNhc2U6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRlZmF1bHQgY2FzZSB0byBleGVjdXRlIGlmIG5vIG90aGVyIGNhc2UgaXMgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBkZWZhdWx0OiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxPdXRwdXQoXCJkZWZhdWx0XCIpO1xyXG5cclxuICAgIHByaXZhdGUgX2Nhc2VUb091dHB1dEZsb3c6IE1hcDxULCBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYmxvY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoU3dpdGNoQmxvY2tDb25maWd1cmF0aW9uPFQ+XHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLmNhc2UgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiY2FzZVwiLCBSaWNoVHlwZUFueSk7XHJcblxyXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhlIHNldCBub3QgdXNpbmcgZm9yIG9mXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmNvbmZpZy5jYXNlcyB8fCBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhc2VWYWx1ZSBvZiBhcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXNlVG9PdXRwdXRGbG93LnNldChjYXNlVmFsdWUsIHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KGBvdXRfJHtjYXNlVmFsdWV9YCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgX2NhbGxpbmdTaWduYWw6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25WYWx1ZSA9IHRoaXMuY2FzZS5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICBsZXQgb3V0cHV0RmxvdzogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB8IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoaXNOdW1lcmljKHNlbGVjdGlvblZhbHVlKSkge1xyXG4gICAgICAgICAgICBvdXRwdXRGbG93ID0gdGhpcy5fZ2V0T3V0cHV0Rmxvd0ZvckNhc2UoZ2V0TnVtZXJpY1ZhbHVlKHNlbGVjdGlvblZhbHVlKSBhcyBUKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRwdXRGbG93ID0gdGhpcy5fZ2V0T3V0cHV0Rmxvd0ZvckNhc2Uoc2VsZWN0aW9uVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG91dHB1dEZsb3cpIHtcclxuICAgICAgICAgICAgb3V0cHV0Rmxvdy5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgbmV3IGNhc2UgdG8gdGhlIHN3aXRjaCBibG9jay5cclxuICAgICAqIEBwYXJhbSBuZXdDYXNlIHRoZSBuZXcgY2FzZSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRDYXNlKG5ld0Nhc2U6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2FzZXMuaW5jbHVkZXMobmV3Q2FzZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZy5jYXNlcy5wdXNoKG5ld0Nhc2UpO1xyXG4gICAgICAgIHRoaXMuX2Nhc2VUb091dHB1dEZsb3cuc2V0KG5ld0Nhc2UsIHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KGBvdXRfJHtuZXdDYXNlfWApKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBjYXNlIGZyb20gdGhlIHN3aXRjaCBibG9jay5cclxuICAgICAqIEBwYXJhbSBjYXNlVG9SZW1vdmUgdGhlIGNhc2UgdG8gcmVtb3ZlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQ2FzZShjYXNlVG9SZW1vdmU6IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmNhc2VzLmluY2x1ZGVzKGNhc2VUb1JlbW92ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29uZmlnLmNhc2VzLmluZGV4T2YoY2FzZVRvUmVtb3ZlKTtcclxuICAgICAgICB0aGlzLmNvbmZpZy5jYXNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuX2Nhc2VUb091dHB1dEZsb3cuZGVsZXRlKGNhc2VUb1JlbW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9nZXRPdXRwdXRGbG93Rm9yQ2FzZShjYXNlVmFsdWU6IFQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FzZVRvT3V0cHV0Rmxvdy5nZXQoY2FzZVZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuU3dpdGNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplIHRoZSBibG9jayB0byBhIEpTT04gcmVwcmVzZW50YXRpb24uXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY2FzZXMgPSB0aGlzLmNvbmZpZy5jYXNlcztcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU3dpdGNoLCBGbG93R3JhcGhTd2l0Y2hCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=