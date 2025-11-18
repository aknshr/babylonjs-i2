"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphGetPropertyBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js":
/*!***************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCachedOperationBlock: () => (/* binding */ FlowGraphCachedOperationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const CacheName = "cachedOperationValue";
const CacheExecIdName = "cachedExecutionId";
/**
 * A block that will cache the result of an operation and deliver it as an output.
 */
class FlowGraphCachedOperationBlock extends _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(outputRichType, config) {
        super(config);
        this.value = this.registerDataOutput("value", outputRichType);
        this.isValid = this.registerDataOutput("isValid", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, CacheExecIdName, -1);
        const cachedValue = context._getExecutionVariable(this, CacheName, null);
        if (cachedValue !== undefined && cachedValue !== null && cachedExecutionId === context.executionId) {
            this.isValid.setValue(true, context);
            this.value.setValue(cachedValue, context);
        }
        else {
            try {
                const calculatedValue = this._doOperation(context);
                if (calculatedValue === undefined || calculatedValue === null) {
                    this.isValid.setValue(false, context);
                    return;
                }
                context._setExecutionVariable(this, CacheName, calculatedValue);
                context._setExecutionVariable(this, CacheExecIdName, context.executionId);
                this.value.setValue(calculatedValue, context);
                this.isValid.setValue(true, context);
            }
            catch (e) {
                this.isValid.setValue(false, context);
            }
        }
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

/***/ }),

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js":
/*!***********************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphGetPropertyBlock: () => (/* binding */ FlowGraphGetPropertyBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * This block will deliver a property of an asset, based on the property name and an input asset.
 * The property name can include dots ("."), which will be interpreted as a path to the property.
 *
 * For example, with an input of a mesh asset, the property name "position.x" will deliver the x component of the position of the mesh.
 *
 * Note that it is recommended to input the object on which you are working on (i.e. a material) rather than providing a mesh as object and then getting the material from it.
 */
class FlowGraphGetPropertyBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphCachedOperationBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeAny, config);
        this.config = config;
        this.object = this.registerDataInput("object", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeAny, config.object);
        this.propertyName = this.registerDataInput("propertyName", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeAny, config.propertyName);
        this.customGetFunction = this.registerDataInput("customGetFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeAny);
    }
    _doOperation(context) {
        const getter = this.customGetFunction.getValue(context);
        let value;
        if (getter) {
            value = getter(this.object.getValue(context), this.propertyName.getValue(context), context);
        }
        else {
            const target = this.object.getValue(context);
            const propertyName = this.propertyName.getValue(context);
            value = target && propertyName ? this._getPropertyValue(target, propertyName) : undefined;
        }
        return value;
    }
    _getPropertyValue(target, propertyName) {
        const path = propertyName.split(".");
        let value = target;
        for (const prop of path) {
            value = value[prop];
            if (value === undefined) {
                return;
            }
        }
        return value;
    }
    getClassName() {
        return "FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */, FlowGraphGetPropertyBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhHZXRQcm9wZXJ0eUJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUVBO0FBbUJBOzs7Ozs7O0FBT0E7QUFDQTtBQWlCQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoR2V0UHJvcGVydHlCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuXHJcbmNvbnN0IENhY2hlTmFtZSA9IFwiY2FjaGVkT3BlcmF0aW9uVmFsdWVcIjtcclxuY29uc3QgQ2FjaGVFeGVjSWROYW1lID0gXCJjYWNoZWRFeGVjdXRpb25JZFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCB3aWxsIGNhY2hlIHRoZSByZXN1bHQgb2YgYW4gb3BlcmF0aW9uIGFuZCBkZWxpdmVyIGl0IGFzIGFuIG91dHB1dC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxPdXRwdXRUPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248T3V0cHV0VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogV2hldGhlciB0aGUgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBpc1ZhbGlkOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXRSaWNoVHlwZTogUmljaFR5cGU8T3V0cHV0VD4sIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ2YWx1ZVwiLCBvdXRwdXRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJpc1ZhbGlkXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIE9wZXJhdGlvbiB0byByZWFsaXplXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBPdXRwdXRUIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIC0xKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPE91dHB1dFQ+Pih0aGlzLCBDYWNoZU5hbWUsIG51bGwpO1xyXG4gICAgICAgIGlmIChjYWNoZWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhY2hlZFZhbHVlICE9PSBudWxsICYmIGNhY2hlZEV4ZWN1dGlvbklkID09PSBjb250ZXh0LmV4ZWN1dGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjYWNoZWRWYWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuX2RvT3BlcmF0aW9uKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGNhbGN1bGF0ZWRWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZShmYWxzZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVOYW1lLCBjYWxjdWxhdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVFeGVjSWROYW1lLCBjb250ZXh0LmV4ZWN1dGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FsY3VsYXRlZFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEFzc2V0VHlwZSwgRmxvd0dyYXBoQXNzZXRUeXBlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEFzc2V0c0NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB7IEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2tcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoR2V0UHJvcGVydHlCbG9ja0NvbmZpZ3VyYXRpb248TyBleHRlbmRzIEZsb3dHcmFwaEFzc2V0VHlwZT4gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlIHNldFxuICAgICAqL1xuICAgIHByb3BlcnR5TmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYXNzZXQgZnJvbSB3aGljaCB0aGUgcHJvcGVydHkgd2lsbCBiZSByZXRyaWV2ZWRcbiAgICAgKi9cbiAgICBvYmplY3Q/OiBBc3NldFR5cGU8Tz47XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYmxvY2sgd2lsbCByZXNldCB0aGUgb3V0cHV0IHRvIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gdGhlIHRhcmdldCBhc3NldCBpcyB1bmRlZmluZWQuXG4gICAgICovXG4gICAgcmVzZXRUb0RlZmF1bHRXaGVuVW5kZWZpbmVkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGlzIGJsb2NrIHdpbGwgZGVsaXZlciBhIHByb3BlcnR5IG9mIGFuIGFzc2V0LCBiYXNlZCBvbiB0aGUgcHJvcGVydHkgbmFtZSBhbmQgYW4gaW5wdXQgYXNzZXQuXG4gKiBUaGUgcHJvcGVydHkgbmFtZSBjYW4gaW5jbHVkZSBkb3RzIChcIi5cIiksIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYSBwYXRoIHRvIHRoZSBwcm9wZXJ0eS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgd2l0aCBhbiBpbnB1dCBvZiBhIG1lc2ggYXNzZXQsIHRoZSBwcm9wZXJ0eSBuYW1lIFwicG9zaXRpb24ueFwiIHdpbGwgZGVsaXZlciB0aGUgeCBjb21wb25lbnQgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZXNoLlxuICpcbiAqIE5vdGUgdGhhdCBpdCBpcyByZWNvbW1lbmRlZCB0byBpbnB1dCB0aGUgb2JqZWN0IG9uIHdoaWNoIHlvdSBhcmUgd29ya2luZyBvbiAoaS5lLiBhIG1hdGVyaWFsKSByYXRoZXIgdGhhbiBwcm92aWRpbmcgYSBtZXNoIGFzIG9iamVjdCBhbmQgdGhlbiBnZXR0aW5nIHRoZSBtYXRlcmlhbCBmcm9tIGl0LlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoR2V0UHJvcGVydHlCbG9jazxQIGV4dGVuZHMgYW55LCBPIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlPiBleHRlbmRzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPFA+IHtcbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgYXNzZXQgZnJvbSB3aGljaCB0aGUgcHJvcGVydHkgd2lsbCBiZSByZXRyaWV2ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgb2JqZWN0OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxBc3NldFR5cGU8Tz4+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRoYXQgd2lsbCBiZSBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJvcGVydHlOYW1lOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxzdHJpbmc+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5LlxuICAgICAqIFRoaXMgd2lsbCBiZSB1c2VkIGlmIGRlZmluZWQsIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgZ2V0IGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBjdXN0b21HZXRGdW5jdGlvbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248KHRhcmdldDogQXNzZXRUeXBlPE8+LCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkgPT4gUCB8IHVuZGVmaW5lZD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGNvbmZpZzogSUZsb3dHcmFwaEdldFByb3BlcnR5QmxvY2tDb25maWd1cmF0aW9uPE8+XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBjb25maWcpO1xuICAgICAgICB0aGlzLm9iamVjdCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJvYmplY3RcIiwgUmljaFR5cGVBbnksIGNvbmZpZy5vYmplY3QpO1xuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJwcm9wZXJ0eU5hbWVcIiwgUmljaFR5cGVBbnksIGNvbmZpZy5wcm9wZXJ0eU5hbWUpO1xuICAgICAgICB0aGlzLmN1c3RvbUdldEZ1bmN0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImN1c3RvbUdldEZ1bmN0aW9uXCIsIFJpY2hUeXBlQW55KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBQIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3QgZ2V0dGVyID0gdGhpcy5jdXN0b21HZXRGdW5jdGlvbi5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoZ2V0dGVyKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGdldHRlcih0aGlzLm9iamVjdC5nZXRWYWx1ZShjb250ZXh0KSwgdGhpcy5wcm9wZXJ0eU5hbWUuZ2V0VmFsdWUoY29udGV4dCksIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5vYmplY3QuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLnByb3BlcnR5TmFtZS5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0ICYmIHByb3BlcnR5TmFtZSA/IHRoaXMuX2dldFByb3BlcnR5VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eU5hbWUpIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRQcm9wZXJ0eVZhbHVlKHRhcmdldDogQXNzZXRUeXBlPE8+LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IFAgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCBwYXRoID0gcHJvcGVydHlOYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSB0YXJnZXQ7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwYXRoKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW3Byb3BdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlIGFzIFA7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRQcm9wZXJ0eTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRQcm9wZXJ0eSwgRmxvd0dyYXBoR2V0UHJvcGVydHlCbG9jayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=