"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphConstantBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphConstantBlock.js":
/*!********************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphConstantBlock.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphConstantBlock: () => (/* binding */ FlowGraphConstantBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/serialization */ "../core/dist/FlowGraph/serialization.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Block that returns a constant value.
 */
class FlowGraphConstantBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        this.output = this.registerDataOutput("output", (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeFromValue)(config.value));
    }
    _updateOutputs(context) {
        this.output.setValue(this.config.value, context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphConstantBlock" /* FlowGraphBlockNames.Constant */;
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     * @param valueSerializeFunction the function to use to serialize the value
     */
    serialize(serializationObject = {}, valueSerializeFunction = core_FlowGraph_serialization__WEBPACK_IMPORTED_MODULE_3__.defaultValueSerializationFunction) {
        super.serialize(serializationObject);
        valueSerializeFunction("value", this.config.value, serializationObject.config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphConstantBlock" /* FlowGraphBlockNames.Constant */, FlowGraphConstantBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhDb25zdGFudEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9EYXRhL2Zsb3dHcmFwaENvbnN0YW50QmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRSaWNoVHlwZUZyb21WYWx1ZSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3NlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBhIGNvbnN0YW50IGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoQ29uc3RhbnRCbG9ja0NvbmZpZ3VyYXRpb248VD4gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBjb25zdGFudC5cclxuICAgICAqL1xyXG4gICAgdmFsdWU6IFQ7XHJcbn1cclxuLyoqXHJcbiAqIEJsb2NrIHRoYXQgcmV0dXJucyBhIGNvbnN0YW50IHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvbnN0YW50QmxvY2s8VD4gZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgY29uc3RhbnQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvdXRwdXQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBjb25maWc6IElGbG93R3JhcGhDb25zdGFudEJsb2NrQ29uZmlndXJhdGlvbjxUPlxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcIm91dHB1dFwiLCBnZXRSaWNoVHlwZUZyb21WYWx1ZShjb25maWcudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3V0cHV0LnNldFZhbHVlKHRoaXMuY29uZmlnLnZhbHVlLCBjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNsYXNzIG5hbWUgb2YgdGhpcyBibG9ja1xyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNvbnN0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xyXG4gICAgICogQHBhcmFtIHZhbHVlU2VyaWFsaXplRnVuY3Rpb24gdGhlIGZ1bmN0aW9uIHRvIHVzZSB0byBzZXJpYWxpemUgdGhlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge30sXHJcbiAgICAgICAgdmFsdWVTZXJpYWxpemVGdW5jdGlvbjogKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpID0+IGFueSA9IGRlZmF1bHRWYWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgICAgIHZhbHVlU2VyaWFsaXplRnVuY3Rpb24oXCJ2YWx1ZVwiLCB0aGlzLmNvbmZpZy52YWx1ZSwgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db25zdGFudCwgRmxvd0dyYXBoQ29uc3RhbnRCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=