"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Utils_flowGraphIndexOfBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js":
/*!*************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphIndexOfBlock: () => (/* binding */ FlowGraphIndexOfBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * This block takes an object as input and an array and returns the index of the object in the array.
 */
class FlowGraphIndexOfBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    /**
     * Construct a FlowGraphIndexOfBlock.
     * @param config construction parameters
     */
    constructor(config) {
        super(config);
        this.config = config;
        this.object = this.registerDataInput("object", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.array = this.registerDataInput("array", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.index = this.registerDataOutput("index", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(-1));
    }
    /**
     * @internal
     */
    _updateOutputs(context) {
        const object = this.object.getValue(context);
        const array = this.array.getValue(context);
        if (array) {
            this.index.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(array.indexOf(object)), context);
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
        return "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */, FlowGraphIndexOfBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9VdGlsc19mbG93R3JhcGhJbmRleE9mQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBaUJBOzs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9VdGlscy9mbG93R3JhcGhJbmRleE9mQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XG5cbi8qKlxuICogVGhpcyBibG9jayB0YWtlcyBhbiBvYmplY3QgYXMgaW5wdXQgYW5kIGFuIGFycmF5IGFuZCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEluZGV4T2ZCbG9jazxUID0gYW55PiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgb2JqZWN0IHRvIGZpbmQgaW4gdGhlIGFycmF5LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvYmplY3Q6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIGFycmF5IHRvIHNlYXJjaCBpbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXJyYXk6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFRbXT47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGluZGV4IG9mIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5LlxuICAgICAqIC0xIGlmIG5vdCBmb3VuZCFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5kZXg6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaEludGVnZXI+O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgRmxvd0dyYXBoSW5kZXhPZkJsb2NrLlxuICAgICAqIEBwYXJhbSBjb25maWcgY29uc3RydWN0aW9uIHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwib2JqZWN0XCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgdGhpcy5hcnJheSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhcnJheVwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImluZGV4XCIsIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgbmV3IEZsb3dHcmFwaEludGVnZXIoLTEpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCBvYmplY3QgPSB0aGlzLm9iamVjdC5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSB0aGlzLmFycmF5LmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXguc2V0VmFsdWUobmV3IEZsb3dHcmFwaEludGVnZXIoYXJyYXkuaW5kZXhPZihvYmplY3QpKSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgYmxvY2tcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xuICAgICAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdD86IGFueSk6IHZvaWQge1xuICAgICAgICBzdXBlci5zZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5JbmRleE9mO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkluZGV4T2YsIEZsb3dHcmFwaEluZGV4T2ZCbG9jayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=