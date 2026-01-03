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
        this._onOutBusDisposed = null;
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
            if (this._onOutBusDisposed) {
                this._outBus.onDisposeObservable.removeCallback(this._onOutBusDisposed);
                this._onOutBusDisposed = null;
            }
            if (!this._disconnect(this._outBus)) {
                throw new Error("Disconnect failed");
            }
        }
        this._outBus = outBus;
        if (this._outBus) {
            this._onOutBusDisposed = () => {
                this._outBus = null;
            };
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
        if (this._outBus && this._onOutBusDisposed) {
            this._outBus.onDisposeObservable.removeCallback(this._onOutBusDisposed);
            this._onOutBusDisposed = null;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9Tb3VuZFNvdXJjZV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQXVCQTs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBdUZBO0FBbEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RTb3VuZFNvdXJjZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vd2ViQXVkaW9Tb3VuZFNvdXJjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBdWRpb05vZGVUeXBlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdEF1ZGlvT3V0Tm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgdHlwZSB7IFByaW1hcnlBdWRpb0J1cyB9IGZyb20gXCIuL2F1ZGlvQnVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3BhdGlhbEF1ZGlvLCBJU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTdGVyZW9BdWRpbywgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc291bmQgc291cmNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTb3VuZFNvdXJjZU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RBdWRpb091dE5vZGVPcHRpb25zLCBJU3BhdGlhbEF1ZGlvT3B0aW9ucywgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgZm9yIHRoZSBzb3VuZCBzb3VyY2UuIERlZmF1bHRzIHRvIGBudWxsYC5cbiAgICAgKiAtIElmIG5vdCBzZXQgb3IgYG51bGxgLCBhbmQgYG91dEJ1c0F1dG9EZWZhdWx0YCBpcyBgdHJ1ZWAsIHRoZW4gdGhlIHNvdW5kIHNvdXJjZSBpcyBhdXRvbWF0aWNhbGx5IGNvbm5lY3RlZCB0byB0aGUgYXVkaW8gZW5naW5lJ3MgZGVmYXVsdCBtYWluIGJ1cy5cbiAgICAgKiBAc2VlIHtAbGluayBBdWRpb0VuZ2luZVYyLmRlZmF1bHRNYWluQnVzfVxuICAgICAqL1xuICAgIG91dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNvdW5kJ3MgYG91dEJ1c2Agc2hvdWxkIGRlZmF1bHQgdG8gdGhlIGF1ZGlvIGVuZ2luZSdzIG1haW4gYnVzLiBEZWZhdWx0cyB0byBgdHJ1ZWAgZm9yIGFsbCBzb3VuZCBzb3VyY2VzIGV4Y2VwdCBtaWNyb3Bob25lcy5cbiAgICAgKi9cbiAgICBvdXRCdXNBdXRvRGVmYXVsdDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzb3VuZCBpbiB0aGUgYXVkaW8gZW5naW5lLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTb3VuZFNvdXJjZSBleHRlbmRzIEFic3RyYWN0QXVkaW9PdXROb2RlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGF0aWFsQXV0b1VwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbE1pblVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfb3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+ID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcGF0aWFsOiBOdWxsYWJsZTxBYnN0cmFjdFNwYXRpYWxBdWRpbz4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBvcHRpb25zOiBQYXJ0aWFsPElTb3VuZFNvdXJjZU9wdGlvbnM+LCBub2RlVHlwZTogQXVkaW9Ob2RlVHlwZSA9IEF1ZGlvTm9kZVR5cGUuSEFTX09VVFBVVFMpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBub2RlVHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbEF1dG9VcGRhdGUgPSBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwYXRpYWxNaW5VcGRhdGVUaW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsTWluVXBkYXRlVGltZSA9IG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGJ1cyBmb3IgdGhlIHNvdW5kLlxuICAgICAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIuZGVmYXVsdE1haW5CdXN9XG4gICAgICovXG4gICAgcHVibGljIGdldCBvdXRCdXMoKTogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRCdXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvdXRCdXMob3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+KSB7XG4gICAgICAgIGlmICh0aGlzLl9vdXRCdXMgPT09IG91dEJ1cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlzY29ubmVjdCh0aGlzLl9vdXRCdXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBvdXRCdXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5fb25PdXRCdXNEaXNwb3NlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRCdXMgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX291dEJ1cy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZCh0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdCh0aGlzLl9vdXRCdXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCBhdWRpbyBmZWF0dXJlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNwYXRpYWwoKTogQWJzdHJhY3RTcGF0aWFsQXVkaW8ge1xuICAgICAgICBpZiAodGhpcy5fc3BhdGlhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RlcmVvIGZlYXR1cmVzIG9mIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RlcmVvOiBBYnN0cmFjdFN0ZXJlb0F1ZGlvO1xuXG4gICAgLyoqXG4gICAgICogUmVsZWFzZXMgYXNzb2NpYXRlZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zcGF0aWFsPy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3NwYXRpYWwgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl9vdXRCdXMgJiYgdGhpcy5fb25PdXRCdXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5fb3V0QnVzLm9uRGlzcG9zZU9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25PdXRCdXNEaXNwb3NlZCk7XG4gICAgICAgICAgICB0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3JlYXRlU3BhdGlhbFByb3BlcnR5KGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcik6IEFic3RyYWN0U3BhdGlhbEF1ZGlvO1xuXG4gICAgcHJvdGVjdGVkIF9pbml0U3BhdGlhbFByb3BlcnR5KCk6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zcGF0aWFsID0gdGhpcy5fY3JlYXRlU3BhdGlhbFByb3BlcnR5KHRoaXMuX3NwYXRpYWxBdXRvVXBkYXRlLCB0aGlzLl9zcGF0aWFsTWluVXBkYXRlVGltZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uT3V0QnVzRGlzcG9zZWQ6IE51bGxhYmxlPCgpID0+IHZvaWQ+ID0gbnVsbDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pc1NwYXRpYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgX2lzU3BhdGlhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUgJiYgIXRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdmFsdWUgJiYgdGhpcy5fc3BhdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJU291bmRTb3VyY2VPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RTb3VuZFNvdXJjZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RTb3VuZFNvdXJjZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRTb3VyY2VcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTcGF0aWFsQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9TdGVyZW9BdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvc3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGggfSBmcm9tIFwiLi9zdWJOb2Rlcy93ZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9TcGF0aWFsV2ViQXVkaW8gfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxXZWJBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUgfSBmcm9tIFwiLi93ZWJBdWRpb05vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9XZWJBdWRpb1NvdW5kU291cmNlIGV4dGVuZHMgQWJzdHJhY3RTb3VuZFNvdXJjZSB7XG4gICAgcHJpdmF0ZSBfc3RlcmVvOiBOdWxsYWJsZTxfU3RlcmVvQXVkaW8+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBfc3ViR3JhcGg6IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGg7XG4gICAgcHJvdGVjdGVkIF93ZWJBdWRpb05vZGU6IEF1ZGlvTm9kZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0IHwgT2ZmbGluZUF1ZGlvQ29udGV4dDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgd2ViQXVkaW9Ob2RlOiBBdWRpb05vZGUsIGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBvcHRpb25zOiBQYXJ0aWFsPElTb3VuZFNvdXJjZU9wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gdGhpcy5lbmdpbmUuX2F1ZGlvQ29udGV4dDtcbiAgICAgICAgdGhpcy5fd2ViQXVkaW9Ob2RlID0gd2ViQXVkaW9Ob2RlO1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gbmV3IF9XZWJBdWRpb1NvdW5kU291cmNlLl9TdWJHcmFwaCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIF9pbml0QXN5bmMob3B0aW9uczogUGFydGlhbDxJU291bmRTb3VyY2VPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAob3B0aW9ucy5vdXRCdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gb3B0aW9ucy5vdXRCdXM7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vdXRCdXNBdXRvRGVmYXVsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZW5naW5lLmlzUmVhZHlQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSB0aGlzLmVuZ2luZS5kZWZhdWx0TWFpbkJ1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX3N1YkdyYXBoLmluaXRBc3luYyhvcHRpb25zKTtcblxuICAgICAgICBpZiAoX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5naW5lLl9hZGROb2RlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWJBdWRpb05vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5fb3V0Tm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBzdGVyZW8oKTogX1N0ZXJlb0F1ZGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXJlbyA/PyAodGhpcy5fc3RlcmVvID0gbmV3IF9TdGVyZW9BdWRpbyh0aGlzLl9zdWJHcmFwaCkpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3N0ZXJlbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGguZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVOb2RlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb1NvdW5kU291cmNlXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBzdXBlci5fY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHdyYXBwZWQgbm9kZSBpcyBub3QgYXZhaWxhYmxlIG5vdywgaXQgd2lsbCBiZSBjb25uZWN0ZWQgbGF0ZXIgYnkgdGhlIHN1YmdyYXBoLlxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eShhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIHJldHVybiBuZXcgX1NwYXRpYWxXZWJBdWRpbyh0aGlzLl9zdWJHcmFwaCwgYXV0b1VwZGF0ZSwgbWluVXBkYXRlVGltZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1N1YkdyYXBoID0gY2xhc3MgZXh0ZW5kcyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIHtcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9vd25lcjogX1dlYkF1ZGlvU291bmRTb3VyY2U7XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfZG93bnN0cmVhbU5vZGVzKCk6IE51bGxhYmxlPFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lci5fZG93bnN0cmVhbU5vZGVzID8/IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgZ2V0IF91cHN0cmVhbU5vZGVzKCk6IE51bGxhYmxlPFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lci5fdXBzdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9vblN1Yk5vZGVzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgICAgIHN1cGVyLl9vblN1Yk5vZGVzQ2hhbmdlZCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9vd25lci5faW5Ob2RlLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX293bmVyLl9zdWJHcmFwaC5faW5Ob2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3duZXIuX2luTm9kZS5jb25uZWN0KHRoaXMuX293bmVyLl9zdWJHcmFwaC5faW5Ob2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9