"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_abstractAudio_subProperties_stereoAudio_js-core_dist_AudioV2_webAudio_subNo-525cb1"],{

/***/ "../core/dist/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js":
/*!**************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GetSpatialAudioSubNode: () => (/* binding */ _GetSpatialAudioSubNode),
/* harmony export */   _SetSpatialAudioProperty: () => (/* binding */ _SetSpatialAudioProperty),
/* harmony export */   _SpatialAudioSubNode: () => (/* binding */ _SpatialAudioSubNode)
/* harmony export */ });
/* harmony import */ var _components_spatialAudioAttacherComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/spatialAudioAttacherComponent */ "../core/dist/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js");
/* harmony import */ var _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstractAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/** @internal */
class _SpatialAudioSubNode extends _abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_2__._AbstractAudioSubNode {
    constructor(engine) {
        super("Spatial" /* AudioSubNode.SPATIAL */, engine);
        this._attacherComponent = null;
    }
    /** @internal */
    get isAttached() {
        return this._attacherComponent !== null && this._attacherComponent.isAttached;
    }
    /** @internal */
    attach(sceneNode, useBoundingBox, attachmentType) {
        this.detach();
        if (!this._attacherComponent) {
            this._attacherComponent = new _components_spatialAudioAttacherComponent__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioAttacherComponent(this);
        }
        this._attacherComponent.attach(sceneNode, useBoundingBox, attachmentType);
    }
    /** @internal */
    detach() {
        this._attacherComponent?.detach();
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._attacherComponent?.dispose();
        this._attacherComponent = null;
    }
    /** @internal */
    setOptions(options) {
        this.coneInnerAngle = options.spatialConeInnerAngle ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.coneInnerAngle;
        this.coneOuterAngle = options.spatialConeOuterAngle ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.coneOuterAngle;
        this.coneOuterVolume = options.spatialConeOuterVolume ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.coneOuterVolume;
        this.distanceModel = options.spatialDistanceModel ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.distanceModel;
        this.maxDistance = options.spatialMaxDistance ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.maxDistance;
        this.minDistance = options.spatialMinDistance ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.minDistance;
        this.panningModel = options.spatialPanningModel ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.panningModel;
        this.rolloffFactor = options.spatialRolloffFactor ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rolloffFactor;
        if (options.spatialPosition) {
            this.position = options.spatialPosition.clone();
        }
        if (options.spatialRotationQuaternion) {
            this.rotationQuaternion = options.spatialRotationQuaternion.clone();
        }
        else if (options.spatialRotation) {
            this.rotation = options.spatialRotation.clone();
        }
        else {
            this.rotationQuaternion = _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rotationQuaternion.clone();
        }
        this.update();
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
}
/** @internal */
function _GetSpatialAudioSubNode(subGraph) {
    return subGraph.getSubNode("Spatial" /* AudioSubNode.SPATIAL */);
}
/** @internal */
function _SetSpatialAudioProperty(subGraph, property, value) {
    subGraph.callOnSubNode("Spatial" /* AudioSubNode.SPATIAL */, (node) => {
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

/***/ "../core/dist/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js":
/*!*************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GetStereoAudioSubNode: () => (/* binding */ _GetStereoAudioSubNode),
/* harmony export */   _SetStereoAudioProperty: () => (/* binding */ _SetStereoAudioProperty),
/* harmony export */   _StereoAudioSubNode: () => (/* binding */ _StereoAudioSubNode)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subNodes_abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subNodes/abstractAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js");
/* harmony import */ var _abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractStereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _StereoAudioSubNode extends _abstractAudio_subNodes_abstractAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._AbstractAudioSubNode {
    constructor(engine) {
        super("Stereo" /* AudioSubNode.STEREO */, engine);
    }
    /** @internal */
    setOptions(options) {
        this.pan = options.stereoPan ?? _abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_1__._StereoAudioDefaults.pan;
    }
}
/** @internal */
function _GetStereoAudioSubNode(subGraph) {
    return subGraph.getSubNode("Stereo" /* AudioSubNode.STEREO */);
}
/** @internal */
function _SetStereoAudioProperty(subGraph, property, value) {
    subGraph.callOnSubNode("Stereo" /* AudioSubNode.STEREO */, (node) => {
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js":
/*!********************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSpatialAudio: () => (/* binding */ AbstractSpatialAudio),
/* harmony export */   _HasSpatialAudioOptions: () => (/* binding */ _HasSpatialAudioOptions),
/* harmony export */   _SpatialAudioDefaults: () => (/* binding */ _SpatialAudioDefaults)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


const _SpatialAudioDefaults = {
    coneInnerAngle: 6.28318530718,
    coneOuterAngle: 6.28318530718,
    coneOuterVolume: 0,
    distanceModel: "linear",
    maxDistance: 10000,
    minDistance: 1,
    panningModel: "equalpower",
    position: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(),
    rolloffFactor: 1,
    rotation: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(),
    rotationQuaternion: new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion(),
};
/**
 * @param options The spatial audio options to check.
 * @returns `true` if spatial audio options are defined, otherwise `false`.
 */
function _HasSpatialAudioOptions(options) {
    return (options.spatialEnabled ||
        options.spatialAutoUpdate !== undefined ||
        options.spatialConeInnerAngle !== undefined ||
        options.spatialConeOuterAngle !== undefined ||
        options.spatialConeOuterVolume !== undefined ||
        options.spatialDistanceModel !== undefined ||
        options.spatialMaxDistance !== undefined ||
        options.spatialMinDistance !== undefined ||
        options.spatialMinUpdateTime !== undefined ||
        options.spatialPanningModel !== undefined ||
        options.spatialPosition !== undefined ||
        options.spatialRolloffFactor !== undefined ||
        options.spatialRotation !== undefined ||
        options.spatialRotationQuaternion !== undefined);
}
/**
 * Abstract class representing the `spatial` audio property on a sound or audio bus.
 *
 * @see {@link AudioEngineV2.listener}
 */
class AbstractSpatialAudio {
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js":
/*!*******************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractStereoAudio: () => (/* binding */ AbstractStereoAudio),
/* harmony export */   _HasStereoAudioOptions: () => (/* binding */ _HasStereoAudioOptions),
/* harmony export */   _StereoAudioDefaults: () => (/* binding */ _StereoAudioDefaults)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

const _StereoAudioDefaults = {
    pan: 0,
};
/**
 * @param options The stereo audio options to check.
 * @returns `true` if stereo audio options are defined, otherwise `false`.
 */
function _HasStereoAudioOptions(options) {
    return options.stereoEnabled || options.stereoPan !== undefined;
}
/**
 * Abstract class representing the `stereo` audio property on a sound or audio bus.
 *
 * @see {@link AudioEngineV2.listener}
 */
class AbstractStereoAudio {
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/spatialAudio.js":
/*!************************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/spatialAudio.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _SpatialAudio: () => (/* binding */ _SpatialAudio)
/* harmony export */ });
/* harmony import */ var _subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subNodes/spatialAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js");
/* harmony import */ var _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _SpatialAudio extends _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__.AbstractSpatialAudio {
    /** @internal */
    constructor(subGraph) {
        super();
        this._coneInnerAngle = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.coneInnerAngle;
        this._coneOuterAngle = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.coneOuterAngle;
        this._coneOuterVolume = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.coneOuterVolume;
        this._distanceModel = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.distanceModel;
        this._maxDistance = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.maxDistance;
        this._minDistance = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.minDistance;
        this._panningModel = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.panningModel;
        this._rolloffFactor = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rolloffFactor;
        const subNode = (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(subGraph);
        if (subNode) {
            this._position = subNode.position.clone();
            this._rotation = subNode.rotation.clone();
            this._rotationQuaternion = subNode.rotationQuaternion.clone();
        }
        else {
            this._position = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.position.clone();
            this._rotation = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rotation.clone();
            this._rotationQuaternion = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rotationQuaternion.clone();
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            subGraph.createAndAddSubNodeAsync("Spatial" /* AudioSubNode.SPATIAL */);
        }
        this._subGraph = subGraph;
    }
    /** @internal */
    get coneInnerAngle() {
        return this._coneInnerAngle;
    }
    set coneInnerAngle(value) {
        this._coneInnerAngle = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "coneInnerAngle", value);
    }
    /** @internal */
    get coneOuterAngle() {
        return this._coneOuterAngle;
    }
    set coneOuterAngle(value) {
        this._coneOuterAngle = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "coneOuterAngle", value);
    }
    /** @internal */
    get coneOuterVolume() {
        return this._coneOuterVolume;
    }
    set coneOuterVolume(value) {
        this._coneOuterVolume = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "coneOuterVolume", value);
    }
    /** @internal */
    get distanceModel() {
        return this._distanceModel;
    }
    set distanceModel(value) {
        this._distanceModel = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "distanceModel", value);
    }
    /** @internal */
    get isAttached() {
        return this._subGraph.getSubNode("Spatial" /* AudioSubNode.SPATIAL */)?.isAttached ?? false;
    }
    /** @internal */
    get maxDistance() {
        return this._maxDistance;
    }
    set maxDistance(value) {
        if (value <= 0) {
            value = 0.000001;
        }
        this._maxDistance = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "maxDistance", value);
    }
    /** @internal */
    get minDistance() {
        return this._minDistance;
    }
    set minDistance(value) {
        this._minDistance = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "minDistance", value);
    }
    /** @internal */
    get panningModel() {
        return this._panningModel;
    }
    set panningModel(value) {
        this._panningModel = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "panningModel", value);
    }
    /** @internal */
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
        this._updatePosition();
    }
    /** @internal */
    get rolloffFactor() {
        return this._rolloffFactor;
    }
    set rolloffFactor(value) {
        this._rolloffFactor = value;
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._SetSpatialAudioProperty)(this._subGraph, "rolloffFactor", value);
    }
    /** @internal */
    get rotation() {
        return this._rotation;
    }
    set rotation(value) {
        this._rotation = value;
        this._updateRotation();
    }
    /** @internal */
    get rotationQuaternion() {
        return this._rotationQuaternion;
    }
    set rotationQuaternion(value) {
        this._rotationQuaternion = value;
        this._updateRotation();
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
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this._subGraph)?.attach(sceneNode, useBoundingBox, attachmentType);
    }
    /**
     * Detaches from the scene node if attached.
     */
    detach() {
        (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this._subGraph)?.detach();
    }
    /** @internal */
    update() {
        const subNode = (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this._subGraph);
        if (!subNode) {
            return;
        }
        if (subNode.isAttached) {
            subNode.update();
        }
        else {
            this._updatePosition(subNode);
            this._updateRotation(subNode);
        }
    }
    _updatePosition(subNode = null) {
        if (!subNode) {
            subNode = (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this._subGraph);
            if (!subNode) {
                return;
            }
        }
        const position = subNode.position;
        if (!position.equalsWithEpsilon(this._position)) {
            subNode.position.copyFrom(this._position);
            subNode._updatePosition();
        }
    }
    _updateRotation(subNode = null) {
        if (!subNode) {
            subNode = (0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this._subGraph);
            if (!subNode) {
                return;
            }
        }
        if (!subNode.rotationQuaternion.equalsWithEpsilon(this._rotationQuaternion)) {
            subNode.rotationQuaternion.copyFrom(this._rotationQuaternion);
            subNode._updateRotation();
        }
        else if (!subNode.rotation.equalsWithEpsilon(this._rotation)) {
            subNode.rotation.copyFrom(this._rotation);
            subNode._updateRotation();
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

/***/ "../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js":
/*!***********************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StereoAudio: () => (/* binding */ _StereoAudio)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractStereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js");
/* harmony import */ var _subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subNodes/stereoAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _StereoAudio extends _abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_0__.AbstractStereoAudio {
    /** @internal */
    constructor(subGraph) {
        super();
        this._pan = _abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_0__._StereoAudioDefaults.pan;
        this._subGraph = subGraph;
    }
    /** @internal */
    get pan() {
        return this._pan;
    }
    set pan(value) {
        this._pan = value;
        (0,_subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._SetStereoAudioProperty)(this._subGraph, "pan", value);
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

/***/ "../core/dist/AudioV2/webAudio/subNodes/spatialWebAudioSubNode.js":
/*!************************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subNodes/spatialWebAudioSubNode.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CreateSpatialAudioSubNodeAsync: () => (/* binding */ _CreateSpatialAudioSubNodeAsync),
/* harmony export */   _SpatialWebAudioSubNode: () => (/* binding */ _SpatialWebAudioSubNode)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _abstractAudio_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subNodes/spatialAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/webAudioParameterComponent */ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





const TmpMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Zero();
const TmpQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
const TmpVector = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
function D2r(degrees) {
    return (degrees * Math.PI) / 180;
}
function R2d(radians) {
    return (radians * 180) / Math.PI;
}
/** @internal */
// eslint-disable-next-line @typescript-eslint/require-await
async function _CreateSpatialAudioSubNodeAsync(engine) {
    return new _SpatialWebAudioSubNode(engine);
}
/** @internal */
class _SpatialWebAudioSubNode extends _abstractAudio_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioSubNode {
    /** @internal */
    constructor(engine) {
        super(engine);
        this._lastPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastRotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastRotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        /** @internal */
        this.position = _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_2__._SpatialAudioDefaults.position.clone();
        /** @internal */
        this.rotation = _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_2__._SpatialAudioDefaults.rotation.clone();
        /** @internal */
        this.rotationQuaternion = _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_2__._SpatialAudioDefaults.rotationQuaternion.clone();
        this.node = new PannerNode(engine._audioContext);
        this._orientationX = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, this.node.orientationX);
        this._orientationY = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, this.node.orientationY);
        this._orientationZ = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, this.node.orientationZ);
        this._positionX = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, this.node.positionX);
        this._positionY = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, this.node.positionY);
        this._positionZ = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_3__._WebAudioParameterComponent(engine, this.node.positionZ);
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._orientationX.dispose();
        this._orientationY.dispose();
        this._orientationZ.dispose();
        this._positionX.dispose();
        this._positionY.dispose();
        this._positionZ.dispose();
        this.node.disconnect();
    }
    /** @internal */
    get coneInnerAngle() {
        return D2r(this.node.coneInnerAngle);
    }
    set coneInnerAngle(value) {
        this.node.coneInnerAngle = R2d(value);
    }
    /** @internal */
    get coneOuterAngle() {
        return D2r(this.node.coneOuterAngle);
    }
    set coneOuterAngle(value) {
        this.node.coneOuterAngle = R2d(value);
    }
    /** @internal */
    get coneOuterVolume() {
        return this.node.coneOuterGain;
    }
    set coneOuterVolume(value) {
        this.node.coneOuterGain = value;
    }
    /** @internal */
    get distanceModel() {
        return this.node.distanceModel;
    }
    set distanceModel(value) {
        this.node.distanceModel = value;
        // Wiggle the max distance to make the change take effect.
        const maxDistance = this.node.maxDistance;
        this.node.maxDistance = maxDistance + 0.001;
        this.node.maxDistance = maxDistance;
    }
    /** @internal */
    get minDistance() {
        return this.node.refDistance;
    }
    set minDistance(value) {
        this.node.refDistance = value;
    }
    /** @internal */
    get maxDistance() {
        return this.node.maxDistance;
    }
    set maxDistance(value) {
        this.node.maxDistance = value;
    }
    /** @internal */
    get panningModel() {
        return this.node.panningModel;
    }
    set panningModel(value) {
        this.node.panningModel = value;
    }
    /** @internal */
    get rolloffFactor() {
        return this.node.rolloffFactor;
    }
    set rolloffFactor(value) {
        this.node.rolloffFactor = value;
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
    _updatePosition() {
        if (this._lastPosition.equalsWithEpsilon(this.position)) {
            return;
        }
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._positionX.isRamping || this._positionY.isRamping || this._positionZ.isRamping)) {
            return;
        }
        this._positionX.targetValue = this.position.x;
        this._positionY.targetValue = this.position.y;
        this._positionZ.targetValue = this.position.z;
        this._lastPosition.copyFrom(this.position);
    }
    /** @internal */
    _updateRotation() {
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._orientationX.isRamping || this._orientationY.isRamping || this._orientationZ.isRamping)) {
            return;
        }
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
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.RightReadOnly, TmpMatrix, TmpVector);
        this._orientationX.targetValue = TmpVector.x;
        this._orientationY.targetValue = TmpVector.y;
        this._orientationZ.targetValue = TmpVector.z;
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
        return "_SpatialWebAudioSubNode";
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

/***/ "../core/dist/AudioV2/webAudio/subNodes/stereoWebAudioSubNode.js":
/*!***********************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subNodes/stereoWebAudioSubNode.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CreateStereoAudioSubNodeAsync: () => (/* binding */ _CreateStereoAudioSubNodeAsync),
/* harmony export */   _StereoWebAudioSubNode: () => (/* binding */ _StereoWebAudioSubNode)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subNodes/stereoAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js");
/* harmony import */ var _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/webAudioParameterComponent */ "../core/dist/AudioV2/webAudio/components/webAudioParameterComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
// eslint-disable-next-line @typescript-eslint/require-await
async function _CreateStereoAudioSubNodeAsync(engine) {
    return new _StereoWebAudioSubNode(engine);
}
/** @internal */
class _StereoWebAudioSubNode extends _abstractAudio_subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._StereoAudioSubNode {
    /** @internal */
    constructor(engine) {
        super(engine);
        this.node = new StereoPannerNode(engine._audioContext);
        this._pan = new _components_webAudioParameterComponent__WEBPACK_IMPORTED_MODULE_1__._WebAudioParameterComponent(engine, this.node.pan);
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._pan.dispose();
    }
    /** @internal */
    get pan() {
        return this._pan.targetValue;
    }
    /** @internal */
    set pan(value) {
        this._pan.targetValue = value;
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
    getClassName() {
        return "_StereoWebAudioSubNode";
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

/***/ "../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioBusAndSoundSubGraph: () => (/* binding */ _WebAudioBusAndSoundSubGraph)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subNodes/spatialAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js");
/* harmony import */ var _abstractAudio_subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../abstractAudio/subNodes/stereoAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js");
/* harmony import */ var _abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../abstractAudio/subNodes/volumeAudioSubNode */ "../core/dist/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../abstractAudio/subProperties/abstractStereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js");
/* harmony import */ var _spatialWebAudioSubNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spatialWebAudioSubNode */ "../core/dist/AudioV2/webAudio/subNodes/spatialWebAudioSubNode.js");
/* harmony import */ var _stereoWebAudioSubNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stereoWebAudioSubNode */ "../core/dist/AudioV2/webAudio/subNodes/stereoWebAudioSubNode.js");
/* harmony import */ var _webAudioBaseSubGraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webAudioBaseSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









/** @internal */
class _WebAudioBusAndSoundSubGraph extends _webAudioBaseSubGraph__WEBPACK_IMPORTED_MODULE_7__._WebAudioBaseSubGraph {
    constructor() {
        super(...arguments);
        this._rootNode = null;
        this._inputNode = null;
    }
    /** @internal */
    async initAsync(options) {
        await super.initAsync(options);
        let hasSpatialOptions = false;
        let hasStereoOptions = false;
        if ((hasSpatialOptions = (0,_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_3__._HasSpatialAudioOptions)(options))) {
            await this.createAndAddSubNodeAsync("Spatial" /* AudioSubNode.SPATIAL */);
        }
        if ((hasStereoOptions = (0,_abstractAudio_subProperties_abstractStereoAudio__WEBPACK_IMPORTED_MODULE_4__._HasStereoAudioOptions)(options))) {
            await this.createAndAddSubNodeAsync("Stereo" /* AudioSubNode.STEREO */);
        }
        await this._createSubNodePromisesResolvedAsync();
        if (hasSpatialOptions) {
            (0,_abstractAudio_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this)?.setOptions(options);
        }
        if (hasStereoOptions) {
            (0,_abstractAudio_subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._GetStereoAudioSubNode)(this)?.setOptions(options);
        }
    }
    /** @internal */
    get _inNode() {
        return this._inputNode;
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    _createSubNode(name) {
        try {
            const node = super._createSubNode(name);
            return node;
        }
        catch (e) { }
        switch (name) {
            case "Spatial" /* AudioSubNode.SPATIAL */:
                return (0,_spatialWebAudioSubNode__WEBPACK_IMPORTED_MODULE_5__._CreateSpatialAudioSubNodeAsync)(this._owner.engine);
            case "Stereo" /* AudioSubNode.STEREO */:
                return (0,_stereoWebAudioSubNode__WEBPACK_IMPORTED_MODULE_6__._CreateStereoAudioSubNodeAsync)(this._owner.engine);
            default:
                throw new Error(`Unknown subnode name: ${name}`);
        }
    }
    _onSubNodesChanged() {
        super._onSubNodesChanged();
        const spatialNode = (0,_abstractAudio_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this);
        const stereoNode = (0,_abstractAudio_subNodes_stereoAudioSubNode__WEBPACK_IMPORTED_MODULE_1__._GetStereoAudioSubNode)(this);
        const volumeNode = (0,_abstractAudio_subNodes_volumeAudioSubNode__WEBPACK_IMPORTED_MODULE_2__._GetVolumeAudioSubNode)(this);
        if (spatialNode && spatialNode.getClassName() !== "_SpatialWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        if (stereoNode && stereoNode.getClassName() !== "_StereoWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        if (volumeNode && volumeNode.getClassName() !== "_VolumeWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        if (spatialNode) {
            spatialNode.disconnectAll();
            if (volumeNode) {
                spatialNode.connect(volumeNode);
            }
        }
        if (stereoNode) {
            stereoNode.disconnectAll();
            if (volumeNode) {
                stereoNode.connect(volumeNode);
            }
        }
        if (spatialNode && stereoNode) {
            this._rootNode = new GainNode(this._owner.engine._audioContext);
            this._rootNode.connect(spatialNode._outNode);
            this._rootNode.connect(stereoNode._outNode);
        }
        else {
            this._rootNode?.disconnect();
            this._rootNode = null;
        }
        let inSubNode = null;
        let inNode = null;
        if (this._rootNode) {
            inNode = this._rootNode;
        }
        else {
            if (spatialNode) {
                inSubNode = spatialNode;
            }
            else if (stereoNode) {
                inSubNode = stereoNode;
            }
            else if (volumeNode) {
                inSubNode = volumeNode;
            }
            inNode = inSubNode?.node ?? null;
        }
        if (this._inputNode !== inNode) {
            // Disconnect the wrapped upstream WebAudio nodes from the old wrapped WebAudio node.
            // The wrapper nodes are unaware of this change.
            if (this._inputNode && this._upstreamNodes) {
                const it = this._upstreamNodes.values();
                for (let next = it.next(); !next.done; next = it.next()) {
                    next.value._outNode?.disconnect(this._inputNode);
                }
            }
            this._inputNode = inNode;
            // Connect the wrapped upstream WebAudio nodes to the new wrapped WebAudio node.
            // The wrapper nodes are unaware of this change.
            if (inNode && this._upstreamNodes) {
                const it = this._upstreamNodes.values();
                for (let next = it.next(); !next.done; next = it.next()) {
                    next.value._outNode?.connect(inNode);
                }
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

/***/ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js":
/*!**********************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _SpatialWebAudio: () => (/* binding */ _SpatialWebAudio)
/* harmony export */ });
/* harmony import */ var _abstractAudio_subProperties_spatialAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractAudio/subProperties/spatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/spatialAudio.js");
/* harmony import */ var _components_spatialWebAudioUpdaterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/spatialWebAudioUpdaterComponent */ "../core/dist/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _SpatialWebAudio extends _abstractAudio_subProperties_spatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudio {
    /** @internal */
    constructor(subGraph, autoUpdate, minUpdateTime) {
        super(subGraph);
        this._updaterComponent = new _components_spatialWebAudioUpdaterComponent__WEBPACK_IMPORTED_MODULE_1__._SpatialWebAudioUpdaterComponent(this, autoUpdate, minUpdateTime);
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
    dispose() {
        this._updaterComponent.dispose();
        this._updaterComponent = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19zdWJQcm9wZXJ0aWVzX3N0ZXJlb0F1ZGlvX2pzLWNvcmVfZGlzdF9BdWRpb1YyX3dlYkF1ZGlvX3N1Yk5vLTUyNWNiMS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFIQTtBQUlBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE2RkE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFnSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFQQTtBQUNBO0FBQ0E7QUFzQkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzT0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQXpCQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFBBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUFBOztBQUNBO0FBR0E7QUFrSUE7QUFoSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvc3BhdGlhbEF1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9zdGVyZW9BdWRpb1N1Yk5vZGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpby50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW8udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW8udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zdGVyZW9BdWRpby50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vc3ViTm9kZXMvc3BhdGlhbFdlYkF1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vc3ViTm9kZXMvc3RlcmVvV2ViQXVkaW9TdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby9zdWJOb2Rlcy93ZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1YlByb3BlcnRpZXMvc3BhdGlhbFdlYkF1ZGlvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCIuLi8uLi8uLi9NYXRocy9tYXRoLnZlY3RvclwiO1xuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vc3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGVcIjtcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmVWMiB9IGZyb20gXCIuLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zcGF0aWFsQXVkaW9BdHRhY2hlckNvbXBvbmVudFwiO1xuaW1wb3J0IHR5cGUgeyBJU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMgfSBmcm9tIFwiLi4vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb1N1YkdyYXBoXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4vYXVkaW9TdWJOb2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfU3BhdGlhbEF1ZGlvU3ViTm9kZSBleHRlbmRzIF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB7XG4gICAgcHJpdmF0ZSBfYXR0YWNoZXJDb21wb25lbnQ6IE51bGxhYmxlPF9TcGF0aWFsQXVkaW9BdHRhY2hlckNvbXBvbmVudD4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihBdWRpb1N1Yk5vZGUuU1BBVElBTCwgZW5naW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgY29uZUlubmVyQW5nbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3QgY29uZU91dGVyQW5nbGU6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3QgY29uZU91dGVyVm9sdW1lOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IGRpc3RhbmNlTW9kZWw6IERpc3RhbmNlTW9kZWxUeXBlO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBtYXhEaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBtaW5EaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwYW5uaW5nTW9kZWw6IFBhbm5pbmdNb2RlbFR5cGU7XG4gICAgcHVibGljIGFic3RyYWN0IHBvc2l0aW9uOiBWZWN0b3IzO1xuICAgIHB1YmxpYyBhYnN0cmFjdCByb2xsb2ZmRmFjdG9yOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IHJvdGF0aW9uOiBWZWN0b3IzO1xuICAgIHB1YmxpYyBhYnN0cmFjdCByb3RhdGlvblF1YXRlcm5pb246IFF1YXRlcm5pb247XG4gICAgcHVibGljIGFic3RyYWN0IF9pbk5vZGU6IEF1ZGlvTm9kZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2hlckNvbXBvbmVudCAhPT0gbnVsbCAmJiB0aGlzLl9hdHRhY2hlckNvbXBvbmVudC5pc0F0dGFjaGVkO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXR0YWNoKHNjZW5lTm9kZTogTnVsbGFibGU8Tm9kZT4sIHVzZUJvdW5kaW5nQm94OiBib29sZWFuLCBhdHRhY2htZW50VHlwZTogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2F0dGFjaGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudCA9IG5ldyBfU3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudC5hdHRhY2goc2NlbmVOb2RlLCB1c2VCb3VuZGluZ0JveCwgYXR0YWNobWVudFR5cGUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGV0YWNoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudD8uZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQ/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElTcGF0aWFsQXVkaW9PcHRpb25zPik6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbmVJbm5lckFuZ2xlID0gb3B0aW9ucy5zcGF0aWFsQ29uZUlubmVyQW5nbGUgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgICB0aGlzLmNvbmVPdXRlckFuZ2xlID0gb3B0aW9ucy5zcGF0aWFsQ29uZU91dGVyQW5nbGUgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgICB0aGlzLmNvbmVPdXRlclZvbHVtZSA9IG9wdGlvbnMuc3BhdGlhbENvbmVPdXRlclZvbHVtZSA/PyBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZU91dGVyVm9sdW1lO1xuICAgICAgICB0aGlzLmRpc3RhbmNlTW9kZWwgPSBvcHRpb25zLnNwYXRpYWxEaXN0YW5jZU1vZGVsID8/IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5kaXN0YW5jZU1vZGVsO1xuICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gb3B0aW9ucy5zcGF0aWFsTWF4RGlzdGFuY2UgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm1heERpc3RhbmNlO1xuICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gb3B0aW9ucy5zcGF0aWFsTWluRGlzdGFuY2UgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm1pbkRpc3RhbmNlO1xuICAgICAgICB0aGlzLnBhbm5pbmdNb2RlbCA9IG9wdGlvbnMuc3BhdGlhbFBhbm5pbmdNb2RlbCA/PyBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucGFubmluZ01vZGVsO1xuICAgICAgICB0aGlzLnJvbGxvZmZGYWN0b3IgPSBvcHRpb25zLnNwYXRpYWxSb2xsb2ZmRmFjdG9yID8/IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5yb2xsb2ZmRmFjdG9yO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNwYXRpYWxQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG9wdGlvbnMuc3BhdGlhbFBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zcGF0aWFsUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IG9wdGlvbnMuc3BhdGlhbFJvdGF0aW9uUXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc3BhdGlhbFJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gb3B0aW9ucy5zcGF0aWFsUm90YXRpb24uY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnJvdGF0aW9uUXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQ/LnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgX3VwZGF0ZVBvc2l0aW9uKCk6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IF91cGRhdGVSb3RhdGlvbigpOiB2b2lkO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUoc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpOiBOdWxsYWJsZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBzdWJHcmFwaC5nZXRTdWJOb2RlPF9TcGF0aWFsQXVkaW9TdWJOb2RlPihBdWRpb1N1Yk5vZGUuU1BBVElBTCk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHk8SyBleHRlbmRzIGtleW9mIHR5cGVvZiBfU3BhdGlhbEF1ZGlvRGVmYXVsdHM+KHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoLCBwcm9wZXJ0eTogSywgdmFsdWU6IF9TcGF0aWFsQXVkaW9TdWJOb2RlW0tdKTogdm9pZCB7XG4gICAgc3ViR3JhcGguY2FsbE9uU3ViTm9kZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4oQXVkaW9TdWJOb2RlLlNQQVRJQUwsIChub2RlKSA9PiB7XG4gICAgICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9hYnN0cmFjdEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IElTdGVyZW9BdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9TdGVyZW9BdWRpb0RlZmF1bHRzIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFN0ZXJlb0F1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9TdGVyZW9BdWRpb1N1Yk5vZGUgZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIoQXVkaW9TdWJOb2RlLlNURVJFTywgZW5naW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcGFuOiBudW1iZXI7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogUGFydGlhbDxJU3RlcmVvQXVkaW9PcHRpb25zPik6IHZvaWQge1xuICAgICAgICB0aGlzLnBhbiA9IG9wdGlvbnMuc3RlcmVvUGFuID8/IF9TdGVyZW9BdWRpb0RlZmF1bHRzLnBhbjtcbiAgICB9XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0U3RlcmVvQXVkaW9TdWJOb2RlKHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoKTogTnVsbGFibGU8X1N0ZXJlb0F1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBzdWJHcmFwaC5nZXRTdWJOb2RlPF9TdGVyZW9BdWRpb1N1Yk5vZGU+KEF1ZGlvU3ViTm9kZS5TVEVSRU8pO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX1NldFN0ZXJlb0F1ZGlvUHJvcGVydHk8SyBleHRlbmRzIGtleW9mIHR5cGVvZiBfU3RlcmVvQXVkaW9EZWZhdWx0cz4oc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgsIHByb3BlcnR5OiBLLCB2YWx1ZTogX1N0ZXJlb0F1ZGlvU3ViTm9kZVtLXSk6IHZvaWQge1xuICAgIHN1YkdyYXBoLmNhbGxPblN1Yk5vZGU8X1N0ZXJlb0F1ZGlvU3ViTm9kZT4oQXVkaW9TdWJOb2RlLlNURVJFTywgKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiLi4vLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlXCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uL3NwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMgPSB7XG4gICAgY29uZUlubmVyQW5nbGU6IDYuMjgzMTg1MzA3MTggYXMgbnVtYmVyLFxuICAgIGNvbmVPdXRlckFuZ2xlOiA2LjI4MzE4NTMwNzE4IGFzIG51bWJlcixcbiAgICBjb25lT3V0ZXJWb2x1bWU6IDAgYXMgbnVtYmVyLFxuICAgIGRpc3RhbmNlTW9kZWw6IFwibGluZWFyXCIgYXMgRGlzdGFuY2VNb2RlbFR5cGUsXG4gICAgbWF4RGlzdGFuY2U6IDEwMDAwIGFzIG51bWJlcixcbiAgICBtaW5EaXN0YW5jZTogMSBhcyBudW1iZXIsXG4gICAgcGFubmluZ01vZGVsOiBcImVxdWFscG93ZXJcIiBhcyBQYW5uaW5nTW9kZWxUeXBlLFxuICAgIHBvc2l0aW9uOiBWZWN0b3IzLlplcm8oKSxcbiAgICByb2xsb2ZmRmFjdG9yOiAxIGFzIG51bWJlcixcbiAgICByb3RhdGlvbjogVmVjdG9yMy5aZXJvKCksXG4gICAgcm90YXRpb25RdWF0ZXJuaW9uOiBuZXcgUXVhdGVybmlvbigpLFxufSBhcyBjb25zdDtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBzcGF0aWFsIGF1ZGlvLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTcGF0aWFsQXVkaW9PcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZSBzcGF0aWFsIHByb3BlcnRpZXMgb2YgdGhlIGF1ZGlvIG5vZGUuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICAgKi9cbiAgICBzcGF0aWFsQXV0b1VwZGF0ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCBjb25lIGlubmVyIGFuZ2xlLCBpbiByYWRpYW5zLiBEZWZhdWx0cyB0byAyz4AuXG4gICAgICogLSBXaGVuIHRoZSBsaXN0ZW5lciBpcyBpbnNpZGUgdGhlIGNvbmUgaW5uZXIgYW5nbGUsIHRoZSB2b2x1bWUgaXMgYXQgaXRzIG1heGltdW0uXG4gICAgICovXG4gICAgc3BhdGlhbENvbmVJbm5lckFuZ2xlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgY29uZSBvdXRlciBhbmdsZSwgaW4gcmFkaWFucy4gRGVmYXVsdHMgdG8gMs+ALlxuICAgICAqIC0gV2hlbiB0aGUgbGlzdGVuZXIgaXMgYmV0d2VlbiB0aGUgdGhlIGNvbmUgaW5uZXIgYW5kIG91dGVyIGFuZ2xlcywgdGhlIHZvbHVtZSBmYWRlcyB0byBpdHMgbWluaW11bSBhcyB0aGUgbGlzdGVuZXIgYXBwcm9hY2hlcyB0aGUgb3V0ZXIgYW5nbGUuXG4gICAgICogLSBXaGVuIHRoZSBsaXN0ZW5lciBpcyBvdXRzaWRlIHRoZSBjb25lIG91dGVyIGFuZ2xlLCB0aGUgdm9sdW1lIGlzIGF0IGl0cyBtaW5pbXVtLlxuICAgICAqL1xuICAgIHNwYXRpYWxDb25lT3V0ZXJBbmdsZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2Ygdm9sdW1lIHJlZHVjdGlvbiBvdXRzaWRlIHRoZSB7QGxpbmsgc3BhdGlhbENvbmVPdXRlckFuZ2xlfS4gRGVmYXVsdHMgdG8gMC5cbiAgICAgKi9cbiAgICBzcGF0aWFsQ29uZU91dGVyVm9sdW1lOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGFsZ29yaXRobSB0byB1c2UgdG8gcmVkdWNlIHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIHNvdXJjZSBhcyBpdCBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyLiBEZWZhdWx0cyB0byBcImludmVyc2VcIi5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICogLSBgXCJsaW5lYXJcImA6IFRoZSB2b2x1bWUgaXMgcmVkdWNlZCBsaW5lYXJseSBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAgICogLSBgXCJpbnZlcnNlXCJgOiBUaGUgdm9sdW1lIGlzIHJlZHVjZWQgaW52ZXJzZWx5IGFzIHRoZSBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICAgKiAtIGBcImV4cG9uZW50aWFsXCJgOiBUaGUgdm9sdW1lIGlzIHJlZHVjZWQgZXhwb25lbnRpYWxseSBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBzcGF0aWFsTWF4RGlzdGFuY2V9XG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbE1pbkRpc3RhbmNlfVxuICAgICAqIEBzZWUge0BsaW5rIHNwYXRpYWxSb2xsb2ZmRmFjdG9yfVxuICAgICAqL1xuICAgIHNwYXRpYWxEaXN0YW5jZU1vZGVsOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCI7XG4gICAgLyoqXG4gICAgICogRW5hYmxlIHNwYXRpYWwgYXVkaW8uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogV2hlbiBzZXQgdG8gYHRydWVgLCB0aGUgYXVkaW8gbm9kZSdzIHNwYXRpYWwgcHJvcGVydGllcyB3aWxsIGJlIGluaXRpYWxpemVkIG9uIGNyZWF0aW9uIGFuZCB0aGVyZSB3aWxsIGJlIG5vXG4gICAgICogZGVsYXkgd2hlbiBzZXR0aW5nIHRoZSBmaXJzdCBzcGF0aWFsIHZhbHVlLlxuICAgICAqXG4gICAgICogV2hlbiBub3Qgc3BlY2lmaWVkLCBvciBzZXQgdG8gYGZhbHNlYCwgdGhlIGF1ZGlvIG5vZGUncyBzcGF0aWFsIHByb3BlcnRpZXMgd2lsbCBub3QgYmUgaW5pdGlhbGl6ZWQgb24gY3JlYXRpb25cbiAgICAgKiBhbmQgdGhlcmUgd2lsbCBiZSBhIHNtYWxsIGRlbGF5IHdoZW4gc2V0dGluZyB0aGUgZmlyc3Qgc3BhdGlhbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIC0gVGhpcyBvcHRpb24gaXMgaWdub3JlZCBpZiBhbnkgb3RoZXIgc3BhdGlhbCBvcHRpb25zIGFyZSBzZXQuXG4gICAgICovXG4gICAgc3BhdGlhbEVuYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYXVkaW8gc291cmNlIGFuZCB0aGUgbGlzdGVuZXIsIGFmdGVyIHdoaWNoIHRoZSB2b2x1bWUgaXMgbm90IHJlZHVjZWQgYW55IGZ1cnRoZXIuIERlZmF1bHRzIHRvIDEwMDAwLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIG9ubHkgd2hlbiB0aGUge0BsaW5rIHNwYXRpYWxEaXN0YW5jZU1vZGVsfSBpcyBzZXQgdG8gYFwibGluZWFyXCJgLlxuICAgICAqIEBzZWUge0BsaW5rIHNwYXRpYWxEaXN0YW5jZU1vZGVsfVxuICAgICAqL1xuICAgIHNwYXRpYWxNYXhEaXN0YW5jZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHVwZGF0ZSB0aW1lIGluIHNlY29uZHMgb2YgdGhlIHNwYXRpYWxpemF0aW9uIGlmIGl0IGlzIGF0dGFjaGVkIHRvIGEgbWVzaCBvciB0cmFuc2Zvcm0gbm9kZS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gVGhlIHNwYXRpYWxpemF0aW9uJ3MgcG9zaXRpb24gYW5kIHJvdGF0aW9uIHdpbGwgbm90IHVwZGF0ZSBmYXN0ZXIgdGhhbiB0aGlzIHRpbWUsIGJ1dCB0aGV5IG1heSB1cGRhdGUgc2xvd2VyIGRlcGVuZGluZyBvbiB0aGUgZnJhbWUgcmF0ZS5cbiAgICAgKi9cbiAgICBzcGF0aWFsTWluVXBkYXRlVGltZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICogLSBgXCJlcXVhbHBvd2VyXCJgOiBSZXByZXNlbnRzIHRoZSBlcXVhbC1wb3dlciBwYW5uaW5nIGFsZ29yaXRobSwgZ2VuZXJhbGx5IHJlZ2FyZGVkIGFzIHNpbXBsZSBhbmQgZWZmaWNpZW50LlxuICAgICAqIC0gYFwiSFJURlwiYDogUmVuZGVycyBhIHN0ZXJlbyBvdXRwdXQgb2YgaGlnaGVyIHF1YWxpdHkgdGhhbiBgXCJlcXVhbHBvd2VyXCJgIOKAlCBpdCB1c2VzIGEgY29udm9sdXRpb24gd2l0aCBtZWFzdXJlZCBpbXB1bHNlIHJlc3BvbnNlcyBmcm9tIGh1bWFuIHN1YmplY3RzLlxuICAgICAqL1xuICAgIHNwYXRpYWxQYW5uaW5nTW9kZWw6IFwiZXF1YWxwb3dlclwiIHwgXCJIUlRGXCI7XG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgcG9zaXRpb24uIERlZmF1bHRzIHRvICgwLCAwLCAwKS5cbiAgICAgKi9cbiAgICBzcGF0aWFsUG9zaXRpb246IFZlY3RvcjM7XG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIGZvciByZWR1Y2luZyB2b2x1bWUgYXMgdGhlIGF1ZGlvIHNvdXJjZSBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyIOKAkyBpLmUuIHRoZSBkaXN0YW5jZSB0aGUgdm9sdW1lIHJlZHVjdGlvbiBzdGFydHMgYXQuIERlZmF1bHRzIHRvIDEuXG4gICAgICogLSBUaGlzIHZhbHVlIGlzIHVzZWQgYnkgYWxsIGRpc3RhbmNlIG1vZGVscy5cbiAgICAgKiBAc2VlIHtAbGluayBzcGF0aWFsRGlzdGFuY2VNb2RlbH1cbiAgICAgKi9cbiAgICBzcGF0aWFsTWluRGlzdGFuY2U6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBIb3cgcXVpY2tseSB0aGUgdm9sdW1lIGlzIHJlZHVjZWQgYXMgdGhlIHNvdXJjZSBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyLiBEZWZhdWx0cyB0byAxLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIGJ5IGFsbCBkaXN0YW5jZSBtb2RlbHMuXG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbERpc3RhbmNlTW9kZWx9XG4gICAgICovXG4gICAgc3BhdGlhbFJvbGxvZmZGYWN0b3I6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCByb3RhdGlvbiwgYXMgRXVsZXIgYW5nbGVzLiBEZWZhdWx0cyB0byAoMCwgMCwgMCkuXG4gICAgICovXG4gICAgc3BhdGlhbFJvdGF0aW9uOiBWZWN0b3IzO1xuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIHJvdGF0aW9uLCBhcyBhIHF1YXRlcm5pb24uIERlZmF1bHRzIHRvICgwLCAwLCAwLCAxKS5cbiAgICAgKi9cbiAgICBzcGF0aWFsUm90YXRpb25RdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uO1xufVxuXG4vKipcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBzcGF0aWFsIGF1ZGlvIG9wdGlvbnMgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgc3BhdGlhbCBhdWRpbyBvcHRpb25zIGFyZSBkZWZpbmVkLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8SVNwYXRpYWxBdWRpb09wdGlvbnM+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsRW5hYmxlZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxBdXRvVXBkYXRlICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsQ29uZUlubmVyQW5nbGUgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxDb25lT3V0ZXJBbmdsZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbENvbmVPdXRlclZvbHVtZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbERpc3RhbmNlTW9kZWwgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxNYXhEaXN0YW5jZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbE1pbkRpc3RhbmNlICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsTWluVXBkYXRlVGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbFBhbm5pbmdNb2RlbCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbFBvc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsUm9sbG9mZkZhY3RvciAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbFJvdGF0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsUm90YXRpb25RdWF0ZXJuaW9uICE9PSB1bmRlZmluZWRcbiAgICApO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyB0aGUgYHNwYXRpYWxgIGF1ZGlvIHByb3BlcnR5IG9uIGEgc291bmQgb3IgYXVkaW8gYnVzLlxuICpcbiAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIubGlzdGVuZXJ9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgY29uZSBpbm5lciBhbmdsZSwgaW4gcmFkaWFucy4gRGVmYXVsdHMgdG8gMs+ALlxuICAgICAqIC0gV2hlbiB0aGUgbGlzdGVuZXIgaXMgaW5zaWRlIHRoZSBjb25lIGlubmVyIGFuZ2xlLCB0aGUgdm9sdW1lIGlzIGF0IGl0cyBtYXhpbXVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lSW5uZXJBbmdsZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgY29uZSBvdXRlciBhbmdsZSwgaW4gcmFkaWFucy4gRGVmYXVsdHMgdG8gMs+ALlxuICAgICAqIC0gV2hlbiB0aGUgbGlzdGVuZXIgaXMgYmV0d2VlbiB0aGUgdGhlIGNvbmUgaW5uZXIgYW5kIG91dGVyIGFuZ2xlcywgdGhlIHZvbHVtZSBmYWRlcyB0byBpdHMgbWluaW11bSBhcyB0aGUgbGlzdGVuZXIgYXBwcm9hY2hlcyB0aGUgb3V0ZXIgYW5nbGUuXG4gICAgICogLSBXaGVuIHRoZSBsaXN0ZW5lciBpcyBvdXRzaWRlIHRoZSBjb25lIG91dGVyIGFuZ2xlLCB0aGUgdm9sdW1lIGlzIGF0IGl0cyBtaW5pbXVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lT3V0ZXJBbmdsZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiB2b2x1bWUgcmVkdWN0aW9uIG91dHNpZGUgdGhlIHtAbGluayBjb25lT3V0ZXJBbmdsZX0uIERlZmF1bHRzIHRvIDAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNvbmVPdXRlclZvbHVtZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFsZ29yaXRobSB0byB1c2UgdG8gcmVkdWNlIHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIHNvdXJjZSBhcyBpdCBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyLiBEZWZhdWx0cyB0byBcImludmVyc2VcIi5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICogLSBgXCJsaW5lYXJcImA6IFRoZSB2b2x1bWUgaXMgcmVkdWNlZCBsaW5lYXJseSBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAgICogLSBgXCJpbnZlcnNlXCJgOiBUaGUgdm9sdW1lIGlzIHJlZHVjZWQgaW52ZXJzZWx5IGFzIHRoZSBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICAgKiAtIGBcImV4cG9uZW50aWFsXCJgOiBUaGUgdm9sdW1lIGlzIHJlZHVjZWQgZXhwb25lbnRpYWxseSBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBzcGF0aWFsTWF4RGlzdGFuY2V9XG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbE1pbkRpc3RhbmNlfVxuICAgICAqIEBzZWUge0BsaW5rIHNwYXRpYWxSb2xsb2ZmRmFjdG9yfVxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBkaXN0YW5jZU1vZGVsOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCI7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBhdWRpbyBzb3VyY2UgaXMgYXR0YWNoZWQgdG8gYSBtZXNoIG9yIHRyYW5zZm9ybSBub2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpc0F0dGFjaGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYXVkaW8gc291cmNlIGFuZCB0aGUgbGlzdGVuZXIsIGFmdGVyIHdoaWNoIHRoZSB2b2x1bWUgaXMgbm90IHJlZHVjZWQgYW55IGZ1cnRoZXIuIERlZmF1bHRzIHRvIDEwMDAwLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIG9ubHkgd2hlbiB0aGUge0BsaW5rIGRpc3RhbmNlTW9kZWx9IGlzIHNldCB0byBgXCJsaW5lYXJcImAuXG4gICAgICogQHNlZSB7QGxpbmsgZGlzdGFuY2VNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWF4RGlzdGFuY2U6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSBmb3IgcmVkdWNpbmcgdm9sdW1lIGFzIHRoZSBhdWRpbyBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lciDigJMgaS5lLiB0aGUgZGlzdGFuY2UgdGhlIHZvbHVtZSByZWR1Y3Rpb24gc3RhcnRzIGF0LiBEZWZhdWx0cyB0byAxLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIGJ5IGFsbCBkaXN0YW5jZSBtb2RlbHMuXG4gICAgICogQHNlZSB7QGxpbmsgZGlzdGFuY2VNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWluRGlzdGFuY2U6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHVwZGF0ZSB0aW1lIGluIHNlY29uZHMgb2YgdGhlIHNwYXRpYWxpemF0aW9uIGlmIGl0IGlzIGF0dGFjaGVkIHRvIGEgbWVzaCBvciB0cmFuc2Zvcm0gbm9kZS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gVGhlIHNwYXRpYWxpemF0aW9uJ3MgcG9zaXRpb24gYW5kIHJvdGF0aW9uIHdpbGwgbm90IHVwZGF0ZSBmYXN0ZXIgdGhhbiB0aGlzIHRpbWUsIGJ1dCB0aGV5IG1heSB1cGRhdGUgc2xvd2VyIGRlcGVuZGluZyBvbiB0aGUgZnJhbWUgcmF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWluVXBkYXRlVGltZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgcGFubmluZyBtb2RlbC4gRGVmYXVsdHMgdG8gXCJlcXVhbHBvd2VyXCIuXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOlxuICAgICAqIC0gYFwiZXF1YWxwb3dlclwiYDogUmVwcmVzZW50cyB0aGUgZXF1YWwtcG93ZXIgcGFubmluZyBhbGdvcml0aG0sIGdlbmVyYWxseSByZWdhcmRlZCBhcyBzaW1wbGUgYW5kIGVmZmljaWVudC5cbiAgICAgKiAtIGBcIkhSVEZcImA6UmVuZGVycyBhIHN0ZXJlbyBvdXRwdXQgb2YgaGlnaGVyIHF1YWxpdHkgdGhhbiBgXCJlcXVhbHBvd2VyXCJgIOKAlCBpdCB1c2VzIGEgY29udm9sdXRpb24gd2l0aCBtZWFzdXJlZCBpbXB1bHNlIHJlc3BvbnNlcyBmcm9tIGh1bWFuIHN1YmplY3RzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwYW5uaW5nTW9kZWw6IFwiZXF1YWxwb3dlclwiIHwgXCJIUlRGXCI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCBwb3NpdGlvbi4gRGVmYXVsdHMgdG8gKDAsIDAsIDApLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwb3NpdGlvbjogVmVjdG9yMztcblxuICAgIC8qKlxuICAgICAqIEhvdyBxdWlja2x5IHRoZSB2b2x1bWUgaXMgcmVkdWNlZCBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuIERlZmF1bHRzIHRvIDEuXG4gICAgICogLSBUaGlzIHZhbHVlIGlzIHVzZWQgYnkgYWxsIGRpc3RhbmNlIG1vZGVscy5cbiAgICAgKiBAc2VlIHtAbGluayBkaXN0YW5jZU1vZGVsfVxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByb2xsb2ZmRmFjdG9yOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCByb3RhdGlvbi4gRGVmYXVsdHMgdG8gKDAsIDAsIDApLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCByb3RhdGlvbjogVmVjdG9yMztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIHJvdGF0aW9uIHF1YXRlcm5pb24uIERlZmF1bHRzIHRvICgwLCAwLCAwLCAxKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgcm90YXRpb25RdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uO1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdG8gYSBzY2VuZSBub2RlLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYXV0b21hdGljYWxseSBiZWZvcmUgYXR0YWNoaW5nIHRvIHRoZSBnaXZlbiBzY2VuZSBub2RlLlxuICAgICAqIElmIGBzY2VuZU5vZGVgIGlzIGBudWxsYCBpdCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGBkZXRhY2goKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NlbmVOb2RlIFRoZSBzY2VuZSBub2RlIHRvIGF0dGFjaCB0bywgb3IgYG51bGxgIHRvIGRldGFjaC5cbiAgICAgKiBAcGFyYW0gdXNlQm91bmRpbmdCb3ggV2hldGhlciB0byB1c2UgdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbm9kZSBmb3IgcG9zaXRpb25pbmcuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUeXBlIFdoZXRoZXIgdG8gYXR0YWNoIHRvIHRoZSBub2RlJ3MgcG9zaXRpb24gYW5kL29yIHJvdGF0aW9uLiBEZWZhdWx0cyB0byBgUG9zaXRpb25BbmRSb3RhdGlvbmAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGF0dGFjaChzY2VuZU5vZGU6IE51bGxhYmxlPE5vZGU+LCB1c2VCb3VuZGluZ0JveD86IGJvb2xlYW4sIGF0dGFjaG1lbnRUeXBlPzogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgZnJvbSB0aGUgc2NlbmUgbm9kZSBpZiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZGV0YWNoKCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBhbmQgcm90YXRpb24gb2YgdGhlIGFzc29jaWF0ZWQgYXVkaW8gZW5naW5lIG9iamVjdCBpbiB0aGUgYXVkaW8gcmVuZGVyaW5nIGdyYXBoLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IGFuZCBvbmx5IG5lZWRzIHRvIGJlIGNhbGxlZCBtYW51YWxseSBpZiBhdXRvbWF0aWMgdXBkYXRlcyBhcmUgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZSgpOiB2b2lkO1xufVxuIiwiZXhwb3J0IGNvbnN0IF9TdGVyZW9BdWRpb0RlZmF1bHRzID0ge1xuICAgIHBhbjogMCBhcyBudW1iZXIsXG59IGFzIGNvbnN0O1xuXG4vKiogKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogRW5hYmxlIHN0ZXJlby4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBXaGVuIHNldCB0byBgdHJ1ZWAsIHRoZSBhdWRpbyBub2RlJ3Mgc3RlcmVvIHByb3BlcnRpZXMgd2lsbCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvbiBhbmQgdGhlcmUgd2lsbCBiZSBub1xuICAgICAqIGRlbGF5IHdoZW4gc2V0dGluZyB0aGUgZmlyc3Qgc3RlcmVvIHZhbHVlLlxuICAgICAqXG4gICAgICogV2hlbiBub3Qgc3BlY2lmaWVkLCBvciBzZXQgdG8gYGZhbHNlYCwgdGhlIGF1ZGlvIG5vZGUncyBzdGVyZW8gcHJvcGVydGllcyB3aWxsIG5vdCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvblxuICAgICAqIGFuZCB0aGVyZSB3aWxsIGJlIGEgc21hbGwgZGVsYXkgd2hlbiBzZXR0aW5nIHRoZSBmaXJzdCBzdGVyZW8gdmFsdWUuXG4gICAgICpcbiAgICAgKiAtIFRoaXMgb3B0aW9uIGlzIGlnbm9yZWQgaWYgYW55IG90aGVyIHN0ZXJlbyBvcHRpb25zIGFyZSBzZXQuXG4gICAgICovXG4gICAgc3RlcmVvRW5hYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RlcmVvIHBhbiBmcm9tIC0xIChsZWZ0KSB0byAxIChyaWdodCkuIERlZmF1bHRzIHRvIDAuXG4gICAgICovXG4gICAgc3RlcmVvUGFuOiBudW1iZXI7XG59XG5cbi8qKlxuICogQHBhcmFtIG9wdGlvbnMgVGhlIHN0ZXJlbyBhdWRpbyBvcHRpb25zIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHN0ZXJlbyBhdWRpbyBvcHRpb25zIGFyZSBkZWZpbmVkLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9IYXNTdGVyZW9BdWRpb09wdGlvbnMob3B0aW9uczogUGFydGlhbDxJU3RlcmVvQXVkaW9PcHRpb25zPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvcHRpb25zLnN0ZXJlb0VuYWJsZWQgfHwgb3B0aW9ucy5zdGVyZW9QYW4gIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyByZXByZXNlbnRpbmcgdGhlIGBzdGVyZW9gIGF1ZGlvIHByb3BlcnR5IG9uIGEgc291bmQgb3IgYXVkaW8gYnVzLlxuICpcbiAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIubGlzdGVuZXJ9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFN0ZXJlb0F1ZGlvIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3RlcmVvIHBhbiBmcm9tIC0xIChsZWZ0KSB0byAxIChyaWdodCkuIERlZmF1bHRzIHRvIDAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHBhbjogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUgfSBmcm9tIFwiLi4vLi4vc3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGVcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuLi9zdWJOb2Rlcy9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcbmltcG9ydCB7IEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi9zdWJOb2Rlcy9hdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgX1NwYXRpYWxBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vc3ViTm9kZXMvc3BhdGlhbEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUsIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSB9IGZyb20gXCIuLi9zdWJOb2Rlcy9zcGF0aWFsQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMsIEFic3RyYWN0U3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4vYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9TcGF0aWFsQXVkaW8gZXh0ZW5kcyBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgcHJpdmF0ZSBfY29uZUlubmVyQW5nbGU6IG51bWJlciA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5jb25lSW5uZXJBbmdsZTtcbiAgICBwcml2YXRlIF9jb25lT3V0ZXJBbmdsZTogbnVtYmVyID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVPdXRlckFuZ2xlO1xuICAgIHByaXZhdGUgX2NvbmVPdXRlclZvbHVtZTogbnVtYmVyID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVPdXRlclZvbHVtZTtcbiAgICBwcml2YXRlIF9kaXN0YW5jZU1vZGVsOiBEaXN0YW5jZU1vZGVsVHlwZSA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5kaXN0YW5jZU1vZGVsO1xuICAgIHByaXZhdGUgX21heERpc3RhbmNlOiBudW1iZXIgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMubWF4RGlzdGFuY2U7XG4gICAgcHJpdmF0ZSBfbWluRGlzdGFuY2U6IG51bWJlciA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5taW5EaXN0YW5jZTtcbiAgICBwcml2YXRlIF9wYW5uaW5nTW9kZWw6IFBhbm5pbmdNb2RlbFR5cGUgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucGFubmluZ01vZGVsO1xuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBWZWN0b3IzO1xuICAgIHByaXZhdGUgX3JvbGxvZmZGYWN0b3I6IG51bWJlciA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5yb2xsb2ZmRmFjdG9yO1xuICAgIHByaXZhdGUgX3JvdGF0aW9uOiBWZWN0b3IzO1xuICAgIHByaXZhdGUgX3JvdGF0aW9uUXVhdGVybmlvbjogUXVhdGVybmlvbjtcbiAgICBwcml2YXRlIF9zdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzdWJOb2RlID0gX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUoc3ViR3JhcGgpO1xuICAgICAgICBpZiAoc3ViTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBzdWJOb2RlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHN1Yk5vZGUucm90YXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uUXVhdGVybmlvbiA9IHN1Yk5vZGUucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgdGhpcy5fcm90YXRpb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uUXVhdGVybmlvbiA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5yb3RhdGlvblF1YXRlcm5pb24uY2xvbmUoKTtcblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICAgICAgc3ViR3JhcGguY3JlYXRlQW5kQWRkU3ViTm9kZUFzeW5jKEF1ZGlvU3ViTm9kZS5TUEFUSUFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gc3ViR3JhcGg7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgY29uZUlubmVyQW5nbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmVJbm5lckFuZ2xlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29uZUlubmVyQW5nbGUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jb25lSW5uZXJBbmdsZSA9IHZhbHVlO1xuICAgICAgICBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwiY29uZUlubmVyQW5nbGVcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbmVPdXRlckFuZ2xlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25lT3V0ZXJBbmdsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbmVPdXRlckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29uZU91dGVyQW5nbGUgPSB2YWx1ZTtcbiAgICAgICAgX1NldFNwYXRpYWxBdWRpb1Byb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcImNvbmVPdXRlckFuZ2xlXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBjb25lT3V0ZXJWb2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmVPdXRlclZvbHVtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbmVPdXRlclZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbmVPdXRlclZvbHVtZSA9IHZhbHVlO1xuICAgICAgICBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwiY29uZU91dGVyVm9sdW1lXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBkaXN0YW5jZU1vZGVsKCk6IERpc3RhbmNlTW9kZWxUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RhbmNlTW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBkaXN0YW5jZU1vZGVsKHZhbHVlOiBEaXN0YW5jZU1vZGVsVHlwZSkge1xuICAgICAgICB0aGlzLl9kaXN0YW5jZU1vZGVsID0gdmFsdWU7XG4gICAgICAgIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJkaXN0YW5jZU1vZGVsXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBpc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguZ2V0U3ViTm9kZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4oQXVkaW9TdWJOb2RlLlNQQVRJQUwpPy5pc0F0dGFjaGVkID8/IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IG1heERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEaXN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heERpc3RhbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDw9IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gMC4wMDAwMDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXhEaXN0YW5jZSA9IHZhbHVlO1xuICAgICAgICBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwibWF4RGlzdGFuY2VcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IG1pbkRpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EaXN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1pbkRpc3RhbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRGlzdGFuY2UgPSB2YWx1ZTtcbiAgICAgICAgX1NldFNwYXRpYWxBdWRpb1Byb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcIm1pbkRpc3RhbmNlXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBwYW5uaW5nTW9kZWwoKTogUGFubmluZ01vZGVsVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYW5uaW5nTW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYW5uaW5nTW9kZWwodmFsdWU6IFBhbm5pbmdNb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy5fcGFubmluZ01vZGVsID0gdmFsdWU7XG4gICAgICAgIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJwYW5uaW5nTW9kZWxcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IFZlY3RvcjMge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwb3NpdGlvbih2YWx1ZTogVmVjdG9yMykge1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHJvbGxvZmZGYWN0b3IoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvbGxvZmZGYWN0b3I7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByb2xsb2ZmRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcm9sbG9mZkZhY3RvciA9IHZhbHVlO1xuICAgICAgICBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwicm9sbG9mZkZhY3RvclwiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgcm90YXRpb24oKTogVmVjdG9yMyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJvdGF0aW9uKHZhbHVlOiBWZWN0b3IzKSB7XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgcm90YXRpb25RdWF0ZXJuaW9uKCk6IFF1YXRlcm5pb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcm90YXRpb25RdWF0ZXJuaW9uKHZhbHVlOiBRdWF0ZXJuaW9uKSB7XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uUXVhdGVybmlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLl91cGRhdGVSb3RhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRvIGEgc2NlbmUgbm9kZS5cbiAgICAgKlxuICAgICAqIERldGFjaGVzIGF1dG9tYXRpY2FsbHkgYmVmb3JlIGF0dGFjaGluZyB0byB0aGUgZ2l2ZW4gc2NlbmUgbm9kZS5cbiAgICAgKiBJZiBgc2NlbmVOb2RlYCBpcyBgbnVsbGAgaXQgaXMgdGhlIHNhbWUgYXMgY2FsbGluZyBgZGV0YWNoKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjZW5lTm9kZSBUaGUgc2NlbmUgbm9kZSB0byBhdHRhY2ggdG8sIG9yIGBudWxsYCB0byBkZXRhY2guXG4gICAgICogQHBhcmFtIHVzZUJvdW5kaW5nQm94IFdoZXRoZXIgdG8gdXNlIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIG5vZGUgZm9yIHBvc2l0aW9uaW5nLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VHlwZSBXaGV0aGVyIHRvIGF0dGFjaCB0byB0aGUgbm9kZSdzIHBvc2l0aW9uIGFuZC9vciByb3RhdGlvbi4gRGVmYXVsdHMgdG8gYFBvc2l0aW9uQW5kUm90YXRpb25gLlxuICAgICAqL1xuICAgIHB1YmxpYyBhdHRhY2goc2NlbmVOb2RlOiBOdWxsYWJsZTxOb2RlPiwgdXNlQm91bmRpbmdCb3g6IGJvb2xlYW4gPSBmYWxzZSwgYXR0YWNobWVudFR5cGU6IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlID0gU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUuUG9zaXRpb25BbmRSb3RhdGlvbik6IHZvaWQge1xuICAgICAgICBfR2V0U3BhdGlhbEF1ZGlvU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk/LmF0dGFjaChzY2VuZU5vZGUsIHVzZUJvdW5kaW5nQm94LCBhdHRhY2htZW50VHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgZnJvbSB0aGUgc2NlbmUgbm9kZSBpZiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGV0YWNoKCk6IHZvaWQge1xuICAgICAgICBfR2V0U3BhdGlhbEF1ZGlvU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk/LmRldGFjaCgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdWJOb2RlID0gX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUodGhpcy5fc3ViR3JhcGgpO1xuXG4gICAgICAgIGlmICghc3ViTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Yk5vZGUuaXNBdHRhY2hlZCkge1xuICAgICAgICAgICAgc3ViTm9kZS51cGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKHN1Yk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUm90YXRpb24oc3ViTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbihzdWJOb2RlOiBOdWxsYWJsZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGlmICghc3ViTm9kZSkge1xuICAgICAgICAgICAgc3ViTm9kZSA9IF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlKHRoaXMuX3N1YkdyYXBoKTtcblxuICAgICAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzdWJOb2RlLnBvc2l0aW9uO1xuICAgICAgICBpZiAoIXBvc2l0aW9uLmVxdWFsc1dpdGhFcHNpbG9uKHRoaXMuX3Bvc2l0aW9uKSkge1xuICAgICAgICAgICAgc3ViTm9kZS5wb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9wb3NpdGlvbik7XG4gICAgICAgICAgICBzdWJOb2RlLl91cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlUm90YXRpb24oc3ViTm9kZTogTnVsbGFibGU8X1NwYXRpYWxBdWRpb1N1Yk5vZGU+ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAoIXN1Yk5vZGUpIHtcbiAgICAgICAgICAgIHN1Yk5vZGUgPSBfR2V0U3BhdGlhbEF1ZGlvU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG5cbiAgICAgICAgICAgIGlmICghc3ViTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3ViTm9kZS5yb3RhdGlvblF1YXRlcm5pb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5fcm90YXRpb25RdWF0ZXJuaW9uKSkge1xuICAgICAgICAgICAgc3ViTm9kZS5yb3RhdGlvblF1YXRlcm5pb24uY29weUZyb20odGhpcy5fcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgICAgICAgIHN1Yk5vZGUuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN1Yk5vZGUucm90YXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5fcm90YXRpb24pKSB7XG4gICAgICAgICAgICBzdWJOb2RlLnJvdGF0aW9uLmNvcHlGcm9tKHRoaXMuX3JvdGF0aW9uKTtcbiAgICAgICAgICAgIHN1Yk5vZGUuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBfU3RlcmVvQXVkaW9EZWZhdWx0cywgQWJzdHJhY3RTdGVyZW9BdWRpbyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIH0gZnJvbSBcIi4uL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NldFN0ZXJlb0F1ZGlvUHJvcGVydHkgfSBmcm9tIFwiLi4vc3ViTm9kZXMvc3RlcmVvQXVkaW9TdWJOb2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfU3RlcmVvQXVkaW8gZXh0ZW5kcyBBYnN0cmFjdFN0ZXJlb0F1ZGlvIHtcbiAgICBwcml2YXRlIF9wYW46IG51bWJlciA9IF9TdGVyZW9BdWRpb0RlZmF1bHRzLnBhbjtcbiAgICBwcml2YXRlIF9zdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc3ViR3JhcGggPSBzdWJHcmFwaDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBwYW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhbiA9IHZhbHVlO1xuICAgICAgICBfU2V0U3RlcmVvQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJwYW5cIiwgdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCIuLi8uLi8uLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3NwYXRpYWxBdWRpb1N1Yk5vZGVcIjtcclxuaW1wb3J0IHsgX1NwYXRpYWxBdWRpb0RlZmF1bHRzIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xyXG5pbXBvcnQgeyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuLi93ZWJBdWRpb0VuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSB9IGZyb20gXCIuLi93ZWJBdWRpb05vZGVcIjtcclxuXHJcbmNvbnN0IFRtcE1hdHJpeCA9IE1hdHJpeC5aZXJvKCk7XHJcbmNvbnN0IFRtcFF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xyXG5jb25zdCBUbXBWZWN0b3IgPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbmZ1bmN0aW9uIEQycihkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFIyZChyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBfQ3JlYXRlU3BhdGlhbEF1ZGlvU3ViTm9kZUFzeW5jKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKTogUHJvbWlzZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBfU3BhdGlhbFdlYkF1ZGlvU3ViTm9kZShlbmdpbmUpO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBfU3BhdGlhbFdlYkF1ZGlvU3ViTm9kZSBleHRlbmRzIF9TcGF0aWFsQXVkaW9TdWJOb2RlIHtcclxuICAgIHByaXZhdGUgX2xhc3RQb3NpdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgcHJpdmF0ZSBfbGFzdFJvdGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBwcml2YXRlIF9sYXN0Um90YXRpb25RdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgIHByaXZhdGUgX29yaWVudGF0aW9uWDogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfb3JpZW50YXRpb25ZOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvblo6IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uWDogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25ZOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblo6IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm90YXRpb246IFZlY3RvcjMgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb24uY2xvbmUoKTtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSByb3RhdGlvblF1YXRlcm5pb246IFF1YXRlcm5pb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5vZGU6IFBhbm5lck5vZGU7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIoZW5naW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbmV3IFBhbm5lck5vZGUoZW5naW5lLl9hdWRpb0NvbnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvblggPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgdGhpcy5ub2RlLm9yaWVudGF0aW9uWCk7XHJcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb25ZID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIHRoaXMubm9kZS5vcmllbnRhdGlvblkpO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uWiA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCB0aGlzLm5vZGUub3JpZW50YXRpb25aKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25YID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIHRoaXMubm9kZS5wb3NpdGlvblgpO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWSA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCB0aGlzLm5vZGUucG9zaXRpb25ZKTtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvblogPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgdGhpcy5ub2RlLnBvc2l0aW9uWik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvblguZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uWS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb25aLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvblguZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25aLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbmVJbm5lckFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEQycih0aGlzLm5vZGUuY29uZUlubmVyQW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY29uZUlubmVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5jb25lSW5uZXJBbmdsZSA9IFIyZCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCBjb25lT3V0ZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBEMnIodGhpcy5ub2RlLmNvbmVPdXRlckFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNvbmVPdXRlckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29uZU91dGVyQW5nbGUgPSBSMmQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgY29uZU91dGVyVm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jb25lT3V0ZXJHYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY29uZU91dGVyVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29uZU91dGVyR2FpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlzdGFuY2VNb2RlbCgpOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZGlzdGFuY2VNb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGRpc3RhbmNlTW9kZWwodmFsdWU6IFwibGluZWFyXCIgfCBcImludmVyc2VcIiB8IFwiZXhwb25lbnRpYWxcIikge1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXN0YW5jZU1vZGVsID0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIFdpZ2dsZSB0aGUgbWF4IGRpc3RhbmNlIHRvIG1ha2UgdGhlIGNoYW5nZSB0YWtlIGVmZmVjdC5cclxuICAgICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IHRoaXMubm9kZS5tYXhEaXN0YW5jZTtcclxuICAgICAgICB0aGlzLm5vZGUubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZSArIDAuMDAxO1xyXG4gICAgICAgIHRoaXMubm9kZS5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgbWluRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnJlZkRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWluRGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZWZEaXN0YW5jZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF4RGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLm1heERpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWF4RGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5tYXhEaXN0YW5jZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgcGFubmluZ01vZGVsKCk6IFwiZXF1YWxwb3dlclwiIHwgXCJIUlRGXCIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucGFubmluZ01vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcGFubmluZ01vZGVsKHZhbHVlOiBcImVxdWFscG93ZXJcIiB8IFwiSFJURlwiKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhbm5pbmdNb2RlbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9sbG9mZkZhY3RvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucm9sbG9mZkZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJvbGxvZmZGYWN0b3IodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5yb2xsb2ZmRmFjdG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCk6IEF1ZGlvTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCk6IEF1ZGlvTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3VwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0UG9zaXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5wb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYXR0YWNoZWQgYW5kIHRoZXJlIGlzIGEgcmFtcCBpbiBwcm9ncmVzcywgd2UgYXNzdW1lIGFub3RoZXIgdXBkYXRlIGlzIGNvbWluZyBzb29uIHRoYXQgd2UgY2FuIHdhaXQgZm9yLlxyXG4gICAgICAgIC8vIFdlIGRvbid0IGRvIHRoaXMgZm9yIHVuYXR0YWNoZWQgbm9kZXMgYmVjYXVzZSB0aGVyZSBtYXkgbm90IGJlIGFub3RoZXIgdXBkYXRlIGNvbWluZy5cclxuICAgICAgICBpZiAodGhpcy5pc0F0dGFjaGVkICYmICh0aGlzLl9wb3NpdGlvblguaXNSYW1waW5nIHx8IHRoaXMuX3Bvc2l0aW9uWS5pc1JhbXBpbmcgfHwgdGhpcy5fcG9zaXRpb25aLmlzUmFtcGluZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25YLnRhcmdldFZhbHVlID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWS50YXJnZXRWYWx1ZSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbloudGFyZ2V0VmFsdWUgPSB0aGlzLnBvc2l0aW9uLno7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RQb3NpdGlvbi5jb3B5RnJvbSh0aGlzLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3VwZGF0ZVJvdGF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElmIGF0dGFjaGVkIGFuZCB0aGVyZSBpcyBhIHJhbXAgaW4gcHJvZ3Jlc3MsIHdlIGFzc3VtZSBhbm90aGVyIHVwZGF0ZSBpcyBjb21pbmcgc29vbiB0aGF0IHdlIGNhbiB3YWl0IGZvci5cclxuICAgICAgICAvLyBXZSBkb24ndCBkbyB0aGlzIGZvciB1bmF0dGFjaGVkIG5vZGVzIGJlY2F1c2UgdGhlcmUgbWF5IG5vdCBiZSBhbm90aGVyIHVwZGF0ZSBjb21pbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2hlZCAmJiAodGhpcy5fb3JpZW50YXRpb25YLmlzUmFtcGluZyB8fCB0aGlzLl9vcmllbnRhdGlvblkuaXNSYW1waW5nIHx8IHRoaXMuX29yaWVudGF0aW9uWi5pc1JhbXBpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fbGFzdFJvdGF0aW9uUXVhdGVybmlvbi5lcXVhbHNXaXRoRXBzaWxvbih0aGlzLnJvdGF0aW9uUXVhdGVybmlvbikpIHtcclxuICAgICAgICAgICAgVG1wUXVhdGVybmlvbi5jb3B5RnJvbSh0aGlzLnJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RSb3RhdGlvblF1YXRlcm5pb24uY29weUZyb20odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2xhc3RSb3RhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbih0aGlzLnJvdGF0aW9uKSkge1xyXG4gICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21FdWxlckFuZ2xlc1RvUmVmKHRoaXMucm90YXRpb24ueCwgdGhpcy5yb3RhdGlvbi55LCB0aGlzLnJvdGF0aW9uLnosIFRtcFF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0Um90YXRpb24uY29weUZyb20odGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTWF0cml4LkZyb21RdWF0ZXJuaW9uVG9SZWYoVG1wUXVhdGVybmlvbiwgVG1wTWF0cml4KTtcclxuICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybU5vcm1hbFRvUmVmKFZlY3RvcjMuUmlnaHRSZWFkT25seSwgVG1wTWF0cml4LCBUbXBWZWN0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvblgudGFyZ2V0VmFsdWUgPSBUbXBWZWN0b3IueDtcclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvblkudGFyZ2V0VmFsdWUgPSBUbXBWZWN0b3IueTtcclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbloudGFyZ2V0VmFsdWUgPSBUbXBWZWN0b3IuejtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzdWJncmFwaC5cclxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb25uZWN0KG5vZGUuX2luTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJfU3BhdGlhbFdlYkF1ZGlvU3ViTm9kZVwiO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IF9TdGVyZW9BdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9zdGVyZW9BdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUgfSBmcm9tIFwiLi4vd2ViQXVkaW9Ob2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIF9DcmVhdGVTdGVyZW9BdWRpb1N1Yk5vZGVBc3luYyhlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSk6IFByb21pc2U8X1N0ZXJlb0F1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBuZXcgX1N0ZXJlb1dlYkF1ZGlvU3ViTm9kZShlbmdpbmUpO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1N0ZXJlb1dlYkF1ZGlvU3ViTm9kZSBleHRlbmRzIF9TdGVyZW9BdWRpb1N1Yk5vZGUge1xuICAgIHByaXZhdGUgX3BhbjogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgbm9kZTogU3RlcmVvUGFubmVyTm9kZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpIHtcbiAgICAgICAgc3VwZXIoZW5naW5lKTtcblxuICAgICAgICB0aGlzLm5vZGUgPSBuZXcgU3RlcmVvUGFubmVyTm9kZShlbmdpbmUuX2F1ZGlvQ29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5fcGFuID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIHRoaXMubm9kZS5wYW4pO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3Bhbi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgcGFuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYW4udGFyZ2V0VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXQgcGFuKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcGFuLnRhcmdldFZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpOiBBdWRpb05vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCk6IEF1ZGlvTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiX1N0ZXJlb1dlYkF1ZGlvU3ViTm9kZVwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2F1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9zcGF0aWFsQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfR2V0U3RlcmVvQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvc3RlcmVvQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IElWb2x1bWVBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy92b2x1bWVBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9HZXRWb2x1bWVBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy92b2x1bWVBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgSVNwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgSVN0ZXJlb0F1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHsgX0hhc1N0ZXJlb0F1ZGlvT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9PdXROb2RlLCBJV2ViQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uL3dlYkF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfU3BhdGlhbFdlYkF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL3NwYXRpYWxXZWJBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9DcmVhdGVTcGF0aWFsQXVkaW9TdWJOb2RlQXN5bmMgfSBmcm9tIFwiLi9zcGF0aWFsV2ViQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9TdGVyZW9XZWJBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9zdGVyZW9XZWJBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9DcmVhdGVTdGVyZW9BdWRpb1N1Yk5vZGVBc3luYyB9IGZyb20gXCIuL3N0ZXJlb1dlYkF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfVm9sdW1lV2ViQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4vdm9sdW1lV2ViQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9CYXNlU3ViR3JhcGggfSBmcm9tIFwiLi93ZWJBdWRpb0Jhc2VTdWJHcmFwaFwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgaW50ZXJmYWNlIElXZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGhPcHRpb25zIGV4dGVuZHMgSVNwYXRpYWxBdWRpb09wdGlvbnMsIElTdGVyZW9BdWRpb09wdGlvbnMsIElWb2x1bWVBdWRpb09wdGlvbnMge31cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGggZXh0ZW5kcyBfV2ViQXVkaW9CYXNlU3ViR3JhcGgge1xuICAgIHByaXZhdGUgX3Jvb3ROb2RlOiBOdWxsYWJsZTxHYWluTm9kZT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBfdXBzdHJlYW1Ob2RlczogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj47XG5cbiAgICBwcm90ZWN0ZWQgX2lucHV0Tm9kZTogTnVsbGFibGU8QXVkaW9Ob2RlPiA9IG51bGw7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIGluaXRBc3luYyhvcHRpb25zOiBQYXJ0aWFsPElXZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGhPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBzdXBlci5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgbGV0IGhhc1NwYXRpYWxPcHRpb25zID0gZmFsc2U7XG4gICAgICAgIGxldCBoYXNTdGVyZW9PcHRpb25zID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKChoYXNTcGF0aWFsT3B0aW9ucyA9IF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnMpKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVBbmRBZGRTdWJOb2RlQXN5bmMoQXVkaW9TdWJOb2RlLlNQQVRJQUwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaGFzU3RlcmVvT3B0aW9ucyA9IF9IYXNTdGVyZW9BdWRpb09wdGlvbnMob3B0aW9ucykpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZUFuZEFkZFN1Yk5vZGVBc3luYyhBdWRpb1N1Yk5vZGUuU1RFUkVPKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX2NyZWF0ZVN1Yk5vZGVQcm9taXNlc1Jlc29sdmVkQXN5bmMoKTtcblxuICAgICAgICBpZiAoaGFzU3BhdGlhbE9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlKHRoaXMpPy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNTdGVyZW9PcHRpb25zKSB7XG4gICAgICAgICAgICBfR2V0U3RlcmVvQXVkaW9TdWJOb2RlKHRoaXMpPy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgX2luTm9kZSgpOiBOdWxsYWJsZTxBdWRpb05vZGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0Tm9kZTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2NyZWF0ZVN1Yk5vZGUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxfQWJzdHJhY3RBdWRpb1N1Yk5vZGU+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBzdXBlci5fY3JlYXRlU3ViTm9kZShuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBBdWRpb1N1Yk5vZGUuU1BBVElBTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gX0NyZWF0ZVNwYXRpYWxBdWRpb1N1Yk5vZGVBc3luYyh0aGlzLl9vd25lci5lbmdpbmUpO1xuICAgICAgICAgICAgY2FzZSBBdWRpb1N1Yk5vZGUuU1RFUkVPOlxuICAgICAgICAgICAgICAgIHJldHVybiBfQ3JlYXRlU3RlcmVvQXVkaW9TdWJOb2RlQXN5bmModGhpcy5fb3duZXIuZW5naW5lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHN1Ym5vZGUgbmFtZTogJHtuYW1lfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9vblN1Yk5vZGVzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuX29uU3ViTm9kZXNDaGFuZ2VkKCk7XG5cbiAgICAgICAgY29uc3Qgc3BhdGlhbE5vZGUgPSBfR2V0U3BhdGlhbEF1ZGlvU3ViTm9kZSh0aGlzKTtcbiAgICAgICAgY29uc3Qgc3RlcmVvTm9kZSA9IF9HZXRTdGVyZW9BdWRpb1N1Yk5vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHZvbHVtZU5vZGUgPSBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlKHRoaXMpO1xuXG4gICAgICAgIGlmIChzcGF0aWFsTm9kZSAmJiBzcGF0aWFsTm9kZS5nZXRDbGFzc05hbWUoKSAhPT0gXCJfU3BhdGlhbFdlYkF1ZGlvU3ViTm9kZVwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBXZWJBdWRpbyBzdWJub2RlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcmVvTm9kZSAmJiBzdGVyZW9Ob2RlLmdldENsYXNzTmFtZSgpICE9PSBcIl9TdGVyZW9XZWJBdWRpb1N1Yk5vZGVcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgV2ViQXVkaW8gc3Vibm9kZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZvbHVtZU5vZGUgJiYgdm9sdW1lTm9kZS5nZXRDbGFzc05hbWUoKSAhPT0gXCJfVm9sdW1lV2ViQXVkaW9TdWJOb2RlXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIFdlYkF1ZGlvIHN1Ym5vZGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwYXRpYWxOb2RlKSB7XG4gICAgICAgICAgICBzcGF0aWFsTm9kZS5kaXNjb25uZWN0QWxsKCk7XG5cbiAgICAgICAgICAgIGlmICh2b2x1bWVOb2RlKSB7XG4gICAgICAgICAgICAgICAgc3BhdGlhbE5vZGUuY29ubmVjdCh2b2x1bWVOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGVyZW9Ob2RlKSB7XG4gICAgICAgICAgICBzdGVyZW9Ob2RlLmRpc2Nvbm5lY3RBbGwoKTtcblxuICAgICAgICAgICAgaWYgKHZvbHVtZU5vZGUpIHtcbiAgICAgICAgICAgICAgICBzdGVyZW9Ob2RlLmNvbm5lY3Qodm9sdW1lTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BhdGlhbE5vZGUgJiYgc3RlcmVvTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fcm9vdE5vZGUgPSBuZXcgR2Fpbk5vZGUodGhpcy5fb3duZXIuZW5naW5lLl9hdWRpb0NvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5fcm9vdE5vZGUuY29ubmVjdCgoc3BhdGlhbE5vZGUgYXMgX1NwYXRpYWxXZWJBdWRpb1N1Yk5vZGUpLl9vdXROb2RlKTtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3ROb2RlLmNvbm5lY3QoKHN0ZXJlb05vZGUgYXMgX1N0ZXJlb1dlYkF1ZGlvU3ViTm9kZSkuX291dE5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcm9vdE5vZGU/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3ROb2RlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpblN1Yk5vZGU6IE51bGxhYmxlPElXZWJBdWRpb1N1Yk5vZGU+ID0gbnVsbDtcblxuICAgICAgICBsZXQgaW5Ob2RlOiBOdWxsYWJsZTxBdWRpb05vZGU+ID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5fcm9vdE5vZGUpIHtcbiAgICAgICAgICAgIGluTm9kZSA9IHRoaXMuX3Jvb3ROb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNwYXRpYWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgaW5TdWJOb2RlID0gc3BhdGlhbE5vZGUgYXMgX1NwYXRpYWxXZWJBdWRpb1N1Yk5vZGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXJlb05vZGUpIHtcbiAgICAgICAgICAgICAgICBpblN1Yk5vZGUgPSBzdGVyZW9Ob2RlIGFzIF9TdGVyZW9XZWJBdWRpb1N1Yk5vZGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZvbHVtZU5vZGUpIHtcbiAgICAgICAgICAgICAgICBpblN1Yk5vZGUgPSB2b2x1bWVOb2RlIGFzIF9Wb2x1bWVXZWJBdWRpb1N1Yk5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluTm9kZSA9IGluU3ViTm9kZT8ubm9kZSA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0Tm9kZSAhPT0gaW5Ob2RlKSB7XG4gICAgICAgICAgICAvLyBEaXNjb25uZWN0IHRoZSB3cmFwcGVkIHVwc3RyZWFtIFdlYkF1ZGlvIG5vZGVzIGZyb20gdGhlIG9sZCB3cmFwcGVkIFdlYkF1ZGlvIG5vZGUuXG4gICAgICAgICAgICAvLyBUaGUgd3JhcHBlciBub2RlcyBhcmUgdW5hd2FyZSBvZiB0aGlzIGNoYW5nZS5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dE5vZGUgJiYgdGhpcy5fdXBzdHJlYW1Ob2Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ID0gdGhpcy5fdXBzdHJlYW1Ob2Rlcy52YWx1ZXMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIChuZXh0LnZhbHVlIGFzIElXZWJBdWRpb091dE5vZGUpLl9vdXROb2RlPy5kaXNjb25uZWN0KHRoaXMuX2lucHV0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9pbnB1dE5vZGUgPSBpbk5vZGU7XG5cbiAgICAgICAgICAgIC8vIENvbm5lY3QgdGhlIHdyYXBwZWQgdXBzdHJlYW0gV2ViQXVkaW8gbm9kZXMgdG8gdGhlIG5ldyB3cmFwcGVkIFdlYkF1ZGlvIG5vZGUuXG4gICAgICAgICAgICAvLyBUaGUgd3JhcHBlciBub2RlcyBhcmUgdW5hd2FyZSBvZiB0aGlzIGNoYW5nZS5cbiAgICAgICAgICAgIGlmIChpbk5vZGUgJiYgdGhpcy5fdXBzdHJlYW1Ob2Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ID0gdGhpcy5fdXBzdHJlYW1Ob2Rlcy52YWx1ZXMoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuZXh0ID0gaXQubmV4dCgpOyAhbmV4dC5kb25lOyBuZXh0ID0gaXQubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIChuZXh0LnZhbHVlIGFzIElXZWJBdWRpb091dE5vZGUpLl9vdXROb2RlPy5jb25uZWN0KGluTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1YkdyYXBoXCI7XG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9TcGF0aWFsV2ViQXVkaW9VcGRhdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3BhdGlhbFdlYkF1ZGlvVXBkYXRlckNvbXBvbmVudFwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1NwYXRpYWxXZWJBdWRpbyBleHRlbmRzIF9TcGF0aWFsQXVkaW8ge1xuICAgIHByaXZhdGUgX3VwZGF0ZXJDb21wb25lbnQ6IF9TcGF0aWFsV2ViQXVkaW9VcGRhdGVyQ29tcG9uZW50O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCwgYXV0b1VwZGF0ZTogYm9vbGVhbiwgbWluVXBkYXRlVGltZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKHN1YkdyYXBoKTtcblxuICAgICAgICB0aGlzLl91cGRhdGVyQ29tcG9uZW50ID0gbmV3IF9TcGF0aWFsV2ViQXVkaW9VcGRhdGVyQ29tcG9uZW50KHRoaXMsIGF1dG9VcGRhdGUsIG1pblVwZGF0ZVRpbWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IG1pblVwZGF0ZVRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZXJDb21wb25lbnQubWluVXBkYXRlVGltZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldCBtaW5VcGRhdGVUaW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlckNvbXBvbmVudC5taW5VcGRhdGVUaW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl91cGRhdGVyQ29tcG9uZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlckNvbXBvbmVudCA9IG51bGwhO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==