"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Utils_flowGraphCodeExecutionBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCodeExecutionBlock: () => (/* binding */ FlowGraphCodeExecutionBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * This block takes in a function that is defined OUTSIDE of the flow graph and executes it.
 * The function can be a normal function or an async function.
 * The function's arguments will be the value of the input connection as the first variable, and the flow graph context as the second variable.
 */
class FlowGraphCodeExecutionBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    /**
     * Construct a FlowGraphCodeExecutionBlock.
     * @param config construction parameters
     */
    constructor(config) {
        super(config);
        this.config = config;
        this.executionFunction = this.registerDataInput("function", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.value = this.registerDataInput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.result = this.registerDataOutput("result", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    /**
     * @internal
     */
    _updateOutputs(context) {
        const func = this.executionFunction.getValue(context);
        const value = this.value.getValue(context);
        if (func) {
            this.result.setValue(func(value, context), context);
        }
    }
    getClassName() {
        return "FlowGraphCodeExecutionBlock" /* FlowGraphBlockNames.CodeExecution */;
    }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9VdGlsc19mbG93R3JhcGhDb2RlRXhlY3V0aW9uQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFNQTs7OztBQUlBO0FBQ0E7QUFnQkE7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9VdGlscy9mbG93R3JhcGhDb2RlRXhlY3V0aW9uQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgUmljaFR5cGVBbnkgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XG5cbmV4cG9ydCB0eXBlIENvZGVFeGVjdXRpb25GdW5jdGlvbiA9ICh2YWx1ZTogYW55LCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSA9PiBhbnk7XG5cbi8qKlxuICogVGhpcyBibG9jayB0YWtlcyBpbiBhIGZ1bmN0aW9uIHRoYXQgaXMgZGVmaW5lZCBPVVRTSURFIG9mIHRoZSBmbG93IGdyYXBoIGFuZCBleGVjdXRlcyBpdC5cbiAqIFRoZSBmdW5jdGlvbiBjYW4gYmUgYSBub3JtYWwgZnVuY3Rpb24gb3IgYW4gYXN5bmMgZnVuY3Rpb24uXG4gKiBUaGUgZnVuY3Rpb24ncyBhcmd1bWVudHMgd2lsbCBiZSB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGNvbm5lY3Rpb24gYXMgdGhlIGZpcnN0IHZhcmlhYmxlLCBhbmQgdGhlIGZsb3cgZ3JhcGggY29udGV4dCBhcyB0aGUgc2Vjb25kIHZhcmlhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29kZUV4ZWN1dGlvbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBmdW5jdGlvbiB0byBleGVjdXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBleGVjdXRpb25GdW5jdGlvbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Q29kZUV4ZWN1dGlvbkZ1bmN0aW9uPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSB2YWx1ZSB0byBwYXNzIHRvIHRoZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHJlc3VsdCBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHJlc3VsdDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248YW55PjtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIEZsb3dHcmFwaENvZGVFeGVjdXRpb25CbG9jay5cbiAgICAgKiBAcGFyYW0gY29uZmlnIGNvbnN0cnVjdGlvbiBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHVibGljIG92ZXJyaWRlIGNvbmZpZzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuZXhlY3V0aW9uRnVuY3Rpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiZnVuY3Rpb25cIiwgUmljaFR5cGVBbnkpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInZhbHVlXCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInJlc3VsdFwiLCBSaWNoVHlwZUFueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHRoaXMuZXhlY3V0aW9uRnVuY3Rpb24uZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZS5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0LnNldFZhbHVlKGZ1bmModmFsdWUsIGNvbnRleHQpLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29kZUV4ZWN1dGlvbjtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9