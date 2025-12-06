"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_abstractAudio_abstractSound_js-core_dist_AudioV2_abstractAudio_abstractSoun-4d7f70"],{

/***/ "../core/dist/AudioV2/abstractAudio/abstractSound.js":
/*!***********************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractSound.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSound: () => (/* binding */ AbstractSound)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _abstractSoundSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractSoundSource */ "../core/dist/AudioV2/abstractAudio/abstractSoundSource.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Abstract class representing a sound in the audio engine.
 */
class AbstractSound extends _abstractSoundSource__WEBPACK_IMPORTED_MODULE_1__.AbstractSoundSource {
    constructor(name, engine, options) {
        super(name, engine, options, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */); // Inputs are for instances.
        this._newestInstance = null;
        this._privateInstances = new Set();
        this._state = 1 /* SoundState.Stopped */;
        this._instances = this._privateInstances;
        /**
         * Observable for when the sound stops playing.
         */
        this.onEndedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._onInstanceEnded = (instance) => {
            if (this._newestInstance === instance) {
                this._newestInstance = null;
            }
            this._privateInstances.delete(instance);
            if (this._instances.size === 0) {
                this._state = 1 /* SoundState.Stopped */;
                this.onEndedObservable.notifyObservers(this);
            }
            instance.dispose();
        };
    }
    /**
     * The number of active instances of the sound that are currently playing.
     */
    get activeInstancesCount() {
        return this._instances.size;
    }
    /**
     * Whether the sound should start playing automatically. Defaults to `false`.
     */
    get autoplay() {
        return this._options.autoplay;
    }
    /**
     * The current playback time of the sound, in seconds.
     */
    get currentTime() {
        const instance = this._getNewestInstance();
        return instance ? instance.currentTime : 0;
    }
    set currentTime(value) {
        this.startOffset = value;
        const instance = this._getNewestInstance();
        if (instance) {
            instance.currentTime = value;
        }
    }
    /**
     * Whether the sound should loop. Defaults to `false`.
     */
    get loop() {
        return this._options.loop;
    }
    set loop(value) {
        this._options.loop = value;
    }
    /**
     * The maximum number of instances that can play at the same time. Defaults to `Infinity`.
     */
    get maxInstances() {
        return this._options.maxInstances;
    }
    set maxInstances(value) {
        this._options.maxInstances = value;
    }
    /**
     * The time within the sound buffer to start playing at, in seconds. Defaults to `0`.
     */
    get startOffset() {
        return this._options.startOffset;
    }
    set startOffset(value) {
        this._options.startOffset = value;
    }
    /**
     * The state of the sound.
     */
    get state() {
        return this._state;
    }
    /**
     * Releases associated resources.
     */
    dispose() {
        super.dispose();
        this.stop();
        this._newestInstance = null;
        this._privateInstances.clear();
        this.onEndedObservable.clear();
    }
    /**
     * Pauses the sound.
     */
    pause() {
        const it = this._instances.values();
        for (let next = it.next(); !next.done; next = it.next()) {
            next.value.pause();
        }
        this._state = 5 /* SoundState.Paused */;
    }
    /**
     * Resumes the sound.
     */
    resume() {
        if (this._state !== 5 /* SoundState.Paused */) {
            return;
        }
        const it = this._instances.values();
        for (let next = it.next(); !next.done; next = it.next()) {
            next.value.resume();
        }
        this._state = 3 /* SoundState.Started */;
    }
    _beforePlay(instance) {
        if (this.state === 5 /* SoundState.Paused */ && this._instances.size > 0) {
            this.resume();
            return;
        }
        instance.onEndedObservable.addOnce(this._onInstanceEnded);
        this._privateInstances.add(instance);
        this._newestInstance = instance;
    }
    _afterPlay(instance) {
        this._state = instance.state;
    }
    _getNewestInstance() {
        if (this._instances.size === 0) {
            return null;
        }
        if (!this._newestInstance) {
            const it = this._instances.values();
            for (let next = it.next(); !next.done; next = it.next()) {
                this._newestInstance = next.value;
            }
        }
        return this._newestInstance;
    }
    _setState(state) {
        this._state = state;
    }
    _stopExcessInstances() {
        if (this.maxInstances < Infinity) {
            const numberOfInstancesToStop = Array.from(this._instances).filter((instance) => instance.state === 3 /* SoundState.Started */).length - this.maxInstances;
            const it = this._instances.values();
            for (let i = 0; i < numberOfInstancesToStop; i++) {
                const instance = it.next().value;
                instance.stop();
            }
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

/***/ "../core/dist/AudioV2/abstractAudio/abstractSoundInstance.js":
/*!*******************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractSoundInstance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _AbstractSoundInstance: () => (/* binding */ _AbstractSoundInstance)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _abstractAudioNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractAudioNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _AbstractSoundInstance extends _abstractAudioNode__WEBPACK_IMPORTED_MODULE_1__.AbstractAudioNode {
    constructor(sound) {
        super(sound.engine, 2 /* AudioNodeType.HAS_OUTPUTS */);
        this._state = 1 /* SoundState.Stopped */;
        /** Observable triggered when the sound instance's playback ends */
        this.onEndedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** Observable triggered if the sound instance encounters an error and can not be played */
        this.onErrorObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** Observable triggered when the sound instance's state changes */
        this.onStateChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._sound = sound;
    }
    /** The playback state of the sound instance */
    get state() {
        return this._state;
    }
    /** @internal */
    dispose() {
        super.dispose();
        this.stop();
        this.onEndedObservable.clear();
        this.onStateChangedObservable.clear();
    }
    _setState(value) {
        if (this._state === value) {
            return;
        }
        this._state = value;
        this.onStateChangedObservable.notifyObservers(this);
        if (this._state === 1 /* SoundState.Stopped */) {
            this.onEndedObservable.notifyObservers(this);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19hYnN0cmFjdFNvdW5kX2pzLWNvcmVfZGlzdF9BdWRpb1YyX2Fic3RyYWN0QXVkaW9fYWJzdHJhY3RTb3VuLTRkN2Y3MC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQTRDQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTtBQW9MQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBN0xBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRQTtBQUVBO0FBU0E7QUFDQTtBQWVBO0FBQ0E7QUFkQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUF1QkE7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQTZFQTtBQUNBO0FBQ0E7QUExRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RTb3VuZEluc3RhbmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRTb3VyY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi8uLi9NaXNjL29ic2VydmFibGVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vc291bmRTdGF0ZVwiO1xuaW1wb3J0IHsgQXVkaW9Ob2RlVHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB7IEFic3RyYWN0U291bmRTb3VyY2UsIHR5cGUgSVNvdW5kU291cmNlT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRTb3VyY2VcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgSVZvbHVtZUF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFNvdW5kT3B0aW9uc0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBzdGFydCBwbGF5aW5nIGF1dG9tYXRpY2FsbHkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgYXV0b3BsYXk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGluc3RhbmNlcyB0aGF0IGNhbiBwbGF5IGF0IHRoZSBzYW1lIHRpbWUuIERlZmF1bHRzIHRvIGBJbmZpbml0eWAuXG4gICAgICovXG4gICAgbWF4SW5zdGFuY2VzOiBudW1iZXI7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGxvb3A6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgd2l0aGluIHRoZSBzb3VuZCBidWZmZXIgdG8gc3RhcnQgcGxheWluZyBhdCwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIHN0YXJ0T2Zmc2V0OiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZE9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZE9wdGlvbnNCYXNlLCBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zLCBJU291bmRTb3VyY2VPcHRpb25zIHt9XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgcGxheWluZyBhIHNvdW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zQmFzZSwgSVZvbHVtZUF1ZGlvT3B0aW9ucyB7fVxuXG4vKipcbiAqIE9wdGlvbnMgc3RvcmVkIGluIGEgc291bmQuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZFN0b3JlZE9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZE9wdGlvbnNCYXNlLCBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zQmFzZSB7fVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHNvdW5kIGluIHRoZSBhdWRpbyBlbmdpbmUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNvdW5kIGV4dGVuZHMgQWJzdHJhY3RTb3VuZFNvdXJjZSB7XG4gICAgcHJpdmF0ZSBfbmV3ZXN0SW5zdGFuY2U6IE51bGxhYmxlPF9BYnN0cmFjdFNvdW5kSW5zdGFuY2U+ID0gbnVsbDtcbiAgICBwcml2YXRlIF9wcml2YXRlSW5zdGFuY2VzID0gbmV3IFNldDxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPigpO1xuICAgIHByaXZhdGUgX3N0YXRlOiBTb3VuZFN0YXRlID0gU291bmRTdGF0ZS5TdG9wcGVkO1xuXG4gICAgcHJvdGVjdGVkIF9pbnN0YW5jZXM6IFJlYWRvbmx5U2V0PF9BYnN0cmFjdFNvdW5kSW5zdGFuY2U+ID0gdGhpcy5fcHJpdmF0ZUluc3RhbmNlcztcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX29wdGlvbnM6IElBYnN0cmFjdFNvdW5kU3RvcmVkT3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmFibGUgZm9yIHdoZW4gdGhlIHNvdW5kIHN0b3BzIHBsYXlpbmcuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRW5kZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QWJzdHJhY3RTb3VuZD4oKTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMiwgb3B0aW9uczogUGFydGlhbDxJQWJzdHJhY3RTb3VuZE9wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgb3B0aW9ucywgQXVkaW9Ob2RlVHlwZS5IQVNfSU5QVVRTX0FORF9PVVRQVVRTKTsgLy8gSW5wdXRzIGFyZSBmb3IgaW5zdGFuY2VzLlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgYWN0aXZlIGluc3RhbmNlcyBvZiB0aGUgc291bmQgdGhhdCBhcmUgY3VycmVudGx5IHBsYXlpbmcuXG4gICAgICovXG4gICAgcHVibGljIGdldCBhY3RpdmVJbnN0YW5jZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VzLnNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc291bmQgc2hvdWxkIHN0YXJ0IHBsYXlpbmcgYXV0b21hdGljYWxseS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGF1dG9wbGF5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5hdXRvcGxheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwbGF5YmFjayB0aW1lIG9mIHRoZSBzb3VuZCwgaW4gc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fZ2V0TmV3ZXN0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuY3VycmVudFRpbWUgOiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3VycmVudFRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdmFsdWU7XG5cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9nZXROZXdlc3RJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmxvb3A7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMubG9vcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpbnN0YW5jZXMgdGhhdCBjYW4gcGxheSBhdCB0aGUgc2FtZSB0aW1lLiBEZWZhdWx0cyB0byBgSW5maW5pdHlgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbWF4SW5zdGFuY2VzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLm1heEluc3RhbmNlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heEluc3RhbmNlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMubWF4SW5zdGFuY2VzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgd2l0aGluIHRoZSBzb3VuZCBidWZmZXIgdG8gc3RhcnQgcGxheWluZyBhdCwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc3RhcnRPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzdGFydE9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgb2YgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogU291bmRTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuX25ld2VzdEluc3RhbmNlID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9wcml2YXRlSW5zdGFuY2VzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMub25FbmRlZE9ic2VydmFibGUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5cyB0aGUgc291bmQuXG4gICAgICogLSBUcmlnZ2VycyBgb25FbmRlZE9ic2VydmFibGVgIGlmIHBsYXllZCBmb3IgdGhlIGZ1bGwgZHVyYXRpb24gYW5kIHRoZSBgbG9vcGAgb3B0aW9uIGlzIG5vdCBzZXQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gdXNlIHdoZW4gcGxheWluZyB0aGUgc291bmQuIE9wdGlvbnMgc2V0IGhlcmUgb3ZlcnJpZGUgdGhlIHNvdW5kJ3Mgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcGxheShvcHRpb25zPzogUGFydGlhbDxJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zPik6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZXMgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pbnN0YW5jZXMudmFsdWVzKCk7XG4gICAgICAgIGZvciAobGV0IG5leHQgPSBpdC5uZXh0KCk7ICFuZXh0LmRvbmU7IG5leHQgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgIG5leHQudmFsdWUucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlID0gU291bmRTdGF0ZS5QYXVzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lcyB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pbnN0YW5jZXMudmFsdWVzKCk7XG4gICAgICAgIGZvciAobGV0IG5leHQgPSBpdC5uZXh0KCk7ICFuZXh0LmRvbmU7IG5leHQgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgIG5leHQudmFsdWUucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFNvdW5kU3RhdGUuU3RhcnRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgc291bmQuXG4gICAgICogLSBUcmlnZ2VycyBgb25FbmRlZE9ic2VydmFibGVgIGlmIHRoZSBzb3VuZCBpcyBwbGF5aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzdG9wKCk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgX2JlZm9yZVBsYXkoaW5zdGFuY2U6IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkICYmIHRoaXMuX2luc3RhbmNlcy5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlLm9uRW5kZWRPYnNlcnZhYmxlLmFkZE9uY2UodGhpcy5fb25JbnN0YW5jZUVuZGVkKTtcbiAgICAgICAgdGhpcy5fcHJpdmF0ZUluc3RhbmNlcy5hZGQoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLl9uZXdlc3RJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWZ0ZXJQbGF5KGluc3RhbmNlOiBfQWJzdHJhY3RTb3VuZEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXROZXdlc3RJbnN0YW5jZSgpOiBOdWxsYWJsZTxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPiB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX25ld2VzdEluc3RhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2luc3RhbmNlcy52YWx1ZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IG5leHQgPSBpdC5uZXh0KCk7ICFuZXh0LmRvbmU7IG5leHQgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXdlc3RJbnN0YW5jZSA9IG5leHQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbmV3ZXN0SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXRTdGF0ZShzdGF0ZTogU291bmRTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3JlYXRlSW5zdGFuY2UoKTogX0Fic3RyYWN0U291bmRJbnN0YW5jZTtcblxuICAgIHByb3RlY3RlZCBfc3RvcEV4Y2Vzc0luc3RhbmNlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SW5zdGFuY2VzIDwgSW5maW5pdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mSW5zdGFuY2VzVG9TdG9wID0gQXJyYXkuZnJvbSh0aGlzLl9pbnN0YW5jZXMpLmZpbHRlcigoaW5zdGFuY2UpID0+IGluc3RhbmNlLnN0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQpLmxlbmd0aCAtIHRoaXMubWF4SW5zdGFuY2VzO1xuICAgICAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pbnN0YW5jZXMudmFsdWVzKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZJbnN0YW5jZXNUb1N0b3A7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gaXQubmV4dCgpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uSW5zdGFuY2VFbmRlZDogKGluc3RhbmNlOiBfQWJzdHJhY3RTb3VuZEluc3RhbmNlKSA9PiB2b2lkID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9uZXdlc3RJbnN0YW5jZSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX25ld2VzdEluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ByaXZhdGVJbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlKTtcblxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2VzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gU291bmRTdGF0ZS5TdG9wcGVkO1xuICAgICAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZS5kaXNwb3NlKCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTb3VuZFN0YXRlIH0gZnJvbSBcIi4uL3NvdW5kU3RhdGVcIjtcbmltcG9ydCB7IEFic3RyYWN0QXVkaW9Ob2RlLCBBdWRpb05vZGVUeXBlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTb3VuZCwgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucywgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2UgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzb3VuZCBpbnN0YW5jZS5cbiAqIEBpbnRlcm5hbFxuICogKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U291bmRJbnN0YW5jZU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zQmFzZSB7fVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0Fic3RyYWN0U291bmRJbnN0YW5jZSBleHRlbmRzIEFic3RyYWN0QXVkaW9Ob2RlIHtcbiAgICBwcm90ZWN0ZWQgX3NvdW5kOiBBYnN0cmFjdFNvdW5kO1xuICAgIHByb3RlY3RlZCBfc3RhdGU6IFNvdW5kU3RhdGUgPSBTb3VuZFN0YXRlLlN0b3BwZWQ7XG5cbiAgICAvKiogT2JzZXJ2YWJsZSB0cmlnZ2VyZWQgd2hlbiB0aGUgc291bmQgaW5zdGFuY2UncyBwbGF5YmFjayBlbmRzICovXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRW5kZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8X0Fic3RyYWN0U291bmRJbnN0YW5jZT4oKTtcblxuICAgIC8qKiBPYnNlcnZhYmxlIHRyaWdnZXJlZCBpZiB0aGUgc291bmQgaW5zdGFuY2UgZW5jb3VudGVycyBhbiBlcnJvciBhbmQgY2FuIG5vdCBiZSBwbGF5ZWQgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FcnJvck9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KCk7XG5cbiAgICAvKiogT2JzZXJ2YWJsZSB0cmlnZ2VyZWQgd2hlbiB0aGUgc291bmQgaW5zdGFuY2UncyBzdGF0ZSBjaGFuZ2VzICovXG4gICAgcHVibGljIHJlYWRvbmx5IG9uU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPF9BYnN0cmFjdFNvdW5kSW5zdGFuY2U+KCk7XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX29wdGlvbnM6IElBYnN0cmFjdFNvdW5kSW5zdGFuY2VPcHRpb25zO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHNvdW5kOiBBYnN0cmFjdFNvdW5kKSB7XG4gICAgICAgIHN1cGVyKHNvdW5kLmVuZ2luZSwgQXVkaW9Ob2RlVHlwZS5IQVNfT1VUUFVUUyk7XG5cbiAgICAgICAgdGhpcy5fc291bmQgPSBzb3VuZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3VycmVudFRpbWU6IG51bWJlcjtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBzdGFydFRpbWU6IG51bWJlcjtcblxuICAgIC8qKiBUaGUgcGxheWJhY2sgc3RhdGUgb2YgdGhlIHNvdW5kIGluc3RhbmNlICovXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBTb3VuZFN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBwbGF5KG9wdGlvbnM6IFBhcnRpYWw8SUFic3RyYWN0U291bmRQbGF5T3B0aW9ucz4pOiB2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwYXVzZSgpOiB2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZXN1bWUoKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RvcCgpOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIF9zZXRTdGF0ZSh2YWx1ZTogU291bmRTdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25FbmRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQXVkaW9Ob2RlVHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IElBYnN0cmFjdEF1ZGlvT3V0Tm9kZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvT3V0Tm9kZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RBdWRpb091dE5vZGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvT3V0Tm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBQcmltYXJ5QXVkaW9CdXMgfSBmcm9tIFwiLi9hdWRpb0J1c1wiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFNwYXRpYWxBdWRpbywgSVNwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3RlcmVvQXVkaW8sIElTdGVyZW9BdWRpb09wdGlvbnMgfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW9cIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHNvdW5kIHNvdXJjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU291bmRTb3VyY2VPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucywgSVNwYXRpYWxBdWRpb09wdGlvbnMsIElTdGVyZW9BdWRpb09wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIGZvciB0aGUgc291bmQgc291cmNlLiBEZWZhdWx0cyB0byBgbnVsbGAuXG4gICAgICogLSBJZiBub3Qgc2V0IG9yIGBudWxsYCwgYW5kIGBvdXRCdXNBdXRvRGVmYXVsdGAgaXMgYHRydWVgLCB0aGVuIHRoZSBzb3VuZCBzb3VyY2UgaXMgYXV0b21hdGljYWxseSBjb25uZWN0ZWQgdG8gdGhlIGF1ZGlvIGVuZ2luZSdzIGRlZmF1bHQgbWFpbiBidXMuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz47XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCdzIGBvdXRCdXNgIHNob3VsZCBkZWZhdWx0IHRvIHRoZSBhdWRpbyBlbmdpbmUncyBtYWluIGJ1cy4gRGVmYXVsdHMgdG8gYHRydWVgIGZvciBhbGwgc291bmQgc291cmNlcyBleGNlcHQgbWljcm9waG9uZXMuXG4gICAgICovXG4gICAgb3V0QnVzQXV0b0RlZmF1bHQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGEgc291bmQgaW4gdGhlIGF1ZGlvIGVuZ2luZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U291bmRTb3VyY2UgZXh0ZW5kcyBBYnN0cmFjdEF1ZGlvT3V0Tm9kZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbEF1dG9VcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwYXRpYWxNaW5VcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX291dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BhdGlhbDogTnVsbGFibGU8QWJzdHJhY3RTcGF0aWFsQXVkaW8+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMiwgb3B0aW9uczogUGFydGlhbDxJU291bmRTb3VyY2VPcHRpb25zPiwgbm9kZVR5cGU6IEF1ZGlvTm9kZVR5cGUgPSBBdWRpb05vZGVUeXBlLkhBU19PVVRQVVRTKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgbm9kZVR5cGUpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxBdXRvVXBkYXRlID0gb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbE1pblVwZGF0ZVRpbWUgPSBvcHRpb25zLnNwYXRpYWxNaW5VcGRhdGVUaW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgZm9yIHRoZSBzb3VuZC5cbiAgICAgKiBAc2VlIHtAbGluayBBdWRpb0VuZ2luZVYyLmRlZmF1bHRNYWluQnVzfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgb3V0QnVzKCk6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3V0QnVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3V0QnVzKG91dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPikge1xuICAgICAgICBpZiAodGhpcy5fb3V0QnVzID09PSBvdXRCdXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vdXRCdXMpIHtcbiAgICAgICAgICAgIHRoaXMuX291dEJ1cy5vbkRpc3Bvc2VPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNjb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG91dEJ1cztcblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQodGhpcy5fb25PdXRCdXNEaXNwb3NlZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3QodGhpcy5fb3V0QnVzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgYXVkaW8gZmVhdHVyZXMuXG4gICAgICovXG4gICAgcHVibGljIGdldCBzcGF0aWFsKCk6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0ZXJlbyBmZWF0dXJlcyBvZiB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHN0ZXJlbzogQWJzdHJhY3RTdGVyZW9BdWRpbztcblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fc3BhdGlhbD8uZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9zcGF0aWFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9vdXRCdXMgPSBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3JlYXRlU3BhdGlhbFByb3BlcnR5KGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcik6IEFic3RyYWN0U3BhdGlhbEF1ZGlvO1xuXG4gICAgcHJvdGVjdGVkIF9pbml0U3BhdGlhbFByb3BlcnR5KCk6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zcGF0aWFsID0gdGhpcy5fY3JlYXRlU3BhdGlhbFByb3BlcnR5KHRoaXMuX3NwYXRpYWxBdXRvVXBkYXRlLCB0aGlzLl9zcGF0aWFsTWluVXBkYXRlVGltZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uT3V0QnVzRGlzcG9zZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pc1NwYXRpYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgX2lzU3BhdGlhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUgJiYgIXRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdmFsdWUgJiYgdGhpcy5fc3BhdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbC5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==