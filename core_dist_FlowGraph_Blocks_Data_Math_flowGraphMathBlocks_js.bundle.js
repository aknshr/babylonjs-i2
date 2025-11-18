"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js":
/*!**********************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphAbsBlock: () => (/* binding */ FlowGraphAbsBlock),
/* harmony export */   FlowGraphAcosBlock: () => (/* binding */ FlowGraphAcosBlock),
/* harmony export */   FlowGraphAcoshBlock: () => (/* binding */ FlowGraphAcoshBlock),
/* harmony export */   FlowGraphAddBlock: () => (/* binding */ FlowGraphAddBlock),
/* harmony export */   FlowGraphAsinBlock: () => (/* binding */ FlowGraphAsinBlock),
/* harmony export */   FlowGraphAsinhBlock: () => (/* binding */ FlowGraphAsinhBlock),
/* harmony export */   FlowGraphAtan2Block: () => (/* binding */ FlowGraphAtan2Block),
/* harmony export */   FlowGraphAtanBlock: () => (/* binding */ FlowGraphAtanBlock),
/* harmony export */   FlowGraphAtanhBlock: () => (/* binding */ FlowGraphAtanhBlock),
/* harmony export */   FlowGraphBitwiseAndBlock: () => (/* binding */ FlowGraphBitwiseAndBlock),
/* harmony export */   FlowGraphBitwiseLeftShiftBlock: () => (/* binding */ FlowGraphBitwiseLeftShiftBlock),
/* harmony export */   FlowGraphBitwiseNotBlock: () => (/* binding */ FlowGraphBitwiseNotBlock),
/* harmony export */   FlowGraphBitwiseOrBlock: () => (/* binding */ FlowGraphBitwiseOrBlock),
/* harmony export */   FlowGraphBitwiseRightShiftBlock: () => (/* binding */ FlowGraphBitwiseRightShiftBlock),
/* harmony export */   FlowGraphBitwiseXorBlock: () => (/* binding */ FlowGraphBitwiseXorBlock),
/* harmony export */   FlowGraphCeilBlock: () => (/* binding */ FlowGraphCeilBlock),
/* harmony export */   FlowGraphClampBlock: () => (/* binding */ FlowGraphClampBlock),
/* harmony export */   FlowGraphCosBlock: () => (/* binding */ FlowGraphCosBlock),
/* harmony export */   FlowGraphCoshBlock: () => (/* binding */ FlowGraphCoshBlock),
/* harmony export */   FlowGraphCubeRootBlock: () => (/* binding */ FlowGraphCubeRootBlock),
/* harmony export */   FlowGraphDegToRadBlock: () => (/* binding */ FlowGraphDegToRadBlock),
/* harmony export */   FlowGraphDivideBlock: () => (/* binding */ FlowGraphDivideBlock),
/* harmony export */   FlowGraphEBlock: () => (/* binding */ FlowGraphEBlock),
/* harmony export */   FlowGraphEqualityBlock: () => (/* binding */ FlowGraphEqualityBlock),
/* harmony export */   FlowGraphExpBlock: () => (/* binding */ FlowGraphExpBlock),
/* harmony export */   FlowGraphFloorBlock: () => (/* binding */ FlowGraphFloorBlock),
/* harmony export */   FlowGraphFractionBlock: () => (/* binding */ FlowGraphFractionBlock),
/* harmony export */   FlowGraphGreaterThanBlock: () => (/* binding */ FlowGraphGreaterThanBlock),
/* harmony export */   FlowGraphGreaterThanOrEqualBlock: () => (/* binding */ FlowGraphGreaterThanOrEqualBlock),
/* harmony export */   FlowGraphInfBlock: () => (/* binding */ FlowGraphInfBlock),
/* harmony export */   FlowGraphIsInfinityBlock: () => (/* binding */ FlowGraphIsInfinityBlock),
/* harmony export */   FlowGraphIsNanBlock: () => (/* binding */ FlowGraphIsNanBlock),
/* harmony export */   FlowGraphLeadingZerosBlock: () => (/* binding */ FlowGraphLeadingZerosBlock),
/* harmony export */   FlowGraphLessThanBlock: () => (/* binding */ FlowGraphLessThanBlock),
/* harmony export */   FlowGraphLessThanOrEqualBlock: () => (/* binding */ FlowGraphLessThanOrEqualBlock),
/* harmony export */   FlowGraphLog10Block: () => (/* binding */ FlowGraphLog10Block),
/* harmony export */   FlowGraphLog2Block: () => (/* binding */ FlowGraphLog2Block),
/* harmony export */   FlowGraphLogBlock: () => (/* binding */ FlowGraphLogBlock),
/* harmony export */   FlowGraphMathInterpolationBlock: () => (/* binding */ FlowGraphMathInterpolationBlock),
/* harmony export */   FlowGraphMaxBlock: () => (/* binding */ FlowGraphMaxBlock),
/* harmony export */   FlowGraphMinBlock: () => (/* binding */ FlowGraphMinBlock),
/* harmony export */   FlowGraphModuloBlock: () => (/* binding */ FlowGraphModuloBlock),
/* harmony export */   FlowGraphMultiplyBlock: () => (/* binding */ FlowGraphMultiplyBlock),
/* harmony export */   FlowGraphNaNBlock: () => (/* binding */ FlowGraphNaNBlock),
/* harmony export */   FlowGraphNegationBlock: () => (/* binding */ FlowGraphNegationBlock),
/* harmony export */   FlowGraphOneBitsCounterBlock: () => (/* binding */ FlowGraphOneBitsCounterBlock),
/* harmony export */   FlowGraphPiBlock: () => (/* binding */ FlowGraphPiBlock),
/* harmony export */   FlowGraphPowerBlock: () => (/* binding */ FlowGraphPowerBlock),
/* harmony export */   FlowGraphRadToDegBlock: () => (/* binding */ FlowGraphRadToDegBlock),
/* harmony export */   FlowGraphRandomBlock: () => (/* binding */ FlowGraphRandomBlock),
/* harmony export */   FlowGraphRoundBlock: () => (/* binding */ FlowGraphRoundBlock),
/* harmony export */   FlowGraphSaturateBlock: () => (/* binding */ FlowGraphSaturateBlock),
/* harmony export */   FlowGraphSignBlock: () => (/* binding */ FlowGraphSignBlock),
/* harmony export */   FlowGraphSinBlock: () => (/* binding */ FlowGraphSinBlock),
/* harmony export */   FlowGraphSinhBlock: () => (/* binding */ FlowGraphSinhBlock),
/* harmony export */   FlowGraphSquareRootBlock: () => (/* binding */ FlowGraphSquareRootBlock),
/* harmony export */   FlowGraphSubtractBlock: () => (/* binding */ FlowGraphSubtractBlock),
/* harmony export */   FlowGraphTanBlock: () => (/* binding */ FlowGraphTanBlock),
/* harmony export */   FlowGraphTanhBlock: () => (/* binding */ FlowGraphTanhBlock),
/* harmony export */   FlowGraphTrailingZerosBlock: () => (/* binding */ FlowGraphTrailingZerosBlock),
/* harmony export */   FlowGraphTruncBlock: () => (/* binding */ FlowGraphTruncBlock)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flowGraphBinaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js");
/* harmony import */ var _flowGraphConstantOperationBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flowGraphConstantOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphConstantOperationBlock.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flowGraphUnaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js");
/* harmony import */ var _flowGraphTernaryOperationBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flowGraphTernaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.js");
/* harmony import */ var _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphMatrix */ "../core/dist/FlowGraph/CustomTypes/flowGraphMatrix.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");











/**
 * Polymorphic add block.
 */
class FlowGraphAddBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    /**
     * Construct a new add block.
     * @param config optional configuration
     */
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (a, b) => this._polymorphicAdd(a, b), "FlowGraphAddBlock" /* FlowGraphBlockNames.Add */, config);
    }
    _polymorphicAdd(a, b) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
        const bClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(b);
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameVectorOrQuaternionClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameMatrixClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameIntegerClass)(aClassName, bClassName)) {
            // cast to vector3, but any other cast will be fine
            return a.add(b);
        }
        else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */) {
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(a.x, a.y, a.z, a.w).addInPlace(b);
        }
        else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */ || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */) {
            return a.add(b);
        }
        else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a) + (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b);
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphAddBlock" /* FlowGraphBlockNames.Add */, FlowGraphAddBlock);
/**
 * Polymorphic subtract block.
 */
class FlowGraphSubtractBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    /**
     * Construct a new subtract block.
     * @param config optional configuration
     */
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (a, b) => this._polymorphicSubtract(a, b), "FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */, config);
    }
    _polymorphicSubtract(a, b) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
        const bClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(b);
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameVectorOrQuaternionClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameIntegerClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameMatrixClass)(aClassName, bClassName)) {
            // cast to vector3, but it can be casted to any vector type
            return a.subtract(b);
        }
        else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */) {
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(a.x, a.y, a.z, a.w).subtractInPlace(b);
        }
        else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */ || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */) {
            return a.subtract(b);
        }
        else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a) - (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b);
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */, FlowGraphSubtractBlock);
/**
 * Polymorphic multiply block.
 * In case of matrix, it is configurable whether the multiplication is done per component.
 */
class FlowGraphMultiplyBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (a, b) => this._polymorphicMultiply(a, b), "FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */, config);
    }
    _polymorphicMultiply(a, b) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
        const bClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(b);
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameVectorOrQuaternionClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameIntegerClass)(aClassName, bClassName)) {
            // cast to vector3, but it can be casted to any vector type
            return a.multiply(b);
        }
        else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */) {
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(a.x, a.y, a.z, a.w).multiplyInPlace(b);
        }
        else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */ || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */) {
            return a.multiply(b);
        }
        else if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameMatrixClass)(aClassName, bClassName)) {
            if (this.config?.useMatrixPerComponent) {
                // this is the definition of multiplication of glTF interactivity
                // get a's m as array, and multiply each component with b's m
                const aM = a.m;
                for (let i = 0; i < aM.length; i++) {
                    aM[i] *= b.m[i];
                }
                if (aClassName === "Matrix2D" /* FlowGraphTypes.Matrix2D */) {
                    return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix2D(aM);
                }
                else if (aClassName === "Matrix3D" /* FlowGraphTypes.Matrix3D */) {
                    return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix3D(aM);
                }
                else {
                    return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.FromArray(aM);
                }
            }
            else {
                a = a;
                b = b;
                return b.multiply(a);
            }
        }
        else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a) * (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b);
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */, FlowGraphMultiplyBlock);
/**
 * Polymorphic division block.
 */
class FlowGraphDivideBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    /**
     * Construct a new divide block.
     * @param config - Optional configuration
     */
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.type), (a, b) => this._polymorphicDivide(a, b), "FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */, config);
    }
    _polymorphicDivide(a, b) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
        const bClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(b);
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameVectorOrQuaternionClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameIntegerClass)(aClassName, bClassName)) {
            // cast to vector3, but it can be casted to any vector type
            return a.divide(b);
        }
        else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */) {
            // this is a simple division (per component!), and should be also supported between Quat and Vector4. Therefore -
            const aClone = a.clone();
            aClone.x /= b.x;
            aClone.y /= b.y;
            aClone.z /= b.z;
            aClone.w /= b.w;
            return aClone;
        }
        else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */) {
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(a.x, a.y, a.z, a.w).divideInPlace(b);
        }
        else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */ || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */) {
            return a.divide(b);
        }
        else if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameMatrixClass)(aClassName, bClassName)) {
            if (this.config?.useMatrixPerComponent) {
                // get a's m as array, and divide each component with b's m
                const aM = a.m;
                for (let i = 0; i < aM.length; i++) {
                    aM[i] /= b.m[i];
                }
                if (aClassName === "Matrix2D" /* FlowGraphTypes.Matrix2D */) {
                    return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix2D(aM);
                }
                else if (aClassName === "Matrix3D" /* FlowGraphTypes.Matrix3D */) {
                    return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix3D(aM);
                }
                else {
                    return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.FromArray(aM);
                }
            }
            else {
                a = a;
                b = b;
                return a.divide(b);
            }
        }
        else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a) / (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b);
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */, FlowGraphDivideBlock);
/**
 * Random number between min and max (defaults to 0 to 1)
 *
 * This node will cache the result for he same node reference. i.e., a Math.eq that references the SAME random node will always return true.
 */
class FlowGraphRandomBlock extends _flowGraphConstantOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphConstantOperationBlock {
    /**
     * Construct a new random block.
     * @param config optional configuration
     */
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (context) => this._random(context), "FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */, config);
        this.min = this.registerDataInput("min", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, config?.min ?? 0);
        this.max = this.registerDataInput("max", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, config?.max ?? 1);
        if (config?.seed) {
            this._seed = config.seed;
        }
    }
    _isSeed(seed = this._seed) {
        return seed !== undefined;
    }
    _getRandomValue() {
        if (this._isSeed(this._seed)) {
            // compute seed-based random number, deterministic randomness!
            const x = Math.sin(this._seed++) * 10000;
            return x - Math.floor(x);
        }
        return Math.random();
    }
    _random(context) {
        const min = this.min.getValue(context);
        const max = this.max.getValue(context);
        return this._getRandomValue() * (max - min) + min;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */, FlowGraphRandomBlock);
/**
 * E constant.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class FlowGraphEBlock extends _flowGraphConstantOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphConstantOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, () => Math.E, "FlowGraphEBlock" /* FlowGraphBlockNames.E */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphEBlock" /* FlowGraphBlockNames.E */, FlowGraphEBlock);
/**
 * Pi constant.
 */
class FlowGraphPiBlock extends _flowGraphConstantOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphConstantOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, () => Math.PI, "FlowGraphPIBlock" /* FlowGraphBlockNames.PI */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphPIBlock" /* FlowGraphBlockNames.PI */, FlowGraphPiBlock);
/**
 * Positive inf constant.
 */
class FlowGraphInfBlock extends _flowGraphConstantOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphConstantOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, () => Number.POSITIVE_INFINITY, "FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */, FlowGraphInfBlock);
/**
 * NaN constant.
 */
class FlowGraphNaNBlock extends _flowGraphConstantOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphConstantOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, () => Number.NaN, "FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */, FlowGraphNaNBlock);
function ComponentWiseUnaryOperation(a, op) {
    const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
    switch (aClassName) {
        case "FlowGraphInteger":
            a = a;
            return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(op(a.value));
        case "Vector2" /* FlowGraphTypes.Vector2 */:
            a = a;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector2(op(a.x), op(a.y));
        case "Vector3" /* FlowGraphTypes.Vector3 */:
            a = a;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(op(a.x), op(a.y), op(a.z));
        case "Vector4" /* FlowGraphTypes.Vector4 */:
            a = a;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(op(a.x), op(a.y), op(a.z), op(a.w));
        case "Quaternion" /* FlowGraphTypes.Quaternion */:
            a = a;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion(op(a.x), op(a.y), op(a.z), op(a.w));
        case "Matrix" /* FlowGraphTypes.Matrix */:
            a = a;
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.FromArray(a.m.map(op));
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */:
            a = a;
            // reason for not using .map is performance
            return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix2D(a.m.map(op));
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */:
            a = a;
            return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix3D(a.m.map(op));
        default:
            a = a;
            return op(a);
    }
}
/**
 * Absolute value block.
 */
class FlowGraphAbsBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAbs(a), "FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */, config);
    }
    _polymorphicAbs(a) {
        return ComponentWiseUnaryOperation(a, Math.abs);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */, FlowGraphAbsBlock);
/**
 * Sign block.
 */
class FlowGraphSignBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicSign(a), "FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */, config);
    }
    _polymorphicSign(a) {
        return ComponentWiseUnaryOperation(a, Math.sign);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */, FlowGraphSignBlock);
/**
 * Truncation block.
 */
class FlowGraphTruncBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicTrunc(a), "FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */, config);
    }
    _polymorphicTrunc(a) {
        return ComponentWiseUnaryOperation(a, Math.trunc);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */, FlowGraphTruncBlock);
/**
 * Floor block.
 */
class FlowGraphFloorBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicFloor(a), "FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */, config);
    }
    _polymorphicFloor(a) {
        return ComponentWiseUnaryOperation(a, Math.floor);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */, FlowGraphFloorBlock);
/**
 * Ceiling block.
 */
class FlowGraphCeilBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicCeiling(a), "FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */, config);
    }
    _polymorphicCeiling(a) {
        return ComponentWiseUnaryOperation(a, Math.ceil);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */, FlowGraphCeilBlock);
/**
 * Round block.
 */
class FlowGraphRoundBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicRound(a), "FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */, config);
    }
    _polymorphicRound(a) {
        return ComponentWiseUnaryOperation(a, (a) => (a < 0 && this.config?.roundHalfAwayFromZero ? -Math.round(-a) : Math.round(a)));
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */, FlowGraphRoundBlock);
/**
 * A block that returns the fractional part of a number.
 */
class FlowGraphFractionBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicFraction(a), "FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */, config);
    }
    _polymorphicFraction(a) {
        return ComponentWiseUnaryOperation(a, (a) => a - Math.floor(a));
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */, FlowGraphFractionBlock);
/**
 * Negation block.
 */
class FlowGraphNegationBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    /**
     * construct a new negation block.
     * @param config optional configuration
     */
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicNeg(a), "FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */, config);
    }
    _polymorphicNeg(a) {
        return ComponentWiseUnaryOperation(a, (a) => -a);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */, FlowGraphNegationBlock);
function ComponentWiseBinaryOperation(a, b, op) {
    const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
    switch (aClassName) {
        case "FlowGraphInteger":
            a = a;
            b = b;
            return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(op(a.value, b.value));
        case "Vector2" /* FlowGraphTypes.Vector2 */:
            a = a;
            b = b;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector2(op(a.x, b.x), op(a.y, b.y));
        case "Vector3" /* FlowGraphTypes.Vector3 */:
            a = a;
            b = b;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(op(a.x, b.x), op(a.y, b.y), op(a.z, b.z));
        case "Vector4" /* FlowGraphTypes.Vector4 */:
            a = a;
            b = b;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(op(a.x, b.x), op(a.y, b.y), op(a.z, b.z), op(a.w, b.w));
        case "Quaternion" /* FlowGraphTypes.Quaternion */:
            a = a;
            b = b;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion(op(a.x, b.x), op(a.y, b.y), op(a.z, b.z), op(a.w, b.w));
        case "Matrix" /* FlowGraphTypes.Matrix */:
            a = a;
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.FromArray(a.m.map((v, i) => op(v, b.m[i])));
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */:
            a = a;
            return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix2D(a.m.map((v, i) => op(v, b.m[i])));
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */:
            a = a;
            return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix3D(a.m.map((v, i) => op(v, b.m[i])));
        default:
            return op((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a), (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b));
    }
}
/**
 * Remainder block.
 */
class FlowGraphModuloBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a, b) => this._polymorphicRemainder(a, b), "FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */, config);
    }
    _polymorphicRemainder(a, b) {
        return ComponentWiseBinaryOperation(a, b, (a, b) => a % b);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */, FlowGraphModuloBlock);
/**
 * Min block.
 */
class FlowGraphMinBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a, b) => this._polymorphicMin(a, b), "FlowGraphMinBlock" /* FlowGraphBlockNames.Min */, config);
    }
    _polymorphicMin(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.min);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphMinBlock" /* FlowGraphBlockNames.Min */, FlowGraphMinBlock);
/**
 * Max block
 */
class FlowGraphMaxBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a, b) => this._polymorphicMax(a, b), "FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */, config);
    }
    _polymorphicMax(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.max);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */, FlowGraphMaxBlock);
function Clamp(a, b, c) {
    return Math.min(Math.max(a, Math.min(b, c)), Math.max(b, c));
}
function ComponentWiseTernaryOperation(a, b, c, op) {
    const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
    switch (aClassName) {
        case "FlowGraphInteger":
            a = a;
            b = b;
            c = c;
            return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(op(a.value, b.value, c.value));
        case "Vector2" /* FlowGraphTypes.Vector2 */:
            a = a;
            b = b;
            c = c;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector2(op(a.x, b.x, c.x), op(a.y, b.y, c.y));
        case "Vector3" /* FlowGraphTypes.Vector3 */:
            a = a;
            b = b;
            c = c;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(op(a.x, b.x, c.x), op(a.y, b.y, c.y), op(a.z, b.z, c.z));
        case "Vector4" /* FlowGraphTypes.Vector4 */:
            a = a;
            b = b;
            c = c;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector4(op(a.x, b.x, c.x), op(a.y, b.y, c.y), op(a.z, b.z, c.z), op(a.w, b.w, c.w));
        case "Quaternion" /* FlowGraphTypes.Quaternion */:
            a = a;
            b = b;
            c = c;
            return new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Quaternion(op(a.x, b.x, c.x), op(a.y, b.y, c.y), op(a.z, b.z, c.z), op(a.w, b.w, c.w));
        case "Matrix" /* FlowGraphTypes.Matrix */:
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.FromArray(a.m.map((v, i) => op(v, b.m[i], c.m[i])));
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */:
            return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix2D(a.m.map((v, i) => op(v, b.m[i], c.m[i])));
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */:
            return new core_FlowGraph_CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_8__.FlowGraphMatrix3D(a.m.map((v, i) => op(v, b.m[i], c.m[i])));
        default:
            return op((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a), (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b), (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(c));
    }
}
/**
 * Clamp block.
 */
class FlowGraphClampBlock extends _flowGraphTernaryOperationBlock__WEBPACK_IMPORTED_MODULE_6__.FlowGraphTernaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a, b, c) => this._polymorphicClamp(a, b, c), "FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */, config);
    }
    _polymorphicClamp(a, b, c) {
        return ComponentWiseTernaryOperation(a, b, c, Clamp);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */, FlowGraphClampBlock);
function Saturate(a) {
    return Math.min(Math.max(a, 0), 1);
}
/**
 * Saturate block.
 */
class FlowGraphSaturateBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicSaturate(a), "FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */, config);
    }
    _polymorphicSaturate(a) {
        return ComponentWiseUnaryOperation(a, Saturate);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */, FlowGraphSaturateBlock);
function Interpolate(a, b, c) {
    return (1 - c) * a + c * b;
}
/**
 * Interpolate block.
 */
class FlowGraphMathInterpolationBlock extends _flowGraphTernaryOperationBlock__WEBPACK_IMPORTED_MODULE_6__.FlowGraphTernaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a, b, c) => this._polymorphicInterpolate(a, b, c), "FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */, config);
    }
    _polymorphicInterpolate(a, b, c) {
        return ComponentWiseTernaryOperation(a, b, c, Interpolate);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */, FlowGraphMathInterpolationBlock);
/**
 * Equals block.
 */
class FlowGraphEqualityBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a, b) => this._polymorphicEq(a, b), "FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */, config);
    }
    _polymorphicEq(a, b) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(a);
        const bClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._GetClassNameOf)(b);
        if (typeof a !== typeof b) {
            return false;
        }
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameVectorOrQuaternionClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameMatrixClass)(aClassName, bClassName) || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__._AreSameIntegerClass)(aClassName, bClassName)) {
            return a.equals(b);
        }
        else {
            return a === b;
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */, FlowGraphEqualityBlock);
function ComparisonOperators(a, b, op) {
    if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.isNumeric)(a) && (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.isNumeric)(b)) {
        return op((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a), (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(b));
    }
    else {
        throw new Error(`Cannot compare ${a} and ${b}`);
    }
}
/**
 * Less than block.
 */
class FlowGraphLessThanBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a, b) => this._polymorphicLessThan(a, b), "FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */, config);
    }
    _polymorphicLessThan(a, b) {
        return ComparisonOperators(a, b, (a, b) => a < b);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */, FlowGraphLessThanBlock);
/**
 * Less than or equal block.
 */
class FlowGraphLessThanOrEqualBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a, b) => this._polymorphicLessThanOrEqual(a, b), "FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */, config);
    }
    _polymorphicLessThanOrEqual(a, b) {
        return ComparisonOperators(a, b, (a, b) => a <= b);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */, FlowGraphLessThanOrEqualBlock);
/**
 * Greater than block.
 */
class FlowGraphGreaterThanBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a, b) => this._polymorphicGreaterThan(a, b), "FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */, config);
    }
    _polymorphicGreaterThan(a, b) {
        return ComparisonOperators(a, b, (a, b) => a > b);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */, FlowGraphGreaterThanBlock);
/**
 * Greater than or equal block.
 */
class FlowGraphGreaterThanOrEqualBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a, b) => this._polymorphicGreaterThanOrEqual(a, b), "FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */, config);
    }
    _polymorphicGreaterThanOrEqual(a, b) {
        return ComparisonOperators(a, b, (a, b) => a >= b);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */, FlowGraphGreaterThanOrEqualBlock);
/**
 * Is NaN block.
 */
class FlowGraphIsNanBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a) => this._polymorphicIsNan(a), "FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */, config);
    }
    _polymorphicIsNan(a) {
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.isNumeric)(a, true)) {
            return isNaN((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a));
        }
        else {
            throw new Error(`Cannot get NaN of ${a}`);
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */, FlowGraphIsNanBlock);
/**
 * Is Inf block.
 */
class FlowGraphIsInfinityBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean, (a) => this._polymorphicIsInf(a), "FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */, config);
    }
    _polymorphicIsInf(a) {
        if ((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.isNumeric)(a)) {
            return !isFinite((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_9__.getNumericValue)(a));
        }
        else {
            throw new Error(`Cannot get isInf of ${a}`);
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */, FlowGraphIsInfinityBlock);
/**
 * Convert degrees to radians block.
 */
class FlowGraphDegToRadBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    /**
     * Constructs a new instance of the flow graph math block.
     * @param config - Optional configuration for the flow graph block.
     */
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicDegToRad(a), "FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */, config);
    }
    _degToRad(a) {
        return (a * Math.PI) / 180;
    }
    _polymorphicDegToRad(a) {
        return ComponentWiseUnaryOperation(a, this._degToRad);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */, FlowGraphDegToRadBlock);
/**
 * Convert radians to degrees block.
 */
class FlowGraphRadToDegBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicRadToDeg(a), "FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */, config);
    }
    _radToDeg(a) {
        return (a * 180) / Math.PI;
    }
    _polymorphicRadToDeg(a) {
        return ComponentWiseUnaryOperation(a, this._radToDeg);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */, FlowGraphRadToDegBlock);
/**
 * Sin block.
 */
class FlowGraphSinBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicSin(a), "FlowGraphSinBlock" /* FlowGraphBlockNames.Sin */, config);
    }
    _polymorphicSin(a) {
        return ComponentWiseUnaryOperation(a, Math.sin);
    }
}
/**
 * Cos block.
 */
class FlowGraphCosBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicCos(a), "FlowGraphCosBlock" /* FlowGraphBlockNames.Cos */, config);
    }
    _polymorphicCos(a) {
        return ComponentWiseUnaryOperation(a, Math.cos);
    }
}
/**
 * Tan block.
 */
class FlowGraphTanBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicTan(a), "FlowGraphTanBlock" /* FlowGraphBlockNames.Tan */, config);
    }
    _polymorphicTan(a) {
        return ComponentWiseUnaryOperation(a, Math.tan);
    }
}
/**
 * Arcsin block.
 */
class FlowGraphAsinBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAsin(a), "FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */, config);
    }
    _polymorphicAsin(a) {
        return ComponentWiseUnaryOperation(a, Math.asin);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */, FlowGraphAsinBlock);
/**
 * Arccos block.
 */
class FlowGraphAcosBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAcos(a), "FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */, config);
    }
    _polymorphicAcos(a) {
        return ComponentWiseUnaryOperation(a, Math.acos);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */, FlowGraphAcosBlock);
/**
 * Arctan block.
 */
class FlowGraphAtanBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAtan(a), "FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */, config);
    }
    _polymorphicAtan(a) {
        return ComponentWiseUnaryOperation(a, Math.atan);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */, FlowGraphAtanBlock);
/**
 * Arctan2 block.
 */
class FlowGraphAtan2Block extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a, b) => this._polymorphicAtan2(a, b), "FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */, config);
    }
    _polymorphicAtan2(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.atan2);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */, FlowGraphAtan2Block);
/**
 * Hyperbolic sin block.
 */
class FlowGraphSinhBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicSinh(a), "FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */, config);
    }
    _polymorphicSinh(a) {
        return ComponentWiseUnaryOperation(a, Math.sinh);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */, FlowGraphSinhBlock);
/**
 * Hyperbolic cos block.
 */
class FlowGraphCoshBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicCosh(a), "FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */, config);
    }
    _polymorphicCosh(a) {
        return ComponentWiseUnaryOperation(a, Math.cosh);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */, FlowGraphCoshBlock);
/**
 * Hyperbolic tan block.
 */
class FlowGraphTanhBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicTanh(a), "FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */, config);
    }
    _polymorphicTanh(a) {
        return ComponentWiseUnaryOperation(a, Math.tanh);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */, FlowGraphTanhBlock);
/**
 * Hyperbolic arcsin block.
 */
class FlowGraphAsinhBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAsinh(a), "FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */, config);
    }
    _polymorphicAsinh(a) {
        return ComponentWiseUnaryOperation(a, Math.asinh);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */, FlowGraphAsinhBlock);
/**
 * Hyperbolic arccos block.
 */
class FlowGraphAcoshBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAcosh(a), "FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */, config);
    }
    _polymorphicAcosh(a) {
        return ComponentWiseUnaryOperation(a, Math.acosh);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */, FlowGraphAcoshBlock);
/**
 * Hyperbolic arctan block.
 */
class FlowGraphAtanhBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicAtanh(a), "FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */, config);
    }
    _polymorphicAtanh(a) {
        return ComponentWiseUnaryOperation(a, Math.atanh);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */, FlowGraphAtanhBlock);
/**
 * Exponential block.
 */
class FlowGraphExpBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicExp(a), "FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */, config);
    }
    _polymorphicExp(a) {
        return ComponentWiseUnaryOperation(a, Math.exp);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */, FlowGraphExpBlock);
/**
 * Logarithm block.
 */
class FlowGraphLogBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicLog(a), "FlowGraphLogBlock" /* FlowGraphBlockNames.Log */, config);
    }
    _polymorphicLog(a) {
        return ComponentWiseUnaryOperation(a, Math.log);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphLogBlock" /* FlowGraphBlockNames.Log */, FlowGraphLogBlock);
/**
 * Base 2 logarithm block.
 */
class FlowGraphLog2Block extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicLog2(a), "FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */, config);
    }
    _polymorphicLog2(a) {
        return ComponentWiseUnaryOperation(a, Math.log2);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */, FlowGraphLog2Block);
/**
 * Base 10 logarithm block.
 */
class FlowGraphLog10Block extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicLog10(a), "FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */, config);
    }
    _polymorphicLog10(a) {
        return ComponentWiseUnaryOperation(a, Math.log10);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */, FlowGraphLog10Block);
/**
 * Square root block.
 */
class FlowGraphSquareRootBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicSqrt(a), "FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */, config);
    }
    _polymorphicSqrt(a) {
        return ComponentWiseUnaryOperation(a, Math.sqrt);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */, FlowGraphSquareRootBlock);
/**
 * Cube root block.
 */
class FlowGraphCubeRootBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicCubeRoot(a), "FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */, config);
    }
    _polymorphicCubeRoot(a) {
        return ComponentWiseUnaryOperation(a, Math.cbrt);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */, FlowGraphCubeRootBlock);
/**
 * Power block.
 */
class FlowGraphPowerBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a, b) => this._polymorphicPow(a, b), "FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */, config);
    }
    _polymorphicPow(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.pow);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */, FlowGraphPowerBlock);
/**
 * Bitwise NOT operation
 */
class FlowGraphBitwiseNotBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (a) => {
            if (typeof a === "boolean") {
                return !a;
            }
            else if (typeof a === "number") {
                return ~a;
            }
            return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(~a.value);
        }, "FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */, FlowGraphBitwiseNotBlock);
/**
 * Bitwise AND operation
 */
class FlowGraphBitwiseAndBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (a, b) => {
            if (typeof a === "boolean" && typeof b === "boolean") {
                return a && b;
            }
            else if (typeof a === "number" && typeof b === "number") {
                return a & b;
            }
            else if (typeof a === "object" && typeof b === "object") {
                return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(a.value & b.value);
            }
            else {
                throw new Error(`Cannot perform bitwise AND on ${a} and ${b}`);
            }
        }, "FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */, FlowGraphBitwiseAndBlock);
/**
 * Bitwise OR operation
 */
class FlowGraphBitwiseOrBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (a, b) => {
            if (typeof a === "boolean" && typeof b === "boolean") {
                return a || b;
            }
            else if (typeof a === "number" && typeof b === "number") {
                return a | b;
            }
            else if (typeof a === "object" && typeof b === "object") {
                return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(a.value | b.value);
            }
            else {
                throw new Error(`Cannot perform bitwise OR on ${a} and ${b}`);
            }
        }, "FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */, FlowGraphBitwiseOrBlock);
/**
 * Bitwise XOR operation
 */
class FlowGraphBitwiseXorBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super((0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */), (a, b) => {
            if (typeof a === "boolean" && typeof b === "boolean") {
                return a !== b;
            }
            else if (typeof a === "number" && typeof b === "number") {
                return a ^ b;
            }
            else if (typeof a === "object" && typeof b === "object") {
                return new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(a.value ^ b.value);
            }
            else {
                throw new Error(`Cannot perform bitwise XOR on ${a} and ${b}`);
            }
        }, "FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */, FlowGraphBitwiseXorBlock);
/**
 * Bitwise left shift operation
 */
class FlowGraphBitwiseLeftShiftBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a, b) => new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(a.value << b.value), "FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */, FlowGraphBitwiseLeftShiftBlock);
/**
 * Bitwise right shift operation
 */
class FlowGraphBitwiseRightShiftBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a, b) => new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(a.value >> b.value), "FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */, FlowGraphBitwiseRightShiftBlock);
/**
 * Count leading zeros operation
 */
class FlowGraphLeadingZerosBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a) => new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(Math.clz32(a.value)), "FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */, FlowGraphLeadingZerosBlock);
/**
 * Count trailing zeros operation
 */
class FlowGraphTrailingZerosBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a) => new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(a.value ? 31 - Math.clz32(a.value & -a.value) : 32), "FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */, FlowGraphTrailingZerosBlock);
/**
 * Given a number (which is converted to a 32-bit integer), return the
 * number of bits set to one on that number.
 * @param n the number to run the op on
 * @returns the number of bits set to one on that number
 */
function CountOnes(n) {
    let result = 0;
    while (n) {
        // This zeroes out all bits except for the least significant one.
        // So if the bit is set, it will be 1, otherwise it will be 0.
        result += n & 1;
        // This shifts n's bits to the right by one
        n >>= 1;
    }
    return result;
}
/**
 * Count one bits operation
 */
class FlowGraphOneBitsCounterBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, (a) => new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_7__.FlowGraphInteger(CountOnes(a.value)), "FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */, config);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */, FlowGraphOneBitsCounterBlock);


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

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphConstantOperationBlock.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphConstantOperationBlock.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphConstantOperationBlock: () => (/* binding */ FlowGraphConstantOperationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Block that outputs a value of type ResultT, resulting of an operation with no inputs.
 * This block is being extended by some math operations and should not be used directly.
 * @internal
 */
class FlowGraphConstantOperationBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphCachedOperationBlock {
    constructor(richType, _operation, _className, config) {
        super(richType, config);
        this._operation = _operation;
        this._className = _className;
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */
    _doOperation(context) {
        return this._operation(context);
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

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphTernaryOperationBlock: () => (/* binding */ FlowGraphTernaryOperationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * @internal
 * The base block for all ternary operation blocks.
 */
class FlowGraphTernaryOperationBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphCachedOperationBlock {
    constructor(t1Type, t2Type, t3Type, resultRichType, _operation, _className, config) {
        super(resultRichType, config);
        this._operation = _operation;
        this._className = _className;
        this.a = this.registerDataInput("a", t1Type);
        this.b = this.registerDataInput("b", t2Type);
        this.c = this.registerDataInput("c", t3Type);
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */
    _doOperation(context) {
        return this._operation(this.a.getValue(context), this.b.getValue(context), this.c.getValue(context));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9NYXRoX2Zsb3dHcmFwaE1hdGhCbG9ja3NfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUF3QkE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNCQTs7OztBQUlBO0FBQ0E7QUFZQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBY0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsMENBO0FBQ0E7OztBQUdBO0FBQ0E7QUFVQTtBQVFBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUpBO0FBQ0E7QUFJQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7O0FBR0E7QUFDQTtBQWNBO0FBU0E7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBRUE7OztBQUdBO0FBQ0E7QUFNQTtBQU9BO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3MudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoQ29uc3RhbnRPcGVyYXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhUZXJuYXJ5T3BlcmF0aW9uQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhUeXBlcywgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUsIFJpY2hUeXBlQW55LCBSaWNoVHlwZUJvb2xlYW4sIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgUmljaFR5cGVOdW1iZXIgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaENvbnN0YW50T3BlcmF0aW9uQmxvY2sgfSBmcm9tIFwiLi4vZmxvd0dyYXBoQ29uc3RhbnRPcGVyYXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBNYXRyaXgsIFZlY3RvcjIsIFZlY3RvcjMsIFZlY3RvcjQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuLi9mbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaFRlcm5hcnlPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuLi9mbG93R3JhcGhUZXJuYXJ5T3BlcmF0aW9uQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCIuLi8uLi8uLi9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaE1hdHJpeDJELCBGbG93R3JhcGhNYXRyaXgzRCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9DdXN0b21UeXBlcy9mbG93R3JhcGhNYXRyaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XHJcbmltcG9ydCB7IF9BcmVTYW1lSW50ZWdlckNsYXNzLCBfQXJlU2FtZU1hdHJpeENsYXNzLCBfQXJlU2FtZVZlY3Rvck9yUXVhdGVybmlvbkNsYXNzLCBfR2V0Q2xhc3NOYW1lT2YsIGdldE51bWVyaWNWYWx1ZSwgaXNOdW1lcmljIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XHJcblxyXG4vKipcclxuICogQSBjb25maWd1cmF0aW9uIGludGVyZmFjZSBmb3IgbWF0aCBibG9ja3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaE1hdGhCbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgdGhlIG11bHRpcGxpY2F0aW9uIGlzIGRvbmUgcGVyIGNvbXBvbmVudC5cclxuICAgICAqIFRoaXMgaXMgdGhlIGJlaGF2aW9yIGluIGdsVEYgaW50ZXJhY3Rpdml0eS5cclxuICAgICAqL1xyXG4gICAgdXNlTWF0cml4UGVyQ29tcG9uZW50PzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSB2YXJpYWJsZS5cclxuICAgICAqL1xyXG4gICAgdHlwZT86IEZsb3dHcmFwaFR5cGVzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgdGhlIGJsb2NrIHdpbGwgbm90IGFsbG93IGludGVnZXIgYW5kIGZsb2F0IGFyaXRobWV0aWMuXHJcbiAgICAgKiBUaGlzIGlzIHRoZSBiZWhhdmlvciBpbiBnbFRGIGludGVyYWN0aXZpdHkuXHJcbiAgICAgKi9cclxuICAgIHByZXZlbnRJbnRlZ2VyRmxvYXRBcml0aG1ldGljPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBvbHltb3JwaGljIGFkZCBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhBZGRCbG9jayBleHRlbmRzIEZsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0IGEgbmV3IGFkZCBibG9jay5cclxuICAgICAqIEBwYXJhbSBjb25maWcgb3B0aW9uYWwgY29uZmlndXJhdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoTWF0aEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnR5cGUpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnR5cGUpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnR5cGUpLFxyXG4gICAgICAgICAgICAoYSwgYikgPT4gdGhpcy5fcG9seW1vcnBoaWNBZGQoYSwgYiksXHJcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuQWRkLFxyXG4gICAgICAgICAgICBjb25maWdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQWRkKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBiOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGFDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XHJcbiAgICAgICAgY29uc3QgYkNsYXNzTmFtZSA9IF9HZXRDbGFzc05hbWVPZihiKTtcclxuICAgICAgICBpZiAoX0FyZVNhbWVWZWN0b3JPclF1YXRlcm5pb25DbGFzcyhhQ2xhc3NOYW1lLCBiQ2xhc3NOYW1lKSB8fCBfQXJlU2FtZU1hdHJpeENsYXNzKGFDbGFzc05hbWUsIGJDbGFzc05hbWUpIHx8IF9BcmVTYW1lSW50ZWdlckNsYXNzKGFDbGFzc05hbWUsIGJDbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vIGNhc3QgdG8gdmVjdG9yMywgYnV0IGFueSBvdGhlciBjYXN0IHdpbGwgYmUgZmluZVxyXG4gICAgICAgICAgICByZXR1cm4gKGEgYXMgVmVjdG9yMykuYWRkKGIgYXMgVmVjdG9yMyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uIHx8IGJDbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KChhIGFzIFF1YXRlcm5pb24pLngsIChhIGFzIFF1YXRlcm5pb24pLnksIChhIGFzIFF1YXRlcm5pb24pLnosIChhIGFzIFF1YXRlcm5pb24pLncpLmFkZEluUGxhY2UoYiBhcyBWZWN0b3I0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFDbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQgfHwgYkNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKGEgYXMgVmVjdG9yNCkuYWRkKGIgYXMgUXVhdGVybmlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gYXQgdGhpcyBwb2ludCBhdCBsZWFzdCBvbmUgb2YgdGhlIHZhcmlhYmxlcyBpcyBhIG51bWJlci5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnPy5wcmV2ZW50SW50ZWdlckZsb2F0QXJpdGhtZXRpYyAmJiB0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgZGlmZmVyZW50IHR5cGVzIG9mIG51bWJlcnMuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBnZXROdW1lcmljVmFsdWUoYSBhcyBudW1iZXIpICsgZ2V0TnVtZXJpY1ZhbHVlKGIgYXMgbnVtYmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkFkZCwgRmxvd0dyYXBoQWRkQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIFBvbHltb3JwaGljIHN1YnRyYWN0IGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFN1YnRyYWN0QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIG5ldyBzdWJ0cmFjdCBibG9jay5cclxuICAgICAqIEBwYXJhbSBjb25maWcgb3B0aW9uYWwgY29uZmlndXJhdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoTWF0aEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnR5cGUpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnR5cGUpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnR5cGUpLFxyXG4gICAgICAgICAgICAoYSwgYikgPT4gdGhpcy5fcG9seW1vcnBoaWNTdWJ0cmFjdChhLCBiKSxcclxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5TdWJ0cmFjdCxcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY1N1YnRyYWN0KGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBiOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGFDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XHJcbiAgICAgICAgY29uc3QgYkNsYXNzTmFtZSA9IF9HZXRDbGFzc05hbWVPZihiKTtcclxuICAgICAgICBpZiAoX0FyZVNhbWVWZWN0b3JPclF1YXRlcm5pb25DbGFzcyhhQ2xhc3NOYW1lLCBiQ2xhc3NOYW1lKSB8fCBfQXJlU2FtZUludGVnZXJDbGFzcyhhQ2xhc3NOYW1lLCBiQ2xhc3NOYW1lKSB8fCBfQXJlU2FtZU1hdHJpeENsYXNzKGFDbGFzc05hbWUsIGJDbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vIGNhc3QgdG8gdmVjdG9yMywgYnV0IGl0IGNhbiBiZSBjYXN0ZWQgdG8gYW55IHZlY3RvciB0eXBlXHJcbiAgICAgICAgICAgIHJldHVybiAoYSBhcyBWZWN0b3IzKS5zdWJ0cmFjdChiIGFzIFZlY3RvcjMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYUNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbiB8fCBiQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCgoYSBhcyBRdWF0ZXJuaW9uKS54LCAoYSBhcyBRdWF0ZXJuaW9uKS55LCAoYSBhcyBRdWF0ZXJuaW9uKS56LCAoYSBhcyBRdWF0ZXJuaW9uKS53KS5zdWJ0cmFjdEluUGxhY2UoYiBhcyBWZWN0b3I0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFDbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQgfHwgYkNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKGEgYXMgVmVjdG9yNCkuc3VidHJhY3QoYiBhcyBRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBhdCB0aGlzIHBvaW50IGF0IGxlYXN0IG9uZSBvZiB0aGUgdmFyaWFibGVzIGlzIGEgbnVtYmVyLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWc/LnByZXZlbnRJbnRlZ2VyRmxvYXRBcml0aG1ldGljICYmIHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFkZCBkaWZmZXJlbnQgdHlwZXMgb2YgbnVtYmVycy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldE51bWVyaWNWYWx1ZShhIGFzIG51bWJlcikgLSBnZXROdW1lcmljVmFsdWUoYiBhcyBudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU3VidHJhY3QsIEZsb3dHcmFwaFN1YnRyYWN0QmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIFBvbHltb3JwaGljIG11bHRpcGx5IGJsb2NrLlxyXG4gKiBJbiBjYXNlIG9mIG1hdHJpeCwgaXQgaXMgY29uZmlndXJhYmxlIHdoZXRoZXIgdGhlIG11bHRpcGxpY2F0aW9uIGlzIGRvbmUgcGVyIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhNdWx0aXBseUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaE1hdGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy50eXBlKSxcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy50eXBlKSxcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy50eXBlKSxcclxuICAgICAgICAgICAgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljTXVsdGlwbHkoYSwgYiksXHJcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuTXVsdGlwbHksXHJcbiAgICAgICAgICAgIGNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNNdWx0aXBseShhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYjogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICBjb25zdCBhQ2xhc3NOYW1lID0gX0dldENsYXNzTmFtZU9mKGEpO1xyXG4gICAgICAgIGNvbnN0IGJDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYik7XHJcbiAgICAgICAgaWYgKF9BcmVTYW1lVmVjdG9yT3JRdWF0ZXJuaW9uQ2xhc3MoYUNsYXNzTmFtZSwgYkNsYXNzTmFtZSkgfHwgX0FyZVNhbWVJbnRlZ2VyQ2xhc3MoYUNsYXNzTmFtZSwgYkNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgLy8gY2FzdCB0byB2ZWN0b3IzLCBidXQgaXQgY2FuIGJlIGNhc3RlZCB0byBhbnkgdmVjdG9yIHR5cGVcclxuICAgICAgICAgICAgcmV0dXJuIChhIGFzIFZlY3RvcjMpLm11bHRpcGx5KGIgYXMgVmVjdG9yMyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uIHx8IGJDbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KChhIGFzIFF1YXRlcm5pb24pLngsIChhIGFzIFF1YXRlcm5pb24pLnksIChhIGFzIFF1YXRlcm5pb24pLnosIChhIGFzIFF1YXRlcm5pb24pLncpLm11bHRpcGx5SW5QbGFjZShiIGFzIFZlY3RvcjQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYUNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuVmVjdG9yNCB8fCBiQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYSBhcyBWZWN0b3I0KS5tdWx0aXBseShiIGFzIFF1YXRlcm5pb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoX0FyZVNhbWVNYXRyaXhDbGFzcyhhQ2xhc3NOYW1lLCBiQ2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWc/LnVzZU1hdHJpeFBlckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGVmaW5pdGlvbiBvZiBtdWx0aXBsaWNhdGlvbiBvZiBnbFRGIGludGVyYWN0aXZpdHlcclxuICAgICAgICAgICAgICAgIC8vIGdldCBhJ3MgbSBhcyBhcnJheSwgYW5kIG11bHRpcGx5IGVhY2ggY29tcG9uZW50IHdpdGggYidzIG1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFNID0gKGEgYXMgRmxvd0dyYXBoTWF0cml4MkQpLm07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFNLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYU1baV0gKj0gKGIgYXMgRmxvd0dyYXBoTWF0cml4MkQpLm1baV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYUNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4MkQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaE1hdHJpeDJEKGFNKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYUNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4M0QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaE1hdHJpeDNEKGFNKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdHJpeC5Gcm9tQXJyYXkoYU0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYSA9IGEgYXMgTWF0cml4O1xyXG4gICAgICAgICAgICAgICAgYiA9IGIgYXMgTWF0cml4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGIubXVsdGlwbHkoYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBhdCB0aGlzIHBvaW50IGF0IGxlYXN0IG9uZSBvZiB0aGUgdmFyaWFibGVzIGlzIGEgbnVtYmVyLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWc/LnByZXZlbnRJbnRlZ2VyRmxvYXRBcml0aG1ldGljICYmIHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFkZCBkaWZmZXJlbnQgdHlwZXMgb2YgbnVtYmVycy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldE51bWVyaWNWYWx1ZShhIGFzIG51bWJlcikgKiBnZXROdW1lcmljVmFsdWUoYiBhcyBudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuTXVsdGlwbHksIEZsb3dHcmFwaE11bHRpcGx5QmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIFBvbHltb3JwaGljIGRpdmlzaW9uIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaERpdmlkZUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3QgYSBuZXcgZGl2aWRlIGJsb2NrLlxyXG4gICAgICogQHBhcmFtIGNvbmZpZyAtIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaE1hdGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy50eXBlKSxcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy50eXBlKSxcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy50eXBlKSxcclxuICAgICAgICAgICAgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljRGl2aWRlKGEsIGIpLFxyXG4gICAgICAgICAgICBGbG93R3JhcGhCbG9ja05hbWVzLkRpdmlkZSxcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0RpdmlkZShhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYjogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICBjb25zdCBhQ2xhc3NOYW1lID0gX0dldENsYXNzTmFtZU9mKGEpO1xyXG4gICAgICAgIGNvbnN0IGJDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYik7XHJcbiAgICAgICAgaWYgKF9BcmVTYW1lVmVjdG9yT3JRdWF0ZXJuaW9uQ2xhc3MoYUNsYXNzTmFtZSwgYkNsYXNzTmFtZSkgfHwgX0FyZVNhbWVJbnRlZ2VyQ2xhc3MoYUNsYXNzTmFtZSwgYkNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgLy8gY2FzdCB0byB2ZWN0b3IzLCBidXQgaXQgY2FuIGJlIGNhc3RlZCB0byBhbnkgdmVjdG9yIHR5cGVcclxuICAgICAgICAgICAgcmV0dXJuIChhIGFzIFZlY3RvcjMpLmRpdmlkZShiIGFzIFZlY3RvcjMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYUNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbiB8fCBiQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBzaW1wbGUgZGl2aXNpb24gKHBlciBjb21wb25lbnQhKSwgYW5kIHNob3VsZCBiZSBhbHNvIHN1cHBvcnRlZCBiZXR3ZWVuIFF1YXQgYW5kIFZlY3RvcjQuIFRoZXJlZm9yZSAtXHJcbiAgICAgICAgICAgIGNvbnN0IGFDbG9uZSA9IChhIGFzIFF1YXRlcm5pb24pLmNsb25lKCk7XHJcbiAgICAgICAgICAgIGFDbG9uZS54IC89IChiIGFzIFF1YXRlcm5pb24pLng7XHJcbiAgICAgICAgICAgIGFDbG9uZS55IC89IChiIGFzIFF1YXRlcm5pb24pLnk7XHJcbiAgICAgICAgICAgIGFDbG9uZS56IC89IChiIGFzIFF1YXRlcm5pb24pLno7XHJcbiAgICAgICAgICAgIGFDbG9uZS53IC89IChiIGFzIFF1YXRlcm5pb24pLnc7XHJcbiAgICAgICAgICAgIHJldHVybiBhQ2xvbmU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uIHx8IGJDbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0KChhIGFzIFF1YXRlcm5pb24pLngsIChhIGFzIFF1YXRlcm5pb24pLnksIChhIGFzIFF1YXRlcm5pb24pLnosIChhIGFzIFF1YXRlcm5pb24pLncpLmRpdmlkZUluUGxhY2UoYiBhcyBWZWN0b3I0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFDbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQgfHwgYkNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKGEgYXMgVmVjdG9yNCkuZGl2aWRlKGIgYXMgUXVhdGVybmlvbik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfQXJlU2FtZU1hdHJpeENsYXNzKGFDbGFzc05hbWUsIGJDbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZz8udXNlTWF0cml4UGVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgYSdzIG0gYXMgYXJyYXksIGFuZCBkaXZpZGUgZWFjaCBjb21wb25lbnQgd2l0aCBiJ3MgbVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYU0gPSAoYSBhcyBGbG93R3JhcGhNYXRyaXgyRCkubTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYU0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhTVtpXSAvPSAoYiBhcyBGbG93R3JhcGhNYXRyaXgyRCkubVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5NYXRyaXgyRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvd0dyYXBoTWF0cml4MkQoYU0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhQ2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5NYXRyaXgzRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvd0dyYXBoTWF0cml4M0QoYU0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0cml4LkZyb21BcnJheShhTSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhID0gYSBhcyBNYXRyaXg7XHJcbiAgICAgICAgICAgICAgICBiID0gYiBhcyBNYXRyaXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5kaXZpZGUoYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBhdCB0aGlzIHBvaW50IGF0IGxlYXN0IG9uZSBvZiB0aGUgdmFyaWFibGVzIGlzIGEgbnVtYmVyLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWc/LnByZXZlbnRJbnRlZ2VyRmxvYXRBcml0aG1ldGljICYmIHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFkZCBkaWZmZXJlbnQgdHlwZXMgb2YgbnVtYmVycy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldE51bWVyaWNWYWx1ZShhIGFzIG51bWJlcikgLyBnZXROdW1lcmljVmFsdWUoYiBhcyBudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRGl2aWRlLCBGbG93R3JhcGhEaXZpZGVCbG9jayk7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBpbnRlcmZhY2UgZm9yIHRoZSByYW5kb20gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhSYW5kb21CbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1pbmltdW0gdmFsdWUuIGRlZmF1bHRzIHRvIDAuXHJcbiAgICAgKi9cclxuICAgIG1pbj86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1heGltdW0gdmFsdWUuIGRlZmF1bHRzIHRvIDEuXHJcbiAgICAgKi9cclxuICAgIG1heD86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzZWVkIGZvciB0aGUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgZm9yIGRldGVybWluaXN0aWMgcmFuZG9tIHZhbHVlcy5cclxuICAgICAqIElmIG5vdCBzZXQsIE1hdGgucmFuZG9tKCkgaXMgdXNlZC5cclxuICAgICAqL1xyXG4gICAgc2VlZD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoZGVmYXVsdHMgdG8gMCB0byAxKVxyXG4gKlxyXG4gKiBUaGlzIG5vZGUgd2lsbCBjYWNoZSB0aGUgcmVzdWx0IGZvciBoZSBzYW1lIG5vZGUgcmVmZXJlbmNlLiBpLmUuLCBhIE1hdGguZXEgdGhhdCByZWZlcmVuY2VzIHRoZSBTQU1FIHJhbmRvbSBub2RlIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFJhbmRvbUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQ29uc3RhbnRPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWluaW11bSB2YWx1ZS4gZGVmYXVsdHMgdG8gMC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG1pbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1heGltdW0gdmFsdWUuIGRlZmF1bHRzIHRvIDEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBtYXg6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VlZD86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIG5ldyByYW5kb20gYmxvY2suXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaFJhbmRvbUJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCAoY29udGV4dCkgPT4gdGhpcy5fcmFuZG9tKGNvbnRleHQpLCBGbG93R3JhcGhCbG9ja05hbWVzLlJhbmRvbSwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLm1pbiA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJtaW5cIiwgUmljaFR5cGVOdW1iZXIsIGNvbmZpZz8ubWluID8/IDApO1xyXG4gICAgICAgIHRoaXMubWF4ID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcIm1heFwiLCBSaWNoVHlwZU51bWJlciwgY29uZmlnPy5tYXggPz8gMSk7XHJcbiAgICAgICAgaWYgKGNvbmZpZz8uc2VlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWVkID0gY29uZmlnLnNlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzU2VlZChzZWVkID0gdGhpcy5fc2VlZCk6IHNlZWQgaXMgbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gc2VlZCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFJhbmRvbVZhbHVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1NlZWQodGhpcy5fc2VlZCkpIHtcclxuICAgICAgICAgICAgLy8gY29tcHV0ZSBzZWVkLWJhc2VkIHJhbmRvbSBudW1iZXIsIGRldGVybWluaXN0aWMgcmFuZG9tbmVzcyFcclxuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguc2luKHRoaXMuX3NlZWQrKykgKiAxMDAwMDtcclxuICAgICAgICAgICAgcmV0dXJuIHggLSBNYXRoLmZsb29yKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yYW5kb20oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IG1heCA9IHRoaXMubWF4LmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRSYW5kb21WYWx1ZSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlJhbmRvbSwgRmxvd0dyYXBoUmFuZG9tQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEUgY29uc3RhbnQuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhFQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhDb25zdGFudE9wZXJhdGlvbkJsb2NrPG51bWJlcj4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCAoKSA9PiBNYXRoLkUsIEZsb3dHcmFwaEJsb2NrTmFtZXMuRSwgY29uZmlnKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRSwgRmxvd0dyYXBoRUJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBQaSBjb25zdGFudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhQaUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQ29uc3RhbnRPcGVyYXRpb25CbG9jazxudW1iZXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZU51bWJlciwgKCkgPT4gTWF0aC5QSSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5QSSwgY29uZmlnKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuUEksIEZsb3dHcmFwaFBpQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIFBvc2l0aXZlIGluZiBjb25zdGFudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhJbmZCbG9jayBleHRlbmRzIEZsb3dHcmFwaENvbnN0YW50T3BlcmF0aW9uQmxvY2s8bnVtYmVyPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVOdW1iZXIsICgpID0+IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbmYsIGNvbmZpZyk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkluZiwgRmxvd0dyYXBoSW5mQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIE5hTiBjb25zdGFudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhOYU5CbG9jayBleHRlbmRzIEZsb3dHcmFwaENvbnN0YW50T3BlcmF0aW9uQmxvY2s8bnVtYmVyPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVOdW1iZXIsICgpID0+IE51bWJlci5OYU4sIEZsb3dHcmFwaEJsb2NrTmFtZXMuTmFOLCBjb25maWcpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5OYU4sIEZsb3dHcmFwaE5hTkJsb2NrKTtcclxuXHJcbmZ1bmN0aW9uIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgb3A6IChhOiBudW1iZXIpID0+IG51bWJlcikge1xyXG4gICAgY29uc3QgYUNsYXNzTmFtZSA9IF9HZXRDbGFzc05hbWVPZihhKTtcclxuICAgIHN3aXRjaCAoYUNsYXNzTmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJGbG93R3JhcGhJbnRlZ2VyXCI6XHJcbiAgICAgICAgICAgIGEgPSBhIGFzIEZsb3dHcmFwaEludGVnZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvd0dyYXBoSW50ZWdlcihvcChhLnZhbHVlKSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IyOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3IyO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIob3AoYS54KSwgb3AoYS55KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMob3AoYS54KSwgb3AoYS55KSwgb3AoYS56KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0OlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3I0O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQob3AoYS54KSwgb3AoYS55KSwgb3AoYS56KSwgb3AoYS53KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBRdWF0ZXJuaW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFF1YXRlcm5pb24ob3AoYS54KSwgb3AoYS55KSwgb3AoYS56KSwgb3AoYS53KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5NYXRyaXg6XHJcbiAgICAgICAgICAgIGEgPSBhIGFzIE1hdHJpeDtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeC5Gcm9tQXJyYXkoYS5tLm1hcChvcCkpO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4MkQ6XHJcbiAgICAgICAgICAgIGEgPSBhIGFzIEZsb3dHcmFwaE1hdHJpeDJEO1xyXG4gICAgICAgICAgICAvLyByZWFzb24gZm9yIG5vdCB1c2luZyAubWFwIGlzIHBlcmZvcm1hbmNlXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvd0dyYXBoTWF0cml4MkQoYS5tLm1hcChvcCkpO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4M0Q6XHJcbiAgICAgICAgICAgIGEgPSBhIGFzIEZsb3dHcmFwaE1hdHJpeDNEO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaE1hdHJpeDNEKGEubS5tYXAob3ApKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBhID0gYSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBvcChhKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFic29sdXRlIHZhbHVlIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEFic0Jsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZU51bWJlciwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0FicyhhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5BYnMsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNBYnMoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGguYWJzKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQWJzLCBGbG93R3JhcGhBYnNCbG9jayk7XHJcblxyXG4vKipcclxuICogU2lnbiBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhTaWduQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCBSaWNoVHlwZU51bWJlciwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljU2lnbihhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaWduLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljU2lnbihhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC5zaWduKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2lnbiwgRmxvd0dyYXBoU2lnbkJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBUcnVuY2F0aW9uIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFRydW5jQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCBSaWNoVHlwZU51bWJlciwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljVHJ1bmMoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJ1bmMsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNUcnVuYyhhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC50cnVuYyk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlRydW5jLCBGbG93R3JhcGhUcnVuY0Jsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBGbG9vciBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhGbG9vckJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZU51bWJlciwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0Zsb29yKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLkZsb29yLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljRmxvb3IoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGguZmxvb3IpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9vciwgRmxvd0dyYXBoRmxvb3JCbG9jayk7XHJcblxyXG4vKipcclxuICogQ2VpbGluZyBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDZWlsQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljQ2VpbGluZyhhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5DZWlsLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQ2VpbGluZyhhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC5jZWlsKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2VpbCwgRmxvd0dyYXBoQ2VpbEJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgcm91bmQgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhSb3VuZEJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCB0aGUgcm91bmRpbmcgaXMgYXdheSBmcm9tIHplcm8sIGV2ZW4gd2hlbiBuZWdhdGl2ZS4gaS5lLiAtNy41IGdvZXMgdG8gLTgsIGFuZCBub3QgLTcgYXMgTWF0aC5yb3VuZCBkb2VzIChpdCByb3VuZHMgdXApLlxyXG4gICAgICogVGhpcyBpcyB0aGUgZGVmYXVsdCB3aGVuIHVzaW5nIGdsVEZcclxuICAgICAqL1xyXG4gICAgcm91bmRIYWxmQXdheUZyb21aZXJvPzogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogUm91bmQgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoUm91bmRCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoUm91bmRCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY1JvdW5kKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLlJvdW5kLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljUm91bmQoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIChhKSA9PiAoYSA8IDAgJiYgdGhpcy5jb25maWc/LnJvdW5kSGFsZkF3YXlGcm9tWmVybyA/IC1NYXRoLnJvdW5kKC1hKSA6IE1hdGgucm91bmQoYSkpKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlJvdW5kLCBGbG93R3JhcGhSb3VuZEJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBBIGJsb2NrIHRoYXQgcmV0dXJucyB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEZyYWN0aW9uQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljRnJhY3Rpb24oYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuRnJhY3Rpb24sIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNGcmFjdGlvbihhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgKGEpID0+IGEgLSBNYXRoLmZsb29yKGEpKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRnJhY3Rpb24sIEZsb3dHcmFwaEZyYWN0aW9uQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIE5lZ2F0aW9uIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaE5lZ2F0aW9uQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb25zdHJ1Y3QgYSBuZXcgbmVnYXRpb24gYmxvY2suXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljTmVnKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLk5lZ2F0aW9uLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljTmVnKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCAoYSkgPT4gLWEpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5OZWdhdGlvbiwgRmxvd0dyYXBoTmVnYXRpb25CbG9jayk7XHJcblxyXG5mdW5jdGlvbiBDb21wb25lbnRXaXNlQmluYXJ5T3BlcmF0aW9uKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBiOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgb3A6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyKSB7XHJcbiAgICBjb25zdCBhQ2xhc3NOYW1lID0gX0dldENsYXNzTmFtZU9mKGEpO1xyXG4gICAgc3dpdGNoIChhQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcIkZsb3dHcmFwaEludGVnZXJcIjpcclxuICAgICAgICAgICAgYSA9IGEgYXMgRmxvd0dyYXBoSW50ZWdlcjtcclxuICAgICAgICAgICAgYiA9IGIgYXMgRmxvd0dyYXBoSW50ZWdlcjtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhJbnRlZ2VyKG9wKGEudmFsdWUsIGIudmFsdWUpKTtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjI6XHJcbiAgICAgICAgICAgIGEgPSBhIGFzIFZlY3RvcjI7XHJcbiAgICAgICAgICAgIGIgPSBiIGFzIFZlY3RvcjI7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihvcChhLngsIGIueCksIG9wKGEueSwgYi55KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICBiID0gYiBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMob3AoYS54LCBiLngpLCBvcChhLnksIGIueSksIG9wKGEueiwgYi56KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0OlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3I0O1xyXG4gICAgICAgICAgICBiID0gYiBhcyBWZWN0b3I0O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQob3AoYS54LCBiLngpLCBvcChhLnksIGIueSksIG9wKGEueiwgYi56KSwgb3AoYS53LCBiLncpKTtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb246XHJcbiAgICAgICAgICAgIGEgPSBhIGFzIFF1YXRlcm5pb247XHJcbiAgICAgICAgICAgIGIgPSBiIGFzIFF1YXRlcm5pb247XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUXVhdGVybmlvbihvcChhLngsIGIueCksIG9wKGEueSwgYi55KSwgb3AoYS56LCBiLnopLCBvcChhLncsIGIudykpO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4OlxyXG4gICAgICAgICAgICBhID0gYSBhcyBNYXRyaXg7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXguRnJvbUFycmF5KGEubS5tYXAoKHYsIGkpID0+IG9wKHYsIChiIGFzIE1hdHJpeCkubVtpXSkpKTtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJEOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBGbG93R3JhcGhNYXRyaXgyRDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhNYXRyaXgyRChhLm0ubWFwKCh2LCBpKSA9PiBvcCh2LCAoYiBhcyBGbG93R3JhcGhNYXRyaXgyRCkubVtpXSkpKTtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNEOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBGbG93R3JhcGhNYXRyaXgzRDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhNYXRyaXgzRChhLm0ubWFwKCh2LCBpKSA9PiBvcCh2LCAoYiBhcyBGbG93R3JhcGhNYXRyaXgzRCkubVtpXSkpKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gb3AoZ2V0TnVtZXJpY1ZhbHVlKGEgYXMgbnVtYmVyKSwgZ2V0TnVtZXJpY1ZhbHVlKGIgYXMgbnVtYmVyKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1haW5kZXIgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTW9kdWxvQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljUmVtYWluZGVyKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLk1vZHVsbywgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY1JlbWFpbmRlcihhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYjogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZUJpbmFyeU9wZXJhdGlvbihhLCBiLCAoYSwgYikgPT4gYSAlIGIpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Nb2R1bG8sIEZsb3dHcmFwaE1vZHVsb0Jsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBNaW4gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTWluQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljTWluKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLk1pbiwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY01pbihhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYjogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZUJpbmFyeU9wZXJhdGlvbihhLCBiLCBNYXRoLm1pbik7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLk1pbiwgRmxvd0dyYXBoTWluQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIE1heCBibG9ja1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaE1heEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIChhLCBiKSA9PiB0aGlzLl9wb2x5bW9ycGhpY01heChhLCBiKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNNYXgoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIGI6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VCaW5hcnlPcGVyYXRpb24oYSwgYiwgTWF0aC5tYXgpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXgsIEZsb3dHcmFwaE1heEJsb2NrKTtcclxuXHJcbmZ1bmN0aW9uIENsYW1wKGE6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChhLCBNYXRoLm1pbihiLCBjKSksIE1hdGgubWF4KGIsIGMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcG9uZW50V2lzZVRlcm5hcnlPcGVyYXRpb24oXHJcbiAgICBhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSxcclxuICAgIGI6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLFxyXG4gICAgYzogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsXHJcbiAgICBvcDogKGE6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIpID0+IG51bWJlclxyXG4pIHtcclxuICAgIGNvbnN0IGFDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XHJcbiAgICBzd2l0Y2ggKGFDbGFzc05hbWUpIHtcclxuICAgICAgICBjYXNlIFwiRmxvd0dyYXBoSW50ZWdlclwiOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBGbG93R3JhcGhJbnRlZ2VyO1xyXG4gICAgICAgICAgICBiID0gYiBhcyBGbG93R3JhcGhJbnRlZ2VyO1xyXG4gICAgICAgICAgICBjID0gYyBhcyBGbG93R3JhcGhJbnRlZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaEludGVnZXIob3AoYS52YWx1ZSwgYi52YWx1ZSwgYy52YWx1ZSkpO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yMjpcclxuICAgICAgICAgICAgYSA9IGEgYXMgVmVjdG9yMjtcclxuICAgICAgICAgICAgYiA9IGIgYXMgVmVjdG9yMjtcclxuICAgICAgICAgICAgYyA9IGMgYXMgVmVjdG9yMjtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKG9wKGEueCwgYi54LCBjLngpLCBvcChhLnksIGIueSwgYy55KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICBiID0gYiBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICBjID0gYyBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMob3AoYS54LCBiLngsIGMueCksIG9wKGEueSwgYi55LCBjLnkpLCBvcChhLnosIGIueiwgYy56KSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0OlxyXG4gICAgICAgICAgICBhID0gYSBhcyBWZWN0b3I0O1xyXG4gICAgICAgICAgICBiID0gYiBhcyBWZWN0b3I0O1xyXG4gICAgICAgICAgICBjID0gYyBhcyBWZWN0b3I0O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQob3AoYS54LCBiLngsIGMueCksIG9wKGEueSwgYi55LCBjLnkpLCBvcChhLnosIGIueiwgYy56KSwgb3AoYS53LCBiLncsIGMudykpO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbjpcclxuICAgICAgICAgICAgYSA9IGEgYXMgUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgYiA9IGIgYXMgUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgYyA9IGMgYXMgUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBRdWF0ZXJuaW9uKG9wKGEueCwgYi54LCBjLngpLCBvcChhLnksIGIueSwgYy55KSwgb3AoYS56LCBiLnosIGMueiksIG9wKGEudywgYi53LCBjLncpKTtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDpcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeC5Gcm9tQXJyYXkoKGEgYXMgTWF0cml4KS5tLm1hcCgodiwgaSkgPT4gb3AodiwgKGIgYXMgTWF0cml4KS5tW2ldLCAoYyBhcyBNYXRyaXgpLm1baV0pKSk7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5NYXRyaXgyRDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhNYXRyaXgyRCgoYSBhcyBGbG93R3JhcGhNYXRyaXgyRCkubS5tYXAoKHYsIGkpID0+IG9wKHYsIChiIGFzIEZsb3dHcmFwaE1hdHJpeDJEKS5tW2ldLCAoYyBhcyBGbG93R3JhcGhNYXRyaXgyRCkubVtpXSkpKTtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNEOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaE1hdHJpeDNEKChhIGFzIEZsb3dHcmFwaE1hdHJpeDNEKS5tLm1hcCgodiwgaSkgPT4gb3AodiwgKGIgYXMgRmxvd0dyYXBoTWF0cml4M0QpLm1baV0sIChjIGFzIEZsb3dHcmFwaE1hdHJpeDNEKS5tW2ldKSkpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBvcChnZXROdW1lcmljVmFsdWUoYSBhcyBudW1iZXIpLCBnZXROdW1lcmljVmFsdWUoYiBhcyBudW1iZXIpLCBnZXROdW1lcmljVmFsdWUoYyBhcyBudW1iZXIpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENsYW1wIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENsYW1wQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhUZXJuYXJ5T3BlcmF0aW9uQmxvY2s8XHJcbiAgICBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSxcclxuICAgIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLFxyXG4gICAgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsXHJcbiAgICBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZVxyXG4+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEsIGIsIGMpID0+IHRoaXMuX3BvbHltb3JwaGljQ2xhbXAoYSwgYiwgYyksIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2xhbXAsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNDbGFtcChhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYjogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIGM6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VUZXJuYXJ5T3BlcmF0aW9uKGEsIGIsIGMsIENsYW1wKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2xhbXAsIEZsb3dHcmFwaENsYW1wQmxvY2spO1xyXG5cclxuZnVuY3Rpb24gU2F0dXJhdGUoYTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChhLCAwKSwgMSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYXR1cmF0ZSBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhTYXR1cmF0ZUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY1NhdHVyYXRlKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLlNhdHVyYXRlLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljU2F0dXJhdGUoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIFNhdHVyYXRlKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2F0dXJhdGUsIEZsb3dHcmFwaFNhdHVyYXRlQmxvY2spO1xyXG5cclxuZnVuY3Rpb24gSW50ZXJwb2xhdGUoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICgxIC0gYykgKiBhICsgYyAqIGI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcnBvbGF0ZSBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhNYXRoSW50ZXJwb2xhdGlvbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVGVybmFyeU9wZXJhdGlvbkJsb2NrPFxyXG4gICAgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsXHJcbiAgICBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSxcclxuICAgIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLFxyXG4gICAgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGVcclxuPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIChhLCBiLCBjKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0ludGVycG9sYXRlKGEsIGIsIGMpLCBGbG93R3JhcGhCbG9ja05hbWVzLk1hdGhJbnRlcnBvbGF0aW9uLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljSW50ZXJwb2xhdGUoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIGI6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBjOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVGVybmFyeU9wZXJhdGlvbihhLCBiLCBjLCBJbnRlcnBvbGF0ZSk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLk1hdGhJbnRlcnBvbGF0aW9uLCBGbG93R3JhcGhNYXRoSW50ZXJwb2xhdGlvbkJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBFcXVhbHMgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoRXF1YWxpdHlCbG9jayBleHRlbmRzIEZsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYm9vbGVhbj4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgUmljaFR5cGVCb29sZWFuLCAoYSwgYikgPT4gdGhpcy5fcG9seW1vcnBoaWNFcShhLCBiKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5FcXVhbGl0eSwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0VxKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBiOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGFDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XHJcbiAgICAgICAgY29uc3QgYkNsYXNzTmFtZSA9IF9HZXRDbGFzc05hbWVPZihiKTtcclxuICAgICAgICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9BcmVTYW1lVmVjdG9yT3JRdWF0ZXJuaW9uQ2xhc3MoYUNsYXNzTmFtZSwgYkNsYXNzTmFtZSkgfHwgX0FyZVNhbWVNYXRyaXhDbGFzcyhhQ2xhc3NOYW1lLCBiQ2xhc3NOYW1lKSB8fCBfQXJlU2FtZUludGVnZXJDbGFzcyhhQ2xhc3NOYW1lLCBiQ2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGEgYXMgVmVjdG9yMykuZXF1YWxzKGIgYXMgVmVjdG9yMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5FcXVhbGl0eSwgRmxvd0dyYXBoRXF1YWxpdHlCbG9jayk7XHJcblxyXG5mdW5jdGlvbiBDb21wYXJpc29uT3BlcmF0b3JzKGE6IEZsb3dHcmFwaE51bWJlciwgYjogRmxvd0dyYXBoTnVtYmVyLCBvcDogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNOdW1lcmljKGEpICYmIGlzTnVtZXJpYyhiKSkge1xyXG4gICAgICAgIHJldHVybiBvcChnZXROdW1lcmljVmFsdWUoYSksIGdldE51bWVyaWNWYWx1ZShiKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvbXBhcmUgJHthfSBhbmQgJHtifWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTGVzcyB0aGFuIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaExlc3NUaGFuQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhOdW1iZXIsIEZsb3dHcmFwaE51bWJlciwgYm9vbGVhbj4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgUmljaFR5cGVCb29sZWFuLCAoYSwgYikgPT4gdGhpcy5fcG9seW1vcnBoaWNMZXNzVGhhbihhLCBiKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhbiwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0xlc3NUaGFuKGE6IEZsb3dHcmFwaE51bWJlciwgYjogRmxvd0dyYXBoTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBhcmlzb25PcGVyYXRvcnMoYSwgYiwgKGEsIGIpID0+IGEgPCBiKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVzc1RoYW4sIEZsb3dHcmFwaExlc3NUaGFuQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIExlc3MgdGhhbiBvciBlcXVhbCBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhMZXNzVGhhbk9yRXF1YWxCbG9jayBleHRlbmRzIEZsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE51bWJlciwgRmxvd0dyYXBoTnVtYmVyLCBib29sZWFuPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCBSaWNoVHlwZUJvb2xlYW4sIChhLCBiKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0xlc3NUaGFuT3JFcXVhbChhLCBiKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhbk9yRXF1YWwsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNMZXNzVGhhbk9yRXF1YWwoYTogRmxvd0dyYXBoTnVtYmVyLCBiOiBGbG93R3JhcGhOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gQ29tcGFyaXNvbk9wZXJhdG9ycyhhLCBiLCAoYSwgYikgPT4gYSA8PSBiKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkxlc3NUaGFuT3JFcXVhbCwgRmxvd0dyYXBoTGVzc1RoYW5PckVxdWFsQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEdyZWF0ZXIgdGhhbiBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhHcmVhdGVyVGhhbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTnVtYmVyLCBGbG93R3JhcGhOdW1iZXIsIGJvb2xlYW4+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIFJpY2hUeXBlQm9vbGVhbiwgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljR3JlYXRlclRoYW4oYSwgYiksIEZsb3dHcmFwaEJsb2NrTmFtZXMuR3JlYXRlclRoYW4sIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNHcmVhdGVyVGhhbihhOiBGbG93R3JhcGhOdW1iZXIsIGI6IEZsb3dHcmFwaE51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBDb21wYXJpc29uT3BlcmF0b3JzKGEsIGIsIChhLCBiKSA9PiBhID4gYik7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhbiwgRmxvd0dyYXBoR3JlYXRlclRoYW5CbG9jayk7XHJcblxyXG4vKipcclxuICogR3JlYXRlciB0aGFuIG9yIGVxdWFsIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEdyZWF0ZXJUaGFuT3JFcXVhbEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTnVtYmVyLCBGbG93R3JhcGhOdW1iZXIsIGJvb2xlYW4+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIFJpY2hUeXBlQm9vbGVhbiwgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljR3JlYXRlclRoYW5PckVxdWFsKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLkdyZWF0ZXJUaGFuT3JFcXVhbCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0dyZWF0ZXJUaGFuT3JFcXVhbChhOiBGbG93R3JhcGhOdW1iZXIsIGI6IEZsb3dHcmFwaE51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBDb21wYXJpc29uT3BlcmF0b3JzKGEsIGIsIChhLCBiKSA9PiBhID49IGIpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhbk9yRXF1YWwsIEZsb3dHcmFwaEdyZWF0ZXJUaGFuT3JFcXVhbEJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBJcyBOYU4gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoSXNOYW5CbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTnVtYmVyLCBib29sZWFuPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQm9vbGVhbiwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljSXNOYW4oYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuSXNOYU4sIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNJc05hbihhOiBGbG93R3JhcGhOdW1iZXIpIHtcclxuICAgICAgICBpZiAoaXNOdW1lcmljKGEsIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc05hTihnZXROdW1lcmljVmFsdWUoYSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGdldCBOYU4gb2YgJHthfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuSXNOYU4sIEZsb3dHcmFwaElzTmFuQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIElzIEluZiBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhJc0luZmluaXR5QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE51bWJlciwgYm9vbGVhbj4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUJvb2xlYW4sIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0lzSW5mKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLklzSW5maW5pdHksIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNJc0luZihhOiBGbG93R3JhcGhOdW1iZXIpIHtcclxuICAgICAgICBpZiAoaXNOdW1lcmljKGEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhaXNGaW5pdGUoZ2V0TnVtZXJpY1ZhbHVlKGEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBnZXQgaXNJbmYgb2YgJHthfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLklzSW5maW5pdHksIEZsb3dHcmFwaElzSW5maW5pdHlCbG9jayk7XHJcblxyXG4vKipcclxuICogQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnMgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoRGVnVG9SYWRCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGZsb3cgZ3JhcGggbWF0aCBibG9jay5cclxuICAgICAqIEBwYXJhbSBjb25maWcgLSBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgZmxvdyBncmFwaCBibG9jay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljRGVnVG9SYWQoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuRGVnVG9SYWQsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVnVG9SYWQoYTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChhICogTWF0aC5QSSkgLyAxODA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNEZWdUb1JhZChhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgdGhpcy5fZGVnVG9SYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRGVnVG9SYWQsIEZsb3dHcmFwaERlZ1RvUmFkQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFJhZFRvRGVnQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljUmFkVG9EZWcoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuUmFkVG9EZWcsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmFkVG9EZWcoYTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChhICogMTgwKSAvIE1hdGguUEk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNSYWRUb0RlZyhhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgdGhpcy5fcmFkVG9EZWcpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5SYWRUb0RlZywgRmxvd0dyYXBoUmFkVG9EZWdCbG9jayk7XHJcblxyXG4vKipcclxuICogU2luIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFNpbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZU51bWJlciwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY1NpbihhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaW4sIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNTaW4oYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGguc2luKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvcyBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb3NCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVOdW1iZXIsIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNDb3MoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29zLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQ29zKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLmNvcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUYW4gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoVGFuQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCBSaWNoVHlwZU51bWJlciwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljVGFuKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLlRhbiwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY1RhbihhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC50YW4pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQXJjc2luIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEFzaW5CbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVOdW1iZXIsIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNBc2luKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLkFzaW4sIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNBc2luKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLmFzaW4pO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Bc2luLCBGbG93R3JhcGhBc2luQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEFyY2NvcyBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhBY29zQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlTnVtYmVyLCBSaWNoVHlwZU51bWJlciwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljQWNvcyhhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5BY29zLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQWNvcyhhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC5hY29zKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQWNvcywgRmxvd0dyYXBoQWNvc0Jsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBBcmN0YW4gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQXRhbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZU51bWJlciwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0F0YW4oYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbiwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0F0YW4oYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGguYXRhbik7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkF0YW4sIEZsb3dHcmFwaEF0YW5CbG9jayk7XHJcblxyXG4vKipcclxuICogQXJjdGFuMiBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhBdGFuMkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIChhLCBiKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0F0YW4yKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLkF0YW4yLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQXRhbjIoYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZUJpbmFyeU9wZXJhdGlvbihhLCBiLCBNYXRoLmF0YW4yKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbjIsIEZsb3dHcmFwaEF0YW4yQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyYm9saWMgc2luIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFNpbmhCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNTaW5oKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLlNpbmgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNTaW5oKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLnNpbmgpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5TaW5oLCBGbG93R3JhcGhTaW5oQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyYm9saWMgY29zIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvc2hCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNDb3NoKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLkNvc2gsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNDb3NoKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLmNvc2gpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db3NoLCBGbG93R3JhcGhDb3NoQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyYm9saWMgdGFuIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFRhbmhCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNUYW5oKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLlRhbmgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNUYW5oKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLnRhbmgpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5UYW5oLCBGbG93R3JhcGhUYW5oQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEh5cGVyYm9saWMgYXJjc2luIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEFzaW5oQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZU51bWJlciwgKGEpID0+IHRoaXMuX3BvbHltb3JwaGljQXNpbmgoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXNpbmgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNBc2luaChhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC5hc2luaCk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkFzaW5oLCBGbG93R3JhcGhBc2luaEJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBIeXBlcmJvbGljIGFyY2NvcyBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhBY29zaEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0Fjb3NoKGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLkFjb3NoLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQWNvc2goYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGguYWNvc2gpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5BY29zaCwgRmxvd0dyYXBoQWNvc2hCbG9jayk7XHJcblxyXG4vKipcclxuICogSHlwZXJib2xpYyBhcmN0YW4gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQXRhbmhCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNBdGFuaChhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5BdGFuaCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0F0YW5oKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLmF0YW5oKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbmgsIEZsb3dHcmFwaEF0YW5oQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEV4cG9uZW50aWFsIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEV4cEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0V4cChhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHBvbmVudGlhbCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0V4cChhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBDb21wb25lbnRXaXNlVW5hcnlPcGVyYXRpb24oYSwgTWF0aC5leHApO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHBvbmVudGlhbCwgRmxvd0dyYXBoRXhwQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIExvZ2FyaXRobSBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhMb2dCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNMb2coYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuTG9nLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljTG9nKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLmxvZyk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkxvZywgRmxvd0dyYXBoTG9nQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgMiBsb2dhcml0aG0gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTG9nMkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0xvZzIoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuTG9nMiwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0xvZzIoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGgubG9nMik7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkxvZzIsIEZsb3dHcmFwaExvZzJCbG9jayk7XHJcblxyXG4vKipcclxuICogQmFzZSAxMCBsb2dhcml0aG0gYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTG9nMTBCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNMb2cxMChhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2cxMCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0xvZzEwKGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLmxvZzEwKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuTG9nMTAsIEZsb3dHcmFwaExvZzEwQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIFNxdWFyZSByb290IGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFNxdWFyZVJvb3RCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNTcXJ0KGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLlNxdWFyZVJvb3QsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNTcXJ0KGE6IEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudFdpc2VVbmFyeU9wZXJhdGlvbihhLCBNYXRoLnNxcnQpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5TcXVhcmVSb290LCBGbG93R3JhcGhTcXVhcmVSb290QmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEN1YmUgcm9vdCBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDdWJlUm9vdEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIsIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY0N1YmVSb290KGEpLCBGbG93R3JhcGhCbG9ja05hbWVzLkN1YmVSb290LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljQ3ViZVJvb3QoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZVVuYXJ5T3BlcmF0aW9uKGEsIE1hdGguY2JydCk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkN1YmVSb290LCBGbG93R3JhcGhDdWJlUm9vdEJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBQb3dlciBibG9jay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhQb3dlckJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlLCBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZT4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBSaWNoVHlwZU51bWJlciwgUmljaFR5cGVOdW1iZXIsIChhLCBiKSA9PiB0aGlzLl9wb2x5bW9ycGhpY1BvdyhhLCBiKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Qb3dlciwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY1BvdyhhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgYjogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUpIHtcclxuICAgICAgICByZXR1cm4gQ29tcG9uZW50V2lzZUJpbmFyeU9wZXJhdGlvbihhLCBiLCBNYXRoLnBvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Qb3dlciwgRmxvd0dyYXBoUG93ZXJCbG9jayk7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgYml0d2lzZSBvcGVyYXRvcnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEJpdHdpc2VCbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIHZhbHVlcyB0aGF0IHdpbGwgYmUgb3BlcmF0ZWQgb25cclxuICAgICAqIERlZmF1bHRzIHRvIEZsb3dHcmFwaEludGVnZXIsIGJ1dCBjYW4gYmUgYSBudW1iZXIgb3IgYm9vbGVhbiBhcyB3ZWxsLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZVR5cGU6IEZsb3dHcmFwaFR5cGVzO1xyXG59XHJcblxyXG50eXBlIEZsb3dHcmFwaEJpdHdpc2VUeXBlcyA9IEZsb3dHcmFwaEludGVnZXIgfCBGbG93R3JhcGhOdW1iZXIgfCBib29sZWFuO1xyXG4vKipcclxuICogQml0d2lzZSBOT1Qgb3BlcmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQml0d2lzZU5vdEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhCaXR3aXNlVHlwZXMsIEZsb3dHcmFwaEJpdHdpc2VUeXBlcz4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJpdHdpc2VCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy52YWx1ZVR5cGUgfHwgRmxvd0dyYXBoVHlwZXMuSW50ZWdlciksXHJcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZz8udmFsdWVUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLkludGVnZXIpLFxyXG4gICAgICAgICAgICAoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhYTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gfmE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaEludGVnZXIofmEudmFsdWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VOb3QsXHJcbiAgICAgICAgICAgIGNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VOb3QsIEZsb3dHcmFwaEJpdHdpc2VOb3RCbG9jayk7XHJcblxyXG4vKipcclxuICogQml0d2lzZSBBTkQgb3BlcmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQml0d2lzZUFuZEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoQml0d2lzZVR5cGVzLCBGbG93R3JhcGhCaXR3aXNlVHlwZXMsIEZsb3dHcmFwaEJpdHdpc2VUeXBlcz4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJpdHdpc2VCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy52YWx1ZVR5cGUgfHwgRmxvd0dyYXBoVHlwZXMuSW50ZWdlciksXHJcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZz8udmFsdWVUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLkludGVnZXIpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnZhbHVlVHlwZSB8fCBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyKSxcclxuICAgICAgICAgICAgKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGIgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgYjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAmIGI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhJbnRlZ2VyKGEudmFsdWUgJiBiLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcGVyZm9ybSBiaXR3aXNlIEFORCBvbiAke2F9IGFuZCAke2J9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUFuZCxcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VBbmQsIEZsb3dHcmFwaEJpdHdpc2VBbmRCbG9jayk7XHJcblxyXG4vKipcclxuICogQml0d2lzZSBPUiBvcGVyYXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhCaXR3aXNlT3JCbG9jayBleHRlbmRzIEZsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaEJpdHdpc2VUeXBlcywgRmxvd0dyYXBoQml0d2lzZVR5cGVzLCBGbG93R3JhcGhCaXR3aXNlVHlwZXM+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCaXR3aXNlQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZz8udmFsdWVUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLkludGVnZXIpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnZhbHVlVHlwZSB8fCBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyKSxcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy52YWx1ZVR5cGUgfHwgRmxvd0dyYXBoVHlwZXMuSW50ZWdlciksXHJcbiAgICAgICAgICAgIChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiBiID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIHx8IGI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBiID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgfCBiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmxvd0dyYXBoSW50ZWdlcihhLnZhbHVlIHwgYi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHBlcmZvcm0gYml0d2lzZSBPUiBvbiAke2F9IGFuZCAke2J9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZU9yLFxyXG4gICAgICAgICAgICBjb25maWdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlT3IsIEZsb3dHcmFwaEJpdHdpc2VPckJsb2NrKTtcclxuXHJcbi8qKlxyXG4gKiBCaXR3aXNlIFhPUiBvcGVyYXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhCaXR3aXNlWG9yQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhCaXR3aXNlVHlwZXMsIEZsb3dHcmFwaEJpdHdpc2VUeXBlcywgRmxvd0dyYXBoQml0d2lzZVR5cGVzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZz8udmFsdWVUeXBlIHx8IEZsb3dHcmFwaFR5cGVzLkludGVnZXIpLFxyXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZShjb25maWc/LnZhbHVlVHlwZSB8fCBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyKSxcclxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoY29uZmlnPy52YWx1ZVR5cGUgfHwgRmxvd0dyYXBoVHlwZXMuSW50ZWdlciksXHJcbiAgICAgICAgICAgIChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiBiID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIF4gYjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaEludGVnZXIoYS52YWx1ZSBeIGIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBwZXJmb3JtIGJpdHdpc2UgWE9SIG9uICR7YX0gYW5kICR7Yn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlWG9yLFxyXG4gICAgICAgICAgICBjb25maWdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlWG9yLCBGbG93R3JhcGhCaXR3aXNlWG9yQmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIEJpdHdpc2UgbGVmdCBzaGlmdCBvcGVyYXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhCaXR3aXNlTGVmdFNoaWZ0QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhJbnRlZ2VyLCBGbG93R3JhcGhJbnRlZ2VyLCBGbG93R3JhcGhJbnRlZ2VyPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlcixcclxuICAgICAgICAgICAgUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyLFxyXG4gICAgICAgICAgICBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsXHJcbiAgICAgICAgICAgIChhLCBiKSA9PiBuZXcgRmxvd0dyYXBoSW50ZWdlcihhLnZhbHVlIDw8IGIudmFsdWUpLFxyXG4gICAgICAgICAgICBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VMZWZ0U2hpZnQsXHJcbiAgICAgICAgICAgIGNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VMZWZ0U2hpZnQsIEZsb3dHcmFwaEJpdHdpc2VMZWZ0U2hpZnRCbG9jayk7XHJcblxyXG4vKipcclxuICogQml0d2lzZSByaWdodCBzaGlmdCBvcGVyYXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhCaXR3aXNlUmlnaHRTaGlmdEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoSW50ZWdlciwgRmxvd0dyYXBoSW50ZWdlciwgRmxvd0dyYXBoSW50ZWdlcj4ge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsXHJcbiAgICAgICAgICAgIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlcixcclxuICAgICAgICAgICAgUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyLFxyXG4gICAgICAgICAgICAoYSwgYikgPT4gbmV3IEZsb3dHcmFwaEludGVnZXIoYS52YWx1ZSA+PiBiLnZhbHVlKSxcclxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlUmlnaHRTaGlmdCxcclxuICAgICAgICAgICAgY29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZVJpZ2h0U2hpZnQsIEZsb3dHcmFwaEJpdHdpc2VSaWdodFNoaWZ0QmxvY2spO1xyXG5cclxuLyoqXHJcbiAqIENvdW50IGxlYWRpbmcgemVyb3Mgb3BlcmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTGVhZGluZ1plcm9zQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaEludGVnZXIsIEZsb3dHcmFwaEludGVnZXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgKGEpID0+IG5ldyBGbG93R3JhcGhJbnRlZ2VyKE1hdGguY2x6MzIoYS52YWx1ZSkpLCBGbG93R3JhcGhCbG9ja05hbWVzLkxlYWRpbmdaZXJvcywgY29uZmlnKTtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVhZGluZ1plcm9zLCBGbG93R3JhcGhMZWFkaW5nWmVyb3NCbG9jayk7XHJcblxyXG4vKipcclxuICogQ291bnQgdHJhaWxpbmcgemVyb3Mgb3BlcmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoVHJhaWxpbmdaZXJvc0Jsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhJbnRlZ2VyLCBGbG93R3JhcGhJbnRlZ2VyPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlcixcclxuICAgICAgICAgICAgUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyLFxyXG4gICAgICAgICAgICAoYSkgPT4gbmV3IEZsb3dHcmFwaEludGVnZXIoYS52YWx1ZSA/IDMxIC0gTWF0aC5jbHozMihhLnZhbHVlICYgLWEudmFsdWUpIDogMzIpLFxyXG4gICAgICAgICAgICBGbG93R3JhcGhCbG9ja05hbWVzLlRyYWlsaW5nWmVyb3MsXHJcbiAgICAgICAgICAgIGNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlRyYWlsaW5nWmVyb3MsIEZsb3dHcmFwaFRyYWlsaW5nWmVyb3NCbG9jayk7XHJcblxyXG4vKipcclxuICogR2l2ZW4gYSBudW1iZXIgKHdoaWNoIGlzIGNvbnZlcnRlZCB0byBhIDMyLWJpdCBpbnRlZ2VyKSwgcmV0dXJuIHRoZVxyXG4gKiBudW1iZXIgb2YgYml0cyBzZXQgdG8gb25lIG9uIHRoYXQgbnVtYmVyLlxyXG4gKiBAcGFyYW0gbiB0aGUgbnVtYmVyIHRvIHJ1biB0aGUgb3Agb25cclxuICogQHJldHVybnMgdGhlIG51bWJlciBvZiBiaXRzIHNldCB0byBvbmUgb24gdGhhdCBudW1iZXJcclxuICovXHJcbmZ1bmN0aW9uIENvdW50T25lcyhuOiBudW1iZXIpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgd2hpbGUgKG4pIHtcclxuICAgICAgICAvLyBUaGlzIHplcm9lcyBvdXQgYWxsIGJpdHMgZXhjZXB0IGZvciB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgb25lLlxyXG4gICAgICAgIC8vIFNvIGlmIHRoZSBiaXQgaXMgc2V0LCBpdCB3aWxsIGJlIDEsIG90aGVyd2lzZSBpdCB3aWxsIGJlIDAuXHJcbiAgICAgICAgcmVzdWx0ICs9IG4gJiAxO1xyXG4gICAgICAgIC8vIFRoaXMgc2hpZnRzIG4ncyBiaXRzIHRvIHRoZSByaWdodCBieSBvbmVcclxuICAgICAgICBuID4+PSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IG9uZSBiaXRzIG9wZXJhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaE9uZUJpdHNDb3VudGVyQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaEludGVnZXIsIEZsb3dHcmFwaEludGVnZXI+IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciwgKGEpID0+IG5ldyBGbG93R3JhcGhJbnRlZ2VyKENvdW50T25lcyhhLnZhbHVlKSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuT25lQml0c0NvdW50ZXIsIGNvbmZpZyk7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLk9uZUJpdHNDb3VudGVyLCBGbG93R3JhcGhPbmVCaXRzQ291bnRlckJsb2NrKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9ja1wiO1xyXG4vKipcclxuICogVGhlIGJhc2UgYmxvY2sgZm9yIGFsbCBiaW5hcnkgb3BlcmF0aW9uIGJsb2Nrcy4gUmVjZWl2ZXMgYW4gaW5wdXQgb2YgdHlwZVxyXG4gKiBMZWZ0VCwgb25lIG9mIHR5cGUgUmlnaHRULCBhbmQgb3V0cHV0cyBhIHZhbHVlIG9mIHR5cGUgUmVzdWx0VC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxMZWZ0VCwgUmlnaHRULCBSZXN1bHRUPiBleHRlbmRzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPFJlc3VsdFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogRmlyc3QgaW5wdXQgb2YgdGhpcyBibG9ja1xyXG4gICAgICovXHJcbiAgICBhOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxMZWZ0VD47XHJcbiAgICAvKipcclxuICAgICAqIFNlY29uZCBpbnB1dCBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIGI6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFJpZ2h0VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbGVmdFJpY2hUeXBlOiBSaWNoVHlwZTxMZWZ0VD4sXHJcbiAgICAgICAgcmlnaHRSaWNoVHlwZTogUmljaFR5cGU8UmlnaHRUPixcclxuICAgICAgICByZXN1bHRSaWNoVHlwZTogUmljaFR5cGU8UmVzdWx0VD4sXHJcbiAgICAgICAgcHJpdmF0ZSBfb3BlcmF0aW9uOiAobGVmdDogTGVmdFQsIHJpZ2h0OiBSaWdodFQpID0+IFJlc3VsdFQsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocmVzdWx0UmljaFR5cGUsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5hID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImFcIiwgbGVmdFJpY2hUeXBlKTtcclxuICAgICAgICB0aGlzLmIgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiYlwiLCByaWdodFJpY2hUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoZSBvcGVyYXRpb24gcGVyZm9ybWVkIGJ5IHRoaXMgYmxvY2tcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBncmFwaCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBvcGVyYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9kb09wZXJhdGlvbihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogUmVzdWx0VCB7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYS5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICBjb25zdCBiID0gdGhpcy5iLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcGVyYXRpb24oYSwgYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBSaWNoVHlwZSB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHsgUmljaFR5cGVCb29sZWFuIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5cclxuY29uc3QgQ2FjaGVOYW1lID0gXCJjYWNoZWRPcGVyYXRpb25WYWx1ZVwiO1xyXG5jb25zdCBDYWNoZUV4ZWNJZE5hbWUgPSBcImNhY2hlZEV4ZWN1dGlvbklkXCI7XHJcblxyXG4vKipcclxuICogQSBibG9jayB0aGF0IHdpbGwgY2FjaGUgdGhlIHJlc3VsdCBvZiBhbiBvcGVyYXRpb24gYW5kIGRlbGl2ZXIgaXQgYXMgYW4gb3V0cHV0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPE91dHB1dFQ+IGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBvcGVyYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxPdXRwdXRUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBXaGV0aGVyIHRoZSB2YWx1ZSBpcyB2YWxpZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzVmFsaWQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGJvb2xlYW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG91dHB1dFJpY2hUeXBlOiBSaWNoVHlwZTxPdXRwdXRUPiwgY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInZhbHVlXCIsIG91dHB1dFJpY2hUeXBlKTtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImlzVmFsaWRcIiwgUmljaFR5cGVCb29sZWFuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogT3BlcmF0aW9uIHRvIHJlYWxpemVcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBncmFwaCBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBfZG9PcGVyYXRpb24oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IE91dHB1dFQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBjYWNoZWRFeGVjdXRpb25JZCA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIENhY2hlRXhlY0lkTmFtZSwgLTEpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFZhbHVlID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGU8TnVsbGFibGU8T3V0cHV0VD4+KHRoaXMsIENhY2hlTmFtZSwgbnVsbCk7XHJcbiAgICAgICAgaWYgKGNhY2hlZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FjaGVkVmFsdWUgIT09IG51bGwgJiYgY2FjaGVkRXhlY3V0aW9uSWQgPT09IGNvbnRleHQuZXhlY3V0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKHRydWUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnNldFZhbHVlKGNhY2hlZFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gdGhpcy5fZG9PcGVyYXRpb24oY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsY3VsYXRlZFZhbHVlID09PSB1bmRlZmluZWQgfHwgY2FsY3VsYXRlZFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZU5hbWUsIGNhbGN1bGF0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIGNvbnRleHQuZXhlY3V0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjYWxjdWxhdGVkVmFsdWUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKHRydWUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQuc2V0VmFsdWUoZmFsc2UsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XHJcbi8qKlxyXG4gKiBCbG9jayB0aGF0IG91dHB1dHMgYSB2YWx1ZSBvZiB0eXBlIFJlc3VsdFQsIHJlc3VsdGluZyBvZiBhbiBvcGVyYXRpb24gd2l0aCBubyBpbnB1dHMuXHJcbiAqIFRoaXMgYmxvY2sgaXMgYmVpbmcgZXh0ZW5kZWQgYnkgc29tZSBtYXRoIG9wZXJhdGlvbnMgYW5kIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseS5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29uc3RhbnRPcGVyYXRpb25CbG9jazxSZXN1bHRUPiBleHRlbmRzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPFJlc3VsdFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHJpY2hUeXBlOiBSaWNoVHlwZTxSZXN1bHRUPixcclxuICAgICAgICBwcml2YXRlIF9vcGVyYXRpb246IChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSA9PiBSZXN1bHRULFxyXG4gICAgICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHJpY2hUeXBlLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIG9wZXJhdGlvbiBwZXJmb3JtZWQgYnkgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGdyYXBoIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBSZXN1bHRUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2xhc3MgbmFtZSBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogVGhlIGJhc2UgYmxvY2sgZm9yIGFsbCB0ZXJuYXJ5IG9wZXJhdGlvbiBibG9ja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoVGVybmFyeU9wZXJhdGlvbkJsb2NrPFQxLCBUMiwgVDMsIFJlc3VsdFQ+IGV4dGVuZHMgRmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2s8UmVzdWx0VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJzdCBpbnB1dCBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIGE6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQxPjtcclxuICAgIC8qKlxyXG4gICAgICogU2Vjb25kIGlucHV0IG9mIHRoaXMgYmxvY2tcclxuICAgICAqL1xyXG4gICAgYjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VDI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlyZCBpbnB1dCBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIGM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQzPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0MVR5cGU6IFJpY2hUeXBlPFQxPixcclxuICAgICAgICB0MlR5cGU6IFJpY2hUeXBlPFQyPixcclxuICAgICAgICB0M1R5cGU6IFJpY2hUeXBlPFQzPixcclxuICAgICAgICByZXN1bHRSaWNoVHlwZTogUmljaFR5cGU8UmVzdWx0VD4sXHJcbiAgICAgICAgcHJpdmF0ZSBfb3BlcmF0aW9uOiAoYTogVDEsIGI6IFQyLCBjOiBUMykgPT4gUmVzdWx0VCxcclxuICAgICAgICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyxcclxuICAgICAgICBjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihyZXN1bHRSaWNoVHlwZSwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLmEgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiYVwiLCB0MVR5cGUpO1xyXG4gICAgICAgIHRoaXMuYiA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJiXCIsIHQyVHlwZSk7XHJcbiAgICAgICAgdGhpcy5jID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImNcIiwgdDNUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoZSBvcGVyYXRpb24gcGVyZm9ybWVkIGJ5IHRoaXMgYmxvY2tcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBncmFwaCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBvcGVyYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9kb09wZXJhdGlvbihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogUmVzdWx0VCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbih0aGlzLmEuZ2V0VmFsdWUoY29udGV4dCksIHRoaXMuYi5nZXRWYWx1ZShjb250ZXh0KSwgdGhpcy5jLmdldFZhbHVlKGNvbnRleHQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNsYXNzIG5hbWUgb2YgdGhpcyBibG9ja1xyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGFzc05hbWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBSaWNoVHlwZSB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9ja1wiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBUaGUgYmFzZSBibG9jayBmb3IgYWxsIHVuYXJ5IG9wZXJhdGlvbiBibG9ja3MuIFJlY2VpdmVzIGFuIGlucHV0IG9mIHR5cGUgSW5wdXRULCBhbmQgb3V0cHV0cyBhIHZhbHVlIG9mIHR5cGUgUmVzdWx0VC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPElucHV0VCwgUmVzdWx0VD4gZXh0ZW5kcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxSZXN1bHRUPiB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBpbnB1dCBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIGE6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPElucHV0VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaW5wdXRSaWNoVHlwZTogUmljaFR5cGU8SW5wdXRUPixcclxuICAgICAgICByZXN1bHRSaWNoVHlwZTogUmljaFR5cGU8UmVzdWx0VD4sXHJcbiAgICAgICAgcHJpdmF0ZSBfb3BlcmF0aW9uOiAoaW5wdXQ6IElucHV0VCkgPT4gUmVzdWx0VCxcclxuICAgICAgICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZyxcclxuICAgICAgICBjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihyZXN1bHRSaWNoVHlwZSwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLmEgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiYVwiLCBpbnB1dFJpY2hUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoZSBvcGVyYXRpb24gcGVyZm9ybWVkIGJ5IHRoaXMgYmxvY2tcclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBncmFwaCBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBvcGVyYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9kb09wZXJhdGlvbihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogUmVzdWx0VCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbih0aGlzLmEuZ2V0VmFsdWUoY29udGV4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2xhc3MgbmFtZSBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=