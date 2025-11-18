"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_webAudio_webAudioStreamingSound_js"],{

/***/ "../core/dist/AudioV2/abstractAudio/streamingSound.js":
/*!************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/streamingSound.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StreamingSound: () => (/* binding */ StreamingSound)
/* harmony export */ });
/* harmony import */ var _abstractSound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractSound */ "../core/dist/AudioV2/abstractAudio/abstractSound.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class representing a streaming sound.
 *
 * A streaming sound has a sound buffer that is loaded into memory in chunks as it is played. This allows it to be played
 * more quickly than a static sound, but it also means that it cannot have loop points or playback rate changes.
 *
 * Due to the way streaming sounds are typically implemented, there can be a significant delay when attempting to play
 * a streaming sound for the first time. To prevent this delay, it is recommended to preload instances of the sound
 * using the {@link IStreamingSoundStoredOptions.preloadCount} options, or the {@link preloadInstanceAsync} and
 * {@link preloadInstancesAsync} methods before calling the `play` method.
 *
 * Streaming sounds are created by the {@link CreateStreamingSoundAsync} function.
 */
class StreamingSound extends _abstractSound__WEBPACK_IMPORTED_MODULE_0__.AbstractSound {
    constructor(name, engine) {
        super(name, engine);
        this._preloadedInstances = new Array();
    }
    /**
     * The number of instances to preload. Defaults to `1`.
     */
    get preloadCount() {
        return this._options.preloadCount ?? 1;
    }
    /**
     * Returns the number of instances that have been preloaded.
     */
    get preloadCompletedCount() {
        return this._preloadedInstances.length;
    }
    /**
     * Preloads an instance of the sound.
     * @returns A promise that resolves when the instance is preloaded.
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    preloadInstanceAsync() {
        const instance = this._createInstance();
        this._addPreloadedInstance(instance);
        return instance.preloadedPromise;
    }
    /**
     * Preloads the given number of instances of the sound.
     * @param count - The number of instances to preload.
     * @returns A promise that resolves when all instances are preloaded.
     */
    async preloadInstancesAsync(count) {
        for (let i = 0; i < count; i++) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.preloadInstanceAsync();
        }
        await Promise.all(this._preloadedInstances.map(async (instance) => await instance.preloadedPromise));
    }
    /**
     * Plays the sound.
     * - Triggers `onEndedObservable` if played for the full duration and the `loop` option is not set.
     * @param options The options to use when playing the sound. Options set here override the sound's options.
     */
    play(options = {}) {
        if (this.state === 5 /* SoundState.Paused */) {
            this.resume();
            return;
        }
        let instance;
        if (this.preloadCompletedCount > 0) {
            instance = this._preloadedInstances[0];
            instance.startOffset = this.startOffset;
            this._removePreloadedInstance(instance);
        }
        else {
            instance = this._createInstance();
        }
        const onInstanceStateChanged = () => {
            if (instance.state === 3 /* SoundState.Started */) {
                this._stopExcessInstances();
                instance.onStateChangedObservable.removeCallback(onInstanceStateChanged);
            }
        };
        instance.onStateChangedObservable.add(onInstanceStateChanged);
        options.startOffset ??= this.startOffset;
        options.loop ??= this.loop;
        options.volume ??= 1;
        this._beforePlay(instance);
        instance.play(options);
        this._afterPlay(instance);
    }
    /**
     * Stops the sound.
     */
    stop() {
        this._setState(1 /* SoundState.Stopped */);
        if (!this._instances) {
            return;
        }
        for (const instance of Array.from(this._instances)) {
            instance.stop();
        }
    }
    _addPreloadedInstance(instance) {
        if (!this._preloadedInstances.includes(instance)) {
            this._preloadedInstances.push(instance);
        }
    }
    _removePreloadedInstance(instance) {
        const index = this._preloadedInstances.indexOf(instance);
        if (index !== -1) {
            this._preloadedInstances.splice(index, 1);
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

/***/ "../core/dist/AudioV2/abstractAudio/streamingSoundInstance.js":
/*!********************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/streamingSoundInstance.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StreamingSoundInstance: () => (/* binding */ _StreamingSoundInstance)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _abstractSoundInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractSoundInstance */ "../core/dist/AudioV2/abstractAudio/abstractSoundInstance.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _StreamingSoundInstance extends _abstractSoundInstance__WEBPACK_IMPORTED_MODULE_1__._AbstractSoundInstance {
    constructor(sound) {
        super(sound);
        /** @internal */
        this.onReadyObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** @internal */
        this.preloadedPromise = new Promise((resolve, reject) => {
            this._rejectPreloadedProimse = reject;
            this._resolvePreloadedPromise = resolve;
        });
        this.onErrorObservable.add(this._rejectPreloadedProimse);
        this.onReadyObservable.add(this._resolvePreloadedPromise);
    }
    /** @internal */
    set startOffset(value) {
        this._options.startOffset = value;
    }
    /** @internal */
    dispose() {
        super.dispose();
        this.onErrorObservable.clear();
        this.onReadyObservable.clear();
        this._resolvePreloadedPromise();
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

/***/ "../core/dist/AudioV2/webAudio/webAudioStreamingSound.js":
/*!***************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioStreamingSound.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioStreamingSound: () => (/* binding */ _WebAudioStreamingSound)
/* harmony export */ });
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _abstractAudio_streamingSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractAudio/streamingSound */ "../core/dist/AudioV2/abstractAudio/streamingSound.js");
/* harmony import */ var _abstractAudio_streamingSoundInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstractAudio/streamingSoundInstance */ "../core/dist/AudioV2/abstractAudio/streamingSoundInstance.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstractAudio/subProperties/stereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js");
/* harmony import */ var _audioUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audioUtils */ "../core/dist/AudioV2/audioUtils.js");
/* harmony import */ var _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subNodes/webAudioBusAndSoundSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js");
/* harmony import */ var _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subProperties/spatialWebAudio */ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










/** @internal */
class _WebAudioStreamingSound extends _abstractAudio_streamingSound__WEBPACK_IMPORTED_MODULE_2__.StreamingSound {
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
        this._options = {
            autoplay: options.autoplay ?? false,
            loop: options.loop ?? false,
            maxInstances: options.maxInstances ?? Infinity,
            preloadCount: options.preloadCount ?? 1,
            startOffset: options.startOffset ?? 0,
        };
        this._subGraph = new _WebAudioStreamingSound._SubGraph(this);
    }
    /** @internal */
    async _initAsync(source, options) {
        const audioContext = this.engine._audioContext;
        if (!(audioContext instanceof AudioContext)) {
            throw new Error("Unsupported audio context type.");
        }
        this._audioContext = audioContext;
        this._source = source;
        if (options.outBus) {
            this.outBus = options.outBus;
        }
        else if (options.outBusAutoDefault !== false) {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0,_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_4__._HasSpatialAudioOptions)(options)) {
            this._initSpatialProperty();
        }
        if (this.preloadCount) {
            await this.preloadInstancesAsync(this.preloadCount);
        }
        if (options.autoplay) {
            this.play(options);
        }
        this.engine._addSound(this);
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
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_5__._StereoAudio(this._subGraph));
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._spatial = null;
        this._stereo = null;
        this._subGraph.dispose();
        this.engine._removeSound(this);
    }
    /** @internal */
    getClassName() {
        return "_WebAudioStreamingSound";
    }
    _createInstance() {
        return new _WebAudioStreamingSoundInstance(this, this._options);
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
            this._spatial = new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_8__._SpatialWebAudio(this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
    }
}
_WebAudioStreamingSound._SubGraph = class extends _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_7__._WebAudioBusAndSoundSubGraph {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
};
/** @internal */
class _WebAudioStreamingSoundInstance extends _abstractAudio_streamingSoundInstance__WEBPACK_IMPORTED_MODULE_3__._StreamingSoundInstance {
    constructor(sound, options) {
        super(sound);
        this._currentTimeChangedWhilePaused = false;
        this._enginePlayTime = Infinity;
        this._enginePauseTime = 0;
        this._isReady = false;
        this._isReadyPromise = new Promise((resolve, reject) => {
            this._resolveIsReadyPromise = resolve;
            this._rejectIsReadyPromise = reject;
        });
        this._onCanPlayThrough = () => {
            this._isReady = true;
            this._resolveIsReadyPromise(this._mediaElement);
            this.onReadyObservable.notifyObservers(this);
        };
        this._onEnded = () => {
            this.onEndedObservable.notifyObservers(this);
            this.dispose();
        };
        this._onError = (reason) => {
            this._setState(4 /* SoundState.FailedToStart */);
            this.onErrorObservable.notifyObservers(reason);
            this._rejectIsReadyPromise(reason);
            this.dispose();
        };
        this._onEngineStateChanged = () => {
            if (this.engine.state !== "running") {
                return;
            }
            if (this._options.loop && this.state === 2 /* SoundState.Starting */) {
                this.play();
            }
            this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        };
        this._onUserGesture = () => {
            this.play();
        };
        this._options = options;
        this._volumeNode = new GainNode(sound._audioContext);
        if (typeof sound._source === "string") {
            this._initFromUrl(sound._source);
        }
        else if (Array.isArray(sound._source)) {
            this._initFromUrls(sound._source);
        }
        else if (sound._source instanceof HTMLMediaElement) {
            this._initFromMediaElement(sound._source);
        }
        else {
            throw new Error(`Invalid streaming sound source (${sound._source}).`);
        }
    }
    /** @internal */
    get currentTime() {
        if (this._state === 1 /* SoundState.Stopped */) {
            return 0;
        }
        const timeSinceLastStart = this._state === 5 /* SoundState.Paused */ ? 0 : this.engine.currentTime - this._enginePlayTime;
        return this._enginePauseTime + timeSinceLastStart + this._options.startOffset;
    }
    set currentTime(value) {
        const restart = this._state === 2 /* SoundState.Starting */ || this._state === 3 /* SoundState.Started */;
        if (restart) {
            this._mediaElement.pause();
            this._state = 1 /* SoundState.Stopped */;
        }
        this._options.startOffset = value;
        if (restart) {
            this.play({ startOffset: value });
        }
        else if (this._state === 5 /* SoundState.Paused */) {
            this._currentTimeChangedWhilePaused = true;
        }
    }
    get _outNode() {
        return this._volumeNode;
    }
    /** @internal */
    get startTime() {
        if (this._state === 1 /* SoundState.Stopped */) {
            return 0;
        }
        return this._enginePlayTime;
    }
    /** @internal */
    dispose() {
        super.dispose();
        this.stop();
        this._sourceNode?.disconnect(this._volumeNode);
        this._sourceNode = null;
        this._mediaElement.removeEventListener("error", this._onError);
        this._mediaElement.removeEventListener("ended", this._onEnded);
        this._mediaElement.removeEventListener("canplaythrough", this._onCanPlayThrough);
        for (const source of Array.from(this._mediaElement.children)) {
            this._mediaElement.removeChild(source);
        }
        this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        this.engine.userGestureObservable.removeCallback(this._onUserGesture);
    }
    /** @internal */
    play(options = {}) {
        if (this._state === 3 /* SoundState.Started */) {
            return;
        }
        if (options.loop !== undefined) {
            this._options.loop = options.loop;
        }
        this._mediaElement.loop = this._options.loop;
        let startOffset = options.startOffset;
        if (this._currentTimeChangedWhilePaused) {
            startOffset = this._options.startOffset;
            this._currentTimeChangedWhilePaused = false;
        }
        else if (this._state === 5 /* SoundState.Paused */) {
            startOffset = this.currentTime + this._options.startOffset;
        }
        if (startOffset && startOffset > 0) {
            this._mediaElement.currentTime = startOffset;
        }
        this._volumeNode.gain.value = options.volume ?? 1;
        this._play();
    }
    /** @internal */
    pause() {
        if (this._state !== 2 /* SoundState.Starting */ && this._state !== 3 /* SoundState.Started */) {
            return;
        }
        this._setState(5 /* SoundState.Paused */);
        this._enginePauseTime += this.engine.currentTime - this._enginePlayTime;
        this._mediaElement.pause();
    }
    /** @internal */
    resume() {
        if (this._state === 5 /* SoundState.Paused */) {
            this.play();
        }
        else if (this._currentTimeChangedWhilePaused) {
            this.play();
        }
    }
    /** @internal */
    stop() {
        if (this._state === 1 /* SoundState.Stopped */) {
            return;
        }
        this._stop();
    }
    /** @internal */
    getClassName() {
        return "_WebAudioStreamingSoundInstance";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the sound's subgraph.
        if (node instanceof _WebAudioStreamingSound && node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node instanceof _WebAudioStreamingSound && node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initFromMediaElement(mediaElement) {
        _Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.SetCorsBehavior(mediaElement.currentSrc, mediaElement);
        mediaElement.controls = false;
        mediaElement.loop = this._options.loop;
        mediaElement.preload = "auto";
        mediaElement.addEventListener("canplaythrough", this._onCanPlayThrough, { once: true });
        mediaElement.addEventListener("ended", this._onEnded, { once: true });
        mediaElement.addEventListener("error", this._onError, { once: true });
        mediaElement.load();
        this._sourceNode = new MediaElementAudioSourceNode(this._sound._audioContext, { mediaElement: mediaElement });
        this._sourceNode.connect(this._volumeNode);
        if (!this._connect(this._sound)) {
            throw new Error("Connect failed");
        }
        this._mediaElement = mediaElement;
    }
    _initFromUrl(url) {
        const audio = new Audio((0,_audioUtils__WEBPACK_IMPORTED_MODULE_6__._CleanUrl)(url));
        this._initFromMediaElement(audio);
    }
    _initFromUrls(urls) {
        const audio = new Audio();
        for (const url of urls) {
            const source = document.createElement("source");
            source.src = (0,_audioUtils__WEBPACK_IMPORTED_MODULE_6__._CleanUrl)(url);
            audio.appendChild(source);
        }
        this._initFromMediaElement(audio);
    }
    _play() {
        this._setState(2 /* SoundState.Starting */);
        if (!this._isReady) {
            this._playWhenReady();
            return;
        }
        if (this._state !== 2 /* SoundState.Starting */) {
            return;
        }
        if (this.engine.state === "running") {
            const result = this._mediaElement.play();
            this._enginePlayTime = this.engine.currentTime;
            this._setState(3 /* SoundState.Started */);
            // It's possible that the play() method fails on Safari, even if the audio engine's state is "running".
            // This occurs when the audio context is paused by the system and resumed automatically by the audio engine
            // without a user interaction (e.g. when the Vision Pro exits and reenters immersive mode).
            // eslint-disable-next-line github/no-then
            result.catch(() => {
                this._setState(4 /* SoundState.FailedToStart */);
                if (this._options.loop) {
                    this.engine.userGestureObservable.addOnce(this._onUserGesture);
                }
            });
        }
        else if (this._options.loop) {
            this.engine.stateChangedObservable.add(this._onEngineStateChanged);
        }
        else {
            this.stop();
            this._setState(4 /* SoundState.FailedToStart */);
        }
    }
    _playWhenReady() {
        this._isReadyPromise
            // eslint-disable-next-line github/no-then
            .then(() => {
            this._play();
        })
            // eslint-disable-next-line github/no-then
            .catch(() => {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("Streaming sound instance failed to play");
            this._setState(4 /* SoundState.FailedToStart */);
        });
    }
    _stop() {
        this._mediaElement.pause();
        this._setState(1 /* SoundState.Stopped */);
        this._onEnded();
        this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9TdHJlYW1pbmdTb3VuZF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQTRCQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUtBO0FBQ0E7QUFMQTtBQU1BO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFFQTtBQVNBO0FBQ0E7QUFlQTtBQUNBO0FBVkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFuQkE7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFtQkE7QUFDQTtBQW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWhQQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBb0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N0cmVhbWluZ1NvdW5kLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N0cmVhbWluZ1NvdW5kSW5zdGFuY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvU3RyZWFtaW5nU291bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRTdGF0ZSB9IGZyb20gXCIuLi9zb3VuZFN0YXRlXCI7XG5pbXBvcnQgdHlwZSB7IElBYnN0cmFjdFNvdW5kT3B0aW9ucywgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucywgSUFic3RyYWN0U291bmRTdG9yZWRPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZFwiO1xuaW1wb3J0IHsgQWJzdHJhY3RTb3VuZCB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi9zdHJlYW1pbmdTb3VuZEluc3RhbmNlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmVhbWluZ1NvdW5kT3B0aW9uc0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIHByZWxvYWQuIERlZmF1bHRzIHRvIDEuXG4gICAgICogKi9cbiAgICBwcmVsb2FkQ291bnQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHN0cmVhbWluZyBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RyZWFtaW5nU291bmRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRPcHRpb25zLCBJU3RyZWFtaW5nU291bmRPcHRpb25zQmFzZSB7fVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHBsYXlpbmcgYSBzdHJlYW1pbmcgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmVhbWluZ1NvdW5kUGxheU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zIHt9XG5cbi8qKlxuICogT3B0aW9ucyBzdG9yZWQgaW4gYSBzdHJlYW1pbmcgc291bmQuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRTdG9yZWRPcHRpb25zLCBJU3RyZWFtaW5nU291bmRPcHRpb25zQmFzZSB7fVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHN0cmVhbWluZyBzb3VuZC5cbiAqXG4gKiBBIHN0cmVhbWluZyBzb3VuZCBoYXMgYSBzb3VuZCBidWZmZXIgdGhhdCBpcyBsb2FkZWQgaW50byBtZW1vcnkgaW4gY2h1bmtzIGFzIGl0IGlzIHBsYXllZC4gVGhpcyBhbGxvd3MgaXQgdG8gYmUgcGxheWVkXG4gKiBtb3JlIHF1aWNrbHkgdGhhbiBhIHN0YXRpYyBzb3VuZCwgYnV0IGl0IGFsc28gbWVhbnMgdGhhdCBpdCBjYW5ub3QgaGF2ZSBsb29wIHBvaW50cyBvciBwbGF5YmFjayByYXRlIGNoYW5nZXMuXG4gKlxuICogRHVlIHRvIHRoZSB3YXkgc3RyZWFtaW5nIHNvdW5kcyBhcmUgdHlwaWNhbGx5IGltcGxlbWVudGVkLCB0aGVyZSBjYW4gYmUgYSBzaWduaWZpY2FudCBkZWxheSB3aGVuIGF0dGVtcHRpbmcgdG8gcGxheVxuICogYSBzdHJlYW1pbmcgc291bmQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUbyBwcmV2ZW50IHRoaXMgZGVsYXksIGl0IGlzIHJlY29tbWVuZGVkIHRvIHByZWxvYWQgaW5zdGFuY2VzIG9mIHRoZSBzb3VuZFxuICogdXNpbmcgdGhlIHtAbGluayBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zLnByZWxvYWRDb3VudH0gb3B0aW9ucywgb3IgdGhlIHtAbGluayBwcmVsb2FkSW5zdGFuY2VBc3luY30gYW5kXG4gKiB7QGxpbmsgcHJlbG9hZEluc3RhbmNlc0FzeW5jfSBtZXRob2RzIGJlZm9yZSBjYWxsaW5nIHRoZSBgcGxheWAgbWV0aG9kLlxuICpcbiAqIFN0cmVhbWluZyBzb3VuZHMgYXJlIGNyZWF0ZWQgYnkgdGhlIHtAbGluayBDcmVhdGVTdHJlYW1pbmdTb3VuZEFzeW5jfSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cmVhbWluZ1NvdW5kIGV4dGVuZHMgQWJzdHJhY3RTb3VuZCB7XG4gICAgcHJpdmF0ZSBfcHJlbG9hZGVkSW5zdGFuY2VzID0gbmV3IEFycmF5PF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlPigpO1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpbnN0YW5jZXMgdG8gcHJlbG9hZC4gRGVmYXVsdHMgdG8gYDFgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcHJlbG9hZENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnByZWxvYWRDb3VudCA/PyAxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpbnN0YW5jZXMgdGhhdCBoYXZlIGJlZW4gcHJlbG9hZGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcHJlbG9hZENvbXBsZXRlZENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZWxvYWRzIGFuIGluc3RhbmNlIG9mIHRoZSBzb3VuZC5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpbnN0YW5jZSBpcyBwcmVsb2FkZWQuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIHB1YmxpYyBwcmVsb2FkSW5zdGFuY2VBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9jcmVhdGVJbnN0YW5jZSgpO1xuXG4gICAgICAgIHRoaXMuX2FkZFByZWxvYWRlZEluc3RhbmNlKGluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2UucHJlbG9hZGVkUHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVsb2FkcyB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGluc3RhbmNlcyBvZiB0aGUgc291bmQuXG4gICAgICogQHBhcmFtIGNvdW50IC0gVGhlIG51bWJlciBvZiBpbnN0YW5jZXMgdG8gcHJlbG9hZC5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCBpbnN0YW5jZXMgYXJlIHByZWxvYWRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcHJlbG9hZEluc3RhbmNlc0FzeW5jKGNvdW50OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgICAgICB0aGlzLnByZWxvYWRJbnN0YW5jZUFzeW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXMubWFwKGFzeW5jIChpbnN0YW5jZSkgPT4gYXdhaXQgaW5zdGFuY2UucHJlbG9hZGVkUHJvbWlzZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYXlzIHRoZSBzb3VuZC5cbiAgICAgKiAtIFRyaWdnZXJzIGBvbkVuZGVkT2JzZXJ2YWJsZWAgaWYgcGxheWVkIGZvciB0aGUgZnVsbCBkdXJhdGlvbiBhbmQgdGhlIGBsb29wYCBvcHRpb24gaXMgbm90IHNldC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBwbGF5aW5nIHRoZSBzb3VuZC4gT3B0aW9ucyBzZXQgaGVyZSBvdmVycmlkZSB0aGUgc291bmQncyBvcHRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5KG9wdGlvbnM6IFBhcnRpYWw8SVN0cmVhbWluZ1NvdW5kUGxheU9wdGlvbnM+ID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluc3RhbmNlOiBfU3RyZWFtaW5nU291bmRJbnN0YW5jZTtcblxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkQ29tcGxldGVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuX3ByZWxvYWRlZEluc3RhbmNlc1swXTtcbiAgICAgICAgICAgIGluc3RhbmNlLnN0YXJ0T2Zmc2V0ID0gdGhpcy5zdGFydE9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZVByZWxvYWRlZEluc3RhbmNlKGluc3RhbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5fY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uSW5zdGFuY2VTdGF0ZUNoYW5nZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BFeGNlc3NJbnN0YW5jZXMoKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sob25JbnN0YW5jZVN0YXRlQ2hhbmdlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGluc3RhbmNlLm9uU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5hZGQob25JbnN0YW5jZVN0YXRlQ2hhbmdlZCk7XG5cbiAgICAgICAgb3B0aW9ucy5zdGFydE9mZnNldCA/Pz0gdGhpcy5zdGFydE9mZnNldDtcbiAgICAgICAgb3B0aW9ucy5sb29wID8/PSB0aGlzLmxvb3A7XG4gICAgICAgIG9wdGlvbnMudm9sdW1lID8/PSAxO1xuXG4gICAgICAgIHRoaXMuX2JlZm9yZVBsYXkoaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5wbGF5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9hZnRlclBsYXkoaW5zdGFuY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdG9wcGVkKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBBcnJheS5mcm9tKHRoaXMuX2luc3RhbmNlcykpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvdmVycmlkZSBfY3JlYXRlSW5zdGFuY2UoKTogX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2U7XG5cbiAgICBwcml2YXRlIF9hZGRQcmVsb2FkZWRJbnN0YW5jZShpbnN0YW5jZTogX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXMuaW5jbHVkZXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW1vdmVQcmVsb2FkZWRJbnN0YW5jZShpbnN0YW5jZTogX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZWxvYWRlZEluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi8uLi9NaXNjL29ic2VydmFibGVcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0U291bmRJbnN0YW5jZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB7IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB0eXBlIHsgSVN0cmVhbWluZ1NvdW5kT3B0aW9uc0Jhc2UsIFN0cmVhbWluZ1NvdW5kIH0gZnJvbSBcIi4vc3RyZWFtaW5nU291bmRcIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBzdHJlYW1pbmcgc291bmQgaW5zdGFuY2UuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RyZWFtaW5nU291bmRJbnN0YW5jZU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZEluc3RhbmNlT3B0aW9ucywgSVN0cmVhbWluZ1NvdW5kT3B0aW9uc0Jhc2Uge31cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlIGV4dGVuZHMgX0Fic3RyYWN0U291bmRJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfcmVqZWN0UHJlbG9hZGVkUHJvaW1zZTogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9yZXNvbHZlUHJlbG9hZGVkUHJvbWlzZTogKCkgPT4gdm9pZDtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0cmVhbWluZ1NvdW5kSW5zdGFuY2VPcHRpb25zO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvblJlYWR5T2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlPigpO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyByZWFkb25seSBwcmVsb2FkZWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWplY3RQcmVsb2FkZWRQcm9pbXNlID0gcmVqZWN0O1xuICAgICAgICB0aGlzLl9yZXNvbHZlUHJlbG9hZGVkUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioc291bmQ6IFN0cmVhbWluZ1NvdW5kKSB7XG4gICAgICAgIHN1cGVyKHNvdW5kKTtcblxuICAgICAgICB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLmFkZCh0aGlzLl9yZWplY3RQcmVsb2FkZWRQcm9pbXNlKTtcbiAgICAgICAgdGhpcy5vblJlYWR5T2JzZXJ2YWJsZS5hZGQodGhpcy5fcmVzb2x2ZVByZWxvYWRlZFByb21pc2UpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0IHN0YXJ0T2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMub25FcnJvck9ic2VydmFibGUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5vblJlYWR5T2JzZXJ2YWJsZS5jbGVhcigpO1xuXG4gICAgICAgIHRoaXMuX3Jlc29sdmVQcmVsb2FkZWRQcm9taXNlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL01pc2MvbG9nZ2VyXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9NaXNjL3Rvb2xzXCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHt9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRcIjtcbmltcG9ydCB0eXBlIHsgSVN0cmVhbWluZ1NvdW5kT3B0aW9ucywgSVN0cmVhbWluZ1NvdW5kUGxheU9wdGlvbnMsIElTdHJlYW1pbmdTb3VuZFN0b3JlZE9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdHJlYW1pbmdTb3VuZFwiO1xuaW1wb3J0IHsgU3RyZWFtaW5nU291bmQgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdHJlYW1pbmdTb3VuZFwiO1xuaW1wb3J0IHsgX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdHJlYW1pbmdTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgX1NwYXRpYWxBdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvc3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfU3RlcmVvQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3N0ZXJlb0F1ZGlvXCI7XG5pbXBvcnQgeyBfQ2xlYW5VcmwgfSBmcm9tIFwiLi4vYXVkaW9VdGlsc1wiO1xuaW1wb3J0IHsgU291bmRTdGF0ZSB9IGZyb20gXCIuLi9zb3VuZFN0YXRlXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIH0gZnJvbSBcIi4vc3ViTm9kZXMvd2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoXCI7XG5pbXBvcnQgeyBfU3BhdGlhbFdlYkF1ZGlvIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9zcGF0aWFsV2ViQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4vd2ViQXVkaW9FbmdpbmVcIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvSW5Ob2RlLCBJV2ViQXVkaW9PdXROb2RlLCBJV2ViQXVkaW9TdXBlck5vZGUgfSBmcm9tIFwiLi93ZWJBdWRpb05vZGVcIjtcblxudHlwZSBTdHJlYW1pbmdTb3VuZFNvdXJjZVR5cGUgPSBIVE1MTWVkaWFFbGVtZW50IHwgc3RyaW5nIHwgc3RyaW5nW107XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZCBleHRlbmRzIFN0cmVhbWluZ1NvdW5kIGltcGxlbWVudHMgSVdlYkF1ZGlvU3VwZXJOb2RlIHtcbiAgICBwcml2YXRlIF9zcGF0aWFsOiBOdWxsYWJsZTxfU3BhdGlhbEF1ZGlvPiA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbEF1dG9VcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwYXRpYWxNaW5VcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3N0ZXJlbzogTnVsbGFibGU8X1N0ZXJlb0F1ZGlvPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgX29wdGlvbnM6IElTdHJlYW1pbmdTb3VuZFN0b3JlZE9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIF9zdWJHcmFwaDogX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgX3NvdXJjZTogU3RyZWFtaW5nU291bmRTb3VyY2VUeXBlO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBvcHRpb25zOiBQYXJ0aWFsPElTdHJlYW1pbmdTb3VuZE9wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbEF1dG9VcGRhdGUgPSBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwYXRpYWxNaW5VcGRhdGVUaW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsTWluVXBkYXRlVGltZSA9IG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0b3BsYXk6IG9wdGlvbnMuYXV0b3BsYXkgPz8gZmFsc2UsXG4gICAgICAgICAgICBsb29wOiBvcHRpb25zLmxvb3AgPz8gZmFsc2UsXG4gICAgICAgICAgICBtYXhJbnN0YW5jZXM6IG9wdGlvbnMubWF4SW5zdGFuY2VzID8/IEluZmluaXR5LFxuICAgICAgICAgICAgcHJlbG9hZENvdW50OiBvcHRpb25zLnByZWxvYWRDb3VudCA/PyAxLFxuICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IG9wdGlvbnMuc3RhcnRPZmZzZXQgPz8gMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IG5ldyBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZC5fU3ViR3JhcGgodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBfaW5pdEFzeW5jKHNvdXJjZTogU3RyZWFtaW5nU291bmRTb3VyY2VUeXBlLCBvcHRpb25zOiBQYXJ0aWFsPElTdHJlYW1pbmdTb3VuZE9wdGlvbnM+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IHRoaXMuZW5naW5lLl9hdWRpb0NvbnRleHQ7XG5cbiAgICAgICAgaWYgKCEoYXVkaW9Db250ZXh0IGluc3RhbmNlb2YgQXVkaW9Db250ZXh0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYXVkaW8gY29udGV4dCB0eXBlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcbiAgICAgICAgdGhpcy5fc291cmNlID0gc291cmNlO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm91dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSBvcHRpb25zLm91dEJ1cztcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm91dEJ1c0F1dG9EZWZhdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbmdpbmUuaXNSZWFkeVByb21pc2U7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IHRoaXMuZW5naW5lLmRlZmF1bHRNYWluQnVzO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fc3ViR3JhcGguaW5pdEFzeW5jKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWxQcm9wZXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZENvdW50KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByZWxvYWRJbnN0YW5jZXNBc3luYyh0aGlzLnByZWxvYWRDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hdXRvcGxheSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX2FkZFNvdW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5faW5Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3BhdGlhbCgpOiBfU3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zcGF0aWFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RlcmVvID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaC5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX3JlbW92ZVNvdW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVJbnN0YW5jZSgpOiBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZEluc3RhbmNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZEluc3RhbmNlKHRoaXMsIHRoaXMuX29wdGlvbnMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSBzdXBlci5fZGlzY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNwYXRpYWxQcm9wZXJ0eSgpOiBfU3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF0aWFsKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsID0gbmV3IF9TcGF0aWFsV2ViQXVkaW8odGhpcy5fc3ViR3JhcGgsIHRoaXMuX3NwYXRpYWxBdXRvVXBkYXRlLCB0aGlzLl9zcGF0aWFsTWluVXBkYXRlVGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc3BhdGlhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfU3ViR3JhcGggPSBjbGFzcyBleHRlbmRzIF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGgge1xuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX293bmVyOiBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZDtcblxuICAgICAgICBwcm90ZWN0ZWQgZ2V0IF9kb3duc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl9kb3duc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX3Vwc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl91cHN0cmVhbU5vZGVzID8/IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKiogQGludGVybmFsICovXG5jbGFzcyBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZEluc3RhbmNlIGV4dGVuZHMgX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2UgaW1wbGVtZW50cyBJV2ViQXVkaW9PdXROb2RlIHtcbiAgICBwcml2YXRlIF9jdXJyZW50VGltZUNoYW5nZWRXaGlsZVBhdXNlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2VuZ2luZVBsYXlUaW1lOiBudW1iZXIgPSBJbmZpbml0eTtcbiAgICBwcml2YXRlIF9lbmdpbmVQYXVzZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzUmVhZHlQcm9taXNlOiBQcm9taXNlPEhUTUxNZWRpYUVsZW1lbnQ+ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLl9yZXNvbHZlSXNSZWFkeVByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICB0aGlzLl9yZWplY3RJc1JlYWR5UHJvbWlzZSA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBwcml2YXRlIF9tZWRpYUVsZW1lbnQ6IEhUTUxNZWRpYUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfc291cmNlTm9kZTogTnVsbGFibGU8TWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlPjtcbiAgICBwcml2YXRlIF92b2x1bWVOb2RlOiBHYWluTm9kZTtcblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0cmVhbWluZ1NvdW5kU3RvcmVkT3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX3NvdW5kOiBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc291bmQ6IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kLCBvcHRpb25zOiBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHNvdW5kKTtcblxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5fdm9sdW1lTm9kZSA9IG5ldyBHYWluTm9kZShzb3VuZC5fYXVkaW9Db250ZXh0KTtcblxuICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9zb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRGcm9tVXJsKHNvdW5kLl9zb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291bmQuX3NvdXJjZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRGcm9tVXJscyhzb3VuZC5fc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fc291cmNlIGluc3RhbmNlb2YgSFRNTE1lZGlhRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdEZyb21NZWRpYUVsZW1lbnQoc291bmQuX3NvdXJjZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3RyZWFtaW5nIHNvdW5kIHNvdXJjZSAoJHtzb3VuZC5fc291cmNlfSkuYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBjdXJyZW50VGltZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aW1lU2luY2VMYXN0U3RhcnQgPSB0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQgPyAwIDogdGhpcy5lbmdpbmUuY3VycmVudFRpbWUgLSB0aGlzLl9lbmdpbmVQbGF5VGltZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZ2luZVBhdXNlVGltZSArIHRpbWVTaW5jZUxhc3RTdGFydCArIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjdXJyZW50VGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJlc3RhcnQgPSB0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGluZyB8fCB0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGVkO1xuXG4gICAgICAgIGlmIChyZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gU291bmRTdGF0ZS5TdG9wcGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldCA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChyZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoeyBzdGFydE9mZnNldDogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZUNoYW5nZWRXaGlsZVBhdXNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCk6IE51bGxhYmxlPEF1ZGlvTm9kZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lTm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBzdGFydFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZ2luZVBsYXlUaW1lO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGU/LmRpc2Nvbm5lY3QodGhpcy5fdm9sdW1lTm9kZSk7XG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5fb25FcnJvcik7XG4gICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5fb25FbmRlZCk7XG4gICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgdGhpcy5fb25DYW5QbGF5VGhyb3VnaCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2YgQXJyYXkuZnJvbSh0aGlzLl9tZWRpYUVsZW1lbnQuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQucmVtb3ZlQ2hpbGQoc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5naW5lLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25FbmdpbmVTdGF0ZUNoYW5nZWQpO1xuICAgICAgICB0aGlzLmVuZ2luZS51c2VyR2VzdHVyZU9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25Vc2VyR2VzdHVyZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBwbGF5KG9wdGlvbnM6IFBhcnRpYWw8SVN0cmVhbWluZ1NvdW5kUGxheU9wdGlvbnM+ID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmxvb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wID0gb3B0aW9ucy5sb29wO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5sb29wID0gdGhpcy5fb3B0aW9ucy5sb29wO1xuXG4gICAgICAgIGxldCBzdGFydE9mZnNldCA9IG9wdGlvbnMuc3RhcnRPZmZzZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lQ2hhbmdlZFdoaWxlUGF1c2VkKSB7XG4gICAgICAgICAgICBzdGFydE9mZnNldCA9IHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZUNoYW5nZWRXaGlsZVBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgc3RhcnRPZmZzZXQgPSB0aGlzLmN1cnJlbnRUaW1lICsgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydE9mZnNldCAmJiBzdGFydE9mZnNldCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5jdXJyZW50VGltZSA9IHN0YXJ0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdm9sdW1lTm9kZS5nYWluLnZhbHVlID0gb3B0aW9ucy52b2x1bWUgPz8gMTtcblxuICAgICAgICB0aGlzLl9wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBTb3VuZFN0YXRlLlN0YXJ0aW5nICYmIHRoaXMuX3N0YXRlICE9PSBTb3VuZFN0YXRlLlN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuUGF1c2VkKTtcbiAgICAgICAgdGhpcy5fZW5naW5lUGF1c2VUaW1lICs9IHRoaXMuZW5naW5lLmN1cnJlbnRUaW1lIC0gdGhpcy5fZW5naW5lUGxheVRpbWU7XG5cbiAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50LnBhdXNlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyByZXN1bWUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRUaW1lQ2hhbmdlZFdoaWxlUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0b3AoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZEluc3RhbmNlXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IEFic3RyYWN0QXVkaW9Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc291bmQncyBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZCAmJiBub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBBYnN0cmFjdEF1ZGlvTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSBzdXBlci5fZGlzY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZCAmJiBub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRGcm9tTWVkaWFFbGVtZW50KG1lZGlhRWxlbWVudDogSFRNTE1lZGlhRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBUb29scy5TZXRDb3JzQmVoYXZpb3IobWVkaWFFbGVtZW50LmN1cnJlbnRTcmMsIG1lZGlhRWxlbWVudCk7XG5cbiAgICAgICAgbWVkaWFFbGVtZW50LmNvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIG1lZGlhRWxlbWVudC5sb29wID0gdGhpcy5fb3B0aW9ucy5sb29wO1xuICAgICAgICBtZWRpYUVsZW1lbnQucHJlbG9hZCA9IFwiYXV0b1wiO1xuXG4gICAgICAgIG1lZGlhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgdGhpcy5fb25DYW5QbGF5VGhyb3VnaCwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBtZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kZWQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgbWVkaWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLl9vbkVycm9yLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICAgICAgbWVkaWFFbGVtZW50LmxvYWQoKTtcblxuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlID0gbmV3IE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSh0aGlzLl9zb3VuZC5fYXVkaW9Db250ZXh0LCB7IG1lZGlhRWxlbWVudDogbWVkaWFFbGVtZW50IH0pO1xuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmNvbm5lY3QodGhpcy5fdm9sdW1lTm9kZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0KHRoaXMuX3NvdW5kKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQgPSBtZWRpYUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEZyb21VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oX0NsZWFuVXJsKHVybCkpO1xuICAgICAgICB0aGlzLl9pbml0RnJvbU1lZGlhRWxlbWVudChhdWRpbyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEZyb21VcmxzKHVybHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCB1cmwgb2YgdXJscykge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbiAgICAgICAgICAgIHNvdXJjZS5zcmMgPSBfQ2xlYW5VcmwodXJsKTtcbiAgICAgICAgICAgIGF1ZGlvLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0RnJvbU1lZGlhRWxlbWVudChhdWRpbyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DYW5QbGF5VGhyb3VnaDogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVJc1JlYWR5UHJvbWlzZSh0aGlzLl9tZWRpYUVsZW1lbnQpO1xuICAgICAgICB0aGlzLm9uUmVhZHlPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfb25FbmRlZDogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbkVycm9yOiAocmVhc29uOiBhbnkpID0+IHZvaWQgPSAocmVhc29uOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5GYWlsZWRUb1N0YXJ0KTtcbiAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMocmVhc29uKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0SXNSZWFkeVByb21pc2UocmVhc29uKTtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uRW5naW5lU3RhdGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3RhdGUgIT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5sb29wICYmIHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uVXNlckdlc3R1cmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9wbGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlN0YXJ0aW5nKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2lzUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXlXaGVuUmVhZHkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gU291bmRTdGF0ZS5TdGFydGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnN0YXRlID09PSBcInJ1bm5pbmdcIikge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fbWVkaWFFbGVtZW50LnBsYXkoKTtcblxuICAgICAgICAgICAgdGhpcy5fZW5naW5lUGxheVRpbWUgPSB0aGlzLmVuZ2luZS5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RhcnRlZCk7XG5cbiAgICAgICAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGUgcGxheSgpIG1ldGhvZCBmYWlscyBvbiBTYWZhcmksIGV2ZW4gaWYgdGhlIGF1ZGlvIGVuZ2luZSdzIHN0YXRlIGlzIFwicnVubmluZ1wiLlxuICAgICAgICAgICAgLy8gVGhpcyBvY2N1cnMgd2hlbiB0aGUgYXVkaW8gY29udGV4dCBpcyBwYXVzZWQgYnkgdGhlIHN5c3RlbSBhbmQgcmVzdW1lZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBhdWRpbyBlbmdpbmVcbiAgICAgICAgICAgIC8vIHdpdGhvdXQgYSB1c2VyIGludGVyYWN0aW9uIChlLmcuIHdoZW4gdGhlIFZpc2lvbiBQcm8gZXhpdHMgYW5kIHJlZW50ZXJzIGltbWVyc2l2ZSBtb2RlKS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxuICAgICAgICAgICAgcmVzdWx0LmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLkZhaWxlZFRvU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS51c2VyR2VzdHVyZU9ic2VydmFibGUuYWRkT25jZSh0aGlzLl9vblVzZXJHZXN0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUuYWRkKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5GYWlsZWRUb1N0YXJ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYXlXaGVuUmVhZHkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzUmVhZHlQcm9taXNlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIlN0cmVhbWluZyBzb3VuZCBpbnN0YW5jZSBmYWlsZWQgdG8gcGxheVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLkZhaWxlZFRvU3RhcnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVqZWN0SXNSZWFkeVByb21pc2U6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBfcmVzb2x2ZUlzUmVhZHlQcm9taXNlOiAobWVkaWFFbGVtZW50OiBIVE1MTWVkaWFFbGVtZW50KSA9PiB2b2lkO1xuXG4gICAgcHJpdmF0ZSBfc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50LnBhdXNlKCk7XG4gICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RvcHBlZCk7XG4gICAgICAgIHRoaXMuX29uRW5kZWQoKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9