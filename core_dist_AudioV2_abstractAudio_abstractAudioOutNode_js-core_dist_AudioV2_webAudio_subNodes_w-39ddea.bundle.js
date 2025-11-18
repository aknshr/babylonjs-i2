"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_abstractAudio_abstractAudioOutNode_js-core_dist_AudioV2_webAudio_subNodes_w-39ddea"],{

/***/ "../core/dist/AudioV2/abstractAudio/abstractAudioOutNode.js":
/*!******************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractAudioOutNode.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAudioOutNode: () => (/* binding */ AbstractAudioOutNode)
/* harmony export */ });
/* harmony import */ var _abstractAudioNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioNode.js");
/* harmony import */ var _subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subNodes/volumeAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js");
/* harmony import */ var _subProperties_audioAnalyzer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subProperties/audioAnalyzer */ "../core/dist/AudioV2/abstractAudio/subProperties/audioAnalyzer.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * Abstract class representing and audio output node with an analyzer and volume control.
 */
class AbstractAudioOutNode extends _abstractAudioNode__WEBPACK_IMPORTED_MODULE_0__.AbstractNamedAudioNode {
    constructor(name, engine, nodeType) {
        super(name, engine, nodeType);
        this._analyzer = null;
    }
    /**
     * The analyzer features of the bus.
     */
    get analyzer() {
        return this._analyzer ?? (this._analyzer = new _subProperties_audioAnalyzer__WEBPACK_IMPORTED_MODULE_2__._AudioAnalyzer(this._subGraph));
    }
    /**
     * The audio output volume.
     */
    get volume() {
        return (0,_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._GetVolumeAudioProperty)(this._subGraph, "volume");
    }
    set volume(value) {
        // The volume subnode is created on initialization and should always exist.
        const node = (0,_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._GetVolumeAudioSubNode)(this._subGraph);
        if (!node) {
            throw new Error("No volume subnode");
        }
        node.volume = value;
    }
    /**
     * Releases associated resources.
     */
    dispose() {
        super.dispose();
        this._analyzer?.dispose();
        this._analyzer = null;
        this._subGraph.dispose();
    }
    /**
     * Sets the audio output volume with optional ramping.
     * If the duration is 0 then the volume is set immediately, otherwise it is ramped to the new value over the given duration using the given shape.
     * If a ramp is already in progress then the volume is not set and an error is thrown.
     * @param value The value to set the volume to.
     * @param options The options to use for ramping the volume change.
     */
    setVolume(value, options = null) {
        const node = (0,_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._GetVolumeAudioSubNode)(this._subGraph);
        if (!node) {
            throw new Error("No volume subnode");
        }
        node.setVolume(value, options);
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

/***/ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubGraph.js":
/*!****************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubGraph.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _AbstractAudioSubGraph: () => (/* binding */ _AbstractAudioSubGraph)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Adds common sub graph functionality to an audio node.
 *
 * Audio nodes such as static sounds, streaming sounds, and buses can use audio sub graphs to process audio internally
 * before sending it to connected downstream audio nodes. This is useful for applying effects, spatial audio, and other
 * audio processing tasks common to multiple audio node classes.
 *
 * A key feature of audio sub graphs is their audio sub nodes are created asynchronously on demand so the minimum set
 * of sub nodes are used at all times to save memory and CPU resources. The tradeoff is a small delay when first
 * setting a property backed by a sub node. This delay is avoided by using the appropriate options to initialize the
 * sub node on creation, e.g. `spatialEnabled` and `stereoEnabled`, or by setting any creation option backed by the
 * sub node, e.g. `spatialPosition` and `stereoPan`.
 *
 * @internal
 */
class _AbstractAudioSubGraph {
    constructor() {
        this._createSubNodePromises = {};
        this._isDisposed = false;
        this._subNodes = {};
        this._onSubNodeDisposed = (node) => {
            const subNode = node;
            delete this._subNodes[subNode.name];
            this._onSubNodesChanged();
        };
    }
    /**
     * Executes the given callback with the named sub node, creating the sub node if needed.
     *
     * @param name The name of the sub node
     * @param callback The function to call with the named sub node
     *
     * @internal
     */
    callOnSubNode(name, callback) {
        const node = this.getSubNode(name);
        if (node) {
            callback(node);
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        this._createSubNodePromisesResolvedAsync().then(() => {
            const node = this.getSubNode(name);
            if (node) {
                callback(node);
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this.createAndAddSubNodeAsync(name).then((node) => {
                callback(node);
            });
        });
    }
    /**
     * Creates the named subnode and adds it to the sub graph.
     *
     * @param name The name of the sub node.
     * @returns A promise that resolves to the created sub node.
     *
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    createAndAddSubNodeAsync(name) {
        // eslint-disable-next-line github/no-then
        this._createSubNodePromises[name] ||= this._createSubNode(name).then((node) => {
            this._addSubNode(node);
            return node;
        });
        return this._createSubNodePromises[name];
    }
    /**
     * Releases associated resources.
     *
     * @internal
     */
    dispose() {
        this._isDisposed = true;
        const subNodes = Object.values(this._subNodes);
        for (const subNode of subNodes) {
            subNode.dispose();
        }
        this._subNodes = {};
        this._createSubNodePromises = {};
    }
    /**
     * Gets a previously created sub node.
     *
     * @param name - The name of the sub node
     * @returns The named sub node, or `null` if it has not been created, yet
     *
     * @internal
     * */
    getSubNode(name) {
        return this._subNodes[name] ?? null;
    }
    /**
     * Removes a sub node from the sub graph.
     *
     * @param subNode - The sub node to remove
     * @returns A promise that resolves when the sub node is removed
     *
     * @internal
     */
    async removeSubNodeAsync(subNode) {
        await this._createSubNodePromisesResolvedAsync();
        const name = subNode.name;
        if (this._subNodes[name]) {
            delete this._subNodes[name];
        }
        delete this._createSubNodePromises[name];
        this._onSubNodesChanged();
    }
    async _createSubNodePromisesResolvedAsync() {
        return await Promise.all(Object.values(this._createSubNodePromises));
    }
    _addSubNode(node) {
        if (this._isDisposed) {
            node.dispose();
            return;
        }
        this._subNodes[node.name] = node;
        node.onDisposeObservable.addOnce(this._onSubNodeDisposed);
        this._onSubNodesChanged();
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

/***/ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js":
/*!***************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _AbstractAudioSubNode: () => (/* binding */ _AbstractAudioSubNode)
/* harmony export */ });
/* harmony import */ var _abstractAudioNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudioNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/** @internal */
class _AbstractAudioSubNode extends _abstractAudioNode__WEBPACK_IMPORTED_MODULE_0__.AbstractNamedAudioNode {
    /** @internal */
    constructor(name, engine) {
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */);
    }
    /** @internal */
    connect(node) {
        if (!this._connect(node)) {
            throw new Error("Connect failed");
        }
    }
    /** @internal */
    disconnect(node) {
        if (!this._disconnect(node)) {
            throw new Error("Disconnect failed");
        }
    }
    /** @internal */
    disconnectAll() {
        if (!this._downstreamNodes) {
            throw new Error("Disconnect failed");
        }
        const it = this._downstreamNodes.values();
        for (let next = it.next(); !next.done; next = it.next()) {
            if (!this._disconnect(next.value)) {
                throw new Error("Disconnect failed");
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

/***/ "../core/dist/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js":
/*!***************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _AudioAnalyzerSubNode: () => (/* binding */ _AudioAnalyzerSubNode),
/* harmony export */   _GetAudioAnalyzerSubNode: () => (/* binding */ _GetAudioAnalyzerSubNode),
/* harmony export */   _SetAudioAnalyzerProperty: () => (/* binding */ _SetAudioAnalyzerProperty)
/* harmony export */ });
/* harmony import */ var _subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subProperties/abstractAudioAnalyzer */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js");
/* harmony import */ var _abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _AudioAnalyzerSubNode extends _abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._AbstractAudioSubNode {
    constructor(engine) {
        super("Analyzer" /* AudioSubNode.ANALYZER */, engine);
    }
    /** @internal */
    setOptions(options) {
        this.fftSize = options.analyzerFFTSize ?? _subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_0__._AudioAnalyzerDefaults.fftSize;
        this.minDecibels = options.analyzerMinDecibels ?? _subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_0__._AudioAnalyzerDefaults.minDecibels;
        this.maxDecibels = options.analyzerMaxDecibels ?? _subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_0__._AudioAnalyzerDefaults.maxDecibels;
        this.smoothing = options.analyzerSmoothing ?? _subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_0__._AudioAnalyzerDefaults.smoothing;
    }
}
/** @internal */
function _GetAudioAnalyzerSubNode(subGraph) {
    return subGraph.getSubNode("Analyzer" /* AudioSubNode.ANALYZER */);
}
/** @internal */
function _SetAudioAnalyzerProperty(subGraph, property, value) {
    subGraph.callOnSubNode("Analyzer" /* AudioSubNode.ANALYZER */, (node) => {
        node[property] = value;
    });
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

/***/ "../core/dist/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js":
/*!*************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GetVolumeAudioProperty: () => (/* binding */ _GetVolumeAudioProperty),
/* harmony export */   _GetVolumeAudioSubNode: () => (/* binding */ _GetVolumeAudioSubNode),
/* harmony export */   _VolumeAudioDefaults: () => (/* binding */ _VolumeAudioDefaults),
/* harmony export */   _VolumeAudioSubNode: () => (/* binding */ _VolumeAudioSubNode)
/* harmony export */ });
/* harmony import */ var _subNodes_abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subNodes/abstractAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/** @internal */
const _VolumeAudioDefaults = {
    volume: 1,
};
/** @internal */
class _VolumeAudioSubNode extends _subNodes_abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._AbstractAudioSubNode {
    constructor(engine) {
        super("Volume" /* AudioSubNode.VOLUME */, engine);
    }
    /** @internal */
    setOptions(options) {
        this.setVolume(options.volume ?? _VolumeAudioDefaults.volume, { shape: "none" /* AudioParameterRampShape.None */ });
    }
}
/** @internal */
function _GetVolumeAudioSubNode(subGraph) {
    return subGraph.getSubNode("Volume" /* AudioSubNode.VOLUME */);
}
/** @internal */
function _GetVolumeAudioProperty(subGraph, property) {
    return _GetVolumeAudioSubNode(subGraph)?.[property] ?? _VolumeAudioDefaults[property];
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js":
/*!*********************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAudioAnalyzer: () => (/* binding */ AbstractAudioAnalyzer),
/* harmony export */   _AudioAnalyzerDefaults: () => (/* binding */ _AudioAnalyzerDefaults),
/* harmony export */   _HasAudioAnalyzerOptions: () => (/* binding */ _HasAudioAnalyzerOptions)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

const _AudioAnalyzerDefaults = {
    fftSize: 2048,
    minDecibels: -100,
    maxDecibels: -30,
    smoothing: 0.8,
};
/**
 * @param options The audio analyzer options to check.
 * @returns `true` if audio analyzer options are defined, otherwise `false`.
 */
function _HasAudioAnalyzerOptions(options) {
    return (options.analyzerEnabled ||
        options.analyzerFFTSize !== undefined ||
        options.analyzerMinDecibels !== undefined ||
        options.analyzerMaxDecibels !== undefined ||
        options.analyzerSmoothing !== undefined);
}
/**
 * An AudioAnalyzer converts time-domain audio data into the frequency-domain.
 */
class AbstractAudioAnalyzer {
    /**
     * The number of data values that will be returned when calling getByteFrequencyData() or getFloatFrequencyData(). This is always half the `fftSize`.
     */
    get frequencyBinCount() {
        return this.fftSize / 2;
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/audioAnalyzer.js":
/*!*************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/audioAnalyzer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _AudioAnalyzer: () => (/* binding */ _AudioAnalyzer),
/* harmony export */   _GetEmptyByteFrequencyData: () => (/* binding */ _GetEmptyByteFrequencyData),
/* harmony export */   _GetEmptyFloatFrequencyData: () => (/* binding */ _GetEmptyFloatFrequencyData)
/* harmony export */ });
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractAudioAnalyzer */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js");
/* harmony import */ var _subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subNodes/audioAnalyzerSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




let EmptyByteFrequencyData = null;
let EmptyFloatFrequencyData = null;
/** @internal */
function _GetEmptyByteFrequencyData() {
    if (!EmptyByteFrequencyData) {
        EmptyByteFrequencyData = new Uint8Array();
    }
    return EmptyByteFrequencyData;
}
/** @internal */
function _GetEmptyFloatFrequencyData() {
    if (!EmptyFloatFrequencyData) {
        EmptyFloatFrequencyData = new Float32Array();
    }
    return EmptyFloatFrequencyData;
}
/** @internal */
class _AudioAnalyzer extends _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_1__.AbstractAudioAnalyzer {
    /** @internal */
    constructor(subGraph) {
        super();
        this._fftSize = _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_1__._AudioAnalyzerDefaults.fftSize;
        this._maxDecibels = _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_1__._AudioAnalyzerDefaults.maxDecibels;
        this._minDecibels = _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_1__._AudioAnalyzerDefaults.minDecibels;
        this._smoothing = _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_1__._AudioAnalyzerDefaults.smoothing;
        this._subGraph = subGraph;
    }
    /** @internal */
    get fftSize() {
        return this._fftSize;
    }
    set fftSize(value) {
        this._fftSize = value;
        (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._SetAudioAnalyzerProperty)(this._subGraph, "fftSize", value);
    }
    /** @internal */
    get isEnabled() {
        return (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._GetAudioAnalyzerSubNode)(this._subGraph) !== null;
    }
    /** @internal */
    get minDecibels() {
        return this._minDecibels;
    }
    set minDecibels(value) {
        this._minDecibels = value;
        (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._SetAudioAnalyzerProperty)(this._subGraph, "minDecibels", value);
    }
    /** @internal */
    get maxDecibels() {
        return this._maxDecibels;
    }
    set maxDecibels(value) {
        this._maxDecibels = value;
        (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._SetAudioAnalyzerProperty)(this._subGraph, "maxDecibels", value);
    }
    /** @internal */
    get smoothing() {
        return this._smoothing;
    }
    set smoothing(value) {
        this._smoothing = value;
        (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._SetAudioAnalyzerProperty)(this._subGraph, "smoothing", value);
    }
    /** @internal */
    dispose() {
        const subNode = (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._GetAudioAnalyzerSubNode)(this._subGraph);
        if (subNode) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._subGraph.removeSubNodeAsync(subNode);
            subNode.dispose();
        }
    }
    /** @internal */
    async enableAsync() {
        const subNode = (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._GetAudioAnalyzerSubNode)(this._subGraph);
        if (!subNode) {
            await this._subGraph.createAndAddSubNodeAsync("Analyzer" /* AudioSubNode.ANALYZER */);
        }
    }
    /** @internal */
    getByteFrequencyData() {
        const subNode = (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._GetAudioAnalyzerSubNode)(this._subGraph);
        if (!subNode) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("AudioAnalyzer not enabled");
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.enableAsync();
            return _GetEmptyByteFrequencyData();
        }
        return subNode.getByteFrequencyData();
    }
    /** @internal */
    getFloatFrequencyData() {
        const subNode = (0,_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_2__._GetAudioAnalyzerSubNode)(this._subGraph);
        if (!subNode) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("AudioAnalyzer not enabled");
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.enableAsync();
            return _GetEmptyFloatFrequencyData();
        }
        return subNode.getFloatFrequencyData();
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

/***/ "../core/dist/AudioV2/webAudio/subNodes/volumeWebAudioSubNode.js":
/*!***********************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subNodes/volumeWebAudioSubNode.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CreateVolumeAudioSubNodeAsync: () => (/* binding */ _CreateVolumeAudioSubNodeAsync),
/* harmony export */   _VolumeWebAudioSubNode: () => (/* binding */ _VolumeWebAudioSubNode)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subNodes/volumeAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js");
/* harmony import */ var _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/webAudioParameterComponent */ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
// eslint-disable-next-line @typescript-eslint/require-await
async function _CreateVolumeAudioSubNodeAsync(engine) {
    return new _VolumeWebAudioSubNode(engine);
}
/** @internal */
class _VolumeWebAudioSubNode extends _abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._VolumeAudioSubNode {
    /** @internal */
    constructor(engine) {
        super(engine);
        const gainNode = (this.node = new GainNode(engine._audioContext));
        this._volume = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_1__._WebAudioParameterComponent(engine, gainNode.gain);
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._volume.dispose();
    }
    /** @internal */
    get volume() {
        return this._volume.value;
    }
    /** @internal */
    set volume(value) {
        this.setVolume(value);
    }
    /** @internal */
    get _inNode() {
        return this.node;
    }
    /** @internal */
    get _outNode() {
        return this.node;
    }
    /** @internal */
    setVolume(value, options = null) {
        this._volume.setTargetValue(value, options);
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this.node.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this.node.disconnect(node._inNode);
        }
        return true;
    }
    /** @internal */
    getClassName() {
        return "_VolumeWebAudioSubNode";
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

/***/ "../core/dist/AudioV2/webAudio/subNodes/webAudioAnalyzerSubNode.js":
/*!*************************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subNodes/webAudioAnalyzerSubNode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CreateAudioAnalyzerSubNodeAsync: () => (/* binding */ _CreateAudioAnalyzerSubNodeAsync),
/* harmony export */   _WebAudioAnalyzerSubNode: () => (/* binding */ _WebAudioAnalyzerSubNode)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subNodes/audioAnalyzerSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js");
/* harmony import */ var _abstractAudio_subProperties_audioAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subProperties/audioAnalyzer */ "../core/dist/AudioV2/abstractAudio/subProperties/audioAnalyzer.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
// eslint-disable-next-line @typescript-eslint/require-await
async function _CreateAudioAnalyzerSubNodeAsync(engine) {
    return new _WebAudioAnalyzerSubNode(engine);
}
/** @internal */
class _WebAudioAnalyzerSubNode extends _abstractAudio_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_0__._AudioAnalyzerSubNode {
    /** @internal */
    constructor(engine) {
        super(engine);
        this._byteFrequencyData = null;
        this._floatFrequencyData = null;
        this._analyzerNode = new AnalyserNode(engine._audioContext);
    }
    /** @internal */
    get fftSize() {
        return this._analyzerNode.fftSize;
    }
    set fftSize(value) {
        if (value === this._analyzerNode.fftSize) {
            return;
        }
        this._analyzerNode.fftSize = value;
        this._clearArrays();
    }
    /** @internal */
    get _inNode() {
        return this._analyzerNode;
    }
    /** @internal */
    get minDecibels() {
        return this._analyzerNode.minDecibels;
    }
    set minDecibels(value) {
        this._analyzerNode.minDecibels = value;
    }
    /** @internal */
    get maxDecibels() {
        return this._analyzerNode.maxDecibels;
    }
    set maxDecibels(value) {
        this._analyzerNode.maxDecibels = value;
    }
    /** @internal */
    get smoothing() {
        return this._analyzerNode.smoothingTimeConstant;
    }
    set smoothing(value) {
        this._analyzerNode.smoothingTimeConstant = value;
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._clearArrays();
        this._byteFrequencyData = null;
        this._floatFrequencyData = null;
        this._analyzerNode.disconnect();
    }
    /** @internal */
    getClassName() {
        return "_WebAudioAnalyzerSubNode";
    }
    /** @internal */
    getByteFrequencyData() {
        if (!this._byteFrequencyData || this._byteFrequencyData.length === 0) {
            this._byteFrequencyData = new Uint8Array(this._analyzerNode.frequencyBinCount);
        }
        this._analyzerNode.getByteFrequencyData(this._byteFrequencyData);
        return this._byteFrequencyData;
    }
    /** @internal */
    getFloatFrequencyData() {
        if (!this._floatFrequencyData || this._floatFrequencyData.length === 0) {
            this._floatFrequencyData = new Float32Array(this._analyzerNode.frequencyBinCount);
        }
        this._analyzerNode.getFloatFrequencyData(this._floatFrequencyData);
        return this._floatFrequencyData;
    }
    _clearArrays() {
        this._byteFrequencyData?.set((0,_abstractAudio_subProperties_audioAnalyzer__WEBPACK_IMPORTED_MODULE_1__._GetEmptyByteFrequencyData)());
        this._floatFrequencyData?.set((0,_abstractAudio_subProperties_audioAnalyzer__WEBPACK_IMPORTED_MODULE_1__._GetEmptyFloatFrequencyData)());
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

/***/ "../core/dist/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js":
/*!**********************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioBaseSubGraph: () => (/* binding */ _WebAudioBaseSubGraph)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subNodes_abstractAudioSubGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subNodes/abstractAudioSubGraph */ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubGraph.js");
/* harmony import */ var _abstractAudio_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subNodes/audioAnalyzerSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js");
/* harmony import */ var _abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstractAudio/subNodes/volumeAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js");
/* harmony import */ var _abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractAudioAnalyzer */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js");
/* harmony import */ var _volumeWebAudioSubNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./volumeWebAudioSubNode */ "../core/dist/AudioV2/webAudio/subNodes/volumeWebAudioSubNode.js");
/* harmony import */ var _webAudioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webAudioAnalyzerSubNode */ "../core/dist/AudioV2/webAudio/subNodes/webAudioAnalyzerSubNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/** @internal */
class _WebAudioBaseSubGraph extends _abstractAudio_subNodes_abstractAudioSubGraph__WEBPACK_IMPORTED_MODULE_0__._AbstractAudioSubGraph {
    /** @internal */
    constructor(owner) {
        super();
        this._outputNode = null;
        this._owner = owner;
    }
    /** @internal */
    async initAsync(options) {
        const hasAnalyzerOptions = (0,_abstractAudio_subProperties_abstractAudioAnalyzer__WEBPACK_IMPORTED_MODULE_3__._HasAudioAnalyzerOptions)(options);
        if (hasAnalyzerOptions) {
            await this.createAndAddSubNodeAsync("Analyzer" /* AudioSubNode.ANALYZER */);
        }
        await this.createAndAddSubNodeAsync("Volume" /* AudioSubNode.VOLUME */);
        await this._createSubNodePromisesResolvedAsync();
        if (hasAnalyzerOptions) {
            const analyzerNode = (0,_abstractAudio_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_1__._GetAudioAnalyzerSubNode)(this);
            if (!analyzerNode) {
                throw new Error("No analyzer subnode.");
            }
            analyzerNode.setOptions(options);
        }
        const volumeNode = (0,_abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_2__._GetVolumeAudioSubNode)(this);
        if (!volumeNode) {
            throw new Error("No volume subnode.");
        }
        volumeNode.setOptions(options);
        if (volumeNode.getClassName() !== "_VolumeWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        this._outputNode = volumeNode.node;
        // Connect the new wrapped WebAudio node to the wrapped downstream WebAudio nodes.
        // The wrapper nodes are unaware of this change.
        if (this._outputNode && this._downstreamNodes) {
            const it = this._downstreamNodes.values();
            for (let next = it.next(); !next.done; next = it.next()) {
                const inNode = next.value._inNode;
                if (inNode) {
                    this._outputNode.connect(inNode);
                }
            }
        }
    }
    /** @internal */
    get _inNode() {
        return this._outputNode;
    }
    /** @internal */
    get _outNode() {
        return this._outputNode;
    }
    // Function is async, but throws synchronously. Avoiding breaking changes.
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    _createSubNode(name) {
        switch (name) {
            case "Analyzer" /* AudioSubNode.ANALYZER */:
                return (0,_webAudioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_5__._CreateAudioAnalyzerSubNodeAsync)(this._owner.engine);
            case "Volume" /* AudioSubNode.VOLUME */:
                return (0,_volumeWebAudioSubNode__WEBPACK_IMPORTED_MODULE_4__._CreateVolumeAudioSubNodeAsync)(this._owner.engine);
            default:
                throw new Error(`Unknown subnode name: ${name}`);
        }
    }
    _onSubNodesChanged() {
        const analyzerNode = (0,_abstractAudio_subNodes_audioAnalyzerSubNode__WEBPACK_IMPORTED_MODULE_1__._GetAudioAnalyzerSubNode)(this);
        const volumeNode = (0,_abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_2__._GetVolumeAudioSubNode)(this);
        if (analyzerNode && volumeNode) {
            volumeNode.connect(analyzerNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19hYnN0cmFjdEF1ZGlvT3V0Tm9kZV9qcy1jb3JlX2Rpc3RfQXVkaW9WMl93ZWJBdWRpb19zdWJOb2Rlc193LTM5ZGRlYS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSUE7QUFFQTtBQUtBOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBTEE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQThIQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFuSUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQStCQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFFQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb091dE5vZGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1YkdyYXBoLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2F1ZGlvQW5hbHl6ZXJTdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2F1ZGlvQW5hbHl6ZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZVdlYkF1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vc3ViTm9kZXMvd2ViQXVkaW9BbmFseXplclN1Yk5vZGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1Yk5vZGVzL3dlYkF1ZGlvQmFzZVN1YkdyYXBoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnMgfSBmcm9tIFwiLi4vYXVkaW9QYXJhbWV0ZXJcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9Ob2RlVHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdE5hbWVkQXVkaW9Ob2RlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuaW1wb3J0IHR5cGUgeyBJVm9sdW1lQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViTm9kZXMvdm9sdW1lQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfR2V0Vm9sdW1lQXVkaW9Qcm9wZXJ0eSwgX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvQW5hbHl6ZXIsIElBdWRpb0FuYWx5emVyT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgeyBfQXVkaW9BbmFseXplciB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYXVkaW9BbmFseXplclwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdEF1ZGlvT3V0Tm9kZU9wdGlvbnMgZXh0ZW5kcyBJQXVkaW9BbmFseXplck9wdGlvbnMsIElWb2x1bWVBdWRpb09wdGlvbnMge31cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYW5kIGF1ZGlvIG91dHB1dCBub2RlIHdpdGggYW4gYW5hbHl6ZXIgYW5kIHZvbHVtZSBjb250cm9sLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBdWRpb091dE5vZGUgZXh0ZW5kcyBBYnN0cmFjdE5hbWVkQXVkaW9Ob2RlIHtcbiAgICBwcml2YXRlIF9hbmFseXplcjogTnVsbGFibGU8QWJzdHJhY3RBdWRpb0FuYWx5emVyPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3N1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBub2RlVHlwZTogQXVkaW9Ob2RlVHlwZSkge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG5vZGVUeXBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5hbHl6ZXIgZmVhdHVyZXMgb2YgdGhlIGJ1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFuYWx5emVyKCk6IEFic3RyYWN0QXVkaW9BbmFseXplciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFseXplciA/PyAodGhpcy5fYW5hbHl6ZXIgPSBuZXcgX0F1ZGlvQW5hbHl6ZXIodGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXVkaW8gb3V0cHV0IHZvbHVtZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBnZXQgdm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBfR2V0Vm9sdW1lQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJ2b2x1bWVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICAvLyBUaGUgdm9sdW1lIHN1Ym5vZGUgaXMgY3JlYXRlZCBvbiBpbml0aWFsaXphdGlvbiBhbmQgc2hvdWxkIGFsd2F5cyBleGlzdC5cbiAgICAgICAgY29uc3Qgbm9kZSA9IF9HZXRWb2x1bWVBdWRpb1N1Yk5vZGUodGhpcy5fc3ViR3JhcGgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHZvbHVtZSBzdWJub2RlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS52b2x1bWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX2FuYWx5emVyPy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX2FuYWx5emVyID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaC5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYXVkaW8gb3V0cHV0IHZvbHVtZSB3aXRoIG9wdGlvbmFsIHJhbXBpbmcuXG4gICAgICogSWYgdGhlIGR1cmF0aW9uIGlzIDAgdGhlbiB0aGUgdm9sdW1lIGlzIHNldCBpbW1lZGlhdGVseSwgb3RoZXJ3aXNlIGl0IGlzIHJhbXBlZCB0byB0aGUgbmV3IHZhbHVlIG92ZXIgdGhlIGdpdmVuIGR1cmF0aW9uIHVzaW5nIHRoZSBnaXZlbiBzaGFwZS5cbiAgICAgKiBJZiBhIHJhbXAgaXMgYWxyZWFkeSBpbiBwcm9ncmVzcyB0aGVuIHRoZSB2b2x1bWUgaXMgbm90IHNldCBhbmQgYW4gZXJyb3IgaXMgdGhyb3duLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IHRoZSB2b2x1bWUgdG8uXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gdXNlIGZvciByYW1waW5nIHRoZSB2b2x1bWUgY2hhbmdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRWb2x1bWUodmFsdWU6IG51bWJlciwgb3B0aW9uczogTnVsbGFibGU8UGFydGlhbDxJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucz4+ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBjb25zdCBub2RlID0gX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdm9sdW1lIHN1Ym5vZGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnNldFZvbHVtZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvTm9kZSwgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9hdWRpb1N1Yk5vZGVcIjtcblxuLyoqXG4gKiBBZGRzIGNvbW1vbiBzdWIgZ3JhcGggZnVuY3Rpb25hbGl0eSB0byBhbiBhdWRpbyBub2RlLlxuICpcbiAqIEF1ZGlvIG5vZGVzIHN1Y2ggYXMgc3RhdGljIHNvdW5kcywgc3RyZWFtaW5nIHNvdW5kcywgYW5kIGJ1c2VzIGNhbiB1c2UgYXVkaW8gc3ViIGdyYXBocyB0byBwcm9jZXNzIGF1ZGlvIGludGVybmFsbHlcbiAqIGJlZm9yZSBzZW5kaW5nIGl0IHRvIGNvbm5lY3RlZCBkb3duc3RyZWFtIGF1ZGlvIG5vZGVzLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYXBwbHlpbmcgZWZmZWN0cywgc3BhdGlhbCBhdWRpbywgYW5kIG90aGVyXG4gKiBhdWRpbyBwcm9jZXNzaW5nIHRhc2tzIGNvbW1vbiB0byBtdWx0aXBsZSBhdWRpbyBub2RlIGNsYXNzZXMuXG4gKlxuICogQSBrZXkgZmVhdHVyZSBvZiBhdWRpbyBzdWIgZ3JhcGhzIGlzIHRoZWlyIGF1ZGlvIHN1YiBub2RlcyBhcmUgY3JlYXRlZCBhc3luY2hyb25vdXNseSBvbiBkZW1hbmQgc28gdGhlIG1pbmltdW0gc2V0XG4gKiBvZiBzdWIgbm9kZXMgYXJlIHVzZWQgYXQgYWxsIHRpbWVzIHRvIHNhdmUgbWVtb3J5IGFuZCBDUFUgcmVzb3VyY2VzLiBUaGUgdHJhZGVvZmYgaXMgYSBzbWFsbCBkZWxheSB3aGVuIGZpcnN0XG4gKiBzZXR0aW5nIGEgcHJvcGVydHkgYmFja2VkIGJ5IGEgc3ViIG5vZGUuIFRoaXMgZGVsYXkgaXMgYXZvaWRlZCBieSB1c2luZyB0aGUgYXBwcm9wcmlhdGUgb3B0aW9ucyB0byBpbml0aWFsaXplIHRoZVxuICogc3ViIG5vZGUgb24gY3JlYXRpb24sIGUuZy4gYHNwYXRpYWxFbmFibGVkYCBhbmQgYHN0ZXJlb0VuYWJsZWRgLCBvciBieSBzZXR0aW5nIGFueSBjcmVhdGlvbiBvcHRpb24gYmFja2VkIGJ5IHRoZVxuICogc3ViIG5vZGUsIGUuZy4gYHNwYXRpYWxQb3NpdGlvbmAgYW5kIGBzdGVyZW9QYW5gLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB7XG4gICAgcHJpdmF0ZSBfY3JlYXRlU3ViTm9kZVByb21pc2VzOiB7IFtrZXk6IHN0cmluZ106IFByb21pc2U8X0Fic3RyYWN0QXVkaW9TdWJOb2RlPiB9ID0ge307XG4gICAgcHJpdmF0ZSBfaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3N1Yk5vZGVzOiB7IFtrZXk6IHN0cmluZ106IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB9ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgd2l0aCB0aGUgbmFtZWQgc3ViIG5vZGUsIGNyZWF0aW5nIHRoZSBzdWIgbm9kZSBpZiBuZWVkZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3ViIG5vZGVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCB0aGUgbmFtZWQgc3ViIG5vZGVcbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxsT25TdWJOb2RlPFQgZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGU+KG5hbWU6IEF1ZGlvU3ViTm9kZSwgY2FsbGJhY2s6IChub2RlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldFN1Yk5vZGUobmFtZSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhub2RlIGFzIFQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cbiAgICAgICAgdGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzUmVzb2x2ZWRBc3luYygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0U3ViTm9kZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZSBhcyBUKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFuZEFkZFN1Yk5vZGVBc3luYyhuYW1lKS50aGVuKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZSBhcyBUKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBuYW1lZCBzdWJub2RlIGFuZCBhZGRzIGl0IHRvIHRoZSBzdWIgZ3JhcGguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3ViIG5vZGUuXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGNyZWF0ZWQgc3ViIG5vZGUuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgcHVibGljIGNyZWF0ZUFuZEFkZFN1Yk5vZGVBc3luYyhuYW1lOiBBdWRpb1N1Yk5vZGUpOiBQcm9taXNlPF9BYnN0cmFjdEF1ZGlvU3ViTm9kZT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cbiAgICAgICAgdGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzW25hbWVdIHx8PSB0aGlzLl9jcmVhdGVTdWJOb2RlKG5hbWUpLnRoZW4oKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFN1Yk5vZGUobm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1Yk5vZGVQcm9taXNlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBhc3NvY2lhdGVkIHJlc291cmNlcy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLl9pc0Rpc3Bvc2VkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzdWJOb2RlcyA9IE9iamVjdC52YWx1ZXModGhpcy5fc3ViTm9kZXMpO1xuICAgICAgICBmb3IgKGNvbnN0IHN1Yk5vZGUgb2Ygc3ViTm9kZXMpIHtcbiAgICAgICAgICAgIHN1Yk5vZGUuZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3ViTm9kZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHByZXZpb3VzbHkgY3JlYXRlZCBzdWIgbm9kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHN1YiBub2RlXG4gICAgICogQHJldHVybnMgVGhlIG5hbWVkIHN1YiBub2RlLCBvciBgbnVsbGAgaWYgaXQgaGFzIG5vdCBiZWVuIGNyZWF0ZWQsIHlldFxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICogKi9cbiAgICBwdWJsaWMgZ2V0U3ViTm9kZTxUIGV4dGVuZHMgX0Fic3RyYWN0QXVkaW9TdWJOb2RlPihuYW1lOiBzdHJpbmcpOiBOdWxsYWJsZTxUPiB7XG4gICAgICAgIHJldHVybiAodGhpcy5fc3ViTm9kZXNbbmFtZV0gYXMgVCkgPz8gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgc3ViIG5vZGUgZnJvbSB0aGUgc3ViIGdyYXBoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN1Yk5vZGUgLSBUaGUgc3ViIG5vZGUgdG8gcmVtb3ZlXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3ViIG5vZGUgaXMgcmVtb3ZlZFxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZVN1Yk5vZGVBc3luYyhzdWJOb2RlOiBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzUmVzb2x2ZWRBc3luYygpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdWJOb2RlLm5hbWU7XG4gICAgICAgIGlmICh0aGlzLl9zdWJOb2Rlc1tuYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3N1Yk5vZGVzW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX2NyZWF0ZVN1Yk5vZGVQcm9taXNlc1tuYW1lXTtcblxuICAgICAgICB0aGlzLl9vblN1Yk5vZGVzQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3JlYXRlU3ViTm9kZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPF9BYnN0cmFjdEF1ZGlvU3ViTm9kZT47XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBzdWItbm9kZXMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXG4gICAgICogLSBPdmVycmlkZSB0aGlzIHRvIGNvbm5lY3QgYW5kIHJlY29ubmVjdCBzdWItbm9kZXMgYXMgbmVlZGVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfb25TdWJOb2Rlc0NoYW5nZWQoKTogdm9pZDtcblxuICAgIHByb3RlY3RlZCBhc3luYyBfY3JlYXRlU3ViTm9kZVByb21pc2VzUmVzb2x2ZWRBc3luYygpOiBQcm9taXNlPF9BYnN0cmFjdEF1ZGlvU3ViTm9kZVtdPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKHRoaXMuX2NyZWF0ZVN1Yk5vZGVQcm9taXNlcykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZFN1Yk5vZGUobm9kZTogX0Fic3RyYWN0QXVkaW9TdWJOb2RlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICBub2RlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N1Yk5vZGVzW25vZGUubmFtZV0gPSBub2RlO1xuXG4gICAgICAgIG5vZGUub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGRPbmNlKHRoaXMuX29uU3ViTm9kZURpc3Bvc2VkKTtcblxuICAgICAgICB0aGlzLl9vblN1Yk5vZGVzQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uU3ViTm9kZURpc3Bvc2VkID0gKG5vZGU6IEFic3RyYWN0QXVkaW9Ob2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Yk5vZGUgPSBub2RlIGFzIEFic3RyYWN0TmFtZWRBdWRpb05vZGU7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuX3N1Yk5vZGVzW3N1Yk5vZGUubmFtZV07XG5cbiAgICAgICAgdGhpcy5fb25TdWJOb2Rlc0NoYW5nZWQoKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgQXVkaW9Ob2RlVHlwZSwgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4uL2F1ZGlvRW5naW5lVjJcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSBleHRlbmRzIEFic3RyYWN0TmFtZWRBdWRpb05vZGUge1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBBdWRpb05vZGVUeXBlLkhBU19JTlBVVFNfQU5EX09VVFBVVFMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29ubmVjdChub2RlOiBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0KG5vZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzY29ubmVjdChub2RlOiBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kaXNjb25uZWN0KG5vZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzY29ubmVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kb3duc3RyZWFtTm9kZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc2Nvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9kb3duc3RyZWFtTm9kZXMudmFsdWVzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgbmV4dCA9IGl0Lm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNjb25uZWN0KG5leHQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi4vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUsIElBdWRpb0FuYWx5emVyT3B0aW9ucyB9IGZyb20gXCIuLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplclwiO1xuaW1wb3J0IHsgX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cyB9IGZyb20gXCIuLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplclwiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb1N1YkdyYXBoXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4vYXVkaW9TdWJOb2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfQXVkaW9BbmFseXplclN1Yk5vZGUgZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIoQXVkaW9TdWJOb2RlLkFOQUxZWkVSLCBlbmdpbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBmZnRTaXplOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGU7XG4gICAgcHVibGljIGFic3RyYWN0IG1pbkRlY2liZWxzOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IG1heERlY2liZWxzOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IHNtb290aGluZzogbnVtYmVyO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGdldEJ5dGVGcmVxdWVuY3lEYXRhKCk6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGFic3RyYWN0IGdldEZsb2F0RnJlcXVlbmN5RGF0YSgpOiBGbG9hdDMyQXJyYXk7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogUGFydGlhbDxJQXVkaW9BbmFseXplck9wdGlvbnM+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmZ0U2l6ZSA9IG9wdGlvbnMuYW5hbHl6ZXJGRlRTaXplID8/IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMuZmZ0U2l6ZTtcbiAgICAgICAgdGhpcy5taW5EZWNpYmVscyA9IG9wdGlvbnMuYW5hbHl6ZXJNaW5EZWNpYmVscyA/PyBfQXVkaW9BbmFseXplckRlZmF1bHRzLm1pbkRlY2liZWxzO1xuICAgICAgICB0aGlzLm1heERlY2liZWxzID0gb3B0aW9ucy5hbmFseXplck1heERlY2liZWxzID8/IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMubWF4RGVjaWJlbHM7XG4gICAgICAgIHRoaXMuc21vb3RoaW5nID0gb3B0aW9ucy5hbmFseXplclNtb290aGluZyA/PyBfQXVkaW9BbmFseXplckRlZmF1bHRzLnNtb290aGluZztcbiAgICB9XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUoc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpOiBOdWxsYWJsZTxfQXVkaW9BbmFseXplclN1Yk5vZGU+IHtcbiAgICByZXR1cm4gc3ViR3JhcGguZ2V0U3ViTm9kZTxfQXVkaW9BbmFseXplclN1Yk5vZGU+KEF1ZGlvU3ViTm9kZS5BTkFMWVpFUik7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfU2V0QXVkaW9BbmFseXplclByb3BlcnR5PEsgZXh0ZW5kcyBrZXlvZiB0eXBlb2YgX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cz4oc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgsIHByb3BlcnR5OiBLLCB2YWx1ZTogX0F1ZGlvQW5hbHl6ZXJTdWJOb2RlW0tdKTogdm9pZCB7XG4gICAgc3ViR3JhcGguY2FsbE9uU3ViTm9kZTxfQXVkaW9BbmFseXplclN1Yk5vZGU+KEF1ZGlvU3ViTm9kZS5BTkFMWVpFUiwgKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYXVkaW9QYXJhbWV0ZXJcIjtcbmltcG9ydCB7IEF1ZGlvUGFyYW1ldGVyUmFtcFNoYXBlIH0gZnJvbSBcIi4uLy4uL2F1ZGlvUGFyYW1ldGVyXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi4vYXVkaW9FbmdpbmVWMlwiO1xuaW1wb3J0IHsgX0Fic3RyYWN0QXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vc3ViTm9kZXMvYXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IF9Wb2x1bWVBdWRpb0RlZmF1bHRzID0ge1xuICAgIHZvbHVtZTogMSBhcyBudW1iZXIsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIFZvbHVtZSBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElWb2x1bWVBdWRpb09wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFRoZSB2b2x1bWUvZ2Fpbi4gRGVmYXVsdHMgdG8gMS5cbiAgICAgKi9cbiAgICB2b2x1bWU6IG51bWJlcjtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9Wb2x1bWVBdWRpb1N1Yk5vZGUgZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIoQXVkaW9TdWJOb2RlLlZPTFVNRSwgZW5naW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgdm9sdW1lOiBudW1iZXI7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogUGFydGlhbDxJVm9sdW1lQXVkaW9PcHRpb25zPik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFZvbHVtZShvcHRpb25zLnZvbHVtZSA/PyBfVm9sdW1lQXVkaW9EZWZhdWx0cy52b2x1bWUsIHsgc2hhcGU6IEF1ZGlvUGFyYW1ldGVyUmFtcFNoYXBlLk5vbmUgfSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXRWb2x1bWUodmFsdWU6IG51bWJlciwgb3B0aW9ucz86IE51bGxhYmxlPFBhcnRpYWw8SUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnM+Pik6IHZvaWQ7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlKHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoKTogTnVsbGFibGU8X1ZvbHVtZUF1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBzdWJHcmFwaC5nZXRTdWJOb2RlPF9Wb2x1bWVBdWRpb1N1Yk5vZGU+KEF1ZGlvU3ViTm9kZS5WT0xVTUUpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX0dldFZvbHVtZUF1ZGlvUHJvcGVydHk8SyBleHRlbmRzIGtleW9mIHR5cGVvZiBfVm9sdW1lQXVkaW9EZWZhdWx0cz4oc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgsIHByb3BlcnR5OiBLKTogKHR5cGVvZiBfVm9sdW1lQXVkaW9EZWZhdWx0cylbS10ge1xuICAgIHJldHVybiBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlKHN1YkdyYXBoKT8uW3Byb3BlcnR5XSA/PyBfVm9sdW1lQXVkaW9EZWZhdWx0c1twcm9wZXJ0eV07XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgdHlwZSBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUgPSAzMiB8IDY0IHwgMTI4IHwgMjU2IHwgNTEyIHwgMTAyNCB8IDIwNDggfCA0MDk2IHwgODE5MiB8IDE2Mzg0IHwgMzI3Njg7XG5cbmV4cG9ydCBjb25zdCBfQXVkaW9BbmFseXplckRlZmF1bHRzID0ge1xuICAgIGZmdFNpemU6IDIwNDggYXMgQXVkaW9BbmFseXplckZGVFNpemVUeXBlLFxuICAgIG1pbkRlY2liZWxzOiAtMTAwIGFzIG51bWJlcixcbiAgICBtYXhEZWNpYmVsczogLTMwIGFzIG51bWJlcixcbiAgICBzbW9vdGhpbmc6IDAuOCBhcyBudW1iZXIsXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSBBdWRpb0FuYWx5emVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUF1ZGlvQW5hbHl6ZXJPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIGF1ZGlvIGFuYWx5emVyLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBhbmFseXplckVuYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIEZGVCAoZmFzdCBmb3VyaWVyIHRyYW5zZm9ybSkgdG8gdXNlIHdoZW4gY29udmVydGluZyB0aW1lLWRvbWFpbiBkYXRhIHRvIGZyZXF1ZW5jeS1kb21haW4gZGF0YS4gRGVmYXVsdCBpcyAyMDQ4LlxuICAgICAqL1xuICAgIGFuYWx5emVyRkZUU2l6ZTogQXVkaW9BbmFseXplckZGVFNpemVUeXBlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gZGVjaWJlbCB2YWx1ZSBmb3IgdGhlIHJhbmdlIG9mIHRoZSBhbmFseXplci4gRGVmYXVsdCBpcyAtMTAwLlxuICAgICAqL1xuICAgIGFuYWx5emVyTWluRGVjaWJlbHM6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIGRlY2liZWwgdmFsdWUgZm9yIHRoZSByYW5nZSBvZiB0aGUgYW5hbHl6ZXIuIERlZmF1bHQgaXMgLTMwLlxuICAgICAqL1xuICAgIGFuYWx5emVyTWF4RGVjaWJlbHM6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSB0aGF0IGRldGVybWluZXMgaG93IHF1aWNrbHkgdGhlIGFuYWx5emVyJ3MgdmFsdWUgY2hhbmdlcy4gRGVmYXVsdCBpcyAwLjguXG4gICAgICovXG4gICAgYW5hbHl6ZXJTbW9vdGhpbmc6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgYXVkaW8gYW5hbHl6ZXIgb3B0aW9ucyB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBhdWRpbyBhbmFseXplciBvcHRpb25zIGFyZSBkZWZpbmVkLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9IYXNBdWRpb0FuYWx5emVyT3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0FuYWx5emVyT3B0aW9ucz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBvcHRpb25zLmFuYWx5emVyRW5hYmxlZCB8fFxuICAgICAgICBvcHRpb25zLmFuYWx5emVyRkZUU2l6ZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuYW5hbHl6ZXJNaW5EZWNpYmVscyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuYW5hbHl6ZXJNYXhEZWNpYmVscyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuYW5hbHl6ZXJTbW9vdGhpbmcgIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbi8qKlxuICogQW4gQXVkaW9BbmFseXplciBjb252ZXJ0cyB0aW1lLWRvbWFpbiBhdWRpbyBkYXRhIGludG8gdGhlIGZyZXF1ZW5jeS1kb21haW4uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEF1ZGlvQW5hbHl6ZXIge1xuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBGRlQgKGZhc3QgZm91cmllciB0cmFuc2Zvcm0pIHRvIHVzZSB3aGVuIGNvbnZlcnRpbmcgdGltZS1kb21haW4gZGF0YSB0byBmcmVxdWVuY3ktZG9tYWluIGRhdGEuIERlZmF1bHQgaXMgMjA0OC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZmZ0U2l6ZTogQXVkaW9BbmFseXplckZGVFNpemVUeXBlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBkYXRhIHZhbHVlcyB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgd2hlbiBjYWxsaW5nIGdldEJ5dGVGcmVxdWVuY3lEYXRhKCkgb3IgZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKCkuIFRoaXMgaXMgYWx3YXlzIGhhbGYgdGhlIGBmZnRTaXplYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZyZXF1ZW5jeUJpbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmZmdFNpemUgLyAyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGFuYWx5emVyIGlzIGVuYWJsZWQgb3Igbm90LlxuICAgICAqIC0gVGhlIGBnZXRCeXRlRnJlcXVlbmN5RGF0YWAgYW5kIGBnZXRGbG9hdEZyZXF1ZW5jeURhdGFgIGZ1bmN0aW9ucyByZXR1cm4gYG51bGxgIGlmIHRoZSBhbmFseXplciBpcyBub3QgZW5hYmxlZC5cbiAgICAgKiBAc2VlIHtAbGluayBlbmFibGVBc3luY31cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgaXNFbmFibGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gZGVjaWJlbCB2YWx1ZSBmb3IgdGhlIHJhbmdlIG9mIHRoZSBhbmFseXplci4gRGVmYXVsdCBpcyAtMTAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBtaW5EZWNpYmVsczogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gZGVjaWJlbCB2YWx1ZSBmb3IgdGhlIHJhbmdlIG9mIHRoZSBhbmFseXplci4gRGVmYXVsdCBpcyAtMzAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IG1heERlY2liZWxzOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBBIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgdGhhdCBkZXRlcm1pbmVzIGhvdyBxdWlja2x5IHRoZSBhbmFseXplcidzIHZhbHVlIGNoYW5nZXMuIERlZmF1bHQgaXMgMC44LlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzbW9vdGhpbmc6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBkaXNwb3NlKCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHRoZSBhbmFseXplclxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBlbmFibGVBc3luYygpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBmcmVxdWVuY3kgZGF0YSBhcyBhIGJ5dGUgYXJyYXlcbiAgICAgKiBAcmV0dXJucyBhIFVpbnQ4QXJyYXkgaWYgdGhlIGFuYWx5emVyIGlzIGVuYWJsZWQsIG90aGVyd2lzZSBgbnVsbGBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoKTogVWludDhBcnJheTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgZnJlcXVlbmN5IGRhdGEgYXMgYSBmbG9hdCBhcnJheVxuICAgICAqIEByZXR1cm5zIGEgRmxvYXQzMkFycmF5IGlmIHRoZSBhbmFseXplciBpcyBlbmFibGVkLCBvdGhlcndpc2UgYG51bGxgXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGdldEZsb2F0RnJlcXVlbmN5RGF0YSgpOiBGbG9hdDMyQXJyYXk7XG59XG4iLCJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy9sb2dnZXJcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9BbmFseXplckZGVFNpemVUeXBlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdEF1ZGlvQW5hbHl6ZXJcIjtcbmltcG9ydCB7IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMsIEFic3RyYWN0QXVkaW9BbmFseXplciB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi4vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1YkdyYXBoXCI7XG5pbXBvcnQgeyBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUsIF9TZXRBdWRpb0FuYWx5emVyUHJvcGVydHkgfSBmcm9tIFwiLi4vc3ViTm9kZXMvYXVkaW9BbmFseXplclN1Yk5vZGVcIjtcbmltcG9ydCB7IEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi9zdWJOb2Rlcy9hdWRpb1N1Yk5vZGVcIjtcblxubGV0IEVtcHR5Qnl0ZUZyZXF1ZW5jeURhdGE6IE51bGxhYmxlPFVpbnQ4QXJyYXk+ID0gbnVsbDtcbmxldCBFbXB0eUZsb2F0RnJlcXVlbmN5RGF0YTogTnVsbGFibGU8RmxvYXQzMkFycmF5PiA9IG51bGw7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0RW1wdHlCeXRlRnJlcXVlbmN5RGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICBpZiAoIUVtcHR5Qnl0ZUZyZXF1ZW5jeURhdGEpIHtcbiAgICAgICAgRW1wdHlCeXRlRnJlcXVlbmN5RGF0YSA9IG5ldyBVaW50OEFycmF5KCk7XG4gICAgfVxuICAgIHJldHVybiBFbXB0eUJ5dGVGcmVxdWVuY3lEYXRhO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX0dldEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhKCk6IEZsb2F0MzJBcnJheSB7XG4gICAgaWYgKCFFbXB0eUZsb2F0RnJlcXVlbmN5RGF0YSkge1xuICAgICAgICBFbXB0eUZsb2F0RnJlcXVlbmN5RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX0F1ZGlvQW5hbHl6ZXIgZXh0ZW5kcyBBYnN0cmFjdEF1ZGlvQW5hbHl6ZXIge1xuICAgIHByaXZhdGUgX2ZmdFNpemU6IEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZSA9IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMuZmZ0U2l6ZTtcbiAgICBwcml2YXRlIF9tYXhEZWNpYmVsczogbnVtYmVyID0gX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cy5tYXhEZWNpYmVscztcbiAgICBwcml2YXRlIF9taW5EZWNpYmVsczogbnVtYmVyID0gX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cy5taW5EZWNpYmVscztcbiAgICBwcml2YXRlIF9zbW9vdGhpbmc6IG51bWJlciA9IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMuc21vb3RoaW5nO1xuICAgIHByaXZhdGUgX3N1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IHN1YkdyYXBoO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGZmdFNpemUoKTogQXVkaW9BbmFseXplckZGVFNpemVUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZmdFNpemU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmZnRTaXplKHZhbHVlOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUpIHtcbiAgICAgICAgdGhpcy5fZmZ0U2l6ZSA9IHZhbHVlO1xuICAgICAgICBfU2V0QXVkaW9BbmFseXplclByb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcImZmdFNpemVcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgbWluRGVjaWJlbHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRlY2liZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGVjaWJlbHModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5EZWNpYmVscyA9IHZhbHVlO1xuICAgICAgICBfU2V0QXVkaW9BbmFseXplclByb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcIm1pbkRlY2liZWxzXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtYXhEZWNpYmVscygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4RGVjaWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhEZWNpYmVscyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heERlY2liZWxzID0gdmFsdWU7XG4gICAgICAgIF9TZXRBdWRpb0FuYWx5emVyUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwibWF4RGVjaWJlbHNcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHNtb290aGluZygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc21vb3RoaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc21vb3RoaW5nKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc21vb3RoaW5nID0gdmFsdWU7XG4gICAgICAgIF9TZXRBdWRpb0FuYWx5emVyUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwic21vb3RoaW5nXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN1Yk5vZGUgPSBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUodGhpcy5fc3ViR3JhcGgpO1xuICAgICAgICBpZiAoc3ViTm9kZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgdGhpcy5fc3ViR3JhcGgucmVtb3ZlU3ViTm9kZUFzeW5jKHN1Yk5vZGUpO1xuICAgICAgICAgICAgc3ViTm9kZS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFzeW5jIGVuYWJsZUFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBzdWJOb2RlID0gX0dldEF1ZGlvQW5hbHl6ZXJTdWJOb2RlKHRoaXMuX3N1YkdyYXBoKTtcbiAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5jcmVhdGVBbmRBZGRTdWJOb2RlQXN5bmMoQXVkaW9TdWJOb2RlLkFOQUxZWkVSKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoKTogVWludDhBcnJheSB7XG4gICAgICAgIGNvbnN0IHN1Yk5vZGUgPSBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUodGhpcy5fc3ViR3JhcGgpO1xuICAgICAgICBpZiAoIXN1Yk5vZGUpIHtcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiQXVkaW9BbmFseXplciBub3QgZW5hYmxlZFwiKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQXN5bmMoKTtcbiAgICAgICAgICAgIHJldHVybiBfR2V0RW1wdHlCeXRlRnJlcXVlbmN5RGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJOb2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRGbG9hdEZyZXF1ZW5jeURhdGEoKTogRmxvYXQzMkFycmF5IHtcbiAgICAgICAgY29uc3Qgc3ViTm9kZSA9IF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG4gICAgICAgIGlmICghc3ViTm9kZSkge1xuICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJBdWRpb0FuYWx5emVyIG5vdCBlbmFibGVkXCIpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgdGhpcy5lbmFibGVBc3luYygpO1xuICAgICAgICAgICAgcmV0dXJuIF9HZXRFbXB0eUZsb2F0RnJlcXVlbmN5RGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJOb2RlLmdldEZsb2F0RnJlcXVlbmN5RGF0YSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IF9Wb2x1bWVBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy92b2x1bWVBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgSUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYXVkaW9QYXJhbWV0ZXJcIjtcbmltcG9ydCB7IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUsIElXZWJBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vd2ViQXVkaW9Ob2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIF9DcmVhdGVWb2x1bWVBdWRpb1N1Yk5vZGVBc3luYyhlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSk6IFByb21pc2U8X1ZvbHVtZUF1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBuZXcgX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZShlbmdpbmUpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZSBleHRlbmRzIF9Wb2x1bWVBdWRpb1N1Yk5vZGUgaW1wbGVtZW50cyBJV2ViQXVkaW9TdWJOb2RlIHtcbiAgICBwcml2YXRlIF92b2x1bWU6IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlYWRvbmx5IG5vZGU6IEF1ZGlvTm9kZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpIHtcbiAgICAgICAgc3VwZXIoZW5naW5lKTtcblxuICAgICAgICBjb25zdCBnYWluTm9kZSA9ICh0aGlzLm5vZGUgPSBuZXcgR2Fpbk5vZGUoZW5naW5lLl9hdWRpb0NvbnRleHQpKTtcbiAgICAgICAgdGhpcy5fdm9sdW1lID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIGdhaW5Ob2RlLmdhaW4pO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3ZvbHVtZS5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgdm9sdW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92b2x1bWUudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRWb2x1bWUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKTogQXVkaW9Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfb3V0Tm9kZSgpOiBBdWRpb05vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0Vm9sdW1lKHZhbHVlOiBudW1iZXIsIG9wdGlvbnM6IE51bGxhYmxlPFBhcnRpYWw8SUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnM+PiA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdm9sdW1lLnNldFRhcmdldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZVwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IF9BdWRpb0FuYWx5emVyU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2F1ZGlvQW5hbHl6ZXJTdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgeyBfR2V0RW1wdHlCeXRlRnJlcXVlbmN5RGF0YSwgX0dldEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUgfSBmcm9tIFwiLi4vd2ViQXVkaW9Ob2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIF9DcmVhdGVBdWRpb0FuYWx5emVyU3ViTm9kZUFzeW5jKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKTogUHJvbWlzZTxfQXVkaW9BbmFseXplclN1Yk5vZGU+IHtcbiAgICByZXR1cm4gbmV3IF9XZWJBdWRpb0FuYWx5emVyU3ViTm9kZShlbmdpbmUpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1dlYkF1ZGlvQW5hbHl6ZXJTdWJOb2RlIGV4dGVuZHMgX0F1ZGlvQW5hbHl6ZXJTdWJOb2RlIGltcGxlbWVudHMgSVdlYkF1ZGlvSW5Ob2RlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hbmFseXplck5vZGU6IEFuYWx5c2VyTm9kZTtcbiAgICBwcml2YXRlIF9ieXRlRnJlcXVlbmN5RGF0YTogTnVsbGFibGU8VWludDhBcnJheT4gPSBudWxsO1xuICAgIHByaXZhdGUgX2Zsb2F0RnJlcXVlbmN5RGF0YTogTnVsbGFibGU8RmxvYXQzMkFycmF5PiA9IG51bGw7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKSB7XG4gICAgICAgIHN1cGVyKGVuZ2luZSk7XG5cbiAgICAgICAgdGhpcy5fYW5hbHl6ZXJOb2RlID0gbmV3IEFuYWx5c2VyTm9kZShlbmdpbmUuX2F1ZGlvQ29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgZmZ0U2l6ZSgpOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5hbHl6ZXJOb2RlLmZmdFNpemUgYXMgQXVkaW9BbmFseXplckZGVFNpemVUeXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZmZ0U2l6ZSh2YWx1ZTogQXVkaW9BbmFseXplckZGVFNpemVUeXBlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fYW5hbHl6ZXJOb2RlLmZmdFNpemUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FuYWx5emVyTm9kZS5mZnRTaXplID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5fY2xlYXJBcnJheXMoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCk6IEF1ZGlvTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFseXplck5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgbWluRGVjaWJlbHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuYWx5emVyTm9kZS5taW5EZWNpYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1pbkRlY2liZWxzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYW5hbHl6ZXJOb2RlLm1pbkRlY2liZWxzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgbWF4RGVjaWJlbHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuYWx5emVyTm9kZS5tYXhEZWNpYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heERlY2liZWxzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYW5hbHl6ZXJOb2RlLm1heERlY2liZWxzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgc21vb3RoaW5nKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFseXplck5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc21vb3RoaW5nKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYW5hbHl6ZXJOb2RlLnNtb290aGluZ1RpbWVDb25zdGFudCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX2NsZWFyQXJyYXlzKCk7XG4gICAgICAgIHRoaXMuX2J5dGVGcmVxdWVuY3lEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmxvYXRGcmVxdWVuY3lEYXRhID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9XZWJBdWRpb0FuYWx5emVyU3ViTm9kZVwiO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoKTogVWludDhBcnJheSB7XG4gICAgICAgIGlmICghdGhpcy5fYnl0ZUZyZXF1ZW5jeURhdGEgfHwgdGhpcy5fYnl0ZUZyZXF1ZW5jeURhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9ieXRlRnJlcXVlbmN5RGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2FuYWx5emVyTm9kZS5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW5hbHl6ZXJOb2RlLmdldEJ5dGVGcmVxdWVuY3lEYXRhKHRoaXMuX2J5dGVGcmVxdWVuY3lEYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5dGVGcmVxdWVuY3lEYXRhO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKCk6IEZsb2F0MzJBcnJheSB7XG4gICAgICAgIGlmICghdGhpcy5fZmxvYXRGcmVxdWVuY3lEYXRhIHx8IHRoaXMuX2Zsb2F0RnJlcXVlbmN5RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2Zsb2F0RnJlcXVlbmN5RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fYW5hbHl6ZXJOb2RlLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUuZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKHRoaXMuX2Zsb2F0RnJlcXVlbmN5RGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbG9hdEZyZXF1ZW5jeURhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2xlYXJBcnJheXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2J5dGVGcmVxdWVuY3lEYXRhPy5zZXQoX0dldEVtcHR5Qnl0ZUZyZXF1ZW5jeURhdGEoKSk7XG4gICAgICAgIHRoaXMuX2Zsb2F0RnJlcXVlbmN5RGF0YT8uc2V0KF9HZXRFbXB0eUZsb2F0RnJlcXVlbmN5RGF0YSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2F1ZGlvQW5hbHl6ZXJTdWJOb2RlXCI7XG5pbXBvcnQgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9hdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgSVZvbHVtZUF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9BbmFseXplck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplclwiO1xuaW1wb3J0IHsgX0hhc0F1ZGlvQW5hbHl6ZXJPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdEF1ZGlvQW5hbHl6ZXJcIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvSW5Ob2RlLCBJV2ViQXVkaW9TdXBlck5vZGUgfSBmcm9tIFwiLi4vd2ViQXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9Wb2x1bWVXZWJBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi92b2x1bWVXZWJBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9DcmVhdGVWb2x1bWVBdWRpb1N1Yk5vZGVBc3luYyB9IGZyb20gXCIuL3ZvbHVtZVdlYkF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0NyZWF0ZUF1ZGlvQW5hbHl6ZXJTdWJOb2RlQXN5bmMgfSBmcm9tIFwiLi93ZWJBdWRpb0FuYWx5emVyU3ViTm9kZVwiO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgV2ViQXVkaW9CYXNlU3ViR3JhcGguXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkF1ZGlvQmFzZVN1YkdyYXBoT3B0aW9ucyBleHRlbmRzIElBdWRpb0FuYWx5emVyT3B0aW9ucywgSVZvbHVtZUF1ZGlvT3B0aW9ucyB7fVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX1dlYkF1ZGlvQmFzZVN1YkdyYXBoIGV4dGVuZHMgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB7XG4gICAgcHJvdGVjdGVkIF9vd25lcjogSVdlYkF1ZGlvU3VwZXJOb2RlO1xuICAgIHByb3RlY3RlZCBfb3V0cHV0Tm9kZTogTnVsbGFibGU8QXVkaW9Ob2RlPiA9IG51bGw7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG93bmVyOiBJV2ViQXVkaW9TdXBlck5vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9vd25lciA9IG93bmVyO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW5pdEFzeW5jKG9wdGlvbnM6IFBhcnRpYWw8SVdlYkF1ZGlvQmFzZVN1YkdyYXBoT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgaGFzQW5hbHl6ZXJPcHRpb25zID0gX0hhc0F1ZGlvQW5hbHl6ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChoYXNBbmFseXplck9wdGlvbnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlQW5kQWRkU3ViTm9kZUFzeW5jKEF1ZGlvU3ViTm9kZS5BTkFMWVpFUik7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUFuZEFkZFN1Yk5vZGVBc3luYyhBdWRpb1N1Yk5vZGUuVk9MVU1FKTtcblxuICAgICAgICBhd2FpdCB0aGlzLl9jcmVhdGVTdWJOb2RlUHJvbWlzZXNSZXNvbHZlZEFzeW5jKCk7XG5cbiAgICAgICAgaWYgKGhhc0FuYWx5emVyT3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgYW5hbHl6ZXJOb2RlID0gX0dldEF1ZGlvQW5hbHl6ZXJTdWJOb2RlKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFhbmFseXplck5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhbmFseXplciBzdWJub2RlLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5hbHl6ZXJOb2RlLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2b2x1bWVOb2RlID0gX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSh0aGlzKTtcbiAgICAgICAgaWYgKCF2b2x1bWVOb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB2b2x1bWUgc3Vibm9kZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2b2x1bWVOb2RlLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHZvbHVtZU5vZGUuZ2V0Q2xhc3NOYW1lKCkgIT09IFwiX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZVwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBXZWJBdWRpbyBzdWJub2RlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX291dHB1dE5vZGUgPSAodm9sdW1lTm9kZSBhcyBfVm9sdW1lV2ViQXVkaW9TdWJOb2RlKS5ub2RlO1xuXG4gICAgICAgIC8vIENvbm5lY3QgdGhlIG5ldyB3cmFwcGVkIFdlYkF1ZGlvIG5vZGUgdG8gdGhlIHdyYXBwZWQgZG93bnN0cmVhbSBXZWJBdWRpbyBub2Rlcy5cbiAgICAgICAgLy8gVGhlIHdyYXBwZXIgbm9kZXMgYXJlIHVuYXdhcmUgb2YgdGhpcyBjaGFuZ2UuXG4gICAgICAgIGlmICh0aGlzLl9vdXRwdXROb2RlICYmIHRoaXMuX2Rvd25zdHJlYW1Ob2Rlcykge1xuICAgICAgICAgICAgY29uc3QgaXQgPSB0aGlzLl9kb3duc3RyZWFtTm9kZXMudmFsdWVzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5Ob2RlID0gKG5leHQudmFsdWUgYXMgSVdlYkF1ZGlvSW5Ob2RlKS5faW5Ob2RlO1xuICAgICAgICAgICAgICAgIGlmIChpbk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3V0cHV0Tm9kZS5jb25uZWN0KGluTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IF9kb3duc3RyZWFtTm9kZXM6IE51bGxhYmxlPFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4+O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpOiBOdWxsYWJsZTxBdWRpb05vZGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKTogTnVsbGFibGU8QXVkaW9Ob2RlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXROb2RlO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIGlzIGFzeW5jLCBidXQgdGhyb3dzIHN5bmNocm9ub3VzbHkuIEF2b2lkaW5nIGJyZWFraW5nIGNoYW5nZXMuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVTdWJOb2RlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8X0Fic3RyYWN0QXVkaW9TdWJOb2RlPiB7XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBBdWRpb1N1Yk5vZGUuQU5BTFlaRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9DcmVhdGVBdWRpb0FuYWx5emVyU3ViTm9kZUFzeW5jKHRoaXMuX293bmVyLmVuZ2luZSk7XG4gICAgICAgICAgICBjYXNlIEF1ZGlvU3ViTm9kZS5WT0xVTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9DcmVhdGVWb2x1bWVBdWRpb1N1Yk5vZGVBc3luYyh0aGlzLl9vd25lci5lbmdpbmUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gc3Vibm9kZSBuYW1lOiAke25hbWV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX29uU3ViTm9kZXNDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBhbmFseXplck5vZGUgPSBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHZvbHVtZU5vZGUgPSBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlKHRoaXMpO1xuXG4gICAgICAgIGlmIChhbmFseXplck5vZGUgJiYgdm9sdW1lTm9kZSkge1xuICAgICAgICAgICAgdm9sdW1lTm9kZS5jb25uZWN0KGFuYWx5emVyTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=