"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphDeterminantBlock: () => (/* binding */ FlowGraphDeterminantBlock),
/* harmony export */   FlowGraphInvertMatrixBlock: () => (/* binding */ FlowGraphInvertMatrixBlock),
/* harmony export */   FlowGraphMatrixComposeBlock: () => (/* binding */ FlowGraphMatrixComposeBlock),
/* harmony export */   FlowGraphMatrixDecomposeBlock: () => (/* binding */ FlowGraphMatrixDecomposeBlock),
/* harmony export */   FlowGraphMatrixMultiplicationBlock: () => (/* binding */ FlowGraphMatrixMultiplicationBlock),
/* harmony export */   FlowGraphTransposeBlock: () => (/* binding */ FlowGraphTransposeBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flowGraphUnaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js");
/* harmony import */ var _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flowGraphBinaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Transposes a matrix.
 */
class FlowGraphTransposeBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__.FlowGraphUnaryOperationBlock {
    /**
     * Creates a new instance of the block.
     * @param config the configuration of the block
     */
    constructor(config) {
        super((0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (a) => (a.transpose ? a.transpose() : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.Transpose(a)), "FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */, FlowGraphTransposeBlock);
/**
 * Gets the determinant of a matrix.
 */
class FlowGraphDeterminantBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__.FlowGraphUnaryOperationBlock {
    /**
     * Creates a new instance of the block.
     * @param config the configuration of the block
     */
    constructor(config) {
        super((0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => a.determinant(), "FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */, FlowGraphDeterminantBlock);
/**
 * Inverts a matrix.
 */
class FlowGraphInvertMatrixBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__.FlowGraphUnaryOperationBlock {
    /**
     * Creates a new instance of the inverse block.
     * @param config the configuration of the block
     */
    constructor(config) {
        super((0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (a) => (a.inverse ? a.inverse() : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.Invert(a)), "FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */, FlowGraphInvertMatrixBlock);
/**
 * Multiplies two matrices.
 */
class FlowGraphMatrixMultiplicationBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphBinaryOperationBlock {
    /**
     * Creates a new instance of the multiplication block.
     * Note - this is similar to the math multiplication if not using matrix per-component multiplication.
     * @param config the configuration of the block
     */
    constructor(config) {
        super((0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */), (a, b) => b.multiply(a), "FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */, FlowGraphMatrixMultiplicationBlock);
/**
 * Matrix decompose block
 */
class FlowGraphMatrixDecomposeBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(config) {
        super(config);
        this.input = this.registerDataInput("input", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix);
        this.position = this.registerDataOutput("position", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
        this.rotationQuaternion = this.registerDataOutput("rotationQuaternion", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion);
        this.scaling = this.registerDataOutput("scaling", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
        this.isValid = this.registerDataOutput("isValid", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, false);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, "executionId", -1);
        const cachedPosition = context._getExecutionVariable(this, "cachedPosition", null);
        const cachedRotation = context._getExecutionVariable(this, "cachedRotation", null);
        const cachedScaling = context._getExecutionVariable(this, "cachedScaling", null);
        if (cachedExecutionId === context.executionId && cachedPosition && cachedRotation && cachedScaling) {
            this.position.setValue(cachedPosition, context);
            this.rotationQuaternion.setValue(cachedRotation, context);
            this.scaling.setValue(cachedScaling, context);
        }
        else {
            const matrix = this.input.getValue(context);
            const position = cachedPosition || new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3();
            const rotation = cachedRotation || new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion();
            const scaling = cachedScaling || new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3();
            // check matrix last column components should be 0,0,0,1
            // round them to 4 decimal places
            const m3 = Math.round(matrix.m[3] * 10000) / 10000;
            const m7 = Math.round(matrix.m[7] * 10000) / 10000;
            const m11 = Math.round(matrix.m[11] * 10000) / 10000;
            const m15 = Math.round(matrix.m[15] * 10000) / 10000;
            if (m3 !== 0 || m7 !== 0 || m11 !== 0 || m15 !== 1) {
                this.isValid.setValue(false, context);
                this.position.setValue(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Zero(), context);
                this.rotationQuaternion.setValue(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Quaternion.Identity(), context);
                this.scaling.setValue(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.One(), context);
                return;
            }
            // make the checks for validity
            const valid = matrix.decompose(scaling, rotation, position);
            this.isValid.setValue(valid, context);
            this.position.setValue(position, context);
            this.rotationQuaternion.setValue(rotation, context);
            this.scaling.setValue(scaling, context);
            context._setExecutionVariable(this, "cachedPosition", position);
            context._setExecutionVariable(this, "cachedRotation", rotation);
            context._setExecutionVariable(this, "cachedScaling", scaling);
            context._setExecutionVariable(this, "executionId", context.executionId);
        }
    }
    getClassName() {
        return "FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */, FlowGraphMatrixDecomposeBlock);
/**
 * Matrix compose block
 */
class FlowGraphMatrixComposeBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(config) {
        super(config);
        this.position = this.registerDataInput("position", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
        this.rotationQuaternion = this.registerDataInput("rotationQuaternion", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion);
        this.scaling = this.registerDataInput("scaling", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
        this.value = this.registerDataOutput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, "executionId", -1);
        const cachedMatrix = context._getExecutionVariable(this, "cachedMatrix", null);
        if (cachedExecutionId === context.executionId && cachedMatrix) {
            this.value.setValue(cachedMatrix, context);
        }
        else {
            const matrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.Compose(this.scaling.getValue(context), this.rotationQuaternion.getValue(context), this.position.getValue(context));
            this.value.setValue(matrix, context);
            context._setExecutionVariable(this, "cachedMatrix", matrix);
            context._setExecutionVariable(this, "executionId", context.executionId);
        }
    }
    getClassName() {
        return "FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */, FlowGraphMatrixComposeBlock);


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

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js":
/*!***************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphBinaryOperationBlock: () => (/* binding */ FlowGraphBinaryOperationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * The base block for all binary operation blocks. Receives an input of type
 * LeftT, one of type RightT, and outputs a value of type ResultT.
 */
class FlowGraphBinaryOperationBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphCachedOperationBlock {
    constructor(leftRichType, rightRichType, resultRichType, _operation, _className, config) {
        super(resultRichType, config);
        this._operation = _operation;
        this._className = _className;
        this.a = this.registerDataInput("a", leftRichType);
        this.b = this.registerDataInput("b", rightRichType);
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */
    _doOperation(context) {
        const a = this.a.getValue(context);
        const b = this.b.getValue(context);
        return this._operation(a, b);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9NYXRoX2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3NfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBR0E7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQVlBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE9BO0FBQ0E7OztBQUdBO0FBQ0E7QUFVQTtBQVFBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBRUE7OztBQUdBO0FBQ0E7QUFNQTtBQU9BO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xuaW1wb3J0IHtcbiAgICBGbG93R3JhcGhUeXBlcyxcbiAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZSxcbiAgICBSaWNoVHlwZUJvb2xlYW4sXG4gICAgUmljaFR5cGVNYXRyaXgsXG4gICAgUmljaFR5cGVOdW1iZXIsXG4gICAgUmljaFR5cGVRdWF0ZXJuaW9uLFxuICAgIFJpY2hUeXBlVmVjdG9yMyxcbn0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgTWF0cml4LCBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoTWF0cml4MkQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoTWF0cml4XCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuLi9mbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhNYXRyaXggfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdXRpbHNcIjtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgbWF0cml4IGJsb2Nrcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoTWF0cml4QmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIG1hdHJpeC4gRGVmYXVsdCBpcyBNYXRyaXggKHdoaWNoIGlzIDR4NClcbiAgICAgKi9cbiAgICBtYXRyaXhUeXBlOiBGbG93R3JhcGhUeXBlcztcbn1cbi8qKlxuICogVHJhbnNwb3NlcyBhIG1hdHJpeC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFRyYW5zcG9zZUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRyaXgsIEZsb3dHcmFwaE1hdHJpeD4ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJsb2NrLlxuICAgICAqIEBwYXJhbSBjb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaE1hdHJpeEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZz8ubWF0cml4VHlwZSB8fCBGbG93R3JhcGhUeXBlcy5NYXRyaXgpLFxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy5tYXRyaXhUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCksXG4gICAgICAgICAgICAoYSkgPT4gKGEudHJhbnNwb3NlID8gYS50cmFuc3Bvc2UoKSA6IE1hdHJpeC5UcmFuc3Bvc2UoYSBhcyBNYXRyaXgpKSxcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJhbnNwb3NlLFxuICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICk7XG4gICAgfVxufVxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zcG9zZSwgRmxvd0dyYXBoVHJhbnNwb3NlQmxvY2spO1xuXG4vKipcbiAqIEdldHMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4LlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoRGV0ZXJtaW5hbnRCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0cml4LCBudW1iZXI+IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBibG9jay5cbiAgICAgKiBAcGFyYW0gY29uZmlnIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhNYXRyaXhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy5tYXRyaXhUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCksIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gYS5kZXRlcm1pbmFudCgpLCBGbG93R3JhcGhCbG9ja05hbWVzLkRldGVybWluYW50LCBjb25maWcpO1xuICAgIH1cbn1cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5EZXRlcm1pbmFudCwgRmxvd0dyYXBoRGV0ZXJtaW5hbnRCbG9jayk7XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdHJpeC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEludmVydE1hdHJpeEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRyaXgsIEZsb3dHcmFwaE1hdHJpeD4ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGludmVyc2UgYmxvY2suXG4gICAgICogQHBhcmFtIGNvbmZpZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYmxvY2tcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoTWF0cml4QmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy5tYXRyaXhUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCksXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/Lm1hdHJpeFR5cGUgfHwgRmxvd0dyYXBoVHlwZXMuTWF0cml4KSxcbiAgICAgICAgICAgIChhKSA9PiAoKGEgYXMgRmxvd0dyYXBoTWF0cml4MkQpLmludmVyc2UgPyAoYSBhcyBGbG93R3JhcGhNYXRyaXgyRCkuaW52ZXJzZSgpIDogTWF0cml4LkludmVydChhIGFzIE1hdHJpeCkpLFxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnZlcnRNYXRyaXgsXG4gICAgICAgICAgICBjb25maWdcbiAgICAgICAgKTtcbiAgICB9XG59XG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuSW52ZXJ0TWF0cml4LCBGbG93R3JhcGhJbnZlcnRNYXRyaXhCbG9jayk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0cmljZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhNYXRyaXhNdWx0aXBsaWNhdGlvbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0cml4LCBGbG93R3JhcGhNYXRyaXgsIEZsb3dHcmFwaE1hdHJpeD4ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIG11bHRpcGxpY2F0aW9uIGJsb2NrLlxuICAgICAqIE5vdGUgLSB0aGlzIGlzIHNpbWlsYXIgdG8gdGhlIG1hdGggbXVsdGlwbGljYXRpb24gaWYgbm90IHVzaW5nIG1hdHJpeCBwZXItY29tcG9uZW50IG11bHRpcGxpY2F0aW9uLlxuICAgICAqIEBwYXJhbSBjb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaE1hdHJpeEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZz8ubWF0cml4VHlwZSB8fCBGbG93R3JhcGhUeXBlcy5NYXRyaXgpLFxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy5tYXRyaXhUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCksXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/Lm1hdHJpeFR5cGUgfHwgRmxvd0dyYXBoVHlwZXMuTWF0cml4KSxcbiAgICAgICAgICAgIChhLCBiKSA9PiBiLm11bHRpcGx5KGEgYXMgYW55KSxcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF0cml4TXVsdGlwbGljYXRpb24sXG4gICAgICAgICAgICBjb25maWdcbiAgICAgICAgKTtcbiAgICB9XG59XG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF0cml4TXVsdGlwbGljYXRpb24sIEZsb3dHcmFwaE1hdHJpeE11bHRpcGxpY2F0aW9uQmxvY2spO1xuXG4vKipcbiAqIE1hdHJpeCBkZWNvbXBvc2UgYmxvY2tcbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaE1hdHJpeERlY29tcG9zZUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBvZiB0aGlzIGJsb2NrXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGlucHV0OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxNYXRyaXg+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG91dHB1dCBvZiB0aGlzIGJsb2NrXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxWZWN0b3IzPjtcbiAgICAvKipcbiAgICAgKiBUaGUgcm90YXRpb24gb3V0cHV0IG9mIHRoaXMgYmxvY2tcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgcm90YXRpb25RdWF0ZXJuaW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxRdWF0ZXJuaW9uPjtcbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbGluZyBvdXRwdXQgb2YgdGhpcyBibG9ja1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBzY2FsaW5nOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxWZWN0b3IzPjtcblxuICAgIC8qKlxuICAgICAqIElzIHRoZSBtYXRyaXggdmFsaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNWYWxpZDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiaW5wdXRcIiwgUmljaFR5cGVNYXRyaXgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJwb3NpdGlvblwiLCBSaWNoVHlwZVZlY3RvcjMpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwicm90YXRpb25RdWF0ZXJuaW9uXCIsIFJpY2hUeXBlUXVhdGVybmlvbik7XG4gICAgICAgIHRoaXMuc2NhbGluZyA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwic2NhbGluZ1wiLCBSaWNoVHlwZVZlY3RvcjMpO1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImlzVmFsaWRcIiwgUmljaFR5cGVCb29sZWFuLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImV4ZWN1dGlvbklkXCIsIC0xKTtcbiAgICAgICAgY29uc3QgY2FjaGVkUG9zaXRpb24gPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZFBvc2l0aW9uXCIsIG51bGwpO1xuICAgICAgICBjb25zdCBjYWNoZWRSb3RhdGlvbiA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiY2FjaGVkUm90YXRpb25cIiwgbnVsbCk7XG4gICAgICAgIGNvbnN0IGNhY2hlZFNjYWxpbmcgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZFNjYWxpbmdcIiwgbnVsbCk7XG4gICAgICAgIGlmIChjYWNoZWRFeGVjdXRpb25JZCA9PT0gY29udGV4dC5leGVjdXRpb25JZCAmJiBjYWNoZWRQb3NpdGlvbiAmJiBjYWNoZWRSb3RhdGlvbiAmJiBjYWNoZWRTY2FsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldFZhbHVlKGNhY2hlZFBvc2l0aW9uLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uLnNldFZhbHVlKGNhY2hlZFJvdGF0aW9uLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGluZy5zZXRWYWx1ZShjYWNoZWRTY2FsaW5nLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNhY2hlZFBvc2l0aW9uIHx8IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbiA9IGNhY2hlZFJvdGF0aW9uIHx8IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzY2FsaW5nID0gY2FjaGVkU2NhbGluZyB8fCBuZXcgVmVjdG9yMygpO1xuICAgICAgICAgICAgLy8gY2hlY2sgbWF0cml4IGxhc3QgY29sdW1uIGNvbXBvbmVudHMgc2hvdWxkIGJlIDAsMCwwLDFcbiAgICAgICAgICAgIC8vIHJvdW5kIHRoZW0gdG8gNCBkZWNpbWFsIHBsYWNlc1xuICAgICAgICAgICAgY29uc3QgbTMgPSBNYXRoLnJvdW5kKG1hdHJpeC5tWzNdICogMTAwMDApIC8gMTAwMDA7XG4gICAgICAgICAgICBjb25zdCBtNyA9IE1hdGgucm91bmQobWF0cml4Lm1bN10gKiAxMDAwMCkgLyAxMDAwMDtcbiAgICAgICAgICAgIGNvbnN0IG0xMSA9IE1hdGgucm91bmQobWF0cml4Lm1bMTFdICogMTAwMDApIC8gMTAwMDA7XG4gICAgICAgICAgICBjb25zdCBtMTUgPSBNYXRoLnJvdW5kKG1hdHJpeC5tWzE1XSAqIDEwMDAwKSAvIDEwMDAwO1xuICAgICAgICAgICAgaWYgKG0zICE9PSAwIHx8IG03ICE9PSAwIHx8IG0xMSAhPT0gMCB8fCBtMTUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQuc2V0VmFsdWUoZmFsc2UsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0VmFsdWUoVmVjdG9yMy5aZXJvKCksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uLnNldFZhbHVlKFF1YXRlcm5pb24uSWRlbnRpdHkoKSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsaW5nLnNldFZhbHVlKFZlY3RvcjMuT25lKCksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIGNoZWNrcyBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkID0gbWF0cml4LmRlY29tcG9zZShzY2FsaW5nLCByb3RhdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKHZhbGlkLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0VmFsdWUocG9zaXRpb24sIGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24uc2V0VmFsdWUocm90YXRpb24sIGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5zY2FsaW5nLnNldFZhbHVlKHNjYWxpbmcsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRQb3NpdGlvblwiLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZFJvdGF0aW9uXCIsIHJvdGF0aW9uKTtcbiAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiY2FjaGVkU2NhbGluZ1wiLCBzY2FsaW5nKTtcbiAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiZXhlY3V0aW9uSWRcIiwgY29udGV4dC5leGVjdXRpb25JZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLk1hdHJpeERlY29tcG9zZTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRyaXhEZWNvbXBvc2UsIEZsb3dHcmFwaE1hdHJpeERlY29tcG9zZUJsb2NrKTtcblxuLyoqXG4gKiBNYXRyaXggY29tcG9zZSBibG9ja1xuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTWF0cml4Q29tcG9zZUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBpbnB1dCBvZiB0aGlzIGJsb2NrXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxWZWN0b3IzPjtcbiAgICAvKipcbiAgICAgKiBUaGUgcm90YXRpb24gaW5wdXQgb2YgdGhpcyBibG9ja1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSByb3RhdGlvblF1YXRlcm5pb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFF1YXRlcm5pb24+O1xuICAgIC8qKlxuICAgICAqIFRoZSBzY2FsaW5nIGlucHV0IG9mIHRoaXMgYmxvY2tcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgc2NhbGluZzogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VmVjdG9yMz47XG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGlzIGJsb2NrXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxNYXRyaXg+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInBvc2l0aW9uXCIsIFJpY2hUeXBlVmVjdG9yMyk7XG4gICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInJvdGF0aW9uUXVhdGVybmlvblwiLCBSaWNoVHlwZVF1YXRlcm5pb24pO1xuICAgICAgICB0aGlzLnNjYWxpbmcgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwic2NhbGluZ1wiLCBSaWNoVHlwZVZlY3RvcjMpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ2YWx1ZVwiLCBSaWNoVHlwZU1hdHJpeCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImV4ZWN1dGlvbklkXCIsIC0xKTtcbiAgICAgICAgY29uc3QgY2FjaGVkTWF0cml4ID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRNYXRyaXhcIiwgbnVsbCk7XG4gICAgICAgIGlmIChjYWNoZWRFeGVjdXRpb25JZCA9PT0gY29udGV4dC5leGVjdXRpb25JZCAmJiBjYWNoZWRNYXRyaXgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FjaGVkTWF0cml4LCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Db21wb3NlKHRoaXMuc2NhbGluZy5nZXRWYWx1ZShjb250ZXh0KSwgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24uZ2V0VmFsdWUoY29udGV4dCksIHRoaXMucG9zaXRpb24uZ2V0VmFsdWUoY29udGV4dCkpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShtYXRyaXgsIGNvbnRleHQpO1xuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRNYXRyaXhcIiwgbWF0cml4KTtcbiAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiZXhlY3V0aW9uSWRcIiwgY29udGV4dC5leGVjdXRpb25JZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLk1hdHJpeENvbXBvc2U7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF0cml4Q29tcG9zZSwgRmxvd0dyYXBoTWF0cml4Q29tcG9zZUJsb2NrKTtcbiIsImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBSaWNoVHlwZSB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2tcIjtcclxuLyoqXHJcbiAqIFRoZSBiYXNlIGJsb2NrIGZvciBhbGwgYmluYXJ5IG9wZXJhdGlvbiBibG9ja3MuIFJlY2VpdmVzIGFuIGlucHV0IG9mIHR5cGVcclxuICogTGVmdFQsIG9uZSBvZiB0eXBlIFJpZ2h0VCwgYW5kIG91dHB1dHMgYSB2YWx1ZSBvZiB0eXBlIFJlc3VsdFQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8TGVmdFQsIFJpZ2h0VCwgUmVzdWx0VD4gZXh0ZW5kcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxSZXN1bHRUPiB7XHJcbiAgICAvKipcclxuICAgICAqIEZpcnN0IGlucHV0IG9mIHRoaXMgYmxvY2tcclxuICAgICAqL1xyXG4gICAgYTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248TGVmdFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWNvbmQgaW5wdXQgb2YgdGhpcyBibG9ja1xyXG4gICAgICovXHJcbiAgICBiOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxSaWdodFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxlZnRSaWNoVHlwZTogUmljaFR5cGU8TGVmdFQ+LFxyXG4gICAgICAgIHJpZ2h0UmljaFR5cGU6IFJpY2hUeXBlPFJpZ2h0VD4sXHJcbiAgICAgICAgcmVzdWx0UmljaFR5cGU6IFJpY2hUeXBlPFJlc3VsdFQ+LFxyXG4gICAgICAgIHByaXZhdGUgX29wZXJhdGlvbjogKGxlZnQ6IExlZnRULCByaWdodDogUmlnaHRUKSA9PiBSZXN1bHRULFxyXG4gICAgICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHJlc3VsdFJpY2hUeXBlLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuYSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhXCIsIGxlZnRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5iID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImJcIiwgcmlnaHRSaWNoVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgb3BlcmF0aW9uIHBlcmZvcm1lZCBieSB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfZG9PcGVyYXRpb24oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IFJlc3VsdFQge1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmEuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYi5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uKGEsIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2xhc3MgbmFtZSBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuXHJcbmNvbnN0IENhY2hlTmFtZSA9IFwiY2FjaGVkT3BlcmF0aW9uVmFsdWVcIjtcclxuY29uc3QgQ2FjaGVFeGVjSWROYW1lID0gXCJjYWNoZWRFeGVjdXRpb25JZFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCB3aWxsIGNhY2hlIHRoZSByZXN1bHQgb2YgYW4gb3BlcmF0aW9uIGFuZCBkZWxpdmVyIGl0IGFzIGFuIG91dHB1dC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxPdXRwdXRUPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248T3V0cHV0VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogV2hldGhlciB0aGUgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBpc1ZhbGlkOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXRSaWNoVHlwZTogUmljaFR5cGU8T3V0cHV0VD4sIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ2YWx1ZVwiLCBvdXRwdXRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJpc1ZhbGlkXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIE9wZXJhdGlvbiB0byByZWFsaXplXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBPdXRwdXRUIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIC0xKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPE91dHB1dFQ+Pih0aGlzLCBDYWNoZU5hbWUsIG51bGwpO1xyXG4gICAgICAgIGlmIChjYWNoZWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhY2hlZFZhbHVlICE9PSBudWxsICYmIGNhY2hlZEV4ZWN1dGlvbklkID09PSBjb250ZXh0LmV4ZWN1dGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjYWNoZWRWYWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuX2RvT3BlcmF0aW9uKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGNhbGN1bGF0ZWRWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZShmYWxzZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVOYW1lLCBjYWxjdWxhdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVFeGVjSWROYW1lLCBjb250ZXh0LmV4ZWN1dGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FsY3VsYXRlZFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIFRoZSBiYXNlIGJsb2NrIGZvciBhbGwgdW5hcnkgb3BlcmF0aW9uIGJsb2Nrcy4gUmVjZWl2ZXMgYW4gaW5wdXQgb2YgdHlwZSBJbnB1dFQsIGFuZCBvdXRwdXRzIGEgdmFsdWUgb2YgdHlwZSBSZXN1bHRULlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8SW5wdXRULCBSZXN1bHRUPiBleHRlbmRzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPFJlc3VsdFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGlucHV0IG9mIHRoaXMgYmxvY2tcclxuICAgICAqL1xyXG4gICAgYTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248SW5wdXRUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpbnB1dFJpY2hUeXBlOiBSaWNoVHlwZTxJbnB1dFQ+LFxyXG4gICAgICAgIHJlc3VsdFJpY2hUeXBlOiBSaWNoVHlwZTxSZXN1bHRUPixcclxuICAgICAgICBwcml2YXRlIF9vcGVyYXRpb246IChpbnB1dDogSW5wdXRUKSA9PiBSZXN1bHRULFxyXG4gICAgICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHJlc3VsdFJpY2hUeXBlLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuYSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhXCIsIGlucHV0UmljaFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIG9wZXJhdGlvbiBwZXJmb3JtZWQgYnkgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGdyYXBoIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBSZXN1bHRUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uKHRoaXMuYS5nZXRWYWx1ZShjb250ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=