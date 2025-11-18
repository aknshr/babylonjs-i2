"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js":
/*!************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphBooleanToFloat: () => (/* binding */ FlowGraphBooleanToFloat),
/* harmony export */   FlowGraphBooleanToInt: () => (/* binding */ FlowGraphBooleanToInt),
/* harmony export */   FlowGraphFloatToBoolean: () => (/* binding */ FlowGraphFloatToBoolean),
/* harmony export */   FlowGraphFloatToInt: () => (/* binding */ FlowGraphFloatToInt),
/* harmony export */   FlowGraphIntToBoolean: () => (/* binding */ FlowGraphIntToBoolean),
/* harmony export */   FlowGraphIntToFloat: () => (/* binding */ FlowGraphIntToFloat)
/* harmony export */ });
/* harmony import */ var _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flowGraphUnaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that converts a boolean to a float.
 */
class FlowGraphBooleanToFloat extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => +a, "FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */, FlowGraphBooleanToFloat);
/**
 * A block that converts a boolean to an integer
 */
class FlowGraphBooleanToInt extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a) => core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger.FromValue(+a), "FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */, FlowGraphBooleanToInt);
/**
 * A block that converts a float to a boolean.
 */
class FlowGraphFloatToBoolean extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a) => !!a, "FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */, FlowGraphFloatToBoolean);
/**
 * A block that converts an integer to a boolean.
 */
class FlowGraphIntToBoolean extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a) => !!a.value, "FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */, FlowGraphIntToBoolean);
/**
 * A block that converts an integer to a float.
 */
class FlowGraphIntToFloat extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => a.value, "FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */, FlowGraphIntToFloat);
/**
 * A block that converts a float to an integer.
 */
class FlowGraphFloatToInt extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a) => {
            const roundingMode = config?.roundingMode;
            switch (roundingMode) {
                case "floor":
                    return core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger.FromValue(Math.floor(a));
                case "ceil":
                    return core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger.FromValue(Math.ceil(a));
                case "round":
                    return core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger.FromValue(Math.round(a));
                default:
                    return core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger.FromValue(a);
            }
        }, "FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */, FlowGraphFloatToInt);


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

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js":
/*!**************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphUnaryOperationBlock: () => (/* binding */ FlowGraphUnaryOperationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * @internal
 * The base block for all unary operation blocks. Receives an input of type InputT, and outputs a value of type ResultT.
 */
class FlowGraphUnaryOperationBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphCachedOperationBlock {
    constructor(inputRichType, resultRichType, _operation, _className, config) {
        super(resultRichType, config);
        this._operation = _operation;
        this._className = _className;
        this.a = this.registerDataInput("a", inputRichType);
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */
    _doOperation(context) {
        return this._operation(this.a.getValue(context));
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return this._className;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9UcmFuc2Zvcm1lcnNfZmxvd0dyYXBoVHlwZVRvVHlwZUJsb2Nrc19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUVBOzs7QUFHQTtBQUNBO0FBTUE7QUFPQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvVHJhbnNmb3JtZXJzL2Zsb3dHcmFwaFR5cGVUb1R5cGVCbG9ja3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB7IEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2sgfSBmcm9tIFwiLi4vZmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9ja1wiO1xuaW1wb3J0IHsgUmljaFR5cGVCb29sZWFuLCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIFJpY2hUeXBlTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlclwiO1xuXG4vKipcbiAqIEEgYmxvY2sgdGhhdCBjb252ZXJ0cyBhIGJvb2xlYW4gdG8gYSBmbG9hdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEJvb2xlYW5Ub0Zsb2F0IGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxib29sZWFuLCBudW1iZXI+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQm9vbGVhbiwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiArYSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Cb29sZWFuVG9GbG9hdCwgY29uZmlnKTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Cb29sZWFuVG9GbG9hdCwgRmxvd0dyYXBoQm9vbGVhblRvRmxvYXQpO1xuXG4vKipcbiAqIEEgYmxvY2sgdGhhdCBjb252ZXJ0cyBhIGJvb2xlYW4gdG8gYW4gaW50ZWdlclxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQm9vbGVhblRvSW50IGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxib29sZWFuLCBGbG93R3JhcGhJbnRlZ2VyPiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihSaWNoVHlwZUJvb2xlYW4sIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgKGEpID0+IEZsb3dHcmFwaEludGVnZXIuRnJvbVZhbHVlKCthKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Cb29sZWFuVG9JbnQsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQm9vbGVhblRvSW50LCBGbG93R3JhcGhCb29sZWFuVG9JbnQpO1xuXG4vKipcbiAqIEEgYmxvY2sgdGhhdCBjb252ZXJ0cyBhIGZsb2F0IHRvIGEgYm9vbGVhbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEZsb2F0VG9Cb29sZWFuIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxudW1iZXIsIGJvb2xlYW4+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCBSaWNoVHlwZUJvb2xlYW4sIChhKSA9PiAhIWEsIEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxvYXRUb0Jvb2xlYW4sIGNvbmZpZyk7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxvYXRUb0Jvb2xlYW4sIEZsb3dHcmFwaEZsb2F0VG9Cb29sZWFuKTtcblxuLyoqXG4gKiBBIGJsb2NrIHRoYXQgY29udmVydHMgYW4gaW50ZWdlciB0byBhIGJvb2xlYW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhJbnRUb0Jvb2xlYW4gZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaEludGVnZXIsIGJvb2xlYW4+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgUmljaFR5cGVCb29sZWFuLCAoYSkgPT4gISFhLnZhbHVlLCBGbG93R3JhcGhCbG9ja05hbWVzLkludFRvQm9vbGVhbiwgY29uZmlnKTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnRUb0Jvb2xlYW4sIEZsb3dHcmFwaEludFRvQm9vbGVhbik7XG5cbi8qKlxuICogQSBibG9jayB0aGF0IGNvbnZlcnRzIGFuIGludGVnZXIgdG8gYSBmbG9hdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEludFRvRmxvYXQgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaEludGVnZXIsIG51bWJlcj4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyLCBSaWNoVHlwZU51bWJlciwgKGEpID0+IGEudmFsdWUsIEZsb3dHcmFwaEJsb2NrTmFtZXMuSW50VG9GbG9hdCwgY29uZmlnKTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnRUb0Zsb2F0LCBGbG93R3JhcGhJbnRUb0Zsb2F0KTtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgZmxvYXQgdG8gaW50IGJsb2NrLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhGbG9hdFRvSW50Q29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFRoZSByb3VuZGluZyBtb2RlIHRvIHVzZS5cbiAgICAgKiBpZiBub3QgZGVmaW5lZCwgaXQgd2lsbCB1c2UgdGhlIEZsb3dHcmFwaEludGVnZXIgZGVmYXVsdCByb3VuZGluZyAoIGEgfCAwIClcbiAgICAgKi9cbiAgICByb3VuZGluZ01vZGU/OiBcImZsb29yXCIgfCBcImNlaWxcIiB8IFwicm91bmRcIjtcbn1cbi8qKlxuICogQSBibG9jayB0aGF0IGNvbnZlcnRzIGEgZmxvYXQgdG8gYW4gaW50ZWdlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEZsb2F0VG9JbnQgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPG51bWJlciwgRmxvd0dyYXBoSW50ZWdlcj4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhGbG9hdFRvSW50Q29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIFJpY2hUeXBlTnVtYmVyLFxuICAgICAgICAgICAgUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyLFxuICAgICAgICAgICAgKGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3VuZGluZ01vZGUgPSBjb25maWc/LnJvdW5kaW5nTW9kZTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJvdW5kaW5nTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmxvb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGbG93R3JhcGhJbnRlZ2VyLkZyb21WYWx1ZShNYXRoLmZsb29yKGEpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNlaWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGbG93R3JhcGhJbnRlZ2VyLkZyb21WYWx1ZShNYXRoLmNlaWwoYSkpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicm91bmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGbG93R3JhcGhJbnRlZ2VyLkZyb21WYWx1ZShNYXRoLnJvdW5kKGEpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBGbG93R3JhcGhJbnRlZ2VyLkZyb21WYWx1ZShhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9hdFRvSW50LFxuICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxvYXRUb0ludCwgRmxvd0dyYXBoRmxvYXRUb0ludCk7XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuXHJcbmNvbnN0IENhY2hlTmFtZSA9IFwiY2FjaGVkT3BlcmF0aW9uVmFsdWVcIjtcclxuY29uc3QgQ2FjaGVFeGVjSWROYW1lID0gXCJjYWNoZWRFeGVjdXRpb25JZFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCB3aWxsIGNhY2hlIHRoZSByZXN1bHQgb2YgYW4gb3BlcmF0aW9uIGFuZCBkZWxpdmVyIGl0IGFzIGFuIG91dHB1dC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxPdXRwdXRUPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248T3V0cHV0VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogV2hldGhlciB0aGUgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBpc1ZhbGlkOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXRSaWNoVHlwZTogUmljaFR5cGU8T3V0cHV0VD4sIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ2YWx1ZVwiLCBvdXRwdXRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJpc1ZhbGlkXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIE9wZXJhdGlvbiB0byByZWFsaXplXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBPdXRwdXRUIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIC0xKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPE91dHB1dFQ+Pih0aGlzLCBDYWNoZU5hbWUsIG51bGwpO1xyXG4gICAgICAgIGlmIChjYWNoZWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhY2hlZFZhbHVlICE9PSBudWxsICYmIGNhY2hlZEV4ZWN1dGlvbklkID09PSBjb250ZXh0LmV4ZWN1dGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjYWNoZWRWYWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuX2RvT3BlcmF0aW9uKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGNhbGN1bGF0ZWRWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZShmYWxzZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVOYW1lLCBjYWxjdWxhdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVFeGVjSWROYW1lLCBjb250ZXh0LmV4ZWN1dGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FsY3VsYXRlZFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIFRoZSBiYXNlIGJsb2NrIGZvciBhbGwgdW5hcnkgb3BlcmF0aW9uIGJsb2Nrcy4gUmVjZWl2ZXMgYW4gaW5wdXQgb2YgdHlwZSBJbnB1dFQsIGFuZCBvdXRwdXRzIGEgdmFsdWUgb2YgdHlwZSBSZXN1bHRULlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8SW5wdXRULCBSZXN1bHRUPiBleHRlbmRzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPFJlc3VsdFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGlucHV0IG9mIHRoaXMgYmxvY2tcclxuICAgICAqL1xyXG4gICAgYTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248SW5wdXRUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpbnB1dFJpY2hUeXBlOiBSaWNoVHlwZTxJbnB1dFQ+LFxyXG4gICAgICAgIHJlc3VsdFJpY2hUeXBlOiBSaWNoVHlwZTxSZXN1bHRUPixcclxuICAgICAgICBwcml2YXRlIF9vcGVyYXRpb246IChpbnB1dDogSW5wdXRUKSA9PiBSZXN1bHRULFxyXG4gICAgICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHJlc3VsdFJpY2hUeXBlLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuYSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhXCIsIGlucHV0UmljaFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIG9wZXJhdGlvbiBwZXJmb3JtZWQgYnkgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGdyYXBoIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBSZXN1bHRUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uKHRoaXMuYS5nZXRWYWx1ZShjb250ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==