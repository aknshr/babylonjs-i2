"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_draco_mesh_compression_js"],{

/***/ "../core/dist/Meshes/Compression/dracoCodec.js":
/*!*****************************************************!*\
  !*** ../core/dist/Meshes/Compression/dracoCodec.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DracoCodec: () => (/* binding */ DracoCodec),
/* harmony export */   _GetDefaultNumWorkers: () => (/* binding */ _GetDefaultNumWorkers),
/* harmony export */   _IsConfigurationAvailable: () => (/* binding */ _IsConfigurationAvailable)
/* harmony export */ });
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _Misc_workerPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/workerPool */ "../core/dist/Misc/workerPool.js");
/* harmony import */ var _dracoCompressionWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dracoCompressionWorker */ "../core/dist/Meshes/Compression/dracoCompressionWorker.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * @internal
 */
function _GetDefaultNumWorkers() {
    if (typeof navigator !== "object" || !navigator.hardwareConcurrency) {
        return 1;
    }
    // Use 50% of the available logical processors but capped at 4.
    return Math.min(Math.floor(navigator.hardwareConcurrency * 0.5), 4);
}
/**
 * @internal
 */
function _IsConfigurationAvailable(config) {
    return !!((config.wasmUrl && (config.wasmBinary || config.wasmBinaryUrl) && typeof WebAssembly === "object") || config.fallbackUrl);
    // TODO: Account for jsModule
}
/**
 * Base class for a Draco codec.
 * @internal
 */
class DracoCodec {
    /**
     * Constructor
     * @param configuration The configuration for the DracoCodec instance.
     */
    constructor(configuration) {
        // check if the codec binary and worker pool was injected
        // Note - it is expected that the developer checked if WebWorker, WebAssembly and the URL object are available
        if (configuration.workerPool) {
            // Set the promise accordingly
            this._workerPoolPromise = Promise.resolve(configuration.workerPool);
            return;
        }
        // to avoid making big changes to the code here, if wasmBinary is provided use it in the wasmBinaryPromise
        const wasmBinaryProvided = configuration.wasmBinary;
        const numberOfWorkers = configuration.numWorkers ?? _GetDefaultNumWorkers();
        const useWorkers = numberOfWorkers && typeof Worker === "function" && typeof URL === "function";
        const urlNeeded = useWorkers || !configuration.jsModule;
        // code maintained here for back-compat with no changes
        const codecInfo = configuration.wasmUrl && configuration.wasmBinaryUrl && typeof WebAssembly === "object"
            ? {
                url: urlNeeded ? _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(configuration.wasmUrl, true) : "",
                wasmBinaryPromise: wasmBinaryProvided
                    ? Promise.resolve(wasmBinaryProvided)
                    : _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadFileAsync(_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(configuration.wasmBinaryUrl, true)),
            }
            : {
                url: urlNeeded ? _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(configuration.fallbackUrl) : "",
                wasmBinaryPromise: Promise.resolve(undefined),
            };
        // If using workers, initialize a worker pool with either the wasm or url?
        if (useWorkers) {
            // eslint-disable-next-line github/no-then
            this._workerPoolPromise = codecInfo.wasmBinaryPromise.then((wasmBinary) => {
                const workerContent = this._getWorkerContent();
                const workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: "application/javascript" }));
                // eslint-disable-next-line @typescript-eslint/promise-function-async
                return new _Misc_workerPool__WEBPACK_IMPORTED_MODULE_1__.AutoReleaseWorkerPool(numberOfWorkers, () => {
                    const worker = new Worker(workerBlobUrl);
                    return (0,_dracoCompressionWorker__WEBPACK_IMPORTED_MODULE_2__.initializeWebWorker)(worker, wasmBinary, codecInfo.url);
                });
            });
        }
        else {
            // eslint-disable-next-line github/no-then
            this._modulePromise = codecInfo.wasmBinaryPromise.then(async (wasmBinary) => {
                if (!this._isModuleAvailable()) {
                    if (!configuration.jsModule) {
                        if (!codecInfo.url) {
                            throw new Error("Draco codec module is not available");
                        }
                        await _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(codecInfo.url);
                    }
                }
                return await this._createModuleAsync(wasmBinary, configuration.jsModule);
            });
        }
    }
    /**
     * Returns a promise that resolves when ready. Call this manually to ensure the draco codec is ready before use.
     * @returns a promise that resolves when ready
     */
    async whenReadyAsync() {
        if (this._workerPoolPromise) {
            await this._workerPoolPromise;
            return;
        }
        if (this._modulePromise) {
            await this._modulePromise;
            return;
        }
    }
    /**
     * Stop all async operations and release resources.
     */
    dispose() {
        if (this._workerPoolPromise) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._workerPoolPromise.then((workerPool) => {
                workerPool.dispose();
            });
        }
        delete this._workerPoolPromise;
        delete this._modulePromise;
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

/***/ "../core/dist/Meshes/Compression/dracoCompressionWorker.js":
/*!*****************************************************************!*\
  !*** ../core/dist/Meshes/Compression/dracoCompressionWorker.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecodeMesh: () => (/* binding */ DecodeMesh),
/* harmony export */   DecoderWorkerFunction: () => (/* binding */ DecoderWorkerFunction),
/* harmony export */   EncodeMesh: () => (/* binding */ EncodeMesh),
/* harmony export */   EncoderWorkerFunction: () => (/* binding */ EncoderWorkerFunction),
/* harmony export */   initializeWebWorker: () => (/* binding */ initializeWebWorker),
/* harmony export */   workerFunction: () => (/* binding */ DecoderWorkerFunction)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * @internal
 */
function EncodeMesh(module /** EncoderModule */, attributes, indices, options) {
    const encoderModule = module;
    let encoder = null;
    let meshBuilder = null;
    let mesh = null;
    let encodedNativeBuffer = null;
    const attributeIDs = {}; // Babylon kind -> Draco unique id
    // Double-check that at least a position attribute is provided
    const positionAttribute = attributes.find((a) => a.dracoName === "POSITION");
    if (!positionAttribute) {
        throw new Error("Position attribute is required for Draco encoding");
    }
    // If no indices are provided, assume mesh is unindexed. Let's generate them, since Draco meshes require them.
    // TODO: This may be the POINT_CLOUD case, but need to investigate. Should work for now-- just less efficient.
    if (!indices) {
        // Assume position attribute is the largest attribute.
        const positionVerticesCount = positionAttribute.data.length / positionAttribute.size;
        indices = new (positionVerticesCount > 65535 ? Uint32Array : Uint16Array)(positionVerticesCount);
        for (let i = 0; i < positionVerticesCount; i++) {
            indices[i] = i;
        }
    }
    try {
        encoder = new encoderModule.Encoder();
        meshBuilder = new encoderModule.MeshBuilder();
        mesh = new encoderModule.Mesh();
        // Add the faces
        meshBuilder.AddFacesToMesh(mesh, indices.length / 3, indices);
        const addAttributeMap = new Map([
            [Float32Array, (mb, m, a, c, s, d) => mb.AddFloatAttribute(m, a, c, s, d)],
            [Uint32Array, (mb, m, a, c, s, d) => mb.AddUInt32Attribute(m, a, c, s, d)],
            [Uint16Array, (mb, m, a, c, s, d) => mb.AddUInt16Attribute(m, a, c, s, d)],
            [Uint8Array, (mb, m, a, c, s, d) => mb.AddUInt8Attribute(m, a, c, s, d)],
            [Int32Array, (mb, m, a, c, s, d) => mb.AddInt32Attribute(m, a, c, s, d)],
            [Int16Array, (mb, m, a, c, s, d) => mb.AddInt16Attribute(m, a, c, s, d)],
            [Int8Array, (mb, m, a, c, s, d) => mb.AddInt8Attribute(m, a, c, s, d)],
        ]);
        // Add the attributes
        for (const attribute of attributes) {
            if (attribute.data instanceof Uint8ClampedArray) {
                attribute.data = new Uint8Array(attribute.data); // Draco does not support Uint8ClampedArray
            }
            const addAttribute = addAttributeMap.get(attribute.data.constructor);
            const verticesCount = attribute.data.length / attribute.size;
            attributeIDs[attribute.kind] = addAttribute(meshBuilder, mesh, encoderModule[attribute.dracoName], verticesCount, attribute.size, attribute.data);
            if (options.quantizationBits && options.quantizationBits[attribute.dracoName]) {
                encoder.SetAttributeQuantization(encoderModule[attribute.dracoName], options.quantizationBits[attribute.dracoName]);
            }
        }
        // Set the options
        if (options.method) {
            encoder.SetEncodingMethod(encoderModule[options.method]);
        }
        if (options.encodeSpeed !== undefined && options.decodeSpeed !== undefined) {
            encoder.SetSpeedOptions(options.encodeSpeed, options.decodeSpeed);
        }
        // Encode to native buffer
        encodedNativeBuffer = new encoderModule.DracoInt8Array();
        const encodedLength = encoder.EncodeMeshToDracoBuffer(mesh, encodedNativeBuffer);
        if (encodedLength <= 0) {
            throw new Error("Draco encoding failed.");
        }
        // Copy the native buffer data to worker heap
        const encodedData = new Int8Array(encodedLength);
        for (let i = 0; i < encodedLength; i++) {
            encodedData[i] = encodedNativeBuffer.GetValue(i);
        }
        return { data: encodedData, attributeIds: attributeIDs };
    }
    finally {
        if (mesh) {
            encoderModule.destroy(mesh);
        }
        if (meshBuilder) {
            encoderModule.destroy(meshBuilder);
        }
        if (encoder) {
            encoderModule.destroy(encoder);
        }
        if (encodedNativeBuffer) {
            encoderModule.destroy(encodedNativeBuffer);
        }
    }
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 * To be used if a developer wants to create their own worker instance and inject it instead of using the default worker.
 */
function EncoderWorkerFunction() {
    let encoderPromise;
    onmessage = (event) => {
        const message = event.data;
        switch (message.id) {
            case "init": {
                // if URL is provided then load the script. Otherwise expect the script to be loaded already
                if (message.url) {
                    importScripts(message.url);
                }
                const initEncoderObject = message.wasmBinary ? { wasmBinary: message.wasmBinary } : {};
                encoderPromise = DracoEncoderModule(initEncoderObject);
                postMessage({ id: "initDone" });
                break;
            }
            case "encodeMesh": {
                if (!encoderPromise) {
                    throw new Error("Draco encoder module is not available");
                }
                // eslint-disable-next-line github/no-then
                encoderPromise.then((encoder) => {
                    const result = EncodeMesh(encoder, message.attributes, message.indices, message.options);
                    postMessage({ id: "encodeMeshDone", encodedMeshData: result }, result ? [result.data.buffer] : undefined);
                });
                break;
            }
        }
    };
}
/**
 * @internal
 */
function DecodeMesh(module /** DecoderModule */, data, attributeIDs, onIndicesData, onAttributeData) {
    const decoderModule = module;
    let decoder = null;
    let buffer = null;
    let geometry = null;
    try {
        decoder = new decoderModule.Decoder();
        buffer = new decoderModule.DecoderBuffer();
        buffer.Init(data, data.byteLength);
        let status;
        const type = decoder.GetEncodedGeometryType(buffer);
        switch (type) {
            case decoderModule.TRIANGULAR_MESH: {
                const mesh = new decoderModule.Mesh();
                status = decoder.DecodeBufferToMesh(buffer, mesh);
                if (!status.ok() || mesh.ptr === 0) {
                    throw new Error(status.error_msg());
                }
                const numFaces = mesh.num_faces();
                const numIndices = numFaces * 3;
                const byteLength = numIndices * 4;
                const ptr = decoderModule._malloc(byteLength);
                try {
                    decoder.GetTrianglesUInt32Array(mesh, byteLength, ptr);
                    const indices = new Uint32Array(numIndices);
                    indices.set(new Uint32Array(decoderModule.HEAPF32.buffer, ptr, numIndices));
                    onIndicesData(indices);
                }
                finally {
                    decoderModule._free(ptr);
                }
                geometry = mesh;
                break;
            }
            case decoderModule.POINT_CLOUD: {
                const pointCloud = new decoderModule.PointCloud();
                status = decoder.DecodeBufferToPointCloud(buffer, pointCloud);
                if (!status.ok() || !pointCloud.ptr) {
                    throw new Error(status.error_msg());
                }
                geometry = pointCloud;
                break;
            }
            default: {
                throw new Error(`Invalid geometry type ${type}`);
            }
        }
        const numPoints = geometry.num_points();
        const processAttribute = (decoder, geometry, kind, attribute /** Attribute */) => {
            const dataType = attribute.data_type();
            const numComponents = attribute.num_components();
            const normalized = attribute.normalized();
            const byteStride = attribute.byte_stride();
            const byteOffset = attribute.byte_offset();
            const dataTypeInfo = {
                [decoderModule.DT_FLOAT32]: { typedArrayConstructor: Float32Array, heap: decoderModule.HEAPF32 },
                [decoderModule.DT_INT8]: { typedArrayConstructor: Int8Array, heap: decoderModule.HEAP8 },
                [decoderModule.DT_INT16]: { typedArrayConstructor: Int16Array, heap: decoderModule.HEAP16 },
                [decoderModule.DT_INT32]: { typedArrayConstructor: Int32Array, heap: decoderModule.HEAP32 },
                [decoderModule.DT_UINT8]: { typedArrayConstructor: Uint8Array, heap: decoderModule.HEAPU8 },
                [decoderModule.DT_UINT16]: { typedArrayConstructor: Uint16Array, heap: decoderModule.HEAPU16 },
                [decoderModule.DT_UINT32]: { typedArrayConstructor: Uint32Array, heap: decoderModule.HEAPU32 },
            };
            const info = dataTypeInfo[dataType];
            if (!info) {
                throw new Error(`Invalid data type ${dataType}`);
            }
            const numValues = numPoints * numComponents;
            const byteLength = numValues * info.typedArrayConstructor.BYTES_PER_ELEMENT;
            const ptr = decoderModule._malloc(byteLength);
            try {
                decoder.GetAttributeDataArrayForAllPoints(geometry, attribute, dataType, byteLength, ptr);
                const data = new info.typedArrayConstructor(info.heap.buffer, ptr, numValues);
                onAttributeData(kind, data.slice(), numComponents, byteOffset, byteStride, normalized);
            }
            finally {
                decoderModule._free(ptr);
            }
        };
        if (attributeIDs) {
            for (const kind in attributeIDs) {
                const id = attributeIDs[kind];
                const attribute = decoder.GetAttributeByUniqueId(geometry, id);
                processAttribute(decoder, geometry, kind, attribute);
            }
        }
        else {
            const dracoAttributeTypes = {
                position: decoderModule.POSITION,
                normal: decoderModule.NORMAL,
                color: decoderModule.COLOR,
                uv: decoderModule.TEX_COORD,
            };
            for (const kind in dracoAttributeTypes) {
                const id = decoder.GetAttributeId(geometry, dracoAttributeTypes[kind]);
                if (id !== -1) {
                    const attribute = decoder.GetAttribute(geometry, id);
                    processAttribute(decoder, geometry, kind, attribute);
                }
            }
        }
        return numPoints;
    }
    finally {
        if (geometry) {
            decoderModule.destroy(geometry);
        }
        if (buffer) {
            decoderModule.destroy(buffer);
        }
        if (decoder) {
            decoderModule.destroy(decoder);
        }
    }
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 * To be used if a developer wants to create their own worker instance and inject it instead of using the default worker.
 */
function DecoderWorkerFunction() {
    let decoderPromise;
    onmessage = (event) => {
        const message = event.data;
        switch (message.id) {
            case "init": {
                // if URL is provided then load the script. Otherwise expect the script to be loaded already
                if (message.url) {
                    importScripts(message.url);
                }
                const initDecoderObject = message.wasmBinary ? { wasmBinary: message.wasmBinary } : {};
                decoderPromise = DracoDecoderModule(initDecoderObject);
                postMessage({ id: "initDone" });
                break;
            }
            case "decodeMesh": {
                if (!decoderPromise) {
                    throw new Error("Draco decoder module is not available");
                }
                // eslint-disable-next-line github/no-then
                decoderPromise.then((decoder) => {
                    const numPoints = DecodeMesh(decoder, message.dataView, message.attributes, (indices) => {
                        postMessage({ id: "indices", data: indices }, [indices.buffer]);
                    }, (kind, data, size, offset, stride, normalized) => {
                        postMessage({ id: "attribute", kind, data, size, byteOffset: offset, byteStride: stride, normalized }, [data.buffer]);
                    });
                    postMessage({ id: "decodeMeshDone", totalVertices: numPoints });
                });
                break;
            }
        }
    };
}
// For backwards compatibility

/**
 * Initializes a worker that was created for the draco agent pool
 * @param worker  The worker to initialize
 * @param wasmBinary The wasm binary to load into the worker
 * @param moduleUrl The url to the draco decoder module (optional)
 * @returns A promise that resolves when the worker is initialized
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
async function initializeWebWorker(worker, wasmBinary, moduleUrl) {
    return await new Promise((resolve, reject) => {
        const onError = (error) => {
            worker.removeEventListener("error", onError);
            worker.removeEventListener("message", onMessage);
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(error);
        };
        const onMessage = (event) => {
            if (event.data.id === "initDone") {
                worker.removeEventListener("error", onError);
                worker.removeEventListener("message", onMessage);
                resolve(worker);
            }
        };
        worker.addEventListener("error", onError);
        worker.addEventListener("message", onMessage);
        // Load with either JS-only or WASM version
        if (!wasmBinary) {
            worker.postMessage({
                id: "init",
                url: moduleUrl,
            });
        }
        else {
            // clone the array buffer to make it transferable
            const clone = wasmBinary.slice(0);
            worker.postMessage({
                id: "init",
                url: moduleUrl,
                wasmBinary: clone,
            }, [clone]);
        }
        // note: no transfer list as the ArrayBuffer is shared across main thread and pool workers
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

/***/ }),

/***/ "../core/dist/Meshes/Compression/dracoDecoder.js":
/*!*******************************************************!*\
  !*** ../core/dist/Meshes/Compression/dracoDecoder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DracoDecoder: () => (/* binding */ DracoDecoder)
/* harmony export */ });
/* harmony import */ var _dracoCodec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dracoCodec */ "../core/dist/Meshes/Compression/dracoCodec.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "../core/dist/Meshes/geometry.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffer */ "../core/dist/Meshes/buffer.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _dracoCompressionWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dracoCompressionWorker */ "../core/dist/Meshes/Compression/dracoCompressionWorker.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * @experimental This class is an experimental version of `DracoCompression` and is subject to change.
 *
 * Draco Decoder (https://google.github.io/draco/)
 *
 * This class wraps the Draco decoder module.
 *
 * By default, the configuration points to a copy of the Draco decoder files for glTF from the Babylon.js cdn https://cdn.babylonjs.com/draco_wasm_wrapper_gltf.js.
 *
 * To update the configuration, use the following code:
 * ```javascript
 *     DracoDecoder.DefaultConfiguration = {
 *          wasmUrl: "<url to the WebAssembly library>",
 *          wasmBinaryUrl: "<url to the WebAssembly binary>",
 *          fallbackUrl: "<url to the fallback JavaScript library>",
 *     };
 * ```
 *
 * Draco has two versions, one for WebAssembly and one for JavaScript. The decoder configuration can be set to only support WebAssembly or only support the JavaScript version.
 * Decoding will automatically fallback to the JavaScript version if WebAssembly version is not configured or if WebAssembly is not supported by the browser.
 * Use `DracoDecoder.DefaultAvailable` to determine if the decoder configuration is available for the current context.
 *
 * To decode Draco compressed data, get the default DracoDecoder object and call decodeMeshToGeometryAsync:
 * ```javascript
 *     var geometry = await DracoDecoder.Default.decodeMeshToGeometryAsync(data);
 * ```
 */
class DracoDecoder extends _dracoCodec__WEBPACK_IMPORTED_MODULE_0__.DracoCodec {
    /**
     * Returns true if the decoder's `DefaultConfiguration` is available.
     */
    static get DefaultAvailable() {
        return (0,_dracoCodec__WEBPACK_IMPORTED_MODULE_0__._IsConfigurationAvailable)(DracoDecoder.DefaultConfiguration);
    }
    /**
     * Default instance for the DracoDecoder.
     */
    static get Default() {
        DracoDecoder._Default ??= new DracoDecoder();
        return DracoDecoder._Default;
    }
    /**
     * Reset the default DracoDecoder object to null and disposing the removed default instance.
     * Note that if the workerPool is a member of the static DefaultConfiguration object it is recommended not to run dispose,
     * unless the static worker pool is no longer needed.
     * @param skipDispose set to true to not dispose the removed default instance
     */
    static ResetDefault(skipDispose) {
        if (DracoDecoder._Default) {
            if (!skipDispose) {
                DracoDecoder._Default.dispose();
            }
            DracoDecoder._Default = null;
        }
    }
    _isModuleAvailable() {
        return typeof DracoDecoderModule !== "undefined";
    }
    async _createModuleAsync(wasmBinary, jsModule /** DracoDecoderModule */) {
        const module = await (jsModule || DracoDecoderModule)({ wasmBinary });
        return { module };
    }
    _getWorkerContent() {
        return `${_dracoCompressionWorker__WEBPACK_IMPORTED_MODULE_5__.DecodeMesh}(${_dracoCompressionWorker__WEBPACK_IMPORTED_MODULE_5__.DecoderWorkerFunction})()`;
    }
    /**
     * Creates a new Draco decoder.
     * @param configuration Optional override of the configuration for the DracoDecoder. If not provided, defaults to {@link DracoDecoder.DefaultConfiguration}.
     */
    constructor(configuration = DracoDecoder.DefaultConfiguration) {
        super(configuration);
    }
    /**
     * Decode Draco compressed mesh data to mesh data.
     * @param data The ArrayBuffer or ArrayBufferView of the compressed Draco data
     * @param attributes A map of attributes from vertex buffer kinds to Draco unique ids
     * @param gltfNormalizedOverride A map of attributes from vertex buffer kinds to normalized flags to override the Draco normalization
     * @returns A promise that resolves with the decoded mesh data
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    decodeMeshToMeshDataAsync(data, attributes, gltfNormalizedOverride) {
        const dataView = data instanceof ArrayBuffer ? new Int8Array(data) : new Int8Array(data.buffer, data.byteOffset, data.byteLength);
        const applyGltfNormalizedOverride = (kind, normalized) => {
            if (gltfNormalizedOverride && gltfNormalizedOverride[kind] !== undefined) {
                if (normalized !== gltfNormalizedOverride[kind]) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warn(`Normalized flag from Draco data (${normalized}) does not match normalized flag from glTF accessor (${gltfNormalizedOverride[kind]}). Using flag from glTF accessor.`);
                }
                return gltfNormalizedOverride[kind];
            }
            else {
                return normalized;
            }
        };
        if (this._workerPoolPromise) {
            // eslint-disable-next-line github/no-then
            return this._workerPoolPromise.then(async (workerPool) => {
                return await new Promise((resolve, reject) => {
                    workerPool.push((worker, onComplete) => {
                        let resultIndices = null;
                        const resultAttributes = [];
                        const onError = (error) => {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(error);
                            onComplete();
                        };
                        const onMessage = (event) => {
                            const message = event.data;
                            switch (message.id) {
                                case "indices": {
                                    resultIndices = message.data;
                                    break;
                                }
                                case "attribute": {
                                    resultAttributes.push({
                                        kind: message.kind,
                                        data: message.data,
                                        size: message.size,
                                        byteOffset: message.byteOffset,
                                        byteStride: message.byteStride,
                                        normalized: applyGltfNormalizedOverride(message.kind, message.normalized),
                                    });
                                    break;
                                }
                                case "decodeMeshDone": {
                                    worker.removeEventListener("error", onError);
                                    worker.removeEventListener("message", onMessage);
                                    resolve({ indices: resultIndices, attributes: resultAttributes, totalVertices: message.totalVertices });
                                    onComplete();
                                    break;
                                }
                            }
                        };
                        worker.addEventListener("error", onError);
                        worker.addEventListener("message", onMessage);
                        const dataViewCopy = dataView.slice();
                        worker.postMessage({ id: "decodeMesh", dataView: dataViewCopy, attributes: attributes }, [dataViewCopy.buffer]);
                    });
                });
            });
        }
        if (this._modulePromise) {
            // eslint-disable-next-line github/no-then
            return this._modulePromise.then((decoder) => {
                let resultIndices = null;
                const resultAttributes = [];
                const numPoints = (0,_dracoCompressionWorker__WEBPACK_IMPORTED_MODULE_5__.DecodeMesh)(decoder.module, dataView, attributes, (indices) => {
                    resultIndices = indices;
                }, (kind, data, size, byteOffset, byteStride, normalized) => {
                    resultAttributes.push({
                        kind,
                        data,
                        size,
                        byteOffset,
                        byteStride,
                        normalized,
                    });
                });
                return { indices: resultIndices, attributes: resultAttributes, totalVertices: numPoints };
            });
        }
        throw new Error("Draco decoder module is not available");
    }
    /**
     * Decode Draco compressed mesh data to Babylon geometry.
     * @param name The name to use when creating the geometry
     * @param scene The scene to use when creating the geometry
     * @param data The ArrayBuffer or ArrayBufferView of the Draco compressed data
     * @param attributes A map of attributes from vertex buffer kinds to Draco unique ids
     * @returns A promise that resolves with the decoded geometry
     */
    async decodeMeshToGeometryAsync(name, scene, data, attributes) {
        const meshData = await this.decodeMeshToMeshDataAsync(data, attributes);
        const geometry = new _geometry__WEBPACK_IMPORTED_MODULE_2__.Geometry(name, scene);
        if (meshData.indices) {
            geometry.setIndices(meshData.indices);
        }
        for (const attribute of meshData.attributes) {
            geometry.setVerticesBuffer(new _buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer(scene.getEngine(), attribute.data, attribute.kind, false, undefined, attribute.byteStride, undefined, attribute.byteOffset, attribute.size, undefined, attribute.normalized, true), meshData.totalVertices);
        }
        return geometry;
    }
    /** @internal */
    async _decodeMeshToGeometryForGltfAsync(name, scene, data, attributes, gltfNormalizedOverride, boundingInfo) {
        const meshData = await this.decodeMeshToMeshDataAsync(data, attributes, gltfNormalizedOverride);
        const geometry = new _geometry__WEBPACK_IMPORTED_MODULE_2__.Geometry(name, scene);
        if (boundingInfo) {
            geometry._boundingInfo = boundingInfo;
            geometry.useBoundingInfoFromGeometry = true;
        }
        if (meshData.indices) {
            geometry.setIndices(meshData.indices);
        }
        for (const attribute of meshData.attributes) {
            geometry.setVerticesBuffer(new _buffer__WEBPACK_IMPORTED_MODULE_3__.VertexBuffer(scene.getEngine(), attribute.data, attribute.kind, false, undefined, attribute.byteStride, undefined, attribute.byteOffset, attribute.size, undefined, attribute.normalized, true), meshData.totalVertices);
        }
        return geometry;
    }
}
/**
 * Default configuration for the DracoDecoder. Defaults to the following:
 * - numWorkers: 50% of the available logical processors, capped to 4. If no logical processors are available, defaults to 1.
 * - wasmUrl: `"https://cdn.babylonjs.com/draco_wasm_wrapper_gltf.js"`
 * - wasmBinaryUrl: `"https://cdn.babylonjs.com/draco_decoder_gltf.wasm"`
 * - fallbackUrl: `"https://cdn.babylonjs.com/draco_decoder_gltf.js"`
 */
DracoDecoder.DefaultConfiguration = {
    wasmUrl: `${_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools._DefaultCdnUrl}/draco_wasm_wrapper_gltf.js`,
    wasmBinaryUrl: `${_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools._DefaultCdnUrl}/draco_decoder_gltf.wasm`,
    fallbackUrl: `${_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools._DefaultCdnUrl}/draco_decoder_gltf.js`,
};
DracoDecoder._Default = null;


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

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_draco_mesh_compression.js":
/*!*************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_draco_mesh_compression.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_draco_mesh_compression: () => (/* binding */ KHR_draco_mesh_compression)
/* harmony export */ });
/* harmony import */ var core_Meshes_Compression_dracoDecoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Meshes/Compression/dracoDecoder */ "../core/dist/Meshes/Compression/dracoDecoder.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable github/no-then */




const NAME = "KHR_draco_mesh_compression";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md)
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_draco_mesh_compression {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        /**
         * Defines whether to use the normalized flag from the glTF accessor instead of the Draco data. Defaults to true.
         */
        this.useNormalizedFlagFromAccessor = true;
        this._loader = loader;
        this.enabled = core_Meshes_Compression_dracoDecoder__WEBPACK_IMPORTED_MODULE_0__.DracoDecoder.DefaultAvailable && this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        delete this.dracoDecoder;
        this._loader = null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    _loadVertexDataAsync(context, primitive, babylonMesh) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader.LoadExtensionAsync(context, primitive, this.name, async (extensionContext, extension) => {
            if (primitive.mode != undefined) {
                if (primitive.mode !== 4 /* MeshPrimitiveMode.TRIANGLES */ && primitive.mode !== 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */) {
                    throw new Error(`${context}: Unsupported mode ${primitive.mode}`);
                }
            }
            const attributes = {};
            const normalized = {};
            const loadAttribute = (name, kind) => {
                const uniqueId = extension.attributes[name];
                if (uniqueId == undefined) {
                    return;
                }
                babylonMesh._delayInfo = babylonMesh._delayInfo || [];
                if (babylonMesh._delayInfo.indexOf(kind) === -1) {
                    babylonMesh._delayInfo.push(kind);
                }
                attributes[kind] = uniqueId;
                if (this.useNormalizedFlagFromAccessor) {
                    const accessor = _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.ArrayItem.TryGet(this._loader.gltf.accessors, primitive.attributes[name]);
                    if (accessor) {
                        normalized[kind] = accessor.normalized || false;
                    }
                }
            };
            loadAttribute("POSITION", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind);
            loadAttribute("NORMAL", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind);
            loadAttribute("TANGENT", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind);
            loadAttribute("TEXCOORD_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind);
            loadAttribute("TEXCOORD_1", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind);
            loadAttribute("TEXCOORD_2", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV3Kind);
            loadAttribute("TEXCOORD_3", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV4Kind);
            loadAttribute("TEXCOORD_4", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV5Kind);
            loadAttribute("TEXCOORD_5", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV6Kind);
            loadAttribute("JOINTS_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind);
            loadAttribute("WEIGHTS_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind);
            loadAttribute("COLOR_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
            const bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.ArrayItem.Get(extensionContext, this._loader.gltf.bufferViews, extension.bufferView);
            if (!bufferView._dracoBabylonGeometry) {
                bufferView._dracoBabylonGeometry = this._loader.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then(async (data) => {
                    const dracoDecoder = this.dracoDecoder || core_Meshes_Compression_dracoDecoder__WEBPACK_IMPORTED_MODULE_0__.DracoDecoder.Default;
                    const positionAccessor = _glTFLoader__WEBPACK_IMPORTED_MODULE_2__.ArrayItem.TryGet(this._loader.gltf.accessors, primitive.attributes["POSITION"]);
                    const babylonBoundingInfo = !this._loader.parent.alwaysComputeBoundingBox && !babylonMesh.skeleton && positionAccessor ? (0,_glTFLoader__WEBPACK_IMPORTED_MODULE_2__.LoadBoundingInfoFromPositionAccessor)(positionAccessor) : null;
                    return await dracoDecoder
                        ._decodeMeshToGeometryForGltfAsync(babylonMesh.name, this._loader.babylonScene, data, attributes, normalized, babylonBoundingInfo)
                        .catch((error) => {
                        throw new Error(`${context}: ${error.message}`);
                    });
                });
            }
            return await bufferView._dracoBabylonGeometry;
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_3__.registerGLTFExtension)(NAME, true, (loader) => new KHR_draco_mesh_compression(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQTRDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBc0JBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktBOztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBOztBQTlQQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFFQTtBQWlCQTs7QUFFQTtBQUNBO0FBQ0E7QUF1QkE7O0FBRUE7QUFDQTtBQXpCQTs7QUFFQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NZXNoZXMvQ29tcHJlc3Npb24vZHJhY29Db2RlYy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01lc2hlcy9Db21wcmVzc2lvbi9kcmFjb0NvbXByZXNzaW9uV29ya2VyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWVzaGVzL0NvbXByZXNzaW9uL2RyYWNvRGVjb2Rlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBBdXRvUmVsZWFzZVdvcmtlclBvb2wgfSBmcm9tIFwiLi4vLi4vTWlzYy93b3JrZXJQb29sXCI7XHJcbmltcG9ydCB0eXBlIHsgV29ya2VyUG9vbCB9IGZyb20gXCIuLi8uLi9NaXNjL3dvcmtlclBvb2xcIjtcclxuaW1wb3J0IHR5cGUgeyBJRGlzcG9zYWJsZSB9IGZyb20gXCIuLi8uLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplV2ViV29ya2VyIH0gZnJvbSBcIi4vZHJhY29Db21wcmVzc2lvbldvcmtlclwiO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIHVzaW5nIGEgRHJhY28gY29kZWMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFjb0NvZGVjQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgdG8gdGhlIFdlYkFzc2VtYmx5IG1vZHVsZS5cclxuICAgICAqL1xyXG4gICAgd2FzbVVybD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgdG8gdGhlIFdlYkFzc2VtYmx5IGJpbmFyeS5cclxuICAgICAqL1xyXG4gICAgd2FzbUJpbmFyeVVybD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgdG8gdGhlIGZhbGxiYWNrIEphdmFTY3JpcHQgbW9kdWxlLlxyXG4gICAgICovXHJcbiAgICBmYWxsYmFja1VybD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2Ygd29ya2VycyBmb3IgYXN5bmMgb3BlcmF0aW9ucy4gU3BlY2lmeSBgMGAgdG8gZGlzYWJsZSB3ZWIgd29ya2VycyBhbmQgcnVuIHN5bmNocm9ub3VzbHkgaW4gdGhlIGN1cnJlbnQgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgbnVtV29ya2Vycz86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbmFsIHdvcmtlciBwb29sIHRvIHVzZSBmb3IgYXN5bmMgZW5jb2RpbmcvZGVjb2RpbmcuXHJcbiAgICAgKiBJZiBwcm92aWRlZCwgdGhlIHdvcmtlciBwb29sIHdpbGwgYmUgdXNlZCBhcyBpczogbm8gRHJhY28gc2NyaXB0cyB3aWxsIGJlIGxvYWRlZCwgYW5kIG51bVdvcmtlcnMgd2lsbCBiZSBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICB3b3JrZXJQb29sPzogV29ya2VyUG9vbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbmFsIEFycmF5QnVmZmVyIG9mIHRoZSBXZWJBc3NlbWJseSBiaW5hcnkuXHJcbiAgICAgKiBJZiBwcm92aWRlZCBpdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiBsb2FkaW5nIHRoZSBiaW5hcnkgZnJvbSB3YXNtQmluYXJ5VXJsLlxyXG4gICAgICovXHJcbiAgICB3YXNtQmluYXJ5PzogQXJyYXlCdWZmZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29kZWMgbW9kdWxlIGlmIGFscmVhZHkgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBqc01vZHVsZT86IHVua25vd24gLyogRHJhY29EZWNvZGVyTW9kdWxlIHwgRHJhY29FbmNvZGVyTW9kdWxlICovO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX0dldERlZmF1bHROdW1Xb3JrZXJzKCk6IG51bWJlciB7XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJvYmplY3RcIiB8fCAhbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2UgNTAlIG9mIHRoZSBhdmFpbGFibGUgbG9naWNhbCBwcm9jZXNzb3JzIGJ1dCBjYXBwZWQgYXQgNC5cclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKG5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5ICogMC41KSwgNCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfSXNDb25maWd1cmF0aW9uQXZhaWxhYmxlKGNvbmZpZzogSURyYWNvQ29kZWNDb25maWd1cmF0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEoKGNvbmZpZy53YXNtVXJsICYmIChjb25maWcud2FzbUJpbmFyeSB8fCBjb25maWcud2FzbUJpbmFyeVVybCkgJiYgdHlwZW9mIFdlYkFzc2VtYmx5ID09PSBcIm9iamVjdFwiKSB8fCBjb25maWcuZmFsbGJhY2tVcmwpO1xyXG4gICAgLy8gVE9ETzogQWNjb3VudCBmb3IganNNb2R1bGVcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIGEgRHJhY28gY29kZWMuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERyYWNvQ29kZWMgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICBwcm90ZWN0ZWQgX3dvcmtlclBvb2xQcm9taXNlPzogUHJvbWlzZTxXb3JrZXJQb29sPjtcclxuICAgIHByb3RlY3RlZCBfbW9kdWxlUHJvbWlzZT86IFByb21pc2U8eyBtb2R1bGU6IHVua25vd24gLyoqIERlY29kZXJNb2R1bGUgfCBFbmNvZGVyTW9kdWxlICovIH0+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBkZWZhdWx0IGNvZGVjIEpTIG1vZHVsZSBpcyBpbiBzY29wZS5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9pc01vZHVsZUF2YWlsYWJsZSgpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgSlMgTW9kdWxlIGZvciB0aGUgY29ycmVzcG9uZGluZyB3YXNtLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NyZWF0ZU1vZHVsZUFzeW5jKFxyXG4gICAgICAgIHdhc21CaW5hcnk/OiBBcnJheUJ1ZmZlcixcclxuICAgICAgICBqc01vZHVsZT86IHVua25vd24gLyoqIERyYWNvRGVjb2Rlck1vZHVsZSB8IERyYWNvRW5jb2Rlck1vZHVsZSAqL1xyXG4gICAgKTogUHJvbWlzZTx7IG1vZHVsZTogdW5rbm93biAvKiogRGVjb2Rlck1vZHVsZSB8IEVuY29kZXJNb2R1bGUgKi8gfT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JrZXIgY29udGVudC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9nZXRXb3JrZXJDb250ZW50KCk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gY29uZmlndXJhdGlvbiBUaGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIERyYWNvQ29kZWMgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IElEcmFjb0NvZGVjQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb2RlYyBiaW5hcnkgYW5kIHdvcmtlciBwb29sIHdhcyBpbmplY3RlZFxyXG4gICAgICAgIC8vIE5vdGUgLSBpdCBpcyBleHBlY3RlZCB0aGF0IHRoZSBkZXZlbG9wZXIgY2hlY2tlZCBpZiBXZWJXb3JrZXIsIFdlYkFzc2VtYmx5IGFuZCB0aGUgVVJMIG9iamVjdCBhcmUgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24ud29ya2VyUG9vbCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHByb21pc2UgYWNjb3JkaW5nbHlcclxuICAgICAgICAgICAgdGhpcy5fd29ya2VyUG9vbFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlndXJhdGlvbi53b3JrZXJQb29sKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gYXZvaWQgbWFraW5nIGJpZyBjaGFuZ2VzIHRvIHRoZSBjb2RlIGhlcmUsIGlmIHdhc21CaW5hcnkgaXMgcHJvdmlkZWQgdXNlIGl0IGluIHRoZSB3YXNtQmluYXJ5UHJvbWlzZVxyXG4gICAgICAgIGNvbnN0IHdhc21CaW5hcnlQcm92aWRlZCA9IGNvbmZpZ3VyYXRpb24ud2FzbUJpbmFyeTtcclxuICAgICAgICBjb25zdCBudW1iZXJPZldvcmtlcnMgPSBjb25maWd1cmF0aW9uLm51bVdvcmtlcnMgPz8gX0dldERlZmF1bHROdW1Xb3JrZXJzKCk7XHJcbiAgICAgICAgY29uc3QgdXNlV29ya2VycyA9IG51bWJlck9mV29ya2VycyAmJiB0eXBlb2YgV29ya2VyID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgICAgIGNvbnN0IHVybE5lZWRlZCA9IHVzZVdvcmtlcnMgfHwgIWNvbmZpZ3VyYXRpb24uanNNb2R1bGU7XHJcbiAgICAgICAgLy8gY29kZSBtYWludGFpbmVkIGhlcmUgZm9yIGJhY2stY29tcGF0IHdpdGggbm8gY2hhbmdlc1xyXG5cclxuICAgICAgICBjb25zdCBjb2RlY0luZm86IHsgdXJsOiBzdHJpbmcgfCB1bmRlZmluZWQ7IHdhc21CaW5hcnlQcm9taXNlOiBQcm9taXNlPEFycmF5QnVmZmVyIHwgdW5kZWZpbmVkPiB9ID1cclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbi53YXNtVXJsICYmIGNvbmZpZ3VyYXRpb24ud2FzbUJpbmFyeVVybCAmJiB0eXBlb2YgV2ViQXNzZW1ibHkgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxOZWVkZWQgPyBUb29scy5HZXRCYWJ5bG9uU2NyaXB0VVJMKGNvbmZpZ3VyYXRpb24ud2FzbVVybCwgdHJ1ZSkgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2FzbUJpbmFyeVByb21pc2U6IHdhc21CaW5hcnlQcm92aWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHdhc21CaW5hcnlQcm92aWRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFRvb2xzLkxvYWRGaWxlQXN5bmMoVG9vbHMuR2V0QmFieWxvblNjcmlwdFVSTChjb25maWd1cmF0aW9uLndhc21CaW5hcnlVcmwsIHRydWUpKSxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybE5lZWRlZCA/IFRvb2xzLkdldEJhYnlsb25TY3JpcHRVUkwoY29uZmlndXJhdGlvbi5mYWxsYmFja1VybCEpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdhc21CaW5hcnlQcm9taXNlOiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAvLyBJZiB1c2luZyB3b3JrZXJzLCBpbml0aWFsaXplIGEgd29ya2VyIHBvb2wgd2l0aCBlaXRoZXIgdGhlIHdhc20gb3IgdXJsP1xyXG4gICAgICAgIGlmICh1c2VXb3JrZXJzKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICB0aGlzLl93b3JrZXJQb29sUHJvbWlzZSA9IGNvZGVjSW5mby53YXNtQmluYXJ5UHJvbWlzZS50aGVuKCh3YXNtQmluYXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJDb250ZW50ID0gdGhpcy5fZ2V0V29ya2VyQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyQmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3dvcmtlckNvbnRlbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b1JlbGVhc2VXb3JrZXJQb29sKG51bWJlck9mV29ya2VycywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyQmxvYlVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxpemVXZWJXb3JrZXIod29ya2VyLCB3YXNtQmluYXJ5LCBjb2RlY0luZm8udXJsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlUHJvbWlzZSA9IGNvZGVjSW5mby53YXNtQmluYXJ5UHJvbWlzZS50aGVuKGFzeW5jICh3YXNtQmluYXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzTW9kdWxlQXZhaWxhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb24uanNNb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2RlY0luZm8udXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEcmFjbyBjb2RlYyBtb2R1bGUgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKGNvZGVjSW5mby51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9jcmVhdGVNb2R1bGVBc3luYyh3YXNtQmluYXJ5IGFzIEFycmF5QnVmZmVyLCBjb25maWd1cmF0aW9uLmpzTW9kdWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHJlYWR5LiBDYWxsIHRoaXMgbWFudWFsbHkgdG8gZW5zdXJlIHRoZSBkcmFjbyBjb2RlYyBpcyByZWFkeSBiZWZvcmUgdXNlLlxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiByZWFkeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgd2hlblJlYWR5QXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dvcmtlclBvb2xQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3dvcmtlclBvb2xQcm9taXNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbW9kdWxlUHJvbWlzZSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9tb2R1bGVQcm9taXNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBhbGwgYXN5bmMgb3BlcmF0aW9ucyBhbmQgcmVsZWFzZSByZXNvdXJjZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93b3JrZXJQb29sUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICB0aGlzLl93b3JrZXJQb29sUHJvbWlzZS50aGVuKCh3b3JrZXJQb29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXJQb29sLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5fd29ya2VyUG9vbFByb21pc2U7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX21vZHVsZVByb21pc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSwgVHlwZWRBcnJheSwgVHlwZWRBcnJheUNvbnN0cnVjdG9yIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBFbmNvZGVyTWVzc2FnZSwgSURyYWNvQXR0cmlidXRlRGF0YSwgSURyYWNvRW5jb2RlZE1lc2hEYXRhLCBJRHJhY29FbmNvZGVyT3B0aW9ucyB9IGZyb20gXCIuL2RyYWNvRW5jb2Rlci50eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IERlY29kZXJNZXNzYWdlIH0gZnJvbSBcIi4vZHJhY29EZWNvZGVyLnR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRGVjb2RlckJ1ZmZlciwgRGVjb2RlciwgTWVzaCwgUG9pbnRDbG91ZCwgU3RhdHVzLCBEZWNvZGVyTW9kdWxlLCBFbmNvZGVyTW9kdWxlLCBNZXNoQnVpbGRlciwgRW5jb2RlciwgRHJhY29JbnQ4QXJyYXkgfSBmcm9tIFwiZHJhY28zZGdsdGZcIjtcclxuaW1wb3J0IHsgRHJhY29EZWNvZGVyTW9kdWxlIH0gZnJvbSBcImRyYWNvM2RnbHRmXCI7XHJcbmltcG9ydCB0eXBlIHsgVmVydGV4RGF0YVR5cGVkQXJyYXkgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgbGV0IERyYWNvRGVjb2Rlck1vZHVsZTogRHJhY29EZWNvZGVyTW9kdWxlO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgbGV0IERyYWNvRW5jb2Rlck1vZHVsZTogKHByb3BzOiB7IHdhc21CaW5hcnk/OiBBcnJheUJ1ZmZlciB9KSA9PiBQcm9taXNlPEVuY29kZXJNb2R1bGU+O1xyXG5cclxuaW50ZXJmYWNlIElJbml0RG9uZU1lc3NhZ2Uge1xyXG4gICAgaWQ6IFwiaW5pdERvbmVcIjtcclxufVxyXG5cclxuLy8gV29ya2VyR2xvYmFsU2NvcGVcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZTogSUluaXREb25lTWVzc2FnZSB8IERlY29kZXJNZXNzYWdlIHwgRW5jb2Rlck1lc3NhZ2UsIHRyYW5zZmVyPzogQXJyYXlCdWZmZXJMaWtlW10pOiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEVuY29kZU1lc2goXHJcbiAgICBtb2R1bGU6IHVua25vd24gLyoqIEVuY29kZXJNb2R1bGUgKi8sXHJcbiAgICBhdHRyaWJ1dGVzOiBBcnJheTxJRHJhY29BdHRyaWJ1dGVEYXRhPixcclxuICAgIGluZGljZXM6IE51bGxhYmxlPFVpbnQxNkFycmF5IHwgVWludDMyQXJyYXk+LFxyXG4gICAgb3B0aW9uczogSURyYWNvRW5jb2Rlck9wdGlvbnNcclxuKTogTnVsbGFibGU8SURyYWNvRW5jb2RlZE1lc2hEYXRhPiB7XHJcbiAgICBjb25zdCBlbmNvZGVyTW9kdWxlID0gbW9kdWxlIGFzIEVuY29kZXJNb2R1bGU7XHJcbiAgICBsZXQgZW5jb2RlcjogTnVsbGFibGU8RW5jb2Rlcj4gPSBudWxsO1xyXG4gICAgbGV0IG1lc2hCdWlsZGVyOiBOdWxsYWJsZTxNZXNoQnVpbGRlcj4gPSBudWxsO1xyXG4gICAgbGV0IG1lc2g6IE51bGxhYmxlPE1lc2g+ID0gbnVsbDtcclxuICAgIGxldCBlbmNvZGVkTmF0aXZlQnVmZmVyOiBOdWxsYWJsZTxEcmFjb0ludDhBcnJheT4gPSBudWxsO1xyXG4gICAgY29uc3QgYXR0cmlidXRlSURzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307IC8vIEJhYnlsb24ga2luZCAtPiBEcmFjbyB1bmlxdWUgaWRcclxuXHJcbiAgICAvLyBEb3VibGUtY2hlY2sgdGhhdCBhdCBsZWFzdCBhIHBvc2l0aW9uIGF0dHJpYnV0ZSBpcyBwcm92aWRlZFxyXG4gICAgY29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEuZHJhY29OYW1lID09PSBcIlBPU0lUSU9OXCIpO1xyXG4gICAgaWYgKCFwb3NpdGlvbkF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvc2l0aW9uIGF0dHJpYnV0ZSBpcyByZXF1aXJlZCBmb3IgRHJhY28gZW5jb2RpbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gaW5kaWNlcyBhcmUgcHJvdmlkZWQsIGFzc3VtZSBtZXNoIGlzIHVuaW5kZXhlZC4gTGV0J3MgZ2VuZXJhdGUgdGhlbSwgc2luY2UgRHJhY28gbWVzaGVzIHJlcXVpcmUgdGhlbS5cclxuICAgIC8vIFRPRE86IFRoaXMgbWF5IGJlIHRoZSBQT0lOVF9DTE9VRCBjYXNlLCBidXQgbmVlZCB0byBpbnZlc3RpZ2F0ZS4gU2hvdWxkIHdvcmsgZm9yIG5vdy0tIGp1c3QgbGVzcyBlZmZpY2llbnQuXHJcbiAgICBpZiAoIWluZGljZXMpIHtcclxuICAgICAgICAvLyBBc3N1bWUgcG9zaXRpb24gYXR0cmlidXRlIGlzIHRoZSBsYXJnZXN0IGF0dHJpYnV0ZS5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblZlcnRpY2VzQ291bnQgPSBwb3NpdGlvbkF0dHJpYnV0ZS5kYXRhLmxlbmd0aCAvIHBvc2l0aW9uQXR0cmlidXRlLnNpemU7XHJcbiAgICAgICAgaW5kaWNlcyA9IG5ldyAocG9zaXRpb25WZXJ0aWNlc0NvdW50ID4gNjU1MzUgPyBVaW50MzJBcnJheSA6IFVpbnQxNkFycmF5KShwb3NpdGlvblZlcnRpY2VzQ291bnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25WZXJ0aWNlc0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaW5kaWNlc1tpXSA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZW5jb2RlciA9IG5ldyBlbmNvZGVyTW9kdWxlLkVuY29kZXIoKTtcclxuICAgICAgICBtZXNoQnVpbGRlciA9IG5ldyBlbmNvZGVyTW9kdWxlLk1lc2hCdWlsZGVyKCk7XHJcbiAgICAgICAgbWVzaCA9IG5ldyBlbmNvZGVyTW9kdWxlLk1lc2goKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBmYWNlc1xyXG4gICAgICAgIG1lc2hCdWlsZGVyLkFkZEZhY2VzVG9NZXNoKG1lc2gsIGluZGljZXMubGVuZ3RoIC8gMywgaW5kaWNlcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEF0dHJpYnV0ZU1hcCA9IG5ldyBNYXA8XHJcbiAgICAgICAgICAgIEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAoYnVpbGRlcjogTWVzaEJ1aWxkZXIsIG1lc2g6IE1lc2gsIGF0dHI6IGFueSwgY291bnQ6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBkYXRhOiBFeGNsdWRlPFZlcnRleERhdGFUeXBlZEFycmF5LCBVaW50OENsYW1wZWRBcnJheT4pID0+IG51bWJlclxyXG4gICAgICAgID4oW1xyXG4gICAgICAgICAgICBbRmxvYXQzMkFycmF5LCAobWIsIG0sIGEsIGMsIHMsIGQpID0+IG1iLkFkZEZsb2F0QXR0cmlidXRlKG0sIGEsIGMsIHMsIGQpXSxcclxuICAgICAgICAgICAgW1VpbnQzMkFycmF5LCAobWIsIG0sIGEsIGMsIHMsIGQpID0+IG1iLkFkZFVJbnQzMkF0dHJpYnV0ZShtLCBhLCBjLCBzLCBkKV0sXHJcbiAgICAgICAgICAgIFtVaW50MTZBcnJheSwgKG1iLCBtLCBhLCBjLCBzLCBkKSA9PiBtYi5BZGRVSW50MTZBdHRyaWJ1dGUobSwgYSwgYywgcywgZCldLFxyXG4gICAgICAgICAgICBbVWludDhBcnJheSwgKG1iLCBtLCBhLCBjLCBzLCBkKSA9PiBtYi5BZGRVSW50OEF0dHJpYnV0ZShtLCBhLCBjLCBzLCBkKV0sXHJcbiAgICAgICAgICAgIFtJbnQzMkFycmF5LCAobWIsIG0sIGEsIGMsIHMsIGQpID0+IG1iLkFkZEludDMyQXR0cmlidXRlKG0sIGEsIGMsIHMsIGQpXSxcclxuICAgICAgICAgICAgW0ludDE2QXJyYXksIChtYiwgbSwgYSwgYywgcywgZCkgPT4gbWIuQWRkSW50MTZBdHRyaWJ1dGUobSwgYSwgYywgcywgZCldLFxyXG4gICAgICAgICAgICBbSW50OEFycmF5LCAobWIsIG0sIGEsIGMsIHMsIGQpID0+IG1iLkFkZEludDhBdHRyaWJ1dGUobSwgYSwgYywgcywgZCldLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIGF0dHJpYnV0ZXNcclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuZGF0YSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuZGF0YSA9IG5ldyBVaW50OEFycmF5KGF0dHJpYnV0ZS5kYXRhKTsgLy8gRHJhY28gZG9lcyBub3Qgc3VwcG9ydCBVaW50OENsYW1wZWRBcnJheVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZEF0dHJpYnV0ZSA9IGFkZEF0dHJpYnV0ZU1hcC5nZXQoYXR0cmlidXRlLmRhdGEuY29uc3RydWN0b3IpITtcclxuICAgICAgICAgICAgY29uc3QgdmVydGljZXNDb3VudCA9IGF0dHJpYnV0ZS5kYXRhLmxlbmd0aCAvIGF0dHJpYnV0ZS5zaXplO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVJRHNbYXR0cmlidXRlLmtpbmRdID0gYWRkQXR0cmlidXRlKG1lc2hCdWlsZGVyLCBtZXNoLCBlbmNvZGVyTW9kdWxlW2F0dHJpYnV0ZS5kcmFjb05hbWVdLCB2ZXJ0aWNlc0NvdW50LCBhdHRyaWJ1dGUuc2l6ZSwgYXR0cmlidXRlLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5xdWFudGl6YXRpb25CaXRzICYmIG9wdGlvbnMucXVhbnRpemF0aW9uQml0c1thdHRyaWJ1dGUuZHJhY29OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgZW5jb2Rlci5TZXRBdHRyaWJ1dGVRdWFudGl6YXRpb24oZW5jb2Rlck1vZHVsZVthdHRyaWJ1dGUuZHJhY29OYW1lXSwgb3B0aW9ucy5xdWFudGl6YXRpb25CaXRzW2F0dHJpYnV0ZS5kcmFjb05hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBvcHRpb25zXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubWV0aG9kKSB7XHJcbiAgICAgICAgICAgIGVuY29kZXIuU2V0RW5jb2RpbmdNZXRob2QoZW5jb2Rlck1vZHVsZVtvcHRpb25zLm1ldGhvZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5lbmNvZGVTcGVlZCAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuZGVjb2RlU3BlZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbmNvZGVyLlNldFNwZWVkT3B0aW9ucyhvcHRpb25zLmVuY29kZVNwZWVkLCBvcHRpb25zLmRlY29kZVNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVuY29kZSB0byBuYXRpdmUgYnVmZmVyXHJcbiAgICAgICAgZW5jb2RlZE5hdGl2ZUJ1ZmZlciA9IG5ldyBlbmNvZGVyTW9kdWxlLkRyYWNvSW50OEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlZExlbmd0aCA9IGVuY29kZXIuRW5jb2RlTWVzaFRvRHJhY29CdWZmZXIobWVzaCwgZW5jb2RlZE5hdGl2ZUJ1ZmZlcik7XHJcbiAgICAgICAgaWYgKGVuY29kZWRMZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEcmFjbyBlbmNvZGluZyBmYWlsZWQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29weSB0aGUgbmF0aXZlIGJ1ZmZlciBkYXRhIHRvIHdvcmtlciBoZWFwXHJcbiAgICAgICAgY29uc3QgZW5jb2RlZERhdGEgPSBuZXcgSW50OEFycmF5KGVuY29kZWRMZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVuY29kZWREYXRhW2ldID0gZW5jb2RlZE5hdGl2ZUJ1ZmZlci5HZXRWYWx1ZShpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGRhdGE6IGVuY29kZWREYXRhLCBhdHRyaWJ1dGVJZHM6IGF0dHJpYnV0ZUlEcyB9O1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAobWVzaCkge1xyXG4gICAgICAgICAgICBlbmNvZGVyTW9kdWxlLmRlc3Ryb3kobWVzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNoQnVpbGRlcikge1xyXG4gICAgICAgICAgICBlbmNvZGVyTW9kdWxlLmRlc3Ryb3kobWVzaEJ1aWxkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5jb2Rlcikge1xyXG4gICAgICAgICAgICBlbmNvZGVyTW9kdWxlLmRlc3Ryb3koZW5jb2Rlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmNvZGVkTmF0aXZlQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGVuY29kZXJNb2R1bGUuZGVzdHJveShlbmNvZGVkTmF0aXZlQnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgd29ya2VyIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjb252ZXJ0ZWQgdG8gYSBibG9iIHVybCB0byBwYXNzIGludG8gYSB3b3JrZXIuXHJcbiAqIFRvIGJlIHVzZWQgaWYgYSBkZXZlbG9wZXIgd2FudHMgdG8gY3JlYXRlIHRoZWlyIG93biB3b3JrZXIgaW5zdGFuY2UgYW5kIGluamVjdCBpdCBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBkZWZhdWx0IHdvcmtlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFbmNvZGVyV29ya2VyRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICBsZXQgZW5jb2RlclByb21pc2U6IFByb21pc2VMaWtlPEVuY29kZXJNb2R1bGU+IHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIG9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS5pZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBVUkwgaXMgcHJvdmlkZWQgdGhlbiBsb2FkIHRoZSBzY3JpcHQuIE90aGVyd2lzZSBleHBlY3QgdGhlIHNjcmlwdCB0byBiZSBsb2FkZWQgYWxyZWFkeVxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhtZXNzYWdlLnVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0RW5jb2Rlck9iamVjdCA9IG1lc3NhZ2Uud2FzbUJpbmFyeSA/IHsgd2FzbUJpbmFyeTogbWVzc2FnZS53YXNtQmluYXJ5IH0gOiB7fTtcclxuICAgICAgICAgICAgICAgIGVuY29kZXJQcm9taXNlID0gRHJhY29FbmNvZGVyTW9kdWxlKGluaXRFbmNvZGVyT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgaWQ6IFwiaW5pdERvbmVcIiB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbmNvZGVNZXNoXCI6IHtcclxuICAgICAgICAgICAgICAgIGlmICghZW5jb2RlclByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEcmFjbyBlbmNvZGVyIG1vZHVsZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICBlbmNvZGVyUHJvbWlzZS50aGVuKChlbmNvZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gRW5jb2RlTWVzaChlbmNvZGVyLCBtZXNzYWdlLmF0dHJpYnV0ZXMsIG1lc3NhZ2UuaW5kaWNlcywgbWVzc2FnZS5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImVuY29kZU1lc2hEb25lXCIsIGVuY29kZWRNZXNoRGF0YTogcmVzdWx0IH0sIHJlc3VsdCA/IFtyZXN1bHQuZGF0YS5idWZmZXJdIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRGVjb2RlTWVzaChcclxuICAgIG1vZHVsZTogdW5rbm93biAvKiogRGVjb2Rlck1vZHVsZSAqLyxcclxuICAgIGRhdGE6IEludDhBcnJheSxcclxuICAgIGF0dHJpYnV0ZUlEczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiB8IHVuZGVmaW5lZCxcclxuICAgIG9uSW5kaWNlc0RhdGE6IChpbmRpY2VzOiBVaW50MTZBcnJheSB8IFVpbnQzMkFycmF5KSA9PiB2b2lkLFxyXG4gICAgb25BdHRyaWJ1dGVEYXRhOiAoa2luZDogc3RyaW5nLCBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsIHNpemU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIHN0cmlkZTogbnVtYmVyLCBub3JtYWxpemVkOiBib29sZWFuKSA9PiB2b2lkXHJcbik6IG51bWJlciB7XHJcbiAgICBjb25zdCBkZWNvZGVyTW9kdWxlID0gbW9kdWxlIGFzIERlY29kZXJNb2R1bGU7XHJcbiAgICBsZXQgZGVjb2RlcjogTnVsbGFibGU8RGVjb2Rlcj4gPSBudWxsO1xyXG4gICAgbGV0IGJ1ZmZlcjogTnVsbGFibGU8RGVjb2RlckJ1ZmZlcj4gPSBudWxsO1xyXG4gICAgbGV0IGdlb21ldHJ5OiBOdWxsYWJsZTxNZXNoIHwgUG9pbnRDbG91ZD4gPSBudWxsO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGVjb2RlciA9IG5ldyBkZWNvZGVyTW9kdWxlLkRlY29kZXIoKTtcclxuXHJcbiAgICAgICAgYnVmZmVyID0gbmV3IGRlY29kZXJNb2R1bGUuRGVjb2RlckJ1ZmZlcigpO1xyXG4gICAgICAgIGJ1ZmZlci5Jbml0KGRhdGEsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0dXM6IFN0YXR1cztcclxuICAgICAgICBjb25zdCB0eXBlID0gZGVjb2Rlci5HZXRFbmNvZGVkR2VvbWV0cnlUeXBlKGJ1ZmZlcik7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZGVjb2Rlck1vZHVsZS5UUklBTkdVTEFSX01FU0g6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgZGVjb2Rlck1vZHVsZS5NZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBkZWNvZGVyLkRlY29kZUJ1ZmZlclRvTWVzaChidWZmZXIsIG1lc2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0dXMub2soKSB8fCBtZXNoLnB0ciA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdGF0dXMuZXJyb3JfbXNnKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bUZhY2VzID0gbWVzaC5udW1fZmFjZXMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bUluZGljZXMgPSBudW1GYWNlcyAqIDM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gbnVtSW5kaWNlcyAqIDQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHRyID0gZGVjb2Rlck1vZHVsZS5fbWFsbG9jKGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNvZGVyLkdldFRyaWFuZ2xlc1VJbnQzMkFycmF5KG1lc2gsIGJ5dGVMZW5ndGgsIHB0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheShudW1JbmRpY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzLnNldChuZXcgVWludDMyQXJyYXkoZGVjb2Rlck1vZHVsZS5IRUFQRjMyLmJ1ZmZlciwgcHRyLCBudW1JbmRpY2VzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbmRpY2VzRGF0YShpbmRpY2VzKTtcclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb2Rlck1vZHVsZS5fZnJlZShwdHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gbWVzaDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgZGVjb2Rlck1vZHVsZS5QT0lOVF9DTE9VRDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRDbG91ZCA9IG5ldyBkZWNvZGVyTW9kdWxlLlBvaW50Q2xvdWQoKTtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGRlY29kZXIuRGVjb2RlQnVmZmVyVG9Qb2ludENsb3VkKGJ1ZmZlciwgcG9pbnRDbG91ZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXR1cy5vaygpIHx8ICFwb2ludENsb3VkLnB0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdGF0dXMuZXJyb3JfbXNnKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gcG9pbnRDbG91ZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBnZW9tZXRyeSB0eXBlICR7dHlwZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbnVtUG9pbnRzID0gZ2VvbWV0cnkubnVtX3BvaW50cygpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9jZXNzQXR0cmlidXRlID0gKGRlY29kZXI6IERlY29kZXIsIGdlb21ldHJ5OiBNZXNoIHwgUG9pbnRDbG91ZCwga2luZDogc3RyaW5nLCBhdHRyaWJ1dGU6IGFueSAvKiogQXR0cmlidXRlICovKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFUeXBlID0gYXR0cmlidXRlLmRhdGFfdHlwZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBudW1Db21wb25lbnRzID0gYXR0cmlidXRlLm51bV9jb21wb25lbnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGUubm9ybWFsaXplZCgpO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RyaWRlID0gYXR0cmlidXRlLmJ5dGVfc3RyaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVPZmZzZXQgPSBhdHRyaWJ1dGUuYnl0ZV9vZmZzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFUeXBlSW5mbzogUmVjb3JkPG51bWJlciwgeyB0eXBlZEFycmF5Q29uc3RydWN0b3I6IFR5cGVkQXJyYXlDb25zdHJ1Y3RvcjsgaGVhcDogVHlwZWRBcnJheSB9PiA9IHtcclxuICAgICAgICAgICAgICAgIFtkZWNvZGVyTW9kdWxlLkRUX0ZMT0FUMzJdOiB7IHR5cGVkQXJyYXlDb25zdHJ1Y3RvcjogRmxvYXQzMkFycmF5LCBoZWFwOiBkZWNvZGVyTW9kdWxlLkhFQVBGMzIgfSxcclxuICAgICAgICAgICAgICAgIFtkZWNvZGVyTW9kdWxlLkRUX0lOVDhdOiB7IHR5cGVkQXJyYXlDb25zdHJ1Y3RvcjogSW50OEFycmF5LCBoZWFwOiBkZWNvZGVyTW9kdWxlLkhFQVA4IH0sXHJcbiAgICAgICAgICAgICAgICBbZGVjb2Rlck1vZHVsZS5EVF9JTlQxNl06IHsgdHlwZWRBcnJheUNvbnN0cnVjdG9yOiBJbnQxNkFycmF5LCBoZWFwOiBkZWNvZGVyTW9kdWxlLkhFQVAxNiB9LFxyXG4gICAgICAgICAgICAgICAgW2RlY29kZXJNb2R1bGUuRFRfSU5UMzJdOiB7IHR5cGVkQXJyYXlDb25zdHJ1Y3RvcjogSW50MzJBcnJheSwgaGVhcDogZGVjb2Rlck1vZHVsZS5IRUFQMzIgfSxcclxuICAgICAgICAgICAgICAgIFtkZWNvZGVyTW9kdWxlLkRUX1VJTlQ4XTogeyB0eXBlZEFycmF5Q29uc3RydWN0b3I6IFVpbnQ4QXJyYXksIGhlYXA6IGRlY29kZXJNb2R1bGUuSEVBUFU4IH0sXHJcbiAgICAgICAgICAgICAgICBbZGVjb2Rlck1vZHVsZS5EVF9VSU5UMTZdOiB7IHR5cGVkQXJyYXlDb25zdHJ1Y3RvcjogVWludDE2QXJyYXksIGhlYXA6IGRlY29kZXJNb2R1bGUuSEVBUFUxNiB9LFxyXG4gICAgICAgICAgICAgICAgW2RlY29kZXJNb2R1bGUuRFRfVUlOVDMyXTogeyB0eXBlZEFycmF5Q29uc3RydWN0b3I6IFVpbnQzMkFycmF5LCBoZWFwOiBkZWNvZGVyTW9kdWxlLkhFQVBVMzIgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkYXRhVHlwZUluZm9bZGF0YVR5cGVdO1xyXG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkYXRhIHR5cGUgJHtkYXRhVHlwZX1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbnVtVmFsdWVzID0gbnVtUG9pbnRzICogbnVtQ29tcG9uZW50cztcclxuICAgICAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IG51bVZhbHVlcyAqIGluZm8udHlwZWRBcnJheUNvbnN0cnVjdG9yLkJZVEVTX1BFUl9FTEVNRU5UO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHRyID0gZGVjb2Rlck1vZHVsZS5fbWFsbG9jKGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGVjb2Rlci5HZXRBdHRyaWJ1dGVEYXRhQXJyYXlGb3JBbGxQb2ludHMoZ2VvbWV0cnksIGF0dHJpYnV0ZSwgZGF0YVR5cGUsIGJ5dGVMZW5ndGgsIHB0cik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IGluZm8udHlwZWRBcnJheUNvbnN0cnVjdG9yKGluZm8uaGVhcC5idWZmZXIsIHB0ciwgbnVtVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIG9uQXR0cmlidXRlRGF0YShraW5kLCBkYXRhLnNsaWNlKCksIG51bUNvbXBvbmVudHMsIGJ5dGVPZmZzZXQsIGJ5dGVTdHJpZGUsIG5vcm1hbGl6ZWQpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgZGVjb2Rlck1vZHVsZS5fZnJlZShwdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZUlEcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtpbmQgaW4gYXR0cmlidXRlSURzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGF0dHJpYnV0ZUlEc1traW5kXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGRlY29kZXIuR2V0QXR0cmlidXRlQnlVbmlxdWVJZChnZW9tZXRyeSwgaWQpO1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0F0dHJpYnV0ZShkZWNvZGVyLCBnZW9tZXRyeSwga2luZCwgYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYWNvQXR0cmlidXRlVHlwZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZGVjb2Rlck1vZHVsZS5QT1NJVElPTixcclxuICAgICAgICAgICAgICAgIG5vcm1hbDogZGVjb2Rlck1vZHVsZS5OT1JNQUwsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGVjb2Rlck1vZHVsZS5DT0xPUixcclxuICAgICAgICAgICAgICAgIHV2OiBkZWNvZGVyTW9kdWxlLlRFWF9DT09SRCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2luZCBpbiBkcmFjb0F0dHJpYnV0ZVR5cGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGRlY29kZXIuR2V0QXR0cmlidXRlSWQoZ2VvbWV0cnksIGRyYWNvQXR0cmlidXRlVHlwZXNba2luZF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGRlY29kZXIuR2V0QXR0cmlidXRlKGdlb21ldHJ5LCBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0F0dHJpYnV0ZShkZWNvZGVyLCBnZW9tZXRyeSwga2luZCwgYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bVBvaW50cztcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKGdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgIGRlY29kZXJNb2R1bGUuZGVzdHJveShnZW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGRlY29kZXJNb2R1bGUuZGVzdHJveShidWZmZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlY29kZXIpIHtcclxuICAgICAgICAgICAgZGVjb2Rlck1vZHVsZS5kZXN0cm95KGRlY29kZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB3b3JrZXIgZnVuY3Rpb24gdGhhdCBnZXRzIGNvbnZlcnRlZCB0byBhIGJsb2IgdXJsIHRvIHBhc3MgaW50byBhIHdvcmtlci5cclxuICogVG8gYmUgdXNlZCBpZiBhIGRldmVsb3BlciB3YW50cyB0byBjcmVhdGUgdGhlaXIgb3duIHdvcmtlciBpbnN0YW5jZSBhbmQgaW5qZWN0IGl0IGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgd29ya2VyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIERlY29kZXJXb3JrZXJGdW5jdGlvbigpOiB2b2lkIHtcclxuICAgIGxldCBkZWNvZGVyUHJvbWlzZTogUHJvbWlzZUxpa2U8RGVjb2Rlck1vZHVsZT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgb25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbml0XCI6IHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIFVSTCBpcyBwcm92aWRlZCB0aGVuIGxvYWQgdGhlIHNjcmlwdC4gT3RoZXJ3aXNlIGV4cGVjdCB0aGUgc2NyaXB0IHRvIGJlIGxvYWRlZCBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRTY3JpcHRzKG1lc3NhZ2UudXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXREZWNvZGVyT2JqZWN0ID0gbWVzc2FnZS53YXNtQmluYXJ5ID8geyB3YXNtQmluYXJ5OiBtZXNzYWdlLndhc21CaW5hcnkgfSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgZGVjb2RlclByb21pc2UgPSBEcmFjb0RlY29kZXJNb2R1bGUoaW5pdERlY29kZXJPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJpbml0RG9uZVwiIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImRlY29kZU1lc2hcIjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWNvZGVyUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRyYWNvIGRlY29kZXIgbW9kdWxlIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIGRlY29kZXJQcm9taXNlLnRoZW4oKGRlY29kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1Qb2ludHMgPSBEZWNvZGVNZXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGFWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbmRpY2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImluZGljZXNcIiwgZGF0YTogaW5kaWNlcyB9LCBbaW5kaWNlcy5idWZmZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtpbmQsIGRhdGEsIHNpemUsIG9mZnNldCwgc3RyaWRlLCBub3JtYWxpemVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImF0dHJpYnV0ZVwiLCBraW5kLCBkYXRhLCBzaXplLCBieXRlT2Zmc2V0OiBvZmZzZXQsIGJ5dGVTdHJpZGU6IHN0cmlkZSwgbm9ybWFsaXplZCB9LCBbZGF0YS5idWZmZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJkZWNvZGVNZXNoRG9uZVwiLCB0b3RhbFZlcnRpY2VzOiBudW1Qb2ludHMgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcbmV4cG9ydCB7IERlY29kZXJXb3JrZXJGdW5jdGlvbiBhcyB3b3JrZXJGdW5jdGlvbiB9O1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemVzIGEgd29ya2VyIHRoYXQgd2FzIGNyZWF0ZWQgZm9yIHRoZSBkcmFjbyBhZ2VudCBwb29sXHJcbiAqIEBwYXJhbSB3b3JrZXIgIFRoZSB3b3JrZXIgdG8gaW5pdGlhbGl6ZVxyXG4gKiBAcGFyYW0gd2FzbUJpbmFyeSBUaGUgd2FzbSBiaW5hcnkgdG8gbG9hZCBpbnRvIHRoZSB3b3JrZXJcclxuICogQHBhcmFtIG1vZHVsZVVybCBUaGUgdXJsIHRvIHRoZSBkcmFjbyBkZWNvZGVyIG1vZHVsZSAob3B0aW9uYWwpXHJcbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHdvcmtlciBpcyBpbml0aWFsaXplZFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYldvcmtlcih3b3JrZXI6IFdvcmtlciwgd2FzbUJpbmFyeT86IEFycmF5QnVmZmVyLCBtb2R1bGVVcmw/OiBzdHJpbmcpOiBQcm9taXNlPFdvcmtlcj4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPFdvcmtlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3I6IEVycm9yRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50PElJbml0RG9uZU1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhLmlkID09PSBcImluaXREb25lXCIpIHtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUod29ya2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIC8vIExvYWQgd2l0aCBlaXRoZXIgSlMtb25seSBvciBXQVNNIHZlcnNpb25cclxuICAgICAgICBpZiAoIXdhc21CaW5hcnkpIHtcclxuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImluaXRcIixcclxuICAgICAgICAgICAgICAgIHVybDogbW9kdWxlVXJsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgYXJyYXkgYnVmZmVyIHRvIG1ha2UgaXQgdHJhbnNmZXJhYmxlXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gd2FzbUJpbmFyeS5zbGljZSgwKTtcclxuICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImluaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IG1vZHVsZVVybCxcclxuICAgICAgICAgICAgICAgICAgICB3YXNtQmluYXJ5OiBjbG9uZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBbY2xvbmVdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vdGU6IG5vIHRyYW5zZmVyIGxpc3QgYXMgdGhlIEFycmF5QnVmZmVyIGlzIHNoYXJlZCBhY3Jvc3MgbWFpbiB0aHJlYWQgYW5kIHBvb2wgd29ya2Vyc1xyXG4gICAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhY29EZWNvZGVyTW9kdWxlIH0gZnJvbSBcImRyYWNvM2RnbHRmXCI7XHJcbmltcG9ydCB7IF9Jc0NvbmZpZ3VyYXRpb25BdmFpbGFibGUsIERyYWNvQ29kZWMsIHR5cGUgSURyYWNvQ29kZWNDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vZHJhY29Db2RlY1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSBcIi4uL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCIuLi9idWZmZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgQm91bmRpbmdJbmZvIH0gZnJvbSBcIi4uLy4uL0N1bGxpbmcvYm91bmRpbmdJbmZvXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBEZWNvZGVNZXNoLCBEZWNvZGVyV29ya2VyRnVuY3Rpb24gfSBmcm9tIFwiLi9kcmFjb0NvbXByZXNzaW9uV29ya2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUF0dHJpYnV0ZURhdGEsIE1lc2hEYXRhLCBEZWNvZGVyTWVzc2FnZSB9IGZyb20gXCIuL2RyYWNvRGVjb2Rlci50eXBlc1wiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGxldCBEcmFjb0RlY29kZXJNb2R1bGU6IERyYWNvRGVjb2Rlck1vZHVsZTtcclxuXHJcbi8qKlxyXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY2xhc3MgaXMgYW4gZXhwZXJpbWVudGFsIHZlcnNpb24gb2YgYERyYWNvQ29tcHJlc3Npb25gIGFuZCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cclxuICpcclxuICogRHJhY28gRGVjb2RlciAoaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL2RyYWNvLylcclxuICpcclxuICogVGhpcyBjbGFzcyB3cmFwcyB0aGUgRHJhY28gZGVjb2RlciBtb2R1bGUuXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIHRoZSBjb25maWd1cmF0aW9uIHBvaW50cyB0byBhIGNvcHkgb2YgdGhlIERyYWNvIGRlY29kZXIgZmlsZXMgZm9yIGdsVEYgZnJvbSB0aGUgQmFieWxvbi5qcyBjZG4gaHR0cHM6Ly9jZG4uYmFieWxvbmpzLmNvbS9kcmFjb193YXNtX3dyYXBwZXJfZ2x0Zi5qcy5cclxuICpcclxuICogVG8gdXBkYXRlIHRoZSBjb25maWd1cmF0aW9uLCB1c2UgdGhlIGZvbGxvd2luZyBjb2RlOlxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqICAgICBEcmFjb0RlY29kZXIuRGVmYXVsdENvbmZpZ3VyYXRpb24gPSB7XHJcbiAqICAgICAgICAgIHdhc21Vcmw6IFwiPHVybCB0byB0aGUgV2ViQXNzZW1ibHkgbGlicmFyeT5cIixcclxuICogICAgICAgICAgd2FzbUJpbmFyeVVybDogXCI8dXJsIHRvIHRoZSBXZWJBc3NlbWJseSBiaW5hcnk+XCIsXHJcbiAqICAgICAgICAgIGZhbGxiYWNrVXJsOiBcIjx1cmwgdG8gdGhlIGZhbGxiYWNrIEphdmFTY3JpcHQgbGlicmFyeT5cIixcclxuICogICAgIH07XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBEcmFjbyBoYXMgdHdvIHZlcnNpb25zLCBvbmUgZm9yIFdlYkFzc2VtYmx5IGFuZCBvbmUgZm9yIEphdmFTY3JpcHQuIFRoZSBkZWNvZGVyIGNvbmZpZ3VyYXRpb24gY2FuIGJlIHNldCB0byBvbmx5IHN1cHBvcnQgV2ViQXNzZW1ibHkgb3Igb25seSBzdXBwb3J0IHRoZSBKYXZhU2NyaXB0IHZlcnNpb24uXHJcbiAqIERlY29kaW5nIHdpbGwgYXV0b21hdGljYWxseSBmYWxsYmFjayB0byB0aGUgSmF2YVNjcmlwdCB2ZXJzaW9uIGlmIFdlYkFzc2VtYmx5IHZlcnNpb24gaXMgbm90IGNvbmZpZ3VyZWQgb3IgaWYgV2ViQXNzZW1ibHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci5cclxuICogVXNlIGBEcmFjb0RlY29kZXIuRGVmYXVsdEF2YWlsYWJsZWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSBkZWNvZGVyIGNvbmZpZ3VyYXRpb24gaXMgYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCBjb250ZXh0LlxyXG4gKlxyXG4gKiBUbyBkZWNvZGUgRHJhY28gY29tcHJlc3NlZCBkYXRhLCBnZXQgdGhlIGRlZmF1bHQgRHJhY29EZWNvZGVyIG9iamVjdCBhbmQgY2FsbCBkZWNvZGVNZXNoVG9HZW9tZXRyeUFzeW5jOlxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqICAgICB2YXIgZ2VvbWV0cnkgPSBhd2FpdCBEcmFjb0RlY29kZXIuRGVmYXVsdC5kZWNvZGVNZXNoVG9HZW9tZXRyeUFzeW5jKGRhdGEpO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEcmFjb0RlY29kZXIgZXh0ZW5kcyBEcmFjb0NvZGVjIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBjb25maWd1cmF0aW9uIGZvciB0aGUgRHJhY29EZWNvZGVyLiBEZWZhdWx0cyB0byB0aGUgZm9sbG93aW5nOlxyXG4gICAgICogLSBudW1Xb3JrZXJzOiA1MCUgb2YgdGhlIGF2YWlsYWJsZSBsb2dpY2FsIHByb2Nlc3NvcnMsIGNhcHBlZCB0byA0LiBJZiBubyBsb2dpY2FsIHByb2Nlc3NvcnMgYXJlIGF2YWlsYWJsZSwgZGVmYXVsdHMgdG8gMS5cclxuICAgICAqIC0gd2FzbVVybDogYFwiaHR0cHM6Ly9jZG4uYmFieWxvbmpzLmNvbS9kcmFjb193YXNtX3dyYXBwZXJfZ2x0Zi5qc1wiYFxyXG4gICAgICogLSB3YXNtQmluYXJ5VXJsOiBgXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2RyYWNvX2RlY29kZXJfZ2x0Zi53YXNtXCJgXHJcbiAgICAgKiAtIGZhbGxiYWNrVXJsOiBgXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2RyYWNvX2RlY29kZXJfZ2x0Zi5qc1wiYFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRDb25maWd1cmF0aW9uOiBJRHJhY29Db2RlY0NvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICAgICAgd2FzbVVybDogYCR7VG9vbHMuX0RlZmF1bHRDZG5Vcmx9L2RyYWNvX3dhc21fd3JhcHBlcl9nbHRmLmpzYCxcclxuICAgICAgICB3YXNtQmluYXJ5VXJsOiBgJHtUb29scy5fRGVmYXVsdENkblVybH0vZHJhY29fZGVjb2Rlcl9nbHRmLndhc21gLFxyXG4gICAgICAgIGZhbGxiYWNrVXJsOiBgJHtUb29scy5fRGVmYXVsdENkblVybH0vZHJhY29fZGVjb2Rlcl9nbHRmLmpzYCxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGRlY29kZXIncyBgRGVmYXVsdENvbmZpZ3VyYXRpb25gIGlzIGF2YWlsYWJsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRGVmYXVsdEF2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gX0lzQ29uZmlndXJhdGlvbkF2YWlsYWJsZShEcmFjb0RlY29kZXIuRGVmYXVsdENvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGF0aWMgX0RlZmF1bHQ6IE51bGxhYmxlPERyYWNvRGVjb2Rlcj4gPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGluc3RhbmNlIGZvciB0aGUgRHJhY29EZWNvZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBEZWZhdWx0KCk6IERyYWNvRGVjb2RlciB7XHJcbiAgICAgICAgRHJhY29EZWNvZGVyLl9EZWZhdWx0ID8/PSBuZXcgRHJhY29EZWNvZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIERyYWNvRGVjb2Rlci5fRGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBkZWZhdWx0IERyYWNvRGVjb2RlciBvYmplY3QgdG8gbnVsbCBhbmQgZGlzcG9zaW5nIHRoZSByZW1vdmVkIGRlZmF1bHQgaW5zdGFuY2UuXHJcbiAgICAgKiBOb3RlIHRoYXQgaWYgdGhlIHdvcmtlclBvb2wgaXMgYSBtZW1iZXIgb2YgdGhlIHN0YXRpYyBEZWZhdWx0Q29uZmlndXJhdGlvbiBvYmplY3QgaXQgaXMgcmVjb21tZW5kZWQgbm90IHRvIHJ1biBkaXNwb3NlLFxyXG4gICAgICogdW5sZXNzIHRoZSBzdGF0aWMgd29ya2VyIHBvb2wgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cclxuICAgICAqIEBwYXJhbSBza2lwRGlzcG9zZSBzZXQgdG8gdHJ1ZSB0byBub3QgZGlzcG9zZSB0aGUgcmVtb3ZlZCBkZWZhdWx0IGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzZXREZWZhdWx0KHNraXBEaXNwb3NlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChEcmFjb0RlY29kZXIuX0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgaWYgKCFza2lwRGlzcG9zZSkge1xyXG4gICAgICAgICAgICAgICAgRHJhY29EZWNvZGVyLl9EZWZhdWx0LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEcmFjb0RlY29kZXIuX0RlZmF1bHQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2lzTW9kdWxlQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgRHJhY29EZWNvZGVyTW9kdWxlICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBhc3luYyBfY3JlYXRlTW9kdWxlQXN5bmMod2FzbUJpbmFyeT86IEFycmF5QnVmZmVyLCBqc01vZHVsZT86IHVua25vd24gLyoqIERyYWNvRGVjb2Rlck1vZHVsZSAqLyk6IFByb21pc2U8eyBtb2R1bGU6IHVua25vd24gLyoqIERlY29kZXJNb2R1bGUgKi8gfT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0ICgoanNNb2R1bGUgYXMgRHJhY29EZWNvZGVyTW9kdWxlKSB8fCBEcmFjb0RlY29kZXJNb2R1bGUpKHsgd2FzbUJpbmFyeSB9KTtcclxuICAgICAgICByZXR1cm4geyBtb2R1bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2dldFdvcmtlckNvbnRlbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7RGVjb2RlTWVzaH0oJHtEZWNvZGVyV29ya2VyRnVuY3Rpb259KSgpYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRHJhY28gZGVjb2Rlci5cclxuICAgICAqIEBwYXJhbSBjb25maWd1cmF0aW9uIE9wdGlvbmFsIG92ZXJyaWRlIG9mIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgRHJhY29EZWNvZGVyLiBJZiBub3QgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIHtAbGluayBEcmFjb0RlY29kZXIuRGVmYXVsdENvbmZpZ3VyYXRpb259LlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBJRHJhY29Db2RlY0NvbmZpZ3VyYXRpb24gPSBEcmFjb0RlY29kZXIuRGVmYXVsdENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBEcmFjbyBjb21wcmVzc2VkIG1lc2ggZGF0YSB0byBtZXNoIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgQXJyYXlCdWZmZXIgb3IgQXJyYXlCdWZmZXJWaWV3IG9mIHRoZSBjb21wcmVzc2VkIERyYWNvIGRhdGFcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIEEgbWFwIG9mIGF0dHJpYnV0ZXMgZnJvbSB2ZXJ0ZXggYnVmZmVyIGtpbmRzIHRvIERyYWNvIHVuaXF1ZSBpZHNcclxuICAgICAqIEBwYXJhbSBnbHRmTm9ybWFsaXplZE92ZXJyaWRlIEEgbWFwIG9mIGF0dHJpYnV0ZXMgZnJvbSB2ZXJ0ZXggYnVmZmVyIGtpbmRzIHRvIG5vcm1hbGl6ZWQgZmxhZ3MgdG8gb3ZlcnJpZGUgdGhlIERyYWNvIG5vcm1hbGl6YXRpb25cclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRlY29kZWQgbWVzaCBkYXRhXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBkZWNvZGVNZXNoVG9NZXNoRGF0YUFzeW5jKFxyXG4gICAgICAgIGRhdGE6IEFycmF5QnVmZmVyIHwgQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIGF0dHJpYnV0ZXM/OiB7IFtraW5kOiBzdHJpbmddOiBudW1iZXIgfSxcclxuICAgICAgICBnbHRmTm9ybWFsaXplZE92ZXJyaWRlPzogeyBba2luZDogc3RyaW5nXTogYm9vbGVhbiB9XHJcbiAgICApOiBQcm9taXNlPE1lc2hEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgSW50OEFycmF5KGRhdGEpIDogbmV3IEludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBhcHBseUdsdGZOb3JtYWxpemVkT3ZlcnJpZGUgPSAoa2luZDogc3RyaW5nLCBub3JtYWxpemVkOiBib29sZWFuKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnbHRmTm9ybWFsaXplZE92ZXJyaWRlICYmIGdsdGZOb3JtYWxpemVkT3ZlcnJpZGVba2luZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGdsdGZOb3JtYWxpemVkT3ZlcnJpZGVba2luZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYE5vcm1hbGl6ZWQgZmxhZyBmcm9tIERyYWNvIGRhdGEgKCR7bm9ybWFsaXplZH0pIGRvZXMgbm90IG1hdGNoIG5vcm1hbGl6ZWQgZmxhZyBmcm9tIGdsVEYgYWNjZXNzb3IgKCR7Z2x0Zk5vcm1hbGl6ZWRPdmVycmlkZVtraW5kXX0pLiBVc2luZyBmbGFnIGZyb20gZ2xURiBhY2Nlc3Nvci5gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2x0Zk5vcm1hbGl6ZWRPdmVycmlkZVtraW5kXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3dvcmtlclBvb2xQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyUG9vbFByb21pc2UudGhlbihhc3luYyAod29ya2VyUG9vbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPE1lc2hEYXRhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyUG9vbC5wdXNoKCh3b3JrZXIsIG9uQ29tcGxldGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdEluZGljZXM6IE51bGxhYmxlPFVpbnQxNkFycmF5IHwgVWludDMyQXJyYXk+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0QXR0cmlidXRlczogQXJyYXk8SUF0dHJpYnV0ZURhdGE+ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yOiBFcnJvckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudDxEZWNvZGVyTWVzc2FnZT4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluZGljZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRJbmRpY2VzID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImF0dHJpYnV0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEF0dHJpYnV0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiBtZXNzYWdlLmtpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBtZXNzYWdlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlT2Zmc2V0OiBtZXNzYWdlLmJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlU3RyaWRlOiBtZXNzYWdlLmJ5dGVTdHJpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkOiBhcHBseUdsdGZOb3JtYWxpemVkT3ZlcnJpZGUobWVzc2FnZS5raW5kLCBtZXNzYWdlLm5vcm1hbGl6ZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWNvZGVNZXNoRG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgaW5kaWNlczogcmVzdWx0SW5kaWNlcyEsIGF0dHJpYnV0ZXM6IHJlc3VsdEF0dHJpYnV0ZXMsIHRvdGFsVmVydGljZXM6IG1lc3NhZ2UudG90YWxWZXJ0aWNlcyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFWaWV3Q29weSA9IGRhdGFWaWV3LnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImRlY29kZU1lc2hcIiwgZGF0YVZpZXc6IGRhdGFWaWV3Q29weSwgYXR0cmlidXRlczogYXR0cmlidXRlcyB9LCBbZGF0YVZpZXdDb3B5LmJ1ZmZlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX21vZHVsZVByb21pc2UpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVQcm9taXNlLnRoZW4oKGRlY29kZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRJbmRpY2VzOiBOdWxsYWJsZTxVaW50MTZBcnJheSB8IFVpbnQzMkFycmF5PiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRBdHRyaWJ1dGVzOiBBcnJheTxJQXR0cmlidXRlRGF0YT4gPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1Qb2ludHMgPSBEZWNvZGVNZXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZXIubW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGluZGljZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0SW5kaWNlcyA9IGluZGljZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoa2luZCwgZGF0YSwgc2l6ZSwgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgbm9ybWFsaXplZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRBdHRyaWJ1dGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVTdHJpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGluZGljZXM6IHJlc3VsdEluZGljZXMhLCBhdHRyaWJ1dGVzOiByZXN1bHRBdHRyaWJ1dGVzLCB0b3RhbFZlcnRpY2VzOiBudW1Qb2ludHMgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEcmFjbyBkZWNvZGVyIG1vZHVsZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIERyYWNvIGNvbXByZXNzZWQgbWVzaCBkYXRhIHRvIEJhYnlsb24gZ2VvbWV0cnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSB0byB1c2Ugd2hlbiBjcmVhdGluZyB0aGUgZ2VvbWV0cnlcclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gdXNlIHdoZW4gY3JlYXRpbmcgdGhlIGdlb21ldHJ5XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgQXJyYXlCdWZmZXIgb3IgQXJyYXlCdWZmZXJWaWV3IG9mIHRoZSBEcmFjbyBjb21wcmVzc2VkIGRhdGFcclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIEEgbWFwIG9mIGF0dHJpYnV0ZXMgZnJvbSB2ZXJ0ZXggYnVmZmVyIGtpbmRzIHRvIERyYWNvIHVuaXF1ZSBpZHNcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRlY29kZWQgZ2VvbWV0cnlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGRlY29kZU1lc2hUb0dlb21ldHJ5QXN5bmMobmFtZTogc3RyaW5nLCBzY2VuZTogU2NlbmUsIGRhdGE6IEFycmF5QnVmZmVyIHwgQXJyYXlCdWZmZXJWaWV3LCBhdHRyaWJ1dGVzPzogeyBba2luZDogc3RyaW5nXTogbnVtYmVyIH0pOiBQcm9taXNlPEdlb21ldHJ5PiB7XHJcbiAgICAgICAgY29uc3QgbWVzaERhdGEgPSBhd2FpdCB0aGlzLmRlY29kZU1lc2hUb01lc2hEYXRhQXN5bmMoZGF0YSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkobmFtZSwgc2NlbmUpO1xyXG4gICAgICAgIGlmIChtZXNoRGF0YS5pbmRpY2VzKSB7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEluZGljZXMobWVzaERhdGEuaW5kaWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIG1lc2hEYXRhLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0VmVydGljZXNCdWZmZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4QnVmZmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmdldEVuZ2luZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5raW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuYnl0ZVN0cmlkZSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLmJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5ub3JtYWxpemVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBtZXNoRGF0YS50b3RhbFZlcnRpY2VzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZW9tZXRyeTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYXN5bmMgX2RlY29kZU1lc2hUb0dlb21ldHJ5Rm9yR2x0ZkFzeW5jKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogQXJyYXlCdWZmZXIgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgYXR0cmlidXRlczogeyBba2luZDogc3RyaW5nXTogbnVtYmVyIH0sXHJcbiAgICAgICAgZ2x0Zk5vcm1hbGl6ZWRPdmVycmlkZTogeyBba2luZDogc3RyaW5nXTogYm9vbGVhbiB9LFxyXG4gICAgICAgIGJvdW5kaW5nSW5mbzogTnVsbGFibGU8Qm91bmRpbmdJbmZvPlxyXG4gICAgKTogUHJvbWlzZTxHZW9tZXRyeT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc2hEYXRhID0gYXdhaXQgdGhpcy5kZWNvZGVNZXNoVG9NZXNoRGF0YUFzeW5jKGRhdGEsIGF0dHJpYnV0ZXMsIGdsdGZOb3JtYWxpemVkT3ZlcnJpZGUpO1xyXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KG5hbWUsIHNjZW5lKTtcclxuICAgICAgICBpZiAoYm91bmRpbmdJbmZvKSB7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5Ll9ib3VuZGluZ0luZm8gPSBib3VuZGluZ0luZm87XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnVzZUJvdW5kaW5nSW5mb0Zyb21HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNoRGF0YS5pbmRpY2VzKSB7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEluZGljZXMobWVzaERhdGEuaW5kaWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIG1lc2hEYXRhLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0VmVydGljZXNCdWZmZXIoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4QnVmZmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmdldEVuZ2luZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5raW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuYnl0ZVN0cmlkZSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLmJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS5ub3JtYWxpemVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBtZXNoRGF0YS50b3RhbFZlcnRpY2VzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZW9tZXRyeTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBnaXRodWIvbm8tdGhlbiAqL1xyXG5pbXBvcnQgeyBEcmFjb0RlY29kZXIgfSBmcm9tIFwiY29yZS9NZXNoZXMvQ29tcHJlc3Npb24vZHJhY29EZWNvZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24gfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1lc2hQcmltaXRpdmUsIElCdWZmZXJWaWV3IH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyLCBBcnJheUl0ZW0sIExvYWRCb3VuZGluZ0luZm9Gcm9tUG9zaXRpb25BY2Nlc3NvciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQnVmZmVyVmlld0RyYWNvIGV4dGVuZHMgSUJ1ZmZlclZpZXcge1xyXG4gICAgX2RyYWNvQmFieWxvbkdlb21ldHJ5PzogUHJvbWlzZTxHZW9tZXRyeT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uL1JFQURNRS5tZClcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIEtIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRyYWNvIGRlY29kZXIgdXNlZCB0byBkZWNvZGUgdmVydGV4IGRhdGEgb3IgRHJhY29EZWNvZGVyLkRlZmF1bHQgaWYgbm90IGRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRyYWNvRGVjb2Rlcj86IERyYWNvRGVjb2RlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0byB1c2UgdGhlIG5vcm1hbGl6ZWQgZmxhZyBmcm9tIHRoZSBnbFRGIGFjY2Vzc29yIGluc3RlYWQgb2YgdGhlIERyYWNvIGRhdGEuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VOb3JtYWxpemVkRmxhZ0Zyb21BY2Nlc3NvciA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBEcmFjb0RlY29kZXIuRGVmYXVsdEF2YWlsYWJsZSAmJiB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRyYWNvRGVjb2RlcjtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIF9sb2FkVmVydGV4RGF0YUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1lc2g6IE1lc2gpOiBOdWxsYWJsZTxQcm9taXNlPEdlb21ldHJ5Pj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJS0hSRHJhY29NZXNoQ29tcHJlc3Npb24sIEdlb21ldHJ5Pihjb250ZXh0LCBwcmltaXRpdmUsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1vZGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1vZGUgIT09IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUyAmJiBwcmltaXRpdmUubW9kZSAhPT0gTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfU1RSSVApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFVuc3VwcG9ydGVkIG1vZGUgJHtwcmltaXRpdmUubW9kZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlczogeyBba2luZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZDogeyBba2luZDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRBdHRyaWJ1dGUgPSAobmFtZTogc3RyaW5nLCBraW5kOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gZXh0ZW5zaW9uLmF0dHJpYnV0ZXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pcXVlSWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLl9kZWxheUluZm8gPSBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLl9kZWxheUluZm8uaW5kZXhPZihraW5kKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvLnB1c2goa2luZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1traW5kXSA9IHVuaXF1ZUlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZU5vcm1hbGl6ZWRGbGFnRnJvbUFjY2Vzc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uVHJ5R2V0KHRoaXMuX2xvYWRlci5nbHRmLmFjY2Vzc29ycywgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkW2tpbmRdID0gYWNjZXNzb3Iubm9ybWFsaXplZCB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiUE9TSVRJT05cIiwgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJOT1JNQUxcIiwgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEFOR0VOVFwiLCBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMFwiLCBWZXJ0ZXhCdWZmZXIuVVZLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzFcIiwgVmVydGV4QnVmZmVyLlVWMktpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMlwiLCBWZXJ0ZXhCdWZmZXIuVVYzS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8zXCIsIFZlcnRleEJ1ZmZlci5VVjRLaW5kKTtcclxuICAgICAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzRcIiwgVmVydGV4QnVmZmVyLlVWNUtpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfNVwiLCBWZXJ0ZXhCdWZmZXIuVVY2S2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJKT0lOVFNfMFwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZCk7XHJcbiAgICAgICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJXRUlHSFRTXzBcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQpO1xyXG4gICAgICAgICAgICBsb2FkQXR0cmlidXRlKFwiQ09MT1JfMFwiLCBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGV4dGVuc2lvbkNvbnRleHQsIHRoaXMuX2xvYWRlci5nbHRmLmJ1ZmZlclZpZXdzLCBleHRlbnNpb24uYnVmZmVyVmlldykgYXMgSUJ1ZmZlclZpZXdEcmFjbztcclxuICAgICAgICAgICAgaWYgKCFidWZmZXJWaWV3Ll9kcmFjb0JhYnlsb25HZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldy5fZHJhY29CYWJ5bG9uR2VvbWV0cnkgPSB0aGlzLl9sb2FkZXIubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KS50aGVuKGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhY29EZWNvZGVyID0gdGhpcy5kcmFjb0RlY29kZXIgfHwgRHJhY29EZWNvZGVyLkRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25BY2Nlc3NvciA9IEFycmF5SXRlbS5UcnlHZXQodGhpcy5fbG9hZGVyLmdsdGYuYWNjZXNzb3JzLCBwcmltaXRpdmUuYXR0cmlidXRlc1tcIlBPU0lUSU9OXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQm91bmRpbmdJbmZvID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuX2xvYWRlci5wYXJlbnQuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ICYmICFiYWJ5bG9uTWVzaC5za2VsZXRvbiAmJiBwb3NpdGlvbkFjY2Vzc29yID8gTG9hZEJvdW5kaW5nSW5mb0Zyb21Qb3NpdGlvbkFjY2Vzc29yKHBvc2l0aW9uQWNjZXNzb3IpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZHJhY29EZWNvZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5fZGVjb2RlTWVzaFRvR2VvbWV0cnlGb3JHbHRmQXN5bmMoYmFieWxvbk1lc2gubmFtZSwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSwgZGF0YSwgYXR0cmlidXRlcywgbm9ybWFsaXplZCwgYmFieWxvbkJvdW5kaW5nSW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBidWZmZXJWaWV3Ll9kcmFjb0JhYnlsb25HZW9tZXRyeTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24obG9hZGVyKSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=