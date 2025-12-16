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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19hYnN0cmFjdFNvdW5kX2pzLWNvcmVfZGlzdF9BdWRpb1YyX2Fic3RyYWN0QXVkaW9fYWJzdHJhY3RTb3VuLTRkN2Y3MC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQTRDQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTtBQW9MQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBN0xBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRQTtBQUVBO0FBU0E7QUFDQTtBQWVBO0FBQ0E7QUFkQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUF1QkE7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQXVGQTtBQWxGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRJbnN0YW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBTb3VuZFN0YXRlIH0gZnJvbSBcIi4uL3NvdW5kU3RhdGVcIjtcbmltcG9ydCB7IEF1ZGlvTm9kZVR5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFNvdW5kU291cmNlLCB0eXBlIElTb3VuZFNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IElWb2x1bWVBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi9zdWJOb2Rlcy92b2x1bWVBdWRpb1N1Yk5vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZE9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgc3RhcnQgcGxheWluZyBhdXRvbWF0aWNhbGx5LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGF1dG9wbGF5OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpbnN0YW5jZXMgdGhhdCBjYW4gcGxheSBhdCB0aGUgc2FtZSB0aW1lLiBEZWZhdWx0cyB0byBgSW5maW5pdHlgLlxuICAgICAqL1xuICAgIG1heEluc3RhbmNlczogbnVtYmVyO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBsb29wOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHdpdGhpbiB0aGUgc291bmQgYnVmZmVyIHRvIHN0YXJ0IHBsYXlpbmcgYXQsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICBzdGFydE9mZnNldDogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U291bmRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRPcHRpb25zQmFzZSwgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucywgSVNvdW5kU291cmNlT3B0aW9ucyB7fVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHBsYXlpbmcgYSBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2UsIElWb2x1bWVBdWRpb09wdGlvbnMge31cblxuLyoqXG4gKiBPcHRpb25zIHN0b3JlZCBpbiBhIHNvdW5kLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U291bmRTdG9yZWRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRPcHRpb25zQmFzZSwgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2Uge31cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzb3VuZCBpbiB0aGUgYXVkaW8gZW5naW5lLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTb3VuZCBleHRlbmRzIEFic3RyYWN0U291bmRTb3VyY2Uge1xuICAgIHByaXZhdGUgX25ld2VzdEluc3RhbmNlOiBOdWxsYWJsZTxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcHJpdmF0ZUluc3RhbmNlcyA9IG5ldyBTZXQ8X0Fic3RyYWN0U291bmRJbnN0YW5jZT4oKTtcbiAgICBwcml2YXRlIF9zdGF0ZTogU291bmRTdGF0ZSA9IFNvdW5kU3RhdGUuU3RvcHBlZDtcblxuICAgIHByb3RlY3RlZCBfaW5zdGFuY2VzOiBSZWFkb25seVNldDxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPiA9IHRoaXMuX3ByaXZhdGVJbnN0YW5jZXM7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IF9vcHRpb25zOiBJQWJzdHJhY3RTb3VuZFN0b3JlZE9wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZhYmxlIGZvciB3aGVuIHRoZSBzb3VuZCBzdG9wcyBwbGF5aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvbkVuZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEFic3RyYWN0U291bmQ+KCk7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIsIG9wdGlvbnM6IFBhcnRpYWw8SUFic3RyYWN0U291bmRPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG9wdGlvbnMsIEF1ZGlvTm9kZVR5cGUuSEFTX0lOUFVUU19BTkRfT1VUUFVUUyk7IC8vIElucHV0cyBhcmUgZm9yIGluc3RhbmNlcy5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGFjdGl2ZSBpbnN0YW5jZXMgb2YgdGhlIHNvdW5kIHRoYXQgYXJlIGN1cnJlbnRseSBwbGF5aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYWN0aXZlSW5zdGFuY2VzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlcy5zaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBzdGFydCBwbGF5aW5nIGF1dG9tYXRpY2FsbHkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgcHVibGljIGdldCBhdXRvcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuYXV0b3BsYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcGxheWJhY2sgdGltZSBvZiB0aGUgc291bmQsIGluIHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIGdldCBjdXJyZW50VGltZSgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2dldE5ld2VzdEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlLmN1cnJlbnRUaW1lIDogMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydE9mZnNldCA9IHZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fZ2V0TmV3ZXN0SW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc291bmQgc2hvdWxkIGxvb3AuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb29wKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb29wO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3AgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgaW5zdGFuY2VzIHRoYXQgY2FuIHBsYXkgYXQgdGhlIHNhbWUgdGltZS4gRGVmYXVsdHMgdG8gYEluZmluaXR5YC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heEluc3RhbmNlcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5tYXhJbnN0YW5jZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhJbnN0YW5jZXModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLm1heEluc3RhbmNlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHdpdGhpbiB0aGUgc291bmQgYnVmZmVyIHRvIHN0YXJ0IHBsYXlpbmcgYXQsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXJ0T2Zmc2V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc3RhcnRPZmZzZXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIG9mIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IFNvdW5kU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVsZWFzZXMgYXNzb2NpYXRlZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICB0aGlzLl9uZXdlc3RJbnN0YW5jZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fcHJpdmF0ZUluc3RhbmNlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheXMgdGhlIHNvdW5kLlxuICAgICAqIC0gVHJpZ2dlcnMgYG9uRW5kZWRPYnNlcnZhYmxlYCBpZiBwbGF5ZWQgZm9yIHRoZSBmdWxsIGR1cmF0aW9uIGFuZCB0aGUgYGxvb3BgIG9wdGlvbiBpcyBub3Qgc2V0LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIHBsYXlpbmcgdGhlIHNvdW5kLiBPcHRpb25zIHNldCBoZXJlIG92ZXJyaWRlIHRoZSBzb3VuZCdzIG9wdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHBsYXkob3B0aW9ucz86IFBhcnRpYWw8SUFic3RyYWN0U291bmRQbGF5T3B0aW9ucz4pOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUGF1c2VzIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5faW5zdGFuY2VzLnZhbHVlcygpO1xuICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICBuZXh0LnZhbHVlLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFNvdW5kU3RhdGUuUGF1c2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3VtZXMgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXN1bWUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gU291bmRTdGF0ZS5QYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5faW5zdGFuY2VzLnZhbHVlcygpO1xuICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICBuZXh0LnZhbHVlLnJlc3VtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTb3VuZFN0YXRlLlN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHNvdW5kLlxuICAgICAqIC0gVHJpZ2dlcnMgYG9uRW5kZWRPYnNlcnZhYmxlYCBpZiB0aGUgc291bmQgaXMgcGxheWluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RvcCgpOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIF9iZWZvcmVQbGF5KGluc3RhbmNlOiBfQWJzdHJhY3RTb3VuZEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCAmJiB0aGlzLl9pbnN0YW5jZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZS5vbkVuZGVkT2JzZXJ2YWJsZS5hZGRPbmNlKHRoaXMuX29uSW5zdGFuY2VFbmRlZCk7XG4gICAgICAgIHRoaXMuX3ByaXZhdGVJbnN0YW5jZXMuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5fbmV3ZXN0SW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FmdGVyUGxheShpbnN0YW5jZTogX0Fic3RyYWN0U291bmRJbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TmV3ZXN0SW5zdGFuY2UoKTogTnVsbGFibGU8X0Fic3RyYWN0U291bmRJbnN0YW5jZT4ge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2VzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9uZXdlc3RJbnN0YW5jZSkge1xuICAgICAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pbnN0YW5jZXMudmFsdWVzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmV3ZXN0SW5zdGFuY2UgPSBuZXh0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX25ld2VzdEluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfc2V0U3RhdGUoc3RhdGU6IFNvdW5kU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2NyZWF0ZUluc3RhbmNlKCk6IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2U7XG5cbiAgICBwcm90ZWN0ZWQgX3N0b3BFeGNlc3NJbnN0YW5jZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1heEluc3RhbmNlcyA8IEluZmluaXR5KSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJPZkluc3RhbmNlc1RvU3RvcCA9IEFycmF5LmZyb20odGhpcy5faW5zdGFuY2VzKS5maWx0ZXIoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGVkKS5sZW5ndGggLSB0aGlzLm1heEluc3RhbmNlcztcbiAgICAgICAgICAgIGNvbnN0IGl0ID0gdGhpcy5faW5zdGFuY2VzLnZhbHVlcygpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mSW5zdGFuY2VzVG9TdG9wOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGl0Lm5leHQoKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkluc3RhbmNlRW5kZWQ6IChpbnN0YW5jZTogX0Fic3RyYWN0U291bmRJbnN0YW5jZSkgPT4gdm9pZCA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fbmV3ZXN0SW5zdGFuY2UgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXdlc3RJbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcml2YXRlSW5zdGFuY2VzLmRlbGV0ZShpbnN0YW5jZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IFNvdW5kU3RhdGUuU3RvcHBlZDtcbiAgICAgICAgICAgIHRoaXMub25FbmRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UuZGlzcG9zZSgpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uLy4uL01pc2Mvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU291bmRTdGF0ZSB9IGZyb20gXCIuLi9zb3VuZFN0YXRlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdEF1ZGlvTm9kZSwgQXVkaW9Ob2RlVHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U291bmQsIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnMsIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnNCYXNlIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZFwiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc291bmQgaW5zdGFuY2UuXG4gKiBAaW50ZXJuYWxcbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFNvdW5kSW5zdGFuY2VPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2Uge31cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UgZXh0ZW5kcyBBYnN0cmFjdEF1ZGlvTm9kZSB7XG4gICAgcHJvdGVjdGVkIF9zb3VuZDogQWJzdHJhY3RTb3VuZDtcbiAgICBwcm90ZWN0ZWQgX3N0YXRlOiBTb3VuZFN0YXRlID0gU291bmRTdGF0ZS5TdG9wcGVkO1xuXG4gICAgLyoqIE9ic2VydmFibGUgdHJpZ2dlcmVkIHdoZW4gdGhlIHNvdW5kIGluc3RhbmNlJ3MgcGxheWJhY2sgZW5kcyAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvbkVuZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPF9BYnN0cmFjdFNvdW5kSW5zdGFuY2U+KCk7XG5cbiAgICAvKiogT2JzZXJ2YWJsZSB0cmlnZ2VyZWQgaWYgdGhlIHNvdW5kIGluc3RhbmNlIGVuY291bnRlcnMgYW4gZXJyb3IgYW5kIGNhbiBub3QgYmUgcGxheWVkICovXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRXJyb3JPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8YW55PigpO1xuXG4gICAgLyoqIE9ic2VydmFibGUgdHJpZ2dlcmVkIHdoZW4gdGhlIHNvdW5kIGluc3RhbmNlJ3Mgc3RhdGUgY2hhbmdlcyAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvblN0YXRlQ2hhbmdlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPigpO1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IF9vcHRpb25zOiBJQWJzdHJhY3RTb3VuZEluc3RhbmNlT3B0aW9ucztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihzb3VuZDogQWJzdHJhY3RTb3VuZCkge1xuICAgICAgICBzdXBlcihzb3VuZC5lbmdpbmUsIEF1ZGlvTm9kZVR5cGUuSEFTX09VVFBVVFMpO1xuXG4gICAgICAgIHRoaXMuX3NvdW5kID0gc291bmQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGN1cnJlbnRUaW1lOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgc3RhcnRUaW1lOiBudW1iZXI7XG5cbiAgICAvKiogVGhlIHBsYXliYWNrIHN0YXRlIG9mIHRoZSBzb3VuZCBpbnN0YW5jZSAqL1xuICAgIHB1YmxpYyBnZXQgc3RhdGUoKTogU291bmRTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMub25FbmRlZE9ic2VydmFibGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcGxheShvcHRpb25zOiBQYXJ0aWFsPElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnM+KTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgcGF1c2UoKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVzdW1lKCk6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IHN0b3AoKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBfc2V0U3RhdGUodmFsdWU6IFNvdW5kU3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEF1ZGlvTm9kZVR5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RBdWRpb091dE5vZGVPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb091dE5vZGVcIjtcbmltcG9ydCB7IEFic3RyYWN0QXVkaW9PdXROb2RlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb091dE5vZGVcIjtcbmltcG9ydCB0eXBlIHsgUHJpbWFyeUF1ZGlvQnVzIH0gZnJvbSBcIi4vYXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTcGF0aWFsQXVkaW8sIElTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFN0ZXJlb0F1ZGlvLCBJU3RlcmVvQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFN0ZXJlb0F1ZGlvXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzb3VuZCBzb3VyY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNvdW5kU291cmNlT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdEF1ZGlvT3V0Tm9kZU9wdGlvbnMsIElTcGF0aWFsQXVkaW9PcHRpb25zLCBJU3RlcmVvQXVkaW9PcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGJ1cyBmb3IgdGhlIHNvdW5kIHNvdXJjZS4gRGVmYXVsdHMgdG8gYG51bGxgLlxuICAgICAqIC0gSWYgbm90IHNldCBvciBgbnVsbGAsIGFuZCBgb3V0QnVzQXV0b0RlZmF1bHRgIGlzIGB0cnVlYCwgdGhlbiB0aGUgc291bmQgc291cmNlIGlzIGF1dG9tYXRpY2FsbHkgY29ubmVjdGVkIHRvIHRoZSBhdWRpbyBlbmdpbmUncyBkZWZhdWx0IG1haW4gYnVzLlxuICAgICAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIuZGVmYXVsdE1haW5CdXN9XG4gICAgICovXG4gICAgb3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+O1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc291bmQncyBgb3V0QnVzYCBzaG91bGQgZGVmYXVsdCB0byB0aGUgYXVkaW8gZW5naW5lJ3MgbWFpbiBidXMuIERlZmF1bHRzIHRvIGB0cnVlYCBmb3IgYWxsIHNvdW5kIHNvdXJjZXMgZXhjZXB0IG1pY3JvcGhvbmVzLlxuICAgICAqL1xuICAgIG91dEJ1c0F1dG9EZWZhdWx0OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHNvdW5kIGluIHRoZSBhdWRpbyBlbmdpbmUuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNvdW5kU291cmNlIGV4dGVuZHMgQWJzdHJhY3RBdWRpb091dE5vZGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwYXRpYWxBdXRvVXBkYXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGF0aWFsTWluVXBkYXRlVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9vdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4gPSBudWxsO1xuICAgIHByaXZhdGUgX3NwYXRpYWw6IE51bGxhYmxlPEFic3RyYWN0U3BhdGlhbEF1ZGlvPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIsIG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4sIG5vZGVUeXBlOiBBdWRpb05vZGVUeXBlID0gQXVkaW9Ob2RlVHlwZS5IQVNfT1VUUFVUUykge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG5vZGVUeXBlKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhdGlhbEF1dG9VcGRhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsQXV0b1VwZGF0ZSA9IG9wdGlvbnMuc3BhdGlhbEF1dG9VcGRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxNaW5VcGRhdGVUaW1lID0gb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIGZvciB0aGUgc291bmQuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG91dEJ1cygpOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dEJ1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG91dEJ1cyhvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4pIHtcbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cyA9PT0gb3V0QnVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb25PdXRCdXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX291dEJ1cy5vbkRpc3Bvc2VPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uT3V0QnVzRGlzcG9zZWQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNjb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG91dEJ1cztcblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX291dEJ1cyA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fb3V0QnVzLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIGF1ZGlvIGZlYXR1cmVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc3BhdGlhbCgpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIGlmICh0aGlzLl9zcGF0aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3BhdGlhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdFNwYXRpYWxQcm9wZXJ0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGVyZW8gZmVhdHVyZXMgb2YgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzdGVyZW86IEFic3RyYWN0U3RlcmVvQXVkaW87XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3NwYXRpYWw/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fc3BhdGlhbCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX291dEJ1cyAmJiB0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbk91dEJ1c0Rpc3Bvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuX29uT3V0QnVzRGlzcG9zZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jcmVhdGVTcGF0aWFsUHJvcGVydHkoYXV0b1VwZGF0ZTogYm9vbGVhbiwgbWluVXBkYXRlVGltZTogbnVtYmVyKTogQWJzdHJhY3RTcGF0aWFsQXVkaW87XG5cbiAgICBwcm90ZWN0ZWQgX2luaXRTcGF0aWFsUHJvcGVydHkoKTogQWJzdHJhY3RTcGF0aWFsQXVkaW8ge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3NwYXRpYWwgPSB0aGlzLl9jcmVhdGVTcGF0aWFsUHJvcGVydHkodGhpcy5fc3BhdGlhbEF1dG9VcGRhdGUsIHRoaXMuX3NwYXRpYWxNaW5VcGRhdGVUaW1lKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25PdXRCdXNEaXNwb3NlZDogTnVsbGFibGU8KCkgPT4gdm9pZD4gPSBudWxsO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2lzU3BhdGlhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXRpYWwgIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBfaXNTcGF0aWFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5fc3BhdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWxQcm9wZXJ0eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZSAmJiB0aGlzLl9zcGF0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9