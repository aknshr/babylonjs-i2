"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Utils_flowGraphFunctionReferenceBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js":
/*!***********************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphFunctionReferenceBlock: () => (/* binding */ FlowGraphFunctionReferenceBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A flow graph block that takes a function name, an object and an optional context as inputs and calls the function on the object.
 */
class FlowGraphFunctionReferenceBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.functionName = this.registerDataInput("functionName", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeString);
        this.object = this.registerDataInput("object", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.context = this.registerDataInput("context", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, null);
        this.output = this.registerDataOutput("output", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    _updateOutputs(context) {
        const functionName = this.functionName.getValue(context);
        const object = this.object.getValue(context);
        const contextValue = this.context.getValue(context);
        if (object && functionName) {
            const func = object[functionName];
            if (func && typeof func === "function") {
                this.output.setValue(func.bind(contextValue), context);
            }
        }
    }
    getClassName() {
        return "FlowGraphFunctionReference" /* FlowGraphBlockNames.FunctionReference */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphFunctionReference" /* FlowGraphBlockNames.FunctionReference */, FlowGraphFunctionReferenceBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9VdGlsc19mbG93R3JhcGhGdW5jdGlvblJlZmVyZW5jZUJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQW9CQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9EYXRhL1V0aWxzL2Zsb3dHcmFwaEZ1bmN0aW9uUmVmZXJlbmNlQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZVN0cmluZyB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5cbi8qKlxuICogQSBmbG93IGdyYXBoIGJsb2NrIHRoYXQgdGFrZXMgYSBmdW5jdGlvbiBuYW1lLCBhbiBvYmplY3QgYW5kIGFuIG9wdGlvbmFsIGNvbnRleHQgYXMgaW5wdXRzIGFuZCBjYWxscyB0aGUgZnVuY3Rpb24gb24gdGhlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEZ1bmN0aW9uUmVmZXJlbmNlQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogSW5wdXQ6IFRoZSBmdW5jdGlvbiBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBmdW5jdGlvbk5hbWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogSW5wdXQ6IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBmdW5jdGlvbiBmcm9tLlxuICAgICAqIFRoaXMgY2FuIGJlIGEgY29uc3RydWN0ZWQgY2xhc3Mgb3IgYSBjb2xsZWN0aW9uIG9mIHN0YW5kLWFsb25lIGZ1bmN0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgb2JqZWN0OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+O1xuICAgIC8qKlxuICAgICAqIElucHV0OiBUaGUgY29udGV4dCB0byBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoLlxuICAgICAqIFRoaXMgaXMgb3B0aW9uYWwuIElmIG5vdCBwcm92aWRlZCwgdGhlIGZ1bmN0aW9uIHdpbGwgYmUgYm91bmQgdG8gbnVsbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248YW55PjtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQ6IFRoZSBmdW5jdGlvbiByZWZlcmVuY2VkIGJ5IGZ1bmN0aW9uTmFtZSBmcm9tIHRoZSBvYmplY3QsIGJvdW5kIHRvIHRoZSBjb250ZXh0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvdXRwdXQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZ1bmN0aW9uPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAgICAqL1xuICAgICAgICBjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25OYW1lID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImZ1bmN0aW9uTmFtZVwiLCBSaWNoVHlwZVN0cmluZyk7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcIm9iamVjdFwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJjb250ZXh0XCIsIFJpY2hUeXBlQW55LCBudWxsKTtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcIm91dHB1dFwiLCBSaWNoVHlwZUFueSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZnVuY3Rpb25OYW1lID0gdGhpcy5mdW5jdGlvbk5hbWUuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IHRoaXMub2JqZWN0LmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB0aGlzLmNvbnRleHQuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGlmIChvYmplY3QgJiYgZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBmdW5jID0gb2JqZWN0W2Z1bmN0aW9uTmFtZV07XG4gICAgICAgICAgICBpZiAoZnVuYyAmJiB0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQuc2V0VmFsdWUoZnVuYy5iaW5kKGNvbnRleHRWYWx1ZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5GdW5jdGlvblJlZmVyZW5jZTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5GdW5jdGlvblJlZmVyZW5jZSwgRmxvd0dyYXBoRnVuY3Rpb25SZWZlcmVuY2VCbG9jayk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9