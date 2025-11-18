"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_webAudio_webAudioSoundSource_js"],{

/***/ "../core/dist/AudioV2/abstractAudio/abstractSoundSource.js":
/*!*****************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractSoundSource.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSoundSource: () => (/* binding */ AbstractSoundSource)
/* harmony export */ });
/* harmony import */ var _abstractAudioOutNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioOutNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioOutNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class representing a sound in the audio engine.
 */
class AbstractSoundSource extends _abstractAudioOutNode__WEBPACK_IMPORTED_MODULE_0__.AbstractAudioOutNode {
    constructor(name, engine, nodeType = 2 /* AudioNodeType.HAS_OUTPUTS */) {
        super(name, engine, nodeType);
        this._outBus = null;
        this._onOutBusDisposed = () => {
            this._outBus = null;
        };
    }
    /**
     * The output bus for the sound.
     * @see {@link AudioEngineV2.defaultMainBus}
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

/***/ "../core/dist/AudioV2/webAudio/webAudioSoundSource.js":
/*!************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioSoundSource.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioSoundSource: () => (/* binding */ _WebAudioSoundSource)
/* harmony export */ });
/* harmony import */ var _abstractAudio_abstractSoundSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudio/abstractSoundSource */ "../core/dist/AudioV2/abstractAudio/abstractSoundSource.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractAudio/subProperties/stereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js");
/* harmony import */ var _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subNodes/webAudioBusAndSoundSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js");
/* harmony import */ var _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subProperties/spatialWebAudio */ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/** @internal */
class _WebAudioSoundSource extends _abstractAudio_abstractSoundSource__WEBPACK_IMPORTED_MODULE_0__.AbstractSoundSource {
    /** @internal */
    constructor(name, webAudioNode, engine, options) {
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
        this._audioContext = this.engine._audioContext;
        this._webAudioNode = webAudioNode;
        this._subGraph = new _WebAudioSoundSource._SubGraph(this);
    }
    /** @internal */
    async _initAsync(options) {
        if (options.outBus) {
            this.outBus = options.outBus;
        }
        else if (options.outBusAutoDefault !== false) {
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
    get _inNode() {
        return this._webAudioNode;
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
    dispose() {
        super.dispose();
        this._spatial?.dispose();
        this._spatial = null;
        this._stereo = null;
        this._subGraph.dispose();
        this.engine._removeNode(this);
    }
    /** @internal */
    getClassName() {
        return "_WebAudioSoundSource";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
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
_WebAudioSoundSource._SubGraph = class extends _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_3__._WebAudioBusAndSoundSubGraph {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
    _onSubNodesChanged() {
        super._onSubNodesChanged();
        this._owner._inNode.disconnect();
        if (this._owner._subGraph._inNode) {
            this._owner._inNode.connect(this._owner._subGraph._inNode);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9Tb3VuZFNvdXJjZV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQXVCQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUhBO0FBdURBO0FBQ0E7QUFDQTtBQXJEQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRTb3VyY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvU291bmRTb3VyY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQXVkaW9Ob2RlVHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IElBYnN0cmFjdEF1ZGlvT3V0Tm9kZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvT3V0Tm9kZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RBdWRpb091dE5vZGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvT3V0Tm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBQcmltYXJ5QXVkaW9CdXMgfSBmcm9tIFwiLi9hdWRpb0J1c1wiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFNwYXRpYWxBdWRpbywgSVNwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3RlcmVvQXVkaW8sIElTdGVyZW9BdWRpb09wdGlvbnMgfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW9cIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHNvdW5kIHNvdXJjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU291bmRTb3VyY2VPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucywgSVNwYXRpYWxBdWRpb09wdGlvbnMsIElTdGVyZW9BdWRpb09wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIGZvciB0aGUgc291bmQgc291cmNlLiBEZWZhdWx0cyB0byBgbnVsbGAuXG4gICAgICogLSBJZiBub3Qgc2V0IG9yIGBudWxsYCwgYW5kIGBvdXRCdXNBdXRvRGVmYXVsdGAgaXMgYHRydWVgLCB0aGVuIHRoZSBzb3VuZCBzb3VyY2UgaXMgYXV0b21hdGljYWxseSBjb25uZWN0ZWQgdG8gdGhlIGF1ZGlvIGVuZ2luZSdzIGRlZmF1bHQgbWFpbiBidXMuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz47XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCdzIGBvdXRCdXNgIHNob3VsZCBkZWZhdWx0IHRvIHRoZSBhdWRpbyBlbmdpbmUncyBtYWluIGJ1cy4gRGVmYXVsdHMgdG8gYHRydWVgIGZvciBhbGwgc291bmQgc291cmNlcyBleGNlcHQgbWljcm9waG9uZXMuXG4gICAgICovXG4gICAgb3V0QnVzQXV0b0RlZmF1bHQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGEgc291bmQgaW4gdGhlIGF1ZGlvIGVuZ2luZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U291bmRTb3VyY2UgZXh0ZW5kcyBBYnN0cmFjdEF1ZGlvT3V0Tm9kZSB7XG4gICAgcHJpdmF0ZSBfb3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMiwgbm9kZVR5cGU6IEF1ZGlvTm9kZVR5cGUgPSBBdWRpb05vZGVUeXBlLkhBU19PVVRQVVRTKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgbm9kZVR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIGZvciB0aGUgc291bmQuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG91dEJ1cygpOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dEJ1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG91dEJ1cyhvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4pIHtcbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cyA9PT0gb3V0QnVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlzY29ubmVjdCh0aGlzLl9vdXRCdXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBvdXRCdXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5fb3V0QnVzLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIGZlYXR1cmVzIG9mIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3BhdGlhbDogQWJzdHJhY3RTcGF0aWFsQXVkaW87XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RlcmVvIGZlYXR1cmVzIG9mIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RlcmVvOiBBYnN0cmFjdFN0ZXJlb0F1ZGlvO1xuXG4gICAgLyoqXG4gICAgICogUmVsZWFzZXMgYXNzb2NpYXRlZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uT3V0QnVzRGlzcG9zZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG51bGw7XG4gICAgfTtcbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBJU291bmRTb3VyY2VPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RTb3VuZFNvdXJjZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RTb3VuZFNvdXJjZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRTb3VyY2VcIjtcbmltcG9ydCB7IF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfU3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9TdGVyZW9BdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvc3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGggfSBmcm9tIFwiLi9zdWJOb2Rlcy93ZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9TcGF0aWFsV2ViQXVkaW8gfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxXZWJBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUgfSBmcm9tIFwiLi93ZWJBdWRpb05vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9XZWJBdWRpb1NvdW5kU291cmNlIGV4dGVuZHMgQWJzdHJhY3RTb3VuZFNvdXJjZSB7XG4gICAgcHJpdmF0ZSBfc3BhdGlhbDogTnVsbGFibGU8X1NwYXRpYWxXZWJBdWRpbz4gPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwYXRpYWxBdXRvVXBkYXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGF0aWFsTWluVXBkYXRlVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zdGVyZW86IE51bGxhYmxlPF9TdGVyZW9BdWRpbz4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIF9zdWJHcmFwaDogX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaDtcbiAgICBwcm90ZWN0ZWQgX3dlYkF1ZGlvTm9kZTogQXVkaW9Ob2RlO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBfYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQgfCBPZmZsaW5lQXVkaW9Db250ZXh0O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB3ZWJBdWRpb05vZGU6IEF1ZGlvTm9kZSwgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUsIG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhdGlhbEF1dG9VcGRhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsQXV0b1VwZGF0ZSA9IG9wdGlvbnMuc3BhdGlhbEF1dG9VcGRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxNaW5VcGRhdGVUaW1lID0gb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IHRoaXMuZW5naW5lLl9hdWRpb0NvbnRleHQ7XG4gICAgICAgIHRoaXMuX3dlYkF1ZGlvTm9kZSA9IHdlYkF1ZGlvTm9kZTtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IG5ldyBfV2ViQXVkaW9Tb3VuZFNvdXJjZS5fU3ViR3JhcGgodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBfaW5pdEFzeW5jKG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IG9wdGlvbnMub3V0QnVzO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub3V0QnVzQXV0b0RlZmF1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuZ2luZS5pc1JlYWR5UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gdGhpcy5lbmdpbmUuZGVmYXVsdE1haW5CdXM7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5fYWRkTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2ViQXVkaW9Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3BhdGlhbCgpOiBfU3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zcGF0aWFsPy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3NwYXRpYWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3N0ZXJlbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGguZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVOb2RlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb1NvdW5kU291cmNlXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBzdXBlci5fY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHdyYXBwZWQgbm9kZSBpcyBub3QgYXZhaWxhYmxlIG5vdywgaXQgd2lsbCBiZSBjb25uZWN0ZWQgbGF0ZXIgYnkgdGhlIHN1YmdyYXBoLlxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U3BhdGlhbFByb3BlcnR5KCk6IF9TcGF0aWFsQXVkaW8ge1xuICAgICAgICBpZiAoIXRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWwgPSBuZXcgX1NwYXRpYWxXZWJBdWRpbyh0aGlzLl9zdWJHcmFwaCwgdGhpcy5fc3BhdGlhbEF1dG9VcGRhdGUsIHRoaXMuX3NwYXRpYWxNaW5VcGRhdGVUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9TdWJHcmFwaCA9IGNsYXNzIGV4dGVuZHMgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB7XG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb3duZXI6IF9XZWJBdWRpb1NvdW5kU291cmNlO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfdXBzdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX3Vwc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb25TdWJOb2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgICAgICBzdXBlci5fb25TdWJOb2Rlc0NoYW5nZWQoKTtcblxuICAgICAgICAgICAgdGhpcy5fb3duZXIuX2luTm9kZS5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lci5fc3ViR3JhcGguX2luTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX293bmVyLl9pbk5vZGUuY29ubmVjdCh0aGlzLl9vd25lci5fc3ViR3JhcGguX2luTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9