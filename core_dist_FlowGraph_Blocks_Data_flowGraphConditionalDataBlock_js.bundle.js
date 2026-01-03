"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphConditionalDataBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js":
/*!***************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphConditionalDataBlock: () => (/* binding */ FlowGraphConditionalDataBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * Block that returns a value based on a condition.
 */
class FlowGraphConditionalDataBlock extends _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    /**
     * Creates a new instance of the block
     * @param config optional configuration for this block
     */
    constructor(config) {
        super(config);
        this.condition = this.registerDataInput("condition", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean);
        this.onTrue = this.registerDataInput("onTrue", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.onFalse = this.registerDataInput("onFalse", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.output = this.registerDataOutput("output", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    /**
     * @internal
     */
    _updateOutputs(context) {
        // get the value of the condition
        const condition = this.condition.getValue(context);
        // set the value based on the condition truth-ness.
        this.output.setValue(condition ? this.onTrue.getValue(context) : this.onFalse.getValue(context), context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */, FlowGraphConditionalDataBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhDb25kaXRpb25hbERhdGFCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFtQkE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhDb25kaXRpb25hbERhdGFCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiwgUmljaFR5cGVBbnkgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xyXG5cclxuLyoqXHJcbiAqIEJsb2NrIHRoYXQgcmV0dXJucyBhIHZhbHVlIGJhc2VkIG9uIGEgY29uZGl0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvbmRpdGlvbmFsRGF0YUJsb2NrPFQ+IGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgY29uZGl0aW9uIHRvIGNoZWNrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29uZGl0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIHZhbHVlIHRvIHJldHVybiBpZiB0aGUgY29uZGl0aW9uIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblRydWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSBjb25kaXRpb24gaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkZhbHNlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgdmFsdWUgdGhhdCB3YXMgcmV0dXJuZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvdXRwdXQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYmxvY2tcclxuICAgICAqIEBwYXJhbSBjb25maWcgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBibG9ja1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiY29uZGl0aW9uXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICAgICAgdGhpcy5vblRydWUgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwib25UcnVlXCIsIFJpY2hUeXBlQW55KTtcclxuICAgICAgICB0aGlzLm9uRmFsc2UgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwib25GYWxzZVwiLCBSaWNoVHlwZUFueSk7XHJcblxyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJvdXRwdXRcIiwgUmljaFR5cGVBbnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgY29uZGl0aW9uXHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5jb25kaXRpb24uZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY29uZGl0aW9uIHRydXRoLW5lc3MuXHJcbiAgICAgICAgdGhpcy5vdXRwdXQuc2V0VmFsdWUoY29uZGl0aW9uID8gdGhpcy5vblRydWUuZ2V0VmFsdWUoY29udGV4dCkgOiB0aGlzLm9uRmFsc2UuZ2V0VmFsdWUoY29udGV4dCksIGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2xhc3MgbmFtZSBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29uZGl0aW9uYWw7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkNvbmRpdGlvbmFsLCBGbG93R3JhcGhDb25kaXRpb25hbERhdGFCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=