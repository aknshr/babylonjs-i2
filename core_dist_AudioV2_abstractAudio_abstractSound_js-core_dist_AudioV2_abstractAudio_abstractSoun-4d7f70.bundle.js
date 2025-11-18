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
    constructor(name, engine) {
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */); // Inputs are for instances.
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19hYnN0cmFjdFNvdW5kX2pzLWNvcmVfZGlzdF9BdWRpb1YyX2Fic3RyYWN0QXVkaW9fYWJzdHJhY3RTb3VuLTRkN2Y3MC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQTRDQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTtBQW9MQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBN0xBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRQTtBQUVBO0FBU0E7QUFDQTtBQWVBO0FBQ0E7QUFkQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUF1QkE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFIQTtBQXVEQTtBQUNBO0FBQ0E7QUFyREE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRJbnN0YW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBTb3VuZFN0YXRlIH0gZnJvbSBcIi4uL3NvdW5kU3RhdGVcIjtcbmltcG9ydCB7IEF1ZGlvTm9kZVR5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFNvdW5kU291cmNlLCB0eXBlIElTb3VuZFNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IElWb2x1bWVBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi9zdWJOb2Rlcy92b2x1bWVBdWRpb1N1Yk5vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZE9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgc3RhcnQgcGxheWluZyBhdXRvbWF0aWNhbGx5LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGF1dG9wbGF5OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpbnN0YW5jZXMgdGhhdCBjYW4gcGxheSBhdCB0aGUgc2FtZSB0aW1lLiBEZWZhdWx0cyB0byBgSW5maW5pdHlgLlxuICAgICAqL1xuICAgIG1heEluc3RhbmNlczogbnVtYmVyO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgbG9vcC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBsb29wOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHdpdGhpbiB0aGUgc291bmQgYnVmZmVyIHRvIHN0YXJ0IHBsYXlpbmcgYXQsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICBzdGFydE9mZnNldDogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U291bmRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRPcHRpb25zQmFzZSwgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucywgSVNvdW5kU291cmNlT3B0aW9ucyB7fVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHBsYXlpbmcgYSBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2UsIElWb2x1bWVBdWRpb09wdGlvbnMge31cblxuLyoqXG4gKiBPcHRpb25zIHN0b3JlZCBpbiBhIHNvdW5kLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U291bmRTdG9yZWRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRPcHRpb25zQmFzZSwgSUFic3RyYWN0U291bmRQbGF5T3B0aW9uc0Jhc2Uge31cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzb3VuZCBpbiB0aGUgYXVkaW8gZW5naW5lLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTb3VuZCBleHRlbmRzIEFic3RyYWN0U291bmRTb3VyY2Uge1xuICAgIHByaXZhdGUgX25ld2VzdEluc3RhbmNlOiBOdWxsYWJsZTxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcHJpdmF0ZUluc3RhbmNlcyA9IG5ldyBTZXQ8X0Fic3RyYWN0U291bmRJbnN0YW5jZT4oKTtcbiAgICBwcml2YXRlIF9zdGF0ZTogU291bmRTdGF0ZSA9IFNvdW5kU3RhdGUuU3RvcHBlZDtcblxuICAgIHByb3RlY3RlZCBfaW5zdGFuY2VzOiBSZWFkb25seVNldDxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPiA9IHRoaXMuX3ByaXZhdGVJbnN0YW5jZXM7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IF9vcHRpb25zOiBJQWJzdHJhY3RTb3VuZFN0b3JlZE9wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZhYmxlIGZvciB3aGVuIHRoZSBzb3VuZCBzdG9wcyBwbGF5aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvbkVuZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEFic3RyYWN0U291bmQ+KCk7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBBdWRpb05vZGVUeXBlLkhBU19JTlBVVFNfQU5EX09VVFBVVFMpOyAvLyBJbnB1dHMgYXJlIGZvciBpbnN0YW5jZXMuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBhY3RpdmUgaW5zdGFuY2VzIG9mIHRoZSBzb3VuZCB0aGF0IGFyZSBjdXJyZW50bHkgcGxheWluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFjdGl2ZUluc3RhbmNlc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZXMuc2l6ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBzb3VuZCBzaG91bGQgc3RhcnQgcGxheWluZyBhdXRvbWF0aWNhbGx5LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYXV0b3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmF1dG9wbGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBsYXliYWNrIHRpbWUgb2YgdGhlIHNvdW5kLCBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY3VycmVudFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9nZXROZXdlc3RJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZS5jdXJyZW50VGltZSA6IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjdXJyZW50VGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSB2YWx1ZTtcblxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2dldE5ld2VzdEluc3RhbmNlKCk7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNvdW5kIHNob3VsZCBsb29wLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbG9vcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubG9vcDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGluc3RhbmNlcyB0aGF0IGNhbiBwbGF5IGF0IHRoZSBzYW1lIHRpbWUuIERlZmF1bHRzIHRvIGBJbmZpbml0eWAuXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXhJbnN0YW5jZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubWF4SW5zdGFuY2VzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4SW5zdGFuY2VzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5tYXhJbnN0YW5jZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB3aXRoaW4gdGhlIHNvdW5kIGJ1ZmZlciB0byBzdGFydCBwbGF5aW5nIGF0LCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGFydE9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHN0YXJ0T2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0ZSBvZiB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBTb3VuZFN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5fbmV3ZXN0SW5zdGFuY2UgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3ByaXZhdGVJbnN0YW5jZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYXlzIHRoZSBzb3VuZC5cbiAgICAgKiAtIFRyaWdnZXJzIGBvbkVuZGVkT2JzZXJ2YWJsZWAgaWYgcGxheWVkIGZvciB0aGUgZnVsbCBkdXJhdGlvbiBhbmQgdGhlIGBsb29wYCBvcHRpb24gaXMgbm90IHNldC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBwbGF5aW5nIHRoZSBzb3VuZC4gT3B0aW9ucyBzZXQgaGVyZSBvdmVycmlkZSB0aGUgc291bmQncyBvcHRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwbGF5KG9wdGlvbnM/OiBQYXJ0aWFsPElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnM+KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBhdXNlcyB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2luc3RhbmNlcy52YWx1ZXMoKTtcbiAgICAgICAgZm9yIChsZXQgbmV4dCA9IGl0Lm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgbmV4dC52YWx1ZS5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTb3VuZFN0YXRlLlBhdXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN1bWVzIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzdW1lKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2luc3RhbmNlcy52YWx1ZXMoKTtcbiAgICAgICAgZm9yIChsZXQgbmV4dCA9IGl0Lm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgbmV4dC52YWx1ZS5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlID0gU291bmRTdGF0ZS5TdGFydGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBzb3VuZC5cbiAgICAgKiAtIFRyaWdnZXJzIGBvbkVuZGVkT2JzZXJ2YWJsZWAgaWYgdGhlIHNvdW5kIGlzIHBsYXlpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHN0b3AoKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBfYmVmb3JlUGxheShpbnN0YW5jZTogX0Fic3RyYWN0U291bmRJbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQgJiYgdGhpcy5faW5zdGFuY2VzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2Uub25FbmRlZE9ic2VydmFibGUuYWRkT25jZSh0aGlzLl9vbkluc3RhbmNlRW5kZWQpO1xuICAgICAgICB0aGlzLl9wcml2YXRlSW5zdGFuY2VzLmFkZChpbnN0YW5jZSk7XG4gICAgICAgIHRoaXMuX25ld2VzdEluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZnRlclBsYXkoaW5zdGFuY2U6IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE5ld2VzdEluc3RhbmNlKCk6IE51bGxhYmxlPF9BYnN0cmFjdFNvdW5kSW5zdGFuY2U+IHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fbmV3ZXN0SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ID0gdGhpcy5faW5zdGFuY2VzLnZhbHVlcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgbmV4dCA9IGl0Lm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25ld2VzdEluc3RhbmNlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9uZXdlc3RJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3NldFN0YXRlKHN0YXRlOiBTb3VuZFN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jcmVhdGVJbnN0YW5jZSgpOiBfQWJzdHJhY3RTb3VuZEluc3RhbmNlO1xuXG4gICAgcHJvdGVjdGVkIF9zdG9wRXhjZXNzSW5zdGFuY2VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tYXhJbnN0YW5jZXMgPCBJbmZpbml0eSkge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZJbnN0YW5jZXNUb1N0b3AgPSBBcnJheS5mcm9tKHRoaXMuX2luc3RhbmNlcykuZmlsdGVyKChpbnN0YW5jZSkgPT4gaW5zdGFuY2Uuc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRlZCkubGVuZ3RoIC0gdGhpcy5tYXhJbnN0YW5jZXM7XG4gICAgICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2luc3RhbmNlcy52YWx1ZXMoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkluc3RhbmNlc1RvU3RvcDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBpdC5uZXh0KCkudmFsdWU7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25JbnN0YW5jZUVuZGVkOiAoaW5zdGFuY2U6IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UpID0+IHZvaWQgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX25ld2VzdEluc3RhbmNlID09PSBpbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5fbmV3ZXN0SW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcHJpdmF0ZUluc3RhbmNlcy5kZWxldGUoaW5zdGFuY2UpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBTb3VuZFN0YXRlLlN0b3BwZWQ7XG4gICAgICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlLmRpc3Bvc2UoKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi8uLi9NaXNjL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vc291bmRTdGF0ZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RBdWRpb05vZGUsIEF1ZGlvTm9kZVR5cGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFNvdW5kLCBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zLCBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zQmFzZSB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRcIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHNvdW5kIGluc3RhbmNlLlxuICogQGludGVybmFsXG4gKiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTb3VuZEluc3RhbmNlT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnNCYXNlIHt9XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfQWJzdHJhY3RTb3VuZEluc3RhbmNlIGV4dGVuZHMgQWJzdHJhY3RBdWRpb05vZGUge1xuICAgIHByb3RlY3RlZCBfc291bmQ6IEFic3RyYWN0U291bmQ7XG4gICAgcHJvdGVjdGVkIF9zdGF0ZTogU291bmRTdGF0ZSA9IFNvdW5kU3RhdGUuU3RvcHBlZDtcblxuICAgIC8qKiBPYnNlcnZhYmxlIHRyaWdnZXJlZCB3aGVuIHRoZSBzb3VuZCBpbnN0YW5jZSdzIHBsYXliYWNrIGVuZHMgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FbmRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxfQWJzdHJhY3RTb3VuZEluc3RhbmNlPigpO1xuXG4gICAgLyoqIE9ic2VydmFibGUgdHJpZ2dlcmVkIGlmIHRoZSBzb3VuZCBpbnN0YW5jZSBlbmNvdW50ZXJzIGFuIGVycm9yIGFuZCBjYW4gbm90IGJlIHBsYXllZCAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvbkVycm9yT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcblxuICAgIC8qKiBPYnNlcnZhYmxlIHRyaWdnZXJlZCB3aGVuIHRoZSBzb3VuZCBpbnN0YW5jZSdzIHN0YXRlIGNoYW5nZXMgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgb25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8X0Fic3RyYWN0U291bmRJbnN0YW5jZT4oKTtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBfb3B0aW9uczogSUFic3RyYWN0U291bmRJbnN0YW5jZU9wdGlvbnM7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioc291bmQ6IEFic3RyYWN0U291bmQpIHtcbiAgICAgICAgc3VwZXIoc291bmQuZW5naW5lLCBBdWRpb05vZGVUeXBlLkhBU19PVVRQVVRTKTtcblxuICAgICAgICB0aGlzLl9zb3VuZCA9IHNvdW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBjdXJyZW50VGltZTogbnVtYmVyO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHN0YXJ0VGltZTogbnVtYmVyO1xuXG4gICAgLyoqIFRoZSBwbGF5YmFjayBzdGF0ZSBvZiB0aGUgc291bmQgaW5zdGFuY2UgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IFNvdW5kU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHBsYXkob3B0aW9uczogUGFydGlhbDxJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zPik6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IHBhdXNlKCk6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IHJlc3VtZSgpOiB2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzdG9wKCk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgX3NldFN0YXRlKHZhbHVlOiBTb3VuZFN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBdWRpb05vZGVUeXBlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdEF1ZGlvT3V0Tm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgdHlwZSB7IFByaW1hcnlBdWRpb0J1cyB9IGZyb20gXCIuL2F1ZGlvQnVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3BhdGlhbEF1ZGlvLCBJU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RTdGVyZW9BdWRpbywgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc291bmQgc291cmNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTb3VuZFNvdXJjZU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RBdWRpb091dE5vZGVPcHRpb25zLCBJU3BhdGlhbEF1ZGlvT3B0aW9ucywgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgZm9yIHRoZSBzb3VuZCBzb3VyY2UuIERlZmF1bHRzIHRvIGBudWxsYC5cbiAgICAgKiAtIElmIG5vdCBzZXQgb3IgYG51bGxgLCBhbmQgYG91dEJ1c0F1dG9EZWZhdWx0YCBpcyBgdHJ1ZWAsIHRoZW4gdGhlIHNvdW5kIHNvdXJjZSBpcyBhdXRvbWF0aWNhbGx5IGNvbm5lY3RlZCB0byB0aGUgYXVkaW8gZW5naW5lJ3MgZGVmYXVsdCBtYWluIGJ1cy5cbiAgICAgKiBAc2VlIHtAbGluayBBdWRpb0VuZ2luZVYyLmRlZmF1bHRNYWluQnVzfVxuICAgICAqL1xuICAgIG91dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHNvdW5kJ3MgYG91dEJ1c2Agc2hvdWxkIGRlZmF1bHQgdG8gdGhlIGF1ZGlvIGVuZ2luZSdzIG1haW4gYnVzLiBEZWZhdWx0cyB0byBgdHJ1ZWAgZm9yIGFsbCBzb3VuZCBzb3VyY2VzIGV4Y2VwdCBtaWNyb3Bob25lcy5cbiAgICAgKi9cbiAgICBvdXRCdXNBdXRvRGVmYXVsdDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzb3VuZCBpbiB0aGUgYXVkaW8gZW5naW5lLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTb3VuZFNvdXJjZSBleHRlbmRzIEFic3RyYWN0QXVkaW9PdXROb2RlIHtcbiAgICBwcml2YXRlIF9vdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBub2RlVHlwZTogQXVkaW9Ob2RlVHlwZSA9IEF1ZGlvTm9kZVR5cGUuSEFTX09VVFBVVFMpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBub2RlVHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgZm9yIHRoZSBzb3VuZC5cbiAgICAgKiBAc2VlIHtAbGluayBBdWRpb0VuZ2luZVYyLmRlZmF1bHRNYWluQnVzfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgb3V0QnVzKCk6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3V0QnVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgb3V0QnVzKG91dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPikge1xuICAgICAgICBpZiAodGhpcy5fb3V0QnVzID09PSBvdXRCdXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vdXRCdXMpIHtcbiAgICAgICAgICAgIHRoaXMuX291dEJ1cy5vbkRpc3Bvc2VPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uT3V0QnVzRGlzcG9zZWQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNjb25uZWN0KHRoaXMuX291dEJ1cykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG91dEJ1cztcblxuICAgICAgICBpZiAodGhpcy5fb3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXRCdXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQodGhpcy5fb25PdXRCdXNEaXNwb3NlZCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3QodGhpcy5fb3V0QnVzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgZmVhdHVyZXMgb2YgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzcGF0aWFsOiBBYnN0cmFjdFNwYXRpYWxBdWRpbztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGVyZW8gZmVhdHVyZXMgb2YgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzdGVyZW86IEFic3RyYWN0U3RlcmVvQXVkaW87XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX291dEJ1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25PdXRCdXNEaXNwb3NlZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fb3V0QnVzID0gbnVsbDtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9