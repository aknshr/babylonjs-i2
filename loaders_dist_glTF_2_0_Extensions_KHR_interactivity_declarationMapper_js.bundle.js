"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_interactivity_declarationMapper_js"],{

/***/ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js":
/*!**************************************************************!*\
  !*** ../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphInteger: () => (/* binding */ FlowGraphInteger)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Class that represents an integer value.
 */
class FlowGraphInteger {
    constructor(value) {
        this.value = this._toInt(value);
    }
    /**
     * Converts a float to an integer.
     * @param n the float to convert
     * @returns the result of n | 0 - converting it to a int
     */
    _toInt(n) {
        return n | 0;
    }
    /**
     * Adds two integers together.
     * @param other the other integer to add
     * @returns a FlowGraphInteger with the result of the addition
     */
    add(other) {
        return new FlowGraphInteger(this.value + other.value);
    }
    /**
     * Subtracts two integers.
     * @param other the other integer to subtract
     * @returns a FlowGraphInteger with the result of the subtraction
     */
    subtract(other) {
        return new FlowGraphInteger(this.value - other.value);
    }
    /**
     * Multiplies two integers.
     * @param other the other integer to multiply
     * @returns a FlowGraphInteger with the result of the multiplication
     */
    multiply(other) {
        return new FlowGraphInteger(Math.imul(this.value, other.value));
    }
    /**
     * Divides two integers.
     * @param other the other integer to divide
     * @returns a FlowGraphInteger with the result of the division
     */
    divide(other) {
        return new FlowGraphInteger(this.value / other.value);
    }
    /**
     * The class name of this type.
     * @returns
     */
    getClassName() {
        return FlowGraphInteger.ClassName;
    }
    /**
     * Compares two integers for equality.
     * @param other the other integer to compare
     * @returns
     */
    equals(other) {
        return this.value === other.value;
    }
    /**
     * Parses a FlowGraphInteger from a serialization object.
     * @param value te number to parse
     * @returns
     */
    static FromValue(value) {
        return new FlowGraphInteger(value);
    }
    toString() {
        return this.value.toString();
    }
}
FlowGraphInteger.ClassName = "FlowGraphInteger";
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphInteger", FlowGraphInteger);


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

/***/ "../core/dist/FlowGraph/CustomTypes/flowGraphMatrix.js":
/*!*************************************************************!*\
  !*** ../core/dist/FlowGraph/CustomTypes/flowGraphMatrix.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphMatrix2D: () => (/* binding */ FlowGraphMatrix2D),
/* harmony export */   FlowGraphMatrix3D: () => (/* binding */ FlowGraphMatrix3D)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


// Note - the matrix classes are basically column-major, and work similarly to Babylon.js' Matrix class.
/**
 * A 2x2 matrix.
 */
class FlowGraphMatrix2D {
    constructor(m = [1, 0, 0, 1]) {
        this._m = m;
    }
    get m() {
        return this._m;
    }
    transformVector(v) {
        return this.transformVectorToRef(v, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2());
    }
    transformVectorToRef(v, result) {
        result.x = v.x * this._m[0] + v.y * this._m[1];
        result.y = v.x * this._m[2] + v.y * this._m[3];
        return result;
    }
    asArray() {
        return this.toArray();
    }
    toArray(emptyArray = []) {
        for (let i = 0; i < 4; i++) {
            emptyArray[i] = this._m[i];
        }
        return emptyArray;
    }
    fromArray(array) {
        for (let i = 0; i < 4; i++) {
            this._m[i] = array[i];
        }
        return this;
    }
    multiplyToRef(other, result) {
        const otherMatrix = other._m;
        const thisMatrix = this._m;
        const r = result._m;
        // other * this
        r[0] = otherMatrix[0] * thisMatrix[0] + otherMatrix[1] * thisMatrix[2];
        r[1] = otherMatrix[0] * thisMatrix[1] + otherMatrix[1] * thisMatrix[3];
        r[2] = otherMatrix[2] * thisMatrix[0] + otherMatrix[3] * thisMatrix[2];
        r[3] = otherMatrix[2] * thisMatrix[1] + otherMatrix[3] * thisMatrix[3];
        return result;
    }
    multiply(other) {
        return this.multiplyToRef(other, new FlowGraphMatrix2D());
    }
    divideToRef(other, result) {
        const m = this._m;
        const o = other._m;
        const r = result._m;
        r[0] = m[0] / o[0];
        r[1] = m[1] / o[1];
        r[2] = m[2] / o[2];
        r[3] = m[3] / o[3];
        return result;
    }
    divide(other) {
        return this.divideToRef(other, new FlowGraphMatrix2D());
    }
    addToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] + o[0];
        r[1] = m[1] + o[1];
        r[2] = m[2] + o[2];
        r[3] = m[3] + o[3];
        return result;
    }
    add(other) {
        return this.addToRef(other, new FlowGraphMatrix2D());
    }
    subtractToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] - o[0];
        r[1] = m[1] - o[1];
        r[2] = m[2] - o[2];
        r[3] = m[3] - o[3];
        return result;
    }
    subtract(other) {
        return this.subtractToRef(other, new FlowGraphMatrix2D());
    }
    transpose() {
        const m = this._m;
        return new FlowGraphMatrix2D([m[0], m[2], m[1], m[3]]);
    }
    determinant() {
        const m = this._m;
        return m[0] * m[3] - m[1] * m[2];
    }
    inverse() {
        const det = this.determinant();
        if (det === 0) {
            throw new Error("Matrix is not invertible");
        }
        const m = this._m;
        const invDet = 1 / det;
        return new FlowGraphMatrix2D([m[3] * invDet, -m[1] * invDet, -m[2] * invDet, m[0] * invDet]);
    }
    equals(other, epsilon = 0) {
        const m = this._m;
        const o = other.m;
        if (epsilon === 0) {
            return m[0] === o[0] && m[1] === o[1] && m[2] === o[2] && m[3] === o[3];
        }
        return Math.abs(m[0] - o[0]) < epsilon && Math.abs(m[1] - o[1]) < epsilon && Math.abs(m[2] - o[2]) < epsilon && Math.abs(m[3] - o[3]) < epsilon;
    }
    getClassName() {
        return "FlowGraphMatrix2D";
    }
    toString() {
        return `FlowGraphMatrix2D(${this._m.join(", ")})`;
    }
}
/**
 * A 3x3 matrix.
 */
class FlowGraphMatrix3D {
    constructor(array = [1, 0, 0, 0, 1, 0, 0, 0, 1]) {
        this._m = array;
    }
    get m() {
        return this._m;
    }
    transformVector(v) {
        return this.transformVectorToRef(v, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3());
    }
    transformVectorToRef(v, result) {
        const m = this._m;
        result.x = v.x * m[0] + v.y * m[1] + v.z * m[2];
        result.y = v.x * m[3] + v.y * m[4] + v.z * m[5];
        result.z = v.x * m[6] + v.y * m[7] + v.z * m[8];
        return result;
    }
    multiplyToRef(other, result) {
        const otherMatrix = other._m;
        const thisMatrix = this._m;
        const r = result.m;
        r[0] = otherMatrix[0] * thisMatrix[0] + otherMatrix[1] * thisMatrix[3] + otherMatrix[2] * thisMatrix[6];
        r[1] = otherMatrix[0] * thisMatrix[1] + otherMatrix[1] * thisMatrix[4] + otherMatrix[2] * thisMatrix[7];
        r[2] = otherMatrix[0] * thisMatrix[2] + otherMatrix[1] * thisMatrix[5] + otherMatrix[2] * thisMatrix[8];
        r[3] = otherMatrix[3] * thisMatrix[0] + otherMatrix[4] * thisMatrix[3] + otherMatrix[5] * thisMatrix[6];
        r[4] = otherMatrix[3] * thisMatrix[1] + otherMatrix[4] * thisMatrix[4] + otherMatrix[5] * thisMatrix[7];
        r[5] = otherMatrix[3] * thisMatrix[2] + otherMatrix[4] * thisMatrix[5] + otherMatrix[5] * thisMatrix[8];
        r[6] = otherMatrix[6] * thisMatrix[0] + otherMatrix[7] * thisMatrix[3] + otherMatrix[8] * thisMatrix[6];
        r[7] = otherMatrix[6] * thisMatrix[1] + otherMatrix[7] * thisMatrix[4] + otherMatrix[8] * thisMatrix[7];
        r[8] = otherMatrix[6] * thisMatrix[2] + otherMatrix[7] * thisMatrix[5] + otherMatrix[8] * thisMatrix[8];
        return result;
    }
    multiply(other) {
        return this.multiplyToRef(other, new FlowGraphMatrix3D());
    }
    divideToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] / o[0];
        r[1] = m[1] / o[1];
        r[2] = m[2] / o[2];
        r[3] = m[3] / o[3];
        r[4] = m[4] / o[4];
        r[5] = m[5] / o[5];
        r[6] = m[6] / o[6];
        r[7] = m[7] / o[7];
        r[8] = m[8] / o[8];
        return result;
    }
    divide(other) {
        return this.divideToRef(other, new FlowGraphMatrix3D());
    }
    addToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] + o[0];
        r[1] = m[1] + o[1];
        r[2] = m[2] + o[2];
        r[3] = m[3] + o[3];
        r[4] = m[4] + o[4];
        r[5] = m[5] + o[5];
        r[6] = m[6] + o[6];
        r[7] = m[7] + o[7];
        r[8] = m[8] + o[8];
        return result;
    }
    add(other) {
        return this.addToRef(other, new FlowGraphMatrix3D());
    }
    subtractToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] - o[0];
        r[1] = m[1] - o[1];
        r[2] = m[2] - o[2];
        r[3] = m[3] - o[3];
        r[4] = m[4] - o[4];
        r[5] = m[5] - o[5];
        r[6] = m[6] - o[6];
        r[7] = m[7] - o[7];
        r[8] = m[8] - o[8];
        return result;
    }
    subtract(other) {
        return this.subtractToRef(other, new FlowGraphMatrix3D());
    }
    toArray(emptyArray = []) {
        for (let i = 0; i < 9; i++) {
            emptyArray[i] = this._m[i];
        }
        return emptyArray;
    }
    asArray() {
        return this.toArray();
    }
    fromArray(array) {
        for (let i = 0; i < 9; i++) {
            this._m[i] = array[i];
        }
        return this;
    }
    transpose() {
        const m = this._m;
        return new FlowGraphMatrix3D([m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]]);
    }
    determinant() {
        const m = this._m;
        return m[0] * (m[4] * m[8] - m[5] * m[7]) - m[1] * (m[3] * m[8] - m[5] * m[6]) + m[2] * (m[3] * m[7] - m[4] * m[6]);
    }
    inverse() {
        const det = this.determinant();
        if (det === 0) {
            throw new Error("Matrix is not invertible");
        }
        const m = this._m;
        const invDet = 1 / det;
        return new FlowGraphMatrix3D([
            (m[4] * m[8] - m[5] * m[7]) * invDet,
            (m[2] * m[7] - m[1] * m[8]) * invDet,
            (m[1] * m[5] - m[2] * m[4]) * invDet,
            (m[5] * m[6] - m[3] * m[8]) * invDet,
            (m[0] * m[8] - m[2] * m[6]) * invDet,
            (m[2] * m[3] - m[0] * m[5]) * invDet,
            (m[3] * m[7] - m[4] * m[6]) * invDet,
            (m[1] * m[6] - m[0] * m[7]) * invDet,
            (m[0] * m[4] - m[1] * m[3]) * invDet,
        ]);
    }
    equals(other, epsilon = 0) {
        const m = this._m;
        const o = other.m;
        // performance shortcut
        if (epsilon === 0) {
            return m[0] === o[0] && m[1] === o[1] && m[2] === o[2] && m[3] === o[3] && m[4] === o[4] && m[5] === o[5] && m[6] === o[6] && m[7] === o[7] && m[8] === o[8];
        }
        return (Math.abs(m[0] - o[0]) < epsilon &&
            Math.abs(m[1] - o[1]) < epsilon &&
            Math.abs(m[2] - o[2]) < epsilon &&
            Math.abs(m[3] - o[3]) < epsilon &&
            Math.abs(m[4] - o[4]) < epsilon &&
            Math.abs(m[5] - o[5]) < epsilon &&
            Math.abs(m[6] - o[6]) < epsilon &&
            Math.abs(m[7] - o[7]) < epsilon &&
            Math.abs(m[8] - o[8]) < epsilon);
    }
    getClassName() {
        return "FlowGraphMatrix3D";
    }
    toString() {
        return `FlowGraphMatrix3D(${this._m.join(", ")})`;
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

/***/ "../core/dist/FlowGraph/flowGraphRichTypes.js":
/*!****************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphRichTypes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphTypes: () => (/* binding */ FlowGraphTypes),
/* harmony export */   RichType: () => (/* binding */ RichType),
/* harmony export */   RichTypeAny: () => (/* binding */ RichTypeAny),
/* harmony export */   RichTypeBoolean: () => (/* binding */ RichTypeBoolean),
/* harmony export */   RichTypeColor3: () => (/* binding */ RichTypeColor3),
/* harmony export */   RichTypeColor4: () => (/* binding */ RichTypeColor4),
/* harmony export */   RichTypeFlowGraphInteger: () => (/* binding */ RichTypeFlowGraphInteger),
/* harmony export */   RichTypeMatrix: () => (/* binding */ RichTypeMatrix),
/* harmony export */   RichTypeMatrix2D: () => (/* binding */ RichTypeMatrix2D),
/* harmony export */   RichTypeMatrix3D: () => (/* binding */ RichTypeMatrix3D),
/* harmony export */   RichTypeNumber: () => (/* binding */ RichTypeNumber),
/* harmony export */   RichTypeQuaternion: () => (/* binding */ RichTypeQuaternion),
/* harmony export */   RichTypeString: () => (/* binding */ RichTypeString),
/* harmony export */   RichTypeVector2: () => (/* binding */ RichTypeVector2),
/* harmony export */   RichTypeVector3: () => (/* binding */ RichTypeVector3),
/* harmony export */   RichTypeVector4: () => (/* binding */ RichTypeVector4),
/* harmony export */   getAnimationTypeByFlowGraphType: () => (/* binding */ getAnimationTypeByFlowGraphType),
/* harmony export */   getRichTypeByAnimationType: () => (/* binding */ getRichTypeByAnimationType),
/* harmony export */   getRichTypeByFlowGraphType: () => (/* binding */ getRichTypeByFlowGraphType),
/* harmony export */   getRichTypeFromValue: () => (/* binding */ getRichTypeFromValue)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var _CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomTypes/flowGraphMatrix */ "../core/dist/FlowGraph/CustomTypes/flowGraphMatrix.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * The types supported by the flow graph.
 */
var FlowGraphTypes;
(function (FlowGraphTypes) {
    FlowGraphTypes["Any"] = "any";
    FlowGraphTypes["String"] = "string";
    FlowGraphTypes["Number"] = "number";
    FlowGraphTypes["Boolean"] = "boolean";
    FlowGraphTypes["Object"] = "object";
    FlowGraphTypes["Integer"] = "FlowGraphInteger";
    FlowGraphTypes["Vector2"] = "Vector2";
    FlowGraphTypes["Vector3"] = "Vector3";
    FlowGraphTypes["Vector4"] = "Vector4";
    FlowGraphTypes["Quaternion"] = "Quaternion";
    FlowGraphTypes["Matrix"] = "Matrix";
    FlowGraphTypes["Matrix2D"] = "Matrix2D";
    FlowGraphTypes["Matrix3D"] = "Matrix3D";
    FlowGraphTypes["Color3"] = "Color3";
    FlowGraphTypes["Color4"] = "Color4";
})(FlowGraphTypes || (FlowGraphTypes = {}));
/**
 * A rich type represents extra information about a type,
 * such as its name and a default value constructor.
 */
class RichType {
    constructor(
    /**
     * The name given to the type.
     */
    typeName, 
    /**
     * The default value of the type.
     */
    defaultValue, 
    /**
     * [-1] The ANIMATIONTYPE of the type, if available
     */
    animationType = -1) {
        this.typeName = typeName;
        this.defaultValue = defaultValue;
        this.animationType = animationType;
    }
    /**
     * Serializes this rich type into a serialization object.
     * @param serializationObject the object to serialize to
     */
    serialize(serializationObject) {
        serializationObject.typeName = this.typeName;
        serializationObject.defaultValue = this.defaultValue;
    }
}
const RichTypeAny = new RichType("any" /* FlowGraphTypes.Any */, undefined);
const RichTypeString = new RichType("string" /* FlowGraphTypes.String */, "");
const RichTypeNumber = new RichType("number" /* FlowGraphTypes.Number */, 0, core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_FLOAT);
const RichTypeBoolean = new RichType("boolean" /* FlowGraphTypes.Boolean */, false);
const RichTypeVector2 = new RichType("Vector2" /* FlowGraphTypes.Vector2 */, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_VECTOR2);
const RichTypeVector3 = new RichType("Vector3" /* FlowGraphTypes.Vector3 */, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_VECTOR3);
const RichTypeVector4 = new RichType("Vector4" /* FlowGraphTypes.Vector4 */, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector4.Zero());
const RichTypeMatrix = new RichType("Matrix" /* FlowGraphTypes.Matrix */, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity(), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_MATRIX);
const RichTypeMatrix2D = new RichType("Matrix2D" /* FlowGraphTypes.Matrix2D */, new _CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_4__.FlowGraphMatrix2D());
const RichTypeMatrix3D = new RichType("Matrix3D" /* FlowGraphTypes.Matrix3D */, new _CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_4__.FlowGraphMatrix3D());
const RichTypeColor3 = new RichType("Color3" /* FlowGraphTypes.Color3 */, _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color3.Black(), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_COLOR3);
const RichTypeColor4 = new RichType("Color4" /* FlowGraphTypes.Color4 */, new _Maths_math_color__WEBPACK_IMPORTED_MODULE_1__.Color4(0, 0, 0, 0), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_COLOR4);
const RichTypeQuaternion = new RichType("Quaternion" /* FlowGraphTypes.Quaternion */, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_QUATERNION);
RichTypeQuaternion.typeTransformer = (value) => {
    if (value.getClassName) {
        if (value.getClassName() === "Vector4" /* FlowGraphTypes.Vector4 */) {
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(value.asArray());
        }
        else if (value.getClassName() === "Vector3" /* FlowGraphTypes.Vector3 */) {
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerVector(value);
        }
        else if (value.getClassName() === "Matrix" /* FlowGraphTypes.Matrix */) {
            return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromRotationMatrix(value);
        }
    }
    return value;
};
const RichTypeFlowGraphInteger = new RichType("FlowGraphInteger" /* FlowGraphTypes.Integer */, new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_2__.FlowGraphInteger(0), core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_FLOAT);
/**
 * Given a value, try to deduce its rich type.
 * @param value the value to deduce the rich type from
 * @returns the value's rich type, or RichTypeAny if the type could not be deduced.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getRichTypeFromValue(value) {
    const anyValue = value;
    switch (typeof value) {
        case "string" /* FlowGraphTypes.String */:
            return RichTypeString;
        case "number" /* FlowGraphTypes.Number */:
            return RichTypeNumber;
        case "boolean" /* FlowGraphTypes.Boolean */:
            return RichTypeBoolean;
        case "object" /* FlowGraphTypes.Object */:
            if (anyValue.getClassName) {
                switch (anyValue.getClassName()) {
                    case "Vector2" /* FlowGraphTypes.Vector2 */:
                        return RichTypeVector2;
                    case "Vector3" /* FlowGraphTypes.Vector3 */:
                        return RichTypeVector3;
                    case "Vector4" /* FlowGraphTypes.Vector4 */:
                        return RichTypeVector4;
                    case "Matrix" /* FlowGraphTypes.Matrix */:
                        return RichTypeMatrix;
                    case "Color3" /* FlowGraphTypes.Color3 */:
                        return RichTypeColor3;
                    case "Color4" /* FlowGraphTypes.Color4 */:
                        return RichTypeColor4;
                    case "Quaternion" /* FlowGraphTypes.Quaternion */:
                        return RichTypeQuaternion;
                    case "FlowGraphInteger" /* FlowGraphTypes.Integer */:
                        return RichTypeFlowGraphInteger;
                    case "Matrix2D" /* FlowGraphTypes.Matrix2D */:
                        return RichTypeMatrix2D;
                    case "Matrix3D" /* FlowGraphTypes.Matrix3D */:
                        return RichTypeMatrix3D;
                }
            }
            return RichTypeAny;
        default:
            return RichTypeAny;
    }
}
/**
 * Given a flow graph type, return the rich type that corresponds to it.
 * @param flowGraphType the flow graph type
 * @returns the rich type that corresponds to the flow graph type
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getRichTypeByFlowGraphType(flowGraphType) {
    switch (flowGraphType) {
        case "string" /* FlowGraphTypes.String */:
            return RichTypeString;
        case "number" /* FlowGraphTypes.Number */:
            return RichTypeNumber;
        case "boolean" /* FlowGraphTypes.Boolean */:
            return RichTypeBoolean;
        case "Vector2" /* FlowGraphTypes.Vector2 */:
            return RichTypeVector2;
        case "Vector3" /* FlowGraphTypes.Vector3 */:
            return RichTypeVector3;
        case "Vector4" /* FlowGraphTypes.Vector4 */:
            return RichTypeVector4;
        case "Matrix" /* FlowGraphTypes.Matrix */:
            return RichTypeMatrix;
        case "Color3" /* FlowGraphTypes.Color3 */:
            return RichTypeColor3;
        case "Color4" /* FlowGraphTypes.Color4 */:
            return RichTypeColor4;
        case "Quaternion" /* FlowGraphTypes.Quaternion */:
            return RichTypeQuaternion;
        case "FlowGraphInteger" /* FlowGraphTypes.Integer */:
            return RichTypeFlowGraphInteger;
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */:
            return RichTypeMatrix2D;
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */:
            return RichTypeMatrix3D;
        default:
            return RichTypeAny;
    }
}
/**
 * get the animation type for a given flow graph type
 * @param flowGraphType the flow graph type
 * @returns the animation type for this flow graph type
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getAnimationTypeByFlowGraphType(flowGraphType) {
    switch (flowGraphType) {
        case "number" /* FlowGraphTypes.Number */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_FLOAT;
        case "Vector2" /* FlowGraphTypes.Vector2 */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_VECTOR2;
        case "Vector3" /* FlowGraphTypes.Vector3 */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_VECTOR3;
        case "Matrix" /* FlowGraphTypes.Matrix */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_MATRIX;
        case "Color3" /* FlowGraphTypes.Color3 */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_COLOR3;
        case "Color4" /* FlowGraphTypes.Color4 */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_COLOR4;
        case "Quaternion" /* FlowGraphTypes.Quaternion */:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_QUATERNION;
        default:
            return core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_FLOAT;
    }
}
/**
 * Given an animation type, return the rich type that corresponds to it.
 * @param animationType the animation type
 * @returns the rich type that corresponds to the animation type
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getRichTypeByAnimationType(animationType) {
    switch (animationType) {
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_FLOAT:
            return RichTypeNumber;
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_VECTOR2:
            return RichTypeVector2;
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_VECTOR3:
            return RichTypeVector3;
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_MATRIX:
            return RichTypeMatrix;
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_COLOR3:
            return RichTypeColor3;
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_COLOR4:
            return RichTypeColor4;
        case core_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.ANIMATIONTYPE_QUATERNION:
            return RichTypeQuaternion;
        default:
            return RichTypeAny;
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

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.js":
/*!**********************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewInteractivityFlowGraphMapping: () => (/* binding */ addNewInteractivityFlowGraphMapping),
/* harmony export */   getAllSupportedNativeNodeTypes: () => (/* binding */ getAllSupportedNativeNodeTypes),
/* harmony export */   getMappingForDeclaration: () => (/* binding */ getMappingForDeclaration),
/* harmony export */   getMappingForFullOperationName: () => (/* binding */ getMappingForFullOperationName)
/* harmony export */ });
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



function getMappingForFullOperationName(fullOperationName) {
    const [op, extension] = fullOperationName.split(":");
    return getMappingForDeclaration({ op, extension });
}
function getMappingForDeclaration(declaration, returnNoOpIfNotAvailable = true) {
    const mapping = declaration.extension ? gltfExtensionsToFlowGraphMapping[declaration.extension]?.[declaration.op] : gltfToFlowGraphMapping[declaration.op];
    if (!mapping) {
        core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`No mapping found for operation ${declaration.op} and extension ${declaration.extension || "KHR_interactivity"}`);
        if (returnNoOpIfNotAvailable) {
            const inputs = {};
            const outputs = {
                flows: {},
            };
            if (declaration.inputValueSockets) {
                inputs.values = {};
                for (const key in declaration.inputValueSockets) {
                    inputs.values[key] = {
                        name: key,
                    };
                }
            }
            if (declaration.outputValueSockets) {
                outputs.values = {};
                Object.keys(declaration.outputValueSockets).forEach((key) => {
                    outputs.values[key] = {
                        name: key,
                    };
                });
            }
            return {
                blocks: [], // no blocks, just mapping
                inputs,
                outputs,
            };
        }
    }
    return mapping;
}
/**
 * This function will add new mapping to glTF interactivity.
 * Other extensions can define new types of blocks, this is the way to let interactivity know how to parse them.
 * @param key the type of node, i.e. "variable/get"
 * @param extension the extension of the interactivity operation, i.e. "KHR_selectability"
 * @param mapping The mapping object. See documentation or examples below.
 */
function addNewInteractivityFlowGraphMapping(key, extension, mapping) {
    gltfExtensionsToFlowGraphMapping[extension] ||= {};
    gltfExtensionsToFlowGraphMapping[extension][key] = mapping;
}
const gltfExtensionsToFlowGraphMapping = {
    /**
     * This is the BABYLON extension for glTF interactivity.
     * It defines babylon-specific blocks and operations.
     */
    BABYLON: {
        /**
         * flow/log is a flow node that logs input to the console.
         * It has "in" and "out" flows, and takes a message as input.
         * The message can be any type of value.
         * The message is logged to the console when the "in" flow is triggered.
         * The "out" flow is triggered when the message is logged.
         */
        "flow/log": {
            blocks: ["FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */],
            inputs: {
                values: {
                    message: { name: "message" },
                },
            },
        },
    },
};
// this mapper is just a way to convert the glTF nodes to FlowGraph nodes in terms of input/output connection names and values.
const gltfToFlowGraphMapping = {
    "event/onStart": {
        blocks: ["FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */],
        outputs: {
            flows: {
                out: { name: "done" },
            },
        },
    },
    "event/onTick": {
        blocks: ["FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */],
        inputs: {},
        outputs: {
            values: {
                timeSinceLastTick: { name: "deltaTime", gltfType: "number" /*, dataTransformer: (time: number) => time / 1000*/ },
            },
            flows: {
                out: { name: "done" },
            },
        },
    },
    "event/send": {
        blocks: ["FlowGraphSendCustomEventBlock" /* FlowGraphBlockNames.SendCustomEvent */],
        extraProcessor(gltfBlock, declaration, _mapping, parser, serializedObjects) {
            // set eventId and eventData. The configuration object of the glTF should have a single object.
            // validate that we are running it on the right block.
            if (declaration.op !== "event/send" || !gltfBlock.configuration || Object.keys(gltfBlock.configuration).length !== 1) {
                throw new Error("Receive event should have a single configuration object, the event itself");
            }
            const eventConfiguration = gltfBlock.configuration["event"];
            const eventId = eventConfiguration.value?.[0];
            if (typeof eventId !== "number") {
                throw new Error("Event id should be a number");
            }
            const event = parser.arrays.events[eventId];
            const serializedObject = serializedObjects[0];
            serializedObject.config ||= {};
            serializedObject.config.eventId = event.eventId;
            serializedObject.config.eventData = event.eventData;
            return serializedObjects;
        },
    },
    "event/receive": {
        blocks: ["FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */],
        outputs: {
            flows: {
                out: { name: "done" },
            },
        },
        validation(gltfBlock, interactivityGraph) {
            if (!gltfBlock.configuration) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Receive event should have a configuration object");
                return { valid: false, error: "Receive event should have a configuration object" };
            }
            const eventConfiguration = gltfBlock.configuration["event"];
            if (!eventConfiguration) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Receive event should have a single configuration object, the event itself");
                return { valid: false, error: "Receive event should have a single configuration object, the event itself" };
            }
            const eventId = eventConfiguration.value?.[0];
            if (typeof eventId !== "number") {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Event id should be a number");
                return { valid: false, error: "Event id should be a number" };
            }
            const event = interactivityGraph.events?.[eventId];
            if (!event) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error(`Event with id ${eventId} not found`);
                return { valid: false, error: `Event with id ${eventId} not found` };
            }
            return { valid: true };
        },
        extraProcessor(gltfBlock, declaration, _mapping, parser, serializedObjects) {
            // set eventId and eventData. The configuration object of the glTF should have a single object.
            // validate that we are running it on the right block.
            if (declaration.op !== "event/receive" || !gltfBlock.configuration || Object.keys(gltfBlock.configuration).length !== 1) {
                throw new Error("Receive event should have a single configuration object, the event itself");
            }
            const eventConfiguration = gltfBlock.configuration["event"];
            const eventId = eventConfiguration.value?.[0];
            if (typeof eventId !== "number") {
                throw new Error("Event id should be a number");
            }
            const event = parser.arrays.events[eventId];
            const serializedObject = serializedObjects[0];
            serializedObject.config ||= {};
            serializedObject.config.eventId = event.eventId;
            serializedObject.config.eventData = event.eventData;
            return serializedObjects;
        },
    },
    "math/E": getSimpleInputMapping("FlowGraphEBlock" /* FlowGraphBlockNames.E */),
    "math/Pi": getSimpleInputMapping("FlowGraphPIBlock" /* FlowGraphBlockNames.PI */),
    "math/Inf": getSimpleInputMapping("FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */),
    "math/NaN": getSimpleInputMapping("FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */),
    "math/abs": getSimpleInputMapping("FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */),
    "math/sign": getSimpleInputMapping("FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */),
    "math/trunc": getSimpleInputMapping("FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */),
    "math/floor": getSimpleInputMapping("FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */),
    "math/ceil": getSimpleInputMapping("FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */),
    "math/round": {
        blocks: ["FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */],
        configuration: {},
        inputs: {
            values: {
                a: { name: "a" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(gltfBlock, declaration, _mapping, parser, serializedObjects) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            serializedObjects[0].config.roundHalfAwayFromZero = true;
            return serializedObjects;
        },
    },
    "math/fract": getSimpleInputMapping("FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */),
    "math/neg": getSimpleInputMapping("FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */),
    "math/add": getSimpleInputMapping("FlowGraphAddBlock" /* FlowGraphBlockNames.Add */, ["a", "b"], true),
    "math/sub": getSimpleInputMapping("FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */, ["a", "b"], true),
    "math/mul": {
        blocks: ["FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */],
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            serializedObjects[0].config.useMatrixPerComponent = true;
            serializedObjects[0].config.preventIntegerFloatArithmetic = true;
            // try to infer the type or fallback to Integer
            // check the gltf block for the inputs, see if they have a type
            let type = -1;
            Object.keys(_gltfBlock.values || {}).find((value) => {
                if (_gltfBlock.values?.[value].type !== undefined) {
                    type = _gltfBlock.values[value].type;
                    return true;
                }
                return false;
            });
            if (type !== -1) {
                serializedObjects[0].config.type = _parser.arrays.types[type].flowGraphType;
            }
            return serializedObjects;
        },
        validation(gltfBlock) {
            if (gltfBlock.values) {
                // make sure types are the same
                return ValidateTypes(gltfBlock);
            }
            return { valid: true };
        },
    },
    "math/div": getSimpleInputMapping("FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */, ["a", "b"], true),
    "math/rem": getSimpleInputMapping("FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */, ["a", "b"]),
    "math/min": getSimpleInputMapping("FlowGraphMinBlock" /* FlowGraphBlockNames.Min */, ["a", "b"]),
    "math/max": getSimpleInputMapping("FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */, ["a", "b"]),
    "math/clamp": getSimpleInputMapping("FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */, ["a", "b", "c"]),
    "math/saturate": getSimpleInputMapping("FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */),
    "math/mix": getSimpleInputMapping("FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */, ["a", "b", "c"]),
    "math/eq": getSimpleInputMapping("FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */, ["a", "b"]),
    "math/lt": getSimpleInputMapping("FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */, ["a", "b"]),
    "math/le": getSimpleInputMapping("FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */, ["a", "b"]),
    "math/gt": getSimpleInputMapping("FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */, ["a", "b"]),
    "math/ge": getSimpleInputMapping("FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */, ["a", "b"]),
    "math/isNaN": getSimpleInputMapping("FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */),
    "math/isInf": getSimpleInputMapping("FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */),
    "math/select": {
        blocks: ["FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */],
        inputs: {
            values: {
                condition: { name: "condition" },
                // Should we validate those have the same type here, or assume it is already validated?
                a: { name: "onTrue" },
                b: { name: "onFalse" },
            },
        },
        outputs: {
            values: {
                value: { name: "output" },
            },
        },
    },
    "math/random": {
        blocks: ["FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */],
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/sin": getSimpleInputMapping("FlowGraphSinBlock" /* FlowGraphBlockNames.Sin */),
    "math/cos": getSimpleInputMapping("FlowGraphCosBlock" /* FlowGraphBlockNames.Cos */),
    "math/tan": getSimpleInputMapping("FlowGraphTanBlock" /* FlowGraphBlockNames.Tan */),
    "math/asin": getSimpleInputMapping("FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */),
    "math/acos": getSimpleInputMapping("FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */),
    "math/atan": getSimpleInputMapping("FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */),
    "math/atan2": getSimpleInputMapping("FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */, ["a", "b"]),
    "math/sinh": getSimpleInputMapping("FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */),
    "math/cosh": getSimpleInputMapping("FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */),
    "math/tanh": getSimpleInputMapping("FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */),
    "math/asinh": getSimpleInputMapping("FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */),
    "math/acosh": getSimpleInputMapping("FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */),
    "math/atanh": getSimpleInputMapping("FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */),
    "math/exp": getSimpleInputMapping("FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */),
    "math/log": getSimpleInputMapping("FlowGraphLogBlock" /* FlowGraphBlockNames.Log */),
    "math/log2": getSimpleInputMapping("FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */),
    "math/log10": getSimpleInputMapping("FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */),
    "math/sqrt": getSimpleInputMapping("FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */),
    "math/cbrt": getSimpleInputMapping("FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */),
    "math/pow": getSimpleInputMapping("FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */, ["a", "b"]),
    "math/length": getSimpleInputMapping("FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */),
    "math/normalize": getSimpleInputMapping("FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */),
    "math/dot": getSimpleInputMapping("FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */, ["a", "b"]),
    "math/cross": getSimpleInputMapping("FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */, ["a", "b"]),
    "math/rotate2D": {
        blocks: ["FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */],
        inputs: {
            values: {
                a: { name: "a" },
                angle: { name: "b" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/rotate3D": {
        blocks: ["FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */],
        inputs: {
            values: {
                a: { name: "a" },
                rotation: { name: "b" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/transform": {
        // glTF transform is vectorN with matrixN
        blocks: ["FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */],
        inputs: {
            values: {
                a: { name: "a" },
                b: { name: "b" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/combine2": {
        blocks: ["FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */],
        inputs: {
            values: {
                a: { name: "input_0", gltfType: "number" },
                b: { name: "input_1", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/combine3": {
        blocks: ["FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */],
        inputs: {
            values: {
                a: { name: "input_0", gltfType: "number" },
                b: { name: "input_1", gltfType: "number" },
                c: { name: "input_2", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/combine4": {
        blocks: ["FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */],
        inputs: {
            values: {
                a: { name: "input_0", gltfType: "number" },
                b: { name: "input_1", gltfType: "number" },
                c: { name: "input_2", gltfType: "number" },
                d: { name: "input_3", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    // one input, N outputs! outputs named using numbers.
    "math/extract2": {
        blocks: ["FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */],
        inputs: {
            values: {
                a: { name: "input", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                "0": { name: "output_0" },
                "1": { name: "output_1" },
            },
        },
    },
    "math/extract3": {
        blocks: ["FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */],
        inputs: {
            values: {
                a: { name: "input", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                "0": { name: "output_0" },
                "1": { name: "output_1" },
                "2": { name: "output_2" },
            },
        },
    },
    "math/extract4": {
        blocks: ["FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */],
        inputs: {
            values: {
                a: { name: "input", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                "0": { name: "output_0" },
                "1": { name: "output_1" },
                "2": { name: "output_2" },
                "3": { name: "output_3" },
            },
        },
    },
    "math/transpose": getSimpleInputMapping("FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */),
    "math/determinant": getSimpleInputMapping("FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */),
    "math/inverse": getSimpleInputMapping("FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */),
    "math/matMul": getSimpleInputMapping("FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */, ["a", "b"]),
    "math/matCompose": {
        blocks: ["FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */],
        inputs: {
            values: {
                translation: { name: "position", gltfType: "float3" },
                rotation: { name: "rotationQuaternion", gltfType: "float4" },
                scale: { name: "scaling", gltfType: "float3" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects, context) {
            // configure it to work the way glTF specifies
            const d = serializedObjects[0].dataInputs.find((input) => input.name === "rotationQuaternion");
            if (!d) {
                throw new Error("Rotation quaternion input not found");
            }
            // if value is defined, set the type to quaternion
            if (context._connectionValues[d.uniqueId]) {
                context._connectionValues[d.uniqueId].type = "Quaternion" /* FlowGraphTypes.Quaternion */;
            }
            return serializedObjects;
        },
    },
    "math/matDecompose": {
        blocks: ["FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */],
        inputs: {
            values: {
                a: { name: "input", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                translation: { name: "position" },
                rotation: { name: "rotationQuaternion" },
                scale: { name: "scaling" },
            },
        },
    },
    "math/quatConjugate": getSimpleInputMapping("FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */, ["a"]),
    "math/quatMul": {
        blocks: ["FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */],
        inputs: {
            values: {
                a: { name: "a", gltfType: "vector4" },
                b: { name: "b", gltfType: "vector4" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects) {
            serializedObjects[0].config ||= {};
            serializedObjects[0].config.type = "Quaternion" /* FlowGraphTypes.Quaternion */;
            return serializedObjects;
        },
    },
    "math/quatAngleBetween": getSimpleInputMapping("FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */, ["a", "b"]),
    "math/quatFromAxisAngle": {
        blocks: ["FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */],
        inputs: {
            values: {
                axis: { name: "a", gltfType: "float3" },
                angle: { name: "b", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
    },
    "math/quatToAxisAngle": getSimpleInputMapping("FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */, ["a"]),
    "math/quatFromDirections": getSimpleInputMapping("FlowGraphQuaternionFromDirectionsBlock" /* FlowGraphBlockNames.QuaternionFromDirections */, ["a", "b"]),
    "math/combine2x2": {
        blocks: ["FlowGraphCombineMatrix2DBlock" /* FlowGraphBlockNames.CombineMatrix2D */],
        inputs: {
            values: {
                a: { name: "input_0", gltfType: "number" },
                b: { name: "input_1", gltfType: "number" },
                c: { name: "input_2", gltfType: "number" },
                d: { name: "input_3", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            serializedObjects[0].config.inputIsColumnMajor = true;
            return serializedObjects;
        },
    },
    "math/extract2x2": {
        blocks: ["FlowGraphExtractMatrix2DBlock" /* FlowGraphBlockNames.ExtractMatrix2D */],
        inputs: {
            values: {
                a: { name: "input", gltfType: "float2x2" },
            },
        },
        outputs: {
            values: {
                "0": { name: "output_0" },
                "1": { name: "output_1" },
                "2": { name: "output_2" },
                "3": { name: "output_3" },
            },
        },
    },
    "math/combine3x3": {
        blocks: ["FlowGraphCombineMatrix3DBlock" /* FlowGraphBlockNames.CombineMatrix3D */],
        inputs: {
            values: {
                a: { name: "input_0", gltfType: "number" },
                b: { name: "input_1", gltfType: "number" },
                c: { name: "input_2", gltfType: "number" },
                d: { name: "input_3", gltfType: "number" },
                e: { name: "input_4", gltfType: "number" },
                f: { name: "input_5", gltfType: "number" },
                g: { name: "input_6", gltfType: "number" },
                h: { name: "input_7", gltfType: "number" },
                i: { name: "input_8", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            serializedObjects[0].config.inputIsColumnMajor = true;
            return serializedObjects;
        },
    },
    "math/extract3x3": {
        blocks: ["FlowGraphExtractMatrix3DBlock" /* FlowGraphBlockNames.ExtractMatrix3D */],
        inputs: {
            values: {
                a: { name: "input", gltfType: "float3x3" },
            },
        },
        outputs: {
            values: {
                "0": { name: "output_0" },
                "1": { name: "output_1" },
                "2": { name: "output_2" },
                "3": { name: "output_3" },
                "4": { name: "output_4" },
                "5": { name: "output_5" },
                "6": { name: "output_6" },
                "7": { name: "output_7" },
                "8": { name: "output_8" },
            },
        },
    },
    "math/combine4x4": {
        blocks: ["FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */],
        inputs: {
            values: {
                a: { name: "input_0", gltfType: "number" },
                b: { name: "input_1", gltfType: "number" },
                c: { name: "input_2", gltfType: "number" },
                d: { name: "input_3", gltfType: "number" },
                e: { name: "input_4", gltfType: "number" },
                f: { name: "input_5", gltfType: "number" },
                g: { name: "input_6", gltfType: "number" },
                h: { name: "input_7", gltfType: "number" },
                i: { name: "input_8", gltfType: "number" },
                j: { name: "input_9", gltfType: "number" },
                k: { name: "input_10", gltfType: "number" },
                l: { name: "input_11", gltfType: "number" },
                m: { name: "input_12", gltfType: "number" },
                n: { name: "input_13", gltfType: "number" },
                o: { name: "input_14", gltfType: "number" },
                p: { name: "input_15", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            serializedObjects[0].config.inputIsColumnMajor = true;
            return serializedObjects;
        },
    },
    "math/extract4x4": {
        blocks: ["FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */],
        configuration: {},
        inputs: {
            values: {
                a: { name: "input", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                "0": { name: "output_0" },
                "1": { name: "output_1" },
                "2": { name: "output_2" },
                "3": { name: "output_3" },
                "4": { name: "output_4" },
                "5": { name: "output_5" },
                "6": { name: "output_6" },
                "7": { name: "output_7" },
                "8": { name: "output_8" },
                "9": { name: "output_9" },
                "10": { name: "output_10" },
                "11": { name: "output_11" },
                "12": { name: "output_12" },
                "13": { name: "output_13" },
                "14": { name: "output_14" },
                "15": { name: "output_15" },
            },
        },
    },
    "math/not": {
        blocks: ["FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */],
        inputs: {
            values: {
                a: { name: "a" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects, context) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            // try to infer the type or fallback to Integer
            const socketIn = serializedObjects[0].dataInputs[0];
            serializedObjects[0].config.valueType = context._connectionValues[socketIn.uniqueId]?.type ?? "FlowGraphInteger" /* FlowGraphTypes.Integer */;
            return serializedObjects;
        },
    },
    "math/and": {
        blocks: ["FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */],
        inputs: {
            values: {
                a: { name: "a" },
                b: { name: "b" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects, context) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            // try to infer the type or fallback to Integer
            const socketInA = serializedObjects[0].dataInputs[0];
            const socketInB = serializedObjects[0].dataInputs[1];
            serializedObjects[0].config.valueType =
                context._connectionValues[socketInA.uniqueId]?.type ?? context._connectionValues[socketInB.uniqueId]?.type ?? "FlowGraphInteger" /* FlowGraphTypes.Integer */;
            return serializedObjects;
        },
    },
    "math/or": {
        blocks: ["FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */],
        inputs: {
            values: {
                a: { name: "a" },
                b: { name: "b" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects, context) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            // try to infer the type or fallback to Integer
            const socketInA = serializedObjects[0].dataInputs[0];
            const socketInB = serializedObjects[0].dataInputs[1];
            serializedObjects[0].config.valueType =
                context._connectionValues[socketInA.uniqueId]?.type ?? context._connectionValues[socketInB.uniqueId]?.type ?? "FlowGraphInteger" /* FlowGraphTypes.Integer */;
            return serializedObjects;
        },
    },
    "math/xor": {
        blocks: ["FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */],
        inputs: {
            values: {
                a: { name: "a" },
                b: { name: "b" },
            },
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _parser, serializedObjects, context) {
            // configure it to work the way glTF specifies
            serializedObjects[0].config ||= {};
            // try to infer the type or fallback to Integer
            const socketInA = serializedObjects[0].dataInputs[0];
            const socketInB = serializedObjects[0].dataInputs[1];
            serializedObjects[0].config.valueType =
                context._connectionValues[socketInA.uniqueId]?.type ?? context._connectionValues[socketInB.uniqueId]?.type ?? "FlowGraphInteger" /* FlowGraphTypes.Integer */;
            return serializedObjects;
        },
    },
    "math/asr": getSimpleInputMapping("FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */, ["a", "b"]),
    "math/lsl": getSimpleInputMapping("FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */, ["a", "b"]),
    "math/clz": getSimpleInputMapping("FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */),
    "math/ctz": getSimpleInputMapping("FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */),
    "math/popcnt": getSimpleInputMapping("FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */),
    "math/rad": getSimpleInputMapping("FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */),
    "math/deg": getSimpleInputMapping("FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */),
    "type/boolToInt": getSimpleInputMapping("FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */),
    "type/boolToFloat": getSimpleInputMapping("FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */),
    "type/intToBool": getSimpleInputMapping("FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */),
    "type/intToFloat": getSimpleInputMapping("FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */),
    "type/floatToInt": getSimpleInputMapping("FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */),
    "type/floatToBool": getSimpleInputMapping("FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */),
    // flows
    "flow/sequence": {
        blocks: ["FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */],
        extraProcessor(gltfBlock, _declaration, _mapping, _arrays, serializedObjects) {
            const serializedObject = serializedObjects[0];
            serializedObject.config ||= {};
            serializedObject.config.outputSignalCount = Object.keys(gltfBlock.flows || []).length;
            serializedObject.signalOutputs.forEach((output, index) => {
                output.name = "out_" + index;
            });
            return serializedObjects;
        },
    },
    "flow/branch": {
        blocks: ["FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */],
        outputs: {
            flows: {
                true: { name: "onTrue" },
                false: { name: "onFalse" },
            },
        },
    },
    "flow/switch": {
        blocks: ["FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */],
        configuration: {
            cases: { name: "cases", isArray: true, inOptions: true, defaultValue: [] },
        },
        inputs: {
            values: {
                selection: { name: "case" },
                default: { name: "default" },
            },
        },
        validation(gltfBlock) {
            const cases = gltfBlock.configuration?.cases;
            if (cases && cases.value) {
                const onlyIntegers = cases.value.every((caseValue) => {
                    // case value should be an integer. Since Number.isInteger(1.0) is true, we need to check if toString has only digits.
                    return typeof caseValue === "number" && /^-?\d+$/.test(caseValue.toString());
                });
                if (!onlyIntegers) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Switch cases should be integers. Using empty array instead.");
                    cases.value = [];
                    return { valid: true };
                }
                // check for duplicates
                const uniqueCases = new Set(cases.value);
                cases.value = Array.from(uniqueCases);
            }
            return { valid: true };
        },
        extraProcessor(gltfBlock, declaration, _mapping, _arrays, serializedObjects) {
            // convert all names of output flow to out_$1 apart from "default"
            if (declaration.op !== "flow/switch" || !gltfBlock.flows || Object.keys(gltfBlock.flows).length === 0) {
                throw new Error("Switch should have a single configuration object, the cases array");
            }
            const serializedObject = serializedObjects[0];
            serializedObject.signalOutputs.forEach((output) => {
                if (output.name !== "default") {
                    output.name = "out_" + output.name;
                }
            });
            return serializedObjects;
        },
    },
    "flow/while": {
        blocks: ["FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */],
        outputs: {
            flows: {
                loopBody: { name: "executionFlow" },
            },
        },
    },
    "flow/for": {
        blocks: ["FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */],
        configuration: {
            initialIndex: { name: "initialIndex", gltfType: "number", inOptions: true, defaultValue: 0 },
        },
        inputs: {
            values: {
                startIndex: { name: "startIndex", gltfType: "number" },
                endIndex: { name: "endIndex", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                index: { name: "index" },
            },
            flows: {
                loopBody: { name: "executionFlow" },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _arrays, serializedObjects) {
            const serializedObject = serializedObjects[0];
            serializedObject.config ||= {};
            serializedObject.config.incrementIndexWhenLoopDone = true;
            return serializedObjects;
        },
    },
    "flow/doN": {
        blocks: ["FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */],
        configuration: {},
        inputs: {
            values: {
                n: { name: "maxExecutions", gltfType: "number" },
            },
        },
        outputs: {
            values: {
                currentCount: { name: "executionCount" },
            },
        },
    },
    "flow/multiGate": {
        blocks: ["FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */],
        configuration: {
            isRandom: { name: "isRandom", gltfType: "boolean", inOptions: true, defaultValue: false },
            isLoop: { name: "isLoop", gltfType: "boolean", inOptions: true, defaultValue: false },
        },
        extraProcessor(gltfBlock, declaration, _mapping, _arrays, serializedObjects) {
            if (declaration.op !== "flow/multiGate" || !gltfBlock.flows || Object.keys(gltfBlock.flows).length === 0) {
                throw new Error("MultiGate should have a single configuration object, the number of output flows");
            }
            const serializedObject = serializedObjects[0];
            serializedObject.config ||= {};
            serializedObject.config.outputSignalCount = Object.keys(gltfBlock.flows).length;
            serializedObject.signalOutputs.forEach((output, index) => {
                output.name = "out_" + index;
            });
            return serializedObjects;
        },
    },
    "flow/waitAll": {
        blocks: ["FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */],
        configuration: {
            inputFlows: { name: "inputSignalCount", gltfType: "number", inOptions: true, defaultValue: 0 },
        },
        inputs: {
            flows: {
                reset: { name: "reset" },
                "[segment]": { name: "in_$1" },
            },
        },
        validation(gltfBlock) {
            // check that the configuration value is an integer
            if (typeof gltfBlock.configuration?.inputFlows?.value?.[0] !== "number") {
                gltfBlock.configuration = gltfBlock.configuration || {
                    inputFlows: { value: [0] },
                };
                gltfBlock.configuration.inputFlows.value = [0];
            }
            return { valid: true };
        },
    },
    "flow/throttle": {
        blocks: ["FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */],
        outputs: {
            flows: {
                err: { name: "error" },
            },
        },
    },
    "flow/setDelay": {
        blocks: ["FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */],
        outputs: {
            flows: {
                err: { name: "error" },
            },
        },
    },
    "flow/cancelDelay": {
        blocks: ["FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */],
    },
    "variable/get": {
        blocks: ["FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */],
        validation(gltfBlock) {
            if (!gltfBlock.configuration?.variable?.value) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Variable get block should have a variable configuration");
                return { valid: false, error: "Variable get block should have a variable configuration" };
            }
            return { valid: true };
        },
        configuration: {
            variable: {
                name: "variable",
                gltfType: "number",
                flowGraphType: "string",
                inOptions: true,
                isVariable: true,
                dataTransformer(index, parser) {
                    return parser.getVariableName(index);
                },
            },
        },
    },
    "variable/set": {
        blocks: ["FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */],
        configuration: {
            variables: {
                name: "variables",
                gltfType: "number",
                flowGraphType: "string",
                inOptions: true,
                isArray: true,
                dataTransformer(index, parser) {
                    return index.map((i) => parser.getVariableName(i));
                },
            },
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, parser, serializedObjects) {
            // variable/get configuration
            const serializedGetVariable = serializedObjects[0];
            serializedGetVariable.dataInputs.forEach((input) => {
                input.name = parser.getVariableName(+input.name);
            });
            return serializedObjects;
        },
    },
    "variable/interpolate": {
        blocks: [
            "FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */,
            "FlowGraphContextBlock" /* FlowGraphBlockNames.Context */,
            "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */,
            "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */,
            "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */,
        ],
        configuration: {
            variable: {
                name: "propertyName",
                inOptions: true,
                isVariable: true,
                dataTransformer(index, parser) {
                    return parser.getVariableName(index);
                },
            },
            useSlerp: {
                name: "animationType",
                inOptions: true,
                defaultValue: false,
                dataTransformer(value) {
                    return value === true ? "Quaternion" /* FlowGraphTypes.Quaternion */ : undefined;
                },
            },
        },
        inputs: {
            values: {
                value: { name: "value_1" },
                duration: { name: "duration_1", gltfType: "number" },
                p1: { name: "controlPoint1", toBlock: "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ },
                p2: { name: "controlPoint2", toBlock: "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ },
            },
            flows: {
                in: { name: "in", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
            },
        },
        outputs: {
            flows: {
                err: { name: "error", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
                out: { name: "out", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
                done: { name: "done", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
            },
        },
        interBlockConnectors: [
            {
                input: "object",
                output: "userVariables",
                inputBlockIndex: 2,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "animation",
                output: "animation",
                inputBlockIndex: 2,
                outputBlockIndex: 0,
                isVariable: true,
            },
            {
                input: "easingFunction",
                output: "easingFunction",
                inputBlockIndex: 0,
                outputBlockIndex: 3,
                isVariable: true,
            },
            {
                input: "value_0",
                output: "value",
                inputBlockIndex: 0,
                outputBlockIndex: 4,
                isVariable: true,
            },
        ],
        extraProcessor(gltfBlock, _declaration, _mapping, parser, serializedObjects) {
            // is useSlerp is used, animationType should be set to be quaternion!
            const serializedValueInterpolation = serializedObjects[0];
            const propertyIndex = gltfBlock.configuration?.variable.value?.[0];
            if (typeof propertyIndex !== "number") {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Variable index is not defined for variable interpolation block");
                throw new Error("Variable index is not defined for variable interpolation block");
            }
            const variable = parser.arrays.staticVariables[propertyIndex];
            // if not set by useSlerp
            if (typeof serializedValueInterpolation.config?.animationType?.value === "undefined") {
                serializedValueInterpolation.config ||= {};
                serializedValueInterpolation.config.animationType ||= {};
                serializedValueInterpolation.config.animationType.value = (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.getAnimationTypeByFlowGraphType)(variable.type);
            }
            // variable/get configuration
            const serializedGetVariable = serializedObjects[4];
            serializedGetVariable.config ||= {};
            serializedGetVariable.config.variable ||= {};
            serializedGetVariable.config.variable.value = parser.getVariableName(propertyIndex);
            return serializedObjects;
        },
    },
    "pointer/get": {
        blocks: ["FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */, "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */],
        configuration: {
            pointer: { name: "jsonPointer", toBlock: "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ },
        },
        inputs: {
            values: {
                "[segment]": { name: "$1", toBlock: "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ },
            },
        },
        interBlockConnectors: [
            {
                input: "object",
                output: "object",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "propertyName",
                output: "propertyName",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "customGetFunction",
                output: "getFunction",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
        ],
        extraProcessor(gltfBlock, _declaration, _mapping, parser, serializedObjects) {
            serializedObjects.forEach((serializedObject) => {
                // check if it is the json pointer block
                if (serializedObject.className === "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */) {
                    serializedObject.config ||= {};
                    serializedObject.config.outputValue = true;
                }
            });
            return serializedObjects;
        },
    },
    "pointer/set": {
        blocks: ["FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */, "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */],
        configuration: {
            pointer: { name: "jsonPointer", toBlock: "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ },
        },
        inputs: {
            values: {
                // must be defined due to the array taking over
                value: { name: "value" },
                "[segment]": { name: "$1", toBlock: "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ },
            },
        },
        outputs: {
            flows: {
                err: { name: "error" },
            },
        },
        interBlockConnectors: [
            {
                input: "object",
                output: "object",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "propertyName",
                output: "propertyName",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "customSetFunction",
                output: "setFunction",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
        ],
        extraProcessor(gltfBlock, _declaration, _mapping, parser, serializedObjects) {
            serializedObjects.forEach((serializedObject) => {
                // check if it is the json pointer block
                if (serializedObject.className === "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */) {
                    serializedObject.config ||= {};
                    serializedObject.config.outputValue = true;
                }
            });
            return serializedObjects;
        },
    },
    "pointer/interpolate": {
        // interpolate, parse the pointer and play the animation generated. 3 blocks!
        blocks: ["FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */, "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */, "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */, "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */],
        configuration: {
            pointer: { name: "jsonPointer", toBlock: "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ },
        },
        inputs: {
            values: {
                value: { name: "value_1" },
                "[segment]": { name: "$1", toBlock: "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ },
                duration: { name: "duration_1", gltfType: "number" /*, inOptions: true */ },
                p1: { name: "controlPoint1", toBlock: "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ },
                p2: { name: "controlPoint2", toBlock: "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ },
            },
            flows: {
                in: { name: "in", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
            },
        },
        outputs: {
            flows: {
                err: { name: "error", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
                out: { name: "out", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
                done: { name: "done", toBlock: "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ },
            },
        },
        interBlockConnectors: [
            {
                input: "object",
                output: "object",
                inputBlockIndex: 2,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "propertyName",
                output: "propertyName",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "customBuildAnimation",
                output: "generateAnimationsFunction",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "animation",
                output: "animation",
                inputBlockIndex: 2,
                outputBlockIndex: 0,
                isVariable: true,
            },
            {
                input: "easingFunction",
                output: "easingFunction",
                inputBlockIndex: 0,
                outputBlockIndex: 3,
                isVariable: true,
            },
            {
                input: "value_0",
                output: "value",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
        ],
        extraProcessor(gltfBlock, _declaration, _mapping, parser, serializedObjects) {
            serializedObjects.forEach((serializedObject) => {
                // check if it is the json pointer block
                if (serializedObject.className === "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */) {
                    serializedObject.config ||= {};
                    serializedObject.config.outputValue = true;
                }
                else if (serializedObject.className === "FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */) {
                    serializedObject.config ||= {};
                    Object.keys(gltfBlock.values || []).forEach((key) => {
                        const value = gltfBlock.values?.[key];
                        if (key === "value" && value) {
                            // get the type of the value
                            const type = value.type;
                            if (type !== undefined) {
                                serializedObject.config.animationType = parser.arrays.types[type].flowGraphType;
                            }
                        }
                    });
                }
            });
            return serializedObjects;
        },
    },
    "animation/start": {
        blocks: ["FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */, "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */, "KHR_interactivity/FlowGraphGLTFDataProvider"],
        inputs: {
            values: {
                animation: { name: "index", gltfType: "number", toBlock: "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */ },
                speed: { name: "speed", gltfType: "number" },
                startTime: { name: "from", gltfType: "number", dataTransformer: (time, parser) => [time[0] * parser._animationTargetFps] },
                endTime: { name: "to", gltfType: "number", dataTransformer: (time, parser) => [time[0] * parser._animationTargetFps] },
            },
        },
        outputs: {
            flows: {
                err: { name: "error" },
            },
        },
        interBlockConnectors: [
            {
                input: "animationGroup",
                output: "value",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "array",
                output: "animationGroups",
                inputBlockIndex: 1,
                outputBlockIndex: 2,
                isVariable: true,
            },
        ],
        extraProcessor(_gltfBlock, _declaration, _mapping, _arrays, serializedObjects, _context, globalGLTF) {
            // add the glTF to the configuration of the last serialized object
            const serializedObject = serializedObjects[serializedObjects.length - 1];
            serializedObject.config ||= {};
            serializedObject.config.glTF = globalGLTF;
            return serializedObjects;
        },
    },
    "animation/stop": {
        blocks: ["FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */, "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */, "KHR_interactivity/FlowGraphGLTFDataProvider"],
        inputs: {
            values: {
                animation: { name: "index", gltfType: "number", toBlock: "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */ },
            },
        },
        outputs: {
            flows: {
                err: { name: "error" },
            },
        },
        interBlockConnectors: [
            {
                input: "animationGroup",
                output: "value",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "array",
                output: "animationGroups",
                inputBlockIndex: 1,
                outputBlockIndex: 2,
                isVariable: true,
            },
        ],
        extraProcessor(_gltfBlock, _declaration, _mapping, _arrays, serializedObjects, _context, globalGLTF) {
            // add the glTF to the configuration of the last serialized object
            const serializedObject = serializedObjects[serializedObjects.length - 1];
            serializedObject.config ||= {};
            serializedObject.config.glTF = globalGLTF;
            return serializedObjects;
        },
    },
    "animation/stopAt": {
        blocks: ["FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */, "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */, "KHR_interactivity/FlowGraphGLTFDataProvider"],
        configuration: {},
        inputs: {
            values: {
                animation: { name: "index", gltfType: "number", toBlock: "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */ },
                stopTime: { name: "stopAtFrame", gltfType: "number", dataTransformer: (time, parser) => [time[0] * parser._animationTargetFps] },
            },
        },
        outputs: {
            flows: {
                err: { name: "error" },
            },
        },
        interBlockConnectors: [
            {
                input: "animationGroup",
                output: "value",
                inputBlockIndex: 0,
                outputBlockIndex: 1,
                isVariable: true,
            },
            {
                input: "array",
                output: "animationGroups",
                inputBlockIndex: 1,
                outputBlockIndex: 2,
                isVariable: true,
            },
        ],
        extraProcessor(_gltfBlock, _declaration, _mapping, _arrays, serializedObjects, _context, globalGLTF) {
            // add the glTF to the configuration of the last serialized object
            const serializedObject = serializedObjects[serializedObjects.length - 1];
            serializedObject.config ||= {};
            serializedObject.config.glTF = globalGLTF;
            return serializedObjects;
        },
    },
    "math/switch": {
        blocks: ["FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */],
        configuration: {
            cases: { name: "cases", isArray: true, inOptions: true, defaultValue: [] },
        },
        inputs: {
            values: {
                selection: { name: "case" },
            },
        },
        validation(gltfBlock) {
            const cases = gltfBlock.configuration?.cases;
            if (cases && cases.value) {
                const onlyIntegers = cases.value.every((caseValue) => {
                    // case value should be an integer. Since Number.isInteger(1.0) is true, we need to check if toString has only digits.
                    return typeof caseValue === "number" && /^-?\d+$/.test(caseValue.toString());
                });
                if (!onlyIntegers) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Switch cases should be integers. Using empty array instead.");
                    cases.value = [];
                    return { valid: true };
                }
                // check for duplicates
                const uniqueCases = new Set(cases.value);
                cases.value = Array.from(uniqueCases);
            }
            return { valid: true };
        },
        extraProcessor(_gltfBlock, _declaration, _mapping, _arrays, serializedObjects) {
            const serializedObject = serializedObjects[0];
            serializedObject.dataInputs.forEach((input) => {
                if (input.name !== "default" && input.name !== "case") {
                    input.name = "in_" + input.name;
                }
            });
            serializedObject.config ||= {};
            serializedObject.config.treatCasesAsIntegers = true;
            return serializedObjects;
        },
    },
    "debug/log": {
        blocks: ["FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */],
        configuration: {
            message: { name: "messageTemplate", inOptions: true },
        },
    },
};
function getSimpleInputMapping(type, inputs = ["a"], inferType) {
    return {
        blocks: [type],
        inputs: {
            values: inputs.reduce((acc, input) => {
                acc[input] = { name: input };
                return acc;
            }, {}),
        },
        outputs: {
            values: {
                value: { name: "value" },
            },
        },
        extraProcessor(gltfBlock, _declaration, _mapping, _parser, serializedObjects) {
            if (inferType) {
                // configure it to work the way glTF specifies
                serializedObjects[0].config ||= {};
                serializedObjects[0].config.preventIntegerFloatArithmetic = true;
                // try to infer the type or fallback to Integer
                // check the gltf block for the inputs, see if they have a type
                let type = -1;
                Object.keys(gltfBlock.values || {}).find((value) => {
                    if (gltfBlock.values?.[value].type !== undefined) {
                        type = gltfBlock.values[value].type;
                        return true;
                    }
                    return false;
                });
                if (type !== -1) {
                    serializedObjects[0].config.type = _parser.arrays.types[type].flowGraphType;
                }
            }
            return serializedObjects;
        },
        validation(gltfBlock) {
            if (inferType) {
                // make sure types are the same
                return ValidateTypes(gltfBlock);
            }
            return { valid: true };
        },
    };
}
function ValidateTypes(gltfBlock) {
    if (gltfBlock.values) {
        const types = Object.keys(gltfBlock.values)
            .map((key) => gltfBlock.values[key].type)
            .filter((type) => type !== undefined);
        const allSameType = types.every((type) => type === types[0]);
        if (!allSameType) {
            return { valid: false, error: "All inputs must be of the same type" };
        }
    }
    return { valid: true };
}
function getAllSupportedNativeNodeTypes() {
    return Object.keys(gltfToFlowGraphMapping);
}
/**
 *
 * These are the nodes from the specs:

### Math Nodes
1. **Constants**
   - E (`math/E`) FlowGraphBlockNames.E
   - Pi (`math/Pi`) FlowGraphBlockNames.PI
   - Infinity (`math/Inf`) FlowGraphBlockNames.Inf
   - Not a Number (`math/NaN`) FlowGraphBlockNames.NaN
2. **Arithmetic Nodes**
   - Absolute Value (`math/abs`) FlowGraphBlockNames.Abs
   - Sign (`math/sign`) FlowGraphBlockNames.Sign
   - Truncate (`math/trunc`) FlowGraphBlockNames.Trunc
   - Floor (`math/floor`) FlowGraphBlockNames.Floor
   - Ceil (`math/ceil`) FlowGraphBlockNames.Ceil
   - Round (`math/round`)  FlowGraphBlockNames.Round
   - Fraction (`math/fract`) FlowGraphBlockNames.Fract
   - Negation (`math/neg`) FlowGraphBlockNames.Negation
   - Addition (`math/add`) FlowGraphBlockNames.Add
   - Subtraction (`math/sub`) FlowGraphBlockNames.Subtract
   - Multiplication (`math/mul`) FlowGraphBlockNames.Multiply
   - Division (`math/div`) FlowGraphBlockNames.Divide
   - Remainder (`math/rem`) FlowGraphBlockNames.Modulo
   - Minimum (`math/min`) FlowGraphBlockNames.Min
   - Maximum (`math/max`) FlowGraphBlockNames.Max
   - Clamp (`math/clamp`) FlowGraphBlockNames.Clamp
   - Saturate (`math/saturate`) FlowGraphBlockNames.Saturate
   - Interpolate (`math/mix`) FlowGraphBlockNames.MathInterpolation
3. **Comparison Nodes**
   - Equality (`math/eq`) FlowGraphBlockNames.Equality
   - Less Than (`math/lt`) FlowGraphBlockNames.LessThan
   - Less Than Or Equal To (`math/le`) FlowGraphBlockNames.LessThanOrEqual
   - Greater Than (`math/gt`) FlowGraphBlockNames.GreaterThan
   - Greater Than Or Equal To (`math/ge`) FlowGraphBlockNames.GreaterThanOrEqual
4. **Special Nodes**
   - Is Not a Number (`math/isNaN`) FlowGraphBlockNames.IsNaN
   - Is Infinity (`math/isInf`) FlowGraphBlockNames.IsInfinity
   - Select (`math/select`) FlowGraphBlockNames.Conditional
   - Switch (`math/switch`) FlowGraphBlockNames.DataSwitch
   - Random (`math/random`) FlowGraphBlockNames.Random
5. **Angle and Trigonometry Nodes**
   - Degrees-To-Radians (`math/rad`) FlowGraphBlockNames.DegToRad
   - Radians-To-Degrees (`math/deg`) FlowGraphBlockNames.RadToDeg
   - Sine (`math/sin`)  FlowGraphBlockNames.Sin
   - Cosine (`math/cos`) FlowGraphBlockNames.Cos
   - Tangent (`math/tan`) FlowGraphBlockNames.Tan
   - Arcsine (`math/asin`) FlowGraphBlockNames.Asin
   - Arccosine (`math/acos`) FlowGraphBlockNames.Acos
   - Arctangent (`math/atan`) FlowGraphBlockNames.Atan
   - Arctangent 2 (`math/atan2`) FlowGraphBlockNames.Atan2
6. **Hyperbolic Nodes**
   - Hyperbolic Sine (`math/sinh`) FlowGraphBlockNames.Sinh
   - Hyperbolic Cosine (`math/cosh`) FlowGraphBlockNames.Cosh
   - Hyperbolic Tangent (`math/tanh`) FlowGraphBlockNames.Tanh
   - Inverse Hyperbolic Sine (`math/asinh`) FlowGraphBlockNames.Asinh
   - Inverse Hyperbolic Cosine (`math/acosh`) FlowGraphBlockNames.Acosh
   - Inverse Hyperbolic Tangent (`math/atanh`) FlowGraphBlockNames.Atanh
7. **Exponential Nodes**
   - Exponent (`math/exp`) FlowGraphBlockNames.Exponential
   - Natural Logarithm (`math/log`) FlowGraphBlockNames.Log
   - Base-2 Logarithm (`math/log2`) FlowGraphBlockNames.Log2
   - Base-10 Logarithm (`math/log10`) FlowGraphBlockNames.Log10
   - Square Root (`math/sqrt`) FlowGraphBlockNames.SquareRoot
   - Cube Root (`math/cbrt`) FlowGraphBlockNames.CubeRoot
   - Power (`math/pow`) FlowGraphBlockNames.Power
8. **Vector Nodes**
   - Length (`math/length`) FlowGraphBlockNames.Length
   - Normalize (`math/normalize`) FlowGraphBlockNames.Normalize
   - Dot Product (`math/dot`) FlowGraphBlockNames.Dot
   - Cross Product (`math/cross`) FlowGraphBlockNames.Cross
   - Rotate 2D (`math/rotate2D`) FlowGraphBlockNames.Rotate2D
   - Rotate 3D (`math/rotate3D`) FlowGraphBlockNames.Rotate3D
   - Transform (`math/transform`) FlowGraphBlockNames.TransformVector
9. **Matrix Nodes**
   - Transpose (`math/transpose`) FlowGraphBlockNames.Transpose
   - Determinant (`math/determinant`) FlowGraphBlockNames.Determinant
   - Inverse (`math/inverse`) FlowGraphBlockNames.InvertMatrix
   - Multiplication (`math/matMul`) FlowGraphBlockNames.MatrixMultiplication
   - Compose (`math/matCompose`) FlowGraphBlockNames.MatrixCompose
   - Decompose (`math/matDecompose`) FlowGraphBlockNames.MatrixDecompose
10. **Quaternion Nodes**
    - Conjugate (`math/quatConjugate`) FlowGraphBlockNames.Conjugate
    - Multiplication (`math/quatMul`) FlowGraphBlockNames.Multiply
    - Angle Between Quaternions (`math/quatAngleBetween`) FlowGraphBlockNames.AngleBetween
    - Quaternion From Axis Angle (`math/quatFromAxisAngle`) FlowGraphBlockNames.QuaternionFromAxisAngle
    - Quaternion To Axis Angle (`math/quatToAxisAngle`) FlowGraphBlockNames.QuaternionToAxisAngle
    - Quaternion From Two Directional Vectors (`math/quatFromDirections`) FlowGraphBlockNames.QuaternionFromDirections
11. **Swizzle Nodes**
    - Combine (`math/combine2`, `math/combine3`, `math/combine4`, `math/combine2x2`, `math/combine3x3`, `math/combine4x4`)
        FlowGraphBlockNames.CombineVector2, FlowGraphBlockNames.CombineVector3, FlowGraphBlockNames.CombineVector4
        FlowGraphBlockNames.CombineMatrix2D, FlowGraphBlockNames.CombineMatrix3D, FlowGraphBlockNames.CombineMatrix
    - Extract (`math/extract2`, `math/extract3`, `math/extract4`, `math/extract2x2`, `math/extract3x3`, `math/extract4x4`)
        FlowGraphBlockNames.ExtractVector2, FlowGraphBlockNames.ExtractVector3, FlowGraphBlockNames.ExtractVector4
        FlowGraphBlockNames.ExtractMatrix2D, FlowGraphBlockNames.ExtractMatrix3D, FlowGraphBlockNames.ExtractMatrix
12. **Integer Arithmetic Nodes**
    - Absolute Value (`math/abs`) FlowGraphBlockNames.Abs
    - Sign (`math/sign`) FlowGraphBlockNames.Sign
    - Negation (`math/neg`) FlowGraphBlockNames.Negation
    - Addition (`math/add`) FlowGraphBlockNames.Add
    - Subtraction (`math/sub`) FlowGraphBlockNames.Subtract
    - Multiplication (`math/mul`) FlowGraphBlockNames.Multiply
    - Division (`math/div`) FlowGraphBlockNames.Divide
    - Remainder (`math/rem`) FlowGraphBlockNames.Modulo
    - Minimum (`math/min`) FlowGraphBlockNames.Min
    - Maximum (`math/max`) FlowGraphBlockNames.Max
    - Clamp (`math/clamp`) FlowGraphBlockNames.Clamp
13. **Integer Comparison Nodes**
    - Equality (`math/eq`) FlowGraphBlockNames.Equality
    - Less Than (`math/lt`) FlowGraphBlockNames.LessThan
    - Less Than Or Equal To (`math/le`) FlowGraphBlockNames.LessThanOrEqual
    - Greater Than (`math/gt`) FlowGraphBlockNames.GreaterThan
    - Greater Than Or Equal To (`math/ge`) FlowGraphBlockNames.GreaterThanOrEqual
14. **Integer Bitwise Nodes**
    - Bitwise NOT (`math/not`) FlowGraphBlockNames.BitwiseNot
    - Bitwise AND (`math/and`) FlowGraphBlockNames.BitwiseAnd
    - Bitwise OR (`math/or`) FlowGraphBlockNames.BitwiseOr
    - Bitwise XOR (`math/xor`) FlowGraphBlockNames.BitwiseXor
    - Right Shift (`math/asr`) FlowGraphBlockNames.BitwiseRightShift
    - Left Shift (`math/lsl`) FlowGraphBlockNames.BitwiseLeftShift
    - Count Leading Zeros (`math/clz`) FlowGraphBlockNames.LeadingZeros
    - Count Trailing Zeros (`math/ctz`) FlowGraphBlockNames.TrailingZeros
    - Count One Bits (`math/popcnt`) FlowGraphBlockNames.OneBitsCounter
15. **Boolean Arithmetic Nodes**
    - Equality (`math/eq`) FlowGraphBlockNames.Equality
    - Boolean NOT (`math/not`) FlowGraphBlockNames.BitwiseNot
    - Boolean AND (`math/and`) FlowGraphBlockNames.BitwiseAnd
    - Boolean OR (`math/or`) FlowGraphBlockNames.BitwiseOr
    - Boolean XOR (`math/xor`) FlowGraphBlockNames.BitwiseXor

### Type Conversion Nodes
1. **Boolean Conversion Nodes**
   - Boolean to Integer (`type/boolToInt`) FlowGraphBlockNames.BooleanToInt
   - Boolean to Float (`type/boolToFloat`) FlowGraphBlockNames.BooleanToFloat
2. **Integer Conversion Nodes**
   - Integer to Boolean (`type/intToBool`) FlowGraphBlockNames.IntToBoolean
   - Integer to Float (`type/intToFloat`) FlowGraphBlockNames.IntToFloat
3. **Float Conversion Nodes**
   - Float to Boolean (`type/floatToBool`) FlowGraphBlockNames.FloatToBoolean
   - Float to Integer (`type/floatToInt`) FlowGraphBlockNames.FloatToInt

### Control Flow Nodes
1. **Sync Nodes**
   - Sequence (`flow/sequence`) FlowGraphBlockNames.Sequence
   - Branch (`flow/branch`) FlowGraphBlockNames.Branch
   - Switch (`flow/switch`) FlowGraphBlockNames.Switch
   - While Loop (`flow/while`) FlowGraphBlockNames.WhileLoop
   - For Loop (`flow/for`) FlowGraphBlockNames.ForLoop
   - Do N (`flow/doN`) FlowGraphBlockNames.DoN
   - Multi Gate (`flow/multiGate`) FlowGraphBlockNames.MultiGate
   - Wait All (`flow/waitAll`) FlowGraphBlockNames.WaitAll
   - Throttle (`flow/throttle`) FlowGraphBlockNames.Throttle
2. **Delay Nodes**
   - Set Delay (`flow/setDelay`) FlowGraphBlockNames.SetDelay
   - Cancel Delay (`flow/cancelDelay`) FlowGraphBlockNames.CancelDelay

### State Manipulation Nodes
1. **Custom Variable Access**
   - Variable Get (`variable/get`) FlowGraphBlockNames.GetVariable
   - Variable Set (`variable/set`) FlowGraphBlockNames.SetVariable
   - Variable Interpolate (`variable/interpolate`)
2. **Object Model Access** // TODO fully test this!!!
   - JSON Pointer Template Parsing (`pointer/get`) [FlowGraphBlockNames.GetProperty, FlowGraphBlockNames.JsonPointerParser]
   - Effective JSON Pointer Generation (`pointer/set`) [FlowGraphBlockNames.SetProperty, FlowGraphBlockNames.JsonPointerParser]
   - Pointer Get (`pointer/get`) [FlowGraphBlockNames.GetProperty, FlowGraphBlockNames.JsonPointerParser]
   - Pointer Set (`pointer/set`) [FlowGraphBlockNames.SetProperty, FlowGraphBlockNames.JsonPointerParser]
   - Pointer Interpolate (`pointer/interpolate`) [FlowGraphBlockNames.ValueInterpolation, FlowGraphBlockNames.JsonPointerParser, FlowGraphBlockNames.PlayAnimation, FlowGraphBlockNames.Easing]

### Animation Control Nodes
1. **Animation Play** (`animation/start`) FlowGraphBlockNames.PlayAnimation
2. **Animation Stop** (`animation/stop`) FlowGraphBlockNames.StopAnimation
3. **Animation Stop At** (`animation/stopAt`) FlowGraphBlockNames.StopAnimation

### Event Nodes
1. **Lifecycle Event Nodes**
   - On Start (`event/onStart`) FlowGraphBlockNames.SceneReadyEvent
   - On Tick (`event/onTick`) FlowGraphBlockNames.SceneTickEvent
2. **Custom Event Nodes**
   - Receive (`event/receive`) FlowGraphBlockNames.ReceiveCustomEvent
   - Send (`event/send`) FlowGraphBlockNames.SendCustomEvent

 */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2ludGVyYWN0aXZpdHlfZGVjbGFyYXRpb25NYXBwZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFiQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUErSkE7QUFFQTs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFUQTtBQUlBO0FBS0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09BO0FBSUE7QUFrS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUxBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9DdXN0b21UeXBlcy9mbG93R3JhcGhNYXRyaXgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS9kZWNsYXJhdGlvbk1hcHBlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCByZXByZXNlbnRzIGFuIGludGVnZXIgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoSW50ZWdlciB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW50ZWdlci4gSXRzIHR5cGVcclxuICAgICAqIGlzIGEgamF2YXNjcmlwdCBudW1iZXIuIFNob3VsZG4ndCBiZVxyXG4gICAgICogZGlyZWN0bHkgbW9kaWZpZWQgLSBpdCBpcyBwb3B1bGF0ZWQgYnlcclxuICAgICAqIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuX3RvSW50KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgZmxvYXQgdG8gYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSBuIHRoZSBmbG9hdCB0byBjb252ZXJ0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIG4gfCAwIC0gY29udmVydGluZyBpdCB0byBhIGludFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF90b0ludChuOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBuIHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdHdvIGludGVnZXJzIHRvZ2V0aGVyLlxyXG4gICAgICogQHBhcmFtIG90aGVyIHRoZSBvdGhlciBpbnRlZ2VyIHRvIGFkZFxyXG4gICAgICogQHJldHVybnMgYSBGbG93R3JhcGhJbnRlZ2VyIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgYWRkaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZChvdGhlcjogRmxvd0dyYXBoSW50ZWdlcik6IEZsb3dHcmFwaEludGVnZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvd0dyYXBoSW50ZWdlcih0aGlzLnZhbHVlICsgb3RoZXIudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VidHJhY3RzIHR3byBpbnRlZ2Vycy5cclxuICAgICAqIEBwYXJhbSBvdGhlciB0aGUgb3RoZXIgaW50ZWdlciB0byBzdWJ0cmFjdFxyXG4gICAgICogQHJldHVybnMgYSBGbG93R3JhcGhJbnRlZ2VyIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgc3VidHJhY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN1YnRyYWN0KG90aGVyOiBGbG93R3JhcGhJbnRlZ2VyKTogRmxvd0dyYXBoSW50ZWdlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhJbnRlZ2VyKHRoaXMudmFsdWUgLSBvdGhlci52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNdWx0aXBsaWVzIHR3byBpbnRlZ2Vycy5cclxuICAgICAqIEBwYXJhbSBvdGhlciB0aGUgb3RoZXIgaW50ZWdlciB0byBtdWx0aXBseVxyXG4gICAgICogQHJldHVybnMgYSBGbG93R3JhcGhJbnRlZ2VyIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgbXVsdGlwbGljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG11bHRpcGx5KG90aGVyOiBGbG93R3JhcGhJbnRlZ2VyKTogRmxvd0dyYXBoSW50ZWdlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhJbnRlZ2VyKE1hdGguaW11bCh0aGlzLnZhbHVlLCBvdGhlci52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGl2aWRlcyB0d28gaW50ZWdlcnMuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXIgdGhlIG90aGVyIGludGVnZXIgdG8gZGl2aWRlXHJcbiAgICAgKiBAcmV0dXJucyBhIEZsb3dHcmFwaEludGVnZXIgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBkaXZpc2lvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGl2aWRlKG90aGVyOiBGbG93R3JhcGhJbnRlZ2VyKTogRmxvd0dyYXBoSW50ZWdlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhJbnRlZ2VyKHRoaXMudmFsdWUgLyBvdGhlci52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2xhc3MgbmFtZSBvZiB0aGlzIHR5cGUuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhJbnRlZ2VyLkNsYXNzTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBhcmVzIHR3byBpbnRlZ2VycyBmb3IgZXF1YWxpdHkuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXIgdGhlIG90aGVyIGludGVnZXIgdG8gY29tcGFyZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVxdWFscyhvdGhlcjogRmxvd0dyYXBoSW50ZWdlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBvdGhlci52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENsYXNzTmFtZSA9IFwiRmxvd0dyYXBoSW50ZWdlclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2VzIGEgRmxvd0dyYXBoSW50ZWdlciBmcm9tIGEgc2VyaWFsaXphdGlvbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGUgbnVtYmVyIHRvIHBhcnNlXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZyb21WYWx1ZSh2YWx1ZTogbnVtYmVyKTogRmxvd0dyYXBoSW50ZWdlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhJbnRlZ2VyKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoXCJGbG93R3JhcGhJbnRlZ2VyXCIsIEZsb3dHcmFwaEludGVnZXIpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IzLCBWZWN0b3IyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBmbG93IGdyYXBoIG1hdHJpeC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF0cml4IGVsZW1lbnRzIHN0b3JlZCBpbiBhIHJvdy1tYWpvciBvcmRlci5cbiAgICAgKi9cbiAgICBtOiBudW1iZXJbXTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSB2ZWN0b3IgdXNpbmcgdGhpcyBtYXRyaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtLlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3IuXG4gICAgICovXG4gICAgdHJhbnNmb3JtVmVjdG9yKHY6IFZlY3RvclR5cGUpOiBWZWN0b3JUeXBlO1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHZlY3RvciB1c2luZyB0aGlzIG1hdHJpeCBhbmQgc3RvcmVzIHRoZSByZXN1bHQgaW4gYSByZWZlcmVuY2UgdmVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yIHRvIHRyYW5zZm9ybS5cbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gVGhlIHZlY3RvciB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3IuXG4gICAgICovXG4gICAgdHJhbnNmb3JtVmVjdG9yVG9SZWYodjogVmVjdG9yVHlwZSwgcmVzdWx0OiBWZWN0b3JUeXBlKTogVmVjdG9yVHlwZTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hdHJpeCBlbGVtZW50cyBhcyBhbiBhcnJheS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggZWxlbWVudHMgYXMgYW4gYXJyYXkuXG4gICAgICovXG4gICAgYXNBcnJheSgpOiBudW1iZXJbXTtcblxuICAgIC8qKlxuICAgICAqIENvcGllcyB0aGUgbWF0cml4IGVsZW1lbnRzIHRvIGFuIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGVtcHR5QXJyYXkgLSBUaGUgYXJyYXkgdG8gY29weSB0aGUgZWxlbWVudHMgdG8uXG4gICAgICogQHJldHVybnMgVGhlIGFycmF5IHdpdGggdGhlIG1hdHJpeCBlbGVtZW50cy5cbiAgICAgKi9cbiAgICB0b0FycmF5KGVtcHR5QXJyYXk6IG51bWJlcltdKTogbnVtYmVyW107XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtYXRyaXggZWxlbWVudHMgZnJvbSBhbiBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcnJheSAtIFRoZSBhcnJheSBjb250YWluaW5nIHRoZSBtYXRyaXggZWxlbWVudHMuXG4gICAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZyb21BcnJheShhcnJheTogbnVtYmVyW10pOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+O1xuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCB3aXRoIGFub3RoZXIgbWF0cml4IGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHJlZmVyZW5jZSBtYXRyaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3RoZXIgLSBUaGUgbWF0cml4IHRvIG11bHRpcGx5IHdpdGguXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIFRoZSBtYXRyaXggdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG1hdHJpeC5cbiAgICAgKi9cbiAgICBtdWx0aXBseVRvUmVmKG90aGVyOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+LCByZXN1bHQ6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT4pOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+O1xuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0aGlzIG1hdHJpeCB3aXRoIGFub3RoZXIgbWF0cml4LlxuICAgICAqIFRvIHN0YXogY29uZm9ybSB3aXRoIHRoZSBNYXRyaXggY2xhc3MsIHRoaXMgZG9lcyBCICogQVxuICAgICAqXG4gICAgICogQHBhcmFtIG90aGVyIC0gVGhlIG1hdHJpeCB0byBtdWx0aXBseSB3aXRoLlxuICAgICAqIEByZXR1cm5zIFRoZSByZXN1bHQgbWF0cml4LlxuICAgICAqL1xuICAgIG11bHRpcGx5KG90aGVyOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+KTogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPjtcblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgdGhpcyBtYXRyaXggYnkgYW5vdGhlciBtYXRyaXggYW5kIHN0b3JlcyB0aGUgcmVzdWx0IGluIGEgcmVmZXJlbmNlIG1hdHJpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvdGhlciAtIFRoZSBtYXRyaXggdG8gZGl2aWRlIGJ5LlxuICAgICAqIEBwYXJhbSByZXN1bHQgLSBUaGUgbWF0cml4IHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBtYXRyaXguXG4gICAgICovXG4gICAgZGl2aWRlVG9SZWYob3RoZXI6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT4sIHJlc3VsdDogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPik6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT47XG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIHRoaXMgbWF0cml4IGJ5IGFub3RoZXIgbWF0cml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIG90aGVyIC0gVGhlIG1hdHJpeCB0byBkaXZpZGUgYnkuXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBtYXRyaXguXG4gICAgICovXG4gICAgZGl2aWRlKG90aGVyOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+KTogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPjtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW5vdGhlciBtYXRyaXggdG8gdGhpcyBtYXRyaXggYW5kIHN0b3JlcyB0aGUgcmVzdWx0IGluIGEgcmVmZXJlbmNlIG1hdHJpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvdGhlciAtIFRoZSBtYXRyaXggdG8gYWRkLlxuICAgICAqIEBwYXJhbSByZXN1bHQgLSBUaGUgbWF0cml4IHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBtYXRyaXguXG4gICAgICovXG4gICAgYWRkVG9SZWYob3RoZXI6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT4sIHJlc3VsdDogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPik6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT47XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFub3RoZXIgbWF0cml4IHRvIHRoaXMgbWF0cml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIG90aGVyIC0gVGhlIG1hdHJpeCB0byBhZGQuXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBtYXRyaXguXG4gICAgICovXG4gICAgYWRkKG90aGVyOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+KTogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPjtcblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIG1hdHJpeCBmcm9tIHRoaXMgbWF0cml4IGFuZCBzdG9yZXMgdGhlIHJlc3VsdCBpbiBhIHJlZmVyZW5jZSBtYXRyaXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3RoZXIgLSBUaGUgbWF0cml4IHRvIHN1YnRyYWN0LlxuICAgICAqIEBwYXJhbSByZXN1bHQgLSBUaGUgbWF0cml4IHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgICogQHJldHVybnMgVGhlIHJlc3VsdCBtYXRyaXguXG4gICAgICovXG4gICAgc3VidHJhY3RUb1JlZihvdGhlcjogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPiwgcmVzdWx0OiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+KTogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPjtcblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyBhbm90aGVyIG1hdHJpeCBmcm9tIHRoaXMgbWF0cml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIG90aGVyIC0gVGhlIG1hdHJpeCB0byBzdWJ0cmFjdC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG1hdHJpeC5cbiAgICAgKi9cbiAgICBzdWJ0cmFjdChvdGhlcjogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3JUeXBlPik6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT47XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc3Bvc2VzIHRoaXMgbWF0cml4LlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZWQgbWF0cml4LlxuICAgICAqL1xuICAgIHRyYW5zcG9zZSgpOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+O1xuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRldGVybWluYW50IG9mIHRoaXMgbWF0cml4LlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIGRldGVybWluYW50IG9mIHRoZSBtYXRyaXguXG4gICAgICovXG4gICAgZGV0ZXJtaW5hbnQoKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgdGhpcyBtYXRyaXguXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgaW52ZXJzZSBvZiB0aGUgbWF0cml4LlxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgdGhlIG1hdHJpeCBpcyBub3QgaW52ZXJ0aWJsZS5cbiAgICAgKi9cbiAgICBpbnZlcnNlKCk6IElGbG93R3JhcGhNYXRyaXg8VmVjdG9yVHlwZT47XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgbWF0cml4LlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIGNsYXNzIG5hbWUuXG4gICAgICovXG4gICAgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIG1hdHJpeCBpcyBlcXVhbCB0byBhbm90aGVyIG1hdHJpeCB3aXRoaW4gYW4gb3B0aW9uYWwgZXBzaWxvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvdGhlciAtIFRoZSBtYXRyaXggdG8gY29tcGFyZSB3aXRoLlxuICAgICAqIEBwYXJhbSBlcHNpbG9uIC0gVGhlIG9wdGlvbmFsIGVwc2lsb24gZm9yIGNvbXBhcmlzb24uXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZXF1YWxzKG90aGVyOiBJRmxvd0dyYXBoTWF0cml4PFZlY3RvclR5cGU+LCBlcHNpbG9uPzogbnVtYmVyKTogYm9vbGVhbjtcbn1cblxuLy8gTm90ZSAtIHRoZSBtYXRyaXggY2xhc3NlcyBhcmUgYmFzaWNhbGx5IGNvbHVtbi1tYWpvciwgYW5kIHdvcmsgc2ltaWxhcmx5IHRvIEJhYnlsb24uanMnIE1hdHJpeCBjbGFzcy5cblxuLyoqXG4gKiBBIDJ4MiBtYXRyaXguXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhNYXRyaXgyRCBpbXBsZW1lbnRzIElGbG93R3JhcGhNYXRyaXg8VmVjdG9yMj4ge1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBfbTogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcihtOiBudW1iZXJbXSA9IFsxLCAwLCAwLCAxXSkge1xuICAgICAgICB0aGlzLl9tID0gbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG0oKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtVmVjdG9yKHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtVmVjdG9yVG9SZWYodiwgbmV3IFZlY3RvcjIoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybVZlY3RvclRvUmVmKHY6IFZlY3RvcjIsIHJlc3VsdDogVmVjdG9yMik6IFZlY3RvcjIge1xuICAgICAgICByZXN1bHQueCA9IHYueCAqIHRoaXMuX21bMF0gKyB2LnkgKiB0aGlzLl9tWzFdO1xuICAgICAgICByZXN1bHQueSA9IHYueCAqIHRoaXMuX21bMl0gKyB2LnkgKiB0aGlzLl9tWzNdO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc0FycmF5KCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9BcnJheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0FycmF5KGVtcHR5QXJyYXk6IG51bWJlcltdID0gW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBlbXB0eUFycmF5W2ldID0gdGhpcy5fbVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW1wdHlBcnJheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZnJvbUFycmF5KGFycmF5OiBudW1iZXJbXSk6IEZsb3dHcmFwaE1hdHJpeDJEIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX21baV0gPSBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgbXVsdGlwbHlUb1JlZihvdGhlcjogRmxvd0dyYXBoTWF0cml4MkQsIHJlc3VsdDogRmxvd0dyYXBoTWF0cml4MkQpOiBGbG93R3JhcGhNYXRyaXgyRCB7XG4gICAgICAgIGNvbnN0IG90aGVyTWF0cml4ID0gb3RoZXIuX207XG4gICAgICAgIGNvbnN0IHRoaXNNYXRyaXggPSB0aGlzLl9tO1xuICAgICAgICBjb25zdCByID0gcmVzdWx0Ll9tO1xuICAgICAgICAvLyBvdGhlciAqIHRoaXNcbiAgICAgICAgclswXSA9IG90aGVyTWF0cml4WzBdICogdGhpc01hdHJpeFswXSArIG90aGVyTWF0cml4WzFdICogdGhpc01hdHJpeFsyXTtcbiAgICAgICAgclsxXSA9IG90aGVyTWF0cml4WzBdICogdGhpc01hdHJpeFsxXSArIG90aGVyTWF0cml4WzFdICogdGhpc01hdHJpeFszXTtcbiAgICAgICAgclsyXSA9IG90aGVyTWF0cml4WzJdICogdGhpc01hdHJpeFswXSArIG90aGVyTWF0cml4WzNdICogdGhpc01hdHJpeFsyXTtcbiAgICAgICAgclszXSA9IG90aGVyTWF0cml4WzJdICogdGhpc01hdHJpeFsxXSArIG90aGVyTWF0cml4WzNdICogdGhpc01hdHJpeFszXTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBtdWx0aXBseShvdGhlcjogRmxvd0dyYXBoTWF0cml4MkQpOiBGbG93R3JhcGhNYXRyaXgyRCB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5VG9SZWYob3RoZXIsIG5ldyBGbG93R3JhcGhNYXRyaXgyRCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGl2aWRlVG9SZWYob3RoZXI6IEZsb3dHcmFwaE1hdHJpeDJELCByZXN1bHQ6IEZsb3dHcmFwaE1hdHJpeDJEKTogRmxvd0dyYXBoTWF0cml4MkQge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgY29uc3QgbyA9IG90aGVyLl9tO1xuICAgICAgICBjb25zdCByID0gcmVzdWx0Ll9tO1xuXG4gICAgICAgIHJbMF0gPSBtWzBdIC8gb1swXTtcbiAgICAgICAgclsxXSA9IG1bMV0gLyBvWzFdO1xuICAgICAgICByWzJdID0gbVsyXSAvIG9bMl07XG4gICAgICAgIHJbM10gPSBtWzNdIC8gb1szXTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXZpZGUob3RoZXI6IEZsb3dHcmFwaE1hdHJpeDJEKTogRmxvd0dyYXBoTWF0cml4MkQge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVUb1JlZihvdGhlciwgbmV3IEZsb3dHcmFwaE1hdHJpeDJEKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUb1JlZihvdGhlcjogRmxvd0dyYXBoTWF0cml4MkQsIHJlc3VsdDogRmxvd0dyYXBoTWF0cml4MkQpOiBGbG93R3JhcGhNYXRyaXgyRCB7XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLl9tO1xuICAgICAgICBjb25zdCBvID0gb3RoZXIubTtcbiAgICAgICAgY29uc3QgciA9IHJlc3VsdC5tO1xuXG4gICAgICAgIHJbMF0gPSBtWzBdICsgb1swXTtcbiAgICAgICAgclsxXSA9IG1bMV0gKyBvWzFdO1xuICAgICAgICByWzJdID0gbVsyXSArIG9bMl07XG4gICAgICAgIHJbM10gPSBtWzNdICsgb1szXTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQob3RoZXI6IEZsb3dHcmFwaE1hdHJpeDJEKTogRmxvd0dyYXBoTWF0cml4MkQge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb1JlZihvdGhlciwgbmV3IEZsb3dHcmFwaE1hdHJpeDJEKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdWJ0cmFjdFRvUmVmKG90aGVyOiBGbG93R3JhcGhNYXRyaXgyRCwgcmVzdWx0OiBGbG93R3JhcGhNYXRyaXgyRCk6IEZsb3dHcmFwaE1hdHJpeDJEIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuX207XG4gICAgICAgIGNvbnN0IG8gPSBvdGhlci5tO1xuICAgICAgICBjb25zdCByID0gcmVzdWx0Lm07XG5cbiAgICAgICAgclswXSA9IG1bMF0gLSBvWzBdO1xuICAgICAgICByWzFdID0gbVsxXSAtIG9bMV07XG4gICAgICAgIHJbMl0gPSBtWzJdIC0gb1syXTtcbiAgICAgICAgclszXSA9IG1bM10gLSBvWzNdO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN1YnRyYWN0KG90aGVyOiBGbG93R3JhcGhNYXRyaXgyRCk6IEZsb3dHcmFwaE1hdHJpeDJEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3RUb1JlZihvdGhlciwgbmV3IEZsb3dHcmFwaE1hdHJpeDJEKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc3Bvc2UoKTogRmxvd0dyYXBoTWF0cml4MkQge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhNYXRyaXgyRChbbVswXSwgbVsyXSwgbVsxXSwgbVszXV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRlcm1pbmFudCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgcmV0dXJuIG1bMF0gKiBtWzNdIC0gbVsxXSAqIG1bMl07XG4gICAgfVxuXG4gICAgcHVibGljIGludmVyc2UoKTogRmxvd0dyYXBoTWF0cml4MkQge1xuICAgICAgICBjb25zdCBkZXQgPSB0aGlzLmRldGVybWluYW50KCk7XG4gICAgICAgIGlmIChkZXQgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1hdHJpeCBpcyBub3QgaW52ZXJ0aWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgY29uc3QgaW52RGV0ID0gMSAvIGRldDtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhNYXRyaXgyRChbbVszXSAqIGludkRldCwgLW1bMV0gKiBpbnZEZXQsIC1tWzJdICogaW52RGV0LCBtWzBdICogaW52RGV0XSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVxdWFscyhvdGhlcjogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3IyPiwgZXBzaWxvbjogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgY29uc3QgbyA9IG90aGVyLm07XG4gICAgICAgIGlmIChlcHNpbG9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbVswXSA9PT0gb1swXSAmJiBtWzFdID09PSBvWzFdICYmIG1bMl0gPT09IG9bMl0gJiYgbVszXSA9PT0gb1szXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5hYnMobVswXSAtIG9bMF0pIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhtWzFdIC0gb1sxXSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKG1bMl0gLSBvWzJdKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMobVszXSAtIG9bM10pIDwgZXBzaWxvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkZsb3dHcmFwaE1hdHJpeDJEXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgRmxvd0dyYXBoTWF0cml4MkQoJHt0aGlzLl9tLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB9XG59XG5cbi8qKlxuICogQSAzeDMgbWF0cml4LlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTWF0cml4M0QgaW1wbGVtZW50cyBJRmxvd0dyYXBoTWF0cml4PFZlY3RvcjM+IHtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgX206IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IoYXJyYXk6IG51bWJlcltdID0gWzEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdKSB7XG4gICAgICAgIHRoaXMuX20gPSBhcnJheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG0oKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtVmVjdG9yKHY6IFZlY3RvcjMpOiBWZWN0b3IzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtVmVjdG9yVG9SZWYodiwgbmV3IFZlY3RvcjMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRyYW5zZm9ybVZlY3RvclRvUmVmKHY6IFZlY3RvcjMsIHJlc3VsdDogVmVjdG9yMyk6IFZlY3RvcjMge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgcmVzdWx0LnggPSB2LnggKiBtWzBdICsgdi55ICogbVsxXSArIHYueiAqIG1bMl07XG4gICAgICAgIHJlc3VsdC55ID0gdi54ICogbVszXSArIHYueSAqIG1bNF0gKyB2LnogKiBtWzVdO1xuICAgICAgICByZXN1bHQueiA9IHYueCAqIG1bNl0gKyB2LnkgKiBtWzddICsgdi56ICogbVs4XTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbXVsdGlwbHlUb1JlZihvdGhlcjogRmxvd0dyYXBoTWF0cml4M0QsIHJlc3VsdDogRmxvd0dyYXBoTWF0cml4M0QpOiBGbG93R3JhcGhNYXRyaXgzRCB7XG4gICAgICAgIGNvbnN0IG90aGVyTWF0cml4ID0gb3RoZXIuX207XG4gICAgICAgIGNvbnN0IHRoaXNNYXRyaXggPSB0aGlzLl9tO1xuICAgICAgICBjb25zdCByID0gcmVzdWx0Lm07XG5cbiAgICAgICAgclswXSA9IG90aGVyTWF0cml4WzBdICogdGhpc01hdHJpeFswXSArIG90aGVyTWF0cml4WzFdICogdGhpc01hdHJpeFszXSArIG90aGVyTWF0cml4WzJdICogdGhpc01hdHJpeFs2XTtcbiAgICAgICAgclsxXSA9IG90aGVyTWF0cml4WzBdICogdGhpc01hdHJpeFsxXSArIG90aGVyTWF0cml4WzFdICogdGhpc01hdHJpeFs0XSArIG90aGVyTWF0cml4WzJdICogdGhpc01hdHJpeFs3XTtcbiAgICAgICAgclsyXSA9IG90aGVyTWF0cml4WzBdICogdGhpc01hdHJpeFsyXSArIG90aGVyTWF0cml4WzFdICogdGhpc01hdHJpeFs1XSArIG90aGVyTWF0cml4WzJdICogdGhpc01hdHJpeFs4XTtcblxuICAgICAgICByWzNdID0gb3RoZXJNYXRyaXhbM10gKiB0aGlzTWF0cml4WzBdICsgb3RoZXJNYXRyaXhbNF0gKiB0aGlzTWF0cml4WzNdICsgb3RoZXJNYXRyaXhbNV0gKiB0aGlzTWF0cml4WzZdO1xuICAgICAgICByWzRdID0gb3RoZXJNYXRyaXhbM10gKiB0aGlzTWF0cml4WzFdICsgb3RoZXJNYXRyaXhbNF0gKiB0aGlzTWF0cml4WzRdICsgb3RoZXJNYXRyaXhbNV0gKiB0aGlzTWF0cml4WzddO1xuICAgICAgICByWzVdID0gb3RoZXJNYXRyaXhbM10gKiB0aGlzTWF0cml4WzJdICsgb3RoZXJNYXRyaXhbNF0gKiB0aGlzTWF0cml4WzVdICsgb3RoZXJNYXRyaXhbNV0gKiB0aGlzTWF0cml4WzhdO1xuXG4gICAgICAgIHJbNl0gPSBvdGhlck1hdHJpeFs2XSAqIHRoaXNNYXRyaXhbMF0gKyBvdGhlck1hdHJpeFs3XSAqIHRoaXNNYXRyaXhbM10gKyBvdGhlck1hdHJpeFs4XSAqIHRoaXNNYXRyaXhbNl07XG4gICAgICAgIHJbN10gPSBvdGhlck1hdHJpeFs2XSAqIHRoaXNNYXRyaXhbMV0gKyBvdGhlck1hdHJpeFs3XSAqIHRoaXNNYXRyaXhbNF0gKyBvdGhlck1hdHJpeFs4XSAqIHRoaXNNYXRyaXhbN107XG4gICAgICAgIHJbOF0gPSBvdGhlck1hdHJpeFs2XSAqIHRoaXNNYXRyaXhbMl0gKyBvdGhlck1hdHJpeFs3XSAqIHRoaXNNYXRyaXhbNV0gKyBvdGhlck1hdHJpeFs4XSAqIHRoaXNNYXRyaXhbOF07XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbXVsdGlwbHkob3RoZXI6IEZsb3dHcmFwaE1hdHJpeDNEKTogRmxvd0dyYXBoTWF0cml4M0Qge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseVRvUmVmKG90aGVyLCBuZXcgRmxvd0dyYXBoTWF0cml4M0QoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpdmlkZVRvUmVmKG90aGVyOiBGbG93R3JhcGhNYXRyaXgzRCwgcmVzdWx0OiBGbG93R3JhcGhNYXRyaXgzRCk6IEZsb3dHcmFwaE1hdHJpeDNEIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuX207XG4gICAgICAgIGNvbnN0IG8gPSBvdGhlci5tO1xuICAgICAgICBjb25zdCByID0gcmVzdWx0Lm07XG5cbiAgICAgICAgclswXSA9IG1bMF0gLyBvWzBdO1xuICAgICAgICByWzFdID0gbVsxXSAvIG9bMV07XG4gICAgICAgIHJbMl0gPSBtWzJdIC8gb1syXTtcbiAgICAgICAgclszXSA9IG1bM10gLyBvWzNdO1xuICAgICAgICByWzRdID0gbVs0XSAvIG9bNF07XG4gICAgICAgIHJbNV0gPSBtWzVdIC8gb1s1XTtcbiAgICAgICAgcls2XSA9IG1bNl0gLyBvWzZdO1xuICAgICAgICByWzddID0gbVs3XSAvIG9bN107XG4gICAgICAgIHJbOF0gPSBtWzhdIC8gb1s4XTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXZpZGUob3RoZXI6IEZsb3dHcmFwaE1hdHJpeDNEKTogRmxvd0dyYXBoTWF0cml4M0Qge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVUb1JlZihvdGhlciwgbmV3IEZsb3dHcmFwaE1hdHJpeDNEKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUb1JlZihvdGhlcjogRmxvd0dyYXBoTWF0cml4M0QsIHJlc3VsdDogRmxvd0dyYXBoTWF0cml4M0QpOiBGbG93R3JhcGhNYXRyaXgzRCB7XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLl9tO1xuICAgICAgICBjb25zdCBvID0gb3RoZXIubTtcbiAgICAgICAgY29uc3QgciA9IHJlc3VsdC5tO1xuXG4gICAgICAgIHJbMF0gPSBtWzBdICsgb1swXTtcbiAgICAgICAgclsxXSA9IG1bMV0gKyBvWzFdO1xuICAgICAgICByWzJdID0gbVsyXSArIG9bMl07XG4gICAgICAgIHJbM10gPSBtWzNdICsgb1szXTtcbiAgICAgICAgcls0XSA9IG1bNF0gKyBvWzRdO1xuICAgICAgICByWzVdID0gbVs1XSArIG9bNV07XG4gICAgICAgIHJbNl0gPSBtWzZdICsgb1s2XTtcbiAgICAgICAgcls3XSA9IG1bN10gKyBvWzddO1xuICAgICAgICByWzhdID0gbVs4XSArIG9bOF07XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKG90aGVyOiBGbG93R3JhcGhNYXRyaXgzRCk6IEZsb3dHcmFwaE1hdHJpeDNEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9SZWYob3RoZXIsIG5ldyBGbG93R3JhcGhNYXRyaXgzRCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VidHJhY3RUb1JlZihvdGhlcjogRmxvd0dyYXBoTWF0cml4M0QsIHJlc3VsdDogRmxvd0dyYXBoTWF0cml4M0QpOiBGbG93R3JhcGhNYXRyaXgzRCB7XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLl9tO1xuICAgICAgICBjb25zdCBvID0gb3RoZXIubTtcbiAgICAgICAgY29uc3QgciA9IHJlc3VsdC5tO1xuXG4gICAgICAgIHJbMF0gPSBtWzBdIC0gb1swXTtcbiAgICAgICAgclsxXSA9IG1bMV0gLSBvWzFdO1xuICAgICAgICByWzJdID0gbVsyXSAtIG9bMl07XG4gICAgICAgIHJbM10gPSBtWzNdIC0gb1szXTtcbiAgICAgICAgcls0XSA9IG1bNF0gLSBvWzRdO1xuICAgICAgICByWzVdID0gbVs1XSAtIG9bNV07XG4gICAgICAgIHJbNl0gPSBtWzZdIC0gb1s2XTtcbiAgICAgICAgcls3XSA9IG1bN10gLSBvWzddO1xuICAgICAgICByWzhdID0gbVs4XSAtIG9bOF07XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VidHJhY3Qob3RoZXI6IEZsb3dHcmFwaE1hdHJpeDNEKTogRmxvd0dyYXBoTWF0cml4M0Qge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdFRvUmVmKG90aGVyLCBuZXcgRmxvd0dyYXBoTWF0cml4M0QoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvQXJyYXkoZW1wdHlBcnJheTogbnVtYmVyW10gPSBbXSk6IG51bWJlcltdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGVtcHR5QXJyYXlbaV0gPSB0aGlzLl9tW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbXB0eUFycmF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc0FycmF5KCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9BcnJheSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmcm9tQXJyYXkoYXJyYXk6IG51bWJlcltdKTogRmxvd0dyYXBoTWF0cml4M0Qge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbVtpXSA9IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc3Bvc2UoKTogRmxvd0dyYXBoTWF0cml4M0Qge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG93R3JhcGhNYXRyaXgzRChbbVswXSwgbVszXSwgbVs2XSwgbVsxXSwgbVs0XSwgbVs3XSwgbVsyXSwgbVs1XSwgbVs4XV0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRlcm1pbmFudCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgcmV0dXJuIG1bMF0gKiAobVs0XSAqIG1bOF0gLSBtWzVdICogbVs3XSkgLSBtWzFdICogKG1bM10gKiBtWzhdIC0gbVs1XSAqIG1bNl0pICsgbVsyXSAqIChtWzNdICogbVs3XSAtIG1bNF0gKiBtWzZdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW52ZXJzZSgpOiBGbG93R3JhcGhNYXRyaXgzRCB7XG4gICAgICAgIGNvbnN0IGRldCA9IHRoaXMuZGV0ZXJtaW5hbnQoKTtcbiAgICAgICAgaWYgKGRldCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWF0cml4IGlzIG5vdCBpbnZlcnRpYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLl9tO1xuICAgICAgICBjb25zdCBpbnZEZXQgPSAxIC8gZGV0O1xuICAgICAgICByZXR1cm4gbmV3IEZsb3dHcmFwaE1hdHJpeDNEKFtcbiAgICAgICAgICAgIChtWzRdICogbVs4XSAtIG1bNV0gKiBtWzddKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzJdICogbVs3XSAtIG1bMV0gKiBtWzhdKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzFdICogbVs1XSAtIG1bMl0gKiBtWzRdKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzVdICogbVs2XSAtIG1bM10gKiBtWzhdKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzBdICogbVs4XSAtIG1bMl0gKiBtWzZdKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzJdICogbVszXSAtIG1bMF0gKiBtWzVdKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzNdICogbVs3XSAtIG1bNF0gKiBtWzZdKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzFdICogbVs2XSAtIG1bMF0gKiBtWzddKSAqIGludkRldCxcbiAgICAgICAgICAgIChtWzBdICogbVs0XSAtIG1bMV0gKiBtWzNdKSAqIGludkRldCxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVxdWFscyhvdGhlcjogSUZsb3dHcmFwaE1hdHJpeDxWZWN0b3IzPiwgZXBzaWxvbjogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5fbTtcbiAgICAgICAgY29uc3QgbyA9IG90aGVyLm07XG4gICAgICAgIC8vIHBlcmZvcm1hbmNlIHNob3J0Y3V0XG4gICAgICAgIGlmIChlcHNpbG9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbVswXSA9PT0gb1swXSAmJiBtWzFdID09PSBvWzFdICYmIG1bMl0gPT09IG9bMl0gJiYgbVszXSA9PT0gb1szXSAmJiBtWzRdID09PSBvWzRdICYmIG1bNV0gPT09IG9bNV0gJiYgbVs2XSA9PT0gb1s2XSAmJiBtWzddID09PSBvWzddICYmIG1bOF0gPT09IG9bOF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIE1hdGguYWJzKG1bMF0gLSBvWzBdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bMV0gLSBvWzFdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bMl0gLSBvWzJdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bM10gLSBvWzNdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bNF0gLSBvWzRdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bNV0gLSBvWzVdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bNl0gLSBvWzZdKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bN10gLSBvWzddKSA8IGVwc2lsb24gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKG1bOF0gLSBvWzhdKSA8IGVwc2lsb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkZsb3dHcmFwaE1hdHJpeDNEXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgRmxvd0dyYXBoTWF0cml4M0QoJHt0aGlzLl9tLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0LCBNYXRyaXgsIFF1YXRlcm5pb24gfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhJbnRlZ2VyIH0gZnJvbSBcIi4vQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhNYXRyaXgyRCwgRmxvd0dyYXBoTWF0cml4M0QgfSBmcm9tIFwiLi9DdXN0b21UeXBlcy9mbG93R3JhcGhNYXRyaXhcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZXMgc3VwcG9ydGVkIGJ5IHRoZSBmbG93IGdyYXBoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRmxvd0dyYXBoVHlwZXMge1xyXG4gICAgQW55ID0gXCJhbnlcIixcclxuICAgIFN0cmluZyA9IFwic3RyaW5nXCIsXHJcbiAgICBOdW1iZXIgPSBcIm51bWJlclwiLFxyXG4gICAgQm9vbGVhbiA9IFwiYm9vbGVhblwiLFxyXG4gICAgT2JqZWN0ID0gXCJvYmplY3RcIixcclxuICAgIEludGVnZXIgPSBcIkZsb3dHcmFwaEludGVnZXJcIixcclxuICAgIFZlY3RvcjIgPSBcIlZlY3RvcjJcIixcclxuICAgIFZlY3RvcjMgPSBcIlZlY3RvcjNcIixcclxuICAgIFZlY3RvcjQgPSBcIlZlY3RvcjRcIixcclxuICAgIFF1YXRlcm5pb24gPSBcIlF1YXRlcm5pb25cIixcclxuICAgIE1hdHJpeCA9IFwiTWF0cml4XCIsXHJcbiAgICBNYXRyaXgyRCA9IFwiTWF0cml4MkRcIixcclxuICAgIE1hdHJpeDNEID0gXCJNYXRyaXgzRFwiLFxyXG4gICAgQ29sb3IzID0gXCJDb2xvcjNcIixcclxuICAgIENvbG9yNCA9IFwiQ29sb3I0XCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHJpY2ggdHlwZSByZXByZXNlbnRzIGV4dHJhIGluZm9ybWF0aW9uIGFib3V0IGEgdHlwZSxcclxuICogc3VjaCBhcyBpdHMgbmFtZSBhbmQgYSBkZWZhdWx0IHZhbHVlIGNvbnN0cnVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJpY2hUeXBlPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHRyYW5zZm9ybSBhIHZhbHVlIG9mIGFueSB0eXBlIGludG8gYSB2YWx1ZSBvZiB0aGlzIHJpY2ggdHlwZS5cclxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQsIGZvciBleGFtcGxlLCBiZXR3ZWVuIHZlY3RvcjQgYW5kIHF1YXRlcm5pb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0eXBlVHJhbnNmb3JtZXI6ICh2YWx1ZTogYW55KSA9PiBUO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBuYW1lIGdpdmVuIHRvIHRoZSB0eXBlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSB0eXBlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IFQsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFstMV0gVGhlIEFOSU1BVElPTlRZUEUgb2YgdGhlIHR5cGUsIGlmIGF2YWlsYWJsZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhbmltYXRpb25UeXBlOiBudW1iZXIgPSAtMVxyXG4gICAgKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGlzIHJpY2ggdHlwZSBpbnRvIGEgc2VyaWFsaXphdGlvbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xyXG4gICAgICovXHJcbiAgICBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55KSB7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC50eXBlTmFtZSA9IHRoaXMudHlwZU5hbWU7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kZWZhdWx0VmFsdWUgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlQW55OiBSaWNoVHlwZTxhbnk+ID0gbmV3IFJpY2hUeXBlKEZsb3dHcmFwaFR5cGVzLkFueSwgdW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSaWNoVHlwZVN0cmluZzogUmljaFR5cGU8c3RyaW5nPiA9IG5ldyBSaWNoVHlwZShGbG93R3JhcGhUeXBlcy5TdHJpbmcsIFwiXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlTnVtYmVyOiBSaWNoVHlwZTxudW1iZXI+ID0gbmV3IFJpY2hUeXBlKEZsb3dHcmFwaFR5cGVzLk51bWJlciwgMCwgQ29uc3RhbnRzLkFOSU1BVElPTlRZUEVfRkxPQVQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlQm9vbGVhbjogUmljaFR5cGU8Ym9vbGVhbj4gPSBuZXcgUmljaFR5cGUoRmxvd0dyYXBoVHlwZXMuQm9vbGVhbiwgZmFsc2UpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlVmVjdG9yMjogUmljaFR5cGU8VmVjdG9yMj4gPSBuZXcgUmljaFR5cGUoRmxvd0dyYXBoVHlwZXMuVmVjdG9yMiwgVmVjdG9yMi5aZXJvKCksIENvbnN0YW50cy5BTklNQVRJT05UWVBFX1ZFQ1RPUjIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlVmVjdG9yMzogUmljaFR5cGU8VmVjdG9yMz4gPSBuZXcgUmljaFR5cGUoRmxvd0dyYXBoVHlwZXMuVmVjdG9yMywgVmVjdG9yMy5aZXJvKCksIENvbnN0YW50cy5BTklNQVRJT05UWVBFX1ZFQ1RPUjMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlVmVjdG9yNDogUmljaFR5cGU8VmVjdG9yND4gPSBuZXcgUmljaFR5cGUoRmxvd0dyYXBoVHlwZXMuVmVjdG9yNCwgVmVjdG9yNC5aZXJvKCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlTWF0cml4OiBSaWNoVHlwZTxNYXRyaXg+ID0gbmV3IFJpY2hUeXBlKEZsb3dHcmFwaFR5cGVzLk1hdHJpeCwgTWF0cml4LklkZW50aXR5KCksIENvbnN0YW50cy5BTklNQVRJT05UWVBFX01BVFJJWCk7XHJcblxyXG5leHBvcnQgY29uc3QgUmljaFR5cGVNYXRyaXgyRDogUmljaFR5cGU8Rmxvd0dyYXBoTWF0cml4MkQ+ID0gbmV3IFJpY2hUeXBlKEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJELCBuZXcgRmxvd0dyYXBoTWF0cml4MkQoKSk7XHJcblxyXG5leHBvcnQgY29uc3QgUmljaFR5cGVNYXRyaXgzRDogUmljaFR5cGU8Rmxvd0dyYXBoTWF0cml4M0Q+ID0gbmV3IFJpY2hUeXBlKEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNELCBuZXcgRmxvd0dyYXBoTWF0cml4M0QoKSk7XHJcblxyXG5leHBvcnQgY29uc3QgUmljaFR5cGVDb2xvcjM6IFJpY2hUeXBlPENvbG9yMz4gPSBuZXcgUmljaFR5cGUoRmxvd0dyYXBoVHlwZXMuQ29sb3IzLCBDb2xvcjMuQmxhY2soKSwgQ29uc3RhbnRzLkFOSU1BVElPTlRZUEVfQ09MT1IzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSaWNoVHlwZUNvbG9yNDogUmljaFR5cGU8Q29sb3I0PiA9IG5ldyBSaWNoVHlwZShGbG93R3JhcGhUeXBlcy5Db2xvcjQsIG5ldyBDb2xvcjQoMCwgMCwgMCwgMCksIENvbnN0YW50cy5BTklNQVRJT05UWVBFX0NPTE9SNCk7XHJcblxyXG5leHBvcnQgY29uc3QgUmljaFR5cGVRdWF0ZXJuaW9uOiBSaWNoVHlwZTxRdWF0ZXJuaW9uPiA9IG5ldyBSaWNoVHlwZShGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uLCBRdWF0ZXJuaW9uLklkZW50aXR5KCksIENvbnN0YW50cy5BTklNQVRJT05UWVBFX1FVQVRFUk5JT04pO1xyXG5SaWNoVHlwZVF1YXRlcm5pb24udHlwZVRyYW5zZm9ybWVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGlmICh2YWx1ZS5nZXRDbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAodmFsdWUuZ2V0Q2xhc3NOYW1lKCkgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFF1YXRlcm5pb24uRnJvbUFycmF5KHZhbHVlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5nZXRDbGFzc05hbWUoKSA9PT0gRmxvd0dyYXBoVHlwZXMuVmVjdG9yMykge1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhdGVybmlvbi5Gcm9tRXVsZXJWZWN0b3IodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUuZ2V0Q2xhc3NOYW1lKCkgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhdGVybmlvbi5Gcm9tUm90YXRpb25NYXRyaXgodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlcjogUmljaFR5cGU8Rmxvd0dyYXBoSW50ZWdlcj4gPSBuZXcgUmljaFR5cGUoRmxvd0dyYXBoVHlwZXMuSW50ZWdlciwgbmV3IEZsb3dHcmFwaEludGVnZXIoMCksIENvbnN0YW50cy5BTklNQVRJT05UWVBFX0ZMT0FUKTtcclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIHZhbHVlLCB0cnkgdG8gZGVkdWNlIGl0cyByaWNoIHR5cGUuXHJcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gZGVkdWNlIHRoZSByaWNoIHR5cGUgZnJvbVxyXG4gKiBAcmV0dXJucyB0aGUgdmFsdWUncyByaWNoIHR5cGUsIG9yIFJpY2hUeXBlQW55IGlmIHRoZSB0eXBlIGNvdWxkIG5vdCBiZSBkZWR1Y2VkLlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmljaFR5cGVGcm9tVmFsdWU8VD4odmFsdWU6IFQpOiBSaWNoVHlwZTxUPiB7XHJcbiAgICBjb25zdCBhbnlWYWx1ZSA9IHZhbHVlIGFzIGFueTtcclxuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5TdHJpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVN0cmluZyBhcyBSaWNoVHlwZTxUPjtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk51bWJlcjpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlTnVtYmVyIGFzIFJpY2hUeXBlPFQ+O1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuQm9vbGVhbjpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlQm9vbGVhbiBhcyBSaWNoVHlwZTxUPjtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk9iamVjdDpcclxuICAgICAgICAgICAgaWYgKGFueVZhbHVlLmdldENsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhbnlWYWx1ZS5nZXRDbGFzc05hbWUoKSBhcyBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVZlY3RvcjIgYXMgUmljaFR5cGU8VD47XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmljaFR5cGVWZWN0b3IzIGFzIFJpY2hUeXBlPFQ+O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlVmVjdG9yNCBhcyBSaWNoVHlwZTxUPjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlTWF0cml4IGFzIFJpY2hUeXBlPFQ+O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuQ29sb3IzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmljaFR5cGVDb2xvcjMgYXMgUmljaFR5cGU8VD47XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5Db2xvcjQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZUNvbG9yNCBhcyBSaWNoVHlwZTxUPjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVF1YXRlcm5pb24gYXMgUmljaFR5cGU8VD47XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyIGFzIFJpY2hUeXBlPFQ+O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4MkQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZU1hdHJpeDJEIGFzIFJpY2hUeXBlPFQ+O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4M0Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZU1hdHJpeDNEIGFzIFJpY2hUeXBlPFQ+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZUFueSBhcyBSaWNoVHlwZTxUPjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVBbnkgYXMgUmljaFR5cGU8VD47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIGZsb3cgZ3JhcGggdHlwZSwgcmV0dXJuIHRoZSByaWNoIHR5cGUgdGhhdCBjb3JyZXNwb25kcyB0byBpdC5cclxuICogQHBhcmFtIGZsb3dHcmFwaFR5cGUgdGhlIGZsb3cgZ3JhcGggdHlwZVxyXG4gKiBAcmV0dXJucyB0aGUgcmljaCB0eXBlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGZsb3cgZ3JhcGggdHlwZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoZmxvd0dyYXBoVHlwZT86IHN0cmluZyk6IFJpY2hUeXBlPGFueT4ge1xyXG4gICAgc3dpdGNoIChmbG93R3JhcGhUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5TdHJpbmc6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVN0cmluZztcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk51bWJlcjpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlTnVtYmVyO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuQm9vbGVhbjpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlQm9vbGVhbjtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjI6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVZlY3RvcjI7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVWZWN0b3IzO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yNDpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlVmVjdG9yNDtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlTWF0cml4O1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuQ29sb3IzOlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVDb2xvcjM7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5Db2xvcjQ6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZUNvbG9yNDtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb246XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVF1YXRlcm5pb247XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyOlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVGbG93R3JhcGhJbnRlZ2VyO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4MkQ6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZU1hdHJpeDJEO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4M0Q6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZU1hdHJpeDNEO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZUFueTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGdldCB0aGUgYW5pbWF0aW9uIHR5cGUgZm9yIGEgZ2l2ZW4gZmxvdyBncmFwaCB0eXBlXHJcbiAqIEBwYXJhbSBmbG93R3JhcGhUeXBlIHRoZSBmbG93IGdyYXBoIHR5cGVcclxuICogQHJldHVybnMgdGhlIGFuaW1hdGlvbiB0eXBlIGZvciB0aGlzIGZsb3cgZ3JhcGggdHlwZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZUJ5Rmxvd0dyYXBoVHlwZShmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKGZsb3dHcmFwaFR5cGUpIHtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk51bWJlcjpcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5BTklNQVRJT05UWVBFX0ZMT0FUO1xyXG4gICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yMjpcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5BTklNQVRJT05UWVBFX1ZFQ1RPUjI7XHJcbiAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzOlxyXG4gICAgICAgICAgICByZXR1cm4gQ29uc3RhbnRzLkFOSU1BVElPTlRZUEVfVkVDVE9SMztcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDpcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5BTklNQVRJT05UWVBFX01BVFJJWDtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLkNvbG9yMzpcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5BTklNQVRJT05UWVBFX0NPTE9SMztcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLkNvbG9yNDpcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0YW50cy5BTklNQVRJT05UWVBFX0NPTE9SNDtcclxuICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb246XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdGFudHMuQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdGFudHMuQU5JTUFUSU9OVFlQRV9GTE9BVDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGFuIGFuaW1hdGlvbiB0eXBlLCByZXR1cm4gdGhlIHJpY2ggdHlwZSB0aGF0IGNvcnJlc3BvbmRzIHRvIGl0LlxyXG4gKiBAcGFyYW0gYW5pbWF0aW9uVHlwZSB0aGUgYW5pbWF0aW9uIHR5cGVcclxuICogQHJldHVybnMgdGhlIHJpY2ggdHlwZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBhbmltYXRpb24gdHlwZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmljaFR5cGVCeUFuaW1hdGlvblR5cGUoYW5pbWF0aW9uVHlwZTogbnVtYmVyKTogUmljaFR5cGU8YW55PiB7XHJcbiAgICBzd2l0Y2ggKGFuaW1hdGlvblR5cGUpIHtcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5BTklNQVRJT05UWVBFX0ZMT0FUOlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVOdW1iZXI7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuQU5JTUFUSU9OVFlQRV9WRUNUT1IyOlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVWZWN0b3IyO1xyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkFOSU1BVElPTlRZUEVfVkVDVE9SMzpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlVmVjdG9yMztcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5BTklNQVRJT05UWVBFX01BVFJJWDpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlTWF0cml4O1xyXG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkFOSU1BVElPTlRZUEVfQ09MT1IzOlxyXG4gICAgICAgICAgICByZXR1cm4gUmljaFR5cGVDb2xvcjM7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuQU5JTUFUSU9OVFlQRV9DT0xPUjQ6XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZUNvbG9yNDtcclxuICAgICAgICBjYXNlIENvbnN0YW50cy5BTklNQVRJT05UWVBFX1FVQVRFUk5JT046XHJcbiAgICAgICAgICAgIHJldHVybiBSaWNoVHlwZVF1YXRlcm5pb247XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFJpY2hUeXBlQW55O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xuaW1wb3J0IHR5cGUgeyBJS0hSSW50ZXJhY3Rpdml0eV9EZWNsYXJhdGlvbiwgSUtIUkludGVyYWN0aXZpdHlfR3JhcGgsIElLSFJJbnRlcmFjdGl2aXR5X05vZGUgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL0Jsb2Nrcy9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xuaW1wb3J0IHR5cGUgeyBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrLCBJU2VyaWFsaXplZEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdHlwZURlZmluaXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7IEludGVyYWN0aXZpdHlFdmVudCwgSW50ZXJhY3Rpdml0eUdyYXBoVG9GbG93R3JhcGhQYXJzZXIgfSBmcm9tIFwiLi9pbnRlcmFjdGl2aXR5R3JhcGhQYXJzZXJcIjtcbmltcG9ydCB0eXBlIHsgSUdMVEYgfSBmcm9tIFwiLi4vLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcbmltcG9ydCB7IEZsb3dHcmFwaFR5cGVzLCBnZXRBbmltYXRpb25UeXBlQnlGbG93R3JhcGhUeXBlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuXG5pbnRlcmZhY2UgSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmdPYmplY3Qge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSBpbiB0aGUgRmxvd0dyYXBoIGJsb2NrLlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eSBpbiB0aGUgZ2xURiBzcGVjcy5cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQgd2lsbCBiZSBpbmZlcnJlZC5cbiAgICAgKi9cbiAgICBnbHRmVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eSBpbiB0aGUgRmxvd0dyYXBoIGJsb2NrLlxuICAgICAqIElmIG5vdCBkZWZpbmVkIGl0IGVxdWFscyB0aGUgZ2xURiB0eXBlLlxuICAgICAqL1xuICAgIGZsb3dHcmFwaFR5cGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgZGF0YSBmcm9tIHRoZSBnbFRGIHRvIHRoZSBGbG93R3JhcGggYmxvY2suXG4gICAgICovXG4gICAgZGF0YVRyYW5zZm9ybWVyPzogKGRhdGE6IGFueSwgcGFyc2VyOiBJbnRlcmFjdGl2aXR5R3JhcGhUb0Zsb3dHcmFwaFBhcnNlcikgPT4gYW55O1xuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHByb3BlcnR5IGNhbiBjb250YWluIG11bHRpcGxlIHZhbHVlcy5cbiAgICAgKi9cbiAgICBpc0FycmF5PzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBwcm9wZXJ0eSBpcyBpbiB0aGUgb3B0aW9ucyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBibG9jay5cbiAgICAgKi9cbiAgICBpbk9wdGlvbnM/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHByb3BlcnR5IGlzIGFuIGluZGV4IHRvIGEgdmFsdWUuXG4gICAgICogaWYgZGVmaW5lZCB0aGlzIHdpbGwgYmUgdGhlIG5hbWUgb2YgdGhlIGFycmF5IHRvIGZpbmQgdGhlIG9iamVjdCBpbi5cbiAgICAgKi9cbiAgICBpc1ZhcmlhYmxlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIHRoZSBuYW1lIG9mIHRoZSBjbGFzcyB0eXBlIHRoaXMgdmFsdWUgd2lsbCBiZSBtYXBwZWQgdG8uXG4gICAgICogVGhpcyBpcyB1c2VkIGlmIHdlIGdlbmVyYXRlIG1vcmUgdGhhbiBvbmUgYmxvY2sgZm9yIGEgc2luZ2xlIGdsVEYgbm9kZS5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgZmlyc3QgYmxvY2sgaW4gdGhlIG1hcHBpbmcuXG4gICAgICovXG4gICAgdG9CbG9jaz86IEZsb3dHcmFwaEJsb2NrTmFtZXM7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluIGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBJZiBkZWZpbmVkLCB0aGlzIHdpbGwgYmUgdGhlIGRlZmF1bHQgdmFsdWUsIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRvRmxvd0dyYXBoTWFwcGluZyB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIEZsb3dHcmFwaCBibG9jayhzKS5cbiAgICAgKiBUeXBpY2FsbHkgd2lsbCBiZSBhIHNpbmdsZSBlbGVtZW50IGluIGFuIGFycmF5LlxuICAgICAqIFdoZW4gYWRkaW5nIGJsb2NrcyBkZWZpbmVkIGluIHRoaXMgbW9kdWxlIHVzZSB0aGUgS0hSX2ludGVyYWN0aXZpdHkgcHJlZml4LlxuICAgICAqL1xuICAgIGJsb2NrczogKEZsb3dHcmFwaEJsb2NrTmFtZXMgfCBzdHJpbmcpW107XG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0cyBvZiB0aGUgZ2xURiBub2RlIG1hcHBlZCB0byB0aGUgRmxvd0dyYXBoIGJsb2NrLlxuICAgICAqL1xuICAgIGlucHV0cz86IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBpbnB1dHMgb2YgdGhlIGdsVEYgbm9kZSBtYXBwZWQgdG8gdGhlIEZsb3dHcmFwaCBibG9jay5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlcz86IHsgW29yaWdpbk5hbWU6IHN0cmluZ106IElHTFRGVG9GbG93R3JhcGhNYXBwaW5nT2JqZWN0IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmxvdyBpbnB1dHMgb2YgdGhlIGdsVEYgbm9kZSBtYXBwZWQgdG8gdGhlIEZsb3dHcmFwaCBibG9jay5cbiAgICAgICAgICovXG4gICAgICAgIGZsb3dzPzogeyBbb3JpZ2luTmFtZTogc3RyaW5nXTogSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmdPYmplY3QgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXRzIG9mIHRoZSBnbFRGIG5vZGUgbWFwcGVkIHRvIHRoZSBGbG93R3JhcGggYmxvY2suXG4gICAgICovXG4gICAgb3V0cHV0cz86IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvdXRwdXRzIG9mIHRoZSBnbFRGIG5vZGUgbWFwcGVkIHRvIHRoZSBGbG93R3JhcGggYmxvY2suXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZXM/OiB7IFtvcmlnaW5OYW1lOiBzdHJpbmddOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZ09iamVjdCB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZsb3cgb3V0cHV0cyBvZiB0aGUgZ2xURiBub2RlIG1hcHBlZCB0byB0aGUgRmxvd0dyYXBoIGJsb2NrLlxuICAgICAgICAgKi9cbiAgICAgICAgZmxvd3M/OiB7IFtvcmlnaW5OYW1lOiBzdHJpbmddOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZ09iamVjdCB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGdsVEYgbm9kZSBtYXBwZWQgdG8gdGhlIEZsb3dHcmFwaCBibG9jay5cbiAgICAgKiBUaGlzIGluZm9ybWF0aW9uIGlzIHVzdWFsbHkgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgYmxvY2suXG4gICAgICovXG4gICAgY29uZmlndXJhdGlvbj86IHsgW29yaWdpbk5hbWU6IHN0cmluZ106IElHTFRGVG9GbG93R3JhcGhNYXBwaW5nT2JqZWN0IH07XG5cbiAgICAvKipcbiAgICAgKiBJZiB3ZSBnZW5lcmF0ZSBtb3JlIHRoYW4gb25lIGJsb2NrIGZvciBhIHNpbmdsZSBnbFRGIG5vZGUsIHRoaXMgbWFwcGluZyB3aWxsIGJlIHVzZWQgdG8gbWFwXG4gICAgICogYmV0d2VlbiB0aGUgZmxvd0dyYXBoIGNsYXNzZXMuXG4gICAgICovXG4gICAgdHlwZVRvVHlwZU1hcHBpbmc/OiB7IFtvcmlnaW5OYW1lOiBzdHJpbmddOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZ09iamVjdCB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbm5lY3Rpb25zIGJldHdlZW4gdHdvIG9yIG1vcmUgYmxvY2tzLlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBjb25uZWN0IHRoZSBibG9ja3MgaW4gdGhlIGdyYXBoXG4gICAgICovXG4gICAgaW50ZXJCbG9ja0Nvbm5lY3RvcnM/OiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaW5wdXQgY29ubmVjdGlvbiBpbiB0aGUgZmlyc3QgYmxvY2suXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dDogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIG91dHB1dCBjb25uZWN0aW9uIGluIHRoZSBzZWNvbmQgYmxvY2suXG4gICAgICAgICAqL1xuICAgICAgICBvdXRwdXQ6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluZGV4IG9mIHRoZSBibG9jayBpbiB0aGUgYXJyYXkgb2YgYmxvY2tzIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGlucHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRCbG9ja0luZGV4OiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGJsb2NrIGluIHRoZSBhcnJheSBvZiBibG9ja3MgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgb3V0cHV0LlxuICAgICAgICAgKi9cbiAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIGNvbm5lY3Rpb24gaXMgYSB2YXJpYWJsZSBjb25uZWN0aW9uIG9yIGEgZmxvdyBjb25uZWN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNWYXJpYWJsZT86IGJvb2xlYW47XG4gICAgfVtdO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBvcHRpb25hbCBmdW5jdGlvbiB3aWxsIGFsbG93IHRvIHZhbGlkYXRlIHRoZSBub2RlLCBhY2NvcmRpbmcgdG8gdGhlIGdsVEYgc3BlY3MuXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGEgbm9kZSBoYXMgYSBjb25maWd1cmF0aW9uIG9iamVjdCwgaXQgbXVzdCBiZSBwcmVzZW50IGFuZCBjb3JyZWN0LlxuICAgICAqIFRoaXMgaXMgYSBiYXNpYyBub2RlLWJhc2VkIHZhbGlkYXRpb24uXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBleHBlY3RlZCB0byByZXR1cm4gZmFsc2UgYW5kIGxvZyB0aGUgZXJyb3IgaWYgdGhlIG5vZGUgaXMgbm90IHZhbGlkLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGNhbiBhbHNvIG1vZGlmeSB0aGUgbm9kZSwgaWYgbmVlZGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGdsdGZCbG9jayB0aGUgZ2xURiBub2RlIHRvIHZhbGlkYXRlXG4gICAgICogQHBhcmFtIGdsVEZPYmplY3QgdGhlIGdsVEYgb2JqZWN0XG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2YWxpZGF0ZWQsIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uPzogKGdsdGZCbG9jazogSUtIUkludGVyYWN0aXZpdHlfTm9kZSwgaW50ZXJhY3Rpdml0eUdyYXBoOiBJS0hSSW50ZXJhY3Rpdml0eV9HcmFwaCwgZ2xURk9iamVjdD86IElHTFRGKSA9PiB7IHZhbGlkOiBib29sZWFuOyBlcnJvcj86IHN0cmluZyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB1c2VkIGlmIHdlIG5lZWQgZXh0cmEgaW5mb3JtYXRpb24gZm9yIHRoZSBjb25zdHJ1Y3Rvci9vcHRpb25zIHRoYXQgaXMgbm90IHByb3ZpZGVkIGRpcmVjdGx5IGJ5IHRoZSBnbFRGIG5vZGUuXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gcmV0dXJuIG1vcmUgdGhhbiBvbmUgbm9kZSwgaWYgZXh0cmEgbm9kZXMgYXJlIG5lZWRlZCBmb3IgdGhpcyBibG9jayB0byBmdW5jdGlvbiBjb3JyZWN0bHkuXG4gICAgICogUmV0dXJuaW5nIG1vcmUgdGhhbiBvbmUgYmxvY2sgd2lsbCB1c3VhbGx5IGhhcHBlbiB3aGVuIGEganNvbiBwb2ludGVyIHdhcyBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBnbHRmQmxvY2sgdGhlIGdsVEYgbm9kZVxuICAgICAqIEBwYXJhbSBtYXBwaW5nIHRoZSBtYXBwaW5nIG9iamVjdFxuICAgICAqIEBwYXJhbSBhcnJheXMgdGhlIGFycmF5cyBvZiB0aGUgaW50ZXJhY3Rpdml0eSBvYmplY3RcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXplZE9iamVjdHMgdGhlIHNlcmlhbGl6ZWQgb2JqZWN0XG4gICAgICogQHJldHVybnMgYW4gYXJyYXkgb2Ygc2VyaWFsaXplZCBub2RlcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGdyYXBoLlxuICAgICAqL1xuICAgIGV4dHJhUHJvY2Vzc29yPzogKFxuICAgICAgICBnbHRmQmxvY2s6IElLSFJJbnRlcmFjdGl2aXR5X05vZGUsXG4gICAgICAgIGRlY2xhcmF0aW9uOiBJS0hSSW50ZXJhY3Rpdml0eV9EZWNsYXJhdGlvbixcbiAgICAgICAgbWFwcGluZzogSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmcsXG4gICAgICAgIHBhcnNlcjogSW50ZXJhY3Rpdml0eUdyYXBoVG9GbG93R3JhcGhQYXJzZXIsXG4gICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzOiBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrW10sXG4gICAgICAgIGNvbnRleHQ6IElTZXJpYWxpemVkRmxvd0dyYXBoQ29udGV4dCxcbiAgICAgICAgZ2xvYmFsR0xURj86IElHTFRGXG4gICAgKSA9PiBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBwaW5nRm9yRnVsbE9wZXJhdGlvbk5hbWUoZnVsbE9wZXJhdGlvbk5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IFtvcCwgZXh0ZW5zaW9uXSA9IGZ1bGxPcGVyYXRpb25OYW1lLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4gZ2V0TWFwcGluZ0ZvckRlY2xhcmF0aW9uKHsgb3AsIGV4dGVuc2lvbiB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcHBpbmdGb3JEZWNsYXJhdGlvbihkZWNsYXJhdGlvbjogSUtIUkludGVyYWN0aXZpdHlfRGVjbGFyYXRpb24sIHJldHVybk5vT3BJZk5vdEF2YWlsYWJsZTogYm9vbGVhbiA9IHRydWUpOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZyB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgbWFwcGluZyA9IGRlY2xhcmF0aW9uLmV4dGVuc2lvbiA/IGdsdGZFeHRlbnNpb25zVG9GbG93R3JhcGhNYXBwaW5nW2RlY2xhcmF0aW9uLmV4dGVuc2lvbl0/LltkZWNsYXJhdGlvbi5vcF0gOiBnbHRmVG9GbG93R3JhcGhNYXBwaW5nW2RlY2xhcmF0aW9uLm9wXTtcbiAgICBpZiAoIW1hcHBpbmcpIHtcbiAgICAgICAgTG9nZ2VyLldhcm4oYE5vIG1hcHBpbmcgZm91bmQgZm9yIG9wZXJhdGlvbiAke2RlY2xhcmF0aW9uLm9wfSBhbmQgZXh0ZW5zaW9uICR7ZGVjbGFyYXRpb24uZXh0ZW5zaW9uIHx8IFwiS0hSX2ludGVyYWN0aXZpdHlcIn1gKTtcbiAgICAgICAgaWYgKHJldHVybk5vT3BJZk5vdEF2YWlsYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRzOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZ1tcImlucHV0c1wiXSA9IHt9O1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0czogSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmdbXCJvdXRwdXRzXCJdID0ge1xuICAgICAgICAgICAgICAgIGZsb3dzOiB7fSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb24uaW5wdXRWYWx1ZVNvY2tldHMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dHMudmFsdWVzID0ge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGVjbGFyYXRpb24uaW5wdXRWYWx1ZVNvY2tldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLnZhbHVlc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvbi5vdXRwdXRWYWx1ZVNvY2tldHMpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRzLnZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRlY2xhcmF0aW9uLm91dHB1dFZhbHVlU29ja2V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMudmFsdWVzIVtrZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBibG9ja3M6IFtdLCAvLyBubyBibG9ja3MsIGp1c3QgbWFwcGluZ1xuICAgICAgICAgICAgICAgIGlucHV0cyxcbiAgICAgICAgICAgICAgICBvdXRwdXRzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwcGluZztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYWRkIG5ldyBtYXBwaW5nIHRvIGdsVEYgaW50ZXJhY3Rpdml0eS5cbiAqIE90aGVyIGV4dGVuc2lvbnMgY2FuIGRlZmluZSBuZXcgdHlwZXMgb2YgYmxvY2tzLCB0aGlzIGlzIHRoZSB3YXkgdG8gbGV0IGludGVyYWN0aXZpdHkga25vdyBob3cgdG8gcGFyc2UgdGhlbS5cbiAqIEBwYXJhbSBrZXkgdGhlIHR5cGUgb2Ygbm9kZSwgaS5lLiBcInZhcmlhYmxlL2dldFwiXG4gKiBAcGFyYW0gZXh0ZW5zaW9uIHRoZSBleHRlbnNpb24gb2YgdGhlIGludGVyYWN0aXZpdHkgb3BlcmF0aW9uLCBpLmUuIFwiS0hSX3NlbGVjdGFiaWxpdHlcIlxuICogQHBhcmFtIG1hcHBpbmcgVGhlIG1hcHBpbmcgb2JqZWN0LiBTZWUgZG9jdW1lbnRhdGlvbiBvciBleGFtcGxlcyBiZWxvdy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0ludGVyYWN0aXZpdHlGbG93R3JhcGhNYXBwaW5nKGtleTogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZywgbWFwcGluZzogSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmcpIHtcbiAgICBnbHRmRXh0ZW5zaW9uc1RvRmxvd0dyYXBoTWFwcGluZ1tleHRlbnNpb25dIHx8PSB7fTtcbiAgICBnbHRmRXh0ZW5zaW9uc1RvRmxvd0dyYXBoTWFwcGluZ1tleHRlbnNpb25dW2tleV0gPSBtYXBwaW5nO1xufVxuXG5jb25zdCBnbHRmRXh0ZW5zaW9uc1RvRmxvd0dyYXBoTWFwcGluZzogeyBbZXh0ZW5zaW9uOiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVG9GbG93R3JhcGhNYXBwaW5nIH0gfSA9IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBCQUJZTE9OIGV4dGVuc2lvbiBmb3IgZ2xURiBpbnRlcmFjdGl2aXR5LlxuICAgICAqIEl0IGRlZmluZXMgYmFieWxvbi1zcGVjaWZpYyBibG9ja3MgYW5kIG9wZXJhdGlvbnMuXG4gICAgICovXG4gICAgQkFCWUxPTjoge1xuICAgICAgICAvKipcbiAgICAgICAgICogZmxvdy9sb2cgaXMgYSBmbG93IG5vZGUgdGhhdCBsb2dzIGlucHV0IHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAgKiBJdCBoYXMgXCJpblwiIGFuZCBcIm91dFwiIGZsb3dzLCBhbmQgdGFrZXMgYSBtZXNzYWdlIGFzIGlucHV0LlxuICAgICAgICAgKiBUaGUgbWVzc2FnZSBjYW4gYmUgYW55IHR5cGUgb2YgdmFsdWUuXG4gICAgICAgICAqIFRoZSBtZXNzYWdlIGlzIGxvZ2dlZCB0byB0aGUgY29uc29sZSB3aGVuIHRoZSBcImluXCIgZmxvdyBpcyB0cmlnZ2VyZWQuXG4gICAgICAgICAqIFRoZSBcIm91dFwiIGZsb3cgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIG1lc3NhZ2UgaXMgbG9nZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgXCJmbG93L2xvZ1wiOiB7XG4gICAgICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkNvbnNvbGVMb2ddLFxuICAgICAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHsgbmFtZTogXCJtZXNzYWdlXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuLy8gdGhpcyBtYXBwZXIgaXMganVzdCBhIHdheSB0byBjb252ZXJ0IHRoZSBnbFRGIG5vZGVzIHRvIEZsb3dHcmFwaCBub2RlcyBpbiB0ZXJtcyBvZiBpbnB1dC9vdXRwdXQgY29ubmVjdGlvbiBuYW1lcyBhbmQgdmFsdWVzLlxuY29uc3QgZ2x0ZlRvRmxvd0dyYXBoTWFwcGluZzogeyBba2V5OiBzdHJpbmddOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZyB9ID0ge1xuICAgIFwiZXZlbnQvb25TdGFydFwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuU2NlbmVSZWFkeUV2ZW50XSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBvdXQ6IHsgbmFtZTogXCJkb25lXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImV2ZW50L29uVGlja1wiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuU2NlbmVUaWNrRXZlbnRdLFxuICAgICAgICBpbnB1dHM6IHt9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICB0aW1lU2luY2VMYXN0VGljazogeyBuYW1lOiBcImRlbHRhVGltZVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiAvKiwgZGF0YVRyYW5zZm9ybWVyOiAodGltZTogbnVtYmVyKSA9PiB0aW1lIC8gMTAwMCovIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBvdXQ6IHsgbmFtZTogXCJkb25lXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImV2ZW50L3NlbmRcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlNlbmRDdXN0b21FdmVudF0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKGdsdGZCbG9jaywgZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBwYXJzZXIsIHNlcmlhbGl6ZWRPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBzZXQgZXZlbnRJZCBhbmQgZXZlbnREYXRhLiBUaGUgY29uZmlndXJhdGlvbiBvYmplY3Qgb2YgdGhlIGdsVEYgc2hvdWxkIGhhdmUgYSBzaW5nbGUgb2JqZWN0LlxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgdGhhdCB3ZSBhcmUgcnVubmluZyBpdCBvbiB0aGUgcmlnaHQgYmxvY2suXG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb24ub3AgIT09IFwiZXZlbnQvc2VuZFwiIHx8ICFnbHRmQmxvY2suY29uZmlndXJhdGlvbiB8fCBPYmplY3Qua2V5cyhnbHRmQmxvY2suY29uZmlndXJhdGlvbikubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVjZWl2ZSBldmVudCBzaG91bGQgaGF2ZSBhIHNpbmdsZSBjb25maWd1cmF0aW9uIG9iamVjdCwgdGhlIGV2ZW50IGl0c2VsZlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50Q29uZmlndXJhdGlvbiA9IGdsdGZCbG9jay5jb25maWd1cmF0aW9uW1wiZXZlbnRcIl07XG4gICAgICAgICAgICBjb25zdCBldmVudElkID0gZXZlbnRDb25maWd1cmF0aW9uLnZhbHVlPy5bMF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50SWQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudCBpZCBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBldmVudDogSW50ZXJhY3Rpdml0eUV2ZW50ID0gcGFyc2VyLmFycmF5cy5ldmVudHNbZXZlbnRJZF07XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkT2JqZWN0ID0gc2VyaWFsaXplZE9iamVjdHNbMF07XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZy5ldmVudElkID0gZXZlbnQuZXZlbnRJZDtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnLmV2ZW50RGF0YSA9IGV2ZW50LmV2ZW50RGF0YTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwiZXZlbnQvcmVjZWl2ZVwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuUmVjZWl2ZUN1c3RvbUV2ZW50XSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBvdXQ6IHsgbmFtZTogXCJkb25lXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRpb24oZ2x0ZkJsb2NrLCBpbnRlcmFjdGl2aXR5R3JhcGgpIHtcbiAgICAgICAgICAgIGlmICghZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJSZWNlaXZlIGV2ZW50IHNob3VsZCBoYXZlIGEgY29uZmlndXJhdGlvbiBvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogXCJSZWNlaXZlIGV2ZW50IHNob3VsZCBoYXZlIGEgY29uZmlndXJhdGlvbiBvYmplY3RcIiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXZlbnRDb25maWd1cmF0aW9uID0gZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb25bXCJldmVudFwiXTtcbiAgICAgICAgICAgIGlmICghZXZlbnRDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiUmVjZWl2ZSBldmVudCBzaG91bGQgaGF2ZSBhIHNpbmdsZSBjb25maWd1cmF0aW9uIG9iamVjdCwgdGhlIGV2ZW50IGl0c2VsZlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGVycm9yOiBcIlJlY2VpdmUgZXZlbnQgc2hvdWxkIGhhdmUgYSBzaW5nbGUgY29uZmlndXJhdGlvbiBvYmplY3QsIHRoZSBldmVudCBpdHNlbGZcIiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXZlbnRJZCA9IGV2ZW50Q29uZmlndXJhdGlvbi52YWx1ZT8uWzBdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudElkICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRXZlbnQgaWQgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3I6IFwiRXZlbnQgaWQgc2hvdWxkIGJlIGEgbnVtYmVyXCIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gaW50ZXJhY3Rpdml0eUdyYXBoLmV2ZW50cz8uW2V2ZW50SWRdO1xuICAgICAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihgRXZlbnQgd2l0aCBpZCAke2V2ZW50SWR9IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgZXJyb3I6IGBFdmVudCB3aXRoIGlkICR7ZXZlbnRJZH0gbm90IGZvdW5kYCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBkZWNsYXJhdGlvbiwgX21hcHBpbmcsIHBhcnNlciwgc2VyaWFsaXplZE9iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIHNldCBldmVudElkIGFuZCBldmVudERhdGEuIFRoZSBjb25maWd1cmF0aW9uIG9iamVjdCBvZiB0aGUgZ2xURiBzaG91bGQgaGF2ZSBhIHNpbmdsZSBvYmplY3QuXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSB0aGF0IHdlIGFyZSBydW5uaW5nIGl0IG9uIHRoZSByaWdodCBibG9jay5cbiAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvbi5vcCAhPT0gXCJldmVudC9yZWNlaXZlXCIgfHwgIWdsdGZCbG9jay5jb25maWd1cmF0aW9uIHx8IE9iamVjdC5rZXlzKGdsdGZCbG9jay5jb25maWd1cmF0aW9uKS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlIGV2ZW50IHNob3VsZCBoYXZlIGEgc2luZ2xlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LCB0aGUgZXZlbnQgaXRzZWxmXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXZlbnRDb25maWd1cmF0aW9uID0gZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb25bXCJldmVudFwiXTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50SWQgPSBldmVudENvbmZpZ3VyYXRpb24udmFsdWU/LlswXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnRJZCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV2ZW50IGlkIHNob3VsZCBiZSBhIG51bWJlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50OiBJbnRlcmFjdGl2aXR5RXZlbnQgPSBwYXJzZXIuYXJyYXlzLmV2ZW50c1tldmVudElkXTtcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRPYmplY3QgPSBzZXJpYWxpemVkT2JqZWN0c1swXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnLmV2ZW50SWQgPSBldmVudC5ldmVudElkO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcuZXZlbnREYXRhID0gZXZlbnQuZXZlbnREYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL0VcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuRSksXG4gICAgXCJtYXRoL1BpXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLlBJKSxcbiAgICBcIm1hdGgvSW5mXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkluZiksXG4gICAgXCJtYXRoL05hTlwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5OYU4pLFxuICAgIFwibWF0aC9hYnNcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQWJzKSxcbiAgICBcIm1hdGgvc2lnblwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5TaWduKSxcbiAgICBcIm1hdGgvdHJ1bmNcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJ1bmMpLFxuICAgIFwibWF0aC9mbG9vclwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9vciksXG4gICAgXCJtYXRoL2NlaWxcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2VpbCksXG4gICAgXCJtYXRoL3JvdW5kXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5Sb3VuZF0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHt9LFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJhXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBkZWNsYXJhdGlvbiwgX21hcHBpbmcsIHBhcnNlciwgc2VyaWFsaXplZE9iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSBpdCB0byB3b3JrIHRoZSB3YXkgZ2xURiBzcGVjaWZpZXNcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0c1swXS5jb25maWcucm91bmRIYWxmQXdheUZyb21aZXJvID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9mcmFjdFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5GcmFjdGlvbiksXG4gICAgXCJtYXRoL25lZ1wiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5OZWdhdGlvbiksXG4gICAgXCJtYXRoL2FkZFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5BZGQsIFtcImFcIiwgXCJiXCJdLCB0cnVlKSxcbiAgICBcIm1hdGgvc3ViXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLlN1YnRyYWN0LCBbXCJhXCIsIFwiYlwiXSwgdHJ1ZSksXG4gICAgXCJtYXRoL211bFwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuTXVsdGlwbHldLFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZy51c2VNYXRyaXhQZXJDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnLnByZXZlbnRJbnRlZ2VyRmxvYXRBcml0aG1ldGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRyeSB0byBpbmZlciB0aGUgdHlwZSBvciBmYWxsYmFjayB0byBJbnRlZ2VyXG4gICAgICAgICAgICAvLyBjaGVjayB0aGUgZ2x0ZiBibG9jayBmb3IgdGhlIGlucHV0cywgc2VlIGlmIHRoZXkgaGF2ZSBhIHR5cGVcbiAgICAgICAgICAgIGxldCB0eXBlID0gLTE7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhfZ2x0ZkJsb2NrLnZhbHVlcyB8fCB7fSkuZmluZCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX2dsdGZCbG9jay52YWx1ZXM/Llt2YWx1ZV0udHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBfZ2x0ZkJsb2NrLnZhbHVlc1t2YWx1ZV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGUgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnLnR5cGUgPSBfcGFyc2VyLmFycmF5cy50eXBlc1t0eXBlXS5mbG93R3JhcGhUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uKGdsdGZCbG9jaykge1xuICAgICAgICAgICAgaWYgKGdsdGZCbG9jay52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdHlwZXMgYXJlIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRlVHlwZXMoZ2x0ZkJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1hdGgvZGl2XCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkRpdmlkZSwgW1wiYVwiLCBcImJcIl0sIHRydWUpLFxuICAgIFwibWF0aC9yZW1cIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuTW9kdWxvLCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL21pblwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5NaW4sIFtcImFcIiwgXCJiXCJdKSxcbiAgICBcIm1hdGgvbWF4XCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLk1heCwgW1wiYVwiLCBcImJcIl0pLFxuICAgIFwibWF0aC9jbGFtcFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5DbGFtcCwgW1wiYVwiLCBcImJcIiwgXCJjXCJdKSxcbiAgICBcIm1hdGgvc2F0dXJhdGVcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2F0dXJhdGUpLFxuICAgIFwibWF0aC9taXhcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF0aEludGVycG9sYXRpb24sIFtcImFcIiwgXCJiXCIsIFwiY1wiXSksXG4gICAgXCJtYXRoL2VxXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkVxdWFsaXR5LCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL2x0XCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkxlc3NUaGFuLCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL2xlXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkxlc3NUaGFuT3JFcXVhbCwgW1wiYVwiLCBcImJcIl0pLFxuICAgIFwibWF0aC9ndFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhbiwgW1wiYVwiLCBcImJcIl0pLFxuICAgIFwibWF0aC9nZVwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhbk9yRXF1YWwsIFtcImFcIiwgXCJiXCJdKSxcbiAgICBcIm1hdGgvaXNOYU5cIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuSXNOYU4pLFxuICAgIFwibWF0aC9pc0luZlwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5Jc0luZmluaXR5KSxcbiAgICBcIm1hdGgvc2VsZWN0XCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5Db25kaXRpb25hbF0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiB7IG5hbWU6IFwiY29uZGl0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgd2UgdmFsaWRhdGUgdGhvc2UgaGF2ZSB0aGUgc2FtZSB0eXBlIGhlcmUsIG9yIGFzc3VtZSBpdCBpcyBhbHJlYWR5IHZhbGlkYXRlZD9cbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwib25UcnVlXCIgfSxcbiAgICAgICAgICAgICAgICBiOiB7IG5hbWU6IFwib25GYWxzZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBuYW1lOiBcIm91dHB1dFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL3JhbmRvbVwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuUmFuZG9tXSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL3NpblwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5TaW4pLFxuICAgIFwibWF0aC9jb3NcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29zKSxcbiAgICBcIm1hdGgvdGFuXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLlRhbiksXG4gICAgXCJtYXRoL2FzaW5cIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQXNpbiksXG4gICAgXCJtYXRoL2Fjb3NcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQWNvcyksXG4gICAgXCJtYXRoL2F0YW5cIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbiksXG4gICAgXCJtYXRoL2F0YW4yXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkF0YW4yLCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL3NpbmhcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2luaCksXG4gICAgXCJtYXRoL2Nvc2hcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29zaCksXG4gICAgXCJtYXRoL3RhbmhcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuVGFuaCksXG4gICAgXCJtYXRoL2FzaW5oXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkFzaW5oKSxcbiAgICBcIm1hdGgvYWNvc2hcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQWNvc2gpLFxuICAgIFwibWF0aC9hdGFuaFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5BdGFuaCksXG4gICAgXCJtYXRoL2V4cFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHBvbmVudGlhbCksXG4gICAgXCJtYXRoL2xvZ1wiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2cpLFxuICAgIFwibWF0aC9sb2cyXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkxvZzIpLFxuICAgIFwibWF0aC9sb2cxMFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2cxMCksXG4gICAgXCJtYXRoL3NxcnRcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuU3F1YXJlUm9vdCksXG4gICAgXCJtYXRoL2NicnRcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ3ViZVJvb3QpLFxuICAgIFwibWF0aC9wb3dcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuUG93ZXIsIFtcImFcIiwgXCJiXCJdKSxcbiAgICBcIm1hdGgvbGVuZ3RoXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkxlbmd0aCksXG4gICAgXCJtYXRoL25vcm1hbGl6ZVwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5Ob3JtYWxpemUpLFxuICAgIFwibWF0aC9kb3RcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuRG90LCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL2Nyb3NzXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkNyb3NzLCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL3JvdGF0ZTJEXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5Sb3RhdGUyRF0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgYTogeyBuYW1lOiBcImFcIiB9LFxuICAgICAgICAgICAgICAgIGFuZ2xlOiB7IG5hbWU6IFwiYlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBuYW1lOiBcInZhbHVlXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1hdGgvcm90YXRlM0RcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTNEXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiYVwiIH0sXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHsgbmFtZTogXCJiXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC90cmFuc2Zvcm1cIjoge1xuICAgICAgICAvLyBnbFRGIHRyYW5zZm9ybSBpcyB2ZWN0b3JOIHdpdGggbWF0cml4TlxuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybVZlY3Rvcl0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgYTogeyBuYW1lOiBcImFcIiB9LFxuICAgICAgICAgICAgICAgIGI6IHsgbmFtZTogXCJiXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9jb21iaW5lMlwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjJdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJpbnB1dF8wXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgYjogeyBuYW1lOiBcImlucHV0XzFcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9jb21iaW5lM1wiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjNdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJpbnB1dF8wXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgYjogeyBuYW1lOiBcImlucHV0XzFcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBjOiB7IG5hbWU6IFwiaW5wdXRfMlwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL2NvbWJpbmU0XCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yNF0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgYTogeyBuYW1lOiBcImlucHV0XzBcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBiOiB7IG5hbWU6IFwiaW5wdXRfMVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGM6IHsgbmFtZTogXCJpbnB1dF8yXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgZDogeyBuYW1lOiBcImlucHV0XzNcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIG9uZSBpbnB1dCwgTiBvdXRwdXRzISBvdXRwdXRzIG5hbWVkIHVzaW5nIG51bWJlcnMuXG4gICAgXCJtYXRoL2V4dHJhY3QyXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0VmVjdG9yMl0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgYTogeyBuYW1lOiBcImlucHV0XCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBcIjBcIjogeyBuYW1lOiBcIm91dHB1dF8wXCIgfSxcbiAgICAgICAgICAgICAgICBcIjFcIjogeyBuYW1lOiBcIm91dHB1dF8xXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1hdGgvZXh0cmFjdDNcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RWZWN0b3IzXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiaW5wdXRcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIFwiMFwiOiB7IG5hbWU6IFwib3V0cHV0XzBcIiB9LFxuICAgICAgICAgICAgICAgIFwiMVwiOiB7IG5hbWU6IFwib3V0cHV0XzFcIiB9LFxuICAgICAgICAgICAgICAgIFwiMlwiOiB7IG5hbWU6IFwib3V0cHV0XzJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9leHRyYWN0NFwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjRdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJpbnB1dFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgXCIwXCI6IHsgbmFtZTogXCJvdXRwdXRfMFwiIH0sXG4gICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCJvdXRwdXRfMVwiIH0sXG4gICAgICAgICAgICAgICAgXCIyXCI6IHsgbmFtZTogXCJvdXRwdXRfMlwiIH0sXG4gICAgICAgICAgICAgICAgXCIzXCI6IHsgbmFtZTogXCJvdXRwdXRfM1wiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL3RyYW5zcG9zZVwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5UcmFuc3Bvc2UpLFxuICAgIFwibWF0aC9kZXRlcm1pbmFudFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5EZXRlcm1pbmFudCksXG4gICAgXCJtYXRoL2ludmVyc2VcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuSW52ZXJ0TWF0cml4KSxcbiAgICBcIm1hdGgvbWF0TXVsXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLk1hdHJpeE11bHRpcGxpY2F0aW9uLCBbXCJhXCIsIFwiYlwiXSksXG4gICAgXCJtYXRoL21hdENvbXBvc2VcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLk1hdHJpeENvbXBvc2VdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB7IG5hbWU6IFwicG9zaXRpb25cIiwgZ2x0ZlR5cGU6IFwiZmxvYXQzXCIgfSxcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogeyBuYW1lOiBcInJvdGF0aW9uUXVhdGVybmlvblwiLCBnbHRmVHlwZTogXCJmbG9hdDRcIiB9LFxuICAgICAgICAgICAgICAgIHNjYWxlOiB7IG5hbWU6IFwic2NhbGluZ1wiLCBnbHRmVHlwZTogXCJmbG9hdDNcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cywgY29udGV4dCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgY29uc3QgZCA9IHNlcmlhbGl6ZWRPYmplY3RzWzBdLmRhdGFJbnB1dHMuZmluZCgoaW5wdXQpID0+IGlucHV0Lm5hbWUgPT09IFwicm90YXRpb25RdWF0ZXJuaW9uXCIpO1xuICAgICAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUm90YXRpb24gcXVhdGVybmlvbiBpbnB1dCBub3QgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBkZWZpbmVkLCBzZXQgdGhlIHR5cGUgdG8gcXVhdGVybmlvblxuICAgICAgICAgICAgaWYgKGNvbnRleHQuX2Nvbm5lY3Rpb25WYWx1ZXNbZC51bmlxdWVJZF0pIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9jb25uZWN0aW9uVmFsdWVzW2QudW5pcXVlSWRdLnR5cGUgPSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL21hdERlY29tcG9zZVwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuTWF0cml4RGVjb21wb3NlXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiaW5wdXRcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB7IG5hbWU6IFwicG9zaXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiB7IG5hbWU6IFwicm90YXRpb25RdWF0ZXJuaW9uXCIgfSxcbiAgICAgICAgICAgICAgICBzY2FsZTogeyBuYW1lOiBcInNjYWxpbmdcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9xdWF0Q29uanVnYXRlXCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLkNvbmp1Z2F0ZSwgW1wiYVwiXSksXG4gICAgXCJtYXRoL3F1YXRNdWxcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLk11bHRpcGx5XSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiYVwiLCBnbHRmVHlwZTogXCJ2ZWN0b3I0XCIgfSxcbiAgICAgICAgICAgICAgICBiOiB7IG5hbWU6IFwiYlwiLCBnbHRmVHlwZTogXCJ2ZWN0b3I0XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoX2dsdGZCbG9jaywgX2RlY2xhcmF0aW9uLCBfbWFwcGluZywgX3BhcnNlciwgc2VyaWFsaXplZE9iamVjdHMpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0c1swXS5jb25maWcudHlwZSA9IEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb247XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1hdGgvcXVhdEFuZ2xlQmV0d2VlblwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5BbmdsZUJldHdlZW4sIFtcImFcIiwgXCJiXCJdKSxcbiAgICBcIm1hdGgvcXVhdEZyb21BeGlzQW5nbGVcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlF1YXRlcm5pb25Gcm9tQXhpc0FuZ2xlXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBheGlzOiB7IG5hbWU6IFwiYVwiLCBnbHRmVHlwZTogXCJmbG9hdDNcIiB9LFxuICAgICAgICAgICAgICAgIGFuZ2xlOiB7IG5hbWU6IFwiYlwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL3F1YXRUb0F4aXNBbmdsZVwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5BeGlzQW5nbGVGcm9tUXVhdGVybmlvbiwgW1wiYVwiXSksXG4gICAgXCJtYXRoL3F1YXRGcm9tRGlyZWN0aW9uc1wiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5RdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnMsIFtcImFcIiwgXCJiXCJdKSxcbiAgICBcIm1hdGgvY29tYmluZTJ4MlwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZU1hdHJpeDJEXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiaW5wdXRfMFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGI6IHsgbmFtZTogXCJpbnB1dF8xXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgYzogeyBuYW1lOiBcImlucHV0XzJcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBkOiB7IG5hbWU6IFwiaW5wdXRfM1wiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZy5pbnB1dElzQ29sdW1uTWFqb3IgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL2V4dHJhY3QyeDJcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RNYXRyaXgyRF0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgYTogeyBuYW1lOiBcImlucHV0XCIsIGdsdGZUeXBlOiBcImZsb2F0MngyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIFwiMFwiOiB7IG5hbWU6IFwib3V0cHV0XzBcIiB9LFxuICAgICAgICAgICAgICAgIFwiMVwiOiB7IG5hbWU6IFwib3V0cHV0XzFcIiB9LFxuICAgICAgICAgICAgICAgIFwiMlwiOiB7IG5hbWU6IFwib3V0cHV0XzJcIiB9LFxuICAgICAgICAgICAgICAgIFwiM1wiOiB7IG5hbWU6IFwib3V0cHV0XzNcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9jb21iaW5lM3gzXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lTWF0cml4M0RdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJpbnB1dF8wXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgYjogeyBuYW1lOiBcImlucHV0XzFcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBjOiB7IG5hbWU6IFwiaW5wdXRfMlwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGQ6IHsgbmFtZTogXCJpbnB1dF8zXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgZTogeyBuYW1lOiBcImlucHV0XzRcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBmOiB7IG5hbWU6IFwiaW5wdXRfNVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGc6IHsgbmFtZTogXCJpbnB1dF82XCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgaDogeyBuYW1lOiBcImlucHV0XzdcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBpOiB7IG5hbWU6IFwiaW5wdXRfOFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZy5pbnB1dElzQ29sdW1uTWFqb3IgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL2V4dHJhY3QzeDNcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RNYXRyaXgzRF0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgYTogeyBuYW1lOiBcImlucHV0XCIsIGdsdGZUeXBlOiBcImZsb2F0M3gzXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIFwiMFwiOiB7IG5hbWU6IFwib3V0cHV0XzBcIiB9LFxuICAgICAgICAgICAgICAgIFwiMVwiOiB7IG5hbWU6IFwib3V0cHV0XzFcIiB9LFxuICAgICAgICAgICAgICAgIFwiMlwiOiB7IG5hbWU6IFwib3V0cHV0XzJcIiB9LFxuICAgICAgICAgICAgICAgIFwiM1wiOiB7IG5hbWU6IFwib3V0cHV0XzNcIiB9LFxuICAgICAgICAgICAgICAgIFwiNFwiOiB7IG5hbWU6IFwib3V0cHV0XzRcIiB9LFxuICAgICAgICAgICAgICAgIFwiNVwiOiB7IG5hbWU6IFwib3V0cHV0XzVcIiB9LFxuICAgICAgICAgICAgICAgIFwiNlwiOiB7IG5hbWU6IFwib3V0cHV0XzZcIiB9LFxuICAgICAgICAgICAgICAgIFwiN1wiOiB7IG5hbWU6IFwib3V0cHV0XzdcIiB9LFxuICAgICAgICAgICAgICAgIFwiOFwiOiB7IG5hbWU6IFwib3V0cHV0XzhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9jb21iaW5lNHg0XCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lTWF0cml4XSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiaW5wdXRfMFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGI6IHsgbmFtZTogXCJpbnB1dF8xXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgYzogeyBuYW1lOiBcImlucHV0XzJcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBkOiB7IG5hbWU6IFwiaW5wdXRfM1wiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGU6IHsgbmFtZTogXCJpbnB1dF80XCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgZjogeyBuYW1lOiBcImlucHV0XzVcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBnOiB7IG5hbWU6IFwiaW5wdXRfNlwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGg6IHsgbmFtZTogXCJpbnB1dF83XCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgaTogeyBuYW1lOiBcImlucHV0XzhcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBqOiB7IG5hbWU6IFwiaW5wdXRfOVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGs6IHsgbmFtZTogXCJpbnB1dF8xMFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGw6IHsgbmFtZTogXCJpbnB1dF8xMVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIG06IHsgbmFtZTogXCJpbnB1dF8xMlwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIG46IHsgbmFtZTogXCJpbnB1dF8xM1wiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIG86IHsgbmFtZTogXCJpbnB1dF8xNFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIHA6IHsgbmFtZTogXCJpbnB1dF8xNVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZy5pbnB1dElzQ29sdW1uTWFqb3IgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL2V4dHJhY3Q0eDRcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RNYXRyaXhdLFxuICAgICAgICBjb25maWd1cmF0aW9uOiB7fSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiaW5wdXRcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIFwiMFwiOiB7IG5hbWU6IFwib3V0cHV0XzBcIiB9LFxuICAgICAgICAgICAgICAgIFwiMVwiOiB7IG5hbWU6IFwib3V0cHV0XzFcIiB9LFxuICAgICAgICAgICAgICAgIFwiMlwiOiB7IG5hbWU6IFwib3V0cHV0XzJcIiB9LFxuICAgICAgICAgICAgICAgIFwiM1wiOiB7IG5hbWU6IFwib3V0cHV0XzNcIiB9LFxuICAgICAgICAgICAgICAgIFwiNFwiOiB7IG5hbWU6IFwib3V0cHV0XzRcIiB9LFxuICAgICAgICAgICAgICAgIFwiNVwiOiB7IG5hbWU6IFwib3V0cHV0XzVcIiB9LFxuICAgICAgICAgICAgICAgIFwiNlwiOiB7IG5hbWU6IFwib3V0cHV0XzZcIiB9LFxuICAgICAgICAgICAgICAgIFwiN1wiOiB7IG5hbWU6IFwib3V0cHV0XzdcIiB9LFxuICAgICAgICAgICAgICAgIFwiOFwiOiB7IG5hbWU6IFwib3V0cHV0XzhcIiB9LFxuICAgICAgICAgICAgICAgIFwiOVwiOiB7IG5hbWU6IFwib3V0cHV0XzlcIiB9LFxuICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIm91dHB1dF8xMFwiIH0sXG4gICAgICAgICAgICAgICAgXCIxMVwiOiB7IG5hbWU6IFwib3V0cHV0XzExXCIgfSxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IHsgbmFtZTogXCJvdXRwdXRfMTJcIiB9LFxuICAgICAgICAgICAgICAgIFwiMTNcIjogeyBuYW1lOiBcIm91dHB1dF8xM1wiIH0sXG4gICAgICAgICAgICAgICAgXCIxNFwiOiB7IG5hbWU6IFwib3V0cHV0XzE0XCIgfSxcbiAgICAgICAgICAgICAgICBcIjE1XCI6IHsgbmFtZTogXCJvdXRwdXRfMTVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9ub3RcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VOb3RdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJhXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoX2dsdGZCbG9jaywgX2RlY2xhcmF0aW9uLCBfbWFwcGluZywgX3BhcnNlciwgc2VyaWFsaXplZE9iamVjdHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSBpdCB0byB3b3JrIHRoZSB3YXkgZ2xURiBzcGVjaWZpZXNcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICAvLyB0cnkgdG8gaW5mZXIgdGhlIHR5cGUgb3IgZmFsbGJhY2sgdG8gSW50ZWdlclxuICAgICAgICAgICAgY29uc3Qgc29ja2V0SW4gPSBzZXJpYWxpemVkT2JqZWN0c1swXS5kYXRhSW5wdXRzWzBdO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnLnZhbHVlVHlwZSA9IGNvbnRleHQuX2Nvbm5lY3Rpb25WYWx1ZXNbc29ja2V0SW4udW5pcXVlSWRdPy50eXBlID8/IEZsb3dHcmFwaFR5cGVzLkludGVnZXI7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1hdGgvYW5kXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlQW5kXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiYVwiIH0sXG4gICAgICAgICAgICAgICAgYjogeyBuYW1lOiBcImJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cywgY29udGV4dCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIC8vIHRyeSB0byBpbmZlciB0aGUgdHlwZSBvciBmYWxsYmFjayB0byBJbnRlZ2VyXG4gICAgICAgICAgICBjb25zdCBzb2NrZXRJbkEgPSBzZXJpYWxpemVkT2JqZWN0c1swXS5kYXRhSW5wdXRzWzBdO1xuICAgICAgICAgICAgY29uc3Qgc29ja2V0SW5CID0gc2VyaWFsaXplZE9iamVjdHNbMF0uZGF0YUlucHV0c1sxXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZy52YWx1ZVR5cGUgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQuX2Nvbm5lY3Rpb25WYWx1ZXNbc29ja2V0SW5BLnVuaXF1ZUlkXT8udHlwZSA/PyBjb250ZXh0Ll9jb25uZWN0aW9uVmFsdWVzW3NvY2tldEluQi51bmlxdWVJZF0/LnR5cGUgPz8gRmxvd0dyYXBoVHlwZXMuSW50ZWdlcjtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC9vclwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZU9yXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhOiB7IG5hbWU6IFwiYVwiIH0sXG4gICAgICAgICAgICAgICAgYjogeyBuYW1lOiBcImJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgbmFtZTogXCJ2YWx1ZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cywgY29udGV4dCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGl0IHRvIHdvcmsgdGhlIHdheSBnbFRGIHNwZWNpZmllc1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIC8vIHRyeSB0byBpbmZlciB0aGUgdHlwZSBvciBmYWxsYmFjayB0byBJbnRlZ2VyXG4gICAgICAgICAgICBjb25zdCBzb2NrZXRJbkEgPSBzZXJpYWxpemVkT2JqZWN0c1swXS5kYXRhSW5wdXRzWzBdO1xuICAgICAgICAgICAgY29uc3Qgc29ja2V0SW5CID0gc2VyaWFsaXplZE9iamVjdHNbMF0uZGF0YUlucHV0c1sxXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzBdLmNvbmZpZy52YWx1ZVR5cGUgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQuX2Nvbm5lY3Rpb25WYWx1ZXNbc29ja2V0SW5BLnVuaXF1ZUlkXT8udHlwZSA/PyBjb250ZXh0Ll9jb25uZWN0aW9uVmFsdWVzW3NvY2tldEluQi51bmlxdWVJZF0/LnR5cGUgPz8gRmxvd0dyYXBoVHlwZXMuSW50ZWdlcjtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibWF0aC94b3JcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VYb3JdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGE6IHsgbmFtZTogXCJhXCIgfSxcbiAgICAgICAgICAgICAgICBiOiB7IG5hbWU6IFwiYlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBuYW1lOiBcInZhbHVlXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKF9nbHRmQmxvY2ssIF9kZWNsYXJhdGlvbiwgX21hcHBpbmcsIF9wYXJzZXIsIHNlcmlhbGl6ZWRPYmplY3RzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgaXQgdG8gd29yayB0aGUgd2F5IGdsVEYgc3BlY2lmaWVzXG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0c1swXS5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgLy8gdHJ5IHRvIGluZmVyIHRoZSB0eXBlIG9yIGZhbGxiYWNrIHRvIEludGVnZXJcbiAgICAgICAgICAgIGNvbnN0IHNvY2tldEluQSA9IHNlcmlhbGl6ZWRPYmplY3RzWzBdLmRhdGFJbnB1dHNbMF07XG4gICAgICAgICAgICBjb25zdCBzb2NrZXRJbkIgPSBzZXJpYWxpemVkT2JqZWN0c1swXS5kYXRhSW5wdXRzWzFdO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnLnZhbHVlVHlwZSA9XG4gICAgICAgICAgICAgICAgY29udGV4dC5fY29ubmVjdGlvblZhbHVlc1tzb2NrZXRJbkEudW5pcXVlSWRdPy50eXBlID8/IGNvbnRleHQuX2Nvbm5lY3Rpb25WYWx1ZXNbc29ja2V0SW5CLnVuaXF1ZUlkXT8udHlwZSA/PyBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJtYXRoL2FzclwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlUmlnaHRTaGlmdCwgW1wiYVwiLCBcImJcIl0pLFxuICAgIFwibWF0aC9sc2xcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUxlZnRTaGlmdCwgW1wiYVwiLCBcImJcIl0pLFxuICAgIFwibWF0aC9jbHpcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVhZGluZ1plcm9zKSxcbiAgICBcIm1hdGgvY3R6XCI6IGdldFNpbXBsZUlucHV0TWFwcGluZyhGbG93R3JhcGhCbG9ja05hbWVzLlRyYWlsaW5nWmVyb3MpLFxuICAgIFwibWF0aC9wb3BjbnRcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuT25lQml0c0NvdW50ZXIpLFxuICAgIFwibWF0aC9yYWRcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuRGVnVG9SYWQpLFxuICAgIFwibWF0aC9kZWdcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuUmFkVG9EZWcpLFxuICAgIFwidHlwZS9ib29sVG9JbnRcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQm9vbGVhblRvSW50KSxcbiAgICBcInR5cGUvYm9vbFRvRmxvYXRcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuQm9vbGVhblRvRmxvYXQpLFxuICAgIFwidHlwZS9pbnRUb0Jvb2xcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuSW50VG9Cb29sZWFuKSxcbiAgICBcInR5cGUvaW50VG9GbG9hdFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnRUb0Zsb2F0KSxcbiAgICBcInR5cGUvZmxvYXRUb0ludFwiOiBnZXRTaW1wbGVJbnB1dE1hcHBpbmcoRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9hdFRvSW50KSxcbiAgICBcInR5cGUvZmxvYXRUb0Jvb2xcIjogZ2V0U2ltcGxlSW5wdXRNYXBwaW5nKEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxvYXRUb0Jvb2xlYW4pLFxuXG4gICAgLy8gZmxvd3NcbiAgICBcImZsb3cvc2VxdWVuY2VcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlNlcXVlbmNlXSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZE9iamVjdCA9IHNlcmlhbGl6ZWRPYmplY3RzWzBdO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcub3V0cHV0U2lnbmFsQ291bnQgPSBPYmplY3Qua2V5cyhnbHRmQmxvY2suZmxvd3MgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3Quc2lnbmFsT3V0cHV0cy5mb3JFYWNoKChvdXRwdXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0Lm5hbWUgPSBcIm91dF9cIiArIGluZGV4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImZsb3cvYnJhbmNoXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5CcmFuY2hdLFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICBmbG93czoge1xuICAgICAgICAgICAgICAgIHRydWU6IHsgbmFtZTogXCJvblRydWVcIiB9LFxuICAgICAgICAgICAgICAgIGZhbHNlOiB7IG5hbWU6IFwib25GYWxzZVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJmbG93L3N3aXRjaFwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuU3dpdGNoXSxcbiAgICAgICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICAgICAgY2FzZXM6IHsgbmFtZTogXCJjYXNlc1wiLCBpc0FycmF5OiB0cnVlLCBpbk9wdGlvbnM6IHRydWUsIGRlZmF1bHRWYWx1ZTogW10gfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHsgbmFtZTogXCJjYXNlXCIgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7IG5hbWU6IFwiZGVmYXVsdFwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uKGdsdGZCbG9jaykge1xuICAgICAgICAgICAgY29uc3QgY2FzZXMgPSBnbHRmQmxvY2suY29uZmlndXJhdGlvbj8uY2FzZXM7XG4gICAgICAgICAgICBpZiAoY2FzZXMgJiYgY2FzZXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbmx5SW50ZWdlcnMgPSBjYXNlcy52YWx1ZS5ldmVyeSgoY2FzZVZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgdmFsdWUgc2hvdWxkIGJlIGFuIGludGVnZXIuIFNpbmNlIE51bWJlci5pc0ludGVnZXIoMS4wKSBpcyB0cnVlLCB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRvU3RyaW5nIGhhcyBvbmx5IGRpZ2l0cy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjYXNlVmFsdWUgPT09IFwibnVtYmVyXCIgJiYgL14tP1xcZCskLy50ZXN0KGNhc2VWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIW9ubHlJbnRlZ2Vycykge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIlN3aXRjaCBjYXNlcyBzaG91bGQgYmUgaW50ZWdlcnMuIFVzaW5nIGVtcHR5IGFycmF5IGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlcy52YWx1ZSA9IFtdIGFzIG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgZHVwbGljYXRlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUNhc2VzID0gbmV3IFNldChjYXNlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY2FzZXMudmFsdWUgPSBBcnJheS5mcm9tKHVuaXF1ZUNhc2VzKSBhcyBudW1iZXJbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKGdsdGZCbG9jaywgZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgLy8gY29udmVydCBhbGwgbmFtZXMgb2Ygb3V0cHV0IGZsb3cgdG8gb3V0XyQxIGFwYXJ0IGZyb20gXCJkZWZhdWx0XCJcbiAgICAgICAgICAgIGlmIChkZWNsYXJhdGlvbi5vcCAhPT0gXCJmbG93L3N3aXRjaFwiIHx8ICFnbHRmQmxvY2suZmxvd3MgfHwgT2JqZWN0LmtleXMoZ2x0ZkJsb2NrLmZsb3dzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTd2l0Y2ggc2hvdWxkIGhhdmUgYSBzaW5nbGUgY29uZmlndXJhdGlvbiBvYmplY3QsIHRoZSBjYXNlcyBhcnJheVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRPYmplY3QgPSBzZXJpYWxpemVkT2JqZWN0c1swXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3Quc2lnbmFsT3V0cHV0cy5mb3JFYWNoKChvdXRwdXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lm5hbWUgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5uYW1lID0gXCJvdXRfXCIgKyBvdXRwdXQubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwiZmxvdy93aGlsZVwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuV2hpbGVMb29wXSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBsb29wQm9keTogeyBuYW1lOiBcImV4ZWN1dGlvbkZsb3dcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwiZmxvdy9mb3JcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkZvckxvb3BdLFxuICAgICAgICBjb25maWd1cmF0aW9uOiB7XG4gICAgICAgICAgICBpbml0aWFsSW5kZXg6IHsgbmFtZTogXCJpbml0aWFsSW5kZXhcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIsIGluT3B0aW9uczogdHJ1ZSwgZGVmYXVsdFZhbHVlOiAwIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleDogeyBuYW1lOiBcInN0YXJ0SW5kZXhcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBlbmRJbmRleDogeyBuYW1lOiBcImVuZEluZGV4XCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBpbmRleDogeyBuYW1lOiBcImluZGV4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbG93czoge1xuICAgICAgICAgICAgICAgIGxvb3BCb2R5OiB7IG5hbWU6IFwiZXhlY3V0aW9uRmxvd1wiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZE9iamVjdCA9IHNlcmlhbGl6ZWRPYmplY3RzWzBdO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcuaW5jcmVtZW50SW5kZXhXaGVuTG9vcERvbmUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJmbG93L2RvTlwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuRG9OXSxcbiAgICAgICAgY29uZmlndXJhdGlvbjoge30sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgbjogeyBuYW1lOiBcIm1heEV4ZWN1dGlvbnNcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb3VudDogeyBuYW1lOiBcImV4ZWN1dGlvbkNvdW50XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImZsb3cvbXVsdGlHYXRlXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5NdWx0aUdhdGVdLFxuICAgICAgICBjb25maWd1cmF0aW9uOiB7XG4gICAgICAgICAgICBpc1JhbmRvbTogeyBuYW1lOiBcImlzUmFuZG9tXCIsIGdsdGZUeXBlOiBcImJvb2xlYW5cIiwgaW5PcHRpb25zOiB0cnVlLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0sXG4gICAgICAgICAgICBpc0xvb3A6IHsgbmFtZTogXCJpc0xvb3BcIiwgZ2x0ZlR5cGU6IFwiYm9vbGVhblwiLCBpbk9wdGlvbnM6IHRydWUsIGRlZmF1bHRWYWx1ZTogZmFsc2UgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBkZWNsYXJhdGlvbiwgX21hcHBpbmcsIF9hcnJheXMsIHNlcmlhbGl6ZWRPYmplY3RzKSB7XG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb24ub3AgIT09IFwiZmxvdy9tdWx0aUdhdGVcIiB8fCAhZ2x0ZkJsb2NrLmZsb3dzIHx8IE9iamVjdC5rZXlzKGdsdGZCbG9jay5mbG93cykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVsdGlHYXRlIHNob3VsZCBoYXZlIGEgc2luZ2xlIGNvbmZpZ3VyYXRpb24gb2JqZWN0LCB0aGUgbnVtYmVyIG9mIG91dHB1dCBmbG93c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRPYmplY3QgPSBzZXJpYWxpemVkT2JqZWN0c1swXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnLm91dHB1dFNpZ25hbENvdW50ID0gT2JqZWN0LmtleXMoZ2x0ZkJsb2NrLmZsb3dzKS5sZW5ndGg7XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LnNpZ25hbE91dHB1dHMuZm9yRWFjaCgob3V0cHV0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dHB1dC5uYW1lID0gXCJvdXRfXCIgKyBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJmbG93L3dhaXRBbGxcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLldhaXRBbGxdLFxuICAgICAgICBjb25maWd1cmF0aW9uOiB7XG4gICAgICAgICAgICBpbnB1dEZsb3dzOiB7IG5hbWU6IFwiaW5wdXRTaWduYWxDb3VudFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiwgaW5PcHRpb25zOiB0cnVlLCBkZWZhdWx0VmFsdWU6IDAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICBmbG93czoge1xuICAgICAgICAgICAgICAgIHJlc2V0OiB7IG5hbWU6IFwicmVzZXRcIiB9LFxuICAgICAgICAgICAgICAgIFwiW3NlZ21lbnRdXCI6IHsgbmFtZTogXCJpbl8kMVwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uKGdsdGZCbG9jaykge1xuICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgY29uZmlndXJhdGlvbiB2YWx1ZSBpcyBhbiBpbnRlZ2VyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGdsdGZCbG9jay5jb25maWd1cmF0aW9uPy5pbnB1dEZsb3dzPy52YWx1ZT8uWzBdICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb24gPSBnbHRmQmxvY2suY29uZmlndXJhdGlvbiB8fCB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0Rmxvd3M6IHsgdmFsdWU6IFswXSB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb24uaW5wdXRGbG93cy52YWx1ZSA9IFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImZsb3cvdGhyb3R0bGVcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlRocm90dGxlXSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBlcnI6IHsgbmFtZTogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJmbG93L3NldERlbGF5XCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXREZWxheV0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgICAgICAgZXJyOiB7IG5hbWU6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwiZmxvdy9jYW5jZWxEZWxheVwiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuQ2FuY2VsRGVsYXldLFxuICAgIH0sXG4gICAgXCJ2YXJpYWJsZS9nZXRcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkdldFZhcmlhYmxlXSxcbiAgICAgICAgdmFsaWRhdGlvbihnbHRmQmxvY2spIHtcbiAgICAgICAgICAgIGlmICghZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb24/LnZhcmlhYmxlPy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIlZhcmlhYmxlIGdldCBibG9jayBzaG91bGQgaGF2ZSBhIHZhcmlhYmxlIGNvbmZpZ3VyYXRpb25cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBlcnJvcjogXCJWYXJpYWJsZSBnZXQgYmxvY2sgc2hvdWxkIGhhdmUgYSB2YXJpYWJsZSBjb25maWd1cmF0aW9uXCIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ2YXJpYWJsZVwiLFxuICAgICAgICAgICAgICAgIGdsdGZUeXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGZsb3dHcmFwaFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgaW5PcHRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGF0YVRyYW5zZm9ybWVyKGluZGV4LCBwYXJzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlci5nZXRWYXJpYWJsZU5hbWUoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJ2YXJpYWJsZS9zZXRcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlNldFZhcmlhYmxlXSxcbiAgICAgICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ2YXJpYWJsZXNcIixcbiAgICAgICAgICAgICAgICBnbHRmVHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBmbG93R3JhcGhUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIGluT3B0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGFUcmFuc2Zvcm1lcihpbmRleDogbnVtYmVyW10sIHBhcnNlcik6IHN0cmluZ1tdIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4Lm1hcCgoaSkgPT4gcGFyc2VyLmdldFZhcmlhYmxlTmFtZShpKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKF9nbHRmQmxvY2ssIF9kZWNsYXJhdGlvbiwgX21hcHBpbmcsIHBhcnNlciwgc2VyaWFsaXplZE9iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIHZhcmlhYmxlL2dldCBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkR2V0VmFyaWFibGUgPSBzZXJpYWxpemVkT2JqZWN0c1swXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRHZXRWYXJpYWJsZS5kYXRhSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9IHBhcnNlci5nZXRWYXJpYWJsZU5hbWUoK2lucHV0Lm5hbWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwidmFyaWFibGUvaW50ZXJwb2xhdGVcIjoge1xuICAgICAgICBibG9ja3M6IFtcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuVmFsdWVJbnRlcnBvbGF0aW9uLFxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db250ZXh0LFxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uLFxuICAgICAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5CZXppZXJDdXJ2ZUVhc2luZyxcbiAgICAgICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0VmFyaWFibGUsXG4gICAgICAgIF0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJwcm9wZXJ0eU5hbWVcIixcbiAgICAgICAgICAgICAgICBpbk9wdGlvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhVHJhbnNmb3JtZXIoaW5kZXgsIHBhcnNlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VyLmdldFZhcmlhYmxlTmFtZShpbmRleCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VTbGVycDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiYW5pbWF0aW9uVHlwZVwiLFxuICAgICAgICAgICAgICAgIGluT3B0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGFUcmFuc2Zvcm1lcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgPyBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVfMVwiIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHsgbmFtZTogXCJkdXJhdGlvbl8xXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgcDE6IHsgbmFtZTogXCJjb250cm9sUG9pbnQxXCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuQmV6aWVyQ3VydmVFYXNpbmcgfSxcbiAgICAgICAgICAgICAgICBwMjogeyBuYW1lOiBcImNvbnRyb2xQb2ludDJcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5CZXppZXJDdXJ2ZUVhc2luZyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgICAgICAgaW46IHsgbmFtZTogXCJpblwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb24gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgICAgICAgZXJyOiB7IG5hbWU6IFwiZXJyb3JcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uIH0sXG4gICAgICAgICAgICAgICAgb3V0OiB7IG5hbWU6IFwib3V0XCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuUGxheUFuaW1hdGlvbiB9LFxuICAgICAgICAgICAgICAgIGRvbmU6IHsgbmFtZTogXCJkb25lXCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuUGxheUFuaW1hdGlvbiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJCbG9ja0Nvbm5lY3RvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwidXNlclZhcmlhYmxlc1wiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMixcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcImFuaW1hdGlvblwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJhbmltYXRpb25cIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJlYXNpbmdGdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJlYXNpbmdGdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAzLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcInZhbHVlXzBcIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogNCxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBwYXJzZXIsIHNlcmlhbGl6ZWRPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBpcyB1c2VTbGVycCBpcyB1c2VkLCBhbmltYXRpb25UeXBlIHNob3VsZCBiZSBzZXQgdG8gYmUgcXVhdGVybmlvbiFcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRWYWx1ZUludGVycG9sYXRpb24gPSBzZXJpYWxpemVkT2JqZWN0c1swXTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5SW5kZXggPSBnbHRmQmxvY2suY29uZmlndXJhdGlvbj8udmFyaWFibGUudmFsdWU/LlswXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHlJbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIlZhcmlhYmxlIGluZGV4IGlzIG5vdCBkZWZpbmVkIGZvciB2YXJpYWJsZSBpbnRlcnBvbGF0aW9uIGJsb2NrXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhcmlhYmxlIGluZGV4IGlzIG5vdCBkZWZpbmVkIGZvciB2YXJpYWJsZSBpbnRlcnBvbGF0aW9uIGJsb2NrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSBwYXJzZXIuYXJyYXlzLnN0YXRpY1ZhcmlhYmxlc1twcm9wZXJ0eUluZGV4XTtcbiAgICAgICAgICAgIC8vIGlmIG5vdCBzZXQgYnkgdXNlU2xlcnBcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VyaWFsaXplZFZhbHVlSW50ZXJwb2xhdGlvbi5jb25maWc/LmFuaW1hdGlvblR5cGU/LnZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZFZhbHVlSW50ZXJwb2xhdGlvbi5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRWYWx1ZUludGVycG9sYXRpb24uY29uZmlnLmFuaW1hdGlvblR5cGUgfHw9IHt9O1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRWYWx1ZUludGVycG9sYXRpb24uY29uZmlnLmFuaW1hdGlvblR5cGUudmFsdWUgPSBnZXRBbmltYXRpb25UeXBlQnlGbG93R3JhcGhUeXBlKHZhcmlhYmxlLnR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2YXJpYWJsZS9nZXQgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZEdldFZhcmlhYmxlID0gc2VyaWFsaXplZE9iamVjdHNbNF07XG4gICAgICAgICAgICBzZXJpYWxpemVkR2V0VmFyaWFibGUuY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRHZXRWYXJpYWJsZS5jb25maWcudmFyaWFibGUgfHw9IHt9O1xuICAgICAgICAgICAgc2VyaWFsaXplZEdldFZhcmlhYmxlLmNvbmZpZy52YXJpYWJsZS52YWx1ZSA9IHBhcnNlci5nZXRWYXJpYWJsZU5hbWUocHJvcGVydHlJbmRleCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwicG9pbnRlci9nZXRcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLkdldFByb3BlcnR5LCBGbG93R3JhcGhCbG9ja05hbWVzLkpzb25Qb2ludGVyUGFyc2VyXSxcbiAgICAgICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICAgICAgcG9pbnRlcjogeyBuYW1lOiBcImpzb25Qb2ludGVyXCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBcIltzZWdtZW50XVwiOiB7IG5hbWU6IFwiJDFcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlciB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJCbG9ja0Nvbm5lY3RvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAwLFxuICAgICAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IFwicHJvcGVydHlOYW1lXCIsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBcInByb3BlcnR5TmFtZVwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcImN1c3RvbUdldEZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBcImdldEZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAwLFxuICAgICAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKGdsdGZCbG9jaywgX2RlY2xhcmF0aW9uLCBfbWFwcGluZywgcGFyc2VyLCBzZXJpYWxpemVkT2JqZWN0cykge1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHMuZm9yRWFjaCgoc2VyaWFsaXplZE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0IGlzIHRoZSBqc29uIHBvaW50ZXIgYmxvY2tcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZE9iamVjdC5jbGFzc05hbWUgPT09IEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZy5vdXRwdXRWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcInBvaW50ZXIvc2V0XCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXRQcm9wZXJ0eSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlcl0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgICAgIHBvaW50ZXI6IHsgbmFtZTogXCJqc29uUG9pbnRlclwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLkpzb25Qb2ludGVyUGFyc2VyIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0czoge1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgLy8gbXVzdCBiZSBkZWZpbmVkIGR1ZSB0byB0aGUgYXJyYXkgdGFraW5nIG92ZXJcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBuYW1lOiBcInZhbHVlXCIgfSxcbiAgICAgICAgICAgICAgICBcIltzZWdtZW50XVwiOiB7IG5hbWU6IFwiJDFcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlciB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBlcnI6IHsgbmFtZTogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbnRlckJsb2NrQ29ubmVjdG9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJwcm9wZXJ0eU5hbWVcIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwicHJvcGVydHlOYW1lXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAwLFxuICAgICAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IFwiY3VzdG9tU2V0RnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwic2V0RnVuY3Rpb25cIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBwYXJzZXIsIHNlcmlhbGl6ZWRPYmplY3RzKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0cy5mb3JFYWNoKChzZXJpYWxpemVkT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgaXMgdGhlIGpzb24gcG9pbnRlciBibG9ja1xuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkT2JqZWN0LmNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnLm91dHB1dFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwicG9pbnRlci9pbnRlcnBvbGF0ZVwiOiB7XG4gICAgICAgIC8vIGludGVycG9sYXRlLCBwYXJzZSB0aGUgcG9pbnRlciBhbmQgcGxheSB0aGUgYW5pbWF0aW9uIGdlbmVyYXRlZC4gMyBibG9ja3MhXG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuVmFsdWVJbnRlcnBvbGF0aW9uLCBGbG93R3JhcGhCbG9ja05hbWVzLkpzb25Qb2ludGVyUGFyc2VyLCBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb24sIEZsb3dHcmFwaEJsb2NrTmFtZXMuQmV6aWVyQ3VydmVFYXNpbmddLFxuICAgICAgICBjb25maWd1cmF0aW9uOiB7XG4gICAgICAgICAgICBwb2ludGVyOiB7IG5hbWU6IFwianNvblBvaW50ZXJcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlciB9LFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7IG5hbWU6IFwidmFsdWVfMVwiIH0sXG4gICAgICAgICAgICAgICAgXCJbc2VnbWVudF1cIjogeyBuYW1lOiBcIiQxXCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXIgfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogeyBuYW1lOiBcImR1cmF0aW9uXzFcIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIgLyosIGluT3B0aW9uczogdHJ1ZSAqLyB9LFxuICAgICAgICAgICAgICAgIHAxOiB7IG5hbWU6IFwiY29udHJvbFBvaW50MVwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLkJlemllckN1cnZlRWFzaW5nIH0sXG4gICAgICAgICAgICAgICAgcDI6IHsgbmFtZTogXCJjb250cm9sUG9pbnQyXCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuQmV6aWVyQ3VydmVFYXNpbmcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbG93czoge1xuICAgICAgICAgICAgICAgIGluOiB7IG5hbWU6IFwiaW5cIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICBmbG93czoge1xuICAgICAgICAgICAgICAgIGVycjogeyBuYW1lOiBcImVycm9yXCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuUGxheUFuaW1hdGlvbiB9LFxuICAgICAgICAgICAgICAgIG91dDogeyBuYW1lOiBcIm91dFwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb24gfSxcbiAgICAgICAgICAgICAgICBkb25lOiB7IG5hbWU6IFwiZG9uZVwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb24gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGludGVyQmxvY2tDb25uZWN0b3JzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMixcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcInByb3BlcnR5TmFtZVwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJwcm9wZXJ0eU5hbWVcIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJjdXN0b21CdWlsZEFuaW1hdGlvblwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJnZW5lcmF0ZUFuaW1hdGlvbnNGdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcImFuaW1hdGlvblwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJhbmltYXRpb25cIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJlYXNpbmdGdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJlYXNpbmdGdW5jdGlvblwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAzLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcInZhbHVlXzBcIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBwYXJzZXIsIHNlcmlhbGl6ZWRPYmplY3RzKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0cy5mb3JFYWNoKChzZXJpYWxpemVkT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgaXMgdGhlIGpzb24gcG9pbnRlciBibG9ja1xuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkT2JqZWN0LmNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlcikge1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnLm91dHB1dFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlcmlhbGl6ZWRPYmplY3QuY2xhc3NOYW1lID09PSBGbG93R3JhcGhCbG9ja05hbWVzLlZhbHVlSW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGdsdGZCbG9jay52YWx1ZXMgfHwgW10pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnbHRmQmxvY2sudmFsdWVzPy5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwidmFsdWVcIiAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgdHlwZSBvZiB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnLmFuaW1hdGlvblR5cGUgPSBwYXJzZXIuYXJyYXlzLnR5cGVzW3R5cGVdLmZsb3dHcmFwaFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwiYW5pbWF0aW9uL3N0YXJ0XCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uLCBGbG93R3JhcGhCbG9ja05hbWVzLkFycmF5SW5kZXgsIFwiS0hSX2ludGVyYWN0aXZpdHkvRmxvd0dyYXBoR0xURkRhdGFQcm92aWRlclwiXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHsgbmFtZTogXCJpbmRleFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5BcnJheUluZGV4IH0sXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHsgbmFtZTogXCJzcGVlZFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogeyBuYW1lOiBcImZyb21cIiwgZ2x0ZlR5cGU6IFwibnVtYmVyXCIsIGRhdGFUcmFuc2Zvcm1lcjogKHRpbWU6IG51bWJlcltdLCBwYXJzZXIpID0+IFt0aW1lWzBdICogcGFyc2VyLl9hbmltYXRpb25UYXJnZXRGcHNdIH0sXG4gICAgICAgICAgICAgICAgZW5kVGltZTogeyBuYW1lOiBcInRvXCIsIGdsdGZUeXBlOiBcIm51bWJlclwiLCBkYXRhVHJhbnNmb3JtZXI6ICh0aW1lOiBudW1iZXJbXSwgcGFyc2VyKSA9PiBbdGltZVswXSAqIHBhcnNlci5fYW5pbWF0aW9uVGFyZ2V0RnBzXSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgICAgICBlcnI6IHsgbmFtZTogXCJlcnJvclwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbnRlckJsb2NrQ29ubmVjdG9yczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcImFuaW1hdGlvbkdyb3VwXCIsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAwLFxuICAgICAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IFwiYW5pbWF0aW9uR3JvdXBzXCIsXG4gICAgICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDIsXG4gICAgICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKF9nbHRmQmxvY2ssIF9kZWNsYXJhdGlvbiwgX21hcHBpbmcsIF9hcnJheXMsIHNlcmlhbGl6ZWRPYmplY3RzLCBfY29udGV4dCwgZ2xvYmFsR0xURikge1xuICAgICAgICAgICAgLy8gYWRkIHRoZSBnbFRGIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBsYXN0IHNlcmlhbGl6ZWQgb2JqZWN0XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkT2JqZWN0ID0gc2VyaWFsaXplZE9iamVjdHNbc2VyaWFsaXplZE9iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZy5nbFRGID0gZ2xvYmFsR0xURjtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVkT2JqZWN0cztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwiYW5pbWF0aW9uL3N0b3BcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlN0b3BBbmltYXRpb24sIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXJyYXlJbmRleCwgXCJLSFJfaW50ZXJhY3Rpdml0eS9GbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyXCJdLFxuICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogeyBuYW1lOiBcImluZGV4XCIsIGdsdGZUeXBlOiBcIm51bWJlclwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLkFycmF5SW5kZXggfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgICAgICAgZXJyOiB7IG5hbWU6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJCbG9ja0Nvbm5lY3RvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJhbmltYXRpb25Hcm91cFwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBcImFuaW1hdGlvbkdyb3Vwc1wiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAyLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cywgX2NvbnRleHQsIGdsb2JhbEdMVEYpIHtcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZ2xURiB0byB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgbGFzdCBzZXJpYWxpemVkIG9iamVjdFxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZE9iamVjdCA9IHNlcmlhbGl6ZWRPYmplY3RzW3NlcmlhbGl6ZWRPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcuZ2xURiA9IGdsb2JhbEdMVEY7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImFuaW1hdGlvbi9zdG9wQXRcIjoge1xuICAgICAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLlN0b3BBbmltYXRpb24sIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXJyYXlJbmRleCwgXCJLSFJfaW50ZXJhY3Rpdml0eS9GbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyXCJdLFxuICAgICAgICBjb25maWd1cmF0aW9uOiB7fSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHsgbmFtZTogXCJpbmRleFwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiwgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5BcnJheUluZGV4IH0sXG4gICAgICAgICAgICAgICAgc3RvcFRpbWU6IHsgbmFtZTogXCJzdG9wQXRGcmFtZVwiLCBnbHRmVHlwZTogXCJudW1iZXJcIiwgZGF0YVRyYW5zZm9ybWVyOiAodGltZTogbnVtYmVyW10sIHBhcnNlcikgPT4gW3RpbWVbMF0gKiBwYXJzZXIuX2FuaW1hdGlvblRhcmdldEZwc10gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgICAgICAgZXJyOiB7IG5hbWU6IFwiZXJyb3JcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJCbG9ja0Nvbm5lY3RvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dDogXCJhbmltYXRpb25Hcm91cFwiLFxuICAgICAgICAgICAgICAgIG91dHB1dDogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMCxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBcImFuaW1hdGlvbkdyb3Vwc1wiLFxuICAgICAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAyLFxuICAgICAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBleHRyYVByb2Nlc3NvcihfZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cywgX2NvbnRleHQsIGdsb2JhbEdMVEYpIHtcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZ2xURiB0byB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgbGFzdCBzZXJpYWxpemVkIG9iamVjdFxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZE9iamVjdCA9IHNlcmlhbGl6ZWRPYmplY3RzW3NlcmlhbGl6ZWRPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcgfHw9IHt9O1xuICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcuZ2xURiA9IGdsb2JhbEdMVEY7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIm1hdGgvc3dpdGNoXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbRmxvd0dyYXBoQmxvY2tOYW1lcy5EYXRhU3dpdGNoXSxcbiAgICAgICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICAgICAgY2FzZXM6IHsgbmFtZTogXCJjYXNlc1wiLCBpc0FycmF5OiB0cnVlLCBpbk9wdGlvbnM6IHRydWUsIGRlZmF1bHRWYWx1ZTogW10gfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHsgbmFtZTogXCJjYXNlXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRpb24oZ2x0ZkJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXNlcyA9IGdsdGZCbG9jay5jb25maWd1cmF0aW9uPy5jYXNlcztcbiAgICAgICAgICAgIGlmIChjYXNlcyAmJiBjYXNlcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ubHlJbnRlZ2VycyA9IGNhc2VzLnZhbHVlLmV2ZXJ5KChjYXNlVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSB2YWx1ZSBzaG91bGQgYmUgYW4gaW50ZWdlci4gU2luY2UgTnVtYmVyLmlzSW50ZWdlcigxLjApIGlzIHRydWUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgdG9TdHJpbmcgaGFzIG9ubHkgZGlnaXRzLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGNhc2VWYWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAvXi0/XFxkKyQvLnRlc3QoY2FzZVZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghb25seUludGVnZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiU3dpdGNoIGNhc2VzIHNob3VsZCBiZSBpbnRlZ2Vycy4gVXNpbmcgZW1wdHkgYXJyYXkgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzLnZhbHVlID0gW10gYXMgbnVtYmVyW107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbGlkOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkdXBsaWNhdGVzXG4gICAgICAgICAgICAgICAgY29uc3QgdW5pcXVlQ2FzZXMgPSBuZXcgU2V0KGNhc2VzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjYXNlcy52YWx1ZSA9IEFycmF5LmZyb20odW5pcXVlQ2FzZXMpIGFzIG51bWJlcltdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZXh0cmFQcm9jZXNzb3IoX2dsdGZCbG9jaywgX2RlY2xhcmF0aW9uLCBfbWFwcGluZywgX2FycmF5cywgc2VyaWFsaXplZE9iamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRPYmplY3QgPSBzZXJpYWxpemVkT2JqZWN0c1swXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuZGF0YUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lICE9PSBcImRlZmF1bHRcIiAmJiBpbnB1dC5uYW1lICE9PSBcImNhc2VcIikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gXCJpbl9cIiArIGlucHV0Lm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fD0ge307XG4gICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZy50cmVhdENhc2VzQXNJbnRlZ2VycyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImRlYnVnL2xvZ1wiOiB7XG4gICAgICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuQ29uc29sZUxvZ10sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHsgbmFtZTogXCJtZXNzYWdlVGVtcGxhdGVcIiwgaW5PcHRpb25zOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmZ1bmN0aW9uIGdldFNpbXBsZUlucHV0TWFwcGluZyh0eXBlOiBGbG93R3JhcGhCbG9ja05hbWVzLCBpbnB1dHM6IHN0cmluZ1tdID0gW1wiYVwiXSwgaW5mZXJUeXBlPzogYm9vbGVhbik6IElHTFRGVG9GbG93R3JhcGhNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBibG9ja3M6IFt0eXBlXSxcbiAgICAgICAgaW5wdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IGlucHV0cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2lucHV0XSA9IHsgbmFtZTogaW5wdXQgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt9IGFzIHsgW2tleTogc3RyaW5nXTogeyBuYW1lOiBzdHJpbmcgfSB9XG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogeyBuYW1lOiBcInZhbHVlXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGV4dHJhUHJvY2Vzc29yKGdsdGZCbG9jaywgX2RlY2xhcmF0aW9uLCBfbWFwcGluZywgX3BhcnNlciwgc2VyaWFsaXplZE9iamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChpbmZlclR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25maWd1cmUgaXQgdG8gd29yayB0aGUgd2F5IGdsVEYgc3BlY2lmaWVzXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMF0uY29uZmlnIHx8PSB7fTtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0c1swXS5jb25maWcucHJldmVudEludGVnZXJGbG9hdEFyaXRobWV0aWMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBpbmZlciB0aGUgdHlwZSBvciBmYWxsYmFjayB0byBJbnRlZ2VyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGdsdGYgYmxvY2sgZm9yIHRoZSBpbnB1dHMsIHNlZSBpZiB0aGV5IGhhdmUgYSB0eXBlXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAtMTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhnbHRmQmxvY2sudmFsdWVzIHx8IHt9KS5maW5kKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2x0ZkJsb2NrLnZhbHVlcz8uW3ZhbHVlXS50eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBnbHRmQmxvY2sudmFsdWVzW3ZhbHVlXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkT2JqZWN0c1swXS5jb25maWcudHlwZSA9IF9wYXJzZXIuYXJyYXlzLnR5cGVzW3R5cGVdLmZsb3dHcmFwaFR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uKGdsdGZCbG9jaykge1xuICAgICAgICAgICAgaWYgKGluZmVyVHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0eXBlcyBhcmUgdGhlIHNhbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGVUeXBlcyhnbHRmQmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUgfTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBWYWxpZGF0ZVR5cGVzKGdsdGZCbG9jazogSUtIUkludGVyYWN0aXZpdHlfTm9kZSk6IHsgdmFsaWQ6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH0ge1xuICAgIGlmIChnbHRmQmxvY2sudmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoZ2x0ZkJsb2NrLnZhbHVlcylcbiAgICAgICAgICAgIC5tYXAoKGtleSkgPT4gZ2x0ZkJsb2NrLnZhbHVlcyFba2V5XS50eXBlKVxuICAgICAgICAgICAgLmZpbHRlcigodHlwZSkgPT4gdHlwZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgY29uc3QgYWxsU2FtZVR5cGUgPSB0eXBlcy5ldmVyeSgodHlwZSkgPT4gdHlwZSA9PT0gdHlwZXNbMF0pO1xuICAgICAgICBpZiAoIWFsbFNhbWVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWxpZDogZmFsc2UsIGVycm9yOiBcIkFsbCBpbnB1dHMgbXVzdCBiZSBvZiB0aGUgc2FtZSB0eXBlXCIgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWxpZDogdHJ1ZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3VwcG9ydGVkTmF0aXZlTm9kZVR5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZ2x0ZlRvRmxvd0dyYXBoTWFwcGluZyk7XG59XG5cbi8qKlxuICogXG4gKiBUaGVzZSBhcmUgdGhlIG5vZGVzIGZyb20gdGhlIHNwZWNzOlxuXG4jIyMgTWF0aCBOb2Rlc1xuMS4gKipDb25zdGFudHMqKlxuICAgLSBFIChgbWF0aC9FYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5FXG4gICAtIFBpIChgbWF0aC9QaWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuUElcbiAgIC0gSW5maW5pdHkgKGBtYXRoL0luZmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuSW5mXG4gICAtIE5vdCBhIE51bWJlciAoYG1hdGgvTmFOYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5OYU5cbjIuICoqQXJpdGhtZXRpYyBOb2RlcyoqXG4gICAtIEFic29sdXRlIFZhbHVlIChgbWF0aC9hYnNgKSBGbG93R3JhcGhCbG9ja05hbWVzLkFic1xuICAgLSBTaWduIChgbWF0aC9zaWduYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaWduXG4gICAtIFRydW5jYXRlIChgbWF0aC90cnVuY2ApIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJ1bmNcbiAgIC0gRmxvb3IgKGBtYXRoL2Zsb29yYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9vclxuICAgLSBDZWlsIChgbWF0aC9jZWlsYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5DZWlsXG4gICAtIFJvdW5kIChgbWF0aC9yb3VuZGApICBGbG93R3JhcGhCbG9ja05hbWVzLlJvdW5kXG4gICAtIEZyYWN0aW9uIChgbWF0aC9mcmFjdGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuRnJhY3RcbiAgIC0gTmVnYXRpb24gKGBtYXRoL25lZ2ApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTmVnYXRpb25cbiAgIC0gQWRkaXRpb24gKGBtYXRoL2FkZGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQWRkXG4gICAtIFN1YnRyYWN0aW9uIChgbWF0aC9zdWJgKSBGbG93R3JhcGhCbG9ja05hbWVzLlN1YnRyYWN0XG4gICAtIE11bHRpcGxpY2F0aW9uIChgbWF0aC9tdWxgKSBGbG93R3JhcGhCbG9ja05hbWVzLk11bHRpcGx5XG4gICAtIERpdmlzaW9uIChgbWF0aC9kaXZgKSBGbG93R3JhcGhCbG9ja05hbWVzLkRpdmlkZVxuICAgLSBSZW1haW5kZXIgKGBtYXRoL3JlbWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTW9kdWxvXG4gICAtIE1pbmltdW0gKGBtYXRoL21pbmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTWluXG4gICAtIE1heGltdW0gKGBtYXRoL21heGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF4XG4gICAtIENsYW1wIChgbWF0aC9jbGFtcGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2xhbXBcbiAgIC0gU2F0dXJhdGUgKGBtYXRoL3NhdHVyYXRlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5TYXR1cmF0ZVxuICAgLSBJbnRlcnBvbGF0ZSAoYG1hdGgvbWl4YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRoSW50ZXJwb2xhdGlvblxuMy4gKipDb21wYXJpc29uIE5vZGVzKipcbiAgIC0gRXF1YWxpdHkgKGBtYXRoL2VxYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5FcXVhbGl0eVxuICAgLSBMZXNzIFRoYW4gKGBtYXRoL2x0YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhblxuICAgLSBMZXNzIFRoYW4gT3IgRXF1YWwgVG8gKGBtYXRoL2xlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhbk9yRXF1YWxcbiAgIC0gR3JlYXRlciBUaGFuIChgbWF0aC9ndGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuR3JlYXRlclRoYW5cbiAgIC0gR3JlYXRlciBUaGFuIE9yIEVxdWFsIFRvIChgbWF0aC9nZWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuR3JlYXRlclRoYW5PckVxdWFsXG40LiAqKlNwZWNpYWwgTm9kZXMqKlxuICAgLSBJcyBOb3QgYSBOdW1iZXIgKGBtYXRoL2lzTmFOYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Jc05hTlxuICAgLSBJcyBJbmZpbml0eSAoYG1hdGgvaXNJbmZgKSBGbG93R3JhcGhCbG9ja05hbWVzLklzSW5maW5pdHlcbiAgIC0gU2VsZWN0IChgbWF0aC9zZWxlY3RgKSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbmRpdGlvbmFsXG4gICAtIFN3aXRjaCAoYG1hdGgvc3dpdGNoYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5EYXRhU3dpdGNoXG4gICAtIFJhbmRvbSAoYG1hdGgvcmFuZG9tYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5SYW5kb21cbjUuICoqQW5nbGUgYW5kIFRyaWdvbm9tZXRyeSBOb2RlcyoqXG4gICAtIERlZ3JlZXMtVG8tUmFkaWFucyAoYG1hdGgvcmFkYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5EZWdUb1JhZFxuICAgLSBSYWRpYW5zLVRvLURlZ3JlZXMgKGBtYXRoL2RlZ2ApIEZsb3dHcmFwaEJsb2NrTmFtZXMuUmFkVG9EZWdcbiAgIC0gU2luZSAoYG1hdGgvc2luYCkgIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2luXG4gICAtIENvc2luZSAoYG1hdGgvY29zYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db3NcbiAgIC0gVGFuZ2VudCAoYG1hdGgvdGFuYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5UYW5cbiAgIC0gQXJjc2luZSAoYG1hdGgvYXNpbmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXNpblxuICAgLSBBcmNjb3NpbmUgKGBtYXRoL2Fjb3NgKSBGbG93R3JhcGhCbG9ja05hbWVzLkFjb3NcbiAgIC0gQXJjdGFuZ2VudCAoYG1hdGgvYXRhbmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhblxuICAgLSBBcmN0YW5nZW50IDIgKGBtYXRoL2F0YW4yYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5BdGFuMlxuNi4gKipIeXBlcmJvbGljIE5vZGVzKipcbiAgIC0gSHlwZXJib2xpYyBTaW5lIChgbWF0aC9zaW5oYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaW5oXG4gICAtIEh5cGVyYm9saWMgQ29zaW5lIChgbWF0aC9jb3NoYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db3NoXG4gICAtIEh5cGVyYm9saWMgVGFuZ2VudCAoYG1hdGgvdGFuaGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuVGFuaFxuICAgLSBJbnZlcnNlIEh5cGVyYm9saWMgU2luZSAoYG1hdGgvYXNpbmhgKSBGbG93R3JhcGhCbG9ja05hbWVzLkFzaW5oXG4gICAtIEludmVyc2UgSHlwZXJib2xpYyBDb3NpbmUgKGBtYXRoL2Fjb3NoYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5BY29zaFxuICAgLSBJbnZlcnNlIEh5cGVyYm9saWMgVGFuZ2VudCAoYG1hdGgvYXRhbmhgKSBGbG93R3JhcGhCbG9ja05hbWVzLkF0YW5oXG43LiAqKkV4cG9uZW50aWFsIE5vZGVzKipcbiAgIC0gRXhwb25lbnQgKGBtYXRoL2V4cGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXhwb25lbnRpYWxcbiAgIC0gTmF0dXJhbCBMb2dhcml0aG0gKGBtYXRoL2xvZ2ApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTG9nXG4gICAtIEJhc2UtMiBMb2dhcml0aG0gKGBtYXRoL2xvZzJgKSBGbG93R3JhcGhCbG9ja05hbWVzLkxvZzJcbiAgIC0gQmFzZS0xMCBMb2dhcml0aG0gKGBtYXRoL2xvZzEwYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2cxMFxuICAgLSBTcXVhcmUgUm9vdCAoYG1hdGgvc3FydGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuU3F1YXJlUm9vdFxuICAgLSBDdWJlIFJvb3QgKGBtYXRoL2NicnRgKSBGbG93R3JhcGhCbG9ja05hbWVzLkN1YmVSb290XG4gICAtIFBvd2VyIChgbWF0aC9wb3dgKSBGbG93R3JhcGhCbG9ja05hbWVzLlBvd2VyXG44LiAqKlZlY3RvciBOb2RlcyoqXG4gICAtIExlbmd0aCAoYG1hdGgvbGVuZ3RoYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZW5ndGhcbiAgIC0gTm9ybWFsaXplIChgbWF0aC9ub3JtYWxpemVgKSBGbG93R3JhcGhCbG9ja05hbWVzLk5vcm1hbGl6ZVxuICAgLSBEb3QgUHJvZHVjdCAoYG1hdGgvZG90YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Eb3RcbiAgIC0gQ3Jvc3MgUHJvZHVjdCAoYG1hdGgvY3Jvc3NgKSBGbG93R3JhcGhCbG9ja05hbWVzLkNyb3NzXG4gICAtIFJvdGF0ZSAyRCAoYG1hdGgvcm90YXRlMkRgKSBGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTJEXG4gICAtIFJvdGF0ZSAzRCAoYG1hdGgvcm90YXRlM0RgKSBGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTNEXG4gICAtIFRyYW5zZm9ybSAoYG1hdGgvdHJhbnNmb3JtYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5UcmFuc2Zvcm1WZWN0b3JcbjkuICoqTWF0cml4IE5vZGVzKipcbiAgIC0gVHJhbnNwb3NlIChgbWF0aC90cmFuc3Bvc2VgKSBGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zcG9zZVxuICAgLSBEZXRlcm1pbmFudCAoYG1hdGgvZGV0ZXJtaW5hbnRgKSBGbG93R3JhcGhCbG9ja05hbWVzLkRldGVybWluYW50XG4gICAtIEludmVyc2UgKGBtYXRoL2ludmVyc2VgKSBGbG93R3JhcGhCbG9ja05hbWVzLkludmVydE1hdHJpeFxuICAgLSBNdWx0aXBsaWNhdGlvbiAoYG1hdGgvbWF0TXVsYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRyaXhNdWx0aXBsaWNhdGlvblxuICAgLSBDb21wb3NlIChgbWF0aC9tYXRDb21wb3NlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRyaXhDb21wb3NlXG4gICAtIERlY29tcG9zZSAoYG1hdGgvbWF0RGVjb21wb3NlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRyaXhEZWNvbXBvc2VcbjEwLiAqKlF1YXRlcm5pb24gTm9kZXMqKlxuICAgIC0gQ29uanVnYXRlIChgbWF0aC9xdWF0Q29uanVnYXRlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db25qdWdhdGVcbiAgICAtIE11bHRpcGxpY2F0aW9uIChgbWF0aC9xdWF0TXVsYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NdWx0aXBseVxuICAgIC0gQW5nbGUgQmV0d2VlbiBRdWF0ZXJuaW9ucyAoYG1hdGgvcXVhdEFuZ2xlQmV0d2VlbmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQW5nbGVCZXR3ZWVuXG4gICAgLSBRdWF0ZXJuaW9uIEZyb20gQXhpcyBBbmdsZSAoYG1hdGgvcXVhdEZyb21BeGlzQW5nbGVgKSBGbG93R3JhcGhCbG9ja05hbWVzLlF1YXRlcm5pb25Gcm9tQXhpc0FuZ2xlXG4gICAgLSBRdWF0ZXJuaW9uIFRvIEF4aXMgQW5nbGUgKGBtYXRoL3F1YXRUb0F4aXNBbmdsZWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuUXVhdGVybmlvblRvQXhpc0FuZ2xlXG4gICAgLSBRdWF0ZXJuaW9uIEZyb20gVHdvIERpcmVjdGlvbmFsIFZlY3RvcnMgKGBtYXRoL3F1YXRGcm9tRGlyZWN0aW9uc2ApIEZsb3dHcmFwaEJsb2NrTmFtZXMuUXVhdGVybmlvbkZyb21EaXJlY3Rpb25zXG4xMS4gKipTd2l6emxlIE5vZGVzKipcbiAgICAtIENvbWJpbmUgKGBtYXRoL2NvbWJpbmUyYCwgYG1hdGgvY29tYmluZTNgLCBgbWF0aC9jb21iaW5lNGAsIGBtYXRoL2NvbWJpbmUyeDJgLCBgbWF0aC9jb21iaW5lM3gzYCwgYG1hdGgvY29tYmluZTR4NGApXG4gICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjIsIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjMsIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjRcbiAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lTWF0cml4MkQsIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZU1hdHJpeDNELCBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVNYXRyaXhcbiAgICAtIEV4dHJhY3QgKGBtYXRoL2V4dHJhY3QyYCwgYG1hdGgvZXh0cmFjdDNgLCBgbWF0aC9leHRyYWN0NGAsIGBtYXRoL2V4dHJhY3QyeDJgLCBgbWF0aC9leHRyYWN0M3gzYCwgYG1hdGgvZXh0cmFjdDR4NGApXG4gICAgICAgIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjIsIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjMsIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjRcbiAgICAgICAgRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0TWF0cml4MkQsIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdE1hdHJpeDNELCBGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RNYXRyaXhcbjEyLiAqKkludGVnZXIgQXJpdGhtZXRpYyBOb2RlcyoqXG4gICAgLSBBYnNvbHV0ZSBWYWx1ZSAoYG1hdGgvYWJzYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5BYnNcbiAgICAtIFNpZ24gKGBtYXRoL3NpZ25gKSBGbG93R3JhcGhCbG9ja05hbWVzLlNpZ25cbiAgICAtIE5lZ2F0aW9uIChgbWF0aC9uZWdgKSBGbG93R3JhcGhCbG9ja05hbWVzLk5lZ2F0aW9uXG4gICAgLSBBZGRpdGlvbiAoYG1hdGgvYWRkYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5BZGRcbiAgICAtIFN1YnRyYWN0aW9uIChgbWF0aC9zdWJgKSBGbG93R3JhcGhCbG9ja05hbWVzLlN1YnRyYWN0XG4gICAgLSBNdWx0aXBsaWNhdGlvbiAoYG1hdGgvbXVsYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NdWx0aXBseVxuICAgIC0gRGl2aXNpb24gKGBtYXRoL2RpdmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuRGl2aWRlXG4gICAgLSBSZW1haW5kZXIgKGBtYXRoL3JlbWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTW9kdWxvXG4gICAgLSBNaW5pbXVtIChgbWF0aC9taW5gKSBGbG93R3JhcGhCbG9ja05hbWVzLk1pblxuICAgIC0gTWF4aW11bSAoYG1hdGgvbWF4YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXhcbiAgICAtIENsYW1wIChgbWF0aC9jbGFtcGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2xhbXBcbjEzLiAqKkludGVnZXIgQ29tcGFyaXNvbiBOb2RlcyoqXG4gICAgLSBFcXVhbGl0eSAoYG1hdGgvZXFgKSBGbG93R3JhcGhCbG9ja05hbWVzLkVxdWFsaXR5XG4gICAgLSBMZXNzIFRoYW4gKGBtYXRoL2x0YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhblxuICAgIC0gTGVzcyBUaGFuIE9yIEVxdWFsIFRvIChgbWF0aC9sZWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVzc1RoYW5PckVxdWFsXG4gICAgLSBHcmVhdGVyIFRoYW4gKGBtYXRoL2d0YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhblxuICAgIC0gR3JlYXRlciBUaGFuIE9yIEVxdWFsIFRvIChgbWF0aC9nZWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuR3JlYXRlclRoYW5PckVxdWFsXG4xNC4gKipJbnRlZ2VyIEJpdHdpc2UgTm9kZXMqKlxuICAgIC0gQml0d2lzZSBOT1QgKGBtYXRoL25vdGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZU5vdFxuICAgIC0gQml0d2lzZSBBTkQgKGBtYXRoL2FuZGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUFuZFxuICAgIC0gQml0d2lzZSBPUiAoYG1hdGgvb3JgKSBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VPclxuICAgIC0gQml0d2lzZSBYT1IgKGBtYXRoL3hvcmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZVhvclxuICAgIC0gUmlnaHQgU2hpZnQgKGBtYXRoL2FzcmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZVJpZ2h0U2hpZnRcbiAgICAtIExlZnQgU2hpZnQgKGBtYXRoL2xzbGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUxlZnRTaGlmdFxuICAgIC0gQ291bnQgTGVhZGluZyBaZXJvcyAoYG1hdGgvY2x6YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZWFkaW5nWmVyb3NcbiAgICAtIENvdW50IFRyYWlsaW5nIFplcm9zIChgbWF0aC9jdHpgKSBGbG93R3JhcGhCbG9ja05hbWVzLlRyYWlsaW5nWmVyb3NcbiAgICAtIENvdW50IE9uZSBCaXRzIChgbWF0aC9wb3BjbnRgKSBGbG93R3JhcGhCbG9ja05hbWVzLk9uZUJpdHNDb3VudGVyXG4xNS4gKipCb29sZWFuIEFyaXRobWV0aWMgTm9kZXMqKlxuICAgIC0gRXF1YWxpdHkgKGBtYXRoL2VxYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5FcXVhbGl0eVxuICAgIC0gQm9vbGVhbiBOT1QgKGBtYXRoL25vdGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZU5vdFxuICAgIC0gQm9vbGVhbiBBTkQgKGBtYXRoL2FuZGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUFuZFxuICAgIC0gQm9vbGVhbiBPUiAoYG1hdGgvb3JgKSBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VPclxuICAgIC0gQm9vbGVhbiBYT1IgKGBtYXRoL3hvcmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZVhvclxuXG4jIyMgVHlwZSBDb252ZXJzaW9uIE5vZGVzXG4xLiAqKkJvb2xlYW4gQ29udmVyc2lvbiBOb2RlcyoqXG4gICAtIEJvb2xlYW4gdG8gSW50ZWdlciAoYHR5cGUvYm9vbFRvSW50YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Cb29sZWFuVG9JbnRcbiAgIC0gQm9vbGVhbiB0byBGbG9hdCAoYHR5cGUvYm9vbFRvRmxvYXRgKSBGbG93R3JhcGhCbG9ja05hbWVzLkJvb2xlYW5Ub0Zsb2F0XG4yLiAqKkludGVnZXIgQ29udmVyc2lvbiBOb2RlcyoqXG4gICAtIEludGVnZXIgdG8gQm9vbGVhbiAoYHR5cGUvaW50VG9Cb29sYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnRUb0Jvb2xlYW5cbiAgIC0gSW50ZWdlciB0byBGbG9hdCAoYHR5cGUvaW50VG9GbG9hdGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuSW50VG9GbG9hdFxuMy4gKipGbG9hdCBDb252ZXJzaW9uIE5vZGVzKipcbiAgIC0gRmxvYXQgdG8gQm9vbGVhbiAoYHR5cGUvZmxvYXRUb0Jvb2xgKSBGbG93R3JhcGhCbG9ja05hbWVzLkZsb2F0VG9Cb29sZWFuXG4gICAtIEZsb2F0IHRvIEludGVnZXIgKGB0eXBlL2Zsb2F0VG9JbnRgKSBGbG93R3JhcGhCbG9ja05hbWVzLkZsb2F0VG9JbnRcblxuIyMjIENvbnRyb2wgRmxvdyBOb2Rlc1xuMS4gKipTeW5jIE5vZGVzKipcbiAgIC0gU2VxdWVuY2UgKGBmbG93L3NlcXVlbmNlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXF1ZW5jZVxuICAgLSBCcmFuY2ggKGBmbG93L2JyYW5jaGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuQnJhbmNoXG4gICAtIFN3aXRjaCAoYGZsb3cvc3dpdGNoYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Td2l0Y2hcbiAgIC0gV2hpbGUgTG9vcCAoYGZsb3cvd2hpbGVgKSBGbG93R3JhcGhCbG9ja05hbWVzLldoaWxlTG9vcFxuICAgLSBGb3IgTG9vcCAoYGZsb3cvZm9yYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5Gb3JMb29wXG4gICAtIERvIE4gKGBmbG93L2RvTmApIEZsb3dHcmFwaEJsb2NrTmFtZXMuRG9OXG4gICAtIE11bHRpIEdhdGUgKGBmbG93L211bHRpR2F0ZWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuTXVsdGlHYXRlXG4gICAtIFdhaXQgQWxsIChgZmxvdy93YWl0QWxsYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5XYWl0QWxsXG4gICAtIFRocm90dGxlIChgZmxvdy90aHJvdHRsZWApIEZsb3dHcmFwaEJsb2NrTmFtZXMuVGhyb3R0bGVcbjIuICoqRGVsYXkgTm9kZXMqKlxuICAgLSBTZXQgRGVsYXkgKGBmbG93L3NldERlbGF5YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXREZWxheVxuICAgLSBDYW5jZWwgRGVsYXkgKGBmbG93L2NhbmNlbERlbGF5YCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5DYW5jZWxEZWxheVxuXG4jIyMgU3RhdGUgTWFuaXB1bGF0aW9uIE5vZGVzXG4xLiAqKkN1c3RvbSBWYXJpYWJsZSBBY2Nlc3MqKlxuICAgLSBWYXJpYWJsZSBHZXQgKGB2YXJpYWJsZS9nZXRgKSBGbG93R3JhcGhCbG9ja05hbWVzLkdldFZhcmlhYmxlXG4gICAtIFZhcmlhYmxlIFNldCAoYHZhcmlhYmxlL3NldGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2V0VmFyaWFibGVcbiAgIC0gVmFyaWFibGUgSW50ZXJwb2xhdGUgKGB2YXJpYWJsZS9pbnRlcnBvbGF0ZWApXG4yLiAqKk9iamVjdCBNb2RlbCBBY2Nlc3MqKiAvLyBUT0RPIGZ1bGx5IHRlc3QgdGhpcyEhIVxuICAgLSBKU09OIFBvaW50ZXIgVGVtcGxhdGUgUGFyc2luZyAoYHBvaW50ZXIvZ2V0YCkgW0Zsb3dHcmFwaEJsb2NrTmFtZXMuR2V0UHJvcGVydHksIEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXJdXG4gICAtIEVmZmVjdGl2ZSBKU09OIFBvaW50ZXIgR2VuZXJhdGlvbiAoYHBvaW50ZXIvc2V0YCkgW0Zsb3dHcmFwaEJsb2NrTmFtZXMuU2V0UHJvcGVydHksIEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXJdXG4gICAtIFBvaW50ZXIgR2V0IChgcG9pbnRlci9nZXRgKSBbRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRQcm9wZXJ0eSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlcl1cbiAgIC0gUG9pbnRlciBTZXQgKGBwb2ludGVyL3NldGApIFtGbG93R3JhcGhCbG9ja05hbWVzLlNldFByb3BlcnR5LCBGbG93R3JhcGhCbG9ja05hbWVzLkpzb25Qb2ludGVyUGFyc2VyXVxuICAgLSBQb2ludGVyIEludGVycG9sYXRlIChgcG9pbnRlci9pbnRlcnBvbGF0ZWApIFtGbG93R3JhcGhCbG9ja05hbWVzLlZhbHVlSW50ZXJwb2xhdGlvbiwgRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlciwgRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uLCBGbG93R3JhcGhCbG9ja05hbWVzLkVhc2luZ11cblxuIyMjIEFuaW1hdGlvbiBDb250cm9sIE5vZGVzXG4xLiAqKkFuaW1hdGlvbiBQbGF5KiogKGBhbmltYXRpb24vc3RhcnRgKSBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb25cbjIuICoqQW5pbWF0aW9uIFN0b3AqKiAoYGFuaW1hdGlvbi9zdG9wYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5TdG9wQW5pbWF0aW9uIFxuMy4gKipBbmltYXRpb24gU3RvcCBBdCoqIChgYW5pbWF0aW9uL3N0b3BBdGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuU3RvcEFuaW1hdGlvbiBcblxuIyMjIEV2ZW50IE5vZGVzXG4xLiAqKkxpZmVjeWNsZSBFdmVudCBOb2RlcyoqXG4gICAtIE9uIFN0YXJ0IChgZXZlbnQvb25TdGFydGApIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2NlbmVSZWFkeUV2ZW50XG4gICAtIE9uIFRpY2sgKGBldmVudC9vblRpY2tgKSBGbG93R3JhcGhCbG9ja05hbWVzLlNjZW5lVGlja0V2ZW50XG4yLiAqKkN1c3RvbSBFdmVudCBOb2RlcyoqXG4gICAtIFJlY2VpdmUgKGBldmVudC9yZWNlaXZlYCkgRmxvd0dyYXBoQmxvY2tOYW1lcy5SZWNlaXZlQ3VzdG9tRXZlbnRcbiAgIC0gU2VuZCAoYGV2ZW50L3NlbmRgKSBGbG93R3JhcGhCbG9ja05hbWVzLlNlbmRDdXN0b21FdmVudFxuXG4gKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==