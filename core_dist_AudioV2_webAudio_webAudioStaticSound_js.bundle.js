"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_webAudio_webAudioStaticSound_js"],{

/***/ "../core/dist/AudioV2/abstractAudio/staticSound.js":
/*!*********************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/staticSound.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticSound: () => (/* binding */ StaticSound)
/* harmony export */ });
/* harmony import */ var _abstractSound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractSound */ "../core/dist/AudioV2/abstractAudio/abstractSound.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class representing a static sound.
 *
 * A static sound has a sound buffer that is loaded into memory all at once. This allows it to have more capabilities
 * than a streaming sound, such as loop points and playback rate changes, but it also means that the sound must be
 * fully downloaded and decoded before it can be played, which may take a long time for sounds with long durations.
 *
 * To prevent downloading and decoding a sound multiple times, a sound's buffer can be shared with other sounds.
 * See {@link CreateSoundBufferAsync}, {@link StaticSoundBuffer} and {@link StaticSound.buffer} for more information.
 *
 * Static sounds are created by the {@link CreateSoundAsync} function.
 */
class StaticSound extends _abstractSound__WEBPACK_IMPORTED_MODULE_0__.AbstractSound {
    constructor(name, engine, options) {
        super(name, engine, options);
    }
    /**
     * The amount of time to play the sound for, in seconds. Defaults to `0`.
     * - If less than or equal to `0`, the sound plays for its full duration.
     */
    get duration() {
        return this._options.duration;
    }
    set duration(value) {
        this._options.duration = value;
    }
    /**
     * The start of the loop range, in seconds. Defaults to `0`.
     * - If less than or equal to `0`, the loop starts at the beginning of the sound.
     */
    get loopStart() {
        return this._options.loopStart;
    }
    set loopStart(value) {
        this._options.loopStart = value;
    }
    /**
     * The end of the loop range, in seconds. Defaults to `0`.
     * - If less than or equal to `0`, the loop plays for the sound's full duration.
     */
    get loopEnd() {
        return this._options.loopEnd;
    }
    set loopEnd(value) {
        this._options.loopEnd = value;
    }
    /**
     * The pitch of the sound, in cents. Defaults to `0`.
     * - Gets combined with {@link playbackRate} to determine the final pitch.
     */
    get pitch() {
        return this._options.pitch;
    }
    set pitch(value) {
        this._options.pitch = value;
        const it = this._instances.values();
        for (let instance = it.next(); !instance.done; instance = it.next()) {
            instance.value.pitch = value;
        }
    }
    /**
     * The playback rate of the sound. Defaults to `1`.
     * - Gets combined with {@link pitch} to determine the final playback rate.
     */
    get playbackRate() {
        return this._options.playbackRate;
    }
    set playbackRate(value) {
        this._options.playbackRate = value;
        const it = this._instances.values();
        for (let instance = it.next(); !instance.done; instance = it.next()) {
            instance.value.playbackRate = value;
        }
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
        options.duration ??= this.duration;
        options.loop ??= this.loop;
        options.loopStart ??= this.loopStart;
        options.loopEnd ??= this.loopEnd;
        options.startOffset ??= this.startOffset;
        options.volume ??= 1;
        options.waitTime ??= 0;
        const instance = this._createInstance();
        this._beforePlay(instance);
        instance.play(options);
        this._afterPlay(instance);
        this._stopExcessInstances();
    }
    /**
     * Stops the sound.
     * - Triggers `onEndedObservable` if the sound is playing.
     * @param options - The options to use when stopping the sound.
     */
    stop(options = {}) {
        if (options.waitTime && 0 < options.waitTime) {
            this._setState(0 /* SoundState.Stopping */);
        }
        else {
            this._setState(1 /* SoundState.Stopped */);
        }
        if (!this._instances) {
            return;
        }
        for (const instance of Array.from(this._instances)) {
            instance.stop(options);
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

/***/ "../core/dist/AudioV2/abstractAudio/staticSoundBuffer.js":
/*!***************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/staticSoundBuffer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticSoundBuffer: () => (/* binding */ StaticSoundBuffer)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

let StaticSoundBufferId = 1;
/**
 * Abstract class representing a static sound buffer.
 *
 * A static sound buffer is a fully downloaded and decoded array of audio data that is ready to be played.
 *
 * Static sound buffers can be reused multiple times by different {@link StaticSound} instances.
 *
 * Static sound buffers are created by the {@link CreateSoundBufferAsync} function.
 *
 * @see {@link StaticSound.buffer}
 */
class StaticSoundBuffer {
    constructor(engine) {
        /**
         * The name of the sound buffer.
         */
        this.name = `StaticSoundBuffer #${StaticSoundBufferId++}`;
        this.engine = engine;
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

/***/ "../core/dist/AudioV2/abstractAudio/staticSoundInstance.js":
/*!*****************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/staticSoundInstance.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StaticSoundInstance: () => (/* binding */ _StaticSoundInstance)
/* harmony export */ });
/* harmony import */ var _abstractSoundInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractSoundInstance */ "../core/dist/AudioV2/abstractAudio/abstractSoundInstance.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/** @internal */
class _StaticSoundInstance extends _abstractSoundInstance__WEBPACK_IMPORTED_MODULE_0__._AbstractSoundInstance {
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

/***/ "../core/dist/AudioV2/webAudio/webAudioStaticSound.js":
/*!************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioStaticSound.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioStaticSound: () => (/* binding */ _WebAudioStaticSound),
/* harmony export */   _WebAudioStaticSoundBuffer: () => (/* binding */ _WebAudioStaticSoundBuffer)
/* harmony export */ });
/* harmony import */ var _abstractAudio_staticSound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudio/staticSound */ "../core/dist/AudioV2/abstractAudio/staticSound.js");
/* harmony import */ var _abstractAudio_staticSoundBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractAudio/staticSoundBuffer */ "../core/dist/AudioV2/abstractAudio/staticSoundBuffer.js");
/* harmony import */ var _abstractAudio_staticSoundInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractAudio/staticSoundInstance */ "../core/dist/AudioV2/abstractAudio/staticSoundInstance.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstractAudio/subProperties/stereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js");
/* harmony import */ var _audioUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audioUtils */ "../core/dist/AudioV2/audioUtils.js");
/* harmony import */ var _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/webAudioParameterComponent */ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js");
/* harmony import */ var _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subNodes/webAudioBusAndSoundSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js");
/* harmony import */ var _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subProperties/spatialWebAudio */ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










/** @internal */
class _WebAudioStaticSound extends _abstractAudio_staticSound__WEBPACK_IMPORTED_MODULE_0__.StaticSound {
    /** @internal */
    constructor(name, engine, options) {
        super(name, engine, options);
        this._stereo = null;
        this._options = {
            autoplay: options.autoplay ?? false,
            duration: options.duration ?? 0,
            loop: options.loop ?? false,
            loopEnd: options.loopEnd ?? 0,
            loopStart: options.loopStart ?? 0,
            maxInstances: options.maxInstances ?? Infinity,
            pitch: options.pitch ?? 0,
            playbackRate: options.playbackRate ?? 1,
            startOffset: options.startOffset ?? 0,
        };
        this._subGraph = new _WebAudioStaticSound._SubGraph(this);
    }
    /** @internal */
    async _initAsync(source, options) {
        this._audioContext = this.engine._audioContext;
        if (source instanceof _WebAudioStaticSoundBuffer) {
            this._buffer = source;
        }
        else if (typeof source === "string" || Array.isArray(source) || source instanceof ArrayBuffer || source instanceof AudioBuffer) {
            this._buffer = (await this.engine.createSoundBufferAsync(source, options));
        }
        if (options.outBus) {
            this.outBus = options.outBus;
        }
        else if (options.outBusAutoDefault !== false) {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0,_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_3__._HasSpatialAudioOptions)(options)) {
            this._initSpatialProperty();
        }
        if (options.autoplay) {
            this.play();
        }
        this.engine._addSound(this);
    }
    /** @internal */
    get buffer() {
        return this._buffer;
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
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_4__._StereoAudio(this._subGraph));
    }
    /** @internal */
    async cloneAsync(options = null) {
        const clone = await this.engine.createSoundAsync(this.name, options?.cloneBuffer ? this.buffer.clone() : this.buffer, this._options);
        clone.outBus = options?.outBus ? options.outBus : this.outBus;
        return clone;
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
        return "_WebAudioStaticSound";
    }
    _createInstance() {
        return new _WebAudioStaticSoundInstance(this, this._options);
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
_WebAudioStaticSound._SubGraph = class extends _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_7__._WebAudioBusAndSoundSubGraph {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
};
/** @internal */
class _WebAudioStaticSoundBuffer extends _abstractAudio_staticSoundBuffer__WEBPACK_IMPORTED_MODULE_1__.StaticSoundBuffer {
    /** @internal */
    constructor(engine) {
        super(engine);
    }
    async _initAsync(source, options) {
        if (source instanceof AudioBuffer) {
            this._audioBuffer = source;
        }
        else if (typeof source === "string") {
            await this._initFromUrlAsync(source);
        }
        else if (Array.isArray(source)) {
            await this._initFromUrlsAsync(source, options.skipCodecCheck ?? false);
        }
        else if (source instanceof ArrayBuffer) {
            await this._initFromArrayBufferAsync(source);
        }
    }
    /** @internal */
    get channelCount() {
        return this._audioBuffer.numberOfChannels;
    }
    /** @internal */
    get duration() {
        return this._audioBuffer.duration;
    }
    /** @internal */
    get length() {
        return this._audioBuffer.length;
    }
    /** @internal */
    get sampleRate() {
        return this._audioBuffer.sampleRate;
    }
    /** @internal */
    clone(options = null) {
        const audioBuffer = new AudioBuffer({
            length: this._audioBuffer.length,
            numberOfChannels: this._audioBuffer.numberOfChannels,
            sampleRate: this._audioBuffer.sampleRate,
        });
        for (let i = 0; i < this._audioBuffer.numberOfChannels; i++) {
            audioBuffer.copyToChannel(this._audioBuffer.getChannelData(i), i);
        }
        const buffer = new _WebAudioStaticSoundBuffer(this.engine);
        buffer._audioBuffer = audioBuffer;
        buffer.name = options?.name ? options.name : this.name;
        return buffer;
    }
    async _initFromArrayBufferAsync(arrayBuffer) {
        this._audioBuffer = await this.engine._audioContext.decodeAudioData(arrayBuffer);
    }
    async _initFromUrlAsync(url) {
        url = (0,_audioUtils__WEBPACK_IMPORTED_MODULE_5__._CleanUrl)(url);
        await this._initFromArrayBufferAsync(await (await fetch(url)).arrayBuffer());
    }
    async _initFromUrlsAsync(urls, skipCodecCheck) {
        for (const url of urls) {
            if (skipCodecCheck) {
                // eslint-disable-next-line no-await-in-loop
                await this._initFromUrlAsync(url);
            }
            else {
                const matches = url.match(_audioUtils__WEBPACK_IMPORTED_MODULE_5__._FileExtensionRegex);
                const format = matches?.at(1);
                if (format && this.engine.isFormatValid(format)) {
                    try {
                        // eslint-disable-next-line no-await-in-loop
                        await this._initFromUrlAsync(url);
                    }
                    catch {
                        if (format && 0 < format.length) {
                            this.engine.flagInvalidFormat(format);
                        }
                    }
                }
            }
            if (this._audioBuffer) {
                break;
            }
        }
    }
}
/** @internal */
class _WebAudioStaticSoundInstance extends _abstractAudio_staticSoundInstance__WEBPACK_IMPORTED_MODULE_2__._StaticSoundInstance {
    constructor(sound, options) {
        super(sound);
        this._enginePlayTime = 0;
        this._enginePauseTime = 0;
        this._isConnected = false;
        this._pitch = null;
        this._playbackRate = null;
        this._sourceNode = null;
        this._onEnded = () => {
            this._enginePlayTime = 0;
            if (this._state !== 5 /* SoundState.Paused */) {
                this.onEndedObservable.notifyObservers(this);
            }
            this._deinitSourceNode();
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
        this._options = options;
        this._volumeNode = new GainNode(sound._audioContext);
        this._initSourceNode();
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._pitch?.dispose();
        this._playbackRate?.dispose();
        this._sourceNode = null;
        this.stop();
        this._deinitSourceNode();
        this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
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
            // Stop source node without sending `onEndedObservable` so instance's `dispose` function is not called.
            const sourceNode = this._sourceNode;
            this._deinitSourceNode();
            sourceNode?.stop();
            this._state = 1 /* SoundState.Stopped */;
        }
        if (this.state === 5 /* SoundState.Paused */) {
            this._enginePauseTime = 0;
        }
        this._options.startOffset = value;
        if (restart) {
            this.play();
        }
    }
    get _outNode() {
        return this._volumeNode;
    }
    /** @internal */
    set pitch(value) {
        this._pitch?.setTargetValue(value);
    }
    /** @internal */
    set playbackRate(value) {
        this._playbackRate?.setTargetValue(value);
    }
    /** @internal */
    get startTime() {
        if (this._state === 1 /* SoundState.Stopped */) {
            return 0;
        }
        return this._enginePlayTime;
    }
    /** @internal */
    getClassName() {
        return "_WebAudioStaticSoundInstance";
    }
    /** @internal */
    play(options = {}) {
        if (this._state === 3 /* SoundState.Started */) {
            return;
        }
        if (options.duration !== undefined) {
            this._options.duration = options.duration;
        }
        if (options.loop !== undefined) {
            this._options.loop = options.loop;
        }
        if (options.loopStart !== undefined) {
            this._options.loopStart = options.loopStart;
        }
        if (options.loopEnd !== undefined) {
            this._options.loopEnd = options.loopEnd;
        }
        if (options.startOffset !== undefined) {
            this._options.startOffset = options.startOffset;
        }
        let startOffset = this._options.startOffset;
        if (this._state === 5 /* SoundState.Paused */) {
            startOffset += this._enginePauseTime;
            startOffset %= this._sound.buffer.duration;
        }
        this._enginePlayTime = this.engine.currentTime + (options.waitTime ?? 0);
        this._volumeNode.gain.value = options.volume ?? 1;
        this._initSourceNode();
        if (this.engine.state === "running") {
            this._setState(3 /* SoundState.Started */);
            this._sourceNode?.start(this._enginePlayTime, startOffset, this._options.duration > 0 ? this._options.duration : undefined);
        }
        else if (this._options.loop) {
            this._setState(2 /* SoundState.Starting */);
            this.engine.stateChangedObservable.add(this._onEngineStateChanged);
        }
    }
    /** @internal */
    pause() {
        if (this._state === 5 /* SoundState.Paused */) {
            return;
        }
        this._setState(5 /* SoundState.Paused */);
        this._enginePauseTime += this.engine.currentTime - this._enginePlayTime;
        if (this._state === 3 /* SoundState.Started */) {
            this._sourceNode?.stop();
        }
        else {
            this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        }
        this._deinitSourceNode();
    }
    /** @internal */
    resume() {
        if (this._state === 5 /* SoundState.Paused */) {
            this.play();
        }
    }
    /** @internal */
    stop(options = {}) {
        if (this._state === 1 /* SoundState.Stopped */) {
            return;
        }
        if (this._state === 3 /* SoundState.Started */) {
            const engineStopTime = this.engine.currentTime + (options.waitTime ?? 0);
            this._sourceNode?.stop(engineStopTime);
        }
        if (options.waitTime === undefined || options.waitTime <= 0) {
            this._setState(1 /* SoundState.Stopped */);
            this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        }
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the sound's subgraph.
        if (node instanceof _WebAudioStaticSound && node._inNode) {
            this._outNode?.connect(node._inNode);
            this._isConnected = true;
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node instanceof _WebAudioStaticSound && node._inNode) {
            this._outNode?.disconnect(node._inNode);
            this._isConnected = false;
        }
        return true;
    }
    _deinitSourceNode() {
        if (!this._sourceNode) {
            return;
        }
        if (this._isConnected && !this._disconnect(this._sound)) {
            throw new Error("Disconnect failed");
        }
        this._sourceNode.disconnect(this._volumeNode);
        this._sourceNode.removeEventListener("ended", this._onEnded);
        this._sourceNode = null;
    }
    _initSourceNode() {
        if (!this._sourceNode) {
            this._sourceNode = new AudioBufferSourceNode(this._sound._audioContext, { buffer: this._sound.buffer._audioBuffer });
            this._sourceNode.addEventListener("ended", this._onEnded, { once: true });
            this._sourceNode.connect(this._volumeNode);
            if (!this._connect(this._sound)) {
                throw new Error("Connect failed");
            }
            this._pitch = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_6__._WebAudioParameterComponent(this.engine, this._sourceNode.detune);
            this._playbackRate = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_6__._WebAudioParameterComponent(this.engine, this._sourceNode.playbackRate);
        }
        const node = this._sourceNode;
        node.detune.value = this._sound.pitch;
        node.loop = this._options.loop;
        node.loopEnd = this._options.loopEnd;
        node.loopStart = this._options.loopStart;
        node.playbackRate.value = this._sound.playbackRate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9TdGF0aWNTb3VuZF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQTBGQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBO0FBeUJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQVdBO0FBTEE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBU0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbU5BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWpRQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEJ1ZmZlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEluc3RhbmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb1N0YXRpY1NvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vc291bmRTdGF0ZVwiO1xuaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RTb3VuZE9wdGlvbnMsIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnMsIElBYnN0cmFjdFNvdW5kU3RvcmVkT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRcIjtcbmltcG9ydCB7IEFic3RyYWN0U291bmQgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IFByaW1hcnlBdWRpb0J1cyB9IGZyb20gXCIuL2F1ZGlvQnVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnMsIFN0YXRpY1NvdW5kQnVmZmVyIH0gZnJvbSBcIi4vc3RhdGljU291bmRCdWZmZXJcIjtcbmltcG9ydCB0eXBlIHsgX1N0YXRpY1NvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi9zdGF0aWNTb3VuZEluc3RhbmNlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kT3B0aW9uc0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSB0byBwbGF5IHRoZSBzb3VuZCBmb3IsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIElmIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgMGAsIHRoZSBzb3VuZCBwbGF5cyBmb3IgaXRzIGZ1bGwgZHVyYXRpb24uXG4gICAgICovXG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgZW5kIG9mIHRoZSBsb29wIHJhbmdlIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIElmIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgMGAsIHRoZSBsb29wIHBsYXlzIGZvciB0aGUgc291bmQncyBmdWxsIGR1cmF0aW9uLlxuICAgICAqIC0gSGFzIG5vIGVmZmVjdCBpZiB7QGxpbmsgbG9vcH0gaXMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBsb29wRW5kOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHN0YXJ0IG9mIHRoZSBsb29wIHJhbmdlIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIElmIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgMGAsIHRoZSBsb29wIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzb3VuZC5cbiAgICAgKiAtIEhhcyBubyBlZmZlY3QgaWYge0BsaW5rIGxvb3B9IGlzIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKi9cbiAgICBsb29wU3RhcnQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIHN0b3JlZCBpbiBhIHN0YXRpYyBzb3VuZC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZFN0b3JlZE9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZFN0b3JlZE9wdGlvbnMsIElTdGF0aWNTb3VuZE9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcGl0Y2ggb2YgdGhlIHNvdW5kLCBpbiBjZW50cy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gQ2FuIGJlIGNvbWJpbmVkIHdpdGgge0BsaW5rIHBsYXliYWNrUmF0ZX0uXG4gICAgICovXG4gICAgcGl0Y2g6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGxheWJhY2sgcmF0ZSBvZiB0aGUgc291bmQuIERlZmF1bHRzIHRvIGAxYC5cbiAgICAgKiAtIENhbiBiZSBjb21iaW5lZCB3aXRoIHtAbGluayBwaXRjaH0uXG4gICAgICovXG4gICAgcGxheWJhY2tSYXRlOiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzdGF0aWMgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kT3B0aW9ucywgSVN0YXRpY1NvdW5kQnVmZmVyT3B0aW9ucywgSVN0YXRpY1NvdW5kU3RvcmVkT3B0aW9ucyB7fVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHBsYXlpbmcgYSBzdGF0aWMgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kUGxheU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zLCBJU3RhdGljU291bmRPcHRpb25zQmFzZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdG8gd2FpdCBiZWZvcmUgcGxheWluZyB0aGUgc291bmQsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICB3YWl0VGltZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHN0b3BwaW5nIGEgc3RhdGljIHNvdW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZFN0b3BPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0byB3YWl0IGJlZm9yZSBzdG9wcGluZyB0aGUgc291bmQsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKi9cbiAgICB3YWl0VGltZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNsb25pbmcgYSBzdGF0aWMgc291bmQuXG4gKiAtIEBzZWUge0BsaW5rIFN0YXRpY1NvdW5kLmNsb25lfS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRDbG9uZU9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gY2xvbmUgdGhlIHNvdW5kIGJ1ZmZlciB3aGVuIGNsb25pbmcgdGhlIHNvdW5kLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqIC0gSWYgYHRydWVgLCB0aGUgb3JpZ2luYWwgc291bmQncyBidWZmZXIgaXMgY2xvbmVkLCBhbmQgdGhlIGNsb25lZCBzb3VuZCB3aWxsIHVzZSBpdHMgb3duIGNvcHkuXG4gICAgICogLSBJZiBgZmFsc2VgLCB0aGUgc291bmQgYnVmZmVyIGlzIHNoYXJlZCB3aXRoIHRoZSBvcmlnaW5hbCBzb3VuZC5cbiAgICAgKi9cbiAgICBjbG9uZUJ1ZmZlcjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvdXRwdXQgYnVzIGZvciB0aGUgY2xvbmVkIHNvdW5kLiBEZWZhdWx0cyB0byBgbnVsbGAuXG4gICAgICogLSBJZiBub3Qgc2V0IG9yIGBudWxsYCwgdGhlIGNsb25lZCBzb3VuZCB1c2VzIHRoZSBvcmlnaW5hbCBzb3VuZCdzIGBvdXRCdXNgLlxuICAgICAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIuZGVmYXVsdE1haW5CdXN9XG4gICAgICovXG4gICAgb3V0QnVzOiBOdWxsYWJsZTxQcmltYXJ5QXVkaW9CdXM+O1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzb3VuZC5cbiAqXG4gKiBBIHN0YXRpYyBzb3VuZCBoYXMgYSBzb3VuZCBidWZmZXIgdGhhdCBpcyBsb2FkZWQgaW50byBtZW1vcnkgYWxsIGF0IG9uY2UuIFRoaXMgYWxsb3dzIGl0IHRvIGhhdmUgbW9yZSBjYXBhYmlsaXRpZXNcbiAqIHRoYW4gYSBzdHJlYW1pbmcgc291bmQsIHN1Y2ggYXMgbG9vcCBwb2ludHMgYW5kIHBsYXliYWNrIHJhdGUgY2hhbmdlcywgYnV0IGl0IGFsc28gbWVhbnMgdGhhdCB0aGUgc291bmQgbXVzdCBiZVxuICogZnVsbHkgZG93bmxvYWRlZCBhbmQgZGVjb2RlZCBiZWZvcmUgaXQgY2FuIGJlIHBsYXllZCwgd2hpY2ggbWF5IHRha2UgYSBsb25nIHRpbWUgZm9yIHNvdW5kcyB3aXRoIGxvbmcgZHVyYXRpb25zLlxuICpcbiAqIFRvIHByZXZlbnQgZG93bmxvYWRpbmcgYW5kIGRlY29kaW5nIGEgc291bmQgbXVsdGlwbGUgdGltZXMsIGEgc291bmQncyBidWZmZXIgY2FuIGJlIHNoYXJlZCB3aXRoIG90aGVyIHNvdW5kcy5cbiAqIFNlZSB7QGxpbmsgQ3JlYXRlU291bmRCdWZmZXJBc3luY30sIHtAbGluayBTdGF0aWNTb3VuZEJ1ZmZlcn0gYW5kIHtAbGluayBTdGF0aWNTb3VuZC5idWZmZXJ9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIFN0YXRpYyBzb3VuZHMgYXJlIGNyZWF0ZWQgYnkgdGhlIHtAbGluayBDcmVhdGVTb3VuZEFzeW5jfSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXRpY1NvdW5kIGV4dGVuZHMgQWJzdHJhY3RTb3VuZCB7XG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9pbnN0YW5jZXM6IFNldDxfU3RhdGljU291bmRJbnN0YW5jZT47XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RhdGljU291bmRTdG9yZWRPcHRpb25zO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNvdW5kIGJ1ZmZlciB0aGF0IHRoZSBzb3VuZCB1c2VzLlxuICAgICAqXG4gICAgICogVGhpcyBidWZmZXIgY2FuIGJlIHNoYXJlZCB3aXRoIG90aGVyIHN0YXRpYyBzb3VuZHMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGJ1ZmZlcjogU3RhdGljU291bmRCdWZmZXI7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIsIG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz4pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gcGxheSB0aGUgc291bmQgZm9yLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBJZiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDBgLCB0aGUgc291bmQgcGxheXMgZm9yIGl0cyBmdWxsIGR1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZHVyYXRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhcnQgb2YgdGhlIGxvb3AgcmFuZ2UsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIElmIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgMGAsIHRoZSBsb29wIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxvb3BTdGFydCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb29wU3RhcnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsb29wU3RhcnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3BTdGFydCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmQgb2YgdGhlIGxvb3AgcmFuZ2UsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIElmIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgMGAsIHRoZSBsb29wIHBsYXlzIGZvciB0aGUgc291bmQncyBmdWxsIGR1cmF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbG9vcEVuZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb29wRW5kO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbG9vcEVuZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMubG9vcEVuZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBwaXRjaCBvZiB0aGUgc291bmQsIGluIGNlbnRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBHZXRzIGNvbWJpbmVkIHdpdGgge0BsaW5rIHBsYXliYWNrUmF0ZX0gdG8gZGV0ZXJtaW5lIHRoZSBmaW5hbCBwaXRjaC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBpdGNoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnBpdGNoO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGl0Y2godmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLnBpdGNoID0gdmFsdWU7XG5cbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pbnN0YW5jZXMudmFsdWVzKCk7XG4gICAgICAgIGZvciAobGV0IGluc3RhbmNlID0gaXQubmV4dCgpOyAhaW5zdGFuY2UuZG9uZTsgaW5zdGFuY2UgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnZhbHVlLnBpdGNoID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxheWJhY2sgcmF0ZSBvZiB0aGUgc291bmQuIERlZmF1bHRzIHRvIGAxYC5cbiAgICAgKiAtIEdldHMgY29tYmluZWQgd2l0aCB7QGxpbmsgcGl0Y2h9IHRvIGRldGVybWluZSB0aGUgZmluYWwgcGxheWJhY2sgcmF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBsYXliYWNrUmF0ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5wbGF5YmFja1JhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwbGF5YmFja1JhdGUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5faW5zdGFuY2VzLnZhbHVlcygpO1xuICAgICAgICBmb3IgKGxldCBpbnN0YW5jZSA9IGl0Lm5leHQoKTsgIWluc3RhbmNlLmRvbmU7IGluc3RhbmNlID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS52YWx1ZS5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lcyB0aGUgc291bmQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgY2xvbmluZyB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNsb25lQXN5bmMob3B0aW9ucz86IFBhcnRpYWw8SVN0YXRpY1NvdW5kQ2xvbmVPcHRpb25zPik6IFByb21pc2U8U3RhdGljU291bmQ+O1xuXG4gICAgLyoqXG4gICAgICogUGxheXMgdGhlIHNvdW5kLlxuICAgICAqIC0gVHJpZ2dlcnMgYG9uRW5kZWRPYnNlcnZhYmxlYCBpZiBwbGF5ZWQgZm9yIHRoZSBmdWxsIGR1cmF0aW9uIGFuZCB0aGUgYGxvb3BgIG9wdGlvbiBpcyBub3Qgc2V0LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIHBsYXlpbmcgdGhlIHNvdW5kLiBPcHRpb25zIHNldCBoZXJlIG92ZXJyaWRlIHRoZSBzb3VuZCdzIG9wdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIHBsYXkob3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRQbGF5T3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmR1cmF0aW9uID8/PSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICBvcHRpb25zLmxvb3AgPz89IHRoaXMubG9vcDtcbiAgICAgICAgb3B0aW9ucy5sb29wU3RhcnQgPz89IHRoaXMubG9vcFN0YXJ0O1xuICAgICAgICBvcHRpb25zLmxvb3BFbmQgPz89IHRoaXMubG9vcEVuZDtcbiAgICAgICAgb3B0aW9ucy5zdGFydE9mZnNldCA/Pz0gdGhpcy5zdGFydE9mZnNldDtcbiAgICAgICAgb3B0aW9ucy52b2x1bWUgPz89IDE7XG4gICAgICAgIG9wdGlvbnMud2FpdFRpbWUgPz89IDA7XG5cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9iZWZvcmVQbGF5KGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2UucGxheShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fYWZ0ZXJQbGF5KGluc3RhbmNlKTtcblxuICAgICAgICB0aGlzLl9zdG9wRXhjZXNzSW5zdGFuY2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIHNvdW5kLlxuICAgICAqIC0gVHJpZ2dlcnMgYG9uRW5kZWRPYnNlcnZhYmxlYCBpZiB0aGUgc291bmQgaXMgcGxheWluZy5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIHN0b3BwaW5nIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcChvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZFN0b3BPcHRpb25zPiA9IHt9KTogdm9pZCB7XG4gICAgICAgIGlmIChvcHRpb25zLndhaXRUaW1lICYmIDAgPCBvcHRpb25zLndhaXRUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlN0b3BwaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RvcHBlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBBcnJheS5mcm9tKHRoaXMuX2luc3RhbmNlcykpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnN0b3Aob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3ZlcnJpZGUgX2NyZWF0ZUluc3RhbmNlKCk6IF9TdGF0aWNTb3VuZEluc3RhbmNlO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4vYXVkaW9FbmdpbmVWMlwiO1xuXG5sZXQgU3RhdGljU291bmRCdWZmZXJJZCA9IDE7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzdGF0aWMgc291bmQgYnVmZmVyLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc2tpcCBjb2RlYyBjaGVja2luZyBiZWZvcmUgYXR0ZW1wdGluZyB0byBsb2FkIGVhY2ggc291cmNlIFVSTCB3aGVuIGBzb3VyY2VgIGlzIGEgc3RyaW5nIGFycmF5LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqIC0gSGFzIG5vIGVmZmVjdCBpZiB0aGUgc291bmQncyBzb3VyY2UgaXMgbm90IGEgc3RyaW5nIGFycmF5LlxuICAgICAqIEBzZWUge0BsaW5rIENyZWF0ZVNvdW5kQXN5bmN9IGBzb3VyY2VgIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBza2lwQ29kZWNDaGVjazogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBjbG9uaW5nIGEgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAqIC0gQHNlZSB7QGxpbmsgU3RhdGljU291bmRCdWZmZXIuY2xvbmV9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZEJ1ZmZlckNsb25lT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGNsb25lZCBzb3VuZCBidWZmZXIuIERlZmF1bHRzIHRvIGBTdGF0aWNTb3VuZEJ1ZmZlciAjJHtpZH1gLlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc291bmQgYnVmZmVyLlxuICpcbiAqIEEgc3RhdGljIHNvdW5kIGJ1ZmZlciBpcyBhIGZ1bGx5IGRvd25sb2FkZWQgYW5kIGRlY29kZWQgYXJyYXkgb2YgYXVkaW8gZGF0YSB0aGF0IGlzIHJlYWR5IHRvIGJlIHBsYXllZC5cbiAqXG4gKiBTdGF0aWMgc291bmQgYnVmZmVycyBjYW4gYmUgcmV1c2VkIG11bHRpcGxlIHRpbWVzIGJ5IGRpZmZlcmVudCB7QGxpbmsgU3RhdGljU291bmR9IGluc3RhbmNlcy5cbiAqXG4gKiBTdGF0aWMgc291bmQgYnVmZmVycyBhcmUgY3JlYXRlZCBieSB0aGUge0BsaW5rIENyZWF0ZVNvdW5kQnVmZmVyQXN5bmN9IGZ1bmN0aW9uLlxuICpcbiAqIEBzZWUge0BsaW5rIFN0YXRpY1NvdW5kLmJ1ZmZlcn1cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0YXRpY1NvdW5kQnVmZmVyIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZW5naW5lIHRoYXQgdGhlIHNvdW5kIGJ1ZmZlciBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBlbmdpbmU6IEF1ZGlvRW5naW5lVjI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgc291bmQgYnVmZmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBgU3RhdGljU291bmRCdWZmZXIgIyR7U3RhdGljU291bmRCdWZmZXJJZCsrfWA7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZW5naW5lOiBBdWRpb0VuZ2luZVYyKSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzYW1wbGUgcmF0ZSBvZiB0aGUgc291bmQgYnVmZmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBzYW1wbGVSYXRlOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBzb3VuZCBidWZmZXIsIGluIHNhbXBsZSBmcmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGxlbmd0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSBzb3VuZCBidWZmZXIsIGluIHNlY29uZHMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGR1cmF0aW9uOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNoYW5uZWxzIGluIHRoZSBzb3VuZCBidWZmZXIuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGNoYW5uZWxDb3VudDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQ2xvbmVzIHRoZSBzb3VuZCBidWZmZXIuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgY2xvbmluZyB0aGUgc291bmQgYnVmZmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjbG9uZShvcHRpb25zPzogUGFydGlhbDxJU3RhdGljU291bmRCdWZmZXJDbG9uZU9wdGlvbnM+KTogU3RhdGljU291bmRCdWZmZXI7XG59XG4iLCJpbXBvcnQgdHlwZSB7IElBYnN0cmFjdFNvdW5kSW5zdGFuY2VPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZE9wdGlvbnNCYXNlLCBJU3RhdGljU291bmRQbGF5T3B0aW9ucywgSVN0YXRpY1NvdW5kU3RvcE9wdGlvbnMgfSBmcm9tIFwiLi9zdGF0aWNTb3VuZFwiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc3RhdGljIHNvdW5kIGluc3RhbmNlLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kSW5zdGFuY2VPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRJbnN0YW5jZU9wdGlvbnMsIElTdGF0aWNTb3VuZE9wdGlvbnNCYXNlIHt9XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfU3RhdGljU291bmRJbnN0YW5jZSBleHRlbmRzIF9BYnN0cmFjdFNvdW5kSW5zdGFuY2Uge1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0YXRpY1NvdW5kSW5zdGFuY2VPcHRpb25zO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHBpdGNoOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IHBsYXliYWNrUmF0ZTogbnVtYmVyO1xuXG4gICAgcHVibGljIGFic3RyYWN0IG92ZXJyaWRlIHBsYXkob3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRQbGF5T3B0aW9ucz4pOiB2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBvdmVycmlkZSBzdG9wKG9wdGlvbnM/OiBQYXJ0aWFsPElTdGF0aWNTb3VuZFN0b3BPcHRpb25zPik6IHZvaWQ7XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSVN0YXRpY1NvdW5kQ2xvbmVPcHRpb25zLCBJU3RhdGljU291bmRPcHRpb25zLCBJU3RhdGljU291bmRQbGF5T3B0aW9ucywgSVN0YXRpY1NvdW5kU3RvcE9wdGlvbnMsIElTdGF0aWNTb3VuZFN0b3JlZE9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZFwiO1xuaW1wb3J0IHsgU3RhdGljU291bmQgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZFwiO1xuaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRCdWZmZXJDbG9uZU9wdGlvbnMsIElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEJ1ZmZlclwiO1xuaW1wb3J0IHsgU3RhdGljU291bmRCdWZmZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEJ1ZmZlclwiO1xuaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRJbnN0YW5jZU9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBfU3RhdGljU291bmRJbnN0YW5jZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB7IF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zLCB0eXBlIEFic3RyYWN0U3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX1N0ZXJlb0F1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHsgX0NsZWFuVXJsLCBfRmlsZUV4dGVuc2lvblJlZ2V4IH0gZnJvbSBcIi4uL2F1ZGlvVXRpbHNcIjtcbmltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vc291bmRTdGF0ZVwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB9IGZyb20gXCIuL3N1Yk5vZGVzL3dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NwYXRpYWxXZWJBdWRpbyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvc3BhdGlhbFdlYkF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuL3dlYkF1ZGlvRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSwgSVdlYkF1ZGlvT3V0Tm9kZSwgSVdlYkF1ZGlvU3VwZXJOb2RlIH0gZnJvbSBcIi4vd2ViQXVkaW9Ob2RlXCI7XG5cbnR5cGUgU3RhdGljU291bmRTb3VyY2VUeXBlID0gQXJyYXlCdWZmZXIgfCBBdWRpb0J1ZmZlciB8IFN0YXRpY1NvdW5kQnVmZmVyIHwgc3RyaW5nIHwgc3RyaW5nW107XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9TdGF0aWNTb3VuZCBleHRlbmRzIFN0YXRpY1NvdW5kIGltcGxlbWVudHMgSVdlYkF1ZGlvU3VwZXJOb2RlIHtcbiAgICBwcml2YXRlIF9idWZmZXI6IF9XZWJBdWRpb1N0YXRpY1NvdW5kQnVmZmVyO1xuICAgIHByaXZhdGUgX3N0ZXJlbzogTnVsbGFibGU8X1N0ZXJlb0F1ZGlvPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgX29wdGlvbnM6IElTdGF0aWNTb3VuZFN0b3JlZE9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIF9zdWJHcmFwaDogX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0IHwgT2ZmbGluZUF1ZGlvQ29udGV4dDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUsIG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz4pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0b3BsYXk6IG9wdGlvbnMuYXV0b3BsYXkgPz8gZmFsc2UsXG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbiA/PyAwLFxuICAgICAgICAgICAgbG9vcDogb3B0aW9ucy5sb29wID8/IGZhbHNlLFxuICAgICAgICAgICAgbG9vcEVuZDogb3B0aW9ucy5sb29wRW5kID8/IDAsXG4gICAgICAgICAgICBsb29wU3RhcnQ6IG9wdGlvbnMubG9vcFN0YXJ0ID8/IDAsXG4gICAgICAgICAgICBtYXhJbnN0YW5jZXM6IG9wdGlvbnMubWF4SW5zdGFuY2VzID8/IEluZmluaXR5LFxuICAgICAgICAgICAgcGl0Y2g6IG9wdGlvbnMucGl0Y2ggPz8gMCxcbiAgICAgICAgICAgIHBsYXliYWNrUmF0ZTogb3B0aW9ucy5wbGF5YmFja1JhdGUgPz8gMSxcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiBvcHRpb25zLnN0YXJ0T2Zmc2V0ID8/IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGggPSBuZXcgX1dlYkF1ZGlvU3RhdGljU291bmQuX1N1YkdyYXBoKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2luaXRBc3luYyhzb3VyY2U6IFN0YXRpY1NvdW5kU291cmNlVHlwZSwgb3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSB0aGlzLmVuZ2luZS5fYXVkaW9Db250ZXh0O1xuXG4gICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZEJ1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gc291cmNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShzb3VyY2UpIHx8IHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHNvdXJjZSBpbnN0YW5jZW9mIEF1ZGlvQnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSAoYXdhaXQgdGhpcy5lbmdpbmUuY3JlYXRlU291bmRCdWZmZXJBc3luYyhzb3VyY2UsIG9wdGlvbnMpKSBhcyBfV2ViQXVkaW9TdGF0aWNTb3VuZEJ1ZmZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm91dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSBvcHRpb25zLm91dEJ1cztcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm91dEJ1c0F1dG9EZWZhdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbmdpbmUuaXNSZWFkeVByb21pc2U7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IHRoaXMuZW5naW5lLmRlZmF1bHRNYWluQnVzO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fc3ViR3JhcGguaW5pdEFzeW5jKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWxQcm9wZXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX2FkZFNvdW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGJ1ZmZlcigpOiBfV2ViQXVkaW9TdGF0aWNTb3VuZEJ1ZmZlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXI7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YkdyYXBoLl9pbk5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5fb3V0Tm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGdldCBzdGVyZW8oKTogX1N0ZXJlb0F1ZGlvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0ZXJlbyA/PyAodGhpcy5fc3RlcmVvID0gbmV3IF9TdGVyZW9BdWRpbyh0aGlzLl9zdWJHcmFwaCkpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgY2xvbmVBc3luYyhvcHRpb25zOiBOdWxsYWJsZTxQYXJ0aWFsPElTdGF0aWNTb3VuZENsb25lT3B0aW9ucz4+ID0gbnVsbCk6IFByb21pc2U8U3RhdGljU291bmQ+IHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBhd2FpdCB0aGlzLmVuZ2luZS5jcmVhdGVTb3VuZEFzeW5jKHRoaXMubmFtZSwgb3B0aW9ucz8uY2xvbmVCdWZmZXIgPyB0aGlzLmJ1ZmZlci5jbG9uZSgpIDogdGhpcy5idWZmZXIsIHRoaXMuX29wdGlvbnMpO1xuXG4gICAgICAgIGNsb25lLm91dEJ1cyA9IG9wdGlvbnM/Lm91dEJ1cyA/IG9wdGlvbnMub3V0QnVzIDogdGhpcy5vdXRCdXM7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3N0ZXJlbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGguZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVTb3VuZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9TdGF0aWNTb3VuZFwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoKTogX1dlYkF1ZGlvU3RhdGljU291bmRJbnN0YW5jZSB7XG4gICAgICAgIHJldHVybiBuZXcgX1dlYkF1ZGlvU3RhdGljU291bmRJbnN0YW5jZSh0aGlzLCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY3JlYXRlU3BhdGlhbFByb3BlcnR5KGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcik6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfU3BhdGlhbFdlYkF1ZGlvKHRoaXMuX3N1YkdyYXBoLCBhdXRvVXBkYXRlLCBtaW5VcGRhdGVUaW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX2dldE9wdGlvbnMoKTogSVN0YXRpY1NvdW5kU3RvcmVkT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9TdWJHcmFwaCA9IGNsYXNzIGV4dGVuZHMgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB7XG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb3duZXI6IF9XZWJBdWRpb1N0YXRpY1NvdW5kO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfdXBzdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX3Vwc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9TdGF0aWNTb3VuZEJ1ZmZlciBleHRlbmRzIFN0YXRpY1NvdW5kQnVmZmVyIHtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIF9hdWRpb0J1ZmZlcjogQXVkaW9CdWZmZXI7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSkge1xuICAgICAgICBzdXBlcihlbmdpbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBfaW5pdEFzeW5jKHNvdXJjZTogU3RhdGljU291bmRTb3VyY2VUeXBlLCBvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnM+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBdWRpb0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5fYXVkaW9CdWZmZXIgPSBzb3VyY2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdEZyb21VcmxBc3luYyhzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdEZyb21VcmxzQXN5bmMoc291cmNlLCBvcHRpb25zLnNraXBDb2RlY0NoZWNrID8/IGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdEZyb21BcnJheUJ1ZmZlckFzeW5jKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBjaGFubmVsQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQnVmZmVyLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9CdWZmZXIubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHNhbXBsZVJhdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQnVmZmVyLnNhbXBsZVJhdGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBjbG9uZShvcHRpb25zOiBOdWxsYWJsZTxQYXJ0aWFsPElTdGF0aWNTb3VuZEJ1ZmZlckNsb25lT3B0aW9ucz4+ID0gbnVsbCk6IFN0YXRpY1NvdW5kQnVmZmVyIHtcbiAgICAgICAgY29uc3QgYXVkaW9CdWZmZXIgPSBuZXcgQXVkaW9CdWZmZXIoe1xuICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLl9hdWRpb0J1ZmZlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1iZXJPZkNoYW5uZWxzOiB0aGlzLl9hdWRpb0J1ZmZlci5udW1iZXJPZkNoYW5uZWxzLFxuICAgICAgICAgICAgc2FtcGxlUmF0ZTogdGhpcy5fYXVkaW9CdWZmZXIuc2FtcGxlUmF0ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hdWRpb0J1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBpKyspIHtcbiAgICAgICAgICAgIGF1ZGlvQnVmZmVyLmNvcHlUb0NoYW5uZWwodGhpcy5fYXVkaW9CdWZmZXIuZ2V0Q2hhbm5lbERhdGEoaSksIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IF9XZWJBdWRpb1N0YXRpY1NvdW5kQnVmZmVyKHRoaXMuZW5naW5lKTtcbiAgICAgICAgYnVmZmVyLl9hdWRpb0J1ZmZlciA9IGF1ZGlvQnVmZmVyO1xuICAgICAgICBidWZmZXIubmFtZSA9IG9wdGlvbnM/Lm5hbWUgPyBvcHRpb25zLm5hbWUgOiB0aGlzLm5hbWU7XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9pbml0RnJvbUFycmF5QnVmZmVyQXN5bmMoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyID0gYXdhaXQgdGhpcy5lbmdpbmUuX2F1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2luaXRGcm9tVXJsQXN5bmModXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdXJsID0gX0NsZWFuVXJsKHVybCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2luaXRGcm9tQXJyYXlCdWZmZXJBc3luYyhhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkuYXJyYXlCdWZmZXIoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfaW5pdEZyb21VcmxzQXN5bmModXJsczogc3RyaW5nW10sIHNraXBDb2RlY0NoZWNrOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHMpIHtcbiAgICAgICAgICAgIGlmIChza2lwQ29kZWNDaGVjaykge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdEZyb21VcmxBc3luYyh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKF9GaWxlRXh0ZW5zaW9uUmVnZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IG1hdGNoZXM/LmF0KDEpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgJiYgdGhpcy5lbmdpbmUuaXNGb3JtYXRWYWxpZChmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdEZyb21VcmxBc3luYyh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgJiYgMCA8IGZvcm1hdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5mbGFnSW52YWxpZEZvcm1hdChmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fYXVkaW9CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuY2xhc3MgX1dlYkF1ZGlvU3RhdGljU291bmRJbnN0YW5jZSBleHRlbmRzIF9TdGF0aWNTb3VuZEluc3RhbmNlIGltcGxlbWVudHMgSVdlYkF1ZGlvT3V0Tm9kZSB7XG4gICAgcHJpdmF0ZSBfZW5naW5lUGxheVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfZW5naW5lUGF1c2VUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2lzQ29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfcGl0Y2g6IE51bGxhYmxlPF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudD4gPSBudWxsO1xuICAgIHByaXZhdGUgX3BsYXliYWNrUmF0ZTogTnVsbGFibGU8X1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc291cmNlTm9kZTogTnVsbGFibGU8QXVkaW9CdWZmZXJTb3VyY2VOb2RlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdm9sdW1lTm9kZTogR2Fpbk5vZGU7XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgX29wdGlvbnM6IElTdGF0aWNTb3VuZEluc3RhbmNlT3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX3NvdW5kOiBfV2ViQXVkaW9TdGF0aWNTb3VuZDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc291bmQ6IF9XZWJBdWRpb1N0YXRpY1NvdW5kLCBvcHRpb25zOiBJU3RhdGljU291bmRJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoc291bmQpO1xuXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMuX3ZvbHVtZU5vZGUgPSBuZXcgR2Fpbk5vZGUoc291bmQuX2F1ZGlvQ29udGV4dCk7XG4gICAgICAgIHRoaXMuX2luaXRTb3VyY2VOb2RlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fcGl0Y2g/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fcGxheWJhY2tSYXRlPy5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fc291cmNlTm9kZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5fZGVpbml0U291cmNlTm9kZSgpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25FbmdpbmVTdGF0ZUNoYW5nZWQpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RTdGFydCA9IHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCA/IDAgOiB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSAtIHRoaXMuX2VuZ2luZVBsYXlUaW1lO1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5naW5lUGF1c2VUaW1lICsgdGltZVNpbmNlTGFzdFN0YXJ0ICsgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdGFydCA9IHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0aW5nIHx8IHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQ7XG5cbiAgICAgICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgICAgICAgIC8vIFN0b3Agc291cmNlIG5vZGUgd2l0aG91dCBzZW5kaW5nIGBvbkVuZGVkT2JzZXJ2YWJsZWAgc28gaW5zdGFuY2UncyBgZGlzcG9zZWAgZnVuY3Rpb24gaXMgbm90IGNhbGxlZC5cbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZU5vZGUgPSB0aGlzLl9zb3VyY2VOb2RlO1xuICAgICAgICAgICAgdGhpcy5fZGVpbml0U291cmNlTm9kZSgpO1xuICAgICAgICAgICAgc291cmNlTm9kZT8uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBTb3VuZFN0YXRlLlN0b3BwZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuZ2luZVBhdXNlVGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBfb3V0Tm9kZSgpOiBOdWxsYWJsZTxBdWRpb05vZGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZU5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXQgcGl0Y2godmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9waXRjaD8uc2V0VGFyZ2V0VmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0IHBsYXliYWNrUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BsYXliYWNrUmF0ZT8uc2V0VGFyZ2V0VmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXJ0VGltZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZW5naW5lUGxheVRpbWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiX1dlYkF1ZGlvU3RhdGljU291bmRJbnN0YW5jZVwiO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcGxheShvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZFBsYXlPcHRpb25zPiA9IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5sb29wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMubG9vcCA9IG9wdGlvbnMubG9vcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5sb29wU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wU3RhcnQgPSBvcHRpb25zLmxvb3BTdGFydDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5sb29wRW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMubG9vcEVuZCA9IG9wdGlvbnMubG9vcEVuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdGFydE9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0ID0gb3B0aW9ucy5zdGFydE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdGFydE9mZnNldCA9IHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgc3RhcnRPZmZzZXQgKz0gdGhpcy5fZW5naW5lUGF1c2VUaW1lO1xuICAgICAgICAgICAgc3RhcnRPZmZzZXQgJT0gdGhpcy5fc291bmQuYnVmZmVyLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5naW5lUGxheVRpbWUgPSB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSArIChvcHRpb25zLndhaXRUaW1lID8/IDApO1xuXG4gICAgICAgIHRoaXMuX3ZvbHVtZU5vZGUuZ2Fpbi52YWx1ZSA9IG9wdGlvbnMudm9sdW1lID8/IDE7XG5cbiAgICAgICAgdGhpcy5faW5pdFNvdXJjZU5vZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlN0YXJ0ZWQpO1xuICAgICAgICAgICAgdGhpcy5fc291cmNlTm9kZT8uc3RhcnQodGhpcy5fZW5naW5lUGxheVRpbWUsIHN0YXJ0T2Zmc2V0LCB0aGlzLl9vcHRpb25zLmR1cmF0aW9uID4gMCA/IHRoaXMuX29wdGlvbnMuZHVyYXRpb24gOiB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdGFydGluZyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlBhdXNlZCk7XG4gICAgICAgIHRoaXMuX2VuZ2luZVBhdXNlVGltZSArPSB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSAtIHRoaXMuX2VuZ2luZVBsYXlUaW1lO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VOb2RlPy5zdG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlaW5pdFNvdXJjZU5vZGUoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHN0b3Aob3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRTdG9wT3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZ2luZVN0b3BUaW1lID0gdGhpcy5lbmdpbmUuY3VycmVudFRpbWUgKyAob3B0aW9ucy53YWl0VGltZSA/PyAwKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZU5vZGU/LnN0b3AoZW5naW5lU3RvcFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2FpdFRpbWUgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLndhaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RvcHBlZCk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY29ubmVjdChub2RlOiBBYnN0cmFjdEF1ZGlvTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBzdXBlci5fY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHdyYXBwZWQgbm9kZSBpcyBub3QgYXZhaWxhYmxlIG5vdywgaXQgd2lsbCBiZSBjb25uZWN0ZWQgbGF0ZXIgYnkgdGhlIHNvdW5kJ3Mgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmQgJiYgbm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgICAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogQWJzdHJhY3RBdWRpb05vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmQgJiYgbm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgICAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9vbkVuZGVkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbmdpbmVQbGF5VGltZSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWluaXRTb3VyY2VOb2RlKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX2RlaW5pdFNvdXJjZU5vZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fc291cmNlTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ29ubmVjdGVkICYmICF0aGlzLl9kaXNjb25uZWN0KHRoaXMuX3NvdW5kKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmRpc2Nvbm5lY3QodGhpcy5fdm9sdW1lTm9kZSk7XG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kZWQpO1xuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTb3VyY2VOb2RlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3NvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBuZXcgQXVkaW9CdWZmZXJTb3VyY2VOb2RlKHRoaXMuX3NvdW5kLl9hdWRpb0NvbnRleHQsIHsgYnVmZmVyOiB0aGlzLl9zb3VuZC5idWZmZXIuX2F1ZGlvQnVmZmVyIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLl9vbkVuZGVkLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmNvbm5lY3QodGhpcy5fdm9sdW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdCh0aGlzLl9zb3VuZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcGl0Y2ggPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KHRoaXMuZW5naW5lLCB0aGlzLl9zb3VyY2VOb2RlLmRldHVuZSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KHRoaXMuZW5naW5lLCB0aGlzLl9zb3VyY2VOb2RlLnBsYXliYWNrUmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fc291cmNlTm9kZTtcbiAgICAgICAgbm9kZS5kZXR1bmUudmFsdWUgPSB0aGlzLl9zb3VuZC5waXRjaDtcbiAgICAgICAgbm9kZS5sb29wID0gdGhpcy5fb3B0aW9ucy5sb29wO1xuICAgICAgICBub2RlLmxvb3BFbmQgPSB0aGlzLl9vcHRpb25zLmxvb3BFbmQ7XG4gICAgICAgIG5vZGUubG9vcFN0YXJ0ID0gdGhpcy5fb3B0aW9ucy5sb29wU3RhcnQ7XG4gICAgICAgIG5vZGUucGxheWJhY2tSYXRlLnZhbHVlID0gdGhpcy5fc291bmQucGxheWJhY2tSYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uRW5naW5lU3RhdGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3RhdGUgIT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5sb29wICYmIHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==