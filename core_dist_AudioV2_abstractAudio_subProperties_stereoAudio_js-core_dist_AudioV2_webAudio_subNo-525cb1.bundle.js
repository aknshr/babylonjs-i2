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
        this.orientation = options.spatialOrientation ?? _subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.orientation;
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
    orientation: _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Right(),
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
        options.spatialOrientation !== undefined ||
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
            this._orientation = subNode.orientation.clone();
            this._position = subNode.position.clone();
            this._rotation = subNode.rotation.clone();
            this._rotationQuaternion = subNode.rotationQuaternion.clone();
        }
        else {
            this._orientation = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.orientation.clone();
            this._position = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.position.clone();
            this._rotation = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rotation.clone();
            this._rotationQuaternion = _abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._SpatialAudioDefaults.rotationQuaternion.clone();
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            subGraph.createAndAddSubNodeAsync("Spatial" /* AudioSubNode.SPATIAL */);
        }
        this._subGraph = subGraph;
    }
    /** @internal */
    dispose() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._subGraph.removeSubNodeAsync((0,_subNodes_spatialAudioSubNode__WEBPACK_IMPORTED_MODULE_0__._GetSpatialAudioSubNode)(this._subGraph));
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
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        this._orientation = value;
        this._updateRotation();
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
            this._orientation.copyFrom(subNode.orientation);
            this._rotation.copyFrom(subNode.rotation);
        }
        else if (!subNode.rotation.equalsWithEpsilon(this._rotation)) {
            subNode.rotation.copyFrom(this._rotation);
            subNode._updateRotation();
            this._orientation.copyFrom(subNode.orientation);
            this._rotationQuaternion.copyFrom(subNode.rotationQuaternion);
        }
        else if (!subNode.orientation.equalsWithEpsilon(this._orientation)) {
            subNode.orientation.copyFrom(this._orientation);
            subNode._updateRotation();
            this._rotation.copyFrom(subNode.rotation);
            this._rotationQuaternion.copyFrom(subNode.rotationQuaternion);
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
        this._lastOrientation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastRotation = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
        this._lastRotationQuaternion = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
        /** @internal */
        this.orientation = _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_2__._SpatialAudioDefaults.orientation.clone();
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
        this._positionX.targetValue = this.position.x;
        this._positionY.targetValue = this.position.y;
        this._positionZ.targetValue = this.position.z;
        this._lastPosition.copyFrom(this.position);
    }
    /** @internal */
    _updateRotation() {
        let rotated = false;
        if (!this._lastRotationQuaternion.equalsWithEpsilon(this.rotationQuaternion)) {
            TmpQuaternion.copyFrom(this.rotationQuaternion);
            this._lastRotationQuaternion.copyFrom(this.rotationQuaternion);
            rotated = true;
        }
        else if (!this._lastRotation.equalsWithEpsilon(this.rotation)) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerAnglesToRef(this.rotation.x, this.rotation.y, this.rotation.z, TmpQuaternion);
            this._lastRotation.copyFrom(this.rotation);
            rotated = true;
        }
        else if (this._lastOrientation.equalsWithEpsilon(this.orientation)) {
            return;
        }
        if (rotated) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromQuaternionToRef(TmpQuaternion, TmpMatrix);
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformNormalToRef(_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.RightReadOnly, TmpMatrix, this.orientation);
        }
        this._orientationX.targetValue = this.orientation.x;
        this._orientationY.targetValue = this.orientation.y;
        this._orientationZ.targetValue = this.orientation.z;
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        super.dispose();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfYWJzdHJhY3RBdWRpb19zdWJQcm9wZXJ0aWVzX3N0ZXJlb0F1ZGlvX2pzLWNvcmVfZGlzdF9BdWRpb1YyX3dlYkF1ZGlvX3N1Yk5vLTUyNWNiMS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFIQTtBQUlBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBdUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UUE7QUFDQTtBQUNBO0FBc0JBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlFBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBNUJBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9PQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFBQTs7QUFDQTtBQUdBO0FBbUlBO0FBaklBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlKQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9zcGF0aWFsQXVkaW9TdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3N0ZXJlb0F1ZGlvU3ViTm9kZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpby50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3NwYXRpYWxBdWRpby50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3N0ZXJlb0F1ZGlvLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby9zdWJOb2Rlcy9zcGF0aWFsV2ViQXVkaW9TdWJOb2RlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby9zdWJOb2Rlcy9zdGVyZW9XZWJBdWRpb1N1Yk5vZGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3N1Yk5vZGVzL3dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvd2ViQXVkaW8vc3ViUHJvcGVydGllcy9zcGF0aWFsV2ViQXVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBTcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZSB9IGZyb20gXCIuLi8uLi9zcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZVwiO1xuaW1wb3J0IHR5cGUgeyBBdWRpb0VuZ2luZVYyIH0gZnJvbSBcIi4uL2F1ZGlvRW5naW5lVjJcIjtcbmltcG9ydCB7IF9TcGF0aWFsQXVkaW9BdHRhY2hlckNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NwYXRpYWxBdWRpb0F0dGFjaGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgdHlwZSB7IElTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9TcGF0aWFsQXVkaW9EZWZhdWx0cyB9IGZyb20gXCIuLi9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcbmltcG9ydCB7IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9hdWRpb1N1Yk5vZGVcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9TcGF0aWFsQXVkaW9TdWJOb2RlIGV4dGVuZHMgX0Fic3RyYWN0QXVkaW9TdWJOb2RlIHtcbiAgICBwcml2YXRlIF9hdHRhY2hlckNvbXBvbmVudDogTnVsbGFibGU8X1NwYXRpYWxBdWRpb0F0dGFjaGVyQ29tcG9uZW50PiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZW5naW5lOiBBdWRpb0VuZ2luZVYyKSB7XG4gICAgICAgIHN1cGVyKEF1ZGlvU3ViTm9kZS5TUEFUSUFMLCBlbmdpbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lSW5uZXJBbmdsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lT3V0ZXJBbmdsZTogbnVtYmVyO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lT3V0ZXJWb2x1bWU6IG51bWJlcjtcbiAgICBwdWJsaWMgYWJzdHJhY3QgZGlzdGFuY2VNb2RlbDogRGlzdGFuY2VNb2RlbFR5cGU7XG4gICAgcHVibGljIGFic3RyYWN0IG1heERpc3RhbmNlOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IG1pbkRpc3RhbmNlOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IG9yaWVudGF0aW9uOiBWZWN0b3IzO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwYW5uaW5nTW9kZWw6IFBhbm5pbmdNb2RlbFR5cGU7XG4gICAgcHVibGljIGFic3RyYWN0IHBvc2l0aW9uOiBWZWN0b3IzO1xuICAgIHB1YmxpYyBhYnN0cmFjdCByb2xsb2ZmRmFjdG9yOiBudW1iZXI7XG4gICAgcHVibGljIGFic3RyYWN0IHJvdGF0aW9uOiBWZWN0b3IzO1xuICAgIHB1YmxpYyBhYnN0cmFjdCByb3RhdGlvblF1YXRlcm5pb246IFF1YXRlcm5pb247XG4gICAgcHVibGljIGFic3RyYWN0IF9pbk5vZGU6IEF1ZGlvTm9kZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2hlckNvbXBvbmVudCAhPT0gbnVsbCAmJiB0aGlzLl9hdHRhY2hlckNvbXBvbmVudC5pc0F0dGFjaGVkO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXR0YWNoKHNjZW5lTm9kZTogTnVsbGFibGU8Tm9kZT4sIHVzZUJvdW5kaW5nQm94OiBib29sZWFuLCBhdHRhY2htZW50VHlwZTogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcblxuICAgICAgICBpZiAoIXRoaXMuX2F0dGFjaGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudCA9IG5ldyBfU3BhdGlhbEF1ZGlvQXR0YWNoZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudC5hdHRhY2goc2NlbmVOb2RlLCB1c2VCb3VuZGluZ0JveCwgYXR0YWNobWVudFR5cGUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGV0YWNoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hdHRhY2hlckNvbXBvbmVudD8uZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQ/LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElTcGF0aWFsQXVkaW9PcHRpb25zPik6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbmVJbm5lckFuZ2xlID0gb3B0aW9ucy5zcGF0aWFsQ29uZUlubmVyQW5nbGUgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgICB0aGlzLmNvbmVPdXRlckFuZ2xlID0gb3B0aW9ucy5zcGF0aWFsQ29uZU91dGVyQW5nbGUgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgICB0aGlzLmNvbmVPdXRlclZvbHVtZSA9IG9wdGlvbnMuc3BhdGlhbENvbmVPdXRlclZvbHVtZSA/PyBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZU91dGVyVm9sdW1lO1xuICAgICAgICB0aGlzLmRpc3RhbmNlTW9kZWwgPSBvcHRpb25zLnNwYXRpYWxEaXN0YW5jZU1vZGVsID8/IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5kaXN0YW5jZU1vZGVsO1xuICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gb3B0aW9ucy5zcGF0aWFsTWF4RGlzdGFuY2UgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm1heERpc3RhbmNlO1xuICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gb3B0aW9ucy5zcGF0aWFsTWluRGlzdGFuY2UgPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm1pbkRpc3RhbmNlO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3B0aW9ucy5zcGF0aWFsT3JpZW50YXRpb24gPz8gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnBhbm5pbmdNb2RlbCA9IG9wdGlvbnMuc3BhdGlhbFBhbm5pbmdNb2RlbCA/PyBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucGFubmluZ01vZGVsO1xuICAgICAgICB0aGlzLnJvbGxvZmZGYWN0b3IgPSBvcHRpb25zLnNwYXRpYWxSb2xsb2ZmRmFjdG9yID8/IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5yb2xsb2ZmRmFjdG9yO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNwYXRpYWxQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG9wdGlvbnMuc3BhdGlhbFBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zcGF0aWFsUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IG9wdGlvbnMuc3BhdGlhbFJvdGF0aW9uUXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc3BhdGlhbFJvdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gb3B0aW9ucy5zcGF0aWFsUm90YXRpb24uY2xvbmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnJvdGF0aW9uUXVhdGVybmlvbi5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5fYXR0YWNoZXJDb21wb25lbnQ/LnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgX3VwZGF0ZVBvc2l0aW9uKCk6IHZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IF91cGRhdGVSb3RhdGlvbigpOiB2b2lkO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUoc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpOiBOdWxsYWJsZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBzdWJHcmFwaC5nZXRTdWJOb2RlPF9TcGF0aWFsQXVkaW9TdWJOb2RlPihBdWRpb1N1Yk5vZGUuU1BBVElBTCk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHk8SyBleHRlbmRzIGtleW9mIHR5cGVvZiBfU3BhdGlhbEF1ZGlvRGVmYXVsdHM+KHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoLCBwcm9wZXJ0eTogSywgdmFsdWU6IF9TcGF0aWFsQXVkaW9TdWJOb2RlW0tdKTogdm9pZCB7XG4gICAgc3ViR3JhcGguY2FsbE9uU3ViTm9kZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4oQXVkaW9TdWJOb2RlLlNQQVRJQUwsIChub2RlKSA9PiB7XG4gICAgICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgeyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9hYnN0cmFjdEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvYXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IElTdGVyZW9BdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9TdGVyZW9BdWRpb0RlZmF1bHRzIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFN0ZXJlb0F1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvU3ViR3JhcGhcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9TdGVyZW9BdWRpb1N1Yk5vZGUgZXh0ZW5kcyBfQWJzdHJhY3RBdWRpb1N1Yk5vZGUge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIoQXVkaW9TdWJOb2RlLlNURVJFTywgZW5naW5lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcGFuOiBudW1iZXI7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogUGFydGlhbDxJU3RlcmVvQXVkaW9PcHRpb25zPik6IHZvaWQge1xuICAgICAgICB0aGlzLnBhbiA9IG9wdGlvbnMuc3RlcmVvUGFuID8/IF9TdGVyZW9BdWRpb0RlZmF1bHRzLnBhbjtcbiAgICB9XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfR2V0U3RlcmVvQXVkaW9TdWJOb2RlKHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoKTogTnVsbGFibGU8X1N0ZXJlb0F1ZGlvU3ViTm9kZT4ge1xuICAgIHJldHVybiBzdWJHcmFwaC5nZXRTdWJOb2RlPF9TdGVyZW9BdWRpb1N1Yk5vZGU+KEF1ZGlvU3ViTm9kZS5TVEVSRU8pO1xufVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX1NldFN0ZXJlb0F1ZGlvUHJvcGVydHk8SyBleHRlbmRzIGtleW9mIHR5cGVvZiBfU3RlcmVvQXVkaW9EZWZhdWx0cz4oc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgsIHByb3BlcnR5OiBLLCB2YWx1ZTogX1N0ZXJlb0F1ZGlvU3ViTm9kZVtLXSk6IHZvaWQge1xuICAgIHN1YkdyYXBoLmNhbGxPblN1Yk5vZGU8X1N0ZXJlb0F1ZGlvU3ViTm9kZT4oQXVkaW9TdWJOb2RlLlNURVJFTywgKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiLi4vLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlXCI7XG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uL3NwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlXCI7XG5cbmV4cG9ydCBjb25zdCBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMgPSB7XG4gICAgY29uZUlubmVyQW5nbGU6IDYuMjgzMTg1MzA3MTggYXMgbnVtYmVyLFxuICAgIGNvbmVPdXRlckFuZ2xlOiA2LjI4MzE4NTMwNzE4IGFzIG51bWJlcixcbiAgICBjb25lT3V0ZXJWb2x1bWU6IDAgYXMgbnVtYmVyLFxuICAgIGRpc3RhbmNlTW9kZWw6IFwibGluZWFyXCIgYXMgRGlzdGFuY2VNb2RlbFR5cGUsXG4gICAgbWF4RGlzdGFuY2U6IDEwMDAwIGFzIG51bWJlcixcbiAgICBtaW5EaXN0YW5jZTogMSBhcyBudW1iZXIsXG4gICAgb3JpZW50YXRpb246IFZlY3RvcjMuUmlnaHQoKSxcbiAgICBwYW5uaW5nTW9kZWw6IFwiZXF1YWxwb3dlclwiIGFzIFBhbm5pbmdNb2RlbFR5cGUsXG4gICAgcG9zaXRpb246IFZlY3RvcjMuWmVybygpLFxuICAgIHJvbGxvZmZGYWN0b3I6IDEgYXMgbnVtYmVyLFxuICAgIHJvdGF0aW9uOiBWZWN0b3IzLlplcm8oKSxcbiAgICByb3RhdGlvblF1YXRlcm5pb246IG5ldyBRdWF0ZXJuaW9uKCksXG59IGFzIGNvbnN0O1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHNwYXRpYWwgYXVkaW8uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNwYXRpYWxBdWRpb09wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSB1cGRhdGUgdGhlIHNwYXRpYWwgcHJvcGVydGllcyBvZiB0aGUgYXVkaW8gbm9kZS4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgICAqL1xuICAgIHNwYXRpYWxBdXRvVXBkYXRlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIGNvbmUgaW5uZXIgYW5nbGUsIGluIHJhZGlhbnMuIERlZmF1bHRzIHRvIDLPgC5cbiAgICAgKiAtIFdoZW4gdGhlIGxpc3RlbmVyIGlzIGluc2lkZSB0aGUgY29uZSBpbm5lciBhbmdsZSwgdGhlIHZvbHVtZSBpcyBhdCBpdHMgbWF4aW11bS5cbiAgICAgKi9cbiAgICBzcGF0aWFsQ29uZUlubmVyQW5nbGU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCBjb25lIG91dGVyIGFuZ2xlLCBpbiByYWRpYW5zLiBEZWZhdWx0cyB0byAyz4AuXG4gICAgICogLSBXaGVuIHRoZSBsaXN0ZW5lciBpcyBiZXR3ZWVuIHRoZSB0aGUgY29uZSBpbm5lciBhbmQgb3V0ZXIgYW5nbGVzLCB0aGUgdm9sdW1lIGZhZGVzIHRvIGl0cyBtaW5pbXVtIGFzIHRoZSBsaXN0ZW5lciBhcHByb2FjaGVzIHRoZSBvdXRlciBhbmdsZS5cbiAgICAgKiAtIFdoZW4gdGhlIGxpc3RlbmVyIGlzIG91dHNpZGUgdGhlIGNvbmUgb3V0ZXIgYW5nbGUsIHRoZSB2b2x1bWUgaXMgYXQgaXRzIG1pbmltdW0uXG4gICAgICovXG4gICAgc3BhdGlhbENvbmVPdXRlckFuZ2xlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiB2b2x1bWUgcmVkdWN0aW9uIG91dHNpZGUgdGhlIHtAbGluayBzcGF0aWFsQ29uZU91dGVyQW5nbGV9LiBEZWZhdWx0cyB0byAwLlxuICAgICAqL1xuICAgIHNwYXRpYWxDb25lT3V0ZXJWb2x1bWU6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgYWxnb3JpdGhtIHRvIHVzZSB0byByZWR1Y2UgdGhlIHZvbHVtZSBvZiB0aGUgYXVkaW8gc291cmNlIGFzIGl0IG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuIERlZmF1bHRzIHRvIFwiaW52ZXJzZVwiLlxuICAgICAqXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZTpcbiAgICAgKiAtIGBcImxpbmVhclwiYDogVGhlIHZvbHVtZSBpcyByZWR1Y2VkIGxpbmVhcmx5IGFzIHRoZSBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICAgKiAtIGBcImludmVyc2VcImA6IFRoZSB2b2x1bWUgaXMgcmVkdWNlZCBpbnZlcnNlbHkgYXMgdGhlIHNvdXJjZSBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyLlxuICAgICAqIC0gYFwiZXhwb25lbnRpYWxcImA6IFRoZSB2b2x1bWUgaXMgcmVkdWNlZCBleHBvbmVudGlhbGx5IGFzIHRoZSBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rIHNwYXRpYWxNYXhEaXN0YW5jZX1cbiAgICAgKiBAc2VlIHtAbGluayBzcGF0aWFsTWluRGlzdGFuY2V9XG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbFJvbGxvZmZGYWN0b3J9XG4gICAgICovXG4gICAgc3BhdGlhbERpc3RhbmNlTW9kZWw6IFwibGluZWFyXCIgfCBcImludmVyc2VcIiB8IFwiZXhwb25lbnRpYWxcIjtcbiAgICAvKipcbiAgICAgKiBFbmFibGUgc3BhdGlhbCBhdWRpby4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKiBXaGVuIHNldCB0byBgdHJ1ZWAsIHRoZSBhdWRpbyBub2RlJ3Mgc3BhdGlhbCBwcm9wZXJ0aWVzIHdpbGwgYmUgaW5pdGlhbGl6ZWQgb24gY3JlYXRpb24gYW5kIHRoZXJlIHdpbGwgYmUgbm9cbiAgICAgKiBkZWxheSB3aGVuIHNldHRpbmcgdGhlIGZpcnN0IHNwYXRpYWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBXaGVuIG5vdCBzcGVjaWZpZWQsIG9yIHNldCB0byBgZmFsc2VgLCB0aGUgYXVkaW8gbm9kZSdzIHNwYXRpYWwgcHJvcGVydGllcyB3aWxsIG5vdCBiZSBpbml0aWFsaXplZCBvbiBjcmVhdGlvblxuICAgICAqIGFuZCB0aGVyZSB3aWxsIGJlIGEgc21hbGwgZGVsYXkgd2hlbiBzZXR0aW5nIHRoZSBmaXJzdCBzcGF0aWFsIHZhbHVlLlxuICAgICAqXG4gICAgICogLSBUaGlzIG9wdGlvbiBpcyBpZ25vcmVkIGlmIGFueSBvdGhlciBzcGF0aWFsIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgKi9cbiAgICBzcGF0aWFsRW5hYmxlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBhdWRpbyBzb3VyY2UgYW5kIHRoZSBsaXN0ZW5lciwgYWZ0ZXIgd2hpY2ggdGhlIHZvbHVtZSBpcyBub3QgcmVkdWNlZCBhbnkgZnVydGhlci4gRGVmYXVsdHMgdG8gMTAwMDAuXG4gICAgICogLSBUaGlzIHZhbHVlIGlzIHVzZWQgb25seSB3aGVuIHRoZSB7QGxpbmsgc3BhdGlhbERpc3RhbmNlTW9kZWx9IGlzIHNldCB0byBgXCJsaW5lYXJcImAuXG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbERpc3RhbmNlTW9kZWx9XG4gICAgICovXG4gICAgc3BhdGlhbE1heERpc3RhbmNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gdXBkYXRlIHRpbWUgaW4gc2Vjb25kcyBvZiB0aGUgc3BhdGlhbGl6YXRpb24gaWYgaXQgaXMgYXR0YWNoZWQgdG8gYSBtZXNoIG9yIHRyYW5zZm9ybSBub2RlLiBEZWZhdWx0cyB0byBgMGAuXG4gICAgICogLSBUaGUgc3BhdGlhbGl6YXRpb24ncyBwb3NpdGlvbiBhbmQgcm90YXRpb24gd2lsbCBub3QgdXBkYXRlIGZhc3RlciB0aGFuIHRoaXMgdGltZSwgYnV0IHRoZXkgbWF5IHVwZGF0ZSBzbG93ZXIgZGVwZW5kaW5nIG9uIHRoZSBmcmFtZSByYXRlLlxuICAgICAqL1xuICAgIHNwYXRpYWxNaW5VcGRhdGVUaW1lOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgb3JpZW50YXRpb24gdXNlZCB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLiBEZWZhdWx0cyB0byAoMCwgMCwgLTEpLlxuICAgICAqL1xuICAgIHNwYXRpYWxPcmllbnRhdGlvbjogVmVjdG9yMztcbiAgICAvKipcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOlxuICAgICAqIC0gYFwiZXF1YWxwb3dlclwiYDogUmVwcmVzZW50cyB0aGUgZXF1YWwtcG93ZXIgcGFubmluZyBhbGdvcml0aG0sIGdlbmVyYWxseSByZWdhcmRlZCBhcyBzaW1wbGUgYW5kIGVmZmljaWVudC5cbiAgICAgKiAtIGBcIkhSVEZcImA6IFJlbmRlcnMgYSBzdGVyZW8gb3V0cHV0IG9mIGhpZ2hlciBxdWFsaXR5IHRoYW4gYFwiZXF1YWxwb3dlclwiYCDigJQgaXQgdXNlcyBhIGNvbnZvbHV0aW9uIHdpdGggbWVhc3VyZWQgaW1wdWxzZSByZXNwb25zZXMgZnJvbSBodW1hbiBzdWJqZWN0cy5cbiAgICAgKi9cbiAgICBzcGF0aWFsUGFubmluZ01vZGVsOiBcImVxdWFscG93ZXJcIiB8IFwiSFJURlwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIHBvc2l0aW9uLiBEZWZhdWx0cyB0byAoMCwgMCwgMCkuXG4gICAgICovXG4gICAgc3BhdGlhbFBvc2l0aW9uOiBWZWN0b3IzO1xuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSBmb3IgcmVkdWNpbmcgdm9sdW1lIGFzIHRoZSBhdWRpbyBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lciDigJMgaS5lLiB0aGUgZGlzdGFuY2UgdGhlIHZvbHVtZSByZWR1Y3Rpb24gc3RhcnRzIGF0LiBEZWZhdWx0cyB0byAxLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIGJ5IGFsbCBkaXN0YW5jZSBtb2RlbHMuXG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbERpc3RhbmNlTW9kZWx9XG4gICAgICovXG4gICAgc3BhdGlhbE1pbkRpc3RhbmNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogSG93IHF1aWNrbHkgdGhlIHZvbHVtZSBpcyByZWR1Y2VkIGFzIHRoZSBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lci4gRGVmYXVsdHMgdG8gMS5cbiAgICAgKiAtIFRoaXMgdmFsdWUgaXMgdXNlZCBieSBhbGwgZGlzdGFuY2UgbW9kZWxzLlxuICAgICAqIEBzZWUge0BsaW5rIHNwYXRpYWxEaXN0YW5jZU1vZGVsfVxuICAgICAqL1xuICAgIHNwYXRpYWxSb2xsb2ZmRmFjdG9yOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgcm90YXRpb24sIGFzIEV1bGVyIGFuZ2xlcy4gRGVmYXVsdHMgdG8gKDAsIDAsIDApLlxuICAgICAqL1xuICAgIHNwYXRpYWxSb3RhdGlvbjogVmVjdG9yMztcbiAgICAvKipcbiAgICAgKiBUaGUgc3BhdGlhbCByb3RhdGlvbiwgYXMgYSBxdWF0ZXJuaW9uLiBEZWZhdWx0cyB0byAoMCwgMCwgMCwgMSkuXG4gICAgICovXG4gICAgc3BhdGlhbFJvdGF0aW9uUXVhdGVybmlvbjogUXVhdGVybmlvbjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgc3BhdGlhbCBhdWRpbyBvcHRpb25zIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHNwYXRpYWwgYXVkaW8gb3B0aW9ucyBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyhvcHRpb25zOiBQYXJ0aWFsPElTcGF0aWFsQXVkaW9PcHRpb25zPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbEVuYWJsZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsQXV0b1VwZGF0ZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbENvbmVJbm5lckFuZ2xlICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsQ29uZU91dGVyQW5nbGUgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxDb25lT3V0ZXJWb2x1bWUgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxEaXN0YW5jZU1vZGVsICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsTWF4RGlzdGFuY2UgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxNaW5EaXN0YW5jZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbE1pblVwZGF0ZVRpbWUgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBvcHRpb25zLnNwYXRpYWxPcmllbnRhdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbFBhbm5pbmdNb2RlbCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbFBvc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsUm9sbG9mZkZhY3RvciAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIG9wdGlvbnMuc3BhdGlhbFJvdGF0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgb3B0aW9ucy5zcGF0aWFsUm90YXRpb25RdWF0ZXJuaW9uICE9PSB1bmRlZmluZWRcbiAgICApO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyB0aGUgYHNwYXRpYWxgIGF1ZGlvIHByb3BlcnR5IG9uIGEgc291bmQgb3IgYXVkaW8gYnVzLlxuICpcbiAqIEBzZWUge0BsaW5rIEF1ZGlvRW5naW5lVjIubGlzdGVuZXJ9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFNwYXRpYWxBdWRpbyB7XG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgY29uZSBpbm5lciBhbmdsZSwgaW4gcmFkaWFucy4gRGVmYXVsdHMgdG8gMs+ALlxuICAgICAqIC0gV2hlbiB0aGUgbGlzdGVuZXIgaXMgaW5zaWRlIHRoZSBjb25lIGlubmVyIGFuZ2xlLCB0aGUgdm9sdW1lIGlzIGF0IGl0cyBtYXhpbXVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lSW5uZXJBbmdsZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgY29uZSBvdXRlciBhbmdsZSwgaW4gcmFkaWFucy4gRGVmYXVsdHMgdG8gMs+ALlxuICAgICAqIC0gV2hlbiB0aGUgbGlzdGVuZXIgaXMgYmV0d2VlbiB0aGUgdGhlIGNvbmUgaW5uZXIgYW5kIG91dGVyIGFuZ2xlcywgdGhlIHZvbHVtZSBmYWRlcyB0byBpdHMgbWluaW11bSBhcyB0aGUgbGlzdGVuZXIgYXBwcm9hY2hlcyB0aGUgb3V0ZXIgYW5nbGUuXG4gICAgICogLSBXaGVuIHRoZSBsaXN0ZW5lciBpcyBvdXRzaWRlIHRoZSBjb25lIG91dGVyIGFuZ2xlLCB0aGUgdm9sdW1lIGlzIGF0IGl0cyBtaW5pbXVtLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjb25lT3V0ZXJBbmdsZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiB2b2x1bWUgcmVkdWN0aW9uIG91dHNpZGUgdGhlIHtAbGluayBjb25lT3V0ZXJBbmdsZX0uIERlZmF1bHRzIHRvIDAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGNvbmVPdXRlclZvbHVtZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFsZ29yaXRobSB0byB1c2UgdG8gcmVkdWNlIHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIHNvdXJjZSBhcyBpdCBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyLiBEZWZhdWx0cyB0byBcImludmVyc2VcIi5cbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICogLSBgXCJsaW5lYXJcImA6IFRoZSB2b2x1bWUgaXMgcmVkdWNlZCBsaW5lYXJseSBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAgICogLSBgXCJpbnZlcnNlXCJgOiBUaGUgdm9sdW1lIGlzIHJlZHVjZWQgaW52ZXJzZWx5IGFzIHRoZSBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICAgKiAtIGBcImV4cG9uZW50aWFsXCJgOiBUaGUgdm9sdW1lIGlzIHJlZHVjZWQgZXhwb25lbnRpYWxseSBhcyB0aGUgc291cmNlIG1vdmVzIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBzcGF0aWFsTWF4RGlzdGFuY2V9XG4gICAgICogQHNlZSB7QGxpbmsgc3BhdGlhbE1pbkRpc3RhbmNlfVxuICAgICAqIEBzZWUge0BsaW5rIHNwYXRpYWxSb2xsb2ZmRmFjdG9yfVxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBkaXN0YW5jZU1vZGVsOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCI7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBhdWRpbyBzb3VyY2UgaXMgYXR0YWNoZWQgdG8gYSBtZXNoIG9yIHRyYW5zZm9ybSBub2RlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpc0F0dGFjaGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYXVkaW8gc291cmNlIGFuZCB0aGUgbGlzdGVuZXIsIGFmdGVyIHdoaWNoIHRoZSB2b2x1bWUgaXMgbm90IHJlZHVjZWQgYW55IGZ1cnRoZXIuIERlZmF1bHRzIHRvIDEwMDAwLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIG9ubHkgd2hlbiB0aGUge0BsaW5rIGRpc3RhbmNlTW9kZWx9IGlzIHNldCB0byBgXCJsaW5lYXJcImAuXG4gICAgICogQHNlZSB7QGxpbmsgZGlzdGFuY2VNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWF4RGlzdGFuY2U6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSBmb3IgcmVkdWNpbmcgdm9sdW1lIGFzIHRoZSBhdWRpbyBzb3VyY2UgbW92ZXMgYXdheSBmcm9tIHRoZSBsaXN0ZW5lciDigJMgaS5lLiB0aGUgZGlzdGFuY2UgdGhlIHZvbHVtZSByZWR1Y3Rpb24gc3RhcnRzIGF0LiBEZWZhdWx0cyB0byAxLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIGJ5IGFsbCBkaXN0YW5jZSBtb2RlbHMuXG4gICAgICogQHNlZSB7QGxpbmsgZGlzdGFuY2VNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWluRGlzdGFuY2U6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHVwZGF0ZSB0aW1lIGluIHNlY29uZHMgb2YgdGhlIHNwYXRpYWxpemF0aW9uIGlmIGl0IGlzIGF0dGFjaGVkIHRvIGEgbWVzaCBvciB0cmFuc2Zvcm0gbm9kZS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgICAqIC0gVGhlIHNwYXRpYWxpemF0aW9uJ3MgcG9zaXRpb24gYW5kIHJvdGF0aW9uIHdpbGwgbm90IHVwZGF0ZSBmYXN0ZXIgdGhhbiB0aGlzIHRpbWUsIGJ1dCB0aGV5IG1heSB1cGRhdGUgc2xvd2VyIGRlcGVuZGluZyBvbiB0aGUgZnJhbWUgcmF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgbWluVXBkYXRlVGltZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgb3JpZW50YXRpb24gdXNlZCB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLiBEZWZhdWx0cyB0byAoMCwgMCwgLTEpLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBvcmllbnRhdGlvbjogVmVjdG9yMztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGF0aWFsIHBhbm5pbmcgbW9kZWwuIERlZmF1bHRzIHRvIFwiZXF1YWxwb3dlclwiLlxuICAgICAqXG4gICAgICogUG9zc2libGUgdmFsdWVzIGFyZTpcbiAgICAgKiAtIGBcImVxdWFscG93ZXJcImA6IFJlcHJlc2VudHMgdGhlIGVxdWFsLXBvd2VyIHBhbm5pbmcgYWxnb3JpdGhtLCBnZW5lcmFsbHkgcmVnYXJkZWQgYXMgc2ltcGxlIGFuZCBlZmZpY2llbnQuXG4gICAgICogLSBgXCJIUlRGXCJgOlJlbmRlcnMgYSBzdGVyZW8gb3V0cHV0IG9mIGhpZ2hlciBxdWFsaXR5IHRoYW4gYFwiZXF1YWxwb3dlclwiYCDigJQgaXQgdXNlcyBhIGNvbnZvbHV0aW9uIHdpdGggbWVhc3VyZWQgaW1wdWxzZSByZXNwb25zZXMgZnJvbSBodW1hbiBzdWJqZWN0cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcGFubmluZ01vZGVsOiBcImVxdWFscG93ZXJcIiB8IFwiSFJURlwiO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgcG9zaXRpb24uIERlZmF1bHRzIHRvICgwLCAwLCAwKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgcG9zaXRpb246IFZlY3RvcjM7XG5cbiAgICAvKipcbiAgICAgKiBIb3cgcXVpY2tseSB0aGUgdm9sdW1lIGlzIHJlZHVjZWQgYXMgdGhlIHNvdXJjZSBtb3ZlcyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyLiBEZWZhdWx0cyB0byAxLlxuICAgICAqIC0gVGhpcyB2YWx1ZSBpcyB1c2VkIGJ5IGFsbCBkaXN0YW5jZSBtb2RlbHMuXG4gICAgICogQHNlZSB7QGxpbmsgZGlzdGFuY2VNb2RlbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgcm9sbG9mZkZhY3RvcjogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgcm90YXRpb24gdXNlZCB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLiBEZWZhdWx0cyB0byAoMCwgMCwgMCkuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHJvdGF0aW9uOiBWZWN0b3IzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwYXRpYWwgcm90YXRpb24gcXVhdGVybmlvbiB1c2VkIHRvIGRldGVybWluZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuIERlZmF1bHRzIHRvICgwLCAwLCAwLCAxKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3Qgcm90YXRpb25RdWF0ZXJuaW9uOiBRdWF0ZXJuaW9uO1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdG8gYSBzY2VuZSBub2RlLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYXV0b21hdGljYWxseSBiZWZvcmUgYXR0YWNoaW5nIHRvIHRoZSBnaXZlbiBzY2VuZSBub2RlLlxuICAgICAqIElmIGBzY2VuZU5vZGVgIGlzIGBudWxsYCBpdCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGBkZXRhY2goKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NlbmVOb2RlIFRoZSBzY2VuZSBub2RlIHRvIGF0dGFjaCB0bywgb3IgYG51bGxgIHRvIGRldGFjaC5cbiAgICAgKiBAcGFyYW0gdXNlQm91bmRpbmdCb3ggV2hldGhlciB0byB1c2UgdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbm9kZSBmb3IgcG9zaXRpb25pbmcuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUeXBlIFdoZXRoZXIgdG8gYXR0YWNoIHRvIHRoZSBub2RlJ3MgcG9zaXRpb24gYW5kL29yIHJvdGF0aW9uLiBEZWZhdWx0cyB0byBgUG9zaXRpb25BbmRSb3RhdGlvbmAuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IGF0dGFjaChzY2VuZU5vZGU6IE51bGxhYmxlPE5vZGU+LCB1c2VCb3VuZGluZ0JveD86IGJvb2xlYW4sIGF0dGFjaG1lbnRUeXBlPzogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgZnJvbSB0aGUgc2NlbmUgbm9kZSBpZiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZGV0YWNoKCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBhbmQgcm90YXRpb24gb2YgdGhlIGFzc29jaWF0ZWQgYXVkaW8gZW5naW5lIG9iamVjdCBpbiB0aGUgYXVkaW8gcmVuZGVyaW5nIGdyYXBoLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBjYWxsZWQgYXV0b21hdGljYWxseSBieSBkZWZhdWx0IGFuZCBvbmx5IG5lZWRzIHRvIGJlIGNhbGxlZCBtYW51YWxseSBpZiBhdXRvbWF0aWMgdXBkYXRlcyBhcmUgZGlzYWJsZWQuXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZSgpOiB2b2lkO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGRpc3Bvc2UoKTogdm9pZDtcbn1cbiIsImV4cG9ydCBjb25zdCBfU3RlcmVvQXVkaW9EZWZhdWx0cyA9IHtcbiAgICBwYW46IDAgYXMgbnVtYmVyLFxufSBhcyBjb25zdDtcblxuLyoqICovXG5leHBvcnQgaW50ZXJmYWNlIElTdGVyZW9BdWRpb09wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIEVuYWJsZSBzdGVyZW8uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqXG4gICAgICogV2hlbiBzZXQgdG8gYHRydWVgLCB0aGUgYXVkaW8gbm9kZSdzIHN0ZXJlbyBwcm9wZXJ0aWVzIHdpbGwgYmUgaW5pdGlhbGl6ZWQgb24gY3JlYXRpb24gYW5kIHRoZXJlIHdpbGwgYmUgbm9cbiAgICAgKiBkZWxheSB3aGVuIHNldHRpbmcgdGhlIGZpcnN0IHN0ZXJlbyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFdoZW4gbm90IHNwZWNpZmllZCwgb3Igc2V0IHRvIGBmYWxzZWAsIHRoZSBhdWRpbyBub2RlJ3Mgc3RlcmVvIHByb3BlcnRpZXMgd2lsbCBub3QgYmUgaW5pdGlhbGl6ZWQgb24gY3JlYXRpb25cbiAgICAgKiBhbmQgdGhlcmUgd2lsbCBiZSBhIHNtYWxsIGRlbGF5IHdoZW4gc2V0dGluZyB0aGUgZmlyc3Qgc3RlcmVvIHZhbHVlLlxuICAgICAqXG4gICAgICogLSBUaGlzIG9wdGlvbiBpcyBpZ25vcmVkIGlmIGFueSBvdGhlciBzdGVyZW8gb3B0aW9ucyBhcmUgc2V0LlxuICAgICAqL1xuICAgIHN0ZXJlb0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHN0ZXJlbyBwYW4gZnJvbSAtMSAobGVmdCkgdG8gMSAocmlnaHQpLiBEZWZhdWx0cyB0byAwLlxuICAgICAqL1xuICAgIHN0ZXJlb1BhbjogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBzdGVyZW8gYXVkaW8gb3B0aW9ucyB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiBzdGVyZW8gYXVkaW8gb3B0aW9ucyBhcmUgZGVmaW5lZCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfSGFzU3RlcmVvQXVkaW9PcHRpb25zKG9wdGlvbnM6IFBhcnRpYWw8SVN0ZXJlb0F1ZGlvT3B0aW9ucz4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5zdGVyZW9FbmFibGVkIHx8IG9wdGlvbnMuc3RlcmVvUGFuICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIHRoZSBgc3RlcmVvYCBhdWRpbyBwcm9wZXJ0eSBvbiBhIHNvdW5kIG9yIGF1ZGlvIGJ1cy5cbiAqXG4gKiBAc2VlIHtAbGluayBBdWRpb0VuZ2luZVYyLmxpc3RlbmVyfVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTdGVyZW9BdWRpbyB7XG4gICAgLyoqXG4gICAgICogVGhlIHN0ZXJlbyBwYW4gZnJvbSAtMSAobGVmdCkgdG8gMSAocmlnaHQpLiBEZWZhdWx0cyB0byAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwYW46IG51bWJlcjtcbn1cbiIsImltcG9ydCB0eXBlIHsgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCIuLi8uLi8uLi9NYXRocy9tYXRoLnZlY3RvclwiO1xuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFNwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlIH0gZnJvbSBcIi4uLy4uL3NwYXRpYWxBdWRpb0F0dGFjaG1lbnRUeXBlXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGggfSBmcm9tIFwiLi4vc3ViTm9kZXMvYWJzdHJhY3RBdWRpb1N1YkdyYXBoXCI7XG5pbXBvcnQgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vc3ViTm9kZXMvYXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9TcGF0aWFsQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uL3N1Yk5vZGVzL3NwYXRpYWxBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlLCBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkgfSBmcm9tIFwiLi4vc3ViTm9kZXMvc3BhdGlhbEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX1NwYXRpYWxBdWRpb0RlZmF1bHRzLCBBYnN0cmFjdFNwYXRpYWxBdWRpbyB9IGZyb20gXCIuL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfU3BhdGlhbEF1ZGlvIGV4dGVuZHMgQWJzdHJhY3RTcGF0aWFsQXVkaW8ge1xuICAgIHByaXZhdGUgX2NvbmVJbm5lckFuZ2xlOiBudW1iZXIgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZUlubmVyQW5nbGU7XG4gICAgcHJpdmF0ZSBfY29uZU91dGVyQW5nbGU6IG51bWJlciA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5jb25lT3V0ZXJBbmdsZTtcbiAgICBwcml2YXRlIF9jb25lT3V0ZXJWb2x1bWU6IG51bWJlciA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5jb25lT3V0ZXJWb2x1bWU7XG4gICAgcHJpdmF0ZSBfZGlzdGFuY2VNb2RlbDogRGlzdGFuY2VNb2RlbFR5cGUgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuZGlzdGFuY2VNb2RlbDtcbiAgICBwcml2YXRlIF9tYXhEaXN0YW5jZTogbnVtYmVyID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm1heERpc3RhbmNlO1xuICAgIHByaXZhdGUgX21pbkRpc3RhbmNlOiBudW1iZXIgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMubWluRGlzdGFuY2U7XG4gICAgcHJpdmF0ZSBfb3JpZW50YXRpb246IFZlY3RvcjM7XG4gICAgcHJpdmF0ZSBfcGFubmluZ01vZGVsOiBQYW5uaW5nTW9kZWxUeXBlID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnBhbm5pbmdNb2RlbDtcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yMztcbiAgICBwcml2YXRlIF9yb2xsb2ZmRmFjdG9yOiBudW1iZXIgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm9sbG9mZkZhY3RvcjtcbiAgICBwcml2YXRlIF9yb3RhdGlvbjogVmVjdG9yMztcbiAgICBwcml2YXRlIF9yb3RhdGlvblF1YXRlcm5pb246IFF1YXRlcm5pb247XG4gICAgcHJpdmF0ZSBfc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGg7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN1YkdyYXBoOiBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3Qgc3ViTm9kZSA9IF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlKHN1YkdyYXBoKTtcbiAgICAgICAgaWYgKHN1Yk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gc3ViTm9kZS5vcmllbnRhdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBzdWJOb2RlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHN1Yk5vZGUucm90YXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uUXVhdGVybmlvbiA9IHN1Yk5vZGUucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5vcmllbnRhdGlvbi5jbG9uZSgpO1xuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnJvdGF0aW9uLmNsb25lKCk7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvblF1YXRlcm5pb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgICAgIHN1YkdyYXBoLmNyZWF0ZUFuZEFkZFN1Yk5vZGVBc3luYyhBdWRpb1N1Yk5vZGUuU1BBVElBTCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IHN1YkdyYXBoO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICB0aGlzLl9zdWJHcmFwaC5yZW1vdmVTdWJOb2RlQXN5bmMoX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUodGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBjb25lSW5uZXJBbmdsZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZUlubmVyQW5nbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjb25lSW5uZXJBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbmVJbm5lckFuZ2xlID0gdmFsdWU7XG4gICAgICAgIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJjb25lSW5uZXJBbmdsZVwiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgY29uZU91dGVyQW5nbGUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmVPdXRlckFuZ2xlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29uZU91dGVyQW5nbGUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jb25lT3V0ZXJBbmdsZSA9IHZhbHVlO1xuICAgICAgICBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwiY29uZU91dGVyQW5nbGVcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGNvbmVPdXRlclZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZU91dGVyVm9sdW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY29uZU91dGVyVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29uZU91dGVyVm9sdW1lID0gdmFsdWU7XG4gICAgICAgIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJjb25lT3V0ZXJWb2x1bWVcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGRpc3RhbmNlTW9kZWwoKTogRGlzdGFuY2VNb2RlbFR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzdGFuY2VNb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRpc3RhbmNlTW9kZWwodmFsdWU6IERpc3RhbmNlTW9kZWxUeXBlKSB7XG4gICAgICAgIHRoaXMuX2Rpc3RhbmNlTW9kZWwgPSB2YWx1ZTtcbiAgICAgICAgX1NldFNwYXRpYWxBdWRpb1Byb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcImRpc3RhbmNlTW9kZWxcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5nZXRTdWJOb2RlPF9TcGF0aWFsQXVkaW9TdWJOb2RlPihBdWRpb1N1Yk5vZGUuU1BBVElBTCk/LmlzQXR0YWNoZWQgPz8gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgbWF4RGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heERpc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4RGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPD0gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSAwLjAwMDAwMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21heERpc3RhbmNlID0gdmFsdWU7XG4gICAgICAgIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJtYXhEaXN0YW5jZVwiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgbWluRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbkRpc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluRGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5EaXN0YW5jZSA9IHZhbHVlO1xuICAgICAgICBfU2V0U3BhdGlhbEF1ZGlvUHJvcGVydHkodGhpcy5fc3ViR3JhcGgsIFwibWluRGlzdGFuY2VcIiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IG9yaWVudGF0aW9uKCk6IFZlY3RvcjMge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvcmllbnRhdGlvbih2YWx1ZTogVmVjdG9yMykge1xuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLl91cGRhdGVSb3RhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHBhbm5pbmdNb2RlbCgpOiBQYW5uaW5nTW9kZWxUeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bhbm5pbmdNb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhbm5pbmdNb2RlbCh2YWx1ZTogUGFubmluZ01vZGVsVHlwZSkge1xuICAgICAgICB0aGlzLl9wYW5uaW5nTW9kZWwgPSB2YWx1ZTtcbiAgICAgICAgX1NldFNwYXRpYWxBdWRpb1Byb3BlcnR5KHRoaXMuX3N1YkdyYXBoLCBcInBhbm5pbmdNb2RlbFwiLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgcG9zaXRpb24oKTogVmVjdG9yMyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBvc2l0aW9uKHZhbHVlOiBWZWN0b3IzKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgcm9sbG9mZkZhY3RvcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sbG9mZkZhY3RvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHJvbGxvZmZGYWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yb2xsb2ZmRmFjdG9yID0gdmFsdWU7XG4gICAgICAgIF9TZXRTcGF0aWFsQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJyb2xsb2ZmRmFjdG9yXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCByb3RhdGlvbigpOiBWZWN0b3IzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcm90YXRpb24odmFsdWU6IFZlY3RvcjMpIHtcbiAgICAgICAgdGhpcy5fcm90YXRpb24gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUm90YXRpb24oKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCByb3RhdGlvblF1YXRlcm5pb24oKTogUXVhdGVybmlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGlvblF1YXRlcm5pb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCByb3RhdGlvblF1YXRlcm5pb24odmFsdWU6IFF1YXRlcm5pb24pIHtcbiAgICAgICAgdGhpcy5fcm90YXRpb25RdWF0ZXJuaW9uID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdG8gYSBzY2VuZSBub2RlLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYXV0b21hdGljYWxseSBiZWZvcmUgYXR0YWNoaW5nIHRvIHRoZSBnaXZlbiBzY2VuZSBub2RlLlxuICAgICAqIElmIGBzY2VuZU5vZGVgIGlzIGBudWxsYCBpdCBpcyB0aGUgc2FtZSBhcyBjYWxsaW5nIGBkZXRhY2goKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NlbmVOb2RlIFRoZSBzY2VuZSBub2RlIHRvIGF0dGFjaCB0bywgb3IgYG51bGxgIHRvIGRldGFjaC5cbiAgICAgKiBAcGFyYW0gdXNlQm91bmRpbmdCb3ggV2hldGhlciB0byB1c2UgdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbm9kZSBmb3IgcG9zaXRpb25pbmcuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUeXBlIFdoZXRoZXIgdG8gYXR0YWNoIHRvIHRoZSBub2RlJ3MgcG9zaXRpb24gYW5kL29yIHJvdGF0aW9uLiBEZWZhdWx0cyB0byBgUG9zaXRpb25BbmRSb3RhdGlvbmAuXG4gICAgICovXG4gICAgcHVibGljIGF0dGFjaChzY2VuZU5vZGU6IE51bGxhYmxlPE5vZGU+LCB1c2VCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlLCBhdHRhY2htZW50VHlwZTogU3BhdGlhbEF1ZGlvQXR0YWNobWVudFR5cGUgPSBTcGF0aWFsQXVkaW9BdHRhY2htZW50VHlwZS5Qb3NpdGlvbkFuZFJvdGF0aW9uKTogdm9pZCB7XG4gICAgICAgIF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlKHRoaXMuX3N1YkdyYXBoKT8uYXR0YWNoKHNjZW5lTm9kZSwgdXNlQm91bmRpbmdCb3gsIGF0dGFjaG1lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2hlcyBmcm9tIHRoZSBzY2VuZSBub2RlIGlmIGF0dGFjaGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXRhY2goKTogdm9pZCB7XG4gICAgICAgIF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlKHRoaXMuX3N1YkdyYXBoKT8uZGV0YWNoKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN1Yk5vZGUgPSBfR2V0U3BhdGlhbEF1ZGlvU3ViTm9kZSh0aGlzLl9zdWJHcmFwaCk7XG5cbiAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3ViTm9kZS5pc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICBzdWJOb2RlLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oc3ViTm9kZSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVSb3RhdGlvbihzdWJOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uKHN1Yk5vZGU6IE51bGxhYmxlPF9TcGF0aWFsQXVkaW9TdWJOb2RlPiA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICBzdWJOb2RlID0gX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUodGhpcy5fc3ViR3JhcGgpO1xuXG4gICAgICAgICAgICBpZiAoIXN1Yk5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHN1Yk5vZGUucG9zaXRpb247XG4gICAgICAgIGlmICghcG9zaXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5fcG9zaXRpb24pKSB7XG4gICAgICAgICAgICBzdWJOb2RlLnBvc2l0aW9uLmNvcHlGcm9tKHRoaXMuX3Bvc2l0aW9uKTtcbiAgICAgICAgICAgIHN1Yk5vZGUuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVSb3RhdGlvbihzdWJOb2RlOiBOdWxsYWJsZTxfU3BhdGlhbEF1ZGlvU3ViTm9kZT4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGlmICghc3ViTm9kZSkge1xuICAgICAgICAgICAgc3ViTm9kZSA9IF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlKHRoaXMuX3N1YkdyYXBoKTtcblxuICAgICAgICAgICAgaWYgKCFzdWJOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWJOb2RlLnJvdGF0aW9uUXVhdGVybmlvbi5lcXVhbHNXaXRoRXBzaWxvbih0aGlzLl9yb3RhdGlvblF1YXRlcm5pb24pKSB7XG4gICAgICAgICAgICBzdWJOb2RlLnJvdGF0aW9uUXVhdGVybmlvbi5jb3B5RnJvbSh0aGlzLl9yb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgICAgICAgc3ViTm9kZS5fdXBkYXRlUm90YXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX29yaWVudGF0aW9uLmNvcHlGcm9tKHN1Yk5vZGUub3JpZW50YXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fcm90YXRpb24uY29weUZyb20oc3ViTm9kZS5yb3RhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN1Yk5vZGUucm90YXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5fcm90YXRpb24pKSB7XG4gICAgICAgICAgICBzdWJOb2RlLnJvdGF0aW9uLmNvcHlGcm9tKHRoaXMuX3JvdGF0aW9uKTtcbiAgICAgICAgICAgIHN1Yk5vZGUuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9vcmllbnRhdGlvbi5jb3B5RnJvbShzdWJOb2RlLm9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uUXVhdGVybmlvbi5jb3B5RnJvbShzdWJOb2RlLnJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN1Yk5vZGUub3JpZW50YXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5fb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICBzdWJOb2RlLm9yaWVudGF0aW9uLmNvcHlGcm9tKHRoaXMuX29yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHN1Yk5vZGUuX3VwZGF0ZVJvdGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbi5jb3B5RnJvbShzdWJOb2RlLnJvdGF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uUXVhdGVybmlvbi5jb3B5RnJvbShzdWJOb2RlLnJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBfU3RlcmVvQXVkaW9EZWZhdWx0cywgQWJzdHJhY3RTdGVyZW9BdWRpbyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHR5cGUgeyBfQWJzdHJhY3RBdWRpb1N1YkdyYXBoIH0gZnJvbSBcIi4uL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NldFN0ZXJlb0F1ZGlvUHJvcGVydHkgfSBmcm9tIFwiLi4vc3ViTm9kZXMvc3RlcmVvQXVkaW9TdWJOb2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfU3RlcmVvQXVkaW8gZXh0ZW5kcyBBYnN0cmFjdFN0ZXJlb0F1ZGlvIHtcbiAgICBwcml2YXRlIF9wYW46IG51bWJlciA9IF9TdGVyZW9BdWRpb0RlZmF1bHRzLnBhbjtcbiAgICBwcml2YXRlIF9zdWJHcmFwaDogX0Fic3RyYWN0QXVkaW9TdWJHcmFwaDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc3ViR3JhcGggPSBzdWJHcmFwaDtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBwYW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBhbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhbiA9IHZhbHVlO1xuICAgICAgICBfU2V0U3RlcmVvQXVkaW9Qcm9wZXJ0eSh0aGlzLl9zdWJHcmFwaCwgXCJwYW5cIiwgdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1hdHJpeCwgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCIuLi8uLi8uLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBfU3BhdGlhbEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3NwYXRpYWxBdWRpb1N1Yk5vZGVcIjtcclxuaW1wb3J0IHsgX1NwYXRpYWxBdWRpb0RlZmF1bHRzIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xyXG5pbXBvcnQgeyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuLi93ZWJBdWRpb0VuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSB9IGZyb20gXCIuLi93ZWJBdWRpb05vZGVcIjtcclxuXHJcbmNvbnN0IFRtcE1hdHJpeCA9IE1hdHJpeC5aZXJvKCk7XHJcbmNvbnN0IFRtcFF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xyXG5cclxuZnVuY3Rpb24gRDJyKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcclxufVxyXG5cclxuZnVuY3Rpb24gUjJkKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHJhZGlhbnMgKiAxODApIC8gTWF0aC5QSTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIF9DcmVhdGVTcGF0aWFsQXVkaW9TdWJOb2RlQXN5bmMoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpOiBQcm9taXNlPF9TcGF0aWFsQXVkaW9TdWJOb2RlPiB7XHJcbiAgICByZXR1cm4gbmV3IF9TcGF0aWFsV2ViQXVkaW9TdWJOb2RlKGVuZ2luZSk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIF9TcGF0aWFsV2ViQXVkaW9TdWJOb2RlIGV4dGVuZHMgX1NwYXRpYWxBdWRpb1N1Yk5vZGUge1xyXG4gICAgcHJpdmF0ZSBfbGFzdE9yaWVudGF0aW9uOiBWZWN0b3IzID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBwcml2YXRlIF9sYXN0UG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIHByaXZhdGUgX2xhc3RSb3RhdGlvbjogVmVjdG9yMyA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgcHJpdmF0ZSBfbGFzdFJvdGF0aW9uUXVhdGVybmlvbjogUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvblg6IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX29yaWVudGF0aW9uWTogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfb3JpZW50YXRpb25aOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblg6IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uWTogX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25aOiBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvcmllbnRhdGlvbjogVmVjdG9yMyA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5vcmllbnRhdGlvbi5jbG9uZSgpO1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcm90YXRpb246IFZlY3RvcjMgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb24uY2xvbmUoKTtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSByb3RhdGlvblF1YXRlcm5pb246IFF1YXRlcm5pb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5vZGU6IFBhbm5lck5vZGU7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKSB7XHJcbiAgICAgICAgc3VwZXIoZW5naW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbmV3IFBhbm5lck5vZGUoZW5naW5lLl9hdWRpb0NvbnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvblggPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgdGhpcy5ub2RlLm9yaWVudGF0aW9uWCk7XHJcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb25ZID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIHRoaXMubm9kZS5vcmllbnRhdGlvblkpO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uWiA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCB0aGlzLm5vZGUub3JpZW50YXRpb25aKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25YID0gbmV3IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudChlbmdpbmUsIHRoaXMubm9kZS5wb3NpdGlvblgpO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWSA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCB0aGlzLm5vZGUucG9zaXRpb25ZKTtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvblogPSBuZXcgX1dlYkF1ZGlvUGFyYW1ldGVyQ29tcG9uZW50KGVuZ2luZSwgdGhpcy5ub2RlLnBvc2l0aW9uWik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvblguZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uWS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb25aLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvblguZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25aLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbmVJbm5lckFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEQycih0aGlzLm5vZGUuY29uZUlubmVyQW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY29uZUlubmVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5jb25lSW5uZXJBbmdsZSA9IFIyZCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCBjb25lT3V0ZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBEMnIodGhpcy5ub2RlLmNvbmVPdXRlckFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNvbmVPdXRlckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29uZU91dGVyQW5nbGUgPSBSMmQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgY29uZU91dGVyVm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jb25lT3V0ZXJHYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY29uZU91dGVyVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29uZU91dGVyR2FpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlzdGFuY2VNb2RlbCgpOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZGlzdGFuY2VNb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGRpc3RhbmNlTW9kZWwodmFsdWU6IFwibGluZWFyXCIgfCBcImludmVyc2VcIiB8IFwiZXhwb25lbnRpYWxcIikge1xyXG4gICAgICAgIHRoaXMubm9kZS5kaXN0YW5jZU1vZGVsID0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIFdpZ2dsZSB0aGUgbWF4IGRpc3RhbmNlIHRvIG1ha2UgdGhlIGNoYW5nZSB0YWtlIGVmZmVjdC5cclxuICAgICAgICBjb25zdCBtYXhEaXN0YW5jZSA9IHRoaXMubm9kZS5tYXhEaXN0YW5jZTtcclxuICAgICAgICB0aGlzLm5vZGUubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZSArIDAuMDAxO1xyXG4gICAgICAgIHRoaXMubm9kZS5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgbWluRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnJlZkRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWluRGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZWZEaXN0YW5jZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF4RGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLm1heERpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWF4RGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5tYXhEaXN0YW5jZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgcGFubmluZ01vZGVsKCk6IFwiZXF1YWxwb3dlclwiIHwgXCJIUlRGXCIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucGFubmluZ01vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcGFubmluZ01vZGVsKHZhbHVlOiBcImVxdWFscG93ZXJcIiB8IFwiSFJURlwiKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhbm5pbmdNb2RlbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9sbG9mZkZhY3RvcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucm9sbG9mZkZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJvbGxvZmZGYWN0b3IodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5yb2xsb2ZmRmFjdG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCk6IEF1ZGlvTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCk6IEF1ZGlvTm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3VwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0UG9zaXRpb24uZXF1YWxzV2l0aEVwc2lsb24odGhpcy5wb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25YLnRhcmdldFZhbHVlID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uWS50YXJnZXRWYWx1ZSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbloudGFyZ2V0VmFsdWUgPSB0aGlzLnBvc2l0aW9uLno7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RQb3NpdGlvbi5jb3B5RnJvbSh0aGlzLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3VwZGF0ZVJvdGF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByb3RhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9sYXN0Um90YXRpb25RdWF0ZXJuaW9uLmVxdWFsc1dpdGhFcHNpbG9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKSkge1xyXG4gICAgICAgICAgICBUbXBRdWF0ZXJuaW9uLmNvcHlGcm9tKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFJvdGF0aW9uUXVhdGVybmlvbi5jb3B5RnJvbSh0aGlzLnJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIHJvdGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2xhc3RSb3RhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbih0aGlzLnJvdGF0aW9uKSkge1xyXG4gICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21FdWxlckFuZ2xlc1RvUmVmKHRoaXMucm90YXRpb24ueCwgdGhpcy5yb3RhdGlvbi55LCB0aGlzLnJvdGF0aW9uLnosIFRtcFF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0Um90YXRpb24uY29weUZyb20odGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIHJvdGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdE9yaWVudGF0aW9uLmVxdWFsc1dpdGhFcHNpbG9uKHRoaXMub3JpZW50YXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyb3RhdGVkKSB7XHJcbiAgICAgICAgICAgIE1hdHJpeC5Gcm9tUXVhdGVybmlvblRvUmVmKFRtcFF1YXRlcm5pb24sIFRtcE1hdHJpeCk7XHJcbiAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtTm9ybWFsVG9SZWYoVmVjdG9yMy5SaWdodFJlYWRPbmx5LCBUbXBNYXRyaXgsIHRoaXMub3JpZW50YXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb25YLnRhcmdldFZhbHVlID0gdGhpcy5vcmllbnRhdGlvbi54O1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uWS50YXJnZXRWYWx1ZSA9IHRoaXMub3JpZW50YXRpb24ueTtcclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbloudGFyZ2V0VmFsdWUgPSB0aGlzLm9yaWVudGF0aW9uLno7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXHJcbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY29ubmVjdChub2RlLl9pbk5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xyXG5cclxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiX1NwYXRpYWxXZWJBdWRpb1N1Yk5vZGVcIjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBfU3RlcmVvQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvc3RlcmVvQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy93ZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudFwiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi4vd2ViQXVkaW9FbmdpbmVcIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvSW5Ob2RlIH0gZnJvbSBcIi4uL3dlYkF1ZGlvTm9kZVwiO1xuXG4vKiogQGludGVybmFsICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBfQ3JlYXRlU3RlcmVvQXVkaW9TdWJOb2RlQXN5bmMoZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUpOiBQcm9taXNlPF9TdGVyZW9BdWRpb1N1Yk5vZGU+IHtcbiAgICByZXR1cm4gbmV3IF9TdGVyZW9XZWJBdWRpb1N1Yk5vZGUoZW5naW5lKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9TdGVyZW9XZWJBdWRpb1N1Yk5vZGUgZXh0ZW5kcyBfU3RlcmVvQXVkaW9TdWJOb2RlIHtcbiAgICBwcml2YXRlIF9wYW46IF9XZWJBdWRpb1BhcmFtZXRlckNvbXBvbmVudDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlYWRvbmx5IG5vZGU6IFN0ZXJlb1Bhbm5lck5vZGU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lKSB7XG4gICAgICAgIHN1cGVyKGVuZ2luZSk7XG5cbiAgICAgICAgdGhpcy5ub2RlID0gbmV3IFN0ZXJlb1Bhbm5lck5vZGUoZW5naW5lLl9hdWRpb0NvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuX3BhbiA9IG5ldyBfV2ViQXVkaW9QYXJhbWV0ZXJDb21wb25lbnQoZW5naW5lLCB0aGlzLm5vZGUucGFuKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9wYW4uZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHBhbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFuLnRhcmdldFZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2V0IHBhbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3Bhbi50YXJnZXRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9pbk5vZGUoKTogQXVkaW9Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfb3V0Tm9kZSgpOiBBdWRpb05vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIl9TdGVyZW9XZWJBdWRpb1N1Yk5vZGVcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IF9BYnN0cmFjdEF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJOb2Rlcy9hdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB7IF9HZXRTcGF0aWFsQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvc3BhdGlhbEF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX0dldFN0ZXJlb0F1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL3N0ZXJlb0F1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJVm9sdW1lQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvdm9sdW1lQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfR2V0Vm9sdW1lQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViTm9kZXMvdm9sdW1lQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgdHlwZSB7IElTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IElTdGVyZW9BdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW9cIjtcbmltcG9ydCB7IF9IYXNTdGVyZW9BdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3RlcmVvQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvT3V0Tm9kZSwgSVdlYkF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuLi93ZWJBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgX1NwYXRpYWxXZWJBdWRpb1N1Yk5vZGUgfSBmcm9tIFwiLi9zcGF0aWFsV2ViQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfQ3JlYXRlU3BhdGlhbEF1ZGlvU3ViTm9kZUFzeW5jIH0gZnJvbSBcIi4vc3BhdGlhbFdlYkF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBfU3RlcmVvV2ViQXVkaW9TdWJOb2RlIH0gZnJvbSBcIi4vc3RlcmVvV2ViQXVkaW9TdWJOb2RlXCI7XG5pbXBvcnQgeyBfQ3JlYXRlU3RlcmVvQXVkaW9TdWJOb2RlQXN5bmMgfSBmcm9tIFwiLi9zdGVyZW9XZWJBdWRpb1N1Yk5vZGVcIjtcbmltcG9ydCB0eXBlIHsgX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZSB9IGZyb20gXCIuL3ZvbHVtZVdlYkF1ZGlvU3ViTm9kZVwiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvQmFzZVN1YkdyYXBoIH0gZnJvbSBcIi4vd2ViQXVkaW9CYXNlU3ViR3JhcGhcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGludGVyZmFjZSBJV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoT3B0aW9ucyBleHRlbmRzIElTcGF0aWFsQXVkaW9PcHRpb25zLCBJU3RlcmVvQXVkaW9PcHRpb25zLCBJVm9sdW1lQXVkaW9PcHRpb25zIHt9XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIGV4dGVuZHMgX1dlYkF1ZGlvQmFzZVN1YkdyYXBoIHtcbiAgICBwcml2YXRlIF9yb290Tm9kZTogTnVsbGFibGU8R2Fpbk5vZGU+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgX3Vwc3RyZWFtTm9kZXM6IE51bGxhYmxlPFNldDxBYnN0cmFjdEF1ZGlvTm9kZT4+O1xuXG4gICAgcHJvdGVjdGVkIF9pbnB1dE5vZGU6IE51bGxhYmxlPEF1ZGlvTm9kZT4gPSBudWxsO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBpbml0QXN5bmMob3B0aW9uczogUGFydGlhbDxJV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgc3VwZXIuaW5pdEFzeW5jKG9wdGlvbnMpO1xuXG4gICAgICAgIGxldCBoYXNTcGF0aWFsT3B0aW9ucyA9IGZhbHNlO1xuICAgICAgICBsZXQgaGFzU3RlcmVvT3B0aW9ucyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICgoaGFzU3BhdGlhbE9wdGlvbnMgPSBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyhvcHRpb25zKSkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlQW5kQWRkU3ViTm9kZUFzeW5jKEF1ZGlvU3ViTm9kZS5TUEFUSUFMKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGhhc1N0ZXJlb09wdGlvbnMgPSBfSGFzU3RlcmVvQXVkaW9PcHRpb25zKG9wdGlvbnMpKSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVBbmRBZGRTdWJOb2RlQXN5bmMoQXVkaW9TdWJOb2RlLlNURVJFTyk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9jcmVhdGVTdWJOb2RlUHJvbWlzZXNSZXNvbHZlZEFzeW5jKCk7XG5cbiAgICAgICAgaWYgKGhhc1NwYXRpYWxPcHRpb25zKSB7XG4gICAgICAgICAgICBfR2V0U3BhdGlhbEF1ZGlvU3ViTm9kZSh0aGlzKT8uc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzU3RlcmVvT3B0aW9ucykge1xuICAgICAgICAgICAgX0dldFN0ZXJlb0F1ZGlvU3ViTm9kZSh0aGlzKT8uc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0IF9pbk5vZGUoKTogTnVsbGFibGU8QXVkaW9Ob2RlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dE5vZGU7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jcmVhdGVTdWJOb2RlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8X0Fic3RyYWN0QXVkaW9TdWJOb2RlPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gc3VwZXIuX2NyZWF0ZVN1Yk5vZGUobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgQXVkaW9TdWJOb2RlLlNQQVRJQUw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9DcmVhdGVTcGF0aWFsQXVkaW9TdWJOb2RlQXN5bmModGhpcy5fb3duZXIuZW5naW5lKTtcbiAgICAgICAgICAgIGNhc2UgQXVkaW9TdWJOb2RlLlNURVJFTzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX0NyZWF0ZVN0ZXJlb0F1ZGlvU3ViTm9kZUFzeW5jKHRoaXMuX293bmVyLmVuZ2luZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBzdWJub2RlIG5hbWU6ICR7bmFtZX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb25TdWJOb2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLl9vblN1Yk5vZGVzQ2hhbmdlZCgpO1xuXG4gICAgICAgIGNvbnN0IHNwYXRpYWxOb2RlID0gX0dldFNwYXRpYWxBdWRpb1N1Yk5vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHN0ZXJlb05vZGUgPSBfR2V0U3RlcmVvQXVkaW9TdWJOb2RlKHRoaXMpO1xuICAgICAgICBjb25zdCB2b2x1bWVOb2RlID0gX0dldFZvbHVtZUF1ZGlvU3ViTm9kZSh0aGlzKTtcblxuICAgICAgICBpZiAoc3BhdGlhbE5vZGUgJiYgc3BhdGlhbE5vZGUuZ2V0Q2xhc3NOYW1lKCkgIT09IFwiX1NwYXRpYWxXZWJBdWRpb1N1Yk5vZGVcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgV2ViQXVkaW8gc3Vibm9kZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXJlb05vZGUgJiYgc3RlcmVvTm9kZS5nZXRDbGFzc05hbWUoKSAhPT0gXCJfU3RlcmVvV2ViQXVkaW9TdWJOb2RlXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIFdlYkF1ZGlvIHN1Ym5vZGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2b2x1bWVOb2RlICYmIHZvbHVtZU5vZGUuZ2V0Q2xhc3NOYW1lKCkgIT09IFwiX1ZvbHVtZVdlYkF1ZGlvU3ViTm9kZVwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBXZWJBdWRpbyBzdWJub2RlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGF0aWFsTm9kZSkge1xuICAgICAgICAgICAgc3BhdGlhbE5vZGUuZGlzY29ubmVjdEFsbCgpO1xuXG4gICAgICAgICAgICBpZiAodm9sdW1lTm9kZSkge1xuICAgICAgICAgICAgICAgIHNwYXRpYWxOb2RlLmNvbm5lY3Qodm9sdW1lTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RlcmVvTm9kZSkge1xuICAgICAgICAgICAgc3RlcmVvTm9kZS5kaXNjb25uZWN0QWxsKCk7XG5cbiAgICAgICAgICAgIGlmICh2b2x1bWVOb2RlKSB7XG4gICAgICAgICAgICAgICAgc3RlcmVvTm9kZS5jb25uZWN0KHZvbHVtZU5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwYXRpYWxOb2RlICYmIHN0ZXJlb05vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3ROb2RlID0gbmV3IEdhaW5Ob2RlKHRoaXMuX293bmVyLmVuZ2luZS5fYXVkaW9Db250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3ROb2RlLmNvbm5lY3QoKHNwYXRpYWxOb2RlIGFzIF9TcGF0aWFsV2ViQXVkaW9TdWJOb2RlKS5fb3V0Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLl9yb290Tm9kZS5jb25uZWN0KChzdGVyZW9Ob2RlIGFzIF9TdGVyZW9XZWJBdWRpb1N1Yk5vZGUpLl9vdXROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3ROb2RlPy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLl9yb290Tm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5TdWJOb2RlOiBOdWxsYWJsZTxJV2ViQXVkaW9TdWJOb2RlPiA9IG51bGw7XG5cbiAgICAgICAgbGV0IGluTm9kZTogTnVsbGFibGU8QXVkaW9Ob2RlPiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Jvb3ROb2RlKSB7XG4gICAgICAgICAgICBpbk5vZGUgPSB0aGlzLl9yb290Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzcGF0aWFsTm9kZSkge1xuICAgICAgICAgICAgICAgIGluU3ViTm9kZSA9IHNwYXRpYWxOb2RlIGFzIF9TcGF0aWFsV2ViQXVkaW9TdWJOb2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGVyZW9Ob2RlKSB7XG4gICAgICAgICAgICAgICAgaW5TdWJOb2RlID0gc3RlcmVvTm9kZSBhcyBfU3RlcmVvV2ViQXVkaW9TdWJOb2RlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2x1bWVOb2RlKSB7XG4gICAgICAgICAgICAgICAgaW5TdWJOb2RlID0gdm9sdW1lTm9kZSBhcyBfVm9sdW1lV2ViQXVkaW9TdWJOb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbk5vZGUgPSBpblN1Yk5vZGU/Lm5vZGUgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dE5vZGUgIT09IGluTm9kZSkge1xuICAgICAgICAgICAgLy8gRGlzY29ubmVjdCB0aGUgd3JhcHBlZCB1cHN0cmVhbSBXZWJBdWRpbyBub2RlcyBmcm9tIHRoZSBvbGQgd3JhcHBlZCBXZWJBdWRpbyBub2RlLlxuICAgICAgICAgICAgLy8gVGhlIHdyYXBwZXIgbm9kZXMgYXJlIHVuYXdhcmUgb2YgdGhpcyBjaGFuZ2UuXG4gICAgICAgICAgICBpZiAodGhpcy5faW5wdXROb2RlICYmIHRoaXMuX3Vwc3RyZWFtTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdCA9IHRoaXMuX3Vwc3RyZWFtTm9kZXMudmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbmV4dCA9IGl0Lm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAobmV4dC52YWx1ZSBhcyBJV2ViQXVkaW9PdXROb2RlKS5fb3V0Tm9kZT8uZGlzY29ubmVjdCh0aGlzLl9pbnB1dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faW5wdXROb2RlID0gaW5Ob2RlO1xuXG4gICAgICAgICAgICAvLyBDb25uZWN0IHRoZSB3cmFwcGVkIHVwc3RyZWFtIFdlYkF1ZGlvIG5vZGVzIHRvIHRoZSBuZXcgd3JhcHBlZCBXZWJBdWRpbyBub2RlLlxuICAgICAgICAgICAgLy8gVGhlIHdyYXBwZXIgbm9kZXMgYXJlIHVuYXdhcmUgb2YgdGhpcyBjaGFuZ2UuXG4gICAgICAgICAgICBpZiAoaW5Ob2RlICYmIHRoaXMuX3Vwc3RyZWFtTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdCA9IHRoaXMuX3Vwc3RyZWFtTm9kZXMudmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbmV4dCA9IGl0Lm5leHQoKTsgIW5leHQuZG9uZTsgbmV4dCA9IGl0Lm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAobmV4dC52YWx1ZSBhcyBJV2ViQXVkaW9PdXROb2RlKS5fb3V0Tm9kZT8uY29ubmVjdChpbk5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgX0Fic3RyYWN0QXVkaW9TdWJHcmFwaCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1Yk5vZGVzL2Fic3RyYWN0QXVkaW9TdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NwYXRpYWxBdWRpbyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvc3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfU3BhdGlhbFdlYkF1ZGlvVXBkYXRlckNvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NwYXRpYWxXZWJBdWRpb1VwZGF0ZXJDb21wb25lbnRcIjtcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIF9TcGF0aWFsV2ViQXVkaW8gZXh0ZW5kcyBfU3BhdGlhbEF1ZGlvIHtcbiAgICBwcml2YXRlIF91cGRhdGVyQ29tcG9uZW50OiBfU3BhdGlhbFdlYkF1ZGlvVXBkYXRlckNvbXBvbmVudDtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3ViR3JhcGg6IF9BYnN0cmFjdEF1ZGlvU3ViR3JhcGgsIGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcikge1xuICAgICAgICBzdXBlcihzdWJHcmFwaCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlckNvbXBvbmVudCA9IG5ldyBfU3BhdGlhbFdlYkF1ZGlvVXBkYXRlckNvbXBvbmVudCh0aGlzLCBhdXRvVXBkYXRlLCBtaW5VcGRhdGVUaW1lKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBtaW5VcGRhdGVUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVyQ29tcG9uZW50Lm1pblVwZGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZXQgbWluVXBkYXRlVGltZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZXJDb21wb25lbnQubWluVXBkYXRlVGltZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZXJDb21wb25lbnQuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl91cGRhdGVyQ29tcG9uZW50ID0gbnVsbCE7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9