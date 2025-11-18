"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphDataSwitchBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js":
/*!**********************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphDataSwitchBlock: () => (/* binding */ FlowGraphDataSwitchBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * This block conditionally outputs one of its inputs, based on a condition and a list of cases.
 *
 * This of it as a passive (data) version of the switch statement in programming languages.
 */
class FlowGraphDataSwitchBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        this._inputCases = new Map();
        this.case = this.registerDataInput("case", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, NaN);
        this.default = this.registerDataInput("default", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.value = this.registerDataOutput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        // iterate the set not using for of
        const array = this.config.cases || [];
        for (let caseValue of array) {
            // if treat as integers, make sure not to set it again if it exists
            caseValue = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_2__.getNumericValue)(caseValue);
            if (this.config.treatCasesAsIntegers) {
                caseValue = caseValue | 0;
                if (this._inputCases.has(caseValue)) {
                    return;
                }
            }
            this._inputCases.set(caseValue, this.registerDataInput(`in_${caseValue}`, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny));
        }
    }
    _updateOutputs(context) {
        const selectionValue = this.case.getValue(context);
        let outputValue;
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_2__.isNumeric)(selectionValue)) {
            outputValue = this._getOutputValueForCase((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_2__.getNumericValue)(selectionValue), context);
        }
        if (!outputValue) {
            outputValue = this.default.getValue(context);
        }
        this.value.setValue(outputValue, context);
    }
    _getOutputValueForCase(caseValue, context) {
        return this._inputCases.get(caseValue)?.getValue(context);
    }
    getClassName() {
        return "FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */, FlowGraphDataSwitchBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhEYXRhU3dpdGNoQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFlQTs7OztBQUlBO0FBQ0E7QUFrQkE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoRGF0YVN3aXRjaEJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsb3dHcmFwaEJsb2NrLCB0eXBlIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBSaWNoVHlwZUFueSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXROdW1lcmljVmFsdWUsIGlzTnVtZXJpYyB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC91dGlsc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoRGF0YVN3aXRjaEJsb2NrQ29uZmlndXJhdGlvbjxUPiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBzZWxlY3Rpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBjYXNlczogRmxvd0dyYXBoTnVtYmVyW107XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgY2FzZXMgd2lsbCBiZSB0cmVhdGVkIGFzIGludGVnZXJzLCBtZWFuaW5nIDEuMSwgMS4wLCAwLjFlMSAgYW5kIDEgd2lsbCBhIHNpbmdsZSBjYXNlIC0gXCIxXCIuXG4gICAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpbiBnbFRGIGludGVyYWN0aXZpdHkuXG4gICAgICovXG4gICAgdHJlYXRDYXNlc0FzSW50ZWdlcnM/OiBib29sZWFuO1xufVxuLyoqXG4gKiBUaGlzIGJsb2NrIGNvbmRpdGlvbmFsbHkgb3V0cHV0cyBvbmUgb2YgaXRzIGlucHV0cywgYmFzZWQgb24gYSBjb25kaXRpb24gYW5kIGEgbGlzdCBvZiBjYXNlcy5cbiAqXG4gKiBUaGlzIG9mIGl0IGFzIGEgcGFzc2l2ZSAoZGF0YSkgdmVyc2lvbiBvZiB0aGUgc3dpdGNoIHN0YXRlbWVudCBpbiBwcm9ncmFtbWluZyBsYW5ndWFnZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhEYXRhU3dpdGNoQmxvY2s8VD4gZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogQ3VycmVudCBzZWxlY3Rpb24gdmFsdWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGNhc2U6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaE51bWJlcj47XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dDogZGVmYXVsdCB2YWx1ZSB0byBvdXRwdXQgaWYgbm8gY2FzZSBpcyBtYXRjaGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBkZWZhdWx0OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPjtcblxuICAgIC8qKlxuICAgICAqIE91dHB1dDogdGhlIHZhbHVlIHRoYXQgaXMgb3V0cHV0IGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUIHwgdW5kZWZpbmVkPjtcblxuICAgIHByaXZhdGUgX2lucHV0Q2FzZXM6IE1hcDxudW1iZXIsIEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+PiA9IG5ldyBNYXAoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoRGF0YVN3aXRjaEJsb2NrQ29uZmlndXJhdGlvbjxUPlxuICAgICkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuY2FzZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJjYXNlXCIsIFJpY2hUeXBlQW55LCBOYU4pO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiZGVmYXVsdFwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInZhbHVlXCIsIFJpY2hUeXBlQW55KTtcblxuICAgICAgICAvLyBpdGVyYXRlIHRoZSBzZXQgbm90IHVzaW5nIGZvciBvZlxuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuY29uZmlnLmNhc2VzIHx8IFtdO1xuICAgICAgICBmb3IgKGxldCBjYXNlVmFsdWUgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRyZWF0IGFzIGludGVnZXJzLCBtYWtlIHN1cmUgbm90IHRvIHNldCBpdCBhZ2FpbiBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIGNhc2VWYWx1ZSA9IGdldE51bWVyaWNWYWx1ZShjYXNlVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnRyZWF0Q2FzZXNBc0ludGVnZXJzKSB7XG4gICAgICAgICAgICAgICAgY2FzZVZhbHVlID0gY2FzZVZhbHVlIHwgMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5wdXRDYXNlcy5oYXMoY2FzZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5wdXRDYXNlcy5zZXQoY2FzZVZhbHVlLCB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KGBpbl8ke2Nhc2VWYWx1ZX1gLCBSaWNoVHlwZUFueSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uVmFsdWUgPSB0aGlzLmNhc2UuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGxldCBvdXRwdXRWYWx1ZTogVCB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzTnVtZXJpYyhzZWxlY3Rpb25WYWx1ZSkpIHtcbiAgICAgICAgICAgIG91dHB1dFZhbHVlID0gdGhpcy5fZ2V0T3V0cHV0VmFsdWVGb3JDYXNlKGdldE51bWVyaWNWYWx1ZShzZWxlY3Rpb25WYWx1ZSksIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3V0cHV0VmFsdWUpIHtcbiAgICAgICAgICAgIG91dHB1dFZhbHVlID0gdGhpcy5kZWZhdWx0LmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShvdXRwdXRWYWx1ZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0T3V0cHV0VmFsdWVGb3JDYXNlKGNhc2VWYWx1ZTogbnVtYmVyLCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dENhc2VzLmdldChjYXNlVmFsdWUpPy5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkRhdGFTd2l0Y2g7XG4gICAgfVxufVxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkRhdGFTd2l0Y2gsIEZsb3dHcmFwaERhdGFTd2l0Y2hCbG9jayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=