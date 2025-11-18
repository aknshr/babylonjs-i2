"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Materials_Textures_Loaders_hdrTextureLoader_js"],{

/***/ "../core/dist/Materials/Textures/Loaders/hdrTextureLoader.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/hdrTextureLoader.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _HDRTextureLoader: () => (/* binding */ _HDRTextureLoader)
/* harmony export */ });
/* harmony import */ var _Misc_HighDynamicRange_hdr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/HighDynamicRange/hdr */ "../core/dist/Misc/HighDynamicRange/hdr.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Implementation of the HDR Texture Loader.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _HDRTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * Cube texture are not supported by .hdr files
     */
    loadCubeData() {
        // eslint-disable-next-line no-throw-literal
        throw ".hdr not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    loadData(data, texture, callback) {
        const uint8array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const hdrInfo = (0,_Misc_HighDynamicRange_hdr__WEBPACK_IMPORTED_MODULE_0__.RGBE_ReadHeader)(uint8array);
        const pixelsDataRGB32 = (0,_Misc_HighDynamicRange_hdr__WEBPACK_IMPORTED_MODULE_0__.RGBE_ReadPixels)(uint8array, hdrInfo);
        const pixels = hdrInfo.width * hdrInfo.height;
        const pixelsDataRGBA32 = new Float32Array(pixels * 4);
        for (let i = 0; i < pixels; i += 1) {
            pixelsDataRGBA32[i * 4] = pixelsDataRGB32[i * 3];
            pixelsDataRGBA32[i * 4 + 1] = pixelsDataRGB32[i * 3 + 1];
            pixelsDataRGBA32[i * 4 + 2] = pixelsDataRGB32[i * 3 + 2];
            pixelsDataRGBA32[i * 4 + 3] = 1;
        }
        callback(hdrInfo.width, hdrInfo.height, texture.generateMipMaps, false, () => {
            const engine = texture.getEngine();
            texture.type = _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_FLOAT;
            texture.format = _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTUREFORMAT_RGBA;
            texture._gammaSpace = false;
            engine._uploadDataToTextureDirectly(texture, pixelsDataRGBA32);
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

/***/ }),

/***/ "../core/dist/Misc/HighDynamicRange/hdr.js":
/*!*************************************************!*\
  !*** ../core/dist/Misc/HighDynamicRange/hdr.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCubeMapTextureData: () => (/* binding */ GetCubeMapTextureData),
/* harmony export */   HDRTools: () => (/* binding */ HDRTools),
/* harmony export */   RGBE_ReadHeader: () => (/* binding */ RGBE_ReadHeader),
/* harmony export */   RGBE_ReadPixels: () => (/* binding */ RGBE_ReadPixels)
/* harmony export */ });
/* harmony import */ var _panoramaToCubemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panoramaToCubemap */ "../core/dist/Misc/HighDynamicRange/panoramaToCubemap.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/* This groups tools to convert HDR texture to native colors array. */
function Ldexp(mantissa, exponent) {
    if (exponent > 1023) {
        return mantissa * Math.pow(2, 1023) * Math.pow(2, exponent - 1023);
    }
    if (exponent < -1074) {
        return mantissa * Math.pow(2, -1074) * Math.pow(2, exponent + 1074);
    }
    return mantissa * Math.pow(2, exponent);
}
function Rgbe2float(float32array, red, green, blue, exponent, index) {
    if (exponent > 0) {
        /*nonzero pixel*/
        exponent = Ldexp(1.0, exponent - (128 + 8));
        float32array[index + 0] = red * exponent;
        float32array[index + 1] = green * exponent;
        float32array[index + 2] = blue * exponent;
    }
    else {
        float32array[index + 0] = 0;
        float32array[index + 1] = 0;
        float32array[index + 2] = 0;
    }
}
function ReadStringLine(uint8array, startIndex) {
    let line = "";
    let character = "";
    for (let i = startIndex; i < uint8array.length - startIndex; i++) {
        character = String.fromCharCode(uint8array[i]);
        if (character == "\n") {
            break;
        }
        line += character;
    }
    return line;
}
/**
 * Reads header information from an RGBE texture stored in a native array.
 * More information on this format are available here:
 * https://en.wikipedia.org/wiki/RGBE_image_format
 *
 * @param uint8array The binary file stored in  native array.
 * @returns The header information.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function RGBE_ReadHeader(uint8array) {
    let height = 0;
    let width = 0;
    let line = ReadStringLine(uint8array, 0);
    if (line[0] != "#" || line[1] != "?") {
        // eslint-disable-next-line no-throw-literal
        throw "Bad HDR Format.";
    }
    let endOfHeader = false;
    let findFormat = false;
    let lineIndex = 0;
    do {
        lineIndex += line.length + 1;
        line = ReadStringLine(uint8array, lineIndex);
        if (line == "FORMAT=32-bit_rle_rgbe") {
            findFormat = true;
        }
        else if (line.length == 0) {
            endOfHeader = true;
        }
    } while (!endOfHeader);
    if (!findFormat) {
        // eslint-disable-next-line no-throw-literal
        throw "HDR Bad header format, unsupported FORMAT";
    }
    lineIndex += line.length + 1;
    line = ReadStringLine(uint8array, lineIndex);
    const sizeRegexp = /^-Y (.*) \+X (.*)$/g;
    const match = sizeRegexp.exec(line);
    // TODO. Support +Y and -X if needed.
    if (!match || match.length < 3) {
        // eslint-disable-next-line no-throw-literal
        throw "HDR Bad header format, no size";
    }
    width = parseInt(match[2]);
    height = parseInt(match[1]);
    if (width < 8 || width > 0x7fff) {
        // eslint-disable-next-line no-throw-literal
        throw "HDR Bad header format, unsupported size";
    }
    lineIndex += line.length + 1;
    return {
        height: height,
        width: width,
        dataPosition: lineIndex,
    };
}
/**
 * Returns the cubemap information (each faces texture data) extracted from an RGBE texture.
 * This RGBE texture needs to store the information as a panorama.
 *
 * More information on this format are available here:
 * https://en.wikipedia.org/wiki/RGBE_image_format
 *
 * @param buffer The binary file stored in an array buffer.
 * @param size The expected size of the extracted cubemap.
 * @param supersample enable supersampling the cubemap (default: false)
 * @returns The Cube Map information.
 */
function GetCubeMapTextureData(buffer, size, supersample = false) {
    const uint8array = new Uint8Array(buffer);
    const hdrInfo = RGBE_ReadHeader(uint8array);
    const data = RGBE_ReadPixels(uint8array, hdrInfo);
    const cubeMapData = _panoramaToCubemap__WEBPACK_IMPORTED_MODULE_0__.PanoramaToCubeMapTools.ConvertPanoramaToCubemap(data, hdrInfo.width, hdrInfo.height, size, supersample);
    return cubeMapData;
}
/**
 * Returns the pixels data extracted from an RGBE texture.
 * This pixels will be stored left to right up to down in the R G B order in one array.
 *
 * More information on this format are available here:
 * https://en.wikipedia.org/wiki/RGBE_image_format
 *
 * @param uint8array The binary file stored in an array buffer.
 * @param hdrInfo The header information of the file.
 * @returns The pixels data in RGB right to left up to down order.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function RGBE_ReadPixels(uint8array, hdrInfo) {
    return ReadRGBEPixelsRLE(uint8array, hdrInfo);
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function ReadRGBEPixelsRLE(uint8array, hdrInfo) {
    let numScanlines = hdrInfo.height;
    const scanlineWidth = hdrInfo.width;
    let a, b, c, d, count;
    let dataIndex = hdrInfo.dataPosition;
    let index = 0, endIndex = 0, i = 0;
    const scanLineArrayBuffer = new ArrayBuffer(scanlineWidth * 4); // four channel R G B E
    const scanLineArray = new Uint8Array(scanLineArrayBuffer);
    // 3 channels of 4 bytes per pixel in float.
    const resultBuffer = new ArrayBuffer(hdrInfo.width * hdrInfo.height * 4 * 3);
    const resultArray = new Float32Array(resultBuffer);
    // read in each successive scanline
    while (numScanlines > 0) {
        a = uint8array[dataIndex++];
        b = uint8array[dataIndex++];
        c = uint8array[dataIndex++];
        d = uint8array[dataIndex++];
        if (a != 2 || b != 2 || c & 0x80 || hdrInfo.width < 8 || hdrInfo.width > 32767) {
            return ReadRGBEPixelsNotRLE(uint8array, hdrInfo);
        }
        if (((c << 8) | d) != scanlineWidth) {
            // eslint-disable-next-line no-throw-literal
            throw "HDR Bad header format, wrong scan line width";
        }
        index = 0;
        // read each of the four channels for the scanline into the buffer
        for (i = 0; i < 4; i++) {
            endIndex = (i + 1) * scanlineWidth;
            while (index < endIndex) {
                a = uint8array[dataIndex++];
                b = uint8array[dataIndex++];
                if (a > 128) {
                    // a run of the same value
                    count = a - 128;
                    if (count == 0 || count > endIndex - index) {
                        // eslint-disable-next-line no-throw-literal
                        throw "HDR Bad Format, bad scanline data (run)";
                    }
                    while (count-- > 0) {
                        scanLineArray[index++] = b;
                    }
                }
                else {
                    // a non-run
                    count = a;
                    if (count == 0 || count > endIndex - index) {
                        // eslint-disable-next-line no-throw-literal
                        throw "HDR Bad Format, bad scanline data (non-run)";
                    }
                    scanLineArray[index++] = b;
                    if (--count > 0) {
                        for (let j = 0; j < count; j++) {
                            scanLineArray[index++] = uint8array[dataIndex++];
                        }
                    }
                }
            }
        }
        // now convert data from buffer into floats
        for (i = 0; i < scanlineWidth; i++) {
            a = scanLineArray[i];
            b = scanLineArray[i + scanlineWidth];
            c = scanLineArray[i + 2 * scanlineWidth];
            d = scanLineArray[i + 3 * scanlineWidth];
            Rgbe2float(resultArray, a, b, c, d, (hdrInfo.height - numScanlines) * scanlineWidth * 3 + i * 3);
        }
        numScanlines--;
    }
    return resultArray;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function ReadRGBEPixelsNotRLE(uint8array, hdrInfo) {
    // this file is not run length encoded
    // read values sequentially
    let numScanlines = hdrInfo.height;
    const scanlineWidth = hdrInfo.width;
    let a, b, c, d, i;
    let dataIndex = hdrInfo.dataPosition;
    // 3 channels of 4 bytes per pixel in float.
    const resultBuffer = new ArrayBuffer(hdrInfo.width * hdrInfo.height * 4 * 3);
    const resultArray = new Float32Array(resultBuffer);
    // read in each successive scanline
    while (numScanlines > 0) {
        for (i = 0; i < hdrInfo.width; i++) {
            a = uint8array[dataIndex++];
            b = uint8array[dataIndex++];
            c = uint8array[dataIndex++];
            d = uint8array[dataIndex++];
            Rgbe2float(resultArray, a, b, c, d, (hdrInfo.height - numScanlines) * scanlineWidth * 3 + i * 3);
        }
        numScanlines--;
    }
    return resultArray;
}
/**
 * @deprecated Use functions separately
 */
const HDRTools = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    RGBE_ReadHeader,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GetCubeMapTextureData,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    RGBE_ReadPixels,
};


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

/***/ "../core/dist/Misc/HighDynamicRange/panoramaToCubemap.js":
/*!***************************************************************!*\
  !*** ../core/dist/Misc/HighDynamicRange/panoramaToCubemap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanoramaToCubeMapTools: () => (/* binding */ PanoramaToCubeMapTools)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Helper class useful to convert panorama picture to their cubemap representation in 6 faces.
 */
class PanoramaToCubeMapTools {
    /**
     * Converts a panorama stored in RGB right to left up to down format into a cubemap (6 faces).
     *
     * @param float32Array The source data.
     * @param inputWidth The width of the input panorama.
     * @param inputHeight The height of the input panorama.
     * @param size The willing size of the generated cubemap (each faces will be size * size pixels)
     * @param supersample enable supersampling the cubemap
     * @param invertY defines if the Y axis must be inverted
     * @returns The cubemap data
     */
    static ConvertPanoramaToCubemap(float32Array, inputWidth, inputHeight, size, supersample = false, invertY = true) {
        if (!float32Array) {
            // eslint-disable-next-line no-throw-literal
            throw "ConvertPanoramaToCubemap: input cannot be null";
        }
        let stride = 0;
        if (float32Array.length != inputWidth * inputHeight * 3) {
            if (float32Array.length != inputWidth * inputHeight * 4) {
                // eslint-disable-next-line no-throw-literal
                throw "ConvertPanoramaToCubemap: input size is wrong";
            }
            else {
                stride = 4;
            }
        }
        else {
            stride = 3;
        }
        const textureFront = this.CreateCubemapTexture(size, this.FACE_FRONT, float32Array, inputWidth, inputHeight, supersample, invertY, stride);
        const textureBack = this.CreateCubemapTexture(size, this.FACE_BACK, float32Array, inputWidth, inputHeight, supersample, invertY, stride);
        const textureLeft = this.CreateCubemapTexture(size, this.FACE_LEFT, float32Array, inputWidth, inputHeight, supersample, invertY, stride);
        const textureRight = this.CreateCubemapTexture(size, this.FACE_RIGHT, float32Array, inputWidth, inputHeight, supersample, invertY, stride);
        const textureUp = this.CreateCubemapTexture(size, this.FACE_UP, float32Array, inputWidth, inputHeight, supersample, invertY, stride);
        const textureDown = this.CreateCubemapTexture(size, this.FACE_DOWN, float32Array, inputWidth, inputHeight, supersample, invertY, stride);
        return {
            front: textureFront,
            back: textureBack,
            left: textureLeft,
            right: textureRight,
            up: textureUp,
            down: textureDown,
            size: size,
            type: _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_FLOAT,
            format: _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTUREFORMAT_RGB,
            gammaSpace: false,
        };
    }
    static CreateCubemapTexture(texSize, faceData, float32Array, inputWidth, inputHeight, supersample, invertY, stride) {
        const buffer = new ArrayBuffer(texSize * texSize * 4 * 3);
        const textureArray = new Float32Array(buffer);
        // If supersampling, determine number of samples needed when source texture width is divided for 4 cube faces
        const samples = supersample ? Math.max(1, Math.round(inputWidth / 4 / texSize)) : 1;
        const sampleFactor = 1 / samples;
        const sampleFactorSqr = sampleFactor * sampleFactor;
        const rotDX1 = faceData[1].subtract(faceData[0]).scale(sampleFactor / texSize);
        const rotDX2 = faceData[3].subtract(faceData[2]).scale(sampleFactor / texSize);
        const dy = 1 / texSize;
        let fy = 0;
        for (let y = 0; y < texSize; y++) {
            for (let sy = 0; sy < samples; sy++) {
                let xv1 = faceData[0];
                let xv2 = faceData[2];
                for (let x = 0; x < texSize; x++) {
                    for (let sx = 0; sx < samples; sx++) {
                        const v = xv2.subtract(xv1).scale(fy).add(xv1);
                        v.normalize();
                        const color = this.CalcProjectionSpherical(v, float32Array, inputWidth, inputHeight, stride, invertY);
                        // 3 channels per pixels
                        textureArray[y * texSize * 3 + x * 3 + 0] += color.r * sampleFactorSqr;
                        textureArray[y * texSize * 3 + x * 3 + 1] += color.g * sampleFactorSqr;
                        textureArray[y * texSize * 3 + x * 3 + 2] += color.b * sampleFactorSqr;
                        xv1 = xv1.add(rotDX1);
                        xv2 = xv2.add(rotDX2);
                    }
                }
                fy += dy * sampleFactor;
            }
        }
        return textureArray;
    }
    static CalcProjectionSpherical(vDir, float32Array, inputWidth, inputHeight, stride, invertY) {
        let theta = Math.atan2(vDir.z, vDir.x);
        const phi = Math.acos(vDir.y);
        while (theta < -Math.PI) {
            theta += 2 * Math.PI;
        }
        while (theta > Math.PI) {
            theta -= 2 * Math.PI;
        }
        let dx = theta / Math.PI;
        const dy = phi / Math.PI;
        // recenter.
        dx = dx * 0.5 + 0.5;
        let px = Math.round(dx * inputWidth);
        if (px < 0) {
            px = 0;
        }
        else if (px >= inputWidth) {
            px = inputWidth - 1;
        }
        let py = Math.round(dy * inputHeight);
        if (py < 0) {
            py = 0;
        }
        else if (py >= inputHeight) {
            py = inputHeight - 1;
        }
        const inputY = invertY ? inputHeight - py - 1 : py;
        const r = float32Array[inputY * inputWidth * stride + px * stride + 0];
        const g = float32Array[inputY * inputWidth * stride + px * stride + 1];
        const b = float32Array[inputY * inputWidth * stride + px * stride + 2];
        return {
            r: r,
            g: g,
            b: b,
        };
    }
}
PanoramaToCubeMapTools.FACE_LEFT = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, -1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, -1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, 1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, 1.0, -1.0)];
PanoramaToCubeMapTools.FACE_RIGHT = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, -1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, -1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, 1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, 1.0, 1.0)];
PanoramaToCubeMapTools.FACE_FRONT = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, -1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, -1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, 1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, 1.0, 1.0)];
PanoramaToCubeMapTools.FACE_BACK = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, -1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, -1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, 1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, 1.0, -1.0)];
PanoramaToCubeMapTools.FACE_DOWN = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, 1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, 1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, 1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, 1.0, 1.0)];
PanoramaToCubeMapTools.FACE_UP = [new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, -1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1.0, -1.0, 1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, -1.0, -1.0), new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.0, -1.0, 1.0)];


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01hdGVyaWFsc19UZXh0dXJlc19Mb2FkZXJzX2hkclRleHR1cmVMb2FkZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBMkNBO0FBekNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFRBO0FBQ0E7QUFxRUE7O0FBRUE7QUFDQTtBQVFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9Mb2FkZXJzL2hkclRleHR1cmVMb2FkZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NaXNjL0hpZ2hEeW5hbWljUmFuZ2UvaGRyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWlzYy9IaWdoRHluYW1pY1JhbmdlL3Bhbm9yYW1hVG9DdWJlbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJHQkVfUmVhZEhlYWRlciwgUkdCRV9SZWFkUGl4ZWxzIH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvSGlnaER5bmFtaWNSYW5nZS9oZHJcIjtcclxuaW1wb3J0IHR5cGUgeyBJbnRlcm5hbFRleHR1cmUgfSBmcm9tIFwiLi4vLi4vLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2ludGVybmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElJbnRlcm5hbFRleHR1cmVMb2FkZXIgfSBmcm9tIFwiLi9pbnRlcm5hbFRleHR1cmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIEhEUiBUZXh0dXJlIExvYWRlci5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBfSERSVGV4dHVyZUxvYWRlciBpbXBsZW1lbnRzIElJbnRlcm5hbFRleHR1cmVMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhlIGxvYWRlciBzdXBwb3J0cyBjYXNjYWRlIGxvYWRpbmcgdGhlIGRpZmZlcmVudCBmYWNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN1cHBvcnRDYXNjYWRlcyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyB0aGUgY3ViZSB0ZXh0dXJlIGRhdGEgdG8gdGhlIFdlYkdMIHRleHR1cmUuIEl0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmQuXHJcbiAgICAgKiBDdWJlIHRleHR1cmUgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgLmhkciBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEN1YmVEYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgdGhyb3cgXCIuaGRyIG5vdCBzdXBwb3J0ZWQgaW4gQ3ViZS5cIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZHMgdGhlIDJEIHRleHR1cmUgZGF0YSB0byB0aGUgV2ViR0wgdGV4dHVyZS4gSXQgaGFzIGFscmVhZHkgYmVlbiBib3VuZCBvbmNlIGluIHRoZSBjYWxsYmFjay5cclxuICAgICAqIEBwYXJhbSBkYXRhIGNvbnRhaW5zIHRoZSB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlIGRlZmluZXMgdGhlIEJhYnlsb25KUyBpbnRlcm5hbCB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgZGVmaW5lcyB0aGUgbWV0aG9kIHRvIGNhbGwgb25jZSByZWFkeSB0byB1cGxvYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWREYXRhKFxyXG4gICAgICAgIGRhdGE6IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICB0ZXh0dXJlOiBJbnRlcm5hbFRleHR1cmUsXHJcbiAgICAgICAgY2FsbGJhY2s6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbG9hZE1pcG1hcDogYm9vbGVhbiwgaXNDb21wcmVzc2VkOiBib29sZWFuLCBkb25lOiAoKSA9PiB2b2lkKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1aW50OGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoZHJJbmZvID0gUkdCRV9SZWFkSGVhZGVyKHVpbnQ4YXJyYXkpO1xyXG4gICAgICAgIGNvbnN0IHBpeGVsc0RhdGFSR0IzMiA9IFJHQkVfUmVhZFBpeGVscyh1aW50OGFycmF5LCBoZHJJbmZvKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGl4ZWxzID0gaGRySW5mby53aWR0aCAqIGhkckluZm8uaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHBpeGVsc0RhdGFSR0JBMzIgPSBuZXcgRmxvYXQzMkFycmF5KHBpeGVscyAqIDQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxzOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcGl4ZWxzRGF0YVJHQkEzMltpICogNF0gPSBwaXhlbHNEYXRhUkdCMzJbaSAqIDNdO1xyXG4gICAgICAgICAgICBwaXhlbHNEYXRhUkdCQTMyW2kgKiA0ICsgMV0gPSBwaXhlbHNEYXRhUkdCMzJbaSAqIDMgKyAxXTtcclxuICAgICAgICAgICAgcGl4ZWxzRGF0YVJHQkEzMltpICogNCArIDJdID0gcGl4ZWxzRGF0YVJHQjMyW2kgKiAzICsgMl07XHJcbiAgICAgICAgICAgIHBpeGVsc0RhdGFSR0JBMzJbaSAqIDQgKyAzXSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxsYmFjayhoZHJJbmZvLndpZHRoLCBoZHJJbmZvLmhlaWdodCwgdGV4dHVyZS5nZW5lcmF0ZU1pcE1hcHMsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZ2luZSA9IHRleHR1cmUuZ2V0RW5naW5lKCk7XHJcbiAgICAgICAgICAgIHRleHR1cmUudHlwZSA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9GTE9BVDtcclxuICAgICAgICAgICAgdGV4dHVyZS5mb3JtYXQgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLl9nYW1tYVNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVuZ2luZS5fdXBsb2FkRGF0YVRvVGV4dHVyZURpcmVjdGx5KHRleHR1cmUsIHBpeGVsc0RhdGFSR0JBMzIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgQ3ViZU1hcEluZm8gfSBmcm9tIFwiLi9wYW5vcmFtYVRvQ3ViZW1hcFwiO1xyXG5pbXBvcnQgeyBQYW5vcmFtYVRvQ3ViZU1hcFRvb2xzIH0gZnJvbSBcIi4vcGFub3JhbWFUb0N1YmVtYXBcIjtcclxuXHJcbi8qKlxyXG4gKiBIZWFkZXIgaW5mb3JtYXRpb24gb2YgSERSIHRleHR1cmUgZmlsZXMuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgSERSSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHRleHR1cmUgaW4gcGl4ZWxzLlxyXG4gICAgICovXHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgdGV4dHVyZSBpbiBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGJlZ2lubmluZyBvZiB0aGUgZGF0YSBpbiB0aGUgYmluYXJ5IGZpbGUuXHJcbiAgICAgKi9cclxuICAgIGRhdGFQb3NpdGlvbjogbnVtYmVyO1xyXG59XHJcblxyXG4vKiBUaGlzIGdyb3VwcyB0b29scyB0byBjb252ZXJ0IEhEUiB0ZXh0dXJlIHRvIG5hdGl2ZSBjb2xvcnMgYXJyYXkuICovXHJcblxyXG5mdW5jdGlvbiBMZGV4cChtYW50aXNzYTogbnVtYmVyLCBleHBvbmVudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChleHBvbmVudCA+IDEwMjMpIHtcclxuICAgICAgICByZXR1cm4gbWFudGlzc2EgKiBNYXRoLnBvdygyLCAxMDIzKSAqIE1hdGgucG93KDIsIGV4cG9uZW50IC0gMTAyMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4cG9uZW50IDwgLTEwNzQpIHtcclxuICAgICAgICByZXR1cm4gbWFudGlzc2EgKiBNYXRoLnBvdygyLCAtMTA3NCkgKiBNYXRoLnBvdygyLCBleHBvbmVudCArIDEwNzQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYW50aXNzYSAqIE1hdGgucG93KDIsIGV4cG9uZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmdiZTJmbG9hdChmbG9hdDMyYXJyYXk6IEZsb2F0MzJBcnJheSwgcmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgZXhwb25lbnQ6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKGV4cG9uZW50ID4gMCkge1xyXG4gICAgICAgIC8qbm9uemVybyBwaXhlbCovXHJcbiAgICAgICAgZXhwb25lbnQgPSBMZGV4cCgxLjAsIGV4cG9uZW50IC0gKDEyOCArIDgpKTtcclxuXHJcbiAgICAgICAgZmxvYXQzMmFycmF5W2luZGV4ICsgMF0gPSByZWQgKiBleHBvbmVudDtcclxuICAgICAgICBmbG9hdDMyYXJyYXlbaW5kZXggKyAxXSA9IGdyZWVuICogZXhwb25lbnQ7XHJcbiAgICAgICAgZmxvYXQzMmFycmF5W2luZGV4ICsgMl0gPSBibHVlICogZXhwb25lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZsb2F0MzJhcnJheVtpbmRleCArIDBdID0gMDtcclxuICAgICAgICBmbG9hdDMyYXJyYXlbaW5kZXggKyAxXSA9IDA7XHJcbiAgICAgICAgZmxvYXQzMmFycmF5W2luZGV4ICsgMl0gPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBSZWFkU3RyaW5nTGluZSh1aW50OGFycmF5OiBVaW50OEFycmF5LCBzdGFydEluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGxpbmUgPSBcIlwiO1xyXG4gICAgbGV0IGNoYXJhY3RlciA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCB1aW50OGFycmF5Lmxlbmd0aCAtIHN0YXJ0SW5kZXg7IGkrKykge1xyXG4gICAgICAgIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUodWludDhhcnJheVtpXSk7XHJcblxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT0gXCJcXG5cIikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpbmUgKz0gY2hhcmFjdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG59XHJcblxyXG4vKipcclxuICogUmVhZHMgaGVhZGVyIGluZm9ybWF0aW9uIGZyb20gYW4gUkdCRSB0ZXh0dXJlIHN0b3JlZCBpbiBhIG5hdGl2ZSBhcnJheS5cclxuICogTW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIGZvcm1hdCBhcmUgYXZhaWxhYmxlIGhlcmU6XHJcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JHQkVfaW1hZ2VfZm9ybWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB1aW50OGFycmF5IFRoZSBiaW5hcnkgZmlsZSBzdG9yZWQgaW4gIG5hdGl2ZSBhcnJheS5cclxuICogQHJldHVybnMgVGhlIGhlYWRlciBpbmZvcm1hdGlvbi5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIFJHQkVfUmVhZEhlYWRlcih1aW50OGFycmF5OiBVaW50OEFycmF5KTogSERSSW5mbyB7XHJcbiAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IHdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGxldCBsaW5lID0gUmVhZFN0cmluZ0xpbmUodWludDhhcnJheSwgMCk7XHJcbiAgICBpZiAobGluZVswXSAhPSBcIiNcIiB8fCBsaW5lWzFdICE9IFwiP1wiKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICB0aHJvdyBcIkJhZCBIRFIgRm9ybWF0LlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbmRPZkhlYWRlciA9IGZhbHNlO1xyXG4gICAgbGV0IGZpbmRGb3JtYXQgPSBmYWxzZTtcclxuICAgIGxldCBsaW5lSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICAgIGxpbmVJbmRleCArPSBsaW5lLmxlbmd0aCArIDE7XHJcbiAgICAgICAgbGluZSA9IFJlYWRTdHJpbmdMaW5lKHVpbnQ4YXJyYXksIGxpbmVJbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChsaW5lID09IFwiRk9STUFUPTMyLWJpdF9ybGVfcmdiZVwiKSB7XHJcbiAgICAgICAgICAgIGZpbmRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBlbmRPZkhlYWRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSB3aGlsZSAoIWVuZE9mSGVhZGVyKTtcclxuXHJcbiAgICBpZiAoIWZpbmRGb3JtYXQpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgIHRocm93IFwiSERSIEJhZCBoZWFkZXIgZm9ybWF0LCB1bnN1cHBvcnRlZCBGT1JNQVRcIjtcclxuICAgIH1cclxuXHJcbiAgICBsaW5lSW5kZXggKz0gbGluZS5sZW5ndGggKyAxO1xyXG4gICAgbGluZSA9IFJlYWRTdHJpbmdMaW5lKHVpbnQ4YXJyYXksIGxpbmVJbmRleCk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZVJlZ2V4cCA9IC9eLVkgKC4qKSBcXCtYICguKikkL2c7XHJcbiAgICBjb25zdCBtYXRjaCA9IHNpemVSZWdleHAuZXhlYyhsaW5lKTtcclxuXHJcbiAgICAvLyBUT0RPLiBTdXBwb3J0ICtZIGFuZCAtWCBpZiBuZWVkZWQuXHJcbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgIHRocm93IFwiSERSIEJhZCBoZWFkZXIgZm9ybWF0LCBubyBzaXplXCI7XHJcbiAgICB9XHJcbiAgICB3aWR0aCA9IHBhcnNlSW50KG1hdGNoWzJdKTtcclxuICAgIGhlaWdodCA9IHBhcnNlSW50KG1hdGNoWzFdKTtcclxuXHJcbiAgICBpZiAod2lkdGggPCA4IHx8IHdpZHRoID4gMHg3ZmZmKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICB0aHJvdyBcIkhEUiBCYWQgaGVhZGVyIGZvcm1hdCwgdW5zdXBwb3J0ZWQgc2l6ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmVJbmRleCArPSBsaW5lLmxlbmd0aCArIDE7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgZGF0YVBvc2l0aW9uOiBsaW5lSW5kZXgsXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgY3ViZW1hcCBpbmZvcm1hdGlvbiAoZWFjaCBmYWNlcyB0ZXh0dXJlIGRhdGEpIGV4dHJhY3RlZCBmcm9tIGFuIFJHQkUgdGV4dHVyZS5cclxuICogVGhpcyBSR0JFIHRleHR1cmUgbmVlZHMgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGFzIGEgcGFub3JhbWEuXHJcbiAqXHJcbiAqIE1vcmUgaW5mb3JtYXRpb24gb24gdGhpcyBmb3JtYXQgYXJlIGF2YWlsYWJsZSBoZXJlOlxyXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SR0JFX2ltYWdlX2Zvcm1hdFxyXG4gKlxyXG4gKiBAcGFyYW0gYnVmZmVyIFRoZSBiaW5hcnkgZmlsZSBzdG9yZWQgaW4gYW4gYXJyYXkgYnVmZmVyLlxyXG4gKiBAcGFyYW0gc2l6ZSBUaGUgZXhwZWN0ZWQgc2l6ZSBvZiB0aGUgZXh0cmFjdGVkIGN1YmVtYXAuXHJcbiAqIEBwYXJhbSBzdXBlcnNhbXBsZSBlbmFibGUgc3VwZXJzYW1wbGluZyB0aGUgY3ViZW1hcCAoZGVmYXVsdDogZmFsc2UpXHJcbiAqIEByZXR1cm5zIFRoZSBDdWJlIE1hcCBpbmZvcm1hdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDdWJlTWFwVGV4dHVyZURhdGEoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyLCBzdXBlcnNhbXBsZSA9IGZhbHNlKTogQ3ViZU1hcEluZm8ge1xyXG4gICAgY29uc3QgdWludDhhcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbiAgICBjb25zdCBoZHJJbmZvID0gUkdCRV9SZWFkSGVhZGVyKHVpbnQ4YXJyYXkpO1xyXG4gICAgY29uc3QgZGF0YSA9IFJHQkVfUmVhZFBpeGVscyh1aW50OGFycmF5LCBoZHJJbmZvKTtcclxuXHJcbiAgICBjb25zdCBjdWJlTWFwRGF0YSA9IFBhbm9yYW1hVG9DdWJlTWFwVG9vbHMuQ29udmVydFBhbm9yYW1hVG9DdWJlbWFwKGRhdGEsIGhkckluZm8ud2lkdGgsIGhkckluZm8uaGVpZ2h0LCBzaXplLCBzdXBlcnNhbXBsZSk7XHJcblxyXG4gICAgcmV0dXJuIGN1YmVNYXBEYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgcGl4ZWxzIGRhdGEgZXh0cmFjdGVkIGZyb20gYW4gUkdCRSB0ZXh0dXJlLlxyXG4gKiBUaGlzIHBpeGVscyB3aWxsIGJlIHN0b3JlZCBsZWZ0IHRvIHJpZ2h0IHVwIHRvIGRvd24gaW4gdGhlIFIgRyBCIG9yZGVyIGluIG9uZSBhcnJheS5cclxuICpcclxuICogTW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIGZvcm1hdCBhcmUgYXZhaWxhYmxlIGhlcmU6XHJcbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JHQkVfaW1hZ2VfZm9ybWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB1aW50OGFycmF5IFRoZSBiaW5hcnkgZmlsZSBzdG9yZWQgaW4gYW4gYXJyYXkgYnVmZmVyLlxyXG4gKiBAcGFyYW0gaGRySW5mbyBUaGUgaGVhZGVyIGluZm9ybWF0aW9uIG9mIHRoZSBmaWxlLlxyXG4gKiBAcmV0dXJucyBUaGUgcGl4ZWxzIGRhdGEgaW4gUkdCIHJpZ2h0IHRvIGxlZnQgdXAgdG8gZG93biBvcmRlci5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIFJHQkVfUmVhZFBpeGVscyh1aW50OGFycmF5OiBVaW50OEFycmF5LCBoZHJJbmZvOiBIRFJJbmZvKTogRmxvYXQzMkFycmF5IHtcclxuICAgIHJldHVybiBSZWFkUkdCRVBpeGVsc1JMRSh1aW50OGFycmF5LCBoZHJJbmZvKTtcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5mdW5jdGlvbiBSZWFkUkdCRVBpeGVsc1JMRSh1aW50OGFycmF5OiBVaW50OEFycmF5LCBoZHJJbmZvOiBIRFJJbmZvKTogRmxvYXQzMkFycmF5IHtcclxuICAgIGxldCBudW1TY2FubGluZXMgPSBoZHJJbmZvLmhlaWdodDtcclxuICAgIGNvbnN0IHNjYW5saW5lV2lkdGggPSBoZHJJbmZvLndpZHRoO1xyXG5cclxuICAgIGxldCBhOiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIsIGNvdW50OiBudW1iZXI7XHJcbiAgICBsZXQgZGF0YUluZGV4ID0gaGRySW5mby5kYXRhUG9zaXRpb247XHJcbiAgICBsZXQgaW5kZXggPSAwLFxyXG4gICAgICAgIGVuZEluZGV4ID0gMCxcclxuICAgICAgICBpID0gMDtcclxuXHJcbiAgICBjb25zdCBzY2FuTGluZUFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHNjYW5saW5lV2lkdGggKiA0KTsgLy8gZm91ciBjaGFubmVsIFIgRyBCIEVcclxuICAgIGNvbnN0IHNjYW5MaW5lQXJyYXkgPSBuZXcgVWludDhBcnJheShzY2FuTGluZUFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAvLyAzIGNoYW5uZWxzIG9mIDQgYnl0ZXMgcGVyIHBpeGVsIGluIGZsb2F0LlxyXG4gICAgY29uc3QgcmVzdWx0QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGhkckluZm8ud2lkdGggKiBoZHJJbmZvLmhlaWdodCAqIDQgKiAzKTtcclxuICAgIGNvbnN0IHJlc3VsdEFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShyZXN1bHRCdWZmZXIpO1xyXG5cclxuICAgIC8vIHJlYWQgaW4gZWFjaCBzdWNjZXNzaXZlIHNjYW5saW5lXHJcbiAgICB3aGlsZSAobnVtU2NhbmxpbmVzID4gMCkge1xyXG4gICAgICAgIGEgPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuICAgICAgICBiID0gdWludDhhcnJheVtkYXRhSW5kZXgrK107XHJcbiAgICAgICAgYyA9IHVpbnQ4YXJyYXlbZGF0YUluZGV4KytdO1xyXG4gICAgICAgIGQgPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuXHJcbiAgICAgICAgaWYgKGEgIT0gMiB8fCBiICE9IDIgfHwgYyAmIDB4ODAgfHwgaGRySW5mby53aWR0aCA8IDggfHwgaGRySW5mby53aWR0aCA+IDMyNzY3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWFkUkdCRVBpeGVsc05vdFJMRSh1aW50OGFycmF5LCBoZHJJbmZvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoKGMgPDwgOCkgfCBkKSAhPSBzY2FubGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgIHRocm93IFwiSERSIEJhZCBoZWFkZXIgZm9ybWF0LCB3cm9uZyBzY2FuIGxpbmUgd2lkdGhcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gcmVhZCBlYWNoIG9mIHRoZSBmb3VyIGNoYW5uZWxzIGZvciB0aGUgc2NhbmxpbmUgaW50byB0aGUgYnVmZmVyXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBlbmRJbmRleCA9IChpICsgMSkgKiBzY2FubGluZVdpZHRoO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgZW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGEgPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgIGIgPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYSA+IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgcnVuIG9mIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBhIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwIHx8IGNvdW50ID4gZW5kSW5kZXggLSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkhEUiBCYWQgRm9ybWF0LCBiYWQgc2NhbmxpbmUgZGF0YSAocnVuKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYW5MaW5lQXJyYXlbaW5kZXgrK10gPSBiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBub24tcnVuXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwIHx8IGNvdW50ID4gZW5kSW5kZXggLSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkhEUiBCYWQgRm9ybWF0LCBiYWQgc2NhbmxpbmUgZGF0YSAobm9uLXJ1bilcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjYW5MaW5lQXJyYXlbaW5kZXgrK10gPSBiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgtLWNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYW5MaW5lQXJyYXlbaW5kZXgrK10gPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm93IGNvbnZlcnQgZGF0YSBmcm9tIGJ1ZmZlciBpbnRvIGZsb2F0c1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2FubGluZVdpZHRoOyBpKyspIHtcclxuICAgICAgICAgICAgYSA9IHNjYW5MaW5lQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGIgPSBzY2FuTGluZUFycmF5W2kgKyBzY2FubGluZVdpZHRoXTtcclxuICAgICAgICAgICAgYyA9IHNjYW5MaW5lQXJyYXlbaSArIDIgKiBzY2FubGluZVdpZHRoXTtcclxuICAgICAgICAgICAgZCA9IHNjYW5MaW5lQXJyYXlbaSArIDMgKiBzY2FubGluZVdpZHRoXTtcclxuXHJcbiAgICAgICAgICAgIFJnYmUyZmxvYXQocmVzdWx0QXJyYXksIGEsIGIsIGMsIGQsIChoZHJJbmZvLmhlaWdodCAtIG51bVNjYW5saW5lcykgKiBzY2FubGluZVdpZHRoICogMyArIGkgKiAzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG51bVNjYW5saW5lcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5mdW5jdGlvbiBSZWFkUkdCRVBpeGVsc05vdFJMRSh1aW50OGFycmF5OiBVaW50OEFycmF5LCBoZHJJbmZvOiBIRFJJbmZvKTogRmxvYXQzMkFycmF5IHtcclxuICAgIC8vIHRoaXMgZmlsZSBpcyBub3QgcnVuIGxlbmd0aCBlbmNvZGVkXHJcbiAgICAvLyByZWFkIHZhbHVlcyBzZXF1ZW50aWFsbHlcclxuXHJcbiAgICBsZXQgbnVtU2NhbmxpbmVzID0gaGRySW5mby5oZWlnaHQ7XHJcbiAgICBjb25zdCBzY2FubGluZVdpZHRoID0gaGRySW5mby53aWR0aDtcclxuXHJcbiAgICBsZXQgYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCBpOiBudW1iZXI7XHJcbiAgICBsZXQgZGF0YUluZGV4ID0gaGRySW5mby5kYXRhUG9zaXRpb247XHJcblxyXG4gICAgLy8gMyBjaGFubmVscyBvZiA0IGJ5dGVzIHBlciBwaXhlbCBpbiBmbG9hdC5cclxuICAgIGNvbnN0IHJlc3VsdEJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihoZHJJbmZvLndpZHRoICogaGRySW5mby5oZWlnaHQgKiA0ICogMyk7XHJcbiAgICBjb25zdCByZXN1bHRBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkocmVzdWx0QnVmZmVyKTtcclxuXHJcbiAgICAvLyByZWFkIGluIGVhY2ggc3VjY2Vzc2l2ZSBzY2FubGluZVxyXG4gICAgd2hpbGUgKG51bVNjYW5saW5lcyA+IDApIHtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaGRySW5mby53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGEgPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuICAgICAgICAgICAgYiA9IHVpbnQ4YXJyYXlbZGF0YUluZGV4KytdO1xyXG4gICAgICAgICAgICBjID0gdWludDhhcnJheVtkYXRhSW5kZXgrK107XHJcbiAgICAgICAgICAgIGQgPSB1aW50OGFycmF5W2RhdGFJbmRleCsrXTtcclxuXHJcbiAgICAgICAgICAgIFJnYmUyZmxvYXQocmVzdWx0QXJyYXksIGEsIGIsIGMsIGQsIChoZHJJbmZvLmhlaWdodCAtIG51bVNjYW5saW5lcykgKiBzY2FubGluZVdpZHRoICogMyArIGkgKiAzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG51bVNjYW5saW5lcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBmdW5jdGlvbnMgc2VwYXJhdGVseVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEhEUlRvb2xzID0ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgUkdCRV9SZWFkSGVhZGVyLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgR2V0Q3ViZU1hcFRleHR1cmVEYXRhLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgUkdCRV9SZWFkUGl4ZWxzLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEN1YmVNYXAgaW5mb3JtYXRpb24gZ3JvdXBpbmcgYWxsIHRoZSBkYXRhIGZvciBlYWNoIGZhY2VzIGFzIHdlbGwgYXMgdGhlIGN1YmVtYXAgc2l6ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3ViZU1hcEluZm8ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGl4ZWwgYXJyYXkgZm9yIHRoZSBmcm9udCBmYWNlLlxyXG4gICAgICogVGhpcyBpcyBzdG9yZWQgaW4gZm9ybWF0LCBsZWZ0IHRvIHJpZ2h0LCB1cCB0byBkb3duIGZvcm1hdC5cclxuICAgICAqL1xyXG4gICAgZnJvbnQ6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGl4ZWwgYXJyYXkgZm9yIHRoZSBiYWNrIGZhY2UuXHJcbiAgICAgKiBUaGlzIGlzIHN0b3JlZCBpbiBmb3JtYXQsIGxlZnQgdG8gcmlnaHQsIHVwIHRvIGRvd24gZm9ybWF0LlxyXG4gICAgICovXHJcbiAgICBiYWNrOiBOdWxsYWJsZTxBcnJheUJ1ZmZlclZpZXc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBpeGVsIGFycmF5IGZvciB0aGUgbGVmdCBmYWNlLlxyXG4gICAgICogVGhpcyBpcyBzdG9yZWQgaW4gZm9ybWF0LCBsZWZ0IHRvIHJpZ2h0LCB1cCB0byBkb3duIGZvcm1hdC5cclxuICAgICAqL1xyXG4gICAgbGVmdDogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwaXhlbCBhcnJheSBmb3IgdGhlIHJpZ2h0IGZhY2UuXHJcbiAgICAgKiBUaGlzIGlzIHN0b3JlZCBpbiBmb3JtYXQsIGxlZnQgdG8gcmlnaHQsIHVwIHRvIGRvd24gZm9ybWF0LlxyXG4gICAgICovXHJcbiAgICByaWdodDogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwaXhlbCBhcnJheSBmb3IgdGhlIHVwIGZhY2UuXHJcbiAgICAgKiBUaGlzIGlzIHN0b3JlZCBpbiBmb3JtYXQsIGxlZnQgdG8gcmlnaHQsIHVwIHRvIGRvd24gZm9ybWF0LlxyXG4gICAgICovXHJcbiAgICB1cDogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwaXhlbCBhcnJheSBmb3IgdGhlIGRvd24gZmFjZS5cclxuICAgICAqIFRoaXMgaXMgc3RvcmVkIGluIGZvcm1hdCwgbGVmdCB0byByaWdodCwgdXAgdG8gZG93biBmb3JtYXQuXHJcbiAgICAgKi9cclxuICAgIGRvd246IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgY3ViZW1hcCBzdG9yZWQuXHJcbiAgICAgKlxyXG4gICAgICogRWFjaCBmYWNlcyB3aWxsIGJlIHNpemUgKiBzaXplIHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgc2l6ZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZvcm1hdCBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBSR0JBLCBSR0IuXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIHRleHR1cmUgZGF0YS5cclxuICAgICAqXHJcbiAgICAgKiBVTlNJR05FRF9JTlQsIEZMT0FULlxyXG4gICAgICovXHJcbiAgICB0eXBlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgdGV4dHVyZSBpcyBpbiBnYW1tYSBzcGFjZS5cclxuICAgICAqL1xyXG4gICAgZ2FtbWFTcGFjZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB1c2VmdWwgdG8gY29udmVydCBwYW5vcmFtYSBwaWN0dXJlIHRvIHRoZWlyIGN1YmVtYXAgcmVwcmVzZW50YXRpb24gaW4gNiBmYWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYW5vcmFtYVRvQ3ViZU1hcFRvb2xzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIEZBQ0VfTEVGVCA9IFtuZXcgVmVjdG9yMygtMS4wLCAtMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoMS4wLCAtMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoLTEuMCwgMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoMS4wLCAxLjAsIC0xLjApXTtcclxuICAgIHByaXZhdGUgc3RhdGljIEZBQ0VfUklHSFQgPSBbbmV3IFZlY3RvcjMoMS4wLCAtMS4wLCAxLjApLCBuZXcgVmVjdG9yMygtMS4wLCAtMS4wLCAxLjApLCBuZXcgVmVjdG9yMygxLjAsIDEuMCwgMS4wKSwgbmV3IFZlY3RvcjMoLTEuMCwgMS4wLCAxLjApXTtcclxuICAgIHByaXZhdGUgc3RhdGljIEZBQ0VfRlJPTlQgPSBbbmV3IFZlY3RvcjMoMS4wLCAtMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoMS4wLCAtMS4wLCAxLjApLCBuZXcgVmVjdG9yMygxLjAsIDEuMCwgLTEuMCksIG5ldyBWZWN0b3IzKDEuMCwgMS4wLCAxLjApXTtcclxuICAgIHByaXZhdGUgc3RhdGljIEZBQ0VfQkFDSyA9IFtuZXcgVmVjdG9yMygtMS4wLCAtMS4wLCAxLjApLCBuZXcgVmVjdG9yMygtMS4wLCAtMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoLTEuMCwgMS4wLCAxLjApLCBuZXcgVmVjdG9yMygtMS4wLCAxLjAsIC0xLjApXTtcclxuICAgIHByaXZhdGUgc3RhdGljIEZBQ0VfRE9XTiA9IFtuZXcgVmVjdG9yMygxLjAsIDEuMCwgLTEuMCksIG5ldyBWZWN0b3IzKDEuMCwgMS4wLCAxLjApLCBuZXcgVmVjdG9yMygtMS4wLCAxLjAsIC0xLjApLCBuZXcgVmVjdG9yMygtMS4wLCAxLjAsIDEuMCldO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgRkFDRV9VUCA9IFtuZXcgVmVjdG9yMygtMS4wLCAtMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoLTEuMCwgLTEuMCwgMS4wKSwgbmV3IFZlY3RvcjMoMS4wLCAtMS4wLCAtMS4wKSwgbmV3IFZlY3RvcjMoMS4wLCAtMS4wLCAxLjApXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGEgcGFub3JhbWEgc3RvcmVkIGluIFJHQiByaWdodCB0byBsZWZ0IHVwIHRvIGRvd24gZm9ybWF0IGludG8gYSBjdWJlbWFwICg2IGZhY2VzKS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmxvYXQzMkFycmF5IFRoZSBzb3VyY2UgZGF0YS5cclxuICAgICAqIEBwYXJhbSBpbnB1dFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgaW5wdXQgcGFub3JhbWEuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgaW5wdXQgcGFub3JhbWEuXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSBUaGUgd2lsbGluZyBzaXplIG9mIHRoZSBnZW5lcmF0ZWQgY3ViZW1hcCAoZWFjaCBmYWNlcyB3aWxsIGJlIHNpemUgKiBzaXplIHBpeGVscylcclxuICAgICAqIEBwYXJhbSBzdXBlcnNhbXBsZSBlbmFibGUgc3VwZXJzYW1wbGluZyB0aGUgY3ViZW1hcFxyXG4gICAgICogQHBhcmFtIGludmVydFkgZGVmaW5lcyBpZiB0aGUgWSBheGlzIG11c3QgYmUgaW52ZXJ0ZWRcclxuICAgICAqIEByZXR1cm5zIFRoZSBjdWJlbWFwIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb252ZXJ0UGFub3JhbWFUb0N1YmVtYXAoZmxvYXQzMkFycmF5OiBGbG9hdDMyQXJyYXksIGlucHV0V2lkdGg6IG51bWJlciwgaW5wdXRIZWlnaHQ6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBzdXBlcnNhbXBsZSA9IGZhbHNlLCBpbnZlcnRZID0gdHJ1ZSk6IEN1YmVNYXBJbmZvIHtcclxuICAgICAgICBpZiAoIWZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICB0aHJvdyBcIkNvbnZlcnRQYW5vcmFtYVRvQ3ViZW1hcDogaW5wdXQgY2Fubm90IGJlIG51bGxcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJpZGUgPSAwO1xyXG4gICAgICAgIGlmIChmbG9hdDMyQXJyYXkubGVuZ3RoICE9IGlucHV0V2lkdGggKiBpbnB1dEhlaWdodCAqIDMpIHtcclxuICAgICAgICAgICAgaWYgKGZsb2F0MzJBcnJheS5sZW5ndGggIT0gaW5wdXRXaWR0aCAqIGlucHV0SGVpZ2h0ICogNCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICAgICAgICAgIHRocm93IFwiQ29udmVydFBhbm9yYW1hVG9DdWJlbWFwOiBpbnB1dCBzaXplIGlzIHdyb25nXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpZGUgPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyaWRlID0gMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVGcm9udCA9IHRoaXMuQ3JlYXRlQ3ViZW1hcFRleHR1cmUoc2l6ZSwgdGhpcy5GQUNFX0ZST05ULCBmbG9hdDMyQXJyYXksIGlucHV0V2lkdGgsIGlucHV0SGVpZ2h0LCBzdXBlcnNhbXBsZSwgaW52ZXJ0WSwgc3RyaWRlKTtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlQmFjayA9IHRoaXMuQ3JlYXRlQ3ViZW1hcFRleHR1cmUoc2l6ZSwgdGhpcy5GQUNFX0JBQ0ssIGZsb2F0MzJBcnJheSwgaW5wdXRXaWR0aCwgaW5wdXRIZWlnaHQsIHN1cGVyc2FtcGxlLCBpbnZlcnRZLCBzdHJpZGUpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVMZWZ0ID0gdGhpcy5DcmVhdGVDdWJlbWFwVGV4dHVyZShzaXplLCB0aGlzLkZBQ0VfTEVGVCwgZmxvYXQzMkFycmF5LCBpbnB1dFdpZHRoLCBpbnB1dEhlaWdodCwgc3VwZXJzYW1wbGUsIGludmVydFksIHN0cmlkZSk7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZVJpZ2h0ID0gdGhpcy5DcmVhdGVDdWJlbWFwVGV4dHVyZShzaXplLCB0aGlzLkZBQ0VfUklHSFQsIGZsb2F0MzJBcnJheSwgaW5wdXRXaWR0aCwgaW5wdXRIZWlnaHQsIHN1cGVyc2FtcGxlLCBpbnZlcnRZLCBzdHJpZGUpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVVcCA9IHRoaXMuQ3JlYXRlQ3ViZW1hcFRleHR1cmUoc2l6ZSwgdGhpcy5GQUNFX1VQLCBmbG9hdDMyQXJyYXksIGlucHV0V2lkdGgsIGlucHV0SGVpZ2h0LCBzdXBlcnNhbXBsZSwgaW52ZXJ0WSwgc3RyaWRlKTtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlRG93biA9IHRoaXMuQ3JlYXRlQ3ViZW1hcFRleHR1cmUoc2l6ZSwgdGhpcy5GQUNFX0RPV04sIGZsb2F0MzJBcnJheSwgaW5wdXRXaWR0aCwgaW5wdXRIZWlnaHQsIHN1cGVyc2FtcGxlLCBpbnZlcnRZLCBzdHJpZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmcm9udDogdGV4dHVyZUZyb250LFxyXG4gICAgICAgICAgICBiYWNrOiB0ZXh0dXJlQmFjayxcclxuICAgICAgICAgICAgbGVmdDogdGV4dHVyZUxlZnQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0ZXh0dXJlUmlnaHQsXHJcbiAgICAgICAgICAgIHVwOiB0ZXh0dXJlVXAsXHJcbiAgICAgICAgICAgIGRvd246IHRleHR1cmVEb3duLFxyXG4gICAgICAgICAgICBzaXplOiBzaXplLFxyXG4gICAgICAgICAgICB0eXBlOiBDb25zdGFudHMuVEVYVFVSRVRZUEVfRkxPQVQsXHJcbiAgICAgICAgICAgIGZvcm1hdDogQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCLFxyXG4gICAgICAgICAgICBnYW1tYVNwYWNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIENyZWF0ZUN1YmVtYXBUZXh0dXJlKFxyXG4gICAgICAgIHRleFNpemU6IG51bWJlcixcclxuICAgICAgICBmYWNlRGF0YTogVmVjdG9yM1tdLFxyXG4gICAgICAgIGZsb2F0MzJBcnJheTogRmxvYXQzMkFycmF5LFxyXG4gICAgICAgIGlucHV0V2lkdGg6IG51bWJlcixcclxuICAgICAgICBpbnB1dEhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHN1cGVyc2FtcGxlOiBib29sZWFuLFxyXG4gICAgICAgIGludmVydFk6IGJvb2xlYW4sXHJcbiAgICAgICAgc3RyaWRlOiBudW1iZXJcclxuICAgICk6IEZsb2F0MzJBcnJheSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRleFNpemUgKiB0ZXhTaXplICogNCAqIDMpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgLy8gSWYgc3VwZXJzYW1wbGluZywgZGV0ZXJtaW5lIG51bWJlciBvZiBzYW1wbGVzIG5lZWRlZCB3aGVuIHNvdXJjZSB0ZXh0dXJlIHdpZHRoIGlzIGRpdmlkZWQgZm9yIDQgY3ViZSBmYWNlc1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXMgPSBzdXBlcnNhbXBsZSA/IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW5wdXRXaWR0aCAvIDQgLyB0ZXhTaXplKSkgOiAxO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZUZhY3RvciA9IDEgLyBzYW1wbGVzO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZUZhY3RvclNxciA9IHNhbXBsZUZhY3RvciAqIHNhbXBsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90RFgxID0gZmFjZURhdGFbMV0uc3VidHJhY3QoZmFjZURhdGFbMF0pLnNjYWxlKHNhbXBsZUZhY3RvciAvIHRleFNpemUpO1xyXG4gICAgICAgIGNvbnN0IHJvdERYMiA9IGZhY2VEYXRhWzNdLnN1YnRyYWN0KGZhY2VEYXRhWzJdKS5zY2FsZShzYW1wbGVGYWN0b3IgLyB0ZXhTaXplKTtcclxuXHJcbiAgICAgICAgY29uc3QgZHkgPSAxIC8gdGV4U2l6ZTtcclxuICAgICAgICBsZXQgZnkgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRleFNpemU7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzeSA9IDA7IHN5IDwgc2FtcGxlczsgc3krKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHh2MSA9IGZhY2VEYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHh2MiA9IGZhY2VEYXRhWzJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGV4U2l6ZTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3ggPSAwOyBzeCA8IHNhbXBsZXM7IHN4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHh2Mi5zdWJ0cmFjdCh4djEpLnNjYWxlKGZ5KS5hZGQoeHYxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5DYWxjUHJvamVjdGlvblNwaGVyaWNhbCh2LCBmbG9hdDMyQXJyYXksIGlucHV0V2lkdGgsIGlucHV0SGVpZ2h0LCBzdHJpZGUsIGludmVydFkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMyBjaGFubmVscyBwZXIgcGl4ZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVBcnJheVt5ICogdGV4U2l6ZSAqIDMgKyB4ICogMyArIDBdICs9IGNvbG9yLnIgKiBzYW1wbGVGYWN0b3JTcXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVBcnJheVt5ICogdGV4U2l6ZSAqIDMgKyB4ICogMyArIDFdICs9IGNvbG9yLmcgKiBzYW1wbGVGYWN0b3JTcXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVBcnJheVt5ICogdGV4U2l6ZSAqIDMgKyB4ICogMyArIDJdICs9IGNvbG9yLmIgKiBzYW1wbGVGYWN0b3JTcXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4djEgPSB4djEuYWRkKHJvdERYMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHh2MiA9IHh2Mi5hZGQocm90RFgyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnkgKz0gZHkgKiBzYW1wbGVGYWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgQ2FsY1Byb2plY3Rpb25TcGhlcmljYWwodkRpcjogVmVjdG9yMywgZmxvYXQzMkFycmF5OiBGbG9hdDMyQXJyYXksIGlucHV0V2lkdGg6IG51bWJlciwgaW5wdXRIZWlnaHQ6IG51bWJlciwgc3RyaWRlOiBudW1iZXIsIGludmVydFk6IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgICAgIGxldCB0aGV0YSA9IE1hdGguYXRhbjIodkRpci56LCB2RGlyLngpO1xyXG4gICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcyh2RGlyLnkpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhldGEgPCAtTWF0aC5QSSkge1xyXG4gICAgICAgICAgICB0aGV0YSArPSAyICogTWF0aC5QSTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRoZXRhID4gTWF0aC5QSSkge1xyXG4gICAgICAgICAgICB0aGV0YSAtPSAyICogTWF0aC5QSTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkeCA9IHRoZXRhIC8gTWF0aC5QSTtcclxuICAgICAgICBjb25zdCBkeSA9IHBoaSAvIE1hdGguUEk7XHJcblxyXG4gICAgICAgIC8vIHJlY2VudGVyLlxyXG4gICAgICAgIGR4ID0gZHggKiAwLjUgKyAwLjU7XHJcblxyXG4gICAgICAgIGxldCBweCA9IE1hdGgucm91bmQoZHggKiBpbnB1dFdpZHRoKTtcclxuICAgICAgICBpZiAocHggPCAwKSB7XHJcbiAgICAgICAgICAgIHB4ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHB4ID49IGlucHV0V2lkdGgpIHtcclxuICAgICAgICAgICAgcHggPSBpbnB1dFdpZHRoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBweSA9IE1hdGgucm91bmQoZHkgKiBpbnB1dEhlaWdodCk7XHJcbiAgICAgICAgaWYgKHB5IDwgMCkge1xyXG4gICAgICAgICAgICBweSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChweSA+PSBpbnB1dEhlaWdodCkge1xyXG4gICAgICAgICAgICBweSA9IGlucHV0SGVpZ2h0IC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0WSA9IGludmVydFkgPyBpbnB1dEhlaWdodCAtIHB5IC0gMSA6IHB5O1xyXG4gICAgICAgIGNvbnN0IHIgPSBmbG9hdDMyQXJyYXlbaW5wdXRZICogaW5wdXRXaWR0aCAqIHN0cmlkZSArIHB4ICogc3RyaWRlICsgMF07XHJcbiAgICAgICAgY29uc3QgZyA9IGZsb2F0MzJBcnJheVtpbnB1dFkgKiBpbnB1dFdpZHRoICogc3RyaWRlICsgcHggKiBzdHJpZGUgKyAxXTtcclxuICAgICAgICBjb25zdCBiID0gZmxvYXQzMkFycmF5W2lucHV0WSAqIGlucHV0V2lkdGggKiBzdHJpZGUgKyBweCAqIHN0cmlkZSArIDJdO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiByLFxyXG4gICAgICAgICAgICBnOiBnLFxyXG4gICAgICAgICAgICBiOiBiLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9