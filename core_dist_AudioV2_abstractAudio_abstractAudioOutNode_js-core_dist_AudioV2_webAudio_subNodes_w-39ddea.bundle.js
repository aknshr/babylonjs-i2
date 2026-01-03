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
     * The audio analyzer features.
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
        if (!subNode) {
            return;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19hYnN0cmFjdEF1ZGlvT3V0Tm9kZV9qcy1jb3JlX2Rpc3RfQXVkaW9WMl93ZWJBdWRpb19zdWJOb2Rlc193LTM5ZGRlYS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSUE7QUFFQTtBQUtBOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBTEE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWtJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUF2SUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQStCQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFFQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb091dE5vZGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1YkdyYXBoLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2F1ZGlvQW5hbHl6ZXJTdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2F1ZGlvQW5hbHl6ZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZVdlYkF1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vc3ViTm9kZXMvd2ViQXVkaW9BbmFseXplclN1Yk5vZGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1Yk5vZGVzL3dlYkF1ZGlvQmFzZVN1YkdyYXBoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnMgfSBmcm9tIFwiLi4vYXVkaW9QYXJhbWV0ZXJcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9Ob2RlVHlwZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdE5hbWVkQXVkaW9Ob2RlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuaW1wb3J0IHR5cGUgeyBJVm9sdW1lQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4vc3ViTm9kZXMvdm9sdW1lQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfR2V0Vm9sdW1lQXVkaW9Qcm9wZXJ0eSwgX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvQW5hbHl6ZXIsIElBdWRpb0FuYWx5emVyT3B0aW9ucyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgeyBfQXVkaW9BbmFseXplciB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvYXVkaW9BbmFseXplclwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdEF1ZGlvT3V0Tm9kZU9wdGlvbnMgZXh0ZW5kcyBJQXVkaW9BbmFseXplck9wdGlvbnMsIElWb2x1bWVBdWRpb09wdGlvbnMge31cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgYW5kIGF1ZGlvIG91dHB1dCBub2RlIHdpdGggYW4gYW5hbHl6ZXIgYW5kIHZvbHVtZSBjb250cm9sLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBdWRpb091dE5vZGUgZXh0ZW5kcyBBYnN0cmFjdE5hbWVkQXVkaW9Ob2RlIHtcbiAgICBwcml2YXRlIF9hbmFseXplcjogTnVsbGFibGU8QWJzdHJhY3RBdWRpb0FuYWx5emVyPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3N1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZW5naW5lOiBBdWRpb0VuZ2luZVYyLCBub2RlVHlwZTogQXVkaW9Ob2RlVHlwZSkge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG5vZGVUeXBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXVkaW8gYW5hbHl6ZXIgZmVhdHVyZXMuXG4gICAgICovXG4gICAgcHVibGljIGdldCBhbmFseXplcigpOiBBYnN0cmFjdEF1ZGlvQW5hbHl6ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5hbHl6ZXIgPz8gKHRoaXMuX2FuYWx5emVyID0gbmV3IF9BdWRpb0FuYWx5emVyKHRoaXMuX3N1YkdyYXBoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGF1ZGlvIG91dHB1dCB2b2x1bWUuXG4gICAgICovXG4gICAgcHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIF9HZXRWb2x1bWVBdWRpb1Byb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcInZvbHVtZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFRoZSB2b2x1bWUgc3Vibm9kZSBpcyBjcmVhdGVkIG9uIGluaXRpYWxpemF0aW9uIGFuZCBzaG91bGQgYWx3YXlzIGV4aXN0LlxuICAgICAgICBjb25zdCBub2RlID0gX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdm9sdW1lIHN1Ym5vZGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLnZvbHVtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fYW5hbHl6ZXI/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fYW5hbHl6ZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhdWRpbyBvdXRwdXQgdm9sdW1lIHdpdGggb3B0aW9uYWwgcmFtcGluZy5cbiAgICAgKiBJZiB0aGUgZHVyYXRpb24gaXMgMCB0aGVuIHRoZSB2b2x1bWUgaXMgc2V0IGltbWVkaWF0ZWx5LCBvdGhlcndpc2UgaXQgaXMgcmFtcGVkIHRvIHRoZSBuZXcgdmFsdWUgb3ZlciB0aGUgZ2l2ZW4gZHVyYXRpb24gdXNpbmcgdGhlIGdpdmVuIHNoYXBlLlxuICAgICAqIElmIGEgcmFtcCBpcyBhbHJlYWR5IGluIHByb2dyZXNzIHRoZW4gdGhlIHZvbHVtZSBpcyBub3Qgc2V0IGFuZCBhbiBlcnJvciBpcyB0aHJvd24uXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHZvbHVtZSB0by5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byB1c2UgZm9yIHJhbXBpbmcgdGhlIHZvbHVtZSBjaGFuZ2UuXG4gICAgICovXG4gICAgcHVibGljIHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyLCBvcHRpb25zOiBOdWxsYWJsZTxQYXJ0aWFsPElBdWRpb1BhcmFtZXRlclJhbXBPcHRpb25zPj4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlKHRoaXMuX3N1YkdyYXBoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB2b2x1bWUgc3Vibm9kZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUuc2V0Vm9sdW1lKHZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlLCBBYnN0cmFjdE5hbWVkQXVkaW9Ob2RlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL2F1ZGlvU3ViTm9kZVwiO1xuXG4vKipcbiAqIEFkZHMgY29tbW9uIHN1YiBncmFwaCBmdW5jdGlvbmFsaXR5IHRvIGFuIGF1ZGlvIG5vZGUuXG4gKlxuICogQXVkaW8gbm9kZXMgc3VjaCBhcyBzdGF0aWMgc291bmRzLCBzdHJlYW1pbmcgc291bmRzLCBhbmQgYnVzZXMgY2FuIHVzZSBhdWRpbyBzdWIgZ3JhcGhzIHRvIHByb2Nlc3MgYXVkaW8gaW50ZXJuYWxseVxuICogYmVmb3JlIHNlbmRpbmcgaXQgdG8gY29ubmVjdGVkIGRvd25zdHJlYW0gYXVkaW8gbm9kZXMuIFRoaXMgaXMgdXNlZnVsIGZvciBhcHBseWluZyBlZmZlY3RzLCBzcGF0aWFsIGF1ZGlvLCBhbmQgb3RoZXJcbiAqIGF1ZGlvIHByb2Nlc3NpbmcgdGFza3MgY29tbW9uIHRvIG11bHRpcGxlIGF1ZGlvIG5vZGUgY2xhc3Nlcy5cbiAqXG4gKiBBIGtleSBmZWF0dXJlIG9mIGF1ZGlvIHN1YiBncmFwaHMgaXMgdGhlaXIgYXVkaW8gc3ViIG5vZGVzIGFyZSBjcmVhdGVkIGFzeW5jaHJvbm91c2x5IG9uIGRlbWFuZCBzbyB0aGUgbWluaW11bSBzZXRcbiAqIG9mIHN1YiBub2RlcyBhcmUgdXNlZCBhdCBhbGwgdGltZXMgdG8gc2F2ZSBtZW1vcnkgYW5kIENQVSByZXNvdXJjZXMuIFRoZSB0cmFkZW9mZiBpcyBhIHNtYWxsIGRlbGF5IHdoZW4gZmlyc3RcbiAqIHNldHRpbmcgYSBwcm9wZXJ0eSBiYWNrZWQgYnkgYSBzdWIgbm9kZS4gVGhpcyBkZWxheSBpcyBhdm9pZGVkIGJ5IHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBvcHRpb25zIHRvIGluaXRpYWxpemUgdGhlXG4gKiBzdWIgbm9kZSBvbiBjcmVhdGlvbiwgZS5nLiBgc3BhdGlhbEVuYWJsZWRgIGFuZCBgc3RlcmVvRW5hYmxlZGAsIG9yIGJ5IHNldHRpbmcgYW55IGNyZWF0aW9uIG9wdGlvbiBiYWNrZWQgYnkgdGhlXG4gKiBzdWIgbm9kZSwgZS5nLiBgc3BhdGlhbFBvc2l0aW9uYCBhbmQgYHN0ZXJlb1BhbmAuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIHtcbiAgICBwcml2YXRlIF9jcmVhdGVTdWJOb2RlUHJvbWlzZXM6IHsgW2tleTogc3RyaW5nXTogUHJvbWlzZTxfQWJzdHJhY3RBdWRpb1N1Yk5vZGU+IH0gPSB7fTtcbiAgICBwcml2YXRlIF9pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc3ViTm9kZXM6IHsgW2tleTogc3RyaW5nXTogX0Fic3RyYWN0QXVkaW9TdWJOb2RlIH0gPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSBnaXZlbiBjYWxsYmFjayB3aXRoIHRoZSBuYW1lZCBzdWIgbm9kZSwgY3JlYXRpbmcgdGhlIHN1YiBub2RlIGlmIG5lZWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdWIgbm9kZVxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBuYW1lZCBzdWIgbm9kZVxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGNhbGxPblN1Yk5vZGU8VCBleHRlbmRzIF9BYnN0cmFjdEF1ZGlvU3ViTm9kZT4obmFtZTogQXVkaW9TdWJOb2RlLCBjYWxsYmFjazogKG5vZGU6IFQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0U3ViTm9kZShuYW1lKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUgYXMgVCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxuICAgICAgICB0aGlzLl9jcmVhdGVTdWJOb2RlUHJvbWlzZXNSZXNvbHZlZEFzeW5jKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5nZXRTdWJOb2RlKG5hbWUpO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlIGFzIFQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQW5kQWRkU3ViTm9kZUFzeW5jKG5hbWUpLnRoZW4oKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlIGFzIFQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIG5hbWVkIHN1Ym5vZGUgYW5kIGFkZHMgaXQgdG8gdGhlIHN1YiBncmFwaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzdWIgbm9kZS5cbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY3JlYXRlZCBzdWIgbm9kZS5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBwdWJsaWMgY3JlYXRlQW5kQWRkU3ViTm9kZUFzeW5jKG5hbWU6IEF1ZGlvU3ViTm9kZSk6IFByb21pc2U8X0Fic3RyYWN0QXVkaW9TdWJOb2RlPiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxuICAgICAgICB0aGlzLl9jcmVhdGVTdWJOb2RlUHJvbWlzZXNbbmFtZV0gfHw9IHRoaXMuX2NyZWF0ZVN1Yk5vZGUobmFtZSkudGhlbigobm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkU3ViTm9kZShub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzW25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbGVhc2VzIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuX2lzRGlzcG9zZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHN1Yk5vZGVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLl9zdWJOb2Rlcyk7XG4gICAgICAgIGZvciAoY29uc3Qgc3ViTm9kZSBvZiBzdWJOb2Rlcykge1xuICAgICAgICAgICAgc3ViTm9kZS5kaXNwb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdWJOb2RlcyA9IHt9O1xuICAgICAgICB0aGlzLl9jcmVhdGVTdWJOb2RlUHJvbWlzZXMgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcHJldmlvdXNseSBjcmVhdGVkIHN1YiBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc3ViIG5vZGVcbiAgICAgKiBAcmV0dXJucyBUaGUgbmFtZWQgc3ViIG5vZGUsIG9yIGBudWxsYCBpZiBpdCBoYXMgbm90IGJlZW4gY3JlYXRlZCwgeWV0XG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBnZXRTdWJOb2RlPFQgZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGU+KG5hbWU6IHN0cmluZyk6IE51bGxhYmxlPFQ+IHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9zdWJOb2Rlc1tuYW1lXSBhcyBUKSA/PyBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBzdWIgbm9kZSBmcm9tIHRoZSBzdWIgZ3JhcGguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3ViTm9kZSAtIFRoZSBzdWIgbm9kZSB0byByZW1vdmVcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdWIgbm9kZSBpcyByZW1vdmVkXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVtb3ZlU3ViTm9kZUFzeW5jKHN1Yk5vZGU6IE51bGxhYmxlPF9BYnN0cmFjdEF1ZGlvU3ViTm9kZT4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9jcmVhdGVTdWJOb2RlUHJvbWlzZXNSZXNvbHZlZEFzeW5jKCk7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHN1Yk5vZGUubmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX3N1Yk5vZGVzW25hbWVdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc3ViTm9kZXNbbmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuX29uU3ViTm9kZXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jcmVhdGVTdWJOb2RlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8X0Fic3RyYWN0QXVkaW9TdWJOb2RlPjtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHN1Yi1ub2RlcyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICAgKiAtIE92ZXJyaWRlIHRoaXMgdG8gY29ubmVjdCBhbmQgcmVjb25uZWN0IHN1Yi1ub2RlcyBhcyBuZWVkZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9vblN1Yk5vZGVzQ2hhbmdlZCgpOiB2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGFzeW5jIF9jcmVhdGVTdWJOb2RlUHJvbWlzZXNSZXNvbHZlZEFzeW5jKCk6IFByb21pc2U8X0Fic3RyYWN0QXVkaW9TdWJOb2RlW10+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXModGhpcy5fY3JlYXRlU3ViTm9kZVByb21pc2VzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkU3ViTm9kZShub2RlOiBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIG5vZGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3ViTm9kZXNbbm9kZS5uYW1lXSA9IG5vZGU7XG5cbiAgICAgICAgbm9kZS5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZE9uY2UodGhpcy5fb25TdWJOb2RlRGlzcG9zZWQpO1xuXG4gICAgICAgIHRoaXMuX29uU3ViTm9kZXNDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25TdWJOb2RlRGlzcG9zZWQgPSAobm9kZTogQWJzdHJhY3RBdWRpb05vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViTm9kZSA9IG5vZGUgYXMgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZTtcblxuICAgICAgICBkZWxldGUgdGhpcy5fc3ViTm9kZXNbc3ViTm9kZS5uYW1lXTtcblxuICAgICAgICB0aGlzLl9vblN1Yk5vZGVzQ2hhbmdlZCgpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBBdWRpb05vZGVUeXBlLCBBYnN0cmFjdE5hbWVkQXVkaW9Ob2RlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi4vYXVkaW9FbmdpbmVWMlwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX0Fic3RyYWN0QXVkaW9TdWJOb2RlIGV4dGVuZHMgQWJzdHJhY3ROYW1lZEF1ZGlvTm9kZSB7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIEF1ZGlvTm9kZVR5cGUuSEFTX0lOUFVUU19BTkRfT1VUUFVUUyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25uZWN0KG5vZGU6IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3Qobm9kZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBkaXNjb25uZWN0KG5vZGU6IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2Rpc2Nvbm5lY3Qobm9kZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpc2Nvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBkaXNjb25uZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2Rvd25zdHJlYW1Ob2Rlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGlzY29ubmVjdCBmYWlsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2Rvd25zdHJlYW1Ob2Rlcy52YWx1ZXMoKTtcblxuICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc2Nvbm5lY3QobmV4dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb25uZWN0IGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZSwgSUF1ZGlvQW5hbHl6ZXJPcHRpb25zIH0gZnJvbSBcIi4uL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgeyBfQXVkaW9BbmFseXplckRlZmF1bHRzIH0gZnJvbSBcIi4uL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9hdWRpb1N1Yk5vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9BdWRpb0FuYWx5emVyU3ViTm9kZSBleHRlbmRzIF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihBdWRpb1N1Yk5vZGUuQU5BTFlaRVIsIGVuZ2luZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGZmdFNpemU6IEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZTtcbiAgICBwdWJsaWMgYWJzdHJhY3QgbWluRGVjaWJlbHM6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3QgbWF4RGVjaWJlbHM6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc21vb3RoaW5nOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoKTogVWludDhBcnJheTtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKCk6IEZsb2F0MzJBcnJheTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElBdWRpb0FuYWx5emVyT3B0aW9ucz4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZnRTaXplID0gb3B0aW9ucy5hbmFseXplckZGVFNpemUgPz8gX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cy5mZnRTaXplO1xuICAgICAgICB0aGlzLm1pbkRlY2liZWxzID0gb3B0aW9ucy5hbmFseXplck1pbkRlY2liZWxzID8/IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMubWluRGVjaWJlbHM7XG4gICAgICAgIHRoaXMubWF4RGVjaWJlbHMgPSBvcHRpb25zLmFuYWx5emVyTWF4RGVjaWJlbHMgPz8gX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cy5tYXhEZWNpYmVscztcbiAgICAgICAgdGhpcy5zbW9vdGhpbmcgPSBvcHRpb25zLmFuYWx5emVyU21vb3RoaW5nID8/IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMuc21vb3RoaW5nO1xuICAgIH1cbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZShzdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCk6IE51bGxhYmxlPF9BdWRpb0FuYWx5emVyU3ViTm9kZT4ge1xuICAgIHJldHVybiBzdWJHcmFwaC5nZXRTdWJOb2RlPF9BdWRpb0FuYWx5emVyU3ViTm9kZT4oQXVkaW9TdWJOb2RlLkFOQUxZWkVSKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9TZXRBdWRpb0FuYWx5emVyUHJvcGVydHk8SyBleHRlbmRzIGtleW9mIHR5cGVvZiBfQXVkaW9BbmFseXplckRlZmF1bHRzPihzdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCwgcHJvcGVydHk6IEssIHZhbHVlOiBfQXVkaW9BbmFseXplclN1Yk5vZGVbS10pOiB2b2lkIHtcbiAgICBzdWJHcmFwaC5jYWxsT25TdWJOb2RlPF9BdWRpb0FuYWx5emVyU3ViTm9kZT4oQXVkaW9TdWJOb2RlLkFOQUxZWkVSLCAobm9kZSkgPT4ge1xuICAgICAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hdWRpb1BhcmFtZXRlclwiO1xuaW1wb3J0IHsgQXVkaW9QYXJhbWV0ZXJSYW1wU2hhcGUgfSBmcm9tIFwiLi4vLi4vYXVkaW9QYXJhbWV0ZXJcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi9zdWJOb2Rlcy9hdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgX1ZvbHVtZUF1ZGlvRGVmYXVsdHMgPSB7XG4gICAgdm9sdW1lOiAxIGFzIG51bWJlcixcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICogVm9sdW1lIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVZvbHVtZUF1ZGlvT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIHZvbHVtZS9nYWluLiBEZWZhdWx0cyB0byAxLlxuICAgICAqL1xuICAgIHZvbHVtZTogbnVtYmVyO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgX1ZvbHVtZUF1ZGlvU3ViTm9kZSBleHRlbmRzIF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB7XG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihBdWRpb1N1Yk5vZGUuVk9MVU1FLCBlbmdpbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCB2b2x1bWU6IG51bWJlcjtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElWb2x1bWVBdWRpb09wdGlvbnM+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lID8/IF9Wb2x1bWVBdWRpb0RlZmF1bHRzLnZvbHVtZSwgeyBzaGFwZTogQXVkaW9QYXJhbWV0ZXJSYW1wU2hhcGUuTm9uZSB9KTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGFic3RyYWN0IHNldFZvbHVtZSh2YWx1ZTogbnVtYmVyLCBvcHRpb25zPzogTnVsbGFibGU8UGFydGlhbDxJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucz4+KTogdm9pZDtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9HZXRWb2x1bWVBdWRpb1N1Yk5vZGUoc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpOiBOdWxsYWJsZTxfVm9sdW1lQXVkaW9TdWJOb2RlPiB7XG4gICAgcmV0dXJuIHN1YkdyYXBoLmdldFN1Yk5vZGU8X1ZvbHVtZUF1ZGlvU3ViTm9kZT4oQXVkaW9TdWJOb2RlLlZPTFVNRSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0Vm9sdW1lQXVkaW9Qcm9wZXJ0eTxLIGV4dGVuZHMga2V5b2YgdHlwZW9mIF9Wb2x1bWVBdWRpb0RlZmF1bHRzPihzdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCwgcHJvcGVydHk6IEspOiAodHlwZW9mIF9Wb2x1bWVBdWRpb0RlZmF1bHRzKVtLXSB7XG4gICAgcmV0dXJuIF9HZXRWb2x1bWVBdWRpb1N1Yk5vZGUoc3ViR3JhcGgpPy5bcHJvcGVydHldID8/IF9Wb2x1bWVBdWRpb0RlZmF1bHRzW3Byb3BlcnR5XTtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbmV4cG9ydCB0eXBlIEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZSA9IDMyIHwgNjQgfCAxMjggfCAyNTYgfCA1MTIgfCAxMDI0IHwgMjA0OCB8IDQwOTYgfCA4MTkyIHwgMTYzODQgfCAzMjc2ODtcblxuZXhwb3J0IGNvbnN0IF9BdWRpb0FuYWx5emVyRGVmYXVsdHMgPSB7XG4gICAgZmZ0U2l6ZTogMjA0OCBhcyBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUsXG4gICAgbWluRGVjaWJlbHM6IC0xMDAgYXMgbnVtYmVyLFxuICAgIG1heERlY2liZWxzOiAtMzAgYXMgbnVtYmVyLFxuICAgIHNtb290aGluZzogMC44IGFzIG51bWJlcixcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdGhlIEF1ZGlvQW5hbHl6ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQXVkaW9BbmFseXplck9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0aGUgYXVkaW8gYW5hbHl6ZXIuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqL1xuICAgIGFuYWx5emVyRW5hYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgRkZUIChmYXN0IGZvdXJpZXIgdHJhbnNmb3JtKSB0byB1c2Ugd2hlbiBjb252ZXJ0aW5nIHRpbWUtZG9tYWluIGRhdGEgdG8gZnJlcXVlbmN5LWRvbWFpbiBkYXRhLiBEZWZhdWx0IGlzIDIwNDguXG4gICAgICovXG4gICAgYW5hbHl6ZXJGRlRTaXplOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBkZWNpYmVsIHZhbHVlIGZvciB0aGUgcmFuZ2Ugb2YgdGhlIGFuYWx5emVyLiBEZWZhdWx0IGlzIC0xMDAuXG4gICAgICovXG4gICAgYW5hbHl6ZXJNaW5EZWNpYmVsczogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gZGVjaWJlbCB2YWx1ZSBmb3IgdGhlIHJhbmdlIG9mIHRoZSBhbmFseXplci4gRGVmYXVsdCBpcyAtMzAuXG4gICAgICovXG4gICAgYW5hbHl6ZXJNYXhEZWNpYmVsczogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHRoYXQgZGV0ZXJtaW5lcyBob3cgcXVpY2tseSB0aGUgYW5hbHl6ZXIncyB2YWx1ZSBjaGFuZ2VzLiBEZWZhdWx0IGlzIDAuOC5cbiAgICAgKi9cbiAgICBhbmFseXplclNtb290aGluZzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBhdWRpbyBhbmFseXplciBvcHRpb25zIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIGF1ZGlvIGFuYWx5emVyIG9wdGlvbnMgYXJlIGRlZmluZWQsIG90aGVyd2lzZSBgZmFsc2VgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX0hhc0F1ZGlvQW5hbHl6ZXJPcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8SUF1ZGlvQW5hbHl6ZXJPcHRpb25zPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIG9wdGlvbnMuYW5hbHl6ZXJFbmFibGVkIHx8XG4gICAgICAgIG9wdGlvbnMuYW5hbHl6ZXJGRlRTaXplICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5hbmFseXplck1pbkRlY2liZWxzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5hbmFseXplck1heERlY2liZWxzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5hbmFseXplclNtb290aGluZyAhPT0gdW5kZWZpbmVkXG4gICAgKTtcbn1cblxuLyoqXG4gKiBBbiBBdWRpb0FuYWx5emVyIGNvbnZlcnRzIHRpbWUtZG9tYWluIGF1ZGlvIGRhdGEgaW50byB0aGUgZnJlcXVlbmN5LWRvbWFpbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXVkaW9BbmFseXplciB7XG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIEZGVCAoZmFzdCBmb3VyaWVyIHRyYW5zZm9ybSkgdG8gdXNlIHdoZW4gY29udmVydGluZyB0aW1lLWRvbWFpbiBkYXRhIHRvIGZyZXF1ZW5jeS1kb21haW4gZGF0YS4gRGVmYXVsdCBpcyAyMDQ4LlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBmZnRTaXplOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGRhdGEgdmFsdWVzIHRoYXQgd2lsbCBiZSByZXR1cm5lZCB3aGVuIGNhbGxpbmcgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoKSBvciBnZXRGbG9hdEZyZXF1ZW5jeURhdGEoKS4gVGhpcyBpcyBhbHdheXMgaGFsZiB0aGUgYGZmdFNpemVgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZnJlcXVlbmN5QmluQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmZ0U2l6ZSAvIDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgYW5hbHl6ZXIgaXMgZW5hYmxlZCBvciBub3QuXG4gICAgICogLSBUaGUgYGdldEJ5dGVGcmVxdWVuY3lEYXRhYCBhbmQgYGdldEZsb2F0RnJlcXVlbmN5RGF0YWAgZnVuY3Rpb25zIHJldHVybiBgbnVsbGAgaWYgdGhlIGFuYWx5emVyIGlzIG5vdCBlbmFibGVkLlxuICAgICAqIEBzZWUge0BsaW5rIGVuYWJsZUFzeW5jfVxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBkZWNpYmVsIHZhbHVlIGZvciB0aGUgcmFuZ2Ugb2YgdGhlIGFuYWx5emVyLiBEZWZhdWx0IGlzIC0xMDAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IG1pbkRlY2liZWxzOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBkZWNpYmVsIHZhbHVlIGZvciB0aGUgcmFuZ2Ugb2YgdGhlIGFuYWx5emVyLiBEZWZhdWx0IGlzIC0zMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWF4RGVjaWJlbHM6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSB0aGF0IGRldGVybWluZXMgaG93IHF1aWNrbHkgdGhlIGFuYWx5emVyJ3MgdmFsdWUgY2hhbmdlcy4gRGVmYXVsdCBpcyAwLjguXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHNtb290aGluZzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogUmVsZWFzZXMgYXNzb2NpYXRlZCByZXNvdXJjZXMuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGRpc3Bvc2UoKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhlIGFuYWx5emVyXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGVuYWJsZUFzeW5jKCk6IFByb21pc2U8dm9pZD47XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IGZyZXF1ZW5jeSBkYXRhIGFzIGEgYnl0ZSBhcnJheVxuICAgICAqIEByZXR1cm5zIGEgVWludDhBcnJheSBpZiB0aGUgYW5hbHl6ZXIgaXMgZW5hYmxlZCwgb3RoZXJ3aXNlIGBudWxsYFxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRCeXRlRnJlcXVlbmN5RGF0YSgpOiBVaW50OEFycmF5O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBmcmVxdWVuY3kgZGF0YSBhcyBhIGZsb2F0IGFycmF5XG4gICAgICogQHJldHVybnMgYSBGbG9hdDMyQXJyYXkgaWYgdGhlIGFuYWx5emVyIGlzIGVuYWJsZWQsIG90aGVyd2lzZSBgbnVsbGBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKCk6IEZsb2F0MzJBcnJheTtcbn1cbiIsImltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL2xvZ2dlclwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplclwiO1xuaW1wb3J0IHsgX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cywgQWJzdHJhY3RBdWRpb0FuYWx5emVyIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdEF1ZGlvQW5hbHl6ZXJcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuLi9zdWJOb2Rlcy9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSwgX1NldEF1ZGlvQW5hbHl6ZXJQcm9wZXJ0eSB9IGZyb20gXCIuLi9zdWJOb2Rlcy9hdWRpb0FuYWx5emVyU3ViTm9kZVwiO1xuaW1wb3J0IHsgQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uL3N1Yk5vZGVzL2F1ZGlvU3ViTm9kZVwiO1xuXG5sZXQgRW1wdHlCeXRlRnJlcXVlbmN5RGF0YTogTnVsbGFibGU8VWludDhBcnJheT4gPSBudWxsO1xubGV0IEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhOiBOdWxsYWJsZTxGbG9hdDMyQXJyYXk+ID0gbnVsbDtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9HZXRFbXB0eUJ5dGVGcmVxdWVuY3lEYXRhKCk6IFVpbnQ4QXJyYXkge1xuICAgIGlmICghRW1wdHlCeXRlRnJlcXVlbmN5RGF0YSkge1xuICAgICAgICBFbXB0eUJ5dGVGcmVxdWVuY3lEYXRhID0gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIEVtcHR5Qnl0ZUZyZXF1ZW5jeURhdGE7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0RW1wdHlGbG9hdEZyZXF1ZW5jeURhdGEoKTogRmxvYXQzMkFycmF5IHtcbiAgICBpZiAoIUVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhKSB7XG4gICAgICAgIEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhID0gbmV3IEZsb2F0MzJBcnJheSgpO1xuICAgIH1cbiAgICByZXR1cm4gRW1wdHlGbG9hdEZyZXF1ZW5jeURhdGE7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfQXVkaW9BbmFseXplciBleHRlbmRzIEFic3RyYWN0QXVkaW9BbmFseXplciB7XG4gICAgcHJpdmF0ZSBfZmZ0U2l6ZTogQXVkaW9BbmFseXplckZGVFNpemVUeXBlID0gX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cy5mZnRTaXplO1xuICAgIHByaXZhdGUgX21heERlY2liZWxzOiBudW1iZXIgPSBfQXVkaW9BbmFseXplckRlZmF1bHRzLm1heERlY2liZWxzO1xuICAgIHByaXZhdGUgX21pbkRlY2liZWxzOiBudW1iZXIgPSBfQXVkaW9BbmFseXplckRlZmF1bHRzLm1pbkRlY2liZWxzO1xuICAgIHByaXZhdGUgX3Ntb290aGluZzogbnVtYmVyID0gX0F1ZGlvQW5hbHl6ZXJEZWZhdWx0cy5zbW9vdGhpbmc7XG4gICAgcHJpdmF0ZSBfc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGg7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gc3ViR3JhcGg7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgZmZ0U2l6ZSgpOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmZ0U2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZmdFNpemUodmFsdWU6IEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZSkge1xuICAgICAgICB0aGlzLl9mZnRTaXplID0gdmFsdWU7XG4gICAgICAgIF9TZXRBdWRpb0FuYWx5emVyUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwiZmZ0U2l6ZVwiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gX0dldEF1ZGlvQW5hbHl6ZXJTdWJOb2RlKHRoaXMuX3N1YkdyYXBoKSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtaW5EZWNpYmVscygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWluRGVjaWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtaW5EZWNpYmVscyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21pbkRlY2liZWxzID0gdmFsdWU7XG4gICAgICAgIF9TZXRBdWRpb0FuYWx5emVyUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwibWluRGVjaWJlbHNcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IG1heERlY2liZWxzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEZWNpYmVscztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heERlY2liZWxzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWF4RGVjaWJlbHMgPSB2YWx1ZTtcbiAgICAgICAgX1NldEF1ZGlvQW5hbHl6ZXJQcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJtYXhEZWNpYmVsc1wiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgc21vb3RoaW5nKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbW9vdGhpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzbW9vdGhpbmcodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zbW9vdGhpbmcgPSB2YWx1ZTtcbiAgICAgICAgX1NldEF1ZGlvQW5hbHl6ZXJQcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJzbW9vdGhpbmdcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3ViTm9kZSA9IF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG4gICAgICAgIGlmIChzdWJOb2RlKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgICAgICB0aGlzLl9zdWJHcmFwaC5yZW1vdmVTdWJOb2RlQXN5bmMoc3ViTm9kZSk7XG4gICAgICAgICAgICBzdWJOb2RlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgZW5hYmxlQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHN1Yk5vZGUgPSBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUodGhpcy5fc3ViR3JhcGgpO1xuICAgICAgICBpZiAoIXN1Yk5vZGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3N1YkdyYXBoLmNyZWF0ZUFuZEFkZFN1Yk5vZGVBc3luYyhBdWRpb1N1Yk5vZGUuQU5BTFlaRVIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRCeXRlRnJlcXVlbmN5RGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgY29uc3Qgc3ViTm9kZSA9IF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG4gICAgICAgIGlmICghc3ViTm9kZSkge1xuICAgICAgICAgICAgTG9nZ2VyLldhcm4oXCJBdWRpb0FuYWx5emVyIG5vdCBlbmFibGVkXCIpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgdGhpcy5lbmFibGVBc3luYygpO1xuICAgICAgICAgICAgcmV0dXJuIF9HZXRFbXB0eUJ5dGVGcmVxdWVuY3lEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1Yk5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldEZsb2F0RnJlcXVlbmN5RGF0YSgpOiBGbG9hdDMyQXJyYXkge1xuICAgICAgICBjb25zdCBzdWJOb2RlID0gX0dldEF1ZGlvQW5hbHl6ZXJTdWJOb2RlKHRoaXMuX3N1YkdyYXBoKTtcbiAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICBMb2dnZXIuV2FybihcIkF1ZGlvQW5hbHl6ZXIgbm90IGVuYWJsZWRcIik7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFzeW5jKCk7XG4gICAgICAgICAgICByZXR1cm4gX0dldEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1Yk5vZGUuZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgX1ZvbHVtZUF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3ZvbHVtZUF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hdWRpb1BhcmFtZXRlclwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnRcIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4uL3dlYkF1ZGlvRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSwgSVdlYkF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi93ZWJBdWRpb05vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gX0NyZWF0ZVZvbHVtZUF1ZGlvU3ViTm9kZUFzeW5jKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKTogUHJvbWlzZTxfVm9sdW1lQXVkaW9TdWJOb2RlPiB7XG4gICAgcmV0dXJuIG5ldyBfVm9sdW1lV2ViQXVkaW9TdWJOb2RlKGVuZ2luZSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfVm9sdW1lV2ViQXVkaW9TdWJOb2RlIGV4dGVuZHMgX1ZvbHVtZUF1ZGlvU3ViTm9kZSBpbXBsZW1lbnRzIElXZWJBdWRpb1N1Yk5vZGUge1xuICAgIHByaXZhdGUgX3ZvbHVtZTogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgbm9kZTogQXVkaW9Ob2RlO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSkge1xuICAgICAgICBzdXBlcihlbmdpbmUpO1xuXG4gICAgICAgIGNvbnN0IGdhaW5Ob2RlID0gKHRoaXMubm9kZSA9IG5ldyBHYWluTm9kZShlbmdpbmUuX2F1ZGlvQ29udGV4dCkpO1xuICAgICAgICB0aGlzLl92b2x1bWUgPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgZ2Fpbk5vZGUuZ2Fpbik7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fdm9sdW1lLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNldFZvbHVtZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpOiBBdWRpb05vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCk6IEF1ZGlvTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXRWb2x1bWUodmFsdWU6IG51bWJlciwgb3B0aW9uczogTnVsbGFibGU8UGFydGlhbDxJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucz4+ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLl92b2x1bWUuc2V0VGFyZ2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfVm9sdW1lV2ViQXVkaW9TdWJOb2RlXCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgX0F1ZGlvQW5hbHl6ZXJTdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYXVkaW9BbmFseXplclN1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9BbmFseXplckZGVFNpemVUeXBlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdEF1ZGlvQW5hbHl6ZXJcIjtcbmltcG9ydCB7IF9HZXRFbXB0eUJ5dGVGcmVxdWVuY3lEYXRhLCBfR2V0RW1wdHlGbG9hdEZyZXF1ZW5jeURhdGEgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2F1ZGlvQW5hbHl6ZXJcIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4uL3dlYkF1ZGlvRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSB9IGZyb20gXCIuLi93ZWJBdWRpb05vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gX0NyZWF0ZUF1ZGlvQW5hbHl6ZXJTdWJOb2RlQXN5bmMoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpOiBQcm9taXNlPF9BdWRpb0FuYWx5emVyU3ViTm9kZT4ge1xuICAgIHJldHVybiBuZXcgX1dlYkF1ZGlvQW5hbHl6ZXJTdWJOb2RlKGVuZ2luZSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9BbmFseXplclN1Yk5vZGUgZXh0ZW5kcyBfQXVkaW9BbmFseXplclN1Yk5vZGUgaW1wbGVtZW50cyBJV2ViQXVkaW9Jbk5vZGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2FuYWx5emVyTm9kZTogQW5hbHlzZXJOb2RlO1xuICAgIHByaXZhdGUgX2J5dGVGcmVxdWVuY3lEYXRhOiBOdWxsYWJsZTxVaW50OEFycmF5PiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZmxvYXRGcmVxdWVuY3lEYXRhOiBOdWxsYWJsZTxGbG9hdDMyQXJyYXk+ID0gbnVsbDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpIHtcbiAgICAgICAgc3VwZXIoZW5naW5lKTtcblxuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUgPSBuZXcgQW5hbHlzZXJOb2RlKGVuZ2luZS5fYXVkaW9Db250ZXh0KTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBmZnRTaXplKCk6IEF1ZGlvQW5hbHl6ZXJGRlRTaXplVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFseXplck5vZGUuZmZ0U2l6ZSBhcyBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmZnRTaXplKHZhbHVlOiBBdWRpb0FuYWx5emVyRkZUU2l6ZVR5cGUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLl9hbmFseXplck5vZGUuZmZ0U2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYW5hbHl6ZXJOb2RlLmZmdFNpemUgPSB2YWx1ZTtcblxuICAgICAgICB0aGlzLl9jbGVhckFycmF5cygpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKTogQXVkaW9Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuYWx5emVyTm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtaW5EZWNpYmVscygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5hbHl6ZXJOb2RlLm1pbkRlY2liZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGVjaWJlbHModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUubWluRGVjaWJlbHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtYXhEZWNpYmVscygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5hbHl6ZXJOb2RlLm1heERlY2liZWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4RGVjaWJlbHModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUubWF4RGVjaWJlbHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBzbW9vdGhpbmcoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuYWx5emVyTm9kZS5zbW9vdGhpbmdUaW1lQ29uc3RhbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBzbW9vdGhpbmcodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fY2xlYXJBcnJheXMoKTtcbiAgICAgICAgdGhpcy5fYnl0ZUZyZXF1ZW5jeURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLl9mbG9hdEZyZXF1ZW5jeURhdGEgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2FuYWx5emVyTm9kZS5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiX1dlYkF1ZGlvQW5hbHl6ZXJTdWJOb2RlXCI7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRCeXRlRnJlcXVlbmN5RGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgaWYgKCF0aGlzLl9ieXRlRnJlcXVlbmN5RGF0YSB8fCB0aGlzLl9ieXRlRnJlcXVlbmN5RGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2J5dGVGcmVxdWVuY3lEYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYW5hbHl6ZXJOb2RlLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hbmFseXplck5vZGUuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5fYnl0ZUZyZXF1ZW5jeURhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYnl0ZUZyZXF1ZW5jeURhdGE7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRGbG9hdEZyZXF1ZW5jeURhdGEoKTogRmxvYXQzMkFycmF5IHtcbiAgICAgICAgaWYgKCF0aGlzLl9mbG9hdEZyZXF1ZW5jeURhdGEgfHwgdGhpcy5fZmxvYXRGcmVxdWVuY3lEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZmxvYXRGcmVxdWVuY3lEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl9hbmFseXplck5vZGUuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FuYWx5emVyTm9kZS5nZXRGbG9hdEZyZXF1ZW5jeURhdGEodGhpcy5fZmxvYXRGcmVxdWVuY3lEYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zsb2F0RnJlcXVlbmN5RGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbGVhckFycmF5cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYnl0ZUZyZXF1ZW5jeURhdGE/LnNldChfR2V0RW1wdHlCeXRlRnJlcXVlbmN5RGF0YSgpKTtcbiAgICAgICAgdGhpcy5fZmxvYXRGcmVxdWVuY3lEYXRhPy5zZXQoX0dldEVtcHR5RmxvYXRGcmVxdWVuY3lEYXRhKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9hYnN0cmFjdEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0dldEF1ZGlvQW5hbHl6ZXJTdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYXVkaW9BbmFseXplclN1Yk5vZGVcIjtcbmltcG9ydCB7IEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2F1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJVm9sdW1lQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvdm9sdW1lQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvdm9sdW1lQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IElBdWRpb0FuYWx5emVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RBdWRpb0FuYWx5emVyXCI7XG5pbXBvcnQgeyBfSGFzQXVkaW9BbmFseXplck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0QXVkaW9BbmFseXplclwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUsIElXZWJBdWRpb1N1cGVyTm9kZSB9IGZyb20gXCIuLi93ZWJBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL3ZvbHVtZVdlYkF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0NyZWF0ZVZvbHVtZUF1ZGlvU3ViTm9kZUFzeW5jIH0gZnJvbSBcIi4vdm9sdW1lV2ViQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfQ3JlYXRlQXVkaW9BbmFseXplclN1Yk5vZGVBc3luYyB9IGZyb20gXCIuL3dlYkF1ZGlvQW5hbHl6ZXJTdWJOb2RlXCI7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBXZWJBdWRpb0Jhc2VTdWJHcmFwaC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJV2ViQXVkaW9CYXNlU3ViR3JhcGhPcHRpb25zIGV4dGVuZHMgSUF1ZGlvQW5hbHl6ZXJPcHRpb25zLCBJVm9sdW1lQXVkaW9PcHRpb25zIHt9XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfV2ViQXVkaW9CYXNlU3ViR3JhcGggZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIHtcbiAgICBwcm90ZWN0ZWQgX293bmVyOiBJV2ViQXVkaW9TdXBlck5vZGU7XG4gICAgcHJvdGVjdGVkIF9vdXRwdXROb2RlOiBOdWxsYWJsZTxBdWRpb05vZGU+ID0gbnVsbDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3duZXI6IElXZWJBdWRpb1N1cGVyTm9kZSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX293bmVyID0gb3duZXI7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0QXN5bmMob3B0aW9uczogUGFydGlhbDxJV2ViQXVkaW9CYXNlU3ViR3JhcGhPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBoYXNBbmFseXplck9wdGlvbnMgPSBfSGFzQXVkaW9BbmFseXplck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGhhc0FuYWx5emVyT3B0aW9ucykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVBbmRBZGRTdWJOb2RlQXN5bmMoQXVkaW9TdWJOb2RlLkFOQUxZWkVSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlQW5kQWRkU3ViTm9kZUFzeW5jKEF1ZGlvU3ViTm9kZS5WT0xVTUUpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuX2NyZWF0ZVN1Yk5vZGVQcm9taXNlc1Jlc29sdmVkQXN5bmMoKTtcblxuICAgICAgICBpZiAoaGFzQW5hbHl6ZXJPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBhbmFseXplck5vZGUgPSBfR2V0QXVkaW9BbmFseXplclN1Yk5vZGUodGhpcyk7XG4gICAgICAgICAgICBpZiAoIWFuYWx5emVyTm9kZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFuYWx5emVyIHN1Ym5vZGUuXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbmFseXplck5vZGUuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZvbHVtZU5vZGUgPSBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlKHRoaXMpO1xuICAgICAgICBpZiAoIXZvbHVtZU5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHZvbHVtZSBzdWJub2RlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZvbHVtZU5vZGUuc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICBpZiAodm9sdW1lTm9kZS5nZXRDbGFzc05hbWUoKSAhPT0gXCJfVm9sdW1lV2ViQXVkaW9TdWJOb2RlXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIFdlYkF1ZGlvIHN1Ym5vZGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3V0cHV0Tm9kZSA9ICh2b2x1bWVOb2RlIGFzIF9Wb2x1bWVXZWJBdWRpb1N1Yk5vZGUpLm5vZGU7XG5cbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgbmV3IHdyYXBwZWQgV2ViQXVkaW8gbm9kZSB0byB0aGUgd3JhcHBlZCBkb3duc3RyZWFtIFdlYkF1ZGlvIG5vZGVzLlxuICAgICAgICAvLyBUaGUgd3JhcHBlciBub2RlcyBhcmUgdW5hd2FyZSBvZiB0aGlzIGNoYW5nZS5cbiAgICAgICAgaWYgKHRoaXMuX291dHB1dE5vZGUgJiYgdGhpcy5fZG93bnN0cmVhbU5vZGVzKSB7XG4gICAgICAgICAgICBjb25zdCBpdCA9IHRoaXMuX2Rvd25zdHJlYW1Ob2Rlcy52YWx1ZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IG5leHQgPSBpdC5uZXh0KCk7ICFuZXh0LmRvbmU7IG5leHQgPSBpdC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbk5vZGUgPSAobmV4dC52YWx1ZSBhcyBJV2ViQXVkaW9Jbk5vZGUpLl9pbk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGluTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vdXRwdXROb2RlLmNvbm5lY3QoaW5Ob2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX2Rvd25zdHJlYW1Ob2RlczogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj47XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCk6IE51bGxhYmxlPEF1ZGlvTm9kZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3V0cHV0Tm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfb3V0Tm9kZSgpOiBOdWxsYWJsZTxBdWRpb05vZGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dE5vZGU7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gaXMgYXN5bmMsIGJ1dCB0aHJvd3Mgc3luY2hyb25vdXNseS4gQXZvaWRpbmcgYnJlYWtpbmcgY2hhbmdlcy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZVN1Yk5vZGUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxfQWJzdHJhY3RBdWRpb1N1Yk5vZGU+IHtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIEF1ZGlvU3ViTm9kZS5BTkFMWVpFUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX0NyZWF0ZUF1ZGlvQW5hbHl6ZXJTdWJOb2RlQXN5bmModGhpcy5fb3duZXIuZW5naW5lKTtcbiAgICAgICAgICAgIGNhc2UgQXVkaW9TdWJOb2RlLlZPTFVNRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gX0NyZWF0ZVZvbHVtZUF1ZGlvU3ViTm9kZUFzeW5jKHRoaXMuX293bmVyLmVuZ2luZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBzdWJub2RlIG5hbWU6ICR7bmFtZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfb25TdWJOb2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGFuYWx5emVyTm9kZSA9IF9HZXRBdWRpb0FuYWx5emVyU3ViTm9kZSh0aGlzKTtcbiAgICAgICAgY29uc3Qgdm9sdW1lTm9kZSA9IF9HZXRWb2x1bWVBdWRpb1N1Yk5vZGUodGhpcyk7XG5cbiAgICAgICAgaWYgKGFuYWx5emVyTm9kZSAmJiB2b2x1bWVOb2RlKSB7XG4gICAgICAgICAgICB2b2x1bWVOb2RlLmNvbm5lY3QoYW5hbHl6ZXJOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=