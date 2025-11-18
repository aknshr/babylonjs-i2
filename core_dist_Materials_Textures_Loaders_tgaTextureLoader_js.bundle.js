"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Materials_Textures_Loaders_tgaTextureLoader_js"],{

/***/ "../core/dist/Materials/Textures/Loaders/tgaTextureLoader.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/tgaTextureLoader.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _TGATextureLoader: () => (/* binding */ _TGATextureLoader)
/* harmony export */ });
/* harmony import */ var _Misc_tga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/tga */ "../core/dist/Misc/tga.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Implementation of the TGA Texture Loader.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _TGATextureLoader {
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
        throw ".env not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    loadData(data, texture, callback) {
        const bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const header = (0,_Misc_tga__WEBPACK_IMPORTED_MODULE_0__.GetTGAHeader)(bytes);
        callback(header.width, header.height, texture.generateMipMaps, false, () => {
            (0,_Misc_tga__WEBPACK_IMPORTED_MODULE_0__.UploadContent)(texture, bytes);
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

/***/ "../core/dist/Misc/tga.js":
/*!********************************!*\
  !*** ../core/dist/Misc/tga.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetTGAHeader: () => (/* binding */ GetTGAHeader),
/* harmony export */   TGATools: () => (/* binding */ TGATools),
/* harmony export */   UploadContent: () => (/* binding */ UploadContent)
/* harmony export */ });
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


//private static _TYPE_NO_DATA = 0;
const _TYPE_INDEXED = 1;
const _TYPE_RGB = 2;
const _TYPE_GREY = 3;
const _TYPE_RLE_INDEXED = 9;
const _TYPE_RLE_RGB = 10;
const _TYPE_RLE_GREY = 11;
const _ORIGIN_MASK = 0x30;
const _ORIGIN_SHIFT = 0x04;
const _ORIGIN_BL = 0x00;
const _ORIGIN_BR = 0x01;
const _ORIGIN_UL = 0x02;
const _ORIGIN_UR = 0x03;
/**
 * Gets the header of a TGA file
 * @param data defines the TGA data
 * @returns the header
 */
function GetTGAHeader(data) {
    let offset = 0;
    const header = {
        id_length: data[offset++],
        colormap_type: data[offset++],
        image_type: data[offset++],
        colormap_index: data[offset++] | (data[offset++] << 8),
        colormap_length: data[offset++] | (data[offset++] << 8),
        colormap_size: data[offset++],
        origin: [data[offset++] | (data[offset++] << 8), data[offset++] | (data[offset++] << 8)],
        width: data[offset++] | (data[offset++] << 8),
        height: data[offset++] | (data[offset++] << 8),
        pixel_size: data[offset++],
        flags: data[offset++],
    };
    return header;
}
/**
 * Uploads TGA content to a Babylon Texture
 * @internal
 */
function UploadContent(texture, data) {
    // Not enough data to contain header ?
    if (data.length < 19) {
        _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Unable to load TGA file - Not enough data to contain header");
        return;
    }
    // Read Header
    let offset = 18;
    const header = GetTGAHeader(data);
    // Assume it's a valid Targa file.
    if (header.id_length + offset > data.length) {
        _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Unable to load TGA file - Not enough data");
        return;
    }
    // Skip not needed data
    offset += header.id_length;
    let use_rle = false;
    let use_pal = false;
    let use_grey = false;
    // Get some informations.
    switch (header.image_type) {
        case _TYPE_RLE_INDEXED:
            use_rle = true;
        // eslint-disable-next-line no-fallthrough
        case _TYPE_INDEXED:
            use_pal = true;
            break;
        case _TYPE_RLE_RGB:
            use_rle = true;
        // eslint-disable-next-line no-fallthrough
        case _TYPE_RGB:
            // use_rgb = true;
            break;
        case _TYPE_RLE_GREY:
            use_rle = true;
        // eslint-disable-next-line no-fallthrough
        case _TYPE_GREY:
            use_grey = true;
            break;
    }
    let pixel_data;
    // var numAlphaBits = header.flags & 0xf;
    const pixel_size = header.pixel_size >> 3;
    const pixel_total = header.width * header.height * pixel_size;
    // Read palettes
    let palettes;
    if (use_pal) {
        palettes = data.subarray(offset, (offset += header.colormap_length * (header.colormap_size >> 3)));
    }
    // Read LRE
    if (use_rle) {
        pixel_data = new Uint8Array(pixel_total);
        let c, count, i;
        let localOffset = 0;
        const pixels = new Uint8Array(pixel_size);
        while (offset < pixel_total && localOffset < pixel_total) {
            c = data[offset++];
            count = (c & 0x7f) + 1;
            // RLE pixels
            if (c & 0x80) {
                // Bind pixel tmp array
                for (i = 0; i < pixel_size; ++i) {
                    pixels[i] = data[offset++];
                }
                // Copy pixel array
                for (i = 0; i < count; ++i) {
                    pixel_data.set(pixels, localOffset + i * pixel_size);
                }
                localOffset += pixel_size * count;
            }
            // Raw pixels
            else {
                count *= pixel_size;
                for (i = 0; i < count; ++i) {
                    pixel_data[localOffset + i] = data[offset++];
                }
                localOffset += count;
            }
        }
    }
    // RAW Pixels
    else {
        pixel_data = data.subarray(offset, (offset += use_pal ? header.width * header.height : pixel_total));
    }
    // Load to texture
    let x_start, y_start, x_step, y_step, y_end, x_end;
    switch ((header.flags & _ORIGIN_MASK) >> _ORIGIN_SHIFT) {
        default:
        case _ORIGIN_UL:
            x_start = 0;
            x_step = 1;
            x_end = header.width;
            y_start = 0;
            y_step = 1;
            y_end = header.height;
            break;
        case _ORIGIN_BL:
            x_start = 0;
            x_step = 1;
            x_end = header.width;
            y_start = header.height - 1;
            y_step = -1;
            y_end = -1;
            break;
        case _ORIGIN_UR:
            x_start = header.width - 1;
            x_step = -1;
            x_end = -1;
            y_start = 0;
            y_step = 1;
            y_end = header.height;
            break;
        case _ORIGIN_BR:
            x_start = header.width - 1;
            x_step = -1;
            x_end = -1;
            y_start = header.height - 1;
            y_step = -1;
            y_end = -1;
            break;
    }
    // Load the specify method
    const func = "_getImageData" + (use_grey ? "Grey" : "") + header.pixel_size + "bits";
    const imageData = TGATools[func](header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end);
    const engine = texture.getEngine();
    engine._uploadDataToTextureDirectly(texture, imageData);
}
/**
 * @internal
 */
function GetImageData8bits(header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
    const image = pixel_data, colormap = palettes;
    const width = header.width, height = header.height;
    let color, i = 0, x, y;
    const imageData = new Uint8Array(width * height * 4);
    for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i++) {
            color = image[i];
            imageData[(x + width * y) * 4 + 3] = 255;
            imageData[(x + width * y) * 4 + 2] = colormap[color * 3 + 0];
            imageData[(x + width * y) * 4 + 1] = colormap[color * 3 + 1];
            imageData[(x + width * y) * 4 + 0] = colormap[color * 3 + 2];
        }
    }
    return imageData;
}
/**
 * @internal
 */
function GetImageData16bits(header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
    const image = pixel_data;
    const width = header.width, height = header.height;
    let color, i = 0, x, y;
    const imageData = new Uint8Array(width * height * 4);
    for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 2) {
            color = image[i + 0] + (image[i + 1] << 8); // Inversed ?
            const r = ((((color & 0x7c00) >> 10) * 255) / 0x1f) | 0;
            const g = ((((color & 0x03e0) >> 5) * 255) / 0x1f) | 0;
            const b = (((color & 0x001f) * 255) / 0x1f) | 0;
            imageData[(x + width * y) * 4 + 0] = r;
            imageData[(x + width * y) * 4 + 1] = g;
            imageData[(x + width * y) * 4 + 2] = b;
            imageData[(x + width * y) * 4 + 3] = color & 0x8000 ? 0 : 255;
        }
    }
    return imageData;
}
/**
 * @internal
 */
function GetImageData24bits(header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
    const image = pixel_data;
    const width = header.width, height = header.height;
    let i = 0, x, y;
    const imageData = new Uint8Array(width * height * 4);
    for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 3) {
            imageData[(x + width * y) * 4 + 3] = 255;
            imageData[(x + width * y) * 4 + 2] = image[i + 0];
            imageData[(x + width * y) * 4 + 1] = image[i + 1];
            imageData[(x + width * y) * 4 + 0] = image[i + 2];
        }
    }
    return imageData;
}
/**
 * @internal
 */
function GetImageData32bits(header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
    const image = pixel_data;
    const width = header.width, height = header.height;
    let i = 0, x, y;
    const imageData = new Uint8Array(width * height * 4);
    for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 4) {
            imageData[(x + width * y) * 4 + 2] = image[i + 0];
            imageData[(x + width * y) * 4 + 1] = image[i + 1];
            imageData[(x + width * y) * 4 + 0] = image[i + 2];
            imageData[(x + width * y) * 4 + 3] = image[i + 3];
        }
    }
    return imageData;
}
/**
 * @internal
 */
function GetImageDataGrey8bits(header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
    const image = pixel_data;
    const width = header.width, height = header.height;
    let color, i = 0, x, y;
    const imageData = new Uint8Array(width * height * 4);
    for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i++) {
            color = image[i];
            imageData[(x + width * y) * 4 + 0] = color;
            imageData[(x + width * y) * 4 + 1] = color;
            imageData[(x + width * y) * 4 + 2] = color;
            imageData[(x + width * y) * 4 + 3] = 255;
        }
    }
    return imageData;
}
/**
 * @internal
 */
function GetImageDataGrey16bits(header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
    const image = pixel_data;
    const width = header.width, height = header.height;
    let i = 0, x, y;
    const imageData = new Uint8Array(width * height * 4);
    for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 2) {
            imageData[(x + width * y) * 4 + 0] = image[i + 0];
            imageData[(x + width * y) * 4 + 1] = image[i + 0];
            imageData[(x + width * y) * 4 + 2] = image[i + 0];
            imageData[(x + width * y) * 4 + 3] = image[i + 1];
        }
    }
    return imageData;
}
/**
 * Based on jsTGALoader - Javascript loader for TGA file
 * By Vincent Thibault
 * @see http://blog.robrowser.com/javascript-tga-loader.html
 */
const TGATools = {
    /**
     * Gets the header of a TGA file
     * @param data defines the TGA data
     * @returns the header
     */
    GetTGAHeader,
    /**
     * Uploads TGA content to a Babylon Texture
     * @internal
     */
    UploadContent,
    /** @internal */
    _getImageData8bits: GetImageData8bits,
    /** @internal */
    _getImageData16bits: GetImageData16bits,
    /** @internal */
    _getImageData24bits: GetImageData24bits,
    /** @internal */
    _getImageData32bits: GetImageData32bits,
    /** @internal */
    _getImageDataGrey8bits: GetImageDataGrey8bits,
    /** @internal */
    _getImageDataGrey16bits: GetImageDataGrey16bits,
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01hdGVyaWFsc19UZXh0dXJlc19Mb2FkZXJzX3RnYVRleHR1cmVMb2FkZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBNEJBO0FBMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBV0E7QUFFQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvVGV4dHVyZXMvTG9hZGVycy90Z2FUZXh0dXJlTG9hZGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWlzYy90Z2EudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0VEdBSGVhZGVyLCBVcGxvYWRDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvdGdhXCI7XHJcbmltcG9ydCB0eXBlIHsgSW50ZXJuYWxUZXh0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL01hdGVyaWFscy9UZXh0dXJlcy9pbnRlcm5hbFRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJSW50ZXJuYWxUZXh0dXJlTG9hZGVyIH0gZnJvbSBcIi4vaW50ZXJuYWxUZXh0dXJlTG9hZGVyXCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFRHQSBUZXh0dXJlIExvYWRlci5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjbGFzcyBfVEdBVGV4dHVyZUxvYWRlciBpbXBsZW1lbnRzIElJbnRlcm5hbFRleHR1cmVMb2FkZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhlIGxvYWRlciBzdXBwb3J0cyBjYXNjYWRlIGxvYWRpbmcgdGhlIGRpZmZlcmVudCBmYWNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHN1cHBvcnRDYXNjYWRlcyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyB0aGUgY3ViZSB0ZXh0dXJlIGRhdGEgdG8gdGhlIFdlYkdMIHRleHR1cmUuIEl0IGhhcyBhbHJlYWR5IGJlZW4gYm91bmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQ3ViZURhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICB0aHJvdyBcIi5lbnYgbm90IHN1cHBvcnRlZCBpbiBDdWJlLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyB0aGUgMkQgdGV4dHVyZSBkYXRhIHRvIHRoZSBXZWJHTCB0ZXh0dXJlLiBJdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kIG9uY2UgaW4gdGhlIGNhbGxiYWNrLlxyXG4gICAgICogQHBhcmFtIGRhdGEgY29udGFpbnMgdGhlIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgZGVmaW5lcyB0aGUgQmFieWxvbkpTIGludGVybmFsIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBkZWZpbmVzIHRoZSBtZXRob2QgdG8gY2FsbCBvbmNlIHJlYWR5IHRvIHVwbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGEoXHJcbiAgICAgICAgZGF0YTogQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHRleHR1cmU6IEludGVybmFsVGV4dHVyZSxcclxuICAgICAgICBjYWxsYmFjazogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBsb2FkTWlwbWFwOiBib29sZWFuLCBpc0NvbXByZXNzZWQ6IGJvb2xlYW4sIGRvbmU6ICgpID0+IHZvaWQpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gR2V0VEdBSGVhZGVyKGJ5dGVzKTtcclxuICAgICAgICBjYWxsYmFjayhoZWFkZXIud2lkdGgsIGhlYWRlci5oZWlnaHQsIHRleHR1cmUuZ2VuZXJhdGVNaXBNYXBzLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBVcGxvYWRDb250ZW50KHRleHR1cmUsIGJ5dGVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBJbnRlcm5hbFRleHR1cmUgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2ludGVybmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTWlzYy9sb2dnZXJcIjtcclxuXHJcbi8vcHJpdmF0ZSBzdGF0aWMgX1RZUEVfTk9fREFUQSA9IDA7XHJcbmNvbnN0IF9UWVBFX0lOREVYRUQgPSAxO1xyXG5jb25zdCBfVFlQRV9SR0IgPSAyO1xyXG5jb25zdCBfVFlQRV9HUkVZID0gMztcclxuY29uc3QgX1RZUEVfUkxFX0lOREVYRUQgPSA5O1xyXG5jb25zdCBfVFlQRV9STEVfUkdCID0gMTA7XHJcbmNvbnN0IF9UWVBFX1JMRV9HUkVZID0gMTE7XHJcbmNvbnN0IF9PUklHSU5fTUFTSyA9IDB4MzA7XHJcbmNvbnN0IF9PUklHSU5fU0hJRlQgPSAweDA0O1xyXG5jb25zdCBfT1JJR0lOX0JMID0gMHgwMDtcclxuY29uc3QgX09SSUdJTl9CUiA9IDB4MDE7XHJcbmNvbnN0IF9PUklHSU5fVUwgPSAweDAyO1xyXG5jb25zdCBfT1JJR0lOX1VSID0gMHgwMztcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBoZWFkZXIgb2YgYSBUR0EgZmlsZVxyXG4gKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBUR0EgZGF0YVxyXG4gKiBAcmV0dXJucyB0aGUgaGVhZGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR2V0VEdBSGVhZGVyKGRhdGE6IFVpbnQ4QXJyYXkpOiBhbnkge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgICAgIGlkX2xlbmd0aDogZGF0YVtvZmZzZXQrK10sXHJcbiAgICAgICAgY29sb3JtYXBfdHlwZTogZGF0YVtvZmZzZXQrK10sXHJcbiAgICAgICAgaW1hZ2VfdHlwZTogZGF0YVtvZmZzZXQrK10sXHJcbiAgICAgICAgY29sb3JtYXBfaW5kZXg6IGRhdGFbb2Zmc2V0KytdIHwgKGRhdGFbb2Zmc2V0KytdIDw8IDgpLFxyXG4gICAgICAgIGNvbG9ybWFwX2xlbmd0aDogZGF0YVtvZmZzZXQrK10gfCAoZGF0YVtvZmZzZXQrK10gPDwgOCksXHJcbiAgICAgICAgY29sb3JtYXBfc2l6ZTogZGF0YVtvZmZzZXQrK10sXHJcbiAgICAgICAgb3JpZ2luOiBbZGF0YVtvZmZzZXQrK10gfCAoZGF0YVtvZmZzZXQrK10gPDwgOCksIGRhdGFbb2Zmc2V0KytdIHwgKGRhdGFbb2Zmc2V0KytdIDw8IDgpXSxcclxuICAgICAgICB3aWR0aDogZGF0YVtvZmZzZXQrK10gfCAoZGF0YVtvZmZzZXQrK10gPDwgOCksXHJcbiAgICAgICAgaGVpZ2h0OiBkYXRhW29mZnNldCsrXSB8IChkYXRhW29mZnNldCsrXSA8PCA4KSxcclxuICAgICAgICBwaXhlbF9zaXplOiBkYXRhW29mZnNldCsrXSxcclxuICAgICAgICBmbGFnczogZGF0YVtvZmZzZXQrK10sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGxvYWRzIFRHQSBjb250ZW50IHRvIGEgQmFieWxvbiBUZXh0dXJlXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFVwbG9hZENvbnRlbnQodGV4dHVyZTogSW50ZXJuYWxUZXh0dXJlLCBkYXRhOiBVaW50OEFycmF5KTogdm9pZCB7XHJcbiAgICAvLyBOb3QgZW5vdWdoIGRhdGEgdG8gY29udGFpbiBoZWFkZXIgP1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoIDwgMTkpIHtcclxuICAgICAgICBMb2dnZXIuRXJyb3IoXCJVbmFibGUgdG8gbG9hZCBUR0EgZmlsZSAtIE5vdCBlbm91Z2ggZGF0YSB0byBjb250YWluIGhlYWRlclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVhZCBIZWFkZXJcclxuICAgIGxldCBvZmZzZXQgPSAxODtcclxuICAgIGNvbnN0IGhlYWRlciA9IEdldFRHQUhlYWRlcihkYXRhKTtcclxuXHJcbiAgICAvLyBBc3N1bWUgaXQncyBhIHZhbGlkIFRhcmdhIGZpbGUuXHJcbiAgICBpZiAoaGVhZGVyLmlkX2xlbmd0aCArIG9mZnNldCA+IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgTG9nZ2VyLkVycm9yKFwiVW5hYmxlIHRvIGxvYWQgVEdBIGZpbGUgLSBOb3QgZW5vdWdoIGRhdGFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNraXAgbm90IG5lZWRlZCBkYXRhXHJcbiAgICBvZmZzZXQgKz0gaGVhZGVyLmlkX2xlbmd0aDtcclxuXHJcbiAgICBsZXQgdXNlX3JsZSA9IGZhbHNlO1xyXG4gICAgbGV0IHVzZV9wYWwgPSBmYWxzZTtcclxuICAgIGxldCB1c2VfZ3JleSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEdldCBzb21lIGluZm9ybWF0aW9ucy5cclxuICAgIHN3aXRjaCAoaGVhZGVyLmltYWdlX3R5cGUpIHtcclxuICAgICAgICBjYXNlIF9UWVBFX1JMRV9JTkRFWEVEOlxyXG4gICAgICAgICAgICB1c2VfcmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcclxuICAgICAgICBjYXNlIF9UWVBFX0lOREVYRUQ6XHJcbiAgICAgICAgICAgIHVzZV9wYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBfVFlQRV9STEVfUkdCOlxyXG4gICAgICAgICAgICB1c2VfcmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcclxuICAgICAgICBjYXNlIF9UWVBFX1JHQjpcclxuICAgICAgICAgICAgLy8gdXNlX3JnYiA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIF9UWVBFX1JMRV9HUkVZOlxyXG4gICAgICAgICAgICB1c2VfcmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcclxuICAgICAgICBjYXNlIF9UWVBFX0dSRVk6XHJcbiAgICAgICAgICAgIHVzZV9ncmV5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBpeGVsX2RhdGE7XHJcblxyXG4gICAgLy8gdmFyIG51bUFscGhhQml0cyA9IGhlYWRlci5mbGFncyAmIDB4ZjtcclxuICAgIGNvbnN0IHBpeGVsX3NpemUgPSBoZWFkZXIucGl4ZWxfc2l6ZSA+PiAzO1xyXG4gICAgY29uc3QgcGl4ZWxfdG90YWwgPSBoZWFkZXIud2lkdGggKiBoZWFkZXIuaGVpZ2h0ICogcGl4ZWxfc2l6ZTtcclxuXHJcbiAgICAvLyBSZWFkIHBhbGV0dGVzXHJcbiAgICBsZXQgcGFsZXR0ZXM7XHJcblxyXG4gICAgaWYgKHVzZV9wYWwpIHtcclxuICAgICAgICBwYWxldHRlcyA9IGRhdGEuc3ViYXJyYXkob2Zmc2V0LCAob2Zmc2V0ICs9IGhlYWRlci5jb2xvcm1hcF9sZW5ndGggKiAoaGVhZGVyLmNvbG9ybWFwX3NpemUgPj4gMykpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWFkIExSRVxyXG4gICAgaWYgKHVzZV9ybGUpIHtcclxuICAgICAgICBwaXhlbF9kYXRhID0gbmV3IFVpbnQ4QXJyYXkocGl4ZWxfdG90YWwpO1xyXG5cclxuICAgICAgICBsZXQgYywgY291bnQsIGk7XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gMDtcclxuICAgICAgICBjb25zdCBwaXhlbHMgPSBuZXcgVWludDhBcnJheShwaXhlbF9zaXplKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHBpeGVsX3RvdGFsICYmIGxvY2FsT2Zmc2V0IDwgcGl4ZWxfdG90YWwpIHtcclxuICAgICAgICAgICAgYyA9IGRhdGFbb2Zmc2V0KytdO1xyXG4gICAgICAgICAgICBjb3VudCA9IChjICYgMHg3ZikgKyAxO1xyXG5cclxuICAgICAgICAgICAgLy8gUkxFIHBpeGVsc1xyXG4gICAgICAgICAgICBpZiAoYyAmIDB4ODApIHtcclxuICAgICAgICAgICAgICAgIC8vIEJpbmQgcGl4ZWwgdG1wIGFycmF5XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGl4ZWxfc2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxzW2ldID0gZGF0YVtvZmZzZXQrK107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29weSBwaXhlbCBhcnJheVxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBwaXhlbF9kYXRhLnNldChwaXhlbHMsIGxvY2FsT2Zmc2V0ICsgaSAqIHBpeGVsX3NpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxvY2FsT2Zmc2V0ICs9IHBpeGVsX3NpemUgKiBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSYXcgcGl4ZWxzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgKj0gcGl4ZWxfc2l6ZTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxfZGF0YVtsb2NhbE9mZnNldCArIGldID0gZGF0YVtvZmZzZXQrK107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbE9mZnNldCArPSBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFJBVyBQaXhlbHNcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBpeGVsX2RhdGEgPSBkYXRhLnN1YmFycmF5KG9mZnNldCwgKG9mZnNldCArPSB1c2VfcGFsID8gaGVhZGVyLndpZHRoICogaGVhZGVyLmhlaWdodCA6IHBpeGVsX3RvdGFsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCB0byB0ZXh0dXJlXHJcbiAgICBsZXQgeF9zdGFydCwgeV9zdGFydCwgeF9zdGVwLCB5X3N0ZXAsIHlfZW5kLCB4X2VuZDtcclxuXHJcbiAgICBzd2l0Y2ggKChoZWFkZXIuZmxhZ3MgJiBfT1JJR0lOX01BU0spID4+IF9PUklHSU5fU0hJRlQpIHtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNhc2UgX09SSUdJTl9VTDpcclxuICAgICAgICAgICAgeF9zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHhfc3RlcCA9IDE7XHJcbiAgICAgICAgICAgIHhfZW5kID0gaGVhZGVyLndpZHRoO1xyXG4gICAgICAgICAgICB5X3N0YXJ0ID0gMDtcclxuICAgICAgICAgICAgeV9zdGVwID0gMTtcclxuICAgICAgICAgICAgeV9lbmQgPSBoZWFkZXIuaGVpZ2h0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBfT1JJR0lOX0JMOlxyXG4gICAgICAgICAgICB4X3N0YXJ0ID0gMDtcclxuICAgICAgICAgICAgeF9zdGVwID0gMTtcclxuICAgICAgICAgICAgeF9lbmQgPSBoZWFkZXIud2lkdGg7XHJcbiAgICAgICAgICAgIHlfc3RhcnQgPSBoZWFkZXIuaGVpZ2h0IC0gMTtcclxuICAgICAgICAgICAgeV9zdGVwID0gLTE7XHJcbiAgICAgICAgICAgIHlfZW5kID0gLTE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIF9PUklHSU5fVVI6XHJcbiAgICAgICAgICAgIHhfc3RhcnQgPSBoZWFkZXIud2lkdGggLSAxO1xyXG4gICAgICAgICAgICB4X3N0ZXAgPSAtMTtcclxuICAgICAgICAgICAgeF9lbmQgPSAtMTtcclxuICAgICAgICAgICAgeV9zdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHlfc3RlcCA9IDE7XHJcbiAgICAgICAgICAgIHlfZW5kID0gaGVhZGVyLmhlaWdodDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgX09SSUdJTl9CUjpcclxuICAgICAgICAgICAgeF9zdGFydCA9IGhlYWRlci53aWR0aCAtIDE7XHJcbiAgICAgICAgICAgIHhfc3RlcCA9IC0xO1xyXG4gICAgICAgICAgICB4X2VuZCA9IC0xO1xyXG4gICAgICAgICAgICB5X3N0YXJ0ID0gaGVhZGVyLmhlaWdodCAtIDE7XHJcbiAgICAgICAgICAgIHlfc3RlcCA9IC0xO1xyXG4gICAgICAgICAgICB5X2VuZCA9IC0xO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIHRoZSBzcGVjaWZ5IG1ldGhvZFxyXG4gICAgY29uc3QgZnVuYyA9IFwiX2dldEltYWdlRGF0YVwiICsgKHVzZV9ncmV5ID8gXCJHcmV5XCIgOiBcIlwiKSArIGhlYWRlci5waXhlbF9zaXplICsgXCJiaXRzXCI7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSAoPGFueT5UR0FUb29scylbZnVuY10oaGVhZGVyLCBwYWxldHRlcywgcGl4ZWxfZGF0YSwgeV9zdGFydCwgeV9zdGVwLCB5X2VuZCwgeF9zdGFydCwgeF9zdGVwLCB4X2VuZCk7XHJcblxyXG4gICAgY29uc3QgZW5naW5lID0gdGV4dHVyZS5nZXRFbmdpbmUoKTtcclxuICAgIGVuZ2luZS5fdXBsb2FkRGF0YVRvVGV4dHVyZURpcmVjdGx5KHRleHR1cmUsIGltYWdlRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIEdldEltYWdlRGF0YThiaXRzKFxyXG4gICAgaGVhZGVyOiBhbnksXHJcbiAgICBwYWxldHRlczogVWludDhBcnJheSxcclxuICAgIHBpeGVsX2RhdGE6IFVpbnQ4QXJyYXksXHJcbiAgICB5X3N0YXJ0OiBudW1iZXIsXHJcbiAgICB5X3N0ZXA6IG51bWJlcixcclxuICAgIHlfZW5kOiBudW1iZXIsXHJcbiAgICB4X3N0YXJ0OiBudW1iZXIsXHJcbiAgICB4X3N0ZXA6IG51bWJlcixcclxuICAgIHhfZW5kOiBudW1iZXJcclxuKTogVWludDhBcnJheSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IHBpeGVsX2RhdGEsXHJcbiAgICAgICAgY29sb3JtYXAgPSBwYWxldHRlcztcclxuICAgIGNvbnN0IHdpZHRoID0gaGVhZGVyLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IGhlYWRlci5oZWlnaHQ7XHJcbiAgICBsZXQgY29sb3IsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5O1xyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcblxyXG4gICAgZm9yICh5ID0geV9zdGFydDsgeSAhPT0geV9lbmQ7IHkgKz0geV9zdGVwKSB7XHJcbiAgICAgICAgZm9yICh4ID0geF9zdGFydDsgeCAhPT0geF9lbmQ7IHggKz0geF9zdGVwLCBpKyspIHtcclxuICAgICAgICAgICAgY29sb3IgPSBpbWFnZVtpXTtcclxuICAgICAgICAgICAgaW1hZ2VEYXRhWyh4ICsgd2lkdGggKiB5KSAqIDQgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgaW1hZ2VEYXRhWyh4ICsgd2lkdGggKiB5KSAqIDQgKyAyXSA9IGNvbG9ybWFwW2NvbG9yICogMyArIDBdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDFdID0gY29sb3JtYXBbY29sb3IgKiAzICsgMV07XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgMF0gPSBjb2xvcm1hcFtjb2xvciAqIDMgKyAyXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gR2V0SW1hZ2VEYXRhMTZiaXRzKFxyXG4gICAgaGVhZGVyOiBhbnksXHJcbiAgICBwYWxldHRlczogVWludDhBcnJheSxcclxuICAgIHBpeGVsX2RhdGE6IFVpbnQ4QXJyYXksXHJcbiAgICB5X3N0YXJ0OiBudW1iZXIsXHJcbiAgICB5X3N0ZXA6IG51bWJlcixcclxuICAgIHlfZW5kOiBudW1iZXIsXHJcbiAgICB4X3N0YXJ0OiBudW1iZXIsXHJcbiAgICB4X3N0ZXA6IG51bWJlcixcclxuICAgIHhfZW5kOiBudW1iZXJcclxuKTogVWludDhBcnJheSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IHBpeGVsX2RhdGE7XHJcbiAgICBjb25zdCB3aWR0aCA9IGhlYWRlci53aWR0aCxcclxuICAgICAgICBoZWlnaHQgPSBoZWFkZXIuaGVpZ2h0O1xyXG4gICAgbGV0IGNvbG9yLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeTtcclxuXHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG5cclxuICAgIGZvciAoeSA9IHlfc3RhcnQ7IHkgIT09IHlfZW5kOyB5ICs9IHlfc3RlcCkge1xyXG4gICAgICAgIGZvciAoeCA9IHhfc3RhcnQ7IHggIT09IHhfZW5kOyB4ICs9IHhfc3RlcCwgaSArPSAyKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gaW1hZ2VbaSArIDBdICsgKGltYWdlW2kgKyAxXSA8PCA4KTsgLy8gSW52ZXJzZWQgP1xyXG4gICAgICAgICAgICBjb25zdCByID0gKCgoKGNvbG9yICYgMHg3YzAwKSA+PiAxMCkgKiAyNTUpIC8gMHgxZikgfCAwO1xyXG4gICAgICAgICAgICBjb25zdCBnID0gKCgoKGNvbG9yICYgMHgwM2UwKSA+PiA1KSAqIDI1NSkgLyAweDFmKSB8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSAoKChjb2xvciAmIDB4MDAxZikgKiAyNTUpIC8gMHgxZikgfCAwO1xyXG5cclxuICAgICAgICAgICAgaW1hZ2VEYXRhWyh4ICsgd2lkdGggKiB5KSAqIDQgKyAwXSA9IHI7XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgMV0gPSBnO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDJdID0gYjtcclxuICAgICAgICAgICAgaW1hZ2VEYXRhWyh4ICsgd2lkdGggKiB5KSAqIDQgKyAzXSA9IGNvbG9yICYgMHg4MDAwID8gMCA6IDI1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gR2V0SW1hZ2VEYXRhMjRiaXRzKFxyXG4gICAgaGVhZGVyOiBhbnksXHJcbiAgICBwYWxldHRlczogVWludDhBcnJheSxcclxuICAgIHBpeGVsX2RhdGE6IFVpbnQ4QXJyYXksXHJcbiAgICB5X3N0YXJ0OiBudW1iZXIsXHJcbiAgICB5X3N0ZXA6IG51bWJlcixcclxuICAgIHlfZW5kOiBudW1iZXIsXHJcbiAgICB4X3N0YXJ0OiBudW1iZXIsXHJcbiAgICB4X3N0ZXA6IG51bWJlcixcclxuICAgIHhfZW5kOiBudW1iZXJcclxuKTogVWludDhBcnJheSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IHBpeGVsX2RhdGE7XHJcbiAgICBjb25zdCB3aWR0aCA9IGhlYWRlci53aWR0aCxcclxuICAgICAgICBoZWlnaHQgPSBoZWFkZXIuaGVpZ2h0O1xyXG4gICAgbGV0IGkgPSAwLFxyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeTtcclxuXHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG5cclxuICAgIGZvciAoeSA9IHlfc3RhcnQ7IHkgIT09IHlfZW5kOyB5ICs9IHlfc3RlcCkge1xyXG4gICAgICAgIGZvciAoeCA9IHhfc3RhcnQ7IHggIT09IHhfZW5kOyB4ICs9IHhfc3RlcCwgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgM10gPSAyNTU7XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgMl0gPSBpbWFnZVtpICsgMF07XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgMV0gPSBpbWFnZVtpICsgMV07XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgMF0gPSBpbWFnZVtpICsgMl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbWFnZURhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIEdldEltYWdlRGF0YTMyYml0cyhcclxuICAgIGhlYWRlcjogYW55LFxyXG4gICAgcGFsZXR0ZXM6IFVpbnQ4QXJyYXksXHJcbiAgICBwaXhlbF9kYXRhOiBVaW50OEFycmF5LFxyXG4gICAgeV9zdGFydDogbnVtYmVyLFxyXG4gICAgeV9zdGVwOiBudW1iZXIsXHJcbiAgICB5X2VuZDogbnVtYmVyLFxyXG4gICAgeF9zdGFydDogbnVtYmVyLFxyXG4gICAgeF9zdGVwOiBudW1iZXIsXHJcbiAgICB4X2VuZDogbnVtYmVyXHJcbik6IFVpbnQ4QXJyYXkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBwaXhlbF9kYXRhO1xyXG4gICAgY29uc3Qgd2lkdGggPSBoZWFkZXIud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0ID0gaGVhZGVyLmhlaWdodDtcclxuICAgIGxldCBpID0gMCxcclxuICAgICAgICB4LFxyXG4gICAgICAgIHk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICBmb3IgKHkgPSB5X3N0YXJ0OyB5ICE9PSB5X2VuZDsgeSArPSB5X3N0ZXApIHtcclxuICAgICAgICBmb3IgKHggPSB4X3N0YXJ0OyB4ICE9PSB4X2VuZDsgeCArPSB4X3N0ZXAsIGkgKz0gNCkge1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDJdID0gaW1hZ2VbaSArIDBdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDFdID0gaW1hZ2VbaSArIDFdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDBdID0gaW1hZ2VbaSArIDJdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDNdID0gaW1hZ2VbaSArIDNdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBHZXRJbWFnZURhdGFHcmV5OGJpdHMoXHJcbiAgICBoZWFkZXI6IGFueSxcclxuICAgIHBhbGV0dGVzOiBVaW50OEFycmF5LFxyXG4gICAgcGl4ZWxfZGF0YTogVWludDhBcnJheSxcclxuICAgIHlfc3RhcnQ6IG51bWJlcixcclxuICAgIHlfc3RlcDogbnVtYmVyLFxyXG4gICAgeV9lbmQ6IG51bWJlcixcclxuICAgIHhfc3RhcnQ6IG51bWJlcixcclxuICAgIHhfc3RlcDogbnVtYmVyLFxyXG4gICAgeF9lbmQ6IG51bWJlclxyXG4pOiBVaW50OEFycmF5IHtcclxuICAgIGNvbnN0IGltYWdlID0gcGl4ZWxfZGF0YTtcclxuICAgIGNvbnN0IHdpZHRoID0gaGVhZGVyLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IGhlYWRlci5oZWlnaHQ7XHJcbiAgICBsZXQgY29sb3IsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgeCxcclxuICAgICAgICB5O1xyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcblxyXG4gICAgZm9yICh5ID0geV9zdGFydDsgeSAhPT0geV9lbmQ7IHkgKz0geV9zdGVwKSB7XHJcbiAgICAgICAgZm9yICh4ID0geF9zdGFydDsgeCAhPT0geF9lbmQ7IHggKz0geF9zdGVwLCBpKyspIHtcclxuICAgICAgICAgICAgY29sb3IgPSBpbWFnZVtpXTtcclxuICAgICAgICAgICAgaW1hZ2VEYXRhWyh4ICsgd2lkdGggKiB5KSAqIDQgKyAwXSA9IGNvbG9yO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDFdID0gY29sb3I7XHJcbiAgICAgICAgICAgIGltYWdlRGF0YVsoeCArIHdpZHRoICogeSkgKiA0ICsgMl0gPSBjb2xvcjtcclxuICAgICAgICAgICAgaW1hZ2VEYXRhWyh4ICsgd2lkdGggKiB5KSAqIDQgKyAzXSA9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gR2V0SW1hZ2VEYXRhR3JleTE2Yml0cyhcclxuICAgIGhlYWRlcjogYW55LFxyXG4gICAgcGFsZXR0ZXM6IFVpbnQ4QXJyYXksXHJcbiAgICBwaXhlbF9kYXRhOiBVaW50OEFycmF5LFxyXG4gICAgeV9zdGFydDogbnVtYmVyLFxyXG4gICAgeV9zdGVwOiBudW1iZXIsXHJcbiAgICB5X2VuZDogbnVtYmVyLFxyXG4gICAgeF9zdGFydDogbnVtYmVyLFxyXG4gICAgeF9zdGVwOiBudW1iZXIsXHJcbiAgICB4X2VuZDogbnVtYmVyXHJcbik6IFVpbnQ4QXJyYXkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBwaXhlbF9kYXRhO1xyXG4gICAgY29uc3Qgd2lkdGggPSBoZWFkZXIud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0ID0gaGVhZGVyLmhlaWdodDtcclxuICAgIGxldCBpID0gMCxcclxuICAgICAgICB4LFxyXG4gICAgICAgIHk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICBmb3IgKHkgPSB5X3N0YXJ0OyB5ICE9PSB5X2VuZDsgeSArPSB5X3N0ZXApIHtcclxuICAgICAgICBmb3IgKHggPSB4X3N0YXJ0OyB4ICE9PSB4X2VuZDsgeCArPSB4X3N0ZXAsIGkgKz0gMikge1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDBdID0gaW1hZ2VbaSArIDBdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDFdID0gaW1hZ2VbaSArIDBdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDJdID0gaW1hZ2VbaSArIDBdO1xyXG4gICAgICAgICAgICBpbWFnZURhdGFbKHggKyB3aWR0aCAqIHkpICogNCArIDNdID0gaW1hZ2VbaSArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZWQgb24ganNUR0FMb2FkZXIgLSBKYXZhc2NyaXB0IGxvYWRlciBmb3IgVEdBIGZpbGVcclxuICogQnkgVmluY2VudCBUaGliYXVsdFxyXG4gKiBAc2VlIGh0dHA6Ly9ibG9nLnJvYnJvd3Nlci5jb20vamF2YXNjcmlwdC10Z2EtbG9hZGVyLmh0bWxcclxuICovXHJcbmV4cG9ydCBjb25zdCBUR0FUb29scyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgaGVhZGVyIG9mIGEgVEdBIGZpbGVcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIFRHQSBkYXRhXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgaGVhZGVyXHJcbiAgICAgKi9cclxuICAgIEdldFRHQUhlYWRlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZHMgVEdBIGNvbnRlbnQgdG8gYSBCYWJ5bG9uIFRleHR1cmVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBVcGxvYWRDb250ZW50LFxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIF9nZXRJbWFnZURhdGE4Yml0czogR2V0SW1hZ2VEYXRhOGJpdHMsXHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgX2dldEltYWdlRGF0YTE2Yml0czogR2V0SW1hZ2VEYXRhMTZiaXRzLFxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgX2dldEltYWdlRGF0YTI0Yml0czogR2V0SW1hZ2VEYXRhMjRiaXRzLFxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIF9nZXRJbWFnZURhdGEzMmJpdHM6IEdldEltYWdlRGF0YTMyYml0cyxcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBfZ2V0SW1hZ2VEYXRhR3JleThiaXRzOiBHZXRJbWFnZURhdGFHcmV5OGJpdHMsXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBfZ2V0SW1hZ2VEYXRhR3JleTE2Yml0czogR2V0SW1hZ2VEYXRhR3JleTE2Yml0cyxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9