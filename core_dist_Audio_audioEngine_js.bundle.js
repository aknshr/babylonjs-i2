"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Audio_audioEngine_js"],{

/***/ "../core/dist/Audio/audioEngine.js":
/*!*****************************************!*\
  !*** ../core/dist/Audio/audioEngine.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioEngine: () => (/* binding */ AudioEngine)
/* harmony export */ });
/* harmony import */ var _AudioV2_webAudio_webAudioEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AudioV2/webAudio/webAudioEngine */ "../core/dist/AudioV2/webAudio/webAudioEngine.js");
/* harmony import */ var _Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Engines/abstractEngine */ "../core/dist/Engines/abstractEngine.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/observable */ "../core/dist/Misc/observable.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




// Sets the default audio engine to Babylon.js
_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.AudioEngineFactory = (hostElement, audioContext, audioDestination) => {
    return new AudioEngine(hostElement, audioContext, audioDestination);
};
/**
 * This represents the default audio engine used in babylon.
 * It is responsible to play, synchronize and analyse sounds throughout the  application.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic
 */
class AudioEngine {
    /**
     * The master gain node defines the global audio volume of your audio engine.
     */
    get masterGain() {
        return this._masterGain;
    }
    set masterGain(value) {
        this._masterGain = this._v2.mainOut._inNode = value;
    }
    /**
     * Defines if the audio engine relies on a custom unlocked button.
     * In this case, the embedded button will not be displayed.
     */
    get useCustomUnlockedButton() {
        return this._useCustomUnlockedButton;
    }
    set useCustomUnlockedButton(value) {
        this._useCustomUnlockedButton = value;
        this._v2._unmuteUIEnabled = !value;
    }
    /**
     * Gets the current AudioContext if available.
     */
    get audioContext() {
        if (this._v2.state === "running") {
            // Do not wait for the promise to unlock.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._triggerRunningStateAsync();
        }
        return this._v2._audioContext;
    }
    /**
     * Instantiates a new audio engine.
     *
     * @param hostElement defines the host element where to display the mute icon if necessary
     * @param audioContext defines the audio context to be used by the audio engine
     * @param audioDestination defines the audio destination node to be used by audio engine
     */
    constructor(hostElement = null, audioContext = null, audioDestination = null) {
        this._tryToRun = false;
        this._useCustomUnlockedButton = false;
        /**
         * Gets whether the current host supports Web Audio and thus could create AudioContexts.
         */
        this.canUseWebAudio = true;
        /**
         * Defines if Babylon should emit a warning if WebAudio is not supported.
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.WarnedWebAudioUnsupported = false;
        /**
         * Gets whether or not mp3 are supported by your browser.
         */
        this.isMP3supported = false;
        /**
         * Gets whether or not ogg are supported by your browser.
         */
        this.isOGGsupported = false;
        /**
         * Gets whether audio has been unlocked on the device.
         * Some Browsers have strong restrictions about Audio and won't autoplay unless
         * a user interaction has happened.
         */
        this.unlocked = false;
        /**
         * Event raised when audio has been unlocked on the browser.
         */
        this.onAudioUnlockedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        /**
         * Event raised when audio has been locked on the browser.
         */
        this.onAudioLockedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
        const v2 = new _AudioV2_webAudio_webAudioEngine__WEBPACK_IMPORTED_MODULE_0__._WebAudioEngine({
            audioContext: audioContext ? audioContext : undefined,
            defaultUIParentElement: hostElement?.parentElement ? hostElement.parentElement : undefined,
        });
        // Historically the unmute button is disabled until a sound tries to play and can't, which results in a call
        // to `AudioEngine.lock()`, which is where the unmute button is enabled if no custom UI is requested.
        v2._unmuteUIEnabled = false;
        this._masterGain = new GainNode(v2._audioContext);
        v2._audioDestination = audioDestination;
        v2.stateChangedObservable.add((state) => {
            if (state === "running") {
                this.unlocked = true;
                this.onAudioUnlockedObservable.notifyObservers(this);
            }
            else {
                this.unlocked = false;
                this.onAudioLockedObservable.notifyObservers(this);
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        v2._initAsync({ resumeOnInteraction: false }).then(() => {
            const mainBusOutNode = v2.defaultMainBus._outNode;
            if (mainBusOutNode) {
                mainBusOutNode.disconnect(v2.mainOut._inNode);
                mainBusOutNode.connect(this._masterGain);
            }
            v2.mainOut._inNode = this._masterGain;
            v2.stateChangedObservable.notifyObservers(v2.state);
        });
        this.isMP3supported = v2.isFormatValid("mp3");
        this.isOGGsupported = v2.isFormatValid("ogg");
        this._v2 = v2;
    }
    /**
     * Flags the audio engine in Locked state.
     * This happens due to new browser policies preventing audio to autoplay.
     */
    lock() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._v2._audioContext.suspend();
        if (!this._useCustomUnlockedButton) {
            this._v2._unmuteUIEnabled = true;
        }
    }
    /**
     * Unlocks the audio engine once a user action has been done on the dom.
     * This is helpful to resume play once browser policies have been satisfied.
     */
    unlock() {
        if (this._v2._audioContext?.state === "running") {
            if (!this.unlocked) {
                // Notify users that the audio stack is unlocked/unmuted
                this.unlocked = true;
                this.onAudioUnlockedObservable.notifyObservers(this);
            }
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._triggerRunningStateAsync();
    }
    /** @internal */
    _resumeAudioContextOnStateChange() {
        this._v2._audioContext?.addEventListener("statechange", () => {
            if (this.unlocked && this._v2._audioContext?.state !== "running") {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this._resumeAudioContextAsync();
            }
        }, {
            once: true,
            passive: true,
            signal: AbortSignal.timeout(3000),
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _resumeAudioContextAsync() {
        if (this._v2._isUsingOfflineAudioContext) {
            return Promise.resolve();
        }
        if (this._v2._audioContext.state === "suspended" && !this._useCustomUnlockedButton) {
            this._v2._unmuteUIEnabled = true;
        }
        return this._v2._audioContext.resume();
    }
    /**
     * Destroy and release the resources associated with the audio context.
     */
    dispose() {
        this._v2.dispose();
        this.onAudioUnlockedObservable.clear();
        this.onAudioLockedObservable.clear();
    }
    /**
     * Gets the global volume sets on the master gain.
     * @returns the global volume if set or -1 otherwise
     */
    getGlobalVolume() {
        return this.masterGain.gain.value;
    }
    /**
     * Sets the global volume of your experience (sets on the master gain).
     * @param newVolume Defines the new global volume of the application
     */
    setGlobalVolume(newVolume) {
        this.masterGain.gain.value = newVolume;
    }
    /**
     * Connect the audio engine to an audio analyser allowing some amazing
     * synchronization between the sounds/music and your visualization (VuMeter for instance).
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser
     * @param analyser The analyser to connect to the engine
     */
    connectToAnalyser(analyser) {
        if (this._connectedAnalyser) {
            this._connectedAnalyser.stopDebugCanvas();
        }
        this._connectedAnalyser = analyser;
        this.masterGain.disconnect();
        this._connectedAnalyser.connectAudioNodes(this.masterGain, this._v2._audioContext.destination);
    }
    async _triggerRunningStateAsync() {
        if (this._tryToRun) {
            void this._v2._audioContext.resume();
            return;
        }
        this._tryToRun = true;
        await this._resumeAudioContextAsync();
        this._tryToRun = false;
        this.unlocked = true;
        this.onAudioUnlockedObservable.notifyObservers(this);
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

/***/ "../core/dist/AudioV2/abstractAudio/abstractAudioNode.js":
/*!***************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractAudioNode.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAudioNode: () => (/* binding */ AbstractAudioNode),
/* harmony export */   AbstractNamedAudioNode: () => (/* binding */ AbstractNamedAudioNode),
/* harmony export */   AudioNodeType: () => (/* binding */ AudioNodeType)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/observable */ "../core/dist/Misc/observable.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


var AudioNodeType;
(function (AudioNodeType) {
    AudioNodeType[AudioNodeType["HAS_INPUTS"] = 1] = "HAS_INPUTS";
    AudioNodeType[AudioNodeType["HAS_OUTPUTS"] = 2] = "HAS_OUTPUTS";
    AudioNodeType[AudioNodeType["HAS_INPUTS_AND_OUTPUTS"] = 3] = "HAS_INPUTS_AND_OUTPUTS";
})(AudioNodeType || (AudioNodeType = {}));
/**
 * Abstract class for an audio node.
 *
 * An audio node is a processing unit that can receive audio data from an upstream node and/or send audio data to a
 * downstream node.
 *
 * Nodes can be connected to other nodes to create an audio graph. The audio graph represents the flow of audio data.
 *
 * There are 3 types of audio nodes:
 * 1. Input: Receives audio data from upstream nodes.
 * 2. Output: Sends audio data to downstream nodes.
 * 3. Input/Output: Receives audio data from upstream nodes and sends audio data to downstream nodes.
 */
class AbstractAudioNode {
    constructor(engine, nodeType) {
        /**
         * Observable for when the audio node is disposed.
         */
        this.onDisposeObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this.engine = engine;
        if (nodeType & 1 /* AudioNodeType.HAS_INPUTS */) {
            this._upstreamNodes = new Set();
        }
        if (nodeType & 2 /* AudioNodeType.HAS_OUTPUTS */) {
            this._downstreamNodes = new Set();
        }
    }
    /**
     * Releases associated resources.
     * - Triggers `onDisposeObservable`.
     * @see {@link onDisposeObservable}
     */
    dispose() {
        if (this._downstreamNodes) {
            for (const node of Array.from(this._downstreamNodes)) {
                if (!this._disconnect(node)) {
                    throw new Error("Disconnect failed");
                }
            }
            this._downstreamNodes.clear();
        }
        if (this._upstreamNodes) {
            for (const node of Array.from(this._upstreamNodes)) {
                if (!node._disconnect(this)) {
                    throw new Error("Disconnect failed");
                }
            }
            this._upstreamNodes.clear();
        }
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
    }
    /**
     * Connect to a downstream audio input node.
     * @param node - The downstream audio input node to connect
     * @returns `true` if the node is successfully connected; otherwise `false`
     */
    _connect(node) {
        if (!this._downstreamNodes) {
            return false;
        }
        if (this._downstreamNodes.has(node)) {
            return false;
        }
        if (!node._onConnect(this)) {
            return false;
        }
        this._downstreamNodes.add(node);
        return true;
    }
    /**
     * Disconnects a downstream audio input node.
     * @param node - The downstream audio input node to disconnect
     * @returns `true` if the node is successfully disconnected; otherwise `false`
     */
    _disconnect(node) {
        if (!this._downstreamNodes) {
            return false;
        }
        if (!this._downstreamNodes.delete(node)) {
            return false;
        }
        return node._onDisconnect(this);
    }
    /**
     * Called when an upstream audio output node is connecting.
     * @param node - The connecting upstream audio node
     * @returns `true` if the node is successfully connected; otherwise `false`
     */
    _onConnect(node) {
        if (!this._upstreamNodes) {
            return false;
        }
        if (this._upstreamNodes.has(node)) {
            return false;
        }
        this._upstreamNodes.add(node);
        return true;
    }
    /**
     * Called when an upstream audio output node disconnects.
     * @param node - The disconnecting upstream audio node
     * @returns `true` if node is sucessfully disconnected; otherwise `false`
     */
    _onDisconnect(node) {
        return this._upstreamNodes?.delete(node) ?? false;
    }
}
/**
 * Abstract class for a named audio node.
 */
class AbstractNamedAudioNode extends AbstractAudioNode {
    constructor(name, engine, nodeType) {
        super(engine, nodeType);
        /**
         * Observable for when the audio node is renamed.
         */
        this.onNameChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._name = name;
    }
    /**
     * The name of the audio node.
     * - Triggers `onNameChangedObservable` when changed.
     * @see {@link onNameChangedObservable}
     */
    get name() {
        return this._name;
    }
    set name(newName) {
        if (this._name === newName) {
            return;
        }
        const oldName = this._name;
        this._name = newName;
        this.onNameChangedObservable.notifyObservers({ newName, oldName, node: this });
    }
    dispose() {
        super.dispose();
        this.onNameChangedObservable.clear();
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

/***/ "../core/dist/AudioV2/abstractAudio/audioEngineV2.js":
/*!***********************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/audioEngineV2.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioEngineV2: () => (/* binding */ AudioEngineV2),
/* harmony export */   CreateAudioBusAsync: () => (/* binding */ CreateAudioBusAsync),
/* harmony export */   CreateMainAudioBusAsync: () => (/* binding */ CreateMainAudioBusAsync),
/* harmony export */   CreateMicrophoneSoundSourceAsync: () => (/* binding */ CreateMicrophoneSoundSourceAsync),
/* harmony export */   CreateSoundAsync: () => (/* binding */ CreateSoundAsync),
/* harmony export */   CreateSoundBufferAsync: () => (/* binding */ CreateSoundBufferAsync),
/* harmony export */   CreateSoundSourceAsync: () => (/* binding */ CreateSoundSourceAsync),
/* harmony export */   CreateStreamingSoundAsync: () => (/* binding */ CreateStreamingSoundAsync),
/* harmony export */   LastCreatedAudioEngine: () => (/* binding */ LastCreatedAudioEngine),
/* harmony export */   _GetAudioEngine: () => (/* binding */ _GetAudioEngine)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

const Instances = [];
/**
 * Gets the most recently created v2 audio engine.
 * @returns The most recently created v2 audio engine.
 */
function LastCreatedAudioEngine() {
    if (Instances.length === 0) {
        return null;
    }
    return Instances[Instances.length - 1];
}
/**
 * Abstract base class for v2 audio engines.
 *
 * A v2 audio engine based on the WebAudio API can be created with the {@link CreateAudioEngineAsync} function.
 */
class AudioEngineV2 {
    constructor(options) {
        /** Not owned, but all items should be in `_nodes` container, too, which is owned. */
        this._mainBuses = new Set();
        this._sounds = new Set();
        this._soundsArray = null;
        /** Owned top-level sound and bus nodes. */
        this._nodes = new Set();
        this._defaultMainBus = null;
        this._parameterRampDuration = 0.01;
        Instances.push(this);
        if (typeof options.parameterRampDuration === "number") {
            this.parameterRampDuration = options.parameterRampDuration;
        }
    }
    /**
     * The default main bus that will be used for audio buses and sounds if their `outBus` option is not set.
     * @see {@link IAudioBusOptions.outBus}
     * @see {@link IAbstractSoundOptions.outBus}
     */
    get defaultMainBus() {
        if (this._mainBuses.size === 0) {
            return null;
        }
        if (!this._defaultMainBus) {
            this._defaultMainBus = Array.from(this._mainBuses)[0];
        }
        return this._defaultMainBus;
    }
    /**
     * The smoothing duration to use when changing audio parameters, in seconds. Defaults to `0.01` (10 milliseconds).
     */
    get parameterRampDuration() {
        return this._parameterRampDuration;
    }
    set parameterRampDuration(value) {
        this._parameterRampDuration = Math.max(0, value);
    }
    /**
     * The list of static and streaming sounds created by the audio engine.
     */
    get sounds() {
        if (!this._soundsArray) {
            this._soundsArray = Array.from(this._sounds);
        }
        return this._soundsArray;
    }
    /**
     * Releases associated resources.
     */
    dispose() {
        if (Instances.includes(this)) {
            Instances.splice(Instances.indexOf(this), 1);
        }
        const nodeIt = this._nodes.values();
        for (let next = nodeIt.next(); !next.done; next = nodeIt.next()) {
            next.value.dispose();
        }
        this._mainBuses.clear();
        this._nodes.clear();
        this._sounds.clear();
        this._disposeSoundsArray();
        this._defaultMainBus = null;
    }
    /**
     * Unlocks the audio engine if it is locked.
     * - Note that the returned promise may already be resolved if the audio engine is already unlocked.
     * @returns A promise that is resolved when the audio engine is unlocked.
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    unlockAsync() {
        return this.resumeAsync();
    }
    _addMainBus(mainBus) {
        this._mainBuses.add(mainBus);
        this._addNode(mainBus);
    }
    _removeMainBus(mainBus) {
        this._mainBuses.delete(mainBus);
        this._defaultMainBus = null;
        this._removeNode(mainBus);
    }
    _addNode(node) {
        this._nodes.add(node);
    }
    _removeNode(node) {
        this._nodes.delete(node);
    }
    _addSound(sound) {
        this._disposeSoundsArray();
        this._sounds.add(sound);
        this._addNode(sound);
    }
    _removeSound(sound) {
        this._disposeSoundsArray();
        this._sounds.delete(sound);
        this._removeNode(sound);
    }
    _disposeSoundsArray() {
        if (this._soundsArray) {
            this._soundsArray.length = 0;
            this._soundsArray = null;
        }
    }
}
/**
 * @internal
 * @param engine - The given audio engine. If `null` then the last created audio engine is used.
 * @returns the given audio engine or the last created audio engine.
 * @throws An error if the resulting engine is `null`.
 */
function _GetAudioEngine(engine) {
    if (!engine) {
        engine = LastCreatedAudioEngine();
    }
    if (engine) {
        return engine;
    }
    throw new Error("No audio engine.");
}
/**
 * Creates a new audio bus.
 * @param name - The name of the audio bus.
 * @param options - The options to use when creating the audio bus.
 * @param engine - The audio engine.
 * @returns A promise that resolves with the created audio bus.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
function CreateAudioBusAsync(name, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createBusAsync(name, options);
}
/**
 * Creates a new main audio bus.
 * @param name - The name of the main audio bus.
 * @param options - The options to use when creating the main audio bus.
 * @param engine - The audio engine.
 * @returns A promise that resolves with the created main audio bus.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
function CreateMainAudioBusAsync(name, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createMainBusAsync(name, options);
}
/**
 * Creates a new microphone sound source.
 * @param name - The name of the sound.
 * @param options - The options for the sound source.
 * @param engine - The audio engine.
 * @returns A promise that resolves to the created sound source.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
function CreateMicrophoneSoundSourceAsync(name, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createMicrophoneSoundSourceAsync(name, options);
}
/**
 * Creates a new static sound.
 * @param name - The name of the sound.
 * @param source - The source of the sound.
 * @param options - The options for the static sound.
 * @param engine - The audio engine.
 * @returns A promise that resolves to the created static sound.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
function CreateSoundAsync(name, source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createSoundAsync(name, source, options);
}
/**
 * Creates a new static sound buffer.
 * @param source - The source of the sound buffer.
 * @param options - The options for the static sound buffer.
 * @param engine - The audio engine.
 * @returns A promise that resolves to the created static sound buffer.
 */
async function CreateSoundBufferAsync(source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return await engine.createSoundBufferAsync(source, options);
}
/**
 * Creates a new sound source.
 * @param name - The name of the sound.
 * @param source - The source of the sound.
 * @param options - The options for the sound source.
 * @param engine - The audio engine.
 * @returns A promise that resolves to the created sound source.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
function CreateSoundSourceAsync(name, source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createSoundSourceAsync(name, source, options);
}
/**
 * Creates a new streaming sound.
 * @param name - The name of the sound.
 * @param source - The source of the sound.
 * @param options - The options for the streaming sound.
 * @param engine - The audio engine.
 * @returns A promise that resolves to the created streaming sound.
 */
// eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
function CreateStreamingSoundAsync(name, source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createStreamingSoundAsync(name, source, options);
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

/***/ "../core/dist/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js":
/*!**************************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _SpatialAudioAttacherComponent: () => (/* binding */ _SpatialAudioAttacherComponent)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Provides a common interface for attaching an audio listener or source to a specific entity, ensuring only one entity
 * is attached at a time.
 * @internal
 */
class _SpatialAudioAttacherComponent {
    /** @internal */
    constructor(spatialAudioNode) {
        /** @internal */
        this._attachmentType = 3 /* SpatialAudioAttachmentType.PositionAndRotation */;
        this._position = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        this._rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        this._sceneNode = null;
        this._useBoundingBox = false;
        /**
         * Releases associated resources.
         */
        this.dispose = () => {
            this.detach();
        };
        this._spatialAudioNode = spatialAudioNode;
    }
    /**
     * Returns `true` if attached to a scene node; otherwise returns `false`.
     */
    get isAttached() {
        return this._sceneNode !== null;
    }
    /**
     * Attaches to a scene node.
     *
     * Detaches automatically before attaching to the given scene node.
     * If `sceneNode` is `null` it is the same as calling `detach()`.
     *
     * @param sceneNode The scene node to attach to, or `null` to detach.
     * @param useBoundingBox Whether to use the scene node's bounding box for positioning. Defaults to `false`.
     * @param attachmentType Whether to attach to the scene node's position and/or rotation. Defaults to `PositionAndRotation`.
     */
    attach(sceneNode, useBoundingBox, attachmentType) {
        if (this._sceneNode === sceneNode) {
            return;
        }
        this.detach();
        if (!sceneNode) {
            return;
        }
        this._attachmentType = attachmentType;
        this._sceneNode = sceneNode;
        this._sceneNode.onDisposeObservable.add(this.dispose);
        this._useBoundingBox = useBoundingBox;
    }
    /**
     * Detaches from the scene node if attached.
     */
    detach() {
        this._sceneNode?.onDisposeObservable.removeCallback(this.dispose);
        this._sceneNode = null;
    }
    /**
     * Updates the position and rotation of the associated audio engine object in the audio rendering graph.
     *
     * This is called automatically by default and only needs to be called manually if automatic updates are disabled.
     */
    update() {
        if (this._attachmentType & 1 /* SpatialAudioAttachmentType.Position */) {
            if (this._useBoundingBox && this._sceneNode.getBoundingInfo) {
                this._position.copyFrom(this._sceneNode.getBoundingInfo().boundingBox.centerWorld);
            }
            else {
                this._sceneNode?.getWorldMatrix().getTranslationToRef(this._position);
            }
            this._spatialAudioNode.position.copyFrom(this._position);
            this._spatialAudioNode._updatePosition();
        }
        if (this._attachmentType & 2 /* SpatialAudioAttachmentType.Rotation */) {
            this._sceneNode?.getWorldMatrix().decompose(undefined, this._rotationQuaternion);
            this._spatialAudioNode.rotationQuaternion.copyFrom(this._rotationQuaternion);
            this._spatialAudioNode._updateRotation();
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

/***/ "../core/dist/AudioV2/abstractAudio/mainAudioOut.js":
/*!**********************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/mainAudioOut.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _MainAudioOut: () => (/* binding */ _MainAudioOut)
/* harmony export */ });
/* harmony import */ var _abstractAudioNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class for the main audio output node.
 *
 * A main audio output is the last audio node in the audio graph before the audio is sent to the speakers.
 *
 * @see {@link AudioEngineV2.mainOut}
 * @internal
 */
class _MainAudioOut extends _abstractAudioNode__WEBPACK_IMPORTED_MODULE_0__.AbstractAudioNode {
    constructor(engine) {
        super(engine, 1 /* AudioNodeType.HAS_INPUTS */);
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js":
/*!****************************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSpatialAudioListener: () => (/* binding */ AbstractSpatialAudioListener),
/* harmony export */   _HasSpatialAudioListenerOptions: () => (/* binding */ _HasSpatialAudioListenerOptions),
/* harmony export */   _SpatialAudioListenerDefaults: () => (/* binding */ _SpatialAudioListenerDefaults)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


const _SpatialAudioListenerDefaults = {
    position: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(),
    rotation: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(),
    rotationQuaternion: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(),
};
/**
 * @param options The spatial audio listener options to check.
 * @returns `true` if spatial audio listener options are defined, otherwise `false`.
 */
function _HasSpatialAudioListenerOptions(options) {
    return (options.listenerEnabled ||
        options.listenerMinUpdateTime !== undefined ||
        options.listenerPosition !== undefined ||
        options.listenerRotation !== undefined ||
        options.listenerRotationQuaternion !== undefined);
}
/**
 * Abstract class representing the spatial audio `listener` property on an audio engine.
 *
 * @see {@link AudioEngineV2.listener}
 */
class AbstractSpatialAudioListener {
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/spatialAudioListener.js":
/*!********************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/spatialAudioListener.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _SpatialAudioListener: () => (/* binding */ _SpatialAudioListener)
/* harmony export */ });
/* harmony import */ var _components_spatialAudioAttacherComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/spatialAudioAttacherComponent */ "../core/dist/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js");
/* harmony import */ var _abstractSpatialAudioListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractSpatialAudioListener */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _SpatialAudioListener extends _abstractSpatialAudioListener__WEBPACK_IMPORTED_MODULE_1__.AbstractSpatialAudioListener {
    constructor() {
        super();
        this._attacherComponent = null;
        this._attacherComponent = new _components_spatialAudioAttacherComponent__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioAttacherComponent(this);
    }
    /** @internal */
    get isAttached() {
        return this._attacherComponent !== null && this._attacherComponent.isAttached;
    }
    /**
     * Attaches to a scene node.
     *
     * Detaches automatically before attaching to the given scene node.
     * If `sceneNode` is `null` it is the same as calling `detach()`.
     *
     * @param sceneNode The scene node to attach to, or `null` to detach.
     * @param useBoundingBox Whether to use the bounding box of the node for positioning. Defaults to `false`.
     * @param attachmentType Whether to attach to the node's position and/or rotation. Defaults to `PositionAndRotation`.
     */
    attach(sceneNode, useBoundingBox = false, attachmentType = 3 /* SpatialAudioAttachmentType.PositionAndRotation */) {
        if (!this._attacherComponent) {
            this._attacherComponent = new _components_spatialAudioAttacherComponent__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioAttacherComponent(this);
        }
        this._attacherComponent.attach(sceneNode, useBoundingBox, attachmentType);
    }
    /**
     * Detaches from the scene node if attached.
     */
    detach() {
        this._attacherComponent?.detach();
    }
    /** @internal */
    dispose() {
        this._attacherComponent?.dispose();
        this._attacherComponent = null;
    }
    /** @internal */
    setOptions(options) {
        if (options.listenerMinUpdateTime !== undefined) {
            this.minUpdateTime = options.listenerMinUpdateTime;
        }
        if (options.listenerPosition) {
            this.position = options.listenerPosition.clone();
        }
        if (options.listenerRotationQuaternion) {
            this.rotationQuaternion = options.listenerRotationQuaternion.clone();
        }
        else if (options.listenerRotation) {
            this.rotation = options.listenerRotation.clone();
        }
        else {
            this.rotationQuaternion = _abstractSpatialAudioListener__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioListenerDefaults.rotationQuaternion.clone();
        }
        this.update();
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

/***/ "../core/dist/AudioV2/audioUtils.js":
/*!******************************************!*\
  !*** ../core/dist/AudioV2/audioUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CleanUrl: () => (/* binding */ _CleanUrl),
/* harmony export */   _FileExtensionRegex: () => (/* binding */ _FileExtensionRegex),
/* harmony export */   _GetAudioParamCurveValues: () => (/* binding */ _GetAudioParamCurveValues)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

const _FileExtensionRegex = new RegExp("\\.(\\w{3,4})($|\\?)");
const CurveLength = 100;
const TmpLineValues = new Float32Array([0, 0]);
let TmpCurveValues = null;
let ExpCurve = null;
let LogCurve = null;
/**
 * @returns A Float32Array representing an exponential ramp from (0, 0) to (1, 1).
 */
function GetExpCurve() {
    if (!ExpCurve) {
        ExpCurve = new Float32Array(CurveLength);
        const increment = 1 / (CurveLength - 1);
        let x = increment;
        for (let i = 1; i < CurveLength; i++) {
            ExpCurve[i] = Math.exp(-11.512925464970227 * (1 - x));
            x += increment;
        }
    }
    return ExpCurve;
}
/**
 * @returns A Float32Array representing a logarithmic ramp from (0, 0) to (1, 1).
 */
function GetLogCurve() {
    if (!LogCurve) {
        LogCurve = new Float32Array(CurveLength);
        const increment = 1 / CurveLength;
        let x = increment;
        for (let i = 0; i < CurveLength; i++) {
            LogCurve[i] = 1 + Math.log10(x) / Math.log10(CurveLength);
            x += increment;
        }
    }
    return LogCurve;
}
/** @internal */
function _GetAudioParamCurveValues(shape, from, to) {
    if (!TmpCurveValues) {
        TmpCurveValues = new Float32Array(CurveLength);
    }
    let normalizedCurve;
    if (shape === "linear" /* AudioParameterRampShape.Linear */) {
        TmpLineValues[0] = from;
        TmpLineValues[1] = to;
        return TmpLineValues;
    }
    else if (shape === "exponential" /* AudioParameterRampShape.Exponential */) {
        normalizedCurve = GetExpCurve();
    }
    else if (shape === "logarithmic" /* AudioParameterRampShape.Logarithmic */) {
        normalizedCurve = GetLogCurve();
    }
    else {
        throw new Error(`Unknown ramp shape: ${shape}`);
    }
    const direction = Math.sign(to - from);
    const range = Math.abs(to - from);
    if (direction === 1) {
        for (let i = 0; i < normalizedCurve.length; i++) {
            TmpCurveValues[i] = from + range * normalizedCurve[i];
        }
    }
    else {
        let j = CurveLength - 1;
        for (let i = 0; i < normalizedCurve.length; i++, j--) {
            TmpCurveValues[i] = from - range * (1 - normalizedCurve[j]);
        }
    }
    return TmpCurveValues;
}
/** @internal */
function _CleanUrl(url) {
    return url.replace(/#/gm, "%23");
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

/***/ "../core/dist/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js":
/*!***********************************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _SpatialWebAudioUpdaterComponent: () => (/* binding */ _SpatialWebAudioUpdaterComponent)
/* harmony export */ });
/* harmony import */ var _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/precisionDate */ "../core/dist/Misc/precisionDate.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/** @internal */
class _SpatialWebAudioUpdaterComponent {
    /** @internal */
    constructor(parent, autoUpdate, minUpdateTime) {
        this._autoUpdate = true;
        this._lastUpdateTime = 0;
        /** @internal */
        this.minUpdateTime = 0;
        if (!autoUpdate) {
            return;
        }
        this.minUpdateTime = minUpdateTime;
        const update = () => {
            if (!this._autoUpdate) {
                return;
            }
            let skipUpdate = false;
            if (0 < this.minUpdateTime) {
                const now = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_0__.PrecisionDate.Now;
                if (this._lastUpdateTime && now - this._lastUpdateTime < this.minUpdateTime) {
                    skipUpdate = true;
                }
                this._lastUpdateTime = now;
            }
            if (!skipUpdate) {
                parent.update();
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }
    /** @internal */
    dispose() {
        this._autoUpdate = false;
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

/***/ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js":
/*!******************************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioParameterComponent: () => (/* binding */ _WebAudioParameterComponent)
/* harmony export */ });
/* harmony import */ var _audioUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../audioUtils */ "../core/dist/AudioV2/audioUtils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Minimum duration in seconds for a ramp to be considered valid.
 *
 * If the duration is less than this value, the value will be set immediately instead of being ramped smoothly since
 * there is no perceptual difference for such short durations, so a ramp is not needed.
 */
const MinRampDuration = 0.000001;
/** @internal */
class _WebAudioParameterComponent {
    /** @internal */
    constructor(engine, param) {
        this._rampEndTime = 0;
        this._engine = engine;
        this._param = param;
        this._targetValue = param.value;
    }
    /** @internal */
    get isRamping() {
        return this._engine.currentTime < this._rampEndTime;
    }
    /** @internal */
    get targetValue() {
        return this._targetValue;
    }
    set targetValue(value) {
        this.setTargetValue(value);
    }
    /** @internal */
    get value() {
        return this._param.value;
    }
    /** @internal */
    dispose() {
        this._param = null;
        this._engine = null;
    }
    /**
     * Sets the target value of the audio parameter with an optional ramping duration and shape.
     *
     * @internal
     */
    setTargetValue(value, options = null) {
        const shape = typeof options?.shape === "string" ? options.shape : "linear" /* AudioParameterRampShape.Linear */;
        const startTime = this._engine.currentTime;
        if (shape === "none" /* AudioParameterRampShape.None */) {
            this._param.cancelScheduledValues(0);
            this._param.value = this._targetValue = value;
            this._rampEndTime = startTime;
            return;
        }
        let duration = typeof options?.duration === "number" ? Math.max(options.duration, this._engine.parameterRampDuration) : this._engine.parameterRampDuration;
        if ((duration = Math.max(this._engine.parameterRampDuration, duration)) < MinRampDuration) {
            this._param.setValueAtTime((this._targetValue = value), startTime);
            return;
        }
        this._param.cancelScheduledValues(0);
        this._param.setValueCurveAtTime((0,_audioUtils__WEBPACK_IMPORTED_MODULE_0__._GetAudioParamCurveValues)(shape, this._param.value, (this._targetValue = value)), startTime, duration);
        this._rampEndTime = startTime + duration;
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

/***/ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudioListener.js":
/*!******************************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subProperties/spatialWebAudioListener.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CreateSpatialAudioListener: () => (/* binding */ _CreateSpatialAudioListener)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _abstractAudio_subProperties_spatialAudioListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subProperties/spatialAudioListener */ "../core/dist/AudioV2/abstractAudio/subProperties/spatialAudioListener.js");
/* harmony import */ var _components_spatialWebAudioUpdaterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/spatialWebAudioUpdaterComponent */ "../core/dist/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js");
/* harmony import */ var _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/webAudioParameterComponent */ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





const TmpMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Zero();
const TmpQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
const TmpVector1 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
const TmpVector2 = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
/** @internal */
function _CreateSpatialAudioListener(engine, autoUpdate, minUpdateTime) {
    const listener = engine._audioContext.listener;
    if (listener.forwardX &&
        listener.forwardY &&
        listener.forwardZ &&
        listener.positionX &&
        listener.positionY &&
        listener.positionZ &&
        listener.upX &&
        listener.upY &&
        listener.upZ) {
        return new _SpatialWebAudioListener(engine, autoUpdate, minUpdateTime);
    }
    else {
        return new _SpatialWebAudioListenerFallback(engine, autoUpdate, minUpdateTime);
    }
}
class _AbstractSpatialWebAudioListener extends _abstractAudio_subProperties_spatialAudioListener__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioListener {
    /** @internal */
    constructor(engine, autoUpdate, minUpdateTime) {
        super();
        this._lastPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastRotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastRotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        /** @internal */
        this.position = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /** @internal */
        this.rotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        /** @internal */
        this.rotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        this._listener = engine._audioContext.listener;
        this.engine = engine;
        this._updaterComponent = new _components_spatialWebAudioUpdaterComponent__WEBPACK_IMPORTED_MODULE_2__._SpatialWebAudioUpdaterComponent(this, autoUpdate, minUpdateTime);
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._updaterComponent.dispose();
        this._updaterComponent = null;
    }
    /** @internal */
    get minUpdateTime() {
        return this._updaterComponent.minUpdateTime;
    }
    /** @internal */
    set minUpdateTime(value) {
        this._updaterComponent.minUpdateTime = value;
    }
    /** @internal */
    update() {
        if (this.isAttached) {
            this._attacherComponent?.update();
        }
        else {
            this._updatePosition();
            this._updateRotation();
        }
    }
    _updatePosition() {
        if (this._lastPosition.equalsWithEpsilon(this.position)) {
            return;
        }
        this._setWebAudioPosition(this.position);
        this._lastPosition.copyFrom(this.position);
    }
    _updateRotation() {
        if (!this._lastRotationQuaternion.equalsWithEpsilon(this.rotationQuaternion)) {
            TmpQuaternion.copyFrom(this.rotationQuaternion);
            this._lastRotationQuaternion.copyFrom(this.rotationQuaternion);
        }
        else if (!this._lastRotation.equalsWithEpsilon(this.rotation)) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerAnglesToRef(this.rotation.x, this.rotation.y, this.rotation.z, TmpQuaternion);
            this._lastRotation.copyFrom(this.rotation);
        }
        else {
            return;
        }
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromQuaternionToRef(TmpQuaternion, TmpMatrix);
        // NB: The WebAudio API is right-handed.
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.RightHandedForwardReadOnly, TmpMatrix, TmpVector1);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), TmpMatrix, TmpVector2);
        this._setWebAudioOrientation(TmpVector1, TmpVector2);
    }
}
/**
 * Full-featured spatial audio listener for the Web Audio API.
 *
 * Used in browsers that support the `forwardX/Y/Z`, `positionX/Y/Z`, and `upX/Y/Z` properties on the AudioContext listener.
 *
 * NB: Firefox falls back to using this implementation.
 *
 * @see _SpatialWebAudioListenerFallback for the implementation used if only `setPosition` and `setOrientation` are available.
 *
 * NB: This sub property is not backed by a sub node and all properties are set directly on the audio context listener.
 *
 * @internal
 */
class _SpatialWebAudioListener extends _AbstractSpatialWebAudioListener {
    constructor(engine, autoUpdate, minUpdateTime) {
        super(engine, autoUpdate, minUpdateTime);
        const listener = engine._audioContext.listener;
        this._forwardX = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.forwardX);
        this._forwardY = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.forwardY);
        this._forwardZ = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.forwardZ);
        this._positionX = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.positionX);
        this._positionY = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.positionY);
        this._positionZ = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.positionZ);
        this._upX = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.upX);
        this._upY = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.upY);
        this._upZ = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, listener.upZ);
    }
    _setWebAudioPosition(position) {
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._positionX.isRamping || this._positionY.isRamping || this._positionZ.isRamping)) {
            return;
        }
        this._positionX.targetValue = position.x;
        this._positionY.targetValue = position.y;
        this._positionZ.targetValue = position.z;
    }
    _setWebAudioOrientation(forward, up) {
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached &&
            (this._forwardX.isRamping || this._forwardY.isRamping || this._forwardZ.isRamping || this._upX.isRamping || this._upY.isRamping || this._upZ.isRamping)) {
            return;
        }
        this._forwardX.targetValue = forward.x;
        this._forwardY.targetValue = forward.y;
        this._forwardZ.targetValue = forward.z;
        this._upX.targetValue = up.x;
        this._upY.targetValue = up.y;
        this._upZ.targetValue = up.z;
    }
}
/**
 * Fallback spatial audio listener for the Web Audio API.
 *
 * Used in browsers that do not support the `forwardX/Y/Z`, `positionX/Y/Z`, and `upX/Y/Z` properties on the
 * AudioContext listener.
 *
 * @see _SpatialWebAudioListener for the implementation used if the `forwardX/Y/Z`, `positionX/Y/Z`, and `upX/Y/Z`
 * properties are available.
 *
 * NB: This sub property is not backed by a sub node and all properties are set directly on the audio context listener.
 *
 * @internal
 */
class _SpatialWebAudioListenerFallback extends _AbstractSpatialWebAudioListener {
    _setWebAudioPosition(position) {
        this._listener.setPosition(position.x, position.y, position.z);
    }
    _setWebAudioOrientation(forward, up) {
        this._listener.setOrientation(forward.x, forward.y, forward.z, up.x, up.y, up.z);
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

/***/ "../core/dist/AudioV2/webAudio/webAudioEngine.js":
/*!*******************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioEngine.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateAudioEngineAsync: () => (/* binding */ CreateAudioEngineAsync),
/* harmony export */   _WebAudioEngine: () => (/* binding */ _WebAudioEngine)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _abstractAudio_audioEngineV2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractAudio/audioEngineV2 */ "../core/dist/AudioV2/abstractAudio/audioEngineV2.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudioListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractAudio/subProperties/abstractSpatialAudioListener */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js");
/* harmony import */ var _subProperties_spatialWebAudioListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subProperties/spatialWebAudioListener */ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudioListener.js");
/* harmony import */ var _webAudioMainOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webAudioMainOut */ "../core/dist/AudioV2/webAudio/webAudioMainOut.js");
/* harmony import */ var _webAudioUnmuteUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webAudioUnmuteUI */ "../core/dist/AudioV2/webAudio/webAudioUnmuteUI.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Creates a new v2 audio engine that uses the WebAudio API.
 * @param options - The options for creating the audio engine.
 * @returns A promise that resolves with the created audio engine.
 */
async function CreateAudioEngineAsync(options = {}) {
    const engine = new _WebAudioEngine(options);
    await engine._initAsync(options);
    return engine;
}
const FormatMimeTypes = {
    aac: "audio/aac",
    ac3: "audio/ac3",
    flac: "audio/flac",
    m4a: "audio/mp4",
    mp3: 'audio/mpeg; codecs="mp3"',
    mp4: "audio/mp4",
    ogg: 'audio/ogg; codecs="vorbis"',
    wav: "audio/wav",
    webm: 'audio/webm; codecs="vorbis"',
};
/** @internal */
class _WebAudioEngine extends _abstractAudio_audioEngineV2__WEBPACK_IMPORTED_MODULE_1__.AudioEngineV2 {
    /** @internal */
    constructor(options = {}) {
        super(options);
        this._audioContextStarted = false;
        this._destinationNode = null;
        this._invalidFormats = new Set();
        this._isUpdating = false;
        this._listener = null;
        this._listenerAutoUpdate = true;
        this._listenerMinUpdateTime = 0;
        this._pauseCalled = false;
        this._resumeOnInteraction = true;
        this._resumeOnPause = true;
        this._resumeOnPauseRetryInterval = 1000;
        this._resumeOnPauseTimerId = null;
        this._resumePromise = null;
        this._silentHtmlAudio = null;
        this._unmuteUI = null;
        this._updateObservable = null;
        this._validFormats = new Set();
        this._volume = 1;
        /** @internal */
        this._isUsingOfflineAudioContext = false;
        /** @internal */
        this.isReadyPromise = new Promise((resolve) => {
            this._resolveIsReadyPromise = resolve;
        });
        /** @internal */
        this.stateChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** @internal */
        this.userGestureObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._initAudioContextAsync = async () => {
            this._audioContext.addEventListener("statechange", this._onAudioContextStateChange);
            this._mainOut = new _webAudioMainOut__WEBPACK_IMPORTED_MODULE_4__._WebAudioMainOut(this);
            this._mainOut.volume = this._volume;
            await this.createMainBusAsync("default");
        };
        this._onAudioContextStateChange = () => {
            if (this.state === "running") {
                clearInterval(this._resumeOnPauseTimerId);
                this._audioContextStarted = true;
                this._resumePromise = null;
            }
            if (this.state === "suspended" || this.state === "interrupted") {
                if (this._audioContextStarted && this._resumeOnPause && !this._pauseCalled) {
                    clearInterval(this._resumeOnPauseTimerId);
                    this._resumeOnPauseTimerId = setInterval(() => {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        this.resumeAsync();
                    }, this._resumeOnPauseRetryInterval);
                }
            }
            this.stateChangedObservable.notifyObservers(this.state);
        };
        this._onUserGestureAsync = async () => {
            if (this._resumeOnInteraction) {
                await this._audioContext.resume();
            }
            // On iOS the ringer switch must be turned on for WebAudio to play.
            // This gets WebAudio to play with the ringer switch turned off by playing an HTMLAudioElement.
            if (!this._silentHtmlAudio) {
                this._silentHtmlAudio = document.createElement("audio");
                const audio = this._silentHtmlAudio;
                audio.controls = false;
                audio.preload = "auto";
                audio.loop = true;
                // Wave data for 0.0001 seconds of silence.
                audio.src = "data:audio/wav;base64,UklGRjAAAABXQVZFZm10IBAAAAABAAEAgLsAAAB3AQACABAAZGF0YQwAAAAAAAEA/v8CAP//AQA=";
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                audio.play();
            }
            this.userGestureObservable.notifyObservers();
        };
        this._startUpdating = () => {
            if (this._isUpdating) {
                return;
            }
            this._isUpdating = true;
            if (this.state === "running") {
                this._update();
            }
            else {
                const callback = () => {
                    if (this.state === "running") {
                        this._update();
                        this.stateChangedObservable.removeCallback(callback);
                    }
                };
                this.stateChangedObservable.add(callback);
            }
        };
        this._update = () => {
            if (this._updateObservable?.hasObservers()) {
                this._updateObservable.notifyObservers();
                requestAnimationFrame(this._update);
            }
            else {
                this._isUpdating = false;
            }
        };
        if (typeof options.listenerAutoUpdate === "boolean") {
            this._listenerAutoUpdate = options.listenerAutoUpdate;
        }
        if (typeof options.listenerMinUpdateTime === "number") {
            this._listenerMinUpdateTime = options.listenerMinUpdateTime;
        }
        this._volume = options.volume ?? 1;
        if (options.audioContext) {
            this._isUsingOfflineAudioContext = options.audioContext instanceof OfflineAudioContext;
            this._audioContext = options.audioContext;
        }
        else {
            this._audioContext = new AudioContext();
        }
        if (!options.disableDefaultUI) {
            this._unmuteUI = new _webAudioUnmuteUI__WEBPACK_IMPORTED_MODULE_5__._WebAudioUnmuteUI(this, options.defaultUIParentElement);
        }
    }
    /** @internal */
    async _initAsync(options) {
        this._resumeOnInteraction = typeof options.resumeOnInteraction === "boolean" ? options.resumeOnInteraction : true;
        this._resumeOnPause = typeof options.resumeOnPause === "boolean" ? options.resumeOnPause : true;
        this._resumeOnPauseRetryInterval = options.resumeOnPauseRetryInterval ?? 1000;
        document.addEventListener("click", this._onUserGestureAsync);
        await this._initAudioContextAsync();
        if ((0,_abstractAudio_subProperties_abstractSpatialAudioListener__WEBPACK_IMPORTED_MODULE_2__._HasSpatialAudioListenerOptions)(options)) {
            this._listener = (0,_subProperties_spatialWebAudioListener__WEBPACK_IMPORTED_MODULE_3__._CreateSpatialAudioListener)(this, this._listenerAutoUpdate, this._listenerMinUpdateTime);
            this._listener.setOptions(options);
        }
        this._resolveIsReadyPromise();
    }
    /** @internal */
    get currentTime() {
        return this._audioContext.currentTime ?? 0;
    }
    /** @internal */
    get _inNode() {
        return this._audioContext.destination;
    }
    /** @internal */
    get mainOut() {
        return this._mainOut;
    }
    /** @internal */
    get listener() {
        return this._listener ?? (this._listener = (0,_subProperties_spatialWebAudioListener__WEBPACK_IMPORTED_MODULE_3__._CreateSpatialAudioListener)(this, this._listenerAutoUpdate, this._listenerMinUpdateTime));
    }
    /** @internal */
    get state() {
        // Always return "running" for OfflineAudioContext so sound `play` calls work while the context is suspended.
        return this._isUsingOfflineAudioContext ? "running" : this._audioContext.state;
    }
    /** @internal */
    get volume() {
        return this._volume;
    }
    /** @internal */
    set volume(value) {
        if (this._volume === value) {
            return;
        }
        this._volume = value;
        if (this._mainOut) {
            this._mainOut.volume = value;
        }
    }
    /**
     * This property should only be used by the legacy audio engine.
     * @internal
     * */
    get _audioDestination() {
        return this._destinationNode ? this._destinationNode : (this._destinationNode = this._audioContext.destination);
    }
    set _audioDestination(value) {
        this._destinationNode = value;
    }
    /**
     * This property should only be used by the legacy audio engine.
     * @internal
     */
    get _unmuteUIEnabled() {
        return this._unmuteUI ? this._unmuteUI.enabled : false;
    }
    set _unmuteUIEnabled(value) {
        if (this._unmuteUI) {
            this._unmuteUI.enabled = value;
        }
    }
    /** @internal */
    async createBusAsync(name, options = {}) {
        const module = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_subProperties_stereoAudio_js-core_dist_AudioV2_webAudio_subNo-525cb1"), __webpack_require__.e("core_dist_AudioV2_webAudio_webAudioBus_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webAudioBus */ "../core/dist/AudioV2/webAudio/webAudioBus.js"));
        const bus = new module._WebAudioBus(name, this, options);
        await bus._initAsync(options);
        return bus;
    }
    /** @internal */
    async createMainBusAsync(name, options = {}) {
        const module = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"), __webpack_require__.e("core_dist_AudioV2_webAudio_webAudioMainBus_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webAudioMainBus */ "../core/dist/AudioV2/webAudio/webAudioMainBus.js"));
        const bus = new module._WebAudioMainBus(name, this);
        await bus._initAsync(options);
        return bus;
    }
    /** @internal */
    async createMicrophoneSoundSourceAsync(name, options) {
        let mediaStream;
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        }
        catch (e) {
            throw new Error("Unable to access microphone: " + e);
        }
        return await this.createSoundSourceAsync(name, new MediaStreamAudioSourceNode(this._audioContext, { mediaStream }), {
            outBusAutoDefault: false,
            ...options,
        });
    }
    /** @internal */
    async createSoundAsync(name, source, options = {}) {
        const module = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_subProperties_stereoAudio_js-core_dist_AudioV2_webAudio_subNo-525cb1"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractSound_js-core_dist_AudioV2_abstractAudio_abstractSoun-4d7f70"), __webpack_require__.e("core_dist_AudioV2_webAudio_webAudioStaticSound_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webAudioStaticSound */ "../core/dist/AudioV2/webAudio/webAudioStaticSound.js"));
        const sound = new module._WebAudioStaticSound(name, this, options);
        await sound._initAsync(source, options);
        return sound;
    }
    /** @internal */
    async createSoundBufferAsync(source, options = {}) {
        const module = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_subProperties_stereoAudio_js-core_dist_AudioV2_webAudio_subNo-525cb1"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractSound_js-core_dist_AudioV2_abstractAudio_abstractSoun-4d7f70"), __webpack_require__.e("core_dist_AudioV2_webAudio_webAudioStaticSound_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webAudioStaticSound */ "../core/dist/AudioV2/webAudio/webAudioStaticSound.js"));
        const soundBuffer = new module._WebAudioStaticSoundBuffer(this);
        await soundBuffer._initAsync(source, options);
        return soundBuffer;
    }
    /** @internal */
    async createSoundSourceAsync(name, source, options = {}) {
        const module = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_subProperties_stereoAudio_js-core_dist_AudioV2_webAudio_subNo-525cb1"), __webpack_require__.e("core_dist_AudioV2_webAudio_webAudioSoundSource_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webAudioSoundSource */ "../core/dist/AudioV2/webAudio/webAudioSoundSource.js"));
        const soundSource = new module._WebAudioSoundSource(name, source, this, options);
        await soundSource._initAsync(options);
        return soundSource;
    }
    /** @internal */
    async createStreamingSoundAsync(name, source, options = {}) {
        const module = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_subProperties_stereoAudio_js-core_dist_AudioV2_webAudio_subNo-525cb1"), __webpack_require__.e("core_dist_AudioV2_abstractAudio_abstractSound_js-core_dist_AudioV2_abstractAudio_abstractSoun-4d7f70"), __webpack_require__.e("core_dist_AudioV2_webAudio_webAudioStreamingSound_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webAudioStreamingSound */ "../core/dist/AudioV2/webAudio/webAudioStreamingSound.js"));
        const sound = new module._WebAudioStreamingSound(name, this, options);
        await sound._initAsync(source, options);
        return sound;
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._listener?.dispose();
        this._listener = null;
        // Note that OfflineAudioContext does not have a `close` method.
        if (this._audioContext.state !== "closed" && !this._isUsingOfflineAudioContext) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._audioContext.close();
        }
        document.removeEventListener("click", this._onUserGestureAsync);
        this._audioContext.removeEventListener("statechange", this._onAudioContextStateChange);
        this._silentHtmlAudio?.remove();
        this._updateObservable?.clear();
        this._updateObservable = null;
        this._unmuteUI?.dispose();
        this._unmuteUI = null;
        this.stateChangedObservable.clear();
    }
    /** @internal */
    flagInvalidFormat(format) {
        this._invalidFormats.add(format);
    }
    /** @internal */
    isFormatValid(format) {
        if (this._validFormats.has(format)) {
            return true;
        }
        if (this._invalidFormats.has(format)) {
            return false;
        }
        const mimeType = FormatMimeTypes[format];
        if (mimeType === undefined) {
            return false;
        }
        const audio = new Audio();
        if (audio.canPlayType(mimeType) === "") {
            this._invalidFormats.add(format);
            return false;
        }
        this._validFormats.add(format);
        return true;
    }
    /** @internal */
    async pauseAsync() {
        await this._audioContext.suspend();
        this._pauseCalled = true;
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    resumeAsync() {
        this._pauseCalled = false;
        if (this._resumePromise) {
            return this._resumePromise;
        }
        this._resumePromise = this._audioContext.resume();
        this.stateChangedObservable.notifyObservers(this.state);
        return this._resumePromise;
    }
    /** @internal */
    setVolume(value, options = null) {
        if (this._mainOut) {
            this._mainOut.setVolume(value, options);
        }
        else {
            throw new Error("Main output not initialized yet.");
        }
    }
    /** @internal */
    _addMainBus(mainBus) {
        super._addMainBus(mainBus);
    }
    /** @internal */
    _removeMainBus(mainBus) {
        super._removeMainBus(mainBus);
    }
    /** @internal */
    _addNode(node) {
        super._addNode(node);
    }
    /** @internal */
    _removeNode(node) {
        super._removeNode(node);
    }
    /** @internal */
    _addSound(sound) {
        super._addSound(sound);
    }
    /** @internal */
    _removeSound(sound) {
        super._removeSound(sound);
    }
    /** @internal */
    _addUpdateObserver(callback) {
        if (!this._updateObservable) {
            this._updateObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        }
        this._updateObservable.add(callback);
        this._startUpdating();
    }
    _removeUpdateObserver(callback) {
        if (this._updateObservable) {
            this._updateObservable.removeCallback(callback);
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

/***/ "../core/dist/AudioV2/webAudio/webAudioMainOut.js":
/*!********************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioMainOut.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioMainOut: () => (/* binding */ _WebAudioMainOut)
/* harmony export */ });
/* harmony import */ var _abstractAudio_mainAudioOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudio/mainAudioOut */ "../core/dist/AudioV2/abstractAudio/mainAudioOut.js");
/* harmony import */ var _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/webAudioParameterComponent */ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _WebAudioMainOut extends _abstractAudio_mainAudioOut__WEBPACK_IMPORTED_MODULE_0__._MainAudioOut {
    /** @internal */
    constructor(engine) {
        super(engine);
        this._setGainNode(new GainNode(engine._audioContext));
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._volume.dispose();
        this._gainNode.disconnect();
        this._destinationNode.disconnect();
    }
    /** @internal */
    get _inNode() {
        return this._gainNode;
    }
    set _inNode(value) {
        if (this._gainNode === value) {
            return;
        }
        this._setGainNode(value);
    }
    /** @internal */
    get volume() {
        return this._volume.targetValue;
    }
    /** @internal */
    set volume(value) {
        this._volume.targetValue = value;
    }
    get _destinationNode() {
        return this.engine._audioDestination;
    }
    /** @internal */
    getClassName() {
        return "_WebAudioMainOut";
    }
    /** @internal */
    setVolume(value, options = null) {
        this._volume.setTargetValue(value, options);
    }
    _setGainNode(gainNode) {
        if (this._gainNode === gainNode) {
            return;
        }
        this._gainNode?.disconnect();
        gainNode.connect(this._destinationNode);
        this._volume = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_1__._WebAudioParameterComponent(this.engine, gainNode.gain);
        this._gainNode = gainNode;
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

/***/ "../core/dist/AudioV2/webAudio/webAudioUnmuteUI.js":
/*!*********************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioUnmuteUI.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioUnmuteUI: () => (/* binding */ _WebAudioUnmuteUI)
/* harmony export */ });
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Adds a UI button that starts the audio engine's underlying audio context when the user presses it.
 * @internal
 */
class _WebAudioUnmuteUI {
    /** @internal */
    constructor(engine, parentElement) {
        this._button = null;
        this._enabled = true;
        this._style = null;
        this._onStateChanged = () => {
            if (!this._button) {
                return;
            }
            if (this._engine.state === "running") {
                this._hide();
            }
            else {
                this._show();
            }
        };
        this._engine = engine;
        const parent = parentElement || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_0__.EngineStore.LastCreatedEngine?.getInputElement()?.parentElement || document.body;
        const top = (parent?.offsetTop || 0) + 20;
        this._style = document.createElement("style");
        this._style.appendChild(document.createTextNode(`.babylonUnmute{position:absolute;top:${top}px;margin-left:20px;height:40px;width:60px;background-color:rgba(51,51,51,0.7);background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2239%22%20height%3D%2232%22%20viewBox%3D%220%200%2039%2032%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M9.625%2018.938l-0.031%200.016h-4.953q-0.016%200-0.031-0.016v-12.453q0-0.016%200.031-0.016h4.953q0.031%200%200.031%200.016v12.453zM12.125%207.688l8.719-8.703v27.453l-8.719-8.719-0.016-0.047v-9.938zM23.359%207.875l1.406-1.406%204.219%204.203%204.203-4.203%201.422%201.406-4.219%204.219%204.219%204.203-1.484%201.359-4.141-4.156-4.219%204.219-1.406-1.422%204.219-4.203z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");background-size:80%;background-repeat:no-repeat;background-position:center;background-position-y:4px;border:none;outline:none;transition:transform 0.125s ease-out;cursor:pointer;z-index:9999;}.babylonUnmute:hover{transform:scale(1.05)}`));
        document.head.appendChild(this._style);
        this._button = document.createElement("button");
        this._button.className = "babylonUnmute";
        this._button.id = "babylonUnmuteButton";
        this._button.addEventListener("click", () => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._engine.unlockAsync();
        });
        parent.appendChild(this._button);
        this._engine.stateChangedObservable.add(this._onStateChanged);
    }
    /** @internal */
    dispose() {
        this._button?.remove();
        this._button = null;
        this._style?.remove();
        this._style = null;
        this._engine.stateChangedObservable.removeCallback(this._onStateChanged);
    }
    /** @internal */
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
        if (value) {
            if (this._engine.state !== "running") {
                this._show();
            }
        }
        else {
            this._hide();
        }
    }
    _show() {
        if (!this._button || !this._enabled) {
            return;
        }
        this._button.style.display = "block";
    }
    _hide() {
        if (!this._button) {
            return;
        }
        this._button.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvX2F1ZGlvRW5naW5lX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXlCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7QUFNQTtBQUNBO0FBekZBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUkE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQXVCQTtBQUxBOztBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFOQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXNCQTs7OztBQUlBO0FBQ0E7QUFhQTtBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQThCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBb0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQThCQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0YkE7QUFRQTs7OztBQUlBO0FBQ0E7QUFTQTtBQUNBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBbURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcERBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBR0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFrREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBUEE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFHQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBa0JBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JOQTtBQU9BO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFnQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXNDQTtBQUNBO0FBQ0E7QUF2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUErVUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBN1pBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqaEJBO0FBRUE7QUFJQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUdBOzs7QUFHQTtBQUNBO0FBTUE7QUFDQTtBQU5BO0FBQ0E7QUFFQTtBQXlFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBL0VBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpby9hdWRpb0VuZ2luZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9hdWRpb0VuZ2luZVYyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL2NvbXBvbmVudHMvc3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vbWFpbkF1ZGlvT3V0LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9MaXN0ZW5lci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxBdWRpb0xpc3RlbmVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hdWRpb1V0aWxzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby9jb21wb25lbnRzL3NwYXRpYWxXZWJBdWRpb1VwZGF0ZXJDb21wb25lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL2NvbXBvbmVudHMvd2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1YlByb3BlcnRpZXMvc3BhdGlhbFdlYkF1ZGlvTGlzdGVuZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvRW5naW5lLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb01haW5PdXQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvVW5tdXRlVUkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4uL0F1ZGlvVjIvd2ViQXVkaW8vd2ViQXVkaW9FbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9NYWluQnVzIH0gZnJvbSBcIi4uL0F1ZGlvVjIvd2ViQXVkaW8vd2ViQXVkaW9NYWluQnVzXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcIi4uL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFuYWx5c2VyIH0gZnJvbSBcIi4vYW5hbHlzZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi9JbnRlcmZhY2VzL0lBdWRpb0VuZ2luZVwiO1xyXG5cclxuLy8gU2V0cyB0aGUgZGVmYXVsdCBhdWRpbyBlbmdpbmUgdG8gQmFieWxvbi5qc1xyXG5BYnN0cmFjdEVuZ2luZS5BdWRpb0VuZ2luZUZhY3RvcnkgPSAoXHJcbiAgICBob3N0RWxlbWVudDogTnVsbGFibGU8SFRNTEVsZW1lbnQ+LFxyXG4gICAgYXVkaW9Db250ZXh0OiBOdWxsYWJsZTxBdWRpb0NvbnRleHQ+LFxyXG4gICAgYXVkaW9EZXN0aW5hdGlvbjogTnVsbGFibGU8QXVkaW9EZXN0aW5hdGlvbk5vZGUgfCBNZWRpYVN0cmVhbUF1ZGlvRGVzdGluYXRpb25Ob2RlPlxyXG4pID0+IHtcclxuICAgIHJldHVybiBuZXcgQXVkaW9FbmdpbmUoaG9zdEVsZW1lbnQsIGF1ZGlvQ29udGV4dCwgYXVkaW9EZXN0aW5hdGlvbik7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyByZXByZXNlbnRzIHRoZSBkZWZhdWx0IGF1ZGlvIGVuZ2luZSB1c2VkIGluIGJhYnlsb24uXHJcbiAqIEl0IGlzIHJlc3BvbnNpYmxlIHRvIHBsYXksIHN5bmNocm9uaXplIGFuZCBhbmFseXNlIHNvdW5kcyB0aHJvdWdob3V0IHRoZSAgYXBwbGljYXRpb24uXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1ZGlvRW5naW5lIGltcGxlbWVudHMgSUF1ZGlvRW5naW5lIHtcclxuICAgIHByaXZhdGUgX21hc3RlckdhaW46IEdhaW5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdHJ5VG9SdW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3VzZUN1c3RvbVVubG9ja2VkQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgdGhlIGN1cnJlbnQgaG9zdCBzdXBwb3J0cyBXZWIgQXVkaW8gYW5kIHRodXMgY291bGQgY3JlYXRlIEF1ZGlvQ29udGV4dHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjYW5Vc2VXZWJBdWRpbzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWFzdGVyIGdhaW4gbm9kZSBkZWZpbmVzIHRoZSBnbG9iYWwgYXVkaW8gdm9sdW1lIG9mIHlvdXIgYXVkaW8gZW5naW5lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1hc3RlckdhaW4oKTogR2Fpbk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXN0ZXJHYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWFzdGVyR2Fpbih2YWx1ZTogR2Fpbk5vZGUpIHtcclxuICAgICAgICB0aGlzLl9tYXN0ZXJHYWluID0gdGhpcy5fdjIubWFpbk91dC5faW5Ob2RlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIEJhYnlsb24gc2hvdWxkIGVtaXQgYSB3YXJuaW5nIGlmIFdlYkF1ZGlvIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBXYXJuZWRXZWJBdWRpb1Vuc3VwcG9ydGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgb3Igbm90IG1wMyBhcmUgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzTVAzc3VwcG9ydGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgb3Igbm90IG9nZyBhcmUgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzT0dHc3VwcG9ydGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgYXVkaW8gaGFzIGJlZW4gdW5sb2NrZWQgb24gdGhlIGRldmljZS5cclxuICAgICAqIFNvbWUgQnJvd3NlcnMgaGF2ZSBzdHJvbmcgcmVzdHJpY3Rpb25zIGFib3V0IEF1ZGlvIGFuZCB3b24ndCBhdXRvcGxheSB1bmxlc3NcclxuICAgICAqIGEgdXNlciBpbnRlcmFjdGlvbiBoYXMgaGFwcGVuZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bmxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgYXVkaW8gZW5naW5lIHJlbGllcyBvbiBhIGN1c3RvbSB1bmxvY2tlZCBidXR0b24uXHJcbiAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBlbWJlZGRlZCBidXR0b24gd2lsbCBub3QgYmUgZGlzcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHVzZUN1c3RvbVVubG9ja2VkQnV0dG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VDdXN0b21VbmxvY2tlZEJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHVzZUN1c3RvbVVubG9ja2VkQnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlQ3VzdG9tVW5sb2NrZWRCdXR0b24gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl92Mi5fdW5tdXRlVUlFbmFibGVkID0gIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgcmFpc2VkIHdoZW4gYXVkaW8gaGFzIGJlZW4gdW5sb2NrZWQgb24gdGhlIGJyb3dzZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkF1ZGlvVW5sb2NrZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUF1ZGlvRW5naW5lPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgcmFpc2VkIHdoZW4gYXVkaW8gaGFzIGJlZW4gbG9ja2VkIG9uIHRoZSBicm93c2VyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25BdWRpb0xvY2tlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxJQXVkaW9FbmdpbmU+KCk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF92MjogX1dlYkF1ZGlvRW5naW5lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBBdWRpb0NvbnRleHQgaWYgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGF1ZGlvQ29udGV4dCgpOiBOdWxsYWJsZTxBdWRpb0NvbnRleHQ+IHtcclxuICAgICAgICBpZiAodGhpcy5fdjIuc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCB3YWl0IGZvciB0aGUgcHJvbWlzZSB0byB1bmxvY2suXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlclJ1bm5pbmdTdGF0ZUFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl92Mi5fYXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Nvbm5lY3RlZEFuYWx5c2VyOiBOdWxsYWJsZTxBbmFseXNlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBuZXcgYXVkaW8gZW5naW5lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBob3N0RWxlbWVudCBkZWZpbmVzIHRoZSBob3N0IGVsZW1lbnQgd2hlcmUgdG8gZGlzcGxheSB0aGUgbXV0ZSBpY29uIGlmIG5lY2Vzc2FyeVxyXG4gICAgICogQHBhcmFtIGF1ZGlvQ29udGV4dCBkZWZpbmVzIHRoZSBhdWRpbyBjb250ZXh0IHRvIGJlIHVzZWQgYnkgdGhlIGF1ZGlvIGVuZ2luZVxyXG4gICAgICogQHBhcmFtIGF1ZGlvRGVzdGluYXRpb24gZGVmaW5lcyB0aGUgYXVkaW8gZGVzdGluYXRpb24gbm9kZSB0byBiZSB1c2VkIGJ5IGF1ZGlvIGVuZ2luZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBob3N0RWxlbWVudDogTnVsbGFibGU8SFRNTEVsZW1lbnQ+ID0gbnVsbCxcclxuICAgICAgICBhdWRpb0NvbnRleHQ6IE51bGxhYmxlPEF1ZGlvQ29udGV4dD4gPSBudWxsLFxyXG4gICAgICAgIGF1ZGlvRGVzdGluYXRpb246IE51bGxhYmxlPEF1ZGlvRGVzdGluYXRpb25Ob2RlIHwgTWVkaWFTdHJlYW1BdWRpb0Rlc3RpbmF0aW9uTm9kZT4gPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCB2MiA9IG5ldyBfV2ViQXVkaW9FbmdpbmUoe1xyXG4gICAgICAgICAgICBhdWRpb0NvbnRleHQ6IGF1ZGlvQ29udGV4dCA/IGF1ZGlvQ29udGV4dCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZGVmYXVsdFVJUGFyZW50RWxlbWVudDogaG9zdEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQgPyBob3N0RWxlbWVudC5wYXJlbnRFbGVtZW50IDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBIaXN0b3JpY2FsbHkgdGhlIHVubXV0ZSBidXR0b24gaXMgZGlzYWJsZWQgdW50aWwgYSBzb3VuZCB0cmllcyB0byBwbGF5IGFuZCBjYW4ndCwgd2hpY2ggcmVzdWx0cyBpbiBhIGNhbGxcclxuICAgICAgICAvLyB0byBgQXVkaW9FbmdpbmUubG9jaygpYCwgd2hpY2ggaXMgd2hlcmUgdGhlIHVubXV0ZSBidXR0b24gaXMgZW5hYmxlZCBpZiBubyBjdXN0b20gVUkgaXMgcmVxdWVzdGVkLlxyXG4gICAgICAgIHYyLl91bm11dGVVSUVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFzdGVyR2FpbiA9IG5ldyBHYWluTm9kZSh2Mi5fYXVkaW9Db250ZXh0KTtcclxuICAgICAgICB2Mi5fYXVkaW9EZXN0aW5hdGlvbiA9IGF1ZGlvRGVzdGluYXRpb247XHJcblxyXG4gICAgICAgIHYyLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUuYWRkKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25BdWRpb1VubG9ja2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXVkaW9Mb2NrZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHYyLl9pbml0QXN5bmMoeyByZXN1bWVPbkludGVyYWN0aW9uOiBmYWxzZSB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkJ1c091dE5vZGUgPSAodjIuZGVmYXVsdE1haW5CdXMgYXMgX1dlYkF1ZGlvTWFpbkJ1cykuX291dE5vZGU7XHJcbiAgICAgICAgICAgIGlmIChtYWluQnVzT3V0Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbWFpbkJ1c091dE5vZGUuZGlzY29ubmVjdCh2Mi5tYWluT3V0Ll9pbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbWFpbkJ1c091dE5vZGUuY29ubmVjdCh0aGlzLl9tYXN0ZXJHYWluKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdjIubWFpbk91dC5faW5Ob2RlID0gdGhpcy5fbWFzdGVyR2FpbjtcclxuICAgICAgICAgICAgdjIuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModjIuc3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmlzTVAzc3VwcG9ydGVkID0gdjIuaXNGb3JtYXRWYWxpZChcIm1wM1wiKTtcclxuICAgICAgICB0aGlzLmlzT0dHc3VwcG9ydGVkID0gdjIuaXNGb3JtYXRWYWxpZChcIm9nZ1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdjIgPSB2MjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsYWdzIHRoZSBhdWRpbyBlbmdpbmUgaW4gTG9ja2VkIHN0YXRlLlxyXG4gICAgICogVGhpcyBoYXBwZW5zIGR1ZSB0byBuZXcgYnJvd3NlciBwb2xpY2llcyBwcmV2ZW50aW5nIGF1ZGlvIHRvIGF1dG9wbGF5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9jaygpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy5fdjIuX2F1ZGlvQ29udGV4dC5zdXNwZW5kKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fdXNlQ3VzdG9tVW5sb2NrZWRCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5fdjIuX3VubXV0ZVVJRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5sb2NrcyB0aGUgYXVkaW8gZW5naW5lIG9uY2UgYSB1c2VyIGFjdGlvbiBoYXMgYmVlbiBkb25lIG9uIHRoZSBkb20uXHJcbiAgICAgKiBUaGlzIGlzIGhlbHBmdWwgdG8gcmVzdW1lIHBsYXkgb25jZSBicm93c2VyIHBvbGljaWVzIGhhdmUgYmVlbiBzYXRpc2ZpZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bmxvY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3YyLl9hdWRpb0NvbnRleHQ/LnN0YXRlID09PSBcInJ1bm5pbmdcIikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudW5sb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGlmeSB1c2VycyB0aGF0IHRoZSBhdWRpbyBzdGFjayBpcyB1bmxvY2tlZC91bm11dGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25BdWRpb1VubG9ja2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLl90cmlnZ2VyUnVubmluZ1N0YXRlQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3Jlc3VtZUF1ZGlvQ29udGV4dE9uU3RhdGVDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdjIuX2F1ZGlvQ29udGV4dD8uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJzdGF0ZWNoYW5nZVwiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bmxvY2tlZCAmJiB0aGlzLl92Mi5fYXVkaW9Db250ZXh0Py5zdGF0ZSAhPT0gXCJydW5uaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzdW1lQXVkaW9Db250ZXh0QXN5bmMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IEFib3J0U2lnbmFsLnRpbWVvdXQoMzAwMCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX3Jlc3VtZUF1ZGlvQ29udGV4dEFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLl92Mi5faXNVc2luZ09mZmxpbmVBdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3YyLl9hdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIgJiYgIXRoaXMuX3VzZUN1c3RvbVVubG9ja2VkQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3YyLl91bm11dGVVSUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3YyLl9hdWRpb0NvbnRleHQucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IGFuZCByZWxlYXNlIHRoZSByZXNvdXJjZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBhdWRpbyBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl92Mi5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25BdWRpb1VubG9ja2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25BdWRpb0xvY2tlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGdsb2JhbCB2b2x1bWUgc2V0cyBvbiB0aGUgbWFzdGVyIGdhaW4uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZ2xvYmFsIHZvbHVtZSBpZiBzZXQgb3IgLTEgb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRHbG9iYWxWb2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXN0ZXJHYWluLmdhaW4udmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnbG9iYWwgdm9sdW1lIG9mIHlvdXIgZXhwZXJpZW5jZSAoc2V0cyBvbiB0aGUgbWFzdGVyIGdhaW4pLlxyXG4gICAgICogQHBhcmFtIG5ld1ZvbHVtZSBEZWZpbmVzIHRoZSBuZXcgZ2xvYmFsIHZvbHVtZSBvZiB0aGUgYXBwbGljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEdsb2JhbFZvbHVtZShuZXdWb2x1bWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFzdGVyR2Fpbi5nYWluLnZhbHVlID0gbmV3Vm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdCB0aGUgYXVkaW8gZW5naW5lIHRvIGFuIGF1ZGlvIGFuYWx5c2VyIGFsbG93aW5nIHNvbWUgYW1hemluZ1xyXG4gICAgICogc3luY2hyb25pemF0aW9uIGJldHdlZW4gdGhlIHNvdW5kcy9tdXNpYyBhbmQgeW91ciB2aXN1YWxpemF0aW9uIChWdU1ldGVyIGZvciBpbnN0YW5jZSkuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjdXNpbmctdGhlLWFuYWx5c2VyXHJcbiAgICAgKiBAcGFyYW0gYW5hbHlzZXIgVGhlIGFuYWx5c2VyIHRvIGNvbm5lY3QgdG8gdGhlIGVuZ2luZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29ubmVjdFRvQW5hbHlzZXIoYW5hbHlzZXI6IEFuYWx5c2VyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyLnN0b3BEZWJ1Z0NhbnZhcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkQW5hbHlzZXIgPSBhbmFseXNlcjtcclxuICAgICAgICB0aGlzLm1hc3RlckdhaW4uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyLmNvbm5lY3RBdWRpb05vZGVzKHRoaXMubWFzdGVyR2FpbiwgdGhpcy5fdjIuX2F1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfdHJpZ2dlclJ1bm5pbmdTdGF0ZUFzeW5jKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90cnlUb1J1bikge1xyXG4gICAgICAgICAgICB2b2lkIHRoaXMuX3YyLl9hdWRpb0NvbnRleHQucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdHJ5VG9SdW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9yZXN1bWVBdWRpb0NvbnRleHRBc3luYygpO1xyXG5cclxuICAgICAgICB0aGlzLl90cnlUb1J1biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5sb2NrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm9uQXVkaW9VbmxvY2tlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEF1ZGlvTm9kZVR5cGUge1xuICAgIEhBU19JTlBVVFMgPSAxLFxuICAgIEhBU19PVVRQVVRTID0gMixcbiAgICBIQVNfSU5QVVRTX0FORF9PVVRQVVRTID0gMyxcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgYW4gYXVkaW8gbm9kZS5cbiAqXG4gKiBBbiBhdWRpbyBub2RlIGlzIGEgcHJvY2Vzc2luZyB1bml0IHRoYXQgY2FuIHJlY2VpdmUgYXVkaW8gZGF0YSBmcm9tIGFuIHVwc3RyZWFtIG5vZGUgYW5kL29yIHNlbmQgYXVkaW8gZGF0YSB0byBhXG4gKiBkb3duc3RyZWFtIG5vZGUuXG4gKlxuICogTm9kZXMgY2FuIGJlIGNvbm5lY3RlZCB0byBvdGhlciBub2RlcyB0byBjcmVhdGUgYW4gYXVkaW8gZ3JhcGguIFRoZSBhdWRpbyBncmFwaCByZXByZXNlbnRzIHRoZSBmbG93IG9mIGF1ZGlvIGRhdGEuXG4gKlxuICogVGhlcmUgYXJlIDMgdHlwZXMgb2YgYXVkaW8gbm9kZXM6XG4gKiAxLiBJbnB1dDogUmVjZWl2ZXMgYXVkaW8gZGF0YSBmcm9tIHVwc3RyZWFtIG5vZGVzLlxuICogMi4gT3V0cHV0OiBTZW5kcyBhdWRpbyBkYXRhIHRvIGRvd25zdHJlYW0gbm9kZXMuXG4gKiAzLiBJbnB1dC9PdXRwdXQ6IFJlY2VpdmVzIGF1ZGlvIGRhdGEgZnJvbSB1cHN0cmVhbSBub2RlcyBhbmQgc2VuZHMgYXVkaW8gZGF0YSB0byBkb3duc3RyZWFtIG5vZGVzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBdWRpb05vZGUge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb25uZWN0ZWQgZG93bnN0cmVhbSBhdWRpbyBub2Rlcy5cbiAgICAgKiAtIFVuZGVmaW5lZCBmb3IgaW5wdXQgbm9kZXMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9kb3duc3RyZWFtTm9kZXM/OiBTZXQ8QWJzdHJhY3RBdWRpb05vZGU+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbm5lY3RlZCB1cHN0cmVhbSBhdWRpbyBub2Rlcy5cbiAgICAgKiAtIFVuZGVmaW5lZCBmb3Igb3V0cHV0IG5vZGVzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWFkb25seSBfdXBzdHJlYW1Ob2Rlcz86IFNldDxBYnN0cmFjdEF1ZGlvTm9kZT47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXVkaW8gZW5naW5lIHRoaXMgbm9kZSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBlbmdpbmU6IEF1ZGlvRW5naW5lVjI7XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZhYmxlIGZvciB3aGVuIHRoZSBhdWRpbyBub2RlIGlzIGRpc3Bvc2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvbkRpc3Bvc2VPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QWJzdHJhY3RBdWRpb05vZGU+KCk7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBub2RlVHlwZTogQXVkaW9Ob2RlVHlwZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcblxuICAgICAgICBpZiAobm9kZVR5cGUgJiBBdWRpb05vZGVUeXBlLkhBU19JTlBVVFMpIHtcbiAgICAgICAgICAgIHRoaXMuX3Vwc3RyZWFtTm9kZXMgPSBuZXcgU2V0PEFic3RyYWN0QXVkaW9Ob2RlPigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGVUeXBlICYgQXVkaW9Ob2RlVHlwZS5IQVNfT1VUUFVUUykge1xuICAgICAgICAgICAgdGhpcy5fZG93bnN0cmVhbU5vZGVzID0gbmV3IFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxuICAgICAqIC0gVHJpZ2dlcnMgYG9uRGlzcG9zZU9ic2VydmFibGVgLlxuICAgICAqIEBzZWUge0BsaW5rIG9uRGlzcG9zZU9ic2VydmFibGV9XG4gICAgICovXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9kb3duc3RyZWFtTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBBcnJheS5mcm9tKHRoaXMuX2Rvd25zdHJlYW1Ob2RlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc2Nvbm5lY3Qobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZG93bnN0cmVhbU5vZGVzLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fdXBzdHJlYW1Ob2Rlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIEFycmF5LmZyb20odGhpcy5fdXBzdHJlYW1Ob2RlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuX2Rpc2Nvbm5lY3QodGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBzdHJlYW1Ob2Rlcy5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHN0cmluZyBpZGVudGlmeWluZyB0aGUgbmFtZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MncyBuYW1lIGFzIGEgc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldENsYXNzTmFtZSgpOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0IHRvIGEgZG93bnN0cmVhbSBhdWRpbyBpbnB1dCBub2RlLlxuICAgICAqIEBwYXJhbSBub2RlIC0gVGhlIGRvd25zdHJlYW0gYXVkaW8gaW5wdXQgbm9kZSB0byBjb25uZWN0XG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGlzIHN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQ7IG90aGVyd2lzZSBgZmFsc2VgXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9jb25uZWN0KG5vZGU6IEFic3RyYWN0QXVkaW9Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5fZG93bnN0cmVhbU5vZGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZG93bnN0cmVhbU5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFub2RlLl9vbkNvbm5lY3QodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Rvd25zdHJlYW1Ob2Rlcy5hZGQobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgYSBkb3duc3RyZWFtIGF1ZGlvIGlucHV0IG5vZGUuXG4gICAgICogQHBhcmFtIG5vZGUgLSBUaGUgZG93bnN0cmVhbSBhdWRpbyBpbnB1dCBub2RlIHRvIGRpc2Nvbm5lY3RcbiAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaXMgc3VjY2Vzc2Z1bGx5IGRpc2Nvbm5lY3RlZDsgb3RoZXJ3aXNlIGBmYWxzZWBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2Rpc2Nvbm5lY3Qobm9kZTogQWJzdHJhY3RBdWRpb05vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kb3duc3RyZWFtTm9kZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZG93bnN0cmVhbU5vZGVzLmRlbGV0ZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGUuX29uRGlzY29ubmVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhbiB1cHN0cmVhbSBhdWRpbyBvdXRwdXQgbm9kZSBpcyBjb25uZWN0aW5nLlxuICAgICAqIEBwYXJhbSBub2RlIC0gVGhlIGNvbm5lY3RpbmcgdXBzdHJlYW0gYXVkaW8gbm9kZVxuICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbm9kZSBpcyBzdWNjZXNzZnVsbHkgY29ubmVjdGVkOyBvdGhlcndpc2UgYGZhbHNlYFxuICAgICAqL1xuICAgIHByaXZhdGUgX29uQ29ubmVjdChub2RlOiBBYnN0cmFjdEF1ZGlvTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuX3Vwc3RyZWFtTm9kZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl91cHN0cmVhbU5vZGVzLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXBzdHJlYW1Ob2Rlcy5hZGQobm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYW4gdXBzdHJlYW0gYXVkaW8gb3V0cHV0IG5vZGUgZGlzY29ubmVjdHMuXG4gICAgICogQHBhcmFtIG5vZGUgLSBUaGUgZGlzY29ubmVjdGluZyB1cHN0cmVhbSBhdWRpbyBub2RlXG4gICAgICogQHJldHVybnMgYHRydWVgIGlmIG5vZGUgaXMgc3VjZXNzZnVsbHkgZGlzY29ubmVjdGVkOyBvdGhlcndpc2UgYGZhbHNlYFxuICAgICAqL1xuICAgIHByaXZhdGUgX29uRGlzY29ubmVjdChub2RlOiBBYnN0cmFjdEF1ZGlvTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXBzdHJlYW1Ob2Rlcz8uZGVsZXRlKG5vZGUpID8/IGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgYSBuYW1lZCBhdWRpbyBub2RlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSBleHRlbmRzIEFic3RyYWN0QXVkaW9Ob2RlIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZhYmxlIGZvciB3aGVuIHRoZSBhdWRpbyBub2RlIGlzIHJlbmFtZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG9uTmFtZUNoYW5nZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8eyBuZXdOYW1lOiBzdHJpbmc7IG9sZE5hbWU6IHN0cmluZzsgbm9kZTogQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSB9PigpO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBub2RlVHlwZTogQXVkaW9Ob2RlVHlwZSkge1xuICAgICAgICBzdXBlcihlbmdpbmUsIG5vZGVUeXBlKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgYXVkaW8gbm9kZS5cbiAgICAgKiAtIFRyaWdnZXJzIGBvbk5hbWVDaGFuZ2VkT2JzZXJ2YWJsZWAgd2hlbiBjaGFuZ2VkLlxuICAgICAqIEBzZWUge0BsaW5rIG9uTmFtZUNoYW5nZWRPYnNlcnZhYmxlfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lID09PSBuZXdOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvbGROYW1lID0gdGhpcy5fbmFtZTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcblxuICAgICAgICB0aGlzLm9uTmFtZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IG5ld05hbWUsIG9sZE5hbWUsIG5vZGU6IHRoaXMgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLm9uTmFtZUNoYW5nZWRPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucyB9IGZyb20gXCIuLi9hdWRpb1BhcmFtZXRlclwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvTm9kZSwgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U291bmQgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U291bmRTb3VyY2UsIElTb3VuZFNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvQnVzLCBJQXVkaW9CdXNPcHRpb25zIH0gZnJvbSBcIi4vYXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgSU1haW5BdWRpb0J1c09wdGlvbnMsIE1haW5BdWRpb0J1cyB9IGZyb20gXCIuL21haW5BdWRpb0J1c1wiO1xuaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRPcHRpb25zLCBTdGF0aWNTb3VuZCB9IGZyb20gXCIuL3N0YXRpY1NvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnMsIFN0YXRpY1NvdW5kQnVmZmVyIH0gZnJvbSBcIi4vc3RhdGljU291bmRCdWZmZXJcIjtcbmltcG9ydCB0eXBlIHsgSVN0cmVhbWluZ1NvdW5kT3B0aW9ucywgU3RyZWFtaW5nU291bmQgfSBmcm9tIFwiLi9zdHJlYW1pbmdTb3VuZFwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyLCBJU3BhdGlhbEF1ZGlvTGlzdGVuZXJPcHRpb25zIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyXCI7XG5cbmNvbnN0IEluc3RhbmNlczogQXVkaW9FbmdpbmVWMltdID0gW107XG5cbi8qKlxuICogR2V0cyB0aGUgbW9zdCByZWNlbnRseSBjcmVhdGVkIHYyIGF1ZGlvIGVuZ2luZS5cbiAqIEByZXR1cm5zIFRoZSBtb3N0IHJlY2VudGx5IGNyZWF0ZWQgdjIgYXVkaW8gZW5naW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTGFzdENyZWF0ZWRBdWRpb0VuZ2luZSgpOiBOdWxsYWJsZTxBdWRpb0VuZ2luZVYyPiB7XG4gICAgaWYgKEluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIEluc3RhbmNlc1tJbnN0YW5jZXMubGVuZ3RoIC0gMV07XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSB2MiBhdWRpbyBlbmdpbmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUF1ZGlvRW5naW5lVjJPcHRpb25zIGV4dGVuZHMgSVNwYXRpYWxBdWRpb0xpc3RlbmVyT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIHNtb290aGluZyBkdXJhdGlvbiB0byB1c2Ugd2hlbiBjaGFuZ2luZyBhdWRpbyBwYXJhbWV0ZXJzLCBpbiBzZWNvbmRzLiBEZWZhdWx0cyB0byBgMC4wMWAgKDEwIG1pbGxpc2Vjb25kcykuXG4gICAgICovXG4gICAgcGFyYW1ldGVyUmFtcER1cmF0aW9uOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgb3V0cHV0IHZvbHVtZSBvZiB0aGUgYXVkaW8gZW5naW5lLiBEZWZhdWx0cyB0byBgMWAuXG4gICAgICovXG4gICAgdm9sdW1lOiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhlIHN0YXRlIG9mIGEgdjIgYXVkaW8gZW5naW5lLlxuICogQHNlZSB7QGxpbmsgQXVkaW9FbmdpbmVWMi5zdGF0ZX1cbiAqL1xuZXhwb3J0IHR5cGUgQXVkaW9FbmdpbmVWMlN0YXRlID0gXCJjbG9zZWRcIiB8IFwiaW50ZXJydXB0ZWRcIiB8IFwicnVubmluZ1wiIHwgXCJzdXNwZW5kZWRcIjtcblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB2MiBhdWRpbyBlbmdpbmVzLlxuICpcbiAqIEEgdjIgYXVkaW8gZW5naW5lIGJhc2VkIG9uIHRoZSBXZWJBdWRpbyBBUEkgY2FuIGJlIGNyZWF0ZWQgd2l0aCB0aGUge0BsaW5rIENyZWF0ZUF1ZGlvRW5naW5lQXN5bmN9IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXVkaW9FbmdpbmVWMiB7XG4gICAgLyoqIE5vdCBvd25lZCwgYnV0IGFsbCBpdGVtcyBzaG91bGQgYmUgaW4gYF9ub2Rlc2AgY29udGFpbmVyLCB0b28sIHdoaWNoIGlzIG93bmVkLiAqL1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX21haW5CdXNlcyA9IG5ldyBTZXQ8TWFpbkF1ZGlvQnVzPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NvdW5kcyA9IG5ldyBTZXQ8QWJzdHJhY3RTb3VuZD4oKTtcbiAgICBwcml2YXRlIF9zb3VuZHNBcnJheTogTnVsbGFibGU8QXJyYXk8QWJzdHJhY3RTb3VuZD4+ID0gbnVsbDtcblxuICAgIC8qKiBPd25lZCB0b3AtbGV2ZWwgc291bmQgYW5kIGJ1cyBub2Rlcy4gKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2RlcyA9IG5ldyBTZXQ8QWJzdHJhY3ROYW1lZEF1ZGlvTm9kZT4oKTtcblxuICAgIHByaXZhdGUgX2RlZmF1bHRNYWluQnVzOiBOdWxsYWJsZTxNYWluQXVkaW9CdXM+ID0gbnVsbDtcblxuICAgIHByaXZhdGUgX3BhcmFtZXRlclJhbXBEdXJhdGlvbjogbnVtYmVyID0gMC4wMTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0VuZ2luZVYyT3B0aW9ucz4pIHtcbiAgICAgICAgSW5zdGFuY2VzLnB1c2godGhpcyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlclJhbXBEdXJhdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJSYW1wRHVyYXRpb24gPSBvcHRpb25zLnBhcmFtZXRlclJhbXBEdXJhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGFwc2VkIHRpbWUgc2luY2UgdGhlIGF1ZGlvIGVuZ2luZSB3YXMgc3RhcnRlZCwgaW4gc2Vjb25kcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgY3VycmVudFRpbWU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IG1haW4gYnVzIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBhdWRpbyBidXNlcyBhbmQgc291bmRzIGlmIHRoZWlyIGBvdXRCdXNgIG9wdGlvbiBpcyBub3Qgc2V0LlxuICAgICAqIEBzZWUge0BsaW5rIElBdWRpb0J1c09wdGlvbnMub3V0QnVzfVxuICAgICAqIEBzZWUge0BsaW5rIElBYnN0cmFjdFNvdW5kT3B0aW9ucy5vdXRCdXN9XG4gICAgICovXG4gICAgcHVibGljIGdldCBkZWZhdWx0TWFpbkJ1cygpOiBOdWxsYWJsZTxNYWluQXVkaW9CdXM+IHtcbiAgICAgICAgaWYgKHRoaXMuX21haW5CdXNlcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fZGVmYXVsdE1haW5CdXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRNYWluQnVzID0gQXJyYXkuZnJvbSh0aGlzLl9tYWluQnVzZXMpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRNYWluQnVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIGF1ZGlvIGxpc3RlbmVyIHByb3BlcnRpZXMgZm9yIHRoZSBhdWRpbyBlbmdpbmUuXG4gICAgICogLSBFYWNoIGF1ZGlvIGVuZ2luZSBoYXMgZXhhY3RseSBvbmUgbGlzdGVuZXIuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGxpc3RlbmVyOiBBYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gb3V0cHV0IG5vZGUuXG4gICAgICogLSBUaGlzIGlzIHRoZSBsYXN0IG5vZGUgaW4gdGhlIGF1ZGlvIGdyYXBoIGJlZm9yZSB0aGUgYXVkaW8gaXMgc2VudCB0byB0aGUgc3BlYWtlcnMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IG1haW5PdXQ6IEFic3RyYWN0QXVkaW9Ob2RlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGF1ZGlvIGVuZ2luZS5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICogLSBgXCJjbG9zZWRcImA6IFRoZSBhdWRpbyBlbmdpbmUgaGFzIGJlZW4gY2xvc2VkLlxuICAgICAqIC0gYFwiaW50ZXJydXB0ZWRcImA6IFRoZSBhdWRpbyBlbmdpbmUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgYW5kIGlzIG5vdCBydW5uaW5nLlxuICAgICAqIC0gYFwicnVubmluZ1wiYDogVGhlIGF1ZGlvIGVuZ2luZSBpcyBydW5uaW5nIG5vcm1hbGx5LlxuICAgICAqIC0gYFwic3VzcGVuZGVkXCJgOiBUaGUgYXVkaW8gZW5naW5lIGlzIHN1c3BlbmRlZCBhbmQgaXMgbm90IHJ1bm5pbmcuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHN0YXRlOiBBdWRpb0VuZ2luZVYyU3RhdGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IHZvbHVtZSBvZiB0aGUgYXVkaW8gZW5naW5lLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCB2b2x1bWU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzbW9vdGhpbmcgZHVyYXRpb24gdG8gdXNlIHdoZW4gY2hhbmdpbmcgYXVkaW8gcGFyYW1ldGVycywgaW4gc2Vjb25kcy4gRGVmYXVsdHMgdG8gYDAuMDFgICgxMCBtaWxsaXNlY29uZHMpLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcGFyYW1ldGVyUmFtcER1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJSYW1wRHVyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJhbWV0ZXJSYW1wRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wYXJhbWV0ZXJSYW1wRHVyYXRpb24gPSBNYXRoLm1heCgwLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2Ygc3RhdGljIGFuZCBzdHJlYW1pbmcgc291bmRzIGNyZWF0ZWQgYnkgdGhlIGF1ZGlvIGVuZ2luZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNvdW5kcygpOiBSZWFkb25seUFycmF5PEFic3RyYWN0U291bmQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VuZHNBcnJheSkge1xuICAgICAgICAgICAgdGhpcy5fc291bmRzQXJyYXkgPSBBcnJheS5mcm9tKHRoaXMuX3NvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kc0FycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYXVkaW8gYnVzLlxuICAgICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGF1ZGlvIGJ1cy5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIGNyZWF0aW5nIHRoZSBhdWRpbyBidXMuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY3JlYXRlZCBhdWRpbyBidXMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNyZWF0ZUJ1c0FzeW5jKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IFBhcnRpYWw8SUF1ZGlvQnVzT3B0aW9ucz4pOiBQcm9taXNlPEF1ZGlvQnVzPjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbWFpbiBhdWRpbyBidXMuXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgbWFpbiBhdWRpbyBidXMuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBjcmVhdGluZyB0aGUgbWFpbiBhdWRpbyBidXMuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY3JlYXRlZCBtYWluIGF1ZGlvIGJ1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlTWFpbkJ1c0FzeW5jKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IFBhcnRpYWw8SU1haW5BdWRpb0J1c09wdGlvbnM+KTogUHJvbWlzZTxNYWluQXVkaW9CdXM+O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtaWNyb3Bob25lIHNvdW5kIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgc291bmQgc291cmNlLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBjcmVhdGVkIHNvdW5kIHNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlTWljcm9waG9uZVNvdW5kU291cmNlQXN5bmMobmFtZTogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxJU291bmRTb3VyY2VPcHRpb25zPik6IFByb21pc2U8QWJzdHJhY3RTb3VuZFNvdXJjZT47XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHN0YXRpYyBzb3VuZC5cbiAgICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSBvZiB0aGUgc291bmQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIHN0YXRpYyBzb3VuZC5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY3JlYXRlZCBzdGF0aWMgc291bmQuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNyZWF0ZVNvdW5kQXN5bmMoXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgc291cmNlOiBBcnJheUJ1ZmZlciB8IEF1ZGlvQnVmZmVyIHwgU3RhdGljU291bmRCdWZmZXIgfCBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgb3B0aW9ucz86IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz5cbiAgICApOiBQcm9taXNlPFN0YXRpY1NvdW5kPjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSBvZiB0aGUgc291bmQgYnVmZmVyLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBzdGF0aWMgc291bmQgYnVmZmVyLlxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBjcmVhdGVkIHN0YXRpYyBzb3VuZCBidWZmZXIuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNyZWF0ZVNvdW5kQnVmZmVyQXN5bmMoXG4gICAgICAgIHNvdXJjZTogQXJyYXlCdWZmZXIgfCBBdWRpb0J1ZmZlciB8IFN0YXRpY1NvdW5kQnVmZmVyIHwgc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICAgIG9wdGlvbnM/OiBQYXJ0aWFsPElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnM+XG4gICAgKTogUHJvbWlzZTxTdGF0aWNTb3VuZEJ1ZmZlcj47XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvdW5kIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSBvZiB0aGUgc291bmQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIHNvdW5kIHNvdXJjZS5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY3JlYXRlZCBzb3VuZCBzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNyZWF0ZVNvdW5kU291cmNlQXN5bmMobmFtZTogc3RyaW5nLCBzb3VyY2U6IEF1ZGlvTm9kZSwgb3B0aW9ucz86IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pOiBQcm9taXNlPEFic3RyYWN0U291bmRTb3VyY2U+O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzdHJlYW1pbmcgc291bmQuXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc291bmQuXG4gICAgICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2Ugb2YgdGhlIHNvdW5kLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBzdHJlYW1pbmcgc291bmQuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGNyZWF0ZWQgc3RyZWFtaW5nIHNvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVTdHJlYW1pbmdTb3VuZEFzeW5jKG5hbWU6IHN0cmluZywgc291cmNlOiBIVE1MTWVkaWFFbGVtZW50IHwgc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM/OiBQYXJ0aWFsPElTdHJlYW1pbmdTb3VuZE9wdGlvbnM+KTogUHJvbWlzZTxTdHJlYW1pbmdTb3VuZD47XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKEluc3RhbmNlcy5pbmNsdWRlcyh0aGlzKSkge1xuICAgICAgICAgICAgSW5zdGFuY2VzLnNwbGljZShJbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub2RlSXQgPSB0aGlzLl9ub2Rlcy52YWx1ZXMoKTtcbiAgICAgICAgZm9yIChsZXQgbmV4dCA9IG5vZGVJdC5uZXh0KCk7ICFuZXh0LmRvbmU7IG5leHQgPSBub2RlSXQubmV4dCgpKSB7XG4gICAgICAgICAgICBuZXh0LnZhbHVlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21haW5CdXNlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9ub2Rlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9zb3VuZHMuY2xlYXIoKTtcblxuICAgICAgICB0aGlzLl9kaXNwb3NlU291bmRzQXJyYXkoKTtcblxuICAgICAgICB0aGlzLl9kZWZhdWx0TWFpbkJ1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBzcGVjaWZpZWQgZm9ybWF0IGlzIHZhbGlkLlxuICAgICAqIEBwYXJhbSBmb3JtYXQgVGhlIGZvcm1hdCB0byBjaGVjayBhcyBhbiBhdWRpbyBmaWxlIGV4dGVuc2lvbiBsaWtlIFwibXAzXCIgb3IgXCJ3YXZcIi5cbiAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZvcm1hdCBpcyB2YWxpZDsgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGlzRm9ybWF0VmFsaWQoZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogUGF1c2VzIHRoZSBhdWRpbyBlbmdpbmUgaWYgaXQgaXMgcnVubmluZy5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhdWRpbyBlbmdpbmUgaXMgcGF1c2VkLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwYXVzZUFzeW5jKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICAvKipcbiAgICAgKiBSZXN1bWVzIHRoZSBhdWRpbyBlbmdpbmUgaWYgaXQgaXMgbm90IHJ1bm5pbmcuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXVkaW8gZW5naW5lIGlzIHJ1bm5pbmcuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJlc3VtZUFzeW5jKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhdWRpbyBvdXRwdXQgdm9sdW1lIHdpdGggb3B0aW9uYWwgcmFtcGluZy5cbiAgICAgKiBJZiB0aGUgZHVyYXRpb24gaXMgMCB0aGVuIHRoZSB2b2x1bWUgaXMgc2V0IGltbWVkaWF0ZWx5LCBvdGhlcndpc2UgaXQgaXMgcmFtcGVkIHRvIHRoZSBuZXcgdmFsdWUgb3ZlciB0aGUgZ2l2ZW4gZHVyYXRpb24gdXNpbmcgdGhlIGdpdmVuIHNoYXBlLlxuICAgICAqIElmIGEgcmFtcCBpcyBhbHJlYWR5IGluIHByb2dyZXNzIHRoZW4gdGhlIHZvbHVtZSBpcyBub3Qgc2V0IGFuZCBhbiBlcnJvciBpcyB0aHJvd24uXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHZvbHVtZSB0by5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2UgZm9yIHJhbXBpbmcgdGhlIHZvbHVtZSBjaGFuZ2UuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyLCBvcHRpb25zPzogUGFydGlhbDxJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucz4pOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogVW5sb2NrcyB0aGUgYXVkaW8gZW5naW5lIGlmIGl0IGlzIGxvY2tlZC5cbiAgICAgKiAtIE5vdGUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBtYXkgYWxyZWFkeSBiZSByZXNvbHZlZCBpZiB0aGUgYXVkaW8gZW5naW5lIGlzIGFscmVhZHkgdW5sb2NrZWQuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB0aGUgYXVkaW8gZW5naW5lIGlzIHVubG9ja2VkLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBwdWJsaWMgdW5sb2NrQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VtZUFzeW5jKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZGRNYWluQnVzKG1haW5CdXM6IE1haW5BdWRpb0J1cyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tYWluQnVzZXMuYWRkKG1haW5CdXMpO1xuXG4gICAgICAgIHRoaXMuX2FkZE5vZGUobWFpbkJ1cyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9yZW1vdmVNYWluQnVzKG1haW5CdXM6IE1haW5BdWRpb0J1cyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tYWluQnVzZXMuZGVsZXRlKG1haW5CdXMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0TWFpbkJ1cyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlTm9kZShtYWluQnVzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FkZE5vZGUobm9kZTogQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ub2Rlcy5hZGQobm9kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9yZW1vdmVOb2RlKG5vZGU6IEFic3RyYWN0TmFtZWRBdWRpb05vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbm9kZXMuZGVsZXRlKG5vZGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWRkU291bmQoc291bmQ6IEFic3RyYWN0U291bmQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVNvdW5kc0FycmF5KCk7XG4gICAgICAgIHRoaXMuX3NvdW5kcy5hZGQoc291bmQpO1xuICAgICAgICB0aGlzLl9hZGROb2RlKHNvdW5kKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX3JlbW92ZVNvdW5kKHNvdW5kOiBBYnN0cmFjdFNvdW5kKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VTb3VuZHNBcnJheSgpO1xuICAgICAgICB0aGlzLl9zb3VuZHMuZGVsZXRlKHNvdW5kKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTm9kZShzb3VuZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzcG9zZVNvdW5kc0FycmF5KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc291bmRzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kc0FycmF5Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZHNBcnJheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0gZW5naW5lIC0gVGhlIGdpdmVuIGF1ZGlvIGVuZ2luZS4gSWYgYG51bGxgIHRoZW4gdGhlIGxhc3QgY3JlYXRlZCBhdWRpbyBlbmdpbmUgaXMgdXNlZC5cbiAqIEByZXR1cm5zIHRoZSBnaXZlbiBhdWRpbyBlbmdpbmUgb3IgdGhlIGxhc3QgY3JlYXRlZCBhdWRpbyBlbmdpbmUuXG4gKiBAdGhyb3dzIEFuIGVycm9yIGlmIHRoZSByZXN1bHRpbmcgZW5naW5lIGlzIGBudWxsYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9HZXRBdWRpb0VuZ2luZShlbmdpbmU6IE51bGxhYmxlPEF1ZGlvRW5naW5lVjI+KTogQXVkaW9FbmdpbmVWMiB7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgICAgZW5naW5lID0gTGFzdENyZWF0ZWRBdWRpb0VuZ2luZSgpO1xuICAgIH1cblxuICAgIGlmIChlbmdpbmUpIHtcbiAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdWRpbyBlbmdpbmUuXCIpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYXVkaW8gYnVzLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgYXVkaW8gYnVzLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBjcmVhdGluZyB0aGUgYXVkaW8gYnVzLlxuICogQHBhcmFtIGVuZ2luZSAtIFRoZSBhdWRpbyBlbmdpbmUuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjcmVhdGVkIGF1ZGlvIGJ1cy5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUF1ZGlvQnVzQXN5bmMobmFtZTogc3RyaW5nLCBvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0J1c09wdGlvbnM+ID0ge30sIGVuZ2luZTogTnVsbGFibGU8QXVkaW9FbmdpbmVWMj4gPSBudWxsKTogUHJvbWlzZTxBdWRpb0J1cz4ge1xuICAgIGVuZ2luZSA9IF9HZXRBdWRpb0VuZ2luZShlbmdpbmUpO1xuICAgIHJldHVybiBlbmdpbmUuY3JlYXRlQnVzQXN5bmMobmFtZSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYWluIGF1ZGlvIGJ1cy5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIG1haW4gYXVkaW8gYnVzLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyB0byB1c2Ugd2hlbiBjcmVhdGluZyB0aGUgbWFpbiBhdWRpbyBidXMuXG4gKiBAcGFyYW0gZW5naW5lIC0gVGhlIGF1ZGlvIGVuZ2luZS5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNyZWF0ZWQgbWFpbiBhdWRpbyBidXMuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVNYWluQXVkaW9CdXNBc3luYyhuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFBhcnRpYWw8SU1haW5BdWRpb0J1c09wdGlvbnM+ID0ge30sIGVuZ2luZTogTnVsbGFibGU8QXVkaW9FbmdpbmVWMj4gPSBudWxsKTogUHJvbWlzZTxNYWluQXVkaW9CdXM+IHtcbiAgICBlbmdpbmUgPSBfR2V0QXVkaW9FbmdpbmUoZW5naW5lKTtcbiAgICByZXR1cm4gZW5naW5lLmNyZWF0ZU1haW5CdXNBc3luYyhuYW1lLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1pY3JvcGhvbmUgc291bmQgc291cmNlLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc291bmQuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgc291bmQgc291cmNlLlxuICogQHBhcmFtIGVuZ2luZSAtIFRoZSBhdWRpbyBlbmdpbmUuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY3JlYXRlZCBzb3VuZCBzb3VyY2UuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVNaWNyb3Bob25lU291bmRTb3VyY2VBc3luYyhuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4gPSB7fSwgZW5naW5lOiBOdWxsYWJsZTxBdWRpb0VuZ2luZVYyPiA9IG51bGwpOiBQcm9taXNlPEFic3RyYWN0U291bmRTb3VyY2U+IHtcbiAgICBlbmdpbmUgPSBfR2V0QXVkaW9FbmdpbmUoZW5naW5lKTtcbiAgICByZXR1cm4gZW5naW5lLmNyZWF0ZU1pY3JvcGhvbmVTb3VuZFNvdXJjZUFzeW5jKG5hbWUsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc3RhdGljIHNvdW5kLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc291bmQuXG4gKiBAcGFyYW0gc291cmNlIC0gVGhlIHNvdXJjZSBvZiB0aGUgc291bmQuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgc3RhdGljIHNvdW5kLlxuICogQHBhcmFtIGVuZ2luZSAtIFRoZSBhdWRpbyBlbmdpbmUuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY3JlYXRlZCBzdGF0aWMgc291bmQuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVTb3VuZEFzeW5jKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzb3VyY2U6IEFycmF5QnVmZmVyIHwgQXVkaW9CdWZmZXIgfCBTdGF0aWNTb3VuZEJ1ZmZlciB8IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIG9wdGlvbnM6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz4gPSB7fSxcbiAgICBlbmdpbmU6IE51bGxhYmxlPEF1ZGlvRW5naW5lVjI+ID0gbnVsbFxuKTogUHJvbWlzZTxTdGF0aWNTb3VuZD4ge1xuICAgIGVuZ2luZSA9IF9HZXRBdWRpb0VuZ2luZShlbmdpbmUpO1xuICAgIHJldHVybiBlbmdpbmUuY3JlYXRlU291bmRBc3luYyhuYW1lLCBzb3VyY2UsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAqIEBwYXJhbSBzb3VyY2UgLSBUaGUgc291cmNlIG9mIHRoZSBzb3VuZCBidWZmZXIuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAqIEBwYXJhbSBlbmdpbmUgLSBUaGUgYXVkaW8gZW5naW5lLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGNyZWF0ZWQgc3RhdGljIHNvdW5kIGJ1ZmZlci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENyZWF0ZVNvdW5kQnVmZmVyQXN5bmMoXG4gICAgc291cmNlOiBBcnJheUJ1ZmZlciB8IEF1ZGlvQnVmZmVyIHwgU3RhdGljU291bmRCdWZmZXIgfCBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnM+ID0ge30sXG4gICAgZW5naW5lOiBOdWxsYWJsZTxBdWRpb0VuZ2luZVYyPiA9IG51bGxcbik6IFByb21pc2U8U3RhdGljU291bmRCdWZmZXI+IHtcbiAgICBlbmdpbmUgPSBfR2V0QXVkaW9FbmdpbmUoZW5naW5lKTtcbiAgICByZXR1cm4gYXdhaXQgZW5naW5lLmNyZWF0ZVNvdW5kQnVmZmVyQXN5bmMoc291cmNlLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNvdW5kIHNvdXJjZS5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHNvdW5kLlxuICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2Ugb2YgdGhlIHNvdW5kLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIHNvdW5kIHNvdXJjZS5cbiAqIEBwYXJhbSBlbmdpbmUgLSBUaGUgYXVkaW8gZW5naW5lLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGNyZWF0ZWQgc291bmQgc291cmNlLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlU291bmRTb3VyY2VBc3luYyhcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc291cmNlOiBBdWRpb05vZGUsXG4gICAgb3B0aW9uczogUGFydGlhbDxJU291bmRTb3VyY2VPcHRpb25zPiA9IHt9LFxuICAgIGVuZ2luZTogTnVsbGFibGU8QXVkaW9FbmdpbmVWMj4gPSBudWxsXG4pOiBQcm9taXNlPEFic3RyYWN0U291bmRTb3VyY2U+IHtcbiAgICBlbmdpbmUgPSBfR2V0QXVkaW9FbmdpbmUoZW5naW5lKTtcbiAgICByZXR1cm4gZW5naW5lLmNyZWF0ZVNvdW5kU291cmNlQXN5bmMobmFtZSwgc291cmNlLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHN0cmVhbWluZyBzb3VuZC5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHNvdW5kLlxuICogQHBhcmFtIHNvdXJjZSAtIFRoZSBzb3VyY2Ugb2YgdGhlIHNvdW5kLlxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3IgdGhlIHN0cmVhbWluZyBzb3VuZC5cbiAqIEBwYXJhbSBlbmdpbmUgLSBUaGUgYXVkaW8gZW5naW5lLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGNyZWF0ZWQgc3RyZWFtaW5nIHNvdW5kLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlU3RyZWFtaW5nU291bmRBc3luYyhcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc291cmNlOiBIVE1MTWVkaWFFbGVtZW50IHwgc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgb3B0aW9uczogUGFydGlhbDxJU3RyZWFtaW5nU291bmRPcHRpb25zPiA9IHt9LFxuICAgIGVuZ2luZTogTnVsbGFibGU8QXVkaW9FbmdpbmVWMj4gPSBudWxsXG4pOiBQcm9taXNlPFN0cmVhbWluZ1NvdW5kPiB7XG4gICAgZW5naW5lID0gX0dldEF1ZGlvRW5naW5lKGVuZ2luZSk7XG4gICAgcmV0dXJuIGVuZ2luZS5jcmVhdGVTdHJlYW1pbmdTb3VuZEFzeW5jKG5hbWUsIHNvdXJjZSwgb3B0aW9ucyk7XG59XG4iLCJpbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCIuLi8uLi8uLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vc3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGVcIjtcbmltcG9ydCB0eXBlIHsgX1NwYXRpYWxBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vc3ViTm9kZXMvc3BhdGlhbEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfU3BhdGlhbEF1ZGlvTGlzdGVuZXIgfSBmcm9tIFwiLi4vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW9MaXN0ZW5lclwiO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgY29tbW9uIGludGVyZmFjZSBmb3IgYXR0YWNoaW5nIGFuIGF1ZGlvIGxpc3RlbmVyIG9yIHNvdXJjZSB0byBhIHNwZWNpZmljIGVudGl0eSwgZW5zdXJpbmcgb25seSBvbmUgZW50aXR5XG4gKiBpcyBhdHRhY2hlZCBhdCBhIHRpbWUuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIF9TcGF0aWFsQXVkaW9BdHRhY2hlckNvbXBvbmVudCB7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHByaXZhdGUgX2F0dGFjaG1lbnRUeXBlOiBTcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZSA9IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlLlBvc2l0aW9uQW5kUm90YXRpb247XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JvdGF0aW9uUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgcHJpdmF0ZSBfc2NlbmVOb2RlOiBOdWxsYWJsZTxOb2RlPiA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3BhdGlhbEF1ZGlvTm9kZTogX1NwYXRpYWxBdWRpb1N1Yk5vZGUgfCBfU3BhdGlhbEF1ZGlvTGlzdGVuZXI7XG4gICAgcHJpdmF0ZSBfdXNlQm91bmRpbmdCb3g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3BhdGlhbEF1ZGlvTm9kZTogX1NwYXRpYWxBdWRpb1N1Yk5vZGUgfCBfU3BhdGlhbEF1ZGlvTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fc3BhdGlhbEF1ZGlvTm9kZSA9IHNwYXRpYWxBdWRpb05vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYXR0YWNoZWQgdG8gYSBzY2VuZSBub2RlOyBvdGhlcndpc2UgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjZW5lTm9kZSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0byBhIHNjZW5lIG5vZGUuXG4gICAgICpcbiAgICAgKiBEZXRhY2hlcyBhdXRvbWF0aWNhbGx5IGJlZm9yZSBhdHRhY2hpbmcgdG8gdGhlIGdpdmVuIHNjZW5lIG5vZGUuXG4gICAgICogSWYgYHNjZW5lTm9kZWAgaXMgYG51bGxgIGl0IGlzIHRoZSBzYW1lIGFzIGNhbGxpbmcgYGRldGFjaCgpYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY2VuZU5vZGUgVGhlIHNjZW5lIG5vZGUgdG8gYXR0YWNoIHRvLCBvciBgbnVsbGAgdG8gZGV0YWNoLlxuICAgICAqIEBwYXJhbSB1c2VCb3VuZGluZ0JveCBXaGV0aGVyIHRvIHVzZSB0aGUgc2NlbmUgbm9kZSdzIGJvdW5kaW5nIGJveCBmb3IgcG9zaXRpb25pbmcuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUeXBlIFdoZXRoZXIgdG8gYXR0YWNoIHRvIHRoZSBzY2VuZSBub2RlJ3MgcG9zaXRpb24gYW5kL29yIHJvdGF0aW9uLiBEZWZhdWx0cyB0byBgUG9zaXRpb25BbmRSb3RhdGlvbmAuXG4gICAgICovXG4gICAgcHVibGljIGF0dGFjaChzY2VuZU5vZGU6IE51bGxhYmxlPE5vZGU+LCB1c2VCb3VuZGluZ0JveDogYm9vbGVhbiwgYXR0YWNobWVudFR5cGU6IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zY2VuZU5vZGUgPT09IHNjZW5lTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXRhY2goKTtcblxuICAgICAgICBpZiAoIXNjZW5lTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYXR0YWNobWVudFR5cGUgPSBhdHRhY2htZW50VHlwZTtcblxuICAgICAgICB0aGlzLl9zY2VuZU5vZGUgPSBzY2VuZU5vZGU7XG4gICAgICAgIHRoaXMuX3NjZW5lTm9kZS5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZCh0aGlzLmRpc3Bvc2UpO1xuXG4gICAgICAgIHRoaXMuX3VzZUJvdW5kaW5nQm94ID0gdXNlQm91bmRpbmdCb3g7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgZnJvbSB0aGUgc2NlbmUgbm9kZSBpZiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGV0YWNoKCkge1xuICAgICAgICB0aGlzLl9zY2VuZU5vZGU/Lm9uRGlzcG9zZU9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5kaXNwb3NlKTtcbiAgICAgICAgdGhpcy5fc2NlbmVOb2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gYW5kIHJvdGF0aW9uIG9mIHRoZSBhc3NvY2lhdGVkIGF1ZGlvIGVuZ2luZSBvYmplY3QgaW4gdGhlIGF1ZGlvIHJlbmRlcmluZyBncmFwaC5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgYnkgZGVmYXVsdCBhbmQgb25seSBuZWVkcyB0byBiZSBjYWxsZWQgbWFudWFsbHkgaWYgYXV0b21hdGljIHVwZGF0ZXMgYXJlIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hdHRhY2htZW50VHlwZSAmIFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlLlBvc2l0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdXNlQm91bmRpbmdCb3ggJiYgKHRoaXMuX3NjZW5lTm9kZSBhcyBBYnN0cmFjdE1lc2gpLmdldEJvdW5kaW5nSW5mbykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uLmNvcHlGcm9tKCh0aGlzLl9zY2VuZU5vZGUgYXMgQWJzdHJhY3RNZXNoKS5nZXRCb3VuZGluZ0luZm8oKS5ib3VuZGluZ0JveC5jZW50ZXJXb3JsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lTm9kZT8uZ2V0V29ybGRNYXRyaXgoKS5nZXRUcmFuc2xhdGlvblRvUmVmKHRoaXMuX3Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbEF1ZGlvTm9kZS5wb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9wb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsQXVkaW9Ob2RlLl91cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2F0dGFjaG1lbnRUeXBlICYgU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUuUm90YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lTm9kZT8uZ2V0V29ybGRNYXRyaXgoKS5kZWNvbXBvc2UodW5kZWZpbmVkLCB0aGlzLl9yb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsQXVkaW9Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbi5jb3B5RnJvbSh0aGlzLl9yb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbEF1ZGlvTm9kZS5fdXBkYXRlUm90YXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEF1ZGlvTm9kZVR5cGUsIEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgdGhlIG1haW4gYXVkaW8gb3V0cHV0IG5vZGUuXG4gKlxuICogQSBtYWluIGF1ZGlvIG91dHB1dCBpcyB0aGUgbGFzdCBhdWRpbyBub2RlIGluIHRoZSBhdWRpbyBncmFwaCBiZWZvcmUgdGhlIGF1ZGlvIGlzIHNlbnQgdG8gdGhlIHNwZWFrZXJzLlxuICpcbiAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIubWFpbk91dH1cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX01haW5BdWRpb091dCBleHRlbmRzIEFic3RyYWN0QXVkaW9Ob2RlIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZW5naW5lOiBBdWRpb0VuZ2luZVYyKSB7XG4gICAgICAgIHN1cGVyKGVuZ2luZSwgQXVkaW9Ob2RlVHlwZS5IQVNfSU5QVVRTKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBTcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZSB9IGZyb20gXCIuLi8uLi9zcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZVwiO1xuXG5leHBvcnQgY29uc3QgX1NwYXRpYWxBdWRpb0xpc3RlbmVyRGVmYXVsdHMgPSB7XG4gICAgcG9zaXRpb246IFZlY3RvcjMuWmVybygpLFxuICAgIHJvdGF0aW9uOiBWZWN0b3IzLlplcm8oKSxcbiAgICByb3RhdGlvblF1YXRlcm5pb246IG5ldyBRdWF0ZXJuaW9uKCksXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHNwYXRpYWwgYXVkaW8uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNwYXRpYWxBdWRpb0xpc3RlbmVyT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0aGUgcG9zaXRpb24gYW5kIHJvdGF0aW9uIG9mIHRoZSBsaXN0ZW5lci4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgICAqL1xuICAgIGxpc3RlbmVyQXV0b1VwZGF0ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSB0aGUgbGlzdGVuZXIuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgbGlzdGVuZXJFbmFibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHVwZGF0ZSB0aW1lIGluIHNlY29uZHMgb2YgdGhlIGxpc3RlbmVyIGlmIGl0IGlzIGF0dGFjaGVkIHRvIGEgbWVzaCwgc2NlbmUgb3IgdHJhbnNmb3JtIG5vZGUuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIFRoZSBsaXN0ZW5lcidzIHBvc2l0aW9uIGFuZCByb3RhdGlvbiB3aWxsIG5vdCB1cGRhdGUgZmFzdGVyIHRoYW4gdGhpcyB0aW1lLCBidXQgdGhleSBtYXkgdXBkYXRlIHNsb3dlciBkZXBlbmRpbmcgb24gdGhlIGZyYW1lIHJhdGUuXG4gICAgICovXG4gICAgbGlzdGVuZXJNaW5VcGRhdGVUaW1lOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3RlbmVyIHBvc2l0aW9uLiBEZWZhdWx0cyB0byAoMCwgMCwgMCkuXG4gICAgICovXG4gICAgbGlzdGVuZXJQb3NpdGlvbjogVmVjdG9yMztcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdGVuZXIgcm90YXRpb24sIGFzIEV1bGVyIGFuZ2xlcy4gRGVmYXVsdHMgdG8gKDAsIDAsIDApLlxuICAgICAqL1xuICAgIGxpc3RlbmVyUm90YXRpb246IFZlY3RvcjM7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3RlbmVyIHJvdGF0aW9uLCBhcyBhIHF1YXRlcm5pb24uIERlZmF1bHRzIHRvICgwLCAwLCAwLCAxKS5cbiAgICAgKi9cbiAgICBsaXN0ZW5lclJvdGF0aW9uUXVhdGVybmlvbjogUXVhdGVybmlvbjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgc3BhdGlhbCBhdWRpbyBsaXN0ZW5lciBvcHRpb25zIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHNwYXRpYWwgYXVkaW8gbGlzdGVuZXIgb3B0aW9ucyBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfSGFzU3BhdGlhbEF1ZGlvTGlzdGVuZXJPcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8SVNwYXRpYWxBdWRpb0xpc3RlbmVyT3B0aW9ucz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBvcHRpb25zLmxpc3RlbmVyRW5hYmxlZCB8fFxuICAgICAgICBvcHRpb25zLmxpc3RlbmVyTWluVXBkYXRlVGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMubGlzdGVuZXJQb3NpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMubGlzdGVuZXJSb3RhdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMubGlzdGVuZXJSb3RhdGlvblF1YXRlcm5pb24gIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIHRoZSBzcGF0aWFsIGF1ZGlvIGBsaXN0ZW5lcmAgcHJvcGVydHkgb24gYW4gYXVkaW8gZW5naW5lLlxuICpcbiAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIubGlzdGVuZXJ9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBsaXN0ZW5lciBpcyBhdHRhY2hlZCB0byBhIGNhbWVyYSwgbWVzaCBvciB0cmFuc2Zvcm0gbm9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgaXNBdHRhY2hlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHVwZGF0ZSB0aW1lIGluIHNlY29uZHMgb2YgdGhlIGxpc3RlbmVyIGlmIGl0IGlzIGF0dGFjaGVkIHRvIGEgbWVzaCwgc2NlbmUgb3IgdHJhbnNmb3JtIG5vZGUuIERlZmF1bHRzIHRvIGAwYC5cbiAgICAgKiAtIFRoZSBsaXN0ZW5lcidzIHBvc2l0aW9uIGFuZCByb3RhdGlvbiB3aWxsIG5vdCB1cGRhdGUgZmFzdGVyIHRoYW4gdGhpcyB0aW1lLCBidXQgdGhleSBtYXkgdXBkYXRlIHNsb3dlciBkZXBlbmRpbmcgb24gdGhlIGZyYW1lIHJhdGUuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IG1pblVwZGF0ZVRpbWU6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0ZW5lciBwb3NpdGlvbi4gRGVmYXVsdHMgdG8gKDAsIDAsIDApLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwb3NpdGlvbjogVmVjdG9yMztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0ZW5lciByb3RhdGlvbiwgYXMgRXVsZXIgYW5nbGVzLiBEZWZhdWx0cyB0byAoMCwgMCwgMCkuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJvdGF0aW9uOiBWZWN0b3IzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3RlbmVyIHJvdGF0aW9uLCBhcyBhIHF1YXRlcm5pb24uIERlZmF1bHRzIHRvICgwLCAwLCAwLCAxKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgcm90YXRpb25RdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uO1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdG8gYSBzY2VuZSBub2RlLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYXV0b21hdGljYWxseSBiZWZvcmUgYXR0YWNoaW5nIHRvIHRoZSBnaXZlbiBzY2VuZSBub2RlLlxuICAgICAqIElmIGBzY2VuZU5vZGVgIGlzIGBudWxsYCBpdCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGBkZXRhY2goKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NlbmVOb2RlIFRoZSBzY2VuZSBub2RlIHRvIGF0dGFjaCB0bywgb3IgYG51bGxgIHRvIGRldGFjaC5cbiAgICAgKiBAcGFyYW0gdXNlQm91bmRpbmdCb3ggV2hldGhlciB0byB1c2UgdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbm9kZSBmb3IgcG9zaXRpb25pbmcuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUeXBlIFdoZXRoZXIgdG8gYXR0YWNoIHRvIHRoZSBub2RlJ3MgcG9zaXRpb24gYW5kL29yIHJvdGF0aW9uLiBEZWZhdWx0cyB0byBgUG9zaXRpb25BbmRSb3RhdGlvbmAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGF0dGFjaChzY2VuZU5vZGU6IE51bGxhYmxlPE5vZGU+LCB1c2VCb3VuZGluZ0JveD86IGJvb2xlYW4sIGF0dGFjaG1lbnRUeXBlPzogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgZnJvbSB0aGUgc2NlbmUgbm9kZSBpZiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZGV0YWNoKCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBhbmQgcm90YXRpb24gb2YgdGhlIGFzc29jaWF0ZWQgYXVkaW8gZW5naW5lIG9iamVjdCBpbiB0aGUgYXVkaW8gcmVuZGVyaW5nIGdyYXBoLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IGFuZCBvbmx5IG5lZWRzIHRvIGJlIGNhbGxlZCBtYW51YWxseSBpZiBhdXRvbWF0aWMgdXBkYXRlcyBhcmUgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZSgpOiB2b2lkO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uL3NwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlXCI7XG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zcGF0aWFsQXVkaW9BdHRhY2hlckNvbXBvbmVudFwiO1xuaW1wb3J0IHR5cGUgeyBJU3BhdGlhbEF1ZGlvTGlzdGVuZXJPcHRpb25zIH0gZnJvbSBcIi4vYWJzdHJhY3RTcGF0aWFsQXVkaW9MaXN0ZW5lclwiO1xuaW1wb3J0IHsgX1NwYXRpYWxBdWRpb0xpc3RlbmVyRGVmYXVsdHMsIEFic3RyYWN0U3BhdGlhbEF1ZGlvTGlzdGVuZXIgfSBmcm9tIFwiLi9hYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfU3BhdGlhbEF1ZGlvTGlzdGVuZXIgZXh0ZW5kcyBBYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyIHtcbiAgICBwcm90ZWN0ZWQgX2F0dGFjaGVyQ29tcG9uZW50OiBOdWxsYWJsZTxfU3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQ+ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudCA9IG5ldyBfU3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgaXNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVyQ29tcG9uZW50ICE9PSBudWxsICYmIHRoaXMuX2F0dGFjaGVyQ29tcG9uZW50LmlzQXR0YWNoZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdG8gYSBzY2VuZSBub2RlLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYXV0b21hdGljYWxseSBiZWZvcmUgYXR0YWNoaW5nIHRvIHRoZSBnaXZlbiBzY2VuZSBub2RlLlxuICAgICAqIElmIGBzY2VuZU5vZGVgIGlzIGBudWxsYCBpdCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGBkZXRhY2goKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NlbmVOb2RlIFRoZSBzY2VuZSBub2RlIHRvIGF0dGFjaCB0bywgb3IgYG51bGxgIHRvIGRldGFjaC5cbiAgICAgKiBAcGFyYW0gdXNlQm91bmRpbmdCb3ggV2hldGhlciB0byB1c2UgdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbm9kZSBmb3IgcG9zaXRpb25pbmcuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUeXBlIFdoZXRoZXIgdG8gYXR0YWNoIHRvIHRoZSBub2RlJ3MgcG9zaXRpb24gYW5kL29yIHJvdGF0aW9uLiBEZWZhdWx0cyB0byBgUG9zaXRpb25BbmRSb3RhdGlvbmAuXG4gICAgICovXG4gICAgcHVibGljIGF0dGFjaChzY2VuZU5vZGU6IE51bGxhYmxlPE5vZGU+LCB1c2VCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlLCBhdHRhY2htZW50VHlwZTogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUgPSBTcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZS5Qb3NpdGlvbkFuZFJvdGF0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fYXR0YWNoZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2F0dGFjaGVyQ29tcG9uZW50ID0gbmV3IF9TcGF0aWFsQXVkaW9BdHRhY2hlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudC5hdHRhY2goc2NlbmVOb2RlLCB1c2VCb3VuZGluZ0JveCwgYXR0YWNobWVudFR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIGZyb20gdGhlIHNjZW5lIG5vZGUgaWYgYXR0YWNoZWQuXG4gICAgICovXG4gICAgcHVibGljIGRldGFjaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQ/LmRldGFjaCgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQ/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElTcGF0aWFsQXVkaW9MaXN0ZW5lck9wdGlvbnM+KTogdm9pZCB7XG4gICAgICAgIGlmIChvcHRpb25zLmxpc3RlbmVyTWluVXBkYXRlVGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm1pblVwZGF0ZVRpbWUgPSBvcHRpb25zLmxpc3RlbmVyTWluVXBkYXRlVGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmxpc3RlbmVyUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBvcHRpb25zLmxpc3RlbmVyUG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmxpc3RlbmVyUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IG9wdGlvbnMubGlzdGVuZXJSb3RhdGlvblF1YXRlcm5pb24uY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmxpc3RlbmVyUm90YXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBvcHRpb25zLmxpc3RlbmVyUm90YXRpb24uY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gX1NwYXRpYWxBdWRpb0xpc3RlbmVyRGVmYXVsdHMucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBfdXBkYXRlUG9zaXRpb24oKTogdm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgX3VwZGF0ZVJvdGF0aW9uKCk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBdWRpb1BhcmFtZXRlclJhbXBTaGFwZSB9IGZyb20gXCIuL2F1ZGlvUGFyYW1ldGVyXCI7XG5cbmV4cG9ydCBjb25zdCBfRmlsZUV4dGVuc2lvblJlZ2V4ID0gbmV3IFJlZ0V4cChcIlxcXFwuKFxcXFx3ezMsNH0pKCR8XFxcXD8pXCIpO1xuXG5jb25zdCBDdXJ2ZUxlbmd0aCA9IDEwMDtcblxuY29uc3QgVG1wTGluZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKTtcbmxldCBUbXBDdXJ2ZVZhbHVlczogTnVsbGFibGU8RmxvYXQzMkFycmF5PiA9IG51bGw7XG5cbmxldCBFeHBDdXJ2ZTogTnVsbGFibGU8RmxvYXQzMkFycmF5PiA9IG51bGw7XG5sZXQgTG9nQ3VydmU6IE51bGxhYmxlPEZsb2F0MzJBcnJheT4gPSBudWxsO1xuXG4vKipcbiAqIEByZXR1cm5zIEEgRmxvYXQzMkFycmF5IHJlcHJlc2VudGluZyBhbiBleHBvbmVudGlhbCByYW1wIGZyb20gKDAsIDApIHRvICgxLCAxKS5cbiAqL1xuZnVuY3Rpb24gR2V0RXhwQ3VydmUoKTogRmxvYXQzMkFycmF5IHtcbiAgICBpZiAoIUV4cEN1cnZlKSB7XG4gICAgICAgIEV4cEN1cnZlID0gbmV3IEZsb2F0MzJBcnJheShDdXJ2ZUxlbmd0aCk7XG5cbiAgICAgICAgY29uc3QgaW5jcmVtZW50ID0gMSAvIChDdXJ2ZUxlbmd0aCAtIDEpO1xuICAgICAgICBsZXQgeCA9IGluY3JlbWVudDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBDdXJ2ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBFeHBDdXJ2ZVtpXSA9IE1hdGguZXhwKC0xMS41MTI5MjU0NjQ5NzAyMjcgKiAoMSAtIHgpKTtcbiAgICAgICAgICAgIHggKz0gaW5jcmVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4cEN1cnZlO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIEEgRmxvYXQzMkFycmF5IHJlcHJlc2VudGluZyBhIGxvZ2FyaXRobWljIHJhbXAgZnJvbSAoMCwgMCkgdG8gKDEsIDEpLlxuICovXG5mdW5jdGlvbiBHZXRMb2dDdXJ2ZSgpOiBGbG9hdDMyQXJyYXkge1xuICAgIGlmICghTG9nQ3VydmUpIHtcbiAgICAgICAgTG9nQ3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KEN1cnZlTGVuZ3RoKTtcblxuICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSAxIC8gQ3VydmVMZW5ndGg7XG4gICAgICAgIGxldCB4ID0gaW5jcmVtZW50O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEN1cnZlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIExvZ0N1cnZlW2ldID0gMSArIE1hdGgubG9nMTAoeCkgLyBNYXRoLmxvZzEwKEN1cnZlTGVuZ3RoKTtcbiAgICAgICAgICAgIHggKz0gaW5jcmVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIExvZ0N1cnZlO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX0dldEF1ZGlvUGFyYW1DdXJ2ZVZhbHVlcyhzaGFwZTogQXVkaW9QYXJhbWV0ZXJSYW1wU2hhcGUsIGZyb206IG51bWJlciwgdG86IG51bWJlcik6IEZsb2F0MzJBcnJheSB7XG4gICAgaWYgKCFUbXBDdXJ2ZVZhbHVlcykge1xuICAgICAgICBUbXBDdXJ2ZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoQ3VydmVMZW5ndGgpO1xuICAgIH1cblxuICAgIGxldCBub3JtYWxpemVkQ3VydmU6IEZsb2F0MzJBcnJheTtcblxuICAgIGlmIChzaGFwZSA9PT0gQXVkaW9QYXJhbWV0ZXJSYW1wU2hhcGUuTGluZWFyKSB7XG4gICAgICAgIFRtcExpbmVWYWx1ZXNbMF0gPSBmcm9tO1xuICAgICAgICBUbXBMaW5lVmFsdWVzWzFdID0gdG87XG4gICAgICAgIHJldHVybiBUbXBMaW5lVmFsdWVzO1xuICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IEF1ZGlvUGFyYW1ldGVyUmFtcFNoYXBlLkV4cG9uZW50aWFsKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRDdXJ2ZSA9IEdldEV4cEN1cnZlKCk7XG4gICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gQXVkaW9QYXJhbWV0ZXJSYW1wU2hhcGUuTG9nYXJpdGhtaWMpIHtcbiAgICAgICAgbm9ybWFsaXplZEN1cnZlID0gR2V0TG9nQ3VydmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcmFtcCBzaGFwZTogJHtzaGFwZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnNpZ24odG8gLSBmcm9tKTtcbiAgICBjb25zdCByYW5nZSA9IE1hdGguYWJzKHRvIC0gZnJvbSk7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9ybWFsaXplZEN1cnZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBUbXBDdXJ2ZVZhbHVlc1tpXSA9IGZyb20gKyByYW5nZSAqIG5vcm1hbGl6ZWRDdXJ2ZVtpXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBqID0gQ3VydmVMZW5ndGggLSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vcm1hbGl6ZWRDdXJ2ZS5sZW5ndGg7IGkrKywgai0tKSB7XG4gICAgICAgICAgICBUbXBDdXJ2ZVZhbHVlc1tpXSA9IGZyb20gLSByYW5nZSAqICgxIC0gbm9ybWFsaXplZEN1cnZlW2pdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBUbXBDdXJ2ZVZhbHVlcztcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9DbGVhblVybCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgvIy9nbSwgXCIlMjNcIik7XG59XG4iLCJpbXBvcnQgeyBQcmVjaXNpb25EYXRlIH0gZnJvbSBcIi4uLy4uLy4uL01pc2MvcHJlY2lzaW9uRGF0ZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1NwYXRpYWxXZWJBdWRpb1VwZGF0ZXJDb21wb25lbnQge1xuICAgIHByaXZhdGUgX2F1dG9VcGRhdGUgPSB0cnVlO1xuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBtaW5VcGRhdGVUaW1lID0gMDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGFyZW50OiB7IHVwZGF0ZTogKCkgPT4gdm9pZCB9LCBhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCFhdXRvVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1pblVwZGF0ZVRpbWUgPSBtaW5VcGRhdGVUaW1lO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXV0b1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNraXBVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKDAgPCB0aGlzLm1pblVwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBQcmVjaXNpb25EYXRlLk5vdztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdFVwZGF0ZVRpbWUgJiYgbm93IC0gdGhpcy5fbGFzdFVwZGF0ZVRpbWUgPCB0aGlzLm1pblVwZGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2tpcFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUaW1lID0gbm93O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXNraXBVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2F1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IElBdWRpb1BhcmFtZXRlclJhbXBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2F1ZGlvUGFyYW1ldGVyXCI7XG5pbXBvcnQgeyBBdWRpb1BhcmFtZXRlclJhbXBTaGFwZSB9IGZyb20gXCIuLi8uLi9hdWRpb1BhcmFtZXRlclwiO1xuaW1wb3J0IHsgX0dldEF1ZGlvUGFyYW1DdXJ2ZVZhbHVlcyB9IGZyb20gXCIuLi8uLi9hdWRpb1V0aWxzXCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuLi93ZWJBdWRpb0VuZ2luZVwiO1xuXG4vKipcbiAqIE1pbmltdW0gZHVyYXRpb24gaW4gc2Vjb25kcyBmb3IgYSByYW1wIHRvIGJlIGNvbnNpZGVyZWQgdmFsaWQuXG4gKlxuICogSWYgdGhlIGR1cmF0aW9uIGlzIGxlc3MgdGhhbiB0aGlzIHZhbHVlLCB0aGUgdmFsdWUgd2lsbCBiZSBzZXQgaW1tZWRpYXRlbHkgaW5zdGVhZCBvZiBiZWluZyByYW1wZWQgc21vb3RobHkgc2luY2VcbiAqIHRoZXJlIGlzIG5vIHBlcmNlcHR1YWwgZGlmZmVyZW5jZSBmb3Igc3VjaCBzaG9ydCBkdXJhdGlvbnMsIHNvIGEgcmFtcCBpcyBub3QgbmVlZGVkLlxuICovXG5jb25zdCBNaW5SYW1wRHVyYXRpb24gPSAwLjAwMDAwMTtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfcmFtcEVuZFRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG4gICAgcHJpdmF0ZSBfcGFyYW06IEF1ZGlvUGFyYW07XG4gICAgcHJpdmF0ZSBfdGFyZ2V0VmFsdWU6IG51bWJlcjtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBjb25zdHJ1Y3RvcihlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSwgcGFyYW06IEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICAgICAgICB0aGlzLl9wYXJhbSA9IHBhcmFtO1xuICAgICAgICB0aGlzLl90YXJnZXRWYWx1ZSA9IHBhcmFtLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzUmFtcGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZ2luZS5jdXJyZW50VGltZSA8IHRoaXMuX3JhbXBFbmRUaW1lO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHRhcmdldFZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRWYWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRhcmdldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRUYXJnZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmFtLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFyYW0gPSBudWxsITtcbiAgICAgICAgdGhpcy5fZW5naW5lID0gbnVsbCE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGFyZ2V0IHZhbHVlIG9mIHRoZSBhdWRpbyBwYXJhbWV0ZXIgd2l0aCBhbiBvcHRpb25hbCByYW1waW5nIGR1cmF0aW9uIGFuZCBzaGFwZS5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRUYXJnZXRWYWx1ZSh2YWx1ZTogbnVtYmVyLCBvcHRpb25zOiBOdWxsYWJsZTxQYXJ0aWFsPElBdWRpb1BhcmFtZXRlclJhbXBPcHRpb25zPj4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNoYXBlID0gdHlwZW9mIG9wdGlvbnM/LnNoYXBlID09PSBcInN0cmluZ1wiID8gb3B0aW9ucy5zaGFwZSA6IEF1ZGlvUGFyYW1ldGVyUmFtcFNoYXBlLkxpbmVhcjtcblxuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSB0aGlzLl9lbmdpbmUuY3VycmVudFRpbWU7XG5cbiAgICAgICAgaWYgKHNoYXBlID09PSBBdWRpb1BhcmFtZXRlclJhbXBTaGFwZS5Ob25lKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbS5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoMCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbS52YWx1ZSA9IHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9yYW1wRW5kVGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHR5cGVvZiBvcHRpb25zPy5kdXJhdGlvbiA9PT0gXCJudW1iZXJcIiA/IE1hdGgubWF4KG9wdGlvbnMuZHVyYXRpb24sIHRoaXMuX2VuZ2luZS5wYXJhbWV0ZXJSYW1wRHVyYXRpb24pIDogdGhpcy5fZW5naW5lLnBhcmFtZXRlclJhbXBEdXJhdGlvbjtcblxuICAgICAgICBpZiAoKGR1cmF0aW9uID0gTWF0aC5tYXgodGhpcy5fZW5naW5lLnBhcmFtZXRlclJhbXBEdXJhdGlvbiwgZHVyYXRpb24pKSA8IE1pblJhbXBEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fcGFyYW0uc2V0VmFsdWVBdFRpbWUoKHRoaXMuX3RhcmdldFZhbHVlID0gdmFsdWUpLCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcGFyYW0uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKDApO1xuICAgICAgICB0aGlzLl9wYXJhbS5zZXRWYWx1ZUN1cnZlQXRUaW1lKF9HZXRBdWRpb1BhcmFtQ3VydmVWYWx1ZXMoc2hhcGUsIHRoaXMuX3BhcmFtLnZhbHVlLCAodGhpcy5fdGFyZ2V0VmFsdWUgPSB2YWx1ZSkpLCBzdGFydFRpbWUsIGR1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLl9yYW1wRW5kVGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCIuLi8uLi8uLi9NYXRocy9tYXRoLnZlY3RvclwiO1xuaW1wb3J0IHsgX1NwYXRpYWxBdWRpb0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW9MaXN0ZW5lclwiO1xuaW1wb3J0IHsgX1NwYXRpYWxXZWJBdWRpb1VwZGF0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zcGF0aWFsV2ViQXVkaW9VcGRhdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi4vd2ViQXVkaW9FbmdpbmVcIjtcblxuY29uc3QgVG1wTWF0cml4ID0gTWF0cml4Llplcm8oKTtcbmNvbnN0IFRtcFF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xuY29uc3QgVG1wVmVjdG9yMSA9IFZlY3RvcjMuWmVybygpO1xuY29uc3QgVG1wVmVjdG9yMiA9IFZlY3RvcjMuWmVybygpO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX0NyZWF0ZVNwYXRpYWxBdWRpb0xpc3RlbmVyKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBhdXRvVXBkYXRlOiBib29sZWFuLCBtaW5VcGRhdGVUaW1lOiBudW1iZXIpOiBfU3BhdGlhbEF1ZGlvTGlzdGVuZXIge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gZW5naW5lLl9hdWRpb0NvbnRleHQubGlzdGVuZXI7XG4gICAgaWYgKFxuICAgICAgICBsaXN0ZW5lci5mb3J3YXJkWCAmJlxuICAgICAgICBsaXN0ZW5lci5mb3J3YXJkWSAmJlxuICAgICAgICBsaXN0ZW5lci5mb3J3YXJkWiAmJlxuICAgICAgICBsaXN0ZW5lci5wb3NpdGlvblggJiZcbiAgICAgICAgbGlzdGVuZXIucG9zaXRpb25ZICYmXG4gICAgICAgIGxpc3RlbmVyLnBvc2l0aW9uWiAmJlxuICAgICAgICBsaXN0ZW5lci51cFggJiZcbiAgICAgICAgbGlzdGVuZXIudXBZICYmXG4gICAgICAgIGxpc3RlbmVyLnVwWlxuICAgICkge1xuICAgICAgICByZXR1cm4gbmV3IF9TcGF0aWFsV2ViQXVkaW9MaXN0ZW5lcihlbmdpbmUsIGF1dG9VcGRhdGUsIG1pblVwZGF0ZVRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgX1NwYXRpYWxXZWJBdWRpb0xpc3RlbmVyRmFsbGJhY2soZW5naW5lLCBhdXRvVXBkYXRlLCBtaW5VcGRhdGVUaW1lKTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIF9BYnN0cmFjdFNwYXRpYWxXZWJBdWRpb0xpc3RlbmVyIGV4dGVuZHMgX1NwYXRpYWxBdWRpb0xpc3RlbmVyIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2xpc3RlbmVyOiBBdWRpb0xpc3RlbmVyO1xuXG4gICAgcHJvdGVjdGVkIF9sYXN0UG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcbiAgICBwcm90ZWN0ZWQgX2xhc3RSb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xuICAgIHByb3RlY3RlZCBfbGFzdFJvdGF0aW9uUXVhdGVybmlvbjogUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgcHJvdGVjdGVkIF91cGRhdGVyQ29tcG9uZW50OiBfU3BhdGlhbFdlYkF1ZGlvVXBkYXRlckNvbXBvbmVudDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyByZWFkb25seSByb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgcm90YXRpb25RdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUsIGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gZW5naW5lLl9hdWRpb0NvbnRleHQubGlzdGVuZXI7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZXJDb21wb25lbnQgPSBuZXcgX1NwYXRpYWxXZWJBdWRpb1VwZGF0ZXJDb21wb25lbnQodGhpcywgYXV0b1VwZGF0ZSwgbWluVXBkYXRlVGltZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlckNvbXBvbmVudC5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZXJDb21wb25lbnQgPSBudWxsITtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtaW5VcGRhdGVUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVyQ29tcG9uZW50Lm1pblVwZGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXQgbWluVXBkYXRlVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZXJDb21wb25lbnQubWluVXBkYXRlVGltZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudD8udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUm90YXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBfdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0UG9zaXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldFdlYkF1ZGlvUG9zaXRpb24odGhpcy5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5fbGFzdFBvc2l0aW9uLmNvcHlGcm9tKHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBfdXBkYXRlUm90YXRpb24oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fbGFzdFJvdGF0aW9uUXVhdGVybmlvbi5lcXVhbHNXaXRoRXBzaWxvbih0aGlzLnJvdGF0aW9uUXVhdGVybmlvbikpIHtcbiAgICAgICAgICAgIFRtcFF1YXRlcm5pb24uY29weUZyb20odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFJvdGF0aW9uUXVhdGVybmlvbi5jb3B5RnJvbSh0aGlzLnJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2xhc3RSb3RhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbih0aGlzLnJvdGF0aW9uKSkge1xuICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tRXVsZXJBbmdsZXNUb1JlZih0aGlzLnJvdGF0aW9uLngsIHRoaXMucm90YXRpb24ueSwgdGhpcy5yb3RhdGlvbi56LCBUbXBRdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RSb3RhdGlvbi5jb3B5RnJvbSh0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE1hdHJpeC5Gcm9tUXVhdGVybmlvblRvUmVmKFRtcFF1YXRlcm5pb24sIFRtcE1hdHJpeCk7XG5cbiAgICAgICAgLy8gTkI6IFRoZSBXZWJBdWRpbyBBUEkgaXMgcmlnaHQtaGFuZGVkLlxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybU5vcm1hbFRvUmVmKFZlY3RvcjMuUmlnaHRIYW5kZWRGb3J3YXJkUmVhZE9ubHksIFRtcE1hdHJpeCwgVG1wVmVjdG9yMSk7XG4gICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtTm9ybWFsVG9SZWYoVmVjdG9yMy5VcCgpLCBUbXBNYXRyaXgsIFRtcFZlY3RvcjIpO1xuXG4gICAgICAgIHRoaXMuX3NldFdlYkF1ZGlvT3JpZW50YXRpb24oVG1wVmVjdG9yMSwgVG1wVmVjdG9yMik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9zZXRXZWJBdWRpb1Bvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3NldFdlYkF1ZGlvT3JpZW50YXRpb24oZm9yd2FyZDogVmVjdG9yMywgdXA6IFZlY3RvcjMpOiB2b2lkO1xufVxuXG4vKipcbiAqIEZ1bGwtZmVhdHVyZWQgc3BhdGlhbCBhdWRpbyBsaXN0ZW5lciBmb3IgdGhlIFdlYiBBdWRpbyBBUEkuXG4gKlxuICogVXNlZCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgdGhlIGBmb3J3YXJkWC9ZL1pgLCBgcG9zaXRpb25YL1kvWmAsIGFuZCBgdXBYL1kvWmAgcHJvcGVydGllcyBvbiB0aGUgQXVkaW9Db250ZXh0IGxpc3RlbmVyLlxuICpcbiAqIE5COiBGaXJlZm94IGZhbGxzIGJhY2sgdG8gdXNpbmcgdGhpcyBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAc2VlIF9TcGF0aWFsV2ViQXVkaW9MaXN0ZW5lckZhbGxiYWNrIGZvciB0aGUgaW1wbGVtZW50YXRpb24gdXNlZCBpZiBvbmx5IGBzZXRQb3NpdGlvbmAgYW5kIGBzZXRPcmllbnRhdGlvbmAgYXJlIGF2YWlsYWJsZS5cbiAqXG4gKiBOQjogVGhpcyBzdWIgcHJvcGVydHkgaXMgbm90IGJhY2tlZCBieSBhIHN1YiBub2RlIGFuZCBhbGwgcHJvcGVydGllcyBhcmUgc2V0IGRpcmVjdGx5IG9uIHRoZSBhdWRpbyBjb250ZXh0IGxpc3RlbmVyLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBfU3BhdGlhbFdlYkF1ZGlvTGlzdGVuZXIgZXh0ZW5kcyBfQWJzdHJhY3RTcGF0aWFsV2ViQXVkaW9MaXN0ZW5lciB7XG4gICAgcHJpdmF0ZSBfZm9yd2FyZFg6IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9mb3J3YXJkWTogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX2ZvcndhcmRaOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb25YOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb25ZOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfcG9zaXRpb25aOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfdXBYOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfdXBZOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfdXBaOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUsIGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihlbmdpbmUsIGF1dG9VcGRhdGUsIG1pblVwZGF0ZVRpbWUpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gZW5naW5lLl9hdWRpb0NvbnRleHQubGlzdGVuZXI7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRYID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIGxpc3RlbmVyLmZvcndhcmRYKTtcbiAgICAgICAgdGhpcy5fZm9yd2FyZFkgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgbGlzdGVuZXIuZm9yd2FyZFkpO1xuICAgICAgICB0aGlzLl9mb3J3YXJkWiA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCBsaXN0ZW5lci5mb3J3YXJkWik7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWCA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCBsaXN0ZW5lci5wb3NpdGlvblgpO1xuICAgICAgICB0aGlzLl9wb3NpdGlvblkgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgbGlzdGVuZXIucG9zaXRpb25ZKTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25aID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIGxpc3RlbmVyLnBvc2l0aW9uWik7XG4gICAgICAgIHRoaXMuX3VwWCA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCBsaXN0ZW5lci51cFgpO1xuICAgICAgICB0aGlzLl91cFkgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgbGlzdGVuZXIudXBZKTtcbiAgICAgICAgdGhpcy5fdXBaID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIGxpc3RlbmVyLnVwWik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9zZXRXZWJBdWRpb1Bvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKTogdm9pZCB7XG4gICAgICAgIC8vIElmIGF0dGFjaGVkIGFuZCB0aGVyZSBpcyBhIHJhbXAgaW4gcHJvZ3Jlc3MsIHdlIGFzc3VtZSBhbm90aGVyIHVwZGF0ZSBpcyBjb21pbmcgc29vbiB0aGF0IHdlIGNhbiB3YWl0IGZvci5cbiAgICAgICAgLy8gV2UgZG9uJ3QgZG8gdGhpcyBmb3IgdW5hdHRhY2hlZCBub2RlcyBiZWNhdXNlIHRoZXJlIG1heSBub3QgYmUgYW5vdGhlciB1cGRhdGUgY29taW5nLlxuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaGVkICYmICh0aGlzLl9wb3NpdGlvblguaXNSYW1waW5nIHx8IHRoaXMuX3Bvc2l0aW9uWS5pc1JhbXBpbmcgfHwgdGhpcy5fcG9zaXRpb25aLmlzUmFtcGluZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWC50YXJnZXRWYWx1ZSA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWS50YXJnZXRWYWx1ZSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWi50YXJnZXRWYWx1ZSA9IHBvc2l0aW9uLno7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9zZXRXZWJBdWRpb09yaWVudGF0aW9uKGZvcndhcmQ6IFZlY3RvcjMsIHVwOiBWZWN0b3IzKTogdm9pZCB7XG4gICAgICAgIC8vIElmIGF0dGFjaGVkIGFuZCB0aGVyZSBpcyBhIHJhbXAgaW4gcHJvZ3Jlc3MsIHdlIGFzc3VtZSBhbm90aGVyIHVwZGF0ZSBpcyBjb21pbmcgc29vbiB0aGF0IHdlIGNhbiB3YWl0IGZvci5cbiAgICAgICAgLy8gV2UgZG9uJ3QgZG8gdGhpcyBmb3IgdW5hdHRhY2hlZCBub2RlcyBiZWNhdXNlIHRoZXJlIG1heSBub3QgYmUgYW5vdGhlciB1cGRhdGUgY29taW5nLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmlzQXR0YWNoZWQgJiZcbiAgICAgICAgICAgICh0aGlzLl9mb3J3YXJkWC5pc1JhbXBpbmcgfHwgdGhpcy5fZm9yd2FyZFkuaXNSYW1waW5nIHx8IHRoaXMuX2ZvcndhcmRaLmlzUmFtcGluZyB8fCB0aGlzLl91cFguaXNSYW1waW5nIHx8IHRoaXMuX3VwWS5pc1JhbXBpbmcgfHwgdGhpcy5fdXBaLmlzUmFtcGluZylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9mb3J3YXJkWC50YXJnZXRWYWx1ZSA9IGZvcndhcmQueDtcbiAgICAgICAgdGhpcy5fZm9yd2FyZFkudGFyZ2V0VmFsdWUgPSBmb3J3YXJkLnk7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRaLnRhcmdldFZhbHVlID0gZm9yd2FyZC56O1xuXG4gICAgICAgIHRoaXMuX3VwWC50YXJnZXRWYWx1ZSA9IHVwLng7XG4gICAgICAgIHRoaXMuX3VwWS50YXJnZXRWYWx1ZSA9IHVwLnk7XG4gICAgICAgIHRoaXMuX3VwWi50YXJnZXRWYWx1ZSA9IHVwLno7XG4gICAgfVxufVxuXG4vKipcbiAqIEZhbGxiYWNrIHNwYXRpYWwgYXVkaW8gbGlzdGVuZXIgZm9yIHRoZSBXZWIgQXVkaW8gQVBJLlxuICpcbiAqIFVzZWQgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgYGZvcndhcmRYL1kvWmAsIGBwb3NpdGlvblgvWS9aYCwgYW5kIGB1cFgvWS9aYCBwcm9wZXJ0aWVzIG9uIHRoZVxuICogQXVkaW9Db250ZXh0IGxpc3RlbmVyLlxuICpcbiAqIEBzZWUgX1NwYXRpYWxXZWJBdWRpb0xpc3RlbmVyIGZvciB0aGUgaW1wbGVtZW50YXRpb24gdXNlZCBpZiB0aGUgYGZvcndhcmRYL1kvWmAsIGBwb3NpdGlvblgvWS9aYCwgYW5kIGB1cFgvWS9aYFxuICogcHJvcGVydGllcyBhcmUgYXZhaWxhYmxlLlxuICpcbiAqIE5COiBUaGlzIHN1YiBwcm9wZXJ0eSBpcyBub3QgYmFja2VkIGJ5IGEgc3ViIG5vZGUgYW5kIGFsbCBwcm9wZXJ0aWVzIGFyZSBzZXQgZGlyZWN0bHkgb24gdGhlIGF1ZGlvIGNvbnRleHQgbGlzdGVuZXIuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIF9TcGF0aWFsV2ViQXVkaW9MaXN0ZW5lckZhbGxiYWNrIGV4dGVuZHMgX0Fic3RyYWN0U3BhdGlhbFdlYkF1ZGlvTGlzdGVuZXIge1xuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfc2V0V2ViQXVkaW9Qb3NpdGlvbihwb3NpdGlvbjogVmVjdG9yMyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9saXN0ZW5lci5zZXRQb3NpdGlvbihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX3NldFdlYkF1ZGlvT3JpZW50YXRpb24oZm9yd2FyZDogVmVjdG9yMywgdXA6IFZlY3RvcjMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIuc2V0T3JpZW50YXRpb24oZm9yd2FyZC54LCBmb3J3YXJkLnksIGZvcndhcmQueiwgdXAueCwgdXAueSwgdXAueik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi8uLi9NaXNjL29ic2VydmFibGVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U291bmQgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U291bmRTb3VyY2UsIElTb3VuZFNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvQnVzLCBJQXVkaW9CdXNPcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYXVkaW9CdXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMlN0YXRlLCBJQXVkaW9FbmdpbmVWMk9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHR5cGUgeyBJTWFpbkF1ZGlvQnVzT3B0aW9ucywgTWFpbkF1ZGlvQnVzIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vbWFpbkF1ZGlvQnVzXCI7XG5pbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZE9wdGlvbnMsIFN0YXRpY1NvdW5kIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRcIjtcbmltcG9ydCB0eXBlIHsgSVN0YXRpY1NvdW5kQnVmZmVyT3B0aW9ucywgU3RhdGljU291bmRCdWZmZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdGF0aWNTb3VuZEJ1ZmZlclwiO1xuaW1wb3J0IHR5cGUgeyBJU3RyZWFtaW5nU291bmRPcHRpb25zLCBTdHJlYW1pbmdTb3VuZCB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N0cmVhbWluZ1NvdW5kXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3BhdGlhbEF1ZGlvTGlzdGVuZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvTGlzdGVuZXJcIjtcbmltcG9ydCB7IF9IYXNTcGF0aWFsQXVkaW9MaXN0ZW5lck9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvTGlzdGVuZXJcIjtcbmltcG9ydCB0eXBlIHsgX1NwYXRpYWxBdWRpb0xpc3RlbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW9MaXN0ZW5lclwiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucyB9IGZyb20gXCIuLi9hdWRpb1BhcmFtZXRlclwiO1xuaW1wb3J0IHsgX0NyZWF0ZVNwYXRpYWxBdWRpb0xpc3RlbmVyIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9zcGF0aWFsV2ViQXVkaW9MaXN0ZW5lclwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvTWFpbk91dCB9IGZyb20gXCIuL3dlYkF1ZGlvTWFpbk91dFwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvVW5tdXRlVUkgfSBmcm9tIFwiLi93ZWJBdWRpb1VubXV0ZVVJXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSB2MiBhdWRpbyBlbmdpbmUgdGhhdCB1c2VzIHRoZSBXZWJBdWRpbyBBUEkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkF1ZGlvRW5naW5lT3B0aW9ucyBleHRlbmRzIElBdWRpb0VuZ2luZVYyT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIGF1ZGlvIGNvbnRleHQgdG8gYmUgdXNlZCBieSB0aGUgZW5naW5lLlxuICAgICAqL1xuICAgIGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IFVJJ3MgcGFyZW50IGVsZW1lbnQuIERlZmF1bHRzIHRvIHRoZSBsYXN0IGNyZWF0ZWQgZ3JhcGhpY3MgZW5naW5lJ3MgY2FudmFzIGlmIGl0IGV4aXN0czsgb3RoZXJ3aXNlIHRoZSBIVE1MIGRvY3VtZW50J3MgYm9keS5cbiAgICAgKi9cbiAgICBkZWZhdWx0VUlQYXJlbnRFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogU2V0IHRvIGB0cnVlYCB0byBkaXNhYmxlIHRoZSBkZWZhdWx0IFVJLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGRpc2FibGVEZWZhdWx0VUk/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNldCB0byBgdHJ1ZWAgdG8gYXV0b21hdGljYWxseSByZXN1bWUgdGhlIGF1ZGlvIGNvbnRleHQgd2hlbiB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgcGFnZS4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgICAqL1xuICAgIHJlc3VtZU9uSW50ZXJhY3Rpb246IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU2V0IHRvIGB0cnVlYCB0byBhdXRvbWF0aWNhbGx5IHJlc3VtZSB0aGUgYXVkaW8gY29udGV4dCB3aGVuIHRoZSBicm93c2VyIHBhdXNlcyBhdWRpbyBwbGF5YmFjay4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgICAqL1xuICAgIHJlc3VtZU9uUGF1c2U6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0byB0cnkgcmVzdW1pbmcgYXVkaW8gcGxheWJhY2sgd2hlbiBgcmVzdW1lT25QYXVzZWAgaXMgYHRydWVgLiBEZWZhdWx0cyB0byBgMTAwMGAuXG4gICAgICovXG4gICAgcmVzdW1lT25QYXVzZVJldHJ5SW50ZXJ2YWw6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHYyIGF1ZGlvIGVuZ2luZSB0aGF0IHVzZXMgdGhlIFdlYkF1ZGlvIEFQSS5cbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoZSBhdWRpbyBlbmdpbmUuXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjcmVhdGVkIGF1ZGlvIGVuZ2luZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUF1ZGlvRW5naW5lQXN5bmMob3B0aW9uczogUGFydGlhbDxJV2ViQXVkaW9FbmdpbmVPcHRpb25zPiA9IHt9KTogUHJvbWlzZTxBdWRpb0VuZ2luZVYyPiB7XG4gICAgY29uc3QgZW5naW5lID0gbmV3IF9XZWJBdWRpb0VuZ2luZShvcHRpb25zKTtcbiAgICBhd2FpdCBlbmdpbmUuX2luaXRBc3luYyhvcHRpb25zKTtcbiAgICByZXR1cm4gZW5naW5lO1xufVxuXG5jb25zdCBGb3JtYXRNaW1lVHlwZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgYWFjOiBcImF1ZGlvL2FhY1wiLFxuICAgIGFjMzogXCJhdWRpby9hYzNcIixcbiAgICBmbGFjOiBcImF1ZGlvL2ZsYWNcIixcbiAgICBtNGE6IFwiYXVkaW8vbXA0XCIsXG4gICAgbXAzOiAnYXVkaW8vbXBlZzsgY29kZWNzPVwibXAzXCInLFxuICAgIG1wNDogXCJhdWRpby9tcDRcIixcbiAgICBvZ2c6ICdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJyxcbiAgICB3YXY6IFwiYXVkaW8vd2F2XCIsXG4gICAgd2VibTogJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJyxcbn07XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9FbmdpbmUgZXh0ZW5kcyBBdWRpb0VuZ2luZVYyIHtcbiAgICBwcml2YXRlIF9hdWRpb0NvbnRleHRTdGFydGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZGVzdGluYXRpb25Ob2RlOiBOdWxsYWJsZTxBdWRpb05vZGU+ID0gbnVsbDtcbiAgICBwcml2YXRlIF9pbnZhbGlkRm9ybWF0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgX2lzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9saXN0ZW5lcjogTnVsbGFibGU8X1NwYXRpYWxBdWRpb0xpc3RlbmVyPiA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGlzdGVuZXJBdXRvVXBkYXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9saXN0ZW5lck1pblVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfbWFpbk91dDogX1dlYkF1ZGlvTWFpbk91dDtcbiAgICBwcml2YXRlIF9wYXVzZUNhbGxlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Jlc3VtZU9uSW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgIHByaXZhdGUgX3Jlc3VtZU9uUGF1c2UgPSB0cnVlO1xuICAgIHByaXZhdGUgX3Jlc3VtZU9uUGF1c2VSZXRyeUludGVydmFsID0gMTAwMDtcbiAgICBwcml2YXRlIF9yZXN1bWVPblBhdXNlVGltZXJJZDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIF9yZXN1bWVQcm9taXNlOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc2lsZW50SHRtbEF1ZGlvOiBOdWxsYWJsZTxIVE1MQXVkaW9FbGVtZW50PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdW5tdXRlVUk6IE51bGxhYmxlPF9XZWJBdWRpb1VubXV0ZVVJPiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdXBkYXRlT2JzZXJ2YWJsZTogTnVsbGFibGU8T2JzZXJ2YWJsZTx2b2lkPj4gPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3ZhbGlkRm9ybWF0cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgX3ZvbHVtZSA9IDE7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlYWRvbmx5IF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgX2lzVXNpbmdPZmZsaW5lQXVkaW9Db250ZXh0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlYWRvbmx5IGlzUmVhZHlQcm9taXNlOiBQcm9taXNlPHZvaWQ+ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUlzUmVhZHlQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgdXNlckdlc3R1cmVPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPHZvaWQ+ID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxJV2ViQXVkaW9FbmdpbmVPcHRpb25zPiA9IHt9KSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5saXN0ZW5lckF1dG9VcGRhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lckF1dG9VcGRhdGUgPSBvcHRpb25zLmxpc3RlbmVyQXV0b1VwZGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5saXN0ZW5lck1pblVwZGF0ZVRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyTWluVXBkYXRlVGltZSA9IG9wdGlvbnMubGlzdGVuZXJNaW5VcGRhdGVUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdm9sdW1lID0gb3B0aW9ucy52b2x1bWUgPz8gMTtcblxuICAgICAgICBpZiAob3B0aW9ucy5hdWRpb0NvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzVXNpbmdPZmZsaW5lQXVkaW9Db250ZXh0ID0gb3B0aW9ucy5hdWRpb0NvbnRleHQgaW5zdGFuY2VvZiBPZmZsaW5lQXVkaW9Db250ZXh0O1xuICAgICAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gb3B0aW9ucy5hdWRpb0NvbnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuZGlzYWJsZURlZmF1bHRVSSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tdXRlVUkgPSBuZXcgX1dlYkF1ZGlvVW5tdXRlVUkodGhpcywgb3B0aW9ucy5kZWZhdWx0VUlQYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2luaXRBc3luYyhvcHRpb25zOiBQYXJ0aWFsPElXZWJBdWRpb0VuZ2luZU9wdGlvbnM+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuX3Jlc3VtZU9uSW50ZXJhY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5yZXN1bWVPbkludGVyYWN0aW9uID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMucmVzdW1lT25JbnRlcmFjdGlvbiA6IHRydWU7XG4gICAgICAgIHRoaXMuX3Jlc3VtZU9uUGF1c2UgPSB0eXBlb2Ygb3B0aW9ucy5yZXN1bWVPblBhdXNlID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMucmVzdW1lT25QYXVzZSA6IHRydWU7XG4gICAgICAgIHRoaXMuX3Jlc3VtZU9uUGF1c2VSZXRyeUludGVydmFsID0gb3B0aW9ucy5yZXN1bWVPblBhdXNlUmV0cnlJbnRlcnZhbCA/PyAxMDAwO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vblVzZXJHZXN0dXJlQXN5bmMpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuX2luaXRBdWRpb0NvbnRleHRBc3luYygpO1xuXG4gICAgICAgIGlmIChfSGFzU3BhdGlhbEF1ZGlvTGlzdGVuZXJPcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lciA9IF9DcmVhdGVTcGF0aWFsQXVkaW9MaXN0ZW5lcih0aGlzLCB0aGlzLl9saXN0ZW5lckF1dG9VcGRhdGUsIHRoaXMuX2xpc3RlbmVyTWluVXBkYXRlVGltZSk7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcmVzb2x2ZUlzUmVhZHlQcm9taXNlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgY3VycmVudFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQ29udGV4dC5jdXJyZW50VGltZSA/PyAwO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKTogQXVkaW9Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtYWluT3V0KCk6IF9XZWJBdWRpb01haW5PdXQge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbk91dDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBsaXN0ZW5lcigpOiBBYnN0cmFjdFNwYXRpYWxBdWRpb0xpc3RlbmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyID8/ICh0aGlzLl9saXN0ZW5lciA9IF9DcmVhdGVTcGF0aWFsQXVkaW9MaXN0ZW5lcih0aGlzLCB0aGlzLl9saXN0ZW5lckF1dG9VcGRhdGUsIHRoaXMuX2xpc3RlbmVyTWluVXBkYXRlVGltZSkpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IEF1ZGlvRW5naW5lVjJTdGF0ZSB7XG4gICAgICAgIC8vIEFsd2F5cyByZXR1cm4gXCJydW5uaW5nXCIgZm9yIE9mZmxpbmVBdWRpb0NvbnRleHQgc28gc291bmQgYHBsYXlgIGNhbGxzIHdvcmsgd2hpbGUgdGhlIGNvbnRleHQgaXMgc3VzcGVuZGVkLlxuICAgICAgICByZXR1cm4gdGhpcy5faXNVc2luZ09mZmxpbmVBdWRpb0NvbnRleHQgPyBcInJ1bm5pbmdcIiA6IHRoaXMuX2F1ZGlvQ29udGV4dC5zdGF0ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fdm9sdW1lID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdm9sdW1lID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuX21haW5PdXQpIHtcbiAgICAgICAgICAgIHRoaXMuX21haW5PdXQudm9sdW1lID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3BlcnR5IHNob3VsZCBvbmx5IGJlIHVzZWQgYnkgdGhlIGxlZ2FjeSBhdWRpbyBlbmdpbmUuXG4gICAgICogQGludGVybmFsXG4gICAgICogKi9cbiAgICBwdWJsaWMgZ2V0IF9hdWRpb0Rlc3RpbmF0aW9uKCk6IEF1ZGlvTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbk5vZGUgPyB0aGlzLl9kZXN0aW5hdGlvbk5vZGUgOiAodGhpcy5fZGVzdGluYXRpb25Ob2RlID0gdGhpcy5fYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IF9hdWRpb0Rlc3RpbmF0aW9uKHZhbHVlOiBOdWxsYWJsZTxBdWRpb05vZGU+KSB7XG4gICAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uTm9kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSB0aGUgbGVnYWN5IGF1ZGlvIGVuZ2luZS5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IF91bm11dGVVSUVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bm11dGVVSSA/IHRoaXMuX3VubXV0ZVVJLmVuYWJsZWQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IF91bm11dGVVSUVuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubXV0ZVVJKSB7XG4gICAgICAgICAgICB0aGlzLl91bm11dGVVSS5lbmFibGVkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUJ1c0FzeW5jKG5hbWU6IHN0cmluZywgb3B0aW9uczogUGFydGlhbDxJQXVkaW9CdXNPcHRpb25zPiA9IHt9KTogUHJvbWlzZTxBdWRpb0J1cz4ge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCIuL3dlYkF1ZGlvQnVzXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ1cyA9IG5ldyBtb2R1bGUuX1dlYkF1ZGlvQnVzKG5hbWUsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICBhd2FpdCBidXMuX2luaXRBc3luYyhvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gYnVzO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlTWFpbkJ1c0FzeW5jKG5hbWU6IHN0cmluZywgb3B0aW9uczogUGFydGlhbDxJTWFpbkF1ZGlvQnVzT3B0aW9ucz4gPSB7fSk6IFByb21pc2U8TWFpbkF1ZGlvQnVzPiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4vd2ViQXVkaW9NYWluQnVzXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ1cyA9IG5ldyBtb2R1bGUuX1dlYkF1ZGlvTWFpbkJ1cyhuYW1lLCB0aGlzKTtcbiAgICAgICAgYXdhaXQgYnVzLl9pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGJ1cztcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZU1pY3JvcGhvbmVTb3VuZFNvdXJjZUFzeW5jKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pOiBQcm9taXNlPEFic3RyYWN0U291bmRTb3VyY2U+IHtcbiAgICAgICAgbGV0IG1lZGlhU3RyZWFtOiBNZWRpYVN0cmVhbTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbWVkaWFTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gYWNjZXNzIG1pY3JvcGhvbmU6IFwiICsgZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5jcmVhdGVTb3VuZFNvdXJjZUFzeW5jKG5hbWUsIG5ldyBNZWRpYVN0cmVhbUF1ZGlvU291cmNlTm9kZSh0aGlzLl9hdWRpb0NvbnRleHQsIHsgbWVkaWFTdHJlYW0gfSksIHtcbiAgICAgICAgICAgIG91dEJ1c0F1dG9EZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlU291bmRBc3luYyhcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBzb3VyY2U6IEFycmF5QnVmZmVyIHwgQXVkaW9CdWZmZXIgfCBTdGF0aWNTb3VuZEJ1ZmZlciB8IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgICBvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZE9wdGlvbnM+ID0ge31cbiAgICApOiBQcm9taXNlPFN0YXRpY1NvdW5kPiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4vd2ViQXVkaW9TdGF0aWNTb3VuZFwiKTtcblxuICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBtb2R1bGUuX1dlYkF1ZGlvU3RhdGljU291bmQobmFtZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGF3YWl0IHNvdW5kLl9pbml0QXN5bmMoc291cmNlLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVTb3VuZEJ1ZmZlckFzeW5jKFxuICAgICAgICBzb3VyY2U6IEFycmF5QnVmZmVyIHwgQXVkaW9CdWZmZXIgfCBTdGF0aWNTb3VuZEJ1ZmZlciB8IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgICBvcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZEJ1ZmZlck9wdGlvbnM+ID0ge31cbiAgICApOiBQcm9taXNlPFN0YXRpY1NvdW5kQnVmZmVyPiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4vd2ViQXVkaW9TdGF0aWNTb3VuZFwiKTtcblxuICAgICAgICBjb25zdCBzb3VuZEJ1ZmZlciA9IG5ldyBtb2R1bGUuX1dlYkF1ZGlvU3RhdGljU291bmRCdWZmZXIodGhpcyk7XG4gICAgICAgIGF3YWl0IHNvdW5kQnVmZmVyLl9pbml0QXN5bmMoc291cmNlLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gc291bmRCdWZmZXI7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVTb3VuZFNvdXJjZUFzeW5jKG5hbWU6IHN0cmluZywgc291cmNlOiBBdWRpb05vZGUsIG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4gPSB7fSk6IFByb21pc2U8QWJzdHJhY3RTb3VuZFNvdXJjZT4ge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoXCIuL3dlYkF1ZGlvU291bmRTb3VyY2VcIik7XG5cbiAgICAgICAgY29uc3Qgc291bmRTb3VyY2UgPSBuZXcgbW9kdWxlLl9XZWJBdWRpb1NvdW5kU291cmNlKG5hbWUsIHNvdXJjZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGF3YWl0IHNvdW5kU291cmNlLl9pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kU291cmNlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlU3RyZWFtaW5nU291bmRBc3luYyhuYW1lOiBzdHJpbmcsIHNvdXJjZTogSFRNTE1lZGlhRWxlbWVudCB8IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb25zOiBQYXJ0aWFsPElTdHJlYW1pbmdTb3VuZE9wdGlvbnM+ID0ge30pOiBQcm9taXNlPFN0cmVhbWluZ1NvdW5kPiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydChcIi4vd2ViQXVkaW9TdHJlYW1pbmdTb3VuZFwiKTtcblxuICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBtb2R1bGUuX1dlYkF1ZGlvU3RyZWFtaW5nU291bmQobmFtZSwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGF3YWl0IHNvdW5kLl9pbml0QXN5bmMoc291cmNlLCBvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gc291bmQ7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fbGlzdGVuZXI/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBudWxsO1xuXG4gICAgICAgIC8vIE5vdGUgdGhhdCBPZmZsaW5lQXVkaW9Db250ZXh0IGRvZXMgbm90IGhhdmUgYSBgY2xvc2VgIG1ldGhvZC5cbiAgICAgICAgaWYgKHRoaXMuX2F1ZGlvQ29udGV4dC5zdGF0ZSAhPT0gXCJjbG9zZWRcIiAmJiAhdGhpcy5faXNVc2luZ09mZmxpbmVBdWRpb0NvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dC5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX29uVXNlckdlc3R1cmVBc3luYyk7XG4gICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RhdGVjaGFuZ2VcIiwgdGhpcy5fb25BdWRpb0NvbnRleHRTdGF0ZUNoYW5nZSk7XG5cbiAgICAgICAgdGhpcy5fc2lsZW50SHRtbEF1ZGlvPy5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLl91cGRhdGVPYnNlcnZhYmxlPy5jbGVhcigpO1xuICAgICAgICB0aGlzLl91cGRhdGVPYnNlcnZhYmxlID0gbnVsbDtcblxuICAgICAgICB0aGlzLl91bm11dGVVST8uZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl91bm11dGVVSSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBmbGFnSW52YWxpZEZvcm1hdChmb3JtYXQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pbnZhbGlkRm9ybWF0cy5hZGQoZm9ybWF0KTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGlzRm9ybWF0VmFsaWQoZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbGlkRm9ybWF0cy5oYXMoZm9ybWF0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faW52YWxpZEZvcm1hdHMuaGFzKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1pbWVUeXBlID0gRm9ybWF0TWltZVR5cGVzW2Zvcm1hdF07XG4gICAgICAgIGlmIChtaW1lVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICBpZiAoYXVkaW8uY2FuUGxheVR5cGUobWltZVR5cGUpID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZhbGlkRm9ybWF0cy5hZGQoZm9ybWF0KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbGlkRm9ybWF0cy5hZGQoZm9ybWF0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIHBhdXNlQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuX2F1ZGlvQ29udGV4dC5zdXNwZW5kKCk7XG5cbiAgICAgICAgdGhpcy5fcGF1c2VDYWxsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgcHVibGljIG92ZXJyaWRlIHJlc3VtZUFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLl9wYXVzZUNhbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXN1bWVQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdW1lUHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Jlc3VtZVByb21pc2UgPSB0aGlzLl9hdWRpb0NvbnRleHQucmVzdW1lKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzLnN0YXRlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzdW1lUHJvbWlzZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyLCBvcHRpb25zOiBOdWxsYWJsZTxQYXJ0aWFsPElBdWRpb1BhcmFtZXRlclJhbXBPcHRpb25zPj4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9tYWluT3V0KSB7XG4gICAgICAgICAgICB0aGlzLl9tYWluT3V0LnNldFZvbHVtZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWluIG91dHB1dCBub3QgaW5pdGlhbGl6ZWQgeWV0LlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2FkZE1haW5CdXMobWFpbkJ1czogTWFpbkF1ZGlvQnVzKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLl9hZGRNYWluQnVzKG1haW5CdXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3JlbW92ZU1haW5CdXMobWFpbkJ1czogTWFpbkF1ZGlvQnVzKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLl9yZW1vdmVNYWluQnVzKG1haW5CdXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2FkZE5vZGUobm9kZTogQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSk6IHZvaWQge1xuICAgICAgICBzdXBlci5fYWRkTm9kZShub2RlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIF9yZW1vdmVOb2RlKG5vZGU6IEFic3RyYWN0TmFtZWRBdWRpb05vZGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuX3JlbW92ZU5vZGUobm9kZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBfYWRkU291bmQoc291bmQ6IEFic3RyYWN0U291bmQpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuX2FkZFNvdW5kKHNvdW5kKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIF9yZW1vdmVTb3VuZChzb3VuZDogQWJzdHJhY3RTb3VuZCk6IHZvaWQge1xuICAgICAgICBzdXBlci5fcmVtb3ZlU291bmQoc291bmQpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgX2FkZFVwZGF0ZU9ic2VydmVyKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fdXBkYXRlT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX3N0YXJ0VXBkYXRpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX3JlbW92ZVVwZGF0ZU9ic2VydmVyKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVPYnNlcnZhYmxlLnJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRBdWRpb0NvbnRleHRBc3luYzogKCkgPT4gUHJvbWlzZTx2b2lkPiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLCB0aGlzLl9vbkF1ZGlvQ29udGV4dFN0YXRlQ2hhbmdlKTtcblxuICAgICAgICB0aGlzLl9tYWluT3V0ID0gbmV3IF9XZWJBdWRpb01haW5PdXQodGhpcyk7XG4gICAgICAgIHRoaXMuX21haW5PdXQudm9sdW1lID0gdGhpcy5fdm9sdW1lO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTWFpbkJ1c0FzeW5jKFwiZGVmYXVsdFwiKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfb25BdWRpb0NvbnRleHRTdGF0ZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX3Jlc3VtZU9uUGF1c2VUaW1lcklkKTtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dFN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcmVzdW1lUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIgfHwgdGhpcy5zdGF0ZSA9PT0gXCJpbnRlcnJ1cHRlZFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXVkaW9Db250ZXh0U3RhcnRlZCAmJiB0aGlzLl9yZXN1bWVPblBhdXNlICYmICF0aGlzLl9wYXVzZUNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVzdW1lT25QYXVzZVRpbWVySWQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzdW1lT25QYXVzZVRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVBc3luYygpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuX3Jlc3VtZU9uUGF1c2VSZXRyeUludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uVXNlckdlc3R1cmVBc3luYzogKCkgPT4gdm9pZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc3VtZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2F1ZGlvQ29udGV4dC5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9uIGlPUyB0aGUgcmluZ2VyIHN3aXRjaCBtdXN0IGJlIHR1cm5lZCBvbiBmb3IgV2ViQXVkaW8gdG8gcGxheS5cbiAgICAgICAgLy8gVGhpcyBnZXRzIFdlYkF1ZGlvIHRvIHBsYXkgd2l0aCB0aGUgcmluZ2VyIHN3aXRjaCB0dXJuZWQgb2ZmIGJ5IHBsYXlpbmcgYW4gSFRNTEF1ZGlvRWxlbWVudC5cbiAgICAgICAgaWYgKCF0aGlzLl9zaWxlbnRIdG1sQXVkaW8pIHtcbiAgICAgICAgICAgIHRoaXMuX3NpbGVudEh0bWxBdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcblxuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSB0aGlzLl9zaWxlbnRIdG1sQXVkaW87XG4gICAgICAgICAgICBhdWRpby5jb250cm9scyA9IGZhbHNlO1xuICAgICAgICAgICAgYXVkaW8ucHJlbG9hZCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgYXVkaW8ubG9vcCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFdhdmUgZGF0YSBmb3IgMC4wMDAxIHNlY29uZHMgb2Ygc2lsZW5jZS5cbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IFwiZGF0YTphdWRpby93YXY7YmFzZTY0LFVrbEdSakFBQUFCWFFWWkZabTEwSUJBQUFBQUJBQUVBZ0xzQUFBQjNBUUFDQUJBQVpHRjBZUXdBQUFBQUFBRUEvdjhDQVAvL0FRQT1cIjtcblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51c2VyR2VzdHVyZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX3Jlc29sdmVJc1JlYWR5UHJvbWlzZTogKCkgPT4gdm9pZDtcblxuICAgIHByaXZhdGUgX3N0YXJ0VXBkYXRpbmcgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc1VwZGF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJydW5uaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwicnVubmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgX3VwZGF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZU9ic2VydmFibGU/Lmhhc09ic2VydmVycygpKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3VwZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgX01haW5BdWRpb091dCB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL21haW5BdWRpb091dFwiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucyB9IGZyb20gXCIuLi9hdWRpb1BhcmFtZXRlclwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUgfSBmcm9tIFwiLi93ZWJBdWRpb05vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9XZWJBdWRpb01haW5PdXQgZXh0ZW5kcyBfTWFpbkF1ZGlvT3V0IGltcGxlbWVudHMgSVdlYkF1ZGlvSW5Ob2RlIHtcbiAgICBwcml2YXRlIF9nYWluTm9kZTogR2Fpbk5vZGU7XG4gICAgcHJpdmF0ZSBfdm9sdW1lOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSkge1xuICAgICAgICBzdXBlcihlbmdpbmUpO1xuXG4gICAgICAgIHRoaXMuX3NldEdhaW5Ob2RlKG5ldyBHYWluTm9kZShlbmdpbmUuX2F1ZGlvQ29udGV4dCkpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3ZvbHVtZS5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX2dhaW5Ob2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5fZGVzdGluYXRpb25Ob2RlLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCk6IEdhaW5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhaW5Ob2RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgX2luTm9kZSh2YWx1ZTogR2Fpbk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dhaW5Ob2RlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0R2Fpbk5vZGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lLnRhcmdldFZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3ZvbHVtZS50YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9kZXN0aW5hdGlvbk5vZGUoKTogQXVkaW9Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLl9hdWRpb0Rlc3RpbmF0aW9uO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb01haW5PdXRcIjtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyLCBvcHRpb25zOiBOdWxsYWJsZTxQYXJ0aWFsPElBdWRpb1BhcmFtZXRlclJhbXBPcHRpb25zPj4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3ZvbHVtZS5zZXRUYXJnZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0R2Fpbk5vZGUoZ2Fpbk5vZGU6IEdhaW5Ob2RlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9nYWluTm9kZSA9PT0gZ2Fpbk5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2dhaW5Ob2RlPy5kaXNjb25uZWN0KCk7XG4gICAgICAgIGdhaW5Ob2RlLmNvbm5lY3QodGhpcy5fZGVzdGluYXRpb25Ob2RlKTtcblxuICAgICAgICB0aGlzLl92b2x1bWUgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KHRoaXMuZW5naW5lLCBnYWluTm9kZS5nYWluKTtcblxuICAgICAgICB0aGlzLl9nYWluTm9kZSA9IGdhaW5Ob2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4vd2ViQXVkaW9FbmdpbmVcIjtcblxuLyoqXG4gKiBBZGRzIGEgVUkgYnV0dG9uIHRoYXQgc3RhcnRzIHRoZSBhdWRpbyBlbmdpbmUncyB1bmRlcmx5aW5nIGF1ZGlvIGNvbnRleHQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIGl0LlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9Vbm11dGVVSSB7XG4gICAgcHJpdmF0ZSBfYnV0dG9uOiBOdWxsYWJsZTxIVE1MQnV0dG9uRWxlbWVudD4gPSBudWxsO1xuICAgIHByaXZhdGUgX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2VuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuICAgIHByaXZhdGUgX3N0eWxlOiBOdWxsYWJsZTxIVE1MU3R5bGVFbGVtZW50PiA9IG51bGw7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lLCBwYXJlbnRFbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRFbGVtZW50IHx8IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkRW5naW5lPy5nZXRJbnB1dEVsZW1lbnQoKT8ucGFyZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICBjb25zdCB0b3AgPSAocGFyZW50Py5vZmZzZXRUb3AgfHwgMCkgKyAyMDtcblxuICAgICAgICB0aGlzLl9zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgdGhpcy5fc3R5bGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgICAgICBgLmJhYnlsb25Vbm11dGV7cG9zaXRpb246YWJzb2x1dGU7dG9wOiR7dG9wfXB4O21hcmdpbi1sZWZ0OjIwcHg7aGVpZ2h0OjQwcHg7d2lkdGg6NjBweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTEsNTEsNTEsMC43KTtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHZlcnNpb24lM0QlMjIxLjElMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMzklMjIlMjBoZWlnaHQlM0QlMjIzMiUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDM5JTIwMzIlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMndoaXRlJTIyJTIwZCUzRCUyMk05LjYyNSUyMDE4LjkzOGwtMC4wMzElMjAwLjAxNmgtNC45NTNxLTAuMDE2JTIwMC0wLjAzMS0wLjAxNnYtMTIuNDUzcTAtMC4wMTYlMjAwLjAzMS0wLjAxNmg0Ljk1M3EwLjAzMSUyMDAlMjAwLjAzMSUyMDAuMDE2djEyLjQ1M3pNMTIuMTI1JTIwNy42ODhsOC43MTktOC43MDN2MjcuNDUzbC04LjcxOS04LjcxOS0wLjAxNi0wLjA0N3YtOS45Mzh6TTIzLjM1OSUyMDcuODc1bDEuNDA2LTEuNDA2JTIwNC4yMTklMjA0LjIwMyUyMDQuMjAzLTQuMjAzJTIwMS40MjIlMjAxLjQwNi00LjIxOSUyMDQuMjE5JTIwNC4yMTklMjA0LjIwMy0xLjQ4NCUyMDEuMzU5LTQuMTQxLTQuMTU2LTQuMjE5JTIwNC4yMTktMS40MDYtMS40MjIlMjA0LjIxOS00LjIwM3olMjIlM0UlM0MlMkZwYXRoJTNFJTNDJTJGc3ZnJTNFXCIpO2JhY2tncm91bmQtc2l6ZTo4MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtcG9zaXRpb24teTo0cHg7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO3RyYW5zaXRpb246dHJhbnNmb3JtIDAuMTI1cyBlYXNlLW91dDtjdXJzb3I6cG9pbnRlcjt6LWluZGV4Ojk5OTk7fS5iYWJ5bG9uVW5tdXRlOmhvdmVye3RyYW5zZm9ybTpzY2FsZSgxLjA1KX1gXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5fc3R5bGUpO1xuXG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc05hbWUgPSBcImJhYnlsb25Vbm11dGVcIjtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmlkID0gXCJiYWJ5bG9uVW5tdXRlQnV0dG9uXCI7XG5cbiAgICAgICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgICAgICB0aGlzLl9lbmdpbmUudW5sb2NrQXN5bmMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuX2J1dHRvbik7XG5cbiAgICAgICAgdGhpcy5fZW5naW5lLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUuYWRkKHRoaXMuX29uU3RhdGVDaGFuZ2VkKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2J1dHRvbj8ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fc3R5bGU/LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9zdHlsZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fZW5naW5lLnN0YXRlQ2hhbmdlZE9ic2VydmFibGUucmVtb3ZlQ2FsbGJhY2sodGhpcy5fb25TdGF0ZUNoYW5nZWQpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VuZ2luZS5zdGF0ZSAhPT0gXCJydW5uaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2J1dHRvbiB8fCAhdGhpcy5fZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9idXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZW5naW5lLnN0YXRlID09PSBcInJ1bm5pbmdcIikge1xuICAgICAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2hvdygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==