"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Meshes_mesh_vertexData_functions_js"],{

/***/ "../core/dist/Meshes/mesh.vertexData.functions.js":
/*!********************************************************!*\
  !*** ../core/dist/Meshes/mesh.vertexData.functions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizeIndices: () => (/* binding */ OptimizeIndices)
/* harmony export */ });
/* harmony import */ var core_Misc_bitArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/bitArray */ "../core/dist/Misc/bitArray.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Sort (in place) the index array so that faces with common indices are close
 * @param indices the array of indices to sort
 */
function OptimizeIndices(indices) {
    const faces = [];
    const faceCount = indices.length / 3;
    // Step 1: Break the indices array into faces
    for (let i = 0; i < faceCount; i++) {
        faces.push([indices[i * 3], indices[i * 3 + 1], indices[i * 3 + 2]]);
    }
    // Step 2: Build a graph connecting faces sharing a vertex
    const vertexToFaceMap = new Map();
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        const face = faces[faceIndex];
        for (const vertex of face) {
            let face = vertexToFaceMap.get(vertex);
            if (!face) {
                vertexToFaceMap.set(vertex, (face = []));
            }
            face.push(faceIndex);
        }
    }
    // Step 3: Traverse faces using DFS to ensure connected faces are close
    const visited = new core_Misc_bitArray__WEBPACK_IMPORTED_MODULE_0__.BitArray(faceCount);
    const sortedFaces = [];
    // Using a stack and not a recursive version to avoid call stack overflow
    const deepFirstSearchStack = (startFaceIndex) => {
        const stack = [startFaceIndex];
        while (stack.length > 0) {
            const currentFaceIndex = stack.pop();
            if (visited.get(currentFaceIndex)) {
                continue;
            }
            visited.set(currentFaceIndex, true);
            sortedFaces.push(faces[currentFaceIndex]);
            // Push unvisited neighbors (faces sharing a vertex) onto the stack
            for (const vertex of faces[currentFaceIndex]) {
                const neighbors = vertexToFaceMap.get(vertex);
                if (!neighbors) {
                    return;
                }
                for (const neighborFaceIndex of neighbors) {
                    if (!visited.get(neighborFaceIndex)) {
                        stack.push(neighborFaceIndex);
                    }
                }
            }
        }
    };
    // Start DFS from the first face
    for (let i = 0; i < faceCount; i++) {
        if (!visited.get(i)) {
            deepFirstSearchStack(i);
        }
    }
    // Step 4: Flatten the sorted faces back into an array
    let index = 0;
    for (const face of sortedFaces) {
        indices[index++] = face[0];
        indices[index++] = face[1];
        indices[index++] = face[2];
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

/***/ "../core/dist/Misc/bitArray.js":
/*!*************************************!*\
  !*** ../core/dist/Misc/bitArray.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitArray: () => (/* binding */ BitArray)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

function GetByteIndex(bitIndex) {
    return Math.floor(bitIndex / 8);
}
function GetBitMask(bitIndex) {
    return 1 << bitIndex % 8;
}
/**
 * An fixed size array that effectively stores boolean values where each value is a single bit of backing data.
 * @remarks
 * All bits are initialized to false.
 */
class BitArray {
    /**
     * Creates a new bit array with a fixed size.
     * @param size The number of bits to store.
     */
    constructor(size) {
        this.size = size;
        this._byteArray = new Uint8Array(Math.ceil(this.size / 8));
    }
    /**
     * Gets the current value at the specified index.
     * @param bitIndex The index to get the value from.
     * @returns The value at the specified index.
     */
    get(bitIndex) {
        if (bitIndex >= this.size) {
            throw new RangeError("Bit index out of range");
        }
        const byteIndex = GetByteIndex(bitIndex);
        const bitMask = GetBitMask(bitIndex);
        return (this._byteArray[byteIndex] & bitMask) !== 0;
    }
    /**
     * Sets the value at the specified index.
     * @param bitIndex The index to set the value at.
     * @param value The value to set.
     */
    set(bitIndex, value) {
        if (bitIndex >= this.size) {
            throw new RangeError("Bit index out of range");
        }
        const byteIndex = GetByteIndex(bitIndex);
        const bitMask = GetBitMask(bitIndex);
        if (value) {
            this._byteArray[byteIndex] |= bitMask;
        }
        else {
            this._byteArray[byteIndex] &= ~bitMask;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01lc2hlc19tZXNoX3ZlcnRleERhdGFfZnVuY3Rpb25zX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWVzaGVzL21lc2gudmVydGV4RGF0YS5mdW5jdGlvbnMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NaXNjL2JpdEFycmF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5kaWNlc0FycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgQml0QXJyYXkgfSBmcm9tIFwiY29yZS9NaXNjL2JpdEFycmF5XCI7XHJcblxyXG4vKipcclxuICogU29ydCAoaW4gcGxhY2UpIHRoZSBpbmRleCBhcnJheSBzbyB0aGF0IGZhY2VzIHdpdGggY29tbW9uIGluZGljZXMgYXJlIGNsb3NlXHJcbiAqIEBwYXJhbSBpbmRpY2VzIHRoZSBhcnJheSBvZiBpbmRpY2VzIHRvIHNvcnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBPcHRpbWl6ZUluZGljZXMoaW5kaWNlczogSW5kaWNlc0FycmF5KSB7XHJcbiAgICBjb25zdCBmYWNlczogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcclxuICAgIGNvbnN0IGZhY2VDb3VudCA9IGluZGljZXMubGVuZ3RoIC8gMztcclxuXHJcbiAgICAvLyBTdGVwIDE6IEJyZWFrIHRoZSBpbmRpY2VzIGFycmF5IGludG8gZmFjZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZUNvdW50OyBpKyspIHtcclxuICAgICAgICBmYWNlcy5wdXNoKFtpbmRpY2VzW2kgKiAzXSwgaW5kaWNlc1tpICogMyArIDFdLCBpbmRpY2VzW2kgKiAzICsgMl1dKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGVwIDI6IEJ1aWxkIGEgZ3JhcGggY29ubmVjdGluZyBmYWNlcyBzaGFyaW5nIGEgdmVydGV4XHJcbiAgICBjb25zdCB2ZXJ0ZXhUb0ZhY2VNYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyW10+KCk7XHJcbiAgICBmb3IgKGxldCBmYWNlSW5kZXggPSAwOyBmYWNlSW5kZXggPCBmYWNlcy5sZW5ndGg7IGZhY2VJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgZmFjZSA9IGZhY2VzW2ZhY2VJbmRleF07XHJcbiAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXggb2YgZmFjZSkge1xyXG4gICAgICAgICAgICBsZXQgZmFjZSA9IHZlcnRleFRvRmFjZU1hcC5nZXQodmVydGV4KTtcclxuICAgICAgICAgICAgaWYgKCFmYWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhUb0ZhY2VNYXAuc2V0KHZlcnRleCwgKGZhY2UgPSBbXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZhY2UucHVzaChmYWNlSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGVwIDM6IFRyYXZlcnNlIGZhY2VzIHVzaW5nIERGUyB0byBlbnN1cmUgY29ubmVjdGVkIGZhY2VzIGFyZSBjbG9zZVxyXG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBCaXRBcnJheShmYWNlQ291bnQpO1xyXG4gICAgY29uc3Qgc29ydGVkRmFjZXM6IEFycmF5PG51bWJlcltdPiA9IFtdO1xyXG5cclxuICAgIC8vIFVzaW5nIGEgc3RhY2sgYW5kIG5vdCBhIHJlY3Vyc2l2ZSB2ZXJzaW9uIHRvIGF2b2lkIGNhbGwgc3RhY2sgb3ZlcmZsb3dcclxuICAgIGNvbnN0IGRlZXBGaXJzdFNlYXJjaFN0YWNrID0gKHN0YXJ0RmFjZUluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBzdGFjazogQXJyYXk8bnVtYmVyPiA9IFtzdGFydEZhY2VJbmRleF07XHJcblxyXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGYWNlSW5kZXggPSBzdGFjay5wb3AoKSE7XHJcblxyXG4gICAgICAgICAgICBpZiAodmlzaXRlZC5nZXQoY3VycmVudEZhY2VJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZpc2l0ZWQuc2V0KGN1cnJlbnRGYWNlSW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICBzb3J0ZWRGYWNlcy5wdXNoKGZhY2VzW2N1cnJlbnRGYWNlSW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFB1c2ggdW52aXNpdGVkIG5laWdoYm9ycyAoZmFjZXMgc2hhcmluZyBhIHZlcnRleCkgb250byB0aGUgc3RhY2tcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2ZXJ0ZXggb2YgZmFjZXNbY3VycmVudEZhY2VJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHZlcnRleFRvRmFjZU1hcC5nZXQodmVydGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yRmFjZUluZGV4IG9mIG5laWdoYm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmlzaXRlZC5nZXQobmVpZ2hib3JGYWNlSW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmVpZ2hib3JGYWNlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gU3RhcnQgREZTIGZyb20gdGhlIGZpcnN0IGZhY2VcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZUNvdW50OyBpKyspIHtcclxuICAgICAgICBpZiAoIXZpc2l0ZWQuZ2V0KGkpKSB7XHJcbiAgICAgICAgICAgIGRlZXBGaXJzdFNlYXJjaFN0YWNrKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGVwIDQ6IEZsYXR0ZW4gdGhlIHNvcnRlZCBmYWNlcyBiYWNrIGludG8gYW4gYXJyYXlcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IGZhY2Ugb2Ygc29ydGVkRmFjZXMpIHtcclxuICAgICAgICBpbmRpY2VzW2luZGV4KytdID0gZmFjZVswXTtcclxuICAgICAgICBpbmRpY2VzW2luZGV4KytdID0gZmFjZVsxXTtcclxuICAgICAgICBpbmRpY2VzW2luZGV4KytdID0gZmFjZVsyXTtcclxuICAgIH1cclxufVxyXG4iLCJmdW5jdGlvbiBHZXRCeXRlSW5kZXgoYml0SW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihiaXRJbmRleCAvIDgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHZXRCaXRNYXNrKGJpdEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDEgPDwgYml0SW5kZXggJSA4O1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZml4ZWQgc2l6ZSBhcnJheSB0aGF0IGVmZmVjdGl2ZWx5IHN0b3JlcyBib29sZWFuIHZhbHVlcyB3aGVyZSBlYWNoIHZhbHVlIGlzIGEgc2luZ2xlIGJpdCBvZiBiYWNraW5nIGRhdGEuXHJcbiAqIEByZW1hcmtzXHJcbiAqIEFsbCBiaXRzIGFyZSBpbml0aWFsaXplZCB0byBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCaXRBcnJheSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ieXRlQXJyYXk6IFVpbnQ4QXJyYXk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGJpdCBhcnJheSB3aXRoIGEgZml4ZWQgc2l6ZS5cclxuICAgICAqIEBwYXJhbSBzaXplIFRoZSBudW1iZXIgb2YgYml0cyB0byBzdG9yZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShNYXRoLmNlaWwodGhpcy5zaXplIC8gOCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCB2YWx1ZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxyXG4gICAgICogQHBhcmFtIGJpdEluZGV4IFRoZSBpbmRleCB0byBnZXQgdGhlIHZhbHVlIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldChiaXRJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGJpdEluZGV4ID49IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkJpdCBpbmRleCBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ5dGVJbmRleCA9IEdldEJ5dGVJbmRleChiaXRJbmRleCk7XHJcbiAgICAgICAgY29uc3QgYml0TWFzayA9IEdldEJpdE1hc2soYml0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fYnl0ZUFycmF5W2J5dGVJbmRleF0gJiBiaXRNYXNrKSAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gYml0SW5kZXggVGhlIGluZGV4IHRvIHNldCB0aGUgdmFsdWUgYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldChiaXRJbmRleDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChiaXRJbmRleCA+PSB0aGlzLnNpemUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCaXQgaW5kZXggb3V0IG9mIHJhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBieXRlSW5kZXggPSBHZXRCeXRlSW5kZXgoYml0SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IGJpdE1hc2sgPSBHZXRCaXRNYXNrKGJpdEluZGV4KTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnl0ZUFycmF5W2J5dGVJbmRleF0gfD0gYml0TWFzaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ieXRlQXJyYXlbYnl0ZUluZGV4XSAmPSB+Yml0TWFzaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==