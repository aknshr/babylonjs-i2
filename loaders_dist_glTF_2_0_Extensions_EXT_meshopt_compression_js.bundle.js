"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_EXT_meshopt_compression_js"],{

/***/ "../core/dist/Meshes/Compression/meshoptCompression.js":
/*!*************************************************************!*\
  !*** ../core/dist/Meshes/Compression/meshoptCompression.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshoptCompression: () => (/* binding */ MeshoptCompression)
/* harmony export */ });
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


// eslint-disable-next-line @typescript-eslint/naming-convention
let NumberOfWorkers = 0;
// eslint-disable-next-line @typescript-eslint/naming-convention
let WorkerTimeout = null;
/**
 * Meshopt compression (https://github.com/zeux/meshoptimizer)
 *
 * This class wraps the meshopt library from https://github.com/zeux/meshoptimizer/tree/master/js.
 *
 * **Encoder**
 *
 * The encoder is not currently implemented.
 *
 * **Decoder**
 *
 * By default, the configuration points to a copy of the meshopt files on the Babylon.js preview CDN (e.g. https://preview.babylonjs.com/meshopt_decoder.js).
 *
 * To update the configuration, use the following code:
 * ```javascript
 *     MeshoptCompression.Configuration = {
 *         decoder: {
 *             url: "<url to the meshopt decoder library>"
 *         }
 *     };
 * ```
 */
class MeshoptCompression {
    /**
     * Default instance for the meshoptimizer object.
     */
    static get Default() {
        if (!MeshoptCompression._Default) {
            MeshoptCompression._Default = new MeshoptCompression();
        }
        return MeshoptCompression._Default;
    }
    /**
     * Constructor
     */
    constructor() {
        const decoder = MeshoptCompression.Configuration.decoder;
        // eslint-disable-next-line github/no-then
        this._decoderModulePromise = _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(decoder.url).then(() => {
            // Wait for WebAssembly compilation before resolving promise
            return MeshoptDecoder.ready;
        });
    }
    /**
     * Stop all async operations and release resources.
     */
    dispose() {
        delete this._decoderModulePromise;
    }
    /**
     * Decode meshopt data.
     * @see https://github.com/zeux/meshoptimizer/tree/master/js#decoder
     * @param source The input data.
     * @param count The number of elements.
     * @param stride The stride in bytes.
     * @param mode The compression mode.
     * @param filter The compression filter.
     * @returns a Promise<Uint8Array> that resolves to the decoded data
     */
    async decodeGltfBufferAsync(source, count, stride, mode, filter) {
        await this._decoderModulePromise;
        if (NumberOfWorkers === 0) {
            MeshoptDecoder.useWorkers(1);
            NumberOfWorkers = 1;
        }
        const result = await MeshoptDecoder.decodeGltfBufferAsync(count, stride, source, mode, filter);
        // a simple debounce to avoid switching back and forth between workers and no workers while decoding
        if (WorkerTimeout !== null) {
            clearTimeout(WorkerTimeout);
        }
        WorkerTimeout = setTimeout(() => {
            MeshoptDecoder.useWorkers(0);
            NumberOfWorkers = 0;
            WorkerTimeout = null;
        }, 1000);
        return result;
    }
}
/**
 * The configuration. Defaults to the following:
 * ```javascript
 * decoder: {
 *   url: "https://cdn.babylonjs.com/meshopt_decoder.js"
 * }
 * ```
 */
MeshoptCompression.Configuration = {
    decoder: {
        url: `${_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl}/meshopt_decoder.js`,
    },
};
MeshoptCompression._Default = null;


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

/***/ "../loaders/dist/glTF/2.0/Extensions/EXT_meshopt_compression.js":
/*!**********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/EXT_meshopt_compression.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_meshopt_compression: () => (/* binding */ EXT_meshopt_compression)
/* harmony export */ });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var core_Meshes_Compression_meshoptCompression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Meshes/Compression/meshoptCompression */ "../core/dist/Meshes/Compression/meshoptCompression.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const NAME = "EXT_meshopt_compression";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_meshopt_compression/README.md)
 *
 * This extension uses a WebAssembly decoder module from https://github.com/zeux/meshoptimizer/tree/master/js
 * @since 5.0.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class EXT_meshopt_compression {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this.enabled = loader.isExtensionUsed(NAME);
        this._loader = loader;
    }
    /** @internal */
    dispose() {
        this._loader = null;
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadBufferViewAsync(context, bufferView) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.LoadExtensionAsync(context, bufferView, this.name, async (extensionContext, extension) => {
            const bufferViewMeshopt = bufferView;
            if (bufferViewMeshopt._meshOptData) {
                return await bufferViewMeshopt._meshOptData;
            }
            const buffer = _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.ArrayItem.Get(`${context}/buffer`, this._loader.gltf.buffers, extension.buffer);
            bufferViewMeshopt._meshOptData = this._loader
                .loadBufferAsync(`/buffers/${buffer.index}`, buffer, extension.byteOffset || 0, extension.byteLength)
                // eslint-disable-next-line github/no-then
                .then(async (buffer) => {
                return await core_Meshes_Compression_meshoptCompression__WEBPACK_IMPORTED_MODULE_1__.MeshoptCompression.Default.decodeGltfBufferAsync(buffer, extension.count, extension.byteStride, extension.mode, extension.filter);
            });
            return await bufferViewMeshopt._meshOptData;
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.registerGLTFExtension)(NAME, true, (loader) => new EXT_meshopt_compression(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfRVhUX21lc2hvcHRfY29tcHJlc3Npb25fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFtQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUdBO0FBQ0E7QUFFQTtBQWlCQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBZkE7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NZXNoZXMvQ29tcHJlc3Npb24vbWVzaG9wdENvbXByZXNzaW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9FWFRfbWVzaG9wdF9jb21wcmVzc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgSURpc3Bvc2FibGUgfSBmcm9tIFwiLi4vLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGxldCBNZXNob3B0RGVjb2RlcjogYW55O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5sZXQgTnVtYmVyT2ZXb3JrZXJzID0gMDtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5sZXQgV29ya2VyVGltZW91dDogTnVsbGFibGU8UmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4+ID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBtZXNob3B0aW1pemVyIGNvbXByZXNzaW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZXNob3B0Q29tcHJlc3Npb25Db25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIGRlY29kZXIuXHJcbiAgICAgKi9cclxuICAgIGRlY29kZXI6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdXJsIHRvIHRoZSBtZXNob3B0IGRlY29kZXIgbGlicmFyeS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB1cmw6IHN0cmluZztcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXNob3B0IGNvbXByZXNzaW9uIChodHRwczovL2dpdGh1Yi5jb20vemV1eC9tZXNob3B0aW1pemVyKVxyXG4gKlxyXG4gKiBUaGlzIGNsYXNzIHdyYXBzIHRoZSBtZXNob3B0IGxpYnJhcnkgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vemV1eC9tZXNob3B0aW1pemVyL3RyZWUvbWFzdGVyL2pzLlxyXG4gKlxyXG4gKiAqKkVuY29kZXIqKlxyXG4gKlxyXG4gKiBUaGUgZW5jb2RlciBpcyBub3QgY3VycmVudGx5IGltcGxlbWVudGVkLlxyXG4gKlxyXG4gKiAqKkRlY29kZXIqKlxyXG4gKlxyXG4gKiBCeSBkZWZhdWx0LCB0aGUgY29uZmlndXJhdGlvbiBwb2ludHMgdG8gYSBjb3B5IG9mIHRoZSBtZXNob3B0IGZpbGVzIG9uIHRoZSBCYWJ5bG9uLmpzIHByZXZpZXcgQ0ROIChlLmcuIGh0dHBzOi8vcHJldmlldy5iYWJ5bG9uanMuY29tL21lc2hvcHRfZGVjb2Rlci5qcykuXHJcbiAqXHJcbiAqIFRvIHVwZGF0ZSB0aGUgY29uZmlndXJhdGlvbiwgdXNlIHRoZSBmb2xsb3dpbmcgY29kZTpcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAgICAgTWVzaG9wdENvbXByZXNzaW9uLkNvbmZpZ3VyYXRpb24gPSB7XHJcbiAqICAgICAgICAgZGVjb2Rlcjoge1xyXG4gKiAgICAgICAgICAgICB1cmw6IFwiPHVybCB0byB0aGUgbWVzaG9wdCBkZWNvZGVyIGxpYnJhcnk+XCJcclxuICogICAgICAgICB9XHJcbiAqICAgICB9O1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZXNob3B0Q29tcHJlc3Npb24gaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIF9kZWNvZGVyTW9kdWxlUHJvbWlzZT86IFByb21pc2U8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb25maWd1cmF0aW9uLiBEZWZhdWx0cyB0byB0aGUgZm9sbG93aW5nOlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICogZGVjb2Rlcjoge1xyXG4gICAgICogICB1cmw6IFwiaHR0cHM6Ly9jZG4uYmFieWxvbmpzLmNvbS9tZXNob3B0X2RlY29kZXIuanNcIlxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlndXJhdGlvbjogSU1lc2hvcHRDb21wcmVzc2lvbkNvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICAgICAgZGVjb2Rlcjoge1xyXG4gICAgICAgICAgICB1cmw6IGAke1Rvb2xzLl9EZWZhdWx0Q2RuVXJsfS9tZXNob3B0X2RlY29kZXIuanNgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9EZWZhdWx0OiBOdWxsYWJsZTxNZXNob3B0Q29tcHJlc3Npb24+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgaW5zdGFuY2UgZm9yIHRoZSBtZXNob3B0aW1pemVyIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRGVmYXVsdCgpOiBNZXNob3B0Q29tcHJlc3Npb24ge1xyXG4gICAgICAgIGlmICghTWVzaG9wdENvbXByZXNzaW9uLl9EZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIE1lc2hvcHRDb21wcmVzc2lvbi5fRGVmYXVsdCA9IG5ldyBNZXNob3B0Q29tcHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNZXNob3B0Q29tcHJlc3Npb24uX0RlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBkZWNvZGVyID0gTWVzaG9wdENvbXByZXNzaW9uLkNvbmZpZ3VyYXRpb24uZGVjb2RlcjtcclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgdGhpcy5fZGVjb2Rlck1vZHVsZVByb21pc2UgPSBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKGRlY29kZXIudXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gV2FpdCBmb3IgV2ViQXNzZW1ibHkgY29tcGlsYXRpb24gYmVmb3JlIHJlc29sdmluZyBwcm9taXNlXHJcbiAgICAgICAgICAgIHJldHVybiBNZXNob3B0RGVjb2Rlci5yZWFkeTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3AgYWxsIGFzeW5jIG9wZXJhdGlvbnMgYW5kIHJlbGVhc2UgcmVzb3VyY2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5fZGVjb2Rlck1vZHVsZVByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgbWVzaG9wdCBkYXRhLlxyXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vemV1eC9tZXNob3B0aW1pemVyL3RyZWUvbWFzdGVyL2pzI2RlY29kZXJcclxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIGlucHV0IGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiBlbGVtZW50cy5cclxuICAgICAqIEBwYXJhbSBzdHJpZGUgVGhlIHN0cmlkZSBpbiBieXRlcy5cclxuICAgICAqIEBwYXJhbSBtb2RlIFRoZSBjb21wcmVzc2lvbiBtb2RlLlxyXG4gICAgICogQHBhcmFtIGZpbHRlciBUaGUgY29tcHJlc3Npb24gZmlsdGVyLlxyXG4gICAgICogQHJldHVybnMgYSBQcm9taXNlPFVpbnQ4QXJyYXk+IHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGRlY29kZWQgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZGVjb2RlR2x0ZkJ1ZmZlckFzeW5jKHNvdXJjZTogVWludDhBcnJheSwgY291bnQ6IG51bWJlciwgc3RyaWRlOiBudW1iZXIsIG1vZGU6IFwiQVRUUklCVVRFU1wiIHwgXCJUUklBTkdMRVNcIiB8IFwiSU5ESUNFU1wiLCBmaWx0ZXI/OiBzdHJpbmcpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLl9kZWNvZGVyTW9kdWxlUHJvbWlzZSE7XHJcbiAgICAgICAgaWYgKE51bWJlck9mV29ya2VycyA9PT0gMCkge1xyXG4gICAgICAgICAgICBNZXNob3B0RGVjb2Rlci51c2VXb3JrZXJzKDEpO1xyXG4gICAgICAgICAgICBOdW1iZXJPZldvcmtlcnMgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBNZXNob3B0RGVjb2Rlci5kZWNvZGVHbHRmQnVmZmVyQXN5bmMoY291bnQsIHN0cmlkZSwgc291cmNlLCBtb2RlLCBmaWx0ZXIpO1xyXG4gICAgICAgIC8vIGEgc2ltcGxlIGRlYm91bmNlIHRvIGF2b2lkIHN3aXRjaGluZyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHdvcmtlcnMgYW5kIG5vIHdvcmtlcnMgd2hpbGUgZGVjb2RpbmdcclxuICAgICAgICBpZiAoV29ya2VyVGltZW91dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoV29ya2VyVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFdvcmtlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgTWVzaG9wdERlY29kZXIudXNlV29ya2VycygwKTtcclxuICAgICAgICAgICAgTnVtYmVyT2ZXb3JrZXJzID0gMDtcclxuICAgICAgICAgICAgV29ya2VyVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEFycmF5SXRlbSwgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUJ1ZmZlclZpZXcgfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRVhUTWVzaG9wdENvbXByZXNzaW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBNZXNob3B0Q29tcHJlc3Npb24gfSBmcm9tIFwiY29yZS9NZXNoZXMvQ29tcHJlc3Npb24vbWVzaG9wdENvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJFWFRfbWVzaG9wdF9jb21wcmVzc2lvblwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEVYVF9tZXNob3B0X2NvbXByZXNzaW9uIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJFWFRfbWVzaG9wdF9jb21wcmVzc2lvblwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQnVmZmVyVmlld01lc2hvcHQgZXh0ZW5kcyBJQnVmZmVyVmlldyB7XHJcbiAgICBfbWVzaE9wdERhdGE/OiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hvcHRfY29tcHJlc3Npb24vUkVBRE1FLm1kKVxyXG4gKlxyXG4gKiBUaGlzIGV4dGVuc2lvbiB1c2VzIGEgV2ViQXNzZW1ibHkgZGVjb2RlciBtb2R1bGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vemV1eC9tZXNob3B0aW1pemVyL3RyZWUvbWFzdGVyL2pzXHJcbiAqIEBzaW5jZSA1LjAuMFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgRVhUX21lc2hvcHRfY29tcHJlc3Npb24gaW1wbGVtZW50cyBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IE5BTUU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogTnVsbGFibGU8UHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElFWFRNZXNob3B0Q29tcHJlc3Npb24sIEFycmF5QnVmZmVyVmlldz4oY29udGV4dCwgYnVmZmVyVmlldywgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXdNZXNob3B0ID0gYnVmZmVyVmlldyBhcyBJQnVmZmVyVmlld01lc2hvcHQ7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXJWaWV3TWVzaG9wdC5fbWVzaE9wdERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBidWZmZXJWaWV3TWVzaG9wdC5fbWVzaE9wdERhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyYCwgdGhpcy5fbG9hZGVyLmdsdGYuYnVmZmVycywgZXh0ZW5zaW9uLmJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXdNZXNob3B0Ll9tZXNoT3B0RGF0YSA9IHRoaXMuX2xvYWRlclxyXG4gICAgICAgICAgICAgICAgLmxvYWRCdWZmZXJBc3luYyhgL2J1ZmZlcnMvJHtidWZmZXIuaW5kZXh9YCwgYnVmZmVyLCBleHRlbnNpb24uYnl0ZU9mZnNldCB8fCAwLCBleHRlbnNpb24uYnl0ZUxlbmd0aClcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKGJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBNZXNob3B0Q29tcHJlc3Npb24uRGVmYXVsdC5kZWNvZGVHbHRmQnVmZmVyQXN5bmMoYnVmZmVyIGFzIFVpbnQ4QXJyYXksIGV4dGVuc2lvbi5jb3VudCwgZXh0ZW5zaW9uLmJ5dGVTdHJpZGUsIGV4dGVuc2lvbi5tb2RlLCBleHRlbnNpb24uZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGJ1ZmZlclZpZXdNZXNob3B0Ll9tZXNoT3B0RGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgRVhUX21lc2hvcHRfY29tcHJlc3Npb24obG9hZGVyKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==