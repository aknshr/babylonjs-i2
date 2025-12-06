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
        this._sourceNode?.stop();
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
        const engineStopTime = this.engine.currentTime + (options.waitTime ?? 0);
        this._sourceNode?.stop(engineStopTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9TdGF0aWNTb3VuZF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQTBGQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBO0FBeUJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQVdBO0FBTEE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBU0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNE1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTFQQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRCdWZmZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRJbnN0YW5jZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vd2ViQXVkaW9TdGF0aWNTb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBTb3VuZFN0YXRlIH0gZnJvbSBcIi4uL3NvdW5kU3RhdGVcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0U291bmRPcHRpb25zLCBJQWJzdHJhY3RTb3VuZFBsYXlPcHRpb25zLCBJQWJzdHJhY3RTb3VuZFN0b3JlZE9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFNvdW5kIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZFwiO1xuaW1wb3J0IHR5cGUgeyBQcmltYXJ5QXVkaW9CdXMgfSBmcm9tIFwiLi9hdWRpb0J1c1wiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRCdWZmZXJPcHRpb25zLCBTdGF0aWNTb3VuZEJ1ZmZlciB9IGZyb20gXCIuL3N0YXRpY1NvdW5kQnVmZmVyXCI7XG5pbXBvcnQgdHlwZSB7IF9TdGF0aWNTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4vc3RhdGljU291bmRJbnN0YW5jZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZE9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gcGxheSB0aGUgc291bmQgZm9yLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBJZiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDBgLCB0aGUgc291bmQgcGxheXMgZm9yIGl0cyBmdWxsIGR1cmF0aW9uLlxuICAgICAqL1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGVuZCBvZiB0aGUgbG9vcCByYW5nZSBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBJZiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDBgLCB0aGUgbG9vcCBwbGF5cyBmb3IgdGhlIHNvdW5kJ3MgZnVsbCBkdXJhdGlvbi5cbiAgICAgKiAtIEhhcyBubyBlZmZlY3QgaWYge0BsaW5rIGxvb3B9IGlzIGBmYWxzZWAuXG4gICAgICovXG4gICAgbG9vcEVuZDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydCBvZiB0aGUgbG9vcCByYW5nZSBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBJZiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDBgLCB0aGUgbG9vcCBzdGFydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc291bmQuXG4gICAgICogLSBIYXMgbm8gZWZmZWN0IGlmIHtAbGluayBsb29wfSBpcyBgZmFsc2VgLlxuICAgICAqXG4gICAgICovXG4gICAgbG9vcFN0YXJ0OiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBzdG9yZWQgaW4gYSBzdGF0aWMgc291bmQuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRTdG9yZWRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRTdG9yZWRPcHRpb25zLCBJU3RhdGljU291bmRPcHRpb25zQmFzZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHBpdGNoIG9mIHRoZSBzb3VuZCwgaW4gY2VudHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIENhbiBiZSBjb21iaW5lZCB3aXRoIHtAbGluayBwbGF5YmFja1JhdGV9LlxuICAgICAqL1xuICAgIHBpdGNoOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHBsYXliYWNrIHJhdGUgb2YgdGhlIHNvdW5kLiBEZWZhdWx0cyB0byBgMWAuXG4gICAgICogLSBDYW4gYmUgY29tYmluZWQgd2l0aCB7QGxpbmsgcGl0Y2h9LlxuICAgICAqL1xuICAgIHBsYXliYWNrUmF0ZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc3RhdGljIHNvdW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZE9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZE9wdGlvbnMsIElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnMsIElTdGF0aWNTb3VuZFN0b3JlZE9wdGlvbnMge31cblxuLyoqXG4gKiBPcHRpb25zIGZvciBwbGF5aW5nIGEgc3RhdGljIHNvdW5kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZFBsYXlPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucywgSVN0YXRpY1NvdW5kT3B0aW9uc0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRvIHdhaXQgYmVmb3JlIHBsYXlpbmcgdGhlIHNvdW5kLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgd2FpdFRpbWU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBzdG9wcGluZyBhIHN0YXRpYyBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRTdG9wT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdG8gd2FpdCBiZWZvcmUgc3RvcHBpbmcgdGhlIHNvdW5kLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICovXG4gICAgd2FpdFRpbWU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBjbG9uaW5nIGEgc3RhdGljIHNvdW5kLlxuICogLSBAc2VlIHtAbGluayBTdGF0aWNTb3VuZC5jbG9uZX0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kQ2xvbmVPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGNsb25lIHRoZSBzb3VuZCBidWZmZXIgd2hlbiBjbG9uaW5nIHRoZSBzb3VuZC4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKiAtIElmIGB0cnVlYCwgdGhlIG9yaWdpbmFsIHNvdW5kJ3MgYnVmZmVyIGlzIGNsb25lZCwgYW5kIHRoZSBjbG9uZWQgc291bmQgd2lsbCB1c2UgaXRzIG93biBjb3B5LlxuICAgICAqIC0gSWYgYGZhbHNlYCwgdGhlIHNvdW5kIGJ1ZmZlciBpcyBzaGFyZWQgd2l0aCB0aGUgb3JpZ2luYWwgc291bmQuXG4gICAgICovXG4gICAgY2xvbmVCdWZmZXI6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGJ1cyBmb3IgdGhlIGNsb25lZCBzb3VuZC4gRGVmYXVsdHMgdG8gYG51bGxgLlxuICAgICAqIC0gSWYgbm90IHNldCBvciBgbnVsbGAsIHRoZSBjbG9uZWQgc291bmQgdXNlcyB0aGUgb3JpZ2luYWwgc291bmQncyBgb3V0QnVzYC5cbiAgICAgKiBAc2VlIHtAbGluayBBdWRpb0VuZ2luZVYyLmRlZmF1bHRNYWluQnVzfVxuICAgICAqL1xuICAgIG91dEJ1czogTnVsbGFibGU8UHJpbWFyeUF1ZGlvQnVzPjtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc291bmQuXG4gKlxuICogQSBzdGF0aWMgc291bmQgaGFzIGEgc291bmQgYnVmZmVyIHRoYXQgaXMgbG9hZGVkIGludG8gbWVtb3J5IGFsbCBhdCBvbmNlLiBUaGlzIGFsbG93cyBpdCB0byBoYXZlIG1vcmUgY2FwYWJpbGl0aWVzXG4gKiB0aGFuIGEgc3RyZWFtaW5nIHNvdW5kLCBzdWNoIGFzIGxvb3AgcG9pbnRzIGFuZCBwbGF5YmFjayByYXRlIGNoYW5nZXMsIGJ1dCBpdCBhbHNvIG1lYW5zIHRoYXQgdGhlIHNvdW5kIG11c3QgYmVcbiAqIGZ1bGx5IGRvd25sb2FkZWQgYW5kIGRlY29kZWQgYmVmb3JlIGl0IGNhbiBiZSBwbGF5ZWQsIHdoaWNoIG1heSB0YWtlIGEgbG9uZyB0aW1lIGZvciBzb3VuZHMgd2l0aCBsb25nIGR1cmF0aW9ucy5cbiAqXG4gKiBUbyBwcmV2ZW50IGRvd25sb2FkaW5nIGFuZCBkZWNvZGluZyBhIHNvdW5kIG11bHRpcGxlIHRpbWVzLCBhIHNvdW5kJ3MgYnVmZmVyIGNhbiBiZSBzaGFyZWQgd2l0aCBvdGhlciBzb3VuZHMuXG4gKiBTZWUge0BsaW5rIENyZWF0ZVNvdW5kQnVmZmVyQXN5bmN9LCB7QGxpbmsgU3RhdGljU291bmRCdWZmZXJ9IGFuZCB7QGxpbmsgU3RhdGljU291bmQuYnVmZmVyfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBTdGF0aWMgc291bmRzIGFyZSBjcmVhdGVkIGJ5IHRoZSB7QGxpbmsgQ3JlYXRlU291bmRBc3luY30gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdGF0aWNTb3VuZCBleHRlbmRzIEFic3RyYWN0U291bmQge1xuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfaW5zdGFuY2VzOiBTZXQ8X1N0YXRpY1NvdW5kSW5zdGFuY2U+O1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0YXRpY1NvdW5kU3RvcmVkT3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzb3VuZCBidWZmZXIgdGhhdCB0aGUgc291bmQgdXNlcy5cbiAgICAgKlxuICAgICAqIFRoaXMgYnVmZmVyIGNhbiBiZSBzaGFyZWQgd2l0aCBvdGhlciBzdGF0aWMgc291bmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBidWZmZXI6IFN0YXRpY1NvdW5kQnVmZmVyO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZE9wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiB0aW1lIHRvIHBsYXkgdGhlIHNvdW5kIGZvciwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gSWYgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGAwYCwgdGhlIHNvdW5kIHBsYXlzIGZvciBpdHMgZnVsbCBkdXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmR1cmF0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXJ0IG9mIHRoZSBsb29wIHJhbmdlLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBJZiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDBgLCB0aGUgbG9vcCBzdGFydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb29wU3RhcnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubG9vcFN0YXJ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbG9vcFN0YXJ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wU3RhcnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kIG9mIHRoZSBsb29wIHJhbmdlLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBJZiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYDBgLCB0aGUgbG9vcCBwbGF5cyBmb3IgdGhlIHNvdW5kJ3MgZnVsbCBkdXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGxvb3BFbmQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubG9vcEVuZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxvb3BFbmQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3BFbmQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGl0Y2ggb2YgdGhlIHNvdW5kLCBpbiBjZW50cy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gR2V0cyBjb21iaW5lZCB3aXRoIHtAbGluayBwbGF5YmFja1JhdGV9IHRvIGRldGVybWluZSB0aGUgZmluYWwgcGl0Y2guXG4gICAgICovXG4gICAgcHVibGljIGdldCBwaXRjaCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5waXRjaDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBpdGNoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5waXRjaCA9IHZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGl0ID0gdGhpcy5faW5zdGFuY2VzLnZhbHVlcygpO1xuICAgICAgICBmb3IgKGxldCBpbnN0YW5jZSA9IGl0Lm5leHQoKTsgIWluc3RhbmNlLmRvbmU7IGluc3RhbmNlID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS52YWx1ZS5waXRjaCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYXliYWNrIHJhdGUgb2YgdGhlIHNvdW5kLiBEZWZhdWx0cyB0byBgMWAuXG4gICAgICogLSBHZXRzIGNvbWJpbmVkIHdpdGgge0BsaW5rIHBpdGNofSB0byBkZXRlcm1pbmUgdGhlIGZpbmFsIHBsYXliYWNrIHJhdGUuXG4gICAgICovXG4gICAgcHVibGljIGdldCBwbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMucGxheWJhY2tSYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxheWJhY2tSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wbGF5YmFja1JhdGUgPSB2YWx1ZTtcblxuICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2luc3RhbmNlcy52YWx1ZXMoKTtcbiAgICAgICAgZm9yIChsZXQgaW5zdGFuY2UgPSBpdC5uZXh0KCk7ICFpbnN0YW5jZS5kb25lOyBpbnN0YW5jZSA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgaW5zdGFuY2UudmFsdWUucGxheWJhY2tSYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgdGhlIHNvdW5kLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGNsb25pbmcgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjbG9uZUFzeW5jKG9wdGlvbnM/OiBQYXJ0aWFsPElTdGF0aWNTb3VuZENsb25lT3B0aW9ucz4pOiBQcm9taXNlPFN0YXRpY1NvdW5kPjtcblxuICAgIC8qKlxuICAgICAqIFBsYXlzIHRoZSBzb3VuZC5cbiAgICAgKiAtIFRyaWdnZXJzIGBvbkVuZGVkT2JzZXJ2YWJsZWAgaWYgcGxheWVkIGZvciB0aGUgZnVsbCBkdXJhdGlvbiBhbmQgdGhlIGBsb29wYCBvcHRpb24gaXMgbm90IHNldC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBwbGF5aW5nIHRoZSBzb3VuZC4gT3B0aW9ucyBzZXQgaGVyZSBvdmVycmlkZSB0aGUgc291bmQncyBvcHRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5KG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kUGxheU9wdGlvbnM+ID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5kdXJhdGlvbiA/Pz0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgb3B0aW9ucy5sb29wID8/PSB0aGlzLmxvb3A7XG4gICAgICAgIG9wdGlvbnMubG9vcFN0YXJ0ID8/PSB0aGlzLmxvb3BTdGFydDtcbiAgICAgICAgb3B0aW9ucy5sb29wRW5kID8/PSB0aGlzLmxvb3BFbmQ7XG4gICAgICAgIG9wdGlvbnMuc3RhcnRPZmZzZXQgPz89IHRoaXMuc3RhcnRPZmZzZXQ7XG4gICAgICAgIG9wdGlvbnMudm9sdW1lID8/PSAxO1xuICAgICAgICBvcHRpb25zLndhaXRUaW1lID8/PSAwO1xuXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fYmVmb3JlUGxheShpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnBsYXkob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2FmdGVyUGxheShpbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5fc3RvcEV4Y2Vzc0luc3RhbmNlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBzb3VuZC5cbiAgICAgKiAtIFRyaWdnZXJzIGBvbkVuZGVkT2JzZXJ2YWJsZWAgaWYgdGhlIHNvdW5kIGlzIHBsYXlpbmcuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBzdG9wcGluZyB0aGUgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIHN0b3Aob3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRTdG9wT3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAob3B0aW9ucy53YWl0VGltZSAmJiAwIDwgb3B0aW9ucy53YWl0VGltZSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdG9wcGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlN0b3BwZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgQXJyYXkuZnJvbSh0aGlzLl9pbnN0YW5jZXMpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zdG9wKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG92ZXJyaWRlIF9jcmVhdGVJbnN0YW5jZSgpOiBfU3RhdGljU291bmRJbnN0YW5jZTtcbn1cbiIsImltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcblxubGV0IFN0YXRpY1NvdW5kQnVmZmVySWQgPSAxO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRCdWZmZXJPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHNraXAgY29kZWMgY2hlY2tpbmcgYmVmb3JlIGF0dGVtcHRpbmcgdG8gbG9hZCBlYWNoIHNvdXJjZSBVUkwgd2hlbiBgc291cmNlYCBpcyBhIHN0cmluZyBhcnJheS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKiAtIEhhcyBubyBlZmZlY3QgaWYgdGhlIHNvdW5kJ3Mgc291cmNlIGlzIG5vdCBhIHN0cmluZyBhcnJheS5cbiAgICAgKiBAc2VlIHtAbGluayBDcmVhdGVTb3VuZEFzeW5jfSBgc291cmNlYCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgc2tpcENvZGVjQ2hlY2s6IGJvb2xlYW47XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY2xvbmluZyBhIHN0YXRpYyBzb3VuZCBidWZmZXIuXG4gKiAtIEBzZWUge0BsaW5rIFN0YXRpY1NvdW5kQnVmZmVyLmNsb25lfS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRCdWZmZXJDbG9uZU9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjbG9uZWQgc291bmQgYnVmZmVyLiBEZWZhdWx0cyB0byBgU3RhdGljU291bmRCdWZmZXIgIyR7aWR9YC5cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAqXG4gKiBBIHN0YXRpYyBzb3VuZCBidWZmZXIgaXMgYSBmdWxseSBkb3dubG9hZGVkIGFuZCBkZWNvZGVkIGFycmF5IG9mIGF1ZGlvIGRhdGEgdGhhdCBpcyByZWFkeSB0byBiZSBwbGF5ZWQuXG4gKlxuICogU3RhdGljIHNvdW5kIGJ1ZmZlcnMgY2FuIGJlIHJldXNlZCBtdWx0aXBsZSB0aW1lcyBieSBkaWZmZXJlbnQge0BsaW5rIFN0YXRpY1NvdW5kfSBpbnN0YW5jZXMuXG4gKlxuICogU3RhdGljIHNvdW5kIGJ1ZmZlcnMgYXJlIGNyZWF0ZWQgYnkgdGhlIHtAbGluayBDcmVhdGVTb3VuZEJ1ZmZlckFzeW5jfSBmdW5jdGlvbi5cbiAqXG4gKiBAc2VlIHtAbGluayBTdGF0aWNTb3VuZC5idWZmZXJ9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdGF0aWNTb3VuZEJ1ZmZlciB7XG4gICAgLyoqXG4gICAgICogVGhlIGVuZ2luZSB0aGF0IHRoZSBzb3VuZCBidWZmZXIgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZW5naW5lOiBBdWRpb0VuZ2luZVYyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHNvdW5kIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gYFN0YXRpY1NvdW5kQnVmZmVyICMke1N0YXRpY1NvdW5kQnVmZmVySWQrK31gO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2FtcGxlIHJhdGUgb2YgdGhlIHNvdW5kIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgc2FtcGxlUmF0ZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxlbmd0aCBvZiB0aGUgc291bmQgYnVmZmVyLCBpbiBzYW1wbGUgZnJhbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBsZW5ndGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgc291bmQgYnVmZmVyLCBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBkdXJhdGlvbjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBjaGFubmVscyBpbiB0aGUgc291bmQgYnVmZmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBjaGFubmVsQ291bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENsb25lcyB0aGUgc291bmQgYnVmZmVyLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGNsb25pbmcgdGhlIHNvdW5kIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xvbmUob3B0aW9ucz86IFBhcnRpYWw8SVN0YXRpY1NvdW5kQnVmZmVyQ2xvbmVPcHRpb25zPik6IFN0YXRpY1NvdW5kQnVmZmVyO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBJQWJzdHJhY3RTb3VuZEluc3RhbmNlT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRJbnN0YW5jZVwiO1xuaW1wb3J0IHsgX0Fic3RyYWN0U291bmRJbnN0YW5jZSB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRJbnN0YW5jZVwiO1xuaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRPcHRpb25zQmFzZSwgSVN0YXRpY1NvdW5kUGxheU9wdGlvbnMsIElTdGF0aWNTb3VuZFN0b3BPcHRpb25zIH0gZnJvbSBcIi4vc3RhdGljU291bmRcIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHN0YXRpYyBzb3VuZCBpbnN0YW5jZS5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZEluc3RhbmNlT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kSW5zdGFuY2VPcHRpb25zLCBJU3RhdGljU291bmRPcHRpb25zQmFzZSB7fVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX1N0YXRpY1NvdW5kSW5zdGFuY2UgZXh0ZW5kcyBfQWJzdHJhY3RTb3VuZEluc3RhbmNlIHtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3ZlcnJpZGUgcmVhZG9ubHkgX29wdGlvbnM6IElTdGF0aWNTb3VuZEluc3RhbmNlT3B0aW9ucztcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBwaXRjaDogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwbGF5YmFja1JhdGU6IG51bWJlcjtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBvdmVycmlkZSBwbGF5KG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kUGxheU9wdGlvbnM+KTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb3ZlcnJpZGUgc3RvcChvcHRpb25zPzogUGFydGlhbDxJU3RhdGljU291bmRTdG9wT3B0aW9ucz4pOiB2b2lkO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvTm9kZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZENsb25lT3B0aW9ucywgSVN0YXRpY1NvdW5kT3B0aW9ucywgSVN0YXRpY1NvdW5kUGxheU9wdGlvbnMsIElTdGF0aWNTb3VuZFN0b3BPcHRpb25zLCBJU3RhdGljU291bmRTdG9yZWRPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRcIjtcbmltcG9ydCB7IFN0YXRpY1NvdW5kIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRcIjtcbmltcG9ydCB0eXBlIHsgSVN0YXRpY1NvdW5kQnVmZmVyQ2xvbmVPcHRpb25zLCBJU3RhdGljU291bmRCdWZmZXJPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRCdWZmZXJcIjtcbmltcG9ydCB7IFN0YXRpY1NvdW5kQnVmZmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRCdWZmZXJcIjtcbmltcG9ydCB0eXBlIHsgSVN0YXRpY1NvdW5kSW5zdGFuY2VPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRJbnN0YW5jZVwiO1xuaW1wb3J0IHsgX1N0YXRpY1NvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEluc3RhbmNlXCI7XG5pbXBvcnQgeyBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucywgdHlwZSBBYnN0cmFjdFNwYXRpYWxBdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9TdGVyZW9BdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvc3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9DbGVhblVybCwgX0ZpbGVFeHRlbnNpb25SZWdleCB9IGZyb20gXCIuLi9hdWRpb1V0aWxzXCI7XG5pbXBvcnQgeyBTb3VuZFN0YXRlIH0gZnJvbSBcIi4uL3NvdW5kU3RhdGVcIjtcbmltcG9ydCB7IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvd2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnRcIjtcbmltcG9ydCB7IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGggfSBmcm9tIFwiLi9zdWJOb2Rlcy93ZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9TcGF0aWFsV2ViQXVkaW8gfSBmcm9tIFwiLi9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxXZWJBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUsIElXZWJBdWRpb091dE5vZGUsIElXZWJBdWRpb1N1cGVyTm9kZSB9IGZyb20gXCIuL3dlYkF1ZGlvTm9kZVwiO1xuXG50eXBlIFN0YXRpY1NvdW5kU291cmNlVHlwZSA9IEFycmF5QnVmZmVyIHwgQXVkaW9CdWZmZXIgfCBTdGF0aWNTb3VuZEJ1ZmZlciB8IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1dlYkF1ZGlvU3RhdGljU291bmQgZXh0ZW5kcyBTdGF0aWNTb3VuZCBpbXBsZW1lbnRzIElXZWJBdWRpb1N1cGVyTm9kZSB7XG4gICAgcHJpdmF0ZSBfYnVmZmVyOiBfV2ViQXVkaW9TdGF0aWNTb3VuZEJ1ZmZlcjtcbiAgICBwcml2YXRlIF9zdGVyZW86IE51bGxhYmxlPF9TdGVyZW9BdWRpbz4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RhdGljU291bmRTdG9yZWRPcHRpb25zO1xuICAgIHByb3RlY3RlZCBfc3ViR3JhcGg6IF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGg7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IE9mZmxpbmVBdWRpb0NvbnRleHQ7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZE9wdGlvbnM+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGVuZ2luZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dG9wbGF5OiBvcHRpb25zLmF1dG9wbGF5ID8/IGZhbHNlLFxuICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24gPz8gMCxcbiAgICAgICAgICAgIGxvb3A6IG9wdGlvbnMubG9vcCA/PyBmYWxzZSxcbiAgICAgICAgICAgIGxvb3BFbmQ6IG9wdGlvbnMubG9vcEVuZCA/PyAwLFxuICAgICAgICAgICAgbG9vcFN0YXJ0OiBvcHRpb25zLmxvb3BTdGFydCA/PyAwLFxuICAgICAgICAgICAgbWF4SW5zdGFuY2VzOiBvcHRpb25zLm1heEluc3RhbmNlcyA/PyBJbmZpbml0eSxcbiAgICAgICAgICAgIHBpdGNoOiBvcHRpb25zLnBpdGNoID8/IDAsXG4gICAgICAgICAgICBwbGF5YmFja1JhdGU6IG9wdGlvbnMucGxheWJhY2tSYXRlID8/IDEsXG4gICAgICAgICAgICBzdGFydE9mZnNldDogb3B0aW9ucy5zdGFydE9mZnNldCA/PyAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gbmV3IF9XZWJBdWRpb1N0YXRpY1NvdW5kLl9TdWJHcmFwaCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIF9pbml0QXN5bmMoc291cmNlOiBTdGF0aWNTb3VuZFNvdXJjZVR5cGUsIG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gdGhpcy5lbmdpbmUuX2F1ZGlvQ29udGV4dDtcblxuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoc291cmNlKSB8fCBzb3VyY2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBzb3VyY2UgaW5zdGFuY2VvZiBBdWRpb0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gKGF3YWl0IHRoaXMuZW5naW5lLmNyZWF0ZVNvdW5kQnVmZmVyQXN5bmMoc291cmNlLCBvcHRpb25zKSkgYXMgX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5vdXRCdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gb3B0aW9ucy5vdXRCdXM7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vdXRCdXNBdXRvRGVmYXVsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZW5naW5lLmlzUmVhZHlQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSB0aGlzLmVuZ2luZS5kZWZhdWx0TWFpbkJ1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX3N1YkdyYXBoLmluaXRBc3luYyhvcHRpb25zKTtcblxuICAgICAgICBpZiAoX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5naW5lLl9hZGRTb3VuZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBidWZmZXIoKTogX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5faW5Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIGNsb25lQXN5bmMob3B0aW9uczogTnVsbGFibGU8UGFydGlhbDxJU3RhdGljU291bmRDbG9uZU9wdGlvbnM+PiA9IG51bGwpOiBQcm9taXNlPFN0YXRpY1NvdW5kPiB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gYXdhaXQgdGhpcy5lbmdpbmUuY3JlYXRlU291bmRBc3luYyh0aGlzLm5hbWUsIG9wdGlvbnM/LmNsb25lQnVmZmVyID8gdGhpcy5idWZmZXIuY2xvbmUoKSA6IHRoaXMuYnVmZmVyLCB0aGlzLl9vcHRpb25zKTtcblxuICAgICAgICBjbG9uZS5vdXRCdXMgPSBvcHRpb25zPy5vdXRCdXMgPyBvcHRpb25zLm91dEJ1cyA6IHRoaXMub3V0QnVzO1xuXG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zdGVyZW8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLmVuZ2luZS5fcmVtb3ZlU291bmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiX1dlYkF1ZGlvU3RhdGljU291bmRcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUluc3RhbmNlKCk6IF9XZWJBdWRpb1N0YXRpY1NvdW5kSW5zdGFuY2Uge1xuICAgICAgICByZXR1cm4gbmV3IF9XZWJBdWRpb1N0YXRpY1NvdW5kSW5zdGFuY2UodGhpcywgdGhpcy5fb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBzdXBlci5fY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHdyYXBwZWQgbm9kZSBpcyBub3QgYXZhaWxhYmxlIG5vdywgaXQgd2lsbCBiZSBjb25uZWN0ZWQgbGF0ZXIgYnkgdGhlIHN1YmdyYXBoLlxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2NyZWF0ZVNwYXRpYWxQcm9wZXJ0eShhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpOiBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgICAgIHJldHVybiBuZXcgX1NwYXRpYWxXZWJBdWRpbyh0aGlzLl9zdWJHcmFwaCwgYXV0b1VwZGF0ZSwgbWluVXBkYXRlVGltZSk7XG4gICAgfVxuXG4gICAgcHVibGljIF9nZXRPcHRpb25zKCk6IElTdGF0aWNTb3VuZFN0b3JlZE9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfU3ViR3JhcGggPSBjbGFzcyBleHRlbmRzIF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGgge1xuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX293bmVyOiBfV2ViQXVkaW9TdGF0aWNTb3VuZDtcblxuICAgICAgICBwcm90ZWN0ZWQgZ2V0IF9kb3duc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl9kb3duc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX3Vwc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl91cHN0cmVhbU5vZGVzID8/IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIgZXh0ZW5kcyBTdGF0aWNTb3VuZEJ1ZmZlciB7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBfYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpIHtcbiAgICAgICAgc3VwZXIoZW5naW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgX2luaXRBc3luYyhzb3VyY2U6IFN0YXRpY1NvdW5kU291cmNlVHlwZSwgb3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRCdWZmZXJPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXVkaW9CdWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyID0gc291cmNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2luaXRGcm9tVXJsQXN5bmMoc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2luaXRGcm9tVXJsc0FzeW5jKHNvdXJjZSwgb3B0aW9ucy5za2lwQ29kZWNDaGVjayA/PyBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2luaXRGcm9tQXJyYXlCdWZmZXJBc3luYyhzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgY2hhbm5lbENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0J1ZmZlci5udW1iZXJPZkNoYW5uZWxzO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0J1ZmZlci5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQnVmZmVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBzYW1wbGVSYXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0J1ZmZlci5zYW1wbGVSYXRlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgY2xvbmUob3B0aW9uczogTnVsbGFibGU8UGFydGlhbDxJU3RhdGljU291bmRCdWZmZXJDbG9uZU9wdGlvbnM+PiA9IG51bGwpOiBTdGF0aWNTb3VuZEJ1ZmZlciB7XG4gICAgICAgIGNvbnN0IGF1ZGlvQnVmZmVyID0gbmV3IEF1ZGlvQnVmZmVyKHtcbiAgICAgICAgICAgIGxlbmd0aDogdGhpcy5fYXVkaW9CdWZmZXIubGVuZ3RoLFxuICAgICAgICAgICAgbnVtYmVyT2ZDaGFubmVsczogdGhpcy5fYXVkaW9CdWZmZXIubnVtYmVyT2ZDaGFubmVscyxcbiAgICAgICAgICAgIHNhbXBsZVJhdGU6IHRoaXMuX2F1ZGlvQnVmZmVyLnNhbXBsZVJhdGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYXVkaW9CdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgaSsrKSB7XG4gICAgICAgICAgICBhdWRpb0J1ZmZlci5jb3B5VG9DaGFubmVsKHRoaXMuX2F1ZGlvQnVmZmVyLmdldENoYW5uZWxEYXRhKGkpLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBfV2ViQXVkaW9TdGF0aWNTb3VuZEJ1ZmZlcih0aGlzLmVuZ2luZSk7XG4gICAgICAgIGJ1ZmZlci5fYXVkaW9CdWZmZXIgPSBhdWRpb0J1ZmZlcjtcbiAgICAgICAgYnVmZmVyLm5hbWUgPSBvcHRpb25zPy5uYW1lID8gb3B0aW9ucy5uYW1lIDogdGhpcy5uYW1lO1xuXG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfaW5pdEZyb21BcnJheUJ1ZmZlckFzeW5jKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlciA9IGF3YWl0IHRoaXMuZW5naW5lLl9hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9pbml0RnJvbVVybEFzeW5jKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHVybCA9IF9DbGVhblVybCh1cmwpO1xuICAgICAgICBhd2FpdCB0aGlzLl9pbml0RnJvbUFycmF5QnVmZmVyQXN5bmMoYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmFycmF5QnVmZmVyKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2luaXRGcm9tVXJsc0FzeW5jKHVybHM6IHN0cmluZ1tdLCBza2lwQ29kZWNDaGVjazogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG4gICAgICAgICAgICBpZiAoc2tpcENvZGVjQ2hlY2spIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2luaXRGcm9tVXJsQXN5bmModXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHVybC5tYXRjaChfRmlsZUV4dGVuc2lvblJlZ2V4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBtYXRjaGVzPy5hdCgxKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ICYmIHRoaXMuZW5naW5lLmlzRm9ybWF0VmFsaWQoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2luaXRGcm9tVXJsQXN5bmModXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ICYmIDAgPCBmb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZmxhZ0ludmFsaWRGb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2F1ZGlvQnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmNsYXNzIF9XZWJBdWRpb1N0YXRpY1NvdW5kSW5zdGFuY2UgZXh0ZW5kcyBfU3RhdGljU291bmRJbnN0YW5jZSBpbXBsZW1lbnRzIElXZWJBdWRpb091dE5vZGUge1xuICAgIHByaXZhdGUgX2VuZ2luZVBsYXlUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2VuZ2luZVBhdXNlVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9pc0Nvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3BpdGNoOiBOdWxsYWJsZTxfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ+ID0gbnVsbDtcbiAgICBwcml2YXRlIF9wbGF5YmFja1JhdGU6IE51bGxhYmxlPF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudD4gPSBudWxsO1xuICAgIHByaXZhdGUgX3NvdXJjZU5vZGU6IE51bGxhYmxlPEF1ZGlvQnVmZmVyU291cmNlTm9kZT4gPSBudWxsO1xuICAgIHByaXZhdGUgX3ZvbHVtZU5vZGU6IEdhaW5Ob2RlO1xuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RhdGljU291bmRJbnN0YW5jZU9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9zb3VuZDogX1dlYkF1ZGlvU3RhdGljU291bmQ7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNvdW5kOiBfV2ViQXVkaW9TdGF0aWNTb3VuZCwgb3B0aW9uczogSVN0YXRpY1NvdW5kSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHNvdW5kKTtcblxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLl92b2x1bWVOb2RlID0gbmV3IEdhaW5Ob2RlKHNvdW5kLl9hdWRpb0NvbnRleHQpO1xuICAgICAgICB0aGlzLl9pbml0U291cmNlTm9kZSgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3BpdGNoPy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3BsYXliYWNrUmF0ZT8uZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuX2RlaW5pdFNvdXJjZU5vZGUoKTtcblxuICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBjdXJyZW50VGltZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aW1lU2luY2VMYXN0U3RhcnQgPSB0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQgPyAwIDogdGhpcy5lbmdpbmUuY3VycmVudFRpbWUgLSB0aGlzLl9lbmdpbmVQbGF5VGltZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZ2luZVBhdXNlVGltZSArIHRpbWVTaW5jZUxhc3RTdGFydCArIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjdXJyZW50VGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJlc3RhcnQgPSB0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGluZyB8fCB0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGVkO1xuXG4gICAgICAgIGlmIChyZXN0YXJ0KSB7XG4gICAgICAgICAgICAvLyBTdG9wIHNvdXJjZSBub2RlIHdpdGhvdXQgc2VuZGluZyBgb25FbmRlZE9ic2VydmFibGVgIHNvIGluc3RhbmNlJ3MgYGRpc3Bvc2VgIGZ1bmN0aW9uIGlzIG5vdCBjYWxsZWQuXG4gICAgICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gdGhpcy5fc291cmNlTm9kZTtcbiAgICAgICAgICAgIHRoaXMuX2RlaW5pdFNvdXJjZU5vZGUoKTtcbiAgICAgICAgICAgIHNvdXJjZU5vZGU/LnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gU291bmRTdGF0ZS5TdG9wcGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbmdpbmVQYXVzZVRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldCA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChyZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKTogTnVsbGFibGU8QXVkaW9Ob2RlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92b2x1bWVOb2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0IHBpdGNoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGl0Y2g/LnNldFRhcmdldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldCBwbGF5YmFja1JhdGUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wbGF5YmFja1JhdGU/LnNldFRhcmdldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBzdGFydFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZ2luZVBsYXlUaW1lO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb1N0YXRpY1NvdW5kSW5zdGFuY2VcIjtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBsYXkob3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRQbGF5T3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubG9vcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3AgPSBvcHRpb25zLmxvb3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubG9vcFN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMubG9vcFN0YXJ0ID0gb3B0aW9ucy5sb29wU3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubG9vcEVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3BFbmQgPSBvcHRpb25zLmxvb3BFbmQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhcnRPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldCA9IG9wdGlvbnMuc3RhcnRPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RhcnRPZmZzZXQgPSB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0O1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ICs9IHRoaXMuX2VuZ2luZVBhdXNlVGltZTtcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0ICU9IHRoaXMuX3NvdW5kLmJ1ZmZlci5kdXJhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VuZ2luZVBsYXlUaW1lID0gdGhpcy5lbmdpbmUuY3VycmVudFRpbWUgKyAob3B0aW9ucy53YWl0VGltZSA/PyAwKTtcblxuICAgICAgICB0aGlzLl92b2x1bWVOb2RlLmdhaW4udmFsdWUgPSBvcHRpb25zLnZvbHVtZSA/PyAxO1xuXG4gICAgICAgIHRoaXMuX2luaXRTb3VyY2VOb2RlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnN0YXRlID09PSBcInJ1bm5pbmdcIikge1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdGFydGVkKTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZU5vZGU/LnN0YXJ0KHRoaXMuX2VuZ2luZVBsYXlUaW1lLCBzdGFydE9mZnNldCwgdGhpcy5fb3B0aW9ucy5kdXJhdGlvbiA+IDAgPyB0aGlzLl9vcHRpb25zLmR1cmF0aW9uIDogdW5kZWZpbmVkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RhcnRpbmcpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5hZGQodGhpcy5fb25FbmdpbmVTdGF0ZUNoYW5nZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5QYXVzZWQpO1xuICAgICAgICB0aGlzLl9lbmdpbmVQYXVzZVRpbWUgKz0gdGhpcy5lbmdpbmUuY3VycmVudFRpbWUgLSB0aGlzLl9lbmdpbmVQbGF5VGltZTtcblxuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlPy5zdG9wKCk7XG4gICAgICAgIHRoaXMuX2RlaW5pdFNvdXJjZU5vZGUoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlc3VtZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHN0b3Aob3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRTdG9wT3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5naW5lU3RvcFRpbWUgPSB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSArIChvcHRpb25zLndhaXRUaW1lID8/IDApO1xuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlPy5zdG9wKGVuZ2luZVN0b3BUaW1lKTtcblxuICAgICAgICBpZiAob3B0aW9ucy53YWl0VGltZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMud2FpdFRpbWUgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdG9wcGVkKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25FbmdpbmVTdGF0ZUNoYW5nZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IEFic3RyYWN0QXVkaW9Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc291bmQncyBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCAmJiBub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBBYnN0cmFjdEF1ZGlvTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSBzdXBlci5fZGlzY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCAmJiBub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX29uRW5kZWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VuZ2luZVBsYXlUaW1lID0gMDtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlaW5pdFNvdXJjZU5vZGUoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfZGVpbml0U291cmNlTm9kZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VyY2VOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNDb25uZWN0ZWQgJiYgIXRoaXMuX2Rpc2Nvbm5lY3QodGhpcy5fc291bmQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUuZGlzY29ubmVjdCh0aGlzLl92b2x1bWVOb2RlKTtcbiAgICAgICAgdGhpcy5fc291cmNlTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5fb25FbmRlZCk7XG5cbiAgICAgICAgdGhpcy5fc291cmNlTm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNvdXJjZU5vZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fc291cmNlTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fc291cmNlTm9kZSA9IG5ldyBBdWRpb0J1ZmZlclNvdXJjZU5vZGUodGhpcy5fc291bmQuX2F1ZGlvQ29udGV4dCwgeyBidWZmZXI6IHRoaXMuX3NvdW5kLmJ1ZmZlci5fYXVkaW9CdWZmZXIgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZU5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kZWQsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZU5vZGUuY29ubmVjdCh0aGlzLl92b2x1bWVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0KHRoaXMuX3NvdW5kKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9waXRjaCA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQodGhpcy5lbmdpbmUsIHRoaXMuX3NvdXJjZU5vZGUuZGV0dW5lKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXliYWNrUmF0ZSA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQodGhpcy5lbmdpbmUsIHRoaXMuX3NvdXJjZU5vZGUucGxheWJhY2tSYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9zb3VyY2VOb2RlO1xuICAgICAgICBub2RlLmRldHVuZS52YWx1ZSA9IHRoaXMuX3NvdW5kLnBpdGNoO1xuICAgICAgICBub2RlLmxvb3AgPSB0aGlzLl9vcHRpb25zLmxvb3A7XG4gICAgICAgIG5vZGUubG9vcEVuZCA9IHRoaXMuX29wdGlvbnMubG9vcEVuZDtcbiAgICAgICAgbm9kZS5sb29wU3RhcnQgPSB0aGlzLl9vcHRpb25zLmxvb3BTdGFydDtcbiAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUudmFsdWUgPSB0aGlzLl9zb3VuZC5wbGF5YmFja1JhdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25FbmdpbmVTdGF0ZUNoYW5nZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zdGF0ZSAhPT0gXCJydW5uaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmxvb3AgJiYgdGhpcy5zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGluZykge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKHRoaXMuX29uRW5naW5lU3RhdGVDaGFuZ2VkKTtcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9