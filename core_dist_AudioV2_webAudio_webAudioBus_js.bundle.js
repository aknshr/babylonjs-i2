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
    constructor(name, engine, options) {
        super(name, engine);
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._outBus = null;
        this._spatial = null;
        this._onOutBusDisposed = () => {
            this.outBus = this.engine.defaultMainBus;
        };
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
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
        super(name, engine, options);
        this._stereo = null;
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
    get stereo() {
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__._StereoAudio(this._subGraph));
    }
    /** @internal */
    getClassName() {
        return "_WebAudioBus";
    }
    _createSpatialProperty(autoUpdate, minUpdateTime) {
        return new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__._SpatialWebAudio(this._subGraph, autoUpdate, minUpdateTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9CdXNfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBb0JBOzs7Ozs7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBOEVBO0FBQ0E7QUFDQTtBQTNFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0QXVkaW9CdXMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vYXVkaW9CdXMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvQnVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTm9kZVR5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RBdWRpb091dE5vZGVPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb091dE5vZGVcIjtcbmltcG9ydCB7IEFic3RyYWN0QXVkaW9PdXROb2RlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb091dE5vZGVcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RBdWRpb0J1c09wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RBdWRpb091dE5vZGVPcHRpb25zIHt9XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGFuIGF1ZGlvIGJ1cyB3aXRoIHZvbHVtZSBjb250cm9sLlxuICpcbiAqIEFuIGF1ZGlvIGJ1cyBpcyBhIG5vZGUgaW4gdGhlIGF1ZGlvIGdyYXBoIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGUgaW5wdXRzIGFuZCBvdXRwdXRzLiBJdCBpcyB0eXBpY2FsbHkgdXNlZCB0byBncm91cFxuICogc291bmRzIHRvZ2V0aGVyIGFuZCBhcHBseSBlZmZlY3RzIHRvIHRoZW0uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEF1ZGlvQnVzIGV4dGVuZHMgQWJzdHJhY3RBdWRpb091dE5vZGUge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIEF1ZGlvTm9kZVR5cGUuSEFTX0lOUFVUU19BTkRfT1VUUFVUUyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RBdWRpb0J1c09wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvQnVzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdEF1ZGlvQnVzIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb0J1c1wiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHR5cGUgeyBNYWluQXVkaW9CdXMgfSBmcm9tIFwiLi9tYWluQXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTcGF0aWFsQXVkaW8sIElTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFN0ZXJlb0F1ZGlvLCBJU3RlcmVvQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFN0ZXJlb0F1ZGlvXCI7XG5cbi8vIE5COiBTZWNvbmRhcnkgYXVkaW8gYnVzZXMgd2lsbCBiZSBhZGRlZCBsYXRlci5cbmV4cG9ydCB0eXBlIFByaW1hcnlBdWRpb0J1cyA9IE1haW5BdWRpb0J1cyB8IEF1ZGlvQnVzO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGFuIGF1ZGlvIGJ1cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQXVkaW9CdXNPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0QXVkaW9CdXNPcHRpb25zLCBJU3BhdGlhbEF1ZGlvT3B0aW9ucywgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgb2YgdGhlIGF1ZGlvIGJ1cy4gRGVmYXVsdHMgdG8gdGhlIGF1ZGlvIGVuZ2luZSdzIGRlZmF1bHQgbWFpbiBidXMuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBvdXRCdXM6IFByaW1hcnlBdWRpb0J1cztcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgYW4gYXVkaW8gYnVzIHRoYXQgaGFzIHNwYXRpYWwgYXVkaW8gYW5kIHN0ZXJlbyBvdXRwdXQgY2FwYWJpbGl0aWVzLlxuICpcbiAqIEluc3RhbmNlcyBvZiB0aGlzIGNsYXNzIGNhbiBiZSBjb25uZWN0ZWQgdG8gb3RoZXIgYXVkaW8gYnVzZXMuXG4gKlxuICogQXVkaW8gYnVzZXMgYXJlIGNyZWF0ZWQgYnkgdGhlIHtAbGluayBDcmVhdGVBdWRpb0J1c0FzeW5jfSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF1ZGlvQnVzIGV4dGVuZHMgQWJzdHJhY3RBdWRpb0J1cyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbEF1dG9VcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwYXRpYWxNaW5VcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX291dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BhdGlhbDogTnVsbGFibGU8QWJzdHJhY3RTcGF0aWFsQXVkaW8+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMiwgb3B0aW9uczogUGFydGlhbDxJQXVkaW9CdXNPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxBdXRvVXBkYXRlID0gb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbE1pblVwZGF0ZVRpbWUgPSBvcHRpb25zLnNwYXRpYWxNaW5VcGRhdGVUaW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgb2YgdGhlIGF1ZGlvIGJ1cy4gRGVmYXVsdHMgdG8gdGhlIGF1ZGlvIGVuZ2luZSdzIGRlZmF1bHQgbWFpbiBidXMuXG4gICAgICovXG4gICAgcHVibGljIGdldCBvdXRCdXMoKTogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRCdXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvdXRCdXMob3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+KSB7XG4gICAgICAgIGlmICh0aGlzLl9vdXRCdXMgPT09IG91dEJ1cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5fb3V0QnVzLm9uRGlzcG9zZU9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25PdXRCdXNEaXNwb3NlZCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZGlzY29ubmVjdCh0aGlzLl9vdXRCdXMpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBvdXRCdXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5fb3V0QnVzLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3QodGhpcy5fb3V0QnVzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgYXVkaW8gZmVhdHVyZXMuXG4gICAgICovXG4gICAgcHVibGljIGdldCBzcGF0aWFsKCk6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0ZXJlbyBmZWF0dXJlcyBvZiB0aGUgYXVkaW8gYnVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBzdGVyZW86IEFic3RyYWN0U3RlcmVvQXVkaW87XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3NwYXRpYWw/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fc3BhdGlhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fb3V0QnVzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eShhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbztcblxuICAgIHByb3RlY3RlZCBfaW5pdFNwYXRpYWxQcm9wZXJ0eSgpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3BhdGlhbCA9IHRoaXMuX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eSh0aGlzLl9zcGF0aWFsQXV0b1VwZGF0ZSwgdGhpcy5fc3BhdGlhbE1pblVwZGF0ZVRpbWUpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk91dEJ1c0Rpc3Bvc2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm91dEJ1cyA9IHRoaXMuZW5naW5lLmRlZmF1bHRNYWluQnVzO1xuICAgIH07XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9CdXNPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYXVkaW9CdXNcIjtcbmltcG9ydCB7IEF1ZGlvQnVzIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYXVkaW9CdXNcIjtcbmltcG9ydCB7IF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zLCB0eXBlIEFic3RyYWN0U3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX1N0ZXJlb0F1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB9IGZyb20gXCIuL3N1Yk5vZGVzL3dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NwYXRpYWxXZWJBdWRpbyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvc3BhdGlhbFdlYkF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuL3dlYkF1ZGlvRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSwgSVdlYkF1ZGlvU3VwZXJOb2RlIH0gZnJvbSBcIi4vd2ViQXVkaW9Ob2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9CdXMgZXh0ZW5kcyBBdWRpb0J1cyBpbXBsZW1lbnRzIElXZWJBdWRpb1N1cGVyTm9kZSB7XG4gICAgcHJpdmF0ZSBfc3RlcmVvOiBOdWxsYWJsZTxfU3RlcmVvQXVkaW8+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBfc3ViR3JhcGg6IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGg7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0J1c09wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGggPSBuZXcgX1dlYkF1ZGlvQnVzLl9TdWJHcmFwaCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIF9pbml0QXN5bmMob3B0aW9uczogUGFydGlhbDxJQXVkaW9CdXNPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAob3B0aW9ucy5vdXRCdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gb3B0aW9ucy5vdXRCdXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuZ2luZS5pc1JlYWR5UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gdGhpcy5lbmdpbmUuZGVmYXVsdE1haW5CdXM7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5fYWRkTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zdGVyZW8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVOb2RlKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5faW5Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9CdXNcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eShhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIHJldHVybiBuZXcgX1NwYXRpYWxXZWJBdWRpbyh0aGlzLl9zdWJHcmFwaCwgYXV0b1VwZGF0ZSwgbWluVXBkYXRlVGltZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBzdXBlci5fY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSBzdXBlci5fZGlzY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1N1YkdyYXBoID0gY2xhc3MgZXh0ZW5kcyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIHtcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9vd25lcjogX1dlYkF1ZGlvQnVzO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfdXBzdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX3Vwc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9