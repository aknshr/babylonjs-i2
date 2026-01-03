"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Materials_Textures_Loaders_iesTextureLoader_js"],{

/***/ "../core/dist/Lights/IES/iesLoader.js":
/*!********************************************!*\
  !*** ../core/dist/Lights/IES/iesLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadIESData: () => (/* binding */ LoadIESData)
/* harmony export */ });
/* harmony import */ var core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.scalar.functions */ "../core/dist/Maths/math.scalar.functions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


function LineToArray(line) {
    return line
        .split(" ")
        .filter((x) => x !== "")
        .map((x) => parseFloat(x));
}
function ReadArray(dataPointer, count, targetArray) {
    while (targetArray.length !== count) {
        const line = LineToArray(dataPointer.lines[dataPointer.index++]);
        targetArray.push(...line);
    }
}
function InterpolateCandelaValues(data, phi, theta) {
    let phiIndex = 0;
    let thetaIndex = 0;
    let startTheta = 0;
    let endTheta = 0;
    let startPhi = 0;
    let endPhi = 0;
    // Check if the angle is outside the range
    for (let index = 0; index < data.numberOfHorizontalAngles - 1; index++) {
        if (theta < data.horizontalAngles[index + 1] || index === data.numberOfHorizontalAngles - 2) {
            thetaIndex = index;
            startTheta = data.horizontalAngles[index];
            endTheta = data.horizontalAngles[index + 1];
            break;
        }
    }
    for (let index = 0; index < data.numberOfVerticalAngles - 1; index++) {
        if (phi < data.verticalAngles[index + 1] || index === data.numberOfVerticalAngles - 2) {
            phiIndex = index;
            startPhi = data.verticalAngles[index];
            endPhi = data.verticalAngles[index + 1];
            break;
        }
    }
    const deltaTheta = endTheta - startTheta;
    const deltaPhi = endPhi - startPhi;
    if (deltaPhi === 0) {
        return 0;
    }
    // Interpolate
    const t1 = deltaTheta === 0 ? 0 : (theta - startTheta) / deltaTheta;
    const t2 = (phi - startPhi) / deltaPhi;
    const nextThetaIndex = deltaTheta === 0 ? thetaIndex : thetaIndex + 1;
    const v1 = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__.Lerp)(data.candelaValues[thetaIndex][phiIndex], data.candelaValues[nextThetaIndex][phiIndex], t1);
    const v2 = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__.Lerp)(data.candelaValues[thetaIndex][phiIndex + 1], data.candelaValues[nextThetaIndex][phiIndex + 1], t1);
    const v = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_0__.Lerp)(v1, v2, t2);
    return v;
}
/**
 * Generates IES data buffer from a string representing the IES data.
 * @param uint8Array defines the IES data
 * @returns the IES data buffer
 * @see https://ieslibrary.com/browse
 * @see https://playground.babylonjs.com/#UQGPDT#1
 */
function LoadIESData(uint8Array) {
    const decoder = new TextDecoder("utf-8");
    const source = decoder.decode(uint8Array);
    // Read data
    const dataPointer = {
        lines: source.split("\n"),
        index: 0,
    };
    const data = { version: dataPointer.lines[0], candelaValues: [], horizontalAngles: [], verticalAngles: [], numberOfHorizontalAngles: 0, numberOfVerticalAngles: 0 };
    // Skip metadata
    dataPointer.index = 1;
    while (dataPointer.lines.length > 0 && !dataPointer.lines[dataPointer.index].includes("TILT=")) {
        dataPointer.index++;
    }
    // Process tilt data?
    if (dataPointer.lines[dataPointer.index].includes("INCLUDE")) {
        // Not supported yet as I did not manage to find an example :)
    }
    dataPointer.index++;
    // Header
    const header = LineToArray(dataPointer.lines[dataPointer.index++]);
    data.numberOfLights = header[0];
    data.lumensPerLamp = header[1];
    data.candelaMultiplier = header[2];
    data.numberOfVerticalAngles = header[3];
    data.numberOfHorizontalAngles = header[4];
    data.photometricType = header[5]; // We ignore cylindrical type for now. Will add support later if needed
    data.unitsType = header[6];
    data.width = header[7];
    data.length = header[8];
    data.height = header[9];
    // Additional data
    const additionalData = LineToArray(dataPointer.lines[dataPointer.index++]);
    data.ballastFactor = additionalData[0];
    data.fileGenerationType = additionalData[1];
    data.inputWatts = additionalData[2];
    // Prepare arrays
    for (let index = 0; index < data.numberOfHorizontalAngles; index++) {
        data.candelaValues[index] = [];
    }
    // Vertical angles
    ReadArray(dataPointer, data.numberOfVerticalAngles, data.verticalAngles);
    // Horizontal angles
    ReadArray(dataPointer, data.numberOfHorizontalAngles, data.horizontalAngles);
    // Candela values
    for (let index = 0; index < data.numberOfHorizontalAngles; index++) {
        ReadArray(dataPointer, data.numberOfVerticalAngles, data.candelaValues[index]);
    }
    // Evaluate candela values
    let maxCandela = -1;
    for (let index = 0; index < data.numberOfHorizontalAngles; index++) {
        for (let subIndex = 0; subIndex < data.numberOfVerticalAngles; subIndex++) {
            data.candelaValues[index][subIndex] *= data.candelaValues[index][subIndex] * data.candelaMultiplier * data.ballastFactor * data.fileGenerationType;
            maxCandela = Math.max(maxCandela, data.candelaValues[index][subIndex]);
        }
    }
    // Normalize candela values
    if (maxCandela > 0) {
        for (let index = 0; index < data.numberOfHorizontalAngles; index++) {
            for (let subIndex = 0; subIndex < data.numberOfVerticalAngles; subIndex++) {
                data.candelaValues[index][subIndex] /= maxCandela;
            }
        }
    }
    // Create the cylindrical texture
    const height = 180;
    const width = height * 2;
    const size = width * height;
    const arrayBuffer = new Float32Array(width * height);
    // Fill the texture
    const startTheta = data.horizontalAngles[0];
    const endTheta = data.horizontalAngles[data.numberOfHorizontalAngles - 1];
    for (let index = 0; index < size; index++) {
        let theta = index % width;
        const phi = Math.floor(index / width);
        // Symmetry
        if (endTheta - startTheta !== 0 && (theta < startTheta || theta >= endTheta)) {
            theta %= endTheta * 2;
            if (theta > endTheta) {
                theta = endTheta * 2 - theta;
            }
        }
        arrayBuffer[phi + theta * height] = InterpolateCandelaValues(data, phi, theta);
    }
    // So far we only need the first half of the first row of the texture as we only support IES for spot light. We can add support for other types later.
    return {
        width: width / 2,
        height: 1,
        data: arrayBuffer,
    };
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

/***/ "../core/dist/Materials/Textures/Loaders/iesTextureLoader.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/iesTextureLoader.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _IESTextureLoader: () => (/* binding */ _IESTextureLoader)
/* harmony export */ });
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_Lights_IES_iesLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Lights/IES/iesLoader */ "../core/dist/Lights/IES/iesLoader.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Implementation of the IES Texture Loader.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _IESTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     */
    loadCubeData() {
        // eslint-disable-next-line no-throw-literal
        throw ".ies not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    loadData(data, texture, callback) {
        const uint8array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const textureData = (0,core_Lights_IES_iesLoader__WEBPACK_IMPORTED_MODULE_1__.LoadIESData)(uint8array);
        callback(textureData.width, textureData.height, texture.useMipMaps, false, () => {
            const engine = texture.getEngine();
            texture.type = _Engines_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURETYPE_FLOAT;
            texture.format = _Engines_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTUREFORMAT_R;
            texture._gammaSpace = false;
            engine._uploadDataToTextureDirectly(texture, textureData.data);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01hdGVyaWFsc19UZXh0dXJlc19Mb2FkZXJzX2llc1RleHR1cmVMb2FkZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFpQ0E7QUEvQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9MaWdodHMvSUVTL2llc0xvYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9Mb2FkZXJzL2llc1RleHR1cmVMb2FkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGVycCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguc2NhbGFyLmZ1bmN0aW9uc1wiO1xyXG5cclxuaW50ZXJmYWNlIElJRVNEYXRhIHtcclxuICAgIHZlcnNpb246IHN0cmluZztcclxuICAgIHRpbHQ/OiB7fTtcclxuICAgIG51bWJlck9mTGlnaHRzPzogbnVtYmVyO1xyXG4gICAgbHVtZW5zUGVyTGFtcD86IG51bWJlcjtcclxuICAgIGNhbmRlbGFNdWx0aXBsaWVyPzogbnVtYmVyO1xyXG4gICAgbnVtYmVyT2ZWZXJ0aWNhbEFuZ2xlczogbnVtYmVyO1xyXG4gICAgbnVtYmVyT2ZIb3Jpem9udGFsQW5nbGVzOiBudW1iZXI7XHJcbiAgICBob3Jpem9udGFsQW5nbGVzOiBudW1iZXJbXTtcclxuICAgIHZlcnRpY2FsQW5nbGVzOiBudW1iZXJbXTtcclxuICAgIHBob3RvbWV0cmljVHlwZT86IG51bWJlcjtcclxuICAgIHVuaXRzVHlwZT86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgbGVuZ3RoPzogbnVtYmVyO1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgYmFsbGFzdEZhY3Rvcj86IG51bWJlcjtcclxuICAgIGZpbGVHZW5lcmF0aW9uVHlwZT86IG51bWJlcjtcclxuICAgIGlucHV0V2F0dHM/OiBudW1iZXI7XHJcbiAgICBjYW5kZWxhVmFsdWVzOiBudW1iZXJbXVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSURhdGFQb2ludGVyIHtcclxuICAgIGxpbmVzOiBzdHJpbmdbXTtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpbmVUb0FycmF5KGxpbmU6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBsaW5lXHJcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgIC5maWx0ZXIoKHgpID0+IHggIT09IFwiXCIpXHJcbiAgICAgICAgLm1hcCgoeCkgPT4gcGFyc2VGbG9hdCh4KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlYWRBcnJheShkYXRhUG9pbnRlcjogSURhdGFQb2ludGVyLCBjb3VudDogbnVtYmVyLCB0YXJnZXRBcnJheTogbnVtYmVyW10pIHtcclxuICAgIHdoaWxlICh0YXJnZXRBcnJheS5sZW5ndGggIT09IGNvdW50KSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IExpbmVUb0FycmF5KGRhdGFQb2ludGVyLmxpbmVzW2RhdGFQb2ludGVyLmluZGV4KytdKTtcclxuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKC4uLmxpbmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbnRlcnBvbGF0ZUNhbmRlbGFWYWx1ZXMoZGF0YTogSUlFU0RhdGEsIHBoaTogbnVtYmVyLCB0aGV0YTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBwaGlJbmRleCA9IDA7XHJcbiAgICBsZXQgdGhldGFJbmRleCA9IDA7XHJcbiAgICBsZXQgc3RhcnRUaGV0YSA9IDA7XHJcbiAgICBsZXQgZW5kVGhldGEgPSAwO1xyXG4gICAgbGV0IHN0YXJ0UGhpID0gMDtcclxuICAgIGxldCBlbmRQaGkgPSAwO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBhbmdsZSBpcyBvdXRzaWRlIHRoZSByYW5nZVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubnVtYmVyT2ZIb3Jpem9udGFsQW5nbGVzIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICh0aGV0YSA8IGRhdGEuaG9yaXpvbnRhbEFuZ2xlc1tpbmRleCArIDFdIHx8IGluZGV4ID09PSBkYXRhLm51bWJlck9mSG9yaXpvbnRhbEFuZ2xlcyAtIDIpIHtcclxuICAgICAgICAgICAgdGhldGFJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICBzdGFydFRoZXRhID0gZGF0YS5ob3Jpem9udGFsQW5nbGVzW2luZGV4XTtcclxuICAgICAgICAgICAgZW5kVGhldGEgPSBkYXRhLmhvcml6b250YWxBbmdsZXNbaW5kZXggKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5udW1iZXJPZlZlcnRpY2FsQW5nbGVzIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChwaGkgPCBkYXRhLnZlcnRpY2FsQW5nbGVzW2luZGV4ICsgMV0gfHwgaW5kZXggPT09IGRhdGEubnVtYmVyT2ZWZXJ0aWNhbEFuZ2xlcyAtIDIpIHtcclxuICAgICAgICAgICAgcGhpSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgc3RhcnRQaGkgPSBkYXRhLnZlcnRpY2FsQW5nbGVzW2luZGV4XTtcclxuICAgICAgICAgICAgZW5kUGhpID0gZGF0YS52ZXJ0aWNhbEFuZ2xlc1tpbmRleCArIDFdO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbHRhVGhldGEgPSBlbmRUaGV0YSAtIHN0YXJ0VGhldGE7XHJcbiAgICBjb25zdCBkZWx0YVBoaSA9IGVuZFBoaSAtIHN0YXJ0UGhpO1xyXG5cclxuICAgIGlmIChkZWx0YVBoaSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludGVycG9sYXRlXHJcbiAgICBjb25zdCB0MSA9IGRlbHRhVGhldGEgPT09IDAgPyAwIDogKHRoZXRhIC0gc3RhcnRUaGV0YSkgLyBkZWx0YVRoZXRhO1xyXG4gICAgY29uc3QgdDIgPSAocGhpIC0gc3RhcnRQaGkpIC8gZGVsdGFQaGk7XHJcblxyXG4gICAgY29uc3QgbmV4dFRoZXRhSW5kZXggPSBkZWx0YVRoZXRhID09PSAwID8gdGhldGFJbmRleCA6IHRoZXRhSW5kZXggKyAxO1xyXG5cclxuICAgIGNvbnN0IHYxID0gTGVycChkYXRhLmNhbmRlbGFWYWx1ZXNbdGhldGFJbmRleF1bcGhpSW5kZXhdLCBkYXRhLmNhbmRlbGFWYWx1ZXNbbmV4dFRoZXRhSW5kZXhdW3BoaUluZGV4XSwgdDEpO1xyXG4gICAgY29uc3QgdjIgPSBMZXJwKGRhdGEuY2FuZGVsYVZhbHVlc1t0aGV0YUluZGV4XVtwaGlJbmRleCArIDFdLCBkYXRhLmNhbmRlbGFWYWx1ZXNbbmV4dFRoZXRhSW5kZXhdW3BoaUluZGV4ICsgMV0sIHQxKTtcclxuICAgIGNvbnN0IHYgPSBMZXJwKHYxLCB2MiwgdDIpO1xyXG5cclxuICAgIHJldHVybiB2O1xyXG59XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIElFUyB0ZXh0dXJlIGRhdGEuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJRVNUZXh0dXJlRGF0YSB7XHJcbiAgICAvKiogVGhlIHdpZHRoIG9mIHRoZSB0ZXh0dXJlICovXHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBoZWlnaHQgb2YgdGhlIHRleHR1cmUgKi9cclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBkYXRhIG9mIHRoZSB0ZXh0dXJlICovXHJcbiAgICBkYXRhOiBGbG9hdDMyQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgSUVTIGRhdGEgYnVmZmVyIGZyb20gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBJRVMgZGF0YS5cclxuICogQHBhcmFtIHVpbnQ4QXJyYXkgZGVmaW5lcyB0aGUgSUVTIGRhdGFcclxuICogQHJldHVybnMgdGhlIElFUyBkYXRhIGJ1ZmZlclxyXG4gKiBAc2VlIGh0dHBzOi8vaWVzbGlicmFyeS5jb20vYnJvd3NlXHJcbiAqIEBzZWUgaHR0cHM6Ly9wbGF5Z3JvdW5kLmJhYnlsb25qcy5jb20vI1VRR1BEVCMxXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZElFU0RhdGEodWludDhBcnJheTogVWludDhBcnJheSk6IElJRVNUZXh0dXJlRGF0YSB7XHJcbiAgICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBkZWNvZGVyLmRlY29kZSh1aW50OEFycmF5KTtcclxuXHJcbiAgICAvLyBSZWFkIGRhdGFcclxuICAgIGNvbnN0IGRhdGFQb2ludGVyOiBJRGF0YVBvaW50ZXIgPSB7XHJcbiAgICAgICAgbGluZXM6IHNvdXJjZS5zcGxpdChcIlxcblwiKSxcclxuICAgICAgICBpbmRleDogMCxcclxuICAgIH07XHJcbiAgICBjb25zdCBkYXRhOiBJSUVTRGF0YSA9IHsgdmVyc2lvbjogZGF0YVBvaW50ZXIubGluZXNbMF0sIGNhbmRlbGFWYWx1ZXM6IFtdLCBob3Jpem9udGFsQW5nbGVzOiBbXSwgdmVydGljYWxBbmdsZXM6IFtdLCBudW1iZXJPZkhvcml6b250YWxBbmdsZXM6IDAsIG51bWJlck9mVmVydGljYWxBbmdsZXM6IDAgfTtcclxuXHJcbiAgICAvLyBTa2lwIG1ldGFkYXRhXHJcbiAgICBkYXRhUG9pbnRlci5pbmRleCA9IDE7XHJcbiAgICB3aGlsZSAoZGF0YVBvaW50ZXIubGluZXMubGVuZ3RoID4gMCAmJiAhZGF0YVBvaW50ZXIubGluZXNbZGF0YVBvaW50ZXIuaW5kZXhdLmluY2x1ZGVzKFwiVElMVD1cIikpIHtcclxuICAgICAgICBkYXRhUG9pbnRlci5pbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2Nlc3MgdGlsdCBkYXRhP1xyXG4gICAgaWYgKGRhdGFQb2ludGVyLmxpbmVzW2RhdGFQb2ludGVyLmluZGV4XS5pbmNsdWRlcyhcIklOQ0xVREVcIikpIHtcclxuICAgICAgICAvLyBOb3Qgc3VwcG9ydGVkIHlldCBhcyBJIGRpZCBub3QgbWFuYWdlIHRvIGZpbmQgYW4gZXhhbXBsZSA6KVxyXG4gICAgfVxyXG4gICAgZGF0YVBvaW50ZXIuaW5kZXgrKztcclxuXHJcbiAgICAvLyBIZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IExpbmVUb0FycmF5KGRhdGFQb2ludGVyLmxpbmVzW2RhdGFQb2ludGVyLmluZGV4KytdKTtcclxuICAgIGRhdGEubnVtYmVyT2ZMaWdodHMgPSBoZWFkZXJbMF07XHJcbiAgICBkYXRhLmx1bWVuc1BlckxhbXAgPSBoZWFkZXJbMV07XHJcbiAgICBkYXRhLmNhbmRlbGFNdWx0aXBsaWVyID0gaGVhZGVyWzJdO1xyXG4gICAgZGF0YS5udW1iZXJPZlZlcnRpY2FsQW5nbGVzID0gaGVhZGVyWzNdO1xyXG4gICAgZGF0YS5udW1iZXJPZkhvcml6b250YWxBbmdsZXMgPSBoZWFkZXJbNF07XHJcbiAgICBkYXRhLnBob3RvbWV0cmljVHlwZSA9IGhlYWRlcls1XTsgLy8gV2UgaWdub3JlIGN5bGluZHJpY2FsIHR5cGUgZm9yIG5vdy4gV2lsbCBhZGQgc3VwcG9ydCBsYXRlciBpZiBuZWVkZWRcclxuICAgIGRhdGEudW5pdHNUeXBlID0gaGVhZGVyWzZdO1xyXG4gICAgZGF0YS53aWR0aCA9IGhlYWRlcls3XTtcclxuICAgIGRhdGEubGVuZ3RoID0gaGVhZGVyWzhdO1xyXG4gICAgZGF0YS5oZWlnaHQgPSBoZWFkZXJbOV07XHJcblxyXG4gICAgLy8gQWRkaXRpb25hbCBkYXRhXHJcbiAgICBjb25zdCBhZGRpdGlvbmFsRGF0YSA9IExpbmVUb0FycmF5KGRhdGFQb2ludGVyLmxpbmVzW2RhdGFQb2ludGVyLmluZGV4KytdKTtcclxuICAgIGRhdGEuYmFsbGFzdEZhY3RvciA9IGFkZGl0aW9uYWxEYXRhWzBdO1xyXG4gICAgZGF0YS5maWxlR2VuZXJhdGlvblR5cGUgPSBhZGRpdGlvbmFsRGF0YVsxXTtcclxuICAgIGRhdGEuaW5wdXRXYXR0cyA9IGFkZGl0aW9uYWxEYXRhWzJdO1xyXG5cclxuICAgIC8vIFByZXBhcmUgYXJyYXlzXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5udW1iZXJPZkhvcml6b250YWxBbmdsZXM7IGluZGV4KyspIHtcclxuICAgICAgICBkYXRhLmNhbmRlbGFWYWx1ZXNbaW5kZXhdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVydGljYWwgYW5nbGVzXHJcbiAgICBSZWFkQXJyYXkoZGF0YVBvaW50ZXIsIGRhdGEubnVtYmVyT2ZWZXJ0aWNhbEFuZ2xlcywgZGF0YS52ZXJ0aWNhbEFuZ2xlcyk7XHJcblxyXG4gICAgLy8gSG9yaXpvbnRhbCBhbmdsZXNcclxuICAgIFJlYWRBcnJheShkYXRhUG9pbnRlciwgZGF0YS5udW1iZXJPZkhvcml6b250YWxBbmdsZXMsIGRhdGEuaG9yaXpvbnRhbEFuZ2xlcyk7XHJcblxyXG4gICAgLy8gQ2FuZGVsYSB2YWx1ZXNcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLm51bWJlck9mSG9yaXpvbnRhbEFuZ2xlczsgaW5kZXgrKykge1xyXG4gICAgICAgIFJlYWRBcnJheShkYXRhUG9pbnRlciwgZGF0YS5udW1iZXJPZlZlcnRpY2FsQW5nbGVzLCBkYXRhLmNhbmRlbGFWYWx1ZXNbaW5kZXhdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFdmFsdWF0ZSBjYW5kZWxhIHZhbHVlc1xyXG4gICAgbGV0IG1heENhbmRlbGEgPSAtMTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLm51bWJlck9mSG9yaXpvbnRhbEFuZ2xlczsgaW5kZXgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHN1YkluZGV4ID0gMDsgc3ViSW5kZXggPCBkYXRhLm51bWJlck9mVmVydGljYWxBbmdsZXM7IHN1YkluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF0YS5jYW5kZWxhVmFsdWVzW2luZGV4XVtzdWJJbmRleF0gKj0gZGF0YS5jYW5kZWxhVmFsdWVzW2luZGV4XVtzdWJJbmRleF0gKiBkYXRhLmNhbmRlbGFNdWx0aXBsaWVyICogZGF0YS5iYWxsYXN0RmFjdG9yICogZGF0YS5maWxlR2VuZXJhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIG1heENhbmRlbGEgPSBNYXRoLm1heChtYXhDYW5kZWxhLCBkYXRhLmNhbmRlbGFWYWx1ZXNbaW5kZXhdW3N1YkluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vcm1hbGl6ZSBjYW5kZWxhIHZhbHVlc1xyXG4gICAgaWYgKG1heENhbmRlbGEgPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubnVtYmVyT2ZIb3Jpem9udGFsQW5nbGVzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN1YkluZGV4ID0gMDsgc3ViSW5kZXggPCBkYXRhLm51bWJlck9mVmVydGljYWxBbmdsZXM7IHN1YkluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuY2FuZGVsYVZhbHVlc1tpbmRleF1bc3ViSW5kZXhdIC89IG1heENhbmRlbGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBjeWxpbmRyaWNhbCB0ZXh0dXJlXHJcbiAgICBjb25zdCBoZWlnaHQgPSAxODA7XHJcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIDI7XHJcbiAgICBjb25zdCBzaXplID0gd2lkdGggKiBoZWlnaHQ7XHJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkod2lkdGggKiBoZWlnaHQpO1xyXG5cclxuICAgIC8vIEZpbGwgdGhlIHRleHR1cmVcclxuICAgIGNvbnN0IHN0YXJ0VGhldGEgPSBkYXRhLmhvcml6b250YWxBbmdsZXNbMF07XHJcbiAgICBjb25zdCBlbmRUaGV0YSA9IGRhdGEuaG9yaXpvbnRhbEFuZ2xlc1tkYXRhLm51bWJlck9mSG9yaXpvbnRhbEFuZ2xlcyAtIDFdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNpemU7IGluZGV4KyspIHtcclxuICAgICAgICBsZXQgdGhldGEgPSBpbmRleCAlIHdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHBoaSA9IE1hdGguZmxvb3IoaW5kZXggLyB3aWR0aCk7XHJcblxyXG4gICAgICAgIC8vIFN5bW1ldHJ5XHJcbiAgICAgICAgaWYgKGVuZFRoZXRhIC0gc3RhcnRUaGV0YSAhPT0gMCAmJiAodGhldGEgPCBzdGFydFRoZXRhIHx8IHRoZXRhID49IGVuZFRoZXRhKSkge1xyXG4gICAgICAgICAgICB0aGV0YSAlPSBlbmRUaGV0YSAqIDI7XHJcbiAgICAgICAgICAgIGlmICh0aGV0YSA+IGVuZFRoZXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGV0YSA9IGVuZFRoZXRhICogMiAtIHRoZXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnJheUJ1ZmZlcltwaGkgKyB0aGV0YSAqIGhlaWdodF0gPSBJbnRlcnBvbGF0ZUNhbmRlbGFWYWx1ZXMoZGF0YSwgcGhpLCB0aGV0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU28gZmFyIHdlIG9ubHkgbmVlZCB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgZmlyc3Qgcm93IG9mIHRoZSB0ZXh0dXJlIGFzIHdlIG9ubHkgc3VwcG9ydCBJRVMgZm9yIHNwb3QgbGlnaHQuIFdlIGNhbiBhZGQgc3VwcG9ydCBmb3Igb3RoZXIgdHlwZXMgbGF0ZXIuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCAvIDIsXHJcbiAgICAgICAgaGVpZ2h0OiAxLFxyXG4gICAgICAgIGRhdGE6IGFycmF5QnVmZmVyLFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEludGVybmFsVGV4dHVyZSB9IGZyb20gXCIuLi9pbnRlcm5hbFRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJSW50ZXJuYWxUZXh0dXJlTG9hZGVyIH0gZnJvbSBcIi4vaW50ZXJuYWxUZXh0dXJlTG9hZGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi8uLi9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBMb2FkSUVTRGF0YSB9IGZyb20gXCJjb3JlL0xpZ2h0cy9JRVMvaWVzTG9hZGVyXCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIElFUyBUZXh0dXJlIExvYWRlci5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBfSUVTVGV4dHVyZUxvYWRlciBpbXBsZW1lbnRzIElJbnRlcm5hbFRleHR1cmVMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhlIGxvYWRlciBzdXBwb3J0cyBjYXNjYWRlIGxvYWRpbmcgdGhlIGRpZmZlcmVudCBmYWNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN1cHBvcnRDYXNjYWRlcyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyB0aGUgY3ViZSB0ZXh0dXJlIGRhdGEgdG8gdGhlIFdlYkdMIHRleHR1cmUuIEl0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQ3ViZURhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICB0aHJvdyBcIi5pZXMgbm90IHN1cHBvcnRlZCBpbiBDdWJlLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyB0aGUgMkQgdGV4dHVyZSBkYXRhIHRvIHRoZSBXZWJHTCB0ZXh0dXJlLiBJdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kIG9uY2UgaW4gdGhlIGNhbGxiYWNrLlxyXG4gICAgICogQHBhcmFtIGRhdGEgY29udGFpbnMgdGhlIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgZGVmaW5lcyB0aGUgQmFieWxvbkpTIGludGVybmFsIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBkZWZpbmVzIHRoZSBtZXRob2QgdG8gY2FsbCBvbmNlIHJlYWR5IHRvIHVwbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGEoXHJcbiAgICAgICAgZGF0YTogQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHRleHR1cmU6IEludGVybmFsVGV4dHVyZSxcclxuICAgICAgICBjYWxsYmFjazogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBsb2FkTWlwbWFwOiBib29sZWFuLCBpc0NvbXByZXNzZWQ6IGJvb2xlYW4sIGRvbmU6ICgpID0+IHZvaWQpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVpbnQ4YXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlRGF0YSA9IExvYWRJRVNEYXRhKHVpbnQ4YXJyYXkpO1xyXG5cclxuICAgICAgICBjYWxsYmFjayh0ZXh0dXJlRGF0YS53aWR0aCwgdGV4dHVyZURhdGEuaGVpZ2h0LCB0ZXh0dXJlLnVzZU1pcE1hcHMsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZ2luZSA9IHRleHR1cmUuZ2V0RW5naW5lKCk7XHJcbiAgICAgICAgICAgIHRleHR1cmUudHlwZSA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9GTE9BVDtcclxuICAgICAgICAgICAgdGV4dHVyZS5mb3JtYXQgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLl9nYW1tYVNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVuZ2luZS5fdXBsb2FkRGF0YVRvVGV4dHVyZURpcmVjdGx5KHRleHR1cmUsIHRleHR1cmVEYXRhLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=