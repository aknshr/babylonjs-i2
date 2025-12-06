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
    constructor(name, engine, options) {
        super(name, engine, options);
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
        super(name, engine, options);
        this._stereo = null;
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
    get stereo() {
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_5__._StereoAudio(this._subGraph));
    }
    /** @internal */
    dispose() {
        super.dispose();
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
    _createSpatialProperty(autoUpdate, minUpdateTime) {
        return new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_8__._SpatialWebAudio(this._subGraph, autoUpdate, minUpdateTime);
    }
    _getOptions() {
        return this._options;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9TdHJlYW1pbmdTb3VuZF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQTRCQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUtBO0FBQ0E7QUFMQTtBQU1BO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFFQTtBQVNBO0FBQ0E7QUFlQTtBQUNBO0FBVkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBbUJBO0FBQ0E7QUFuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQThOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoUEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW9DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdHJlYW1pbmdTb3VuZC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdHJlYW1pbmdTb3VuZEluc3RhbmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb1N0cmVhbWluZ1NvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vc291bmRTdGF0ZVwiO1xuaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RTb3VuZE9wdGlvbnMsIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnMsIElBYnN0cmFjdFNvdW5kU3RvcmVkT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRcIjtcbmltcG9ydCB7IEFic3RyYWN0U291bmQgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4vc3RyZWFtaW5nU291bmRJbnN0YW5jZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElTdHJlYW1pbmdTb3VuZE9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGluc3RhbmNlcyB0byBwcmVsb2FkLiBEZWZhdWx0cyB0byAxLlxuICAgICAqICovXG4gICAgcHJlbG9hZENvdW50OiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzdHJlYW1pbmcgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmVhbWluZ1NvdW5kT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kT3B0aW9ucywgSVN0cmVhbWluZ1NvdW5kT3B0aW9uc0Jhc2Uge31cblxuLyoqXG4gKiBPcHRpb25zIGZvciBwbGF5aW5nIGEgc3RyZWFtaW5nIHNvdW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdHJlYW1pbmdTb3VuZFBsYXlPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucyB7fVxuXG4vKipcbiAqIE9wdGlvbnMgc3RvcmVkIGluIGEgc3RyZWFtaW5nIHNvdW5kLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmVhbWluZ1NvdW5kU3RvcmVkT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kU3RvcmVkT3B0aW9ucywgSVN0cmVhbWluZ1NvdW5kT3B0aW9uc0Jhc2Uge31cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzdHJlYW1pbmcgc291bmQuXG4gKlxuICogQSBzdHJlYW1pbmcgc291bmQgaGFzIGEgc291bmQgYnVmZmVyIHRoYXQgaXMgbG9hZGVkIGludG8gbWVtb3J5IGluIGNodW5rcyBhcyBpdCBpcyBwbGF5ZWQuIFRoaXMgYWxsb3dzIGl0IHRvIGJlIHBsYXllZFxuICogbW9yZSBxdWlja2x5IHRoYW4gYSBzdGF0aWMgc291bmQsIGJ1dCBpdCBhbHNvIG1lYW5zIHRoYXQgaXQgY2Fubm90IGhhdmUgbG9vcCBwb2ludHMgb3IgcGxheWJhY2sgcmF0ZSBjaGFuZ2VzLlxuICpcbiAqIER1ZSB0byB0aGUgd2F5IHN0cmVhbWluZyBzb3VuZHMgYXJlIHR5cGljYWxseSBpbXBsZW1lbnRlZCwgdGhlcmUgY2FuIGJlIGEgc2lnbmlmaWNhbnQgZGVsYXkgd2hlbiBhdHRlbXB0aW5nIHRvIHBsYXlcbiAqIGEgc3RyZWFtaW5nIHNvdW5kIGZvciB0aGUgZmlyc3QgdGltZS4gVG8gcHJldmVudCB0aGlzIGRlbGF5LCBpdCBpcyByZWNvbW1lbmRlZCB0byBwcmVsb2FkIGluc3RhbmNlcyBvZiB0aGUgc291bmRcbiAqIHVzaW5nIHRoZSB7QGxpbmsgSVN0cmVhbWluZ1NvdW5kU3RvcmVkT3B0aW9ucy5wcmVsb2FkQ291bnR9IG9wdGlvbnMsIG9yIHRoZSB7QGxpbmsgcHJlbG9hZEluc3RhbmNlQXN5bmN9IGFuZFxuICoge0BsaW5rIHByZWxvYWRJbnN0YW5jZXNBc3luY30gbWV0aG9kcyBiZWZvcmUgY2FsbGluZyB0aGUgYHBsYXlgIG1ldGhvZC5cbiAqXG4gKiBTdHJlYW1pbmcgc291bmRzIGFyZSBjcmVhdGVkIGJ5IHRoZSB7QGxpbmsgQ3JlYXRlU3RyZWFtaW5nU291bmRBc3luY30gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJlYW1pbmdTb3VuZCBleHRlbmRzIEFic3RyYWN0U291bmQge1xuICAgIHByaXZhdGUgX3ByZWxvYWRlZEluc3RhbmNlcyA9IG5ldyBBcnJheTxfU3RyZWFtaW5nU291bmRJbnN0YW5jZT4oKTtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0cmVhbWluZ1NvdW5kU3RvcmVkT3B0aW9ucztcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMiwgb3B0aW9uczogUGFydGlhbDxJU3RyZWFtaW5nU291bmRPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIHByZWxvYWQuIERlZmF1bHRzIHRvIGAxYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHByZWxvYWRDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5wcmVsb2FkQ291bnQgPz8gMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIHRoYXQgaGF2ZSBiZWVuIHByZWxvYWRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHByZWxvYWRDb21wbGV0ZWRDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJlbG9hZGVkSW5zdGFuY2VzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVsb2FkcyBhbiBpbnN0YW5jZSBvZiB0aGUgc291bmQuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW5zdGFuY2UgaXMgcHJlbG9hZGVkLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBwdWJsaWMgcHJlbG9hZEluc3RhbmNlQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fY3JlYXRlSW5zdGFuY2UoKTtcblxuICAgICAgICB0aGlzLl9hZGRQcmVsb2FkZWRJbnN0YW5jZShpbnN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnByZWxvYWRlZFByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlbG9hZHMgdGhlIGdpdmVuIG51bWJlciBvZiBpbnN0YW5jZXMgb2YgdGhlIHNvdW5kLlxuICAgICAqIEBwYXJhbSBjb3VudCAtIFRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIHByZWxvYWQuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhbGwgaW5zdGFuY2VzIGFyZSBwcmVsb2FkZWQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHByZWxvYWRJbnN0YW5jZXNBc3luYyhjb3VudDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkSW5zdGFuY2VBc3luYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5fcHJlbG9hZGVkSW5zdGFuY2VzLm1hcChhc3luYyAoaW5zdGFuY2UpID0+IGF3YWl0IGluc3RhbmNlLnByZWxvYWRlZFByb21pc2UpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5cyB0aGUgc291bmQuXG4gICAgICogLSBUcmlnZ2VycyBgb25FbmRlZE9ic2VydmFibGVgIGlmIHBsYXllZCBmb3IgdGhlIGZ1bGwgZHVyYXRpb24gYW5kIHRoZSBgbG9vcGAgb3B0aW9uIGlzIG5vdCBzZXQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gdXNlIHdoZW4gcGxheWluZyB0aGUgc291bmQuIE9wdGlvbnMgc2V0IGhlcmUgb3ZlcnJpZGUgdGhlIHNvdW5kJ3Mgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheShvcHRpb25zOiBQYXJ0aWFsPElTdHJlYW1pbmdTb3VuZFBsYXlPcHRpb25zPiA9IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnN0YW5jZTogX1N0cmVhbWluZ1NvdW5kSW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZENvbXBsZXRlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXNbMF07XG4gICAgICAgICAgICBpbnN0YW5jZS5zdGFydE9mZnNldCA9IHRoaXMuc3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVQcmVsb2FkZWRJbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuX2NyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvbkluc3RhbmNlU3RhdGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wRXhjZXNzSW5zdGFuY2VzKCk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uub25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKG9uSW5zdGFuY2VTdGF0ZUNoYW5nZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbnN0YW5jZS5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUuYWRkKG9uSW5zdGFuY2VTdGF0ZUNoYW5nZWQpO1xuXG4gICAgICAgIG9wdGlvbnMuc3RhcnRPZmZzZXQgPz89IHRoaXMuc3RhcnRPZmZzZXQ7XG4gICAgICAgIG9wdGlvbnMubG9vcCA/Pz0gdGhpcy5sb29wO1xuICAgICAgICBvcHRpb25zLnZvbHVtZSA/Pz0gMTtcblxuICAgICAgICB0aGlzLl9iZWZvcmVQbGF5KGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2UucGxheShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fYWZ0ZXJQbGF5KGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RvcHBlZCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgQXJyYXkuZnJvbSh0aGlzLl9pbnN0YW5jZXMpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3ZlcnJpZGUgX2NyZWF0ZUluc3RhbmNlKCk6IF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlO1xuXG4gICAgcHJpdmF0ZSBfYWRkUHJlbG9hZGVkSW5zdGFuY2UoaW5zdGFuY2U6IF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fcHJlbG9hZGVkSW5zdGFuY2VzLmluY2x1ZGVzKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgdGhpcy5fcHJlbG9hZGVkSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlUHJlbG9hZGVkSW5zdGFuY2UoaW5zdGFuY2U6IF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcHJlbG9hZGVkSW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVsb2FkZWRJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgdHlwZSB7IElBYnN0cmFjdFNvdW5kSW5zdGFuY2VPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgdHlwZSB7IElTdHJlYW1pbmdTb3VuZE9wdGlvbnNCYXNlLCBTdHJlYW1pbmdTb3VuZCB9IGZyb20gXCIuL3N0cmVhbWluZ1NvdW5kXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgc3RyZWFtaW5nIHNvdW5kIGluc3RhbmNlLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmVhbWluZ1NvdW5kSW5zdGFuY2VPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRJbnN0YW5jZU9wdGlvbnMsIElTdHJlYW1pbmdTb3VuZE9wdGlvbnNCYXNlIHt9XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfU3RyZWFtaW5nU291bmRJbnN0YW5jZSBleHRlbmRzIF9BYnN0cmFjdFNvdW5kSW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3JlamVjdFByZWxvYWRlZFByb2ltc2U6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBfcmVzb2x2ZVByZWxvYWRlZFByb21pc2U6ICgpID0+IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3ZlcnJpZGUgcmVhZG9ubHkgX29wdGlvbnM6IElTdHJlYW1pbmdTb3VuZEluc3RhbmNlT3B0aW9ucztcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgb25SZWFkeU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxfU3RyZWFtaW5nU291bmRJbnN0YW5jZT4oKTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJlbG9hZGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5fcmVqZWN0UHJlbG9hZGVkUHJvaW1zZSA9IHJlamVjdDtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZVByZWxvYWRlZFByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHNvdW5kOiBTdHJlYW1pbmdTb3VuZCkge1xuICAgICAgICBzdXBlcihzb3VuZCk7XG5cbiAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGQodGhpcy5fcmVqZWN0UHJlbG9hZGVkUHJvaW1zZSk7XG4gICAgICAgIHRoaXMub25SZWFkeU9ic2VydmFibGUuYWRkKHRoaXMuX3Jlc29sdmVQcmVsb2FkZWRQcm9taXNlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldCBzdGFydE9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMub25SZWFkeU9ic2VydmFibGUuY2xlYXIoKTtcblxuICAgICAgICB0aGlzLl9yZXNvbHZlUHJlbG9hZGVkUHJvbWlzZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi9NaXNjL2xvZ2dlclwiO1xuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vTWlzYy90b29sc1wiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvTm9kZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7fSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IElTdHJlYW1pbmdTb3VuZE9wdGlvbnMsIElTdHJlYW1pbmdTb3VuZFBsYXlPcHRpb25zLCBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RyZWFtaW5nU291bmRcIjtcbmltcG9ydCB7IFN0cmVhbWluZ1NvdW5kIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RyZWFtaW5nU291bmRcIjtcbmltcG9ydCB7IF9TdHJlYW1pbmdTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RyZWFtaW5nU291bmRJbnN0YW5jZVwiO1xuaW1wb3J0IHsgX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMsIHR5cGUgQWJzdHJhY3RTcGF0aWFsQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfU3RlcmVvQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3N0ZXJlb0F1ZGlvXCI7XG5pbXBvcnQgeyBfQ2xlYW5VcmwgfSBmcm9tIFwiLi4vYXVkaW9VdGlsc1wiO1xuaW1wb3J0IHsgU291bmRTdGF0ZSB9IGZyb20gXCIuLi9zb3VuZFN0YXRlXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIH0gZnJvbSBcIi4vc3ViTm9kZXMvd2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoXCI7XG5pbXBvcnQgeyBfU3BhdGlhbFdlYkF1ZGlvIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9zcGF0aWFsV2ViQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4vd2ViQXVkaW9FbmdpbmVcIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvSW5Ob2RlLCBJV2ViQXVkaW9PdXROb2RlLCBJV2ViQXVkaW9TdXBlck5vZGUgfSBmcm9tIFwiLi93ZWJBdWRpb05vZGVcIjtcblxudHlwZSBTdHJlYW1pbmdTb3VuZFNvdXJjZVR5cGUgPSBIVE1MTWVkaWFFbGVtZW50IHwgc3RyaW5nIHwgc3RyaW5nW107XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZCBleHRlbmRzIFN0cmVhbWluZ1NvdW5kIGltcGxlbWVudHMgSVdlYkF1ZGlvU3VwZXJOb2RlIHtcbiAgICBwcml2YXRlIF9zdGVyZW86IE51bGxhYmxlPF9TdGVyZW9BdWRpbz4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zO1xuICAgIHByb3RlY3RlZCBfc3ViR3JhcGg6IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGg7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIF9zb3VyY2U6IFN0cmVhbWluZ1NvdW5kU291cmNlVHlwZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSwgb3B0aW9uczogUGFydGlhbDxJU3RyZWFtaW5nU291bmRPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICAgICAgICBhdXRvcGxheTogb3B0aW9ucy5hdXRvcGxheSA/PyBmYWxzZSxcbiAgICAgICAgICAgIGxvb3A6IG9wdGlvbnMubG9vcCA/PyBmYWxzZSxcbiAgICAgICAgICAgIG1heEluc3RhbmNlczogb3B0aW9ucy5tYXhJbnN0YW5jZXMgPz8gSW5maW5pdHksXG4gICAgICAgICAgICBwcmVsb2FkQ291bnQ6IG9wdGlvbnMucHJlbG9hZENvdW50ID8/IDEsXG4gICAgICAgICAgICBzdGFydE9mZnNldDogb3B0aW9ucy5zdGFydE9mZnNldCA/PyAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gbmV3IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kLl9TdWJHcmFwaCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIF9pbml0QXN5bmMoc291cmNlOiBTdHJlYW1pbmdTb3VuZFNvdXJjZVR5cGUsIG9wdGlvbnM6IFBhcnRpYWw8SVN0cmVhbWluZ1NvdW5kT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgYXVkaW9Db250ZXh0ID0gdGhpcy5lbmdpbmUuX2F1ZGlvQ29udGV4dDtcblxuICAgICAgICBpZiAoIShhdWRpb0NvbnRleHQgaW5zdGFuY2VvZiBBdWRpb0NvbnRleHQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhdWRpbyBjb250ZXh0IHR5cGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuICAgICAgICB0aGlzLl9zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMub3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IG9wdGlvbnMub3V0QnVzO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub3V0QnVzQXV0b0RlZmF1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuZ2luZS5pc1JlYWR5UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gdGhpcy5lbmdpbmUuZGVmYXVsdE1haW5CdXM7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkQ291bnQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZEluc3RhbmNlc0FzeW5jKHRoaXMucHJlbG9hZENvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5fYWRkU291bmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YkdyYXBoLl9pbk5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5fb3V0Tm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBzdGVyZW8oKTogX1N0ZXJlb0F1ZGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXJlbyA/PyAodGhpcy5fc3RlcmVvID0gbmV3IF9TdGVyZW9BdWRpbyh0aGlzLl9zdWJHcmFwaCkpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3N0ZXJlbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGguZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVTb3VuZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZFwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoKTogX1dlYkF1ZGlvU3RyZWFtaW5nU291bmRJbnN0YW5jZSB7XG4gICAgICAgIHJldHVybiBuZXcgX1dlYkF1ZGlvU3RyZWFtaW5nU291bmRJbnN0YW5jZSh0aGlzLCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY3JlYXRlU3BhdGlhbFByb3BlcnR5KGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcik6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfU3BhdGlhbFdlYkF1ZGlvKHRoaXMuX3N1YkdyYXBoLCBhdXRvVXBkYXRlLCBtaW5VcGRhdGVUaW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX2dldE9wdGlvbnMoKTogSVN0cmVhbWluZ1NvdW5kU3RvcmVkT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9TdWJHcmFwaCA9IGNsYXNzIGV4dGVuZHMgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB7XG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb3duZXI6IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfdXBzdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX3Vwc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmNsYXNzIF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kSW5zdGFuY2UgZXh0ZW5kcyBfU3RyZWFtaW5nU291bmRJbnN0YW5jZSBpbXBsZW1lbnRzIElXZWJBdWRpb091dE5vZGUge1xuICAgIHByaXZhdGUgX2N1cnJlbnRUaW1lQ2hhbmdlZFdoaWxlUGF1c2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZW5naW5lUGxheVRpbWU6IG51bWJlciA9IEluZmluaXR5O1xuICAgIHByaXZhdGUgX2VuZ2luZVBhdXNlVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9pc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNSZWFkeVByb21pc2U6IFByb21pc2U8SFRNTE1lZGlhRWxlbWVudD4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVJc1JlYWR5UHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgIHRoaXMuX3JlamVjdElzUmVhZHlQcm9taXNlID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHByaXZhdGUgX21lZGlhRWxlbWVudDogSFRNTE1lZGlhRWxlbWVudDtcbiAgICBwcml2YXRlIF9zb3VyY2VOb2RlOiBOdWxsYWJsZTxNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGU+O1xuICAgIHByaXZhdGUgX3ZvbHVtZU5vZGU6IEdhaW5Ob2RlO1xuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RyZWFtaW5nU291bmRTdG9yZWRPcHRpb25zO1xuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfc291bmQ6IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihzb3VuZDogX1dlYkF1ZGlvU3RyZWFtaW5nU291bmQsIG9wdGlvbnM6IElTdHJlYW1pbmdTb3VuZFN0b3JlZE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoc291bmQpO1xuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLl92b2x1bWVOb2RlID0gbmV3IEdhaW5Ob2RlKHNvdW5kLl9hdWRpb0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3NvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5faW5pdEZyb21Vcmwoc291bmQuX3NvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VuZC5fc291cmNlKSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdEZyb21VcmxzKHNvdW5kLl9zb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9zb3VyY2UgaW5zdGFuY2VvZiBIVE1MTWVkaWFFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0RnJvbU1lZGlhRWxlbWVudChzb3VuZC5fc291cmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdHJlYW1pbmcgc291bmQgc291cmNlICgke3NvdW5kLl9zb3VyY2V9KS5gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RTdGFydCA9IHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCA/IDAgOiB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSAtIHRoaXMuX2VuZ2luZVBsYXlUaW1lO1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5naW5lUGF1c2VUaW1lICsgdGltZVNpbmNlTGFzdFN0YXJ0ICsgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdGFydCA9IHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0aW5nIHx8IHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQ7XG5cbiAgICAgICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBTb3VuZFN0YXRlLlN0b3BwZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSh7IHN0YXJ0T2Zmc2V0OiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lQ2hhbmdlZFdoaWxlUGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKTogTnVsbGFibGU8QXVkaW9Ob2RlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92b2x1bWVOb2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXJ0VGltZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZW5naW5lUGxheVRpbWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5fc291cmNlTm9kZT8uZGlzY29ubmVjdCh0aGlzLl92b2x1bWVOb2RlKTtcbiAgICAgICAgdGhpcy5fc291cmNlTm9kZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLl9vbkVycm9yKTtcbiAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLl9vbkVuZGVkKTtcbiAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCB0aGlzLl9vbkNhblBsYXlUaHJvdWdoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBBcnJheS5mcm9tKHRoaXMuX21lZGlhRWxlbWVudC5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhRWxlbWVudC5yZW1vdmVDaGlsZChzb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnVzZXJHZXN0dXJlT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vblVzZXJHZXN0dXJlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBsYXkob3B0aW9uczogUGFydGlhbDxJU3RyZWFtaW5nU291bmRQbGF5T3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubG9vcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3AgPSBvcHRpb25zLmxvb3A7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50Lmxvb3AgPSB0aGlzLl9vcHRpb25zLmxvb3A7XG5cbiAgICAgICAgbGV0IHN0YXJ0T2Zmc2V0ID0gb3B0aW9ucy5zdGFydE9mZnNldDtcblxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFRpbWVDaGFuZ2VkV2hpbGVQYXVzZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ID0gdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lQ2hhbmdlZFdoaWxlUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICBzdGFydE9mZnNldCA9IHRoaXMuY3VycmVudFRpbWUgKyB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0T2Zmc2V0ICYmIHN0YXJ0T2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lID0gc3RhcnRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92b2x1bWVOb2RlLmdhaW4udmFsdWUgPSBvcHRpb25zLnZvbHVtZSA/PyAxO1xuXG4gICAgICAgIHRoaXMuX3BsYXkoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IFNvdW5kU3RhdGUuU3RhcnRpbmcgJiYgdGhpcy5fc3RhdGUgIT09IFNvdW5kU3RhdGUuU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5QYXVzZWQpO1xuICAgICAgICB0aGlzLl9lbmdpbmVQYXVzZVRpbWUgKz0gdGhpcy5lbmdpbmUuY3VycmVudFRpbWUgLSB0aGlzLl9lbmdpbmVQbGF5VGltZTtcblxuICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQucGF1c2UoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudFRpbWVDaGFuZ2VkV2hpbGVQYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBzdG9wKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RvcCgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kSW5zdGFuY2VcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogQWJzdHJhY3RBdWRpb05vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzb3VuZCdzIHN1YmdyYXBoLlxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kICYmIG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IEFic3RyYWN0QXVkaW9Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kICYmIG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEZyb21NZWRpYUVsZW1lbnQobWVkaWFFbGVtZW50OiBIVE1MTWVkaWFFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIFRvb2xzLlNldENvcnNCZWhhdmlvcihtZWRpYUVsZW1lbnQuY3VycmVudFNyYywgbWVkaWFFbGVtZW50KTtcblxuICAgICAgICBtZWRpYUVsZW1lbnQuY29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgbWVkaWFFbGVtZW50Lmxvb3AgPSB0aGlzLl9vcHRpb25zLmxvb3A7XG4gICAgICAgIG1lZGlhRWxlbWVudC5wcmVsb2FkID0gXCJhdXRvXCI7XG5cbiAgICAgICAgbWVkaWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCB0aGlzLl9vbkNhblBsYXlUaHJvdWdoLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIG1lZGlhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5fb25FbmRlZCwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBtZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIHRoaXMuX29uRXJyb3IsIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgICAgICBtZWRpYUVsZW1lbnQubG9hZCgpO1xuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBuZXcgTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlKHRoaXMuX3NvdW5kLl9hdWRpb0NvbnRleHQsIHsgbWVkaWFFbGVtZW50OiBtZWRpYUVsZW1lbnQgfSk7XG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUuY29ubmVjdCh0aGlzLl92b2x1bWVOb2RlKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3QodGhpcy5fc291bmQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21lZGlhRWxlbWVudCA9IG1lZGlhRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0RnJvbVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhfQ2xlYW5VcmwodXJsKSk7XG4gICAgICAgIHRoaXMuX2luaXRGcm9tTWVkaWFFbGVtZW50KGF1ZGlvKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0RnJvbVVybHModXJsczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuICAgICAgICAgICAgc291cmNlLnNyYyA9IF9DbGVhblVybCh1cmwpO1xuICAgICAgICAgICAgYXVkaW8uYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRGcm9tTWVkaWFFbGVtZW50KGF1ZGlvKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkNhblBsYXlUaHJvdWdoOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUlzUmVhZHlQcm9taXNlKHRoaXMuX21lZGlhRWxlbWVudCk7XG4gICAgICAgIHRoaXMub25SZWFkeU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbkVuZGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uRXJyb3I6IChyZWFzb246IGFueSkgPT4gdm9pZCA9IChyZWFzb246IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLkZhaWxlZFRvU3RhcnQpO1xuICAgICAgICB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZWFzb24pO1xuICAgICAgICB0aGlzLl9yZWplY3RJc1JlYWR5UHJvbWlzZShyZWFzb24pO1xuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfb25FbmdpbmVTdGF0ZUNoYW5nZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zdGF0ZSAhPT0gXCJydW5uaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmxvb3AgJiYgdGhpcy5zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfb25Vc2VyR2VzdHVyZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX3BsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RhcnRpbmcpO1xuXG4gICAgICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5fcGxheVdoZW5SZWFkeSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBTb3VuZFN0YXRlLlN0YXJ0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9tZWRpYUVsZW1lbnQucGxheSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9lbmdpbmVQbGF5VGltZSA9IHRoaXMuZW5naW5lLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdGFydGVkKTtcblxuICAgICAgICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoZSBwbGF5KCkgbWV0aG9kIGZhaWxzIG9uIFNhZmFyaSwgZXZlbiBpZiB0aGUgYXVkaW8gZW5naW5lJ3Mgc3RhdGUgaXMgXCJydW5uaW5nXCIuXG4gICAgICAgICAgICAvLyBUaGlzIG9jY3VycyB3aGVuIHRoZSBhdWRpbyBjb250ZXh0IGlzIHBhdXNlZCBieSB0aGUgc3lzdGVtIGFuZCByZXN1bWVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGF1ZGlvIGVuZ2luZVxuICAgICAgICAgICAgLy8gd2l0aG91dCBhIHVzZXIgaW50ZXJhY3Rpb24gKGUuZy4gd2hlbiB0aGUgVmlzaW9uIFBybyBleGl0cyBhbmQgcmVlbnRlcnMgaW1tZXJzaXZlIG1vZGUpLlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXG4gICAgICAgICAgICByZXN1bHQuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuRmFpbGVkVG9TdGFydCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnVzZXJHZXN0dXJlT2JzZXJ2YWJsZS5hZGRPbmNlKHRoaXMuX29uVXNlckdlc3R1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5hZGQodGhpcy5fb25FbmdpbmVTdGF0ZUNoYW5nZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLkZhaWxlZFRvU3RhcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGxheVdoZW5SZWFkeSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNSZWFkeVByb21pc2VcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXkoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiU3RyZWFtaW5nIHNvdW5kIGluc3RhbmNlIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuRmFpbGVkVG9TdGFydCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZWplY3RJc1JlYWR5UHJvbWlzZTogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9yZXNvbHZlSXNSZWFkeVByb21pc2U6IChtZWRpYUVsZW1lbnQ6IEhUTUxNZWRpYUVsZW1lbnQpID0+IHZvaWQ7XG5cbiAgICBwcml2YXRlIF9zdG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tZWRpYUVsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdG9wcGVkKTtcbiAgICAgICAgdGhpcy5fb25FbmRlZCgpO1xuICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=