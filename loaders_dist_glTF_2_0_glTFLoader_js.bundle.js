"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_glTFLoader_js"],{

/***/ "../core/dist/Materials/Textures/rawTexture2DArray.js":
/*!************************************************************!*\
  !*** ../core/dist/Materials/Textures/rawTexture2DArray.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawTexture2DArray: () => (/* binding */ RawTexture2DArray)
/* harmony export */ });
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Class used to store 2D array textures containing user data
 */
class RawTexture2DArray extends _texture__WEBPACK_IMPORTED_MODULE_0__.Texture {
    /**
     * Gets the number of layers of the texture
     */
    get depth() {
        return this._depth;
    }
    /**
     * Create a new RawTexture2DArray
     * @param data defines the data of the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param depth defines the number of layers of the texture
     * @param format defines the texture format to use
     * @param scene defines the hosting scene
     * @param generateMipMaps defines a boolean indicating if mip levels should be generated (true by default)
     * @param invertY defines if texture must be stored with Y axis inverted
     * @param samplingMode defines the sampling mode to use (Texture.TRILINEAR_SAMPLINGMODE by default)
     * @param textureType defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)
     * @param creationFlags specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)
     */
    constructor(data, width, height, depth, 
    /** Gets or sets the texture format to use */
    format, scene, generateMipMaps = true, invertY = false, samplingMode = _texture__WEBPACK_IMPORTED_MODULE_0__.Texture.TRILINEAR_SAMPLINGMODE, textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_UNSIGNED_BYTE, creationFlags) {
        super(null, scene, !generateMipMaps, invertY);
        this.format = format;
        this._texture = scene.getEngine().createRawTexture2DArray(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, null, textureType, creationFlags);
        this._depth = depth;
        this.is2DArray = true;
    }
    /**
     * Update the texture with new data
     * @param data defines the data to store in the texture
     */
    update(data) {
        if (!this._texture) {
            return;
        }
        this._getEngine().updateRawTexture2DArray(this._texture, data, this._texture.format, this._texture.invertY, null, this._texture.type);
    }
    /**
     * Creates a RGBA texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param depth defines the number of layers of the texture
     * @param scene defines the scene the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @returns the RGBA texture
     */
    static CreateRGBATexture(data, width, height, depth, scene, generateMipMaps = true, invertY = false, samplingMode = _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURE_TRILINEAR_SAMPLINGMODE, type = _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_UNSIGNED_BYTE) {
        return new RawTexture2DArray(data, width, height, depth, _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTUREFORMAT_RGBA, scene, generateMipMaps, invertY, samplingMode, type);
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

/***/ "../core/dist/Misc/dataReader.js":
/*!***************************************!*\
  !*** ../core/dist/Misc/dataReader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataReader: () => (/* binding */ DataReader)
/* harmony export */ });
/* harmony import */ var _stringTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringTools */ "../core/dist/Misc/stringTools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Utility class for reading from a data buffer
 */
class DataReader {
    /**
     * Constructor
     * @param buffer The buffer to read
     */
    constructor(buffer) {
        /**
         * The current byte offset from the beginning of the data buffer.
         */
        this.byteOffset = 0;
        this.buffer = buffer;
    }
    /**
     * Loads the given byte length.
     * @param byteLength The byte length to load
     * @returns A promise that resolves when the load is complete
     */
    async loadAsync(byteLength) {
        const data = await this.buffer.readAsync(this.byteOffset, byteLength);
        this._dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
        this._dataByteOffset = 0;
    }
    /**
     * Read a unsigned 32-bit integer from the currently loaded data range.
     * @returns The 32-bit integer read
     */
    readUint32() {
        const value = this._dataView.getUint32(this._dataByteOffset, true);
        this._dataByteOffset += 4;
        this.byteOffset += 4;
        return value;
    }
    /**
     * Read a byte array from the currently loaded data range.
     * @param byteLength The byte length to read
     * @returns The byte array read
     */
    readUint8Array(byteLength) {
        const value = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._dataByteOffset, byteLength);
        this._dataByteOffset += byteLength;
        this.byteOffset += byteLength;
        return value;
    }
    /**
     * Read a string from the currently loaded data range.
     * @param byteLength The byte length to read
     * @returns The string read
     */
    readString(byteLength) {
        return (0,_stringTools__WEBPACK_IMPORTED_MODULE_0__.Decode)(this.readUint8Array(byteLength));
    }
    /**
     * Skips the given byte length the currently loaded data range.
     * @param byteLength The byte length to skip
     */
    skipBytes(byteLength) {
        this._dataByteOffset += byteLength;
        this.byteOffset += byteLength;
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

/***/ "../core/dist/Misc/deepMerger.js":
/*!***************************************!*\
  !*** ../core/dist/Misc/deepMerger.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepMerge: () => (/* binding */ deepMerge)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// https://stackoverflow.com/a/48218209
/**
 * Merges a series of objects into a single object, deeply.
 * @param objects The objects to merge (objects later in the list take precedence).
 * @returns The merged object.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function deepMerge(...objects) {
    const isRecord = (obj) => !!obj && typeof obj === "object";
    return objects.reduce((prev, obj) => {
        const keys = Object.keys(obj);
        for (const key of keys) {
            const pVal = prev[key];
            const oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            }
            else if (isRecord(pVal) && isRecord(oVal)) {
                prev[key] = deepMerge(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        }
        return prev;
    }, {});
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

/***/ "../core/dist/Morph/morphTargetManager.js":
/*!************************************************!*\
  !*** ../core/dist/Morph/morphTargetManager.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphTargetManager: () => (/* binding */ MorphTargetManager)
/* harmony export */ });
/* harmony import */ var _Misc_smartArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/smartArray */ "../core/dist/Misc/smartArray.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _morphTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./morphTarget */ "../core/dist/Morph/morphTarget.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var _Materials_Textures_rawTexture2DArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Materials/Textures/rawTexture2DArray */ "../core/dist/Materials/Textures/rawTexture2DArray.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * This class is used to deform meshes using morphing between different targets
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/morphTargets
 */
class MorphTargetManager {
    /**
     * Sets a boolean indicating that adding new target or updating an existing target will not update the underlying data buffers
     */
    set areUpdatesFrozen(block) {
        if (block) {
            this._blockCounter++;
        }
        else {
            this._blockCounter--;
            if (this._blockCounter <= 0) {
                this._blockCounter = 0;
                this._syncActiveTargets(this._forceUpdateWhenUnfrozen);
                this._forceUpdateWhenUnfrozen = false;
            }
        }
    }
    get areUpdatesFrozen() {
        return this._blockCounter > 0;
    }
    /**
     * Creates a new MorphTargetManager
     * @param scene defines the current scene
     */
    constructor(scene = null) {
        this._targets = new Array();
        this._targetInfluenceChangedObservers = new Array();
        this._targetDataLayoutChangedObservers = new Array();
        this._activeTargets = new _Misc_smartArray__WEBPACK_IMPORTED_MODULE_0__.SmartArray(16);
        this._supportsPositions = false;
        this._supportsNormals = false;
        this._supportsTangents = false;
        this._supportsUVs = false;
        this._supportsUV2s = false;
        this._supportsColors = false;
        this._vertexCount = 0;
        this._uniqueId = 0;
        this._tempInfluences = new Array();
        this._canUseTextureForTargets = false;
        this._blockCounter = 0;
        this._mustSynchronize = true;
        this._forceUpdateWhenUnfrozen = false;
        /** @internal */
        this._textureVertexStride = 0;
        /** @internal */
        this._textureWidth = 0;
        /** @internal */
        this._textureHeight = 1;
        /** @internal */
        this._parentContainer = null;
        /**
         * Gets or sets a boolean indicating if influencers must be optimized (eg. recompiling the shader if less influencers are used)
         */
        this.optimizeInfluencers = true;
        /**
         * Gets or sets a boolean indicating if positions must be morphed
         */
        this.enablePositionMorphing = true;
        /**
         * Gets or sets a boolean indicating if normals must be morphed
         */
        this.enableNormalMorphing = true;
        /**
         * Gets or sets a boolean indicating if tangents must be morphed
         */
        this.enableTangentMorphing = true;
        /**
         * Gets or sets a boolean indicating if UV must be morphed
         */
        this.enableUVMorphing = true;
        /**
         * Gets or sets a boolean indicating if UV2 must be morphed
         */
        this.enableUV2Morphing = true;
        /**
         * Gets or sets a boolean indicating if colors must be morphed
         */
        this.enableColorMorphing = true;
        this._numMaxInfluencers = 0;
        this._useTextureToStoreTargets = true;
        /**
         * Gets or sets an object used to store user defined information for the MorphTargetManager
         */
        this.metadata = null;
        this._influencesAreDirty = false;
        this._needUpdateInfluences = false;
        if (!scene) {
            scene = _Engines_engineStore__WEBPACK_IMPORTED_MODULE_2__.EngineStore.LastCreatedScene;
        }
        this._scene = scene;
        if (this._scene) {
            this._scene.addMorphTargetManager(this);
            this._uniqueId = this._scene.getUniqueId();
            const engineCaps = this._scene.getEngine().getCaps();
            this._canUseTextureForTargets =
                engineCaps.canUseGLVertexID && engineCaps.textureFloat && engineCaps.maxVertexTextureImageUnits > 0 && engineCaps.texture2DArrayMaxLayerCount > 1;
        }
    }
    /**
     * Gets or sets the maximum number of influencers (targets) (default value: 0).
     * Setting a value for this property can lead to a smoother experience, as only one shader will be compiled, which will use this value as the maximum number of influencers.
     * If you leave the value at 0 (default), a new shader will be compiled every time the number of active influencers changes. This can cause problems, as compiling a shader takes time.
     * If you assign a non-zero value to this property, you need to ensure that this value is greater than the maximum number of (active) influencers you'll need for this morph manager.
     * Otherwise, the number of active influencers will be truncated at the value you set for this property, which can lead to unexpected results.
     * Note that this property has no effect if "useTextureToStoreTargets" is false.
     * Note as well that if MorphTargetManager.ConstantTargetCountForTextureMode is greater than 0, this property will be ignored and the constant value will be used instead.
     */
    get numMaxInfluencers() {
        if (MorphTargetManager.ConstantTargetCountForTextureMode > 0 && this.isUsingTextureForTargets) {
            return MorphTargetManager.ConstantTargetCountForTextureMode;
        }
        return this._numMaxInfluencers;
    }
    set numMaxInfluencers(value) {
        if (this._numMaxInfluencers === value) {
            return;
        }
        this._numMaxInfluencers = value;
        this._mustSynchronize = true;
        this._syncActiveTargets();
    }
    /**
     * Gets the unique ID of this manager
     */
    get uniqueId() {
        return this._uniqueId;
    }
    /**
     * Gets the number of vertices handled by this manager
     */
    get vertexCount() {
        return this._vertexCount;
    }
    /**
     * Gets a boolean indicating if this manager supports morphing of positions
     */
    get supportsPositions() {
        return this._supportsPositions && this.enablePositionMorphing;
    }
    /**
     * Gets a boolean indicating if this manager supports morphing of normals
     */
    get supportsNormals() {
        return this._supportsNormals && this.enableNormalMorphing;
    }
    /**
     * Gets a boolean indicating if this manager supports morphing of tangents
     */
    get supportsTangents() {
        return this._supportsTangents && this.enableTangentMorphing;
    }
    /**
     * Gets a boolean indicating if this manager supports morphing of texture coordinates
     */
    get supportsUVs() {
        return this._supportsUVs && this.enableUVMorphing;
    }
    /**
     * Gets a boolean indicating if this manager supports morphing of texture coordinates 2
     */
    get supportsUV2s() {
        return this._supportsUV2s && this.enableUV2Morphing;
    }
    /**
     * Gets a boolean indicating if this manager supports morphing of colors
     */
    get supportsColors() {
        return this._supportsColors && this.enableColorMorphing;
    }
    /**
     * Gets a boolean indicating if this manager has data for morphing positions
     */
    get hasPositions() {
        return this._supportsPositions;
    }
    /**
     * Gets a boolean indicating if this manager has data for morphing normals
     */
    get hasNormals() {
        return this._supportsNormals;
    }
    /**
     * Gets a boolean indicating if this manager has data for morphing tangents
     */
    get hasTangents() {
        return this._supportsTangents;
    }
    /**
     * Gets a boolean indicating if this manager has data for morphing texture coordinates
     */
    get hasUVs() {
        return this._supportsUVs;
    }
    /**
     * Gets a boolean indicating if this manager has data for morphing texture coordinates 2
     */
    get hasUV2s() {
        return this._supportsUV2s;
    }
    /**
     * Gets a boolean indicating if this manager has data for morphing colors
     */
    get hasColors() {
        return this._supportsColors;
    }
    /**
     * Gets the number of targets stored in this manager
     */
    get numTargets() {
        return this._targets.length;
    }
    /**
     * Gets the number of influencers (ie. the number of targets with influences > 0)
     */
    get numInfluencers() {
        if (this._influencesAreDirty) {
            this._syncActiveTargets();
        }
        return this._activeTargets.length;
    }
    /**
     * Gets the list of influences (one per target)
     */
    get influences() {
        if (this._influencesAreDirty) {
            this._syncActiveTargets();
        }
        return this._influences;
    }
    /**
     * Gets or sets a boolean indicating that targets should be stored as a texture instead of using vertex attributes (default is true).
     * Please note that this option is not available if the hardware does not support it
     */
    get useTextureToStoreTargets() {
        return this._useTextureToStoreTargets;
    }
    set useTextureToStoreTargets(value) {
        if (this._useTextureToStoreTargets === value) {
            return;
        }
        this._useTextureToStoreTargets = value;
        this._mustSynchronize = true;
        this._syncActiveTargets();
    }
    /**
     * Gets a boolean indicating that the targets are stored into a texture (instead of as attributes)
     */
    get isUsingTextureForTargets() {
        return (MorphTargetManager.EnableTextureStorage &&
            this.useTextureToStoreTargets &&
            this._canUseTextureForTargets &&
            !this._scene?.getEngine().getCaps().disableMorphTargetTexture);
    }
    /**
     * Gets the active target at specified index. An active target is a target with an influence > 0
     * @param index defines the index to check
     * @returns the requested target
     */
    getActiveTarget(index) {
        if (this._influencesAreDirty) {
            this._syncActiveTargets();
        }
        return this._activeTargets.data[index];
    }
    /**
     * Gets the target at specified index
     * @param index defines the index to check
     * @returns the requested target
     */
    getTarget(index) {
        return this._targets[index];
    }
    /**
     * Gets the first target with the specified name
     * @param name defines the name to check
     * @returns the requested target
     */
    getTargetByName(name) {
        for (const target of this._targets) {
            if (target.name === name) {
                return target;
            }
        }
        return null;
    }
    /**
     * Add a new target to this manager
     * @param target defines the target to add
     */
    addTarget(target) {
        this._targets.push(target);
        this._targetInfluenceChangedObservers.push(target.onInfluenceChanged.add((needUpdate) => {
            if (this.areUpdatesFrozen && needUpdate) {
                this._forceUpdateWhenUnfrozen = true;
            }
            this._influencesAreDirty = true;
            this._needUpdateInfluences = this._needUpdateInfluences || needUpdate;
        }));
        this._targetDataLayoutChangedObservers.push(target._onDataLayoutChanged.add(() => {
            this._mustSynchronize = true;
            this._syncActiveTargets();
        }));
        this._mustSynchronize = true;
        this._syncActiveTargets();
    }
    /**
     * Removes a target from the manager
     * @param target defines the target to remove
     */
    removeTarget(target) {
        const index = this._targets.indexOf(target);
        if (index >= 0) {
            this._targets.splice(index, 1);
            target.onInfluenceChanged.remove(this._targetInfluenceChangedObservers.splice(index, 1)[0]);
            target._onDataLayoutChanged.remove(this._targetDataLayoutChangedObservers.splice(index, 1)[0]);
            this._mustSynchronize = true;
            this._syncActiveTargets();
        }
        if (this._scene) {
            this._scene.stopAnimation(target);
        }
    }
    /**
     * @internal
     */
    _bind(effect) {
        if (this._influencesAreDirty) {
            this._syncActiveTargets();
        }
        effect.setFloat3("morphTargetTextureInfo", this._textureVertexStride, this._textureWidth, this._textureHeight);
        effect.setFloatArray("morphTargetTextureIndices", this._morphTargetTextureIndices);
        effect.setTexture("morphTargets", this._targetStoreTexture);
        effect.setFloat("morphTargetCount", this.numInfluencers);
    }
    /**
     * Clone the current manager
     * @returns a new MorphTargetManager
     */
    clone() {
        const copy = new MorphTargetManager(this._scene);
        copy.areUpdatesFrozen = true;
        for (const target of this._targets) {
            copy.addTarget(target.clone());
        }
        copy.areUpdatesFrozen = false;
        copy.enablePositionMorphing = this.enablePositionMorphing;
        copy.enableNormalMorphing = this.enableNormalMorphing;
        copy.enableTangentMorphing = this.enableTangentMorphing;
        copy.enableUVMorphing = this.enableUVMorphing;
        copy.enableUV2Morphing = this.enableUV2Morphing;
        copy.enableColorMorphing = this.enableColorMorphing;
        copy.metadata = this.metadata;
        return copy;
    }
    /**
     * Serializes the current manager into a Serialization object
     * @returns the serialized object
     */
    serialize() {
        const serializationObject = {};
        serializationObject.id = this.uniqueId;
        serializationObject.targets = [];
        for (const target of this._targets) {
            serializationObject.targets.push(target.serialize());
        }
        if (this.metadata) {
            serializationObject.metadata = this.metadata;
        }
        return serializationObject;
    }
    _syncActiveTargets(needUpdate = false) {
        if (this.areUpdatesFrozen) {
            return;
        }
        needUpdate = needUpdate || this._needUpdateInfluences;
        this._needUpdateInfluences = false;
        this._influencesAreDirty = false;
        const wasUsingTextureForTargets = !!this._targetStoreTexture;
        const isUsingTextureForTargets = this.isUsingTextureForTargets;
        if (this._mustSynchronize || wasUsingTextureForTargets !== isUsingTextureForTargets) {
            this._mustSynchronize = false;
            this.synchronize();
        }
        let influenceCount = 0;
        this._activeTargets.reset();
        if (!this._morphTargetTextureIndices || this._morphTargetTextureIndices.length !== this._targets.length) {
            this._morphTargetTextureIndices = new Float32Array(this._targets.length);
        }
        let targetIndex = -1;
        for (const target of this._targets) {
            targetIndex++;
            if (target.influence === 0 && this.optimizeInfluencers) {
                continue;
            }
            if (this._activeTargets.length >= MorphTargetManager.MaxActiveMorphTargetsInVertexAttributeMode && !this.isUsingTextureForTargets) {
                break;
            }
            this._activeTargets.push(target);
            this._morphTargetTextureIndices[influenceCount] = targetIndex;
            this._tempInfluences[influenceCount++] = target.influence;
        }
        if (this._morphTargetTextureIndices.length !== influenceCount) {
            this._morphTargetTextureIndices = this._morphTargetTextureIndices.slice(0, influenceCount);
        }
        if (!this._influences || this._influences.length !== influenceCount) {
            this._influences = new Float32Array(influenceCount);
        }
        for (let index = 0; index < influenceCount; index++) {
            this._influences[index] = this._tempInfluences[index];
        }
        if (needUpdate && this._scene) {
            for (const mesh of this._scene.meshes) {
                if (mesh.morphTargetManager === this) {
                    if (isUsingTextureForTargets) {
                        mesh._markSubMeshesAsAttributesDirty();
                    }
                    else {
                        mesh._syncGeometryWithMorphTargetManager();
                    }
                }
            }
        }
    }
    /**
     * Synchronize the targets with all the meshes using this morph target manager
     */
    synchronize() {
        if (!this._scene || this.areUpdatesFrozen) {
            return;
        }
        const engine = this._scene.getEngine();
        this._supportsPositions = true;
        this._supportsNormals = true;
        this._supportsTangents = true;
        this._supportsUVs = true;
        this._supportsUV2s = true;
        this._supportsColors = true;
        this._vertexCount = 0;
        this._targetStoreTexture?.dispose();
        this._targetStoreTexture = null;
        if (this.isUsingTextureForTargets && this._targets.length > engine.getCaps().texture2DArrayMaxLayerCount) {
            this.useTextureToStoreTargets = false;
        }
        for (const target of this._targets) {
            this._supportsPositions = this._supportsPositions && target.hasPositions;
            this._supportsNormals = this._supportsNormals && target.hasNormals;
            this._supportsTangents = this._supportsTangents && target.hasTangents;
            this._supportsUVs = this._supportsUVs && target.hasUVs;
            this._supportsUV2s = this._supportsUV2s && target.hasUV2s;
            this._supportsColors = this._supportsColors && target.hasColors;
            const vertexCount = target.vertexCount;
            if (this._vertexCount === 0) {
                this._vertexCount = vertexCount;
            }
            else if (this._vertexCount !== vertexCount) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(`Incompatible target. Targets must all have the same vertices count. Current vertex count: ${this._vertexCount}, vertex count for target "${target.name}": ${vertexCount}`);
                return;
            }
        }
        if (this.isUsingTextureForTargets) {
            this._textureVertexStride = 0;
            this._supportsPositions && this._textureVertexStride++;
            this._supportsNormals && this._textureVertexStride++;
            this._supportsTangents && this._textureVertexStride++;
            this._supportsUVs && this._textureVertexStride++;
            this._supportsUV2s && this._textureVertexStride++;
            this._supportsColors && this._textureVertexStride++;
            this._textureWidth = this._vertexCount * this._textureVertexStride || 1;
            this._textureHeight = 1;
            const maxTextureSize = engine.getCaps().maxTextureSize;
            if (this._textureWidth > maxTextureSize) {
                this._textureHeight = Math.ceil(this._textureWidth / maxTextureSize);
                this._textureWidth = maxTextureSize;
            }
            const targetCount = this._targets.length;
            const data = new Float32Array(targetCount * this._textureWidth * this._textureHeight * 4);
            let offset = 0;
            for (let index = 0; index < targetCount; index++) {
                const target = this._targets[index];
                const positions = target.getPositions();
                const normals = target.getNormals();
                const uvs = target.getUVs();
                const tangents = target.getTangents();
                const uv2s = target.getUV2s();
                const colors = target.getColors();
                offset = index * this._textureWidth * this._textureHeight * 4;
                for (let vertex = 0; vertex < this._vertexCount; vertex++) {
                    if (this._supportsPositions && positions) {
                        data[offset] = positions[vertex * 3];
                        data[offset + 1] = positions[vertex * 3 + 1];
                        data[offset + 2] = positions[vertex * 3 + 2];
                        offset += 4;
                    }
                    if (this._supportsNormals && normals) {
                        data[offset] = normals[vertex * 3];
                        data[offset + 1] = normals[vertex * 3 + 1];
                        data[offset + 2] = normals[vertex * 3 + 2];
                        offset += 4;
                    }
                    if (this._supportsUVs && uvs) {
                        data[offset] = uvs[vertex * 2];
                        data[offset + 1] = uvs[vertex * 2 + 1];
                        offset += 4;
                    }
                    if (this._supportsTangents && tangents) {
                        data[offset] = tangents[vertex * 3];
                        data[offset + 1] = tangents[vertex * 3 + 1];
                        data[offset + 2] = tangents[vertex * 3 + 2];
                        offset += 4;
                    }
                    if (this._supportsUV2s && uv2s) {
                        data[offset] = uv2s[vertex * 2];
                        data[offset + 1] = uv2s[vertex * 2 + 1];
                        offset += 4;
                    }
                    if (this._supportsColors && colors) {
                        data[offset] = colors[vertex * 4];
                        data[offset + 1] = colors[vertex * 4 + 1];
                        data[offset + 2] = colors[vertex * 4 + 2];
                        data[offset + 3] = colors[vertex * 4 + 3];
                        offset += 4;
                    }
                }
            }
            this._targetStoreTexture = _Materials_Textures_rawTexture2DArray__WEBPACK_IMPORTED_MODULE_5__.RawTexture2DArray.CreateRGBATexture(data, this._textureWidth, this._textureHeight, targetCount, this._scene, false, false, _Engines_constants__WEBPACK_IMPORTED_MODULE_4__.Constants.TEXTURE_NEAREST_SAMPLINGMODE, _Engines_constants__WEBPACK_IMPORTED_MODULE_4__.Constants.TEXTURETYPE_FLOAT);
            this._targetStoreTexture.name = `Morph texture_${this.uniqueId}`;
        }
        // Flag meshes as dirty to resync with the active targets
        for (const mesh of this._scene.meshes) {
            if (mesh.morphTargetManager === this) {
                mesh._syncGeometryWithMorphTargetManager();
            }
        }
    }
    /**
     * Release all resources
     */
    dispose() {
        if (this._targetStoreTexture) {
            this._targetStoreTexture.dispose();
        }
        this._targetStoreTexture = null;
        this.metadata = null;
        // Remove from scene
        if (this._scene) {
            this._scene.removeMorphTargetManager(this);
            if (this._parentContainer) {
                const index = this._parentContainer.morphTargetManagers.indexOf(this);
                if (index > -1) {
                    this._parentContainer.morphTargetManagers.splice(index, 1);
                }
                this._parentContainer = null;
            }
            for (const morph of this._targets) {
                this._scene.stopAnimation(morph);
            }
        }
    }
    // Statics
    /**
     * Creates a new MorphTargetManager from serialized data
     * @param serializationObject defines the serialized data
     * @param scene defines the hosting scene
     * @returns the new MorphTargetManager
     */
    static Parse(serializationObject, scene) {
        const result = new MorphTargetManager(scene);
        for (const targetData of serializationObject.targets) {
            result.addTarget(_morphTarget__WEBPACK_IMPORTED_MODULE_3__.MorphTarget.Parse(targetData, scene));
        }
        if (serializationObject.metadata) {
            result.metadata = serializationObject.metadata;
        }
        return result;
    }
}
/** Enable storing morph target data into textures when set to true (true by default) */
MorphTargetManager.EnableTextureStorage = true;
/** Maximum number of active morph targets supported in the "vertex attribute" mode (i.e., not the "texture" mode) */
MorphTargetManager.MaxActiveMorphTargetsInVertexAttributeMode = 8;
/**
 * When used in texture mode, if greather than 0, this will override the the morph manager numMaxInfluencers value.
 */
MorphTargetManager.ConstantTargetCountForTextureMode = 0;


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

/***/ "../loaders/dist/glTF/2.0/glTFLoader.js":
/*!**********************************************!*\
  !*** ../loaders/dist/glTF/2.0/glTFLoader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayItem: () => (/* binding */ ArrayItem),
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFFileLoader),
/* harmony export */   GLTFLoader: () => (/* binding */ GLTFLoader),
/* harmony export */   LoadBoundingInfoFromPositionAccessor: () => (/* binding */ LoadBoundingInfoFromPositionAccessor)
/* harmony export */ });
/* harmony import */ var core_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/deferred */ "../core/dist/Misc/deferred.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Cameras_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Cameras/camera */ "../core/dist/Cameras/camera.js");
/* harmony import */ var core_Cameras_freeCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Cameras/freeCamera */ "../core/dist/Cameras/freeCamera.js");
/* harmony import */ var core_Bones_bone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Bones/bone */ "../core/dist/Bones/bone.js");
/* harmony import */ var core_Bones_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Bones/skeleton */ "../core/dist/Bones/skeleton.js");
/* harmony import */ var core_Materials_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Materials/material */ "../core/dist/Materials/material.js");
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_Meshes_geometry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Meshes/geometry */ "../core/dist/Meshes/geometry.js");
/* harmony import */ var core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core/Meshes/abstractMesh */ "../core/dist/Meshes/abstractMesh.js");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var core_Morph_morphTarget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core/Morph/morphTarget */ "../core/dist/Morph/morphTarget.js");
/* harmony import */ var core_Morph_morphTargetManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core/Morph/morphTargetManager */ "../core/dist/Morph/morphTargetManager.js");
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../glTFFileLoader */ "../loaders/dist/glTF/glTFFileLoader.js");
/* harmony import */ var core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core/Misc/fileTools */ "../core/dist/Misc/fileTools.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Culling_boundingInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core/Culling/boundingInfo */ "../core/dist/Culling/boundingInfo.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var _Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Extensions/objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* harmony import */ var core_Misc_deepMerger__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core/Misc/deepMerger */ "../core/dist/Misc/deepMerger.js");
/* harmony import */ var core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core/Buffers/bufferUtils */ "../core/dist/Buffers/bufferUtils.js");
/* harmony import */ var core_Misc_lazy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core/Misc/lazy */ "../core/dist/Misc/lazy.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



























// Caching these dynamic imports gives a surprising perf boost (compared to importing them directly each time).
const LazyAnimationGroupModulePromise = new core_Misc_lazy__WEBPACK_IMPORTED_MODULE_25__.Lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! core/Animations/animationGroup */ "../core/dist/Animations/animationGroup.js")));
const LazyLoaderAnimationModulePromise = new core_Misc_lazy__WEBPACK_IMPORTED_MODULE_25__.Lazy(() => __webpack_require__.e(/*! import() */ "loaders_dist_glTF_2_0_glTFLoaderAnimation_js").then(__webpack_require__.bind(__webpack_require__, /*! ./glTFLoaderAnimation */ "../loaders/dist/glTF/2.0/glTFLoaderAnimation.js")));

/**
 * Helper class for working with arrays when loading the glTF asset
 */
class ArrayItem {
    /**
     * Gets an item from the given array.
     * @param context The context when loading the asset
     * @param array The array to get the item from
     * @param index The index to the array
     * @returns The array item
     */
    static Get(context, array, index) {
        if (!array || index == undefined || !array[index]) {
            throw new Error(`${context}: Failed to find index (${index})`);
        }
        return array[index];
    }
    /**
     * Gets an item from the given array or returns null if not available.
     * @param array The array to get the item from
     * @param index The index to the array
     * @returns The array item or null
     */
    static TryGet(array, index) {
        if (!array || index == undefined || !array[index]) {
            return null;
        }
        return array[index];
    }
    /**
     * Assign an `index` field to each item of the given array.
     * @param array The array of items
     */
    static Assign(array) {
        if (array) {
            for (let index = 0; index < array.length; index++) {
                array[index].index = index;
            }
        }
    }
}
/** @internal */
function LoadBoundingInfoFromPositionAccessor(accessor) {
    if (accessor.min && accessor.max) {
        const minArray = accessor.min;
        const maxArray = accessor.max;
        const minVector = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[0].copyFromFloats(minArray[0], minArray[1], minArray[2]);
        const maxVector = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.TmpVectors.Vector3[1].copyFromFloats(maxArray[0], maxArray[1], maxArray[2]);
        if (accessor.normalized && accessor.componentType !== 5126 /* AccessorComponentType.FLOAT */) {
            let divider = 1;
            switch (accessor.componentType) {
                case 5120 /* AccessorComponentType.BYTE */:
                    divider = 127.0;
                    break;
                case 5121 /* AccessorComponentType.UNSIGNED_BYTE */:
                    divider = 255.0;
                    break;
                case 5122 /* AccessorComponentType.SHORT */:
                    divider = 32767.0;
                    break;
                case 5123 /* AccessorComponentType.UNSIGNED_SHORT */:
                    divider = 65535.0;
                    break;
            }
            const oneOverDivider = 1 / divider;
            minVector.scaleInPlace(oneOverDivider);
            maxVector.scaleInPlace(oneOverDivider);
        }
        return new core_Culling_boundingInfo__WEBPACK_IMPORTED_MODULE_20__.BoundingInfo(minVector, maxVector);
    }
    return null;
}
/**
 * The glTF 2.0 loader
 */
class GLTFLoader {
    /**
     * Registers a loader extension.
     * @param name The name of the loader extension.
     * @param factory The factory function that creates the loader extension.
     * @deprecated Please use registerGLTFExtension instead.
     */
    static RegisterExtension(name, factory) {
        (0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_21__.registerGLTFExtension)(name, false, factory);
    }
    /**
     * Unregisters a loader extension.
     * @param name The name of the loader extension.
     * @returns A boolean indicating whether the extension has been unregistered
     * @deprecated Please use unregisterGLTFExtension instead.
     */
    static UnregisterExtension(name) {
        return (0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_21__.unregisterGLTFExtension)(name);
    }
    /**
     * The object that represents the glTF JSON.
     */
    get gltf() {
        if (!this._gltf) {
            throw new Error("glTF JSON is not available");
        }
        return this._gltf;
    }
    /**
     * The BIN chunk of a binary glTF.
     */
    get bin() {
        return this._bin;
    }
    /**
     * The parent file loader.
     */
    get parent() {
        return this._parent;
    }
    /**
     * The Babylon scene when loading the asset.
     */
    get babylonScene() {
        if (!this._babylonScene) {
            throw new Error("Scene is not available");
        }
        return this._babylonScene;
    }
    /**
     * The root Babylon node when loading the asset.
     */
    get rootBabylonMesh() {
        return this._rootBabylonMesh;
    }
    /**
     * The root url when loading the asset.
     */
    get rootUrl() {
        return this._rootUrl;
    }
    /**
     * @internal
     */
    constructor(parent) {
        /** @internal */
        this._completePromises = new Array();
        /** @internal */
        this._assetContainer = null;
        /** Storage */
        this._babylonLights = [];
        /** @internal */
        this._disableInstancedMesh = 0;
        /** @internal */
        this._allMaterialsDirtyRequired = false;
        /** @internal */
        this._skipStartAnimationStep = false;
        this._extensions = new Array();
        this._disposed = false;
        this._rootUrl = null;
        this._fileName = null;
        this._uniqueRootUrl = null;
        this._bin = null;
        this._rootBabylonMesh = null;
        this._defaultBabylonMaterialData = {};
        this._postSceneLoadActions = new Array();
        this._materialAdapterCache = new WeakMap();
        /** @internal */
        this._pbrMaterialImpl = null;
        this._parent = parent;
    }
    /**
     * Creates or gets a cached material loading adapter with dynamic imports
     * @param material The material to adapt
     * @returns Promise that resolves to the appropriate adapter
     * @internal
     */
    _getOrCreateMaterialAdapter(material) {
        let adapter = this._materialAdapterCache.get(material);
        if (!adapter) {
            if (this._pbrMaterialImpl) {
                adapter = new this._pbrMaterialImpl.adapterClass(material);
            }
            else {
                throw new Error(`Appropriate material adapter class not found`);
            }
            this._materialAdapterCache.set(material, adapter);
        }
        return adapter;
    }
    /** @internal */
    dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this._completePromises.length = 0;
        this._extensions.forEach((extension) => extension.dispose && extension.dispose());
        this._extensions.length = 0;
        this._gltf = null; // TODO
        this._bin = null;
        this._babylonScene = null; // TODO
        this._rootBabylonMesh = null;
        this._defaultBabylonMaterialData = {};
        this._postSceneLoadActions.length = 0;
        this._parent.dispose();
    }
    /**
     * @internal
     */
    async importMeshAsync(meshesNames, scene, container, data, rootUrl, onProgress, fileName = "") {
        // eslint-disable-next-line github/no-then
        return await Promise.resolve().then(async () => {
            this._babylonScene = scene;
            this._assetContainer = container;
            this._loadData(data);
            let nodes = null;
            if (meshesNames) {
                const nodeMap = {};
                if (this._gltf.nodes) {
                    for (const node of this._gltf.nodes) {
                        if (node.name) {
                            nodeMap[node.name] = node.index;
                        }
                    }
                }
                const names = meshesNames instanceof Array ? meshesNames : [meshesNames];
                nodes = names.map((name) => {
                    const node = nodeMap[name];
                    if (node === undefined) {
                        throw new Error(`Failed to find node '${name}'`);
                    }
                    return node;
                });
            }
            return await this._loadAsync(rootUrl, fileName, nodes, () => {
                return {
                    meshes: this._getMeshes(),
                    particleSystems: [],
                    skeletons: this._getSkeletons(),
                    animationGroups: this._getAnimationGroups(),
                    lights: this._babylonLights,
                    transformNodes: this._getTransformNodes(),
                    geometries: this._getGeometries(),
                    spriteManagers: [],
                };
            });
        });
    }
    /**
     * @internal
     */
    async loadAsync(scene, data, rootUrl, onProgress, fileName = "") {
        this._babylonScene = scene;
        this._loadData(data);
        return await this._loadAsync(rootUrl, fileName, null, () => undefined);
    }
    async _loadAsync(rootUrl, fileName, nodes, resultFunc) {
        return await Promise.resolve()
            .then(async () => {
            this._rootUrl = rootUrl;
            this._uniqueRootUrl = !rootUrl.startsWith("file:") && fileName ? rootUrl : `${rootUrl}${Date.now()}/`;
            this._fileName = fileName;
            this._allMaterialsDirtyRequired = false;
            await this._loadExtensionsAsync();
            // NOTE: Explicitly check _pbrMaterialImpl for null as a value of false means don't use PBR materials at all.
            if (!this.parent.skipMaterials && this._pbrMaterialImpl == null) {
                if (this.parent.useOpenPBR || this.isExtensionUsed("KHR_materials_openpbr")) {
                    this._pbrMaterialImpl = {
                        materialClass: (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! core/Materials/PBR/openpbrMaterial */ "../core/dist/Materials/PBR/openpbrMaterial.js"))).OpenPBRMaterial,
                        adapterClass: (await __webpack_require__.e(/*! import() */ "loaders_dist_glTF_2_0_openpbrMaterialLoadingAdapter_js").then(__webpack_require__.bind(__webpack_require__, /*! ./openpbrMaterialLoadingAdapter */ "../loaders/dist/glTF/2.0/openpbrMaterialLoadingAdapter.js"))).OpenPBRMaterialLoadingAdapter,
                    };
                }
                else {
                    this._pbrMaterialImpl = {
                        materialClass: (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! core/Materials/PBR/pbrMaterial */ "../core/dist/Materials/PBR/pbrMaterial.js"))).PBRMaterial,
                        adapterClass: (await __webpack_require__.e(/*! import() */ "loaders_dist_glTF_2_0_pbrMaterialLoadingAdapter_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pbrMaterialLoadingAdapter */ "../loaders/dist/glTF/2.0/pbrMaterialLoadingAdapter.js"))).PBRMaterialLoadingAdapter,
                    };
                }
            }
            const loadingToReadyCounterName = `${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.LOADING]} => ${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.READY]}`;
            const loadingToCompleteCounterName = `${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.LOADING]} => ${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState[_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.COMPLETE]}`;
            this._parent._startPerformanceCounter(loadingToReadyCounterName);
            this._parent._startPerformanceCounter(loadingToCompleteCounterName);
            this._parent._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.LOADING);
            this._extensionsOnLoading();
            const promises = new Array();
            // Block the marking of materials dirty until the scene is loaded.
            const oldBlockMaterialDirtyMechanism = this._babylonScene.blockMaterialDirtyMechanism;
            this._babylonScene.blockMaterialDirtyMechanism = true;
            if (!this.parent.loadOnlyMaterials) {
                if (nodes) {
                    promises.push(this.loadSceneAsync("/nodes", { nodes: nodes, index: -1 }));
                }
                else if (this._gltf.scene != undefined || (this._gltf.scenes && this._gltf.scenes[0])) {
                    const scene = ArrayItem.Get(`/scene`, this._gltf.scenes, this._gltf.scene || 0);
                    promises.push(this.loadSceneAsync(`/scenes/${scene.index}`, scene));
                }
            }
            if (!this.parent.skipMaterials && this.parent.loadAllMaterials && this._gltf.materials) {
                for (let m = 0; m < this._gltf.materials.length; ++m) {
                    const material = this._gltf.materials[m];
                    const context = "/materials/" + m;
                    const babylonDrawMode = core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.TriangleFillMode;
                    promises.push(this._loadMaterialAsync(context, material, null, babylonDrawMode, () => { }));
                }
            }
            // Restore the blocking of material dirty.
            if (this._allMaterialsDirtyRequired) {
                // This can happen if we add a light for instance as it will impact the whole scene.
                // This automatically resets everything if needed.
                this._babylonScene.blockMaterialDirtyMechanism = oldBlockMaterialDirtyMechanism;
            }
            else {
                // By default a newly created material is dirty so there is no need to flag the full scene as dirty.
                // For perf reasons, we then bypass blockMaterialDirtyMechanism as this would "dirty" the entire scene.
                this._babylonScene._forceBlockMaterialDirtyMechanism(oldBlockMaterialDirtyMechanism);
            }
            if (this._parent.compileMaterials) {
                promises.push(this._compileMaterialsAsync());
            }
            if (this._parent.compileShadowGenerators) {
                promises.push(this._compileShadowGeneratorsAsync());
            }
            const resultPromise = Promise.all(promises).then(() => {
                if (this._rootBabylonMesh && this._rootBabylonMesh !== this._parent.customRootNode) {
                    this._rootBabylonMesh.setEnabled(true);
                }
                // Making sure we enable enough lights to have all lights together
                for (const material of this._babylonScene.materials) {
                    const mat = material;
                    if (mat.maxSimultaneousLights !== undefined) {
                        mat.maxSimultaneousLights = Math.max(mat.maxSimultaneousLights, this._babylonScene.lights.length);
                    }
                }
                this._extensionsOnReady();
                this._parent._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.READY);
                if (!this._skipStartAnimationStep) {
                    this._startAnimations();
                }
                return resultFunc();
            });
            return await resultPromise.then((result) => {
                this._parent._endPerformanceCounter(loadingToReadyCounterName);
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.SetImmediate(() => {
                    if (!this._disposed) {
                        Promise.all(this._completePromises).then(() => {
                            this._parent._endPerformanceCounter(loadingToCompleteCounterName);
                            this._parent._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderState.COMPLETE);
                            this._parent.onCompleteObservable.notifyObservers(undefined);
                            this._parent.onCompleteObservable.clear();
                            this.dispose();
                        }, (error) => {
                            this._parent.onErrorObservable.notifyObservers(error);
                            this._parent.onErrorObservable.clear();
                            this.dispose();
                        });
                    }
                });
                return result;
            });
        })
            .catch((error) => {
            if (!this._disposed) {
                this._parent.onErrorObservable.notifyObservers(error);
                this._parent.onErrorObservable.clear();
                this.dispose();
            }
            throw error;
        });
    }
    _loadData(data) {
        this._gltf = data.json;
        this._setupData();
        if (data.bin) {
            const buffers = this._gltf.buffers;
            if (buffers && buffers[0] && !buffers[0].uri) {
                const binaryBuffer = buffers[0];
                if (binaryBuffer.byteLength < data.bin.byteLength - 3 || binaryBuffer.byteLength > data.bin.byteLength) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`Binary buffer length (${binaryBuffer.byteLength}) from JSON does not match chunk length (${data.bin.byteLength})`);
                }
                this._bin = data.bin;
            }
            else {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn("Unexpected BIN chunk");
            }
        }
    }
    _setupData() {
        ArrayItem.Assign(this._gltf.accessors);
        ArrayItem.Assign(this._gltf.animations);
        ArrayItem.Assign(this._gltf.buffers);
        ArrayItem.Assign(this._gltf.bufferViews);
        ArrayItem.Assign(this._gltf.cameras);
        ArrayItem.Assign(this._gltf.images);
        ArrayItem.Assign(this._gltf.materials);
        ArrayItem.Assign(this._gltf.meshes);
        ArrayItem.Assign(this._gltf.nodes);
        ArrayItem.Assign(this._gltf.samplers);
        ArrayItem.Assign(this._gltf.scenes);
        ArrayItem.Assign(this._gltf.skins);
        ArrayItem.Assign(this._gltf.textures);
        if (this._gltf.nodes) {
            const nodeParents = {};
            for (const node of this._gltf.nodes) {
                if (node.children) {
                    for (const index of node.children) {
                        nodeParents[index] = node.index;
                    }
                }
            }
            const rootNode = this._createRootNode();
            for (const node of this._gltf.nodes) {
                const parentIndex = nodeParents[node.index];
                node.parent = parentIndex === undefined ? rootNode : this._gltf.nodes[parentIndex];
            }
        }
    }
    async _loadExtensionsAsync() {
        const extensionPromises = [];
        _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_21__.registeredGLTFExtensions.forEach((registeredExtension, name) => {
            // Don't load explicitly disabled extensions.
            if (this.parent.extensionOptions[name]?.enabled === false) {
                // But warn if the disabled extension is used by the model.
                if (registeredExtension.isGLTFExtension && this.isExtensionUsed(name)) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`Extension ${name} is used but has been explicitly disabled.`);
                }
            }
            // Load loader extensions that are not a glTF extension, as well as extensions that are glTF extensions and are used by the model.
            else if (!registeredExtension.isGLTFExtension || this.isExtensionUsed(name)) {
                extensionPromises.push((async () => {
                    const extension = await registeredExtension.factory(this);
                    if (extension.name !== name) {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`The name of the glTF loader extension instance does not match the registered name: ${extension.name} !== ${name}`);
                    }
                    this._parent.onExtensionLoadedObservable.notifyObservers(extension);
                    return extension;
                })());
            }
        });
        this._extensions.push(...(await Promise.all(extensionPromises)));
        this._extensions.sort((a, b) => (a.order || Number.MAX_VALUE) - (b.order || Number.MAX_VALUE));
        this._parent.onExtensionLoadedObservable.clear();
        if (this._gltf.extensionsRequired) {
            for (const name of this._gltf.extensionsRequired) {
                const available = this._extensions.some((extension) => extension.name === name && extension.enabled);
                if (!available) {
                    if (this.parent.extensionOptions[name]?.enabled === false) {
                        throw new Error(`Required extension ${name} is disabled`);
                    }
                    throw new Error(`Required extension ${name} is not available`);
                }
            }
        }
    }
    _createRootNode() {
        if (this._parent.customRootNode !== undefined) {
            this._rootBabylonMesh = this._parent.customRootNode;
            return {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                _babylonTransformNode: this._rootBabylonMesh === null ? undefined : this._rootBabylonMesh,
                index: -1,
            };
        }
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        const rootMesh = new core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_14__.Mesh("__root__", this._babylonScene);
        this._rootBabylonMesh = rootMesh;
        this._rootBabylonMesh._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        this._rootBabylonMesh.setEnabled(false);
        const rootNode = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            _babylonTransformNode: this._rootBabylonMesh,
            index: -1,
        };
        switch (this._parent.coordinateSystemMode) {
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderCoordinateSystemMode.AUTO: {
                if (!this._babylonScene.useRightHandedSystem) {
                    rootNode.rotation = [0, 1, 0, 0];
                    rootNode.scale = [1, 1, -1];
                    GLTFLoader._LoadTransform(rootNode, this._rootBabylonMesh);
                }
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED: {
                this._babylonScene.useRightHandedSystem = true;
                break;
            }
            default: {
                throw new Error(`Invalid coordinate system mode (${this._parent.coordinateSystemMode})`);
            }
        }
        this._parent.onMeshLoadedObservable.notifyObservers(rootMesh);
        return rootNode;
    }
    /**
     * Loads a glTF scene.
     * @param context The context when loading the asset
     * @param scene The glTF scene property
     * @returns A promise that resolves when the load is complete
     */
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    loadSceneAsync(context, scene) {
        const extensionPromise = this._extensionsLoadSceneAsync(context, scene);
        if (extensionPromise) {
            return extensionPromise;
        }
        const promises = new Array();
        this.logOpen(`${context} ${scene.name || ""}`);
        if (scene.nodes) {
            for (const index of scene.nodes) {
                const node = ArrayItem.Get(`${context}/nodes/${index}`, this._gltf.nodes, index);
                promises.push(this.loadNodeAsync(`/nodes/${node.index}`, node, (babylonMesh) => {
                    babylonMesh.parent = this._rootBabylonMesh;
                }));
            }
        }
        for (const action of this._postSceneLoadActions) {
            action();
        }
        promises.push(this._loadAnimationsAsync());
        this.logClose();
        return Promise.all(promises).then(() => { });
    }
    _forEachPrimitive(node, callback) {
        if (node._primitiveBabylonMeshes) {
            for (const babylonMesh of node._primitiveBabylonMeshes) {
                callback(babylonMesh);
            }
        }
    }
    _getGeometries() {
        const geometries = [];
        const nodes = this._gltf.nodes;
        if (nodes) {
            for (const node of nodes) {
                this._forEachPrimitive(node, (babylonMesh) => {
                    const geometry = babylonMesh.geometry;
                    if (geometry && geometries.indexOf(geometry) === -1) {
                        geometries.push(geometry);
                    }
                });
            }
        }
        return geometries;
    }
    _getMeshes() {
        const meshes = [];
        // Root mesh is always first, if available.
        if (this._rootBabylonMesh instanceof core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_13__.AbstractMesh) {
            meshes.push(this._rootBabylonMesh);
        }
        const nodes = this._gltf.nodes;
        if (nodes) {
            for (const node of nodes) {
                this._forEachPrimitive(node, (babylonMesh) => {
                    meshes.push(babylonMesh);
                });
            }
        }
        return meshes;
    }
    _getTransformNodes() {
        const transformNodes = [];
        const nodes = this._gltf.nodes;
        if (nodes) {
            for (const node of nodes) {
                if (node._babylonTransformNode && node._babylonTransformNode.getClassName() === "TransformNode") {
                    transformNodes.push(node._babylonTransformNode);
                }
                if (node._babylonTransformNodeForSkin) {
                    transformNodes.push(node._babylonTransformNodeForSkin);
                }
            }
        }
        return transformNodes;
    }
    _getSkeletons() {
        const skeletons = [];
        const skins = this._gltf.skins;
        if (skins) {
            for (const skin of skins) {
                if (skin._data) {
                    skeletons.push(skin._data.babylonSkeleton);
                }
            }
        }
        return skeletons;
    }
    _getAnimationGroups() {
        const animationGroups = [];
        const animations = this._gltf.animations;
        if (animations) {
            for (const animation of animations) {
                if (animation._babylonAnimationGroup) {
                    animationGroups.push(animation._babylonAnimationGroup);
                }
            }
        }
        return animationGroups;
    }
    _startAnimations() {
        switch (this._parent.animationStartMode) {
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderAnimationStartMode.NONE: {
                // do nothing
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderAnimationStartMode.FIRST: {
                const babylonAnimationGroups = this._getAnimationGroups();
                if (babylonAnimationGroups.length !== 0) {
                    babylonAnimationGroups[0].start(true);
                }
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFLoaderAnimationStartMode.ALL: {
                const babylonAnimationGroups = this._getAnimationGroups();
                for (const babylonAnimationGroup of babylonAnimationGroups) {
                    babylonAnimationGroup.start(true);
                }
                break;
            }
            default: {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Error(`Invalid animation start mode (${this._parent.animationStartMode})`);
                return;
            }
        }
    }
    /**
     * Loads a glTF node.
     * @param context The context when loading the asset
     * @param node The glTF node property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon mesh when the load is complete
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    loadNodeAsync(context, node, assign = () => { }) {
        const extensionPromise = this._extensionsLoadNodeAsync(context, node, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (node._babylonTransformNode) {
            throw new Error(`${context}: Invalid recursive node hierarchy`);
        }
        const promises = new Array();
        this.logOpen(`${context} ${node.name || ""}`);
        const loadNode = (babylonTransformNode) => {
            GLTFLoader.AddPointerMetadata(babylonTransformNode, context);
            GLTFLoader._LoadTransform(node, babylonTransformNode);
            if (node.camera != undefined) {
                const camera = ArrayItem.Get(`${context}/camera`, this._gltf.cameras, node.camera);
                promises.push(this.loadCameraAsync(`/cameras/${camera.index}`, camera, (babylonCamera) => {
                    babylonCamera.parent = babylonTransformNode;
                    if (!this._babylonScene.useRightHandedSystem) {
                        babylonTransformNode.scaling.x = -1; // Cancelling root node scaling for handedness so the view matrix does not end up flipped.
                    }
                }));
            }
            if (node.children) {
                for (const index of node.children) {
                    const childNode = ArrayItem.Get(`${context}/children/${index}`, this._gltf.nodes, index);
                    promises.push(this.loadNodeAsync(`/nodes/${childNode.index}`, childNode, (childBabylonMesh) => {
                        childBabylonMesh.parent = babylonTransformNode;
                    }));
                }
            }
            assign(babylonTransformNode);
        };
        const hasMesh = node.mesh != undefined;
        const hasSkin = this._parent.loadSkins && node.skin != undefined;
        if (!hasMesh || hasSkin) {
            const nodeName = node.name || `node${node.index}`;
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            const transformNode = new core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_10__.TransformNode(nodeName, this._babylonScene);
            transformNode._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            if (node.mesh == undefined) {
                node._babylonTransformNode = transformNode;
            }
            else {
                node._babylonTransformNodeForSkin = transformNode;
            }
            loadNode(transformNode);
        }
        if (hasMesh) {
            if (hasSkin) {
                // See https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins (second implementation note)
                // This code path will place the skinned mesh as a sibling of the skeleton root node without loading the
                // transform, which effectively ignores the transform of the skinned mesh, as per spec.
                const mesh = ArrayItem.Get(`${context}/mesh`, this._gltf.meshes, node.mesh);
                promises.push(this._loadMeshAsync(`/meshes/${mesh.index}`, node, mesh, (babylonTransformNode) => {
                    const babylonTransformNodeForSkin = node._babylonTransformNodeForSkin;
                    // Merge the metadata from the skin node to the skinned mesh in case a loader extension added metadata.
                    babylonTransformNode.metadata = (0,core_Misc_deepMerger__WEBPACK_IMPORTED_MODULE_23__.deepMerge)(babylonTransformNodeForSkin.metadata, babylonTransformNode.metadata || {});
                    const skin = ArrayItem.Get(`${context}/skin`, this._gltf.skins, node.skin);
                    promises.push(this._loadSkinAsync(`/skins/${skin.index}`, node, skin, (babylonSkeleton) => {
                        this._forEachPrimitive(node, (babylonMesh) => {
                            babylonMesh.skeleton = babylonSkeleton;
                        });
                        // Wait until all the nodes are parented before parenting the skinned mesh.
                        this._postSceneLoadActions.push(() => {
                            if (skin.skeleton != undefined) {
                                // Place the skinned mesh node as a sibling of the skeleton root node.
                                // Handle special case when the parent of the skeleton root is the skinned mesh.
                                const parentNode = ArrayItem.Get(`/skins/${skin.index}/skeleton`, this._gltf.nodes, skin.skeleton).parent;
                                if (node.index === parentNode.index) {
                                    babylonTransformNode.parent = babylonTransformNodeForSkin.parent;
                                }
                                else {
                                    babylonTransformNode.parent = parentNode._babylonTransformNode;
                                }
                            }
                            else {
                                babylonTransformNode.parent = this._rootBabylonMesh;
                            }
                            this._parent.onSkinLoadedObservable.notifyObservers({ node: babylonTransformNodeForSkin, skinnedNode: babylonTransformNode });
                        });
                    }));
                }));
            }
            else {
                const mesh = ArrayItem.Get(`${context}/mesh`, this._gltf.meshes, node.mesh);
                promises.push(this._loadMeshAsync(`/meshes/${mesh.index}`, node, mesh, loadNode));
            }
        }
        this.logClose();
        return Promise.all(promises).then(() => {
            this._forEachPrimitive(node, (babylonMesh) => {
                const asMesh = babylonMesh;
                if (!asMesh.isAnInstance && asMesh.geometry && asMesh.geometry.useBoundingInfoFromGeometry) {
                    // simply apply the world matrices to the bounding info - the extends are already ok
                    babylonMesh._updateBoundingInfo();
                }
                else {
                    babylonMesh.refreshBoundingInfo(true, true);
                }
            });
            return node._babylonTransformNode;
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadMeshAsync(context, node, mesh, assign) {
        const primitives = mesh.primitives;
        if (!primitives || !primitives.length) {
            throw new Error(`${context}: Primitives are missing`);
        }
        if (primitives[0].index == undefined) {
            ArrayItem.Assign(primitives);
        }
        const promises = new Array();
        this.logOpen(`${context} ${mesh.name || ""}`);
        const name = node.name || `node${node.index}`;
        if (primitives.length === 1) {
            const primitive = mesh.primitives[0];
            promises.push(this._loadMeshPrimitiveAsync(`${context}/primitives/${primitive.index}`, name, node, mesh, primitive, (babylonMesh) => {
                node._babylonTransformNode = babylonMesh;
                node._primitiveBabylonMeshes = [babylonMesh];
            }));
        }
        else {
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            node._babylonTransformNode = new core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_10__.TransformNode(name, this._babylonScene);
            node._babylonTransformNode._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            node._primitiveBabylonMeshes = [];
            for (const primitive of primitives) {
                promises.push(this._loadMeshPrimitiveAsync(`${context}/primitives/${primitive.index}`, `${name}_primitive${primitive.index}`, node, mesh, primitive, (babylonMesh) => {
                    babylonMesh.parent = node._babylonTransformNode;
                    node._primitiveBabylonMeshes.push(babylonMesh);
                }));
            }
        }
        assign(node._babylonTransformNode);
        this.logClose();
        return Promise.all(promises).then(() => {
            return node._babylonTransformNode;
        });
    }
    /**
     * @internal Define this method to modify the default behavior when loading data for mesh primitives.
     * @param context The context when loading the asset
     * @param name The mesh name when loading the asset
     * @param node The glTF node when loading the asset
     * @param mesh The glTF mesh when loading the asset
     * @param primitive The glTF mesh primitive property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded mesh when the load is complete or null if not handled
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign) {
        const extensionPromise = this._extensionsLoadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen(`${context}`);
        const shouldInstance = this._disableInstancedMesh === 0 && this._parent.createInstances && node.skin == undefined && !mesh.primitives[0].targets;
        let babylonAbstractMesh;
        let promise;
        if (shouldInstance && primitive._instanceData) {
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            babylonAbstractMesh = primitive._instanceData.babylonSourceMesh.createInstance(name);
            babylonAbstractMesh._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            promise = primitive._instanceData.promise;
        }
        else {
            const promises = new Array();
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            const babylonMesh = new core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_14__.Mesh(name, this._babylonScene);
            babylonMesh._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            babylonMesh.sideOrientation = this._babylonScene.useRightHandedSystem ? core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.CounterClockWiseSideOrientation : core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.ClockWiseSideOrientation;
            this._createMorphTargets(context, node, mesh, primitive, babylonMesh);
            promises.push(this._loadVertexDataAsync(context, primitive, babylonMesh).then(async (babylonGeometry) => {
                return await this._loadMorphTargetsAsync(context, primitive, babylonMesh, babylonGeometry).then(() => {
                    if (this._disposed) {
                        return;
                    }
                    this._babylonScene._blockEntityCollection = !!this._assetContainer;
                    babylonGeometry.applyToMesh(babylonMesh);
                    babylonGeometry._parentContainer = this._assetContainer;
                    this._babylonScene._blockEntityCollection = false;
                });
            }));
            if (!this.parent.skipMaterials) {
                const babylonDrawMode = GLTFLoader._GetDrawMode(context, primitive.mode);
                if (primitive.material == undefined) {
                    let babylonMaterial = this._defaultBabylonMaterialData[babylonDrawMode];
                    if (!babylonMaterial) {
                        babylonMaterial = this._createDefaultMaterial("__GLTFLoader._default", babylonDrawMode);
                        this._parent.onMaterialLoadedObservable.notifyObservers(babylonMaterial);
                        this._defaultBabylonMaterialData[babylonDrawMode] = babylonMaterial;
                    }
                    babylonMesh.material = babylonMaterial;
                }
                else {
                    const material = ArrayItem.Get(`${context}/material`, this._gltf.materials, primitive.material);
                    promises.push(this._loadMaterialAsync(`/materials/${material.index}`, material, babylonMesh, babylonDrawMode, (babylonMaterial) => {
                        babylonMesh.material = babylonMaterial;
                    }));
                }
            }
            promise = Promise.all(promises);
            if (shouldInstance) {
                primitive._instanceData = {
                    babylonSourceMesh: babylonMesh,
                    promise: promise,
                };
            }
            babylonAbstractMesh = babylonMesh;
        }
        GLTFLoader.AddPointerMetadata(babylonAbstractMesh, context);
        this._parent.onMeshLoadedObservable.notifyObservers(babylonAbstractMesh);
        assign(babylonAbstractMesh);
        this.logClose();
        return promise.then(() => {
            return babylonAbstractMesh;
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadVertexDataAsync(context, primitive, babylonMesh) {
        const extensionPromise = this._extensionsLoadVertexDataAsync(context, primitive, babylonMesh);
        if (extensionPromise) {
            return extensionPromise;
        }
        const attributes = primitive.attributes;
        if (!attributes) {
            throw new Error(`${context}: Attributes are missing`);
        }
        const promises = new Array();
        const babylonGeometry = new core_Meshes_geometry__WEBPACK_IMPORTED_MODULE_12__.Geometry(babylonMesh.name, this._babylonScene);
        if (primitive.indices == undefined) {
            babylonMesh.isUnIndexed = true;
        }
        else {
            const accessor = ArrayItem.Get(`${context}/indices`, this._gltf.accessors, primitive.indices);
            promises.push(this._loadIndicesAccessorAsync(`/accessors/${accessor.index}`, accessor).then((data) => {
                babylonGeometry.setIndices(data);
            }));
        }
        const loadAttribute = (name, kind, callback) => {
            if (attributes[name] == undefined) {
                return;
            }
            babylonMesh._delayInfo = babylonMesh._delayInfo || [];
            if (babylonMesh._delayInfo.indexOf(kind) === -1) {
                babylonMesh._delayInfo.push(kind);
            }
            const accessor = ArrayItem.Get(`${context}/attributes/${name}`, this._gltf.accessors, attributes[name]);
            promises.push(this._loadVertexAccessorAsync(`/accessors/${accessor.index}`, accessor, kind).then((babylonVertexBuffer) => {
                if (babylonVertexBuffer.getKind() === core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.PositionKind && !this.parent.alwaysComputeBoundingBox && !babylonMesh.skeleton) {
                    const babylonBoundingInfo = LoadBoundingInfoFromPositionAccessor(accessor);
                    if (babylonBoundingInfo) {
                        babylonGeometry._boundingInfo = babylonBoundingInfo;
                        babylonGeometry.useBoundingInfoFromGeometry = true;
                    }
                }
                babylonGeometry.setVerticesBuffer(babylonVertexBuffer, accessor.count);
            }));
            if (kind == core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.MatricesIndicesExtraKind) {
                babylonMesh.numBoneInfluencers = 8;
            }
            if (callback) {
                callback(accessor);
            }
        };
        loadAttribute("POSITION", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.PositionKind);
        loadAttribute("NORMAL", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.NormalKind);
        loadAttribute("TANGENT", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.TangentKind);
        loadAttribute("TEXCOORD_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UVKind);
        loadAttribute("TEXCOORD_1", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UV2Kind);
        loadAttribute("TEXCOORD_2", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UV3Kind);
        loadAttribute("TEXCOORD_3", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UV4Kind);
        loadAttribute("TEXCOORD_4", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UV5Kind);
        loadAttribute("TEXCOORD_5", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UV6Kind);
        loadAttribute("JOINTS_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.MatricesIndicesKind);
        loadAttribute("WEIGHTS_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.MatricesWeightsKind);
        loadAttribute("JOINTS_1", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.MatricesIndicesExtraKind);
        loadAttribute("WEIGHTS_1", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.MatricesWeightsExtraKind);
        loadAttribute("COLOR_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.ColorKind, (accessor) => {
            if (accessor.type === "VEC4" /* AccessorType.VEC4 */) {
                babylonMesh.hasVertexAlpha = true;
            }
        });
        return Promise.all(promises).then(() => {
            return babylonGeometry;
        });
    }
    _createMorphTargets(context, node, mesh, primitive, babylonMesh) {
        if (!primitive.targets || !this._parent.loadMorphTargets) {
            return;
        }
        if (node._numMorphTargets == undefined) {
            node._numMorphTargets = primitive.targets.length;
        }
        else if (primitive.targets.length !== node._numMorphTargets) {
            throw new Error(`${context}: Primitives do not have the same number of targets`);
        }
        const targetNames = mesh.extras ? mesh.extras.targetNames : null;
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        babylonMesh.morphTargetManager = new core_Morph_morphTargetManager__WEBPACK_IMPORTED_MODULE_16__.MorphTargetManager(this._babylonScene);
        babylonMesh.morphTargetManager._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        babylonMesh.morphTargetManager.areUpdatesFrozen = true;
        for (let index = 0; index < primitive.targets.length; index++) {
            const weight = node.weights ? node.weights[index] : mesh.weights ? mesh.weights[index] : 0;
            const name = targetNames ? targetNames[index] : `morphTarget${index}`;
            babylonMesh.morphTargetManager.addTarget(new core_Morph_morphTarget__WEBPACK_IMPORTED_MODULE_15__.MorphTarget(name, weight, babylonMesh.getScene()));
            // TODO: tell the target whether it has positions, normals, tangents
        }
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadMorphTargetsAsync(context, primitive, babylonMesh, babylonGeometry) {
        if (!primitive.targets || !this._parent.loadMorphTargets) {
            return Promise.resolve();
        }
        const promises = new Array();
        const morphTargetManager = babylonMesh.morphTargetManager;
        for (let index = 0; index < morphTargetManager.numTargets; index++) {
            const babylonMorphTarget = morphTargetManager.getTarget(index);
            promises.push(this._loadMorphTargetVertexDataAsync(`${context}/targets/${index}`, babylonGeometry, primitive.targets[index], babylonMorphTarget));
        }
        return Promise.all(promises).then(() => {
            morphTargetManager.areUpdatesFrozen = false;
        });
    }
    async _loadMorphTargetVertexDataAsync(context, babylonGeometry, attributes, babylonMorphTarget) {
        const promises = new Array();
        const loadAttribute = (attribute, kind, setData) => {
            if (attributes[attribute] == undefined) {
                return;
            }
            const babylonVertexBuffer = babylonGeometry.getVertexBuffer(kind);
            if (!babylonVertexBuffer) {
                return;
            }
            const accessor = ArrayItem.Get(`${context}/${attribute}`, this._gltf.accessors, attributes[attribute]);
            promises.push(this._loadFloatAccessorAsync(`/accessors/${accessor.index}`, accessor).then((data) => {
                setData(babylonVertexBuffer, data);
            }));
        };
        loadAttribute("POSITION", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.PositionKind, (babylonVertexBuffer, data) => {
            const positions = new Float32Array(data.length);
            babylonVertexBuffer.forEach(data.length, (value, index) => {
                positions[index] = data[index] + value;
            });
            babylonMorphTarget.setPositions(positions);
        });
        loadAttribute("NORMAL", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.NormalKind, (babylonVertexBuffer, data) => {
            const normals = new Float32Array(data.length);
            babylonVertexBuffer.forEach(normals.length, (value, index) => {
                normals[index] = data[index] + value;
            });
            babylonMorphTarget.setNormals(normals);
        });
        loadAttribute("TANGENT", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.TangentKind, (babylonVertexBuffer, data) => {
            const tangents = new Float32Array((data.length / 3) * 4);
            let dataIndex = 0;
            babylonVertexBuffer.forEach((data.length / 3) * 4, (value, index) => {
                // Tangent data for morph targets is stored as xyz delta.
                // The vertexData.tangent is stored as xyzw.
                // So we need to skip every fourth vertexData.tangent.
                if ((index + 1) % 4 !== 0) {
                    tangents[dataIndex] = data[dataIndex] + value;
                    dataIndex++;
                }
            });
            babylonMorphTarget.setTangents(tangents);
        });
        loadAttribute("TEXCOORD_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UVKind, (babylonVertexBuffer, data) => {
            const uvs = new Float32Array(data.length);
            babylonVertexBuffer.forEach(data.length, (value, index) => {
                uvs[index] = data[index] + value;
            });
            babylonMorphTarget.setUVs(uvs);
        });
        loadAttribute("TEXCOORD_1", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.UV2Kind, (babylonVertexBuffer, data) => {
            const uvs = new Float32Array(data.length);
            babylonVertexBuffer.forEach(data.length, (value, index) => {
                uvs[index] = data[index] + value;
            });
            babylonMorphTarget.setUV2s(uvs);
        });
        loadAttribute("COLOR_0", core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.ColorKind, (babylonVertexBuffer, data) => {
            let colors = null;
            const componentSize = babylonVertexBuffer.getSize();
            if (componentSize === 3) {
                colors = new Float32Array((data.length / 3) * 4);
                babylonVertexBuffer.forEach(data.length, (value, index) => {
                    const pixid = Math.floor(index / 3);
                    const channel = index % 3;
                    colors[4 * pixid + channel] = data[3 * pixid + channel] + value;
                });
                for (let i = 0; i < data.length / 3; ++i) {
                    colors[4 * i + 3] = 1;
                }
            }
            else if (componentSize === 4) {
                colors = new Float32Array(data.length);
                babylonVertexBuffer.forEach(data.length, (value, index) => {
                    colors[index] = data[index] + value;
                });
            }
            else {
                throw new Error(`${context}: Invalid number of components (${componentSize}) for COLOR_0 attribute`);
            }
            babylonMorphTarget.setColors(colors);
        });
        return await Promise.all(promises).then(() => { });
    }
    static _LoadTransform(node, babylonNode) {
        // Ignore the TRS of skinned nodes.
        // See https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins (second implementation note)
        if (node.skin != undefined) {
            return;
        }
        let position = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        let rotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity();
        let scaling = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.One();
        if (node.matrix) {
            const matrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
            matrix.decompose(scaling, rotation, position);
        }
        else {
            if (node.translation) {
                position = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation);
            }
            if (node.rotation) {
                rotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation);
            }
            if (node.scale) {
                scaling = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale);
            }
        }
        babylonNode.position = position;
        babylonNode.rotationQuaternion = rotation;
        babylonNode.scaling = scaling;
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadSkinAsync(context, node, skin, assign) {
        if (!this._parent.loadSkins) {
            return Promise.resolve();
        }
        const extensionPromise = this._extensionsLoadSkinAsync(context, node, skin);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (skin._data) {
            assign(skin._data.babylonSkeleton);
            return skin._data.promise;
        }
        const skeletonId = `skeleton${skin.index}`;
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        const babylonSkeleton = new core_Bones_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton(skin.name || skeletonId, skeletonId, this._babylonScene);
        babylonSkeleton._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        this._loadBones(context, skin, babylonSkeleton);
        const promise = this._loadSkinInverseBindMatricesDataAsync(context, skin).then((inverseBindMatricesData) => {
            this._updateBoneMatrices(babylonSkeleton, inverseBindMatricesData);
        });
        skin._data = {
            babylonSkeleton: babylonSkeleton,
            promise: promise,
        };
        assign(babylonSkeleton);
        return promise;
    }
    _loadBones(context, skin, babylonSkeleton) {
        if (skin.skeleton == undefined || this._parent.alwaysComputeSkeletonRootNode) {
            const rootNode = this._findSkeletonRootNode(`${context}/joints`, skin.joints);
            if (rootNode) {
                if (skin.skeleton === undefined) {
                    skin.skeleton = rootNode.index;
                }
                else {
                    const isParent = (a, b) => {
                        for (; b.parent; b = b.parent) {
                            if (b.parent === a) {
                                return true;
                            }
                        }
                        return false;
                    };
                    const skeletonNode = ArrayItem.Get(`${context}/skeleton`, this._gltf.nodes, skin.skeleton);
                    if (skeletonNode !== rootNode && !isParent(skeletonNode, rootNode)) {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}/skeleton: Overriding with nearest common ancestor as skeleton node is not a common root`);
                        skin.skeleton = rootNode.index;
                    }
                }
            }
            else {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}: Failed to find common root`);
            }
        }
        const babylonBones = {};
        for (const index of skin.joints) {
            const node = ArrayItem.Get(`${context}/joints/${index}`, this._gltf.nodes, index);
            this._loadBone(node, skin, babylonSkeleton, babylonBones);
        }
    }
    _findSkeletonRootNode(context, joints) {
        if (joints.length === 0) {
            return null;
        }
        const paths = {};
        for (const index of joints) {
            const path = [];
            let node = ArrayItem.Get(`${context}/${index}`, this._gltf.nodes, index);
            while (node.index !== -1) {
                path.unshift(node);
                node = node.parent;
            }
            paths[index] = path;
        }
        let rootNode = null;
        for (let i = 0;; ++i) {
            let path = paths[joints[0]];
            if (i >= path.length) {
                return rootNode;
            }
            const node = path[i];
            for (let j = 1; j < joints.length; ++j) {
                path = paths[joints[j]];
                if (i >= path.length || node !== path[i]) {
                    return rootNode;
                }
            }
            rootNode = node;
        }
    }
    _loadBone(node, skin, babylonSkeleton, babylonBones) {
        node._isJoint = true;
        let babylonBone = babylonBones[node.index];
        if (babylonBone) {
            return babylonBone;
        }
        let parentBabylonBone = null;
        if (node.index !== skin.skeleton) {
            if (node.parent && node.parent.index !== -1) {
                parentBabylonBone = this._loadBone(node.parent, skin, babylonSkeleton, babylonBones);
            }
            else if (skin.skeleton !== undefined) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`/skins/${skin.index}/skeleton: Skeleton node is not a common root`);
            }
        }
        const boneIndex = skin.joints.indexOf(node.index);
        babylonBone = new core_Bones_bone__WEBPACK_IMPORTED_MODULE_6__.Bone(node.name || `joint${node.index}`, babylonSkeleton, parentBabylonBone, this._getNodeMatrix(node), null, null, boneIndex);
        babylonBones[node.index] = babylonBone;
        // Wait until the scene is loaded to ensure the transform nodes are loaded.
        this._postSceneLoadActions.push(() => {
            // Link the Babylon bone with the corresponding Babylon transform node.
            // A glTF joint is a pointer to a glTF node in the glTF node hierarchy similar to Unity3D.
            babylonBone.linkTransformNode(node._babylonTransformNode);
        });
        return babylonBone;
    }
    _loadSkinInverseBindMatricesDataAsync(context, skin) {
        if (skin.inverseBindMatrices == undefined) {
            return Promise.resolve(null);
        }
        const accessor = ArrayItem.Get(`${context}/inverseBindMatrices`, this._gltf.accessors, skin.inverseBindMatrices);
        return this._loadFloatAccessorAsync(`/accessors/${accessor.index}`, accessor);
    }
    _updateBoneMatrices(babylonSkeleton, inverseBindMatricesData) {
        for (const babylonBone of babylonSkeleton.bones) {
            const baseMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Identity();
            const boneIndex = babylonBone._index;
            if (inverseBindMatricesData && boneIndex !== -1) {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArrayToRef(inverseBindMatricesData, boneIndex * 16, baseMatrix);
                baseMatrix.invertToRef(baseMatrix);
            }
            const babylonParentBone = babylonBone.getParent();
            if (babylonParentBone) {
                baseMatrix.multiplyToRef(babylonParentBone.getAbsoluteInverseBindMatrix(), baseMatrix);
            }
            babylonBone.updateMatrix(baseMatrix, false, false);
            babylonBone._updateAbsoluteBindMatrices(undefined, false);
        }
    }
    _getNodeMatrix(node) {
        return node.matrix
            ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix)
            : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(node.scale ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale) : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.One(), node.rotation ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation) : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.Identity(), node.translation ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation) : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero());
    }
    /**
     * Loads a glTF camera.
     * @param context The context when loading the asset
     * @param camera The glTF camera property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon camera when the load is complete
     */
    loadCameraAsync(context, camera, assign = () => { }) {
        const extensionPromise = this._extensionsLoadCameraAsync(context, camera, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        const promises = new Array();
        this.logOpen(`${context} ${camera.name || ""}`);
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        const babylonCamera = new core_Cameras_freeCamera__WEBPACK_IMPORTED_MODULE_5__.FreeCamera(camera.name || `camera${camera.index}`, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), this._babylonScene, false);
        babylonCamera._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        camera._babylonCamera = babylonCamera;
        // glTF cameras look towards the local -Z axis.
        babylonCamera.setTarget(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -1));
        switch (camera.type) {
            case "perspective" /* CameraType.PERSPECTIVE */: {
                const perspective = camera.perspective;
                if (!perspective) {
                    throw new Error(`${context}: Camera perspective properties are missing`);
                }
                babylonCamera.fov = perspective.yfov;
                babylonCamera.minZ = perspective.znear;
                babylonCamera.maxZ = perspective.zfar || 0;
                break;
            }
            case "orthographic" /* CameraType.ORTHOGRAPHIC */: {
                if (!camera.orthographic) {
                    throw new Error(`${context}: Camera orthographic properties are missing`);
                }
                babylonCamera.mode = core_Cameras_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.ORTHOGRAPHIC_CAMERA;
                babylonCamera.orthoLeft = -camera.orthographic.xmag;
                babylonCamera.orthoRight = camera.orthographic.xmag;
                babylonCamera.orthoBottom = -camera.orthographic.ymag;
                babylonCamera.orthoTop = camera.orthographic.ymag;
                babylonCamera.minZ = camera.orthographic.znear;
                babylonCamera.maxZ = camera.orthographic.zfar;
                break;
            }
            default: {
                throw new Error(`${context}: Invalid camera type (${camera.type})`);
            }
        }
        GLTFLoader.AddPointerMetadata(babylonCamera, context);
        this._parent.onCameraLoadedObservable.notifyObservers(babylonCamera);
        assign(babylonCamera);
        this.logClose();
        return Promise.all(promises).then(() => {
            return babylonCamera;
        });
    }
    _loadAnimationsAsync() {
        this._parent._startPerformanceCounter("Load animations");
        const animations = this._gltf.animations;
        if (!animations) {
            return Promise.resolve();
        }
        const promises = new Array();
        for (let index = 0; index < animations.length; index++) {
            const animation = animations[index];
            promises.push(this.loadAnimationAsync(`/animations/${animation.index}`, animation).then((animationGroup) => {
                // Delete the animation group if it ended up not having any animations in it.
                if (animationGroup.targetedAnimations.length === 0) {
                    animationGroup.dispose();
                }
            }));
        }
        return Promise.all(promises).then(() => {
            this._parent._endPerformanceCounter("Load animations");
        });
    }
    /**
     * Loads a glTF animation.
     * @param context The context when loading the asset
     * @param animation The glTF animation property
     * @returns A promise that resolves with the loaded Babylon animation group when the load is complete
     */
    loadAnimationAsync(context, animation) {
        this._parent._startPerformanceCounter("Load animation");
        const promise = this._extensionsLoadAnimationAsync(context, animation);
        if (promise) {
            return promise;
        }
        // eslint-disable-next-line @typescript-eslint/naming-convention
        return LazyAnimationGroupModulePromise.value.then(({ AnimationGroup }) => {
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            const babylonAnimationGroup = new AnimationGroup(animation.name || `animation${animation.index}`, this._babylonScene);
            babylonAnimationGroup._parentContainer = this._assetContainer;
            this._babylonScene._blockEntityCollection = false;
            animation._babylonAnimationGroup = babylonAnimationGroup;
            const promises = new Array();
            ArrayItem.Assign(animation.channels);
            ArrayItem.Assign(animation.samplers);
            for (const channel of animation.channels) {
                promises.push(this._loadAnimationChannelAsync(`${context}/channels/${channel.index}`, context, animation, channel, (babylonTarget, babylonAnimation) => {
                    babylonTarget.animations = babylonTarget.animations || [];
                    babylonTarget.animations.push(babylonAnimation);
                    babylonAnimationGroup.addTargetedAnimation(babylonAnimation, babylonTarget);
                }));
            }
            this._parent._endPerformanceCounter("Load animation");
            return Promise.all(promises).then(() => {
                babylonAnimationGroup.normalize(0);
                return babylonAnimationGroup;
            });
        });
    }
    /**
     * @hidden
     * Loads a glTF animation channel.
     * @param context The context when loading the asset
     * @param animationContext The context of the animation when loading the asset
     * @param animation The glTF animation property
     * @param channel The glTF animation channel property
     * @param onLoad Called for each animation loaded
     * @returns A void promise that resolves when the load is complete
     */
    _loadAnimationChannelAsync(context, animationContext, animation, channel, onLoad) {
        const promise = this._extensionsLoadAnimationChannelAsync(context, animationContext, animation, channel, onLoad);
        if (promise) {
            return promise;
        }
        if (channel.target.node == undefined) {
            return Promise.resolve();
        }
        const targetNode = ArrayItem.Get(`${context}/target/node`, this._gltf.nodes, channel.target.node);
        const channelTargetPath = channel.target.path;
        const pathIsWeights = channelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */;
        // Ignore animations that have no animation targets.
        if ((pathIsWeights && !targetNode._numMorphTargets) || (!pathIsWeights && !targetNode._babylonTransformNode)) {
            return Promise.resolve();
        }
        // Don't load node animations if disabled.
        if (!this._parent.loadNodeAnimations && !pathIsWeights && !targetNode._isJoint) {
            return Promise.resolve();
        }
        // async-load the animation sampler to provide the interpolation of the channelTargetPath
        return LazyLoaderAnimationModulePromise.value.then(() => {
            let properties;
            switch (channelTargetPath) {
                case "translation" /* AnimationChannelTargetPath.TRANSLATION */: {
                    properties = (0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_22__.GetMappingForKey)("/nodes/{}/translation")?.interpolation;
                    break;
                }
                case "rotation" /* AnimationChannelTargetPath.ROTATION */: {
                    properties = (0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_22__.GetMappingForKey)("/nodes/{}/rotation")?.interpolation;
                    break;
                }
                case "scale" /* AnimationChannelTargetPath.SCALE */: {
                    properties = (0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_22__.GetMappingForKey)("/nodes/{}/scale")?.interpolation;
                    break;
                }
                case "weights" /* AnimationChannelTargetPath.WEIGHTS */: {
                    properties = (0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_22__.GetMappingForKey)("/nodes/{}/weights")?.interpolation;
                    break;
                }
                default: {
                    throw new Error(`${context}/target/path: Invalid value (${channel.target.path})`);
                }
            }
            // stay safe
            if (!properties) {
                throw new Error(`${context}/target/path: Could not find interpolation properties for target path (${channel.target.path})`);
            }
            const targetInfo = {
                object: targetNode,
                info: properties,
            };
            return this._loadAnimationChannelFromTargetInfoAsync(context, animationContext, animation, channel, targetInfo, onLoad);
        });
    }
    /**
     * @hidden
     * Loads a glTF animation channel.
     * @param context The context when loading the asset
     * @param animationContext The context of the animation when loading the asset
     * @param animation The glTF animation property
     * @param channel The glTF animation channel property
     * @param targetInfo The glTF target and properties
     * @param onLoad Called for each animation loaded
     * @returns A void promise that resolves when the load is complete
     */
    _loadAnimationChannelFromTargetInfoAsync(context, animationContext, animation, channel, targetInfo, onLoad) {
        const fps = this.parent.targetFps;
        const invfps = 1 / fps;
        const sampler = ArrayItem.Get(`${context}/sampler`, animation.samplers, channel.sampler);
        return this._loadAnimationSamplerAsync(`${animationContext}/samplers/${channel.sampler}`, sampler).then((data) => {
            let numAnimations = 0;
            const target = targetInfo.object;
            const propertyInfos = targetInfo.info;
            // Extract the corresponding values from the read value.
            // GLTF values may be dispatched to several Babylon properties.
            // For example, baseColorFactor [`r`, `g`, `b`, `a`] is dispatched to
            // - albedoColor as Color3(`r`, `g`, `b`)
            // - alpha as `a`
            for (const propertyInfo of propertyInfos) {
                const stride = propertyInfo.getStride(target);
                const input = data.input;
                const output = data.output;
                const keys = new Array(input.length);
                let outputOffset = 0;
                switch (data.interpolation) {
                    case "STEP" /* AnimationSamplerInterpolation.STEP */: {
                        for (let index = 0; index < input.length; index++) {
                            const value = propertyInfo.getValue(target, output, outputOffset, 1);
                            outputOffset += stride;
                            keys[index] = {
                                frame: input[index] * fps,
                                value: value,
                                interpolation: 1 /* AnimationKeyInterpolation.STEP */,
                            };
                        }
                        break;
                    }
                    case "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */: {
                        for (let index = 0; index < input.length; index++) {
                            const inTangent = propertyInfo.getValue(target, output, outputOffset, invfps);
                            outputOffset += stride;
                            const value = propertyInfo.getValue(target, output, outputOffset, 1);
                            outputOffset += stride;
                            const outTangent = propertyInfo.getValue(target, output, outputOffset, invfps);
                            outputOffset += stride;
                            keys[index] = {
                                frame: input[index] * fps,
                                inTangent: inTangent,
                                value: value,
                                outTangent: outTangent,
                            };
                        }
                        break;
                    }
                    case "LINEAR" /* AnimationSamplerInterpolation.LINEAR */: {
                        for (let index = 0; index < input.length; index++) {
                            const value = propertyInfo.getValue(target, output, outputOffset, 1);
                            outputOffset += stride;
                            keys[index] = {
                                frame: input[index] * fps,
                                value: value,
                            };
                        }
                        break;
                    }
                }
                if (outputOffset > 0) {
                    const name = `${animation.name || `animation${animation.index}`}_channel${channel.index}_${numAnimations}`;
                    const babylonAnimations = propertyInfo.buildAnimations(target, name, fps, keys);
                    for (const babylonAnimation of babylonAnimations) {
                        numAnimations++;
                        onLoad(babylonAnimation.babylonAnimatable, babylonAnimation.babylonAnimation);
                    }
                }
            }
        });
    }
    _loadAnimationSamplerAsync(context, sampler) {
        if (sampler._data) {
            return sampler._data;
        }
        const interpolation = sampler.interpolation || "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
        switch (interpolation) {
            case "STEP" /* AnimationSamplerInterpolation.STEP */:
            case "LINEAR" /* AnimationSamplerInterpolation.LINEAR */:
            case "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */: {
                break;
            }
            default: {
                throw new Error(`${context}/interpolation: Invalid value (${sampler.interpolation})`);
            }
        }
        const inputAccessor = ArrayItem.Get(`${context}/input`, this._gltf.accessors, sampler.input);
        const outputAccessor = ArrayItem.Get(`${context}/output`, this._gltf.accessors, sampler.output);
        sampler._data = Promise.all([
            this._loadFloatAccessorAsync(`/accessors/${inputAccessor.index}`, inputAccessor),
            this._loadFloatAccessorAsync(`/accessors/${outputAccessor.index}`, outputAccessor),
        ]).then(([inputData, outputData]) => {
            return {
                input: inputData,
                interpolation: interpolation,
                output: outputData,
            };
        });
        return sampler._data;
    }
    /**
     * Loads a glTF buffer.
     * @param context The context when loading the asset
     * @param buffer The glTF buffer property
     * @param byteOffset The byte offset to use
     * @param byteLength The byte length to use
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadBufferAsync(context, buffer, byteOffset, byteLength) {
        const extensionPromise = this._extensionsLoadBufferAsync(context, buffer, byteOffset, byteLength);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (!buffer._data) {
            if (buffer.uri) {
                buffer._data = this.loadUriAsync(`${context}/uri`, buffer, buffer.uri);
            }
            else {
                if (!this._bin) {
                    throw new Error(`${context}: Uri is missing or the binary glTF is missing its binary chunk`);
                }
                buffer._data = this._bin.readAsync(0, buffer.byteLength);
            }
        }
        return buffer._data.then((data) => {
            try {
                return new Uint8Array(data.buffer, data.byteOffset + byteOffset, byteLength);
            }
            catch (e) {
                throw new Error(`${context}: ${e.message}`);
            }
        });
    }
    /**
     * Loads a glTF buffer view.
     * @param context The context when loading the asset
     * @param bufferView The glTF buffer view property
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadBufferViewAsync(context, bufferView) {
        const extensionPromise = this._extensionsLoadBufferViewAsync(context, bufferView);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (bufferView._data) {
            return bufferView._data;
        }
        const buffer = ArrayItem.Get(`${context}/buffer`, this._gltf.buffers, bufferView.buffer);
        bufferView._data = this.loadBufferAsync(`/buffers/${buffer.index}`, buffer, bufferView.byteOffset || 0, bufferView.byteLength);
        return bufferView._data;
    }
    _loadAccessorAsync(context, accessor, constructor) {
        if (accessor._data) {
            return accessor._data;
        }
        const numComponents = GLTFLoader._GetNumComponents(context, accessor.type);
        const byteStride = numComponents * core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.GetTypeByteLength(accessor.componentType);
        const length = numComponents * accessor.count;
        if (accessor.bufferView == undefined) {
            accessor._data = Promise.resolve(new constructor(length));
        }
        else {
            const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, accessor.bufferView);
            accessor._data = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then((data) => {
                if (accessor.componentType === 5126 /* AccessorComponentType.FLOAT */ && !accessor.normalized && (!bufferView.byteStride || bufferView.byteStride === byteStride)) {
                    return GLTFLoader._GetTypedArray(context, accessor.componentType, data, accessor.byteOffset, length);
                }
                else {
                    const typedArray = new constructor(length);
                    core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.ForEach(data, accessor.byteOffset || 0, bufferView.byteStride || byteStride, numComponents, accessor.componentType, typedArray.length, accessor.normalized || false, (value, index) => {
                        typedArray[index] = value;
                    });
                    return typedArray;
                }
            });
        }
        if (accessor.sparse) {
            const sparse = accessor.sparse;
            accessor._data = accessor._data.then((data) => {
                const typedArray = data;
                const indicesBufferView = ArrayItem.Get(`${context}/sparse/indices/bufferView`, this._gltf.bufferViews, sparse.indices.bufferView);
                const valuesBufferView = ArrayItem.Get(`${context}/sparse/values/bufferView`, this._gltf.bufferViews, sparse.values.bufferView);
                return Promise.all([
                    this.loadBufferViewAsync(`/bufferViews/${indicesBufferView.index}`, indicesBufferView),
                    this.loadBufferViewAsync(`/bufferViews/${valuesBufferView.index}`, valuesBufferView),
                ]).then(([indicesData, valuesData]) => {
                    const indices = GLTFLoader._GetTypedArray(`${context}/sparse/indices`, sparse.indices.componentType, indicesData, sparse.indices.byteOffset, sparse.count);
                    const sparseLength = numComponents * sparse.count;
                    let values;
                    if (accessor.componentType === 5126 /* AccessorComponentType.FLOAT */ && !accessor.normalized) {
                        values = GLTFLoader._GetTypedArray(`${context}/sparse/values`, accessor.componentType, valuesData, sparse.values.byteOffset, sparseLength);
                    }
                    else {
                        const sparseData = GLTFLoader._GetTypedArray(`${context}/sparse/values`, accessor.componentType, valuesData, sparse.values.byteOffset, sparseLength);
                        values = new constructor(sparseLength);
                        core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.ForEach(sparseData, 0, byteStride, numComponents, accessor.componentType, values.length, accessor.normalized || false, (value, index) => {
                            values[index] = value;
                        });
                    }
                    let valuesIndex = 0;
                    for (let indicesIndex = 0; indicesIndex < indices.length; indicesIndex++) {
                        let dataIndex = indices[indicesIndex] * numComponents;
                        for (let componentIndex = 0; componentIndex < numComponents; componentIndex++) {
                            typedArray[dataIndex++] = values[valuesIndex++];
                        }
                    }
                    return typedArray;
                });
            });
        }
        return accessor._data;
    }
    /**
     * @internal
     */
    _loadFloatAccessorAsync(context, accessor) {
        return this._loadAccessorAsync(context, accessor, Float32Array);
    }
    /**
     * @internal
     */
    _loadIndicesAccessorAsync(context, accessor) {
        if (accessor.type !== "SCALAR" /* AccessorType.SCALAR */) {
            throw new Error(`${context}/type: Invalid value ${accessor.type}`);
        }
        if (accessor.componentType !== 5121 /* AccessorComponentType.UNSIGNED_BYTE */ &&
            accessor.componentType !== 5123 /* AccessorComponentType.UNSIGNED_SHORT */ &&
            accessor.componentType !== 5125 /* AccessorComponentType.UNSIGNED_INT */) {
            throw new Error(`${context}/componentType: Invalid value ${accessor.componentType}`);
        }
        if (accessor._data) {
            return accessor._data;
        }
        if (accessor.sparse) {
            const constructor = GLTFLoader._GetTypedArrayConstructor(`${context}/componentType`, accessor.componentType);
            accessor._data = this._loadAccessorAsync(context, accessor, constructor);
        }
        else {
            const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, accessor.bufferView);
            accessor._data = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then((data) => {
                return GLTFLoader._GetTypedArray(context, accessor.componentType, data, accessor.byteOffset, accessor.count);
            });
        }
        return accessor._data;
    }
    /**
     * @internal
     */
    _loadVertexBufferViewAsync(bufferView) {
        if (bufferView._babylonBuffer) {
            return bufferView._babylonBuffer;
        }
        const engine = this._babylonScene.getEngine();
        bufferView._babylonBuffer = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then((data) => {
            return new core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.Buffer(engine, data, false);
        });
        return bufferView._babylonBuffer;
    }
    /**
     * @internal
     */
    _loadVertexAccessorAsync(context, accessor, kind) {
        if (accessor._babylonVertexBuffer?.[kind]) {
            return accessor._babylonVertexBuffer[kind];
        }
        if (!accessor._babylonVertexBuffer) {
            accessor._babylonVertexBuffer = {};
        }
        const engine = this._babylonScene.getEngine();
        if (accessor.sparse || accessor.bufferView == undefined) {
            accessor._babylonVertexBuffer[kind] = this._loadFloatAccessorAsync(context, accessor).then((data) => {
                return new core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer(engine, data, kind, false);
            });
        }
        else {
            const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, accessor.bufferView);
            accessor._babylonVertexBuffer[kind] = this._loadVertexBufferViewAsync(bufferView).then((babylonBuffer) => {
                const numComponents = GLTFLoader._GetNumComponents(context, accessor.type);
                return new core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer(engine, babylonBuffer, kind, false, undefined, bufferView.byteStride, undefined, accessor.byteOffset, numComponents, accessor.componentType, accessor.normalized, true, undefined, true);
            });
        }
        return accessor._babylonVertexBuffer[kind];
    }
    _loadMaterialMetallicRoughnessPropertiesAsync(context, properties, babylonMaterial) {
        const promises = new Array();
        const adapter = this._getOrCreateMaterialAdapter(babylonMaterial);
        if (properties) {
            // Set base color and alpha using adapter
            if (properties.baseColorFactor) {
                adapter.baseColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.FromArray(properties.baseColorFactor);
                adapter.geometryOpacity = properties.baseColorFactor[3];
            }
            else {
                adapter.baseColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.White();
            }
            // Set metallic and roughness using adapter
            adapter.baseMetalness = properties.metallicFactor == undefined ? 1 : properties.metallicFactor;
            adapter.specularRoughness = properties.roughnessFactor == undefined ? 1 : properties.roughnessFactor;
            if (properties.baseColorTexture) {
                promises.push(this.loadTextureInfoAsync(`${context}/baseColorTexture`, properties.baseColorTexture, (texture) => {
                    texture.name = `${babylonMaterial.name} (Base Color)`;
                    adapter.baseColorTexture = texture;
                }));
            }
            if (properties.metallicRoughnessTexture) {
                properties.metallicRoughnessTexture.nonColorData = true;
                promises.push(this.loadTextureInfoAsync(`${context}/metallicRoughnessTexture`, properties.metallicRoughnessTexture, (texture) => {
                    texture.name = `${babylonMaterial.name} (Metallic Roughness)`;
                    adapter.baseMetalnessTexture = texture;
                    adapter.specularRoughnessTexture = texture;
                }));
                // Configure texture channel usage using adapter
                adapter.useRoughnessFromMetallicTextureGreen = true;
                adapter.useMetallicFromMetallicTextureBlue = true;
            }
        }
        return Promise.all(promises).then(() => { });
    }
    /**
     * @internal
     */
    _loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign = () => { }) {
        const extensionPromise = this._extensionsLoadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        material._data = material._data || {};
        let babylonData = material._data[babylonDrawMode];
        if (!babylonData) {
            this.logOpen(`${context} ${material.name || ""}`);
            const babylonMaterial = this.createMaterial(context, material, babylonDrawMode);
            babylonData = {
                babylonMaterial: babylonMaterial,
                babylonMeshes: [],
                promise: this.loadMaterialPropertiesAsync(context, material, babylonMaterial),
            };
            material._data[babylonDrawMode] = babylonData;
            GLTFLoader.AddPointerMetadata(babylonMaterial, context);
            this._parent.onMaterialLoadedObservable.notifyObservers(babylonMaterial);
            this.logClose();
        }
        if (babylonMesh) {
            babylonData.babylonMeshes.push(babylonMesh);
            babylonMesh.onDisposeObservable.addOnce(() => {
                const index = babylonData.babylonMeshes.indexOf(babylonMesh);
                if (index !== -1) {
                    babylonData.babylonMeshes.splice(index, 1);
                }
            });
        }
        assign(babylonData.babylonMaterial);
        return babylonData.promise.then(() => {
            return babylonData.babylonMaterial;
        });
    }
    _createDefaultMaterial(name, babylonDrawMode) {
        if (!this._pbrMaterialImpl) {
            throw new Error("PBR Material class not loaded");
        }
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        const babylonMaterial = new this._pbrMaterialImpl.materialClass(name, this._babylonScene);
        babylonMaterial._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        babylonMaterial.fillMode = babylonDrawMode;
        babylonMaterial.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_OPAQUE;
        // Create the material adapter and set some default properties.
        // We don't need to wait for the promise to resolve here.
        const adapter = this._getOrCreateMaterialAdapter(babylonMaterial);
        adapter.transparencyAsAlphaCoverage = this._parent.transparencyAsCoverage;
        // Set default metallic and roughness values
        adapter.baseMetalness = 1.0;
        adapter.specularRoughness = 1.0;
        return babylonMaterial;
    }
    /**
     * Creates a Babylon material from a glTF material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonDrawMode The draw mode for the Babylon material
     * @returns The Babylon material
     */
    createMaterial(context, material, babylonDrawMode) {
        const extensionMaterial = this._extensionsCreateMaterial(context, material, babylonDrawMode);
        if (extensionMaterial) {
            return extensionMaterial;
        }
        const name = material.name || `material${material.index}`;
        const babylonMaterial = this._createDefaultMaterial(name, babylonDrawMode);
        return babylonMaterial;
    }
    /**
     * Loads properties from a glTF material into a Babylon material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     * @returns A promise that resolves when the load is complete
     */
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        const extensionPromise = this._extensionsLoadMaterialPropertiesAsync(context, material, babylonMaterial);
        if (extensionPromise) {
            return extensionPromise;
        }
        const promises = new Array();
        promises.push(this.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
        if (material.pbrMetallicRoughness) {
            promises.push(this._loadMaterialMetallicRoughnessPropertiesAsync(`${context}/pbrMetallicRoughness`, material.pbrMetallicRoughness, babylonMaterial));
        }
        this.loadMaterialAlphaProperties(context, material, babylonMaterial);
        return Promise.all(promises).then(() => { });
    }
    /**
     * Loads the normal, occlusion, and emissive properties from a glTF material into a Babylon material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     * @returns A promise that resolves when the load is complete
     */
    loadMaterialBasePropertiesAsync(context, material, babylonMaterial) {
        const promises = new Array();
        const adapter = this._getOrCreateMaterialAdapter(babylonMaterial);
        // Set emission color using adapter
        adapter.emissionColor = material.emissiveFactor ? core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.FromArray(material.emissiveFactor) : new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3(0, 0, 0);
        // Set double-sided properties using adapter
        if (material.doubleSided) {
            adapter.backFaceCulling = false;
            adapter.twoSidedLighting = true;
        }
        if (material.normalTexture) {
            material.normalTexture.nonColorData = true;
            promises.push(this.loadTextureInfoAsync(`${context}/normalTexture`, material.normalTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Normal)`;
                adapter.geometryNormalTexture = texture;
                if (material.normalTexture?.scale != undefined) {
                    texture.level = material.normalTexture.scale;
                }
            }));
            // Set normal map inversions using adapter
            adapter.setNormalMapInversions(!this._babylonScene.useRightHandedSystem, this._babylonScene.useRightHandedSystem);
        }
        let aoTexture;
        let aoStrength = 1.0;
        let emissionTexture;
        if (material.occlusionTexture) {
            material.occlusionTexture.nonColorData = true;
            promises.push(this.loadTextureInfoAsync(`${context}/occlusionTexture`, material.occlusionTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Occlusion)`;
                aoTexture = texture;
            }));
            if (material.occlusionTexture.strength != undefined) {
                aoStrength = material.occlusionTexture.strength;
            }
        }
        if (material.emissiveTexture) {
            promises.push(this.loadTextureInfoAsync(`${context}/emissiveTexture`, material.emissiveTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Emissive)`;
                emissionTexture = texture;
            }));
        }
        return Promise.all(promises).then(() => {
            // Set ambient occlusion and emissive textures using adapter
            if (aoTexture) {
                adapter.ambientOcclusionTexture = aoTexture;
                adapter.ambientOcclusionTextureStrength = aoStrength;
            }
            if (emissionTexture) {
                adapter.emissionColorTexture = emissionTexture;
            }
        });
    }
    /**
     * Loads the alpha properties from a glTF material into a Babylon material.
     * Must be called after the setting the albedo texture of the Babylon material when the material has an albedo texture.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     */
    loadMaterialAlphaProperties(context, material, babylonMaterial) {
        if (!this._pbrMaterialImpl) {
            throw new Error(`${context}: Material type not supported`);
        }
        const adapter = this._getOrCreateMaterialAdapter(babylonMaterial);
        const baseColorTexture = adapter.baseColorTexture;
        const alphaMode = material.alphaMode || "OPAQUE" /* MaterialAlphaMode.OPAQUE */;
        switch (alphaMode) {
            case "OPAQUE" /* MaterialAlphaMode.OPAQUE */: {
                babylonMaterial.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_OPAQUE;
                babylonMaterial.alpha = 1.0; // Force alpha to 1.0 for opaque mode.
                break;
            }
            case "MASK" /* MaterialAlphaMode.MASK */: {
                babylonMaterial.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_ALPHATEST;
                adapter.alphaCutOff = material.alphaCutoff == undefined ? 0.5 : material.alphaCutoff;
                if (baseColorTexture) {
                    baseColorTexture.hasAlpha = true;
                }
                break;
            }
            case "BLEND" /* MaterialAlphaMode.BLEND */: {
                babylonMaterial.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_ALPHABLEND;
                if (baseColorTexture) {
                    baseColorTexture.hasAlpha = true;
                    adapter.useAlphaFromBaseColorTexture = true;
                }
                break;
            }
            default: {
                throw new Error(`${context}/alphaMode: Invalid value (${material.alphaMode})`);
            }
        }
    }
    /**
     * Loads a glTF texture info.
     * @param context The context when loading the asset
     * @param textureInfo The glTF texture info property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon texture when the load is complete
     */
    loadTextureInfoAsync(context, textureInfo, assign = () => { }) {
        const extensionPromise = this._extensionsLoadTextureInfoAsync(context, textureInfo, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen(`${context}`);
        if (textureInfo.texCoord >= 6) {
            throw new Error(`${context}/texCoord: Invalid value (${textureInfo.texCoord})`);
        }
        const texture = ArrayItem.Get(`${context}/index`, this._gltf.textures, textureInfo.index);
        texture._textureInfo = textureInfo;
        const promise = this._loadTextureAsync(`/textures/${textureInfo.index}`, texture, (babylonTexture) => {
            babylonTexture.coordinatesIndex = textureInfo.texCoord || 0;
            GLTFLoader.AddPointerMetadata(babylonTexture, context);
            this._parent.onTextureLoadedObservable.notifyObservers(babylonTexture);
            assign(babylonTexture);
        });
        this.logClose();
        return promise;
    }
    /**
     * @internal
     */
    _loadTextureAsync(context, texture, assign = () => { }) {
        const extensionPromise = this._extensionsLoadTextureAsync(context, texture, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen(`${context} ${texture.name || ""}`);
        const sampler = texture.sampler == undefined ? GLTFLoader.DefaultSampler : ArrayItem.Get(`${context}/sampler`, this._gltf.samplers, texture.sampler);
        const image = ArrayItem.Get(`${context}/source`, this._gltf.images, texture.source);
        const promise = this._createTextureAsync(context, sampler, image, assign, undefined, !texture._textureInfo.nonColorData);
        this.logClose();
        return promise;
    }
    /**
     * @internal
     */
    _createTextureAsync(context, sampler, image, assign = () => { }, textureLoaderOptions, useSRGBBuffer) {
        const samplerData = this._loadSampler(`/samplers/${sampler.index}`, sampler);
        const promises = new Array();
        const deferred = new core_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__.Deferred();
        this._babylonScene._blockEntityCollection = !!this._assetContainer;
        const textureCreationOptions = {
            noMipmap: samplerData.noMipMaps,
            invertY: false,
            samplingMode: samplerData.samplingMode,
            onLoad: () => {
                if (!this._disposed) {
                    deferred.resolve();
                }
            },
            onError: (message, exception) => {
                if (!this._disposed) {
                    deferred.reject(new Error(`${context}: ${exception && exception.message ? exception.message : message || "Failed to load texture"}`));
                }
            },
            mimeType: image.mimeType ?? (0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_18__.GetMimeType)(image.uri ?? ""),
            loaderOptions: textureLoaderOptions,
            useSRGBBuffer: !!useSRGBBuffer && this._parent.useSRGBBuffers,
        };
        const babylonTexture = new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture(null, this._babylonScene, textureCreationOptions);
        babylonTexture._parentContainer = this._assetContainer;
        this._babylonScene._blockEntityCollection = false;
        promises.push(deferred.promise);
        promises.push(this.loadImageAsync(`/images/${image.index}`, image).then((data) => {
            const name = image.uri || `${this._fileName}#image${image.index}`;
            const dataUrl = `data:${this._uniqueRootUrl}${name}`;
            babylonTexture.updateURL(dataUrl, data);
            // Set the internal texture label.
            const internalTexture = babylonTexture.getInternalTexture();
            if (internalTexture) {
                internalTexture.label = image.name;
            }
        }));
        babylonTexture.wrapU = samplerData.wrapU;
        babylonTexture.wrapV = samplerData.wrapV;
        assign(babylonTexture);
        if (this._parent.useGltfTextureNames) {
            babylonTexture.name = image.name || image.uri || `image${image.index}`;
        }
        return Promise.all(promises).then(() => {
            return babylonTexture;
        });
    }
    _loadSampler(context, sampler) {
        if (!sampler._data) {
            sampler._data = {
                noMipMaps: sampler.minFilter === 9728 /* TextureMinFilter.NEAREST */ || sampler.minFilter === 9729 /* TextureMinFilter.LINEAR */,
                samplingMode: GLTFLoader._GetTextureSamplingMode(context, sampler),
                wrapU: GLTFLoader._GetTextureWrapMode(`${context}/wrapS`, sampler.wrapS),
                wrapV: GLTFLoader._GetTextureWrapMode(`${context}/wrapT`, sampler.wrapT),
            };
        }
        return sampler._data;
    }
    /**
     * Loads a glTF image.
     * @param context The context when loading the asset
     * @param image The glTF image property
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadImageAsync(context, image) {
        if (!image._data) {
            this.logOpen(`${context} ${image.name || ""}`);
            if (image.uri) {
                image._data = this.loadUriAsync(`${context}/uri`, image, image.uri);
            }
            else {
                const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, image.bufferView);
                image._data = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView);
            }
            this.logClose();
        }
        return image._data;
    }
    /**
     * Loads a glTF uri.
     * @param context The context when loading the asset
     * @param property The glTF property associated with the uri
     * @param uri The base64 or relative uri
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadUriAsync(context, property, uri) {
        const extensionPromise = this._extensionsLoadUriAsync(context, property, uri);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (!GLTFLoader._ValidateUri(uri)) {
            throw new Error(`${context}: '${uri}' is invalid`);
        }
        if ((0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_18__.IsBase64DataUrl)(uri)) {
            const data = new Uint8Array((0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_18__.DecodeBase64UrlToBinary)(uri));
            this.log(`${context}: Decoded ${uri.substring(0, 64)}... (${data.length} bytes)`);
            return Promise.resolve(data);
        }
        this.log(`${context}: Loading ${uri}`);
        return this._parent.preprocessUrlAsync(this._rootUrl + uri).then((url) => {
            return new Promise((resolve, reject) => {
                this._parent._loadFile(this._babylonScene, url, (data) => {
                    if (!this._disposed) {
                        this.log(`${context}: Loaded ${uri} (${data.byteLength} bytes)`);
                        resolve(new Uint8Array(data));
                    }
                }, true, (request) => {
                    reject(new core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_18__.LoadFileError(`${context}: Failed to load '${uri}'${request ? ": " + request.status + " " + request.statusText : ""}`, request));
                });
            });
        });
    }
    /**
     * Adds a JSON pointer to the _internalMetadata of the Babylon object at `<object>._internalMetadata.gltf.pointers`.
     * @param babylonObject the Babylon object with _internalMetadata
     * @param pointer the JSON pointer
     */
    static AddPointerMetadata(babylonObject, pointer) {
        babylonObject.metadata = babylonObject.metadata || {};
        const metadata = (babylonObject._internalMetadata = babylonObject._internalMetadata || {});
        const gltf = (metadata.gltf = metadata.gltf || {});
        const pointers = (gltf.pointers = gltf.pointers || []);
        pointers.push(pointer);
    }
    static _GetTextureWrapMode(context, mode) {
        // Set defaults if undefined
        mode = mode == undefined ? 10497 /* TextureWrapMode.REPEAT */ : mode;
        switch (mode) {
            case 33071 /* TextureWrapMode.CLAMP_TO_EDGE */:
                return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.CLAMP_ADDRESSMODE;
            case 33648 /* TextureWrapMode.MIRRORED_REPEAT */:
                return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.MIRROR_ADDRESSMODE;
            case 10497 /* TextureWrapMode.REPEAT */:
                return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.WRAP_ADDRESSMODE;
            default:
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}: Invalid value (${mode})`);
                return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.WRAP_ADDRESSMODE;
        }
    }
    static _GetTextureSamplingMode(context, sampler) {
        // Set defaults if undefined
        const magFilter = sampler.magFilter == undefined ? 9729 /* TextureMagFilter.LINEAR */ : sampler.magFilter;
        const minFilter = sampler.minFilter == undefined ? 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */ : sampler.minFilter;
        if (magFilter === 9729 /* TextureMagFilter.LINEAR */) {
            switch (minFilter) {
                case 9728 /* TextureMinFilter.NEAREST */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_NEAREST;
                case 9729 /* TextureMinFilter.LINEAR */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_LINEAR;
                case 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_NEAREST_MIPNEAREST;
                case 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_LINEAR_MIPNEAREST;
                case 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_NEAREST_MIPLINEAR;
                case 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_LINEAR_MIPLINEAR;
                default:
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}/minFilter: Invalid value (${minFilter})`);
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.LINEAR_LINEAR_MIPLINEAR;
            }
        }
        else {
            if (magFilter !== 9728 /* TextureMagFilter.NEAREST */) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}/magFilter: Invalid value (${magFilter})`);
            }
            switch (minFilter) {
                case 9728 /* TextureMinFilter.NEAREST */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_NEAREST;
                case 9729 /* TextureMinFilter.LINEAR */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_LINEAR;
                case 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_NEAREST_MIPNEAREST;
                case 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_LINEAR_MIPNEAREST;
                case 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_NEAREST_MIPLINEAR;
                case 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */:
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_LINEAR_MIPLINEAR;
                default:
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}/minFilter: Invalid value (${minFilter})`);
                    return core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_9__.Texture.NEAREST_NEAREST_MIPNEAREST;
            }
        }
    }
    static _GetTypedArrayConstructor(context, componentType) {
        try {
            return (0,core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_24__.GetTypedArrayConstructor)(componentType);
        }
        catch (e) {
            throw new Error(`${context}: ${e.message}`);
        }
    }
    static _GetTypedArray(context, componentType, bufferView, byteOffset, length) {
        const buffer = bufferView.buffer;
        byteOffset = bufferView.byteOffset + (byteOffset || 0);
        const constructor = GLTFLoader._GetTypedArrayConstructor(`${context}/componentType`, componentType);
        const componentTypeLength = core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_11__.VertexBuffer.GetTypeByteLength(componentType);
        if (byteOffset % componentTypeLength !== 0) {
            // HACK: Copy the buffer if byte offset is not a multiple of component type byte length.
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_19__.Logger.Warn(`${context}: Copying buffer as byte offset (${byteOffset}) is not a multiple of component type byte length (${componentTypeLength})`);
            return new constructor(buffer.slice(byteOffset, byteOffset + length * componentTypeLength), 0);
        }
        return new constructor(buffer, byteOffset, length);
    }
    static _GetNumComponents(context, type) {
        switch (type) {
            case "SCALAR":
                return 1;
            case "VEC2":
                return 2;
            case "VEC3":
                return 3;
            case "VEC4":
                return 4;
            case "MAT2":
                return 4;
            case "MAT3":
                return 9;
            case "MAT4":
                return 16;
        }
        throw new Error(`${context}: Invalid type (${type})`);
    }
    static _ValidateUri(uri) {
        return core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.IsBase64(uri) || uri.indexOf("..") === -1;
    }
    /**
     * @internal
     */
    static _GetDrawMode(context, mode) {
        if (mode == undefined) {
            mode = 4 /* MeshPrimitiveMode.TRIANGLES */;
        }
        switch (mode) {
            case 0 /* MeshPrimitiveMode.POINTS */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.PointListDrawMode;
            case 1 /* MeshPrimitiveMode.LINES */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.LineListDrawMode;
            case 2 /* MeshPrimitiveMode.LINE_LOOP */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.LineLoopDrawMode;
            case 3 /* MeshPrimitiveMode.LINE_STRIP */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.LineStripDrawMode;
            case 4 /* MeshPrimitiveMode.TRIANGLES */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.TriangleFillMode;
            case 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.TriangleStripDrawMode;
            case 6 /* MeshPrimitiveMode.TRIANGLE_FAN */:
                return core_Materials_material__WEBPACK_IMPORTED_MODULE_8__.Material.TriangleFanDrawMode;
        }
        throw new Error(`${context}: Invalid mesh primitive mode (${mode})`);
    }
    _compileMaterialsAsync() {
        this._parent._startPerformanceCounter("Compile materials");
        const promises = new Array();
        if (this._gltf.materials) {
            for (const material of this._gltf.materials) {
                if (material._data) {
                    for (const babylonDrawMode in material._data) {
                        const babylonData = material._data[babylonDrawMode];
                        for (const babylonMesh of babylonData.babylonMeshes) {
                            // Ensure nonUniformScaling is set if necessary.
                            babylonMesh.computeWorldMatrix(true);
                            const babylonMaterial = babylonData.babylonMaterial;
                            promises.push(babylonMaterial.forceCompilationAsync(babylonMesh));
                            promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { useInstances: true }));
                            if (this._parent.useClipPlane) {
                                promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { clipPlane: true }));
                                promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { clipPlane: true, useInstances: true }));
                            }
                        }
                    }
                }
            }
        }
        return Promise.all(promises).then(() => {
            this._parent._endPerformanceCounter("Compile materials");
        });
    }
    _compileShadowGeneratorsAsync() {
        this._parent._startPerformanceCounter("Compile shadow generators");
        const promises = new Array();
        const lights = this._babylonScene.lights;
        for (const light of lights) {
            const generator = light.getShadowGenerator();
            if (generator) {
                promises.push(generator.forceCompilationAsync());
            }
        }
        return Promise.all(promises).then(() => {
            this._parent._endPerformanceCounter("Compile shadow generators");
        });
    }
    _forEachExtensions(action) {
        for (const extension of this._extensions) {
            if (extension.enabled) {
                action(extension);
            }
        }
    }
    _applyExtensions(property, functionName, actionAsync) {
        for (const extension of this._extensions) {
            if (extension.enabled) {
                const id = `${extension.name}.${functionName}`;
                const loaderProperty = property;
                loaderProperty._activeLoaderExtensionFunctions = loaderProperty._activeLoaderExtensionFunctions || {};
                const activeLoaderExtensionFunctions = loaderProperty._activeLoaderExtensionFunctions;
                if (!activeLoaderExtensionFunctions[id]) {
                    activeLoaderExtensionFunctions[id] = true;
                    try {
                        const result = actionAsync(extension);
                        if (result) {
                            return result;
                        }
                    }
                    finally {
                        delete activeLoaderExtensionFunctions[id];
                    }
                }
            }
        }
        return null;
    }
    _extensionsOnLoading() {
        this._forEachExtensions((extension) => extension.onLoading && extension.onLoading());
    }
    _extensionsOnReady() {
        this._forEachExtensions((extension) => extension.onReady && extension.onReady());
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadSceneAsync(context, scene) {
        return this._applyExtensions(scene, "loadScene", (extension) => extension.loadSceneAsync && extension.loadSceneAsync(context, scene));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadNodeAsync(context, node, assign) {
        return this._applyExtensions(node, "loadNode", (extension) => extension.loadNodeAsync && extension.loadNodeAsync(context, node, assign));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadCameraAsync(context, camera, assign) {
        return this._applyExtensions(camera, "loadCamera", (extension) => extension.loadCameraAsync && extension.loadCameraAsync(context, camera, assign));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadVertexDataAsync(context, primitive, babylonMesh) {
        return this._applyExtensions(primitive, "loadVertexData", (extension) => extension._loadVertexDataAsync && extension._loadVertexDataAsync(context, primitive, babylonMesh));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign) {
        return this._applyExtensions(primitive, "loadMeshPrimitive", (extension) => extension._loadMeshPrimitiveAsync && extension._loadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign) {
        return this._applyExtensions(material, "loadMaterial", (extension) => extension._loadMaterialAsync && extension._loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign));
    }
    _extensionsCreateMaterial(context, material, babylonDrawMode) {
        return this._applyExtensions(material, "createMaterial", (extension) => extension.createMaterial && extension.createMaterial(context, material, babylonDrawMode));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return this._applyExtensions(material, "loadMaterialProperties", (extension) => extension.loadMaterialPropertiesAsync && extension.loadMaterialPropertiesAsync(context, material, babylonMaterial));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadTextureInfoAsync(context, textureInfo, assign) {
        return this._applyExtensions(textureInfo, "loadTextureInfo", (extension) => extension.loadTextureInfoAsync && extension.loadTextureInfoAsync(context, textureInfo, assign));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadTextureAsync(context, texture, assign) {
        return this._applyExtensions(texture, "loadTexture", (extension) => extension._loadTextureAsync && extension._loadTextureAsync(context, texture, assign));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadAnimationAsync(context, animation) {
        return this._applyExtensions(animation, "loadAnimation", (extension) => extension.loadAnimationAsync && extension.loadAnimationAsync(context, animation));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadAnimationChannelAsync(context, animationContext, animation, channel, onLoad) {
        return this._applyExtensions(animation, "loadAnimationChannel", (extension) => extension._loadAnimationChannelAsync && extension._loadAnimationChannelAsync(context, animationContext, animation, channel, onLoad));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadSkinAsync(context, node, skin) {
        return this._applyExtensions(skin, "loadSkin", (extension) => extension._loadSkinAsync && extension._loadSkinAsync(context, node, skin));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadUriAsync(context, property, uri) {
        return this._applyExtensions(property, "loadUri", (extension) => extension._loadUriAsync && extension._loadUriAsync(context, property, uri));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadBufferViewAsync(context, bufferView) {
        return this._applyExtensions(bufferView, "loadBufferView", (extension) => extension.loadBufferViewAsync && extension.loadBufferViewAsync(context, bufferView));
    }
    // eslint-disable-next-line no-restricted-syntax
    _extensionsLoadBufferAsync(context, buffer, byteOffset, byteLength) {
        return this._applyExtensions(buffer, "loadBuffer", (extension) => extension.loadBufferAsync && extension.loadBufferAsync(context, buffer, byteOffset, byteLength));
    }
    /**
     * Helper method called by a loader extension to load an glTF extension.
     * @param context The context when loading the asset
     * @param property The glTF property to load the extension from
     * @param extensionName The name of the extension to load
     * @param actionAsync The action to run
     * @returns The promise returned by actionAsync or null if the extension does not exist
     */
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/naming-convention
    static LoadExtensionAsync(context, property, extensionName, actionAsync) {
        if (!property.extensions) {
            return null;
        }
        const extensions = property.extensions;
        const extension = extensions[extensionName];
        if (!extension) {
            return null;
        }
        return actionAsync(`${context}/extensions/${extensionName}`, extension);
    }
    /**
     * Helper method called by a loader extension to load a glTF extra.
     * @param context The context when loading the asset
     * @param property The glTF property to load the extra from
     * @param extensionName The name of the extension to load
     * @param actionAsync The action to run
     * @returns The promise returned by actionAsync or null if the extra does not exist
     */
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/naming-convention
    static LoadExtraAsync(context, property, extensionName, actionAsync) {
        if (!property.extras) {
            return null;
        }
        const extras = property.extras;
        const extra = extras[extensionName];
        if (!extra) {
            return null;
        }
        return actionAsync(`${context}/extras/${extensionName}`, extra);
    }
    /**
     * Checks for presence of an extension.
     * @param name The name of the extension to check
     * @returns A boolean indicating the presence of the given extension name in `extensionsUsed`
     */
    isExtensionUsed(name) {
        return !!this._gltf.extensionsUsed && this._gltf.extensionsUsed.indexOf(name) !== -1;
    }
    /**
     * Increments the indentation level and logs a message.
     * @param message The message to log
     */
    logOpen(message) {
        this._parent._logOpen(message);
    }
    /**
     * Decrements the indentation level.
     */
    logClose() {
        this._parent._logClose();
    }
    /**
     * Logs a message
     * @param message The message to log
     */
    log(message) {
        this._parent._log(message);
    }
    /**
     * Starts a performance counter.
     * @param counterName The name of the performance counter
     */
    startPerformanceCounter(counterName) {
        this._parent._startPerformanceCounter(counterName);
    }
    /**
     * Ends a performance counter.
     * @param counterName The name of the performance counter
     */
    endPerformanceCounter(counterName) {
        this._parent._endPerformanceCounter(counterName);
    }
}
/**
 * The default glTF sampler.
 */
GLTFLoader.DefaultSampler = { index: -1 };
_glTFFileLoader__WEBPACK_IMPORTED_MODULE_17__.GLTFFileLoader._CreateGLTF2Loader = (parent) => new GLTFLoader(parent);


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

/***/ "../loaders/dist/glTF/glTFFileLoader.js":
/*!**********************************************!*\
  !*** ../loaders/dist/glTF/glTFFileLoader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* binding */ GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* binding */ GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* binding */ GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderDefaultOptions: () => (/* binding */ GLTFLoaderDefaultOptions),
/* harmony export */   GLTFLoaderState: () => (/* binding */ GLTFLoaderState)
/* harmony export */ });
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var core_assetContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/assetContainer */ "../core/dist/assetContainer.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Misc_dataReader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/dataReader */ "../core/dist/Misc/dataReader.js");
/* harmony import */ var _glTFValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glTFValidation */ "../loaders/dist/glTF/glTFValidation.js");
/* harmony import */ var _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glTFFileLoader.metadata */ "../loaders/dist/glTF/glTFFileLoader.metadata.js");
/* harmony import */ var core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Misc/fileTools */ "../core/dist/Misc/fileTools.js");
/* harmony import */ var core_Misc_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Misc/error */ "../core/dist/Misc/error.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");











function readAsync(arrayBuffer, byteOffset, byteLength) {
    try {
        return Promise.resolve(new Uint8Array(arrayBuffer, byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
function readViewAsync(arrayBufferView, byteOffset, byteLength) {
    try {
        if (byteOffset < 0 || byteOffset >= arrayBufferView.byteLength) {
            throw new RangeError("Offset is out of range.");
        }
        if (byteOffset + byteLength > arrayBufferView.byteLength) {
            throw new RangeError("Length is out of range.");
        }
        return Promise.resolve(new Uint8Array(arrayBufferView.buffer, arrayBufferView.byteOffset + byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
/**
 * Mode that determines the coordinate system to use.
 */
var GLTFLoaderCoordinateSystemMode;
(function (GLTFLoaderCoordinateSystemMode) {
    /**
     * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
    /**
     * Sets the useRightHandedSystem flag on the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
})(GLTFLoaderCoordinateSystemMode || (GLTFLoaderCoordinateSystemMode = {}));
/**
 * Mode that determines what animations will start.
 */
var GLTFLoaderAnimationStartMode;
(function (GLTFLoaderAnimationStartMode) {
    /**
     * No animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
    /**
     * The first animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
    /**
     * All animations will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
})(GLTFLoaderAnimationStartMode || (GLTFLoaderAnimationStartMode = {}));
/**
 * Loader state.
 */
var GLTFLoaderState;
(function (GLTFLoaderState) {
    /**
     * The asset is loading.
     */
    GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
    /**
     * The asset is ready for rendering.
     */
    GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
    /**
     * The asset is completely loaded.
     */
    GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
})(GLTFLoaderState || (GLTFLoaderState = {}));
/**
 * This class contains all the concrete (not abstract) glTF options, excluding callbacks.
 * The purpose of this class is to make it easy to provide a way to mutate the default
 * loader options (see the GLTFLoaderDefaultOptions instance below) without duplicating
 * all the options in yet another object. Since this class is instantiated for the default
 * options object, abstract properties and callbacks are not included, it's more just
 * flag-type options.
 */
class GLTFLoaderBaseOptions {
    constructor() {
        /**
         * Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.
         */
        this.alwaysComputeBoundingBox = false;
        /**
         * Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
         * Set this to true if loading assets with invalid `skin.skeleton` values.
         */
        this.alwaysComputeSkeletonRootNode = false;
        /**
         * The animation start mode. Defaults to FIRST.
         */
        this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
        /**
         * Defines if the loader should compile materials before raising the success callback. Defaults to false.
         */
        this.compileMaterials = false;
        /**
         * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
         */
        this.compileShadowGenerators = false;
        /**
         * The coordinate system mode. Defaults to AUTO.
         */
        this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
        /**
         * Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.
         */
        this.createInstances = true;
        /**
         * If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.
         */
        this.loadAllMaterials = false;
        /**
         * Defines if the loader should load morph targets. Defaults to true.
         */
        this.loadMorphTargets = true;
        /**
         * Defines if the loader should load node animations. Defaults to true.
         * NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.
         */
        this.loadNodeAnimations = true;
        /**
         * If true, load only the materials defined in the file. Defaults to false.
         */
        this.loadOnlyMaterials = false;
        /**
         * Defines if the loader should load skins. Defaults to true.
         */
        this.loadSkins = true;
        /**
         * If true, do not load any materials defined in the file. Defaults to false.
         */
        this.skipMaterials = false;
        /**
         * When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.
         */
        this.targetFps = 60;
        /**
         * Defines if the Alpha blended materials are only applied as coverage.
         * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
         * If true, no extra effects are applied to transparent pixels.
         */
        this.transparencyAsCoverage = false;
        /**
         * Defines if the loader should also compile materials with clip planes. Defaults to false.
         */
        this.useClipPlane = false;
        /**
         * If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
         * Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.
         */
        this.useGltfTextureNames = false;
        /**
         * Defines if the loader should use range requests when load binary glTF files from HTTP.
         * Enabling will disable offline support and glTF validator.
         * Defaults to false.
         */
        this.useRangeRequests = false;
        /**
         * If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.
         */
        this.useSRGBBuffers = true;
        /**
         * Defines if the loader should validate the asset.
         */
        this.validate = false;
        /**
         * Load the glTF files using the OpenPBR material.
         * @experimental
         */
        this.useOpenPBR = false;
        /**
         * If true, the loader will not use the transmission helper when loading materials with transmission.
         */
        this.dontUseTransmissionHelper = false;
    }
}
/**
 * The default GLTF loader options.
 * Override the properties of this object to globally change the default loader options.
 * To specify options for a specific load call, pass those options into the associated load function.
 */
const GLTFLoaderDefaultOptions = new GLTFLoaderBaseOptions();
class GLTFLoaderOptions extends GLTFLoaderBaseOptions {
    constructor() {
        super(...arguments);
        /**
         * Defines options for glTF extensions.
         */
        this.extensionOptions = {};
        /**
         * Function called before loading a url referenced by the asset.
         * @param url url referenced by the asset
         * @returns Async url to load
         */
        this.preprocessUrlAsync = (url) => Promise.resolve(url);
    }
    // eslint-disable-next-line babylonjs/available
    copyFrom(options) {
        if (options) {
            this.alwaysComputeBoundingBox = options.alwaysComputeBoundingBox ?? this.alwaysComputeBoundingBox;
            this.alwaysComputeSkeletonRootNode = options.alwaysComputeSkeletonRootNode ?? this.alwaysComputeSkeletonRootNode;
            this.animationStartMode = options.animationStartMode ?? this.animationStartMode;
            this.capturePerformanceCounters = options.capturePerformanceCounters ?? this.capturePerformanceCounters;
            this.compileMaterials = options.compileMaterials ?? this.compileMaterials;
            this.compileShadowGenerators = options.compileShadowGenerators ?? this.compileShadowGenerators;
            this.coordinateSystemMode = options.coordinateSystemMode ?? this.coordinateSystemMode;
            this.createInstances = options.createInstances ?? this.createInstances;
            this.customRootNode = options.customRootNode;
            this.extensionOptions = options.extensionOptions ?? this.extensionOptions;
            this.loadAllMaterials = options.loadAllMaterials ?? this.loadAllMaterials;
            this.loadMorphTargets = options.loadMorphTargets ?? this.loadMorphTargets;
            this.loadNodeAnimations = options.loadNodeAnimations ?? this.loadNodeAnimations;
            this.loadOnlyMaterials = options.loadOnlyMaterials ?? this.loadOnlyMaterials;
            this.loadSkins = options.loadSkins ?? this.loadSkins;
            this.loggingEnabled = options.loggingEnabled ?? this.loggingEnabled;
            this.onCameraLoaded = options.onCameraLoaded;
            this.onMaterialLoaded = options.onMaterialLoaded;
            this.onMeshLoaded = options.onMeshLoaded;
            this.onParsed = options.onParsed;
            this.onSkinLoaded = options.onSkinLoaded;
            this.onTextureLoaded = options.onTextureLoaded;
            this.onValidated = options.onValidated;
            this.preprocessUrlAsync = options.preprocessUrlAsync ?? this.preprocessUrlAsync;
            this.skipMaterials = options.skipMaterials ?? this.skipMaterials;
            this.targetFps = options.targetFps ?? this.targetFps;
            this.transparencyAsCoverage = options.transparencyAsCoverage ?? this.transparencyAsCoverage;
            this.useClipPlane = options.useClipPlane ?? this.useClipPlane;
            this.useGltfTextureNames = options.useGltfTextureNames ?? this.useGltfTextureNames;
            this.useOpenPBR = options.useOpenPBR ?? this.useOpenPBR;
            this.useRangeRequests = options.useRangeRequests ?? this.useRangeRequests;
            this.useSRGBBuffers = options.useSRGBBuffers ?? this.useSRGBBuffers;
            this.validate = options.validate ?? this.validate;
            this.dontUseTransmissionHelper = options.dontUseTransmissionHelper ?? this.dontUseTransmissionHelper;
        }
    }
}
/**
 * File loader for loading glTF files into a scene.
 */
class GLTFFileLoader extends GLTFLoaderOptions {
    /**
     * Creates a new glTF file loader.
     * @param options The options for the loader
     */
    constructor(options) {
        super();
        // --------------------
        // Begin Common options
        // --------------------
        /**
         * Raised when the asset has been parsed
         */
        this.onParsedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        // --------------
        // End V1 options
        // --------------
        /**
         * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        this.onMeshLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         * @param node - the transform node that corresponds to the original glTF skin node used for animations
         * @param skinnedNode - the transform node that is the skinned mesh itself or the parent of the skinned meshes
         */
        this.onSkinLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        this.onTextureLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a material after parsing the glTF properties of the material.
         */
        this.onMaterialLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        this.onCameraLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        this.onCompleteObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when an error occurs.
         */
        this.onErrorObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after the loader is disposed.
         */
        this.onDisposeObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after a loader extension is created.
         * Set additional options for a loader extension in this event.
         */
        this.onExtensionLoadedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after validation when validate is set to true. The event data is the result of the validation.
         */
        this.onValidatedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._loader = null;
        this._state = null;
        this._requests = new Array();
        /**
         * Name of the loader ("gltf")
         */
        this.name = _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFFileLoaderMetadata.name;
        /** @internal */
        this.extensions = _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFFileLoaderMetadata.extensions;
        /**
         * Observable raised when the loader state changes.
         */
        this.onLoaderStateChangedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._logIndentLevel = 0;
        this._loggingEnabled = false;
        /** @internal */
        this._log = this._logDisabled;
        this._capturePerformanceCounters = false;
        /** @internal */
        this._startPerformanceCounter = this._startPerformanceCounterDisabled;
        /** @internal */
        this._endPerformanceCounter = this._endPerformanceCounterDisabled;
        this.copyFrom(Object.assign({ ...GLTFLoaderDefaultOptions }, options));
    }
    /**
     * Raised when the asset has been parsed
     */
    set onParsed(callback) {
        if (this._onParsedObserver) {
            this.onParsedObservable.remove(this._onParsedObserver);
        }
        if (callback) {
            this._onParsedObserver = this.onParsedObservable.add(callback);
        }
    }
    /**
     * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
     * Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
     */
    set onMeshLoaded(callback) {
        if (this._onMeshLoadedObserver) {
            this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
        }
        if (callback) {
            this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
        }
    }
    /**
     * Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
     */
    set onSkinLoaded(callback) {
        if (this._onSkinLoadedObserver) {
            this.onSkinLoadedObservable.remove(this._onSkinLoadedObserver);
        }
        if (callback) {
            this._onSkinLoadedObserver = this.onSkinLoadedObservable.add((data) => callback(data.node, data.skinnedNode));
        }
    }
    /**
     * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
     */
    set onTextureLoaded(callback) {
        if (this._onTextureLoadedObserver) {
            this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
        }
        if (callback) {
            this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
        }
    }
    /**
     * Callback raised when the loader creates a material after parsing the glTF properties of the material.
     */
    set onMaterialLoaded(callback) {
        if (this._onMaterialLoadedObserver) {
            this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
        }
        if (callback) {
            this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
        }
    }
    /**
     * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
     */
    set onCameraLoaded(callback) {
        if (this._onCameraLoadedObserver) {
            this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
        }
        if (callback) {
            this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
        }
    }
    /**
     * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
     * For assets with LODs, raised when all of the LODs are complete.
     * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
     */
    set onComplete(callback) {
        if (this._onCompleteObserver) {
            this.onCompleteObservable.remove(this._onCompleteObserver);
        }
        this._onCompleteObserver = this.onCompleteObservable.add(callback);
    }
    /**
     * Callback raised when an error occurs.
     */
    set onError(callback) {
        if (this._onErrorObserver) {
            this.onErrorObservable.remove(this._onErrorObserver);
        }
        this._onErrorObserver = this.onErrorObservable.add(callback);
    }
    /**
     * Callback raised after the loader is disposed.
     */
    set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /**
     * Callback raised after a loader extension is created.
     */
    set onExtensionLoaded(callback) {
        if (this._onExtensionLoadedObserver) {
            this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
        }
        this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
    }
    /**
     * Defines if the loader logging is enabled.
     */
    get loggingEnabled() {
        return this._loggingEnabled;
    }
    set loggingEnabled(value) {
        if (this._loggingEnabled === value) {
            return;
        }
        this._loggingEnabled = value;
        if (this._loggingEnabled) {
            this._log = this._logEnabled;
        }
        else {
            this._log = this._logDisabled;
        }
    }
    /**
     * Defines if the loader should capture performance counters.
     */
    get capturePerformanceCounters() {
        return this._capturePerformanceCounters;
    }
    set capturePerformanceCounters(value) {
        if (this._capturePerformanceCounters === value) {
            return;
        }
        this._capturePerformanceCounters = value;
        if (this._capturePerformanceCounters) {
            this._startPerformanceCounter = this._startPerformanceCounterEnabled;
            this._endPerformanceCounter = this._endPerformanceCounterEnabled;
        }
        else {
            this._startPerformanceCounter = this._startPerformanceCounterDisabled;
            this._endPerformanceCounter = this._endPerformanceCounterDisabled;
        }
    }
    /**
     * Callback raised after the asset is validated.
     */
    set onValidated(callback) {
        if (this._onValidatedObserver) {
            this.onValidatedObservable.remove(this._onValidatedObserver);
        }
        this._onValidatedObserver = this.onValidatedObservable.add(callback);
    }
    /**
     * Disposes the loader, releases resources during load, and cancels any outstanding requests.
     */
    dispose() {
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        for (const request of this._requests) {
            request.abort();
        }
        this._requests.length = 0;
        delete this._progressCallback;
        this.preprocessUrlAsync = (url) => Promise.resolve(url);
        this.onMeshLoadedObservable.clear();
        this.onSkinLoadedObservable.clear();
        this.onTextureLoadedObservable.clear();
        this.onMaterialLoadedObservable.clear();
        this.onCameraLoadedObservable.clear();
        this.onCompleteObservable.clear();
        this.onExtensionLoadedObservable.clear();
        this.onDisposeObservable.notifyObservers(undefined);
        this.onDisposeObservable.clear();
    }
    /**
     * @internal
     */
    loadFile(scene, fileOrUrl, rootUrl, onSuccess, onProgress, useArrayBuffer, onError, name) {
        if (ArrayBuffer.isView(fileOrUrl)) {
            this._loadBinary(scene, fileOrUrl, rootUrl, onSuccess, onError, name);
            return null;
        }
        this._progressCallback = onProgress;
        const fileName = fileOrUrl.name || core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.GetFilename(fileOrUrl);
        if (useArrayBuffer) {
            if (this.useRangeRequests) {
                if (this.validate) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warn("glTF validation is not supported when range requests are enabled");
                }
                const fileRequest = {
                    abort: () => { },
                    onCompleteObservable: new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable(),
                };
                const dataBuffer = {
                    readAsync: (byteOffset, byteLength) => {
                        return new Promise((resolve, reject) => {
                            this._loadFile(scene, fileOrUrl, (data) => {
                                resolve(new Uint8Array(data));
                            }, true, (error) => {
                                reject(error);
                            }, (webRequest) => {
                                webRequest.setRequestHeader("Range", `bytes=${byteOffset}-${byteOffset + byteLength - 1}`);
                            });
                        });
                    },
                    byteLength: 0,
                };
                this._unpackBinaryAsync(new core_Misc_dataReader__WEBPACK_IMPORTED_MODULE_5__.DataReader(dataBuffer)).then((loaderData) => {
                    fileRequest.onCompleteObservable.notifyObservers(fileRequest);
                    onSuccess(loaderData);
                }, onError ? (error) => onError(undefined, error) : undefined);
                return fileRequest;
            }
            return this._loadFile(scene, fileOrUrl, (data) => {
                this._validate(scene, new Uint8Array(data, 0, data.byteLength), rootUrl, fileName);
                this._unpackBinaryAsync(new core_Misc_dataReader__WEBPACK_IMPORTED_MODULE_5__.DataReader({
                    readAsync: (byteOffset, byteLength) => readAsync(data, byteOffset, byteLength),
                    byteLength: data.byteLength,
                })).then((loaderData) => {
                    onSuccess(loaderData);
                }, onError ? (error) => onError(undefined, error) : undefined);
            }, true, onError);
        }
        else {
            return this._loadFile(scene, fileOrUrl, (data) => {
                try {
                    this._validate(scene, data, rootUrl, fileName);
                    onSuccess({ json: this._parseJson(data) });
                }
                catch {
                    if (onError) {
                        onError();
                    }
                }
            }, false, onError);
        }
    }
    _loadBinary(scene, data, rootUrl, onSuccess, onError, fileName) {
        this._validate(scene, new Uint8Array(data.buffer, data.byteOffset, data.byteLength), rootUrl, fileName);
        this._unpackBinaryAsync(new core_Misc_dataReader__WEBPACK_IMPORTED_MODULE_5__.DataReader({
            readAsync: (byteOffset, byteLength) => readViewAsync(data, byteOffset, byteLength),
            byteLength: data.byteLength,
        })).then((loaderData) => {
            onSuccess(loaderData);
        }, onError ? (error) => onError(undefined, error) : undefined);
    }
    /**
     * @internal
     */
    importMeshAsync(meshesNames, scene, data, rootUrl, onProgress, fileName) {
        return Promise.resolve().then(() => {
            this.onParsedObservable.notifyObservers(data);
            this.onParsedObservable.clear();
            this._log(`Loading ${fileName || ""}`);
            this._loader = this._getLoader(data);
            return this._loader.importMeshAsync(meshesNames, scene, null, data, rootUrl, onProgress, fileName);
        });
    }
    /**
     * @internal
     */
    loadAsync(scene, data, rootUrl, onProgress, fileName) {
        return Promise.resolve().then(() => {
            this.onParsedObservable.notifyObservers(data);
            this.onParsedObservable.clear();
            this._log(`Loading ${fileName || ""}`);
            this._loader = this._getLoader(data);
            return this._loader.loadAsync(scene, data, rootUrl, onProgress, fileName);
        });
    }
    /**
     * @internal
     */
    loadAssetContainerAsync(scene, data, rootUrl, onProgress, fileName) {
        return Promise.resolve().then(() => {
            this.onParsedObservable.notifyObservers(data);
            this.onParsedObservable.clear();
            this._log(`Loading ${fileName || ""}`);
            this._loader = this._getLoader(data);
            // Prepare the asset container.
            const container = new core_assetContainer__WEBPACK_IMPORTED_MODULE_3__.AssetContainer(scene);
            // Get materials/textures when loading to add to container
            const materials = [];
            this.onMaterialLoadedObservable.add((material) => {
                materials.push(material);
            });
            const textures = [];
            this.onTextureLoadedObservable.add((texture) => {
                textures.push(texture);
            });
            const cameras = [];
            this.onCameraLoadedObservable.add((camera) => {
                cameras.push(camera);
            });
            const morphTargetManagers = [];
            this.onMeshLoadedObservable.add((mesh) => {
                if (mesh.morphTargetManager) {
                    morphTargetManagers.push(mesh.morphTargetManager);
                }
            });
            return this._loader.importMeshAsync(null, scene, container, data, rootUrl, onProgress, fileName).then((result) => {
                Array.prototype.push.apply(container.geometries, result.geometries);
                Array.prototype.push.apply(container.meshes, result.meshes);
                Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                Array.prototype.push.apply(container.skeletons, result.skeletons);
                Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                Array.prototype.push.apply(container.materials, materials);
                Array.prototype.push.apply(container.textures, textures);
                Array.prototype.push.apply(container.lights, result.lights);
                Array.prototype.push.apply(container.transformNodes, result.transformNodes);
                Array.prototype.push.apply(container.cameras, cameras);
                Array.prototype.push.apply(container.morphTargetManagers, morphTargetManagers);
                return container;
            });
        });
    }
    /**
     * @internal
     */
    canDirectLoad(data) {
        return _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFFileLoaderMetadata.canDirectLoad(data);
    }
    /**
     * @internal
     */
    directLoad(scene, data) {
        if (data.startsWith("base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFMagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith(";base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFMagicBase64Encoded) ||
            data.startsWith("application/octet-stream;base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFMagicBase64Encoded) ||
            data.startsWith("model/gltf-binary;base64," + _glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFMagicBase64Encoded)) {
            const arrayBuffer = (0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_8__.DecodeBase64UrlToBinary)(data);
            this._validate(scene, new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength));
            return this._unpackBinaryAsync(new core_Misc_dataReader__WEBPACK_IMPORTED_MODULE_5__.DataReader({
                readAsync: (byteOffset, byteLength) => readAsync(arrayBuffer, byteOffset, byteLength),
                byteLength: arrayBuffer.byteLength,
            }));
        }
        this._validate(scene, data);
        return Promise.resolve({ json: this._parseJson(data) });
    }
    /** @internal */
    createPlugin(options) {
        return new GLTFFileLoader(options[_glTFFileLoader_metadata__WEBPACK_IMPORTED_MODULE_7__.GLTFFileLoaderMetadata.name]);
    }
    /**
     * The loader state or null if the loader is not active.
     */
    get loaderState() {
        return this._state;
    }
    /**
     * Returns a promise that resolves when the asset is completely loaded.
     * @returns a promise that resolves when the asset is completely loaded.
     */
    whenCompleteAsync() {
        return new Promise((resolve, reject) => {
            this.onCompleteObservable.addOnce(() => {
                resolve();
            });
            this.onErrorObservable.addOnce((reason) => {
                reject(reason);
            });
        });
    }
    /**
     * @internal
     */
    _setState(state) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        this.onLoaderStateChangedObservable.notifyObservers(this._state);
        this._log(GLTFLoaderState[this._state]);
    }
    /**
     * @internal
     */
    _loadFile(scene, fileOrUrl, onSuccess, useArrayBuffer, onError, onOpened) {
        const request = scene._loadFile(fileOrUrl, onSuccess, (event) => {
            this._onProgress(event, request);
        }, true, useArrayBuffer, onError, onOpened);
        request.onCompleteObservable.add(() => {
            // Force the length computable to be true since we can guarantee the data is loaded.
            request._lengthComputable = true;
            request._total = request._loaded;
        });
        this._requests.push(request);
        return request;
    }
    _onProgress(event, request) {
        if (!this._progressCallback) {
            return;
        }
        request._lengthComputable = event.lengthComputable;
        request._loaded = event.loaded;
        request._total = event.total;
        let lengthComputable = true;
        let loaded = 0;
        let total = 0;
        for (const request of this._requests) {
            if (request._lengthComputable === undefined || request._loaded === undefined || request._total === undefined) {
                return;
            }
            lengthComputable = lengthComputable && request._lengthComputable;
            loaded += request._loaded;
            total += request._total;
        }
        this._progressCallback({
            lengthComputable: lengthComputable,
            loaded: loaded,
            total: lengthComputable ? total : 0,
        });
    }
    _validate(scene, data, rootUrl = "", fileName = "") {
        if (!this.validate) {
            return;
        }
        this._startPerformanceCounter("Validate JSON");
        _glTFValidation__WEBPACK_IMPORTED_MODULE_6__.GLTFValidation.ValidateAsync(data, rootUrl, fileName, (uri) => {
            return this.preprocessUrlAsync(rootUrl + uri).then((url) => {
                return scene._loadFileAsync(url, undefined, true, true).then((data) => {
                    return new Uint8Array(data, 0, data.byteLength);
                });
            });
        }).then((result) => {
            this._endPerformanceCounter("Validate JSON");
            this.onValidatedObservable.notifyObservers(result);
            this.onValidatedObservable.clear();
        }, (reason) => {
            this._endPerformanceCounter("Validate JSON");
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Failed to validate: ${reason.message}`);
            this.onValidatedObservable.clear();
        });
    }
    _getLoader(loaderData) {
        const asset = loaderData.json.asset || {};
        this._log(`Asset version: ${asset.version}`);
        asset.minVersion && this._log(`Asset minimum version: ${asset.minVersion}`);
        asset.generator && this._log(`Asset generator: ${asset.generator}`);
        const version = GLTFFileLoader._parseVersion(asset.version);
        if (!version) {
            throw new Error("Invalid version: " + asset.version);
        }
        if (asset.minVersion !== undefined) {
            const minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
            if (!minVersion) {
                throw new Error("Invalid minimum version: " + asset.minVersion);
            }
            if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                throw new Error("Incompatible minimum version: " + asset.minVersion);
            }
        }
        const createLoaders = {
            1: GLTFFileLoader._CreateGLTF1Loader,
            2: GLTFFileLoader._CreateGLTF2Loader,
        };
        const createLoader = createLoaders[version.major];
        if (!createLoader) {
            throw new Error("Unsupported version: " + asset.version);
        }
        return createLoader(this);
    }
    _parseJson(json) {
        this._startPerformanceCounter("Parse JSON");
        this._log(`JSON length: ${json.length}`);
        const parsed = JSON.parse(json);
        this._endPerformanceCounter("Parse JSON");
        return parsed;
    }
    _unpackBinaryAsync(dataReader) {
        this._startPerformanceCounter("Unpack Binary");
        // Read magic + version + length + json length + json format
        return dataReader.loadAsync(20).then(() => {
            const Binary = {
                Magic: 0x46546c67,
            };
            const magic = dataReader.readUint32();
            if (magic !== Binary.Magic) {
                throw new core_Misc_error__WEBPACK_IMPORTED_MODULE_9__.RuntimeError("Unexpected magic: " + magic, core_Misc_error__WEBPACK_IMPORTED_MODULE_9__.ErrorCodes.GLTFLoaderUnexpectedMagicError);
            }
            const version = dataReader.readUint32();
            if (this.loggingEnabled) {
                this._log(`Binary version: ${version}`);
            }
            const length = dataReader.readUint32();
            if (!this.useRangeRequests && length !== dataReader.buffer.byteLength) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warn(`Length in header does not match actual data length: ${length} != ${dataReader.buffer.byteLength}`);
            }
            let unpacked;
            switch (version) {
                case 1: {
                    unpacked = this._unpackBinaryV1Async(dataReader, length);
                    break;
                }
                case 2: {
                    unpacked = this._unpackBinaryV2Async(dataReader, length);
                    break;
                }
                default: {
                    throw new Error("Unsupported version: " + version);
                }
            }
            this._endPerformanceCounter("Unpack Binary");
            return unpacked;
        });
    }
    _unpackBinaryV1Async(dataReader, length) {
        const ContentFormat = {
            JSON: 0,
        };
        const contentLength = dataReader.readUint32();
        const contentFormat = dataReader.readUint32();
        if (contentFormat !== ContentFormat.JSON) {
            throw new Error(`Unexpected content format: ${contentFormat}`);
        }
        const bodyLength = length - dataReader.byteOffset;
        const data = { json: this._parseJson(dataReader.readString(contentLength)), bin: null };
        if (bodyLength !== 0) {
            const startByteOffset = dataReader.byteOffset;
            data.bin = {
                readAsync: (byteOffset, byteLength) => dataReader.buffer.readAsync(startByteOffset + byteOffset, byteLength),
                byteLength: bodyLength,
            };
        }
        return Promise.resolve(data);
    }
    _unpackBinaryV2Async(dataReader, length) {
        const ChunkFormat = {
            JSON: 0x4e4f534a,
            BIN: 0x004e4942,
        };
        // Read the JSON chunk header.
        const chunkLength = dataReader.readUint32();
        const chunkFormat = dataReader.readUint32();
        if (chunkFormat !== ChunkFormat.JSON) {
            throw new Error("First chunk format is not JSON");
        }
        // Bail if there are no other chunks.
        if (dataReader.byteOffset + chunkLength === length) {
            return dataReader.loadAsync(chunkLength).then(() => {
                return { json: this._parseJson(dataReader.readString(chunkLength)), bin: null };
            });
        }
        // Read the JSON chunk and the length and type of the next chunk.
        return dataReader.loadAsync(chunkLength + 8).then(() => {
            const data = { json: this._parseJson(dataReader.readString(chunkLength)), bin: null };
            const readAsync = () => {
                const chunkLength = dataReader.readUint32();
                const chunkFormat = dataReader.readUint32();
                switch (chunkFormat) {
                    case ChunkFormat.JSON: {
                        throw new Error("Unexpected JSON chunk");
                    }
                    case ChunkFormat.BIN: {
                        const startByteOffset = dataReader.byteOffset;
                        data.bin = {
                            readAsync: (byteOffset, byteLength) => dataReader.buffer.readAsync(startByteOffset + byteOffset, byteLength),
                            byteLength: chunkLength,
                        };
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                    default: {
                        // ignore unrecognized chunkFormat
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                }
                if (dataReader.byteOffset !== length) {
                    return dataReader.loadAsync(8).then(readAsync);
                }
                return Promise.resolve(data);
            };
            return readAsync();
        });
    }
    static _parseVersion(version) {
        if (version === "1.0" || version === "1.0.1") {
            return {
                major: 1,
                minor: 0,
            };
        }
        const match = (version + "").match(/^(\d+)\.(\d+)/);
        if (!match) {
            return null;
        }
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2]),
        };
    }
    static _compareVersion(a, b) {
        if (a.major > b.major) {
            return 1;
        }
        if (a.major < b.major) {
            return -1;
        }
        if (a.minor > b.minor) {
            return 1;
        }
        if (a.minor < b.minor) {
            return -1;
        }
        return 0;
    }
    /**
     * @internal
     */
    _logOpen(message) {
        this._log(message);
        this._logIndentLevel++;
    }
    /** @internal */
    _logClose() {
        --this._logIndentLevel;
    }
    _logEnabled(message) {
        const spaces = GLTFFileLoader._logSpaces.substring(0, this._logIndentLevel * 2);
        core_Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Log(`${spaces}${message}`);
    }
    _logDisabled(message) { }
    _startPerformanceCounterEnabled(counterName) {
        core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.StartPerformanceCounter(counterName);
    }
    _startPerformanceCounterDisabled(counterName) { }
    _endPerformanceCounterEnabled(counterName) {
        core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.EndPerformanceCounter(counterName);
    }
    _endPerformanceCounterDisabled(counterName) { }
}
// ------------------
// End Common options
// ------------------
// ----------------
// Begin V1 options
// ----------------
/**
 * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
 * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
 * Defaults to true.
 * @internal
 */
GLTFFileLoader.IncrementalLoading = true;
/**
 * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
 * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
 * @internal
 */
GLTFFileLoader.HomogeneousCoordinates = false;
GLTFFileLoader._logSpaces = "                                ";
(0,core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.RegisterSceneLoaderPlugin)(new GLTFFileLoader());


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

/***/ "../loaders/dist/glTF/glTFValidation.js":
/*!**********************************************!*\
  !*** ../loaders/dist/glTF/glTFValidation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFValidation: () => (/* binding */ GLTFValidation)
/* harmony export */ });
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


function ValidateAsync(data, rootUrl, fileName, getExternalResource) {
    const options = {
        externalResourceFunction: getExternalResource,
    };
    if (fileName) {
        options.uri = rootUrl === "file:" ? fileName : rootUrl + fileName;
    }
    return ArrayBuffer.isView(data) ? GLTFValidator.validateBytes(data, options) : GLTFValidator.validateString(data, options);
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 */
function WorkerFunc() {
    const pendingExternalResources = [];
    onmessage = (message) => {
        const data = message.data;
        switch (data.id) {
            case "init": {
                importScripts(data.url);
                break;
            }
            case "validate": {
                ValidateAsync(data.data, data.rootUrl, data.fileName, (uri) => new Promise((resolve, reject) => {
                    const index = pendingExternalResources.length;
                    pendingExternalResources.push({ resolve, reject });
                    postMessage({ id: "getExternalResource", index: index, uri: uri });
                })).then((value) => {
                    postMessage({ id: "validate.resolve", value: value });
                }, (reason) => {
                    postMessage({ id: "validate.reject", reason: reason });
                });
                break;
            }
            case "getExternalResource.resolve": {
                pendingExternalResources[data.index].resolve(data.value);
                break;
            }
            case "getExternalResource.reject": {
                pendingExternalResources[data.index].reject(data.reason);
                break;
            }
        }
    };
}
/**
 * glTF validation
 */
class GLTFValidation {
    /**
     * Validate a glTF asset using the glTF-Validator.
     * @param data The JSON of a glTF or the array buffer of a binary glTF
     * @param rootUrl The root url for the glTF
     * @param fileName The file name for the glTF
     * @param getExternalResource The callback to get external resources for the glTF validator
     * @returns A promise that resolves with the glTF validation results once complete
     */
    static ValidateAsync(data, rootUrl, fileName, getExternalResource) {
        if (typeof Worker === "function") {
            return new Promise((resolve, reject) => {
                const workerContent = `${ValidateAsync}(${WorkerFunc})()`;
                const workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: "application/javascript" }));
                const worker = new Worker(workerBlobUrl);
                const onError = (error) => {
                    worker.removeEventListener("error", onError);
                    worker.removeEventListener("message", onMessage);
                    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                    reject(error);
                };
                const onMessage = (message) => {
                    const data = message.data;
                    switch (data.id) {
                        case "getExternalResource": {
                            getExternalResource(data.uri).then((value) => {
                                worker.postMessage({ id: "getExternalResource.resolve", index: data.index, value: value }, [value.buffer]);
                            }, (reason) => {
                                worker.postMessage({ id: "getExternalResource.reject", index: data.index, reason: reason });
                            });
                            break;
                        }
                        case "validate.resolve": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            resolve(data.value);
                            worker.terminate();
                            break;
                        }
                        case "validate.reject": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(data.reason);
                            worker.terminate();
                        }
                    }
                };
                worker.addEventListener("error", onError);
                worker.addEventListener("message", onMessage);
                worker.postMessage({ id: "init", url: core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(this.Configuration.url) });
                if (ArrayBuffer.isView(data)) {
                    // Slice the data to avoid copying the whole array buffer.
                    const slicedData = data.slice();
                    worker.postMessage({ id: "validate", data: slicedData, rootUrl: rootUrl, fileName: fileName }, [slicedData.buffer]);
                }
                else {
                    worker.postMessage({ id: "validate", data: data, rootUrl: rootUrl, fileName: fileName });
                }
            });
        }
        else {
            if (!this._LoadScriptPromise) {
                this._LoadScriptPromise = core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(this.Configuration.url);
            }
            return this._LoadScriptPromise.then(() => {
                return ValidateAsync(data, rootUrl, fileName, getExternalResource);
            });
        }
    }
}
/**
 * The configuration. Defaults to `{ url: "https://cdn.babylonjs.com/gltf_validator.js" }`.
 */
GLTFValidation.Configuration = {
    url: `${core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl}/gltf_validator.js`,
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX2dsVEZMb2FkZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFLQTtBQUNBO0FBUUE7QUFSQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBb0JBOztBQUVBO0FBQ0E7QUFjQTs7O0FBR0E7QUFDQTtBQVpBOztBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBcUZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQWxHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUE2Q0E7QUF5SkE7QUE4QkE7O0FBRUE7QUFDQTtBQXNDQTtBQUNBO0FBbFBBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUE1c0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEwQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBeUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBakhBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWlGQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBUUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBS0E7QUFFQTtBQUNBO0FBT0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQXgxRkE7O0FBRUE7QUFDQTtBQXcxRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVqR0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFzQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUEwQkE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7QUFBQTs7QUFpRUE7O0FBRUE7QUFDQTtBQThDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQXZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpRkE7QUFFQTs7QUFFQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUF1Q0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFpQkE7Ozs7O0FBS0E7QUFDQTtBQWlCQTs7QUFFQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQWdCQTs7OztBQUlBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQWNBOztBQUVBO0FBQ0E7QUFjQTs7O0FBR0E7QUFDQTtBQTBEQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFrVEE7O0FBRUE7QUFDQTtBQXVVQTtBQUNBO0FBRUE7QUFDQTtBQXNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBdjhCQTtBQUNBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBSUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQVFBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBejdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBdTNCQTtBQWdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwNkNBO0FBV0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQVVBOzs7Ozs7O0FBT0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9yYXdUZXh0dXJlMkRBcnJheS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZGF0YVJlYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZGVlcE1lcmdlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL2dsVEZMb2FkZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZGaWxlTG9hZGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGVmFsaWRhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi8uLi9zY2VuZVwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gc3RvcmUgMkQgYXJyYXkgdGV4dHVyZXMgY29udGFpbmluZyB1c2VyIGRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSYXdUZXh0dXJlMkRBcnJheSBleHRlbmRzIFRleHR1cmUge1xyXG4gICAgcHJpdmF0ZSBfZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBsYXllcnMgb2YgdGhlIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkZXB0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgUmF3VGV4dHVyZTJEQXJyYXlcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIGRhdGEgb2YgdGhlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSB3aWR0aCBkZWZpbmVzIHRoZSB3aWR0aCBvZiB0aGUgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBkZWZpbmVzIHRoZSBoZWlnaHQgb2YgdGhlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBkZXB0aCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgbGF5ZXJzIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IGRlZmluZXMgdGhlIHRleHR1cmUgZm9ybWF0IHRvIHVzZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGhvc3Rpbmcgc2NlbmVcclxuICAgICAqIEBwYXJhbSBnZW5lcmF0ZU1pcE1hcHMgZGVmaW5lcyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBtaXAgbGV2ZWxzIHNob3VsZCBiZSBnZW5lcmF0ZWQgKHRydWUgYnkgZGVmYXVsdClcclxuICAgICAqIEBwYXJhbSBpbnZlcnRZIGRlZmluZXMgaWYgdGV4dHVyZSBtdXN0IGJlIHN0b3JlZCB3aXRoIFkgYXhpcyBpbnZlcnRlZFxyXG4gICAgICogQHBhcmFtIHNhbXBsaW5nTW9kZSBkZWZpbmVzIHRoZSBzYW1wbGluZyBtb2RlIHRvIHVzZSAoVGV4dHVyZS5UUklMSU5FQVJfU0FNUExJTkdNT0RFIGJ5IGRlZmF1bHQpXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZVR5cGUgZGVmaW5lcyB0aGUgdGV4dHVyZSBUeXBlIChFbmdpbmUuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURSwgRW5naW5lLlRFWFRVUkVUWVBFX0ZMT0FULi4uKVxyXG4gICAgICogQHBhcmFtIGNyZWF0aW9uRmxhZ3Mgc3BlY2lmaWMgZmxhZ3MgdG8gdXNlIHdoZW4gY3JlYXRpbmcgdGhlIHRleHR1cmUgKENvbnN0YW50cy5URVhUVVJFX0NSRUFUSU9ORkxBR19TVE9SQUdFIGZvciBzdG9yYWdlIHRleHR1cmVzLCBmb3IgZWcpXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGRhdGE6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz4sXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBkZXB0aDogbnVtYmVyLFxyXG4gICAgICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIHRleHR1cmUgZm9ybWF0IHRvIHVzZSAqL1xyXG4gICAgICAgIHB1YmxpYyBmb3JtYXQ6IG51bWJlcixcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2VuZXJhdGVNaXBNYXBzOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBpbnZlcnRZOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgc2FtcGxpbmdNb2RlOiBudW1iZXIgPSBUZXh0dXJlLlRSSUxJTkVBUl9TQU1QTElOR01PREUsXHJcbiAgICAgICAgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURSxcclxuICAgICAgICBjcmVhdGlvbkZsYWdzPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihudWxsLCBzY2VuZSwgIWdlbmVyYXRlTWlwTWFwcywgaW52ZXJ0WSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBzY2VuZS5nZXRFbmdpbmUoKS5jcmVhdGVSYXdUZXh0dXJlMkRBcnJheShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZm9ybWF0LCBnZW5lcmF0ZU1pcE1hcHMsIGludmVydFksIHNhbXBsaW5nTW9kZSwgbnVsbCwgdGV4dHVyZVR5cGUsIGNyZWF0aW9uRmxhZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9kZXB0aCA9IGRlcHRoO1xyXG4gICAgICAgIHRoaXMuaXMyREFycmF5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgdGV4dHVyZSB3aXRoIG5ldyBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBkYXRhIHRvIHN0b3JlIGluIHRoZSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogQXJyYXlCdWZmZXJWaWV3KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2V0RW5naW5lKCkhLnVwZGF0ZVJhd1RleHR1cmUyREFycmF5KHRoaXMuX3RleHR1cmUsIGRhdGEsIHRoaXMuX3RleHR1cmUuZm9ybWF0LCB0aGlzLl90ZXh0dXJlLmludmVydFksIG51bGwsIHRoaXMuX3RleHR1cmUudHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgUkdCQSB0ZXh0dXJlIGZyb20gc29tZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgRGVmaW5lIHRoZSB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSB3aWR0aCBEZWZpbmUgdGhlIHdpZHRoIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IERlZmluZSB0aGUgaGVpZ2h0IG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gZGVwdGggZGVmaW5lcyB0aGUgbnVtYmVyIG9mIGxheWVycyBvZiB0aGUgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHRoZSB0ZXh0dXJlIHdpbGwgYmVsb25nIHRvXHJcbiAgICAgKiBAcGFyYW0gZ2VuZXJhdGVNaXBNYXBzIERlZmluZSB3aGV0aGVyIG9yIG5vdCB0byBjcmVhdGUgbWlwIG1hcHMgZm9yIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gaW52ZXJ0WSBkZWZpbmUgaWYgdGhlIGRhdGEgc2hvdWxkIGJlIGZsaXBwZWQgb24gWSB3aGVuIHVwbG9hZGVkIHRvIHRoZSBHUFVcclxuICAgICAqIEBwYXJhbSBzYW1wbGluZ01vZGUgZGVmaW5lIHRoZSB0ZXh0dXJlIHNhbXBsaW5nIG1vZGUgKFRleHR1cmUueHh4X1NBTVBMSU5HTU9ERSlcclxuICAgICAqIEBwYXJhbSB0eXBlIGRlZmluZSB0aGUgZm9ybWF0IG9mIHRoZSBkYXRhIChpbnQsIGZsb2F0Li4uIEVuZ2luZS5URVhUVVJFVFlQRV94eHgpXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgUkdCQSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlUkdCQVRleHR1cmUoXHJcbiAgICAgICAgZGF0YTogQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgZGVwdGg6IG51bWJlcixcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2VuZXJhdGVNaXBNYXBzOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBpbnZlcnRZOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgc2FtcGxpbmdNb2RlOiBudW1iZXIgPSBDb25zdGFudHMuVEVYVFVSRV9UUklMSU5FQVJfU0FNUExJTkdNT0RFLFxyXG4gICAgICAgIHR5cGU6IG51bWJlciA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFXHJcbiAgICApOiBSYXdUZXh0dXJlMkRBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSYXdUZXh0dXJlMkRBcnJheShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSwgc2NlbmUsIGdlbmVyYXRlTWlwTWFwcywgaW52ZXJ0WSwgc2FtcGxpbmdNb2RlLCB0eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZWNvZGUgfSBmcm9tIFwiLi9zdHJpbmdUb29sc1wiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBkYXRhIGJ1ZmZlclxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUJ1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIFJlYWRzIGJ5dGVzIGZyb20gdGhlIGRhdGEgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIGJ5dGUgb2Zmc2V0IHRvIHJlYWRcclxuICAgICAqIEBwYXJhbSBieXRlTGVuZ3RoIFRoZSBieXRlIGxlbmd0aCB0byByZWFkXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBieXRlcyBhcmUgcmVhZFxyXG4gICAgICovXHJcbiAgICByZWFkQXN5bmMoYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYnl0ZSBsZW5ndGggb2YgdGhlIGJ1ZmZlci5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYnl0ZUxlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgcmVhZGluZyBmcm9tIGEgZGF0YSBidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXRhUmVhZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgYnVmZmVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRhdGEgcmVhZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYnVmZmVyOiBJRGF0YUJ1ZmZlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IGJ5dGUgb2Zmc2V0IGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgZGF0YSBidWZmZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieXRlT2Zmc2V0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9kYXRhVmlldzogRGF0YVZpZXc7XHJcbiAgICBwcml2YXRlIF9kYXRhQnl0ZU9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byByZWFkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGJ1ZmZlcjogSURhdGFCdWZmZXIpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBnaXZlbiBieXRlIGxlbmd0aC5cclxuICAgICAqIEBwYXJhbSBieXRlTGVuZ3RoIFRoZSBieXRlIGxlbmd0aCB0byBsb2FkXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBsb2FkQXN5bmMoYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYnVmZmVyLnJlYWRBc3luYyh0aGlzLmJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YUJ5dGVPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhIHVuc2lnbmVkIDMyLWJpdCBpbnRlZ2VyIGZyb20gdGhlIGN1cnJlbnRseSBsb2FkZWQgZGF0YSByYW5nZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSAzMi1iaXQgaW50ZWdlciByZWFkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkVWludDMyKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhVmlldy5nZXRVaW50MzIodGhpcy5fZGF0YUJ5dGVPZmZzZXQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFCeXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhIGJ5dGUgYXJyYXkgZnJvbSB0aGUgY3VycmVudGx5IGxvYWRlZCBkYXRhIHJhbmdlLlxyXG4gICAgICogQHBhcmFtIGJ5dGVMZW5ndGggVGhlIGJ5dGUgbGVuZ3RoIHRvIHJlYWRcclxuICAgICAqIEByZXR1cm5zIFRoZSBieXRlIGFycmF5IHJlYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRVaW50OEFycmF5KGJ5dGVMZW5ndGg6IG51bWJlcik6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YVZpZXcuYnVmZmVyLCB0aGlzLl9kYXRhVmlldy5ieXRlT2Zmc2V0ICsgdGhpcy5fZGF0YUJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFCeXRlT2Zmc2V0ICs9IGJ5dGVMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ICs9IGJ5dGVMZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50bHkgbG9hZGVkIGRhdGEgcmFuZ2UuXHJcbiAgICAgKiBAcGFyYW0gYnl0ZUxlbmd0aCBUaGUgYnl0ZSBsZW5ndGggdG8gcmVhZFxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyByZWFkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkU3RyaW5nKGJ5dGVMZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIERlY29kZSh0aGlzLnJlYWRVaW50OEFycmF5KGJ5dGVMZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNraXBzIHRoZSBnaXZlbiBieXRlIGxlbmd0aCB0aGUgY3VycmVudGx5IGxvYWRlZCBkYXRhIHJhbmdlLlxyXG4gICAgICogQHBhcmFtIGJ5dGVMZW5ndGggVGhlIGJ5dGUgbGVuZ3RoIHRvIHNraXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNraXBCeXRlcyhieXRlTGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kYXRhQnl0ZU9mZnNldCArPSBieXRlTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYnl0ZU9mZnNldCArPSBieXRlTGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODIxODIwOVxyXG4vKipcclxuICogTWVyZ2VzIGEgc2VyaWVzIG9mIG9iamVjdHMgaW50byBhIHNpbmdsZSBvYmplY3QsIGRlZXBseS5cclxuICogQHBhcmFtIG9iamVjdHMgVGhlIG9iamVjdHMgdG8gbWVyZ2UgKG9iamVjdHMgbGF0ZXIgaW4gdGhlIGxpc3QgdGFrZSBwcmVjZWRlbmNlKS5cclxuICogQHJldHVybnMgVGhlIG1lcmdlZCBvYmplY3QuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2U8VCBleHRlbmRzIG9iamVjdD4oLi4ub2JqZWN0czogVFtdKTogVCB7XHJcbiAgICBjb25zdCBpc1JlY29yZCA9IChvYmo6IHVua25vd24pOiBvYmogaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4gISFvYmogJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KChwcmV2LCBvYmopID0+IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBWYWwgPSBwcmV2W2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IG9WYWwgPSAob2JqIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNSZWNvcmQocFZhbCkgJiYgaXNSZWNvcmQob1ZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IGRlZXBNZXJnZShwVmFsLCBvVmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgfSwge30pIGFzIFQ7XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU21hcnRBcnJheSB9IGZyb20gXCIuLi9NaXNjL3NtYXJ0QXJyYXlcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRGlzcG9zYWJsZSwgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiLi4vTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgTW9ycGhUYXJnZXQgfSBmcm9tIFwiLi9tb3JwaFRhcmdldFwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHR5cGUgeyBFZmZlY3QgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBSYXdUZXh0dXJlMkRBcnJheSB9IGZyb20gXCIuLi9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3VGV4dHVyZTJEQXJyYXlcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBkZWZvcm0gbWVzaGVzIHVzaW5nIG1vcnBoaW5nIGJldHdlZW4gZGlmZmVyZW50IHRhcmdldHNcclxuICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvbWVzaC9tb3JwaFRhcmdldHNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb3JwaFRhcmdldE1hbmFnZXIgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICAvKiogRW5hYmxlIHN0b3JpbmcgbW9ycGggdGFyZ2V0IGRhdGEgaW50byB0ZXh0dXJlcyB3aGVuIHNldCB0byB0cnVlICh0cnVlIGJ5IGRlZmF1bHQpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVuYWJsZVRleHR1cmVTdG9yYWdlID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogTWF4aW11bSBudW1iZXIgb2YgYWN0aXZlIG1vcnBoIHRhcmdldHMgc3VwcG9ydGVkIGluIHRoZSBcInZlcnRleCBhdHRyaWJ1dGVcIiBtb2RlIChpLmUuLCBub3QgdGhlIFwidGV4dHVyZVwiIG1vZGUpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1heEFjdGl2ZU1vcnBoVGFyZ2V0c0luVmVydGV4QXR0cmlidXRlTW9kZSA9IDg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHVzZWQgaW4gdGV4dHVyZSBtb2RlLCBpZiBncmVhdGhlciB0aGFuIDAsIHRoaXMgd2lsbCBvdmVycmlkZSB0aGUgdGhlIG1vcnBoIG1hbmFnZXIgbnVtTWF4SW5mbHVlbmNlcnMgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uc3RhbnRUYXJnZXRDb3VudEZvclRleHR1cmVNb2RlID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF90YXJnZXRzID0gbmV3IEFycmF5PE1vcnBoVGFyZ2V0PigpO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0SW5mbHVlbmNlQ2hhbmdlZE9ic2VydmVycyA9IG5ldyBBcnJheTxOdWxsYWJsZTxPYnNlcnZlcjxib29sZWFuPj4+KCk7XHJcbiAgICBwcml2YXRlIF90YXJnZXREYXRhTGF5b3V0Q2hhbmdlZE9ic2VydmVycyA9IG5ldyBBcnJheTxOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj4+KCk7XHJcbiAgICBwcml2YXRlIF9hY3RpdmVUYXJnZXRzID0gbmV3IFNtYXJ0QXJyYXk8TW9ycGhUYXJnZXQ+KDE2KTtcclxuICAgIHByaXZhdGUgX3NjZW5lOiBOdWxsYWJsZTxTY2VuZT47XHJcbiAgICBwcml2YXRlIF9pbmZsdWVuY2VzOiBGbG9hdDMyQXJyYXk7XHJcbiAgICBwcml2YXRlIF9zdXBwb3J0c1Bvc2l0aW9ucyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydHNOb3JtYWxzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zdXBwb3J0c1RhbmdlbnRzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zdXBwb3J0c1VWcyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydHNVVjJzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zdXBwb3J0c0NvbG9ycyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdmVydGV4Q291bnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdW5pcXVlSWQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdGVtcEluZmx1ZW5jZXMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfY2FuVXNlVGV4dHVyZUZvclRhcmdldHMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2Jsb2NrQ291bnRlciA9IDA7XHJcbiAgICBwcml2YXRlIF9tdXN0U3luY2hyb25pemUgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfZm9yY2VVcGRhdGVXaGVuVW5mcm96ZW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3RleHR1cmVWZXJ0ZXhTdHJpZGUgPSAwO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfdGV4dHVyZVdpZHRoID0gMDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3RleHR1cmVIZWlnaHQgPSAxO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfbW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlczogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfcGFyZW50Q29udGFpbmVyOiBOdWxsYWJsZTxJQXNzZXRDb250YWluZXI+ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3RhcmdldFN0b3JlVGV4dHVyZTogTnVsbGFibGU8UmF3VGV4dHVyZTJEQXJyYXk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGluZmx1ZW5jZXJzIG11c3QgYmUgb3B0aW1pemVkIChlZy4gcmVjb21waWxpbmcgdGhlIHNoYWRlciBpZiBsZXNzIGluZmx1ZW5jZXJzIGFyZSB1c2VkKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3B0aW1pemVJbmZsdWVuY2VycyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgcG9zaXRpb25zIG11c3QgYmUgbW9ycGhlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlUG9zaXRpb25Nb3JwaGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgbm9ybWFscyBtdXN0IGJlIG1vcnBoZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZU5vcm1hbE1vcnBoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0YW5nZW50cyBtdXN0IGJlIG1vcnBoZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZVRhbmdlbnRNb3JwaGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgVVYgbXVzdCBiZSBtb3JwaGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVVVk1vcnBoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBVVjIgbXVzdCBiZSBtb3JwaGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVVVjJNb3JwaGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgY29sb3JzIG11c3QgYmUgbW9ycGhlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlQ29sb3JNb3JwaGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgYWRkaW5nIG5ldyB0YXJnZXQgb3IgdXBkYXRpbmcgYW4gZXhpc3RpbmcgdGFyZ2V0IHdpbGwgbm90IHVwZGF0ZSB0aGUgdW5kZXJseWluZyBkYXRhIGJ1ZmZlcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBhcmVVcGRhdGVzRnJvemVuKGJsb2NrOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGJsb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrQ291bnRlcisrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrQ291bnRlci0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmxvY2tDb3VudGVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrQ291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3luY0FjdGl2ZVRhcmdldHModGhpcy5fZm9yY2VVcGRhdGVXaGVuVW5mcm96ZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGVXaGVuVW5mcm96ZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFyZVVwZGF0ZXNGcm96ZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrQ291bnRlciA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE1vcnBoVGFyZ2V0TWFuYWdlclxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGN1cnJlbnQgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICBzY2VuZSA9IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUuYWRkTW9ycGhUYXJnZXRNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdW5pcXVlSWQgPSB0aGlzLl9zY2VuZS5nZXRVbmlxdWVJZCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZW5naW5lQ2FwcyA9IHRoaXMuX3NjZW5lLmdldEVuZ2luZSgpLmdldENhcHMoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FuVXNlVGV4dHVyZUZvclRhcmdldHMgPVxyXG4gICAgICAgICAgICAgICAgZW5naW5lQ2Fwcy5jYW5Vc2VHTFZlcnRleElEICYmIGVuZ2luZUNhcHMudGV4dHVyZUZsb2F0ICYmIGVuZ2luZUNhcHMubWF4VmVydGV4VGV4dHVyZUltYWdlVW5pdHMgPiAwICYmIGVuZ2luZUNhcHMudGV4dHVyZTJEQXJyYXlNYXhMYXllckNvdW50ID4gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbnVtTWF4SW5mbHVlbmNlcnMgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpbmZsdWVuY2VycyAodGFyZ2V0cykgKGRlZmF1bHQgdmFsdWU6IDApLlxyXG4gICAgICogU2V0dGluZyBhIHZhbHVlIGZvciB0aGlzIHByb3BlcnR5IGNhbiBsZWFkIHRvIGEgc21vb3RoZXIgZXhwZXJpZW5jZSwgYXMgb25seSBvbmUgc2hhZGVyIHdpbGwgYmUgY29tcGlsZWQsIHdoaWNoIHdpbGwgdXNlIHRoaXMgdmFsdWUgYXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGluZmx1ZW5jZXJzLlxyXG4gICAgICogSWYgeW91IGxlYXZlIHRoZSB2YWx1ZSBhdCAwIChkZWZhdWx0KSwgYSBuZXcgc2hhZGVyIHdpbGwgYmUgY29tcGlsZWQgZXZlcnkgdGltZSB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBpbmZsdWVuY2VycyBjaGFuZ2VzLiBUaGlzIGNhbiBjYXVzZSBwcm9ibGVtcywgYXMgY29tcGlsaW5nIGEgc2hhZGVyIHRha2VzIHRpbWUuXHJcbiAgICAgKiBJZiB5b3UgYXNzaWduIGEgbm9uLXplcm8gdmFsdWUgdG8gdGhpcyBwcm9wZXJ0eSwgeW91IG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhpcyB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gdGhlIG1heGltdW0gbnVtYmVyIG9mIChhY3RpdmUpIGluZmx1ZW5jZXJzIHlvdSdsbCBuZWVkIGZvciB0aGlzIG1vcnBoIG1hbmFnZXIuXHJcbiAgICAgKiBPdGhlcndpc2UsIHRoZSBudW1iZXIgb2YgYWN0aXZlIGluZmx1ZW5jZXJzIHdpbGwgYmUgdHJ1bmNhdGVkIGF0IHRoZSB2YWx1ZSB5b3Ugc2V0IGZvciB0aGlzIHByb3BlcnR5LCB3aGljaCBjYW4gbGVhZCB0byB1bmV4cGVjdGVkIHJlc3VsdHMuXHJcbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBwcm9wZXJ0eSBoYXMgbm8gZWZmZWN0IGlmIFwidXNlVGV4dHVyZVRvU3RvcmVUYXJnZXRzXCIgaXMgZmFsc2UuXHJcbiAgICAgKiBOb3RlIGFzIHdlbGwgdGhhdCBpZiBNb3JwaFRhcmdldE1hbmFnZXIuQ29uc3RhbnRUYXJnZXRDb3VudEZvclRleHR1cmVNb2RlIGlzIGdyZWF0ZXIgdGhhbiAwLCB0aGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZCBhbmQgdGhlIGNvbnN0YW50IHZhbHVlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG51bU1heEluZmx1ZW5jZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKE1vcnBoVGFyZ2V0TWFuYWdlci5Db25zdGFudFRhcmdldENvdW50Rm9yVGV4dHVyZU1vZGUgPiAwICYmIHRoaXMuaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNb3JwaFRhcmdldE1hbmFnZXIuQ29uc3RhbnRUYXJnZXRDb3VudEZvclRleHR1cmVNb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtTWF4SW5mbHVlbmNlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBudW1NYXhJbmZsdWVuY2Vycyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX251bU1heEluZmx1ZW5jZXJzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9udW1NYXhJbmZsdWVuY2VycyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX211c3RTeW5jaHJvbml6ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3luY0FjdGl2ZVRhcmdldHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIG1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1bmlxdWVJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91bmlxdWVJZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiB2ZXJ0aWNlcyBoYW5kbGVkIGJ5IHRoaXMgbWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHZlcnRleENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgc3VwcG9ydHMgbW9ycGhpbmcgb2YgcG9zaXRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3VwcG9ydHNQb3NpdGlvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzUG9zaXRpb25zICYmIHRoaXMuZW5hYmxlUG9zaXRpb25Nb3JwaGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIHN1cHBvcnRzIG1vcnBoaW5nIG9mIG5vcm1hbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzdXBwb3J0c05vcm1hbHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzTm9ybWFscyAmJiB0aGlzLmVuYWJsZU5vcm1hbE1vcnBoaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgc3VwcG9ydHMgbW9ycGhpbmcgb2YgdGFuZ2VudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzdXBwb3J0c1RhbmdlbnRzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1RhbmdlbnRzICYmIHRoaXMuZW5hYmxlVGFuZ2VudE1vcnBoaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgc3VwcG9ydHMgbW9ycGhpbmcgb2YgdGV4dHVyZSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHN1cHBvcnRzVVZzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1VWcyAmJiB0aGlzLmVuYWJsZVVWTW9ycGhpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBzdXBwb3J0cyBtb3JwaGluZyBvZiB0ZXh0dXJlIGNvb3JkaW5hdGVzIDJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzdXBwb3J0c1VWMnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVVYycyAmJiB0aGlzLmVuYWJsZVVWMk1vcnBoaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgc3VwcG9ydHMgbW9ycGhpbmcgb2YgY29sb3JzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3VwcG9ydHNDb2xvcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzQ29sb3JzICYmIHRoaXMuZW5hYmxlQ29sb3JNb3JwaGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIGhhcyBkYXRhIGZvciBtb3JwaGluZyBwb3NpdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoYXNQb3NpdGlvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzUG9zaXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgaGFzIGRhdGEgZm9yIG1vcnBoaW5nIG5vcm1hbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoYXNOb3JtYWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c05vcm1hbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBoYXMgZGF0YSBmb3IgbW9ycGhpbmcgdGFuZ2VudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoYXNUYW5nZW50cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUYW5nZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIGhhcyBkYXRhIGZvciBtb3JwaGluZyB0ZXh0dXJlIGNvb3JkaW5hdGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzVVZzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1VWcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIGhhcyBkYXRhIGZvciBtb3JwaGluZyB0ZXh0dXJlIGNvb3JkaW5hdGVzIDJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoYXNVVjJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1VWMnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBoYXMgZGF0YSBmb3IgbW9ycGhpbmcgY29sb3JzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzQ29sb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0NvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiB0YXJnZXRzIHN0b3JlZCBpbiB0aGlzIG1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBudW1UYXJnZXRzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGluZmx1ZW5jZXJzIChpZS4gdGhlIG51bWJlciBvZiB0YXJnZXRzIHdpdGggaW5mbHVlbmNlcyA+IDApXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbnVtSW5mbHVlbmNlcnMoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5faW5mbHVlbmNlc0FyZURpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYXJnZXRzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2YgaW5mbHVlbmNlcyAob25lIHBlciB0YXJnZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaW5mbHVlbmNlcygpOiBGbG9hdDMyQXJyYXkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbmZsdWVuY2VzQXJlRGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3luY0FjdGl2ZVRhcmdldHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZmx1ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXNlVGV4dHVyZVRvU3RvcmVUYXJnZXRzID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGFyZ2V0cyBzaG91bGQgYmUgc3RvcmVkIGFzIGEgdGV4dHVyZSBpbnN0ZWFkIG9mIHVzaW5nIHZlcnRleCBhdHRyaWJ1dGVzIChkZWZhdWx0IGlzIHRydWUpLlxyXG4gICAgICogUGxlYXNlIG5vdGUgdGhhdCB0aGlzIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGlmIHRoZSBoYXJkd2FyZSBkb2VzIG5vdCBzdXBwb3J0IGl0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdXNlVGV4dHVyZVRvU3RvcmVUYXJnZXRzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VUZXh0dXJlVG9TdG9yZVRhcmdldHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB1c2VUZXh0dXJlVG9TdG9yZVRhcmdldHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fdXNlVGV4dHVyZVRvU3RvcmVUYXJnZXRzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZVRleHR1cmVUb1N0b3JlVGFyZ2V0cyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX211c3RTeW5jaHJvbml6ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3luY0FjdGl2ZVRhcmdldHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgdGhhdCB0aGUgdGFyZ2V0cyBhcmUgc3RvcmVkIGludG8gYSB0ZXh0dXJlIChpbnN0ZWFkIG9mIGFzIGF0dHJpYnV0ZXMpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIE1vcnBoVGFyZ2V0TWFuYWdlci5FbmFibGVUZXh0dXJlU3RvcmFnZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnVzZVRleHR1cmVUb1N0b3JlVGFyZ2V0cyAmJlxyXG4gICAgICAgICAgICB0aGlzLl9jYW5Vc2VUZXh0dXJlRm9yVGFyZ2V0cyAmJlxyXG4gICAgICAgICAgICAhdGhpcy5fc2NlbmU/LmdldEVuZ2luZSgpLmdldENhcHMoKS5kaXNhYmxlTW9ycGhUYXJnZXRUZXh0dXJlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhbiBvYmplY3QgdXNlZCB0byBzdG9yZSB1c2VyIGRlZmluZWQgaW5mb3JtYXRpb24gZm9yIHRoZSBNb3JwaFRhcmdldE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYWN0aXZlIHRhcmdldCBhdCBzcGVjaWZpZWQgaW5kZXguIEFuIGFjdGl2ZSB0YXJnZXQgaXMgYSB0YXJnZXQgd2l0aCBhbiBpbmZsdWVuY2UgPiAwXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggZGVmaW5lcyB0aGUgaW5kZXggdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIHRoZSByZXF1ZXN0ZWQgdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBY3RpdmVUYXJnZXQoaW5kZXg6IG51bWJlcik6IE1vcnBoVGFyZ2V0IHtcclxuICAgICAgICBpZiAodGhpcy5faW5mbHVlbmNlc0FyZURpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYXJnZXRzLmRhdGFbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdGFyZ2V0IGF0IHNwZWNpZmllZCBpbmRleFxyXG4gICAgICogQHBhcmFtIGluZGV4IGRlZmluZXMgdGhlIGluZGV4IHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVxdWVzdGVkIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VGFyZ2V0KGluZGV4OiBudW1iZXIpOiBNb3JwaFRhcmdldCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZmlyc3QgdGFyZ2V0IHdpdGggdGhlIHNwZWNpZmllZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBuYW1lIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVxdWVzdGVkIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VGFyZ2V0QnlOYW1lKG5hbWU6IHN0cmluZyk6IE51bGxhYmxlPE1vcnBoVGFyZ2V0PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGhpcy5fdGFyZ2V0cykge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luZmx1ZW5jZXNBcmVEaXJ0eSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfbmVlZFVwZGF0ZUluZmx1ZW5jZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIG5ldyB0YXJnZXQgdG8gdGhpcyBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IGRlZmluZXMgdGhlIHRhcmdldCB0byBhZGRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRhcmdldCh0YXJnZXQ6IE1vcnBoVGFyZ2V0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0SW5mbHVlbmNlQ2hhbmdlZE9ic2VydmVycy5wdXNoKFxyXG4gICAgICAgICAgICB0YXJnZXQub25JbmZsdWVuY2VDaGFuZ2VkLmFkZCgobmVlZFVwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJlVXBkYXRlc0Zyb3plbiAmJiBuZWVkVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGVXaGVuVW5mcm96ZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5mbHVlbmNlc0FyZURpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25lZWRVcGRhdGVJbmZsdWVuY2VzID0gdGhpcy5fbmVlZFVwZGF0ZUluZmx1ZW5jZXMgfHwgbmVlZFVwZGF0ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX3RhcmdldERhdGFMYXlvdXRDaGFuZ2VkT2JzZXJ2ZXJzLnB1c2goXHJcbiAgICAgICAgICAgIHRhcmdldC5fb25EYXRhTGF5b3V0Q2hhbmdlZC5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbXVzdFN5bmNocm9uaXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9tdXN0U3luY2hyb25pemUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgdGFyZ2V0IGZyb20gdGhlIG1hbmFnZXJcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgZGVmaW5lcyB0aGUgdGFyZ2V0IHRvIHJlbW92ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlVGFyZ2V0KHRhcmdldDogTW9ycGhUYXJnZXQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3RhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5vbkluZmx1ZW5jZUNoYW5nZWQucmVtb3ZlKHRoaXMuX3RhcmdldEluZmx1ZW5jZUNoYW5nZWRPYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKVswXSk7XHJcbiAgICAgICAgICAgIHRhcmdldC5fb25EYXRhTGF5b3V0Q2hhbmdlZC5yZW1vdmUodGhpcy5fdGFyZ2V0RGF0YUxheW91dENoYW5nZWRPYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKVswXSk7XHJcbiAgICAgICAgICAgIHRoaXMuX211c3RTeW5jaHJvbml6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUuc3RvcEFuaW1hdGlvbih0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2JpbmQoZWZmZWN0OiBFZmZlY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5mbHVlbmNlc0FyZURpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVmZmVjdC5zZXRGbG9hdDMoXCJtb3JwaFRhcmdldFRleHR1cmVJbmZvXCIsIHRoaXMuX3RleHR1cmVWZXJ0ZXhTdHJpZGUsIHRoaXMuX3RleHR1cmVXaWR0aCwgdGhpcy5fdGV4dHVyZUhlaWdodCk7XHJcbiAgICAgICAgZWZmZWN0LnNldEZsb2F0QXJyYXkoXCJtb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzXCIsIHRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXMpO1xyXG4gICAgICAgIGVmZmVjdC5zZXRUZXh0dXJlKFwibW9ycGhUYXJnZXRzXCIsIHRoaXMuX3RhcmdldFN0b3JlVGV4dHVyZSk7XHJcbiAgICAgICAgZWZmZWN0LnNldEZsb2F0KFwibW9ycGhUYXJnZXRDb3VudFwiLCB0aGlzLm51bUluZmx1ZW5jZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb25lIHRoZSBjdXJyZW50IG1hbmFnZXJcclxuICAgICAqIEByZXR1cm5zIGEgbmV3IE1vcnBoVGFyZ2V0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogTW9ycGhUYXJnZXRNYW5hZ2VyIHtcclxuICAgICAgICBjb25zdCBjb3B5ID0gbmV3IE1vcnBoVGFyZ2V0TWFuYWdlcih0aGlzLl9zY2VuZSk7XHJcbiAgICAgICAgY29weS5hcmVVcGRhdGVzRnJvemVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGhpcy5fdGFyZ2V0cykge1xyXG4gICAgICAgICAgICBjb3B5LmFkZFRhcmdldCh0YXJnZXQuY2xvbmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvcHkuYXJlVXBkYXRlc0Zyb3plbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb3B5LmVuYWJsZVBvc2l0aW9uTW9ycGhpbmcgPSB0aGlzLmVuYWJsZVBvc2l0aW9uTW9ycGhpbmc7XHJcbiAgICAgICAgY29weS5lbmFibGVOb3JtYWxNb3JwaGluZyA9IHRoaXMuZW5hYmxlTm9ybWFsTW9ycGhpbmc7XHJcbiAgICAgICAgY29weS5lbmFibGVUYW5nZW50TW9ycGhpbmcgPSB0aGlzLmVuYWJsZVRhbmdlbnRNb3JwaGluZztcclxuICAgICAgICBjb3B5LmVuYWJsZVVWTW9ycGhpbmcgPSB0aGlzLmVuYWJsZVVWTW9ycGhpbmc7XHJcbiAgICAgICAgY29weS5lbmFibGVVVjJNb3JwaGluZyA9IHRoaXMuZW5hYmxlVVYyTW9ycGhpbmc7XHJcbiAgICAgICAgY29weS5lbmFibGVDb2xvck1vcnBoaW5nID0gdGhpcy5lbmFibGVDb2xvck1vcnBoaW5nO1xyXG4gICAgICAgIGNvcHkubWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhO1xyXG5cclxuICAgICAgICByZXR1cm4gY29weTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhlIGN1cnJlbnQgbWFuYWdlciBpbnRvIGEgU2VyaWFsaXphdGlvbiBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIHRoZSBzZXJpYWxpemVkIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge307XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuaWQgPSB0aGlzLnVuaXF1ZUlkO1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRhcmdldHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0aGlzLl90YXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudGFyZ2V0cy5wdXNoKHRhcmdldC5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N5bmNBY3RpdmVUYXJnZXRzKG5lZWRVcGRhdGUgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmFyZVVwZGF0ZXNGcm96ZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmVlZFVwZGF0ZSA9IG5lZWRVcGRhdGUgfHwgdGhpcy5fbmVlZFVwZGF0ZUluZmx1ZW5jZXM7XHJcblxyXG4gICAgICAgIHRoaXMuX25lZWRVcGRhdGVJbmZsdWVuY2VzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faW5mbHVlbmNlc0FyZURpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHdhc1VzaW5nVGV4dHVyZUZvclRhcmdldHMgPSAhIXRoaXMuX3RhcmdldFN0b3JlVGV4dHVyZTtcclxuICAgICAgICBjb25zdCBpc1VzaW5nVGV4dHVyZUZvclRhcmdldHMgPSB0aGlzLmlzVXNpbmdUZXh0dXJlRm9yVGFyZ2V0cztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX211c3RTeW5jaHJvbml6ZSB8fCB3YXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzICE9PSBpc1VzaW5nVGV4dHVyZUZvclRhcmdldHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbXVzdFN5bmNocm9uaXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3luY2hyb25pemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmZsdWVuY2VDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0cy5yZXNldCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXMgfHwgdGhpcy5fbW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlcy5sZW5ndGggIT09IHRoaXMuX3RhcmdldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuX3RhcmdldHMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRJbmRleCA9IC0xO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRoaXMuX3RhcmdldHMpIHtcclxuICAgICAgICAgICAgdGFyZ2V0SW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5pbmZsdWVuY2UgPT09IDAgJiYgdGhpcy5vcHRpbWl6ZUluZmx1ZW5jZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldHMubGVuZ3RoID49IE1vcnBoVGFyZ2V0TWFuYWdlci5NYXhBY3RpdmVNb3JwaFRhcmdldHNJblZlcnRleEF0dHJpYnV0ZU1vZGUgJiYgIXRoaXMuaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0cy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXNbaW5mbHVlbmNlQ291bnRdID0gdGFyZ2V0SW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuX3RlbXBJbmZsdWVuY2VzW2luZmx1ZW5jZUNvdW50KytdID0gdGFyZ2V0LmluZmx1ZW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzLmxlbmd0aCAhPT0gaW5mbHVlbmNlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlcyA9IHRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXMuc2xpY2UoMCwgaW5mbHVlbmNlQ291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbmZsdWVuY2VzIHx8IHRoaXMuX2luZmx1ZW5jZXMubGVuZ3RoICE9PSBpbmZsdWVuY2VDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmZsdWVuY2VzID0gbmV3IEZsb2F0MzJBcnJheShpbmZsdWVuY2VDb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5mbHVlbmNlQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5faW5mbHVlbmNlc1tpbmRleF0gPSB0aGlzLl90ZW1wSW5mbHVlbmNlc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmVlZFVwZGF0ZSAmJiB0aGlzLl9zY2VuZSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdGhpcy5fc2NlbmUubWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxhbnk+bWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVXNpbmdUZXh0dXJlRm9yVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoLl9tYXJrU3ViTWVzaGVzQXNBdHRyaWJ1dGVzRGlydHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPE1lc2g+bWVzaCkuX3N5bmNHZW9tZXRyeVdpdGhNb3JwaFRhcmdldE1hbmFnZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTeW5jaHJvbml6ZSB0aGUgdGFyZ2V0cyB3aXRoIGFsbCB0aGUgbWVzaGVzIHVzaW5nIHRoaXMgbW9ycGggdGFyZ2V0IG1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN5bmNocm9uaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmUgfHwgdGhpcy5hcmVVcGRhdGVzRnJvemVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuX3NjZW5lLmdldEVuZ2luZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdXBwb3J0c1Bvc2l0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydHNOb3JtYWxzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zdXBwb3J0c1RhbmdlbnRzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zdXBwb3J0c1VWcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydHNVVjJzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zdXBwb3J0c0NvbG9ycyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fdmVydGV4Q291bnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmU/LmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmUgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VzaW5nVGV4dHVyZUZvclRhcmdldHMgJiYgdGhpcy5fdGFyZ2V0cy5sZW5ndGggPiBlbmdpbmUuZ2V0Q2FwcygpLnRleHR1cmUyREFycmF5TWF4TGF5ZXJDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZVRleHR1cmVUb1N0b3JlVGFyZ2V0cyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGhpcy5fdGFyZ2V0cykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1Bvc2l0aW9ucyA9IHRoaXMuX3N1cHBvcnRzUG9zaXRpb25zICYmIHRhcmdldC5oYXNQb3NpdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzTm9ybWFscyA9IHRoaXMuX3N1cHBvcnRzTm9ybWFscyAmJiB0YXJnZXQuaGFzTm9ybWFscztcclxuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNUYW5nZW50cyA9IHRoaXMuX3N1cHBvcnRzVGFuZ2VudHMgJiYgdGFyZ2V0Lmhhc1RhbmdlbnRzO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1VWcyA9IHRoaXMuX3N1cHBvcnRzVVZzICYmIHRhcmdldC5oYXNVVnM7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzVVYycyA9IHRoaXMuX3N1cHBvcnRzVVYycyAmJiB0YXJnZXQuaGFzVVYycztcclxuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNDb2xvcnMgPSB0aGlzLl9zdXBwb3J0c0NvbG9ycyAmJiB0YXJnZXQuaGFzQ29sb3JzO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVydGV4Q291bnQgPSB0YXJnZXQudmVydGV4Q291bnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92ZXJ0ZXhDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmVydGV4Q291bnQgPSB2ZXJ0ZXhDb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl92ZXJ0ZXhDb3VudCAhPT0gdmVydGV4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcclxuICAgICAgICAgICAgICAgICAgICBgSW5jb21wYXRpYmxlIHRhcmdldC4gVGFyZ2V0cyBtdXN0IGFsbCBoYXZlIHRoZSBzYW1lIHZlcnRpY2VzIGNvdW50LiBDdXJyZW50IHZlcnRleCBjb3VudDogJHt0aGlzLl92ZXJ0ZXhDb3VudH0sIHZlcnRleCBjb3VudCBmb3IgdGFyZ2V0IFwiJHt0YXJnZXQubmFtZX1cIjogJHt2ZXJ0ZXhDb3VudH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1VzaW5nVGV4dHVyZUZvclRhcmdldHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1Bvc2l0aW9ucyAmJiB0aGlzLl90ZXh0dXJlVmVydGV4U3RyaWRlKys7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzTm9ybWFscyAmJiB0aGlzLl90ZXh0dXJlVmVydGV4U3RyaWRlKys7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzVGFuZ2VudHMgJiYgdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSsrO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1VWcyAmJiB0aGlzLl90ZXh0dXJlVmVydGV4U3RyaWRlKys7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzVVYycyAmJiB0aGlzLl90ZXh0dXJlVmVydGV4U3RyaWRlKys7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzQ29sb3JzICYmIHRoaXMuX3RleHR1cmVWZXJ0ZXhTdHJpZGUrKztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVXaWR0aCA9IHRoaXMuX3ZlcnRleENvdW50ICogdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSB8fCAxO1xyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlSGVpZ2h0ID0gMTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1heFRleHR1cmVTaXplID0gZW5naW5lLmdldENhcHMoKS5tYXhUZXh0dXJlU2l6ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RleHR1cmVXaWR0aCA+IG1heFRleHR1cmVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0dXJlSGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuX3RleHR1cmVXaWR0aCAvIG1heFRleHR1cmVTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVXaWR0aCA9IG1heFRleHR1cmVTaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDb3VudCA9IHRoaXMuX3RhcmdldHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0YXJnZXRDb3VudCAqIHRoaXMuX3RleHR1cmVXaWR0aCAqIHRoaXMuX3RleHR1cmVIZWlnaHQgKiA0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFyZ2V0Q291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRhcmdldC5nZXRQb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbHMgPSB0YXJnZXQuZ2V0Tm9ybWFscygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXZzID0gdGFyZ2V0LmdldFVWcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFuZ2VudHMgPSB0YXJnZXQuZ2V0VGFuZ2VudHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHV2MnMgPSB0YXJnZXQuZ2V0VVYycygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzID0gdGFyZ2V0LmdldENvbG9ycygpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9mZnNldCA9IGluZGV4ICogdGhpcy5fdGV4dHVyZVdpZHRoICogdGhpcy5fdGV4dHVyZUhlaWdodCAqIDQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2ZXJ0ZXggPSAwOyB2ZXJ0ZXggPCB0aGlzLl92ZXJ0ZXhDb3VudDsgdmVydGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNQb3NpdGlvbnMgJiYgcG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IHBvc2l0aW9uc1t2ZXJ0ZXggKiAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyAxXSA9IHBvc2l0aW9uc1t2ZXJ0ZXggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMl0gPSBwb3NpdGlvbnNbdmVydGV4ICogMyArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdXBwb3J0c05vcm1hbHMgJiYgbm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSBub3JtYWxzW3ZlcnRleCAqIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDFdID0gbm9ybWFsc1t2ZXJ0ZXggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMl0gPSBub3JtYWxzW3ZlcnRleCAqIDMgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNVVnMgJiYgdXZzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IHV2c1t2ZXJ0ZXggKiAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyAxXSA9IHV2c1t2ZXJ0ZXggKiAyICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVGFuZ2VudHMgJiYgdGFuZ2VudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXRdID0gdGFuZ2VudHNbdmVydGV4ICogM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMV0gPSB0YW5nZW50c1t2ZXJ0ZXggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMl0gPSB0YW5nZW50c1t2ZXJ0ZXggKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVVYycyAmJiB1djJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IHV2MnNbdmVydGV4ICogMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMV0gPSB1djJzW3ZlcnRleCAqIDIgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNDb2xvcnMgJiYgY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IGNvbG9yc1t2ZXJ0ZXggKiA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyAxXSA9IGNvbG9yc1t2ZXJ0ZXggKiA0ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMl0gPSBjb2xvcnNbdmVydGV4ICogNCArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDNdID0gY29sb3JzW3ZlcnRleCAqIDQgKyAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmUgPSBSYXdUZXh0dXJlMkRBcnJheS5DcmVhdGVSR0JBVGV4dHVyZShcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0dXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0dXJlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Q291bnQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuVEVYVFVSRV9ORUFSRVNUX1NBTVBMSU5HTU9ERSxcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5URVhUVVJFVFlQRV9GTE9BVFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmUubmFtZSA9IGBNb3JwaCB0ZXh0dXJlXyR7dGhpcy51bmlxdWVJZH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRmxhZyBtZXNoZXMgYXMgZGlydHkgdG8gcmVzeW5jIHdpdGggdGhlIGFjdGl2ZSB0YXJnZXRzXHJcbiAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIHRoaXMuX3NjZW5lLm1lc2hlcykge1xyXG4gICAgICAgICAgICBpZiAoKDxhbnk+bWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAoPE1lc2g+bWVzaCkuX3N5bmNHZW9tZXRyeVdpdGhNb3JwaFRhcmdldE1hbmFnZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbGVhc2UgYWxsIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0U3RvcmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldFN0b3JlVGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBzY2VuZVxyXG4gICAgICAgIGlmICh0aGlzLl9zY2VuZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5yZW1vdmVNb3JwaFRhcmdldE1hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BhcmVudENvbnRhaW5lci5tb3JwaFRhcmdldE1hbmFnZXJzLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudENvbnRhaW5lci5tb3JwaFRhcmdldE1hbmFnZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnRDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vcnBoIG9mIHRoaXMuX3RhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLnN0b3BBbmltYXRpb24obW9ycGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXRpY3NcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgTW9ycGhUYXJnZXRNYW5hZ2VyIGZyb20gc2VyaWFsaXplZCBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCBkZWZpbmVzIHRoZSBzZXJpYWxpemVkIGRhdGFcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBob3N0aW5nIHNjZW5lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3IE1vcnBoVGFyZ2V0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBhcnNlKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSwgc2NlbmU6IFNjZW5lKTogTW9ycGhUYXJnZXRNYW5hZ2VyIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTW9ycGhUYXJnZXRNYW5hZ2VyKHNjZW5lKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXREYXRhIG9mIHNlcmlhbGl6YXRpb25PYmplY3QudGFyZ2V0cykge1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkVGFyZ2V0KE1vcnBoVGFyZ2V0LlBhcnNlKHRhcmdldERhdGEsIHNjZW5lKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBzZXJpYWxpemF0aW9uT2JqZWN0Lm1ldGFkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBnaXRodWIvbm8tdGhlbiAqL1xyXG5pbXBvcnQgdHlwZSB7IEluZGljZXNBcnJheSwgTnVsbGFibGUsIFR5cGVkQXJyYXksIFR5cGVkQXJyYXlDb25zdHJ1Y3RvciB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IERlZmVycmVkIH0gZnJvbSBcImNvcmUvTWlzYy9kZWZlcnJlZFwiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzLCBNYXRyaXgsIFRtcFZlY3RvcnMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBGcmVlQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9mcmVlQ2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uS2V5IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uS2V5SW50ZXJwb2xhdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uR3JvdXAgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkdyb3VwXCI7XHJcbmltcG9ydCB7IEJvbmUgfSBmcm9tIFwiY29yZS9Cb25lcy9ib25lXCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcImNvcmUvQm9uZXMvc2tlbGV0b25cIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElUZXh0dXJlQ3JlYXRpb25PcHRpb25zIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBCdWZmZXIsIFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSBcImNvcmUvTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHsgTW9ycGhUYXJnZXRNYW5hZ2VyIH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsIElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElQcm9wZXJ0eSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICAgIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24sXHJcbiAgICBBY2Nlc3NvclR5cGUsXHJcbiAgICBDYW1lcmFUeXBlLFxyXG4gICAgQWNjZXNzb3JDb21wb25lbnRUeXBlLFxyXG4gICAgTWF0ZXJpYWxBbHBoYU1vZGUsXHJcbiAgICBUZXh0dXJlTWluRmlsdGVyLFxyXG4gICAgVGV4dHVyZVdyYXBNb2RlLFxyXG4gICAgVGV4dHVyZU1hZ0ZpbHRlcixcclxuICAgIE1lc2hQcmltaXRpdmVNb2RlLFxyXG59IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUge1xyXG4gICAgSUdMVEYsXHJcbiAgICBJU2FtcGxlcixcclxuICAgIElOb2RlLFxyXG4gICAgSVNjZW5lLFxyXG4gICAgSU1lc2gsXHJcbiAgICBJQWNjZXNzb3IsXHJcbiAgICBJU2tpbixcclxuICAgIElDYW1lcmEsXHJcbiAgICBJQW5pbWF0aW9uLFxyXG4gICAgSUJ1ZmZlcixcclxuICAgIElCdWZmZXJWaWV3LFxyXG4gICAgSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICBJTWF0ZXJpYWwsXHJcbiAgICBJVGV4dHVyZUluZm8sXHJcbiAgICBJVGV4dHVyZSxcclxuICAgIElJbWFnZSxcclxuICAgIElNZXNoUHJpbWl0aXZlLFxyXG4gICAgSUFycmF5SXRlbSxcclxuICAgIF9JU2FtcGxlckRhdGEsXHJcbiAgICBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgIElBbmltYXRpb25TYW1wbGVyLFxyXG4gICAgX0lBbmltYXRpb25TYW1wbGVyRGF0YSxcclxufSBmcm9tIFwiLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyLCBJR0xURkxvYWRlckRhdGEgfSBmcm9tIFwiLi4vZ2xURkZpbGVMb2FkZXJcIjtcclxuaW1wb3J0IHsgR0xURkZpbGVMb2FkZXIsIEdMVEZMb2FkZXJTdGF0ZSwgR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlLCBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSURhdGFCdWZmZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RhdGFSZWFkZXJcIjtcclxuaW1wb3J0IHsgRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnksIEdldE1pbWVUeXBlLCBJc0Jhc2U2NERhdGFVcmwsIExvYWRGaWxlRXJyb3IgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB7IEJvdW5kaW5nSW5mbyB9IGZyb20gXCJjb3JlL0N1bGxpbmcvYm91bmRpbmdJbmZvXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvblByb3BlcnR5SW5mbyB9IGZyb20gXCIuL2dsVEZMb2FkZXJBbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJT2JqZWN0SW5mbyB9IGZyb20gXCJjb3JlL09iamVjdE1vZGVsL29iamVjdE1vZGVsSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyByZWdpc3RlcmVkR0xURkV4dGVuc2lvbnMsIHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuaW1wb3J0IHR5cGUgeyBHTFRGRXh0ZW5zaW9uRmFjdG9yeSB9IGZyb20gXCIuL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5pbXBvcnQgdHlwZSB7IElJbnRlcnBvbGF0aW9uUHJvcGVydHlJbmZvIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3R5cGVEZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRNYXBwaW5nRm9yS2V5IH0gZnJvbSBcIi4vRXh0ZW5zaW9ucy9vYmplY3RNb2RlbE1hcHBpbmdcIjtcclxuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSBcImNvcmUvTWlzYy9kZWVwTWVyZ2VyXCI7XHJcbmltcG9ydCB7IEdldFR5cGVkQXJyYXlDb25zdHJ1Y3RvciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyVXRpbHNcIjtcclxuaW1wb3J0IHsgTGF6eSB9IGZyb20gXCJjb3JlL01pc2MvbGF6eVwiO1xyXG5pbXBvcnQgdHlwZSB7IElNYXRlcmlhbExvYWRpbmdBZGFwdGVyIH0gZnJvbSBcIi4vbWF0ZXJpYWxMb2FkaW5nQWRhcHRlclwiO1xyXG5cclxuLy8gQ2FjaGluZyB0aGVzZSBkeW5hbWljIGltcG9ydHMgZ2l2ZXMgYSBzdXJwcmlzaW5nIHBlcmYgYm9vc3QgKGNvbXBhcmVkIHRvIGltcG9ydGluZyB0aGVtIGRpcmVjdGx5IGVhY2ggdGltZSkuXHJcbmNvbnN0IExhenlBbmltYXRpb25Hcm91cE1vZHVsZVByb21pc2UgPSBuZXcgTGF6eSgoKSA9PiBpbXBvcnQoXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uR3JvdXBcIikpO1xyXG5jb25zdCBMYXp5TG9hZGVyQW5pbWF0aW9uTW9kdWxlUHJvbWlzZSA9IG5ldyBMYXp5KCgpID0+IGltcG9ydChcIi4vZ2xURkxvYWRlckFuaW1hdGlvblwiKSk7XHJcblxyXG5leHBvcnQgeyBHTFRGRmlsZUxvYWRlciB9O1xyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJQcm9wZXJ0eSBleHRlbmRzIElQcm9wZXJ0eSB7XHJcbiAgICBfYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zOiB7XHJcbiAgICAgICAgW2lkOiBzdHJpbmddOiBib29sZWFuO1xyXG4gICAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElXaXRoTWV0YWRhdGEge1xyXG4gICAgbWV0YWRhdGE6IGFueTtcclxuICAgIF9pbnRlcm5hbE1ldGFkYXRhOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHdvcmtpbmcgd2l0aCBhcnJheXMgd2hlbiBsb2FkaW5nIHRoZSBnbFRGIGFzc2V0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXJyYXlJdGVtIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBpdGVtIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB0aGUgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIFRoZSBhcnJheSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0PFQ+KGNvbnRleHQ6IHN0cmluZywgYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCk6IFQge1xyXG4gICAgICAgIGlmICghYXJyYXkgfHwgaW5kZXggPT0gdW5kZWZpbmVkIHx8ICFhcnJheVtpbmRleF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBGYWlsZWQgdG8gZmluZCBpbmRleCAoJHtpbmRleH0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBpdGVtIGZyb20gdGhlIGdpdmVuIGFycmF5IG9yIHJldHVybnMgbnVsbCBpZiBub3QgYXZhaWxhYmxlLlxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byB0aGUgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIFRoZSBhcnJheSBpdGVtIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUcnlHZXQ8VD4oYXJyYXk6IEFycmF5TGlrZTxUPiB8IHVuZGVmaW5lZCwgaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCk6IE51bGxhYmxlPFQ+IHtcclxuICAgICAgICBpZiAoIWFycmF5IHx8IGluZGV4ID09IHVuZGVmaW5lZCB8fCAhYXJyYXlbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFzc2lnbiBhbiBgaW5kZXhgIGZpZWxkIHRvIGVhY2ggaXRlbSBvZiB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gYXJyYXkgVGhlIGFycmF5IG9mIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQXNzaWduKGFycmF5PzogSUFycmF5SXRlbVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2luZGV4XS5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblRhcmdldEluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgdGFyZ2V0OiB1bmtub3duO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHByb3BlcnRpZXM6IEFycmF5PEFuaW1hdGlvblByb3BlcnR5SW5mbz47XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRCb3VuZGluZ0luZm9Gcm9tUG9zaXRpb25BY2Nlc3NvcihhY2Nlc3NvcjogSUFjY2Vzc29yKTogTnVsbGFibGU8Qm91bmRpbmdJbmZvPiB7XHJcbiAgICBpZiAoYWNjZXNzb3IubWluICYmIGFjY2Vzc29yLm1heCkge1xyXG4gICAgICAgIGNvbnN0IG1pbkFycmF5ID0gYWNjZXNzb3IubWluIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgICAgICBjb25zdCBtYXhBcnJheSA9IGFjY2Vzc29yLm1heCBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcbiAgICAgICAgY29uc3QgbWluVmVjdG9yID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdLmNvcHlGcm9tRmxvYXRzKG1pbkFycmF5WzBdLCBtaW5BcnJheVsxXSwgbWluQXJyYXlbMl0pO1xyXG4gICAgICAgIGNvbnN0IG1heFZlY3RvciA9IFRtcFZlY3RvcnMuVmVjdG9yM1sxXS5jb3B5RnJvbUZsb2F0cyhtYXhBcnJheVswXSwgbWF4QXJyYXlbMV0sIG1heEFycmF5WzJdKTtcclxuICAgICAgICBpZiAoYWNjZXNzb3Iubm9ybWFsaXplZCAmJiBhY2Nlc3Nvci5jb21wb25lbnRUeXBlICE9PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQpIHtcclxuICAgICAgICAgICAgbGV0IGRpdmlkZXIgPSAxO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLkJZVEU6XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2aWRlciA9IDEyNy4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURTpcclxuICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gMjU1LjA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5TSE9SVDpcclxuICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gMzI3NjcuMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUOlxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlkZXIgPSA2NTUzNS4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG9uZU92ZXJEaXZpZGVyID0gMSAvIGRpdmlkZXI7XHJcbiAgICAgICAgICAgIG1pblZlY3Rvci5zY2FsZUluUGxhY2Uob25lT3ZlckRpdmlkZXIpO1xyXG4gICAgICAgICAgICBtYXhWZWN0b3Iuc2NhbGVJblBsYWNlKG9uZU92ZXJEaXZpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGluZ0luZm8obWluVmVjdG9yLCBtYXhWZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbnR5cGUgUEJSTWF0ZXJpYWxJbXBsZW1lbnRhdGlvbiA9IHtcclxuICAgIG1hdGVyaWFsQ2xhc3M6IHR5cGVvZiBNYXRlcmlhbDtcclxuICAgIGFkYXB0ZXJDbGFzczogbmV3IChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IElNYXRlcmlhbExvYWRpbmdBZGFwdGVyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBnbFRGIDIuMCBsb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTG9hZGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXIge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21wbGV0ZVByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9hc3NldENvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+ID0gbnVsbDtcclxuXHJcbiAgICAvKiogU3RvcmFnZSAqL1xyXG4gICAgcHVibGljIF9iYWJ5bG9uTGlnaHRzOiBMaWdodFtdID0gW107XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9kaXNhYmxlSW5zdGFuY2VkTWVzaCA9IDA7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9hbGxNYXRlcmlhbHNEaXJ0eVJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9za2lwU3RhcnRBbmltYXRpb25TdGVwID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGFyZW50OiBHTFRGRmlsZUxvYWRlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V4dGVuc2lvbnMgPSBuZXcgQXJyYXk8SUdMVEZMb2FkZXJFeHRlbnNpb24+KCk7XHJcbiAgICBwcml2YXRlIF9kaXNwb3NlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfcm9vdFVybDogTnVsbGFibGU8c3RyaW5nPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9maWxlTmFtZTogTnVsbGFibGU8c3RyaW5nPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF91bmlxdWVSb290VXJsOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2dsdGY6IElHTFRGO1xyXG4gICAgcHJpdmF0ZSBfYmluOiBOdWxsYWJsZTxJRGF0YUJ1ZmZlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYmFieWxvblNjZW5lOiBTY2VuZTtcclxuICAgIHByaXZhdGUgX3Jvb3RCYWJ5bG9uTWVzaDogTnVsbGFibGU8VHJhbnNmb3JtTm9kZT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdEJhYnlsb25NYXRlcmlhbERhdGE6IHsgW2RyYXdNb2RlOiBudW1iZXJdOiBNYXRlcmlhbCB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wb3N0U2NlbmVMb2FkQWN0aW9ucyA9IG5ldyBBcnJheTwoKSA9PiB2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF0ZXJpYWxBZGFwdGVyQ2FjaGUgPSBuZXcgV2Vha01hcDxNYXRlcmlhbCwgSU1hdGVyaWFsTG9hZGluZ0FkYXB0ZXI+KCk7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9wYnJNYXRlcmlhbEltcGw6IE51bGxhYmxlPFJlYWRvbmx5PFBCUk1hdGVyaWFsSW1wbGVtZW50YXRpb24+PiB8IGZhbHNlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkZWZhdWx0IGdsVEYgc2FtcGxlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2FtcGxlcjogSVNhbXBsZXIgPSB7IGluZGV4OiAtMSB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBsb2FkZXIgZXh0ZW5zaW9uLlxyXG4gICAgICogQHBhcmFtIGZhY3RvcnkgVGhlIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZSBsb2FkZXIgZXh0ZW5zaW9uLlxyXG4gICAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSByZWdpc3RlckdMVEZFeHRlbnNpb24gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEdMVEZFeHRlbnNpb25GYWN0b3J5KTogdm9pZCB7XHJcbiAgICAgICAgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKG5hbWUsIGZhbHNlLCBmYWN0b3J5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXJzIGEgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBsb2FkZXIgZXh0ZW5zaW9uLlxyXG4gICAgICogQHJldHVybnMgQSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgZXh0ZW5zaW9uIGhhcyBiZWVuIHVucmVnaXN0ZXJlZFxyXG4gICAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiBpbnN0ZWFkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVucmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGdsVEYgSlNPTi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBnbHRmKCk6IElHTFRGIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2dsdGYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2xURiBKU09OIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2x0ZjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBCSU4gY2h1bmsgb2YgYSBiaW5hcnkgZ2xURi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiaW4oKTogTnVsbGFibGU8SURhdGFCdWZmZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhcmVudCBmaWxlIGxvYWRlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwYXJlbnQoKTogR0xURkZpbGVMb2FkZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQmFieWxvbiBzY2VuZSB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGJhYnlsb25TY2VuZSgpOiBTY2VuZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NlbmUgaXMgbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWJ5bG9uU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcm9vdCBCYWJ5bG9uIG5vZGUgd2hlbiBsb2FkaW5nIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByb290QmFieWxvbk1lc2goKTogTnVsbGFibGU8VHJhbnNmb3JtTm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290QmFieWxvbk1lc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcm9vdCB1cmwgd2hlbiBsb2FkaW5nIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCByb290VXJsKCk6IE51bGxhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290VXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogR0xURkZpbGVMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIG9yIGdldHMgYSBjYWNoZWQgbWF0ZXJpYWwgbG9hZGluZyBhZGFwdGVyIHdpdGggZHluYW1pYyBpbXBvcnRzXHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIG1hdGVyaWFsIHRvIGFkYXB0XHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGFwcHJvcHJpYXRlIGFkYXB0ZXJcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKG1hdGVyaWFsOiBNYXRlcmlhbCk6IElNYXRlcmlhbExvYWRpbmdBZGFwdGVyIHtcclxuICAgICAgICBsZXQgYWRhcHRlciA9IHRoaXMuX21hdGVyaWFsQWRhcHRlckNhY2hlLmdldChtYXRlcmlhbCk7XHJcbiAgICAgICAgaWYgKCFhZGFwdGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYnJNYXRlcmlhbEltcGwpIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBuZXcgdGhpcy5fcGJyTWF0ZXJpYWxJbXBsLmFkYXB0ZXJDbGFzcyhtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFwcHJvcHJpYXRlIG1hdGVyaWFsIGFkYXB0ZXIgY2xhc3Mgbm90IGZvdW5kYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxBZGFwdGVyQ2FjaGUuc2V0KG1hdGVyaWFsLCBhZGFwdGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVQcm9taXNlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zLmZvckVhY2goKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmRpc3Bvc2UgJiYgZXh0ZW5zaW9uLmRpc3Bvc2UoKSk7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAodGhpcy5fZ2x0ZiBhcyBOdWxsYWJsZTxJR0xURj4pID0gbnVsbDsgLy8gVE9ET1xyXG4gICAgICAgIHRoaXMuX2JpbiA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMuX2JhYnlsb25TY2VuZSBhcyBOdWxsYWJsZTxTY2VuZT4pID0gbnVsbDsgLy8gVE9ET1xyXG4gICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEJhYnlsb25NYXRlcmlhbERhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLl9wb3N0U2NlbmVMb2FkQWN0aW9ucy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9wYXJlbnQuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBpbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgY29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lID0gXCJcIlxyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkRGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj4gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTWFwOiB7IFtuYW1lOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5fZ2x0Zi5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwW25vZGUubmFtZV0gPSBub2RlLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gbWVzaGVzTmFtZXMgaW5zdGFuY2VvZiBBcnJheSA/IG1lc2hlc05hbWVzIDogW21lc2hlc05hbWVzXTtcclxuICAgICAgICAgICAgICAgIG5vZGVzID0gbmFtZXMubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVNYXBbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmaW5kIG5vZGUgJyR7bmFtZX0nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fbG9hZEFzeW5jKHJvb3RVcmwsIGZpbGVOYW1lLCBub2RlcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoZXM6IHRoaXMuX2dldE1lc2hlcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2tlbGV0b25zOiB0aGlzLl9nZXRTa2VsZXRvbnMoKSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHM6IHRoaXMuX2dldEFuaW1hdGlvbkdyb3VwcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0czogdGhpcy5fYmFieWxvbkxpZ2h0cyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogdGhpcy5fZ2V0VHJhbnNmb3JtTm9kZXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyaWVzOiB0aGlzLl9nZXRHZW9tZXRyaWVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlTWFuYWdlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGxvYWRBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZSA9IFwiXCIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLl9sb2FkRGF0YShkYXRhKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fbG9hZEFzeW5jKHJvb3RVcmwsIGZpbGVOYW1lLCBudWxsLCAoKSA9PiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2xvYWRBc3luYzxUPihyb290VXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5vZGVzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PiwgcmVzdWx0RnVuYzogKCkgPT4gVCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290VXJsID0gcm9vdFVybDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VuaXF1ZVJvb3RVcmwgPSAhcm9vdFVybC5zdGFydHNXaXRoKFwiZmlsZTpcIikgJiYgZmlsZU5hbWUgPyByb290VXJsIDogYCR7cm9vdFVybH0ke0RhdGUubm93KCl9L2A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2xvYWRFeHRlbnNpb25zQXN5bmMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBFeHBsaWNpdGx5IGNoZWNrIF9wYnJNYXRlcmlhbEltcGwgZm9yIG51bGwgYXMgYSB2YWx1ZSBvZiBmYWxzZSBtZWFucyBkb24ndCB1c2UgUEJSIG1hdGVyaWFscyBhdCBhbGwuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50LnNraXBNYXRlcmlhbHMgJiYgdGhpcy5fcGJyTWF0ZXJpYWxJbXBsID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQudXNlT3BlblBCUiB8fCB0aGlzLmlzRXh0ZW5zaW9uVXNlZChcIktIUl9tYXRlcmlhbHNfb3BlbnBiclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYnJNYXRlcmlhbEltcGwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbENsYXNzOiAoYXdhaXQgaW1wb3J0KFwiY29yZS9NYXRlcmlhbHMvUEJSL29wZW5wYnJNYXRlcmlhbFwiKSkuT3BlblBCUk1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRlckNsYXNzOiAoYXdhaXQgaW1wb3J0KFwiLi9vcGVucGJyTWF0ZXJpYWxMb2FkaW5nQWRhcHRlclwiKSkuT3BlblBCUk1hdGVyaWFsTG9hZGluZ0FkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGJyTWF0ZXJpYWxJbXBsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxDbGFzczogKGF3YWl0IGltcG9ydChcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiKSkuUEJSTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyQ2xhc3M6IChhd2FpdCBpbXBvcnQoXCIuL3Bick1hdGVyaWFsTG9hZGluZ0FkYXB0ZXJcIikpLlBCUk1hdGVyaWFsTG9hZGluZ0FkYXB0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUgPSBgJHtHTFRGTG9hZGVyU3RhdGVbR0xURkxvYWRlclN0YXRlLkxPQURJTkddfSA9PiAke0dMVEZMb2FkZXJTdGF0ZVtHTFRGTG9hZGVyU3RhdGUuUkVBRFldfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nVG9Db21wbGV0ZUNvdW50ZXJOYW1lID0gYCR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5MT0FESU5HXX0gPT4gJHtHTFRGTG9hZGVyU3RhdGVbR0xURkxvYWRlclN0YXRlLkNPTVBMRVRFXX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIobG9hZGluZ1RvUmVhZHlDb3VudGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb0NvbXBsZXRlQ291bnRlck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fc2V0U3RhdGUoR0xURkxvYWRlclN0YXRlLkxPQURJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uTG9hZGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmxvY2sgdGhlIG1hcmtpbmcgb2YgbWF0ZXJpYWxzIGRpcnR5IHVudGlsIHRoZSBzY2VuZSBpcyBsb2FkZWQuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20gPSB0aGlzLl9iYWJ5bG9uU2NlbmUuYmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudC5sb2FkT25seU1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjZW5lQXN5bmMoXCIvbm9kZXNcIiwgeyBub2Rlczogbm9kZXMsIGluZGV4OiAtMSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9nbHRmLnNjZW5lICE9IHVuZGVmaW5lZCB8fCAodGhpcy5fZ2x0Zi5zY2VuZXMgJiYgdGhpcy5fZ2x0Zi5zY2VuZXNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gQXJyYXlJdGVtLkdldChgL3NjZW5lYCwgdGhpcy5fZ2x0Zi5zY2VuZXMsIHRoaXMuX2dsdGYuc2NlbmUgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NlbmVBc3luYyhgL3NjZW5lcy8ke3NjZW5lLmluZGV4fWAsIHNjZW5lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQuc2tpcE1hdGVyaWFscyAmJiB0aGlzLnBhcmVudC5sb2FkQWxsTWF0ZXJpYWxzICYmIHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB0aGlzLl9nbHRmLm1hdGVyaWFscy5sZW5ndGg7ICsrbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMuX2dsdGYubWF0ZXJpYWxzW21dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gXCIvbWF0ZXJpYWxzL1wiICsgbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkRyYXdNb2RlID0gTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIG51bGwsIGJhYnlsb25EcmF3TW9kZSwgKCkgPT4ge30pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgYmxvY2tpbmcgb2YgbWF0ZXJpYWwgZGlydHkuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB3ZSBhZGQgYSBsaWdodCBmb3IgaW5zdGFuY2UgYXMgaXQgd2lsbCBpbXBhY3QgdGhlIHdob2xlIHNjZW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgYXV0b21hdGljYWxseSByZXNldHMgZXZlcnl0aGluZyBpZiBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSA9IG9sZEJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCBhIG5ld2x5IGNyZWF0ZWQgbWF0ZXJpYWwgaXMgZGlydHkgc28gdGhlcmUgaXMgbm8gbmVlZCB0byBmbGFnIHRoZSBmdWxsIHNjZW5lIGFzIGRpcnR5LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBwZXJmIHJlYXNvbnMsIHdlIHRoZW4gYnlwYXNzIGJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSBhcyB0aGlzIHdvdWxkIFwiZGlydHlcIiB0aGUgZW50aXJlIHNjZW5lLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fZm9yY2VCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20ob2xkQmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LmNvbXBpbGVNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2NvbXBpbGVNYXRlcmlhbHNBc3luYygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9jb21waWxlU2hhZG93R2VuZXJhdG9yc0FzeW5jKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCAmJiB0aGlzLl9yb290QmFieWxvbk1lc2ggIT09IHRoaXMuX3BhcmVudC5jdXN0b21Sb290Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2guc2V0RW5hYmxlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2luZyBzdXJlIHdlIGVuYWJsZSBlbm91Z2ggbGlnaHRzIHRvIGhhdmUgYWxsIGxpZ2h0cyB0b2dldGhlclxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgdGhpcy5fYmFieWxvblNjZW5lLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBtYXRlcmlhbCBhcyBhbnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Lm1heFNpbXVsdGFuZW91c0xpZ2h0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXQubWF4U2ltdWx0YW5lb3VzTGlnaHRzID0gTWF0aC5tYXgobWF0Lm1heFNpbXVsdGFuZW91c0xpZ2h0cywgdGhpcy5fYmFieWxvblNjZW5lLmxpZ2h0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHRlbnNpb25zT25SZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fc2V0U3RhdGUoR0xURkxvYWRlclN0YXRlLlJFQURZKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NraXBTdGFydEFuaW1hdGlvblN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0RnVuYygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3VsdFByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIobG9hZGluZ1RvUmVhZHlDb3VudGVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLlNldEltbWVkaWF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMuX2NvbXBsZXRlUHJvbWlzZXMpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihsb2FkaW5nVG9Db21wbGV0ZUNvdW50ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fc2V0U3RhdGUoR0xURkxvYWRlclN0YXRlLkNPTVBMRVRFKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uQ29tcGxldGVPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXJyb3JPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkVycm9yT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkVycm9yT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZERhdGEoZGF0YTogSUdMVEZMb2FkZXJEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZ2x0ZiA9IGRhdGEuanNvbiBhcyBJR0xURjtcclxuICAgICAgICB0aGlzLl9zZXR1cERhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuYmluKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSB0aGlzLl9nbHRmLmJ1ZmZlcnM7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXJzICYmIGJ1ZmZlcnNbMF0gJiYgIWJ1ZmZlcnNbMF0udXJpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBidWZmZXJzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoIDwgZGF0YS5iaW4uYnl0ZUxlbmd0aCAtIDMgfHwgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggPiBkYXRhLmJpbi5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYEJpbmFyeSBidWZmZXIgbGVuZ3RoICgke2JpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RofSkgZnJvbSBKU09OIGRvZXMgbm90IG1hdGNoIGNodW5rIGxlbmd0aCAoJHtkYXRhLmJpbi5ieXRlTGVuZ3RofSlgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW4gPSBkYXRhLmJpbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiVW5leHBlY3RlZCBCSU4gY2h1bmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0dXBEYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5hY2Nlc3NvcnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5hbmltYXRpb25zKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYnVmZmVycyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuY2FtZXJhcyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmltYWdlcyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLm1hdGVyaWFscyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLm1lc2hlcyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLm5vZGVzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2FtcGxlcnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5zY2VuZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5za2lucyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLnRleHR1cmVzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZVBhcmVudHM6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5fZ2x0Zi5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVBhcmVudHNbaW5kZXhdID0gbm9kZS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3ROb2RlID0gdGhpcy5fY3JlYXRlUm9vdE5vZGUoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gbm9kZVBhcmVudHNbbm9kZS5pbmRleF07XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudEluZGV4ID09PSB1bmRlZmluZWQgPyByb290Tm9kZSA6IHRoaXMuX2dsdGYubm9kZXNbcGFyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2xvYWRFeHRlbnNpb25zQXN5bmMoKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZXM6IFByb21pc2U8SUdMVEZMb2FkZXJFeHRlbnNpb24+W10gPSBbXTtcclxuXHJcbiAgICAgICAgcmVnaXN0ZXJlZEdMVEZFeHRlbnNpb25zLmZvckVhY2goKHJlZ2lzdGVyZWRFeHRlbnNpb24sIG5hbWUpID0+IHtcclxuICAgICAgICAgICAgLy8gRG9uJ3QgbG9hZCBleHBsaWNpdGx5IGRpc2FibGVkIGV4dGVuc2lvbnMuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5leHRlbnNpb25PcHRpb25zW25hbWVdPy5lbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdhcm4gaWYgdGhlIGRpc2FibGVkIGV4dGVuc2lvbiBpcyB1c2VkIGJ5IHRoZSBtb2RlbC5cclxuICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkRXh0ZW5zaW9uLmlzR0xURkV4dGVuc2lvbiAmJiB0aGlzLmlzRXh0ZW5zaW9uVXNlZChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBFeHRlbnNpb24gJHtuYW1lfSBpcyB1c2VkIGJ1dCBoYXMgYmVlbiBleHBsaWNpdGx5IGRpc2FibGVkLmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIExvYWQgbG9hZGVyIGV4dGVuc2lvbnMgdGhhdCBhcmUgbm90IGEgZ2xURiBleHRlbnNpb24sIGFzIHdlbGwgYXMgZXh0ZW5zaW9ucyB0aGF0IGFyZSBnbFRGIGV4dGVuc2lvbnMgYW5kIGFyZSB1c2VkIGJ5IHRoZSBtb2RlbC5cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXJlZ2lzdGVyZWRFeHRlbnNpb24uaXNHTFRGRXh0ZW5zaW9uIHx8IHRoaXMuaXNFeHRlbnNpb25Vc2VkKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb25Qcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGF3YWl0IHJlZ2lzdGVyZWRFeHRlbnNpb24uZmFjdG9yeSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5uYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgVGhlIG5hbWUgb2YgdGhlIGdsVEYgbG9hZGVyIGV4dGVuc2lvbiBpbnN0YW5jZSBkb2VzIG5vdCBtYXRjaCB0aGUgcmVnaXN0ZXJlZCBuYW1lOiAke2V4dGVuc2lvbi5uYW1lfSAhPT0gJHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhleHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5wdXNoKC4uLihhd2FpdCBQcm9taXNlLmFsbChleHRlbnNpb25Qcm9taXNlcykpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5zb3J0KChhLCBiKSA9PiAoYS5vcmRlciB8fCBOdW1iZXIuTUFYX1ZBTFVFKSAtIChiLm9yZGVyIHx8IE51bWJlci5NQVhfVkFMVUUpKTtcclxuICAgICAgICB0aGlzLl9wYXJlbnQub25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9nbHRmLmV4dGVuc2lvbnNSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy5fZ2x0Zi5leHRlbnNpb25zUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHRoaXMuX2V4dGVuc2lvbnMuc29tZSgoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubmFtZSA9PT0gbmFtZSAmJiBleHRlbnNpb24uZW5hYmxlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5leHRlbnNpb25PcHRpb25zW25hbWVdPy5lbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmVkIGV4dGVuc2lvbiAke25hbWV9IGlzIGRpc2FibGVkYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWlyZWQgZXh0ZW5zaW9uICR7bmFtZX0gaXMgbm90IGF2YWlsYWJsZWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVJvb3ROb2RlKCk6IElOb2RlIHtcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50LmN1c3RvbVJvb3ROb2RlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoID0gdGhpcy5fcGFyZW50LmN1c3RvbVJvb3ROb2RlO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgICAgICAgICAgX2JhYnlsb25UcmFuc2Zvcm1Ob2RlOiB0aGlzLl9yb290QmFieWxvbk1lc2ggPT09IG51bGwgPyB1bmRlZmluZWQgOiB0aGlzLl9yb290QmFieWxvbk1lc2gsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCByb290TWVzaCA9IG5ldyBNZXNoKFwiX19yb290X19cIiwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2ggPSByb290TWVzaDtcclxuICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2guX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoLnNldEVuYWJsZWQoZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZTogSU5vZGUgPSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICAgICAgX2JhYnlsb25UcmFuc2Zvcm1Ob2RlOiB0aGlzLl9yb290QmFieWxvbk1lc2gsXHJcbiAgICAgICAgICAgIGluZGV4OiAtMSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3BhcmVudC5jb29yZGluYXRlU3lzdGVtTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZS5BVVRPOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLnJvdGF0aW9uID0gWzAsIDEsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLnNjYWxlID0gWzEsIDEsIC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBHTFRGTG9hZGVyLl9Mb2FkVHJhbnNmb3JtKHJvb3ROb2RlLCB0aGlzLl9yb290QmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUuRk9SQ0VfUklHSFRfSEFOREVEOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUgKCR7dGhpcy5fcGFyZW50LmNvb3JkaW5hdGVTeXN0ZW1Nb2RlfSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWVzaExvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHJvb3RNZXNoKTtcclxuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgc2NlbmUuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIGdsVEYgc2NlbmUgcHJvcGVydHlcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gICAgcHVibGljIGxvYWRTY2VuZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2NlbmU6IElTY2VuZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7c2NlbmUubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBzY2VuZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vbm9kZXMvJHtpbmRleH1gLCB0aGlzLl9nbHRmLm5vZGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7bm9kZS5pbmRleH1gLCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gucGFyZW50ID0gdGhpcy5fcm9vdEJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiB0aGlzLl9wb3N0U2NlbmVMb2FkQWN0aW9ucykge1xyXG4gICAgICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEFuaW1hdGlvbnNBc3luYygpKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZvckVhY2hQcmltaXRpdmUobm9kZTogSU5vZGUsIGNhbGxiYWNrOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2Ygbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEdlb21ldHJpZXMoKTogR2VvbWV0cnlbXSB7XHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cmllczogR2VvbWV0cnlbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMuX2dsdGYubm9kZXM7XHJcbiAgICAgICAgaWYgKG5vZGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yRWFjaFByaW1pdGl2ZShub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IChiYWJ5bG9uTWVzaCBhcyBNZXNoKS5nZW9tZXRyeTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvbWV0cnkgJiYgZ2VvbWV0cmllcy5pbmRleE9mKGdlb21ldHJ5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdlb21ldHJpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TWVzaGVzKCk6IEFic3RyYWN0TWVzaFtdIHtcclxuICAgICAgICBjb25zdCBtZXNoZXM6IEFic3RyYWN0TWVzaFtdID0gW107XHJcblxyXG4gICAgICAgIC8vIFJvb3QgbWVzaCBpcyBhbHdheXMgZmlyc3QsIGlmIGF2YWlsYWJsZS5cclxuICAgICAgICBpZiAodGhpcy5fcm9vdEJhYnlsb25NZXNoIGluc3RhbmNlb2YgQWJzdHJhY3RNZXNoKSB7XHJcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMuX2dsdGYubm9kZXM7XHJcbiAgICAgICAgaWYgKG5vZGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yRWFjaFByaW1pdGl2ZShub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc2hlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUcmFuc2Zvcm1Ob2RlcygpOiBUcmFuc2Zvcm1Ob2RlW10ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGVzOiBUcmFuc2Zvcm1Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSAmJiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRDbGFzc05hbWUoKSA9PT0gXCJUcmFuc2Zvcm1Ob2RlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2Rlcy5wdXNoKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2Rlcy5wdXNoKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Ob2RlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTa2VsZXRvbnMoKTogU2tlbGV0b25bXSB7XHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b25zOiBTa2VsZXRvbltdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHNraW5zID0gdGhpcy5fZ2x0Zi5za2lucztcclxuICAgICAgICBpZiAoc2tpbnMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBza2luIG9mIHNraW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2tpbi5fZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNrZWxldG9ucy5wdXNoKHNraW4uX2RhdGEuYmFieWxvblNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNrZWxldG9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRBbmltYXRpb25Hcm91cHMoKTogQW5pbWF0aW9uR3JvdXBbXSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBzOiBBbmltYXRpb25Hcm91cFtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSB0aGlzLl9nbHRmLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzLnB1c2goYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0QW5pbWF0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3BhcmVudC5hbmltYXRpb25TdGFydE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlLk5PTkU6IHtcclxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5GSVJTVDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkdyb3VwcyA9IHRoaXMuX2dldEFuaW1hdGlvbkdyb3VwcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25BbmltYXRpb25Hcm91cHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3Vwc1swXS5zdGFydCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5BTEw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cHMgPSB0aGlzLl9nZXRBbmltYXRpb25Hcm91cHMoKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbkFuaW1hdGlvbkdyb3VwIG9mIGJhYnlsb25BbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAuc3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoYEludmFsaWQgYW5pbWF0aW9uIHN0YXJ0IG1vZGUgKCR7dGhpcy5fcGFyZW50LmFuaW1hdGlvblN0YXJ0TW9kZX0pYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgbm9kZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBub2RlIFRoZSBnbFRGIG5vZGUgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBhc3NpZ24gQSBmdW5jdGlvbiBjYWxsZWQgc3luY2hyb25vdXNseSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXNcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBCYWJ5bG9uIG1lc2ggd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCA9ICgpID0+IHt9KTogUHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkTm9kZUFzeW5jKGNvbnRleHQsIG5vZGUsIGFzc2lnbik7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBJbnZhbGlkIHJlY3Vyc2l2ZSBub2RlIGhpZXJhcmNoeWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7bm9kZS5uYW1lIHx8IFwiXCJ9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWROb2RlID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgR0xURkxvYWRlci5fTG9hZFRyYW5zZm9ybShub2RlLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5jYW1lcmEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2NhbWVyYWAsIHRoaXMuX2dsdGYuY2FtZXJhcywgbm9kZS5jYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDYW1lcmFBc3luYyhgL2NhbWVyYXMvJHtjYW1lcmEuaW5kZXh9YCwgY2FtZXJhLCAoYmFieWxvbkNhbWVyYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLnBhcmVudCA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy54ID0gLTE7IC8vIENhbmNlbGxpbmcgcm9vdCBub2RlIHNjYWxpbmcgZm9yIGhhbmRlZG5lc3Mgc28gdGhlIHZpZXcgbWF0cml4IGRvZXMgbm90IGVuZCB1cCBmbGlwcGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2NoaWxkcmVuLyR7aW5kZXh9YCwgdGhpcy5fZ2x0Zi5ub2RlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5vZGVBc3luYyhgL25vZGVzLyR7Y2hpbGROb2RlLmluZGV4fWAsIGNoaWxkTm9kZSwgKGNoaWxkQmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQmFieWxvbk1lc2gucGFyZW50ID0gYmFieWxvblRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXNzaWduKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoYXNNZXNoID0gbm9kZS5tZXNoICE9IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBoYXNTa2luID0gdGhpcy5fcGFyZW50LmxvYWRTa2lucyAmJiBub2RlLnNraW4gIT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoIWhhc01lc2ggfHwgaGFzU2tpbikge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlTmFtZSA9IG5vZGUubmFtZSB8fCBgbm9kZSR7bm9kZS5pbmRleH1gO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBuZXcgVHJhbnNmb3JtTm9kZShub2RlTmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtTm9kZS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChub2RlLm1lc2ggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSA9IHRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4gPSB0cmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvYWROb2RlKHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc01lc2gpIHtcclxuICAgICAgICAgICAgaWYgKGhhc1NraW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnMgKHNlY29uZCBpbXBsZW1lbnRhdGlvbiBub3RlKVxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjb2RlIHBhdGggd2lsbCBwbGFjZSB0aGUgc2tpbm5lZCBtZXNoIGFzIGEgc2libGluZyBvZiB0aGUgc2tlbGV0b24gcm9vdCBub2RlIHdpdGhvdXQgbG9hZGluZyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybSwgd2hpY2ggZWZmZWN0aXZlbHkgaWdub3JlcyB0aGUgdHJhbnNmb3JtIG9mIHRoZSBza2lubmVkIG1lc2gsIGFzIHBlciBzcGVjLlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L21lc2hgLCB0aGlzLl9nbHRmLm1lc2hlcywgbm9kZS5tZXNoKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZE1lc2hBc3luYyhgL21lc2hlcy8ke21lc2guaW5kZXh9YCwgbm9kZSwgbWVzaCwgKGJhYnlsb25UcmFuc2Zvcm1Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbiA9IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbiE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSB0aGUgbWV0YWRhdGEgZnJvbSB0aGUgc2tpbiBub2RlIHRvIHRoZSBza2lubmVkIG1lc2ggaW4gY2FzZSBhIGxvYWRlciBleHRlbnNpb24gYWRkZWQgbWV0YWRhdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLm1ldGFkYXRhID0gZGVlcE1lcmdlKGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbi5tZXRhZGF0YSwgYmFieWxvblRyYW5zZm9ybU5vZGUubWV0YWRhdGEgfHwge30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbiA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2tpbmAsIHRoaXMuX2dsdGYuc2tpbnMsIG5vZGUuc2tpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU2tpbkFzeW5jKGAvc2tpbnMvJHtza2luLmluZGV4fWAsIG5vZGUsIHNraW4sIChiYWJ5bG9uU2tlbGV0b24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JFYWNoUHJpbWl0aXZlKG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5za2VsZXRvbiA9IGJhYnlsb25Ta2VsZXRvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCB1bnRpbCBhbGwgdGhlIG5vZGVzIGFyZSBwYXJlbnRlZCBiZWZvcmUgcGFyZW50aW5nIHRoZSBza2lubmVkIG1lc2guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChza2luLnNrZWxldG9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxhY2UgdGhlIHNraW5uZWQgbWVzaCBub2RlIGFzIGEgc2libGluZyBvZiB0aGUgc2tlbGV0b24gcm9vdCBub2RlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIHRoZSBwYXJlbnQgb2YgdGhlIHNrZWxldG9uIHJvb3QgaXMgdGhlIHNraW5uZWQgbWVzaC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBBcnJheUl0ZW0uR2V0KGAvc2tpbnMvJHtza2luLmluZGV4fS9za2VsZXRvbmAsIHRoaXMuX2dsdGYubm9kZXMsIHNraW4uc2tlbGV0b24pLnBhcmVudCE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pbmRleCA9PT0gcGFyZW50Tm9kZS5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBhcmVudCA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbi5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBhcmVudCA9IHBhcmVudE5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBhcmVudCA9IHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uU2tpbkxvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHsgbm9kZTogYmFieWxvblRyYW5zZm9ybU5vZGVGb3JTa2luLCBza2lubmVkTm9kZTogYmFieWxvblRyYW5zZm9ybU5vZGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaCA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vbWVzaGAsIHRoaXMuX2dsdGYubWVzaGVzLCBub2RlLm1lc2gpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkTWVzaEFzeW5jKGAvbWVzaGVzLyR7bWVzaC5pbmRleH1gLCBub2RlLCBtZXNoLCBsb2FkTm9kZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc01lc2ggPSBiYWJ5bG9uTWVzaCBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhc01lc2guaXNBbkluc3RhbmNlICYmIGFzTWVzaC5nZW9tZXRyeSAmJiBhc01lc2guZ2VvbWV0cnkudXNlQm91bmRpbmdJbmZvRnJvbUdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2ltcGx5IGFwcGx5IHRoZSB3b3JsZCBtYXRyaWNlcyB0byB0aGUgYm91bmRpbmcgaW5mbyAtIHRoZSBleHRlbmRzIGFyZSBhbHJlYWR5IG9rXHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2guX3VwZGF0ZUJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5yZWZyZXNoQm91bmRpbmdJbmZvKHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZE1lc2hBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBtZXNoOiBJTWVzaCwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBQcm9taXNlPFRyYW5zZm9ybU5vZGU+IHtcclxuICAgICAgICBjb25zdCBwcmltaXRpdmVzID0gbWVzaC5wcmltaXRpdmVzO1xyXG4gICAgICAgIGlmICghcHJpbWl0aXZlcyB8fCAhcHJpbWl0aXZlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBQcmltaXRpdmVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpbWl0aXZlc1swXS5pbmRleCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbihwcmltaXRpdmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke21lc2gubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lIHx8IGBub2RlJHtub2RlLmluZGV4fWA7XHJcblxyXG4gICAgICAgIGlmIChwcmltaXRpdmVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBtZXNoLnByaW1pdGl2ZXNbMF07XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGAke2NvbnRleHR9L3ByaW1pdGl2ZXMvJHtwcmltaXRpdmUuaW5kZXh9YCwgbmFtZSwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSA9IGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMgPSBbYmFieWxvbk1lc2hdO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlID0gbmV3IFRyYW5zZm9ybU5vZGUobmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJpbWl0aXZlIG9mIHByaW1pdGl2ZXMpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyhgJHtjb250ZXh0fS9wcmltaXRpdmVzLyR7cHJpbWl0aXZlLmluZGV4fWAsIGAke25hbWV9X3ByaW1pdGl2ZSR7cHJpbWl0aXZlLmluZGV4fWAsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLnBhcmVudCA9IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyEucHVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzc2lnbihub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSEpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWwgRGVmaW5lIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIGxvYWRpbmcgZGF0YSBmb3IgbWVzaCBwcmltaXRpdmVzLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG1lc2ggbmFtZSB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSBUaGUgZ2xURiBub2RlIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtZXNoIFRoZSBnbFRGIG1lc2ggd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHByaW1pdGl2ZSBUaGUgZ2xURiBtZXNoIHByaW1pdGl2ZSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGFzc2lnbiBBIGZ1bmN0aW9uIGNhbGxlZCBzeW5jaHJvbm91c2x5IGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIG1lc2ggd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZSBvciBudWxsIGlmIG5vdCBoYW5kbGVkXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBfbG9hZE1lc2hQcmltaXRpdmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IElOb2RlLFxyXG4gICAgICAgIG1lc2g6IElNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZFxyXG4gICAgKTogUHJvbWlzZTxBYnN0cmFjdE1lc2g+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoY29udGV4dCwgbmFtZSwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3VsZEluc3RhbmNlID0gdGhpcy5fZGlzYWJsZUluc3RhbmNlZE1lc2ggPT09IDAgJiYgdGhpcy5fcGFyZW50LmNyZWF0ZUluc3RhbmNlcyAmJiBub2RlLnNraW4gPT0gdW5kZWZpbmVkICYmICFtZXNoLnByaW1pdGl2ZXNbMF0udGFyZ2V0cztcclxuXHJcbiAgICAgICAgbGV0IGJhYnlsb25BYnN0cmFjdE1lc2g6IEFic3RyYWN0TWVzaDtcclxuICAgICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTx1bmtub3duPjtcclxuXHJcbiAgICAgICAgaWYgKHNob3VsZEluc3RhbmNlICYmIHByaW1pdGl2ZS5faW5zdGFuY2VEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgYmFieWxvbkFic3RyYWN0TWVzaCA9IHByaW1pdGl2ZS5faW5zdGFuY2VEYXRhLmJhYnlsb25Tb3VyY2VNZXNoLmNyZWF0ZUluc3RhbmNlKG5hbWUpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uQWJzdHJhY3RNZXNoLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHByaW1pdGl2ZS5faW5zdGFuY2VEYXRhLnByb21pc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBuZXcgTWVzaChuYW1lLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLnNpZGVPcmllbnRhdGlvbiA9IHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSA/IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb24gOiBNYXRlcmlhbC5DbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVNb3JwaFRhcmdldHMoY29udGV4dCwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCBiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVmVydGV4RGF0YUFzeW5jKGNvbnRleHQsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gpLnRoZW4oYXN5bmMgKGJhYnlsb25HZW9tZXRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2FkTW9ycGhUYXJnZXRzQXN5bmMoY29udGV4dCwgcHJpbWl0aXZlLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkdlb21ldHJ5KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5LmFwcGx5VG9NZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5Ll9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50LnNraXBNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25EcmF3TW9kZSA9IEdMVEZMb2FkZXIuX0dldERyYXdNb2RlKGNvbnRleHQsIHByaW1pdGl2ZS5tb2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcmltaXRpdmUubWF0ZXJpYWwgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2RlZmF1bHRCYWJ5bG9uTWF0ZXJpYWxEYXRhW2JhYnlsb25EcmF3TW9kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5fY3JlYXRlRGVmYXVsdE1hdGVyaWFsKFwiX19HTFRGTG9hZGVyLl9kZWZhdWx0XCIsIGJhYnlsb25EcmF3TW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVmYXVsdEJhYnlsb25NYXRlcmlhbERhdGFbYmFieWxvbkRyYXdNb2RlXSA9IGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gubWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9tYXRlcmlhbGAsIHRoaXMuX2dsdGYubWF0ZXJpYWxzLCBwcmltaXRpdmUubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNYXRlcmlhbEFzeW5jKGAvbWF0ZXJpYWxzLyR7bWF0ZXJpYWwuaW5kZXh9YCwgbWF0ZXJpYWwsIGJhYnlsb25NZXNoLCBiYWJ5bG9uRHJhd01vZGUsIChiYWJ5bG9uTWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLm1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5faW5zdGFuY2VEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25Tb3VyY2VNZXNoOiBiYWJ5bG9uTWVzaCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFieWxvbkFic3RyYWN0TWVzaCA9IGJhYnlsb25NZXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbkFic3RyYWN0TWVzaCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWVzaExvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25BYnN0cmFjdE1lc2gpO1xyXG4gICAgICAgIGFzc2lnbihiYWJ5bG9uQWJzdHJhY3RNZXNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25BYnN0cmFjdE1lc2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoKTogUHJvbWlzZTxHZW9tZXRyeT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0LCBwcmltaXRpdmUsIGJhYnlsb25NZXNoKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmUuYXR0cmlidXRlcztcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBBdHRyaWJ1dGVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICBjb25zdCBiYWJ5bG9uR2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkoYmFieWxvbk1lc2gubmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuXHJcbiAgICAgICAgaWYgKHByaW1pdGl2ZS5pbmRpY2VzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5pc1VuSW5kZXhlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2luZGljZXNgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgcHJpbWl0aXZlLmluZGljZXMpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEluZGljZXNBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7YWNjZXNzb3IuaW5kZXh9YCwgYWNjZXNzb3IpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkuc2V0SW5kaWNlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsb2FkQXR0cmlidXRlID0gKG5hbWU6IHN0cmluZywga2luZDogc3RyaW5nLCBjYWxsYmFjaz86IChhY2Nlc3NvcjogSUFjY2Vzc29yKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW25hbWVdID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvID0gYmFieWxvbk1lc2guX2RlbGF5SW5mbyB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLl9kZWxheUluZm8uaW5kZXhPZihraW5kKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLl9kZWxheUluZm8ucHVzaChraW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2F0dHJpYnV0ZXMvJHtuYW1lfWAsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBhdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRWZXJ0ZXhBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7YWNjZXNzb3IuaW5kZXh9YCwgYWNjZXNzb3IsIGtpbmQpLnRoZW4oKGJhYnlsb25WZXJ0ZXhCdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvblZlcnRleEJ1ZmZlci5nZXRLaW5kKCkgPT09IFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQgJiYgIXRoaXMucGFyZW50LmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCAmJiAhYmFieWxvbk1lc2guc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkJvdW5kaW5nSW5mbyA9IExvYWRCb3VuZGluZ0luZm9Gcm9tUG9zaXRpb25BY2Nlc3NvcihhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uQm91bmRpbmdJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkuX2JvdW5kaW5nSW5mbyA9IGJhYnlsb25Cb3VuZGluZ0luZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkudXNlQm91bmRpbmdJbmZvRnJvbUdlb21ldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uR2VvbWV0cnkuc2V0VmVydGljZXNCdWZmZXIoYmFieWxvblZlcnRleEJ1ZmZlciwgYWNjZXNzb3IuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChraW5kID09IFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLm51bUJvbmVJbmZsdWVuY2VycyA9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlBPU0lUSU9OXCIsIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJOT1JNQUxcIiwgVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJUQU5HRU5UXCIsIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzBcIiwgVmVydGV4QnVmZmVyLlVWS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzFcIiwgVmVydGV4QnVmZmVyLlVWMktpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8yXCIsIFZlcnRleEJ1ZmZlci5VVjNLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfM1wiLCBWZXJ0ZXhCdWZmZXIuVVY0S2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzRcIiwgVmVydGV4QnVmZmVyLlVWNUtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF81XCIsIFZlcnRleEJ1ZmZlci5VVjZLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiSk9JTlRTXzBcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJXRUlHSFRTXzBcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJKT0lOVFNfMVwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiV0VJR0hUU18xXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNFeHRyYUtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJDT0xPUl8wXCIsIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIChhY2Nlc3NvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzb3IudHlwZSA9PT0gQWNjZXNzb3JUeXBlLlZFQzQpIHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLmhhc1ZlcnRleEFscGhhID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkdlb21ldHJ5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZU1vcnBoVGFyZ2V0cyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBtZXNoOiBJTWVzaCwgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1lc2g6IE1lc2gpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXByaW1pdGl2ZS50YXJnZXRzIHx8ICF0aGlzLl9wYXJlbnQubG9hZE1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5fbnVtTW9ycGhUYXJnZXRzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBub2RlLl9udW1Nb3JwaFRhcmdldHMgPSBwcmltaXRpdmUudGFyZ2V0cy5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmltaXRpdmUudGFyZ2V0cy5sZW5ndGggIT09IG5vZGUuX251bU1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFByaW1pdGl2ZXMgZG8gbm90IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHRhcmdldHNgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5hbWVzID0gbWVzaC5leHRyYXMgPyBtZXNoLmV4dHJhcy50YXJnZXROYW1lcyA6IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIgPSBuZXcgTW9ycGhUYXJnZXRNYW5hZ2VyKHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuYXJlVXBkYXRlc0Zyb3plbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcmltaXRpdmUudGFyZ2V0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gbm9kZS53ZWlnaHRzID8gbm9kZS53ZWlnaHRzW2luZGV4XSA6IG1lc2gud2VpZ2h0cyA/IG1lc2gud2VpZ2h0c1tpbmRleF0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0TmFtZXMgPyB0YXJnZXROYW1lc1tpbmRleF0gOiBgbW9ycGhUYXJnZXQke2luZGV4fWA7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlci5hZGRUYXJnZXQobmV3IE1vcnBoVGFyZ2V0KG5hbWUsIHdlaWdodCwgYmFieWxvbk1lc2guZ2V0U2NlbmUoKSkpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiB0ZWxsIHRoZSB0YXJnZXQgd2hldGhlciBpdCBoYXMgcG9zaXRpb25zLCBub3JtYWxzLCB0YW5nZW50c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9sb2FkTW9ycGhUYXJnZXRzQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBiYWJ5bG9uTWVzaDogTWVzaCwgYmFieWxvbkdlb21ldHJ5OiBHZW9tZXRyeSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghcHJpbWl0aXZlLnRhcmdldHMgfHwgIXRoaXMuX3BhcmVudC5sb2FkTW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0TWFuYWdlciA9IGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlciE7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1vcnBoVGFyZ2V0TWFuYWdlci5udW1UYXJnZXRzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRNb3JwaFRhcmdldFZlcnRleERhdGFBc3luYyhgJHtjb250ZXh0fS90YXJnZXRzLyR7aW5kZXh9YCwgYmFieWxvbkdlb21ldHJ5LCBwcmltaXRpdmUudGFyZ2V0c1tpbmRleF0sIGJhYnlsb25Nb3JwaFRhcmdldCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbW9ycGhUYXJnZXRNYW5hZ2VyLmFyZVVwZGF0ZXNGcm96ZW4gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkTW9ycGhUYXJnZXRWZXJ0ZXhEYXRhQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGJhYnlsb25HZW9tZXRyeTogR2VvbWV0cnksXHJcbiAgICAgICAgYXR0cmlidXRlczogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0sXHJcbiAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0OiBNb3JwaFRhcmdldFxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHN0cmluZywga2luZDogc3RyaW5nLCBzZXREYXRhOiAoYmFieWxvblZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBkYXRhOiBGbG9hdDMyQXJyYXkpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvblZlcnRleEJ1ZmZlciA9IGJhYnlsb25HZW9tZXRyeS5nZXRWZXJ0ZXhCdWZmZXIoa2luZCk7XHJcbiAgICAgICAgICAgIGlmICghYmFieWxvblZlcnRleEJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vJHthdHRyaWJ1dGV9YCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7YWNjZXNzb3IuaW5kZXh9YCwgYWNjZXNzb3IpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiUE9TSVRJT05cIiwgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChkYXRhLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2luZGV4XSA9IGRhdGFbaW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiTk9STUFMXCIsIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kLCAoYmFieWxvblZlcnRleEJ1ZmZlciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChub3JtYWxzLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1tpbmRleF0gPSBkYXRhW2luZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXROb3JtYWxzKG5vcm1hbHMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEFOR0VOVFwiLCBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhbmdlbnRzID0gbmV3IEZsb2F0MzJBcnJheSgoZGF0YS5sZW5ndGggLyAzKSAqIDQpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gMDtcclxuICAgICAgICAgICAgYmFieWxvblZlcnRleEJ1ZmZlci5mb3JFYWNoKChkYXRhLmxlbmd0aCAvIDMpICogNCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVGFuZ2VudCBkYXRhIGZvciBtb3JwaCB0YXJnZXRzIGlzIHN0b3JlZCBhcyB4eXogZGVsdGEuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdmVydGV4RGF0YS50YW5nZW50IGlzIHN0b3JlZCBhcyB4eXp3LlxyXG4gICAgICAgICAgICAgICAgLy8gU28gd2UgbmVlZCB0byBza2lwIGV2ZXJ5IGZvdXJ0aCB2ZXJ0ZXhEYXRhLnRhbmdlbnQuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGluZGV4ICsgMSkgJSA0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudHNbZGF0YUluZGV4XSA9IGRhdGFbZGF0YUluZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldFRhbmdlbnRzKHRhbmdlbnRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzBcIiwgVmVydGV4QnVmZmVyLlVWS2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXZzID0gbmV3IEZsb2F0MzJBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChkYXRhLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXZzW2luZGV4XSA9IGRhdGFbaW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldFVWcyh1dnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMVwiLCBWZXJ0ZXhCdWZmZXIuVVYyS2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXZzID0gbmV3IEZsb2F0MzJBcnJheShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChkYXRhLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXZzW2luZGV4XSA9IGRhdGFbaW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldFVWMnModXZzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIkNPTE9SXzBcIiwgVmVydGV4QnVmZmVyLkNvbG9yS2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFNpemUgPSBiYWJ5bG9uVmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFNpemUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkoKGRhdGEubGVuZ3RoIC8gMykgKiA0KTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChkYXRhLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGlkID0gTWF0aC5mbG9vcihpbmRleCAvIDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5uZWwgPSBpbmRleCAlIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzWzQgKiBwaXhpZCArIGNoYW5uZWxdID0gZGF0YVszICogcGl4aWQgKyBjaGFubmVsXSArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC8gMzsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzWzQgKiBpICsgM10gPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFNpemUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvblZlcnRleEJ1ZmZlci5mb3JFYWNoKGRhdGEubGVuZ3RoLCAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzW2luZGV4XSA9IGRhdGFbaW5kZXhdICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCBudW1iZXIgb2YgY29tcG9uZW50cyAoJHtjb21wb25lbnRTaXplfSkgZm9yIENPTE9SXzAgYXR0cmlidXRlYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFieWxvbk1vcnBoVGFyZ2V0LnNldENvbG9ycyhjb2xvcnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkVHJhbnNmb3JtKG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogVHJhbnNmb3JtTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZSB0aGUgVFJTIG9mIHNraW5uZWQgbm9kZXMuXHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNza2lucyAoc2Vjb25kIGltcGxlbWVudGF0aW9uIG5vdGUpXHJcbiAgICAgICAgaWYgKG5vZGUuc2tpbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpO1xyXG4gICAgICAgIGxldCBzY2FsaW5nID0gVmVjdG9yMy5PbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUubWF0cml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpO1xyXG4gICAgICAgICAgICBtYXRyaXguZGVjb21wb3NlKHNjYWxpbmcsIHJvdGF0aW9uLCBwb3NpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudHJhbnNsYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS50cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUucm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXkobm9kZS5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHNjYWxpbmcgPSBWZWN0b3IzLkZyb21BcnJheShub2RlLnNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmFieWxvbk5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICBiYWJ5bG9uTm9kZS5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbjtcclxuICAgICAgICBiYWJ5bG9uTm9kZS5zY2FsaW5nID0gc2NhbGluZztcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9sb2FkU2tpbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIHNraW46IElTa2luLCBhc3NpZ246IChiYWJ5bG9uU2tlbGV0b246IFNrZWxldG9uKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wYXJlbnQubG9hZFNraW5zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFNraW5Bc3luYyhjb250ZXh0LCBub2RlLCBza2luKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChza2luLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIGFzc2lnbihza2luLl9kYXRhLmJhYnlsb25Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBza2luLl9kYXRhLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBza2VsZXRvbklkID0gYHNrZWxldG9uJHtza2luLmluZGV4fWA7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25Ta2VsZXRvbiA9IG5ldyBTa2VsZXRvbihza2luLm5hbWUgfHwgc2tlbGV0b25JZCwgc2tlbGV0b25JZCwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICBiYWJ5bG9uU2tlbGV0b24uX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWRCb25lcyhjb250ZXh0LCBza2luLCBiYWJ5bG9uU2tlbGV0b24pO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkU2tpbkludmVyc2VCaW5kTWF0cmljZXNEYXRhQXN5bmMoY29udGV4dCwgc2tpbikudGhlbigoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQm9uZU1hdHJpY2VzKGJhYnlsb25Ta2VsZXRvbiwgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBza2luLl9kYXRhID0ge1xyXG4gICAgICAgICAgICBiYWJ5bG9uU2tlbGV0b246IGJhYnlsb25Ta2VsZXRvbixcclxuICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhc3NpZ24oYmFieWxvblNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEJvbmVzKGNvbnRleHQ6IHN0cmluZywgc2tpbjogSVNraW4sIGJhYnlsb25Ta2VsZXRvbjogU2tlbGV0b24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoc2tpbi5za2VsZXRvbiA9PSB1bmRlZmluZWQgfHwgdGhpcy5fcGFyZW50LmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3ROb2RlID0gdGhpcy5fZmluZFNrZWxldG9uUm9vdE5vZGUoYCR7Y29udGV4dH0vam9pbnRzYCwgc2tpbi5qb2ludHMpO1xyXG4gICAgICAgICAgICBpZiAocm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChza2luLnNrZWxldG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2luLnNrZWxldG9uID0gcm9vdE5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFyZW50ID0gKGE6IElOb2RlLCBiOiBJTm9kZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgYi5wYXJlbnQ7IGIgPSBiLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIucGFyZW50ID09PSBhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBza2VsZXRvbk5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NrZWxldG9uYCwgdGhpcy5fZ2x0Zi5ub2Rlcywgc2tpbi5za2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNrZWxldG9uTm9kZSAhPT0gcm9vdE5vZGUgJiYgIWlzUGFyZW50KHNrZWxldG9uTm9kZSwgcm9vdE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L3NrZWxldG9uOiBPdmVycmlkaW5nIHdpdGggbmVhcmVzdCBjb21tb24gYW5jZXN0b3IgYXMgc2tlbGV0b24gbm9kZSBpcyBub3QgYSBjb21tb24gcm9vdGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luLnNrZWxldG9uID0gcm9vdE5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEZhaWxlZCB0byBmaW5kIGNvbW1vbiByb290YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhYnlsb25Cb25lczogeyBbaW5kZXg6IG51bWJlcl06IEJvbmUgfSA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygc2tpbi5qb2ludHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vam9pbnRzLyR7aW5kZXh9YCwgdGhpcy5fZ2x0Zi5ub2RlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQm9uZShub2RlLCBza2luLCBiYWJ5bG9uU2tlbGV0b24sIGJhYnlsb25Cb25lcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZpbmRTa2VsZXRvblJvb3ROb2RlKGNvbnRleHQ6IHN0cmluZywgam9pbnRzOiBBcnJheTxudW1iZXI+KTogTnVsbGFibGU8SU5vZGU+IHtcclxuICAgICAgICBpZiAoam9pbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGhzOiB7IFtqb2ludDogbnVtYmVyXTogQXJyYXk8SU5vZGU+IH0gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGpvaW50cykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoOiBJTm9kZVtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS8ke2luZGV4fWAsIHRoaXMuX2dsdGYubm9kZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgd2hpbGUgKG5vZGUuaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoLnVuc2hpZnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGhzW2luZGV4XSA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcm9vdE5vZGU6IE51bGxhYmxlPElOb2RlPiA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gcGF0aHNbam9pbnRzWzBdXTtcclxuICAgICAgICAgICAgaWYgKGkgPj0gcGF0aC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByb290Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHBhdGhbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgam9pbnRzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aHNbam9pbnRzW2pdXTtcclxuICAgICAgICAgICAgICAgIGlmIChpID49IHBhdGgubGVuZ3RoIHx8IG5vZGUgIT09IHBhdGhbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJvb3ROb2RlID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEJvbmUobm9kZTogSU5vZGUsIHNraW46IElTa2luLCBiYWJ5bG9uU2tlbGV0b246IFNrZWxldG9uLCBiYWJ5bG9uQm9uZXM6IHsgW2luZGV4OiBudW1iZXJdOiBCb25lIH0pOiBCb25lIHtcclxuICAgICAgICBub2RlLl9pc0pvaW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGJhYnlsb25Cb25lID0gYmFieWxvbkJvbmVzW25vZGUuaW5kZXhdO1xyXG4gICAgICAgIGlmIChiYWJ5bG9uQm9uZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkJvbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyZW50QmFieWxvbkJvbmU6IE51bGxhYmxlPEJvbmU+ID0gbnVsbDtcclxuICAgICAgICBpZiAobm9kZS5pbmRleCAhPT0gc2tpbi5za2VsZXRvbikge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQgJiYgbm9kZS5wYXJlbnQuaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRCYWJ5bG9uQm9uZSA9IHRoaXMuX2xvYWRCb25lKG5vZGUucGFyZW50LCBza2luLCBiYWJ5bG9uU2tlbGV0b24sIGJhYnlsb25Cb25lcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2tpbi5za2VsZXRvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgL3NraW5zLyR7c2tpbi5pbmRleH0vc2tlbGV0b246IFNrZWxldG9uIG5vZGUgaXMgbm90IGEgY29tbW9uIHJvb3RgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9uZUluZGV4ID0gc2tpbi5qb2ludHMuaW5kZXhPZihub2RlLmluZGV4KTtcclxuICAgICAgICBiYWJ5bG9uQm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBgam9pbnQke25vZGUuaW5kZXh9YCwgYmFieWxvblNrZWxldG9uLCBwYXJlbnRCYWJ5bG9uQm9uZSwgdGhpcy5fZ2V0Tm9kZU1hdHJpeChub2RlKSwgbnVsbCwgbnVsbCwgYm9uZUluZGV4KTtcclxuICAgICAgICBiYWJ5bG9uQm9uZXNbbm9kZS5pbmRleF0gPSBiYWJ5bG9uQm9uZTtcclxuXHJcbiAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgc2NlbmUgaXMgbG9hZGVkIHRvIGVuc3VyZSB0aGUgdHJhbnNmb3JtIG5vZGVzIGFyZSBsb2FkZWQuXHJcbiAgICAgICAgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIExpbmsgdGhlIEJhYnlsb24gYm9uZSB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIEJhYnlsb24gdHJhbnNmb3JtIG5vZGUuXHJcbiAgICAgICAgICAgIC8vIEEgZ2xURiBqb2ludCBpcyBhIHBvaW50ZXIgdG8gYSBnbFRGIG5vZGUgaW4gdGhlIGdsVEYgbm9kZSBoaWVyYXJjaHkgc2ltaWxhciB0byBVbml0eTNELlxyXG4gICAgICAgICAgICBiYWJ5bG9uQm9uZS5saW5rVHJhbnNmb3JtTm9kZShub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFieWxvbkJvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZFNraW5JbnZlcnNlQmluZE1hdHJpY2VzRGF0YUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2tpbjogSVNraW4pOiBQcm9taXNlPE51bGxhYmxlPEZsb2F0MzJBcnJheT4+IHtcclxuICAgICAgICBpZiAoc2tpbi5pbnZlcnNlQmluZE1hdHJpY2VzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2ludmVyc2VCaW5kTWF0cmljZXNgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgc2tpbi5pbnZlcnNlQmluZE1hdHJpY2VzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2FjY2Vzc29yLmluZGV4fWAsIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVCb25lTWF0cmljZXMoYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbiwgaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGE6IE51bGxhYmxlPEZsb2F0MzJBcnJheT4pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25Cb25lIG9mIGJhYnlsb25Ta2VsZXRvbi5ib25lcykge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlTWF0cml4ID0gTWF0cml4LklkZW50aXR5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvbmVJbmRleCA9IGJhYnlsb25Cb25lLl9pbmRleCE7XHJcbiAgICAgICAgICAgIGlmIChpbnZlcnNlQmluZE1hdHJpY2VzRGF0YSAmJiBib25lSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRyaXguRnJvbUFycmF5VG9SZWYoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEsIGJvbmVJbmRleCAqIDE2LCBiYXNlTWF0cml4KTtcclxuICAgICAgICAgICAgICAgIGJhc2VNYXRyaXguaW52ZXJ0VG9SZWYoYmFzZU1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25QYXJlbnRCb25lID0gYmFieWxvbkJvbmUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uUGFyZW50Qm9uZSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZU1hdHJpeC5tdWx0aXBseVRvUmVmKGJhYnlsb25QYXJlbnRCb25lLmdldEFic29sdXRlSW52ZXJzZUJpbmRNYXRyaXgoKSwgYmFzZU1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Cb25lLnVwZGF0ZU1hdHJpeChiYXNlTWF0cml4LCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uQm9uZS5fdXBkYXRlQWJzb2x1dGVCaW5kTWF0cmljZXModW5kZWZpbmVkLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE5vZGVNYXRyaXgobm9kZTogSU5vZGUpOiBNYXRyaXgge1xyXG4gICAgICAgIHJldHVybiBub2RlLm1hdHJpeFxyXG4gICAgICAgICAgICA/IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpXHJcbiAgICAgICAgICAgIDogTWF0cml4LkNvbXBvc2UoXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPyBWZWN0b3IzLkZyb21BcnJheShub2RlLnNjYWxlKSA6IFZlY3RvcjMuT25lKCksXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUucm90YXRpb24gPyBRdWF0ZXJuaW9uLkZyb21BcnJheShub2RlLnJvdGF0aW9uKSA6IFF1YXRlcm5pb24uSWRlbnRpdHkoKSxcclxuICAgICAgICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA/IFZlY3RvcjMuRnJvbUFycmF5KG5vZGUudHJhbnNsYXRpb24pIDogVmVjdG9yMy5aZXJvKClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIGNhbWVyYS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBjYW1lcmEgVGhlIGdsVEYgY2FtZXJhIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgQmFieWxvbiBjYW1lcmEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZENhbWVyYUFzeW5jKGNvbnRleHQ6IHN0cmluZywgY2FtZXJhOiBJQ2FtZXJhLCBhc3NpZ246IChiYWJ5bG9uQ2FtZXJhOiBDYW1lcmEpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8Q2FtZXJhPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQ2FtZXJhQXN5bmMoY29udGV4dCwgY2FtZXJhLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7Y2FtZXJhLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25DYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShjYW1lcmEubmFtZSB8fCBgY2FtZXJhJHtjYW1lcmEuaW5kZXh9YCwgVmVjdG9yMy5aZXJvKCksIHRoaXMuX2JhYnlsb25TY2VuZSwgZmFsc2UpO1xyXG4gICAgICAgIGJhYnlsb25DYW1lcmEuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhID0gYmFieWxvbkNhbWVyYTtcclxuXHJcbiAgICAgICAgLy8gZ2xURiBjYW1lcmFzIGxvb2sgdG93YXJkcyB0aGUgbG9jYWwgLVogYXhpcy5cclxuICAgICAgICBiYWJ5bG9uQ2FtZXJhLnNldFRhcmdldChuZXcgVmVjdG9yMygwLCAwLCAtMSkpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNhbWVyYS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ2FtZXJhVHlwZS5QRVJTUEVDVElWRToge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc3BlY3RpdmUgPSBjYW1lcmEucGVyc3BlY3RpdmU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBlcnNwZWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBDYW1lcmEgcGVyc3BlY3RpdmUgcHJvcGVydGllcyBhcmUgbWlzc2luZ2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEuZm92ID0gcGVyc3BlY3RpdmUueWZvdjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEubWluWiA9IHBlcnNwZWN0aXZlLnpuZWFyO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5tYXhaID0gcGVyc3BlY3RpdmUuemZhciB8fCAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW1lcmEub3J0aG9ncmFwaGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBDYW1lcmEgb3J0aG9ncmFwaGljIHByb3BlcnRpZXMgYXJlIG1pc3NpbmdgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1vZGUgPSBDYW1lcmEuT1JUSE9HUkFQSElDX0NBTUVSQTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEub3J0aG9MZWZ0ID0gLWNhbWVyYS5vcnRob2dyYXBoaWMueG1hZztcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEub3J0aG9SaWdodCA9IGNhbWVyYS5vcnRob2dyYXBoaWMueG1hZztcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEub3J0aG9Cb3R0b20gPSAtY2FtZXJhLm9ydGhvZ3JhcGhpYy55bWFnO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5vcnRob1RvcCA9IGNhbWVyYS5vcnRob2dyYXBoaWMueW1hZztcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEubWluWiA9IGNhbWVyYS5vcnRob2dyYXBoaWMuem5lYXI7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1heFogPSBjYW1lcmEub3J0aG9ncmFwaGljLnpmYXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgY2FtZXJhIHR5cGUgKCR7Y2FtZXJhLnR5cGV9KWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHTFRGTG9hZGVyLkFkZFBvaW50ZXJNZXRhZGF0YShiYWJ5bG9uQ2FtZXJhLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLl9wYXJlbnQub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhiYWJ5bG9uQ2FtZXJhKTtcclxuICAgICAgICBhc3NpZ24oYmFieWxvbkNhbWVyYSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25DYW1lcmE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEFuaW1hdGlvbnNBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiTG9hZCBhbmltYXRpb25zXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gdGhpcy5fZ2x0Zi5hbmltYXRpb25zO1xyXG4gICAgICAgIGlmICghYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHZvaWQ+PigpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYW5pbWF0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gYW5pbWF0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBbmltYXRpb25Bc3luYyhgL2FuaW1hdGlvbnMvJHthbmltYXRpb24uaW5kZXh9YCwgYW5pbWF0aW9uKS50aGVuKChhbmltYXRpb25Hcm91cCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgYW5pbWF0aW9uIGdyb3VwIGlmIGl0IGVuZGVkIHVwIG5vdCBoYXZpbmcgYW55IGFuaW1hdGlvbnMgaW4gaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXAuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIkxvYWQgYW5pbWF0aW9uc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBnbFRGIGFuaW1hdGlvbiBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIEJhYnlsb24gYW5pbWF0aW9uIGdyb3VwIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0OiBzdHJpbmcsIGFuaW1hdGlvbjogSUFuaW1hdGlvbik6IFByb21pc2U8QW5pbWF0aW9uR3JvdXA+IHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiTG9hZCBhbmltYXRpb25cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZEFuaW1hdGlvbkFzeW5jKGNvbnRleHQsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICAgICAgcmV0dXJuIExhenlBbmltYXRpb25Hcm91cE1vZHVsZVByb21pc2UudmFsdWUudGhlbigoeyBBbmltYXRpb25Hcm91cCB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkdyb3VwID0gbmV3IEFuaW1hdGlvbkdyb3VwKGFuaW1hdGlvbi5uYW1lIHx8IGBhbmltYXRpb24ke2FuaW1hdGlvbi5pbmRleH1gLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cCA9IGJhYnlsb25BbmltYXRpb25Hcm91cDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKGFuaW1hdGlvbi5jaGFubmVscyk7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24oYW5pbWF0aW9uLnNhbXBsZXJzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hhbm5lbCBvZiBhbmltYXRpb24uY2hhbm5lbHMpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhgJHtjb250ZXh0fS9jaGFubmVscy8ke2NoYW5uZWwuaW5kZXh9YCwgY29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCAoYmFieWxvblRhcmdldCwgYmFieWxvbkFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGFyZ2V0LmFuaW1hdGlvbnMgPSBiYWJ5bG9uVGFyZ2V0LmFuaW1hdGlvbnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UYXJnZXQuYW5pbWF0aW9ucy5wdXNoKGJhYnlsb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAuYWRkVGFyZ2V0ZWRBbmltYXRpb24oYmFieWxvbkFuaW1hdGlvbiwgYmFieWxvblRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiTG9hZCBhbmltYXRpb25cIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLm5vcm1hbGl6ZSgwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogTG9hZHMgYSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGFuaW1hdGlvbiB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBnbFRGIGFuaW1hdGlvbiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGNoYW5uZWwgVGhlIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBvbkxvYWQgQ2FsbGVkIGZvciBlYWNoIGFuaW1hdGlvbiBsb2FkZWRcclxuICAgICAqIEByZXR1cm5zIEEgdm9pZCBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbkNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgY2hhbm5lbDogSUFuaW1hdGlvbkNoYW5uZWwsXHJcbiAgICAgICAgb25Mb2FkOiAoYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24pID0+IHZvaWRcclxuICAgICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhjb250ZXh0LCBhbmltYXRpb25Db250ZXh0LCBhbmltYXRpb24sIGNoYW5uZWwsIG9uTG9hZCk7XHJcbiAgICAgICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbm5lbC50YXJnZXQubm9kZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vdGFyZ2V0L25vZGVgLCB0aGlzLl9nbHRmLm5vZGVzLCBjaGFubmVsLnRhcmdldC5ub2RlKTtcclxuICAgICAgICBjb25zdCBjaGFubmVsVGFyZ2V0UGF0aCA9IGNoYW5uZWwudGFyZ2V0LnBhdGg7XHJcbiAgICAgICAgY29uc3QgcGF0aElzV2VpZ2h0cyA9IGNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5XRUlHSFRTO1xyXG5cclxuICAgICAgICAvLyBJZ25vcmUgYW5pbWF0aW9ucyB0aGF0IGhhdmUgbm8gYW5pbWF0aW9uIHRhcmdldHMuXHJcbiAgICAgICAgaWYgKChwYXRoSXNXZWlnaHRzICYmICF0YXJnZXROb2RlLl9udW1Nb3JwaFRhcmdldHMpIHx8ICghcGF0aElzV2VpZ2h0cyAmJiAhdGFyZ2V0Tm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvbid0IGxvYWQgbm9kZSBhbmltYXRpb25zIGlmIGRpc2FibGVkLlxyXG4gICAgICAgIGlmICghdGhpcy5fcGFyZW50LmxvYWROb2RlQW5pbWF0aW9ucyAmJiAhcGF0aElzV2VpZ2h0cyAmJiAhdGFyZ2V0Tm9kZS5faXNKb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhc3luYy1sb2FkIHRoZSBhbmltYXRpb24gc2FtcGxlciB0byBwcm92aWRlIHRoZSBpbnRlcnBvbGF0aW9uIG9mIHRoZSBjaGFubmVsVGFyZ2V0UGF0aFxyXG4gICAgICAgIHJldHVybiBMYXp5TG9hZGVyQW5pbWF0aW9uTW9kdWxlUHJvbWlzZS52YWx1ZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnRpZXM6IElJbnRlcnBvbGF0aW9uUHJvcGVydHlJbmZvW107XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhbm5lbFRhcmdldFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT046IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gR2V0TWFwcGluZ0ZvcktleShcIi9ub2Rlcy97fS90cmFuc2xhdGlvblwiKT8uaW50ZXJwb2xhdGlvbiE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IEdldE1hcHBpbmdGb3JLZXkoXCIvbm9kZXMve30vcm90YXRpb25cIik/LmludGVycG9sYXRpb24hO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5TQ0FMRToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBHZXRNYXBwaW5nRm9yS2V5KFwiL25vZGVzL3t9L3NjYWxlXCIpPy5pbnRlcnBvbGF0aW9uITtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBHZXRNYXBwaW5nRm9yS2V5KFwiL25vZGVzL3t9L3dlaWdodHNcIik/LmludGVycG9sYXRpb24hO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS90YXJnZXQvcGF0aDogSW52YWxpZCB2YWx1ZSAoJHtjaGFubmVsLnRhcmdldC5wYXRofSlgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzdGF5IHNhZmVcclxuICAgICAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vdGFyZ2V0L3BhdGg6IENvdWxkIG5vdCBmaW5kIGludGVycG9sYXRpb24gcHJvcGVydGllcyBmb3IgdGFyZ2V0IHBhdGggKCR7Y2hhbm5lbC50YXJnZXQucGF0aH0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZm86IElPYmplY3RJbmZvPElJbnRlcnBvbGF0aW9uUHJvcGVydHlJbmZvW10+ID0ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0YXJnZXROb2RlLFxyXG4gICAgICAgICAgICAgICAgaW5mbzogcHJvcGVydGllcyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEZyb21UYXJnZXRJbmZvQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uQ29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCB0YXJnZXRJbmZvLCBvbkxvYWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogTG9hZHMgYSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNvbnRleHQgVGhlIGNvbnRleHQgb2YgdGhlIGFuaW1hdGlvbiB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBnbFRGIGFuaW1hdGlvbiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGNoYW5uZWwgVGhlIGdsVEYgYW5pbWF0aW9uIGNoYW5uZWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSB0YXJnZXRJbmZvIFRoZSBnbFRGIHRhcmdldCBhbmQgcHJvcGVydGllc1xyXG4gICAgICogQHBhcmFtIG9uTG9hZCBDYWxsZWQgZm9yIGVhY2ggYW5pbWF0aW9uIGxvYWRlZFxyXG4gICAgICogQHJldHVybnMgQSB2b2lkIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEFuaW1hdGlvbkNoYW5uZWxGcm9tVGFyZ2V0SW5mb0FzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsLFxyXG4gICAgICAgIHRhcmdldEluZm86IElPYmplY3RJbmZvPElJbnRlcnBvbGF0aW9uUHJvcGVydHlJbmZvW10+LFxyXG4gICAgICAgIG9uTG9hZDogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBmcHMgPSB0aGlzLnBhcmVudC50YXJnZXRGcHM7XHJcbiAgICAgICAgY29uc3QgaW52ZnBzID0gMSAvIGZwcztcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc2FtcGxlcmAsIGFuaW1hdGlvbi5zYW1wbGVycywgY2hhbm5lbC5zYW1wbGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFuaW1hdGlvblNhbXBsZXJBc3luYyhgJHthbmltYXRpb25Db250ZXh0fS9zYW1wbGVycy8ke2NoYW5uZWwuc2FtcGxlcn1gLCBzYW1wbGVyKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW1BbmltYXRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldEluZm8ub2JqZWN0O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUluZm9zID0gdGFyZ2V0SW5mby5pbmZvO1xyXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlcyBmcm9tIHRoZSByZWFkIHZhbHVlLlxyXG4gICAgICAgICAgICAvLyBHTFRGIHZhbHVlcyBtYXkgYmUgZGlzcGF0Y2hlZCB0byBzZXZlcmFsIEJhYnlsb24gcHJvcGVydGllcy5cclxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGJhc2VDb2xvckZhY3RvciBbYHJgLCBgZ2AsIGBiYCwgYGFgXSBpcyBkaXNwYXRjaGVkIHRvXHJcbiAgICAgICAgICAgIC8vIC0gYWxiZWRvQ29sb3IgYXMgQ29sb3IzKGByYCwgYGdgLCBgYmApXHJcbiAgICAgICAgICAgIC8vIC0gYWxwaGEgYXMgYGFgXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHlJbmZvIG9mIHByb3BlcnR5SW5mb3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlkZSA9IHByb3BlcnR5SW5mby5nZXRTdHJpZGUodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZGF0YS5pbnB1dDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGRhdGEub3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IG5ldyBBcnJheTxJQW5pbWF0aW9uS2V5PihpbnB1dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dE9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLmludGVycG9sYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eUluZm8uZ2V0VmFsdWUodGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBpbnB1dFtpbmRleF0gKiBmcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb246IEFuaW1hdGlvbktleUludGVycG9sYXRpb24uU1RFUCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5UYW5nZW50ID0gcHJvcGVydHlJbmZvLmdldFZhbHVlKHRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIGludmZwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eUluZm8uZ2V0VmFsdWUodGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0VGFuZ2VudCA9IHByb3BlcnR5SW5mby5nZXRWYWx1ZSh0YXJnZXQsIG91dHB1dCwgb3V0cHV0T2Zmc2V0LCBpbnZmcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogaW5wdXRbaW5kZXhdICogZnBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluVGFuZ2VudDogaW5UYW5nZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRUYW5nZW50OiBvdXRUYW5nZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0eUluZm8uZ2V0VmFsdWUodGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRPZmZzZXQgKz0gc3RyaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lOiBpbnB1dFtpbmRleF0gKiBmcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dE9mZnNldCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7YW5pbWF0aW9uLm5hbWUgfHwgYGFuaW1hdGlvbiR7YW5pbWF0aW9uLmluZGV4fWB9X2NoYW5uZWwke2NoYW5uZWwuaW5kZXh9XyR7bnVtQW5pbWF0aW9uc31gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25zID0gcHJvcGVydHlJbmZvLmJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQsIG5hbWUsIGZwcywga2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uQW5pbWF0aW9uIG9mIGJhYnlsb25BbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bUFuaW1hdGlvbnMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKGJhYnlsb25BbmltYXRpb24uYmFieWxvbkFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb24uYmFieWxvbkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEFuaW1hdGlvblNhbXBsZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNhbXBsZXI6IElBbmltYXRpb25TYW1wbGVyKTogUHJvbWlzZTxfSUFuaW1hdGlvblNhbXBsZXJEYXRhPiB7XHJcbiAgICAgICAgaWYgKHNhbXBsZXIuX2RhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXIuX2RhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uIHx8IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjtcclxuICAgICAgICBzd2l0Y2ggKGludGVycG9sYXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQOlxyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUjpcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORToge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L2ludGVycG9sYXRpb246IEludmFsaWQgdmFsdWUgKCR7c2FtcGxlci5pbnRlcnBvbGF0aW9ufSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRBY2Nlc3NvciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vaW5wdXRgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgc2FtcGxlci5pbnB1dCk7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0QWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L291dHB1dGAsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBzYW1wbGVyLm91dHB1dCk7XHJcbiAgICAgICAgc2FtcGxlci5fZGF0YSA9IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2lucHV0QWNjZXNzb3IuaW5kZXh9YCwgaW5wdXRBY2Nlc3NvciksXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHtvdXRwdXRBY2Nlc3Nvci5pbmRleH1gLCBvdXRwdXRBY2Nlc3NvciksXHJcbiAgICAgICAgXSkudGhlbigoW2lucHV0RGF0YSwgb3V0cHV0RGF0YV0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiBpbnB1dERhdGEsXHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBvdXRwdXREYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlci5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBnbFRGIGJ1ZmZlciBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIGJ5dGUgb2Zmc2V0IHRvIHVzZVxyXG4gICAgICogQHBhcmFtIGJ5dGVMZW5ndGggVGhlIGJ5dGUgbGVuZ3RoIHRvIHVzZVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYnVmZmVyOiBJQnVmZmVyLCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQnVmZmVyQXN5bmMoY29udGV4dCwgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYnVmZmVyLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIudXJpKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIuX2RhdGEgPSB0aGlzLmxvYWRVcmlBc3luYyhgJHtjb250ZXh0fS91cmlgLCBidWZmZXIsIGJ1ZmZlci51cmkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IFVyaSBpcyBtaXNzaW5nIG9yIHRoZSBiaW5hcnkgZ2xURiBpcyBtaXNzaW5nIGl0cyBiaW5hcnkgY2h1bmtgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidWZmZXIuX2RhdGEgPSB0aGlzLl9iaW4ucmVhZEFzeW5jKDAsIGJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5fZGF0YS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYnVmZmVyIHZpZXcuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyBUaGUgZ2xURiBidWZmZXIgdmlldyBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dCwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnVmZmVyVmlldy5fZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyYCwgdGhpcy5fZ2x0Zi5idWZmZXJzLCBidWZmZXJWaWV3LmJ1ZmZlcik7XHJcbiAgICAgICAgYnVmZmVyVmlldy5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlckFzeW5jKGAvYnVmZmVycy8ke2J1ZmZlci5pbmRleH1gLCBidWZmZXIsIGJ1ZmZlclZpZXcuYnl0ZU9mZnNldCB8fCAwLCBidWZmZXJWaWV3LmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQWNjZXNzb3JBc3luYyhjb250ZXh0OiBzdHJpbmcsIGFjY2Vzc29yOiBJQWNjZXNzb3IsIGNvbnN0cnVjdG9yOiBUeXBlZEFycmF5Q29uc3RydWN0b3IpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5fZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2RhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBudW1Db21wb25lbnRzID0gR0xURkxvYWRlci5fR2V0TnVtQ29tcG9uZW50cyhjb250ZXh0LCBhY2Nlc3Nvci50eXBlKTtcclxuICAgICAgICBjb25zdCBieXRlU3RyaWRlID0gbnVtQ29tcG9uZW50cyAqIFZlcnRleEJ1ZmZlci5HZXRUeXBlQnl0ZUxlbmd0aChhY2Nlc3Nvci5jb21wb25lbnRUeXBlKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBudW1Db21wb25lbnRzICogYWNjZXNzb3IuY291bnQ7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5idWZmZXJWaWV3ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IFByb21pc2UucmVzb2x2ZShuZXcgY29uc3RydWN0b3IobGVuZ3RoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIGFjY2Vzc29yLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzb3IuY29tcG9uZW50VHlwZSA9PT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FUICYmICFhY2Nlc3Nvci5ub3JtYWxpemVkICYmICghYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSA9PT0gYnl0ZVN0cmlkZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShjb250ZXh0LCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCBkYXRhLCBhY2Nlc3Nvci5ieXRlT2Zmc2V0LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlZEFycmF5ID0gbmV3IGNvbnN0cnVjdG9yKGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4QnVmZmVyLkZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmJ5dGVPZmZzZXQgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlU3RyaWRlIHx8IGJ5dGVTdHJpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVkQXJyYXkubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEFycmF5W2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZWRBcnJheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3Iuc3BhcnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYXJzZSA9IGFjY2Vzc29yLnNwYXJzZTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSBhY2Nlc3Nvci5fZGF0YS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlZEFycmF5ID0gZGF0YSBhcyBUeXBlZEFycmF5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlc0J1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NwYXJzZS9pbmRpY2VzL2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBzcGFyc2UuaW5kaWNlcy5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlc0J1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NwYXJzZS92YWx1ZXMvYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIHNwYXJzZS52YWx1ZXMuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7aW5kaWNlc0J1ZmZlclZpZXcuaW5kZXh9YCwgaW5kaWNlc0J1ZmZlclZpZXcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7dmFsdWVzQnVmZmVyVmlldy5pbmRleH1gLCB2YWx1ZXNCdWZmZXJWaWV3KSxcclxuICAgICAgICAgICAgICAgIF0pLnRoZW4oKFtpbmRpY2VzRGF0YSwgdmFsdWVzRGF0YV0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGV4dH0vc3BhcnNlL2luZGljZXNgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFyc2UuaW5kaWNlcy5jb21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2VzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhcnNlLmluZGljZXMuYnl0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhcnNlLmNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgKSBhcyBJbmRpY2VzQXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYXJzZUxlbmd0aCA9IG51bUNvbXBvbmVudHMgKiBzcGFyc2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlczogVHlwZWRBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgPT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCAmJiAhYWNjZXNzb3Iubm9ybWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5KGAke2NvbnRleHR9L3NwYXJzZS92YWx1ZXNgLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCB2YWx1ZXNEYXRhLCBzcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQsIHNwYXJzZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhcnNlRGF0YSA9IEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoYCR7Y29udGV4dH0vc3BhcnNlL3ZhbHVlc2AsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsIHZhbHVlc0RhdGEsIHNwYXJzZS52YWx1ZXMuYnl0ZU9mZnNldCwgc3BhcnNlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gbmV3IGNvbnN0cnVjdG9yKHNwYXJzZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlcnRleEJ1ZmZlci5Gb3JFYWNoKHNwYXJzZURhdGEsIDAsIGJ5dGVTdHJpZGUsIG51bUNvbXBvbmVudHMsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsIHZhbHVlcy5sZW5ndGgsIGFjY2Vzc29yLm5vcm1hbGl6ZWQgfHwgZmFsc2UsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVzSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGljZXNJbmRleCA9IDA7IGluZGljZXNJbmRleCA8IGluZGljZXMubGVuZ3RoOyBpbmRpY2VzSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gaW5kaWNlc1tpbmRpY2VzSW5kZXhdICogbnVtQ29tcG9uZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29tcG9uZW50SW5kZXggPSAwOyBjb21wb25lbnRJbmRleCA8IG51bUNvbXBvbmVudHM7IGNvbXBvbmVudEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVkQXJyYXlbZGF0YUluZGV4KytdID0gdmFsdWVzW3ZhbHVlc0luZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZWRBcnJheTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3Nvci5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoY29udGV4dDogc3RyaW5nLCBhY2Nlc3NvcjogSUFjY2Vzc29yKTogUHJvbWlzZTxGbG9hdDMyQXJyYXk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFjY2Vzc29yQXN5bmMoY29udGV4dCwgYWNjZXNzb3IsIEZsb2F0MzJBcnJheSkgYXMgUHJvbWlzZTxGbG9hdDMyQXJyYXk+O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZEluZGljZXNBY2Nlc3NvckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYWNjZXNzb3I6IElBY2Nlc3Nvcik6IFByb21pc2U8SW5kaWNlc0FycmF5PiB7XHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLnR5cGUgIT09IEFjY2Vzc29yVHlwZS5TQ0FMQVIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L3R5cGU6IEludmFsaWQgdmFsdWUgJHthY2Nlc3Nvci50eXBlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRUeXBlICE9PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURSAmJlxyXG4gICAgICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRUeXBlICE9PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuVU5TSUdORURfU0hPUlQgJiZcclxuICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSAhPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vY29tcG9uZW50VHlwZTogSW52YWxpZCB2YWx1ZSAke2FjY2Vzc29yLmNvbXBvbmVudFR5cGV9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3IuX2RhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc29yLl9kYXRhIGFzIFByb21pc2U8SW5kaWNlc0FycmF5PjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5zcGFyc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5Q29uc3RydWN0b3IoYCR7Y29udGV4dH0vY29tcG9uZW50VHlwZWAsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpO1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IHRoaXMuX2xvYWRBY2Nlc3NvckFzeW5jKGNvbnRleHQsIGFjY2Vzc29yLCBjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIGFjY2Vzc29yLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShjb250ZXh0LCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCBkYXRhLCBhY2Nlc3Nvci5ieXRlT2Zmc2V0LCBhY2Nlc3Nvci5jb3VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc29yLl9kYXRhIGFzIFByb21pc2U8SW5kaWNlc0FycmF5PjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRWZXJ0ZXhCdWZmZXJWaWV3QXN5bmMoYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xyXG4gICAgICAgIGlmIChidWZmZXJWaWV3Ll9iYWJ5bG9uQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidWZmZXJWaWV3Ll9iYWJ5bG9uQnVmZmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5fYmFieWxvblNjZW5lLmdldEVuZ2luZSgpO1xyXG4gICAgICAgIGJ1ZmZlclZpZXcuX2JhYnlsb25CdWZmZXIgPSB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1ZmZlcihlbmdpbmUsIGRhdGEsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXcuX2JhYnlsb25CdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkVmVydGV4QWNjZXNzb3JBc3luYyhjb250ZXh0OiBzdHJpbmcsIGFjY2Vzc29yOiBJQWNjZXNzb3IsIGtpbmQ6IHN0cmluZyk6IFByb21pc2U8VmVydGV4QnVmZmVyPiB7XHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyPy5ba2luZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyW2tpbmRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcikge1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlciA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5fYmFieWxvblNjZW5lLmdldEVuZ2luZSgpO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3Iuc3BhcnNlIHx8IGFjY2Vzc29yLmJ1ZmZlclZpZXcgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyW2tpbmRdID0gdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhjb250ZXh0LCBhY2Nlc3NvcikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXhCdWZmZXIoZW5naW5lLCBkYXRhLCBraW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBhY2Nlc3Nvci5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXJba2luZF0gPSB0aGlzLl9sb2FkVmVydGV4QnVmZmVyVmlld0FzeW5jKGJ1ZmZlclZpZXcpLnRoZW4oKGJhYnlsb25CdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG51bUNvbXBvbmVudHMgPSBHTFRGTG9hZGVyLl9HZXROdW1Db21wb25lbnRzKGNvbnRleHQsIGFjY2Vzc29yLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXhCdWZmZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25CdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAga2luZCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlU3RyaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ieXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG51bUNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ub3JtYWxpemVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyW2tpbmRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRNYXRlcmlhbE1ldGFsbGljUm91Z2huZXNzUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydGllczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9nZXRPckNyZWF0ZU1hdGVyaWFsQWRhcHRlcihiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAvLyBTZXQgYmFzZSBjb2xvciBhbmQgYWxwaGEgdXNpbmcgYWRhcHRlclxyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5iYXNlQ29sb3JGYWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIuYmFzZUNvbG9yID0gQ29sb3IzLkZyb21BcnJheShwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLmdlb21ldHJ5T3BhY2l0eSA9IHByb3BlcnRpZXMuYmFzZUNvbG9yRmFjdG9yWzNdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRhcHRlci5iYXNlQ29sb3IgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IG1ldGFsbGljIGFuZCByb3VnaG5lc3MgdXNpbmcgYWRhcHRlclxyXG4gICAgICAgICAgICBhZGFwdGVyLmJhc2VNZXRhbG5lc3MgPSBwcm9wZXJ0aWVzLm1ldGFsbGljRmFjdG9yID09IHVuZGVmaW5lZCA/IDEgOiBwcm9wZXJ0aWVzLm1ldGFsbGljRmFjdG9yO1xyXG4gICAgICAgICAgICBhZGFwdGVyLnNwZWN1bGFyUm91Z2huZXNzID0gcHJvcGVydGllcy5yb3VnaG5lc3NGYWN0b3IgPT0gdW5kZWZpbmVkID8gMSA6IHByb3BlcnRpZXMucm91Z2huZXNzRmFjdG9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuYmFzZUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2Jhc2VDb2xvclRleHR1cmVgLCBwcm9wZXJ0aWVzLmJhc2VDb2xvclRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoQmFzZSBDb2xvcilgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmJhc2VDb2xvclRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvcGVydGllcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlYCwgcHJvcGVydGllcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoTWV0YWxsaWMgUm91Z2huZXNzKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIuYmFzZU1ldGFsbmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLnNwZWN1bGFyUm91Z2huZXNzVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29uZmlndXJlIHRleHR1cmUgY2hhbm5lbCB1c2FnZSB1c2luZyBhZGFwdGVyXHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLnVzZVJvdWdobmVzc0Zyb21NZXRhbGxpY1RleHR1cmVHcmVlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLnVzZU1ldGFsbGljRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZE1hdGVyaWFsQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG1hdGVyaWFsOiBJTWF0ZXJpYWwsXHJcbiAgICAgICAgYmFieWxvbk1lc2g6IE51bGxhYmxlPE1lc2g+LFxyXG4gICAgICAgIGJhYnlsb25EcmF3TW9kZTogbnVtYmVyLFxyXG4gICAgICAgIGFzc2lnbjogKGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQgPSAoKSA9PiB7fVxyXG4gICAgKTogUHJvbWlzZTxNYXRlcmlhbD4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NZXNoLCBiYWJ5bG9uRHJhd01vZGUsIGFzc2lnbik7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXRlcmlhbC5fZGF0YSA9IG1hdGVyaWFsLl9kYXRhIHx8IHt9O1xyXG4gICAgICAgIGxldCBiYWJ5bG9uRGF0YSA9IG1hdGVyaWFsLl9kYXRhW2JhYnlsb25EcmF3TW9kZV07XHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH0gJHttYXRlcmlhbC5uYW1lIHx8IFwiXCJ9YCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSB0aGlzLmNyZWF0ZU1hdGVyaWFsKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG5cclxuICAgICAgICAgICAgYmFieWxvbkRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWw6IGJhYnlsb25NYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZTogdGhpcy5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBtYXRlcmlhbC5fZGF0YVtiYWJ5bG9uRHJhd01vZGVdID0gYmFieWxvbkRhdGE7XHJcblxyXG4gICAgICAgICAgICBHTFRGTG9hZGVyLkFkZFBvaW50ZXJNZXRhZGF0YShiYWJ5bG9uTWF0ZXJpYWwsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgYmFieWxvbkRhdGEuYmFieWxvbk1lc2hlcy5wdXNoKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGJhYnlsb25EYXRhLmJhYnlsb25NZXNoZXMuaW5kZXhPZihiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkRhdGEuYmFieWxvbk1lc2hlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzc2lnbihiYWJ5bG9uRGF0YS5iYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFieWxvbkRhdGEucHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25EYXRhLmJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVEZWZhdWx0TWF0ZXJpYWwobmFtZTogc3RyaW5nLCBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcik6IE1hdGVyaWFsIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Bick1hdGVyaWFsSW1wbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQQlIgTWF0ZXJpYWwgY2xhc3Mgbm90IGxvYWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IG5ldyB0aGlzLl9wYnJNYXRlcmlhbEltcGwubWF0ZXJpYWxDbGFzcyhuYW1lLCB0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuZmlsbE1vZGUgPSBiYWJ5bG9uRHJhd01vZGU7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSB0aGlzLl9wYnJNYXRlcmlhbEltcGwubWF0ZXJpYWxDbGFzcy5NQVRFUklBTF9PUEFRVUU7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBtYXRlcmlhbCBhZGFwdGVyIGFuZCBzZXQgc29tZSBkZWZhdWx0IHByb3BlcnRpZXMuXHJcbiAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byB3YWl0IGZvciB0aGUgcHJvbWlzZSB0byByZXNvbHZlIGhlcmUuXHJcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgYWRhcHRlci50cmFuc3BhcmVuY3lBc0FscGhhQ292ZXJhZ2UgPSB0aGlzLl9wYXJlbnQudHJhbnNwYXJlbmN5QXNDb3ZlcmFnZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgbWV0YWxsaWMgYW5kIHJvdWdobmVzcyB2YWx1ZXNcclxuICAgICAgICBhZGFwdGVyLmJhc2VNZXRhbG5lc3MgPSAxLjA7XHJcbiAgICAgICAgYWRhcHRlci5zcGVjdWxhclJvdWdobmVzcyA9IDEuMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25NYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBCYWJ5bG9uIG1hdGVyaWFsIGZyb20gYSBnbFRGIG1hdGVyaWFsLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIFRoZSBnbFRGIG1hdGVyaWFsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbkRyYXdNb2RlIFRoZSBkcmF3IG1vZGUgZm9yIHRoZSBCYWJ5bG9uIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlTWF0ZXJpYWwoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcik6IE1hdGVyaWFsIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25NYXRlcmlhbCA9IHRoaXMuX2V4dGVuc2lvbnNDcmVhdGVNYXRlcmlhbChjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvbk1hdGVyaWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG1hdGVyaWFsLm5hbWUgfHwgYG1hdGVyaWFsJHttYXRlcmlhbC5pbmRleH1gO1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2NyZWF0ZURlZmF1bHRNYXRlcmlhbChuYW1lLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgcHJvcGVydGllcyBmcm9tIGEgZ2xURiBtYXRlcmlhbCBpbnRvIGEgQmFieWxvbiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgZ2xURiBtYXRlcmlhbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCkpO1xyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkTWF0ZXJpYWxNZXRhbGxpY1JvdWdobmVzc1Byb3BlcnRpZXNBc3luYyhgJHtjb250ZXh0fS9wYnJNZXRhbGxpY1JvdWdobmVzc2AsIG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZE1hdGVyaWFsQWxwaGFQcm9wZXJ0aWVzKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgdGhlIG5vcm1hbCwgb2NjbHVzaW9uLCBhbmQgZW1pc3NpdmUgcHJvcGVydGllcyBmcm9tIGEgZ2xURiBtYXRlcmlhbCBpbnRvIGEgQmFieWxvbiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgZ2xURiBtYXRlcmlhbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsQmFzZVByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9nZXRPckNyZWF0ZU1hdGVyaWFsQWRhcHRlcihiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAvLyBTZXQgZW1pc3Npb24gY29sb3IgdXNpbmcgYWRhcHRlclxyXG4gICAgICAgIGFkYXB0ZXIuZW1pc3Npb25Db2xvciA9IG1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID8gQ29sb3IzLkZyb21BcnJheShtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvcikgOiBuZXcgQ29sb3IzKDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyBTZXQgZG91YmxlLXNpZGVkIHByb3BlcnRpZXMgdXNpbmcgYWRhcHRlclxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5kb3VibGVTaWRlZCkge1xyXG4gICAgICAgICAgICBhZGFwdGVyLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhZGFwdGVyLnR3b1NpZGVkTGlnaHRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLm5vcm1hbFRleHR1cmUpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9ub3JtYWxUZXh0dXJlYCwgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKE5vcm1hbClgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIuZ2VvbWV0cnlOb3JtYWxUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uc2NhbGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUubGV2ZWwgPSBtYXRlcmlhbC5ub3JtYWxUZXh0dXJlLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsIG1hcCBpbnZlcnNpb25zIHVzaW5nIGFkYXB0ZXJcclxuICAgICAgICAgICAgYWRhcHRlci5zZXROb3JtYWxNYXBJbnZlcnNpb25zKCF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0sIHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYW9UZXh0dXJlOiBCYXNlVGV4dHVyZTtcclxuICAgICAgICBsZXQgYW9TdHJlbmd0aDogbnVtYmVyID0gMS4wO1xyXG4gICAgICAgIGxldCBlbWlzc2lvblRleHR1cmU6IEJhc2VUZXh0dXJlO1xyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlLm5vbkNvbG9yRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L29jY2x1c2lvblRleHR1cmVgLCBtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmUubmFtZSA9IGAke2JhYnlsb25NYXRlcmlhbC5uYW1lfSAoT2NjbHVzaW9uKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYW9UZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGFvU3RyZW5ndGggPSBtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L2VtaXNzaXZlVGV4dHVyZWAsIG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEVtaXNzaXZlKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pc3Npb25UZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTZXQgYW1iaWVudCBvY2NsdXNpb24gYW5kIGVtaXNzaXZlIHRleHR1cmVzIHVzaW5nIGFkYXB0ZXJcclxuICAgICAgICAgICAgaWYgKGFvVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgYWRhcHRlci5hbWJpZW50T2NjbHVzaW9uVGV4dHVyZSA9IGFvVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIuYW1iaWVudE9jY2x1c2lvblRleHR1cmVTdHJlbmd0aCA9IGFvU3RyZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbWlzc2lvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIuZW1pc3Npb25Db2xvclRleHR1cmUgPSBlbWlzc2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBhbHBoYSBwcm9wZXJ0aWVzIGZyb20gYSBnbFRGIG1hdGVyaWFsIGludG8gYSBCYWJ5bG9uIG1hdGVyaWFsLlxyXG4gICAgICogTXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHNldHRpbmcgdGhlIGFsYmVkbyB0ZXh0dXJlIG9mIHRoZSBCYWJ5bG9uIG1hdGVyaWFsIHdoZW4gdGhlIG1hdGVyaWFsIGhhcyBhbiBhbGJlZG8gdGV4dHVyZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgZ2xURiBtYXRlcmlhbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NYXRlcmlhbCBUaGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsQWxwaGFQcm9wZXJ0aWVzKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fcGJyTWF0ZXJpYWxJbXBsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogTWF0ZXJpYWwgdHlwZSBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5fZ2V0T3JDcmVhdGVNYXRlcmlhbEFkYXB0ZXIoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICBjb25zdCBiYXNlQ29sb3JUZXh0dXJlID0gYWRhcHRlci5iYXNlQ29sb3JUZXh0dXJlO1xyXG5cclxuICAgICAgICBjb25zdCBhbHBoYU1vZGUgPSBtYXRlcmlhbC5hbHBoYU1vZGUgfHwgTWF0ZXJpYWxBbHBoYU1vZGUuT1BBUVVFO1xyXG4gICAgICAgIHN3aXRjaCAoYWxwaGFNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWxBbHBoYU1vZGUuT1BBUVVFOiB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwudHJhbnNwYXJlbmN5TW9kZSA9IHRoaXMuX3Bick1hdGVyaWFsSW1wbC5tYXRlcmlhbENsYXNzLk1BVEVSSUFMX09QQVFVRTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC5hbHBoYSA9IDEuMDsgLy8gRm9yY2UgYWxwaGEgdG8gMS4wIGZvciBvcGFxdWUgbW9kZS5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWxBbHBoYU1vZGUuTUFTSzoge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSB0aGlzLl9wYnJNYXRlcmlhbEltcGwubWF0ZXJpYWxDbGFzcy5NQVRFUklBTF9BTFBIQVRFU1Q7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLmFscGhhQ3V0T2ZmID0gbWF0ZXJpYWwuYWxwaGFDdXRvZmYgPT0gdW5kZWZpbmVkID8gMC41IDogbWF0ZXJpYWwuYWxwaGFDdXRvZmY7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZUNvbG9yVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvclRleHR1cmUuaGFzQWxwaGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBNYXRlcmlhbEFscGhhTW9kZS5CTEVORDoge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSB0aGlzLl9wYnJNYXRlcmlhbEltcGwubWF0ZXJpYWxDbGFzcy5NQVRFUklBTF9BTFBIQUJMRU5EO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JUZXh0dXJlLmhhc0FscGhhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLnVzZUFscGhhRnJvbUJhc2VDb2xvclRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L2FscGhhTW9kZTogSW52YWxpZCB2YWx1ZSAoJHttYXRlcmlhbC5hbHBoYU1vZGV9KWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIHRleHR1cmUgaW5mby5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlSW5mbyBUaGUgZ2xURiB0ZXh0dXJlIGluZm8gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBhc3NpZ24gQSBmdW5jdGlvbiBjYWxsZWQgc3luY2hyb25vdXNseSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXNcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBCYWJ5bG9uIHRleHR1cmUgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFRleHR1cmVJbmZvQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQsIHRleHR1cmVJbmZvLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9YCk7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlSW5mby50ZXhDb29yZCEgPj0gNikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vdGV4Q29vcmQ6IEludmFsaWQgdmFsdWUgKCR7dGV4dHVyZUluZm8udGV4Q29vcmR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vaW5kZXhgLCB0aGlzLl9nbHRmLnRleHR1cmVzLCB0ZXh0dXJlSW5mby5pbmRleCk7XHJcbiAgICAgICAgdGV4dHVyZS5fdGV4dHVyZUluZm8gPSB0ZXh0dXJlSW5mbztcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuX2xvYWRUZXh0dXJlQXN5bmMoYC90ZXh0dXJlcy8ke3RleHR1cmVJbmZvLmluZGV4fWAsIHRleHR1cmUsIChiYWJ5bG9uVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS5jb29yZGluYXRlc0luZGV4ID0gdGV4dHVyZUluZm8udGV4Q29vcmQgfHwgMDtcclxuICAgICAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvblRleHR1cmUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICBhc3NpZ24oYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmU6IElUZXh0dXJlLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRUZXh0dXJlQXN5bmMoY29udGV4dCwgdGV4dHVyZSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke3RleHR1cmUubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVyID0gdGV4dHVyZS5zYW1wbGVyID09IHVuZGVmaW5lZCA/IEdMVEZMb2FkZXIuRGVmYXVsdFNhbXBsZXIgOiBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NhbXBsZXJgLCB0aGlzLl9nbHRmLnNhbXBsZXJzLCB0ZXh0dXJlLnNhbXBsZXIpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zb3VyY2VgLCB0aGlzLl9nbHRmLmltYWdlcywgdGV4dHVyZS5zb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9jcmVhdGVUZXh0dXJlQXN5bmMoY29udGV4dCwgc2FtcGxlciwgaW1hZ2UsIGFzc2lnbiwgdW5kZWZpbmVkLCAhdGV4dHVyZS5fdGV4dHVyZUluZm8ubm9uQ29sb3JEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2NyZWF0ZVRleHR1cmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgc2FtcGxlcjogSVNhbXBsZXIsXHJcbiAgICAgICAgaW1hZ2U6IElJbWFnZSxcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQgPSAoKSA9PiB7fSxcclxuICAgICAgICB0ZXh0dXJlTG9hZGVyT3B0aW9ucz86IHVua25vd24sXHJcbiAgICAgICAgdXNlU1JHQkJ1ZmZlcj86IGJvb2xlYW5cclxuICAgICk6IFByb21pc2U8QmFzZVRleHR1cmU+IHtcclxuICAgICAgICBjb25zdCBzYW1wbGVyRGF0YSA9IHRoaXMuX2xvYWRTYW1wbGVyKGAvc2FtcGxlcnMvJHtzYW1wbGVyLmluZGV4fWAsIHNhbXBsZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZDx2b2lkPigpO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlQ3JlYXRpb25PcHRpb25zOiBJVGV4dHVyZUNyZWF0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbm9NaXBtYXA6IHNhbXBsZXJEYXRhLm5vTWlwTWFwcyxcclxuICAgICAgICAgICAgaW52ZXJ0WTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNhbXBsaW5nTW9kZTogc2FtcGxlckRhdGEuc2FtcGxpbmdNb2RlLFxyXG4gICAgICAgICAgICBvbkxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3I6IChtZXNzYWdlPzogc3RyaW5nLCBleGNlcHRpb24/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKGAke2NvbnRleHR9OiAke2V4Y2VwdGlvbiAmJiBleGNlcHRpb24ubWVzc2FnZSA/IGV4Y2VwdGlvbi5tZXNzYWdlIDogbWVzc2FnZSB8fCBcIkZhaWxlZCB0byBsb2FkIHRleHR1cmVcIn1gKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1pbWVUeXBlOiBpbWFnZS5taW1lVHlwZSA/PyBHZXRNaW1lVHlwZShpbWFnZS51cmkgPz8gXCJcIiksXHJcbiAgICAgICAgICAgIGxvYWRlck9wdGlvbnM6IHRleHR1cmVMb2FkZXJPcHRpb25zLFxyXG4gICAgICAgICAgICB1c2VTUkdCQnVmZmVyOiAhIXVzZVNSR0JCdWZmZXIgJiYgdGhpcy5fcGFyZW50LnVzZVNSR0JCdWZmZXJzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYmFieWxvblRleHR1cmUgPSBuZXcgVGV4dHVyZShudWxsLCB0aGlzLl9iYWJ5bG9uU2NlbmUsIHRleHR1cmVDcmVhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIGJhYnlsb25UZXh0dXJlLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goZGVmZXJyZWQucHJvbWlzZSk7XHJcblxyXG4gICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMubG9hZEltYWdlQXN5bmMoYC9pbWFnZXMvJHtpbWFnZS5pbmRleH1gLCBpbWFnZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGltYWdlLnVyaSB8fCBgJHt0aGlzLl9maWxlTmFtZX0jaW1hZ2Uke2ltYWdlLmluZGV4fWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVXJsID0gYGRhdGE6JHt0aGlzLl91bmlxdWVSb290VXJsfSR7bmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvblRleHR1cmUudXBkYXRlVVJMKGRhdGFVcmwsIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgdGV4dHVyZSBsYWJlbC5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGludGVybmFsVGV4dHVyZSA9IGJhYnlsb25UZXh0dXJlLmdldEludGVybmFsVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsVGV4dHVyZS5sYWJlbCA9IGltYWdlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYmFieWxvblRleHR1cmUud3JhcFUgPSBzYW1wbGVyRGF0YS53cmFwVTtcclxuICAgICAgICBiYWJ5bG9uVGV4dHVyZS53cmFwViA9IHNhbXBsZXJEYXRhLndyYXBWO1xyXG4gICAgICAgIGFzc2lnbihiYWJ5bG9uVGV4dHVyZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQudXNlR2x0ZlRleHR1cmVOYW1lcykge1xyXG4gICAgICAgICAgICBiYWJ5bG9uVGV4dHVyZS5uYW1lID0gaW1hZ2UubmFtZSB8fCBpbWFnZS51cmkgfHwgYGltYWdlJHtpbWFnZS5pbmRleH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25UZXh0dXJlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRTYW1wbGVyKGNvbnRleHQ6IHN0cmluZywgc2FtcGxlcjogSVNhbXBsZXIpOiBfSVNhbXBsZXJEYXRhIHtcclxuICAgICAgICBpZiAoIXNhbXBsZXIuX2RhdGEpIHtcclxuICAgICAgICAgICAgc2FtcGxlci5fZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG5vTWlwTWFwczogc2FtcGxlci5taW5GaWx0ZXIgPT09IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVCB8fCBzYW1wbGVyLm1pbkZpbHRlciA9PT0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVIsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGluZ01vZGU6IEdMVEZMb2FkZXIuX0dldFRleHR1cmVTYW1wbGluZ01vZGUoY29udGV4dCwgc2FtcGxlciksXHJcbiAgICAgICAgICAgICAgICB3cmFwVTogR0xURkxvYWRlci5fR2V0VGV4dHVyZVdyYXBNb2RlKGAke2NvbnRleHR9L3dyYXBTYCwgc2FtcGxlci53cmFwUyksXHJcbiAgICAgICAgICAgICAgICB3cmFwVjogR0xURkxvYWRlci5fR2V0VGV4dHVyZVdyYXBNb2RlKGAke2NvbnRleHR9L3dyYXBUYCwgc2FtcGxlci53cmFwVCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlci5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBpbWFnZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBpbWFnZSBUaGUgZ2xURiBpbWFnZSBwcm9wZXJ0eVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEltYWdlQXN5bmMoY29udGV4dDogc3RyaW5nLCBpbWFnZTogSUltYWdlKTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBpZiAoIWltYWdlLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke2ltYWdlLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbWFnZS51cmkpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLl9kYXRhID0gdGhpcy5sb2FkVXJpQXN5bmMoYCR7Y29udGV4dH0vdXJpYCwgaW1hZ2UsIGltYWdlLnVyaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgaW1hZ2UuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5fZGF0YSA9IHRoaXMubG9hZEJ1ZmZlclZpZXdBc3luYyhgL2J1ZmZlclZpZXdzLyR7YnVmZmVyVmlldy5pbmRleH1gLCBidWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGltYWdlLl9kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIHVyaS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgZ2xURiBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggdGhlIHVyaVxyXG4gICAgICogQHBhcmFtIHVyaSBUaGUgYmFzZTY0IG9yIHJlbGF0aXZlIHVyaVxyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIGRhdGEgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFVyaUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydHk6IElQcm9wZXJ0eSwgdXJpOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZFVyaUFzeW5jKGNvbnRleHQsIHByb3BlcnR5LCB1cmkpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFHTFRGTG9hZGVyLl9WYWxpZGF0ZVVyaSh1cmkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogJyR7dXJpfScgaXMgaW52YWxpZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKElzQmFzZTY0RGF0YVVybCh1cmkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeSh1cmkpKTtcclxuICAgICAgICAgICAgdGhpcy5sb2coYCR7Y29udGV4dH06IERlY29kZWQgJHt1cmkuc3Vic3RyaW5nKDAsIDY0KX0uLi4gKCR7ZGF0YS5sZW5ndGh9IGJ5dGVzKWApO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2coYCR7Y29udGV4dH06IExvYWRpbmcgJHt1cml9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQucHJlcHJvY2Vzc1VybEFzeW5jKHRoaXMuX3Jvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2FkRmlsZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKGAke2NvbnRleHR9OiBMb2FkZWQgJHt1cml9ICgkeyhkYXRhIGFzIEFycmF5QnVmZmVyKS5ieXRlTGVuZ3RofSBieXRlcylgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkoZGF0YSBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTG9hZEZpbGVFcnJvcihgJHtjb250ZXh0fTogRmFpbGVkIHRvIGxvYWQgJyR7dXJpfScke3JlcXVlc3QgPyBcIjogXCIgKyByZXF1ZXN0LnN0YXR1cyArIFwiIFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0IDogXCJcIn1gLCByZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgSlNPTiBwb2ludGVyIHRvIHRoZSBfaW50ZXJuYWxNZXRhZGF0YSBvZiB0aGUgQmFieWxvbiBvYmplY3QgYXQgYDxvYmplY3Q+Ll9pbnRlcm5hbE1ldGFkYXRhLmdsdGYucG9pbnRlcnNgLlxyXG4gICAgICogQHBhcmFtIGJhYnlsb25PYmplY3QgdGhlIEJhYnlsb24gb2JqZWN0IHdpdGggX2ludGVybmFsTWV0YWRhdGFcclxuICAgICAqIEBwYXJhbSBwb2ludGVyIHRoZSBKU09OIHBvaW50ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbk9iamVjdDogSVdpdGhNZXRhZGF0YSwgcG9pbnRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgYmFieWxvbk9iamVjdC5tZXRhZGF0YSA9IGJhYnlsb25PYmplY3QubWV0YWRhdGEgfHwge307XHJcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSAoYmFieWxvbk9iamVjdC5faW50ZXJuYWxNZXRhZGF0YSA9IGJhYnlsb25PYmplY3QuX2ludGVybmFsTWV0YWRhdGEgfHwge30pO1xyXG4gICAgICAgIGNvbnN0IGdsdGYgPSAobWV0YWRhdGEuZ2x0ZiA9IG1ldGFkYXRhLmdsdGYgfHwge30pO1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXJzID0gKGdsdGYucG9pbnRlcnMgPSBnbHRmLnBvaW50ZXJzIHx8IFtdKTtcclxuICAgICAgICBwb2ludGVycy5wdXNoKHBvaW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUZXh0dXJlV3JhcE1vZGUoY29udGV4dDogc3RyaW5nLCBtb2RlOiBUZXh0dXJlV3JhcE1vZGUgfCB1bmRlZmluZWQpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cyBpZiB1bmRlZmluZWRcclxuICAgICAgICBtb2RlID0gbW9kZSA9PSB1bmRlZmluZWQgPyBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUIDogbW9kZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlV3JhcE1vZGUuTUlSUk9SRURfUkVQRUFUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTUlSUk9SX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmVXcmFwTW9kZS5SRVBFQVQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH06IEludmFsaWQgdmFsdWUgKCR7bW9kZX0pYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0VGV4dHVyZVNhbXBsaW5nTW9kZShjb250ZXh0OiBzdHJpbmcsIHNhbXBsZXI6IElTYW1wbGVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBTZXQgZGVmYXVsdHMgaWYgdW5kZWZpbmVkXHJcbiAgICAgICAgY29uc3QgbWFnRmlsdGVyID0gc2FtcGxlci5tYWdGaWx0ZXIgPT0gdW5kZWZpbmVkID8gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVIgOiBzYW1wbGVyLm1hZ0ZpbHRlcjtcclxuICAgICAgICBjb25zdCBtaW5GaWx0ZXIgPSBzYW1wbGVyLm1pbkZpbHRlciA9PSB1bmRlZmluZWQgPyBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSIDogc2FtcGxlci5taW5GaWx0ZXI7XHJcblxyXG4gICAgICAgIGlmIChtYWdGaWx0ZXIgPT09IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWluRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9MSU5FQVJfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fS9taW5GaWx0ZXI6IEludmFsaWQgdmFsdWUgKCR7bWluRmlsdGVyfSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUExJTkVBUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChtYWdGaWx0ZXIgIT09IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vbWFnRmlsdGVyOiBJbnZhbGlkIHZhbHVlICgke21hZ0ZpbHRlcn0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobWluRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTElORUFSO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBMSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9MSU5FQVJfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fS9taW5GaWx0ZXI6IEludmFsaWQgdmFsdWUgKCR7bWluRmlsdGVyfSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTkVBUkVTVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGNvbnRleHQ6IHN0cmluZywgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlKTogVHlwZWRBcnJheUNvbnN0cnVjdG9yIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGNvbXBvbmVudFR5cGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFR5cGVkQXJyYXkoY29udGV4dDogc3RyaW5nLCBjb21wb25lbnRUeXBlOiBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIGJ1ZmZlclZpZXc6IEFycmF5QnVmZmVyVmlldywgYnl0ZU9mZnNldDogbnVtYmVyIHwgdW5kZWZpbmVkLCBsZW5ndGg6IG51bWJlcik6IFR5cGVkQXJyYXkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGJ1ZmZlclZpZXcuYnVmZmVyO1xyXG4gICAgICAgIGJ5dGVPZmZzZXQgPSBidWZmZXJWaWV3LmJ5dGVPZmZzZXQgKyAoYnl0ZU9mZnNldCB8fCAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5Q29uc3RydWN0b3IoYCR7Y29udGV4dH0vY29tcG9uZW50VHlwZWAsIGNvbXBvbmVudFR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnRUeXBlTGVuZ3RoID0gVmVydGV4QnVmZmVyLkdldFR5cGVCeXRlTGVuZ3RoKGNvbXBvbmVudFR5cGUpO1xyXG4gICAgICAgIGlmIChieXRlT2Zmc2V0ICUgY29tcG9uZW50VHlwZUxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBIQUNLOiBDb3B5IHRoZSBidWZmZXIgaWYgYnl0ZSBvZmZzZXQgaXMgbm90IGEgbXVsdGlwbGUgb2YgY29tcG9uZW50IHR5cGUgYnl0ZSBsZW5ndGguXHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBDb3B5aW5nIGJ1ZmZlciBhcyBieXRlIG9mZnNldCAoJHtieXRlT2Zmc2V0fSkgaXMgbm90IGEgbXVsdGlwbGUgb2YgY29tcG9uZW50IHR5cGUgYnl0ZSBsZW5ndGggKCR7Y29tcG9uZW50VHlwZUxlbmd0aH0pYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoYnVmZmVyLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBsZW5ndGggKiBjb21wb25lbnRUeXBlTGVuZ3RoKSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKGJ1ZmZlciwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0TnVtQ29tcG9uZW50cyhjb250ZXh0OiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTQ0FMQVJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDMlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUMzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUMlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gOTtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCB0eXBlICgke3R5cGV9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9WYWxpZGF0ZVVyaSh1cmk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBUb29scy5Jc0Jhc2U2NCh1cmkpIHx8IHVyaS5pbmRleE9mKFwiLi5cIikgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0dldERyYXdNb2RlKGNvbnRleHQ6IHN0cmluZywgbW9kZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAobW9kZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW9kZSA9IE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLlBPSU5UUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5Qb2ludExpc3REcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5MaW5lTGlzdERyYXdNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVfTE9PUDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5MaW5lTG9vcERyYXdNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVfU1RSSVA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuTGluZVN0cmlwRHJhd01vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVTOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuVFJJQU5HTEVfU1RSSVA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX0ZBTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5UcmlhbmdsZUZhbkRyYXdNb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBJbnZhbGlkIG1lc2ggcHJpbWl0aXZlIG1vZGUgKCR7bW9kZX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29tcGlsZU1hdGVyaWFsc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIG1hdGVyaWFsc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgdGhpcy5fZ2x0Zi5tYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbC5fZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbkRyYXdNb2RlIGluIG1hdGVyaWFsLl9kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25EYXRhID0gbWF0ZXJpYWwuX2RhdGFbYmFieWxvbkRyYXdNb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWVzaCBvZiBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgbm9uVW5pZm9ybVNjYWxpbmcgaXMgc2V0IGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLmNvbXB1dGVXb3JsZE1hdHJpeCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goYmFieWxvbk1hdGVyaWFsLmZvcmNlQ29tcGlsYXRpb25Bc3luYyhiYWJ5bG9uTWVzaCwgeyB1c2VJbnN0YW5jZXM6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC51c2VDbGlwUGxhbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gsIHsgY2xpcFBsYW5lOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gsIHsgY2xpcFBsYW5lOiB0cnVlLCB1c2VJbnN0YW5jZXM6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIkNvbXBpbGUgbWF0ZXJpYWxzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXBpbGVTaGFkb3dHZW5lcmF0b3JzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihcIkNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IHRoaXMuX2JhYnlsb25TY2VuZS5saWdodHM7XHJcbiAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiBsaWdodHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdG9yID0gbGlnaHQuZ2V0U2hhZG93R2VuZXJhdG9yKCk7XHJcbiAgICAgICAgICAgIGlmIChnZW5lcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZ2VuZXJhdG9yLmZvcmNlQ29tcGlsYXRpb25Bc3luYygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIHNoYWRvdyBnZW5lcmF0b3JzXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZvckVhY2hFeHRlbnNpb25zKGFjdGlvbjogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbiBvZiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXBwbHlFeHRlbnNpb25zPFQ+KHByb3BlcnR5OiBJUHJvcGVydHksIGZ1bmN0aW9uTmFtZTogc3RyaW5nLCBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IE51bGxhYmxlPFQ+IHwgdW5kZWZpbmVkKTogTnVsbGFibGU8VD4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uIG9mIHRoaXMuX2V4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGAke2V4dGVuc2lvbi5uYW1lfS4ke2Z1bmN0aW9uTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGVyUHJvcGVydHkgPSBwcm9wZXJ0eSBhcyBJTG9hZGVyUHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICBsb2FkZXJQcm9wZXJ0eS5fYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zID0gbG9hZGVyUHJvcGVydHkuX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9ucyB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9ucyA9IGxvYWRlclByb3BlcnR5Ll9hY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uc1tpZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnNbaWRdID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYWN0aW9uQXN5bmMoZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc09uTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb3JFYWNoRXh0ZW5zaW9ucygoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ub25Mb2FkaW5nICYmIGV4dGVuc2lvbi5vbkxvYWRpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc09uUmVhZHkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZm9yRWFjaEV4dGVuc2lvbnMoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLm9uUmVhZHkgJiYgZXh0ZW5zaW9uLm9uUmVhZHkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFNjZW5lQXN5bmMoY29udGV4dDogc3RyaW5nLCBzY2VuZTogSVNjZW5lKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoc2NlbmUsIFwibG9hZFNjZW5lXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkU2NlbmVBc3luYyAmJiBleHRlbnNpb24ubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkTm9kZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMobm9kZSwgXCJsb2FkTm9kZVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZE5vZGVBc3luYyAmJiBleHRlbnNpb24ubG9hZE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCBhc3NpZ24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkQ2FtZXJhQXN5bmMoY29udGV4dDogc3RyaW5nLCBjYW1lcmE6IElDYW1lcmEsIGFzc2lnbjogKGJhYnlsb25DYW1lcmE6IENhbWVyYSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8Q2FtZXJhPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoY2FtZXJhLCBcImxvYWRDYW1lcmFcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRDYW1lcmFBc3luYyAmJiBleHRlbnNpb24ubG9hZENhbWVyYUFzeW5jKGNvbnRleHQsIGNhbWVyYSwgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoKTogTnVsbGFibGU8UHJvbWlzZTxHZW9tZXRyeT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHByaW1pdGl2ZSwgXCJsb2FkVmVydGV4RGF0YVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRWZXJ0ZXhEYXRhQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkVmVydGV4RGF0YUFzeW5jKGNvbnRleHQsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkTWVzaFByaW1pdGl2ZUFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgbm9kZTogSU5vZGUsXHJcbiAgICAgICAgbWVzaDogSU1lc2gsXHJcbiAgICAgICAgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSxcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWVzaDogQWJzdHJhY3RNZXNoKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPEFic3RyYWN0TWVzaD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBwcmltaXRpdmUsXHJcbiAgICAgICAgICAgIFwibG9hZE1lc2hQcmltaXRpdmVcIixcclxuICAgICAgICAgICAgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkTWVzaFByaW1pdGl2ZUFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyhjb250ZXh0LCBuYW1lLCBub2RlLCBtZXNoLCBwcmltaXRpdmUsIGFzc2lnbilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBtYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPixcclxuICAgICAgICBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcixcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPE1hdGVyaWFsPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLFxyXG4gICAgICAgICAgICBcImxvYWRNYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRNYXRlcmlhbEFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZE1hdGVyaWFsQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NZXNoLCBiYWJ5bG9uRHJhd01vZGUsIGFzc2lnbilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNDcmVhdGVNYXRlcmlhbChjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZTogbnVtYmVyKTogTnVsbGFibGU8TWF0ZXJpYWw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG1hdGVyaWFsLCBcImNyZWF0ZU1hdGVyaWFsXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5jcmVhdGVNYXRlcmlhbCAmJiBleHRlbnNpb24uY3JlYXRlTWF0ZXJpYWwoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgbWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIFwibG9hZE1hdGVyaWFsUHJvcGVydGllc1wiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jICYmIGV4dGVuc2lvbi5sb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkKTogTnVsbGFibGU8UHJvbWlzZTxCYXNlVGV4dHVyZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHRleHR1cmVJbmZvLCBcImxvYWRUZXh0dXJlSW5mb1wiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZFRleHR1cmVJbmZvQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQsIHRleHR1cmVJbmZvLCBhc3NpZ24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZTogSVRleHR1cmUsIGFzc2lnbjogKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyh0ZXh0dXJlLCBcImxvYWRUZXh0dXJlXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZFRleHR1cmVBc3luYyAmJiBleHRlbnNpb24uX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dCwgdGV4dHVyZSwgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZEFuaW1hdGlvbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgYW5pbWF0aW9uOiBJQW5pbWF0aW9uKTogTnVsbGFibGU8UHJvbWlzZTxBbmltYXRpb25Hcm91cD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKGFuaW1hdGlvbiwgXCJsb2FkQW5pbWF0aW9uXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkQW5pbWF0aW9uQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0LCBhbmltYXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsLFxyXG4gICAgICAgIG9uTG9hZDogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICBcImxvYWRBbmltYXRpb25DaGFubmVsXCIsXHJcbiAgICAgICAgICAgIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyAmJiBleHRlbnNpb24uX2xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uQ29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCBvbkxvYWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkU2tpbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgbm9kZTogSU5vZGUsIHNraW46IElTa2luKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoc2tpbiwgXCJsb2FkU2tpblwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRTa2luQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkU2tpbkFzeW5jKGNvbnRleHQsIG5vZGUsIHNraW4pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkVXJpQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcm9wZXJ0eTogSVByb3BlcnR5LCB1cmk6IHN0cmluZyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMocHJvcGVydHksIFwibG9hZFVyaVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRVcmlBc3luYyAmJiBleHRlbnNpb24uX2xvYWRVcmlBc3luYyhjb250ZXh0LCBwcm9wZXJ0eSwgdXJpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogTnVsbGFibGU8UHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhidWZmZXJWaWV3LCBcImxvYWRCdWZmZXJWaWV3XCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkQnVmZmVyVmlld0FzeW5jICYmIGV4dGVuc2lvbi5sb2FkQnVmZmVyVmlld0FzeW5jKGNvbnRleHQsIGJ1ZmZlclZpZXcpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkQnVmZmVyQXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXI6IElCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogTnVsbGFibGU8UHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhidWZmZXIsIFwibG9hZEJ1ZmZlclwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZEJ1ZmZlckFzeW5jICYmIGV4dGVuc2lvbi5sb2FkQnVmZmVyQXN5bmMoY29udGV4dCwgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGNhbGxlZCBieSBhIGxvYWRlciBleHRlbnNpb24gdG8gbG9hZCBhbiBnbFRGIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgZ2xURiBwcm9wZXJ0eSB0byBsb2FkIHRoZSBleHRlbnNpb24gZnJvbVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uQXN5bmMgVGhlIGFjdGlvbiB0byBydW5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IGFjdGlvbkFzeW5jIG9yIG51bGwgaWYgdGhlIGV4dGVuc2lvbiBkb2VzIG5vdCBleGlzdFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkRXh0ZW5zaW9uQXN5bmM8VEV4dGVuc2lvbiA9IHVua25vd24sIFRSZXN1bHQgPSB2b2lkPihcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgcHJvcGVydHk6IElQcm9wZXJ0eSxcclxuICAgICAgICBleHRlbnNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgYWN0aW9uQXN5bmM6IChleHRlbnNpb25Db250ZXh0OiBzdHJpbmcsIGV4dGVuc2lvbjogVEV4dGVuc2lvbikgPT4gTnVsbGFibGU8UHJvbWlzZTxUUmVzdWx0Pj5cclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+IHtcclxuICAgICAgICBpZiAoIXByb3BlcnR5LmV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gcHJvcGVydHkuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXSBhcyBURXh0ZW5zaW9uO1xyXG4gICAgICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbkFzeW5jKGAke2NvbnRleHR9L2V4dGVuc2lvbnMvJHtleHRlbnNpb25OYW1lfWAsIGV4dGVuc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGNhbGxlZCBieSBhIGxvYWRlciBleHRlbnNpb24gdG8gbG9hZCBhIGdsVEYgZXh0cmEuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIGdsVEYgcHJvcGVydHkgdG8gbG9hZCB0aGUgZXh0cmEgZnJvbVxyXG4gICAgICogQHBhcmFtIGV4dGVuc2lvbk5hbWUgVGhlIG5hbWUgb2YgdGhlIGV4dGVuc2lvbiB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uQXN5bmMgVGhlIGFjdGlvbiB0byBydW5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IGFjdGlvbkFzeW5jIG9yIG51bGwgaWYgdGhlIGV4dHJhIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRFeHRyYUFzeW5jPFRFeHRyYSA9IHVua25vd24sIFRSZXN1bHQgPSB2b2lkPihcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgcHJvcGVydHk6IElQcm9wZXJ0eSxcclxuICAgICAgICBleHRlbnNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgYWN0aW9uQXN5bmM6IChleHRyYUNvbnRleHQ6IHN0cmluZywgZXh0cmE6IFRFeHRyYSkgPT4gTnVsbGFibGU8UHJvbWlzZTxUUmVzdWx0Pj5cclxuICAgICk6IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+IHtcclxuICAgICAgICBpZiAoIXByb3BlcnR5LmV4dHJhcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dHJhcyA9IHByb3BlcnR5LmV4dHJhcztcclxuXHJcbiAgICAgICAgY29uc3QgZXh0cmEgPSBleHRyYXNbZXh0ZW5zaW9uTmFtZV0gYXMgVEV4dHJhO1xyXG4gICAgICAgIGlmICghZXh0cmEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWN0aW9uQXN5bmMoYCR7Y29udGV4dH0vZXh0cmFzLyR7ZXh0ZW5zaW9uTmFtZX1gLCBleHRyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgZm9yIHByZXNlbmNlIG9mIGFuIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIEEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoZSBwcmVzZW5jZSBvZiB0aGUgZ2l2ZW4gZXh0ZW5zaW9uIG5hbWUgaW4gYGV4dGVuc2lvbnNVc2VkYFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNFeHRlbnNpb25Vc2VkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2dsdGYuZXh0ZW5zaW9uc1VzZWQgJiYgdGhpcy5fZ2x0Zi5leHRlbnNpb25zVXNlZC5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluY3JlbWVudHMgdGhlIGluZGVudGF0aW9uIGxldmVsIGFuZCBsb2dzIGEgbWVzc2FnZS5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX2xvZ09wZW4obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyZW1lbnRzIHRoZSBpbmRlbnRhdGlvbiBsZXZlbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fbG9nQ2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3MgYSBtZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2dcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX2xvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBhIHBlcmZvcm1hbmNlIGNvdW50ZXIuXHJcbiAgICAgKiBAcGFyYW0gY291bnRlck5hbWUgVGhlIG5hbWUgb2YgdGhlIHBlcmZvcm1hbmNlIGNvdW50ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGNvdW50ZXJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuZHMgYSBwZXJmb3JtYW5jZSBjb3VudGVyLlxyXG4gICAgICogQHBhcmFtIGNvdW50ZXJOYW1lIFRoZSBuYW1lIG9mIHRoZSBwZXJmb3JtYW5jZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKGNvdW50ZXJOYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuR0xURkZpbGVMb2FkZXIuX0NyZWF0ZUdMVEYyTG9hZGVyID0gKHBhcmVudCkgPT4gbmV3IEdMVEZMb2FkZXIocGFyZW50KTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgZ2l0aHViL25vLXRoZW4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuaW1wb3J0IHR5cGUgKiBhcyBHTFRGMiBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE9ic2VydmVyIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlclBsdWdpbkZhY3RvcnksIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50LCBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCwgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUsIElEaXNwb3NhYmxlIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBXZWJSZXF1ZXN0IH0gZnJvbSBcImNvcmUvTWlzYy93ZWJSZXF1ZXN0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUZpbGVSZXF1ZXN0IH0gZnJvbSBcImNvcmUvTWlzYy9maWxlUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RhdGFSZWFkZXJcIjtcclxuaW1wb3J0IHsgR0xURlZhbGlkYXRpb24gfSBmcm9tIFwiLi9nbFRGVmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBHTFRGRmlsZUxvYWRlck1ldGFkYXRhLCBHTFRGTWFnaWNCYXNlNjRFbmNvZGVkIH0gZnJvbSBcIi4vZ2xURkZpbGVMb2FkZXIubWV0YWRhdGFcIjtcclxuaW1wb3J0IHR5cGUgeyBMb2FkRmlsZUVycm9yIH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBSdW50aW1lRXJyb3IsIEVycm9yQ29kZXMgfSBmcm9tIFwiY29yZS9NaXNjL2Vycm9yXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgTW9ycGhUYXJnZXRNYW5hZ2VyIH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBvcHRpb25zIGZvciBnbFRGIGxvYWRlciBleHRlbnNpb25zLiBUaGlzIGludGVyZmFjZSBpcyBleHRlbmRlZCBieSBzcGVjaWZpYyBleHRlbnNpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyBleHRlbmRzIFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkPiB7fVxyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvY1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIGdsVEYgbG9hZGVyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFtHTFRGRmlsZUxvYWRlck1ldGFkYXRhLm5hbWVdOiBQYXJ0aWFsPEdMVEZMb2FkZXJPcHRpb25zPjtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIElGaWxlUmVxdWVzdEluZm8gZXh0ZW5kcyBJRmlsZVJlcXVlc3Qge1xyXG4gICAgX2xlbmd0aENvbXB1dGFibGU/OiBib29sZWFuO1xyXG4gICAgX2xvYWRlZD86IG51bWJlcjtcclxuICAgIF90b3RhbD86IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZEFzeW5jKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZFZpZXdBc3luYyhhcnJheUJ1ZmZlclZpZXc6IEFycmF5QnVmZmVyVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGJ5dGVPZmZzZXQgPj0gYXJyYXlCdWZmZXJWaWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJPZmZzZXQgaXMgb3V0IG9mIHJhbmdlLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCA+IGFycmF5QnVmZmVyVmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTGVuZ3RoIGlzIG91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyVmlldy5idWZmZXIsIGFycmF5QnVmZmVyVmlldy5ieXRlT2Zmc2V0ICsgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vZGUgdGhhdCBkZXRlcm1pbmVzIHRoZSBjb29yZGluYXRlIHN5c3RlbSB0byB1c2UuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGNvbnZlcnQgdGhlIGdsVEYgcmlnaHQtaGFuZGVkIGRhdGEgdG8gdGhlIGFwcHJvcHJpYXRlIHN5c3RlbSBiYXNlZCBvbiB0aGUgY3VycmVudCBjb29yZGluYXRlIHN5c3RlbSBtb2RlIG9mIHRoZSBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgQVVUTyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHVzZVJpZ2h0SGFuZGVkU3lzdGVtIGZsYWcgb24gdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBGT1JDRV9SSUdIVF9IQU5ERUQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb2RlIHRoYXQgZGV0ZXJtaW5lcyB3aGF0IGFuaW1hdGlvbnMgd2lsbCBzdGFydC5cclxuICovXHJcbmV4cG9ydCBlbnVtIEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBObyBhbmltYXRpb24gd2lsbCBzdGFydC5cclxuICAgICAqL1xyXG4gICAgTk9ORSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmaXJzdCBhbmltYXRpb24gd2lsbCBzdGFydC5cclxuICAgICAqL1xyXG4gICAgRklSU1QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgYW5pbWF0aW9ucyB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBBTEwsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGdsVEYgYXNzZXQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTG9hZGVyRGF0YSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBnbFRGIEpTT04uXHJcbiAgICAgKi9cclxuICAgIGpzb246IG9iamVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBCSU4gY2h1bmsgb2YgYSBiaW5hcnkgZ2xURi5cclxuICAgICAqL1xyXG4gICAgYmluOiBOdWxsYWJsZTxJRGF0YUJ1ZmZlcj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGV4dGVuZGluZyB0aGUgbG9hZGVyLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxvYWRlckV4dGVuc2lvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIG9yZGVyIG9mIHRoaXMgZXh0ZW5zaW9uLlxyXG4gICAgICogVGhlIGxvYWRlciBzb3J0cyB0aGUgZXh0ZW5zaW9ucyB1c2luZyB0aGVzZSB2YWx1ZXMgd2hlbiBsb2FkaW5nLlxyXG4gICAgICovXHJcbiAgICBvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIExvYWRlciBzdGF0ZS5cclxuICovXHJcbmV4cG9ydCBlbnVtIEdMVEZMb2FkZXJTdGF0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldCBpcyBsb2FkaW5nLlxyXG4gICAgICovXHJcbiAgICBMT0FESU5HLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0IGlzIHJlYWR5IGZvciByZW5kZXJpbmcuXHJcbiAgICAgKi9cclxuICAgIFJFQURZLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLlxyXG4gICAgICovXHJcbiAgICBDT01QTEVURSxcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTG9hZGVyIGV4dGVuZHMgSURpc3Bvc2FibGUge1xyXG4gICAgaW1wb3J0TWVzaEFzeW5jOiAoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgY29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lPzogc3RyaW5nXHJcbiAgICApID0+IFByb21pc2U8SVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQ+O1xyXG4gICAgbG9hZEFzeW5jOiAoc2NlbmU6IFNjZW5lLCBkYXRhOiBJR0xURkxvYWRlckRhdGEsIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCwgZmlsZU5hbWU/OiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGRlZmF1bHQvaW1wbGljaXQgb3B0aW9ucyB0byBleHRlbnNpb24gc3BlY2lmaWMgb3B0aW9ucy5cclxuICovXHJcbnR5cGUgRGVmYXVsdEV4dGVuc2lvbk9wdGlvbnM8QmFzZUV4dGVuc2lvbk9wdGlvbnM+ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBleHRlbnNpb24gaXMgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcclxufSAmIEJhc2VFeHRlbnNpb25PcHRpb25zO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgYWxsIHRoZSBjb25jcmV0ZSAobm90IGFic3RyYWN0KSBnbFRGIG9wdGlvbnMsIGV4Y2x1ZGluZyBjYWxsYmFja3MuXHJcbiAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgY2xhc3MgaXMgdG8gbWFrZSBpdCBlYXN5IHRvIHByb3ZpZGUgYSB3YXkgdG8gbXV0YXRlIHRoZSBkZWZhdWx0XHJcbiAqIGxvYWRlciBvcHRpb25zIChzZWUgdGhlIEdMVEZMb2FkZXJEZWZhdWx0T3B0aW9ucyBpbnN0YW5jZSBiZWxvdykgd2l0aG91dCBkdXBsaWNhdGluZ1xyXG4gKiBhbGwgdGhlIG9wdGlvbnMgaW4geWV0IGFub3RoZXIgb2JqZWN0LiBTaW5jZSB0aGlzIGNsYXNzIGlzIGluc3RhbnRpYXRlZCBmb3IgdGhlIGRlZmF1bHRcclxuICogb3B0aW9ucyBvYmplY3QsIGFic3RyYWN0IHByb3BlcnRpZXMgYW5kIGNhbGxiYWNrcyBhcmUgbm90IGluY2x1ZGVkLCBpdCdzIG1vcmUganVzdFxyXG4gKiBmbGFnLXR5cGUgb3B0aW9ucy5cclxuICovXHJcbmNsYXNzIEdMVEZMb2FkZXJCYXNlT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGJveGVzIG9mIG1lc2hlcyBhbmQgbm90IHVzZSB0aGUgbWluL21heCB2YWx1ZXMgZnJvbSB0aGUgcG9zaXRpb24gYWNjZXNzb3IuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGFsd2F5cyBjb21wdXRlIHRoZSBuZWFyZXN0IGNvbW1vbiBhbmNlc3RvciBvZiB0aGUgc2tlbGV0b24gam9pbnRzIGluc3RlYWQgb2YgdXNpbmcgYHNraW4uc2tlbGV0b25gLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgbG9hZGluZyBhc3NldHMgd2l0aCBpbnZhbGlkIGBza2luLnNrZWxldG9uYCB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFuaW1hdGlvbiBzdGFydCBtb2RlLiBEZWZhdWx0cyB0byBGSVJTVC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXJ0TW9kZSA9IEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuRklSU1Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNvbXBpbGUgbWF0ZXJpYWxzIGJlZm9yZSByYWlzaW5nIHRoZSBzdWNjZXNzIGNhbGxiYWNrLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbXBpbGVNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY29tcGlsZSBzaGFkb3cgZ2VuZXJhdG9ycyBiZWZvcmUgcmFpc2luZyB0aGUgc3VjY2VzcyBjYWxsYmFjay4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb21waWxlU2hhZG93R2VuZXJhdG9ycyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUuIERlZmF1bHRzIHRvIEFVVE8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb29yZGluYXRlU3lzdGVtTW9kZSA9IEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZS5BVVRPO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjcmVhdGUgaW5zdGFuY2VzIHdoZW4gbXVsdGlwbGUgZ2xURiBub2RlcyBwb2ludCB0byB0aGUgc2FtZSBnbFRGIG1lc2guIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVJbnN0YW5jZXMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCBhbGwgbWF0ZXJpYWxzIGRlZmluZWQgaW4gdGhlIGZpbGUsIGV2ZW4gaWYgbm90IHVzZWQgYnkgYW55IG1lc2guIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFsbE1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBsb2FkIG1vcnBoIHRhcmdldHMuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTW9ycGhUYXJnZXRzID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgbG9hZCBub2RlIGFuaW1hdGlvbnMuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBOT1RFOiBUaGUgYW5pbWF0aW9uIG9mIHRoaXMgbm9kZSB3aWxsIHN0aWxsIGxvYWQgaWYgdGhlIG5vZGUgaXMgYWxzbyBhIGpvaW50IG9mIGEgc2tpbiBhbmQgYGxvYWRTa2luc2AgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWROb2RlQW5pbWF0aW9ucyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIG9ubHkgdGhlIG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRPbmx5TWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGxvYWQgc2tpbnMuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2tpbnMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgZG8gbm90IGxvYWQgYW55IG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNraXBNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gbG9hZGluZyBnbFRGIGFuaW1hdGlvbnMsIHdoaWNoIGFyZSBkZWZpbmVkIGluIHNlY29uZHMsIHRhcmdldCB0aGVtIHRvIHRoaXMgRlBTLiBEZWZhdWx0cyB0byA2MC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHRhcmdldEZwcyA9IDYwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgQWxwaGEgYmxlbmRlZCBtYXRlcmlhbHMgYXJlIG9ubHkgYXBwbGllZCBhcyBjb3ZlcmFnZS5cclxuICAgICAqIElmIGZhbHNlLCAoZGVmYXVsdCkgVGhlIGx1bWluYW5jZSBvZiBlYWNoIHBpeGVsIHdpbGwgcmVkdWNlIGl0cyBvcGFjaXR5IHRvIHNpbXVsYXRlIHRoZSBiZWhhdmlvdXIgb2YgbW9zdCBwaHlzaWNhbCBtYXRlcmlhbHMuXHJcbiAgICAgKiBJZiB0cnVlLCBubyBleHRyYSBlZmZlY3RzIGFyZSBhcHBsaWVkIHRvIHRyYW5zcGFyZW50IHBpeGVscy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWxzbyBjb21waWxlIG1hdGVyaWFscyB3aXRoIGNsaXAgcGxhbmVzLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZUNsaXBQbGFuZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgdGhlIGxvYWRlciB3aWxsIGRlcml2ZSB0aGUgbmFtZSBmb3IgQmFieWxvbiB0ZXh0dXJlcyBmcm9tIHRoZSBnbFRGIHRleHR1cmUgbmFtZSwgaW1hZ2UgbmFtZSwgb3IgaW1hZ2UgdXJsLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIE5vdGUgdGhhdCBpdCBpcyBwb3NzaWJsZSBmb3IgbXVsdGlwbGUgQmFieWxvbiB0ZXh0dXJlcyB0byBzaGFyZSB0aGUgc2FtZSBuYW1lIHdoZW4gdGhlIEJhYnlsb24gdGV4dHVyZXMgbG9hZCBmcm9tIHRoZSBzYW1lIGdsVEYgdGV4dHVyZSBvciBpbWFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZUdsdGZUZXh0dXJlTmFtZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgdXNlIHJhbmdlIHJlcXVlc3RzIHdoZW4gbG9hZCBiaW5hcnkgZ2xURiBmaWxlcyBmcm9tIEhUVFAuXHJcbiAgICAgKiBFbmFibGluZyB3aWxsIGRpc2FibGUgb2ZmbGluZSBzdXBwb3J0IGFuZCBnbFRGIHZhbGlkYXRvci5cclxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlUmFuZ2VSZXF1ZXN0cyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCB0aGUgY29sb3IgKGdhbW1hIGVuY29kZWQpIHRleHR1cmVzIGludG8gc1JHQiBidWZmZXJzIChpZiBzdXBwb3J0ZWQgYnkgdGhlIEdQVSksIHdoaWNoIHdpbGwgeWllbGQgbW9yZSBhY2N1cmF0ZSByZXN1bHRzIHdoZW4gc2FtcGxpbmcgdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VTUkdCQnVmZmVycyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIHZhbGlkYXRlIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbGlkYXRlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBnbFRGIGZpbGVzIHVzaW5nIHRoZSBPcGVuUEJSIG1hdGVyaWFsLlxyXG4gICAgICogQGV4cGVyaW1lbnRhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlT3BlblBCUiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgdGhlIGxvYWRlciB3aWxsIG5vdCB1c2UgdGhlIHRyYW5zbWlzc2lvbiBoZWxwZXIgd2hlbiBsb2FkaW5nIG1hdGVyaWFscyB3aXRoIHRyYW5zbWlzc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvbnRVc2VUcmFuc21pc3Npb25IZWxwZXIgPSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IEdMVEYgbG9hZGVyIG9wdGlvbnMuXHJcbiAqIE92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHRvIGdsb2JhbGx5IGNoYW5nZSB0aGUgZGVmYXVsdCBsb2FkZXIgb3B0aW9ucy5cclxuICogVG8gc3BlY2lmeSBvcHRpb25zIGZvciBhIHNwZWNpZmljIGxvYWQgY2FsbCwgcGFzcyB0aG9zZSBvcHRpb25zIGludG8gdGhlIGFzc29jaWF0ZWQgbG9hZCBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBHTFRGTG9hZGVyRGVmYXVsdE9wdGlvbnMgPSBuZXcgR0xURkxvYWRlckJhc2VPcHRpb25zKCk7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBHTFRGTG9hZGVyT3B0aW9ucyBleHRlbmRzIEdMVEZMb2FkZXJCYXNlT3B0aW9ucyB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFieWxvbmpzL2F2YWlsYWJsZVxyXG4gICAgcHJvdGVjdGVkIGNvcHlGcm9tKG9wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PEdMVEZMb2FkZXJPcHRpb25zPj4pIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCA9IG9wdGlvbnMuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID8/IHRoaXMuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94O1xyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlID0gb3B0aW9ucy5hbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSA/PyB0aGlzLmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0TW9kZSA9IG9wdGlvbnMuYW5pbWF0aW9uU3RhcnRNb2RlID8/IHRoaXMuYW5pbWF0aW9uU3RhcnRNb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzID0gb3B0aW9ucy5jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA/PyB0aGlzLmNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVNYXRlcmlhbHMgPSBvcHRpb25zLmNvbXBpbGVNYXRlcmlhbHMgPz8gdGhpcy5jb21waWxlTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzID0gb3B0aW9ucy5jb21waWxlU2hhZG93R2VuZXJhdG9ycyA/PyB0aGlzLmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzO1xyXG4gICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVTeXN0ZW1Nb2RlID0gb3B0aW9ucy5jb29yZGluYXRlU3lzdGVtTW9kZSA/PyB0aGlzLmNvb3JkaW5hdGVTeXN0ZW1Nb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluc3RhbmNlcyA9IG9wdGlvbnMuY3JlYXRlSW5zdGFuY2VzID8/IHRoaXMuY3JlYXRlSW5zdGFuY2VzO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVJvb3ROb2RlID0gb3B0aW9ucy5jdXN0b21Sb290Tm9kZTtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25PcHRpb25zID0gb3B0aW9ucy5leHRlbnNpb25PcHRpb25zID8/IHRoaXMuZXh0ZW5zaW9uT3B0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5sb2FkQWxsTWF0ZXJpYWxzID0gb3B0aW9ucy5sb2FkQWxsTWF0ZXJpYWxzID8/IHRoaXMubG9hZEFsbE1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy5sb2FkTW9ycGhUYXJnZXRzID0gb3B0aW9ucy5sb2FkTW9ycGhUYXJnZXRzID8/IHRoaXMubG9hZE1vcnBoVGFyZ2V0cztcclxuICAgICAgICAgICAgdGhpcy5sb2FkTm9kZUFuaW1hdGlvbnMgPSBvcHRpb25zLmxvYWROb2RlQW5pbWF0aW9ucyA/PyB0aGlzLmxvYWROb2RlQW5pbWF0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5sb2FkT25seU1hdGVyaWFscyA9IG9wdGlvbnMubG9hZE9ubHlNYXRlcmlhbHMgPz8gdGhpcy5sb2FkT25seU1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2tpbnMgPSBvcHRpb25zLmxvYWRTa2lucyA/PyB0aGlzLmxvYWRTa2lucztcclxuICAgICAgICAgICAgdGhpcy5sb2dnaW5nRW5hYmxlZCA9IG9wdGlvbnMubG9nZ2luZ0VuYWJsZWQgPz8gdGhpcy5sb2dnaW5nRW5hYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5vbkNhbWVyYUxvYWRlZCA9IG9wdGlvbnMub25DYW1lcmFMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZCA9IG9wdGlvbnMub25NYXRlcmlhbExvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWQgPSBvcHRpb25zLm9uTWVzaExvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZCA9IG9wdGlvbnMub25QYXJzZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25Ta2luTG9hZGVkID0gb3B0aW9ucy5vblNraW5Mb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkID0gb3B0aW9ucy5vblRleHR1cmVMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWQgPSBvcHRpb25zLm9uVmFsaWRhdGVkO1xyXG4gICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NVcmxBc3luYyA9IG9wdGlvbnMucHJlcHJvY2Vzc1VybEFzeW5jID8/IHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jO1xyXG4gICAgICAgICAgICB0aGlzLnNraXBNYXRlcmlhbHMgPSBvcHRpb25zLnNraXBNYXRlcmlhbHMgPz8gdGhpcy5za2lwTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEZwcyA9IG9wdGlvbnMudGFyZ2V0RnBzID8/IHRoaXMudGFyZ2V0RnBzO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPSBvcHRpb25zLnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPz8gdGhpcy50cmFuc3BhcmVuY3lBc0NvdmVyYWdlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUNsaXBQbGFuZSA9IG9wdGlvbnMudXNlQ2xpcFBsYW5lID8/IHRoaXMudXNlQ2xpcFBsYW5lO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUdsdGZUZXh0dXJlTmFtZXMgPSBvcHRpb25zLnVzZUdsdGZUZXh0dXJlTmFtZXMgPz8gdGhpcy51c2VHbHRmVGV4dHVyZU5hbWVzO1xyXG4gICAgICAgICAgICB0aGlzLnVzZU9wZW5QQlIgPSBvcHRpb25zLnVzZU9wZW5QQlIgPz8gdGhpcy51c2VPcGVuUEJSO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVJhbmdlUmVxdWVzdHMgPSBvcHRpb25zLnVzZVJhbmdlUmVxdWVzdHMgPz8gdGhpcy51c2VSYW5nZVJlcXVlc3RzO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVNSR0JCdWZmZXJzID0gb3B0aW9ucy51c2VTUkdCQnVmZmVycyA/PyB0aGlzLnVzZVNSR0JCdWZmZXJzO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlID0gb3B0aW9ucy52YWxpZGF0ZSA/PyB0aGlzLnZhbGlkYXRlO1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRVc2VUcmFuc21pc3Npb25IZWxwZXIgPSBvcHRpb25zLmRvbnRVc2VUcmFuc21pc3Npb25IZWxwZXIgPz8gdGhpcy5kb250VXNlVHJhbnNtaXNzaW9uSGVscGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvblBhcnNlZD86ICgobG9hZGVyRGF0YTogSUdMVEZMb2FkZXJEYXRhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcbiAgICAvLyBWMiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNhcHR1cmUgcGVyZm9ybWFuY2UgY291bnRlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVyczogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIG5vZGUgdG8gdXNlIGFzIHRoZSByb290IG9mIHRoZSBoaWVyYXJjaHkgd2hlbiBsb2FkaW5nIHRoZSBzY2VuZSAoZGVmYXVsdDogdW5kZWZpbmVkKS4gSWYgbm90IGRlZmluZWQsIGEgcm9vdCBub2RlIHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkLlxyXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgbnVsbCBpZiB5b3UgZG9uJ3Qgd2FudCBhIHJvb3Qgbm9kZSB0byBiZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VzdG9tUm9vdE5vZGU/OiBOdWxsYWJsZTxUcmFuc2Zvcm1Ob2RlPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgZ2xURiBleHRlbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXh0ZW5zaW9uT3B0aW9uczoge1xyXG4gICAgICAgIC8vIE5PVEU6IFRoaXMgdHlwZSBpcyBkb2luZyB0d28gdGhpbmdzOlxyXG4gICAgICAgIC8vIDEuIEFkZGluZyBhbiBpbXBsaWNpdCAnZW5hYmxlZCcgcHJvcGVydHkgdG8gdGhlIG9wdGlvbnMgZm9yIGVhY2ggZXh0ZW5zaW9uLlxyXG4gICAgICAgIC8vIDIuIENyZWF0aW5nIGEgbWFwcGVkIHR5cGUgb2YgYWxsIHRoZSBvcHRpb25zIG9mIGFsbCB0aGUgZXh0ZW5zaW9ucyB0byBtYWtlIGl0IGp1c3QgbG9vayBsaWtlIGEgY29uc29saWRhdGVkIHBsYWluIG9iamVjdCBpbiBpbnRlbGxpc2Vuc2UgZm9yIHRoZSB1c2VyLlxyXG4gICAgICAgIFtFeHRlbnNpb24gaW4ga2V5b2YgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnNdPzoge1xyXG4gICAgICAgICAgICBbT3B0aW9uIGluIGtleW9mIERlZmF1bHRFeHRlbnNpb25PcHRpb25zPEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zW0V4dGVuc2lvbl0+XTogRGVmYXVsdEV4dGVuc2lvbk9wdGlvbnM8R0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnNbRXh0ZW5zaW9uXT5bT3B0aW9uXTtcclxuICAgICAgICB9O1xyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgZW5hYmxlIGxvZ2dpbmcgZm9yIHRoZSBsb2FkZXIuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgbG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkNhbWVyYUxvYWRlZD86IChjYW1lcmE6IENhbWVyYSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbk1hdGVyaWFsTG9hZGVkPzogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25NZXNoTG9hZGVkPzogKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvblNraW5Mb2FkZWQ/OiAobm9kZTogVHJhbnNmb3JtTm9kZSwgc2tpbm5lZE5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSB0ZXh0dXJlIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uVGV4dHVyZUxvYWRlZD86ICh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciB0aGUgYXNzZXQgaXMgdmFsaWRhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25WYWxpZGF0ZWQ/OiAocmVzdWx0czogR0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cykgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBhIHVybCByZWZlcmVuY2VkIGJ5IHRoZSBhc3NldC5cclxuICAgICAqIEBwYXJhbSB1cmwgdXJsIHJlZmVyZW5jZWQgYnkgdGhlIGFzc2V0XHJcbiAgICAgKiBAcmV0dXJucyBBc3luYyB1cmwgdG8gbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybDogc3RyaW5nKSA9PiBQcm9taXNlLnJlc29sdmUodXJsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGUgbG9hZGVyIGZvciBsb2FkaW5nIGdsVEYgZmlsZXMgaW50byBhIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZGaWxlTG9hZGVyIGV4dGVuZHMgR0xURkxvYWRlck9wdGlvbnMgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSwgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3Rvcnkge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlR0xURjFMb2FkZXI6IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVHTFRGMkxvYWRlcjogKHBhcmVudDogR0xURkZpbGVMb2FkZXIpID0+IElHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBnbFRGIGZpbGUgbG9hZGVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBsb2FkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PEdMVEZMb2FkZXJPcHRpb25zPj4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29weUZyb20oT2JqZWN0LmFzc2lnbih7IC4uLkdMVEZMb2FkZXJEZWZhdWx0T3B0aW9ucyB9LCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEJlZ2luIENvbW1vbiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25QYXJzZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUdMVEZMb2FkZXJEYXRhPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uUGFyc2VkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPElHTFRGTG9hZGVyRGF0YT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uUGFyc2VkKGNhbGxiYWNrOiAoKGxvYWRlckRhdGE6IElHTFRGTG9hZGVyRGF0YSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25QYXJzZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25QYXJzZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblBhcnNlZE9ic2VydmVyID0gdGhpcy5vblBhcnNlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBFbmQgQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEJlZ2luIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIGZhbHNlIHRvIGRpc2FibGUgaW5jcmVtZW50YWwgbG9hZGluZyB3aGljaCBkZWxheXMgdGhlIGxvYWRlciBmcm9tIGNhbGxpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdW50aWwgYWZ0ZXIgbG9hZGluZyB0aGUgbWVzaGVzIGFuZCBzaGFkZXJzLlxyXG4gICAgICogVGV4dHVyZXMgYWx3YXlzIGxvYWRzIGFzeW5jaHJvbm91c2x5LiBGb3IgZXhhbXBsZSwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgY2FuIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBsb2FkZWQgbWVzaGVzIHdoZW4gaW5jcmVtZW50YWwgbG9hZGluZyBpcyBkaXNhYmxlZC5cclxuICAgICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbmNyZW1lbnRhbExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBpbiBvcmRlciB0byB3b3JrIHdpdGggaG9tb2dlbmVvdXMgY29vcmRpbmF0ZXMsIGF2YWlsYWJsZSB3aXRoIHNvbWUgY29udmVydGVycyBhbmQgZXhwb3J0ZXJzLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21vZ2VuZW91c19jb29yZGluYXRlcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhvbW9nZW5lb3VzQ29vcmRpbmF0ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRW5kIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBvYnNlcnZhYmxlIGlzIHJhaXNlZCBhcyBzb29uIGFzIHRoZSBtZXNoIG9iamVjdCBpcyBjcmVhdGVkLCBtZWFuaW5nIHNvbWUgZGF0YSBtYXkgbm90IGhhdmUgYmVlbiBzZXR1cCB5ZXQgZm9yIHRoaXMgbWVzaCAodmVydGV4IGRhdGEsIG1vcnBoIHRhcmdldHMsIG1hdGVyaWFsLCAuLi4pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1lc2hMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QWJzdHJhY3RNZXNoPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWVzaExvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxBYnN0cmFjdE1lc2g+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uTWVzaExvYWRlZChjYWxsYmFjazogKChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTWVzaExvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uTWVzaExvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKiBAcGFyYW0gbm9kZSAtIHRoZSB0cmFuc2Zvcm0gbm9kZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBvcmlnaW5hbCBnbFRGIHNraW4gbm9kZSB1c2VkIGZvciBhbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gc2tpbm5lZE5vZGUgLSB0aGUgdHJhbnNmb3JtIG5vZGUgdGhhdCBpcyB0aGUgc2tpbm5lZCBtZXNoIGl0c2VsZiBvciB0aGUgcGFyZW50IG9mIHRoZSBza2lubmVkIG1lc2hlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25Ta2luTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHsgbm9kZTogVHJhbnNmb3JtTm9kZTsgc2tpbm5lZE5vZGU6IFRyYW5zZm9ybU5vZGUgfT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblNraW5Mb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8eyBub2RlOiBUcmFuc2Zvcm1Ob2RlOyBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBza2luIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgc2tpbiBub2RlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvaW1wb3J0ZXJzL2dsVEYvZ2xURlNraW5uaW5nI2lnbm9yaW5nLXRoZS10cmFuc2Zvcm0tb2YtdGhlLXNraW5uZWQtbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uU2tpbkxvYWRlZChjYWxsYmFjazogKChub2RlOiBUcmFuc2Zvcm1Ob2RlLCBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Ta2luTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNraW5Mb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlciA9IHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKGRhdGEpID0+IGNhbGxiYWNrKGRhdGEubm9kZSwgZGF0YS5za2lubmVkTm9kZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QmFzZVRleHR1cmU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEJhc2VUZXh0dXJlPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSB0ZXh0dXJlIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvblRleHR1cmVMb2FkZWQoY2FsbGJhY2s6ICgodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8TWF0ZXJpYWw+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NYXRlcmlhbExvYWRlZChjYWxsYmFjazogKChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Q2FtZXJhPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPENhbWVyYT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uQ2FtZXJhTG9hZGVkKGNhbGxiYWNrOiAoKGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aCBMT0RzLCByYWlzZWQgd2hlbiBhbGwgb2YgdGhlIExPRHMgYXJlIGNvbXBsZXRlLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRob3V0IExPRHMsIHJhaXNlZCB3aGVuIHRoZSBtb2RlbCBpcyBjb21wbGV0ZSwgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGxvYWRlciByZXNvbHZlcyB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uQ29tcGxldGVPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkNvbXBsZXRlT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPHZvaWQ+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGggTE9EcywgcmFpc2VkIHdoZW4gYWxsIG9mIHRoZSBMT0RzIGFyZSBjb21wbGV0ZS5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aG91dCBMT0RzLCByYWlzZWQgd2hlbiB0aGUgbW9kZWwgaXMgY29tcGxldGUsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsb2FkZXIgcmVzb2x2ZXMgdGhlIHJldHVybmVkIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25Db21wbGV0ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25Db21wbGV0ZU9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZU9ic2VydmVyID0gdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkVycm9yT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkVycm9yT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uRXJyb3IoY2FsbGJhY2s6IChyZWFzb246IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkVycm9yT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25FcnJvck9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25FcnJvck9ic2VydmVyID0gdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRGlzcG9zZU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRGlzcG9zZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkRpc3Bvc2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRGlzcG9zZU9ic2VydmVyID0gdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqIFNldCBhZGRpdGlvbmFsIG9wdGlvbnMgZm9yIGEgbG9hZGVyIGV4dGVuc2lvbiBpbiB0aGlzIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUdMVEZMb2FkZXJFeHRlbnNpb24+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJFeHRlbnNpb24+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkV4dGVuc2lvbkxvYWRlZChjYWxsYmFjazogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIGxvZ2dpbmcgaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsb2dnaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2dnaW5nRW5hYmxlZCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ0VuYWJsZWQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2dpbmdFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IHRoaXMuX2xvZ0VuYWJsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nID0gdGhpcy5fbG9nRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjYXB0dXJlIHBlcmZvcm1hbmNlIGNvdW50ZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdGUgaXMgc2V0IHRvIHRydWUuIFRoZSBldmVudCBkYXRhIGlzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblZhbGlkYXRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVmFsaWRhdGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciB0aGUgYXNzZXQgaXMgdmFsaWRhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uVmFsaWRhdGVkKGNhbGxiYWNrOiAocmVzdWx0czogR0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cykgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25WYWxpZGF0ZWRPYnNlcnZlciA9IHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBOdWxsYWJsZTxJR0xURkxvYWRlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NDYWxsYmFjaz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgX3JlcXVlc3RzID0gbmV3IEFycmF5PElGaWxlUmVxdWVzdEluZm8+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2FkZXIgKFwiZ2x0ZlwiKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXh0ZW5zaW9ucyA9IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBsb2FkZXIsIHJlbGVhc2VzIHJlc291cmNlcyBkdXJpbmcgbG9hZCwgYW5kIGNhbmNlbHMgYW55IG91dHN0YW5kaW5nIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybCkgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXY6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgdXNlQXJyYXlCdWZmZXI/OiBib29sZWFuLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgbmFtZT86IHN0cmluZ1xyXG4gICAgKTogTnVsbGFibGU8SUZpbGVSZXF1ZXN0PiB7XHJcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhmaWxlT3JVcmwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCaW5hcnkoc2NlbmUsIGZpbGVPclVybCwgcm9vdFVybCwgb25TdWNjZXNzLCBvbkVycm9yLCBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrID0gb25Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSAoZmlsZU9yVXJsIGFzIEZpbGUpLm5hbWUgfHwgVG9vbHMuR2V0RmlsZW5hbWUoZmlsZU9yVXJsIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSYW5nZVJlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiZ2xURiB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiByYW5nZSByZXF1ZXN0cyBhcmUgZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVxdWVzdDogSUZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT2JzZXJ2YWJsZTogbmV3IE9ic2VydmFibGU8SUZpbGVSZXF1ZXN0PigpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQnVmZmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2ViUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLCBgYnl0ZXM9JHtieXRlT2Zmc2V0fS0ke2J5dGVPZmZzZXQgKyBieXRlTGVuZ3RoIC0gMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IDAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKG5ldyBEYXRhUmVhZGVyKGRhdGFCdWZmZXIpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhmaWxlUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhsb2FkZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVSZXF1ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIsIDAsIChkYXRhIGFzIEFycmF5QnVmZmVyKS5ieXRlTGVuZ3RoKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICBmaWxlT3JVcmwsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBkYXRhIGFzIHN0cmluZywgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoeyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YSBhcyBzdHJpbmcpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQmluYXJ5KFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpLCByb290VXJsLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMoXHJcbiAgICAgICAgICAgIG5ldyBEYXRhUmVhZGVyKHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRWaWV3QXN5bmMoZGF0YSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAobG9hZGVyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yID8gKGVycm9yKSA9PiBvbkVycm9yKHVuZGVmaW5lZCwgZXJyb3IpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9nKGBMb2FkaW5nICR7ZmlsZU5hbWUgfHwgXCJcIn1gKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyID0gdGhpcy5fZ2V0TG9hZGVyKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmltcG9ydE1lc2hBc3luYyhtZXNoZXNOYW1lcywgc2NlbmUsIG51bGwsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZEFzeW5jKHNjZW5lLCBkYXRhLCByb290VXJsLCBvblByb2dyZXNzLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3NldENvbnRhaW5lckFzeW5jKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEFzc2V0Q29udGFpbmVyKHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBtYXRlcmlhbHMvdGV4dHVyZXMgd2hlbiBsb2FkaW5nIHRvIGFkZCB0byBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzOiBBcnJheTxNYXRlcmlhbD4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlczogQXJyYXk8QmFzZVRleHR1cmU+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVzLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFzOiBBcnJheTxDYW1lcmE+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZCgoY2FtZXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFzLnB1c2goY2FtZXJhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXJzOiBBcnJheTxNb3JwaFRhcmdldE1hbmFnZXI+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcnMucHVzaChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5pbXBvcnRNZXNoQXN5bmMobnVsbCwgc2NlbmUsIGNvbnRhaW5lciwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmdlb21ldHJpZXMsIHJlc3VsdC5nZW9tZXRyaWVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tZXNoZXMsIHJlc3VsdC5tZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnBhcnRpY2xlU3lzdGVtcywgcmVzdWx0LnBhcnRpY2xlU3lzdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuc2tlbGV0b25zLCByZXN1bHQuc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5hbmltYXRpb25Hcm91cHMsIHJlc3VsdC5hbmltYXRpb25Hcm91cHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1hdGVyaWFscywgbWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci50ZXh0dXJlcywgdGV4dHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmxpZ2h0cywgcmVzdWx0LmxpZ2h0cyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudHJhbnNmb3JtTm9kZXMsIHJlc3VsdC50cmFuc2Zvcm1Ob2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuY2FtZXJhcywgY2FtZXJhcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2VycywgbW9ycGhUYXJnZXRNYW5hZ2Vycyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuRGlyZWN0TG9hZChkYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR0xURkZpbGVMb2FkZXJNZXRhZGF0YS5jYW5EaXJlY3RMb2FkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXJlY3RMb2FkKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImJhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8IC8vIHRoaXMgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LCBidXQgd2lsbCBjb250aW51ZSB0byBzdXBwb3J0IGZvciBiYWNrY29tcGF0LlxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCI7YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcIm1vZGVsL2dsdGYtYmluYXJ5O2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIDAsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGFSZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRBc3luYyhhcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjYWxsYmFjayB0aGF0IGFsbG93cyBjdXN0b20gaGFuZGxpbmcgb2YgdGhlIHJvb3QgdXJsIGJhc2VkIG9uIHRoZSByZXNwb25zZSB1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCB0aGUgb3JpZ2luYWwgcm9vdCB1cmxcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVVSTCB0aGUgcmVzcG9uc2UgdXJsIGlmIGF2YWlsYWJsZVxyXG4gICAgICogQHJldHVybnMgdGhlIG5ldyByb290IHVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3cml0ZVJvb3RVUkw/KHJvb3RVcmw6IHN0cmluZywgcmVzcG9uc2VVUkw/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBsdWdpbihvcHRpb25zOiBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMpOiBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTFRGRmlsZUxvYWRlcihvcHRpb25zW0dMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxvYWRlciBzdGF0ZSBvciBudWxsIGlmIHRoZSBsb2FkZXIgaXMgbm90IGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2FkZXJTdGF0ZSgpOiBOdWxsYWJsZTxHTFRGTG9hZGVyU3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgc3RhdGUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uTG9hZGVyU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aGVuQ29tcGxldGVBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGRPbmNlKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldFN0YXRlKHN0YXRlOiBHTFRGTG9hZGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlclN0YXRlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9sb2coR0xURkxvYWRlclN0YXRlW3RoaXMuX3N0YXRlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkRmlsZShcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVzZUFycmF5QnVmZmVyPzogYm9vbGVhbixcclxuICAgICAgICBvbkVycm9yPzogKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uT3BlbmVkPzogKHJlcXVlc3Q6IFdlYlJlcXVlc3QpID0+IHZvaWRcclxuICAgICk6IElGaWxlUmVxdWVzdCB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNjZW5lLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgZmlsZU9yVXJsLFxyXG4gICAgICAgICAgICBvblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Qcm9ncmVzcyhldmVudCwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIHVzZUFycmF5QnVmZmVyLFxyXG4gICAgICAgICAgICBvbkVycm9yLFxyXG4gICAgICAgICAgICBvbk9wZW5lZFxyXG4gICAgICAgICkgYXMgSUZpbGVSZXF1ZXN0SW5mbztcclxuICAgICAgICByZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBsZW5ndGggY29tcHV0YWJsZSB0byBiZSB0cnVlIHNpbmNlIHdlIGNhbiBndWFyYW50ZWUgdGhlIGRhdGEgaXMgbG9hZGVkLlxyXG4gICAgICAgICAgICByZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVxdWVzdC5fdG90YWwgPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblByb2dyZXNzKGV2ZW50OiBQcm9ncmVzc0V2ZW50LCByZXF1ZXN0OiBJRmlsZVJlcXVlc3RJbmZvKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlO1xyXG4gICAgICAgIHJlcXVlc3QuX2xvYWRlZCA9IGV2ZW50LmxvYWRlZDtcclxuICAgICAgICByZXF1ZXN0Ll90b3RhbCA9IGV2ZW50LnRvdGFsO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoQ29tcHV0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxvYWRlZCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll9sb2FkZWQgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll90b3RhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlICYmIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGU7XHJcbiAgICAgICAgICAgIGxvYWRlZCArPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHJlcXVlc3QuX3RvdGFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjayh7XHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGxlbmd0aENvbXB1dGFibGUsXHJcbiAgICAgICAgICAgIGxvYWRlZDogbG9hZGVkLFxyXG4gICAgICAgICAgICB0b3RhbDogbGVuZ3RoQ29tcHV0YWJsZSA/IHRvdGFsIDogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZShzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksIHJvb3RVcmwgPSBcIlwiLCBmaWxlTmFtZSA9IFwiXCIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgIEdMVEZWYWxpZGF0aW9uLlZhbGlkYXRlQXN5bmMoZGF0YSwgcm9vdFVybCwgZmlsZU5hbWUsICh1cmkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jKHJvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjZW5lLl9sb2FkRmlsZUFzeW5jKHVybCwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEsIDAsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEZhaWxlZCB0byB2YWxpZGF0ZTogJHtyZWFzb24ubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExvYWRlcihsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpOiBJR0xURkxvYWRlciB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSAoPGFueT5sb2FkZXJEYXRhLmpzb24pLmFzc2V0IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2coYEFzc2V0IHZlcnNpb246ICR7YXNzZXQudmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5taW5WZXJzaW9uICYmIHRoaXMuX2xvZyhgQXNzZXQgbWluaW11bSB2ZXJzaW9uOiAke2Fzc2V0Lm1pblZlcnNpb259YCk7XHJcbiAgICAgICAgYXNzZXQuZ2VuZXJhdG9yICYmIHRoaXMuX2xvZyhgQXNzZXQgZ2VuZXJhdG9yOiAke2Fzc2V0LmdlbmVyYXRvcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3NldC5taW5WZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmICghbWluVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5fY29tcGFyZVZlcnNpb24obWluVmVyc2lvbiwgeyBtYWpvcjogMiwgbWlub3I6IDAgfSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvbXBhdGlibGUgbWluaW11bSB2ZXJzaW9uOiBcIiArIGFzc2V0Lm1pblZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXJzOiB7IFtrZXk6IG51bWJlcl06IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlciB9ID0ge1xyXG4gICAgICAgICAgICAxOiBHTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIsXHJcbiAgICAgICAgICAgIDI6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXIgPSBjcmVhdGVMb2FkZXJzW3ZlcnNpb24ubWFqb3JdO1xyXG4gICAgICAgIGlmICghY3JlYXRlTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9hZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlSnNvbihqc29uOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICB0aGlzLl9sb2coYEpTT04gbGVuZ3RoOiAke2pzb24ubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBtYWdpYyArIHZlcnNpb24gKyBsZW5ndGggKyBqc29uIGxlbmd0aCArIGpzb24gZm9ybWF0XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDIwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQmluYXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgTWFnaWM6IDB4NDY1NDZjNjcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWdpYyA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICBpZiAobWFnaWMgIT09IEJpbmFyeS5NYWdpYykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcIlVuZXhwZWN0ZWQgbWFnaWM6IFwiICsgbWFnaWMsIEVycm9yQ29kZXMuR0xURkxvYWRlclVuZXhwZWN0ZWRNYWdpY0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZyhgQmluYXJ5IHZlcnNpb246ICR7dmVyc2lvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VSYW5nZVJlcXVlc3RzICYmIGxlbmd0aCAhPT0gZGF0YVJlYWRlci5idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYExlbmd0aCBpbiBoZWFkZXIgZG9lcyBub3QgbWF0Y2ggYWN0dWFsIGRhdGEgbGVuZ3RoOiAke2xlbmd0aH0gIT0gJHtkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5wYWNrZWQ6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPjtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZCA9IHRoaXMuX3VucGFja0JpbmFyeVYxQXN5bmMoZGF0YVJlYWRlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIlVucGFjayBCaW5hcnlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdW5wYWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ29udGVudEZvcm1hdCA9IHtcclxuICAgICAgICAgICAgSlNPTjogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEZvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudEZvcm1hdCAhPT0gQ29udGVudEZvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjb250ZW50IGZvcm1hdDogJHtjb250ZW50Rm9ybWF0fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUxlbmd0aCA9IGxlbmd0aCAtIGRhdGFSZWFkZXIuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNvbnRlbnRMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgaWYgKGJvZHlMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGJvZHlMZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeVYyQXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlciwgbGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IENodW5rRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAweDRlNGY1MzRhLFxyXG4gICAgICAgICAgICBCSU46IDB4MDA0ZTQ5NDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBoZWFkZXIuXHJcbiAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGlmIChjaHVua0Zvcm1hdCAhPT0gQ2h1bmtGb3JtYXQuSlNPTikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBjaHVuayBmb3JtYXQgaXMgbm90IEpTT05cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCYWlsIGlmIHRoZXJlIGFyZSBubyBvdGhlciBjaHVua3MuXHJcbiAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKGNodW5rTGVuZ3RoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBhbmQgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgbmV4dCBjaHVuay5cclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGggKyA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNodW5rTGVuZ3RoKSksIGJpbjogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZEFzeW5jID0gKCk6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtGb3JtYXQgPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNodW5rRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5KU09OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgSlNPTiBjaHVua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5CSU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGNodW5rTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB1bnJlY29nbml6ZWQgY2h1bmtGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJlYWRlci5za2lwQnl0ZXMoY2h1bmtMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDgpLnRoZW4ocmVhZEFzeW5jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRBc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKTogTnVsbGFibGU8eyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAodmVyc2lvbiA9PT0gXCIxLjBcIiB8fCB2ZXJzaW9uID09PSBcIjEuMC4xXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ham9yOiAxLFxyXG4gICAgICAgICAgICAgICAgbWlub3I6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9ICh2ZXJzaW9uICsgXCJcIikubWF0Y2goL14oXFxkKylcXC4oXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9jb21wYXJlVmVyc2lvbihhOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSwgYjogeyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhLm1ham9yID4gYi5tYWpvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPCBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWlub3IgPiBiLm1pbm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA8IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nU3BhY2VzID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xyXG4gICAgcHJpdmF0ZSBfbG9nSW5kZW50TGV2ZWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSW5kZW50TGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIC0tdGhpcy5fbG9nSW5kZW50TGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nRW5hYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSBHTFRGRmlsZUxvYWRlci5fbG9nU3BhY2VzLnN1YnN0cmluZygwLCB0aGlzLl9sb2dJbmRlbnRMZXZlbCAqIDIpO1xyXG4gICAgICAgIExvZ2dlci5Mb2coYCR7c3BhY2VzfSR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dEaXNhYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVG9vbHMuU3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5FbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuXHJcblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IEdMVEZGaWxlTG9hZGVyKCkpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBnaXRodWIvbm8tdGhlbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG5pbXBvcnQgdHlwZSAqIGFzIEdMVEYyIGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgbGV0IEdMVEZWYWxpZGF0b3I6IEdMVEYyLklHTFRGVmFsaWRhdG9yO1xyXG5cclxuLy8gV29ya2VyR2xvYmFsU2NvcGVcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZTogYW55LCB0cmFuc2Zlcj86IGFueVtdKTogdm9pZDtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQXN5bmMoXHJcbiAgICBkYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5LFxyXG4gICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIGdldEV4dGVybmFsUmVzb3VyY2U6ICh1cmk6IHN0cmluZykgPT4gUHJvbWlzZTxVaW50OEFycmF5PlxyXG4pOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IEdMVEYyLklHTFRGVmFsaWRhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgZXh0ZXJuYWxSZXNvdXJjZUZ1bmN0aW9uOiBnZXRFeHRlcm5hbFJlc291cmNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUpIHtcclxuICAgICAgICBvcHRpb25zLnVyaSA9IHJvb3RVcmwgPT09IFwiZmlsZTpcIiA/IGZpbGVOYW1lIDogcm9vdFVybCArIGZpbGVOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlQnl0ZXMoZGF0YSwgb3B0aW9ucykgOiBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlU3RyaW5nKGRhdGEsIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0aGF0IGdldHMgY29udmVydGVkIHRvIGEgYmxvYiB1cmwgdG8gcGFzcyBpbnRvIGEgd29ya2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gV29ya2VyRnVuYygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlczogQXJyYXk8eyByZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZCB9PiA9IFtdO1xyXG5cclxuICAgIG9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhkYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidmFsaWRhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdGVBc3luYyhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHVyaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2VcIiwgaW5kZXg6IGluZGV4LCB1cmk6IHVyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZXNvbHZlXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZWplY3RcIiwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBnbFRGIHZhbGlkYXRpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgdGhlIGdsVEYgdmFsaWRhdG9yLlxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZWYWxpZGF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24uIERlZmF1bHRzIHRvIGB7IHVybDogXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2dsdGZfdmFsaWRhdG9yLmpzXCIgfWAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlndXJhdGlvbjogSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgICB1cmw6IGAke1Rvb2xzLl9EZWZhdWx0Q2RuVXJsfS9nbHRmX3ZhbGlkYXRvci5qc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkU2NyaXB0UHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIGEgZ2xURiBhc3NldCB1c2luZyB0aGUgZ2xURi1WYWxpZGF0b3IuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgSlNPTiBvZiBhIGdsVEYgb3IgdGhlIGFycmF5IGJ1ZmZlciBvZiBhIGJpbmFyeSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHRoZSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgVGhlIGZpbGUgbmFtZSBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBnZXRFeHRlcm5hbFJlc291cmNlIFRoZSBjYWxsYmFjayB0byBnZXQgZXh0ZXJuYWwgcmVzb3VyY2VzIGZvciB0aGUgZ2xURiB2YWxpZGF0b3JcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGdsVEYgdmFsaWRhdGlvbiByZXN1bHRzIG9uY2UgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWYWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZTogKHVyaTogc3RyaW5nKSA9PiBQcm9taXNlPFVpbnQ4QXJyYXk+XHJcbiAgICApOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJDb250ZW50ID0gYCR7VmFsaWRhdGVBc3luY30oJHtXb3JrZXJGdW5jfSkoKWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJCbG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbd29ya2VyQ29udGVudF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIgfSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJCbG9iVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yOiBFcnJvckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdldEV4dGVybmFsUmVzb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZShkYXRhLnVyaSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZXNvbHZlXCIsIGluZGV4OiBkYXRhLmluZGV4LCB2YWx1ZTogdmFsdWUgfSwgW3ZhbHVlLmJ1ZmZlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiLCBpbmRleDogZGF0YS5pbmRleCwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZXNvbHZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRhdGUucmVqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImluaXRcIiwgdXJsOiBUb29scy5HZXRCYWJ5bG9uU2NyaXB0VVJMKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTbGljZSB0aGUgZGF0YSB0byBhdm9pZCBjb3B5aW5nIHRoZSB3aG9sZSBhcnJheSBidWZmZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VkRGF0YSA9IGRhdGEuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZVwiLCBkYXRhOiBzbGljZWREYXRhLCByb290VXJsOiByb290VXJsLCBmaWxlTmFtZTogZmlsZU5hbWUgfSwgW3NsaWNlZERhdGEuYnVmZmVyXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlXCIsIGRhdGE6IGRhdGEsIHJvb3RVcmw6IHJvb3RVcmwsIGZpbGVOYW1lOiBmaWxlTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9Mb2FkU2NyaXB0UHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fTG9hZFNjcmlwdFByb21pc2UgPSBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fTG9hZFNjcmlwdFByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGVBc3luYyhkYXRhLCByb290VXJsLCBmaWxlTmFtZSwgZ2V0RXh0ZXJuYWxSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9