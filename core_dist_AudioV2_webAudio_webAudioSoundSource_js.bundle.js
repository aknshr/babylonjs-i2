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
    constructor(name, engine, options, nodeType = 2 /* AudioNodeType.HAS_OUTPUTS */) {
        super(name, engine, nodeType);
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._outBus = null;
        this._spatial = null;
        this._onOutBusDisposed = () => {
            this._outBus = null;
        };
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
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
     * The spatial audio features.
     */
    get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
    }
    /**
     * Releases associated resources.
     */
    dispose() {
        super.dispose();
        this._spatial?.dispose();
        this._spatial = null;
        this._outBus = null;
    }
    _initSpatialProperty() {
        return (this._spatial = this._createSpatialProperty(this._spatialAutoUpdate, this._spatialMinUpdateTime));
    }
    /** @internal */
    get _isSpatial() {
        return this._spatial !== null;
    }
    set _isSpatial(value) {
        if (value && !this._spatial) {
            this._initSpatialProperty();
        }
        else if (!value && this._spatial) {
            this._spatial.dispose();
            this._spatial = null;
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
        super(name, engine, options);
        this._stereo = null;
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
    get stereo() {
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__._StereoAudio(this._subGraph));
    }
    /** @internal */
    dispose() {
        super.dispose();
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
    _createSpatialProperty(autoUpdate, minUpdateTime) {
        return new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__._SpatialWebAudio(this._subGraph, autoUpdate, minUpdateTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9Tb3VuZFNvdXJjZV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQXVCQTs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBNkVBO0FBQ0E7QUFDQTtBQTFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb1NvdW5kU291cmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEF1ZGlvTm9kZVR5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RBdWRpb091dE5vZGVPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb091dE5vZGVcIjtcbmltcG9ydCB7IEFic3RyYWN0QXVkaW9PdXROb2RlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb091dE5vZGVcIjtcbmltcG9ydCB0eXBlIHsgUHJpbWFyeUF1ZGlvQnVzIH0gZnJvbSBcIi4vYXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTcGF0aWFsQXVkaW8sIElTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFN0ZXJlb0F1ZGlvLCBJU3RlcmVvQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFN0ZXJlb0F1ZGlvXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzb3VuZCBzb3VyY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNvdW5kU291cmNlT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdEF1ZGlvT3V0Tm9kZU9wdGlvbnMsIElTcGF0aWFsQXVkaW9PcHRpb25zLCBJU3RlcmVvQXVkaW9PcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGJ1cyBmb3IgdGhlIHNvdW5kIHNvdXJjZS4gRGVmYXVsdHMgdG8gYG51bGxgLlxuICAgICAqIC0gSWYgbm90IHNldCBvciBgbnVsbGAsIGFuZCBgb3V0QnVzQXV0b0RlZmF1bHRgIGlzIGB0cnVlYCwgdGhlbiB0aGUgc291bmQgc291cmNlIGlzIGF1dG9tYXRpY2FsbHkgY29ubmVjdGVkIHRvIHRoZSBhdWRpbyBlbmdpbmUncyBkZWZhdWx0IG1haW4gYnVzLlxuICAgICAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIuZGVmYXVsdE1haW5CdXN9XG4gICAgICovXG4gICAgb3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+O1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc291bmQncyBgb3V0QnVzYCBzaG91bGQgZGVmYXVsdCB0byB0aGUgYXVkaW8gZW5naW5lJ3MgbWFpbiBidXMuIERlZmF1bHRzIHRvIGB0cnVlYCBmb3IgYWxsIHNvdW5kIHNvdXJjZXMgZXhjZXB0IG1pY3JvcGhvbmVzLlxuICAgICAqL1xuICAgIG91dEJ1c0F1dG9EZWZhdWx0OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHNvdW5kIGluIHRoZSBhdWRpbyBlbmdpbmUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNvdW5kU291cmNlIGV4dGVuZHMgQWJzdHJhY3RBdWRpb091dE5vZGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwYXRpYWxBdXRvVXBkYXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGF0aWFsTWluVXBkYXRlVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9vdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4gPSBudWxsO1xuICAgIHByaXZhdGUgX3NwYXRpYWw6IE51bGxhYmxlPEFic3RyYWN0U3BhdGlhbEF1ZGlvPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIsIG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4sIG5vZGVUeXBlOiBBdWRpb05vZGVUeXBlID0gQXVkaW9Ob2RlVHlwZS5IQVNfT1VUUFVUUykge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG5vZGVUeXBlKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhdGlhbEF1dG9VcGRhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsQXV0b1VwZGF0ZSA9IG9wdGlvbnMuc3BhdGlhbEF1dG9VcGRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxNaW5VcGRhdGVUaW1lID0gb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIGZvciB0aGUgc291bmQuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG91dEJ1cygpOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dEJ1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG91dEJ1cyhvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4pIHtcbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cyA9PT0gb3V0QnVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlzY29ubmVjdCh0aGlzLl9vdXRCdXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBvdXRCdXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5fb3V0QnVzLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIGF1ZGlvIGZlYXR1cmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc3BhdGlhbCgpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIGlmICh0aGlzLl9zcGF0aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3BhdGlhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdFNwYXRpYWxQcm9wZXJ0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGVyZW8gZmVhdHVyZXMgb2YgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzdGVyZW86IEFic3RyYWN0U3RlcmVvQXVkaW87XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3NwYXRpYWw/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fc3BhdGlhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fb3V0QnVzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eShhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbztcblxuICAgIHByb3RlY3RlZCBfaW5pdFNwYXRpYWxQcm9wZXJ0eSgpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3BhdGlhbCA9IHRoaXMuX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eSh0aGlzLl9zcGF0aWFsQXV0b1VwZGF0ZSwgdGhpcy5fc3BhdGlhbE1pblVwZGF0ZVRpbWUpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk91dEJ1c0Rpc3Bvc2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9vdXRCdXMgPSBudWxsO1xuICAgIH07XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaXNTcGF0aWFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3BhdGlhbCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IF9pc1NwYXRpYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9zcGF0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlICYmIHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWwuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSVNvdW5kU291cmNlT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRTb3VyY2VcIjtcbmltcG9ydCB7IEFic3RyYWN0U291bmRTb3VyY2UgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfU3RlcmVvQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3N0ZXJlb0F1ZGlvXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIH0gZnJvbSBcIi4vc3ViTm9kZXMvd2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoXCI7XG5pbXBvcnQgeyBfU3BhdGlhbFdlYkF1ZGlvIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9zcGF0aWFsV2ViQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4vd2ViQXVkaW9FbmdpbmVcIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvSW5Ob2RlIH0gZnJvbSBcIi4vd2ViQXVkaW9Ob2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9Tb3VuZFNvdXJjZSBleHRlbmRzIEFic3RyYWN0U291bmRTb3VyY2Uge1xuICAgIHByaXZhdGUgX3N0ZXJlbzogTnVsbGFibGU8X1N0ZXJlb0F1ZGlvPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgX3N1YkdyYXBoOiBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoO1xuICAgIHByb3RlY3RlZCBfd2ViQXVkaW9Ob2RlOiBBdWRpb05vZGU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IE9mZmxpbmVBdWRpb0NvbnRleHQ7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdlYkF1ZGlvTm9kZTogQXVkaW9Ob2RlLCBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSwgb3B0aW9uczogUGFydGlhbDxJU291bmRTb3VyY2VPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IHRoaXMuZW5naW5lLl9hdWRpb0NvbnRleHQ7XG4gICAgICAgIHRoaXMuX3dlYkF1ZGlvTm9kZSA9IHdlYkF1ZGlvTm9kZTtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IG5ldyBfV2ViQXVkaW9Tb3VuZFNvdXJjZS5fU3ViR3JhcGgodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBfaW5pdEFzeW5jKG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IG9wdGlvbnMub3V0QnVzO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub3V0QnVzQXV0b0RlZmF1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuZ2luZS5pc1JlYWR5UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gdGhpcy5lbmdpbmUuZGVmYXVsdE1haW5CdXM7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5fYWRkTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2ViQXVkaW9Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zdGVyZW8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLmVuZ2luZS5fcmVtb3ZlTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9Tb3VuZFNvdXJjZVwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSBzdXBlci5fZGlzY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jcmVhdGVTcGF0aWFsUHJvcGVydHkoYXV0b1VwZGF0ZTogYm9vbGVhbiwgbWluVXBkYXRlVGltZTogbnVtYmVyKTogQWJzdHJhY3RTcGF0aWFsQXVkaW8ge1xuICAgICAgICByZXR1cm4gbmV3IF9TcGF0aWFsV2ViQXVkaW8odGhpcy5fc3ViR3JhcGgsIGF1dG9VcGRhdGUsIG1pblVwZGF0ZVRpbWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9TdWJHcmFwaCA9IGNsYXNzIGV4dGVuZHMgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB7XG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb3duZXI6IF9XZWJBdWRpb1NvdW5kU291cmNlO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfdXBzdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX3Vwc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb25TdWJOb2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgICAgICBzdXBlci5fb25TdWJOb2Rlc0NoYW5nZWQoKTtcblxuICAgICAgICAgICAgdGhpcy5fb3duZXIuX2luTm9kZS5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lci5fc3ViR3JhcGguX2luTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX293bmVyLl9pbk5vZGUuY29ubmVjdCh0aGlzLl9vd25lci5fc3ViR3JhcGguX2luTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9