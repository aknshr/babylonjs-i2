"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphGetVariableBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js":
/*!***********************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphGetVariableBlock: () => (/* binding */ FlowGraphGetVariableBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A block that gets the value of a variable.
 * Variables are an stored in the context of the flow graph.
 */
class FlowGraphGetVariableBlock extends _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    /**
     * Construct a FlowGraphGetVariableBlock.
     * @param config construction parameters
     */
    constructor(config) {
        super(config);
        this.config = config;
        // The output connection has to have the name of the variable.
        this.value = this.registerDataOutput("value", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config.initialValue);
    }
    /**
     * @internal
     */
    _updateOutputs(context) {
        const variableNameValue = this.config.variable;
        if (context.hasVariable(variableNameValue)) {
            this.value.setValue(context.getVariable(variableNameValue), context);
        }
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.variable = this.config.variable;
    }
    getClassName() {
        return "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */, FlowGraphGetVariableBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBa0JBOzs7QUFHQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQW55IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBGbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoR2V0VmFyaWFibGVCbG9ja0NvbmZpZ3VyYXRpb248VD4gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGdldC5cclxuICAgICAqL1xyXG4gICAgdmFyaWFibGU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbFZhbHVlPzogVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCBnZXRzIHRoZSB2YWx1ZSBvZiBhIHZhcmlhYmxlLlxyXG4gKiBWYXJpYWJsZXMgYXJlIGFuIHN0b3JlZCBpbiB0aGUgY29udGV4dCBvZiB0aGUgZmxvdyBncmFwaC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrPFQ+IGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIEZsb3dHcmFwaEdldFZhcmlhYmxlQmxvY2suXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIGNvbnN0cnVjdGlvbiBwYXJhbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvdmVycmlkZSBjb25maWc6IElGbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrQ29uZmlndXJhdGlvbjxUPikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBvdXRwdXQgY29ubmVjdGlvbiBoYXMgdG8gaGF2ZSB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwidmFsdWVcIiwgUmljaFR5cGVBbnksIGNvbmZpZy5pbml0aWFsVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lVmFsdWUgPSB0aGlzLmNvbmZpZy52YXJpYWJsZTtcclxuICAgICAgICBpZiAoY29udGV4dC5oYXNWYXJpYWJsZSh2YXJpYWJsZU5hbWVWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjb250ZXh0LmdldFZhcmlhYmxlKHZhcmlhYmxlTmFtZVZhbHVlKSwgY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcudmFyaWFibGUgPSB0aGlzLmNvbmZpZy52YXJpYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0VmFyaWFibGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRWYXJpYWJsZSwgRmxvd0dyYXBoR2V0VmFyaWFibGVCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=