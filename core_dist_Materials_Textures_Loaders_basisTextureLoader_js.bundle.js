"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Materials_Textures_Loaders_basisTextureLoader_js"],{

/***/ "../core/dist/Materials/Textures/Loaders/basisTextureLoader.js":
/*!*********************************************************************!*\
  !*** ../core/dist/Materials/Textures/Loaders/basisTextureLoader.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _BasisTextureLoader: () => (/* binding */ _BasisTextureLoader)
/* harmony export */ });
/* harmony import */ var _Misc_basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/basis */ "../core/dist/Misc/basis.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Loader for .basis file format
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _BasisTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     * @param onError defines the callback to trigger in case of error
     */
    loadCubeData(data, texture, createPolynomials, onLoad, onError) {
        if (Array.isArray(data)) {
            return;
        }
        const caps = texture.getEngine().getCaps();
        const transcodeConfig = {
            supportedCompressionFormats: {
                etc1: caps.etc1 ? true : false,
                s3tc: caps.s3tc ? true : false,
                pvrtc: caps.pvrtc ? true : false,
                etc2: caps.etc2 ? true : false,
                astc: caps.astc ? true : false,
                bc7: caps.bptc ? true : false,
            },
        };
        (0,_Misc_basis__WEBPACK_IMPORTED_MODULE_0__.TranscodeAsync)(data, transcodeConfig)
            // eslint-disable-next-line github/no-then
            .then((result) => {
            const hasMipmap = result.fileInfo.images[0].levels.length > 1 && texture.generateMipMaps;
            (0,_Misc_basis__WEBPACK_IMPORTED_MODULE_0__.LoadTextureFromTranscodeResult)(texture, result);
            texture.getEngine()._setCubeMapTextureParams(texture, hasMipmap);
            texture.isReady = true;
            texture.onLoadedObservable.notifyObservers(texture);
            texture.onLoadedObservable.clear();
            if (onLoad) {
                onLoad();
            }
        })
            // eslint-disable-next-line github/no-then
            .catch((err) => {
            const errorMessage = "Failed to transcode Basis file, transcoding may not be supported on this device";
            _Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(errorMessage);
            texture.isReady = true;
            if (onError) {
                onError(err);
            }
        });
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    loadData(data, texture, callback) {
        const caps = texture.getEngine().getCaps();
        const transcodeConfig = {
            supportedCompressionFormats: {
                etc1: caps.etc1 ? true : false,
                s3tc: caps.s3tc ? true : false,
                pvrtc: caps.pvrtc ? true : false,
                etc2: caps.etc2 ? true : false,
                astc: caps.astc ? true : false,
                bc7: caps.bptc ? true : false,
            },
        };
        (0,_Misc_basis__WEBPACK_IMPORTED_MODULE_0__.TranscodeAsync)(data, transcodeConfig)
            // eslint-disable-next-line github/no-then
            .then((result) => {
            const rootImage = result.fileInfo.images[0].levels[0];
            const hasMipmap = result.fileInfo.images[0].levels.length > 1 && texture.generateMipMaps;
            callback(rootImage.width, rootImage.height, hasMipmap, result.format !== -1, () => {
                (0,_Misc_basis__WEBPACK_IMPORTED_MODULE_0__.LoadTextureFromTranscodeResult)(texture, result);
            });
        })
            // eslint-disable-next-line github/no-then
            .catch((err) => {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Failed to transcode Basis file, transcoding may not be supported on this device");
            _Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Failed to transcode Basis file: ${err}`);
            callback(0, 0, false, false, () => { }, true);
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

/***/ "../core/dist/Misc/basis.js":
/*!**********************************!*\
  !*** ../core/dist/Misc/basis.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasisFileInfo: () => (/* binding */ BasisFileInfo),
/* harmony export */   BasisTools: () => (/* binding */ BasisTools),
/* harmony export */   BasisToolsOptions: () => (/* binding */ BasisToolsOptions),
/* harmony export */   BasisTranscodeConfiguration: () => (/* binding */ BasisTranscodeConfiguration),
/* harmony export */   GetInternalFormatFromBasisFormat: () => (/* binding */ GetInternalFormatFromBasisFormat),
/* harmony export */   LoadTextureFromTranscodeResult: () => (/* binding */ LoadTextureFromTranscodeResult),
/* harmony export */   SetBasisTranscoderWorker: () => (/* binding */ SetBasisTranscoderWorker),
/* harmony export */   TranscodeAsync: () => (/* binding */ TranscodeAsync)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var _Materials_Textures_internalTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Materials/Textures/internalTexture */ "../core/dist/Materials/Textures/internalTexture.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var _basisWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basisWorker */ "../core/dist/Misc/basisWorker.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * Info about the .basis files
 */
class BasisFileInfo {
}
/**
 * Result of transcoding a basis file
 */
class TranscodeResult {
}
/**
 * Configuration options for the Basis transcoder
 */
class BasisTranscodeConfiguration {
}
/**
 * @internal
 * Enum of basis transcoder formats
 */
var BASIS_FORMATS;
(function (BASIS_FORMATS) {
    BASIS_FORMATS[BASIS_FORMATS["cTFETC1"] = 0] = "cTFETC1";
    BASIS_FORMATS[BASIS_FORMATS["cTFETC2"] = 1] = "cTFETC2";
    BASIS_FORMATS[BASIS_FORMATS["cTFBC1"] = 2] = "cTFBC1";
    BASIS_FORMATS[BASIS_FORMATS["cTFBC3"] = 3] = "cTFBC3";
    BASIS_FORMATS[BASIS_FORMATS["cTFBC4"] = 4] = "cTFBC4";
    BASIS_FORMATS[BASIS_FORMATS["cTFBC5"] = 5] = "cTFBC5";
    BASIS_FORMATS[BASIS_FORMATS["cTFBC7"] = 6] = "cTFBC7";
    BASIS_FORMATS[BASIS_FORMATS["cTFPVRTC1_4_RGB"] = 8] = "cTFPVRTC1_4_RGB";
    BASIS_FORMATS[BASIS_FORMATS["cTFPVRTC1_4_RGBA"] = 9] = "cTFPVRTC1_4_RGBA";
    BASIS_FORMATS[BASIS_FORMATS["cTFASTC_4x4"] = 10] = "cTFASTC_4x4";
    BASIS_FORMATS[BASIS_FORMATS["cTFATC_RGB"] = 11] = "cTFATC_RGB";
    BASIS_FORMATS[BASIS_FORMATS["cTFATC_RGBA_INTERPOLATED_ALPHA"] = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA";
    BASIS_FORMATS[BASIS_FORMATS["cTFRGBA32"] = 13] = "cTFRGBA32";
    BASIS_FORMATS[BASIS_FORMATS["cTFRGB565"] = 14] = "cTFRGB565";
    BASIS_FORMATS[BASIS_FORMATS["cTFBGR565"] = 15] = "cTFBGR565";
    BASIS_FORMATS[BASIS_FORMATS["cTFRGBA4444"] = 16] = "cTFRGBA4444";
    BASIS_FORMATS[BASIS_FORMATS["cTFFXT1_RGB"] = 17] = "cTFFXT1_RGB";
    BASIS_FORMATS[BASIS_FORMATS["cTFPVRTC2_4_RGB"] = 18] = "cTFPVRTC2_4_RGB";
    BASIS_FORMATS[BASIS_FORMATS["cTFPVRTC2_4_RGBA"] = 19] = "cTFPVRTC2_4_RGBA";
    BASIS_FORMATS[BASIS_FORMATS["cTFETC2_EAC_R11"] = 20] = "cTFETC2_EAC_R11";
    BASIS_FORMATS[BASIS_FORMATS["cTFETC2_EAC_RG11"] = 21] = "cTFETC2_EAC_RG11";
})(BASIS_FORMATS || (BASIS_FORMATS = {}));
/**
 * Used to load .Basis files
 * See https://github.com/BinomialLLC/basis_universal/tree/master/webgl
 */
const BasisToolsOptions = {
    /**
     * URL to use when loading the basis transcoder
     */
    JSModuleURL: `${_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
    /**
     * URL to use when loading the wasm module for the transcoder
     */
    WasmModuleURL: `${_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`,
};
/**
 * Get the internal format to be passed to texImage2D corresponding to the .basis format value
 * @param basisFormat format chosen from GetSupportedTranscodeFormat
 * @param engine
 * @returns internal format corresponding to the Basis format
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetInternalFormatFromBasisFormat = (basisFormat, engine) => {
    let format;
    switch (basisFormat) {
        case BASIS_FORMATS.cTFETC1:
            format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL;
            break;
        case BASIS_FORMATS.cTFBC1:
            format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1;
            break;
        case BASIS_FORMATS.cTFBC4:
            format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5;
            break;
        case BASIS_FORMATS.cTFASTC_4x4:
            format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4;
            break;
        case BASIS_FORMATS.cTFETC2:
            format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC;
            break;
        case BASIS_FORMATS.cTFBC7:
            format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM;
            break;
    }
    if (format === undefined) {
        // eslint-disable-next-line no-throw-literal
        throw "The chosen Basis transcoder format is not currently supported";
    }
    return format;
};
let WorkerPromise = null;
let LocalWorker = null;
let ActionId = 0;
const IgnoreSupportedFormats = false;
const CreateWorkerAsync = async () => {
    if (!WorkerPromise) {
        WorkerPromise = new Promise((res, reject) => {
            if (LocalWorker) {
                res(LocalWorker);
            }
            else {
                _tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadFileAsync(_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(BasisToolsOptions.WasmModuleURL))
                    // eslint-disable-next-line github/no-then
                    .then((wasmBinary) => {
                    if (typeof URL !== "function") {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        return reject("Basis transcoder requires an environment with a URL constructor");
                    }
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    const workerBlobUrl = URL.createObjectURL(new Blob([`(${_basisWorker__WEBPACK_IMPORTED_MODULE_4__.workerFunction})()`], { type: "application/javascript" }));
                    LocalWorker = new Worker(workerBlobUrl);
                    // eslint-disable-next-line github/no-then
                    (0,_basisWorker__WEBPACK_IMPORTED_MODULE_4__.initializeWebWorker)(LocalWorker, wasmBinary, BasisToolsOptions.JSModuleURL).then(res, reject);
                })
                    // eslint-disable-next-line github/no-then
                    .catch(reject);
            }
        });
    }
    return await WorkerPromise;
};
/**
 * Set the worker to use for transcoding
 * @param worker The worker that will be used for transcoding
 */
const SetBasisTranscoderWorker = (worker) => {
    LocalWorker = worker;
};
/**
 * Transcodes a loaded image file to compressed pixel data
 * @param data image data to transcode
 * @param config configuration options for the transcoding
 * @returns a promise resulting in the transcoded image
 */
const TranscodeAsync = async (data, config) => {
    const dataView = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
    return await new Promise((res, rej) => {
        // eslint-disable-next-line github/no-then
        CreateWorkerAsync().then(() => {
            const actionId = ActionId++;
            const messageHandler = (msg) => {
                if (msg.data.action === "transcode" && msg.data.id === actionId) {
                    LocalWorker.removeEventListener("message", messageHandler);
                    if (!msg.data.success) {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        rej("Transcode is not supported on this device");
                    }
                    else {
                        res(msg.data);
                    }
                }
            };
            LocalWorker.addEventListener("message", messageHandler);
            const dataViewCopy = new Uint8Array(dataView.byteLength);
            dataViewCopy.set(new Uint8Array(dataView.buffer, dataView.byteOffset, dataView.byteLength));
            LocalWorker.postMessage({ action: "transcode", id: actionId, imageData: dataViewCopy, config: config, ignoreSupportedFormats: IgnoreSupportedFormats }, [
                dataViewCopy.buffer,
            ]);
        }, (error) => {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            rej(error);
        });
    });
};
/**
 * Binds a texture according to its underlying target.
 * @param texture texture to bind
 * @param engine the engine to bind the texture in
 */
const BindTexture = (texture, engine) => {
    let target = engine._gl?.TEXTURE_2D;
    if (texture.isCube) {
        target = engine._gl?.TEXTURE_CUBE_MAP;
    }
    engine._bindTextureDirectly(target, texture, true);
};
/**
 * Loads a texture from the transcode result
 * @param texture texture load to
 * @param transcodeResult the result of transcoding the basis file to load from
 */
const LoadTextureFromTranscodeResult = (texture, transcodeResult) => {
    const engine = texture.getEngine();
    for (let i = 0; i < transcodeResult.fileInfo.images.length; i++) {
        const rootImage = transcodeResult.fileInfo.images[i].levels[0];
        texture._invertVScale = texture.invertY;
        if (transcodeResult.format === -1 || transcodeResult.format === BASIS_FORMATS.cTFRGB565) {
            // No compatable compressed format found, fallback to RGB
            texture.type = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5;
            texture.format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGB;
            if (engine._features.basisNeedsPOT && (Math.log2(rootImage.width) % 1 !== 0 || Math.log2(rootImage.height) % 1 !== 0)) {
                // Create non power of two texture
                const source = new _Materials_Textures_internalTexture__WEBPACK_IMPORTED_MODULE_2__.InternalTexture(engine, 2 /* InternalTextureSource.Temp */);
                texture._invertVScale = texture.invertY;
                source.type = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5;
                source.format = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGB;
                // Fallback requires aligned width/height
                source.width = (rootImage.width + 3) & ~3;
                source.height = (rootImage.height + 3) & ~3;
                BindTexture(source, engine);
                engine._uploadDataToTextureDirectly(source, new Uint16Array(rootImage.transcodedPixels.buffer), i, 0, _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGB, true);
                // Resize to power of two
                engine._rescaleTexture(source, texture, engine.scenes[0], engine._getInternalFormat(_Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGB), () => {
                    engine._releaseTexture(source);
                    BindTexture(texture, engine);
                });
            }
            else {
                // Fallback is already inverted
                texture._invertVScale = !texture.invertY;
                // Upload directly
                texture.width = (rootImage.width + 3) & ~3;
                texture.height = (rootImage.height + 3) & ~3;
                texture.samplingMode = _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTURE_LINEAR_LINEAR;
                BindTexture(texture, engine);
                engine._uploadDataToTextureDirectly(texture, new Uint16Array(rootImage.transcodedPixels.buffer), i, 0, _Engines_constants__WEBPACK_IMPORTED_MODULE_3__.Constants.TEXTUREFORMAT_RGB, true);
            }
        }
        else {
            texture.width = rootImage.width;
            texture.height = rootImage.height;
            texture.generateMipMaps = transcodeResult.fileInfo.images[i].levels.length > 1;
            const format = BasisTools.GetInternalFormatFromBasisFormat(transcodeResult.format, engine);
            texture.format = format;
            BindTexture(texture, engine);
            // Upload all mip levels in the file
            const levels = transcodeResult.fileInfo.images[i].levels;
            for (let index = 0; index < levels.length; index++) {
                const level = levels[index];
                engine._uploadCompressedDataToTextureDirectly(texture, format, level.width, level.height, level.transcodedPixels, i, index);
            }
            if (engine._features.basisNeedsPOT && (Math.log2(texture.width) % 1 !== 0 || Math.log2(texture.height) % 1 !== 0)) {
                _tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1.");
                texture._cachedWrapU = _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
                texture._cachedWrapV = _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
            }
        }
    }
};
/**
 * Used to load .Basis files
 * See https://github.com/BinomialLLC/basis_universal/tree/master/webgl
 */
const BasisTools = {
    /**
     * URL to use when loading the basis transcoder
     */
    JSModuleURL: BasisToolsOptions.JSModuleURL,
    /**
     * URL to use when loading the wasm module for the transcoder
     */
    WasmModuleURL: BasisToolsOptions.WasmModuleURL,
    /**
     * Get the internal format to be passed to texImage2D corresponding to the .basis format value
     * @param basisFormat format chosen from GetSupportedTranscodeFormat
     * @returns internal format corresponding to the Basis format
     */
    GetInternalFormatFromBasisFormat,
    /**
     * Transcodes a loaded image file to compressed pixel data
     * @param data image data to transcode
     * @param config configuration options for the transcoding
     * @returns a promise resulting in the transcoded image
     */
    TranscodeAsync,
    /**
     * Loads a texture from the transcode result
     * @param texture texture load to
     * @param transcodeResult the result of transcoding the basis file to load from
     */
    LoadTextureFromTranscodeResult,
};
Object.defineProperty(BasisTools, "JSModuleURL", {
    get: function () {
        return BasisToolsOptions.JSModuleURL;
    },
    set: function (value) {
        BasisToolsOptions.JSModuleURL = value;
    },
});
Object.defineProperty(BasisTools, "WasmModuleURL", {
    get: function () {
        return BasisToolsOptions.WasmModuleURL;
    },
    set: function (value) {
        BasisToolsOptions.WasmModuleURL = value;
    },
});


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

/***/ "../core/dist/Misc/basisWorker.js":
/*!****************************************!*\
  !*** ../core/dist/Misc/basisWorker.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeWebWorker: () => (/* binding */ initializeWebWorker),
/* harmony export */   workerFunction: () => (/* binding */ workerFunction)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * The worker function that gets converted to a blob url to pass into a worker.
 * To be used if a developer wants to create their own worker instance and inject it instead of using the default worker.
 */
function workerFunction() {
    const _BASIS_FORMAT = {
        cTFETC1: 0,
        cTFETC2: 1,
        cTFBC1: 2,
        cTFBC3: 3,
        cTFBC4: 4,
        cTFBC5: 5,
        cTFBC7: 6,
        cTFPVRTC1_4_RGB: 8,
        cTFPVRTC1_4_RGBA: 9,
        cTFASTC_4x4: 10,
        cTFATC_RGB: 11,
        cTFATC_RGBA_INTERPOLATED_ALPHA: 12,
        cTFRGBA32: 13,
        cTFRGB565: 14,
        cTFBGR565: 15,
        cTFRGBA4444: 16,
        cTFFXT1_RGB: 17,
        cTFPVRTC2_4_RGB: 18,
        cTFPVRTC2_4_RGBA: 19,
        cTFETC2_EAC_R11: 20,
        cTFETC2_EAC_RG11: 21,
    };
    let transcoderModulePromise = null;
    onmessage = (event) => {
        if (event.data.action === "init") {
            // Load the transcoder if it hasn't been yet
            if (event.data.url) {
                // make sure we loaded the script correctly
                try {
                    importScripts(event.data.url);
                }
                catch (e) {
                    postMessage({ action: "error", error: e });
                }
            }
            if (!transcoderModulePromise) {
                transcoderModulePromise = BASIS({
                    // Override wasm binary
                    wasmBinary: event.data.wasmBinary,
                });
            }
            if (transcoderModulePromise !== null) {
                // eslint-disable-next-line github/no-then
                transcoderModulePromise.then((m) => {
                    BASIS = m;
                    m.initializeBasis();
                    postMessage({ action: "init" });
                });
            }
        }
        else if (event.data.action === "transcode") {
            // Transcode the basis image and return the resulting pixels
            const config = event.data.config;
            const imgData = event.data.imageData;
            const loadedFile = new BASIS.BasisFile(imgData);
            const fileInfo = GetFileInfo(loadedFile);
            let format = event.data.ignoreSupportedFormats ? null : GetSupportedTranscodeFormat(event.data.config, fileInfo);
            let needsConversion = false;
            if (format === null) {
                needsConversion = true;
                format = fileInfo.hasAlpha ? _BASIS_FORMAT.cTFBC3 : _BASIS_FORMAT.cTFBC1;
            }
            // Begin transcode
            let success = true;
            if (!loadedFile.startTranscoding()) {
                success = false;
            }
            const buffers = [];
            for (let imageIndex = 0; imageIndex < fileInfo.images.length; imageIndex++) {
                if (!success) {
                    break;
                }
                const image = fileInfo.images[imageIndex];
                if (config.loadSingleImage === undefined || config.loadSingleImage === imageIndex) {
                    let mipCount = image.levels.length;
                    if (config.loadMipmapLevels === false) {
                        mipCount = 1;
                    }
                    for (let levelIndex = 0; levelIndex < mipCount; levelIndex++) {
                        const levelInfo = image.levels[levelIndex];
                        const pixels = TranscodeLevel(loadedFile, imageIndex, levelIndex, format, needsConversion);
                        if (!pixels) {
                            success = false;
                            break;
                        }
                        levelInfo.transcodedPixels = pixels;
                        buffers.push(levelInfo.transcodedPixels.buffer);
                    }
                }
            }
            // Close file
            loadedFile.close();
            loadedFile.delete();
            if (needsConversion) {
                format = -1;
            }
            if (!success) {
                postMessage({ action: "transcode", success: success, id: event.data.id });
            }
            else {
                postMessage({ action: "transcode", success: success, id: event.data.id, fileInfo: fileInfo, format: format }, buffers);
            }
        }
    };
    /**
     * Detects the supported transcode format for the file
     * @param config transcode config
     * @param fileInfo info about the file
     * @returns the chosed format or null if none are supported
     */
    function GetSupportedTranscodeFormat(config, fileInfo) {
        let format = null;
        if (config.supportedCompressionFormats) {
            if (config.supportedCompressionFormats.astc) {
                format = _BASIS_FORMAT.cTFASTC_4x4;
            }
            else if (config.supportedCompressionFormats.bc7) {
                format = _BASIS_FORMAT.cTFBC7;
            }
            else if (config.supportedCompressionFormats.s3tc) {
                format = fileInfo.hasAlpha ? _BASIS_FORMAT.cTFBC3 : _BASIS_FORMAT.cTFBC1;
            }
            else if (config.supportedCompressionFormats.pvrtc) {
                format = fileInfo.hasAlpha ? _BASIS_FORMAT.cTFPVRTC1_4_RGBA : _BASIS_FORMAT.cTFPVRTC1_4_RGB;
            }
            else if (config.supportedCompressionFormats.etc2) {
                format = _BASIS_FORMAT.cTFETC2;
            }
            else if (config.supportedCompressionFormats.etc1) {
                format = _BASIS_FORMAT.cTFETC1;
            }
            else {
                format = _BASIS_FORMAT.cTFRGB565;
            }
        }
        return format;
    }
    /**
     * Retrieves information about the basis file eg. dimensions
     * @param basisFile the basis file to get the info from
     * @returns information about the basis file
     */
    function GetFileInfo(basisFile) {
        const hasAlpha = basisFile.getHasAlpha();
        const imageCount = basisFile.getNumImages();
        const images = [];
        for (let i = 0; i < imageCount; i++) {
            const imageInfo = {
                levels: [],
            };
            const levelCount = basisFile.getNumLevels(i);
            for (let level = 0; level < levelCount; level++) {
                const levelInfo = {
                    width: basisFile.getImageWidth(i, level),
                    height: basisFile.getImageHeight(i, level),
                };
                imageInfo.levels.push(levelInfo);
            }
            images.push(imageInfo);
        }
        const info = { hasAlpha, images };
        return info;
    }
    function TranscodeLevel(loadedFile, imageIndex, levelIndex, format, convertToRgb565) {
        const dstSize = loadedFile.getImageTranscodedSizeInBytes(imageIndex, levelIndex, format);
        let dst = new Uint8Array(dstSize);
        if (!loadedFile.transcodeImage(dst, imageIndex, levelIndex, format, 1, 0)) {
            return null;
        }
        // If no supported format is found, load as dxt and convert to rgb565
        if (convertToRgb565) {
            const alignedWidth = (loadedFile.getImageWidth(imageIndex, levelIndex) + 3) & ~3;
            const alignedHeight = (loadedFile.getImageHeight(imageIndex, levelIndex) + 3) & ~3;
            dst = ConvertDxtToRgb565(dst, 0, alignedWidth, alignedHeight);
        }
        return dst;
    }
    /**
     * From https://github.com/BinomialLLC/basis_universal/blob/master/webgl/texture/dxt-to-rgb565.js
     * An unoptimized version of dxtToRgb565.  Also, the floating
     * point math used to compute the colors actually results in
     * slightly different colors compared to hardware DXT decoders.
     * @param src dxt src pixels
     * @param srcByteOffset offset for the start of src
     * @param  width aligned width of the image
     * @param  height aligned height of the image
     * @returns the converted pixels
     */
    function ConvertDxtToRgb565(src, srcByteOffset, width, height) {
        const c = new Uint16Array(4);
        const dst = new Uint16Array(width * height);
        const blockWidth = width / 4;
        const blockHeight = height / 4;
        for (let blockY = 0; blockY < blockHeight; blockY++) {
            for (let blockX = 0; blockX < blockWidth; blockX++) {
                const i = srcByteOffset + 8 * (blockY * blockWidth + blockX);
                c[0] = src[i] | (src[i + 1] << 8);
                c[1] = src[i + 2] | (src[i + 3] << 8);
                c[2] =
                    ((2 * (c[0] & 0x1f) + 1 * (c[1] & 0x1f)) / 3) |
                        (((2 * (c[0] & 0x7e0) + 1 * (c[1] & 0x7e0)) / 3) & 0x7e0) |
                        (((2 * (c[0] & 0xf800) + 1 * (c[1] & 0xf800)) / 3) & 0xf800);
                c[3] =
                    ((2 * (c[1] & 0x1f) + 1 * (c[0] & 0x1f)) / 3) |
                        (((2 * (c[1] & 0x7e0) + 1 * (c[0] & 0x7e0)) / 3) & 0x7e0) |
                        (((2 * (c[1] & 0xf800) + 1 * (c[0] & 0xf800)) / 3) & 0xf800);
                for (let row = 0; row < 4; row++) {
                    const m = src[i + 4 + row];
                    let dstI = (blockY * 4 + row) * width + blockX * 4;
                    dst[dstI++] = c[m & 0x3];
                    dst[dstI++] = c[(m >> 2) & 0x3];
                    dst[dstI++] = c[(m >> 4) & 0x3];
                    dst[dstI++] = c[(m >> 6) & 0x3];
                }
            }
        }
        return dst;
    }
}
/**
 * Initialize a web worker with the basis transcoder
 * @param worker the worker to initialize
 * @param wasmBinary the wasm binary to load into the worker
 * @param moduleUrl the url to the basis transcoder module
 * @returns a promise that resolves when the worker is initialized
 */
// eslint-disable-next-line no-restricted-syntax
async function initializeWebWorker(worker, wasmBinary, moduleUrl) {
    return await new Promise((res, reject) => {
        const initHandler = (msg) => {
            if (msg.data.action === "init") {
                worker.removeEventListener("message", initHandler);
                res(worker);
            }
            else if (msg.data.action === "error") {
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(msg.data.error || "error initializing worker");
            }
        };
        worker.addEventListener("message", initHandler);
        // we can use transferable objects here because the worker will own the ArrayBuffer
        worker.postMessage({ action: "init", url: moduleUrl ? _tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(moduleUrl) : undefined, wasmBinary }, [wasmBinary]);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01hdGVyaWFsc19UZXh0dXJlc19Mb2FkZXJzX2Jhc2lzVGV4dHVyZUxvYWRlcl9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUE2RkE7QUEzRkE7Ozs7Ozs7QUFPQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFTQTtBQUVBOztBQUVBO0FBQ0E7QUFTQTtBQUVBOztBQUVBO0FBQ0E7QUFzQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WEE7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9Mb2FkZXJzL2Jhc2lzVGV4dHVyZUxvYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvYmFzaXMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NaXNjL2Jhc2lzV29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJbnRlcm5hbFRleHR1cmUgfSBmcm9tIFwiLi4vLi4vLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2ludGVybmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElJbnRlcm5hbFRleHR1cmVMb2FkZXIgfSBmcm9tIFwiLi9pbnRlcm5hbFRleHR1cmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgTG9hZFRleHR1cmVGcm9tVHJhbnNjb2RlUmVzdWx0LCBUcmFuc2NvZGVBc3luYyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL2Jhc2lzXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvdG9vbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBMb2FkZXIgZm9yIC5iYXNpcyBmaWxlIGZvcm1hdFxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIF9CYXNpc1RleHR1cmVMb2FkZXIgaW1wbGVtZW50cyBJSW50ZXJuYWxUZXh0dXJlTG9hZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoZSBsb2FkZXIgc3VwcG9ydHMgY2FzY2FkZSBsb2FkaW5nIHRoZSBkaWZmZXJlbnQgZmFjZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBzdXBwb3J0Q2FzY2FkZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZHMgdGhlIGN1YmUgdGV4dHVyZSBkYXRhIHRvIHRoZSBXZWJHTCB0ZXh0dXJlLiBJdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIGRhdGEgY29udGFpbnMgdGhlIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgZGVmaW5lcyB0aGUgQmFieWxvbkpTIGludGVybmFsIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjcmVhdGVQb2x5bm9taWFscyB3aWxsIGJlIHRydWUgaWYgcG9seW5vbWlhbHMgaGF2ZSBiZWVuIHJlcXVlc3RlZFxyXG4gICAgICogQHBhcmFtIG9uTG9hZCBkZWZpbmVzIHRoZSBjYWxsYmFjayB0byB0cmlnZ2VyIG9uY2UgdGhlIHRleHR1cmUgaXMgcmVhZHlcclxuICAgICAqIEBwYXJhbSBvbkVycm9yIGRlZmluZXMgdGhlIGNhbGxiYWNrIHRvIHRyaWdnZXIgaW4gY2FzZSBvZiBlcnJvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEN1YmVEYXRhKFxyXG4gICAgICAgIGRhdGE6IEFycmF5QnVmZmVyVmlldyB8IEFycmF5QnVmZmVyVmlld1tdLFxyXG4gICAgICAgIHRleHR1cmU6IEludGVybmFsVGV4dHVyZSxcclxuICAgICAgICBjcmVhdGVQb2x5bm9taWFsczogYm9vbGVhbixcclxuICAgICAgICBvbkxvYWQ6IE51bGxhYmxlPChkYXRhPzogYW55KSA9PiB2b2lkPixcclxuICAgICAgICBvbkVycm9yOiBOdWxsYWJsZTwobWVzc2FnZT86IHN0cmluZywgZXhjZXB0aW9uPzogYW55KSA9PiB2b2lkPlxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYXBzID0gdGV4dHVyZS5nZXRFbmdpbmUoKS5nZXRDYXBzKCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNjb2RlQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBzdXBwb3J0ZWRDb21wcmVzc2lvbkZvcm1hdHM6IHtcclxuICAgICAgICAgICAgICAgIGV0YzE6IGNhcHMuZXRjMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHMzdGM6IGNhcHMuczN0YyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHB2cnRjOiBjYXBzLnB2cnRjID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXRjMjogY2Fwcy5ldGMyID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXN0YzogY2Fwcy5hc3RjID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmM3OiBjYXBzLmJwdGMgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBUcmFuc2NvZGVBc3luYyhkYXRhLCB0cmFuc2NvZGVDb25maWcpXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNNaXBtYXAgPSByZXN1bHQuZmlsZUluZm8uaW1hZ2VzWzBdLmxldmVscy5sZW5ndGggPiAxICYmIHRleHR1cmUuZ2VuZXJhdGVNaXBNYXBzO1xyXG4gICAgICAgICAgICAgICAgTG9hZFRleHR1cmVGcm9tVHJhbnNjb2RlUmVzdWx0KHRleHR1cmUsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmdldEVuZ2luZSgpLl9zZXRDdWJlTWFwVGV4dHVyZVBhcmFtcyh0ZXh0dXJlLCBoYXNNaXBtYXApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUub25Mb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUub25Mb2FkZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gXCJGYWlsZWQgdG8gdHJhbnNjb2RlIEJhc2lzIGZpbGUsIHRyYW5zY29kaW5nIG1heSBub3QgYmUgc3VwcG9ydGVkIG9uIHRoaXMgZGV2aWNlXCI7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkcyB0aGUgMkQgdGV4dHVyZSBkYXRhIHRvIHRoZSBXZWJHTCB0ZXh0dXJlLiBJdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kIG9uY2UgaW4gdGhlIGNhbGxiYWNrLlxyXG4gICAgICogQHBhcmFtIGRhdGEgY29udGFpbnMgdGhlIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgZGVmaW5lcyB0aGUgQmFieWxvbkpTIGludGVybmFsIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBkZWZpbmVzIHRoZSBtZXRob2QgdG8gY2FsbCBvbmNlIHJlYWR5IHRvIHVwbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZERhdGEoXHJcbiAgICAgICAgZGF0YTogQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHRleHR1cmU6IEludGVybmFsVGV4dHVyZSxcclxuICAgICAgICBjYWxsYmFjazogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBsb2FkTWlwbWFwOiBib29sZWFuLCBpc0NvbXByZXNzZWQ6IGJvb2xlYW4sIGRvbmU6ICgpID0+IHZvaWQsIGZhaWxlZExvYWRpbmc/OiBib29sZWFuKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXBzID0gdGV4dHVyZS5nZXRFbmdpbmUoKS5nZXRDYXBzKCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNjb2RlQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBzdXBwb3J0ZWRDb21wcmVzc2lvbkZvcm1hdHM6IHtcclxuICAgICAgICAgICAgICAgIGV0YzE6IGNhcHMuZXRjMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHMzdGM6IGNhcHMuczN0YyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHB2cnRjOiBjYXBzLnB2cnRjID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXRjMjogY2Fwcy5ldGMyID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXN0YzogY2Fwcy5hc3RjID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmM3OiBjYXBzLmJwdGMgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBUcmFuc2NvZGVBc3luYyhkYXRhLCB0cmFuc2NvZGVDb25maWcpXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb290SW1hZ2UgPSByZXN1bHQuZmlsZUluZm8uaW1hZ2VzWzBdLmxldmVsc1swXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc01pcG1hcCA9IHJlc3VsdC5maWxlSW5mby5pbWFnZXNbMF0ubGV2ZWxzLmxlbmd0aCA+IDEgJiYgdGV4dHVyZS5nZW5lcmF0ZU1pcE1hcHM7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyb290SW1hZ2Uud2lkdGgsIHJvb3RJbWFnZS5oZWlnaHQsIGhhc01pcG1hcCwgcmVzdWx0LmZvcm1hdCAhPT0gLTEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkVGV4dHVyZUZyb21UcmFuc2NvZGVSZXN1bHQodGV4dHVyZSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJGYWlsZWQgdG8gdHJhbnNjb2RlIEJhc2lzIGZpbGUsIHRyYW5zY29kaW5nIG1heSBub3QgYmUgc3VwcG9ydGVkIG9uIHRoaXMgZGV2aWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuV2FybihgRmFpbGVkIHRvIHRyYW5zY29kZSBCYXNpcyBmaWxlOiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKDAsIDAsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge30sIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgSW50ZXJuYWxUZXh0dXJlLCBJbnRlcm5hbFRleHR1cmVTb3VyY2UgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2ludGVybmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYldvcmtlciwgd29ya2VyRnVuY3Rpb24gfSBmcm9tIFwiLi9iYXNpc1dvcmtlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvZW5naW5lXCI7XHJcblxyXG4vKipcclxuICogSW5mbyBhYm91dCB0aGUgLmJhc2lzIGZpbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzaXNGaWxlSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIElmIHRoZSBmaWxlIGhhcyBhbHBoYVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzQWxwaGE6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIEluZm8gYWJvdXQgZWFjaCBpbWFnZSBvZiB0aGUgYmFzaXMgZmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1hZ2VzOiBBcnJheTx7IGxldmVsczogQXJyYXk8eyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgdHJhbnNjb2RlZFBpeGVsczogQXJyYXlCdWZmZXJWaWV3IH0+IH0+O1xyXG59XHJcblxyXG4vKipcclxuICogUmVzdWx0IG9mIHRyYW5zY29kaW5nIGEgYmFzaXMgZmlsZVxyXG4gKi9cclxuY2xhc3MgVHJhbnNjb2RlUmVzdWx0IHtcclxuICAgIC8qKlxyXG4gICAgICogSW5mbyBhYm91dCB0aGUgLmJhc2lzIGZpbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZpbGVJbmZvOiBCYXNpc0ZpbGVJbmZvO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgdG8gdXNlIHdoZW4gbG9hZGluZyB0aGUgZmlsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBCYXNpcyB0cmFuc2NvZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzaXNUcmFuc2NvZGVDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogU3VwcG9ydGVkIGNvbXByZXNzaW9uIGZvcm1hdHMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHN1cHBvcnRlZCBvdXRwdXQgZm9ybWF0IG9mIHRoZSB0cmFuc2NvZGVyXHJcbiAgICAgKi9cclxuICAgIHN1cHBvcnRlZENvbXByZXNzaW9uRm9ybWF0cz86IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBldGMxIGNvbXByZXNzaW9uIGZvcm1hdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV0YzE/OiBib29sZWFuO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHMzdGMgY29tcHJlc3Npb24gZm9ybWF0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgczN0Yz86IGJvb2xlYW47XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcHZydGMgY29tcHJlc3Npb24gZm9ybWF0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHZydGM/OiBib29sZWFuO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGV0YzIgY29tcHJlc3Npb24gZm9ybWF0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZXRjMj86IGJvb2xlYW47XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYXN0YyBjb21wcmVzc2lvbiBmb3JtYXRcclxuICAgICAgICAgKi9cclxuICAgICAgICBhc3RjPzogYm9vbGVhbjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBiYzcgY29tcHJlc3Npb24gZm9ybWF0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmM3PzogYm9vbGVhbjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIElmIG1pcG1hcCBsZXZlbHMgc2hvdWxkIGJlIGxvYWRlZCBmb3IgdHJhbnNjb2RlZCBpbWFnZXMgKERlZmF1bHQ6IHRydWUpXHJcbiAgICAgKi9cclxuICAgIGxvYWRNaXBtYXBMZXZlbHM/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRleCBvZiBhIHNpbmdsZSBpbWFnZSB0byBsb2FkIChEZWZhdWx0OiBhbGwgaW1hZ2VzKVxyXG4gICAgICovXHJcbiAgICBsb2FkU2luZ2xlSW1hZ2U/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogRW51bSBvZiBiYXNpcyB0cmFuc2NvZGVyIGZvcm1hdHNcclxuICovXHJcbmVudW0gQkFTSVNfRk9STUFUUyB7XHJcbiAgICBjVEZFVEMxID0gMCxcclxuICAgIGNURkVUQzIgPSAxLFxyXG4gICAgY1RGQkMxID0gMixcclxuICAgIGNURkJDMyA9IDMsXHJcbiAgICBjVEZCQzQgPSA0LFxyXG4gICAgY1RGQkM1ID0gNSxcclxuICAgIGNURkJDNyA9IDYsXHJcbiAgICBjVEZQVlJUQzFfNF9SR0IgPSA4LFxyXG4gICAgY1RGUFZSVEMxXzRfUkdCQSA9IDksXHJcbiAgICBjVEZBU1RDXzR4NCA9IDEwLFxyXG4gICAgY1RGQVRDX1JHQiA9IDExLFxyXG4gICAgY1RGQVRDX1JHQkFfSU5URVJQT0xBVEVEX0FMUEhBID0gMTIsXHJcbiAgICBjVEZSR0JBMzIgPSAxMyxcclxuICAgIGNURlJHQjU2NSA9IDE0LFxyXG4gICAgY1RGQkdSNTY1ID0gMTUsXHJcbiAgICBjVEZSR0JBNDQ0NCA9IDE2LFxyXG4gICAgY1RGRlhUMV9SR0IgPSAxNyxcclxuICAgIGNURlBWUlRDMl80X1JHQiA9IDE4LFxyXG4gICAgY1RGUFZSVEMyXzRfUkdCQSA9IDE5LFxyXG4gICAgY1RGRVRDMl9FQUNfUjExID0gMjAsXHJcbiAgICBjVEZFVEMyX0VBQ19SRzExID0gMjEsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIGxvYWQgLkJhc2lzIGZpbGVzXHJcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vQmlub21pYWxMTEMvYmFzaXNfdW5pdmVyc2FsL3RyZWUvbWFzdGVyL3dlYmdsXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmFzaXNUb29sc09wdGlvbnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFVSTCB0byB1c2Ugd2hlbiBsb2FkaW5nIHRoZSBiYXNpcyB0cmFuc2NvZGVyXHJcbiAgICAgKi9cclxuICAgIEpTTW9kdWxlVVJMOiBgJHtUb29scy5fRGVmYXVsdENkblVybH0vYmFzaXNUcmFuc2NvZGVyLzEvYmFzaXNfdHJhbnNjb2Rlci5qc2AsXHJcbiAgICAvKipcclxuICAgICAqIFVSTCB0byB1c2Ugd2hlbiBsb2FkaW5nIHRoZSB3YXNtIG1vZHVsZSBmb3IgdGhlIHRyYW5zY29kZXJcclxuICAgICAqL1xyXG4gICAgV2FzbU1vZHVsZVVSTDogYCR7VG9vbHMuX0RlZmF1bHRDZG5Vcmx9L2Jhc2lzVHJhbnNjb2Rlci8xL2Jhc2lzX3RyYW5zY29kZXIud2FzbWAsXHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBpbnRlcm5hbCBmb3JtYXQgdG8gYmUgcGFzc2VkIHRvIHRleEltYWdlMkQgY29ycmVzcG9uZGluZyB0byB0aGUgLmJhc2lzIGZvcm1hdCB2YWx1ZVxyXG4gKiBAcGFyYW0gYmFzaXNGb3JtYXQgZm9ybWF0IGNob3NlbiBmcm9tIEdldFN1cHBvcnRlZFRyYW5zY29kZUZvcm1hdFxyXG4gKiBAcGFyYW0gZW5naW5lXHJcbiAqIEByZXR1cm5zIGludGVybmFsIGZvcm1hdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBCYXNpcyBmb3JtYXRcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGNvbnN0IEdldEludGVybmFsRm9ybWF0RnJvbUJhc2lzRm9ybWF0ID0gKGJhc2lzRm9ybWF0OiBudW1iZXIsIGVuZ2luZTogQWJzdHJhY3RFbmdpbmUpID0+IHtcclxuICAgIGxldCBmb3JtYXQ7XHJcbiAgICBzd2l0Y2ggKGJhc2lzRm9ybWF0KSB7XHJcbiAgICAgICAgY2FzZSBCQVNJU19GT1JNQVRTLmNURkVUQzE6XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCX0VUQzFfV0VCR0w7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQkFTSVNfRk9STUFUUy5jVEZCQzE6XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IENvbnN0YW50cy5URVhUVVJFRk9STUFUX0NPTVBSRVNTRURfUkdCX1MzVENfRFhUMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBCQVNJU19GT1JNQVRTLmNURkJDNDpcclxuICAgICAgICAgICAgZm9ybWF0ID0gQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBCQVNJU19GT1JNQVRTLmNURkFTVENfNHg0OlxyXG4gICAgICAgICAgICBmb3JtYXQgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQkFfQVNUQ180eDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQkFTSVNfRk9STUFUUy5jVEZFVEMyOlxyXG4gICAgICAgICAgICBmb3JtYXQgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQkE4X0VUQzJfRUFDO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEJBU0lTX0ZPUk1BVFMuY1RGQkM3OlxyXG4gICAgICAgICAgICBmb3JtYXQgPSBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9DT01QUkVTU0VEX1JHQkFfQlBUQ19VTk9STTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICB0aHJvdyBcIlRoZSBjaG9zZW4gQmFzaXMgdHJhbnNjb2RlciBmb3JtYXQgaXMgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybWF0O1xyXG59O1xyXG5cclxubGV0IFdvcmtlclByb21pc2U6IE51bGxhYmxlPFByb21pc2U8V29ya2VyPj4gPSBudWxsO1xyXG5sZXQgTG9jYWxXb3JrZXI6IE51bGxhYmxlPFdvcmtlcj4gPSBudWxsO1xyXG5sZXQgQWN0aW9uSWQgPSAwO1xyXG5jb25zdCBJZ25vcmVTdXBwb3J0ZWRGb3JtYXRzID0gZmFsc2U7XHJcbmNvbnN0IENyZWF0ZVdvcmtlckFzeW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFXb3JrZXJQcm9taXNlKSB7XHJcbiAgICAgICAgV29ya2VyUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTG9jYWxXb3JrZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlcyhMb2NhbFdvcmtlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5Mb2FkRmlsZUFzeW5jKFRvb2xzLkdldEJhYnlsb25TY3JpcHRVUkwoQmFzaXNUb29sc09wdGlvbnMuV2FzbU1vZHVsZVVSTCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHdhc21CaW5hcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBVUkwgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiQmFzaXMgdHJhbnNjb2RlciByZXF1aXJlcyBhbiBlbnZpcm9ubWVudCB3aXRoIGEgVVJMIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyQmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2AoJHt3b3JrZXJGdW5jdGlvbn0pKClgXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIiB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsV29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJCbG9iVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVXZWJXb3JrZXIoTG9jYWxXb3JrZXIsIHdhc21CaW5hcnksIEJhc2lzVG9vbHNPcHRpb25zLkpTTW9kdWxlVVJMKS50aGVuKHJlcywgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgV29ya2VyUHJvbWlzZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIHdvcmtlciB0byB1c2UgZm9yIHRyYW5zY29kaW5nXHJcbiAqIEBwYXJhbSB3b3JrZXIgVGhlIHdvcmtlciB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdHJhbnNjb2RpbmdcclxuICovXHJcbmV4cG9ydCBjb25zdCBTZXRCYXNpc1RyYW5zY29kZXJXb3JrZXIgPSAod29ya2VyOiBXb3JrZXIpID0+IHtcclxuICAgIExvY2FsV29ya2VyID0gd29ya2VyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zY29kZXMgYSBsb2FkZWQgaW1hZ2UgZmlsZSB0byBjb21wcmVzc2VkIHBpeGVsIGRhdGFcclxuICogQHBhcmFtIGRhdGEgaW1hZ2UgZGF0YSB0byB0cmFuc2NvZGVcclxuICogQHBhcmFtIGNvbmZpZyBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSB0cmFuc2NvZGluZ1xyXG4gKiBAcmV0dXJucyBhIHByb21pc2UgcmVzdWx0aW5nIGluIHRoZSB0cmFuc2NvZGVkIGltYWdlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVHJhbnNjb2RlQXN5bmMgPSBhc3luYyAoZGF0YTogQXJyYXlCdWZmZXIgfCBBcnJheUJ1ZmZlclZpZXcsIGNvbmZpZzogQmFzaXNUcmFuc2NvZGVDb25maWd1cmF0aW9uKTogUHJvbWlzZTxUcmFuc2NvZGVSZXN1bHQ+ID0+IHtcclxuICAgIGNvbnN0IGRhdGFWaWV3ID0gZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gbmV3IFVpbnQ4QXJyYXkoZGF0YSkgOiBkYXRhO1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICBDcmVhdGVXb3JrZXJBc3luYygpLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbklkID0gQWN0aW9uSWQrKztcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gKG1zZzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5kYXRhLmFjdGlvbiA9PT0gXCJ0cmFuc2NvZGVcIiAmJiBtc2cuZGF0YS5pZCA9PT0gYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxXb3JrZXIhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG1lc3NhZ2VIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtc2cuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaihcIlRyYW5zY29kZSBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZGV2aWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzKG1zZy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBMb2NhbFdvcmtlciEuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgbWVzc2FnZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFWaWV3Q29weSA9IG5ldyBVaW50OEFycmF5KGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVZpZXdDb3B5LnNldChuZXcgVWludDhBcnJheShkYXRhVmlldy5idWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIExvY2FsV29ya2VyIS5wb3N0TWVzc2FnZSh7IGFjdGlvbjogXCJ0cmFuc2NvZGVcIiwgaWQ6IGFjdGlvbklkLCBpbWFnZURhdGE6IGRhdGFWaWV3Q29weSwgY29uZmlnOiBjb25maWcsIGlnbm9yZVN1cHBvcnRlZEZvcm1hdHM6IElnbm9yZVN1cHBvcnRlZEZvcm1hdHMgfSwgW1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3Q29weS5idWZmZXIsXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgIHJlaihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQmluZHMgYSB0ZXh0dXJlIGFjY29yZGluZyB0byBpdHMgdW5kZXJseWluZyB0YXJnZXQuXHJcbiAqIEBwYXJhbSB0ZXh0dXJlIHRleHR1cmUgdG8gYmluZFxyXG4gKiBAcGFyYW0gZW5naW5lIHRoZSBlbmdpbmUgdG8gYmluZCB0aGUgdGV4dHVyZSBpblxyXG4gKi9cclxuY29uc3QgQmluZFRleHR1cmUgPSAodGV4dHVyZTogSW50ZXJuYWxUZXh0dXJlLCBlbmdpbmU6IEVuZ2luZSk6IHZvaWQgPT4ge1xyXG4gICAgbGV0IHRhcmdldDogR0xlbnVtID0gZW5naW5lLl9nbD8uVEVYVFVSRV8yRDtcclxuICAgIGlmICh0ZXh0dXJlLmlzQ3ViZSkge1xyXG4gICAgICAgIHRhcmdldCA9IGVuZ2luZS5fZ2w/LlRFWFRVUkVfQ1VCRV9NQVA7XHJcbiAgICB9XHJcblxyXG4gICAgZW5naW5lLl9iaW5kVGV4dHVyZURpcmVjdGx5KHRhcmdldCwgdGV4dHVyZSwgdHJ1ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZHMgYSB0ZXh0dXJlIGZyb20gdGhlIHRyYW5zY29kZSByZXN1bHRcclxuICogQHBhcmFtIHRleHR1cmUgdGV4dHVyZSBsb2FkIHRvXHJcbiAqIEBwYXJhbSB0cmFuc2NvZGVSZXN1bHQgdGhlIHJlc3VsdCBvZiB0cmFuc2NvZGluZyB0aGUgYmFzaXMgZmlsZSB0byBsb2FkIGZyb21cclxuICovXHJcbmV4cG9ydCBjb25zdCBMb2FkVGV4dHVyZUZyb21UcmFuc2NvZGVSZXN1bHQgPSAodGV4dHVyZTogSW50ZXJuYWxUZXh0dXJlLCB0cmFuc2NvZGVSZXN1bHQ6IFRyYW5zY29kZVJlc3VsdCkgPT4ge1xyXG4gICAgY29uc3QgZW5naW5lID0gdGV4dHVyZS5nZXRFbmdpbmUoKSBhcyBFbmdpbmU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYW5zY29kZVJlc3VsdC5maWxlSW5mby5pbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCByb290SW1hZ2UgPSB0cmFuc2NvZGVSZXN1bHQuZmlsZUluZm8uaW1hZ2VzW2ldLmxldmVsc1swXTtcclxuICAgICAgICB0ZXh0dXJlLl9pbnZlcnRWU2NhbGUgPSB0ZXh0dXJlLmludmVydFk7XHJcbiAgICAgICAgaWYgKHRyYW5zY29kZVJlc3VsdC5mb3JtYXQgPT09IC0xIHx8IHRyYW5zY29kZVJlc3VsdC5mb3JtYXQgPT09IEJBU0lTX0ZPUk1BVFMuY1RGUkdCNTY1KSB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvbXBhdGFibGUgY29tcHJlc3NlZCBmb3JtYXQgZm91bmQsIGZhbGxiYWNrIHRvIFJHQlxyXG4gICAgICAgICAgICB0ZXh0dXJlLnR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfU0hPUlRfNV82XzU7XHJcbiAgICAgICAgICAgIHRleHR1cmUuZm9ybWF0ID0gQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVuZ2luZS5fZmVhdHVyZXMuYmFzaXNOZWVkc1BPVCAmJiAoTWF0aC5sb2cyKHJvb3RJbWFnZS53aWR0aCkgJSAxICE9PSAwIHx8IE1hdGgubG9nMihyb290SW1hZ2UuaGVpZ2h0KSAlIDEgIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbm9uIHBvd2VyIG9mIHR3byB0ZXh0dXJlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBuZXcgSW50ZXJuYWxUZXh0dXJlKGVuZ2luZSwgSW50ZXJuYWxUZXh0dXJlU291cmNlLlRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHR1cmUuX2ludmVydFZTY2FsZSA9IHRleHR1cmUuaW52ZXJ0WTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS50eXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX1VOU0lHTkVEX1NIT1JUXzVfNl81O1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmZvcm1hdCA9IENvbnN0YW50cy5URVhUVVJFRk9STUFUX1JHQjtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHJlcXVpcmVzIGFsaWduZWQgd2lkdGgvaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBzb3VyY2Uud2lkdGggPSAocm9vdEltYWdlLndpZHRoICsgMykgJiB+MztcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5oZWlnaHQgPSAocm9vdEltYWdlLmhlaWdodCArIDMpICYgfjM7XHJcbiAgICAgICAgICAgICAgICBCaW5kVGV4dHVyZShzb3VyY2UsIGVuZ2luZSk7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmUuX3VwbG9hZERhdGFUb1RleHR1cmVEaXJlY3RseShzb3VyY2UsIG5ldyBVaW50MTZBcnJheShyb290SW1hZ2UudHJhbnNjb2RlZFBpeGVscy5idWZmZXIpLCBpLCAwLCBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0IsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2l6ZSB0byBwb3dlciBvZiB0d29cclxuICAgICAgICAgICAgICAgIGVuZ2luZS5fcmVzY2FsZVRleHR1cmUoc291cmNlLCB0ZXh0dXJlLCBlbmdpbmUuc2NlbmVzWzBdLCBlbmdpbmUuX2dldEludGVybmFsRm9ybWF0KENvbnN0YW50cy5URVhUVVJFRk9STUFUX1JHQiksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuX3JlbGVhc2VUZXh0dXJlKHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQmluZFRleHR1cmUodGV4dHVyZSwgZW5naW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgaXMgYWxyZWFkeSBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5faW52ZXJ0VlNjYWxlID0gIXRleHR1cmUuaW52ZXJ0WTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGxvYWQgZGlyZWN0bHlcclxuICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggPSAocm9vdEltYWdlLndpZHRoICsgMykgJiB+MztcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuaGVpZ2h0ID0gKHJvb3RJbWFnZS5oZWlnaHQgKyAzKSAmIH4zO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5zYW1wbGluZ01vZGUgPSBDb25zdGFudHMuVEVYVFVSRV9MSU5FQVJfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgQmluZFRleHR1cmUodGV4dHVyZSwgZW5naW5lKTtcclxuICAgICAgICAgICAgICAgIGVuZ2luZS5fdXBsb2FkRGF0YVRvVGV4dHVyZURpcmVjdGx5KHRleHR1cmUsIG5ldyBVaW50MTZBcnJheShyb290SW1hZ2UudHJhbnNjb2RlZFBpeGVscy5idWZmZXIpLCBpLCAwLCBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0IsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dHVyZS53aWR0aCA9IHJvb3RJbWFnZS53aWR0aDtcclxuICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgPSByb290SW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0ZXh0dXJlLmdlbmVyYXRlTWlwTWFwcyA9IHRyYW5zY29kZVJlc3VsdC5maWxlSW5mby5pbWFnZXNbaV0ubGV2ZWxzLmxlbmd0aCA+IDE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBCYXNpc1Rvb2xzLkdldEludGVybmFsRm9ybWF0RnJvbUJhc2lzRm9ybWF0KHRyYW5zY29kZVJlc3VsdC5mb3JtYXQsIGVuZ2luZSk7XHJcbiAgICAgICAgICAgIHRleHR1cmUuZm9ybWF0ID0gZm9ybWF0O1xyXG5cclxuICAgICAgICAgICAgQmluZFRleHR1cmUodGV4dHVyZSwgZW5naW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwbG9hZCBhbGwgbWlwIGxldmVscyBpbiB0aGUgZmlsZVxyXG4gICAgICAgICAgICBjb25zdCBsZXZlbHMgPSB0cmFuc2NvZGVSZXN1bHQuZmlsZUluZm8uaW1hZ2VzW2ldLmxldmVscztcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZXZlbHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBlbmdpbmUuX3VwbG9hZENvbXByZXNzZWREYXRhVG9UZXh0dXJlRGlyZWN0bHkodGV4dHVyZSwgZm9ybWF0LCBsZXZlbC53aWR0aCwgbGV2ZWwuaGVpZ2h0LCBsZXZlbC50cmFuc2NvZGVkUGl4ZWxzLCBpLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbmdpbmUuX2ZlYXR1cmVzLmJhc2lzTmVlZHNQT1QgJiYgKE1hdGgubG9nMih0ZXh0dXJlLndpZHRoKSAlIDEgIT09IDAgfHwgTWF0aC5sb2cyKHRleHR1cmUuaGVpZ2h0KSAlIDEgIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTG9hZGVkIC5iYXNpcyB0ZXh0dXJlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIG5vdCBhIHBvd2VyIG9mIHR3by4gVGV4dHVyZSB3cmFwcGluZyB3aWxsIGJlIHNldCB0byBUZXh0dXJlLkNMQU1QX0FERFJFU1NNT0RFIGFzIG90aGVyIG1vZGVzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggbm9uIHBvd2VyIG9mIHR3byBkaW1lbnNpb25zIGluIHdlYkdMIDEuXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLl9jYWNoZWRXcmFwVSA9IFRleHR1cmUuQ0xBTVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLl9jYWNoZWRXcmFwViA9IFRleHR1cmUuQ0xBTVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogVXNlZCB0byBsb2FkIC5CYXNpcyBmaWxlc1xyXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0Jpbm9taWFsTExDL2Jhc2lzX3VuaXZlcnNhbC90cmVlL21hc3Rlci93ZWJnbFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJhc2lzVG9vbHMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFVSTCB0byB1c2Ugd2hlbiBsb2FkaW5nIHRoZSBiYXNpcyB0cmFuc2NvZGVyXHJcbiAgICAgKi9cclxuICAgIEpTTW9kdWxlVVJMOiBCYXNpc1Rvb2xzT3B0aW9ucy5KU01vZHVsZVVSTCxcclxuICAgIC8qKlxyXG4gICAgICogVVJMIHRvIHVzZSB3aGVuIGxvYWRpbmcgdGhlIHdhc20gbW9kdWxlIGZvciB0aGUgdHJhbnNjb2RlclxyXG4gICAgICovXHJcbiAgICBXYXNtTW9kdWxlVVJMOiBCYXNpc1Rvb2xzT3B0aW9ucy5XYXNtTW9kdWxlVVJMLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnRlcm5hbCBmb3JtYXQgdG8gYmUgcGFzc2VkIHRvIHRleEltYWdlMkQgY29ycmVzcG9uZGluZyB0byB0aGUgLmJhc2lzIGZvcm1hdCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGJhc2lzRm9ybWF0IGZvcm1hdCBjaG9zZW4gZnJvbSBHZXRTdXBwb3J0ZWRUcmFuc2NvZGVGb3JtYXRcclxuICAgICAqIEByZXR1cm5zIGludGVybmFsIGZvcm1hdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBCYXNpcyBmb3JtYXRcclxuICAgICAqL1xyXG4gICAgR2V0SW50ZXJuYWxGb3JtYXRGcm9tQmFzaXNGb3JtYXQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2NvZGVzIGEgbG9hZGVkIGltYWdlIGZpbGUgdG8gY29tcHJlc3NlZCBwaXhlbCBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBpbWFnZSBkYXRhIHRvIHRyYW5zY29kZVxyXG4gICAgICogQHBhcmFtIGNvbmZpZyBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSB0cmFuc2NvZGluZ1xyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHJlc3VsdGluZyBpbiB0aGUgdHJhbnNjb2RlZCBpbWFnZVxyXG4gICAgICovXHJcbiAgICBUcmFuc2NvZGVBc3luYyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgdGV4dHVyZSBmcm9tIHRoZSB0cmFuc2NvZGUgcmVzdWx0XHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZSB0ZXh0dXJlIGxvYWQgdG9cclxuICAgICAqIEBwYXJhbSB0cmFuc2NvZGVSZXN1bHQgdGhlIHJlc3VsdCBvZiB0cmFuc2NvZGluZyB0aGUgYmFzaXMgZmlsZSB0byBsb2FkIGZyb21cclxuICAgICAqL1xyXG4gICAgTG9hZFRleHR1cmVGcm9tVHJhbnNjb2RlUmVzdWx0LFxyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2lzVG9vbHMsIFwiSlNNb2R1bGVVUkxcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBCYXNpc1Rvb2xzT3B0aW9ucy5KU01vZHVsZVVSTDtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0aGlzOiBudWxsLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgQmFzaXNUb29sc09wdGlvbnMuSlNNb2R1bGVVUkwgPSB2YWx1ZTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2lzVG9vbHMsIFwiV2FzbU1vZHVsZVVSTFwiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2lzVG9vbHNPcHRpb25zLldhc21Nb2R1bGVVUkw7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGhpczogbnVsbCwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIEJhc2lzVG9vbHNPcHRpb25zLldhc21Nb2R1bGVVUkwgPSB2YWx1ZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4vdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNpc0ZpbGVJbmZvLCBCYXNpc1RyYW5zY29kZUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9iYXNpc1wiO1xyXG5cclxuLy8gV29ya2VyR2xvYmFsU2NvcGVcclxuZGVjbGFyZSBmdW5jdGlvbiBpbXBvcnRTY3JpcHRzKC4uLnVybHM6IHN0cmluZ1tdKTogdm9pZDtcclxuZGVjbGFyZSBmdW5jdGlvbiBwb3N0TWVzc2FnZShtZXNzYWdlOiBhbnksIHRyYW5zZmVyPzogYW55W10pOiB2b2lkO1xyXG5kZWNsYXJlIGxldCBCQVNJUzogYW55O1xyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0aGF0IGdldHMgY29udmVydGVkIHRvIGEgYmxvYiB1cmwgdG8gcGFzcyBpbnRvIGEgd29ya2VyLlxyXG4gKiBUbyBiZSB1c2VkIGlmIGEgZGV2ZWxvcGVyIHdhbnRzIHRvIGNyZWF0ZSB0aGVpciBvd24gd29ya2VyIGluc3RhbmNlIGFuZCBpbmplY3QgaXQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCB3b3JrZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd29ya2VyRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBfQkFTSVNfRk9STUFUID0ge1xyXG4gICAgICAgIGNURkVUQzE6IDAsXHJcbiAgICAgICAgY1RGRVRDMjogMSxcclxuICAgICAgICBjVEZCQzE6IDIsXHJcbiAgICAgICAgY1RGQkMzOiAzLFxyXG4gICAgICAgIGNURkJDNDogNCxcclxuICAgICAgICBjVEZCQzU6IDUsXHJcbiAgICAgICAgY1RGQkM3OiA2LFxyXG4gICAgICAgIGNURlBWUlRDMV80X1JHQjogOCxcclxuICAgICAgICBjVEZQVlJUQzFfNF9SR0JBOiA5LFxyXG4gICAgICAgIGNURkFTVENfNHg0OiAxMCxcclxuICAgICAgICBjVEZBVENfUkdCOiAxMSxcclxuICAgICAgICBjVEZBVENfUkdCQV9JTlRFUlBPTEFURURfQUxQSEE6IDEyLFxyXG4gICAgICAgIGNURlJHQkEzMjogMTMsXHJcbiAgICAgICAgY1RGUkdCNTY1OiAxNCxcclxuICAgICAgICBjVEZCR1I1NjU6IDE1LFxyXG4gICAgICAgIGNURlJHQkE0NDQ0OiAxNixcclxuICAgICAgICBjVEZGWFQxX1JHQjogMTcsXHJcbiAgICAgICAgY1RGUFZSVEMyXzRfUkdCOiAxOCxcclxuICAgICAgICBjVEZQVlJUQzJfNF9SR0JBOiAxOSxcclxuICAgICAgICBjVEZFVEMyX0VBQ19SMTE6IDIwLFxyXG4gICAgICAgIGNURkVUQzJfRUFDX1JHMTE6IDIxLFxyXG4gICAgfTtcclxuICAgIGxldCB0cmFuc2NvZGVyTW9kdWxlUHJvbWlzZTogTnVsbGFibGU8UHJvbWlzZUxpa2U8YW55Pj4gPSBudWxsO1xyXG4gICAgb25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAvLyBMb2FkIHRoZSB0cmFuc2NvZGVyIGlmIGl0IGhhc24ndCBiZWVuIHlldFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS51cmwpIHtcclxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBsb2FkZWQgdGhlIHNjcmlwdCBjb3JyZWN0bHlcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhldmVudC5kYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBhY3Rpb246IFwiZXJyb3JcIiwgZXJyb3I6IGUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0cmFuc2NvZGVyTW9kdWxlUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNjb2Rlck1vZHVsZVByb21pc2UgPSBCQVNJUyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3ZlcnJpZGUgd2FzbSBiaW5hcnlcclxuICAgICAgICAgICAgICAgICAgICB3YXNtQmluYXJ5OiBldmVudC5kYXRhLndhc21CaW5hcnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJhbnNjb2Rlck1vZHVsZVByb21pc2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgdHJhbnNjb2Rlck1vZHVsZVByb21pc2UudGhlbigobSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEJBU0lTID0gbTtcclxuICAgICAgICAgICAgICAgICAgICBtLmluaXRpYWxpemVCYXNpcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgYWN0aW9uOiBcImluaXRcIiB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gXCJ0cmFuc2NvZGVcIikge1xyXG4gICAgICAgICAgICAvLyBUcmFuc2NvZGUgdGhlIGJhc2lzIGltYWdlIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBwaXhlbHNcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnOiBCYXNpc1RyYW5zY29kZUNvbmZpZ3VyYXRpb24gPSBldmVudC5kYXRhLmNvbmZpZztcclxuICAgICAgICAgICAgY29uc3QgaW1nRGF0YSA9IGV2ZW50LmRhdGEuaW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkZWRGaWxlID0gbmV3IEJBU0lTLkJhc2lzRmlsZShpbWdEYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZUluZm8gPSBHZXRGaWxlSW5mbyhsb2FkZWRGaWxlKTtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IGV2ZW50LmRhdGEuaWdub3JlU3VwcG9ydGVkRm9ybWF0cyA/IG51bGwgOiBHZXRTdXBwb3J0ZWRUcmFuc2NvZGVGb3JtYXQoZXZlbnQuZGF0YS5jb25maWcsIGZpbGVJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZWVkc0NvbnZlcnNpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmVlZHNDb252ZXJzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZpbGVJbmZvLmhhc0FscGhhID8gX0JBU0lTX0ZPUk1BVC5jVEZCQzMgOiBfQkFTSVNfRk9STUFULmNURkJDMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQmVnaW4gdHJhbnNjb2RlXHJcbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFsb2FkZWRGaWxlLnN0YXJ0VHJhbnNjb2RpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGltYWdlSW5kZXggPSAwOyBpbWFnZUluZGV4IDwgZmlsZUluZm8uaW1hZ2VzLmxlbmd0aDsgaW1hZ2VJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZmlsZUluZm8uaW1hZ2VzW2ltYWdlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5sb2FkU2luZ2xlSW1hZ2UgPT09IHVuZGVmaW5lZCB8fCBjb25maWcubG9hZFNpbmdsZUltYWdlID09PSBpbWFnZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pcENvdW50ID0gaW1hZ2UubGV2ZWxzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmxvYWRNaXBtYXBMZXZlbHMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pcENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGV2ZWxJbmRleCA9IDA7IGxldmVsSW5kZXggPCBtaXBDb3VudDsgbGV2ZWxJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsSW5mbyA9IGltYWdlLmxldmVsc1tsZXZlbEluZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IFRyYW5zY29kZUxldmVsKGxvYWRlZEZpbGUsIGltYWdlSW5kZXgsIGxldmVsSW5kZXgsIGZvcm1hdCwgbmVlZHNDb252ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5mby50cmFuc2NvZGVkUGl4ZWxzID0gcGl4ZWxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJzLnB1c2gobGV2ZWxJbmZvLnRyYW5zY29kZWRQaXhlbHMuYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2xvc2UgZmlsZVxyXG4gICAgICAgICAgICBsb2FkZWRGaWxlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGxvYWRlZEZpbGUuZGVsZXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmVlZHNDb252ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgYWN0aW9uOiBcInRyYW5zY29kZVwiLCBzdWNjZXNzOiBzdWNjZXNzLCBpZDogZXZlbnQuZGF0YS5pZCB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgYWN0aW9uOiBcInRyYW5zY29kZVwiLCBzdWNjZXNzOiBzdWNjZXNzLCBpZDogZXZlbnQuZGF0YS5pZCwgZmlsZUluZm86IGZpbGVJbmZvLCBmb3JtYXQ6IGZvcm1hdCB9LCBidWZmZXJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlY3RzIHRoZSBzdXBwb3J0ZWQgdHJhbnNjb2RlIGZvcm1hdCBmb3IgdGhlIGZpbGVcclxuICAgICAqIEBwYXJhbSBjb25maWcgdHJhbnNjb2RlIGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIGZpbGVJbmZvIGluZm8gYWJvdXQgdGhlIGZpbGVcclxuICAgICAqIEByZXR1cm5zIHRoZSBjaG9zZWQgZm9ybWF0IG9yIG51bGwgaWYgbm9uZSBhcmUgc3VwcG9ydGVkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEdldFN1cHBvcnRlZFRyYW5zY29kZUZvcm1hdChjb25maWc6IEJhc2lzVHJhbnNjb2RlQ29uZmlndXJhdGlvbiwgZmlsZUluZm86IEJhc2lzRmlsZUluZm8pOiBOdWxsYWJsZTxudW1iZXI+IHtcclxuICAgICAgICBsZXQgZm9ybWF0ID0gbnVsbDtcclxuICAgICAgICBpZiAoY29uZmlnLnN1cHBvcnRlZENvbXByZXNzaW9uRm9ybWF0cykge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnN1cHBvcnRlZENvbXByZXNzaW9uRm9ybWF0cy5hc3RjKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBfQkFTSVNfRk9STUFULmNURkFTVENfNHg0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5zdXBwb3J0ZWRDb21wcmVzc2lvbkZvcm1hdHMuYmM3KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBfQkFTSVNfRk9STUFULmNURkJDNztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcuc3VwcG9ydGVkQ29tcHJlc3Npb25Gb3JtYXRzLnMzdGMpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZpbGVJbmZvLmhhc0FscGhhID8gX0JBU0lTX0ZPUk1BVC5jVEZCQzMgOiBfQkFTSVNfRk9STUFULmNURkJDMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcuc3VwcG9ydGVkQ29tcHJlc3Npb25Gb3JtYXRzLnB2cnRjKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmaWxlSW5mby5oYXNBbHBoYSA/IF9CQVNJU19GT1JNQVQuY1RGUFZSVEMxXzRfUkdCQSA6IF9CQVNJU19GT1JNQVQuY1RGUFZSVEMxXzRfUkdCO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5zdXBwb3J0ZWRDb21wcmVzc2lvbkZvcm1hdHMuZXRjMikge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gX0JBU0lTX0ZPUk1BVC5jVEZFVEMyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5zdXBwb3J0ZWRDb21wcmVzc2lvbkZvcm1hdHMuZXRjMSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gX0JBU0lTX0ZPUk1BVC5jVEZFVEMxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gX0JBU0lTX0ZPUk1BVC5jVEZSR0I1NjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYmFzaXMgZmlsZSBlZy4gZGltZW5zaW9uc1xyXG4gICAgICogQHBhcmFtIGJhc2lzRmlsZSB0aGUgYmFzaXMgZmlsZSB0byBnZXQgdGhlIGluZm8gZnJvbVxyXG4gICAgICogQHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGJhc2lzIGZpbGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gR2V0RmlsZUluZm8oYmFzaXNGaWxlOiBhbnkpOiBCYXNpc0ZpbGVJbmZvIHtcclxuICAgICAgICBjb25zdCBoYXNBbHBoYSA9IGJhc2lzRmlsZS5nZXRIYXNBbHBoYSgpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlQ291bnQgPSBiYXNpc0ZpbGUuZ2V0TnVtSW1hZ2VzKCk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbXSBhcyBBcnJheTxhbnk+LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbENvdW50ID0gYmFzaXNGaWxlLmdldE51bUxldmVscyhpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbGV2ZWwgPSAwOyBsZXZlbCA8IGxldmVsQ291bnQ7IGxldmVsKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYmFzaXNGaWxlLmdldEltYWdlV2lkdGgoaSwgbGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYmFzaXNGaWxlLmdldEltYWdlSGVpZ2h0KGksIGxldmVsKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpbWFnZUluZm8ubGV2ZWxzLnB1c2gobGV2ZWxJbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWFnZXMucHVzaChpbWFnZUluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmZvID0geyBoYXNBbHBoYSwgaW1hZ2VzIH07XHJcbiAgICAgICAgcmV0dXJuIGluZm87XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gVHJhbnNjb2RlTGV2ZWwobG9hZGVkRmlsZTogYW55LCBpbWFnZUluZGV4OiBudW1iZXIsIGxldmVsSW5kZXg6IG51bWJlciwgZm9ybWF0OiBudW1iZXIsIGNvbnZlcnRUb1JnYjU2NTogYm9vbGVhbik6IE51bGxhYmxlPFVpbnQ4QXJyYXkgfCBVaW50MTZBcnJheT4ge1xyXG4gICAgICAgIGNvbnN0IGRzdFNpemUgPSBsb2FkZWRGaWxlLmdldEltYWdlVHJhbnNjb2RlZFNpemVJbkJ5dGVzKGltYWdlSW5kZXgsIGxldmVsSW5kZXgsIGZvcm1hdCk7XHJcbiAgICAgICAgbGV0IGRzdDogVWludDhBcnJheSB8IFVpbnQxNkFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZHN0U2l6ZSk7XHJcbiAgICAgICAgaWYgKCFsb2FkZWRGaWxlLnRyYW5zY29kZUltYWdlKGRzdCwgaW1hZ2VJbmRleCwgbGV2ZWxJbmRleCwgZm9ybWF0LCAxLCAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgbm8gc3VwcG9ydGVkIGZvcm1hdCBpcyBmb3VuZCwgbG9hZCBhcyBkeHQgYW5kIGNvbnZlcnQgdG8gcmdiNTY1XHJcbiAgICAgICAgaWYgKGNvbnZlcnRUb1JnYjU2NSkge1xyXG4gICAgICAgICAgICBjb25zdCBhbGlnbmVkV2lkdGggPSAobG9hZGVkRmlsZS5nZXRJbWFnZVdpZHRoKGltYWdlSW5kZXgsIGxldmVsSW5kZXgpICsgMykgJiB+MztcclxuICAgICAgICAgICAgY29uc3QgYWxpZ25lZEhlaWdodCA9IChsb2FkZWRGaWxlLmdldEltYWdlSGVpZ2h0KGltYWdlSW5kZXgsIGxldmVsSW5kZXgpICsgMykgJiB+MztcclxuICAgICAgICAgICAgZHN0ID0gQ29udmVydER4dFRvUmdiNTY1KGRzdCwgMCwgYWxpZ25lZFdpZHRoLCBhbGlnbmVkSGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0Jpbm9taWFsTExDL2Jhc2lzX3VuaXZlcnNhbC9ibG9iL21hc3Rlci93ZWJnbC90ZXh0dXJlL2R4dC10by1yZ2I1NjUuanNcclxuICAgICAqIEFuIHVub3B0aW1pemVkIHZlcnNpb24gb2YgZHh0VG9SZ2I1NjUuICBBbHNvLCB0aGUgZmxvYXRpbmdcclxuICAgICAqIHBvaW50IG1hdGggdXNlZCB0byBjb21wdXRlIHRoZSBjb2xvcnMgYWN0dWFsbHkgcmVzdWx0cyBpblxyXG4gICAgICogc2xpZ2h0bHkgZGlmZmVyZW50IGNvbG9ycyBjb21wYXJlZCB0byBoYXJkd2FyZSBEWFQgZGVjb2RlcnMuXHJcbiAgICAgKiBAcGFyYW0gc3JjIGR4dCBzcmMgcGl4ZWxzXHJcbiAgICAgKiBAcGFyYW0gc3JjQnl0ZU9mZnNldCBvZmZzZXQgZm9yIHRoZSBzdGFydCBvZiBzcmNcclxuICAgICAqIEBwYXJhbSAgd2lkdGggYWxpZ25lZCB3aWR0aCBvZiB0aGUgaW1hZ2VcclxuICAgICAqIEBwYXJhbSAgaGVpZ2h0IGFsaWduZWQgaGVpZ2h0IG9mIHRoZSBpbWFnZVxyXG4gICAgICogQHJldHVybnMgdGhlIGNvbnZlcnRlZCBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29udmVydER4dFRvUmdiNTY1KHNyYzogVWludDhBcnJheSwgc3JjQnl0ZU9mZnNldDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFVpbnQxNkFycmF5IHtcclxuICAgICAgICBjb25zdCBjID0gbmV3IFVpbnQxNkFycmF5KDQpO1xyXG4gICAgICAgIGNvbnN0IGRzdCA9IG5ldyBVaW50MTZBcnJheSh3aWR0aCAqIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2NrV2lkdGggPSB3aWR0aCAvIDQ7XHJcbiAgICAgICAgY29uc3QgYmxvY2tIZWlnaHQgPSBoZWlnaHQgLyA0O1xyXG4gICAgICAgIGZvciAobGV0IGJsb2NrWSA9IDA7IGJsb2NrWSA8IGJsb2NrSGVpZ2h0OyBibG9ja1krKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBibG9ja1ggPSAwOyBibG9ja1ggPCBibG9ja1dpZHRoOyBibG9ja1grKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IHNyY0J5dGVPZmZzZXQgKyA4ICogKGJsb2NrWSAqIGJsb2NrV2lkdGggKyBibG9ja1gpO1xyXG4gICAgICAgICAgICAgICAgY1swXSA9IHNyY1tpXSB8IChzcmNbaSArIDFdIDw8IDgpO1xyXG4gICAgICAgICAgICAgICAgY1sxXSA9IHNyY1tpICsgMl0gfCAoc3JjW2kgKyAzXSA8PCA4KTtcclxuICAgICAgICAgICAgICAgIGNbMl0gPVxyXG4gICAgICAgICAgICAgICAgICAgICgoMiAqIChjWzBdICYgMHgxZikgKyAxICogKGNbMV0gJiAweDFmKSkgLyAzKSB8XHJcbiAgICAgICAgICAgICAgICAgICAgKCgoMiAqIChjWzBdICYgMHg3ZTApICsgMSAqIChjWzFdICYgMHg3ZTApKSAvIDMpICYgMHg3ZTApIHxcclxuICAgICAgICAgICAgICAgICAgICAoKCgyICogKGNbMF0gJiAweGY4MDApICsgMSAqIChjWzFdICYgMHhmODAwKSkgLyAzKSAmIDB4ZjgwMCk7XHJcbiAgICAgICAgICAgICAgICBjWzNdID1cclxuICAgICAgICAgICAgICAgICAgICAoKDIgKiAoY1sxXSAmIDB4MWYpICsgMSAqIChjWzBdICYgMHgxZikpIC8gMykgfFxyXG4gICAgICAgICAgICAgICAgICAgICgoKDIgKiAoY1sxXSAmIDB4N2UwKSArIDEgKiAoY1swXSAmIDB4N2UwKSkgLyAzKSAmIDB4N2UwKSB8XHJcbiAgICAgICAgICAgICAgICAgICAgKCgoMiAqIChjWzFdICYgMHhmODAwKSArIDEgKiAoY1swXSAmIDB4ZjgwMCkpIC8gMykgJiAweGY4MDApO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gc3JjW2kgKyA0ICsgcm93XTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHN0SSA9IChibG9ja1kgKiA0ICsgcm93KSAqIHdpZHRoICsgYmxvY2tYICogNDtcclxuICAgICAgICAgICAgICAgICAgICBkc3RbZHN0SSsrXSA9IGNbbSAmIDB4M107XHJcbiAgICAgICAgICAgICAgICAgICAgZHN0W2RzdEkrK10gPSBjWyhtID4+IDIpICYgMHgzXTtcclxuICAgICAgICAgICAgICAgICAgICBkc3RbZHN0SSsrXSA9IGNbKG0gPj4gNCkgJiAweDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRzdFtkc3RJKytdID0gY1sobSA+PiA2KSAmIDB4M107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRzdDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSB3ZWIgd29ya2VyIHdpdGggdGhlIGJhc2lzIHRyYW5zY29kZXJcclxuICogQHBhcmFtIHdvcmtlciB0aGUgd29ya2VyIHRvIGluaXRpYWxpemVcclxuICogQHBhcmFtIHdhc21CaW5hcnkgdGhlIHdhc20gYmluYXJ5IHRvIGxvYWQgaW50byB0aGUgd29ya2VyXHJcbiAqIEBwYXJhbSBtb2R1bGVVcmwgdGhlIHVybCB0byB0aGUgYmFzaXMgdHJhbnNjb2RlciBtb2R1bGVcclxuICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgd29ya2VyIGlzIGluaXRpYWxpemVkXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVXZWJXb3JrZXIod29ya2VyOiBXb3JrZXIsIHdhc21CaW5hcnk6IEFycmF5QnVmZmVyLCBtb2R1bGVVcmw/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxXb3JrZXI+KChyZXMsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluaXRIYW5kbGVyID0gKG1zZzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtc2cuZGF0YS5hY3Rpb24gPT09IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaW5pdEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgcmVzKHdvcmtlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobXNnLmRhdGEuYWN0aW9uID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG1zZy5kYXRhLmVycm9yIHx8IFwiZXJyb3IgaW5pdGlhbGl6aW5nIHdvcmtlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGluaXRIYW5kbGVyKTtcclxuICAgICAgICAvLyB3ZSBjYW4gdXNlIHRyYW5zZmVyYWJsZSBvYmplY3RzIGhlcmUgYmVjYXVzZSB0aGUgd29ya2VyIHdpbGwgb3duIHRoZSBBcnJheUJ1ZmZlclxyXG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGFjdGlvbjogXCJpbml0XCIsIHVybDogbW9kdWxlVXJsID8gVG9vbHMuR2V0QmFieWxvblNjcmlwdFVSTChtb2R1bGVVcmwpIDogdW5kZWZpbmVkLCB3YXNtQmluYXJ5IH0sIFt3YXNtQmluYXJ5XSk7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=