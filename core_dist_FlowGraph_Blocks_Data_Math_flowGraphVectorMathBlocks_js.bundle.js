"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphAngleBetweenBlock: () => (/* binding */ FlowGraphAngleBetweenBlock),
/* harmony export */   FlowGraphAxisAngleFromQuaternionBlock: () => (/* binding */ FlowGraphAxisAngleFromQuaternionBlock),
/* harmony export */   FlowGraphConjugateBlock: () => (/* binding */ FlowGraphConjugateBlock),
/* harmony export */   FlowGraphCrossBlock: () => (/* binding */ FlowGraphCrossBlock),
/* harmony export */   FlowGraphDotBlock: () => (/* binding */ FlowGraphDotBlock),
/* harmony export */   FlowGraphLengthBlock: () => (/* binding */ FlowGraphLengthBlock),
/* harmony export */   FlowGraphNormalizeBlock: () => (/* binding */ FlowGraphNormalizeBlock),
/* harmony export */   FlowGraphQuaternionFromAxisAngleBlock: () => (/* binding */ FlowGraphQuaternionFromAxisAngleBlock),
/* harmony export */   FlowGraphQuaternionFromDirectionsBlock: () => (/* binding */ FlowGraphQuaternionFromDirectionsBlock),
/* harmony export */   FlowGraphRotate2DBlock: () => (/* binding */ FlowGraphRotate2DBlock),
/* harmony export */   FlowGraphRotate3DBlock: () => (/* binding */ FlowGraphRotate3DBlock),
/* harmony export */   FlowGraphTransformBlock: () => (/* binding */ FlowGraphTransformBlock),
/* harmony export */   FlowGraphTransformCoordinatesBlock: () => (/* binding */ FlowGraphTransformCoordinatesBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flowGraphBinaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js");
/* harmony import */ var _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flowGraphUnaryOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* harmony import */ var core_FlowGraph_flowGraphMath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/FlowGraph/flowGraphMath */ "../core/dist/FlowGraph/flowGraphMath.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









const AxisCacheName = "cachedOperationAxis";
const AngleCacheName = "cachedOperationAngle";
const CacheExecIdName = "cachedExecutionId";
/**
 * Vector length block.
 */
class FlowGraphLengthBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a) => this._polymorphicLength(a), "FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */, config);
    }
    _polymorphicLength(a) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_6__._GetClassNameOf)(a);
        switch (aClassName) {
            case "Vector2" /* FlowGraphTypes.Vector2 */:
            case "Vector3" /* FlowGraphTypes.Vector3 */:
            case "Vector4" /* FlowGraphTypes.Vector4 */:
            case "Quaternion" /* FlowGraphTypes.Quaternion */:
                return a.length();
            default:
                throw new Error(`Cannot compute length of value ${a}`);
        }
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */, FlowGraphLengthBlock);
/**
 * Vector normalize block.
 */
class FlowGraphNormalizeBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, (a) => this._polymorphicNormalize(a), "FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */, config);
    }
    _polymorphicNormalize(a) {
        const aClassName = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_6__._GetClassNameOf)(a);
        let normalized;
        switch (aClassName) {
            case "Vector2" /* FlowGraphTypes.Vector2 */:
            case "Vector3" /* FlowGraphTypes.Vector3 */:
            case "Vector4" /* FlowGraphTypes.Vector4 */:
            case "Quaternion" /* FlowGraphTypes.Quaternion */:
                normalized = a.normalizeToNew();
                if (this.config?.nanOnZeroLength) {
                    const length = a.length();
                    if (length === 0) {
                        normalized.setAll(NaN);
                    }
                }
                return normalized;
            default:
                throw new Error(`Cannot normalize value ${a}`);
        }
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */, FlowGraphNormalizeBlock);
/**
 * Dot product block.
 */
class FlowGraphDotBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a, b) => this._polymorphicDot(a, b), "FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */, config);
    }
    _polymorphicDot(a, b) {
        const className = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_6__._GetClassNameOf)(a);
        switch (className) {
            case "Vector2" /* FlowGraphTypes.Vector2 */:
            case "Vector3" /* FlowGraphTypes.Vector3 */:
            case "Vector4" /* FlowGraphTypes.Vector4 */:
            case "Quaternion" /* FlowGraphTypes.Quaternion */:
                // casting is needed because dot requires both to be the same type
                return a.dot(b);
            default:
                throw new Error(`Cannot get dot product of ${a} and ${b}`);
        }
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */, FlowGraphDotBlock);
/**
 * Cross product block.
 */
class FlowGraphCrossBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, (a, b) => core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Vector3.Cross(a, b), "FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */, FlowGraphCrossBlock);
/**
 * 2D rotation block.
 */
class FlowGraphRotate2DBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector2, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector2, (a, b) => a.rotate(b), "FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */, FlowGraphRotate2DBlock);
/**
 * 3D rotation block.
 */
class FlowGraphRotate3DBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, (a, b) => a.applyRotationQuaternion(b), "FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */, FlowGraphRotate3DBlock);
function TransformVector(a, b) {
    const className = (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_6__._GetClassNameOf)(a);
    switch (className) {
        case "Vector2" /* FlowGraphTypes.Vector2 */:
            return b.transformVector(a);
        case "Vector3" /* FlowGraphTypes.Vector3 */:
            return b.transformVector(a);
        case "Vector4" /* FlowGraphTypes.Vector4 */:
            a = a;
            // transform the vector 4 with the matrix here. Vector4.TransformCoordinates transforms a 3D coordinate, not Vector4
            return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Vector4(a.x * b.m[0] + a.y * b.m[1] + a.z * b.m[2] + a.w * b.m[3], a.x * b.m[4] + a.y * b.m[5] + a.z * b.m[6] + a.w * b.m[7], a.x * b.m[8] + a.y * b.m[9] + a.z * b.m[10] + a.w * b.m[11], a.x * b.m[12] + a.y * b.m[13] + a.z * b.m[14] + a.w * b.m[15]);
        default:
            throw new Error(`Cannot transform value ${a}`);
    }
}
/**
 * Transform a vector3 by a matrix.
 */
class FlowGraphTransformBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        const vectorType = config?.vectorType || "Vector3" /* FlowGraphTypes.Vector3 */;
        const matrixType = vectorType === "Vector2" /* FlowGraphTypes.Vector2 */ ? "Matrix2D" /* FlowGraphTypes.Matrix2D */ : vectorType === "Vector3" /* FlowGraphTypes.Vector3 */ ? "Matrix3D" /* FlowGraphTypes.Matrix3D */ : "Matrix" /* FlowGraphTypes.Matrix */;
        super((0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(vectorType), (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(matrixType), (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getRichTypeByFlowGraphType)(vectorType), TransformVector, "FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */, FlowGraphTransformBlock);
/**
 * Transform a vector3 by a matrix.
 */
class FlowGraphTransformCoordinatesBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeMatrix, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, (a, b) => core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Vector3.TransformCoordinates(a, b), "FlowGraphTransformCoordinatesBlock" /* FlowGraphBlockNames.TransformCoordinates */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphTransformCoordinatesBlock" /* FlowGraphBlockNames.TransformCoordinates */, FlowGraphTransformCoordinatesBlock);
/**
 * Conjugate the quaternion.
 */
class FlowGraphConjugateBlock extends _flowGraphUnaryOperationBlock__WEBPACK_IMPORTED_MODULE_4__.FlowGraphUnaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, (a) => a.conjugate(), "FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */, FlowGraphConjugateBlock);
/**
 * Get the angle between two quaternions.
 */
class FlowGraphAngleBetweenBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, (a, b) => (0,core_FlowGraph_flowGraphMath__WEBPACK_IMPORTED_MODULE_7__.GetAngleBetweenQuaternions)(a, b), "FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */, FlowGraphAngleBetweenBlock);
/**
 * Get the quaternion from an axis and an angle.
 */
class FlowGraphQuaternionFromAxisAngleBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, (a, b) => core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_5__.Quaternion.RotationAxis(a, b), "FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */, config);
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */, FlowGraphQuaternionFromAxisAngleBlock);
/**
 * Get the axis and angle from a quaternion.
 */
class FlowGraphAxisAngleFromQuaternionBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(config) {
        super(config);
        this.a = this.registerDataInput("a", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion);
        this.axis = this.registerDataOutput("axis", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3);
        this.angle = this.registerDataOutput("angle", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.isValid = this.registerDataOutput("isValid", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean);
    }
    /** @override */
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, CacheExecIdName, -1);
        const cachedAxis = context._getExecutionVariable(this, AxisCacheName, null);
        const cachedAngle = context._getExecutionVariable(this, AngleCacheName, null);
        if (cachedAxis !== undefined && cachedAxis !== null && cachedAngle !== undefined && cachedAngle !== null && cachedExecutionId === context.executionId) {
            this.axis.setValue(cachedAxis, context);
            this.angle.setValue(cachedAngle, context);
        }
        else {
            try {
                const { axis, angle } = this.a.getValue(context).toAxisAngle();
                context._setExecutionVariable(this, AxisCacheName, axis);
                context._setExecutionVariable(this, AngleCacheName, angle);
                context._setExecutionVariable(this, CacheExecIdName, context.executionId);
                this.axis.setValue(axis, context);
                this.angle.setValue(angle, context);
                this.isValid.setValue(true, context);
            }
            catch (e) {
                this.isValid.setValue(false, context);
            }
        }
    }
    /** @override */
    getClassName() {
        return "FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */, FlowGraphAxisAngleFromQuaternionBlock);
/**
 * Get the quaternion from two direction vectors.
 */
class FlowGraphQuaternionFromDirectionsBlock extends _flowGraphBinaryOperationBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphBinaryOperationBlock {
    constructor(config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeVector3, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeQuaternion, (a, b) => (0,core_FlowGraph_flowGraphMath__WEBPACK_IMPORTED_MODULE_7__.GetQuaternionFromDirections)(a, b), "FlowGraphQuaternionFromDirectionsBlock" /* FlowGraphBlockNames.QuaternionFromDirections */, config);
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

/***/ }),

/***/ "../core/dist/FlowGraph/flowGraphMath.js":
/*!***********************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphMath.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAngleBetweenQuaternions: () => (/* binding */ GetAngleBetweenQuaternions),
/* harmony export */   GetQuaternionFromDirections: () => (/* binding */ GetQuaternionFromDirections),
/* harmony export */   GetQuaternionFromDirectionsToRef: () => (/* binding */ GetQuaternionFromDirectionsToRef)
/* harmony export */ });
/* harmony import */ var _Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.scalar.functions */ "../core/dist/Maths/math.scalar.functions.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_vector_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector.functions */ "../core/dist/Maths/math.vector.functions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




// *** NOTE ***
// These functions should ideally go in math.vector.functions.ts, but they require math.vector.ts to
// be imported which is big. To avoid the larger bundle size, they are kept inside flow graph for now.
/**
 * Returns the angle in radians between two quaternions
 * @param q1 defines the first quaternion
 * @param q2 defines the second quaternion
 * @returns the angle in radians between the two quaternions
 */
function GetAngleBetweenQuaternions(q1, q2) {
    return Math.acos((0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__.Clamp)((0,_Maths_math_vector_functions__WEBPACK_IMPORTED_MODULE_2__.Vector4Dot)(q1, q2), -1, 1)) * 2;
}
/**
 * Creates a quaternion from two direction vectors
 * @param a defines the first direction vector
 * @param b defines the second direction vector
 * @returns the target quaternion
 */
function GetQuaternionFromDirections(a, b) {
    const result = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
    GetQuaternionFromDirectionsToRef(a, b, result);
    return result;
}
/**
 * Creates a quaternion from two direction vectors
 * @param a defines the first direction vector
 * @param b defines the second direction vector
 * @param result defines the target quaternion
 * @returns the target quaternion
 */
function GetQuaternionFromDirectionsToRef(a, b, result) {
    const axis = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Cross(a, b);
    const angle = Math.acos((0,_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__.Clamp)((0,_Maths_math_vector_functions__WEBPACK_IMPORTED_MODULE_2__.Vector3Dot)(a, b), -1, 1));
    _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.RotationAxisToRef(axis, angle, result);
    return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9NYXRoX2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFxQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVRBO0FBQ0E7OztBQUdBO0FBQ0E7QUFVQTtBQVFBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBRUE7OztBQUdBO0FBQ0E7QUFNQTtBQU9BO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrcy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaE1hdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2ssIHR5cGUgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHtcbiAgICBSaWNoVHlwZVZlY3RvcjMsXG4gICAgRmxvd0dyYXBoVHlwZXMsXG4gICAgUmljaFR5cGVOdW1iZXIsXG4gICAgUmljaFR5cGVBbnksXG4gICAgUmljaFR5cGVWZWN0b3IyLFxuICAgIFJpY2hUeXBlTWF0cml4LFxuICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlLFxuICAgIFJpY2hUeXBlUXVhdGVybmlvbixcbiAgICBSaWNoVHlwZUJvb2xlYW4sXG59IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuLi9mbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9ja1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuLi9mbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrXCI7XG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzLCBWZWN0b3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB0eXBlIHsgTWF0cml4LCBWZWN0b3IyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoTWF0cml4MkQsIEZsb3dHcmFwaE1hdHJpeDNEIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL0N1c3RvbVR5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaE1hdHJpeCwgRmxvd0dyYXBoVmVjdG9yIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XG5pbXBvcnQgeyBfR2V0Q2xhc3NOYW1lT2YgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdXRpbHNcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHZXRBbmdsZUJldHdlZW5RdWF0ZXJuaW9ucywgR2V0UXVhdGVybmlvbkZyb21EaXJlY3Rpb25zIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaE1hdGhcIjtcblxuY29uc3QgQXhpc0NhY2hlTmFtZSA9IFwiY2FjaGVkT3BlcmF0aW9uQXhpc1wiO1xuY29uc3QgQW5nbGVDYWNoZU5hbWUgPSBcImNhY2hlZE9wZXJhdGlvbkFuZ2xlXCI7XG5jb25zdCBDYWNoZUV4ZWNJZE5hbWUgPSBcImNhY2hlZEV4ZWN1dGlvbklkXCI7XG5cbi8qKlxuICogVmVjdG9yIGxlbmd0aCBibG9jay5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaExlbmd0aEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoVW5hcnlPcGVyYXRpb25CbG9jazxGbG93R3JhcGhWZWN0b3IsIG51bWJlcj4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyLCAoYSkgPT4gdGhpcy5fcG9seW1vcnBoaWNMZW5ndGgoYSksIEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVuZ3RoLCBjb25maWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BvbHltb3JwaGljTGVuZ3RoKGE6IEZsb3dHcmFwaFZlY3Rvcikge1xuICAgICAgICBjb25zdCBhQ2xhc3NOYW1lID0gX0dldENsYXNzTmFtZU9mKGEpO1xuICAgICAgICBzd2l0Y2ggKGFDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yMjpcbiAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yMzpcbiAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yNDpcbiAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEgYXMgVmVjdG9yMykubGVuZ3RoKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNvbXB1dGUgbGVuZ3RoIG9mIHZhbHVlICR7YX1gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5MZW5ndGgsIEZsb3dHcmFwaExlbmd0aEJsb2NrKTtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBub3JtYWxpemVkIHZlY3RvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhOb3JtYWxpemVCbG9ja0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYmxvY2sgd2lsbCByZXR1cm4gTmFOIGlmIHRoZSBpbnB1dCB2ZWN0b3IgaGFzIGEgbGVuZ3RoIG9mIDAuXG4gICAgICogVGhpcyBpcyB0aGUgZXhwZWN0ZWQgYmVoYXZpb3IgZm9yIGdsVEYgaW50ZXJhY3Rpdml0eSBncmFwaHMuXG4gICAgICovXG4gICAgbmFuT25aZXJvTGVuZ3RoPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBWZWN0b3Igbm9ybWFsaXplIGJsb2NrLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTm9ybWFsaXplQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhVbmFyeU9wZXJhdGlvbkJsb2NrPEZsb3dHcmFwaFZlY3RvciwgRmxvd0dyYXBoVmVjdG9yPiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaE5vcm1hbGl6ZUJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihSaWNoVHlwZUFueSwgUmljaFR5cGVBbnksIChhKSA9PiB0aGlzLl9wb2x5bW9ycGhpY05vcm1hbGl6ZShhKSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Ob3JtYWxpemUsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcG9seW1vcnBoaWNOb3JtYWxpemUoYTogRmxvd0dyYXBoVmVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGFDbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XG4gICAgICAgIGxldCBub3JtYWxpemVkOiBGbG93R3JhcGhWZWN0b3I7XG4gICAgICAgIHN3aXRjaCAoYUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IyOlxuICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxuICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0OlxuICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uOlxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWQgPSBhLm5vcm1hbGl6ZVRvTmV3KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnPy5uYW5Pblplcm9MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gYS5sZW5ndGgoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZC5zZXRBbGwoTmFOKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgbm9ybWFsaXplIHZhbHVlICR7YX1gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Ob3JtYWxpemUsIEZsb3dHcmFwaE5vcm1hbGl6ZUJsb2NrKTtcblxuLyoqXG4gKiBEb3QgcHJvZHVjdCBibG9jay5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaERvdEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoVmVjdG9yLCBGbG93R3JhcGhWZWN0b3IsIG51bWJlcj4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoUmljaFR5cGVBbnksIFJpY2hUeXBlQW55LCBSaWNoVHlwZU51bWJlciwgKGEsIGIpID0+IHRoaXMuX3BvbHltb3JwaGljRG90KGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLkRvdCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wb2x5bW9ycGhpY0RvdChhOiBGbG93R3JhcGhWZWN0b3IsIGI6IEZsb3dHcmFwaFZlY3Rvcikge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XG4gICAgICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjI6XG4gICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjM6XG4gICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQ6XG4gICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb246XG4gICAgICAgICAgICAgICAgLy8gY2FzdGluZyBpcyBuZWVkZWQgYmVjYXVzZSBkb3QgcmVxdWlyZXMgYm90aCB0byBiZSB0aGUgc2FtZSB0eXBlXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhIGFzIFZlY3RvcjMpLmRvdChiIGFzIFZlY3RvcjMpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBnZXQgZG90IHByb2R1Y3Qgb2YgJHthfSBhbmQgJHtifWApO1xuICAgICAgICB9XG4gICAgfVxufVxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkRvdCwgRmxvd0dyYXBoRG90QmxvY2spO1xuXG4vKipcbiAqIENyb3NzIHByb2R1Y3QgYmxvY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDcm9zc0Jsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8VmVjdG9yMywgVmVjdG9yMywgVmVjdG9yMz4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoUmljaFR5cGVWZWN0b3IzLCBSaWNoVHlwZVZlY3RvcjMsIFJpY2hUeXBlVmVjdG9yMywgKGEsIGIpID0+IFZlY3RvcjMuQ3Jvc3MoYSwgYiksIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ3Jvc3MsIGNvbmZpZyk7XG4gICAgfVxufVxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkNyb3NzLCBGbG93R3JhcGhDcm9zc0Jsb2NrKTtcblxuLyoqXG4gKiAyRCByb3RhdGlvbiBibG9jay5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFJvdGF0ZTJEQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxWZWN0b3IyLCBudW1iZXIsIFZlY3RvcjI+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlVmVjdG9yMiwgUmljaFR5cGVOdW1iZXIsIFJpY2hUeXBlVmVjdG9yMiwgKGEsIGIpID0+IGEucm90YXRlKGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTJELCBjb25maWcpO1xuICAgIH1cbn1cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Sb3RhdGUyRCwgRmxvd0dyYXBoUm90YXRlMkRCbG9jayk7XG5cbi8qKlxuICogM0Qgcm90YXRpb24gYmxvY2suXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhSb3RhdGUzREJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8VmVjdG9yMywgUXVhdGVybmlvbiwgVmVjdG9yMz4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoUmljaFR5cGVWZWN0b3IzLCBSaWNoVHlwZVF1YXRlcm5pb24sIFJpY2hUeXBlVmVjdG9yMywgKGEsIGIpID0+IGEuYXBwbHlSb3RhdGlvblF1YXRlcm5pb24oYiksIEZsb3dHcmFwaEJsb2NrTmFtZXMuUm90YXRlM0QsIGNvbmZpZyk7XG4gICAgfVxufVxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTNELCBGbG93R3JhcGhSb3RhdGUzREJsb2NrKTtcblxuZnVuY3Rpb24gVHJhbnNmb3JtVmVjdG9yKGE6IEZsb3dHcmFwaFZlY3RvciwgYjogRmxvd0dyYXBoTWF0cml4KTogRmxvd0dyYXBoVmVjdG9yIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBfR2V0Q2xhc3NOYW1lT2YoYSk7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IyOlxuICAgICAgICAgICAgcmV0dXJuIChiIGFzIEZsb3dHcmFwaE1hdHJpeDJEKS50cmFuc2Zvcm1WZWN0b3IoYSBhcyBWZWN0b3IyKTtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxuICAgICAgICAgICAgcmV0dXJuIChiIGFzIEZsb3dHcmFwaE1hdHJpeDNEKS50cmFuc2Zvcm1WZWN0b3IoYSBhcyBWZWN0b3IzKTtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0OlxuICAgICAgICAgICAgYSA9IGEgYXMgVmVjdG9yNDtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgdmVjdG9yIDQgd2l0aCB0aGUgbWF0cml4IGhlcmUuIFZlY3RvcjQuVHJhbnNmb3JtQ29vcmRpbmF0ZXMgdHJhbnNmb3JtcyBhIDNEIGNvb3JkaW5hdGUsIG5vdCBWZWN0b3I0XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjQoXG4gICAgICAgICAgICAgICAgYS54ICogYi5tWzBdICsgYS55ICogYi5tWzFdICsgYS56ICogYi5tWzJdICsgYS53ICogYi5tWzNdLFxuICAgICAgICAgICAgICAgIGEueCAqIGIubVs0XSArIGEueSAqIGIubVs1XSArIGEueiAqIGIubVs2XSArIGEudyAqIGIubVs3XSxcbiAgICAgICAgICAgICAgICBhLnggKiBiLm1bOF0gKyBhLnkgKiBiLm1bOV0gKyBhLnogKiBiLm1bMTBdICsgYS53ICogYi5tWzExXSxcbiAgICAgICAgICAgICAgICBhLnggKiBiLm1bMTJdICsgYS55ICogYi5tWzEzXSArIGEueiAqIGIubVsxNF0gKyBhLncgKiBiLm1bMTVdXG4gICAgICAgICAgICApO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdHJhbnNmb3JtIHZhbHVlICR7YX1gKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIHRyYW5zZm9ybSBibG9jay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoVHJhbnNmb3JtQmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogVGhlIHZlY3RvciB0eXBlXG4gICAgICovXG4gICAgdmVjdG9yVHlwZTogRmxvd0dyYXBoVHlwZXM7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgdmVjdG9yMyBieSBhIG1hdHJpeC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFRyYW5zZm9ybUJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8Rmxvd0dyYXBoVmVjdG9yLCBGbG93R3JhcGhNYXRyaXgsIEZsb3dHcmFwaFZlY3Rvcj4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhUcmFuc2Zvcm1CbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmVjdG9yVHlwZSA9IGNvbmZpZz8udmVjdG9yVHlwZSB8fCBGbG93R3JhcGhUeXBlcy5WZWN0b3IzO1xuICAgICAgICBjb25zdCBtYXRyaXhUeXBlID1cbiAgICAgICAgICAgIHZlY3RvclR5cGUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjIgPyBGbG93R3JhcGhUeXBlcy5NYXRyaXgyRCA6IHZlY3RvclR5cGUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjMgPyBGbG93R3JhcGhUeXBlcy5NYXRyaXgzRCA6IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZSh2ZWN0b3JUeXBlKSxcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKG1hdHJpeFR5cGUpLFxuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUodmVjdG9yVHlwZSksXG4gICAgICAgICAgICBUcmFuc2Zvcm1WZWN0b3IsXG4gICAgICAgICAgICBGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybVZlY3RvcixcbiAgICAgICAgICAgIGNvbmZpZ1xuICAgICAgICApO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybVZlY3RvciwgRmxvd0dyYXBoVHJhbnNmb3JtQmxvY2spO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhIHZlY3RvcjMgYnkgYSBtYXRyaXguXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc0Jsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8VmVjdG9yMywgTWF0cml4LCBWZWN0b3IzPiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihSaWNoVHlwZVZlY3RvcjMsIFJpY2hUeXBlTWF0cml4LCBSaWNoVHlwZVZlY3RvcjMsIChhLCBiKSA9PiBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybUNvb3JkaW5hdGVzLCBjb25maWcpO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybUNvb3JkaW5hdGVzLCBGbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc0Jsb2NrKTtcblxuLyoqXG4gKiBDb25qdWdhdGUgdGhlIHF1YXRlcm5pb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb25qdWdhdGVCbG9jayBleHRlbmRzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8UXVhdGVybmlvbiwgUXVhdGVybmlvbj4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoUmljaFR5cGVRdWF0ZXJuaW9uLCBSaWNoVHlwZVF1YXRlcm5pb24sIChhKSA9PiBhLmNvbmp1Z2F0ZSgpLCBGbG93R3JhcGhCbG9ja05hbWVzLkNvbmp1Z2F0ZSwgY29uZmlnKTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Db25qdWdhdGUsIEZsb3dHcmFwaENvbmp1Z2F0ZUJsb2NrKTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHF1YXRlcm5pb25zLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQW5nbGVCZXR3ZWVuQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxRdWF0ZXJuaW9uLCBRdWF0ZXJuaW9uLCBudW1iZXI+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlUXVhdGVybmlvbiwgUmljaFR5cGVRdWF0ZXJuaW9uLCBSaWNoVHlwZU51bWJlciwgKGEsIGIpID0+IEdldEFuZ2xlQmV0d2VlblF1YXRlcm5pb25zKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLkFuZ2xlQmV0d2VlbiwgY29uZmlnKTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5BbmdsZUJldHdlZW4sIEZsb3dHcmFwaEFuZ2xlQmV0d2VlbkJsb2NrKTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1YXRlcm5pb24gZnJvbSBhbiBheGlzIGFuZCBhbiBhbmdsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFF1YXRlcm5pb25Gcm9tQXhpc0FuZ2xlQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCaW5hcnlPcGVyYXRpb25CbG9jazxWZWN0b3IzLCBudW1iZXIsIFF1YXRlcm5pb24+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlVmVjdG9yMywgUmljaFR5cGVOdW1iZXIsIFJpY2hUeXBlUXVhdGVybmlvbiwgKGEsIGIpID0+IFF1YXRlcm5pb24uUm90YXRpb25BeGlzKGEsIGIpLCBGbG93R3JhcGhCbG9ja05hbWVzLlF1YXRlcm5pb25Gcm9tQXhpc0FuZ2xlLCBjb25maWcpO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlF1YXRlcm5pb25Gcm9tQXhpc0FuZ2xlLCBGbG93R3JhcGhRdWF0ZXJuaW9uRnJvbUF4aXNBbmdsZUJsb2NrKTtcblxuLyoqXG4gKiBHZXQgdGhlIGF4aXMgYW5kIGFuZ2xlIGZyb20gYSBxdWF0ZXJuaW9uLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQXhpc0FuZ2xlRnJvbVF1YXRlcm5pb25CbG9jayBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgb2YgdGhpcyBibG9jay5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248UXVhdGVybmlvbj47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGF4aXMgb2Ygcm90YXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF4aXM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFZlY3RvcjM+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBhbmdsZSBvZiByb3RhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5nbGU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogV2hldGhlciB0aGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGlzVmFsaWQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMuYSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhXCIsIFJpY2hUeXBlUXVhdGVybmlvbik7XG5cbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJheGlzXCIsIFJpY2hUeXBlVmVjdG9yMyk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImFuZ2xlXCIsIFJpY2hUeXBlTnVtYmVyKTtcblxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImlzVmFsaWRcIiwgUmljaFR5cGVCb29sZWFuKTtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIC0xKTtcbiAgICAgICAgY29uc3QgY2FjaGVkQXhpcyA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPFZlY3RvcjM+Pih0aGlzLCBBeGlzQ2FjaGVOYW1lLCBudWxsKTtcbiAgICAgICAgY29uc3QgY2FjaGVkQW5nbGUgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZTxOdWxsYWJsZTxudW1iZXI+Pih0aGlzLCBBbmdsZUNhY2hlTmFtZSwgbnVsbCk7XG4gICAgICAgIGlmIChjYWNoZWRBeGlzICE9PSB1bmRlZmluZWQgJiYgY2FjaGVkQXhpcyAhPT0gbnVsbCAmJiBjYWNoZWRBbmdsZSAhPT0gdW5kZWZpbmVkICYmIGNhY2hlZEFuZ2xlICE9PSBudWxsICYmIGNhY2hlZEV4ZWN1dGlvbklkID09PSBjb250ZXh0LmV4ZWN1dGlvbklkKSB7XG4gICAgICAgICAgICB0aGlzLmF4aXMuc2V0VmFsdWUoY2FjaGVkQXhpcywgY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlLnNldFZhbHVlKGNhY2hlZEFuZ2xlLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBheGlzLCBhbmdsZSB9ID0gdGhpcy5hLmdldFZhbHVlKGNvbnRleHQpLnRvQXhpc0FuZ2xlKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQXhpc0NhY2hlTmFtZSwgYXhpcyk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQW5nbGVDYWNoZU5hbWUsIGFuZ2xlKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIGNvbnRleHQuZXhlY3V0aW9uSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXhpcy5zZXRWYWx1ZShheGlzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlLnNldFZhbHVlKGFuZ2xlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQuc2V0VmFsdWUodHJ1ZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkF4aXNBbmdsZUZyb21RdWF0ZXJuaW9uO1xuICAgIH1cbn1cblxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLkF4aXNBbmdsZUZyb21RdWF0ZXJuaW9uLCBGbG93R3JhcGhBeGlzQW5nbGVGcm9tUXVhdGVybmlvbkJsb2NrKTtcblxuLyoqXG4gKiBHZXQgdGhlIHF1YXRlcm5pb24gZnJvbSB0d28gZGlyZWN0aW9uIHZlY3RvcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhRdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnNCbG9jayBleHRlbmRzIEZsb3dHcmFwaEJpbmFyeU9wZXJhdGlvbkJsb2NrPFZlY3RvcjMsIFZlY3RvcjMsIFF1YXRlcm5pb24+IHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlVmVjdG9yMywgUmljaFR5cGVWZWN0b3IzLCBSaWNoVHlwZVF1YXRlcm5pb24sIChhLCBiKSA9PiBHZXRRdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnMoYSwgYiksIEZsb3dHcmFwaEJsb2NrTmFtZXMuUXVhdGVybmlvbkZyb21EaXJlY3Rpb25zLCBjb25maWcpO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBSaWNoVHlwZSB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2tcIjtcclxuLyoqXHJcbiAqIFRoZSBiYXNlIGJsb2NrIGZvciBhbGwgYmluYXJ5IG9wZXJhdGlvbiBibG9ja3MuIFJlY2VpdmVzIGFuIGlucHV0IG9mIHR5cGVcclxuICogTGVmdFQsIG9uZSBvZiB0eXBlIFJpZ2h0VCwgYW5kIG91dHB1dHMgYSB2YWx1ZSBvZiB0eXBlIFJlc3VsdFQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQmluYXJ5T3BlcmF0aW9uQmxvY2s8TGVmdFQsIFJpZ2h0VCwgUmVzdWx0VD4gZXh0ZW5kcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxSZXN1bHRUPiB7XHJcbiAgICAvKipcclxuICAgICAqIEZpcnN0IGlucHV0IG9mIHRoaXMgYmxvY2tcclxuICAgICAqL1xyXG4gICAgYTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248TGVmdFQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZWNvbmQgaW5wdXQgb2YgdGhpcyBibG9ja1xyXG4gICAgICovXHJcbiAgICBiOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxSaWdodFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxlZnRSaWNoVHlwZTogUmljaFR5cGU8TGVmdFQ+LFxyXG4gICAgICAgIHJpZ2h0UmljaFR5cGU6IFJpY2hUeXBlPFJpZ2h0VD4sXHJcbiAgICAgICAgcmVzdWx0UmljaFR5cGU6IFJpY2hUeXBlPFJlc3VsdFQ+LFxyXG4gICAgICAgIHByaXZhdGUgX29wZXJhdGlvbjogKGxlZnQ6IExlZnRULCByaWdodDogUmlnaHRUKSA9PiBSZXN1bHRULFxyXG4gICAgICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHJlc3VsdFJpY2hUeXBlLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuYSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhXCIsIGxlZnRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5iID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImJcIiwgcmlnaHRSaWNoVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgb3BlcmF0aW9uIHBlcmZvcm1lZCBieSB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfZG9PcGVyYXRpb24oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IFJlc3VsdFQge1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmEuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYi5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uKGEsIGIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2xhc3MgbmFtZSBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuXHJcbmNvbnN0IENhY2hlTmFtZSA9IFwiY2FjaGVkT3BlcmF0aW9uVmFsdWVcIjtcclxuY29uc3QgQ2FjaGVFeGVjSWROYW1lID0gXCJjYWNoZWRFeGVjdXRpb25JZFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCB3aWxsIGNhY2hlIHRoZSByZXN1bHQgb2YgYW4gb3BlcmF0aW9uIGFuZCBkZWxpdmVyIGl0IGFzIGFuIG91dHB1dC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxPdXRwdXRUPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG91dHB1dCBvZiB0aGUgb3BlcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248T3V0cHV0VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogV2hldGhlciB0aGUgdmFsdWUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBpc1ZhbGlkOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdXRwdXRSaWNoVHlwZTogUmljaFR5cGU8T3V0cHV0VD4sIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJ2YWx1ZVwiLCBvdXRwdXRSaWNoVHlwZSk7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJpc1ZhbGlkXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIE9wZXJhdGlvbiB0byByZWFsaXplXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgZ3JhcGggY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBPdXRwdXRUIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfdXBkYXRlT3V0cHV0cyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkRXhlY3V0aW9uSWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBDYWNoZUV4ZWNJZE5hbWUsIC0xKTtcclxuICAgICAgICBjb25zdCBjYWNoZWRWYWx1ZSA9IGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlPE51bGxhYmxlPE91dHB1dFQ+Pih0aGlzLCBDYWNoZU5hbWUsIG51bGwpO1xyXG4gICAgICAgIGlmIChjYWNoZWRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhY2hlZFZhbHVlICE9PSBudWxsICYmIGNhY2hlZEV4ZWN1dGlvbklkID09PSBjb250ZXh0LmV4ZWN1dGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShjYWNoZWRWYWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuX2RvT3BlcmF0aW9uKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGNhbGN1bGF0ZWRWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZShmYWxzZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVOYW1lLCBjYWxjdWxhdGVkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVFeGVjSWROYW1lLCBjb250ZXh0LmV4ZWN1dGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FsY3VsYXRlZFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZSh0cnVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkLnNldFZhbHVlKGZhbHNlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIFRoZSBiYXNlIGJsb2NrIGZvciBhbGwgdW5hcnkgb3BlcmF0aW9uIGJsb2Nrcy4gUmVjZWl2ZXMgYW4gaW5wdXQgb2YgdHlwZSBJbnB1dFQsIGFuZCBvdXRwdXRzIGEgdmFsdWUgb2YgdHlwZSBSZXN1bHRULlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFVuYXJ5T3BlcmF0aW9uQmxvY2s8SW5wdXRULCBSZXN1bHRUPiBleHRlbmRzIEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrPFJlc3VsdFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIGlucHV0IG9mIHRoaXMgYmxvY2tcclxuICAgICAqL1xyXG4gICAgYTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248SW5wdXRUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpbnB1dFJpY2hUeXBlOiBSaWNoVHlwZTxJbnB1dFQ+LFxyXG4gICAgICAgIHJlc3VsdFJpY2hUeXBlOiBSaWNoVHlwZTxSZXN1bHRUPixcclxuICAgICAgICBwcml2YXRlIF9vcGVyYXRpb246IChpbnB1dDogSW5wdXRUKSA9PiBSZXN1bHRULFxyXG4gICAgICAgIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHJlc3VsdFJpY2hUeXBlLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuYSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhXCIsIGlucHV0UmljaFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIG9wZXJhdGlvbiBwZXJmb3JtZWQgYnkgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGdyYXBoIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2RvT3BlcmF0aW9uKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBSZXN1bHRUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlcmF0aW9uKHRoaXMuYS5nZXRWYWx1ZShjb250ZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSVF1YXRlcm5pb25MaWtlIH0gZnJvbSBcIi4uL01hdGhzL21hdGgubGlrZVwiO1xyXG5pbXBvcnQgeyBDbGFtcCB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnNjYWxhci5mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzRG90LCBWZWN0b3I0RG90IH0gZnJvbSBcIi4uL01hdGhzL21hdGgudmVjdG9yLmZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IERlZXBJbW11dGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbi8vICoqKiBOT1RFICoqKlxyXG4vLyBUaGVzZSBmdW5jdGlvbnMgc2hvdWxkIGlkZWFsbHkgZ28gaW4gbWF0aC52ZWN0b3IuZnVuY3Rpb25zLnRzLCBidXQgdGhleSByZXF1aXJlIG1hdGgudmVjdG9yLnRzIHRvXHJcbi8vIGJlIGltcG9ydGVkIHdoaWNoIGlzIGJpZy4gVG8gYXZvaWQgdGhlIGxhcmdlciBidW5kbGUgc2l6ZSwgdGhleSBhcmUga2VwdCBpbnNpZGUgZmxvdyBncmFwaCBmb3Igbm93LlxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGFuZ2xlIGluIHJhZGlhbnMgYmV0d2VlbiB0d28gcXVhdGVybmlvbnNcclxuICogQHBhcmFtIHExIGRlZmluZXMgdGhlIGZpcnN0IHF1YXRlcm5pb25cclxuICogQHBhcmFtIHEyIGRlZmluZXMgdGhlIHNlY29uZCBxdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm5zIHRoZSBhbmdsZSBpbiByYWRpYW5zIGJldHdlZW4gdGhlIHR3byBxdWF0ZXJuaW9uc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFuZ2xlQmV0d2VlblF1YXRlcm5pb25zKHExOiBEZWVwSW1tdXRhYmxlPElRdWF0ZXJuaW9uTGlrZT4sIHEyOiBEZWVwSW1tdXRhYmxlPElRdWF0ZXJuaW9uTGlrZT4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguYWNvcyhDbGFtcChWZWN0b3I0RG90KHExLCBxMiksIC0xLCAxKSkgKiAyO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0d28gZGlyZWN0aW9uIHZlY3RvcnNcclxuICogQHBhcmFtIGEgZGVmaW5lcyB0aGUgZmlyc3QgZGlyZWN0aW9uIHZlY3RvclxyXG4gKiBAcGFyYW0gYiBkZWZpbmVzIHRoZSBzZWNvbmQgZGlyZWN0aW9uIHZlY3RvclxyXG4gKiBAcmV0dXJucyB0aGUgdGFyZ2V0IHF1YXRlcm5pb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRRdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnM8VCBleHRlbmRzIFZlY3RvcjM+KGE6IERlZXBJbW11dGFibGU8VD4sIGI6IERlZXBJbW11dGFibGU8VD4pOiBRdWF0ZXJuaW9uIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICBHZXRRdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnNUb1JlZihhLCBiLCByZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdHdvIGRpcmVjdGlvbiB2ZWN0b3JzXHJcbiAqIEBwYXJhbSBhIGRlZmluZXMgdGhlIGZpcnN0IGRpcmVjdGlvbiB2ZWN0b3JcclxuICogQHBhcmFtIGIgZGVmaW5lcyB0aGUgc2Vjb25kIGRpcmVjdGlvbiB2ZWN0b3JcclxuICogQHBhcmFtIHJlc3VsdCBkZWZpbmVzIHRoZSB0YXJnZXQgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB0aGUgdGFyZ2V0IHF1YXRlcm5pb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRRdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnNUb1JlZjxUIGV4dGVuZHMgVmVjdG9yMywgUmVzdWx0VCBleHRlbmRzIFF1YXRlcm5pb24+KGE6IERlZXBJbW11dGFibGU8VD4sIGI6IERlZXBJbW11dGFibGU8VD4sIHJlc3VsdDogUmVzdWx0VCk6IFJlc3VsdFQge1xyXG4gICAgY29uc3QgYXhpcyA9IFZlY3RvcjMuQ3Jvc3MoYSwgYik7XHJcbiAgICBjb25zdCBhbmdsZSA9IE1hdGguYWNvcyhDbGFtcChWZWN0b3IzRG90KGEsIGIpLCAtMSwgMSkpO1xyXG4gICAgUXVhdGVybmlvbi5Sb3RhdGlvbkF4aXNUb1JlZihheGlzLCBhbmdsZSwgcmVzdWx0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==