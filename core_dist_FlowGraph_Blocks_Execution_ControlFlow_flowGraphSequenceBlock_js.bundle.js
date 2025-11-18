"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphSequenceBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js":
/*!*************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSequenceBlock: () => (/* binding */ FlowGraphSequenceBlock)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * A block that executes its output flows in sequence.
 */
class FlowGraphSequenceBlock extends _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        /**
         * The output flows.
         */
        this.executionSignals = [];
        this.setNumberOfOutputSignals(this.config.outputSignalCount);
    }
    _execute(context) {
        for (let i = 0; i < this.executionSignals.length; i++) {
            this.executionSignals[i]._activateSignal(context);
        }
    }
    /**
     * Sets the block's output flows. Would usually be passed from the constructor but can be changed afterwards.
     * @param outputSignalCount the number of output flows
     */
    setNumberOfOutputSignals(outputSignalCount = 1) {
        // check the size of the outFlow Array, see if it is not larger than needed
        while (this.executionSignals.length > outputSignalCount) {
            const flow = this.executionSignals.pop();
            if (flow) {
                flow.disconnectFromAll();
                this._unregisterSignalOutput(flow.name);
            }
        }
        while (this.executionSignals.length < outputSignalCount) {
            this.executionSignals.push(this._registerSignalOutput(`out_${this.executionSignals.length}`));
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */, FlowGraphSequenceBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaFNlcXVlbmNlQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFhQTs7QUFFQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQVRBOztBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhTZXF1ZW5jZUJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBzZXF1ZW5jZSBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFNlcXVlbmNlQmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2Ygb3V0cHV0IHNpZ25hbHMuIERlZmF1bHRzIHRvIDEuXHJcbiAgICAgKi9cclxuICAgIG91dHB1dFNpZ25hbENvdW50PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQSBibG9jayB0aGF0IGV4ZWN1dGVzIGl0cyBvdXRwdXQgZmxvd3MgaW4gc2VxdWVuY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoU2VxdWVuY2VCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dHB1dCBmbG93cy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGlvblNpZ25hbHM6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBjb25maWc6IElGbG93R3JhcGhTZXF1ZW5jZUJsb2NrQ29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnNldE51bWJlck9mT3V0cHV0U2lnbmFscyh0aGlzLmNvbmZpZy5vdXRwdXRTaWduYWxDb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leGVjdXRlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhlY3V0aW9uU2lnbmFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGlvblNpZ25hbHNbaV0uX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJsb2NrJ3Mgb3V0cHV0IGZsb3dzLiBXb3VsZCB1c3VhbGx5IGJlIHBhc3NlZCBmcm9tIHRoZSBjb25zdHJ1Y3RvciBidXQgY2FuIGJlIGNoYW5nZWQgYWZ0ZXJ3YXJkcy5cclxuICAgICAqIEBwYXJhbSBvdXRwdXRTaWduYWxDb3VudCB0aGUgbnVtYmVyIG9mIG91dHB1dCBmbG93c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0TnVtYmVyT2ZPdXRwdXRTaWduYWxzKG91dHB1dFNpZ25hbENvdW50OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIG91dEZsb3cgQXJyYXksIHNlZSBpZiBpdCBpcyBub3QgbGFyZ2VyIHRoYW4gbmVlZGVkXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhlY3V0aW9uU2lnbmFscy5sZW5ndGggPiBvdXRwdXRTaWduYWxDb3VudCkge1xyXG4gICAgICAgICAgICBjb25zdCBmbG93ID0gdGhpcy5leGVjdXRpb25TaWduYWxzLnBvcCgpO1xyXG4gICAgICAgICAgICBpZiAoZmxvdykge1xyXG4gICAgICAgICAgICAgICAgZmxvdy5kaXNjb25uZWN0RnJvbUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5yZWdpc3RlclNpZ25hbE91dHB1dChmbG93Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5leGVjdXRpb25TaWduYWxzLmxlbmd0aCA8IG91dHB1dFNpZ25hbENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0aW9uU2lnbmFscy5wdXNoKHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KGBvdXRfJHt0aGlzLmV4ZWN1dGlvblNpZ25hbHMubGVuZ3RofWApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlNlcXVlbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2VxdWVuY2UsIEZsb3dHcmFwaFNlcXVlbmNlQmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=