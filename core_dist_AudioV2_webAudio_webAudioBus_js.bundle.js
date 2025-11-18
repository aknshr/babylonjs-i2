"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_webAudio_webAudioBus_js"],{

/***/ "../core/dist/AudioV2/abstractAudio/abstractAudioBus.js":
/*!**************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractAudioBus.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAudioBus: () => (/* binding */ AbstractAudioBus)
/* harmony export */ });
/* harmony import */ var _abstractAudioOutNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioOutNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioOutNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class representing an audio bus with volume control.
 *
 * An audio bus is a node in the audio graph that can have multiple inputs and outputs. It is typically used to group
 * sounds together and apply effects to them.
 */
class AbstractAudioBus extends _abstractAudioOutNode__WEBPACK_IMPORTED_MODULE_0__.AbstractAudioOutNode {
    constructor(name, engine) {
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */);
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

/***/ "../core/dist/AudioV2/abstractAudio/audioBus.js":
/*!******************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/audioBus.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioBus: () => (/* binding */ AudioBus)
/* harmony export */ });
/* harmony import */ var _abstractAudioBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioBus */ "../core/dist/AudioV2/abstractAudio/abstractAudioBus.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class for an audio bus that has spatial audio and stereo output capabilities.
 *
 * Instances of this class can be connected to other audio buses.
 *
 * Audio buses are created by the {@link CreateAudioBusAsync} function.
 */
class AudioBus extends _abstractAudioBus__WEBPACK_IMPORTED_MODULE_0__.AbstractAudioBus {
    constructor(name, engine) {
        super(name, engine);
        this._outBus = null;
        this._onOutBusDisposed = () => {
            this.outBus = this.engine.defaultMainBus;
        };
    }
    /**
     * The output bus of the audio bus. Defaults to the audio engine's default main bus.
     */
    get outBus() {
        return this._outBus;
    }
    set outBus(outBus) {
        if (this._outBus === outBus) {
            return;
        }
        if (this._outBus) {
            this._outBus.onDisposeObservable.removeCallback(this._onOutBusDisposed);
            if (!this._disconnect(this._outBus)) {
                throw new Error("Disconnect failed");
            }
        }
        this._outBus = outBus;
        if (this._outBus) {
            this._outBus.onDisposeObservable.add(this._onOutBusDisposed);
            if (!this._connect(this._outBus)) {
                throw new Error("Connect failed");
            }
        }
    }
    /**
     * Releases associated resources.
     */
    dispose() {
        super.dispose();
        this._outBus = null;
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

/***/ "../core/dist/AudioV2/webAudio/webAudioBus.js":
/*!****************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioBus.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioBus: () => (/* binding */ _WebAudioBus)
/* harmony export */ });
/* harmony import */ var _abstractAudio_audioBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudio/audioBus */ "../core/dist/AudioV2/abstractAudio/audioBus.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractAudio/subProperties/stereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js");
/* harmony import */ var _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subNodes/webAudioBusAndSoundSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js");
/* harmony import */ var _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subProperties/spatialWebAudio */ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/** @internal */
class _WebAudioBus extends _abstractAudio_audioBus__WEBPACK_IMPORTED_MODULE_0__.AudioBus {
    /** @internal */
    constructor(name, engine, options) {
        super(name, engine);
        this._spatial = null;
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._stereo = null;
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
        this._subGraph = new _WebAudioBus._SubGraph(this);
    }
    /** @internal */
    async _initAsync(options) {
        if (options.outBus) {
            this.outBus = options.outBus;
        }
        else {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0,_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._HasSpatialAudioOptions)(options)) {
            this._initSpatialProperty();
        }
        this.engine._addNode(this);
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._spatial = null;
        this._stereo = null;
        this.engine._removeNode(this);
    }
    /** @internal */
    get _inNode() {
        return this._subGraph._inNode;
    }
    /** @internal */
    get _outNode() {
        return this._subGraph._outNode;
    }
    /** @internal */
    get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
    }
    /** @internal */
    get stereo() {
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__._StereoAudio(this._subGraph));
    }
    /** @internal */
    getClassName() {
        return "_WebAudioBus";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initSpatialProperty() {
        if (!this._spatial) {
            this._spatial = new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__._SpatialWebAudio(this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
    }
}
_WebAudioBus._SubGraph = class extends _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_3__._WebAudioBusAndSoundSubGraph {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9CdXNfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBb0JBOzs7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUhBO0FBdURBO0FBQ0E7QUFDQTtBQXJEQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvQnVzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2F1ZGlvQnVzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb0J1cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb05vZGVUeXBlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdEF1ZGlvT3V0Tm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0QXVkaW9CdXNPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucyB7fVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhbiBhdWRpbyBidXMgd2l0aCB2b2x1bWUgY29udHJvbC5cbiAqXG4gKiBBbiBhdWRpbyBidXMgaXMgYSBub2RlIGluIHRoZSBhdWRpbyBncmFwaCB0aGF0IGNhbiBoYXZlIG11bHRpcGxlIGlucHV0cyBhbmQgb3V0cHV0cy4gSXQgaXMgdHlwaWNhbGx5IHVzZWQgdG8gZ3JvdXBcbiAqIHNvdW5kcyB0b2dldGhlciBhbmQgYXBwbHkgZWZmZWN0cyB0byB0aGVtLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBdWRpb0J1cyBleHRlbmRzIEFic3RyYWN0QXVkaW9PdXROb2RlIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBBdWRpb05vZGVUeXBlLkhBU19JTlBVVFNfQU5EX09VVFBVVFMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0QXVkaW9CdXNPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb0J1c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RBdWRpb0J1cyB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgTWFpbkF1ZGlvQnVzIH0gZnJvbSBcIi4vbWFpbkF1ZGlvQnVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3BhdGlhbEF1ZGlvLCBJU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTdGVyZW9BdWRpbywgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuXG4vLyBOQjogU2Vjb25kYXJ5IGF1ZGlvIGJ1c2VzIHdpbGwgYmUgYWRkZWQgbGF0ZXIuXG5leHBvcnQgdHlwZSBQcmltYXJ5QXVkaW9CdXMgPSBNYWluQXVkaW9CdXMgfCBBdWRpb0J1cztcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhbiBhdWRpbyBidXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUF1ZGlvQnVzT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdEF1ZGlvQnVzT3B0aW9ucywgSVNwYXRpYWxBdWRpb09wdGlvbnMsIElTdGVyZW9BdWRpb09wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIG9mIHRoZSBhdWRpbyBidXMuIERlZmF1bHRzIHRvIHRoZSBhdWRpbyBlbmdpbmUncyBkZWZhdWx0IG1haW4gYnVzLlxuICAgICAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIuZGVmYXVsdE1haW5CdXN9XG4gICAgICovXG4gICAgb3V0QnVzOiBQcmltYXJ5QXVkaW9CdXM7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgZm9yIGFuIGF1ZGlvIGJ1cyB0aGF0IGhhcyBzcGF0aWFsIGF1ZGlvIGFuZCBzdGVyZW8gb3V0cHV0IGNhcGFiaWxpdGllcy5cbiAqXG4gKiBJbnN0YW5jZXMgb2YgdGhpcyBjbGFzcyBjYW4gYmUgY29ubmVjdGVkIHRvIG90aGVyIGF1ZGlvIGJ1c2VzLlxuICpcbiAqIEF1ZGlvIGJ1c2VzIGFyZSBjcmVhdGVkIGJ5IHRoZSB7QGxpbmsgQ3JlYXRlQXVkaW9CdXNBc3luY30gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdWRpb0J1cyBleHRlbmRzIEFic3RyYWN0QXVkaW9CdXMge1xuICAgIHByaXZhdGUgX291dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGJ1cyBvZiB0aGUgYXVkaW8gYnVzLiBEZWZhdWx0cyB0byB0aGUgYXVkaW8gZW5naW5lJ3MgZGVmYXVsdCBtYWluIGJ1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG91dEJ1cygpOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dEJ1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG91dEJ1cyhvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4pIHtcbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cyA9PT0gb3V0QnVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNjb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG91dEJ1cztcblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQodGhpcy5fb25PdXRCdXNEaXNwb3NlZCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdCh0aGlzLl9vdXRCdXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCBmZWF0dXJlcyBvZiB0aGUgYXVkaW8gYnVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBzcGF0aWFsOiBBYnN0cmFjdFNwYXRpYWxBdWRpbztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGVyZW8gZmVhdHVyZXMgb2YgdGhlIGF1ZGlvIGJ1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgc3RlcmVvOiBBYnN0cmFjdFN0ZXJlb0F1ZGlvO1xuXG4gICAgLyoqXG4gICAgICogUmVsZWFzZXMgYXNzb2NpYXRlZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fb3V0QnVzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk91dEJ1c0Rpc3Bvc2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm91dEJ1cyA9IHRoaXMuZW5naW5lLmRlZmF1bHRNYWluQnVzO1xuICAgIH07XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9CdXNPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYXVkaW9CdXNcIjtcbmltcG9ydCB7IEF1ZGlvQnVzIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYXVkaW9CdXNcIjtcbmltcG9ydCB7IF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfU3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9TdGVyZW9BdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvc3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGggfSBmcm9tIFwiLi9zdWJOb2Rlcy93ZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9TcGF0aWFsV2ViQXVkaW8gfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxXZWJBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUsIElXZWJBdWRpb1N1cGVyTm9kZSB9IGZyb20gXCIuL3dlYkF1ZGlvTm9kZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1dlYkF1ZGlvQnVzIGV4dGVuZHMgQXVkaW9CdXMgaW1wbGVtZW50cyBJV2ViQXVkaW9TdXBlck5vZGUge1xuICAgIHByaXZhdGUgX3NwYXRpYWw6IE51bGxhYmxlPF9TcGF0aWFsQXVkaW8+ID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGF0aWFsQXV0b1VwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbE1pblVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RlcmVvOiBOdWxsYWJsZTxfU3RlcmVvQXVkaW8+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBfc3ViR3JhcGg6IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGg7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0J1c09wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbEF1dG9VcGRhdGUgPSBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwYXRpYWxNaW5VcGRhdGVUaW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsTWluVXBkYXRlVGltZSA9IG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IG5ldyBfV2ViQXVkaW9CdXMuX1N1YkdyYXBoKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2luaXRBc3luYyhvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0J1c09wdGlvbnM+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChvcHRpb25zLm91dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSBvcHRpb25zLm91dEJ1cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZW5naW5lLmlzUmVhZHlQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSB0aGlzLmVuZ2luZS5kZWZhdWx0TWFpbkJ1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX3N1YkdyYXBoLmluaXRBc3luYyhvcHRpb25zKTtcblxuICAgICAgICBpZiAoX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5naW5lLl9hZGROb2RlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3NwYXRpYWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGVyZW8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVOb2RlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5faW5Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3BhdGlhbCgpOiBfU3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9CdXNcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U3BhdGlhbFByb3BlcnR5KCk6IF9TcGF0aWFsQXVkaW8ge1xuICAgICAgICBpZiAoIXRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWwgPSBuZXcgX1NwYXRpYWxXZWJBdWRpbyh0aGlzLl9zdWJHcmFwaCwgdGhpcy5fc3BhdGlhbEF1dG9VcGRhdGUsIHRoaXMuX3NwYXRpYWxNaW5VcGRhdGVUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9TdWJHcmFwaCA9IGNsYXNzIGV4dGVuZHMgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB7XG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb3duZXI6IF9XZWJBdWRpb0J1cztcblxuICAgICAgICBwcm90ZWN0ZWQgZ2V0IF9kb3duc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl9kb3duc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX3Vwc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl91cHN0cmVhbU5vZGVzID8/IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9