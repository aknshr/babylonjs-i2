"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Utils_flowGraphArrayIndexBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphArrayIndexBlock: () => (/* binding */ FlowGraphArrayIndexBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * This simple Util block takes an array as input and selects a single element from it.
 */
class FlowGraphArrayIndexBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    /**
     * Construct a FlowGraphArrayIndexBlock.
     * @param config construction parameters
     */
    constructor(config) {
        super(config);
        this.config = config;
        this.array = this.registerDataInput("array", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.index = this.registerDataInput("index", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(-1));
        this.value = this.registerDataOutput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    /**
     * @internal
     */
    _updateOutputs(context) {
        const array = this.array.getValue(context);
        const index = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_4__.getNumericValue)(this.index.getValue(context));
        if (array && index >= 0 && index < array.length) {
            this.value.setValue(array[index], context);
        }
        else {
            this.value.setValue(null, context);
        }
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
    }
    getClassName() {
        return "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */, FlowGraphArrayIndexBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9VdGlsc19mbG93R3JhcGhBcnJheUluZGV4QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBZ0JBOzs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9VdGlscy9mbG93R3JhcGhBcnJheUluZGV4QmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlclwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhOdW1iZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdXRpbHNcIjtcbmltcG9ydCB7IGdldE51bWVyaWNWYWx1ZSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC91dGlsc1wiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5cbi8qKlxuICogVGhpcyBzaW1wbGUgVXRpbCBibG9jayB0YWtlcyBhbiBhcnJheSBhcyBpbnB1dCBhbmQgc2VsZWN0cyBhIHNpbmdsZSBlbGVtZW50IGZyb20gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhBcnJheUluZGV4QmxvY2s8VCA9IGFueT4gZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIGFycmF5IHRvIHNlbGVjdCBmcm9tLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhcnJheTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VFtdPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBpbmRleCB0byBzZWxlY3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGluZGV4OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxGbG93R3JhcGhOdW1iZXI+O1xuXG4gICAgLyoqXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBzZWxlY3RlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248TnVsbGFibGU8VD4+O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgRmxvd0dyYXBoQXJyYXlJbmRleEJsb2NrLlxuICAgICAqIEBwYXJhbSBjb25maWcgY29uc3RydWN0aW9uIHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhcnJheVwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiaW5kZXhcIiwgUmljaFR5cGVBbnksIG5ldyBGbG93R3JhcGhJbnRlZ2VyKC0xKSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInZhbHVlXCIsIFJpY2hUeXBlQW55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuYXJyYXkuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0TnVtZXJpY1ZhbHVlKHRoaXMuaW5kZXguZ2V0VmFsdWUoY29udGV4dCkpO1xuICAgICAgICBpZiAoYXJyYXkgJiYgaW5kZXggPj0gMCAmJiBpbmRleCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShhcnJheVtpbmRleF0sIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBibG9ja1xuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gc2VyaWFsaXplIHRvXG4gICAgICovXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkFycmF5SW5kZXg7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQXJyYXlJbmRleCwgRmxvd0dyYXBoQXJyYXlJbmRleEJsb2NrKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=