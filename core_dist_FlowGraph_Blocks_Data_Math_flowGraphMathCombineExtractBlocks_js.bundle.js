"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js":
/*!************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCombineMatrix2DBlock: () => (/* binding */ FlowGraphCombineMatrix2DBlock),
/* harmony export */   FlowGraphCombineMatrix3DBlock: () => (/* binding */ FlowGraphCombineMatrix3DBlock),
/* harmony export */   FlowGraphCombineMatrixBlock: () => (/* binding */ FlowGraphCombineMatrixBlock),
/* harmony export */   FlowGraphCombineVector2Block: () => (/* binding */ FlowGraphCombineVector2Block),
/* harmony export */   FlowGraphCombineVector3Block: () => (/* binding */ FlowGraphCombineVector3Block),
/* harmony export */   FlowGraphCombineVector4Block: () => (/* binding */ FlowGraphCombineVector4Block),
/* harmony export */   FlowGraphExtractMatrix2DBlock: () => (/* binding */ FlowGraphExtractMatrix2DBlock),
/* harmony export */   FlowGraphExtractMatrix3DBlock: () => (/* binding */ FlowGraphExtractMatrix3DBlock),
/* harmony export */   FlowGraphExtractMatrixBlock: () => (/* binding */ FlowGraphExtractMatrixBlock),
/* harmony export */   FlowGraphExtractVector2Block: () => (/* binding */ FlowGraphExtractVector2Block),
/* harmony export */   FlowGraphExtractVector3Block: () => (/* binding */ FlowGraphExtractVector3Block),
/* harmony export */   FlowGraphExtractVector4Block: () => (/* binding */ FlowGraphExtractVector4Block)
/* harmony export */ });
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphMatrix */ "../core/dist/FlowGraph/CustomTypes/flowGraphMatrix.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







class FlowGraphMathCombineBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphCachedOperationBlock {
    /**
     * Base class for blocks that combine multiple numeric inputs into a single result.
     * Handles registering data inputs and managing cached outputs.
     * @param numberOfInputs The number of input values to combine.
     * @param type The type of the result.
     * @param config The block configuration.
     */
    constructor(numberOfInputs, type, config) {
        super(type, config);
        for (let i = 0; i < numberOfInputs; i++) {
            this.registerDataInput(`input_${i}`, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, 0);
        }
    }
}
/**
 * Abstract class representing a flow graph block that extracts multiple outputs from a single input.
 */
class FlowGraphMathExtractBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBlock {
    /**
     * Creates an instance of FlowGraphMathExtractBlock.
     *
     * @param numberOfOutputs - The number of outputs to be extracted from the input.
     * @param type - The type of the input data.
     * @param config - Optional configuration for the flow graph block.
     */
    constructor(numberOfOutputs, type, config) {
        super(config);
        this.registerDataInput("input", type);
        for (let i = 0; i < numberOfOutputs; i++) {
            this.registerDataOutput(`output_${i}`, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, 0);
        }
    }
}
/**
 * Combines two floats into a new Vector2
 */
class FlowGraphCombineVector2Block extends FlowGraphMathCombineBlock {
    constructor(config) {
        super(2, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector2, config);
    }
    /**
     * @internal
     * Combines two floats into a new Vector2
     */
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedVector")) {
            context._setExecutionVariable(this, "cachedVector", new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector2());
        }
        const vector = context._getExecutionVariable(this, "cachedVector", null);
        vector.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context));
        return vector;
    }
    getClassName() {
        return "FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */, FlowGraphCombineVector2Block);
/**
 * Combines three floats into a new Vector3
 */
class FlowGraphCombineVector3Block extends FlowGraphMathCombineBlock {
    constructor(config) {
        super(3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedVector")) {
            context._setExecutionVariable(this, "cachedVector", new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3());
        }
        const vector = context._getExecutionVariable(this, "cachedVector", null);
        vector.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_2").getValue(context));
        return vector;
    }
    getClassName() {
        return "FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */, FlowGraphCombineVector3Block);
/**
 * Combines four floats into a new Vector4
 */
class FlowGraphCombineVector4Block extends FlowGraphMathCombineBlock {
    constructor(config) {
        super(4, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector4, config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedVector")) {
            context._setExecutionVariable(this, "cachedVector", new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector4());
        }
        const vector = context._getExecutionVariable(this, "cachedVector", null);
        vector.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_2").getValue(context), this.getDataInput("input_3").getValue(context));
        return vector;
    }
    getClassName() {
        return "FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */, FlowGraphCombineVector4Block);
/**
 * Combines 16 floats into a new Matrix
 *
 * Note that glTF interactivity's combine4x4 uses column-major order, while Babylon.js uses row-major order.
 */
class FlowGraphCombineMatrixBlock extends FlowGraphMathCombineBlock {
    constructor(config) {
        super(16, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix, config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedMatrix")) {
            context._setExecutionVariable(this, "cachedMatrix", new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix());
        }
        const matrix = context._getExecutionVariable(this, "cachedMatrix", null);
        if (this.config?.inputIsColumnMajor) {
            matrix.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_4").getValue(context), this.getDataInput("input_8").getValue(context), this.getDataInput("input_12").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_5").getValue(context), this.getDataInput("input_9").getValue(context), this.getDataInput("input_13").getValue(context), this.getDataInput("input_2").getValue(context), this.getDataInput("input_6").getValue(context), this.getDataInput("input_10").getValue(context), this.getDataInput("input_14").getValue(context), this.getDataInput("input_3").getValue(context), this.getDataInput("input_7").getValue(context), this.getDataInput("input_11").getValue(context), this.getDataInput("input_15").getValue(context));
        }
        else {
            matrix.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_2").getValue(context), this.getDataInput("input_3").getValue(context), this.getDataInput("input_4").getValue(context), this.getDataInput("input_5").getValue(context), this.getDataInput("input_6").getValue(context), this.getDataInput("input_7").getValue(context), this.getDataInput("input_8").getValue(context), this.getDataInput("input_9").getValue(context), this.getDataInput("input_10").getValue(context), this.getDataInput("input_11").getValue(context), this.getDataInput("input_12").getValue(context), this.getDataInput("input_13").getValue(context), this.getDataInput("input_14").getValue(context), this.getDataInput("input_15").getValue(context));
        }
        return matrix;
    }
    getClassName() {
        return "FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */, FlowGraphCombineMatrixBlock);
/**
 * Combines 4 floats into a new Matrix
 */
class FlowGraphCombineMatrix2DBlock extends FlowGraphMathCombineBlock {
    constructor(config) {
        super(4, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix2D, config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedMatrix")) {
            context._setExecutionVariable(this, "cachedMatrix", new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_5__.FlowGraphMatrix2D());
        }
        const matrix = context._getExecutionVariable(this, "cachedMatrix", null);
        const array = this.config?.inputIsColumnMajor
            ? [
                // column to row-major
                this.getDataInput("input_0").getValue(context),
                this.getDataInput("input_2").getValue(context),
                this.getDataInput("input_1").getValue(context),
                this.getDataInput("input_3").getValue(context),
            ]
            : [
                this.getDataInput("input_0").getValue(context),
                this.getDataInput("input_1").getValue(context),
                this.getDataInput("input_2").getValue(context),
                this.getDataInput("input_3").getValue(context),
            ];
        matrix.fromArray(array);
        return matrix;
    }
    getClassName() {
        return "FlowGraphCombineMatrix2DBlock" /* FlowGraphBlockNames.CombineMatrix2D */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphCombineMatrix2DBlock" /* FlowGraphBlockNames.CombineMatrix2D */, FlowGraphCombineMatrix2DBlock);
/**
 * Combines 9 floats into a new Matrix3D
 */
class FlowGraphCombineMatrix3DBlock extends FlowGraphMathCombineBlock {
    constructor(config) {
        super(9, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix3D, config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedMatrix")) {
            context._setExecutionVariable(this, "cachedMatrix", new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_5__.FlowGraphMatrix3D());
        }
        const matrix = context._getExecutionVariable(this, "cachedMatrix", null);
        const array = this.config?.inputIsColumnMajor
            ? [
                // column to row major
                this.getDataInput("input_0").getValue(context),
                this.getDataInput("input_3").getValue(context),
                this.getDataInput("input_6").getValue(context),
                this.getDataInput("input_1").getValue(context),
                this.getDataInput("input_4").getValue(context),
                this.getDataInput("input_7").getValue(context),
                this.getDataInput("input_2").getValue(context),
                this.getDataInput("input_5").getValue(context),
                this.getDataInput("input_8").getValue(context),
            ]
            : [
                this.getDataInput("input_0").getValue(context),
                this.getDataInput("input_1").getValue(context),
                this.getDataInput("input_2").getValue(context),
                this.getDataInput("input_3").getValue(context),
                this.getDataInput("input_4").getValue(context),
                this.getDataInput("input_5").getValue(context),
                this.getDataInput("input_6").getValue(context),
                this.getDataInput("input_7").getValue(context),
                this.getDataInput("input_8").getValue(context),
            ];
        matrix.fromArray(array);
        return matrix;
    }
    getClassName() {
        return "FlowGraphCombineMatrix3DBlock" /* FlowGraphBlockNames.CombineMatrix3D */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphCombineMatrix3DBlock" /* FlowGraphBlockNames.CombineMatrix3D */, FlowGraphCombineMatrix3DBlock);
/**
 * Extracts two floats from a Vector2
 */
class FlowGraphExtractVector2Block extends FlowGraphMathExtractBlock {
    constructor(config) {
        super(2, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector2, config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector2.Zero();
            this.getDataInput("input").setValue(input, context);
        }
        this.getDataOutput("output_0").setValue(input.x, context);
        this.getDataOutput("output_1").setValue(input.y, context);
    }
    getClassName() {
        return "FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */, FlowGraphExtractVector2Block);
/**
 * Extracts three floats from a Vector3
 */
class FlowGraphExtractVector3Block extends FlowGraphMathExtractBlock {
    constructor(config) {
        super(3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Zero();
            this.getDataInput("input").setValue(input, context);
        }
        this.getDataOutput("output_0").setValue(input.x, context);
        this.getDataOutput("output_1").setValue(input.y, context);
        this.getDataOutput("output_2").setValue(input.z, context);
    }
    getClassName() {
        return "FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */, FlowGraphExtractVector3Block);
/**
 * Extracts four floats from a Vector4
 */
class FlowGraphExtractVector4Block extends FlowGraphMathExtractBlock {
    constructor(config) {
        super(4, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector4, config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector4.Zero();
            this.getDataInput("input").setValue(input, context);
        }
        this.getDataOutput("output_0").setValue(input.x, context);
        this.getDataOutput("output_1").setValue(input.y, context);
        this.getDataOutput("output_2").setValue(input.z, context);
        this.getDataOutput("output_3").setValue(input.w, context);
    }
    getClassName() {
        return "FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */, FlowGraphExtractVector4Block);
/**
 * Extracts 16 floats from a Matrix
 */
class FlowGraphExtractMatrixBlock extends FlowGraphMathExtractBlock {
    constructor(config) {
        super(16, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix, config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.Identity();
            this.getDataInput("input").setValue(input, context);
        }
        for (let i = 0; i < 16; i++) {
            this.getDataOutput(`output_${i}`).setValue(input.m[i], context);
        }
    }
    getClassName() {
        return "FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */, FlowGraphExtractMatrixBlock);
/**
 * Extracts 4 floats from a Matrix2D
 */
class FlowGraphExtractMatrix2DBlock extends FlowGraphMathExtractBlock {
    constructor(config) {
        super(4, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix2D, config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_5__.FlowGraphMatrix2D();
            this.getDataInput("input").setValue(input, context);
        }
        for (let i = 0; i < 4; i++) {
            this.getDataOutput(`output_${i}`).setValue(input.m[i], context);
        }
    }
    getClassName() {
        return "FlowGraphExtractMatrix2DBlock" /* FlowGraphBlockNames.ExtractMatrix2D */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphExtractMatrix2DBlock" /* FlowGraphBlockNames.ExtractMatrix2D */, FlowGraphExtractMatrix2DBlock);
/**
 * Extracts 4 floats from a Matrix2D
 */
class FlowGraphExtractMatrix3DBlock extends FlowGraphMathExtractBlock {
    constructor(config) {
        super(9, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix3D, config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_5__.FlowGraphMatrix3D();
            this.getDataInput("input").setValue(input, context);
        }
        for (let i = 0; i < 9; i++) {
            this.getDataOutput(`output_${i}`).setValue(input.m[i], context);
        }
    }
    getClassName() {
        return "FlowGraphExtractMatrix3DBlock" /* FlowGraphBlockNames.ExtractMatrix3D */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphExtractMatrix3DBlock" /* FlowGraphBlockNames.ExtractMatrix3D */, FlowGraphExtractMatrix3DBlock);


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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9NYXRoX2Zsb3dHcmFwaE1hdGhDb21iaW5lRXh0cmFjdEJsb2Nrc19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzYkE7QUFJQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB7IEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XG5pbXBvcnQge1xuICAgIFJpY2hUeXBlTWF0cml4LFxuICAgIFJpY2hUeXBlTWF0cml4MkQsXG4gICAgUmljaFR5cGVNYXRyaXgzRCxcbiAgICBSaWNoVHlwZU51bWJlcixcbiAgICBSaWNoVHlwZVZlY3RvcjIsXG4gICAgUmljaFR5cGVWZWN0b3IzLFxuICAgIFJpY2hUeXBlVmVjdG9yNCxcbiAgICB0eXBlIFJpY2hUeXBlLFxufSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jaywgdHlwZSBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBNYXRyaXgsIFZlY3RvcjIsIFZlY3RvcjMsIFZlY3RvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoTWF0cml4MkQsIEZsb3dHcmFwaE1hdHJpeDNEIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL0N1c3RvbVR5cGVzL2Zsb3dHcmFwaE1hdHJpeFwiO1xuXG5hYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhNYXRoQ29tYmluZUJsb2NrPFJlc3VsdFQ+IGV4dGVuZHMgRmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2s8UmVzdWx0VD4ge1xuICAgIC8qKlxuICAgICAqIEJhc2UgY2xhc3MgZm9yIGJsb2NrcyB0aGF0IGNvbWJpbmUgbXVsdGlwbGUgbnVtZXJpYyBpbnB1dHMgaW50byBhIHNpbmdsZSByZXN1bHQuXG4gICAgICogSGFuZGxlcyByZWdpc3RlcmluZyBkYXRhIGlucHV0cyBhbmQgbWFuYWdpbmcgY2FjaGVkIG91dHB1dHMuXG4gICAgICogQHBhcmFtIG51bWJlck9mSW5wdXRzIFRoZSBudW1iZXIgb2YgaW5wdXQgdmFsdWVzIHRvIGNvbWJpbmUuXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIHJlc3VsdC5cbiAgICAgKiBAcGFyYW0gY29uZmlnIFRoZSBibG9jayBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mSW5wdXRzOiBudW1iZXIsIHR5cGU6IFJpY2hUeXBlPFJlc3VsdFQ+LCBjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZJbnB1dHM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRhdGFJbnB1dChgaW5wdXRfJHtpfWAsIFJpY2hUeXBlTnVtYmVyLCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBmbG93IGdyYXBoIGJsb2NrIHRoYXQgZXh0cmFjdHMgbXVsdGlwbGUgb3V0cHV0cyBmcm9tIGEgc2luZ2xlIGlucHV0LlxuICovXG5hYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhNYXRoRXh0cmFjdEJsb2NrPElucHV0VD4gZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGbG93R3JhcGhNYXRoRXh0cmFjdEJsb2NrLlxuICAgICAqXG4gICAgICogQHBhcmFtIG51bWJlck9mT3V0cHV0cyAtIFRoZSBudW1iZXIgb2Ygb3V0cHV0cyB0byBiZSBleHRyYWN0ZWQgZnJvbSB0aGUgaW5wdXQuXG4gICAgICogQHBhcmFtIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgaW5wdXQgZGF0YS5cbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhlIGZsb3cgZ3JhcGggYmxvY2suXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobnVtYmVyT2ZPdXRwdXRzOiBudW1iZXIsIHR5cGU6IFJpY2hUeXBlPElucHV0VD4sIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImlucHV0XCIsIHR5cGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mT3V0cHV0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChgb3V0cHV0XyR7aX1gLCBSaWNoVHlwZU51bWJlciwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byBmbG9hdHMgaW50byBhIG5ldyBWZWN0b3IyXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb21iaW5lVmVjdG9yMkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoTWF0aENvbWJpbmVCbG9jazxWZWN0b3IyPiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcigyLCBSaWNoVHlwZVZlY3RvcjIsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICogQ29tYmluZXMgdHdvIGZsb2F0cyBpbnRvIGEgbmV3IFZlY3RvcjJcbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBWZWN0b3IyIHtcbiAgICAgICAgaWYgKCFjb250ZXh0Ll9oYXNFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZFZlY3RvclwiKSkge1xuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRWZWN0b3JcIiwgbmV3IFZlY3RvcjIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmVjdG9yID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGU8TnVsbGFibGU8VmVjdG9yMj4+KHRoaXMsIFwiY2FjaGVkVmVjdG9yXCIsIG51bGwpIGFzIFZlY3RvcjI7XG4gICAgICAgIHZlY3Rvci5zZXQodGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8wXCIpIS5nZXRWYWx1ZShjb250ZXh0KSwgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xXCIpIS5nZXRWYWx1ZShjb250ZXh0KSk7XG4gICAgICAgIHJldHVybiB2ZWN0b3I7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yMjtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yMiwgRmxvd0dyYXBoQ29tYmluZVZlY3RvcjJCbG9jayk7XG5cbi8qKlxuICogQ29tYmluZXMgdGhyZWUgZmxvYXRzIGludG8gYSBuZXcgVmVjdG9yM1xuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29tYmluZVZlY3RvcjNCbG9jayBleHRlbmRzIEZsb3dHcmFwaE1hdGhDb21iaW5lQmxvY2s8VmVjdG9yMz4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoMywgUmljaFR5cGVWZWN0b3IzLCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBfZG9PcGVyYXRpb24oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IFZlY3RvcjMge1xuICAgICAgICBpZiAoIWNvbnRleHQuX2hhc0V4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiY2FjaGVkVmVjdG9yXCIpKSB7XG4gICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZFZlY3RvclwiLCBuZXcgVmVjdG9yMygpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ZWN0b3IgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZTxOdWxsYWJsZTxWZWN0b3IzPj4odGhpcywgXCJjYWNoZWRWZWN0b3JcIiwgbnVsbCkgYXMgVmVjdG9yMztcbiAgICAgICAgdmVjdG9yLnNldCh0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzBcIikhLmdldFZhbHVlKGNvbnRleHQpLCB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzFcIikhLmdldFZhbHVlKGNvbnRleHQpLCB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzJcIikhLmdldFZhbHVlKGNvbnRleHQpKTtcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVWZWN0b3IzO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVWZWN0b3IzLCBGbG93R3JhcGhDb21iaW5lVmVjdG9yM0Jsb2NrKTtcblxuLyoqXG4gKiBDb21iaW5lcyBmb3VyIGZsb2F0cyBpbnRvIGEgbmV3IFZlY3RvcjRcbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvbWJpbmVWZWN0b3I0QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhNYXRoQ29tYmluZUJsb2NrPFZlY3RvcjQ+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKDQsIFJpY2hUeXBlVmVjdG9yNCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBWZWN0b3I0IHtcbiAgICAgICAgaWYgKCFjb250ZXh0Ll9oYXNFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZFZlY3RvclwiKSkge1xuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRWZWN0b3JcIiwgbmV3IFZlY3RvcjQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmVjdG9yID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGU8TnVsbGFibGU8VmVjdG9yND4+KHRoaXMsIFwiY2FjaGVkVmVjdG9yXCIsIG51bGwpIGFzIFZlY3RvcjQ7XG4gICAgICAgIHZlY3Rvci5zZXQoXG4gICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzBcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzNcIikhLmdldFZhbHVlKGNvbnRleHQpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB2ZWN0b3I7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yNDtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yNCwgRmxvd0dyYXBoQ29tYmluZVZlY3RvcjRCbG9jayk7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIG1hdHJpeCBjb21iaW5lIGJsb2Nrcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoQ29tYmluZU1hdHJpeEJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGluIGNvbHVtbi1tYWpvciBvcmRlci4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICAgKiBOb3RlIC0gQmFieWxvbidzIG1hdHJpeCBpcyB0aGUgc2FtZSBhcyBXZWJHTCdzLiBTbyB1bmxlc3MgeW91ciBtYXRyaXggcmVxdWlyZXMgdHJhbnNmb3JtYXRpb24sIHlvdSBzaG91bGQgbGVhdmUgdGhpcyBhcyBmYWxzZS5cbiAgICAgKi9cbiAgICBpbnB1dElzQ29sdW1uTWFqb3I/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENvbWJpbmVzIDE2IGZsb2F0cyBpbnRvIGEgbmV3IE1hdHJpeFxuICpcbiAqIE5vdGUgdGhhdCBnbFRGIGludGVyYWN0aXZpdHkncyBjb21iaW5lNHg0IHVzZXMgY29sdW1uLW1ham9yIG9yZGVyLCB3aGlsZSBCYWJ5bG9uLmpzIHVzZXMgcm93LW1ham9yIG9yZGVyLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29tYmluZU1hdHJpeEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoTWF0aENvbWJpbmVCbG9jazxNYXRyaXg+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQ29tYmluZU1hdHJpeEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcigxNiwgUmljaFR5cGVNYXRyaXgsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF9kb09wZXJhdGlvbihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogTWF0cml4IHtcbiAgICAgICAgaWYgKCFjb250ZXh0Ll9oYXNFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZE1hdHJpeFwiKSkge1xuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRNYXRyaXhcIiwgbmV3IE1hdHJpeCgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRyaXggPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZTxOdWxsYWJsZTxNYXRyaXg+Pih0aGlzLCBcImNhY2hlZE1hdHJpeFwiLCBudWxsKSBhcyBNYXRyaXg7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZz8uaW5wdXRJc0NvbHVtbk1ham9yKSB7XG4gICAgICAgICAgICBtYXRyaXguc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMFwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF80XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzhcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMTJcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMVwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF81XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzlcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMTNcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF82XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzEwXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzE0XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzNcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfN1wiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xMVwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xNVwiKSEuZ2V0VmFsdWUoY29udGV4dClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXRyaXguc2V0KFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMFwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzJcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfM1wiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF80XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzVcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfNlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF83XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzhcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfOVwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xMFwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xMVwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xMlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xM1wiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xNFwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xNVwiKSEuZ2V0VmFsdWUoY29udGV4dClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVNYXRyaXg7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZU1hdHJpeCwgRmxvd0dyYXBoQ29tYmluZU1hdHJpeEJsb2NrKTtcblxuLyoqXG4gKiBDb21iaW5lcyA0IGZsb2F0cyBpbnRvIGEgbmV3IE1hdHJpeFxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29tYmluZU1hdHJpeDJEQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhNYXRoQ29tYmluZUJsb2NrPEZsb3dHcmFwaE1hdHJpeDJEPiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaENvbWJpbmVNYXRyaXhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoNCwgUmljaFR5cGVNYXRyaXgyRCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBGbG93R3JhcGhNYXRyaXgyRCB7XG4gICAgICAgIGlmICghY29udGV4dC5faGFzRXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRNYXRyaXhcIikpIHtcbiAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiY2FjaGVkTWF0cml4XCIsIG5ldyBGbG93R3JhcGhNYXRyaXgyRCgpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRyaXggPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZTxOdWxsYWJsZTxGbG93R3JhcGhNYXRyaXgyRD4+KHRoaXMsIFwiY2FjaGVkTWF0cml4XCIsIG51bGwpIGFzIEZsb3dHcmFwaE1hdHJpeDJEO1xuICAgICAgICBjb25zdCBhcnJheSA9IHRoaXMuY29uZmlnPy5pbnB1dElzQ29sdW1uTWFqb3JcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgLy8gY29sdW1uIHRvIHJvdy1tYWpvclxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8wXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzFcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8zXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzBcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8xXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzNcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICBtYXRyaXguZnJvbUFycmF5KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVNYXRyaXgyRDtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lTWF0cml4MkQsIEZsb3dHcmFwaENvbWJpbmVNYXRyaXgyREJsb2NrKTtcblxuLyoqXG4gKiBDb21iaW5lcyA5IGZsb2F0cyBpbnRvIGEgbmV3IE1hdHJpeDNEXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb21iaW5lTWF0cml4M0RCbG9jayBleHRlbmRzIEZsb3dHcmFwaE1hdGhDb21iaW5lQmxvY2s8Rmxvd0dyYXBoTWF0cml4M0Q+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQ29tYmluZU1hdHJpeEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcig5LCBSaWNoVHlwZU1hdHJpeDNELCBjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBfZG9PcGVyYXRpb24oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IEZsb3dHcmFwaE1hdHJpeDNEIHtcbiAgICAgICAgaWYgKCFjb250ZXh0Ll9oYXNFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImNhY2hlZE1hdHJpeFwiKSkge1xuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJjYWNoZWRNYXRyaXhcIiwgbmV3IEZsb3dHcmFwaE1hdHJpeDNEKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPEZsb3dHcmFwaE1hdHJpeDNEPj4odGhpcywgXCJjYWNoZWRNYXRyaXhcIiwgbnVsbCkgYXMgRmxvd0dyYXBoTWF0cml4M0Q7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5jb25maWc/LmlucHV0SXNDb2x1bW5NYWpvclxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAvLyBjb2x1bW4gdG8gcm93IG1ham9yXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzBcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8zXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfNlwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzFcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF80XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfN1wiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzJcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF81XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfOFwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8wXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfMVwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzJcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF8zXCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfNFwiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzVcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dF82XCIpIS5nZXRWYWx1ZShjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRfN1wiKSEuZ2V0VmFsdWUoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XzhcIikhLmdldFZhbHVlKGNvbnRleHQpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICBtYXRyaXguZnJvbUFycmF5KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVNYXRyaXgzRDtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lTWF0cml4M0QsIEZsb3dHcmFwaENvbWJpbmVNYXRyaXgzREJsb2NrKTtcblxuLyoqXG4gKiBFeHRyYWN0cyB0d28gZmxvYXRzIGZyb20gYSBWZWN0b3IyXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhFeHRyYWN0VmVjdG9yMkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoTWF0aEV4dHJhY3RCbG9jazxWZWN0b3IyPiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcigyLCBSaWNoVHlwZVZlY3RvcjIsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dFwiKT8uZ2V0VmFsdWUoY29udGV4dCkgYXMgVmVjdG9yMjtcbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQgPSBWZWN0b3IyLlplcm8oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRcIikhLnNldFZhbHVlKGlucHV0LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoXCJvdXRwdXRfMFwiKSEuc2V0VmFsdWUoaW5wdXQueCwgY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ2V0RGF0YU91dHB1dChcIm91dHB1dF8xXCIpIS5zZXRWYWx1ZShpbnB1dC55LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RWZWN0b3IyO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RWZWN0b3IyLCBGbG93R3JhcGhFeHRyYWN0VmVjdG9yMkJsb2NrKTtcblxuLyoqXG4gKiBFeHRyYWN0cyB0aHJlZSBmbG9hdHMgZnJvbSBhIFZlY3RvcjNcbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEV4dHJhY3RWZWN0b3IzQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhNYXRoRXh0cmFjdEJsb2NrPFZlY3RvcjM+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKDMsIFJpY2hUeXBlVmVjdG9yMywgY29uZmlnKTtcbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlucHV0ID0gdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dFwiKT8uZ2V0VmFsdWUoY29udGV4dCkgYXMgVmVjdG9yMztcbiAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQgPSBWZWN0b3IzLlplcm8oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRcIikhLnNldFZhbHVlKGlucHV0LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoXCJvdXRwdXRfMFwiKSEuc2V0VmFsdWUoaW5wdXQueCwgY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ2V0RGF0YU91dHB1dChcIm91dHB1dF8xXCIpIS5zZXRWYWx1ZShpbnB1dC55LCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5nZXREYXRhT3V0cHV0KFwib3V0cHV0XzJcIikhLnNldFZhbHVlKGlucHV0LnosIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjM7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjMsIEZsb3dHcmFwaEV4dHJhY3RWZWN0b3IzQmxvY2spO1xuXG4vKipcbiAqIEV4dHJhY3RzIGZvdXIgZmxvYXRzIGZyb20gYSBWZWN0b3I0XG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhFeHRyYWN0VmVjdG9yNEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoTWF0aEV4dHJhY3RCbG9jazxWZWN0b3I0PiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcig0LCBSaWNoVHlwZVZlY3RvcjQsIGNvbmZpZyk7XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRcIik/LmdldFZhbHVlKGNvbnRleHQpIGFzIFZlY3RvcjQ7XG4gICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0ID0gVmVjdG9yNC5aZXJvKCk7XG4gICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XCIpIS5zZXRWYWx1ZShpbnB1dCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXREYXRhT3V0cHV0KFwib3V0cHV0XzBcIikhLnNldFZhbHVlKGlucHV0LngsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoXCJvdXRwdXRfMVwiKSEuc2V0VmFsdWUoaW5wdXQueSwgY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ2V0RGF0YU91dHB1dChcIm91dHB1dF8yXCIpIS5zZXRWYWx1ZShpbnB1dC56LCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5nZXREYXRhT3V0cHV0KFwib3V0cHV0XzNcIikhLnNldFZhbHVlKGlucHV0LncsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjQ7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjQsIEZsb3dHcmFwaEV4dHJhY3RWZWN0b3I0QmxvY2spO1xuXG4vKipcbiAqIEV4dHJhY3RzIDE2IGZsb2F0cyBmcm9tIGEgTWF0cml4XG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhFeHRyYWN0TWF0cml4QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhNYXRoRXh0cmFjdEJsb2NrPE1hdHJpeD4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoMTYsIFJpY2hUeXBlTWF0cml4LCBjb25maWcpO1xuICAgIH1cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBsZXQgaW5wdXQgPSB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XCIpPy5nZXRWYWx1ZShjb250ZXh0KSBhcyBNYXRyaXg7XG4gICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0ID0gTWF0cml4LklkZW50aXR5KCk7XG4gICAgICAgICAgICB0aGlzLmdldERhdGFJbnB1dChcImlucHV0XCIpIS5zZXRWYWx1ZShpbnB1dCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoYG91dHB1dF8ke2l9YCkhLnNldFZhbHVlKGlucHV0Lm1baV0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0TWF0cml4O1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RNYXRyaXgsIEZsb3dHcmFwaEV4dHJhY3RNYXRyaXhCbG9jayk7XG5cbi8qKlxuICogRXh0cmFjdHMgNCBmbG9hdHMgZnJvbSBhIE1hdHJpeDJEXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhFeHRyYWN0TWF0cml4MkRCbG9jayBleHRlbmRzIEZsb3dHcmFwaE1hdGhFeHRyYWN0QmxvY2s8Rmxvd0dyYXBoTWF0cml4MkQ+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKDQsIFJpY2hUeXBlTWF0cml4MkQsIGNvbmZpZyk7XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRcIik/LmdldFZhbHVlKGNvbnRleHQpIGFzIEZsb3dHcmFwaE1hdHJpeDJEO1xuICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IG5ldyBGbG93R3JhcGhNYXRyaXgyRCgpO1xuICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dFwiKSEuc2V0VmFsdWUoaW5wdXQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoYG91dHB1dF8ke2l9YCkhLnNldFZhbHVlKGlucHV0Lm1baV0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0TWF0cml4MkQ7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdE1hdHJpeDJELCBGbG93R3JhcGhFeHRyYWN0TWF0cml4MkRCbG9jayk7XG5cbi8qKlxuICogRXh0cmFjdHMgNCBmbG9hdHMgZnJvbSBhIE1hdHJpeDJEXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhFeHRyYWN0TWF0cml4M0RCbG9jayBleHRlbmRzIEZsb3dHcmFwaE1hdGhFeHRyYWN0QmxvY2s8Rmxvd0dyYXBoTWF0cml4M0Q+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKDksIFJpY2hUeXBlTWF0cml4M0QsIGNvbmZpZyk7XG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZ2V0RGF0YUlucHV0KFwiaW5wdXRcIik/LmdldFZhbHVlKGNvbnRleHQpIGFzIEZsb3dHcmFwaE1hdHJpeDNEO1xuICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IG5ldyBGbG93R3JhcGhNYXRyaXgzRCgpO1xuICAgICAgICAgICAgdGhpcy5nZXREYXRhSW5wdXQoXCJpbnB1dFwiKSEuc2V0VmFsdWUoaW5wdXQsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdldERhdGFPdXRwdXQoYG91dHB1dF8ke2l9YCkhLnNldFZhbHVlKGlucHV0Lm1baV0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0TWF0cml4M0Q7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdE1hdHJpeDNELCBGbG93R3JhcGhFeHRyYWN0TWF0cml4M0RCbG9jayk7XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuXHJcbmNvbnN0IENhY2hlTmFtZSA9IFwiY2FjaGVkT3BlcmF0aW9uVmFsdWVcIjtcclxuY29uc3QgQ2FjaGVFeGVjSWROYW1lID0gXCJjYWNoZWRFeGVjdXRpb25JZFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCB3aWxsIGNhY2hlIHRoZSByZXN1bHQgb2YgYW4gb3BlcmF0aW9uIGFuZCBkZWxpdmVyIGl0IGFzIGFuIG91dHB1dC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxPdXRwdXRUPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248T3V0cHV0VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogV2hldGhlciB0aGUgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBpc1ZhbGlkOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXRSaWNoVHlwZTogUmljaFR5cGU8T3V0cHV0VD4sIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ2YWx1ZVwiLCBvdXRwdXRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJpc1ZhbGlkXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIE9wZXJhdGlvbiB0byByZWFsaXplXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBPdXRwdXRUIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIC0xKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPE91dHB1dFQ+Pih0aGlzLCBDYWNoZU5hbWUsIG51bGwpO1xyXG4gICAgICAgIGlmIChjYWNoZWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhY2hlZFZhbHVlICE9PSBudWxsICYmIGNhY2hlZEV4ZWN1dGlvbklkID09PSBjb250ZXh0LmV4ZWN1dGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjYWNoZWRWYWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuX2RvT3BlcmF0aW9uKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGNhbGN1bGF0ZWRWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZShmYWxzZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVOYW1lLCBjYWxjdWxhdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVFeGVjSWROYW1lLCBjb250ZXh0LmV4ZWN1dGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FsY3VsYXRlZFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9