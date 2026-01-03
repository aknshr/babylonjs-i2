"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Utils_flowGraphContextBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js":
/*!*************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphContextBlock: () => (/* binding */ FlowGraphContextBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A block that outputs elements from the context
 */
class FlowGraphContextBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(config) {
        super(config);
        this.userVariables = this.registerDataOutput("userVariables", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.executionId = this.registerDataOutput("executionId", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
    }
    _updateOutputs(context) {
        this.userVariables.setValue(context.userVariables, context);
        this.executionId.setValue(context.executionId, context);
    }
    serialize(serializationObject) {
        super.serialize(serializationObject);
    }
    getClassName() {
        return "FlowGraphContextBlock" /* FlowGraphBlockNames.Context */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphContextBlock" /* FlowGraphBlockNames.Context */, FlowGraphContextBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9VdGlsc19mbG93R3JhcGhDb250ZXh0QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9EYXRhL1V0aWxzL2Zsb3dHcmFwaENvbnRleHRCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbG93R3JhcGhCbG9jaywgdHlwZSBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcblxuLyoqXG4gKiBBIGJsb2NrIHRoYXQgb3V0cHV0cyBlbGVtZW50cyBmcm9tIHRoZSBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb250ZXh0QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSB1c2VyIHZhcmlhYmxlcyBmcm9tIHRoZSBjb250ZXh0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHVzZXJWYXJpYWJsZXM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaENvbnRleHRbXCJ1c2VyVmFyaWFibGVzXCJdPjtcblxuICAgIC8qKlxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgZXhlY3V0aW9uIGlkIGZyb20gdGhlIGNvbnRleHRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZXhlY3V0aW9uSWQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaENvbnRleHRbXCJleGVjdXRpb25JZFwiXT47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy51c2VyVmFyaWFibGVzID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ1c2VyVmFyaWFibGVzXCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgdGhpcy5leGVjdXRpb25JZCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwiZXhlY3V0aW9uSWRcIiwgUmljaFR5cGVOdW1iZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlclZhcmlhYmxlcy5zZXRWYWx1ZShjb250ZXh0LnVzZXJWYXJpYWJsZXMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLmV4ZWN1dGlvbklkLnNldFZhbHVlKGNvbnRleHQuZXhlY3V0aW9uSWQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdD86IGFueSk6IHZvaWQge1xuICAgICAgICBzdXBlci5zZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5Db250ZXh0O1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkNvbnRleHQsIEZsb3dHcmFwaENvbnRleHRCbG9jayk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9