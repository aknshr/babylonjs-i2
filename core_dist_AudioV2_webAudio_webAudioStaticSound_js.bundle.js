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
    constructor(name, engine) {
        super(name, engine);
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
    get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
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
        this._spatial?.dispose();
        this._spatial = null;
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
    _initSpatialProperty() {
        if (!this._spatial) {
            this._spatial = new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_8__._SpatialWebAudio(this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
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
            this.onEndedObservable.notifyObservers(this);
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
            startOffset += this.currentTime;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9TdGF0aWNTb3VuZF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQTBGQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBO0FBeUJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQVdBO0FBTEE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBU0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF3TUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuUEE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kQnVmZmVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kSW5zdGFuY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvU3RhdGljU291bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgU291bmRTdGF0ZSB9IGZyb20gXCIuLi9zb3VuZFN0YXRlXCI7XG5pbXBvcnQgdHlwZSB7IElBYnN0cmFjdFNvdW5kT3B0aW9ucywgSUFic3RyYWN0U291bmRQbGF5T3B0aW9ucywgSUFic3RyYWN0U291bmRTdG9yZWRPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RTb3VuZFwiO1xuaW1wb3J0IHsgQWJzdHJhY3RTb3VuZCB9IGZyb20gXCIuL2Fic3RyYWN0U291bmRcIjtcbmltcG9ydCB0eXBlIHsgUHJpbWFyeUF1ZGlvQnVzIH0gZnJvbSBcIi4vYXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgSVN0YXRpY1NvdW5kQnVmZmVyT3B0aW9ucywgU3RhdGljU291bmRCdWZmZXIgfSBmcm9tIFwiLi9zdGF0aWNTb3VuZEJ1ZmZlclwiO1xuaW1wb3J0IHR5cGUgeyBfU3RhdGljU291bmRJbnN0YW5jZSB9IGZyb20gXCIuL3N0YXRpY1NvdW5kSW5zdGFuY2VcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRPcHRpb25zQmFzZSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiB0aW1lIHRvIHBsYXkgdGhlIHNvdW5kIGZvciwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gSWYgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGAwYCwgdGhlIHNvdW5kIHBsYXlzIGZvciBpdHMgZnVsbCBkdXJhdGlvbi5cbiAgICAgKi9cbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBlbmQgb2YgdGhlIGxvb3AgcmFuZ2UgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gSWYgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGAwYCwgdGhlIGxvb3AgcGxheXMgZm9yIHRoZSBzb3VuZCdzIGZ1bGwgZHVyYXRpb24uXG4gICAgICogLSBIYXMgbm8gZWZmZWN0IGlmIHtAbGluayBsb29wfSBpcyBgZmFsc2VgLlxuICAgICAqL1xuICAgIGxvb3BFbmQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RhcnQgb2YgdGhlIGxvb3AgcmFuZ2UgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gSWYgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGAwYCwgdGhlIGxvb3Agc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNvdW5kLlxuICAgICAqIC0gSGFzIG5vIGVmZmVjdCBpZiB7QGxpbmsgbG9vcH0gaXMgYGZhbHNlYC5cbiAgICAgKlxuICAgICAqL1xuICAgIGxvb3BTdGFydDogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgc3RvcmVkIGluIGEgc3RhdGljIHNvdW5kLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kU3RvcmVkT3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kU3RvcmVkT3B0aW9ucywgSVN0YXRpY1NvdW5kT3B0aW9uc0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSBwaXRjaCBvZiB0aGUgc291bmQsIGluIGNlbnRzLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBDYW4gYmUgY29tYmluZWQgd2l0aCB7QGxpbmsgcGxheWJhY2tSYXRlfS5cbiAgICAgKi9cbiAgICBwaXRjaDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBwbGF5YmFjayByYXRlIG9mIHRoZSBzb3VuZC4gRGVmYXVsdHMgdG8gYDFgLlxuICAgICAqIC0gQ2FuIGJlIGNvbWJpbmVkIHdpdGgge0BsaW5rIHBpdGNofS5cbiAgICAgKi9cbiAgICBwbGF5YmFja1JhdGU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHN0YXRpYyBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0U291bmRPcHRpb25zLCBJU3RhdGljU291bmRCdWZmZXJPcHRpb25zLCBJU3RhdGljU291bmRTdG9yZWRPcHRpb25zIHt9XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgcGxheWluZyBhIHN0YXRpYyBzb3VuZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRQbGF5T3B0aW9ucyBleHRlbmRzIElBYnN0cmFjdFNvdW5kUGxheU9wdGlvbnMsIElTdGF0aWNTb3VuZE9wdGlvbnNCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0byB3YWl0IGJlZm9yZSBwbGF5aW5nIHRoZSBzb3VuZCwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIHdhaXRUaW1lOiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3Igc3RvcHBpbmcgYSBzdGF0aWMgc291bmQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kU3RvcE9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHRvIHdhaXQgYmVmb3JlIHN0b3BwaW5nIHRoZSBzb3VuZCwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqL1xuICAgIHdhaXRUaW1lOiBudW1iZXI7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY2xvbmluZyBhIHN0YXRpYyBzb3VuZC5cbiAqIC0gQHNlZSB7QGxpbmsgU3RhdGljU291bmQuY2xvbmV9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0aWNTb3VuZENsb25lT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBjbG9uZSB0aGUgc291bmQgYnVmZmVyIHdoZW4gY2xvbmluZyB0aGUgc291bmQuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogLSBJZiBgdHJ1ZWAsIHRoZSBvcmlnaW5hbCBzb3VuZCdzIGJ1ZmZlciBpcyBjbG9uZWQsIGFuZCB0aGUgY2xvbmVkIHNvdW5kIHdpbGwgdXNlIGl0cyBvd24gY29weS5cbiAgICAgKiAtIElmIGBmYWxzZWAsIHRoZSBzb3VuZCBidWZmZXIgaXMgc2hhcmVkIHdpdGggdGhlIG9yaWdpbmFsIHNvdW5kLlxuICAgICAqL1xuICAgIGNsb25lQnVmZmVyOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBidXMgZm9yIHRoZSBjbG9uZWQgc291bmQuIERlZmF1bHRzIHRvIGBudWxsYC5cbiAgICAgKiAtIElmIG5vdCBzZXQgb3IgYG51bGxgLCB0aGUgY2xvbmVkIHNvdW5kIHVzZXMgdGhlIG9yaWdpbmFsIHNvdW5kJ3MgYG91dEJ1c2AuXG4gICAgICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5kZWZhdWx0TWFpbkJ1c31cbiAgICAgKi9cbiAgICBvdXRCdXM6IE51bGxhYmxlPFByaW1hcnlBdWRpb0J1cz47XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHNvdW5kLlxuICpcbiAqIEEgc3RhdGljIHNvdW5kIGhhcyBhIHNvdW5kIGJ1ZmZlciB0aGF0IGlzIGxvYWRlZCBpbnRvIG1lbW9yeSBhbGwgYXQgb25jZS4gVGhpcyBhbGxvd3MgaXQgdG8gaGF2ZSBtb3JlIGNhcGFiaWxpdGllc1xuICogdGhhbiBhIHN0cmVhbWluZyBzb3VuZCwgc3VjaCBhcyBsb29wIHBvaW50cyBhbmQgcGxheWJhY2sgcmF0ZSBjaGFuZ2VzLCBidXQgaXQgYWxzbyBtZWFucyB0aGF0IHRoZSBzb3VuZCBtdXN0IGJlXG4gKiBmdWxseSBkb3dubG9hZGVkIGFuZCBkZWNvZGVkIGJlZm9yZSBpdCBjYW4gYmUgcGxheWVkLCB3aGljaCBtYXkgdGFrZSBhIGxvbmcgdGltZSBmb3Igc291bmRzIHdpdGggbG9uZyBkdXJhdGlvbnMuXG4gKlxuICogVG8gcHJldmVudCBkb3dubG9hZGluZyBhbmQgZGVjb2RpbmcgYSBzb3VuZCBtdWx0aXBsZSB0aW1lcywgYSBzb3VuZCdzIGJ1ZmZlciBjYW4gYmUgc2hhcmVkIHdpdGggb3RoZXIgc291bmRzLlxuICogU2VlIHtAbGluayBDcmVhdGVTb3VuZEJ1ZmZlckFzeW5jfSwge0BsaW5rIFN0YXRpY1NvdW5kQnVmZmVyfSBhbmQge0BsaW5rIFN0YXRpY1NvdW5kLmJ1ZmZlcn0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogU3RhdGljIHNvdW5kcyBhcmUgY3JlYXRlZCBieSB0aGUge0BsaW5rIENyZWF0ZVNvdW5kQXN5bmN9IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RhdGljU291bmQgZXh0ZW5kcyBBYnN0cmFjdFNvdW5kIHtcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2luc3RhbmNlczogU2V0PF9TdGF0aWNTb3VuZEluc3RhbmNlPjtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3ZlcnJpZGUgcmVhZG9ubHkgX29wdGlvbnM6IElTdGF0aWNTb3VuZFN0b3JlZE9wdGlvbnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc291bmQgYnVmZmVyIHRoYXQgdGhlIHNvdW5kIHVzZXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGJ1ZmZlciBjYW4gYmUgc2hhcmVkIHdpdGggb3RoZXIgc3RhdGljIHNvdW5kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgYnVmZmVyOiBTdGF0aWNTb3VuZEJ1ZmZlcjtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSB0byBwbGF5IHRoZSBzb3VuZCBmb3IsIGluIHNlY29uZHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIElmIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgMGAsIHRoZSBzb3VuZCBwbGF5cyBmb3IgaXRzIGZ1bGwgZHVyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5kdXJhdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydCBvZiB0aGUgbG9vcCByYW5nZSwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gSWYgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGAwYCwgdGhlIGxvb3Agc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbG9vcFN0YXJ0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmxvb3BTdGFydDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGxvb3BTdGFydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMubG9vcFN0YXJ0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZCBvZiB0aGUgbG9vcCByYW5nZSwgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gSWYgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGAwYCwgdGhlIGxvb3AgcGxheXMgZm9yIHRoZSBzb3VuZCdzIGZ1bGwgZHVyYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIGdldCBsb29wRW5kKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmxvb3BFbmQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsb29wRW5kKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wRW5kID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHBpdGNoIG9mIHRoZSBzb3VuZCwgaW4gY2VudHMuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIEdldHMgY29tYmluZWQgd2l0aCB7QGxpbmsgcGxheWJhY2tSYXRlfSB0byBkZXRlcm1pbmUgdGhlIGZpbmFsIHBpdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGl0Y2goKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMucGl0Y2g7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwaXRjaCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMucGl0Y2ggPSB2YWx1ZTtcblxuICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2luc3RhbmNlcy52YWx1ZXMoKTtcbiAgICAgICAgZm9yIChsZXQgaW5zdGFuY2UgPSBpdC5uZXh0KCk7ICFpbnN0YW5jZS5kb25lOyBpbnN0YW5jZSA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgaW5zdGFuY2UudmFsdWUucGl0Y2ggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGF5YmFjayByYXRlIG9mIHRoZSBzb3VuZC4gRGVmYXVsdHMgdG8gYDFgLlxuICAgICAqIC0gR2V0cyBjb21iaW5lZCB3aXRoIHtAbGluayBwaXRjaH0gdG8gZGV0ZXJtaW5lIHRoZSBmaW5hbCBwbGF5YmFjayByYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGxheWJhY2tSYXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnBsYXliYWNrUmF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYXliYWNrUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMucGxheWJhY2tSYXRlID0gdmFsdWU7XG5cbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9pbnN0YW5jZXMudmFsdWVzKCk7XG4gICAgICAgIGZvciAobGV0IGluc3RhbmNlID0gaXQubmV4dCgpOyAhaW5zdGFuY2UuZG9uZTsgaW5zdGFuY2UgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnZhbHVlLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmVzIHRoZSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBjbG9uaW5nIHRoZSBzb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY2xvbmVBc3luYyhvcHRpb25zPzogUGFydGlhbDxJU3RhdGljU291bmRDbG9uZU9wdGlvbnM+KTogUHJvbWlzZTxTdGF0aWNTb3VuZD47XG5cbiAgICAvKipcbiAgICAgKiBQbGF5cyB0aGUgc291bmQuXG4gICAgICogLSBUcmlnZ2VycyBgb25FbmRlZE9ic2VydmFibGVgIGlmIHBsYXllZCBmb3IgdGhlIGZ1bGwgZHVyYXRpb24gYW5kIHRoZSBgbG9vcGAgb3B0aW9uIGlzIG5vdCBzZXQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gdXNlIHdoZW4gcGxheWluZyB0aGUgc291bmQuIE9wdGlvbnMgc2V0IGhlcmUgb3ZlcnJpZGUgdGhlIHNvdW5kJ3Mgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheShvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZFBsYXlPcHRpb25zPiA9IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuZHVyYXRpb24gPz89IHRoaXMuZHVyYXRpb247XG4gICAgICAgIG9wdGlvbnMubG9vcCA/Pz0gdGhpcy5sb29wO1xuICAgICAgICBvcHRpb25zLmxvb3BTdGFydCA/Pz0gdGhpcy5sb29wU3RhcnQ7XG4gICAgICAgIG9wdGlvbnMubG9vcEVuZCA/Pz0gdGhpcy5sb29wRW5kO1xuICAgICAgICBvcHRpb25zLnN0YXJ0T2Zmc2V0ID8/PSB0aGlzLnN0YXJ0T2Zmc2V0O1xuICAgICAgICBvcHRpb25zLnZvbHVtZSA/Pz0gMTtcbiAgICAgICAgb3B0aW9ucy53YWl0VGltZSA/Pz0gMDtcblxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2NyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2JlZm9yZVBsYXkoaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5wbGF5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9hZnRlclBsYXkoaW5zdGFuY2UpO1xuXG4gICAgICAgIHRoaXMuX3N0b3BFeGNlc3NJbnN0YW5jZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgc291bmQuXG4gICAgICogLSBUcmlnZ2VycyBgb25FbmRlZE9ic2VydmFibGVgIGlmIHRoZSBzb3VuZCBpcyBwbGF5aW5nLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgdG8gdXNlIHdoZW4gc3RvcHBpbmcgdGhlIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdG9wKG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kU3RvcE9wdGlvbnM+ID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKG9wdGlvbnMud2FpdFRpbWUgJiYgMCA8IG9wdGlvbnMud2FpdFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKFNvdW5kU3RhdGUuU3RvcHBpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdG9wcGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2VzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIEFycmF5LmZyb20odGhpcy5faW5zdGFuY2VzKSkge1xuICAgICAgICAgICAgaW5zdGFuY2Uuc3RvcChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvdmVycmlkZSBfY3JlYXRlSW5zdGFuY2UoKTogX1N0YXRpY1NvdW5kSW5zdGFuY2U7XG59XG4iLCJpbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5cbmxldCBTdGF0aWNTb3VuZEJ1ZmZlcklkID0gMTtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIHN0YXRpYyBzb3VuZCBidWZmZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kQnVmZmVyT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBza2lwIGNvZGVjIGNoZWNraW5nIGJlZm9yZSBhdHRlbXB0aW5nIHRvIGxvYWQgZWFjaCBzb3VyY2UgVVJMIHdoZW4gYHNvdXJjZWAgaXMgYSBzdHJpbmcgYXJyYXkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogLSBIYXMgbm8gZWZmZWN0IGlmIHRoZSBzb3VuZCdzIHNvdXJjZSBpcyBub3QgYSBzdHJpbmcgYXJyYXkuXG4gICAgICogQHNlZSB7QGxpbmsgQ3JlYXRlU291bmRBc3luY30gYHNvdXJjZWAgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIHNraXBDb2RlY0NoZWNrOiBib29sZWFuO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNsb25pbmcgYSBzdGF0aWMgc291bmQgYnVmZmVyLlxuICogLSBAc2VlIHtAbGluayBTdGF0aWNTb3VuZEJ1ZmZlci5jbG9uZX0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRpY1NvdW5kQnVmZmVyQ2xvbmVPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY2xvbmVkIHNvdW5kIGJ1ZmZlci4gRGVmYXVsdHMgdG8gYFN0YXRpY1NvdW5kQnVmZmVyICMke2lkfWAuXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzb3VuZCBidWZmZXIuXG4gKlxuICogQSBzdGF0aWMgc291bmQgYnVmZmVyIGlzIGEgZnVsbHkgZG93bmxvYWRlZCBhbmQgZGVjb2RlZCBhcnJheSBvZiBhdWRpbyBkYXRhIHRoYXQgaXMgcmVhZHkgdG8gYmUgcGxheWVkLlxuICpcbiAqIFN0YXRpYyBzb3VuZCBidWZmZXJzIGNhbiBiZSByZXVzZWQgbXVsdGlwbGUgdGltZXMgYnkgZGlmZmVyZW50IHtAbGluayBTdGF0aWNTb3VuZH0gaW5zdGFuY2VzLlxuICpcbiAqIFN0YXRpYyBzb3VuZCBidWZmZXJzIGFyZSBjcmVhdGVkIGJ5IHRoZSB7QGxpbmsgQ3JlYXRlU291bmRCdWZmZXJBc3luY30gZnVuY3Rpb24uXG4gKlxuICogQHNlZSB7QGxpbmsgU3RhdGljU291bmQuYnVmZmVyfVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RhdGljU291bmRCdWZmZXIge1xuICAgIC8qKlxuICAgICAqIFRoZSBlbmdpbmUgdGhhdCB0aGUgc291bmQgYnVmZmVyIGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGVuZ2luZTogQXVkaW9FbmdpbmVWMjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBzb3VuZCBidWZmZXIuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IGBTdGF0aWNTb3VuZEJ1ZmZlciAjJHtTdGF0aWNTb3VuZEJ1ZmZlcklkKyt9YDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNhbXBsZSByYXRlIG9mIHRoZSBzb3VuZCBidWZmZXIuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHNhbXBsZVJhdGU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsZW5ndGggb2YgdGhlIHNvdW5kIGJ1ZmZlciwgaW4gc2FtcGxlIGZyYW1lcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgbGVuZ3RoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHNvdW5kIGJ1ZmZlciwgaW4gc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgZHVyYXRpb246IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgY2hhbm5lbHMgaW4gdGhlIHNvdW5kIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgY2hhbm5lbENvdW50OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgdGhlIHNvdW5kIGJ1ZmZlci5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBjbG9uaW5nIHRoZSBzb3VuZCBidWZmZXIuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNsb25lKG9wdGlvbnM/OiBQYXJ0aWFsPElTdGF0aWNTb3VuZEJ1ZmZlckNsb25lT3B0aW9ucz4pOiBTdGF0aWNTb3VuZEJ1ZmZlcjtcbn1cbiIsImltcG9ydCB0eXBlIHsgSUFic3RyYWN0U291bmRJbnN0YW5jZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB7IF9BYnN0cmFjdFNvdW5kSW5zdGFuY2UgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB0eXBlIHsgSVN0YXRpY1NvdW5kT3B0aW9uc0Jhc2UsIElTdGF0aWNTb3VuZFBsYXlPcHRpb25zLCBJU3RhdGljU291bmRTdG9wT3B0aW9ucyB9IGZyb20gXCIuL3N0YXRpY1NvdW5kXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBzdGF0aWMgc291bmQgaW5zdGFuY2UuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU3RhdGljU291bmRJbnN0YW5jZU9wdGlvbnMgZXh0ZW5kcyBJQWJzdHJhY3RTb3VuZEluc3RhbmNlT3B0aW9ucywgSVN0YXRpY1NvdW5kT3B0aW9uc0Jhc2Uge31cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9TdGF0aWNTb3VuZEluc3RhbmNlIGV4dGVuZHMgX0Fic3RyYWN0U291bmRJbnN0YW5jZSB7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG92ZXJyaWRlIHJlYWRvbmx5IF9vcHRpb25zOiBJU3RhdGljU291bmRJbnN0YW5jZU9wdGlvbnM7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcGl0Y2g6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3QgcGxheWJhY2tSYXRlOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgb3ZlcnJpZGUgcGxheShvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZFBsYXlPcHRpb25zPik6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IG92ZXJyaWRlIHN0b3Aob3B0aW9ucz86IFBhcnRpYWw8SVN0YXRpY1NvdW5kU3RvcE9wdGlvbnM+KTogdm9pZDtcbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRDbG9uZU9wdGlvbnMsIElTdGF0aWNTb3VuZE9wdGlvbnMsIElTdGF0aWNTb3VuZFBsYXlPcHRpb25zLCBJU3RhdGljU291bmRTdG9wT3B0aW9ucywgSVN0YXRpY1NvdW5kU3RvcmVkT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kXCI7XG5pbXBvcnQgeyBTdGF0aWNTb3VuZCB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZEJ1ZmZlckNsb25lT3B0aW9ucywgSVN0YXRpY1NvdW5kQnVmZmVyT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kQnVmZmVyXCI7XG5pbXBvcnQgeyBTdGF0aWNTb3VuZEJ1ZmZlciB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kQnVmZmVyXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZEluc3RhbmNlT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kSW5zdGFuY2VcIjtcbmltcG9ydCB7IF9TdGF0aWNTb3VuZEluc3RhbmNlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRJbnN0YW5jZVwiO1xuaW1wb3J0IHsgX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9TcGF0aWFsQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX1N0ZXJlb0F1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHsgX0NsZWFuVXJsLCBfRmlsZUV4dGVuc2lvblJlZ2V4IH0gZnJvbSBcIi4uL2F1ZGlvVXRpbHNcIjtcbmltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vc291bmRTdGF0ZVwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB9IGZyb20gXCIuL3N1Yk5vZGVzL3dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NwYXRpYWxXZWJBdWRpbyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvc3BhdGlhbFdlYkF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuL3dlYkF1ZGlvRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSwgSVdlYkF1ZGlvT3V0Tm9kZSwgSVdlYkF1ZGlvU3VwZXJOb2RlIH0gZnJvbSBcIi4vd2ViQXVkaW9Ob2RlXCI7XG5cbnR5cGUgU3RhdGljU291bmRTb3VyY2VUeXBlID0gQXJyYXlCdWZmZXIgfCBBdWRpb0J1ZmZlciB8IFN0YXRpY1NvdW5kQnVmZmVyIHwgc3RyaW5nIHwgc3RyaW5nW107XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9TdGF0aWNTb3VuZCBleHRlbmRzIFN0YXRpY1NvdW5kIGltcGxlbWVudHMgSVdlYkF1ZGlvU3VwZXJOb2RlIHtcbiAgICBwcml2YXRlIF9idWZmZXI6IF9XZWJBdWRpb1N0YXRpY1NvdW5kQnVmZmVyO1xuICAgIHByaXZhdGUgX3NwYXRpYWw6IE51bGxhYmxlPF9TcGF0aWFsV2ViQXVkaW8+ID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zcGF0aWFsQXV0b1VwZGF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbE1pblVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RlcmVvOiBOdWxsYWJsZTxfU3RlcmVvQXVkaW8+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0YXRpY1NvdW5kU3RvcmVkT3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgX3N1YkdyYXBoOiBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBfYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQgfCBPZmZsaW5lQXVkaW9Db250ZXh0O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSwgb3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxBdXRvVXBkYXRlID0gb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbE1pblVwZGF0ZVRpbWUgPSBvcHRpb25zLnNwYXRpYWxNaW5VcGRhdGVUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dG9wbGF5OiBvcHRpb25zLmF1dG9wbGF5ID8/IGZhbHNlLFxuICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24gPz8gMCxcbiAgICAgICAgICAgIGxvb3A6IG9wdGlvbnMubG9vcCA/PyBmYWxzZSxcbiAgICAgICAgICAgIGxvb3BFbmQ6IG9wdGlvbnMubG9vcEVuZCA/PyAwLFxuICAgICAgICAgICAgbG9vcFN0YXJ0OiBvcHRpb25zLmxvb3BTdGFydCA/PyAwLFxuICAgICAgICAgICAgbWF4SW5zdGFuY2VzOiBvcHRpb25zLm1heEluc3RhbmNlcyA/PyBJbmZpbml0eSxcbiAgICAgICAgICAgIHBpdGNoOiBvcHRpb25zLnBpdGNoID8/IDAsXG4gICAgICAgICAgICBwbGF5YmFja1JhdGU6IG9wdGlvbnMucGxheWJhY2tSYXRlID8/IDEsXG4gICAgICAgICAgICBzdGFydE9mZnNldDogb3B0aW9ucy5zdGFydE9mZnNldCA/PyAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gbmV3IF9XZWJBdWRpb1N0YXRpY1NvdW5kLl9TdWJHcmFwaCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIF9pbml0QXN5bmMoc291cmNlOiBTdGF0aWNTb3VuZFNvdXJjZVR5cGUsIG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gdGhpcy5lbmdpbmUuX2F1ZGlvQ29udGV4dDtcblxuICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoc291cmNlKSB8fCBzb3VyY2UgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBzb3VyY2UgaW5zdGFuY2VvZiBBdWRpb0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gKGF3YWl0IHRoaXMuZW5naW5lLmNyZWF0ZVNvdW5kQnVmZmVyQXN5bmMoc291cmNlLCBvcHRpb25zKSkgYXMgX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5vdXRCdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gb3B0aW9ucy5vdXRCdXM7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vdXRCdXNBdXRvRGVmYXVsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZW5naW5lLmlzUmVhZHlQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSB0aGlzLmVuZ2luZS5kZWZhdWx0TWFpbkJ1cztcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX3N1YkdyYXBoLmluaXRBc3luYyhvcHRpb25zKTtcblxuICAgICAgICBpZiAoX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsUHJvcGVydHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5naW5lLl9hZGRTb3VuZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBidWZmZXIoKTogX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5faW5Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3BhdGlhbCgpOiBfU3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIGNsb25lQXN5bmMob3B0aW9uczogTnVsbGFibGU8UGFydGlhbDxJU3RhdGljU291bmRDbG9uZU9wdGlvbnM+PiA9IG51bGwpOiBQcm9taXNlPFN0YXRpY1NvdW5kPiB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gYXdhaXQgdGhpcy5lbmdpbmUuY3JlYXRlU291bmRBc3luYyh0aGlzLm5hbWUsIG9wdGlvbnM/LmNsb25lQnVmZmVyID8gdGhpcy5idWZmZXIuY2xvbmUoKSA6IHRoaXMuYnVmZmVyLCB0aGlzLl9vcHRpb25zKTtcblxuICAgICAgICBjbG9uZS5vdXRCdXMgPSBvcHRpb25zPy5vdXRCdXMgPyBvcHRpb25zLm91dEJ1cyA6IHRoaXMub3V0QnVzO1xuXG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zcGF0aWFsPy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3NwYXRpYWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3N0ZXJlbyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGguZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lLl9yZW1vdmVTb3VuZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9TdGF0aWNTb3VuZFwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlSW5zdGFuY2UoKTogX1dlYkF1ZGlvU3RhdGljU291bmRJbnN0YW5jZSB7XG4gICAgICAgIHJldHVybiBuZXcgX1dlYkF1ZGlvU3RhdGljU291bmRJbnN0YW5jZSh0aGlzLCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTcGF0aWFsUHJvcGVydHkoKTogX1NwYXRpYWxBdWRpbyB7XG4gICAgICAgIGlmICghdGhpcy5fc3BhdGlhbCkge1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbCA9IG5ldyBfU3BhdGlhbFdlYkF1ZGlvKHRoaXMuX3N1YkdyYXBoLCB0aGlzLl9zcGF0aWFsQXV0b1VwZGF0ZSwgdGhpcy5fc3BhdGlhbE1pblVwZGF0ZVRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYXRpYWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1N1YkdyYXBoID0gY2xhc3MgZXh0ZW5kcyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIHtcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9vd25lcjogX1dlYkF1ZGlvU3RhdGljU291bmQ7XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfZG93bnN0cmVhbU5vZGVzKCk6IE51bGxhYmxlPFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lci5fZG93bnN0cmVhbU5vZGVzID8/IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgZ2V0IF91cHN0cmVhbU5vZGVzKCk6IE51bGxhYmxlPFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lci5fdXBzdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9XZWJBdWRpb1N0YXRpY1NvdW5kQnVmZmVyIGV4dGVuZHMgU3RhdGljU291bmRCdWZmZXIge1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlcjtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKSB7XG4gICAgICAgIHN1cGVyKGVuZ2luZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIF9pbml0QXN5bmMoc291cmNlOiBTdGF0aWNTb3VuZFNvdXJjZVR5cGUsIG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kQnVmZmVyT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEF1ZGlvQnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlciA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RnJvbVVybEFzeW5jKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RnJvbVVybHNBc3luYyhzb3VyY2UsIG9wdGlvbnMuc2tpcENvZGVjQ2hlY2sgPz8gZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RnJvbUFycmF5QnVmZmVyQXN5bmMoc291cmNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGNoYW5uZWxDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9CdWZmZXIubnVtYmVyT2ZDaGFubmVscztcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9CdWZmZXIuZHVyYXRpb247XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0J1ZmZlci5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgc2FtcGxlUmF0ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9CdWZmZXIuc2FtcGxlUmF0ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGNsb25lKG9wdGlvbnM6IE51bGxhYmxlPFBhcnRpYWw8SVN0YXRpY1NvdW5kQnVmZmVyQ2xvbmVPcHRpb25zPj4gPSBudWxsKTogU3RhdGljU291bmRCdWZmZXIge1xuICAgICAgICBjb25zdCBhdWRpb0J1ZmZlciA9IG5ldyBBdWRpb0J1ZmZlcih7XG4gICAgICAgICAgICBsZW5ndGg6IHRoaXMuX2F1ZGlvQnVmZmVyLmxlbmd0aCxcbiAgICAgICAgICAgIG51bWJlck9mQ2hhbm5lbHM6IHRoaXMuX2F1ZGlvQnVmZmVyLm51bWJlck9mQ2hhbm5lbHMsXG4gICAgICAgICAgICBzYW1wbGVSYXRlOiB0aGlzLl9hdWRpb0J1ZmZlci5zYW1wbGVSYXRlLFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2F1ZGlvQnVmZmVyLm51bWJlck9mQ2hhbm5lbHM7IGkrKykge1xuICAgICAgICAgICAgYXVkaW9CdWZmZXIuY29weVRvQ2hhbm5lbCh0aGlzLl9hdWRpb0J1ZmZlci5nZXRDaGFubmVsRGF0YShpKSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIodGhpcy5lbmdpbmUpO1xuICAgICAgICBidWZmZXIuX2F1ZGlvQnVmZmVyID0gYXVkaW9CdWZmZXI7XG4gICAgICAgIGJ1ZmZlci5uYW1lID0gb3B0aW9ucz8ubmFtZSA/IG9wdGlvbnMubmFtZSA6IHRoaXMubmFtZTtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2luaXRGcm9tQXJyYXlCdWZmZXJBc3luYyhhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fYXVkaW9CdWZmZXIgPSBhd2FpdCB0aGlzLmVuZ2luZS5fYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBfaW5pdEZyb21VcmxBc3luYyh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB1cmwgPSBfQ2xlYW5VcmwodXJsKTtcbiAgICAgICAgYXdhaXQgdGhpcy5faW5pdEZyb21BcnJheUJ1ZmZlckFzeW5jKGF3YWl0IChhd2FpdCBmZXRjaCh1cmwpKS5hcnJheUJ1ZmZlcigpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIF9pbml0RnJvbVVybHNBc3luYyh1cmxzOiBzdHJpbmdbXSwgc2tpcENvZGVjQ2hlY2s6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgZm9yIChjb25zdCB1cmwgb2YgdXJscykge1xuICAgICAgICAgICAgaWYgKHNraXBDb2RlY0NoZWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RnJvbVVybEFzeW5jKHVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goX0ZpbGVFeHRlbnNpb25SZWdleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gbWF0Y2hlcz8uYXQoMSk7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1hdCAmJiB0aGlzLmVuZ2luZS5pc0Zvcm1hdFZhbGlkKGZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RnJvbVVybEFzeW5jKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdCAmJiAwIDwgZm9ybWF0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmZsYWdJbnZhbGlkRm9ybWF0KGZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9hdWRpb0J1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiogQGludGVybmFsICovXG5jbGFzcyBfV2ViQXVkaW9TdGF0aWNTb3VuZEluc3RhbmNlIGV4dGVuZHMgX1N0YXRpY1NvdW5kSW5zdGFuY2UgaW1wbGVtZW50cyBJV2ViQXVkaW9PdXROb2RlIHtcbiAgICBwcml2YXRlIF9lbmdpbmVQbGF5VGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9lbmdpbmVQYXVzZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaXNDb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9waXRjaDogTnVsbGFibGU8X1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcGxheWJhY2tSYXRlOiBOdWxsYWJsZTxfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ+ID0gbnVsbDtcbiAgICBwcml2YXRlIF9zb3VyY2VOb2RlOiBOdWxsYWJsZTxBdWRpb0J1ZmZlclNvdXJjZU5vZGU+ID0gbnVsbDtcbiAgICBwcml2YXRlIF92b2x1bWVOb2RlOiBHYWluTm9kZTtcblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBfb3B0aW9uczogSVN0YXRpY1NvdW5kSW5zdGFuY2VPcHRpb25zO1xuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfc291bmQ6IF9XZWJBdWRpb1N0YXRpY1NvdW5kO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihzb3VuZDogX1dlYkF1ZGlvU3RhdGljU291bmQsIG9wdGlvbnM6IElTdGF0aWNTb3VuZEluc3RhbmNlT3B0aW9ucykge1xuICAgICAgICBzdXBlcihzb3VuZCk7XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5fdm9sdW1lTm9kZSA9IG5ldyBHYWluTm9kZShzb3VuZC5fYXVkaW9Db250ZXh0KTtcbiAgICAgICAgdGhpcy5faW5pdFNvdXJjZU5vZGUoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9waXRjaD8uZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9wbGF5YmFja1JhdGU/LmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlID0gbnVsbDtcblxuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICB0aGlzLl9kZWluaXRTb3VyY2VOb2RlKCk7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgY3VycmVudFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltZVNpbmNlTGFzdFN0YXJ0ID0gdGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkID8gMCA6IHRoaXMuZW5naW5lLmN1cnJlbnRUaW1lIC0gdGhpcy5fZW5naW5lUGxheVRpbWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmdpbmVQYXVzZVRpbWUgKyB0aW1lU2luY2VMYXN0U3RhcnQgKyB0aGlzLl9vcHRpb25zLnN0YXJ0T2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY3VycmVudFRpbWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBjb25zdCByZXN0YXJ0ID0gdGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRpbmcgfHwgdGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRlZDtcblxuICAgICAgICBpZiAocmVzdGFydCkge1xuICAgICAgICAgICAgLy8gU3RvcCBzb3VyY2Ugbm9kZSB3aXRob3V0IHNlbmRpbmcgYG9uRW5kZWRPYnNlcnZhYmxlYCBzbyBpbnN0YW5jZSdzIGBkaXNwb3NlYCBmdW5jdGlvbiBpcyBub3QgY2FsbGVkLlxuICAgICAgICAgICAgY29uc3Qgc291cmNlTm9kZSA9IHRoaXMuX3NvdXJjZU5vZGU7XG4gICAgICAgICAgICB0aGlzLl9kZWluaXRTb3VyY2VOb2RlKCk7XG4gICAgICAgICAgICBzb3VyY2VOb2RlPy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IFNvdW5kU3RhdGUuU3RvcHBlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAocmVzdGFydCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCk6IE51bGxhYmxlPEF1ZGlvTm9kZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lTm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldCBwaXRjaCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BpdGNoPy5zZXRUYXJnZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXQgcGxheWJhY2tSYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGxheWJhY2tSYXRlPy5zZXRUYXJnZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgc3RhcnRUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmdpbmVQbGF5VGltZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9TdGF0aWNTb3VuZEluc3RhbmNlXCI7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBwbGF5KG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kUGxheU9wdGlvbnM+ID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTb3VuZFN0YXRlLlN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmxvb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wID0gb3B0aW9ucy5sb29wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmxvb3BTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmxvb3BTdGFydCA9IG9wdGlvbnMubG9vcFN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmxvb3BFbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5sb29wRW5kID0gb3B0aW9ucy5sb29wRW5kO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0YXJ0T2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc3RhcnRPZmZzZXQgPSBvcHRpb25zLnN0YXJ0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0YXJ0T2Zmc2V0ID0gdGhpcy5fb3B0aW9ucy5zdGFydE9mZnNldDtcblxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICBzdGFydE9mZnNldCArPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgc3RhcnRPZmZzZXQgJT0gdGhpcy5fc291bmQuYnVmZmVyLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5naW5lUGxheVRpbWUgPSB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSArIChvcHRpb25zLndhaXRUaW1lID8/IDApO1xuXG4gICAgICAgIHRoaXMuX3ZvbHVtZU5vZGUuZ2Fpbi52YWx1ZSA9IG9wdGlvbnMudm9sdW1lID8/IDE7XG5cbiAgICAgICAgdGhpcy5faW5pdFNvdXJjZU5vZGUoKTtcblxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlN0YXJ0ZWQpO1xuICAgICAgICAgICAgdGhpcy5fc291cmNlTm9kZT8uc3RhcnQodGhpcy5fZW5naW5lUGxheVRpbWUsIHN0YXJ0T2Zmc2V0LCB0aGlzLl9vcHRpb25zLmR1cmF0aW9uID4gMCA/IHRoaXMuX29wdGlvbnMuZHVyYXRpb24gOiB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0U3RhdGUoU291bmRTdGF0ZS5TdGFydGluZyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLmFkZCh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlBhdXNlZCk7XG4gICAgICAgIHRoaXMuX2VuZ2luZVBhdXNlVGltZSArPSB0aGlzLmVuZ2luZS5jdXJyZW50VGltZSAtIHRoaXMuX2VuZ2luZVBsYXlUaW1lO1xuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGU/LnN0b3AoKTtcbiAgICAgICAgdGhpcy5fZGVpbml0U291cmNlTm9kZSgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVzdW1lKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc3RvcChvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZFN0b3BPcHRpb25zPiA9IHt9KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmdpbmVTdG9wVGltZSA9IHRoaXMuZW5naW5lLmN1cnJlbnRUaW1lICsgKG9wdGlvbnMud2FpdFRpbWUgPz8gMCk7XG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGU/LnN0b3AoZW5naW5lU3RvcFRpbWUpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndhaXRUaW1lID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy53YWl0VGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShTb3VuZFN0YXRlLlN0b3BwZWQpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogQWJzdHJhY3RBdWRpb05vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzb3VuZCdzIHN1YmdyYXBoLlxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIF9XZWJBdWRpb1N0YXRpY1NvdW5kICYmIG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IEFic3RyYWN0QXVkaW9Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIF9XZWJBdWRpb1N0YXRpY1NvdW5kICYmIG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfb25FbmRlZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fZW5naW5lUGxheVRpbWUgPSAwO1xuXG4gICAgICAgIHRoaXMub25FbmRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLl9kZWluaXRTb3VyY2VOb2RlKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX2RlaW5pdFNvdXJjZU5vZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fc291cmNlTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzQ29ubmVjdGVkICYmICF0aGlzLl9kaXNjb25uZWN0KHRoaXMuX3NvdW5kKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmRpc2Nvbm5lY3QodGhpcy5fdm9sdW1lTm9kZSk7XG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kZWQpO1xuXG4gICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTb3VyY2VOb2RlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3NvdXJjZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZU5vZGUgPSBuZXcgQXVkaW9CdWZmZXJTb3VyY2VOb2RlKHRoaXMuX3NvdW5kLl9hdWRpb0NvbnRleHQsIHsgYnVmZmVyOiB0aGlzLl9zb3VuZC5idWZmZXIuX2F1ZGlvQnVmZmVyIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLl9vbkVuZGVkLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLl9zb3VyY2VOb2RlLmNvbm5lY3QodGhpcy5fdm9sdW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdCh0aGlzLl9zb3VuZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcGl0Y2ggPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KHRoaXMuZW5naW5lLCB0aGlzLl9zb3VyY2VOb2RlLmRldHVuZSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KHRoaXMuZW5naW5lLCB0aGlzLl9zb3VyY2VOb2RlLnBsYXliYWNrUmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fc291cmNlTm9kZTtcbiAgICAgICAgbm9kZS5kZXR1bmUudmFsdWUgPSB0aGlzLl9zb3VuZC5waXRjaDtcbiAgICAgICAgbm9kZS5sb29wID0gdGhpcy5fb3B0aW9ucy5sb29wO1xuICAgICAgICBub2RlLmxvb3BFbmQgPSB0aGlzLl9vcHRpb25zLmxvb3BFbmQ7XG4gICAgICAgIG5vZGUubG9vcFN0YXJ0ID0gdGhpcy5fb3B0aW9ucy5sb29wU3RhcnQ7XG4gICAgICAgIG5vZGUucGxheWJhY2tSYXRlLnZhbHVlID0gdGhpcy5fc291bmQucGxheWJhY2tSYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uRW5naW5lU3RhdGVDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3RhdGUgIT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5sb29wICYmIHRoaXMuc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmVDYWxsYmFjayh0aGlzLl9vbkVuZ2luZVN0YXRlQ2hhbmdlZCk7XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==